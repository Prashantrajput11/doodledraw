import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {Button, PaperProvider} from 'react-native-paper';
import {theme} from './src/theme';
import HomeScreen from './src/screens/HomeScreen';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostEditorScreen from './src/screens/PostEditorScreen';
// import Icon from '@react-native-vector-icons/feather';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    PostEditor: PostEditorScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
