<template name="mpvue-map">
	<view>
		<map class="map" ref="map" :latitude="latitude" :longitude="longitude" :controls="controls" :scale="scale"
			:show-location="showLocation" :enable-3D="enable3D" :rotate="rotate" :skew="skew"
			:show-compass="showCompass" :enable-overlooking="enableOverlooking" :enable-zoom="enableZoom"
			:enable-scroll="enableScroll" :enable-rotate="enableRotate" :enable-satellite="enableSatellite"
			:enable-traffic="enableTraffic" :markers="markers" :polyline="polyline" :circles="circles"
			:polygons="polygons" :include-points="includePoints">
		</map>
		<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
			<view class="flex-item">
				<button @click="getCurrentLocation">获取当前位置信息</button>
			</view>
			<view class="flex-item">
				<button class="button" type="primary" @click="toggle('right')">
					<text class="button-text">地图控制</text>
				</button>
			</view>
		</view>

		<uni-popup ref="popup" background-color="#fff" @change="change">
			<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
				<uni-list class="scrollview">
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="enable3D" title="显示3D楼块"
						@switchChange="enableThreeD" />
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="showCompass" title="显示指南针"
						@switchChange="changeShowCompass" />
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="enableOverlooking"
						title="开启俯视" @switchChange="changeEnableOverlooking" />
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="enableZoom" title="是否支持缩放"
						@switchChange="changeEnableZoom" />
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="enableScroll" title="是否支持拖动"
						@switchChange="changeEnableScroll" />
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="enableRotate" title="是否支持旋转"
						@switchChange="changeEnableRotate" />
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="enableSatellite"
						title="是否开启卫星图" @switchChange="changeEnableSatellite" />
					<uni-list-item :show-arrow="false" :show-switch="true" :switch-checked="enableTraffic"
						title="是否开启实时路况" @switchChange="changeEnableTraffic" />
				</uni-list>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	name: "mpvue-map",
	data() {
		return {
			type: '',
			id: 0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			controls: [{
				id: 1,
				position: {
					left: 5,
					top: 180,
					width: 30,
					height: 30
				},
				// iconPath: '/static/logo.png',
				clickable: true
			}],
			showLocation: true,
			scale: 13,
			showCompass: true,
			enable3D: true,
			enableOverlooking: true,
			enableZoom: true,
			enableScroll: true,
			enableRotate: true,
			enableSatellite: false,
			enableTraffic: false,
			polyline: [],
			markers: [],
			polygons: [],
			circles: [],
			includePoints: [],
			rotate: 0,
			skew: 0
		}
	},
	mounted() {
		this.getCurrentLocation()
	},
	methods: {
		change(e) {
			console.log('当前模式：' + e.type + ',状态：' + e.show);
		},
		toggle(type) {
			this.type = type
			// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
			this.$refs.popup.open(type)
		},
		changeScale() {
			this.scale = this.scale == 9 ? 15 : 9
		},
		changeRotate() {
			this.rotate = this.rotate == 90 ? 0 : 90
		},
		changeSkew() {
			this.skew = this.skew == 30 ? 0 : 30
		},
		enableThreeD(e) {
			this.enable3D = e.value
		},
		changeShowCompass(e) {
			this.showCompass = e.value
		},
		changeEnableOverlooking(e) {
			this.enableOverlooking = e.value
		},
		changeEnableZoom(e) {
			this.enableZoom = e.value
		},
		changeEnableScroll(e) {
			this.enableScroll = e.value
		},
		changeEnableRotate(e) {
			this.enableRotate = e.value
		},
		changeEnableSatellite(e) {
			this.enableSatellite = e.value
		},
		changeEnableTraffic(e) {
			this.enableTraffic = e.value
		},
		getCurrentLocation() {
			uni.getLocation({
				type: 'gcj02',
				success: (res) => {
					console.log(res)
					this.longitude = res.longitude
					this.latitude = res.latitude
				},
				fail: (err) => {
					console.log(err)
					uni.showToast({
						title: '无法获取位置信息',
						icon: 'none'
					})
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.map {
	width: 100%;
	height: 600rpx;
}

.userinfo-avatar {
	border-radius: 128rpx;
	width: 128rpx;
	height: 128rpx;
}
</style>