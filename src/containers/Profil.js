import React, { Component } from 'react'
import { texts, containers } from '../styles'
import { Header } from '../components'
import avatar from '../assets/images/avatar.png'
import badges from '../store/BadgeList'
import { StoreConsumer } from '../store/MainStore';

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    render() {
        return (
            <StoreConsumer>
                {({state, actions}) => (
                    <containers.profil>
                        <Header title="profil" />
                        <div className="user--infos">
                            <div className="img"><img src={avatar} alt={'user avatar'} /></div>
                            <div className="infos">
                                <texts.name>{state.user.username}</texts.name>
                                <div className="datas">
                                    <div>
                                        <texts.label>Progression</texts.label>
                                        <texts.data>{(parseInt(state.user.progression_1) + parseInt(state.user.progression_2))} / 2000 questions</texts.data>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="badges">
                            <texts.name>Badges</texts.name>
                            <containers.badges>
                                {badges.map((badgeid, key) => {
                                    console.log(badgeid)
                                    console.log(state.user.unlocked_badges)
                                    if (state.user.unlocked_badges.includes(badgeid)) {
                                        return <containers.img key={key} unlock="true" src={`/img/badges/badge_${badgeid}.png`}></containers.img>
                                    } else {
                                        return <containers.img key={key} src={`/img/badges/badge_unlock.png`}></containers.img>
                                    }
                                })}
                            </containers.badges>
                        </div>
                    </containers.profil>
                )}
            </StoreConsumer>
        )
    }
}
