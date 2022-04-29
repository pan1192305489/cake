<template>
	<view>
		小食
		<u-rate count="5"></u-rate>
	</view>
</template>

<script>
	import testBus from '../../bus/testBus.js'
	export default {
		data() {
			return {
				
			};
		},
		// 页面生命周期
		onLoad(){
			testBus.$on('sendData',(data)=>{
				console.log(data);
			})
			console.log('onload');
		},
		onShow(){
			console.log('onshow');
		},
		onHide(){
			console.log('onhide');
		}
	}
</script>

<style lang="scss">

</style>
