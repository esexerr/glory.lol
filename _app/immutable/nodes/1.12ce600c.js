import {
  S as A,
  i as C,
  s as D,
  k as b,
  q as x,
  a as I,
  l as $,
  m as g,
  r as E,
  c as S,
  h as d,
  n as F,
  b as G,
  G as i,
  u as H,
  H as k,
  I as M,
  o as V,
} from "../chunks/index.4f26dcbc.js";
import { p as y } from "../chunks/stores.d5225d99.js";
function w(o) {
  var j, q;
  let e,
    s,
    l = ((j = o[0]) == null ? void 0 : j.status) + "",
    u,
    r,
    m = (o[0].error ? o[1][o[0].status] : "") + "",
    p,
    v,
    c,
    h = ((q = o[0].error) == null ? void 0 : q.message) + "",
    _;
  return {
    c() {
      (e = b("div")),
        (s = b("h1")),
        (u = x(l)),
        (r = I()),
        (p = x(m)),
        (v = I()),
        (c = b("h2")),
        (_ = x(h)),
        this.h();
    },
    l(t) {
      e = $(t, "DIV", { class: !0 });
      var a = g(e);
      s = $(a, "H1", { class: !0 });
      var n = g(s);
      (u = E(n, l)),
        (r = S(n)),
        (p = E(n, m)),
        n.forEach(d),
        (v = S(a)),
        (c = $(a, "H2", { class: !0 }));
      var f = g(c);
      (_ = E(f, h)), f.forEach(d), a.forEach(d), this.h();
    },
    h() {
      F(s, "class", "text-6xl font-bold mb-2 sm:text-4xl"),
        F(c, "class", "text-xl font-medium mb-2 sm:text-base"),
        F(
          e,
          "class",
          "error flex flex-col items-center justify-center h-screen text-center"
        );
    },
    m(t, a) {
      G(t, e, a), i(e, s), i(s, u), i(s, r), i(s, p), i(e, v), i(e, c), i(c, _);
    },
    p(t, [a]) {
      var n, f;
      a & 1 &&
        l !== (l = ((n = t[0]) == null ? void 0 : n.status) + "") &&
        H(u, l),
        a & 1 &&
          m !== (m = (t[0].error ? t[1][t[0].status] : "") + "") &&
          H(p, m),
        a & 1 &&
          h !== (h = ((f = t[0].error) == null ? void 0 : f.message) + "") &&
          H(_, h);
    },
    i: k,
    o: k,
    d(t) {
      t && d(e);
    },
  };
}
function z(o, e, s) {
  let l;
  M(o, y, (r) => s(0, (l = r)));
  let u = { 404: "🤔", 500: "😱", 503: "🚧" };
  return (
    V(() => {
      y.subscribe((r) => {
        r.error && (document.title = `${r.status} - ${r.error.message}`);
      });
    }),
    [l, u]
  );
}
class K extends A {
  constructor(e) {
    super(), C(this, e, z, w, D, {});
  }
}
export { K as component };
