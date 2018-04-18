
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
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/FontAwesome'; 

class PostScreen extends Component {
    
    render() {
        return(
            <ScrollView >
                <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กวิศวะ</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กนิเทศ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กครุฯ</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กถาปัตย์</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กวิทย์</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กนานาชาติ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กเตรียม</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>เด็กยำ (รวม)</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>

        );
    }
}
export default PostScreen;

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
        width : 380,
        height : 80,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
  });