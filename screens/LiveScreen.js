import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
    WebView,
    //Video,
    VideoControl,
    TouchableHighlight,
    Linking,
    Image
    } from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
//import { Video } from 'expo';
import AppLink from 'react-native-app-link';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

class SteamForm extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image
                    style= {{width: 100, height : 100 }}
                    source={require('./images/skype300.png')}
                />
                <Text style={styles.title}>Live Education</Text>
                <Text style={styles.title}>for Skype</Text>
                <View>
                    <Text style = {{color : 'white' , fontWeight : 'bold' , paddingHorizontal : 15}}>ข้อปฏิบัติ</Text>
                    <Text style = {{color : 'white', paddingHorizontal : 15}}>1.ก่อนทำการติวออนไลน์ผู้ใช้ต้องทำการโหลดแอปพลิเคชัน Skype ก่อน</Text>
                    <Text style = {{color : 'white', paddingHorizontal : 15}}>2.นำ ID Skype จากติวเตอร์ที่ได้ทำการนัดติวออนไลน์มากรอกในช่อง ID Skype</Text>
                    <Text style = {{color : 'white', paddingHorizontal : 15 ,paddingBottom : 25}}>3.กด Open Skype App เพื่อทำการติวออนไลน์</Text>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.skype.raider')}>
                    <Text style={styles.buttonText}>Open Skype App</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SteamForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#00BFFF' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    title: {
        fontSize: 28,
        //fontWeight: 'bold',
        color : '#F5FFFA',
        marginBottom : 15,
        
    },
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 20,
        marginVertical : 10,
        paddingLeft : 15,
        fontSize : 17,
    },
    buttonText: {
        fontSize : 22,
        fontWeight : '500',
        color : 'white',
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
    alertText: {
        color : '#660000',
        fontSize : 14
    }
  });