"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_date = require("../../utils/date.js");
var store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db)();
}
const _sfc_main = {
  setup(__props) {
    const user = store_user.userStore();
    const dbListRef = common_vendor.ref(null);
    common_vendor.onPullDownRefresh(async () => {
      dbListRef.value.loadData({
        clear: true
      }, () => {
        common_vendor.index.stopPullDownRefresh();
      });
    });
    common_vendor.onShow(() => {
      if (dbListRef.value) {
        dbListRef.value.refresh();
      }
    });
    const goDetail = ({ _id }) => {
      dbListRef.value.remove(_id);
    };
    const goAddTransaction = () => {
      common_vendor.index.navigateTo({
        url: "/pages/transaction/detail/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          data: records,
          error,
          loading
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: common_vendor.t(error.message)
          } : loading ? {} : {
            d: common_vendor.f(records, (record, index, i1) => {
              return {
                a: index,
                b: common_vendor.o(($event) => goDetail(record)),
                c: "0c33a63f-2-" + i0 + "-" + i1 + "," + ("0c33a63f-1-" + i0),
                d: common_vendor.p({
                  title: `${record.money}`,
                  ["right-text"]: common_vendor.unref(utils_date.formatDate)(record.transaction_time, "yyyy-MM-dd"),
                  note: record.purpose,
                  clickable: true
                })
              };
            }),
            e: "0c33a63f-1-" + i0 + ",0c33a63f-0"
          }, {
            c: loading,
            f: i0,
            g: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "0c33a63f-0"
        }),
        b: common_vendor.sr((ref) => dbListRef.value = ref, "0c33a63f-0"),
        c: (ref) => dbListRef.value = ref,
        d: common_vendor.p({
          collection: "transaction-record",
          where: `user_id=='${common_vendor.unref(user).userId}'`,
          manual: true
        }),
        e: common_vendor.o(goAddTransaction)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/joy/workspace/mini-program/play/pages/transaction/index.vue"]]);
wx.createPage(MiniProgramPage);
