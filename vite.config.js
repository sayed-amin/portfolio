import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
             base: './', 
            outDir: 'dist',
            chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit (default is 500kB)
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
            exclude: ['three'], // Exclude heavy dependencies from optimization if needed
        },
        plugins: [react()],
    };
});
