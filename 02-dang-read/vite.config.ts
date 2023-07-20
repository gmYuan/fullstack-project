import { defineConfig, CommonServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果要支持node的类型提示，就需要安装 @types/node
import fs from 'fs'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
// export default defineConfig({
//   // base: '/dang',  // 开发或生产环境服务的公共基础路径
//   plugins: [vue()],
// })


/**
 * vite.config.ts 中的开发环境配置
 * 1. server: 访问koa路由: host: '192.168.2.6'
 * 2. server: Vite底层 CommonServerOptions的应用
 * 3. 理解跨域代理访问后端 proxy
 * 
 * 4.用 dotenv 加载环境文件的环境变量
 * 
 */

export default defineConfig((mode) => {
  // mode对象: 当前环填变量对象，包括mode和 command 两个属性
  // command属性: 值为build表示指当前是在打包编译阶段，值为serve还是在编码阶段
  // mode属性: 表示当前运行项目的环境, 值为 development/ production
  console.log('打包编译阶段还是编码阶段--', mode.command)
  console.log('当前运行环境--', mode.mode)

  // 拼接当前环境文件名
  const envFileName: string = '.env'
  const curEnvFileName  = `${envFileName}.${mode.mode}`
  console.log("curenvFileName-- ", curEnvFileName)

  // fs.readfilesync: 读取环境文件数据到 缓存对象
  // dotenv.parse: 读取缓存对象到 envConf对象中
  const envData = fs.readFileSync(curEnvFileName)
  const envMap = dotenv.parse(envData)
  console.log('envData--', envData)
  console.log('envMap--', envMap)

  
  // 开发环境配置
  let server: CommonServerOptions = {}
  if (mode.mode === 'development') {
    server = {
      host: '192.168.2.6',
      port: 5005,
      // http://192.168.2.6:5003/dang/ctgymodule/findFirstCtgys
      proxy: {
        '/dang' : {
          target: 'http://192.168.2.6:5003/'
        }
      }
    }

  } else if (mode.mode === "production"){
    console.log('我是生产环境')
  }

  return {
    plugins: [vue()],
    // server
  }
})
