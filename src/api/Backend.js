import axios from 'axios'

export const BASE_URI = 'http://home.totruok.ru:44414';

class Backend {
    url = '';
    processId = '';

    constructor() {
    }

    startProcess(url, callback, error) {
      axios.post(BASE_URI + '/process_video/', {
        "path": url,
        "use_cache": "False"

      }).then(response => {
        this.processId = response.data;
        callback(this.processId)
      }).catch(() => {
        error()
      })
    }

    checkProcess(processId, callback) {
      axios.get(BASE_URI + '/get_video_by_id/' + processId).then(response => {
        callback(response.data)
      })
    }

}

export default new Backend();