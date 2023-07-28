<template>
    <div >
      <el-carousel indicator-position="outside" height="380px">
        <el-carousel-item>
          <img src="../assets/img.png">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img.png">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img.png">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img.png">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row :gutter="10">
        <el-col :span="8" class="col-style"></el-col>
        <el-col :span="8" class="col-style"></el-col>
        <el-col :span="8" class="col-style"></el-col>
    </el-row>
</template>

<script>
export default {
  name: "HomeViewPage"
}
</script>

<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #ffffff;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
img{
  width: 100%;
  height: 100%;
}
.col-style{
  background-color: #FFFFFF;
  height: 300px;
}
</style>
