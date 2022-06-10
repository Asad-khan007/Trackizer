import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const HomeBtn = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.gray40,
        height: 32,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        marginVertical: 25,
      }}>
      <Text>Home Button</Text>
    </View>
  );
};

export default HomeBtn;

const styles = StyleSheet.create({});
