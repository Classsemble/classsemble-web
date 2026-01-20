<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
      <ContactForm @submit="handleContactSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact - Classsemble',
  meta: [{ name: 'description', content: 'Get in touch with Classsemble' }]
})

const handleContactSubmit = (formData: any) => {
  console.log('Contact form submitted:', formData)
  alert('Thank you for your message! We will get back to you soon.')
}
</script>
