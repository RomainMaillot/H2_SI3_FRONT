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
    background: ${props => props.primary ? colors.lightGreen : colors.lightOrange};
    box-shadow: 0 6px ${props => props.primary ? colors.darkGreen : colors.darkOrange};
    position: relative;
    &:hover {
        box-shadow: 0 4px ${props => props.primary ? colors.darkGreen : colors.darkOrange};
        top: 2px;
    }
    &:active {
        box-shadow: 0 0 ${props => props.primary ? colors.darkGreen : colors.darkOrange};
        top: 6px;
    }
`

const arrow = styled(Link)`
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    height: 100%;
    display: flex;
    position: absolute;
    left: 5%;
`

export {
    main,
    arrow
}