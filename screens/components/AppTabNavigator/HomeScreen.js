
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 

class HomeScreen extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'center'
    }
  });