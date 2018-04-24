
import React,{ Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome'; 

class SelectEdu extends Component {
    
    render() {
        return(
            //<ScrollView >
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={()=> Actions.EduCh1()} >
                        <Text style={styles.buttonText}>ชาแนล 1</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=> Actions.EduCh2()} >
                        <Text style={styles.buttonText}>ชาแนล 2</Text>
                        </TouchableOpacity>

                </View>
            //</ScrollView>

        );
    }
}
export default SelectEdu;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 15,
        margin: 2,
        //borderWidth: 1,
        backgroundColor: '#FFF'
    },
    grid: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'flex-start'
    },
    title3: {
        fontSize: 2,
        marginVertical : 1,
        fontWeight: 'bold',
        color : '#111111',
        marginBottom: 10,
    },
    button: {
        marginVertical : 5,
        backgroundColor : '#FF6600',
        borderRadius : 10,
        width : '100%',
        height : 60,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '300',
        color : '#FFFFFF',
        padding : 10,

    },
  });