<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-h3">
          Knjižnica admin
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <!-- Zamjena q-item s router-link -->
        <router-link
          v-for="link in linksList"
          :key="link.title"
          :to="link.link"
          class="cursor-pointer"
        >
          <q-item>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.title }}</q-item-label>
              <q-item-label caption>{{ link.caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'


let title = computed(() => {
  return "Knjižnica (admin)"
})
const router = useRouter()
const leftDrawerOpen = ref(false)
const linksList =
[
  {
    title: 'Početna',
    caption: 'Početna stranica',
    icon: 'home',
    link: '/admin'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih dostupnih knjiga',
    icon: 'book',
    link: '/admin/popis_knjiga'
  },
  {
    title: 'Pretraživanje',
    caption: 'Pretražujte knjige',
    icon: 'search',
    link: '/admin/pretrazivanje'
  },
  {
    title: 'Popis korisnika',
    caption: 'Informacije o korisnicima',
    icon: 'info',
    link: '/admin/popis_korisnika'
  },
  {
    title: 'Unos knjiga',
    caption: 'Unos nove knjige',
    icon: 'place',
    link: '/admin/unos_knjiga'
  },
  {
    title: 'Logout',
    caption: 'Logout',
    icon: 'login',
    link: '/logout'
  },
  
 
]

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer; /* Promijenite pokazivač kada se miša pomakne iznad linkova */
}
</style>
