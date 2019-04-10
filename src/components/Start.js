import React, { Component } from 'react'
import { buttons, containers } from '../styles';
import Request from '../utils/Request'
import icon_profil from '../assets/images/user.svg'

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
                <buttons.profil to="./profil"><img src={icon_profil} /></buttons.profil>
                <buttons.link primary to="./room">
                    Commencer la partie !
                </buttons.link>
                <buttons.link main="#E67E22" secondary="#D35400" to="./ranking">
                    Voir classement
                </buttons.link>
            </containers.start>
        )
    }
}
