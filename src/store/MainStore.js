import React, { Component } from 'react'
import Request from '../utils/Request'

const StoreContext = React.createContext('Main')
const StoreConsumer = StoreContext.Consumer

const initialState = {
    user: {
        isloggedin: false,
        id: null,
        username: null,
        progression: null,
        unlocked_badges: []
    },
    game: {
        loading: true,
        hasstarted: false,
        currentQuestion: 0,
        questions: [],
        currentType: null
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
            endGame: this.endGame.bind(this),
            saveProgress: this.saveProgress.bind(this)
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
                            progression: res.progression,
                            unlocked_badges: res.unlocked_badges
                        }
                    })
                    console.log(res)
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

    saveProgress(_data) {
        if (_data.answer) {
            this.setState({
                ...this.state,
                game: {
                    ...this.state.game,
                    currentQuestion: this.state.game.currentQuestion + 1
                }
            })
            // const fd = new FormData()
            // fd.set('type', this.state.game.questions[_data.index].type)
            // fd.set('index', this.state.game.currentQuestion)
            // fd.set('answer', _data.answer)
            // fd.set('userid', this.state.user.id)
            // fd.set('questid', this.state.game.questions[_data.index].id)
            // this.api.post(`saveprogress.php`, fd).then(res => {
            //     if (res === 'true') {
            //         return res
            //     } else {
            //         console.error('Save failed.')
            //         return { error: true }
            //     }
            // })
        }
    }

    startGame(_type = 0) {
        this.api.get(`questions.php?type=${_type}`).then(res => {
            console.log(_type)
            console.log(res)
            if (res.error) {
                console.error('Unknown error while fetching.')
            } else {
                const q = this.deserializeAnswers(res)
                this.setState({
                    ...this.state,
                    game: {
                        loading: false,
                        hasstarted: true,
                        questions: q,
                        currentQuestion: 0,
                        currentType: _type
                    }
                })
            }
        })
    }

    endGame() {
        this.setState({
            ...this.state,
            game: {
                ...initialState.game,
                currentType: this.state.game.currentType
            }
        })
    }

    componentDidMount() {
        
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