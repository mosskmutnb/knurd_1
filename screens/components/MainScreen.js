import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

// import HomeScreen from './AppTabNavigator/HomeScreen'
// import PostScreen from './AppTabNavigator/PostScreen'
// import LiveScreen from './AppTabNavigator/LiveScreen'
import LoginScreen from './loginscreen';
import NewsScreen from './NewsScreen';
import PostScreen from './PostScreen';
import LiveScreen from './LiveScreen';
import RegisterSt_Screen from './RegisterSt_Screen';
import RegisterTT_Screen from './RegisterTT_Screen';
import ProfileForm from './ProfileScreen';

class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
        <View 
            style={{
                flex:1, 
                flexDirection:'column', 
                alignItems:'center', 
                alignSelf:'center', 
                justifyContent: 'center'}}>
            <Icon 
                style={{color: '#5D6D7E' }} 
                name={this.props.iconName || "circle"} 
                size={20}
            />
        </View>
      );
    }
  }

class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name="user" style=
        {{ paddingLeft:10 }}/>,
        title: "KNURD",
        headerRight: <Icon style={{ paddingRight: 10}} 
        name="cogs" />
    }


        render() {
        return(
            <Router>
                <Stack key="root"  >
                    <Scene 
                        key="login" 
                        component={ LoginScreen } 
                        title="เข้าสู่ระบบ" 
                        initial={ true }
                        hideNavBar={ true }
                        scorllBar
                    />
                    <Scene 
                        key="register_student" 
                        component={ RegisterSt_Screen } 
                        title="ลงทะเบียนนักเรียน" 
                        hideNavBar={ true }
                        scorllBar
                    />
                    <Scene 
                        key="register_tutor" 
                        component={ RegisterTT_Screen } 
                        title="ลงทะเบียนติวเตอร์" 
                        hideNavBar={ true }
                        scorllBar
                    />
                    <Scene key="tabbar" 
                        tabs={true} 
                        tabBarPosition="bottom"
                    >
                        <Scene key="tab1" 
                        
                            hideNavBar={false} 
                            component={ NewsScreen } 
                            title="News" 
                            initial={true} 
                            iconName="optin-monster"
                            icon={TabIcon}
                        />
                        <Scene key="tab2" 
                            // hideNavBar={false} 
                            component={ PostScreen } 
                            title="Post"
                            iconName="weixin"
                            icon={TabIcon}
                        />
                        <Scene key="tab3" 
                            // hideNavBar={false} 
                            component={ LiveScreen } 
                            title="Live"
                            iconName="podcast"
                            icon={TabIcon} 
                            
                        />
                        <Scene key="tab4" 
                            hideNavBar={true} 
                            component={ ProfileForm } 
                            title="Profile"
                            iconName="user"
                            icon={TabIcon} 
                            
                        />
                    </Scene> 
                </Stack>
            </Router>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center' ,
        justifyContent : 'center'
    }
  });