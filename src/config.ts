// import React from 'react';
// import { MaskProps } from './components/base/wrapper';

import MangoComponent from './components/common/Video';
import testData from './components/common/Video/testData.json';
import { defaultProps } from './components/common/Video/config.yaml';

interface Config {
  MangoComponent: any; // React.ForwardRefRenderFunction<HTMLDivElement, MaskProps>;
  testData: any;
  defaultProps?: any;
}

const config: Config = {
  MangoComponent,
  testData,
  defaultProps,
};

export default config;
