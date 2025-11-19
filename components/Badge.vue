<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'success' | 'warning' | 'info' | 'coral' | 'teal' | 'lemon'
  size?: 'sm' | 'md' | 'lg'
}>()

const badgeClasses = computed(() => {
  const base = 'inline-flex items-center font-semibold rounded-full'
  
  const variants = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    coral: 'bg-coral/10 text-coral',
    teal: 'bg-teal/10 text-teal',
    lemon: 'bg-lemon text-gray-800'
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  }
  
  return [
    base,
    variants[props.variant || 'teal'],
    sizes[props.size || 'md']
  ].join(' ')
})
</script>
