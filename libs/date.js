import { toDouble } from './number.js'

// 以当前日期为参考日期计算指定年月日偏差后的日期，输出格式为"yyyy-mm-dd"
const getRelativeDateStr = (yDiff = 0, mDiff = 0, dDiff = 0) => {
  const date = new Date()
  const y = date.getFullYear() + yDiff
  const m = date.getMonth() + 1 + mDiff
  const d = date.getDate() + dDiff
  return `${y}-${toDouble(m)}-${toDouble(d)}`
}

// 将Date对象的实例转换成"yyyy-mm-dd"格式的字符串
const dateToString = (date = new Date()) => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}-${toDouble(m)}-${toDouble(d)}`
}

// 将时间戳转换为形如"2016-12-15"的字符串
const timestampToString = timestamp => dateToString(new Date(timestamp))

// 将时间戳转换为形如"2016-08-09 11:12:30"的字符串
const timestampToFullString = timestamp => {
  if (/^-?[0-9]+$/.test(timestamp)) {
    timestamp = parseInt(timestamp)
    const d = new Date(timestamp)
    const year = d.getFullYear()
    const month = toDouble(d.getMonth() + 1)
    const day = toDouble(d.getDate())
    const hour = toDouble(d.getHours())
    const minute = toDouble(d.getMinutes())
    const second = toDouble(d.getSeconds())
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
  throw new Error(`There is something wrong with the parameter (${timestamp}) passed to function timestampToFullString`)
}

// 将形如"yyyy-mm-dd"的日期字符串转换为日期对象（兼容IOS设备）
const stringToDate = dateString => {
  if (dateString && dateString.length === 10) {
    let tempArr = dateString.split(/[-]/)
    // 部分IOS设备中new Date('yyyy-mm-dd')不会生成日期对象，如下这般处理适用于所有设备
    return new Date(tempArr[0], tempArr[1] - 1, tempArr[2])
  }
  throw new Error('Parameter passed to function stringToDate should be date string whose length is 10.')
}

// 将形如"yyyy-mm-dd hh:mm:ss"的日期字符串转换为日期对象（兼容IOS设备）
const fullStringToDate = dateString => {
  if (dateToString && dateToString.length === 19) {
    // Attention: there is a space between regular expression
    let tempArr = dateString.split(/[- :]/)
    // 部分IOS设备中new Date('yyyy-mm-dd hh:mm:ss')不会生成日期对象，如下这般处理适用于所有设备
    return new Date(tempArr[0], tempArr[1] - 1, tempArr[2], tempArr[3], tempArr[4], tempArr[5])
  }
  throw new Error('Parameter passed to function fullStringToDate should be date string whose length is 19.')
}

export {
  getRelativeDateStr,
  dateToString,
  timestampToString,
  timestampToFullString,
  stringToDate,
  fullStringToDate
}
