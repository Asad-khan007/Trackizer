import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Spending from '../screen/Spending';
import Colors from '../config/Colors';
import Icons from '../config/Icons';

const Tab = createBottomTabNavigator();

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
                source={Icons.home}
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
                source={Icons.budget}
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

export default Mytabs;
