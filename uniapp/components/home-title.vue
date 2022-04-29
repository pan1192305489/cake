<template>
	<view class="home-title padding flex justify-between align-center margin-tb-sm">
		<view class="flex align-center">
			<text class="iconfont icon-canju"></text>
			<view class="fs-28 margin-left">
				{{title}}
				<view class="fs-14">{{enTit}}</view>
			</view>
		</view>
		<view class="">
			{{rightTit}}
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"home-title",
		props:['title','enTit','rightTit'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.icon-canju{
	font-size: 60upx;
}
</style>
