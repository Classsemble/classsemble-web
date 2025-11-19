import { _ as _sfc_main$1$1, a as __nuxt_component_1 } from './Footer-DA28dRAg.mjs';
import { a as _sfc_main$4, _ as _sfc_main$1$2 } from './Button-df4dxa6C.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useSeoMeta } from './v3-Cx3byNka.mjs';
import './nuxt-link-ChmzVw3V.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureGrid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FeatureItem",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" }, _attrs))}><div class="w-14 h-14 rounded-lg bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center mb-4"><div class="w-7 h-7 text-white">${(_a = __props.icon) != null ? _a : ""}</div></div><h3 class="text-xl font-bold text-gray-900 mb-2 font-display">${ssrInterpolate(__props.title)}</h3><p class="text-gray-600 leading-relaxed">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    role: {},
    institution: {},
    quote: {},
    image: {}
  },
  setup(__props) {
    const props = __props;
    const initials = computed(() => {
      return props.name.split(" ").map((n) => n[0]).join("").toUpperCase();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300" }, _attrs))}><div class="flex items-start mb-4"><div class="flex-shrink-0">`);
      if (__props.image) {
        _push(`<div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.name)} class="w-full h-full object-cover"></div>`);
      } else {
        _push(`<div class="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center"><span class="text-teal font-bold text-xl">${ssrInterpolate(unref(initials))}</span></div>`);
      }
      _push(`</div><div class="ml-4 flex-1"><h4 class="font-semibold text-gray-900">${ssrInterpolate(__props.name)}</h4><p class="text-sm text-gray-600">${ssrInterpolate(__props.role)}</p>`);
      if (__props.institution) {
        _push(`<p class="text-sm text-gray-500">${ssrInterpolate(__props.institution)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex text-lemon"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>`);
      });
      _push(`<!--]--></div></div><p class="text-gray-700 italic leading-relaxed"> &quot;${ssrInterpolate(__props.quote)}&quot; </p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Classsemble - Streamline Collaboration in Canvas LMS",
      description: "Empower students and instructors with integrated meeting scheduling, real-time chat, and seamless calendar sync\u2014all within Canvas LMS.",
      ogTitle: "Classsemble - Streamline Collaboration in Canvas LMS",
      ogDescription: "Empower students and instructors with integrated meeting scheduling, real-time chat, and seamless calendar sync\u2014all within Canvas LMS.",
      ogImage: "/og-image.jpg",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1$1;
      const _component_Button = _sfc_main$4;
      const _component_Badge = _sfc_main$1$2;
      const _component_FeatureGrid = __nuxt_component_3;
      const _component_FeatureItem = _sfc_main$2;
      const _component_TestimonialCard = _sfc_main$1;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "website-home" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="bg-gradient-to-br from-linen to-white py-20 px-4"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="text-center lg:text-left animate-fade-in"><h1 class="text-5xl md:text-6xl font-bold font-display text-teal mb-6 leading-tight"> Streamline Collaboration in <span class="text-coral block mt-2">Canvas LMS</span></h1><p class="text-xl text-gray-700 mb-8 leading-relaxed"> Empower students and instructors with integrated meeting scheduling, real-time chat, and seamless calendar sync\u2014all within Canvas. </p><div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">`);
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
        href: "#demo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Watch Demo`);
          } else {
            return [
              createTextVNode("Watch Demo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-sm text-gray-500 mt-4">No credit card required \u2022 Free forever for small teams</p></div><div class="relative animate-slide-up"><div class="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300"><img src="https://placehold.co/600x400/5CA4A9/ffffff?text=Classsemble+Dashboard" alt="Classsemble Dashboard" class="rounded-lg w-full"></div><div class="absolute -bottom-6 -left-6 bg-coral text-white p-4 rounded-lg shadow-lg"><div class="text-2xl font-bold">10,000+</div><div class="text-sm">Meetings Scheduled</div></div></div></div></div></section><section class="py-20 px-4 bg-white"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-4xl font-bold font-display text-gray-900 mb-4">The Challenge</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto"> Traditional learning management systems lack the collaborative tools modern education demands </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center p-6"><div class="w-16 h-16 mx-auto mb-4 text-gray-400"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><h3 class="text-xl font-semibold text-gray-900 mb-2">Scattered Tools</h3><p class="text-gray-600">Students juggle multiple platforms for scheduling, chat, and video calls</p></div><div class="text-center p-6"><div class="w-16 h-16 mx-auto mb-4 text-gray-400"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-xl font-semibold text-gray-900 mb-2">Coordination Chaos</h3><p class="text-gray-600">Organizing study groups and office hours is time-consuming and frustrating</p></div><div class="text-center p-6"><div class="w-16 h-16 mx-auto mb-4 text-gray-400"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div><h3 class="text-xl font-semibold text-gray-900 mb-2">No Visibility</h3><p class="text-gray-600">Instructors lack insights into student engagement and collaboration</p></div></div></div></section><section class="py-20 px-4 bg-gradient-to-br from-teal/5 to-lemon/20"><div class="max-w-7xl mx-auto"><div class="text-center mb-16">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "teal",
        size: "lg",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`THE SOLUTION`);
          } else {
            return [
              createTextVNode("THE SOLUTION")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4"> One Platform, Endless Possibilities </h2><p class="text-xl text-gray-600 max-w-3xl mx-auto"> Classsemble brings scheduling, chat, and analytics together\u2014seamlessly integrated into Canvas LMS </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300"><div class="w-20 h-20 mx-auto mb-4 text-teal"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><h3 class="text-2xl font-bold font-display text-teal mb-3">Meeting Scheduler</h3><p class="text-gray-600 mb-4">Coordinate study groups and office hours with visual calendar views</p><ul class="text-left text-sm text-gray-600 space-y-2"><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Google Calendar sync </li><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Auto Zoom link generation </li><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Email reminders </li></ul></div><div class="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300"><div class="w-20 h-20 mx-auto mb-4 text-teal"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><h3 class="text-2xl font-bold font-display text-teal mb-3">Real-Time Chat</h3><p class="text-gray-600 mb-4">Collaborate instantly with coursemates through dedicated chat rooms</p><ul class="text-left text-sm text-gray-600 space-y-2"><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Course-based rooms </li><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Message history </li><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Typing indicators </li></ul></div><div class="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300"><div class="w-20 h-20 mx-auto mb-4 text-teal"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div><h3 class="text-2xl font-bold font-display text-teal mb-3">Analytics Dashboard</h3><p class="text-gray-600 mb-4">Track engagement and participation with detailed insights</p><ul class="text-left text-sm text-gray-600 space-y-2"><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Attendance tracking </li><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Activity metrics </li><li class="flex items-start"><svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Engagement reports </li></ul></div></div></div></section><section class="py-20 px-4 bg-white"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-4xl font-bold font-display text-gray-900 mb-4">Powerful Features Built for Education</h2><p class="text-xl text-gray-600">Everything you need to enhance collaboration in Canvas LMS</p></div>`);
      _push(ssrRenderComponent(_component_FeatureGrid, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FeatureItem, {
              icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' /></svg>",
              title: "LTI 1.3 Integration",
              description: "Seamless launch from Canvas with single sign-on. No separate logins required."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FeatureItem, {
              icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>",
              title: "Smart Scheduling",
              description: "Create meetings with calendar view and automatic timezone support for global teams."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FeatureItem, {
              icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' /></svg>",
              title: "Google Calendar Sync",
              description: "Auto-sync meetings to personal calendars with two-way updates."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FeatureItem, {
              icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' /></svg>",
              title: "Zoom Integration",
              description: "One-click Zoom link generation with auto-populated meeting details."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FeatureItem, {
              icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /></svg>",
              title: "Email Notifications",
              description: "Automated reminders and meeting updates sent at optimal times."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FeatureItem, {
              icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' /></svg>",
              title: "Engagement Analytics",
              description: "Track participation and measure impact with detailed reports."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FeatureItem, {
                icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' /></svg>",
                title: "LTI 1.3 Integration",
                description: "Seamless launch from Canvas with single sign-on. No separate logins required."
              }),
              createVNode(_component_FeatureItem, {
                icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>",
                title: "Smart Scheduling",
                description: "Create meetings with calendar view and automatic timezone support for global teams."
              }),
              createVNode(_component_FeatureItem, {
                icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' /></svg>",
                title: "Google Calendar Sync",
                description: "Auto-sync meetings to personal calendars with two-way updates."
              }),
              createVNode(_component_FeatureItem, {
                icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' /></svg>",
                title: "Zoom Integration",
                description: "One-click Zoom link generation with auto-populated meeting details."
              }),
              createVNode(_component_FeatureItem, {
                icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /></svg>",
                title: "Email Notifications",
                description: "Automated reminders and meeting updates sent at optimal times."
              }),
              createVNode(_component_FeatureItem, {
                icon: "<svg fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' /></svg>",
                title: "Engagement Analytics",
                description: "Track participation and measure impact with detailed reports."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center mt-12">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "secondary",
        size: "lg",
        to: "/website/features"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Explore All Features \u2192`);
          } else {
            return [
              createTextVNode("Explore All Features \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-20 px-4 bg-gray-50"><div class="max-w-7xl mx-auto"><div class="text-center mb-16">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "coral",
        size: "lg",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`TRUSTED BY EDUCATORS`);
          } else {
            return [
              createTextVNode("TRUSTED BY EDUCATORS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-4xl font-bold font-display text-gray-900 mb-4"> Join 500+ Institutions Worldwide </h2><p class="text-xl text-gray-600">See what students and instructors are saying about Classsemble</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"><div class="text-center"><div class="text-5xl font-bold text-coral mb-2">10,000+</div><div class="text-gray-600">Meetings Scheduled</div></div><div class="text-center"><div class="text-5xl font-bold text-coral mb-2">50,000+</div><div class="text-gray-600">Messages Sent</div></div><div class="text-center"><div class="text-5xl font-bold text-coral mb-2">500+</div><div class="text-gray-600">Institutions</div></div><div class="text-center"><div class="text-5xl font-bold text-coral mb-2">98%</div><div class="text-gray-600">Satisfaction Rate</div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8">`);
      _push(ssrRenderComponent(_component_TestimonialCard, {
        name: "Dr. Sarah Johnson",
        role: "Professor",
        institution: "State University",
        quote: "Classsemble has transformed how my students collaborate. Office hours attendance is up 40% and engagement has never been higher."
      }, null, _parent));
      _push(ssrRenderComponent(_component_TestimonialCard, {
        name: "Michael Chen",
        role: "Student",
        institution: "Tech Institute",
        quote: "Finally, a tool that makes scheduling study groups easy! I love having everything in Canvas instead of juggling multiple apps."
      }, null, _parent));
      _push(ssrRenderComponent(_component_TestimonialCard, {
        name: "Emily Rodriguez",
        role: "Canvas Administrator",
        institution: "Community College",
        quote: "The LTI 1.3 integration was seamless. Our faculty and students were up and running in minutes. Highly recommend!"
      }, null, _parent));
      _push(`</div></div></section><section class="py-20 px-4 bg-white"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-4xl font-bold font-display text-gray-900 mb-4">Get Started in 3 Simple Steps</h2><p class="text-xl text-gray-600">Set up Classsemble in your Canvas course in minutes</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-12"><div class="text-center"><div class="w-20 h-20 bg-teal rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6"> 1 </div><h3 class="text-2xl font-bold font-display text-gray-900 mb-3">Install in Canvas</h3><p class="text-gray-600">Add Classsemble as an LTI tool in your Canvas course settings. Takes less than 5 minutes.</p></div><div class="text-center"><div class="w-20 h-20 bg-coral rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6"> 2 </div><h3 class="text-2xl font-bold font-display text-gray-900 mb-3">Launch from Canvas</h3><p class="text-gray-600">Students and instructors access Classsemble directly from course navigation with SSO.</p></div><div class="text-center"><div class="w-20 h-20 bg-lemon rounded-full flex items-center justify-center text-gray-900 text-3xl font-bold mx-auto mb-6"> 3 </div><h3 class="text-2xl font-bold font-display text-gray-900 mb-3">Start Collaborating</h3><p class="text-gray-600">Schedule meetings, chat in real-time, and track engagement\u2014all within Canvas.</p></div></div></div></section><section class="py-20 px-4 bg-gradient-to-r from-teal to-teal/90 text-white"><div class="max-w-4xl mx-auto text-center"><h2 class="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Transform Collaboration?</h2><p class="text-xl mb-8 opacity-90"> Join thousands of educators using Classsemble to enhance student engagement </p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "primary",
        size: "lg",
        href: "#signup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get Started Free`);
          } else {
            return [
              createTextVNode("Get Started Free")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        size: "lg",
        href: "/website/contact",
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
      _push(`</div><p class="text-sm opacity-75">No credit card required \u2022 14-day free trial \u2022 Cancel anytime</p></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/website/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-p8hzSRtm.mjs.map
