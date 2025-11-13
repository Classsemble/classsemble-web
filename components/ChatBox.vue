<template>
  <div class="chat-box flex flex-col h-full">
    <!-- Chat Header -->
    <div class="chat-header bg-primary-600 text-white p-4 rounded-t-lg">
      <h3 class="text-lg font-semibold">{{ courseName || 'Course Chat' }}</h3>
      <p class="text-sm opacity-90">{{ onlineCount }} online</p>
    </div>

    <!-- Messages Container -->
    <div 
      ref="messagesContainer"
      class="messages-container flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
    >
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['message', isCurrentUser(message.userId) ? 'message-own' : 'message-other']"
      >
        <div class="message-header flex items-center gap-2 mb-1">
          <div class="avatar">
            {{ getInitials(message.user.name) }}
          </div>
          <div class="flex-1">
            <span class="font-semibold text-sm">{{ message.user.name }}</span>
            <span class="text-xs text-gray-500 ml-2">{{ formatTime(message.timestamp) }}</span>
          </div>
        </div>
        <div class="message-content bg-white rounded-lg p-3 shadow-sm">
          {{ message.content }}
        </div>
      </div>

      <div v-if="messages.length === 0" class="text-center text-gray-500 py-8">
        No messages yet. Start the conversation!
      </div>
    </div>

    <!-- Input Area -->
    <div class="chat-input bg-white p-4 border-t rounded-b-lg">
      <form @submit.prevent="sendMessage" class="flex gap-2">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type your message..."
          class="input-field flex-1"
          :disabled="sending"
        />
        <button
          type="submit"
          class="btn-primary"
          :disabled="!newMessage.trim() || sending"
        >
          <span v-if="!sending">Send</span>
          <span v-else>Sending...</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

interface Message {
  id: string
  courseId: string
  userId: string
  content: string
  timestamp: string
  user: {
    id: string
    name: string
    role: string
  }
}

interface Props {
  courseId: string
  courseName?: string
  currentUserId: string
  onlineCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  onlineCount: 0
})

const emit = defineEmits<{
  (e: 'messageSent', message: Message): void
}>()

const messages = ref<Message[]>([])
const newMessage = ref('')
const sending = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

// Fetch messages
const fetchMessages = async () => {
  try {
    const response = await $fetch(`/api/chat/${props.courseId}`)
    if (response.success) {
      messages.value = response.messages
      await nextTick()
      scrollToBottom()
    }
  } catch (error) {
    console.error('Error fetching messages:', error)
  }
}

// Send message
const sendMessage = async () => {
  if (!newMessage.value.trim() || sending.value) return

  sending.value = true
  try {
    const response = await $fetch(`/api/chat/${props.courseId}`, {
      method: 'POST',
      body: {
        content: newMessage.value,
      },
    })

    if (response.success) {
      messages.value.push(response.message)
      emit('messageSent', response.message)
      newMessage.value = ''
      await nextTick()
      scrollToBottom()
    }
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    sending.value = false
  }
}

// Utility functions
const isCurrentUser = (userId: string) => userId === props.currentUserId

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

  if (hours < 24) {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// Load messages on mount
onMounted(() => {
  fetchMessages()
})

// Watch for course changes
watch(() => props.courseId, () => {
  fetchMessages()
})
</script>

<style scoped>
.chat-box {
  @apply border rounded-lg overflow-hidden;
  min-height: 500px;
  max-height: 700px;
}

.messages-container {
  scroll-behavior: smooth;
}

.message-own {
  @apply flex flex-col items-end;
}

.message-own .message-content {
  @apply bg-primary-100 border border-primary-200;
}

.message-other {
  @apply flex flex-col items-start;
}

.avatar {
  @apply w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-semibold;
}
</style>
