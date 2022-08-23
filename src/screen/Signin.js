import {StyleSheet, Text, View, Image, TextInput, Switch} from 'react-native';
import React, {useState} from 'react';
import Images from '../config/Images';
import Colors from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';
import {NavigationContainer} from '@react-navigation/native';

const Signin = ({navigation}) => {
  const [remember, setRemember] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray80,
        paddingHorizontal: 20,
      }}>
      <Image
        source={Images.logo}
        style={{
          height: 30,
          width: 185,
          position: 'absolute',
          top: 40,
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          paddingTop: 18,
          width: '100%',
          paddingBottom: 20,
        }}>
        <Text
          style={{
            paddingLeft: 10,
            paddingBottom: 10,
            color: 'white',
          }}>
          Login
        </Text>
        <TextInput
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 10,
            width: '100%',
          }}
        />
        <Text
          style={{
            paddingLeft: 10,
            paddingBottom: 10,
            paddingTop: 20,
            color: 'white',
          }}>
          Password
        </Text>
        <TextInput
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 10,
            width: '100%',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 320,
          height: 25,
          marginTop: 15,
          marginBottom: 15,
          paddingLeft: 10,
        }}>
        <Switch
          value={remember}
          onChange={() => {
            setRemember(!remember);
          }}
          style={{
            height: 24,
            width: 24,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 6,
            marginLeft: 6,
          }}></Switch>
        <Text
          style={{
            paddingLeft: 10,
            color: 'white',
          }}>
          Remember Me
        </Text>
        <Text
          style={{
            paddingLeft: 60,
            color: 'white',
          }}>
          Forget Password
        </Text>
      </View>

      <PrimaryButton
        color={Colors.primary}
        onPress={() => {
          navigation.navigate('Signin');
        }}
        title="Sign in"
      />
      <View
        style={{
          height: 90,
          width: 330,
          position: 'absolute',
          top: 600,
          alignItems: 'center',
        }}>
        <Text
          style={{
            paddingBottom: '3%',
            fontSize: 16,
            color: 'white',
            fontWeight: '500',
          }}>
          If you don't have an account ?
        </Text>
        <PrimaryButton
          onPress={() => {
            navigation.navigate('Signin');
          }}
          color={Colors.primary}
          title="Sign Un"
        />
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
