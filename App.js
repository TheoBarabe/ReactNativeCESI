import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import MyHeader from './components/Header'
import Search from './Components/Search'
import Logo from './assets/allocinema.png'

export default function App() {

  return (
    <SafeAreaView>
      <View>
        <img
          src={Logo}
          style={{ width: '100%', resizeMode: 'contain' }}
        />
      </View>

    <Text style={styles.banderolle}>Découvrez notre recherche de films</Text>

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
  banderolle: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 10
  },
});
