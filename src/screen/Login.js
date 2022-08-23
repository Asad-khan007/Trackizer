import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Images from '../config/Images';
import Colors from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';
import validate from '../config/Common';
import Toast from 'react-native-toast-message';
import {SIGNUP} from '../Store/constants';
import {useDispatch, useSelector} from 'react-redux';
import AuthMiddleware from '../Store/Middleware/AuthMiddleware';

// import {useNavigation} from '@react-navigation/native';

const Login = ({navigation}) => {
  // const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valide, setValide] = useState(true);

  const dispatch = useDispatch();

  function onSubmit() {
    // let {name, email, confirmed, password, phone, date} = this.state;
    if (email && password) {
      if (validate(email)) {
        if (password.length >= 8) {
          dispatch(
            AuthMiddleware.SignUp({
              email,
              password,
              callback: response => {
                if (response.user) {
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        {
                          name: 'App',
                        },
                      ],
                    }),
                  );
                } else {
                  console.log(response);
                }
                console.log('response', response.message);
              },
            }),
          );
        } else {
          Toast.show({
            text1: 'Password length must be greater than 8',
            type: 'error',
            onHide: 3000,
          });
        }
      } else
        Toast.show({
          text1: 'Please enter a valid email address',
          type: 'error',
          onHide: 3000,
        });
    } else {
      Toast.show({
        text1: 'Required fields are empty',
        type: 'error',
        onHide: 3000,
      });
    }
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.gray80}}>
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
            width: '100%',
            marginTop: Dimensions.get('screen').height / 4,
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
            placeholderTextColor={Colors.gray60}
            placeholder="Enter your email"
            style={{
              borderColor: valide ? '#fff' : 'red',
              borderWidth: 1,
              borderRadius: 10,
              width: '100%',
              height: 50,
              fontSize: 18,
              paddingHorizontal: 10,
              color: Colors.white,
            }}
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          {!valide && (
            <Text style={{color: 'red', marginTop: 5, marginLeft: 5}}>
              Email is not valide
            </Text>
          )}
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
            placeholderTextColor={Colors.gray60}
            placeholder="Enter your password"
            style={{
              borderColor: '#fff',
              borderWidth: 1,
              borderRadius: 10,
              width: '100%',
              height: 50,
              fontSize: 18,
              paddingHorizontal: 10,
              color: Colors.white,
            }}
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <PrimaryButton
          buttonStyle={{
            marginTop: 40,
          }}
          onPress={null}
          color={Colors.primary}
          title="Login"
        />
        <PrimaryButton
          onPress={() => {
            navigation.navigate('Signup');
          }}
          title="don't have account Sign up"
          color={Colors.dark}
          buttonStyle={{
            marginTop: Dimensions.get('screen').height / 4.2,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
