/**
 * createElement可以接受多个参数
 * 第一个参数是必传参数, 可以是字符串String, 也可以是Object对象或函数Function
 * createElemen的第二个参数是可选参数, 这个参数是一个Object
 * createElement第三个参数是可选的，可以给其传一个String或Array
 */

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