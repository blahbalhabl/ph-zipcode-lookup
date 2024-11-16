import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: [
    "src/index.ts",
    "!src/**/__tests__/**",
    "!src/**/*.test.*",
    "!src/zipcodes.json",
  ],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  external: ["src/zipcodes.json"],
});
