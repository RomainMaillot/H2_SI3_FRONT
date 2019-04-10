import React, { Component } from 'react'
import { buttons, containers } from '../styles'


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    handleClick() {
        let state = !this.state.show
        this.setState({
            show: state
        })
    }

    render() {
        return (
            <containers.form>
                <form className="show">
                    <label>
                        Pseudo
                        <input className="" type="text" placeholder="Balkhrod" name="username" />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="********" name="password" />
                    </label>
                    <buttons.input type="submit" value="S'inscrire/Connexion" />
                </form>
            </containers.form>
        )
    }
}
