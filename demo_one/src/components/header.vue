<template>
	<div id="app">
		<mt-header class="header" title="MUSIC">
		  <mt-button icon="more" slot="left"></mt-button>
		  <mt-button icon="search" slot="right"></mt-button>
		</mt-header>
		<ul>
			<li><a href="javascript://"><router-link  :to="{name:'one'}">我的</router-link></a></li>
			<li class="li_two"><a href="javascript://"><router-link :to="{name:'two'}">乐库</router-link></a></li>
			<li><a href=""><router-link :to="{name:'three'}">发现</router-link></a></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		}
	};
</script>

<style>
	body,html,ul,li,a,div,p,span {margin: 0;padding: 0;font-family: "微软雅黑";}
	body{font-size: 10px;}
	ul {margin: 0 auto;}
	li{list-style: none;float: left;width:33%;height: 2.5rem;line-height: 2.5rem;text-align:center;}
	a{text-decoration: none;color: #fff;}
	#app ul {
		width: 100%;

		z-index: 999;
	}
	#app ul li {
		background: #ea1c6a;
	}
	.li_two {
		padding: 0 0.5%;
	}
	.header {
		background: #ea1c6a;
	}
</style>