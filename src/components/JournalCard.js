import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import useJournalStore from '../store/useJournalStore';
import {useNavigation} from '@react-navigation/native';

const JournalCard = ({journalData}) => {
  const {id, title, journalText, journalDate} = journalData;

  const navigation = useNavigation();
  const deleteJournal = useJournalStore(state => state.deleteJournal);

  const handleDelete = () => {
    Alert.alert(
      'Delete Journal', // Title
      'Are you sure you want to delete this journal? This action cannot be undone.', // Message
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            deleteJournal(id);
            Alert.alert('Journal deleted successfully');
          },
          style: 'destructive', // This will make the button red on iOS
        },
      ],
      {cancelable: true}, // Allows dismissing the alert by tapping outside
    );
  };
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => navigation.navigate('JournalDetails', {journalData})}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.journalText}>{journalText}</Text>
      <Text style={styles.dateText}>{journalDate}</Text>

      <Pressable style={styles.trash} onPress={handleDelete}>
        <Icon name="trash" size={20} color={theme.colors.secondary} />
      </Pressable>
      {/* <View style={styles.separatorLine} /> */}
    </Pressable>
  );
};

export default JournalCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    // Box shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    // Elevation (Android)
    elevation: 2,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  journalText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 12,
  },
  dateText: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-end',
  },
  separatorLine: {
    marginTop: 12,
    height: 4, // Thickness of the line
    backgroundColor: '#333', // Dark color for contrast
    borderRadius: 2, // Slightly rounded edges for a modern look
  },

  trash: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',

    // padding: 20,
  },
});
