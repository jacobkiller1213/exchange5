import {
  $ as Y,
  a9 as B,
  a3 as G,
  a0 as $,
  a1 as H,
  aa as J,
  r as T,
  R as O,
  x as X,
  aw as q,
  j as D,
  o as K,
  bn as Q,
  s as V,
  a5 as Z,
  f as i,
  a2 as R,
  ar as ee,
  aq as te,
  ag as ae,
  al as re,
  am as oe,
  a as se,
  h as ne,
  w as I,
  b as s,
  u as d,
  n as m,
  t as k,
} from "./Sm2mCfDE.js";
import { c as ce, b as ie, V as w, f as le } from "./C10dbX3k.js";
import { V as ue, u as de } from "./1WQF9nlZ.js";
import {
  h as me,
  i as be,
  f as ve,
  l as fe,
  j as ge,
  n as Ee,
  g as ye,
} from "./ZfNZiyCm.js";
import { a as pe, b as Ce } from "./B8TxTyak.js";
import { V as Pe } from "./CMuUTlS2.js";
function Te(e) {
  const o = O(e());
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), ae(() => (o.value = e()));
  }
  function n(c) {
    const b = c ? getComputedStyle(c) : { transitionDuration: 0.2 },
      v = parseFloat(b.transitionDuration) * 1e3 || 200;
    if ((a(), o.value <= 0)) return;
    const p = performance.now();
    t = window.setInterval(() => {
      const C = performance.now() - p + v;
      (o.value = Math.max(e() - C, 0)), o.value <= 0 && a();
    }, v);
  }
  return ee(a), { clear: a, time: o, start: n, reset: l };
}
const Oe = Y(
    {
      multiLine: Boolean,
      text: String,
      timer: [Boolean, String],
      timeout: { type: [Number, String], default: 5e3 },
      vertical: Boolean,
      ...me({ location: "bottom" }),
      ...be(),
      ...pe(),
      ...ve(),
      ...B(),
      ...G(ce({ transition: "v-snackbar-transition" }), [
        "persistent",
        "noClickAnimation",
        "scrim",
        "scrollStrategy",
      ]),
    },
    "VSnackbar"
  ),
  Re = $()({
    name: "VSnackbar",
    props: Oe(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, o) {
      let { slots: t } = o;
      const a = H(e, "modelValue"),
        { positionClasses: l } = fe(e),
        { scopeId: n } = ie(),
        { themeClasses: c } = J(e),
        { colorClasses: b, colorStyles: v, variantClasses: p } = ge(e),
        { roundedClasses: C } = Ce(e),
        f = Te(() => Number(e.timeout)),
        S = T(),
        _ = T(),
        g = O(!1),
        A = O(0),
        L = T(),
        U = X(ue, void 0);
      q(
        () => !!U,
        () => {
          const r = de();
          te(() => {
            L.value = r.mainStyles.value;
          });
        }
      ),
        D(a, E),
        D(() => e.timeout, E),
        K(() => {
          a.value && E();
        });
      let P = -1;
      function E() {
        f.reset(), window.clearTimeout(P);
        const r = Number(e.timeout);
        if (!a.value || r === -1) return;
        const u = Q(_.value);
        f.start(u),
          (P = window.setTimeout(() => {
            a.value = !1;
          }, r));
      }
      function h() {
        f.reset(), window.clearTimeout(P);
      }
      function F() {
        (g.value = !0), h();
      }
      function N() {
        (g.value = !1), E();
      }
      function j(r) {
        A.value = r.touches[0].clientY;
      }
      function z(r) {
        Math.abs(A.value - r.changedTouches[0].clientY) > 50 && (a.value = !1);
      }
      function W() {
        g.value && N();
      }
      const M = V(() =>
        e.location
          .split(" ")
          .reduce((r, u) => ((r[`v-snackbar--${u}`] = !0), r), {})
      );
      return (
        Z(() => {
          const r = w.filterProps(e),
            u = !!(t.default || t.text || e.text);
          return i(
            w,
            R(
              {
                ref: S,
                class: [
                  "v-snackbar",
                  {
                    "v-snackbar--active": a.value,
                    "v-snackbar--multi-line": e.multiLine && !e.vertical,
                    "v-snackbar--timer": !!e.timer,
                    "v-snackbar--vertical": e.vertical,
                  },
                  M.value,
                  l.value,
                  e.class,
                ],
                style: [L.value, e.style],
              },
              r,
              {
                modelValue: a.value,
                "onUpdate:modelValue": (y) => (a.value = y),
                contentProps: R(
                  {
                    class: [
                      "v-snackbar__wrapper",
                      c.value,
                      b.value,
                      C.value,
                      p.value,
                    ],
                    style: [v.value],
                    onPointerenter: F,
                    onPointerleave: N,
                  },
                  r.contentProps
                ),
                persistent: !0,
                noClickAnimation: !0,
                scrim: !1,
                scrollStrategy: "none",
                _disableGlobalStack: !0,
                onTouchstartPassive: j,
                onTouchend: z,
                onAfterLeave: W,
              },
              n
            ),
            {
              default: () => {
                var y, x;
                return [
                  Ee(!1, "v-snackbar"),
                  e.timer &&
                    !g.value &&
                    i("div", { key: "timer", class: "v-snackbar__timer" }, [
                      i(
                        ye,
                        {
                          ref: _,
                          color: typeof e.timer == "string" ? e.timer : "info",
                          max: e.timeout,
                          "model-value": f.time.value,
                        },
                        null
                      ),
                    ]),
                  u &&
                    i(
                      "div",
                      {
                        key: "content",
                        class: "v-snackbar__content",
                        role: "status",
                        "aria-live": "polite",
                      },
                      [
                        ((y = t.text) == null ? void 0 : y.call(t)) ?? e.text,
                        (x = t.default) == null ? void 0 : x.call(t),
                      ]
                    ),
                  t.actions &&
                    i(
                      Pe,
                      {
                        defaults: {
                          VBtn: { variant: "text", ripple: !1, slim: !0 },
                        },
                      },
                      {
                        default: () => [
                          i("div", { class: "v-snackbar__actions" }, [
                            t.actions({ isActive: a }),
                          ]),
                        ],
                      }
                    ),
                ];
              },
              activator: t.activator,
            }
          );
        }),
        le({}, S)
      );
    },
  }),
  Se = { class: "flex align-start gap-4 lg:max-w-[32rem]" },
  _e = { class: "pt-3.5 pr-1.5" },
  ke = {
    __name: "SnakBar",
    props: re(
      {
        mode: { type: String, default: "error" },
        messageText: { type: String, default: "" },
        messageTitle: { type: String, default: "" },
      },
      { error: { type: Boolean, default: !1 }, errorModifiers: {} }
    ),
    emits: ["update:error"],
    setup(e) {
      const o = oe(e, "error"),
        t = e,
        a = V(() => ({
          bg: `bg-${t.mode}-25`,
          border: `${t.mode}-600`,
          title: `text-${t.mode}-800`,
          content: `text-${t.mode}-700`,
        }));
      return (l, n) => (
        se(),
        ne(
          Re,
          {
            modelValue: o.value,
            "onUpdate:modelValue": n[1] || (n[1] = (c) => (o.value = c)),
            timeout: 1e4,
            "close-on-content-click": "",
            top: "",
            right: "",
            rounded: "lg",
            color: d(a).border,
            variant: "outlined",
            class: "custom-snackbar-style",
            "content-class": d(a).bg,
          },
          {
            actions: I(({ attrs: c }) => [
              s("div", _e, [
                s(
                  "span",
                  R(c, {
                    class: [
                      "material-symbols-rounded text-red-800 cursor-pointer",
                      d(a).title,
                    ],
                    onClick: n[0] || (n[0] = (b) => (o.value = !1)),
                  }),
                  " close ",
                  16
                ),
              ]),
            ]),
            default: I(() => [
              s("div", Se, [
                s("div", null, [
                  s(
                    "div",
                    { class: m(["rounded-pill p-1.5", `bg-${t.mode}-50`]) },
                    [
                      s(
                        "div",
                        { class: m(["rounded-pill p-1", `bg-${t.mode}-100`]) },
                        [
                          s(
                            "span",
                            {
                              class: m([
                                "material-symbols-rounded",
                                `text-${t.mode}-600`,
                              ]),
                            },
                            " report ",
                            2
                          ),
                        ],
                        2
                      ),
                    ],
                    2
                  ),
                ]),
                s("div", null, [
                  s(
                    "div",
                    {
                      class: m([
                        "lg:text-md-medium text-sm-medium",
                        d(a).title,
                      ]),
                    },
                    k(t.messageTitle),
                    3
                  ),
                  s(
                    "div",
                    {
                      class: m([
                        "lg:text-md-regular text-sm-regular",
                        [d(a).content, { "mt-2.5": !t.errorTitle }],
                      ]),
                    },
                    k(t.messageText || l.$t("toast.anError")),
                    3
                  ),
                ]),
              ]),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "color", "content-class"]
        )
      );
    },
  },
  we = Object.freeze({ SEND: "send", RECEIVE: "receive" }),
  Ve = Object.freeze({
    CALCULATE: "direction.calculate",
    COUPON: "direction,direction.receiveCurrency,direction.calculate",
    RECEIVE_CURRENCY: "direction,direction.receiveCurrency",
    COMPLETE_DIRECTION:
      "direction,direction.sendDynamicFields,direction.receiveDynamicFields",
    WALLET_INFO:
      "direction,direction.receiveCurrency,direction.calculate,direction.sendDynamicFields,direction.receiveDynamicFields",
  }),
  Ue = Object.freeze({
    PAPAL: ["PPUSD", "PPEUR", "PPGBP", "PPRUB"],
    VOUCHER: "PMVUSD",
  }),
  he = Object.freeze({
    SEND_SLUG: "cur_from",
    SEND_AMOUNT: "send_amount",
    RECEIVE_SLUG: "cur_to",
    RECEIVE_AMOUNT: "receive_amount",
  }),
  Fe = Object.freeze({
    DIRECTION: "direction",
    WALLET_INFO: "wallet-info",
    REVIEW_ORDER: "review-order",
    PAY_ORDER: "pay-order",
  }),
  je = Object.freeze({ TEXT: "TEXT", FILE: "FILE" }),
  ze = Object.freeze({
    AUTO_CRYPTO_PAY: "auto_crypto_pay",
    AUTO_E_CURRENCY_PAY: "auto_e_currency_pay",
    MANUAL_CRYPTO_PAY: "manual_crypto_pay",
    MANUAL_E_CURRENCY_PAY: "manual_e_currency_pay",
    VOUCHER_PAY: "voucher_pay",
  }),
  We = Object.freeze({
    UNPAID: "unpaid",
    PENDING: "pending",
    PROCESSING: "processing",
    DONE: "done",
    CANCEL: "cancel",
    REFUND: "refund",
  }),
  Me = Object.freeze({
    unpaid: {
      bgColor: "bg-warning-50",
      textLabel: "Unpaid",
      color: "text-warning-600",
      border: "border-warning-600",
    },
    pending: {
      bgColor: "bg-gray-50",
      textLabel: "Pending",
      color: "text-gray-600",
      border: "border-gray-600",
    },
    processing: {
      bgColor: "bg-primary-50",
      textLabel: "Processing",
      color: "text-primary-600",
      border: "border-primary-600",
    },
    done: {
      bgColor: "bg-success-50",
      textLabel: "Done",
      color: "text-success-600",
      border: "border-success-600",
    },
    success: {
      bgColor: "bg-success-50",
      textLabel: "Success",
      color: "text-success-700",
      border: "border-success-700",
    },
    suspend: {
      bgColor: "bg-warning-50",
      textLabel: "Suspended",
      color: " text-warning-700",
      border: "border-warning-700",
    },
    cancel: {
      bgColor: "bg-error-50",
      textLabel: "Canceled",
      color: "text-error-600",
      border: "border-error-600",
    },
    reject: {
      bgColor: "bg-error-50",
      textLabel: "Reject",
      color: "text-error-700",
      border: "border-error-700",
    },
    refund: {
      bgColor: "bg-gray-50",
      textLabel: "Refund",
      color: "text-gray-600",
      border: "border-gray-600",
    },
  }),
  Ye = Object.freeze({
    SIGN_IN: "signIn",
    SIGN_UP: "signUp",
    FORGET_PASSWORD: "forgetPassword",
  }),
  Be = Object.freeze({
    EMAIL: "email",
    OTP: "otp",
    PASSWORD: "password",
    WELL_DONE: "well-done",
  }),
  Ge = Object.freeze({ WITHDRAW: "withdraw" }),
  $e = Object.freeze({ PRODUCTION: "production" }),
  He = Object.freeze({
    ERROR: "error",
    WARN: "warning",
    SUCCESS: "success",
    INFO: "gray",
  }),
  Je = Object.freeze({
    ORDER: "ORDER",
    DEPOSIT: "DEPOSIT",
    WITHDRAWAL: "WITHDRAWAL",
    AFFILIATE: "AFFILIATE",
    TRANSFER: "TRANSFER",
    COUPON: "COUPON",
    WALLET: "WALLET",
  }),
  Xe = Object.freeze({ PENDING: "PENDING", REJECT: "REJECT", DONE: "DONE" });
export {
  Ye as A,
  Ge as D,
  Be as F,
  Je as T,
  He as V,
  ke as _,
  Xe as a,
  we as b,
  We as c,
  Fe as d,
  $e as e,
  je as f,
  Ve as i,
  Me as o,
  ze as p,
  he as r,
  Ue as s,
};
