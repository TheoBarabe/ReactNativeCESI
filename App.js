import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import MyHeader from './components/Header'
import Search from './Components/Search'

export default function App() {



  return (
    <SafeAreaView style={styles.container}>

	  <View><Search/></View>
	  


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
