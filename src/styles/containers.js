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
    a:nth-of-type(1) {
        margin-top: 10%;
    }
    a:nth-of-type(2) {
        margin-top: 2%;
    }
`
const ranking = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
`
const header = styled.header`
    background-color: ${colors.blue};
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`

export {
    home,
    ranking,
    header
}