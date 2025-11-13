<template>
  <div class="dashboard min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back, {{ user?.name }}!</h1>
        <p class="text-gray-600">Here's what's happening in your course</p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="card">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Upcoming Meetings</p>
              <p class="text-3xl font-bold text-primary-600">{{ upcomingMeetings.length }}</p>
            </div>
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Unread Messages</p>
              <p class="text-3xl font-bold text-secondary-600">{{ unreadCount }}</p>
            </div>
            <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Course Members</p>
              <p class="text-3xl font-bold text-green-600">{{ memberCount }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Upcoming Meetings -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-gray-900">Upcoming Meetings</h2>
              <NuxtLink to="/schedule" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                View Calendar →
              </NuxtLink>
            </div>

            <div v-if="upcomingMeetings.length > 0" class="space-y-4">
              <MeetingCard
                v-for="meeting in upcomingMeetings.slice(0, 3)"
                :key="meeting.id"
                :meeting="meeting"
                @click="navigateTo(`/meeting/${meeting.id}`)"
              />
            </div>

            <div v-else class="text-center py-8 text-gray-500">
              <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="mb-2">No upcoming meetings</p>
              <NuxtLink to="/schedule" class="btn-primary inline-block">
                Schedule a Meeting
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Recent Messages -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-gray-900">Recent Messages</h2>
              <NuxtLink to="/chat" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Open Chat →
              </NuxtLink>
            </div>

            <div v-if="recentMessages.length > 0" class="space-y-4">
              <div
                v-for="message in recentMessages.slice(0, 5)"
                :key="message.id"
                class="border-b pb-3 last:border-b-0"
              >
                <div class="flex items-start gap-2">
                  <div class="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    {{ getInitials(message.user.name) }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-gray-900">{{ message.user.name }}</p>
                    <p class="text-sm text-gray-600 truncate">{{ message.content }}</p>
                    <p class="text-xs text-gray-400 mt-1">{{ formatTime(message.timestamp) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="text-center py-8 text-gray-500">
              <p class="mb-2">No messages yet</p>
              <NuxtLink to="/chat" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Start chatting →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = ref<any>(null)
const upcomingMeetings = ref<any[]>([])
const recentMessages = ref<any[]>([])
const unreadCount = ref(0)
const memberCount = ref(0)

// Fetch session and data
onMounted(async () => {
  try {
    // Check session
    const sessionResponse = await $fetch('/api/auth/session')
    if (!sessionResponse.authenticated) {
      navigateTo('/website')
      return
    }
    
    user.value = sessionResponse.user

    // Fetch meetings
    const meetingsResponse = await $fetch('/api/meetings')
    if (meetingsResponse.success) {
      const now = new Date()
      upcomingMeetings.value = meetingsResponse.meetings
        .filter((m: any) => new Date(m.startTime) > now)
        .sort((a: any, b: any) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
    }

    // Fetch recent messages
    if (sessionResponse.courseId) {
      const messagesResponse = await $fetch(`/api/chat/${sessionResponse.courseId}?limit=5`)
      if (messagesResponse.success) {
        recentMessages.value = messagesResponse.messages
      }
    }

    // Mock data for stats (replace with actual API calls)
    unreadCount.value = 3
    memberCount.value = 24
  } catch (error) {
    console.error('Error loading dashboard:', error)
  }
})

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))

  if (hours < 1) return 'Just now'
  if (hours < 24) return `${hours}h ago`
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
</script>
