import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import { Form, Start } from '../components'
import { StoreConsumer } from '../store/MainStore';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoged: true
        }
        const api = new Request()
    }

    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.home>
                        <texts.title huge>pop quizz</texts.title>
                        <texts.text>Le quizz multijoueur 100 % pop culture !</texts.text>
                        {state.user.isloggedin ? <Start /> : <Form />}
                    </containers.home>
                )}
            </StoreConsumer>
        )
    }
}
