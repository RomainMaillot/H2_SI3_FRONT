import styled from 'styled-components'
import { colors, sizes } from './constants'

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
        margin-top: 5%;
    }
    a:nth-of-type(2) {
        margin-top: 2%;
    }
`
const room = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${colors.blue};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    header {
        display: flex;
        flex-direction: row;
        width: 90%;
        justify-content: space-between;
    }
    >p {
        margin-top: 5vh;
        width: 60%;
        text-align: center;
    }
    main {
        background: white;
        width: 100%;
        height: 60vh;
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 6vh 9vw;
        box-sizing: border-box;
    }
    .timer {
        position: absolute;
        bottom: 60vh;
        left: 0;
        height: 5px;
        width: 100vw;
        background: ${colors.green};
        transform-origin: left;
        transition: 0.1s linear;
    }
`
const ranking = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div {
        width: 80%;
        height: 90%;
        margin: 2% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2% 0;
        overflow-y: scroll; 
        background: ${colors.lightGrey};
    }
`
const header = styled.header`
    background-color: ${colors.blue};
    height: 10%;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0 6px ${colors.darkBlue};
    position: relative;
`
const form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 5%;
    height: 20%;
    label {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-size: ${sizes.button};
        margin: 2vh 0;
        input {
            width: 70%;
            height: 5vh;
            border: none;
            outline: none;
            text-decoration: none;
            border-radius: 3px;
            padding-left: 10px;
            font-size: ${sizes.button};
        }
        input::placeholder {
            color: ${colors.darkGrey};
        }
    }
`
const start = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a:nth-of-type(1) {
        margin-top: 5%;
    }
    a:nth-of-type(2) {
        margin-top: 2%;
    }
`
const user = styled.div`
    background: white;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2%;
    margin: 10px 0;
    box-shadow: 0 6px ${colors.grey};
    .user {
        display: flex;
        width: 25%;
        justify-content: space-around;
        align-items: center;
        color: ${colors.darkGrey};
        img {
            height: 50%;
        }
    }
`
const score = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${colors.blue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        margin-bottom: 5vh;
    }
    p:nth-of-type(1) {
        margin-bottom: 3vh;
        span {
            font-weight: bold;
        }
    }
    a {
        margin-bottom: 2vh;
    }
`

export {
    home,
    ranking,
    header,
    form,
    user,
    room,
    score,
    start
}