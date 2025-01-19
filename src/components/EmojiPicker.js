import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {emojis} from '../constant';

const EmojiPicker = ({onEmojiSelect}) => {
  const renderEmoji = useCallback(
    ({item}) => {
      return (
        <Pressable
          style={styles.emojiView}
          onPress={() => onEmojiSelect(item.emoji)}>
          <Text style={styles.emoji}>{item.emoji}</Text>
        </Pressable>
      );
    },
    [onEmojiSelect],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emoji Picker</Text>

      <FlatList
        data={emojis}
        renderItem={renderEmoji}
        keyExtractor={item => item.id.toString()}
        numColumns={5} // Set the number of columns
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default EmojiPicker;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    justifyContent: 'center',
  },
  emojiView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    // backgroundColor: 'yellow',
    borderRadius: 8,
    height: 50, // Height of each item
  },
  emoji: {
    fontSize: 24,
  },
});
