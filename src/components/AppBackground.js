import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors, Icons} from '../config';
import NavService from '../config/NavService';

export function AppBackground({
  children,
  title,
  back = false,
  nav = '',
  marginHorizontal,
}) {
  const onPress = () => {
    nav.length
      ? NavService.navigate(nav)
      : back
      ? NavService.goBack()
      : NavService.openDrawer();
  };

  //  console.log("==========="+ route.name)
  return (
    <View style={{flex: 1, backgroundColor: Colors.dark}}>
      <View
        style={{
          marginTop: getStatusBarHeight(),
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: Colors.darkGray,
              borderRadius: 10,
              left: 20,
              width: 38,
              height: 38,
              justifyContent: 'center',
            }}>
            <Image
              source={back ? Icons.back : Icons.menu}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                tintColor: Colors.white,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: Colors.grey,
                fontWeight: '700',
                fontSize: 18,
              }}>
              {title}
            </Text>
          </View>
        </>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  );
}

export default AppBackground;
