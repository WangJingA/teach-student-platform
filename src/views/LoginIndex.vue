<template>
  <div class="lowin lowin-blue">
    <div class="lowin-brand">
      <img src="../assets/logo.png" alt="logo"/>
    </div>
    <img src="../assets/back.png" class="background-class"/>
    <div class="lowin-wrapper">
        <div class="lowin-box lowin-login">
          <div class="lowin-box-inner">
              <el-form class="el-form">
                <p>教学系统学生端</p>
                <div class="lowin-group">
                  <label>账号</label>
                 <div class="input-box">
                   <div class="el-input__wrapper">
                     <input class="el-input__inner" placeholder="请输入账号"/>
                   </div>
                 </div>
                </div>
                <div class="lowin-group">
                  <label>密码</label>
                  <div class="input-box">
                    <div class="el-input__wrapper">
                      <input class="el-input__inner" placeholder="请输入密码"/>
                    </div>
                  </div>
                </div>
                <el-button type="primary" class="login-button" @click="login">登录</el-button>
                <div class="text-foot">
                  还没有账号？<a href="">注册</a>
                </div>
              </el-form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>


import router from "@/router";

export default {
  name: 'HomeView',
  data(){
    return{

    }
  },
  methods:{
    login(){
      router.push("/homePage")
    }
  },
  components: {

  }
}
</script>
<style scoped>
  .background-class{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  a{
    text-decoration: none;
  }
  .text-foot{
    text-align: center;
    padding: 10px;
    font-weight: 700;
    margin-top: 20px;
    color: rgba(0, 129, 198, .45);
  }
  .login-button{
    width: 300px;
    height: 42px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .el-input__wrapper {
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 1px 11px;
    background-color: var(--el-input-bg-color,var(--el-fill-color-blank));
    background-image: none;
    border-radius: 5px;
    transition: var(--el-transition-box-shadow);
    box-shadow: 0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;
  }
  .el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
    width: 100%;
    flex-grow: 1;
    -webkit-appearance: none;
    color: var(--el-input-text-color,var(--el-text-color-regular));
    font-size: inherit;
    height: 40px;
    line-height: 30px;
    padding: 0;
    outline: 0;
    border: none;
    background: 0 0;
    box-sizing: border-box;
    width: 280px;
  }
  .input-box{
    width: 310px;
    height: 42px;
    //background: rgba(180, 223, 247, 0.46);
    margin-bottom: 30px;
  }
  .lowin{
    font-size: 14px;
    font-family: "Segoe UI";
    text-align: center;
    padding-top: 8%;
  }
  .lowin-group .el-input .el-input__wrapper {
    --el-select-input-focus-border-color: transparent;
    box-shadow: none!important;
    background-color: transparent;
  }
  .lowin-wrapper{
    width: 360px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    perspective: 1000px;
    transition: all 1s;
  }
  .lowin * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .lowin-box{
    width: 100%;
    position: absolute;
    left: 0;
  }
  .lowin-login{
    box-sizing: border-box;
  }
  div{
    display: block;
  }
  .lowin-box-inner{
    background:#FFF;
    box-shadow: 0px 7px 25px #00000014;
    padding: 60px 25px 25px;
    text-align: left;
    border-radius: 3px;
  }
  .lowin-brand{
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: 0 auto -50px;
    border-radius: 50%;
    -webkit-box-shadow: 0 4px 40px rgba(0,0,0,.07);
    box-shadow: 0 4px 40px #00000012;
    padding: 15px;
    background-color: #fff;
    z-index: 1;
    position: relative;
  }
  .el-form {
    --el-form-label-font-size: var(--el-font-size-base);
  }
  .lowin-box p{
    color: rgba(0, 129, 198, .45);
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }
  .input {
    --el-input-height: 42px;
    position: relative;
    font-size: 18px;
    display: inline-flex;
    width: 100%;
    line-height: 30px;
    box-sizing: border-box;
    vertical-align: middle;
  }
  label{
    cursor: default;
    color: rgba(0, 129, 198, .45);
    font-weight: 700;
  }
</style>
