import { defineComponent, ref, mergeProps, unref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { _ as _export_sfc, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_1 } from './MeetingCard-Dt8Zx4O1.mjs';
import { _ as _sfc_main$2 } from './MeetingForm-BK3Tbd-Q.mjs';
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
  __name: "CalendarView",
  __ssrInlineRender: true,
  props: {
    meetings: {}
  },
  emits: ["eventClick", "dateSelect"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const calendarOptions = computed(() => ({
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: "timeGridWeek",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      events: props.meetings.map((meeting) => ({
        id: meeting.id,
        title: meeting.title,
        start: meeting.startTime,
        end: meeting.endTime,
        extendedProps: {
          description: meeting.description,
          location: meeting.location,
          zoomLink: meeting.zoomLink
        }
      })),
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: true,
      eventClick: (info) => {
        const meeting = props.meetings.find((m) => m.id === info.event.id);
        if (meeting) {
          emit("eventClick", meeting);
        }
      },
      select: (info) => {
        emit("dateSelect", info.start, info.end);
      },
      eventColor: "#0ea5e9",
      height: "auto"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calendar-view" }, _attrs))} data-v-5d8a99f1>`);
      _push(ssrRenderComponent(unref(FullCalendar), { options: unref(calendarOptions) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalendarView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5d8a99f1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "schedule",
  __ssrInlineRender: true,
  setup(__props) {
    const meetings = ref([]);
    const showCreateForm = ref(false);
    const selectedMeeting = ref(null);
    const courseId = ref("");
    const loadMeetings = async () => {
      try {
        const response = await $fetch("/api/meetings");
        if (response.success) {
          meetings.value = response.meetings;
        }
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };
    const handleEventClick = (meeting) => {
      navigateTo(`/meeting/${meeting.id}`);
    };
    const handleDateSelect = (start, end) => {
      selectedMeeting.value = {
        startTime: start.toISOString(),
        endTime: end.toISOString()
      };
      showCreateForm.value = true;
    };
    const handleMeetingCreated = async () => {
      showCreateForm.value = false;
      selectedMeeting.value = null;
      await loadMeetings();
    };
    const closeForm = () => {
      showCreateForm.value = false;
      selectedMeeting.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CalendarView = __nuxt_component_0;
      const _component_MeetingCard = __nuxt_component_1;
      const _component_MeetingForm = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "schedule-page min-h-screen bg-gray-50 p-6" }, _attrs))}><div class="max-w-7xl mx-auto"><div class="mb-6 flex justify-between items-center"><div><h1 class="text-3xl font-bold text-gray-900 mb-2">Meeting Schedule</h1><p class="text-gray-600">View and manage your course meetings</p></div><button class="btn-primary"><svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Schedule Meeting </button></div><div class="bg-white rounded-lg shadow p-6 mb-6">`);
      _push(ssrRenderComponent(_component_CalendarView, {
        meetings: unref(meetings),
        onEventClick: handleEventClick,
        onDateSelect: handleDateSelect
      }, null, _parent));
      _push(`</div><div class="bg-white rounded-lg shadow p-6"><h2 class="text-xl font-bold text-gray-900 mb-4">All Meetings</h2>`);
      if (unref(meetings).length > 0) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(unref(meetings), (meeting) => {
          _push(ssrRenderComponent(_component_MeetingCard, {
            key: meeting.id,
            meeting,
            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/meeting/${meeting.id}`)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-12 text-gray-500"><svg class="w-20 h-20 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="text-lg mb-2">No meetings scheduled yet</p><p class="text-sm mb-4">Create your first meeting to get started</p><button class="btn-primary"> Schedule a Meeting </button></div>`);
      }
      _push(`</div></div>`);
      if (unref(showCreateForm)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"><div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6">`);
        _push(ssrRenderComponent(_component_MeetingForm, {
          "course-id": unref(courseId),
          meeting: unref(selectedMeeting),
          "on-cancel": closeForm,
          onSuccess: handleMeetingCreated
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/schedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=schedule-DGdM_pbO.mjs.map
