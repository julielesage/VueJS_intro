import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import ProfileView from '../views/ProfileView.vue';
import PageNotFound from '../components/PageNotFound.vue';

/*Par défaut, Vue Router utilise le mode  hash 
pour s'assurer qu'il fonctionne sur tous les navigateurs,
quelle que soit la configuration du serveur.
Le mode historique HTML5 nécessite une configuration supplémentaire,
que vous pouvez découvrir dans la documentation.*/

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited. (bc better to load later)
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '/new',
		name: 'newview',
		component: () => import(/* webpackChunkName: "new" */ '../views/NewView.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView
	},
	{
		path: '/profile/:name',
		name: 'profile',
		component: ProfileView
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'notFound',
		component: PageNotFound
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
