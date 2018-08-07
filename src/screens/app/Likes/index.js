import React, { Component } from 'react';
import {Text} from 'native-base';
import AppTemplate from "../appTemplate";
import Text2 from "../../../components/Text2";
import Colors from "../../../constants/colors";
import BlockBox from "../../../components/BlockBox";
export default class HomeScreen extends Component {
    render() {
      const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.likes">
              <BlockBox />
          </AppTemplate>
        );
    }
}
