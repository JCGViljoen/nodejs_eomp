import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/AdminView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'
import Single from '../views/SingleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  {
    path: '/single',
    name: 'single',
    component: Single
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
