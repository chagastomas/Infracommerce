import React from 'react';
import {Flex, Image, Text, Input, Checkbox} from 'rebass';
import {colors} from './styles/style';
import {CorpoStyle} from './styles/corpo_style';
import {CorpoStyleForm} from './styles/corpo_style';
import {CorpoStyleInput} from './styles/corpo_style';
import {CorpoStyleArrow} from './styles/corpo_style';
import {MediaFormStyle} from './styles/corpo_style';
import {MediaBorderStyle} from './styles/corpo_style';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import Select from 'react-select';
import axios from 'axios';
import InputMask from 'react-input-mask';

class Corpo extends React.Component{
    constructor(props){
        super(props);

        this._carInfo = null;

        this.state = {
            selectedOption: "",
            options: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.get("orgExpedidor.json")
        .then(res => {
            console.log(res.data);

            this._carInfo = res.data.results;

            var opt = [];
            for(var i = 0; i < this._carInfo.length; i++){
                var el = this._carInfo[i];
                opt.push({value: el.value, label: el.label});
            }

            this.setState({options: opt});
        })
        .catch(error => {
            console.log("servidor indisponivel");
        });
    }

    handleChange(e){
        this.setState({selectedOption: e});
    }

    render(){
        return(
            <CorpoStyle w={1} pt={"80px"} justifyContent="center" alignItems="center" flexDirection="column">

                <Flex px={["25px", "0", "0"]}>
                    <Text style={{fontSize: "34px"}}>dados pessoais</Text>
                </Flex>

                <MediaFormStyle>
                    <Flex pt={"65px"}>
                        <CorpoStyleForm flexDirection="column">
                            <Text pb={"8px"}>número do rg</Text>
                            <CorpoStyleInput>
                                <Input style={{padding: "9px 4px 8px 4px"}}/>
                            </CorpoStyleInput>
                        </CorpoStyleForm>
                        <MediaBorderStyle/>
                    </Flex>

                    <Flex pt={"65px"} pl={"3px"}>
                        <CorpoStyleForm flexDirection="column">
                            <Text pb={"8px"}>data de emissão</Text>
                            <CorpoStyleInput>
                                <InputMask style={{padding: "8px 4px 6px 4px", fontFamily: "GothamBold", fontSize: "15px", color: "#323132"}} mask="99/99/9999" maskChar=" " />
                            </CorpoStyleInput>
                        </CorpoStyleForm>
                        <MediaBorderStyle/>
                    </Flex>

                    <Flex pt={"65px"} pl={"3px"}>
                        <CorpoStyleForm flexDirection="column">
                            <Text pb={"8px"}>orgão expedidor</Text>
                            <CorpoStyleInput>
                                  <Select
                                      value={this.state.selectedOption}
                                      onChange={this.handleChange}
                                      placeholder="Selecione"
                                      options={this.state.options}
                                      style={{width: "200px"}}
                                      menuStyle={{marginLeft: "-4px", width: "206px", border: "3px solid #323132", borderRadius: "0 0 6px 6px"}}
                                  >
                                  </Select>
                            </CorpoStyleInput>
                        </CorpoStyleForm>
                    </Flex>
                </MediaFormStyle>

                <Flex>
                    <Flex pt={"40px"}>
                        <CorpoStyleForm>
                            <Text px={"10px"}>sexo</Text>
                            <div><Checkbox ml={"5px"}/>masculino</div>
                            <div><Checkbox ml={"5px"}/>feminimo</div>
                        </CorpoStyleForm>
                    </Flex>
                </Flex>

                <Flex py={"40px"}>
                    <Flex pt={"8px"} pb={"3px"} px={"10px"} style={{background: "#00cd74", color: "white"}}>continuar
                        <FaCaretRight width={"25px"} height={"25px"} color={"white"}/>
                    </Flex>
                </Flex>

            </CorpoStyle>
        );
    }
}

export default Corpo;
