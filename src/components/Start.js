import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { buttons, containers } from '../styles';
import icon_profil from '../assets/images/user.svg'
import { StoreConsumer } from '../store/MainStore';

export default class Start extends Component {
    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.start>
                        <buttons.profil to="./profil"><img src={icon_profil} /></buttons.profil>
                        <buttons.link onClick={() => actions.startGame()} primary to="./">
                            Commencer la partie !
                        </buttons.link>
                        <buttons.link main="#E67E22" secondary="#D35400" to="./ranking">
                            Voir classement
                        </buttons.link>
                        {state.game.hasstarted ? <Redirect to={'/room'} /> : null}
                    </containers.start>
                )}
            </StoreConsumer>
        )
    }
}
