import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../config/Images';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PrimaryButton from '../components/PrimaryButton';

const Start = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
        paddingHorizontal: 20,
      }}>
      <View style={{flex: 2, alignItems: 'center', marginBottom: 15}}>
        <Image
          style={{
            height: 30,
            width: 185,
            position: 'absolute',
            top: 40,
          }}
          source={Images.logo}
        />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          paddingTop: 18,
        }}>
        <Image source={Images.frame} />
      </View>

      <Text
        style={{
          paddingTop: 50,
          color: Colors.white,
          fontSize: 15,
          fontWeight: '400',
          flex: 1,
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        quibusdam animi impedit?
      </Text>

      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          paddingBottom: 10,
        }}>
        <PrimaryButton
          title="Get Started"
          color={Colors.primary}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <PrimaryButton title="Already have an account" color={Colors.dark} />
      </View>
    </View>
  );
};

export default Start;
