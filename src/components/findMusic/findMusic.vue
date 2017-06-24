<template>
	<div id="findMusic">
		<div class="nav">
			<router-link to="/findMusic/personal" tag="div" class="nav-item"><a>个人推荐</a></router-link>
			<router-link to="/findMusic/musiclist" tag="div" class="nav-item"><a>歌单</a></router-link>
			<div class="nav-item"><a href="">主播电台</a></div>
			<div class="nav-item"><a href="">排行榜</a></div>
			<div class="nav-item"><a href="">歌手</a></div>
			<div class="nav-item"><a href="">最新音乐</a></div>
		</div>	
		<router-view></router-view>	
	</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default{
	data() {
    	return{
    	}
  	},
  	created() {
  	},
	methods:{
  	}
}
</script>

<style lang="scss" type="text/css" scoped="">

	#findMusic{
	    position: relative;
	    padding: 0 30px;
	    height: 100%;
	    overflow: hidden;
    	.nav{
	    	display: flex;
	    	height: 42px;
	    	padding: 0 140px;
	    	border-bottom: 1px solid #EDEDED;
	    
	    	.nav-item{
	    		flex:1;
	    		display: inline-block;
	    		height: 41px;
	    		text-align: center;
	    		a{
	    			line-height: 42px;
	    			font-size: 14px;
	    			color: #000;
	    		}
	    		&.router-link-active{
	    		border-bottom: 2px solid #56D486;
	    		}
	    	}
    	}
	}
</style>