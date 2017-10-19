import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const btnVoltar = require('../../assets/images/btn_voltar.png');

export default class NavigationBar extends Component {
    render() {
        if(this.props.voltar){
            return (
                <View style={[styles.navigationBar.view, {backgroundColor:this.props.backgroundColor}]}>
                    <TouchableHighlight 
                    underlayColor={this.props.backgroundColor}
                    activeOpacity={0.3}
                    style={{position: "absolute", left:10}} onPress={this.props.navigator}>
                        <Icon size={35} color="#fff" name="home" />
                    </TouchableHighlight>
                    <Text style={styles.navigationBar.titulo}>ATM Consultoria</Text>
                </View>
            );
        }
        return (
            <View style={[styles.navigationBar.view, {backgroundColor:this.props.backgroundColor}]}>
                <Text style={styles.navigationBar.titulo}>ATM Consultoria</Text>
            </View>
        );
    }
}

const styles = {
    navigationBar:{
        view:{
            backgroundColor: '#00796B',
            opacity:0.9,
            height: 60,
            padding: 10,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        titulo:{
            fontSize:20,
            textAlign: 'center',
            color: '#fff'
        }
    }
}