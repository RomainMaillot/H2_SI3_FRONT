import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import { Form } from '../components'

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
            <containers.score>
                <texts.title>la partie est terminée</texts.title>
                <texts.text>Bravo <span>Balkhrod !</span></texts.text>
                <texts.text>Vous avez fait un score de</texts.text>
                <texts.finalscore>15/20 points</texts.finalscore>
                <buttons.link primary to="./room">
                    Relancer une partie
                </buttons.link>
                <buttons.link mainColor="#E74C3C" secondaryColor="#C0392B" to="./">
                    Quitter la partie
                </buttons.link>
            </containers.score>
        )
    }
}
