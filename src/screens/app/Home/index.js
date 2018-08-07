import React, { Component } from 'react';
import {Text} from 'native-base';
import {FlatList,View} from 'react-native';
import AppTemplate from "../appTemplate";
import Text2 from "../../../components/Text2";
import Colors from "../../../constants/colors";
import UserBox from "../../../components/UserBox";
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      people:[
        {
          name:'aaa'
        },
        {
          name:'aaa'
        },
        {
        name:'aaa'
      },
      {
      name:'aaa'
    },  {
        name:'aaa'
      },
      {
        name:'aaa'
      },
      {
      name:'aaa'
    },
    {
    name:'aaa'
  },  {
      name:'aaa'
    },
    {
      name:'aaa'
    },
    {
    name:'aaa'
  },
  {
  name:'aaa'
},
  ]
    }
  }
    render() {
      const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.home">
            <FlatList
            numColumns={2}
            ItemSeparatorComponent={
              () => <View style={{ height: 5, backgroundColor: 'transparent' }}></View>
            }
            contentContainerStyle={{ paddingVertical: 12 }}
              data={this.state.people}
              renderItem={({item}) => <UserBox />}
            />
          </AppTemplate>
        );
    }
}
