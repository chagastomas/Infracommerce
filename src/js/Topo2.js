import React from 'react';
import {Flex, Image, Text} from 'rebass';
import {colors} from './styles/style';
import {Topo2Style} from './styles/topo2_style';
import {Topo2StyleInfoBlue} from './styles/topo2_style';
import {Topo2StyleInfo} from './styles/topo2_style';

class Topo2 extends React.Component{
    render(){
        return(
            <Topo2Style w={1} justifyContent="center" alignItems="center">

                <Flex pb={["10px", "0", "0"]} pr={["10px", "10px", "50px"]} flexDirection="column">
                    <Topo2StyleInfoBlue>
                        <Text>me chamo:</Text>
                    </Topo2StyleInfoBlue>

                    <Topo2StyleInfo>
                        <Text>PAUL IRISH</Text>
                    </Topo2StyleInfo>

                    <Topo2StyleInfoBlue>
                        <Text>cpf:</Text>
                        <Topo2StyleInfo>
                            <Text pl={"2px"} style={{fontSize: "10px"}}>762.888.176-92</Text>
                        </Topo2StyleInfo>
                    </Topo2StyleInfoBlue>
                </Flex>

                <Flex pb={["10px", "0", "0"]} pr={["10px", "10px", "50px"]} flexDirection="column">
                    <Topo2StyleInfoBlue>
                        <Text>preciso de:</Text>
                    </Topo2StyleInfoBlue>

                    <Topo2StyleInfo>
                        <Text>R$ 2.000</Text>
                    </Topo2StyleInfo>
                </Flex>

                <Flex pb={["10px", "0", "0"]} pr={["10px", "10px", "50px"]} flexDirection="column">
                    <Topo2StyleInfoBlue>
                        <Text>quero pagar em</Text>
                    </Topo2StyleInfoBlue>

                    <Topo2StyleInfo>
                        <Text>12 vezes</Text>
                    </Topo2StyleInfo>
                </Flex>

                <Flex pr={["10px", "10px", "0"]} flexDirection="column">
                    <Topo2StyleInfoBlue>
                        <Text>para:</Text>
                    </Topo2StyleInfoBlue>

                    <Topo2StyleInfo>
                        <Text>COMPRAR UMA BIKE</Text>
                    </Topo2StyleInfo>
                </Flex>

            </Topo2Style>
        );
    }
}

export default Topo2;
