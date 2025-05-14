import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../Pages/HomeView.vue'
import PostsView from '../Pages/PostsView.vue'
import UsersView from '../Pages/UsersView.vue'
import ProductsView from '../Pages/ProductsView.vue'

const routes = [
  { path: '/', component: HomeView },
    { path: '/posts', component: PostsView },
    { path: '/users', component: UsersView },
    { path: '/products', component: ProductsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router