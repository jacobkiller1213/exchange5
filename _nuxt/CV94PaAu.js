import { _ as I } from "./bNepudp1.js";
import { i as P } from "./Kcv6HAzH.js";
import { s as h } from "./DnaGcmTr.js";
import {
  r as c,
  i as E,
  j as H,
  o as R,
  k as V,
  l as A,
  c as r,
  b as t,
  t as e,
  f as T,
  n as m,
  F as g,
  e as _,
  p as u,
  a,
  u as f,
} from "./Sm2mCfDE.js";
import "./CAlkWbu_.js";
import "./B8TxTyak.js";
import "./CI8VFsgH.js";
const B = { class: "my-16 md:my-24" },
  S = {
    key: 0,
    class:
      "fixed bottom-0 z-10 order-2 w-full px-0 mt-0 md:px-4 md:relative md:w-1/3",
  },
  q = {
    class:
      "bg-white border-solid border border-gray-300 !rounded-tl-2xl !rounded-tr-2xl shadow-lg w-full pt-8 pb-3 px-4",
  },
  L = { class: "text-gray-800 text-sm-semibold" },
  N = ["onClick"],
  O = ["id"],
  j = { key: 1 },
  z = { class: "container px-4 mx-auto" },
  D = { class: "flex flex-col md:flex-row md:gap-8" },
  F = { class: "order-1 w-full md:w-2/3" },
  Q = { class: "w-full py-8 text-center rounded-lg bg-primary-50" },
  G = { class: "mt-8 mb-24" },
  M = { class: "font-bold text-gray-900 lg:display-lg-bold display-sm-bold" },
  U = {
    class: "w-full p-6 bg-white border border-gray-300 border-solid rounded-lg",
  },
  J = { class: "text-lg font-semibold text-gray-800" },
  K = { class: "mt-4" },
  W = ["onClick"],
  X = ["id"],
  Y = { class: "mb-8" },
  Z = { id: "CoinCannon", class: "mb-4 text-xl-medium" },
  tt = { class: "text-gray-600 text-md-regular" },
  st = { class: "mb-8" },
  et = { id: "Cookies", class: "mb-4 text-xl-medium" },
  ot = { class: "text-gray-600 text-md-regular" },
  lt = { class: "mb-8" },
  it = { id: "PersonalInformation", class: "mb-4 text-xl-medium" },
  rt = { class: "text-gray-600 text-md-regular" },
  at = { class: "px-8 text-gray-600 list-disc text-md-regular" },
  nt = { class: "my-4" },
  dt = { class: "my-4" },
  ct = { class: "my-4" },
  mt = { class: "my-4" },
  ut = { class: "mb-8" },
  vt = { id: "SecurityTechnologies", class: "mb-4 text-xl-medium" },
  pt = { class: "text-gray-600 text-md-regular" },
  yt = { class: "text-gray-600 text-md-regular" },
  ht = { class: "mb-8" },
  gt = {
    id: "TransferinformationToThirdParties",
    class: "mb-4 text-xl-medium",
  },
  _t = { class: "text-gray-600 text-md-regular" },
  ft = { class: "text-gray-600 text-md-regular" },
  bt = { class: "mb-8" },
  $t = {
    id: "TransmissionOfInformationToRegulators",
    class: "mb-4 text-xl-medium",
  },
  kt = { class: "text-gray-600 text-md-regular" },
  xt = { class: "text-gray-600 text-md-regular" },
  wt = { class: "text-gray-600 text-md-regular" },
  Tt = { class: "mb-8" },
  Ct = { id: "RefusalToProvideInformation", class: "mb-4 text-xl-medium" },
  It = { class: "text-gray-600 text-md-regular" },
  Pt = { class: "text-gray-600 text-md-regular" },
  Et = { class: "order-2 hidden w-full md:w-1/3 md:block" },
  Ht = {
    class:
      "bg-white border-solid border border-gray-300 w-full rounded-[1rem] p-8 sticky top-24",
  },
  Rt = { class: "font-semibold text-gray-800 text-text-lg" },
  Vt = { class: "mt-4 ml-3" },
  At = ["onClick"],
  Bt = ["id"],
  Ft = {
    __name: "privacy-policy",
    setup(St) {
      const d = c("General Rules"),
        v = c(null),
        n = c(!1),
        b = c(!0),
        { t: p } = E(),
        C = () => {
          n.value = !n.value;
        };
      H(n, (s) => {
        document.body.style.overflow = s ? "hidden" : "auto";
      });
      const y = (s, o) => {
          v.value === s
            ? ((d.value = ""), (v.value = null))
            : ((d.value = o), (v.value = s));
        },
        $ = () => {
          const s = k.value;
          s && (b.value = P(s));
        };
      R(() => {
        window.addEventListener("scroll", $);
      }),
        V(() => {
          window.removeEventListener("scroll", $);
        });
      const k = c(null);
      return (
        A({
          title: "CoinCannon | " + p("privacy.metaTitle"),
          meta: [
            { name: "title", content: "CoinCannon | " + p("privacy.metaTitle") },
            { name: "description", content: p("privacy.metaDescription") },
          ],
        }),
        (s, o) => {
          const x = I;
          return (
            a(),
            r("div", B, [
              b.value
                ? (a(), r("div", j))
                : (a(),
                  r("div", S, [
                    t("div", q, [
                      t("div", { class: "flex justify-between", onClick: C }, [
                        t("p", L, e(s.$t("quickAccess")), 1),
                        t("div", null, [
                          T(x, {
                            src: "icons/keyboard_double_arrow_down.svg",
                            class: "w-[24px]",
                            alt: "",
                          }),
                        ]),
                      ]),
                      t(
                        "div",
                        {
                          class: m([
                            "overflow-hidden transition-all duration-300",
                            { "max-h-auto": n.value, "max-h-0": !n.value },
                          ]),
                        },
                        [
                          (a(!0),
                          r(
                            g,
                            null,
                            _(
                              s.$tm("privacy.titles"),
                              (i, l) => (
                                a(),
                                r(
                                  "div",
                                  {
                                    key: l,
                                    class:
                                      "mt-4 text-sm font-medium transition-all duration-300 cursor-pointer",
                                    onClick: (w) => {
                                      y(l, s.$rt(i)), f(h)(l), (n.value = !1);
                                    },
                                  },
                                  [
                                    t(
                                      "div",
                                      {
                                        id: `#${l}`,
                                        class: m([
                                          s.$rt(i) === d.value
                                            ? "text-gray-800 font-medium"
                                            : "text-gray-600",
                                          "block",
                                        ]),
                                      },
                                      e(s.$rt(i)),
                                      11,
                                      O
                                    ),
                                  ],
                                  8,
                                  N
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                    ]),
                  ])),
              t("div", z, [
                t("div", D, [
                  t("div", F, [
                    t("div", Q, [
                      t("div", null, [
                        T(x, {
                          class: "w-[200px] mx-auto",
                          src: "statics/policy.png",
                          onClick:
                            o[0] || (o[0] = (i) => (s.visible = !s.visible)),
                        }),
                      ]),
                    ]),
                    t("div", G, [t("h1", M, e(s.$t("privacy.mainTitle")), 1)]),
                    t(
                      "div",
                      {
                        ref_key: "elementToTrack",
                        ref: k,
                        class: "order-2 block w-full mt-16 mb-8 md:hidden",
                      },
                      [
                        t("div", U, [
                          t("h2", J, e(s.$t("quickAccess")), 1),
                          t("div", K, [
                            (a(!0),
                            r(
                              g,
                              null,
                              _(
                                s.$tm("privacy.titles"),
                                (i, l) => (
                                  a(),
                                  r(
                                    "div",
                                    {
                                      key: l,
                                      class:
                                        "mt-4 text-sm font-medium transition-all duration-300 cursor-pointer",
                                      onClick: (w) => {
                                        y(l, s.$rt(i)), f(h)(l);
                                      },
                                    },
                                    [
                                      t(
                                        "div",
                                        {
                                          id: `#${l}`,
                                          class: m([
                                            i === d.value
                                              ? "text-gray-800 font-medium"
                                              : "text-gray-600",
                                            "block",
                                          ]),
                                        },
                                        e(s.$rt(i)),
                                        11,
                                        X
                                      ),
                                    ],
                                    8,
                                    W
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                      ],
                      512
                    ),
                    t("div", null, [
                      t("div", Y, [
                        t("h2", Z, "Конфиденциальность и политика", 1),
                        t("p", tt, [
                          u(e(s.$t("privacy.hi1")) + " ", 1),
                          o[1] || (o[1] = t("br", null, null, -1)),
                          u(" " + e(s.$t("privacy.hi2")), 1),
                        ]),
                      ]),
                      t("div", st, [
                        t("h2", et, e(s.$t("privacy.titles.Cookies")), 1),
                        t("p", ot, [
                          u(e(s.$t("privacy.cookie1")) + " ", 1),
                          o[2] || (o[2] = t("br", null, null, -1)),
                          u(" " + e(s.$t("privacy.cookie2")), 1),
                        ]),
                      ]),
                      t("div", lt, [
                        t(
                          "h2",
                          it,
                          e(s.$t("privacy.titles.PersonalInformation")),
                          1
                        ),
                        t("p", rt, e(s.$t("privacy.personal1")), 1),
                        t("ul", at, [

                          t("li", dt, e(s.$t("privacy.personal2")), 1),
                          t("li", ct, e(s.$t("privacy.personal3")), 1),
                          t("li", mt, e(s.$t("privacy.personal4")), 1),
                        ]),
                      ]),
                      t("div", ut, [
                        t(
                          "h2",
                          vt,
                          e(s.$t("privacy.titles.SecurityTechnologies")),
                          1
                        ),
                        t("p", pt, e(s.$t("privacy.security")), 1),
                        o[3] || (o[3] = t("br", null, null, -1)),
                        t("p", yt, e(s.$t("privacy.attendants")), 1),
                      ]),
                      t("div", ht, [
                        t(
                          "h2",
                          gt,
                          e(
                            s.$t(
                              "privacy.titles.TransferinformationToThirdParties"
                            )
                          ),
                          1
                        ),
                        t("p", _t, e(s.$t("privacy.transfer1")), 1),
                        o[4] || (o[4] = t("br", null, null, -1)),
                        t("p", ft, e(s.$t("privacy.transfer2")), 1),
                      ]),
                      t("div", bt, [
                        t(
                          "h2",
                          $t,
                          e(
                            s.$t(
                              "privacy.titles.TransmissionOfInformationToRegulators"
                            )
                          ),
                          1
                        ),
                        t("p", kt, e(s.$t("privacy.transmission1")), 1),
                        o[5] || (o[5] = t("br", null, null, -1)),
                        t("p", xt, e(s.$t("privacy.transmission2")), 1),
                        o[6] || (o[6] = t("br", null, null, -1)),
                        t("p", wt, e(s.$t("privacy.transmission3")), 1),
                      ]),
                      t("div", Tt, [
                        t(
                          "h2",
                          Ct,
                          e(s.$t("privacy.titles.RefusalToProvideInformation")),
                          1
                        ),
                        t("p", It, e(s.$t("privacy.refusal1")), 1),
                        o[7] || (o[7] = t("br", null, null, -1)),
                        t("p", Pt, e(s.$t("privacy.refusal2")), 1),
                      ]),
                    ]),
                  ]),
                  t("div", Et, [
                    t("div", Ht, [
                      t("h2", Rt, e(s.$t("quickAccess")), 1),
                      t("div", Vt, [
                        (a(!0),
                        r(
                          g,
                          null,
                          _(
                            s.$tm("privacy.titles"),
                            (i, l) => (
                              a(),
                              r(
                                "div",
                                {
                                  key: l,
                                  class:
                                    "mt-4 font-medium text-gray-500 transition-all duration-300 cursor-pointer text-sm-regular",
                                  onClick: (w) => {
                                    y(l, s.$rt(i)), f(h)(l);
                                  },
                                },
                                [
                                  t(
                                    "div",
                                    {
                                      id: `#${l}`,
                                      class: m([
                                        s.$rt(i) === d.value
                                          ? "text-gray-900 font-medium"
                                          : "text-gray-500",
                                        "block",
                                      ]),
                                    },
                                    e(s.$rt(i)),
                                    11,
                                    Bt
                                  ),
                                ],
                                8,
                                At
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
      );
    },
  };
export { Ft as default };
