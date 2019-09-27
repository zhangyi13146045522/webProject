<template>
  <div id="app">
   <Header></Header>
   <Navigation></Navigation>
   <keep-alive>
   <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
import Header from 'components/header';
import Navigation from 'components/navigation';


export default {
  components:{Header,Navigation}
}
</script>

<style lang="less" scoped>

</style>
