<template>
  <div class="login">
    <div class="content">
      <el-button>Default</el-button><el-button type="warning">Warning</el-button>
    </div>
  </div>
</template>

<script >
import {reactive, toRefs} from "vue"
import { ElButton } from 'element-plus';
export default{
  name: 'Login',
  components: { ElButton },
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
.login{
  background: #3a6ff1;
  width: 100%;
  height: 100%;
}
</style>
