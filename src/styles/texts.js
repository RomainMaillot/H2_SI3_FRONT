import styled from 'styled-components'
import { sizes } from './constants'

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

export {
    title,
    text
}