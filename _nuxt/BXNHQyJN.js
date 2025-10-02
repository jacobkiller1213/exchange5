import {
  x as H,
  R,
  ad as W,
  bQ as p,
  ay as Se,
  r as P,
  $ as B,
  a1 as Z,
  s as v,
  k as he,
  av as et,
  ai as b,
  an as tt,
  bC as be,
  b$ as at,
  ax as j,
  a7 as F,
  a8 as $,
  a0 as x,
  a5 as D,
  f as c,
  I as pe,
  X as nt,
  aK as G,
  a9 as le,
  j as lt,
  aa as ie,
  c0 as it,
  ae as st,
  F as de,
  H as ve,
  a2 as ee,
  a4 as ke,
  af as fe,
  aG as rt,
  aM as O,
  a3 as Ce,
  ah as ut,
  aj as ot,
  bX as ct,
} from "./Sm2mCfDE.js";
import { V as dt } from "./B_2FkP8S.js";
import { u as vt } from "./BAjJeBkK.js";
import { M as ft } from "./CI8VFsgH.js";
import { V as te, b as we, R as mt, c as Ie } from "./CMuUTlS2.js";
import { c as yt, a as me } from "./BIp5-3EK.js";
import {
  e as Ae,
  a as Ve,
  f as Pe,
  o as Le,
  j as gt,
  u as Oe,
  n as St,
} from "./ZfNZiyCm.js";
import { m as Be, a as _e, u as Me, b as je } from "./B8TxTyak.js";
import { m as ht, u as bt } from "./xUo5sKGi.js";
const ae = Symbol.for("vuetify:list");
function xe() {
  const e = H(ae, { hasPrepend: R(!1), updateHasPrepend: () => null }),
    i = {
      hasPrepend: R(!1),
      updateHasPrepend: (t) => {
        t && (i.hasPrepend.value = t);
      },
    };
  return W(ae, i), e;
}
function Te() {
  return H(ae, null);
}
const se = (e) => {
    const i = {
      activate: (t) => {
        let { id: a, value: l, activated: n } = t;
        return (
          (a = p(a)),
          (e && !l && n.size === 1 && n.has(a)) || (l ? n.add(a) : n.delete(a)),
          n
        );
      },
      in: (t, a, l) => {
        let n = new Set();
        if (t != null)
          for (const s of Se(t))
            n = i.activate({
              id: s,
              value: !0,
              activated: new Set(n),
              children: a,
              parents: l,
            });
        return n;
      },
      out: (t) => Array.from(t),
    };
    return i;
  },
  Fe = (e) => {
    const i = se(e);
    return {
      activate: (a) => {
        let { activated: l, id: n, ...s } = a;
        n = p(n);
        const u = l.has(n) ? new Set([n]) : new Set();
        return i.activate({ ...s, id: n, activated: u });
      },
      in: (a, l, n) => {
        let s = new Set();
        if (a != null) {
          const u = Se(a);
          u.length && (s = i.in(u.slice(0, 1), l, n));
        }
        return s;
      },
      out: (a, l, n) => i.out(a, l, n),
    };
  },
  pt = (e) => {
    const i = se(e);
    return {
      activate: (a) => {
        let { id: l, activated: n, children: s, ...u } = a;
        return (
          (l = p(l)),
          s.has(l) ? n : i.activate({ id: l, activated: n, children: s, ...u })
        );
      },
      in: i.in,
      out: i.out,
    };
  },
  kt = (e) => {
    const i = Fe(e);
    return {
      activate: (a) => {
        let { id: l, activated: n, children: s, ...u } = a;
        return (
          (l = p(l)),
          s.has(l) ? n : i.activate({ id: l, activated: n, children: s, ...u })
        );
      },
      in: i.in,
      out: i.out,
    };
  },
  Ct = {
    open: (e) => {
      let { id: i, value: t, opened: a, parents: l } = e;
      if (t) {
        const n = new Set();
        n.add(i);
        let s = l.get(i);
        for (; s != null; ) n.add(s), (s = l.get(s));
        return n;
      } else return a.delete(i), a;
    },
    select: () => null,
  },
  De = {
    open: (e) => {
      let { id: i, value: t, opened: a, parents: l } = e;
      if (t) {
        let n = l.get(i);
        for (a.add(i); n != null && n !== i; ) a.add(n), (n = l.get(n));
        return a;
      } else a.delete(i);
      return a;
    },
    select: () => null,
  },
  wt = {
    open: De.open,
    select: (e) => {
      let { id: i, value: t, opened: a, parents: l } = e;
      if (!t) return a;
      const n = [];
      let s = l.get(i);
      for (; s != null; ) n.push(s), (s = l.get(s));
      return new Set(n);
    },
  },
  re = (e) => {
    const i = {
      select: (t) => {
        let { id: a, value: l, selected: n } = t;
        if (((a = p(a)), e && !l)) {
          const s = Array.from(n.entries()).reduce((u, f) => {
            let [m, S] = f;
            return S === "on" && u.push(m), u;
          }, []);
          if (s.length === 1 && s[0] === a) return n;
        }
        return n.set(a, l ? "on" : "off"), n;
      },
      in: (t, a, l) => {
        let n = new Map();
        for (const s of t || [])
          n = i.select({
            id: s,
            value: !0,
            selected: new Map(n),
            children: a,
            parents: l,
          });
        return n;
      },
      out: (t) => {
        const a = [];
        for (const [l, n] of t.entries()) n === "on" && a.push(l);
        return a;
      },
    };
    return i;
  },
  Ne = (e) => {
    const i = re(e);
    return {
      select: (a) => {
        let { selected: l, id: n, ...s } = a;
        n = p(n);
        const u = l.has(n) ? new Map([[n, l.get(n)]]) : new Map();
        return i.select({ ...s, id: n, selected: u });
      },
      in: (a, l, n) => {
        let s = new Map();
        return a != null && a.length && (s = i.in(a.slice(0, 1), l, n)), s;
      },
      out: (a, l, n) => i.out(a, l, n),
    };
  },
  It = (e) => {
    const i = re(e);
    return {
      select: (a) => {
        let { id: l, selected: n, children: s, ...u } = a;
        return (
          (l = p(l)),
          s.has(l) ? n : i.select({ id: l, selected: n, children: s, ...u })
        );
      },
      in: i.in,
      out: i.out,
    };
  },
  At = (e) => {
    const i = Ne(e);
    return {
      select: (a) => {
        let { id: l, selected: n, children: s, ...u } = a;
        return (
          (l = p(l)),
          s.has(l) ? n : i.select({ id: l, selected: n, children: s, ...u })
        );
      },
      in: i.in,
      out: i.out,
    };
  },
  Vt = (e) => {
    const i = {
      select: (t) => {
        let { id: a, value: l, selected: n, children: s, parents: u } = t;
        a = p(a);
        const f = new Map(n),
          m = [a];
        for (; m.length; ) {
          const y = m.shift();
          n.set(p(y), l ? "on" : "off"), s.has(y) && m.push(...s.get(y));
        }
        let S = p(u.get(a));
        for (; S; ) {
          const y = s.get(S),
            k = y.every((r) => n.get(p(r)) === "on"),
            h = y.every((r) => !n.has(p(r)) || n.get(p(r)) === "off");
          n.set(S, k ? "on" : h ? "off" : "indeterminate"), (S = p(u.get(S)));
        }
        return e &&
          !l &&
          Array.from(n.entries()).reduce((k, h) => {
            let [r, o] = h;
            return o === "on" && k.push(r), k;
          }, []).length === 0
          ? f
          : n;
      },
      in: (t, a, l) => {
        let n = new Map();
        for (const s of t || [])
          n = i.select({
            id: s,
            value: !0,
            selected: new Map(n),
            children: a,
            parents: l,
          });
        return n;
      },
      out: (t, a) => {
        const l = [];
        for (const [n, s] of t.entries()) s === "on" && !a.has(n) && l.push(n);
        return l;
      },
    };
    return i;
  },
  E = Symbol.for("vuetify:nested"),
  Ge = {
    id: R(),
    root: {
      register: () => null,
      unregister: () => null,
      parents: P(new Map()),
      children: P(new Map()),
      open: () => null,
      openOnSelect: () => null,
      activate: () => null,
      select: () => null,
      activatable: P(!1),
      selectable: P(!1),
      opened: P(new Set()),
      activated: P(new Set()),
      selected: P(new Map()),
      selectedValues: P([]),
      getPath: () => [],
    },
  },
  Pt = B(
    {
      activatable: Boolean,
      selectable: Boolean,
      activeStrategy: [String, Function, Object],
      selectStrategy: [String, Function, Object],
      openStrategy: [String, Object],
      opened: null,
      activated: null,
      selected: null,
      mandatory: Boolean,
    },
    "nested"
  ),
  Lt = (e) => {
    let i = !1;
    const t = P(new Map()),
      a = P(new Map()),
      l = Z(
        e,
        "opened",
        e.opened,
        (r) => new Set(r),
        (r) => [...r.values()]
      ),
      n = v(() => {
        if (typeof e.activeStrategy == "object") return e.activeStrategy;
        if (typeof e.activeStrategy == "function")
          return e.activeStrategy(e.mandatory);
        switch (e.activeStrategy) {
          case "leaf":
            return pt(e.mandatory);
          case "single-leaf":
            return kt(e.mandatory);
          case "independent":
            return se(e.mandatory);
          case "single-independent":
          default:
            return Fe(e.mandatory);
        }
      }),
      s = v(() => {
        if (typeof e.selectStrategy == "object") return e.selectStrategy;
        if (typeof e.selectStrategy == "function")
          return e.selectStrategy(e.mandatory);
        switch (e.selectStrategy) {
          case "single-leaf":
            return At(e.mandatory);
          case "leaf":
            return It(e.mandatory);
          case "independent":
            return re(e.mandatory);
          case "single-independent":
            return Ne(e.mandatory);
          case "classic":
          default:
            return Vt(e.mandatory);
        }
      }),
      u = v(() => {
        if (typeof e.openStrategy == "object") return e.openStrategy;
        switch (e.openStrategy) {
          case "list":
            return wt;
          case "single":
            return Ct;
          case "multiple":
          default:
            return De;
        }
      }),
      f = Z(
        e,
        "activated",
        e.activated,
        (r) => n.value.in(r, t.value, a.value),
        (r) => n.value.out(r, t.value, a.value)
      ),
      m = Z(
        e,
        "selected",
        e.selected,
        (r) => s.value.in(r, t.value, a.value),
        (r) => s.value.out(r, t.value, a.value)
      );
    he(() => {
      i = !0;
    });
    function S(r) {
      const o = [];
      let d = r;
      for (; d != null; ) o.unshift(d), (d = a.value.get(d));
      return o;
    }
    const y = et("nested"),
      k = new Set(),
      h = {
        id: R(),
        root: {
          opened: l,
          activatable: b(e, "activatable"),
          selectable: b(e, "selectable"),
          activated: f,
          selected: m,
          selectedValues: v(() => {
            const r = [];
            for (const [o, d] of m.value.entries()) d === "on" && r.push(o);
            return r;
          }),
          register: (r, o, d) => {
            if (k.has(r)) {
              S(r).map(String).join(" -> "),
                S(o).concat(r).map(String).join(" -> ");
              return;
            } else k.add(r);
            o && r !== o && a.value.set(r, o),
              d && t.value.set(r, []),
              o != null && t.value.set(o, [...(t.value.get(o) || []), r]);
          },
          unregister: (r) => {
            if (i) return;
            k.delete(r), t.value.delete(r);
            const o = a.value.get(r);
            if (o) {
              const d = t.value.get(o) ?? [];
              t.value.set(
                o,
                d.filter((C) => C !== r)
              );
            }
            a.value.delete(r);
          },
          open: (r, o, d) => {
            y.emit("click:open", { id: r, value: o, path: S(r), event: d });
            const C = u.value.open({
              id: r,
              value: o,
              opened: new Set(l.value),
              children: t.value,
              parents: a.value,
              event: d,
            });
            C && (l.value = C);
          },
          openOnSelect: (r, o, d) => {
            const C = u.value.select({
              id: r,
              value: o,
              selected: new Map(m.value),
              opened: new Set(l.value),
              children: t.value,
              parents: a.value,
              event: d,
            });
            C && (l.value = C);
          },
          select: (r, o, d) => {
            y.emit("click:select", { id: r, value: o, path: S(r), event: d });
            const C = s.value.select({
              id: r,
              value: o,
              selected: new Map(m.value),
              children: t.value,
              parents: a.value,
              event: d,
            });
            C && (m.value = C), h.root.openOnSelect(r, o, d);
          },
          activate: (r, o, d) => {
            if (!e.activatable) return h.root.select(r, !0, d);
            y.emit("click:activate", { id: r, value: o, path: S(r), event: d });
            const C = n.value.activate({
              id: r,
              value: o,
              activated: new Set(f.value),
              children: t.value,
              parents: a.value,
              event: d,
            });
            C && (f.value = C);
          },
          children: t,
          parents: a,
          getPath: S,
        },
      };
    return W(E, h), h.root;
  },
  Re = (e, i) => {
    const t = H(E, Ge),
      a = Symbol(tt()),
      l = v(() => (e.value !== void 0 ? e.value : a)),
      n = {
        ...t,
        id: l,
        open: (s, u) => t.root.open(l.value, s, u),
        openOnSelect: (s, u) => t.root.openOnSelect(l.value, s, u),
        isOpen: v(() => t.root.opened.value.has(l.value)),
        parent: v(() => t.root.parents.value.get(l.value)),
        activate: (s, u) => t.root.activate(l.value, s, u),
        isActivated: v(() => t.root.activated.value.has(p(l.value))),
        select: (s, u) => t.root.select(l.value, s, u),
        isSelected: v(() => t.root.selected.value.get(p(l.value)) === "on"),
        isIndeterminate: v(
          () => t.root.selected.value.get(p(l.value)) === "indeterminate"
        ),
        isLeaf: v(() => !t.root.children.value.get(l.value)),
        isGroupActivator: t.isGroupActivator,
      };
    return (
      be(() => {
        !t.isGroupActivator && t.root.register(l.value, t.id.value, i);
      }),
      he(() => {
        !t.isGroupActivator && t.root.unregister(l.value);
      }),
      i && W(E, n),
      n
    );
  },
  Ot = () => {
    const e = H(E, Ge);
    W(E, { ...e, isGroupActivator: !0 });
  },
  Bt = at({
    name: "VListGroupActivator",
    setup(e, i) {
      let { slots: t } = i;
      return (
        Ot(),
        () => {
          var a;
          return (a = t.default) == null ? void 0 : a.call(t);
        }
      );
    },
  }),
  _t = B(
    {
      activeColor: String,
      baseColor: String,
      color: String,
      collapseIcon: { type: j, default: "$collapse" },
      expandIcon: { type: j, default: "$expand" },
      prependIcon: j,
      appendIcon: j,
      fluid: Boolean,
      subgroup: Boolean,
      title: String,
      value: null,
      ...F(),
      ...$(),
    },
    "VListGroup"
  ),
  ye = x()({
    name: "VListGroup",
    props: _t(),
    setup(e, i) {
      let { slots: t } = i;
      const { isOpen: a, open: l, id: n } = Re(b(e, "value"), !0),
        s = v(() => `v-list-group--id-${String(n.value)}`),
        u = Te(),
        { isBooted: f } = vt();
      function m(h) {
        h.stopPropagation(), l(!a.value, h);
      }
      const S = v(() => ({
          onClick: m,
          class: "v-list-group__header",
          id: s.value,
        })),
        y = v(() => (a.value ? e.collapseIcon : e.expandIcon)),
        k = v(() => ({
          VListItem: {
            active: a.value,
            activeColor: e.activeColor,
            baseColor: e.baseColor,
            color: e.color,
            prependIcon: e.prependIcon || (e.subgroup && y.value),
            appendIcon: e.appendIcon || (!e.subgroup && y.value),
            title: e.title,
            value: e.value,
          },
        }));
      return (
        D(() =>
          c(
            e.tag,
            {
              class: [
                "v-list-group",
                {
                  "v-list-group--prepend":
                    u == null ? void 0 : u.hasPrepend.value,
                  "v-list-group--fluid": e.fluid,
                  "v-list-group--subgroup": e.subgroup,
                  "v-list-group--open": a.value,
                },
                e.class,
              ],
              style: e.style,
            },
            {
              default: () => [
                t.activator &&
                  c(
                    te,
                    { defaults: k.value },
                    {
                      default: () => [
                        c(Bt, null, {
                          default: () => [
                            t.activator({ props: S.value, isOpen: a.value }),
                          ],
                        }),
                      ],
                    }
                  ),
                c(
                  ft,
                  { transition: { component: dt }, disabled: !f.value },
                  {
                    default: () => {
                      var h;
                      return [
                        pe(
                          c(
                            "div",
                            {
                              class: "v-list-group__items",
                              role: "group",
                              "aria-labelledby": s.value,
                            },
                            [(h = t.default) == null ? void 0 : h.call(t)]
                          ),
                          [[nt, a.value]]
                        ),
                      ];
                    },
                  }
                ),
              ],
            }
          )
        ),
        { isOpen: a }
      );
    },
  }),
  Mt = B({ opacity: [Number, String], ...F(), ...$() }, "VListItemSubtitle"),
  jt = x()({
    name: "VListItemSubtitle",
    props: Mt(),
    setup(e, i) {
      let { slots: t } = i;
      return (
        D(() =>
          c(
            e.tag,
            {
              class: ["v-list-item-subtitle", e.class],
              style: [{ "--v-list-item-subtitle-opacity": e.opacity }, e.style],
            },
            t
          )
        ),
        {}
      );
    },
  }),
  xt = yt("v-list-item-title"),
  Tt = B(
    {
      active: { type: Boolean, default: void 0 },
      activeClass: String,
      activeColor: String,
      appendAvatar: String,
      appendIcon: j,
      baseColor: String,
      disabled: Boolean,
      lines: [Boolean, String],
      link: { type: Boolean, default: void 0 },
      nav: Boolean,
      prependAvatar: String,
      prependIcon: j,
      ripple: { type: [Boolean, Object], default: !0 },
      slim: Boolean,
      subtitle: [String, Number],
      title: [String, Number],
      value: null,
      onClick: G(),
      onClickOnce: G(),
      ...Ae(),
      ...F(),
      ...Ve(),
      ...Be(),
      ...we(),
      ..._e(),
      ...ht(),
      ...$(),
      ...le(),
      ...Pe({ variant: "text" }),
    },
    "VListItem"
  ),
  ge = x()({
    name: "VListItem",
    directives: { Ripple: mt },
    props: Tt(),
    emits: { click: (e) => !0 },
    setup(e, i) {
      let { attrs: t, slots: a, emit: l } = i;
      const n = bt(e, t),
        s = v(() => (e.value === void 0 ? n.href.value : e.value)),
        {
          activate: u,
          isActivated: f,
          select: m,
          isOpen: S,
          isSelected: y,
          isIndeterminate: k,
          isGroupActivator: h,
          root: r,
          parent: o,
          openOnSelect: d,
          id: C,
        } = Re(s, !1),
        I = Te(),
        L = v(() => {
          var g;
          return (
            e.active !== !1 &&
            (e.active ||
              ((g = n.isActive) == null ? void 0 : g.value) ||
              (r.activatable.value ? f.value : y.value))
          );
        }),
        N = v(() => e.link !== !1 && n.isLink.value),
        _ = v(
          () =>
            !!I &&
            (r.selectable.value || r.activatable.value || e.value != null)
        ),
        A = v(
          () =>
            !e.disabled &&
            e.link !== !1 &&
            (e.link || n.isClickable.value || _.value)
        ),
        X = v(() => e.rounded || e.nav),
        z = v(() => e.color ?? e.activeColor),
        q = v(() => ({
          color: L.value ? z.value ?? e.baseColor : e.baseColor,
          variant: e.variant,
        }));
      lt(
        () => {
          var g;
          return (g = n.isActive) == null ? void 0 : g.value;
        },
        (g) => {
          g && U();
        }
      ),
        be(() => {
          var g;
          (g = n.isActive) != null && g.value && U();
        });
      function U() {
        o.value != null && r.open(o.value, !0), d(!0);
      }
      const { themeClasses: Q } = ie(e),
        { borderClasses: M } = Le(e),
        { colorClasses: w, colorStyles: T, variantClasses: Ke } = gt(q),
        { densityClasses: He } = Oe(e),
        { dimensionStyles: We } = Me(e),
        { elevationClasses: Xe } = Ie(e),
        { roundedClasses: ze } = je(X),
        qe = v(() => (e.lines ? `v-list-item--${e.lines}-line` : void 0)),
        J = v(() => ({
          isActive: L.value,
          select: m,
          isOpen: S.value,
          isSelected: y.value,
          isIndeterminate: k.value,
        }));
      function Qe(g) {
        var K;
        l("click", g),
          A.value &&
            ((K = n.navigate) == null || K.call(n, g),
            !h &&
              (r.activatable.value
                ? u(!f.value, g)
                : (r.selectable.value || e.value != null) && m(!y.value, g)));
      }
      function Je(g) {
        (g.key === "Enter" || g.key === " ") &&
          (g.preventDefault(),
          g.target.dispatchEvent(new MouseEvent("click", g)));
      }
      return (
        D(() => {
          const g = N.value ? "a" : e.tag,
            K = a.title || e.title != null,
            Ye = a.subtitle || e.subtitle != null,
            ue = !!(e.appendAvatar || e.appendIcon),
            Ze = !!(ue || a.append),
            oe = !!(e.prependAvatar || e.prependIcon),
            Y = !!(oe || a.prepend);
          return (
            I == null || I.updateHasPrepend(Y),
            e.activeColor && it("active-color", ["color", "base-color"]),
            pe(
              c(
                g,
                ee(
                  {
                    class: [
                      "v-list-item",
                      {
                        "v-list-item--active": L.value,
                        "v-list-item--disabled": e.disabled,
                        "v-list-item--link": A.value,
                        "v-list-item--nav": e.nav,
                        "v-list-item--prepend":
                          !Y && (I == null ? void 0 : I.hasPrepend.value),
                        "v-list-item--slim": e.slim,
                        [`${e.activeClass}`]: e.activeClass && L.value,
                      },
                      Q.value,
                      M.value,
                      w.value,
                      He.value,
                      Xe.value,
                      qe.value,
                      ze.value,
                      Ke.value,
                      e.class,
                    ],
                    style: [T.value, We.value, e.style],
                    tabindex: A.value ? (I ? -2 : 0) : void 0,
                    "aria-selected": _.value
                      ? r.activatable.value
                        ? f.value
                        : r.selectable.value
                        ? y.value
                        : L.value
                      : void 0,
                    onClick: Qe,
                    onKeydown: A.value && !N.value && Je,
                  },
                  n.linkProps
                ),
                {
                  default: () => {
                    var ce;
                    return [
                      St(A.value || L.value, "v-list-item"),
                      Y &&
                        c(
                          "div",
                          { key: "prepend", class: "v-list-item__prepend" },
                          [
                            a.prepend
                              ? c(
                                  te,
                                  {
                                    key: "prepend-defaults",
                                    disabled: !oe,
                                    defaults: {
                                      VAvatar: {
                                        density: e.density,
                                        image: e.prependAvatar,
                                      },
                                      VIcon: {
                                        density: e.density,
                                        icon: e.prependIcon,
                                      },
                                      VListItemAction: { start: !0 },
                                    },
                                  },
                                  {
                                    default: () => {
                                      var V;
                                      return [
                                        (V = a.prepend) == null
                                          ? void 0
                                          : V.call(a, J.value),
                                      ];
                                    },
                                  }
                                )
                              : c(de, null, [
                                  e.prependAvatar &&
                                    c(
                                      me,
                                      {
                                        key: "prepend-avatar",
                                        density: e.density,
                                        image: e.prependAvatar,
                                      },
                                      null
                                    ),
                                  e.prependIcon &&
                                    c(
                                      ve,
                                      {
                                        key: "prepend-icon",
                                        density: e.density,
                                        icon: e.prependIcon,
                                      },
                                      null
                                    ),
                                ]),
                            c("div", { class: "v-list-item__spacer" }, null),
                          ]
                        ),
                      c(
                        "div",
                        {
                          class: "v-list-item__content",
                          "data-no-activator": "",
                        },
                        [
                          K &&
                            c(
                              xt,
                              { key: "title" },
                              {
                                default: () => {
                                  var V;
                                  return [
                                    ((V = a.title) == null
                                      ? void 0
                                      : V.call(a, { title: e.title })) ??
                                      e.title,
                                  ];
                                },
                              }
                            ),
                          Ye &&
                            c(
                              jt,
                              { key: "subtitle" },
                              {
                                default: () => {
                                  var V;
                                  return [
                                    ((V = a.subtitle) == null
                                      ? void 0
                                      : V.call(a, { subtitle: e.subtitle })) ??
                                      e.subtitle,
                                  ];
                                },
                              }
                            ),
                          (ce = a.default) == null
                            ? void 0
                            : ce.call(a, J.value),
                        ]
                      ),
                      Ze &&
                        c(
                          "div",
                          { key: "append", class: "v-list-item__append" },
                          [
                            a.append
                              ? c(
                                  te,
                                  {
                                    key: "append-defaults",
                                    disabled: !ue,
                                    defaults: {
                                      VAvatar: {
                                        density: e.density,
                                        image: e.appendAvatar,
                                      },
                                      VIcon: {
                                        density: e.density,
                                        icon: e.appendIcon,
                                      },
                                      VListItemAction: { end: !0 },
                                    },
                                  },
                                  {
                                    default: () => {
                                      var V;
                                      return [
                                        (V = a.append) == null
                                          ? void 0
                                          : V.call(a, J.value),
                                      ];
                                    },
                                  }
                                )
                              : c(de, null, [
                                  e.appendIcon &&
                                    c(
                                      ve,
                                      {
                                        key: "append-icon",
                                        density: e.density,
                                        icon: e.appendIcon,
                                      },
                                      null
                                    ),
                                  e.appendAvatar &&
                                    c(
                                      me,
                                      {
                                        key: "append-avatar",
                                        density: e.density,
                                        image: e.appendAvatar,
                                      },
                                      null
                                    ),
                                ]),
                            c("div", { class: "v-list-item__spacer" }, null),
                          ]
                        ),
                    ];
                  },
                }
              ),
              [[st("ripple"), A.value && e.ripple]]
            )
          );
        }),
        {
          activate: u,
          isActivated: f,
          isGroupActivator: h,
          isSelected: y,
          list: I,
          select: m,
          root: r,
          id: C,
        }
      );
    },
  }),
  Ft = B(
    {
      color: String,
      inset: Boolean,
      sticky: Boolean,
      title: String,
      ...F(),
      ...$(),
    },
    "VListSubheader"
  ),
  Dt = x()({
    name: "VListSubheader",
    props: Ft(),
    setup(e, i) {
      let { slots: t } = i;
      const { textColorClasses: a, textColorStyles: l } = ke(b(e, "color"));
      return (
        D(() => {
          const n = !!(t.default || e.title);
          return c(
            e.tag,
            {
              class: [
                "v-list-subheader",
                {
                  "v-list-subheader--inset": e.inset,
                  "v-list-subheader--sticky": e.sticky,
                },
                a.value,
                e.class,
              ],
              style: [{ textColorStyles: l }, e.style],
            },
            {
              default: () => {
                var s;
                return [
                  n &&
                    c("div", { class: "v-list-subheader__text" }, [
                      ((s = t.default) == null ? void 0 : s.call(t)) ?? e.title,
                    ]),
                ];
              },
            }
          );
        }),
        {}
      );
    },
  }),
  Nt = B(
    {
      color: String,
      inset: Boolean,
      length: [Number, String],
      opacity: [Number, String],
      thickness: [Number, String],
      vertical: Boolean,
      ...F(),
      ...le(),
    },
    "VDivider"
  ),
  Gt = x()({
    name: "VDivider",
    props: Nt(),
    setup(e, i) {
      let { attrs: t, slots: a } = i;
      const { themeClasses: l } = ie(e),
        { textColorClasses: n, textColorStyles: s } = ke(b(e, "color")),
        u = v(() => {
          const f = {};
          return (
            e.length && (f[e.vertical ? "height" : "width"] = fe(e.length)),
            e.thickness &&
              (f[e.vertical ? "borderRightWidth" : "borderTopWidth"] = fe(
                e.thickness
              )),
            f
          );
        });
      return (
        D(() => {
          const f = c(
            "hr",
            {
              class: [
                {
                  "v-divider": !0,
                  "v-divider--inset": e.inset,
                  "v-divider--vertical": e.vertical,
                },
                l.value,
                n.value,
                e.class,
              ],
              style: [
                u.value,
                s.value,
                { "--v-border-opacity": e.opacity },
                e.style,
              ],
              "aria-orientation":
                !t.role || t.role === "separator"
                  ? e.vertical
                    ? "vertical"
                    : "horizontal"
                  : void 0,
              role: `${t.role || "separator"}`,
            },
            null
          );
          return a.default
            ? c(
                "div",
                {
                  class: [
                    "v-divider__wrapper",
                    {
                      "v-divider__wrapper--vertical": e.vertical,
                      "v-divider__wrapper--inset": e.inset,
                    },
                  ],
                },
                [f, c("div", { class: "v-divider__content" }, [a.default()]), f]
              )
            : f;
        }),
        {}
      );
    },
  }),
  Rt = B({ items: Array, returnObject: Boolean }, "VListChildren"),
  Ee = x()({
    name: "VListChildren",
    props: Rt(),
    setup(e, i) {
      let { slots: t } = i;
      return (
        xe(),
        () => {
          var a, l;
          return (
            ((a = t.default) == null ? void 0 : a.call(t)) ??
            ((l = e.items) == null
              ? void 0
              : l.map((n) => {
                  var k, h;
                  let { children: s, props: u, type: f, raw: m } = n;
                  if (f === "divider")
                    return (
                      ((k = t.divider) == null
                        ? void 0
                        : k.call(t, { props: u })) ?? c(Gt, u, null)
                    );
                  if (f === "subheader")
                    return (
                      ((h = t.subheader) == null
                        ? void 0
                        : h.call(t, { props: u })) ?? c(Dt, u, null)
                    );
                  const S = {
                      subtitle: t.subtitle
                        ? (r) => {
                            var o;
                            return (o = t.subtitle) == null
                              ? void 0
                              : o.call(t, { ...r, item: m });
                          }
                        : void 0,
                      prepend: t.prepend
                        ? (r) => {
                            var o;
                            return (o = t.prepend) == null
                              ? void 0
                              : o.call(t, { ...r, item: m });
                          }
                        : void 0,
                      append: t.append
                        ? (r) => {
                            var o;
                            return (o = t.append) == null
                              ? void 0
                              : o.call(t, { ...r, item: m });
                          }
                        : void 0,
                      title: t.title
                        ? (r) => {
                            var o;
                            return (o = t.title) == null
                              ? void 0
                              : o.call(t, { ...r, item: m });
                          }
                        : void 0,
                    },
                    y = ye.filterProps(u);
                  return s
                    ? c(ye, ee({ value: u == null ? void 0 : u.value }, y), {
                        activator: (r) => {
                          let { props: o } = r;
                          const d = {
                            ...u,
                            ...o,
                            value: e.returnObject ? m : u.value,
                          };
                          return t.header
                            ? t.header({ props: d })
                            : c(ge, d, S);
                        },
                        default: () =>
                          c(Ee, { items: s, returnObject: e.returnObject }, t),
                      })
                    : t.item
                    ? t.item({ props: u })
                    : c(ge, ee(u, { value: e.returnObject ? m : u.value }), S);
                }))
          );
        }
      );
    },
  }),
  Et = B(
    {
      items: { type: Array, default: () => [] },
      itemTitle: { type: [String, Array, Function], default: "title" },
      itemValue: { type: [String, Array, Function], default: "value" },
      itemChildren: {
        type: [Boolean, String, Array, Function],
        default: "children",
      },
      itemProps: { type: [Boolean, String, Array, Function], default: "props" },
      returnObject: Boolean,
      valueComparator: { type: Function, default: rt },
    },
    "list-items"
  );
function ne(e, i) {
  const t = O(i, e.itemTitle, i),
    a = O(i, e.itemValue, t),
    l = O(i, e.itemChildren),
    n =
      e.itemProps === !0
        ? typeof i == "object" && i != null && !Array.isArray(i)
          ? "children" in i
            ? Ce(i, ["children"])
            : i
          : void 0
        : O(i, e.itemProps),
    s = { title: t, value: a, ...n };
  return {
    title: String(s.title ?? ""),
    value: s.value,
    props: s,
    children: Array.isArray(l) ? $e(e, l) : void 0,
    raw: i,
  };
}
function $e(e, i) {
  const t = [];
  for (const a of i) t.push(ne(e, a));
  return t;
}
function ta(e) {
  const i = v(() => $e(e, e.items)),
    t = v(() => i.value.some((n) => n.value === null));
  function a(n) {
    return (
      t.value || (n = n.filter((s) => s !== null)),
      n.map((s) =>
        e.returnObject && typeof s == "string"
          ? ne(e, s)
          : i.value.find((u) => e.valueComparator(s, u.value)) || ne(e, s)
      )
    );
  }
  function l(n) {
    return e.returnObject
      ? n.map((s) => {
          let { raw: u } = s;
          return u;
        })
      : n.map((s) => {
          let { value: u } = s;
          return u;
        });
  }
  return { items: i, transformIn: a, transformOut: l };
}
function $t(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Ut(e, i) {
  const t = O(i, e.itemType, "item"),
    a = $t(i) ? i : O(i, e.itemTitle),
    l = O(i, e.itemValue, void 0),
    n = O(i, e.itemChildren),
    s = e.itemProps === !0 ? Ce(i, ["children"]) : O(i, e.itemProps),
    u = { title: a, value: l, ...s };
  return {
    type: t,
    title: u.title,
    value: u.value,
    props: u,
    children: t === "item" && n ? Ue(e, n) : void 0,
    raw: i,
  };
}
function Ue(e, i) {
  const t = [];
  for (const a of i) t.push(Ut(e, a));
  return t;
}
function Kt(e) {
  return { items: v(() => Ue(e, e.items)) };
}
const Ht = B(
    {
      baseColor: String,
      activeColor: String,
      activeClass: String,
      bgColor: String,
      disabled: Boolean,
      expandIcon: j,
      collapseIcon: j,
      lines: { type: [Boolean, String], default: "one" },
      slim: Boolean,
      nav: Boolean,
      "onClick:open": G(),
      "onClick:select": G(),
      "onUpdate:opened": G(),
      ...Pt({ selectStrategy: "single-leaf", openStrategy: "list" }),
      ...Ae(),
      ...F(),
      ...Ve(),
      ...Be(),
      ...we(),
      itemType: { type: String, default: "type" },
      ...Et(),
      ..._e(),
      ...$(),
      ...le(),
      ...Pe({ variant: "text" }),
    },
    "VList"
  ),
  aa = x()({
    name: "VList",
    props: Ht(),
    emits: {
      "update:selected": (e) => !0,
      "update:activated": (e) => !0,
      "update:opened": (e) => !0,
      "click:open": (e) => !0,
      "click:activate": (e) => !0,
      "click:select": (e) => !0,
    },
    setup(e, i) {
      let { slots: t } = i;
      const { items: a } = Kt(e),
        { themeClasses: l } = ie(e),
        { backgroundColorClasses: n, backgroundColorStyles: s } = ut(
          b(e, "bgColor")
        ),
        { borderClasses: u } = Le(e),
        { densityClasses: f } = Oe(e),
        { dimensionStyles: m } = Me(e),
        { elevationClasses: S } = Ie(e),
        { roundedClasses: y } = je(e),
        { children: k, open: h, parents: r, select: o, getPath: d } = Lt(e),
        C = v(() => (e.lines ? `v-list--${e.lines}-line` : void 0)),
        I = b(e, "activeColor"),
        L = b(e, "baseColor"),
        N = b(e, "color");
      xe(),
        ot({
          VListGroup: {
            activeColor: I,
            baseColor: L,
            color: N,
            expandIcon: b(e, "expandIcon"),
            collapseIcon: b(e, "collapseIcon"),
          },
          VListItem: {
            activeClass: b(e, "activeClass"),
            activeColor: I,
            baseColor: L,
            color: N,
            density: b(e, "density"),
            disabled: b(e, "disabled"),
            lines: b(e, "lines"),
            nav: b(e, "nav"),
            slim: b(e, "slim"),
            variant: b(e, "variant"),
          },
        });
      const _ = R(!1),
        A = P();
      function X(w) {
        _.value = !0;
      }
      function z(w) {
        _.value = !1;
      }
      function q(w) {
        var T;
        !_.value &&
          !(
            w.relatedTarget &&
            (T = A.value) != null &&
            T.contains(w.relatedTarget)
          ) &&
          M();
      }
      function U(w) {
        const T = w.target;
        if (!(!A.value || ["INPUT", "TEXTAREA"].includes(T.tagName))) {
          if (w.key === "ArrowDown") M("next");
          else if (w.key === "ArrowUp") M("prev");
          else if (w.key === "Home") M("first");
          else if (w.key === "End") M("last");
          else return;
          w.preventDefault();
        }
      }
      function Q(w) {
        _.value = !0;
      }
      function M(w) {
        if (A.value) return ct(A.value, w);
      }
      return (
        D(() =>
          c(
            e.tag,
            {
              ref: A,
              class: [
                "v-list",
                {
                  "v-list--disabled": e.disabled,
                  "v-list--nav": e.nav,
                  "v-list--slim": e.slim,
                },
                l.value,
                n.value,
                u.value,
                f.value,
                S.value,
                C.value,
                y.value,
                e.class,
              ],
              style: [s.value, m.value, e.style],
              tabindex: e.disabled || _.value ? -1 : 0,
              role: "listbox",
              "aria-activedescendant": void 0,
              onFocusin: X,
              onFocusout: z,
              onFocus: q,
              onKeydown: U,
              onMousedown: Q,
            },
            {
              default: () => [
                c(Ee, { items: a.value, returnObject: e.returnObject }, t),
              ],
            }
          )
        ),
        { open: h, select: o, focus: M, children: k, parents: r, getPath: d }
      );
    },
  });
export { aa as V, ge as a, Gt as b, xt as c, Et as m, ta as u };
