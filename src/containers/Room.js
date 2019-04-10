import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import icon_cross from '../assets/images/cross.svg'

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            navigate: false,
            time: 0,
            timer: 5000,
            iteration: 0,
            maxIteration: 2,
            styles: {
                transform: 'scaleX(0)'
            }
        }
        const api = new Request()
    }

    componentDidMount() {
        this.timer()
        setInterval(() => {
            this.timer()
        }, this.state.timer);
    }

    timer() {
        let timer = setInterval(() => {
            let time = this.state.time + 100
            let step = time / this.state.timer
            let styles = { transform: `scaleX(${step})` }
            this.setState({
                time: time,
                styles: styles
            })
        }, 100);
        if(this.state.time !== 0)
        {
            let iteration = this.state.iteration + 1
            clearInterval(timer)
            this.setState({
                time: 0,
                iteration: iteration
            })
        }
        if(this.state.iteration === this.state.maxIteration)
        {
            this.setState({navigate: true})
            console.log('end')
        }
    }

    render() {
        return (
            <containers.room>
                {this.state.navigate ? <Redirect to={'/score'}/> : null}
                <header>
                    <texts.user>Joueur : Balkhrod</texts.user>
                    <buttons.cross to="./"><img src={icon_cross} /></buttons.cross>
                </header>
                <texts.title>{`Question n°${this.state.iteration + 1}`}</texts.title>
                <texts.text>Quel est le nom de l’associer de Walter White dans la série Breaking Bad ?</texts.text>
                <div className="timer" style={this.state.styles}></div>
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
