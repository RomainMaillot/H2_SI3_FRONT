import React, { Component } from 'react'
import { texts, containers } from '../styles'
import Request from '../utils/Request'
import { Header } from '../components'
import avatar from '../assets/images/avatar.png'

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
        const api = new Request()
    }

    render() {
        return (
            <containers.profil>
                <Header title="profil" />
                <div className="user--infos">
                    <div className="img"><img src={avatar} /></div>
                    <div className="infos">
                        <texts.name>Balkhrod</texts.name>
                        <div className="datas">
                            <div>
                                <texts.label>Progression</texts.label>
                                <texts.data>145 / 2000 questions</texts.data>
                            </div>
                            <div>
                                <texts.label>Temps de jeu</texts.label>
                                <texts.data>150 heures</texts.data>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="badges">
                    <texts.name>Badges</texts.name>
                </div>
            </containers.profil>
        )
    }
}
