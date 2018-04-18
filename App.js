//วิธีที่3//
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import MainScreen from './screens/MainScreen'
import Firebase from 'firebase'

import LoginScreen from './screens/LoginScreen'
import Routes from './screens/Routes'
import NewsScreen from './screens/NewsScreen'
import PostScreen from './screens/PostScreen'

export default class App extends React.Component {
    componentWillMount() {
    Firebase.initializeApp({
      apiKey: "AIzaSyCCHMRLee11FfyCBDKQrOxJBVStk-KaLxs",
      authDomain: "knurd-kmutnb.firebaseapp.com",
      databaseURL: "https://knurd-kmutnb.firebaseio.com",
      projectId: "knurd-kmutnb",
      storageBucket: "knurd-kmutnb.appspot.com",
      messagingSenderId: "244600486438"
    })
  }
  render() {
    return (
      <Routes />
    )
  }
}

const AppStackNavigator = StackNavigator({

  Main: {
    screen: MainScreen
  }
})

  const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor:'#fff',
        alignItems : 'center',
        justifyContent : 'center'
      }
});

//วิธีที่3//

// วิธีที่1//
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Platform } from 'react-native';
// import { TabNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons';
// import Routes from './screens/Routes'
// import Firebase from 'firebase'

// export default class App extends React.Component {
//   componentWillMount() {
//     Firebase.initializeApp({
//       apiKey: "AIzaSyCCHMRLee11FfyCBDKQrOxJBVStk-KaLxs",
//       authDomain: "knurd-kmutnb.firebaseapp.com",
//       databaseURL: "https://knurd-kmutnb.firebaseio.com",
//       projectId: "knurd-kmutnb",
//       storageBucket: "knurd-kmutnb.appspot.com",
//       messagingSenderId: "244600486438"
//     })
//   }
//   render() {
//       return (
//         <Routes/>
//       );
//     }
//   }

//   const styles = StyleSheet.create({
//     container: {
//         flex : 1,
//         backgroundColor:'#fff',
//         alignItems : 'center' ,
//         justifyContent : 'center'
//     }
//   });
// วิธีที่1//


//วิธีที่2//
// import HomeScreen from './screens/HomeScreen'
// import HomeScreen2 from './screens/HomeScreen2'
// var MainScreenNavigator = TabNavigator({
//     Tab1: {screen: HomeScreen},
//     Tab2: {screen: HomeScreen2}
// }, {
//     tabBarPosition:'bottom',
//     swipeEnabled: true,
//     tabBarOptions: {
//       activeTintColor: 'white',
//       activeBackgroundColor: 'red',
//       inactiveTintColor:'white',
//       inactiveBackgroundColor: 'white',
//     }
// }
// );

// MainScreenNavigator.navigationOptions = {
//   title: "Tab example"
// };
// export default MainScreenNavigator;
//วิธีที่2// 
