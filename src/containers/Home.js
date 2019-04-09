import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import { Form } from '../components'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
        const api = new Request()
    }

    render() {
        return (
            <containers.home>
                <texts.title huge>pop quiz</texts.title>
                <texts.text>Le quiz multijoueur 100 % pop culture !</texts.text>
                <Form />
                <buttons.link primary to="./room">
                    Commencer la partie !
                </buttons.link>
                <buttons.link to="./ranking">
                    Voir classement
                </buttons.link>
            </containers.home>
        )
    }
}
