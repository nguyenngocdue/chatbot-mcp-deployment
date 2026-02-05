import { c as cn, a as sn } from "./linear-GcbIgsgU.js";
import { i as fn } from "./init-DxzjmxYy.js";
function ln(e, n) {
  e = e.slice();
  var r = 0, t = e.length - 1, s = e[r], o = e[t], i;
  return o < s && (i = r, r = t, t = i, i = s, s = o, o = i), e[r] = n.floor(s), e[t] = n.ceil(o), e;
}
const te = /* @__PURE__ */ new Date(), ue = /* @__PURE__ */ new Date();
function C(e, n, r, t) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), n(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), f = s.ceil(o);
    return o - i < f - o ? i : f;
  }, s.offset = (o, i) => (n(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, f) => {
    const g = [];
    if (o = s.ceil(o), f = f == null ? 1 : Math.floor(f), !(o < i) || !(f > 0)) return g;
    let c;
    do
      g.push(c = /* @__PURE__ */ new Date(+o)), n(o, f), e(o);
    while (c < o && o < i);
    return g;
  }, s.filter = (o) => C((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, f) => {
    if (i >= i)
      if (f < 0) for (; ++f <= 0; )
        for (; n(i, -1), !o(i); )
          ;
      else for (; --f >= 0; )
        for (; n(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (te.setTime(+o), ue.setTime(+i), e(te), e(ue), Math.floor(r(te, ue))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(t ? (i) => t(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const G = C(() => {
}, (e, n) => {
  e.setTime(+e + n);
}, (e, n) => n - e);
G.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? C((n) => {
  n.setTime(Math.floor(n / e) * e);
}, (n, r) => {
  n.setTime(+n + r * e);
}, (n, r) => (r - n) / e) : G);
G.range;
const k = 1e3, H = k * 60, L = H * 60, N = L * 24, se = N * 7, ye = N * 30, oe = N * 365, R = C((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, n) => {
  e.setTime(+e + n * k);
}, (e, n) => (n - e) / k, (e) => e.getUTCSeconds());
R.range;
const fe = C((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * k);
}, (e, n) => {
  e.setTime(+e + n * H);
}, (e, n) => (n - e) / H, (e) => e.getMinutes());
fe.range;
const xe = C((e) => {
  e.setUTCSeconds(0, 0);
}, (e, n) => {
  e.setTime(+e + n * H);
}, (e, n) => (n - e) / H, (e) => e.getUTCMinutes());
xe.range;
const le = C((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * k - e.getMinutes() * H);
}, (e, n) => {
  e.setTime(+e + n * L);
}, (e, n) => (n - e) / L, (e) => e.getHours());
le.range;
const ke = C((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, n) => {
  e.setTime(+e + n * L);
}, (e, n) => (n - e) / L, (e) => e.getUTCHours());
ke.range;
const j = C(
  (e) => e.setHours(0, 0, 0, 0),
  (e, n) => e.setDate(e.getDate() + n),
  (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * H) / N,
  (e) => e.getDate() - 1
);
j.range;
const ge = C((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / N, (e) => e.getUTCDate() - 1);
ge.range;
const Le = C((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / N, (e) => Math.floor(e / N));
Le.range;
function Z(e) {
  return C((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - e) % 7), n.setHours(0, 0, 0, 0);
  }, (n, r) => {
    n.setDate(n.getDate() + r * 7);
  }, (n, r) => (r - n - (r.getTimezoneOffset() - n.getTimezoneOffset()) * H) / se);
}
const K = Z(0), $ = Z(1), gn = Z(2), mn = Z(3), P = Z(4), hn = Z(5), Tn = Z(6);
K.range;
$.range;
gn.range;
mn.range;
P.range;
hn.range;
Tn.range;
function d(e) {
  return C((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - e) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, r) => {
    n.setUTCDate(n.getUTCDate() + r * 7);
  }, (n, r) => (r - n) / se);
}
const me = d(0), E = d(1), yn = d(2), Mn = d(3), Q = d(4), Un = d(5), Cn = d(6);
me.range;
E.range;
yn.range;
Mn.range;
Q.range;
Un.range;
Cn.range;
const he = C((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setMonth(e.getMonth() + n);
}, (e, n) => n.getMonth() - e.getMonth() + (n.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
he.range;
const Ne = C((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCMonth(e.getUTCMonth() + n);
}, (e, n) => n.getUTCMonth() - e.getUTCMonth() + (n.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ne.range;
const b = C((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n);
}, (e, n) => n.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
b.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : C((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / e) * e), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, r) => {
  n.setFullYear(n.getFullYear() + r * e);
});
b.range;
const I = C((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n);
}, (e, n) => n.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
I.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : C((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / e) * e), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, r) => {
  n.setUTCFullYear(n.getUTCFullYear() + r * e);
});
I.range;
function ae(e, n) {
  return e == null || n == null ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function Dn(e, n) {
  return e == null || n == null ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
}
function vn(e) {
  let n, r, t;
  e.length !== 2 ? (n = ae, r = (f, g) => ae(e(f), g), t = (f, g) => e(f) - g) : (n = e === ae || e === Dn ? e : wn, r = e, t = e);
  function s(f, g, c = 0, m = f.length) {
    if (c < m) {
      if (n(g, g) !== 0) return m;
      do {
        const M = c + m >>> 1;
        r(f[M], g) < 0 ? c = M + 1 : m = M;
      } while (c < m);
    }
    return c;
  }
  function o(f, g, c = 0, m = f.length) {
    if (c < m) {
      if (n(g, g) !== 0) return m;
      do {
        const M = c + m >>> 1;
        r(f[M], g) <= 0 ? c = M + 1 : m = M;
      } while (c < m);
    }
    return c;
  }
  function i(f, g, c = 0, m = f.length) {
    const M = s(f, g, c, m - 1);
    return M > c && t(f[M - 1], g) > -t(f[M], g) ? M - 1 : M;
  }
  return { left: s, center: i, right: o };
}
function wn() {
  return 0;
}
const Sn = Math.sqrt(50), Fn = Math.sqrt(10), Yn = Math.sqrt(2);
function be(e, n, r) {
  const t = (n - e) / Math.max(0, r), s = Math.floor(Math.log10(t)), o = t / Math.pow(10, s), i = o >= Sn ? 10 : o >= Fn ? 5 : o >= Yn ? 2 : 1;
  let f, g, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, f = Math.round(e * c), g = Math.round(n * c), f / c < e && ++f, g / c > n && --g, c = -c) : (c = Math.pow(10, s) * i, f = Math.round(e / c), g = Math.round(n / c), f * c < e && ++f, g * c > n && --g), g < f && 0.5 <= r && r < 2 ? be(e, n, r * 2) : [f, g, c];
}
function Me(e, n, r) {
  return n = +n, e = +e, r = +r, be(e, n, r)[2];
}
function Ue(e, n, r) {
  n = +n, e = +e, r = +r;
  const t = n < e, s = t ? Me(n, e, r) : Me(e, n, r);
  return (t ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Oe(e, n, r, t, s, o) {
  const i = [
    [R, 1, k],
    [R, 5, 5 * k],
    [R, 15, 15 * k],
    [R, 30, 30 * k],
    [o, 1, H],
    [o, 5, 5 * H],
    [o, 15, 15 * H],
    [o, 30, 30 * H],
    [s, 1, L],
    [s, 3, 3 * L],
    [s, 6, 6 * L],
    [s, 12, 12 * L],
    [t, 1, N],
    [t, 2, 2 * N],
    [r, 1, se],
    [n, 1, ye],
    [n, 3, 3 * ye],
    [e, 1, oe]
  ];
  function f(c, m, M) {
    const v = m < c;
    v && ([c, m] = [m, c]);
    const F = M && typeof M.range == "function" ? M : g(c, m, M), O = F ? F.range(c, +m + 1) : [];
    return v ? O.reverse() : O;
  }
  function g(c, m, M) {
    const v = Math.abs(m - c) / M, F = vn(([, , _]) => _).right(i, v);
    if (F === i.length) return e.every(Ue(c / oe, m / oe, M));
    if (F === 0) return G.every(Math.max(Ue(c, m, M), 1));
    const [O, V] = i[v / i[F - 1][2] < i[F][2] / v ? F - 1 : F];
    return O.every(V);
  }
  return [f, g];
}
const [Or, Ir] = Oe(I, Ne, me, Le, ke, xe), [pn, Hn] = Oe(b, he, K, j, le, fe);
function ce(e) {
  if (0 <= e.y && e.y < 100) {
    var n = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return n.setFullYear(e.y), n;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ie(e) {
  if (0 <= e.y && e.y < 100) {
    var n = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return n.setUTCFullYear(e.y), n;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function z(e, n, r) {
  return { y: e, m: n, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Wn(e) {
  var n = e.dateTime, r = e.date, t = e.time, s = e.periods, o = e.days, i = e.shortDays, f = e.months, g = e.shortMonths, c = J(s), m = X(s), M = J(o), v = X(o), F = J(i), O = X(i), V = J(f), _ = X(f), ee = J(g), ne = X(g), W = {
    a: Be,
    A: Ge,
    b: $e,
    B: Ee,
    c: null,
    d: Fe,
    e: Fe,
    f: $n,
    g: cr,
    G: sr,
    H: jn,
    I: Bn,
    j: Gn,
    L: Ie,
    m: En,
    M: Kn,
    p: Ke,
    q: en,
    Q: He,
    s: We,
    S: er,
    u: nr,
    U: rr,
    V: tr,
    w: ur,
    W: or,
    x: null,
    X: null,
    y: ar,
    Y: ir,
    Z: fr,
    "%": pe
  }, x = {
    a: nn,
    A: rn,
    b: tn,
    B: un,
    c: null,
    d: Ye,
    e: Ye,
    f: hr,
    g: Fr,
    G: pr,
    H: lr,
    I: gr,
    j: mr,
    L: Ze,
    m: Tr,
    M: yr,
    p: on,
    q: an,
    Q: He,
    s: We,
    S: Mr,
    u: Ur,
    U: Cr,
    V: Dr,
    w: vr,
    W: wr,
    x: null,
    X: null,
    y: Sr,
    Y: Yr,
    Z: Hr,
    "%": pe
  }, re = {
    a: Qe,
    A: Ve,
    b: _e,
    B: ze,
    c: Je,
    d: we,
    e: we,
    f: _n,
    g: ve,
    G: De,
    H: Se,
    I: Se,
    j: Rn,
    L: Vn,
    m: qn,
    M: Pn,
    p: Pe,
    q: dn,
    Q: Jn,
    s: Xn,
    S: Qn,
    u: bn,
    U: On,
    V: In,
    w: Nn,
    W: An,
    x: Xe,
    X: je,
    y: ve,
    Y: De,
    Z: Zn,
    "%": zn
  };
  W.x = l(r, W), W.X = l(t, W), W.c = l(n, W), x.x = l(r, x), x.X = l(t, x), x.c = l(n, x);
  function l(a, h) {
    return function(T) {
      var u = [], S = -1, U = 0, Y = a.length, p, A, Te;
      for (T instanceof Date || (T = /* @__PURE__ */ new Date(+T)); ++S < Y; )
        a.charCodeAt(S) === 37 && (u.push(a.slice(U, S)), (A = Ce[p = a.charAt(++S)]) != null ? p = a.charAt(++S) : A = p === "e" ? " " : "0", (Te = h[p]) && (p = Te(T, A)), u.push(p), U = S + 1);
      return u.push(a.slice(U, S)), u.join("");
    };
  }
  function w(a, h) {
    return function(T) {
      var u = z(1900, void 0, 1), S = B(u, a, T += "", 0), U, Y;
      if (S != T.length) return null;
      if ("Q" in u) return new Date(u.Q);
      if ("s" in u) return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
      if (h && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
        if (u.V < 1 || u.V > 53) return null;
        "w" in u || (u.w = 1), "Z" in u ? (U = ie(z(u.y, 0, 1)), Y = U.getUTCDay(), U = Y > 4 || Y === 0 ? E.ceil(U) : E(U), U = ge.offset(U, (u.V - 1) * 7), u.y = U.getUTCFullYear(), u.m = U.getUTCMonth(), u.d = U.getUTCDate() + (u.w + 6) % 7) : (U = ce(z(u.y, 0, 1)), Y = U.getDay(), U = Y > 4 || Y === 0 ? $.ceil(U) : $(U), U = j.offset(U, (u.V - 1) * 7), u.y = U.getFullYear(), u.m = U.getMonth(), u.d = U.getDate() + (u.w + 6) % 7);
      } else ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), Y = "Z" in u ? ie(z(u.y, 0, 1)).getUTCDay() : ce(z(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (Y + 5) % 7 : u.w + u.U * 7 - (Y + 6) % 7);
      return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, ie(u)) : ce(u);
    };
  }
  function B(a, h, T, u) {
    for (var S = 0, U = h.length, Y = T.length, p, A; S < U; ) {
      if (u >= Y) return -1;
      if (p = h.charCodeAt(S++), p === 37) {
        if (p = h.charAt(S++), A = re[p in Ce ? h.charAt(S++) : p], !A || (u = A(a, T, u)) < 0) return -1;
      } else if (p != T.charCodeAt(u++))
        return -1;
    }
    return u;
  }
  function Pe(a, h, T) {
    var u = c.exec(h.slice(T));
    return u ? (a.p = m.get(u[0].toLowerCase()), T + u[0].length) : -1;
  }
  function Qe(a, h, T) {
    var u = F.exec(h.slice(T));
    return u ? (a.w = O.get(u[0].toLowerCase()), T + u[0].length) : -1;
  }
  function Ve(a, h, T) {
    var u = M.exec(h.slice(T));
    return u ? (a.w = v.get(u[0].toLowerCase()), T + u[0].length) : -1;
  }
  function _e(a, h, T) {
    var u = ee.exec(h.slice(T));
    return u ? (a.m = ne.get(u[0].toLowerCase()), T + u[0].length) : -1;
  }
  function ze(a, h, T) {
    var u = V.exec(h.slice(T));
    return u ? (a.m = _.get(u[0].toLowerCase()), T + u[0].length) : -1;
  }
  function Je(a, h, T) {
    return B(a, n, h, T);
  }
  function Xe(a, h, T) {
    return B(a, r, h, T);
  }
  function je(a, h, T) {
    return B(a, t, h, T);
  }
  function Be(a) {
    return i[a.getDay()];
  }
  function Ge(a) {
    return o[a.getDay()];
  }
  function $e(a) {
    return g[a.getMonth()];
  }
  function Ee(a) {
    return f[a.getMonth()];
  }
  function Ke(a) {
    return s[+(a.getHours() >= 12)];
  }
  function en(a) {
    return 1 + ~~(a.getMonth() / 3);
  }
  function nn(a) {
    return i[a.getUTCDay()];
  }
  function rn(a) {
    return o[a.getUTCDay()];
  }
  function tn(a) {
    return g[a.getUTCMonth()];
  }
  function un(a) {
    return f[a.getUTCMonth()];
  }
  function on(a) {
    return s[+(a.getUTCHours() >= 12)];
  }
  function an(a) {
    return 1 + ~~(a.getUTCMonth() / 3);
  }
  return {
    format: function(a) {
      var h = l(a += "", W);
      return h.toString = function() {
        return a;
      }, h;
    },
    parse: function(a) {
      var h = w(a += "", !1);
      return h.toString = function() {
        return a;
      }, h;
    },
    utcFormat: function(a) {
      var h = l(a += "", x);
      return h.toString = function() {
        return a;
      }, h;
    },
    utcParse: function(a) {
      var h = w(a += "", !0);
      return h.toString = function() {
        return a;
      }, h;
    }
  };
}
var Ce = { "-": "", _: " ", 0: "0" }, D = /^\s*\d+/, xn = /^%/, kn = /[\\^$*+?|[\]().{}]/g;
function y(e, n, r) {
  var t = e < 0 ? "-" : "", s = (t ? -e : e) + "", o = s.length;
  return t + (o < r ? new Array(r - o + 1).join(n) + s : s);
}
function Ln(e) {
  return e.replace(kn, "\\$&");
}
function J(e) {
  return new RegExp("^(?:" + e.map(Ln).join("|") + ")", "i");
}
function X(e) {
  return new Map(e.map((n, r) => [n.toLowerCase(), r]));
}
function Nn(e, n, r) {
  var t = D.exec(n.slice(r, r + 1));
  return t ? (e.w = +t[0], r + t[0].length) : -1;
}
function bn(e, n, r) {
  var t = D.exec(n.slice(r, r + 1));
  return t ? (e.u = +t[0], r + t[0].length) : -1;
}
function On(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.U = +t[0], r + t[0].length) : -1;
}
function In(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.V = +t[0], r + t[0].length) : -1;
}
function An(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.W = +t[0], r + t[0].length) : -1;
}
function De(e, n, r) {
  var t = D.exec(n.slice(r, r + 4));
  return t ? (e.y = +t[0], r + t[0].length) : -1;
}
function ve(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.y = +t[0] + (+t[0] > 68 ? 1900 : 2e3), r + t[0].length) : -1;
}
function Zn(e, n, r) {
  var t = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(r, r + 6));
  return t ? (e.Z = t[1] ? 0 : -(t[2] + (t[3] || "00")), r + t[0].length) : -1;
}
function dn(e, n, r) {
  var t = D.exec(n.slice(r, r + 1));
  return t ? (e.q = t[0] * 3 - 3, r + t[0].length) : -1;
}
function qn(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.m = t[0] - 1, r + t[0].length) : -1;
}
function we(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.d = +t[0], r + t[0].length) : -1;
}
function Rn(e, n, r) {
  var t = D.exec(n.slice(r, r + 3));
  return t ? (e.m = 0, e.d = +t[0], r + t[0].length) : -1;
}
function Se(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.H = +t[0], r + t[0].length) : -1;
}
function Pn(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.M = +t[0], r + t[0].length) : -1;
}
function Qn(e, n, r) {
  var t = D.exec(n.slice(r, r + 2));
  return t ? (e.S = +t[0], r + t[0].length) : -1;
}
function Vn(e, n, r) {
  var t = D.exec(n.slice(r, r + 3));
  return t ? (e.L = +t[0], r + t[0].length) : -1;
}
function _n(e, n, r) {
  var t = D.exec(n.slice(r, r + 6));
  return t ? (e.L = Math.floor(t[0] / 1e3), r + t[0].length) : -1;
}
function zn(e, n, r) {
  var t = xn.exec(n.slice(r, r + 1));
  return t ? r + t[0].length : -1;
}
function Jn(e, n, r) {
  var t = D.exec(n.slice(r));
  return t ? (e.Q = +t[0], r + t[0].length) : -1;
}
function Xn(e, n, r) {
  var t = D.exec(n.slice(r));
  return t ? (e.s = +t[0], r + t[0].length) : -1;
}
function Fe(e, n) {
  return y(e.getDate(), n, 2);
}
function jn(e, n) {
  return y(e.getHours(), n, 2);
}
function Bn(e, n) {
  return y(e.getHours() % 12 || 12, n, 2);
}
function Gn(e, n) {
  return y(1 + j.count(b(e), e), n, 3);
}
function Ie(e, n) {
  return y(e.getMilliseconds(), n, 3);
}
function $n(e, n) {
  return Ie(e, n) + "000";
}
function En(e, n) {
  return y(e.getMonth() + 1, n, 2);
}
function Kn(e, n) {
  return y(e.getMinutes(), n, 2);
}
function er(e, n) {
  return y(e.getSeconds(), n, 2);
}
function nr(e) {
  var n = e.getDay();
  return n === 0 ? 7 : n;
}
function rr(e, n) {
  return y(K.count(b(e) - 1, e), n, 2);
}
function Ae(e) {
  var n = e.getDay();
  return n >= 4 || n === 0 ? P(e) : P.ceil(e);
}
function tr(e, n) {
  return e = Ae(e), y(P.count(b(e), e) + (b(e).getDay() === 4), n, 2);
}
function ur(e) {
  return e.getDay();
}
function or(e, n) {
  return y($.count(b(e) - 1, e), n, 2);
}
function ar(e, n) {
  return y(e.getFullYear() % 100, n, 2);
}
function cr(e, n) {
  return e = Ae(e), y(e.getFullYear() % 100, n, 2);
}
function ir(e, n) {
  return y(e.getFullYear() % 1e4, n, 4);
}
function sr(e, n) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? P(e) : P.ceil(e), y(e.getFullYear() % 1e4, n, 4);
}
function fr(e) {
  var n = e.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + y(n / 60 | 0, "0", 2) + y(n % 60, "0", 2);
}
function Ye(e, n) {
  return y(e.getUTCDate(), n, 2);
}
function lr(e, n) {
  return y(e.getUTCHours(), n, 2);
}
function gr(e, n) {
  return y(e.getUTCHours() % 12 || 12, n, 2);
}
function mr(e, n) {
  return y(1 + ge.count(I(e), e), n, 3);
}
function Ze(e, n) {
  return y(e.getUTCMilliseconds(), n, 3);
}
function hr(e, n) {
  return Ze(e, n) + "000";
}
function Tr(e, n) {
  return y(e.getUTCMonth() + 1, n, 2);
}
function yr(e, n) {
  return y(e.getUTCMinutes(), n, 2);
}
function Mr(e, n) {
  return y(e.getUTCSeconds(), n, 2);
}
function Ur(e) {
  var n = e.getUTCDay();
  return n === 0 ? 7 : n;
}
function Cr(e, n) {
  return y(me.count(I(e) - 1, e), n, 2);
}
function de(e) {
  var n = e.getUTCDay();
  return n >= 4 || n === 0 ? Q(e) : Q.ceil(e);
}
function Dr(e, n) {
  return e = de(e), y(Q.count(I(e), e) + (I(e).getUTCDay() === 4), n, 2);
}
function vr(e) {
  return e.getUTCDay();
}
function wr(e, n) {
  return y(E.count(I(e) - 1, e), n, 2);
}
function Sr(e, n) {
  return y(e.getUTCFullYear() % 100, n, 2);
}
function Fr(e, n) {
  return e = de(e), y(e.getUTCFullYear() % 100, n, 2);
}
function Yr(e, n) {
  return y(e.getUTCFullYear() % 1e4, n, 4);
}
function pr(e, n) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Q(e) : Q.ceil(e), y(e.getUTCFullYear() % 1e4, n, 4);
}
function Hr() {
  return "+0000";
}
function pe() {
  return "%";
}
function He(e) {
  return +e;
}
function We(e) {
  return Math.floor(+e / 1e3);
}
var q, qe, Wr;
xr({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function xr(e) {
  return q = Wn(e), qe = q.format, q.parse, Wr = q.utcFormat, q.utcParse, q;
}
function kr(e) {
  return new Date(e);
}
function Lr(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Re(e, n, r, t, s, o, i, f, g, c) {
  var m = cn(), M = m.invert, v = m.domain, F = c(".%L"), O = c(":%S"), V = c("%I:%M"), _ = c("%I %p"), ee = c("%a %d"), ne = c("%b %d"), W = c("%B"), x = c("%Y");
  function re(l) {
    return (g(l) < l ? F : f(l) < l ? O : i(l) < l ? V : o(l) < l ? _ : t(l) < l ? s(l) < l ? ee : ne : r(l) < l ? W : x)(l);
  }
  return m.invert = function(l) {
    return new Date(M(l));
  }, m.domain = function(l) {
    return arguments.length ? v(Array.from(l, Lr)) : v().map(kr);
  }, m.ticks = function(l) {
    var w = v();
    return e(w[0], w[w.length - 1], l ?? 10);
  }, m.tickFormat = function(l, w) {
    return w == null ? re : c(w);
  }, m.nice = function(l) {
    var w = v();
    return (!l || typeof l.range != "function") && (l = n(w[0], w[w.length - 1], l ?? 10)), l ? v(ln(w, l)) : m;
  }, m.copy = function() {
    return sn(m, Re(e, n, r, t, s, o, i, f, g, c));
  }, m;
}
function Ar() {
  return fn.apply(Re(pn, Hn, b, he, K, j, le, fe, R, qe).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
export {
  qe as a,
  he as b,
  K as c,
  Tn as d,
  hn as e,
  P as f,
  mn as g,
  gn as h,
  $ as i,
  j,
  le as k,
  fe as l,
  G as m,
  ln as n,
  Re as o,
  xe as p,
  ke as q,
  ge as r,
  R as s,
  Ar as t,
  Wr as u,
  me as v,
  Ne as w,
  I as x,
  Ir as y,
  Or as z
};
