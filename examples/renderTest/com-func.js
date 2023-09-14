// template: '#user-list-template',
// context.clickHandler
Vue.component('user-list', {
  functional: true,
  props: {
    users: { type: Array, default: () => []}
  },
  render(createElement, context) {
    console.log('context===', context)
    const children = context.props.users.map((item, idx) => {
      return createElement('li', { attrs: { key: idx }, on: { click: (ev) => { context.listeners.click(item) }}}, [item])
    })
    return createElement('ul', children)
  },
})

var app = new Vue({
    el: '#app',
    data: {
        list: [1, 2, 3, 4, 5],
        name: ''
    },
    methods: {
      clickHandler(name) {
        alert(name)
      }
    }
})