<template>
  <div class="login">
    <div class="content">
      <h3>登录</h3>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
      <el-form-item label="用户名" prop="userName" >
          <el-input
            v-model="ruleForm.userName"
            type="password"
            class="form-item-login"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" >
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
            class="form-item-login"
          ></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm"
            >提交</el-button
          >
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
      
    </div>
  </div>
</template>

<script >
import { reactive, toRefs, ref } from "vue";
import { ElButton, ElForm, ElInput, ElFormItem  } from "element-plus";
import { useRouter } from 'vue-router';
export default {
  name: "Login",
  components: { ElButton, ElForm, ElInput, ElFormItem },
  props: {},
  emits: [],
  setup() {
    const ruleFormRef = ref(null)
    const router = useRouter()
    const state = reactive({});
    const ruleForm = reactive({
      pass: '',
      userName: '',
      age: '',
    })
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空！'))
      } else {
        if (ruleForm.userName !== '') {
          if (!ruleFormRef.value) return
          ruleFormRef.value.validateField('userName', () => null)
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空！'))
      } else {
        callback()
      }
    }
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: 'blur' }],
      userName: [{ validator: validatePass2, trigger: 'blur' }],
    })
    const submitForm = () => {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validate((valid) => {
        if (valid) {
          router.push('/home')
          console.log('submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

    const resetForm = () => {
      if (!ruleFormRef.value) return
      ruleFormRef.value.resetFields()
    }
    return {
      ...toRefs(state),
      ruleForm,
      rules,
      submitForm,
      resetForm,
      ruleFormRef,
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  background: #3a6ff1;
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%;
    margin: -15% 0 0 -25%;
    .demo-ruleForm {
      width: 350px;
      display: inline-block;
    }
    .form-item-login {
      // margin-bottom: 20px;
    }
  }
}
</style>
