import serve from 'rollup-plugin-serve';

import generateCommon from './common';

const common = generateCommon('public/js');

common.plugins.push(
  serve({
    contentBase: "public",

    // Options used in setting up server
    host: "localhost",
    port: 3100,
  })
);

export default common;
