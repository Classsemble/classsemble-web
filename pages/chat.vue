<template>
  <div class="chat-page min-h-screen bg-linen p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-teal mb-2">Course Chat</h1>
        <p class="text-ash">Connect with your classmates in real-time</p>
      </div>

      <!-- Chat Container -->
      <div class="bg-lemon rounded-lg shadow-lg" style="height: calc(100vh - 200px);">
        <ChatBox
          v-if="courseId && currentUserId"
          :course-id="courseId"
          :course-name="courseName"
          :current-user-id="currentUserId"
          :online-count="onlineCount"
          @messageSent="handleMessageSent"
        />
        <div v-else class="flex items-center justify-center h-full text-teal">
          Loading chat...
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const courseId = ref('')
const courseName = ref('')
const currentUserId = ref('')
const onlineCount = ref(0)

onMounted(async () => {
  try {
    // Check session
    const sessionResponse = await $fetch('/api/auth/session')
    if (!sessionResponse.authenticated) {
      navigateTo('/website')
      return
    }
    
    courseId.value = sessionResponse.courseId
    currentUserId.value = sessionResponse.user.id
    courseName.value = 'Course Chat' // Could fetch course name from API

    // TODO: Initialize Socket.IO connection for real-time updates
    // initializeSocket()
    
    // Mock online count (replace with actual Socket.IO data)
    onlineCount.value = Math.floor(Math.random() * 20) + 5
  } catch (error) {
    console.error('Error loading chat:', error)
  }
})

const handleMessageSent = (message: any) => {
  console.log('Message sent:', message)
  // Could trigger notifications or other side effects
}

// TODO: Initialize Socket.IO for real-time chat
// const initializeSocket = () => {
//   const socket = io()
//   socket.on('connect', () => {
//     socket.emit('join-course', courseId.value)
//   })
//   socket.on('new-message', (message) => {
//     // Handle new message from other users
//   })
//   socket.on('user-count', (count) => {
//     onlineCount.value = count
//   })
// }

onBeforeUnmount(() => {
  // TODO: Disconnect Socket.IO
  // socket.disconnect()
})
</script>
