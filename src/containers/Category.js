import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import Request from '../utils/Request'
import { Redirect } from 'react-router'
import { Header } from '../components'
import { StoreConsumer } from '../store/MainStore';
import icon_arrow from '../assets/images/arrow-left.svg'

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoged: true
        }
        const api = new Request()
    }

    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.category>
                        <buttons.arrow to="./"><img src={icon_arrow} /></buttons.arrow>
                        <texts.text>Choississez une catégorie</texts.text>
                        <div className="categories">
                            <buttons.link onClick={() => actions.startGame()} main="#9B59B6" secondary="#8E44AD" to="./room">
                                Games of Thrones
                            </buttons.link>
                            <buttons.link onClick={() => actions.startGame()} main="#E74C3C" secondary="#C0392B" to="./room">
                                Star Wars
                            </buttons.link>
                        </div>
                        {state.game.hasstarted ? <Redirect to={'/room'} /> : null}
                    </containers.category>
                )}
            </StoreConsumer>
        )
    }
}
