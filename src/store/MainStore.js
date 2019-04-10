import React, { Component } from 'react'
import Request from '../utils/Request'

const StoreContext = React.createContext('Main')
const StoreConsumer = StoreContext.Consumer

const initialState = {
    user: {
        isloggedin: false,
        id: null,
        username: null,
        best_score: null
    }
}

class StoreProvider extends Component {
    constructor(props) {
        super()
        this.api = new Request()
        this.state = initialState

        this.actions = {
            getUserByName: this.getUserByName.bind(this),
            getUserById: this.getUserById.bind(this),
            login: this.login.bind(this)
        }
    }

    getUserByName(_name) {
        return this.api.get(`user.php?name=${_name}`)
    }

    getUserById(_id) {
        return this.api.get(`user.php?id=${_id}`)
    }

    login(data) {
        if (data.username.length && data.password.length) {
            const fd = new FormData()
            fd.set('username', data.username)
            fd.set('password', data.password)
            this.api.post(`login.php`, fd).then(res => {
                if (res.id) {
                    this.setState({
                        ...this.state,
                        user: {
                            isloggedin: true,
                            id: res.id,
                            username: res.username,
                            best_score: res.best_score
                        }
                    })
                    console.log(this.state)
                    return res
                } else {
                    console.error('Login failed.')
                    return { error: true }
                }
            })
        }
    }

    logout() {
        this.setState(initialState)
    }

    render () {
        return (
            <StoreContext.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export {
    StoreProvider,
    StoreConsumer
}