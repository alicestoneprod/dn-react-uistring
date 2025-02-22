import { defineConfig } from "vite"
import { extname, relative, resolve } from "path"
import dts from "vite-plugin-dts"
import react from "@vitejs/plugin-react"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import { glob } from "glob"
import copy from "rollup-plugin-copy"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"] }),
    copy({
      targets: [
        { src: "package.json", dest: "dist-lib" },
        { src: "README.md", dest: "dist-lib" },
      ],
      hook: "writeBundle",
    }),
  ],
  build: {
    target: "es2021",
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("src/lib/**/*.{ts,tsx}", {
            ignore: ["src/lib/**/*.d.ts", "src/lib/**/*.test.ts", "src/lib/**/mock.ts", "src/lib/**/*.spec.ts"],
          })
          .map((file) => [relative("src/lib", file.slice(0, file.length - extname(file).length)), resolve(__dirname, file)]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist-lib/dist",
    copyPublicDir: false,
  },
})
