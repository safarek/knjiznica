<template>
  <q-page class="flex flex-center">
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iuH4_G-aWxeuP11Xc46yp57yuirkv3h3oA&s">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">O nama</div>
        </q-img>
      </q-card-section>
      <q-card-section class="text-h4 text-justify">
        {{ o_nama }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Definiranje reaktivne varijable
const o_nama = ref('Gradska knjižnica Opatija središnja je narodna knjižnica .')
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>