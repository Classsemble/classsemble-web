<template>
  <div class="website-home">
    <Navbar />

    <!-- Hero Section -->
    <section class="bg-linen py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl md:text-6xl font-bold text-teal mb-6 animate-fade-in">
              Collaborate, Schedule, and Connect
              <span class="text-coral">Inside Canvas</span>
            </h1>
            <p class="text-xl text-ash mb-8 leading-relaxed">
              Empower your students with seamless collaboration tools integrated directly into Canvas LMS. 
              Schedule meetings, chat in real-time, and boost engagement—all in one place.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#" class="btn-primary text-lg px-8 py-4">Get Started Free</a>
              <a href="#demo" class="btn-secondary text-lg px-8 py-4">Request Demo</a>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://placehold.co/600x400/0ea5e9/ffffff?text=Dashboard+Preview" 
                alt="Classsemble Dashboard" 
                class="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-teal mb-2">10K+</div>
            <div class="text-ash">Active Users</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-teal mb-2">500+</div>
            <div class="text-ash">Institutions</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-teal mb-2">50K+</div>
            <div class="text-ash">Meetings Scheduled</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-teal mb-2">98%</div>
            <div class="text-ash">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Preview -->
    <section class="py-20 bg-lemon px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="section-heading text-teal">Everything You Need for Better Collaboration</h2>
          <p class="section-subheading max-w-3xl mx-auto text-ash">
            Classsemble brings powerful collaboration tools directly into your Canvas courses
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Smart Scheduling"
            description="Coordinate meetings effortlessly with integrated calendar views and automatic timezone handling"
            :icon="`<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/></svg>`"
          />
          <FeatureCard
            title="Real-Time Chat"
            description="Connect with classmates instantly through course-specific chat rooms with message history"
            :icon="`<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'/></svg>`"
          />
          <FeatureCard
            title="Zoom Integration"
            description="Seamlessly create and join Zoom meetings directly from your Canvas dashboard"
            :icon="`<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'/></svg>`"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/website/features" class="btn-primary">
            Explore All Features →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-teal text-white px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Transform Your Canvas Experience?</h2>
        <p class="text-xl mb-8 opacity-90">
          Join thousands of educators and students already using Classsemble
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" class="bg-white text-teal hover:bg-linen text-lg px-8 py-4 font-semibold rounded-lg transition-colors">
            Start Free Trial
          </a>
          <NuxtLink to="/website/contact" class="border-2 border-white text-white hover:bg-white hover:text-teal text-lg px-8 py-4 font-semibold rounded-lg transition-colors">
            Contact Sales
          </NuxtLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>
