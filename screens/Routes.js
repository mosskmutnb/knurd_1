import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native';
import { Router , Stack , Scene , Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import navigationOptions from 'react-navigation'

import LoginScreen from './LoginScreen';
import NewsScreen from './NewsScreen';
import PostScreen from './PostScreen';
import LiveScreen from './LiveScreen';
import RegisterSt_Screen from './RegisterSt_Screen';
import RegisterTT_Screen from './RegisterTT_Screen';
import ProfileForm from './ProfileScreen';
import SelectScreen from './SelectScreen';
import Comment_Screen from './Comment_Screen';




class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
        <View 
            style={{
                flex:1, 
                flexDirection:'column', 
                tabBarPosition:'tob',
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

class Routes extends Component {
    // static navigationOptions = {
    //     headerLeft: <Icon name="user" style=
    //     {{ paddingLeft:10 }}/>,
    //     title: "KNURD",
    //     headerRight: <Icon style={{ paddingRight: 10}} 
    //     name="cogs" />
    // }
    render() {
        return(
            <Router>
                <Stack key="root"  >
                    <Scene key="login"            component={ LoginScreen }       title="เข้าสู่ระบบ"         initial={ true }     scorllBar hideNavBar={ true }  />

                    <Scene key="Selected"         component={ SelectScreen }      title="Select"           hideNavBar={ false } scorllBar />

                    <Scene key="register_student" component={ RegisterSt_Screen } title="REGISTOR STUDENT" hideNavBar={ true }  scorllBar />

                    <Scene key="register_tutor"   component={ RegisterTT_Screen } title="REGISTOR TUTOR"   hideNavBar={ true }  scorllBar  />

                    <Scene key="comment"   component={ Comment_Screen } title="Comment"   hideNavBar={ true }  scorllBar  />

                    <Scene key="tabbar" tabs={true} tabBarPosition="bottom" >
                        <Scene key="tab1" component={ NewsScreen }  title="News"    iconName="optin-monster" icon={TabIcon} initial={true} />
                        <Scene key="tab2" component={ PostScreen }  title="Post"    iconName="weixin"        icon={TabIcon} />
                        <Scene key="tab3" component={ LiveScreen }  title="Live"    iconName="podcast"       icon={TabIcon} />
                        <Scene key="tab4" component={ ProfileForm } title="Profile" iconName="user"          icon={TabIcon} />
                    </Scene> 
                </Stack>
            </Router>
        );
    }
}
export default Routes;
