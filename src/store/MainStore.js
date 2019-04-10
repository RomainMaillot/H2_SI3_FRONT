import React, { Component } from 'react'
import Request from '../utils/Request'

const StoreContext = React.createContext('Main')
const StoreConsumer = StoreContext.Consumer

class StoreProvider extends Component {
    constructor(props) {
        super()
        this.api = new Request()
        this.state = {
            user: {
                isloggedin: false,
                id: null,
                username: null,
                best_score: null
            }
        }

        this.actions = {

        }
    }

    getUserByName(_name) {
        return this.api.get(`user.php?name=${_name}`)
    }

    getUserByName(_id) {
        return this.api.get(`user.php?id=${_id}`)
    }

    login(data) {
        const res = this.api.post(`login.php`, { ...data })
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
            return res
        } else {
            console.error('Login failed.')
            return { error: true }
        }
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