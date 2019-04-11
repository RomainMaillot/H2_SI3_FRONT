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
const category = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: ${colors.blue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    >a {
        height: 10%; 
    }
    .categories {
        width: 85%;
        margin-top: 10vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        a {
            width: 35vw;
            height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
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
    margin-top: 5%;
    label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-size: ${sizes.button};
        margin: 2vh 0;
        position: relative;
        input {
            width: 300px;
            height: 5vh;
            border: none;
            outline: none;
            text-decoration: none;
            border-radius: 3px;
            padding-left: 10px;
            box-sizing: border-box;
            font-size: ${sizes.button};
        }
        span {
            position: absolute;
            top: 0;
            right: 110%;
            color: white;
            height: 100%;
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
        margin: 0;
    }
    a:nth-of-type(2) {
        margin-top: 5%;
    }
    a:nth-of-type(3) {
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
const profil = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .user--infos {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;
        margin-top: 5vh;
        background: ${colors.lightGrey};
        align-items: center;
        .img {
            width: 20%;
            height: 80%;
            img {
                border: solid 1px ${colors.blue};
                border-radius: 50%;
                width: auto;
                padding: 40px;
                box-sizing: border-box;
                height: 100%;
            }
        }
        .infos {
            width: 50%;
            height: 90%;
            display: flex;
            flex-direction: column;
            border-radius: 3px;
            .datas {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
    .badges {
        background: ${colors.lightGrey};
        margin-top: 2vh;
        width: 80%;
        min-height: 500px;
        padding-left: 50px;
        box-sizing: border-box;
        border-radius: 3px;
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
    start,
    profil,
    category
}