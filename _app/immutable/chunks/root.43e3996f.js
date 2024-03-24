import {
  aj as Ke,
  ak as Ge,
  S as rt,
  i as st,
  s as et,
  C as lt,
  D as ct,
  E as at,
  F as ft,
  g as N,
  d as I,
  e as kt,
  b as gt,
  h as V,
  O as Y,
  I as ot,
  J as k,
  P as vt,
  T as Je,
  k as Ht,
  l as Lt,
  m as ht,
  ai as ie,
  L as me,
  a6 as W,
  M as _t,
  N as ge,
  a7 as pe,
  a0 as F,
  w as Gt,
  K as re,
  p as S,
  n as ut,
  G as ye,
  $ as Xt,
  a1 as we,
  a2 as be,
  a3 as se,
  v as Ze,
  f as Qe,
  al as $e,
  H as Yt,
  y as xe,
  z as ve,
  A as _e,
  U as Ce,
  B as Ae,
} from "./index.4f26dcbc.js";
import { w as tn } from "./index.00006b53.js";
function Oe(t, e) {
  const n = [];
  if (e)
    for (let o = 0; o < e.length; o++) {
      const i = e[o],
        r = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(r(t, i[1])) : n.push(r(t));
    }
  return {
    update(o) {
      if (((o && o.length) || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (o)
        for (let i = 0; i < o.length; i++) {
          const r = n[i];
          if (r && r.update) {
            const s = o[i];
            Array.isArray(s) && s.length > 1 ? r.update(s[1]) : r.update();
          }
        }
    },
    destroy() {
      for (let o = 0; o < n.length; o++) {
        const i = n[o];
        i && i.destroy && i.destroy();
      }
    },
  };
}
function en() {
  const t = Symbol();
  return { getContext: () => Ke(t), setContext: (e) => Ge(t, e) };
}
let nn = 0;
function St() {
  return `radix-svelte-${nn++}`;
}
function on(t) {
  return Object.entries(t);
}
function le(...t) {
  return [...new Set(t.flatMap(Object.keys))];
}
function Ct(t) {
  const e = en();
  return {
    ...e,
    setContext: (o) => {
      const i = le(t ?? {}, o ?? {}),
        r = tn(
          i.reduce(
            (u, a) => (
              (t == null ? void 0 : t[a]) !== void 0 && (u[a] = t[a]), u
            ),
            {}
          )
        ),
        s = (u) => {
          r.update((a) => {
            const h = u(a),
              l = le(t ?? {}, h ?? {}).reduce(
                (d, m) => (
                  h[m] === void 0 && (t == null ? void 0 : t[m]) !== void 0
                    ? (d[m] = t[m])
                    : (d[m] = h[m]),
                  d
                ),
                {}
              );
            return (
              on(l).forEach(([d, m]) => {
                if (o) {
                  const p = d in o ? o[d] : void 0;
                  p == null || p(m);
                }
              }),
              l
            );
          });
        },
        f = {
          ...r,
          set: (u) => {
            s(() => u);
          },
          update: s,
        };
      return e.setContext(f), f;
    },
    defaults: t,
  };
}
function rn(t) {
  return Object.keys(t).reduce(
    (e, n) => (t[n] === void 0 ? e : e + `${n}:${t[n]};`),
    ""
  );
}
const wt = typeof window < "u";
Ct({
  open: !1,
  modal: !0,
  titleId: St(),
  descriptionId: St(),
  contentId: St(),
  triggeredId: null,
});
function sn(t) {
  let e;
  const n = t[1].default,
    o = lt(n, t, t[0], null);
  return {
    c() {
      o && o.c();
    },
    l(i) {
      o && o.l(i);
    },
    m(i, r) {
      o && o.m(i, r), (e = !0);
    },
    p(i, [r]) {
      o &&
        o.p &&
        (!e || r & 1) &&
        ct(o, n, i, i[0], e ? ft(n, i[0], r, null) : at(i[0]), null);
    },
    i(i) {
      e || (N(o, i), (e = !0));
    },
    o(i) {
      I(o, i), (e = !1);
    },
    d(i) {
      o && o.d(i);
    },
  };
}
const { getContext: ln, setContext: cn } = Ct({ anchor: null, arrow: null }),
  Jt = ln;
function an(t, e, n) {
  let { $$slots: o = {}, $$scope: i } = e;
  return (
    cn(),
    (t.$$set = (r) => {
      "$$scope" in r && n(0, (i = r.$$scope));
    }),
    [i, o]
  );
}
let fn = class extends rt {
  constructor(e) {
    super(), st(this, e, an, sn, et, {});
  }
};
function jt(t) {
  let e, n, o, i, r;
  const s = t[7].default,
    c = lt(s, t, t[6], null);
  let f = [t[4]],
    u = {};
  for (let a = 0; a < f.length; a += 1) u = k(u, f[a]);
  return {
    c() {
      (e = Ht(t[1])), c && c.c(), this.h();
    },
    l(a) {
      e = Lt(a, (t[1] || "null").toUpperCase(), {});
      var h = ht(e);
      c && c.l(h), h.forEach(V), this.h();
    },
    h() {
      ie(t[1])(e, u);
    },
    m(a, h) {
      gt(a, e, h),
        c && c.m(e, null),
        t[16](e),
        (o = !0),
        i ||
          ((r = [
            me((n = Oe.call(null, e, t[0] ?? []))),
            W(e, "click", t[8]),
            W(e, "pointerenter", t[9]),
            W(e, "pointermove", t[10]),
            W(e, "pointerleave", t[11]),
            W(e, "pointerdown", t[12]),
            W(e, "focus", t[13]),
            W(e, "blur", t[14]),
            W(e, "touchstart", t[15]),
          ]),
          (i = !0));
    },
    p(a, h) {
      c &&
        c.p &&
        (!o || h & 64) &&
        ct(c, s, a, a[6], o ? ft(s, a[6], h, null) : at(a[6]), null),
        ie(a[1])(e, (u = _t(f, [h & 16 && a[4]]))),
        n && ge(n.update) && h & 1 && n.update.call(null, a[0] ?? []);
    },
    i(a) {
      o || (N(c, a), (o = !0));
    },
    o(a) {
      I(c, a), (o = !1);
    },
    d(a) {
      a && V(e), c && c.d(a), t[16](null), (i = !1), pe(r);
    },
  };
}
function un(t) {
  let e = t[1],
    n,
    o,
    i = t[1] && jt(t);
  return {
    c() {
      i && i.c(), (n = kt());
    },
    l(r) {
      i && i.l(r), (n = kt());
    },
    m(r, s) {
      i && i.m(r, s), gt(r, n, s), (o = !0);
    },
    p(r, [s]) {
      r[1]
        ? e
          ? et(e, r[1])
            ? (i.d(1), (i = jt(r)), (e = r[1]), i.c(), i.m(n.parentNode, n))
            : i.p(r, s)
          : ((i = jt(r)), (e = r[1]), i.c(), i.m(n.parentNode, n))
        : e && (i.d(1), (i = null), (e = r[1]));
    },
    i(r) {
      o || (N(i), (o = !0));
    },
    o(r) {
      I(i), (o = !1);
    },
    d(r) {
      r && V(n), i && i.d(r);
    },
  };
}
function dn(t, e, n) {
  const o = ["use", "as", "ref"];
  let i = Y(e, o),
    r,
    { $$slots: s = {}, $$scope: c } = e,
    { use: f = [] } = e,
    { as: u = "div" } = e,
    { ref: a = null } = e,
    h;
  const g = Jt();
  ot(t, g, (y) => n(17, (r = y)));
  function l(y) {
    F.call(this, t, y);
  }
  function d(y) {
    F.call(this, t, y);
  }
  function m(y) {
    F.call(this, t, y);
  }
  function p(y) {
    F.call(this, t, y);
  }
  function w(y) {
    F.call(this, t, y);
  }
  function b(y) {
    F.call(this, t, y);
  }
  function x(y) {
    F.call(this, t, y);
  }
  function C(y) {
    F.call(this, t, y);
  }
  function A(y) {
    Gt[y ? "unshift" : "push"](() => {
      (h = y), n(2, h);
    });
  }
  return (
    (t.$$set = (y) => {
      (e = k(k({}, e), vt(y))),
        n(4, (i = Y(e, o))),
        "use" in y && n(0, (f = y.use)),
        "as" in y && n(1, (u = y.as)),
        "ref" in y && n(5, (a = y.ref)),
        "$$scope" in y && n(6, (c = y.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 4 && h && n(5, (a = h)),
        t.$$.dirty & 4 && Je(g, (r.anchor = h), r);
    }),
    [f, u, h, g, i, a, c, s, l, d, m, p, w, b, x, C, A]
  );
}
class hn extends rt {
  constructor(e) {
    super(), st(this, e, dn, un, et, { use: 0, as: 1, ref: 5 });
  }
}
const mn = ["top", "right", "bottom", "left"],
  Q = Math.min,
  M = Math.max,
  Mt = Math.round,
  Tt = Math.floor,
  $ = (t) => ({ x: t, y: t }),
  gn = { left: "right", right: "left", bottom: "top", top: "bottom" },
  pn = { start: "end", end: "start" };
function qt(t, e, n) {
  return M(t, Q(e, n));
}
function U(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function K(t) {
  return t.split("-")[0];
}
function pt(t) {
  return t.split("-")[1];
}
function Zt(t) {
  return t === "x" ? "y" : "x";
}
function Qt(t) {
  return t === "y" ? "height" : "width";
}
function yt(t) {
  return ["top", "bottom"].includes(K(t)) ? "y" : "x";
}
function $t(t) {
  return Zt(yt(t));
}
function yn(t, e, n) {
  n === void 0 && (n = !1);
  const o = pt(t),
    i = $t(t),
    r = Qt(i);
  let s =
    i === "x"
      ? o === (n ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
      ? "bottom"
      : "top";
  return e.reference[r] > e.floating[r] && (s = Bt(s)), [s, Bt(s)];
}
function wn(t) {
  const e = Bt(t);
  return [Ut(t), e, Ut(e)];
}
function Ut(t) {
  return t.replace(/start|end/g, (e) => pn[e]);
}
function bn(t, e, n) {
  const o = ["left", "right"],
    i = ["right", "left"],
    r = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? (e ? i : o) : e ? o : i;
    case "left":
    case "right":
      return e ? r : s;
    default:
      return [];
  }
}
function xn(t, e, n, o) {
  const i = pt(t);
  let r = bn(K(t), n === "start", o);
  return (
    i && ((r = r.map((s) => s + "-" + i)), e && (r = r.concat(r.map(Ut)))), r
  );
}
function Bt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => gn[e]);
}
function vn(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Re(t) {
  return typeof t != "number"
    ? vn(t)
    : { top: t, right: t, bottom: t, left: t };
}
function Wt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
function ce(t, e, n) {
  let { reference: o, floating: i } = t;
  const r = yt(e),
    s = $t(e),
    c = Qt(s),
    f = K(e),
    u = r === "y",
    a = o.x + o.width / 2 - i.width / 2,
    h = o.y + o.height / 2 - i.height / 2,
    g = o[c] / 2 - i[c] / 2;
  let l;
  switch (f) {
    case "top":
      l = { x: a, y: o.y - i.height };
      break;
    case "bottom":
      l = { x: a, y: o.y + o.height };
      break;
    case "right":
      l = { x: o.x + o.width, y: h };
      break;
    case "left":
      l = { x: o.x - i.width, y: h };
      break;
    default:
      l = { x: o.x, y: o.y };
  }
  switch (pt(e)) {
    case "start":
      l[s] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      l[s] += g * (n && u ? -1 : 1);
      break;
  }
  return l;
}
const _n = async (t, e, n) => {
  const {
      placement: o = "bottom",
      strategy: i = "absolute",
      middleware: r = [],
      platform: s,
    } = n,
    c = r.filter(Boolean),
    f = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let u = await s.getElementRects({ reference: t, floating: e, strategy: i }),
    { x: a, y: h } = ce(u, o, f),
    g = o,
    l = {},
    d = 0;
  for (let m = 0; m < c.length; m++) {
    const { name: p, fn: w } = c[m],
      {
        x: b,
        y: x,
        data: C,
        reset: A,
      } = await w({
        x: a,
        y: h,
        initialPlacement: o,
        placement: g,
        strategy: i,
        middlewareData: l,
        rects: u,
        platform: s,
        elements: { reference: t, floating: e },
      });
    (a = b ?? a),
      (h = x ?? h),
      (l = { ...l, [p]: { ...l[p], ...C } }),
      A &&
        d <= 50 &&
        (d++,
        typeof A == "object" &&
          (A.placement && (g = A.placement),
          A.rects &&
            (u =
              A.rects === !0
                ? await s.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: i,
                  })
                : A.rects),
          ({ x: a, y: h } = ce(u, g, f))),
        (m = -1));
  }
  return { x: a, y: h, placement: g, strategy: i, middlewareData: l };
};
async function bt(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: r, rects: s, elements: c, strategy: f } = t,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: a = "viewport",
      elementContext: h = "floating",
      altBoundary: g = !1,
      padding: l = 0,
    } = U(e, t),
    d = Re(l),
    p = c[g ? (h === "floating" ? "reference" : "floating") : h],
    w = Wt(
      await r.getClippingRect({
        element:
          (n = await (r.isElement == null ? void 0 : r.isElement(p))) == null ||
          n
            ? p
            : p.contextElement ||
              (await (r.getDocumentElement == null
                ? void 0
                : r.getDocumentElement(c.floating))),
        boundary: u,
        rootBoundary: a,
        strategy: f,
      })
    ),
    b = h === "floating" ? { ...s.floating, x: o, y: i } : s.reference,
    x = await (r.getOffsetParent == null
      ? void 0
      : r.getOffsetParent(c.floating)),
    C = (await (r.isElement == null ? void 0 : r.isElement(x)))
      ? (await (r.getScale == null ? void 0 : r.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    A = Wt(
      r.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: b,
            offsetParent: x,
            strategy: f,
          })
        : b
    );
  return {
    top: (w.top - A.top + d.top) / C.y,
    bottom: (A.bottom - w.bottom + d.bottom) / C.y,
    left: (w.left - A.left + d.left) / C.x,
    right: (A.right - w.right + d.right) / C.x,
  };
}
const Cn = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const {
          x: n,
          y: o,
          placement: i,
          rects: r,
          platform: s,
          elements: c,
          middlewareData: f,
        } = e,
        { element: u, padding: a = 0 } = U(t, e) || {};
      if (u == null) return {};
      const h = Re(a),
        g = { x: n, y: o },
        l = $t(i),
        d = Qt(l),
        m = await s.getDimensions(u),
        p = l === "y",
        w = p ? "top" : "left",
        b = p ? "bottom" : "right",
        x = p ? "clientHeight" : "clientWidth",
        C = r.reference[d] + r.reference[l] - g[l] - r.floating[d],
        A = g[l] - r.reference[l],
        y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let _ = y ? y[x] : 0;
      (!_ || !(await (s.isElement == null ? void 0 : s.isElement(y)))) &&
        (_ = c.floating[x] || r.floating[d]);
      const D = C / 2 - A / 2,
        P = _ / 2 - m[d] / 2 - 1,
        X = Q(h[w], P),
        q = Q(h[b], P),
        R = X,
        Z = _ - m[d] - q,
        E = _ / 2 - m[d] / 2 + D,
        O = qt(R, E, Z),
        H =
          !f.arrow &&
          pt(i) != null &&
          E !== O &&
          r.reference[d] / 2 - (E < R ? X : q) - m[d] / 2 < 0,
        T = H ? (E < R ? E - R : E - Z) : 0;
      return {
        [l]: g[l] + T,
        data: {
          [l]: O,
          centerOffset: E - O - T,
          ...(H && { alignmentOffset: T }),
        },
        reset: H,
      };
    },
  }),
  An = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var n, o;
          const {
              placement: i,
              middlewareData: r,
              rects: s,
              initialPlacement: c,
              platform: f,
              elements: u,
            } = e,
            {
              mainAxis: a = !0,
              crossAxis: h = !0,
              fallbackPlacements: g,
              fallbackStrategy: l = "bestFit",
              fallbackAxisSideDirection: d = "none",
              flipAlignment: m = !0,
              ...p
            } = U(t, e);
          if ((n = r.arrow) != null && n.alignmentOffset) return {};
          const w = K(i),
            b = K(c) === c,
            x = await (f.isRTL == null ? void 0 : f.isRTL(u.floating)),
            C = g || (b || !m ? [Bt(c)] : wn(c));
          !g && d !== "none" && C.push(...xn(c, m, d, x));
          const A = [c, ...C],
            y = await bt(e, p),
            _ = [];
          let D = ((o = r.flip) == null ? void 0 : o.overflows) || [];
          if ((a && _.push(y[w]), h)) {
            const R = yn(i, s, x);
            _.push(y[R[0]], y[R[1]]);
          }
          if (
            ((D = [...D, { placement: i, overflows: _ }]),
            !_.every((R) => R <= 0))
          ) {
            var P, X;
            const R = (((P = r.flip) == null ? void 0 : P.index) || 0) + 1,
              Z = A[R];
            if (Z)
              return {
                data: { index: R, overflows: D },
                reset: { placement: Z },
              };
            let E =
              (X = D.filter((O) => O.overflows[0] <= 0).sort(
                (O, H) => O.overflows[1] - H.overflows[1]
              )[0]) == null
                ? void 0
                : X.placement;
            if (!E)
              switch (l) {
                case "bestFit": {
                  var q;
                  const O =
                    (q = D.map((H) => [
                      H.placement,
                      H.overflows
                        .filter((T) => T > 0)
                        .reduce((T, L) => T + L, 0),
                    ]).sort((H, T) => H[1] - T[1])[0]) == null
                      ? void 0
                      : q[0];
                  O && (E = O);
                  break;
                }
                case "initialPlacement":
                  E = c;
                  break;
              }
            if (i !== E) return { reset: { placement: E } };
          }
          return {};
        },
      }
    );
  };
function ae(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width,
  };
}
function fe(t) {
  return mn.some((e) => t[e] >= 0);
}
const On = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "hide",
      options: t,
      async fn(e) {
        const { rects: n } = e,
          { strategy: o = "referenceHidden", ...i } = U(t, e);
        switch (o) {
          case "referenceHidden": {
            const r = await bt(e, { ...i, elementContext: "reference" }),
              s = ae(r, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: fe(s) },
            };
          }
          case "escaped": {
            const r = await bt(e, { ...i, altBoundary: !0 }),
              s = ae(r, n.floating);
            return { data: { escapedOffsets: s, escaped: fe(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Rn(t, e) {
  const { placement: n, platform: o, elements: i } = t,
    r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)),
    s = K(n),
    c = pt(n),
    f = yt(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    a = r && f ? -1 : 1,
    h = U(e, t);
  let {
    mainAxis: g,
    crossAxis: l,
    alignmentAxis: d,
  } = typeof h == "number"
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
  return (
    c && typeof d == "number" && (l = c === "end" ? d * -1 : d),
    f ? { x: l * a, y: g * u } : { x: g * u, y: l * a }
  );
}
const En = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var n, o;
          const { x: i, y: r, placement: s, middlewareData: c } = e,
            f = await Rn(e, t);
          return s === ((n = c.offset) == null ? void 0 : n.placement) &&
            (o = c.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: i + f.x, y: r + f.y, data: { ...f, placement: s } };
        },
      }
    );
  },
  Dn = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: n, y: o, placement: i } = e,
            {
              mainAxis: r = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (p) => {
                  let { x: w, y: b } = p;
                  return { x: w, y: b };
                },
              },
              ...f
            } = U(t, e),
            u = { x: n, y: o },
            a = await bt(e, f),
            h = yt(K(i)),
            g = Zt(h);
          let l = u[g],
            d = u[h];
          if (r) {
            const p = g === "y" ? "top" : "left",
              w = g === "y" ? "bottom" : "right",
              b = l + a[p],
              x = l - a[w];
            l = qt(b, l, x);
          }
          if (s) {
            const p = h === "y" ? "top" : "left",
              w = h === "y" ? "bottom" : "right",
              b = d + a[p],
              x = d - a[w];
            d = qt(b, d, x);
          }
          const m = c.fn({ ...e, [g]: l, [h]: d });
          return { ...m, data: { x: m.x - n, y: m.y - o } };
        },
      }
    );
  },
  Pn = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(e) {
          const { x: n, y: o, placement: i, rects: r, middlewareData: s } = e,
            { offset: c = 0, mainAxis: f = !0, crossAxis: u = !0 } = U(t, e),
            a = { x: n, y: o },
            h = yt(i),
            g = Zt(h);
          let l = a[g],
            d = a[h];
          const m = U(c, e),
            p =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (f) {
            const x = g === "y" ? "height" : "width",
              C = r.reference[g] - r.floating[x] + p.mainAxis,
              A = r.reference[g] + r.reference[x] - p.mainAxis;
            l < C ? (l = C) : l > A && (l = A);
          }
          if (u) {
            var w, b;
            const x = g === "y" ? "width" : "height",
              C = ["top", "left"].includes(K(i)),
              A =
                r.reference[h] -
                r.floating[x] +
                ((C && ((w = s.offset) == null ? void 0 : w[h])) || 0) +
                (C ? 0 : p.crossAxis),
              y =
                r.reference[h] +
                r.reference[x] +
                (C ? 0 : ((b = s.offset) == null ? void 0 : b[h]) || 0) -
                (C ? p.crossAxis : 0);
            d < A ? (d = A) : d > y && (d = y);
          }
          return { [g]: l, [h]: d };
        },
      }
    );
  },
  Tn = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          const { placement: n, rects: o, platform: i, elements: r } = e,
            { apply: s = () => {}, ...c } = U(t, e),
            f = await bt(e, c),
            u = K(n),
            a = pt(n),
            h = yt(n) === "y",
            { width: g, height: l } = o.floating;
          let d, m;
          u === "top" || u === "bottom"
            ? ((d = u),
              (m =
                a ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(r.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = u), (d = a === "end" ? "top" : "bottom"));
          const p = l - f[d],
            w = g - f[m],
            b = !e.middlewareData.shift;
          let x = p,
            C = w;
          if (h) {
            const y = g - f.left - f.right;
            C = a || b ? Q(w, y) : y;
          } else {
            const y = l - f.top - f.bottom;
            x = a || b ? Q(p, y) : y;
          }
          if (b && !a) {
            const y = M(f.left, 0),
              _ = M(f.right, 0),
              D = M(f.top, 0),
              P = M(f.bottom, 0);
            h
              ? (C = g - 2 * (y !== 0 || _ !== 0 ? y + _ : M(f.left, f.right)))
              : (x = l - 2 * (D !== 0 || P !== 0 ? D + P : M(f.top, f.bottom)));
          }
          await s({ ...e, availableWidth: C, availableHeight: x });
          const A = await i.getDimensions(r.floating);
          return g !== A.width || l !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function tt(t) {
  return Ee(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function B(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function J(t) {
  var e;
  return (e = (Ee(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function Ee(t) {
  return t instanceof Node || t instanceof B(t).Node;
}
function G(t) {
  return t instanceof Element || t instanceof B(t).Element;
}
function j(t) {
  return t instanceof HTMLElement || t instanceof B(t).HTMLElement;
}
function ue(t) {
  return typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof B(t).ShadowRoot;
}
function At(t) {
  const { overflow: e, overflowX: n, overflowY: o, display: i } = z(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + o + n) &&
    !["inline", "contents"].includes(i)
  );
}
function Sn(t) {
  return ["table", "td", "th"].includes(tt(t));
}
function te(t) {
  const e = ee(),
    n = z(t);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!e && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!e && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((o) =>
      (n.willChange || "").includes(o)
    ) ||
    ["paint", "layout", "strict", "content"].some((o) =>
      (n.contain || "").includes(o)
    )
  );
}
function kn(t) {
  let e = mt(t);
  for (; j(e) && !Ft(e); ) {
    if (te(e)) return e;
    e = mt(e);
  }
  return null;
}
function ee() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ft(t) {
  return ["html", "body", "#document"].includes(tt(t));
}
function z(t) {
  return B(t).getComputedStyle(t);
}
function Nt(t) {
  return G(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function mt(t) {
  if (tt(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (ue(t) && t.host) || J(t);
  return ue(e) ? e.host : e;
}
function De(t) {
  const e = mt(t);
  return Ft(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : j(e) && At(e)
    ? e
    : De(e);
}
function xt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = De(t),
    r = i === ((o = t.ownerDocument) == null ? void 0 : o.body),
    s = B(i);
  return r
    ? e.concat(
        s,
        s.visualViewport || [],
        At(i) ? i : [],
        s.frameElement && n ? xt(s.frameElement) : []
      )
    : e.concat(i, xt(i, [], n));
}
function Pe(t) {
  const e = z(t);
  let n = parseFloat(e.width) || 0,
    o = parseFloat(e.height) || 0;
  const i = j(t),
    r = i ? t.offsetWidth : n,
    s = i ? t.offsetHeight : o,
    c = Mt(n) !== r || Mt(o) !== s;
  return c && ((n = r), (o = s)), { width: n, height: o, $: c };
}
function ne(t) {
  return G(t) ? t : t.contextElement;
}
function dt(t) {
  const e = ne(t);
  if (!j(e)) return $(1);
  const n = e.getBoundingClientRect(),
    { width: o, height: i, $: r } = Pe(e);
  let s = (r ? Mt(n.width) : n.width) / o,
    c = (r ? Mt(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: s, y: c }
  );
}
const Hn = $(0);
function Te(t) {
  const e = B(t);
  return !ee() || !e.visualViewport
    ? Hn
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Ln(t, e, n) {
  return e === void 0 && (e = !1), !n || (e && n !== B(t)) ? !1 : e;
}
function it(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(),
    r = ne(t);
  let s = $(1);
  e && (o ? G(o) && (s = dt(o)) : (s = dt(t)));
  const c = Ln(r, n, o) ? Te(r) : $(0);
  let f = (i.left + c.x) / s.x,
    u = (i.top + c.y) / s.y,
    a = i.width / s.x,
    h = i.height / s.y;
  if (r) {
    const g = B(r),
      l = o && G(o) ? B(o) : o;
    let d = g,
      m = d.frameElement;
    for (; m && o && l !== d; ) {
      const p = dt(m),
        w = m.getBoundingClientRect(),
        b = z(m),
        x = w.left + (m.clientLeft + parseFloat(b.paddingLeft)) * p.x,
        C = w.top + (m.clientTop + parseFloat(b.paddingTop)) * p.y;
      (f *= p.x),
        (u *= p.y),
        (a *= p.x),
        (h *= p.y),
        (f += x),
        (u += C),
        (d = B(m)),
        (m = d.frameElement);
    }
  }
  return Wt({ width: a, height: h, x: f, y: u });
}
const Mn = [":popover-open", ":modal"];
function Se(t) {
  return Mn.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Bn(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const r = i === "fixed",
    s = J(o),
    c = e ? Se(e.floating) : !1;
  if (o === s || (c && r)) return n;
  let f = { scrollLeft: 0, scrollTop: 0 },
    u = $(1);
  const a = $(0),
    h = j(o);
  if ((h || (!h && !r)) && ((tt(o) !== "body" || At(s)) && (f = Nt(o)), j(o))) {
    const g = it(o);
    (u = dt(o)), (a.x = g.x + o.clientLeft), (a.y = g.y + o.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - f.scrollLeft * u.x + a.x,
    y: n.y * u.y - f.scrollTop * u.y + a.y,
  };
}
function Wn(t) {
  return Array.from(t.getClientRects());
}
function ke(t) {
  return it(J(t)).left + Nt(t).scrollLeft;
}
function Fn(t) {
  const e = J(t),
    n = Nt(t),
    o = t.ownerDocument.body,
    i = M(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
    r = M(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + ke(t);
  const c = -n.scrollTop;
  return (
    z(o).direction === "rtl" && (s += M(e.clientWidth, o.clientWidth) - i),
    { width: i, height: r, x: s, y: c }
  );
}
function Nn(t, e) {
  const n = B(t),
    o = J(t),
    i = n.visualViewport;
  let r = o.clientWidth,
    s = o.clientHeight,
    c = 0,
    f = 0;
  if (i) {
    (r = i.width), (s = i.height);
    const u = ee();
    (!u || (u && e === "fixed")) && ((c = i.offsetLeft), (f = i.offsetTop));
  }
  return { width: r, height: s, x: c, y: f };
}
function In(t, e) {
  const n = it(t, !0, e === "fixed"),
    o = n.top + t.clientTop,
    i = n.left + t.clientLeft,
    r = j(t) ? dt(t) : $(1),
    s = t.clientWidth * r.x,
    c = t.clientHeight * r.y,
    f = i * r.x,
    u = o * r.y;
  return { width: s, height: c, x: f, y: u };
}
function de(t, e, n) {
  let o;
  if (e === "viewport") o = Nn(t, n);
  else if (e === "document") o = Fn(J(t));
  else if (G(e)) o = In(e, n);
  else {
    const i = Te(t);
    o = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return Wt(o);
}
function He(t, e) {
  const n = mt(t);
  return n === e || !G(n) || Ft(n) ? !1 : z(n).position === "fixed" || He(n, e);
}
function Vn(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = xt(t, [], !1).filter((c) => G(c) && tt(c) !== "body"),
    i = null;
  const r = z(t).position === "fixed";
  let s = r ? mt(t) : t;
  for (; G(s) && !Ft(s); ) {
    const c = z(s),
      f = te(s);
    !f && c.position === "fixed" && (i = null),
      (
        r
          ? !f && !i
          : (!f &&
              c.position === "static" &&
              !!i &&
              ["absolute", "fixed"].includes(i.position)) ||
            (At(s) && !f && He(t, s))
      )
        ? (o = o.filter((a) => a !== s))
        : (i = c),
      (s = mt(s));
  }
  return e.set(t, o), o;
}
function zn(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const s = [...(n === "clippingAncestors" ? Vn(e, this._c) : [].concat(n)), o],
    c = s[0],
    f = s.reduce((u, a) => {
      const h = de(e, a, i);
      return (
        (u.top = M(h.top, u.top)),
        (u.right = Q(h.right, u.right)),
        (u.bottom = Q(h.bottom, u.bottom)),
        (u.left = M(h.left, u.left)),
        u
      );
    }, de(e, c, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top,
  };
}
function Yn(t) {
  const { width: e, height: n } = Pe(t);
  return { width: e, height: n };
}
function jn(t, e, n) {
  const o = j(e),
    i = J(e),
    r = n === "fixed",
    s = it(t, !0, r, e);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const f = $(0);
  if (o || (!o && !r))
    if (((tt(e) !== "body" || At(i)) && (c = Nt(e)), o)) {
      const h = it(e, !0, r, e);
      (f.x = h.x + e.clientLeft), (f.y = h.y + e.clientTop);
    } else i && (f.x = ke(i));
  const u = s.left + c.scrollLeft - f.x,
    a = s.top + c.scrollTop - f.y;
  return { x: u, y: a, width: s.width, height: s.height };
}
function he(t, e) {
  return !j(t) || z(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Le(t, e) {
  const n = B(t);
  if (!j(t) || Se(t)) return n;
  let o = he(t, e);
  for (; o && Sn(o) && z(o).position === "static"; ) o = he(o, e);
  return o &&
    (tt(o) === "html" ||
      (tt(o) === "body" && z(o).position === "static" && !te(o)))
    ? n
    : o || kn(t) || n;
}
const Xn = async function (t) {
  const e = this.getOffsetParent || Le,
    n = this.getDimensions;
  return {
    reference: jn(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, ...(await n(t.floating)) },
  };
};
function qn(t) {
  return z(t).direction === "rtl";
}
const Un = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bn,
  getDocumentElement: J,
  getClippingRect: zn,
  getOffsetParent: Le,
  getElementRects: Xn,
  getClientRects: Wn,
  getDimensions: Yn,
  getScale: dt,
  isElement: G,
  isRTL: qn,
};
function Kn(t, e) {
  let n = null,
    o;
  const i = J(t);
  function r() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), (n = null);
  }
  function s(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), r();
    const { left: u, top: a, width: h, height: g } = t.getBoundingClientRect();
    if ((c || e(), !h || !g)) return;
    const l = Tt(a),
      d = Tt(i.clientWidth - (u + h)),
      m = Tt(i.clientHeight - (a + g)),
      p = Tt(u),
      b = {
        rootMargin: -l + "px " + -d + "px " + -m + "px " + -p + "px",
        threshold: M(0, Q(1, f)) || 1,
      };
    let x = !0;
    function C(A) {
      const y = A[0].intersectionRatio;
      if (y !== f) {
        if (!x) return s();
        y
          ? s(!1, y)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 100));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...b, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, b);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function Gn(t, e, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: r = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: c = typeof IntersectionObserver == "function",
      animationFrame: f = !1,
    } = o,
    u = ne(t),
    a = i || r ? [...(u ? xt(u) : []), ...xt(e)] : [];
  a.forEach((w) => {
    i && w.addEventListener("scroll", n, { passive: !0 }),
      r && w.addEventListener("resize", n);
  });
  const h = u && c ? Kn(u, n) : null;
  let g = -1,
    l = null;
  s &&
    ((l = new ResizeObserver((w) => {
      let [b] = w;
      b &&
        b.target === u &&
        l &&
        (l.unobserve(e),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var x;
          (x = l) == null || x.observe(e);
        }))),
        n();
    })),
    u && !f && l.observe(u),
    l.observe(e));
  let d,
    m = f ? it(t) : null;
  f && p();
  function p() {
    const w = it(t);
    m &&
      (w.x !== m.x ||
        w.y !== m.y ||
        w.width !== m.width ||
        w.height !== m.height) &&
      n(),
      (m = w),
      (d = requestAnimationFrame(p));
  }
  return (
    n(),
    () => {
      var w;
      a.forEach((b) => {
        i && b.removeEventListener("scroll", n),
          r && b.removeEventListener("resize", n);
      }),
        h == null || h(),
        (w = l) == null || w.disconnect(),
        (l = null),
        f && cancelAnimationFrame(d);
    }
  );
}
const Jn = Cn;
function Zn(t) {
  return t !== void 0;
}
function Qn(t) {
  return t !== null;
}
const $n = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var p, w, b;
    const { placement: n, rects: o, middlewareData: i } = e,
      s = ((p = i.arrow) == null ? void 0 : p.centerOffset) !== 0,
      c = s ? 0 : t.arrowWidth,
      f = s ? 0 : t.arrowHeight,
      [u, a] = Me(n),
      h = { start: "0%", center: "50%", end: "100%" }[a],
      g = (((w = i.arrow) == null ? void 0 : w.x) ?? 0) + c / 2,
      l = (((b = i.arrow) == null ? void 0 : b.y) ?? 0) + f / 2;
    let d = "",
      m = "";
    return (
      u === "bottom"
        ? ((d = s ? h : `${g}px`), (m = `${-f}px`))
        : u === "top"
        ? ((d = s ? h : `${g}px`), (m = `${o.floating.height + f}px`))
        : u === "right"
        ? ((d = `${-f}px`), (m = s ? h : `${l}px`))
        : u === "left" &&
          ((d = `${o.floating.width + f}px`), (m = s ? h : `${l}px`)),
      { data: { x: d, y: m } }
    );
  },
});
function Me(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function to(t) {
  let e,
    n,
    o = `${t[9] ? void 0 : "none"},`,
    i,
    r,
    s,
    c,
    f;
  const u = t[33].default,
    a = lt(u, t, t[32], null);
  let h = [t[12], { "data-side": t[5] }, { "data-align": t[8] }],
    g = {};
  for (let l = 0; l < h.length; l += 1) g = k(g, h[l]);
  return {
    c() {
      (e = Ht("div")), (n = Ht("div")), a && a.c(), this.h();
    },
    l(l) {
      e = Lt(l, "DIV", { "data-radix-popper-content-wrapper": !0, dir: !0 });
      var d = ht(e);
      n = Lt(d, "DIV", { "data-side": !0, "data-align": !0 });
      var m = ht(n);
      a && a.l(m), m.forEach(V), d.forEach(V), this.h();
    },
    h() {
      var l, d, m, p, w, b;
      re(n, g),
        S(n, "animation", o),
        S(
          n,
          "opacity",
          (d = (l = t[2]) == null ? void 0 : l.hide) != null &&
            d.referenceHidden
            ? 0
            : void 0
        ),
        ut(e, "data-radix-popper-content-wrapper", ""),
        ut(e, "dir", (i = t[12].dir)),
        S(e, "position", t[6]),
        S(e, "left", 0),
        S(e, "top", 0),
        S(
          e,
          "transform",
          t[9]
            ? `translate3d(${Math.round(t[3] ?? 0)}px, ${Math.round(
                t[4] ?? 0
              )}px, 0)`
            : "translate3d(0, -200%, 0)"
        ),
        S(e, "min-width", "max-content"),
        S(e, "z-index", t[7]),
        S(
          e,
          "--radix-popper-transform-origin",
          ((p = (m = t[2]) == null ? void 0 : m.transformOrigin) == null
            ? void 0
            : p.x) +
            " " +
            ((b = (w = t[2]) == null ? void 0 : w.transformOrigin) == null
              ? void 0
              : b.y)
        );
    },
    m(l, d) {
      gt(l, e, d),
        ye(e, n),
        a && a.m(n, null),
        t[38](e),
        (s = !0),
        c ||
          ((f = [
            W(e, "pointerenter", t[34]),
            W(e, "pointerleave", t[35]),
            W(e, "blur", t[36]),
            W(e, "focus", t[37]),
            me((r = Oe.call(null, e, t[0] ?? []))),
          ]),
          (c = !0));
    },
    p(l, d) {
      var m, p, w, b, x, C;
      a &&
        a.p &&
        (!s || d[1] & 2) &&
        ct(a, u, l, l[32], s ? ft(u, l[32], d, null) : at(l[32]), null),
        re(
          n,
          (g = _t(h, [
            d[0] & 4096 && l[12],
            (!s || d[0] & 32) && { "data-side": l[5] },
            (!s || d[0] & 256) && { "data-align": l[8] },
          ]))
        ),
        d[0] & 512 && (o = `${l[9] ? void 0 : "none"},`),
        S(n, "animation", o),
        S(
          n,
          "opacity",
          (p = (m = l[2]) == null ? void 0 : m.hide) != null &&
            p.referenceHidden
            ? 0
            : void 0
        ),
        (!s || (d[0] & 4096 && i !== (i = l[12].dir))) && ut(e, "dir", i),
        r && ge(r.update) && d[0] & 1 && r.update.call(null, l[0] ?? []),
        d[0] & 64 && S(e, "position", l[6]),
        d[0] & 536 &&
          S(
            e,
            "transform",
            l[9]
              ? `translate3d(${Math.round(l[3] ?? 0)}px, ${Math.round(
                  l[4] ?? 0
                )}px, 0)`
              : "translate3d(0, -200%, 0)"
          ),
        d[0] & 128 && S(e, "z-index", l[7]),
        d[0] & 4 &&
          S(
            e,
            "--radix-popper-transform-origin",
            ((b = (w = l[2]) == null ? void 0 : w.transformOrigin) == null
              ? void 0
              : b.x) +
              " " +
              ((C = (x = l[2]) == null ? void 0 : x.transformOrigin) == null
                ? void 0
                : C.y)
          );
    },
    i(l) {
      s || (N(a, l), (s = !0));
    },
    o(l) {
      I(a, l), (s = !1);
    },
    d(l) {
      l && V(e), a && a.d(l), t[38](null), (c = !1), pe(f);
    },
  };
}
const Be = { placedSide: "bottom" },
  { getContext: eo, setContext: no } = Ct(Be),
  oo = eo;
function io(t, e, n) {
  let o, i, r, s, c, f, u, a;
  const h = [
    "use",
    "ref",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "avoidCollisions",
  ];
  let g = Y(e, h),
    l,
    d,
    { $$slots: m = {}, $$scope: p } = e,
    { use: w = [] } = e,
    { ref: b = null } = e,
    { side: x = Be.placedSide } = e,
    { sideOffset: C = 0 } = e,
    { align: A = "center" } = e,
    { alignOffset: y = 0 } = e,
    { arrowPadding: _ = 0 } = e,
    { collisionBoundary: D = [] } = e,
    { collisionPadding: P = 0 } = e,
    { sticky: X = "partial" } = e,
    { hideWhenDetached: q = !1 } = e,
    { avoidCollisions: R = !0 } = e;
  const Z = Jt();
  ot(t, Z, (v) => n(30, (l = v)));
  const E = no();
  ot(t, E, (v) => n(31, (d = v)));
  let O;
  Xt(() => {
    n(14, (b = null));
  });
  let H,
    T,
    L,
    Ot = null,
    Rt = null;
  function Fe(v) {
    _n(l.anchor, O, v).then(async (Et) => {
      n(
        6,
        ({ strategy: H, placement: T, middlewareData: L, x: Ot, y: Rt } = Et),
        H,
        n(24, T),
        n(2, L),
        n(3, Ot),
        n(4, Rt)
      );
    });
  }
  let nt = null;
  Xt(() => {
    nt == null || nt();
  });
  function Ne(v) {
    F.call(this, t, v);
  }
  function Ie(v) {
    F.call(this, t, v);
  }
  function Ve(v) {
    F.call(this, t, v);
  }
  function ze(v) {
    F.call(this, t, v);
  }
  function Ye(v) {
    Gt[v ? "unshift" : "push"](() => {
      (O = v), n(1, O);
    });
  }
  return (
    (t.$$set = (v) => {
      (e = k(k({}, e), vt(v))),
        n(12, (g = Y(e, h))),
        "use" in v && n(0, (w = v.use)),
        "ref" in v && n(14, (b = v.ref)),
        "side" in v && n(15, (x = v.side)),
        "sideOffset" in v && n(16, (C = v.sideOffset)),
        "align" in v && n(17, (A = v.align)),
        "alignOffset" in v && n(18, (y = v.alignOffset)),
        "arrowPadding" in v && n(19, (_ = v.arrowPadding)),
        "collisionBoundary" in v && n(20, (D = v.collisionBoundary)),
        "collisionPadding" in v && n(13, (P = v.collisionPadding)),
        "sticky" in v && n(21, (X = v.sticky)),
        "hideWhenDetached" in v && n(22, (q = v.hideWhenDetached)),
        "avoidCollisions" in v && n(23, (R = v.avoidCollisions)),
        "$$scope" in v && n(32, (p = v.$$scope));
    }),
    (t.$$.update = () => {
      var v, Et, oe;
      if (
        (t.$$.dirty[0] & 2 && O && n(14, (b = O)),
        t.$$.dirty[0] & 163840 &&
          n(27, (o = x + (A !== "center" ? "-" + A : ""))),
        t.$$.dirty[0] & 8192 &&
          n(
            13,
            (P =
              typeof P == "number"
                ? P
                : { top: 0, right: 0, bottom: 0, left: 0, ...P })
          ),
        t.$$.dirty[0] & 1048576 && n(29, (i = Array.isArray(D) ? D : [D])),
        t.$$.dirty[0] & 536870912 && n(28, (r = i.length > 0)),
        t.$$.dirty[0] & 805314560 &&
          n(26, (s = { padding: P, boundary: i.filter(Qn), altBoundary: r })),
        (t.$$.dirty[0] & 1324154882) | (t.$$.dirty[1] & 1) &&
          O &&
          l.anchor &&
          (nt && nt(),
          n(
            25,
            (nt = Gn(l.anchor, O, () => {
              const It = d.arrowWidth ?? 0,
                Dt = d.arrowHeight ?? 0;
              Fe({
                platform: Un,
                strategy: "fixed",
                placement: o,
                middleware: [
                  En({ mainAxis: C + Dt, alignmentAxis: y }),
                  R
                    ? Dn({
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter: X === "partial" ? Pn() : void 0,
                        ...s,
                      })
                    : void 0,
                  R ? An({ ...s }) : void 0,
                  Tn({
                    ...s,
                    apply: ({
                      elements: Vt,
                      rects: zt,
                      availableWidth: je,
                      availableHeight: Xe,
                    }) => {
                      const { width: qe, height: Ue } = zt.reference,
                        Pt = Vt.floating.style;
                      Pt.setProperty(
                        "--radix-popper-available-width",
                        `${je}px`
                      ),
                        Pt.setProperty(
                          "--radix-popper-available-height",
                          `${Xe}px`
                        ),
                        Pt.setProperty(
                          "--radix-popper-anchor-width",
                          `${qe}px`
                        ),
                        Pt.setProperty(
                          "--radix-popper-anchor-height",
                          `${Ue}px`
                        );
                    },
                  }),
                  l.arrow ? Jn({ element: l.arrow, padding: _ }) : void 0,
                  $n({ arrowWidth: It, arrowHeight: Dt }),
                  q ? On({ strategy: "referenceHidden" }) : void 0,
                ].filter(Zn),
              });
            }))
          )),
        t.$$.dirty[0] & 24 && n(9, (c = Ot !== null && Rt !== null)),
        t.$$.dirty[0] & 16809984 &&
          n(
            5,
            ([f, u] = T ? Me(T) : [x, void 0]),
            f,
            (n(8, u), n(24, T), n(15, x))
          ),
        t.$$.dirty[0] & 36)
      ) {
        const It =
            ((v = L == null ? void 0 : L.arrow) == null ? void 0 : v.x) || 0,
          Dt =
            ((Et = L == null ? void 0 : L.arrow) == null ? void 0 : Et.y) || 0,
          Vt =
            ((oe = L == null ? void 0 : L.arrow) == null
              ? void 0
              : oe.centerOffset) !== 0;
        E.update((zt) => ({
          ...zt,
          placedSide: f,
          arrowX: It,
          arrowY: Dt,
          shouldHideArrow: Vt,
        }));
      }
      t.$$.dirty[0] & 2 &&
        n(
          7,
          (a =
            (O &&
              (window == null ? void 0 : window.getComputedStyle(O).zIndex)) ||
            0)
        );
    }),
    [
      w,
      O,
      L,
      Ot,
      Rt,
      f,
      H,
      a,
      u,
      c,
      Z,
      E,
      g,
      P,
      b,
      x,
      C,
      A,
      y,
      _,
      D,
      X,
      q,
      R,
      T,
      nt,
      s,
      o,
      r,
      i,
      l,
      d,
      p,
      m,
      Ne,
      Ie,
      Ve,
      ze,
      Ye,
    ]
  );
}
class ro extends rt {
  constructor(e) {
    super(),
      st(
        this,
        e,
        io,
        to,
        et,
        {
          use: 0,
          ref: 14,
          side: 15,
          sideOffset: 16,
          align: 17,
          alignOffset: 18,
          arrowPadding: 19,
          collisionBoundary: 20,
          collisionPadding: 13,
          sticky: 21,
          hideWhenDetached: 22,
          avoidCollisions: 23,
        },
        null,
        [-1, -1]
      );
  }
}
function so(t) {
  let e;
  return {
    c() {
      (e = we("polygon")), this.h();
    },
    l(n) {
      (e = be(n, "polygon", { points: !0 })), ht(e).forEach(V), this.h();
    },
    h() {
      ut(e, "points", "0,0 30,0 15,10");
    },
    m(n, o) {
      gt(n, e, o);
    },
    p: Yt,
    i: Yt,
    o: Yt,
    d(n) {
      n && V(e);
    },
  };
}
function lo(t) {
  let e;
  const n = t[5].default,
    o = lt(n, t, t[4], null);
  return {
    c() {
      o && o.c();
    },
    l(i) {
      o && o.l(i);
    },
    m(i, r) {
      o && o.m(i, r), (e = !0);
    },
    p(i, r) {
      o &&
        o.p &&
        (!e || r & 16) &&
        ct(o, n, i, i[4], e ? ft(n, i[4], r, null) : at(i[4]), null);
    },
    i(i) {
      e || (N(o, i), (e = !0));
    },
    o(i) {
      I(o, i), (e = !1);
    },
    d(i) {
      o && o.d(i);
    },
  };
}
function co(t) {
  let e, n, o, i, r;
  const s = [lo, so],
    c = [];
  function f(l, d) {
    return l[3].default ? 0 : 1;
  }
  (n = f(t)), (o = c[n] = s[n](t));
  const u = t[5].default,
    a = lt(u, t, t[4], null);
  let h = [
      t[2],
      { width: t[0] },
      { height: t[1] },
      { viewBox: "0 0 30 10" },
      { preserveAspectRatio: "none" },
    ],
    g = {};
  for (let l = 0; l < h.length; l += 1) g = k(g, h[l]);
  return {
    c() {
      (e = we("svg")), o.c(), (i = kt()), a && a.c(), this.h();
    },
    l(l) {
      e = be(l, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        preserveAspectRatio: !0,
      });
      var d = ht(e);
      o.l(d), (i = kt()), a && a.l(d), d.forEach(V), this.h();
    },
    h() {
      se(e, g);
    },
    m(l, d) {
      gt(l, e, d), c[n].m(e, null), ye(e, i), a && a.m(e, null), (r = !0);
    },
    p(l, [d]) {
      let m = n;
      (n = f(l)),
        n === m
          ? c[n].p(l, d)
          : (Ze(),
            I(c[m], 1, 1, () => {
              c[m] = null;
            }),
            Qe(),
            (o = c[n]),
            o ? o.p(l, d) : ((o = c[n] = s[n](l)), o.c()),
            N(o, 1),
            o.m(e, i)),
        a &&
          a.p &&
          (!r || d & 16) &&
          ct(a, u, l, l[4], r ? ft(u, l[4], d, null) : at(l[4]), null),
        se(
          e,
          (g = _t(h, [
            d & 4 && l[2],
            (!r || d & 1) && { width: l[0] },
            (!r || d & 2) && { height: l[1] },
            { viewBox: "0 0 30 10" },
            { preserveAspectRatio: "none" },
          ]))
        );
    },
    i(l) {
      r || (N(o), N(a, l), (r = !0));
    },
    o(l) {
      I(o), I(a, l), (r = !1);
    },
    d(l) {
      l && V(e), c[n].d(), a && a.d(l);
    },
  };
}
function ao(t, e, n) {
  const o = ["width", "height"];
  let i = Y(e, o),
    { $$slots: r = {}, $$scope: s } = e;
  const c = $e(r);
  let { width: f = 10 } = e,
    { height: u = 5 } = e;
  return (
    (t.$$set = (a) => {
      (e = k(k({}, e), vt(a))),
        n(2, (i = Y(e, o))),
        "width" in a && n(0, (f = a.width)),
        "height" in a && n(1, (u = a.height)),
        "$$scope" in a && n(4, (s = a.$$scope));
    }),
    [f, u, i, c, s, r]
  );
}
let fo = class extends rt {
  constructor(e) {
    super(), st(this, e, ao, co, et, { width: 0, height: 1 });
  }
};
const uo = { Root: fo };
function ho(t) {
  let e, n, o;
  const i = [
    t[6],
    { style: (t[6].style ?? "") + "; display:block" },
    { width: t[0] },
    { height: t[1] },
  ];
  let r = {};
  for (let s = 0; s < i.length; s += 1) r = k(r, i[s]);
  return (
    (n = new uo.Root({ props: r })),
    {
      c() {
        (e = Ht("span")), xe(n.$$.fragment), this.h();
      },
      l(s) {
        e = Lt(s, "SPAN", { style: !0 });
        var c = ht(e);
        ve(n.$$.fragment, c), c.forEach(V), this.h();
      },
      h() {
        ut(e, "style", t[2]);
      },
      m(s, c) {
        gt(s, e, c), _e(n, e, null), t[9](e), (o = !0);
      },
      p(s, [c]) {
        const f =
          c & 67
            ? _t(i, [
                c & 64 && Ce(s[6]),
                c & 64 && { style: (s[6].style ?? "") + "; display:block" },
                c & 1 && { width: s[0] },
                c & 2 && { height: s[1] },
              ])
            : {};
        n.$set(f), (!o || c & 4) && ut(e, "style", s[2]);
      },
      i(s) {
        o || (N(n.$$.fragment, s), (o = !0));
      },
      o(s) {
        I(n.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && V(e), Ae(n), t[9](null);
      },
    }
  );
}
function mo(t, e, n) {
  let o, i;
  const r = ["width", "height"];
  let s = Y(e, r),
    c,
    f;
  const u = { top: "bottom", right: "left", bottom: "top", left: "right" };
  let { width: a = void 0 } = e,
    { height: h = void 0 } = e;
  const g = Jt();
  ot(t, g, (m) => n(3, (f = m)));
  const l = oo();
  ot(t, l, (m) => n(8, (c = m)));
  function d(m) {
    Gt[m ? "unshift" : "push"](() => {
      (f.arrow = m), g.set(f);
    });
  }
  return (
    (t.$$set = (m) => {
      (e = k(k({}, e), vt(m))),
        n(6, (s = Y(e, r))),
        "width" in m && n(0, (a = m.width)),
        "height" in m && n(1, (h = m.height));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 3 &&
        l.update((m) => ({ ...m, arrowWidth: a, arrowHeight: h })),
        t.$$.dirty & 256 && n(7, (o = u[c.placedSide])),
        t.$$.dirty & 384 &&
          n(
            2,
            (i = rn({
              position: "absolute",
              left: c.arrowX ? c.arrowX + "px" : void 0,
              top: c.arrowY ? c.arrowY + "px" : void 0,
              [o]: 0,
              "transform-origin": {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[c.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[c.placedSide],
              visibility: c.shouldHideArrow ? "hidden" : "initial",
            }))
          );
    }),
    [a, h, i, f, g, l, s, o, c, d]
  );
}
class go extends rt {
  constructor(e) {
    super(), st(this, e, mo, ho, et, { width: 0, height: 1 });
  }
}
const po = { Root: fn, Anchor: hn, Arrow: go, Content: ro };
function yo(t) {
  let e;
  const n = t[5].default,
    o = lt(n, t, t[4], null);
  return {
    c() {
      o && o.c();
    },
    l(i) {
      o && o.l(i);
    },
    m(i, r) {
      o && o.m(i, r), (e = !0);
    },
    p(i, [r]) {
      o &&
        o.p &&
        (!e || r & 16) &&
        ct(o, n, i, i[4], e ? ft(n, i[4], r, null) : at(i[4]), null);
    },
    i(i) {
      e || (N(o, i), (e = !0));
    },
    o(i) {
      I(o, i), (e = !1);
    },
    d(i) {
      o && o.d(i);
    },
  };
}
const Kt = {
    isOpenDelayed: !0,
    isPointerInTransit: !1,
    disableHoverableContent: !1,
  },
  { getContext: wo, setContext: bo } = Ct(Kt),
  xo = wo;
function vo(t, e, n) {
  let { $$slots: o = {}, $$scope: i } = e,
    { delayDuration: r = 300 } = e,
    { skipDelayDuration: s = 300 } = e,
    { disableHoverableContent: c = Kt.disableHoverableContent } = e,
    f = 0,
    u = Kt.isOpenDelayed;
  const a = () => {
      wt && (window.clearTimeout(f), n(3, (u = !1)));
    },
    h = () => {
      wt &&
        (window.clearTimeout(f),
        (f = window.setTimeout(() => {
          n(3, (u = !0));
        }, s)));
    },
    g = bo();
  return (
    (t.$$set = (l) => {
      "delayDuration" in l && n(0, (r = l.delayDuration)),
        "skipDelayDuration" in l && n(1, (s = l.skipDelayDuration)),
        "disableHoverableContent" in l && n(2, (c = l.disableHoverableContent)),
        "$$scope" in l && n(4, (i = l.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 13 &&
        g.update((l) => ({
          ...l,
          delayDuration: r,
          isOpenDelayed: u,
          onOpen: a,
          onClose: h,
          disableHoverableContent: c,
        }));
    }),
    [r, s, c, u, i, o]
  );
}
class ko extends rt {
  constructor(e) {
    super(),
      st(this, e, vo, yo, et, {
        delayDuration: 0,
        skipDelayDuration: 1,
        disableHoverableContent: 2,
      });
  }
}
const _o = "tooltip.open";
function Co(t) {
  let e;
  const n = t[11].default,
    o = lt(n, t, t[12], null);
  return {
    c() {
      o && o.c();
    },
    l(i) {
      o && o.l(i);
    },
    m(i, r) {
      o && o.m(i, r), (e = !0);
    },
    p(i, r) {
      o &&
        o.p &&
        (!e || r & 4096) &&
        ct(o, n, i, i[12], e ? ft(n, i[12], r, null) : at(i[12]), null);
    },
    i(i) {
      e || (N(o, i), (e = !0));
    },
    o(i) {
      I(o, i), (e = !1);
    },
    d(i) {
      o && o.d(i);
    },
  };
}
function Ao(t) {
  let e, n;
  const o = [{ use: t[0] }, t[3]];
  let i = { $$slots: { default: [Co] }, $$scope: { ctx: t } };
  for (let r = 0; r < o.length; r += 1) i = k(i, o[r]);
  return (
    (e = new po.Root({ props: i })),
    {
      c() {
        xe(e.$$.fragment);
      },
      l(r) {
        ve(e.$$.fragment, r);
      },
      m(r, s) {
        _e(e, r, s), (n = !0);
      },
      p(r, [s]) {
        const c =
          s & 9 ? _t(o, [s & 1 && { use: r[0] }, s & 8 && Ce(r[3])]) : {};
        s & 4096 && (c.$$scope = { dirty: s, ctx: r }), e.$set(c);
      },
      i(r) {
        n || (N(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        I(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        Ae(e, r);
      },
    }
  );
}
const We = { open: !1, contentId: St(), trigger: null },
  { getContext: Oo, setContext: Ro } = Ct(We),
  Ho = Oo;
function Eo(t, e, n) {
  let o;
  const i = ["open", "delayDuration", "disableHoverableContent", "use"];
  let r = Y(e, i),
    s,
    c,
    { $$slots: f = {}, $$scope: u } = e,
    { open: a = We.open } = e,
    { delayDuration: h = void 0 } = e,
    { disableHoverableContent: g = void 0 } = e,
    { use: l = [] } = e;
  const d = xo();
  ot(t, d, (_) => n(9, (s = _)));
  const m = Ro({
    open: (_) => {
      _
        ? (s == null || s.onOpen(), document.dispatchEvent(new CustomEvent(_o)))
        : s == null || s.onClose(),
        n(4, (a = _));
    },
  });
  ot(t, m, (_) => n(10, (c = _)));
  let p = 0,
    w = !1;
  const b = () => {
      window.clearTimeout(p),
        n(7, (w = !1)),
        m.update((_) => ({ ..._, open: !0 }));
    },
    x = () => {
      wt && (window.clearTimeout(p), m.update((_) => ({ ..._, open: !1 })));
    },
    C = () => {
      wt &&
        (window.clearTimeout(p),
        (p = window.setTimeout(() => {
          n(7, (w = !0)), m.update((_) => ({ ..._, open: !0 }));
        }, h)));
    },
    A = () => {
      s != null && s.isOpenDelayed ? C() : b();
    },
    y = () => {
      g ? x() : window.clearTimeout(p);
    };
  return (
    Xt(() => {
      wt && window.clearTimeout(p);
    }),
    (t.$$set = (_) => {
      (e = k(k({}, e), vt(_))),
        n(3, (r = Y(e, i))),
        "open" in _ && n(4, (a = _.open)),
        "delayDuration" in _ && n(5, (h = _.delayDuration)),
        "disableHoverableContent" in _ && n(6, (g = _.disableHoverableContent)),
        "use" in _ && n(0, (l = _.use)),
        "$$scope" in _ && n(12, (u = _.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 576 &&
        n(6, (g = g ?? (s == null ? void 0 : s.disableHoverableContent))),
        t.$$.dirty & 544 &&
          n(5, (h = h ?? (s == null ? void 0 : s.delayDuration))),
        t.$$.dirty & 1152 &&
          n(
            8,
            (o = (function () {
              return c.open ? (w ? "delayed-open" : "instant-open") : "closed";
            })())
          ),
        t.$$.dirty & 336 &&
          m.update((_) => ({
            ..._,
            open: a,
            stateAttribute: o,
            onTriggerEnter: A,
            onTriggerLeave: y,
            onOpen: b,
            onClose: x,
            disableHoverableContent: g,
          }));
    }),
    [l, d, m, r, a, h, g, w, o, s, c, f, u]
  );
}
class Lo extends rt {
  constructor(e) {
    super(),
      st(this, e, Eo, Ao, et, {
        open: 4,
        delayDuration: 5,
        disableHoverableContent: 6,
        use: 0,
      });
  }
}
export {
  go as A,
  po as P,
  Lo as R,
  _o as T,
  xo as a,
  ko as b,
  en as c,
  Ho as g,
  wt as i,
  Ct as r,
  Oe as u,
};
