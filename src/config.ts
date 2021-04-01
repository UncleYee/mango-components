import React from 'react'
import { MaskProps } from './components/base/wrapper'

interface Config {
  CMSComponent: React.ForwardRefRenderFunction<HTMLDivElement, MaskProps> //(props: MaskProps) => JSX.Element
  testData: any
  defaultProps?: any,
}

const config: Config = {
  CMSComponent: require('./components/common/Video').default,
  testData: require('./components/common/Video/testData'),
  defaultProps: require('./components/common/Video/config.yaml').defaultProps,
}

export default config
