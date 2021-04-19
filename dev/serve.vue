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
