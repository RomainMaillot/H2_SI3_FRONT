import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { texts, buttons, containers } from '../styles'
import Request from '../utils/Request'
import icon_arrow from '../assets/images/arrow-left.svg'


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <containers.header>
                <buttons.arrow to="./"><img src={icon_arrow} /></buttons.arrow>
                <texts.title>classement général</texts.title>
            </containers.header>
        )
    }
}
