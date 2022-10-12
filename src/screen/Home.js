import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icons from '../config/Icons';
import Colors from '../config/Colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import CardCop3 from '../components/CardCop3';
import CardCop2 from '../components/CardCop2';
import CardCop from '../components/CardCop';
import TipsCard from '../components/TipsCard';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {useDispatch, useSelector} from 'react-redux';
import LoadingAction from '../Store/Actions/LoadingAction';
import NavService from '../config/NavService';
import Metrix from '../config/Metrix';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {DatabaseMiddleware} from '../Store/Middleware';

const Home = () => {
  const [option, setOption] = useState('option1');
  const [foused, setFoused] = useState(false);
  const [country, setCountry] = useState(null);
  const [countryData, setCountryData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      DatabaseMiddleware.GetData({
        callback: response => {
          if (response?.status == 200) {
            setCountryData(response.data);
          }
        },
      }),
    );
  }, []);

  return (
    <ScrollView bounces={false} style={styles.mainContainer}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => NavService.navigate('Option')}
            style={{
              alignSelf: 'flex-end',
              position: 'absolute',
              top: 25,
              right: 25,
              zIndex: 69,
            }}>
            <Image
              source={Icons.setting}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
          <View style={{marginTop: 15}}>
            <AnimatedCircularProgress
              rotation={216}
              size={290}
              width={13}
              fill={countryData?.total > 200000 ? 80 : 62}
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
              top: Metrix.VerticalSize(140),
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 40,
                fontWeight: '700',
              }}>
              {countryData?.total}
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
                console.log(item.name, item.region);
                NavService.navigate('Spending', {item, countryData});
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
              height: Metrix.VerticalSize(80),
              marginTop: 5,
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
              marginRight: 20,
            }}>
            <CardCop data={countryData?.death} />
            <CardCop2 data={countryData?.total} />
            <CardCop3 data={countryData?.positiveIncrease} />
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
            style={{borderRadius: 10, marginBottom: 20}}
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
              marginBottom: 20,
            }}>
            <Image source={Icons.map} resizeMode="contain" />
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
    marginTop: getStatusBarHeight(),
  },
  headerContainer: {
    height: Metrix.VerticalSize(460),
    width: Metrix.HorizontalSize(380),
    backgroundColor: Colors.gray80,
    // backgroundColor: 'red',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
