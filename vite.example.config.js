import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    root: 'example', // Set the root to the example directory
    build: {
        outDir: '../example-dist', // Output the built files here
        emptyOutDir: true
    }
});
