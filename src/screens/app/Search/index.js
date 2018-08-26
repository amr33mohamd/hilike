import React, { Component } from 'react';
import {Text,View,Switch,List,Left,Button,Body,Right,ListItem,Icon} from 'native-base';
import AppTemplate from "../appTemplate";
import componentExample from "../../../components/componentExample";
import Colors from "../../../constants/colors";
import Text2 from "../../../components/Text2";
import Text3 from "../../../components/Text3";
import _ from 'lodash'
import {Slider} from 'react-native'
export default class SearchScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      image:true,
      last_seen:3,
      age:18,
      maximum:1,
      countries:[
        {
          id:1,
          name:'امريكا',
        },
        {
          id:2,
          name:'مصر'
        }
      ],
      current_country:1,
    }
  }
    render() {
          const nav = this.props.navigation
            return (
            <AppTemplate navigation={nav} name="navigator.search">

            {
              // normal search part ----->
            }
            <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',backgroundColor:'#fafafb',height:75,borderWidth:.5,borderColor:'#c3c3c3'}}>
              <Text2 style={{color: 'black',flex:.9,fontSize:17,fontWeight:'bold'}} text="search.n_search"/>
            </View>
              <List>
              {
                // search input ----->
              }
                <ListItem>
                  <Text2  text="navigator.search"/>
                  <Switch
                  style={{flex:1}} onValueChange={(value)=>{
                    this.setState({image:value})
                  }} value={this.state.image} />
                </ListItem>
                {
                  // last seen input ------->
                }
                <ListItem >
                  <Text2 style={{paddingRight:10}} text="search.l_seen"/>
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
                {
                  // maximum input ----------->
                }
                <ListItem >
                  <Text2 style={{paddingRight:10}} text="search.max"/>
                  <Slider
                  style={{
                    flex:1,
                    paddingHorizontal:10
                    }} onValueChange={(value)=>{
                    this.setState({maximum:value})
                  }} value={this.state.maximum}

                  maximumValue={40}
                  minimumValue={1} />
                  <Text style={{paddingHorizontal:10}}>{Math.round(this.state.maximum)} km </Text>
                </ListItem>
              </List>

              {
                // advanced search section -------->
              }
              <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#fafafb',flexDirection:'row',height:75,borderWidth:.5,borderColor:'#c3c3c3'}}>
                <Text2 style={{color: 'black',flex:.8,fontSize:17,fontWeight:'bold'}} text="search.a_search"/>
                <Icon name="lock" style={{flex:.1,fontSize:32,fontWeight:'bold'}} />
              </View>
              <List>
              {
                // age input ---------->
              }
              <ListItem>
                <Text2 style={{paddingRight:10}} text="search.age"/>
                <Slider
                style={{
                  flex:1,
                  paddingHorizontal:10
                  }} onValueChange={(value)=>{
                  this.setState({age:value})
                }} value={this.state.age}

                maximumValue={40}
                minimumValue={18} />
                <Text style={{paddingHorizontal:10}}>{Math.round(this.state.age)} </Text>
              </ListItem>
              {
                // country input ------>
              }

              <ListItem>
                  <Text2 style={{paddingRight:10,flex:.8}} text="search.country"/>
                <Right style={{flexDirection:'row',flex:.2}}>
                  <Text3 style={{paddingRight:20}} text={_.find(this.state.countries, ['id', this.state.current_country]).name}/>
                  <Icon name="ios-arrow-back" style={{fontSize:25}} />
                </Right>
              </ListItem>

              </List>
            </AppTemplate>
        );
    }
}
