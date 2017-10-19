import React, { Component } from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import NavigationBar from './navigationBar';

const detalhes = require('app5/assets/images/detalhe_servico.png');


export default class Servico extends Component {

    getRouter = (index) => {
        this.props.onRouter(index);
    }

    render() {
      return (
        <View style={{flex:1, backgroundColor:"#fff"}}>
            <StatusBar barStyle="dark-content"/>
            <NavigationBar voltar navigator={() => {this.getRouter(0)}} backgroundColor="#00796B"/>
            <View style={styles.servico.header.view}>
                <Image source={detalhes}/>
                <Text style={styles.servico.header.titulo}>Serviços</Text>
            </View>
            <View style={styles.servico.menu.view}>    
                <Text style={styles.servico.menu.text}>- Consultoria</Text>
                <Text style={styles.servico.menu.text}>- Processos</Text>
                <Text style={styles.servico.menu.text}>- Acompanhamento de Processos</Text>
            </View>
        </View>
      );
    }
}

const styles = {
    servico:{
        header:{
            view:{
                flexDirection: 'row',
                marginTop: 20
            },
            titulo:{
                fontSize: 30,
                color: '#19d1c8',
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