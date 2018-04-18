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

class NewsScreen extends Component {
    constructor(props){
        super(props)
        this.countComment = Firebase.database().ref().child('countComment');
        this.state = {
            comment : null,
            countPost : '1',
            nameComment : '',
            countComment : ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount(){
        this.countComment.on('value',snap => {
            this.setState({ 
                countComment : snap.val() + 1
            });
        })
    }

    onSubmit(){
        Firebase.database().ref('Post/'+this.state.countPost+'/comment/'+this.state.countComment).set({
            detail : this.state.comment,
            user : this.state.nameComment
        })
        updateToCountComment = {
            countComment : this.state.countComment
        };
        Firebase.database().ref().update(updateToCountComment);

        alert('Sended');
        Actions.pop();
    }
    render() {
          return(
            <ScrollView>
                <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Comment'
                    onChangeText={(comment) => this.setState({comment: comment})}
                    value={this.state.comment}
                    underlineColorAndroid ='rgba(255,255,255,0)'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>Send to Comment</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
          );
      }
}
export default NewsScreen;

// const card = () => (
// <ScrollView>
 
//  <Card>
//    <CardTitle
//      subtitle="Number 6"
//    />
//    <CardContent text="Clifton, Western Cape" />
//    <CardAction 
//      separator={true} 
//      inColumn={false}>
//      <CardButton
//        onPress={() => {}}
//        title="Share"
//        color="#FEB557"
//      />
//      <CardButton
//        onPress={() => {}}
//        title="Explore"
//        color="#FEB557"
//      />
//    </CardAction>
//  </Card>
//  <Text>NewsScreen</Text>
//  </ScrollView>
// );

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