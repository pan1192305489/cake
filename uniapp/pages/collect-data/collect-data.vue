<template>
	<view>
		<button type="default" @click="handleCollect">转录分类</button>
		<button type="default" @click="handleGoods">转录商品</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		handleCollect() {
			uni.request({
				url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=110',
				method: 'GET',
				header: {
					'access-token': '1657c7b51104ed70c19a15eea5632d41',
					version: 'v1.0'
				},
				success: res => {
					let { data } = res.data;
					let batchObj = { requests: [] };
					data.forEach(item => {
						batchObj.requests.push({
							method: 'POST',
							path: '/1.1/classes/Post',
							body: item
						});
					});
					// this.$myRequest.post('/1.1/batch',batchObj)
					this.$post('/1.1/batch', batchObj);
					console.log(data);
				}
			});
		},
		handleGoods() {
			uni.request({
				url: 'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=3&bid=6',
				method: 'GET',
				header: {
					'access-token': '1657c7b51104ed70c19a15eea5632d41',
					version: 'v1.0'
				},
				success: res => {
				
					let { list } = res.data.data;
					
					let batchObj = { requests: [] };
					list.forEach(item => {
						batchObj.requests.push({
							method: 'POST',
							path: '/1.1/classes/goods',
							body: item
						});
					});
					this.$post('/1.1/batch', batchObj);
					console.log(res);
				}
			});
		}
	}
};
</script>

<style lang="scss"></style>
