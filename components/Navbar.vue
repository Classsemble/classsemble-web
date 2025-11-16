<template>
  <nav class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/website" class="flex items-center gap-2">
          <img src="/logo.svg" alt="Classsemble Logo" class="w-10 h-10" />
          <span class="text-xl font-bold text-teal">Classsemble</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/website" class="text-ash hover:text-teal transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/website/features" class="text-ash hover:text-teal transition-colors">
            Features
          </NuxtLink>
          <NuxtLink to="/website/plans" class="text-ash hover:text-teal transition-colors">
            Plans
          </NuxtLink>
          <NuxtLink to="/website/about" class="text-ash hover:text-teal transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/website/contact" class="text-ash hover:text-teal transition-colors">
            Contact
          </NuxtLink>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#" class="text-teal hover:text-coral font-medium">
            Sign In
          </a>
          <a href="#" class="bg-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-coral/90 transition-colors">
            Get Started
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-ash hover:text-teal hover:bg-lemon"
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
      class="md:hidden border-t border-ash bg-white"
    >
      <div class="px-4 py-4 space-y-3">
        <NuxtLink
          to="/website"
          class="block px-3 py-2 rounded-md text-ash hover:bg-lemon hover:text-teal"
          @click="mobileMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/website/features"
          class="block px-3 py-2 rounded-md text-ash hover:bg-lemon hover:text-teal"
          @click="mobileMenuOpen = false"
        >
          Features
        </NuxtLink>
        <NuxtLink
          to="/website/plans"
          class="block px-3 py-2 rounded-md text-ash hover:bg-lemon hover:text-teal"
          @click="mobileMenuOpen = false"
        >
          Plans
        </NuxtLink>
        <NuxtLink
          to="/website/about"
          class="block px-3 py-2 rounded-md text-ash hover:bg-lemon hover:text-teal"
          @click="mobileMenuOpen = false"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/website/contact"
          class="block px-3 py-2 rounded-md text-ash hover:bg-lemon hover:text-teal"
          @click="mobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
        <div class="pt-3 border-t border-ash flex flex-col gap-2">
          <a href="#" class="border-2 border-teal text-teal px-6 py-3 rounded-lg font-semibold hover:bg-lemon transition-colors text-center">
            Sign In
          </a>
          <a href="#" class="bg-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-coral/90 transition-colors text-center">
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
