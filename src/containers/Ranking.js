import React, { Component } from 'react'
import { containers, texts } from '../styles'
import { Header, User } from '../components'
import Request from '../utils/Request'

export default class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            players: []
        }
    }

    componentDidMount() {
        const api = new Request();
        api.get('leaderboard.php').then(res => {
            this.setState({
                loading: false,
                players: res
            })
            console.log(res)
        })
    }

    render() {
        return (
            <containers.ranking>
                <Header title="ranking" />
                <div className="users">
                    {!this.state.loading ?
                        this.state.players.map((player, index) => {
                            return <User id={index + 1} user={player.username} score={player.progression_2} />
                        })
                    :
                        <texts.text>Loading...</texts.text>
                    }
                </div>
            </containers.ranking>
        )
    }
}
