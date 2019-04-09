import React, { Component } from 'react'
import { containers, texts } from '../styles'
import avatar from '../assets/images/avatar.png'


export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <containers.user>
                <div className="user">
                    <img src={avatar} />
                    <p>{this.props.id}.</p>
                    <p>{this.props.user}</p>
                </div>
                <texts.score>{this.props.score}</texts.score>
            </containers.user>
        )
    }
}
