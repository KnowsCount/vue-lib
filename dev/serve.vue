<!--
 * @Date: 19/04/2021 20.31.32 +0800
 * @Author: KnowsCount
 * @LastEditTime: 23/04/2021 18.47.26 +0800
 * @FilePath: /vue-lib/dev/serve.vue
-->
<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { inputBox } from '@/entry.esm';
import InputBox from '../src/lib-components/input-box.vue';
import SmashToSubmit from '../src/lib-components/smash-to-submit.vue';

export default Vue.extend({
	name: 'ServeDev',
	components: {
		InputBox,
		SmashToSubmit
	}
});
</script>

<template>
	<div id="app">
		<input-box />
		<smash-to-submit />
	</div>
</template>
