<template>
  <div class="NotFound">
    <h1>404, not,found!</h1>
  </div>
</template>

<script >
import {reactive, toRefs} from "vue"
export default{
  name: 'NotFound',
  props: {},
  emits: [],
  setup() {
   const data = reactive({

   })
   const refData = toRefs(data)
    return {
      ...refData
    }
  }
}
</script>

<style lang="less" scoped>
.NotFound{}
</style>
