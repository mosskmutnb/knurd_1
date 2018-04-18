import React,{ Component } from 'react'
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'

import RegisterSt_Screen from './RegisterSt_Screen';
import RegisterTT_Screen from './RegisterTT_Screen';

class SelectScreen extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title2}></Text>
                
                <Image
                    style= {{width: 100, height : 100 }}
                    source={require('./images/icon_app2.png')}
                />
                <Text style={styles.title3}></Text>
                <Text style={styles.title3}></Text>
                <TouchableOpacity
                    style={styles.button_tutor}
                    onPress={()=> Actions.register_tutor()}>
                    <Text style={{
                          color:'#FFFFFF',
                          fontSize:16
                    }}>TUTOR</Text>
                </TouchableOpacity>
                <Text style={styles.title3}>or</Text>
                <TouchableOpacity
                    style={styles.button_sdt}
                    onPress={()=> Actions.register_student()} >
                    <Text style={{
                          color:'#FFFFFF',
                          fontSize:16
                    }}>STUDENT</Text>
                </TouchableOpacity>
                <Text style={styles.title1}></Text>
                <Text style={styles.title1}></Text>
                <Text style={styles.title1}></Text>


            </View>
        );
    }
}
export default SelectScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'center'
    },
    button_tutor: {
        marginVertical : 5,
        backgroundColor : '#FF0000',
        borderRadius : 10,
        width : 340,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
    },
    button_sdt: {
        marginVertical : 5,
        backgroundColor : '#1E90FF',
        borderRadius : 10,
        width : 340,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
    },
    title1: {
        fontSize: 16,
        marginVertical : 10,
        color : '#778899',
        marginBottom: 16,
    },
    title2: {
        fontSize: 16,
        marginVertical : 20,
        color : '#778899',
        marginBottom: 16,
    },
    title3: {
        fontSize: 16,
        marginVertical : 6,
        color : '#778899',
        marginBottom: 16,
    },
  });