import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const TipsCard = () => {
  return (
    <View
      style={{
        height: 84,
        width: 362,
        backgroundColor: Colors.gray60,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginBottom: 5,
        marginTop: 5,
      }}>
      <Text
        style={{
          color: Colors.gray10,
          fontSize: 14,
          fontWeight: '600',
          marginBottom: 2,
        }}>
        Health Tips
      </Text>
      <Text
        style={{
          paddingVertical: 2,
          color: Colors.gray80,
        }}>
        COVID-19 affects different people in different ways. Most infected
        people will develop mild to moderate illness and recover without
        hospitalization
      </Text>
    </View>
  );
};

export default TipsCard;

const styles = StyleSheet.create({});
