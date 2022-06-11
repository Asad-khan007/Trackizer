import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Colors from '../config/Colors';

const HomeBtn = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.btnColor,
          height: 32,
          width: 145,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 14,
          marginVertical: 10,
        }}>
        <Text
          style={{
            color: Colors.white,
          }}>
          Select your Contry
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeBtn;

const styles = StyleSheet.create({});
