Vue.config.productionTip = false;
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './fronts/MUI/css/mui.min.css';


Vue.use(VueRouter);
let router = new VueRouter({
	
})



new Vue({
	el:"#app",
	router,
	render:c => c(App)
})
