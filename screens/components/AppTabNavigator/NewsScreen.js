
import React,{ Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
//import { SocialIcon } from 'react-native-elements';

class NewsScreen extends Component {

      render() {

        return(
          // <Header
          //   leftComponent={{ icon: 'menu', color: '#fff' }}
          //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          //   rightComponent={{ icon: 'home', color: '#fff' }}
          // />
            <View style={styles.container}>
                <Text>NewsScreen</Text>
            </View>
        );
    }
}
export default NewsScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'center'
    }
  });