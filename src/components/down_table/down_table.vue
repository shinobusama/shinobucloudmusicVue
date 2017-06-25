<template>
	<div class="down_table" v-show="downShow">
		<img src="./三角形.png" height="32" width="32">
		<p class="search">相关搜索</p>
		<ul class="list" v-for="(item,index) in (sugmusic.result)">
			<p class="title">{{index}}</p>
			<li v-for="items in sugmusic.result[index]" @click="showdetail">{{items.name}}</li>
		</ul>	
	</div>
</template>

<script>
export default{
	props:{
		sugmusic:{
			type:Object
		},
		downShow:{
			type:Boolean
		}
	},
	data(){
		return{
		}
	},
	methods:{
		showdetail(){
			this.downShow=false;
		}
	}
}
</script>

<style lang="scss" type="text/css" scoped="">
	
	.down_table{
		position: absolute;
		left: 252px;
		width: 220px;
		height: auto;
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
			text-indent: 5px;
			border-bottom: 1px solid #EDEDED;
			line-height: 35px;
			font-size: 12px;
			color: #7D7D7D;
		}
		.list{
			position: relative;
			width: 220px;
			max-height: 540px;
			overflow: hidden;
			li{
				height: 28px;
				font-size: 12px;
				line-height: 28px;
				text-indent: 20px;
				color: #4777F0;
				white-space:nowrap;
				text-overflow: ellipsis;
			}
			li:hover{
				background-color: #F4F4F4;
			}
			&:last-child{
				display: none;
			}
			.title{
				height: 28px;
				font-size: 12px;
				line-height: 28px;
				padding-left: 10px;
				background: rgba(240,240,240,0.2);
			}
		}
	}
</style>