import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

html, body, #root {
    height: 100%;
}

body{
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  
    font-family: "Poppins", sans-serif;
}

span{
  font-family: "Poppins", sans-serif;
}
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #95a5a6;
  width: 100%;
  height: 100vh;
`;
