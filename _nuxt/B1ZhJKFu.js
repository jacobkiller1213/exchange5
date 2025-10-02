import { V as q, _ as R } from "./D_iu627J.js";
import { _ as j } from "./bNepudp1.js";
import { _ as H } from "./CaRhLduF.js";
import { _ as L } from "./BNSvKMyq.js";
import {
  r as n,
  a as _,
  c as u,
  b as e,
  F as E,
  e as S,
  n as O,
  t as s,
  Q as D,
  g as Y,
  i as z,
  l as G,
  aY as V,
  f as a,
  u as I,
  w as v,
  p as h,
  v as Q,
  aZ as Z,
} from "./Sm2mCfDE.js";
import { _ as J } from "./Che7Khx7.js";
import { _ as K } from "./5Gdnd9i8.js";
import { c as M, a as W } from "./3k4VnFXt.js";
import { _ as X } from "./DlAUqK2U.js";
import { V as ee } from "./ZfNZiyCm.js";
import "./C10dbX3k.js";
import "./xUo5sKGi.js";
import "./B8TxTyak.js";
import "./C2Qfbq92.js";
import "./CI8VFsgH.js";
import "./1WQF9nlZ.js";
import "./CMuUTlS2.js";
import "./CAlkWbu_.js";
import "./ChErJn07.js";
import "./B_2FkP8S.js";
import "./C1DtZnIy.js";
const te = {
    class: "mx-auto px-1 tab-switcher bg-primary-25 rounded-md h-[48px] w-fit",
  },
  se = { class: "flex items-center h-full py-1" },
  ae = ["onClick"],
  le = {
    __name: "Tabs",
    props: { tabItems: { type: Object, default: () => {} } },
    setup(x) {
      const o = n(0),
        p = (d) => {
          o.value = d.id;
        };
      return (d, y) => (
        _(),
        u("div", null, [
          e("div", te, [
            e("div", se, [
              (_(!0),
              u(
                E,
                null,
                S(
                  x.tabItems,
                  (i, r) => (
                    _(),
                    u(
                      "div",
                      {
                        key: r,
                        class: O([
                          [o.value === i.id && "bg-primary-700"],
                          "cursor-pointer bg-primary-25 h-full flex rounded-md text-xs-regular sm:text-sm-regular md:text-md-medium items-center px-4",
                        ]),
                        onClick: (g) => p(i),
                      },
                      s(i.title),
                      11,
                      ae
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
          (_(!0),
          u(
            E,
            null,
            S(
              x.tabItems,
              (i, r) => (
                _(),
                u("div", { key: r, class: "mt-6" }, [
                  o.value === i.id ? D(d.$slots, r, { key: 0 }) : Y("", !0),
                ])
              )
            ),
            128
          )),
        ])
      );
    },
  },
  oe = { class: "container mx-auto" },
  ie = {
    class: "flex-col items-center justify-between p-4 d-flex lg:flex-row",
  },
  re = { class: "lg:order-2" },
  me = { class: "w-full lg:order-1 lg:w-3/5" },
  ne = {
    class: "display-sm-bold max-w-[650px] md:display-lg-bold text-gray-900",
  },
  de = {
    class:
      "text-gray-800 max-w-[500px] text-sm-regular lg:text-md-regular mt-6",
  },
  pe = { class: "mt-10" },
  ce = { class: "text-gray-800 text-sm-medium" },
  _e = { class: "mt-3 max-w-[400px]" },
  ue = {
    class: "w-full p-4 mt-12 bg-primary-700 lg:my-32 md:rounded-2xl lg:p-20",
  },
  ve = {
    class: "flex-col items-center justify-between d-flex gap-14 lg:flex-row",
  },
  ye = { class: "max-w-[400px]" },
  he = { class: "max-w-[520px]" },
  xe = { class: "text-primary-25 display-sm-bold lg:display-md-bold" },
  ge = { class: "mt-6 text-primary-25 text-md-medium" },
  be = { class: "text-md-medium" },
  fe = { class: "flex flex-col mt-12 commentsSlides" },
  we = { class: "text-center display-md-bold" },
  $e = { class: "flex flex-col gap-4 mx-auto mt-6 md:flex-row" },
  ke = {
    href: "https://www.bestchange.com/jolixo-exchanger.html",
    target: "_blank",
  },
  Be = {
    href: "https://www.trustpilot.com/review/hi.exchange",
    target: "_blank",
  },
  Ce = { class: "relative flex flex-col gap-4 mt-8 reviews-items" },
  qe = { class: "container px-4 mx-auto lg:my-32" },
  Ee = { class: "mt-12 md:text-center" },
  Se = { class: "text-gray-900 display-sm-bold lg:display-md-bold" },
  Ve = {
    class: "flex max-w-[1000px] overflow-auto pb-2 mt-8 gap-6 md:gap-8 mx-auto",
  },
  Ie = {
    class:
      "min-w-[224px] w-full rounded-xl px-4 cursor-pointer md:!px-8 mx-auto transition-all bg-primary-50 hover:!bg-primary-100 !py-4 lg:!py-10",
  },
  Te = { class: "mt-4 text-sm-bold md:text-xl-bold" },
  Fe = { class: "pb-4 mt-1 text-xs-regular md:text-md-regular" },
  Ne = {
    class:
      "min-w-[224px] w-full rounded-xl px-4 cursor-pointer md:!px-8 mx-auto transition-all bg-primary-50 hover:!bg-primary-100 !py-4 lg:!py-10",
  },
  Pe = { class: "mt-4 text-sm-bold md:text-xl-bold" },
  Ue = { class: "pb-4 mt-1 text-xs-regular md:text-md-regular" },
  Ae = {
    class:
      "min-w-[224px] w-full rounded-xl px-4 cursor-pointer md:!px-8 mx-auto transition-all bg-primary-50 hover:!bg-primary-100 !py-4 lg:!py-10",
  },
  Re = { class: "mt-4 text-sm-bold md:text-xl-bold" },
  je = { class: "pb-4 mt-1 text-xs-regular md:text-md-regular" },
  He = { class: "container px-4 mx-auto lg:my-32" },
  Le = { class: "mt-12 md:text-center" },
  Oe = { class: "text-gray-900 display-sm-bold lg:display-md-bold" },
  De = { class: "mt-4 text-md-medium" },
  Ye = { class: "grid grid-cols-1 gap-4 seamlessBoxes md:grid-cols-2" },
  ze = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  Ge = { class: "text-sm-semibold md:display-xs-bold" },
  Qe = { class: "mt-1 text-sm-regular md:text-md-medium" },
  Ze = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  Je = { class: "text-sm-semibold md:display-xs-bold" },
  Ke = { class: "mt-1 text-sm-regular md:text-md-medium" },
  Me = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  We = { class: "text-sm-semibold md:display-xs-bold" },
  Xe = { class: "mt-1 text-sm-regular md:text-md-medium" },
  et = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  tt = { class: "text-sm-semibold md:display-xs-bold" },
  st = { class: "mt-1 text-sm-regular md:text-md-medium" },
  at = { class: "grid grid-cols-1 gap-4 seamlessBoxes md:grid-cols-2" },
  lt = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  ot = { class: "text-sm-semibold md:display-xs-bold" },
  it = { class: "mt-1 text-sm-regular md:text-md-medium" },
  rt = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  mt = { class: "text-sm-semibold md:display-xs-bold" },
  nt = { class: "mt-1 text-sm-regular md:text-md-medium" },
  dt = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  pt = { class: "text-sm-semibold md:display-xs-bold" },
  ct = { class: "mt-1 text-sm-regular md:text-md-medium" },
  _t = {
    class:
      "w-full bg-gray-200 hover:!bg-gray-300 transition-all cursor-pointer p-6 md:p-8 rounded-2xl",
  },
  ut = { class: "text-sm-semibold md:display-xs-bold" },
  vt = { class: "mt-1 text-sm-regular md:text-md-medium" },
  yt = { class: "container w-full md:w-[70%] mx-auto px-4 lg:my-32" },
  ht = { class: "mt-12 text-center" },
  xt = { class: "text-gray-900 display-sm-bold lg:display-md-bold" },
  gt = { class: "mt-4 text-md-medium" },
  bt = { class: "mt-4" },
  ft = { class: "mt-4" },
  wt = { class: "mt-8 mb-4 text-center text-sm-regular" },
  $t = { class: "mx-auto text-center" },
  kt = { class: "mx-1" },
  Bt = { class: "mt-12 lg:my-32" },
  Ct = { class: "mt-12 bg-gray-100 lg:my-32" },
  qt = {
    class:
      "container flex flex-col items-center justify-between gap-6 px-4 mx-auto py-15 md:flex-row",
  },
  Et = { class: "w-full md:w-2/4" },
  St = { class: "text-gray-900 text-md-bold md:display-sm-bold" },
  Vt = {
    class: "mt-2 text-gray-700 text-sm-regular md:text-md-regular md:mt-4",
  },
  It = { class: "w-full md:w-1/3" },
  Tt = { class: "text-gray-800 text-sm-medium" },
  Ft = { class: "mt-3" },
  Nt = {
    __name: "exchange-paypal",
    setup(x) {
      const o = n(null),
        p = n(!1),
        d = n(null),
        y = n(null),
        i = n(!0),
        { t: r, tm: g } = z(),
        T = n(g("receive_paypal.faq.transferFromAccount.questions")),
        F = n(g("receive_paypal.faq.freelancer.questions")),
        N = () => {
          window.$crisp.push(["do", "chat:open"]);
        };
      G({
        title: "CoinCannon | " + r("receive_paypal.meta.title"),
        meta: [
          {
            name: "title",
            content: "CoinCannon | " + r("receive_paypal.meta.title"),
          },
          {
            name: "description",
            content: r("receive_paypal.meta.description"),
          },
        ],
      });
      const b = [
          { id: 0, title: r("receive_paypal.seamless.tab.freelancer.title") },
          {
            id: 1,
            title: r("receive_paypal.seamless.tab.personal_paypal.title"),
          },
        ],
        f = async () => {
          try {
            const { data: t } = await Q(Z, {
              method: "POST",
              body: { email: o.value },
            });
            (o.value = null),
              (p.value = !0),
              (d.value = t._value.message),
              (y.value = q.SUCCESS);
          } catch ({}) {
            (p.value = !0),
              (d.value = "The given data is invalid"),
              (y.value = q.ERROR);
          }
        };
      return (t, l) => {
        const P = R,
          c = j,
          w = H,
          U = V("CommonsButton"),
          $ = V("commonsButton"),
          k = L,
          B = le,
          C = J,
          A = K;
        return (
          _(),
          u("div", null, [
            a(
              P,
              {
                error: p.value,
                "onUpdate:error": l[0] || (l[0] = (m) => (p.value = m)),
                mode: y.value,
                "message-text": d.value,
              },
              null,
              8,
              ["error", "mode", "message-text"]
            ),
            e("div", oe, [
              e("div", ie, [
                e("div", re, [
                  a(c, {
                    class: "img-fulid mx-auto w-[260px] md:w-[400px]",
                    src: "services/receive-paypal/receive-intro.png",
                    alt: "",
                  }),
                ]),
                e("div", me, [
                  e("h1", ne, s(t.$t("receive_paypal.hero.title")), 1),
                  e("p", de, s(t.$t("receive_paypal.hero.subtitle")), 1),
                  e("div", pe, [
                    e("p", ce, s(t.$t("receive_paypal.hero.quote")), 1),
                    e("div", _e, [
                      a(
                        w,
                        {
                          value: o.value,
                          "onUpdate:value":
                            l[1] || (l[1] = (m) => (o.value = m)),
                          "has-error": i.value,
                          "onUpdate:hasError":
                            l[2] || (l[2] = (m) => (i.value = m)),
                          validation: "email",
                          class: "w-full",
                          placeholder: t.$t(
                            "receive_paypal.hero.emailPlaceholder"
                          ),
                          "btn-label": t.$t("receive_paypal.hero.submit"),
                          classes: "bg-primary-600",
                          "has-button": "",
                          onBtnClicked: f,
                        },
                        null,
                        8,
                        ["value", "has-error", "placeholder", "btn-label"]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              e("div", ue, [
                e("div", ve, [
                  e("div", ye, [
                    a(c, {
                      class: "mx-auto w-[200px] md:w-[300px]",
                      src: "services/receive-paypal/benefit.png",
                      alt: "",
                    }),
                  ]),
                  e("div", he, [
                    e("h2", xe, s(t.$t("receive_paypal.benefit.title")), 1),
                    e(
                      "p",
                      ge,
                      s(t.$t("receive_paypal.benefit.description")),
                      1
                    ),
                    e("ul", be, [
                      e(
                        "ol",
                        null,
                        s(t.$t("receive_paypal.benefit.items[0]")),
                        1
                      ),
                      e(
                        "ol",
                        null,
                        s(t.$t("receive_paypal.benefit.items[1]")),
                        1
                      ),
                      e(
                        "ol",
                        null,
                        s(t.$t("receive_paypal.benefit.items[2]")),
                        1
                      ),
                    ]),
                    a(
                      U,
                      {
                        class:
                          "w-full mt-6 lg:mt-14 text-sm-regular lg:text-md-semibold md:w-auto",
                        type: "primary-elevated",
                        name: t.$t("receive_paypal.benefit.cta"),
                      },
                      null,
                      8,
                      ["name"]
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", fe, [
              e("h2", we, s(t.$t("receive_paypal.reviews.title")), 1),
              e("div", $e, [
                e("a", ke, [
                  a(
                    $,
                    {
                      class: "w-full",
                      type: "default-outline",
                      name: t.$t("receive_paypal.reviews.bestchange"),
                    },
                    null,
                    8,
                    ["name"]
                  ),
                ]),
                e("a", Be, [
                  a(
                    $,
                    {
                      class: "w-full",
                      type: "default-outline",
                      name: t.$t("receive_paypal.reviews.trustpilot"),
                    },
                    null,
                    8,
                    ["name"]
                  ),
                ]),
              ]),
              e("div", Ce, [
                e("div", null, [
                  a(k, { "left-to-right": !0, list: I(M) }, null, 8, ["list"]),
                ]),
                e("div", null, [
                  a(k, { "left-to-right": !1, list: I(W) }, null, 8, ["list"]),
                ]),
              ]),
            ]),
            e("div", qe, [
              e("div", Ee, [
                e("h2", Se, s(t.$t("receive_paypal.makeBetter.title")), 1),
              ]),
              e("div", Ve, [
                e("div", Ie, [
                  a(c, {
                    class: "mx-auto text-center w-[128px] h-[128px]",
                    src: "services/receive-paypal/anonymity.png",
                    alt: "",
                  }),
                  e(
                    "h5",
                    Te,
                    s(t.$t("receive_paypal.makeBetter.items[0].title")),
                    1
                  ),
                  e(
                    "p",
                    Fe,
                    s(t.$t("receive_paypal.makeBetter.items[0].description")),
                    1
                  ),
                ]),
                e("div", Ne, [
                  a(c, {
                    class: "mx-auto text-center w-[128px] h-[128px]",
                    src: "services/receive-paypal/fees.png",
                    alt: "",
                  }),
                  e(
                    "h5",
                    Pe,
                    s(t.$t("receive_paypal.makeBetter.items[1].title")),
                    1
                  ),
                  e(
                    "p",
                    Ue,
                    s(t.$t("receive_paypal.makeBetter.items[1].description")),
                    1
                  ),
                ]),
                e("div", Ae, [
                  a(c, {
                    class: "mx-auto text-center w-[128px] h-[128px]",
                    src: "services/receive-paypal/freedom.png",
                    alt: "",
                  }),
                  e(
                    "h5",
                    Re,
                    s(t.$t("receive_paypal.makeBetter.items[2].title")),
                    1
                  ),
                  e(
                    "p",
                    je,
                    s(t.$t("receive_paypal.makeBetter.items[2].description")),
                    1
                  ),
                ]),
              ]),
            ]),
            e("div", He, [
              e("div", Le, [
                e("h2", Oe, s(t.$t("receive_paypal.seamless.title")), 1),
                e("p", De, s(t.$t("receive_paypal.seamless.subtitle")), 1),
              ]),
              a(
                B,
                { "tab-items": b, class: "mx-auto mt-8" },
                {
                  0: v(() => [
                    e("div", Ye, [
                      e("div", ze, [
                        e(
                          "h4",
                          Ge,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[0].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          Qe,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[0].description"
                            )
                          ),
                          1
                        ),
                      ]),
                      e("div", Ze, [
                        e(
                          "h4",
                          Je,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[1].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          Ke,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[1].description"
                            )
                          ),
                          1
                        ),
                      ]),
                      e("div", Me, [
                        e(
                          "h4",
                          We,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[2].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          Xe,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[2].description"
                            )
                          ),
                          1
                        ),
                      ]),
                      e("div", et, [
                        e(
                          "h4",
                          tt,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[3].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          st,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.freelancer.items[3].description"
                            )
                          ),
                          1
                        ),
                      ]),
                    ]),
                  ]),
                  1: v(() => [
                    e("div", at, [
                      e("div", lt, [
                        e(
                          "h4",
                          ot,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[0].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          it,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[0].description"
                            )
                          ),
                          1
                        ),
                      ]),
                      e("div", rt, [
                        e(
                          "h4",
                          mt,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[1].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          nt,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[1].description"
                            )
                          ),
                          1
                        ),
                      ]),
                      e("div", dt, [
                        e(
                          "h4",
                          pt,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[2].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          ct,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[2].description"
                            )
                          ),
                          1
                        ),
                      ]),
                      e("div", _t, [
                        e(
                          "h4",
                          ut,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[3].title"
                            )
                          ),
                          1
                        ),
                        e(
                          "p",
                          vt,
                          s(
                            t.$t(
                              "receive_paypal.seamless.tab.personal_paypal.items[3].description"
                            )
                          ),
                          1
                        ),
                      ]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ]),
            e("div", yt, [
              e("div", ht, [
                e("h2", xt, s(t.$t("receive_paypal.faq.title")), 1),
                e("p", gt, s(t.$t("receive_paypal.faq.description")), 1),
              ]),
              a(
                B,
                { "tab-items": b, class: "mx-auto mt-8" },
                {
                  0: v(() => [
                    e("div", bt, [
                      a(C, { items: F.value }, null, 8, ["items"]),
                    ]),
                  ]),
                  1: v(() => [
                    e("div", ft, [
                      a(C, { items: T.value }, null, 8, ["items"]),
                    ]),
                  ]),
                  _: 1,
                }
              ),
              e("p", wt, [
                h(s(t.$t("receive_paypal.faq.subtitle[0]")) + " ", 1),
                l[5] || (l[5] = e("br", null, null, -1)),
                h(" " + s(t.$t("receive_paypal.faq.subtitle[1]")), 1),
              ]),
              e("div", $t, [
                a(
                  ee,
                  {
                    class:
                      "mx-auto mt-5 lg:mt-14 text-sm-regular bg-primary-600 lg:text-md-semibold",
                    onClick: N,
                  },
                  {
                    default: v(() => [
                      e("div", null, [
                        a(c, {
                          src: "icons/headset_mic.svg",
                          class: "w-[24px]",
                          alt: "",
                        }),
                      ]),
                      e("span", kt, s(t.$t("receive_paypal.faq.button")), 1),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
            e("div", Bt, [a(A)]),
            e("div", Ct, [
              e("div", qt, [
                e("div", Et, [
                  e("h5", St, [
                    h(s(t.$t("receive_paypal.requestExchange.title[0]")), 1),
                    l[6] || (l[6] = e("br", null, null, -1)),
                    h(
                      " " + s(t.$t("receive_paypal.requestExchange.title[1]")),
                      1
                    ),
                  ]),
                  e(
                    "p",
                    Vt,
                    s(t.$t("receive_paypal.requestExchange.description")),
                    1
                  ),
                ]),
                e("div", It, [
                  e("p", Tt, s(t.$t("receive_paypal.hero.quote")), 1),
                  e("div", Ft, [
                    a(
                      w,
                      {
                        value: o.value,
                        "onUpdate:value": l[3] || (l[3] = (m) => (o.value = m)),
                        "has-error": i.value,
                        "onUpdate:hasError":
                          l[4] || (l[4] = (m) => (i.value = m)),
                        validation: "email",
                        class: "w-full",
                        placeholder: t.$t(
                          "receive_paypal.hero.emailPlaceholder"
                        ),
                        "btn-label": t.$t("receive_paypal.hero.submit"),
                        classes: "bg-primary-600",
                        "has-button": "",
                        onBtnClicked: f,
                      },
                      null,
                      8,
                      ["value", "has-error", "placeholder", "btn-label"]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  },
  ss = X(Nt, [["__scopeId", "data-v-77a1882a"]]);
export { ss as default };
