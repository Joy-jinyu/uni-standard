import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      userId: 'opUD35YQOKoRsbZGE5MURgTnIviM',
    }
  },
  actions: {
    setUserInfo({ userId }) {
      this.userId = userId
    }
  }
})
