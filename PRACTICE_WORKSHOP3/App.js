import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useState } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
