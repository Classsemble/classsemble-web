<template>
  <div class="calendar-view">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { CalendarOptions, EventClickArg, DateSelectArg } from '@fullcalendar/core'

interface Meeting {
  id: string
  title: string
  startTime: string
  endTime: string
  description?: string
  location?: string
  zoomLink?: string
}

interface Props {
  meetings: Meeting[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'eventClick', meeting: Meeting): void
  (e: 'dateSelect', start: Date, end: Date): void
}>()

const calendarOptions = computed<CalendarOptions>(() => ({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  events: props.meetings.map(meeting => ({
    id: meeting.id,
    title: meeting.title,
    start: meeting.startTime,
    end: meeting.endTime,
    extendedProps: {
      description: meeting.description,
      location: meeting.location,
      zoomLink: meeting.zoomLink,
    }
  })),
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  eventClick: (info: EventClickArg) => {
    const meeting = props.meetings.find(m => m.id === info.event.id)
    if (meeting) {
      emit('eventClick', meeting)
    }
  },
  select: (info: DateSelectArg) => {
    emit('dateSelect', info.start, info.end)
  },
  eventColor: '#0ea5e9',
  height: 'auto',
}))
</script>

<style scoped>
.calendar-view {
  @apply bg-white rounded-lg shadow p-4;
}

:deep(.fc) {
  font-family: inherit;
}

:deep(.fc-button-primary) {
  @apply bg-primary-600 border-primary-600 hover:bg-primary-700;
}

:deep(.fc-button-primary:not(:disabled):active),
:deep(.fc-button-primary:not(:disabled).fc-button-active) {
  @apply bg-primary-800 border-primary-800;
}

:deep(.fc-event) {
  @apply cursor-pointer;
}

:deep(.fc-event:hover) {
  @apply opacity-80;
}
</style>
