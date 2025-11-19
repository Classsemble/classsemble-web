import { _ as _sfc_main$1, a as __nuxt_component_1 } from './Footer-D7SzjJZK.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './Button-8K_ltHoJ.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "status",
  __ssrInlineRender: true,
  setup(__props) {
    const getTooltip = (day) => {
      if (day === 23) return "Minor outage: 3 minutes";
      if (day === 45) return "Major outage: 45 minutes";
      if (day === 67) return "Minor outage: 15 minutes";
      return "No issues";
    };
    useSeoMeta({
      title: "System Status - Classsemble",
      description: "Real-time status and uptime information for all Classsemble services. Check current system health and incident history.",
      ogTitle: "System Status - Classsemble",
      ogDescription: "Real-time status and uptime information for all Classsemble services."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      const _component_Badge = _sfc_main$1$1;
      const _component_Button = _sfc_main$2;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "status-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="bg-gradient-to-br from-teal to-teal/80 text-white py-20 px-4"><div class="max-w-4xl mx-auto text-center">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "lemon",
        size: "lg",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SYSTEM STATUS`);
          } else {
            return [
              createTextVNode("SYSTEM STATUS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-5xl md:text-6xl font-bold font-display mb-6">Classsemble Status</h1><p class="text-xl opacity-90 mb-8"> Real-time status and uptime information for all Classsemble services </p><div class="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-md mx-auto"><div class="flex items-center justify-center mb-4"><div class="w-6 h-6 bg-green-400 rounded-full mr-4 animate-pulse"></div><span class="text-2xl font-bold">All Systems Operational</span></div><p class="opacity-90">99.98% uptime over the last 90 days</p></div></div></section><section class="py-16 px-4 bg-white"><div class="max-w-6xl mx-auto"><h2 class="text-3xl font-bold font-display text-gray-900 text-center mb-12">Current System Status</h2><div class="space-y-4"><div class="bg-gray-50 rounded-xl p-6 flex items-center justify-between"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div><div><h3 class="font-bold text-gray-900">API Services</h3><p class="text-gray-600 text-sm">Core API functionality and endpoints</p></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Operational`);
          } else {
            return [
              createTextVNode("Operational")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">99.99% uptime</span></div></div><div class="bg-gray-50 rounded-xl p-6 flex items-center justify-between"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div><div><h3 class="font-bold text-gray-900">Real-Time Chat</h3><p class="text-gray-600 text-sm">WebSocket connections and message delivery</p></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Operational`);
          } else {
            return [
              createTextVNode("Operational")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">99.97% uptime</span></div></div><div class="bg-gray-50 rounded-xl p-6 flex items-center justify-between"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div><div><h3 class="font-bold text-gray-900">Meeting Scheduler</h3><p class="text-gray-600 text-sm">Calendar integration and meeting creation</p></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Operational`);
          } else {
            return [
              createTextVNode("Operational")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">99.98% uptime</span></div></div><div class="bg-gray-50 rounded-xl p-6 flex items-center justify-between"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div><div><h3 class="font-bold text-gray-900">Analytics Dashboard</h3><p class="text-gray-600 text-sm">Data processing and reporting services</p></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Operational`);
          } else {
            return [
              createTextVNode("Operational")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">99.96% uptime</span></div></div><div class="bg-gray-50 rounded-xl p-6 flex items-center justify-between"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div><div><h3 class="font-bold text-gray-900">Database</h3><p class="text-gray-600 text-sm">Primary database cluster performance</p></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Operational`);
          } else {
            return [
              createTextVNode("Operational")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">99.99% uptime</span></div></div><div class="bg-gray-50 rounded-xl p-6 flex items-center justify-between"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div><div><h3 class="font-bold text-gray-900">Email Notifications</h3><p class="text-gray-600 text-sm">Meeting reminders and system notifications</p></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Operational`);
          } else {
            return [
              createTextVNode("Operational")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">99.94% uptime</span></div></div><div class="bg-gray-50 rounded-xl p-6 flex items-center justify-between"><div class="flex items-center"><div class="w-4 h-4 bg-green-500 rounded-full mr-4"></div><div><h3 class="font-bold text-gray-900">LTI Integration</h3><p class="text-gray-600 text-sm">Canvas LMS launches and authentication</p></div></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_Badge, { variant: "success" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Operational`);
          } else {
            return [
              createTextVNode("Operational")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">99.98% uptime</span></div></div></div></div></section><section class="py-16 px-4 bg-gray-50"><div class="max-w-6xl mx-auto"><h2 class="text-3xl font-bold font-display text-gray-900 text-center mb-12">90-Day Uptime History</h2><div class="bg-white rounded-xl shadow-md p-8"><div class="flex items-center justify-between mb-6"><h3 class="text-xl font-bold text-gray-900">Overall System Availability</h3>`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "success",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`99.98% Uptime`);
          } else {
            return [
              createTextVNode("99.98% Uptime")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-6"><div class="flex items-center justify-between text-sm text-gray-600 mb-4"><span>August 2025</span><span>September 2025</span><span>October 2025</span><span>November 2025</span></div><div class="grid grid-cols-30 gap-1 mb-4"><!--[-->`);
      ssrRenderList(90, (day) => {
        _push(`<div class="${ssrRenderClass([
          "w-3 h-8 rounded-sm",
          day === 23 || day === 67 ? "bg-yellow-400" : day === 45 ? "bg-red-400" : "bg-green-500"
        ])}"${ssrRenderAttr("title", getTooltip(day))}></div>`);
      });
      _push(`<!--]--></div><div class="flex items-center justify-between text-xs text-gray-500"><div class="flex items-center space-x-4"><div class="flex items-center"><div class="w-3 h-3 bg-green-500 rounded-sm mr-2"></div><span>No issues</span></div><div class="flex items-center"><div class="w-3 h-3 bg-yellow-400 rounded-sm mr-2"></div><span>Minor outage</span></div><div class="flex items-center"><div class="w-3 h-3 bg-red-400 rounded-sm mr-2"></div><span>Major outage</span></div></div><span>90 days ago - Today</span></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="text-center"><div class="text-2xl font-bold text-teal">89ms</div><div class="text-sm text-gray-600">Average Response Time</div></div><div class="text-center"><div class="text-2xl font-bold text-coral">99.98%</div><div class="text-sm text-gray-600">Uptime This Month</div></div><div class="text-center"><div class="text-2xl font-bold text-purple-600">2.3 min</div><div class="text-sm text-gray-600">Mean Time to Recovery</div></div></div></div></div></section><section class="py-16 px-4 bg-white"><div class="max-w-6xl mx-auto"><h2 class="text-3xl font-bold font-display text-gray-900 text-center mb-12">Recent Incidents</h2><div class="space-y-6"><div class="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-6"><div class="flex items-start justify-between"><div class="flex-1"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "success",
        size: "sm",
        class: "mr-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resolved`);
          } else {
            return [
              createTextVNode("Resolved")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">November 15, 2025 at 10:30 AM PST</span></div><h3 class="font-bold text-gray-900 mb-2">Brief Chat Service Interruption</h3><p class="text-gray-700 mb-3"> We experienced a 3-minute interruption in our real-time chat service due to a WebSocket server restart during routine maintenance. </p><div class="text-sm text-gray-600"><strong>Impact:</strong> Some users may have experienced delayed message delivery <br><strong>Duration:</strong> 3 minutes <br><strong>Root Cause:</strong> Scheduled maintenance window overrun </div></div></div></div><div class="border-l-4 border-yellow-500 bg-yellow-50 rounded-r-xl p-6"><div class="flex items-start justify-between"><div class="flex-1"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(_component_Badge, {
        variant: "warning",
        size: "sm",
        class: "mr-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resolved`);
          } else {
            return [
              createTextVNode("Resolved")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">November 10, 2025 at 2:15 PM PST</span></div><h3 class="font-bold text-gray-900 mb-2">Slow API Response Times</h3><p class="text-gray-700 mb-3"> API response times were elevated (200-400ms instead of usual ~90ms) for approximately 15 minutes due to database query optimization. </p><div class="text-sm text-gray-600"><strong>Impact:</strong> Slower page loads and feature response times <br><strong>Duration:</strong> 15 minutes <br><strong>Root Cause:</strong> Database query optimization process </div></div></div></div><div class="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-6"><div class="flex items-start justify-between"><div class="flex-1"><div class="flex items-center mb-2">`);
      _push(ssrRenderComponent(_component_Badge, { class: "mr-3 bg-red-100 text-red-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resolved`);
          } else {
            return [
              createTextVNode("Resolved")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-sm text-gray-500">October 28, 2025 at 11:00 AM PST</span></div><h3 class="font-bold text-gray-900 mb-2">Calendar Integration Outage</h3><p class="text-gray-700 mb-3"> Google Calendar integration was unavailable for 45 minutes due to expired OAuth certificates. Meeting scheduling was temporarily affected. </p><div class="text-sm text-gray-600"><strong>Impact:</strong> Calendar sync and meeting creation temporarily unavailable <br><strong>Duration:</strong> 45 minutes <br><strong>Root Cause:</strong> Expired OAuth certificates <br><strong>Resolution:</strong> Certificates renewed and monitoring improved </div></div></div></div></div><div class="text-center mt-12"><p class="text-gray-600 mb-4">Want to stay updated on system status?</p>`);
      _push(ssrRenderComponent(_component_Button, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Subscribe to Status Updates`);
          } else {
            return [
              createTextVNode("Subscribe to Status Updates")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-16 px-4 bg-gray-50"><div class="max-w-6xl mx-auto"><h2 class="text-3xl font-bold font-display text-gray-900 text-center mb-12">Performance Metrics</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-white rounded-xl shadow-md p-6 text-center"><div class="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div class="text-3xl font-bold text-gray-900 mb-2">89ms</div><div class="text-sm text-gray-600">Average Response Time</div><div class="text-xs text-green-600 mt-1">\u2193 12ms from last month</div></div><div class="bg-white rounded-xl shadow-md p-6 text-center"><div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="text-3xl font-bold text-gray-900 mb-2">99.98%</div><div class="text-sm text-gray-600">Uptime (30 days)</div><div class="text-xs text-green-600 mt-1">\u2191 0.02% from last month</div></div><div class="bg-white rounded-xl shadow-md p-6 text-center"><div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="text-3xl font-bold text-gray-900 mb-2">2.3min</div><div class="text-sm text-gray-600">Mean Time to Recovery</div><div class="text-xs text-green-600 mt-1">\u2193 1.2min from last month</div></div><div class="bg-white rounded-xl shadow-md p-6 text-center"><div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div><div class="text-3xl font-bold text-gray-900 mb-2">250ms</div><div class="text-sm text-gray-600">Chat Message Latency</div><div class="text-xs text-green-600 mt-1">\u2193 50ms from last month</div></div></div></div></section><section class="py-16 px-4 bg-gradient-to-r from-teal to-coral text-white"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl font-bold font-display mb-4">Stay Updated</h2><p class="text-xl opacity-90 mb-8"> Subscribe to receive notifications about service updates and maintenance windows </p><div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"><input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "primary",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Subscribe`);
          } else {
            return [
              createTextVNode("Subscribe")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-sm opacity-75 mt-4"> You can also follow us on <a href="#" class="underline hover:no-underline">Twitter @ClasssembleHQ</a> for real-time updates </p></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/website/status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=status-DK4jZIhc.mjs.map
