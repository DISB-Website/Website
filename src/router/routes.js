
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: "home", component: () => import('pages/IndexPage.vue') },
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '/about', name: "about", component: () => import('pages/AboutPage.vue') },
      { path: '/about', name: "about", component: () => import('pages/AboutRev.vue') },
    ]
  },

  {
    path: '/service',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '/service', name: "service", component: () => import('pages/ServicePage.vue') },
      { path: '/service', name: "service", component: () => import('pages/ServiceNew.vue') },
    ]
  },

  {
    path: '/products',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '/products', name: "products", component: () => import('pages/ProductsPage.vue') },
      { path: '/products', name: "products", component: () => import('pages/ProductNew.vue') },
    ]
  },

  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/contact', name: "contact", component: () => import('pages/FooterSec.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
