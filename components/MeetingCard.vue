<template>
  <div class="meeting-card card hover:shadow-2xl transition-all cursor-pointer" @click="handleClick">
    <div class="flex justify-between items-start mb-3">
      <h4 class="text-lg font-semibold text-gray-900">{{ meeting.title }}</h4>
      <span 
        :class="['status-badge', getStatusClass()]"
      >
        {{ getStatus() }}
      </span>
    </div>

    <p v-if="meeting.description" class="text-gray-600 text-sm mb-3 line-clamp-2">
      {{ meeting.description }}
    </p>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{{ formatDate(meeting.startTime) }}</span>
      </div>

      <div class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ formatTime(meeting.startTime) }} - {{ formatTime(meeting.endTime) }}</span>
      </div>

      <div v-if="meeting.location" class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{{ meeting.location }}</span>
      </div>

      <div v-if="meeting.creator" class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>Organized by {{ meeting.creator.name }}</span>
      </div>

      <div v-if="meeting.attendees && meeting.attendees.length > 0" class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>{{ meeting.attendees.length }} attendee{{ meeting.attendees.length !== 1 ? 's' : '' }}</span>
      </div>
    </div>

    <div v-if="meeting.zoomLink" class="mt-4 pt-4 border-t">
      <a
        :href="meeting.zoomLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
        @click.stop
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Join Zoom Meeting
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Meeting {
  id: string
  title: string
  description?: string
  startTime: string
  endTime: string
  location?: string
  zoomLink?: string
  creator?: {
    id: string
    name: string
    email?: string
  }
  attendees?: Array<{
    id: string
    name: string
    email?: string
  }>
}

interface Props {
  meeting: Meeting
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'click', meeting: Meeting): void
}>()

const handleClick = () => {
  emit('click', props.meeting)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
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

const getStatus = () => {
  const now = new Date()
  const start = new Date(props.meeting.startTime)
  const end = new Date(props.meeting.endTime)

  if (now > end) return 'Past'
  if (now >= start && now <= end) return 'Ongoing'
  
  const hoursUntil = (start.getTime() - now.getTime()) / (1000 * 60 * 60)
  if (hoursUntil < 1) return 'Starting Soon'
  
  return 'Upcoming'
}

const getStatusClass = () => {
  const status = getStatus()
  
  switch (status) {
    case 'Past':
      return 'bg-gray-200 text-gray-700'
    case 'Ongoing':
      return 'bg-green-100 text-green-700'
    case 'Starting Soon':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-blue-100 text-blue-700'
  }
}
</script>

<style scoped>
.status-badge {
  @apply px-2 py-1 rounded-full text-xs font-semibold;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
