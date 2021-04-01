import React from 'react'

export interface Store {
  userInfo?: {
    name: string,
    age: number,
  }
}

class StoreInfo {
  // 不允许直接给 store 赋值
  data: Store = {}
  fetchFunctions = new Map<string, Function>()
  // 监听者
  listeners = new Map<keyof Store, {[id: string]: React.Dispatch<any> }>()

  // 使用 setStoreInfo 给 store 赋值
  setStoreInfo(key: keyof Store, info: any) {
    this.data[key] = info
    const allListeners = this.listeners.get(key)
    if (allListeners) {
      Object.values(allListeners).forEach(callback => {
        callback(info)
      })
    }
  }

  // 注册
  register(id: string, key: keyof Store, callback: React.Dispatch<any>) {
    const allListeners = this.listeners.get(key) || {}
    allListeners[id] = callback
    this.listeners.set(key, allListeners)
    return () => {
      delete allListeners[id]
      this.listeners.set(key, allListeners)
    }
  }
}

const store = new StoreInfo()

export {
  store,
  StoreInfo,
}
