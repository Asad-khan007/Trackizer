import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';

const CardCop2 = ({subs, color}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLight}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Highest Subs</Text>
        <Text style={styles.title2}>$20</Text>
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
    backgroundColor: Colors.purple,
  },
  titleContainer: {
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  title: {
    width: 80,
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
