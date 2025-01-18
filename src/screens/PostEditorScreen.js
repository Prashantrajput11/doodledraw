import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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

const PostEditorScreen = () => {
  const navigate = useNavigation();

  const addJournal = useJournalStore(state => state.addJournal);
  const [text, setText] = React.useState('');
  const [journalText, setJournalText] = React.useState('');

  const handleJournalSave = () => {
    if (!text.trim() || !journalText.trim()) {
      Alert.alert('Please fill both title and journal text');
      return;
    }
    const newJournal = {
      title: text,
      date: '23 june',
      journalText: journalText,
    };

    addJournal(newJournal);

    Alert.alert('journal succesfully added');

    // setJournalList([newJournal, ...journalList]);
  };
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

      <View style={styles.dateView}>
        <Text style={styles.day}>16</Text>
        <Text style={styles.month}>Jan, 2025</Text>
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
});
