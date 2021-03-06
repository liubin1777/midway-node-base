'use strict';

module.exports = (pandora) => {

  pandora

    // 定义一个进程，名字叫 processA
    .process('edu')
	
    // 如果 scale 大于 1 ，将使用 Node.js 的 Cluster 模块自动产生进程组
    // 默认值即是 1
    .scale(1)
	
    // 定义进程环境变量，创建出来的进程中可以通过 process.env 获得
    .env({
      NODE_ENV: 'production'
    })
	
	// 这个进程的入口文件地址
	.entry(require.resolve('midway/server'));


};
