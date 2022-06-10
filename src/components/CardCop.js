import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const CardCop = ({subs, color}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLight}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Active Subs</Text>
        <Text style={styles.title2}>{subs}</Text>
      </View>
    </View>
  );
};

export default CardCop;

const styles = StyleSheet.create({
  cardContainer: {
    height: 80,
    width: 120,
    backgroundColor: Colors.gray70,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    paddingHorizontal: 8,
  },
  title: {
    width: 68,
    height: 18,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.gray60,
  },
  title2: {
    height: 20,
    color: Colors.white,
    fontSize: 14,
    paddingTop: 2,
  },
});
