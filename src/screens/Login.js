import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../config/Images';
import Colors from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';

const Start = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray80,
      }}>
      <Image
        source={Images.logo}
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
          marginTop: '60%',
        }}>
        <PrimaryButton title="Sign up with Apple" color={Colors.dark} />
        <PrimaryButton title="Sign up with Google" color={Colors.light} />
        <PrimaryButton title="Sign up with Facebook" color={Colors.primary} />
        <Text
          style={{
            padding: 30,
            fontSize: 15,
            color: 'black',
            fontWeight: '500',
          }}>
          Or
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

export default Start;
