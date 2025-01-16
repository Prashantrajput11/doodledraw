import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../theme';

const JournalCard = ({title, journalText, journalDate}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.journalText}>{journalText}</Text>
      <Text style={styles.dateText}>{journalDate}</Text>

      {/* <View style={styles.separatorLine} /> */}
    </View>
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
});
