
class MyRequest {
	constructor(config) {
	this.config = config
	}
	request(url,method,data=[]) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.config.baseURL+url,
				method,
				header: {
					'X-LC-Id': 'p2Vq9EQJV5NQxJL7xcAL8ltS-gzGzoHsz',
					'X-LC-Key': 'vdMnN0EkuSRaFqDVxaWd1Lq0',
					'Content-Type': 'application/json'
				},
				data,
				success: res => {
					resolve(res.data)
				},
				fail: (err) => {
					reject(err)
				}
			});
		})
	}
	get(url,data=[]){
		return this.request(url,'GET',data)
	}
	post(url,data=[]){
		return this.request(url,'POST',data)
	}
	delete(url,data=[]){
		return this.request(url,'delete',data)
	}
}
export default MyRequest
