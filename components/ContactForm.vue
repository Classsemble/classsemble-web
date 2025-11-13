<template>
  <div class="contact-form card max-w-2xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-900 mb-2 text-center">{{ title }}</h3>
    <p class="text-gray-600 mb-6 text-center">{{ subtitle }}</p>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            v-model="form.firstName"
            type="text"
            required
            class="input-field"
            placeholder="John"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            v-model="form.lastName"
            type="text"
            required
            class="input-field"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          v-model="form.email"
          type="email"
          required
          class="input-field"
          placeholder="john.doe@university.edu"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Organization / Institution
        </label>
        <input
          v-model="form.organization"
          type="text"
          class="input-field"
          placeholder="University of Example"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <input
          v-model="form.subject"
          type="text"
          required
          class="input-field"
          placeholder="How can we help you?"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          v-model="form.message"
          required
          rows="5"
          class="input-field"
          placeholder="Tell us more about your needs..."
        />
      </div>

      <div v-if="error" class="text-red-600 text-sm bg-red-50 p-3 rounded">
        {{ error }}
      </div>

      <div v-if="success" class="text-green-600 text-sm bg-green-50 p-3 rounded">
        {{ success }}
      </div>

      <button
        type="submit"
        class="btn-primary w-full"
        :disabled="submitting"
      >
        {{ submitting ? 'Sending...' : 'Send Message' }}
      </button>

      <p class="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Get in Touch',
  subtitle: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
})

const emit = defineEmits<{
  (e: 'submit', data: any): void
}>()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
})

const submitting = ref(false)
const error = ref('')
const success = ref('')

const handleSubmit = async () => {
  error.value = ''
  success.value = ''
  submitting.value = true

  try {
    // TODO: Replace with actual API endpoint
    // const response = await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: form.value,
    // })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    success.value = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
    
    emit('submit', form.value)

    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
    }
  } catch (err: any) {
    error.value = 'Failed to send message. Please try again later.'
    console.error('Error submitting contact form:', err)
  } finally {
    submitting.value = false
  }
}
</script>
