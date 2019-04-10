import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
    @import url('https://fonts.googleapis.com/css?family=Staatliches');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 24px;
    }
`

export default GlobalStyle