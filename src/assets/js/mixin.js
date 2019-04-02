export const mixins = {
  methods: {
    // 判断android、ios
    checkPhone () {
      let userAgent = navigator.userAgent,
          isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1, //android终端
          isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid) {
        window.location.href = "https://www.baidu.com"
      } else if (isiOS){
        window.location.href = "https://www.jd.com"
      }
    }
  }
}