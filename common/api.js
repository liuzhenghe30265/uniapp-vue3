import request from './request.js'

export const login = (data) => {
	return request('/api/user/login', data, 'POST')
}

export const getUserInfo = (data) => {
	return request('/api/user/info', data, 'POST')
}
