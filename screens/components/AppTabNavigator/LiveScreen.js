
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 

class LiveScreen extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>LiveScreen</Text>
            </View>
        );
    }
}
export default LiveScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'center'
    }
  });