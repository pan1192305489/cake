<template>
	<view class="bread">
		<view class="flex justify-between padding">
			<view class="" @click="handleSend">草莓蛋糕</view>
			<view class="">购物车按钮</view>
		</view>
	</view>
</template>

<script>
	import testBus from '../../bus/testBus.js'
export default {
	data() {
		return {};
	},
	methods:{
		handleSend(){
			testBus.$emit('sendData',{mes:'hello',num:123})
		}
	}
};
</script>

<style lang="scss">
	.bread{
		overflow: hidden;
	}
</style>
