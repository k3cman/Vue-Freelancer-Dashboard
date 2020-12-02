import { createStore } from 'vuex'
import { firestoreAction, vuexfireMutations } from 'vuexfire';
import { db } from '@/services/db';

export const store = createStore({
  state: {
    track: []
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
    bindTracks: firestoreAction(({bindFirestoreRef}) => {
      return bindFirestoreRef('track', db.collection('track-items'))
    })
  },
  getters: {
    allTracks: (state) => {
      return state.track;
    }
  },
  modules: {
  }
})
