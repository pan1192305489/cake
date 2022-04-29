<template>
	<scroll-view :scroll-into-view="topId" :scroll-with-animation="true" class="scroll-home" scroll-y="true" @scroll="handleScroll">
		<view class="home">
			<!-- 顶部锚点 -->
			<view id="topAnchor"></view>
			<nav-custom></nav-custom>
			<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#ffe32a">
				<swiper-item v-for="item in banner" :key="item.objectId">
					<view class="swiper-item" @click="handleBanner(item.link)"><image :src="item.img" ></image></view>
				</swiper-item>
				
			</swiper>
			<home-title title="本季推荐" en-tit="Seasonal Recommend" right-tit="Seasonal"></home-title>
			<scroll-view scroll-x="true">
				<view class="scroll-inner">
					<image src="../../static/images/recommend1.jpeg" mode="heightFix"></image>
					<image src="../../static/images/recommend2.jpg" mode="heightFix"></image>
					<image src="../../static/images/recommend3.jpg" mode="heightFix"></image>
					<image src="../../static/images/recommend1.jpeg" mode="heightFix"></image>
					<image src="../../static/images/recommend2.jpg" mode="heightFix"></image>
				</view>
			</scroll-view>
			<home-title title="法式经典" en-tit="French Classics" right-tit="French"></home-title>
			<image class="classify" src="../../static/images/french.jpg" mode=""></image>
			<view class="flex flex-wrap justify-between"><good-item v-for="(item, index) in 4"></good-item></view>
			<back-top @click.native="handleBackTop"></back-top>
		</view>
	</scroll-view>
</template>

<script>
	
export default {
	data() {
		return {
			topId: '',
			banner:[]
		};
	},
	methods: {
		handleScroll(e) {
			let { scrollTop } = e.detail;
			uni.$emit('onPageScroll', scrollTop);
			this.topId = '';
		},
		handleBackTop() {
			this.topId = 'topAnchor';
		},
		handleBanner(link){
			console.log(link);
			uni.navigateTo({
				url:'./banner-ad?link='+link
			})
		}
	},
	onLoad() {
		// 方法1
		// uni.request({
		// 	url: 'https://p2vq9eqj.lc-cn-n1-shared.com/1.1/classes/classify',
		// 	method: 'GET',
		// 	header: {
		// 		'X-LC-Id': 'p2Vq9EQJV5NQxJL7xcAL8ltS-gzGzoHsz',
		// 		'X-LC-Key': 'vdMnN0EkuSRaFqDVxaWd1Lq0',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	success: res => {
		// 		console.log(res);
		// 	}
		// });
		
		// 方法2.
		// myRequest.request('/1.1/classes/classify').then((res)=>{
		// 	console.log(res);
		// })
		
		// 方法3 
		// 在main中vue原型上挂载myRequest方法
		this.$myRequest.get('/1.1/classes/banner').then(res=>{
			this.banner = res.results
		})
		
	}
};
</script>

<style lang="scss">
.banner {
	height: 1000upx;
	swiper-item {
		height: 1000upx;
	}
	image {
		width: 100%;
		height: 1000upx;
	}
}
.scroll-inner {
	white-space: nowrap;
	image {
		height: 290upx;
	}
}
.classify {
	height: 380upx;
	width: 100%;
}
.scroll-home {
	height: 100vh;
}
</style>
