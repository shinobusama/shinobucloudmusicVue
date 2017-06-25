<template>
	<div id="player">
		<div class="left">
			<span class="up"><img class="upicon" src="./主题-上一曲.svg" height="32" width="32" @click="up"></span>
			<span class="play"><audio ref="audio" :src="msgurl">
			</audio><img @click="play" class="playicon" :src="num?playstate.on:playstate.pause" height="32" width="32"></span>
			<span class="down"><img class="downicon" src="./主题-下一曲.svg" height="32" width="32" alt="" @click="down"></span>
		</div>
		<div class="middle">
			<p class="starttime">{{musicctime}}</p><span class="rangebg"><span class="range" ref="range" :style="{'-webkit-transform':'translateX(' + countlong +'px)' }"></span></span><p class="totaltime">{{musictime}}</p>
			<span class="sound"><img src="./音量.svg" width="16" height="16"></span><span class="range2bg"><span class="range2"></span></span>
		</div>
		<div class="right">
			<span class="loop"><img src="./循环.svg" @click="loop"></span>
			<span class="lyic"><p>词</p></span>
			<span class="list"><img src="./工单列表.svg" alt=""></span>
		</div>
	</div>
</template>


<script>
import bus from '../../assets/eventBus.js'
export default{
	data(){
		return{
			playstate:{
				on:require('./主题-播放.svg'),
				pause:require('./主题-暂停.svg'),
			},  
			msgurl:{},  //歌曲链接
			msgurls:[], //所有歌曲链接
			msgurlsindex:0,  //所有歌曲索引
			num:false,  //播放按钮状态
			length:0,  //歌曲长度
				
			updatetime:0 //歌曲时长更新
		}
			
	},
	created(){
		let self=this;
		bus.$on("userEvent3",function(msg){
			
			self.msgurl=msg;  //获取返回歌曲链接
			self.num=false;		
		});	
		bus.$on("userEvent4",function(msg){
			self.msgurls[self.msgurlsindex]=msg;
			self.msgurlsindex=self.msgurlsindex+1;
			//获取返回歌曲列表链接
		});	

	},
	computed:{
		musictime(){   	//歌曲总时间
			let a=0,b=0;
			if(this.length===0){
				return "00:00";
			}else {
				a = Math.floor(this.length/60);
				b = Math.floor((this.length/60-a)*60)
				if(a<10&&b>10){
					return "0"+a+":"+b;
				}else if (a<10&&b<10) {
					return "0"+a+":"+"0"+b;
				}else{
					return a+":"+b;
				}
			}
			
		},
		musicctime(){  //播放动态时间
			let a=0,b=0;
			if(this.updatetime===0){
				return "00:00";
			}else {
				a = Math.floor(this.updatetime/60);
				b = Math.floor((this.updatetime/60-a)*60)
				if(a<10&&b>=10){
					return "0"+a+":"+b;
				}else if (a<10&&b<10) {
					return "0"+a+":"+"0"+b;
				}else{
					return a+":"+b;
				}
			}
			
		},
		countlong(){  //进度条长度
			let total = 0;
			total = this.updatetime/this.length*438;
			if(total==438){
				return 0;
			}
			return total;
		}
	},
	watch:{
		updatetime:function(val){   //歌曲时间监听
			setTimeout(function(){	
				this.updatetime=val;
			},1000);
			if(this.$refs.audio.ended){
				this.num=false;
			}
		},
		length:function(val){
			if(val){
				this.length=val;
				
			}else{
				this.length=0;
			}
		}

	},
	methods:{
		play(){  //播放
			this.num=!this.num;
			let self = this;
			if(this.num){
				this.$refs.audio.preload=true;
				this.$refs.audio.play();
				this.$nextTick(()=>{
					this.length=this.$refs.audio.duration;
				});
				this.$refs.audio.volume=0.2;
				let audio = this.$refs.audio;
				audio.ontimeupdate=function(){
					self.updatetime=audio.currentTime;
				}
				console.log("play");
			}else {
				this.$refs.audio.pause();
				console.log("pause");
			}
		},
		down(){  //下一曲
			this.num=true;   //这里不知道怎么解决
			if(this.msgurlsindex>0&&this.msgurlsindex<=10){
				console.log(this.msgurlsindex);
				this.msgurlsindex=this.msgurlsindex-1;
			}else {
				this.msgurlsindex=0;
			}	
			this.msgurl=this.msgurls[this.msgurlsindex];
			console.log(this.msgurl);
			this.$nextTick(()=>{
				this.play();
			})
		},
		up(){  //上一曲
			this.num=true;   //这里不知道怎么解决
			if(this.msgurlsindex>=0&&this.msgurlsindex<9){
				console.log(this.msgurlsindex);
				this.msgurlsindex=this.msgurlsindex+1;
			}else {
				this.msgurlsindex=9;
			}	
			this.msgurl=this.msgurls[this.msgurlsindex];
			console.log(this.msgurl);
			this.$nextTick(()=>{
				this.play();
			})
		},
		loop(){		//循环
			this.$refs.audio.loop=true;
		}
	}
	
}
</script>

<style lang="scss" type="text/css" scoped>
	#player{
		position: absolute;
		display: flex;
		left: 0;
		bottom: 0;
		width: 1022px;
		height: 50px;
		background-color: rgb(252,252,252);
		border-top: 1px solid rgb(230,230,230);
		.left{
			width:201px;
			height: 50px;
			text-align: center;
			span{
				display: inline-block;
				vertical-align: top;
				img{
					width: 36px;
					height: 36px; 
					background-size: 36px;
					background-repeat: no-repeat;
				}
			}
			.play{
				width: 40px;
				height: 40px;
				margin: 5px 12px;
				.playicon{
					width: 40px;
					height: 40px;
				}
			}
			.up,.down{
				margin: 7px 0;
			}
		}	
		.middle{
			width: 676px;
			height: 50px;
			text-align: center;
			.starttime,.totaltime{
				display: inline-block;
				line-height: 50px;
				font-size: 12px;
			}
			span{
				display: inline-block;
				vertical-align: top;
			}
			.rangebg{
				position: relative;
				width: 438px;
				height: 4px;
				background-color: #BDBBBB;
				border-radius: 4px;
				margin: 23px 10px;
				overflow: hidden;
				.range{
					margin-left: -876px;
					width: 438px;
					height: 4px;
					border-radius: 4px;
					background-color: #56D486;
				}
			}
			.sound{
				display: inline-block;
				width: 16px;
				height: 16px;
				margin-top: 17px;
				margin-bottom: 17px;
				margin-left: 20px;
				margin-right: 3px;
			}
			.range2bg{
				display: inline-block;
				width: 100px;
				height: 4px;
				background-color: #E6E5E5;
				border-radius: 2px;
				margin:23px 2px;
				text-align: left;
				.range2{
					width: 20px;
					height: 4px;
					border-radius: 4px;
					background-color: #56D486;
				}
			}
		}	
		.right{
			width:145px;
			height: 50px;
			text-align: center;
			font-style: 0;
			span{
				display: inline-block;
				vertical-align: top;
				width: 16px;
				height: 16px;
				margin-top: 17px;
				margin-bottom: 17px;
				p{
					line-height: 16px;
					font-size: 12px;
					background: #707070;
					color: #fff;
				}
			}
			.lyic{
				margin-left: 20px;
				margin-right: 20px;
			}
		}
	}
</style>