import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component:()=> import('./views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component:()=> import('./views/AboutView.vue')
  },
  {
    path: '/archive',
    name: 'archive',
    component:()=> import('./views/ArchiveView.vue')
  },
  {
    path: '/artworks',
    name: 'artworks',
    component:()=> import('./views/ArtworksView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
