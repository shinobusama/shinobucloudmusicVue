<template>
	<div class="search">
		<div class="header">
			<p class="searchMessage">已搜索到"{{message}}"</p>
			<ul class="musicList">
				<!-- <router-link v-for="(item,index) in musicList"class="item" to="/search/solosong" tag="li">{{musicList[index]}}</router-link> -->
				<router-link to="/search/solosong" class="item">单曲</router-link>
				<li class="item">歌手</li>
				<li class="item">专辑</li>
				<li class="item">MV</li>
				<li class="item">歌单</li>
				<li class="item">歌词</li>
				<li class="item">主播</li>
				<li class="item">电台</li>
				<li class="item">用户</li>
			</ul>
		</div>
		<router-view></router-view>	
	</div>
</template>

<script>
import bus from '../../assets/eventBus.js'
export default{
	data(){
		return{
			musicList:["单曲","歌手","专辑","MV","歌单","歌词","主播","电台","用户"],
			message:""
		}
	},
	mounted(){
		let self = this;
		bus.$on("userEvent2",function(msg){
			self.message=msg;
		
		})
	}
}
</script>

<style lang="scss" type="text/css" scoped>
	.search{
		position: relative;
	    height: 100%;
	    width: 100%;
	    overflow: hidden;
	    .header{
	    	width: 761px;
	    	height: 105px;
	   		padding: 0 30px;
	    	border-bottom: 1px solid #56D486;
	    	.searchMessage{
	    		padding: 30px 0;
	    		font-size: 14px;
	    	}
	    	.musicList{
	    		display: flex;
	    		.item{
					flex:1;
					margin-right: 5px;
					height: 30px;
					line-height: 30px;
					border-top: 1px solid #EDEDED;
					border-right: 1px solid #EDEDED;
					border-left: 1px solid #EDEDED;
					font-size: 14px;
					text-align: center;
					&:last-child{
						margin-right: 0;
					}
					&.router-link-active{
			    		background-color: #56D486;
			    		color:#fff;
			    		&:hover{
			    			background-color: #56D486;
			    		}
		    		}
		    		&:active{
			    		background-color: #F2EEEE;
			    	}
	    		}
	    	}
	    }
	}
</style>