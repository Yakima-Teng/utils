// 微信账号的appId，根据window.location.hostname判断是微信测试号还是正式生产环境，进而返回对应的appId
const appId = (() => {
  switch (window.location.hostname) {
    case '测试环境的域名或ip地址': return '微信测试号的appId'
    case '生产环境的域名或ip地址': return '微信正式号的appId'
    default: return null
  }
})()

// 生成微信跳转链接
const generateWechatRedirectUrl = (pathname = '/example/example.html') => {
  const targetUrl = window.location.origin + pathname
  if (!appId) {
    // 本地开发时不进行微信跳转
    return targetUrl
  }
  const encodedUrl = window.encodeURIComponent(targetUrl)
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodedUrl}&response_type=code&scope=snsapi_base&state=1#wechat_redirect`
}

export {
  generateWechatRedirectUrl
}
