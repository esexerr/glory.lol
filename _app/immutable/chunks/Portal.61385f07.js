import {
  S as d,
  i as c,
  s as _,
  C as m,
  k as p,
  l as h,
  m as y,
  h as f,
  b as w,
  L as E,
  D as S,
  E as v,
  F as C,
  N as b,
  g,
  d as N,
  t as k,
} from "./index.4f26dcbc.js";
function q(l) {
  let e, n, o, a, u;
  const i = l[2].default,
    s = m(i, l, l[1], null);
  return {
    c() {
      (e = p("div")), s && s.c(), this.h();
    },
    l(t) {
      e = h(t, "DIV", {});
      var r = y(e);
      s && s.l(r), r.forEach(f), this.h();
    },
    h() {
      e.hidden = !0;
    },
    m(t, r) {
      w(t, e, r),
        s && s.m(e, null),
        (o = !0),
        a || ((u = E((n = L.call(null, e, l[0])))), (a = !0));
    },
    p(t, [r]) {
      s &&
        s.p &&
        (!o || r & 2) &&
        S(s, i, t, t[1], o ? C(i, t[1], r, null) : v(t[1]), null),
        n && b(n.update) && r & 1 && n.update.call(null, t[0]);
    },
    i(t) {
      o || (g(s, t), (o = !0));
    },
    o(t) {
      N(s, t), (o = !1);
    },
    d(t) {
      t && f(e), s && s.d(t), (a = !1), u();
    },
  };
}
function L(l, e = "body") {
  let n;
  async function o(u) {
    if (((e = u), typeof e == "string")) {
      if (
        ((n = document.querySelector(e)),
        n === null && (await k(), (n = document.querySelector(e))),
        n === null)
      )
        throw new Error(`No element found matching css selector: "${e}"`);
    } else if (e instanceof HTMLElement) n = e;
    else
      throw new TypeError(
        `Unknown portal target type: ${
          e === null ? "null" : typeof e
        }. Allowed types: string (CSS selector) or HTMLElement.`
      );
    n.appendChild(l), (l.hidden = !1);
  }
  function a() {
    l.parentNode && l.parentNode.removeChild(l);
  }
  return o(e), { update: o, destroy: a };
}
function T(l, e, n) {
  let { $$slots: o = {}, $$scope: a } = e,
    { target: u = "body" } = e;
  return (
    (l.$$set = (i) => {
      "target" in i && n(0, (u = i.target)),
        "$$scope" in i && n(1, (a = i.$$scope));
    }),
    [u, a, o]
  );
}
class H extends d {
  constructor(e) {
    super(), c(this, e, T, q, _, { target: 0 });
  }
}
export { H as P };
