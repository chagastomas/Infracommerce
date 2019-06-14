import {Flex} from 'rebass';
import {colors} from './style';

const Topo3Style = Flex.extend`
    height: 50px;
    background: ${colors.bgTopo3};
    font-family: GothamBold;
    font-size: 13px;
    text-transform: uppercase;
    user-select: none;

    @media (max-width: 640px){
        display: block;
        height: 190px;
        padding: 20px 0 0 20px;
    }
`;

export {Topo3Style};
