import React, { Component } from 'react'

const StoreContext = React.createContext('Main')
const StoreConsumer = StoreContext.Consumer

class StoreProvider extends Component {
    constructor(props) {
        super()
    }

    render () {
        return (
            <StoreContext.Provider value={this.state}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export {
    StoreProvider,
    StoreConsumer
}