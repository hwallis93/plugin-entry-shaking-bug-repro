import EntryShakingPlugin from "vite-plugin-entry-shaking";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    EntryShakingPlugin({
      targets: ["src/lib/index.ts", "src/lib/hello/index.ts"],
    }),
  ],
};
