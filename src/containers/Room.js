import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { texts, buttons, containers } from '../styles';
import icon_cross from '../assets/images/cross.svg'
import { StoreConsumer, StoreContext } from '../store/MainStore';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            navigate: false,
            time: 0,
            timer: 5000,
            styles: {
                transform: 'scaleX(0)'
            },
            colors: [
                {p: "#9B59B6", s: "#8E44AD"},
                {p: "#E74C3C", s: "#C0392B"},
                {p: "#F1C40F", s: "#F39C12"},
                {p: "#1ABC9C", s: "#16A085"}
            ]
        }
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
        if(this.state.time !== 0) {
            clearInterval(timer)
            this.context.actions.saveProgress({answer: false})
            this.setState({
                time: 0,
                styles: { transform: `scaleX(${0})` }
            })
        }
    }

    render() {
        if (this.state.navigate) {
            return <Redirect to={'/score'}/>
        } else {
            return (
                <StoreConsumer>
                    {({state, actions}) => (
                        <containers.room>
                            <React.Fragment>
                                <header>
                                    <texts.user>Player : Berka</texts.user>
                                    <buttons.cross to="./"><img src={icon_cross} alt={'Back to home'} /></buttons.cross>
                                </header>
                                <texts.title>{`Question n°1`}</texts.title>
                                <texts.text>Who is leading the House Hightower of the Hightower</texts.text>
                                <div className="timer" style={this.state.styles}></div>
                                <main>
                                    <buttons.question
                                        onClick={() => {
                                            this.setState({
                                                time: 0,
                                                styles: { transform: `scaleX(${0})` }
                                            })}}  main={this.state.colors[0].p} secondary={this.state.colors[0].s}>
                                    Tyrion Lannister</buttons.question>
                                    <buttons.question
                                        onClick={() => {
                                            this.setState({
                                                time: 0,
                                                styles: { transform: `scaleX(${0})` }
                                            })}}  main={this.state.colors[1].p} secondary={this.state.colors[1].s}>
                                    Tyrion Lannister</buttons.question>
                                    <buttons.question
                                        onClick={() => {
                                            this.setState({
                                                time: 0,
                                                styles: { transform: `scaleX(${0})` }
                                            })}}  main={this.state.colors[2].p} secondary={this.state.colors[2].s}>
                                    Tyrion Lannister</buttons.question>
                                    <buttons.question
                                        onClick={() => {
                                            this.setState({
                                                time: 0,
                                                styles: { transform: `scaleX(${0})` }
                                            })}}  main={this.state.colors[3].p} secondary={this.state.colors[3].s}>
                                    Tyrion Lannister</buttons.question>
                                </main>
                                </React.Fragment>
                        </containers.room>
                    )}
                </StoreConsumer>
            )
        }
    }
}

Room.contextType = StoreContext

export default Room