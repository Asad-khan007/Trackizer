import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import Colors from '../config/Colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import HealthCard from '../components/HealthCard';
import Images from '../config/Images';

const Spending = ({ route }) => {


//  let {item} = route.params;

 const Country = route?.params?.item;
 
//  const data = Country?.item;



 return (
    <>
      <SafeAreaView
        style={{flex: 1, backgroundColor: Colors.gray80, alignItems: 'center'}}>
        <View
          style={{
            height: 24,
            width: 157,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.gray20,
              fontWeight: '400',
            }}>
            {
              !Country ? "Country and Region" : Country.name
            }
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            height: 160,
          }}>
          <AnimatedCircularProgress
            rotation={270}
            size={300}
            width={14}
            fill={80}
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
            fill={20}
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
            fill={30}
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
            // backgroundColor: 'red',
            alignItems: 'center',
            position: 'absolute',
            top: 230,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 24,
              fontWeight: '600',
            }}>
            202026121
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
            height: 360,
            width: 338,
            // backgroundColor: 'red',
            marginTop: 50,
            borderRadius: 10,
            alignItems: 'center',
            paddingHorizontal: 2,
            paddingVertical: 5,
            justifyContent: 'center',
          }}>
            <HealthCard
              icon={Images.recovered}
              title="Recovered Cases"
              progress={'58%'}
              color={Colors.primary}
            />
          <HealthCard
              icon={Images.confirmed}
              title="Confirmed Cases"
              progress={'16%'}
              color={Colors.green}
          />
          <HealthCard
            icon={Images.deceased}
            title="Decesed Cases"
            progress={'22%'}
            color={Colors.purple}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Spending;
