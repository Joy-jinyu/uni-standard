"use strict";var e=require("../../common/vendor.js");const a={data:()=>({name:""}),methods:{add(){e.index.showLoading(),e.Rt.database().collection("hello").add({name:this.name}).then((a=>{e.index.showToast({title:this.$t("schema.add-success")})})).catch((a=>{e.index.showModal({content:a.message,showCancel:!1})})).finally((()=>{e.index.hideLoading()}))}}};var d=e._export_sfc(a,[["render",function(a,d,t,n,s,o){return{a:e.t(a.$t("schema.name")),b:s.name,c:e.o((e=>s.name=e.detail.value)),d:e.t(a.$t("schema.add")),e:e.o(((...e)=>o.add&&o.add(...e)))}}]]);wx.createPage(d);
