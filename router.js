import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/Index.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ResetPassword from './components/ResetPassword.vue';
import redirect from './components/redirect.vue';
import mapitas from './components/mapitas.vue';
import ManageUsers from './components/ManageUsers.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/reset-password', component: ResetPassword },
  { path: '/ar', component: redirect },
  { path: '/maps', component: mapitas},
  { path: '/manage-users', name: 'ManageUsers', component: ManageUsers }
];

//esto es un comentario
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
