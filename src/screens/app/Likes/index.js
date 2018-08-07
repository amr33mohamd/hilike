import React, { Component } from 'react';
import {Text} from 'native-base';
import AppTemplate from "../appTemplate";
import componentExample from "../../../components/componentExample";
import Colors from "../../../constants/colors";

export default class LikesScreen extends Component {
    render() {
          const nav = this.props.navigation
            return (
                <AppTemplate navigation={nav}>
                <Text style={{color: Colors.mainColor}}>likes</Text>
            </AppTemplate>
        );
    }
}
