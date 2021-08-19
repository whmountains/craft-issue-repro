import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import ViteRestart from "vite-plugin-restart";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import critical from "rollup-plugin-critical";
import path from "path";

// https://vitejs.dev/config/
export default ({ command }) => ({
  plugins: [
    nodeResolve({
      moduleDirectories: [path.resolve("./node_modules")],
    }),
  ],
});
