<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Hero Section -->
    <div class="flex items-center justify-center p-8 py-20">
      <div class="max-w-4xl w-full text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">Classsemble</h1>
        <p class="text-2xl text-gray-600 mb-12">Collaborative learning platform for modern classrooms</p>
      </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-6xl mx-auto px-4 pb-20">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Features</h2>
      
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Meeting Scheduling -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Meeting Scheduling</h3>
          <p class="text-gray-600">Schedule and manage group meetings with integrated calendar sync</p>
        </div>

        <!-- Group Collaboration -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Group Creation</h3>
          <p class="text-gray-600">Create and manage study groups for collaborative learning</p>
        </div>

        <!-- Personal Dashboard -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Personal Dashboard</h3>
          <p class="text-gray-600">Track upcoming meetings, invites, and group messages in one place</p>
        </div>

        <!-- Messaging -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Group Messaging</h3>
          <p class="text-gray-600">Communicate with your study groups and classmates</p>
        </div>
      </div>

      <!-- Pricing Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
        <p class="text-xl text-gray-600 mb-8">Free for courses up to 20 students</p>
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <div class="text-5xl font-bold text-indigo-600 mb-4">$10</div>
          <p class="text-gray-600 mb-6">per additional student over 20</p>
          <p class="text-sm text-gray-500">Pricing model under development</p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Questions?</h2>
        <NuxtLink to="/website/contact" class="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
          Contact Us
        </NuxtLink>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Classsemble',
  meta: [{ name: 'description', content: 'Modern education platform' }]
})
</script>
