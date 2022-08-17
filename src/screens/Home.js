import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../config/Images';
import Colors from '../config/Colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import HomeBtn from '../components/HomeBtn';
import CardCop3 from '../components/CardCop3';
import CardCop2 from '../components/CardCop2';
import CardCop from '../components/CardCop';
import TipsCard from '../components/TipsCard';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';

const Home = ({navigation}) => {
  const [option, setOption] = useState('option1');
  const [foused, setFoused] = useState(false);
  const [country, setCountry] = useState(null);

  return (
    <ScrollView style={styles.mainContainer}>
     <View style={{
      alignItems:"center"
     }} > 
      <View style={styles.headerContainer}>
        {/* <TouchableOpacity
          style={{
            position: 'absolute',Q
            left: 360,
            top: 50,
          }}>
          <Image
            source={Images.setting}
            style={{
              height: 24,
              tintColor: Colors.gray20,
              width: 24,
              zIndex: 99,
            }}
          />
        </TouchableOpacity> */}
        <View style={{marginTop: 15 }}>
          <AnimatedCircularProgress
            rotation={216}
            size={290}
            width={13}
            fill={68}
            tintColor={Colors.primary}
            backgroundColor="#3d5875"
            padding={10}
            lineCap="round"
            arcSweepAngle={290}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top:  Dimensions.get("window").height / 5.5 ,
          }}>
          {/* <Image
            source={Images.logo}
            style={{height: 20, width: 110, marginBottom: 20}}
            resizeMode="contain"
          /> */}
          <Text
            style={{
              color: Colors.white,
              fontSize: 40,
              fontWeight: '700',
            }}>
            5515,151
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: Colors.title,
              paddingVertical: 4,
              fontWeight: '600',
              marginTop: '2%',
            }}>
            Global Confirmed Cases
          </Text>
          <CountryPicker
            onSelect={item => {
              setCountry(item);
              navigation.navigate("Spend",{ item })
            }}
            theme={DARK_THEME}
            containerButtonStyle={{
              backgroundColor: Colors.gray60,
              height: 32,
              width: 145,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
              marginTop: 15,
            }}
          />
        </View>
        <View
          style={{
            width: '90%',
            height: 80,
            marginTop: 5,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <CardCop />
          <CardCop2 />
          <CardCop3 />
        </View>
      </View>
      <View
        style={{
          height: 50,
          width: 340,
          backgroundColor: Colors.gray80,
          marginHorizontal: 20,
          marginVertical: 20,
          borderRadius: 26,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            setFoused(!foused);
          }}
          style={{
            flex: 1,
            backgroundColor: foused ? Colors.gray50 : 'transparent',
            height: '80%',
            // width: '60%',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 6,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: foused ? Colors.white : Colors.gray20,
            }}>
            Tracker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFoused(!foused);
          }}
          style={{
            flex: 1,
            backgroundColor: !foused ? Colors.gray50 : 'transparent',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
            // width: '60%',
            borderRadius: 20,
            marginRight: 6,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: !foused ? Colors.gray20 : Colors.gray20,
            }}>
            Symtomes
          </Text>
        </TouchableOpacity>
      </View>
      {!foused && (
        <ScrollView
          style={{borderRadius: 10}}
          showsVerticalScrollIndicator={false}>
          <TipsCard />
          <TipsCard />
          <TipsCard />
        </ScrollView>
      )}
      {foused && (
        <View
          style={{
            backgroundColor: Colors.gray80,
            // backgroundColor: 'red',
            width: 360,
            height: 200,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={Images.map} resizeMode="contain" />
        </View>
      )}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.gray100,
  },
  headerContainer: {
    height: 455,
    width: 420,
    backgroundColor: Colors.gray80,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
