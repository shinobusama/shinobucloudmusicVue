// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import findMusic from './components/findMusic/findMusic.vue'
import personal from './components/personal/personal.vue'
import musiclist from './components/musiclist/musiclist.vue'
import search from './components/search/search.vue'
import solosong from './components/search/solosong/solosong.vue'
Vue.use(VueRouter)

const routes = [
	{ 
		path: '/findMusic',
		component: findMusic,
		children:[
			{
				path:'/findMusic/personal',
				component:personal
				
			},
			{
				path:'/findMusic/musiclist',
				component:musiclist
			}
		]
	},
	{
		path: '/search',
		component: search,
		children:[
			{	
				path:'/search/solosong',
				component:solosong
			}
		]
	}

]

const router = new VueRouter({
	routes
})

router.push('/findMusic/personal');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
}).$mount('#app')
