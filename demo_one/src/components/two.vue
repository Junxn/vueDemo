<template>
	<div id="two">
		<mt-header title="页面内容">
	  		<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
				<mt-button icon="search"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div>
			<div class="top1"></div>
			<div class="top2"></div>
			<div class="top4"></div>
		</div>
		<div class="bot">
			<h1>750+</h1>
			<span>美丽的文字</span>
			<span>冷静的数字</span>
			<h2>8000+</h2>
			<p>	从明天起, 做一个幸福的人<br>
				喂马, 劈柴, 周游世界<br>
				从明天起, 关心粮食和蔬菜<br>
				我有一所房子, 面朝大海, 春暖花开<br>
				从明天起, 和每一个亲人通信<br>
				告诉他们我的幸福<br>
				那幸福的闪电告诉我的<br>
				我将告诉每一个人<br>
			</p>
		</div>
		<button class="btn">现代系列</button>
		
		<router-view></router-view>
	</div>

</template>

<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	body,html,ul,li,a,div,p,span,h1 {margin: 0;padding: 0;}
	#two {
		padding-bottom: 5rem;
	}
	#two .mint-header {
		background-color: #fff;
		color: #383838;
	}
	.top1 {
		width: 100%;
		height: 6rem;
		background: lightskyblue;
	}
	.top2{
		width: 100%;
		height: 2rem;
		float: left;
	}
	.top2 {
		background: lavender;
	}
	.top4 {
		width: 100%;
		height: 5rem;
		float: left;
		background: lightpink;
	}
	.bot {
		width: 86%;
		/*height: 20rem;*/
		background: #fff;
		position: absolute;
		top: 13rem;
		left: 50%;
		margin-left: -43%;
		border-radius: 1rem;
		text-align: center;
		box-shadow: 0.2rem 0.2rem 0.1rem 0.2rem #ddd;
		margin-bottom: 6rem;
	}
	@media screen and (min-width:1200px){
		.bot {
			height: 60%;
		}
	}
	.bot h1,h2 {
		font-family: 苹方;
		margin: 1.6rem 0 0.2rem 0;
	}
	.bot span,p {
		font-family: 思源黑体;
		font-size: 0.89rem;
		color: #666;
		margin-bottom: 0.6rem;
	}
	.btn {
		width: 8rem;
		height: 2.4rem;
		background: #cb97b8;
		line-height: 2.4rem;
		border-radius: 2rem;
		color: #fff;
		border: none;
		position: absolute;
		bottom: 3.5rem;
		left: 50%;
		margin-left: -4rem;
	} 
</style>