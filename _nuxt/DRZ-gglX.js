import { _ as A } from "./bNepudp1.js";
import { _ as D } from "./D_iu627J.js";
import {
  i as F,
  d as T,
  A as O,
  Y as E,
  r as o,
  o as q,
  v as B,
  aX as C,
  c as G,
  b as t,
  f as m,
  t as l,
  w as h,
  u as n,
  m as I,
  F as N,
  a as P,
} from "./Sm2mCfDE.js";
import { u as S } from "./D5jKaxoB.js";
import { V as y } from "./ZfNZiyCm.js";
import "./CAlkWbu_.js";
import "./B8TxTyak.js";
import "./CI8VFsgH.js";
import "./C10dbX3k.js";
import "./xUo5sKGi.js";
import "./C2Qfbq92.js";
import "./1WQF9nlZ.js";
import "./CMuUTlS2.js";
const V = {
    class:
      "bg-gray-25 lg:p-10 p-6 border border-opacity-100 border-gray-300 max-w-[32.3rem] mx-auto m-10 shadow-xs !rounded-xl",
  },
  R = { class: "w-fit mx-auto rounded-pill bg-error-50 p-4" },
  Y = { class: "rounded-pill bg-error-100 p-4" },
  M = { class: "text-center lg:text-xl-bold text-md-bold text-gray-900 mt-6" },
  j = { class: "text-center lg:text-md-medium text-sm-medium text-gray-600" },
  H = { class: "mt-lg-10 mt-6" },
  U = {
    class: "lg:text-sm-regular text-xs-regular mb-4 text-gray-900 text-center",
  },
  W = { class: "lg:flex align-center justify-center gap-4" },
  X = { class: "text-sm-semibold text-gray-700" },
  z = { class: "text-sm-semibold px-10" },
  ce = {
    __name: "fail",
    setup(J) {
      const f = S(),
        { locale: v } = F(),
        { $isDesktop: p } = T(),
        g = O(),
        w = E(),
        _ = o(null),
        r = o(null),
        i = o(!1),
        u = o(!1),
        x = o("");
      q(() => b());
      const b = async () => {
          const e = g.query.track_id;
          try {
            const { data: a } = await B(C, {
              method: "GET",
              params: { track_id: e },
            });
            (_.value = a.value.data.gateway_form),
              (r.value = { ...a.value.data }),
              delete r.value.gateway_form,
              delete r.value.trackId,
              (r.value.track_id = e);
          } catch {}
        },
        k = async () => {
          var e, a, c, d;
          u.value = !0;
          try {
            await f.submitGatewayForm(r.value, _.value);
          } catch (s) {
            (i.value = !0),
              (x.value =
                ((d =
                  (c =
                    (a =
                      (e = s == null ? void 0 : s.response) == null
                        ? void 0
                        : e._data) == null
                      ? void 0
                      : a.meta) == null
                    ? void 0
                    : c.status) == null
                  ? void 0
                  : d.message) || null);
          } finally {
            u.value = !1;
          }
        },
        $ = () => {
          const e = `/${v.value}`;
          w.push({ path: `${e}/`, query: { ...g.query } });
        };
      return (e, a) => {
        const c = A,
          d = D;
        return (
          P(),
          G(
            N,
            null,
            [
              t("div", V, [
                t("div", R, [
                  t("div", Y, [
                    m(c, {
                      src: "exchange/payment/fail.png",
                      width: "40",
                      height: "40",
                    }),
                  ]),
                ]),
                t("div", M, l(e.$t("exchange.payOrder.payFail")), 1),
                t("div", j, l(e.$t("exchange.payOrder.payFailSub")), 1),
                t("div", H, [
                  t(
                    "div",
                    U,
                    l(e.$t("exchange.payOrder.payFailDes")) + " : ",
                    1
                  ),
                ]),
                t("div", W, [
                  m(
                    y,
                    {
                      color: "gray-300",
                      variant: "outlined",
                      width: n(p) ? "auto" : "100%",
                      flat: "",
                      height: "40",
                      rounded: "lg",
                      class: "text-none order-lg-1 order-last",
                      onClick: $,
                    },
                    {
                      default: h(() => [
                        t(
                          "span",
                          X,
                          l(e.$t("exchange.payOrder.viewDetail")),
                          1
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["width"]
                  ),
                  m(
                    y,
                    {
                      color: "primary-600",
                      rounded: "lg",
                      loading: n(u),
                      width: n(p) ? "auto" : "100%",
                      tile: "",
                      flat: "",
                      class:
                        "text-none order-lg-2 order-first mt-lg-0 mt-4 shadow-xs",
                      onClick: k,
                    },
                    {
                      default: h(() => [
                        t("span", z, l(e.$t("exchange.payOrder.tryAgain")), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["loading", "width"]
                  ),
                ]),
              ]),
              m(
                d,
                {
                  error: n(i),
                  "onUpdate:error":
                    a[0] || (a[0] = (s) => (I(i) ? (i.value = s) : null)),
                  "message-text": n(x),
                },
                null,
                8,
                ["error", "message-text"]
              ),
            ],
            64
          )
        );
      };
    },
  };
export { ce as default };
