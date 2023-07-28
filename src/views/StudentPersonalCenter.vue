<template>
    <div class="student-center">
      <!--学生信息-->
       <div class="student-info">
              <el-card class="info-box-card">
                <template #header>
                  <div class="card-header">
                    <span>个人信息</span>
                  </div>
                </template>
                <div class="info">
                  <div class="info-image" @click="showDialog">
                    <el-avatar :size="100" :src="imgSrc" />
                    <span class="info-edit">
                      <i class="el-icon-lx-camerafill"></i>
                    </span>
                  </div>
                  <div class="info-name">{{ name }}</div>
                  <el-tag class="ml-2" type="success">学生</el-tag>
                  <div class="info-desc">不可能！我的代码怎么可能会有bug！</div>
                  <hr/>
                  <div class="stu-detail">
                    <span>姓名：</span>
                    <span>学校：</span>
                    <span>学院：</span>
                    <span>专业：</span>
                    <span>班级：</span>
                    <span>邮箱：</span>
                    <span>注册时间：</span>
                  </div>
                </div>
              </el-card>
       </div>
      <!--学生操作-->
        <div class="student-operation">
              <el-card class="operation-box-card">
                <template #header>
                  <div class="card-header">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="用户动态" name="first">

                      </el-tab-pane>
                      <el-tab-pane label="资料修改" name="second">

                      </el-tab-pane>
                      <el-tab-pane label="密码修改" name="third">

                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </template>
              </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import  { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
// export default {
//   name: "StudentPersonalCenter",
//   data(){
//     return{
//       imgSrc:"https://www.mindskip.net:7000/resource/image/da725824-d733-4c51-b8f9-37a68babfdbf/头像.jpg",
//       dialogVisible:false,
//       activeName: 'second'
//     }
//   },
//   methods:{
//     showDialog(){
//
//     },
//     handleClick(tab, event) {
//       console.log(tab, event);
//     }
//   }
// }
</script>

<style scoped>
  .student-center{
    margin: 20px 10% 20px 10%;
    height: 500px;
    border: 1px solid red;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .info-box-card {
    width: 500px;
    margin-right: 30px;
  }
  .operation-box-card {
    width: 900px;
  }
  .student-info{
    float: left;
  }
  .info {
    text-align: center;
    padding: 35px 0;
  }
  .stu-detail span{
    display: block;
  }
  .stu-detail{
    text-align: left;
    margin-left: 20px;
  }
</style>
