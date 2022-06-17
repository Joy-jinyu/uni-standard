"use strict";
var common_vendor = require("../../common/vendor.js");
const collection = "hello";
const _sfc_main = {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    add() {
      common_vendor.index.showLoading();
      let db = common_vendor.Rt.database();
      db.collection(collection).add({
        name: this.name
      }).then((res) => {
        common_vendor.index.showToast({
          title: this.$t("schema.add-success")
        });
      }).catch((err) => {
        common_vendor.index.showModal({
          content: err.message,
          showCancel: false
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.$t("schema.name")),
    b: $data.name,
    c: common_vendor.o(($event) => $data.name = $event.detail.value),
    d: common_vendor.t(_ctx.$t("schema.add")),
    e: common_vendor.o((...args) => $options.add && $options.add(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/joy/workspace/mini-program/play/pages/schema/schema.vue"]]);
wx.createPage(MiniProgramPage);
