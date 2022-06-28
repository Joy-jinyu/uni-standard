"use strict";
var common_vendor = require("../common/vendor.js");
const userStore = common_vendor.defineStore("user", {
  state: () => {
    return {
      userId: ""
    };
  },
  actions: {
    setUserInfo({ userId }) {
      this.userId = userId;
    }
  }
});
exports.userStore = userStore;
