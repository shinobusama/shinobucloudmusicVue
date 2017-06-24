<template>
	<div class="swiper-container" :class="swipeid">
    	<div class="swiper-wrapper">
      		<slot name="swiper-con"></slot>
    	</div>
    	<!-- 分页器 -->
    	<div :class="{'swiper-pagination':pagination}">
    	</div>
  	</div>
</template>

<script>
import '../../assets/swiper/js/swiper.js'
export default{
	    props: {
		    swipeid: {
		       	type: String,
		        default: ''
		    },
		    effect: {
		        type: String,
		        default: 'coverflow'
		     },
		    slidesPerView:{
		    	type: Number,
		        default: 3,
		    },
		    centeredSlides:{
		    	type: Boolean,
		        default: true
		    },
		    coverflow: {
	            type:Object
        	},
		    loop: {
		        type: Boolean,
		        default: true
	        },
	        direction: {
		        type: String,
		        default: 'horizontal'
	        },
	        // lazyLoading:{
	        // 	type: Boolean,
		       //  default: true
	        // },
		    pagination: {
		        type: Boolean,
		        default: true
	        },
	        paginationClickable:{
	        	type: Boolean,
		        default: true
	        },
	        autoplay: {
		        type: Number,
		        default: 5000,
	        },
     	    paginationType: {
		        type: String,
		        default: 'bullets'
      		},
      		prevButton:{
      			type: String,
      			default:'swiper-button-prev'
      		},
      		nextButton:{
      			type: String,
      			default:'swiper-button-next'
      		}
    	},
	    mounted() {
	      new Swiper('.'+this.swipeid, {
	        //循环
	        // preloadImages:true,
	        // updateOnImagesReady : true,
	        loop: this.loop,
	        //分页器
	        pagination:'.swiper-pagination',
	        //分页类型
	        paginationType: this.paginationType,
	        //自动播放
	        paginationClickable: this.paginationClickable,
	        autoplay: this.autoplay,
	        //方向
	        direction: this.direction,
	        prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
	        //特效
	        effect: this.effect ,
	        slidesPerView: 1.3,
			centeredSlides: true,
			coverflow: {
	            rotate: 8,
	            stretch: 30,
	            depth: 60,
	            modifier: 2,
	            slideShadows : true
	        }
	      })
	    }
}
</script>

<style lang="scss" type="text/css" scoped>
@import "../../assets/swiper/css/swiper.css";

	.swiper-pagination{
		position: relative;
		bottom: 0px;
	}
	
</style>
