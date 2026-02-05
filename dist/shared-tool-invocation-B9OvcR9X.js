import { i as Hr, h as J, r as q, f as ee, R as E, k as cg, l as lg, j as fe, m as ut } from "./embed-DsRsaDzn.js";
import { w as kh, n as Lh, a as oe, M as ac, S as fg, T as pg, l as Fh, t as $n, b as Ce, p as Yu, s as rn, c as Wh, F as dg, G as vg, H as hg, I as yg, J as mg, K as gg, L as bg, N as Og, O as wg, k as xg, P as Sg, Q as Ag } from "./string-psbzTrf6.js";
import { b as Zu, p as sr } from "./band-DjWPbnU2.js";
import { d as nn, n as Pg, e as _g, i as ic, f as Ju, g as yt, h as oc, a as uc, j as Hc, k as We, c as Eg, m as Rn, o as zh, l as Qu, p as Tg } from "./linear-C3c8AqSq.js";
import { i as Je, a as Ge } from "./init-DxzjmxYy.js";
import { m as Uc, a as Xc, p as jg, q as Ig, u as Mg, s as Cg, r as $g, v as Rg, w as Dg, x as qg, y as Ng, z as Bg, A as kg, B as Lg, t as Fg } from "./time-DMfaDBp2.js";
import { f as Wg, b as zg } from "./defaultLocale-BgPVtth8.js";
import { i as Kg, o as Gg } from "./ordinal-e--sRYe8.js";
var sa, Vc;
function me() {
  if (Vc) return sa;
  Vc = 1;
  var t = Array.isArray;
  return sa = t, sa;
}
var ca, Yc;
function Kh() {
  if (Yc) return ca;
  Yc = 1;
  var t = typeof Hr == "object" && Hr && Hr.Object === Object && Hr;
  return ca = t, ca;
}
var la, Zc;
function ke() {
  if (Zc) return la;
  Zc = 1;
  var t = Kh(), e = typeof self == "object" && self && self.Object === Object && self, r = t || e || Function("return this")();
  return la = r, la;
}
var fa, Jc;
function Lr() {
  if (Jc) return fa;
  Jc = 1;
  var t = ke(), e = t.Symbol;
  return fa = e, fa;
}
var pa, Qc;
function Hg() {
  if (Qc) return pa;
  Qc = 1;
  var t = Lr(), e = Object.prototype, r = e.hasOwnProperty, n = e.toString, a = t ? t.toStringTag : void 0;
  function i(o) {
    var u = r.call(o, a), s = o[a];
    try {
      o[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(o);
    return c && (u ? o[a] = s : delete o[a]), f;
  }
  return pa = i, pa;
}
var da, el;
function Ug() {
  if (el) return da;
  el = 1;
  var t = Object.prototype, e = t.toString;
  function r(n) {
    return e.call(n);
  }
  return da = r, da;
}
var va, tl;
function He() {
  if (tl) return va;
  tl = 1;
  var t = Lr(), e = Hg(), r = Ug(), n = "[object Null]", a = "[object Undefined]", i = t ? t.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? a : n : i && i in Object(u) ? e(u) : r(u);
  }
  return va = o, va;
}
var ha, rl;
function Ue() {
  if (rl) return ha;
  rl = 1;
  function t(e) {
    return e != null && typeof e == "object";
  }
  return ha = t, ha;
}
var ya, nl;
function zt() {
  if (nl) return ya;
  nl = 1;
  var t = He(), e = Ue(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || e(a) && t(a) == r;
  }
  return ya = n, ya;
}
var ma, al;
function sc() {
  if (al) return ma;
  al = 1;
  var t = me(), e = zt(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (t(i))
      return !1;
    var u = typeof i;
    return u == "number" || u == "symbol" || u == "boolean" || i == null || e(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return ma = a, ma;
}
var ga, il;
function Qe() {
  if (il) return ga;
  il = 1;
  function t(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return ga = t, ga;
}
var ba, ol;
function cc() {
  if (ol) return ba;
  ol = 1;
  var t = He(), e = Qe(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(u) {
    if (!e(u))
      return !1;
    var s = t(u);
    return s == n || s == a || s == r || s == i;
  }
  return ba = o, ba;
}
var Oa, ul;
function Xg() {
  if (ul) return Oa;
  ul = 1;
  var t = ke(), e = t["__core-js_shared__"];
  return Oa = e, Oa;
}
var wa, sl;
function Vg() {
  if (sl) return wa;
  sl = 1;
  var t = Xg(), e = (function() {
    var n = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!e && e in n;
  }
  return wa = r, wa;
}
var xa, cl;
function Gh() {
  if (cl) return xa;
  cl = 1;
  var t = Function.prototype, e = t.toString;
  function r(n) {
    if (n != null) {
      try {
        return e.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return xa = r, xa;
}
var Sa, ll;
function Yg() {
  if (ll) return Sa;
  ll = 1;
  var t = cc(), e = Vg(), r = Qe(), n = Gh(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, s = o.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + s.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(p) {
    if (!r(p) || e(p))
      return !1;
    var v = t(p) ? f : i;
    return v.test(n(p));
  }
  return Sa = l, Sa;
}
var Aa, fl;
function Zg() {
  if (fl) return Aa;
  fl = 1;
  function t(e, r) {
    return e?.[r];
  }
  return Aa = t, Aa;
}
var Pa, pl;
function mt() {
  if (pl) return Pa;
  pl = 1;
  var t = Yg(), e = Zg();
  function r(n, a) {
    var i = e(n, a);
    return t(i) ? i : void 0;
  }
  return Pa = r, Pa;
}
var _a, dl;
function Dn() {
  if (dl) return _a;
  dl = 1;
  var t = mt(), e = t(Object, "create");
  return _a = e, _a;
}
var Ea, vl;
function Jg() {
  if (vl) return Ea;
  vl = 1;
  var t = Dn();
  function e() {
    this.__data__ = t ? t(null) : {}, this.size = 0;
  }
  return Ea = e, Ea;
}
var Ta, hl;
function Qg() {
  if (hl) return Ta;
  hl = 1;
  function t(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return Ta = t, Ta;
}
var ja, yl;
function eb() {
  if (yl) return ja;
  yl = 1;
  var t = Dn(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (t) {
      var u = o[i];
      return u === e ? void 0 : u;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return ja = a, ja;
}
var Ia, ml;
function tb() {
  if (ml) return Ia;
  ml = 1;
  var t = Dn(), e = Object.prototype, r = e.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return t ? i[a] !== void 0 : r.call(i, a);
  }
  return Ia = n, Ia;
}
var Ma, gl;
function rb() {
  if (gl) return Ma;
  gl = 1;
  var t = Dn(), e = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = t && a === void 0 ? e : a, this;
  }
  return Ma = r, Ma;
}
var Ca, bl;
function nb() {
  if (bl) return Ca;
  bl = 1;
  var t = Jg(), e = Qg(), r = eb(), n = tb(), a = rb();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Ca = i, Ca;
}
var $a, Ol;
function ab() {
  if (Ol) return $a;
  Ol = 1;
  function t() {
    this.__data__ = [], this.size = 0;
  }
  return $a = t, $a;
}
var Ra, wl;
function lc() {
  if (wl) return Ra;
  wl = 1;
  function t(e, r) {
    return e === r || e !== e && r !== r;
  }
  return Ra = t, Ra;
}
var Da, xl;
function qn() {
  if (xl) return Da;
  xl = 1;
  var t = lc();
  function e(r, n) {
    for (var a = r.length; a--; )
      if (t(r[a][0], n))
        return a;
    return -1;
  }
  return Da = e, Da;
}
var qa, Sl;
function ib() {
  if (Sl) return qa;
  Sl = 1;
  var t = qn(), e = Array.prototype, r = e.splice;
  function n(a) {
    var i = this.__data__, o = t(i, a);
    if (o < 0)
      return !1;
    var u = i.length - 1;
    return o == u ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return qa = n, qa;
}
var Na, Al;
function ob() {
  if (Al) return Na;
  Al = 1;
  var t = qn();
  function e(r) {
    var n = this.__data__, a = t(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return Na = e, Na;
}
var Ba, Pl;
function ub() {
  if (Pl) return Ba;
  Pl = 1;
  var t = qn();
  function e(r) {
    return t(this.__data__, r) > -1;
  }
  return Ba = e, Ba;
}
var ka, _l;
function sb() {
  if (_l) return ka;
  _l = 1;
  var t = qn();
  function e(r, n) {
    var a = this.__data__, i = t(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return ka = e, ka;
}
var La, El;
function Nn() {
  if (El) return La;
  El = 1;
  var t = ab(), e = ib(), r = ob(), n = ub(), a = sb();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, La = i, La;
}
var Fa, Tl;
function fc() {
  if (Tl) return Fa;
  Tl = 1;
  var t = mt(), e = ke(), r = t(e, "Map");
  return Fa = r, Fa;
}
var Wa, jl;
function cb() {
  if (jl) return Wa;
  jl = 1;
  var t = nb(), e = Nn(), r = fc();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new t(),
      map: new (r || e)(),
      string: new t()
    };
  }
  return Wa = n, Wa;
}
var za, Il;
function lb() {
  if (Il) return za;
  Il = 1;
  function t(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return za = t, za;
}
var Ka, Ml;
function Bn() {
  if (Ml) return Ka;
  Ml = 1;
  var t = lb();
  function e(r, n) {
    var a = r.__data__;
    return t(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Ka = e, Ka;
}
var Ga, Cl;
function fb() {
  if (Cl) return Ga;
  Cl = 1;
  var t = Bn();
  function e(r) {
    var n = t(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Ga = e, Ga;
}
var Ha, $l;
function pb() {
  if ($l) return Ha;
  $l = 1;
  var t = Bn();
  function e(r) {
    return t(this, r).get(r);
  }
  return Ha = e, Ha;
}
var Ua, Rl;
function db() {
  if (Rl) return Ua;
  Rl = 1;
  var t = Bn();
  function e(r) {
    return t(this, r).has(r);
  }
  return Ua = e, Ua;
}
var Xa, Dl;
function vb() {
  if (Dl) return Xa;
  Dl = 1;
  var t = Bn();
  function e(r, n) {
    var a = t(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Xa = e, Xa;
}
var Va, ql;
function pc() {
  if (ql) return Va;
  ql = 1;
  var t = cb(), e = fb(), r = pb(), n = db(), a = vb();
  function i(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = t, i.prototype.delete = e, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Va = i, Va;
}
var Ya, Nl;
function Hh() {
  if (Nl) return Ya;
  Nl = 1;
  var t = pc(), e = "Expected a function";
  function r(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(e);
    var i = function() {
      var o = arguments, u = a ? a.apply(this, o) : o[0], s = i.cache;
      if (s.has(u))
        return s.get(u);
      var c = n.apply(this, o);
      return i.cache = s.set(u, c) || s, c;
    };
    return i.cache = new (r.Cache || t)(), i;
  }
  return r.Cache = t, Ya = r, Ya;
}
var Za, Bl;
function hb() {
  if (Bl) return Za;
  Bl = 1;
  var t = Hh(), e = 500;
  function r(n) {
    var a = t(n, function(o) {
      return i.size === e && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return Za = r, Za;
}
var Ja, kl;
function yb() {
  if (kl) return Ja;
  kl = 1;
  var t = hb(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = t(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(e, function(o, u, s, c) {
      i.push(s ? c.replace(r, "$1") : u || o);
    }), i;
  });
  return Ja = n, Ja;
}
var Qa, Ll;
function dc() {
  if (Ll) return Qa;
  Ll = 1;
  function t(e, r) {
    for (var n = -1, a = e == null ? 0 : e.length, i = Array(a); ++n < a; )
      i[n] = r(e[n], n, e);
    return i;
  }
  return Qa = t, Qa;
}
var ei, Fl;
function mb() {
  if (Fl) return ei;
  Fl = 1;
  var t = Lr(), e = dc(), r = me(), n = zt(), a = t ? t.prototype : void 0, i = a ? a.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return e(u, o) + "";
    if (n(u))
      return i ? i.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return ei = o, ei;
}
var ti, Wl;
function Uh() {
  if (Wl) return ti;
  Wl = 1;
  var t = mb();
  function e(r) {
    return r == null ? "" : t(r);
  }
  return ti = e, ti;
}
var ri, zl;
function Xh() {
  if (zl) return ri;
  zl = 1;
  var t = me(), e = sc(), r = yb(), n = Uh();
  function a(i, o) {
    return t(i) ? i : e(i, o) ? [i] : r(n(i));
  }
  return ri = a, ri;
}
var ni, Kl;
function kn() {
  if (Kl) return ni;
  Kl = 1;
  var t = zt();
  function e(r) {
    if (typeof r == "string" || t(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ni = e, ni;
}
var ai, Gl;
function vc() {
  if (Gl) return ai;
  Gl = 1;
  var t = Xh(), e = kn();
  function r(n, a) {
    a = t(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[e(a[i++])];
    return i && i == o ? n : void 0;
  }
  return ai = r, ai;
}
var ii, Hl;
function Vh() {
  if (Hl) return ii;
  Hl = 1;
  var t = vc();
  function e(r, n, a) {
    var i = r == null ? void 0 : t(r, n);
    return i === void 0 ? a : i;
  }
  return ii = e, ii;
}
var gb = Vh();
const qe = /* @__PURE__ */ J(gb);
var oi, Ul;
function bb() {
  if (Ul) return oi;
  Ul = 1;
  function t(e) {
    return e == null;
  }
  return oi = t, oi;
}
var Ob = bb();
const H = /* @__PURE__ */ J(Ob);
var ui, Xl;
function wb() {
  if (Xl) return ui;
  Xl = 1;
  var t = He(), e = me(), r = Ue(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !e(i) && r(i) && t(i) == n;
  }
  return ui = a, ui;
}
var xb = wb();
const dt = /* @__PURE__ */ J(xb);
var Sb = cc();
const U = /* @__PURE__ */ J(Sb);
var Ab = Qe();
const Kt = /* @__PURE__ */ J(Ab);
var si = { exports: {} }, X = {};
var Vl;
function Pb() {
  if (Vl) return X;
  Vl = 1;
  var t = /* @__PURE__ */ Symbol.for("react.element"), e = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.server_context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.offscreen"), m;
  m = /* @__PURE__ */ Symbol.for("react.module.reference");
  function h(d) {
    if (typeof d == "object" && d !== null) {
      var g = d.$$typeof;
      switch (g) {
        case t:
          switch (d = d.type, d) {
            case r:
            case a:
            case n:
            case c:
            case f:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case u:
                case o:
                case s:
                case p:
                case l:
                case i:
                  return d;
                default:
                  return g;
              }
          }
        case e:
          return g;
      }
    }
  }
  return X.ContextConsumer = o, X.ContextProvider = i, X.Element = t, X.ForwardRef = s, X.Fragment = r, X.Lazy = p, X.Memo = l, X.Portal = e, X.Profiler = a, X.StrictMode = n, X.Suspense = c, X.SuspenseList = f, X.isAsyncMode = function() {
    return !1;
  }, X.isConcurrentMode = function() {
    return !1;
  }, X.isContextConsumer = function(d) {
    return h(d) === o;
  }, X.isContextProvider = function(d) {
    return h(d) === i;
  }, X.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, X.isForwardRef = function(d) {
    return h(d) === s;
  }, X.isFragment = function(d) {
    return h(d) === r;
  }, X.isLazy = function(d) {
    return h(d) === p;
  }, X.isMemo = function(d) {
    return h(d) === l;
  }, X.isPortal = function(d) {
    return h(d) === e;
  }, X.isProfiler = function(d) {
    return h(d) === a;
  }, X.isStrictMode = function(d) {
    return h(d) === n;
  }, X.isSuspense = function(d) {
    return h(d) === c;
  }, X.isSuspenseList = function(d) {
    return h(d) === f;
  }, X.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === a || d === n || d === c || d === f || d === v || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === l || d.$$typeof === i || d.$$typeof === o || d.$$typeof === s || d.$$typeof === m || d.getModuleId !== void 0);
  }, X.typeOf = h, X;
}
var Yl;
function _b() {
  return Yl || (Yl = 1, si.exports = Pb()), si.exports;
}
var Eb = _b(), ci, Zl;
function Yh() {
  if (Zl) return ci;
  Zl = 1;
  var t = He(), e = Ue(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || e(a) && t(a) == r;
  }
  return ci = n, ci;
}
var li, Jl;
function Tb() {
  if (Jl) return li;
  Jl = 1;
  var t = Yh();
  function e(r) {
    return t(r) && r != +r;
  }
  return li = e, li;
}
var jb = Tb();
const Fr = /* @__PURE__ */ J(jb);
var Ib = Yh();
const Mb = /* @__PURE__ */ J(Ib);
var Re = function(e) {
  return e === 0 ? 0 : e > 0 ? 1 : -1;
}, ct = function(e) {
  return dt(e) && e.indexOf("%") === e.length - 1;
}, B = function(e) {
  return Mb(e) && !Fr(e);
}, Cb = function(e) {
  return H(e);
}, ce = function(e) {
  return B(e) || dt(e);
}, $b = 0, Ln = function(e) {
  var r = ++$b;
  return "".concat(e || "").concat(r);
}, je = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!B(e) && !dt(e))
    return n;
  var i;
  if (ct(e)) {
    var o = e.indexOf("%");
    i = r * parseFloat(e.slice(0, o)) / 100;
  } else
    i = +e;
  return Fr(i) && (i = n), a && i > r && (i = r), i;
}, Ve = function(e) {
  if (!e)
    return null;
  var r = Object.keys(e);
  return r && r.length ? e[r[0]] : null;
}, Rb = function(e) {
  if (!Array.isArray(e))
    return !1;
  for (var r = e.length, n = {}, a = 0; a < r; a++)
    if (!n[e[a]])
      n[e[a]] = !0;
    else
      return !0;
  return !1;
}, xt = function(e, r) {
  return B(e) && B(r) ? function(n) {
    return e + n * (r - e);
  } : function() {
    return r;
  };
};
function an(t, e, r) {
  return !t || !t.length ? null : t.find(function(n) {
    return n && (typeof e == "function" ? e(n) : qe(n, e)) === r;
  });
}
var Db = function(e, r) {
  return B(e) && B(r) ? e - r : dt(e) && dt(r) ? e.localeCompare(r) : e instanceof Date && r instanceof Date ? e.getTime() - r.getTime() : String(e).localeCompare(String(r));
};
function es(t, e) {
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r]))
      return !1;
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
      return !1;
  return !0;
}
function ts(t) {
  "@babel/helpers - typeof";
  return ts = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ts(t);
}
var qb = ["viewBox", "children"], Nb = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Ql = ["points", "pathLength"], fi = {
  svg: qb,
  polygon: Ql,
  polyline: Ql
}, hc = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], on = function(e, r) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var n = e;
  if (/* @__PURE__ */ q.isValidElement(e) && (n = e.props), !Kt(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    hc.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, Bb = function(e, r, n) {
  return function(a) {
    return e(r, n, a), null;
  };
}, rs = function(e, r, n) {
  if (!Kt(e) || ts(e) !== "object")
    return null;
  var a = null;
  return Object.keys(e).forEach(function(i) {
    var o = e[i];
    hc.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = Bb(o, r, n));
  }), a;
}, kb = ["children"], Lb = ["children"];
function ef(t, e) {
  if (t == null) return {};
  var r = Fb(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Fb(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function ns(t) {
  "@babel/helpers - typeof";
  return ns = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ns(t);
}
var tf = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, ze = function(e) {
  return typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "";
}, rf = null, pi = null, yc = function t(e) {
  if (e === rf && Array.isArray(pi))
    return pi;
  var r = [];
  return q.Children.forEach(e, function(n) {
    H(n) || (Eb.isFragment(n) ? r = r.concat(t(n.props.children)) : r.push(n));
  }), pi = r, rf = e, r;
};
function Ie(t, e) {
  var r = [], n = [];
  return Array.isArray(e) ? n = e.map(function(a) {
    return ze(a);
  }) : n = [ze(e)], yc(t).forEach(function(a) {
    var i = qe(a, "type.displayName") || qe(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function be(t, e) {
  var r = Ie(t, e);
  return r && r[0];
}
var nf = function(e) {
  if (!e || !e.props)
    return !1;
  var r = e.props, n = r.width, a = r.height;
  return !(!B(n) || n <= 0 || !B(a) || a <= 0);
}, Wb = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], zb = function(e) {
  return e && e.type && dt(e.type) && Wb.indexOf(e.type) >= 0;
}, Ej = function(e) {
  return e && ns(e) === "object" && "clipDot" in e;
}, Kb = function(e, r, n, a) {
  var i, o = (i = fi?.[a]) !== null && i !== void 0 ? i : [];
  return r.startsWith("data-") || !U(e) && (a && o.includes(r) || Nb.includes(r)) || n && hc.includes(r);
}, te = function(e, r, n) {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var a = e;
  if (/* @__PURE__ */ q.isValidElement(e) && (a = e.props), !Kt(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var u;
    Kb((u = a) === null || u === void 0 ? void 0 : u[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, as = function t(e, r) {
  if (e === r)
    return !0;
  var n = q.Children.count(e);
  if (n !== q.Children.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return af(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = e[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!t(i, o))
        return !1;
    } else if (!af(i, o))
      return !1;
  }
  return !0;
}, af = function(e, r) {
  if (H(e) && H(r))
    return !0;
  if (!H(e) && !H(r)) {
    var n = e.props || {}, a = n.children, i = ef(n, kb), o = r.props || {}, u = o.children, s = ef(o, Lb);
    return a && u ? es(i, s) && as(a, u) : !a && !u ? es(i, s) : !1;
  }
  return !1;
}, of = function(e, r) {
  var n = [], a = {};
  return yc(e).forEach(function(i, o) {
    if (zb(i))
      n.push(i);
    else if (i) {
      var u = ze(i.type), s = r[u] || {}, c = s.handler, f = s.once;
      if (c && (!f || !a[u])) {
        var l = c(i, u, o);
        n.push(l), a[u] = !0;
      }
    }
  }), n;
}, Gb = function(e) {
  var r = e && e.type;
  return r && tf[r] ? tf[r] : null;
}, Hb = function(e, r) {
  return yc(r).indexOf(e);
}, Ub = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function is() {
  return is = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, is.apply(this, arguments);
}
function Xb(t, e) {
  if (t == null) return {};
  var r = Vb(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Vb(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function os(t) {
  var e = t.children, r = t.width, n = t.height, a = t.viewBox, i = t.className, o = t.style, u = t.title, s = t.desc, c = Xb(t, Ub), f = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = ee("recharts-surface", i);
  return /* @__PURE__ */ E.createElement("svg", is({}, te(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ E.createElement("title", null, u), /* @__PURE__ */ E.createElement("desc", null, s), e);
}
var Yb = ["children", "className"];
function us() {
  return us = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, us.apply(this, arguments);
}
function Zb(t, e) {
  if (t == null) return {};
  var r = Jb(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Jb(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var he = /* @__PURE__ */ E.forwardRef(function(t, e) {
  var r = t.children, n = t.className, a = Zb(t, Yb), i = ee("recharts-layer", n);
  return /* @__PURE__ */ E.createElement("g", us({
    className: i
  }, te(a, !0), {
    ref: e
  }), r);
}), lt = function(e, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
}, di, uf;
function Qb() {
  if (uf) return di;
  uf = 1;
  function t(e, r, n) {
    var a = -1, i = e.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = e[a + r];
    return o;
  }
  return di = t, di;
}
var vi, sf;
function e0() {
  if (sf) return vi;
  sf = 1;
  var t = Qb();
  function e(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : t(r, n, a);
  }
  return vi = e, vi;
}
var hi, cf;
function Zh() {
  if (cf) return hi;
  cf = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = e + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", u = RegExp("[" + o + t + a + i + "]");
  function s(c) {
    return u.test(c);
  }
  return hi = s, hi;
}
var yi, lf;
function t0() {
  if (lf) return yi;
  lf = 1;
  function t(e) {
    return e.split("");
  }
  return yi = t, yi;
}
var mi, ff;
function r0() {
  if (ff) return mi;
  ff = 1;
  var t = "\\ud800-\\udfff", e = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = e + r + n, i = "\\ufe0e\\ufe0f", o = "[" + t + "]", u = "[" + a + "]", s = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + u + "|" + s + ")", f = "[^" + t + "]", l = "(?:\\ud83c[\\udde6-\\uddff]){2}", p = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", m = c + "?", h = "[" + i + "]?", d = "(?:" + v + "(?:" + [f, l, p].join("|") + ")" + h + m + ")*", g = h + m + d, O = "(?:" + [f + u + "?", u, l, p, o].join("|") + ")", w = RegExp(s + "(?=" + s + ")|" + O + g, "g");
  function S(y) {
    return y.match(w) || [];
  }
  return mi = S, mi;
}
var gi, pf;
function n0() {
  if (pf) return gi;
  pf = 1;
  var t = t0(), e = Zh(), r = r0();
  function n(a) {
    return e(a) ? r(a) : t(a);
  }
  return gi = n, gi;
}
var bi, df;
function a0() {
  if (df) return bi;
  df = 1;
  var t = e0(), e = Zh(), r = n0(), n = Uh();
  function a(i) {
    return function(o) {
      o = n(o);
      var u = e(o) ? r(o) : void 0, s = u ? u[0] : o.charAt(0), c = u ? t(u, 1).join("") : o.slice(1);
      return s[i]() + c;
    };
  }
  return bi = a, bi;
}
var Oi, vf;
function i0() {
  if (vf) return Oi;
  vf = 1;
  var t = a0(), e = t("toUpperCase");
  return Oi = e, Oi;
}
var o0 = i0();
const Fn = /* @__PURE__ */ J(o0);
function Ur(t, e, r) {
  var n = null, a = oe(!0), i = null, o = ac, u = null, s = kh(c);
  t = typeof t == "function" ? t : t === void 0 ? fg : oe(+t), e = typeof e == "function" ? e : e === void 0 ? oe(0) : oe(+e), r = typeof r == "function" ? r : r === void 0 ? pg : oe(+r);
  function c(l) {
    var p, v, m, h = (l = Lh(l)).length, d, g = !1, O, w = new Array(h), S = new Array(h);
    for (i == null && (u = o(O = s())), p = 0; p <= h; ++p) {
      if (!(p < h && a(d = l[p], p, l)) === g)
        if (g = !g)
          v = p, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), m = p - 1; m >= v; --m)
            u.point(w[m], S[m]);
          u.lineEnd(), u.areaEnd();
        }
      g && (w[p] = +t(d, p, l), S[p] = +e(d, p, l), u.point(n ? +n(d, p, l) : w[p], r ? +r(d, p, l) : S[p]));
    }
    if (O) return u = null, O + "" || null;
  }
  function f() {
    return Fh().defined(a).curve(o).context(i);
  }
  return c.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : oe(+l), n = null, c) : t;
  }, c.x0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : oe(+l), c) : t;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : oe(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : oe(+l), r = null, c) : e;
  }, c.y0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : oe(+l), c) : e;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : oe(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(t).y(e);
  }, c.lineY1 = function() {
    return f().x(t).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(e);
  }, c.defined = function(l) {
    return arguments.length ? (a = typeof l == "function" ? l : oe(!!l), c) : a;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, i != null && (u = o(i)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? i = u = null : u = o(i = l), c) : i;
  }, c;
}
const mc = {
  draw(t, e) {
    const r = Ce(e / Yu);
    t.moveTo(r, 0), t.arc(0, 0, r, 0, $n);
  }
}, u0 = {
  draw(t, e) {
    const r = Ce(e / 5) / 2;
    t.moveTo(-3 * r, -r), t.lineTo(-r, -r), t.lineTo(-r, -3 * r), t.lineTo(r, -3 * r), t.lineTo(r, -r), t.lineTo(3 * r, -r), t.lineTo(3 * r, r), t.lineTo(r, r), t.lineTo(r, 3 * r), t.lineTo(-r, 3 * r), t.lineTo(-r, r), t.lineTo(-3 * r, r), t.closePath();
  }
}, Jh = Ce(1 / 3), s0 = Jh * 2, c0 = {
  draw(t, e) {
    const r = Ce(e / s0), n = r * Jh;
    t.moveTo(0, -r), t.lineTo(n, 0), t.lineTo(0, r), t.lineTo(-n, 0), t.closePath();
  }
}, l0 = {
  draw(t, e) {
    const r = Ce(e), n = -r / 2;
    t.rect(n, n, r, r);
  }
}, f0 = 0.8908130915292852, Qh = rn(Yu / 10) / rn(7 * Yu / 10), p0 = rn($n / 10) * Qh, d0 = -Wh($n / 10) * Qh, v0 = {
  draw(t, e) {
    const r = Ce(e * f0), n = p0 * r, a = d0 * r;
    t.moveTo(0, -r), t.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = $n * i / 5, u = Wh(o), s = rn(o);
      t.lineTo(s * r, -u * r), t.lineTo(u * n - s * a, s * n + u * a);
    }
    t.closePath();
  }
}, wi = Ce(3), h0 = {
  draw(t, e) {
    const r = -Ce(e / (wi * 3));
    t.moveTo(0, r * 2), t.lineTo(-wi * r, -r), t.lineTo(wi * r, -r), t.closePath();
  }
}, xe = -0.5, Se = Ce(3) / 2, ss = 1 / Ce(12), y0 = (ss / 2 + 1) * 3, m0 = {
  draw(t, e) {
    const r = Ce(e / y0), n = r / 2, a = r * ss, i = n, o = r * ss + r, u = -i, s = o;
    t.moveTo(n, a), t.lineTo(i, o), t.lineTo(u, s), t.lineTo(xe * n - Se * a, Se * n + xe * a), t.lineTo(xe * i - Se * o, Se * i + xe * o), t.lineTo(xe * u - Se * s, Se * u + xe * s), t.lineTo(xe * n + Se * a, xe * a - Se * n), t.lineTo(xe * i + Se * o, xe * o - Se * i), t.lineTo(xe * u + Se * s, xe * s - Se * u), t.closePath();
  }
};
function g0(t, e) {
  let r = null, n = kh(a);
  t = typeof t == "function" ? t : oe(t || mc), e = typeof e == "function" ? e : oe(e === void 0 ? 64 : +e);
  function a() {
    let i;
    if (r || (r = i = n()), t.apply(this, arguments).draw(r, +e.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : oe(i), a) : t;
  }, a.size = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : oe(+i), a) : e;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function Tt(t, e) {
  if ((o = t.length) > 1)
    for (var r = 1, n, a, i = t[e[0]], o, u = i.length; r < o; ++r)
      for (a = i, i = t[e[r]], n = 0; n < u; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function cs(t) {
  for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
  return r;
}
function b0(t, e) {
  return t[e];
}
function O0(t) {
  const e = [];
  return e.key = t, e;
}
function w0() {
  var t = oe([]), e = cs, r = Tt, n = b0;
  function a(i) {
    var o = Array.from(t.apply(this, arguments), O0), u, s = o.length, c = -1, f;
    for (const l of i)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(l, o[u].key, c, i)]).data = l;
    for (u = 0, f = Lh(e(o)); u < s; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : oe(Array.from(i)), a) : t;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : oe(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (e = i == null ? cs : typeof i == "function" ? i : oe(Array.from(i)), a) : e;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Tt, a) : r;
  }, a;
}
function x0(t, e) {
  if ((n = t.length) > 0) {
    for (var r, n, a = 0, i = t[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += t[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) t[r][a][1] /= o;
    }
    Tt(t, e);
  }
}
function S0(t, e) {
  if ((a = t.length) > 0) {
    for (var r = 0, n = t[e[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, u = 0; o < a; ++o) u += t[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Tt(t, e);
  }
}
function A0(t, e) {
  if (!(!((o = t.length) > 0) || !((i = (a = t[e[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var f = t[e[u]], l = f[n][1] || 0, p = f[n - 1][1] || 0, v = (l - p) / 2, m = 0; m < u; ++m) {
          var h = t[e[m]], d = h[n][1] || 0, g = h[n - 1][1] || 0;
          v += d - g;
        }
        s += l, c += v * l;
      }
      a[n - 1][1] += a[n - 1][0] = r, s && (r -= c / s);
    }
    a[n - 1][1] += a[n - 1][0] = r, Tt(t, e);
  }
}
function fr(t) {
  "@babel/helpers - typeof";
  return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fr(t);
}
var P0 = ["type", "size", "sizeType"];
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, ls.apply(this, arguments);
}
function hf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hf(Object(r), !0).forEach(function(n) {
      _0(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : hf(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function _0(t, e, r) {
  return e = E0(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function E0(t) {
  var e = T0(t, "string");
  return fr(e) == "symbol" ? e : e + "";
}
function T0(t, e) {
  if (fr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function j0(t, e) {
  if (t == null) return {};
  var r = I0(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function I0(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var ey = {
  symbolCircle: mc,
  symbolCross: u0,
  symbolDiamond: c0,
  symbolSquare: l0,
  symbolStar: v0,
  symbolTriangle: h0,
  symbolWye: m0
}, M0 = Math.PI / 180, C0 = function(e) {
  var r = "symbol".concat(Fn(e));
  return ey[r] || mc;
}, $0 = function(e, r, n) {
  if (r === "area")
    return e;
  switch (n) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var a = 18 * M0;
      return 1.25 * e * e * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, R0 = function(e, r) {
  ey["symbol".concat(Fn(e))] = r;
}, gc = function(e) {
  var r = e.type, n = r === void 0 ? "circle" : r, a = e.size, i = a === void 0 ? 64 : a, o = e.sizeType, u = o === void 0 ? "area" : o, s = j0(e, P0), c = yf(yf({}, s), {}, {
    type: n,
    size: i,
    sizeType: u
  }), f = function() {
    var d = C0(n), g = g0().type(d).size($0(i, u, n));
    return g();
  }, l = c.className, p = c.cx, v = c.cy, m = te(c, !0);
  return p === +p && v === +v && i === +i ? /* @__PURE__ */ E.createElement("path", ls({}, m, {
    className: ee("recharts-symbols", l),
    transform: "translate(".concat(p, ", ").concat(v, ")"),
    d: f()
  })) : null;
};
gc.registerSymbol = R0;
function jt(t) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jt(t);
}
function fs() {
  return fs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, fs.apply(this, arguments);
}
function mf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D0(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mf(Object(r), !0).forEach(function(n) {
      pr(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : mf(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function q0(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function N0(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ry(n.key), n);
  }
}
function B0(t, e, r) {
  return e && N0(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function k0(t, e, r) {
  return e = un(e), L0(t, ty() ? Reflect.construct(e, r || [], un(t).constructor) : e.apply(t, r));
}
function L0(t, e) {
  if (e && (jt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return F0(t);
}
function F0(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ty() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ty = function() {
    return !!t;
  })();
}
function un(t) {
  return un = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, un(t);
}
function W0(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ps(t, e);
}
function ps(t, e) {
  return ps = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ps(t, e);
}
function pr(t, e, r) {
  return e = ry(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function ry(t) {
  var e = z0(t, "string");
  return jt(e) == "symbol" ? e : e + "";
}
function z0(t, e) {
  if (jt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (jt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Ae = 32, bc = /* @__PURE__ */ (function(t) {
  function e() {
    return q0(this, e), k0(this, e, arguments);
  }
  return W0(e, t), B0(e, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Ae / 2, o = Ae / 6, u = Ae / 3, s = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: Ae,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(i, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(i, `
            H`).concat(Ae, "M").concat(2 * u, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(Ae / 8, "h").concat(Ae, "v").concat(Ae * 3 / 4, "h").concat(-Ae, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(n.legendIcon)) {
          var c = D0({}, n);
          return delete c.legendIcon, /* @__PURE__ */ E.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ E.createElement(gc, {
          fill: s,
          cx: i,
          cy: i,
          size: Ae,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, a = this.props, i = a.payload, o = a.iconSize, u = a.layout, s = a.formatter, c = a.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Ae,
        height: Ae
      }, l = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(v, m) {
        var h = v.formatter || s, d = ee(pr(pr({
          "recharts-legend-item": !0
        }, "legend-item-".concat(m), !0), "inactive", v.inactive));
        if (v.type === "none")
          return null;
        var g = U(v.value) ? null : v.value;
        lt(
          !U(v.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = v.inactive ? c : v.color;
        return /* @__PURE__ */ E.createElement("li", fs({
          className: d,
          style: l,
          key: "legend-item-".concat(m)
        }, rs(n.props, v, m)), /* @__PURE__ */ E.createElement(os, {
          width: o,
          height: o,
          viewBox: f,
          style: p
        }, n.renderIcon(v)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, h ? h(g, v, m) : g));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.payload, i = n.layout, o = n.align;
      if (!a || !a.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: i === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
})(q.PureComponent);
pr(bc, "displayName", "Legend");
pr(bc, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var xi, gf;
function K0() {
  if (gf) return xi;
  gf = 1;
  var t = Nn();
  function e() {
    this.__data__ = new t(), this.size = 0;
  }
  return xi = e, xi;
}
var Si, bf;
function G0() {
  if (bf) return Si;
  bf = 1;
  function t(e) {
    var r = this.__data__, n = r.delete(e);
    return this.size = r.size, n;
  }
  return Si = t, Si;
}
var Ai, Of;
function H0() {
  if (Of) return Ai;
  Of = 1;
  function t(e) {
    return this.__data__.get(e);
  }
  return Ai = t, Ai;
}
var Pi, wf;
function U0() {
  if (wf) return Pi;
  wf = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return Pi = t, Pi;
}
var _i, xf;
function X0() {
  if (xf) return _i;
  xf = 1;
  var t = Nn(), e = fc(), r = pc(), n = 200;
  function a(i, o) {
    var u = this.__data__;
    if (u instanceof t) {
      var s = u.__data__;
      if (!e || s.length < n - 1)
        return s.push([i, o]), this.size = ++u.size, this;
      u = this.__data__ = new r(s);
    }
    return u.set(i, o), this.size = u.size, this;
  }
  return _i = a, _i;
}
var Ei, Sf;
function ny() {
  if (Sf) return Ei;
  Sf = 1;
  var t = Nn(), e = K0(), r = G0(), n = H0(), a = U0(), i = X0();
  function o(u) {
    var s = this.__data__ = new t(u);
    this.size = s.size;
  }
  return o.prototype.clear = e, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, Ei = o, Ei;
}
var Ti, Af;
function V0() {
  if (Af) return Ti;
  Af = 1;
  var t = "__lodash_hash_undefined__";
  function e(r) {
    return this.__data__.set(r, t), this;
  }
  return Ti = e, Ti;
}
var ji, Pf;
function Y0() {
  if (Pf) return ji;
  Pf = 1;
  function t(e) {
    return this.__data__.has(e);
  }
  return ji = t, ji;
}
var Ii, _f;
function ay() {
  if (_f) return Ii;
  _f = 1;
  var t = pc(), e = V0(), r = Y0();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new t(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = e, n.prototype.has = r, Ii = n, Ii;
}
var Mi, Ef;
function iy() {
  if (Ef) return Mi;
  Ef = 1;
  function t(e, r) {
    for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
      if (r(e[n], n, e))
        return !0;
    return !1;
  }
  return Mi = t, Mi;
}
var Ci, Tf;
function oy() {
  if (Tf) return Ci;
  Tf = 1;
  function t(e, r) {
    return e.has(r);
  }
  return Ci = t, Ci;
}
var $i, jf;
function uy() {
  if (jf) return $i;
  jf = 1;
  var t = ay(), e = iy(), r = oy(), n = 1, a = 2;
  function i(o, u, s, c, f, l) {
    var p = s & n, v = o.length, m = u.length;
    if (v != m && !(p && m > v))
      return !1;
    var h = l.get(o), d = l.get(u);
    if (h && d)
      return h == u && d == o;
    var g = -1, O = !0, w = s & a ? new t() : void 0;
    for (l.set(o, u), l.set(u, o); ++g < v; ) {
      var S = o[g], y = u[g];
      if (c)
        var b = p ? c(y, S, g, u, o, l) : c(S, y, g, o, u, l);
      if (b !== void 0) {
        if (b)
          continue;
        O = !1;
        break;
      }
      if (w) {
        if (!e(u, function(x, A) {
          if (!r(w, A) && (S === x || f(S, x, s, c, l)))
            return w.push(A);
        })) {
          O = !1;
          break;
        }
      } else if (!(S === y || f(S, y, s, c, l))) {
        O = !1;
        break;
      }
    }
    return l.delete(o), l.delete(u), O;
  }
  return $i = i, $i;
}
var Ri, If;
function Z0() {
  if (If) return Ri;
  If = 1;
  var t = ke(), e = t.Uint8Array;
  return Ri = e, Ri;
}
var Di, Mf;
function J0() {
  if (Mf) return Di;
  Mf = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return Di = t, Di;
}
var qi, Cf;
function Oc() {
  if (Cf) return qi;
  Cf = 1;
  function t(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return qi = t, qi;
}
var Ni, $f;
function Q0() {
  if ($f) return Ni;
  $f = 1;
  var t = Lr(), e = Z0(), r = lc(), n = uy(), a = J0(), i = Oc(), o = 1, u = 2, s = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", p = "[object Number]", v = "[object RegExp]", m = "[object Set]", h = "[object String]", d = "[object Symbol]", g = "[object ArrayBuffer]", O = "[object DataView]", w = t ? t.prototype : void 0, S = w ? w.valueOf : void 0;
  function y(b, x, A, P, I, _, T) {
    switch (A) {
      case O:
        if (b.byteLength != x.byteLength || b.byteOffset != x.byteOffset)
          return !1;
        b = b.buffer, x = x.buffer;
      case g:
        return !(b.byteLength != x.byteLength || !_(new e(b), new e(x)));
      case s:
      case c:
      case p:
        return r(+b, +x);
      case f:
        return b.name == x.name && b.message == x.message;
      case v:
      case h:
        return b == x + "";
      case l:
        var M = a;
      case m:
        var $ = P & o;
        if (M || (M = i), b.size != x.size && !$)
          return !1;
        var C = T.get(b);
        if (C)
          return C == x;
        P |= u, T.set(b, x);
        var R = n(M(b), M(x), P, I, _, T);
        return T.delete(b), R;
      case d:
        if (S)
          return S.call(b) == S.call(x);
    }
    return !1;
  }
  return Ni = y, Ni;
}
var Bi, Rf;
function sy() {
  if (Rf) return Bi;
  Rf = 1;
  function t(e, r) {
    for (var n = -1, a = r.length, i = e.length; ++n < a; )
      e[i + n] = r[n];
    return e;
  }
  return Bi = t, Bi;
}
var ki, Df;
function eO() {
  if (Df) return ki;
  Df = 1;
  var t = sy(), e = me();
  function r(n, a, i) {
    var o = a(n);
    return e(n) ? o : t(o, i(n));
  }
  return ki = r, ki;
}
var Li, qf;
function tO() {
  if (qf) return Li;
  qf = 1;
  function t(e, r) {
    for (var n = -1, a = e == null ? 0 : e.length, i = 0, o = []; ++n < a; ) {
      var u = e[n];
      r(u, n, e) && (o[i++] = u);
    }
    return o;
  }
  return Li = t, Li;
}
var Fi, Nf;
function rO() {
  if (Nf) return Fi;
  Nf = 1;
  function t() {
    return [];
  }
  return Fi = t, Fi;
}
var Wi, Bf;
function nO() {
  if (Bf) return Wi;
  Bf = 1;
  var t = tO(), e = rO(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), t(a(o), function(u) {
      return n.call(o, u);
    }));
  } : e;
  return Wi = i, Wi;
}
var zi, kf;
function aO() {
  if (kf) return zi;
  kf = 1;
  function t(e, r) {
    for (var n = -1, a = Array(e); ++n < e; )
      a[n] = r(n);
    return a;
  }
  return zi = t, zi;
}
var Ki, Lf;
function iO() {
  if (Lf) return Ki;
  Lf = 1;
  var t = He(), e = Ue(), r = "[object Arguments]";
  function n(a) {
    return e(a) && t(a) == r;
  }
  return Ki = n, Ki;
}
var Gi, Ff;
function wc() {
  if (Ff) return Gi;
  Ff = 1;
  var t = iO(), e = Ue(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = t(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? t : function(o) {
    return e(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return Gi = i, Gi;
}
var ar = { exports: {} }, Hi, Wf;
function oO() {
  if (Wf) return Hi;
  Wf = 1;
  function t() {
    return !1;
  }
  return Hi = t, Hi;
}
ar.exports;
var zf;
function cy() {
  return zf || (zf = 1, (function(t, e) {
    var r = ke(), n = oO(), a = e && !e.nodeType && e, i = a && !0 && t && !t.nodeType && t, o = i && i.exports === a, u = o ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, c = s || n;
    t.exports = c;
  })(ar, ar.exports)), ar.exports;
}
var Ui, Kf;
function xc() {
  if (Kf) return Ui;
  Kf = 1;
  var t = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? t, !!a && (i == "number" || i != "symbol" && e.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Ui = r, Ui;
}
var Xi, Gf;
function Sc() {
  if (Gf) return Xi;
  Gf = 1;
  var t = 9007199254740991;
  function e(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= t;
  }
  return Xi = e, Xi;
}
var Vi, Hf;
function uO() {
  if (Hf) return Vi;
  Hf = 1;
  var t = He(), e = Sc(), r = Ue(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", u = "[object Error]", s = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", p = "[object RegExp]", v = "[object Set]", m = "[object String]", h = "[object WeakMap]", d = "[object ArrayBuffer]", g = "[object DataView]", O = "[object Float32Array]", w = "[object Float64Array]", S = "[object Int8Array]", y = "[object Int16Array]", b = "[object Int32Array]", x = "[object Uint8Array]", A = "[object Uint8ClampedArray]", P = "[object Uint16Array]", I = "[object Uint32Array]", _ = {};
  _[O] = _[w] = _[S] = _[y] = _[b] = _[x] = _[A] = _[P] = _[I] = !0, _[n] = _[a] = _[d] = _[i] = _[g] = _[o] = _[u] = _[s] = _[c] = _[f] = _[l] = _[p] = _[v] = _[m] = _[h] = !1;
  function T(M) {
    return r(M) && e(M.length) && !!_[t(M)];
  }
  return Vi = T, Vi;
}
var Yi, Uf;
function ly() {
  if (Uf) return Yi;
  Uf = 1;
  function t(e) {
    return function(r) {
      return e(r);
    };
  }
  return Yi = t, Yi;
}
var ir = { exports: {} };
ir.exports;
var Xf;
function sO() {
  return Xf || (Xf = 1, (function(t, e) {
    var r = Kh(), n = e && !e.nodeType && e, a = n && !0 && t && !t.nodeType && t, i = a && a.exports === n, o = i && r.process, u = (function() {
      try {
        var s = a && a.require && a.require("util").types;
        return s || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    t.exports = u;
  })(ir, ir.exports)), ir.exports;
}
var Zi, Vf;
function fy() {
  if (Vf) return Zi;
  Vf = 1;
  var t = uO(), e = ly(), r = sO(), n = r && r.isTypedArray, a = n ? e(n) : t;
  return Zi = a, Zi;
}
var Ji, Yf;
function cO() {
  if (Yf) return Ji;
  Yf = 1;
  var t = aO(), e = wc(), r = me(), n = cy(), a = xc(), i = fy(), o = Object.prototype, u = o.hasOwnProperty;
  function s(c, f) {
    var l = r(c), p = !l && e(c), v = !l && !p && n(c), m = !l && !p && !v && i(c), h = l || p || v || m, d = h ? t(c.length, String) : [], g = d.length;
    for (var O in c)
      (f || u.call(c, O)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      m && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
      a(O, g))) && d.push(O);
    return d;
  }
  return Ji = s, Ji;
}
var Qi, Zf;
function lO() {
  if (Zf) return Qi;
  Zf = 1;
  var t = Object.prototype;
  function e(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || t;
    return r === a;
  }
  return Qi = e, Qi;
}
var eo, Jf;
function py() {
  if (Jf) return eo;
  Jf = 1;
  function t(e, r) {
    return function(n) {
      return e(r(n));
    };
  }
  return eo = t, eo;
}
var to, Qf;
function fO() {
  if (Qf) return to;
  Qf = 1;
  var t = py(), e = t(Object.keys, Object);
  return to = e, to;
}
var ro, ep;
function pO() {
  if (ep) return ro;
  ep = 1;
  var t = lO(), e = fO(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!t(i))
      return e(i);
    var o = [];
    for (var u in Object(i))
      n.call(i, u) && u != "constructor" && o.push(u);
    return o;
  }
  return ro = a, ro;
}
var no, tp;
function Wr() {
  if (tp) return no;
  tp = 1;
  var t = cc(), e = Sc();
  function r(n) {
    return n != null && e(n.length) && !t(n);
  }
  return no = r, no;
}
var ao, rp;
function Wn() {
  if (rp) return ao;
  rp = 1;
  var t = cO(), e = pO(), r = Wr();
  function n(a) {
    return r(a) ? t(a) : e(a);
  }
  return ao = n, ao;
}
var io, np;
function dO() {
  if (np) return io;
  np = 1;
  var t = eO(), e = nO(), r = Wn();
  function n(a) {
    return t(a, r, e);
  }
  return io = n, io;
}
var oo, ap;
function vO() {
  if (ap) return oo;
  ap = 1;
  var t = dO(), e = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, o, u, s, c, f) {
    var l = u & e, p = t(i), v = p.length, m = t(o), h = m.length;
    if (v != h && !l)
      return !1;
    for (var d = v; d--; ) {
      var g = p[d];
      if (!(l ? g in o : n.call(o, g)))
        return !1;
    }
    var O = f.get(i), w = f.get(o);
    if (O && w)
      return O == o && w == i;
    var S = !0;
    f.set(i, o), f.set(o, i);
    for (var y = l; ++d < v; ) {
      g = p[d];
      var b = i[g], x = o[g];
      if (s)
        var A = l ? s(x, b, g, o, i, f) : s(b, x, g, i, o, f);
      if (!(A === void 0 ? b === x || c(b, x, u, s, f) : A)) {
        S = !1;
        break;
      }
      y || (y = g == "constructor");
    }
    if (S && !y) {
      var P = i.constructor, I = o.constructor;
      P != I && "constructor" in i && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof I == "function" && I instanceof I) && (S = !1);
    }
    return f.delete(i), f.delete(o), S;
  }
  return oo = a, oo;
}
var uo, ip;
function hO() {
  if (ip) return uo;
  ip = 1;
  var t = mt(), e = ke(), r = t(e, "DataView");
  return uo = r, uo;
}
var so, op;
function yO() {
  if (op) return so;
  op = 1;
  var t = mt(), e = ke(), r = t(e, "Promise");
  return so = r, so;
}
var co, up;
function dy() {
  if (up) return co;
  up = 1;
  var t = mt(), e = ke(), r = t(e, "Set");
  return co = r, co;
}
var lo, sp;
function mO() {
  if (sp) return lo;
  sp = 1;
  var t = mt(), e = ke(), r = t(e, "WeakMap");
  return lo = r, lo;
}
var fo, cp;
function gO() {
  if (cp) return fo;
  cp = 1;
  var t = hO(), e = fc(), r = yO(), n = dy(), a = mO(), i = He(), o = Gh(), u = "[object Map]", s = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", p = "[object DataView]", v = o(t), m = o(e), h = o(r), d = o(n), g = o(a), O = i;
  return (t && O(new t(new ArrayBuffer(1))) != p || e && O(new e()) != u || r && O(r.resolve()) != c || n && O(new n()) != f || a && O(new a()) != l) && (O = function(w) {
    var S = i(w), y = S == s ? w.constructor : void 0, b = y ? o(y) : "";
    if (b)
      switch (b) {
        case v:
          return p;
        case m:
          return u;
        case h:
          return c;
        case d:
          return f;
        case g:
          return l;
      }
    return S;
  }), fo = O, fo;
}
var po, lp;
function bO() {
  if (lp) return po;
  lp = 1;
  var t = ny(), e = uy(), r = Q0(), n = vO(), a = gO(), i = me(), o = cy(), u = fy(), s = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", p = Object.prototype, v = p.hasOwnProperty;
  function m(h, d, g, O, w, S) {
    var y = i(h), b = i(d), x = y ? f : a(h), A = b ? f : a(d);
    x = x == c ? l : x, A = A == c ? l : A;
    var P = x == l, I = A == l, _ = x == A;
    if (_ && o(h)) {
      if (!o(d))
        return !1;
      y = !0, P = !1;
    }
    if (_ && !P)
      return S || (S = new t()), y || u(h) ? e(h, d, g, O, w, S) : r(h, d, x, g, O, w, S);
    if (!(g & s)) {
      var T = P && v.call(h, "__wrapped__"), M = I && v.call(d, "__wrapped__");
      if (T || M) {
        var $ = T ? h.value() : h, C = M ? d.value() : d;
        return S || (S = new t()), w($, C, g, O, S);
      }
    }
    return _ ? (S || (S = new t()), n(h, d, g, O, w, S)) : !1;
  }
  return po = m, po;
}
var vo, fp;
function Ac() {
  if (fp) return vo;
  fp = 1;
  var t = bO(), e = Ue();
  function r(n, a, i, o, u) {
    return n === a ? !0 : n == null || a == null || !e(n) && !e(a) ? n !== n && a !== a : t(n, a, i, o, r, u);
  }
  return vo = r, vo;
}
var ho, pp;
function OO() {
  if (pp) return ho;
  pp = 1;
  var t = ny(), e = Ac(), r = 1, n = 2;
  function a(i, o, u, s) {
    var c = u.length, f = c, l = !s;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var p = u[c];
      if (l && p[2] ? p[1] !== i[p[0]] : !(p[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      p = u[c];
      var v = p[0], m = i[v], h = p[1];
      if (l && p[2]) {
        if (m === void 0 && !(v in i))
          return !1;
      } else {
        var d = new t();
        if (s)
          var g = s(m, h, v, i, o, d);
        if (!(g === void 0 ? e(h, m, r | n, s, d) : g))
          return !1;
      }
    }
    return !0;
  }
  return ho = a, ho;
}
var yo, dp;
function vy() {
  if (dp) return yo;
  dp = 1;
  var t = Qe();
  function e(r) {
    return r === r && !t(r);
  }
  return yo = e, yo;
}
var mo, vp;
function wO() {
  if (vp) return mo;
  vp = 1;
  var t = vy(), e = Wn();
  function r(n) {
    for (var a = e(n), i = a.length; i--; ) {
      var o = a[i], u = n[o];
      a[i] = [o, u, t(u)];
    }
    return a;
  }
  return mo = r, mo;
}
var go, hp;
function hy() {
  if (hp) return go;
  hp = 1;
  function t(e, r) {
    return function(n) {
      return n == null ? !1 : n[e] === r && (r !== void 0 || e in Object(n));
    };
  }
  return go = t, go;
}
var bo, yp;
function xO() {
  if (yp) return bo;
  yp = 1;
  var t = OO(), e = wO(), r = hy();
  function n(a) {
    var i = e(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || t(o, a, i);
    };
  }
  return bo = n, bo;
}
var Oo, mp;
function SO() {
  if (mp) return Oo;
  mp = 1;
  function t(e, r) {
    return e != null && r in Object(e);
  }
  return Oo = t, Oo;
}
var wo, gp;
function AO() {
  if (gp) return wo;
  gp = 1;
  var t = Xh(), e = wc(), r = me(), n = xc(), a = Sc(), i = kn();
  function o(u, s, c) {
    s = t(s, u);
    for (var f = -1, l = s.length, p = !1; ++f < l; ) {
      var v = i(s[f]);
      if (!(p = u != null && c(u, v)))
        break;
      u = u[v];
    }
    return p || ++f != l ? p : (l = u == null ? 0 : u.length, !!l && a(l) && n(v, l) && (r(u) || e(u)));
  }
  return wo = o, wo;
}
var xo, bp;
function PO() {
  if (bp) return xo;
  bp = 1;
  var t = SO(), e = AO();
  function r(n, a) {
    return n != null && e(n, a, t);
  }
  return xo = r, xo;
}
var So, Op;
function _O() {
  if (Op) return So;
  Op = 1;
  var t = Ac(), e = Vh(), r = PO(), n = sc(), a = vy(), i = hy(), o = kn(), u = 1, s = 2;
  function c(f, l) {
    return n(f) && a(l) ? i(o(f), l) : function(p) {
      var v = e(p, f);
      return v === void 0 && v === l ? r(p, f) : t(l, v, u | s);
    };
  }
  return So = c, So;
}
var Ao, wp;
function Gt() {
  if (wp) return Ao;
  wp = 1;
  function t(e) {
    return e;
  }
  return Ao = t, Ao;
}
var Po, xp;
function EO() {
  if (xp) return Po;
  xp = 1;
  function t(e) {
    return function(r) {
      return r?.[e];
    };
  }
  return Po = t, Po;
}
var _o, Sp;
function TO() {
  if (Sp) return _o;
  Sp = 1;
  var t = vc();
  function e(r) {
    return function(n) {
      return t(n, r);
    };
  }
  return _o = e, _o;
}
var Eo, Ap;
function jO() {
  if (Ap) return Eo;
  Ap = 1;
  var t = EO(), e = TO(), r = sc(), n = kn();
  function a(i) {
    return r(i) ? t(n(i)) : e(i);
  }
  return Eo = a, Eo;
}
var To, Pp;
function et() {
  if (Pp) return To;
  Pp = 1;
  var t = xO(), e = _O(), r = Gt(), n = me(), a = jO();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? e(o[0], o[1]) : t(o) : a(o);
  }
  return To = i, To;
}
var jo, _p;
function yy() {
  if (_p) return jo;
  _p = 1;
  function t(e, r, n, a) {
    for (var i = e.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(e[o], o, e))
        return o;
    return -1;
  }
  return jo = t, jo;
}
var Io, Ep;
function IO() {
  if (Ep) return Io;
  Ep = 1;
  function t(e) {
    return e !== e;
  }
  return Io = t, Io;
}
var Mo, Tp;
function MO() {
  if (Tp) return Mo;
  Tp = 1;
  function t(e, r, n) {
    for (var a = n - 1, i = e.length; ++a < i; )
      if (e[a] === r)
        return a;
    return -1;
  }
  return Mo = t, Mo;
}
var Co, jp;
function CO() {
  if (jp) return Co;
  jp = 1;
  var t = yy(), e = IO(), r = MO();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : t(a, e, o);
  }
  return Co = n, Co;
}
var $o, Ip;
function $O() {
  if (Ip) return $o;
  Ip = 1;
  var t = CO();
  function e(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && t(r, n, 0) > -1;
  }
  return $o = e, $o;
}
var Ro, Mp;
function RO() {
  if (Mp) return Ro;
  Mp = 1;
  function t(e, r, n) {
    for (var a = -1, i = e == null ? 0 : e.length; ++a < i; )
      if (n(r, e[a]))
        return !0;
    return !1;
  }
  return Ro = t, Ro;
}
var Do, Cp;
function DO() {
  if (Cp) return Do;
  Cp = 1;
  function t() {
  }
  return Do = t, Do;
}
var qo, $p;
function qO() {
  if ($p) return qo;
  $p = 1;
  var t = dy(), e = DO(), r = Oc(), n = 1 / 0, a = t && 1 / r(new t([, -0]))[1] == n ? function(i) {
    return new t(i);
  } : e;
  return qo = a, qo;
}
var No, Rp;
function NO() {
  if (Rp) return No;
  Rp = 1;
  var t = ay(), e = $O(), r = RO(), n = oy(), a = qO(), i = Oc(), o = 200;
  function u(s, c, f) {
    var l = -1, p = e, v = s.length, m = !0, h = [], d = h;
    if (f)
      m = !1, p = r;
    else if (v >= o) {
      var g = c ? null : a(s);
      if (g)
        return i(g);
      m = !1, p = n, d = new t();
    } else
      d = c ? [] : h;
    e:
      for (; ++l < v; ) {
        var O = s[l], w = c ? c(O) : O;
        if (O = f || O !== 0 ? O : 0, m && w === w) {
          for (var S = d.length; S--; )
            if (d[S] === w)
              continue e;
          c && d.push(w), h.push(O);
        } else p(d, w, f) || (d !== h && d.push(w), h.push(O));
      }
    return h;
  }
  return No = u, No;
}
var Bo, Dp;
function BO() {
  if (Dp) return Bo;
  Dp = 1;
  var t = et(), e = NO();
  function r(n, a) {
    return n && n.length ? e(n, t(a, 2)) : [];
  }
  return Bo = r, Bo;
}
var kO = BO();
const qp = /* @__PURE__ */ J(kO);
function my(t, e, r) {
  return e === !0 ? qp(t, r) : U(e) ? qp(t, e) : t;
}
function It(t) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, It(t);
}
var LO = ["ref"];
function Np(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Np(Object(r), !0).forEach(function(n) {
      zn(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function FO(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Bp(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, by(n.key), n);
  }
}
function WO(t, e, r) {
  return e && Bp(t.prototype, e), r && Bp(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function zO(t, e, r) {
  return e = sn(e), KO(t, gy() ? Reflect.construct(e, r || [], sn(t).constructor) : e.apply(t, r));
}
function KO(t, e) {
  if (e && (It(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return GO(t);
}
function GO(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function gy() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gy = function() {
    return !!t;
  })();
}
function sn(t) {
  return sn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sn(t);
}
function HO(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ds(t, e);
}
function ds(t, e) {
  return ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ds(t, e);
}
function zn(t, e, r) {
  return e = by(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function by(t) {
  var e = UO(t, "string");
  return It(e) == "symbol" ? e : e + "";
}
function UO(t, e) {
  if (It(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (It(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function XO(t, e) {
  if (t == null) return {};
  var r = VO(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function VO(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function YO(t) {
  return t.value;
}
function ZO(t, e) {
  if (/* @__PURE__ */ E.isValidElement(t))
    return /* @__PURE__ */ E.cloneElement(t, e);
  if (typeof t == "function")
    return /* @__PURE__ */ E.createElement(t, e);
  e.ref;
  var r = XO(e, LO);
  return /* @__PURE__ */ E.createElement(bc, r);
}
var kp = 1, _t = /* @__PURE__ */ (function(t) {
  function e() {
    var r;
    FO(this, e);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = zO(this, e, [].concat(a)), zn(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return HO(e, t), WO(e, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, a = this.getBBox();
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > kp || Math.abs(a.height - this.lastBoundingBox.height) > kp) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Le({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, u = a.verticalAlign, s = a.margin, c = a.chartWidth, f = a.chartHeight, l, p;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var v = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - v.width) / 2
          };
        } else
          l = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var m = this.getBBoxSnapshot();
          p = {
            top: ((f || 0) - m.height) / 2
          };
        } else
          p = u === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return Le(Le({}, l), p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, u = a.height, s = a.wrapperStyle, c = a.payloadUniqBy, f = a.payload, l = Le(Le({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(v) {
          n.wrapperNode = v;
        }
      }, ZO(i, Le(Le({}, this.props), {}, {
        payload: my(f, c, YO)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = Le(Le({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && B(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
})(q.PureComponent);
zn(_t, "displayName", "Legend");
zn(_t, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var ko, Lp;
function JO() {
  if (Lp) return ko;
  Lp = 1;
  var t = Lr(), e = wc(), r = me(), n = t ? t.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || e(i) || !!(n && i && i[n]);
  }
  return ko = a, ko;
}
var Lo, Fp;
function Oy() {
  if (Fp) return Lo;
  Fp = 1;
  var t = sy(), e = JO();
  function r(n, a, i, o, u) {
    var s = -1, c = n.length;
    for (i || (i = e), u || (u = []); ++s < c; ) {
      var f = n[s];
      a > 0 && i(f) ? a > 1 ? r(f, a - 1, i, o, u) : t(u, f) : o || (u[u.length] = f);
    }
    return u;
  }
  return Lo = r, Lo;
}
var Fo, Wp;
function QO() {
  if (Wp) return Fo;
  Wp = 1;
  function t(e) {
    return function(r, n, a) {
      for (var i = -1, o = Object(r), u = a(r), s = u.length; s--; ) {
        var c = u[e ? s : ++i];
        if (n(o[c], c, o) === !1)
          break;
      }
      return r;
    };
  }
  return Fo = t, Fo;
}
var Wo, zp;
function ew() {
  if (zp) return Wo;
  zp = 1;
  var t = QO(), e = t();
  return Wo = e, Wo;
}
var zo, Kp;
function wy() {
  if (Kp) return zo;
  Kp = 1;
  var t = ew(), e = Wn();
  function r(n, a) {
    return n && t(n, a, e);
  }
  return zo = r, zo;
}
var Ko, Gp;
function tw() {
  if (Gp) return Ko;
  Gp = 1;
  var t = Wr();
  function e(r, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!t(a))
        return r(a, i);
      for (var o = a.length, u = n ? o : -1, s = Object(a); (n ? u-- : ++u < o) && i(s[u], u, s) !== !1; )
        ;
      return a;
    };
  }
  return Ko = e, Ko;
}
var Go, Hp;
function Pc() {
  if (Hp) return Go;
  Hp = 1;
  var t = wy(), e = tw(), r = e(t);
  return Go = r, Go;
}
var Ho, Up;
function xy() {
  if (Up) return Ho;
  Up = 1;
  var t = Pc(), e = Wr();
  function r(n, a) {
    var i = -1, o = e(n) ? Array(n.length) : [];
    return t(n, function(u, s, c) {
      o[++i] = a(u, s, c);
    }), o;
  }
  return Ho = r, Ho;
}
var Uo, Xp;
function rw() {
  if (Xp) return Uo;
  Xp = 1;
  function t(e, r) {
    var n = e.length;
    for (e.sort(r); n--; )
      e[n] = e[n].value;
    return e;
  }
  return Uo = t, Uo;
}
var Xo, Vp;
function nw() {
  if (Vp) return Xo;
  Vp = 1;
  var t = zt();
  function e(r, n) {
    if (r !== n) {
      var a = r !== void 0, i = r === null, o = r === r, u = t(r), s = n !== void 0, c = n === null, f = n === n, l = t(n);
      if (!c && !l && !u && r > n || u && s && f && !c && !l || i && s && f || !a && f || !o)
        return 1;
      if (!i && !u && !l && r < n || l && a && o && !i && !u || c && a && o || !s && o || !f)
        return -1;
    }
    return 0;
  }
  return Xo = e, Xo;
}
var Vo, Yp;
function aw() {
  if (Yp) return Vo;
  Yp = 1;
  var t = nw();
  function e(r, n, a) {
    for (var i = -1, o = r.criteria, u = n.criteria, s = o.length, c = a.length; ++i < s; ) {
      var f = t(o[i], u[i]);
      if (f) {
        if (i >= c)
          return f;
        var l = a[i];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Vo = e, Vo;
}
var Yo, Zp;
function iw() {
  if (Zp) return Yo;
  Zp = 1;
  var t = dc(), e = vc(), r = et(), n = xy(), a = rw(), i = ly(), o = aw(), u = Gt(), s = me();
  function c(f, l, p) {
    l.length ? l = t(l, function(h) {
      return s(h) ? function(d) {
        return e(d, h.length === 1 ? h[0] : h);
      } : h;
    }) : l = [u];
    var v = -1;
    l = t(l, i(r));
    var m = n(f, function(h, d, g) {
      var O = t(l, function(w) {
        return w(h);
      });
      return { criteria: O, index: ++v, value: h };
    });
    return a(m, function(h, d) {
      return o(h, d, p);
    });
  }
  return Yo = c, Yo;
}
var Zo, Jp;
function ow() {
  if (Jp) return Zo;
  Jp = 1;
  function t(e, r, n) {
    switch (n.length) {
      case 0:
        return e.call(r);
      case 1:
        return e.call(r, n[0]);
      case 2:
        return e.call(r, n[0], n[1]);
      case 3:
        return e.call(r, n[0], n[1], n[2]);
    }
    return e.apply(r, n);
  }
  return Zo = t, Zo;
}
var Jo, Qp;
function uw() {
  if (Qp) return Jo;
  Qp = 1;
  var t = ow(), e = Math.max;
  function r(n, a, i) {
    return a = e(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var o = arguments, u = -1, s = e(o.length - a, 0), c = Array(s); ++u < s; )
        c[u] = o[a + u];
      u = -1;
      for (var f = Array(a + 1); ++u < a; )
        f[u] = o[u];
      return f[a] = i(c), t(n, this, f);
    };
  }
  return Jo = r, Jo;
}
var Qo, ed;
function sw() {
  if (ed) return Qo;
  ed = 1;
  function t(e) {
    return function() {
      return e;
    };
  }
  return Qo = t, Qo;
}
var eu, td;
function Sy() {
  if (td) return eu;
  td = 1;
  var t = mt(), e = (function() {
    try {
      var r = t(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return eu = e, eu;
}
var tu, rd;
function cw() {
  if (rd) return tu;
  rd = 1;
  var t = sw(), e = Sy(), r = Gt(), n = e ? function(a, i) {
    return e(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: t(i),
      writable: !0
    });
  } : r;
  return tu = n, tu;
}
var ru, nd;
function lw() {
  if (nd) return ru;
  nd = 1;
  var t = 800, e = 16, r = Date.now;
  function n(a) {
    var i = 0, o = 0;
    return function() {
      var u = r(), s = e - (u - o);
      if (o = u, s > 0) {
        if (++i >= t)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return ru = n, ru;
}
var nu, ad;
function fw() {
  if (ad) return nu;
  ad = 1;
  var t = cw(), e = lw(), r = e(t);
  return nu = r, nu;
}
var au, id;
function pw() {
  if (id) return au;
  id = 1;
  var t = Gt(), e = uw(), r = fw();
  function n(a, i) {
    return r(e(a, i, t), a + "");
  }
  return au = n, au;
}
var iu, od;
function Kn() {
  if (od) return iu;
  od = 1;
  var t = lc(), e = Wr(), r = xc(), n = Qe();
  function a(i, o, u) {
    if (!n(u))
      return !1;
    var s = typeof o;
    return (s == "number" ? e(u) && r(o, u.length) : s == "string" && o in u) ? t(u[o], i) : !1;
  }
  return iu = a, iu;
}
var ou, ud;
function dw() {
  if (ud) return ou;
  ud = 1;
  var t = Oy(), e = iw(), r = pw(), n = Kn(), a = r(function(i, o) {
    if (i == null)
      return [];
    var u = o.length;
    return u > 1 && n(i, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), e(i, t(o, 1), []);
  });
  return ou = a, ou;
}
var vw = dw();
const _c = /* @__PURE__ */ J(vw);
function dr(t) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, dr(t);
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, vs.apply(this, arguments);
}
function hw(t, e) {
  return bw(t) || gw(t, e) || mw(t, e) || yw();
}
function yw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mw(t, e) {
  if (t) {
    if (typeof t == "string") return sd(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sd(t, e);
  }
}
function sd(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function gw(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function bw(t) {
  if (Array.isArray(t)) return t;
}
function cd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? cd(Object(r), !0).forEach(function(n) {
      Ow(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : cd(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ow(t, e, r) {
  return e = ww(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function ww(t) {
  var e = xw(t, "string");
  return dr(e) == "symbol" ? e : e + "";
}
function xw(t, e) {
  if (dr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Sw(t) {
  return Array.isArray(t) && ce(t[0]) && ce(t[1]) ? t.join(" ~ ") : t;
}
var Aw = function(e) {
  var r = e.separator, n = r === void 0 ? " : " : r, a = e.contentStyle, i = a === void 0 ? {} : a, o = e.itemStyle, u = o === void 0 ? {} : o, s = e.labelStyle, c = s === void 0 ? {} : s, f = e.payload, l = e.formatter, p = e.itemSorter, v = e.wrapperClassName, m = e.labelClassName, h = e.label, d = e.labelFormatter, g = e.accessibilityLayer, O = g === void 0 ? !1 : g, w = function() {
    if (f && f.length) {
      var T = {
        padding: 0,
        margin: 0
      }, M = (p ? _c(f, p) : f).map(function($, C) {
        if ($.type === "none")
          return null;
        var R = uu({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: $.color || "#000"
        }, u), D = $.formatter || l || Sw, N = $.value, F = $.name, W = N, K = F;
        if (D && W != null && K != null) {
          var k = D(N, F, $, C, f);
          if (Array.isArray(k)) {
            var G = hw(k, 2);
            W = G[0], K = G[1];
          } else
            W = k;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(C),
            style: R
          }, ce(K) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, K) : null, ce(K) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, W), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, $.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: T
      }, M);
    }
    return null;
  }, S = uu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), y = uu({
    margin: 0
  }, c), b = !H(h), x = b ? h : "", A = ee("recharts-default-tooltip", v), P = ee("recharts-tooltip-label", m);
  b && d && f !== void 0 && f !== null && (x = d(h, f));
  var I = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", vs({
    className: A,
    style: S
  }, I), /* @__PURE__ */ E.createElement("p", {
    className: P,
    style: y
  }, /* @__PURE__ */ E.isValidElement(x) ? x : "".concat(x)), w());
};
function vr(t) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, vr(t);
}
function Xr(t, e, r) {
  return e = Pw(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Pw(t) {
  var e = _w(t, "string");
  return vr(e) == "symbol" ? e : e + "";
}
function _w(t, e) {
  if (vr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Qt = "recharts-tooltip-wrapper", Ew = {
  visibility: "hidden"
};
function Tw(t) {
  var e = t.coordinate, r = t.translateX, n = t.translateY;
  return ee(Qt, Xr(Xr(Xr(Xr({}, "".concat(Qt, "-right"), B(r) && e && B(e.x) && r >= e.x), "".concat(Qt, "-left"), B(r) && e && B(e.x) && r < e.x), "".concat(Qt, "-bottom"), B(n) && e && B(e.y) && n >= e.y), "".concat(Qt, "-top"), B(n) && e && B(e.y) && n < e.y));
}
function ld(t) {
  var e = t.allowEscapeViewBox, r = t.coordinate, n = t.key, a = t.offsetTopLeft, i = t.position, o = t.reverseDirection, u = t.tooltipDimension, s = t.viewBox, c = t.viewBoxDimension;
  if (i && B(i[n]))
    return i[n];
  var f = r[n] - u - a, l = r[n] + a;
  if (e[n])
    return o[n] ? f : l;
  if (o[n]) {
    var p = f, v = s[n];
    return p < v ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var m = l + u, h = s[n] + c;
  return m > h ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function jw(t) {
  var e = t.translateX, r = t.translateY, n = t.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(e, "px, ").concat(r, "px, 0)") : "translate(".concat(e, "px, ").concat(r, "px)")
  };
}
function Iw(t) {
  var e = t.allowEscapeViewBox, r = t.coordinate, n = t.offsetTopLeft, a = t.position, i = t.reverseDirection, o = t.tooltipBox, u = t.useTranslate3d, s = t.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = ld({
    allowEscapeViewBox: e,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), l = ld({
    allowEscapeViewBox: e,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = jw({
    translateX: f,
    translateY: l,
    useTranslate3d: u
  })) : c = Ew, {
    cssProperties: c,
    cssClasses: Tw({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function Mt(t) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mt(t);
}
function fd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pd(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fd(Object(r), !0).forEach(function(n) {
      ys(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fd(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Mw(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Cw(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Py(n.key), n);
  }
}
function $w(t, e, r) {
  return e && Cw(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Rw(t, e, r) {
  return e = cn(e), Dw(t, Ay() ? Reflect.construct(e, r || [], cn(t).constructor) : e.apply(t, r));
}
function Dw(t, e) {
  if (e && (Mt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qw(t);
}
function qw(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ay() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ay = function() {
    return !!t;
  })();
}
function cn(t) {
  return cn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cn(t);
}
function Nw(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && hs(t, e);
}
function hs(t, e) {
  return hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hs(t, e);
}
function ys(t, e, r) {
  return e = Py(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Py(t) {
  var e = Bw(t, "string");
  return Mt(e) == "symbol" ? e : e + "";
}
function Bw(t, e) {
  if (Mt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Mt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var dd = 1, kw = /* @__PURE__ */ (function(t) {
  function e() {
    var r;
    Mw(this, e);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = Rw(this, e, [].concat(a)), ys(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ys(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, s, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && u !== void 0 ? u : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return Nw(e, t), $w(e, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > dd || Math.abs(n.height - this.state.lastBoundingBox.height) > dd) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, a;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, u = a.animationDuration, s = a.animationEasing, c = a.children, f = a.coordinate, l = a.hasPayload, p = a.isAnimationActive, v = a.offset, m = a.position, h = a.reverseDirection, d = a.useTranslate3d, g = a.viewBox, O = a.wrapperStyle, w = Iw({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: v,
        position: m,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: d,
        viewBox: g
      }), S = w.cssClasses, y = w.cssProperties, b = pd(pd({
        transition: p && i ? "transform ".concat(u, "ms ").concat(s) : void 0
      }, y), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, O);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
          tabIndex: -1,
          className: S,
          style: b,
          ref: function(A) {
            n.wrapperNode = A;
          }
        }, c)
      );
    }
  }]);
})(q.PureComponent), Lw = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Gn = {
  isSsr: Lw()
};
function Ct(t) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ct(t);
}
function vd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hd(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vd(Object(r), !0).forEach(function(n) {
      Ec(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : vd(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Fw(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ww(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Ey(n.key), n);
  }
}
function zw(t, e, r) {
  return e && Ww(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Kw(t, e, r) {
  return e = ln(e), Gw(t, _y() ? Reflect.construct(e, r || [], ln(t).constructor) : e.apply(t, r));
}
function Gw(t, e) {
  if (e && (Ct(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Hw(t);
}
function Hw(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function _y() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_y = function() {
    return !!t;
  })();
}
function ln(t) {
  return ln = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ln(t);
}
function Uw(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ms(t, e);
}
function ms(t, e) {
  return ms = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ms(t, e);
}
function Ec(t, e, r) {
  return e = Ey(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Ey(t) {
  var e = Xw(t, "string");
  return Ct(e) == "symbol" ? e : e + "";
}
function Xw(t, e) {
  if (Ct(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Ct(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function Vw(t) {
  return t.dataKey;
}
function Yw(t, e) {
  return /* @__PURE__ */ E.isValidElement(t) ? /* @__PURE__ */ E.cloneElement(t, e) : typeof t == "function" ? /* @__PURE__ */ E.createElement(t, e) : /* @__PURE__ */ E.createElement(Aw, e);
}
var $e = /* @__PURE__ */ (function(t) {
  function e() {
    return Fw(this, e), Kw(this, e, arguments);
  }
  return Uw(e, t), zw(e, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, u = a.animationDuration, s = a.animationEasing, c = a.content, f = a.coordinate, l = a.filterNull, p = a.isAnimationActive, v = a.offset, m = a.payload, h = a.payloadUniqBy, d = a.position, g = a.reverseDirection, O = a.useTranslate3d, w = a.viewBox, S = a.wrapperStyle, y = m ?? [];
      l && y.length && (y = my(m.filter(function(x) {
        return x.value != null && (x.hide !== !0 || n.props.includeHidden);
      }), h, Vw));
      var b = y.length > 0;
      return /* @__PURE__ */ E.createElement(kw, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: s,
        isAnimationActive: p,
        active: i,
        coordinate: f,
        hasPayload: b,
        offset: v,
        position: d,
        reverseDirection: g,
        useTranslate3d: O,
        viewBox: w,
        wrapperStyle: S
      }, Yw(c, hd(hd({}, this.props), {}, {
        payload: y
      })));
    }
  }]);
})(q.PureComponent);
Ec($e, "displayName", "Tooltip");
Ec($e, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Gn.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var su, yd;
function Zw() {
  if (yd) return su;
  yd = 1;
  var t = ke(), e = function() {
    return t.Date.now();
  };
  return su = e, su;
}
var cu, md;
function Jw() {
  if (md) return cu;
  md = 1;
  var t = /\s/;
  function e(r) {
    for (var n = r.length; n-- && t.test(r.charAt(n)); )
      ;
    return n;
  }
  return cu = e, cu;
}
var lu, gd;
function Qw() {
  if (gd) return lu;
  gd = 1;
  var t = Jw(), e = /^\s+/;
  function r(n) {
    return n && n.slice(0, t(n) + 1).replace(e, "");
  }
  return lu = r, lu;
}
var fu, bd;
function Ty() {
  if (bd) return fu;
  bd = 1;
  var t = Qw(), e = Qe(), r = zt(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function s(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (e(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = e(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = t(c);
    var l = i.test(c);
    return l || o.test(c) ? u(c.slice(2), l ? 2 : 8) : a.test(c) ? n : +c;
  }
  return fu = s, fu;
}
var pu, Od;
function ex() {
  if (Od) return pu;
  Od = 1;
  var t = Qe(), e = Zw(), r = Ty(), n = "Expected a function", a = Math.max, i = Math.min;
  function o(u, s, c) {
    var f, l, p, v, m, h, d = 0, g = !1, O = !1, w = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    s = r(s) || 0, t(c) && (g = !!c.leading, O = "maxWait" in c, p = O ? a(r(c.maxWait) || 0, s) : p, w = "trailing" in c ? !!c.trailing : w);
    function S(M) {
      var $ = f, C = l;
      return f = l = void 0, d = M, v = u.apply(C, $), v;
    }
    function y(M) {
      return d = M, m = setTimeout(A, s), g ? S(M) : v;
    }
    function b(M) {
      var $ = M - h, C = M - d, R = s - $;
      return O ? i(R, p - C) : R;
    }
    function x(M) {
      var $ = M - h, C = M - d;
      return h === void 0 || $ >= s || $ < 0 || O && C >= p;
    }
    function A() {
      var M = e();
      if (x(M))
        return P(M);
      m = setTimeout(A, b(M));
    }
    function P(M) {
      return m = void 0, w && f ? S(M) : (f = l = void 0, v);
    }
    function I() {
      m !== void 0 && clearTimeout(m), d = 0, f = h = l = m = void 0;
    }
    function _() {
      return m === void 0 ? v : P(e());
    }
    function T() {
      var M = e(), $ = x(M);
      if (f = arguments, l = this, h = M, $) {
        if (m === void 0)
          return y(h);
        if (O)
          return clearTimeout(m), m = setTimeout(A, s), S(h);
      }
      return m === void 0 && (m = setTimeout(A, s)), v;
    }
    return T.cancel = I, T.flush = _, T;
  }
  return pu = o, pu;
}
var du, wd;
function tx() {
  if (wd) return du;
  wd = 1;
  var t = ex(), e = Qe(), r = "Expected a function";
  function n(a, i, o) {
    var u = !0, s = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    return e(o) && (u = "leading" in o ? !!o.leading : u, s = "trailing" in o ? !!o.trailing : s), t(a, i, {
      leading: u,
      maxWait: i,
      trailing: s
    });
  }
  return du = n, du;
}
var rx = tx();
const jy = /* @__PURE__ */ J(rx);
function hr(t) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hr(t);
}
function xd(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xd(Object(r), !0).forEach(function(n) {
      nx(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : xd(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function nx(t, e, r) {
  return e = ax(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function ax(t) {
  var e = ix(t, "string");
  return hr(e) == "symbol" ? e : e + "";
}
function ix(t, e) {
  if (hr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ox(t, e) {
  return lx(t) || cx(t, e) || sx(t, e) || ux();
}
function ux() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sx(t, e) {
  if (t) {
    if (typeof t == "string") return Sd(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sd(t, e);
  }
}
function Sd(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function cx(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function lx(t) {
  if (Array.isArray(t)) return t;
}
var fx = /* @__PURE__ */ q.forwardRef(function(t, e) {
  var r = t.aspect, n = t.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = t.width, o = i === void 0 ? "100%" : i, u = t.height, s = u === void 0 ? "100%" : u, c = t.minWidth, f = c === void 0 ? 0 : c, l = t.minHeight, p = t.maxHeight, v = t.children, m = t.debounce, h = m === void 0 ? 0 : m, d = t.id, g = t.className, O = t.onResize, w = t.style, S = w === void 0 ? {} : w, y = q.useRef(null), b = q.useRef();
  b.current = O, q.useImperativeHandle(e, function() {
    return Object.defineProperty(y.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), y.current;
      },
      configurable: !0
    });
  });
  var x = q.useState({
    containerWidth: a.width,
    containerHeight: a.height
  }), A = ox(x, 2), P = A[0], I = A[1], _ = q.useCallback(function(M, $) {
    I(function(C) {
      var R = Math.round(M), D = Math.round($);
      return C.containerWidth === R && C.containerHeight === D ? C : {
        containerWidth: R,
        containerHeight: D
      };
    });
  }, []);
  q.useEffect(function() {
    var M = function(F) {
      var W, K = F[0].contentRect, k = K.width, G = K.height;
      _(k, G), (W = b.current) === null || W === void 0 || W.call(b, k, G);
    };
    h > 0 && (M = jy(M, h, {
      trailing: !0,
      leading: !1
    }));
    var $ = new ResizeObserver(M), C = y.current.getBoundingClientRect(), R = C.width, D = C.height;
    return _(R, D), $.observe(y.current), function() {
      $.disconnect();
    };
  }, [_, h]);
  var T = q.useMemo(function() {
    var M = P.containerWidth, $ = P.containerHeight;
    if (M < 0 || $ < 0)
      return null;
    lt(ct(o) || ct(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), lt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var C = ct(o) ? M : o, R = ct(s) ? $ : s;
    r && r > 0 && (C ? R = C / r : R && (C = R * r), p && R > p && (R = p)), lt(C > 0 || R > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, C, R, o, s, f, l, r);
    var D = !Array.isArray(v) && ze(v.type).endsWith("Chart");
    return E.Children.map(v, function(N) {
      return /* @__PURE__ */ E.isValidElement(N) ? /* @__PURE__ */ q.cloneElement(N, Vr({
        width: C,
        height: R
      }, D ? {
        style: Vr({
          height: "100%",
          width: "100%",
          maxHeight: R,
          maxWidth: C
        }, N.props.style)
      } : {})) : N;
    });
  }, [r, v, s, p, l, f, P, o]);
  return /* @__PURE__ */ E.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: ee("recharts-responsive-container", g),
    style: Vr(Vr({}, S), {}, {
      width: o,
      height: s,
      minWidth: f,
      minHeight: l,
      maxHeight: p
    }),
    ref: y
  }, T);
}), Iy = function(e) {
  return null;
};
Iy.displayName = "Cell";
function yr(t) {
  "@babel/helpers - typeof";
  return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yr(t);
}
function Ad(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ad(Object(r), !0).forEach(function(n) {
      px(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function px(t, e, r) {
  return e = dx(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function dx(t) {
  var e = vx(t, "string");
  return yr(e) == "symbol" ? e : e + "";
}
function vx(t, e) {
  if (yr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var St = {
  widthCache: {},
  cacheCount: 0
}, hx = 2e3, yx = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Pd = "recharts_measurement_span";
function mx(t) {
  var e = gs({}, t);
  return Object.keys(e).forEach(function(r) {
    e[r] || delete e[r];
  }), e;
}
var _d = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (e == null || Gn.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = mx(r), a = JSON.stringify({
    text: e,
    copyStyle: n
  });
  if (St.widthCache[a])
    return St.widthCache[a];
  try {
    var i = document.getElementById(Pd);
    i || (i = document.createElement("span"), i.setAttribute("id", Pd), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = gs(gs({}, yx), n);
    Object.assign(i.style, o), i.textContent = "".concat(e);
    var u = i.getBoundingClientRect(), s = {
      width: u.width,
      height: u.height
    };
    return St.widthCache[a] = s, ++St.cacheCount > hx && (St.cacheCount = 0, St.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, gx = function(e) {
  return {
    top: e.top + window.scrollY - document.documentElement.clientTop,
    left: e.left + window.scrollX - document.documentElement.clientLeft
  };
};
function mr(t) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, mr(t);
}
function fn(t, e) {
  return xx(t) || wx(t, e) || Ox(t, e) || bx();
}
function bx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ox(t, e) {
  if (t) {
    if (typeof t == "string") return Ed(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ed(t, e);
  }
}
function Ed(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function wx(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function xx(t) {
  if (Array.isArray(t)) return t;
}
function Sx(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Td(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Px(n.key), n);
  }
}
function Ax(t, e, r) {
  return e && Td(t.prototype, e), r && Td(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Px(t) {
  var e = _x(t, "string");
  return mr(e) == "symbol" ? e : e + "";
}
function _x(t, e) {
  if (mr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var jd = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Id = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Ex = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, Tx = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, My = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, jx = Object.keys(My), At = "NaN";
function Ix(t, e) {
  return t * My[e];
}
var Yr = /* @__PURE__ */ (function() {
  function t(e, r) {
    Sx(this, t), this.num = e, this.unit = r, this.num = e, this.unit = r, Number.isNaN(e) && (this.unit = ""), r !== "" && !Ex.test(r) && (this.num = NaN, this.unit = ""), jx.includes(r) && (this.num = Ix(e, r), this.unit = "px");
  }
  return Ax(t, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new t(NaN, "") : new t(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new t(NaN, "") : new t(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new t(NaN, "") : new t(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new t(NaN, "") : new t(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, a = (n = Tx.exec(r)) !== null && n !== void 0 ? n : [], i = fn(a, 3), o = i[1], u = i[2];
      return new t(parseFloat(o), u ?? "");
    }
  }]);
})();
function Cy(t) {
  if (t.includes(At))
    return At;
  for (var e = t; e.includes("*") || e.includes("/"); ) {
    var r, n = (r = jd.exec(e)) !== null && r !== void 0 ? r : [], a = fn(n, 4), i = a[1], o = a[2], u = a[3], s = Yr.parse(i ?? ""), c = Yr.parse(u ?? ""), f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN())
      return At;
    e = e.replace(jd, f.toString());
  }
  for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
    var l, p = (l = Id.exec(e)) !== null && l !== void 0 ? l : [], v = fn(p, 4), m = v[1], h = v[2], d = v[3], g = Yr.parse(m ?? ""), O = Yr.parse(d ?? ""), w = h === "+" ? g.add(O) : g.subtract(O);
    if (w.isNaN())
      return At;
    e = e.replace(Id, w.toString());
  }
  return e;
}
var Md = /\(([^()]*)\)/;
function Mx(t) {
  for (var e = t; e.includes("("); ) {
    var r = Md.exec(e), n = fn(r, 2), a = n[1];
    e = e.replace(Md, Cy(a));
  }
  return e;
}
function Cx(t) {
  var e = t.replace(/\s+/g, "");
  return e = Mx(e), e = Cy(e), e;
}
function $x(t) {
  try {
    return Cx(t);
  } catch {
    return At;
  }
}
function vu(t) {
  var e = $x(t.slice(5, -1));
  return e === At ? "" : e;
}
var Rx = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], Dx = ["dx", "dy", "angle", "className", "breakAll"];
function bs() {
  return bs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, bs.apply(this, arguments);
}
function Cd(t, e) {
  if (t == null) return {};
  var r = qx(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function qx(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function $d(t, e) {
  return Lx(t) || kx(t, e) || Bx(t, e) || Nx();
}
function Nx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bx(t, e) {
  if (t) {
    if (typeof t == "string") return Rd(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rd(t, e);
  }
}
function Rd(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function kx(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function Lx(t) {
  if (Array.isArray(t)) return t;
}
var $y = /[ \f\n\r\t\v\u2028\u2029]+/, Ry = function(e) {
  var r = e.children, n = e.breakAll, a = e.style;
  try {
    var i = [];
    H(r) || (n ? i = r.toString().split("") : i = r.toString().split($y));
    var o = i.map(function(s) {
      return {
        word: s,
        width: _d(s, a).width
      };
    }), u = n ? 0 : _d(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, Fx = function(e, r, n, a, i) {
  var o = e.maxLines, u = e.children, s = e.style, c = e.breakAll, f = B(o), l = u, p = function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return C.reduce(function(R, D) {
      var N = D.word, F = D.width, W = R[R.length - 1];
      if (W && (a == null || i || W.width + F + n < Number(a)))
        W.words.push(N), W.width += F + n;
      else {
        var K = {
          words: [N],
          width: F
        };
        R.push(K);
      }
      return R;
    }, []);
  }, v = p(r), m = function(C) {
    return C.reduce(function(R, D) {
      return R.width > D.width ? R : D;
    });
  };
  if (!f)
    return v;
  for (var h = "…", d = function(C) {
    var R = l.slice(0, C), D = Ry({
      breakAll: c,
      style: s,
      children: R + h
    }).wordsWithComputedWidth, N = p(D), F = N.length > o || m(N).width > Number(a);
    return [F, N];
  }, g = 0, O = l.length - 1, w = 0, S; g <= O && w <= l.length - 1; ) {
    var y = Math.floor((g + O) / 2), b = y - 1, x = d(b), A = $d(x, 2), P = A[0], I = A[1], _ = d(y), T = $d(_, 1), M = T[0];
    if (!P && !M && (g = y + 1), P && M && (O = y - 1), !P && M) {
      S = I;
      break;
    }
    w++;
  }
  return S || v;
}, Dd = function(e) {
  var r = H(e) ? [] : e.toString().split($y);
  return [{
    words: r
  }];
}, Wx = function(e) {
  var r = e.width, n = e.scaleToFit, a = e.children, i = e.style, o = e.breakAll, u = e.maxLines;
  if ((r || n) && !Gn.isSsr) {
    var s, c, f = Ry({
      breakAll: o,
      children: a,
      style: i
    });
    if (f) {
      var l = f.wordsWithComputedWidth, p = f.spaceWidth;
      s = l, c = p;
    } else
      return Dd(a);
    return Fx({
      breakAll: o,
      children: a,
      maxLines: u,
      style: i
    }, s, c, r, n);
  }
  return Dd(a);
}, qd = "#808080", Os = function(e) {
  var r = e.x, n = r === void 0 ? 0 : r, a = e.y, i = a === void 0 ? 0 : a, o = e.lineHeight, u = o === void 0 ? "1em" : o, s = e.capHeight, c = s === void 0 ? "0.71em" : s, f = e.scaleToFit, l = f === void 0 ? !1 : f, p = e.textAnchor, v = p === void 0 ? "start" : p, m = e.verticalAnchor, h = m === void 0 ? "end" : m, d = e.fill, g = d === void 0 ? qd : d, O = Cd(e, Rx), w = q.useMemo(function() {
    return Wx({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: l,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, l, O.style, O.width]), S = O.dx, y = O.dy, b = O.angle, x = O.className, A = O.breakAll, P = Cd(O, Dx);
  if (!ce(n) || !ce(i))
    return null;
  var I = n + (B(S) ? S : 0), _ = i + (B(y) ? y : 0), T;
  switch (h) {
    case "start":
      T = vu("calc(".concat(c, ")"));
      break;
    case "middle":
      T = vu("calc(".concat((w.length - 1) / 2, " * -").concat(u, " + (").concat(c, " / 2))"));
      break;
    default:
      T = vu("calc(".concat(w.length - 1, " * -").concat(u, ")"));
      break;
  }
  var M = [];
  if (l) {
    var $ = w[0].width, C = O.width;
    M.push("scale(".concat((B(C) ? C / $ : 1) / $, ")"));
  }
  return b && M.push("rotate(".concat(b, ", ").concat(I, ", ").concat(_, ")")), M.length && (P.transform = M.join(" ")), /* @__PURE__ */ E.createElement("text", bs({}, te(P, !0), {
    x: I,
    y: _,
    className: ee("recharts-text", x),
    textAnchor: v,
    fill: g.includes("url") ? qd : g
  }), w.map(function(R, D) {
    var N = R.words.join(A ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ E.createElement("tspan", {
        x: I,
        dy: D === 0 ? T : u,
        key: "".concat(N, "-").concat(D)
      }, N)
    );
  }));
};
function zx(t = nn) {
  if (t === nn) return Dy;
  if (typeof t != "function") throw new TypeError("compare is not a function");
  return (e, r) => {
    const n = t(e, r);
    return n || n === 0 ? n : (t(r, r) === 0) - (t(e, e) === 0);
  };
}
function Dy(t, e) {
  return (t == null || !(t >= t)) - (e == null || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0);
}
function qy(t, e, r = 0, n = 1 / 0, a) {
  if (e = Math.floor(e), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(t.length - 1, n)), !(r <= e && e <= n)) return t;
  for (a = a === void 0 ? Dy : zx(a); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = e - r + 1, f = Math.log(s), l = 0.5 * Math.exp(2 * f / 3), p = 0.5 * Math.sqrt(f * l * (s - l) / s) * (c - s / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(e - c * l / s + p)), m = Math.min(n, Math.floor(e + (s - c) * l / s + p));
      qy(t, e, v, m, a);
    }
    const i = t[e];
    let o = r, u = n;
    for (er(t, r, e), a(t[n], i) > 0 && er(t, r, n); o < u; ) {
      for (er(t, o, u), ++o, --u; a(t[o], i) < 0; ) ++o;
      for (; a(t[u], i) > 0; ) --u;
    }
    a(t[r], i) === 0 ? er(t, r, u) : (++u, er(t, u, n)), u <= e && (r = u + 1), e <= u && (n = u - 1);
  }
  return t;
}
function er(t, e, r) {
  const n = t[e];
  t[e] = t[r], t[r] = n;
}
function Kx(t, e, r) {
  if (t = Float64Array.from(Pg(t)), !(!(n = t.length) || isNaN(e = +e))) {
    if (e <= 0 || n < 2) return Uc(t);
    if (e >= 1) return Xc(t);
    var n, a = (n - 1) * e, i = Math.floor(a), o = Xc(qy(t, i).subarray(0, i + 1)), u = Uc(t.subarray(i + 1));
    return o + (u - o) * (a - i);
  }
}
function Gx(t, e, r = _g) {
  if (!(!(n = t.length) || isNaN(e = +e))) {
    if (e <= 0 || n < 2) return +r(t[0], 0, t);
    if (e >= 1) return +r(t[n - 1], n - 1, t);
    var n, a = (n - 1) * e, i = Math.floor(a), o = +r(t[i], i, t), u = +r(t[i + 1], i + 1, t);
    return o + (u - o) * (a - i);
  }
}
function Hx(t, e) {
  e === void 0 && (e = t, t = ic);
  for (var r = 0, n = e.length - 1, a = e[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = t(a, a = e[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[u](o - u);
  };
}
function Ny(t) {
  var e;
  function r(n) {
    return n == null || isNaN(n = +n) ? e : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (t = Array.from(n, Ju), r) : t.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (e = n, r) : e;
  }, r.copy = function() {
    return Ny(t).unknown(e);
  }, t = arguments.length ? Array.from(t, Ju) : [0, 1], yt(r);
}
function Nd(t) {
  return Math.log(t);
}
function Bd(t) {
  return Math.exp(t);
}
function Ux(t) {
  return -Math.log(-t);
}
function Xx(t) {
  return -Math.exp(-t);
}
function Vx(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function Yx(t) {
  return t === 10 ? Vx : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function Zx(t) {
  return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), (e) => Math.log(e) / t);
}
function kd(t) {
  return (e, r) => -t(-e, r);
}
function Tc(t) {
  const e = t(Nd, Bd), r = e.domain;
  let n = 10, a, i;
  function o() {
    return a = Zx(n), i = Yx(n), r()[0] < 0 ? (a = kd(a), i = kd(i), t(Ux, Xx)) : t(Nd, Bd), e;
  }
  return e.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, e.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, e.ticks = (u) => {
    const s = r();
    let c = s[0], f = s[s.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let p = a(c), v = a(f), m, h;
    const d = u == null ? 10 : +u;
    let g = [];
    if (!(n % 1) && v - p < d) {
      if (p = Math.floor(p), v = Math.ceil(v), c > 0) {
        for (; p <= v; ++p)
          for (m = 1; m < n; ++m)
            if (h = p < 0 ? m / i(-p) : m * i(p), !(h < c)) {
              if (h > f) break;
              g.push(h);
            }
      } else for (; p <= v; ++p)
        for (m = n - 1; m >= 1; --m)
          if (h = p > 0 ? m / i(-p) : m * i(p), !(h < c)) {
            if (h > f) break;
            g.push(h);
          }
      g.length * 2 < d && (g = Hc(c, f, d));
    } else
      g = Hc(p, v, Math.min(v - p, d)).map(i);
    return l ? g.reverse() : g;
  }, e.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Wg(s)).precision == null && (s.trim = !0), s = zg(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / e.ticks().length);
    return (f) => {
      let l = f / i(Math.round(a(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "";
    };
  }, e.nice = () => r(jg(r(), {
    floor: (u) => i(Math.floor(a(u))),
    ceil: (u) => i(Math.ceil(a(u)))
  })), e;
}
function By() {
  const t = Tc(oc()).domain([1, 10]);
  return t.copy = () => uc(t, By()).base(t.base()), Je.apply(t, arguments), t;
}
function Ld(t) {
  return function(e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t));
  };
}
function Fd(t) {
  return function(e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
  };
}
function jc(t) {
  var e = 1, r = t(Ld(e), Fd(e));
  return r.constant = function(n) {
    return arguments.length ? t(Ld(e = +n), Fd(e)) : e;
  }, yt(r);
}
function ky() {
  var t = jc(oc());
  return t.copy = function() {
    return uc(t, ky()).constant(t.constant());
  }, Je.apply(t, arguments);
}
function Wd(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Jx(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function Qx(t) {
  return t < 0 ? -t * t : t * t;
}
function Ic(t) {
  var e = t(We, We), r = 1;
  function n() {
    return r === 1 ? t(We, We) : r === 0.5 ? t(Jx, Qx) : t(Wd(r), Wd(1 / r));
  }
  return e.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, yt(e);
}
function Mc() {
  var t = Ic(oc());
  return t.copy = function() {
    return uc(t, Mc()).exponent(t.exponent());
  }, Je.apply(t, arguments), t;
}
function eS() {
  return Mc.apply(null, arguments).exponent(0.5);
}
function zd(t) {
  return Math.sign(t) * t * t;
}
function tS(t) {
  return Math.sign(t) * Math.sqrt(Math.abs(t));
}
function Ly() {
  var t = Eg(), e = [0, 1], r = !1, n;
  function a(i) {
    var o = tS(t(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return t.invert(zd(i));
  }, a.domain = function(i) {
    return arguments.length ? (t.domain(i), a) : t.domain();
  }, a.range = function(i) {
    return arguments.length ? (t.range((e = Array.from(i, Ju)).map(zd)), a) : e.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (t.clamp(i), a) : t.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Ly(t.domain(), e).round(r).clamp(t.clamp()).unknown(n);
  }, Je.apply(a, arguments), yt(a);
}
function Fy() {
  var t = [], e = [], r = [], n;
  function a() {
    var o = 0, u = Math.max(1, e.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = Gx(t, o / u);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : e[Rn(r, o)];
  }
  return i.invertExtent = function(o) {
    var u = e.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : t[0],
      u < r.length ? r[u] : t[t.length - 1]
    ];
  }, i.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [];
    for (let u of o) u != null && !isNaN(u = +u) && t.push(u);
    return t.sort(nn), a();
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), a()) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return Fy().domain(t).range(e).unknown(n);
  }, Je.apply(i, arguments);
}
function Wy() {
  var t = 0, e = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(s) {
    return s != null && s <= s ? a[Rn(n, s, 0, r)] : i;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * e - (s - r) * t) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([t, e] = s, t = +t, e = +e, u()) : [t, e];
  }, o.range = function(s) {
    return arguments.length ? (r = (a = Array.from(s)).length - 1, u()) : a.slice();
  }, o.invertExtent = function(s) {
    var c = a.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [t, n[0]] : c >= r ? [n[r - 1], e] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (i = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Wy().domain([t, e]).range(a).unknown(i);
  }, Je.apply(yt(o), arguments);
}
function zy() {
  var t = [0.5], e = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? e[Rn(t, i, 0, n)] : r;
  }
  return a.domain = function(i) {
    return arguments.length ? (t = Array.from(i), n = Math.min(t.length, e.length - 1), a) : t.slice();
  }, a.range = function(i) {
    return arguments.length ? (e = Array.from(i), n = Math.min(t.length, e.length - 1), a) : e.slice();
  }, a.invertExtent = function(i) {
    var o = e.indexOf(i);
    return [t[o - 1], t[o]];
  }, a.unknown = function(i) {
    return arguments.length ? (r = i, a) : r;
  }, a.copy = function() {
    return zy().domain(t).range(e).unknown(r);
  }, Je.apply(a, arguments);
}
function rS() {
  return Je.apply(Ig(Lg, kg, Bg, Ng, qg, Dg, Rg, $g, Cg, Mg).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Hn() {
  var t = 0, e = 1, r, n, a, i, o = We, u = !1, s;
  function c(l) {
    return l == null || isNaN(l = +l) ? s : o(a === 0 ? 0.5 : (l = (i(l) - r) * a, u ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([t, e] = l, r = i(t = +t), n = i(e = +e), a = r === n ? 0 : 1 / (n - r), c) : [t, e];
  }, c.clamp = function(l) {
    return arguments.length ? (u = !!l, c) : u;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(p) {
      var v, m;
      return arguments.length ? ([v, m] = p, o = l(v, m), c) : [o(0), o(1)];
    };
  }
  return c.range = f(ic), c.rangeRound = f(zh), c.unknown = function(l) {
    return arguments.length ? (s = l, c) : s;
  }, function(l) {
    return i = l, r = l(t), n = l(e), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function tt(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function Ky() {
  var t = yt(Hn()(We));
  return t.copy = function() {
    return tt(t, Ky());
  }, Ge.apply(t, arguments);
}
function Gy() {
  var t = Tc(Hn()).domain([1, 10]);
  return t.copy = function() {
    return tt(t, Gy()).base(t.base());
  }, Ge.apply(t, arguments);
}
function Hy() {
  var t = jc(Hn());
  return t.copy = function() {
    return tt(t, Hy()).constant(t.constant());
  }, Ge.apply(t, arguments);
}
function Cc() {
  var t = Ic(Hn());
  return t.copy = function() {
    return tt(t, Cc()).exponent(t.exponent());
  }, Ge.apply(t, arguments);
}
function nS() {
  return Cc.apply(null, arguments).exponent(0.5);
}
function Uy() {
  var t = [], e = We;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return e((Rn(t, n, 1) - 1) / (t.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return t.slice();
    t = [];
    for (let a of n) a != null && !isNaN(a = +a) && t.push(a);
    return t.sort(nn), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (e = n, r) : e;
  }, r.range = function() {
    return t.map((n, a) => e(a / (t.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => Kx(t, i / n));
  }, r.copy = function() {
    return Uy(e).domain(t);
  }, Ge.apply(r, arguments);
}
function Un() {
  var t = 0, e = 0.5, r = 1, n = 1, a, i, o, u, s, c = We, f, l = !1, p;
  function v(h) {
    return isNaN(h = +h) ? p : (h = 0.5 + ((h = +f(h)) - i) * (n * h < n * i ? u : s), c(l ? Math.max(0, Math.min(1, h)) : h));
  }
  v.domain = function(h) {
    return arguments.length ? ([t, e, r] = h, a = f(t = +t), i = f(e = +e), o = f(r = +r), u = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, v) : [t, e, r];
  }, v.clamp = function(h) {
    return arguments.length ? (l = !!h, v) : l;
  }, v.interpolator = function(h) {
    return arguments.length ? (c = h, v) : c;
  };
  function m(h) {
    return function(d) {
      var g, O, w;
      return arguments.length ? ([g, O, w] = d, c = Hx(h, [g, O, w]), v) : [c(0), c(0.5), c(1)];
    };
  }
  return v.range = m(ic), v.rangeRound = m(zh), v.unknown = function(h) {
    return arguments.length ? (p = h, v) : p;
  }, function(h) {
    return f = h, a = h(t), i = h(e), o = h(r), u = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, v;
  };
}
function Xy() {
  var t = yt(Un()(We));
  return t.copy = function() {
    return tt(t, Xy());
  }, Ge.apply(t, arguments);
}
function Vy() {
  var t = Tc(Un()).domain([0.1, 1, 10]);
  return t.copy = function() {
    return tt(t, Vy()).base(t.base());
  }, Ge.apply(t, arguments);
}
function Yy() {
  var t = jc(Un());
  return t.copy = function() {
    return tt(t, Yy()).constant(t.constant());
  }, Ge.apply(t, arguments);
}
function $c() {
  var t = Ic(Un());
  return t.copy = function() {
    return tt(t, $c()).exponent(t.exponent());
  }, Ge.apply(t, arguments);
}
function aS() {
  return $c.apply(null, arguments).exponent(0.5);
}
const Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Zu,
  scaleDiverging: Xy,
  scaleDivergingLog: Vy,
  scaleDivergingPow: $c,
  scaleDivergingSqrt: aS,
  scaleDivergingSymlog: Yy,
  scaleIdentity: Ny,
  scaleImplicit: Kg,
  scaleLinear: Qu,
  scaleLog: By,
  scaleOrdinal: Gg,
  scalePoint: sr,
  scalePow: Mc,
  scaleQuantile: Fy,
  scaleQuantize: Wy,
  scaleRadial: Ly,
  scaleSequential: Ky,
  scaleSequentialLog: Gy,
  scaleSequentialPow: Cc,
  scaleSequentialQuantile: Uy,
  scaleSequentialSqrt: nS,
  scaleSequentialSymlog: Hy,
  scaleSqrt: eS,
  scaleSymlog: ky,
  scaleThreshold: zy,
  scaleTime: Fg,
  scaleUtc: rS,
  tickFormat: Tg
}, Symbol.toStringTag, { value: "Module" }));
var hu, Gd;
function Zy() {
  if (Gd) return hu;
  Gd = 1;
  var t = zt();
  function e(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var u = r[i], s = n(u);
      if (s != null && (c === void 0 ? s === s && !t(s) : a(s, c)))
        var c = s, f = u;
    }
    return f;
  }
  return hu = e, hu;
}
var yu, Hd;
function iS() {
  if (Hd) return yu;
  Hd = 1;
  function t(e, r) {
    return e > r;
  }
  return yu = t, yu;
}
var mu, Ud;
function oS() {
  if (Ud) return mu;
  Ud = 1;
  var t = Zy(), e = iS(), r = Gt();
  function n(a) {
    return a && a.length ? t(a, r, e) : void 0;
  }
  return mu = n, mu;
}
var uS = oS();
const Xn = /* @__PURE__ */ J(uS);
var gu, Xd;
function sS() {
  if (Xd) return gu;
  Xd = 1;
  function t(e, r) {
    return e < r;
  }
  return gu = t, gu;
}
var bu, Vd;
function cS() {
  if (Vd) return bu;
  Vd = 1;
  var t = Zy(), e = sS(), r = Gt();
  function n(a) {
    return a && a.length ? t(a, r, e) : void 0;
  }
  return bu = n, bu;
}
var lS = cS();
const Vn = /* @__PURE__ */ J(lS);
var Ou, Yd;
function fS() {
  if (Yd) return Ou;
  Yd = 1;
  var t = dc(), e = et(), r = xy(), n = me();
  function a(i, o) {
    var u = n(i) ? t : r;
    return u(i, e(o, 3));
  }
  return Ou = a, Ou;
}
var wu, Zd;
function pS() {
  if (Zd) return wu;
  Zd = 1;
  var t = Oy(), e = fS();
  function r(n, a) {
    return t(e(n, a), 1);
  }
  return wu = r, wu;
}
var dS = pS();
const vS = /* @__PURE__ */ J(dS);
var xu, Jd;
function hS() {
  if (Jd) return xu;
  Jd = 1;
  var t = Ac();
  function e(r, n) {
    return t(r, n);
  }
  return xu = e, xu;
}
var yS = hS();
const Rc = /* @__PURE__ */ J(yS);
var Ht = 1e9, mS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, qc, re = !0, Pe = "[DecimalError] ", ft = Pe + "Invalid argument: ", Dc = Pe + "Exponent out of range: ", Ut = Math.floor, st = Math.pow, gS = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Oe, pe = 1e7, Q = 7, Jy = 9007199254740991, pn = Ut(Jy / Q), L = {};
L.absoluteValue = L.abs = function() {
  var t = new this.constructor(this);
  return t.s && (t.s = 1), t;
};
L.comparedTo = L.cmp = function(t) {
  var e, r, n, a, i = this;
  if (t = new i.constructor(t), i.s !== t.s) return i.s || -t.s;
  if (i.e !== t.e) return i.e > t.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = t.d.length, e = 0, r = n < a ? n : a; e < r; ++e)
    if (i.d[e] !== t.d[e]) return i.d[e] > t.d[e] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
L.decimalPlaces = L.dp = function() {
  var t = this, e = t.d.length - 1, r = (e - t.e) * Q;
  if (e = t.d[e], e) for (; e % 10 == 0; e /= 10) r--;
  return r < 0 ? 0 : r;
};
L.dividedBy = L.div = function(t) {
  return Ke(this, new this.constructor(t));
};
L.dividedToIntegerBy = L.idiv = function(t) {
  var e = this, r = e.constructor;
  return Z(Ke(e, new r(t), 0, 1), r.precision);
};
L.equals = L.eq = function(t) {
  return !this.cmp(t);
};
L.exponent = function() {
  return ue(this);
};
L.greaterThan = L.gt = function(t) {
  return this.cmp(t) > 0;
};
L.greaterThanOrEqualTo = L.gte = function(t) {
  return this.cmp(t) >= 0;
};
L.isInteger = L.isint = function() {
  return this.e > this.d.length - 2;
};
L.isNegative = L.isneg = function() {
  return this.s < 0;
};
L.isPositive = L.ispos = function() {
  return this.s > 0;
};
L.isZero = function() {
  return this.s === 0;
};
L.lessThan = L.lt = function(t) {
  return this.cmp(t) < 0;
};
L.lessThanOrEqualTo = L.lte = function(t) {
  return this.cmp(t) < 1;
};
L.logarithm = L.log = function(t) {
  var e, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (t === void 0)
    t = new n(10);
  else if (t = new n(t), t.s < 1 || t.eq(Oe)) throw Error(Pe + "NaN");
  if (r.s < 1) throw Error(Pe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Oe) ? new n(0) : (re = !1, e = Ke(gr(r, i), gr(t, i), i), re = !0, Z(e, a));
};
L.minus = L.sub = function(t) {
  var e = this;
  return t = new e.constructor(t), e.s == t.s ? tm(e, t) : Qy(e, (t.s = -t.s, t));
};
L.modulo = L.mod = function(t) {
  var e, r = this, n = r.constructor, a = n.precision;
  if (t = new n(t), !t.s) throw Error(Pe + "NaN");
  return r.s ? (re = !1, e = Ke(r, t, 0, 1).times(t), re = !0, r.minus(e)) : Z(new n(r), a);
};
L.naturalExponential = L.exp = function() {
  return em(this);
};
L.naturalLogarithm = L.ln = function() {
  return gr(this);
};
L.negated = L.neg = function() {
  var t = new this.constructor(this);
  return t.s = -t.s || 0, t;
};
L.plus = L.add = function(t) {
  var e = this;
  return t = new e.constructor(t), e.s == t.s ? Qy(e, t) : tm(e, (t.s = -t.s, t));
};
L.precision = L.sd = function(t) {
  var e, r, n, a = this;
  if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error(ft + t);
  if (e = ue(a) + 1, n = a.d.length - 1, r = n * Q + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return t && e > r ? e : r;
};
L.squareRoot = L.sqrt = function() {
  var t, e, r, n, a, i, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(Pe + "NaN");
  }
  for (t = ue(u), re = !1, a = Math.sqrt(+u), a == 0 || a == 1 / 0 ? (e = De(u.d), (e.length + t) % 2 == 0 && (e += "0"), a = Math.sqrt(e), t = Ut((t + 1) / 2) - (t < 0 || t % 2), a == 1 / 0 ? e = "5e" + t : (e = a.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + t), n = new s(e)) : n = new s(a.toString()), r = s.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(Ke(u, i, o + 2)).times(0.5), De(i.d).slice(0, o) === (e = De(n.d)).slice(0, o)) {
      if (e = e.slice(o - 3, o + 1), a == o && e == "4999") {
        if (Z(i, r + 1, 0), i.times(i).eq(u)) {
          n = i;
          break;
        }
      } else if (e != "9999")
        break;
      o += 4;
    }
  return re = !0, Z(n, r);
};
L.times = L.mul = function(t) {
  var e, r, n, a, i, o, u, s, c, f = this, l = f.constructor, p = f.d, v = (t = new l(t)).d;
  if (!f.s || !t.s) return new l(0);
  for (t.s *= f.s, r = f.e + t.e, s = p.length, c = v.length, s < c && (i = p, p = v, v = i, o = s, s = c, c = o), i = [], o = s + c, n = o; n--; ) i.push(0);
  for (n = c; --n >= 0; ) {
    for (e = 0, a = s + n; a > n; )
      u = i[a] + v[n] * p[a - n - 1] + e, i[a--] = u % pe | 0, e = u / pe | 0;
    i[a] = (i[a] + e) % pe | 0;
  }
  for (; !i[--o]; ) i.pop();
  return e ? ++r : i.shift(), t.d = i, t.e = r, re ? Z(t, l.precision) : t;
};
L.toDecimalPlaces = L.todp = function(t, e) {
  var r = this, n = r.constructor;
  return r = new n(r), t === void 0 ? r : (Be(t, 0, Ht), e === void 0 ? e = n.rounding : Be(e, 0, 8), Z(r, t + ue(r) + 1, e));
};
L.toExponential = function(t, e) {
  var r, n = this, a = n.constructor;
  return t === void 0 ? r = vt(n, !0) : (Be(t, 0, Ht), e === void 0 ? e = a.rounding : Be(e, 0, 8), n = Z(new a(n), t + 1, e), r = vt(n, !0, t + 1)), r;
};
L.toFixed = function(t, e) {
  var r, n, a = this, i = a.constructor;
  return t === void 0 ? vt(a) : (Be(t, 0, Ht), e === void 0 ? e = i.rounding : Be(e, 0, 8), n = Z(new i(a), t + ue(a) + 1, e), r = vt(n.abs(), !1, t + ue(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
L.toInteger = L.toint = function() {
  var t = this, e = t.constructor;
  return Z(new e(t), ue(t) + 1, e.rounding);
};
L.toNumber = function() {
  return +this;
};
L.toPower = L.pow = function(t) {
  var e, r, n, a, i, o, u = this, s = u.constructor, c = 12, f = +(t = new s(t));
  if (!t.s) return new s(Oe);
  if (u = new s(u), !u.s) {
    if (t.s < 1) throw Error(Pe + "Infinity");
    return u;
  }
  if (u.eq(Oe)) return u;
  if (n = s.precision, t.eq(Oe)) return Z(u, n);
  if (e = t.e, r = t.d.length - 1, o = e >= r, i = u.s, o) {
    if ((r = f < 0 ? -f : f) <= Jy) {
      for (a = new s(Oe), e = Math.ceil(n / Q + 4), re = !1; r % 2 && (a = a.times(u), ev(a.d, e)), r = Ut(r / 2), r !== 0; )
        u = u.times(u), ev(u.d, e);
      return re = !0, t.s < 0 ? new s(Oe).div(a) : Z(a, n);
    }
  } else if (i < 0) throw Error(Pe + "NaN");
  return i = i < 0 && t.d[Math.max(e, r)] & 1 ? -1 : 1, u.s = 1, re = !1, a = t.times(gr(u, n + c)), re = !0, a = em(a), a.s = i, a;
};
L.toPrecision = function(t, e) {
  var r, n, a = this, i = a.constructor;
  return t === void 0 ? (r = ue(a), n = vt(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Be(t, 1, Ht), e === void 0 ? e = i.rounding : Be(e, 0, 8), a = Z(new i(a), t, e), r = ue(a), n = vt(a, t <= r || r <= i.toExpNeg, t)), n;
};
L.toSignificantDigits = L.tosd = function(t, e) {
  var r = this, n = r.constructor;
  return t === void 0 ? (t = n.precision, e = n.rounding) : (Be(t, 1, Ht), e === void 0 ? e = n.rounding : Be(e, 0, 8)), Z(new n(r), t, e);
};
L.toString = L.valueOf = L.val = L.toJSON = L[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var t = this, e = ue(t), r = t.constructor;
  return vt(t, e <= r.toExpNeg || e >= r.toExpPos);
};
function Qy(t, e) {
  var r, n, a, i, o, u, s, c, f = t.constructor, l = f.precision;
  if (!t.s || !e.s)
    return e.s || (e = new f(t)), re ? Z(e, l) : e;
  if (s = t.d, c = e.d, o = t.e, a = e.e, s = s.slice(), i = o - a, i) {
    for (i < 0 ? (n = s, i = -i, u = c.length) : (n = c, a = o, u = s.length), o = Math.ceil(l / Q), u = o > u ? o + 1 : u + 1, i > u && (i = u, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, i = c.length, u - i < 0 && (i = u, n = c, c = s, s = n), r = 0; i; )
    r = (s[--i] = s[i] + c[i] + r) / pe | 0, s[i] %= pe;
  for (r && (s.unshift(r), ++a), u = s.length; s[--u] == 0; ) s.pop();
  return e.d = s, e.e = a, re ? Z(e, l) : e;
}
function Be(t, e, r) {
  if (t !== ~~t || t < e || t > r)
    throw Error(ft + t);
}
function De(t) {
  var e, r, n, a = t.length - 1, i = "", o = t[0];
  if (a > 0) {
    for (i += o, e = 1; e < a; e++)
      n = t[e] + "", r = Q - n.length, r && (i += Xe(r)), i += n;
    o = t[e], n = o + "", r = Q - n.length, r && (i += Xe(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var Ke = /* @__PURE__ */ (function() {
  function t(n, a) {
    var i, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      i = n[u] * a + o, n[u] = i % pe | 0, o = i / pe | 0;
    return o && n.unshift(o), n;
  }
  function e(n, a, i, o) {
    var u, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (u = s = 0; u < i; u++)
        if (n[u] != a[u]) {
          s = n[u] > a[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * pe + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var u, s, c, f, l, p, v, m, h, d, g, O, w, S, y, b, x, A, P = n.constructor, I = n.s == a.s ? 1 : -1, _ = n.d, T = a.d;
    if (!n.s) return new P(n);
    if (!a.s) throw Error(Pe + "Division by zero");
    for (s = n.e - a.e, x = T.length, y = _.length, v = new P(I), m = v.d = [], c = 0; T[c] == (_[c] || 0); ) ++c;
    if (T[c] > (_[c] || 0) && --s, i == null ? O = i = P.precision : o ? O = i + (ue(n) - ue(a)) + 1 : O = i, O < 0) return new P(0);
    if (O = O / Q + 2 | 0, c = 0, x == 1)
      for (f = 0, T = T[0], O++; (c < y || f) && O--; c++)
        w = f * pe + (_[c] || 0), m[c] = w / T | 0, f = w % T | 0;
    else {
      for (f = pe / (T[0] + 1) | 0, f > 1 && (T = t(T, f), _ = t(_, f), x = T.length, y = _.length), S = x, h = _.slice(0, x), d = h.length; d < x; ) h[d++] = 0;
      A = T.slice(), A.unshift(0), b = T[0], T[1] >= pe / 2 && ++b;
      do
        f = 0, u = e(T, h, x, d), u < 0 ? (g = h[0], x != d && (g = g * pe + (h[1] || 0)), f = g / b | 0, f > 1 ? (f >= pe && (f = pe - 1), l = t(T, f), p = l.length, d = h.length, u = e(l, h, p, d), u == 1 && (f--, r(l, x < p ? A : T, p))) : (f == 0 && (u = f = 1), l = T.slice()), p = l.length, p < d && l.unshift(0), r(h, l, d), u == -1 && (d = h.length, u = e(T, h, x, d), u < 1 && (f++, r(h, x < d ? A : T, d))), d = h.length) : u === 0 && (f++, h = [0]), m[c++] = f, u && h[0] ? h[d++] = _[S] || 0 : (h = [_[S]], d = 1);
      while ((S++ < y || h[0] !== void 0) && O--);
    }
    return m[0] || m.shift(), v.e = s, Z(v, o ? i + ue(v) + 1 : i);
  };
})();
function em(t, e) {
  var r, n, a, i, o, u, s = 0, c = 0, f = t.constructor, l = f.precision;
  if (ue(t) > 16) throw Error(Dc + ue(t));
  if (!t.s) return new f(Oe);
  for (re = !1, u = l, o = new f(0.03125); t.abs().gte(0.1); )
    t = t.times(o), c += 5;
  for (n = Math.log(st(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = a = i = new f(Oe), f.precision = u; ; ) {
    if (a = Z(a.times(t), u), r = r.times(++s), o = i.plus(Ke(a, r, u)), De(o.d).slice(0, u) === De(i.d).slice(0, u)) {
      for (; c--; ) i = Z(i.times(i), u);
      return f.precision = l, e == null ? (re = !0, Z(i, l)) : i;
    }
    i = o;
  }
}
function ue(t) {
  for (var e = t.e * Q, r = t.d[0]; r >= 10; r /= 10) e++;
  return e;
}
function Su(t, e, r) {
  if (e > t.LN10.sd())
    throw re = !0, r && (t.precision = r), Error(Pe + "LN10 precision limit exceeded");
  return Z(new t(t.LN10), e);
}
function Xe(t) {
  for (var e = ""; t--; ) e += "0";
  return e;
}
function gr(t, e) {
  var r, n, a, i, o, u, s, c, f, l = 1, p = 10, v = t, m = v.d, h = v.constructor, d = h.precision;
  if (v.s < 1) throw Error(Pe + (v.s ? "NaN" : "-Infinity"));
  if (v.eq(Oe)) return new h(0);
  if (e == null ? (re = !1, c = d) : c = e, v.eq(10))
    return e == null && (re = !0), Su(h, c);
  if (c += p, h.precision = c, r = De(m), n = r.charAt(0), i = ue(v), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      v = v.times(t), r = De(v.d), n = r.charAt(0), l++;
    i = ue(v), n > 1 ? (v = new h("0." + r), i++) : v = new h(n + "." + r.slice(1));
  } else
    return s = Su(h, c + 2, d).times(i + ""), v = gr(new h(n + "." + r.slice(1)), c - p).plus(s), h.precision = d, e == null ? (re = !0, Z(v, d)) : v;
  for (u = o = v = Ke(v.minus(Oe), v.plus(Oe), c), f = Z(v.times(v), c), a = 3; ; ) {
    if (o = Z(o.times(f), c), s = u.plus(Ke(o, new h(a), c)), De(s.d).slice(0, c) === De(u.d).slice(0, c))
      return u = u.times(2), i !== 0 && (u = u.plus(Su(h, c + 2, d).times(i + ""))), u = Ke(u, new h(l), c), h.precision = d, e == null ? (re = !0, Z(u, d)) : u;
    u = s, a += 2;
  }
}
function Qd(t, e) {
  var r, n, a;
  for ((r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), n = 0; e.charCodeAt(n) === 48; ) ++n;
  for (a = e.length; e.charCodeAt(a - 1) === 48; ) --a;
  if (e = e.slice(n, a), e) {
    if (a -= n, r = r - n - 1, t.e = Ut(r / Q), t.d = [], n = (r + 1) % Q, r < 0 && (n += Q), n < a) {
      for (n && t.d.push(+e.slice(0, n)), a -= Q; n < a; ) t.d.push(+e.slice(n, n += Q));
      e = e.slice(n), n = Q - e.length;
    } else
      n -= a;
    for (; n--; ) e += "0";
    if (t.d.push(+e), re && (t.e > pn || t.e < -pn)) throw Error(Dc + r);
  } else
    t.s = 0, t.e = 0, t.d = [0];
  return t;
}
function Z(t, e, r) {
  var n, a, i, o, u, s, c, f, l = t.d;
  for (o = 1, i = l[0]; i >= 10; i /= 10) o++;
  if (n = e - o, n < 0)
    n += Q, a = e, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / Q), i = l.length, f >= i) return t;
    for (c = i = l[f], o = 1; i >= 10; i /= 10) o++;
    n %= Q, a = n - Q + o;
  }
  if (r !== void 0 && (i = st(10, o - a - 1), u = c / i % 10 | 0, s = e < 0 || l[f + 1] !== void 0 || c % i, s = r < 4 ? (u || s) && (r == 0 || r == (t.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / st(10, o - a) : 0 : l[f - 1]) % 10 & 1 || r == (t.s < 0 ? 8 : 7))), e < 1 || !l[0])
    return s ? (i = ue(t), l.length = 1, e = e - i - 1, l[0] = st(10, (Q - e % Q) % Q), t.e = Ut(-e / Q) || 0) : (l.length = 1, l[0] = t.e = t.s = 0), t;
  if (n == 0 ? (l.length = f, i = 1, f--) : (l.length = f + 1, i = st(10, Q - n), l[f] = a > 0 ? (c / st(10, o - a) % st(10, a) | 0) * i : 0), s)
    for (; ; )
      if (f == 0) {
        (l[0] += i) == pe && (l[0] = 1, ++t.e);
        break;
      } else {
        if (l[f] += i, l[f] != pe) break;
        l[f--] = 0, i = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (re && (t.e > pn || t.e < -pn))
    throw Error(Dc + ue(t));
  return t;
}
function tm(t, e) {
  var r, n, a, i, o, u, s, c, f, l, p = t.constructor, v = p.precision;
  if (!t.s || !e.s)
    return e.s ? e.s = -e.s : e = new p(t), re ? Z(e, v) : e;
  if (s = t.d, l = e.d, n = e.e, c = t.e, s = s.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = s, o = -o, u = l.length) : (r = l, n = c, u = s.length), a = Math.max(Math.ceil(v / Q), u) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = s.length, u = l.length, f = a < u, f && (u = a), a = 0; a < u; a++)
      if (s[a] != l[a]) {
        f = s[a] < l[a];
        break;
      }
    o = 0;
  }
  for (f && (r = s, s = l, l = r, e.s = -e.s), u = s.length, a = l.length - u; a > 0; --a) s[u++] = 0;
  for (a = l.length; a > o; ) {
    if (s[--a] < l[a]) {
      for (i = a; i && s[--i] === 0; ) s[i] = pe - 1;
      --s[i], s[a] += pe;
    }
    s[a] -= l[a];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (e.d = s, e.e = n, re ? Z(e, v) : e) : new p(0);
}
function vt(t, e, r) {
  var n, a = ue(t), i = De(t.d), o = i.length;
  return e ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Xe(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + Xe(-a - 1) + i, r && (n = r - o) > 0 && (i += Xe(n))) : a >= o ? (i += Xe(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + Xe(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += Xe(n))), t.s < 0 ? "-" + i : i;
}
function ev(t, e) {
  if (t.length > e)
    return t.length = e, !0;
}
function rm(t) {
  var e, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (o.constructor = a, i instanceof a) {
      o.s = i.s, o.e = i.e, o.d = (i = i.d) ? i.slice() : i;
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0)
        throw Error(ft + i);
      if (i > 0)
        o.s = 1;
      else if (i < 0)
        i = -i, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (i === ~~i && i < 1e7) {
        o.e = 0, o.d = [i];
        return;
      }
      return Qd(o, i.toString());
    } else if (typeof i != "string")
      throw Error(ft + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, gS.test(i)) Qd(o, i);
    else throw Error(ft + i);
  }
  if (a.prototype = L, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = rm, a.config = a.set = bS, t === void 0 && (t = {}), t)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], e = 0; e < n.length; ) t.hasOwnProperty(r = n[e++]) || (t[r] = this[r]);
  return a.config(t), a;
}
function bS(t) {
  if (!t || typeof t != "object")
    throw Error(Pe + "Object expected");
  var e, r, n, a = [
    "precision",
    1,
    Ht,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (e = 0; e < a.length; e += 3)
    if ((n = t[r = a[e]]) !== void 0)
      if (Ut(n) === n && n >= a[e + 1] && n <= a[e + 2]) this[r] = n;
      else throw Error(ft + r + ": " + n);
  if ((n = t[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(ft + r + ": " + n);
  return this;
}
var qc = rm(mS);
Oe = new qc(1);
const Y = qc;
function OS(t) {
  return AS(t) || SS(t) || xS(t) || wS();
}
function wS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xS(t, e) {
  if (t) {
    if (typeof t == "string") return ws(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ws(t, e);
  }
}
function SS(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function AS(t) {
  if (Array.isArray(t)) return ws(t);
}
function ws(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
var PS = function(e) {
  return e;
}, nm = {}, am = function(e) {
  return e === nm;
}, tv = function(e) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && am(arguments.length <= 0 ? void 0 : arguments[0]) ? r : e.apply(void 0, arguments);
  };
}, _S = function t(e, r) {
  return e === 1 ? r : tv(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(u) {
      return u !== nm;
    }).length;
    return o >= e ? r.apply(void 0, a) : t(e - o, tv(function() {
      for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
        s[c] = arguments[c];
      var f = a.map(function(l) {
        return am(l) ? s.shift() : l;
      });
      return r.apply(void 0, OS(f).concat(s));
    }));
  });
}, Yn = function(e) {
  return _S(e.length, e);
}, xs = function(e, r) {
  for (var n = [], a = e; a < r; ++a)
    n[a - e] = a;
  return n;
}, ES = Yn(function(t, e) {
  return Array.isArray(e) ? e.map(t) : Object.keys(e).map(function(r) {
    return e[r];
  }).map(t);
}), TS = function() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  if (!r.length)
    return PS;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(u, s) {
      return s(u);
    }, i.apply(void 0, arguments));
  };
}, Ss = function(e) {
  return Array.isArray(e) ? e.reverse() : e.split("").reverse.join("");
}, im = function(e) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(u, s) {
      return u === r[s];
    }) || (r = i, n = e.apply(void 0, i)), n;
  };
};
function jS(t) {
  var e;
  return t === 0 ? e = 1 : e = Math.floor(new Y(t).abs().log(10).toNumber()) + 1, e;
}
function IS(t, e, r) {
  for (var n = new Y(t), a = 0, i = []; n.lt(e) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var MS = Yn(function(t, e, r) {
  var n = +t, a = +e;
  return n + r * (a - n);
}), CS = Yn(function(t, e, r) {
  var n = e - +t;
  return n = n || 1 / 0, (r - t) / n;
}), $S = Yn(function(t, e, r) {
  var n = e - +t;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - t) / n));
});
const Zn = {
  rangeStep: IS,
  getDigitCount: jS,
  interpolateNumber: MS,
  uninterpolateNumber: CS,
  uninterpolateTruncation: $S
};
function As(t) {
  return qS(t) || DS(t) || om(t) || RS();
}
function RS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DS(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function qS(t) {
  if (Array.isArray(t)) return Ps(t);
}
function br(t, e) {
  return kS(t) || BS(t, e) || om(t, e) || NS();
}
function NS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function om(t, e) {
  if (t) {
    if (typeof t == "string") return Ps(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ps(t, e);
  }
}
function Ps(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function BS(t, e) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = t[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(e && r.length === e)); n = !0)
        ;
    } catch (s) {
      a = !0, i = s;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function kS(t) {
  if (Array.isArray(t)) return t;
}
function um(t) {
  var e = br(t, 2), r = e[0], n = e[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function sm(t, e, r) {
  if (t.lte(0))
    return new Y(0);
  var n = Zn.getDigitCount(t.toNumber()), a = new Y(10).pow(n), i = t.div(a), o = n !== 1 ? 0.05 : 0.1, u = new Y(Math.ceil(i.div(o).toNumber())).add(r).mul(o), s = u.mul(a);
  return e ? s : new Y(Math.ceil(s));
}
function LS(t, e, r) {
  var n = 1, a = new Y(t);
  if (!a.isint() && r) {
    var i = Math.abs(t);
    i < 1 ? (n = new Y(10).pow(Zn.getDigitCount(t) - 1), a = new Y(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new Y(Math.floor(t)));
  } else t === 0 ? a = new Y(Math.floor((e - 1) / 2)) : r || (a = new Y(Math.floor(t)));
  var o = Math.floor((e - 1) / 2), u = TS(ES(function(s) {
    return a.add(new Y(s - o).mul(n)).toNumber();
  }), xs);
  return u(0, e);
}
function cm(t, e, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((e - t) / (r - 1)))
    return {
      step: new Y(0),
      tickMin: new Y(0),
      tickMax: new Y(0)
    };
  var i = sm(new Y(e).sub(t).div(r - 1), n, a), o;
  t <= 0 && e >= 0 ? o = new Y(0) : (o = new Y(t).add(e).div(2), o = o.sub(new Y(o).mod(i)));
  var u = Math.ceil(o.sub(t).div(i).toNumber()), s = Math.ceil(new Y(e).sub(o).div(i).toNumber()), c = u + s + 1;
  return c > r ? cm(t, e, r, n, a + 1) : (c < r && (s = e > 0 ? s + (r - c) : s, u = e > 0 ? u : u + (r - c)), {
    step: i,
    tickMin: o.sub(new Y(u).mul(i)),
    tickMax: o.add(new Y(s).mul(i))
  });
}
function FS(t) {
  var e = br(t, 2), r = e[0], n = e[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), u = um([r, n]), s = br(u, 2), c = s[0], f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(As(xs(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(As(xs(0, a - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? Ss(l) : l;
  }
  if (c === f)
    return LS(c, a, i);
  var p = cm(c, f, o, i), v = p.step, m = p.tickMin, h = p.tickMax, d = Zn.rangeStep(m, h.add(new Y(0.1).mul(v)), v);
  return r > n ? Ss(d) : d;
}
function WS(t, e) {
  var r = br(t, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = um([n, a]), u = br(o, 2), s = u[0], c = u[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (s === c)
    return [s];
  var f = Math.max(e, 2), l = sm(new Y(c).sub(s).div(f - 1), i, 0), p = [].concat(As(Zn.rangeStep(new Y(s), new Y(c).sub(new Y(0.99).mul(l)), l)), [c]);
  return n > a ? Ss(p) : p;
}
var zS = im(FS), KS = im(WS), GS = "Invariant failed";
function ht(t, e) {
  throw new Error(GS);
}
var HS = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function $t(t) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $t(t);
}
function dn() {
  return dn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, dn.apply(this, arguments);
}
function US(t, e) {
  return ZS(t) || YS(t, e) || VS(t, e) || XS();
}
function XS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VS(t, e) {
  if (t) {
    if (typeof t == "string") return rv(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rv(t, e);
  }
}
function rv(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function YS(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function ZS(t) {
  if (Array.isArray(t)) return t;
}
function JS(t, e) {
  if (t == null) return {};
  var r = QS(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function QS(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function eA(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function tA(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, pm(n.key), n);
  }
}
function rA(t, e, r) {
  return e && tA(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function nA(t, e, r) {
  return e = vn(e), aA(t, lm() ? Reflect.construct(e, r || [], vn(t).constructor) : e.apply(t, r));
}
function aA(t, e) {
  if (e && ($t(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return iA(t);
}
function iA(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function lm() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lm = function() {
    return !!t;
  })();
}
function vn(t) {
  return vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vn(t);
}
function oA(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _s(t, e);
}
function _s(t, e) {
  return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _s(t, e);
}
function fm(t, e, r) {
  return e = pm(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function pm(t) {
  var e = uA(t, "string");
  return $t(e) == "symbol" ? e : e + "";
}
function uA(t, e) {
  if ($t(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if ($t(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Jn = /* @__PURE__ */ (function(t) {
  function e() {
    return eA(this, e), nA(this, e, arguments);
  }
  return oA(e, t), rA(e, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, u = n.dataKey, s = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, p = JS(n, HS), v = te(p, !1);
      this.props.direction === "x" && f.type !== "number" && ht();
      var m = s.map(function(h) {
        var d = c(h, u), g = d.x, O = d.y, w = d.value, S = d.errorVal;
        if (!S)
          return null;
        var y = [], b, x;
        if (Array.isArray(S)) {
          var A = US(S, 2);
          b = A[0], x = A[1];
        } else
          b = x = S;
        if (i === "vertical") {
          var P = f.scale, I = O + a, _ = I + o, T = I - o, M = P(w - b), $ = P(w + x);
          y.push({
            x1: $,
            y1: _,
            x2: $,
            y2: T
          }), y.push({
            x1: M,
            y1: I,
            x2: $,
            y2: I
          }), y.push({
            x1: M,
            y1: _,
            x2: M,
            y2: T
          });
        } else if (i === "horizontal") {
          var C = l.scale, R = g + a, D = R - o, N = R + o, F = C(w - b), W = C(w + x);
          y.push({
            x1: D,
            y1: W,
            x2: N,
            y2: W
          }), y.push({
            x1: R,
            y1: F,
            x2: R,
            y2: W
          }), y.push({
            x1: D,
            y1: F,
            x2: N,
            y2: F
          });
        }
        return /* @__PURE__ */ E.createElement(he, dn({
          className: "recharts-errorBar",
          key: "bar-".concat(y.map(function(K) {
            return "".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2);
          }))
        }, v), y.map(function(K) {
          return /* @__PURE__ */ E.createElement("line", dn({}, K, {
            key: "line-".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2)
          }));
        }));
      });
      return /* @__PURE__ */ E.createElement(he, {
        className: "recharts-errorBars"
      }, m);
    }
  }]);
})(E.Component);
fm(Jn, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
fm(Jn, "displayName", "ErrorBar");
function Or(t) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Or(t);
}
function nv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nv(Object(r), !0).forEach(function(n) {
      sA(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function sA(t, e, r) {
  return e = cA(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function cA(t) {
  var e = lA(t, "string");
  return Or(e) == "symbol" ? e : e + "";
}
function lA(t, e) {
  if (Or(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var dm = function(e) {
  var r = e.children, n = e.formattedGraphicalItems, a = e.legendWidth, i = e.legendContent, o = be(r, _t);
  if (!o)
    return null;
  var u = _t.defaultProps, s = u !== void 0 ? ot(ot({}, u), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : i === "children" ? c = (n || []).reduce(function(f, l) {
    var p = l.item, v = l.props, m = v.sectors || v.data || [];
    return f.concat(m.map(function(h) {
      return {
        type: o.props.iconType || p.props.legendType,
        value: h.name,
        color: h.fill,
        payload: h
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, p = l.type.defaultProps, v = p !== void 0 ? ot(ot({}, p), l.props) : {}, m = v.dataKey, h = v.name, d = v.legendType, g = v.hide;
    return {
      inactive: g,
      dataKey: m,
      type: s.iconType || d || "square",
      color: Nc(l),
      value: h || m,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: v
    };
  }), ot(ot(ot({}, s), _t.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function wr(t) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wr(t);
}
function av(t) {
  return vA(t) || dA(t) || pA(t) || fA();
}
function fA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pA(t, e) {
  if (t) {
    if (typeof t == "string") return Es(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Es(t, e);
  }
}
function dA(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function vA(t) {
  if (Array.isArray(t)) return Es(t);
}
function Es(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function iv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? iv(Object(r), !0).forEach(function(n) {
      Et(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : iv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Et(t, e, r) {
  return e = hA(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function hA(t) {
  var e = yA(t, "string");
  return wr(e) == "symbol" ? e : e + "";
}
function yA(t, e) {
  if (wr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Me(t, e, r) {
  return H(t) || H(e) ? r : ce(e) ? qe(t, e, r) : U(e) ? e(t) : r;
}
function cr(t, e, r, n) {
  var a = vS(t, function(u) {
    return Me(u, e);
  });
  if (r === "number") {
    var i = a.filter(function(u) {
      return B(u) || parseFloat(u);
    });
    return i.length ? [Vn(i), Xn(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(u) {
    return !H(u);
  }) : a;
  return o.map(function(u) {
    return ce(u) || u instanceof Date ? u : "";
  });
}
var mA = function(e) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var s = i.range, c = 0; c < u; c++) {
      var f = c > 0 ? a[c - 1].coordinate : a[u - 1].coordinate, l = a[c].coordinate, p = c >= u - 1 ? a[0].coordinate : a[c + 1].coordinate, v = void 0;
      if (Re(l - f) !== Re(p - l)) {
        var m = [];
        if (Re(p - l) === Re(s[1] - s[0])) {
          v = p;
          var h = l + s[1] - s[0];
          m[0] = Math.min(h, (h + f) / 2), m[1] = Math.max(h, (h + f) / 2);
        } else {
          v = f;
          var d = p + s[1] - s[0];
          m[0] = Math.min(l, (d + l) / 2), m[1] = Math.max(l, (d + l) / 2);
        }
        var g = [Math.min(l, (v + l) / 2), Math.max(l, (v + l) / 2)];
        if (e > g[0] && e <= g[1] || e >= m[0] && e <= m[1]) {
          o = a[c].index;
          break;
        }
      } else {
        var O = Math.min(f, p), w = Math.max(f, p);
        if (e > (O + l) / 2 && e <= (w + l) / 2) {
          o = a[c].index;
          break;
        }
      }
    }
  else
    for (var S = 0; S < u; S++)
      if (S === 0 && e <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S > 0 && S < u - 1 && e > (n[S].coordinate + n[S - 1].coordinate) / 2 && e <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S === u - 1 && e > (n[S].coordinate + n[S - 1].coordinate) / 2) {
        o = n[S].index;
        break;
      }
  return o;
}, Nc = function(e) {
  var r, n = e, a = n.type.displayName, i = (r = e.type) !== null && r !== void 0 && r.defaultProps ? ae(ae({}, e.type.defaultProps), e.props) : e.props, o = i.stroke, u = i.fill, s;
  switch (a) {
    case "Line":
      s = o;
      break;
    case "Area":
    case "Radar":
      s = o && o !== "none" ? o : u;
      break;
    default:
      s = u;
      break;
  }
  return s;
}, gA = function(e) {
  var r = e.barSize, n = e.totalSize, a = e.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, u = Object.keys(i), s = 0, c = u.length; s < c; s++)
    for (var f = i[u[s]].stackGroups, l = Object.keys(f), p = 0, v = l.length; p < v; p++) {
      var m = f[l[p]], h = m.items, d = m.cateAxisId, g = h.filter(function(x) {
        return ze(x.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var O = g[0].type.defaultProps, w = O !== void 0 ? ae(ae({}, O), g[0].props) : g[0].props, S = w.barSize, y = w[d];
        o[y] || (o[y] = []);
        var b = H(S) ? r : S;
        o[y].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: H(b) ? void 0 : je(b, n, 0)
        });
      }
    }
  return o;
}, bA = function(e) {
  var r = e.barGap, n = e.barCategoryGap, a = e.bandSize, i = e.sizeList, o = i === void 0 ? [] : i, u = e.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = je(r, a, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var p = !1, v = a / s, m = o.reduce(function(S, y) {
      return S + y.barSize || 0;
    }, 0);
    m += (s - 1) * c, m >= a && (m -= (s - 1) * c, c = 0), m >= a && v > 0 && (p = !0, v *= 0.9, m = s * v);
    var h = (a - m) / 2 >> 0, d = {
      offset: h - c,
      size: 0
    };
    f = o.reduce(function(S, y) {
      var b = {
        item: y.item,
        position: {
          offset: d.offset + d.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: p ? v : y.barSize
        }
      }, x = [].concat(av(S), [b]);
      return d = x[x.length - 1].position, y.stackList && y.stackList.length && y.stackList.forEach(function(A) {
        x.push({
          item: A,
          position: d
        });
      }), x;
    }, l);
  } else {
    var g = je(n, a, 0, !0);
    a - 2 * g - (s - 1) * c <= 0 && (c = 0);
    var O = (a - 2 * g - (s - 1) * c) / s;
    O > 1 && (O >>= 0);
    var w = u === +u ? Math.min(O, u) : O;
    f = o.reduce(function(S, y, b) {
      var x = [].concat(av(S), [{
        item: y.item,
        position: {
          offset: g + (O + c) * b + (O - w) / 2,
          size: w
        }
      }]);
      return y.stackList && y.stackList.length && y.stackList.forEach(function(A) {
        x.push({
          item: A,
          position: x[x.length - 1].position
        });
      }), x;
    }, l);
  }
  return f;
}, OA = function(e, r, n, a) {
  var i = n.children, o = n.width, u = n.margin, s = o - (u.left || 0) - (u.right || 0), c = dm({
    children: i,
    legendWidth: s
  });
  if (c) {
    var f = a || {}, l = f.width, p = f.height, v = c.align, m = c.verticalAlign, h = c.layout;
    if ((h === "vertical" || h === "horizontal" && m === "middle") && v !== "center" && B(e[v]))
      return ae(ae({}, e), {}, Et({}, v, e[v] + (l || 0)));
    if ((h === "horizontal" || h === "vertical" && v === "center") && m !== "middle" && B(e[m]))
      return ae(ae({}, e), {}, Et({}, m, e[m] + (p || 0)));
  }
  return e;
}, wA = function(e, r, n) {
  return H(r) ? !0 : e === "horizontal" ? r === "yAxis" : e === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, vm = function(e, r, n, a, i) {
  var o = r.props.children, u = Ie(o, Jn).filter(function(c) {
    return wA(a, i, c.props.direction);
  });
  if (u && u.length) {
    var s = u.map(function(c) {
      return c.props.dataKey;
    });
    return e.reduce(function(c, f) {
      var l = Me(f, n);
      if (H(l)) return c;
      var p = Array.isArray(l) ? [Vn(l), Xn(l)] : [l, l], v = s.reduce(function(m, h) {
        var d = Me(f, h, 0), g = p[0] - Math.abs(Array.isArray(d) ? d[0] : d), O = p[1] + Math.abs(Array.isArray(d) ? d[1] : d);
        return [Math.min(g, m[0]), Math.max(O, m[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(v[0], c[0]), Math.max(v[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, xA = function(e, r, n, a, i) {
  var o = r.map(function(u) {
    return vm(e, u, n, i, a);
  }).filter(function(u) {
    return !H(u);
  });
  return o && o.length ? o.reduce(function(u, s) {
    return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, hm = function(e, r, n, a, i) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && vm(e, s, c, a) || cr(e, c, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(s, c) {
        return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(s, c) {
    for (var f = 0, l = c.length; f < l; f++)
      u[c[f]] || (u[c[f]] = !0, s.push(c[f]));
    return s;
  }, []);
}, ym = function(e, r) {
  return e === "horizontal" && r === "xAxis" || e === "vertical" && r === "yAxis" || e === "centric" && r === "angleAxis" || e === "radial" && r === "radiusAxis";
}, Tj = function(e, r, n, a) {
  if (a)
    return e.map(function(s) {
      return s.coordinate;
    });
  var i, o, u = e.map(function(s) {
    return s.coordinate === r && (i = !0), s.coordinate === n && (o = !0), s.coordinate;
  });
  return i || u.push(r), o || u.push(n), u;
}, or = function(e, r, n) {
  if (!e) return null;
  var a = e.scale, i = e.duplicateDomain, o = e.type, u = e.range, s = e.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, c = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / s : 0;
  if (c = e.axisType === "angleAxis" && u?.length >= 2 ? Re(u[0] - u[1]) * 2 * c : c, r && (e.ticks || e.niceTicks)) {
    var f = (e.ticks || e.niceTicks).map(function(l) {
      var p = i ? i.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(p) + c,
        value: l,
        offset: c
      };
    });
    return f.filter(function(l) {
      return !Fr(l.coordinate);
    });
  }
  return e.isCategorical && e.categoricalDomain ? e.categoricalDomain.map(function(l, p) {
    return {
      coordinate: a(l) + c,
      value: l,
      index: p,
      offset: c
    };
  }) : a.ticks && !n ? a.ticks(e.tickCount).map(function(l) {
    return {
      coordinate: a(l) + c,
      value: l,
      offset: c
    };
  }) : a.domain().map(function(l, p) {
    return {
      coordinate: a(l) + c,
      value: i ? i[l] : l,
      index: p,
      offset: c
    };
  });
}, Au = /* @__PURE__ */ new WeakMap(), Zr = function(e, r) {
  if (typeof r != "function")
    return e;
  Au.has(e) || Au.set(e, /* @__PURE__ */ new WeakMap());
  var n = Au.get(e);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    e.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, mm = function(e, r, n) {
  var a = e.scale, i = e.type, o = e.layout, u = e.axisType;
  if (a === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: Zu(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: Qu(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: sr(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: Zu(),
      realScaleType: "band"
    } : {
      scale: Qu(),
      realScaleType: "linear"
    };
  if (dt(a)) {
    var s = "scale".concat(Fn(a));
    return {
      scale: (Kd[s] || sr)(),
      realScaleType: Kd[s] ? s : "point"
    };
  }
  return U(a) ? {
    scale: a
  } : {
    scale: sr(),
    realScaleType: "point"
  };
}, ov = 1e-4, gm = function(e) {
  var r = e.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = e.range(), i = Math.min(a[0], a[1]) - ov, o = Math.max(a[0], a[1]) + ov, u = e(r[0]), s = e(r[n - 1]);
    (u < i || u > o || s < i || s > o) && e.domain([r[0], r[n - 1]]);
  }
}, SA = function(e, r) {
  if (!e)
    return null;
  for (var n = 0, a = e.length; n < a; n++)
    if (e[n].item === r)
      return e[n].position;
  return null;
}, AA = function(e, r) {
  if (!r || r.length !== 2 || !B(r[0]) || !B(r[1]))
    return e;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [e[0], e[1]];
  return (!B(e[0]) || e[0] < n) && (i[0] = n), (!B(e[1]) || e[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, PA = function(e) {
  var r = e.length;
  if (!(r <= 0))
    for (var n = 0, a = e[0].length; n < a; ++n)
      for (var i = 0, o = 0, u = 0; u < r; ++u) {
        var s = Fr(e[u][n][1]) ? e[u][n][0] : e[u][n][1];
        s >= 0 ? (e[u][n][0] = i, e[u][n][1] = i + s, i = e[u][n][1]) : (e[u][n][0] = o, e[u][n][1] = o + s, o = e[u][n][1]);
      }
}, _A = function(e) {
  var r = e.length;
  if (!(r <= 0))
    for (var n = 0, a = e[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var u = Fr(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
        u >= 0 ? (e[o][n][0] = i, e[o][n][1] = i + u, i = e[o][n][1]) : (e[o][n][0] = 0, e[o][n][1] = 0);
      }
}, EA = {
  sign: PA,
  // @ts-expect-error definitelytyped types are incorrect
  expand: x0,
  // @ts-expect-error definitelytyped types are incorrect
  none: Tt,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: S0,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: A0,
  positive: _A
}, TA = function(e, r, n) {
  var a = r.map(function(u) {
    return u.props.dataKey;
  }), i = EA[n], o = w0().keys(a).value(function(u, s) {
    return +Me(u, s, 0);
  }).order(cs).offset(i);
  return o(e);
}, jA = function(e, r, n, a, i, o) {
  if (!e)
    return null;
  var u = o ? r.reverse() : r, s = {}, c = u.reduce(function(l, p) {
    var v, m = (v = p.type) !== null && v !== void 0 && v.defaultProps ? ae(ae({}, p.type.defaultProps), p.props) : p.props, h = m.stackId, d = m.hide;
    if (d)
      return l;
    var g = m[n], O = l[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (ce(h)) {
      var w = O.stackGroups[h] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      w.items.push(p), O.hasStack = !0, O.stackGroups[h] = w;
    } else
      O.stackGroups[Ln("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [p]
      };
    return ae(ae({}, l), {}, Et({}, g, O));
  }, s), f = {};
  return Object.keys(c).reduce(function(l, p) {
    var v = c[p];
    if (v.hasStack) {
      var m = {};
      v.stackGroups = Object.keys(v.stackGroups).reduce(function(h, d) {
        var g = v.stackGroups[d];
        return ae(ae({}, h), {}, Et({}, d, {
          numericAxisId: n,
          cateAxisId: a,
          items: g.items,
          stackedData: TA(e, g.items, i)
        }));
      }, m);
    }
    return ae(ae({}, l), {}, Et({}, p, v));
  }, f);
}, bm = function(e, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, u = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = e.domain();
    if (!c.length)
      return null;
    var f = zS(c, i, u);
    return e.domain([Vn(f), Xn(f)]), {
      niceTicks: f
    };
  }
  if (i && a === "number") {
    var l = e.domain(), p = KS(l, i, u);
    return {
      niceTicks: p
    };
  }
  return null;
};
function jj(t) {
  var e = t.axis, r = t.ticks, n = t.bandSize, a = t.entry, i = t.index, o = t.dataKey;
  if (e.type === "category") {
    if (!e.allowDuplicatedCategory && e.dataKey && !H(a[e.dataKey])) {
      var u = an(r, "value", a[e.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var s = Me(a, H(o) ? e.dataKey : o);
  return H(s) ? null : e.scale(s);
}
var uv = function(e) {
  var r = e.axis, n = e.ticks, a = e.offset, i = e.bandSize, o = e.entry, u = e.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + a : null;
  var s = Me(o, r.dataKey, r.domain[u]);
  return H(s) ? null : r.scale(s) - i / 2 + a;
}, IA = function(e) {
  var r = e.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, MA = function(e, r) {
  var n, a = (n = e.type) !== null && n !== void 0 && n.defaultProps ? ae(ae({}, e.type.defaultProps), e.props) : e.props, i = a.stackId;
  if (ce(i)) {
    var o = r[i];
    if (o) {
      var u = o.items.indexOf(e);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, CA = function(e) {
  return e.reduce(function(r, n) {
    return [Vn(n.concat([r[0]]).filter(B)), Xn(n.concat([r[1]]).filter(B))];
  }, [1 / 0, -1 / 0]);
}, Om = function(e, r, n) {
  return Object.keys(e).reduce(function(a, i) {
    var o = e[i], u = o.stackedData, s = u.reduce(function(c, f) {
      var l = CA(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], a[0]), Math.max(s[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, sv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, cv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ts = function(e, r, n) {
  if (U(e))
    return e(r, n);
  if (!Array.isArray(e))
    return r;
  var a = [];
  if (B(e[0]))
    a[0] = n ? e[0] : Math.min(e[0], r[0]);
  else if (sv.test(e[0])) {
    var i = +sv.exec(e[0])[1];
    a[0] = r[0] - i;
  } else U(e[0]) ? a[0] = e[0](r[0]) : a[0] = r[0];
  if (B(e[1]))
    a[1] = n ? e[1] : Math.max(e[1], r[1]);
  else if (cv.test(e[1])) {
    var o = +cv.exec(e[1])[1];
    a[1] = r[1] + o;
  } else U(e[1]) ? a[1] = e[1](r[1]) : a[1] = r[1];
  return a;
}, hn = function(e, r, n) {
  if (e && e.scale && e.scale.bandwidth) {
    var a = e.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (e && r && r.length >= 2) {
    for (var i = _c(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, s = i.length; u < s; u++) {
      var c = i[u], f = i[u - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, lv = function(e, r, n) {
  return !e || !e.length || Rc(e, qe(n, "type.defaultProps.domain")) ? r : e;
}, wm = function(e, r) {
  var n = e.type.defaultProps ? ae(ae({}, e.type.defaultProps), e.props) : e.props, a = n.dataKey, i = n.name, o = n.unit, u = n.formatter, s = n.tooltipType, c = n.chartType, f = n.hide;
  return ae(ae({}, te(e, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: u,
    name: i || a,
    color: Nc(e),
    value: Me(r, a),
    type: s,
    payload: r,
    chartType: c,
    hide: f
  });
};
function xr(t) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xr(t);
}
function fv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fv(Object(r), !0).forEach(function(n) {
      xm(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function xm(t, e, r) {
  return e = $A(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function $A(t) {
  var e = RA(t, "string");
  return xr(e) == "symbol" ? e : e + "";
}
function RA(t, e) {
  if (xr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function DA(t, e) {
  return kA(t) || BA(t, e) || NA(t, e) || qA();
}
function qA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NA(t, e) {
  if (t) {
    if (typeof t == "string") return pv(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pv(t, e);
  }
}
function pv(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function BA(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function kA(t) {
  if (Array.isArray(t)) return t;
}
var yn = Math.PI / 180, LA = function(e) {
  return e * 180 / Math.PI;
}, ve = function(e, r, n, a) {
  return {
    x: e + Math.cos(-yn * a) * n,
    y: r + Math.sin(-yn * a) * n
  };
}, FA = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(e - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, Ij = function(e, r, n, a, i) {
  var o = e.width, u = e.height, s = e.startAngle, c = e.endAngle, f = je(e.cx, o, o / 2), l = je(e.cy, u, u / 2), p = FA(o, u, n), v = je(e.innerRadius, p, 0), m = je(e.outerRadius, p, p * 0.8), h = Object.keys(r);
  return h.reduce(function(d, g) {
    var O = r[g], w = O.domain, S = O.reversed, y;
    if (H(O.range))
      a === "angleAxis" ? y = [s, c] : a === "radiusAxis" && (y = [v, m]), S && (y = [y[1], y[0]]);
    else {
      y = O.range;
      var b = y, x = DA(b, 2);
      s = x[0], c = x[1];
    }
    var A = mm(O, i), P = A.realScaleType, I = A.scale;
    I.domain(w).range(y), gm(I);
    var _ = bm(I, Fe(Fe({}, O), {}, {
      realScaleType: P
    })), T = Fe(Fe(Fe({}, O), _), {}, {
      range: y,
      radius: m,
      realScaleType: P,
      scale: I,
      cx: f,
      cy: l,
      innerRadius: v,
      outerRadius: m,
      startAngle: s,
      endAngle: c
    });
    return Fe(Fe({}, d), {}, xm({}, g, T));
  }, {});
}, WA = function(e, r) {
  var n = e.x, a = e.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, zA = function(e, r) {
  var n = e.x, a = e.y, i = r.cx, o = r.cy, u = WA({
    x: n,
    y: a
  }, {
    x: i,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var s = (n - i) / u, c = Math.acos(s);
  return a > o && (c = 2 * Math.PI - c), {
    radius: u,
    angle: LA(c),
    angleInRadian: c
  };
}, KA = function(e) {
  var r = e.startAngle, n = e.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, GA = function(e, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), u = Math.min(i, o);
  return e + u * 360;
}, dv = function(e, r) {
  var n = e.x, a = e.y, i = zA({
    x: n,
    y: a
  }, r), o = i.radius, u = i.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = KA(r), l = f.startAngle, p = f.endAngle, v = u, m;
  if (l <= p) {
    for (; v > p; )
      v -= 360;
    for (; v < l; )
      v += 360;
    m = v >= l && v <= p;
  } else {
    for (; v > l; )
      v -= 360;
    for (; v < p; )
      v += 360;
    m = v >= p && v <= l;
  }
  return m ? Fe(Fe({}, r), {}, {
    radius: o,
    angle: GA(v, r)
  }) : null;
}, Mj = function(e) {
  return !/* @__PURE__ */ q.isValidElement(e) && !U(e) && typeof e != "boolean" ? e.className : "";
};
function Sr(t) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Sr(t);
}
var HA = ["offset"];
function UA(t) {
  return ZA(t) || YA(t) || VA(t) || XA();
}
function XA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VA(t, e) {
  if (t) {
    if (typeof t == "string") return js(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return js(t, e);
  }
}
function YA(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ZA(t) {
  if (Array.isArray(t)) return js(t);
}
function js(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function JA(t, e) {
  if (t == null) return {};
  var r = QA(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function QA(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function vv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function se(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vv(Object(r), !0).forEach(function(n) {
      e1(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : vv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function e1(t, e, r) {
  return e = t1(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function t1(t) {
  var e = r1(t, "string");
  return Sr(e) == "symbol" ? e : e + "";
}
function r1(t, e) {
  if (Sr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Ar.apply(this, arguments);
}
var n1 = function(e) {
  var r = e.value, n = e.formatter, a = H(e.children) ? r : e.children;
  return U(n) ? n(a) : a;
}, a1 = function(e, r) {
  var n = Re(r - e), a = Math.min(Math.abs(r - e), 360);
  return n * a;
}, i1 = function(e, r, n) {
  var a = e.position, i = e.viewBox, o = e.offset, u = e.className, s = i, c = s.cx, f = s.cy, l = s.innerRadius, p = s.outerRadius, v = s.startAngle, m = s.endAngle, h = s.clockWise, d = (l + p) / 2, g = a1(v, m), O = g >= 0 ? 1 : -1, w, S;
  a === "insideStart" ? (w = v + O * o, S = h) : a === "insideEnd" ? (w = m - O * o, S = !h) : a === "end" && (w = m + O * o, S = h), S = g <= 0 ? S : !S;
  var y = ve(c, f, d, w), b = ve(c, f, d, w + (S ? 1 : -1) * 359), x = "M".concat(y.x, ",").concat(y.y, `
    A`).concat(d, ",").concat(d, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), A = H(e.id) ? Ln("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ E.createElement("text", Ar({}, n, {
    dominantBaseline: "central",
    className: ee("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("path", {
    id: A,
    d: x
  })), /* @__PURE__ */ E.createElement("textPath", {
    xlinkHref: "#".concat(A)
  }, r));
}, o1 = function(e) {
  var r = e.viewBox, n = e.offset, a = e.position, i = r, o = i.cx, u = i.cy, s = i.innerRadius, c = i.outerRadius, f = i.startAngle, l = i.endAngle, p = (f + l) / 2;
  if (a === "outside") {
    var v = ve(o, u, c + n, p), m = v.x, h = v.y;
    return {
      x: m,
      y: h,
      textAnchor: m >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (a === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (a === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (a === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (s + c) / 2, g = ve(o, u, d, p), O = g.x, w = g.y;
  return {
    x: O,
    y: w,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, u1 = function(e) {
  var r = e.viewBox, n = e.parentViewBox, a = e.offset, i = e.position, o = r, u = o.x, s = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, p = l * a, v = l > 0 ? "end" : "start", m = l > 0 ? "start" : "end", h = c >= 0 ? 1 : -1, d = h * a, g = h > 0 ? "end" : "start", O = h > 0 ? "start" : "end";
  if (i === "top") {
    var w = {
      x: u + c / 2,
      y: s - l * a,
      textAnchor: "middle",
      verticalAnchor: v
    };
    return se(se({}, w), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (i === "bottom") {
    var S = {
      x: u + c / 2,
      y: s + f + p,
      textAnchor: "middle",
      verticalAnchor: m
    };
    return se(se({}, S), n ? {
      height: Math.max(n.y + n.height - (s + f), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var y = {
      x: u - d,
      y: s + f / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return se(se({}, y), n ? {
      width: Math.max(y.x - n.x, 0),
      height: f
    } : {});
  }
  if (i === "right") {
    var b = {
      x: u + c + d,
      y: s + f / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return se(se({}, b), n ? {
      width: Math.max(n.x + n.width - b.x, 0),
      height: f
    } : {});
  }
  var x = n ? {
    width: c,
    height: f
  } : {};
  return i === "insideLeft" ? se({
    x: u + d,
    y: s + f / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, x) : i === "insideRight" ? se({
    x: u + c - d,
    y: s + f / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, x) : i === "insideTop" ? se({
    x: u + c / 2,
    y: s + p,
    textAnchor: "middle",
    verticalAnchor: m
  }, x) : i === "insideBottom" ? se({
    x: u + c / 2,
    y: s + f - p,
    textAnchor: "middle",
    verticalAnchor: v
  }, x) : i === "insideTopLeft" ? se({
    x: u + d,
    y: s + p,
    textAnchor: O,
    verticalAnchor: m
  }, x) : i === "insideTopRight" ? se({
    x: u + c - d,
    y: s + p,
    textAnchor: g,
    verticalAnchor: m
  }, x) : i === "insideBottomLeft" ? se({
    x: u + d,
    y: s + f - p,
    textAnchor: O,
    verticalAnchor: v
  }, x) : i === "insideBottomRight" ? se({
    x: u + c - d,
    y: s + f - p,
    textAnchor: g,
    verticalAnchor: v
  }, x) : Kt(i) && (B(i.x) || ct(i.x)) && (B(i.y) || ct(i.y)) ? se({
    x: u + je(i.x, c),
    y: s + je(i.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, x) : se({
    x: u + c / 2,
    y: s + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, x);
}, s1 = function(e) {
  return "cx" in e && B(e.cx);
};
function ye(t) {
  var e = t.offset, r = e === void 0 ? 5 : e, n = JA(t, HA), a = se({
    offset: r
  }, n), i = a.viewBox, o = a.position, u = a.value, s = a.children, c = a.content, f = a.className, l = f === void 0 ? "" : f, p = a.textBreakAll;
  if (!i || H(u) && H(s) && !/* @__PURE__ */ q.isValidElement(c) && !U(c))
    return null;
  if (/* @__PURE__ */ q.isValidElement(c))
    return /* @__PURE__ */ q.cloneElement(c, a);
  var v;
  if (U(c)) {
    if (v = /* @__PURE__ */ q.createElement(c, a), /* @__PURE__ */ q.isValidElement(v))
      return v;
  } else
    v = n1(a);
  var m = s1(i), h = te(a, !0);
  if (m && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return i1(a, v, h);
  var d = m ? o1(a) : u1(a);
  return /* @__PURE__ */ E.createElement(Os, Ar({
    className: ee("recharts-label", l)
  }, h, d, {
    breakAll: p
  }), v);
}
ye.displayName = "Label";
var Sm = function(e) {
  var r = e.cx, n = e.cy, a = e.angle, i = e.startAngle, o = e.endAngle, u = e.r, s = e.radius, c = e.innerRadius, f = e.outerRadius, l = e.x, p = e.y, v = e.top, m = e.left, h = e.width, d = e.height, g = e.clockWise, O = e.labelViewBox;
  if (O)
    return O;
  if (B(h) && B(d)) {
    if (B(l) && B(p))
      return {
        x: l,
        y: p,
        width: h,
        height: d
      };
    if (B(v) && B(m))
      return {
        x: v,
        y: m,
        width: h,
        height: d
      };
  }
  return B(l) && B(p) ? {
    x: l,
    y: p,
    width: 0,
    height: 0
  } : B(r) && B(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: c || 0,
    outerRadius: f || s || u || 0,
    clockWise: g
  } : e.viewBox ? e.viewBox : {};
}, c1 = function(e, r) {
  return e ? e === !0 ? /* @__PURE__ */ E.createElement(ye, {
    key: "label-implicit",
    viewBox: r
  }) : ce(e) ? /* @__PURE__ */ E.createElement(ye, {
    key: "label-implicit",
    viewBox: r,
    value: e
  }) : /* @__PURE__ */ q.isValidElement(e) ? e.type === ye ? /* @__PURE__ */ q.cloneElement(e, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ E.createElement(ye, {
    key: "label-implicit",
    content: e,
    viewBox: r
  }) : U(e) ? /* @__PURE__ */ E.createElement(ye, {
    key: "label-implicit",
    content: e,
    viewBox: r
  }) : Kt(e) ? /* @__PURE__ */ E.createElement(ye, Ar({
    viewBox: r
  }, e, {
    key: "label-implicit"
  })) : null : null;
}, l1 = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && n && !e.label)
    return null;
  var a = e.children, i = Sm(e), o = Ie(a, ye).map(function(s, c) {
    return /* @__PURE__ */ q.cloneElement(s, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var u = c1(e.label, r || i);
  return [u].concat(UA(o));
};
ye.parseViewBox = Sm;
ye.renderCallByParent = l1;
var Pu, hv;
function f1() {
  if (hv) return Pu;
  hv = 1;
  function t(e) {
    var r = e == null ? 0 : e.length;
    return r ? e[r - 1] : void 0;
  }
  return Pu = t, Pu;
}
var p1 = f1();
const d1 = /* @__PURE__ */ J(p1);
function Pr(t) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pr(t);
}
var v1 = ["valueAccessor"], h1 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function y1(t) {
  return O1(t) || b1(t) || g1(t) || m1();
}
function m1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g1(t, e) {
  if (t) {
    if (typeof t == "string") return Is(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Is(t, e);
  }
}
function b1(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function O1(t) {
  if (Array.isArray(t)) return Is(t);
}
function Is(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function mn() {
  return mn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, mn.apply(this, arguments);
}
function yv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yv(Object(r), !0).forEach(function(n) {
      w1(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : yv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function w1(t, e, r) {
  return e = x1(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function x1(t) {
  var e = S1(t, "string");
  return Pr(e) == "symbol" ? e : e + "";
}
function S1(t, e) {
  if (Pr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function gv(t, e) {
  if (t == null) return {};
  var r = A1(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function A1(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var P1 = function(e) {
  return Array.isArray(e.value) ? d1(e.value) : e.value;
};
function pt(t) {
  var e = t.valueAccessor, r = e === void 0 ? P1 : e, n = gv(t, v1), a = n.data, i = n.dataKey, o = n.clockWise, u = n.id, s = n.textBreakAll, c = gv(n, h1);
  return !a || !a.length ? null : /* @__PURE__ */ E.createElement(he, {
    className: "recharts-label-list"
  }, a.map(function(f, l) {
    var p = H(i) ? r(f, l) : Me(f && f.payload, i), v = H(u) ? {} : {
      id: "".concat(u, "-").concat(l)
    };
    return /* @__PURE__ */ E.createElement(ye, mn({}, te(f, !0), c, v, {
      parentViewBox: f.parentViewBox,
      value: p,
      textBreakAll: s,
      viewBox: ye.parseViewBox(H(o) ? f : mv(mv({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
pt.displayName = "LabelList";
function _1(t, e) {
  return t ? t === !0 ? /* @__PURE__ */ E.createElement(pt, {
    key: "labelList-implicit",
    data: e
  }) : /* @__PURE__ */ E.isValidElement(t) || U(t) ? /* @__PURE__ */ E.createElement(pt, {
    key: "labelList-implicit",
    data: e,
    content: t
  }) : Kt(t) ? /* @__PURE__ */ E.createElement(pt, mn({
    data: e
  }, t, {
    key: "labelList-implicit"
  })) : null : null;
}
function E1(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && r && !t.label)
    return null;
  var n = t.children, a = Ie(n, pt).map(function(o, u) {
    return /* @__PURE__ */ q.cloneElement(o, {
      data: e,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return a;
  var i = _1(t.label, e);
  return [i].concat(y1(a));
}
pt.renderCallByParent = E1;
function _r(t) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _r(t);
}
function Ms() {
  return Ms = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Ms.apply(this, arguments);
}
function bv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ov(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bv(Object(r), !0).forEach(function(n) {
      T1(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : bv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function T1(t, e, r) {
  return e = j1(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function j1(t) {
  var e = I1(t, "string");
  return _r(e) == "symbol" ? e : e + "";
}
function I1(t, e) {
  if (_r(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var M1 = function(e, r) {
  var n = Re(r - e), a = Math.min(Math.abs(r - e), 359.999);
  return n * a;
}, Jr = function(e) {
  var r = e.cx, n = e.cy, a = e.radius, i = e.angle, o = e.sign, u = e.isExternal, s = e.cornerRadius, c = e.cornerIsExternal, f = s * (u ? 1 : -1) + a, l = Math.asin(s / f) / yn, p = c ? i : i + o * l, v = ve(r, n, f, p), m = ve(r, n, a, p), h = c ? i - o * l : i, d = ve(r, n, f * Math.cos(l * yn), h);
  return {
    center: v,
    circleTangency: m,
    lineTangency: d,
    theta: l
  };
}, Am = function(e) {
  var r = e.cx, n = e.cy, a = e.innerRadius, i = e.outerRadius, o = e.startAngle, u = e.endAngle, s = M1(o, u), c = o + s, f = ve(r, n, i, o), l = ve(r, n, i, c), p = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (a > 0) {
    var v = ve(r, n, a, o), m = ve(r, n, a, c);
    p += "L ".concat(m.x, ",").concat(m.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(v.x, ",").concat(v.y, " Z");
  } else
    p += "L ".concat(r, ",").concat(n, " Z");
  return p;
}, C1 = function(e) {
  var r = e.cx, n = e.cy, a = e.innerRadius, i = e.outerRadius, o = e.cornerRadius, u = e.forceCornerRadius, s = e.cornerIsExternal, c = e.startAngle, f = e.endAngle, l = Re(f - c), p = Jr({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: s
  }), v = p.circleTangency, m = p.lineTangency, h = p.theta, d = Jr({
    cx: r,
    cy: n,
    radius: i,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: s
  }), g = d.circleTangency, O = d.lineTangency, w = d.theta, S = s ? Math.abs(c - f) : Math.abs(c - f) - h - w;
  if (S < 0)
    return u ? "M ".concat(m.x, ",").concat(m.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Am({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: c,
      endAngle: f
    });
  var y = "M ".concat(m.x, ",").concat(m.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(v.x, ",").concat(v.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(S > 180), ",").concat(+(l < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (a > 0) {
    var b = Jr({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), x = b.circleTangency, A = b.lineTangency, P = b.theta, I = Jr({
      cx: r,
      cy: n,
      radius: a,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), _ = I.circleTangency, T = I.lineTangency, M = I.theta, $ = s ? Math.abs(c - f) : Math.abs(c - f) - P - M;
    if ($ < 0 && o === 0)
      return "".concat(y, "L").concat(r, ",").concat(n, "Z");
    y += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(_.x, ",").concat(_.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+($ > 180), ",").concat(+(l > 0), ",").concat(x.x, ",").concat(x.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(A.x, ",").concat(A.y, "Z");
  } else
    y += "L".concat(r, ",").concat(n, "Z");
  return y;
}, $1 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Pm = function(e) {
  var r = Ov(Ov({}, $1), e), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, p = r.className;
  if (o < i || f === l)
    return null;
  var v = ee("recharts-sector", p), m = o - i, h = je(u, m, 0, !0), d;
  return h > 0 && Math.abs(f - l) < 360 ? d = C1({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(h, m / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : d = Am({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ E.createElement("path", Ms({}, te(r, !0), {
    className: v,
    d,
    role: "img"
  }));
};
function Er(t) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Er(t);
}
function Cs() {
  return Cs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Cs.apply(this, arguments);
}
function wv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wv(Object(r), !0).forEach(function(n) {
      R1(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : wv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function R1(t, e, r) {
  return e = D1(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function D1(t) {
  var e = q1(t, "string");
  return Er(e) == "symbol" ? e : e + "";
}
function q1(t, e) {
  if (Er(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Sv = {
  curveBasisClosed: Ag,
  curveBasisOpen: Sg,
  curveBasis: xg,
  curveBumpX: wg,
  curveBumpY: Og,
  curveLinearClosed: bg,
  curveLinear: ac,
  curveMonotoneX: gg,
  curveMonotoneY: mg,
  curveNatural: yg,
  curveStep: hg,
  curveStepAfter: vg,
  curveStepBefore: dg
}, Qr = function(e) {
  return e.x === +e.x && e.y === +e.y;
}, tr = function(e) {
  return e.x;
}, rr = function(e) {
  return e.y;
}, N1 = function(e, r) {
  if (U(e))
    return e;
  var n = "curve".concat(Fn(e));
  return (n === "curveMonotone" || n === "curveBump") && r ? Sv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Sv[n] || ac;
}, B1 = function(e) {
  var r = e.type, n = r === void 0 ? "linear" : r, a = e.points, i = a === void 0 ? [] : a, o = e.baseLine, u = e.layout, s = e.connectNulls, c = s === void 0 ? !1 : s, f = N1(n, u), l = c ? i.filter(function(h) {
    return Qr(h);
  }) : i, p;
  if (Array.isArray(o)) {
    var v = c ? o.filter(function(h) {
      return Qr(h);
    }) : o, m = l.map(function(h, d) {
      return xv(xv({}, h), {}, {
        base: v[d]
      });
    });
    return u === "vertical" ? p = Ur().y(rr).x1(tr).x0(function(h) {
      return h.base.x;
    }) : p = Ur().x(tr).y1(rr).y0(function(h) {
      return h.base.y;
    }), p.defined(Qr).curve(f), p(m);
  }
  return u === "vertical" && B(o) ? p = Ur().y(rr).x1(tr).x0(o) : B(o) ? p = Ur().x(tr).y1(rr).y0(o) : p = Fh().x(tr).y(rr), p.defined(Qr).curve(f), p(l);
}, Av = function(e) {
  var r = e.className, n = e.points, a = e.path, i = e.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? B1(e) : a;
  return /* @__PURE__ */ q.createElement("path", Cs({}, te(e, !1), on(e), {
    className: ee("recharts-curve", r),
    d: o,
    ref: i
  }));
}, k1 = /* @__PURE__ */ cg();
const V = /* @__PURE__ */ J(k1);
function L1(t) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(t);
}
function Pv(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > e ? (t(i), r = -1) : L1(a);
  };
  requestAnimationFrame(n);
}
function $s(t) {
  "@babel/helpers - typeof";
  return $s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $s(t);
}
function F1(t) {
  return G1(t) || K1(t) || z1(t) || W1();
}
function W1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z1(t, e) {
  if (t) {
    if (typeof t == "string") return _v(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _v(t, e);
  }
}
function _v(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function K1(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function G1(t) {
  if (Array.isArray(t)) return t;
}
function H1() {
  var t = {}, e = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, u = F1(o), s = u[0], c = u.slice(1);
        if (typeof s == "number") {
          Pv(a.bind(null, c), s);
          return;
        }
        a(s), Pv(a.bind(null, c));
        return;
      }
      $s(i) === "object" && (t = i, e(t)), typeof i == "function" && i();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(i) {
      r = !1, n(i);
    },
    subscribe: function(i) {
      return e = i, function() {
        e = function() {
          return null;
        };
      };
    }
  };
}
function Tr(t) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tr(t);
}
function Ev(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ev(Object(r), !0).forEach(function(n) {
      _m(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function _m(t, e, r) {
  return e = U1(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function U1(t) {
  var e = X1(t, "string");
  return Tr(e) === "symbol" ? e : String(e);
}
function X1(t, e) {
  if (Tr(t) !== "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Tr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var V1 = function(e, r) {
  return [Object.keys(e), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, Y1 = function(e) {
  return e;
}, Z1 = function(e) {
  return e.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, lr = function(e, r) {
  return Object.keys(r).reduce(function(n, a) {
    return Tv(Tv({}, n), {}, _m({}, a, e(a, r[a])));
  }, {});
}, jv = function(e, r, n) {
  return e.map(function(a) {
    return "".concat(Z1(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function J1(t, e) {
  return tP(t) || eP(t, e) || Em(t, e) || Q1();
}
function Q1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eP(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function tP(t) {
  if (Array.isArray(t)) return t;
}
function rP(t) {
  return iP(t) || aP(t) || Em(t) || nP();
}
function nP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Em(t, e) {
  if (t) {
    if (typeof t == "string") return Rs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rs(t, e);
  }
}
function aP(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function iP(t) {
  if (Array.isArray(t)) return Rs(t);
}
function Rs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var gn = 1e-4, Tm = function(e, r) {
  return [0, 3 * e, 3 * r - 6 * e, 3 * e - 3 * r + 1];
}, jm = function(e, r) {
  return e.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, Iv = function(e, r) {
  return function(n) {
    var a = Tm(e, r);
    return jm(a, n);
  };
}, oP = function(e, r) {
  return function(n) {
    var a = Tm(e, r), i = [].concat(rP(a.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return jm(i, n);
  };
}, Mv = function() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  var a = r[0], i = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        a = 0, i = 0, o = 1, u = 1;
        break;
      case "ease":
        a = 0.25, i = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        a = 0.42, i = 0, o = 1, u = 1;
        break;
      case "ease-out":
        a = 0.42, i = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        a = 0, i = 0, o = 0.58, u = 1;
        break;
      default: {
        var s = r[0].split("(");
        if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
          var c = s[1].split(")")[0].split(",").map(function(d) {
            return parseFloat(d);
          }), f = J1(c, 4);
          a = f[0], i = f[1], o = f[2], u = f[3];
        }
      }
    }
  var l = Iv(a, o), p = Iv(i, u), v = oP(a, o), m = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, h = function(g) {
    for (var O = g > 1 ? 1 : g, w = O, S = 0; S < 8; ++S) {
      var y = l(w) - O, b = v(w);
      if (Math.abs(y - O) < gn || b < gn)
        return p(w);
      w = m(w - y / b);
    }
    return p(w);
  };
  return h.isStepper = !1, h;
}, uP = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.stiff, n = r === void 0 ? 100 : r, a = e.damping, i = a === void 0 ? 8 : a, o = e.dt, u = o === void 0 ? 17 : o, s = function(f, l, p) {
    var v = -(f - l) * n, m = p * i, h = p + (v - m) * u / 1e3, d = p * u / 1e3 + f;
    return Math.abs(d - l) < gn && Math.abs(h) < gn ? [l, 0] : [d, h];
  };
  return s.isStepper = !0, s.dt = u, s;
}, sP = function() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  var a = r[0];
  if (typeof a == "string")
    switch (a) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Mv(a);
      case "spring":
        return uP();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return Mv(a);
    }
  return typeof a == "function" ? a : null;
};
function jr(t) {
  "@babel/helpers - typeof";
  return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jr(t);
}
function Cv(t) {
  return fP(t) || lP(t) || Im(t) || cP();
}
function cP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lP(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function fP(t) {
  if (Array.isArray(t)) return qs(t);
}
function $v(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function de(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $v(Object(r), !0).forEach(function(n) {
      Ds(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $v(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ds(t, e, r) {
  return e = pP(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function pP(t) {
  var e = dP(t, "string");
  return jr(e) === "symbol" ? e : String(e);
}
function dP(t, e) {
  if (jr(t) !== "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (jr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function vP(t, e) {
  return mP(t) || yP(t, e) || Im(t, e) || hP();
}
function hP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Im(t, e) {
  if (t) {
    if (typeof t == "string") return qs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qs(t, e);
  }
}
function qs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function yP(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function mP(t) {
  if (Array.isArray(t)) return t;
}
var bn = function(e, r, n) {
  return e + (r - e) * n;
}, Ns = function(e) {
  var r = e.from, n = e.to;
  return r !== n;
}, gP = function t(e, r, n) {
  var a = lr(function(i, o) {
    if (Ns(o)) {
      var u = e(o.from, o.to, o.velocity), s = vP(u, 2), c = s[0], f = s[1];
      return de(de({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? lr(function(i, o) {
    return Ns(o) ? de(de({}, o), {}, {
      velocity: bn(o.velocity, a[i].velocity, n),
      from: bn(o.from, a[i].from, n)
    }) : o;
  }, r) : t(e, a, n - 1);
};
const bP = (function(t, e, r, n, a) {
  var i = V1(t, e), o = i.reduce(function(d, g) {
    return de(de({}, d), {}, Ds({}, g, [t[g], e[g]]));
  }, {}), u = i.reduce(function(d, g) {
    return de(de({}, d), {}, Ds({}, g, {
      from: t[g],
      velocity: 0,
      to: e[g]
    }));
  }, {}), s = -1, c, f, l = function() {
    return null;
  }, p = function() {
    return lr(function(g, O) {
      return O.from;
    }, u);
  }, v = function() {
    return !Object.values(u).filter(Ns).length;
  }, m = function(g) {
    c || (c = g);
    var O = g - c, w = O / r.dt;
    u = gP(r, u, w), a(de(de(de({}, t), e), p())), c = g, v() || (s = requestAnimationFrame(l));
  }, h = function(g) {
    f || (f = g);
    var O = (g - f) / n, w = lr(function(y, b) {
      return bn.apply(void 0, Cv(b).concat([r(O)]));
    }, o);
    if (a(de(de(de({}, t), e), w)), O < 1)
      s = requestAnimationFrame(l);
    else {
      var S = lr(function(y, b) {
        return bn.apply(void 0, Cv(b).concat([r(1)]));
      }, o);
      a(de(de(de({}, t), e), S));
    }
  };
  return l = r.isStepper ? m : h, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(s);
    };
  };
});
function Rt(t) {
  "@babel/helpers - typeof";
  return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Rt(t);
}
var OP = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function wP(t, e) {
  if (t == null) return {};
  var r = xP(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function xP(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function _u(t) {
  return _P(t) || PP(t) || AP(t) || SP();
}
function SP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AP(t, e) {
  if (t) {
    if (typeof t == "string") return Bs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bs(t, e);
  }
}
function PP(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function _P(t) {
  if (Array.isArray(t)) return Bs(t);
}
function Bs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Rv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ee(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Rv(Object(r), !0).forEach(function(n) {
      ur(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Rv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ur(t, e, r) {
  return e = Mm(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function EP(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function TP(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Mm(n.key), n);
  }
}
function jP(t, e, r) {
  return e && TP(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Mm(t) {
  var e = IP(t, "string");
  return Rt(e) === "symbol" ? e : String(e);
}
function IP(t, e) {
  if (Rt(t) !== "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Rt(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function MP(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ks(t, e);
}
function ks(t, e) {
  return ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ks(t, e);
}
function CP(t) {
  var e = $P();
  return function() {
    var n = On(t), a;
    if (e) {
      var i = On(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Ls(this, a);
  };
}
function Ls(t, e) {
  if (e && (Rt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fs(t);
}
function Fs(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function $P() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function On(t) {
  return On = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, On(t);
}
var Ze = /* @__PURE__ */ (function(t) {
  MP(r, t);
  var e = CP(r);
  function r(n, a) {
    var i;
    EP(this, r), i = e.call(this, n, a);
    var o = i.props, u = o.isActive, s = o.attributeName, c = o.from, f = o.to, l = o.steps, p = o.children, v = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(Fs(i)), i.changeStyle = i.changeStyle.bind(Fs(i)), !u || v <= 0)
      return i.state = {
        style: {}
      }, typeof p == "function" && (i.state = {
        style: f
      }), Ls(i);
    if (l && l.length)
      i.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof p == "function")
        return i.state = {
          style: c
        }, Ls(i);
      i.state = {
        style: s ? ur({}, s, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return jP(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, u = i.canBegin, s = i.attributeName, c = i.shouldReAnimate, f = i.to, l = i.from, p = this.state.style;
      if (u) {
        if (!o) {
          var v = {
            style: s ? ur({}, s, f) : f
          };
          this.state && p && (s && p[s] !== f || !s && p !== f) && this.setState(v);
          return;
        }
        if (!(lg(a.to, f) && a.canBegin && a.isActive)) {
          var m = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var h = m || c ? l : a.to;
          if (this.state && p) {
            var d = {
              style: s ? ur({}, s, h) : h
            };
            (s && p[s] !== h || !s && p !== h) && this.setState(d);
          }
          this.runAnimation(Ee(Ee({}, this.props), {}, {
            from: h,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), a && a();
    }
  }, {
    key: "handleStyleChange",
    value: function(a) {
      this.changeStyle(a);
    }
  }, {
    key: "changeStyle",
    value: function(a) {
      this.mounted && this.setState({
        style: a
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(a) {
      var i = this, o = a.from, u = a.to, s = a.duration, c = a.easing, f = a.begin, l = a.onAnimationEnd, p = a.onAnimationStart, v = bP(o, u, sP(c), s, this.changeStyle), m = function() {
        i.stopJSAnimation = v();
      };
      this.manager.start([p, f, m, s, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, u = a.begin, s = a.onAnimationStart, c = o[0], f = c.style, l = c.duration, p = l === void 0 ? 0 : l, v = function(h, d, g) {
        if (g === 0)
          return h;
        var O = d.duration, w = d.easing, S = w === void 0 ? "ease" : w, y = d.style, b = d.properties, x = d.onAnimationEnd, A = g > 0 ? o[g - 1] : d, P = b || Object.keys(y);
        if (typeof S == "function" || S === "spring")
          return [].concat(_u(h), [i.runJSAnimation.bind(i, {
            from: A.style,
            to: y,
            duration: O,
            easing: S
          }), O]);
        var I = jv(P, O, S), _ = Ee(Ee(Ee({}, A.style), y), {}, {
          transition: I
        });
        return [].concat(_u(h), [_, O, x]).filter(Y1);
      };
      return this.manager.start([s].concat(_u(o.reduce(v, [f, Math.max(p, u)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = H1());
      var i = a.begin, o = a.duration, u = a.attributeName, s = a.to, c = a.easing, f = a.onAnimationStart, l = a.onAnimationEnd, p = a.steps, v = a.children, m = this.manager;
      if (this.unSubscribe = m.subscribe(this.handleStyleChange), typeof c == "function" || typeof v == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (p.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var h = u ? ur({}, u, s) : s, d = jv(Object.keys(h), o, c);
      m.start([f, i, Ee(Ee({}, h), {}, {
        transition: d
      }), o, l]);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, i = a.children;
      a.begin;
      var o = a.duration;
      a.attributeName, a.easing;
      var u = a.isActive;
      a.steps, a.from, a.to, a.canBegin, a.onAnimationEnd, a.shouldReAnimate, a.onAnimationReStart;
      var s = wP(a, OP), c = q.Children.count(i), f = this.state.style;
      if (typeof i == "function")
        return i(f);
      if (!u || c === 0 || o <= 0)
        return i;
      var l = function(v) {
        var m = v.props, h = m.style, d = h === void 0 ? {} : h, g = m.className, O = /* @__PURE__ */ q.cloneElement(v, Ee(Ee({}, s), {}, {
          style: Ee(Ee({}, d), f),
          className: g
        }));
        return O;
      };
      return c === 1 ? l(q.Children.only(i)) : /* @__PURE__ */ E.createElement("div", null, q.Children.map(i, function(p) {
        return l(p);
      }));
    }
  }]), r;
})(q.PureComponent);
Ze.displayName = "Animate";
Ze.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Ze.propTypes = {
  from: V.oneOfType([V.object, V.string]),
  to: V.oneOfType([V.object, V.string]),
  attributeName: V.string,
  // animation duration
  duration: V.number,
  begin: V.number,
  easing: V.oneOfType([V.string, V.func]),
  steps: V.arrayOf(V.shape({
    duration: V.number.isRequired,
    style: V.object.isRequired,
    easing: V.oneOfType([V.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), V.func]),
    // transition css properties(dash case), optional
    properties: V.arrayOf("string"),
    onAnimationEnd: V.func
  })),
  children: V.oneOfType([V.node, V.func]),
  isActive: V.bool,
  canBegin: V.bool,
  onAnimationEnd: V.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: V.bool,
  onAnimationStart: V.func,
  onAnimationReStart: V.func
};
function Ir(t) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ir(t);
}
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, wn.apply(this, arguments);
}
function RP(t, e) {
  return BP(t) || NP(t, e) || qP(t, e) || DP();
}
function DP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qP(t, e) {
  if (t) {
    if (typeof t == "string") return Dv(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dv(t, e);
  }
}
function Dv(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function NP(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function BP(t) {
  if (Array.isArray(t)) return t;
}
function qv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qv(Object(r), !0).forEach(function(n) {
      kP(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function kP(t, e, r) {
  return e = LP(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function LP(t) {
  var e = FP(t, "string");
  return Ir(e) == "symbol" ? e : e + "";
}
function FP(t, e) {
  if (Ir(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Ir(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Bv = function(e, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), u = a >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && i instanceof Array) {
    for (var l = [0, 0, 0, 0], p = 0, v = 4; p < v; p++)
      l[p] = i[p] > o ? o : i[p];
    f = "M".concat(e, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(e + s * l[0], ",").concat(r)), f += "L ".concat(e + n - s * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(e + n, ",").concat(r + u * l[1])), f += "L ".concat(e + n, ",").concat(r + a - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(e + n - s * l[2], ",").concat(r + a)), f += "L ".concat(e + s * l[3], ",").concat(r + a), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(e, ",").concat(r + a - u * l[3])), f += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var m = Math.min(o, i);
    f = "M ".concat(e, ",").concat(r + u * m, `
            A `).concat(m, ",").concat(m, ",0,0,").concat(c, ",").concat(e + s * m, ",").concat(r, `
            L `).concat(e + n - s * m, ",").concat(r, `
            A `).concat(m, ",").concat(m, ",0,0,").concat(c, ",").concat(e + n, ",").concat(r + u * m, `
            L `).concat(e + n, ",").concat(r + a - u * m, `
            A `).concat(m, ",").concat(m, ",0,0,").concat(c, ",").concat(e + n - s * m, ",").concat(r + a, `
            L `).concat(e + s * m, ",").concat(r + a, `
            A `).concat(m, ",").concat(m, ",0,0,").concat(c, ",").concat(e, ",").concat(r + a - u * m, " Z");
  } else
    f = "M ".concat(e, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return f;
}, WP = function(e, r) {
  if (!e || !r)
    return !1;
  var n = e.x, a = e.y, i = r.x, o = r.y, u = r.width, s = r.height;
  if (Math.abs(u) > 0 && Math.abs(s) > 0) {
    var c = Math.min(i, i + u), f = Math.max(i, i + u), l = Math.min(o, o + s), p = Math.max(o, o + s);
    return n >= c && n <= f && a >= l && a <= p;
  }
  return !1;
}, zP = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Bc = function(e) {
  var r = Nv(Nv({}, zP), e), n = q.useRef(), a = q.useState(-1), i = RP(a, 2), o = i[0], u = i[1];
  q.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && u(S);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.width, l = r.height, p = r.radius, v = r.className, m = r.animationEasing, h = r.animationDuration, d = r.animationBegin, g = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var w = ee("recharts-rectangle", v);
  return O ? /* @__PURE__ */ E.createElement(Ze, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    duration: h,
    animationEasing: m,
    isActive: O
  }, function(S) {
    var y = S.width, b = S.height, x = S.x, A = S.y;
    return /* @__PURE__ */ E.createElement(Ze, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: d,
      duration: h,
      isActive: g,
      easing: m
    }, /* @__PURE__ */ E.createElement("path", wn({}, te(r, !0), {
      className: w,
      d: Bv(x, A, y, b, p),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("path", wn({}, te(r, !0), {
    className: w,
    d: Bv(s, c, f, l, p)
  }));
};
function Ws() {
  return Ws = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Ws.apply(this, arguments);
}
var Cm = function(e) {
  var r = e.cx, n = e.cy, a = e.r, i = e.className, o = ee("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ q.createElement("circle", Ws({}, te(e, !1), on(e), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function Mr(t) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mr(t);
}
var KP = ["x", "y", "top", "left", "width", "height", "className"];
function zs() {
  return zs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, zs.apply(this, arguments);
}
function kv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function GP(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kv(Object(r), !0).forEach(function(n) {
      HP(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : kv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function HP(t, e, r) {
  return e = UP(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function UP(t) {
  var e = XP(t, "string");
  return Mr(e) == "symbol" ? e : e + "";
}
function XP(t, e) {
  if (Mr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function VP(t, e) {
  if (t == null) return {};
  var r = YP(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function YP(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
var ZP = function(e, r, n, a, i, o) {
  return "M".concat(e, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, JP = function(e) {
  var r = e.x, n = r === void 0 ? 0 : r, a = e.y, i = a === void 0 ? 0 : a, o = e.top, u = o === void 0 ? 0 : o, s = e.left, c = s === void 0 ? 0 : s, f = e.width, l = f === void 0 ? 0 : f, p = e.height, v = p === void 0 ? 0 : p, m = e.className, h = VP(e, KP), d = GP({
    x: n,
    y: i,
    top: u,
    left: c,
    width: l,
    height: v
  }, h);
  return !B(n) || !B(i) || !B(l) || !B(v) || !B(u) || !B(c) ? null : /* @__PURE__ */ E.createElement("path", zs({}, te(d, !0), {
    className: ee("recharts-cross", m),
    d: ZP(n, i, l, v, u, c)
  }));
}, Eu, Lv;
function QP() {
  if (Lv) return Eu;
  Lv = 1;
  var t = py(), e = t(Object.getPrototypeOf, Object);
  return Eu = e, Eu;
}
var Tu, Fv;
function e_() {
  if (Fv) return Tu;
  Fv = 1;
  var t = He(), e = QP(), r = Ue(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, u = i.hasOwnProperty, s = o.call(Object);
  function c(f) {
    if (!r(f) || t(f) != n)
      return !1;
    var l = e(f);
    if (l === null)
      return !0;
    var p = u.call(l, "constructor") && l.constructor;
    return typeof p == "function" && p instanceof p && o.call(p) == s;
  }
  return Tu = c, Tu;
}
var t_ = e_();
const r_ = /* @__PURE__ */ J(t_);
var ju, Wv;
function n_() {
  if (Wv) return ju;
  Wv = 1;
  var t = He(), e = Ue(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || e(a) && t(a) == r;
  }
  return ju = n, ju;
}
var a_ = n_();
const i_ = /* @__PURE__ */ J(a_);
function Cr(t) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Cr(t);
}
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, xn.apply(this, arguments);
}
function o_(t, e) {
  return l_(t) || c_(t, e) || s_(t, e) || u_();
}
function u_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s_(t, e) {
  if (t) {
    if (typeof t == "string") return zv(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zv(t, e);
  }
}
function zv(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function c_(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function l_(t) {
  if (Array.isArray(t)) return t;
}
function Kv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kv(Object(r), !0).forEach(function(n) {
      f_(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Kv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function f_(t, e, r) {
  return e = p_(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function p_(t) {
  var e = d_(t, "string");
  return Cr(e) == "symbol" ? e : e + "";
}
function d_(t, e) {
  if (Cr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Cr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Hv = function(e, r, n, a, i) {
  var o = n - a, u;
  return u = "M ".concat(e, ",").concat(r), u += "L ".concat(e + n, ",").concat(r), u += "L ".concat(e + n - o / 2, ",").concat(r + i), u += "L ".concat(e + n - o / 2 - a, ",").concat(r + i), u += "L ".concat(e, ",").concat(r, " Z"), u;
}, v_ = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, h_ = function(e) {
  var r = Gv(Gv({}, v_), e), n = q.useRef(), a = q.useState(-1), i = o_(a, 2), o = i[0], u = i[1];
  q.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, p = r.height, v = r.className, m = r.animationEasing, h = r.animationDuration, d = r.animationBegin, g = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || p !== +p || f === 0 && l === 0 || p === 0)
    return null;
  var O = ee("recharts-trapezoid", v);
  return g ? /* @__PURE__ */ E.createElement(Ze, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: p,
      x: s,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: p,
      x: s,
      y: c
    },
    duration: h,
    animationEasing: m,
    isActive: g
  }, function(w) {
    var S = w.upperWidth, y = w.lowerWidth, b = w.height, x = w.x, A = w.y;
    return /* @__PURE__ */ E.createElement(Ze, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: d,
      duration: h,
      easing: m
    }, /* @__PURE__ */ E.createElement("path", xn({}, te(r, !0), {
      className: O,
      d: Hv(x, A, S, y, b),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", xn({}, te(r, !0), {
    className: O,
    d: Hv(s, c, f, l, p)
  })));
}, y_ = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function $r(t) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $r(t);
}
function m_(t, e) {
  if (t == null) return {};
  var r = g_(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function g_(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function Uv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Uv(Object(r), !0).forEach(function(n) {
      b_(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function b_(t, e, r) {
  return e = O_(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function O_(t) {
  var e = w_(t, "string");
  return $r(e) == "symbol" ? e : e + "";
}
function w_(t, e) {
  if ($r(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if ($r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function x_(t, e) {
  return Sn(Sn({}, e), t);
}
function S_(t, e) {
  return t === "symbols";
}
function Xv(t) {
  var e = t.shapeType, r = t.elementProps;
  switch (e) {
    case "rectangle":
      return /* @__PURE__ */ E.createElement(Bc, r);
    case "trapezoid":
      return /* @__PURE__ */ E.createElement(h_, r);
    case "sector":
      return /* @__PURE__ */ E.createElement(Pm, r);
    case "symbols":
      if (S_(e))
        return /* @__PURE__ */ E.createElement(gc, r);
      break;
    default:
      return null;
  }
}
function A_(t) {
  return /* @__PURE__ */ q.isValidElement(t) ? t.props : t;
}
function P_(t) {
  var e = t.option, r = t.shapeType, n = t.propTransformer, a = n === void 0 ? x_ : n, i = t.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, u = t.isActive, s = m_(t, y_), c;
  if (/* @__PURE__ */ q.isValidElement(e))
    c = /* @__PURE__ */ q.cloneElement(e, Sn(Sn({}, s), A_(e)));
  else if (U(e))
    c = e(s);
  else if (r_(e) && !i_(e)) {
    var f = a(e, s);
    c = /* @__PURE__ */ E.createElement(Xv, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = s;
    c = /* @__PURE__ */ E.createElement(Xv, {
      shapeType: r,
      elementProps: l
    });
  }
  return u ? /* @__PURE__ */ E.createElement(he, {
    className: o
  }, c) : c;
}
function Qn(t, e) {
  return e != null && "trapezoids" in t.props;
}
function ea(t, e) {
  return e != null && "sectors" in t.props;
}
function Rr(t, e) {
  return e != null && "points" in t.props;
}
function __(t, e) {
  var r, n, a = t.x === (e == null || (r = e.labelViewBox) === null || r === void 0 ? void 0 : r.x) || t.x === e.x, i = t.y === (e == null || (n = e.labelViewBox) === null || n === void 0 ? void 0 : n.y) || t.y === e.y;
  return a && i;
}
function E_(t, e) {
  var r = t.endAngle === e.endAngle, n = t.startAngle === e.startAngle;
  return r && n;
}
function T_(t, e) {
  var r = t.x === e.x, n = t.y === e.y, a = t.z === e.z;
  return r && n && a;
}
function j_(t, e) {
  var r;
  return Qn(t, e) ? r = __ : ea(t, e) ? r = E_ : Rr(t, e) && (r = T_), r;
}
function I_(t, e) {
  var r;
  return Qn(t, e) ? r = "trapezoids" : ea(t, e) ? r = "sectors" : Rr(t, e) && (r = "points"), r;
}
function M_(t, e) {
  if (Qn(t, e)) {
    var r;
    return (r = e.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (ea(t, e)) {
    var n;
    return (n = e.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Rr(t, e) ? e.payload : {};
}
function C_(t) {
  var e = t.activeTooltipItem, r = t.graphicalItem, n = t.itemData, a = I_(r, e), i = M_(r, e), o = n.filter(function(s, c) {
    var f = Rc(i, s), l = r.props[a].filter(function(m) {
      var h = j_(r, e);
      return h(m, e);
    }), p = r.props[a].indexOf(l[l.length - 1]), v = c === p;
    return f && v;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var Iu, Vv;
function $_() {
  if (Vv) return Iu;
  Vv = 1;
  var t = Math.ceil, e = Math.max;
  function r(n, a, i, o) {
    for (var u = -1, s = e(t((a - n) / (i || 1)), 0), c = Array(s); s--; )
      c[o ? s : ++u] = n, n += i;
    return c;
  }
  return Iu = r, Iu;
}
var Mu, Yv;
function $m() {
  if (Yv) return Mu;
  Yv = 1;
  var t = Ty(), e = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = t(a), a === e || a === -e) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return Mu = n, Mu;
}
var Cu, Zv;
function R_() {
  if (Zv) return Cu;
  Zv = 1;
  var t = $_(), e = Kn(), r = $m();
  function n(a) {
    return function(i, o, u) {
      return u && typeof u != "number" && e(i, o, u) && (o = u = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), u = u === void 0 ? i < o ? 1 : -1 : r(u), t(i, o, u, a);
    };
  }
  return Cu = n, Cu;
}
var $u, Jv;
function D_() {
  if (Jv) return $u;
  Jv = 1;
  var t = R_(), e = t();
  return $u = e, $u;
}
var q_ = D_();
const An = /* @__PURE__ */ J(q_);
function Dr(t) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Dr(t);
}
function Qv(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Qv(Object(r), !0).forEach(function(n) {
      Rm(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Qv(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Rm(t, e, r) {
  return e = N_(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function N_(t) {
  var e = B_(t, "string");
  return Dr(e) == "symbol" ? e : e + "";
}
function B_(t, e) {
  if (Dr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var k_ = ["Webkit", "Moz", "O", "ms"], L_ = function(e, r) {
  var n = e.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = k_.reduce(function(i, o) {
    return eh(eh({}, i), {}, Rm({}, o + n, r));
  }, {});
  return a[e] = r, a;
};
function Dt(t) {
  "@babel/helpers - typeof";
  return Dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Dt(t);
}
function Pn() {
  return Pn = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Pn.apply(this, arguments);
}
function th(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ru(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? th(Object(r), !0).forEach(function(n) {
      ge(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : th(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function F_(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rh(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, qm(n.key), n);
  }
}
function W_(t, e, r) {
  return e && rh(t.prototype, e), r && rh(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function z_(t, e, r) {
  return e = _n(e), K_(t, Dm() ? Reflect.construct(e, r || [], _n(t).constructor) : e.apply(t, r));
}
function K_(t, e) {
  if (e && (Dt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G_(t);
}
function G_(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Dm() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dm = function() {
    return !!t;
  })();
}
function _n(t) {
  return _n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _n(t);
}
function H_(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ks(t, e);
}
function Ks(t, e) {
  return Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ks(t, e);
}
function ge(t, e, r) {
  return e = qm(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function qm(t) {
  var e = U_(t, "string");
  return Dt(e) == "symbol" ? e : e + "";
}
function U_(t, e) {
  if (Dt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Dt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var X_ = function(e) {
  var r = e.data, n = e.startIndex, a = e.endIndex, i = e.x, o = e.width, u = e.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = sr().domain(An(0, s)).range([i, i + o - u]), f = c.domain().map(function(l) {
    return c(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(a),
    scale: c,
    scaleValues: f
  };
}, nh = function(e) {
  return e.changedTouches && !!e.changedTouches.length;
}, qt = /* @__PURE__ */ (function(t) {
  function e(r) {
    var n;
    return F_(this, e), n = z_(this, e, [r]), ge(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), ge(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), ge(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var a = n.props, i = a.endIndex, o = a.onDragEnd, u = a.startIndex;
        o?.({
          endIndex: i,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), ge(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), ge(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), ge(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), ge(n, "handleSlideDragStart", function(a) {
      var i = nh(a) ? a.changedTouches[0] : a;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: i.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return H_(e, t), W_(e, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, u = this.props, s = u.gap, c = u.data, f = c.length - 1, l = Math.min(a, i), p = Math.max(a, i), v = e.getIndexInRange(o, l), m = e.getIndexInRange(o, p);
      return {
        startIndex: v - v % s,
        endIndex: m === f ? f : m - m % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, u = a.dataKey, s = Me(i[n], u, n);
      return U(o) ? o(s, n) : s;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var a = this.state, i = a.slideMoveStartX, o = a.startX, u = a.endX, s = this.props, c = s.x, f = s.width, l = s.travellerWidth, p = s.startIndex, v = s.endIndex, m = s.onChange, h = n.pageX - i;
      h > 0 ? h = Math.min(h, c + f - l - u, c + f - l - o) : h < 0 && (h = Math.max(h, c - o, c - u));
      var d = this.getIndex({
        startX: o + h,
        endX: u + h
      });
      (d.startIndex !== p || d.endIndex !== v) && m && m(d), this.setState({
        startX: o + h,
        endX: u + h,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = nh(a) ? a.changedTouches[0] : a;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: i.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, u = a.endX, s = a.startX, c = this.state[o], f = this.props, l = f.x, p = f.width, v = f.travellerWidth, m = f.onChange, h = f.gap, d = f.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - i;
      O > 0 ? O = Math.min(O, l + p - v - c) : O < 0 && (O = Math.max(O, l - c)), g[o] = c + O;
      var w = this.getIndex(g), S = w.startIndex, y = w.endIndex, b = function() {
        var A = d.length - 1;
        return o === "startX" && (u > s ? S % h === 0 : y % h === 0) || u < s && y === A || o === "endX" && (u > s ? y % h === 0 : S % h === 0) || u > s && y === A;
      };
      this.setState(ge(ge({}, o, c + O), "brushMoveStartX", n.pageX), function() {
        m && b() && m(w);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, u = o.scaleValues, s = o.startX, c = o.endX, f = this.state[a], l = u.indexOf(f);
      if (l !== -1) {
        var p = l + n;
        if (!(p === -1 || p >= u.length)) {
          var v = u[p];
          a === "startX" && v >= c || a === "endX" && v <= s || this.setState(ge({}, a, v), function() {
            i.props.onChange(i.getIndex({
              startX: i.state.startX,
              endX: i.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, u = n.height, s = n.fill, c = n.stroke;
      return /* @__PURE__ */ E.createElement("rect", {
        stroke: c,
        fill: s,
        x: a,
        y: i,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, u = n.height, s = n.data, c = n.children, f = n.padding, l = q.Children.only(c);
      return l ? /* @__PURE__ */ E.cloneElement(l, {
        x: a,
        y: i,
        width: o,
        height: u,
        margin: f,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, u = this, s = this.props, c = s.y, f = s.travellerWidth, l = s.height, p = s.traveller, v = s.ariaLabel, m = s.data, h = s.startIndex, d = s.endIndex, g = Math.max(n, this.props.x), O = Ru(Ru({}, te(this.props, !1)), {}, {
        x: g,
        y: c,
        width: f,
        height: l
      }), w = v || "Min value: ".concat((i = m[h]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = m[d]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ E.createElement(he, {
        tabIndex: 0,
        role: "slider",
        "aria-label": w,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        onKeyDown: function(y) {
          ["ArrowLeft", "ArrowRight"].includes(y.key) && (y.preventDefault(), y.stopPropagation(), u.handleTravellerMoveKeyboard(y.key === "ArrowRight" ? 1 : -1, a));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, e.renderTraveller(p, O));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, u = i.height, s = i.stroke, c = i.travellerWidth, f = Math.min(n, a) + c, l = Math.max(Math.abs(a - n) - c, 0);
      return /* @__PURE__ */ E.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: s,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, u = n.height, s = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, p = f.endX, v = 5, m = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ E.createElement(he, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ E.createElement(Os, Pn({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, p) - v,
        y: o + u / 2
      }, m), this.getTextOfTick(a)), /* @__PURE__ */ E.createElement(Os, Pn({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, p) + s + v,
        y: o + u / 2
      }, m), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, u = n.x, s = n.y, c = n.width, f = n.height, l = n.alwaysShowText, p = this.state, v = p.startX, m = p.endX, h = p.isTextActive, d = p.isSlideMoving, g = p.isTravellerMoving, O = p.isTravellerFocused;
      if (!a || !a.length || !B(u) || !B(s) || !B(c) || !B(f) || c <= 0 || f <= 0)
        return null;
      var w = ee("recharts-brush", i), S = E.Children.count(o) === 1, y = L_("userSelect", "none");
      return /* @__PURE__ */ E.createElement(he, {
        className: w,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: y
      }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(v, m), this.renderTravellerLayer(v, "startX"), this.renderTravellerLayer(m, "endX"), (h || d || g || O || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, u = n.height, s = n.stroke, c = Math.floor(i + u / 2) - 1;
      return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: u,
        fill: s,
        stroke: "none"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: a + 1,
        y1: c,
        x2: a + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: a + 1,
        y1: c + 2,
        x2: a + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ E.isValidElement(n) ? i = /* @__PURE__ */ E.cloneElement(n, a) : U(n) ? i = n(a) : i = e.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, u = n.x, s = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (i !== a.prevData || c !== a.prevUpdateId)
        return Ru({
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o
        }, i && i.length ? X_({
          data: i,
          width: o,
          x: u,
          travellerWidth: s,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || u !== a.prevX || s !== a.prevTravellerWidth)) {
        a.scale.range([u, u + o - s]);
        var p = a.scale.domain().map(function(v) {
          return a.scale(v);
        });
        return {
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o,
          startX: a.scale(n.startIndex),
          endX: a.scale(n.endIndex),
          scaleValues: p
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, a) {
      for (var i = n.length, o = 0, u = i - 1; u - o > 1; ) {
        var s = Math.floor((o + u) / 2);
        n[s] > a ? u = s : o = s;
      }
      return a >= n[u] ? u : o;
    }
  }]);
})(q.PureComponent);
ge(qt, "displayName", "Brush");
ge(qt, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var Du, ah;
function V_() {
  if (ah) return Du;
  ah = 1;
  var t = Pc();
  function e(r, n) {
    var a;
    return t(r, function(i, o, u) {
      return a = n(i, o, u), !a;
    }), !!a;
  }
  return Du = e, Du;
}
var qu, ih;
function Y_() {
  if (ih) return qu;
  ih = 1;
  var t = iy(), e = et(), r = V_(), n = me(), a = Kn();
  function i(o, u, s) {
    var c = n(o) ? t : r;
    return s && a(o, u, s) && (u = void 0), c(o, e(u, 3));
  }
  return qu = i, qu;
}
var Z_ = Y_();
const J_ = /* @__PURE__ */ J(Z_);
var Ne = function(e, r) {
  var n = e.alwaysShow, a = e.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, Nu, oh;
function Q_() {
  if (oh) return Nu;
  oh = 1;
  var t = Sy();
  function e(r, n, a) {
    n == "__proto__" && t ? t(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return Nu = e, Nu;
}
var Bu, uh;
function eE() {
  if (uh) return Bu;
  uh = 1;
  var t = Q_(), e = wy(), r = et();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), e(a, function(u, s, c) {
      t(o, s, i(u, s, c));
    }), o;
  }
  return Bu = n, Bu;
}
var tE = eE();
const rE = /* @__PURE__ */ J(tE);
var ku, sh;
function nE() {
  if (sh) return ku;
  sh = 1;
  function t(e, r) {
    for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
      if (!r(e[n], n, e))
        return !1;
    return !0;
  }
  return ku = t, ku;
}
var Lu, ch;
function aE() {
  if (ch) return Lu;
  ch = 1;
  var t = Pc();
  function e(r, n) {
    var a = !0;
    return t(r, function(i, o, u) {
      return a = !!n(i, o, u), a;
    }), a;
  }
  return Lu = e, Lu;
}
var Fu, lh;
function iE() {
  if (lh) return Fu;
  lh = 1;
  var t = nE(), e = aE(), r = et(), n = me(), a = Kn();
  function i(o, u, s) {
    var c = n(o) ? t : e;
    return s && a(o, u, s) && (u = void 0), c(o, r(u, 3));
  }
  return Fu = i, Fu;
}
var oE = iE();
const Nm = /* @__PURE__ */ J(oE);
var uE = ["x", "y"];
function qr(t) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, qr(t);
}
function Gs() {
  return Gs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Gs.apply(this, arguments);
}
function fh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fh(Object(r), !0).forEach(function(n) {
      sE(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function sE(t, e, r) {
  return e = cE(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function cE(t) {
  var e = lE(t, "string");
  return qr(e) == "symbol" ? e : e + "";
}
function lE(t, e) {
  if (qr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function fE(t, e) {
  if (t == null) return {};
  var r = pE(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function pE(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function dE(t, e) {
  var r = t.x, n = t.y, a = fE(t, uE), i = "".concat(r), o = parseInt(i, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(e.height || a.height), f = parseInt(c, 10), l = "".concat(e.width || a.width), p = parseInt(l, 10);
  return nr(nr(nr(nr(nr({}, e), a), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: f,
    width: p,
    name: e.name,
    radius: e.radius
  });
}
function ph(t) {
  return /* @__PURE__ */ E.createElement(P_, Gs({
    shapeType: "rectangle",
    propTransformer: dE,
    activeClassName: "recharts-active-bar"
  }, t));
}
var vE = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof e == "number") return e;
    var i = B(n) || Cb(n);
    return i ? e(n, a) : (i || ht(), r);
  };
}, hE = ["value", "background"], Bm;
function Nt(t) {
  "@babel/helpers - typeof";
  return Nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nt(t);
}
function yE(t, e) {
  if (t == null) return {};
  var r = mE(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function mE(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function En() {
  return En = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, En.apply(this, arguments);
}
function dh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ie(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dh(Object(r), !0).forEach(function(n) {
      Ye(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function gE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vh(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Lm(n.key), n);
  }
}
function bE(t, e, r) {
  return e && vh(t.prototype, e), r && vh(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function OE(t, e, r) {
  return e = Tn(e), wE(t, km() ? Reflect.construct(e, r || [], Tn(t).constructor) : e.apply(t, r));
}
function wE(t, e) {
  if (e && (Nt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xE(t);
}
function xE(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function km() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (km = function() {
    return !!t;
  })();
}
function Tn(t) {
  return Tn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Tn(t);
}
function SE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Hs(t, e);
}
function Hs(t, e) {
  return Hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Hs(t, e);
}
function Ye(t, e, r) {
  return e = Lm(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Lm(t) {
  var e = AE(t, "string");
  return Nt(e) == "symbol" ? e : e + "";
}
function AE(t, e) {
  if (Nt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Nt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var zr = /* @__PURE__ */ (function(t) {
  function e() {
    var r;
    gE(this, e);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = OE(this, e, [].concat(a)), Ye(r, "state", {
      isAnimationFinished: !1
    }), Ye(r, "id", Ln("recharts-bar-")), Ye(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Ye(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return SE(e, t), bE(e, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, u = i.dataKey, s = i.activeIndex, c = i.activeBar, f = te(this.props, !1);
      return n && n.map(function(l, p) {
        var v = p === s, m = v ? c : o, h = ie(ie(ie({}, f), l), {}, {
          isActive: v,
          option: m,
          index: p,
          dataKey: u,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ E.createElement(he, En({
          className: "recharts-bar-rectangle"
        }, rs(a.props, l, p), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(l?.x, "-").concat(l?.y, "-").concat(l?.value, "-").concat(p)
        }), /* @__PURE__ */ E.createElement(ph, h));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, u = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, f = a.animationEasing, l = a.animationId, p = this.state.prevData;
      return /* @__PURE__ */ E.createElement(Ze, {
        begin: s,
        duration: c,
        isActive: u,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(v) {
        var m = v.t, h = i.map(function(d, g) {
          var O = p && p[g];
          if (O) {
            var w = xt(O.x, d.x), S = xt(O.y, d.y), y = xt(O.width, d.width), b = xt(O.height, d.height);
            return ie(ie({}, d), {}, {
              x: w(m),
              y: S(m),
              width: y(m),
              height: b(m)
            });
          }
          if (o === "horizontal") {
            var x = xt(0, d.height), A = x(m);
            return ie(ie({}, d), {}, {
              y: d.y + d.height - A,
              height: A
            });
          }
          var P = xt(0, d.width), I = P(m);
          return ie(ie({}, d), {}, {
            width: I
          });
        });
        return /* @__PURE__ */ E.createElement(he, null, n.renderRectanglesStatically(h));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !Rc(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, u = a.activeIndex, s = te(this.props.background, !1);
      return i.map(function(c, f) {
        c.value;
        var l = c.background, p = yE(c, hE);
        if (!l)
          return null;
        var v = ie(ie(ie(ie(ie({}, p), {}, {
          fill: "#eee"
        }, l), s), rs(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ E.createElement(ph, En({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === u
        }, v));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, u = i.xAxis, s = i.yAxis, c = i.layout, f = i.children, l = Ie(f, Jn);
      if (!l)
        return null;
      var p = c === "vertical" ? o[0].height / 2 : o[0].width / 2, v = function(d, g) {
        var O = Array.isArray(d.value) ? d.value[1] : d.value;
        return {
          x: d.x,
          y: d.y,
          value: O,
          errorVal: Me(d, g)
        };
      }, m = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ E.createElement(he, m, l.map(function(h) {
        return /* @__PURE__ */ E.cloneElement(h, {
          key: "error-bar-".concat(a, "-").concat(h.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          offset: p,
          dataPointFormatter: v
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, u = n.xAxis, s = n.yAxis, c = n.left, f = n.top, l = n.width, p = n.height, v = n.isAnimationActive, m = n.background, h = n.id;
      if (a || !i || !i.length)
        return null;
      var d = this.state.isAnimationFinished, g = ee("recharts-bar", o), O = u && u.allowDataOverflow, w = s && s.allowDataOverflow, S = O || w, y = H(h) ? this.id : h;
      return /* @__PURE__ */ E.createElement(he, {
        className: g
      }, O || w ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: O ? c : c - l / 2,
        y: w ? f : f - p / 2,
        width: O ? l : l * 2,
        height: w ? p : p * 2
      }))) : null, /* @__PURE__ */ E.createElement(he, {
        className: "recharts-bar-rectangles",
        clipPath: S ? "url(#clipPath-".concat(y, ")") : null
      }, m ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, y), (!v || d) && pt.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: a.curData
      } : n.data !== a.curData ? {
        curData: n.data
      } : null;
    }
  }]);
})(q.PureComponent);
Bm = zr;
Ye(zr, "displayName", "Bar");
Ye(zr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Gn.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Ye(zr, "getComposedData", function(t) {
  var e = t.props, r = t.item, n = t.barPosition, a = t.bandSize, i = t.xAxis, o = t.yAxis, u = t.xAxisTicks, s = t.yAxisTicks, c = t.stackedData, f = t.dataStartIndex, l = t.displayedData, p = t.offset, v = SA(n, r);
  if (!v)
    return null;
  var m = e.layout, h = r.type.defaultProps, d = h !== void 0 ? ie(ie({}, h), r.props) : r.props, g = d.dataKey, O = d.children, w = d.minPointSize, S = m === "horizontal" ? o : i, y = c ? S.scale.domain() : null, b = IA({
    numericAxis: S
  }), x = Ie(O, Iy), A = l.map(function(P, I) {
    var _, T, M, $, C, R;
    c ? _ = AA(c[f + I], y) : (_ = Me(P, g), Array.isArray(_) || (_ = [b, _]));
    var D = vE(w, Bm.defaultProps.minPointSize)(_[1], I);
    if (m === "horizontal") {
      var N, F = [o.scale(_[0]), o.scale(_[1])], W = F[0], K = F[1];
      T = uv({
        axis: i,
        ticks: u,
        bandSize: a,
        offset: v.offset,
        entry: P,
        index: I
      }), M = (N = K ?? W) !== null && N !== void 0 ? N : void 0, $ = v.size;
      var k = W - K;
      if (C = Number.isNaN(k) ? 0 : k, R = {
        x: T,
        y: o.y,
        width: $,
        height: o.height
      }, Math.abs(D) > 0 && Math.abs(C) < Math.abs(D)) {
        var G = Re(C || D) * (Math.abs(D) - Math.abs(C));
        M -= G, C += G;
      }
    } else {
      var ne = [i.scale(_[0]), i.scale(_[1])], le = ne[0], _e = ne[1];
      if (T = le, M = uv({
        axis: o,
        ticks: s,
        bandSize: a,
        offset: v.offset,
        entry: P,
        index: I
      }), $ = _e - le, C = v.size, R = {
        x: i.x,
        y: M,
        width: i.width,
        height: C
      }, Math.abs(D) > 0 && Math.abs($) < Math.abs(D)) {
        var Xt = Re($ || D) * (Math.abs(D) - Math.abs($));
        $ += Xt;
      }
    }
    return ie(ie(ie({}, P), {}, {
      x: T,
      y: M,
      width: $,
      height: C,
      value: c ? _ : _[1],
      payload: P,
      background: R
    }, x && x[I] && x[I].props), {}, {
      tooltipPayload: [wm(r, P)],
      tooltipPosition: {
        x: T + $ / 2,
        y: M + C / 2
      }
    });
  });
  return ie({
    data: A,
    layout: m
  }, p);
});
function Nr(t) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Nr(t);
}
function PE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hh(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Fm(n.key), n);
  }
}
function _E(t, e, r) {
  return e && hh(t.prototype, e), r && hh(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function yh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yh(Object(r), !0).forEach(function(n) {
      ta(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ta(t, e, r) {
  return e = Fm(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Fm(t) {
  var e = EE(t, "string");
  return Nr(e) == "symbol" ? e : e + "";
}
function EE(t, e) {
  if (Nr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Nr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Cj = function(e, r, n, a, i) {
  var o = e.width, u = e.height, s = e.layout, c = e.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, p = !!be(c, zr);
  return f.reduce(function(v, m) {
    var h = r[m], d = h.orientation, g = h.domain, O = h.padding, w = O === void 0 ? {} : O, S = h.mirror, y = h.reversed, b = "".concat(d).concat(S ? "Mirror" : ""), x, A, P, I, _;
    if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
      var T = g[1] - g[0], M = 1 / 0, $ = h.categoricalDomain.sort(Db);
      if ($.forEach(function(ne, le) {
        le > 0 && (M = Math.min((ne || 0) - ($[le - 1] || 0), M));
      }), Number.isFinite(M)) {
        var C = M / T, R = h.layout === "vertical" ? n.height : n.width;
        if (h.padding === "gap" && (x = C * R / 2), h.padding === "no-gap") {
          var D = je(e.barCategoryGap, C * R), N = C * R / 2;
          x = N - D - (N - D) / R * D;
        }
      }
    }
    a === "xAxis" ? A = [n.left + (w.left || 0) + (x || 0), n.left + n.width - (w.right || 0) - (x || 0)] : a === "yAxis" ? A = s === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (x || 0), n.top + n.height - (w.bottom || 0) - (x || 0)] : A = h.range, y && (A = [A[1], A[0]]);
    var F = mm(h, i, p), W = F.scale, K = F.realScaleType;
    W.domain(g).range(A), gm(W);
    var k = bm(W, Te(Te({}, h), {}, {
      realScaleType: K
    }));
    a === "xAxis" ? (_ = d === "top" && !S || d === "bottom" && S, P = n.left, I = l[b] - _ * h.height) : a === "yAxis" && (_ = d === "left" && !S || d === "right" && S, P = l[b] - _ * h.width, I = n.top);
    var G = Te(Te(Te({}, h), k), {}, {
      realScaleType: K,
      x: P,
      y: I,
      scale: W,
      width: a === "xAxis" ? n.width : h.width,
      height: a === "yAxis" ? n.height : h.height
    });
    return G.bandSize = hn(G, k), !h.hide && a === "xAxis" ? l[b] += (_ ? -1 : 1) * G.height : h.hide || (l[b] += (_ ? -1 : 1) * G.width), Te(Te({}, v), {}, ta({}, m, G));
  }, {});
}, Wm = function(e, r) {
  var n = e.x, a = e.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, TE = function(e) {
  var r = e.x1, n = e.y1, a = e.x2, i = e.y2;
  return Wm({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, zm = /* @__PURE__ */ (function() {
  function t(e) {
    PE(this, t), this.scale = e;
  }
  return _E(t, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.bandAware, i = n.position;
      if (r !== void 0) {
        if (i)
          switch (i) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (a) {
          var s = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + s;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), a = n[0], i = n[n.length - 1];
      return a <= i ? r >= a && r <= i : r >= i && r <= a;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new t(r);
    }
  }]);
})();
ta(zm, "EPS", 1e-4);
var kc = function(e) {
  var r = Object.keys(e).reduce(function(n, a) {
    return Te(Te({}, n), {}, ta({}, a, zm.create(e[a])));
  }, {});
  return Te(Te({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, u = i.position;
      return rE(a, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(a) {
      return Nm(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function jE(t) {
  return (t % 180 + 180) % 180;
}
var $j = function(e) {
  var r = e.width, n = e.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = jE(a), o = i * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, Wu, mh;
function IE() {
  if (mh) return Wu;
  mh = 1;
  var t = et(), e = Wr(), r = Wn();
  function n(a) {
    return function(i, o, u) {
      var s = Object(i);
      if (!e(i)) {
        var c = t(o, 3);
        i = r(i), o = function(l) {
          return c(s[l], l, s);
        };
      }
      var f = a(i, o, u);
      return f > -1 ? s[c ? i[f] : f] : void 0;
    };
  }
  return Wu = n, Wu;
}
var zu, gh;
function ME() {
  if (gh) return zu;
  gh = 1;
  var t = $m();
  function e(r) {
    var n = t(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return zu = e, zu;
}
var Ku, bh;
function CE() {
  if (bh) return Ku;
  bh = 1;
  var t = yy(), e = et(), r = ME(), n = Math.max;
  function a(i, o, u) {
    var s = i == null ? 0 : i.length;
    if (!s)
      return -1;
    var c = u == null ? 0 : r(u);
    return c < 0 && (c = n(s + c, 0)), t(i, e(o, 3), c);
  }
  return Ku = a, Ku;
}
var Gu, Oh;
function $E() {
  if (Oh) return Gu;
  Oh = 1;
  var t = IE(), e = CE(), r = t(e);
  return Gu = r, Gu;
}
var RE = $E();
const DE = /* @__PURE__ */ J(RE);
var qE = Hh();
const NE = /* @__PURE__ */ J(qE);
var BE = NE(function(t) {
  return {
    x: t.left,
    y: t.top,
    width: t.width,
    height: t.height
  };
}, function(t) {
  return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join("");
}), Lc = /* @__PURE__ */ q.createContext(void 0), Fc = /* @__PURE__ */ q.createContext(void 0), Km = /* @__PURE__ */ q.createContext(void 0), Gm = /* @__PURE__ */ q.createContext({}), Hm = /* @__PURE__ */ q.createContext(void 0), Um = /* @__PURE__ */ q.createContext(0), Xm = /* @__PURE__ */ q.createContext(0), wh = function(e) {
  var r = e.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = e.clipPathId, u = e.children, s = e.width, c = e.height, f = BE(i);
  return /* @__PURE__ */ E.createElement(Lc.Provider, {
    value: n
  }, /* @__PURE__ */ E.createElement(Fc.Provider, {
    value: a
  }, /* @__PURE__ */ E.createElement(Gm.Provider, {
    value: i
  }, /* @__PURE__ */ E.createElement(Km.Provider, {
    value: f
  }, /* @__PURE__ */ E.createElement(Hm.Provider, {
    value: o
  }, /* @__PURE__ */ E.createElement(Um.Provider, {
    value: c
  }, /* @__PURE__ */ E.createElement(Xm.Provider, {
    value: s
  }, u)))))));
}, kE = function() {
  return q.useContext(Hm);
}, LE = function(e) {
  var r = q.useContext(Lc);
  r == null && ht();
  var n = r[e];
  return n == null && ht(), n;
}, Rj = function() {
  var e = q.useContext(Lc);
  return Ve(e);
}, Dj = function() {
  var e = q.useContext(Fc), r = DE(e, function(n) {
    return Nm(n.domain, Number.isFinite);
  });
  return r || Ve(e);
}, FE = function(e) {
  var r = q.useContext(Fc);
  r == null && ht();
  var n = r[e];
  return n == null && ht(), n;
}, WE = function() {
  var e = q.useContext(Km);
  return e;
}, qj = function() {
  return q.useContext(Gm);
}, Nj = function() {
  return q.useContext(Xm);
}, Bj = function() {
  return q.useContext(Um);
};
function Bt(t) {
  "@babel/helpers - typeof";
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bt(t);
}
function zE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function KE(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Ym(n.key), n);
  }
}
function GE(t, e, r) {
  return e && KE(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function HE(t, e, r) {
  return e = jn(e), UE(t, Vm() ? Reflect.construct(e, r || [], jn(t).constructor) : e.apply(t, r));
}
function UE(t, e) {
  if (e && (Bt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return XE(t);
}
function XE(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Vm() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vm = function() {
    return !!t;
  })();
}
function jn(t) {
  return jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jn(t);
}
function VE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Us(t, e);
}
function Us(t, e) {
  return Us = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Us(t, e);
}
function xh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xh(Object(r), !0).forEach(function(n) {
      Wc(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : xh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Wc(t, e, r) {
  return e = Ym(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Ym(t) {
  var e = YE(t, "string");
  return Bt(e) == "symbol" ? e : e + "";
}
function YE(t, e) {
  if (Bt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Bt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function ZE(t, e) {
  return tT(t) || eT(t, e) || QE(t, e) || JE();
}
function JE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QE(t, e) {
  if (t) {
    if (typeof t == "string") return Ah(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ah(t, e);
  }
}
function Ah(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function eT(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function tT(t) {
  if (Array.isArray(t)) return t;
}
function Xs() {
  return Xs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Xs.apply(this, arguments);
}
var rT = function(e, r) {
  var n;
  return /* @__PURE__ */ E.isValidElement(e) ? n = /* @__PURE__ */ E.cloneElement(e, r) : U(e) ? n = e(r) : n = /* @__PURE__ */ E.createElement("line", Xs({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, nT = function(e, r, n, a, i, o, u, s, c) {
  var f = i.x, l = i.y, p = i.width, v = i.height;
  if (n) {
    var m = c.y, h = e.y.apply(m, {
      position: o
    });
    if (Ne(c, "discard") && !e.y.isInRange(h))
      return null;
    var d = [{
      x: f + p,
      y: h
    }, {
      x: f,
      y: h
    }];
    return s === "left" ? d.reverse() : d;
  }
  if (r) {
    var g = c.x, O = e.x.apply(g, {
      position: o
    });
    if (Ne(c, "discard") && !e.x.isInRange(O))
      return null;
    var w = [{
      x: O,
      y: l + v
    }, {
      x: O,
      y: l
    }];
    return u === "top" ? w.reverse() : w;
  }
  if (a) {
    var S = c.segment, y = S.map(function(b) {
      return e.apply(b, {
        position: o
      });
    });
    return Ne(c, "discard") && J_(y, function(b) {
      return !e.isInRange(b);
    }) ? null : y;
  }
  return null;
};
function aT(t) {
  var e = t.x, r = t.y, n = t.segment, a = t.xAxisId, i = t.yAxisId, o = t.shape, u = t.className, s = t.alwaysShow, c = kE(), f = LE(a), l = FE(i), p = WE();
  if (!c || !p)
    return null;
  lt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var v = kc({
    x: f.scale,
    y: l.scale
  }), m = ce(e), h = ce(r), d = n && n.length === 2, g = nT(v, m, h, d, p, t.position, f.orientation, l.orientation, t);
  if (!g)
    return null;
  var O = ZE(g, 2), w = O[0], S = w.x, y = w.y, b = O[1], x = b.x, A = b.y, P = Ne(t, "hidden") ? "url(#".concat(c, ")") : void 0, I = Sh(Sh({
    clipPath: P
  }, te(t, !0)), {}, {
    x1: S,
    y1: y,
    x2: x,
    y2: A
  });
  return /* @__PURE__ */ E.createElement(he, {
    className: ee("recharts-reference-line", u)
  }, rT(o, I), ye.renderCallByParent(t, TE({
    x1: S,
    y1: y,
    x2: x,
    y2: A
  })));
}
var zc = /* @__PURE__ */ (function(t) {
  function e() {
    return zE(this, e), HE(this, e, arguments);
  }
  return VE(e, t), GE(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ E.createElement(aT, this.props);
    }
  }]);
})(E.Component);
Wc(zc, "displayName", "ReferenceLine");
Wc(zc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function Vs() {
  return Vs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Vs.apply(this, arguments);
}
function kt(t) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kt(t);
}
function Ph(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ph(Object(r), !0).forEach(function(n) {
      ra(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ph(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function iT(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function oT(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Jm(n.key), n);
  }
}
function uT(t, e, r) {
  return e && oT(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function sT(t, e, r) {
  return e = In(e), cT(t, Zm() ? Reflect.construct(e, r || [], In(t).constructor) : e.apply(t, r));
}
function cT(t, e) {
  if (e && (kt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lT(t);
}
function lT(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Zm() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zm = function() {
    return !!t;
  })();
}
function In(t) {
  return In = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, In(t);
}
function fT(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ys(t, e);
}
function Ys(t, e) {
  return Ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ys(t, e);
}
function ra(t, e, r) {
  return e = Jm(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Jm(t) {
  var e = pT(t, "string");
  return kt(e) == "symbol" ? e : e + "";
}
function pT(t, e) {
  if (kt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (kt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var dT = function(e) {
  var r = e.x, n = e.y, a = e.xAxis, i = e.yAxis, o = kc({
    x: a.scale,
    y: i.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Ne(e, "discard") && !o.isInRange(u) ? null : u;
}, na = /* @__PURE__ */ (function(t) {
  function e() {
    return iT(this, e), sT(this, e, arguments);
  }
  return fT(e, t), uT(e, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, u = n.alwaysShow, s = n.clipPathId, c = ce(a), f = ce(i);
      if (lt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = dT(this.props);
      if (!l)
        return null;
      var p = l.x, v = l.y, m = this.props, h = m.shape, d = m.className, g = Ne(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, O = _h(_h({
        clipPath: g
      }, te(this.props, !0)), {}, {
        cx: p,
        cy: v
      });
      return /* @__PURE__ */ E.createElement(he, {
        className: ee("recharts-reference-dot", d)
      }, e.renderDot(h, O), ye.renderCallByParent(this.props, {
        x: p - o,
        y: v - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(E.Component);
ra(na, "displayName", "ReferenceDot");
ra(na, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
ra(na, "renderDot", function(t, e) {
  var r;
  return /* @__PURE__ */ E.isValidElement(t) ? r = /* @__PURE__ */ E.cloneElement(t, e) : U(t) ? r = t(e) : r = /* @__PURE__ */ E.createElement(Cm, Vs({}, e, {
    cx: e.cx,
    cy: e.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function Zs() {
  return Zs = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Zs.apply(this, arguments);
}
function Lt(t) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Lt(t);
}
function Eh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Th(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Eh(Object(r), !0).forEach(function(n) {
      aa(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Eh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function vT(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hT(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, eg(n.key), n);
  }
}
function yT(t, e, r) {
  return e && hT(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function mT(t, e, r) {
  return e = Mn(e), gT(t, Qm() ? Reflect.construct(e, r || [], Mn(t).constructor) : e.apply(t, r));
}
function gT(t, e) {
  if (e && (Lt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bT(t);
}
function bT(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Qm() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qm = function() {
    return !!t;
  })();
}
function Mn(t) {
  return Mn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mn(t);
}
function OT(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Js(t, e);
}
function Js(t, e) {
  return Js = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Js(t, e);
}
function aa(t, e, r) {
  return e = eg(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function eg(t) {
  var e = wT(t, "string");
  return Lt(e) == "symbol" ? e : e + "";
}
function wT(t, e) {
  if (Lt(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Lt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var xT = function(e, r, n, a, i) {
  var o = i.x1, u = i.x2, s = i.y1, c = i.y2, f = i.xAxis, l = i.yAxis;
  if (!f || !l) return null;
  var p = kc({
    x: f.scale,
    y: l.scale
  }), v = {
    x: e ? p.x.apply(o, {
      position: "start"
    }) : p.x.rangeMin,
    y: n ? p.y.apply(s, {
      position: "start"
    }) : p.y.rangeMin
  }, m = {
    x: r ? p.x.apply(u, {
      position: "end"
    }) : p.x.rangeMax,
    y: a ? p.y.apply(c, {
      position: "end"
    }) : p.y.rangeMax
  };
  return Ne(i, "discard") && (!p.isInRange(v) || !p.isInRange(m)) ? null : Wm(v, m);
}, ia = /* @__PURE__ */ (function(t) {
  function e() {
    return vT(this, e), mT(this, e, arguments);
  }
  return OT(e, t), yT(e, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, u = n.y2, s = n.className, c = n.alwaysShow, f = n.clipPathId;
      lt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = ce(a), p = ce(i), v = ce(o), m = ce(u), h = this.props.shape;
      if (!l && !p && !v && !m && !h)
        return null;
      var d = xT(l, p, v, m, this.props);
      if (!d && !h)
        return null;
      var g = Ne(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ E.createElement(he, {
        className: ee("recharts-reference-area", s)
      }, e.renderRect(h, Th(Th({
        clipPath: g
      }, te(this.props, !0)), d)), ye.renderCallByParent(this.props, d));
    }
  }]);
})(E.Component);
aa(ia, "displayName", "ReferenceArea");
aa(ia, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
aa(ia, "renderRect", function(t, e) {
  var r;
  return /* @__PURE__ */ E.isValidElement(t) ? r = /* @__PURE__ */ E.cloneElement(t, e) : U(t) ? r = t(e) : r = /* @__PURE__ */ E.createElement(Bc, Zs({}, e, {
    className: "recharts-reference-area-rect"
  })), r;
});
function jh(t) {
  return _T(t) || PT(t) || AT(t) || ST();
}
function ST() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AT(t, e) {
  if (t) {
    if (typeof t == "string") return Qs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qs(t, e);
  }
}
function PT(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function _T(t) {
  if (Array.isArray(t)) return Qs(t);
}
function Qs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var ec = function(e, r, n, a, i) {
  var o = Ie(e, zc), u = Ie(e, na), s = [].concat(jh(o), jh(u)), c = Ie(e, ia), f = "".concat(a, "Id"), l = a[0], p = r;
  if (s.length && (p = s.reduce(function(h, d) {
    if (d.props[f] === n && Ne(d.props, "extendDomain") && B(d.props[l])) {
      var g = d.props[l];
      return [Math.min(h[0], g), Math.max(h[1], g)];
    }
    return h;
  }, p)), c.length) {
    var v = "".concat(l, "1"), m = "".concat(l, "2");
    p = c.reduce(function(h, d) {
      if (d.props[f] === n && Ne(d.props, "extendDomain") && B(d.props[v]) && B(d.props[m])) {
        var g = d.props[v], O = d.props[m];
        return [Math.min(h[0], g, O), Math.max(h[1], g, O)];
      }
      return h;
    }, p);
  }
  return i && i.length && (p = i.reduce(function(h, d) {
    return B(d) ? [Math.min(h[0], d), Math.max(h[1], d)] : h;
  }, p)), p;
}, Hu = { exports: {} }, Ih;
function ET() {
  return Ih || (Ih = 1, (function(t) {
    var e = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function a(s, c, f) {
      this.fn = s, this.context = c, this.once = f || !1;
    }
    function i(s, c, f, l, p) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var v = new a(f, l || s, p), m = r ? r + c : c;
      return s._events[m] ? s._events[m].fn ? s._events[m] = [s._events[m], v] : s._events[m].push(v) : (s._events[m] = v, s._eventsCount++), s;
    }
    function o(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], f, l;
      if (this._eventsCount === 0) return c;
      for (l in f = this._events)
        e.call(f, l) && c.push(r ? l.slice(1) : l);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
    }, u.prototype.listeners = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var p = 0, v = l.length, m = new Array(v); p < v; p++)
        m[p] = l[p].fn;
      return m;
    }, u.prototype.listenerCount = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      return l ? l.fn ? 1 : l.length : 0;
    }, u.prototype.emit = function(c, f, l, p, v, m) {
      var h = r ? r + c : c;
      if (!this._events[h]) return !1;
      var d = this._events[h], g = arguments.length, O, w;
      if (d.fn) {
        switch (d.once && this.removeListener(c, d.fn, void 0, !0), g) {
          case 1:
            return d.fn.call(d.context), !0;
          case 2:
            return d.fn.call(d.context, f), !0;
          case 3:
            return d.fn.call(d.context, f, l), !0;
          case 4:
            return d.fn.call(d.context, f, l, p), !0;
          case 5:
            return d.fn.call(d.context, f, l, p, v), !0;
          case 6:
            return d.fn.call(d.context, f, l, p, v, m), !0;
        }
        for (w = 1, O = new Array(g - 1); w < g; w++)
          O[w - 1] = arguments[w];
        d.fn.apply(d.context, O);
      } else {
        var S = d.length, y;
        for (w = 0; w < S; w++)
          switch (d[w].once && this.removeListener(c, d[w].fn, void 0, !0), g) {
            case 1:
              d[w].fn.call(d[w].context);
              break;
            case 2:
              d[w].fn.call(d[w].context, f);
              break;
            case 3:
              d[w].fn.call(d[w].context, f, l);
              break;
            case 4:
              d[w].fn.call(d[w].context, f, l, p);
              break;
            default:
              if (!O) for (y = 1, O = new Array(g - 1); y < g; y++)
                O[y - 1] = arguments[y];
              d[w].fn.apply(d[w].context, O);
          }
      }
      return !0;
    }, u.prototype.on = function(c, f, l) {
      return i(this, c, f, l, !1);
    }, u.prototype.once = function(c, f, l) {
      return i(this, c, f, l, !0);
    }, u.prototype.removeListener = function(c, f, l, p) {
      var v = r ? r + c : c;
      if (!this._events[v]) return this;
      if (!f)
        return o(this, v), this;
      var m = this._events[v];
      if (m.fn)
        m.fn === f && (!p || m.once) && (!l || m.context === l) && o(this, v);
      else {
        for (var h = 0, d = [], g = m.length; h < g; h++)
          (m[h].fn !== f || p && !m[h].once || l && m[h].context !== l) && d.push(m[h]);
        d.length ? this._events[v] = d.length === 1 ? d[0] : d : o(this, v);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var f;
      return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, t.exports = u;
  })(Hu)), Hu.exports;
}
var TT = ET();
const jT = /* @__PURE__ */ J(TT);
var Uu = new jT(), Xu = "recharts.syncMouseEvents";
function Br(t) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Br(t);
}
function IT(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function MT(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, tg(n.key), n);
  }
}
function CT(t, e, r) {
  return e && MT(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Vu(t, e, r) {
  return e = tg(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function tg(t) {
  var e = $T(t, "string");
  return Br(e) == "symbol" ? e : e + "";
}
function $T(t, e) {
  if (Br(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var RT = /* @__PURE__ */ (function() {
  function t() {
    IT(this, t), Vu(this, "activeIndex", 0), Vu(this, "coordinateList", []), Vu(this, "layout", "horizontal");
  }
  return CT(t, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, u = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, f = r.offset, l = f === void 0 ? null : f, p = r.mouseHandlerCallback, v = p === void 0 ? null : p;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = v ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, u = a.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = i + s + c, p = o + this.offset.top + u / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: p
        });
      }
    }
  }]);
})();
function DT(t, e, r) {
  if (r === "number" && e === !0 && Array.isArray(t)) {
    var n = t?.[0], a = t?.[1];
    if (n && a && B(n) && B(a))
      return !0;
  }
  return !1;
}
function qT(t, e, r, n) {
  var a = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: t === "horizontal" ? e.x - a : r.left + 0.5,
    y: t === "horizontal" ? r.top + 0.5 : e.y - a,
    width: t === "horizontal" ? n : r.width - 1,
    height: t === "horizontal" ? r.height - 1 : n
  };
}
function rg(t) {
  var e = t.cx, r = t.cy, n = t.radius, a = t.startAngle, i = t.endAngle, o = ve(e, r, n, a), u = ve(e, r, n, i);
  return {
    points: [o, u],
    cx: e,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function NT(t, e, r) {
  var n, a, i, o;
  if (t === "horizontal")
    n = e.x, i = n, a = r.top, o = r.top + r.height;
  else if (t === "vertical")
    a = e.y, o = a, n = r.left, i = r.left + r.width;
  else if (e.cx != null && e.cy != null)
    if (t === "centric") {
      var u = e.cx, s = e.cy, c = e.innerRadius, f = e.outerRadius, l = e.angle, p = ve(u, s, c, l), v = ve(u, s, f, l);
      n = p.x, a = p.y, i = v.x, o = v.y;
    } else
      return rg(e);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function kr(t) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, kr(t);
}
function Mh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function en(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mh(Object(r), !0).forEach(function(n) {
      BT(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Mh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function BT(t, e, r) {
  return e = kT(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function kT(t) {
  var e = LT(t, "string");
  return kr(e) == "symbol" ? e : e + "";
}
function LT(t, e) {
  if (kr(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function FT(t) {
  var e, r, n = t.element, a = t.tooltipEventType, i = t.isActive, o = t.activeCoordinate, u = t.activePayload, s = t.offset, c = t.activeTooltipIndex, f = t.tooltipAxisBandSize, l = t.layout, p = t.chartName, v = (e = n.props.cursor) !== null && e !== void 0 ? e : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !v || !i || !o || p !== "ScatterChart" && a !== "axis")
    return null;
  var m, h = Av;
  if (p === "ScatterChart")
    m = o, h = JP;
  else if (p === "BarChart")
    m = qT(l, o, s, f), h = Bc;
  else if (l === "radial") {
    var d = rg(o), g = d.cx, O = d.cy, w = d.radius, S = d.startAngle, y = d.endAngle;
    m = {
      cx: g,
      cy: O,
      startAngle: S,
      endAngle: y,
      innerRadius: w,
      outerRadius: w
    }, h = Pm;
  } else
    m = {
      points: NT(l, o, s)
    }, h = Av;
  var b = en(en(en(en({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), m), te(v, !1)), {}, {
    payload: u,
    payloadIndex: c,
    className: ee("recharts-tooltip-cursor", v.className)
  });
  return /* @__PURE__ */ q.isValidElement(v) ? /* @__PURE__ */ q.cloneElement(v, b) : /* @__PURE__ */ q.createElement(h, b);
}
var WT = ["item"], zT = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Ft(t) {
  "@babel/helpers - typeof";
  return Ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ft(t);
}
function Pt() {
  return Pt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Pt.apply(this, arguments);
}
function Ch(t, e) {
  return HT(t) || GT(t, e) || ag(t, e) || KT();
}
function KT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GT(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e !== 0) for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return u;
  }
}
function HT(t) {
  if (Array.isArray(t)) return t;
}
function $h(t, e) {
  if (t == null) return {};
  var r = UT(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function UT(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function XT(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function VT(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ig(n.key), n);
  }
}
function YT(t, e, r) {
  return e && VT(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ZT(t, e, r) {
  return e = Cn(e), JT(t, ng() ? Reflect.construct(e, r || [], Cn(t).constructor) : e.apply(t, r));
}
function JT(t, e) {
  if (e && (Ft(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QT(t);
}
function QT(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ng() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ng = function() {
    return !!t;
  })();
}
function Cn(t) {
  return Cn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Cn(t);
}
function ej(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && tc(t, e);
}
function tc(t, e) {
  return tc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, tc(t, e);
}
function Wt(t) {
  return nj(t) || rj(t) || ag(t) || tj();
}
function tj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ag(t, e) {
  if (t) {
    if (typeof t == "string") return rc(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rc(t, e);
  }
}
function rj(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function nj(t) {
  if (Array.isArray(t)) return rc(t);
}
function rc(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Rh(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function j(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Rh(Object(r), !0).forEach(function(n) {
      z(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Rh(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function z(t, e, r) {
  return e = ig(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function ig(t) {
  var e = aj(t, "string");
  return Ft(e) == "symbol" ? e : e + "";
}
function aj(t, e) {
  if (Ft(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (Ft(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var ij = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, oj = {
  width: "100%",
  height: "100%"
}, og = {
  x: 0,
  y: 0
};
function tn(t) {
  return t;
}
var uj = function(e, r) {
  return r === "horizontal" ? e.x : r === "vertical" ? e.y : r === "centric" ? e.angle : e.radius;
}, sj = function(e, r, n, a) {
  var i = r.find(function(f) {
    return f && f.index === n;
  });
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: a.y
      };
    if (e === "vertical")
      return {
        x: a.x,
        y: i.coordinate
      };
    if (e === "centric") {
      var o = i.coordinate, u = a.radius;
      return j(j(j({}, a), ve(a.cx, a.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var s = i.coordinate, c = a.angle;
    return j(j(j({}, a), ve(a.cx, a.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return og;
}, oa = function(e, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(u, s) {
    var c = s.props.data;
    return c && c.length ? [].concat(Wt(u), Wt(c)) : u;
  }, []);
  return o.length > 0 ? o : e && e.length && B(a) && B(i) ? e.slice(a, i + 1) : [];
};
function ug(t) {
  return t === "number" ? [0, "auto"] : void 0;
}
var nc = function(e, r, n, a) {
  var i = e.graphicalItems, o = e.tooltipAxis, u = oa(r, e);
  return n < 0 || !i || !i.length || n >= u.length ? null : i.reduce(function(s, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && e.dataStartIndex + e.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    e.dataEndIndex - e.dataStartIndex >= n && (l = l.slice(e.dataStartIndex, e.dataEndIndex + 1));
    var p;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var v = l === void 0 ? u : l;
      p = an(v, o.dataKey, a);
    } else
      p = l && l[n] || u[n];
    return p ? [].concat(Wt(s), [wm(c, p)]) : s;
  }, []);
}, Dh = function(e, r, n, a) {
  var i = a || {
    x: e.chartX,
    y: e.chartY
  }, o = uj(i, n), u = e.orderedTooltipTicks, s = e.tooltipAxis, c = e.tooltipTicks, f = mA(o, u, c, s);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, p = nc(e, r, f, l), v = sj(n, u, f, i);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: p,
      activeCoordinate: v
    };
  }
  return null;
}, cj = function(e, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = e.layout, l = e.children, p = e.stackOffset, v = ym(f, i);
  return n.reduce(function(m, h) {
    var d, g = h.type.defaultProps !== void 0 ? j(j({}, h.type.defaultProps), h.props) : h.props, O = g.type, w = g.dataKey, S = g.allowDataOverflow, y = g.allowDuplicatedCategory, b = g.scale, x = g.ticks, A = g.includeHidden, P = g[o];
    if (m[P])
      return m;
    var I = oa(e.data, {
      graphicalItems: a.filter(function(k) {
        var G, ne = o in k.props ? k.props[o] : (G = k.type.defaultProps) === null || G === void 0 ? void 0 : G[o];
        return ne === P;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), _ = I.length, T, M, $;
    DT(g.domain, S, O) && (T = Ts(g.domain, null, S), v && (O === "number" || b !== "auto") && ($ = cr(I, w, "category")));
    var C = ug(O);
    if (!T || T.length === 0) {
      var R, D = (R = g.domain) !== null && R !== void 0 ? R : C;
      if (w) {
        if (T = cr(I, w, O), O === "category" && v) {
          var N = Rb(T);
          y && N ? (M = T, T = An(0, _)) : y || (T = lv(D, T, h).reduce(function(k, G) {
            return k.indexOf(G) >= 0 ? k : [].concat(Wt(k), [G]);
          }, []));
        } else if (O === "category")
          y ? T = T.filter(function(k) {
            return k !== "" && !H(k);
          }) : T = lv(D, T, h).reduce(function(k, G) {
            return k.indexOf(G) >= 0 || G === "" || H(G) ? k : [].concat(Wt(k), [G]);
          }, []);
        else if (O === "number") {
          var F = xA(I, a.filter(function(k) {
            var G, ne, le = o in k.props ? k.props[o] : (G = k.type.defaultProps) === null || G === void 0 ? void 0 : G[o], _e = "hide" in k.props ? k.props.hide : (ne = k.type.defaultProps) === null || ne === void 0 ? void 0 : ne.hide;
            return le === P && (A || !_e);
          }), w, i, f);
          F && (T = F);
        }
        v && (O === "number" || b !== "auto") && ($ = cr(I, w, "category"));
      } else v ? T = An(0, _) : u && u[P] && u[P].hasStack && O === "number" ? T = p === "expand" ? [0, 1] : Om(u[P].stackGroups, s, c) : T = hm(I, a.filter(function(k) {
        var G = o in k.props ? k.props[o] : k.type.defaultProps[o], ne = "hide" in k.props ? k.props.hide : k.type.defaultProps.hide;
        return G === P && (A || !ne);
      }), O, f, !0);
      if (O === "number")
        T = ec(l, T, P, i, x), D && (T = Ts(D, T, S));
      else if (O === "category" && D) {
        var W = D, K = T.every(function(k) {
          return W.indexOf(k) >= 0;
        });
        K && (T = W);
      }
    }
    return j(j({}, m), {}, z({}, P, j(j({}, g), {}, {
      axisType: i,
      domain: T,
      categoricalDomain: $,
      duplicateDomain: M,
      originalDomain: (d = g.domain) !== null && d !== void 0 ? d : C,
      isCategorical: v,
      layout: f
    })));
  }, {});
}, lj = function(e, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = e.layout, l = e.children, p = oa(e.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), v = p.length, m = ym(f, i), h = -1;
  return n.reduce(function(d, g) {
    var O = g.type.defaultProps !== void 0 ? j(j({}, g.type.defaultProps), g.props) : g.props, w = O[o], S = ug("number");
    if (!d[w]) {
      h++;
      var y;
      return m ? y = An(0, v) : u && u[w] && u[w].hasStack ? (y = Om(u[w].stackGroups, s, c), y = ec(l, y, w, i)) : (y = Ts(S, hm(p, n.filter(function(b) {
        var x, A, P = o in b.props ? b.props[o] : (x = b.type.defaultProps) === null || x === void 0 ? void 0 : x[o], I = "hide" in b.props ? b.props.hide : (A = b.type.defaultProps) === null || A === void 0 ? void 0 : A.hide;
        return P === w && !I;
      }), "number", f), a.defaultProps.allowDataOverflow), y = ec(l, y, w, i)), j(j({}, d), {}, z({}, w, j(j({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: qe(ij, "".concat(i, ".").concat(h % 2), null),
        domain: y,
        originalDomain: S,
        isCategorical: m,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return d;
  }, {});
}, fj = function(e, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = e.children, l = "".concat(a, "Id"), p = Ie(f, i), v = {};
  return p && p.length ? v = cj(e, {
    axes: p,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (v = lj(e, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  })), v;
}, pj = function(e) {
  var r = Ve(e), n = or(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: _c(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: hn(r, n)
  };
}, qh = function(e) {
  var r = e.children, n = e.defaultShowTooltip, a = be(r, qt), i = 0, o = 0;
  return e.data && e.data.length !== 0 && (o = e.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, dj = function(e) {
  return !e || !e.length ? !1 : e.some(function(r) {
    var n = ze(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Nh = function(e) {
  return e === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : e === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : e === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, vj = function(e, r) {
  var n = e.props, a = e.graphicalItems, i = e.xAxisMap, o = i === void 0 ? {} : i, u = e.yAxisMap, s = u === void 0 ? {} : u, c = n.width, f = n.height, l = n.children, p = n.margin || {}, v = be(l, qt), m = be(l, _t), h = Object.keys(s).reduce(function(y, b) {
    var x = s[b], A = x.orientation;
    return !x.mirror && !x.hide ? j(j({}, y), {}, z({}, A, y[A] + x.width)) : y;
  }, {
    left: p.left || 0,
    right: p.right || 0
  }), d = Object.keys(o).reduce(function(y, b) {
    var x = o[b], A = x.orientation;
    return !x.mirror && !x.hide ? j(j({}, y), {}, z({}, A, qe(y, "".concat(A)) + x.height)) : y;
  }, {
    top: p.top || 0,
    bottom: p.bottom || 0
  }), g = j(j({}, d), h), O = g.bottom;
  v && (g.bottom += v.props.height || qt.defaultProps.height), m && r && (g = OA(g, a, n, r));
  var w = c - g.left - g.right, S = f - g.top - g.bottom;
  return j(j({
    brushBottom: O
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(w, 0),
    height: Math.max(S, 0)
  });
}, hj = function(e, r) {
  if (r === "xAxis")
    return e[r].width;
  if (r === "yAxis")
    return e[r].height;
}, kj = function(e) {
  var r = e.chartName, n = e.GraphicalChild, a = e.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = e.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, s = e.axisComponents, c = e.legendContent, f = e.formatAxisMap, l = e.defaultProps, p = function(g, O) {
    var w = O.graphicalItems, S = O.stackGroups, y = O.offset, b = O.updateId, x = O.dataStartIndex, A = O.dataEndIndex, P = g.barSize, I = g.layout, _ = g.barGap, T = g.barCategoryGap, M = g.maxBarSize, $ = Nh(I), C = $.numericAxisName, R = $.cateAxisName, D = dj(w), N = [];
    return w.forEach(function(F, W) {
      var K = oa(g.data, {
        graphicalItems: [F],
        dataStartIndex: x,
        dataEndIndex: A
      }), k = F.type.defaultProps !== void 0 ? j(j({}, F.type.defaultProps), F.props) : F.props, G = k.dataKey, ne = k.maxBarSize, le = k["".concat(C, "Id")], _e = k["".concat(R, "Id")], Xt = {}, we = s.reduce(function(at, it) {
        var ua = O["".concat(it.axisType, "Map")], Kc = k["".concat(it.axisType, "Id")];
        ua && ua[Kc] || it.axisType === "zAxis" || ht();
        var Gc = ua[Kc];
        return j(j({}, at), {}, z(z({}, it.axisType, Gc), "".concat(it.axisType, "Ticks"), or(Gc)));
      }, Xt), rt = we[R], Kr = we["".concat(R, "Ticks")], gt = S && S[le] && S[le].hasStack && MA(F, S[le].stackGroups), Vt = ze(F.type).indexOf("Bar") >= 0, nt = hn(rt, Kr), bt = [], Yt = D && gA({
        barSize: P,
        stackGroups: S,
        totalSize: hj(we, R)
      });
      if (Vt) {
        var Zt, Ot, Jt = H(ne) ? M : ne, wt = (Zt = (Ot = hn(rt, Kr, !0)) !== null && Ot !== void 0 ? Ot : Jt) !== null && Zt !== void 0 ? Zt : 0;
        bt = bA({
          barGap: _,
          barCategoryGap: T,
          bandSize: wt !== nt ? wt : nt,
          sizeList: Yt[_e],
          maxBarSize: Jt
        }), wt !== nt && (bt = bt.map(function(at) {
          return j(j({}, at), {}, {
            position: j(j({}, at.position), {}, {
              offset: at.position.offset - wt / 2
            })
          });
        }));
      }
      var Gr = F && F.type && F.type.getComposedData;
      Gr && N.push({
        props: j(j({}, Gr(j(j({}, we), {}, {
          displayedData: K,
          props: g,
          dataKey: G,
          item: F,
          bandSize: nt,
          barPosition: bt,
          offset: y,
          stackedData: gt,
          layout: I,
          dataStartIndex: x,
          dataEndIndex: A
        }))), {}, z(z(z({
          key: F.key || "item-".concat(W)
        }, C, we[C]), R, we[R]), "animationId", b)),
        childIndex: Hb(F, g.children),
        item: F
      });
    }), N;
  }, v = function(g, O) {
    var w = g.props, S = g.dataStartIndex, y = g.dataEndIndex, b = g.updateId;
    if (!nf({
      props: w
    }))
      return null;
    var x = w.children, A = w.layout, P = w.stackOffset, I = w.data, _ = w.reverseStackOrder, T = Nh(A), M = T.numericAxisName, $ = T.cateAxisName, C = Ie(x, n), R = jA(I, C, "".concat(M, "Id"), "".concat($, "Id"), P, _), D = s.reduce(function(k, G) {
      var ne = "".concat(G.axisType, "Map");
      return j(j({}, k), {}, z({}, ne, fj(w, j(j({}, G), {}, {
        graphicalItems: C,
        stackGroups: G.axisType === M && R,
        dataStartIndex: S,
        dataEndIndex: y
      }))));
    }, {}), N = vj(j(j({}, D), {}, {
      props: w,
      graphicalItems: C
    }), O?.legendBBox);
    Object.keys(D).forEach(function(k) {
      D[k] = f(w, D[k], N, k.replace("Map", ""), r);
    });
    var F = D["".concat($, "Map")], W = pj(F), K = p(w, j(j({}, D), {}, {
      dataStartIndex: S,
      dataEndIndex: y,
      updateId: b,
      graphicalItems: C,
      stackGroups: R,
      offset: N
    }));
    return j(j({
      formattedGraphicalItems: K,
      graphicalItems: C,
      offset: N,
      stackGroups: R
    }, W), D);
  }, m = /* @__PURE__ */ (function(d) {
    function g(O) {
      var w, S, y;
      return XT(this, g), y = ZT(this, g, [O]), z(y, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), z(y, "accessibilityManager", new RT()), z(y, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var x = y.state, A = x.dataStartIndex, P = x.dataEndIndex, I = x.updateId;
          y.setState(j({
            legendBBox: b
          }, v({
            props: y.props,
            dataStartIndex: A,
            dataEndIndex: P,
            updateId: I
          }, j(j({}, y.state), {}, {
            legendBBox: b
          }))));
        }
      }), z(y, "handleReceiveSyncEvent", function(b, x, A) {
        if (y.props.syncId === b) {
          if (A === y.eventEmitterSymbol && typeof y.props.syncMethod != "function")
            return;
          y.applySyncEvent(x);
        }
      }), z(y, "handleBrushChange", function(b) {
        var x = b.startIndex, A = b.endIndex;
        if (x !== y.state.dataStartIndex || A !== y.state.dataEndIndex) {
          var P = y.state.updateId;
          y.setState(function() {
            return j({
              dataStartIndex: x,
              dataEndIndex: A
            }, v({
              props: y.props,
              dataStartIndex: x,
              dataEndIndex: A,
              updateId: P
            }, y.state));
          }), y.triggerSyncEvent({
            dataStartIndex: x,
            dataEndIndex: A
          });
        }
      }), z(y, "handleMouseEnter", function(b) {
        var x = y.getMouseInfo(b);
        if (x) {
          var A = j(j({}, x), {}, {
            isTooltipActive: !0
          });
          y.setState(A), y.triggerSyncEvent(A);
          var P = y.props.onMouseEnter;
          U(P) && P(A, b);
        }
      }), z(y, "triggeredAfterMouseMove", function(b) {
        var x = y.getMouseInfo(b), A = x ? j(j({}, x), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        y.setState(A), y.triggerSyncEvent(A);
        var P = y.props.onMouseMove;
        U(P) && P(A, b);
      }), z(y, "handleItemMouseEnter", function(b) {
        y.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), z(y, "handleItemMouseLeave", function() {
        y.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), z(y, "handleMouseMove", function(b) {
        b.persist(), y.throttleTriggeredAfterMouseMove(b);
      }), z(y, "handleMouseLeave", function(b) {
        y.throttleTriggeredAfterMouseMove.cancel();
        var x = {
          isTooltipActive: !1
        };
        y.setState(x), y.triggerSyncEvent(x);
        var A = y.props.onMouseLeave;
        U(A) && A(x, b);
      }), z(y, "handleOuterEvent", function(b) {
        var x = Gb(b), A = qe(y.props, "".concat(x));
        if (x && U(A)) {
          var P, I;
          /.*touch.*/i.test(x) ? I = y.getMouseInfo(b.changedTouches[0]) : I = y.getMouseInfo(b), A((P = I) !== null && P !== void 0 ? P : {}, b);
        }
      }), z(y, "handleClick", function(b) {
        var x = y.getMouseInfo(b);
        if (x) {
          var A = j(j({}, x), {}, {
            isTooltipActive: !0
          });
          y.setState(A), y.triggerSyncEvent(A);
          var P = y.props.onClick;
          U(P) && P(A, b);
        }
      }), z(y, "handleMouseDown", function(b) {
        var x = y.props.onMouseDown;
        if (U(x)) {
          var A = y.getMouseInfo(b);
          x(A, b);
        }
      }), z(y, "handleMouseUp", function(b) {
        var x = y.props.onMouseUp;
        if (U(x)) {
          var A = y.getMouseInfo(b);
          x(A, b);
        }
      }), z(y, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), z(y, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseDown(b.changedTouches[0]);
      }), z(y, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && y.handleMouseUp(b.changedTouches[0]);
      }), z(y, "handleDoubleClick", function(b) {
        var x = y.props.onDoubleClick;
        if (U(x)) {
          var A = y.getMouseInfo(b);
          x(A, b);
        }
      }), z(y, "handleContextMenu", function(b) {
        var x = y.props.onContextMenu;
        if (U(x)) {
          var A = y.getMouseInfo(b);
          x(A, b);
        }
      }), z(y, "triggerSyncEvent", function(b) {
        y.props.syncId !== void 0 && Uu.emit(Xu, y.props.syncId, b, y.eventEmitterSymbol);
      }), z(y, "applySyncEvent", function(b) {
        var x = y.props, A = x.layout, P = x.syncMethod, I = y.state.updateId, _ = b.dataStartIndex, T = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          y.setState(j({
            dataStartIndex: _,
            dataEndIndex: T
          }, v({
            props: y.props,
            dataStartIndex: _,
            dataEndIndex: T,
            updateId: I
          }, y.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var M = b.chartX, $ = b.chartY, C = b.activeTooltipIndex, R = y.state, D = R.offset, N = R.tooltipTicks;
          if (!D)
            return;
          if (typeof P == "function")
            C = P(N, b);
          else if (P === "value") {
            C = -1;
            for (var F = 0; F < N.length; F++)
              if (N[F].value === b.activeLabel) {
                C = F;
                break;
              }
          }
          var W = j(j({}, D), {}, {
            x: D.left,
            y: D.top
          }), K = Math.min(M, W.x + W.width), k = Math.min($, W.y + W.height), G = N[C] && N[C].value, ne = nc(y.state, y.props.data, C), le = N[C] ? {
            x: A === "horizontal" ? N[C].coordinate : K,
            y: A === "horizontal" ? k : N[C].coordinate
          } : og;
          y.setState(j(j({}, b), {}, {
            activeLabel: G,
            activeCoordinate: le,
            activePayload: ne,
            activeTooltipIndex: C
          }));
        } else
          y.setState(b);
      }), z(y, "renderCursor", function(b) {
        var x, A = y.state, P = A.isTooltipActive, I = A.activeCoordinate, _ = A.activePayload, T = A.offset, M = A.activeTooltipIndex, $ = A.tooltipAxisBandSize, C = y.getTooltipEventType(), R = (x = b.props.active) !== null && x !== void 0 ? x : P, D = y.props.layout, N = b.key || "_recharts-cursor";
        return /* @__PURE__ */ E.createElement(FT, {
          key: N,
          activeCoordinate: I,
          activePayload: _,
          activeTooltipIndex: M,
          chartName: r,
          element: b,
          isActive: R,
          layout: D,
          offset: T,
          tooltipAxisBandSize: $,
          tooltipEventType: C
        });
      }), z(y, "renderPolarAxis", function(b, x, A) {
        var P = qe(b, "type.axisType"), I = qe(y.state, "".concat(P, "Map")), _ = b.type.defaultProps, T = _ !== void 0 ? j(j({}, _), b.props) : b.props, M = I && I[T["".concat(P, "Id")]];
        return /* @__PURE__ */ q.cloneElement(b, j(j({}, M), {}, {
          className: ee(P, M.className),
          key: b.key || "".concat(x, "-").concat(A),
          ticks: or(M, !0)
        }));
      }), z(y, "renderPolarGrid", function(b) {
        var x = b.props, A = x.radialLines, P = x.polarAngles, I = x.polarRadius, _ = y.state, T = _.radiusAxisMap, M = _.angleAxisMap, $ = Ve(T), C = Ve(M), R = C.cx, D = C.cy, N = C.innerRadius, F = C.outerRadius;
        return /* @__PURE__ */ q.cloneElement(b, {
          polarAngles: Array.isArray(P) ? P : or(C, !0).map(function(W) {
            return W.coordinate;
          }),
          polarRadius: Array.isArray(I) ? I : or($, !0).map(function(W) {
            return W.coordinate;
          }),
          cx: R,
          cy: D,
          innerRadius: N,
          outerRadius: F,
          key: b.key || "polar-grid",
          radialLines: A
        });
      }), z(y, "renderLegend", function() {
        var b = y.state.formattedGraphicalItems, x = y.props, A = x.children, P = x.width, I = x.height, _ = y.props.margin || {}, T = P - (_.left || 0) - (_.right || 0), M = dm({
          children: A,
          formattedGraphicalItems: b,
          legendWidth: T,
          legendContent: c
        });
        if (!M)
          return null;
        var $ = M.item, C = $h(M, WT);
        return /* @__PURE__ */ q.cloneElement($, j(j({}, C), {}, {
          chartWidth: P,
          chartHeight: I,
          margin: _,
          onBBoxUpdate: y.handleLegendBBoxUpdate
        }));
      }), z(y, "renderTooltip", function() {
        var b, x = y.props, A = x.children, P = x.accessibilityLayer, I = be(A, $e);
        if (!I)
          return null;
        var _ = y.state, T = _.isTooltipActive, M = _.activeCoordinate, $ = _.activePayload, C = _.activeLabel, R = _.offset, D = (b = I.props.active) !== null && b !== void 0 ? b : T;
        return /* @__PURE__ */ q.cloneElement(I, {
          viewBox: j(j({}, R), {}, {
            x: R.left,
            y: R.top
          }),
          active: D,
          label: C,
          payload: D ? $ : [],
          coordinate: M,
          accessibilityLayer: P
        });
      }), z(y, "renderBrush", function(b) {
        var x = y.props, A = x.margin, P = x.data, I = y.state, _ = I.offset, T = I.dataStartIndex, M = I.dataEndIndex, $ = I.updateId;
        return /* @__PURE__ */ q.cloneElement(b, {
          key: b.key || "_recharts-brush",
          onChange: Zr(y.handleBrushChange, b.props.onChange),
          data: P,
          x: B(b.props.x) ? b.props.x : _.left,
          y: B(b.props.y) ? b.props.y : _.top + _.height + _.brushBottom - (A.bottom || 0),
          width: B(b.props.width) ? b.props.width : _.width,
          startIndex: T,
          endIndex: M,
          updateId: "brush-".concat($)
        });
      }), z(y, "renderReferenceElement", function(b, x, A) {
        if (!b)
          return null;
        var P = y, I = P.clipPathId, _ = y.state, T = _.xAxisMap, M = _.yAxisMap, $ = _.offset, C = b.type.defaultProps || {}, R = b.props, D = R.xAxisId, N = D === void 0 ? C.xAxisId : D, F = R.yAxisId, W = F === void 0 ? C.yAxisId : F;
        return /* @__PURE__ */ q.cloneElement(b, {
          key: b.key || "".concat(x, "-").concat(A),
          xAxis: T[N],
          yAxis: M[W],
          viewBox: {
            x: $.left,
            y: $.top,
            width: $.width,
            height: $.height
          },
          clipPathId: I
        });
      }), z(y, "renderActivePoints", function(b) {
        var x = b.item, A = b.activePoint, P = b.basePoint, I = b.childIndex, _ = b.isRange, T = [], M = x.props.key, $ = x.item.type.defaultProps !== void 0 ? j(j({}, x.item.type.defaultProps), x.item.props) : x.item.props, C = $.activeDot, R = $.dataKey, D = j(j({
          index: I,
          dataKey: R,
          cx: A.x,
          cy: A.y,
          r: 4,
          fill: Nc(x.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: A.payload,
          value: A.value
        }, te(C, !1)), on(C));
        return T.push(g.renderActiveDot(C, D, "".concat(M, "-activePoint-").concat(I))), P ? T.push(g.renderActiveDot(C, j(j({}, D), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(M, "-basePoint-").concat(I))) : _ && T.push(null), T;
      }), z(y, "renderGraphicChild", function(b, x, A) {
        var P = y.filterFormatItem(b, x, A);
        if (!P)
          return null;
        var I = y.getTooltipEventType(), _ = y.state, T = _.isTooltipActive, M = _.tooltipAxis, $ = _.activeTooltipIndex, C = _.activeLabel, R = y.props.children, D = be(R, $e), N = P.props, F = N.points, W = N.isRange, K = N.baseLine, k = P.item.type.defaultProps !== void 0 ? j(j({}, P.item.type.defaultProps), P.item.props) : P.item.props, G = k.activeDot, ne = k.hide, le = k.activeBar, _e = k.activeShape, Xt = !!(!ne && T && D && (G || le || _e)), we = {};
        I !== "axis" && D && D.props.trigger === "click" ? we = {
          onClick: Zr(y.handleItemMouseEnter, b.props.onClick)
        } : I !== "axis" && (we = {
          onMouseLeave: Zr(y.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: Zr(y.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var rt = /* @__PURE__ */ q.cloneElement(b, j(j({}, P.props), we));
        function Kr(it) {
          return typeof M.dataKey == "function" ? M.dataKey(it.payload) : null;
        }
        if (Xt)
          if ($ >= 0) {
            var gt, Vt;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var nt = typeof M.dataKey == "function" ? Kr : "payload.".concat(M.dataKey.toString());
              gt = an(F, nt, C), Vt = W && K && an(K, nt, C);
            } else
              gt = F?.[$], Vt = W && K && K[$];
            if (_e || le) {
              var bt = b.props.activeIndex !== void 0 ? b.props.activeIndex : $;
              return [/* @__PURE__ */ q.cloneElement(b, j(j(j({}, P.props), we), {}, {
                activeIndex: bt
              })), null, null];
            }
            if (!H(gt))
              return [rt].concat(Wt(y.renderActivePoints({
                item: P,
                activePoint: gt,
                basePoint: Vt,
                childIndex: $,
                isRange: W
              })));
          } else {
            var Yt, Zt = (Yt = y.getItemByXY(y.state.activeCoordinate)) !== null && Yt !== void 0 ? Yt : {
              graphicalItem: rt
            }, Ot = Zt.graphicalItem, Jt = Ot.item, wt = Jt === void 0 ? b : Jt, Gr = Ot.childIndex, at = j(j(j({}, P.props), we), {}, {
              activeIndex: Gr
            });
            return [/* @__PURE__ */ q.cloneElement(wt, at), null, null];
          }
        return W ? [rt, null, null] : [rt, null];
      }), z(y, "renderCustomized", function(b, x, A) {
        return /* @__PURE__ */ q.cloneElement(b, j(j({
          key: "recharts-customized-".concat(A)
        }, y.props), y.state));
      }), z(y, "renderMap", {
        CartesianGrid: {
          handler: tn,
          once: !0
        },
        ReferenceArea: {
          handler: y.renderReferenceElement
        },
        ReferenceLine: {
          handler: tn
        },
        ReferenceDot: {
          handler: y.renderReferenceElement
        },
        XAxis: {
          handler: tn
        },
        YAxis: {
          handler: tn
        },
        Brush: {
          handler: y.renderBrush,
          once: !0
        },
        Bar: {
          handler: y.renderGraphicChild
        },
        Line: {
          handler: y.renderGraphicChild
        },
        Area: {
          handler: y.renderGraphicChild
        },
        Radar: {
          handler: y.renderGraphicChild
        },
        RadialBar: {
          handler: y.renderGraphicChild
        },
        Scatter: {
          handler: y.renderGraphicChild
        },
        Pie: {
          handler: y.renderGraphicChild
        },
        Funnel: {
          handler: y.renderGraphicChild
        },
        Tooltip: {
          handler: y.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: y.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: y.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: y.renderPolarAxis
        },
        Customized: {
          handler: y.renderCustomized
        }
      }), y.clipPathId = "".concat((w = O.id) !== null && w !== void 0 ? w : Ln("recharts"), "-clip"), y.throttleTriggeredAfterMouseMove = jy(y.triggeredAfterMouseMove, (S = O.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), y.state = {}, y;
    }
    return ej(g, d), YT(g, [{
      key: "componentDidMount",
      value: function() {
        var w, S;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
            top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var w = this.props, S = w.children, y = w.data, b = w.height, x = w.layout, A = be(S, $e);
        if (A) {
          var P = A.props.defaultIndex;
          if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
            var I = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, _ = nc(this.state, y, P, I), T = this.state.tooltipTicks[P].coordinate, M = (this.state.offset.top + b) / 2, $ = x === "horizontal", C = $ ? {
              x: T,
              y: M
            } : {
              y: T,
              x: M
            }, R = this.state.formattedGraphicalItems.find(function(N) {
              var F = N.item;
              return F.type.name === "Scatter";
            });
            R && (C = j(j({}, C), R.props.points[P].tooltipPosition), _ = R.props.points[P].tooltipPayload);
            var D = {
              activeTooltipIndex: P,
              isTooltipActive: !0,
              activeLabel: I,
              activePayload: _,
              activeCoordinate: C
            };
            this.setState(D), this.renderCursor(A), this.accessibilityManager.setIndex(P);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(w, S) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== w.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== w.margin) {
          var y, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (y = this.props.margin.left) !== null && y !== void 0 ? y : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(w) {
        as([be(w.children, $e)], [be(this.props.children, $e)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var w = be(this.props.children, $e);
        if (w && typeof w.props.shared == "boolean") {
          var S = w.props.shared ? "axis" : "item";
          return u.indexOf(S) >= 0 ? S : i;
        }
        return i;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(w) {
        if (!this.container)
          return null;
        var S = this.container, y = S.getBoundingClientRect(), b = gx(y), x = {
          chartX: Math.round(w.pageX - b.left),
          chartY: Math.round(w.pageY - b.top)
        }, A = y.width / S.offsetWidth || 1, P = this.inRange(x.chartX, x.chartY, A);
        if (!P)
          return null;
        var I = this.state, _ = I.xAxisMap, T = I.yAxisMap, M = this.getTooltipEventType(), $ = Dh(this.state, this.props.data, this.props.layout, P);
        if (M !== "axis" && _ && T) {
          var C = Ve(_).scale, R = Ve(T).scale, D = C && C.invert ? C.invert(x.chartX) : null, N = R && R.invert ? R.invert(x.chartY) : null;
          return j(j({}, x), {}, {
            xValue: D,
            yValue: N
          }, $);
        }
        return $ ? j(j({}, x), $) : null;
      }
    }, {
      key: "inRange",
      value: function(w, S) {
        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, x = w / y, A = S / y;
        if (b === "horizontal" || b === "vertical") {
          var P = this.state.offset, I = x >= P.left && x <= P.left + P.width && A >= P.top && A <= P.top + P.height;
          return I ? {
            x,
            y: A
          } : null;
        }
        var _ = this.state, T = _.angleAxisMap, M = _.radiusAxisMap;
        if (T && M) {
          var $ = Ve(T);
          return dv({
            x,
            y: A
          }, $);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var w = this.props.children, S = this.getTooltipEventType(), y = be(w, $e), b = {};
        y && S === "axis" && (y.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var x = on(this.props, this.handleOuterEvent);
        return j(j({}, x), b);
      }
    }, {
      key: "addListener",
      value: function() {
        Uu.on(Xu, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Uu.removeListener(Xu, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(w, S, y) {
        for (var b = this.state.formattedGraphicalItems, x = 0, A = b.length; x < A; x++) {
          var P = b[x];
          if (P.item === w || P.props.key === w.key || S === ze(P.item.type) && y === P.childIndex)
            return P;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var w = this.clipPathId, S = this.state.offset, y = S.left, b = S.top, x = S.height, A = S.width;
        return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
          id: w
        }, /* @__PURE__ */ E.createElement("rect", {
          x: y,
          y: b,
          height: x,
          width: A
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var w = this.state.xAxisMap;
        return w ? Object.entries(w).reduce(function(S, y) {
          var b = Ch(y, 2), x = b[0], A = b[1];
          return j(j({}, S), {}, z({}, x, A.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var w = this.state.yAxisMap;
        return w ? Object.entries(w).reduce(function(S, y) {
          var b = Ch(y, 2), x = b[0], A = b[1];
          return j(j({}, S), {}, z({}, x, A.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(w) {
        var S;
        return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(w) {
        var S;
        return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(w) {
        var S = this.state, y = S.formattedGraphicalItems, b = S.activeItem;
        if (y && y.length)
          for (var x = 0, A = y.length; x < A; x++) {
            var P = y[x], I = P.props, _ = P.item, T = _.type.defaultProps !== void 0 ? j(j({}, _.type.defaultProps), _.props) : _.props, M = ze(_.type);
            if (M === "Bar") {
              var $ = (I.data || []).find(function(N) {
                return WP(w, N);
              });
              if ($)
                return {
                  graphicalItem: P,
                  payload: $
                };
            } else if (M === "RadialBar") {
              var C = (I.data || []).find(function(N) {
                return dv(w, N);
              });
              if (C)
                return {
                  graphicalItem: P,
                  payload: C
                };
            } else if (Qn(P, b) || ea(P, b) || Rr(P, b)) {
              var R = C_({
                graphicalItem: P,
                activeTooltipItem: b,
                itemData: T.data
              }), D = T.activeIndex === void 0 ? R : T.activeIndex;
              return {
                graphicalItem: j(j({}, P), {}, {
                  childIndex: D
                }),
                payload: Rr(P, b) ? T.data[R] : P.props.data[R]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var w = this;
        if (!nf(this))
          return null;
        var S = this.props, y = S.children, b = S.className, x = S.width, A = S.height, P = S.style, I = S.compact, _ = S.title, T = S.desc, M = $h(S, zT), $ = te(M, !1);
        if (I)
          return /* @__PURE__ */ E.createElement(wh, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ E.createElement(os, Pt({}, $, {
            width: x,
            height: A,
            title: _,
            desc: T
          }), this.renderClipPath(), of(y, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var C, R;
          $.tabIndex = (C = this.props.tabIndex) !== null && C !== void 0 ? C : 0, $.role = (R = this.props.role) !== null && R !== void 0 ? R : "application", $.onKeyDown = function(N) {
            w.accessibilityManager.keyboardEvent(N);
          }, $.onFocus = function() {
            w.accessibilityManager.focus();
          };
        }
        var D = this.parseEventsOfWrapper();
        return /* @__PURE__ */ E.createElement(wh, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ E.createElement("div", Pt({
          className: ee("recharts-wrapper", b),
          style: j({
            position: "relative",
            cursor: "default",
            width: x,
            height: A
          }, P)
        }, D, {
          ref: function(F) {
            w.container = F;
          }
        }), /* @__PURE__ */ E.createElement(os, Pt({}, $, {
          width: x,
          height: A,
          title: _,
          desc: T,
          style: oj
        }), this.renderClipPath(), of(y, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(q.Component);
  z(m, "displayName", r), z(m, "defaultProps", j({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, l)), z(m, "getDerivedStateFromProps", function(d, g) {
    var O = d.dataKey, w = d.data, S = d.children, y = d.width, b = d.height, x = d.layout, A = d.stackOffset, P = d.margin, I = g.dataStartIndex, _ = g.dataEndIndex;
    if (g.updateId === void 0) {
      var T = qh(d);
      return j(j(j({}, T), {}, {
        updateId: 0
      }, v(j(j({
        props: d
      }, T), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: O,
        prevData: w,
        prevWidth: y,
        prevHeight: b,
        prevLayout: x,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: S
      });
    }
    if (O !== g.prevDataKey || w !== g.prevData || y !== g.prevWidth || b !== g.prevHeight || x !== g.prevLayout || A !== g.prevStackOffset || !es(P, g.prevMargin)) {
      var M = qh(d), $ = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, C = j(j({}, Dh(g, w, x)), {}, {
        updateId: g.updateId + 1
      }), R = j(j(j({}, M), $), C);
      return j(j(j({}, R), v(j({
        props: d
      }, R), g)), {}, {
        prevDataKey: O,
        prevData: w,
        prevWidth: y,
        prevHeight: b,
        prevLayout: x,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: S
      });
    }
    if (!as(S, g.prevChildren)) {
      var D, N, F, W, K = be(S, qt), k = K && (D = (N = K.props) === null || N === void 0 ? void 0 : N.startIndex) !== null && D !== void 0 ? D : I, G = K && (F = (W = K.props) === null || W === void 0 ? void 0 : W.endIndex) !== null && F !== void 0 ? F : _, ne = k !== I || G !== _, le = !H(w), _e = le && !ne ? g.updateId : g.updateId + 1;
      return j(j({
        updateId: _e
      }, v(j(j({
        props: d
      }, g), {}, {
        updateId: _e,
        dataStartIndex: k,
        dataEndIndex: G
      }), g)), {}, {
        prevChildren: S,
        dataStartIndex: k,
        dataEndIndex: G
      });
    }
    return null;
  }), z(m, "renderActiveDot", function(d, g, O) {
    var w;
    return /* @__PURE__ */ q.isValidElement(d) ? w = /* @__PURE__ */ q.cloneElement(d, g) : U(d) ? w = d(g) : w = /* @__PURE__ */ E.createElement(Cm, g), /* @__PURE__ */ E.createElement(he, {
      className: "recharts-active-dot",
      key: O
    }, w);
  });
  var h = /* @__PURE__ */ q.forwardRef(function(g, O) {
    return /* @__PURE__ */ E.createElement(m, Pt({}, g, {
      ref: O
    }));
  });
  return h.displayName = m.displayName, h;
};
const yj = { light: "", dark: ".dark" }, sg = q.createContext(null);
function mj() {
  const t = q.useContext(sg);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
function Lj({
  id: t,
  className: e,
  children: r,
  config: n,
  ...a
}) {
  const i = q.useId(), o = `chart-${t || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ fe.jsx(sg.Provider, { value: { config: n }, children: /* @__PURE__ */ fe.jsxs(
    "div",
    {
      "data-slot": "chart",
      "data-chart": o,
      className: ut(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ fe.jsx(gj, { id: o, config: n }),
        /* @__PURE__ */ fe.jsx(fx, { children: r })
      ]
    }
  ) });
}
const gj = ({ id: t, config: e }) => {
  const r = Object.entries(e).filter(
    ([, n]) => n.theme || n.color
  );
  return r.length ? /* @__PURE__ */ fe.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(yj).map(
          ([n, a]) => `
${a} [data-chart=${t}] {
${r.map(([i, o]) => {
            const u = o.theme?.[n] || o.color;
            return u ? `  --color-${i}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Fj = $e;
function Wj({
  active: t,
  payload: e,
  className: r,
  indicator: n = "dot",
  hideLabel: a = !1,
  hideIndicator: i = !1,
  label: o,
  labelFormatter: u,
  labelClassName: s,
  formatter: c,
  color: f,
  nameKey: l,
  labelKey: p
}) {
  const { config: v } = mj(), m = q.useMemo(() => {
    if (a || !e?.length)
      return null;
    const [d] = e, g = `${p || d?.dataKey || d?.name || "value"}`, O = Bh(v, d, g), w = !p && typeof o == "string" ? v[o]?.label || o : O?.label;
    return u ? /* @__PURE__ */ fe.jsx("div", { className: ut("font-medium", s), children: u(w, e) }) : w ? /* @__PURE__ */ fe.jsx("div", { className: ut("font-medium", s), children: w }) : null;
  }, [
    o,
    u,
    e,
    a,
    s,
    v,
    p
  ]);
  if (!t || !e?.length)
    return null;
  const h = e.length === 1 && n !== "dot";
  return /* @__PURE__ */ fe.jsxs(
    "div",
    {
      className: ut(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        h ? null : m,
        /* @__PURE__ */ fe.jsx("div", { className: "grid gap-1.5", children: e.map((d, g) => {
          const O = `${l || d.name || d.dataKey || "value"}`, w = Bh(v, d, O), S = f || d.payload.fill || d.color;
          return /* @__PURE__ */ fe.jsx(
            "div",
            {
              className: ut(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: c && d?.value !== void 0 && d.name ? c(d.value, d.name, d, g, d.payload) : /* @__PURE__ */ fe.jsxs(fe.Fragment, { children: [
                w?.icon ? /* @__PURE__ */ fe.jsx(w.icon, {}) : !i && /* @__PURE__ */ fe.jsx(
                  "div",
                  {
                    className: ut(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": h && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": S,
                      "--color-border": S
                    }
                  }
                ),
                /* @__PURE__ */ fe.jsxs(
                  "div",
                  {
                    className: ut(
                      "flex flex-1 justify-between leading-none",
                      h ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ fe.jsxs("div", { className: "grid gap-1.5", children: [
                        h ? m : null,
                        /* @__PURE__ */ fe.jsx("span", { className: "text-muted-foreground", children: w?.label || d.name })
                      ] }),
                      d.value && /* @__PURE__ */ fe.jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: d.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            d.dataKey
          );
        }) })
      ]
    }
  );
}
function Bh(t, e, r) {
  if (typeof e != "object" || e === null)
    return;
  const n = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let a = r;
  return r in e && typeof e[r] == "string" ? a = e[r] : n && r in n && typeof n[r] == "string" && (a = n[r]), a in t ? t[a] : t[r];
}
const zj = (t) => !t || typeof t != "string" ? "" : t.toLowerCase().replace(/[^a-z0-9\-_]+/g, "_").replace(/^_+|_+$/g, "");
export {
  FA as $,
  Ze as A,
  zr as B,
  Lj as C,
  Cm as D,
  Jn as E,
  Nj as F,
  Gn as G,
  Bj as H,
  qj as I,
  Rj as J,
  Dj as K,
  he as L,
  lt as M,
  Tj as N,
  or as O,
  LE as P,
  FE as Q,
  fx as R,
  Zy as S,
  Os as T,
  iS as U,
  et as V,
  sS as W,
  ve as X,
  Mj as Y,
  P_ as Z,
  Iy as _,
  Fj as a,
  je as a0,
  Ij as a1,
  Wj as b,
  Ie as c,
  te as d,
  Av as e,
  Cj as f,
  kj as g,
  xt as h,
  U as i,
  Rc as j,
  H as k,
  Ej as l,
  pt as m,
  Me as n,
  jj as o,
  _t as p,
  $j as q,
  B as r,
  zj as s,
  _d as t,
  Ln as u,
  Re as v,
  es as w,
  qe as x,
  rs as y,
  ye as z
};
