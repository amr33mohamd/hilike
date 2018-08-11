import React, { Component } from 'react';
import {Text,View,Switch,List,Left,Button,Body,Right,ListItem,Icon} from 'native-base';
import AppTemplate from "../appTemplate";
import componentExample from "../../../components/componentExample";
import Colors from "../../../constants/colors";
import Text2 from "../../../components/Text2";
import {Slider} from 'react-native'
export default class SearchScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      image:true,
      last_seen:3
    }
  }
    render() {
          const nav = this.props.navigation
            return (
            <AppTemplate navigation={nav} name="navigator.search">
            <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',backgroundColor:'#fafafb',height:75,borderWidth:.5,borderColor:'#c3c3c3'}}>
              <Text2 style={{color: 'black',flex:.9,fontSize:17,fontWeight:'bold'}} text="navigator.search"/>

            </View>
              <List>
                <ListItem>
                  <Text2  text="navigator.search"/>
                  <Switch
                  style={{flex:1}} onValueChange={(value)=>{
                    this.setState({image:value})
                  }} value={this.state.image} />
                </ListItem>
                <ListItem >
                  <Text2 style={{paddingRight:10}} text="navigator.search"/>
                  <Slider
                  style={{
                    flex:1,
                    paddingHorizontal:10
                    }} onValueChange={(value)=>{
                    this.setState({last_seen:value})
                  }} value={this.state.last_seen}

                  maximumValue={10}
                  minimumValue={1} />
                  <Text style={{paddingHorizontal:10}}>{Math.round(this.state.last_seen)} يوم </Text>
                </ListItem>
              </List>
              <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fafafb',flexDirection:'row',height:75,borderWidth:.5,borderColor:'#c3c3c3'}}>
                <Text2 style={{color: 'black',flex:.8,fontSize:17,fontWeight:'bold'}} text="navigator.search"/>
                <Icon name="lock" style={{flex:.1,fontSize:32,fontWeight:'bold'}} />
              </View>
              <List>
              <ListItem>
                <Text2 style={{paddingRight:10}} text="navigator.search"/>
                <Slider
                style={{
                  flex:1,
                  paddingHorizontal:10
                  }} onValueChange={(value)=>{
                  this.setState({last_seen:value})
                }} value={this.state.last_seen}

                maximumValue={10}
                minimumValue={1} />
                <Text style={{paddingHorizontal:10}}>{Math.round(this.state.last_seen)} يوم </Text>
              </ListItem>

              </List>
            </AppTemplate>
        );
    }
}
