import { defineConfig, CommonServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'

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

  let curEnv: string = mode.mode
  let server: CommonServerOptions = {}
  if (curEnv === 'development') {
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

  } else if (curEnv==="production"){
    console.log('我是生产环境')
  }

  return {
    plugins: [vue()],
    // server
  }
})
