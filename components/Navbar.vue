<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">C</span>
          </div>
          <span class="text-xl font-bold text-gray-900">Classsemble</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/#features" class="text-gray-600 hover:text-indigo-600 transition">Features</NuxtLink>
          <NuxtLink to="/#pricing" class="text-gray-600 hover:text-indigo-600 transition">Pricing</NuxtLink>
          <NuxtLink to="/website/contact" class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Contact
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 space-y-2">
        <NuxtLink to="/#features" class="block px-4 py-2 text-gray-600 hover:bg-indigo-50 rounded">Features</NuxtLink>
        <NuxtLink to="/#pricing" class="block px-4 py-2 text-gray-600 hover:bg-indigo-50 rounded">Pricing</NuxtLink>
        <NuxtLink to="/website/contact" class="block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
