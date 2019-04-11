import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { texts, buttons, containers } from '../styles';
import icon_cross from '../assets/images/cross.svg'
import { StoreConsumer, StoreContext } from '../store/MainStore';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            navigate: false,
            time: 0,
            timer: 5000,
            styles: {
                transform: 'scaleX(0)'
            },
            colors: [
                {p: "#9B59B6", s: "#8E44AD"},
                {p: "#E74C3C", s: "#C0392B"},
                {p: "#F1C40F", s: "#F39C12"},
                {p: "#1ABC9C", s: "#16A085"}
            ]
        }
    }

    componentDidMount() {
        this.timer()
        setInterval(() => {
            this.timer()
        }, this.state.timer);
    }

    timer() {
        let timer = setInterval(() => {
            let time = this.state.time + 100
            let step = time / this.state.timer
            let styles = { transform: `scaleX(${step})` }
            this.setState({
                time: time,
                styles: styles
            })
        }, 100);

        if(this.context.state.game.currentQuestion >= this.context.state.game.questions.length - 1 && this.context.state.game.loading === false) {
            this.setState({navigate: true})
        } else {
            if(this.state.time !== 0) {
                clearInterval(timer)
                this.setState({ time: 0 })
            }
        }
    }

    render() {
        if (this.state.navigate) {
            return <Redirect to={'/score'}/>
        } else {
            return (
                <StoreConsumer>
                    {({state, actions}) => (
                        <containers.room>
                            {state.game.loading ?
                                <header style={{height: '100vh'}}>
                                    <texts.user>Chargement en cours...</texts.user>
                                    <buttons.cross onClick={() => actions.endGame()} to="./"><img src={icon_cross} alt={'Back to home'} /></buttons.cross>
                                </header>
                            :
                                <React.Fragment>
                                    <header>
                                        <texts.user>Joueur : {state.user.username}</texts.user>
                                        <buttons.cross to="./"><img src={icon_cross} alt={'Back to home'} /></buttons.cross>
                                    </header>
                                    <texts.title>{`Question n°${state.game.currentQuestion + 1}`}</texts.title>
                                    <texts.text>{state.game.questions[state.game.currentQuestion].text}</texts.text>
                                    <div className="timer" style={this.state.styles}></div>
                                    <main>
                                        {state.game.questions[state.game.currentQuestion].answers.map((a, i) => {
                                            return <buttons.question
                                                        key={i}
                                                        onClick={() => {
                                                            actions.saveProgress({ answer: a.content })
                                                            if(this.context.state.game.currentQuestion >= this.context.state.game.questions.length - 1) {
                                                                actions.endGame()
                                                                this.setState({navigate: true})
                                                            }
                                                        }}
                                                        main={this.state.colors[i].p}
                                                        secondary={this.state.colors[i].s}>
                                                    {a.content}</buttons.question>
                                        })}
                                    </main>
                                </React.Fragment>
                            }
                        </containers.room>
                    )}
                </StoreConsumer>
            )
        }
    }
}

Room.contextType = StoreContext

export default Room