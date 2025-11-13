<template>
  <nav class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/website" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">C</span>
          </div>
          <span class="text-xl font-bold text-gray-900">Classsemble</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/website" class="text-gray-700 hover:text-primary-600 transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/website/features" class="text-gray-700 hover:text-primary-600 transition-colors">
            Features
          </NuxtLink>
          <NuxtLink to="/website/plans" class="text-gray-700 hover:text-primary-600 transition-colors">
            Plans
          </NuxtLink>
          <NuxtLink to="/website/about" class="text-gray-700 hover:text-primary-600 transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/website/contact" class="text-gray-700 hover:text-primary-600 transition-colors">
            Contact
          </NuxtLink>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">
            Sign In
          </a>
          <a href="#" class="btn-primary">
            Get Started
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t border-gray-200 bg-white"
    >
      <div class="px-4 py-4 space-y-3">
        <NuxtLink
          to="/website"
          class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          @click="mobileMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/website/features"
          class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          @click="mobileMenuOpen = false"
        >
          Features
        </NuxtLink>
        <NuxtLink
          to="/website/plans"
          class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          @click="mobileMenuOpen = false"
        >
          Plans
        </NuxtLink>
        <NuxtLink
          to="/website/about"
          class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          @click="mobileMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/website/contact"
          class="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          @click="mobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
        <div class="pt-3 border-t border-gray-200 flex flex-col gap-2">
          <a href="#" class="btn-outline text-center">
            Sign In
          </a>
          <a href="#" class="btn-primary text-center">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
