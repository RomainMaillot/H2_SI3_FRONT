import React, { Component } from 'react'
import { texts, buttons, containers } from '../styles';
import { StoreConsumer } from '../store/MainStore';
import icon_arrow from '../assets/images/arrow-left.svg'

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoged: true
        }
    }

    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.category>
                        <buttons.arrow to="./"><img src={icon_arrow} alt={'Back to home'} /></buttons.arrow>
                        <texts.text>Choose a category</texts.text>
                        <div className="categories">
                            <buttons.link onClick={() => actions.startGame(1)} main="#9B59B6" secondary="#8E44AD" to="./room">
                                Games of Thrones
                            </buttons.link>
                            <buttons.link main="#E74C3C" secondary="#C0392B" to="#">
                                Star Wars <span>(Coming soon)</span>
                            </buttons.link>
                        </div>
                    </containers.category>
                )}
            </StoreConsumer>
        )
    }
}
