export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  removePet: () => {}
}
