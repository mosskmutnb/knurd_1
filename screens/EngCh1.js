
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import Send_EngCh1 from './Send_EngCh1';
import Show_EngCh1 from './Show_EngCh1'

class EngCh1 extends Component {
    render() {
        return(
            <View style={{
              flex : 1,
            }}>
                <Send_EngCh1 />
                <Show_EngCh1 />
                
            </View>
        );
    }
}
export default EngCh1;
const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'baseline' ,
        justifyContent : 'flex-start'
    }
  });