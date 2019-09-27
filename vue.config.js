const path = require('path');

function resove(src){
  return path.join(__dirname,src);
}

module.exports = {
  // devServer: {
  //   proxy: {
    
  //   }
  // },
  chainWebpack:(config)=>{  //alias 起别名
    config.resolve.alias
    .set('components',resove('./src/components'))
    .set('pages',resove('./src/pages'))
    .set('style',resove('./src/style'))
    .set('iconfont',resove('./src/iconfont'))
    .set('base',resove('./src/base'))
  }
}