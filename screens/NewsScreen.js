
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import ComponentPost from './componentPost';
import Comment_Screen from './Comment_Screen'


class LiveScreen extends Component {
    render() {
        return(
            <View style={{
              flex : 1,
            }}>
                <Comment_Screen />
                <ComponentPost />
                
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