
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import header from './components/header.vue';
import One from './components/one.vue';
import Two from './components/two.vue';
import Three from './components/three.vue';

Vue.config.productionTip = false;
Vue.use(MintUI);
//注册全局组件
Vue.component('headerVue',header);
//安装插件
Vue.use(VueRouter);
let router = new VueRouter({
	routes:[
			{ path:'/one',redirect:{ name:'one' },},
			{ name:'one',path:'/one',component: One },
			{ path:'/two',redirect:{ name:'two' },},
			{ name:'two',path:'/two',component:Two },
			{ path:'/three',redirect:{ name:'three' }, },
			{ name:'three',path:'/three',component:Three }
	]
});
/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
	render:c => c(App)
})
