<template>
  <div class="legal-index">
    <Navbar />

    <!-- Header -->
    <section class="bg-gradient-to-br from-ash to-ash/80 text-white py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold mb-6">Legal & Compliance</h1>
        <p class="text-xl opacity-90">
          Important legal information and privacy policies for Classsemble users
        </p>
      </div>
    </section>

    <!-- Legal Documents -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        
        <!-- Introduction -->
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Legal Documents & Policies</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Classsemble is committed to transparency, privacy protection, and compliance with all applicable laws and regulations. 
            Please review our legal documents to understand your rights and our responsibilities.
          </p>
        </div>

        <!-- Document Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Privacy Policy -->
          <div class="bg-teal/10 border-2 border-teal/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-teal text-white rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Privacy Policy</h3>
            <p class="text-gray-600 mb-4">
              Learn how we collect, use, and protect your personal information in compliance with FERPA, GDPR, and other privacy laws.
            </p>
            <ul class="text-sm text-gray-500 mb-6 space-y-1">
              <li>• Data collection and usage</li>
              <li>• FERPA & GDPR compliance</li>
              <li>• Your privacy rights</li>
              <li>• Security measures</li>
            </ul>
            <NuxtLink to="/website/legal/privacy" class="btn-primary w-full text-center">
              View Privacy Policy
            </NuxtLink>
          </div>

          <!-- Terms of Service -->
          <div class="bg-coral/10 border-2 border-coral/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Terms of Service</h3>
            <p class="text-gray-600 mb-4">
              The legal agreement governing your use of Classsemble's educational collaboration platform and services.
            </p>
            <ul class="text-sm text-gray-500 mb-6 space-y-1">
              <li>• Acceptable use policy</li>
              <li>• Intellectual property rights</li>
              <li>• Service availability</li>
              <li>• Limitation of liability</li>
            </ul>
            <NuxtLink to="/website/legal/terms" class="btn-secondary w-full text-center">
              View Terms of Service
            </NuxtLink>
          </div>

          <!-- Cookie Policy -->
          <div class="bg-lemon/30 border-2 border-lemon/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-lemon text-gray-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Cookie Policy</h3>
            <p class="text-gray-600 mb-4">
              Information about how we use cookies and similar technologies to provide and improve our services.
            </p>
            <ul class="text-sm text-gray-500 mb-6 space-y-1">
              <li>• Types of cookies used</li>
              <li>• How to manage cookies</li>
              <li>• Third-party cookies</li>
              <li>• Your cookie choices</li>
            </ul>
            <NuxtLink to="/website/legal/cookies" class="bg-lemon text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-lemon/80 transition-colors w-full text-center block">
              View Cookie Policy
            </NuxtLink>
          </div>

          <!-- GDPR Compliance -->
          <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">GDPR Compliance</h3>
            <p class="text-gray-600 mb-4">
              Detailed information about our compliance with the General Data Protection Regulation for EU users.
            </p>
            <ul class="text-sm text-gray-500 mb-6 space-y-1">
              <li>• Your GDPR rights</li>
              <li>• Data protection measures</li>
              <li>• International transfers</li>
              <li>• Contact our DPO</li>
            </ul>
            <NuxtLink to="/website/legal/gdpr" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full text-center block">
              View GDPR Compliance
            </NuxtLink>
          </div>

          <!-- FERPA Compliance -->
          <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">FERPA Compliance</h3>
            <p class="text-gray-600 mb-4">
              Our commitment to protecting student education records under the Family Educational Rights and Privacy Act.
            </p>
            <ul class="text-sm text-gray-500 mb-6 space-y-1">
              <li>• Student record protection</li>
              <li>• School official status</li>
              <li>• Data security measures</li>
              <li>• Institutional agreements</li>
            </ul>
            <NuxtLink to="/website/legal/ferpa" class="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors w-full text-center block">
              View FERPA Compliance
            </NuxtLink>
          </div>

          <!-- Legal Contact -->
          <div class="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-gray-600 text-white rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Legal Contact</h3>
            <p class="text-gray-600 mb-4">
              Have questions about our legal policies or need to report a compliance concern? Contact our legal team.
            </p>
            <ul class="text-sm text-gray-500 mb-6 space-y-1">
              <li>• Privacy questions</li>
              <li>• Compliance concerns</li>
              <li>• Legal inquiries</li>
              <li>• Data subject requests</li>
            </ul>
            <a href="mailto:legal@classsemble.com" class="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors w-full text-center block">
              Contact Legal Team
            </a>
          </div>
        </div>

        <!-- Key Compliance Highlights -->
        <div class="mt-20">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Compliance Commitments</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">FERPA Compliant</h3>
              <p class="text-gray-600 text-sm">
                Full compliance with US education privacy laws for student record protection
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">GDPR Ready</h3>
              <p class="text-gray-600 text-sm">
                Comprehensive data protection for European users with full GDPR compliance
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-lemon/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
              <p class="text-gray-600 text-sm">
                Enterprise-grade security controls and regular third-party audits
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">COPPA Safe</h3>
              <p class="text-gray-600 text-sm">
                Special protections for users under 13 with appropriate parental controls
              </p>
            </div>
          </div>
        </div>

        <!-- Legal Notice -->
        <div class="mt-20 bg-gray-50 rounded-xl p-8">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Important Legal Notice</h3>
          <div class="prose prose-gray">
            <p>
              These legal documents constitute binding agreements between you and Classsemble. By using our services, 
              you acknowledge that you have read, understood, and agree to be bound by these terms and policies.
            </p>
            <p>
              We may update these documents from time to time. Material changes will be communicated to users and 
              institutional partners with appropriate advance notice. For questions about any of our legal documents, 
              please contact our legal team at <a href="mailto:legal@classsemble.com" class="text-teal hover:underline">legal@classsemble.com</a>.
            </p>
            <p class="text-sm text-gray-500 mt-4">
              Last updated: November 18, 2025 • Version 1.0
            </p>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Legal & Compliance - Classsemble',
  description: 'Access Classsemble\'s legal documents including privacy policy, terms of service, FERPA and GDPR compliance information.',
  ogTitle: 'Legal & Compliance - Classsemble',
  ogDescription: 'Comprehensive legal information and compliance documentation for Classsemble educational technology platform.',
})
</script>

<style scoped>
.prose a {
  color: #5CA4A9;
  text-decoration: underline;
}

.prose a:hover {
  text-decoration: none;
}
</style>