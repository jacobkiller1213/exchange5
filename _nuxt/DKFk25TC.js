import {
  d as y,
  a as o,
  c as a,
  b as n,
  t as u,
  g as h,
  F as V,
  e as f,
  n as p,
  u as k,
  $ as v,
  a0 as b,
  a1 as C,
  a5 as _,
  f as B,
  a2 as $,
} from "./Sm2mCfDE.js";
import { m as x, V as g } from "./DIGJciYJ.js";
const A = { class: "flex justify-space-between" },
  P = { class: "text-text-lg font-semibold text-gray-800" },
  S = { class: "mt-4 ml-3" },
  D = ["onClick"],
  T = {
    __name: "QuickAccess",
    props: {
      hasClose: { type: Boolean, default: !1 },
      panelId: { type: String, default: "" },
    },
    emits: ["goTo", "close"],
    setup(e, { emit: l }) {
      const { $isDesktop: r } = y(),
        s = l,
        i = (t) => {
          s("goTo", t);
        },
        c = () => {
          s("close");
        };
      return (t, F) => (
        o(),
        a(
          "div",
          {
            class: p([
              "bg-gray-50 border border-opacity-100 border-gray-300 w-full rounded-[1rem] p-8 hidden",
              { "sticky top-24": k(r) },
            ]),
          },
          [
            n("div", A, [
              n("h4", P, u(t.$t("quickAccess")), 1),
              e.hasClose
                ? (o(),
                  a(
                    "span",
                    { key: 0, class: "material-symbols-rounded", onClick: c },
                    " stat_minus_2 "
                  ))
                : h("", !0),
            ]),
            n("div", S, [
              (o(!0),
              a(
                V,
                null,
                f(
                  t.$tm("termsAndConditions"),
                  (m, d) => (
                    o(),
                    a(
                      "div",
                      {
                        key: d,
                        class: p([
                          "cursor-pointer text-gray-500 transition-all duration-300 mt-4",
                          t.$rt(m.id) === e.panelId
                            ? "text-gray-900 text-sm-medium"
                            : "text-gray-500 text-sm-regular",
                        ]),
                        onClick: (w) => i(t.$t(`termsAndConditions[${d}].id`)),
                      },
                      [n("div", null, u(t.$rt(m.title)), 1)],
                      10,
                      D
                    )
                  )
                ),
                128
              )),
            ]),
          ],
          2
        )
      );
    },
  },
  N = v(
    { inset: Boolean, ...x({ transition: "bottom-sheet-transition" }) },
    "VBottomSheet"
  ),
  j = b()({
    name: "VBottomSheet",
    props: N(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, l) {
      let { slots: r } = l;
      const s = C(e, "modelValue");
      return (
        _(() => {
          const i = g.filterProps(e);
          return B(
            g,
            $(i, {
              contentClass: ["v-bottom-sheet__content", e.contentClass],
              modelValue: s.value,
              "onUpdate:modelValue": (c) => (s.value = c),
              class: [
                "v-bottom-sheet",
                { "v-bottom-sheet--inset": e.inset },
                e.class,
              ],
              style: e.style,
            }),
            r
          );
        }),
        {}
      );
    },
  });
export { j as V, T as _ };
