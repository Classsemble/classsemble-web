<template>
  <div class="contact-page">
    <Navbar />

    <!-- Hero -->
    <section class="bg-linen py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold text-teal mb-6">Get in Touch</h1>
        <p class="text-xl text-ash">
          Have questions? Want a demo? We'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <ContactForm @submit="handleContactSubmit" />
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="card">
              <h3 class="text-xl font-bold mb-4 text-teal">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p class="font-medium">Email</p>
                    <a href="mailto:support@classsemble.com" class="text-teal hover:underline">
                      support@classsemble.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p class="font-medium">Phone</p>
                    <a href="tel:+1-555-123-4567" class="text-teal hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p class="font-medium">Address</p>
                    <p class="text-ash">
                      123 Education Street<br>
                      San Francisco, CA 94102<br>
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card bg-lemon">
              <h3 class="text-xl font-bold mb-4 text-teal">Schedule a Demo</h3>
              <p class="text-ash mb-4">
                See Classsemble in action! Book a personalized demo with our team to explore how we can enhance 
                your Canvas experience.
              </p>
              <a href="#" class="btn-primary inline-block">
                Book a Demo →
              </a>
            </div>

            <div class="card">
              <h3 class="text-xl font-bold mb-4 text-teal">Quick Links</h3>
              <div class="space-y-2">
                <a href="#" class="block text-teal hover:underline">Documentation</a>
                <a href="#" class="block text-teal hover:underline">Installation Guide</a>
                <a href="#" class="block text-teal hover:underline">FAQ</a>
                <a href="#" class="block text-teal hover:underline">Support Portal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const handleContactSubmit = (data: any) => {
  console.log('Contact form submitted:', data)
}
</script>
