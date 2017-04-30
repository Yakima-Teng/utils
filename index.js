import {
  getRelativeDateStr,
  dateToString,
  timestampToString,
  timestampToFullString,
  stringToDate,
  fullStringToDate
} from './libs/date.js'

import {
  isIOS
} from './libs/device.js'

import {
  toDouble,
  updateNumberToAtMostTwoDecimalPlaces,
  doSum
} from './libs/number.js'

import {
  apiPrefix,
  doMock,
  doPost,
  doGet,
  getQueryString
} from './libs/request.js'

import {
  typeOf,
  merge
} from './libs/utils.js'

import {} from './libs/validate.js'

import {
  generateWechatRedirectUrl
} from './libs/wechat.js'

export {
  getRelativeDateStr,
  dateToString,
  timestampToString,
  timestampToFullString,
  stringToDate,
  fullStringToDate,
  isIOS,
  toDouble,
  updateNumberToAtMostTwoDecimalPlaces,
  doSum,
  apiPrefix,
  doMock,
  doPost,
  doGet,
  getQueryString,
  typeOf,
  merge,
  generateWechatRedirectUrl
}
