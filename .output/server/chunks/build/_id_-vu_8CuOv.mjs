import { _ as _sfc_main$1 } from './MeetingForm-BK3Tbd-Q.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const meetingId = route.params.id;
    const meeting = ref(null);
    const loading = ref(true);
    const error = ref("");
    const showEditForm = ref(false);
    const currentUserId = ref("");
    const userRole = ref("");
    const canEdit = computed(() => {
      return meeting.value && (meeting.value.createdBy === currentUserId.value || userRole.value === "instructor");
    });
    const loadMeeting = async () => {
      try {
        const response = await $fetch(`/api/meetings/${meetingId}`);
        if (response.success) {
          meeting.value = response.meeting;
        }
      } catch (err) {
        throw err;
      }
    };
    const handleEditSuccess = async () => {
      showEditForm.value = false;
      await loadMeeting();
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
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
    const getInitials = (name) => {
      return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MeetingForm = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "meeting-detail-page min-h-screen bg-gray-50 p-6" }, _attrs))}><div class="max-w-4xl mx-auto">`);
      if (unref(loading)) {
        _push(`<div class="text-center py-12"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div><p class="mt-4 text-gray-600">Loading meeting details...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center"><svg class="w-16 h-16 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><h2 class="text-xl font-bold text-red-900 mb-2">Error Loading Meeting</h2><p class="text-red-700 mb-4">${ssrInterpolate(unref(error))}</p><button class="btn-primary"> Back to Schedule </button></div>`);
      } else if (unref(meeting)) {
        _push(`<div class="space-y-6"><div class="bg-white rounded-lg shadow p-6"><div class="flex justify-between items-start mb-4"><div class="flex-1"><h1 class="text-3xl font-bold text-gray-900 mb-2">${ssrInterpolate(unref(meeting).title)}</h1><div class="flex items-center gap-4 text-sm text-gray-600"><span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${ssrInterpolate(formatDate(unref(meeting).startTime))}</span><span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${ssrInterpolate(formatTime(unref(meeting).startTime))} - ${ssrInterpolate(formatTime(unref(meeting).endTime))}</span></div></div>`);
        if (unref(canEdit)) {
          _push(`<div class="flex gap-2"><button class="btn-outline"> Edit </button><button class="btn-outline text-red-600 border-red-600 hover:bg-red-50"> Delete </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(meeting).description) {
          _push(`<p class="text-gray-700 mb-4">${ssrInterpolate(unref(meeting).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">`);
        if (unref(meeting).location) {
          _push(`<div class="flex items-start gap-2"><svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div><p class="text-sm font-medium text-gray-900">Location</p><p class="text-sm text-gray-600">${ssrInterpolate(unref(meeting).location)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(meeting).creator) {
          _push(`<div class="flex items-start gap-2"><svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><div><p class="text-sm font-medium text-gray-900">Organizer</p><p class="text-sm text-gray-600">${ssrInterpolate(unref(meeting).creator.name)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(meeting).zoomLink) {
          _push(`<div class="mt-6 pt-6 border-t"><a${ssrRenderAttr("href", unref(meeting).zoomLink)} target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> Join Zoom Meeting </a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(meeting).attendees && unref(meeting).attendees.length > 0) {
          _push(`<div class="bg-white rounded-lg shadow p-6"><h2 class="text-xl font-bold text-gray-900 mb-4">Attendees (${ssrInterpolate(unref(meeting).attendees.length)})</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
          ssrRenderList(unref(meeting).attendees, (attendee) => {
            _push(`<div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><div class="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-semibold">${ssrInterpolate(getInitials(attendee.name))}</div><div><p class="font-medium text-gray-900">${ssrInterpolate(attendee.name)}</p>`);
            if (attendee.email) {
              _push(`<p class="text-sm text-gray-500">${ssrInterpolate(attendee.email)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-center"><button class="btn-outline"> \u2190 Back to Schedule </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(showEditForm)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"><div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6">`);
        _push(ssrRenderComponent(_component_MeetingForm, {
          meeting: unref(meeting),
          "course-id": unref(meeting).courseId,
          "on-cancel": () => showEditForm.value = false,
          onSuccess: handleEditSuccess
        }, null, _parent));
        _push(`</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/meeting/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-vu_8CuOv.mjs.map
