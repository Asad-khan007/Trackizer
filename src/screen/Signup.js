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
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import NavService from '../config/NavService';

// import {useNavigation} from '@react-navigation/native';

const Signup = ({navigation}) => {
  // const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valide, setValide] = useState(true);

  const dispatch = useDispatch();

  const validate = email => {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  };

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
                          name: 'UserStack',
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
            visibilityTime: 3000,
          });
        }
      } else
        Toast.show({
          text1: 'Please enter a valid email address',
          type: 'error',
          visibilityTime: 3000,
        });
    } else {
      Toast.show({
        text1: 'Required fields are empty',
        type: 'error',
        visibilityTime: 3000,
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
            marginTop: Dimensions.get('screen').height / 5,
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
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 20,
            color: Colors.gray30,
          }}>
          use 8 and more characters with a mix of letters, numbers & symbols
        </Text>
        <CountryPicker
          onSelect={item => {
            setCountry(item);
            navigation.navigate('Spend', {item});
          }}
          theme={DARK_THEME}
          containerButtonStyle={{
            backgroundColor: Colors.gray60,
            height: 32,
            width: 145,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 14,
            // marginTop: 15,
            marginRight: '60%',
          }}
        />
        <PrimaryButton
          onPress={onSubmit}
          color={Colors.primary}
          title="Get Started , It's free !"
          buttonStyle={{
            top: Dimensions.get('window').height / 6,
          }}
        />
        <PrimaryButton
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Already have an account ?"
          color={Colors.dark}
          buttonStyle={{
            marginTop: Dimensions.get('screen').height / 5.3,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
