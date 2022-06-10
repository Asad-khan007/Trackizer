import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  newSubscribtion,
  Home,
  Spending,
  Subscibtion,
  Setting,
  Card,
  Calendar,
  Start,
  Login,
  Signin,
  Signup,
  Plus,
} from './src/screens';
import Colors from './src/config/Colors';
import Images from './src/config/Images';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const Mytabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        initialRouteName: 'Plus',
        activeColor: Colors.gray50,
        tabBarStyle: {
          backgroundColor: Colors.gray80,
          alignSelf: 'center',
          // borderRadius: 18,
          // marginBottom: 5,
          width: '100%',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.home}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? Colors.gray10 : Colors.gray50,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Spend"
        component={Spending}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.budget}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? Colors.gray10 : Colors.gray50,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarIcon: () => {
            return (
              <View
                style={{
                  backgroundColor: Colors.primary,
                  height: 80,
                  width: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 40,
                  position: 'absolute',
                  bottom: 10,
                  borderWidth: 8,
                  borderColor: Colors.gray20,
                }}>
                <Text style={{color: Colors.white, fontSize: 30}}>+</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.calendar}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? Colors.gray10 : Colors.gray50,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.card}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: focused ? Colors.gray10 : Colors.gray50,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      // defaultScreenOptions={{
      //   cardStyle: {
      //     backgroundColor: 'red',
      //   },
      // }}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Mytabs" component={Mytabs} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
  );
};

const AppNavigatoin = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthApp" component={AuthStack} />
        <Stack.Screen name="HomeApp" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatoin;
