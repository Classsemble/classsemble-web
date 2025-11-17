<template>
  <div class="website-home">
    <Navbar />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-linen to-white py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left animate-fade-in">
            <h1 class="text-5xl md:text-6xl font-bold font-display text-teal mb-6 leading-tight">
              Streamline Collaboration in
              <span class="text-coral block mt-2">Canvas LMS</span>
            </h1>
            <p class="text-xl text-gray-700 mb-8 leading-relaxed">
              Empower students and instructors with integrated meeting scheduling, real-time chat, 
              and seamless calendar sync—all within Canvas.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" href="#signup">Start Free Trial</Button>
              <Button variant="outline" size="lg" href="#demo">Watch Demo</Button>
            </div>
            <p class="text-sm text-gray-500 mt-4">No credit card required • Free forever for small teams</p>
          </div>
          <div class="relative animate-slide-up">
            <div class="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://placehold.co/600x400/5CA4A9/ffffff?text=Classsemble+Dashboard" 
                alt="Classsemble Dashboard" 
                class="rounded-lg w-full"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-coral text-white p-4 rounded-lg shadow-lg">
              <div class="text-2xl font-bold">10,000+</div>
              <div class="text-sm">Meetings Scheduled</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Statement -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold font-display text-gray-900 mb-4">The Challenge</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional learning management systems lack the collaborative tools modern education demands
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Scattered Tools</h3>
            <p class="text-gray-600">Students juggle multiple platforms for scheduling, chat, and video calls</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Coordination Chaos</h3>
            <p class="text-gray-600">Organizing study groups and office hours is time-consuming and frustrating</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">No Visibility</h3>
            <p class="text-gray-600">Instructors lack insights into student engagement and collaboration</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Overview -->
    <section class="py-20 px-4 bg-gradient-to-br from-teal/5 to-lemon/20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="teal" size="lg" class="mb-4">THE SOLUTION</Badge>
          <h2 class="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
            One Platform, Endless Possibilities
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Classsemble brings scheduling, chat, and analytics together—seamlessly integrated into Canvas LMS
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div class="w-20 h-20 mx-auto mb-4 text-teal">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold font-display text-teal mb-3">Meeting Scheduler</h3>
            <p class="text-gray-600 mb-4">Coordinate study groups and office hours with visual calendar views</p>
            <ul class="text-left text-sm text-gray-600 space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Google Calendar sync
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Auto Zoom link generation
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Email reminders
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div class="w-20 h-20 mx-auto mb-4 text-teal">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold font-display text-teal mb-3">Real-Time Chat</h3>
            <p class="text-gray-600 mb-4">Collaborate instantly with coursemates through dedicated chat rooms</p>
            <ul class="text-left text-sm text-gray-600 space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Course-based rooms
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Message history
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Typing indicators
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div class="w-20 h-20 mx-auto mb-4 text-teal">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold font-display text-teal mb-3">Analytics Dashboard</h3>
            <p class="text-gray-600 mb-4">Track engagement and participation with detailed insights</p>
            <ul class="text-left text-sm text-gray-600 space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Attendance tracking
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Activity metrics
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Engagement reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Grid -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold font-display text-gray-900 mb-4">Powerful Features Built for Education</h2>
          <p class="text-xl text-gray-600">Everything you need to enhance collaboration in Canvas LMS</p>
        </div>
        <FeatureGrid>
          <FeatureItem 
            icon="<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' /></svg>" 
            title="LTI 1.3 Integration" 
            description="Seamless launch from Canvas with single sign-on. No separate logins required."
          />
          <FeatureItem 
            icon="<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>" 
            title="Smart Scheduling" 
            description="Create meetings with calendar view and automatic timezone support for global teams."
          />
          <FeatureItem 
            icon="<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' /></svg>" 
            title="Google Calendar Sync" 
            description="Auto-sync meetings to personal calendars with two-way updates."
          />
          <FeatureItem 
            icon="<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' /></svg>" 
            title="Zoom Integration" 
            description="One-click Zoom link generation with auto-populated meeting details."
          />
          <FeatureItem 
            icon="<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /></svg>" 
            title="Email Notifications" 
            description="Automated reminders and meeting updates sent at optimal times."
          />
          <FeatureItem 
            icon="<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' /></svg>" 
            title="Engagement Analytics" 
            description="Track participation and measure impact with detailed reports."
          />
        </FeatureGrid>
        <div class="text-center mt-12">
          <Button variant="secondary" size="lg" to="/website/features">Explore All Features →</Button>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="coral" size="lg" class="mb-4">TRUSTED BY EDUCATORS</Badge>
          <h2 class="text-4xl font-bold font-display text-gray-900 mb-4">
            Join 500+ Institutions Worldwide
          </h2>
          <p class="text-xl text-gray-600">See what students and instructors are saying about Classsemble</p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div class="text-center">
            <div class="text-5xl font-bold text-coral mb-2">10,000+</div>
            <div class="text-gray-600">Meetings Scheduled</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-coral mb-2">50,000+</div>
            <div class="text-gray-600">Messages Sent</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-coral mb-2">500+</div>
            <div class="text-gray-600">Institutions</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-coral mb-2">98%</div>
            <div class="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Dr. Sarah Johnson"
            role="Professor"
            institution="State University"
            quote="Classsemble has transformed how my students collaborate. Office hours attendance is up 40% and engagement has never been higher."
          />
          <TestimonialCard
            name="Michael Chen"
            role="Student"
            institution="Tech Institute"
            quote="Finally, a tool that makes scheduling study groups easy! I love having everything in Canvas instead of juggling multiple apps."
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Canvas Administrator"
            institution="Community College"
            quote="The LTI 1.3 integration was seamless. Our faculty and students were up and running in minutes. Highly recommend!"
          />
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold font-display text-gray-900 mb-4">Get Started in 3 Simple Steps</h2>
          <p class="text-xl text-gray-600">Set up Classsemble in your Canvas course in minutes</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="w-20 h-20 bg-teal rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 class="text-2xl font-bold font-display text-gray-900 mb-3">Install in Canvas</h3>
            <p class="text-gray-600">Add Classsemble as an LTI tool in your Canvas course settings. Takes less than 5 minutes.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-coral rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 class="text-2xl font-bold font-display text-gray-900 mb-3">Launch from Canvas</h3>
            <p class="text-gray-600">Students and instructors access Classsemble directly from course navigation with SSO.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-lemon rounded-full flex items-center justify-center text-gray-900 text-3xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 class="text-2xl font-bold font-display text-gray-900 mb-3">Start Collaborating</h3>
            <p class="text-gray-600">Schedule meetings, chat in real-time, and track engagement—all within Canvas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-4 bg-gradient-to-r from-teal to-teal/90 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Transform Collaboration?</h2>
        <p class="text-xl mb-8 opacity-90">
          Join thousands of educators using Classsemble to enhance student engagement
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button variant="primary" size="lg" href="#signup">Get Started Free</Button>
          <Button variant="outline" size="lg" href="/website/contact" class="!text-white !border-white hover:!bg-white hover:!text-teal">Contact Sales</Button>
        </div>
        <p class="text-sm opacity-75">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Classsemble - Streamline Collaboration in Canvas LMS',
  description: 'Empower students and instructors with integrated meeting scheduling, real-time chat, and seamless calendar sync—all within Canvas LMS.',
  ogTitle: 'Classsemble - Streamline Collaboration in Canvas LMS',
  ogDescription: 'Empower students and instructors with integrated meeting scheduling, real-time chat, and seamless calendar sync—all within Canvas LMS.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
