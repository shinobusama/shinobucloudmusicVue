<template>
	<div class="down_info">
		<img class="triangle" src="./三角形.png" height="32" width="32">
		<div class="head">
			<div class="head-top">
				<img class="avatar" src="./headphoto.jpg" width="40" height="40">
				<p>katousama</p>
				<span><img class="money" src="./金币.png" width="16" height="16"><a href="">签到</a></span>
			</div>
			<div class="head-bottom">
				<span class="message">0<p>动态</p></span>
				<span class="message message2">3<p>关注</p></span>
				<span class="message">6<p>粉丝</p></span>
			</div>
		</div>
		<div class="middle">
			<ul class="list">
				<li><a class="li_a1" href=""><img src="./会员.png" width="16" height="16">会员中心</a><a class="li_a2" href="">未订购<img src="./next.png" width="16" height="16"></a></li>
				<li><a class="li_a1" href=""><img src="./勋章.png" width="16" height="16">等级</a><a class="li_a2" href="">LV.5<img src="./next.png" width="16" height="16"></a></li>
				<li><a class="li_a1" href=""><img src="./购物车.png" width="16" height="16">积分商城</a><a class="li_a2" href="">21积分<img src="./next.png" width="16" height="16"></a></li>
			</ul>
		</div>
		<div class="middle">
			<ul class="list">
				<li><a class="li_a1" href=""><img src="./设置.png" width="16" height="16">个人信息设置</a><a class="li_a2" href=""><img src="./next.png" width="16" height="16"></a></li>
				<li><a class="li_a1" href=""><img src="./手机.png" width="16" height="16">绑定社交账号</a><a class="li_a2" href=""><img src="./next.png" width="16" height="16"></a></li>
				<li><a class="li_a1" href=""><img src="./导入.png" width="16" height="16">导入歌单</a><a class="li_a2" href=""><img src="./next.png" width="16" height="16"></a></li>
			</ul>
		</div>
		<div class="end">
			<ul class="list">
				<li><a class="li_a1" href=""><img src="./关机.png" width="16" height="16">退出登录</a><a class="li_a2" href=""><img src="./next.png" width="16" height="16"></a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style lang="scss" type="text/css" scoped="">
	
	.down_info{
		position: absolute;
		left: -50px;
		width: 275px;
		height: auto;
		background-color: #FFF;
		z-index: 50;
		box-shadow: 0px 2px 5px #9A9A9A;
		.triangle{
			position: absolute;
			display: inline-block;
			top: -22px;
			left: 125px;
			width: 22px;
			height: 22px;
		}
		.head{
			position: relative;
			width: 100%;
			height: 134px;
			border-bottom: 1px solid #EDEDED;
			.head-top{
				padding: 20px;
				.avatar{
					display: inline-block;
					vertical-align: top;
					border-radius: 50%;
				}
				p{
					display: inline-block;
					vertical-align: top;
					margin-left: 5px;
					font-size: 10px;
					line-height: 40px;
				}
				span{
					float: right;
					display: inline-block;
					margin: 7px 0;
					width: 60px;
					height: 26px;
					border:1px solid #EDEDED;
					border-radius: 5px;
					text-align: center;
					font-size: 12px;
					.money{
						display: inline-block;
						vertical-align: top;
						margin-top: 5px; 
						margin-right: 4px;
					
					}
					a{
						vertical-align: top;
						color: #000;
						line-height: 26px;
					}
				}
			}
			.head-bottom{
				display: flex;
				.message{
					flex:1;
					text-align: center;
					p{
						font-size: 12px;
						line-height: 16px;
					}
				}
				.message2{
					border-left: 1px solid #EDEDED;
					border-right: 1px solid #EDEDED;
				}
			}
		}
		.middle{
			position: relative;
			width: 100%;
			height: auto;
			border-bottom: 1px solid #EDEDED;
			.list{
				li{
					font-size: 12px;
					line-height: 35px; 
					.li_a1{
						padding-left: 20px;

						color: #000;
						img{
							display: inline-block;
							vertical-align: middle;
							margin-right: 4px;
							margin-bottom: 1px;
						}
					}
					.li_a2{
						float: right;
						color: #7B7979;
						padding-right: 10px;
						opacity: 0.4;
						img{
							display: inline-block;
							vertical-align: middle;
							margin-left: 4px;
							margin-bottom: 1px;

						}
					}
				}
				li:hover{
					background-color: #F4F4F4;
				}
			}
		}
		.end{
			position: relative;
			width: 100%;
			height: auto;
			.list{
				li{
					font-size: 12px;
					line-height: 50px; 
					.li_a1{
						padding-left: 20px;
						color: #000;
						img{
							display: inline-block;
							vertical-align: middle;
							margin-right: 4px;
							margin-bottom: 1px;
						}
					}
					.li_a2{
						float: right;
						color: #7B7979;
						padding-right: 10px;
						opacity: 0.4;
						img{
							display: inline-block;
							vertical-align: middle;
							margin-left: 4px;
							margin-bottom: 1px;

						}
					}
				}
				li:hover{
					background-color: #F4F4F4;
				}
			}
		}
	}
</style>