import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {Button, PaperProvider} from 'react-native-paper';
import {theme} from './src/theme';
import HomeScreen from './src/screens/HomeScreen';
// import Icon from '@react-native-vector-icons/feather';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <HomeScreen />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
