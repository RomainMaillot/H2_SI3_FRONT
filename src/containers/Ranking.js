import React, { Component } from 'react'
import { texts, containers } from '../styles'
import Request from '../utils/Request'
import { Header, User } from '../components'

export default class Ranking extends Component {
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
                <Header title="classement général" />
                <div className="users">
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                    <User id="1" user="Borthold" score="250" />
                </div>
            </containers.ranking>
        )
    }
}
