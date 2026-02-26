import { createRouter, createWebHistory } from 'vue-router'
import Question1 from '../views/Question1.vue'
import Question2 from '../views/Question2.vue'
import Question3 from '../views/Question3.vue'
import Question4 from '../views/Question4.vue'
import Question5 from '../views/Question5.vue'
import Question6 from '../views/Question6.vue'

const routes = [
    { path: '/', redirect: '/q1' },
    { path: '/q1', component: Question1 },
    { path: '/q2', component: Question2 },
    { path: '/q3', component: Question3 },
    { path: '/q4', component: Question4 },
    { path: '/q5', component: Question5 },
    { path: '/q6', component: Question6 },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
