import React , { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
    StatusBar,
    ScrollView
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailReg : '',
            passwordReg : '',
            nickname : '',
            gender : '',
            age : '',
            faculty : '',
            logCheckPassword : ''
        };

        this.checkPasswordReg = this.checkPasswordReg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        
    }
    onSubmit() {
        const { emailReg ,passwordReg } = this.state;
        //Register Firebase
        if(
            this.state.emailReg != '' && 
            this.state.passwordReg != '' && 
            this.state.nickname != '' &&
            this.state.gender != '' &&
            this.state.age != ''&&
            this.state.faculty != ''
        )
            {
            Firebase.auth().createUserWithEmailAndPassword(emailReg, passwordReg)
            .then(() => { 
                userId = Firebase.auth().currentUser.uid;
                Firebase.database().ref('Account/'+ userId).set({
                    category : 'Tutor',
                    status : 'ยังไม่ทำการยืนยันตัวตน',
                    email : this.state.emailReg ,
                    nickname : this.state.nickname,
                    gender : this.state.gender,
                    age : this.state.age,
                    faculty : this.state.faculty,
                
                    // Post1 : {
                    //     postinfo : 'ราคาเท่าไร',
                    //     userPost : nickname,
                    //     comment1 : {
                    //         commentInfo : '20 ครับ',
                    //         userComment : nickname
                    //     },
                    //     comment2 : {
                    //         commentInfo : 'ครับ',
                    //         userComment : nickname
                    //     }
                    // },
                    // Post2 : {
                    //     postinfo : 'ขายยังครับ',
                    //     userPost : nickname,
                    //     comment1 : {
                    //         commentInfo : 'ยังครับ',
                    //         userPost : nickname,
                    //     },
                    //     comment2 : {
                    //         commentInfo : 'ครับ',
                    //         userPost : nickname,
                    //     }
                    // }
                    
                }); 
                alert('สมัครสมาชิกสำเร็จ');
                Actions.login();
            })
            .catch(() => {
                alert('สมัครสมาชิกไม่สำเร็จ')
            });
            
        } 
        else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
        
    }
    
    checkPasswordReg(){
        if (this.state.passwordReg.length < 7 ) {
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
            <ScrollView>
                <View style={styles.container}>
                    <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                        <Text style={styles.title}>
                            ลงทะเบียน
                        </Text>
                        <Text style={{marginVertical : 10, color:'#778899' ,fontSize : 24}}>
                            "ติวเตอร์"
                        </Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Nickname'
                        onChangeText={(nickname) => this.setState({nickname})}
                        value={this.state.nickname}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='อีเมล'
                        onChangeText={(emailReg) => this.setState({emailReg: emailReg.toLowerCase()})}
                        value={this.state.emailReg}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='รหัสผ่าน'
                        secureTextEntry
                        onChangeText={(passwordReg) => this.setState({passwordReg})}
                        value={this.state.passwordReg}
                        onBlur={this.checkPasswordReg}
                    />
                    <Text style={styles.alertText}>{this.state.logCheckPassword}</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='เพศ'
                        onChangeText={(gender) => this.setState({gender})}
                        value={this.state.gender}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='อายุ'
                        onChangeText={(age) => this.setState({age})}
                        value={this.state.age}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='คณะ'
                        onChangeText={(faculty) => this.setState({faculty})}
                        value={this.state.faculty}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onSubmit}
                    >
                        <Text style={styles.buttonText}>ลงทะเบียน</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#CC99FF' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color : '#FFFFFF',
        marginBottom: 15,
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 5,
        marginVertical : 10,
        paddingLeft : 15,
        fontSize : 17,
        
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '500',
        color : '#99CCFF',
        padding : 10,

    },
    button: {
        marginVertical : 25,
        backgroundColor : '#CCFFCC',
        borderRadius : 10,
        width : 190,
        height : 60,
        alignItems : 'center',
        justifyContent : 'center',
    },
    button_reg: {
        marginVertical : 5,
        backgroundColor : '#CC99FF',
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