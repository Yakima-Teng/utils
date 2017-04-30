// 判断是否为IOS设备
const isIOS = () => {
  return (/iphone/i).test(window.navigator.userAgent.toLowerCase())
}

export {
  isIOS
}
