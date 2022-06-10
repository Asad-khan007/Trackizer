import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Images from '../config/Images';
import Colors from '../config/Colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import HomeBtn from '../components/HomeBtn';
import CardCop3 from '../components/CardCop3';
import CardCop2 from '../components/CardCop2';
import CardCop from '../components/CardCop';

const Home = () => {
  const [option, setOption] = useState('option1');
  // const [subscribtion, setSubscribtion] = useState('Up XM');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={Images.setting}
          style={{
            height: 24,
            tintColor: Colors.gray20,
            width: 24,
            zIndex: 99,
            position: 'absolute',
            left: 360,
            top: 50,
          }}
        />
        <View style={{marginTop: 5}}>
          <AnimatedCircularProgress
            rotation={216}
            size={290}
            width={13}
            fill={60}
            tintColor={Colors.primary}
            backgroundColor="#3d5875"
            // style={{}}
            padding={10}
            // renderCap={({center}) => (
            //   <View cx={center.x} cy={center.y} r="10" fill="blue" />
            // )}
            lineCap="round"
            arcSweepAngle={290}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 110,
          }}>
          <Image
            source={Images.logo}
            style={{height: 20, width: 110, marginBottom: 20}}
            resizeMode="contain"
          />
          <Text
            style={{
              color: Colors.white,
              fontSize: 40,
              fontWeight: '700',
            }}>
            $ 2000
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: Colors.gray40,
              paddingHorizontal: 10,
              paddingVertical: 4,
              fontWeight: '600',
            }}>
            This months bills
          </Text>
          <HomeBtn />
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
          width: 330,
          backgroundColor: Colors.gray80,
          marginHorizontal: 20,
          marginVertical: 20,
          borderRadius: 10,
        }}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.gray100,
  },
  headerContainer: {
    height: 455,
    width: 420,
    backgroundColor: Colors.gray70,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
