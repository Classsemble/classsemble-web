<template>
  <div class="feature-card card group cursor-pointer">
    <div class="mb-4">
      <div
        class="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
        :class="iconBgClass"
      >
        <div v-html="icon" :class="iconColorClass" class="w-6 h-6"></div>
      </div>
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
      {{ title }}
    </h3>
    
    <p class="text-gray-600 leading-relaxed">
      {{ description }}
    </p>

    <div v-if="features" class="mt-4 pt-4 border-t border-gray-200">
      <ul class="space-y-2">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start gap-2 text-sm text-gray-600"
        >
          <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  iconBgClass?: string
  iconColorClass?: string
  features?: string[]
}

withDefaults(defineProps<Props>(), {
  iconBgClass: 'bg-primary-100 group-hover:bg-primary-200',
  iconColorClass: 'text-primary-600',
  features: () => []
})
</script>
