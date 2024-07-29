import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: teal;
      border-radius: 15px;
    }
`;

export default GlobalStyle;
