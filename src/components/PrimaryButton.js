import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const PrimaryButton = ({onPress, color, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 324,
        height: 50,
        backgroundColor: color,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        boxShadow: 'rgba(255, 121, 102, 0.5)',
      }}>
      <Text
        style={{
          color: Colors.white,
          fontSize: 15,
          fontWeight: '600',
          fontStyle: 'normal',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
