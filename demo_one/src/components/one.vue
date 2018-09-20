<template>
	<div id="one">
		<div class="o_list">
			<a href="#" class="mint-cell"><span class="mint-cell-mask"></span>
				<div class="mint-cell-left"></div>
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<!---->
						<div><i class="indexicon"></i> <span>本地音乐</span></div>
					</div>
					<div class="mint-cell-value is-link"><span></span></div> <i class="mint-cell-allow-right"></i></div>
				<div class="mint-cell-right"></div>
			</a>
			
			<a href="#" class="mint-cell"><span class="mint-cell-mask"></span>
				<div class="mint-cell-left"></div>
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<!---->
						<div><i class="indexicon"></i> <span>最近播放</span></div>
					</div>
					<div class="mint-cell-value is-link"><span></span></div> <i class="mint-cell-allow-right"></i></div>
				<div class="mint-cell-right"></div>
			</a>
			
			<a href="#" class="mint-cell"><span class="mint-cell-mask"></span>
				<div class="mint-cell-left"></div>
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<!---->
						<div><i class="indexicon"></i> <span>下载管理</span></div>
					</div>
					<div class="mint-cell-value is-link"><span></span></div> <i class="mint-cell-allow-right"></i></div>
				<div class="mint-cell-right"></div>
			</a>
			
			<a href="#" class="mint-cell"><span class="mint-cell-mask"></span>
				<div class="mint-cell-left"></div>
				<div class="mint-cell-wrapper">
					<div class="mint-cell-title">
						<!---->
						<div><i class="indexicon"></i> <span>我的收藏</span></div>
					</div>
					<div class="mint-cell-value is-link"><span></span></div> <i class="mint-cell-allow-right"></i></div>
				<div class="mint-cell-right"></div>
			</a>
		</div>
		
		<!--折叠面板-->
	
		
		<router-view></router-view>
	</div>
	
</template>

<script>
//	 require imgUrl from "../fronts/images/top.jpg"
	export default {
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	body,html,ul,li,a,div,p,span,h1,img {margin: 0;padding: 0;}
	body {background: #eee;width: 100%;height: 100%;}
	a{
		color: #000;
	}
	img {width: 100%;display: block;}
	#one {
		width: 100%;
		height: 100%;
	}
	.o_list {
		width: 100%;
		float: left;
	}
	.mint-cell {
		border-bottom: 1px solid #eee;
	}
	.o_list span {
		font-size: 0.6rem;
	}
	.indexicon {
		width: 6%;
		height: 1.4rem;
		/*font-family: "indexicon";*/
		font-size: 0.6rem;
		color: #EA1C6A;
		margin: 0 2% 0 4%;
		display: inline-block;
		vertical-align: middle;
		font-style: normal;
		background: #EA1C6A;
	}

</style>