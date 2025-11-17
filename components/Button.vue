<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <span v-if="loading" class="inline-block w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}>()

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-coral text-white hover:bg-coral/90 focus:ring-coral shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-teal text-white hover:bg-teal/90 focus:ring-teal shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    outline: 'border-2 border-teal text-teal hover:bg-teal hover:text-white focus:ring-teal',
    ghost: 'text-teal hover:bg-teal/10 focus:ring-teal'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const width = props.fullWidth ? 'w-full' : ''
  
  return [
    base,
    variants[props.variant || 'primary'],
    sizes[props.size || 'md'],
    width
  ].join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
