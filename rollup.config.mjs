import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const plugins = [
    resolve(),
    commonjs(),
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(terser());
}

export default {
    input: './client/src/index.ts',
    output: {
        file: './client/dist/bundle.js',
        format: 'iife',
        name: 'PhoneField',
        compact: true,
    },
    plugins,
};
