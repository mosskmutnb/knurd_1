
import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 

class PostScreen extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>PostScreen</Text>
            </View>
        );
    }
}
export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'center'
    }
  });