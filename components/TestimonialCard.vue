<template>
  <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
    <div class="flex items-start mb-4">
      <div class="flex-shrink-0">
        <div v-if="image" class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img :src="image" :alt="name" class="w-full h-full object-cover" />
        </div>
        <div v-else class="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
          <span class="text-teal font-bold text-xl">{{ initials }}</span>
        </div>
      </div>
      <div class="ml-4 flex-1">
        <h4 class="font-semibold text-gray-900">{{ name }}</h4>
        <p class="text-sm text-gray-600">{{ role }}</p>
        <p v-if="institution" class="text-sm text-gray-500">{{ institution }}</p>
      </div>
      <div class="flex text-lemon">
        <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      </div>
    </div>
    <p class="text-gray-700 italic leading-relaxed">
      "{{ quote }}"
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  role: string
  institution?: string
  quote: string
  image?: string
}>()

const initials = computed(() => {
  return props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
})
</script>
