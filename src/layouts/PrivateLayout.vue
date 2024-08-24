<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

import HeaderComponent from '@/ui/HeaderComponent.vue';

onMounted(() => {
  const token = localStorage.getItem('token');
  const router = useRouter(); 
  if (!token) {
    router.push({ name: 'login' });
  }
});
</script>

<template>
  <div>
    <HeaderComponent/>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
