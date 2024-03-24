function c(n) {
  return --n * n * ((1.70158 + 1) * n + 1.70158) + 1;
}
function r(n) {
  return n * n * n;
}
function s(n) {
  const u = n - 1;
  return u * u * u + 1;
}
function i(n) {
  return --n * n * n * n * n + 1;
}
export { s as a, c as b, r as c, i as q };
