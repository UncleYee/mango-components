import React from 'react';

import MangoComponent from './components/common/Video';
import testData from './components/common/Video/testData.json';
import { defaultProps } from './components/common/Video/config.yaml';

interface Config {
  MangoComponent: React.ForwardRefExoticComponent<any>;
  testData: any;
  defaultProps?: any;
}

const config: Config = {
  MangoComponent,
  testData,
  defaultProps,
};

export default config;
