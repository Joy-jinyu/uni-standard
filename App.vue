<script>
import { userStore } from '@/store/user'
export default {
  onLaunch: async function() {
    const user = userStore()
    const loginInfo = await this.getLoginInfo()
    const { openid, session_key } = await this.getUserOpenId(loginInfo)
    user.setUserInfo({
      userId: openid
    })
    console.log('App Launch', openid, session_key)
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  methods: {
    getLoginInfo() {
      return new Promise((resolve, eject) => {
        uni.login({
          provider: 'weixin',
          success: res => {
            resolve(res) // code 用户code
          }
        })
      })
    },
    getUserOpenId({ code }) {
      return new Promise((resolve, eject) => {
        uni.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',// 请求微信服务器
          method:'GET',
          data: {
            appid: 'wx88e38268e6271bd1', //你的小程序的APPID
            secret: '0a090883897f334c0778d57659892fc0', //你的小程序秘钥secret,
            js_code: code, //wx.login 登录成功后的code
            grant_type:'authorization_code'
          },
          success: res => {
            resolve(res.data) //openid 用户唯一标识, session_key  会话密钥
          }
        })
      })
    }
  }
}
</script>

<style>
.container {
  padding: 15px;
}

button {
  margin-bottom: 15px;
}
</style>
