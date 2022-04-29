<template>
	<view class="back-top" v-show="isShowBackTop"><view class="iconfont icon-tubiao_fanhuidingbu"></view></view>
</template>

<script>
export default {
	name: 'back-top',
	data() {
		return {
			isShowBackTop: false
		};
	},
	methods: {},
	mounted() {
		uni.$on('onPageScroll', data => {
			if (data > 500) {
				this.isShowBackTop = true;
			} else {
				this.isShowBackTop = false;
			}
		});
	}
};
</script>

<style lang="scss">
.back-top {
	position: fixed;
	bottom: 40upx;
	right: 20upx;
	height: 100upx;
	width: 100upx;
	background-color: #ffffff;
	border-radius: 50%;
	box-shadow: 0 0 30upx 4upx rgba(0, 0, 0, 0.4);
	text-align: center;
	line-height: 100upx;
}
</style>
