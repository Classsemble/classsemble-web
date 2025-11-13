<template>
  <div class="meeting-form card">
    <h3 class="text-xl font-bold mb-4">{{ isEdit ? 'Edit Meeting' : 'Create New Meeting' }}</h3>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Meeting Title *
        </label>
        <input
          v-model="form.title"
          type="text"
          required
          class="input-field"
          placeholder="e.g., Study Group Session"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          v-model="form.description"
          rows="3"
          class="input-field"
          placeholder="What will you discuss?"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Start Date & Time *
          </label>
          <input
            v-model="form.startTime"
            type="datetime-local"
            required
            class="input-field"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            End Date & Time *
          </label>
          <input
            v-model="form.endTime"
            type="datetime-local"
            required
            class="input-field"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          v-model="form.location"
          type="text"
          class="input-field"
          placeholder="e.g., Library Room 204"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Zoom Link (Optional)
        </label>
        <input
          v-model="form.zoomLink"
          type="url"
          class="input-field"
          placeholder="https://zoom.us/j/..."
        />
      </div>

      <div v-if="error" class="text-red-600 text-sm bg-red-50 p-3 rounded">
        {{ error }}
      </div>

      <div class="flex gap-3 pt-2">
        <button
          type="submit"
          class="btn-primary flex-1"
          :disabled="submitting"
        >
          {{ submitting ? 'Saving...' : (isEdit ? 'Update Meeting' : 'Create Meeting') }}
        </button>
        <button
          v-if="onCancel"
          type="button"
          class="btn-outline"
          @click="onCancel"
          :disabled="submitting"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Meeting {
  id?: string
  title: string
  description?: string
  startTime: string
  endTime: string
  location?: string
  zoomLink?: string
  courseId?: string
}

interface Props {
  meeting?: Meeting
  courseId: string
  onCancel?: () => void
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'submit', meeting: Meeting): void
  (e: 'success', meeting: Meeting): void
}>()

const isEdit = computed(() => !!props.meeting?.id)

const form = ref<Meeting>({
  title: '',
  description: '',
  startTime: '',
  endTime: '',
  location: '',
  zoomLink: '',
  courseId: props.courseId,
})

const submitting = ref(false)
const error = ref('')

// Initialize form with meeting data if editing
watch(() => props.meeting, (meeting) => {
  if (meeting) {
    form.value = {
      ...meeting,
      startTime: formatDateTimeLocal(meeting.startTime),
      endTime: formatDateTimeLocal(meeting.endTime),
    }
  }
}, { immediate: true })

const formatDateTimeLocal = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day}T${hours}:${minutes}`
}

const handleSubmit = async () => {
  error.value = ''
  
  // Validation
  if (new Date(form.value.endTime) <= new Date(form.value.startTime)) {
    error.value = 'End time must be after start time'
    return
  }

  submitting.value = true

  try {
    const url = isEdit.value ? `/api/meetings/${props.meeting?.id}` : '/api/meetings'
    const method = isEdit.value ? 'PUT' : 'POST'

    const response = await $fetch(url, {
      method,
      body: {
        ...form.value,
        courseId: props.courseId,
      },
    })

    if (response.success) {
      emit('success', response.meeting)
      if (!isEdit.value) {
        // Reset form for new meeting
        form.value = {
          title: '',
          description: '',
          startTime: '',
          endTime: '',
          location: '',
          zoomLink: '',
          courseId: props.courseId,
        }
      }
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to save meeting'
    console.error('Error saving meeting:', err)
  } finally {
    submitting.value = false
  }
}
</script>
