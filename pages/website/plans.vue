<template>
  <div class="plans-page">
    <Navbar />

    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
        <p class="text-xl text-gray-600">
          Choose the plan that's right for your institution. All plans include LTI 1.3 integration.
        </p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard
            v-for="plan in plans"
            :key="plan.name"
            :name="plan.name"
            :price="plan.price"
            :period="plan.period"
            :description="plan.description"
            :features="plan.features"
            :cta-text="plan.ctaText"
            :popular="plan.popular"
            :additional-info="plan.additionalInfo"
            @select="handlePlanSelect"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="section-heading text-center mb-12">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="card">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out Classsemble',
    features: [
      { text: 'Up to 50 students', included: true },
      { text: 'Basic meeting scheduling', included: true },
      { text: 'Course chat', included: true },
      { text: 'Canvas LTI integration', included: true },
      { text: 'Zoom integration', included: false },
      { text: 'Analytics dashboard', included: false },
      { text: 'Priority support', included: false },
      { text: 'Custom branding', included: false }
    ],
    ctaText: 'Start Free',
    popular: false,
    additionalInfo: 'No credit card required'
  },
  {
    name: 'Premium',
    price: '$99',
    period: 'month',
    description: 'For growing courses and departments',
    features: [
      { text: 'Up to 500 students', included: true },
      { text: 'Advanced scheduling', included: true },
      { text: 'Course chat with history', included: true },
      { text: 'Canvas LTI integration', included: true },
      { text: 'Zoom integration', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Priority support', included: true },
      { text: 'Custom branding', included: false }
    ],
    ctaText: 'Start Free Trial',
    popular: true,
    additionalInfo: '14-day free trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large institutions with custom needs',
    features: [
      { text: 'Unlimited students', included: true },
      { text: 'Advanced scheduling', included: true },
      { text: 'Course chat with history', included: true },
      { text: 'Canvas LTI integration', included: true },
      { text: 'Zoom integration', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Priority support', included: true },
      { text: 'Custom branding', included: true }
    ],
    ctaText: 'Contact Sales',
    popular: false,
    additionalInfo: 'Dedicated account manager'
  }
]

const faqs = [
  {
    question: 'How does the free plan work?',
    answer: 'The free plan is completely free forever for courses with up to 50 students. No credit card required.'
  },
  {
    question: 'Can I upgrade or downgrade at any time?',
    answer: 'Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades at the end of your billing period.'
  },
  {
    question: 'What is LTI 1.3 integration?',
    answer: 'LTI (Learning Tools Interoperability) 1.3 is a standard for securely connecting external tools to Canvas LMS. Classsemble integrates seamlessly into your Canvas courses.'
  },
  {
    question: 'Is training included?',
    answer: 'Yes! We provide comprehensive documentation, video tutorials, and live onboarding sessions for Premium and Enterprise plans.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and purchase orders for Enterprise customers.'
  }
]

const handlePlanSelect = (planName: string) => {
  console.log('Selected plan:', planName)
  // Navigate to sign up or contact page
}
</script>
