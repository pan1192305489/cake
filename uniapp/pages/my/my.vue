<template>
	<view>
		<view class="my"></view>
		<view class="margin bg-fff board">
			<view class="text-center"><image class="avatar" src="../../static/logo.png"></image></view>
			<view class="fs-28 text-center">潘大大</view>
			<view class="flex grid justify-center">
				<view class="flex flex-direction align-center padding " v-for="(item, index) in gridArr">
					<text :class="['iconfont ', 'margin-bottom-xs', item.icon]"></text>
					{{ item.name }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			gridArr: [
				{
					icon: 'icon-danju',
					name: '我的订单'
				},
				{
					icon: 'icon-jifen',
					name: '待收货'
				},
				{
					icon: 'icon-ziliaoshouce',
					name: '待付款'
				},
				{
					icon: 'icon-vip-fill',
					name: '会员等级'
				},
				{
					icon: 'icon-danju',
					name: '我的订单'
				},
				{
					icon: 'icon-jifen',
					name: '待收货'
				},
				{
					icon: 'icon-ziliaoshouce',
					name: '待付款'
				},
				{
					icon: 'icon-vip-fill',
					name: '会员等级'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.my {
	background-color: #f6f6f6;
	height: 400upx;
}
.board{
	margin-top: -200upx;
}
.iconfont {
	font-size: 60upx;
}
.avatar {
	width: 150upx;
	height: 150upx;
	margin-top: -75upx;
	border-radius: 50%;
}
</style>
