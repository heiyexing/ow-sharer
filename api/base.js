import {
	tryShowLoading,
	tryHideLoading
} from "../utils/loading.js"

const BASE_URL = 'http://39.100.250.102/mock/5ea28a2786046725ea214447/example'

const request = (method, url, data, config) => {
	tryShowLoading()
	return new Promise((resolve, reject) => {
		uni.request({
			url: url.startsWith('http') ? url : BASE_URL + url,
			data,
			method,
			success: res => {
				resolve(res.data)
			},
			fail: error => {
				reject(error)
			},
			complete: tryHideLoading
		})
	})
}

export const GET = (url, data, config) => request('GET', url, data, config)

export const POST = (url, data, config) => request('POST', url, data, config)

export const PUT = (url, data, config) => request('PUT', url, data, config)

export const DELETE = (url, data, config) => request('DELETE', url, data, config)

export default {
	GET,
	POST,
	PUT,
	DELETE
}
