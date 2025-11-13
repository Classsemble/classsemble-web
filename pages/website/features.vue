<template>
  <div class="features-page">
    <Navbar />

    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Powerful Features for Modern Education</h1>
        <p class="text-xl text-gray-600">
          Everything you need to enhance collaboration and engagement in your Canvas courses
        </p>
      </div>
    </section>

    <!-- Main Features -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            :features="feature.items"
          />
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="py-20 bg-gray-50 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="section-heading text-center mb-16">Seamless Integrations</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div class="text-center">
            <div class="bg-white rounded-lg p-6 shadow-md">
              <p class="font-semibold text-gray-900">Canvas LMS</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white rounded-lg p-6 shadow-md">
              <p class="font-semibold text-gray-900">Google Calendar</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white rounded-lg p-6 shadow-md">
              <p class="font-semibold text-gray-900">Zoom</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white rounded-lg p-6 shadow-md">
              <p class="font-semibold text-gray-900">More Coming</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Meeting Scheduler',
    description: 'Coordinate group meetings with ease using our interactive calendar interface',
    icon: `<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/></svg>`,
    items: ['Visual calendar view', 'Timezone support', 'Email reminders', 'Recurring meetings']
  },
  {
    title: 'Real-Time Chat',
    description: 'Course-specific chat rooms for instant communication and collaboration',
    icon: `<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'/></svg>`,
    items: ['Instant messaging', 'Message history', 'File sharing', 'Online status']
  },
  {
    title: 'Video Conferencing',
    description: 'Integrated Zoom meetings launched directly from Canvas',
    icon: `<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'/></svg>`,
    items: ['One-click Zoom links', 'Auto-generate meetings', 'Join from Canvas', 'Recording access']
  },
  {
    title: 'Attendance Tracking',
    description: 'Automatically track participation and engagement',
    icon: `<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'/></svg>`,
    items: ['Meeting attendance', 'Chat participation', 'Export reports', 'Grade sync']
  },
  {
    title: 'Analytics Dashboard',
    description: 'Insights into student engagement and participation patterns',
    icon: `<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'/></svg>`,
    items: ['Engagement metrics', 'Usage statistics', 'Student insights', 'Custom reports']
  },
  {
    title: 'Mobile Friendly',
    description: 'Access from any device with responsive design',
    icon: `<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'/></svg>`,
    items: ['Responsive design', 'Touch optimized', 'Works offline', 'Native feel']
  }
]
</script>
