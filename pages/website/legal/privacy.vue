<template>
  <div class="privacy-policy">
    <Navbar />

    <!-- Header -->
    <section class="bg-gradient-to-br from-teal to-teal/80 text-white py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold mb-6">Privacy Policy</h1>
        <p class="text-xl opacity-90">
          How we protect and handle your personal information
        </p>
        <p class="text-sm opacity-75 mt-4">
          Last updated: {{ lastUpdated }}
        </p>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto prose prose-lg">
        
        <h2>1. Introduction</h2>
        <p>
          Classsemble ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Canvas LMS integration platform and related services ("Services").
        </p>
        <p>
          As an educational technology platform that integrates with Learning Management Systems, we are committed to compliance with the Family Educational Rights and Privacy Act (FERPA), the General Data Protection Regulation (GDPR), and other applicable privacy laws.
        </p>

        <h2>2. Information We Collect</h2>
        
        <h3>2.1 Information from Educational Institutions</h3>
        <p>When your educational institution integrates Classsemble with their Canvas LMS, we receive:</p>
        <ul>
          <li><strong>Student Information:</strong> Name, email address, student ID, course enrollment data</li>
          <li><strong>Instructor Information:</strong> Name, email address, instructor ID, course teaching assignments</li>
          <li><strong>Course Information:</strong> Course names, codes, sections, enrollment rosters</li>
          <li><strong>LTI Launch Data:</strong> Technical information required for secure integration</li>
        </ul>

        <h3>2.2 Information You Provide</h3>
        <ul>
          <li><strong>Meeting Data:</strong> Meeting titles, descriptions, schedules, participant lists</li>
          <li><strong>Communication Data:</strong> Chat messages, meeting notes, collaborative content</li>
          <li><strong>Profile Information:</strong> Optional profile customizations within our platform</li>
        </ul>

        <h3>2.3 Automatically Collected Information</h3>
        <ul>
          <li><strong>Usage Data:</strong> Platform interactions, feature usage, session duration</li>
          <li><strong>Technical Data:</strong> IP addresses, device information, browser type</li>
          <li><strong>Analytics Data:</strong> Aggregated usage patterns for service improvement</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        
        <h3>3.1 Educational Services</h3>
        <ul>
          <li>Provide collaborative tools within your Canvas courses</li>
          <li>Enable meeting scheduling and real-time communication</li>
          <li>Facilitate group projects and study sessions</li>
          <li>Support instructor-student and peer-to-peer interactions</li>
        </ul>

        <h3>3.2 Service Operation and Improvement</h3>
        <ul>
          <li>Maintain platform security and prevent unauthorized access</li>
          <li>Analyze usage patterns to improve our services</li>
          <li>Provide technical support and troubleshooting</li>
          <li>Ensure compliance with educational technology standards</li>
        </ul>

        <h3>3.3 Communication</h3>
        <ul>
          <li>Send system notifications and security alerts</li>
          <li>Provide customer support responses</li>
          <li>Communicate service updates and maintenance schedules</li>
        </ul>

        <h2>4. FERPA Compliance</h2>
        <p>
          We understand our responsibilities as a provider of educational technology services and comply with the Family Educational Rights and Privacy Act (FERPA):
        </p>
        <ul>
          <li><strong>Educational Records:</strong> We treat student data as educational records protected under FERPA</li>
          <li><strong>Legitimate Educational Interest:</strong> We access student data only for legitimate educational purposes</li>
          <li><strong>Institutional Control:</strong> Educational institutions maintain control over student data</li>
          <li><strong>No Unauthorized Disclosure:</strong> We do not disclose student information without proper consent</li>
          <li><strong>Data Destruction:</strong> We delete student data upon request or contract termination</li>
        </ul>

        <h2>5. GDPR Compliance (EU Users)</h2>
        <p>For users in the European Union, we comply with the General Data Protection Regulation (GDPR):</p>
        
        <h3>5.1 Legal Bases for Processing</h3>
        <ul>
          <li><strong>Contract Performance:</strong> Processing necessary to provide our services</li>
          <li><strong>Legitimate Interests:</strong> Service improvement and security</li>
          <li><strong>Legal Compliance:</strong> Meeting regulatory requirements</li>
          <li><strong>Consent:</strong> Where explicitly provided for optional features</li>
        </ul>

        <h3>5.2 Your GDPR Rights</h3>
        <ul>
          <li><strong>Right of Access:</strong> Request information about your personal data</li>
          <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
          <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
          <li><strong>Right to Object:</strong> Object to certain types of processing</li>
          <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
        </ul>

        <h2>6. Data Sharing and Disclosure</h2>
        
        <h3>6.1 Within Educational Institution</h3>
        <p>We may share information with:</p>
        <ul>
          <li>Instructors and students within the same course</li>
          <li>Authorized institutional administrators</li>
          <li>Technical support staff as needed</li>
        </ul>

        <h3>6.2 Service Providers</h3>
        <p>We may share data with trusted service providers who:</p>
        <ul>
          <li>Provide infrastructure and hosting services</li>
          <li>Assist with data analysis for service improvement</li>
          <li>Support customer service operations</li>
          <li>Are bound by strict confidentiality agreements</li>
        </ul>

        <h3>6.3 Legal Requirements</h3>
        <p>We may disclose information when required by:</p>
        <ul>
          <li>Valid legal process or court order</li>
          <li>Law enforcement investigations</li>
          <li>Protection of our rights and safety</li>
          <li>Prevention of fraud or security threats</li>
        </ul>

        <h2>7. Data Security</h2>
        <p>We implement robust security measures to protect your information:</p>
        <ul>
          <li><strong>Encryption:</strong> Data encrypted in transit and at rest</li>
          <li><strong>Access Controls:</strong> Strict access limitations and authentication</li>
          <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
          <li><strong>Staff Training:</strong> Regular privacy and security training for all personnel</li>
          <li><strong>Incident Response:</strong> Procedures for handling security breaches</li>
        </ul>

        <h2>8. Data Retention</h2>
        <p>We retain personal information only as long as necessary:</p>
        <ul>
          <li><strong>Active Use:</strong> While you or your institution actively use our services</li>
          <li><strong>Legal Requirements:</strong> As required by applicable laws and regulations</li>
          <li><strong>Institutional Requests:</strong> Until your institution requests data deletion</li>
          <li><strong>Maximum Retention:</strong> No longer than 7 years after last activity</li>
        </ul>

        <h2>9. International Data Transfers</h2>
        <p>
          If you are located outside the United States, please note that we may transfer your information to and process it in the United States. We ensure appropriate safeguards are in place for international transfers, including:
        </p>
        <ul>
          <li>Standard Contractual Clauses approved by the European Commission</li>
          <li>Adequacy decisions where applicable</li>
          <li>Other legally recognized transfer mechanisms</li>
        </ul>

        <h2>10. Children's Privacy</h2>
        <p>
          Our services are designed for educational use and may be used by students under 18. We comply with applicable children's privacy laws, including COPPA when applicable. We do not knowingly collect personal information from children outside of the educational context and with appropriate institutional oversight.
        </p>

        <h2>11. Your Rights and Choices</h2>
        
        <h3>11.1 Access and Control</h3>
        <ul>
          <li>Review and update your profile information</li>
          <li>Control privacy settings within the platform</li>
          <li>Request access to your personal data</li>
          <li>Request correction of inaccurate data</li>
        </ul>

        <h3>11.2 Communication Preferences</h3>
        <ul>
          <li>Opt out of non-essential communications</li>
          <li>Manage notification settings</li>
          <li>Contact us for privacy-related requests</li>
        </ul>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes by:
        </p>
        <ul>
          <li>Posting the updated policy on our website</li>
          <li>Notifying educational institutions of significant changes</li>
          <li>Providing at least 30 days' notice for material changes</li>
        </ul>

        <h2>13. Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us:
        </p>
        <div class="bg-lemon/20 border-l-4 border-teal p-6 rounded-r-lg mt-6">
          <p><strong>Classsemble Privacy Team</strong></p>
          <p>Email: <a href="mailto:privacy@classsemble.com" class="text-teal hover:underline">privacy@classsemble.com</a></p>
          <p>Address: 123 Education Street, San Francisco, CA 94102</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        
        <h3>13.1 Data Protection Officer (EU)</h3>
        <p>
          For GDPR-related inquiries, you may contact our Data Protection Officer:
        </p>
        <p>Email: <a href="mailto:dpo@classsemble.com" class="text-teal hover:underline">dpo@classsemble.com</a></p>

        <h3>13.2 Supervisory Authority</h3>
        <p>
          EU users have the right to lodge a complaint with their local supervisory authority if they believe we have not adequately addressed their privacy concerns.
        </p>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const lastUpdated = 'November 18, 2025'

useSeoMeta({
  title: 'Privacy Policy - Classsemble',
  description: 'Learn how Classsemble protects your privacy and handles personal information in compliance with FERPA, GDPR, and other privacy regulations.',
  ogTitle: 'Privacy Policy - Classsemble',
  ogDescription: 'Comprehensive privacy policy covering FERPA, GDPR compliance and data protection for educational technology.',
})
</script>

<style scoped>
.prose {
  @apply text-gray-700;
}

.prose h2 {
  @apply text-2xl font-bold text-teal mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-6 mb-3;
}

.prose ul {
  @apply list-disc list-inside space-y-1 ml-4;
}

.prose li {
  @apply leading-relaxed;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose a {
  @apply text-teal hover:underline;
}
</style>