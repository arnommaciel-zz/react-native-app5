import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NavigationBar extends Component {
    render() {
      return (
        <View style={styles.navigationBar.view}>
            <Text style={styles.navigationBar.titulo}>NavegationBar</Text>
        </View>
      );
    }
}

const styles = {
    navigationBar:{
        view:{
            backgroundColor: '#f0f0f0',
            height: 60,
            padding: 10,
            marginTop:20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        titulo:{
            fontSize:20,
            textAlign: 'center'
        }
    }
}