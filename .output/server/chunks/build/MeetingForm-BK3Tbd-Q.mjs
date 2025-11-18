import { defineComponent, computed, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MeetingForm",
  __ssrInlineRender: true,
  props: {
    meeting: {},
    courseId: {},
    onCancel: { type: Function }
  },
  emits: ["submit", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isEdit = computed(() => {
      var _a;
      return !!((_a = props.meeting) == null ? void 0 : _a.id);
    });
    const form = ref({
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      location: "",
      zoomLink: "",
      courseId: props.courseId
    });
    const submitting = ref(false);
    const error = ref("");
    watch(() => props.meeting, (meeting) => {
      if (meeting) {
        form.value = {
          ...meeting,
          startTime: formatDateTimeLocal(meeting.startTime),
          endTime: formatDateTimeLocal(meeting.endTime)
        };
      }
    }, { immediate: true });
    const formatDateTimeLocal = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "meeting-form card" }, _attrs))}><h3 class="text-xl font-bold mb-4">${ssrInterpolate(unref(isEdit) ? "Edit Meeting" : "Create New Meeting")}</h3><form class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-1"> Meeting Title * </label><input${ssrRenderAttr("value", form.value.title)} type="text" required class="input-field" placeholder="e.g., Study Group Session"></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Description </label><textarea rows="3" class="input-field" placeholder="What will you discuss?">${ssrInterpolate(form.value.description)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-1"> Start Date &amp; Time * </label><input${ssrRenderAttr("value", form.value.startTime)} type="datetime-local" required class="input-field"></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> End Date &amp; Time * </label><input${ssrRenderAttr("value", form.value.endTime)} type="datetime-local" required class="input-field"></div></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Location </label><input${ssrRenderAttr("value", form.value.location)} type="text" class="input-field" placeholder="e.g., Library Room 204"></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Zoom Link (Optional) </label><input${ssrRenderAttr("value", form.value.zoomLink)} type="url" class="input-field" placeholder="https://zoom.us/j/..."></div>`);
      if (error.value) {
        _push(`<div class="text-red-600 text-sm bg-red-50 p-3 rounded">${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-3 pt-2"><button type="submit" class="btn-primary flex-1"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""}>${ssrInterpolate(submitting.value ? "Saving..." : unref(isEdit) ? "Update Meeting" : "Create Meeting")}</button>`);
      if (__props.onCancel) {
        _push(`<button type="button" class="btn-outline"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""}> Cancel </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MeetingForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=MeetingForm-BK3Tbd-Q.mjs.map
