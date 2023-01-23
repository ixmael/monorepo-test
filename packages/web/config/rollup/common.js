import { eslint } from 'rollup-plugin-eslint';
import dotenv from 'rollup-plugin-dotenv';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const generateCommon = (path) => {
  return {
    input: 'src/index.ts',
    output: [
      {
        file: `${path}/analytics.js`,
        format: 'iife',
        sourcemap: false,
        name: 'bayonet',
      },
      {
        file: `${path}/analytics.ems.js`,
        format: 'es',
        sourcemap: false,
        name: 'bayonet',
        extend: true,
      },
    ],
    plugins: [
      eslint(),
      dotenv(),
      replace({
        preventAssignment: true,
        'process.env.AUGUR_JS_KEY': process.env.AUGUR_JS_KEY,
        'process.env.AUGUR_URL': process.env.AUGUR_URL,
        'process.env.AUGUR_CALLBACK': process.env.AUGUR_CALLBACK,
        'process.env.ANALYTICS_BACKEND_URL': process.env.ANALYTICS_BACKEND_URL,
        'process.env.FINGERPRINTJS_KEY': process.env.FINGERPRINTJS_KEY,
        'process.env.FINGERPRINTJS_DOMAIN': process.env.FINGERPRINTJS_DOMAIN,
      }),
      nodeResolve(),
      typescript(),
    ],
  };
};

export default generateCommon;
