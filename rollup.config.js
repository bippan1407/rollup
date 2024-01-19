import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
export default defineConfig({
  input: "./src/index.js",
  output: [
    {
      dir: "dist/cjs",
      format: "cjs",
    },
    {
      dir: "dist/es",
      format: "es",
    },
    // {
    //   file: "./build.iife.js",
    //   format: "iife",
    //   // plugins: [terser()]
    // },
    // { file: "./build.umd.js", format: "umd" },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel(),
    json(),
    terser({
      // compress: {
      //   defaults: false,
      // },
      format: {
        beautify: true,
      },
    }),
  ],
  external: ["lodash"],
});
