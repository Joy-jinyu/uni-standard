"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var locale_index = require("./locale/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/component/component.js";
  "./pages/api/api.js";
  "./pages/schema/schema.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
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
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
