import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {theme} from '../theme';
import {useNavigation} from '@react-navigation/native';

const FloatingBtn = () => {
  const navigation = useNavigation();

  console.log('inside flaoting btn');
  return (
    <View>
      <IconButton
        icon="plus"
        iconColor={theme.colors.primary}
        size={40}
        onPress={() => navigation.navigate('PostEditor')}
        mode="contained"
      />
    </View>
  );
};

export default FloatingBtn;

const styles = StyleSheet.create({});
