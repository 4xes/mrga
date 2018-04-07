import axios from 'axios'

const BASE_URI = 'http://home.totruok.ru:44414';

class Backend {
    url = '';
    id = '';
    processId = '';

    constructor() {
    }

    startProcess(url, callback, error) {
        this.getId(url, error);

        axios.post(BASE_URI + '/process_video/', {
          "path": url,
          "use_cache": "False"

        }).then(response => {
            this.url = url;

            console.log(response);
            callback("sadasdasd")
            //callback(response.data)
        })
    }

    checkProcess(processId, callback) {
      axios.get(BASE_URI + '/get_video_by_id/' + processId).then(response => {

        callback(response)
      })
    }

    getId(url, error) {
        console.log(url);
       try {
         let u = new URL(url);
         let split = u.pathname.split('/');
         this.id = split[split.length-2];
         console.log(this.id)
      } catch (e) {
         console.log(e);
          error()
      }

    }
}

export default new Backend();