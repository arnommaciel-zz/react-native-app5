import React, { Component } from 'react';
import { View, StatusBar, Image } from 'react-native';
import NavigationBar from './navigationBar';

const logo = require('app5/assets/images/logo.png');
const clientes = require('app5/assets/images/menu_cliente.png');
const contato = require('app5/assets/images/menu_contato.png');
const empresa  = require('app5/assets/images/menu_empresa.png');
const servico = require('app5/assets/images/menu_servico.png');

export default class Inicio extends Component {
    render() {
      return (
        <View>
            <StatusBar barStyle="dark-content"/>
            <NavigationBar/>
            <View style={styles.inicio.logo.view}>
                <Image source={logo}/>
            </View>
            <View style={styles.inicio.menu.view}>
                <View style={styles.inicio.menu.grupos}>
                    <Image style={styles.inicio.menu.images} source={clientes}/>
                    <Image style={styles.inicio.menu.images} source={contato}/>
                </View>
                <View style={styles.inicio.menu.grupos}>
                    <Image style={styles.inicio.menu.images} source={empresa}/>
                    <Image style={styles.inicio.menu.images} source={servico}/>
                </View>
            </View>
        </View>
      );
    }
}

const styles = {
    inicio:{
        logo:{
            view:{
                marginTop:30,
                alignItems: 'center',  
            }
        },
        menu:{
            view:{
                alignItems: 'center',
                marginTop: 20
            },
            grupos:{
                flexDirection: 'row',
            },
            images:{
                margin: 15
            }
        }
    }
}