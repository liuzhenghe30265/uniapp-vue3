const baseUrl = 'http://localhost:3000'

const request = (url = '', reqData = {}, type = 'GET', header = {
	'Authorization': uni.getStorageSync('token') // 设置 token
}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中...'
		})
		uni.request({
			method: type,
			url: baseUrl + url,
			data: Object.assign({

			}, reqData),
			header: header,
			dataType: 'json',
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data)
				} else if (res.statusCode === 401) {
					uni.reLaunch({
						url: '/pages/login/login'
					})
				} else {
					reject(res.errMsg)
				}
				uni.hideLoading()
			},
			fail: (err) => {
				uni.hideLoading()
				uni.showToast({
					icon: 'error',
					title: err.errMsg,
					duration: 2000
				})
				reject(err)
			}
		})
	})
}
export default request