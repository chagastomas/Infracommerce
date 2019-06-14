import {Flex} from 'rebass';
import {colors} from './style';

const Topo2Style = Flex.extend`
    height: 100px;
    background: ${colors.bgTopo2};

    @media (max-width: 640px){
        display: inline-block;
        height: 245px;
        padding: 20px 0 0 20px;
    }
`;

const Topo2StyleInfoBlue = Flex.extend`
    color: ${colors.blueColor};
    font-family: GothamMedium;
    font-size: 10px;
    text-transform: uppercase;
    user-select: none;
`;

const Topo2StyleInfo = Flex.extend`
    color: ${colors.bgBody};
    font-family: GothamBold;
    font-size: 23px;
    text-transform: uppercase;
    user-select: none;
`;

export {Topo2Style};
export {Topo2StyleInfoBlue};
export {Topo2StyleInfo};
