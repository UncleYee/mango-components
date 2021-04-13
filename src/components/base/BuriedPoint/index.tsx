import React, { useEffect, useRef } from 'react';

import { get } from 'lodash';
import { useInView } from 'react-intersection-observer';

interface Props {
  uniqueKey: string;
  children: (ref: any) => JSX.Element;
}

// Expose Buried Point
export const ExposureBuriedPoint: React.FC<Props> = ({ children, uniqueKey }) => {
  const exposedKey = useRef<string>();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const onExpose = () => {
    console.log('buried point exposed');
    // TODO: 上报的信息
  };

  useEffect(() => {
    if (inView && exposedKey.current !== uniqueKey) {
      exposedKey.current = uniqueKey;
      onExpose();
    }
  }, [inView, uniqueKey]);

  if (typeof children !== 'function') {
    return (
      <div>埋点错误</div>
    );
  }

  return children(ref);
};

// noop
function noop() {
  // DO NOTHING
}

// Click Buried Point
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
