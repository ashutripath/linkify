import { createGlobalStyle } from 'styled-components'

const bgColor = localStorage.getItem('bgColor')

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    font-family: "Comfortaa";
  }


  input[type='file'] {
    display: none;
  }

  html {
	font-size: 62.5%;
  height: 100%;
  }
  
  body {
	  margin: 0;
	  padding: 0;
	  height: 100%;
	  width: 100vw;
	  color: #fff;
	  font-size: 62.5%;
    background: ${bgColor || '#3a3742'};
  }

  #root {
	  height: 100%;
	  width: 100vw;
  }

  a {
	  text-decoration: none;
    color: #fff;
  }

`

export default GlobalStyles
