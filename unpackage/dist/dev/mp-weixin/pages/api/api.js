"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    showModel() {
      common_vendor.index.showModal({
        content: this.$t("api.message"),
        success: (res) => {
          console.log(res);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.showModel && $options.showModel(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/joy/workspace/mini-program/play/pages/api/api.vue"]]);
wx.createPage(MiniProgramPage);
