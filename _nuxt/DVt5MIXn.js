import {
  V as Tt,
  _ as ft,
  d as Z,
  s as _t,
  b as fe,
  i as Se,
  r as Pe,
  A as ht,
  e as Nt,
  p as J,
  c as K,
  o as qe,
  f as Ke,
} from "./D_iu627J.js";
import {
  $ as Ye,
  a7 as xt,
  a0 as Ge,
  r as S,
  a5 as Je,
  f as o,
  al as Ze,
  d as xe,
  i as ze,
  am as je,
  s as q,
  a as n,
  c as p,
  p as W,
  t as r,
  g as R,
  b as e,
  n as se,
  Q as ct,
  w as A,
  a_ as Ut,
  aL as Lt,
  y as Ft,
  H as he,
  u as t,
  F as Q,
  j as Ve,
  e as ce,
  h as z,
  a2 as De,
  I as Bt,
  X as qt,
  ax as jt,
  a8 as Mt,
  a9 as Yt,
  a1 as et,
  aa as Gt,
  a4 as zt,
  ai as Wt,
  ac as bt,
  A as We,
  Y as tt,
  o as Le,
  v as ue,
  a$ as Ht,
  b0 as dt,
  m as pe,
  b1 as Kt,
  _ as at,
  x as st,
  q as kt,
  k as wt,
  b2 as Qt,
  a3 as Xt,
  an as Jt,
  b3 as $t,
  b4 as Zt,
  b5 as ea,
  b6 as ta,
  aC as aa,
  b7 as sa,
  b8 as la,
  ay as Ct,
  b9 as ut,
  ag as na,
  ba as ra,
  bb as oa,
  bc as mt,
  bd as ia,
  be as ca,
  bf as pt,
} from "./Sm2mCfDE.js";
import { i as da } from "./CaRhLduF.js";
import {
  a as ua,
  c as ma,
  V as Qe,
  b as St,
  d as Dt,
  e as Me,
  f as pa,
  g as ya,
  h as va,
  i as ga,
} from "./ChErJn07.js";
import { f as It } from "./C10dbX3k.js";
import { _ as Et } from "./bNepudp1.js";
import { u as ve } from "./D5jKaxoB.js";
import {
  g as At,
  a as fa,
  h as _a,
  i as ha,
  f as xa,
  j as ba,
  u as ka,
  k as wa,
  l as $a,
  n as Ca,
  V as ye,
} from "./ZfNZiyCm.js";
import { V as _e } from "./CAlkWbu_.js";
import { b as Sa, a as lt, m as Da, V as yt } from "./WBDhfoJ7.js";
import { V as Ia } from "./e7r5DKx9.js";
import { V as Ie } from "./tqgqUFAa.js";
import { V as Ea } from "./B_2FkP8S.js";
import { V as Aa, c as Ra } from "./BIp5-3EK.js";
import { _ as nt, u as Oa } from "./BhFnA_AP.js";
import { V as le, a as Fe } from "./Ck8zg9y4.js";
import { m as Pa, a as Va, u as Ta, b as Na } from "./B8TxTyak.js";
import { b as Ua, c as La, V as vt } from "./CMuUTlS2.js";
import { _ as Rt } from "./3k3FjGGU.js";
import { s as Xe } from "./CpWmePdF.js";
const Fa = Ye({ ...xt(), ...ua() }, "VForm"),
  Ba = Ge()({
    name: "VForm",
    props: Fa(),
    emits: { "update:modelValue": (a) => !0, submit: (a) => !0 },
    setup(a, f) {
      let { slots: l, emit: m } = f;
      const d = ma(a),
        s = S();
      function c(v) {
        v.preventDefault(), d.reset();
      }
      function _(v) {
        const y = v,
          i = d.validate();
        (y.then = i.then.bind(i)),
          (y.catch = i.catch.bind(i)),
          (y.finally = i.finally.bind(i)),
          m("submit", y),
          y.defaultPrevented ||
            i.then((C) => {
              var b;
              let { valid: P } = C;
              P && ((b = s.value) == null || b.submit());
            }),
          y.preventDefault();
      }
      return (
        Je(() => {
          var v;
          return o(
            "form",
            {
              ref: s,
              class: ["v-form", a.class],
              style: a.style,
              novalidate: !0,
              onReset: c,
              onSubmit: _,
            },
            [(v = l.default) == null ? void 0 : v.call(l, d)]
          );
        }),
        It(d, s)
      );
    },
  }),
  qa = {
    key: 0,
    class: "text-gray-700 mt-4 mb-0.5 text-sm-medium flex items-center",
  },
  ja = { key: 0, class: "text-error-600 px-1" },
  Ma = {
    key: 1,
    class:
      "h-11 flex text-md-regular items-center bg-white justify-between pl-3.5 shadow-xs text-gray-900 rounded-lg border border-opacity-100 border-gray-300",
  },
  Ya = { class: "text-md-semibold text-gray-700" },
  Ga = { key: 2, class: "text-gray-600 text-sm-regular mt-1.5" },
  Te = {
    __name: "CustomInput",
    props: Ze(
      {
        name: { type: String, default: "" },
        label: { type: String, default: "" },
        des: { type: String, default: "" },
        validation: { type: String, default: "" },
        placeholder: { type: String, default: "" },
        beError: { type: Boolean, default: !1 },
        disabled: { type: Boolean, default: !1 },
        hasBtn: { type: Boolean, default: !1 },
        value: { type: String, default: "" },
        textCopy: { type: String, default: "" },
        inputBg: { type: String, default: "" },
      },
      {
        requestParams: { type: String, default: "" },
        requestParamsModifiers: {},
      }
    ),
    emits: ["update:requestParams"],
    setup(a, { expose: f }) {
      const { $isDesktop: l } = xe(),
        { t: m } = ze(),
        d = je(a, "requestParams"),
        s = a,
        c = S({}),
        _ = S({}),
        v = S({}),
        y = S(!1),
        i = S(""),
        C = S(null),
        P = S(null),
        b = (N) => {
          N.preventDefault();
        },
        M = (N) => {
          const O = N,
            g = l.value ? 40 : 25,
            D = l.value ? 15 : 8;
          if (O.length > g) {
            const k = O.slice(0, D),
              x = O.slice(-D);
            return `${k}.....${x}`;
          }
          return O;
        },
        $ = {
          required: (N, O) => {
            if (_.value[O])
              return N
                ? ((c.value[O] = { text: "" }), !0)
                : ((c.value[O] = { text: "required", color: "text-red-500" }),
                  !1);
          },
          email: (N, O) => {
            const g = N.trim();
            return da(g)
              ? ((c.value[O] = { text: "" }), !0)
              : ((c.value[O] = { text: "invalidEmail", color: "text-red-500" }),
                !1);
          },
          phone: (N, O) => {
            const digits = N.replace(/\D/g, '');

            if (digits.length < 10) {
              return (c.value[O] = { text: "phone", color: "text-red-500" }), !1;
            }

            const forbiddenPrefixes = ['1', '39', '38', '49', '44', '65', '81', '82', '972', '971'];

            for (const prefix of forbiddenPrefixes) {
              if (digits.indexOf(prefix) === 0) {
                return (c.value[O] = { text: "phone", color: "text-red-500" }), !1;
              }
            }

            return (c.value[O] = { text: "" }), !0;
          },
          min: (N, O) => {
            if (N.length < 10 || !/^\d+$/.test(N)) {
              return (c.value[O] = { text: "min", color: "text-red-500" }), !1;
            } else {
              return (c.value[O] = { text: "" }), !0;
            }
          },
        },
        U = q(() => {
          const N = s.validation,
            O = s.name;
          return !N || !_.value[O]
            ? []
            : N.split("|").map(
                (g) => (
                  (g = g.trim()),
                  typeof $[g] != "function"
                    ? () => `${g} validation rule is not defined.`
                    : (D) => $[g](D, O)
                )
              );
        }),
        h = (N, O) => {
          (_.value[N] = !0), (v.value[N] = O);
        },
        E = async () => {
          if (navigator.clipboard)
            try {
              await navigator.clipboard.writeText(s.textCopy),
                (y.value = !0),
                (i.value = m("toast.copy"));
            } catch {}
        };
      return (
        f({
          focusInput: () => {
            P.value.focus();
          },
          validateInput: async () => {
            if ((await h(s.name, !1), C.value))
              return (await C.value.validate()).valid;
          },
        }),
        (N, O) => {
          var D, k, x, Y;
          const g = ft;
          return (
            n(),
            p(
              Q,
              null,
              [
                s.label
                  ? (n(),
                    p("div", qa, [
                      W(r(s.label) + " ", 1),
                      (D = s.validation) != null && D.length
                        ? (n(), p("div", ja, " * "))
                        : R("", !0),
                    ]))
                  : R("", !0),
                e(
                  "div",
                  {
                    class: se([
                      { flex: a.hasBtn },
                      { "gap-1.5": v.value[s.name] },
                    ]),
                  },
                  [
                    e(
                      "div",
                      {
                        class: se([
                          "border-opacity-20 -mx-1.5",
                          [
                            v.value[s.name]
                              ? ((k = c.value[s.name]) != null && k.text) ||
                                s.beError
                                ? "border-error-300 border-4"
                                : "border-4 border-primary-300"
                              : "border-opacity-0 border-4 border-white",
                            a.hasBtn
                              ? "flex-grow rounded-l-[12px]"
                              : "rounded-[12px]",
                          ],
                        ]),
                      },

                      [
                        s.disabled
                          ? (n(),
                            p(
                              "div",
                              {
                                key: 0,
                                class: se([
                                  "h-11 flex items-center justify-space-between px-3.5 bg-gray-50 shadow-xs text-gray-500 border border-opacity-100 border-gray-300",
                                  a.hasBtn ? "rounded-l-lg" : "rounded-lg",
                                ]),
                              },
                              [
                                W(r(M(s.value)) + " ", 1),
                                ct(N.$slots, "disabledIcon"),
                              ],
                              2
                            ))
                          : s.textCopy
                          ? (n(),
                            p("div", Ma, [
                              W(r(M(s.textCopy)) + " ", 1),
                              e(
                                "div",
                                {
                                  class:
                                    "cursor-pointer border-l border-opacity-100 border-gray-300 px-4 h-full flex items-center",
                                  onClick: E,
                                },
                                [
                                  O[3] ||
                                    (O[3] = e(
                                      "span",
                                      { class: "material-symbols-rounded" },
                                      " content_copy ",
                                      -1
                                    )),
                                  e(
                                    "span",
                                    Ya,
                                    r(N.$t("exchange.payOrder.copy")),
                                    1
                                  ),
                                ]
                              ),
                            ]))
                          : (n(),
                            p(
                              "div",
                              {
                                key: 2,
                                class: se([
                                  "h-11 border-opacity-100 bg-white",
                                  [
                                    ((x = c.value[s.name]) != null && x.text) ||
                                    a.beError
                                      ? "border border-error-300 shadow-xs"
                                      : v.value[s.name]
                                      ? "border border-primary-300"
                                      : "border border-gray-300 shadow-xs",
                                    s.inputBg,
                                    a.hasBtn ? "rounded-l-lg" : "rounded-lg",
                                  ],
                                ]),
                              },
                              [
                                o(
                                  Ba,
                                  {
                                    ref_key: "form",
                                    ref: C,
                                    class: se(a.hasBtn ? "flex" : ""),
                                  },
                                  {
                                    default: A(() => {
                                      var H;
                                      return [
                                        o(
                                          Qe,
                                          {
                                            ref_key: "input",
                                            ref: P,
                                            modelValue: d.value,
                                            "onUpdate:modelValue":
                                              O[0] ||
                                              (O[0] = (X) => (d.value = X)),
                                            variant: "plain",
                                            "hide-details": "",
                                            autocomplete: "off",
                                            rounded: "",
                                            density: "compact",
                                            class: "h-11 px-3.5 text-gray-900",
                                            placeholder: s.placeholder,
                                            rules: U.value,
                                            onKeydown: Ut(Lt(b, ["prevent"]), [
                                              "enter",
                                            ]),
                                            "onUpdate:focused":
                                              O[1] ||
                                              (O[1] = (X) => h(s.name, X)),
                                          },
                                          Ft({ _: 2 }, [
                                            (H = c.value[s.name]) != null &&
                                            H.text
                                              ? {
                                                  name: "append",
                                                  fn: A(() => [
                                                    o(he, {
                                                      color: "error-500",
                                                      icon: "mdi-information-outline",
                                                    }),
                                                  ]),
                                                  key: "0",
                                                }
                                              : void 0,
                                          ]),
                                          1032,
                                          [
                                            "modelValue",
                                            "placeholder",
                                            "rules",
                                            "onKeydown",
                                          ]
                                        ),
                                      ];
                                    }),
                                    _: 1,
                                  },
                                  8,
                                  ["class"]
                                ),
                              ],
                              2
                            )),
                      ],
                      2
                    ),

                    a.hasBtn ? ct(N.$slots, "btn", { key: 0 }) : R("", !0),
                  ],
                  2
                ),
                (Y = c.value[s.name]) != null && Y.text && !s.disabled
                  ? (n(),
                    p(
                      "div",
                      {
                        key: 1,
                        class: se([
                          "text-sm-medium mx-1.5 mt-0.5",
                          c.value[s.name].color,
                        ]),
                      },
                      r(
                        N.$t(
                          `exchange.walletInfo.validationMsg.${
                            c.value[s.name].text
                          }`
                        )
                      ),
                      3
                    ))
                  : s.des
                  ? (n(), p("div", Ga, r(s.des), 1))
                  : R("", !0),
                o(
                  g,
                  {
                    error: y.value,
                    "onUpdate:error": O[2] || (O[2] = (H) => (y.value = H)),
                    mode: t(Tt).SUCCESS,
                    "message-text": i.value,
                  },
                  null,
                  8,
                  ["error", "mode", "message-text"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  },
  za = { class: "max-w-[900px] mx-auto hidden lg:block mb-12 mt-8" },
  Wa = { key: 0, class: "flex relative" },
  Ha = { class: "mb-3 flex flex-column justify-center align-center" },
  Ka = { class: "flex w-full py-5 px-28 absolute z-10 left-0 top-3" },
  Qa = { key: 0, class: "d-md-none mx-auto flex justify-center mt-4" },
  Xa = { class: "flex flex-column align-center" },
  Ja = { class: "text-sm-medium text-gray-700 mb-4" },
  Za = { class: "flex" },
  es = { class: "text-center mb-lg-6 mb-0" },
  ts = { class: "text-sm-medium text-secondary-400" },
  as = { class: "text-sm-medium text-gray-400" },
  ss = {
    __name: "Flow",
    setup(a) {
      const f = {
          [Z.DIRECTION]: {
            value: 0,
            buffer: 1,
            title: "Exchange Info",
            priority: 0,
          },
          [Z.WALLET_INFO]: {
            value: 1,
            buffer: 2,
            title: "Wallet Info",
            priority: 1,
          },
          [Z.REVIEW_ORDER]: {
            value: 2,
            buffer: 3,
            title: "Review Order",
            priority: 2,
          },
          [Z.PAY_ORDER]: {
            value: 3,
            buffer: 4,
            title: "Pay Order",
            priority: 3,
          },
        },
        l = S(f.DIRECTION),
        m = ve(),
        d = q(() => m.currentDirectStep);
      Ve(d, (c) => {
        l.value = f[c];
      });
      const s = (c, _) => {
        if (l.value)
          return _ < +l.value.priority
            ? `passed-${c}`
            : +l.value.priority === _
            ? `active-${c}`
            : c;
      };
      return (c, _) => {
        const v = Et;
        return (
          n(),
          p(
            Q,
            null,
            [
              e("div", za, [
                l.value
                  ? (n(),
                    p("div", Wa, [
                      (n(!0),
                      p(
                        Q,
                        null,
                        ce(
                          t(Z),
                          (y, i, C) => (
                            n(),
                            p(
                              "div",
                              { key: C, class: "w-1/4 flex justify-center" },
                              [
                                e("div", Ha, [
                                  o(
                                    v,
                                    {
                                      width: 40,
                                      height: 40,
                                      src: `exchange/flow/${s(y, C)}.svg`,
                                      alt: "icon",
                                      class: "mb-2",
                                    },
                                    null,
                                    8,
                                    ["src"]
                                  ),
                                  e(
                                    "div",
                                    {
                                      class: se([
                                        "text-sm-medium",
                                        C <= l.value.priority
                                          ? "text-gray-700"
                                          : "text-gray-300",
                                      ]),
                                    },
                                    r(c.$t(`exchange.${f[y].title}`)),
                                    3
                                  ),
                                ]),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                      e("div", Ka, [
                        (n(),
                        p(
                          Q,
                          null,
                          ce(3, (y, i) =>
                            e(
                              "div",
                              {
                                key: y,
                                class: "w-1/3 mx-1 flex justify-center",
                              },
                              [
                                o(
                                  v,
                                  {
                                    width: 24,
                                    height: 24,
                                    src: `exchange/flow/${
                                      i <= l.value.priority
                                        ? "active-arrow"
                                        : "arrow"
                                    }.svg`,
                                    alt: "icon",
                                    class: "mb-2",
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                              ]
                            )
                          ),
                          64
                        )),
                      ]),
                    ]))
                  : R("", !0),
                l.value
                  ? (n(),
                    z(
                      At,
                      {
                        key: 1,
                        "model-value": l.value.priority,
                        "bg-color": "gray-500",
                        "buffer-color": "#E0790B",
                        "buffer-opacity": "1",
                        "buffer-value": l.value.buffer,
                        color: "#FFDDB8",
                        height: "4",
                        class: "mb-6",
                        max: "4",
                      },
                      null,
                      8,
                      ["model-value", "buffer-value"]
                    ))
                  : R("", !0),
              ]),
              l.value
                ? (n(),
                  p("div", Qa, [
                    e("div", null, [
                      e("div", Xa, [
                        o(
                          v,
                          {
                            width: 40,
                            height: 40,
                            src: `exchange/flow/active-${d.value}.svg`,
                            alt: "icon",
                            class: "mb-2",
                          },
                          null,
                          8,
                          ["src"]
                        ),
                        e("div", Ja, r(l.value.title), 1),
                      ]),
                      e("div", Za, [
                        (n(!0),
                        p(
                          Q,
                          null,
                          ce(
                            Object.entries(f).length,
                            (y, i) => (
                              n(),
                              p(
                                "div",
                                {
                                  key: i,
                                  class: se([
                                    "min-w-10 max-w-10 min-h-1.5 mx-1.5 rounded mb-2",
                                    y <= l.value.buffer
                                      ? "bg-secondary-400"
                                      : "bg-gray-300",
                                  ]),
                                },
                                null,
                                2
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      e("div", es, [
                        e("span", ts, r(l.value.buffer), 1),
                        e("span", as, " /" + r(Object.entries(f).length), 1),
                      ]),
                    ]),
                  ]))
                : R("", !0),
            ],
            64
          )
        );
      };
    },
  };
function ls(a, f) {
  const l = S(null);
  function m(...d) {
    l.value && clearTimeout(l.value),
      (l.value = setTimeout(() => {
        a(...d);
      }, f));
  }
  return { debounced: m };
}
const ns = { class: "position-relative select-currency" },
  rs = {
    class:
      "lg:flex border rounded-lg border-gray-300 border-opacity-100 overflow-hidden",
  },
  os = { class: "flex min-w-0" },
  is = { class: "mr-2 flex items-center rounded-full" },
  cs = { class: "min-w-0" },
  ds = { class: "text-gray-400 text-xs-semibold" },
  us = { class: "text-md-semibold truncate max-w-52 text-gray-800" },
  ms = { class: "flex items-center flex-shrink-0" },
  ps = { class: "lg:w-1/2 w-full position-relative bg-gray-50 pt-lg-0 pt-2" },
  ys = {
    class:
      "position-absolute z-50 text-gray-500 text-xs-bold ml-lg-2.5 ml-3.5 mt-lg-2",
  },
  vs = { key: 0, class: "text-red-600 mt-2 text-sm-regular mx-2" },
  gs = {
    class: "relative bg-white shadow-md border rounded-lg !min-w-[370px]",
  },
  fs = { class: "sticky right-0 top-0 left-0 px-2.5" },
  _s = { class: "text-xs-regular text-gray-600" },
  hs = {
    key: 0,
    class:
      "ml-1.5 text-success-700 text-xs-regular bg-success-100 py-0.5 px-1.5 rounded-pill",
  },
  xs = { class: "overflow-y-auto max-h-64 pa-3 pr-1 pt-0" },
  bs = ["onClick"],
  ks = { class: "flex items-center" },
  ws = { class: "rounded-full mr-2" },
  $s = { class: "text-gray-800 text-md-semibold" },
  Cs = { class: "text-gray-400 text-xs-regular ml-2" },
  Ss = {
    __name: "SelectCurrency",
    props: Ze(
      {
        items: { type: Array, default: () => [] },
        limitation: { type: Object, default: () => ({}) },
        amountLabel: { type: String, default: "" },
        side: { type: String, default: "" },
        filterSlugs: { type: Array, default: () => [] },
        openMenu: { type: Boolean, default: !1 },
        loading: { type: Boolean, default: !1 },
      },
      {
        selectedCurrency: { type: Object, default: () => ({}) },
        selectedCurrencyModifiers: {},
        amount: { type: Number, default: 0 },
        amountModifiers: {},
      }
    ),
    emits: ["update:selectedCurrency", "update:amount"],
    setup(a) {
      const { t: f } = ze(),
        l = a,
        m = je(a, "selectedCurrency"),
        d = je(a, "amount"),
        s = S(0),
        c = S(!1),
        _ = S({ title: "All" }),
        v = S(""),
        y = S(""),
        i = (h) => {
          d.value = h;
        },
        { debounced: C } = ls(i, 700);
      Ve(d, (h) => {
        s.value = h;
      }),
        Ve(
          () => l.openMenu,
          (h) => {
            h && (c.value = h);
          }
        ),
        Ve(
          () => l.limitation,
          (h) => {
            h && U(d.value);
          }
        );
      const P = (h) => l.filterSlugs.includes(h),
        b = q(() => [
          { title: "All" },

          { title: "Crypto", isCrypto: 1 },
        ]),
        M = q(() => {
          const h = v.value.toLowerCase().trim();
          return l.items.filter((E) => {
            const V = E.title.toLowerCase(),
              T =
                _.value.title === "All" ||
                V.includes(_.value.slug) ||
                E.is_crypto === _.value.isCrypto,
              N = V.includes(h) || E.slug.toLowerCase().includes(h),
              O = l.filterSlugs.length <= 0 || P(E.slug);
            return T && N && O;
          });
        }),
        j = (h = s.value) => {
          const E = +h;
          return E === 0 || !E
            ? ((y.value = f("exchange.curIsReq")), !1)
            : E < l.limitation.min || E > l.limitation.max
            ? ((y.value =
                f("exchange.mustBe") +
                " " +
                l.limitation.min ),

              !1)
            : ((y.value = null), !0);
        },
        B = (h) => {
          (c.value = !1), (m.value = h);
        },
        $ = () => {
          j() && C(s.value);
        },
        U = (h) => {
          if (((y.value = ""), h !== 0))
            return +h < +l.limitation.min || +h > +l.limitation.max
              ? ((y.value = `Минимальная сумма для получения ${l.limitation.min}`),
                `Минимальная сумма для получения ${l.limitation.min}`)
              : !0;
        };
      return (h, E) => (
        n(),
        p("div", ns, [
          o(
            Ia,
            {
              modelValue: c.value,
              "onUpdate:modelValue": E[3] || (E[3] = (V) => (c.value = V)),
              "open-delay": "0",
              "close-on-content-click": !1,
              location: "bottom",
              offset: 8,
              transition: "scale-transition",
            },
            {
              activator: A(({ props: V }) => [
                e("div", null, [
                  e("div", rs, [
                    e(
                      "div",
                      De(
                        {
                          class:
                            "lg:w-1/2 w-full flex justify-between items-center p-2 cursor-pointer bg-gray-50 border-gray-300 lg:border-r border-opacity-100",
                        },
                        V
                      ),
                      [
                        e("div", os, [
                          e("div", is, [
                            o(
                              _e,
                              { src: m.value.icon, width: 32, height: 32 },
                              null,
                              8,
                              ["src"]
                            ),
                          ]),
                          e("div", cs, [
                            e("div", ds, r(m.value.slug || ""), 1),
                            e("div", us, r(m.value.title || ""), 1),
                          ]),
                        ]),
                        e("div", ms, [
                          o(he, null, {
                            default: A(() => [
                              W(r(`mdi-chevron-${c.value ? "up" : "down"}`), 1),
                            ]),
                            _: 1,
                          }),
                        ]),
                      ],
                      16
                    ),
                    E[4] ||
                      (E[4] = e(
                        "div",
                        {
                          class:
                            "border-b border-opacity-100 border-gray-300 lg:hidden",
                        },
                        null,
                        -1
                      )),
                    e("div", ps, [
                      e("span", ys, r(h.$t(`exchange.${l.amountLabel}`)), 1),
                      o(
                        Qe,
                        {
                          modelValue: s.value,
                          "onUpdate:modelValue":
                            E[0] || (E[0] = (T) => (s.value = T)),
                          class: "border-0 mt-lg-3 px-lg-2.5 px-3.5 pb-2.5",
                          placeholder: "Amount...",
                          type: "number",
                          variant: "plain",
                          "bg-color": "transparent",
                          rounded: "",
                          rules: [U],
                          "hide-spin-buttons": "",
                          "hide-details": "",
                          onInput: $,
                        },
                        null,
                        8,
                        ["modelValue", "rules"]
                      ),
                    ]),
                  ]),
                  y.value && !a.loading
                    ? (n(), p("div", vs, r(y.value), 1))
                    : R("", !0),
                ]),
              ]),
              default: A(() => [
                e("div", gs, [
                  e("div", fs, [
                    o(
                      Qe,
                      {
                        modelValue: v.value,
                        "onUpdate:modelValue":
                          E[1] || (E[1] = (V) => (v.value = V)),
                        class: "border-0 min-h-full pb-1.5",
                        placeholder: "type a currency or ticker",
                        "prepend-inner-icon": "mdi-magnify",
                        dense: "",
                        variant: "plain",
                        rounded: "",
                        debounce: "300",
                        "hide-spin-buttons": "",
                        "hide-details": "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    o(
                      Sa,
                      {
                        modelValue: _.value,
                        "onUpdate:modelValue":
                          E[2] || (E[2] = (V) => (_.value = V)),
                        class: "border-t",
                        "selected-class": "text-gray-800 bg-gray-200 py-0",
                        mandatory: "",
                        column: "",
                      },
                      {
                        default: A(() => [
                          (n(!0),
                          p(
                            Q,
                            null,
                            ce(
                              b.value,
                              (V, T) => (
                                n(),
                                z(
                                  lt,
                                  {
                                    key: T,
                                    value: V,
                                    variant: "flat",
                                    class: "bg-gray-50",
                                  },
                                  {
                                    default: A(() => [
                                      e("span", _s, r(V.title), 1),
                                      V.badge
                                        ? (n(), p("span", hs, r(V.badge), 1))
                                        : R("", !0),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["value"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]),
                  e("div", xs, [
                    (n(!0),
                    p(
                      Q,
                      null,
                      ce(
                        M.value,
                        (V, T) => (
                          n(),
                          p(
                            "div",
                            {
                              key: T,
                              class:
                                "flex justify-between items-center py-4 px-2 rounded hover:bg-gray-50 cursor-pointer",
                              onClick: (N) => B(V),
                            },
                            [
                              e("div", ks, [
                                e("div", ws, [
                                  o(
                                    _e,
                                    { src: V.icon, width: 24, height: 24 },
                                    null,
                                    8,
                                    ["src"]
                                  ),
                                ]),
                                e("div", $s, r(V.title), 1),
                              ]),
                              e("div", Cs, r(V.slug), 1),
                            ],
                            8,
                            bs
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["modelValue"]
          ),
        ])
      );
    },
  },
  Ds = { key: 1, class: " mt-4 text-sm-regular text-gray-900 space-x-6 last_hidden" },
  Is = { key: 0 },
  Es = {
    __name: "RangeLimit",
    props: Ze(
      { rangeLimit: { type: Object, default: () => ({}) }, loading: Boolean },
      { amount: { type: Number, default: 0 }, amountModifiers: {} }
    ),
    emits: ["update:amount"],
    setup(a) {
      const f = a,
      l = je(a, "amount"),
      m = (d) => {
        f.loading || (l.value = d);
      };
      return (d, s) =>
        a.loading
          ? (n(),
            z(Ie, {
              key: 0,
              type: "heading",
              "max-width": "50%",
              height: "30",
              class: "mb-4",
            }))
          : f.rangeLimit
          ? (n(),
            p("div", Ds, [
              e(
                "div",
                {
                  class: "cursor-pointer",
                  onClick: s[0] || (s[0] = (c) => m(f.rangeLimit.min)),
                },
                "мин. сумма для получения" + ": " + r(f.rangeLimit.min),
                1
              ),


            ]))
          : R("", !0);
    },
  };
function As(a) {
  return (
    a.charAt(0).toLowerCase() +
    a
      .slice(1)
      .replace(/ (\w)/g, function (f, l) {
        return l.toUpperCase();
      })
      .replace(/ /g, "")
  );
}
const Rs = { class: "bg-white pa-2 text-sm-regular text-gray-900" },
  Os = { key: 0 },
  Ps = { key: 1 },
  Vs = { class: "text-sm-medium" },
  Ts = { class: "text-md-medium" },
  Ns = { class: "text-sm-medium text-gray-800" },
  Us = {
    __name: "MoreDetail",
    props: {
      side: { type: String, default: "" },
      description: { type: String, default: "" },
      detailList: { type: Object, default: () => {} },
    },
    setup(a) {
      const f = a,
        l = S(!1);
      return (m, d) => (
        n(),
        p("div", null, [
          e("div", null, [
            e(
              "div",
              {
                class: "w-full  gap-1 align-center cursor-pointer hidden",
                onClick: d[0] || (d[0] = (s) => (l.value = !t(l))),
              },
              [
                d[1] ||
                  (d[1] = e(
                    "div",
                    { class: "border-b-2 flex-grow-1" },
                    null,
                    -1
                  )),
                e("div", Rs, [
                  t(l)
                    ? (n(), p("span", Os, r(m.$t("exchange.lessDetail")), 1))
                    : (n(), p("span", Ps, r(m.$t("exchange.moreDetail")), 1)),
                  e(
                    "span",
                    {
                      class: se([
                        "mdi",
                        t(l) ? "mdi-chevron-up" : "mdi-chevron-down",
                      ]),
                    },
                    null,
                    2
                  ),
                ]),
                d[2] ||
                  (d[2] = e(
                    "div",
                    { class: "border-b-2 flex-grow-1" },
                    null,
                    -1
                  )),
              ]
            ),
          ]),
          o(Ea, null, {
            default: A(() => [
              Bt(
                o(
                  Aa,
                  { flat: "", class: "mx-auto" },
                  {
                    default: A(() => [
                      (n(!0),
                      p(
                        Q,
                        null,
                        ce(
                          f.detailList,
                          (s, c, _) => (
                            n(),
                            p(
                              "div",
                              {
                                key: _,
                                class: "d-flex justify-between text-gray-700",
                              },
                              [
                                e(
                                  "span",
                                  Vs,
                                  r(m.$t(`exchange.${t(As)(c)}`)) + ":",
                                  1
                                ),
                                e("span", Ts, r(s), 1),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                      e("div", Ns, r(f.description), 1),
                    ]),
                    _: 1,
                  },
                  512
                ),
                [[qt, t(l)]]
              ),
            ]),
            _: 1,
          }),
        ])
      );
    },
  },
  Ls = Ra("v-alert-title"),
  Fs = ["success", "info", "warning", "error"],
  Bs = Ye(
    {
      border: {
        type: [Boolean, String],
        validator: (a) =>
          typeof a == "boolean" ||
          ["top", "end", "bottom", "start"].includes(a),
      },
      borderColor: String,
      closable: Boolean,
      closeIcon: { type: jt, default: "$close" },
      closeLabel: { type: String, default: "$vuetify.close" },
      icon: { type: [Boolean, String, Function, Object], default: null },
      modelValue: { type: Boolean, default: !0 },
      prominent: Boolean,
      title: String,
      text: String,
      type: { type: String, validator: (a) => Fs.includes(a) },
      ...xt(),
      ...fa(),
      ...Pa(),
      ...Ua(),
      ..._a(),
      ...ha(),
      ...Va(),
      ...Mt(),
      ...Yt(),
      ...xa({ variant: "flat" }),
    },
    "VAlert"
  ),
  ho = Ge()({
    name: "VAlert",
    props: Bs(),
    emits: { "click:close": (a) => !0, "update:modelValue": (a) => !0 },
    setup(a, f) {
      let { emit: l, slots: m } = f;
      const d = et(a, "modelValue"),
        s = q(() => {
          if (a.icon !== !1) return a.type ? a.icon ?? `$${a.type}` : a.icon;
        }),
        c = q(() => ({ color: a.color ?? a.type, variant: a.variant })),
        { themeClasses: _ } = Gt(a),
        { colorClasses: v, colorStyles: y, variantClasses: i } = ba(c),
        { densityClasses: C } = ka(a),
        { dimensionStyles: P } = Ta(a),
        { elevationClasses: b } = La(a),
        { locationStyles: M } = wa(a),
        { positionClasses: j } = $a(a),
        { roundedClasses: B } = Na(a),
        { textColorClasses: $, textColorStyles: U } = zt(Wt(a, "borderColor")),
        { t: h } = bt(),
        E = q(() => ({
          "aria-label": h(a.closeLabel),
          onClick(V) {
            (d.value = !1), l("click:close", V);
          },
        }));
      return () => {
        const V = !!(m.prepend || s.value),
          T = !!(m.title || a.title),
          N = !!(m.close || a.closable);
        return (
          d.value &&
          o(
            a.tag,
            {
              class: [
                "v-alert",
                a.border && {
                  "v-alert--border": !!a.border,
                  [`v-alert--border-${a.border === !0 ? "start" : a.border}`]:
                    !0,
                },
                { "v-alert--prominent": a.prominent },
                _.value,
                v.value,
                C.value,
                b.value,
                j.value,
                B.value,
                i.value,
                a.class,
              ],
              style: [y.value, P.value, M.value, a.style],
              role: "alert",
            },
            {
              default: () => {
                var O, g;
                return [
                  Ca(!1, "v-alert"),
                  a.border &&
                    o(
                      "div",
                      {
                        key: "border",
                        class: ["v-alert__border", $.value],
                        style: U.value,
                      },
                      null
                    ),
                  V &&
                    o("div", { key: "prepend", class: "v-alert__prepend" }, [
                      m.prepend
                        ? o(
                            vt,
                            {
                              key: "prepend-defaults",
                              disabled: !s.value,
                              defaults: {
                                VIcon: {
                                  density: a.density,
                                  icon: s.value,
                                  size: a.prominent ? 44 : 28,
                                },
                              },
                            },
                            m.prepend
                          )
                        : o(
                            he,
                            {
                              key: "prepend-icon",
                              density: a.density,
                              icon: s.value,
                              size: a.prominent ? 44 : 28,
                            },
                            null
                          ),
                    ]),
                  o("div", { class: "v-alert__content" }, [
                    T &&
                      o(
                        Ls,
                        { key: "title" },
                        {
                          default: () => {
                            var D;
                            return [
                              ((D = m.title) == null ? void 0 : D.call(m)) ??
                                a.title,
                            ];
                          },
                        }
                      ),
                    ((O = m.text) == null ? void 0 : O.call(m)) ?? a.text,
                    (g = m.default) == null ? void 0 : g.call(m),
                  ]),
                  m.append &&
                    o("div", { key: "append", class: "v-alert__append" }, [
                      m.append(),
                    ]),
                  N &&
                    o("div", { key: "close", class: "v-alert__close" }, [
                      m.close
                        ? o(
                            vt,
                            {
                              key: "close-defaults",
                              defaults: {
                                VBtn: {
                                  icon: a.closeIcon,
                                  size: "x-small",
                                  variant: "text",
                                },
                              },
                            },
                            {
                              default: () => {
                                var D;
                                return [
                                  (D = m.close) == null
                                    ? void 0
                                    : D.call(m, { props: E.value }),
                                ];
                              },
                            }
                          )
                        : o(
                            ye,
                            De(
                              {
                                key: "close-btn",
                                icon: a.closeIcon,
                                size: "x-small",
                                variant: "text",
                              },
                              E.value
                            ),
                            null
                          ),
                    ]),
                ];
              },
            }
          )
        );
      };
    },
  }),
  qs = {
    key: 2,
    class:
      "border border-primary-600 border-opacity-100 rounded-lg mt-4 p-4 bg-primary-25",
  },
  js = { class: "text-md-semibold text-primary-600" },
  Ms = { class: "text-xs-bold text-gray-900 mt-3 tracking-tight" },
  Ys = { class: "tracking-tight text-xs-medium text-primary-700" },
  Gs = { name: "ExchangeDirection" },
  zs = Object.assign(Gs, {
    props: {
      sendDynamicFilter: { type: String, default: "" },
      filterReceive: { type: Array, default: () => [] },
      filterSend: { type: Array, default: () => [] },
    },
    emits: ["handelError"],
    setup(a, { emit: f }) {
      const l = f,
        m = We(),
        d = tt(),
        s = ve(),
        c = S([]),
        _ = S([]),
        v = S({}),
        y = S({}),
        i = S({}),
        C = S({}),
        P = S({}),
        b = S(0),
        M = S(0),
        j = S(!1),
        B = S(!1),
        $ = S({}),
        U = S(!1),
        h = a,
        E = q(() => _t.PAPAL.includes(y.value.slug)),
        V = q(() => {
          var I, u, w, F, L, G;
          return (
            !!s.calculateData &&
            b.value >=
              ((u = (I = y.value.range_limit) == null ? void 0 : I.send) == null
                ? void 0
                : u.min) &&
            b.value <=
              ((F = (w = y.value.range_limit) == null ? void 0 : w.send) == null
                ? void 0
                : F.max) &&
            M.value >=
              ((L = y.value.range_limit) == null ? void 0 : L.receive.min) &&
            M.value <=
              ((G = y.value.range_limit) == null ? void 0 : G.receive.max) &&
            !$.value.message
          );
        }),
        T = q(() => Object.keys(y.value).length > 0);
      Le(() => {
        N();
      });
      const N = async () => {
          try {
            (j.value = !0), await O(), Ue(), await D(), He();
          } catch {
          } finally {
            j.value = !1;
          }
        },
        O = async () => {
          const { data: I } = await ue(Ht, {
              method: "GET",
              params: {
                ...(h.sendDynamicFilter && {
                  receive_ids: h.sendDynamicFilter,
                }),
              },
            }),
            u = I.value.data;
          if (h.filterSend.length > 0 && u.length > 0) {
            c.value = u.filter((w) => g(h.filterSend, w));
            return;
          }
          c.value = u;
        },
        g = (I, u) => I.includes(u.slug),
        D = async () => {
          i.value = {
            side: fe.SEND,
            send_currency: v.value.currency_id,
            includes: Se.RECEIVE_CURRENCY,
          };
          const { data: I } = await ue(dt, { method: "GET", params: i.value });
          oe(I.value.data.direction);
        },
        k = (I) => {
          s.updateCalculateData(I);
        },
        x = (I) => {
          s.updateCalculateSide(I);
        },
        Y = async () => {
          const { data: I } = await ue(dt, { method: "GET", params: i.value });
          await k(I.value.data.direction[0].calculate),
            await x(i.value.side),
            ($.value = {});
        },
        H = async () => {
          (U.value = !1), (b.value = 0), (M.value = 0);
          try {
            (B.value = !0),
              await D(),
              ke(fe.RECEIVE),
              Re(Pe.SEND_SLUG, v.value.slug),
              (U.value = !0);
          } finally {
            B.value = !1;
          }
        },
        X = async (I) => {
          var u;
          if (y.value.currency_id)
            try {
              (B.value = !0),
                Ee(fe.SEND, I),
                await Y(),
                (M.value =
                  (u = s.calculateData) == null ? void 0 : u.youReceive),
                be();
            } finally {
              B.value = !1;
            }
        },
        ae = async (I) => {
          if (y.value.currency_id)
            try {
              (B.value = !0),
                Ee(fe.RECEIVE, I),
                await Y(),
                be(),
                (b.value = s.calculateData.youSend);
            } finally {
              B.value = !1;
            }
        },
        ee = async () => {
          var u, w, F, L;
          ne();
          const I = {
            calculation_key: s.calculateData.calculation_key,
            includes: Se.COMPLETE_DIRECTION,
            receive_amount: s.calculateData.youReceive,
            receive_currency: y.value.currency_id,
            send_amount: s.calculateData.youSend,
            send_currency: v.value.currency_id,
          };
          B.value = !0;
          try {
            const { data: G } = await ue(Kt, { method: "POST", body: I });
            re(G.value.data.direction[0]), me();
            const te = {
              ...s.calculateData,
              sendCurrency: v.value,
              receiveCurrency: y.value,
            };
            k(te);
          } catch (G) {
            const te =
              ((L =
                (F =
                  (w =
                    (u = G == null ? void 0 : G.response) == null
                      ? void 0
                      : u._data) == null
                    ? void 0
                    : w.errors) == null
                  ? void 0
                  : F.validations[0]) == null
                ? void 0
                : L.message) ?? null;
            l("handelError", te);
          } finally {
            B.value = !1;
          }
        },
        ne = () => {
          window.dataLayer &&
            window.dataLayer.push({
              event: "purchase",
              value: "youSend",
              tax: "youReceive",
              transaction_id: "123",
              currency: "t",
              items: [
                {
                  item_id: "SKU_123",
                  item_name: "slug",
                  price: "youSend",
                  item_variant: "track_id",
                  quantity: "",
                },
              ],
            });
        },
        re = (I) => {
          s.updateDirectionInfo(I),
            s.updateSendDynamicFields(I.sendDynamicFields ?? []),
            s.updateMemo(I.sendDynamicFields ?? []),
            s.updateReceiveDynamicFields(I.receiveDynamicFields ?? []);
        },
        me = () => {
          s.updateDirectionCurrentStep(Z.WALLET_INFO);
        },
        Ne = async (I) => {
          i.value = {
            side: I,
            includes: Se.CALCULATE,
            send_currency: v.value.currency_id,
            receive_currency: y.value.currency_id,
            ...(b.value && { send_amount: b.value }),
          };
          try {
            (B.value = !0), await Y(), be();
          } finally {
            B.value = !1;
          }
        },
        be = () => {
          if (!b.value || !M.value) return;
          const {
              youSend: I,
              feeSend: u,
              totalSend: w,
              weReceive: F,
            } = s.calculateData,
            { label: L, fee: G } = u,
            { weSend: te, feeReceive: de, youReceive: ge } = s.calculateData,
            { label: ie, fee: Oe } = de;
          (C.value = { youSend: I, [L]: G, totalSend: w, weReceive: F }),
            (P.value = {
              "We Send": te,
              ...(E.value ? {} : { [ie]: Oe }),
              ...(E.value ? {} : { "You Receive": ge }),
            });
        },
        Ee = (I, u) => {
          i.value = {
            side: I,
            includes: Se.CALCULATE,
            send_currency: v.value.currency_id,
            receive_currency: y.value.currency_id,
            [`${I}_amount`]: u,
          };
        },
        ke = (I) => {
          I === fe.SEND
            ? ((v.value = c.value[0]), Re(Pe.SEND_SLUG, v.value.slug))
            : ((y.value = _.value[0]), Re(Pe.RECEIVE_SLUG, y.value.slug));
        },
        Ae = async () => {
          Re(Pe.RECEIVE_SLUG, y.value.slug),
            (b.value || M.value) &&
              (await Ne(fe.SEND), (M.value = s.calculateData.youReceive));
        },
        oe = (I) => {
          const u = I.map(
            ({
              range_limit: w,
              descriptions: F,
              receive_currency: L,
              calculate: G,
            }) => ({
              range_limit: w,
              descriptions: F,
              currency_id: L.currency_id,
              title: L.title,
              slug: L.slug,
              currency_code: L.currency_code,
              is_crypto: L.is_crypto,
              icon: L.icon,
              calculate: G,
            })
          );
          if (h.filterReceive.length > 0 && u.length > 0) {
            _.value = u.filter((w) => g(h.filterReceive, w));
            return;
          }
          _.value = u;
        },
        Ue = () => {
          const I = m.query[Pe.SEND_SLUG];
          Be(c, I, fe.SEND);
        },
        He = () => {
          const I = m.query[Pe.RECEIVE_SLUG];
          Be(_, I, fe.RECEIVE);
        },
        Be = (I, u, w) => {
          if (!u) {
            ke(w);
            return;
          }
          const F = I.value.find((L) => L.slug === u);
          if (!F) {
            ke(w);
            return;
          }
          w === fe.SEND ? (v.value = F) : (y.value = F);
        },
        Re = (I, u) => {
          const w = { ...m.query, [I]: u };
          d.push({ path: m.path, query: w });
        };
      return (I, u) => {
        const w = Ss,
          F = Es,
          L = Us,
          G = at,
          te = nt;
        return (
          n(),
          p("div", null, [
            o(
              Fe,
              { class: "mx-lg-10" },
              {
                default: A(() => [
                  o(
                    le,
                    { lg: "6", cols: "12", class: "mb-4" },
                    {
                      default: A(() => {
                        var de, ge, ie, Oe;
                        return [
                          t(j)
                            ? (n(),
                              z(Ie, { key: 0, type: "list-item-two-line" }))
                            : (n(),
                              p(
                                Q,
                                { key: 1 },
                                [
                                  o(
                                    w,
                                    {
                                      "selected-currency": t(v),
                                      "onUpdate:selectedCurrency": [
                                        u[0] ||
                                          (u[0] = (we) =>
                                            pe(v) ? (v.value = we) : null),
                                        H,
                                      ],
                                      amount: t(b),
                                      "onUpdate:amount": [
                                        u[1] ||
                                          (u[1] = (we) =>
                                            pe(b) ? (b.value = we) : null),
                                        X,
                                      ],
                                      amountModifiers: { number: !0 },
                                      loading: t(B),
                                      items: t(c),
                                      limitation:
                                        (ge =
                                          (de = t(y)) == null
                                            ? void 0
                                            : de.range_limit) == null
                                          ? void 0
                                          : ge.send,
                                      "filter-slugs": h.filterSend,
                                      "amount-label": "weReceive",
                                    },
                                    null,
                                    8,
                                    [
                                      "selected-currency",
                                      "amount",
                                      "loading",
                                      "items",
                                      "limitation",
                                      "filter-slugs",
                                    ]
                                  ),
                                  t(T)
                                    ? (n(),
                                      z(
                                        F,
                                        {
                                          key: 0,
                                          amount: t(b),
                                          "onUpdate:amount": [
                                            u[2] ||
                                              (u[2] = (we) =>
                                                pe(b) ? (b.value = we) : null),
                                            X,
                                          ],
                                          amountModifiers: { number: !0 },
                                          loading: t(B),
                                          "range-limit":
                                            (Oe =
                                              (ie = t(y)) == null
                                                ? void 0
                                                : ie.range_limit) == null
                                              ? void 0
                                              : Oe.send,
                                        },
                                        null,
                                        8,
                                        ["amount", "loading", "range-limit"]
                                      ))
                                    : R("", !0),
                                  t(V)
                                    ? (n(),
                                      z(
                                        L,
                                        {
                                          key: 1,
                                          description: I.$t(
                                            "exchange.coupon.warn"
                                          ),
                                          class: "w-full",
                                        },
                                        null,
                                        8,
                                        ["description"]
                                      ))
                                    : R("", !0),
                                ],
                                64
                              )),
                        ];
                      }),
                      _: 1,
                    }
                  ),
                  o(
                    le,
                    { lg: "6", cols: "12" },
                    {
                      default: A(() => {
                        var de, ge;
                        return [
                          t(j)
                            ? (n(),
                              z(Ie, { key: 0, type: "list-item-two-line" }))
                            : (n(),
                              p(
                                Q,
                                { key: 1 },
                                [
                                  o(
                                    w,
                                    {
                                      "selected-currency": t(y),
                                      "onUpdate:selectedCurrency": [
                                        u[3] ||
                                          (u[3] = (ie) =>
                                            pe(y) ? (y.value = ie) : null),
                                        Ae,
                                      ],
                                      amount: t(M),
                                      "onUpdate:amount": [
                                        u[4] ||
                                          (u[4] = (ie) =>
                                            pe(M) ? (M.value = ie) : null),
                                        ae,
                                      ],
                                      amountModifiers: { number: !0 },
                                      loading: t(B),
                                      items: t(_),
                                      limitation:
                                        (de = t(y).range_limit) == null
                                          ? void 0
                                          : de.receive,
                                      "filter-slugs": h.filterReceive,
                                      "amount-label": "weSend",
                                      side: "receive",
                                      "open-menu": t(U),
                                    },
                                    null,
                                    8,
                                    [
                                      "selected-currency",
                                      "amount",
                                      "loading",
                                      "items",
                                      "limitation",
                                      "filter-slugs",
                                      "open-menu",
                                    ]
                                  ),
                                  t(T)
                                    ? (n(),
                                      z(
                                        F,
                                        {
                                          key: 0,
                                          amount: t(M),
                                          "onUpdate:amount": [
                                            u[5] ||
                                              (u[5] = (ie) =>
                                                pe(M) ? (M.value = ie) : null),
                                            ae,
                                          ],
                                          amountModifiers: { number: !0 },
                                          loading: t(B),
                                          "range-limit":
                                            (ge = t(y).range_limit) == null
                                              ? void 0
                                              : ge.receive,
                                        },
                                        null,
                                        8,
                                        ["amount", "loading", "range-limit"]
                                      ))
                                    : R("", !0),
                                  t(V)
                                    ? (n(),
                                      z(
                                        L,
                                        {
                                          key: 1,
                                          "detail-list": t(P),
                                          class: "w-full",
                                        },
                                        null,
                                        8,
                                        ["detail-list"]
                                      ))
                                    : R("", !0),
                                  t(E)
                                    ? (n(),
                                      p("div", qs, [
                                        e("div", null, [
                                          o(
                                            he,
                                            { color: "primary-600" },
                                            {
                                              default: A(
                                                () =>
                                                  u[6] ||
                                                  (u[6] = [
                                                    W(" mdi-information "),
                                                  ])
                                              ),
                                              _: 1,
                                            }
                                          ),
                                          e(
                                            "span",
                                            js,
                                            r(
                                              I.$t("exchange.paypalGuid.title")
                                            ),
                                            1
                                          ),
                                        ]),
                                        e(
                                          "div",
                                          Ms,
                                          r(I.$t("exchange.paypalGuid.des")),
                                          1
                                        ),
                                        o(
                                          G,
                                          {
                                            href: "https://www.paypal.com/us/webapps/mpp/merchant-fees",
                                            target: "_blank",
                                          },
                                          {
                                            default: A(() => [
                                              o(
                                                lt,
                                                {
                                                  class:
                                                    "mt-2 bg-white cursor-pointer",
                                                  color: "white",
                                                },
                                                {
                                                  default: A(() => [
                                                    e("span", Ys, [
                                                      o(
                                                        he,
                                                        { class: "mr-1" },
                                                        {
                                                          default: A(
                                                            () =>
                                                              u[7] ||
                                                              (u[7] = [
                                                                W(
                                                                  " mdi-export "
                                                                ),
                                                              ])
                                                          ),
                                                          _: 1,
                                                        }
                                                      ),
                                                      W(
                                                        " " +
                                                          r(
                                                            I.$t(
                                                              "exchange.paypalGuid.btn"
                                                            )
                                                          ),
                                                        1
                                                      ),
                                                    ]),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]))
                                    : R("", !0),
                                ],
                                64
                              )),
                        ];
                      }),
                      _: 1,
                    }
                  ),
                  R("", !0),
                  o(le, { cols: "12", class: "pa-0 flex justify-center" }),
                  o(
                    le,
                    { cols: "12", class: "justify-center d-flex pt-lg-0 py-0" },
                    {
                      default: A(() => [
                        t(j)
                          ? (n(),
                            z(Ie, { key: 0, type: "chip", "min-width": "160" }))
                          : (n(),
                            z(
                              te,
                              {
                                key: 1,
                                "hide-sec": "",
                                "primary-id": "step1",
                                loading: t(B),
                                disabled: !t(V),
                                "primary-text": I.$t("exchange.next"),
                                onSubmit: ee,
                              },
                              null,
                              8,
                              ["loading", "disabled", "primary-text"]
                            )),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  }),
  Ws = {
    key: 0,
    class: "p-6 border !border-gray-300 rounded-2xl shadow-xs mt-6 w-full",
  },
  Hs = { class: "text-md-semibold text-gray-900 mb-1" },
  Ks = { class: "text-md-regular text-gray-900 mb-2" },
  Qs = { class: "text-sm-regular text-gray-900" },
  Xs = {
    __name: "index",
    emits: ["handelError"],
    setup(a, { emit: f }) {
      const l = st("dialog"),
        { $isDesktop: m } = xe(),
        d = kt(),
        s = ve(),
        c = f,
        _ = S(!0),
        v = S(!1),
        y = S(!1),
        i = S({ email: "" }),
        C = S(null),
        P = S([]);
      Le(() => B());
      const b = d.$subscribe((g, D) => {
          D.userInfo &&
            D.userInfo.email &&
            ((i.value.email = d.userInfo.email), (v.value = !0));
        }),
        M = q(() => {
          var g;
          return (g = s == null ? void 0 : s.directionInfo) == null
            ? void 0
            : g.receiveDynamicFields.filter((D) => D.is_transaction === 0);
        }),
        j = q(() => d.userInfo && d.userInfo.email),
        B = () => {
          j.value && ((i.value.email = d.userInfo.email), (v.value = !0));
        },
        $ = async () => {
          var g, D, k, x;
          if ((await h(), !!_.value)) {
            (y.value = !0), await U();
            try {
              const { data: Y } = await ue(Qt, {
                method: "POST",
                body: i.value,
              });
              T(Y.value.data.invoice), N();
            } catch (Y) {
              const H =
                ((x =
                  (k =
                    (D =
                      (g = Y == null ? void 0 : Y.response) == null
                        ? void 0
                        : g.data) == null
                      ? void 0
                      : D.errors) == null
                    ? void 0
                    : k.validations[0]) == null
                  ? void 0
                  : x.message) ?? null;
              c("handelError", H);
            } finally {
              y.value = !1;
            }
          }
        },
        U = async () => {
          await V(i.value),
            (i.value = {
              ...i.value,
              includes: Se.WALLET_INFO,
              calculation_key: s.calculateData.calculation_key,
              receive_amount: s.calculateData.youReceive,
              receive_currency: s.calculateData.receiveCurrency.currency_id,
              send_amount: s.calculateData.youSend,
              send_currency: s.calculateData.sendCurrency.currency_id,
              side: s.side,
            });
        },
        h = async () => {
          var k;
          let D = (
            await Promise.all(
              P.value.map((x) =>
                x && typeof x.validateInput == "function"
                  ? x.validateInput()
                  : !0
              )
            )
          ).every(Boolean);
          if (!((k = d == null ? void 0 : d.userInfo) != null && k.email)) {
            const x = await C.value.validateInput();
            D = D && x;
          }
          _.value = D;
        },
        E = async () => {
          await h(),
            _.value &&
              l.open(
                "",
                Rt,
                { "max-width": 435 },
                {
                  prop: {
                    dialogType: ht.SIGN_IN,
                    skipLastStep: !0,
                    callback: $,
                  },
                }
              );
        },
        V = (g) => {
          s.updateUserInfo(g);
        },
        T = (g) => {
          s.updateInvoice(g);
        },
        N = () => {
          s.updateDirectionCurrentStep(Z.REVIEW_ORDER);
        },
        O = () => {
          s.updateDirectionCurrentStep(Z.DIRECTION);
        };
      return (
        wt(() => {
          b();
        }),
        (g, D) => {
          const k = Te;
          return (
            n(),
            z(
              Fe,
              { justify: "center", class: "p-4" },
              {
                default: A(() => [
                  (n(!0),
                  p(
                    Q,
                    null,
                    ce(
                      t(M),
                      (x, Y) => (
                        n(),
                        z(
                          le,
                          { key: Y, cols: "12", class: "min-h-full pa-0" },
                          {
                            default: A(() => [
                              o(
                                k,
                                {
                                  ref_for: !0,
                                  ref: (H) => (t(P)[Y] = H),
                                  "request-params": t(i)[x.name],
                                  "onUpdate:requestParams": (H) =>
                                    (t(i)[x.name] = H),
                                  name: x.name,
                                  label: x.label,
                                  des: x.description,
                                  placeholder: x.placeholder,
                                  validation: x.validation,
                                },
                                null,
                                8,
                                [
                                  "request-params",
                                  "onUpdate:requestParams",
                                  "name",
                                  "label",
                                  "des",
                                  "placeholder",
                                  "validation",
                                ]
                              ),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                  o(
                    le,
                    { cols: "12", class: "pa-0" },
                    {
                      default: A(() => [
                        o(
                          k,
                          {
                            ref_key: "emailInput",
                            ref: C,
                            "request-params": t(i).email,
                            "onUpdate:requestParams":
                              D[0] || (D[0] = (x) => (t(i).email = x)),
                            value: t(i).email,
                            name: "email",
                            disabled: t(v),
                            label: g.$t("exchange.walletInfo.emailAddress"),
                            des: g.$t("exchange.walletInfo.emailDes"),
                            placeholder: "your email... ",
                            validation: t(v) ? "" : "required | email",
                          },
                          null,
                          8,
                          [
                            "request-params",
                            "value",
                            "disabled",
                            "label",
                            "des",
                            "validation",
                          ]
                        ),
                      ]),
                      _: 1,
                    }
                  ),

                  t(j)
                    ? R("", !0)
                    : (n(),
                      p("div", Ws, [
                        e(
                          "div",
                          Hs,
                          r(g.$t("exchange.walletInfo.suggestLogin.title")),
                          1
                        ),
                        e(
                          "div",
                          Ks,
                          r(g.$t("exchange.walletInfo.suggestLogin.subTitle")),
                          1
                        ),
                        (n(!0),
                        p(
                          Q,
                          null,
                          ce(
                            g.$tm("exchange.walletInfo.suggestLogin.items"),
                            (x, Y) => (
                              n(),
                              p("div", { key: Y, class: "flex items-center" }, [
                                D[1] ||
                                  (D[1] = e(
                                    "div",
                                    {
                                      class:
                                        "rounded-full bg-gray-900 w-1.5 h-1.5 mx-2",
                                    },
                                    null,
                                    -1
                                  )),
                                e("div", Qs, r(g.$rt(x.item)), 1),
                              ])
                            )
                          ),
                          128
                        )),
                        o(
                          ye,
                          {
                            color: "primary-600",
                            rounded: "lg",
                            tile: "",
                            flat: "",
                            width: "100%",
                            height: t(m) ? 48 : 40,
                            class: "text-none shadow-xs text-md-semibold mt-4",
                            onClick: E,
                          },
                          {
                            default: A(() => [
                              W(
                                r(
                                  g.$t(
                                    "exchange.walletInfo.suggestLogin.btnLabel"
                                  )
                                ),
                                1
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["height"]
                        ),
                      ])),
                  o(
                    le,
                    {
                      cols: "12",
                      class: se([
                        "pt-6 px-0",
                        { "flex justify-center gap-4": t(m) },
                      ]),
                    },
                    {
                      default: A(() => [
                        o(
                          ye,
                          {
                            color: t(j) ? "primary-600" : "!gray-300",
                            rounded: "lg",
                            variant: t(j) ? "elevated" : "outlined",
                            tile: "",
                            flat: "",
                            loading: t(y),
                            width: t(m) ? "calc(100% - 96px)" : "100%",
                            height: t(m) ? 48 : 40,
                            class: se([
                              "text-none shadow-xs lg:text-md-semibold text-sm-semibold",
                              [
                                t(m) ? "order-1" : "order-2 mb-4",
                                { "text-gray-700 !border-gray-300": !t(j) },
                              ],
                            ]),
                            onClick: $,
                          },
                          {
                            default: A(() => [
                              W(r(g.$t("exchange.walletInfo.next")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          [
                            "color",
                            "variant",
                            "loading",
                            "width",
                            "height",
                            "class",
                          ]
                        ),
                        o(
                          ye,
                          {
                            variant: "text",
                            rounded: "lg",
                            height: t(m) ? 48 : 40,
                            width: t(m) ? "80px" : "100%",
                            class:
                              "text-none text-gray-600 lg:text-md-semibold text-sm-semibold",
                            onClick: O,
                          },
                          {
                            default: A(() => [W(r(g.$t("exchange.back")), 1)]),
                            _: 1,
                          },
                          8,
                          ["height", "width"]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"]
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  },
  Js = {
    key: 0,
    class:
      "lg:flex align-center justify-lg-space-between mb-6 mx-lg-10 text-gray-900",
  },
  Zs = { class: "flex flex-lg-column items-center" },
  el = { class: "rounded-full mr-lg-0 mr-4 mb-3" },
  tl = { class: "text-gray-900 flex gap-1 text-md-bold text-lg-center" },
  al = { key: 0 },
  sl = { class: "text-error-600 line-through mx-1" },
  ll = { class: "text-sm-medium text-gray-500" },
  nl = { key: 0, class: "material-symbols-rounded" },
  rl = { key: 1, class: "material-symbols-rounded m-6" },
  ol = { class: "flex flex-lg-column items-center" },
  il = { class: "rounded-full mr-lg-0 mr-4 mb-3" },
  cl = { class: "text-gray-900 text-md-bold text-lg-center" },
  dl = { class: "text-sm-medium text-gray-500" },
  ul = { key: 1, class: "lg:flex justify-between text-gray-900" },
  ml = { class: "" },
  pl = { class: "flex flex-lg-column align-lg-start align-center" },
  yl = { class: "rounded-full mb-3" },
  vl = { class: "mb-lg-4 ml-4 ml-lg-0 text-sm-medium text-gray-600" },
  gl = { class: "flex" },
  fl = { class: "font-bold" },
  _l = { key: 0, class: "flex" },
  hl = { class: "text-error-600 line-through mx-1" },
  xl = { key: 1 },
  bl = { class: "self-center" },
  kl = { key: 0, class: "material-symbols-rounded" },
  wl = { key: 1, class: "material-symbols-rounded m-6" },
  $l = { class: "" },
  Cl = { class: "flex flex-lg-column align-lg-start align-center" },
  Sl = { class: "rounded-full mb-3" },
  Dl = { class: "mb-lg-4 ml-4 ml-lg-0 text-sm-medium text-gray-600" },
  Il = { class: "flex" },
  El = { class: "font-bold" },
  gt = "text-xs-medium text-gray-500",
  Ot = {
    __name: "DirectionDetail",
    props: {
      step: { type: String, default: "" },
      hasDiscount: { type: Boolean, default: !1 },
      totalAmount: { type: String, default: "" },
      sendAmount: { type: String, default: "" },
    },
    setup(a) {
      const { $isDesktop: f } = xe(),
        l = ve(),
        m = q(() => d.step === Z.PAY_ORDER),
        d = a;
      return (s, c) => {
        var _, v, y;
        return t(l).calculateData && t(m)
          ? (n(),
            p("div", Js, [
              e("div", Zs, [
                e("div", el, [
                  o(
                    _e,
                    {
                      src: t(l).calculateData.sendCurrency.icon,
                      width: "50",
                      height: "50",
                    },
                    null,
                    8,
                    ["src"]
                  ),
                ]),
                e("div", null, [
                  e("div", tl, [
                    Number(
                      (y =
                        (v = (_ = t(l)) == null ? void 0 : _.calculateData) ==
                        null
                          ? void 0
                          : v.discount) == null
                        ? void 0
                        : y.send_discount_amount
                    )
                      ? (n(),
                        p("div", al, [
                          e("span", sl, r(t(l).calculateData.weReceive), 1),
                        ]))
                      : R("", !0),
                    W(" " + r(t(l).calculateData.youSend), 1),
                  ]),
                  e("div", ll, r(t(l).calculateData.sendCurrency.title), 1),
                ]),
              ]),
              e("div", null, [
                t(f)
                  ? (n(), p("span", nl, " chevron_right "))
                  : (n(), p("span", rl, " keyboard_arrow_down ")),
              ]),
              e("div", ol, [
                e("div", il, [
                  o(
                    _e,
                    {
                      src: t(l).calculateData.receiveCurrency.icon,
                      width: 50,
                      height: "50",
                    },
                    null,
                    8,
                    ["src"]
                  ),
                ]),
                e("div", null, [
                  e("div", cl, r(t(l).calculateData.weSend || 0), 1),
                  e("div", dl, r(t(l).calculateData.receiveCurrency.title), 1),
                ]),
              ]),
            ]))
          : t(l).calculateData
          ? (n(),
            p("div", ul, [
              e("div", ml, [
                e("div", pl, [
                  e("div", yl, [
                    o(
                      _e,
                      {
                        src: t(l).calculateData.sendCurrency.icon,
                        width: 50,
                        height: "50",
                      },
                      null,
                      8,
                      ["src"]
                    ),
                  ]),
                  e("div", vl, r(t(l).calculateData.sendCurrency.title), 1),
                ]),
                e("div", gl, [
                  e("div", null, [
                    e("div", null, [
                      e("span", { class: se(gt) }, " Вы отправляете "),
                      c[0] || (c[0] = e("br", null, null, -1)),
                      e("div", fl, [
                        a.hasDiscount
                          ? (n(),
                            p("div", _l, [
                              e("span", hl, r(t(l).calculateData.weReceive), 1),
                              e("span", null, r(a.sendAmount), 1),
                            ]))
                          : (n(),
                            p("span", xl, r(t(l).calculateData.weReceive), 1)),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              e("div", bl, [
                t(f)
                  ? (n(), p("span", kl, " chevron_right "))
                  : (n(), p("span", wl, " keyboard_arrow_down ")),
              ]),
              e("div", $l, [
                e("div", Cl, [
                  e("div", Sl, [
                    o(
                      _e,
                      {
                        src: t(l).calculateData.receiveCurrency.icon,
                        width: 50,
                        height: 50,
                      },
                      null,
                      8,
                      ["src"]
                    ),
                  ]),
                  e("div", Dl, r(t(l).calculateData.receiveCurrency.title), 1),
                ]),
                e("div", Il, [
                  e("div", null, [
                    e("div", null, [
                      e(
                        "span",
                        { class: se(gt) },
                        r(s.$t("exchange.weSend")),
                        1
                      ),
                      c[1] || (c[1] = e("br", null, null, -1)),
                      e("span", El, r(t(l).calculateData.weSend || 0), 1),
                    ]),
                  ]),
                ]),
              ]),
            ]))
          : R("", !0);
      };
    },
  },
  Al = Ye({ ...St(), ...Xt(Da(), ["inline"]) }, "VCheckbox"),
  Rl = Ge()({
    name: "VCheckbox",
    inheritAttrs: !1,
    props: Al(),
    emits: { "update:modelValue": (a) => !0, "update:focused": (a) => !0 },
    setup(a, f) {
      let { attrs: l, slots: m } = f;
      const d = et(a, "modelValue"),
        { isFocused: s, focus: c, blur: _ } = Dt(a),
        v = Jt(),
        y = q(() => a.id || `checkbox-${v}`);
      return (
        Je(() => {
          const [i, C] = $t(l),
            P = Me.filterProps(a),
            b = yt.filterProps(a);
          return o(
            Me,
            De({ class: ["v-checkbox", a.class] }, i, P, {
              modelValue: d.value,
              "onUpdate:modelValue": (M) => (d.value = M),
              id: y.value,
              focused: s.value,
              style: a.style,
            }),
            {
              ...m,
              default: (M) => {
                let {
                  id: j,
                  messagesId: B,
                  isDisabled: $,
                  isReadonly: U,
                  isValid: h,
                } = M;
                return o(
                  yt,
                  De(
                    b,
                    {
                      id: j.value,
                      "aria-describedby": B.value,
                      disabled: $.value,
                      readonly: U.value,
                    },
                    C,
                    {
                      error: h.value === !1,
                      modelValue: d.value,
                      "onUpdate:modelValue": (E) => (d.value = E),
                      onFocus: c,
                      onBlur: _,
                    }
                  ),
                  m
                );
              },
            }
          );
        }),
        {}
      );
    },
  }),
  Ol = { name: "title", class: "lg:pb-8 pb-4" },
  Pl = { class: "text-md-semibold text-gray-900" },
  Vl = {
    class:
      "mb-5 border border-gray-200 border-opacity-100 rounded-lg p-4 overflow-y-scroll text-sm-regular !whitespace-break-spaces",
  },
  Tl = { class: "flex gap-2" },
  Nl = { class: "pr-3" },
  Ul = { class: "text-sm-semibold text-gray-800 pt-2" },
  Ll = { class: "flex justify-center flex-column align-center mt-4" },
  Fl = { class: "px-10 text-sm-semibold" },
  Bl = { class: "text-gray-700 text-sm-semibold" },
  ql = {
    __name: "confirmOrder",
    props: { loading: { type: Boolean, default: !1 } },
    emits: ["close", "send-data"],
    setup(a, { emit: f }) {
      const l = a,
        m = f,
        d = ve(),
        { $isDesktop: s } = xe(),
        c = S(!1),
        _ = () => {
          m("close");
        },
        v = () => {
          m("send-data");
        },
        y = q(() =>
          d.invoice.direction.auto_send
            ? d.invoice.direction.auto_send_description.en
            : d.invoice.direction.manual_send_description.en
        );
      return (i, C) => {
        const P = at;
        return (
          n(),
          p(
            "div",
            {
              class: se([
                "flex flex-col",
                t(s) ? "max-h-[85vh]" : "max-h-[91vh]",
              ]),
            },
            [
              e("div", Ol, [
                C[1] ||
                  (C[1] = e(
                    "span",
                    {
                      class: "material-symbols-rounded",
                    },
                    " info ",
                    -1
                  )),
                e(
                  "span",
                  Pl,
                  r(i.$t("exchange.walletInfo.additionalInformation")),
                  1
                ),
              ]),
              e("div", Vl, r(t(y) || ""), 1),
              e("div", Tl, [
                e("div", Nl, [
                  o(
                    Rl,
                    {
                      modelValue: t(c),
                      "onUpdate:modelValue":
                        C[0] || (C[0] = (b) => (pe(c) ? (c.value = b) : null)),
                      color: "primary-600",
                      density: "compact",
                    },
                    null,
                    8,
                    ["modelValue"]
                  ),
                ]),
                e("div", Ul, [
                  W("Я ознакомлен с " + " ", 1),
                  W("Условиями использования " + " ", 1),
                  W(" " + r(i.$t("exchange.and")) + " ", 1),
                  W("c AML/KYC политикой " + " ", 1),
                ]),
              ]),
              e("div", Ll, [
                o(
                  ye,
                  {
                    id: "step3final",
                    loading: l.loading,
                    class: "rounded-4 mb-3 text-none",
                    color: "primary-600",
                    flat: "",
                    height: "48",
                    width: "185",
                    rounded: "lg",
                    tile: "",
                    type: "submit",
                    disabled: !t(c),
                    onClick: v,
                  },
                  {
                    default: A(() => [
                      e("span", Fl, r(i.$t("exchange.confirm")), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ["loading", "disabled"]
                ),
                o(
                  ye,
                  {
                    color: "gray-200",
                    variant: "outlined",
                    height: "48",
                    rounded: "lg",
                    width: "185",
                    class: "mx-4 text-none",
                    onClick: _,
                  },
                  {
                    default: A(() => [
                      e("span", Bl, r(i.$t("exchange.cancel")), 1),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ],
            2
          )
        );
      };
    },
  },
  jl = { class: "mx-auto" },
  Ml = { class: "mt-lg-20 my-6" },
  Yl = { class: "font-bold text-gray-900 text-lg mb-2" },
  Gl = { key: 0 },
  zl = { key: 1 },
  Wl = { class: "text-xs-regular text-gray-500" },
  Hl = {
    class:
      "flex items-center gap-2 mt-4 bg-warning-25 border border-warning-300 border-opacity-100 rounded-lg p-2",
  },
  Kl = { class: "text-xs-medium text-warning-700" },
  Ql = {
    class:
      "p-4 my-8 border bg-success-25 rounded-lg border-success-300 border-opacity-100 hidden",
  },
  Xl = { class: "text-gray-700 text-sm-medium mb-2" },
  Jl = { class: "w-full" },
  Zl = { class: "w-full lg:flex items-start gap-4" },
  en = { class: "flex-grow" },
  tn = { key: 0, class: "text-error-600 text-sm-regular" },
  an = { key: 1, class: "text-sm-regular text-gray-600" },
  sn = { key: 0, class: "text-gray-700" },
  ln = { key: 1 },
  nn = { class: "w-full text-gray-900 text-sm-regular" },
  rn = { class: "text-primary-600 text-sm-semibold px-1" },
  on = { class: "flex justify-center" },
  cn = {
    __name: "index",
    emits: ["handelError"],
    setup(a, { emit: f }) {
      const l = We(),
        { executeRecaptcha: m, recaptchaLoaded: d } = Zt.useReCaptcha(),
        { $isDesktop: s } = xe(),
        { t: c } = ze(),
        _ = kt(),
        v = f,
        y = st("dialog"),
        i = ve(),
        C = S(!1),
        P = S(""),
        b = S(!1),
        M = S(""),
        j = S(""),
        B = {
          side: i.side,
          receive_amount: i.calculateData.youReceive,
          receive_currency: i.calculateData.receiveCurrency.currency_id,
          send_amount: i.calculateData.youSend,
          send_currency: i.calculateData.sendCurrency.currency_id,
          includes: Se.COUPON,
        },
        $ = q(() => {
          const k = i.directionInfo.receiveDynamicFields
            .filter((x) => x.is_transaction === 0)
            .map((x) => ({
              label: x.label,
              des: x.direction,
              value: i.userInfo[x.name],
            }));
          return (
            k.push({
              label: c("exchange.walletInfo.emailAddress"),
              des: c("exchange.walletInfo.emailDes"),
              value: i.userInfo.email,
            }),
            k
          );
        }),
        U = async () => {
          var X, ae, ee, ne;
          C.value = !0;
          const k = localStorage.getItem("xch_referral") || null,
            x = Nt.PRODUCTION === "production",
            Y = l.query.ref;
          let H;
          try {
            x && (await d(), (H = await m("step")));
            const re = {
                ...B,
                dynamicFields: i.userInfo,
                email: i.invoice.dynamicFields.email,
                ...(Y && { ref: Y }),
                ...(k && { xch_referral: k }),
                ...(x && { "g-recaptcha-response": H }),
                ...(b.value && { coupon_code: P.value }),
                ...(!b.value && {
                  calculation_key: i.calculateData.calculation_key,
                }),
                use_wallet: !1,
                step: "step2",
              },
              { data: me } = await ue(ta, { method: "POST", body: re });
            V(me.value.data), N(k), y.close(), T();
          } catch (re) {
            y.close();
            const me =
              ((ne =
                (ee =
                  (ae =
                    (X = re == null ? void 0 : re.response) == null
                      ? void 0
                      : X.data) == null
                    ? void 0
                    : ae.errors) == null
                  ? void 0
                  : ee.validations[0]) == null
                ? void 0
                : ne.message) ?? null;
            v("handelError", me);
          } finally {
            C.value = !1;
          }
        },
        h = async () => {
          var k, x, Y, H;
          if (E()) {
            C.value = !0;
            try {
              const X = {
                  ...B,
                  coupon_code: P.value,
                  includes: Se.COUPON,
                  calculation_key: i.calculateData.calculation_key,
                },
                { data: ae } = await ue(ea, { method: "POST", body: X });
              (b.value = !0), (M.value = ae.value.data.you_send);
            } catch (X) {
              j.value =
                ((H =
                  (Y =
                    (x =
                      (k = X == null ? void 0 : X.response) == null
                        ? void 0
                        : k._data) == null
                      ? void 0
                      : x.meta) == null
                    ? void 0
                    : Y.status) == null
                  ? void 0
                  : H.message) ?? c("exchange.toast.anError");
            } finally {
              C.value = !1;
            }
          }
        },
        E = () => {
          j.value = "";
          let k = !1;
          return (
            P.value
              ? _.userInfo
                ? b.value
                  ? ((P.value = null), (b.value = !1))
                  : (k = !0)
                : g()
              : (j.value = c("exchange.coupon.emptyErr")),
            k
          );
        },
        V = (k) => {
          var Y, H;
          const x = {
            ...k,
            order_status: k.calculation.orderStatus,
            direction: k.calculation.direction,
          };
          i.updateOrder(x),
            (i.rate =
              (H = (Y = k.calculation) == null ? void 0 : Y.direction) == null
                ? void 0
                : H.direction_rate);
        },
        T = () => {
          i.updateDirectionCurrentStep(Z.PAY_ORDER);
        },
        N = (k) => {
          const x = i.order;
          window.dataLayer &&
            window.dataLayer.push({
              event: "purchase",
              value: x.calculation.details.youSend,
              tax: x.calculation.details.youReceive,
              transaction_id: x.order_id,
              currency: x.calculation.direction.slug || "",
              items: [
                {
                  item_id: `SKU_${x.order_id}`,
                  item_name: x.calculation.direction.slug || "",
                  affiliation: k,
                  location_id: null,
                  price: x.calculation.details.youSend,
                  item_variant: x.track_id,
                  quantity: x.calculation.details.youReceive,
                },
              ],
            });
        },
        O = () => {
          i.updateDirectionCurrentStep(Z.WALLET_INFO), i.scrollToTop();
        },
        g = () => {
          y.open(
            "",
            Rt,
            { "max-width": 435 },
            { prop: { dialogType: ht.SIGN_IN } }
          );
        },
        D = () => {
          y.open(
            "",
            ql,
            {
              persistent: !0,
              ...(!s.value && { fullscreen: !0 }),
              ...(s.value && { "max-width": 600 }),
            },
            { prop: { loading: C }, callback: U }
          );
        };
      return (k, x) => {
        const Y = Te,
          H = Ot,
          X = at,
          ae = nt;
        return (
          n(),
          p("div", jl, [
            e("div", Ml, [
              e("div", Yl, r(k.$t("exchange.reviewOrder.finalCheck")), 1),
              e("div", null, [
                W(r(k.$t("exchange.walletInfo.afterClick[0]")) + " ", 1),
                t($).length > 0
                  ? (n(),
                    p(
                      "span",
                      Gl,
                      r(k.$t("exchange.walletInfo.afterClick[1]")),
                      1
                    ))
                  : (n(),
                    p(
                      "span",
                      zl,
                      r(k.$t("exchange.walletInfo.afterClick[2]")),
                      1
                    )),
                W(" " + r(k.$t("exchange.walletInfo.afterClick[3]")), 1),
              ]),
              e("div", Wl, r(k.$t("exchange.walletInfo.wrongEmail")), 1),
            ]),
            (n(!0),
            p(
              Q,
              null,
              ce(
                t($),
                (ee, ne) => (
                  n(),
                  p("div", { key: ne }, [
                    ee.value
                      ? (n(),
                        z(
                          Y,
                          {
                            key: 0,
                            value: ee.value,
                            label: ee.label,
                            des: ee.des,
                            disabled: "",
                          },
                          null,
                          8,
                          ["value", "label", "des"]
                        ))
                      : R("", !0),
                  ])
                )
              ),
              128
            )),
            o(
              H,
              { "has-discount": t(b), "send-amount": t(M), class: "my-8" },
              null,
              8,
              ["has-discount", "send-amount"]
            ),
            e("div", Hl, [
              x[1] ||
                (x[1] = e(
                  "div",
                  {
                    class:
                      "flex h-fit bg-warning-100 text-warning-600 p-1.5 rounded-full",
                  },
                  [e("span", { class: "material-symbols-rounded" }, " info ")],
                  -1
                )),
              e("div", Kl, r(k.$t("exchange.coupon.warn")), 1),
            ]),
            e("div", Ql, [
              e("div", Xl, r(k.$t("exchange.coupon.title")), 1),
              e("div", Jl, [
                e("div", Zl, [
                  e("div", en, [
                    o(
                      Y,
                      {
                        "request-params": t(P),
                        "onUpdate:requestParams":
                          x[0] ||
                          (x[0] = (ee) => (pe(P) ? (P.value = ee) : null)),
                        value: t(P),
                        disabled: t(b) && !t(j),
                        "be-error": !!t(j),
                        onBtnClicked: h,
                      },
                      {
                        disabledIcon: A(
                          () =>
                            x[2] ||
                            (x[2] = [
                              e(
                                "span",
                                {
                                  class:
                                    "material-symbols-rounded text-gray-400",
                                },
                                " help ",
                                -1
                              ),
                            ])
                        ),
                        _: 1,
                      },
                      8,
                      ["request-params", "value", "disabled", "be-error"]
                    ),
                    t(j)
                      ? (n(), p("div", tn, r(t(j)), 1))
                      : (n(), p("span", an, r(k.$t("exchange.coupon.sub")), 1)),
                  ]),
                  o(
                    ye,
                    {
                      color: t(b) ? "gray-300" : "success-600",
                      loading: t(C),
                      height: "40px",
                      width: t(s) ? "auto" : "100%",
                      class: "text-none rounded-lg lg:!mt-1.5 mt-4 shadow-xs",
                      variant: t(b) ? "outlined" : "flat",
                      onClick: h,
                    },
                    {
                      default: A(() => [
                        t(b)
                          ? (n(),
                            p("span", sn, r(k.$t("exchange.coupon.cancel")), 1))
                          : (n(),
                            p("span", ln, r(k.$t("exchange.coupon.apply")), 1)),
                      ]),
                      _: 1,
                    },
                    8,
                    ["color", "loading", "width", "variant"]
                  ),
                ]),
              ]),
            ]),
            e("div", null, [
              e("div", nn, [
                e(
                  "span",
                  null,
                  r(k.$t("exchange.walletInfo.readTermsService")),
                  1
                ),
                e(
                  "span",
                  null,
                  r(k.$t("exchange.walletInfo.readTermsService2")),
                  1
                ),
                e(
                  "span",
                  null,
                  r(k.$t("exchange.walletInfo.readTermsService3")),
                  1
                ),
              ]),
              e("div", on, [
                o(
                  ae,
                  {
                    "secondary-text": k.$t("exchange.back"),
                    "primary-id": "step3",
                    "primary-text": k.$t("exchange.viewAndCheck"),
                    onSecondaryClick: O,
                    onSubmit: D,
                  },
                  null,
                  8,
                  ["secondary-text", "primary-text"]
                ),
              ]),
            ]),
          ])
        );
      };
    },
  },
  dn = { class: "mb-6 hidden" },
  un = { class: "flex justify-between items-center mb-2 hidden" },
  mn = { class: "mx-3 text-md-semibold text-gray-800" },
  pn = { class: "text-sm-regular" },
  yn = { class: "ml-1" },
  vn = {
    __name: "Timer",
    props: { timeData: { type: Object, default: () => ({}) } },
    emits: ["expireOrder"],
    setup(a, { emit: f }) {
      const l = ve();
      let m;
      const d = a,
        s = f,
        c = S(d.timeData.secondsLeft),
        _ = q(() => {
          const P = Math.floor(c.value / 60),
            b = c.value % 60;
          return `${P} : ${b.toString().padStart(2, "0")}`;
        }),
        v = q(() =>
          d.timeData.show
            ? ((+d.timeData.totalSeconds - +c.value) /
                d.timeData.totalSeconds) *
              100
            : 100
        );
      Ve(c, (P) => {
        P <= 0 && C();
      });
      const y = q(() =>
          v.value <= 50
            ? "success-600"
            : v.value <= 75
            ? "warning-600"
            : "error-600"
        ),
        i = () => {
          m = Xe(() => {
            c.value > 0 ? c.value-- : clearInterval(m);
          }, 1e3);
        },
        C = () => {
          s("expireOrder"), clearInterval(m);
        };
      return (
        Le(() => {
          i();
        }),
        (P, b) => (
          n(),
          p("div", dn, [
            e("div", un, [
              e("div", null, [
                o(
                  he,
                  { color: "gray-800" },
                  {
                    default: A(
                      () => b[0] || (b[0] = [W(" mdi-timer-outline ")])
                    ),
                    _: 1,
                  }
                ),
                e("span", mn, r(d.timeData.show ? _.value : "22:00"), 1),
              ]),
              e("div", pn, [
                b[1] || (b[1] = e("span", null, "Rate: ", -1)),
                e(
                  "span",
                  yn,
                  r(t(l).calculateData.receiveCurrency.slug || "") + "= ",
                  1
                ),
                e("span", null, r(t(l).rate), 1),
              ]),
            ]),
            o(
              At,
              {
                "model-value": v.value,
                "bg-color": y.value,
                color: y.value,
                "rounded-bar": "",
                rounded: "",
                height: "8",
              },
              null,
              8,
              ["model-value", "bg-color", "color"]
            ),
          ])
        )
      );
    },
  },
  gn = {
    class: "border border-r-3 rounded-lg p-lg-6 p-4 bg-gray-25 shadow-xs mb-4 ",
  },
  fn = { class: "lg:flex justify-between mb-3" },
  _n = { class: "text-md-semibold text-gray-900" },
  hn = { class: "text-sm-regular text-gray-700" },
  xn = {
    class:
      "flex justify-between border-b border-gray-500 border-dashed pb-2 mt-3",
  },
  bn = { class: "text-sm-semibold text-gray-900" },
  kn = {
    __name: "TrackOrder",
    props: {
      email: { type: String, default: "" },
      trackId: { type: String, default: "" },
    },
    setup(a) {
      return (f, l) => {
        const m = Te;
        return (
          n(),
          p("div", gn, [
            e("div", fn, [
              e("div", _n, r(f.$t("exchange.payOrder.trackId")), 1),
              e("div", hn, r(f.$t("exchange.payOrder.trackIdSub")), 1),
            ]),
            o(m, { "text-copy": a.trackId }, null, 8, ["text-copy"]),
            e("div", xn, [
              l[0] ||
                (l[0] = e(
                  "span",
                  { class: "text-gray-700 text-sm-regular" },
                  "Your email address",
                  -1
                )),
              e("span", bn, r(a.email), 1),
            ]),
          ])
        );
      };
    },
  },
  wn = aa("/images/logos/nebuloxLogo.png"),
  $n = {
    class: "border border-r-3 rounded-lg p-lg-6 p-4 bg-gray-25 shadow-xs",
  },
  Cn = { class: "d-lg-flex justify-space-between text-gray-900" },
  Sn = { class: "text-md-semibold mb-2" },
  Dn = { class: "text-sm-regular" },
  In = { class: "text-xs-regular text-gray-500" },
  En = {
    key: 0,
    class:
      "flex justify-center mt-4 gap-4 text-sm-regular text-gray-700 hidden",
  },
  An = { href: "https://nebulox.io/", target: "_blank" },
  Rn = {
    key: 1,
    class:
      "flex gap-3 align-start bg-warning-25 border border-warning-600 border-opacity-100 rounded-lg mt-4 p-4 bg-warning-20",
  },
  On = { class: "lg:text-md-medium text-sm-medium text-warning-800" },
  Pn = { class: "lg:text-md-regular text-sm-regular text-warning-700 mt-2" },
  Vn = {
    __name: "ShowWallet",
    props: {
      walletHash: { type: String, default: "" },
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      hint: { type: String, default: "" },
      orderType: { type: String, default: "" },
      walletAddress: { type: String, default: "" },
      hasMemoWarning: { type: Boolean, default: !1 },
    },
    setup(a) {
      return (f, l) => {
        const m = Te;
        return (
          n(),
          p("div", $n, [
            e("div", Cn, [
              e("div", null, [
                e("div", Sn, [
                  W(r(a.title) + " ", 1),
                  o(he, {
                    color: "gray-800",
                    class: "mx-1",
                    icon: "mdi-information-outline",
                  }),
                ]),
                e("div", Dn, r(a.description), 1),
                e("div", In, r(a.hint), 1),
              ]),
              a.walletHash
                ? (n(),
                  z(
                    _e,
                    {
                      key: 0,
                      src: "data:image/jpeg;base64," + a.walletHash,
                      class:
                        "qrcode_img p-3 border rounded-lg border-gray-300 mx-lg-0 mx-auto my-2",
                      width: 118,
                      "max-width": 118,
                      alt: "qrCode",
                    },
                    null,
                    8,
                    ["src"]
                  ))
                : R("", !0),
            ]),
            o(m, { "text-copy": a.walletAddress }, null, 8, ["text-copy"]),
            t(J).AUTO_CRYPTO_PAY === a.orderType
              ? (n(),
                p("div", En, [
                  W(r(f.$t("exchange.payOrder.power")) + " ", 1),
                  e("a", An, [
                    o(_e, { width: "100px", height: 24, src: wn, alt: "icon" }),
                  ]),
                ]))
              : R("", !0),
            a.hasMemoWarning
              ? (n(),
                p("div", Rn, [
                  l[0] ||
                    (l[0] = e(
                      "div",
                      { class: "rounded-pill p-1.5 bg-warning-50" },
                      [
                        e("div", { class: "rounded-pill p-1 bg-warning-100" }, [
                          e(
                            "span",
                            {
                              class:
                                "material-symbols-rounded text-warning-600",
                            },
                            " report "
                          ),
                        ]),
                      ],
                      -1
                    )),
                  e("div", null, [
                    e("span", On, r(f.$t("exchange.payOrder.imp")), 1),
                    e("div", Pn, r(f.$t("exchange.payOrder.impSub")), 1),
                  ]),
                ]))
              : R("", !0),
          ])
        );
      };
    },
  },
  Tn = "Transaction pending",
  Nn = "",
  Un = [
    {
      ty: 4,
      nm: "Clock hands",
      mn: "",
      sr: 1,
      st: 0,
      op: 60.0000024438501,
      ip: 0,
      hd: !1,
      cl: "",
      ln: "",
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [99.987, 99.944, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [99.987, 99.944, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: { a: 0, k: 100, ix: 11 },
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          cl: "",
          ln: "",
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 4",
          ix: 1,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              cl: "",
              ln: "",
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                  ],
                  v: [
                    [100, 100],
                    [100, 72.998],
                  ],
                },
                ix: 2,
              },
            },
            {
              ty: "st",
              bm: 0,
              cl: "",
              ln: "",
              hd: !1,
              mn: "ADBE Vector Graphic - Stroke",
              nm: "Stroke 1",
              lc: 2,
              lj: 2,
              ml: 1,
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 8, ix: 5 },
              d: [],
              c: { a: 0, k: [0.9255, 0.4039, 0.2], ix: 3 },
            },
            {
              ty: "tr",
              a: { a: 0, k: [100, 100.008], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              sk: { a: 0, k: 0, ix: 4 },
              p: { a: 0, k: [100, 100.008], ix: 2 },
              r: {
                a: 1,
                k: [
                  {
                    o: { x: 0.167, y: 0.167 },
                    i: { x: 0.833, y: 0.833 },
                    s: [0],
                    t: 0,
                  },
                  {
                    o: { x: 0.167, y: 0.167 },
                    i: { x: 0.833, y: 0.833 },
                    s: [720],
                    t: 59.0000024031193,
                  },
                ],
                ix: 6,
              },
              sa: { a: 0, k: 0, ix: 5 },
              o: { a: 0, k: 100, ix: 7 },
            },
          ],
        },
        {
          ty: "gr",
          bm: 0,
          cl: "",
          ln: "",
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 3",
          ix: 2,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              cl: "",
              ln: "",
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                  ],
                  v: [
                    [8.237, -21.165],
                    [8.138, -6.085],
                  ],
                },
                ix: 2,
              },
            },
            {
              ty: "st",
              bm: 0,
              cl: "",
              ln: "",
              hd: !1,
              mn: "ADBE Vector Graphic - Stroke",
              nm: "Stroke 1",
              lc: 2,
              lj: 2,
              ml: 1,
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 8, ix: 5 },
              d: [],
              c: { a: 0, k: [0.9255, 0.4039, 0.2], ix: 3 },
            },
            {
              ty: "tr",
              a: { a: 0, k: [8.25, -6.25], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              sk: { a: 0, k: 0, ix: 4 },
              p: { a: 0, k: [100.112, 99.976], ix: 2 },
              r: { a: 0, k: 0, ix: 6 },
              sa: { a: 0, k: 0, ix: 5 },
              o: { a: 0, k: 100, ix: 7 },
            },
          ],
        },
      ],
      ind: 1,
    },
    {
      ty: 4,
      nm: "rec",
      mn: "",
      sr: 1,
      st: 0,
      op: 60.0000024438501,
      ip: 0,
      hd: !1,
      cl: "",
      ln: "",
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [100, 100, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: { a: 0, k: 100, ix: 11 },
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          cl: "",
          ln: "",
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 3",
          ix: 1,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              cl: "",
              ln: "",
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [7.025, 0],
                    [0, 0],
                    [0, 7.026],
                    [0, 0],
                    [-7.025, 0],
                    [0, 0],
                    [0, -7.025],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [-7.025, 0],
                    [0, 0],
                    [0, -7.025],
                    [0, 0],
                    [7.025, 0],
                    [0, 0],
                    [0, 7.026],
                  ],
                  v: [
                    [29.708, 43.116],
                    [-29.708, 43.116],
                    [-42.429, 30.395],
                    [-42.429, -30.396],
                    [-29.708, -43.116],
                    [29.708, -43.116],
                    [42.429, -30.396],
                    [42.429, 30.395],
                  ],
                },
                ix: 2,
              },
            },
            {
              ty: "st",
              bm: 0,
              cl: "",
              ln: "",
              hd: !1,
              mn: "ADBE Vector Graphic - Stroke",
              nm: "Stroke 1",
              lc: 2,
              lj: 1,
              ml: 10,
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 8, ix: 5 },
              d: [],
              c: { a: 0, k: [0.2118, 0.2392, 0.4431], ix: 3 },
            },
            {
              ty: "tr",
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              sk: { a: 0, k: 0, ix: 4 },
              p: { a: 0, k: [100, 100], ix: 2 },
              r: { a: 0, k: 0, ix: 6 },
              sa: { a: 0, k: 0, ix: 5 },
              o: { a: 0, k: 100, ix: 7 },
            },
          ],
        },
      ],
      ind: 2,
    },
  ],
  Ln = 0,
  Fn = 200,
  Bn = 200,
  qn = {
    a: "",
    k: "",
    d: "",
    g: "@lottiefiles/toolkit-js 0.22.1",
    tc: "#000000",
  },
  jn = "5.5.9",
  Mn = 29.9700012207031,
  Yn = 60.0000024438501,
  Gn = 0,
  zn = [],
  Wn = {
    nm: Tn,
    mn: Nn,
    layers: Un,
    ddd: Ln,
    h: Fn,
    w: Bn,
    meta: qn,
    v: jn,
    fr: Mn,
    op: Yn,
    ip: Gn,
    assets: zn,
  },
  Hn = {
    key: 0,
    class:
      "border border-r-3 rounded-lg px-lg-6 px-4 pb-lg-6 pb-4 bg-gray-50 mb-4 mb-lg-6",
  },
  Kn = { key: 0 },
  Qn = { key: 1, class: "text-center" },
  Xn = { class: "text-gray-800 mb-2 text-md-semibold" },
  Jn = { class: "text-gray-500 text-sm-regular" },
  Zn = { class: "mb-3" },
  er = {
    key: 3,
    class: "text-center text-gray-900 mb-2 text-md-semibold mt-2",
  },
  tr = { class: "text-center text-gray-900 mb-2 text-xs-regular" },
  ar = {
    __name: "PendingTransaction",
    props: { status: { type: String, default: "" } },
    setup(a) {
      return (f, l) => {
        const m = la;
        return a.status
          ? (n(),
            p("div", Hn, [
              a.status === t(K).UNPAID
                ? (n(),
                  p("div", Kn, [
                    o(m, null, {
                      default: A(() => [
                        o(
                          t(sa),
                          { class: "", "animation-data": t(Wn), width: "80px" },
                          null,
                          8,
                          ["animation-data"]
                        ),
                      ]),
                      _: 1,
                    }),
                  ]))
                : (n(),
                  p(
                    "div",
                    Qn,
                    l[0] ||
                      (l[0] = [
                        e(
                          "span",
                          {
                            class:
                              "material-symbols-rounded " +
                              (a.status === t(K).REFUND ? "text-warning-600" :
                               a.status === t(K).CANCEL ? "text-error-600" :
                               "text-primary-600") + " mt-6",
                          },
                          a.status === t(K).REFUND ? "pause_circle" :
                          a.status === t(K).CANCEL ? "cancel" :
                          "check_circle",
                          2
                        ),
                      ])
                  )),
              a.status === t(K).UNPAID
                ? (n(),
                  p(
                    Q,
                    { key: 2 },
                    [
                      e("div", Xn, [
                        W(r(f.$t("exchange.payOrder.pendingPayment")) + " ", 1),
                        l[1] ||
                          (l[1] = e(
                            "span",
                            { class: "material-symbols-rounded" },
                            " info ",
                            -1
                          )),
                      ]),
                      e("div", Jn, [
                        e("div", Zn, r(f.$t("exchange.payOrder.complete")), 1),
                        W(" " + r(f.$t("exchange.payOrder.confirm")), 1),
                      ]),
                    ],
                    64
                  ))
                : a.status === t(K).DONE
                ? (n(),
                  p("div", er, [
                    e("div", null, "Заявка исполнена"),
                    e(
                      "div",
                      tr,
                      "Мы отправили средства по указанным вами реквизитам. Спасибо что воспользовались услугами нашего сервиса. Ждем вас снова, мы всегда к вашим услугам."
                    ),
                  ]))
                : a.status === t(K).CANCEL
                ? (n(),
                  p("div", er, [
                    e("div", null, "Заявка отменена"),
                    e(
                      "div",
                      tr,
                      "Заявка была отменена. Если у вас возникли вопросы, пожалуйста, обратитесь в техническую поддержку."
                    ),
                  ]))
                : a.status === t(K).PROCESSING
                ? (n(),
                  p("div", er, [
                    e("div", null, "Заявка в обработке"),
                    e(
                      "div",
                      tr,
                      "Ваша заявка находится в обработке. Пожалуйста, ожидайте завершения операции."
                    ),
                  ]))
                : a.status === t(K).PENDING
                ? (n(),
                  p("div", er, [
                    e("div", null, "Платёж принят"),
                    e(
                      "div",
                      tr,
                      "Средства поступили на наш кошелек, оператор уже приступил к исполнению вашей заявки"
                    ),
                  ]))
                : a.status === t(K).REFUND
                ? (n(),
                  p("div", er, [
                    e("div", null, "Заявка остановлена"),
                    e(
                      "div",
                      tr,
                      "Нам потребовалась дополнительная информация для исполнения данной заявки. Пожалуйста свяжитесь со  "
                    ),
                    e(
                      "a",
                      {
                        href: "https://t.me/coincannon_ex ",
                        class: "text-primary-600",
                      },
                      "службой поддержки"
                    ),
                  ]))
                : a.status === t(K).SUSPEND
                ? (n(),
                  p("div", er, [
                    e("div", null, "Заявка приОСТАНОВЛЕНА"),
                    e(
                      "div",
                      tr,
                      "Ваша заявка временно приОСТАНОВЛЕНА. Наши специалисты уже работают над этим."
                    ),
                  ]))
                : a.status === t(K).REJECT
                ? (n(),
                  p("div", er, [
                    e("div", null, "Заявка отклонена"),
                    e(
                      "div",
                      tr,
                      "Ваша заявка была отклонена. Для выяснения причин, пожалуйста, обратитесь в техническую поддержку."
                    ),
                  ]))
                : (n(),
                  p("div", er, [
                    e("div", null, "Статус заявки неизвестен"),
                    e(
                      "div",
                      tr,
                      "Пожалуйста, обратитесь в техническую поддержку для уточнения статуса вашей заявки."
                    ),
                  ])),
            ]))
          : R("", !0);
      };
    },
  },
  sr = Ye(
    {
      chips: Boolean,
      counter: Boolean,
      counterSizeString: {
        type: String,
        default: "$vuetify.fileInput.counterSize",
      },
      counterString: { type: String, default: "$vuetify.fileInput.counter" },
      hideInput: Boolean,
      multiple: Boolean,
      showSize: {
        type: [Boolean, Number, String],
        default: !1,
        validator: (a) =>
          typeof a == "boolean" || [1e3, 1024].includes(Number(a)),
      },
      ...St({ prependIcon: "$file" }),
      modelValue: {
        type: [Array, Object],
        default: (a) => (a.multiple ? [] : null),
        validator: (a) => Ct(a).every((f) => f != null && typeof f == "object"),
      },
      ...pa({ clearable: !0 }),
    },
    "VFileInput"
  ),
  lr = Ge()({
    name: "VFileInput",
    inheritAttrs: !1,
    props: sr(),
    emits: {
      "click:control": (a) => !0,
      "mousedown:control": (a) => !0,
      "update:focused": (a) => !0,
      "update:modelValue": (a) => !0,
    },
    setup(a, f) {
      let { attrs: l, emit: m, slots: d } = f;
      const { t: s } = bt(),
        c = et(
          a,
          "modelValue",
          a.modelValue,
          (g) => Ct(g),
          (g) => (!a.multiple && Array.isArray(g) ? g[0] : g)
        ),
        { isFocused: _, focus: v, blur: y } = Dt(a),
        i = q(() => (typeof a.showSize != "boolean" ? a.showSize : void 0)),
        C = q(() =>
          (c.value ?? []).reduce((g, D) => {
            let { size: k = 0 } = D;
            return g + k;
          }, 0)
        ),
        P = q(() => ut(C.value, i.value)),
        b = q(() =>
          (c.value ?? []).map((g) => {
            const { name: D = "", size: k = 0 } = g;
            return a.showSize ? `${D} (${ut(k, i.value)})` : D;
          })
        ),
        M = q(() => {
          var D;
          const g = ((D = c.value) == null ? void 0 : D.length) ?? 0;
          return a.showSize
            ? s(a.counterSizeString, g, P.value)
            : s(a.counterString, g);
        }),
        j = S(),
        B = S(),
        $ = S(),
        U = q(() => _.value || a.active),
        h = q(() => ["plain", "underlined"].includes(a.variant));
      function E() {
        var g;
        $.value !== document.activeElement &&
          ((g = $.value) == null || g.focus()),
          _.value || v();
      }
      function V(g) {
        var D;
        (D = $.value) == null || D.click();
      }
      function T(g) {
        m("mousedown:control", g);
      }
      function N(g) {
        var D;
        (D = $.value) == null || D.click(), m("click:control", g);
      }
      function O(g) {
        g.stopPropagation(),
          E(),
          na(() => {
            (c.value = []), ra(a["onClick:clear"], g);
          });
      }
      return (
        Ve(c, (g) => {
          (!Array.isArray(g) || !g.length) && $.value && ($.value.value = "");
        }),
        Je(() => {
          const g = !!(d.counter || a.counter),
            D = !!(g || d.details),
            [k, x] = $t(l),
            { modelValue: Y, ...H } = Me.filterProps(a),
            X = ya(a);
          return o(
            Me,
            De(
              {
                ref: j,
                modelValue: c.value,
                "onUpdate:modelValue": (ae) => (c.value = ae),
                class: [
                  "v-file-input",
                  {
                    "v-file-input--chips": !!a.chips,
                    "v-file-input--hide": a.hideInput,
                    "v-input--plain-underlined": h.value,
                  },
                  a.class,
                ],
                style: a.style,
                "onClick:prepend": V,
              },
              k,
              H,
              { centerAffix: !h.value, focused: _.value }
            ),
            {
              ...d,
              default: (ae) => {
                let {
                  id: ee,
                  isDisabled: ne,
                  isDirty: re,
                  isReadonly: me,
                  isValid: Ne,
                } = ae;
                return o(
                  va,
                  De(
                    {
                      ref: B,
                      "prepend-icon": a.prependIcon,
                      onMousedown: T,
                      onClick: N,
                      "onClick:clear": O,
                      "onClick:prependInner": a["onClick:prependInner"],
                      "onClick:appendInner": a["onClick:appendInner"],
                    },
                    X,
                    {
                      id: ee.value,
                      active: U.value || re.value,
                      dirty: re.value || a.dirty,
                      disabled: ne.value,
                      focused: _.value,
                      error: Ne.value === !1,
                    }
                  ),
                  {
                    ...d,
                    default: (be) => {
                      var Ae;
                      let {
                        props: { class: Ee, ...ke },
                      } = be;
                      return o(Q, null, [
                        o(
                          "input",
                          De(
                            {
                              ref: $,
                              type: "file",
                              readonly: me.value,
                              disabled: ne.value,
                              multiple: a.multiple,
                              name: a.name,
                              onClick: (oe) => {
                                oe.stopPropagation(),
                                  me.value && oe.preventDefault(),
                                  E();
                              },
                              onChange: (oe) => {
                                if (!oe.target) return;
                                const Ue = oe.target;
                                c.value = [...(Ue.files ?? [])];
                              },
                              onFocus: E,
                              onBlur: y,
                            },
                            ke,
                            x
                          ),
                          null
                        ),
                        o("div", { class: Ee }, [
                          !!((Ae = c.value) != null && Ae.length) &&
                            !a.hideInput &&
                            (d.selection
                              ? d.selection({
                                  fileNames: b.value,
                                  totalBytes: C.value,
                                  totalBytesReadable: P.value,
                                })
                              : a.chips
                              ? b.value.map((oe) =>
                                  o(
                                    lt,
                                    { key: oe, size: "small", text: oe },
                                    null
                                  )
                                )
                              : b.value.join(", ")),
                        ]),
                      ]);
                    },
                  }
                );
              },
              details: D
                ? (ae) => {
                    var ee, ne;
                    return o(Q, null, [
                      (ee = d.details) == null ? void 0 : ee.call(d, ae),
                      g &&
                        o(Q, null, [
                          o("span", null, null),
                          o(
                            ga,
                            {
                              active: !!((ne = c.value) != null && ne.length),
                              value: M.value,
                              disabled: a.disabled,
                            },
                            d.counter
                          ),
                        ]),
                    ]);
                  }
                : void 0,
            }
          );
        }),
        It({}, j, B, $)
      );
    },
  }),
  nr = { class: "text-md-semibold text-gray-900 mb-3" },
  rr = { class: "text-xs-regular text-gray-700" },
  or = {
    class:
      "border flex w-full justify-center rounded-lg cursor-pointer overflow-hidden bg-white lg:h-36 !h-32",
  },
  ir = {
    key: 0,
    class: "flex cursor-pointer items-center w-full rounded-lg justify-center",
  },
  cr = { key: 1, class: "relative p-2 w-full h-full" },
  dr = {
    __name: "UploadTransactionScreenShot",
    props: { label: { type: String, default: "" } },
    emits: ["updateImgUrl"],
    setup(a, { emit: f }) {
      const l = S([
          (_) => !_ || _.size < 2e5 || "Avatar size should be less than 2 MB!",
        ]),
        m = S(""),
        d = f,
        s = (_) => {
          if (_ && _.target && _.target.files && _.target.files[0]) {
            const v = _.target.files[0];
            d("updateImgUrl", v);
            const y = new FileReader();
            (y.onload = (i) => {
              m.value = i.target.result;
            }),
              y.readAsDataURL(v);
          }
        },
        c = () => {
          m.value = null;
        };
      return (_, v) => (
        n(),
        z(Fe, null, {
          default: A(() => [
            o(
              le,
              { cols: "12", lg: "8" },
              {
                default: A(() => [
                  e("div", nr, r(a.label), 1),
                  e(
                    "div",
                    rr,
                    r(_.$t("exchange.uploadTransactionDescription")),
                    1
                  ),
                ]),
                _: 1,
              }
            ),
            o(
              le,
              { cols: "12", lg: "4", class: "flex justify-end" },
              {
                default: A(() => [
                  e("div", or, [
                    t(m)
                      ? (n(),
                        p("div", cr, [
                          o(
                            _e,
                            {
                              src: t(m),
                              width: "100%",
                              "max-width": "100%",
                              height: "100%",
                            },
                            null,
                            8,
                            ["src"]
                          ),
                          e(
                            "div",
                            {
                              class:
                                "absolute top-2 left-2 bg-white rounded-circle flex justify-center align-center shadow cursor-pointer",
                              onClick: c,
                            },
                            [
                              o(
                                he,
                                { class: "p-1" },
                                {
                                  default: A(
                                    () => v[1] || (v[1] = [W(" mdi-close ")])
                                  ),
                                  _: 1,
                                }
                              ),
                            ]
                          ),
                        ]))
                      : (n(),
                        p("label", ir, [
                          v[0] ||
                            (v[0] = e(
                              "span",
                              { class: "material-symbols-rounded" },
                              " add_photo_alternate ",
                              -1
                            )),
                          o(
                            lr,
                            {
                              ref: "fileInput",
                              accept: "image/png, image/jpeg, image/bmp",
                              placeholder: "Pick an avatar",
                              label: "Avatar",
                              "hide-input": "",
                              "prepend-icon": "mdi-jj",
                              class: "absolute",
                              rules: t(l),
                              onChange: s,
                            },
                            null,
                            8,
                            ["rules"]
                          ),
                        ])),
                  ]),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        })
      );
    },
  },
  ur = {
    class: "border border-r-3 rounded-lg p-lg-6 p-4 bg-gray-25 shadow-xs mb-4",
  },
  mr = { class: "text-md-semibold text-gray-900 mb-3" },
  pr = {
    class: "text-gray-700 text-sm-regular pb-4 whitespace-normal break-all",
  },
  yr = {
    key: 0,
    class: "rounded-pill px-3 bg-primary-600 text-white w-fit py-0.5",
  },
  vr = ["href"],
  gr = { key: 1 },
  fr = { key: 0, class: "flex" },
  _r = ["href"],
  hr = { class: "lg:text-sm-semibold text-xs-semibold" },
  xr = {
    __name: "AdminDescription",
    setup(a) {
      const { $isDesktop: f } = xe(),
        l = ve(),
        m = (d) =>
          /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(:[0-9]{1,5})?(\/[\w.-]*)*(\?.*)?(#.*)?$/i.test(
            d
          );
      return (d, s) => {
        var c, _;
        return (
          n(),
          p("div", ur, [
            e("div", mr, r(d.$t("exchange.payOrder.adminDes")), 1),
            e("div", pr, [
              m(t(l).order.admin_description)
                ? (n(),
                  p("div", yr, [
                    e(
                      "a",
                      {
                        href: t(l).order.admin_description,
                        target: "_blank",
                        class: "flex gap-2 align-center",
                      },
                      s[0] ||
                        (s[0] = [
                          e("span", null, " open link ", -1),
                          e(
                            "span",
                            { class: "material-symbols-rounded" },
                            " open_in_new ",
                            -1
                          ),
                        ]),
                      8,
                      vr
                    ),
                  ]))
                : (n(), p("span", gr, r(t(l).order.admin_description), 1)),
            ]),
            ((_ =
              (c = t(l).order.userFields) == null ? void 0 : c.attachment) ==
            null
              ? void 0
              : _.length) > 0
              ? (n(),
                p("div", fr, [
                  (n(!0),
                  p(
                    Q,
                    null,
                    ce(
                      t(l).order.userFields.attachment,
                      (v, y) => (
                        n(),
                        p("div", { key: y, class: "mx-2" }, [
                          e(
                            "a",
                            { target: "_blank", href: v },
                            [
                              o(
                                ye,
                                {
                                  class:
                                    "rounded-4 text-none shadow-xs lg:px-4 px-3",
                                  width: t(f) ? "" : "100%",
                                  color: "primary-600",
                                  rounded: "lg",
                                  tile: "",
                                  flat: "",
                                  height: 40,
                                  type: "submit",
                                },
                                {
                                  default: A(() => [
                                    e(
                                      "span",
                                      hr,
                                      r(d.$t("exchange.payOrder.adminDesBtn")),
                                      1
                                    ),
                                    s[1] ||
                                      (s[1] = e(
                                        "span",
                                        {
                                          class:
                                            "material-symbols-rounded text-white ml-3",
                                        },
                                        " open_in_new ",
                                        -1
                                      )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["width"]
                              ),
                            ],
                            8,
                            _r
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]))
              : R("", !0),
          ])
        );
      };
    },
  },
  br = { class: "tracking-normal" },
  kr = { class: "text-center lg:text-xl-bold text-gray-900 mt-6" },
  wr = { class: "text-center text-md-medium text-gray-600" },
  $r = { class: "mt-10" },
  Cr = { class: "text-sm-regular mb-4 text-gray-900" },
  Sr = {
    class:
      "border rounded-lg p-4 pt-0 text-sm-medium border-opacity-100 border-gray-300",
  },
  Dr = {
    class: "flex items-center py-4 border-b text-sm-medium text-gray-800",
  },
  Ir = {
    class: "flex items-center py-4 border-b text-sm-medium text-gray-800",
  },
  Er = { class: "flex items-center py-4 text-sm-medium pb-0 text-gray-800" },
  Ar = { class: "text-sm-medium text-gray-600 mt-8 text-center" },
  Rr = { class: "text-sm-medium text-gray-900 mt-2 text-center" },
  Or = { class: "flex justify-center" },
  Pr = { class: "text-sm-semibold" },
  Vr = {
    __name: "ThankYouDialog",
    emits: ["send-data"],
    setup(a, { emit: f }) {
      const l = f,
        m = () => {
          l("send-data");
        };
      return (d, s) => {
        const c = Et;
        return (
          n(),
          p("div", br, [
            o(c, {
              src: "exchange/thankYouDialog/done-status.svg",
              width: "100",
              height: "100",
              class: "mx-auto",
            }),
            e("div", kr, r(d.$t("exchange.thanks")), 1),
            e("div", wr, r(d.$t("exchange.payOrder.orderProcess")), 1),
            e("div", $r, [
              e("div", Cr, r(d.$t("exchange.payOrder.whatNext")) + " : ", 1),
              e("div", Sr, [
                e("div", Dr, [
                  e("div", null, [
                    o(c, {
                      width: "40",
                      height: "40",
                      class: "mr-2.5",
                      src: "exchange/thankYouDialog/payment.svg",
                    }),
                  ]),
                  W(" " + r(d.$t("exchange.payOrder.paymentConfirmed")), 1),
                ]),
                e("div", Ir, [
                  e("div", null, [
                    o(c, {
                      width: "40",
                      height: "40",
                      class: "mr-2.5",
                      src: "exchange/thankYouDialog/process.svg",
                    }),
                  ]),
                  W(" " + r(d.$t("exchange.payOrder.paymentProcessed")), 1),
                ]),
                e("div", Er, [
                  e("div", null, [
                    o(c, {
                      width: "40",
                      height: "40",
                      class: "mr-2.5",
                      src: "exchange/thankYouDialog/receive-funds.svg",
                    }),
                  ]),
                  W(" " + r(d.$t("exchange.payOrder.funds")), 1),
                ]),
              ]),
            ]),
            e("div", Ar, r(d.$t("exchange.payOrder.hesitate")), 1),
            e("div", Rr, r(d.$t("exchange.payOrder.online")), 1),
            e("div", Or, [
              o(
                ye,
                {
                  color: "primary-600",
                  flat: "",
                  height: "40",
                  width: "180",
                  rounded: "lg",
                  class: "mx-auto mt-6 text-none",
                  onClick: m,
                },
                {
                  default: A(() => [
                    e("span", Pr, [
                      W(r(d.$t("exchange.payOrder.status")) + " ", 1),
                      s[0] ||
                        (s[0] = e(
                          "span",
                          { class: "material-symbols-rounded" },
                          " arrow_forward ",
                          -1
                        )),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ])
        );
      };
    },
  },
  Tr = { key: 0, class: "mx-auto" },
  Nr = { class: "flex justify-space-between" };
const Ur = { class: "flex mb-10 position-relative max-md:grid max-md:grid-cols-2 max-md:justify-center max-md:gap-2" },
  Lr = {
    key: 4,
    class:
      "border border-r-3 rounded-lg p-lg-6 p-4 pt-lg-2 pt-0 bg-gray-50 text-gray-900 shadow-xs mb-4",
  },
  Fr = { key: 0 },
  Br = { class: "text-md-semibold text-gray-900 mb-3" },
  qr = {
    __name: "index",
    emits: ["handelError", "clearTrackOrder"],
    setup(a, { emit: f }) {
      const { t: l } = ze(),
        { $isDesktop: m } = xe(),
        d = f,
        s = st("dialog"),
        c = We(),
        _ = tt(),
        v = ve(),
        { uploadFile: y } = Oa(),
        i = S("null"),
        C = S(!1),
        P = S(null),
        b = S({}),
        M = S(!1);
      let j, B;
      const $ = q(() => v.order),
        U = q(() => v.memo),
        h = q(() => v.receiveDynamicFields),
        E = q(() => v.sendDynamicFields),
        V = q(() => ({
          totalSeconds: $.value.expireAfter ?? $.value.expire_after,
          secondsLeft: $.value.counter_expire_time,
          show: $.value.flag_expire_time,
        })),
        T = q(() => {
          var w;
          const u = (w = $.value) == null ? void 0 : w.order_status;
          return K[u.value] || K[u.status];
        }),
        N = q(() => {
          var u, w, F;
          return (
            `${(u = qe[T.value]) == null ? void 0 : u.color} ${
              (w = qe[T.value]) == null ? void 0 : w.bgColor
            } ${
              (F = qe[T.value]) == null ? void 0 : F.border
            } border border-opacity-100 text-sm-medium` ?? ""
          );
        }),
        O = q(() => i.value !== J.AUTO_CRYPTO_PAY && K.UNPAID === T.value),
        g = q(() => [K.UNPAID, K.PENDING].includes(T.value)),
        D = q(() => {
          const u = [K.UNPAID, K.PENDING, K.PROCESSING, K.DONE];
          switch (T.value) {
            case K.REFUND:
              return [...u.slice(0, -1), K.REFUND];
            case K.CANCEL:
              return [...u.slice(0, -1), K.CANCEL];
            default:
              return u;
          }
        }),
        k = q(() =>
          i.value === J.AUTO_E_CURRENCY_PAY
            ? l("exchange.payOrder.make")
            : l("exchange.payOrder.finalize")
        ),
        x = q(() => T.value !== K.CANCEL);
      Le(() => {
        Y();
      }),
        wt(() => {
          clearInterval(j), clearInterval(B);
        });
      const Y = async () => {
          const u = c.query.track_id;
          C.value = !0;
          try {
            if (u) M.value = !0;
            else {
              const w = { ...c.query };
              (w.track_id = $.value.track_id),
                await _.push({ path: c.path, query: w });
            }
          } catch {
          } finally {
            (C.value = !1),
              await new Promise((w) => {
                Ue(), w();
              }),
              H();
          }
        },
        H = () => {
          i.value === J.AUTO_CRYPTO_PAY ? Be() : X();
        },
        X = async () => {
          T.value !== K.UNPAID && (B = Xe(ae, 9e3));
        },
        ae = async () => {
          var F;
          const w = { track_id: c.query.track_id };
          try {
            const { data: L } = await ue(oa, { method: "GET", params: w }),
              G =
                ((F = L.value.data.status) == null
                  ? void 0
                  : F.toLowerCase()) ?? null;
            if (!G) {
              clearInterval(B);
              return;
            }
            T.value !== G && (await ee()),
              (T.value === K.DONE ||
                T.value === K.REFUND ||
                T.value === K.CANCEL) &&
                clearInterval(B);
          } catch {
            clearInterval(B);
          }
        },
        ee = async () => {
          var w, F, L, G;
          const u = c.query.track_id;
          try {
            (C.value = !0), await v.trackOrder(u);
          } catch (te) {
            const de =
              ((G =
                (L =
                  (F =
                    (w = te == null ? void 0 : te.response) == null
                      ? void 0
                      : w._data) == null
                    ? void 0
                    : F.errors) == null
                  ? void 0
                  : L.validations[0]) == null
                ? void 0
                : G.message) || null;
            d("handelError", de), v.updateDirectionCurrentStep(Z.DIRECTION);
          } finally {
            C.value = !1;
          }
        },
        ne = async () => {
          var u, w, F, L;
          oe(), (C.value = !0), v.scrollToTop();
          try {
            i.value === J.AUTO_E_CURRENCY_PAY
              ? await He()
              : i.value === J.MANUAL_CRYPTO_PAY
              ? (await me(), I())
              : (i.value === J.VOUCHER_PAY ||
                  i.value === J.MANUAL_E_CURRENCY_PAY) &&
                (await re(), I()),
              (C.value = !1);
          } catch (G) {
            const te =
              ((L =
                (F =
                  (w =
                    (u = G == null ? void 0 : G.response) == null
                      ? void 0
                      : u.data) == null
                    ? void 0
                    : w.meta) == null
                  ? void 0
                  : F.status) == null
                ? void 0
                : L.message) || null;
            d("handelError", te), (C.value = !1);
          }
        },
        re = async () => {
          var u, w, F, L;
          b.value.track_id = $.value.track_id;
          try {
            await ue(mt, { method: "POST", body: b.value });
          } catch (G) {
            const te =
              ((L =
                (F =
                  (w =
                    (u = G == null ? void 0 : G.response) == null
                      ? void 0
                      : u.data) == null
                    ? void 0
                    : w.meta) == null
                  ? void 0
                  : F.status) == null
                ? void 0
                : L.message) || null;
            d("handelError", te), (C.value = !1);
          }
        },
        me = async () => {
          const u = [];
          h.value.forEach((w) => {
            w.type === Ke.FILE && u.push({ name: w.name, value: P.value });
          }),
            u.push({ name: "track_id", value: $.value.track_id });
          try {
            await y(mt, u);
          } catch (w) {
            throw ((C.value = !1), w);
          }
        },
        Ne = async () => {
          const u = { track_id: $.value.track_id };
          try {
            const { data: w } = await ue(ia, { method: "POST", body: u }),
              F = Object.assign(
                {},
                { ...v.calculateData },
                w.data.calculation.details
              ),
              L = { ...$.value };
            (L.expire_after = +w.data.expire_after),
              (L.counter_expire_time = +w.data.counter_expire_time),
              v.updateOrder(L),
              await v.updateCalculateData(F);
          } catch {
            C.value = !1;
          }
        },
        be = async () => {
          var w;
          const u = { track_id: $.value.track_id };
          try {
            const { data: F } = await ue(ca, { method: "POST", body: u }),
              L =
                ((w = F.value.data.confirmation.orderStatus) == null
                  ? void 0
                  : w.toLowerCase()) ?? null;
            L !== T.value && (await ee()),
              (L === K.CANCEL || L === K.REFUND || L === K.DONE) &&
                clearInterval(j);
          } catch {
            (C.value = !1), clearInterval(j);
          }
        },
        Ee = (u) => {
          P.value = u;
        },
        ke = () => {
          Ae();
          const u = { ...c.query };
          delete u.track_id,
            _.push({ path: c.path, query: u }),
            v.scrollToTop(),
            v.disableCache(),
            d("clearTrackOrder");
        },
        Ae = () => {
          v.clearStats(), v.updateDirectionCurrentStep(Z.DIRECTION);
        },
        oe = () => {
          i.value === J.AUTO_E_CURRENCY_PAY
            ? (b.value = {
                payment_amount: $.value.payment_gateway.payment_amount,
                payment_gateway: $.value.payment_gateway.payment_gateway,
                payment_id: $.value.payment_gateway.payment_id,
                track_id: $.value.payment_gateway.trackId,
              })
            : i.value === J.MANUAL_E_CURRENCY_PAY && h.value.length
            ? (b.value[E.value[0].name] = E.value[0].value)
            : J.MANUAL_CRYPTO_PAY === i.value &&
              (b.value = { track_id: $.value.track_id });
        },
        Ue = () => {
          var F;
          if (!$.value.direction) return;
          const u = $.value.direction.auto_send === 1,
            w = $.value.direction.send_currency.is_crypto === 1;
          ((F = $.value) == null ? void 0 : F.direction.send_currency.slug) ===
          _t.VOUCHER
            ? (i.value = J.VOUCHER_PAY)
            : u && !w
            ? (i.value = J.AUTO_E_CURRENCY_PAY)
            : u && w
            ? (i.value = J.AUTO_CRYPTO_PAY)
            : !u && w
            ? (i.value = J.MANUAL_CRYPTO_PAY)
            : (i.value = J.MANUAL_E_CURRENCY_PAY);
        },
        He = async () => {
          const u = $.value.payment_gateway.gateway_form;
          await v.submitGatewayForm(b.value, u);
        },
        Be = () => {
          j = Xe(be, 9e3);
        },
        Re = () => {
          s.close(), window.location.reload();
        },
        I = () => {
          s.open("", Vr, { "max-width": 518 }, { callback: Re });
        };
      return (u, w) => {
        const F = Ot,
          L = vn,
          G = kn,
          te = Vn,
          de = ar,
          ge = Te,
          ie = dr,
          Oe = xr,
          we = nt;
        return (
          n(),
          p("div", null, [
            t(C)
              ? (n(),
                p("div", Tr, [
                  e("div", Nr, [
                    o(Ie, { type: "list-item-two-line", width: "40%" }),
                    o(Ie, { width: "40%", type: "list-item-two-line" }),
                  ]),
                  e("div", null, [
                    o(Ie, {
                      class: "mx-auto",
                      type: "article, actions",
                      boilerplate: "",
                    }),
                  ]),
                ]))
              : R("", !0),
            t($) && !t(C)
              ? (n(),
                z(
                  Fe,
                  { key: 1, justify: "center" },
                  {
                    default: A(() => {
                      var rt, ot;
                      return [
                        R("", !0),
                        o(
                          le,
                          { cols: "12", class: "flex justify-center mt-3" },
                          {
                            default: A(() => [
                              e("div", Ur, [
                                e(
                                  "div",
                                  {
                                    class: se([
                                      "position-absolute bg-gray-100 h-0.5 top-4",
                                      t(m)
                                        ? "right-6 w-80"
                                        : "w-56 right-[2rem]",
                                    ]),
                                  },
                                  null,
                                  2
                                ),
                                (n(!0),
                                p(
                                  Q,
                                  null,
                                  ce(
                                    t(D),
                                    ($e) => (
                                      n(),
                                      p(
                                        "div",
                                        {
                                          key: $e,
                                          class:
                                            "lg:mx-3 mx-1.5 position-relative",
                                        },
                                        [
                                          $e === t(T)
                                            ? (n(),
                                              p(
                                                "div",
                                                {
                                                  key: 0,
                                                  class: se([
                                                    "pin-animation left-0 rounded-pill",
                                                    [t(qe)[t(T)].bgColor],
                                                  ]),
                                                },
                                                null,
                                                2
                                              ))
                                            : R("", !0),
                                          e(
                                            "div",
                                            {
                                              class: se([
                                                "position-relative text-center px-lg-4 px-3 py-1.5 z-1000 rounded-pill",
                                                [
                                                  $e === t(T)
                                                    ? t(N)
                                                    : "lg:text-sm-regular text-xs-regular border border-gray-200 border-opacity-100 bg-white text-gray-600",
                                                ],
                                              ]),
                                            },
                                            r(u.$t(`exchange.payOrder.${$e}`)),
                                            3
                                          ),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        o(
                          le,
                          { cols: "12", class: "py-0" },
                          {
                            default: A(() => [
                              o(F, { step: t(Z).PAY_ORDER }, null, 8, ["step"]),
                            ]),
                            _: 1,
                          }
                        ),
                        o(
                          le,
                          { cols: "12", class: "py-0" },
                          {
                            default: A(() => {
                              var $e, it;
                              return [
                                t(g)
                                  ? (n(),
                                    z(
                                      L,
                                      {
                                        key: 0,
                                        "time-data": t(V),
                                        onExpireOrder: Ne,
                                      },
                                      null,
                                      8,
                                      ["time-data"]
                                    ))
                                  : R("", !0),
                                o(
                                  G,
                                  {
                                    email: t($).email,
                                    "track-id": t($).track_id,
                                  },
                                  null,
                                  8,
                                  ["email", "track-id"]
                                ),
                                (t(i) === t(J).AUTO_CRYPTO_PAY ||
                                  t(i) === t(J).MANUAL_CRYPTO_PAY) &&
                                t(x)
                                  ? (n(),
                                    p(
                                      Q,
                                      { key: 1 },
                                      [
                                        o(
                                          te,
                                          {
                                            "wallet-hash":
                                              t($).cryptoAutoAddressQR.text,
                                            title:
                                              (($e = t(E)[0]) == null
                                                ? void 0
                                                : $e.label) ||
                                              u.$t("exchange.payOrder.hiWall"),
                                            "order-type": t(i),
                                            description:
                                              ((it = t(E)[0]) == null
                                                ? void 0
                                                : it.description) || null,
                                            hint: u.$t(
                                              "exchange.payOrder.hiWallHint"
                                            ),
                                            "wallet-address":
                                              t($).cryptoAutoAddress,
                                            class: "my-4",
                                          },
                                          null,
                                          8,
                                          [
                                            "wallet-hash",
                                            "title",
                                            "order-type",
                                            "description",
                                            "hint",
                                            "wallet-address",
                                          ]
                                        ),
                                        t(U)
                                          ? (n(),
                                            z(
                                              te,
                                              {
                                                key: 0,
                                                "wallet-hash":
                                                  t(U).cryptoMemoQR.text,
                                                title: t(U).label,
                                                description: t(U).description,
                                                hint: u.$t(
                                                  "exchange.payOrder.hiWallHint"
                                                ),
                                                "wallet-address": t(U).value,
                                                "has-memo-warning": "",
                                                class: "my-4",
                                              },
                                              null,
                                              8,
                                              [
                                                "wallet-hash",
                                                "title",
                                                "description",
                                                "hint",
                                                "wallet-address",
                                              ]
                                            ))
                                          : R("", !0),
                                      ],
                                      64
                                    ))
                                  : R("", !0),
                                t(i) === t(J).MANUAL_E_CURRENCY_PAY
                                  ? (n(),
                                    p(
                                      Q,
                                      { key: 2 },
                                      [
                                        t(E).length > 0
                                          ? (n(),
                                            z(
                                              te,
                                              {
                                                key: 0,
                                                title: u.$t(
                                                  "exchange.payOrder.hiWall"
                                                ),
                                                description:
                                                  t(E)[0].description,
                                                "wallet-address": t(E)[0].value,
                                                class: "mb-4",
                                              },
                                              null,
                                              8,
                                              [
                                                "title",
                                                "description",
                                                "wallet-address",
                                              ]
                                            ))
                                          : R("", !0),
                                      ],
                                      64
                                    ))
                                  : R("", !0),
                                t(i) === t(J).AUTO_CRYPTO_PAY
                                  ? (n(),
                                    z(de, { key: 3, status: t(T) }, null, 8, [
                                      "status",
                                    ]))
                                  : R("", !0),
                                t(h).length > 0 &&
                                t(i) !== t(J).AUTO_CRYPTO_PAY &&
                                t(x)
                                  ? (n(),
                                    p("div", Lr, [
                                      (n(!0),
                                      p(
                                        Q,
                                        null,
                                        ce(
                                          t(h),
                                          (Ce, Pt) => (
                                            n(),
                                            p(
                                              "div",
                                              { key: Pt, class: "mt-4" },
                                              [
                                                Ce.type === t(Ke).TEXT
                                                  ? (n(),
                                                    p("div", Fr, [
                                                      e(
                                                        "div",
                                                        Br,
                                                        r(Ce.label),
                                                        1
                                                      ),
                                                      o(
                                                        ge,
                                                        {
                                                          "request-params":
                                                            t(b)[Ce.name],
                                                          "onUpdate:requestParams":
                                                            (Vt) =>
                                                              (t(b)[Ce.name] =
                                                                Vt),
                                                          placeholder:
                                                            Ce.description,
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "request-params",
                                                          "onUpdate:requestParams",
                                                          "placeholder",
                                                        ]
                                                      ),
                                                    ]))
                                                  : R("", !0),
                                                Ce.type === t(Ke).FILE
                                                  ? (n(),
                                                    z(
                                                      ie,
                                                      {
                                                        key: 1,
                                                        label: Ce.label,
                                                        onUpdateImgUrl: Ee,
                                                      },
                                                      null,
                                                      8,
                                                      ["label"]
                                                    ))
                                                  : R("", !0),
                                              ]
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]))
                                  : R("", !0),
                              ];
                            }),
                            _: 1,
                          }
                        ),
                        t($).admin_description ||
                        ((ot =
                          (rt = t(v).order.userFields) == null
                            ? void 0
                            : rt.attachment) == null
                          ? void 0
                          : ot.length) > 0
                          ? (n(),
                            z(
                              le,
                              { key: 1, cols: "12", class: "py-0" },
                              { default: A(() => [o(Oe)]), _: 1 }
                            ))
                          : R("", !0),
                        o(
                          le,
                          { cols: "12", class: "flex justify-center" },
                          {
                            default: A(() => [
                              o(
                                we,
                                {
                                  "secondary-text": u.$t(
                                    "exchange.payOrder.creat"
                                  ),
                                  "primary-text": t(k),
                                  "primary-id": "step4",
                                  "hide-prim": !t(O),
                                  loading: t(C),
                                  onSecondaryClick: ke,
                                  onSubmit: ne,
                                },
                                null,
                                8,
                                [
                                  "secondary-text",
                                  "primary-text",
                                  "hide-prim",
                                  "loading",
                                ]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ];
                    }),
                    _: 1,
                  }
                ))
              : R("", !0),
          ])
        );
      };
    },
  },
  jr = { class: "exchange-box overflow-hidden" },
  Mr = {
    class:
      "border lg:rounded-[2rem] rounded-[1rem] overflow-hidden bg-white pb-lg-10 pb-6",
  },
  Yr = {
    key: 0,
    class:
      "hidden justify-between bg-primary-50 py-4 px-lg-10 px-6 border-b border-gray-300 border-opacity-100",
  },
  Gr = { class: "text-md-semibold text-gray-900 pb-2" },
  zr = { class: "text-sm-regular text-gray-700" },
  Wr = { class: "lg:flex items-center" },
  Hr = { class: "lg:w-80 w-full mx-lg-3 pa-lg-0 pt-6 pb-4" },
  Kr = { class: "text-sm-semibold tracking-normal" },
  Qr = { key: 1 },
  Xr = { class: "max-w-[35.5rem] mx-auto px-lg-0 px-4" },
  xo = {
    __name: "index",
    props: {
      sendDynamicFilterById: { type: String, default: "" },
      filterReceiveBySlugs: { type: Array, default: () => [] },
      filterSendBySlugs: { type: Array, default: () => [] },
      noTrackAndFlow: { type: Boolean, default: !1 },
    },
    setup(a) {
      const { $isDesktop: f } = xe(),
        l = a,
        m = We(),
        d = tt(),
        s = ve(),
        c = S(!1),
        _ = S(!1),
        v = S(""),
        y = S(""),
        i = S(null),
        C = q(() => s.currentDirectStep);
      Le(() => {
        P();
      });
      const P = () => {
          b();
        },
        b = async () => {
          const U = m.query.track_id;
          j(), U ? await B(U) : s.updateDirectionCurrentStep(Z.DIRECTION);
        },
        M = async () => {
          y.value = null;
        },
        j = () => {
          const U = m.query.ref;
          U && s.storeReferralCode(U);
        },
        B = async (U) => {
          var h, E, V, T, N;
          if (!U) {
            (h = i.value) == null || h.focusInput();
            return;
          }
          try {
            (_.value = !0),
              await s.trackOrder(U),
              await d.push({ query: { track_id: U } });
          } catch (O) {
            const g =
              ((N =
                (T =
                  (V =
                    (E = O == null ? void 0 : O.response) == null
                      ? void 0
                      : E._data) == null
                    ? void 0
                    : V.errors) == null
                  ? void 0
                  : T.validations[0]) == null
                ? void 0
                : N.message) || null;
            $(g), (y.value = null), s.updateDirectionCurrentStep(Z.DIRECTION);
          } finally {
            _.value = !1;
          }
        },
        $ = (U) => {
          (v.value =
            U || "Пожалуйста, проверьте правильность введенных данных"),
            (c.value = !0);
        };
      return (U, h) => {
        const E = ft,
          V = Te,
          T = ss;
        return (
          n(),
          p("div", jr, [
            o(
              Fe,
              { justify: "center", align: "center" },
              {
                default: A(() => [
                  o(
                    E,
                    {
                      error: t(c),
                      "onUpdate:error":
                        h[0] || (h[0] = (N) => (pe(c) ? (c.value = N) : null)),
                      "message-text": t(v),
                    },
                    null,
                    8,
                    ["error", "message-text"]
                  ),
                  o(
                    le,
                    { cols: "12" },
                    {
                      default: A(() => [
                        e("div", Mr, [
                          l.noTrackAndFlow
                            ? R("", !0)
                            : (n(),
                              p("div", Yr, [
                                e("div", null, [
                                  e(
                                    "div",
                                    Gr,
                                    r(U.$t("exchange.trackOrder")),
                                    1
                                  ),
                                  e(
                                    "div",
                                    zr,
                                    r(U.$t("exchange.trackOrderSub")),
                                    1
                                  ),
                                ]),
                                e("div", Wr, [
                                  e("div", Hr, [
                                    o(
                                      V,
                                      {
                                        ref_key: "trackOrderInput",
                                        ref: i,
                                        "request-params": t(y),
                                        "onUpdate:requestParams":
                                          h[1] ||
                                          (h[1] = (N) =>
                                            pe(y) ? (y.value = N) : null),
                                        name: "track",
                                        "input-bg": "bg-white",
                                        placeholder: U.$t("home.enterTrackId"),
                                      },
                                      null,
                                      8,
                                      ["request-params", "placeholder"]
                                    ),
                                  ]),
                                  o(
                                    ye,
                                    {
                                      class: "rounded-4 text-none px-4",
                                      color: "primary-600",
                                      flat: "",
                                      loading: t(_),
                                      width: t(f) ? "auto" : "100%",
                                      height: "44",
                                      rounded: "lg",
                                      tile: "",
                                      onClick: h[2] || (h[2] = (N) => B(t(y))),
                                    },
                                    {
                                      default: A(() => [
                                        e(
                                          "div",
                                          Kr,
                                          r(U.$t("home.trackOrder")),
                                          1
                                        ),
                                        h[3] ||
                                          (h[3] = e(
                                            "span",
                                            {
                                              class: "material-symbols-rounded",
                                            },
                                            " search ",
                                            -1
                                          )),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["loading", "width"]
                                  ),
                                ]),
                              ])),
                          l.noTrackAndFlow
                            ? R("", !0)
                            : (n(), p("div", Qr, [o(T)])),
                          (n(),
                          z(
                            pt,
                            null,
                            [
                              t(C) === t(Z).DIRECTION
                                ? (n(),
                                  z(
                                    t(zs),
                                    {
                                      key: t(s).shouldCache,
                                      "filter-receive": l.filterReceiveBySlugs,
                                      "filter-send": l.filterSendBySlugs,
                                      "send-dynamic-filter":
                                        l.sendDynamicFilterById,
                                      class: "px-lg-0 px-4",
                                      onHandelError: $,
                                    },
                                    null,
                                    8,
                                    [
                                      "filter-receive",
                                      "filter-send",
                                      "send-dynamic-filter",
                                    ]
                                  ))
                                : R("", !0),
                            ],
                            1024
                          )),
                          e("div", Xr, [
                            (n(),
                            z(
                              pt,
                              null,
                              [
                                t(C) === t(Z).WALLET_INFO
                                  ? (n(),
                                    z(t(Xs), {
                                      key: t(s).shouldCache,
                                      onHandelError: $,
                                    }))
                                  : R("", !0),
                              ],
                              1024
                            )),
                            t(C) === t(Z).REVIEW_ORDER
                              ? (n(), z(t(cn), { key: 0, onHandelError: $ }))
                              : R("", !0),
                            t(C) === t(Z).PAY_ORDER
                              ? (n(),
                                z(t(qr), {
                                  key: 1,
                                  onHandelError: $,
                                  onClearTrackOrder: M,
                                }))
                              : R("", !0),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  };
export { xo as _ };
