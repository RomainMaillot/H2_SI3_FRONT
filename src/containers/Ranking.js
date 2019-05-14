import React, { Component } from 'react'
import { containers, texts } from '../styles'
import { Header, User } from '../components'
import Request from '../utils/Request'

export default class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            players: [{username: 'Berka', progression_2: 105},{username: 'Berka', progression_2: 105},{username: 'Berka', progression_2: 105},{username: 'Berka', progression_2: 105}]
        }
    }

    render() {
        return (
            <containers.ranking>
                <Header title="ranking" />
                <div className="users">
                        {this.state.players.map((player, index) => {
                            return <User id={index + 1} user={player.username} score={player.progression_2} />
                    })}
                </div>
            </containers.ranking>
        )
    }
}
