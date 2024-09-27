import { createRouter, createWebHistory } from 'vue-router'
import NotesList from '../components/NotesList.vue'
import NoteCreator from '../components/NoteCreator.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', component: NotesList },
  { path: '/create', component: NoteCreator },
  { path: '/:catchAll(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
