import React, { useEffect, useRef } from 'react';

import { get } from 'lodash';
import { useInView } from 'react-intersection-observer';

// 曝光事件的无痕埋点
export const ExposureBuriedPoint: React.FC = ({ children }) => {
  const isExposed = useRef(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const onExpose = () => {
    console.log('buried point exposed');
    // TODO: 上报的信息
  };

  useEffect(() => {
    // 只在第一次曝光的时候上报
    if (inView && !isExposed.current) {
      isExposed.current = true;
      onExpose();
    }
  }, [inView]);

  return (
    <>
      <div style={{ width: 0, height: 0 }} ref={ref} />
      {children}
    </>
  );
};

// 空函数
function noop() {
  // DO NOTHING
}

// 点击事件的无痕埋点
export const ClickBuriedPoint: React.FC = ({ children }) => {
  // 点击上报事件
  const handleClick = () => {
    console.log('caught click event');
    // TODO: 上报的信息
  };

  // 向原点击事件上绑定埋点事件
  const addClickEvent = (ele: any) => (
    React.cloneElement(ele, {
      onClick: (e: any) => {
        const originClick = ele.props.onClick || noop;
        originClick.call(ele, e);
        handleClick();
      },
    })
  );

  // 检查子节点的单一性
  const checkElement = (ele: any): any => {
    if (typeof ele !== 'object') {
      return (<div>埋点错误</div>);
    }
    if (!get(ele, 'props.onClick')) {
      return (<div>埋点错误</div>);
    }

    return addClickEvent(ele);
  };

  return checkElement(React.Children.only(children));
};
