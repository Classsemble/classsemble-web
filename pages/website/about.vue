<template>
  <div class="about-page">
    <Navbar />

    <!-- Hero -->
    <section class="bg-gradient-to-br from-teal to-teal/80 text-white py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <Badge variant="lemon" size="lg" class="mb-4">ABOUT US</Badge>
        <h1 class="text-5xl md:text-6xl font-bold font-display mb-6">About Classsemble</h1>
        <p class="text-xl opacity-90">
          Empowering educators and students to collaborate more effectively
        </p>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <Badge variant="teal" size="lg" class="mb-4">OUR MISSION</Badge>
        <h2 class="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
          "Classsemble empowers educators and students to collaborate more effectively by bringing scheduling, communication, and analytics together in one seamless platform within Canvas LMS."
        </h2>
        <p class="text-xl text-gray-600">
          We believe that better collaboration leads to better learning outcomes and more engaged educational communities.
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold font-display text-gray-900 mb-6">Our Story</h2>
            <h3 class="text-xl font-semibold text-teal mb-4">Why We Built Classsemble</h3>
            <p class="text-gray-600 mb-4">
              Classsemble was born from a simple observation: students needed better ways to collaborate within Canvas LMS. 
              Traditional discussion boards weren't enough for real-time collaboration, and external tools created friction and security concerns.
            </p>
            <p class="text-gray-600 mb-4">
              We saw instructors struggling to track student engagement, students missing office hours because of scheduling conflicts, 
              and study groups falling apart due to poor coordination. The tools existed—calendars, video conferencing, chat—but they were all scattered across different platforms.
            </p>
            <p class="text-gray-600 mb-6">
              We built Classsemble to solve these problems—bringing modern collaboration tools directly into Canvas through 
              secure LTI 1.3 integration. No more switching between multiple platforms, no more lost passwords, no more data silos.
            </p>
            <div class="bg-lemon/30 border-l-4 border-teal p-6 rounded-r-lg">
              <p class="text-gray-700 italic">
                "Education technology should remove friction, not create it. That's the Classsemble promise."
              </p>
            </div>
          </div>
          <div class="bg-gradient-to-br from-teal/10 to-coral/10 rounded-2xl p-12 text-center">
            <img src="https://placehold.co/500x400/5CA4A9/ffffff?text=Team+Collaboration" alt="Team working together" class="rounded-lg mx-auto shadow-xl" />
          </div>
        </div>

        <!-- Values -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold font-display text-gray-900 mb-4">Our Values and Principles</h2>
            <p class="text-xl text-gray-600">The core beliefs that guide everything we do</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 mb-4 text-teal">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 class="text-xl font-bold font-display text-teal mb-2">Education First</h3>
              <p class="text-gray-600">
                We design every feature with students and educators in mind, prioritizing learning outcomes and pedagogical effectiveness above all else.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 mb-4 text-teal">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold font-display text-teal mb-2">Privacy & Security</h3>
              <p class="text-gray-600">
                Student data is sacred. We use industry-standard encryption, comply with FERPA and GDPR, and never sell or share your information.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 mb-4 text-teal">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold font-display text-teal mb-2">Continuous Innovation</h3>
              <p class="text-gray-600">
                We constantly evolve our platform based on user feedback, educational research, and emerging technologies to stay ahead of learning needs.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 mb-4 text-teal">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold font-display text-teal mb-2">Universal Accessibility</h3>
              <p class="text-gray-600">
                Education should be accessible to everyone. We follow WCAG 2.1 AA guidelines and design for all abilities, devices, and contexts.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 mb-4 text-teal">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold font-display text-teal mb-2">Partnership</h3>
              <p class="text-gray-600">
                We view our customers as partners, not just users. Your feedback shapes our roadmap, and your success defines our success.
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 mb-4 text-teal">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold font-display text-teal mb-2">Global Impact</h3>
              <p class="text-gray-600">
                We're committed to making quality education more collaborative and accessible worldwide, breaking down barriers across institutions and borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="coral" size="lg" class="mb-4">PRODUCT ROADMAP</Badge>
          <h2 class="text-4xl font-bold font-display text-gray-900 mb-4">
            What We're Building
          </h2>
          <p class="text-xl text-gray-600">Our journey to create the ultimate Canvas collaboration platform</p>
        </div>

        <!-- Recently Shipped -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div class="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mr-4">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold font-display text-gray-900">Recently Shipped</h3>
              <p class="text-gray-600">Features now live in production</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">LTI 1.3 Integration</h4>
              </div>
              <p class="text-sm text-gray-600">Secure, seamless Canvas integration with SSO</p>
            </div>
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Real-Time Chat</h4>
              </div>
              <p class="text-sm text-gray-600">Course-based chat with Socket.IO</p>
            </div>
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Google Calendar Sync</h4>
              </div>
              <p class="text-sm text-gray-600">Two-way calendar synchronization</p>
            </div>
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Zoom Integration</h4>
              </div>
              <p class="text-sm text-gray-600">One-click meeting link generation</p>
            </div>
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Email Notifications</h4>
              </div>
              <p class="text-sm text-gray-600">Automated meeting reminders</p>
            </div>
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Analytics Dashboard</h4>
              </div>
              <p class="text-sm text-gray-600">Engagement and participation metrics</p>
            </div>
          </div>
        </div>

        <!-- In Development -->
        <div class="mb-16">
          <div class="flex items-center mb-8">
            <div class="flex items-center justify-center w-12 h-12 bg-yellow-500 text-white rounded-full mr-4">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold font-display text-gray-900">In Development</h3>
              <p class="text-gray-600">Currently being built by our engineering team</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">File Sharing in Chat</h4>
              </div>
              <p class="text-sm text-gray-600">Upload and share documents, images, and files</p>
            </div>
            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Recurring Meetings</h4>
              </div>
              <p class="text-sm text-gray-600">Set weekly office hours and study sessions</p>
            </div>
            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Meeting Templates</h4>
              </div>
              <p class="text-sm text-gray-600">Save and reuse common meeting configurations</p>
            </div>
            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Mobile Apps</h4>
              </div>
              <p class="text-sm text-gray-600">Native iOS and Android applications</p>
            </div>
            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <h4 class="font-bold text-gray-900">Microsoft Teams</h4>
              </div>
              <p class="text-sm text-gray-600">Integration with Teams for video meetings</p>
            </div>
          </div>
        </div>

        <!-- Coming Soon -->
        <div>
          <div class="flex items-center mb-8">
            <div class="flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-full mr-4">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold font-display text-gray-900">Coming Soon</h3>
              <p class="text-gray-600">On our roadmap for future releases</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <h4 class="font-bold text-gray-900">AI Meeting Summaries</h4>
              </div>
              <p class="text-sm text-gray-600">Automatic transcription and key takeaways</p>
            </div>
            <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <h4 class="font-bold text-gray-900">Attendance Tracking</h4>
              </div>
              <p class="text-sm text-gray-600">Automatic attendance for meetings and chat</p>
            </div>
            <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <h4 class="font-bold text-gray-900">Assignment Integration</h4>
              </div>
              <p class="text-sm text-gray-600">Link meetings to Canvas assignments</p>
            </div>
            <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <h4 class="font-bold text-gray-900">Advanced Analytics Exports</h4>
              </div>
              <p class="text-sm text-gray-600">CSV and PDF reports for administrators</p>
            </div>
            <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <h4 class="font-bold text-gray-900">Private Messaging</h4>
              </div>
              <p class="text-sm text-gray-600">One-on-one DMs between course members</p>
            </div>
            <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <h4 class="font-bold text-gray-900">Breakout Rooms</h4>
              </div>
              <p class="text-sm text-gray-600">Create sub-groups for collaborative work</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="py-20 px-4 bg-gradient-to-r from-teal to-teal/90 text-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold font-display mb-4">Our Impact So Far</h2>
          <p class="text-xl opacity-90">Making a difference in education, one collaboration at a time</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold mb-2">500+</div>
            <div class="text-lg opacity-90">Institutions</div>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold mb-2">10K+</div>
            <div class="text-lg opacity-90">Active Users</div>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold mb-2">50K+</div>
            <div class="text-lg opacity-90">Meetings Scheduled</div>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold mb-2">1M+</div>
            <div class="text-lg opacity-90">Messages Sent</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Join Us in Transforming Education</h2>
        <p class="text-xl text-gray-600 mb-8">
          Be part of a community that's making Canvas LMS more collaborative and engaging
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="#signup">Start Free Trial</Button>
          <Button variant="outline" size="lg" to="/website/contact">Get in Touch</Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About - Classsemble',
  description: 'Learn about Classsemble\'s mission to empower educators and students with seamless collaboration tools within Canvas LMS. See our product roadmap and values.',
  ogTitle: 'About - Classsemble',
  ogDescription: 'Learn about Classsemble\'s mission to empower educators and students with seamless collaboration tools within Canvas LMS.',
})
</script>
