import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import Images from '../assets/Images';
import {Colors} from '../config';
import Logo from './Logo';

export default ({children}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo size={320} />
        </View>
        <View style={{flex: 3}}>{children}</View>
      </ScrollView>
    </View>
  );
};
