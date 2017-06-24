<template>
	<div id="Personal" ref="personal">
		<div id="scrollY">
			<div class="banner">
				<swiper swipeid="swipe01" effect="coverflow" :autoplay="4000">
					<img class="swiper-slide slide" slot="swiper-con" :src="msgbanner.banners[0].pic">
					<img class="swiper-slide slide" slot="swiper-con" :src="msgbanner.banners[1].pic">
					<img class="swiper-slide slide" slot="swiper-con" :src="msgbanner.banners[2].pic">
					<img class="swiper-slide slide" slot="swiper-con" :src="msgbanner.banners[3].pic">
					<img class="swiper-slide slide" slot="swiper-con" :src="msgbanner.banners[4].pic">
					<img class="swiper-slide slide" slot="swiper-con" :src="msgbanner.banners[5].pic">
				</swiper>
				<div class="swiper-button-prev swiper-button-white"></div>
	            <div class="swiper-button-next swiper-button-white"></div>
			</div>
			<div class="recommend-list">
				<div class="list-tilte"><p>推荐歌单</p><a>更多 ></a></div>
				<div class="list-content">
					<ul class="list-content-ul">
						<li v-for="item in msg.result"><img :src="item.picUrl" width="116" height="116"><p>{{item.name}}</p></li>
					</ul>
				</div>
			</div>
			<div class="recommend-list">
				<div class="list-tilte"><p>独家放送</p><a>更多 ></a></div>
				<div class="list-content">
					<ul class="list-content-ul">
						<li v-for="item in msgs.result"><img :src="item.picUrl" height="133"><p>{{item.name}}</p></li>
					</ul>
				</div>
			</div>
			<div class="recommend-list-2">
				<div class="list-tilte"><p>最新音乐</p><a>更多 ></a></div>
				<div class="list-content">
					<ul class="list-content-ul" >
						<li v-for="(item,index) in msgn.result">
							<p class="title">{{index<9?"0"+(index+1):index+1}}</p>
							<img :src="item.song.album.blurPicUrl" width="40" height="40">
							<div class="info">
								<p class="name">{{item.name}}</p>
								<p class="author">{{item.song.album.artists[0].name}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="recommend-list">
				<div class="list-tilte"><p>推荐MV</p><a>更多 ></a></div>
				<div class="list-content">
					<ul class="list-content-ul">
						<li v-for="item in msgmv.result"><img :src="item.picUrl" height="133"><p>{{item.name}}</p></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import swiper from '../swiper/swiper.vue'
import axios from 'axios'
import BScroll from 'better-scroll'
export default{
	props:{
	},
	data() {
    	return{
    		msgbanner:{},
     		msgn:{},
     		msg:{},
     		msgs:{},
     		msgmv:{}
    	}
  	},
  	created() {
	    this.getPosts();
  	},
	methods:{
		getPosts(){
			axios.get("http://localhost:3000/banner")
		    .then(response => {
		    	this.msgbanner = response.data;	
		    });
			axios.get("http://localhost:3000/personalized")
		    .then(response => {
		    	this.msg = response.data;	 
		    	
		    });
		    axios.get("http://localhost:3000/personalized/privatecontent")
		    .then(response => {
		    	this.msgs = response.data;	
		    });
		    axios.get("http://localhost:3000/personalized/newsong")
		    .then(response => {
		    	this.msgn = response.data;	
		    	this.$nextTick(()=>{
		    		this.initScroll();
		    	});
		    });		
		    axios.get("http://localhost:3000/personalized/mv")
		    .then(response => {
		    	this.msgmv = response.data;	
		    	this.$nextTick(()=>{
		    		this.initScroll();
		    	});
		    });
  		},
  		initScroll(){
			this.Scroll = new BScroll(this.$refs.personal,{
	        	scrollY:true,
	        	momentum: true,
	        	bounce: false,
	        	preventDefault: true,
	        	HWCompositing: true
       		});
      	}
  	},
	components:{
		swiper
	}
}
</script>

<style lang="scss" type="text/css" scoped>
	
	#Personal{
		position: relative;
		height: 527px;
		overflow: hidden;
		.banner{
			position: relative;
			height: 200px;
			width: 761px;
			padding-top: 20px;
			.swiper-button-prev,.swiper-button-next{
				opacity: 0.5;
			}
			.slide{
				width: 761px;
			    height: 200px;
			    background-repeat: no-repeat;
			    background-size: cover;
			}
		}
		.recommend-list{
			position: relative;
			margin-top: 20px;
			width: 100%;
			.list-tilte{
				height: 36px;
				width: 100%;
				line-height: 36px;
				border-bottom: 1px solid #EDEDED;
				p{
					display: inline-block;
					font-size: 18px;
					
				}
				a{
					display: inline-block;
					float: right;
					font-size: 14px;
				}
			}
			.list-content{
				position: relative;
				width: 100%;
				.list-content-ul{
					display: flex;
					width: 761px;
					margin-bottom: 10px;
					li{
						flex:1;
						display: inline-block;
						width: 140px;
						height: 170px;
						margin: 6px;
						&:first-child{
							margin-left: 0;
						}
						&:last-child{
							margin-right: 0;
						}
						img{
							width: 100%;
							box-shadow: 0 1px 2px #B9B7B7;
						}
						p{
							font-size: 12px;
							line-height: 18px;
							font-family: serif;
						}
					}
					
				}
			}
		}
		.recommend-list:last-child{
			padding-bottom: 50px;
		}
		.recommend-list-2{
			position: relative;
			margin-top: 20px;
			height: 100%;
			padding-bottom: 20px;
			.list-tilte{
				height: 36px;
				width: 100%;
				line-height: 36px;
				border-bottom: 1px solid #EDEDED;
				p{
					display: inline-block;
					font-size: 18px;
				}
				a{
					display: inline-block;
					float: right;
					font-size: 14px;
				}
			}
			.list-content{
				height: 100%;
				.list-content-ul{
					display: flex;
					flex-wrap: wrap;
					height: auto;
					width: 759px;
					margin-top: 10px;
					border-top: 1px solid #EDEDED;
					border-right: 1px solid #EDEDED;
					li{
						display: block;
						width: 378px;
						height: 60px;
						border-bottom: 1px solid #EDEDED;
						border-left: 1px solid #EDEDED;
						.title{
							display: inline-block;
							vertical-align: top;
							line-height: 60px;
							margin: 0 10px;
							font-size: 12px;
							color: #585656;
						}
						img{
							width: 40px;
							height: 40px;
							margin: 10px 0; 
							background-size: 40px;
							background-repeat: no-repeat;
						}
						.info{
							display: inline-block;
							vertical-align: top;
							margin: 10px 0;
							height: 40px;
							padding: 3px 0px 0px 5px;
							.name{
								font-size: 14px;
							}
							.author{
								line-height: 30px;
								font-size: 12px;
								color: #C0BEBE;
							}
						}
					}
				}
			}
		}
	}
</style>