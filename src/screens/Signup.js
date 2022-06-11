import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import Images from '../config/Images';
import Colors from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';
// import {useNavigation} from '@react-navigation/native';

const Signup = ({navigation}) => {
  // const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray80,
        paddingHorizontal: 20,
      }}>
      <Image
        source={Images.logo}
        style={{
          height: 30,
          width: 185,
          position: 'absolute',
          top: 40,
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          paddingTop: 18,
          width: '100%',
        }}>
        <Text
          style={{
            paddingLeft: 10,
            paddingBottom: 10,
            color: 'white',
          }}>
          E-mail address
        </Text>
        <TextInput
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 10,
            width: '100%',
            height: 50,
          }}
        />
        <Text
          style={{
            paddingLeft: 10,
            paddingBottom: 10,
            paddingTop: 20,
            color: 'white',
          }}>
          Password
        </Text>
        <TextInput
          style={{
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 10,
            width: '100%',
            height: 50,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: 335,
          height: 5,
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            paddingRight: 2,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            width: 80,
            height: 5,
          }}></View>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            width: 80,
            height: 5,
          }}></View>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            width: 80,
            height: 5,
          }}></View>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            width: 80,
            height: 5,
          }}></View>
      </View>
      <Text
        style={{
          paddingTop: 25,
          paddingBottom: 20,
          color: Colors.gray30,
        }}>
        use 8 and more characters with a mix of letters, numbers & symbols
      </Text>
      <PrimaryButton
        onPress={() => {
          navigation.navigate('HomeApp');
        }}
        color={Colors.primary}
        title="Get Started , It's free !"
      />
      <View
        style={{
          height: 90,
          width: 330,
          position: 'absolute',
          top: 600,
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Text
          style={{
            paddingBottom: '3%',
            fontSize: 16,
            color: 'white',
            fontWeight: '500',
            paddingVertical: 10,
          }}>
          Already have an account ?
        </Text>
        <PrimaryButton
          onPress={() => {
            navigation.navigate('Signup');
          }}
          color={Colors.primary}
          title="Sign Up"
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
