import Mock from 'mockjs'
import $ from 'jquery'
import { merge } from './utils.js'

// api接口前缀：如果是跨域请求的话，在这里修改前缀
const apiPrefix = ''

// mock data
const doMock = (url = '/', mockData = {}, shouldLog = false) => {
  let mockResponse
  Mock.mock(apiPrefix + url, options => {
    if (Math.random() < 0.9) {
      mockResponse = mockData.success
    } else if (Math.random() < 0.5) {
      mockResponse = mockData.fail
    } else {
      mockResponse = mockData.error
    }
    if (shouldLog === true) {
      if (window.console && window.console.log) {
        window.console.log(`URL: ${apiPrefix + url}\nRES: ${JSON.stringify(mockResponse, null, 2)}`)
      }
    }
    return mockResponse
  })
}

// post请求，返回promise对象
const doPost = (url = '/', requestData, options) => {
  return $.ajax(merge({
    url: apiPrefix + url,
    type: 'POST',
    dataType: 'json',
    data: requestData,
    timeout: 60000
  }, options))
}

// get请求，返回promise对象
const doGet = (url, requestData, options) => {
  return $.ajax(merge({
    url: apiPrefix + url,
    type: 'GET',
    dataType: 'json',
    data: requestData,
    timeout: 60000
  }, options))
}

// 获取url中查询参数的值
const getQueryString = name => {
  const reg = new RegExp('(\\?|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.href.match(reg)
  return r ? window.decodeURI(r[2]).replace(/#.*$/, '') : ''
}

export {
  apiPrefix,
  doMock,
  doPost,
  doGet,
  getQueryString
}
