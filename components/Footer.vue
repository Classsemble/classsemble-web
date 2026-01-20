<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">C</span>
            </div>
            <span class="text-xl font-bold text-white">Classsemble</span>
          </div>
          <p class="text-gray-400">Enhancing student collaboration through seamless LMS integration</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/#features" class="hover:text-indigo-400 transition">Features</NuxtLink></li>
            <li><NuxtLink to="/#pricing" class="hover:text-indigo-400 transition">Pricing</NuxtLink></li>
            <li><NuxtLink to="/website/contact" class="hover:text-indigo-400 transition">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-semibold mb-4">Get in Touch</h3>
          <p class="text-gray-400 mb-2">Questions about integration?</p>
          <NuxtLink to="/website/contact" class="text-indigo-400 hover:text-indigo-300 transition">
            Contact our team →
          </NuxtLink>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2026 Classsemble. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
