import Vue from 'vue'
import App from './app.vue'

import './assets/style/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

//测试 v1.1
new Vue({
    render : (h) => h(App)
}).$mount(root)