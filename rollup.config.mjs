// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import image from '@rollup/plugin-image';
// import css from 'rollup-plugin-css-only';
// import postcss from 'rollup-plugin-postcss';
// import packageJson from './package.json' assert { type: 'json' };
// export default [
//     {
//         input: 'src/index.ts',
//         output: [
//             {
//                 file: packageJson.main,
//                 format: 'cjs',
//                 sourcemap: true,
//             },
//             {
//                 file: packageJson.module,
//                 format: 'esm',
//                 sourcemap: true,
//             },
//         ],
//         plugins: [
//             resolve(),
//             commonjs(),
//             typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
//             image(),
//             css({ output: 'dist/index.css' }),
//             postcss({ extensions: ['.css'], inject: true, extract: false }),
//         ],
//         external: ['react-icons', 'react-hook-form', 'yup'],
//     },
//     {
//         input: 'dist/esm/types/index.d.ts',
//         output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//         plugins: [dts()],
//         external: [/\.css$/],
//     },
// ];

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert { type: 'json' };

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
            image(),
            css({ output: 'index.css' }), // Specify the output file for CSS
            postcss({ extensions: ['.css'], inject: true, extract: false }),
        ],
        external: ['react-icons', 'react-hook-form', 'yup'],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
