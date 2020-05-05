import {
	tryHideLoading,
	tryShowLoading
} from '@/utils/loading.js'
const state = {
	code: '',
	userInfo: {}
};
const mutations = {
	SET_CODE(state, data) {
		state.code = data;
	},
	SET_USER_INFO(state, data) {
		state.userInfo = data;
	}
};
const getters = {};
const actions = {
	GET_CODE({state,commit}) {
		if (state.code) {
			resolve(state.code)
		} else {
			tryShowLoading('登录中')
			return new Promise((resolve, reject) => {
				uni.login({
					provider: 'weixin',
					success: ({
						code
					}) => {
						uni.setStorage({
							key: 'code',
							data: code
						})
						commit('SET_CODE', code)
						resolve(code)
					},
					complete: tryHideLoading()
				})
			})
		}
	},
	GET_USER_INFO({state, commit}) {
		if (Object.keys(state.userInfo).length) {
			return state.userInfo
		} else {
			return new Promise((resolve, reject) => {
				tryShowLoading('获取用户信息中')
				uni.getUserInfo({
					provider: 'weixin',
					lang: 'zh_CN',
					success: ({userInfo}) => {
						console.log(userInfo);
						uni.setStorage({
							key: 'userInfo',
							data: userInfo
						})
						commit('SET_USER_INFO', userInfo)
						resolve(userInfo)
					},
					complete: tryHideLoading()
				})
			})
		}
	}
};

export default {
	state,
	mutations,
	getters,
	actions
}
