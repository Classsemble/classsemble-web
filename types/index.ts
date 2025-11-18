// User and Authentication Types
export interface User {
  id: string
  canvasId: string
  name: string
  role: 'instructor' | 'student' | 'user'
  email?: string
  createdAt: Date
  updatedAt: Date
}

export interface LtiSession {
  id: string
  userId: string
  canvasId: string
  courseId: string
  role: string
  sessionToken: string
  ltiMessageType?: string
  deploymentId?: string
  expiresAt: Date
  createdAt: Date
}

export interface AuthSession {
  authenticated: boolean
  user?: User
  courseId?: string
}

// Meeting Types
export interface Meeting {
  id: string
  courseId: string
  title: string
  description?: string
  startTime: Date | string
  endTime: Date | string
  location?: string
  zoomLink?: string
  googleEventId?: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
  creator?: User
  attendees?: User[]
}

export interface CreateMeetingRequest {
  title: string
  description?: string
  startTime: string
  endTime: string
  location?: string
  zoomLink?: string
}

export interface UpdateMeetingRequest extends Partial<CreateMeetingRequest> {
  id: string
}

// Message Types
export interface Message {
  id: string
  courseId: string
  userId: string
  content: string
  timestamp: Date | string
  edited: boolean
  editedAt?: Date | string
  user: Pick<User, 'id' | 'name' | 'role'>
}

export interface CreateMessageRequest {
  content: string
}

// Course Types
export interface Course {
  id: string
  canvasId: string
  name: string
  code?: string
  term?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface MeetingsResponse {
  success: boolean
  meetings: Meeting[]
}

export interface MessagesResponse {
  success: boolean
  messages: Message[]
}

export interface MeetingResponse {
  success: boolean
  meeting: Meeting
}

export interface MessageResponse {
  success: boolean
  message: Message
}

// Component Props Types
export interface MeetingCardProps {
  meeting: Meeting
}

export interface ChatBoxProps {
  courseId: string
  courseName?: string
  currentUserId: string
  onlineCount?: number
}

export interface CalendarViewProps {
  meetings: Meeting[]
}

export interface MeetingFormProps {
  courseId: string
  meeting?: Partial<Meeting>
  onCancel: () => void
}

// Socket.IO Types
export interface SocketEvents {
  // Client to Server
  'join-course': (courseId: string) => void
  'leave-course': (courseId: string) => void
  'send-message': (data: { courseId: string; content: string }) => void
  'typing-start': (data: { courseId: string; userId: string }) => void
  'typing-stop': (data: { courseId: string; userId: string }) => void

  // Server to Client
  'new-message': (message: Message) => void
  'user-joined': (data: { userId: string; userName: string }) => void
  'user-left': (data: { userId: string; userName: string }) => void
  'user-typing': (data: { userId: string; userName: string }) => void
  'user-stopped-typing': (data: { userId: string; userName: string }) => void
  'online-count': (count: number) => void
}

// Calendar Event Types
export interface CalendarEvent {
  id: string
  title: string
  start: string
  end: string
  extendedProps?: {
    description?: string
    location?: string
    zoomLink?: string
  }
}

// Form Validation Types
export interface ValidationError {
  field: string
  message: string
}

export interface FormErrors {
  [key: string]: string | undefined
}

// LTI Types
export interface LtiClaims {
  sub: string // user ID
  name: string
  email?: string
  'https://purl.imsglobal.org/spec/lti/claim/roles': string[]
  'https://purl.imsglobal.org/spec/lti/claim/context': {
    id: string
    label: string
    title: string
  }
  'https://purl.imsglobal.org/spec/lti/claim/deployment_id': string
  'https://purl.imsglobal.org/spec/lti/claim/message_type': string
}

// Analytics Types
export interface EngagementMetrics {
  totalMessages: number
  totalMeetings: number
  activeUsers: number
  averageSessionDuration: number
}

export interface UsageStats {
  daily: Record<string, number>
  weekly: Record<string, number>
  monthly: Record<string, number>
}

// Utility Types
export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
export type UserRole = User['role']
export type MessageStatus = 'sending' | 'sent' | 'failed'
export type MeetingStatus = 'upcoming' | 'ongoing' | 'past' | 'cancelled'

// Prisma-generated types (these would be auto-generated)
export type { User as PrismaUser, Meeting as PrismaMeeting, Message as PrismaMessage } from '@prisma/client'