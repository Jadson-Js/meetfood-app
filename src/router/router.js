// IMPORTS TO SETUP OF STORE
import { createRouter, createWebHistory } from 'vue-router'


import store from '../store/store.js' // Import do store para os guardas

// IMPORTS OF COMPONENTS
    // Header 
    const AppHeaderHero = () => import('../components/Header/Hero/AppHeaderHero.vue') // Dynamic imports

    // Main
    const AppMainHome = () => import('../components/Main/Home/AppMainHome.vue');
    const AppMainLogin = () => import('../components/Main/Login/AppMainLogin.vue')
    const AppMainPerfil = () => import('../components/Main/Perfil/AppMainPerfil.vue')

    // Footer
    const AppFooter = () => import('../components/Footer/AppFooter.vue');

    // Errors
    const AppNotFound = () => import('../components/AppNotFound.vue');

// GUARDS OF ROUTE
function requiresNotBeLogged() { 
    let isLogged = store.getters.getIsLogged // Requisitando um getter do store

    if(isLogged) return {name: 'home'} // Se sim retorne para a home
}

// CREATE THE ROUTER
const router = createRouter({
    // TYPE OF HISTORY
    history: createWebHistory(),

    // ROUTES
    routes: [ 
        {
            path: '/',
            name: 'home',
            components: {
                hero: AppHeaderHero,
                main: AppMainHome,
                footer: AppFooter
            }
        },
        {
            path: '/login',
            name: 'login',
            beforeEnter: [requiresNotBeLogged], // Declarando guard of route
            components: {
                main: AppMainLogin
            }
        },
        {
            path: '/perfil',
            name: 'perfil',
            components: {
                main: AppMainPerfil,
            }
        },
        {
            path: '/:pathMatch(.*)*', // Indica todas possiveis rotas / caso nenhuma de sua rota for chamada essa será chamada
            name: 'error',
            components: {
                main: AppNotFound
            }
        },

    ]
})

// GLOBAL GUARD
router.beforeEach(async (to) => { 
    let isLogged = store.getters.getIsLogged // Requisitando um getter do store

    if(to.path != {name: 'home'} && isLogged != true && isLogged != false) { // Se path for diferente da home e  
        return {name: 'home'}
    }
})

export default router