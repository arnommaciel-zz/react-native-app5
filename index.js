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
            ActiveScreen: <Inicio/>
        };
    }
    
    showView(index){
        let screens = [
            <Inicio/>,
            <Cliente/>
        ];
        this.setState({
            ActiveScreen: screens[index]
        });
    }

    render() {
      return (
        <View style={{flex:1}}>
            {this.state.ActiveScreen}
            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
                onTabChange={(tabIndex) => this.showView(tabIndex)}>
                <Tab
                barBackgroundColor="#37474F"
                label="Movies & TV"
                icon={<Icon size={24} color="white" name="tv" />}
                />
                <Tab
                barBackgroundColor="#00796B"
                label="Music"
                icon={<Icon size={24} color="white" name="music-note" />}
                />
                <Tab
                barBackgroundColor="#5D4037"
                label="Books"
                icon={<Icon size={24} color="white" name="book" />}
                />
            </BottomNavigation>
        </View>
      );
    }
}

AppRegistry.registerComponent('app5', () => App);
