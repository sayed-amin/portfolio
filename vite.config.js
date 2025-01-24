import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
        base: './', // Ensures correct asset loading for Vercel & GitHub Pages
        build: {
            outDir: 'dist', // Output directory for Vercel
            chunkSizeWarningLimit: 1500, // Increase warning limit for large Three.js bundles
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            if (id.includes('react')) return 'react-vendor';
                            if (id.includes('three')) return 'three-vendor';
                            return 'vendor'; // General vendor chunk
                        }
                    },
                },
            },
        },
        optimizeDeps: {
            exclude: ['three'], // Exclude heavy dependencies from pre-bundling
        },
        server: {
            open: true, // Opens browser on start (optional)
            port: 5173, // Custom port (default is 5173)
        },
        plugins: [react()],
    };
});
