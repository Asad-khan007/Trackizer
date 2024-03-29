import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Icons from '../config/Icons';
import Colors from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';

const PreLogin = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray80,
      }}>
      <Image
        source={Icons.logo}
        style={{
          height: 30,
          width: 185,
          position: 'absolute',
          top: 60,
        }}
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          // paddingTop: 28,
          marginTop: Dimensions.get('screen').height / 3,
        }}>
        <PrimaryButton
          image={Icons.apple}
          title="Sign up with Apple"
          color={'#66b447'}
        />
        <PrimaryButton
          image={Icons.google}
          title="Sign up with Google"
          color={'#4285F4'}
        />
        <PrimaryButton
          image={Icons.facebook}
          title="Sign up with Facebook"
          color={'#4267B2'}
        />
        <Text
          style={{
            padding: 30,
            fontSize: 18,
            color: 'white',
            fontWeight: '500',
          }}>
          OR
        </Text>
        <PrimaryButton
          title="Sign up with Email"
          onPress={() => {
            navigation.navigate('Signup');
          }}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

export default PreLogin;
