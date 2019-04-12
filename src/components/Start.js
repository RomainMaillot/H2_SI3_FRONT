import React, { Component } from 'react'
import { buttons, containers } from '../styles';
import icon_profil from '../assets/images/user.svg'

export default class Start extends Component {
    render() {
        return (
            <containers.start>
                <buttons.profil to="./profil"><img src={icon_profil} alt={'Profile'} /></buttons.profil>
                <buttons.link primary="true" to="./category">
                    Begin the party
                </buttons.link>
                <buttons.link main="#E67E22" secondary="#D35400" to="./ranking">
                    See scores
                </buttons.link>
            </containers.start>
        )
    }
}
