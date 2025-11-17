<template>
  <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div class="w-14 h-14 rounded-lg bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center mb-4">
      <div class="w-7 h-7 text-white" v-html="icon"></div>
    </div>
    <h3 class="text-xl font-bold text-gray-900 mb-2 font-display">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
