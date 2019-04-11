import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import { Form } from '../components'
import { StoreConsumer } from '../store/MainStore';

export default class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
        const api = new Request()
    }

    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.score>
                        <texts.title>la partie est terminée</texts.title>
                        <texts.text>Bravo <span>{state.user.username}</span></texts.text>
                        <texts.text>Vous avez fait un score de</texts.text>
                        <texts.finalscore>15/20 points</texts.finalscore>
                        <buttons.link primary="true" to="./room">
                            Relancer une partie
                        </buttons.link>
                        <buttons.link main="#E74C3C" secondary="#C0392B" to="./">
                            Quitter la partie
                        </buttons.link>
                    </containers.score>
                )}
            </StoreConsumer>
        )
    }
}
