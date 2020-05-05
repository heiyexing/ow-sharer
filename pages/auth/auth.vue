<template>
	<view class="contaniner">
		<image src="../../static/imgs/auth.gif" mode="scaleToFill"></image>
		<view class="content">
			<button class="cu-btn block bg-orange margin-top-sm" open-type="getUserInfo" @getuserinfo="handleGetUserInfo">
				授权信息
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		async onLoad() {
			// 登录获取Code
			this._login();
			
			// 获取检查是否可以授权，若授权则直接获取用户信息
			const { authSetting } = await this._checkAuthSetting()
			if (authSetting.userInfo) {
				this.handleGetUserInfo()
			}
		},
		methods: {
			async handleGetUserInfo() {
				await this.$store.dispatch('GET_USER_INFO');
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			_login() {
				return this.$store.dispatch('GET_CODE');
			},
			_checkAuthSetting() {
				return new Promise((resolve, reject) => {
					uni.getSetting({
						success: res => {
							resolve(res)
						},
						fail: error => reject(error)
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.contaniner {
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		image {
			filter: brightness(0.7);
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		}
		.content {
			z-index: 1;
			margin-bottom: 10%;
			button {
				padding-left: 60upx;
				padding-right: 60upx;
			}
		}
	}
</style>
