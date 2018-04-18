
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 

class LiveScreen extends Component {
    // static navigationOptions = {
    //     headerLeft: <Icon name="user" style=
    //     {{ paddingLeft:10 }}/>,
    //     headerRight: <Icon style={{ paddingRight: 10}} 
    //     name="cogs" />
    // }
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
        alignItems : 'baseline' ,
        justifyContent : 'flex-start'
    }
  });