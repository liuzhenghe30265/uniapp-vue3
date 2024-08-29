<template>
    <mpvue-map></mpvue-map>

    <view class="uni-h4 uni-center uni-common-mt">
        {{ hasLogin ? '已登录' : '未登录' }}
        <button type="primary" @click="tologin(value)">
            微信登录
        </button>
    </view>
    <view class="uni-h4 uni-center uni-common-mt">
        <view>
            <block v-if="hasUserInfo">
                <view class="uni-h4 uni-center uni-common-mt">{{ userInfo.nickName || userInfo.nickname ||
                    userInfo.gender || userInfo.email || userInfo.phoneNumber }}</view>
                <view v-if="userInfo.avatarUrl || userInfo.avatar_url" style="padding:30rpx 0; text-align:center;">
                    <image class="userinfo-avatar" :src="userInfo.avatarUrl || userInfo.avatar_url"></image>
                </view>
            </block>
            <block v-else>
                点击下方按钮获取用户信息
            </block>
        </view>
        <button type="primary" @click="getWxUserInfo">
            获取用户信息
        </button>
    </view>

    <view v-if="userInfo && userInfo.username" class="uni-h4 uni-center uni-common-mt">
        当前用户 {{ userInfo.username }}
    </view>
    <view v-else class="uni-h4 uni-center uni-common-mt">
        <uni-forms ref="form" :modelValue="formData" :rules="rules">
            <uni-forms-item name="username">
                <uni-easyinput type="text" v-model="formData.username" placeholder="输入用户名" />
            </uni-forms-item>
            <uni-forms-item name="password">
                <uni-easyinput type="password" v-model="formData.password" placeholder="输入密码" />
            </uni-forms-item>
        </uni-forms>
        <button type="primary" @click="submit">登录</button>
    </view>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex'
import * as API from '../../common/api.js'
export default {
    data() {
        return {
            formData: {
                username: 'admin',
                password: 'admin'
            },
            rules: {
                username: {
                    rules: [{
                        required: true,
                        errorMessage: '请输入用户名',
                    }
                        // {
                        // 	minLength: 3,
                        // 	maxLength: 5,
                        // 	errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
                        // }
                    ]
                },
                password: {
                    rules: [{
                        required: true,
                        errorMessage: '请输入密码',
                    }]
                }
            },
            hasUserInfo: false
        }
    },
    computed: {
        ...mapState(['userInfo', 'hasLogin'])
    },
    onShow: function () {
        console.log('home Show')
    },
    onHide: function () {
        console.log('home Hide')
    },
    methods: {
        ...mapMutations(['login', 'setUniverifyLogin']),
        ...mapActions(['getUserInfo']),
        Toast(data, duration = 1000) {
            uni.showToast(Object.assign({}, data, {
                duration
            }))
        },
        getWxUserInfo() {
            uni.getUserInfo({
                provider: this.provider,
                success: (result) => {
                    console.log('getUserInfo success', result)
                    this.hasUserInfo = true
                    this.userInfo = result.userInfo
                },
                fail: (error) => {
                    this.hasUserInfo = false
                    console.log('getUserInfo fail', error)
                }
            })
        },
        tologin() {
            const providerId = 'weixin'
            uni.login({
                provider: providerId,
                success: async (res) => {
                    this.Toast({
                        title: '登录成功'
                    })
                    // 更新保存在 store 中的登录状态
                    this.login(providerId)
                    console.warn('如需获取openid请参考uni-id: https://uniapp.dcloud.net.cn/uniCloud/uni-id')
                    uni.request({
                        url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center',
                        method: 'POST',
                        data: {
                            action: 'loginByWeixin',
                            params: {
                                code: res.code,
                                platform: 'mp-weixin'
                            }
                        },
                        success(res) {
                            console.log(res);
                            if (res.data.code !== 0) {
                                console.log('获取openid失败：', res.data.errMsg);
                                return
                            }
                            uni.setStorageSync('openid', res.data.openid)
                        },
                        fail(err) {
                            console.log('获取openid失败：', err);
                        }
                    })
                },
                fail: (err) => {
                    console.log(err)
                }
            })
        },
        change(e) {
            console.log('当前模式：' + e.type + ',状态：' + e.show);
        },
        toggle(type) {
            this.type = type
            // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
            this.$refs.popup.open(type)
        },
        submit() {
            this.$refs.form.validate().then(res => {
                // 发送登录请求
                API.login({
                    username: res.username,
                    password: res.password
                }).then(res => {
                    console.log('.........res', res)
                    if (res && res.code === 200) {
                        const token = `Bearer ${res.data.token}`
                        uni.setStorageSync('token', token)
                        this.getUserInfo()
                        // uni.reLaunch({
                        //     url: '/pages/home/home'
                        // })
                    }
                }).catch((err) => { })

            }).catch(err => {
                console.log('表单错误信息：', err);
            })
        }
    }
}
</script>