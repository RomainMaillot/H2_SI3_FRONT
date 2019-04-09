import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import icon_cross from '../assets/images/cross.svg'

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
            <containers.room>
                <header>
                    <texts.user>Joueur : Balkhrod</texts.user>
                    <buttons.cross to="./"><img src={icon_cross} /></buttons.cross>
                </header>
                <texts.title>question n°01</texts.title>
                <texts.text>Quel est le nom de l’associer de Walter White dans la série Breaking Bad ?</texts.text>
                <main>
                    <buttons.question mainColor="#9B59B6" secondaryColor="#8E44AD">John</buttons.question>
                    <buttons.question mainColor="#E74C3C" secondaryColor="#C0392B">John</buttons.question>
                    <buttons.question mainColor="#F1C40F" secondaryColor="#F39C12">John</buttons.question>
                    <buttons.question mainColor="#1ABC9C" secondaryColor="#16A085">John</buttons.question>
                </main>
            </containers.room>
        )
    }
}
