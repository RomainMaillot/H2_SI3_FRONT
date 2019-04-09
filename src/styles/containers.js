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
    flex-direction: row;
    width: 50%;
    margin-top: 5%;
    .show {
        transform: translateX(0);
        display: flex;
        justify-content: space-around;
        width: 100%;
        transition: all 0.5s;
    }
    .hidden {
        transform: translateX(100%);
        z-index: -1;
        position: absolute;
        opacity: 0;
    }
    input:nth-of-type(1) {
        width: 60%;
        border: none;
        outline: none;
        text-decoration: none;
        border-radius: 3px;
        font-size: ${sizes.button};
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

export {
    home,
    ranking,
    header,
    form,
    user,
    room
}