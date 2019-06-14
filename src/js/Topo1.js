import React from 'react';
import {Flex, Image, Text, Button} from 'rebass';
import {colors} from './styles/style';
import {Topo1Style} from './styles/topo1_style';
import {MediaMenuStyle} from './styles/topo1_style';

class Topo1 extends React.Component{
    constructor(props){
        super(props);

        this.clickButton = this.clickButton.bind(this);
    }
    clickButton(e){
        var bt = e.target;
        console.log(bt.dataset.id);
        console.log(bt.dataset.name);
        console.log(bt.dataset.idade);

        this.props.openPage(bt.dataset.id, bt.dataset.name, bt.dataset.idade);
    }
    render(){
        return(
            <Topo1Style w={1}>
                <Flex w={[1, 3/10, 3/10]} justifyContent="flex-start" alignItems="flex-start" pt={"25px"} pl={"25px"}>
                    <Image style={{width: "100%",maxWidth: "200px"}} src="images/logo.png"/>
                </Flex>
                <Flex w={[1,1,7/10]} justifyContent="flex-end" alignItems="center" pr={["5px", "45px", "45px"]} pl={["5px", "0", "0"]}>
                    <MediaMenuStyle justifyContent="flex-end" alignItems="center">
                        <Text pb={["5px", "0", "0"]}>como funciona</Text>
                        <Image pb={["5px", "0", "0"]} px={"15px"} src="images/circleMenu.png"/>
                        <Text pb={["5px", "0", "0"]}>privacidade</Text>
                        <Image pb={["5px", "0", "0"]} px={"15px"} src="images/circleMenu.png"/>
                        <Text>ajuda</Text>
                    </MediaMenuStyle>
                </Flex>
            </Topo1Style>
        );
    }
}

export default Topo1;
