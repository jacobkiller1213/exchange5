import { _ as Ne } from "./bNepudp1.js";
import {
  c4 as Re,
  cb as $e,
  s as g,
  cc as Ae,
  br as We,
  c8 as Ye,
  $ as X,
  r as O,
  R as N,
  as as Oe,
  j as A,
  o as Q,
  k as le,
  a0 as F,
  a1 as ke,
  aw as q,
  ai as G,
  a5 as U,
  f as m,
  a2 as J,
  aq as Se,
  a7 as oe,
  a8 as Ve,
  af as ze,
  cd as je,
  ar as Xe,
  aJ as qe,
  a9 as Fe,
  ab as Ue,
  aa as Ze,
  ah as me,
  ap as Pe,
  aj as Ge,
  bj as ae,
  F as Z,
  ag as Je,
  bF as Qe,
  q as Ke,
  i as et,
  A as tt,
  c5 as at,
  ad as lt,
  l as ot,
  a as I,
  h as K,
  w as L,
  b as i,
  c as H,
  e as ee,
  u as B,
  n as Y,
  t as R,
  p as te,
  g as $,
  I as fe,
  ce as he,
  c9 as ge,
  X as ye,
  aL as nt,
  H as st,
  Q as pe,
  _ as rt,
} from "./Sm2mCfDE.js";
import { m as it, V as we, G as ut } from "./DXH68qfu.js";
import { _ as ct } from "./DlAUqK2U.js";
import { m as dt, V as Le, e as vt, o as mt } from "./ZfNZiyCm.js";
import { m as ft, b as ht, u as gt } from "./C10dbX3k.js";
import { b as yt, c as pt, V as wt } from "./CMuUTlS2.js";
import { m as Ie, a as Be, b as bt, c as xt, u as _t } from "./1WQF9nlZ.js";
import { m as Ce, u as Te, a as kt, b as St } from "./B8TxTyak.js";
import { c as Vt, t as Pt } from "./xUo5sKGi.js";
import { u as ne } from "./BAjJeBkK.js";
import { V as Ee } from "./CAlkWbu_.js";
import { V as Lt, a as It } from "./BXNHQyJN.js";
import "./B_2FkP8S.js";
import "./BIp5-3EK.js";
import "./DAcvVGJe.js";
import "./DIGJciYJ.js";
import "./D8ayu7rP.js";
import "./C2Qfbq92.js";
import "./CI8VFsgH.js";
const be = Ye({ componentName: "NuxtLinkLocale" }),
  Bt = Re({
    name: "NuxtLinkLocale",
    props: {
      ...be.props,
      locale: { type: String, default: void 0, required: !1 },
    },
    setup(e, { slots: f }) {
      const n = $e(),
        w = g(() => {
          const a = e.to ?? e.href;
          return a != null ? n(a, e.locale) : a;
        }),
        t = g(() => {
          if (e.external || (e.target && e.target !== "_self")) return !0;
          const a = e.to ?? e.href;
          return typeof a == "object"
            ? !1
            : a === "" || a == null || Ae(a, { acceptRelative: !0 });
        }),
        l = () => {
          const a = { ...e };
          return t.value || (a.to = w.value), delete a.href, delete a.locale, a;
        };
      return () => We(be, l(), f.default);
    },
  }),
  Ct = X(
    {
      scrollTarget: { type: String },
      scrollThreshold: { type: [String, Number], default: 300 },
    },
    "scroll"
  );
function Tt(e) {
  let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canScroll: n } = f;
  let w = 0,
    t = 0;
  const l = O(null),
    a = N(0),
    v = N(0),
    y = N(0),
    k = N(!1),
    h = N(!1),
    p = g(() => Number(e.scrollThreshold)),
    V = g(() => Oe((p.value - a.value) / p.value || 0)),
    S = () => {
      const c = l.value;
      if (!c || (n && !n.value)) return;
      (w = a.value), (a.value = "window" in c ? c.pageYOffset : c.scrollTop);
      const x =
        c instanceof Window
          ? document.documentElement.scrollHeight
          : c.scrollHeight;
      if (t !== x) {
        t = x;
        return;
      }
      (h.value = a.value < w), (y.value = Math.abs(a.value - p.value));
    };
  return (
    A(h, () => {
      v.value = v.value || a.value;
    }),
    A(k, () => {
      v.value = 0;
    }),
    Q(() => {
      A(
        () => e.scrollTarget,
        (c) => {
          var E;
          const x = c ? document.querySelector(c) : window;
          x &&
            x !== l.value &&
            ((E = l.value) == null || E.removeEventListener("scroll", S),
            (l.value = x),
            l.value.addEventListener("scroll", S, { passive: !0 }));
        },
        { immediate: !0 }
      );
    }),
    le(() => {
      var c;
      (c = l.value) == null || c.removeEventListener("scroll", S);
    }),
    n && A(n, S, { immediate: !0 }),
    {
      scrollThreshold: p,
      currentScroll: a,
      currentThreshold: y,
      isScrollActive: k,
      scrollRatio: V,
      isScrollingUp: h,
      savedScroll: v,
    }
  );
}
const Et = X(
    {
      scrollBehavior: String,
      modelValue: { type: Boolean, default: !0 },
      location: {
        type: String,
        default: "top",
        validator: (e) => ["top", "bottom"].includes(e),
      },
      ...it(),
      ...Ie(),
      ...Ct(),
      height: { type: [Number, String], default: 64 },
    },
    "VAppBar"
  ),
  Dt = F()({
    name: "VAppBar",
    props: Et(),
    emits: { "update:modelValue": (e) => !0 },
    setup(e, f) {
      let { slots: n } = f;
      const w = O(),
        t = ke(e, "modelValue"),
        l = g(() => {
          var C;
          const b = new Set(
            ((C = e.scrollBehavior) == null ? void 0 : C.split(" ")) ?? []
          );
          return {
            hide: b.has("hide"),
            fullyHide: b.has("fully-hide"),
            inverted: b.has("inverted"),
            collapse: b.has("collapse"),
            elevate: b.has("elevate"),
            fadeImage: b.has("fade-image"),
          };
        }),
        a = g(() => {
          const b = l.value;
          return (
            b.hide ||
            b.fullyHide ||
            b.inverted ||
            b.collapse ||
            b.elevate ||
            b.fadeImage ||
            !t.value
          );
        }),
        {
          currentScroll: v,
          scrollThreshold: y,
          isScrollingUp: k,
          scrollRatio: h,
        } = Tt(e, { canScroll: a }),
        p = g(() => l.value.hide || l.value.fullyHide),
        V = g(
          () =>
            e.collapse ||
            (l.value.collapse &&
              (l.value.inverted ? h.value > 0 : h.value === 0))
        ),
        S = g(
          () =>
            e.flat ||
            (l.value.fullyHide && !t.value) ||
            (l.value.elevate &&
              (l.value.inverted ? v.value > 0 : v.value === 0))
        ),
        c = g(() =>
          l.value.fadeImage
            ? l.value.inverted
              ? 1 - h.value
              : h.value
            : void 0
        ),
        x = g(() => {
          var W, d;
          if (l.value.hide && l.value.inverted) return 0;
          const b = ((W = w.value) == null ? void 0 : W.contentHeight) ?? 0,
            C = ((d = w.value) == null ? void 0 : d.extensionHeight) ?? 0;
          return p.value
            ? v.value < y.value || l.value.fullyHide
              ? b + C
              : b
            : b + C;
        });
      q(
        g(() => !!e.scrollBehavior),
        () => {
          Se(() => {
            p.value
              ? l.value.inverted
                ? (t.value = v.value > y.value)
                : (t.value = k.value || v.value < y.value)
              : (t.value = !0);
          });
        }
      );
      const { ssrBootStyles: E } = ne(),
        { layoutItemStyles: M } = Be({
          id: e.name,
          order: g(() => parseInt(e.order, 10)),
          position: G(e, "location"),
          layoutSize: x,
          elementSize: N(void 0),
          active: t,
          absolute: G(e, "absolute"),
        });
      return (
        U(() => {
          const b = we.filterProps(e);
          return m(
            we,
            J(
              {
                ref: w,
                class: [
                  "v-app-bar",
                  { "v-app-bar--bottom": e.location === "bottom" },
                  e.class,
                ],
                style: [
                  {
                    ...M.value,
                    "--v-toolbar-image-opacity": c.value,
                    height: void 0,
                    ...E.value,
                  },
                  e.style,
                ],
              },
              b,
              { collapse: V.value, flat: S.value }
            ),
            n
          );
        }),
        {}
      );
    },
  }),
  Ht = X({ ...dt({ icon: "$menu", variant: "text" }) }, "VAppBarNavIcon"),
  Mt = F()({
    name: "VAppBarNavIcon",
    props: Ht(),
    setup(e, f) {
      let { slots: n } = f;
      return U(() => m(Le, J(e, { class: ["v-app-bar-nav-icon"] }), n)), {};
    },
  }),
  Nt = X({ ...oe(), ...Ce(), ...bt() }, "VLayout"),
  Rt = F()({
    name: "VLayout",
    props: Nt(),
    setup(e, f) {
      let { slots: n } = f;
      const {
          layoutClasses: w,
          layoutStyles: t,
          getLayoutItem: l,
          items: a,
          layoutRef: v,
        } = xt(e),
        { dimensionStyles: y } = Te(e);
      return (
        U(() => {
          var k;
          return m(
            "div",
            {
              ref: v,
              class: [w.value, e.class],
              style: [y.value, t.value, e.style],
            },
            [(k = n.default) == null ? void 0 : k.call(n)]
          );
        }),
        { getLayoutItem: l, items: a }
      );
    },
  }),
  $t = X(
    { scrollable: Boolean, ...oe(), ...Ce(), ...Ve({ tag: "main" }) },
    "VMain"
  ),
  At = F()({
    name: "VMain",
    props: $t(),
    setup(e, f) {
      let { slots: n } = f;
      const { dimensionStyles: w } = Te(e),
        { mainStyles: t } = _t(),
        { ssrBootStyles: l } = ne();
      return (
        U(() =>
          m(
            e.tag,
            {
              class: [
                "v-main",
                { "v-main--scrollable": e.scrollable },
                e.class,
              ],
              style: [t.value, l.value, w.value, e.style],
            },
            {
              default: () => {
                var a, v;
                return [
                  e.scrollable
                    ? m("div", { class: "v-main__scroller" }, [
                        (a = n.default) == null ? void 0 : a.call(n),
                      ])
                    : (v = n.default) == null
                    ? void 0
                    : v.call(n),
                ];
              },
            }
          )
        ),
        {}
      );
    },
  });
function Wt(e) {
  let { rootEl: f, isSticky: n, layoutItemStyles: w } = e;
  const t = N(!1),
    l = N(0),
    a = g(() => {
      const k = typeof t.value == "boolean" ? "top" : t.value;
      return [
        n.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0,
        t.value ? { [k]: ze(l.value) } : { top: w.value.top },
      ];
    });
  Q(() => {
    A(
      n,
      (k) => {
        k
          ? window.addEventListener("scroll", y, { passive: !0 })
          : window.removeEventListener("scroll", y);
      },
      { immediate: !0 }
    );
  }),
    le(() => {
      window.removeEventListener("scroll", y);
    });
  let v = 0;
  function y() {
    const k = v > window.scrollY ? "up" : "down",
      h = f.value.getBoundingClientRect(),
      p = parseFloat(w.value.top ?? 0),
      V = window.scrollY - Math.max(0, l.value - p),
      S = h.height + Math.max(l.value, p) - window.scrollY - window.innerHeight,
      c =
        parseFloat(
          getComputedStyle(f.value).getPropertyValue("--v-body-scroll-y")
        ) || 0;
    h.height < window.innerHeight - p
      ? ((t.value = "top"), (l.value = p))
      : (k === "up" && t.value === "bottom") ||
        (k === "down" && t.value === "top")
      ? ((l.value = window.scrollY + h.top - c), (t.value = !0))
      : k === "down" && S <= 0
      ? ((l.value = 0), (t.value = "bottom"))
      : k === "up" &&
        V <= 0 &&
        (c
          ? t.value !== "top" && ((l.value = -V + c + p), (t.value = "top"))
          : ((l.value = h.top + V), (t.value = "top"))),
      (v = window.scrollY);
  }
  return { isStuck: t, stickyStyles: a };
}
const Yt = 100,
  Ot = 20;
function xe(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function _e(e) {
  if (e.length < 2) return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let f = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t) continue;
    const w = xe(f),
      t = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    (f += (t - w) * Math.abs(t)), n === e.length - 1 && (f *= 0.5);
  }
  return xe(f) * 1e3;
}
function zt() {
  const e = {};
  function f(t) {
    Array.from(t.changedTouches).forEach((l) => {
      (e[l.identifier] ?? (e[l.identifier] = new je(Ot))).push([
        t.timeStamp,
        l,
      ]);
    });
  }
  function n(t) {
    Array.from(t.changedTouches).forEach((l) => {
      delete e[l.identifier];
    });
  }
  function w(t) {
    var k;
    const l = (k = e[t]) == null ? void 0 : k.values().reverse();
    if (!l) throw new Error(`No samples for touch id ${t}`);
    const a = l[0],
      v = [],
      y = [];
    for (const h of l) {
      if (a[0] - h[0] > Yt) break;
      v.push({ t: h[0], d: h[1].clientX }),
        y.push({ t: h[0], d: h[1].clientY });
    }
    return {
      x: _e(v),
      y: _e(y),
      get direction() {
        const { x: h, y: p } = this,
          [V, S] = [Math.abs(h), Math.abs(p)];
        return V > S && h >= 0
          ? "right"
          : V > S && h <= 0
          ? "left"
          : S > V && p >= 0
          ? "down"
          : S > V && p <= 0
          ? "up"
          : jt();
      },
    };
  }
  return { addMovement: f, endTouch: n, getVelocity: w };
}
function jt() {
  throw new Error();
}
function Xt(e) {
  let {
    el: f,
    isActive: n,
    isTemporary: w,
    width: t,
    touchless: l,
    position: a,
  } = e;
  Q(() => {
    window.addEventListener("touchstart", b, { passive: !0 }),
      window.addEventListener("touchmove", C, { passive: !1 }),
      window.addEventListener("touchend", W, { passive: !0 });
  }),
    le(() => {
      window.removeEventListener("touchstart", b),
        window.removeEventListener("touchmove", C),
        window.removeEventListener("touchend", W);
    });
  const v = g(() => ["left", "right"].includes(a.value)),
    { addMovement: y, endTouch: k, getVelocity: h } = zt();
  let p = !1;
  const V = N(!1),
    S = N(0),
    c = N(0);
  let x;
  function E(o, r) {
    return (
      (a.value === "left"
        ? o
        : a.value === "right"
        ? document.documentElement.clientWidth - o
        : a.value === "top"
        ? o
        : a.value === "bottom"
        ? document.documentElement.clientHeight - o
        : j()) - (r ? t.value : 0)
    );
  }
  function M(o) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const u =
      a.value === "left"
        ? (o - c.value) / t.value
        : a.value === "right"
        ? (document.documentElement.clientWidth - o - c.value) / t.value
        : a.value === "top"
        ? (o - c.value) / t.value
        : a.value === "bottom"
        ? (document.documentElement.clientHeight - o - c.value) / t.value
        : j();
    return r ? Math.max(0, Math.min(1, u)) : u;
  }
  function b(o) {
    if (l.value) return;
    const r = o.changedTouches[0].clientX,
      u = o.changedTouches[0].clientY,
      _ = 25,
      s =
        a.value === "left"
          ? r < _
          : a.value === "right"
          ? r > document.documentElement.clientWidth - _
          : a.value === "top"
          ? u < _
          : a.value === "bottom"
          ? u > document.documentElement.clientHeight - _
          : j(),
      P =
        n.value &&
        (a.value === "left"
          ? r < t.value
          : a.value === "right"
          ? r > document.documentElement.clientWidth - t.value
          : a.value === "top"
          ? u < t.value
          : a.value === "bottom"
          ? u > document.documentElement.clientHeight - t.value
          : j());
    (s || P || (n.value && w.value)) &&
      ((x = [r, u]),
      (c.value = E(v.value ? r : u, n.value)),
      (S.value = M(v.value ? r : u)),
      (p = c.value > -20 && c.value < 80),
      k(o),
      y(o));
  }
  function C(o) {
    const r = o.changedTouches[0].clientX,
      u = o.changedTouches[0].clientY;
    if (p) {
      if (!o.cancelable) {
        p = !1;
        return;
      }
      const s = Math.abs(r - x[0]),
        P = Math.abs(u - x[1]);
      (v.value ? s > P && s > 3 : P > s && P > 3)
        ? ((V.value = !0), (p = !1))
        : (v.value ? P : s) > 3 && (p = !1);
    }
    if (!V.value) return;
    o.preventDefault(), y(o);
    const _ = M(v.value ? r : u, !1);
    (S.value = Math.max(0, Math.min(1, _))),
      _ > 1
        ? (c.value = E(v.value ? r : u, !0))
        : _ < 0 && (c.value = E(v.value ? r : u, !1));
  }
  function W(o) {
    if (((p = !1), !V.value)) return;
    y(o), (V.value = !1);
    const r = h(o.changedTouches[0].identifier),
      u = Math.abs(r.x),
      _ = Math.abs(r.y);
    (v.value ? u > _ && u > 400 : _ > u && _ > 3)
      ? (n.value =
          r.direction ===
          ({ left: "right", right: "left", top: "down", bottom: "up" }[
            a.value
          ] || j()))
      : (n.value = S.value > 0.5);
  }
  const d = g(() =>
    V.value
      ? {
          transform:
            a.value === "left"
              ? `translateX(calc(-100% + ${S.value * t.value}px))`
              : a.value === "right"
              ? `translateX(calc(100% - ${S.value * t.value}px))`
              : a.value === "top"
              ? `translateY(calc(-100% + ${S.value * t.value}px))`
              : a.value === "bottom"
              ? `translateY(calc(100% - ${S.value * t.value}px))`
              : j(),
          transition: "none",
        }
      : void 0
  );
  return (
    q(V, () => {
      var u, _;
      const o = ((u = f.value) == null ? void 0 : u.style.transform) ?? null,
        r = ((_ = f.value) == null ? void 0 : _.style.transition) ?? null;
      Se(() => {
        var s, P, T, z;
        (P = f.value) == null ||
          P.style.setProperty(
            "transform",
            ((s = d.value) == null ? void 0 : s.transform) || "none"
          ),
          (z = f.value) == null ||
            z.style.setProperty(
              "transition",
              ((T = d.value) == null ? void 0 : T.transition) || null
            );
      }),
        Xe(() => {
          var s, P;
          (s = f.value) == null || s.style.setProperty("transform", o),
            (P = f.value) == null || P.style.setProperty("transition", r);
        });
    }),
    { isDragging: V, dragProgress: S, dragStyles: d }
  );
}
function j() {
  throw new Error();
}
const qt = ["start", "end", "left", "right", "top", "bottom"],
  Ft = X(
    {
      color: String,
      disableResizeWatcher: Boolean,
      disableRouteWatcher: Boolean,
      expandOnHover: Boolean,
      floating: Boolean,
      modelValue: { type: Boolean, default: null },
      permanent: Boolean,
      rail: { type: Boolean, default: null },
      railWidth: { type: [Number, String], default: 56 },
      scrim: { type: [Boolean, String], default: !0 },
      image: String,
      temporary: Boolean,
      persistent: Boolean,
      touchless: Boolean,
      width: { type: [Number, String], default: 256 },
      location: {
        type: String,
        default: "start",
        validator: (e) => qt.includes(e),
      },
      sticky: Boolean,
      ...vt(),
      ...oe(),
      ...ft(),
      ...qe({ mobile: null }),
      ...yt(),
      ...Ie(),
      ...kt(),
      ...Ve({ tag: "nav" }),
      ...Fe(),
    },
    "VNavigationDrawer"
  ),
  Ut = F()({
    name: "VNavigationDrawer",
    props: Ft(),
    emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 },
    setup(e, f) {
      let { attrs: n, emit: w, slots: t } = f;
      const { isRtl: l } = Ue(),
        { themeClasses: a } = Ze(e),
        { borderClasses: v } = mt(e),
        { backgroundColorClasses: y, backgroundColorStyles: k } = me(
          G(e, "color")
        ),
        { elevationClasses: h } = pt(e),
        { displayClasses: p, mobile: V } = Pe(e),
        { roundedClasses: S } = St(e),
        c = Vt(),
        x = ke(e, "modelValue", null, (D) => !!D),
        { ssrBootStyles: E } = ne(),
        { scopeId: M } = ht(),
        b = O(),
        C = N(!1),
        { runOpenDelay: W, runCloseDelay: d } = gt(e, (D) => {
          C.value = D;
        }),
        o = g(() =>
          e.rail && e.expandOnHover && C.value
            ? Number(e.width)
            : Number(e.rail ? e.railWidth : e.width)
        ),
        r = g(() => Pt(e.location, l.value)),
        u = g(() => e.persistent),
        _ = g(() => !e.permanent && (V.value || e.temporary)),
        s = g(() => e.sticky && !_.value && r.value !== "bottom");
      q(
        () => e.expandOnHover && e.rail != null,
        () => {
          A(C, (D) => w("update:rail", !D));
        }
      ),
        q(
          () => !e.disableResizeWatcher,
          () => {
            A(_, (D) => !e.permanent && Je(() => (x.value = !D)));
          }
        ),
        q(
          () => !e.disableRouteWatcher && !!c,
          () => {
            A(c.currentRoute, () => _.value && (x.value = !1));
          }
        ),
        A(
          () => e.permanent,
          (D) => {
            D && (x.value = !0);
          }
        ),
        e.modelValue == null && !_.value && (x.value = e.permanent || !V.value);
      const { isDragging: P, dragProgress: T } = Xt({
          el: b,
          isActive: x,
          isTemporary: _,
          width: o,
          touchless: G(e, "touchless"),
          position: r,
        }),
        z = g(() => {
          const D = _.value
            ? 0
            : e.rail && e.expandOnHover
            ? Number(e.railWidth)
            : o.value;
          return P.value ? D * T.value : D;
        }),
        se = g(() => (["top", "bottom"].includes(e.location) ? 0 : o.value)),
        { layoutItemStyles: re, layoutItemScrimStyles: De } = Be({
          id: e.name,
          order: g(() => parseInt(e.order, 10)),
          position: r,
          layoutSize: z,
          elementSize: se,
          active: g(() => x.value || P.value),
          disableTransitions: g(() => P.value),
          absolute: g(
            () => e.absolute || (s.value && typeof ie.value != "string")
          ),
        }),
        { isStuck: ie, stickyStyles: He } = Wt({
          rootEl: b,
          isSticky: s,
          layoutItemStyles: re,
        }),
        ue = me(g(() => (typeof e.scrim == "string" ? e.scrim : null))),
        Me = g(() => ({
          ...(P.value
            ? { opacity: T.value * 0.2, transition: "none" }
            : void 0),
          ...De.value,
        }));
      return (
        Ge({ VList: { bgColor: "transparent" } }),
        U(() => {
          const D = t.image || e.image;
          return m(Z, null, [
            m(
              e.tag,
              J(
                {
                  ref: b,
                  onMouseenter: W,
                  onMouseleave: d,
                  class: [
                    "v-navigation-drawer",
                    `v-navigation-drawer--${r.value}`,
                    {
                      "v-navigation-drawer--expand-on-hover": e.expandOnHover,
                      "v-navigation-drawer--floating": e.floating,
                      "v-navigation-drawer--is-hovering": C.value,
                      "v-navigation-drawer--rail": e.rail,
                      "v-navigation-drawer--temporary": _.value,
                      "v-navigation-drawer--persistent": u.value,
                      "v-navigation-drawer--active": x.value,
                      "v-navigation-drawer--sticky": s.value,
                    },
                    a.value,
                    y.value,
                    v.value,
                    p.value,
                    h.value,
                    S.value,
                    e.class,
                  ],
                  style: [
                    k.value,
                    re.value,
                    E.value,
                    He.value,
                    e.style,
                    ["top", "bottom"].includes(r.value)
                      ? { height: "auto" }
                      : {},
                  ],
                },
                M,
                n
              ),
              {
                default: () => {
                  var ce, de, ve;
                  return [
                    D &&
                      m(
                        "div",
                        { key: "image", class: "v-navigation-drawer__img" },
                        [
                          t.image
                            ? m(
                                wt,
                                {
                                  key: "image-defaults",
                                  disabled: !e.image,
                                  defaults: {
                                    VImg: {
                                      alt: "",
                                      cover: !0,
                                      height: "inherit",
                                      src: e.image,
                                    },
                                  },
                                },
                                t.image
                              )
                            : m(
                                Ee,
                                {
                                  key: "image-img",
                                  alt: "",
                                  cover: !0,
                                  height: "inherit",
                                  src: e.image,
                                },
                                null
                              ),
                        ]
                      ),
                    t.prepend &&
                      m("div", { class: "v-navigation-drawer__prepend" }, [
                        (ce = t.prepend) == null ? void 0 : ce.call(t),
                      ]),
                    m("div", { class: "v-navigation-drawer__content" }, [
                      (de = t.default) == null ? void 0 : de.call(t),
                    ]),
                    t.append &&
                      m("div", { class: "v-navigation-drawer__append" }, [
                        (ve = t.append) == null ? void 0 : ve.call(t),
                      ]),
                  ];
                },
              }
            ),
            m(
              ae,
              { name: "fade-transition" },
              {
                default: () => [
                  _.value &&
                    (P.value || x.value) &&
                    !!e.scrim &&
                    m(
                      "div",
                      J(
                        {
                          class: [
                            "v-navigation-drawer__scrim",
                            ue.backgroundColorClasses.value,
                          ],
                          style: [Me.value, ue.backgroundColorStyles.value],
                          onClick: () => {
                            u.value || (x.value = !1);
                          },
                        },
                        M
                      ),
                      null
                    ),
                ],
              }
            ),
          ]);
        }),
        { isStuck: ie }
      );
    },
  }),
  Zt = { class: "flex items-center py-0 mt-4 xl:mt-8 mb-5 xl:mb-6" },
  Gt = { class: "flex flex-col items-start justify-normal gap-1" },
  Jt = ["onClick"],
  Qt = { class: "flex justify-between w-full" },
  Kt = { class: "flex items-center" },
  ea = {
    class: "material-symbols-rounded text-gray-500 mx-auto md:!mx-0 w-[24px]",
  },
  ta = { class: "text-gray-700 ml-2 text-sm-semibold" },
  aa = { class: "flex items-center gap-2" },
  la = {
    key: 0,
    class:
      "bg-success-50 flex items-center gap-1.5 !py-0.5 rounded-2xl text-success-700 !text-sm-medium px-2.5",
  },
  oa = { key: 0, class: "bg-white" },
  na = ["onClick"],
  sa = {
    class:
      "!ml-1 pl-9 items-center gap-2 flex py-2 text-center hover:bg-gray-50 cursor-pointer transition-all rounded-md",
  },
  ra = { class: "material-symbols-rounded text-gray-500 mx-0 w-[24px]" },
  ia = { class: "px-4 mb-4 h-[216px]" },
  ua = { class: "h-[96px]" },
  ca = ["onClick"],
  da = { class: "flex justify-between w-full" },
  va = { class: "flex items-center" },
  ma = { class: "text-gray-900 ml-2 text-sm-semibold" },
  fa = { key: 0, class: "mt-2" },
  ha = { class: "text-gray-700 text-sm-semibold" },
  ga = { class: "bg-white py-8" },
  ya = { key: 0 },
  pa = { class: "logoutBtn flex mt-6 gap-3 cursor-pointer align-center" },
  wa = { key: 1, class: "p-2 border border-gray-800 rounded-pill" },
  ba = { class: "flex gap-4 items-start" },
  xa = { class: "text-sm-semibold text-gray-700" },
  _a = { class: "truncate max-w-[150px] text-sm-regular text-gray-600" },
  ka = { class: "flex items-center px-4 w-full justify-between" },
  Sa = { key: 1, class: "!flex gap-8 w-full" },
  Va = { class: "pt-20 pb-8 xl:!py-8 flex-grow" },
  Pa = { class: "!max-w-[66rem] !min-w-[66rem] mx-auto" },
  La = { key: 2, class: "w-full p-0 md:p-8 mb-8" },
  Ia = {
    __name: "profile",
    setup(e) {
      const f = Qe(),
        n = Ke(),
        { locale: w } = et(),
        { smAndDown: t } = Pe(),
        l = O(null),
        a = O(null),
        v = tt(),
        y = O(!t.value),
        k = at(),
        h = O(null),
        p = g(() => (window == null ? void 0 : window.innerWidth) > 769);
      A(t, (d) => {
        y.value = !d;
      }),
        Q(() => V());
      const V = () => {
          S();
        },
        S = () => {
          const o = v.path.toLowerCase().replace(/^\/[^/]+\//, "");
          if (o === "dashboard") {
            c(x[0].name);
            return;
          }
          if (o.includes("dashboard/wallet")) {
            const r = x.find((u) => u.name === "Wallet");
            c(r.name),
              r.children.find((u) => {
                u.route.toLowerCase().includes(o) && (a.value = u.name);
              });
            return;
          }
          x.find((r) => {
            r.route && r.route.toLowerCase().includes(o) && c(r.name);
          });
        },
        c = (d) => {
          l.value = l.value === d ? null : d;
        },
        x = [
          { name: "Dashboard", icon: "home", route: "/dashboard" },
          { name: "Orders", icon: "receipt_long", route: "/dashboard/orders" },
          {
            name: "Wallet",
            icon: "account_balance_wallet",
            isNew: !0,
            children: [
              { name: "Overview", icon: "wallet", route: "/dashboard/wallet" },
              {
                name: "Deposit",
                icon: "south_east",
                route: "/dashboard/wallet/deposit?currency=usdttrc20",
              },
              {
                name: "Withdraw",
                icon: "north_west",
                route: "/dashboard/wallet/withdraw?currency=usdttrc20",
              },
              {
                name: "Transaction",
                icon: "monitoring",
                route: "/dashboard/wallet/transaction?trans_type=deposit",
              },
            ],
          },
          {
            name: "Affiliate",
            icon: "attach_money",
            route: "/dashboard/affiliates",
          },
          { name: "discount", icon: "percent", route: "/dashboard/discount" },
          {
            name: "Account",
            icon: "settings",
            route: "/dashboard/account?tab=edit_profile",
          },
        ],
        E = [
          {
            name: "locale",
            img: "statics/en.svg",
            children: [
              {
                name: "English",
                route: k("En"),
                external: !0,
                isActive: !1,
                img: "statics/en.svg",
                imgSize: { width: "24px", height: "24px" },
              },
              {
                name: "Русский",
                route: k("Ru"),
                external: !0,
                isActive: !1,
                img: "statics/ru.svg",
                imgSize: { width: "24px", height: "24px" },
              },
            ],
          },
        ],
        M = g(() =>
          w.value === "Ru"
            ? E[0].children.find((d) => d.name === "English")
            : E[0].children.find((d) => d.name === "Русский")
        ),
        b = (d, o, r, u) => {
          h.value.openDialog(d, o, r, u);
        },
        C = () => {
          h.value.closeDialog();
        },
        W = async () => {
          await f.logout(), (window.location.href = "/");
        };
      return (
        lt("dialog", { open: b, close: C }),
        ot({ bodyAttrs: { class: "bg-gray-50" } }),
        (d, o) => {
          const r = Ne,
            u = rt,
            _ = Bt;
          return (
            I(),
            K(
              Rt,
              { class: "rounded-md" },
              {
                default: L(() => [
                  m(
                    Ut,
                    {
                      modelValue: y.value,
                      "onUpdate:modelValue":
                        o[1] || (o[1] = (s) => (y.value = s)),
                      width: "313",
                    },
                    {
                      default: L(() => [
                        m(
                          Lt,
                          {
                            class:
                              "py-0 !relative overflow-auto flex flex-col justify-between h-full",
                          },
                          {
                            default: L(() => [
                              m(
                                It,
                                { class: "px-4" },
                                {
                                  default: L(() => [
                                    i("div", Zt, [
                                      m(
                                        "a",
                                        { href: "/" },
                                        {
                                          default: L(() => [
                                            m(r, {
                                              src: "logos/jolixo-logo.svg",
                                              class: "w-[120px] h-[25px]",
                                              alt: "",
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["to"]
                                      ),
                                    ]),
                                    i("div", Gt, [
                                      (I(),
                                      H(
                                        Z,
                                        null,
                                        ee(x, (s, P) =>
                                          m(
                                            u,
                                            {
                                              key: P,
                                              to: s.route
                                                ? d.localePath(s.route)
                                                : B(v).fullPath,
                                              prefetch: "false",
                                              class: Y([
                                                l.value === s.name &&
                                                  "bg-gray-50",
                                                "w-full rounded-md",
                                              ]),
                                            },
                                            {
                                              default: L(() => [
                                                i(
                                                  "div",
                                                  {
                                                    class: Y([
                                                      [
                                                        B(v).path === s.link &&
                                                          "bg-gray-50",
                                                      ],
                                                      "items-center px-3 gap-2 flex justify-between py-2 text-center hover:bg-gray-50 cursor-pointer transition-all rounded-sm",
                                                    ]),
                                                    onClick: (T) => c(s.name),
                                                  },
                                                  [
                                                    i("div", Qt, [
                                                      i("div", Kt, [
                                                        i("div", null, [
                                                          i(
                                                            "span",
                                                            ea,
                                                            R(s.icon),
                                                            1
                                                          ),
                                                        ]),
                                                        i(
                                                          "span",
                                                          ta,
                                                          R(
                                                            s.name === "locale"
                                                              ? B(w)
                                                              : d.$t(
                                                                  `profileDashboard.layout.${s.name}`
                                                                )
                                                          ),
                                                          1
                                                        ),
                                                      ]),
                                                      i("div", aa, [
                                                        s != null && s.isNew
                                                          ? (I(),
                                                            H("div", la, [
                                                              o[4] ||
                                                                (o[4] = i(
                                                                  "div",
                                                                  {
                                                                    class:
                                                                      "!w-1.5 !h-1.5 rounded !bg-success-500",
                                                                  },
                                                                  null,
                                                                  -1
                                                                )),
                                                              te(
                                                                " " +
                                                                  R(
                                                                    d.$t(
                                                                      "profileDashboard.layout.new"
                                                                    )
                                                                  ),
                                                                1
                                                              ),
                                                            ]))
                                                          : $("", !0),
                                                        s.children
                                                          ? (I(),
                                                            H(
                                                              "span",
                                                              {
                                                                key: 1,
                                                                class: Y([
                                                                  "material-symbols-rounded text-gray-500 mx-0 w-[24px]",
                                                                  l.value ===
                                                                  s.name
                                                                    ? "rotate-180"
                                                                    : "",
                                                                ]),
                                                              },
                                                              " keyboard_arrow_down ",
                                                              2
                                                            ))
                                                          : $("", !0),
                                                      ]),
                                                    ]),
                                                  ],
                                                  10,
                                                  Jt
                                                ),
                                                s.children
                                                  ? (I(),
                                                    H("div", oa, [
                                                      m(
                                                        ae,
                                                        { name: "dropdown" },
                                                        {
                                                          default: L(() => [
                                                            fe(
                                                              i(
                                                                "div",
                                                                {
                                                                  class:
                                                                    "overflow-hidden",
                                                                  style: he({
                                                                    maxHeight:
                                                                      l.value ===
                                                                      s.name
                                                                        ? "500px"
                                                                        : "0px",
                                                                  }),
                                                                },
                                                                [
                                                                  i(
                                                                    "div",
                                                                    null,
                                                                    [
                                                                      (I(!0),
                                                                      H(
                                                                        Z,
                                                                        null,
                                                                        ee(
                                                                          s.children,
                                                                          (
                                                                            T,
                                                                            z
                                                                          ) => (
                                                                            I(),
                                                                            H(
                                                                              "div",
                                                                              {
                                                                                key: z,
                                                                                class:
                                                                                  Y(
                                                                                    [
                                                                                      "w-full mt-1 rounded-md",
                                                                                      {
                                                                                        "bg-gray-50":
                                                                                          a.value ===
                                                                                          T.name,
                                                                                      },
                                                                                    ]
                                                                                  ),
                                                                                onClick:
                                                                                  (
                                                                                    se
                                                                                  ) =>
                                                                                    (a.value =
                                                                                      T.name),
                                                                              },
                                                                              [
                                                                                m(
                                                                                  _,
                                                                                  {
                                                                                    to: T.route,
                                                                                    class:
                                                                                      "w-full",
                                                                                  },
                                                                                  {
                                                                                    default:
                                                                                      L(
                                                                                        () => [
                                                                                          i(
                                                                                            "div",
                                                                                            sa,
                                                                                            [
                                                                                              i(
                                                                                                "span",
                                                                                                ra,
                                                                                                R(
                                                                                                  T.icon
                                                                                                ),
                                                                                                1
                                                                                              ),
                                                                                              i(
                                                                                                "span",
                                                                                                {
                                                                                                  class:
                                                                                                    Y(
                                                                                                      [
                                                                                                        [
                                                                                                          T.route.includes(
                                                                                                            (
                                                                                                              d
                                                                                                                ._
                                                                                                                .provides[
                                                                                                                ge
                                                                                                              ] ||
                                                                                                              d.$route
                                                                                                            ).path.slice(
                                                                                                              3
                                                                                                            )
                                                                                                          ) &&
                                                                                                            "text-gray-900",
                                                                                                        ],
                                                                                                        "text-gray-700 text-sm-semibold",
                                                                                                      ]
                                                                                                    ),
                                                                                                },
                                                                                                R(
                                                                                                  d.$t(
                                                                                                    `profileDashboard.layout.${T.name}`
                                                                                                  )
                                                                                                ),
                                                                                                3
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
                                                                                  ]
                                                                                ),
                                                                              ],
                                                                              10,
                                                                              na
                                                                            )
                                                                          )
                                                                        ),
                                                                        128
                                                                      )),
                                                                    ]
                                                                  ),
                                                                ],
                                                                4
                                                              ),
                                                              [
                                                                [
                                                                  ye,
                                                                  l.value ===
                                                                    s.name,
                                                                ],
                                                              ]
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                    ]))
                                                  : $("", !0),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to", "class"]
                                          )
                                        ),
                                        64
                                      )),
                                      m(
                                        u,
                                        {
                                          to: d.localePath(
                                            "/dashboard/new-order"
                                          ),
                                        },
                                        {
                                          default: L(() => [
                                            m(
                                              Le,
                                              {
                                                color: "primary-600",
                                                flat: "",
                                                class:
                                                  "text-none text-md-semibold",
                                                rounded: "pill",
                                              },
                                              {
                                                prepend: L(
                                                  () =>
                                                    o[5] ||
                                                    (o[5] = [
                                                      i(
                                                        "span",
                                                        {
                                                          class:
                                                            "material-symbols-rounded",
                                                        },
                                                        " add_circle ",
                                                        -1
                                                      ),
                                                    ])
                                                ),
                                                default: L(() => [
                                                  te(
                                                    " " +
                                                      R(
                                                        d.$t(
                                                          "profileDashboard.layout.newOrder"
                                                        )
                                                      ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["to"]
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                              i("div", ia, [
                                i("div", ua, [
                                  (I(),
                                  H(
                                    Z,
                                    null,
                                    ee(E, (s, P) =>
                                      m(
                                        u,
                                        {
                                          key: P,
                                          to: d.localePath(s.route),
                                          class: "w-full",
                                        },
                                        {
                                          default: L(() => [
                                            i(
                                              "div",
                                              {
                                                class: Y([
                                                  [
                                                    l.value === s.name &&
                                                      "bg-gray-50",
                                                  ],
                                                  "items-center px-3 gap-2 flex justify-between py-2 text-center hover:bg-gray-50 cursor-pointer transition-all rounded-sm",
                                                ]),
                                                onClick: (T) => c(s.name),
                                              },
                                              [
                                                i("div", da, [
                                                  i("div", va, [
                                                    i("div", null, [
                                                      i("div", null, [
                                                        m(
                                                          r,
                                                          {
                                                            width: "24",
                                                            height: "24",
                                                            src: `statics/${B(
                                                              w
                                                            ).toLocaleLowerCase()}.svg`,
                                                          },
                                                          null,
                                                          8,
                                                          ["src"]
                                                        ),
                                                      ]),
                                                    ]),
                                                    i(
                                                      "span",
                                                      ma,
                                                      R(
                                                        B(w) === "En"
                                                          ? s.children[0].name
                                                          : s.children[1].name
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  s.children
                                                    ? (I(),
                                                      H(
                                                        "span",
                                                        {
                                                          key: 0,
                                                          class: Y([
                                                            "material-symbols-rounded text-gray-500 mx-0 w-[24px]",
                                                            l.value === s.name
                                                              ? "rotate-180"
                                                              : "",
                                                          ]),
                                                        },
                                                        " keyboard_arrow_down ",
                                                        2
                                                      ))
                                                    : $("", !0),
                                                ]),
                                              ],
                                              10,
                                              ca
                                            ),
                                            s.children
                                              ? (I(),
                                                H("div", fa, [
                                                  m(
                                                    ae,
                                                    { name: "dropdown" },
                                                    {
                                                      default: L(() => [
                                                        fe(
                                                          i(
                                                            "div",
                                                            {
                                                              class:
                                                                "pl-12 overflow-hidden",
                                                              style: he({
                                                                maxHeight:
                                                                  l.value ===
                                                                  s.name
                                                                    ? "500px"
                                                                    : "0px",
                                                              }),
                                                            },
                                                            [
                                                              i("div", null, [
                                                                m(
                                                                  u,
                                                                  {
                                                                    to: d.localePath(
                                                                      B(M).route
                                                                    ),
                                                                    class:
                                                                      "w-full",
                                                                  },
                                                                  {
                                                                    default: L(
                                                                      () => [
                                                                        i(
                                                                          "div",
                                                                          {
                                                                            class:
                                                                              Y(
                                                                                [
                                                                                  [
                                                                                    (
                                                                                      d
                                                                                        ._
                                                                                        .provides[
                                                                                        ge
                                                                                      ] ||
                                                                                      d.$route
                                                                                    )
                                                                                      .path ===
                                                                                      B(
                                                                                        M
                                                                                      )
                                                                                        .route &&
                                                                                      "bg-gray-50",
                                                                                  ],
                                                                                  "!ml-1 items-center gap-2 flex py-2 text-center hover:bg-gray-50 cursor-pointer transition-all rounded-sm",
                                                                                ]
                                                                              ),
                                                                          },
                                                                          [
                                                                            m(
                                                                              r,
                                                                              {
                                                                                width:
                                                                                  "24",
                                                                                height:
                                                                                  "24",
                                                                                src: B(
                                                                                  M
                                                                                )
                                                                                  .img,
                                                                              },
                                                                              null,
                                                                              8,
                                                                              [
                                                                                "src",
                                                                              ]
                                                                            ),
                                                                            i(
                                                                              "span",
                                                                              ha,
                                                                              R(
                                                                                B(
                                                                                  M
                                                                                )
                                                                                  .name
                                                                              ),
                                                                              1
                                                                            ),
                                                                          ],
                                                                          2
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  },
                                                                  8,
                                                                  ["to"]
                                                                ),
                                                              ]),
                                                            ],
                                                            4
                                                          ),
                                                          [
                                                            [
                                                              ye,
                                                              l.value ===
                                                                s.name,
                                                            ],
                                                          ]
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ),
                                                ]))
                                              : $("", !0),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["to"]
                                      )
                                    ),
                                    64
                                  )),
                                ]),
                                i("div", ga, [
                                  o[7] || (o[7] = i("hr", null, null, -1)),
                                  B(n).userInfo
                                    ? (I(),
                                      H("div", ya, [
                                        i("div", pa, [
                                          i("div", null, [
                                            B(n).userInfo.avatar
                                              ? (I(),
                                                K(
                                                  Ee,
                                                  {
                                                    key: 0,
                                                    class:
                                                      "mx-2 border rounded-full border-gray-500",
                                                    height: "40",
                                                    width: "40",
                                                    src: B(n).userInfo.avatar,
                                                  },
                                                  null,
                                                  8,
                                                  ["src"]
                                                ))
                                              : (I(),
                                                H(
                                                  "div",
                                                  wa,
                                                  o[6] ||
                                                    (o[6] = [
                                                      i(
                                                        "span",
                                                        {
                                                          class:
                                                            "material-symbols-rounded",
                                                        },
                                                        " person ",
                                                        -1
                                                      ),
                                                    ])
                                                )),
                                          ]),
                                          i("div", ba, [
                                            i("div", null, [
                                              i(
                                                "div",
                                                xa,
                                                R(B(n).userInfo.first_name) +
                                                  " " +
                                                  R(B(n).userInfo.last_name),
                                                1
                                              ),
                                              i(
                                                "div",
                                                _a,
                                                R(B(n).userInfo.email),
                                                1
                                              ),
                                            ]),
                                            i(
                                              "span",
                                              {
                                                class:
                                                  "logoutIcon material-symbols-rounded text-gray-500",
                                                onClick:
                                                  o[0] || (o[0] = (s) => W()),
                                              },
                                              " logout "
                                            ),
                                          ]),
                                        ]),
                                      ]))
                                    : $("", !0),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"]
                  ),
                  m(
                    Dt,
                    {
                      elevation: "0",
                      class:
                        "block xl:!hidden border-b relative border-gray-700",
                    },
                    {
                      default: L(() => [
                        i("div", ka, [
                          m(
                            u,
                            { to: d.localePath("/") },
                            {
                              default: L(() => [
                                m(r, {
                                  src: "logos/jolixo-logo.svg",
                                  class: "w-[120px]",
                                }),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ),
                          y.value
                            ? $("", !0)
                            : (I(),
                              K(Mt, {
                                key: 0,
                                variant: "text",
                                class: "text-gray-500 !cursor-pointer",
                                onClick:
                                  o[2] ||
                                  (o[2] = nt(
                                    (s) => (y.value = !y.value),
                                    ["stop"]
                                  )),
                              })),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  y.value
                    ? (I(),
                      H(
                        "div",
                        {
                          key: 0,
                          class:
                            "!absolute xl:hidden top-4 right-4 !z-[999999]",
                          onClick: o[3] || (o[3] = (s) => (y.value = !1)),
                        },
                        [
                          m(
                            st,
                            { class: "!text-gray-25" },
                            {
                              default: L(
                                () => o[8] || (o[8] = [te(" mdi-close ")])
                              ),
                              _: 1,
                            }
                          ),
                        ]
                      ))
                    : $("", !0),
                  B(p)
                    ? (I(),
                      H("div", Sa, [
                        o[9] ||
                          (o[9] = i(
                            "div",
                            { class: "min-w-[285px] max-w-[285px] h-1" },
                            null,
                            -1
                          )),
                        i("div", Va, [
                          i("div", Pa, [
                            pe(d.$slots, "default", {}, void 0, !0),
                          ]),
                        ]),
                      ]))
                    : $("", !0),
                  B(p)
                    ? $("", !0)
                    : (I(),
                      H("div", La, [
                        m(
                          At,
                          { class: "pt-20 xl:!pt-0" },
                          {
                            default: L(() => [
                              pe(d.$slots, "default", {}, void 0, !0),
                            ]),
                            _: 3,
                          }
                        ),
                      ])),
                  m(ut, { ref_key: "globalDialog", ref: h }, null, 512),
                ]),
                _: 3,
              }
            )
          );
        }
      );
    },
  },
  Za = ct(Ia, [["__scopeId", "data-v-cdb0438f"]]);
export { Za as default };
