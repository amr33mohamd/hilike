import React, { Component } from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base';
import {View,StyleSheet,Text} from 'react-native';
import Text2 from "../../components/Text2";
import { strings,currentLocale } from '../../i18n';

export default class AppTemplate extends Component {
    render() {
        return (
            <Container>
            <Header style= {style.header}>
                <Left>
                {
                  (currentLocale == 'ar')?<Button transparent>
                      <Icon  onPress={()=>{
                        this.props.navigation.openDrawer();
                      }} name='menu' color="white" style={{color:'white'}} />
                  </Button> :null
                }
                </Left>
                <Body style={style.body}>
                <Title style={{color:'white'}}><Text2 text={this.props.name} style={{color:'white'}}/></Title>
                </Body>
                <Right>
                {
                  (currentLocale == 'en')?<Button transparent>
                      <Icon  onPress={()=>{
                        this.props.navigation.openDrawer();
                      }} name='menu' color="white" style={{color:'white'}} />
                  </Button> :null
                }


                </Right>
            </Header>
                <Content>
                    { this.props.children }
                </Content>
            </Container>
        );
    }
}
const style=StyleSheet.create({
  body:{
    justifyContent: 'center',

  },
  header:{
    backgroundColor:'#e21347'
  },
  camera:{
       alignSelf: 'center',
       color:'#c0c0c0',
       paddingTop:15


    },
    viewIcon:{
      backgroundColor:'#e7e7e7',
      width:60,
       height:60,
       alignSelf: 'center',
       marginTop:30,
       borderRadius: 100,
       overflow:'hidden'
    },
    label:{
      marginTop:-5,
    },
    radio:{
      alignSelf:'flex-end',
    },
    inputText:{
      height:60
    },
    button:{
      alignSelf: 'center',
      padding:40,
      backgroundColor:'#e21347',
      marginTop:10

    },
    login:{
      color:'white',
      fontSize:18,

    }


});
