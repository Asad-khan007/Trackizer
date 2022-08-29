import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppBackground from '../components/AppBackground';
import NavService from '../config/NavService';

const Option = () => {
  return (
    <AppBackground
      back
      onPress={() => {
        NavService.goBack();
      }}
      profile={false}
      title={'Options'}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello world</Text>
      </View>
    </AppBackground>
  );
};

export default Option;
