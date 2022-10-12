import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Colors from '../config/Colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import HealthCard from '../components/HealthCard';
import Icons from '../config/Icons';
import Metrix from '../config/Metrix';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Spending = ({route}) => {
  const Country = route?.params?.item;
  const data = route?.params?.CountryData;

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.gray100,
          alignItems: 'center',
          marginTop: getStatusBarHeight(),
        }}>
        <View
          style={{
            height: Metrix.VerticalSize(24),
            width: Metrix.HorizontalSize(150),
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: Metrix.VerticalSize(30),
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.gray20,
              fontWeight: '400',
            }}>
            {!Country ? 'Country and Region' : Country.name}
          </Text>
        </View>
        <View
          style={{
            marginTop: Metrix.VerticalSize(30),
            height: Metrix.VerticalSize(160),
            // backgroundColor: 'red',
          }}>
          <AnimatedCircularProgress
            rotation={270}
            size={300}
            width={14}
            fill={data?.total > 200000 ? 80 : 80}
            tintColor={Colors.primary}
            backgroundColor="#3d5875"
            padding={10}
            lineCap="round"
            arcSweepAngle={180}
            style={{
              marginTop: 8,
            }}
          />
          <AnimatedCircularProgress
            rotation={274}
            size={260}
            width={14}
            fill={data?.death > 20000 ? 30 : 68}
            tintColor={Colors.green}
            backgroundColor="#3d5875"
            padding={10}
            lineCap="round"
            arcSweepAngle={172}
            style={{
              position: 'absolute',
              top: 30,
              left: 20,
            }}
          />
          <AnimatedCircularProgress
            rotation={280}
            size={221}
            width={14}
            fill={data?.positiveIncrease > 200000 ? 78 : 48}
            tintColor={Colors.purple}
            backgroundColor="#3d5875"
            padding={10}
            lineCap="round"
            arcSweepAngle={160}
            style={{
              position: 'absolute',
              top: 53,
              left: 39,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            position: 'absolute',
            top: Metrix.VerticalSize(210),
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 24,
              fontWeight: '600',
            }}>
            {data ? 3501394 : 358394}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.gray20,
              marginTop: 5,
            }}>
            Confirmed Cases
          </Text>
        </View>
        <View
          style={{
            height: Metrix.VerticalSize(300),
            width: Metrix.HorizontalSize(320),
            // backgroundColor: 'red',
            marginTop: Metrix.VerticalSize(100),
            borderRadius: 10,
            alignItems: 'center',
            paddingHorizontal: 2,
            paddingVertical: 5,
            justifyContent: 'center',
          }}>
          <HealthCard
            icon={Icons.recovered}
            title="Recovered Cases"
            progress={data?.positiveIncrease > 20000 ? '60%' : '68%'}
            color={Colors.primary}
          />
          <HealthCard
            icon={Icons.confirmed}
            title="Confirmed Cases"
            progress={data?.total > 20000 ? '70%' : '52%'}
            color={Colors.green}
          />
          <HealthCard
            icon={Icons.deceased}
            title="Decesed Cases"
            progress={data?.death > 2000 ? '55%' : '32%'}
            color={Colors.purple}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Spending;
