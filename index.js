import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Inicio from './src/components/inicio';
import Cliente from './src/components/cliente';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            ActiveScreen: Inicio,
            activeTab: 0
        };
    }
    
    getRouter(index){
        let routers = [
            Inicio,
            Cliente
        ];
        this.setState({
            ActiveScreen: routers[index],
            activeTab: index
        });
    }

    render() {
        let ActiveScreen = this.state.ActiveScreen;
        return (
            <View style={{flex:1}}>
                <ActiveScreen onRouter={(router) => this.getRouter(router)}/>
                <BottomNavigation
                    labelColor="#fff"
                    rippleColor="#fff"
                    activeTab={this.state.activeTab}
                    activeLabelColor="#fff"
                    style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
                    onTabChange={(index) => this.getRouter(index)}>
                    <Tab
                    barBackgroundColor="#37474F"
                    label="Inicio"
                    icon={<Icon size={24} color="white" name="home" />}
                    />
                    <Tab
                    barBackgroundColor="#00796B"
                    label="Clientes"
                    icon={<Icon size={24} color="white" name="people" />}
                    />
                    <Tab
                    barBackgroundColor="#5D4037"
                    label="Contato"
                    icon={<Icon size={24} color="white" name="mail" />}
                    />
                    <Tab
                    barBackgroundColor="#5D4037"
                    label="Empresa"
                    icon={<Icon size={24} color="white" name="book" />}
                    />
                    <Tab
                    barBackgroundColor="#5D4037"
                    label="Servicos"
                    icon={<Icon size={24} color="white" name="book" />}
                    />
                </BottomNavigation>
            </View>
        );
    }
}

AppRegistry.registerComponent('app5', () => App);
