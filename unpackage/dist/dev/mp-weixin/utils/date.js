"use strict";
const formatDate = (value, fmt) => {
  if (!value) {
    return value;
  }
  if (typeof value === "string") {
    value = value.replace(/-/g, "/");
  }
  if (!fmt) {
    fmt = "yyyy-MM-dd hh:mm:ss";
  }
  const getDate = new Date(value);
  const m = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const o = {
    "M+": getDate.getMonth() + 1,
    "d+": getDate.getDate(),
    "h+": getDate.getHours(),
    "m+": getDate.getMinutes(),
    "s+": getDate.getSeconds(),
    "q+": Math.floor((getDate.getMonth() + 3) / 3),
    S: getDate.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${getDate.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  if (/(ENM)/.test(fmt)) {
    fmt = fmt.replace("ENM", m[getDate.getMonth()]);
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length));
    }
  });
  if (fmt.indexOf("3AR") !== -1) {
    fmt = fmt.replace(/3AR/, "MAR");
  }
  if (fmt.indexOf("5AY") !== -1) {
    fmt = fmt.replace(/5AY/, "MAY");
  }
  if (fmt.indexOf("0EP") !== -1) {
    fmt = fmt.replace(/0EP/, "SEP");
  }
  return fmt;
};
exports.formatDate = formatDate;
