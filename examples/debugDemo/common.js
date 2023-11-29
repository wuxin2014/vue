var data = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
        name: 'child folder',
        children: [
            {
            name: 'child folder',
            children: [
                { name: 'hello' },
                { name: 'wat' }
            ]
            },
            { name: 'hello' },
            { name: 'wat' },
            {
            name: 'child folder',
            children: [
                { name: 'hello' },
                { name: 'wat' }
            ]
            }
        ]
        }
    ]
}

// Vue.component('custom-input', {
//   template: '#custom-input-template',
//   data: function () {
//     return {
//       name: ''
//     }
//   },
//   methods: {
//   }
// })

Vue.component('list', {
    template: '#list-template',
    props: {
        list: []
    }
  })

debugger
var app = new Vue({
    el: '#app',
    data: {
        list: [1, 2, 3, 4, 5],
        name: ''
    },
    // render: (h) => h('h1', ['test render'])
})

// var app = new Vue({
//     el: '#app',
//     data: {},
//     render: (h) => h(App) // App是个对象
// })