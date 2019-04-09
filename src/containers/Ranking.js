import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { texts, containers } from '../styles'
import Request from '../utils/Request'
import { Header } from '../components'

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
            <containers.ranking>
                <Header />
            </containers.ranking>
        )
    }
}
