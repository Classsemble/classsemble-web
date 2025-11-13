<template>
  <div class="meeting-detail-page min-h-screen bg-gray-50 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p class="mt-4 text-gray-600">Loading meeting details...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <svg class="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-xl font-bold text-red-900 mb-2">Error Loading Meeting</h2>
        <p class="text-red-700 mb-4">{{ error }}</p>
        <button @click="navigateTo('/schedule')" class="btn-primary">
          Back to Schedule
        </button>
      </div>

      <!-- Meeting Details -->
      <div v-else-if="meeting" class="space-y-6">
        <!-- Header -->
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex justify-between items-start mb-4">
            <div class="flex-1">
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ meeting.title }}</h1>
              <div class="flex items-center gap-4 text-sm text-gray-600">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ formatDate(meeting.startTime) }}
                </span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ formatTime(meeting.startTime) }} - {{ formatTime(meeting.endTime) }}
                </span>
              </div>
            </div>
            
            <div v-if="canEdit" class="flex gap-2">
              <button @click="showEditForm = true" class="btn-outline">
                Edit
              </button>
              <button @click="handleDelete" class="btn-outline text-red-600 border-red-600 hover:bg-red-50">
                Delete
              </button>
            </div>
          </div>

          <p v-if="meeting.description" class="text-gray-700 mb-4">
            {{ meeting.description }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div v-if="meeting.location" class="flex items-start gap-2">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Location</p>
                <p class="text-sm text-gray-600">{{ meeting.location }}</p>
              </div>
            </div>

            <div v-if="meeting.creator" class="flex items-start gap-2">
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-900">Organizer</p>
                <p class="text-sm text-gray-600">{{ meeting.creator.name }}</p>
              </div>
            </div>
          </div>

          <div v-if="meeting.zoomLink" class="mt-6 pt-6 border-t">
            <a
              :href="meeting.zoomLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Join Zoom Meeting
            </a>
          </div>
        </div>

        <!-- Attendees -->
        <div v-if="meeting.attendees && meeting.attendees.length > 0" class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Attendees ({{ meeting.attendees.length }})</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="attendee in meeting.attendees"
              :key="attendee.id"
              class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <div class="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold">
                {{ getInitials(attendee.name) }}
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ attendee.name }}</p>
                <p v-if="attendee.email" class="text-sm text-gray-500">{{ attendee.email }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Back Button -->
        <div class="text-center">
          <button @click="navigateTo('/schedule')" class="btn-outline">
            ← Back to Schedule
          </button>
        </div>
      </div>
    </div>

    <!-- Edit Form Modal -->
    <div
      v-if="showEditForm"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="showEditForm = false"
    >
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <MeetingForm
            :meeting="meeting"
            :course-id="meeting.courseId"
            :on-cancel="() => showEditForm = false"
            @success="handleEditSuccess"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const meetingId = route.params.id as string

const meeting = ref<any>(null)
const loading = ref(true)
const error = ref('')
const showEditForm = ref(false)
const currentUserId = ref('')
const userRole = ref('')

const canEdit = computed(() => {
  return meeting.value && (
    meeting.value.createdBy === currentUserId.value ||
    userRole.value === 'instructor'
  )
})

onMounted(async () => {
  try {
    // Check session
    const sessionResponse = await $fetch('/api/auth/session')
    if (!sessionResponse.authenticated) {
      navigateTo('/website')
      return
    }
    
    currentUserId.value = sessionResponse.user.id
    userRole.value = sessionResponse.user.role

    // Fetch meeting details
    await loadMeeting()
  } catch (err: any) {
    error.value = err.data?.message || 'Failed to load meeting'
    console.error('Error loading meeting:', err)
  } finally {
    loading.value = false
  }
})

const loadMeeting = async () => {
  try {
    const response = await $fetch(`/api/meetings/${meetingId}`)
    if (response.success) {
      meeting.value = response.meeting
    }
  } catch (err: any) {
    throw err
  }
}

const handleEditSuccess = async () => {
  showEditForm.value = false
  await loadMeeting()
}

const handleDelete = async () => {
  if (!confirm('Are you sure you want to delete this meeting?')) return

  try {
    await $fetch(`/api/meetings/${meetingId}`, { method: 'DELETE' })
    navigateTo('/schedule')
  } catch (err: any) {
    alert('Failed to delete meeting: ' + (err.data?.message || 'Unknown error'))
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatTime = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  })
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
</script>
