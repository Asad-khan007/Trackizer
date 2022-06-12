import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const PrimaryButton = ({onPress, color, image, title}) => {
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
        marginVertical: 10,
        flexDirection: 'row',
      }}>
      {image && (
        <Image
          resizeMode="contain"
          source={image}
          style={{
            height: 24,
            width: 24,
            marginRight: 10,
          }}
        />
      )}
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
