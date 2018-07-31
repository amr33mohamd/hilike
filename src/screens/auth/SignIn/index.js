import React, { Component } from 'react';
import {Text} from 'native-base';
import AuthTemplate from "../../auth/authTemplate";
import Colors from "../../../constants/colors";
export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <AuthTemplate>
                <Text style={{color: Colors.mainColor}}>SignIn</Text>

            </AuthTemplate>
        );
    }
}