import {Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Icons from '../config/Icons';
import Colors from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';
import {useSelector, useDispatch} from 'react-redux';
import NavService from '../config/NavService';
import {LOADING_TRUE} from '../Store/constants';
import LoadingAction from '../Store/Actions/LoadingAction';
import AuthMiddleware from '../Store/Middleware/AuthMiddleware';
import AuthAction from '../Store/Actions/AuthAction';
// import NavService from '../config/NavService';

const Start = () => {
  const user = useSelector(state => state.AuthReducer.user);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(LoadingAction.LoadingTrue());
    } else {
      dispatch(LoadingAction.LoadingFalse());
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray80,
        paddingHorizontal: 20,
      }}>
      <View style={{flex: 2, alignItems: 'center', marginBottom: 15}}>
        <Image
          style={{
            height: 30,
            width: 185,
            position: 'absolute',
            top: 40,
          }}
          source={Icons.logo}
        />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          paddingTop: 18,
        }}>
        <Image source={Icons.frame} />
      </View>

      <Text
        style={{
          marginTop: 60,
          color: Colors.white,
          fontSize: 15,
          fontWeight: '400',
          flex: 1,
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        quibusdam animi impedit ?
      </Text>

      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          paddingBottom: 8,
        }}>
        <PrimaryButton
          title="Get Started"
          color={Colors.primary}
          onPress={() => NavService.navigate('PreLogin')}
        />
      </View>
    </View>
  );
};

export default Start;
