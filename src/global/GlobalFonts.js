import { createGlobalStyle } from "styled-components";

import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoBlack from './fonts/Roboto-Black.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoLight from './fonts/Roboto-Light.ttf';
import RobotoThin from './fonts/Roboto-Thin.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto Regular';
        src: local('Roboto'),
        url(${RobotoRegular}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Light';
        src: local('RobotoLight'),
        url(${RobotoLight}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Thin';
        src: local('RobotoThin'),
        url(${RobotoThin}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Black';
        src: local('RobotoBlack'),
        url(${RobotoBlack}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Bold';
        src: local('RobotoBold'),
        url(${RobotoBold}) format('truetype');
        font-style: normal;
    }

`;