import { a as h } from "./index.76ef9bed.js";
import { ab as b, ac as f } from "./index.4f26dcbc.js";
function F(s, { delay: i = 0, duration: p = 400, easing: c = b } = {}) {
  const e = +getComputedStyle(s).opacity;
  return { delay: i, duration: p, easing: c, css: (t) => `opacity: ${t * e}` };
}
function w(
  s,
  {
    delay: i = 0,
    duration: p = 400,
    easing: c = h,
    x: e = 0,
    y: t = 0,
    opacity: l = 0,
  } = {}
) {
  const n = getComputedStyle(s),
    d = +n.opacity,
    o = n.transform === "none" ? "" : n.transform,
    r = d * (1 - l),
    [y, _] = f(e),
    [m, u] = f(t);
  return {
    delay: i,
    duration: p,
    easing: c,
    css: ($, g) => `
			transform: ${o} translate(${(1 - $) * y}${_}, ${(1 - $) * m}${u});
			opacity: ${d - r * g}`,
  };
}
function C(
  s,
  { delay: i = 0, duration: p = 400, easing: c = h, axis: e = "y" } = {}
) {
  const t = getComputedStyle(s),
    l = +t.opacity,
    n = e === "y" ? "height" : "width",
    d = parseFloat(t[n]),
    o = e === "y" ? ["top", "bottom"] : ["left", "right"],
    r = o.map((a) => `${a[0].toUpperCase()}${a.slice(1)}`),
    y = parseFloat(t[`padding${r[0]}`]),
    _ = parseFloat(t[`padding${r[1]}`]),
    m = parseFloat(t[`margin${r[0]}`]),
    u = parseFloat(t[`margin${r[1]}`]),
    $ = parseFloat(t[`border${r[0]}Width`]),
    g = parseFloat(t[`border${r[1]}Width`]);
  return {
    delay: i,
    duration: p,
    easing: c,
    css: (a) =>
      `overflow: hidden;opacity: ${Math.min(a * 20, 1) * l};${n}: ${
        a * d
      }px;padding-${o[0]}: ${a * y}px;padding-${o[1]}: ${a * _}px;margin-${
        o[0]
      }: ${a * m}px;margin-${o[1]}: ${a * u}px;border-${o[0]}-width: ${
        a * $
      }px;border-${o[1]}-width: ${a * g}px;`,
  };
}
export { F as a, w as f, C as s };
