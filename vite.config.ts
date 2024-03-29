import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: "./",

    server: {
        port: 4000,
        open: true, //boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
        cors: true, // 为开发服务器配置 CORS，配置为允许跨域

        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000", // 后台服务地址
                changeOrigin: true, // 是否允许不同源
                secure: false, // 支持https
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },

    resolve: {
        alias: {
            "@": pathResolve("./src"), // 设置 `@` 指向 `src` 目录
            views: pathResolve("./src/views"), // 设置 `views` 指向 `./src/views` 目录，下同
            components: pathResolve("./src/components"),
            assets: pathResolve("./src/assets"),
        },
    },

    build: {
        outDir: "dist",
        terserOptions: {
            compress: {
                //对 js 进行一定的压缩
                keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
                drop_console: true, // 生产环境去除 console
                drop_debugger: true,
            },
        },
        chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    },
});
