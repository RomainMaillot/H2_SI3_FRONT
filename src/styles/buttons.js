import styled from "styled-components"
import { colors, sizes } from './constants'
import { Link } from 'react-router-dom'

// Creating style of the component
const main = styled(Link)`
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 3px;
    padding: 1% 3%;
    font-size: ${sizes.button};
    color: #FFFFFF;
    background: ${colors.lightGreen};
    box-shadow: 0 6px ${colors.darkGreen};
    position: relative;
    &:hover {
        box-shadow: 0 4px ${colors.darkGreen};
        top: 2px;
    }
    &:active {
        box-shadow: 0 0 ${colors.darkGreen};
        top: 6px;
    }
`

export {
    main
}