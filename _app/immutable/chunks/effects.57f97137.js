import {
  S as D,
  i as V,
  s as G,
  C as $,
  J as C,
  k,
  a as N,
  l as v,
  m as p,
  c as B,
  h as m,
  n as b,
  p as Y,
  K as J,
  b as P,
  G as g,
  a6 as ce,
  a9 as he,
  L as ae,
  D as ee,
  E as te,
  F as ne,
  M as X,
  N as ie,
  g as T,
  d as I,
  a7 as me,
  O as z,
  I as re,
  P as F,
  e as se,
  v as ge,
  f as _e,
  y,
  z as S,
  A as q,
  U as fe,
  B as j,
  w as A,
  Z as M,
  _ as R,
  H as U,
  q as O,
  r as H,
  V as be,
  o as ke,
} from "./index.4f26dcbc.js";
import { I as ve } from "./Icon.bd1408a8.js";
import { u as oe, r as pe } from "./root.43e3996f.js";
import { c as Z } from "./utils.1edc855c.js";
function xe(l) {
  let e, n, t, a, r, c, i, u, d, w, x;
  const s = l[9].default,
    f = $(s, l, l[8], null);
  let o = [
      { type: "button" },
      { role: "checkbox" },
      { "aria-checked": (r = W(l[0]) ? "mixed" : l[0]) },
      { "aria-required": l[2] },
      { "data-state": (c = K(l[5].checked)) },
      { "data-disabled": (i = l[1] ? "" : void 0) },
      { disabled: l[1] },
      { value: l[4] },
      l[7],
    ],
    _ = {};
  for (let h = 0; h < o.length; h += 1) _ = C(_, o[h]);
  return {
    c() {
      (e = k("button")), f && f.c(), (n = N()), (t = k("input")), this.h();
    },
    l(h) {
      e = v(h, "BUTTON", {
        type: !0,
        role: !0,
        "aria-checked": !0,
        "aria-required": !0,
        "data-state": !0,
        "data-disabled": !0,
      });
      var E = p(e);
      f && f.l(E),
        (n = B(E)),
        (t = v(E, "INPUT", {
          type: !0,
          "aria-hidden": !0,
          tabindex: !0,
          name: !0,
        })),
        E.forEach(m),
        this.h();
    },
    h() {
      b(t, "type", "checkbox"),
        b(t, "aria-hidden", "true"),
        (t.hidden = !0),
        b(t, "tabindex", -1),
        b(t, "name", l[3]),
        (t.value = l[4]),
        (t.checked = a = W(l[0]) ? !1 : l[0]),
        (t.required = l[2]),
        (t.disabled = l[1]),
        Y(t, "position", "absolute"),
        Y(t, "pointer-events", "none"),
        Y(t, "opacity", "0"),
        Y(t, "margin", "0"),
        Y(t, "transform", "translateX(-100%)"),
        J(e, _);
    },
    m(h, E) {
      P(h, e, E),
        f && f.m(e, null),
        g(e, n),
        g(e, t),
        e.autofocus && e.focus(),
        (d = !0),
        w ||
          ((x = [
            ce(e, "click", he(l[10])),
            ce(e, "keydown", Ie),
            ae((u = oe.call(null, e, l[7].use))),
          ]),
          (w = !0));
    },
    p(h, [E]) {
      f &&
        f.p &&
        (!d || E & 256) &&
        ee(f, s, h, h[8], d ? ne(s, h[8], E, null) : te(h[8]), null),
        (!d || E & 8) && b(t, "name", h[3]),
        (!d || E & 16) && (t.value = h[4]),
        (!d || (E & 1 && a !== (a = W(h[0]) ? !1 : h[0]))) && (t.checked = a),
        (!d || E & 4) && (t.required = h[2]),
        (!d || E & 2) && (t.disabled = h[1]),
        J(
          e,
          (_ = X(o, [
            { type: "button" },
            { role: "checkbox" },
            (!d || (E & 1 && r !== (r = W(h[0]) ? "mixed" : h[0]))) && {
              "aria-checked": r,
            },
            (!d || E & 4) && { "aria-required": h[2] },
            (!d || (E & 32 && c !== (c = K(h[5].checked)))) && {
              "data-state": c,
            },
            (!d || (E & 2 && i !== (i = h[1] ? "" : void 0))) && {
              "data-disabled": i,
            },
            (!d || E & 2) && { disabled: h[1] },
            (!d || E & 16) && { value: h[4] },
            E & 128 && h[7],
          ]))
        ),
        u && ie(u.update) && E & 128 && u.update.call(null, h[7].use);
    },
    i(h) {
      d || (T(f, h), (d = !0));
    },
    o(h) {
      I(f, h), (d = !1);
    },
    d(h) {
      h && m(e), f && f.d(h), (w = !1), me(x);
    },
  };
}
const Q = { checked: !1, disabled: !1 },
  { getContext: we, setContext: Ee } = pe(Q),
  Te = we;
function W(l) {
  return l === "indeterminate";
}
function K(l) {
  return W(l) ? "indeterminate" : l ? "checked" : "unchecked";
}
const Ie = (l) => {
  l.key === "Enter" && l.preventDefault();
};
function De(l, e, n) {
  const t = ["checked", "disabled", "required", "name", "value"];
  let a = z(e, t),
    r,
    { $$slots: c = {}, $$scope: i } = e,
    { checked: u = Q.checked } = e,
    { disabled: d = Q.disabled } = e,
    { required: w = !1 } = e,
    { name: x = "" } = e,
    { value: s = "" } = e;
  const f = Ee();
  re(l, f, (_) => n(5, (r = _)));
  const o = () => {
    W(u) ? n(0, (u = !0)) : n(0, (u = !u));
  };
  return (
    (l.$$set = (_) => {
      (e = C(C({}, e), F(_))),
        n(7, (a = z(e, t))),
        "checked" in _ && n(0, (u = _.checked)),
        "disabled" in _ && n(1, (d = _.disabled)),
        "required" in _ && n(2, (w = _.required)),
        "name" in _ && n(3, (x = _.name)),
        "value" in _ && n(4, (s = _.value)),
        "$$scope" in _ && n(8, (i = _.$$scope));
    }),
    (l.$$.update = () => {
      l.$$.dirty & 3 && f.set({ checked: u, disabled: d });
    }),
    [u, d, w, x, s, r, f, a, i, c, o]
  );
}
class Ve extends D {
  constructor(e) {
    super(),
      V(this, e, De, xe, G, {
        checked: 0,
        disabled: 1,
        required: 2,
        name: 3,
        value: 4,
      });
  }
}
function le(l) {
  let e, n, t, a, r, c, i;
  const u = l[4].default,
    d = $(u, l, l[3], null);
  let w = [
      l[2],
      { "data-state": (n = K(l[0].checked)) },
      { "data-disabled": (t = l[0].disabled ? "" : void 0) },
    ],
    x = {};
  for (let s = 0; s < w.length; s += 1) x = C(x, w[s]);
  return {
    c() {
      (e = k("span")), d && d.c(), this.h();
    },
    l(s) {
      e = v(s, "SPAN", { "data-state": !0, "data-disabled": !0 });
      var f = p(e);
      d && d.l(f), f.forEach(m), this.h();
    },
    h() {
      J(e, x), Y(e, "pointer-events", "none");
    },
    m(s, f) {
      P(s, e, f),
        d && d.m(e, null),
        (r = !0),
        c || ((i = ae((a = oe.call(null, e, l[2].use)))), (c = !0));
    },
    p(s, f) {
      d &&
        d.p &&
        (!r || f & 8) &&
        ee(d, u, s, s[3], r ? ne(u, s[3], f, null) : te(s[3]), null),
        J(
          e,
          (x = X(w, [
            f & 4 && s[2],
            (!r || (f & 1 && n !== (n = K(s[0].checked)))) && {
              "data-state": n,
            },
            (!r || (f & 1 && t !== (t = s[0].disabled ? "" : void 0))) && {
              "data-disabled": t,
            },
          ]))
        ),
        a && ie(a.update) && f & 4 && a.update.call(null, s[2].use),
        Y(e, "pointer-events", "none");
    },
    i(s) {
      r || (T(d, s), (r = !0));
    },
    o(s) {
      I(d, s), (r = !1);
    },
    d(s) {
      s && m(e), d && d.d(s), (c = !1), i();
    },
  };
}
function Ge(l) {
  let e = W(l[0].checked) || !!l[0].checked,
    n,
    t,
    a = e && le(l);
  return {
    c() {
      a && a.c(), (n = se());
    },
    l(r) {
      a && a.l(r), (n = se());
    },
    m(r, c) {
      a && a.m(r, c), P(r, n, c), (t = !0);
    },
    p(r, [c]) {
      c & 1 && (e = W(r[0].checked) || !!r[0].checked),
        e
          ? a
            ? (a.p(r, c), c & 1 && T(a, 1))
            : ((a = le(r)), a.c(), T(a, 1), a.m(n.parentNode, n))
          : a &&
            (ge(),
            I(a, 1, 1, () => {
              a = null;
            }),
            _e());
    },
    i(r) {
      t || (T(a), (t = !0));
    },
    o(r) {
      I(a), (t = !1);
    },
    d(r) {
      a && a.d(r), r && m(n);
    },
  };
}
function Pe(l, e, n) {
  const t = [];
  let a = z(e, t),
    r,
    { $$slots: c = {}, $$scope: i } = e;
  const u = Te();
  return (
    re(l, u, (d) => n(0, (r = d))),
    (l.$$set = (d) => {
      (e = C(C({}, e), F(d))),
        n(2, (a = z(e, t))),
        "$$scope" in d && n(3, (i = d.$$scope));
    }),
    [r, u, a, i, c]
  );
}
class ye extends D {
  constructor(e) {
    super(), V(this, e, Pe, Ge, G, {});
  }
}
const de = { Root: Ve, Indicator: ye };
function Se(l) {
  let e;
  const n = l[2].default,
    t = $(n, l, l[3], null);
  return {
    c() {
      t && t.c();
    },
    l(a) {
      t && t.l(a);
    },
    m(a, r) {
      t && t.m(a, r), (e = !0);
    },
    p(a, r) {
      t &&
        t.p &&
        (!e || r & 8) &&
        ee(t, n, a, a[3], e ? ne(n, a[3], r, null) : te(a[3]), null);
    },
    i(a) {
      e || (T(t, a), (e = !0));
    },
    o(a) {
      I(t, a), (e = !1);
    },
    d(a) {
      t && t.d(a);
    },
  };
}
function qe(l) {
  let e, n;
  const t = [{ name: "check" }, l[1], { iconNode: l[0] }];
  let a = { $$slots: { default: [Se] }, $$scope: { ctx: l } };
  for (let r = 0; r < t.length; r += 1) a = C(a, t[r]);
  return (
    (e = new ve({ props: a })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(r) {
        S(e.$$.fragment, r);
      },
      m(r, c) {
        q(e, r, c), (n = !0);
      },
      p(r, [c]) {
        const i =
          c & 3
            ? X(t, [t[0], c & 2 && fe(r[1]), c & 1 && { iconNode: r[0] }])
            : {};
        c & 8 && (i.$$scope = { dirty: c, ctx: r }), e.$set(i);
      },
      i(r) {
        n || (T(e.$$.fragment, r), (n = !0));
      },
      o(r) {
        I(e.$$.fragment, r), (n = !1);
      },
      d(r) {
        j(e, r);
      },
    }
  );
}
function je(l, e, n) {
  let { $$slots: t = {}, $$scope: a } = e;
  const r = [["polyline", { points: "20 6 9 17 4 12" }]];
  return (
    (l.$$set = (c) => {
      n(1, (e = C(C({}, e), F(c)))), "$$scope" in c && n(3, (a = c.$$scope));
    }),
    (e = F(e)),
    [r, e, t, a]
  );
}
class Ce extends D {
  constructor(e) {
    super(), V(this, e, je, qe, G, {});
  }
}
const Ne = Ce;
function Be(l) {
  let e, n;
  return (
    (e = new Ne({ props: { class: "h-4 w-4" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        S(e.$$.fragment, t);
      },
      m(t, a) {
        q(e, t, a), (n = !0);
      },
      p: U,
      i(t) {
        n || (T(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        I(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Ae(l) {
  let e, n;
  return (
    (e = new de.Indicator({
      props: {
        class: Z("flex items-center justify-center text-current"),
        $$slots: { default: [Be] },
        $$scope: { ctx: l },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        S(e.$$.fragment, t);
      },
      m(t, a) {
        q(e, t, a), (n = !0);
      },
      p(t, a) {
        const r = {};
        a & 16 && (r.$$scope = { dirty: a, ctx: t }), e.$set(r);
      },
      i(t) {
        n || (T(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        I(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Me(l) {
  let e, n, t;
  const a = [
    {
      class: Z(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        l[1]
      ),
    },
    l[2],
  ];
  function r(i) {
    l[3](i);
  }
  let c = { $$slots: { default: [Ae] }, $$scope: { ctx: l } };
  for (let i = 0; i < a.length; i += 1) c = C(c, a[i]);
  return (
    l[0] !== void 0 && (c.checked = l[0]),
    (e = new de.Root({ props: c })),
    A.push(() => M(e, "checked", r)),
    {
      c() {
        y(e.$$.fragment);
      },
      l(i) {
        S(e.$$.fragment, i);
      },
      m(i, u) {
        q(e, i, u), (t = !0);
      },
      p(i, [u]) {
        const d =
          u & 6
            ? X(a, [
                u & 2 && {
                  class: Z(
                    "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                    i[1]
                  ),
                },
                u & 4 && fe(i[2]),
              ])
            : {};
        u & 16 && (d.$$scope = { dirty: u, ctx: i }),
          !n && u & 1 && ((n = !0), (d.checked = i[0]), R(() => (n = !1))),
          e.$set(d);
      },
      i(i) {
        t || (T(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        I(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        j(e, i);
      },
    }
  );
}
function Re(l, e, n) {
  const t = ["class", "checked"];
  let a = z(e, t),
    { class: r = void 0 } = e,
    { checked: c = void 0 } = e;
  function i(u) {
    (c = u), n(0, c);
  }
  return (
    (l.$$set = (u) => {
      (e = C(C({}, e), F(u))),
        n(2, (a = z(e, t))),
        "class" in u && n(1, (r = u.class)),
        "checked" in u && n(0, (c = u.checked));
    }),
    [c, r, a, i]
  );
}
class L extends D {
  constructor(e) {
    super(), V(this, e, Re, Me, G, { class: 1, checked: 0 });
  }
}
function Oe(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Snow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Snow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function He(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
let Le = class extends D {
  constructor(e) {
    super(), V(this, e, He, Oe, G, { enabled: 0, flag: 1 });
  }
};
function We(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Title Sparkle")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Title Sparkle")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex flex-col items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function Ue(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
let Ye = class extends D {
  constructor(e) {
    super(), V(this, e, Ue, We, G, { enabled: 0, flag: 1 });
  }
};
function ze(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Purple Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Purple Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function Fe(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class Je extends D {
  constructor(e) {
    super(), V(this, e, Fe, ze, G, { enabled: 0, flag: 1 });
  }
}
function Ke(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Black Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Black Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function Xe(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class Ze extends D {
  constructor(e) {
    super(), V(this, e, Xe, Ke, G, { enabled: 0, flag: 1 });
  }
}
function Qe(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Blue Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Blue Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function $e(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class et extends D {
  constructor(e) {
    super(), V(this, e, $e, Qe, G, { enabled: 0, flag: 1 });
  }
}
function tt(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Green Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Green Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function nt(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class ct extends D {
  constructor(e) {
    super(), V(this, e, nt, tt, G, { enabled: 0, flag: 1 });
  }
}
function st(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Orange Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Orange Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function lt(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class at extends D {
  constructor(e) {
    super(), V(this, e, lt, st, G, { enabled: 0, flag: 1 });
  }
}
function it(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Red Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Red Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function rt(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class ft extends D {
  constructor(e) {
    super(), V(this, e, rt, it, G, { enabled: 0, flag: 1 });
  }
}
function ot(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("White Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "White Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function dt(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class ut extends D {
  constructor(e) {
    super(), V(this, e, dt, ot, G, { enabled: 0, flag: 1 });
  }
}
function ht(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Yellow Title Glow")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Yellow Title Glow")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function mt(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
class gt extends D {
  constructor(e) {
    super(), V(this, e, mt, ht, G, { enabled: 0, flag: 1 });
  }
}
function _t(l) {
  let e, n, t, a, r, c, i, u, d;
  function w(s) {
    l[2](s);
  }
  let x = { name: "effects." + l[1] + ".enabled" };
  return (
    l[0] !== void 0 && (x.checked = l[0]),
    (i = new L({ props: x })),
    A.push(() => M(i, "checked", w)),
    {
      c() {
        (e = k("div")),
          (n = k("div")),
          (t = k("p")),
          (a = O("Typewriter")),
          (r = N()),
          (c = k("div")),
          y(i.$$.fragment),
          this.h();
      },
      l(s) {
        e = v(s, "DIV", { class: !0 });
        var f = p(e);
        n = v(f, "DIV", { class: !0 });
        var o = p(n);
        t = v(o, "P", { class: !0 });
        var _ = p(t);
        (a = H(_, "Typewriter")),
          _.forEach(m),
          (r = B(o)),
          (c = v(o, "DIV", { class: !0 }));
        var h = p(c);
        S(i.$$.fragment, h), h.forEach(m), o.forEach(m), f.forEach(m), this.h();
      },
      h() {
        b(t, "class", "text-sm font-medium leading-none"),
          b(c, "class", "flex items-center space-x-2"),
          b(n, "class", "justify-between flex items-center space-x-4 w-full"),
          b(
            e,
            "class",
            "flex flex-col items-center space-x-4 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          );
      },
      m(s, f) {
        P(s, e, f),
          g(e, n),
          g(n, t),
          g(t, a),
          g(n, r),
          g(n, c),
          q(i, c, null),
          (d = !0);
      },
      p(s, [f]) {
        const o = {};
        f & 2 && (o.name = "effects." + s[1] + ".enabled"),
          !u && f & 1 && ((u = !0), (o.checked = s[0]), R(() => (u = !1))),
          i.$set(o);
      },
      i(s) {
        d || (T(i.$$.fragment, s), (d = !0));
      },
      o(s) {
        I(i.$$.fragment, s), (d = !1);
      },
      d(s) {
        s && m(e), j(i);
      },
    }
  );
}
function bt(l, e, n) {
  let { enabled: t = !1 } = e,
    { flag: a } = e;
  function r(c) {
    (t = c), n(0, t);
  }
  return (
    (l.$$set = (c) => {
      "enabled" in c && n(0, (t = c.enabled)),
        "flag" in c && n(1, (a = c.flag));
    }),
    [t, a, r]
  );
}
let kt = class extends D {
  constructor(e) {
    super(), V(this, e, bt, _t, G, { enabled: 0, flag: 1 });
  }
};
function vt(l, e, n) {
  const t = l.slice();
  return (t[0] = e[n]), (t[2] = n), t;
}
function pt(l) {
  let e;
  return {
    c() {
      (e = k("div")), this.h();
    },
    l(n) {
      (e = v(n, "DIV", { class: !0 })), p(e).forEach(m), this.h();
    },
    h() {
      b(e, "class", "snow svelte-w5q0g0");
    },
    m(n, t) {
      P(n, e, t);
    },
    p: U,
    d(n) {
      n && m(e);
    },
  };
}
function xt(l) {
  let e,
    n = Array(200),
    t = [];
  for (let a = 0; a < n.length; a += 1) t[a] = pt(vt(l, n, a));
  return {
    c() {
      e = k("div");
      for (let a = 0; a < t.length; a += 1) t[a].c();
      this.h();
    },
    l(a) {
      e = v(a, "DIV", { class: !0 });
      var r = p(e);
      for (let c = 0; c < t.length; c += 1) t[c].l(r);
      r.forEach(m), this.h();
    },
    h() {
      b(e, "class", "snow-container svelte-w5q0g0");
    },
    m(a, r) {
      P(a, e, r);
      for (let c = 0; c < t.length; c += 1) t[c] && t[c].m(e, null);
    },
    p: U,
    i: U,
    o: U,
    d(a) {
      a && m(e), be(t, a);
    },
  };
}
class wt extends D {
  constructor(e) {
    super(), V(this, e, null, xt, G, {});
  }
}
class Et extends D {
  constructor(e) {
    super(), V(this, e, null, null, G, {});
  }
}
function Tt(l) {
  let e;
  return {
    c() {
      (e = k("span")), this.h();
    },
    l(n) {
      (e = v(n, "SPAN", { class: !0, id: !0 })), p(e).forEach(m), this.h();
    },
    h() {
      b(e, "class", "font-medium text-center svelte-385gfl"),
        b(e, "id", "typewriter");
    },
    m(n, t) {
      P(n, e, t);
    },
    p: U,
    i: U,
    o: U,
    d(n) {
      n && m(e);
    },
  };
}
async function ue(l) {
  const e = document.getElementById("typewriter");
  for (let n = 0; n < l.length; n++)
    (e.innerHTML += l.charAt(n)), await new Promise((t) => setTimeout(t, 100));
  await new Promise((n) => setTimeout(n, 1e3));
  for (let n = 0; n < l.length; n++)
    (e.innerHTML = e.innerHTML.slice(0, -1)),
      await new Promise((t) => setTimeout(t, 100));
  await new Promise((n) => setTimeout(n, 1e3)), ue(l);
}
function It(l, e, n) {
  let { text: t = "" } = e;
  return (
    ke(() => {
      ue(t);
    }),
    (l.$$set = (a) => {
      "text" in a && n(0, (t = a.text));
    }),
    [t]
  );
}
class Dt extends D {
  constructor(e) {
    super(), V(this, e, It, Tt, G, { text: 0 });
  }
}
const Vt = [
    { flag: 0, configure: Le, display: wt },
    { flag: 1, configure: Ye, display: Et },
    { flag: 2, configure: Je },
    { flag: 3, configure: Ze },
    { flag: 4, configure: et },
    { flag: 5, configure: ct },
    { flag: 6, configure: at },
    { flag: 7, configure: ft },
    { flag: 8, configure: ut },
    { flag: 9, configure: gt },
    { flag: 10, configure: kt, display: Dt },
  ],
  Nt = (l) => {
    const e = [];
    for (const n of Vt) l & (1 << n.flag) && e.push(n);
    return e;
  },
  Bt = (l, e) => {
    const n = [];
    for (const t of e) l & (1 << t.flag) && n.push(t);
    return n;
  };
export { Bt as f, Nt as g };
