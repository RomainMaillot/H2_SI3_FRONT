import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'

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
                <texts.hugetitle>pop quiz</texts.hugetitle>
                <texts.text>Le quiz multijoueur 100 % pop culture !</texts.text>
                <buttons.main>
                    Commencer la partie !
                </buttons.main>
            </containers.home>
        )
    }
}
