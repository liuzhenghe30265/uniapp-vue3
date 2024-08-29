<template>
	<view class="login_contaniner">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item name="username">
				<uni-easyinput type="text" v-model="formData.username" placeholder="输入用户名" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<uni-easyinput type="password" v-model="formData.password" placeholder="输入密码" />
			</uni-forms-item>
		</uni-forms>
		<button class="btn" @click="submit">登录</button>
	</view>
</template>

<script>
	import {
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
				}
			}
		},
		methods: {
			...mapActions(['getUserInfo']),
			submit() {
				this.$refs.form.validate().then(res => {
					// 发送登录请求
					API.login({
						username: res.username,
						password: res.password
					}).then(res => {
						if (res && res.code === 200) {
							const token = `Bearer ${res.data.token}`
							uni.setStorageSync('token', token)
							uni.reLaunch({
								url: '/pages/home/home'
							})
							this.getUserInfo()
						}
					}).catch((err) => {})

				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login_contaniner {
		padding: 40rpx;

		.uni-easyinput {
			background: #fff;

			::v-deep {
				.uni-easyinput__content {
					min-height: auto;
				}

				.uni-easyinput__content-input {
					height: 78rpx;
					line-height: 78rpx;
				}
			}
		}

		.btn {
			background: #00C781;
			height: 78rpx;
			line-height: 78rpx;
			color: #fff;
			font-size: 32rpx;
		}
	}
</style>