import { _ as _sfc_main$1, a as __nuxt_component_1 } from './Footer-D7SzjJZK.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Button-8K_ltHoJ.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSeoMeta } from './v3-_laYlAoe.mjs';
import './nuxt-link-BiCO_ukh.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'stream';
import 'events';
import 'http';
import 'crypto';
import 'buffer';
import 'zlib';
import 'https';
import 'net';
import 'tls';
import 'url';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "plans",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        question: "Can I upgrade or downgrade at any time?",
        answer: "Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades at the end of your billing period. No penalties for switching plans."
      },
      {
        question: "Is there a free trial for Pro?",
        answer: "Yes, we offer a 14-day free trial of the Pro plan. No credit card required to start your trial. You'll only be charged if you decide to continue after the trial period."
      },
      {
        question: "What happens if I exceed the student limit on Free?",
        answer: "When you reach 50 students on the Free plan, we'll notify you to upgrade to Pro for unlimited students, or you can add individual courses for $20/month each."
      },
      {
        question: "Do you offer educational discounts?",
        answer: "Yes! We offer special pricing for K-12 schools, community colleges, and non-profit educational organizations. Contact our sales team for details."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing period."
      },
      {
        question: "Is my data secure?",
        answer: "Yes! We use industry-standard encryption (SSL/TLS) for all data transmission. We're GDPR and FERPA compliant, and never sell your data to third parties. Enterprise customers can opt for on-premise deployment."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, AmEx), ACH transfers, and purchase orders for Enterprise customers. Annual subscriptions can be paid via invoice."
      },
      {
        question: "How does LTI 1.3 integration work?",
        answer: "LTI (Learning Tools Interoperability) 1.3 is a secure standard for connecting external tools to Canvas. Once configured by your Canvas administrator, students and instructors can launch Classsemble directly from Canvas with single sign-on."
      }
    ];
    useSeoMeta({
      title: "Pricing - Classsemble",
      description: "Simple, transparent pricing for Classsemble. Free plan for small courses, Pro for departments, and Enterprise for institutions. No hidden fees.",
      ogTitle: "Pricing - Classsemble",
      ogDescription: "Simple, transparent pricing for Classsemble. Free plan for small courses, Pro for departments, and Enterprise for institutions."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      const _component_Badge = _sfc_main$1$1;
      const _component_Button = _sfc_main$2;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "plans-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="bg-gradient-to-br from-teal to-teal/80 text-white py-20 px-4"><div class="max-w-4xl mx-auto text-center">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "lemon",
        size: "lg",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PRICING`);
          } else {
            return [
              createTextVNode("PRICING")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-5xl md:text-6xl font-bold font-display mb-6"> Simple, Transparent Pricing </h1><p class="text-xl opacity-90"> Choose the plan that&#39;s right for your institution. All plans include LTI 1.3 integration. </p></div></section><section class="py-20 px-4 bg-white"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"><h3 class="text-2xl font-bold font-display text-gray-900 mb-2">Free</h3><div class="mb-6"><span class="text-5xl font-bold text-teal">$0</span><span class="text-gray-600">/month</span></div><p class="text-gray-600 mb-6">For small courses (&lt;50 students)</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        size: "lg",
        fullWidth: "",
        class: "mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start Free`);
          } else {
            return [
              createTextVNode("Start Free")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-3 mb-6"><h4 class="font-semibold text-gray-900 text-sm uppercase tracking-wide">Includes:</h4><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Unlimited meetings</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Real-time chat</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Google Calendar sync</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Zoom integration</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Basic analytics</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Email notifications</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Community support</span></div></div><div class="border-t pt-6 space-y-2"><h4 class="font-semibold text-gray-900 text-sm uppercase tracking-wide">Limitations:</h4><p class="text-gray-600 text-sm">\u2022 50 students per course max</p><p class="text-gray-600 text-sm">\u2022 1 course</p><p class="text-gray-600 text-sm">\u2022 Basic analytics only</p><p class="text-gray-600 text-sm">\u2022 Community forum support</p></div></div><div class="bg-gradient-to-br from-coral to-coral/90 text-white rounded-2xl p-8 transform scale-105 shadow-2xl relative"><div class="absolute top-0 right-0 bg-lemon text-gray-900 px-4 py-1 rounded-bl-lg rounded-tr-2xl font-semibold text-sm flex items-center gap-1"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> POPULAR </div><h3 class="text-2xl font-bold font-display mb-2 mt-4">Pro</h3><div class="mb-6"><span class="text-5xl font-bold">$99</span><span class="opacity-90">/month</span></div><p class="opacity-90 mb-2">or $999/year (save 17%)</p><p class="opacity-90 mb-6">For departments and multiple courses</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "secondary",
        size: "lg",
        fullWidth: "",
        class: "mb-8 !bg-white !text-coral hover:!bg-lemon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start 14-Day Trial`);
          } else {
            return [
              createTextVNode("Start 14-Day Trial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-3 mb-6"><h4 class="font-semibold text-sm uppercase tracking-wide">Everything in Free, plus:</h4><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">Unlimited students</span></div><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">Unlimited courses</span></div><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">Advanced analytics &amp; exports</span></div><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">Meeting recording integration</span></div><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">Custom notification templates</span></div><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">Priority email support</span></div><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">Remove &quot;Powered by Classsemble&quot; branding</span></div><div class="flex items-start"><svg class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-sm">API access</span></div></div></div><div class="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow"><div class="flex items-center mb-2"><h3 class="text-2xl font-bold font-display text-gray-900">Enterprise</h3><svg class="w-6 h-6 ml-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div><div class="mb-6"><span class="text-5xl font-bold text-teal">Custom</span></div><p class="text-gray-600 mb-6">For institutions and universities</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "primary",
        size: "lg",
        fullWidth: "",
        class: "mb-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Sales`);
          } else {
            return [
              createTextVNode("Contact Sales")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-3 mb-6"><h4 class="font-semibold text-gray-900 text-sm uppercase tracking-wide">Everything in Pro, plus:</h4><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Custom branding (logo, colors)</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">White-label option</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Dedicated support manager</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">SLA guarantee (99.9% uptime)</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">On-premise deployment option</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">SSO integration (SAML, LDAP)</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Custom features and integrations</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Training and onboarding</span></div><div class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-gray-700 text-sm">Compliance support (FERPA, GDPR)</span></div></div></div></div></div></section><section class="py-20 px-4 bg-gray-50"><div class="max-w-4xl mx-auto"><div class="text-center mb-12"><h2 class="text-3xl font-bold font-display text-gray-900 mb-4">Add-Ons for All Tiers</h2><p class="text-gray-600">Enhance your plan with optional add-ons</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white rounded-xl shadow-md p-6"><h3 class="font-bold text-gray-900 mb-2">Additional Courses</h3><p class="text-3xl font-bold text-teal mb-2">$20<span class="text-lg text-gray-600">/mo</span></p><p class="text-sm text-gray-600">Per course (Free users only)</p></div><div class="bg-white rounded-xl shadow-md p-6"><h3 class="font-bold text-gray-900 mb-2">Advanced Analytics Export</h3><p class="text-3xl font-bold text-teal mb-2">$30<span class="text-lg text-gray-600">/mo</span></p><p class="text-sm text-gray-600">CSV &amp; PDF reports</p></div><div class="bg-white rounded-xl shadow-md p-6"><h3 class="font-bold text-gray-900 mb-2">Priority Support</h3><p class="text-3xl font-bold text-teal mb-2">$50<span class="text-lg text-gray-600">/mo</span></p><p class="text-sm text-gray-600">For Pro users</p></div></div></div></section><section class="py-20 bg-white px-4"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold font-display text-center mb-12 text-gray-900">Frequently Asked Questions</h2><div class="space-y-6"><!--[-->`);
      ssrRenderList(faqs, (faq, index) => {
        _push(`<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"><h3 class="text-lg font-semibold text-teal mb-2">${ssrInterpolate(faq.question)}</h3><p class="text-gray-600">${ssrInterpolate(faq.answer)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 px-4 bg-gradient-to-r from-teal to-teal/90 text-white"><div class="max-w-4xl mx-auto text-center"><h2 class="text-4xl font-bold font-display mb-6">Ready to Get Started?</h2><p class="text-xl mb-8 opacity-90"> Join hundreds of institutions using Classsemble today </p><div class="flex flex-col sm:flex-row gap-4 justify-center">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "primary",
        size: "lg",
        href: "#signup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start Free Trial`);
          } else {
            return [
              createTextVNode("Start Free Trial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        size: "lg",
        to: "/website/contact",
        class: "!text-white !border-white hover:!bg-white hover:!text-teal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Sales`);
          } else {
            return [
              createTextVNode("Contact Sales")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/website/plans.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=plans-BOkeX53d.mjs.map
