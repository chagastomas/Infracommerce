import {Flex} from 'rebass';
import {colors} from './style';

const Topo1Style = Flex.extend`
    height: 100px;
    background: ${colors.bgTopo};
    color: ${colors.bgBody};
    font-family: GothamMedium;
    font-size: 13px;
    text-transform: uppercase;
    user-select: none;
`;

const MediaMenuStyle = Flex.extend`
    @media (max-width: 520px){
        display: inline-block;            
    }
`;

export {Topo1Style};
export {MediaMenuStyle};
