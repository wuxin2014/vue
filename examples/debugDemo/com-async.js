Vue.component('async-com', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})

var app = new Vue({
    el: '#app',
    data: {
        list: [1, 2, 3, 4, 5],
        name: ''
    },
})