import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Button,
  TextInput,
} from 'react-native-paper';
import {theme} from '../theme';
import {useNavigation} from '@react-navigation/native';
import useJournalStore from '../store/useJournalStore';
import {Subheader} from 'react-native-paper/lib/typescript/components/List/List';
import EmojiPicker from '../components/EmojiPicker';

const PostEditorScreen = () => {
  const navigate = useNavigation();

  // zustand hook to get addJournal action
  const addJournal = useJournalStore(state => state.addJournal);

  // init local states
  const [text, setText] = React.useState('');
  const [journalText, setJournalText] = React.useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('😄');

  // Functions
  const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker);

  const handleJournalSave = () => {
    // journal text and description validation
    if (!text.trim() || !journalText.trim()) {
      Alert.alert('Please fill both title and journal text');
      return;
    }

    // new journal object
    const newJournal = {
      title: text,
      date: '23 june',
      journalText: journalText,
    };

    addJournal(newJournal);

    Alert.alert('journal succesfully added');
  };
  console.log('parent rerenderd');

  const handleEmojiSelect = useCallback(emoji => {
    setSelectedEmoji(emoji);
    setShowEmojiPicker(false);
  }, []);

  return (
    <View style={{backgroundColor: theme.colors.primary, flex: 1}}>
      <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
        <Appbar.BackAction onPress={() => navigate.goBack()} />

        <Appbar.Content title="" />
        <Button
          mode="contained"
          onPress={handleJournalSave}
          style={{backgroundColor: theme.colors.secondary}}>
          Save
        </Button>
      </Appbar.Header>
      <View style={styles.subHeader}>
        <View style={styles.dateView}>
          <Text style={styles.day}>16</Text>
          <Text style={styles.month}>Jan, 2025</Text>
        </View>

        <Pressable style={styles.emojiView} onPress={toggleEmojiPicker}>
          <Text style={styles.emojiText}>{selectedEmoji}</Text>
        </Pressable>
      </View>

      <TextInput
        // label="Title"
        placeholder="Title"
        // textColor="tomato"fh
        value={text}
        onChangeText={text => setText(text)}
        cursorColor={theme.colors.secondary}
        style={{backgroundColor: theme.colors.primary}}
      />

      <TextInput
        // label="Title"
        placeholder="Write more here.."
        multiline
        // textColor="tomato"fh
        value={journalText}
        onChangeText={text => setJournalText(text)}
        cursorColor={theme.colors.secondary}
        style={{backgroundColor: theme.colors.primary}}
      />

      {showEmojiPicker && <EmojiPicker onEmojiSelect={handleEmojiSelect} />}
    </View>
  );
};

export default PostEditorScreen;

const styles = StyleSheet.create({
  dateView: {
    marginHorizontal: 16,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',

    // backgroundColor: 'tomato',
  },
  day: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHeader: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 8,
  },
  emojiText: {
    fontSize: 24,
  },
  emojiView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});
