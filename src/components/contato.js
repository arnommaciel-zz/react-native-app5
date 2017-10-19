import React, { Component } from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import NavigationBar from './navigationBar';

const detalhes = require('app5/assets/images/detalhe_contato.png');

export default class Contato extends Component {

    getRouter = (index) => {
        this.props.onRouter(index);
    }

    render() {
      return (
        <View style={{flex:1, backgroundColor:"#fff"}}>
            <StatusBar barStyle="dark-content"/>
            <NavigationBar voltar navigator={() => {this.getRouter(0)}} backgroundColor="#00796B"/>
            <View style={styles.contato.header.view}>
                <Image source={detalhes}/>
                <Text style={styles.contato.header.titulo}>Contatos</Text>
            </View>
            <View style={styles.contato.menu.view}>    
                <Text style={styles.contato.menu.text}>Tel: +55 21 9999-9999</Text>
                <Text style={styles.contato.menu.text}>Email: email@email.com.br</Text>
            </View>
        </View>
      );
    }
}

const styles = {
    contato:{
        header:{
            view:{
                flexDirection: 'row',
                marginTop: 20
            },
            titulo:{
                fontSize: 30,
                color: '#61bd8c',
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