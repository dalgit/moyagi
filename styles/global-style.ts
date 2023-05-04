import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
      box-sizing: border-box;
    }

    
    ul{
      list-style-type: none;
      margin:0;
padding:0;
    }

    a{
      text-decoration: none;
       color: inherit; 
    }


          h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
        margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
  }

    button{
      border: none;
      cursor: pointer;
    }

    input{
    border: none;
    :focus {
      outline: none;
    }


    }


`
