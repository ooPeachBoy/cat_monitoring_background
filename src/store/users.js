// 模块化管理vuex
const user = {
  state: () => ({ 
    userName: '',
    age: 0
   }),
  mutations: { 
    setUserName(state, data) {
      state.userName = data
    },
    setUserAge(state, data) {
      state.age = data
    }
   },
  actions: {
    asyncSetAge(context) {
      setTimeout(() => {
        context.commit('setUserAge', 16)
      })
    }
  },
  getters: {
    description(state, getters, rootState) {
      return state.user
    }
  }
}
export default user