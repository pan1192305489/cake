<template>
	<view>
		<button type="primary" @click="handleBack">返回上一页</button>
		<button type="primary" @click="handleMy">访问个人中心</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	// 页面传的参数只能在onload中获取
	onLoad(options) {
		console.log(options);
	},
	methods: {
		handleBack() {
			uni.navigateBack({
				delta: 1
			});
		},
		handleMy() {
			// 不能跳转底部菜单页
			// uni.navigateTo({
			// 	url:'../food/food'
			// })
			uni.switchTab({
				url: '../food/food'
			});
		}
	}
};
</script>

<style lang="scss"></style>
