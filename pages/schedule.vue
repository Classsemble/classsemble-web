<template>
  <div class="schedule-page min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Meeting Schedule</h1>
          <p class="text-gray-600">View and manage your course meetings</p>
        </div>
        <button @click="showCreateForm = true" class="btn-primary">
          <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Schedule Meeting
        </button>
      </div>

      <!-- Calendar View -->
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <CalendarView
          :meetings="meetings"
          @eventClick="handleEventClick"
          @dateSelect="handleDateSelect"
        />
      </div>

      <!-- All Meetings List -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4">All Meetings</h2>
        
        <div v-if="meetings.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MeetingCard
            v-for="meeting in meetings"
            :key="meeting.id"
            :meeting="meeting"
            @click="navigateTo(`/meeting/${meeting.id}`)"
          />
        </div>

        <div v-else class="text-center py-12 text-gray-500">
          <svg class="w-20 h-20 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-lg mb-2">No meetings scheduled yet</p>
          <p class="text-sm mb-4">Create your first meeting to get started</p>
          <button @click="showCreateForm = true" class="btn-primary">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </div>

    <!-- Create/Edit Meeting Modal -->
    <div
      v-if="showCreateForm"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="closeForm"
    >
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <MeetingForm
            :course-id="courseId"
            :meeting="selectedMeeting"
            :on-cancel="closeForm"
            @success="handleMeetingCreated"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const meetings = ref<any[]>([])
const showCreateForm = ref(false)
const selectedMeeting = ref<any>(null)
const courseId = ref('')

onMounted(async () => {
  try {
    // Check session
    const sessionResponse = await $fetch('/api/auth/session')
    if (!sessionResponse.authenticated) {
      navigateTo('/website')
      return
    }
    
    courseId.value = sessionResponse.courseId

    // Fetch meetings
    await loadMeetings()
  } catch (error) {
    console.error('Error loading schedule:', error)
  }
})

const loadMeetings = async () => {
  try {
    const response = await $fetch('/api/meetings')
    if (response.success) {
      meetings.value = response.meetings
    }
  } catch (error) {
    console.error('Error fetching meetings:', error)
  }
}

const handleEventClick = (meeting: any) => {
  navigateTo(`/meeting/${meeting.id}`)
}

const handleDateSelect = (start: Date, end: Date) => {
  selectedMeeting.value = {
    startTime: start.toISOString(),
    endTime: end.toISOString(),
  }
  showCreateForm.value = true
}

const handleMeetingCreated = async () => {
  showCreateForm.value = false
  selectedMeeting.value = null
  await loadMeetings()
}

const closeForm = () => {
  showCreateForm.value = false
  selectedMeeting.value = null
}
</script>
