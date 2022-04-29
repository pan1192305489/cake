<template>
	<view class="cake">
		<view class="nav-bar"><nav-custom></nav-custom></view>
		<view class="content"><good-item v-for="(item, index) in glist" :gdata="item"></good-item></view>
		<view class="fixed flex justify-center padding-sm bg-fff">
			<view v-for="(item, index) in tabArr" :key="item.name" @click="handleTab(item)" class="flex justify-center align-center">
				<view class="name">{{ item.name }}</view>
				<u-line v-if="index !== tabArr.length - 1" direction="col" length="15" color="gray"></u-line>
			</view>
		</view>
		<!-- 弹出层 -->
		<u-popup @close="handleClose" :show="show" mode="left" :safe-area-inset-bottom="true">
			<view class="pop-content">
				<scroll-view  scroll-y="true" style="height: 1200rpx;" scroll-with-animation="true">
					<view v-for="(item, index) in cfyList" class="padding-sm u-border-bottom  ">
						{{ item.bname }}
						<view v-if="index === 0" >
							<view  @click="flavorShow = !flavorShow" class="margin-top padding-tb-sm u-border-top padding-left-sm ">口味筛选</view>
							<u-cell-group  :border="false" class="margin-bottom-sm" v-show="flavorShow">
								<u-cell v-for="(itm, idx) in item.list" icon="setting-fill" :title="itm.tname" isLink=""></u-cell>
							</u-cell-group>
							<view class="" class="padding-top-sm padding-left-sm" @click="sceneShow = !sceneShow">场景筛选</view>
							<u-cell-group :border="false" class="margin-bottom-sm " v-show="sceneShow">
								<u-cell v-for="(itm, idx) in item.scene" icon="setting-fill" :title="itm.tname" isLink=""></u-cell>
							</u-cell-group>
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			glist: [],
			page: 0,
			tabArr: [
				{ name: '分类', bcid: '', target: '' },
				{ name: '蛋糕', bcid: '1', target: '/pages/cake' },
				{ name: '面包', bcid: '11', target: '/pages/bread' },
				{ name: '小食', bcid: '6', target: '/pages/food' },
				{ name: '购物车', bcid: '', target: '/pages/cart' }
			],
			bcid: 1,
			show: false,
			// 分类列表
			cfyList: [],
			// 场景筛选列表展示
			sceneShow:false,
			// 口味筛选
			flavorShow:false
		};
	},
	onLoad() {
		this.loadData();
		this.$get('/1.1/classes/classify').then(res => {
			const cfyList = res?.results[0]?.data;
			this.cfyList = cfyList;
		});
	},
	// 触底时触发
	onReachBottom() {
		this.loadData();
	},
	// 下拉刷新时触发
	onPullDownRefresh() {
		this.glist = [];
		this.page = 0;
		this.loadData();
	},
	methods: {
		handleDetail(idx) {
			console.log(idx);
			//  uni中的路由
			uni.navigateTo({
				url: `../detail/detail?idx=${idx}`
			});
		},
		// 数据加载
		loadData() {
			let skip = this.page * 8;
			// bcid为1表示种类蛋糕，limit表示限制获取x条数据，skip表示跳过x条数据
			let url = `/1.1/classes/goods?where={"bcid":${this.bcid}}&limit=8&skip=${skip}`;
			this.$get(url).then(res => {
				// 停止下拉刷新
				uni.stopPullDownRefresh();
				let { results } = res;
				if (results.length) {
					this.page++;
					// 此时应该是追加 而不是替换
					this.glist = [...this.glist, ...res.results];
				} else {
					uni.showToast({
						title: '没有数据啦~~',
						icon: 'none'
					});
				}
			});
		},
		// tab点击处理函数
		handleTab(tabItem) {
			let { bcid, target } = tabItem;
			if (bcid) {
				this.glist = [];
				this.page = 0;
				this.bcid = bcid;
				this.loadData();
			}
			// 点击分类时显示侧边栏
			if (!bcid && !target) {
				this.show = !this.show;
			}
		},
		// 关闭遮罩层
		handleClose() {
			this.show = !this.show;
		}
	}
};
</script>

<style lang="scss" scoped>
.cake {
	padding-top: 100upx;
	padding-bottom: 80upx;
}
.content {
	display: flex;
	flex-wrap: wrap;
	padding-left: 5upx;
}
.fixed {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, 0.2);
	.flex {
		width: 20vw;
		justify-content: space-around;
	}
}
.pop-content {
	width: 50vw;
	margin-top: 100upx;
}
</style>
