import { createRouter, createWebHistory } from 'vue-router'

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
  history: createWebHistory(),
  routes
})

export default router
