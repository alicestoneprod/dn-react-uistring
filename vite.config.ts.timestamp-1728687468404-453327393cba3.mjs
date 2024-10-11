// vite.config.ts
import { defineConfig } from "file:///C:/Users/admin/Desktop/dn-react-uistring/node_modules/vite/dist/node/index.js";
import { extname, relative, resolve } from "path";
import dts from "file:///C:/Users/admin/Desktop/dn-react-uistring/node_modules/vite-plugin-dts/dist/index.mjs";
import react from "file:///C:/Users/admin/Desktop/dn-react-uistring/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { libInjectCss } from "file:///C:/Users/admin/Desktop/dn-react-uistring/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import { glob } from "file:///C:/Users/admin/Desktop/dn-react-uistring/node_modules/glob/dist/esm/index.js";
var __vite_injected_original_dirname = "C:\\Users\\admin\\Desktop\\dn-react-uistring";
var vite_config_default = defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["src/lib/types/**/*.ts"], entryRoot: "src/lib", rollupTypes: true })],
  build: {
    target: "es2021",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/lib/index.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("src/lib/**/*.{ts,tsx}", {
          ignore: ["src/lib/**/*.d.ts", "src/lib/**/*.test.ts", "src/lib/**/mock.ts", "src/lib/**/*.spec.ts"]
        }).map((file) => [relative("src/lib", file.slice(0, file.length - extname(file).length)), resolve(__vite_injected_original_dirname, file)])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    },
    outDir: "dist-lib",
    copyPublicDir: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFxEZXNrdG9wXFxcXGRuLXJlYWN0LXVpc3RyaW5nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFxEZXNrdG9wXFxcXGRuLXJlYWN0LXVpc3RyaW5nXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2RuLXJlYWN0LXVpc3RyaW5nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IHsgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIlxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tIFwidml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3NcIlxuaW1wb3J0IHsgZ2xvYiB9IGZyb20gXCJnbG9iXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBsaWJJbmplY3RDc3MoKSwgZHRzKHsgaW5jbHVkZTogW1wic3JjL2xpYi90eXBlcy8qKi8qLnRzXCJdLCBlbnRyeVJvb3Q6IFwic3JjL2xpYlwiLCByb2xsdXBUeXBlczogdHJ1ZSB9KV0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzMjAyMVwiLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9saWIvaW5kZXgudHNcIiksXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0L2pzeC1ydW50aW1lXCJdLFxuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgZ2xvYlxuICAgICAgICAgIC5zeW5jKFwic3JjL2xpYi8qKi8qLnt0cyx0c3h9XCIsIHtcbiAgICAgICAgICAgIGlnbm9yZTogW1wic3JjL2xpYi8qKi8qLmQudHNcIiwgXCJzcmMvbGliLyoqLyoudGVzdC50c1wiLCBcInNyYy9saWIvKiovbW9jay50c1wiLCBcInNyYy9saWIvKiovKi5zcGVjLnRzXCJdLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW3JlbGF0aXZlKFwic3JjL2xpYlwiLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gZXh0bmFtZShmaWxlKS5sZW5ndGgpKSwgcmVzb2x2ZShfX2Rpcm5hbWUsIGZpbGUpXSksXG4gICAgICApLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV1bZXh0bmFtZV1cIixcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiW25hbWVdLmpzXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3V0RGlyOiBcImRpc3QtbGliXCIsXG4gICAgY29weVB1YmxpY0RpcjogZmFsc2UsXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUNqVixTQUFTLFNBQVMsVUFBVSxlQUFlO0FBQzNDLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxZQUFZO0FBTHJCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLElBQUksRUFBRSxTQUFTLENBQUMsdUJBQXVCLEdBQUcsV0FBVyxXQUFXLGFBQWEsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUN2SCxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDNUMsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsbUJBQW1CO0FBQUEsTUFDdkMsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUsseUJBQXlCO0FBQUEsVUFDN0IsUUFBUSxDQUFDLHFCQUFxQix3QkFBd0Isc0JBQXNCLHNCQUFzQjtBQUFBLFFBQ3BHLENBQUMsRUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsV0FBVyxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxrQ0FBVyxJQUFJLENBQUMsQ0FBQztBQUFBLE1BQ3JIO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxFQUNqQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
