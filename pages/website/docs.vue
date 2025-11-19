<template>
  <div class="docs-page">
    <Navbar />

    <!-- Hero -->
    <section class="bg-gradient-to-br from-teal to-teal/80 text-white py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-4xl">
          <Badge variant="lemon" size="lg" class="mb-4">DOCUMENTATION</Badge>
          <h1 class="text-5xl md:text-6xl font-bold font-display mb-6">Classsemble Documentation</h1>
          <p class="text-xl opacity-90 mb-8">
            Everything you need to get started with Classsemble - from installation to advanced features
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" href="#getting-started">Get Started</Button>
            <Button variant="outline" size="lg" href="#api-reference">API Reference</Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Search and Navigation -->
    <section class="py-8 px-4 bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div class="flex-1 w-full md:max-w-md">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search documentation..." 
                class="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:border-teal focus:outline-none"
              />
              <svg class="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div class="flex gap-2">
            <Badge variant="teal">Version 1.0</Badge>
            <Badge variant="success">Updated Nov 2025</Badge>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- Sidebar Navigation -->
        <aside class="lg:col-span-1">
          <div class="sticky top-32 bg-white rounded-xl shadow-md p-6">
            <h3 class="font-bold text-gray-900 mb-4 font-display">Contents</h3>
            <nav class="space-y-2">
              <a href="#getting-started" class="block text-teal hover:text-coral transition-colors py-2 border-l-2 border-teal pl-4">Getting Started</a>
              <a href="#installation" class="block text-gray-600 hover:text-teal transition-colors py-2 pl-4">Installation</a>
              <a href="#configuration" class="block text-gray-600 hover:text-teal transition-colors py-2 pl-4">Configuration</a>
              <a href="#features" class="block text-gray-600 hover:text-teal transition-colors py-2 pl-4">Features</a>
              <a href="#api-reference" class="block text-gray-600 hover:text-teal transition-colors py-2 pl-4">API Reference</a>
              <a href="#integrations" class="block text-gray-600 hover:text-teal transition-colors py-2 pl-4">Integrations</a>
              <a href="#troubleshooting" class="block text-gray-600 hover:text-teal transition-colors py-2 pl-4">Troubleshooting</a>
              <a href="#faq" class="block text-gray-600 hover:text-teal transition-colors py-2 pl-4">FAQ</a>
            </nav>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-3">
          
          <!-- Getting Started -->
          <section id="getting-started" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Getting Started</h2>
            <div class="prose max-w-none">
              <p class="text-lg text-gray-600 mb-6">
                Welcome to Classsemble! This guide will help you get up and running with our Canvas LMS collaboration platform.
              </p>
              
              <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-bold text-blue-900 mb-2">Prerequisites</h4>
                    <ul class="text-blue-800 space-y-1">
                      <li>Canvas LMS instance (cloud or self-hosted)</li>
                      <li>Administrator access to Canvas</li>
                      <li>LTI 1.3 support enabled</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 class="text-2xl font-bold font-display text-gray-900 mb-4 mt-8">Quick Start</h3>
              <div class="bg-white rounded-xl shadow-md p-6 mb-6">
                <div class="flex items-start mb-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div class="flex-1">
                    <h4 class="font-bold text-gray-900 mb-2">Install Classsemble in Canvas</h4>
                    <p class="text-gray-600 mb-3">Navigate to your Canvas Admin panel and add Classsemble as an LTI 1.3 tool.</p>
                    <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <code>Admin → Developer Keys → + Developer Key → + LTI Key</code>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-start mb-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div class="flex-1">
                    <h4 class="font-bold text-gray-900 mb-2">Configure LTI Settings</h4>
                    <p class="text-gray-600 mb-3">Enter the following configuration details:</p>
                    <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <code>
                        Redirect URIs: https://app.classsemble.com/lti/launch<br/>
                        JWK Method: Public JWK URL<br/>
                        JWK URL: https://app.classsemble.com/.well-known/jwks.json
                      </code>
                    </div>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div class="flex-1">
                    <h4 class="font-bold text-gray-900 mb-2">Add to Course Navigation</h4>
                    <p class="text-gray-600">Enable Classsemble in your course settings to make it available to instructors and students.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Installation -->
          <section id="installation" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Installation</h2>
            <div class="space-y-6">
              
              <div class="bg-white rounded-xl shadow-md p-6">
                <h3 class="text-2xl font-bold font-display text-gray-900 mb-4">Method 1: Canvas App Center (Recommended)</h3>
                <ol class="space-y-4 text-gray-600">
                  <li class="flex items-start">
                    <span class="font-bold text-teal mr-2">1.</span>
                    <span>Go to your Canvas Admin panel</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-bold text-teal mr-2">2.</span>
                    <span>Navigate to Settings → Apps → View App Center</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-bold text-teal mr-2">3.</span>
                    <span>Search for "Classsemble"</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-bold text-teal mr-2">4.</span>
                    <span>Click "Add App" and follow the prompts</span>
                  </li>
                </ol>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <h3 class="text-2xl font-bold font-display text-gray-900 mb-4">Method 2: Manual LTI 1.3 Configuration</h3>
                <p class="text-gray-600 mb-4">For advanced users or custom deployments:</p>
                <div class="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-4">
                  <h4 class="font-bold text-gray-900 mb-3">Required Configuration Values</h4>
                  <table class="w-full text-sm">
                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="py-2 font-mono text-gray-600">Client ID</td>
                        <td class="py-2 font-mono text-gray-900">Provided after registration</td>
                      </tr>
                      <tr>
                        <td class="py-2 font-mono text-gray-600">Redirect URI</td>
                        <td class="py-2 font-mono text-gray-900">https://app.classsemble.com/lti/launch</td>
                      </tr>
                      <tr>
                        <td class="py-2 font-mono text-gray-600">OIDC Login URL</td>
                        <td class="py-2 font-mono text-gray-900">https://app.classsemble.com/lti/login</td>
                      </tr>
                      <tr>
                        <td class="py-2 font-mono text-gray-600">JWK Set URL</td>
                        <td class="py-2 font-mono text-gray-900">https://app.classsemble.com/.well-known/jwks.json</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <!-- Configuration -->
          <section id="configuration" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Configuration</h2>
            
            <div class="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 class="text-2xl font-bold font-display text-gray-900 mb-4">Course Settings</h3>
              <p class="text-gray-600 mb-4">Configure Classsemble for each course:</p>
              
              <div class="space-y-4">
                <div class="border-l-4 border-teal pl-4">
                  <h4 class="font-bold text-gray-900 mb-2">Enable Features</h4>
                  <ul class="text-gray-600 space-y-2">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Real-time chat for course discussions
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Meeting scheduler with calendar integration
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Analytics dashboard for instructors
                    </li>
                  </ul>
                </div>

                <div class="border-l-4 border-coral pl-4">
                  <h4 class="font-bold text-gray-900 mb-2">Permissions</h4>
                  <p class="text-gray-600">Control who can access different features:</p>
                  <ul class="text-gray-600 space-y-2 mt-2">
                    <li><strong>Students:</strong> Chat, schedule meetings, view dashboard</li>
                    <li><strong>Instructors:</strong> All student permissions + analytics, office hours management</li>
                    <li><strong>Admins:</strong> Full access + configuration settings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-2xl font-bold font-display text-gray-900 mb-4">Integration Settings</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-gray-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2 flex items-center">
                    <svg class="w-5 h-5 text-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Google Calendar
                  </h4>
                  <p class="text-sm text-gray-600">Connect Google Calendar for automatic meeting sync</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2 flex items-center">
                    <svg class="w-5 h-5 text-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Zoom
                  </h4>
                  <p class="text-sm text-gray-600">Enable one-click Zoom meeting creation</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Features -->
          <section id="features" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Features</h2>
            
            <div class="space-y-6">
              <div class="bg-white rounded-xl shadow-md p-6">
                <h3 class="text-2xl font-bold font-display text-teal mb-4">Real-Time Chat</h3>
                <p class="text-gray-600 mb-4">Instant messaging for course collaboration.</p>
                <h4 class="font-bold text-gray-900 mb-2">Key Features:</h4>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Course-based chat rooms with automatic enrollment</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Real-time message delivery with typing indicators</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Message history and search functionality</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>@mentions and notifications</span>
                  </li>
                </ul>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <h3 class="text-2xl font-bold font-display text-teal mb-4">Meeting Scheduler</h3>
                <p class="text-gray-600 mb-4">Smart scheduling with calendar integration.</p>
                <h4 class="font-bold text-gray-900 mb-2">Key Features:</h4>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Visual calendar interface with drag-and-drop</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Automatic timezone detection and conversion</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Google Calendar two-way sync</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Email reminders and notifications</span>
                  </li>
                </ul>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <h3 class="text-2xl font-bold font-display text-teal mb-4">Analytics Dashboard</h3>
                <p class="text-gray-600 mb-4">Track engagement and participation metrics.</p>
                <h4 class="font-bold text-gray-900 mb-2">Key Features:</h4>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Student engagement metrics and activity tracking</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Meeting attendance and participation rates</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Chat activity and response time analysis</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal mr-2">•</span>
                    <span>Exportable reports (CSV/PDF)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- API Reference -->
          <section id="api-reference" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">API Reference</h2>
            
            <div class="bg-white rounded-xl shadow-md p-6 mb-6">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold font-display text-gray-900">REST API Endpoints</h3>
                <Badge variant="teal">v1.0</Badge>
              </div>
              
              <div class="space-y-6">
                <!-- Meetings API -->
                <div class="border-l-4 border-teal pl-4">
                  <h4 class="font-bold text-gray-900 mb-2">Meetings</h4>
                  
                  <div class="bg-gray-50 rounded-lg p-4 mb-3">
                    <div class="flex items-center mb-2">
                      <Badge variant="success" class="mr-2">GET</Badge>
                      <code class="text-sm font-mono text-gray-900">/api/meetings</code>
                    </div>
                    <p class="text-sm text-gray-600 mb-2">Retrieve all meetings for a course</p>
                    <details class="text-sm">
                      <summary class="cursor-pointer text-teal font-semibold">View details</summary>
                      <div class="mt-3 bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs overflow-x-auto">
                        <pre>{
  "courseId": "string",
  "startDate": "ISO8601",
  "endDate": "ISO8601"
}</pre>
                      </div>
                    </details>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 mb-3">
                    <div class="flex items-center mb-2">
                      <Badge variant="info" class="mr-2">POST</Badge>
                      <code class="text-sm font-mono text-gray-900">/api/meetings</code>
                    </div>
                    <p class="text-sm text-gray-600 mb-2">Create a new meeting</p>
                    <details class="text-sm">
                      <summary class="cursor-pointer text-teal font-semibold">View details</summary>
                      <div class="mt-3 bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs overflow-x-auto">
                        <pre>{
  "title": "string",
  "description": "string",
  "startTime": "ISO8601",
  "endTime": "ISO8601",
  "attendees": ["userId1", "userId2"]
}</pre>
                      </div>
                    </details>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                      <Badge variant="warning" class="mr-2">DELETE</Badge>
                      <code class="text-sm font-mono text-gray-900">/api/meetings/:id</code>
                    </div>
                    <p class="text-sm text-gray-600">Cancel a meeting</p>
                  </div>
                </div>

                <!-- Chat API -->
                <div class="border-l-4 border-coral pl-4">
                  <h4 class="font-bold text-gray-900 mb-2">Chat</h4>
                  
                  <div class="bg-gray-50 rounded-lg p-4 mb-3">
                    <div class="flex items-center mb-2">
                      <Badge variant="success" class="mr-2">GET</Badge>
                      <code class="text-sm font-mono text-gray-900">/api/chat/:courseId</code>
                    </div>
                    <p class="text-sm text-gray-600">Retrieve chat messages for a course</p>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                      <Badge variant="info" class="mr-2">POST</Badge>
                      <code class="text-sm font-mono text-gray-900">/api/chat/:courseId</code>
                    </div>
                    <p class="text-sm text-gray-600">Send a new chat message</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 class="font-bold text-blue-900 mb-2">Authentication</h4>
              <p class="text-blue-800 mb-3">All API requests require authentication via LTI 1.3 launch token or API key.</p>
              <div class="bg-blue-100 rounded p-3 font-mono text-sm text-blue-900">
                Authorization: Bearer YOUR_API_TOKEN
              </div>
            </div>
          </section>

          <!-- Integrations -->
          <section id="integrations" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Integrations</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-xl shadow-md p-6">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold font-display text-gray-900">Google Calendar</h3>
                </div>
                <p class="text-gray-600 mb-4">Sync meetings with Google Calendar for seamless scheduling.</p>
                <Button variant="outline" size="sm" href="#configuration">Setup Guide →</Button>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold font-display text-gray-900">Zoom</h3>
                </div>
                <p class="text-gray-600 mb-4">Generate Zoom meeting links automatically when scheduling.</p>
                <Button variant="outline" size="sm" href="#configuration">Setup Guide →</Button>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold font-display text-gray-900">Email Notifications</h3>
                </div>
                <p class="text-gray-600 mb-4">Automated email reminders for meetings and important updates.</p>
                <Button variant="outline" size="sm" href="#configuration">Setup Guide →</Button>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold font-display text-gray-900">More Coming Soon</h3>
                    <Badge variant="info" size="sm">Beta</Badge>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">Microsoft Teams, Slack, and more integrations in development.</p>
              </div>
            </div>
          </section>

          <!-- Troubleshooting -->
          <section id="troubleshooting" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Troubleshooting</h2>
            
            <div class="space-y-4">
              <details class="bg-white rounded-xl shadow-md p-6">
                <summary class="font-bold text-gray-900 cursor-pointer">LTI Launch Failed</summary>
                <div class="mt-4 text-gray-600 space-y-2">
                  <p>If you see an error when launching Classsemble from Canvas:</p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Verify your LTI 1.3 configuration settings</li>
                    <li>Check that the Client ID matches in both Canvas and Classsemble</li>
                    <li>Ensure redirect URIs are correctly configured</li>
                    <li>Contact support if the issue persists</li>
                  </ul>
                </div>
              </details>

              <details class="bg-white rounded-xl shadow-md p-6">
                <summary class="font-bold text-gray-900 cursor-pointer">Chat Messages Not Appearing</summary>
                <div class="mt-4 text-gray-600 space-y-2">
                  <p>If chat messages aren't showing up in real-time:</p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Check your internet connection</li>
                    <li>Refresh the page to reconnect to the chat server</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Try a different browser or device</li>
                  </ul>
                </div>
              </details>

              <details class="bg-white rounded-xl shadow-md p-6">
                <summary class="font-bold text-gray-900 cursor-pointer">Calendar Sync Issues</summary>
                <div class="mt-4 text-gray-600 space-y-2">
                  <p>If meetings aren't syncing to Google Calendar:</p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Re-authorize your Google Calendar connection</li>
                    <li>Check Google Calendar permissions</li>
                    <li>Ensure calendar sync is enabled in settings</li>
                    <li>Allow up to 5 minutes for sync to complete</li>
                  </ul>
                </div>
              </details>

              <details class="bg-white rounded-xl shadow-md p-6">
                <summary class="font-bold text-gray-900 cursor-pointer">Permission Denied Errors</summary>
                <div class="mt-4 text-gray-600 space-y-2">
                  <p>If you can't access certain features:</p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Verify your role in the Canvas course</li>
                    <li>Contact your course instructor or Canvas admin</li>
                    <li>Check if Classsemble is enabled for your course</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          <!-- FAQ -->
          <section id="faq" class="mb-16">
            <h2 class="text-4xl font-bold font-display text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div class="space-y-4">
              <div class="bg-white rounded-xl shadow-md p-6">
                <h4 class="font-bold text-gray-900 mb-2">Is Classsemble free?</h4>
                <p class="text-gray-600">We offer a free tier for small courses (up to 50 students) with basic features. Paid plans unlock advanced analytics, priority support, and unlimited users.</p>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <h4 class="font-bold text-gray-900 mb-2">Is my data secure?</h4>
                <p class="text-gray-600">Yes. We use industry-standard encryption, comply with FERPA and GDPR regulations, and never sell or share your data. All communication is encrypted with SSL/TLS.</p>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <h4 class="font-bold text-gray-900 mb-2">Can I use Classsemble without Canvas?</h4>
                <p class="text-gray-600">Currently, Classsemble is designed specifically for Canvas LMS integration. We're exploring support for other LMS platforms in the future.</p>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <h4 class="font-bold text-gray-900 mb-2">How do I get support?</h4>
                <p class="text-gray-600">Visit our <NuxtLink to="/website/support" class="text-teal hover:text-coral">Support Center</NuxtLink> or email us at support@classsemble.com. Pro and Enterprise customers get priority support.</p>
              </div>

              <div class="bg-white rounded-xl shadow-md p-6">
                <h4 class="font-bold text-gray-900 mb-2">Can I export my data?</h4>
                <p class="text-gray-600">Yes. Pro and Enterprise plans include data export functionality. You can export chat logs, meeting history, and analytics reports in CSV or PDF format.</p>
              </div>
            </div>
          </section>

          <!-- CTA -->
          <section class="bg-gradient-to-r from-teal to-coral text-white rounded-2xl p-12 text-center">
            <h2 class="text-3xl font-bold font-display mb-4">Still Have Questions?</h2>
            <p class="text-xl opacity-90 mb-8">Our support team is here to help you get started</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" to="/website/support">Contact Support</Button>
              <Button variant="outline" size="lg" to="/website/contact">Schedule Demo</Button>
            </div>
          </section>

        </main>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Documentation - Classsemble',
  description: 'Complete documentation for Classsemble - installation guides, API reference, configuration, troubleshooting, and more.',
  ogTitle: 'Documentation - Classsemble',
  ogDescription: 'Everything you need to get started with Classsemble for Canvas LMS',
})
</script>
