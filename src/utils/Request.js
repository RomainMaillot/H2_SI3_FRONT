import axios from 'axios'

export default class Request {
    constructor() {
        this.apiURL = 'http://localhost:80/H2_SI3/api'
    }

    get(_url) {
        return new Promise((resolve, reject) => {
            if (_url) {
                return axios.get(`${this.apiURL}/${_url}`).then(res => {
                    console.log('resq', res)
                    resolve(res.data)
                }).catch(err => {
                    console.error(err)
                    reject({ error: true })
                })
            } else {
                console.error('No url provided to get().')
                reject({ error: true })
            }
        })
    }

    post(_url, _fd) {
        return new Promise((resolve, reject) => {
            if (_url && _fd) {
                axios.defaults.withCredentials = true
                return axios({
                    method: 'post',
                    url: `${this.apiURL}/${_url}`,
                    data: _fd,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    console.error(err)
                    reject({ error: true })
                })
            } else {
                console.error('No url or data provided to post().')
                return { error: true }
            }
        })
    }

    // TODO: create a function for each api call
}