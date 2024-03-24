import { o as me, t as _e } from "../chunks/index.4f26dcbc.js";
import {
  S as Ke,
  a as ze,
  I as M,
  g as De,
  f as Ne,
  b as we,
  c as le,
  s as te,
  i as ye,
  d as J,
  e as V,
  o as qe,
  P as Me,
  h as Qe,
} from "../chunks/singletons.c1d503dd.js";
import { u as Ze } from "../chunks/parse.bee59afc.js";
function et(n, r) {
  return n === "/" || r === "ignore"
    ? n
    : r === "never"
    ? n.endsWith("/")
      ? n.slice(0, -1)
      : n
    : r === "always" && !n.endsWith("/")
    ? n + "/"
    : n;
}
function tt(n) {
  return n.split("%25").map(decodeURI).join("%25");
}
function nt(n) {
  for (const r in n) n[r] = decodeURIComponent(n[r]);
  return n;
}
const at = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function rt(n, r) {
  const l = new URL(n);
  for (const c of at)
    Object.defineProperty(l, c, {
      get() {
        return r(), n[c];
      },
      enumerable: !0,
      configurable: !0,
    });
  return ot(l), l;
}
function ot(n) {
  Object.defineProperty(n, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    },
  });
}
const it = "/__data.json";
function st(n) {
  return n.replace(/\/$/, "") + it;
}
function ct(...n) {
  let r = 5381;
  for (const l of n)
    if (typeof l == "string") {
      let c = l.length;
      for (; c; ) r = (r * 33) ^ l.charCodeAt(--c);
    } else if (ArrayBuffer.isView(l)) {
      const c = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
      let h = c.length;
      for (; h; ) r = (r * 33) ^ c[--h];
    } else throw new TypeError("value must be a string or TypedArray");
  return (r >>> 0).toString(36);
}
const Be = window.fetch;
window.fetch = (n, r) => (
  (n instanceof Request
    ? n.method
    : (r == null ? void 0 : r.method) || "GET") !== "GET" && ae.delete(Ee(n)),
  Be(n, r)
);
const ae = new Map();
function lt(n) {
  const r = atob(n),
    l = new Uint8Array(r.length);
  for (let c = 0; c < r.length; c++) l[c] = r.charCodeAt(c);
  return l.buffer;
}
function ft(n, r) {
  const l = Ee(n, r),
    c = document.querySelector(l);
  if (c != null && c.textContent) {
    let { body: h, ...w } = JSON.parse(c.textContent);
    const S = c.getAttribute("data-ttl");
    return (
      S && ae.set(l, { body: h, init: w, ttl: 1e3 * Number(S) }),
      c.getAttribute("data-b64") !== null && (h = lt(h)),
      Promise.resolve(new Response(h, w))
    );
  }
  return window.fetch(n, r);
}
function ut(n, r, l) {
  if (ae.size > 0) {
    const c = Ee(n, l),
      h = ae.get(c);
    if (h) {
      if (
        performance.now() < h.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(
          l == null ? void 0 : l.cache
        )
      )
        return new Response(h.body, h.init);
      ae.delete(c);
    }
  }
  return window.fetch(r, l);
}
function Ee(n, r) {
  let c = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    n instanceof Request ? n.url : n
  )}]`;
  if ((r != null && r.headers) || (r != null && r.body)) {
    const h = [];
    r.headers && h.push([...new Headers(r.headers)].join(",")),
      r.body &&
        (typeof r.body == "string" || ArrayBuffer.isView(r.body)) &&
        h.push(r.body),
      (c += `[data-hash="${ct(...h)}"]`);
  }
  return c;
}
const dt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function pt(n) {
  const r = [];
  return {
    pattern:
      n === "/"
        ? /^\/$/
        : new RegExp(
            `^${gt(n)
              .map((c) => {
                const h = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
                if (h)
                  return (
                    r.push({
                      name: h[1],
                      matcher: h[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const w = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);
                if (w)
                  return (
                    r.push({
                      name: w[1],
                      matcher: w[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!c) return;
                const S = c.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  S.map((y, b) => {
                    if (b % 2) {
                      if (y.startsWith("x+"))
                        return ve(
                          String.fromCharCode(parseInt(y.slice(2), 16))
                        );
                      if (y.startsWith("u+"))
                        return ve(
                          String.fromCharCode(
                            ...y
                              .slice(2)
                              .split("-")
                              .map((O) => parseInt(O, 16))
                          )
                        );
                      const u = dt.exec(y);
                      if (!u)
                        throw new Error(
                          `Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`
                        );
                      const [, j, D, C, N] = u;
                      return (
                        r.push({
                          name: C,
                          matcher: N,
                          optional: !!j,
                          rest: !!D,
                          chained: D ? b === 1 && S[0] === "" : !1,
                        }),
                        D ? "(.*?)" : j ? "([^/]*)?" : "([^/]+?)"
                      );
                    }
                    return ve(y);
                  }).join("")
                );
              })
              .join("")}/?$`
          ),
    params: r,
  };
}
function ht(n) {
  return !/^\([^)]+\)$/.test(n);
}
function gt(n) {
  return n.slice(1).split("/").filter(ht);
}
function mt(n, r, l) {
  const c = {},
    h = n.slice(1),
    w = h.filter((m) => m !== void 0);
  let S = 0;
  for (let m = 0; m < r.length; m += 1) {
    const y = r[m];
    let b = h[m - S];
    if (
      (y.chained &&
        y.rest &&
        S &&
        ((b = h
          .slice(m - S, m + 1)
          .filter((u) => u)
          .join("/")),
        (S = 0)),
      b === void 0)
    ) {
      y.rest && (c[y.name] = "");
      continue;
    }
    if (!y.matcher || l[y.matcher](b)) {
      c[y.name] = b;
      const u = r[m + 1],
        j = h[m + 1];
      u && !u.rest && u.optional && j && y.chained && (S = 0),
        !u && !j && Object.keys(c).length === w.length && (S = 0);
      continue;
    }
    if (y.optional && y.chained) {
      S++;
      continue;
    }
    return;
  }
  if (!S) return c;
}
function ve(n) {
  return n
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function _t({ nodes: n, server_loads: r, dictionary: l, matchers: c }) {
  const h = new Set(r);
  return Object.entries(l).map(([m, [y, b, u]]) => {
    const { pattern: j, params: D } = pt(m),
      C = {
        id: m,
        exec: (N) => {
          const O = j.exec(N);
          if (O) return mt(O, D, c);
        },
        errors: [1, ...(u || [])].map((N) => n[N]),
        layouts: [0, ...(b || [])].map(S),
        leaf: w(y),
      };
    return (
      (C.errors.length = C.layouts.length =
        Math.max(C.errors.length, C.layouts.length)),
      C
    );
  });
  function w(m) {
    const y = m < 0;
    return y && (m = ~m), [y, n[m]];
  }
  function S(m) {
    return m === void 0 ? m : [h.has(m), n[m]];
  }
}
function Ge(n) {
  try {
    return JSON.parse(sessionStorage[n]);
  } catch {}
}
function Fe(n, r) {
  const l = JSON.stringify(r);
  try {
    sessionStorage[n] = l;
  } catch {}
}
function wt(n) {
  return n.filter((r) => r != null);
}
const We = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...We];
const yt = new Set([...We]);
[...yt];
async function vt(n, r) {
  var l;
  for (const c in n)
    if (typeof ((l = n[c]) == null ? void 0 : l.then) == "function")
      return Object.fromEntries(
        await Promise.all(Object.entries(n).map(async ([h, w]) => [h, await w]))
      );
  return n;
}
class ne {
  constructor(r, l) {
    (this.status = r),
      typeof l == "string"
        ? (this.body = { message: l })
        : l
        ? (this.body = l)
        : (this.body = { message: `Error: ${r}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Ve {
  constructor(r, l) {
    (this.status = r), (this.location = l);
  }
}
class bt extends Error {
  constructor(r) {
    super(), (this.status = 404), (this.message = `Not found: ${r}`);
  }
}
const St = "x-sveltekit-invalidated",
  Et = "x-sveltekit-trailing-slash",
  z = Ge(Ke) ?? {},
  ee = Ge(ze) ?? {};
function be(n) {
  z[n] = te();
}
function B(n) {
  return (location.href = n.href), new Promise(() => {});
}
function xt(n, r) {
  var je;
  const l = _t(n),
    c = n.nodes[0],
    h = n.nodes[1];
  c(), h();
  const w = document.documentElement,
    S = [],
    m = [];
  let y = null;
  const b = { before_navigate: [], on_navigate: [], after_navigate: [] };
  let u = { branch: [], error: null, url: null },
    j = !1,
    D = !1,
    C = !0,
    N = !1,
    O = !1,
    T = !1,
    G = !1,
    F,
    U = (je = history.state) == null ? void 0 : je[M];
  U ||
    ((U = Date.now()),
    history.replaceState({ ...history.state, [M]: U }, "", location.href));
  const fe = z[U];
  fe && ((history.scrollRestoration = "manual"), scrollTo(fe.x, fe.y));
  let H, W, Y;
  async function xe() {
    if (((Y = Y || Promise.resolve()), await Y, !Y)) return;
    Y = null;
    const e = new URL(location.href),
      i = Q(e, !0);
    y = null;
    const t = (W = {}),
      o = i && (await pe(i));
    if (t === W && o) {
      if (o.type === "redirect")
        return re(new URL(o.location, e).href, {}, 1, t);
      o.props.page !== void 0 && (H = o.props.page), F.$set(o.props);
    }
  }
  function Re(e) {
    m.some((i) => (i == null ? void 0 : i.snapshot)) &&
      (ee[e] = m.map((i) => {
        var t;
        return (t = i == null ? void 0 : i.snapshot) == null
          ? void 0
          : t.capture();
      }));
  }
  function ke(e) {
    var i;
    (i = ee[e]) == null ||
      i.forEach((t, o) => {
        var a, s;
        (s = (a = m[o]) == null ? void 0 : a.snapshot) == null || s.restore(t);
      });
  }
  function Le() {
    be(U), Fe(Ke, z), Re(U), Fe(ze, ee);
  }
  async function re(
    e,
    {
      noScroll: i = !1,
      replaceState: t = !1,
      keepFocus: o = !1,
      state: a = {},
      invalidateAll: s = !1,
    },
    f,
    g
  ) {
    return (
      typeof e == "string" && (e = new URL(e, De(document))),
      ce({
        url: e,
        scroll: i ? te() : null,
        keepfocus: o,
        redirect_count: f,
        details: { state: a, replaceState: t },
        nav_token: g,
        accepted: () => {
          s && (G = !0);
        },
        blocked: () => {},
        type: "goto",
      })
    );
  }
  async function Ae(e) {
    return (
      (y = {
        id: e.id,
        promise: pe(e).then(
          (i) => (i.type === "loaded" && i.state.error && (y = null), i)
        ),
      }),
      y.promise
    );
  }
  async function oe(...e) {
    const t = l
      .filter((o) => e.some((a) => o.exec(a)))
      .map((o) =>
        Promise.all(
          [...o.layouts, o.leaf].map((a) => (a == null ? void 0 : a[1]()))
        )
      );
    await Promise.all(t);
  }
  function Pe(e) {
    var o;
    u = e.state;
    const i = document.querySelector("style[data-sveltekit]");
    i && i.remove(),
      (H = e.props.page),
      (F = new n.root({
        target: r,
        props: { ...e.props, stores: J, components: m },
        hydrate: !0,
      })),
      ke(U);
    const t = {
      from: null,
      to: {
        params: u.params,
        route: { id: ((o = u.route) == null ? void 0 : o.id) ?? null },
        url: new URL(location.href),
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve(),
    };
    b.after_navigate.forEach((a) => a(t)), (D = !0);
  }
  async function X({
    url: e,
    params: i,
    branch: t,
    status: o,
    error: a,
    route: s,
    form: f,
  }) {
    let g = "never";
    for (const p of t)
      (p == null ? void 0 : p.slash) !== void 0 && (g = p.slash);
    (e.pathname = et(e.pathname, g)), (e.search = e.search);
    const v = {
      type: "loaded",
      state: { url: e, params: i, branch: t, error: a, route: s },
      props: { constructors: wt(t).map((p) => p.node.component) },
    };
    f !== void 0 && (v.props.form = f);
    let _ = {},
      L = !H,
      R = 0;
    for (let p = 0; p < Math.max(t.length, u.branch.length); p += 1) {
      const d = t[p],
        P = u.branch[p];
      (d == null ? void 0 : d.data) !== (P == null ? void 0 : P.data) &&
        (L = !0),
        d &&
          ((_ = { ..._, ...d.data }),
          L && (v.props[`data_${R}`] = _),
          (R += 1));
    }
    return (
      (!u.url ||
        e.href !== u.url.href ||
        u.error !== a ||
        (f !== void 0 && f !== H.form) ||
        L) &&
        (v.props.page = {
          error: a,
          params: i,
          route: { id: (s == null ? void 0 : s.id) ?? null },
          status: o,
          url: new URL(e),
          form: f ?? null,
          data: L ? _ : H.data,
        }),
      v
    );
  }
  async function ue({
    loader: e,
    parent: i,
    url: t,
    params: o,
    route: a,
    server_data_node: s,
  }) {
    var _, L, R;
    let f = null;
    const g = {
        dependencies: new Set(),
        params: new Set(),
        parent: !1,
        route: !1,
        url: !1,
      },
      v = await e();
    if ((_ = v.universal) != null && _.load) {
      let A = function (...d) {
        for (const P of d) {
          const { href: $ } = new URL(P, t);
          g.dependencies.add($);
        }
      };
      const p = {
        route: new Proxy(a, { get: (d, P) => ((g.route = !0), d[P]) }),
        params: new Proxy(o, { get: (d, P) => (g.params.add(P), d[P]) }),
        data: (s == null ? void 0 : s.data) ?? null,
        url: rt(t, () => {
          g.url = !0;
        }),
        async fetch(d, P) {
          let $;
          d instanceof Request
            ? (($ = d.url),
              (P = {
                body:
                  d.method === "GET" || d.method === "HEAD"
                    ? void 0
                    : await d.blob(),
                cache: d.cache,
                credentials: d.credentials,
                headers: d.headers,
                integrity: d.integrity,
                keepalive: d.keepalive,
                method: d.method,
                mode: d.mode,
                redirect: d.redirect,
                referrer: d.referrer,
                referrerPolicy: d.referrerPolicy,
                signal: d.signal,
                ...P,
              }))
            : ($ = d);
          const q = new URL($, t);
          return (
            A(q.href),
            q.origin === t.origin && ($ = q.href.slice(t.origin.length)),
            D ? ut($, q.href, P) : ft($, P)
          );
        },
        setHeaders: () => {},
        depends: A,
        parent() {
          return (g.parent = !0), i();
        },
      };
      (f = (await v.universal.load.call(null, p)) ?? null),
        (f = f ? await vt(f, a.id) : null);
    }
    return {
      node: v,
      loader: e,
      server: s,
      universal:
        (L = v.universal) != null && L.load
          ? { type: "data", data: f, uses: g }
          : null,
      data: f ?? (s == null ? void 0 : s.data) ?? null,
      slash:
        t.pathname === V || t.pathname === V + "/"
          ? "always"
          : ((R = v.universal) == null ? void 0 : R.trailingSlash) ??
            (s == null ? void 0 : s.slash),
    };
  }
  function Ue(e, i, t, o, a) {
    if (G) return !0;
    if (!o) return !1;
    if ((o.parent && e) || (o.route && i) || (o.url && t)) return !0;
    for (const s of o.params) if (a[s] !== u.params[s]) return !0;
    for (const s of o.dependencies) if (S.some((f) => f(new URL(s)))) return !0;
    return !1;
  }
  function de(e, i) {
    return (e == null ? void 0 : e.type) === "data"
      ? e
      : (e == null ? void 0 : e.type) === "skip"
      ? i ?? null
      : null;
  }
  async function pe({ id: e, invalidating: i, url: t, params: o, route: a }) {
    if ((y == null ? void 0 : y.id) === e) return y.promise;
    const { errors: s, layouts: f, leaf: g } = a,
      v = [...f, g];
    s.forEach((E) => (E == null ? void 0 : E().catch(() => {}))),
      v.forEach((E) => (E == null ? void 0 : E[1]().catch(() => {})));
    let _ = null;
    const L = u.url ? e !== u.url.pathname + u.url.search : !1,
      R = u.route ? a.id !== u.route.id : !1;
    let A = !1;
    const p = v.map((E, k) => {
      var K;
      const x = u.branch[k],
        I =
          !!(E != null && E[0]) &&
          ((x == null ? void 0 : x.loader) !== E[1] ||
            Ue(A, R, L, (K = x.server) == null ? void 0 : K.uses, o));
      return I && (A = !0), I;
    });
    if (p.some(Boolean)) {
      try {
        _ = await He(t, p);
      } catch (E) {
        return ie({
          status: E instanceof ne ? E.status : 500,
          error: await Z(E, { url: t, params: o, route: { id: a.id } }),
          url: t,
          route: a,
        });
      }
      if (_.type === "redirect") return _;
    }
    const d = _ == null ? void 0 : _.nodes;
    let P = !1;
    const $ = v.map(async (E, k) => {
      var he;
      if (!E) return;
      const x = u.branch[k],
        I = d == null ? void 0 : d[k];
      if (
        (!I || I.type === "skip") &&
        E[1] === (x == null ? void 0 : x.loader) &&
        !Ue(P, R, L, (he = x.universal) == null ? void 0 : he.uses, o)
      )
        return x;
      if (((P = !0), (I == null ? void 0 : I.type) === "error")) throw I;
      return ue({
        loader: E[1],
        url: t,
        params: o,
        route: a,
        parent: async () => {
          var Te;
          const Ce = {};
          for (let ge = 0; ge < k; ge += 1)
            Object.assign(Ce, (Te = await $[ge]) == null ? void 0 : Te.data);
          return Ce;
        },
        server_data_node: de(
          I === void 0 && E[0] ? { type: "skip" } : I ?? null,
          E[0] ? (x == null ? void 0 : x.server) : void 0
        ),
      });
    });
    for (const E of $) E.catch(() => {});
    const q = [];
    for (let E = 0; E < v.length; E += 1)
      if (v[E])
        try {
          q.push(await $[E]);
        } catch (k) {
          if (k instanceof Ve)
            return { type: "redirect", location: k.location };
          let x = 500,
            I;
          if (d != null && d.includes(k)) (x = k.status ?? x), (I = k.error);
          else if (k instanceof ne) (x = k.status), (I = k.body);
          else {
            if (await J.updated.check()) return await B(t);
            I = await Z(k, { params: o, url: t, route: { id: a.id } });
          }
          const K = await Oe(E, q, s);
          return K
            ? await X({
                url: t,
                params: o,
                branch: q.slice(0, K.idx).concat(K.node),
                status: x,
                error: I,
                route: a,
              })
            : await Ie(t, { id: a.id }, I, x);
        }
      else q.push(void 0);
    return await X({
      url: t,
      params: o,
      branch: q,
      status: 200,
      error: null,
      route: a,
      form: i ? void 0 : null,
    });
  }
  async function Oe(e, i, t) {
    for (; e--; )
      if (t[e]) {
        let o = e;
        for (; !i[o]; ) o -= 1;
        try {
          return {
            idx: o + 1,
            node: {
              node: await t[e](),
              loader: t[e],
              data: {},
              server: null,
              universal: null,
            },
          };
        } catch {
          continue;
        }
      }
  }
  async function ie({ status: e, error: i, url: t, route: o }) {
    const a = {};
    let s = null;
    if (n.server_loads[0] === 0)
      try {
        const _ = await He(t, [!0]);
        if (_.type !== "data" || (_.nodes[0] && _.nodes[0].type !== "data"))
          throw 0;
        s = _.nodes[0] ?? null;
      } catch {
        (t.origin !== qe || t.pathname !== location.pathname || j) &&
          (await B(t));
      }
    const g = await ue({
        loader: c,
        url: t,
        params: a,
        route: o,
        parent: () => Promise.resolve({}),
        server_data_node: de(s),
      }),
      v = {
        node: await h(),
        loader: h,
        universal: null,
        server: null,
        data: null,
      };
    return await X({
      url: t,
      params: a,
      branch: [g, v],
      status: e,
      error: i,
      route: null,
    });
  }
  function Q(e, i) {
    if (ye(e, V)) return;
    const t = se(e);
    for (const o of l) {
      const a = o.exec(t);
      if (a)
        return {
          id: e.pathname + e.search,
          invalidating: i,
          route: o,
          params: nt(a),
          url: e,
        };
    }
  }
  function se(e) {
    return tt(e.pathname.slice(V.length) || "/");
  }
  function $e({ url: e, type: i, intent: t, delta: o }) {
    let a = !1;
    const s = Je(u, t, e, i);
    o !== void 0 && (s.navigation.delta = o);
    const f = {
      ...s.navigation,
      cancel: () => {
        (a = !0), s.reject(new Error("navigation was cancelled"));
      },
    };
    return O || b.before_navigate.forEach((g) => g(f)), a ? null : s;
  }
  async function ce({
    url: e,
    scroll: i,
    keepfocus: t,
    redirect_count: o,
    details: a,
    type: s,
    delta: f,
    nav_token: g = {},
    accepted: v,
    blocked: _,
  }) {
    var $, q, E;
    const L = Q(e, !1),
      R = $e({ url: e, type: s, delta: f, intent: L });
    if (!R) {
      _();
      return;
    }
    const A = U;
    v(), (O = !0), D && J.navigating.set(R.navigation), (W = g);
    let p = L && (await pe(L));
    if (!p) {
      if (ye(e, V)) return await B(e);
      p = await Ie(
        e,
        { id: null },
        await Z(new Error(`Not found: ${e.pathname}`), {
          url: e,
          params: {},
          route: { id: null },
        }),
        404
      );
    }
    if (((e = (L == null ? void 0 : L.url) || e), W !== g))
      return R.reject(new Error("navigation was aborted")), !1;
    if (p.type === "redirect")
      if (o >= 20)
        p = await ie({
          status: 500,
          error: await Z(new Error("Redirect loop"), {
            url: e,
            params: {},
            route: { id: null },
          }),
          url: e,
          route: { id: null },
        });
      else return re(new URL(p.location, e).href, {}, o + 1, g), !1;
    else
      (($ = p.props.page) == null ? void 0 : $.status) >= 400 &&
        (await J.updated.check()) &&
        (await B(e));
    if (
      ((S.length = 0),
      (G = !1),
      (N = !0),
      be(A),
      Re(A),
      (q = p.props.page) != null &&
        q.url &&
        p.props.page.url.pathname !== e.pathname &&
        (e.pathname = (E = p.props.page) == null ? void 0 : E.url.pathname),
      a)
    ) {
      const k = a.replaceState ? 0 : 1;
      if (
        ((a.state[M] = U += k),
        history[a.replaceState ? "replaceState" : "pushState"](a.state, "", e),
        !a.replaceState)
      ) {
        let x = U + 1;
        for (; ee[x] || z[x]; ) delete ee[x], delete z[x], (x += 1);
      }
    }
    if (((y = null), D)) {
      (u = p.state), p.props.page && (p.props.page.url = e);
      const k = (
        await Promise.all(b.on_navigate.map((x) => x(R.navigation)))
      ).filter((x) => typeof x == "function");
      if (k.length > 0) {
        let x = function () {
          b.after_navigate = b.after_navigate.filter((I) => !k.includes(I));
        };
        k.push(x), b.after_navigate.push(...k);
      }
      F.$set(p.props);
    } else Pe(p);
    const { activeElement: d } = document;
    if ((await _e(), C)) {
      const k =
        e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
      i ? scrollTo(i.x, i.y) : k ? k.scrollIntoView() : scrollTo(0, 0);
    }
    const P =
      document.activeElement !== d && document.activeElement !== document.body;
    !t && !P && Se(),
      (C = !0),
      p.props.page && (H = p.props.page),
      (O = !1),
      s === "popstate" && ke(U),
      R.fulfil(void 0),
      b.after_navigate.forEach((k) => k(R.navigation)),
      J.navigating.set(null),
      (N = !1);
  }
  async function Ie(e, i, t, o) {
    return e.origin === qe && e.pathname === location.pathname && !j
      ? await ie({ status: o, error: t, url: e, route: i })
      : await B(e);
  }
  function Xe() {
    let e;
    w.addEventListener("mousemove", (s) => {
      const f = s.target;
      clearTimeout(e),
        (e = setTimeout(() => {
          o(f, 2);
        }, 20));
    });
    function i(s) {
      o(s.composedPath()[0], 1);
    }
    w.addEventListener("mousedown", i),
      w.addEventListener("touchstart", i, { passive: !0 });
    const t = new IntersectionObserver(
      (s) => {
        for (const f of s)
          f.isIntersecting &&
            (oe(se(new URL(f.target.href))), t.unobserve(f.target));
      },
      { threshold: 0 }
    );
    function o(s, f) {
      const g = Ne(s, w);
      if (!g) return;
      const { url: v, external: _, download: L } = we(g, V);
      if (_ || L) return;
      const R = le(g);
      if (!R.reload)
        if (f <= R.preload_data) {
          const A = Q(v, !1);
          A && Ae(A);
        } else f <= R.preload_code && oe(se(v));
    }
    function a() {
      t.disconnect();
      for (const s of w.querySelectorAll("a")) {
        const { url: f, external: g, download: v } = we(s, V);
        if (g || v) continue;
        const _ = le(s);
        _.reload ||
          (_.preload_code === Me.viewport && t.observe(s),
          _.preload_code === Me.eager && oe(se(f)));
      }
    }
    b.after_navigate.push(a), a();
  }
  function Z(e, i) {
    return e instanceof ne
      ? e.body
      : n.hooks.handleError({ error: e, event: i }) ?? {
          message:
            i.route.id === null && e instanceof bt
              ? "Not Found"
              : "Internal Error",
        };
  }
  return {
    after_navigate: (e) => {
      me(
        () => (
          b.after_navigate.push(e),
          () => {
            const i = b.after_navigate.indexOf(e);
            b.after_navigate.splice(i, 1);
          }
        )
      );
    },
    before_navigate: (e) => {
      me(
        () => (
          b.before_navigate.push(e),
          () => {
            const i = b.before_navigate.indexOf(e);
            b.before_navigate.splice(i, 1);
          }
        )
      );
    },
    on_navigate: (e) => {
      me(
        () => (
          b.on_navigate.push(e),
          () => {
            const i = b.on_navigate.indexOf(e);
            b.on_navigate.splice(i, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (N || !D) && (C = !1);
    },
    goto: (e, i = {}) => re(e, i, 0),
    invalidate: (e) => {
      if (typeof e == "function") S.push(e);
      else {
        const { href: i } = new URL(e, location.href);
        S.push((t) => t.href === i);
      }
      return xe();
    },
    invalidate_all: () => ((G = !0), xe()),
    preload_data: async (e) => {
      const i = new URL(e, De(document)),
        t = Q(i, !1);
      if (!t)
        throw new Error(
          `Attempted to preload a URL that does not belong to this app: ${i}`
        );
      await Ae(t);
    },
    preload_code: oe,
    apply_action: async (e) => {
      if (e.type === "error") {
        const i = new URL(location.href),
          { branch: t, route: o } = u;
        if (!o) return;
        const a = await Oe(u.branch.length, t, o.errors);
        if (a) {
          const s = await X({
            url: i,
            params: u.params,
            branch: t.slice(0, a.idx).concat(a.node),
            status: e.status ?? 500,
            error: e.error,
            route: o,
          });
          (u = s.state), F.$set(s.props), _e().then(Se);
        }
      } else
        e.type === "redirect"
          ? re(e.location, { invalidateAll: !0 }, 0)
          : (F.$set({
              form: null,
              page: { ...H, form: e.data, status: e.status },
            }),
            await _e(),
            F.$set({ form: e.data }),
            e.type === "success" && Se());
    },
    _start_router: () => {
      var i;
      (history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (t) => {
          let o = !1;
          if ((Le(), !O)) {
            const a = Je(u, void 0, null, "leave"),
              s = {
                ...a.navigation,
                cancel: () => {
                  (o = !0), a.reject(new Error("navigation was cancelled"));
                },
              };
            b.before_navigate.forEach((f) => f(s));
          }
          o
            ? (t.preventDefault(), (t.returnValue = ""))
            : (history.scrollRestoration = "auto");
        }),
        addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden" && Le();
        }),
        ((i = navigator.connection) != null && i.saveData) || Xe(),
        w.addEventListener("click", (t) => {
          var A;
          if (
            t.button ||
            t.which !== 1 ||
            t.metaKey ||
            t.ctrlKey ||
            t.shiftKey ||
            t.altKey ||
            t.defaultPrevented
          )
            return;
          const o = Ne(t.composedPath()[0], w);
          if (!o) return;
          const { url: a, external: s, target: f, download: g } = we(o, V);
          if (!a) return;
          if (f === "_parent" || f === "_top") {
            if (window.parent !== window) return;
          } else if (f && f !== "_self") return;
          const v = le(o);
          if (
            (!(o instanceof SVGAElement) &&
              a.protocol !== location.protocol &&
              !(a.protocol === "https:" || a.protocol === "http:")) ||
            g
          )
            return;
          if (s || v.reload) {
            $e({ url: a, type: "link" }) ? (O = !0) : t.preventDefault();
            return;
          }
          const [L, R] = a.href.split("#");
          if (R !== void 0 && L === location.href.split("#")[0]) {
            if (u.url.hash === a.hash) {
              t.preventDefault(),
                (A = o.ownerDocument.getElementById(R)) == null ||
                  A.scrollIntoView();
              return;
            }
            if (((T = !0), be(U), e(a), !v.replace_state)) return;
            (T = !1), t.preventDefault();
          }
          ce({
            url: a,
            scroll: v.noscroll ? te() : null,
            keepfocus: v.keep_focus ?? !1,
            redirect_count: 0,
            details: {
              state: {},
              replaceState: v.replace_state ?? a.href === location.href,
            },
            accepted: () => t.preventDefault(),
            blocked: () => t.preventDefault(),
            type: "link",
          });
        }),
        w.addEventListener("submit", (t) => {
          if (t.defaultPrevented) return;
          const o = HTMLFormElement.prototype.cloneNode.call(t.target),
            a = t.submitter;
          if (((a == null ? void 0 : a.formMethod) || o.method) !== "get")
            return;
          const f = new URL(
            ((a == null ? void 0 : a.hasAttribute("formaction")) &&
              (a == null ? void 0 : a.formAction)) ||
              o.action
          );
          if (ye(f, V)) return;
          const g = t.target,
            { keep_focus: v, noscroll: _, reload: L, replace_state: R } = le(g);
          if (L) return;
          t.preventDefault(), t.stopPropagation();
          const A = new FormData(g),
            p = a == null ? void 0 : a.getAttribute("name");
          p &&
            A.append(p, (a == null ? void 0 : a.getAttribute("value")) ?? ""),
            (f.search = new URLSearchParams(A).toString()),
            ce({
              url: f,
              scroll: _ ? te() : null,
              keepfocus: v ?? !1,
              redirect_count: 0,
              details: {
                state: {},
                replaceState: R ?? f.href === location.href,
              },
              nav_token: {},
              accepted: () => {},
              blocked: () => {},
              type: "form",
            });
        }),
        addEventListener("popstate", async (t) => {
          var o, a;
          if (((W = {}), (o = t.state) != null && o[M])) {
            if (t.state[M] === U) return;
            const s = z[t.state[M]],
              f = new URL(location.href);
            if (
              ((a = u.url) == null ? void 0 : a.href.split("#")[0]) ===
              location.href.split("#")[0]
            ) {
              e(f), (z[U] = te()), (U = t.state[M]), scrollTo(s.x, s.y);
              return;
            }
            const g = t.state[M] - U;
            await ce({
              url: f,
              scroll: s,
              keepfocus: !1,
              redirect_count: 0,
              details: null,
              accepted: () => {
                U = t.state[M];
              },
              blocked: () => {
                history.go(-g);
              },
              type: "popstate",
              delta: g,
              nav_token: W,
            });
          } else if (!T) {
            const s = new URL(location.href);
            e(s);
          }
        }),
        addEventListener("hashchange", () => {
          T &&
            ((T = !1),
            history.replaceState(
              { ...history.state, [M]: ++U },
              "",
              location.href
            ));
        });
      for (const t of document.querySelectorAll("link"))
        t.rel === "icon" && (t.href = t.href);
      addEventListener("pageshow", (t) => {
        t.persisted && J.navigating.set(null);
      });
      function e(t) {
        (u.url = t), J.page.set({ ...H, url: t }), J.page.notify();
      }
    },
    _hydrate: async ({
      status: e = 200,
      error: i,
      node_ids: t,
      params: o,
      route: a,
      data: s,
      form: f,
    }) => {
      j = !0;
      const g = new URL(location.href);
      ({ params: o = {}, route: a = { id: null } } = Q(g, !1) || {});
      let v;
      try {
        const _ = t.map(async (A, p) => {
            const d = s[p];
            return (
              d != null && d.uses && (d.uses = Ye(d.uses)),
              ue({
                loader: n.nodes[A],
                url: g,
                params: o,
                route: a,
                parent: async () => {
                  const P = {};
                  for (let $ = 0; $ < p; $ += 1)
                    Object.assign(P, (await _[$]).data);
                  return P;
                },
                server_data_node: de(d),
              })
            );
          }),
          L = await Promise.all(_),
          R = l.find(({ id: A }) => A === a.id);
        if (R) {
          const A = R.layouts;
          for (let p = 0; p < A.length; p++) A[p] || L.splice(p, 0, void 0);
        }
        v = await X({
          url: g,
          params: o,
          branch: L,
          status: e,
          error: i,
          form: f,
          route: R ?? null,
        });
      } catch (_) {
        if (_ instanceof Ve) {
          await B(new URL(_.location, location.href));
          return;
        }
        v = await ie({
          status: _ instanceof ne ? _.status : 500,
          error: await Z(_, { url: g, params: o, route: a }),
          url: g,
          route: a,
        });
      }
      Pe(v);
    },
  };
}
async function He(n, r) {
  var h;
  const l = new URL(n);
  (l.pathname = st(n.pathname)),
    n.pathname.endsWith("/") && l.searchParams.append(Et, "1"),
    l.searchParams.append(St, r.map((w) => (w ? "1" : "0")).join(""));
  const c = await Be(l.href);
  if (
    ((h = c.headers.get("content-type")) != null &&
      h.includes("text/html") &&
      (await B(n)),
    !c.ok)
  )
    throw new ne(c.status, await c.json());
  return new Promise(async (w) => {
    var j;
    const S = new Map(),
      m = c.body.getReader(),
      y = new TextDecoder();
    function b(D) {
      return Ze(D, {
        Promise: (C) =>
          new Promise((N, O) => {
            S.set(C, { fulfil: N, reject: O });
          }),
      });
    }
    let u = "";
    for (;;) {
      const { done: D, value: C } = await m.read();
      if (D && !u) break;
      for (
        u +=
          !C && u
            ? `
`
            : y.decode(C);
        ;

      ) {
        const N = u.indexOf(`
`);
        if (N === -1) break;
        const O = JSON.parse(u.slice(0, N));
        if (((u = u.slice(N + 1)), O.type === "redirect")) return w(O);
        if (O.type === "data")
          (j = O.nodes) == null ||
            j.forEach((T) => {
              (T == null ? void 0 : T.type) === "data" &&
                ((T.uses = Ye(T.uses)), (T.data = b(T.data)));
            }),
            w(O);
        else if (O.type === "chunk") {
          const { id: T, data: G, error: F } = O,
            U = S.get(T);
          S.delete(T), F ? U.reject(b(F)) : U.fulfil(b(G));
        }
      }
    }
  });
}
function Ye(n) {
  return {
    dependencies: new Set((n == null ? void 0 : n.dependencies) ?? []),
    params: new Set((n == null ? void 0 : n.params) ?? []),
    parent: !!(n != null && n.parent),
    route: !!(n != null && n.route),
    url: !!(n != null && n.url),
  };
}
function Se() {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const r = document.body,
      l = r.getAttribute("tabindex");
    (r.tabIndex = -1),
      r.focus({ preventScroll: !0, focusVisible: !1 }),
      l !== null
        ? r.setAttribute("tabindex", l)
        : r.removeAttribute("tabindex");
    const c = getSelection();
    if (c && c.type !== "None") {
      const h = [];
      for (let w = 0; w < c.rangeCount; w += 1) h.push(c.getRangeAt(w));
      setTimeout(() => {
        if (c.rangeCount === h.length) {
          for (let w = 0; w < c.rangeCount; w += 1) {
            const S = h[w],
              m = c.getRangeAt(w);
            if (
              S.commonAncestorContainer !== m.commonAncestorContainer ||
              S.startContainer !== m.startContainer ||
              S.endContainer !== m.endContainer ||
              S.startOffset !== m.startOffset ||
              S.endOffset !== m.endOffset
            )
              return;
          }
          c.removeAllRanges();
        }
      });
    }
  }
}
function Je(n, r, l, c) {
  var y, b;
  let h, w;
  const S = new Promise((u, j) => {
    (h = u), (w = j);
  });
  return (
    S.catch(() => {}),
    {
      navigation: {
        from: {
          params: n.params,
          route: { id: ((y = n.route) == null ? void 0 : y.id) ?? null },
          url: n.url,
        },
        to: l && {
          params: (r == null ? void 0 : r.params) ?? null,
          route: {
            id:
              ((b = r == null ? void 0 : r.route) == null ? void 0 : b.id) ??
              null,
          },
          url: l,
        },
        willUnload: !r,
        type: c,
        complete: S,
      },
      fulfil: h,
      reject: w,
    }
  );
}
async function At(n, r, l) {
  const c = xt(n, r);
  Qe({ client: c }),
    l ? await c._hydrate(l) : c.goto(location.href, { replaceState: !0 }),
    c._start_router();
}
export { At as start };
