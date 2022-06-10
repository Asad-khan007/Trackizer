import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardCop from '../components/CardCop';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    height: 420,
    width: 412,
    backgroundColor: 'blue',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});
