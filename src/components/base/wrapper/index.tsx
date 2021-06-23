import React, { forwardRef } from 'react';

import ErrorBoundary from '../ErrorBoundary';

import styles from './index.module.less';

export interface MaskProps<T> {
  defaultProps: T;
  data: T;
  ref: React.RefObject<HTMLDivElement>;
}

/**
 * @param WrappedComponent 需要被包的组件（函数式组件）
 * @param checkData 校验组件生效所必须的 props 是否有实际值
 * @returns 组件
 */
export function wrapper<T = any>(
  WrappedComponent: React.FC<T>,
  shouldUseData: (data: T) => boolean,
) {
  return forwardRef<HTMLDivElement, MaskProps<T>>((props, ref) => {
    const {
      defaultProps, // default props
      data, // 实际数据
    } = props;
    // 是否有真实数据
    const useData = shouldUseData(data);
    // 实际 props
    const actualProps = useData ? data : defaultProps;

    // console.log(__EDIT__, hasData, defaultProps, data)
    // 生产环境
    if (!__EDIT__) {
      // 没有数据，则不渲染
      return (
        useData ? (
          <ErrorBoundary>
            <WrappedComponent {...actualProps} />
          </ErrorBoundary>
        ) : null
      );
    }

    return (
      <div className={styles.wrapper} ref={ref}>
        <ErrorBoundary>
          <WrappedComponent {...actualProps} />
        </ErrorBoundary>
      </div>
    );
  });
}
