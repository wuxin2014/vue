/* @flow */

import { mergeOptions } from '../util/index'

// 全局混入 mixin时，调用mergeOptions
export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin) // Vue静态属性options跟全局混入对象进行合并
    return this
  }
}

// mergeOptions (parent,child, v)