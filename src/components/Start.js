import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import { Form } from '../components'

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoged: false
        }
        const api = new Request()
    }

    render() {
        return (
            <containers.start>
                <buttons.link primary to="./room">
                    Commencer la partie !
                </buttons.link>
                <buttons.link mainColor="#E67E22" secondaryColor="#D35400" to="./ranking">
                    Voir classement
                </buttons.link>
            </containers.start>
        )
    }
}
