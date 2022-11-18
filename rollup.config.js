import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/shoelace-components.ts",
    output: [{ dir: "dist", format: "es" }],
    plugins: [
      typescript(),
      resolve(),
      // Copy Shoelace assets to dist/shoelace
      copy({
        targets: [
          {
            src: "./node_modules/@shoelace-style/shoelace/dist/assets",
            dest: "./dist/shoelace",
          },
        ],
      }),
    ],
  },
  {
    input: "src/my-icon.ts",
    external: ["./shoelace-components.js"],
    output: [{ dir: "dist", format: "es" }],
    plugins: [typescript(), resolve()],
  },
];
