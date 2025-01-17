import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Button,
  TextInput,
} from 'react-native-paper';
import {theme} from '../theme';
import {useNavigation} from '@react-navigation/native';

const PostEditorScreen = () => {
  const navigate = useNavigation();
  const [text, setText] = React.useState('');
  const [journalText, setJournalText] = React.useState('');
  return (
    <View style={{backgroundColor: theme.colors.primary, flex: 1}}>
      <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
        <Appbar.BackAction onPress={() => navigate.goBack()} />
        <Appbar.Content title="Title" />
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
