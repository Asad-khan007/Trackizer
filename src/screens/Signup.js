import {StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView, Alert} from 'react-native';
import React,{useState,useEffect} from 'react';
import Images from '../config/Images';
import Colors from '../config/Colors';
import PrimaryButton from '../components/PrimaryButton';
import validate from '../config/Common';
import Toast from 'react-native-toast-message';

// import {useNavigation} from '@react-navigation/native';

const Signup = ({navigation}) => {
  // const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valide, setValide] = useState(true);


  // function emailChecker() {
  //   if(validate(email)){
  //     setValide(true)
  //   } else {
  //     Toast.show({
  //           text1:"Successfully",
  //           text2:"Done",
  //           type:"success",
  //           onHide: 3000
  //         })
  //   }
  // }

// const SignUp = () => {
//   emailCheck()
// }

const onPress = () => {
  if(validate(email)){
    Toast.show({
      text1: "Complete Success",
      type:"success",
      visibilityTime: 3000
    })
  } else {
    setValide(false)
    Toast.show({
      text1:"Please Enter Valide Email",
      text2:"this email is not valide",
      type:"error",
      visibilityTime: 3000
    })
  }
}

// const onPress = () => {
//   if(!validate(email)){
//     setValide(false);
//     Toast.show(ToastError("Please enter Valide Email"))
//   }
// }

// useEffect(()=>{
//   Toast.show({
//     text1:"Successfully",
//     text2:"Done",
//     type:"success",
//     onHide: 3000
//   })
// },[])

  return (
    <ScrollView style={{flex: 1, backgroundColor:Colors.gray80}}>
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
          marginTop: Dimensions.get("screen").height / 5
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
            borderColor: valide ? '#fff' : "red",
            borderWidth: 1,
            borderRadius: 10,
            width: '100%',
            height: 50,
            fontSize: 18,
            paddingHorizontal: 10,
            color: Colors.white,
          }}
          value={email}
          onChangeText={(text)=>{
            setEmail(text)
          }}
        />
        {
          !valide && (
            <Text style={{color:"red", marginTop:5,marginLeft:5}} >Email is not valide</Text>
          ) 
        }
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
          onChangeText={(text)=>{
            setPassword(text)
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
        onPress={onPress}
        color={Colors.primary}
        title="Get Started , It's free !"
      />

    </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
