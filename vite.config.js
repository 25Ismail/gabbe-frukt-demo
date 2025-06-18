import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/gabbe-frukt-demo/", // 👈 detta löser vita sidan
  plugins: [react()],
});
