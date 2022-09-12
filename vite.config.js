import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 解析出 path 中的 resolve 参数
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // 将 @ 指向 src 目录
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    // 本地开发服务器的端口
    host: '0.0.0.0'
  }
})
