<template>
	<div id="top">
		<div class="top_left">
			<a class="icon"><img src="./网易云音乐_自制.png" width="200" height="200">网易云音乐</a>
			<span class="left"><a href=""><</a></span><span class="right"><a href="">></a></span>
			<span class="search_span"><!--@click.stop.prevent="show"-->
				<router-link to="/search/solosong">
				<input class="search" v-model="keywords" @keydown.enter="searchMsc" placeholder=" 搜索音乐，歌手，歌词，用户"/></router-link>
				<img src="./搜索_搜索.svg" width="200" height="200">
			</span>
			<down_table v-show="downShow"></down_table>
		</div>
		<div class="top_right">	
			<a href="" class="headphoto"><img src="./headphoto.jpg" width="24" height="24">
			</a>
			<a href="" class="headtitle" @click.stop.prevent="infoShow">katousama<img src="./下拉.png" width="10" height="10"></a>
			<down_info v-show="info_show"></down_info>
			<a href="" class="skin"><img src="./衣服.svg" width="18" height="18"></a>
			<a href="" class="email"><img src="./邮件.svg" width="18" height="18"></a>
			<a href="" class="setting"><img src="./设置.svg" width="18" height="18"></a>
			<a href="" class="narrow"><img src="./缩小.svg" width="18" height="18"></a>
			<a href="" class="minimize"><img src="./最小化.svg" width="18" height="18"></a>
			<a href="" class="maximization"><img src="./最大化.svg" width="18" height="18"></a>
			<a href="" class="close"><img src="./关闭.svg" width="18" height="18"></a>
		</div>	
	</div>
</template>

<script>
import axios from 'axios'
import down_table from "../down_table/down_table.vue"
import down_info from "../down_info/down_info.vue"
import bus from '../../assets/eventBus.js'

export default{
	name:'top',
	data(){
		return{
			downShow:false,
			info_show:false,
			keywords:"",
			msgmusic:{},
			kvaule:""
		}
	},
	methods:{
		show(){
           this.downShow=true;
		},
		hide(){
			this.downShow=false;
		},
		infoShow(){
			this.info_show = true;
		},
		infoHide(){
			this.info_show = false;
		},
		searchMsc:function(){
		    axios.get('http://localhost:3000/search?keywords=' + this.keywords+'&encodein=utf-8&encodeout=utf-8').then(response => {
		    	this.msgmusic = response.data;
		    	bus.$emit('userEvent',this.msgmusic);
		    	bus.$emit('userEvent2',this.keywords);
		    });
		},
	},
	components:{
		down_table,down_info,bus
	}
}
</script>

<style lang="scss" type="text/css" scoped="">

	#top{
		width: 1022px;
		height: 50px;
		background: #56D486;
		z-index: 10;
		.top_left{
			position: absolute;
			left: 0;
			top: 0;
			height: 50px;
			.icon{
				margin-left: 13px;
				vertical-align: middle;
				color: #fff;
				font-weight: 500;
				font-size: 17px;
				line-height: 50px;
				img{
					vertical-align: middle;
					margin-bottom: 4px;
					margin-right: 2px;
					width: 22px;
					height: 22px;
					background-repeat: no-repeat;
					background-size: 22px;
				}
			}
			.left,.right{
				display: inline-block;
				vertical-align: middle;
				width: 24px;
				height: 19px;
				text-align: center;
				opacity: 0.6;
				a{
					color: #EFEBEB;
					font-size: 16px;
					line-height: 19px;			
				}
			}
			.left{
				margin-left: 64px;
				border: 1px solid #ADA8A8;
				border-radius: 2px;
			}
			.right{
				border-right: 1px solid #ADA8A8;
				border-top: 1px solid #ADA8A8;
				border-bottom: 1px solid #ADA8A8;
				border-radius: 2px;
			}
			.search_span{
				position: relative;
				vertical-align: top;
				.search{
					width: 190px;
					height: 20px;
					margin-left: 5px;
					background-color: #000;
					border-radius: 15px;
					border: none;
					opacity: 0.3;
					color: #ddd;
					font-size: 12px;
					line-height: 20px;
					text-indent: 10px;			
					padding-right: 30px;
				}
				.search:focus{
					outline:none;
				}	
				img{
					position: relative;
					right: 26px;
					vertical-align: middle;
					width: 12px;
					height: 12px;
				}
			}
		}
		.top_right{
			position: absolute;
			right: 0;
			top: 0;
			height: 50px;
			.headphoto{
				line-height: 50px;
				font-size: 10px;
				img{					
					vertical-align: middle;
					margin-bottom: 3px;
					margin-right: 5px;
					border-radius: 50%;
					width: 24px;
					height: 24px;
					background-repeat: no-repeat;
					background-size: 24px;
				}
			}
			.headtitle{
				color: #fff;
				opacity: 0.8;
				font-size: 10px;
				img{
					margin-left: 10px;
					width: 10px;
					height: 10px;
				}
			}
			.skin,.email,.setting{
				line-height: 50px;
				img{
					vertical-align: middle;
					margin-bottom: 3px;
					margin-left: 20px;
					width: 18px;
					height: 18px;
				}
			}
			.setting{

				img{
					padding-right: 18px; 
					border-right: 1px solid #E9DFDF;
					
				}
			}
			.close,.minimize{
				line-height: 50px;
				img{
					vertical-align: middle;
					margin-bottom: 3px;
					margin-left: 3px;
					width: 14px;
					height: 14px;
				}
			}
			.narrow{
				img{
					padding-left: 8px; 
				}
			}
			.narrow,.maximization{
				line-height: 50px;
				img{
					vertical-align: middle;
					margin-bottom: 3px;
					margin-left: 3px;
					width: 16px;
					height: 16px;
				}
			}
			.close{
				img{
					margin-right: 15px;
				}
			}
		}
	}
</style>