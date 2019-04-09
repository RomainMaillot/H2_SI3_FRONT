import styled from 'styled-components'
import { colors, sizes } from './constants'

const hugetitle = styled.h1`
    font-size: ${sizes.hugeTitle};
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
    hugetitle,
    text
}