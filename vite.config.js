import { defineConfig } from "vite";

import { VitePWA as pwa } from "vite-plugin-pwa";
import manifest from "./manifest.json";

import leaflet from "@ec-nordbund/rollup-plugin-leaflet";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pwa({
      strategies: "injectManifest",
      srcDir: "",
      filename: "service-worker.js",
      manifest,
    }),
    leaflet(),
  ],
});
