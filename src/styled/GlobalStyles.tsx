import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    &:root {
        --gray-base: #202430;
        --gray-shade-60: #13161D;
        --gray-tint-30: #63666E;
        --gray-tint-50: #909298;
        --gray-tint-80: #D2D3D6;
        --gray-alpha-80: rgb(32 36 48 / .8); /* CSS Colors Level 4 */
        --gray-tint-90: #E9E9EA;

        --white-base: #fff;
        --primary-base: #358FE6;

        --extras-sun: #FFD371;
        --extras-moon: #7190FF;
        --extras-black-alpha-64: rgb(0 0 0 / .64);
        --extras-white-alpha-64: rgb(255 255 255 / .64);
        
        
        --main-header-bg: var(--gray-tint-80);
        --top-bar-icon-fill: var(--gray-base);
        --sidebar-bg: var(--gray-tint-90);
        --sidebar-icon-fill: var(--gray-tint-50);
        --sidebar-icon-active-fill: var(--gray-base);
        --sidebar-link-color: var(--gray-tint-50);
        --sidebar-link-active-color: var(--gray-base);
        --sidebar-menu-heading-color: var(--gray-tint-50);
        --theme-switcher-bg: var(--gray-tint-80);
        --theme-switcher-indicator: var(--extras-sun);
        --theme-switcher-indicator-pos: .25rem;
        --sun-icon-fill: var(--extras-black-alpha-64);
        --moon-icon-fill: var(--gray-tint-50);
        --main-header-link-color: var(--gray-base);
    }
    
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
        line-height: 1.4;
    }

    body {
        font-family: 'Figtree', sans-serif;
        color: var(--gray-base);
        margin: 0;
    }
    
    #root {
        display: flex;
        flex-direction: column;
    }
`;
