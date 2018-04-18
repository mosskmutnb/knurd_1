
import React,{ Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar
    } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Firebase from 'firebase';
import MainScreen from './MainScreen';
import SelectScreen from './SelectScreen';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mosza@gmail.com' ,
            password: 'mosza1234',
            logCheckPassword : null
        };
        this.checkPassword = this.checkPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
   
    onSubmit() {
        const { email ,password } = this.state;
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {  
                Actions.reset("tabbar");
            })
            .catch(() => {
                alert("อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง \n กรุณากรอกข้อมูลใหม่อีกครั้ง");
            });
    }

    checkPassword(){
        if (this.state.password.length < 7 ) {
            this.setState({ 
                logCheckPassword : 'ต้องกรอก Password มากกว่า 8 ตัวอักษร !' 
            } );
        } 
        else {
            this.setState({ 
                logCheckPassword : '' 
            } );
        }
    }

    render() {
        return(
            
            <View style={styles.container}>
            <Text style={styles.alertText}>{this.state.logCheckPassword}</Text>
            <Text style={styles.title3}>      
            </Text>
            <Image
            style= {{width: 100, height : 100 }}
            source={require('./images/icon_app2.png')}
            /> 
                <Text style={styles.title3}>
                        
                </Text>

                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        KNURD
                    </Text>
                </View>
                
                <TextInput
                    style={styles.textInput}
                    placeholder='อีเมล'
                    onChangeText={(email) => this.setState({email: email.toLowerCase()})}
                    value={this.state.email}
                    underlineColorAndroid ='rgba(255,255,255,0)'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='รหัสผ่าน'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    onBlur={this.checkPassword}
                />
                <Text style={styles.alertText}>{this.state.logCheckPassword}</Text>
                <Text style={styles.title3}>
                        
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button_create}
                    onPress={()=> Actions.Selected()}
                >
                    <Text 
                    style={{
                        color:'#778899',
                        fontSize:16
                    }}>
                        CREATE AN ACCOUNT
                    </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#FFFFFF' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color : '#111111',
        marginBottom: 30,
    },
    title2: {
        fontSize: 16,
        marginVertical : 1,
        fontWeight: 'bold',
        color : '#111111',
        marginBottom: 30,
    },
    title3: {
        fontSize: 2,
        marginVertical : 1,
        fontWeight: 'bold',
        color : '#111111',
        marginBottom: 10,
    },
    textInput: {
        height : 42 ,
        width : 340,
        backgroundColor : '#F8F8FF',
        borderRadius : 5,
        marginVertical : 10,
        paddingLeft : 15,
        fontSize : 17,
        
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '500',
        color : '#FFFFFF',
        padding : 10,

    },
    button: {
        marginVertical : 5,
        backgroundColor : '#3399FF',
        borderRadius : 10,
        width : 340,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
    },
    button_create: {
        marginVertical : 10,
        backgroundColor : '#FFFFFF',
        borderRadius : 10,
        width : 230,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center',
    },
    
    
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });