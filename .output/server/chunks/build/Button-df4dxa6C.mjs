import { defineComponent, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createBlock, createCommentVNode, renderSlot, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-ChmzVw3V.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    const badgeClasses = computed(() => {
      const base = "inline-flex items-center font-semibold rounded-full";
      const variants = {
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        info: "bg-blue-100 text-blue-800",
        coral: "bg-coral/10 text-coral",
        teal: "bg-teal/10 text-teal",
        lemon: "bg-lemon text-gray-800"
      };
      const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base"
      };
      return [
        base,
        variants[props.variant || "teal"],
        sizes[props.size || "md"]
      ].join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(badgeClasses) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    to: {},
    href: {},
    type: {},
    disabled: { type: Boolean },
    loading: { type: Boolean },
    fullWidth: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tag = computed(() => {
      if (props.to) return __nuxt_component_0;
      if (props.href) return "a";
      return "button";
    });
    const buttonClasses = computed(() => {
      const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
      const variants = {
        primary: "bg-coral text-white hover:bg-coral/90 focus:ring-coral shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
        secondary: "bg-teal text-white hover:bg-teal/90 focus:ring-teal shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
        outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white focus:ring-teal",
        ghost: "text-teal hover:bg-teal/10 focus:ring-teal"
      };
      const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
      };
      const width = props.fullWidth ? "w-full" : "";
      return [
        base,
        variants[props.variant || "primary"],
        sizes[props.size || "md"],
        width
      ].join(" ");
    });
    const handleClick = (event) => {
      if (!props.disabled && !props.loading) {
        emit("click", event);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(tag)), mergeProps({
        to: __props.to,
        href: __props.href,
        type: __props.type,
        disabled: __props.disabled || __props.loading,
        class: unref(buttonClasses),
        onClick: handleClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.loading) {
              _push2(`<span class="inline-block w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.loading ? (openBlock(), createBlock("span", {
                key: 0,
                class: "inline-block w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Button-df4dxa6C.mjs.map
