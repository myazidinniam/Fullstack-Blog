import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import myFirstPage from './components/pages/myFirstPage.vue'
import newRoutePage from './components/pages/newPage.vue'

const routes = [
    {
        path: '/my-new-vue-route',
        component: myFirstPage
    },
    {
        path: '/new-route',
        component: newRoutePage
    }
]

const router = new Router({
    mode: 'history',
    routes
});

export default router