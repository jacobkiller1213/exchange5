import { V as E, _ as A } from "./DKFk25TC.js";
import { _ as B } from "./bNepudp1.js";
import {
  i as P,
  d as S,
  r as w,
  o as I,
  k as M,
  l as D,
  c,
  f as m,
  w as u,
  u as n,
  m as C,
  b as t,
  t as p,
  g as b,
  a as i,
  h as y,
  F as T,
  e as k,
} from "./Sm2mCfDE.js";
import { V as H } from "./BhMtR_Hb.js";
import { V as N, a as Y, b as G, c as L } from "./C1DtZnIy.js";
import "./DIGJciYJ.js";
import "./C10dbX3k.js";
import "./xUo5sKGi.js";
import "./B8TxTyak.js";
import "./C2Qfbq92.js";
import "./CI8VFsgH.js";
import "./D8ayu7rP.js";
import "./CMuUTlS2.js";
import "./CAlkWbu_.js";
/* empty css        */ import "./B_2FkP8S.js";
const R = { class: "relative px-4 my-16 md:my-24 px-lg-0" },
  U = { class: "flex justify-space-between align-center" },
  j = { class: "text-gray-800 text-sm-semibold" },
  q = { class: "lg:flex lg:gap-32" },
  z = { class: "w-full lg:w-2/3" },
  F = {
    class:
      "flex justify-center py-8 mb-4 -mx-4 bg-gray-100 rounded-lg lg:mx-0 mb-lg-6",
  },
  O = { class: "" },
  J = { class: "font-bold text-gray-900 lg:display-lg-bold display-sm-bold" },
  K = { class: "pb-12 mt-6 text-gray-600 lg:pb-32 terms-text" },
  Q = { class: "order-1 w-full hidden" },
  W = { class: "text-gray-900 lg:text-xl-medium text-md-medium" },
  X = { class: "text-gray-600 text-md-regular" },
  Z = { key: 0, class: "w-full lg:w-1/3 hidden" },
  ve = {
    __name: "terms-of-services",
    setup(ee) {
      const { t: g } = P(),
        { $isDesktop: f } = S(),
        l = w(!1),
        x = w(!1),
        r = w(""),
        _ = async (s) => {
          f.value || (l.value = !1),
            await new Promise((d) => {
              (r.value = s),
                setTimeout(() => {
                  d();
                }, 275);
            });
          const e = document.getElementById(s);
          if (e) {
            const d = e.getBoundingClientRect().top,
              v = window.scrollY || window.pageYOffset,
              o = document.getElementById("header");
            let a = 85;
            o && (a = o.offsetHeight ?? 85);
            const V = d + v - a;
            window.scrollTo({ top: V, behavior: "smooth" });
          }
        },
        h = () => {
          x.value = window.scrollY > 1200;
        };
      return (
        I(() => {
          f.value || window.addEventListener("scroll", h);
        }),
        M(() => {
          window.removeEventListener("scroll", h);
        }),
        D({
          title: "CoinCannon | " + g("TermsMetaTitle"),
          meta: [
            { name: "title", content: "CoinCannon | " + g("TermsMetaTitle") },
            { name: "description", content: g("termsMetaDescription") },
          ],
        }),
        (s, e) => {
          const d = A,
            v = B;
          return (
            i(),
            c("div", R, [
              m(
                E,
                {
                  modelValue: n(l),
                  "onUpdate:modelValue":
                    e[1] || (e[1] = (o) => (C(l) ? (l.value = o) : null)),
                  inset: "",
                },
                {
                  default: u(() => [
                    m(
                      d,
                      {
                        "panel-id": n(r),
                        "has-close": "",
                        onGoTo: _,
                        onClose: e[0] || (e[0] = (o) => (l.value = !n(l))),
                      },
                      null,
                      8,
                      ["panel-id"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
              n(x)
                ? (i(),
                  c(
                    "div",
                    {
                      key: 0,
                      class:
                        "fixed bottom-0 left-0 z-10 w-full p-4 pt-8 bg-white border border-b-0 border-gray-300 border-opacity-100 shadow-lg rounded-t-2xl hidden",
                      onClick: e[2] || (e[2] = (o) => (l.value = !n(l))),
                    },
                    [
                      t("div", U, [
                        t("p", j, p(s.$t("quickAccess")), 1),
                        e[4] ||
                          (e[4] = t(
                            "span",
                            { class: "material-symbols-rounded" },
                            " stat_2 ",
                            -1
                          )),
                      ]),
                    ]
                  ))
                : b("", !0),
              m(H, null, {
                default: u(() => [
                  t("div", q, [
                    t("div", z, [
                      t("div", F, [
                        t("div", null, [
                          m(v, {
                            class: "w-[200px] mx-auto",
                            src: "statics/terms.png",
                          }),
                        ]),
                      ]),
                      t("div", O, [
                        t("h1", J, p(s.$t("termsAndRulesTitle")), 1),
                        t(
                          "div",
                          K,
                          p(s.$t("termsAndConditionsDescription")),

                        ),
                      ]),
                      n(f)
                        ? b("", !0)
                        : (i(),
                          y(
                            d,
                            {
                              key: 0,
                              id: "my-element",
                              "panel-id": n(r),
                              onGoTo: _,
                            },
                            null,
                            8,
                            ["panel-id"]
                          )),
                      t("div", Q, [
                        m(
                          N,
                          {
                            modelValue: n(r),
                            "onUpdate:modelValue":
                              e[3] ||
                              (e[3] = (o) => (C(r) ? (r.value = o) : null)),
                            flat: "",
                            variant: "accordion",
                          },
                          {
                            default: u(() => [
                              (i(!0),
                              c(
                                T,
                                null,
                                k(
                                  s.$tm("termsAndConditions"),
                                  (o, a) => (
                                    i(),
                                    y(
                                      L,
                                      {
                                        id: s.$t(`termsAndConditions[${a}].id`),
                                        key: a,
                                        value: s.$t(
                                          `termsAndConditions[${a}].id`
                                        ),
                                      },
                                      {
                                        actions: u(
                                          () =>
                                            e[5] ||
                                            (e[5] = [
                                              t(
                                                "span",
                                                {
                                                  class:
                                                    "material-symbols-rounded",
                                                },
                                                " keyboard_arrow_down ",
                                                -1
                                              ),
                                            ])
                                        ),
                                        default: u(() => [
                                          m(
                                            Y,
                                            {
                                              class:
                                                "border-b border-gray-300 border-opacity-100",
                                            },
                                            {
                                              default: u(() => [
                                                t(
                                                  "h2",
                                                  W,
                                                  p(s.$rt(o.title)),
                                                  1
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                          (i(!0),
                                          c(
                                            T,
                                            null,
                                            k(
                                              s.$tm(
                                                `termsAndConditions[${a}].description`
                                              ),
                                              (V, $) => (
                                                i(),
                                                y(
                                                  G,
                                                  { key: $ },
                                                  {
                                                    default: u(() => [
                                                      t(
                                                        "div",
                                                        X,
                                                        p(
                                                          s.$t(
                                                            `termsAndConditions[${a}].description[${$}]`
                                                          )
                                                        ),
                                                        1
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
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["id", "value"]
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
                    ]),
                    n(f)
                      ? (i(),
                        c("div", Z, [
                          m(d, { "panel-id": n(r), onGoTo: _ }, null, 8, [
                            "panel-id",
                          ]),
                        ]))
                      : b("", !0),
                  ]),
                ]),
                _: 1,
              }),
            ])
          );
        }
      );
    },
  };
export { ve as default };
