import styled from 'styled-components'
import { sizes, colors } from './constants'

const title = styled.h1`
    font-size: ${props => props.huge ? sizes.hugeTitle : sizes.title};
    color: white;
    text-transform: uppercase;
    margin: 0;
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

export {
    title,
    text,
    score
}