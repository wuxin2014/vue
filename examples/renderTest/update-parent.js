
Vue.component('list', {
    template: '#list-template',
    props: {
        list: { type: Array, default: () => []}
    }
  })

debugger
var app = new Vue({
    el: '#app',
    data: {
        list: [1, 2, 3, 4, 5],
        name: ''
    },
    methods: {
        handleAdd() {
            this.list.push('test')
        }
    }
})