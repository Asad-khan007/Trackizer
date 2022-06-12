import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const HealthCard = ({progress, title, icon, color}) => {
  return (
    <View
      style={{
        height: 84,
        width: 328,
        backgroundColor: Colors.gray70,
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 5,
      }}>
      <View
        style={{
          //   flexDirection: 'row',
          alignItems: 'center',
          width: 200,
          marginLeft: 55,
          paddingVertical: 6,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
          }}>
          {title}
        </Text>
      </View>
      <Image
        source={icon}
        style={{
          height: 34,
          width: 34,
          tintColor: Colors.gray50,
          position: 'absolute',
          top: 26,
          left: 10,
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          width: '80%',
          borderWidth: 2,
          position: 'absolute',
          top: 44,
          left: 55,
          borderColor: Colors.gray50,
        }}></View>
      <View
        style={{
          width: progress,
          borderWidth: 2,
          position: 'absolute',
          top: 44,
          left: 55,
          borderColor: color,
        }}></View>
    </View>
  );
};

export default HealthCard;

const styles = StyleSheet.create({});
