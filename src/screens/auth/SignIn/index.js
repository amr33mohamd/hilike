import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Container, Text , Content, Form, Item, Input, Label,Button}from 'native-base';


import AuthTemplate from "../../auth/authTemplate";
import Colors from "../../../constants/colors";
import server from "../../../constants/config"
export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
          categories:[{
            id:1,
            name:'first category'
          }]
        }
    }
    componentDidMount(){
      // Imprtant Read it --------------------------------->
      /*
      (here we use fetch function to get data from server and we set it into
      state via function called setState
      and we have constant for the server imported
      use it  : server.url
    )
      --hint
      please note that hint is created for you to search for the names mentioned here
      and don't always ask project owner make google your best friend
      */
    }
    render() {
        return (
            <AuthTemplate>
               <View style={style.Container}>
      <Image source={require('./logo.png')} style={style.image}/>
      
      
        
        <Content style={{backgroundColor: 'white'}}>
          <Form style ={style.input}>
            <Item floatingLabel>
              <Label style={style.label}>اسم المستخدم او البريد الاكتروني</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={style.label}>كلمة المرور</Label>
              <Input secureTextEntry={true}/>
            </Item>
              <Label style ={style.label2}>مساعدة| نسيت كلمة المرور </Label>
              <Button large rounded style={style.button}>
            <Text style={{color:'#d4e4e4'}}>تسجيل الدخول</Text>
          </Button>
         <TouchableOpacity style={style.opacity} onPress={()=>this.props.navigation.navigate('SignUp')}>
           <Text style={{color:'#2fb2c2'}}>تسجيل جديد </Text>
            </TouchableOpacity>
            
          </Form>                             
        </Content>
      
      </View>

            </AuthTemplate>
        );
    }
}



const style=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'white',
    padding:20,
    height:'100%'
  },
  
   input:{
     marginTop:40,
     
   },
   label:{
     color:'black'
   },
   label2:{
     alignSelf:'flex-start',
     paddingBottom:30,
     
   },
   button:{
     alignSelf: 'center',
     padding:15,
     backgroundColor:'#2fb2c2',
     
   },
   opacity:{
     paddingTop: 15,
     alignSelf: 'center',
     fontSize:20,
   },
   image:{
     height:200,
     width:200,
     alignSelf: 'center',
     marginTop:30
   }
   
 
 });