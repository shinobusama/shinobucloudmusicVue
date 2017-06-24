<template>
	<div id="menu">
		<span class="title">推荐</span>
		<ul class="list">
			<router-link to="/findMusic/personal" tag="li"><img src="./音乐.png" width="16" height="16"><a>发现音乐</a></router-link>
			<li><img src="./广播.png" width="16" height="16">私人FM</li>
			<li><img src="./播放.png" width="16" height="16">MV</li>
			<li><img src="./朋友.png" width="16" height="16">朋友</li>
		</ul>
		<span class="title">我的音乐</span>
		<ul class="list">
			<li><img src="./本地音乐.png" width="16" height="16">本地音乐</li>
			<li><img src="./下载管理.png" width="16" height="16">下载管理</li>
			<li><img src="./云盘.png" width="16" height="16">我的音乐云盘</li>
			<li><img src="./歌手.png" width="16" height="16">我的歌手</li>
		</ul>
		<span class="title">创建的歌单<img class="add" src="./加.png" height="16" width="16" alt=""><img src="./下拉.png" alt=""></span>
		<ul class="list">
			<li><img src="./喜欢.png" width="16" height="16">我喜欢的音乐</li>
		</ul>
		<span class="title">收藏的歌单<img class="add2" src="./下拉.png" alt=""></span>
		<ul class="list">
			<li><img src="./娱乐_音乐收藏.png" width="16" height="16">日语教学</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'menu',
	data(){
		return{

		}
	}
}
</script>

<style lang="scss" type="text/css" scoped>

	#menu{
		flex:0 0 200px;      
        height: 100%;
		position: relative;
		border-right: 1px solid #EDEDED;
		background-color: rgba(245,245,245,0.2);
		.title{
		width: 100%;
		height: 35px;
		padding-left: 10px;
		line-height: 35px;
		font-size: 12px;
		color: #7D7D7D;
			.add{
				margin-left: 80px;
			}
			.add2{
				margin-left: 100px
			}
			img{
				margin-right: 5px;
				vertical-align: middle;
			}
		}
		.list{
			width: 100%;
			position: relative;
			padding-bottom: 20px;
			li{
				width: 197px;
				height: 35px;
				border-left: 3px solid #FFF;
				line-height: 35px;
				font-size: 12px;
				text-indent: 16px;
				color: #464444;
				img{
					vertical-align: middle;
					margin-bottom: 4px;
					margin-right: 8px; 
				}
				a{
					color: #000;
				}
			}
			.router-link-active{
				border-left: 3px solid #56D486;
				background-color: #F4F4F4;
			}
		}
	}
	
</style>