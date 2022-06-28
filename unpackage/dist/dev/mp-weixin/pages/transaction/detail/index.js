"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../../common/vendor.js");
var store_user = require("../../../store/user.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_forms)();
}
const _sfc_main = {
  setup(__props) {
    const user = store_user.userStore();
    const formRef = common_vendor.ref(null);
    const transaction = common_vendor.reactive({
      money: void 0,
      transaction_time: "",
      purpose: ""
    });
    const addTransaction = () => {
      formRef.value.validate(async (error, _) => {
        if (!error) {
          const db = common_vendor.Rt.database();
          const transactionRecord = __spreadProps(__spreadValues({}, transaction), {
            money: Number(transaction.money),
            transaction_time: new Date(transaction.transaction_time).getTime(),
            user_id: user.userId
          });
          const result = await db.collection("transaction-record").add(transactionRecord);
          console.log(result);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(transaction).money = $event),
        b: common_vendor.p({
          type: "digit",
          placeholder: "\u8BF7\u8F93\u5165\u91D1\u989D",
          modelValue: common_vendor.unref(transaction).money
        }),
        c: common_vendor.p({
          label: "\u91D1\u989D",
          name: "money",
          ["label-position"]: "top",
          required: true
        }),
        d: common_vendor.o(($event) => common_vendor.unref(transaction).transaction_time = $event),
        e: common_vendor.p({
          placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
          modelValue: common_vendor.unref(transaction).transaction_time
        }),
        f: common_vendor.p({
          label: "\u652F\u4ED8\u65F6\u95F4",
          name: "transaction_time",
          ["label-position"]: "top",
          required: true
        }),
        g: common_vendor.o(($event) => common_vendor.unref(transaction).purpose = $event),
        h: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u7528\u9014",
          modelValue: common_vendor.unref(transaction).purpose
        }),
        i: common_vendor.p({
          label: "\u7528\u9014",
          name: "purpose",
          ["label-position"]: "top",
          required: true
        }),
        j: common_vendor.sr((ref) => formRef.value = ref, "9107fe92-0"),
        k: (ref) => formRef.value = ref,
        l: common_vendor.p({
          ["model-value"]: common_vendor.unref(transaction),
          rules: {
            money: {
              rules: [{
                required: true,
                errorMessage: "\u8BF7\u8F93\u5165\u91D1\u989D"
              }]
            }
          }
        }),
        m: common_vendor.o(addTransaction)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/joy/workspace/mini-program/play/pages/transaction/detail/index.vue"]]);
wx.createPage(MiniProgramPage);
