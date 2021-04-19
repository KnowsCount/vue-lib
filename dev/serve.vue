<!--
 * @Date: 19/04/2021 20.31.32 +0800
 * @Author: KnowsCount
 * @LastEditTime: 20/04/2021 07.22.44 +0800
 * @FilePath: /vue-lib/dev/serve.vue
-->
<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { inputBox } from '@/entry.esm';
import InputBox from '../src/lib-components/input-box.vue';

export default Vue.extend({
	name: 'ServeDev',
	components: {
		InputBox
	}
});
</script>

<template>
	<div id="app">
		<input-box />
	</div>
</template>
