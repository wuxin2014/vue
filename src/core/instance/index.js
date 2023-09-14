import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 在Vue的prototype上定义_init方法
stateMixin(Vue) // 在Vue的prototype上定义了$data,$props属性且是响应式的，$set,$delete，以及$watch方法
eventsMixin(Vue) // 在Vue的prototype上定义了$on, $off, $once, $emit方法
lifecycleMixin(Vue) // 在Vue的prototype上定义了_update, $destroy, $forceUpdate方法
renderMixin(Vue) // 在Vue的prototype上定义了$nextTick, _render方法，之前的installRenderHelpers()，在Vue的prototype上定义了多种渲染帮助方法

export default Vue
