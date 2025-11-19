import { defineComponent, ref, mergeProps, unref, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChatBox",
  __ssrInlineRender: true,
  props: {
    courseId: {},
    courseName: {},
    currentUserId: {},
    onlineCount: { default: 0 }
  },
  emits: ["messageSent"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const messages = ref([]);
    const newMessage = ref("");
    const sending = ref(false);
    const messagesContainer = ref(null);
    const fetchMessages = async () => {
      try {
        const response = await $fetch(`/api/chat/${props.courseId}`);
        if (response.success) {
          messages.value = response.messages;
          await nextTick();
          scrollToBottom();
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    const isCurrentUser = (userId) => userId === props.currentUserId;
    const getInitials = (name) => {
      return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    };
    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const diff = now.getTime() - date.getTime();
      const hours = Math.floor(diff / (1e3 * 60 * 60));
      if (hours < 24) {
        return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
      }
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };
    const scrollToBottom = () => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    };
    watch(() => props.courseId, () => {
      fetchMessages();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-box flex flex-col h-full" }, _attrs))} data-v-a0df4d70><div class="chat-header bg-teal text-white p-4 rounded-t-lg" data-v-a0df4d70><h3 class="text-lg font-semibold" data-v-a0df4d70>${ssrInterpolate(__props.courseName || "Course Chat")}</h3><p class="text-sm opacity-90" data-v-a0df4d70>${ssrInterpolate(__props.onlineCount)} online</p></div><div class="messages-container flex-1 overflow-y-auto p-4 space-y-4 bg-linen" data-v-a0df4d70><!--[-->`);
      ssrRenderList(messages.value, (message) => {
        _push(`<div class="${ssrRenderClass(["message", isCurrentUser(message.userId) ? "message-own" : "message-other"])}" data-v-a0df4d70><div class="message-header flex items-center gap-2 mb-1" data-v-a0df4d70><div class="avatar" data-v-a0df4d70>${ssrInterpolate(getInitials(message.user.name))}</div><div class="flex-1" data-v-a0df4d70><span class="font-semibold text-sm text-teal" data-v-a0df4d70>${ssrInterpolate(message.user.name)}</span><span class="text-xs text-ash ml-2" data-v-a0df4d70>${ssrInterpolate(formatTime(message.timestamp))}</span></div></div><div class="message-content bg-white rounded-lg p-3 shadow-sm" data-v-a0df4d70>${ssrInterpolate(message.content)}</div></div>`);
      });
      _push(`<!--]-->`);
      if (messages.value.length === 0) {
        _push(`<div class="text-center text-ash py-8" data-v-a0df4d70> No messages yet. Start the conversation! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="chat-input bg-lemon p-4 border-t border-ash rounded-b-lg" data-v-a0df4d70><form class="flex gap-2" data-v-a0df4d70><input${ssrRenderAttr("value", newMessage.value)} type="text" placeholder="Type your message..." class="input-field flex-1 bg-white border-ash focus:border-teal focus:ring-teal"${ssrIncludeBooleanAttr(sending.value) ? " disabled" : ""} data-v-a0df4d70><button type="submit" class="btn-primary bg-coral hover:bg-coral/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!newMessage.value.trim() || sending.value) ? " disabled" : ""} data-v-a0df4d70>`);
      if (!sending.value) {
        _push(`<span data-v-a0df4d70>Send</span>`);
      } else {
        _push(`<span data-v-a0df4d70>Sending...</span>`);
      }
      _push(`</button></form></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChatBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a0df4d70"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    const courseId = ref("");
    const courseName = ref("");
    const currentUserId = ref("");
    const onlineCount = ref(0);
    const handleMessageSent = (message) => {
      console.log("Message sent:", message);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChatBox = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-page min-h-screen bg-linen p-6" }, _attrs))}><div class="max-w-6xl mx-auto"><div class="mb-6"><h1 class="text-3xl font-bold text-teal mb-2">Course Chat</h1><p class="text-ash">Connect with your classmates in real-time</p></div><div class="bg-lemon rounded-lg shadow-lg" style="${ssrRenderStyle({ "height": "calc(100vh - 200px)" })}">`);
      if (unref(courseId) && unref(currentUserId)) {
        _push(ssrRenderComponent(_component_ChatBox, {
          "course-id": unref(courseId),
          "course-name": unref(courseName),
          "current-user-id": unref(currentUserId),
          "online-count": unref(onlineCount),
          onMessageSent: handleMessageSent
        }, null, _parent));
      } else {
        _push(`<div class="flex items-center justify-center h-full text-teal"> Loading chat... </div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-O1nFms4B.mjs.map
