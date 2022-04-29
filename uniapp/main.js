import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import store from './store/index.js'
// 引入uView库
import uView from "uview-ui";
Vue.use(uView);
// 注册全局组件
import NavCustom from 'components/nav-custom.vue'
import HomeTitle from 'components/home-title.vue'
import GoodItem from 'components/good-item.vue'
import BackTop from 'components/back-top.vue'
Vue.component('navCustom', NavCustom)
Vue.component('homeTitle', HomeTitle)
Vue.component('goodItem', GoodItem)
Vue.component('backTop', BackTop)

// 挂载全局的异步请求方法
import myRequest from './utils/request/index.js'
// 获取原型上的属性名
const properties = Object.getOwnPropertyNames(myRequest.__proto__).splice(1);
for(let item of properties){
	// 挂载到全局
	// 注意this指向
	Vue.prototype[`$${item}`] = myRequest[item].bind(myRequest)
}
Vue.prototype.$myRequest  = myRequest
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	// 注入store
	store,
	...App
	
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
