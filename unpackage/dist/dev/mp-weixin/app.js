"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_user = require("./store/user.js");
var locale_index = require("./locale/index.js");
if (!Math) {
  "./pages/transaction/index.js";
  "./pages/testLocal/index.js";
  "./pages/transaction/detail/index.js";
}
const _sfc_main = {
  onLaunch: async function() {
    common_vendor.index.hideTabBar();
    const user = store_user.userStore();
    const loginInfo = await this.getLoginInfo();
    const { openid, session_key } = await this.getUserOpenId(loginInfo);
    user.setUserInfo({
      userId: openid
    });
    console.log("App Launch", openid, session_key);
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  onLoad: function() {
    common_vendor.index.hideTabBar();
  },
  methods: {
    getLoginInfo() {
      return new Promise((resolve, eject) => {
        common_vendor.index.login({
          provider: "weixin",
          success: (res) => {
            resolve(res);
          }
        });
      });
    },
    getUserOpenId({ code }) {
      return new Promise((resolve, eject) => {
        common_vendor.index.request({
          url: "https://api.weixin.qq.com/sns/jscode2session",
          method: "GET",
          data: {
            appid: "wx88e38268e6271bd1",
            secret: "0a090883897f334c0778d57659892fc0",
            js_code: code,
            grant_type: "authorization_code"
          },
          success: (res) => {
            resolve(res.data);
          }
        });
      });
    }
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/joy/workspace/mini-program/play/App.vue"]]);
let i18nConfig = {
  locale: common_vendor.index.getLocale(),
  messages: locale_index.messages
};
const i18n = common_vendor.createI18n(i18nConfig);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(i18n);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
