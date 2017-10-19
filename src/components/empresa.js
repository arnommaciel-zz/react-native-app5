import React, { Component } from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import NavigationBar from './navigationBar';

const detalhes = require('app5/assets/images/detalhe_empresa.png');

export default class Empresa extends Component {

    getRouter = (index) => {
        this.props.onRouter(index);
    }

    render() {
      return (
        <View style={{flex:1, backgroundColor:"#fff"}}>
            <StatusBar barStyle="dark-content"/>
            <NavigationBar voltar navigator={() => {this.getRouter(0)}} backgroundColor="#00796B"/>
            <View style={styles.empresa.header.view}>
                <Image source={detalhes}/>
                <Text style={styles.empresa.header.titulo}>A Empresa</Text>
            </View>
            <View style={styles.empresa.menu.view}>    
                <Text style={styles.empresa.menu.text}>A ATM consultoria está no mercado a mais de 20 anos...</Text>
            </View>
        </View>
      );
    }
}

const styles = {
    empresa:{
        header:{
            view:{
                flexDirection: 'row',
                marginTop: 20
            },
            titulo:{
                fontSize: 30,
                color: '#ec7148',
                marginLeft: 10,
                marginTop: 25
            }
        },
        menu:{
            view:{
                padding: 20,
                marginTop: 10
            },
            images:{
                margin: 15
            },
            text:{
                fontSize: 18,
            }
        }
    }
}