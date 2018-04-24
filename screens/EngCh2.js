
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import Send_EngCh2 from './Send_EngCh2';
import Show_EngCh2 from './Show_EngCh2'

class EngCh2 extends Component {
    render() {
        return(
            <View style={{
              flex : 1,
            }}>
                <Send_EngCh2 />
                <Show_EngCh2 />
                
            </View>
        );
    }
}
export default EngCh2;
const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'baseline' ,
        justifyContent : 'flex-start'
    }
  });