
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

class PostScreen extends Component {
    
    render() {
        return(
            //<ScrollView >
                <View style={styles.container}>
                {/* <Grid>
                    <Col size={7}><TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>เด็กวิศวะ</Text>
                                    </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>เด็กนิเทศ</Text>
                                    </TouchableOpacity></Col>
                                    <Col size={1}></Col>
                    <Col size={7}><TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>เด็กวิศวะ</Text>
                                    </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>เด็กนิเทศ</Text>
                                    </TouchableOpacity></Col>
                </Grid> */}
                    <TouchableOpacity style={styles.button} onPress={()=> Actions.SelectEdu()} >
                        <Text style={styles.buttonText}>เด็กครุฯ</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=> Actions.SelectEngi()} >
                        <Text style={styles.buttonText}>เด็กวิศวะ</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=> Actions.SelectSci()} >
                        <Text style={styles.buttonText}>เด็กวิทย์</Text>
                        </TouchableOpacity>

                </View>
            //</ScrollView>

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