import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import NewsScreen from './NewsScreen'
import PostScreen from './PostScreen'
import LiveScreen from './LiveScreen'

export class MainScreen extends Component {

        static navigationOptions = {
        tabBarPosition: 'bottom',
        headerLeft: <Icon name="ios-person-outline" style=
        {{ paddingLeft:10 }}/>,
        title: "My App",
        headerRight: <Icon style={{ paddingRight: 10}} 
        name="ios-create-outline" />
    }

  render() {
    return (
      <AppTabNavigator />
    )
  }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({
    NewsScreen: {
        screen: NewsScreen
    },
    PostScreen: {
        screen: PostScreen
    },
    LiveScreen: {
        screen: LiveScreen
    },
    
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
})

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'center'
      }
});
