"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      systemLocale: "",
      applicationLocale: ""
    };
  },
  computed: {
    locales() {
      return [
        {
          text: this.$t("locale.auto"),
          code: "auto"
        },
        {
          text: this.$t("locale.en"),
          code: "en"
        },
        {
          text: this.$t("locale.zh-hans"),
          code: "zh-Hans"
        },
        {
          text: this.$t("locale.zh-hant"),
          code: "zh-Hant"
        },
        {
          text: this.$t("locale.ja"),
          code: "ja"
        }
      ];
    }
  },
  onLoad() {
    let systemInfo = common_vendor.index.getSystemInfoSync();
    this.systemLocale = systemInfo.language;
    this.applicationLocale = common_vendor.index.getLocale();
    this.isAndroid = systemInfo.platform.toLowerCase() === "android";
    common_vendor.index.onLocaleChange((e) => {
      this.applicationLocale = e.locale;
    });
  },
  methods: {
    onLocaleChange(e) {
      if (this.isAndroid) {
        common_vendor.index.showModal({
          content: this.$t("index.language-change-confirm"),
          success: (res) => {
            if (res.confirm) {
              common_vendor.index.setLocale(e.code);
            }
          }
        });
      } else {
        common_vendor.index.setLocale(e.code);
        this.$i18n.locale = e.code;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.$t("index.demo")),
    b: common_vendor.t(_ctx.$t("index.demo-description")),
    c: common_vendor.t(_ctx.$t("index.detail")),
    d: common_vendor.t(_ctx.$t("index.language-info")),
    e: common_vendor.t(_ctx.$t("index.system-language")),
    f: common_vendor.t($data.systemLocale),
    g: common_vendor.t(_ctx.$t("index.application-language")),
    h: common_vendor.t($data.applicationLocale),
    i: common_vendor.t(_ctx.$t("index.language")),
    j: common_vendor.f($options.locales, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.text),
        b: item.code == $data.applicationLocale
      }, item.code == $data.applicationLocale ? {} : {}, {
        c: index,
        d: common_vendor.o(($event) => $options.onLocaleChange(item))
      });
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/joy/workspace/mini-program/play/pages/testLocal/index.vue"]]);
wx.createPage(MiniProgramPage);
