<template>
  <div 
    class="plan-card card text-center relative overflow-hidden"
    :class="{ 'border-2 border-primary-600': popular, 'transform scale-105': popular }"
  >
    <!-- Popular Badge -->
    <div 
      v-if="popular" 
      class="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg"
    >
      POPULAR
    </div>

    <!-- Plan Name -->
    <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ name }}</h3>
    
    <!-- Price -->
    <div class="mb-6">
      <span class="text-4xl font-bold text-gray-900">{{ price }}</span>
      <span v-if="period" class="text-gray-600 ml-2">/ {{ period }}</span>
    </div>

    <!-- Description -->
    <p class="text-gray-600 mb-6">{{ description }}</p>

    <!-- Features List -->
    <ul class="space-y-3 mb-8 text-left">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-start gap-3"
      >
        <svg 
          class="w-5 h-5 flex-shrink-0 mt-0.5"
          :class="feature.included ? 'text-primary-600' : 'text-gray-300'"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            v-if="feature.included"
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M5 13l4 4L19 7" 
          />
          <path 
            v-else
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
        <span :class="feature.included ? 'text-gray-700' : 'text-gray-400'">
          {{ feature.text }}
        </span>
      </li>
    </ul>

    <!-- CTA Button -->
    <button
      :class="popular ? 'btn-primary w-full' : 'btn-outline w-full'"
      @click="$emit('select', name)"
    >
      {{ ctaText }}
    </button>

    <!-- Additional Info -->
    <p v-if="additionalInfo" class="text-xs text-gray-500 mt-4">
      {{ additionalInfo }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  text: string
  included: boolean
}

interface Props {
  name: string
  price: string
  period?: string
  description: string
  features: Feature[]
  ctaText?: string
  popular?: boolean
  additionalInfo?: string
}

withDefaults(defineProps<Props>(), {
  ctaText: 'Get Started',
  popular: false
})

defineEmits<{
  (e: 'select', planName: string): void
}>()
</script>
