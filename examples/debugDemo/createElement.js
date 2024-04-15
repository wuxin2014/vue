/**
 * createElement可以接受多个参数
 * 第一个参数是必传参数, 可以是字符串String, 也可以是Object对象或函数Function
 * createElemen的第二个参数是可选参数, 这个参数是一个Object
 * createElement第三个参数是可选的，可以给其传一个String或Array
 */
// createElement('div', {
//   // 与 `v-bind:class` 的 API 相同，接受一个字符串、对象或字符串和对象组成的数组
//   'class': {
//     foo: true,
//     bar: false
//   },
//   // 与 `v-bind:style` 的 API 相同，接受一个字符串、对象，或对象组成的数组
//   style: {
//     color: 'red',
//     fontSize: '18px'
//   },
//   // 普通的 HTML attribute
//   attrs: {
//     ...self.attrs,
//     id: 'id-demo'
//   },
//   // 组件 prop
//   props: {},
//   // DOM property
//   domProps: {
//     innerHTML: 'hello world!'
//   },
//   // 事件监听器在 `on` 内，但不再支持如 `v-on:keyup.enter` 这样的修饰器。需要在处理函数中手动检查 keyCode。
//   on: {
//     ...self.$listeners,
//     click: (e) => {console.log(e)}
//   },
//   staticClass: 'wrapper',
//   // 仅用于组件，用于监听原生事件，而不是组件内部使用,`vm.$emit` 触发的事件。
//   nativeOn: {
//     click: this.nativeClickHandler
//   },
//   // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`赋值，因为 Vue 已经自动为你进行了同步。
//   directives: [
//     {
//       name: 'my-custom-directive',
//       value: '2',
//       expression: '1 + 1',
//       arg: 'foo',
//       modifiers: {
//         bar: true
//       }
//     }
//   ],
//   // 作用域插槽的格式为{ name: props => VNode | Array<VNode> }
//   scopedSlots: {
//     default: props => createElement('span', props.text)
//   },
//   // 如果组件是其它组件的子组件，需为插槽指定名称
//   slot: 'name-of-slot',
//   // 其它特殊顶层 property
//   key: 'myKey',
//   ref: 'myRef',
//   // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，那么 `$refs.myRef` 会变成一个数组。
//   refInFor: true
// })

// String
Vue.component('custom-element', {
    render(createElement) {
        return createElement('div', 'hello world!')
    }
})
// Object
Vue.component('custom-element', {
    render(createElement) {
        return createElement({
          template: `<div>hello world!</div>`
        })
    }
})
// Function
Vue.component('custom-element', {
    render(createElement) {
      const elFn = () => { `<div>hello world!</div>` }
      return createElement(elFn())
    }
})

{/* <div 
    :id="id" 
    class="wrapper" 
    :class="{'foo': true, 'bar': false}" 
    :style="{color: 'red', fontSize: '18px'}" 
    v-bind="$attrs" 
    v-on="$listeners" 
    @click="(e) => console.log(e)"> 
    hello world! 
  </div> */}
Vue.component('custom-element', {
    render(createElement) {
      const self = this;
      return createElement('div', {
        'class': {
          foo: true,
          bar: false
        },
        style: {
          color: 'red',
          fontSize: '18px'
        },
        attrs: {
          ...self.attrs,
          id: 'id-demo'
        },
        on: {
          ...self.$listeners,
          click: (e) => {console.log(e)}
        },
        domProps: {
          innerHTML: 'hello world!'
        },
        staticClass: 'wrapper'
      })
    }
  })

var app = new Vue({
    el: '#app',
    data: {
        list: [1, 2, 3, 4, 5],
        name: ''
    },
    // render: (h) => h('h1', ['test render'])
})