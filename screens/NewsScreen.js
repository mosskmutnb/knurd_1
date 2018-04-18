import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Alert,
    TextInput
} from 'react-native';
// import { StackNavigator } from 'react-navigation'
import Icon from 'native-base'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux'

class NewsScreen extends Component {
    componentWillMount(){
      this.a = -1,
      this.b = -1
      this.state = {
        titlePost : ['post1','post2','ggwp'],
        detailPost : ['ราคาเท่าไรครับ','ดีไหมครับ','ควยครับ']
      }

    }
    titlePost(){
      return this.state.titlePost[this.a+=1]
      
    }
    detailPost(){
      return this.state.detailPost[this.b+=1]
    }
    comments(){
      windows.prompt("Please enter your name", "Harry Potter")
    }
      render() {
          post = [];

          for(let i = 0; i < 3; i++){

            post.push(
              <View key = {i}>
                <Card>
                    <CardTitle subtitle={this.titlePost()}/>
                      <CardContent text={this.detailPost()}/>
                    <CardAction separator={true} inColumn={false}>
                      <CardContent text="hdlkjfhsjlkhf"/>
                      <CardButton onPress={() => Actions.comment()}  title="comment"  color="#FEB557" />
                    </CardAction>
                  </Card>
              </View>
            )
          }
          return(
            <ScrollView>
              {post}
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
    flex : 1,
    alignItems : 'baseline' ,
    justifyContent : 'flex-start'
  }
});