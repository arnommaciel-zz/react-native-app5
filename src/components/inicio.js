import React, { Component } from 'react';
import { View, StatusBar, Image, TouchableHighlight } from 'react-native';
import NavigationBar from './navigationBar';

const logo = require('app5/assets/images/logo.png');
const clientes = require('app5/assets/images/menu_cliente.png');
const contato = require('app5/assets/images/menu_contato.png');
const empresa  = require('app5/assets/images/menu_empresa.png');
const servico = require('app5/assets/images/menu_servico.png');

export default class Inicio extends Component {
    constructor(props){
        super(props);
    }

    getRouter = (index) => {
        this.props.onRouter(index);
    }
    
    render() {
      return (
        <View style={{flex:1, backgroundColor:"#fff"}}>
            <StatusBar barStyle="dark-content"/>
            <NavigationBar backgroundColor="#00796B"/>
            <View style={styles.inicio.logo.view}>
                <Image source={logo}/>
            </View>
            <View style={styles.inicio.menu.view}>
                <View style={styles.inicio.menu.grupos}>
                    <TouchableHighlight 
                    underlayColor={'#b9c941'}
                    activeOpacity={0.3}
                    onPress={() => {this.getRouter(1)}}>
                        <Image style={styles.inicio.menu.images} source={clientes}/>
                    </TouchableHighlight>
                    <TouchableHighlight 
                    underlayColor={'#61bd8c'}
                    activeOpacity={0.3}
                    onPress={() => {this.getRouter(2)}}>
                        <Image style={styles.inicio.menu.images} source={contato}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.inicio.menu.grupos}>
                    <TouchableHighlight
                    underlayColor={'#ec7148'}
                    activeOpacity={0.3}
                    onPress={() => {this.getRouter(3)}}>
                        <Image style={styles.inicio.menu.images} source={empresa}/>
                    </TouchableHighlight>    
                    <TouchableHighlight 
                    underlayColor={'#19d1c8'}
                    activeOpacity={0.3}
                    onPress={() => {this.getRouter(4)}}>
                        <Image style={styles.inicio.menu.images} source={servico}/>
                    </TouchableHighlight>    
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