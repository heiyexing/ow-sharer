// 请求开启Loading的计数器
let counter = 0;

export const tryShowLoading = (title = '请求中', step = 1) => {
	uni.showLoading({
		mask: true,
		title
	})
	counter += step;
}

export const tryHideLoading = (step = 1) => {
	counter -= step
	if (!counter) {
		uni.hideLoading()
	}
}

export default {
	tryShowLoading,
	tryHideLoading
}