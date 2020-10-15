import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        background-color: ${({ theme }) => theme.colors.primary.contrast};
        color: ${({ theme }) => theme.colors.secondary.principal};

        font-size: ${({ theme }) => theme.font.body.fontSize};
        font-weight: ${({ theme }) => theme.font.body.fontWeight};
        line-height: ${({ theme }) => theme.font.body.lineHeight};
        text-align: ${({ theme }) => theme.font.body.textAlign};
        font-family: ${({ theme }) => theme.font.body.fontFamily};
    }
    h1 {
        font-size: ${({ theme }) => theme.font.h1.fontSize};
        font-weight: ${({ theme }) => theme.font.h1.fontWeight};
        line-height: ${({ theme }) => theme.font.h1.lineHeight};
        text-align: ${({ theme }) => theme.font.h1.textAlign};
        font-family: ${({ theme }) => theme.font.h1.fontFamily};
        
        color: ${({ theme }) => theme.colors.primary.principal};
        margin: 1rem 0;
    }
    h2 {
        font-size: ${({ theme }) => theme.font.h2.fontSize};
        font-weight: ${({ theme }) => theme.font.h2.fontWeight};
        line-height: ${({ theme }) => theme.font.h2.lineHeight};
        text-align: ${({ theme }) => theme.font.h2.textAlign};
        font-family: ${({ theme }) => theme.font.h2.fontFamily};
    }
    p {
        font-size: ${({ theme }) => theme.font.p.fontSize};
        font-weight: ${({ theme }) => theme.font.p.fontWeight};
        line-height: ${({ theme }) => theme.font.p.lineHeight};
        text-align: ${({ theme }) => theme.font.p.textAlign};
        font-family: ${({ theme }) => theme.font.p.fontFamily};
        padding: 0.5rem 3rem;
    }
`;
export default GlobalStyle;
