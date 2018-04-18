import React,{ Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HomeScreen extends Component {
    static navigatioOptions = {
        tabBarLabel: 'Tab1'
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
                This is tab 1
            </Text> 
        </View>   
    }
}
// export default HomeScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex : 1,
//     }
//   });