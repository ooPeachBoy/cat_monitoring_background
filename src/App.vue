<template>
  
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
html, body {
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.router-view{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
}
</style>
