import React from 'react';
import {Flex} from 'rebass';
import Topo1 from './Topo1';
import Topo2 from './Topo2';
import Topo3 from './Topo3';
import Corpo from './Corpo';

class Home extends React.Component{
    render(){
        return(
            <Flex w={1} flexWrap="wrap">
                <Topo1/>
                <Topo2/>
                <Topo3/>
                <Corpo/>
            </Flex>
        );
    }
}

export default Home;
