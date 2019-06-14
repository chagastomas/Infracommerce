import {Flex} from 'rebass';
import {colors} from './style';

const CorpoStyle = Flex.extend`
    font-family: GothamBold;
    text-transform: uppercase;
    color: ${colors.bgTopo2};
    user-select: none;
`;

const CorpoStyleForm = Flex.extend`
    font-family: GothamBold;
    text-transform: uppercase;
    color: ${colors.bgTopo2};
    user-select: none;
`;

const CorpoStyleInput = Flex.extend`
    border: 3px solid #323132;
    border-radius: 6px;
    user-select: none;
`;

const CorpoStyleArrow = Flex.extend`
    background: #00cd74;
    padding: 5px 5px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid red;
    height: 15px
`;

const MediaFormStyle = Flex.extend`
    @media (max-width: 768px){
        display: inline-block;
        padding: 0 20px;
    }
`;

const MediaBorderStyle = Flex.extend`
    margin: 45px 0 0 3px;
    border: 2px solid #323132;
    width: 6px;
    height: 2px;
    @media (max-width: 768px){
        margin: 0;
        border: 2px solid transparent;
    }
`;

export {CorpoStyle};
export {CorpoStyleForm};
export {CorpoStyleInput};
export {CorpoStyleArrow};
export {MediaFormStyle};
export {MediaBorderStyle};
