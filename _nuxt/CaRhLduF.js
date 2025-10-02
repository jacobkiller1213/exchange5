import {
  al as C,
  am as R,
  r as f,
  bz as z,
  s as F,
  a as o,
  c as u,
  b as d,
  Q as b,
  t as m,
  n as x,
  h as g,
  y as q,
  w as $,
  H as I,
  g as h,
  a2 as L,
  u as D,
  p as O,
  F as P,
} from "./Sm2mCfDE.js";
import { V as Z } from "./ChErJn07.js";
import { V as N } from "./ZfNZiyCm.js";
const T = function (l) {
    const p =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      v = l.trim();
    return p.test(v);
  },
  j = { key: 0 },
  H = { key: 1, class: "text-gray-700 mb-1.5 text-sm-medium" },
  Q = {
    key: 0,
    class:
      "flex justify-between align-center w-full pl-3.5 bg-gray-50 text-gray-500 text-sm-regular",
  },
  G = { class: "h-full" },
  J = { key: 0 },
  K = { key: 1, class: "h-full" },
  le = {
    __name: "Input",
    props: C(
      {
        name: { type: String, default: "" },
        beError: { type: Boolean, default: !1 },
        label: { type: String, default: "" },
        validation: { type: String, default: "" },
        hasButton: { type: Boolean, default: !1 },
        readonly: { type: Boolean, default: !1 },
        copy: { type: Boolean, default: !1 },
        btnLabel: { type: String, default: "" },
        autocomplete: { type: String, default: "" },
        btnColor: { type: String, default: "primary-600" },
        btnLoading: { type: Boolean, default: !1 },
        buttonDisable: { type: Boolean, default: !1 },
      },
      {
        value: { type: String, default: "" },
        valueModifiers: {},
        hasError: { type: Boolean, default: !1 },
        hasErrorModifiers: {},
      }
    ),
    emits: C(["btnClicked"], ["update:value", "update:hasError"]),
    setup(l, { expose: p, emit: v }) {
      const w = v,
        k = R(l, "value"),
        E = R(l, "hasError"),
        a = l,
        r = f({}),
        i = f({}),
        y = f({}),
        A = z(),
        B = f(null),
        V = {
          required: (t, e) => {
            if (i.value[e])
              return t
                ? ((r.value[e] = { text: "" }), !0)
                : ((r.value[e] = {
                    text: "is required.",
                    color: "text-red-500",
                  }),
                  !1);
          },
          email: (t, e) => (
            (E.value = !1),
            T(t)
              ? ((r.value[e] = { text: "" }), !0)
              : ((r.value[e] = {
                  text: "Email is not valid",
                  color: "text-red-500",
                }),
                (E.value = !0),
                !1)
          ),
          
          min: (t, e) => {
            console.log(t.length)
            if (i.value[e])
               
              return t.length < 8
                ? ((r.value[e] = {
                    text: "Minimum 8 characters.",
                    color: "text-red-500",
                  }),
                  !1)
                : ((r.value[e] = { text: "" }), !0);
          },
          leastOneUpper: (t, e) => {
            if (i.value[e])
              return /[A-Z]/.test(t)
                ? ((r.value[e] = { text: "" }), !0)
                : ((r.value[e] = {
                    text: "At least 1 UPPERCASE.",
                    color: "text-red-500",
                  }),
                  !1);
          },
        },
        M = F(() => {
          const t = a.validation,
            e = a.name;
          return !t || !i.value[e]
            ? []
            : t
                .split("|")
                .map(
                  (n) => (
                    (n = n.trim()),
                    typeof V[n] != "function"
                      ? () => `${n} validation rule is not defined.`
                      : (c) => V[n](c, e)
                  )
                );
        }),
        U = (t, e) => {
          a.readonly || ((i.value[t] = !0), (y.value[t] = e));
        };
      return (
        p({
          focusInput: () => {
            B.value.focus();
          },
        }),
        (t, e) => {
          var n, c, S;
          return (
            o(),
            u(
              P,
              null,
              [
                d("div", null, [
                  t.$slots.title
                    ? (o(), u("div", j, [b(t.$slots, "title")]))
                    : (o(), u("div", H, m(l.label), 1)),
                ]),
                d(
                  "div",
                  {
                    class: x([
                      "rounded-[12px] -mx-1.5",
                      y.value[a.name]
                        ? ((n = r.value[a.name]) != null && n.text) || a.beError
                          ? "border-opacity-20 border-error-300 border-4"
                          : "border-opacity-20 border-4 border-primary-300"
                        : "border-4 border-opacity-0 border-white",
                    ]),
                  },
                  [
                    d(
                      "div",
                      {
                        class: x([
                          "flex h-11 rounded-lg border-opacity-100 shadow-xs overflow-hidden",
                          ((c = r.value[a.name]) != null && c.text) || l.beError
                            ? "border border-error-300"
                            : y.value[a.name]
                            ? "border border-primary-300"
                            : "border border-gray-300",
                        ]),
                      },
                      [
                        a.readonly
                          ? (o(),
                            u("div", Q, [
                              d("div", null, m(a.value), 1),
                              d("div", G, [
                                a.copy
                                  ? (o(), u("div", J, " copy "))
                                  : (o(), u("div", K, [b(t.$slots, "append")])),
                              ]),
                            ]))
                          : (o(),
                            g(
                              Z,
                              L(
                                {
                                  key: 1,
                                  ref_key: "input",
                                  ref: B,
                                  modelValue: k.value,
                                  "onUpdate:modelValue":
                                    e[0] || (e[0] = (s) => (k.value = s)),
                                  variant: "plain",
                                  "hide-details": "",
                                  autocomplete: a.autocomplete,
                                },
                                D(A),
                                {
                                  class: "px-3.5",
                                  rounded: "",
                                  density: "compact",
                                  rules: M.value,
                                  "onUpdate:focused":
                                    e[1] || (e[1] = (s) => U(a.name, s)),
                                }
                              ),
                              q({ _: 2 }, [
                                t.$slots.append ||
                                ((S = r.value[a.name]) != null && S.text) ||
                                l.beError
                                  ? {
                                      name: "append",
                                      fn: $(() => {
                                        var s;
                                        return [
                                          b(t.$slots, "append"),
                                          (((s = r.value[a.name]) != null &&
                                            s.text) ||
                                            l.beError) &&
                                          !t.$slots.append
                                            ? (o(),
                                              g(I, {
                                                key: 0,
                                                color: "error-500",
                                                icon: "mdi-information-outline",
                                              }))
                                            : h("", !0),
                                        ];
                                      }),
                                      key: "0",
                                    }
                                  : void 0,
                              ]),
                              1040,
                              ["modelValue", "autocomplete", "rules"]
                            )),
                        l.hasButton
                          ? (o(),
                            g(
                              N,
                              {
                                key: 2,
                                flat: "",
                                color: l.btnColor,
                                disabled: l.buttonDisable,
                                loading: l.btnLoading,
                                class: "!h-full !rounded-none text-capitalize",
                                onClick:
                                  e[2] || (e[2] = (s) => w("btnClicked")),
                              },
                              { default: $(() => [O(m(l.btnLabel), 1)]), _: 1 },
                              8,
                              ["color", "disabled", "loading"]
                            ))
                          : h("", !0),
                      ],
                      2
                    ),
                  ],
                  2
                ),
                r.value[a.name]
                  ? (o(),
                    u(
                      "div",
                      {
                        key: 0,
                        class: x([
                          "text-sm-medium mt-0.5",
                          r.value[a.name].color,
                        ]),
                      },
                      m(r.value[a.name].text),
                      3
                    ))
                  : h("", !0),
              ],
              64
            )
          );
        }
      );
    },
  };
export { le as _, T as i };
