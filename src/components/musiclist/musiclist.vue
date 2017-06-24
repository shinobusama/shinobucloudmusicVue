<template>
	<div class="musiclist" ref="musiclist">
		<div id="scrollY">
			<div class="tag">
				<p class="title">流行</p>
				<img src="./下拉.png" height="16" width="16">
			</div>
			<div class="tags">
				<p class="title">热门标签：</p>
				<span>华语</span>
				<span>流行</span>
				<span>摇滚</span>
				<span>民谣</span>
				<span>电子</span>
				<span>轻音乐</span>
				<span>影视原声</span>
				<span>ACG</span>
				<span>怀旧</span>
				<span>治愈</span>
			</div>
			<div class="list">
				<ul class="list-ul">
					<li class="item" v-for="item in msglist.playlists"><img :src="item.coverImgUrl">
					<p>{{item.name}}</p></li>
				</ul>
			</div>
		</div>
	</div>
	
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default{
	data() {
    	return{
     		msglist:{}
    	}
  	},
  	mounted() {
	    this.getPosts();
  	},
	methods:{
		getPosts(){
		    axios.get("http://localhost:3000/top/playlist?limit=20&order=hot")
		    .then(response => {
		    	this.msglist = response.data;
		    	this.$nextTick(()=>{
		    		this.initScroll();
		    	});
		    });
			
  		},
  		initScroll(){
			this.Scroll = new BScroll(this.$refs.musiclist,{
	        	scrollY:true,
	        	momentum: true,
	        	bounce: false,
	        	preventDefault: true,
	        	HWCompositing: true
       		});
      	}
	}
}
</script>

<style lang="scss" type="text/css" scoped>
	.musiclist{
		position: relative;
		height: 527px;
		overflow: hidden;
		.tag{
			position: relative;
			margin-top: 20px;
			margin-bottom: 10px;
			width: 60px;
			height: 26px;
			border:1px solid #EDEDED;
			border-radius: 5px;
			text-align: center;
			font-size: 0; 
			.title{
				vertical-align: top;
				display: inline-block;
				font-size: 12px;
				line-height: 26px;
			}
			img{
				display: inline-block;
				vertical-align: top;
				margin-top: 3px;
			}
		}
		.tags{
			position: relative;
			width: 100%;
			height: 13px;
			font-size: 0;
			.title{
				display: inline-block;
				font-size: 13px;
			}	
			span{
				display: inline-block;
				font-size: 13px;
				padding: 0 15px;
				border-right: 2px solid #CAC6C6;
				text-align: center;
				color: #3B3939;
				&:last-child{
					border-right: none;
				}
			}
		}
		.list{
			position: relative;
			width: 100%;
			height: auto;
			margin-top: 50px;
			.list-ul{
				display: flex;
				flex-flow: row wrap;
				.item{
					box-sizing:border-box;
					flex:0 0 25%;
					margin-bottom: 40px;
					font-size: 0;
					text-align: center;
					img{
						width: 175px;
						height: 175px;
						box-shadow: 0 0px 1px #B7B3B3; 
					}
					p{
						margin: 10px 0;
						padding: 0 6px;
						line-height: 20px;
						text-align: left;
						font-size: 14px;
					}
					
				}
			}
		}
		
	}
	
</style>