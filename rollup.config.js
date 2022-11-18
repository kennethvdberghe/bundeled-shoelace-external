import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/my-icon.ts",
    external: ["./shoelace-components.js"],
    output: [{ dir: "dist", format: "es" }],
    plugins: [typescript(), resolve()],
  },
  {
    input: "src/shoelace-components.ts",
    output: [{ dir: "dist", format: "es" }],
    plugins: [typescript(), resolve()],
  },
];
