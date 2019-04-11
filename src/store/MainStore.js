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
    },
    game: {
        hasstarted: false,
        currentQuestion: 0,
        questions: [],
        answers: []
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
            login: this.login.bind(this),
            logout: this.logout.bind(this),
            startGame: this.startGame.bind(this),
            endGame: this.endGame.bind(this)
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

    deserializeAnswers(_data) {
        let r = []
        for (let i = 0; i < _data.length; i++) {
            const a = JSON.parse(_data[i].answers);
            r.push({
                id: _data[i].id,
                text: _data[i].text,
                answers: a
            })
        }
        return r
    }

    startGame() {
        this.setState({
            ...this.state,
            game: {
                ...this.state.game,
                hasstarted: true,
                currentQuestion: 0,
                answers: []
            }
        })
    }

    endGame() {
        this.setState({
            ...this.state,
            game: initialState.game
        })
    }

    componentDidMount() {
        this.api.get('questions.php').then(res => {
            const q = this.deserializeAnswers(res)
            this.setState({
                ...this.state,
                game: {
                    hasstarted: false,
                    questions: q,
                    currentQuestion: 0,
                    answers: []
                }
            })
        })
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
    StoreContext,
    StoreProvider,
    StoreConsumer
}