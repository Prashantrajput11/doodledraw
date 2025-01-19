import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {theme} from '../theme';
import FloatingBtn from '../components/FloatingBtn';
import JournalCard from '../components/JournalCard';
import useJournalStore from '../store/useJournalStore';

const HomeScreen = () => {
  const journals = useJournalStore(state => state.journals);

  // console.log('remove:', removeAllJournals);
  const renderItem = useCallback(({item}) => {
    return <JournalCard journalData={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/mountain_red.jpg')}
        style={styles.headerImage}
      />

      {/* FlatList with scrollable content */}
      <FlatList
        data={journals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 30}}
      />

      {/* Floating button placed at the bottom-right corner */}
      <View style={styles.floatingBtnContainer}>
        <FloatingBtn />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  itemContainer: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  floatingBtnContainer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center', // This will place it in the horizontal center
    zIndex: 999,
  },
});
