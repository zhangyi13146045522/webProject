<template>
  <div class="top-header">
   <div class="header-left">
     <div>
       <i></i>
       <span></span>
     </div>
   </div>
   <div class="header-middle">

   </div>
   <div class="header-right">

   </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  computed:{
    // position(){

    //     if ("geolocation" in navigator) {
    //       /* 地理位置服务可用 */
    //       const geo = navigator.geolocation;
    //       geo.getCurrentPosition(function(position){

    //       })
    //     } else {
    //       /* 地理位置服务不可用 */
    //     }

    //   return 
    // }
  },
  methods:{
    
  },
  created:function(){
      const url = 'http://api.map.baidu.com/location/ip ';//http协议
      console.log(this.$position);
      this.$position.get(url,{
          params:{
            ak:'yligew9cFCCAc6PdBGo8OfyQjYumNoUH',
          }
          })
          .then((data)=>{
            console.log(data)
          }
          )
  }
}
</script>

<style >

</style>