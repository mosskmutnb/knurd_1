
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import Send_SciCh2 from './Send_SciCh2';
import Show_SciCh2 from './Show_SciCh2'

class SciCh2 extends Component {
    render() {
        return(
            <View style={{
              flex : 1,
            }}> 
                <Send_SciCh2 />
                <Show_SciCh2 />
                
            </View>
        );
    }
}
export default SciCh2;
const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'baseline' ,
        justifyContent : 'flex-start'
    }
  });