/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  server: {
    port: 3000
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
      "@entities": path.resolve(__dirname, "src/entities")
    }
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-big-decimal"]
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});