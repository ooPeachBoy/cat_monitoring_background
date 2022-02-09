<template>
  <div id="nav">
    <SvgIcon name="cat"/>
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
// import SvgIcon from '@/components/SvgIcon.vue';

export default defineComponent({
  components: {
    // SvgIcon
  },
  setup() {
    
  },
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
