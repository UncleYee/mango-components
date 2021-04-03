import { useState, useEffect } from 'react';

import { store } from '../store';

interface UserInfo {
  name: string;
  age: number;
}

function sleep(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, timeout);
  });
}

/**
 * useUserInfo hook
 * @param id 组件 id
 */
export default function useUserInfo(id: string) {
  const [state, setState] = useState<UserInfo>();

  async function fetchUserInfo() {
    await sleep();
    store.setStoreInfo('userInfo', { name: '名字', age: 18 });
  }

  useEffect(() => {
    const unRegister = store.register(id, 'userInfo', setState);
    fetchUserInfo();
    return unRegister;
  }, [id]);

  return [state];
}
