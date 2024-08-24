<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderComponent from "@/ui/HeaderComponent.vue";
</script>

<template>
  
  <Private layout>
    <RouterView />
  </Private>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>