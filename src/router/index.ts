import { createRouter, createWebHistory } from 'vue-router'
import Cursos from '../components/Cursos.vue'
import DetalleCurso from '../components/detalladoCurso.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/NavBar.vue'
import AvisoPrivacidad from '../components/AvisoPrivacidad.vue'
import Inicio from '../components/inicio.vue'
import Inscripciones from '../components/inscripciones.vue'



const routes = [
  { path: '/', name: 'inicio', component: Inicio },
  { path: '/cursos', name: 'cursos', component: Cursos },
  { path: '/cursos/:id', name: 'detalle-curso', component: DetalleCurso },
  { path: '/mis-cursos', name: 'mis-cursos', component: Cursos },
  { path: '/inscripciones', name: 'inscripciones', component: Inscripciones },
  { path: '/footer', name: 'footer', component: Footer },
  { path: '/navbar', name: 'navbar', component: Navbar },
  { path: '/aviso-privacidad', name: 'aviso-privacidad', component: AvisoPrivacidad },
  { path: '/inicio', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
