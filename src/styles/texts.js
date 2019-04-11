import styled from 'styled-components'
import { sizes, colors } from './constants'

const title = styled.h1`
    font-size: ${props => props.huge ? sizes.hugeTitle : sizes.title};
    color: white;
    text-transform: uppercase;
    margin: 0;
    font-family: 'Staatliches', cursive;;
`
const text = styled.p`
    font-size: ${sizes.text};
    color: white;
    margin: 0;
`
const score = styled.p`
    color: ${colors.green};
    font-weight: bold;
`
const user = styled.p`
    color: white;
    font-size: ${sizes.button};
    font-weight: 600;
`
const finalscore = styled.p`
    background: white;
    color: ${colors.blue};
    font-weight: bold;
    width: 30%;
    text-align: center;
    font-size: ${sizes.text};
    margin-top: 2vh;
`
const label = styled.h3`
    color: ${colors.blue};
    font-size: ${sizes.button};
    font-weight: 400;
`
const name = styled.h2`
    color: ${colors.blue};
    font-size: ${sizes.text};
    font-weight: 400;
    margin: 0;
`
const data = styled.p`
    color: ${colors.darkGrey};
    font-size: ${sizes.button};
`

export {
    title,
    text,
    score,
    user,
    finalscore,
    label,
    name,
    data
}