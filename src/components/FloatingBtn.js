import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {theme} from '../theme';

const FloatingBtn = () => {
  return (
    <View>
      <IconButton
        icon="plus"
        iconColor={theme.colors.primary}
        size={40}
        onPress={() => console.log('Pressed')}
        mode="contained"
      />
    </View>
  );
};

export default React.memo(FloatingBtn);

const styles = StyleSheet.create({});
