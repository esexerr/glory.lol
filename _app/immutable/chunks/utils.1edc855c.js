function er(r) {
  var e,
    o,
    t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var a = r.length;
      for (e = 0; e < a; e++)
        r[e] && (o = er(r[e])) && (t && (t += " "), (t += o));
    } else for (o in r) r[o] && (t && (t += " "), (t += o));
  return t;
}
function sr() {
  for (var r, e, o = 0, t = "", a = arguments.length; o < a; o++)
    (r = arguments[o]) && (e = er(r)) && (t && (t += " "), (t += e));
  return t;
}
function lr() {
  for (var r = 0, e, o, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (o = tr(e)) && (t && (t += " "), (t += o));
  return t;
}
function tr(r) {
  if (typeof r == "string") return r;
  for (var e, o = "", t = 0; t < r.length; t++)
    r[t] && (e = tr(r[t])) && (o && (o += " "), (o += e));
  return o;
}
var U = "-";
function dr(r) {
  var e = ur(r),
    o = r.conflictingClassGroups,
    t = r.conflictingClassGroupModifiers,
    a = t === void 0 ? {} : t;
  function s(i) {
    var d = i.split(U);
    return d[0] === "" && d.length !== 1 && d.shift(), or(d, e) || cr(i);
  }
  function n(i, d) {
    var u = o[i] || [];
    return d && a[i] ? [].concat(u, a[i]) : u;
  }
  return { getClassGroupId: s, getConflictingClassGroupIds: n };
}
function or(r, e) {
  var n;
  if (r.length === 0) return e.classGroupId;
  var o = r[0],
    t = e.nextPart.get(o),
    a = t ? or(r.slice(1), t) : void 0;
  if (a) return a;
  if (e.validators.length !== 0) {
    var s = r.join(U);
    return (n = e.validators.find(function (i) {
      var d = i.validator;
      return d(s);
    })) == null
      ? void 0
      : n.classGroupId;
  }
}
var _ = /^\[(.+)\]$/;
function cr(r) {
  if (_.test(r)) {
    var e = _.exec(r)[1],
      o = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (o) return "arbitrary.." + o;
  }
}
function ur(r) {
  var e = r.theme,
    o = r.prefix,
    t = { nextPart: new Map(), validators: [] },
    a = fr(Object.entries(r.classGroups), o);
  return (
    a.forEach(function (s) {
      var n = s[0],
        i = s[1];
      $(i, t, n, e);
    }),
    t
  );
}
function $(r, e, o, t) {
  r.forEach(function (a) {
    if (typeof a == "string") {
      var s = a === "" ? e : D(e, a);
      s.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (pr(a)) {
        $(a(t), e, o, t);
        return;
      }
      e.validators.push({ validator: a, classGroupId: o });
      return;
    }
    Object.entries(a).forEach(function (n) {
      var i = n[0],
        d = n[1];
      $(d, D(e, i), o, t);
    });
  });
}
function D(r, e) {
  var o = r;
  return (
    e.split(U).forEach(function (t) {
      o.nextPart.has(t) ||
        o.nextPart.set(t, { nextPart: new Map(), validators: [] }),
        (o = o.nextPart.get(t));
    }),
    o
  );
}
function pr(r) {
  return r.isThemeGetter;
}
function fr(r, e) {
  return e
    ? r.map(function (o) {
        var t = o[0],
          a = o[1],
          s = a.map(function (n) {
            return typeof n == "string"
              ? e + n
              : typeof n == "object"
              ? Object.fromEntries(
                  Object.entries(n).map(function (i) {
                    var d = i[0],
                      u = i[1];
                    return [e + d, u];
                  })
                )
              : n;
          });
        return [t, s];
      })
    : r;
}
function br(r) {
  if (r < 1) return { get: function () {}, set: function () {} };
  var e = 0,
    o = new Map(),
    t = new Map();
  function a(s, n) {
    o.set(s, n), e++, e > r && ((e = 0), (t = o), (o = new Map()));
  }
  return {
    get: function (n) {
      var i = o.get(n);
      if (i !== void 0) return i;
      if ((i = t.get(n)) !== void 0) return a(n, i), i;
    },
    set: function (n, i) {
      o.has(n) ? o.set(n, i) : a(n, i);
    },
  };
}
var nr = "!";
function gr(r) {
  var e = r.separator || ":",
    o = e.length === 1,
    t = e[0],
    a = e.length;
  return function (n) {
    for (var i = [], d = 0, u = 0, b, f = 0; f < n.length; f++) {
      var g = n[f];
      if (d === 0) {
        if (g === t && (o || n.slice(f, f + a) === e)) {
          i.push(n.slice(u, f)), (u = f + a);
          continue;
        }
        if (g === "/") {
          b = f;
          continue;
        }
      }
      g === "[" ? d++ : g === "]" && d--;
    }
    var h = i.length === 0 ? n : n.substring(u),
      y = h.startsWith(nr),
      m = y ? h.substring(1) : h,
      x = b && b > u ? b - u : void 0;
    return {
      modifiers: i,
      hasImportantModifier: y,
      baseClassName: m,
      maybePostfixModifierPosition: x,
    };
  };
}
function mr(r) {
  if (r.length <= 1) return r;
  var e = [],
    o = [];
  return (
    r.forEach(function (t) {
      var a = t[0] === "[";
      a ? (e.push.apply(e, o.sort().concat([t])), (o = [])) : o.push(t);
    }),
    e.push.apply(e, o.sort()),
    e
  );
}
function vr(r) {
  return { cache: br(r.cacheSize), splitModifiers: gr(r), ...dr(r) };
}
var hr = /\s+/;
function yr(r, e) {
  var o = e.splitModifiers,
    t = e.getClassGroupId,
    a = e.getConflictingClassGroupIds,
    s = new Set();
  return r
    .trim()
    .split(hr)
    .map(function (n) {
      var i = o(n),
        d = i.modifiers,
        u = i.hasImportantModifier,
        b = i.baseClassName,
        f = i.maybePostfixModifierPosition,
        g = t(f ? b.substring(0, f) : b),
        h = !!f;
      if (!g) {
        if (!f) return { isTailwindClass: !1, originalClassName: n };
        if (((g = t(b)), !g))
          return { isTailwindClass: !1, originalClassName: n };
        h = !1;
      }
      var y = mr(d).join(":"),
        m = u ? y + nr : y;
      return {
        isTailwindClass: !0,
        modifierId: m,
        classGroupId: g,
        originalClassName: n,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter(function (n) {
      if (!n.isTailwindClass) return !0;
      var i = n.modifierId,
        d = n.classGroupId,
        u = n.hasPostfixModifier,
        b = i + d;
      return s.has(b)
        ? !1
        : (s.add(b),
          a(d, u).forEach(function (f) {
            return s.add(i + f);
          }),
          !0);
    })
    .reverse()
    .map(function (n) {
      return n.originalClassName;
    })
    .join(" ");
}
function xr() {
  for (var r = arguments.length, e = new Array(r), o = 0; o < r; o++)
    e[o] = arguments[o];
  var t,
    a,
    s,
    n = i;
  function i(u) {
    var b = e[0],
      f = e.slice(1),
      g = f.reduce(function (h, y) {
        return y(h);
      }, b());
    return (t = vr(g)), (a = t.cache.get), (s = t.cache.set), (n = d), d(u);
  }
  function d(u) {
    var b = a(u);
    if (b) return b;
    var f = yr(u, t);
    return s(u, f), f;
  }
  return function () {
    return n(lr.apply(null, arguments));
  };
}
function c(r) {
  var e = function (t) {
    return t[r] || [];
  };
  return (e.isThemeGetter = !0), e;
}
var ir = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  wr = /^\d+\/\d+$/,
  Cr = new Set(["px", "full", "screen"]),
  kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Mr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ar = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function w(r) {
  return A(r) || Cr.has(r) || wr.test(r) || B(r);
}
function B(r) {
  return z(r, "length", Rr);
}
function zr(r) {
  return z(r, "size", ar);
}
function Gr(r) {
  return z(r, "position", ar);
}
function Sr(r) {
  return z(r, "url", Tr);
}
function j(r) {
  return z(r, "number", A);
}
function A(r) {
  return !Number.isNaN(Number(r));
}
function Ir(r) {
  return r.endsWith("%") && A(r.slice(0, -1));
}
function I(r) {
  return rr(r) || z(r, "number", rr);
}
function l(r) {
  return ir.test(r);
}
function P() {
  return !0;
}
function M(r) {
  return kr.test(r);
}
function Pr(r) {
  return z(r, "", Er);
}
function z(r, e, o) {
  var t = ir.exec(r);
  return t ? (t[1] ? t[1] === e : o(t[2])) : !1;
}
function Rr(r) {
  return Mr.test(r);
}
function ar() {
  return !1;
}
function Tr(r) {
  return r.startsWith("url(");
}
function rr(r) {
  return Number.isInteger(Number(r));
}
function Er(r) {
  return Ar.test(r);
}
function jr() {
  var r = c("colors"),
    e = c("spacing"),
    o = c("blur"),
    t = c("brightness"),
    a = c("borderColor"),
    s = c("borderRadius"),
    n = c("borderSpacing"),
    i = c("borderWidth"),
    d = c("contrast"),
    u = c("grayscale"),
    b = c("hueRotate"),
    f = c("invert"),
    g = c("gap"),
    h = c("gradientColorStops"),
    y = c("gradientColorStopPositions"),
    m = c("inset"),
    x = c("margin"),
    k = c("opacity"),
    C = c("padding"),
    F = c("saturate"),
    W = c("scale"),
    q = c("sepia"),
    Z = c("skew"),
    J = c("space"),
    X = c("translate"),
    L = function () {
      return ["auto", "contain", "none"];
    },
    N = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    O = function () {
      return ["auto", l, e];
    },
    p = function () {
      return [l, e];
    },
    H = function () {
      return ["", w];
    },
    R = function () {
      return ["auto", A, l];
    },
    K = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    T = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    Q = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    V = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    G = function () {
      return ["", "0", l];
    },
    Y = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    S = function () {
      return [A, j];
    },
    E = function () {
      return [A, l];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [P],
      spacing: [w],
      blur: ["none", "", M, l],
      brightness: S(),
      borderColor: [r],
      borderRadius: ["none", "", "full", M, l],
      borderSpacing: p(),
      borderWidth: H(),
      contrast: S(),
      grayscale: G(),
      hueRotate: E(),
      invert: G(),
      gap: p(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Ir, B],
      inset: O(),
      margin: O(),
      opacity: S(),
      padding: p(),
      saturate: S(),
      scale: S(),
      sepia: G(),
      skew: E(),
      space: p(),
      translate: p(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", l] }],
      container: ["container"],
      columns: [{ columns: [M] }],
      "break-after": [{ "break-after": Y() }],
      "break-before": [{ "break-before": Y() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(K(), [l]) }],
      overflow: [{ overflow: N() }],
      "overflow-x": [{ "overflow-x": N() }],
      "overflow-y": [{ "overflow-y": N() }],
      overscroll: [{ overscroll: L() }],
      "overscroll-x": [{ "overscroll-x": L() }],
      "overscroll-y": [{ "overscroll-y": L() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [m] }],
      "inset-x": [{ "inset-x": [m] }],
      "inset-y": [{ "inset-y": [m] }],
      start: [{ start: [m] }],
      end: [{ end: [m] }],
      top: [{ top: [m] }],
      right: [{ right: [m] }],
      bottom: [{ bottom: [m] }],
      left: [{ left: [m] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", I] }],
      basis: [{ basis: O() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", l] }],
      grow: [{ grow: G() }],
      shrink: [{ shrink: G() }],
      order: [{ order: ["first", "last", "none", I] }],
      "grid-cols": [{ "grid-cols": [P] }],
      "col-start-end": [{ col: ["auto", { span: ["full", I] }, l] }],
      "col-start": [{ "col-start": R() }],
      "col-end": [{ "col-end": R() }],
      "grid-rows": [{ "grid-rows": [P] }],
      "row-start-end": [{ row: ["auto", { span: [I] }, l] }],
      "row-start": [{ "row-start": R() }],
      "row-end": [{ "row-end": R() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", l] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", l] }],
      gap: [{ gap: [g] }],
      "gap-x": [{ "gap-x": [g] }],
      "gap-y": [{ "gap-y": [g] }],
      "justify-content": [{ justify: ["normal"].concat(V()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(V(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(V(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [C] }],
      px: [{ px: [C] }],
      py: [{ py: [C] }],
      ps: [{ ps: [C] }],
      pe: [{ pe: [C] }],
      pt: [{ pt: [C] }],
      pr: [{ pr: [C] }],
      pb: [{ pb: [C] }],
      pl: [{ pl: [C] }],
      m: [{ m: [x] }],
      mx: [{ mx: [x] }],
      my: [{ my: [x] }],
      ms: [{ ms: [x] }],
      me: [{ me: [x] }],
      mt: [{ mt: [x] }],
      mr: [{ mr: [x] }],
      mb: [{ mb: [x] }],
      ml: [{ ml: [x] }],
      "space-x": [{ "space-x": [J] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [J] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", l, e] }],
      "min-w": [{ "min-w": ["min", "max", "fit", l, w] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [M] },
            M,
            l,
          ],
        },
      ],
      h: [{ h: [l, e, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", l, w] }],
      "max-h": [{ "max-h": [l, e, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", M, B] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            j,
          ],
        },
      ],
      "font-family": [{ font: [P] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            l,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", A, j] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            l,
            w,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", l] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", l] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [r] }],
      "placeholder-opacity": [{ "placeholder-opacity": [k] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [r] }],
      "text-opacity": [{ "text-opacity": [k] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(T(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", w] }],
      "underline-offset": [{ "underline-offset": ["auto", l, w] }],
      "text-decoration-color": [{ decoration: [r] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: p() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            l,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", l] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [k] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(K(), [Gr]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", zr] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Sr,
          ],
        },
      ],
      "bg-color": [{ bg: [r] }],
      "gradient-from-pos": [{ from: [y] }],
      "gradient-via-pos": [{ via: [y] }],
      "gradient-to-pos": [{ to: [y] }],
      "gradient-from": [{ from: [h] }],
      "gradient-via": [{ via: [h] }],
      "gradient-to": [{ to: [h] }],
      rounded: [{ rounded: [s] }],
      "rounded-s": [{ "rounded-s": [s] }],
      "rounded-e": [{ "rounded-e": [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-ss": [{ "rounded-ss": [s] }],
      "rounded-se": [{ "rounded-se": [s] }],
      "rounded-ee": [{ "rounded-ee": [s] }],
      "rounded-es": [{ "rounded-es": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [i] }],
      "border-w-x": [{ "border-x": [i] }],
      "border-w-y": [{ "border-y": [i] }],
      "border-w-s": [{ "border-s": [i] }],
      "border-w-e": [{ "border-e": [i] }],
      "border-w-t": [{ "border-t": [i] }],
      "border-w-r": [{ "border-r": [i] }],
      "border-w-b": [{ "border-b": [i] }],
      "border-w-l": [{ "border-l": [i] }],
      "border-opacity": [{ "border-opacity": [k] }],
      "border-style": [{ border: [].concat(T(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [i] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [i] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [k] }],
      "divide-style": [{ divide: T() }],
      "border-color": [{ border: [a] }],
      "border-color-x": [{ "border-x": [a] }],
      "border-color-y": [{ "border-y": [a] }],
      "border-color-t": [{ "border-t": [a] }],
      "border-color-r": [{ "border-r": [a] }],
      "border-color-b": [{ "border-b": [a] }],
      "border-color-l": [{ "border-l": [a] }],
      "divide-color": [{ divide: [a] }],
      "outline-style": [{ outline: [""].concat(T()) }],
      "outline-offset": [{ "outline-offset": [l, w] }],
      "outline-w": [{ outline: [w] }],
      "outline-color": [{ outline: [r] }],
      "ring-w": [{ ring: H() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [r] }],
      "ring-opacity": [{ "ring-opacity": [k] }],
      "ring-offset-w": [{ "ring-offset": [w] }],
      "ring-offset-color": [{ "ring-offset": [r] }],
      shadow: [{ shadow: ["", "inner", "none", M, Pr] }],
      "shadow-color": [{ shadow: [P] }],
      opacity: [{ opacity: [k] }],
      "mix-blend": [{ "mix-blend": Q() }],
      "bg-blend": [{ "bg-blend": Q() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [o] }],
      brightness: [{ brightness: [t] }],
      contrast: [{ contrast: [d] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", M, l] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [b] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [F] }],
      sepia: [{ sepia: [q] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [o] }],
      "backdrop-brightness": [{ "backdrop-brightness": [t] }],
      "backdrop-contrast": [{ "backdrop-contrast": [d] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [k] }],
      "backdrop-saturate": [{ "backdrop-saturate": [F] }],
      "backdrop-sepia": [{ "backdrop-sepia": [q] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [n] }],
      "border-spacing-x": [{ "border-spacing-x": [n] }],
      "border-spacing-y": [{ "border-spacing-y": [n] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            l,
          ],
        },
      ],
      duration: [{ duration: E() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", l] }],
      delay: [{ delay: E() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", l] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [W] }],
      "scale-x": [{ "scale-x": [W] }],
      "scale-y": [{ "scale-y": [W] }],
      rotate: [{ rotate: [I, l] }],
      "translate-x": [{ "translate-x": [X] }],
      "translate-y": [{ "translate-y": [X] }],
      "skew-x": [{ "skew-x": [Z] }],
      "skew-y": [{ "skew-y": [Z] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            l,
          ],
        },
      ],
      accent: [{ accent: ["auto", r] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            l,
          ],
        },
      ],
      "caret-color": [{ caret: [r] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": p() }],
      "scroll-mx": [{ "scroll-mx": p() }],
      "scroll-my": [{ "scroll-my": p() }],
      "scroll-ms": [{ "scroll-ms": p() }],
      "scroll-me": [{ "scroll-me": p() }],
      "scroll-mt": [{ "scroll-mt": p() }],
      "scroll-mr": [{ "scroll-mr": p() }],
      "scroll-mb": [{ "scroll-mb": p() }],
      "scroll-ml": [{ "scroll-ml": p() }],
      "scroll-p": [{ "scroll-p": p() }],
      "scroll-px": [{ "scroll-px": p() }],
      "scroll-py": [{ "scroll-py": p() }],
      "scroll-ps": [{ "scroll-ps": p() }],
      "scroll-pe": [{ "scroll-pe": p() }],
      "scroll-pt": [{ "scroll-pt": p() }],
      "scroll-pr": [{ "scroll-pr": p() }],
      "scroll-pb": [{ "scroll-pb": p() }],
      "scroll-pl": [{ "scroll-pl": p() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", l] },
      ],
      fill: [{ fill: [r, "none"] }],
      "stroke-w": [{ stroke: [w, j] }],
      stroke: [{ stroke: [r, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var Wr = xr(jr);
function Lr(...r) {
  return Wr(sr(r));
}
export { Lr as c };
