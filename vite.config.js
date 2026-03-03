import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'NotificationBadge',
            formats: ['es', 'cjs'],
            fileName: (format) => `notification-badge.${format === 'es' ? 'es.js' : 'cjs'}`
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'prop-types'],
            output: {
                exports: 'named',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'prop-types': 'PropTypes'
                }
            }
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        css: true,
        setupFiles: []
    }
});
