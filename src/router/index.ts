import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import Login from '@/layouts/auth/Login.vue';
import PrivateLayout from '@/layouts/PrivateLayout.vue';
import NotFound from '@/layouts/404.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/", // Example of a private route
      component: PrivateLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Home
        },
        {
          path: "/about",
          name: "about",
          component: About,
        },
        
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: "404",
      component: NotFound,
    }
  ],
});

export default router;
