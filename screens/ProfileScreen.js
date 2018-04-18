import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    StatusBar,
    } from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Divider } from 'react-native-elements';
import { Constants } from 'expo';


class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        userId = Firebase.auth().currentUser.uid;
        this.nickname = Firebase.database().ref().child('Account/'+userId+'/nickname');
        this.email = Firebase.database().ref().child('Account/'+userId+'/email');
        this.gender = Firebase.database().ref().child('Account/'+userId+'/gender');
        this.category = Firebase.database().ref().child('Account/'+userId+'/category');
        this.faculty = Firebase.database().ref().child('Account/'+userId+'/faculty');
        this.age = Firebase.database().ref().child('Account/'+userId+'/age');

        this.state = {
            nickname : '',
            email : '',
            gender : '',
            category : '',
            faculty : '',
            age : ''
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    };

    componentDidMount(){
        
        this.nickname.on('value',snap =>{
            this.setState({
                nickname : snap.val()
            });
        });
        this.email.on('value',snap =>{
            this.setState({
                email : snap.val()
            });
        });
        this.gender.on('value',snap =>{
            this.setState({
                gender : snap.val()
            });
        });
        this.category.on('value',snap =>{
            this.setState({
                category : snap.val()
            });
        });
        this.faculty.on('value',snap =>{
            this.setState({
                faculty : snap.val()
            });
        });
        this.age.on('value',snap =>{
            this.setState({
                age : snap.val()
            });
        });
    }

    logOutAuth(){
        Firebase.auth().signOut()
        .then(() => {
            Alert.alert(
                'Are you sure ?',
                'You want to log out on this time ?',
                [
                    {text: 'OK', onPress: () => Actions.reset("login" )},
                    {text: 'Cancel', onPress: () => console.log('cancel') , style: 'cancel'},
                ],
                { cancelable: false }
              )
        })
        .catch(() => {
            alert("Can't log out on this time.");
        });
    };

    render() {
        return(
            <View style={styles.container}>
                <View style={{alignItems : 'center',justifyContent: 'center'}}> 
                    <Text style={styles.title}>
                        My Profile
                    </Text>
                    {/* <Image
                        style= {{width: 100, height : 100 }}
                        source={require('../../images/profile.png')}
                    /> */}
                    <View>
                        <Divider style={{ backgroundColor: '#778899' }} />
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Nickname : {this.state.nickname}
                        </Text>                        
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Gender : {this.state.gender}
                        </Text>
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Age : {this.state.age}
                        </Text>
                        <Divider style={{ backgroundColor: '#778899' }} />
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Faculty : {this.state.faculty}
                        </Text>
                        <Divider style={{ backgroundColor: '#778899' }} />
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            Category : {this.state.category}
                        </Text>
                        <Divider style={{ backgroundColor: '#778899' }} />
                        <Text style={{marginVertical : 12, color:'#455a64',fontSize : 18}}>
                            
                             {this.state.email}
                        </Text>



                        
                    </View>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={()=> this.logOutAuth()}
                    >
                        <Text style={styles.buttonText}>Log out</Text>  
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        marginTop : 23,
        backgroundColor : '#FFFAF0' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 28,
        //fontWeight: 'bold',
        color : '#455a64',
        marginVertical : 20
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 20,
        marginVertical : 3,
        paddingLeft : 15,
        fontSize : 17,
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '500',
        color : 'red',
        padding : 10,
    },
    button: {
        marginVertical : 25,
        backgroundColor : '#FFFACD',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#778899'
    },
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });