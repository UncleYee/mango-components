import React from 'react'
import { MaskProps } from './components/base/wrapper'

import MangoComponent from './components/common/Video';
import testData from './components/common/Video/testData.json';
import { defaultProps } from './components/common/Video/config.yaml';

interface Config {
  CMSComponent: any; // React.ForwardRefRenderFunction<HTMLDivElement, MaskProps> //(props: MaskProps) => JSX.Element
  testData: any
  defaultProps?: any,
}

const config: Config = {
  CMSComponent: MangoComponent,
  testData,
  defaultProps,
}

export default config
