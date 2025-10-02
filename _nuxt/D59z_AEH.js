import { _ as C } from "./DlAUqK2U.js";
import {
  r as h,
  o as I,
  a as p,
  c as _,
  b as t,
  n as N,
  u as g,
  t as n,
  d as v,
  F as S,
  e as T,
  f as s,
  w as d,
  _ as j,
  g as D,
} from "./Sm2mCfDE.js";
import { _ as F } from "./DVt5MIXn.js";
import { _ as V } from "./bNepudp1.js";
import { V as $, a as M } from "./Ck8zg9y4.js";
import { _ as L } from "./BNSvKMyq.js";
import { c as q, a as E } from "./3k4VnFXt.js";
import { V as w } from "./BhMtR_Hb.js";
import { V as z } from "./ZfNZiyCm.js";
import "./D_iu627J.js";
import "./C10dbX3k.js";
import "./xUo5sKGi.js";
import "./B8TxTyak.js";
import "./C2Qfbq92.js";
import "./CI8VFsgH.js";
import "./1WQF9nlZ.js";
import "./CMuUTlS2.js";
import "./CaRhLduF.js";
import "./ChErJn07.js";
import "./B_2FkP8S.js";
import "./CAlkWbu_.js";
import "./D5jKaxoB.js";
import "./WBDhfoJ7.js";
import "./CDxB5nOy.js";
import "./BIp5-3EK.js";
import "./DAcvVGJe.js";
import "./e7r5DKx9.js";
import "./D8ayu7rP.js";
import "./tqgqUFAa.js";
import "./BhFnA_AP.js";
import "./3k3FjGGU.js";
import "./DW9_RXAq.js";
import "./CpWmePdF.js";
/* empty css        */ const U = {
    class: "input-wrapper p-2 flex items-center",
  },
  G = { class: "placeholder-wrapper w-full relative flex items-center" },
  k = 100,
  H = 50,
  O = 1300,
  R = {
    __name: "Typewriter",
    props: { phraseList: { type: Array, default: () => [] } },
    setup(c) {
      const m = c;
      let l = [];
      const e = h(""),
        a = h(0),
        i = h(0),
        r = h(!1);
      I(() => {
        (l = m.phraseList), setTimeout(o, k);
      });
      const o = () => {
          i.value < l[a.value].length
            ? ((e.value += l[a.value].charAt(i.value)),
              i.value++,
              setTimeout(o, k))
            : a.value < l.length - 1
            ? setTimeout(u, O)
            : (r.value = !0);
        },
        u = () => {
          i.value > 0
            ? ((e.value = e.value.slice(0, -1)), i.value--, setTimeout(u, H))
            : (a.value++, a.value < l.length && setTimeout(o, k));
        };
      return (x, b) => (
        p(),
        _("div", U, [
          t("span", G, [
            t(
              "span",
              {
                class: N([
                  "placeholder overflow-hidden whitespace-nowrap lg:display-lg-bold display-xs-bold text-white",
                  { "blinking border-r-2 border-white": !g(r) },
                ]),
              },
              n(g(e)),
              3
            ),
          ]),
        ])
      );
    },
  },
  J = C(R, [["__scopeId", "data-v-6b5e2595"]]),
  K = { class: "text-lg-center text-left lg:mt-12 mt-16 pb-12" },
  Q = {
    class: "lg:display-md-bold display-sm-semibold mb-lg-2 mb-4 text-white",
  },
  W = { class: "lg:text-xl-medium text-md-regular text-primary-50" },
  X = { class: "hidden justify-center mt-lg-8 mt-4" },
  Y = ["href"],
  Z = {
    __name: "TrustMarks",
    setup(c) {
      const { $isDesktop: m } = v(),
        l = [
          { icon: "crypto", link: "https://crypto.ru/" },
          {
            icon: "trustpilot",
            link: "https://www.trustpilot.com/review/hi.exchange",
          },
          {
            link: "https://www.bestchange.com/jolixo-exchanger.html",
            icon: "bestchange",
          },
        ];
      return (e, a) => {
        const i = V;
        return (
          p(),
          _("div", K, [
            t("h1", Q, n(e.$t("trustMark.title")), 1),
            t("div", W, n(e.$t("trustMark.sub")), 1),
            t("div", X, [
              (p(),
              _(
                S,
                null,
                T(l, (r, o) =>
                  t("div", { key: o }, [
                    t(
                      "a",
                      { href: r.link, target: "_blank" },
                      [
                        s(
                          i,
                          {
                            width: g(m) ? "150px" : "92px",
                            height: g(m) ? "34px" : "20px",
                            src: `trustMarks/${r.icon}.png`,
                            alt: "icon",
                            class: "mx-lg-12 mx-3 cursor-pointer",
                          },
                          null,
                          8,
                          ["width", "height", "src"]
                        ),
                      ],
                      8,
                      Y
                    ),
                  ])
                ),
                64
              )),
            ]),
          ])
        );
      };
    },
  },
  tt = { class: "container mx-auto mt-12 hidden lg:!mt-[88px]" },
  et = { class: "mb-6 lg:display-md-semibold display-sm-semibold" },
  st = {
    __name: "TopServices",
    setup(c) {
      const m = [
        { key: "PayPal", link: "/solutions/exchange-paypal" },
        { key: "PaymentGate", link: "/solutions/online-payment" },
      ];
      return (l, e) => {
        const a = V,
          i = j;
        return (
          p(),
          _("div", tt, [
            t("h2", et, n(l.$t("topServices.title")), 1),
            s(
              M,
              { justify: "start" },
              {
                default: d(() => [
                  (p(),
                  _(
                    S,
                    null,
                    T(m, (r, o) =>
                      s(
                        $,
                        { key: o, cols: "12", lg: "4" },
                        {
                          default: d(() => [
                            t("div", null, [
                              s(
                                i,
                                { to: l.localePath(r.link) },
                                {
                                  default: d(() => [
                                    t("div", null, [
                                      s(
                                        a,
                                        {
                                          src: `topServices/${r.key}.png`,
                                          width: "100%",
                                          height: "100%",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["to"]
                              ),
                            ]),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    ),
                    64
                  )),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  },
  ot = {
    class:
      "flex flex-column lg:mt-24 mt-16 bg-gray-100 lg:rounded-2xl py-lg-16 px-lg-14 py-10 px-4 border border-gray-300 border-opacity-100",
  },
  lt = {
    class: "lg:flex justify-between align-end mb-lg-6 order-lg-1 order-2",
  },
  nt = { class: "" },
  it = { class: "lg:display-lg-semibold display-xs-bold text-gray-900" },
  rt = {
    class: "lg:text-xl-medium text-md-regular text-gray-700 mb-lg-0 mb-4",
  },
  at = { class: "text-md-semibold text-gray-700" },
  ct = {
    __name: "HomeVideo",
    emits: ["scrollTo"],
    setup(c, { emit: m }) {
      const { $isDesktop: l } = v(),
        e = m;
      return (a, i) => (
        p(),
        _("div", ot, [
          t("div", lt, [
            t("div", nt, [
              t("h2", it, n(a.$t("homeVideo.title")), 1),
              t("div", rt, n(a.$t("homeVideo.sub")), 1),
            ]),
            t(
              "div",
              {
                class:
                  "bg-gray-50 rounded-lg px-5 py-3 border border-gray-300 border-opacity-100 text-center cursor-pointer",
                onClick: i[0] || (i[0] = (r) => e("scrollTo")),
              },
              [t("span", at, n(a.$t("homeVideo.btnTitle")), 1)]
            ),
          ]),
          t(
            "div",
            {
              class: N([
                "w-full bg-gray-300 rounded-2xl lg:order-2 order-1",
                g(l) ? "h-[400px]" : "h-60 order-first mb-6",
              ]),
            },
            null,
            2
          ),
        ])
      );
    },
  },
  mt = { class: "container mx-auto mt-12 lg:!mt-24" },
  dt = { class: "lg:display-md-semibold display-sm-semibold mb-6" },
  pt = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" },
  _t = { class: "lg:display-xs-semibold text-xl-semibold text-gray-800" },
  ut = { class: "text-gray-600 lg:text-lg-regular text-md-regular mt-2" },
  gt = { class: "absolute bottom-0 right-0 z-10" },
  ht = {
    __name: "BenefitsSection",
    setup(c) {
      const { $isDesktop: m } = v(),
        l = ["free", "anonymous", "fast", "support"];
      return (e, a) => {
        const i = V;
        return (
          p(),
          _("div", mt, [
            t("h2", dt, n(e.$t("benefits.title")), 1),
            t("div", pt, [
              (p(),
              _(
                S,
                null,
                T(l, (r, o) =>
                  t(
                    "div",
                    {
                      key: o,
                      class:
                        "relative bg-gray-100 lg:h-[24rem] h-52 rounded-2xl lg:p-6 p-6 pr-16 border border-gray-300 border-opacity-100",
                    },
                    [
                      t("h3", _t, n(e.$t(`benefits.${r}.title`)), 1),
                      t("p", ut, n(e.$t(`benefits.${r}.sub`)), 1),
                      t("div", gt, [
                        s(
                          i,
                          {
                            src: `benefits/${r}.png`,
                            width: g(m) ? 350 : 150,
                            height: "auto",
                          },
                          null,
                          8,
                          ["src", "width"]
                        ),
                      ]),
                    ]
                  )
                ),
                64
              )),
            ]),
          ])
        );
      };
    },
  },
  xt = {
    __name: "AnimatedNumber",
    props: { target: { type: Number, required: !0 } },
    setup(c) {
      const m = c,
        l = h(0),
        e = h(null),
        a = (o) => (o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2),
        i = (o, u, x) => {
          const b = performance.now(),
            y = (f) => {
              const P = f - b,
                B = Math.min(P / x, 1),
                A = a(B);
              (l.value = Math.floor(o + (u - o) * A)),
                B < 1 && requestAnimationFrame(y);
            };
          requestAnimationFrame(y);
        },
        r = () => {
          const o = new IntersectionObserver(
            (u) => {
              u[0].isIntersecting && (i(1, m.target, 5e3), o.disconnect());
            },
            { threshold: 0.5 }
          );
          e.value && o.observe(e.value);
        };
      return (
        I(() => {
          r();
        }),
        (o, u) => (
          p(),
          _(
            "div",
            { ref_key: "numberSection", ref: e },
            " + " + n(l.value.toLocaleString() ?? null),
            513
          )
        )
      );
    },
  },
  bt = {},
  yt = {
    class:
      "px-4 py-10 mt-16 bg-primary-600 lg:rounded-2xl lg:!mt-24 py-lg-16 px-lg-12",
  },
  ft = {
    class: "mb-8 text-center lg:display-md-bold display-xs-bold mb-lg-10",
  },
  $t = { class: "text-primary-300" },
  vt = { class: "text-primary-25 mx-1.5" },
  wt = { class: "text-primary-300" },
  kt = { class: "lg:text-xl-medium text-primary-300 text-lg-medium" },
  St = { class: "lg:text-xl-medium text-primary-300 text-lg-medium" },
  Tt = { class: "lg:text-xl-medium text-primary-300 text-lg-medium" };
function Vt(c, m) {
  const l = xt;
  return (
    p(),
    _("div", yt, [
      t("h2", ft, [
        t("span", $t, n(c.$t("communitySec.title[0]")), 1),
        t("span", vt, n(c.$t("communitySec.title[1]")), 1),
        t("span", wt, n(c.$t("communitySec.title[2]")), 1),
      ]),
      s(
        M,
        { class: "" },
        {
          default: d(() => [
            s(
              $,
              {
                cols: "12",
                lg: "4",
                class:
                  "flex items-center flex-column lg:display-md-bold display-xs-bold",
              },
              {
                default: d(() => [
                  s(l, { target: 900 }),
                  t("div", kt, n(c.$t("communitySec.positiveComments")), 1),
                ]),
                _: 1,
              }
            ),
            s(
              $,
              {
                cols: "12",
                lg: "4",
                class:
                  "flex items-center flex-column lg:display-md-bold display-xs-bold",
              },
              {
                default: d(() => [
                  s(l, { target: 24e3 }),
                  t("div", St, n(c.$t("communitySec.activeUsers")), 1),
                ]),
                _: 1,
              }
            ),
            s(
              $,
              {
                cols: "12",
                lg: "4",
                class:
                  "flex items-center flex-column lg:display-md-bold display-xs-bold",
              },
              {
                default: d(() => [
                  s(l, { target: 61e3 }),
                  t("div", Tt, n(c.$t("communitySec.orders")), 1),
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
}
const Bt = C(bt, [["render", Vt]]),
  Ct = { class: "bg-gray-25" },
  It = { class: "hero pt-lg-16 pt-10" },
  Nt = {
    class:
      "lg:h-[76px] h-8 flex align-center justify-lg-center mb-lg-8 mb-6 px-lg-0 px-4",
  },
  Mt = { class: "lg:display-lg-bold display-xs-bold text-primary-200" },
  Pt = {
    class:
      "lg:display-md-semibold display-sm-semibold mb-6 lg:!mt-24 mt-10 lg:px-0 px-4 hidden",
  },
  At = { class: "lg:flex justify-between px-lg-0 px-4 lg:!mt-24 mt-10" },
  jt = { class: "text-gray-900 display-sm-semibold mb-4" },
  Dt = { class: "text-gray-600 lg:text-xl-regular text-md-regular" },
  Ft = { class: "px-4 text-md-semibold tracking-normal" },
  ye = {
    __name: "index",
    setup(c) {
      const { $isDesktop: m } = v(),
        l = () => {
          const e = document.getElementById("exchangeBox");
          e && e.scrollIntoView({ behavior: "smooth", block: "start" });
        };
      return (e, a) => {
        const i = J,
          r = F,
          o = Z,
          u = st,
          x = ct,
          b = ht,
          y = Bt,
          f = L;
        return (
          p(),
          _("div", Ct, [
            t("div", It, [
              s(w, null, {
                default: d(() => [
                  t("div", Nt, [
                    t("div", Mt, n(e.$t("home.exchange")), 1),
                    s(
                      i,
                      {
                        "phrase-list": [
                          e.$t("home.fast"),
                          e.$t("home.safe"),
                          e.$t("home.noSignUp"),
                          e.$t("home.noFee"),
                          e.$t("home.online"),
                        ],
                      },
                      null,
                      8,
                      ["phrase-list"]
                    ),
                  ]),
                  s(r, { id: "exchangeBox" }),
                  s(o, { class: "px-lg-0 px-4" }),
                ]),
                _: 1,
              }),
            ]),
            s(w, null, {
              default: d(() => [
                s(u, { class: "px-lg-0 px-4" }),
                D("", !0),
                s(b, { class: "px-lg-0 px-4" }),
                s(y),
                t("h2", Pt, n(e.$t("home.reviewTitle")), 1),
              ]),
              _: 1,
            }),
            s(f, { "left-to-right": !0, list: g(q), class: "mb-6" }, null, 8, [
              "list",
            ]),
            s(f, { "left-to-right": !1, list: g(E) }, null, 8, ["list"]),
            s(w, null, {
              default: d(() => [
                t("div", At, [
                  t("div", null, [
                    t("h2", jt, n(e.$t("home.explore.title")), 1),
                    t("div", Dt, n(e.$t("home.explore.sub")), 1),
                  ]),
                  s(
                    z,
                    {
                      class:
                        "rounded-4 my-custom-button text-none mt-lg-0 mt-6",
                      color: "primary-600",
                      flat: "",
                      height: "48",
                      width: g(m) ? "auto" : "100%",
                      rounded: "lg",
                      type: "submit",
                      onClick: l,
                    },
                    {
                      default: d(() => [
                        t("span", Ft, n(e.$t("home.explore.btn")), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["width"]
                  ),
                ]),
              ]),
              _: 1,
            }),
          ])
        );
      };
    },
  };
export { ye as default };
