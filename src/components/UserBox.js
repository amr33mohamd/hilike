import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import {View,I18nManager,ImageBackground} from "react-native";
import { strings,currentLocale } from '../i18n';

export default class Text2 extends Component {
    render() {
        return (
          <ImageBackground source={{uri:'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2014/10/dani-diamond-posing-how-to-model-photogaphy-best-top-fstoppersb.jpg'}} style={{flex: 1, height: 130,borderRadius: 10, marginHorizontal: 3, backgroundColor: 'white' }}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'white',textAlign:'left',alignSelf:'flex-start',flex:.5}}>Inside</Text>
              <Text style={{color:'white',textAlign:'right',alignSelf:'flex-end',flex:.5}}>Inside</Text>
            </View>
            <Text style={{color:'white',textAlign:'right',alignSelf:'flex-end',flex:.5,bottom:0,position:'absolute'}}>Amr Mohmed , 25 years old</Text>
          </ImageBackground>

        );
    }
}
