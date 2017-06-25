<template>
	<div class="soloSong" ref="solosong">
		<div id="scorllY">
			<ul class="totaltitle1">
				<li class="number"></li>
				<li class="operation">操作</li>
				<li class="title">音乐标题</li>
				<li class="singer">歌手</li>
				<li class="ablum">专辑</li>
				<li class="time">时长</li>
				<li class="hot">热度</li>
			</ul>
			<ul class="totaltitle" :class="{'totaltitlebg':index%2===1}" v-for="(item,index) in msgmusic.result.songs" @click="playmsc(index)" ref="musiclistnum">
				<li class="number">{{index<9?"0"+(index+1):index+1}}</li>
				<li class="operation"><img src="./收藏.svg" alt=""><img src="./下载.svg" alt=""></li>
				<li class="title">{{item.name}}{{item.alias[index]}}</li>
				<li class="singer">{{item.artists[0].name}}</li>
				<li class="ablum">{{item.album.name}}</li>
				<li class="time">未知</li>
				<li class="hot">暂无</li>
			</ul>
		</div>
	</div>
</template>

<script>
import bus from '../../../assets/eventBus.js'
import axios from 'axios'
import BScroll from 'better-scroll'
export default{
	data(){
		return{
			msgmusic:{}, //音乐列表
			msgmusicid:{},	//音乐id
			url:"",  //音乐链接
			urls:[] //音乐链接数组
		}
	},
	mounted(){
		
	},
	created(){
		this.getpost();
	},
	methods:{
      	getpost(){
      		let self = this;
			bus.$on("userEvent",function(msg){
				self.msgmusic=msg; //获取搜索返回数据
				// setTimeout(function(){
				// 	this.Scroll = new BScroll(self.$refs.solosong,{
			 //        	scrollY:true,
			 //        	momentum: true,
			 //        	bounce: false,
			 //        	preventDefault: true,
			 //        	HWCompositing: true
			 //       	})
				// },100)
				self.playmsclist(); 
				this.$nextTick(()=>{
					this.Scroll = new BScroll(self.$refs.solosong,{
			        	scrollY:true,
			        	momentum: true,
			        	bounce: false,
			        	preventDefault: true,
			        	HWCompositing: true
			       	})
				})
				//滚动初始化
			});
      	},
      	playmsc(index){  //获取单个列表项歌曲url
      		let self=this;	
      		var id = this.msgmusic.result.songs[index].id;
      		axios.get("http://localhost:3000/music/url?id="+id)
		    .then(response => {
		    	this.msgmusicid = response.data;
		    	this.url = self.msgmusicid;
		    	bus.$emit('userEvent3',self.url.data[0].url);
		    });
      	},
      	playmsclist(){  //获取歌曲列表歌曲所有链接
      		let self=this;	
      		
      		for(let i = 0;i<30;i++){
      			var id = this.msgmusic.result.songs[i].id;
      			axios.get("http://localhost:3000/music/url?id="+id)
		    .then(response => {
		    	this.msgmusicid = response.data;
		    	this.urls = self.msgmusicid;
		    	bus.$emit('userEvent4',self.urls.data[0].url);
		    });
      		}
      	}
	},
	components:{
	}	
}
</script>

<style lang="scss" type="text/css" scoped>

	.soloSong{
		position: relative;
		height: 464px;
		overflow: hidden;
		.totaltitle,.totaltitle1{
			display: flex;
			width: 761px;
			padding: 0 30px;
			&:first-child{
				border-bottom: 1px solid #EDEDED;
				border-top: 1px solid #EDEDED;
			}
			li{
				line-height: 30px;
				overflow: hidden; 
				text-indent: 4px;
				text-align: left;
				font-size: 14px;
				color: #4B4848;
				&:last-child{
					border-right:none;
				}			
			}
			.number{
				flex: 0 0 4%;
			}
			.operation{
				flex: 0 0 7%;
				img{
					margin-top: 9px;
					width: 12px;
					height: 12px;
				}
			}
			.title{
				flex: 0 0 27%;
				// -webkit-line-clamp: 2;
				// text-overflow: ellipsis;
			}
			.singer{
				flex: 0 0 15%;
				text-overflow: ellipsis;
				white-space:nowrap;
			}
			.ablum{
				flex: 0 0 21%;
				text-overflow: ellipsis;
				white-space:nowrap;
			}
			.time{
				flex: 0 0 8%;
			}
			.hot{
				flex: 0 0 18%;
			}
		}
		.totaltitle1{
			background-color: rgba(235,235,235,0.1);
			li{
				border-right: 1px solid #EDEDED;
			}
		}
		.totaltitle{
			.operation{
				text-align: center;
				img{
					margin: 0px 5px;
					width: 12px;
					height: 12px;
				}
			}
		}
		.totaltitle:hover{
			background-color: rgba(245,245,245,0.8);
		}
		.totaltitlebg{
			background-color: rgba(240,240,240,0.2);
		}
	}
</style>