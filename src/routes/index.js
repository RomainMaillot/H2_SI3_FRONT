import React, { Component } from 'react'
import { Home, NoMatch, Room, Ranking, Score } from '../containers/index.js'
import { Switch, Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                { /* home routes */ }
                <Route exact path="/" component={Home} />
                <Route exact path="/room" component={Room} />
                <Route exact path="/ranking" component={Ranking} />
                <Route exact path="/score" component={Score} />
                <Route component={NoMatch} />
            </Switch>
        )
    }
}