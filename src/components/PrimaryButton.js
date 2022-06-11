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
        backgroundColor: Colors.gray40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
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
