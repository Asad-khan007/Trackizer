import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationService from './src/config/NavService';
import Signup from './src/screen/Signup';
import Mytabs from './src/components/bottomTab';
import Home from './src/screen/Home';
import Spending from './src/screen/Spending';
import PreLogin from './src/screen/PreLogin';
import Start from './src/screen/Start';
import Login from './src/screen/Login';
import Option from './src/screen/Option';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Starter" component={Start} />
      <Stack.Screen name="PreLogin" component={PreLogin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={Mytabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Spending" component={Spending} />
      <Stack.Screen name="Option" component={Option} />
    </Stack.Navigator>
  );
};

const AppNavigation = ({route}) => {
  const user = useSelector(state => state.MainReducer.user);
  const [state, setState] = useState(!user ? 'AuthStack' : 'UserStack');

  return (
    <>
      <NavigationContainer
        ref={ref => NavigationService.setTopLevelNavigator(ref)}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={state}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="UserStack" component={UserStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;

// import React, {Component} from 'react';

// // Navigation here
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import {NavService} from './config';
// import {connect} from 'react-redux';

// //Screens
// import {Auth, UserAppStack} from './containers';

// const Stack = createNativeStackNavigator();

// class Navigation extends Component {
//   state = {
//     initialRouteName: 'Auth',
//   };

//   render() {
//     return (
//       <NavigationContainer
//         ref={ref => NavService.setTopLevelNavigator(ref)}
//         screenOptions={{animation: 'simple_push'}}>
//         <Stack.Navigator
//           screenOptions={{
//             contentStyle: {backgroundColor: 'transparent'},
//             animation: 'simple_push',
//           }}
//           initialRouteName={initialRouteName}>
//           <Stack.Screen
//             name="Auth"
//             component={Auth}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="UserAppStack"
//             component={UserAppStack}
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

// function mapStateToProps({reducer: {user}}) {
//   return {
//     user,
//   };
// }

// export default connect(mapStateToProps)(Navigation);

// import React from 'react';
// import {View, Text, Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   newSubscribtion,
//   Home,
//   Spending,
//   Subscibtion,
//   Setting,
//   Card,
//   Calendar,
//   Start,
//   Login,
//   Signin,
//   Signup,
//   Plus,
// } from './src/screens';
// import Colors from './src/config/Colors';
// import Images from './src/config/Images';

// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// const AuthStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Start" component={Start} />
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Signin" component={Signin} />
//       <Stack.Screen name="Signup" component={Signup} />
//     </Stack.Navigator>
//   );
// };

// const Mytabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={() => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         initialRouteName: 'Plus',
//         activeColor: Colors.gray50,
//         tabBarStyle: {
//           backgroundColor: Colors.gray80,
//           alignSelf: 'center',
//           // borderRadius: 18,
//           // marginBottom: 5,
//           width: '100%',
//         },
//       })}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <Image
//                 source={Images.home}
//                 resizeMode="contain"
//                 style={{
//                   height: 20,
//                   width: 20,
//                   tintColor: focused ? Colors.gray10 : Colors.gray50,
//                 }}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Spend"
//         component={Spending}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <Image
//                 source={Images.budget}
//                 resizeMode="contain"
//                 style={{
//                   height: 20,
//                   width: 20,
//                   tintColor: focused ? Colors.gray10 : Colors.gray50,
//                 }}
//               />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const HomeStack = () => {
//   return (
//     <Stack.Navigator
//       // defaultScreenOptions={{
//       //   cardStyle: {
//       //     backgroundColor: 'red',
//       //   },
//       // }}
//       screenOptions={{
//         headerShown: false,
//         cardStyle: {
//           backgroundColor: 'transparent',
//         },
//       }}>
//       <Stack.Screen name="Mytabs" component={Mytabs} />
//       <Stack.Screen name="Setting" component={Setting} />
//       <Stack.Screen name="Spend" component={Spending} />
//       <Stack.Screen name="Card" component={Card} />
//     </Stack.Navigator>
//   );
// };

// const Nav = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="AuthApp" component={AuthStack} />
//         <Stack.Screen name="HomeApp" component={HomeStack} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Nav;
