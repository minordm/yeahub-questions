import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname, "src"),
      // @app - корневая папка src
      "@app": path.resolve(__dirname, "src/app"),
      // @features - функциональные модули
      "@features": path.resolve(__dirname, "src/features"),
      // @shared - общие компоненты
      "@shared": path.resolve(__dirname, "src/shared"),
      // @pages - страницы
      "@pages": path.resolve(__dirname, "src/pages"),
      // @widgets - виджеты
      "@widgets": path.resolve(__dirname, "src/widgets"),
      // @entities - сущности
      "@entities": path.resolve(__dirname, "src/entities"),
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
