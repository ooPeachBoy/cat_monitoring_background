<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script >
import {reactive, toRefs} from "vue"
import {useStore} from 'vuex'
export default{
  name: 'Home',
  props: {},
  emits: [],
  setup() {
    const store = useStore()
    const data = reactive({
    })
     console.log(store);
   const refData = toRefs(data)
    return {
      ...refData,
      store
    }
  }
}
</script>

<style lang="less" scoped>
.home{}
</style>
