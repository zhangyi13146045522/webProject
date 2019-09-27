<template>
  <div class="top-nav-list">
    <ul class="nav-list">
      <li v-for="(item,index) in navList" :key="index" >
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navList:['服务','严选','案例','交易','百科']
    } 
  }  
}
</script>

<style lang="less" scoped>
@import url('~style/index.less');
  .top-nav-list{
    padding: 17px 15px;
    background-color: #fff;
    .nav-list{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      li{
        color: #333;
        font-size: 15px;
        line-height: 16px;
        font-weight: 700;
        position: relative;
        span{
          // color: #ff6900;
          font-size: 16px;
        }
      }
    }
  }
</style>