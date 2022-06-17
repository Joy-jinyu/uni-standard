"use strict";var e=require("../../common/vendor.js");const t={data:()=>({systemLocale:"",applicationLocale:""}),computed:{locales(){return[{text:this.$t("locale.auto"),code:"auto"},{text:this.$t("locale.en"),code:"en"},{text:this.$t("locale.zh-hans"),code:"zh-Hans"},{text:this.$t("locale.zh-hant"),code:"zh-Hant"},{text:this.$t("locale.ja"),code:"ja"}]}},onLoad(){let t=e.index.getSystemInfoSync();this.systemLocale=t.language,this.applicationLocale=e.index.getLocale(),this.isAndroid="android"===t.platform.toLowerCase(),e.index.onLocaleChange((e=>{this.applicationLocale=e.locale}))},methods:{onLocaleChange(t){this.isAndroid?e.index.showModal({content:this.$t("index.language-change-confirm"),success:a=>{a.confirm&&e.index.setLocale(t.code)}}):(e.index.setLocale(t.code),this.$i18n.locale=t.code)}}};var a=e._export_sfc(t,[["render",function(t,a,o,n,c,i){return{a:e.t(t.$t("index.demo")),b:e.t(t.$t("index.demo-description")),c:e.t(t.$t("index.detail")),d:e.t(t.$t("index.language-info")),e:e.t(t.$t("index.system-language")),f:e.t(c.systemLocale),g:e.t(t.$t("index.application-language")),h:e.t(c.applicationLocale),i:e.t(t.$t("index.language")),j:e.f(i.locales,((t,a,o)=>e.e({a:e.t(t.text),b:t.code==c.applicationLocale},(t.code,c.applicationLocale,{}),{c:a,d:e.o((e=>i.onLocaleChange(t)))})))}}]]);wx.createPage(a);