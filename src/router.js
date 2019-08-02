import VueRouer from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouer)


// const List = () => import('./pages/list')
 import List from './pages/list/index.vue'
const routes=[
    {
        path:'/list',
        component:List
    }
]

const router = new VueRouer({
    routes
})

export default router;