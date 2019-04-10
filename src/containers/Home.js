import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import { Form, Start } from '../components'

export default class Home extends Component {
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
            <containers.home>
                <texts.title huge>pop quiz</texts.title>
                <texts.text>Le quiz multijoueur 100 % pop culture !</texts.text>
                {this.state.isLoged ? <Start /> : <Form />}
            </containers.home>
        )
    }
}
