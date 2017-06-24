<template>
	<div class="down_table">
		<img src="./三角形.png" height="32" width="32">
		<p class="search">热门搜索</p>
		<ul class="list">
			<li><a href="">我想和你唱</a></li>
			<li><a href="">夏至未至</a></li>
			<li><a href="">安和桥</a></li>
			<li><a href="">追光者</a></li>
			<li><a href="">闪光的回忆</a></li>
			<li><a href="">异形</a></li>
			<li><a href="">2U</a></li>
			<li><a href="">There For You</a></li>
			<li><a href="">嘿嘿嘿</a></li>
		</ul>	
	</div>
</template>

<script>
export default{
	
}
</script>

<style lang="scss" type="text/css" scoped="">
	
	.down_table{
		position: absolute;
		left: 252px;
		width: 220px;
		height: 360px;
		background-color: #FFF;
		z-index: 50;
		box-shadow: 0px 2px 5px #9A9A9A;
		img{
			position: absolute;
			display: inline-block;
			top: -22px;
			left: 100px;
			width: 22px;
			height: 22px;
		}
		.search{
			width: 216px;
			height: 34px;
			padding-left: 5px;
			border-bottom: 1px solid #EDEDED;
			line-height: 35px;
			font-size: 14px;
			color: #7D7D7D;
		}
		.list{
			width: 100%;
			position: relative;
			li{
				height: 35px;
				font-size: 14px;
				line-height: 35px;
				padding-left: 5px;
				a{
					color: #7D7D7D;
				}
			}
			li:hover{
				background-color: #F4F4F4;
			}
		}
	}
</style>