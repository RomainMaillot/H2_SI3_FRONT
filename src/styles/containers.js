import styled from 'styled-components'
import { colors } from './constants'

const home = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${colors.blue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
        margin-top: 10%;
    }
`

export {
    home
}