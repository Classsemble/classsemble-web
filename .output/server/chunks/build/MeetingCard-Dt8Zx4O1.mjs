import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MeetingCard",
  __ssrInlineRender: true,
  props: {
    meeting: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const formatTime = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
      });
    };
    const getStatus = () => {
      const now = /* @__PURE__ */ new Date();
      const start = new Date(props.meeting.startTime);
      const end = new Date(props.meeting.endTime);
      if (now > end) return "Past";
      if (now >= start && now <= end) return "Ongoing";
      const hoursUntil = (start.getTime() - now.getTime()) / (1e3 * 60 * 60);
      if (hoursUntil < 1) return "Starting Soon";
      return "Upcoming";
    };
    const getStatusClass = () => {
      const status = getStatus();
      switch (status) {
        case "Past":
          return "bg-gray-200 text-gray-700";
        case "Ongoing":
          return "bg-green-100 text-green-700";
        case "Starting Soon":
          return "bg-yellow-100 text-yellow-700";
        default:
          return "bg-blue-100 text-blue-700";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "meeting-card card hover:shadow-2xl transition-all cursor-pointer" }, _attrs))} data-v-30217110><div class="flex justify-between items-start mb-3" data-v-30217110><h4 class="text-lg font-semibold text-gray-900" data-v-30217110>${ssrInterpolate(__props.meeting.title)}</h4><span class="${ssrRenderClass(["status-badge", getStatusClass()])}" data-v-30217110>${ssrInterpolate(getStatus())}</span></div>`);
      if (__props.meeting.description) {
        _push(`<p class="text-gray-600 text-sm mb-3 line-clamp-2" data-v-30217110>${ssrInterpolate(__props.meeting.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-2" data-v-30217110><div class="flex items-center gap-2 text-sm text-gray-700" data-v-30217110><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-30217110><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-30217110></path></svg><span data-v-30217110>${ssrInterpolate(formatDate(__props.meeting.startTime))}</span></div><div class="flex items-center gap-2 text-sm text-gray-700" data-v-30217110><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-30217110><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-30217110></path></svg><span data-v-30217110>${ssrInterpolate(formatTime(__props.meeting.startTime))} - ${ssrInterpolate(formatTime(__props.meeting.endTime))}</span></div>`);
      if (__props.meeting.location) {
        _push(`<div class="flex items-center gap-2 text-sm text-gray-700" data-v-30217110><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-30217110><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-v-30217110></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-v-30217110></path></svg><span data-v-30217110>${ssrInterpolate(__props.meeting.location)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.meeting.creator) {
        _push(`<div class="flex items-center gap-2 text-sm text-gray-700" data-v-30217110><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-30217110><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-30217110></path></svg><span data-v-30217110>Organized by ${ssrInterpolate(__props.meeting.creator.name)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.meeting.attendees && __props.meeting.attendees.length > 0) {
        _push(`<div class="flex items-center gap-2 text-sm text-gray-700" data-v-30217110><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-30217110><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-30217110></path></svg><span data-v-30217110>${ssrInterpolate(__props.meeting.attendees.length)} attendee${ssrInterpolate(__props.meeting.attendees.length !== 1 ? "s" : "")}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.meeting.zoomLink) {
        _push(`<div class="mt-4 pt-4 border-t" data-v-30217110><a${ssrRenderAttr("href", __props.meeting.zoomLink)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm" data-v-30217110><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-30217110><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-v-30217110></path></svg> Join Zoom Meeting </a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MeetingCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30217110"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=MeetingCard-Dt8Zx4O1.mjs.map
