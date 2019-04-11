import React, { Component } from 'react'
import { containers } from '../styles'
import { Header, User } from '../components'

export default class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
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
