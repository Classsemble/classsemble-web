import { _ as __nuxt_component_0 } from './nuxt-link-ChmzVw3V.mjs';
import { _ as __nuxt_component_1 } from './MeetingCard-Dt8Zx4O1.mjs';
import { n as navigateTo } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const user = ref(null);
    const upcomingMeetings = ref([]);
    const recentMessages = ref([]);
    const unreadCount = ref(0);
    const memberCount = ref(0);
    const getInitials = (name) => {
      return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    };
    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const diff = now.getTime() - date.getTime();
      const hours = Math.floor(diff / (1e3 * 60 * 60));
      if (hours < 1) return "Just now";
      if (hours < 24) return `${hours}h ago`;
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_MeetingCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard min-h-screen bg-gray-50 p-6" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back, ${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.name)}!</h1><p class="text-gray-600">Here&#39;s what&#39;s happening in your course</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div class="card"><div class="flex items-center justify-between"><div><p class="text-sm text-gray-600 mb-1">Upcoming Meetings</p><p class="text-3xl font-bold text-primary-600">${ssrInterpolate(unref(upcomingMeetings).length)}</p></div><div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div></div></div><div class="card"><div class="flex items-center justify-between"><div><p class="text-sm text-gray-600 mb-1">Unread Messages</p><p class="text-3xl font-bold text-secondary-600">${ssrInterpolate(unref(unreadCount))}</p></div><div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div></div></div><div class="card"><div class="flex items-center justify-between"><div><p class="text-sm text-gray-600 mb-1">Course Members</p><p class="text-3xl font-bold text-green-600">${ssrInterpolate(unref(memberCount))}</p></div><div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"><svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow p-6"><div class="flex justify-between items-center mb-6"><h2 class="text-xl font-bold text-gray-900">Upcoming Meetings</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/schedule",
        class: "text-primary-600 hover:text-primary-700 font-medium text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Calendar \u2192 `);
          } else {
            return [
              createTextVNode(" View Calendar \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(upcomingMeetings).length > 0) {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(upcomingMeetings).slice(0, 3), (meeting) => {
          _push(ssrRenderComponent(_component_MeetingCard, {
            key: meeting.id,
            meeting,
            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/meeting/${meeting.id}`)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-8 text-gray-500"><svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="mb-2">No upcoming meetings</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/schedule",
          class: "btn-primary inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Schedule a Meeting `);
            } else {
              return [
                createTextVNode(" Schedule a Meeting ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow p-6"><div class="flex justify-between items-center mb-6"><h2 class="text-xl font-bold text-gray-900">Recent Messages</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/chat",
        class: "text-primary-600 hover:text-primary-700 font-medium text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Open Chat \u2192 `);
          } else {
            return [
              createTextVNode(" Open Chat \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(recentMessages).length > 0) {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(recentMessages).slice(0, 5), (message) => {
          _push(`<div class="border-b pb-3 last:border-b-0"><div class="flex items-start gap-2"><div class="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">${ssrInterpolate(getInitials(message.user.name))}</div><div class="flex-1 min-w-0"><p class="text-sm font-semibold text-gray-900">${ssrInterpolate(message.user.name)}</p><p class="text-sm text-gray-600 truncate">${ssrInterpolate(message.content)}</p><p class="text-xs text-gray-400 mt-1">${ssrInterpolate(formatTime(message.timestamp))}</p></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-8 text-gray-500"><p class="mb-2">No messages yet</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/chat",
          class: "text-primary-600 hover:text-primary-700 font-medium text-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Start chatting \u2192 `);
            } else {
              return [
                createTextVNode(" Start chatting \u2192 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BbM6yXO6.mjs.map
