import {
  o as ge,
  bG as Ke,
  ag as ie,
  bF as ve,
  q as xe,
  r as i,
  aY as Pe,
  a as g,
  c as v,
  u as e,
  b as s,
  t as a,
  n as y,
  f as u,
  w as f,
  m as V,
  a_ as q,
  g as O,
  F as pe,
  v as ue,
  bH as je,
  i as ze,
  b4 as He,
  Y as Ye,
  s as Y,
  k as qe,
  p as me,
  bI as Je,
  bJ as Ze,
  bK as Qe,
  bL as Xe,
  bA as Ie,
  H as et,
  h as tt,
  bx as st,
} from "./Sm2mCfDE.js";
import { F as o, A as I, _ as Ce, e as at } from "./D_iu627J.js";
import { _ as Ue, i as lt } from "./CaRhLduF.js";
import { _ as Oe } from "./bNepudp1.js";
import { V as Z } from "./ZfNZiyCm.js";
import { V as Te } from "./DW9_RXAq.js";
import { s as ot } from "./CpWmePdF.js";
function Ne() {
  let K;
  return (
    ge(() => {
      const b = Ke();
      b && b.proxy && (K = b.proxy.$refs);
    }),
    {
      focusNext: (b) => {
        K &&
          ie(() => {
            if (b && K[b]) {
              const T = K[b];
              T && T.$el ? T.$el.focus() : T && T.focus && T.focus();
            }
          });
      },
    }
  );
}
const nt = { key: 0 },
  it = { class: "text-gray-600 my-1.5 text-sm-medium" },
  rt = { class: "text-md-semibold" },
  ut = { class: "flex text-sm-regular mt-4 justify-center" },
  ct = { class: "text-gray-600 mr-2" },
  dt = { class: "flex align-center" },
  pt = { class: "mx-2 my-lg-8 my-6 text-sm-medium text-gray-600" },
  mt = { class: "w-full position-relative" },
  gt = { class: "flex overflow-hidden" },
  vt = {
    class: "text-gray-700 lg:text-md-semibold text-md-semibold tracking-normal",
  },
  ft = { key: 1 },
  ht = { class: "text-gray-600 my-1.5 text-sm-medium" },
  yt = { class: "text-md-semibold" },
  bt = { key: 2 },
  kt = { class: "text-sm-medium text-gray-600 mt-4" },
  wt = { class: "text-md-semibold" },
  _t = {
    __name: "SignIn",
    props: {
      titleClass: { type: String, default: "" },
      value: { type: [String, Number], default: "" },
      contentClass: { type: String, default: "" },
      skipLastStep: { type: Boolean, default: !1 },
      callback: { type: Function, default: null },
    },
    emits: ["close", "toggle-back"],
    setup(K, { expose: le, emit: b }) {
      const { focusNext: T } = Ne(),
        N = ve(),
        Q = xe(),
        L = b,
        P = K,
        c = i(o.EMAIL),
        W = i(""),
        J = i(""),
        j = i(null),
        E = i(!1),
        C = i(!1),
        X = i(!1),
        G = i(null),
        S = i(!0),
        A = i(null),
        se = i(null),
        D = i(null),
        x = i(null),
        F = async (n) => {
          var r, M, w, B;
          C.value = !0;
          try {
            await N.loginWithGoogle(n), L("close");
          } catch (te) {
            (X.value = !0),
              (G.value =
                ((B =
                  (w =
                    (M =
                      (r = te == null ? void 0 : te.response) == null
                        ? void 0
                        : r._data) == null
                      ? void 0
                      : M.errors) == null
                    ? void 0
                    : w.validations[0]) == null
                  ? void 0
                  : B.message) ?? "");
          } finally {
            C.value = !1;
          }
        },
        d = () => {
          N.updateCurrentDialog(I.SIGN_UP), N.updateMode(I.SIGN_UP);
        },
        ee = async () => {
          var n, r, M;
          try {
            C.value = !0;
            const w = await z();
            if (w.data["2fa"]) {
              (c.value = o.OTP), await ie(), D.value.focus();
              return;
            }
            k(w.data.access_token),
              await Q.getUserInfo(),
              L("close"),
              P.callback && P.callback();
          } catch (w) {
            (X.value = !0),
              (G.value =
                ((M =
                  (r =
                    (n = w == null ? void 0 : w.response) == null
                      ? void 0
                      : n._data) == null
                    ? void 0
                    : r.meta) == null
                  ? void 0
                  : M.status.message) ?? null);
          } finally {
            C.value = !1;
          }
        },
        z = async () => {
          try {
            const n = {
                email: W.value,
                password: J.value,
                ...(j.value && { two_factor_code: j.value }),
              },
              { data: r } = await ue(je, { method: "POST", body: n });
            return r.value;
          } catch (n) {
            throw n;
          }
        },
        H = () => {
          switch ((L("toggle-back", !0), c.value)) {
            case o.PASSWORD:
              L("toggle-back", !0), (c.value = o.EMAIL);
              break;
            case o.OTP:
              c.value = o.PASSWORD;
              break;
          }
        },
        k = (n) => {
          N.setToken(n);
        },
        ae = () => {
          (N.email = W.value),
            N.updateMode(I.FORGET_PASSWORD),
            N.updateCurrentDialog(I.SIGN_UP);
        },
        R = async () => {
          switch (((G.value = null), c.value)) {
            case o.EMAIL:
              L("toggle-back", !0),
                (c.value = o.PASSWORD),
                await ie(),
                x.value.focusInput();
              break;
            case o.PASSWORD:
              await ee();
              break;
            case o.OTP:
              await ee();
              break;
          }
        };
      return (
        le({ backClicked: H }),
        (n, r) => {
          const M = Ue,
            w = Pe("GoogleLogin"),
            B = Oe,
            te = Ce;
          return (
            g(),
            v(
              pe,
              null,
              [
                e(c) === e(o).EMAIL
                  ? (g(),
                    v("div", nt, [
                      s(
                        "div",
                        { class: y(P.titleClass) },
                        a(n.$t("auth.signIn.title")),
                        3
                      ),
                      s(
                        "div",
                        { class: y(P.contentClass) },
                        a(n.$t("auth.signIn.subtitle")),
                        3
                      ),
                      u(
                        M,
                        {
                          value: e(W),
                          "onUpdate:value":
                            r[0] ||
                            (r[0] = (_) => (V(W) ? (W.value = _) : null)),
                          "has-error": e(S),
                          "onUpdate:hasError":
                            r[1] ||
                            (r[1] = (_) => (V(S) ? (S.value = _) : null)),
                          placeholder: n.$t("auth.signIn.des"),
                          validation: "email",
                          onKeydown:
                            r[2] ||
                            (r[2] = q((_) => e(T)("emailBtn"), ["enter"])),
                        },
                        {
                          title: f(() => [
                            s("div", it, a(n.$t("auth.signIn.label")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["value", "has-error", "placeholder"]
                      ),
                      u(
                        Z,
                        {
                          ref_key: "emailBtn",
                          ref: se,
                          class:
                            "w-full my-custom-button text-none mt-lg-8 mt-6",
                          color: "primary-600",
                          flat: "",
                          height: "44",
                          loading: e(C),
                          disabled: e(S),
                          rounded: "lg",
                          onClick: R,
                          onKeydown: q(R, ["enter"]),
                        },
                        {
                          default: f(() => [
                            s("span", rt, a(n.$t("auth.signIn.continue")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["loading", "disabled"]
                      ),
                      s("div", ut, [
                        s("div", ct, a(n.$t("auth.signIn.noAccount")), 1),
                        s(
                          "div",
                          { class: "text-gray-900 cursor-pointer", onClick: d },
                          a(n.$t("auth.signIn.signUpNow")),
                          1
                        ),
                      ]),
                      s("div", dt, [
                        r[8] ||
                          (r[8] = s(
                            "div",
                            { class: "grow h-[1px] bg-gray-200" },
                            null,
                            -1
                          )),
                        s("div", pt, a(n.$t("auth.or")), 1),
                        r[9] ||
                          (r[9] = s(
                            "div",
                            { class: "grow h-[1px] bg-gray-200" },
                            null,
                            -1
                          )),
                      ]),
                      s("div", mt, [
                        s("div", gt, [
                          u(w, { callback: F }),
                          u(w, { callback: F }),
                        ]),
                        u(
                          Z,
                          {
                            variant: "text",
                            height: "46",
                            loading: e(C),
                            class:
                              "text-none w-full position-absolute -top-1 z-10 pointer-events-none bg-white rounded-lg border border-gray-300 border-opacity-100",
                          },
                          {
                            default: f(() => [
                              u(B, {
                                class: "mr-3",
                                width: "24",
                                height: "24",
                                src: "auth/google-icon.svg",
                              }),
                              s("span", vt, a(n.$t("auth.signIn.google")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["loading"]
                        ),
                      ]),
                    ]))
                  : O("", !0),
                e(c) === e(o).PASSWORD
                  ? (g(),
                    v("div", ft, [
                      s(
                        "div",
                        { class: y(P.titleClass) },
                        a(n.$t("auth.signIn.almost")),
                        3
                      ),
                      s(
                        "div",
                        { class: y(P.contentClass) },
                        a(n.$t("auth.signIn.passwordSubtitle[0]")) +
                          " " +
                          a(e(W)) +
                          " " +
                          a(n.$t("auth.signIn.passwordSubtitle[1]")),
                        3
                      ),
                      u(
                        M,
                        {
                          ref_key: "passInput",
                          ref: x,
                          value: e(J),
                          "onUpdate:value":
                            r[4] ||
                            (r[4] = (_) => (V(J) ? (J.value = _) : null)),
                          placeholder: n.$t("auth.signIn.enterPass"),
                          type: e(E) ? "text" : "password",
                          onKeydown:
                            r[5] ||
                            (r[5] = q((_) => e(T)("passBtn"), ["enter"])),
                        },
                        {
                          title: f(() => [
                            s("div", ht, a(n.$t("auth.signIn.password")), 1),
                          ]),
                          append: f(() => [
                            u(
                              B,
                              {
                                width: "20px",
                                height: "20px",
                                class: "cursor-pointer mt-0.5",
                                src: `auth/${e(E) ? "open" : "close"}-eye.svg`,
                                onClick:
                                  r[3] || (r[3] = (_) => (E.value = !e(E))),
                              },
                              null,
                              8,
                              ["src"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["value", "placeholder", "type"]
                      ),
                      u(
                        Z,
                        {
                          ref_key: "passBtn",
                          ref: A,
                          class:
                            "w-full my-custom-button text-none mt-lg-8 mt-6",
                          color: "primary-600",
                          flat: "",
                          height: "44",
                          rounded: "lg",
                          disabled: !e(J),
                          loading: e(C),
                          onClick: R,
                          onKeydown: q(R, ["enter"]),
                        },
                        {
                          default: f(() => [
                            s("span", yt, a(n.$t("auth.signIn.signIn")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled", "loading"]
                      ),
                      s(
                        "div",
                        {
                          class:
                            "text-center text-sm-semibold text-primary-700 mt-6 cursor-pointer",
                          onClick: ae,
                        },
                        a(n.$t("auth.signIn.forgetPass")),
                        1
                      ),
                    ]))
                  : O("", !0),
                e(c) === e(o).OTP
                  ? (g(),
                    v("div", bt, [
                      s(
                        "div",
                        { class: y(P.titleClass) },
                        a(n.$t("auth.signIn.authenticator")),
                        3
                      ),
                      s("div", null, [
                        s("div", kt, a(n.$t("auth.signIn.enterCode")), 1),
                        u(
                          Te,
                          {
                            ref_key: "otpInput",
                            ref: D,
                            modelValue: e(j),
                            "onUpdate:modelValue":
                              r[6] ||
                              (r[6] = (_) => (V(j) ? (j.value = _) : null)),
                            placeholder: "0",
                            rounded: "",
                            dens: "",
                            "focus-all": "",
                            "inner-class": "",
                            class:
                              "text-primary-500 border-2-primary-500 text-lg-semibold",
                            "base-color": "gray-300",
                            onFinish: R,
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      u(
                        Z,
                        {
                          class:
                            "w-full my-custom-button text-none mt-lg-8 mt-3",
                          color: "primary-600",
                          flat: "",
                          height: "44",
                          rounded: "lg",
                          loading: e(C),
                          onClick: R,
                        },
                        {
                          default: f(() => [
                            s("span", wt, a(n.$t("auth.signIn.continue")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["loading"]
                      ),
                    ]))
                  : O("", !0),
                u(
                  te,
                  {
                    error: e(X),
                    "onUpdate:error":
                      r[7] || (r[7] = (_) => (V(X) ? (X.value = _) : null)),
                    "message-text": e(G),
                  },
                  null,
                  8,
                  ["error", "message-text"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  },
  $t = { key: 0 },
  It = { class: "text-gray-600 my-1.5 text-sm-medium" },
  St = { class: "text-md-semibold" },
  xt = { class: "flex text-sm-regular mt-4 justify-center" },
  Pt = { class: "text-gray-600 mr-2" },
  Ct = { class: "flex align-center" },
  Ut = { class: "mx-2 my-lg-8 my-6 text-sm-medium text-gray-600" },
  Ot = { class: "w-full position-relative" },
  Tt = { class: "flex overflow-hidden" },
  Nt = {
    class: "text-gray-700 lg:text-md-semibold text-md-semibold tracking-normal",
  },
  At = { key: 1 },
  Dt = { class: "text-gray-600 my-1.5 text-sm-medium" },
  Lt = { class: "text-sm-regular text-gray-600 mb-lg-5 mb-4" },
  Et = { class: "text-gray-600 my-1.5 text-sm-medium" },
  Gt = { key: 0, class: "text-red-500 text-sm-regular" },
  Rt = { class: "text-md-semibold" },
  Bt = { key: 2 },
  Wt = { class: "text-sm-medium text-gray-600 mt-4" },
  Ft = { class: "text-md-semibold" },
  Mt = {
    class:
      "flex justify-center align-center text-sm-semibold text-primary-700 mt-4",
  },
  Vt = { key: 0, class: "ml-1" },
  Kt = { key: 3 },
  jt = { class: "my-lg-6 my-5" },
  zt = { key: 0, class: "text-md-semibold" },
  Ht = { key: 1, class: "text-md-semibold" },
  Se = 5 * 60,
  Yt = {
    __name: "SignUp",
    props: {
      titleClass: { type: String, default: "" },
      contentClass: { type: String, default: "" },
      skipLastStep: { type: Boolean, default: !1 },
      callback: { type: Function, default: null },
    },
    emits: ["close", "toggle-back"],
    setup(K, { expose: le, emit: b }) {
      const { locale: T } = ze(),
        { executeRecaptcha: N, recaptchaLoaded: Q } = He.useReCaptcha(),
        { focusNext: L } = Ne(),
        P = Ye(),
        c = ve(),
        W = xe(),
        J = i(null),
        j = i(null),
        E = i(null),
        C = i(null),
        X = i(null);
      ge(() => Me());
      let G;
      const S = b,
        A = K,
        se = i(null),
        D = i(""),
        x = i(""),
        F = i(""),
        d = i(o.EMAIL),
        ee = i(Se),
        z = i(!1),
        H = i(!1),
        k = i(!1),
        ae = i(!0),
        R = i(""),
        n = Y(() => /[A-Z]/.test(x.value)),
        r = Y(() => /[a-z]/.test(x.value)),
        M = Y(() => /\d/.test(x.value)),
        w = Y(() => F.value.length > 0 && F.value !== x.value),
        B = Y(
          () =>
            x.value.length > 0 &&
            (!n.value || !r.value || !M.value || !te.value)
        ),
        te = Y(() => x.value.length >= 8),
        _ = Y(() => Math.floor(ee.value / 60)),
        ce = Y(() => ee.value % 60),
        Ae = Y(() => !!(B.value || !x.value || w.value || !F.value)),
        re = Y(() => re),
        fe = async () => {
          k.value = !0;
          try {
            let t;
            oe() && (await Q(), (t = await N("signUp")));
            const l = c.mode === I.SIGN_UP && oe(),
              h = { email: D.value, ...(l && { "g-recaptcha-response": t }) };
            await ue(Je, { method: "POST", body: h }),
              (d.value = o.OTP),
              G || de();
          } catch (t) {
            throw ((H.value = !0), he(t), t);
          } finally {
            k.value = !1;
          }
        },
        he = (t) => {
          var l, h, U, m, $, p, _e, $e;
          ((m =
            (U =
              (h = (l = t.response) == null ? void 0 : l._data) == null
                ? void 0
                : h.meta) == null
              ? void 0
              : U.status) == null
            ? void 0
            : m.message) === "OTP exists!"
            ? ((d.value = o.OTP), G || de())
            : ((H.value = !0),
              (R.value =
                (($e =
                  (_e =
                    (p =
                      ($ = t == null ? void 0 : t.response) == null
                        ? void 0
                        : $._data) == null
                      ? void 0
                      : p.errors) == null
                    ? void 0
                    : _e.validations[0]) == null
                  ? void 0
                  : $e.message) ?? ""));
        },
        oe = () => at.PRODUCTION === "production",
        De = async () => {
          ce.value > 0 || _.value > 0 || (await fe(), Re());
        },
        Le = async () => {
          var l, h, U, m;
          k.value = !0;
          let t;
          try {
            oe() && (await Q(), (t = await N("signUp")));
            const $ = {
                code: se.value,
                email: D.value,
                password: x.value,
                password_confirmation: F.value,
                ...(oe() && { "g-recaptcha-response": t }),
              },
              { data: p } = await ue(Ze, { method: "POST", body: $ });
            ye(p.value.data.access_token),
              S("toggle-back", !1),
              await W.getUserInfo(),
              (d.value = o.WELL_DONE);
          } catch ($) {
            (H.value = !0),
              (R.value =
                ((m =
                  (U =
                    (h =
                      (l = $ == null ? void 0 : $.response) == null
                        ? void 0
                        : l._data) == null
                      ? void 0
                      : h.errors) == null
                    ? void 0
                    : U.validations[0]) == null
                  ? void 0
                  : m.message) ?? "");
          } finally {
            k.value = !1;
          }
        },
        Ee = async () => {
          k.value = !0;
          let t;
          try {
            oe() && (await Q(), (t = await N("signUp")));
            const l = {
              email: D.value,
              ...(oe() && { "g-recaptcha-response": t }),
            };
            await ue(Qe, { method: "POST", body: l }), G || de();
          } catch (l) {
            throw (he(l), l);
          } finally {
            k.value = !1;
          }
        },
        Ge = async () => {
          var t, l, h, U;
          k.value = !0;
          try {
            const m = {
                code: se.value,
                email: D.value,
                password: x.value,
                password_confirmation: F.value,
              },
              { data: $ } = await ue(Xe, { method: "POST", body: m }),
              p = $.value.data.access_token;
            ye(p),
              S("toggle-back", !1),
              await W.getUserInfo(),
              (d.value = o.WELL_DONE);
          } catch (m) {
            (H.value = !0),
              (R.value =
                ((U =
                  (h =
                    (l =
                      (t = m == null ? void 0 : m.response) == null
                        ? void 0
                        : t._data) == null
                      ? void 0
                      : l.errors) == null
                    ? void 0
                    : h.validations[0]) == null
                  ? void 0
                  : U.message) ?? "");
          } finally {
            k.value = !1;
          }
        },
        de = () => {
          G = ot(() => {
            ee.value > 0 ? ee.value-- : clearInterval(G);
          }, 1e3);
        },
        Re = () => {
          clearInterval(G), (ee.value = Se), de();
        },
        ne = async () => {
          const t = c.mode;
          if (d.value === o.EMAIL) {
            if ((S("toggle-back", !0), t === I.SIGN_UP))
              (d.value = o.PASSWORD), await ie(), C.value.focusInput();
            else
              try {
                await Ee(), (d.value = o.OTP), await ie(), E.value.focus();
              } catch {}
            return;
          }
          if (d.value === o.OTP) {
            t === I.SIGN_UP ? await Le() : (d.value = o.PASSWORD);
            return;
          }
          if (d.value === o.PASSWORD)
            if (t === I.SIGN_UP)
              try {
                await fe(), (d.value = o.OTP), await ie(), E.value.focus();
              } catch {}
            else await Ge();
        },
        Be = () => {
          const t = c.mode;
          if ((S("toggle-back", !0), d.value === o.OTP)) {
            t === I.SIGN_UP
              ? (d.value = o.PASSWORD)
              : (S("toggle-back", !1), (d.value = o.EMAIL));
            return;
          }
          d.value === o.PASSWORD &&
            (t === I.SIGN_UP
              ? (S("toggle-back", !1), (d.value = o.EMAIL))
              : (d.value = o.OTP)),
            d.value === o.EMAIL &&
              t === I.FORGET_PASSWORD &&
              (S("toggle-back", !1), be());
        },
        ye = (t) => {
          c.setToken(t);
        },
        be = () => {
          c.updateCurrentDialog(I.SIGN_IN), c.updateMode(I.SIGN_IN);
        },
        We = () => {
          S("close");
          const t = `/${T.value}/dashboard`;
          P.push(t);
        },
        Fe = () => {
          X.value.focusInput();
        },
        ke = async (t) => {
          var l, h, U, m;
          k.value = !0;
          try {
            await c.loginWithGoogle(t), S("close");
          } catch ($) {
            (H.value = !0),
              (R.value =
                ((m =
                  (U =
                    (h =
                      (l = $ == null ? void 0 : $.response) == null
                        ? void 0
                        : l._data) == null
                      ? void 0
                      : h.errors) == null
                    ? void 0
                    : U.validations[0]) == null
                  ? void 0
                  : m.message) ?? "");
          } finally {
            k.value = !1;
          }
        },
        Me = () => {
          c.email && ((D.value = c.email), lt(c.email) && (ae.value = !1));
        },
        Ve = () => {
          S("close"), A.callback();
        },
        we = () => {
          A.skipLastStep ? Ve() : We();
        };
      return (
        qe(() => {
          clearInterval(G);
        }),
        le({ backClicked: Be }),
        (t, l) => {
          const h = Ue,
            U = Pe("GoogleLogin"),
            m = Oe,
            $ = Ce;
          return (
            g(),
            v(
              pe,
              null,
              [
                e(d) === e(o).EMAIL
                  ? (g(),
                    v("div", $t, [
                      s(
                        "div",
                        { class: y(A.titleClass) },
                        a(t.$t(`auth.${e(c).mode}.title`)),
                        3
                      ),
                      s(
                        "div",
                        { class: y(A.contentClass) },
                        a(t.$t(`auth.${e(c).mode}.subtitle`)),
                        3
                      ),
                      u(
                        h,
                        {
                          value: e(D),
                          "onUpdate:value":
                            l[0] ||
                            (l[0] = (p) => (V(D) ? (D.value = p) : null)),
                          "has-error": e(ae),
                          "onUpdate:hasError":
                            l[1] ||
                            (l[1] = (p) => (V(ae) ? (ae.value = p) : null)),
                          placeholder: t.$t("auth.signIn.des"),
                          validation: "email",
                          onKeydown:
                            l[2] ||
                            (l[2] = q((p) => e(L)("emailBtn"), ["enter"])),
                        },
                        {
                          title: f(() => [
                            s("div", It, a(t.$t("auth.signIn.label")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["value", "has-error", "placeholder"]
                      ),
                      u(
                        Z,
                        {
                          ref_key: "emailBtn",
                          ref: j,
                          class:
                            "w-full my-custom-button text-none mt-lg-8 mt-6",
                          color: "primary-600",
                          flat: "",
                          height: "44",
                          loading: e(k),
                          disabled: e(ae),
                          rounded: "lg",
                          onClick: ne,
                          onKeydown: q(ne, ["enter"]),
                        },
                        {
                          default: f(() => [
                            s("span", St, a(t.$t("auth.signIn.continue")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["loading", "disabled"]
                      ),
                      e(c).mode === e(I).SIGN_UP
                        ? (g(),
                          v(
                            pe,
                            { key: 0 },
                            [
                              s("div", xt, [
                                s("div", Pt, a(t.$t("auth.signUp.already")), 1),
                                s(
                                  "div",
                                  {
                                    class: "text-gray-900 cursor-pointer",
                                    onClick: be,
                                  },
                                  a(t.$t("auth.signUp.signIn")),
                                  1
                                ),
                              ]),
                              s("div", Ct, [
                                l[10] ||
                                  (l[10] = s(
                                    "div",
                                    { class: "grow h-[1px] bg-gray-200" },
                                    null,
                                    -1
                                  )),
                                s("div", Ut, a(t.$t("auth.or")), 1),
                                l[11] ||
                                  (l[11] = s(
                                    "div",
                                    { class: "grow h-[1px] bg-gray-200" },
                                    null,
                                    -1
                                  )),
                              ]),
                              s("div", Ot, [
                                s("div", Tt, [
                                  u(U, { callback: ke }),
                                  u(U, { callback: ke }),
                                ]),
                                u(
                                  Z,
                                  {
                                    variant: "text",
                                    height: "46",
                                    loading: e(k),
                                    class:
                                      "text-none w-full position-absolute -top-1 z-10 pointer-events-none bg-white rounded-lg border border-gray-300 border-opacity-100",
                                  },
                                  {
                                    default: f(() => [
                                      u(m, {
                                        class: "mr-3",
                                        width: "24",
                                        height: "24",
                                        src: "auth/google-icon.svg",
                                      }),
                                      s(
                                        "span",
                                        Nt,
                                        a(t.$t("auth.signUp.google")),
                                        1
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["loading"]
                                ),
                              ]),
                            ],
                            64
                          ))
                        : O("", !0),
                    ]))
                  : O("", !0),
                e(d) === e(o).PASSWORD
                  ? (g(),
                    v("div", At, [
                      s(
                        "div",
                        { class: y(A.titleClass) },
                        a(t.$t("auth.signUp.creatPass")),
                        3
                      ),
                      s(
                        "div",
                        { class: y(A.contentClass) },
                        a(t.$t("auth.signUp.sub2")),
                        3
                      ),
                      u(
                        h,
                        {
                          ref_key: "passInput",
                          ref: C,
                          value: e(x),
                          "onUpdate:value":
                            l[4] ||
                            (l[4] = (p) => (V(x) ? (x.value = p) : null)),
                          placeholder: t.$t("auth.signUp.pass1Placeholder"),
                          name: "pass",
                          "be-error": e(B),
                          type: e(z) ? "text" : "password",
                          onKeydown: q(Fe, ["enter"]),
                        },
                        {
                          title: f(() => [
                            s("div", Dt, a(t.$t("auth.signUp.pass1")), 1),
                          ]),
                          append: f(() => [
                            u(
                              m,
                              {
                                width: "20px",
                                height: "20px",
                                class: "cursor-pointer mt-0.5",
                                src: `auth/${e(z) ? "open" : "close"}-eye.svg`,
                                onClick:
                                  l[3] || (l[3] = (p) => (z.value = !e(z))),
                              },
                              null,
                              8,
                              ["src"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["value", "placeholder", "be-error", "type"]
                      ),
                      s("div", Lt, [
                        s(
                          "div",
                          {
                            class: y(
                              e(B)
                                ? e(te)
                                  ? "text-success-700"
                                  : "text-red-500"
                                : ""
                            ),
                          },
                          a(t.$t("auth.rules.min")),
                          3
                        ),
                        s(
                          "div",
                          {
                            class: y(
                              e(B)
                                ? e(n)
                                  ? "text-success-700"
                                  : "text-red-500"
                                : ""
                            ),
                          },
                          a(t.$t("auth.rules.upper")),
                          3
                        ),
                        s(
                          "div",
                          {
                            class: y(
                              e(B)
                                ? e(r)
                                  ? "text-success-700"
                                  : "text-red-500"
                                : ""
                            ),
                          },
                          a(t.$t("auth.rules.lower")),
                          3
                        ),
                        s(
                          "div",
                          {
                            class: y(
                              e(B)
                                ? e(M)
                                  ? "text-success-700"
                                  : "text-red-500"
                                : ""
                            ),
                          },
                          a(t.$t("auth.rules.oneNum")),
                          3
                        ),
                      ]),
                      u(
                        h,
                        {
                          ref_key: "confirmPassInput",
                          ref: X,
                          value: e(F),
                          "onUpdate:value":
                            l[6] ||
                            (l[6] = (p) => (V(F) ? (F.value = p) : null)),
                          placeholder: t.$t("auth.signUp.pass2Placeholder"),
                          type: e(z) ? "text" : "password",
                          "be-error": e(w),
                          onKeydown:
                            l[7] ||
                            (l[7] = q((p) => e(L)("passBtn"), ["enter"])),
                        },
                        {
                          title: f(() => [
                            s("div", Et, a(t.$t("auth.signUp.pass2")), 1),
                          ]),
                          append: f(() => [
                            u(
                              m,
                              {
                                width: "20px",
                                height: "20px",
                                class: "mt-0.5 cursor-pointer",
                                src: `auth/${e(z) ? "open" : "close"}-eye.svg`,
                                onClick:
                                  l[5] || (l[5] = (p) => (z.value = !e(z))),
                              },
                              null,
                              8,
                              ["src"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["value", "placeholder", "type", "be-error"]
                      ),
                      e(w)
                        ? (g(), v("div", Gt, a(t.$t("auth.noMatch")), 1))
                        : O("", !0),
                      u(
                        Z,
                        {
                          ref_key: "passBtn",
                          ref: J,
                          class:
                            "w-full my-custom-button text-none mt-lg-8 mt-6",
                          color: "primary-600",
                          flat: "",
                          height: "44",
                          disabled: e(Ae),
                          rounded: "lg",
                          loading: e(k),
                          onClick: ne,
                          onKeydown: q(ne, ["enter"]),
                        },
                        {
                          default: f(() => [
                            s("span", Rt, a(t.$t("auth.signIn.continue")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled", "loading"]
                      ),
                    ]))
                  : O("", !0),
                e(d) === e(o).OTP
                  ? (g(),
                    v("div", Bt, [
                      s(
                        "div",
                        { class: y(A.titleClass) },
                        a(t.$t("auth.signUp.confirmEmail")),
                        3
                      ),
                      s(
                        "div",
                        { class: y(A.contentClass) },
                        a(t.$t("auth.signUp.confirmEmailSub[0]")) +
                          " " +
                          a(e(D)) +
                          " " +
                          a(t.$t("auth.signUp.confirmEmailSub[1]")),
                        3
                      ),
                      s("div", null, [
                        s("div", Wt, a(t.$t("auth.signUp.enterOTP")), 1),
                        u(
                          Te,
                          {
                            ref_key: "otpInput",
                            ref: E,
                            modelValue: e(se),
                            "onUpdate:modelValue":
                              l[8] ||
                              (l[8] = (p) => (V(se) ? (se.value = p) : null)),
                            length: "5",
                            placeholder: "0",
                            rounded: "",
                            "aria-controls": "mmmm",
                            dens: "",
                            "inner-class": "",
                            class:
                              "text-primary-500 border-2-primary-500 text-lg-semibold",
                            "base-color": "gray-300",
                            onFinish: ne,
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      u(
                        Z,
                        {
                          class:
                            "w-full my-custom-button text-none mt-lg-8 mt-3",
                          color: "primary-600",
                          flat: "",
                          height: "44",
                          rounded: "lg",
                          loading: e(k),
                          onClick: ne,
                        },
                        {
                          default: f(() => [
                            s("span", Ft, a(t.$t("auth.signIn.continue")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["loading"]
                      ),
                      s("div", Mt, [
                        s(
                          "div",
                          {
                            class: "flex align-center cursor-pointer",
                            onClick: De,
                          },
                          [
                            u(m, {
                              class: "mr-2",
                              width: "24",
                              height: "24",
                              src: "auth/email-icon.svg",
                            }),
                            me(" " + a(t.$t("auth.signUp.resend")), 1),
                          ]
                        ),
                        e(_) > 0 || e(ce) > 0
                          ? (g(),
                            v(
                              "div",
                              Vt,
                              " (" +
                                a(e(_)) +
                                ":" +
                                a(e(ce) < 10 ? "0" : "") +
                                a(e(ce)) +
                                "s) ",
                              1
                            ))
                          : O("", !0),
                      ]),
                    ]))
                  : O("", !0),
                e(d) === e(o).WELL_DONE
                  ? (g(),
                    v("div", Kt, [
                      s("div", jt, [
                        u(
                          m,
                          {
                            src: e(re)
                              ? "auth/well-done.png"
                              : "auth/passChanged.png",
                          },
                          null,
                          8,
                          ["src"]
                        ),
                      ]),
                      s(
                        "div",
                        { class: y(A.titleClass) },
                        a(
                          e(re)
                            ? t.$t("auth.signUp.welcomeTitle")
                            : t.$t("auth.forgetPassword.passChanged")
                        ),
                        3
                      ),
                      s(
                        "div",
                        { class: y(A.contentClass) },
                        [
                          me(
                            a(
                              e(re)
                                ? t.$t("auth.signUp.welcomeSub[0]")
                                : t.$t(
                                    "auth.forgetPassword.passwordChangedSubtitle"
                                  )
                            ) + " ",
                            1
                          ),
                          e(re)
                            ? (g(),
                              v(
                                pe,
                                { key: 0 },
                                [
                                  me(
                                    a(e(D)) +
                                      " " +
                                      a(t.$t("auth.signUp.welcomeSub[1]")),
                                    1
                                  ),
                                ],
                                64
                              ))
                            : O("", !0),
                        ],
                        2
                      ),
                      u(
                        Z,
                        {
                          class:
                            "w-full my-custom-button text-none mt-lg-8 mt-3",
                          color: "primary-600",
                          flat: "",
                          height: "44",
                          rounded: "lg",
                          onClick: we,
                          onKeydown: q(we, ["enter"]),
                        },
                        {
                          default: f(() => [
                            A.skipLastStep
                              ? (g(),
                                v(
                                  "span",
                                  Ht,
                                  a(t.$t("auth.forgetPassword.continue")),
                                  1
                                ))
                              : (g(),
                                v(
                                  "span",
                                  zt,
                                  a(t.$t("auth.signUp.continueToDashboard")),
                                  1
                                )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]))
                  : O("", !0),
                u(
                  $,
                  {
                    error: e(H),
                    "onUpdate:error":
                      l[9] || (l[9] = (p) => (V(H) ? (H.value = p) : null)),
                    "message-text": e(R),
                  },
                  null,
                  8,
                  ["error", "message-text"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  },
  qt = { class: "flex justify-between" },
  Jt = {
    key: 0,
    class: "material-symbols-rounded cursor-pointer text-gray-600",
  },
  Zt = { key: 1, class: "text-sm-regular text-gray-600" },
  Qt = "lg:display-sm-bold display-xs-bold text-gray-900 mt-lg-6 mt-5",
  Xt =
    "lg:text-md-regular text-sm-regular text-gray-600 mt-lg-3 mt-2 mb-lg-6 mb-5 tracking-normal",
  is = {
    __name: "index",
    props: {
      dialogType: { type: String, default: "" },
      skipLastStep: { type: Boolean, default: !1 },
      callback: { type: Function, default: null },
    },
    emits: ["close"],
    setup(K, { emit: le }) {
      const b = ve(),
        T = le,
        N = i({ [I.SIGN_IN]: Ie(_t), [I.SIGN_UP]: Ie(Yt) }),
        Q = i(null),
        L = i(!1),
        P = K;
      ge(() => {
        c();
      });
      const c = () => {
          b.updateCurrentDialog(P.dialogType), b.updateMode(P.dialogType);
        },
        W = (E) => {
          L.value = E;
        },
        J = () => {
          Q.value.backClicked();
        },
        j = () => {
          T("close");
        };
      return (E, C) => (
        g(),
        v("div", null, [
          s("div", qt, [
            s("div", { class: "flex align-center", onClick: J }, [
              e(L) ? (g(), v("span", Jt, " arrow_back ")) : O("", !0),
              e(L) ? (g(), v("span", Zt, a(E.$t("auth.back")), 1)) : O("", !0),
            ]),
            s("div", null, [
              u(
                et,
                { class: "cursor-pointer w-24", color: "gray-600", onClick: j },
                {
                  default: f(() => C[0] || (C[0] = [me(" mdi-window-close ")])),
                  _: 1,
                }
              ),
            ]),
          ]),
          e(b).currentDialog
            ? (g(),
              tt(
                st(e(N)[e(b).currentDialog]),
                {
                  key: 0,
                  ref_key: "myChild",
                  ref: Q,
                  "title-class": Qt,
                  "skip-last-step": P.skipLastStep,
                  callback: P.callback,
                  "content-class": Xt,
                  onToggleBack: W,
                  onClose: j,
                },
                null,
                40,
                ["skip-last-step", "callback"]
              ))
            : O("", !0),
        ])
      );
    },
  };
export { is as _ };
