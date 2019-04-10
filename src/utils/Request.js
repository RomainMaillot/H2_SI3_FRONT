import axios from 'axios'

export default class Request {
    constructor() {
        this.apiURL = 'http://localhost:80/api'
    }

    get(_url) {
        if (_url) {
            return axios.get(`${this.apiURL}/${_url}`).then(res => {
                return JSON.parse(res.data)
            }).catch(err => {
                console.error(err)
                return { error: true }
            })
        } else {
            console.error('No url provided to get().')
            return { error: true }
        }
    }

    post(_url, _data) {
        if (_url && _data) {
            return axios.post(`${this.apiURL}/${_url}`, {
                username: _data.username,
                password: _data.password
            }).then(res => {
                return JSON.parse(res.data)
            }).catch(err => {
                console.error(err)
                return { error: true }
            })
        } else {
            console.error('No url or data provided to post().')
            return { error: true }
        }
    }

    // TODO: create a function for each api call
}