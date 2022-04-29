<template>
	<view class="banenr-id">
		<!-- 显示web网页 -->
		<web-view :src="webSrc"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webSrc:''
			};
		},
		onLoad({link,key2,type}) {
			this.webSrc = `${link}&keys=${key2}&type=${type}`
		}
	}
</script>

<style lang="scss">

</style>
