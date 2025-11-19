import { _ as _sfc_main$1$1, a as __nuxt_component_1 } from './Footer-D7SzjJZK.mjs';
import { defineComponent, mergeProps, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: {
    title: { default: "Get in Touch" },
    subtitle: { default: "We'd love to hear from you. Send us a message and we'll respond as soon as possible." }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      subject: "",
      message: ""
    });
    const submitting = ref(false);
    const error = ref("");
    const success = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-form card max-w-2xl mx-auto" }, _attrs))}><h3 class="text-2xl font-bold text-gray-900 mb-2 text-center">${ssrInterpolate(__props.title)}</h3><p class="text-gray-600 mb-6 text-center">${ssrInterpolate(__props.subtitle)}</p><form class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-1"> First Name * </label><input${ssrRenderAttr("value", unref(form).firstName)} type="text" required class="input-field" placeholder="John"></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Last Name * </label><input${ssrRenderAttr("value", unref(form).lastName)} type="text" required class="input-field" placeholder="Doe"></div></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Email Address * </label><input${ssrRenderAttr("value", unref(form).email)} type="email" required class="input-field" placeholder="john.doe@university.edu"></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Organization / Institution </label><input${ssrRenderAttr("value", unref(form).organization)} type="text" class="input-field" placeholder="University of Example"></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Subject * </label><input${ssrRenderAttr("value", unref(form).subject)} type="text" required class="input-field" placeholder="How can we help you?"></div><div><label class="block text-sm font-medium text-gray-700 mb-1"> Message * </label><textarea required rows="5" class="input-field" placeholder="Tell us more about your needs...">${ssrInterpolate(unref(form).message)}</textarea></div>`);
      if (unref(error)) {
        _push(`<div class="text-red-600 text-sm bg-red-50 p-3 rounded">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(success)) {
        _push(`<div class="text-green-600 text-sm bg-green-50 p-3 rounded">${ssrInterpolate(unref(success))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="btn-primary w-full"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""}>${ssrInterpolate(unref(submitting) ? "Sending..." : "Send Message")}</button><p class="text-xs text-gray-500 text-center"> By submitting this form, you agree to our Privacy Policy and Terms of Service. </p></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const handleContactSubmit = (data) => {
      console.log("Contact form submitted:", data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1$1;
      const _component_ContactForm = _sfc_main$1;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="bg-linen py-20 px-4"><div class="max-w-4xl mx-auto text-center"><h1 class="text-5xl font-bold text-teal mb-6">Get in Touch</h1><p class="text-xl text-ash"> Have questions? Want a demo? We&#39;d love to hear from you. </p></div></section><section class="py-20 px-4"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div>`);
      _push(ssrRenderComponent(_component_ContactForm, { onSubmit: handleContactSubmit }, null, _parent));
      _push(`</div><div class="space-y-8"><div class="card"><h3 class="text-xl font-bold mb-4 text-teal">Contact Information</h3><div class="space-y-4"><div class="flex items-start gap-3"><svg class="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><div><p class="font-medium">Email</p><a href="mailto:support@classsemble.com" class="text-teal hover:underline"> support@classsemble.com </a></div></div><div class="flex items-start gap-3"><svg class="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><div><p class="font-medium">Phone</p><a href="tel:+1-555-123-4567" class="text-teal hover:underline"> +1 (555) 123-4567 </a></div></div><div class="flex items-start gap-3"><svg class="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div><p class="font-medium">Address</p><p class="text-ash"> 123 Education Street<br> San Francisco, CA 94102<br> United States </p></div></div></div></div><div class="card bg-lemon"><h3 class="text-xl font-bold mb-4 text-teal">Schedule a Demo</h3><p class="text-ash mb-4"> See Classsemble in action! Book a personalized demo with our team to explore how we can enhance your Canvas experience. </p><a href="#" class="btn-primary inline-block"> Book a Demo \u2192 </a></div><div class="card"><h3 class="text-xl font-bold mb-4 text-teal">Quick Links</h3><div class="space-y-2"><a href="#" class="block text-teal hover:underline">Documentation</a><a href="#" class="block text-teal hover:underline">Installation Guide</a><a href="#" class="block text-teal hover:underline">FAQ</a><a href="#" class="block text-teal hover:underline">Support Portal</a></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/website/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-C7GeLbm5.mjs.map
