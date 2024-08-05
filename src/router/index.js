import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HeaderComponent.vue'; // Exemplo de componente de página inicial
import NewsSection from '../views/News/NewsSection.vue'; // Exemplo de componente de seção de notícias

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/news',
        name: 'NewsSection',
        component: NewsSection
    },
    // Adicione outras rotas conforme necessário
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
