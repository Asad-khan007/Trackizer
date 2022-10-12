import React, {Component} from 'react';
import {Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../assets/Images';

export default ({size = 200}) => {
  return (
    <Image
      source={Images.logo2}
      style={{height: size, width: size, paddingTop: getStatusBarHeight()}}
      resizeMode="contain"
    />
  );
};
