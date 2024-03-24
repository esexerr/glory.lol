import {
  S as D,
  i as F,
  s as P,
  C as G,
  J as g,
  a1 as j,
  e as k,
  a2 as q,
  m as A,
  h as m,
  a3 as v,
  b as N,
  G as J,
  D as M,
  E as O,
  F as V,
  M as B,
  g as w,
  d as H,
  V as K,
  O as S,
  P as z,
} from "./index.4f26dcbc.js";
const C = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
function E(n, e, i) {
  const s = n.slice();
  return (s[10] = e[i][0]), (s[11] = e[i][1]), s;
}
function b(n) {
  let e,
    i = [n[11]],
    s = {};
  for (let l = 0; l < i.length; l += 1) s = g(s, i[l]);
  return {
    c() {
      (e = j(n[10])), this.h();
    },
    l(l) {
      (e = q(l, n[10], {})), A(e).forEach(m), this.h();
    },
    h() {
      v(e, s);
    },
    m(l, a) {
      N(l, e, a);
    },
    p(l, a) {
      v(e, (s = B(i, [a & 32 && l[11]])));
    },
    d(l) {
      l && m(e);
    },
  };
}
function I(n) {
  let e = n[10],
    i,
    s = n[10] && b(n);
  return {
    c() {
      s && s.c(), (i = k());
    },
    l(l) {
      s && s.l(l), (i = k());
    },
    m(l, a) {
      s && s.m(l, a), N(l, i, a);
    },
    p(l, a) {
      l[10]
        ? e
          ? P(e, l[10])
            ? (s.d(1), (s = b(l)), (e = l[10]), s.c(), s.m(i.parentNode, i))
            : s.p(l, a)
          : ((s = b(l)), (e = l[10]), s.c(), s.m(i.parentNode, i))
        : e && (s.d(1), (s = null), (e = l[10]));
    },
    d(l) {
      l && m(i), s && s.d(l);
    },
  };
}
function L(n) {
  let e,
    i,
    s,
    l,
    a,
    f = n[5],
    h = [];
  for (let t = 0; t < f.length; t += 1) h[t] = I(E(n, f, t));
  const d = n[9].default,
    u = G(d, n, n[8], null);
  let c = [
      C,
      n[6],
      { width: n[2] },
      { height: n[2] },
      { stroke: n[1] },
      {
        "stroke-width": (s = n[4] ? (Number(n[3]) * 24) / Number(n[2]) : n[3]),
      },
      { class: (l = `lucide-icon lucide lucide-${n[0]} ${n[7].class ?? ""}`) },
    ],
    _ = {};
  for (let t = 0; t < c.length; t += 1) _ = g(_, c[t]);
  return {
    c() {
      e = j("svg");
      for (let t = 0; t < h.length; t += 1) h[t].c();
      (i = k()), u && u.c(), this.h();
    },
    l(t) {
      e = q(t, "svg", {
        width: !0,
        height: !0,
        stroke: !0,
        "stroke-width": !0,
        class: !0,
      });
      var o = A(e);
      for (let r = 0; r < h.length; r += 1) h[r].l(o);
      (i = k()), u && u.l(o), o.forEach(m), this.h();
    },
    h() {
      v(e, _);
    },
    m(t, o) {
      N(t, e, o);
      for (let r = 0; r < h.length; r += 1) h[r] && h[r].m(e, null);
      J(e, i), u && u.m(e, null), (a = !0);
    },
    p(t, [o]) {
      if (o & 32) {
        f = t[5];
        let r;
        for (r = 0; r < f.length; r += 1) {
          const W = E(t, f, r);
          h[r] ? h[r].p(W, o) : ((h[r] = I(W)), h[r].c(), h[r].m(e, i));
        }
        for (; r < h.length; r += 1) h[r].d(1);
        h.length = f.length;
      }
      u &&
        u.p &&
        (!a || o & 256) &&
        M(u, d, t, t[8], a ? V(d, t[8], o, null) : O(t[8]), null),
        v(
          e,
          (_ = B(c, [
            C,
            o & 64 && t[6],
            (!a || o & 4) && { width: t[2] },
            (!a || o & 4) && { height: t[2] },
            (!a || o & 2) && { stroke: t[1] },
            (!a ||
              (o & 28 &&
                s !==
                  (s = t[4] ? (Number(t[3]) * 24) / Number(t[2]) : t[3]))) && {
              "stroke-width": s,
            },
            (!a ||
              (o & 129 &&
                l !==
                  (l = `lucide-icon lucide lucide-${t[0]} ${
                    t[7].class ?? ""
                  }`))) && { class: l },
          ]))
        );
    },
    i(t) {
      a || (w(u, t), (a = !0));
    },
    o(t) {
      H(u, t), (a = !1);
    },
    d(t) {
      t && m(e), K(h, t), u && u.d(t);
    },
  };
}
function Q(n, e, i) {
  const s = [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
  ];
  let l = S(e, s),
    { $$slots: a = {}, $$scope: f } = e,
    { name: h } = e,
    { color: d = "currentColor" } = e,
    { size: u = 24 } = e,
    { strokeWidth: c = 2 } = e,
    { absoluteStrokeWidth: _ = !1 } = e,
    { iconNode: t } = e;
  return (
    (n.$$set = (o) => {
      i(7, (e = g(g({}, e), z(o)))),
        i(6, (l = S(e, s))),
        "name" in o && i(0, (h = o.name)),
        "color" in o && i(1, (d = o.color)),
        "size" in o && i(2, (u = o.size)),
        "strokeWidth" in o && i(3, (c = o.strokeWidth)),
        "absoluteStrokeWidth" in o && i(4, (_ = o.absoluteStrokeWidth)),
        "iconNode" in o && i(5, (t = o.iconNode)),
        "$$scope" in o && i(8, (f = o.$$scope));
    }),
    (e = z(e)),
    [h, d, u, c, _, t, l, e, f, a]
  );
}
class R extends D {
  constructor(e) {
    super(),
      F(this, e, Q, L, P, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5,
      });
  }
}
const U = R;
export { U as I };
