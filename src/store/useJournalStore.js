// src/stores/useJournalStore.js
import {create} from 'zustand';
import {dummyJournals} from '../constant';

const useJournalStore = create(set => ({
  journals: dummyJournals,
  addJournal: newJournal =>
    set(state => ({
      journals: [...state.journals, newJournal],
    })),

  deleteJournal: id =>
    set(state => ({
      journals: state.journals.filter(journal => journal.id !== id),
    })),
}));

export default useJournalStore;
