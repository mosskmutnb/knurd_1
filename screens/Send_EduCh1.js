import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Alert,
    TextInput,
    TouchableOpacity
} from 'react-native';
// import { StackNavigator } from 'react-navigation'
import Icon from 'native-base'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Actions } from 'react-native-router-flux'
import Firebase from 'firebase'

class Send_EduCh1 extends Component {
    constructor(props){
        super(props)
        userId = Firebase.auth().currentUser.uid;
        this.countEduCh1 = Firebase.database().ref().child('countEduCh1');
        this.category = Firebase.database().ref().child('Account/'+userId+'/category');
        this.name = Firebase.database().ref().child('Account/'+userId+'/nickname');
        this.state = {
            educh1 : null,
            nameEduCh1 : '',
            countEduCh1 : '',
            category : ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount(){
        this.name.on('value',snap => {
            this.setState({ 
                nameEduCh1 : snap.val()
            });
        })
        this.countEduCh1.on('value',snap => {
            this.setState({ 
                countEduCh1 : snap.val() +1
            });
        })
        this.category.on('value',snap => {
            this.setState({ 
                category : snap.val()
            });
        })
    }
////
    onSubmit(){
        Firebase.database().ref('EduCh1/'+this.state.countEduCh1).set({
            detail : this.state.educh1,
            user : this.state.nameEduCh1,
            category : this.state.category
        })
        updateToCountEduCh1 = {
            countEduCh1 : this.state.countEduCh1
        };
        Firebase.database().ref().update(updateToCountEduCh1);
        this.setState({educh1 : ''})
    }
    render() {
          return(
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='EduCh1'
                        onChangeText={(educh1) => this.setState({educh1: educh1})}
                        value={this.state.educh1}
                        underlineColorAndroid ='rgba(255,255,255,0)'
                        keyboardAppearance = 'dark'
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onSubmit}
                    >
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                </View>
          );
      }
}
export default Send_EduCh1;

const styles = StyleSheet.create({
    container: {
        justifyContent : 'flex-end',
        backgroundColor : 'white',
        alignItems: 'center',
        flexDirection : 'row'

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
        width : '75%',
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
        alignItems: 'center',
        justifyContent : 'center'

    },
    button: {
        marginHorizontal : 5,
        backgroundColor : '#3399FF',
        borderRadius : 10,
        width : '20%',
        height : 41,
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