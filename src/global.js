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
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,900&display=swap');
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    background-color: #fafafa;
    font-family: "Roboto", sans-serif;
}
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;
