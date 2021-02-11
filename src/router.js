import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'

// const createRouteByComponentName = (componentName) => {
//   const lowerCaseName = componentName.toLowerCase()
//   return {
//     path: '/' + lowerCaseName,
//     name: componentName,
//     component: import(`./views/${lowerCaseName}/${componentName}.vue`),
//   }
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: import('./views/about/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
