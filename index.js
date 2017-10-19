import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Inicio from './src/components/inicio';
import Cliente from './src/components/cliente';
import Contato from './src/components/contato';
import Empresa from './src/components/empresa';
import Servico from './src/components/servico';
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
            Cliente,
            Contato,
            Empresa,
            Servico
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
                    barBackgroundColor="#00796B"
                    label="Inicio"
                    icon={<Icon size={24} color="white" name="home" />}
                    />
                    <Tab
                    barBackgroundColor="#00796B"
                    label="Clientes"
                    icon={<Icon size={24} color="white" name="people" />}
                    />
                    <Tab
                    barBackgroundColor="#00796B"
                    label="Contato"
                    icon={<Icon size={24} color="white" name="perm-phone-msg" />}
                    />
                    <Tab
                    barBackgroundColor="#00796B"
                    label="Empresa"
                    icon={<Icon size={24} color="white" name="work" />}
                    />
                    <Tab
                    barBackgroundColor="#00796B"
                    label="Servicos"
                    icon={<Icon size={24} color="white" name="build" />}
                    />
                </BottomNavigation>
            </View>
        );
    }
}

AppRegistry.registerComponent('app5', () => App);
