
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import Send_EduCh2 from './Send_EduCh2';
import Show_EduCh2 from './Show_EduCh2'

class EduCh2 extends Component {
    render() {
        return(
            <View style={{
              flex : 1,
            }}>
                <Send_EduCh2 />
                <Show_EduCh2 />
                
            </View>
        );
    }
}
export default EduCh2;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'baseline' ,
        justifyContent : 'flex-start'
    }
  });