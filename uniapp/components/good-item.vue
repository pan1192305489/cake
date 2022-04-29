<template>
	<view class="good-item">
		<view class="cake-item">
			<!-- 封面 -->
			<view><image class="poster" :src="gdata.img" mode=""></image></view>
			<view class="info-cont">
				<view class="info flex align-center justify-between">
					<view class="">
						<view class="name fs-28">{{ gdata.name }}</view>
						<view class="french fs-16">{{ gdata.french }}</view>
					</view>
					<view class="cart-btn margin-right-sm "><text class="iconfont icon-gouwuche"></text></view>
				</view>
				<view class="fs-18">
					<text class="fs-14">¥</text>
					{{ gdata.price }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'good-item',
	props: ['gdata'],
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
@import  '../scss/mixins.scss';
.good-item {
	display: flex;
	flex-wrap: wrap;
	padding: 10upx;
	justify-content: space-between;
}
.cake-item {
	width: 350upx;
	.poster {
		height: 350upx;
		background-color: #f5f5f5;
	}
	.fs-28 {
		margin-top: 24upx;
	}
	.name,.french {
		@include ellipsisBasic(1)
	}
	.fs-16 {
		margin: 14upx 0;
	}
	.fs-18 {
		margin-bottom: 22upx;
	}
	.cart-btn {
		width: 60upx;
		height: 60upx;
		margin-top: 50upx;
		border-radius: 50%;
		background-color: #ffe32a;
		text-align: center;
		line-height: 60upx;
		font-weight: bold;
	}
}
</style>
