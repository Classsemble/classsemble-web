# Classsemble - Canvas LMS LTI 1.3 Integration

![Classsemble Logo](https://placehold.co/600x200/0ea5e9/ffffff?text=Classsemble)

**Collaborate, Schedule, and Connect Inside Canvas**

Classsemble is a full-stack Canvas LMS LTI 1.3 integration that provides student collaboration, meeting scheduling, and real-time chat capabilities. Built with Nuxt 3, TypeScript, Tailwind CSS, PostgreSQL, and Prisma.

## 🌟 Features

### LTI Application
- **Canvas LTI 1.3 Integration** - Secure authentication and course integration
- **Meeting Scheduler** - Interactive calendar with FullCalendar
- **Real-Time Chat** - Course-specific chat with Socket.IO
- **Meeting Management** - Create, edit, delete meetings with Zoom integration
- **User Dashboard** - Overview of upcoming meetings and recent messages
- **Responsive Design** - Mobile-first UI with Tailwind CSS

### Organization Website
- **Landing Page** - Hero section with features and CTAs
- **Features Page** - Detailed feature descriptions
- **Pricing Plans** - Free, Premium, and Enterprise tiers
- **About Page** - Company story and values
- **Contact Page** - Contact form and information

## 🏗️ Tech Stack

- **Frontend**: Nuxt 3, Vue 3, TypeScript, Tailwind CSS
- **Backend**: Nuxt Server Runtime (Nitro)
- **Database**: PostgreSQL with Prisma ORM
- **LTI Integration**: ltijs for LTI 1.3
- **Real-Time**: Socket.IO (planned)
- **Calendar**: FullCalendar Vue component
- **Deployment**: Docker & Docker Compose

## 📂 Project Structure

```
classsemble-web/
├── assets/
│   └── css/
│       └── main.css          # Global styles with Tailwind
├── components/
│   ├── CalendarView.vue      # FullCalendar component
│   ├── ChatBox.vue           # Real-time chat component
│   ├── MeetingForm.vue       # Create/edit meeting form
│   ├── MeetingCard.vue       # Meeting display card
│   ├── Navbar.vue            # Website navigation
│   ├── Footer.vue            # Website footer
│   ├── FeatureCard.vue       # Feature display card
│   ├── PlanCard.vue          # Pricing plan card
│   └── ContactForm.vue       # Contact form
├── pages/
│   ├── index.vue             # LTI Dashboard
│   ├── schedule.vue          # Meeting calendar
│   ├── chat.vue              # Course chat
│   ├── meeting/
│   │   └── [id].vue          # Meeting details
│   └── website/
│       ├── index.vue         # Website home
│       ├── features.vue      # Features page
│       ├── plans.vue         # Pricing page
│       ├── about.vue         # About page
│       └── contact.vue       # Contact page
├── server/
│   ├── api/
│   │   ├── lti/
│   │   │   ├── launch.post.ts    # LTI launch handler
│   │   │   └── config.get.ts     # LTI configuration
│   │   ├── auth/
│   │   │   └── session.get.ts    # Session check
│   │   ├── meetings/
│   │   │   ├── index.get.ts      # List meetings
│   │   │   ├── index.post.ts     # Create meeting
│   │   │   ├── [id].get.ts       # Get meeting
│   │   │   ├── [id].put.ts       # Update meeting
│   │   │   └── [id].delete.ts    # Delete meeting
│   │   ├── chat/
│   │   │   ├── [courseId].get.ts # Get messages
│   │   │   └── [courseId].post.ts# Send message
│   │   ├── grades/
│   │   │   └── index.post.ts     # Submit grades
│   │   └── health.get.ts         # Health check
│   └── utils/
│       ├── prisma.ts         # Prisma client
│       └── lti.ts            # LTI utilities
├── prisma/
│   └── schema.prisma         # Database schema
├── Dockerfile                # Docker configuration
├── docker-compose.yml        # Docker Compose setup
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- PostgreSQL 12+ (or use Docker)
- Canvas LMS instance with admin access
- (Optional) Google Cloud account for Calendar integration
- (Optional) Zoom account for video integration

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Classsemble/classsemble-web.git
   cd classsemble-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/classsemble_db"
   LTI_KEYSET_URL="https://canvas.instructure.com/api/lti/security/jwks"
   LTI_CLIENT_ID="your_canvas_client_id"
   LTI_DEPLOYMENT_ID="your_deployment_id"
   LTI_PRIVATE_KEY="your_private_key"
   JWT_SECRET="your_jwt_secret"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npm run prisma:generate
   
   # Run migrations
   npm run prisma:migrate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at http://localhost:3000

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Create `.env` file** with your configuration

2. **Build and start containers**
   ```bash
   npm run docker:build
   npm run docker:up
   ```

3. **Run database migrations**
   ```bash
   docker-compose exec app npx prisma migrate deploy
   ```

4. **Access the application**
   - App: http://localhost:3000
   - Database: localhost:5432

5. **Stop containers**
   ```bash
   npm run docker:down
   ```

### Manual Docker Build

```bash
# Build image
docker build -t classsemble-web .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="your_database_url" \
  -e LTI_CLIENT_ID="your_client_id" \
  classsemble-web
```

## 🎓 Canvas LTI 1.3 Setup

### Step 1: Generate LTI Keys

1. Generate RSA key pair:
   ```bash
   openssl genrsa -out private.key 2048
   openssl rsa -in private.key -pubout -out public.key
   ```

2. Copy `private.key` content to your `.env` file as `LTI_PRIVATE_KEY`

### Step 2: Register in Canvas

1. Log in to Canvas as admin
2. Go to **Admin** → **Developer Keys** → **+ Developer Key** → **+ LTI Key**

3. Configure the LTI key:
   - **Key Name**: Classsemble
   - **Redirect URIs**: `https://your-domain.com/api/lti/launch`
   - **Method**: Manual Entry
   - **Title**: Classsemble
   - **Target Link URI**: `https://your-domain.com/api/lti/launch`
   - **OpenID Connect Initiation URL**: `https://your-domain.com/api/lti/oidc`
   - **JWK Method**: Public JWK URL
   - **Public JWK URL**: `https://your-domain.com/api/lti/jwks`
   
4. **LTI Advantage Services**:
   - ✅ Can retrieve user data
   - ✅ Can lookup Account information
   - ✅ Can create and view assignment data (AGS)

5. **Placements**:
   - ✅ Course Navigation
   - Target Link URI: `https://your-domain.com/api/lti/launch`
   - Custom Fields: `user_id=$Canvas.user.id`

6. **Save** and copy the **Client ID**

### Step 3: Configure Your App

Update `.env`:
```env
LTI_CLIENT_ID="<client_id_from_canvas>"
LTI_DEPLOYMENT_ID="<deployment_id_from_canvas>"
```

### Step 4: Enable in Course

1. Go to your Canvas course
2. **Settings** → **Navigation**
3. Find "Classsemble" and drag to visible area
4. **Save**

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `LTI_KEYSET_URL` | Canvas JWKS URL | Yes |
| `LTI_CLIENT_ID` | Canvas developer key client ID | Yes |
| `LTI_DEPLOYMENT_ID` | Canvas deployment ID | Yes |
| `LTI_PRIVATE_KEY` | RSA private key for LTI | Yes |
| `JWT_SECRET` | Secret for session tokens | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | No |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret | No |
| `ZOOM_API_KEY` | Zoom API key | No |
| `ZOOM_API_SECRET` | Zoom API secret | No |
| `SOCKET_PORT` | Socket.IO port | No |

### Database Schema

The Prisma schema includes:
- **User**: Canvas users with roles
- **Meeting**: Scheduled meetings with attendees
- **Message**: Chat messages per course
- **Course**: Canvas courses
- **LtiSession**: LTI session management

View full schema: `prisma/schema.prisma`

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Database
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run migrations
npm run prisma:studio    # Open Prisma Studio

# Docker
npm run docker:build     # Build Docker images
npm run docker:up        # Start Docker containers
npm run docker:down      # Stop Docker containers
```

## 🧪 Testing

```bash
# Unit tests (to be implemented)
npm test

# E2E tests (to be implemented)
npm run test:e2e
```

## 📚 API Documentation

### LTI Endpoints

- `POST /api/lti/launch` - Handle LTI launch requests
- `GET /api/lti/config` - Get LTI configuration
- `GET /api/auth/session` - Check session status

### Meeting Endpoints

- `GET /api/meetings` - List all meetings
- `POST /api/meetings` - Create new meeting
- `GET /api/meetings/:id` - Get meeting details
- `PUT /api/meetings/:id` - Update meeting
- `DELETE /api/meetings/:id` - Delete meeting

### Chat Endpoints

- `GET /api/chat/:courseId` - Get messages for course
- `POST /api/chat/:courseId` - Send message

### Grades Endpoint

- `POST /api/grades` - Submit grade to Canvas (via AGS)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.classsemble.com](https://docs.classsemble.com)
- **Email**: support@classsemble.com
- **Issues**: [GitHub Issues](https://github.com/Classsemble/classsemble-web/issues)

## 🙏 Acknowledgments

- Canvas LMS for their excellent LTI documentation
- ltijs library for LTI 1.3 implementation
- FullCalendar for the calendar component
- Nuxt and Vue teams for the amazing framework

## 🗺️ Roadmap

- [ ] Socket.IO real-time chat implementation
- [ ] Google Calendar sync
- [ ] Zoom meeting auto-creation
- [ ] Assignment integration with Canvas AGS
- [ ] Mobile apps (iOS/Android)
- [ ] Analytics dashboard
- [ ] Attendance tracking
- [ ] Breakout rooms
- [ ] File sharing in chat
- [ ] @mentions and notifications

---

**Made with ❤️ for better education**