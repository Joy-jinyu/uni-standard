"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: this.$t("")
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_no_data2 = common_vendor.resolveComponent("no-data");
  _easycom_no_data2();
}
const _easycom_no_data = () => "../../uni_modules/no-data/components/no-data/no-data.js";
if (!Math) {
  _easycom_no_data();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/joy/workspace/mini-program/play/pages/component/component.vue"]]);
wx.createPage(MiniProgramPage);
