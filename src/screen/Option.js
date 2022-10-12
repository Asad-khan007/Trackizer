import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Colors from '../config/Colors';
import AppBackground from '../components/AppBackground';
import NavService from '../config/NavService';
import Metrix from '../config/Metrix';
import AuthMiddleware from '../Store/Middleware/AuthMiddleware';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

const Option = ({navigation}) => {
  const dispatch = useDispatch();

  function LogoutUser() {
    dispatch(
      AuthMiddleware.LogoutUser({
        callback: response => {
          if (response) {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: 'AuthStack',
                  },
                ],
              }),
            );
          }
        },
      }),
    );
  }
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: Colors.gray80,
      }}>
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            width: '100%',
            borderWidth: 2,
            borderColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: Metrix.FontLarge,
              padding: 10,
            }}>
            About Software
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            borderWidth: 2,
            borderColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: Metrix.FontLarge,
              padding: 10,
            }}>
            Licences & Agreement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            borderWidth: 2,
            borderColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: Metrix.FontLarge,
              padding: 10,
            }}>
            Health Orginazation
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={LogoutUser}
          style={{
            width: '100%',
            borderWidth: 2,
            borderColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: Colors.primary,
              fontSize: Metrix.FontLarge,
              padding: 10,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Option;
