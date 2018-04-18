import React,{ Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HomeScreen2 extends Component {
    static navigatioOptions = {
        tabBarLabel: 'Tab2'
    }

    render() {
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }> 
            <Text style={{fontSize:30}}>
                This is tab 2
            </Text> 
        </View>   
    }
}