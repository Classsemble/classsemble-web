<template>
  <div class="about-page">
    <Navbar />

    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">About Classsemble</h1>
        <p class="text-xl text-gray-600">
          We're on a mission to make Canvas LMS more collaborative and engaging for students and educators
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4">
              Classsemble was born from a simple observation: students needed better ways to collaborate within Canvas LMS. 
              Traditional discussion boards weren't enough for real-time collaboration, and external tools created friction.
            </p>
            <p class="text-gray-600 mb-4">
              We built Classsemble to bridge this gap—bringing modern collaboration tools directly into Canvas through 
              secure LTI 1.3 integration. No more switching between multiple platforms or losing track of conversations.
            </p>
            <p class="text-gray-600">
              Today, Classsemble serves thousands of students and educators across hundreds of institutions, 
              making online and hybrid learning more engaging and effective.
            </p>
          </div>
          <div class="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-12 text-center">
            <img src="https://placehold.co/400x300/0ea5e9/ffffff?text=Our+Team" alt="Team" class="rounded-lg mx-auto" />
          </div>
        </div>

        <!-- How it Works -->
        <div class="mb-20">
          <h2 class="section-heading text-center mb-12">How Classsemble Works</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 class="text-xl font-bold mb-2">Install LTI App</h3>
              <p class="text-gray-600">
                Administrators install Classsemble in Canvas using our simple LTI 1.3 configuration
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 class="text-xl font-bold mb-2">Add to Courses</h3>
              <p class="text-gray-600">
                Instructors add Classsemble to their Canvas courses with one click
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 class="text-xl font-bold mb-2">Start Collaborating</h3>
              <p class="text-gray-600">
                Students access scheduling, chat, and meetings directly from Canvas
              </p>
            </div>
          </div>
        </div>

        <!-- Values -->
        <div>
          <h2 class="section-heading text-center mb-12">Our Values</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card">
              <h3 class="text-xl font-bold mb-2 text-primary-600">🎓 Education First</h3>
              <p class="text-gray-600">
                We design every feature with students and educators in mind, prioritizing learning outcomes above all else
              </p>
            </div>
            <div class="card">
              <h3 class="text-xl font-bold mb-2 text-primary-600">🔒 Privacy & Security</h3>
              <p class="text-gray-600">
                Student data is sacred. We use industry-standard encryption and never sell or share your information
              </p>
            </div>
            <div class="card">
              <h3 class="text-xl font-bold mb-2 text-primary-600">🚀 Innovation</h3>
              <p class="text-gray-600">
                We constantly evolve our platform based on user feedback and the latest educational research
              </p>
            </div>
            <div class="card">
              <h3 class="text-xl font-bold mb-2 text-primary-600">🤝 Accessibility</h3>
              <p class="text-gray-600">
                Education should be accessible to everyone. We follow WCAG guidelines and support all abilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>
