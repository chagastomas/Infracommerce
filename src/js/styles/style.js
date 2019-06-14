import styled, {injectGlobal} from 'styled-components';

injectGlobal`
    @font-face {
        font-family: "GothamMedium";
        src: url("fonts/gothammedium.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "GothamBold";
        src: url("fonts/gothambold.ttf") format("truetype");
        font-weight: bold;
        font-style: normal;
    }

    body{
        margin: 0;
        background: #fffdf0;
    }
`;

const colors = {
    bgTopo: "#232223",
    bgBody: "#fffdf0",
    bgTopo2: "#323132",
    blueColor: "#00b7cd",
    bgTopo3: "#eae8dd"
};

export {colors};
