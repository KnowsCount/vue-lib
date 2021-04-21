/*
 * @Date: 19/04/2021 20.31.32 +0800
 * @Author: KnowsCount
 * @LastEditTime: 21/04/2021 10.13.28 +0800
 * @FilePath: /vue-lib/src/entry.esm.js
 */

// Import vue components
// import * as components from '@/lib-components/index'
import * as components from './lib-components/index'

// install function executed by Vue.use()
const install = function installVueLib(Vue) {
	Object.entries(components).forEach(([componentName, component]) => {
		Vue.component(componentName, component)
	})
}

// Create module definition for Vue.use()
export default install

// To allow individual component use, export components
// each can be registered via Vue.component()
// export * from '@/lib-components/index'
export * from './lib-components/index'
