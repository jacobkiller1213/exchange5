import { _ as D } from "./bNepudp1.js";
import {
  c4 as se,
  c5 as ae,
  br as E,
  c6 as G,
  c7 as q,
  c8 as le,
  i as K,
  bF as O,
  q as Q,
  u as b,
  a as o,
  c as n,
  F as w,
  e as A,
  f as i,
  w as l,
  b as e,
  a2 as X,
  h as u,
  t as s,
  n as $,
  g as m,
  _ as Z,
  $ as ie,
  a7 as re,
  a0 as ne,
  aj as de,
  ai as R,
  a5 as ce,
  x as he,
  r as M,
  s as ue,
  H as W,
  p,
  c9 as pe,
  ca as me,
  ad as ge,
  Q as fe,
} from "./Sm2mCfDE.js";
import { V as ve } from "./CAlkWbu_.js";
import { V as Y, a as J, c as z } from "./BXNHQyJN.js";
import { V as ee } from "./e7r5DKx9.js";
import { _ as xe } from "./3k3FjGGU.js";
import { A as I } from "./D_iu627J.js";
import { f as ye, V as N } from "./ZfNZiyCm.js";
/* empty css        */ import { c as Ce } from "./BIp5-3EK.js";
import { V as _e, G as be } from "./DXH68qfu.js";
import { _ as we } from "./DlAUqK2U.js";
import "./B8TxTyak.js";
import "./CI8VFsgH.js";
import "./B_2FkP8S.js";
import "./BAjJeBkK.js";
import "./CMuUTlS2.js";
import "./xUo5sKGi.js";
import "./C10dbX3k.js";
import "./C2Qfbq92.js";
import "./D8ayu7rP.js";
import "./CaRhLduF.js";
import "./ChErJn07.js";
import "./DW9_RXAq.js";
import "./CpWmePdF.js";
import "./1WQF9nlZ.js";
import "./DAcvVGJe.js";
import "./DIGJciYJ.js";
const $e = Ce("v-spacer", "div", "VSpacer"),
  ke = le({ componentName: "NuxtLink" }),
  Ae = se({
    name: "SwitchLocalePathLink",
    props: { locale: { type: String, required: !0 } },
    inheritAttrs: !1,
    setup(t, { slots: v, attrs: d }) {
      const a = ae();
      return () => [
        E(q, `${G}-[${t.locale}]`),
        E(ke, { ...d, to: encodeURI(a(t.locale)) }, v.default),
        E(q, `/${G}`),
      ];
    },
  }),
  Le = { key: 0 },
  Fe = { key: 1, class: "p-2 mx-3 border border-gray-800 rounded-pill" },
  Pe = { class: "flex gap-2" },
  Te = { class: "truncate max-w-[150px] hidden md:block" },
  Se = {
    key: 0,
    class: "mb-3 px-5 pt-5 text-left text-primary-600 text-sm-semibold",
  },
  He = { class: "flex items-center gap-2 my-1" },
  Ve = { class: "text-gray-700 text-md-semibold" },
  Ie = {
    __name: "Dropdown",
    setup(t) {
      const { t: v } = K(),
        d = O(),
        a = Q(),
        g = [
          {
            name: v("headerAndFooter.services.title"),
            children: [
              {
                children: [
                  {
                    name: "Home",
                    route: "/",
                    isNew: !0,
                    isActive: !1,
                    imgSize: { width: "40px", height: "40px" },
                  },
                  {
                    name: "Dashboard",
                    route: "/dashboard",
                    target: "_self",
                    isActive: !1,
                    imgSize: { width: "40px", height: "40px" },
                  },
                  {
                    name: "Logout",
                    isActive: !1,
                    imgSize: { width: "40px", height: "40px" },
                  },
                ],
              },
            ],
            isActive: !1,
          },
        ],
        L = async (C) => {
          C === "Logout" && (await d.logout(), (window.location.href = "/"));
        };
      return (C, x) => {
        const P = D,
          V = Z;
        return b(a).userInfo
          ? (o(),
            n("div", Le, [
              (o(),
              n(
                w,
                null,
                A(g, (H) =>
                  i(
                    ee,
                    {
                      key: H.name,
                      transition: "slide-y-transition",
                      "close-delay": "100",
                      "open-delay": "0",
                      "open-on-hover": "",
                    },
                    {
                      activator: l(({ props: k }) => [
                        e(
                          "div",
                          X(
                            {
                              class: "flex cursor-pointer align-center",
                              ref_for: !0,
                            },
                            k
                          ),
                          [
                            b(a).userInfo.avatar
                              ? (o(),
                                u(
                                  ve,
                                  {
                                    key: 0,
                                    class:
                                      "mx-2 border rounded-full border-gray-500",
                                    height: "40",
                                    width: "40",
                                    src: b(a).userInfo.avatar,
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ))
                              : (o(),
                                n(
                                  "div",
                                  Fe,
                                  x[0] ||
                                    (x[0] = [
                                      e(
                                        "span",
                                        { class: "material-symbols-rounded" },
                                        " person ",
                                        -1
                                      ),
                                    ])
                                )),
                            e("div", Pe, [
                              e("div", Te, s(b(a).userInfo.email), 1),
                              i(P, {
                                class: "w-[24px]",
                                src: "icons/chevron_down.svg",
                                alt: "",
                              }),
                            ]),
                          ],
                          16
                        ),
                      ]),
                      default: l(() => [
                        e("div", null, [
                          H.children
                            ? (o(),
                              u(
                                Y,
                                {
                                  key: 0,
                                  class: $([
                                    "!rounded-2xl mt-3 border-solid border border-gray-600",
                                    H.children.length > 1
                                      ? "grid grid-cols-2"
                                      : "grid",
                                  ]),
                                },
                                {
                                  default: l(() => [
                                    (o(!0),
                                    n(
                                      w,
                                      null,
                                      A(
                                        H.children,
                                        (k, h) => (
                                          o(),
                                          n("div", { key: h }, [
                                            k.title
                                              ? (o(),
                                                n("h6", Se, s(k.title), 1))
                                              : m("", !0),
                                            (o(!0),
                                            n(
                                              w,
                                              null,
                                              A(
                                                k.children,
                                                (c, _) => (
                                                  o(),
                                                  u(
                                                    J,
                                                    { key: _ },
                                                    {
                                                      default: l(() => [
                                                        i(
                                                          V,
                                                          {
                                                            to: C.localePath(
                                                              c.route
                                                            ),
                                                            external:
                                                              c.external,
                                                            class:
                                                              "cursor-pointer",
                                                            value: c.name,
                                                            onClick: (S) =>
                                                              L(c.name),
                                                          },
                                                          {
                                                            default: l(() => [
                                                              e("div", He, [
                                                                e("div", null, [
                                                                  c.img
                                                                    ? (o(),
                                                                      u(
                                                                        P,
                                                                        {
                                                                          key: 0,
                                                                          width:
                                                                            c
                                                                              .imgSize
                                                                              .width,
                                                                          height:
                                                                            c
                                                                              .imgSize
                                                                              .height,
                                                                          src: `${c.img}`,
                                                                          alt: "",
                                                                        },
                                                                        null,
                                                                        8,
                                                                        [
                                                                          "width",
                                                                          "height",
                                                                          "src",
                                                                        ]
                                                                      ))
                                                                    : m("", !0),
                                                                ]),
                                                                i(
                                                                  z,
                                                                  null,
                                                                  {
                                                                    default: l(
                                                                      () => [
                                                                        e(
                                                                          "span",
                                                                          Ve,
                                                                          s(
                                                                            c.name
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1024
                                                                ),
                                                              ]),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          [
                                                            "to",
                                                            "external",
                                                            "value",
                                                            "onClick",
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
                                          ])
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["class"]
                              ))
                            : m("", !0),
                        ]),
                      ]),
                      _: 2,
                    },
                    1024
                  )
                ),
                64
              )),
            ]))
          : m("", !0);
      };
    },
  },
  Me = ie({ ...re(), ...ye({ variant: "text" }) }, "VToolbarItems"),
  ze = ne()({
    name: "VToolbarItems",
    props: Me(),
    setup(t, v) {
      let { slots: d } = v;
      return (
        de({
          VBtn: {
            color: R(t, "color"),
            height: "inherit",
            variant: R(t, "variant"),
          },
        }),
        ce(() => {
          var a;
          return i(
            "div",
            { class: ["v-toolbar-items", t.class], style: t.style },
            [(a = d.default) == null ? void 0 : a.call(d)]
          );
        }),
        {}
      );
    },
  }),
  Ze = { id: "header", class: "sticky top-0 z-[999] w-full border-solid" },
  Ee = { class: "flex items-center h-full w-full justify-center " },
  Ne = { class: "flex items-center justify-center" },
  De = { class: "!hidden lg:!block h-full" },
  Ue = {
    class:
      "text-capitalize text-gray-700 hover:!text-gray-800 text-md-semibold",
  },
  Be = {
    key: 0,
    class: "mb-3 px-5 pt-5 text-left text-primary-600 text-sm-semibold",
  },
  je = { class: "flex items-center gap-2 my-1" },
  Ge = { class: "text-gray-700 text-md-semibold" },
  qe = { class: "flex items-center gap-2 my-1" },
  Re = { class: "text-gray-700 text-md-semibold" },
  We = { key: 0, class: "hidden md:block" },
  Ke = { key: 1, class: "gap-3 hidden " },
  Oe = { class: "text-md-semibold text-gray-700" },
  Qe = { class: "text-md-semibold" },
  Xe = { class: "mx-2 block lg:hidden" },
  Ye = {
    key: 0,
    class:
      "relative pb-8 overflow-y-scroll h-[100vh] w-[100vw] xl:hidden px-4 bg-white z-[99] right-0 left-0 bottom-0",
  },
  Je = { class: "cursor-pointer" },
  e1 = ["onClick"],
  t1 = ["onClick"],
  o1 = { class: "flex flex-col gap-2" },
  s1 = { key: 0, class: "mb-3 text-primary-600 text-sm-semibold" },
  a1 = { class: "ml-2" },
  l1 = {
    key: 0,
    class:
      "text-sm-medium rounded-xl px-2.5 py-1 bg-success-50 text-success-700",
  },
  i1 = { class: "flex items-center gap-2 my-1" },
  r1 = { class: "text-gray-700 text-md-semibold" },
  n1 = { key: 0 },
  d1 = {
    class:
      "relative block w-full px-3 mt-2 cursor-pointer xl:hidden text-md-semibold",
  },
  c1 = { class: "float-left text-gray-700" },
  h1 = { class: "flex flex-col gap-4 mt-4" },
  u1 = { class: "flex items-center gap-3" },
  p1 = {
    key: 1,
    class:
      "relative mt-8 bg-white right-0 pt-6 bottom-0 pb-6 left-0 px-4 border-solid border-t-[1px] border-gray-200 hidden flex-col items-center gap-3",
  },
  m1 = {
    __name: "index",
    setup(t) {
      const v = he("dialog"),
        { locale: d, t: a } = K(),
        g = Q(),
        L = O(),
        C = M(!1),
        x = M(null),
        P = M([
          { text: "dashboard", link: "/dashboard" },
          { text: "logout", icon: "mdi-logout" },
        ]),
        V = ue(() => [
          {
            name: "О нас",
            route: "/contact-us",
            isActive: false
          },
          {
            name: "FAQ",
            route: "/faq",
            isActive: false
          },
          {
            name: "Правила",
            route: "/terms-of-services",
            isActive: false
          },
          {
            name: "Политика конфиденциальности",
            route: "/privacy-Policy",
            isActive: false
          },
          {
            name: "Поддержка",
            route: "https://t.me/coincannon_ex ",
            external: true,
            isActive: false,
            class: "bg-primary-600 w-full text-md-semibold text-white py-2.5 px-5 rounded-lg",
            style: {
              height: "48px",
              color: "white"
            }
          },

        ])

      return (h, c) => {
        var B, j;
        const _ = D,
          S = Z,
          U = Ae,
          te = Ie;
        return (
          o(),
          n("div", Ze, [
            e("div", null, [
              e("div", null, [
                i(
                  _e,
                  {
                    class:
                      "bg-gray-50 px-5 py-1 md:px-8 border-b border-gray-600",
                    app: "",
                  },
                  {
                    default: l(() => [
                      i(
                        ze,
                        { class: "justify-between w-full items-center" },
                        {
                          default: l(() => [
                            e("div", Ee, [
                              e("div", Ne, [
                                i(
                                  "a",
                                  { href: "/" },
                                  {
                                    default: l(() => [
                                      i(_, {
                                        src: "logos/jolixo-logo.svg",
                                        class: "w-[120px] h-[25px] 1",
                                        alt: "",
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["to"]
                                ),
                              ]),
                              e("div", De, [
                                (o(!0),
                                n(
                                  w,
                                  null,
                                  A(
                                    V.value,
                                    (r) => (
                                      o(),
                                      u(
                                        ee,
                                        {
                                          key: r.name,
                                          transition: "slide-y-transition",
                                          "close-delay": "100",
                                          "open-delay": "0",
                                          "open-on-hover": "",
                                        },
                                        {
                                          activator: l(({ props: F }) => [
                                            i(
                                              N,
                                              X({ ref_for: !0 }, F, {
                                                color: "transparent",
                                                variant: "text",
                                                to: r.path,
                                              }),
                                              {
                                                default: l(() => [
                                                  i(
                                                    S,
                                                    {
                                                      class:
                                                        "flex gap-1 items-center",
                                                      to: h.localePath(r.route),
                                                    },
                                                    {
                                                      default: l(() => [
                                                        i(
                                                          W,
                                                          {
                                                            left: "",
                                                            dark: "",
                                                          },
                                                          {
                                                            default: l(() => [
                                                              p(s(r.icon), 1),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1024
                                                        ),
                                                        r.img
                                                          ? (o(),
                                                            u(
                                                              _,
                                                              {
                                                                key: 0,
                                                                width: "24px",
                                                                height: "24px",
                                                                src: `${r.img}`,
                                                                alt: "",
                                                              },
                                                              null,
                                                              8,
                                                              ["src"]
                                                            ))
                                                          : m("", !0),
                                                        e(
                                                          "span",
                                                          Ue,
                                                          s(
                                                            r.name === "locale"
                                                              ? b(d)
                                                              : h.$t(r.name)
                                                          ),
                                                          1
                                                        ),
                                                        r.children
                                                          ? (o(),
                                                            u(_, {
                                                              key: 1,
                                                              class: "w-[24px]",
                                                              src: "icons/chevron_down.svg",
                                                              alt: "",
                                                            }))
                                                          : m("", !0),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["to"]
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1040,
                                              ["to"]
                                            ),
                                          ]),
                                          default: l(() => [
                                            e("div", null, [
                                              r.children
                                                ? (o(),
                                                  u(
                                                    Y,
                                                    {
                                                      key: 0,
                                                      class: $([
                                                        "!rounded-2xl border-solid border border-gray-600",
                                                        r.children.length > 1
                                                          ? "grid grid-cols-3"
                                                          : "grid",
                                                      ]),
                                                    },
                                                    {
                                                      default: l(() => [
                                                        (o(!0),
                                                        n(
                                                          w,
                                                          null,
                                                          A(
                                                            r.children,
                                                            (F, T) => (
                                                              o(),
                                                              n(
                                                                "div",
                                                                { key: T },
                                                                [
                                                                  F.title
                                                                    ? (o(),
                                                                      n(
                                                                        "h6",
                                                                        Be,
                                                                        s(
                                                                          F.title
                                                                        ),
                                                                        1
                                                                      ))
                                                                    : m("", !0),
                                                                  (o(!0),
                                                                  n(
                                                                    w,
                                                                    null,
                                                                    A(
                                                                      F.children,
                                                                      (
                                                                        y,
                                                                        f
                                                                      ) => (
                                                                        o(),
                                                                        u(
                                                                          J,
                                                                          {
                                                                            key: f,
                                                                          },
                                                                          {
                                                                            default:
                                                                              l(
                                                                                () => [
                                                                                  r.name !==
                                                                                  "locale"
                                                                                    ? (o(),
                                                                                      u(
                                                                                        S,
                                                                                        {
                                                                                          key: 0,
                                                                                          to: h.localePath(
                                                                                            y.route
                                                                                          ),
                                                                                          external:
                                                                                            y.external,
                                                                                          class:
                                                                                            "cursor-pointer",
                                                                                        },
                                                                                        {
                                                                                          default:
                                                                                            l(
                                                                                              () => [
                                                                                                e(
                                                                                                  "div",
                                                                                                  je,
                                                                                                  [
                                                                                                    e(
                                                                                                      "div",
                                                                                                      null,
                                                                                                      [
                                                                                                        y.img
                                                                                                          ? (o(),
                                                                                                            u(
                                                                                                              _,
                                                                                                              {
                                                                                                                key: 0,
                                                                                                                width:
                                                                                                                  y
                                                                                                                    .imgSize
                                                                                                                    .width,
                                                                                                                height:
                                                                                                                  y
                                                                                                                    .imgSize
                                                                                                                    .height,
                                                                                                                src: `${y.img}`,
                                                                                                                alt: "",
                                                                                                              },
                                                                                                              null,
                                                                                                              8,
                                                                                                              [
                                                                                                                "width",
                                                                                                                "height",
                                                                                                                "src",
                                                                                                              ]
                                                                                                            ))
                                                                                                          : m(
                                                                                                              "",
                                                                                                              !0
                                                                                                            ),
                                                                                                      ]
                                                                                                    ),
                                                                                                    i(
                                                                                                      z,
                                                                                                      null,
                                                                                                      {
                                                                                                        default:
                                                                                                          l(
                                                                                                            () => [
                                                                                                              e(
                                                                                                                "span",
                                                                                                                Ge,
                                                                                                                s(
                                                                                                                  y.name
                                                                                                                ),
                                                                                                                1
                                                                                                              ),
                                                                                                            ]
                                                                                                          ),
                                                                                                        _: 2,
                                                                                                      },
                                                                                                      1024
                                                                                                    ),
                                                                                                  ]
                                                                                                ),
                                                                                              ]
                                                                                            ),
                                                                                          _: 2,
                                                                                        },
                                                                                        1032,
                                                                                        [
                                                                                          "to",
                                                                                          "external",
                                                                                        ]
                                                                                      ))
                                                                                    : (o(),
                                                                                      u(
                                                                                        U,
                                                                                        {
                                                                                          key: 1,
                                                                                          locale:
                                                                                            y.name,
                                                                                        },
                                                                                        {
                                                                                          default:
                                                                                            l(
                                                                                              () => [
                                                                                                e(
                                                                                                  "div",
                                                                                                  qe,
                                                                                                  [
                                                                                                    e(
                                                                                                      "div",
                                                                                                      null,
                                                                                                      [
                                                                                                        y.img
                                                                                                          ? (o(),
                                                                                                            u(
                                                                                                              _,
                                                                                                              {
                                                                                                                key: 0,
                                                                                                                width:
                                                                                                                  y
                                                                                                                    .imgSize
                                                                                                                    .width,
                                                                                                                height:
                                                                                                                  y
                                                                                                                    .imgSize
                                                                                                                    .height,
                                                                                                                src: `${y.img}`,
                                                                                                                alt: "",
                                                                                                              },
                                                                                                              null,
                                                                                                              8,
                                                                                                              [
                                                                                                                "width",
                                                                                                                "height",
                                                                                                                "src",
                                                                                                              ]
                                                                                                            ))
                                                                                                          : m(
                                                                                                              "",
                                                                                                              !0
                                                                                                            ),
                                                                                                      ]
                                                                                                    ),
                                                                                                    i(
                                                                                                      z,
                                                                                                      null,
                                                                                                      {
                                                                                                        default:
                                                                                                          l(
                                                                                                            () => [
                                                                                                              e(
                                                                                                                "span",
                                                                                                                Re,
                                                                                                                s(
                                                                                                                  y.name
                                                                                                                ),
                                                                                                                1
                                                                                                              ),
                                                                                                            ]
                                                                                                          ),
                                                                                                        _: 2,
                                                                                                      },
                                                                                                      1024
                                                                                                    ),
                                                                                                  ]
                                                                                                ),
                                                                                              ]
                                                                                            ),
                                                                                          _: 2,
                                                                                        },
                                                                                        1032,
                                                                                        [
                                                                                          "locale",
                                                                                        ]
                                                                                      )),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024
                                                                        )
                                                                      )
                                                                    ),
                                                                    128
                                                                  )),
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        )),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["class"]
                                                  ))
                                                : m("", !0),
                                            ]),
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
                            ]),
                            i($e),
                            e("div", null, [
                              b(g).userInfo
                                ? (o(), n("div", We, [i(te)]))
                                : (o(),
                                  n("div", Ke, [
                                    e("div", null, [
                                      i(
                                        N,
                                        {
                                          flat: "",
                                          height: "44",
                                          rounded: "lg",
                                          class:
                                            "border-solid border-[1px] my-custom-button text-none border-gray-200 w-full py-2.5 px-5",
                                          onClick:
                                            c[0] ||
                                            (c[0] = (r) => k(b(I).SIGN_IN)),
                                        },
                                        {
                                          default: l(() => [
                                            e(
                                              "span",
                                              Oe,
                                              s(h.$t("headerAndFooter.signIn")),
                                              1
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    e("div", null, [
                                      i(
                                        N,
                                        {
                                          color: "primary-600",
                                          flat: "",
                                          height: "44",
                                          rounded: "lg",
                                          class:
                                            "bg-primary-600 w-full my-custom-button text-none text-md-semibold text-white py-2.5 px-5",
                                          onClick:
                                            c[1] ||
                                            (c[1] = (r) => k(b(I).SIGN_UP)),
                                        },
                                        {
                                          default: l(() => [
                                            e(
                                              "span",
                                              Qe,
                                              s(h.$t("headerAndFooter.signUp")),
                                              1
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                  ])),
                              e("span", Xe, [
                                C.value
                                  ? (o(),
                                    u(_, {
                                      key: 1,
                                      src: "icons/close.svg",
                                      class: "w-[24px] cursor-pointer",
                                      onClick:
                                        c[3] || (c[3] = (r) => (C.value = !1)),
                                    }))
                                  : (o(),
                                    u(_, {
                                      key: 0,
                                      src: "icons/bar.svg",
                                      class: "w-[24px] cursor-pointer",
                                      onClick:
                                        c[2] || (c[2] = (r) => (C.value = !0)),
                                    })),
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
                C.value
                  ? (o(),
                    n("div", Ye, [
                      (o(!0),
                      n(
                        w,
                        null,
                        A(
                          V.value,
                          (r, F) => (
                            o(),
                            n("div", { key: F, class: "menu-item" }, [
                              e("div", Je, [
                                e(
                                  "div",
                                  {
                                    class: "flex justify-between px-3 py-3",
                                    onClick: (T) =>
                                      x.value === r.name
                                        ? (x.value = null)
                                        : (x.value = r.name),
                                  },
                                  [
                                    i(
                                      S,
                                      {
                                        to: h.localePath(
                                          r.route
                                            ? r.route
                                            : (h._.provides[pe] || h.$route)
                                                .path
                                        ),
                                        target: r.target,
                                        exact: "",
                                      },
                                      {
                                        default: l(() => [
                                          e(
                                            "span",
                                            {
                                              class:
                                                "text-gray-700 text-md-semibold",
                                              onClick: (T) =>
                                                r.children
                                                  ? (C.value = !0)
                                                  : (C.value = !1),
                                            },
                                            s(
                                              r.name === "locale"
                                                ? b(d)
                                                : h.$t(r.name)
                                            ),
                                            9,
                                            t1
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to", "target"]
                                    ),
                                    e("div", null, [
                                      r.children
                                        ? (o(),
                                          u(_, {
                                            key: 0,
                                            src: "icons/chevron_down.svg",
                                            class: "w-[24px]",
                                            alt: "",
                                          }))
                                        : m("", !0),
                                    ]),
                                  ],
                                  8,
                                  e1
                                ),
                              ]),
                              r.children
                                ? (o(),
                                  n(
                                    "div",
                                    {
                                      key: 0,
                                      class: $([
                                        "nav-dropdown",
                                        x.value === r.name ? "" : "hidden",
                                      ]),
                                    },
                                    [
                                      e("div", o1, [
                                        (o(!0),
                                        n(
                                          w,
                                          null,
                                          A(
                                            r.children,
                                            (T, y) => (
                                              o(),
                                              n(
                                                "div",
                                                {
                                                  key: y,
                                                  class: "px-5 text-left",
                                                  style: {
                                                    width: "max-content",
                                                  },
                                                },
                                                [
                                                  T.title
                                                    ? (o(),
                                                      n(
                                                        "h6",
                                                        s1,
                                                        s(T.title),
                                                        1
                                                      ))
                                                    : m("", !0),
                                                  e("div", a1, [
                                                    (o(!0),
                                                    n(
                                                      w,
                                                      null,
                                                      A(
                                                        T.children,
                                                        (f, oe) => (
                                                          o(),
                                                          n(
                                                            "div",
                                                            {
                                                              key: oe,
                                                              class: "py-3",
                                                            },
                                                            [
                                                              r.name !==
                                                              "locale"
                                                                ? (o(),
                                                                  u(
                                                                    S,
                                                                    {
                                                                      key: 0,
                                                                      to: h.localePath(
                                                                        f.route
                                                                      ),
                                                                      external:
                                                                        f.external,
                                                                      class:
                                                                        "flex gap-2 text-gry-900 text-sm-semibold",
                                                                      onClick:
                                                                        c[4] ||
                                                                        (c[4] =
                                                                          (
                                                                            ot
                                                                          ) =>
                                                                            (C.value =
                                                                              !1)),
                                                                    },
                                                                    {
                                                                      default:
                                                                        l(
                                                                          () => [
                                                                            e(
                                                                              "div",
                                                                              null,
                                                                              [
                                                                                f.img
                                                                                  ? (o(),
                                                                                    u(
                                                                                      _,
                                                                                      {
                                                                                        key: 0,
                                                                                        width:
                                                                                          f
                                                                                            .imgSize
                                                                                            .width,
                                                                                        height:
                                                                                          f
                                                                                            .imgSize
                                                                                            .height,
                                                                                        src: `${f.img}`,
                                                                                        alt: "",
                                                                                      },
                                                                                      null,
                                                                                      8,
                                                                                      [
                                                                                        "width",
                                                                                        "height",
                                                                                        "src",
                                                                                      ]
                                                                                    ))
                                                                                  : m(
                                                                                      "",
                                                                                      !0
                                                                                    ),
                                                                              ]
                                                                            ),
                                                                            p(
                                                                              " " +
                                                                                s(
                                                                                  h.$t(
                                                                                    f.name
                                                                                  )
                                                                                ) +
                                                                                " ",
                                                                              1
                                                                            ),
                                                                            e(
                                                                              "div",
                                                                              null,
                                                                              [
                                                                                f.isNew
                                                                                  ? (o(),
                                                                                    n(
                                                                                      "span",
                                                                                      l1,
                                                                                      s(
                                                                                        h.$t(
                                                                                          "New"
                                                                                        )
                                                                                      ),
                                                                                      1
                                                                                    ))
                                                                                  : m(
                                                                                      "",
                                                                                      !0
                                                                                    ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    [
                                                                      "to",
                                                                      "external",
                                                                    ]
                                                                  ))
                                                                : (o(),
                                                                  u(
                                                                    U,
                                                                    {
                                                                      key: 1,
                                                                      locale:
                                                                        f.name,
                                                                    },
                                                                    {
                                                                      default:
                                                                        l(
                                                                          () => [
                                                                            e(
                                                                              "div",
                                                                              i1,
                                                                              [
                                                                                e(
                                                                                  "div",
                                                                                  null,
                                                                                  [
                                                                                    f.img
                                                                                      ? (o(),
                                                                                        u(
                                                                                          _,
                                                                                          {
                                                                                            key: 0,
                                                                                            width:
                                                                                              f
                                                                                                .imgSize
                                                                                                .width,
                                                                                            height:
                                                                                              f
                                                                                                .imgSize
                                                                                                .height,
                                                                                            src: `${f.img}`,
                                                                                            alt: "",
                                                                                          },
                                                                                          null,
                                                                                          8,
                                                                                          [
                                                                                            "width",
                                                                                            "height",
                                                                                            "src",
                                                                                          ]
                                                                                        ))
                                                                                      : m(
                                                                                          "",
                                                                                          !0
                                                                                        ),
                                                                                  ]
                                                                                ),
                                                                                i(
                                                                                  z,
                                                                                  null,
                                                                                  {
                                                                                    default:
                                                                                      l(
                                                                                        () => [
                                                                                          e(
                                                                                            "span",
                                                                                            r1,
                                                                                            s(
                                                                                              f.name
                                                                                            ),
                                                                                            1
                                                                                          ),
                                                                                        ]
                                                                                      ),
                                                                                    _: 2,
                                                                                  },
                                                                                  1024
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1032,
                                                                    ["locale"]
                                                                  )),
                                                            ]
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ]),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                    ],
                                    2
                                  ))
                                : m("", !0),
                            ])
                          )
                        ),
                        128
                      )),
                      b(g).userInfo
                        ? (o(),
                          n("div", n1, [
                            e("div", d1, [
                              e(
                                "div",
                                {
                                  class: "flex !w-full justify-between",
                                  onClick:
                                    c[5] ||
                                    (c[5] = (r) =>
                                      x.value === "profile"
                                        ? (x.value = null)
                                        : (x.value = "profile")),
                                },
                                [
                                  e(
                                    "div",
                                    c1,
                                    s(
                                      (j =
                                        (B = b(g)) == null
                                          ? void 0
                                          : B.userInfo) == null
                                        ? void 0
                                        : j.email
                                    ),
                                    1
                                  ),
                                  e("div", null, [
                                    i(_, {
                                      class: "w-[24px]",
                                      src: "icons/chevron_down.svg",
                                      alt: "",
                                    }),
                                  ]),
                                ]
                              ),
                              e(
                                "div",
                                {
                                  class: $([
                                    x.value === "profile" ? "!block" : "hidden",
                                    "left-0 z-50 ml-4 submenu-container",
                                  ]),
                                },
                                [
                                  e("div", h1, [
                                    (o(!0),
                                    n(
                                      w,
                                      null,
                                      A(
                                        P.value,
                                        (r, F) => (
                                          o(),
                                          u(
                                            S,
                                            {
                                              key: F,
                                              class:
                                                "text-gry-900 text-sm-semibold",
                                              to: h.localePath(r.link),
                                              onClick: (T) => H(r.text),
                                            },
                                            {
                                              default: l(() => [
                                                e("div", u1, [
                                                  e(
                                                    "div",
                                                    null,
                                                    s(h.$t(`auth.${r.text}`)),
                                                    1
                                                  ),
                                                  r.icon
                                                    ? (o(),
                                                      u(
                                                        W,
                                                        { key: 0 },
                                                        {
                                                          default: l(() => [
                                                            p(s(r.icon), 1),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ))
                                                    : m("", !0),
                                                ]),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to", "onClick"]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ],
                                2
                              ),
                            ]),
                          ]))
                        : (o(),
                          n("div", p1, [
                            e(
                              "button",
                              {
                                class:
                                  "bg-primary-600 w-full text-md-semibold text-white py-2.5 px-5 rounded-lg",
                                onClick:
                                  c[6] || (c[6] = (r) => k(b(I).SIGN_UP)),
                              },
                              s(h.$t("headerAndFooter.signUp")),
                              1
                            ),
                            e(
                              "button",
                              {
                                class:
                                  "bg-white border-solid border-[1px] border-gray-200 w-full text-md-semibold py-2.5 px-5 rounded-lg",
                                onClick:
                                  c[7] || (c[7] = (r) => k(b(I).SIGN_IN)),
                              },
                              s(h.$t("headerAndFooter.signIn")),
                              1
                            ),
                          ])),
                    ]))
                  : m("", !0),
              ]),
            ]),
          ])
        );
      };
    },
  },
  g1 = { class: "flex gap-6" },
  f1 = {
    target: "_blank",
    href: "https://x.com/jolixo_hi?t=ZkEbmn4GIisjp0pDr8NhFw&s=09",
  },
  v1 = {
    target: "_blank",
    href: "https://www.youtube.com/@CoinCannon_support7420",
  },
  x1 = {
    target: "_blank",
    href: "https://www.instagram.com/jolixo.official/",
  },
  y1 = { target: "_blank", href: "https://t.me/coincannon_ex " },
  C1 = {
    target: "_blank",
    href: "https://www.trustpilot.com/review/hi.exchange",
  },
  _1 = {
    target: "_blank",
    href: "https://www.okchanger.com/exchangers/CoinCannon",
  },
  b1 = {
    target: "_blank",
    href: "https://www.bestchange.com/jolixo-exchanger.html",
  },
  w1 = {
    __name: "index",
    props: {
      color: {
        type: String,
        default: "fill-gray-400 transition-all hover:fill-gray-600",
      },
    },
    setup(t) {
      return (v, d) => (
        o(),
        n("div", g1, [

          e("a", y1, [
            (o(),
            n(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: $(t.color),
              },
              d[3] ||
                (d[3] = [
                  e(
                    "g",
                    { "clip-path": "url(#clip0_1372_1431)" },
                    [
                      e("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57348 13.2411C5.65819 13.2678 5.74596 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6857 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z",
                      }),
                    ],
                    -1
                  ),
                  e(
                    "defs",
                    null,
                    [
                      e("clipPath", { id: "clip0_1372_1431" }, [
                        e("rect", { width: "24", height: "24", fill: "white" }),
                      ]),
                    ],
                    -1
                  ),
                ]),
              2
            )),
          ]),

        ])
      );
    },
  },
  $1 = {},
  k1 = { class: "!bg-gray-50 mx-auto w-full px-8 md:!px-16 py-16" },
  A1 = {
    class:
      "mx-auto text-left md:!text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:flex gap-8 pb-10 border-solid border-b-[1px] border-gray-200",
  },
  L1 = { class: "w-full mx-auto" },
  F1 = { class: "mt-6 text-gray-600 text-md-regular md:text-md-medium" },
  P1 = { class: "w-full text-left md:!text-left hidden" },
  T1 = { class: "text-gray-500 text-sm-semibold" },
  S1 = { class: "flex flex-col gap-3 mt-4" },
  H1 = { class: "w-full text-left md:!text-left hidden" },
  V1 = { class: "text-gray-500 text-sm-semibold" },
  I1 = { class: "flex flex-col gap-3 mt-4" },
  M1 = {
    class:
      "flex flex-row justify-between w-full gap-6 md:flex-row lg:justify-around md:gap-16",
  },
  z1 = { class: "text-left md:!text-left hidden" },
  Z1 = { class: "text-gray-500 text-sm-semibold" },
  E1 = { class: "flex flex-col gap-3 mt-4" },
  N1 = {
    target: "_blank",
    href: "/blog",
    class: "text-gray-600 text-md-semibold hidden",
  },
  D1 = { class: "text-left md:!text-left hidden" },
  U1 = { class: "text-gray-500 text-sm-semibold" },
  B1 = { class: "flex flex-col gap-3 mt-4" },
  j1 = { class: "text-left md:!text-left hidden " },
  G1 = { class: "mt-8 text-gray-500 text-md-semibold" },
  q1 = {
    class:
      "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
  },
  R1 = {
    target: "_blank",
    href: "/blog/exchange-ethereum-to-paypal",
    class: "text-gray-600 text-md-semibold",
  },
  W1 = {
    target: "_blank",
    href: "/blog/buy-bitcoin-with-perfect-money/",
    class: "text-gray-600 text-md-semibold",
  },
  K1 = {
    target: "_blank",
    href: "/blog/how-exchange-tether-to-paypal/",
    class: "text-gray-600 text-md-semibold",
  },
  O1 = {
    target: "_blank",
    href: "/blog/how-exchange-dash-to-paypal/",
    class: "text-gray-600 text-md-semibold",
  },
  Q1 = {
    class:
      "flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0",
  },
  X1 = { class: "text-gray-500 text-md-regular" };
function Y1(t, v) {
  const d = D,
    a = Z,
    g = Z,
    L = w1;
  return (
    o(),
    n("div", k1, [
      e("div", A1, [
        e("div", L1, [
          i(d, {
            src: "logos/jolixo-logo.svg",
            class: "w-[120px]",
            alt: "",
          }),
          e("p", F1, s(t.$t("headerAndFooter.description")), 1),
        ]),
        e("div", P1, [
          e("h5", T1, s(t.$t("headerAndFooter.services.title")), 1),
          e("div", S1, [
            i(
              a,
              {
                class: "text-gray-600 text-md-semibold",
                to: t.localePath("/services/perfectmoney-to-paypal-exchange"),
              },
              {
                default: l(() => [
                  p(
                    s(t.$t("headerAndFooter.services.ecToEc.perfectToPaypal")),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              a,
              {
                class: "text-gray-600 text-md-semibold",
                to: t.localePath("/services/webmoney-to-paypal-exchange"),
              },
              {
                default: l(() => [
                  p(
                    s(t.$t("headerAndFooter.services.ecToEc.webmoneyToPaypal")),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              a,
              {
                class: "text-gray-600 text-md-semibold",
                to: t.localePath("/services/payeer-to-paypal-exchange"),
              },
              {
                default: l(() => [
                  p(
                    s(t.$t("headerAndFooter.services.ecToEc.payeerToPaypal")),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              a,
              {
                class: "text-gray-600 text-md-semibold",
                to: t.localePath("/services/advcash-to-paypal-exchange"),
              },
              {
                default: l(() => [
                  p(
                    s(t.$t("headerAndFooter.services.ecToEc.advcashToPaypal")),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              a,
              {
                class: "text-gray-600 text-md-semibold",
                to: t.localePath("/services/bitcoin-to-paypal-exchange"),
              },
              {
                default: l(() => [
                  p(
                    s(
                      t.$t(
                        "headerAndFooter.services.cryptoToEc.bitcoinToPaypal"
                      )
                    ),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              a,
              {
                class: "text-gray-600 text-md-semibold",
                to: t.localePath("/services/tether-to-paypal-exchange"),
              },
              {
                default: l(() => [
                  p(
                    s(
                      t.$t("headerAndFooter.services.cryptoToEc.tetherToPaypal")
                    ),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              a,
              {
                class: "text-gray-600 text-md-semibold",
                to: t.localePath("/services/exchange-usdt-trx"),
              },
              {
                default: l(() => [
                  p(
                    s(
                      t.$t("headerAndFooter.services.cryptoToCrypto.usdtToTrx")
                    ),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
          ]),
        ]),
        e("div", H1, [
          e("h5", V1, s(t.$t("headerAndFooter.solutions.title")), 1),
          e("div", I1, [
            i(
              g,
              {
                to: t.localePath("/solutions/HiWallet"),
                class: "text-gray-600 text-md-semibold",
              },
              {
                default: l(() => [
                  p(s(t.$t("headerAndFooter.solutions.hiWallet")), 1),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              g,
              {
                to: t.localePath("/solutions/online-payment-for-business"),
                class: "text-gray-600 text-md-semibold",
              },
              {
                default: l(() => [
                  p(s(t.$t("headerAndFooter.solutions.paypalPayment")), 1),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              g,
              {
                to: t.localePath("/solutions/online-payment"),
                class: "text-gray-600 text-md-semibold",
              },
              {
                default: l(() => [
                  p(s(t.$t("headerAndFooter.solutions.paymentGate")), 1),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              g,
              {
                to: t.localePath("/solutions/exchange-paypal"),
                class: "text-gray-600 text-md-semibold",
              },
              {
                default: l(() => [
                  p(s(t.$t("headerAndFooter.solutions.exchangePaypal")), 1),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
            i(
              g,
              {
                to: t.localePath("/solutions/buy-sell-perfectmoney-voucher"),
                class: "text-gray-600 text-md-semibold",
              },
              {
                default: l(() => [
                  p(
                    s(t.$t("headerAndFooter.solutions.PerfectMoneyEVoucher")),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            ),
          ]),
        ]),
        e("div", M1, [
          e("div", z1, [
            e("h5", Z1, s(t.$t("headerAndFooter.company.title")), 1),
            e("div", E1, [
              i(
                g,
                {
                  to: t.localePath("/contact-us"),
                  class: "text-gray-600 text-md-semibold",
                },
                {
                  default: l(() => [
                    p(s(t.$t("headerAndFooter.aboutUs.contact")), 1),
                  ]),
                  _: 1,
                },
                8,
                ["to"]
              ),
              e("a", N1, s(t.$t("headerAndFooter.company.blog")), 1),
              i(
                g,
                {
                  to: t.localePath("/faq"),
                  class: "text-gray-600 text-md-semibold",
                },
                {
                  default: l(() => [
                    p(s(t.$t("headerAndFooter.company.faq")), 1),
                  ]),
                  _: 1,
                },
                8,
                ["to"]
              ),
            ]),
          ]),
          e("div", D1, [
            e("h5", U1, s(t.$t("headerAndFooter.legal.title")), 1),
            e("div", B1, [
              i(
                g,
                {
                  to: t.localePath("/terms-of-services"),
                  class: "text-gray-600 text-md-semibold",
                },
                {
                  default: l(() => [
                    p(s(t.$t("headerAndFooter.legal.terms")), 1),
                  ]),
                  _: 1,
                },
                8,
                ["to"]
              ),
              i(
                g,
                {
                  to: t.localePath("/privacy-policy"),
                  class: "text-gray-600 text-md-semibold",
                },
                {
                  default: l(() => [
                    p(s(t.$t("headerAndFooter.legal.privacy")), 1),
                  ]),
                  _: 1,
                },
                8,
                ["to"]
              ),
            ]),
          ]),
        ]),
      ]),
      e("div", j1, [
        e("h5", G1, s(t.$t("headerAndFooter.guides.title")), 1),
        e("div", q1, [
          e("a", R1, s(t.$t("headerAndFooter.guides.ethereumToPaypal")), 1),
          e("a", W1, s(t.$t("headerAndFooter.guides.bitcoinToPaypal")), 1),
          e("a", K1, s(t.$t("headerAndFooter.guides.tetherToPaypal")), 1),
          e("a", O1, s(t.$t("headerAndFooter.guides.dashToPaypal")), 1),
        ]),
      ]),
      v[0] || (v[0] = e("hr", { class: "mt-10 mb-8" }, null, -1)),
      e("div", Q1, [
        e(
          "div",
          X1,
          " © " +
            s(new Date().getFullYear()) +
            " " +
            s(t.$t("headerAndFooter.copyright")),
          1
        ),
        i(L),
      ]),
    ])
  );
}
const J1 = we($1, [["render", Y1]]),
  et = { class: "layout-container" },
  tt = { class: "main-content" },
  St = {
    __name: "default",
    setup(t) {
      const v = M(null);
      return (
        ge("dialog", {
          open: (L, C, x, P) => {
            v.value.openDialog(L, C, x, P);
          },
          close: () => {
            v.value.closeDialog();
          },
        }),
        (L, C) => {
          const x = m1,
            P = J1;
          return (
            o(),
            n(
              w,
              null,
              [
                e("div", et, [
                  i(x),
                  e("main", tt, [fe(L.$slots, "default")]),
                  i(P, { class: "mt-16" }),
                ]),
                i(be, { ref_key: "globalDialog", ref: v }, null, 512),
              ],
              64
            )
          );
        }
      );
    },
  };
export { St as default };
