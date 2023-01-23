import { terser } from 'rollup-plugin-terser';

import pkg from '../../package.json';

import generateCommon from './common';

const common = generateCommon('dist');
common.output.file = `dist/analytics-${pkg.version}.js`;
common.plugins.push(terser());

export default common;
