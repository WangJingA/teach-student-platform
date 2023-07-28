<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header student-header">
        <div class="user-head">
          <el-tooltip
              class="box-item"
              effect="light"
              placement="bottom"
              show-arrow=true
          >
            <template v-slot:content>
              <a href="#/StudentPersonalCenter"><div class="link">个人中心</div></a>
              <a href="#/StudentMessageCenter"><div class="link">消息中心</div></a>
              <hr/>
              <a href=""><div class="link">退出</div></a>
              <hr/>
            </template>
            <div class="el-dropdown">
                <span class="el-avatar el-avatar--circle el-dropdown-avatar">
                  <img src="https://www.mindskip.net:7000/resource/image/da725824-d733-4c51-b8f9-37a68babfdbf/头像.jpg"
                       style="object-fit: cover;">
                </span>
            </div>
          </el-tooltip>
        </div>
        <!--菜单-->
        <el-menu
            :default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
        >
          <el-menu-item index="0">LOGO</el-menu-item>
          <div class="flex-grow" />
          <router-link to="HomeViewPage">
            <el-menu-item index="1">首页</el-menu-item>
          </router-link>
          <router-link to="StudentStudyCenter">
            <el-menu-item index="2">学习中心</el-menu-item>
          </router-link>
          <router-link to="StudentCourse">
            <el-menu-item index="3">我的课程</el-menu-item>
          </router-link>
          <router-link to="StudentExamRecord">
            <el-menu-item index="4">考试记录</el-menu-item>
          </router-link>
          <router-link to="StudentVedioCenter">
            <el-menu-item index="5">视频中心</el-menu-item>
          </router-link>
        </el-menu>
      </el-header>
      <el-main class="main">
          <div >
            <router-view/>
          </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{

  },
}
</script>
<style scoped>
.el-header {
  --el-header-padding: 0 20px;
  --el-header-height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 61px;
}
.user-head{
  color: #909399;
  float: right;
  margin: 0 0 0 10px;
  width: 60px;
  height: 54px;
}
.student-header {
  padding: 0!important;
}
.el-dropdown {
  --el-dropdown-menu-box-shadow: 0 0 0 12px rgba(0,0,0,.12);
  --el-dropdown-menuItem-hover-fill: #ecf5ff;
  --el-dropdown-menuItem-hover-color: #409eff;
  --el-dropdown-menu-index: 10;
  display: inline-flex;
  position: relative;
  color: #606266;
  font-size: 14px;
  line-height: 1;
  vertical-align: top;
}
a{
  text-decoration: none;
  display: block;
}

div{
  display: block;
}
.link{
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
}
.flex-grow {
  flex-grow: 1;
}
.main{
  width: 100%;
  height: 980px;
  background-color: #f3f5f5;
  border: 1px solid red;
}

</style>
