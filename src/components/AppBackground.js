import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
// import Images from '../assets/Images';
import {Colors, NavService} from '../config';
import Icons from '../config/Icons';

export function AppBackground({
  children,
  title,
  back = false,
  marginHorizontal,
  rightIconNav = () => {},
  onPress,
  profile = true,
  edit = false,
}) {
  // const onPress = () => {
  //   nav.length
  //     ? NavService.navigate(nav)
  //     : back
  //     ? NavService.goBack()
  //     : NavService.openDrawer();
  // };

  return (
    <View style={{flex: 1}}>
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
              backgroundColor: '#353542',
              borderRadius: 10,
              left: 20,
              width: 38,
              height: 38,
              justifyContent: 'center',
            }}>
            <Image
              source={Icons.back}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                // tintColor: '#353542',
              }}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={{
                color: '#353542',
                fontWeight: '700',
                fontSize: 18,
              }}>
              {title}
            </Text>
          </View>
          {profile && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Profile');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#353542',
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
          )}
          {edit && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={rightIconNav}
              style={{
                position: 'absolute',
                right: 20,
                width: 38,
                height: 38,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#353542',
              }}>
              <Image
                source={Icons.budget}
                style={{
                  width: 22,
                  height: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
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
