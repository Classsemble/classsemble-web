import { _ as _sfc_main$1, a as __nuxt_component_1 } from './Footer-D7SzjJZK.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Button-8K_ltHoJ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BiCO_ukh.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './v3-_laYlAoe.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './server.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "support",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Support Center - Classsemble",
      description: "Get help with Classsemble. Browse documentation, FAQ, contact support, and find solutions to common issues.",
      ogTitle: "Support Center - Classsemble",
      ogDescription: "Get help with Classsemble - documentation, FAQ, live chat support, and more."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      const _component_Badge = _sfc_main$1$1;
      const _component_Button = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "support-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="bg-gradient-to-br from-teal to-teal/80 text-white py-20 px-4"><div class="max-w-4xl mx-auto text-center">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "lemon",
        size: "lg",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SUPPORT CENTER`);
          } else {
            return [
              createTextVNode("SUPPORT CENTER")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-5xl md:text-6xl font-bold font-display mb-6">How can we help you?</h1><p class="text-xl opacity-90 mb-8"> Get the support you need to make the most of Classsemble </p><div class="max-w-2xl mx-auto"><div class="relative"><input type="text" placeholder="Search for help articles, guides, and solutions..." class="w-full px-6 py-4 pl-14 text-gray-900 border-2 border-white/20 rounded-xl focus:border-lemon focus:outline-none text-lg"><svg class="w-6 h-6 text-gray-400 absolute left-4 top-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></div></div></section><section class="py-16 px-4 bg-gray-50"><div class="max-w-7xl mx-auto"><h2 class="text-3xl font-bold font-display text-gray-900 text-center mb-12">Quick Help</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"><div class="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div><h3 class="text-xl font-bold font-display text-gray-900 mb-3">Documentation</h3><p class="text-gray-600 mb-4">Complete guides and tutorials for getting started</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        to: "/website/docs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Browse Docs`);
          } else {
            return [
              createTextVNode("Browse Docs")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"><div class="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-xl font-bold font-display text-gray-900 mb-3">FAQ</h3><p class="text-gray-600 mb-4">Answers to commonly asked questions</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        href: "#faq"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View FAQ`);
          } else {
            return [
              createTextVNode("View FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"><div class="w-16 h-16 bg-lemon/20 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><h3 class="text-xl font-bold font-display text-gray-900 mb-3">Contact Us</h3><p class="text-gray-600 mb-4">Get personalized help from our support team</p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        href: "#contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get Help`);
          } else {
            return [
              createTextVNode("Get Help")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="py-16 px-4 bg-white"><div class="max-w-7xl mx-auto"><h2 class="text-3xl font-bold font-display text-gray-900 text-center mb-12">Popular Help Articles</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><article class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "success",
        size: "sm",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Getting Started`);
          } else {
            return [
              createTextVNode("Getting Started")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="font-bold text-gray-900 mb-2">Setting up Classsemble in Canvas</h3><p class="text-gray-600 text-sm mb-3">Step-by-step guide to install and configure Classsemble as an LTI tool in your Canvas course.</p><a href="#" class="text-teal hover:text-coral text-sm font-semibold">Read article \u2192</a></article><article class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "info",
        size: "sm",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Chat`);
          } else {
            return [
              createTextVNode("Chat")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="font-bold text-gray-900 mb-2">Using Real-Time Chat</h3><p class="text-gray-600 text-sm mb-3">Learn how to use course chat rooms, send messages, and manage notifications.</p><a href="#" class="text-teal hover:text-coral text-sm font-semibold">Read article \u2192</a></article><article class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "warning",
        size: "sm",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Meetings`);
          } else {
            return [
              createTextVNode("Meetings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="font-bold text-gray-900 mb-2">Scheduling and Managing Meetings</h3><p class="text-gray-600 text-sm mb-3">Create meetings, sync with Google Calendar, and generate Zoom links automatically.</p><a href="#" class="text-teal hover:text-coral text-sm font-semibold">Read article \u2192</a></article><article class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "coral",
        size: "sm",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Analytics`);
          } else {
            return [
              createTextVNode("Analytics")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="font-bold text-gray-900 mb-2">Understanding Analytics Dashboard</h3><p class="text-gray-600 text-sm mb-3">Track student engagement, participation rates, and generate reports.</p><a href="#" class="text-teal hover:text-coral text-sm font-semibold">Read article \u2192</a></article><article class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "teal",
        size: "sm",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Troubleshooting`);
          } else {
            return [
              createTextVNode("Troubleshooting")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="font-bold text-gray-900 mb-2">LTI Launch Issues</h3><p class="text-gray-600 text-sm mb-3">Common problems when launching Classsemble from Canvas and how to fix them.</p><a href="#" class="text-teal hover:text-coral text-sm font-semibold">Read article \u2192</a></article><article class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "lemon",
        size: "sm",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Integrations`);
          } else {
            return [
              createTextVNode("Integrations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="font-bold text-gray-900 mb-2">Google Calendar Integration</h3><p class="text-gray-600 text-sm mb-3">Connect your Google Calendar for automatic meeting synchronization.</p><a href="#" class="text-teal hover:text-coral text-sm font-semibold">Read article \u2192</a></article></div><div class="text-center mt-12">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        to: "/website/docs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All Articles`);
          } else {
            return [
              createTextVNode("View All Articles")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="contact" class="py-16 px-4 bg-gray-50"><div class="max-w-4xl mx-auto"><div class="text-center mb-12"><h2 class="text-3xl font-bold font-display text-gray-900 mb-4">Contact Support</h2><p class="text-xl text-gray-600">Can&#39;t find what you&#39;re looking for? We&#39;re here to help.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"><div class="bg-white rounded-xl shadow-md p-8"><div class="flex items-center mb-4"><div class="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mr-4"><svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><h3 class="font-bold text-gray-900">Email Support</h3><p class="text-gray-600 text-sm">Get help via email</p></div></div><p class="text-gray-600 mb-4">Send us a detailed message and we&#39;ll get back to you within 24 hours.</p><div class="space-y-2 text-sm text-gray-600"><p><strong>General Support:</strong> support@classsemble.com</p><p><strong>Technical Issues:</strong> tech@classsemble.com</p><p><strong>Response Time:</strong> Within 24 hours</p></div></div><div class="bg-white rounded-xl shadow-md p-8"><div class="flex items-center mb-4"><div class="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mr-4"><svg class="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><div><h3 class="font-bold text-gray-900">Live Chat</h3><p class="text-gray-600 text-sm">Real-time assistance</p></div></div><p class="text-gray-600 mb-4">Chat with our support team for immediate help with urgent issues.</p><div class="space-y-2 text-sm text-gray-600 mb-4"><p><strong>Available:</strong> Monday - Friday, 9 AM - 6 PM PST</p><p><strong>Response Time:</strong> Usually within 5 minutes</p></div>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "primary",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start Live Chat`);
          } else {
            return [
              createTextVNode("Start Live Chat")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-xl shadow-md p-8"><h3 class="text-2xl font-bold font-display text-gray-900 mb-6">Send us a message</h3><form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-semibold text-gray-900 mb-2">Your Name</label><input type="text" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal focus:outline-none" placeholder="Enter your name"></div><div><label class="block text-sm font-semibold text-gray-900 mb-2">Email Address</label><input type="email" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal focus:outline-none" placeholder="Enter your email"></div></div><div><label class="block text-sm font-semibold text-gray-900 mb-2">Subject</label><select class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal focus:outline-none"><option>General Question</option><option>Technical Issue</option><option>Installation Help</option><option>Feature Request</option><option>Billing Question</option></select></div><div><label class="block text-sm font-semibold text-gray-900 mb-2">Message</label><textarea rows="5" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal focus:outline-none" placeholder="Describe your issue or question in detail..."></textarea></div>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "primary",
        size: "lg",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Send Message`);
          } else {
            return [
              createTextVNode("Send Message")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></section><section id="faq" class="py-16 px-4 bg-white"><div class="max-w-4xl mx-auto"><div class="text-center mb-12"><h2 class="text-3xl font-bold font-display text-gray-900 mb-4">Frequently Asked Questions</h2><p class="text-xl text-gray-600">Quick answers to common questions</p></div><div class="space-y-4"><details class="bg-gray-50 rounded-xl p-6"><summary class="font-bold text-gray-900 cursor-pointer flex items-center justify-between"> How do I install Classsemble in my Canvas course? <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary><div class="mt-4 text-gray-600"><p class="mb-3">You can install Classsemble in two ways:</p><ol class="list-decimal pl-6 space-y-2"><li><strong>Via Canvas App Center:</strong> Navigate to Settings \u2192 Apps \u2192 View App Center, search for &quot;Classsemble&quot; and click &quot;Add App&quot;</li><li><strong>Manual LTI Configuration:</strong> Add Classsemble as an LTI 1.3 tool using our configuration details found in the documentation</li></ol></div></details><details class="bg-gray-50 rounded-xl p-6"><summary class="font-bold text-gray-900 cursor-pointer flex items-center justify-between"> Is Classsemble free to use? <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary><div class="mt-4 text-gray-600"><p>Yes! We offer a free tier for small courses (up to 50 students) that includes:</p><ul class="list-disc pl-6 mt-2 space-y-1"><li>Real-time chat</li><li>Basic meeting scheduling</li><li>Google Calendar sync</li><li>Email notifications</li></ul><p class="mt-3">For larger courses and advanced features like detailed analytics and priority support, check out our `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/website/plans",
        class: "text-teal hover:text-coral"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`pricing plans`);
          } else {
            return [
              createTextVNode("pricing plans")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`.</p></div></details><details class="bg-gray-50 rounded-xl p-6"><summary class="font-bold text-gray-900 cursor-pointer flex items-center justify-between"> How secure is my data? <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary><div class="mt-4 text-gray-600"><p>Security is our top priority. We implement:</p><ul class="list-disc pl-6 mt-2 space-y-1"><li>Industry-standard encryption (SSL/TLS)</li><li>FERPA and GDPR compliance</li><li>Regular security audits</li><li>Secure data centers with 99.9% uptime</li><li>No data sharing or selling - ever</li></ul></div></details><details class="bg-gray-50 rounded-xl p-6"><summary class="font-bold text-gray-900 cursor-pointer flex items-center justify-between"> Can I use Classsemble with other LMS platforms? <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary><div class="mt-4 text-gray-600"><p>Currently, Classsemble is designed specifically for Canvas LMS integration using LTI 1.3 standards. We&#39;re exploring support for other LMS platforms like Moodle, Blackboard, and D2L Brightspace in future releases.</p></div></details><details class="bg-gray-50 rounded-xl p-6"><summary class="font-bold text-gray-900 cursor-pointer flex items-center justify-between"> What browsers are supported? <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary><div class="mt-4 text-gray-600"><p>Classsemble works on all modern browsers:</p><ul class="list-disc pl-6 mt-2 space-y-1"><li>Chrome 90+ (recommended)</li><li>Firefox 88+</li><li>Safari 14+</li><li>Edge 90+</li></ul><p class="mt-3">We recommend using the latest version of your preferred browser for the best experience.</p></div></details><details class="bg-gray-50 rounded-xl p-6"><summary class="font-bold text-gray-900 cursor-pointer flex items-center justify-between"> How do I get support? <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary><div class="mt-4 text-gray-600"><p>We offer multiple support channels:</p><ul class="list-disc pl-6 mt-2 space-y-1"><li><strong>Documentation:</strong> Comprehensive guides and tutorials</li><li><strong>Email Support:</strong> support@classsemble.com (24-hour response)</li><li><strong>Live Chat:</strong> Monday-Friday, 9 AM - 6 PM PST</li><li><strong>Priority Support:</strong> Available for Pro and Enterprise customers</li></ul></div></details></div></div></section><section class="py-16 px-4 bg-gray-50"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl font-bold font-display text-gray-900 mb-4">System Status</h2><p class="text-xl text-gray-600 mb-8">Check the current status of our services</p><div class="bg-white rounded-xl shadow-md p-8 mb-8"><div class="flex items-center justify-center mb-4"><div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div><span class="text-lg font-semibold text-gray-900">All Systems Operational</span></div><p class="text-gray-600">Last updated: November 18, 2025 at 2:30 PM PST</p></div>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        to: "/website/status"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Detailed Status \u2192`);
          } else {
            return [
              createTextVNode("View Detailed Status \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/website/support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=support-D_QymbKw.mjs.map
