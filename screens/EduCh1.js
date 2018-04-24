
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import Send_EduCh1 from './Send_EduCh1';
import Show_EduCh1 from './Show_EduCh1'

class EduCh1 extends Component {
    render() {
        return(
            <View style={{
              flex : 1,
            }}>
                <Send_EduCh1 />
                <Show_EduCh1 />
                
            </View>
        );
    }
}
export default EduCh1;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'baseline' ,
        justifyContent : 'flex-start'
    }
  });