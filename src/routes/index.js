import React, { Component } from 'react'
import { Home, NoMatch, Room, Ranking, Score, Profil } from '../containers/index.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import { StoreConsumer } from '../store/MainStore.js';

export default class Routes extends Component {
    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {state.user.isloggedin ?
                            <React.Fragment>
                                <Route exact path="/room" component={Room} />
                                <Route exact path="/ranking" component={Ranking} />
                                <Route exact path="/score" component={Score} />
                                <Route exact path="/profil" component={Profil} />
                            </React.Fragment>
                        : 
                            <Redirect to={'/'} />
                        }
                        <Route component={NoMatch} />
                    </Switch>
                )}
            </StoreConsumer>
        )
    }
}