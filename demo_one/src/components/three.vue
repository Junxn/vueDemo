<template>
	<div id="three"> 
		<mt-range v-model="rangeValue">
		  <div slot="start">0</div>
		  <div slot="end">100</div>
		</mt-range>
		
	
	
		<router-view></router-view>
	</div>
 	
</template>

<script>
	export default {
		data(){
			return{
				rangeValue:'',
			}
		}
	};
</script>

<style>
#three {
	width: 90%;
	height: 10rem;
	float: left;
	margin: 5rem 0 0 5%;
}
</style>