const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Početna stranica
      { path: 'popisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') }, // Popis svih knjiga
      { path: 'pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') }, // Pretraživanje
      { path: 'o_nama', component: () => import('pages/ONamaPage.vue') }, // O nama
      { path: 'lokacija', component: () => import('pages/LokacijaPage.vue') }, // Lokacija
      { path: 'login', component: () => import('pages/LoginPage.vue') }, // Login
      { path: 'registracija', component: () => import('pages/RegistracijaPage.vue') }, // Registracija
      { path: 'baza', component: () => import('pages/PopisKnjigaBazaPage.vue') },
      { path: "/rezervacija",component: () => {return import("pages/RezervacijaPage.vue")}},
      
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') },
      { path: '/admin/popis_knjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/admin/pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') },
      { path: '/admin/popis_korisnika', component: () => import('pages/PopisKorisnikaPage.vue') },
      { path: '/admin/unos_knjiga', component: () => import('pages/UnosKnjigaPage.vue') },
      { path: '/logout', component: () => import('pages/LogoutPage.vue') },
     
    ]
  },
  {
    path: '/:catchAll(.)',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
