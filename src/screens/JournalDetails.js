import React from 'react';
import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Appbar, Portal} from 'react-native-paper';
import {theme} from '../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const JournalDetails = () => {
  const {params} = useRoute();
  const journalData = params?.journalData || {};

  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Appbar.Header style={{backgroundColor: theme.colors.primary}}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="" />
          <View style={styles.menuContainer}>
            <Pressable onPress={showModal}>
              <Icon
                name="dots-three-horizontal"
                size={20}
                color={theme.colors.text}
              />
            </Pressable>
          </View>
        </Appbar.Header>

        {/* Content */}
        <ScrollView style={styles.detailsContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{journalData.title}</Text>
            <Text style={styles.date}>{journalData.date}</Text>
            <View style={styles.divider} />
            <Text style={styles.content}>{journalData.journalText}</Text>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Portal for overlay + dropdown */}
      <Portal>
        {visible && (
          <>
            {/* Semi-transparent overlay */}
            <Pressable style={styles.overlay} onPress={hideModal} />

            {/* Dropdown menu */}
            <View style={styles.dropdown}>
              <Pressable onPress={hideModal} style={styles.option}>
                <Text>Export to PDF</Text>
              </Pressable>
              <Pressable onPress={hideModal} style={styles.option}>
                <Text>Export to Picture</Text>
              </Pressable>
            </View>
          </>
        )}
      </Portal>
    </View>
  );
};

export default JournalDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },

  detailsContainer: {
    marginTop: 10,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundColor: 'red',s
  },

  dropdown: {
    position: 'absolute',
    top: 90,
    right: 16,
    backgroundColor: '#fff',
    minWidth: 120,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
