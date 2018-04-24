
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import Send_SciCh1 from './Send_SciCh1';
import Show_SciCh1 from './Show_SciCh1'

class SciCh1 extends Component {
    render() {
        return(
            <View style={{
              flex : 1,
            }}>
                <Send_SciCh1 />
                <Show_SciCh1 />
                
            </View>
        );
    }
}
export default SciCh1;
const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'baseline' ,
        justifyContent : 'flex-start'
    }
  });