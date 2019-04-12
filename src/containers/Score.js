import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import { StoreConsumer } from '../store/MainStore';

export default class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.score>
                        <texts.title>Game ended</texts.title>
                        <texts.text>Well done <span>{state.user.username}</span></texts.text>
                        <texts.text>You responded to</texts.text>
                        <texts.finalscore>{state.game.trueAnswers} good answers</texts.finalscore>
                        <buttons.link primary="true" to="./room" onClick={() => actions.startGame(state.game.currentType)}>
                            Replay a game
                        </buttons.link>
                        <buttons.link main="#E74C3C" secondary="#C0392B" to="./">
                            Quit the game
                        </buttons.link>
                    </containers.score>
                )}
            </StoreConsumer>
        )
    }
}
