import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      userId: '',
    }
  },
  actions: {
    setUserInfo({ userId }) {
      this.userId = userId
    }
  }
})
