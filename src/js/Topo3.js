import React from 'react';
import {Flex, Image, Text} from 'rebass';
import {colors} from './styles/style';
import {Topo3Style} from './styles/topo3_style';

class Topo3 extends React.Component{
    render(){
        return(
            <Topo3Style w={1} justifyContent="center" alignItems="center">

                <Flex pb={["10px", "0", "0"]} pr={["0", "5px", "60px"]}>
                    <Image src="images/bola1.png"/>
                    <Text pt={"8px"} pl={"10px"} style={{color:"#b2b1a9"}}>simule</Text>
                </Flex>

                <Flex pb={["10px", "0", "0"]} pr={["0", "5px", "60px"]}>
                    <Image src="images/bola2.png"/>
                    <Text pt={"8px"} pl={"10px"} style={{color:"#323132"}}>preencha o cadástro</Text>
                </Flex>

                <Flex pb={["10px", "0", "0"]} pr={["0", "5px", "60px"]}>
                    <Image src="images/bola3.png"/>
                    <Text pt={"8px"} pl={"10px"} style={{color:"#b2b1a9"}}>revise seu pedido</Text>
                </Flex>

                <Flex>
                    <Image src="images/bola4.png"/>
                    <Text pt={"8px"} pl={"10px"} style={{color:"#b2b1a9"}}>finalize o pedido</Text>
                </Flex>

            </Topo3Style>
        );
    }
}

export default Topo3;
