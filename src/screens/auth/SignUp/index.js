import React, { Component } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon, Form, Item, Input,ListItem,Radio,} from 'native-base';

export default class SignUp extends Component {
    render() {
      return (
          <Container >
              <Header style= {style.header}>
              <Left/>
                <Body style={style.body}>
                  <Title>تسجيل جديد</Title>
                </Body>
              <Right>
                <Button transparent>
                <Icon type='Ionicons' name='arrow-forward'/>
                </Button>
                </Right>
              </Header>

              <Content>
                <View style={style.viewIcon}>
              <Icon size={'70'} type='Ionicons' name='camera' style={style.camera}/>
              </View>

          <Form>
            <Item>
              <Input style={style.inputText} placeholder="اسم المستخدم" />
            </Item>
            <Item >
              <Input style={style.inputText} placeholder="العمر" />
            </Item>
            <Item >
              <Input style={style.inputText} placeholder="البلد" />
            </Item>
            <Item >
              <Input style={style.inputText} placeholder="البريد الالكتروني" />
            </Item>
            <Item >
              <Input style={style.inputText} placeholder="كلمة المرور"/>
            </Item>
          </Form>

           <ListItem style={style.radio}>
            <Text style={{fontSize:18}} >ذكر</Text>
              <Radio selected={false} />
            
            <Text style={{paddingLeft:15,fontSize:18,paddingBottom:12}}>انثى</Text>
              <Radio selected={true} />
          </ListItem>
           <View >
          <Button  rounded style={style.button} >
            <Text style={style.login}>تسجيل</Text>
          </Button>
          </View>
              </Content>
          </Container>
        
      );
    }
  }
  
  const style=StyleSheet.create({
    body:{
      justifyContent: 'center',
      marginLeft:'23%',
      
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
      radio:{
        alignSelf:'flex-end',
      },
      inputText:{
        height:60
      },
      button:{
        alignSelf: 'center',
        padding:10,
        backgroundColor:'#e21347',
        width:250
     
      },
      login:{
        color:'white',
        fontSize:18,
        
      }


  });