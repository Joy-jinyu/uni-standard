export const formatDate = (value: any, fmt?: any) => {
  if (!value) {
    return value
  }
  // 解決IE不兼容"-"格式
  if (typeof value === 'string') {
    value = value.replace(/-/g, '/')
  }
  if (!fmt) {
    fmt = 'yyyy-MM-dd hh:mm:ss' || 'yyyy-ENM-dd hh:mm:ss'
  }
  const getDate = new Date(value)
  const m = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const o: any = {
    'M+': getDate.getMonth() + 1,
    'd+': getDate.getDate(),
    'h+': getDate.getHours(),
    'm+': getDate.getMinutes(),
    's+': getDate.getSeconds(),
    'q+': Math.floor((getDate.getMonth() + 3) / 3),
    S: getDate.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${getDate.getFullYear()}`.substr(4 - RegExp.$1.length))
  }
  // 用於日期英文格式化
  if (/(ENM)/.test(fmt)) {
    fmt = fmt.replace('ENM', m[getDate.getMonth()])
  }

  Object.keys(o).forEach((k: string) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length))
    }
  })

  // 解決日期英文顯示3月份出現3AR的情況
  if (fmt.indexOf('3AR') !== -1) {
    fmt = fmt.replace(/3AR/, 'MAR')
  }

  // 解決日期英文顯示5月份出現5AY的情況
  if (fmt.indexOf('5AY') !== -1) {
    fmt = fmt.replace(/5AY/, 'MAY')
  }

  // 解決日期英文顯示9月份出現5AY的情況
  if (fmt.indexOf('0EP') !== -1) {
    fmt = fmt.replace(/0EP/, 'SEP')
  }

  return fmt
}
