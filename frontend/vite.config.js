import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-pro-sidebar/dist/styles.css":
        "node_modules/react-pro-sidebar/dist/styles.css",
      "@mui/material/styles": "node_modules/@mui/material/styles", // Add this line
    },
  },
  build: {
    rollupOptions: {
      external: ["@mui/material/styles"], // Externalize this module
    },
  },
});
