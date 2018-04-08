import axios from 'axios'

export const BASE_URI = 'http://home.totruok.ru:44416';
const STATUS_PROCESSING = 'busy';

class Backend {

    repeats = 0;
    data = {};

    constructor() {
    }

    startProcess(userId, url, callback, error) {
      axios.post(BASE_URI + '/process_video/', {
        "path": url,
        "use_cache": "False"

      }).then(response => {
        console.log('startProcess');
        console.log(response);
        callback(response.data)
      },(e) => {
        console.log(e);
        error()
      })
    }

    stopCheckProcess() {
      if (this.intervalId) {
        console.log('stopInterval: ' + this.intervalId);
        clearInterval(this.intervalId);
        this.intervalId = null
      }
    }

    checkProcess(userId, processId, onProcessing, onResult, onError) {
      const newProcessId = processId;
      const newUserId = userId;
      axios.get(BASE_URI + '/get_video_by_id/' + processId+ '?userId=' + userId).then(response => {
        console.log('checkProcess');
        console.log(response.data);
        if (response.data === STATUS_PROCESSING) {
          onProcessing();

          this.processId = processId;
          this.stopCheckProcess();
          this.repeats = 0;
          if (this.processId && !this.intervalId) {
            console.log('startInterval');
            this.intervalId = setInterval(() => {
              console.log("repeats:" + this.repeats++);
              this.checkProcess(newUserId, newProcessId, onProcessing, onResult)
            }, 1000);
          }
        } else {
          this.data = response.data;
          onResult(response.data)
        }
      }, (error) => {
        console.log(error);
        onError()
      })
    }

}

export default new Backend();