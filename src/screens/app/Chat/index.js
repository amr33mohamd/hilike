import React, { Component } from 'react';
import {Text} from 'native-base';
import AppTemplate from "../appTemplate";
import componentExample from "../../../components/componentExample";
import Colors from "../../../constants/colors";
import Header2 from "../../../components/Header2";
import ChatBox from "../../../components/ChatBox";

export default class ChatScreen extends Component {
    render() {
      const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.chat">
                <ChatBox />
                <ChatBox />
                <ChatBox />
                <ChatBox />

            </AppTemplate>
        );
    }
}
