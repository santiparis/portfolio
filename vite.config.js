import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const port = process.env.PORT || 3001;
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
    base,
    plugins: [react()],
    server: {
        port: port,
        strictPort: true
    }
})
