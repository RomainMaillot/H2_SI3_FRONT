import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles'
import icon_arrow from '../assets/images/arrow-left.svg'


export default class Header extends Component {
    render() {
        return (
            <containers.header>
                <buttons.arrow to={"/"}><img src={icon_arrow} alt={'Back to home'} /></buttons.arrow>
                <texts.title>{this.props.title}</texts.title>
            </containers.header>
        )
    }
}
