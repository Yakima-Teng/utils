// 将一位数（数字或字符串）转化成两位数（字符串）
const toDouble = num => {
  num = parseInt(num)
  return num < 10 ? ('' + 0 + num) : num
}

// 将数字转换成含有至多两个小数位，如4.657转换成4.65，4.00转换成4
const updateNumberToAtMostTwoDecimalPlaces = num => {
  num = '' + num

  if (!/(^[1-9][0-9]*$)|(^[1-9][0-9]*\.[0-9]+$)|(^0$)|(^0\.[0-9]+$)/.test(num)) {
    throw new Error(`Parameter (${num}) passed to function updateNumber should be a number.`)
    return
  }

  // 若数据超过两位小数，则多余的小数会被截去
  if (/^[0-9]+\.[0-9]{3,}$/.test(num)) {
    num = num.replace(/^([0-9]+\.[0-9]{2})[0-9]{1,}/, '$1')
  }

  // 若数据最后一位小数位为0，则截去该小数位
  if (/^[0-9]+\.[^0]0$/.test(num)) {
    num = num.replace(/^([0-9]+\.[^0])0$/, '$1')
  }

  // 若所有小数位均为0或含小数点但不含小数位，则取整
  if (/\.[0]*$/.test(num)) {
    num = num.replace(/\.[0]*$/, '')
  }

  return num
}

// 对数组中各个元素进行求和，返回一个至多含有两位数字的结果
const doSum = (arr = [0, 0]) => {
  let tempSum = arr.reduce((preVal, curVal, idx, array) => {
    return parseFloat(preVal) + parseFloat(curVal)
  }, 0)
  if (!isNaN(tempSum)) { return updateNumberToAtMostTwoDecimalPlaces(tempSum) }
  throw new Error(`Result (${tempSum}) of function doSum is not a number.`)
}

export {
  toDouble,
  updateNumberToAtMostTwoDecimalPlaces,
  doSum
}
