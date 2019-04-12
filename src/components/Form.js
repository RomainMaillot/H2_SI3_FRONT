import React, { Component } from 'react'
import { buttons, containers } from '../styles'
import { StoreConsumer } from '../store/MainStore'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: false,
            username: '',
            password: ''
        }
    }

    submitAndRedirect(_cb) {
        _cb(this.state)
    }

    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.form>
                        <label>
                            <span>Pseudo</span>
                            <input type="text" placeholder="Balkhrod" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" placeholder="********" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                        </label>
                        <buttons.input onClick={() => actions.login(this.state)}>Login / Register</buttons.input>
                    </containers.form>
                )}
            </StoreConsumer>
        )
    }
}
