import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const CardCop2 = ({subs, color, data}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLight}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recovered</Text>
        <Text style={styles.title2}>{data}</Text>
      </View>
    </View>
  );
};

export default CardCop2;

const styles = StyleSheet.create({
  cardContainer: {
    height: 70,
    width: 110,
    backgroundColor: Colors.gray40,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  cardLight: {
    width: 60,
    height: 2,
    backgroundColor: Colors.primary,
  },
  titleContainer: {
    width: '100%',
    // backgroundColor: 'red',
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  title: {
    width: 80,
    height: 18,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.gray30,
    paddingLeft: 10,
  },
  title2: {
    height: 20,
    color: Colors.white,
    fontSize: 14,
    paddingTop: 2,
  },
});
