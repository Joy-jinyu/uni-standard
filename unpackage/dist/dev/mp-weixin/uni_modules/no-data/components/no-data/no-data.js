"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_noData_components_noData_i18n_index = require("./i18n/index.js");
const {
  t
} = common_vendor.initVueI18n(uni_modules_noData_components_noData_i18n_index.messages);
const _sfc_main = {
  name: "no-data",
  props: {},
  data() {
    return {
      title: t("no-data.title")
    };
  },
  created(e) {
  },
  unmounted() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9de8fdbc"], ["__file", "/Users/joy/workspace/mini-program/play/uni_modules/no-data/components/no-data/no-data.vue"]]);
wx.createComponent(Component);
