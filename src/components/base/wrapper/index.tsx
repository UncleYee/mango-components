import React, { forwardRef } from 'react' // useRef

import styles from './index.module.scss'

export interface MaskProps {
  defaultProps: any,
  data: any,
  ref: React.RefObject<HTMLDivElement>
}

/**
 * @param WrappedComponent 需要被包的组件（函数式组件）
 * @param checkData 校验组件生效所必须的 props 是否有实际值
 * @returns 组件
 */
export function wrapper(WrappedComponent: (props: any) => JSX.Element, shouldUseData: (data: any) => boolean) {
  return forwardRef<HTMLDivElement, MaskProps>((props, ref) => {
    const {
      defaultProps, // default props
      data, // 实际数据
    } = props
    // 是否有真实数据
    const useData = shouldUseData(data)
    // 实际 props 
    const actualProps = useData ? data : defaultProps

    // console.log(__EDIT__, hasData, defaultProps, data)
    // 生产环境
    if (!__EDIT__) {
      // 没有数据，则不渲染
      return ( useData ? <WrappedComponent {...actualProps} /> : null)
    }

    return (
      <div className={styles.wrapper} ref={ref} >
        <WrappedComponent {...actualProps} />
      </div>
    )
  })
}