import React, { Component } from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import NavigationBar from './navigationBar';

const detalhes = require('app5/assets/images/detalhe_cliente.png');
const cliente1 = require('app5/assets/images/cliente1.png');
const cliente2 = require('app5/assets/images/cliente2.png');


export default class Inicio extends Component {
    render() {
      return (
        <View>
            <StatusBar barStyle="dark-content"/>
            <NavigationBar/>
            <View style={styles.cliente.header.view}>
                <Image source={detalhes}/>
                <Text style={styles.cliente.header.titulo}>Nossos clientes</Text>
            </View>
            <View style={styles.cliente.menu.view}>    
                <Image style={styles.cliente.menu.images} source={cliente1}/>
                <Text style={styles.cliente.menu.text}>Lorem ipsum dolorem</Text>
            </View>
            <View style={styles.cliente.menu.view}>
                <Image style={styles.cliente.menu.images} source={cliente2}/>
                <Text style={styles.cliente.menu.text}>Lorem ipsum dolorem</Text>
            </View>
        </View>
      );
    }
}

const styles = {
    cliente:{
        header:{
            view:{
                flexDirection: 'row',
                marginTop: 20
            },
            titulo:{
                fontSize: 30,
                color: '#B9C941',
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
                marginLeft: 20
            }
        }
    }
}