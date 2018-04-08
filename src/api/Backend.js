import axios from 'axios'

export const BASE_URI = 'http://home.totruok.ru:44414';
const STATUS_PROCESSING = 'busy';

class Backend {

    repeats = 0;

    constructor() {
    }

    startProcess(url, callback, error) {
      axios.post(BASE_URI + '/process_video/', {
        "path": url,
        "use_cache": "False"

      }).then(response => {
        console.log('startProcess');
        console.log(response);
        callback(response.data)
      }).catch(() => {
        error()
      })
    }

    stopCheckProcess() {
      if (this.intervalId) {
        console.log('stopInterval: ' + this.intervalId);
        clearInterval(this.intervalId);
      }
    }

    checkProcess(processId, onProcessing, onResult) {
      axios.get(BASE_URI + '/get_video_by_id/' + processId).then(response => {
        console.log('checkProcess');
        console.log(response.data);
        if (response.data === STATUS_PROCESSING) {
          onProcessing();

          if (this.processId !== processId) {
            this.processId = processId;
            this.stopCheckProcess();
            this.repeats = 0;
          }
          if (this.processId && !this.intervalId) {
            console.log('startInterval');
            this.intervalId = setInterval(() => {
              console.log("repeats:" + this.repeats++);
              this.checkProcess(processId, onProcessing, onResult)
            }, 1000);
          }
        } else {
          onResult(response.data)
        }
      })
    }

}

export default new Backend();