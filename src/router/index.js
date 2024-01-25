import { createRouter, createWebHistory } from 'vue-router'
import Characters from '../views/CharactersView.vue'
import Episodes from '../views/EpisodesView.vue'
import Character from '../views/CharView.vue'
import Home from '../views/HomeChar.vue'
import Places from '../views/PlacesView.vue'
import Place from '../views/PlaceView.vue'
import Episode from '../views/EpisodeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters
  },
  {
   path:'/episodes',
   name: 'episodes',
   component: Episodes 
  },
  {
    path: '/places',
    name: 'places',
    component: Places
  },
  {
    path: '/place/:id',
    name: 'place',
    component: Place
  },
  {
    path:'/character/:id',
    name: 'Char',
    component:Character
  },
  {
    path: '/episode/:id',
    name: 'episode',
    component: Episode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
