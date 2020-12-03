import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --blue-main: #193251;
    --blue-75: #7589A2;
    --blue-50: #E0E4E8;
    --blue-25: #F8F8F8;

    --orange-main: #FF5A36;
    --orange-75: #FF9C86;
    --orange-50: #FFBDAF;
    --orange-25: #FFDED7;

    --shadow-blue: 0px 2px 11px 0px rgba(25, 50, 81, 0.2);
    
    --shadow-orange: 0px 4px 10px #ff5a3666;
    
    --border-blue: 1px solid var(--blue-50);

    --size-xs: 4px;
    --size-s: 8px;
    --size-m: 12px;
    --size-l: 16px;
    --size-xl: 24px;
    --size-xxl: 32px;
  }
  
  *{
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
  }

`;
