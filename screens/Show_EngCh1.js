import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Alert,
    TextInput
} from 'react-native';
import { List, ListItem } from 'native-base';
// import { StackNavigator } from 'react-navigation'
import Icon  from 'native-base'
import Firebase from 'firebase';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux'
import Comment_Screen from './Comment_Screen'
import { Divider } from 'react-native-elements'
//import { height } from 'window-size';

class Show_EngCh1 extends Component {
  constructor(props) {
    i=+1;
    super(props);
    this.uid = Firebase.auth().currentUser.uid;
    this.engch1 = Firebase.database().ref("EngCh1");
    this.count = Firebase.database().ref().child('countEngCh1');
    this.state = {
        engch1: [],
        id : '',
        user : '',
        detail : '',
        count : '',
        category : '',
        
    };
    this.componentDidMount = this.componentDidMount.bind(this);
};

componentDidMount(){
    this.engch1.on('value', (data) => {
        const detail = [];
        data.forEach((de) => {
            detail.push({
                key: de.key,
                user: de.toJSON().user,
                detail: de.toJSON().detail,
                category: de.toJSON().category,
            });
            this.setState({
                engch1: detail
            });
        });
    });
}
    render() {
        return(
            <ScrollView>
                <FlatList
                        data={this.state.engch1}
                        renderItem={({item, index}) => {
                            return (
                                <Card>
                                    <Divider style={{ backgroundColor: '#B0E0E6' }}/>
                                    <Text style={styles.name}>{'\t'+item.user}<Text style={{color : item.category === 'Tutor' ? 'red' : 'blue'}}>{'  ( '+item.category+' )'}</Text></Text>
                                    <Text style={styles.detail}>{'\t\t' + item.detail}</Text>
                                </Card>
                            )
                        }}
                    >
                </FlatList>
            </ScrollView>
        );
    }
}
export default Show_EngCh1;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'baseline' ,
        justifyContent : 'flex-start',
        height : '100%'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color : '#003399',
        marginBottom: 10,
        
    },
    detail: {
        fontSize: 20,
        color : '#6666FF',
        marginBottom: 10,
    },
    flatlist : {
        marginVertical : 15
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color : '#111111',
        marginBottom: 15,
    },
});