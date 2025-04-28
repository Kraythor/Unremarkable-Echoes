// import adapter from '@sveltejs/adapter-auto';
// import { mdsvex } from 'mdsvex';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   extensions: ['.svelte', '.md', '.svx'],
//   kit: {
//     adapter: adapter(),
//   },
//   preprocess: [
//     mdsvex({
//       extensions: ['.md', '.svx'],
//     }),
//   ],
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter()
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/Unremarkable-Echoes' : '',
        }
    }
};

export default config;
