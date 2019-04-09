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
                <div className={this.state.show ? 'show': 'hidden'}>
                    <buttons.main yellow onClick={() => this.handleClick()}>Choisir mon pseudo</buttons.main>
                    <buttons.main onClick={() => this.handleClick()}>Pseudo aléatoire</buttons.main>
                </div>
                <form className={this.state.show ? 'hidden' : 'show'}>
                    <input type="text" placeholder='Balkhrod' />
                    <buttons.input type="submit" value="Valider" />
                </form>
            </containers.form>
        )
    }
}
