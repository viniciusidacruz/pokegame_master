import { createGlobalStyle } from 'styled-components'

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body * {
        font-family: ${({ theme }) => theme.fonts.family.default};
    }

    a {
        color: inherit;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.3);
        }
    }
`
