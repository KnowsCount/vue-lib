/*
 * @Date: 19/04/2021 20.31.32 +0800
 * @Author: KnowsCount
 * @LastEditTime: 20/04/2021 07.23.43 +0800
 * @FilePath: /vue-lib/dev/serve.js
 */
import Vue from 'vue'
import Dev from './serve.vue'
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import VueLib from '@/entry.esm'
Vue.use(VueLib)

Vue.config.productionTip = false

new Vue({
	render: (h) => h(Dev),
}).$mount('#app')
