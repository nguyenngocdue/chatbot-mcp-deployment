import { g as Ne, s as Ve, t as Re, q as He, a as Be, b as qe, _ as c, c as dt, d as xt, e as je, ar as G, l as ot, k as Ge, j as Xe, z as Ue, u as Ze } from "./mermaid.core-BXO_VlFI.js";
import { h as Ft } from "./embed-CPPPUHc1.js";
import { t as Qe, a as se, b as ae, c as Ke, d as Je, e as tn, f as en, g as nn, h as rn, i as sn, j as oe, k as ce, l as le, s as ue, m as de } from "./time-BXSOxX-S.js";
import { l as an } from "./linear-GcbIgsgU.js";
import { R as be, x as on, y as xe, z as Te, C as we, A as Lt, B as cn } from "./string-BnSFgVSn.js";
const ln = Math.PI / 180, un = 180 / Math.PI, It = 18, _e = 0.96422, De = 1, Se = 0.82521, Me = 4 / 29, ft = 6 / 29, Ce = 3 * ft * ft, dn = ft * ft * ft;
function Ee(t) {
  if (t instanceof et) return new et(t.l, t.a, t.b, t.opacity);
  if (t instanceof rt) return Ie(t);
  t instanceof be || (t = on(t));
  var e = zt(t.r), r = zt(t.g), i = zt(t.b), a = Wt((0.2225045 * e + 0.7168786 * r + 0.0606169 * i) / De), f, d;
  return e === r && r === i ? f = d = a : (f = Wt((0.4360747 * e + 0.3850649 * r + 0.1430804 * i) / _e), d = Wt((0.0139322 * e + 0.0971045 * r + 0.7141733 * i) / Se)), new et(116 * a - 16, 500 * (f - a), 200 * (a - d), t.opacity);
}
function fn(t, e, r, i) {
  return arguments.length === 1 ? Ee(t) : new et(t, e, r, i ?? 1);
}
function et(t, e, r, i) {
  this.l = +t, this.a = +e, this.b = +r, this.opacity = +i;
}
xe(et, fn, Te(we, {
  brighter(t) {
    return new et(this.l + It * (t ?? 1), this.a, this.b, this.opacity);
  },
  darker(t) {
    return new et(this.l - It * (t ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, r = isNaN(this.b) ? t : t - this.b / 200;
    return e = _e * Ot(e), t = De * Ot(t), r = Se * Ot(r), new be(
      Pt(3.1338561 * e - 1.6168667 * t - 0.4906146 * r),
      Pt(-0.9787684 * e + 1.9161415 * t + 0.033454 * r),
      Pt(0.0719453 * e - 0.2289914 * t + 1.4052427 * r),
      this.opacity
    );
  }
}));
function Wt(t) {
  return t > dn ? Math.pow(t, 1 / 3) : t / Ce + Me;
}
function Ot(t) {
  return t > ft ? t * t * t : Ce * (t - Me);
}
function Pt(t) {
  return 255 * (t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
}
function zt(t) {
  return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
}
function hn(t) {
  if (t instanceof rt) return new rt(t.h, t.c, t.l, t.opacity);
  if (t instanceof et || (t = Ee(t)), t.a === 0 && t.b === 0) return new rt(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
  var e = Math.atan2(t.b, t.a) * un;
  return new rt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
}
function Rt(t, e, r, i) {
  return arguments.length === 1 ? hn(t) : new rt(t, e, r, i ?? 1);
}
function rt(t, e, r, i) {
  this.h = +t, this.c = +e, this.l = +r, this.opacity = +i;
}
function Ie(t) {
  if (isNaN(t.h)) return new et(t.l, 0, 0, t.opacity);
  var e = t.h * ln;
  return new et(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
}
xe(rt, Rt, Te(we, {
  brighter(t) {
    return new rt(this.h, this.c, this.l + It * (t ?? 1), this.opacity);
  },
  darker(t) {
    return new rt(this.h, this.c, this.l - It * (t ?? 1), this.opacity);
  },
  rgb() {
    return Ie(this).rgb();
  }
}));
function mn(t) {
  return function(e, r) {
    var i = t((e = Rt(e)).h, (r = Rt(r)).h), a = Lt(e.c, r.c), f = Lt(e.l, r.l), d = Lt(e.opacity, r.opacity);
    return function(x) {
      return e.h = i(x), e.c = a(x), e.l = f(x), e.opacity = d(x), e + "";
    };
  };
}
const kn = mn(cn);
function yn(t, e) {
  let r;
  if (e === void 0)
    for (const i of t)
      i != null && (r < i || r === void 0 && i >= i) && (r = i);
  else {
    let i = -1;
    for (let a of t)
      (a = e(a, ++i, t)) != null && (r < a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function gn(t, e) {
  let r;
  if (e === void 0)
    for (const i of t)
      i != null && (r > i || r === void 0 && i >= i) && (r = i);
  else {
    let i = -1;
    for (let a of t)
      (a = e(a, ++i, t)) != null && (r > a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function pn(t) {
  return t;
}
var wt = 1, Nt = 2, Ht = 3, Tt = 4, fe = 1e-6;
function vn(t) {
  return "translate(" + t + ",0)";
}
function bn(t) {
  return "translate(0," + t + ")";
}
function xn(t) {
  return (e) => +t(e);
}
function Tn(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (r) => +t(r) + e;
}
function wn() {
  return !this.__axis;
}
function Ae(t, e) {
  var r = [], i = null, a = null, f = 6, d = 6, x = 3, E = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, $ = t === wt || t === Tt ? -1 : 1, T = t === Tt || t === Nt ? "x" : "y", L = t === wt || t === Ht ? vn : bn;
  function M(D) {
    var V = i ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()), I = a ?? (e.tickFormat ? e.tickFormat.apply(e, r) : pn), S = Math.max(f, 0) + x, C = e.range(), O = +C[0] + E, Y = +C[C.length - 1] + E, R = (e.bandwidth ? Tn : xn)(e.copy(), E), H = D.selection ? D.selection() : D, A = H.selectAll(".domain").data([null]), p = H.selectAll(".tick").data(V, e).order(), h = p.exit(), u = p.enter().append("g").attr("class", "tick"), b = p.select("line"), v = p.select("text");
    A = A.merge(A.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), p = p.merge(u), b = b.merge(u.append("line").attr("stroke", "currentColor").attr(T + "2", $ * f)), v = v.merge(u.append("text").attr("fill", "currentColor").attr(T, $ * S).attr("dy", t === wt ? "0em" : t === Ht ? "0.71em" : "0.32em")), D !== H && (A = A.transition(D), p = p.transition(D), b = b.transition(D), v = v.transition(D), h = h.transition(D).attr("opacity", fe).attr("transform", function(k) {
      return isFinite(k = R(k)) ? L(k + E) : this.getAttribute("transform");
    }), u.attr("opacity", fe).attr("transform", function(k) {
      var m = this.parentNode.__axis;
      return L((m && isFinite(m = m(k)) ? m : R(k)) + E);
    })), h.remove(), A.attr("d", t === Tt || t === Nt ? d ? "M" + $ * d + "," + O + "H" + E + "V" + Y + "H" + $ * d : "M" + E + "," + O + "V" + Y : d ? "M" + O + "," + $ * d + "V" + E + "H" + Y + "V" + $ * d : "M" + O + "," + E + "H" + Y), p.attr("opacity", 1).attr("transform", function(k) {
      return L(R(k) + E);
    }), b.attr(T + "2", $ * f), v.attr(T, $ * S).text(I), H.filter(wn).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Nt ? "start" : t === Tt ? "end" : "middle"), H.each(function() {
      this.__axis = R;
    });
  }
  return M.scale = function(D) {
    return arguments.length ? (e = D, M) : e;
  }, M.ticks = function() {
    return r = Array.from(arguments), M;
  }, M.tickArguments = function(D) {
    return arguments.length ? (r = D == null ? [] : Array.from(D), M) : r.slice();
  }, M.tickValues = function(D) {
    return arguments.length ? (i = D == null ? null : Array.from(D), M) : i && i.slice();
  }, M.tickFormat = function(D) {
    return arguments.length ? (a = D, M) : a;
  }, M.tickSize = function(D) {
    return arguments.length ? (f = d = +D, M) : f;
  }, M.tickSizeInner = function(D) {
    return arguments.length ? (f = +D, M) : f;
  }, M.tickSizeOuter = function(D) {
    return arguments.length ? (d = +D, M) : d;
  }, M.tickPadding = function(D) {
    return arguments.length ? (x = +D, M) : x;
  }, M.offset = function(D) {
    return arguments.length ? (E = +D, M) : E;
  }, M;
}
function _n(t) {
  return Ae(wt, t);
}
function Dn(t) {
  return Ae(Ht, t);
}
var _t = { exports: {} }, Sn = _t.exports, he;
function Mn() {
  return he || (he = 1, (function(t, e) {
    (function(r, i) {
      t.exports = i();
    })(Sn, (function() {
      var r = "day";
      return function(i, a, f) {
        var d = function($) {
          return $.add(4 - $.isoWeekday(), r);
        }, x = a.prototype;
        x.isoWeekYear = function() {
          return d(this).year();
        }, x.isoWeek = function($) {
          if (!this.$utils().u($)) return this.add(7 * ($ - this.isoWeek()), r);
          var T, L, M, D, V = d(this), I = (T = this.isoWeekYear(), L = this.$u, M = (L ? f.utc : f)().year(T).startOf("year"), D = 4 - M.isoWeekday(), M.isoWeekday() > 4 && (D += 7), M.add(D, r));
          return V.diff(I, "week") + 1;
        }, x.isoWeekday = function($) {
          return this.$utils().u($) ? this.day() || 7 : this.day(this.day() % 7 ? $ : $ - 7);
        };
        var E = x.startOf;
        x.startOf = function($, T) {
          var L = this.$utils(), M = !!L.u(T) || T;
          return L.p($) === "isoweek" ? M ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : E.bind(this)($, T);
        };
      };
    }));
  })(_t)), _t.exports;
}
var Cn = Mn();
const En = /* @__PURE__ */ Ft(Cn);
var Dt = { exports: {} }, In = Dt.exports, me;
function An() {
  return me || (me = 1, (function(t, e) {
    (function(r, i) {
      t.exports = i();
    })(In, (function() {
      var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, i = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, f = /\d\d/, d = /\d\d?/, x = /\d*[^-_:/,()\s\d]+/, E = {}, $ = function(S) {
        return (S = +S) + (S > 68 ? 1900 : 2e3);
      }, T = function(S) {
        return function(C) {
          this[S] = +C;
        };
      }, L = [/[+-]\d\d:?(\d\d)?|Z/, function(S) {
        (this.zone || (this.zone = {})).offset = (function(C) {
          if (!C || C === "Z") return 0;
          var O = C.match(/([+-]|\d\d)/g), Y = 60 * O[1] + (+O[2] || 0);
          return Y === 0 ? 0 : O[0] === "+" ? -Y : Y;
        })(S);
      }], M = function(S) {
        var C = E[S];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      }, D = function(S, C) {
        var O, Y = E.meridiem;
        if (Y) {
          for (var R = 1; R <= 24; R += 1) if (S.indexOf(Y(R, 0, C)) > -1) {
            O = R > 12;
            break;
          }
        } else O = S === (C ? "pm" : "PM");
        return O;
      }, V = { A: [x, function(S) {
        this.afternoon = D(S, !1);
      }], a: [x, function(S) {
        this.afternoon = D(S, !0);
      }], Q: [a, function(S) {
        this.month = 3 * (S - 1) + 1;
      }], S: [a, function(S) {
        this.milliseconds = 100 * +S;
      }], SS: [f, function(S) {
        this.milliseconds = 10 * +S;
      }], SSS: [/\d{3}/, function(S) {
        this.milliseconds = +S;
      }], s: [d, T("seconds")], ss: [d, T("seconds")], m: [d, T("minutes")], mm: [d, T("minutes")], H: [d, T("hours")], h: [d, T("hours")], HH: [d, T("hours")], hh: [d, T("hours")], D: [d, T("day")], DD: [f, T("day")], Do: [x, function(S) {
        var C = E.ordinal, O = S.match(/\d+/);
        if (this.day = O[0], C) for (var Y = 1; Y <= 31; Y += 1) C(Y).replace(/\[|\]/g, "") === S && (this.day = Y);
      }], w: [d, T("week")], ww: [f, T("week")], M: [d, T("month")], MM: [f, T("month")], MMM: [x, function(S) {
        var C = M("months"), O = (M("monthsShort") || C.map((function(Y) {
          return Y.slice(0, 3);
        }))).indexOf(S) + 1;
        if (O < 1) throw new Error();
        this.month = O % 12 || O;
      }], MMMM: [x, function(S) {
        var C = M("months").indexOf(S) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, T("year")], YY: [f, function(S) {
        this.year = $(S);
      }], YYYY: [/\d{4}/, T("year")], Z: L, ZZ: L };
      function I(S) {
        var C, O;
        C = S, O = E && E.formats;
        for (var Y = (S = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(b, v, k) {
          var m = k && k.toUpperCase();
          return v || O[k] || r[k] || O[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(o, l, y) {
            return l || y.slice(1);
          }));
        }))).match(i), R = Y.length, H = 0; H < R; H += 1) {
          var A = Y[H], p = V[A], h = p && p[0], u = p && p[1];
          Y[H] = u ? { regex: h, parser: u } : A.replace(/^\[|\]$/g, "");
        }
        return function(b) {
          for (var v = {}, k = 0, m = 0; k < R; k += 1) {
            var o = Y[k];
            if (typeof o == "string") m += o.length;
            else {
              var l = o.regex, y = o.parser, g = b.slice(m), w = l.exec(g)[0];
              y.call(v, w), b = b.replace(w, "");
            }
          }
          return (function(s) {
            var N = s.afternoon;
            if (N !== void 0) {
              var n = s.hours;
              N ? n < 12 && (s.hours += 12) : n === 12 && (s.hours = 0), delete s.afternoon;
            }
          })(v), v;
        };
      }
      return function(S, C, O) {
        O.p.customParseFormat = !0, S && S.parseTwoDigitYear && ($ = S.parseTwoDigitYear);
        var Y = C.prototype, R = Y.parse;
        Y.parse = function(H) {
          var A = H.date, p = H.utc, h = H.args;
          this.$u = p;
          var u = h[1];
          if (typeof u == "string") {
            var b = h[2] === !0, v = h[3] === !0, k = b || v, m = h[2];
            v && (m = h[2]), E = this.$locale(), !b && m && (E = O.Ls[m]), this.$d = (function(g, w, s, N) {
              try {
                if (["x", "X"].indexOf(w) > -1) return new Date((w === "X" ? 1e3 : 1) * g);
                var n = I(w)(g), _ = n.year, z = n.month, P = n.day, W = n.hours, j = n.minutes, F = n.seconds, Q = n.milliseconds, it = n.zone, lt = n.week, kt = /* @__PURE__ */ new Date(), yt = P || (_ || z ? 1 : kt.getDate()), ut = _ || kt.getFullYear(), B = 0;
                _ && !z || (B = z > 0 ? z - 1 : kt.getMonth());
                var Z, X = W || 0, at = j || 0, K = F || 0, st = Q || 0;
                return it ? new Date(Date.UTC(ut, B, yt, X, at, K, st + 60 * it.offset * 1e3)) : s ? new Date(Date.UTC(ut, B, yt, X, at, K, st)) : (Z = new Date(ut, B, yt, X, at, K, st), lt && (Z = N(Z).week(lt).toDate()), Z);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(A, u, p, O), this.init(), m && m !== !0 && (this.$L = this.locale(m).$L), k && A != this.format(u) && (this.$d = /* @__PURE__ */ new Date("")), E = {};
          } else if (u instanceof Array) for (var o = u.length, l = 1; l <= o; l += 1) {
            h[1] = u[l - 1];
            var y = O.apply(this, h);
            if (y.isValid()) {
              this.$d = y.$d, this.$L = y.$L, this.init();
              break;
            }
            l === o && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else R.call(this, H);
        };
      };
    }));
  })(Dt)), Dt.exports;
}
var $n = An();
const Fn = /* @__PURE__ */ Ft($n);
var St = { exports: {} }, Yn = St.exports, ke;
function Ln() {
  return ke || (ke = 1, (function(t, e) {
    (function(r, i) {
      t.exports = i();
    })(Yn, (function() {
      return function(r, i) {
        var a = i.prototype, f = a.format;
        a.format = function(d) {
          var x = this, E = this.$locale();
          if (!this.isValid()) return f.bind(this)(d);
          var $ = this.$utils(), T = (d || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(L) {
            switch (L) {
              case "Q":
                return Math.ceil((x.$M + 1) / 3);
              case "Do":
                return E.ordinal(x.$D);
              case "gggg":
                return x.weekYear();
              case "GGGG":
                return x.isoWeekYear();
              case "wo":
                return E.ordinal(x.week(), "W");
              case "w":
              case "ww":
                return $.s(x.week(), L === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return $.s(x.isoWeek(), L === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return $.s(String(x.$H === 0 ? 24 : x.$H), L === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(x.$d.getTime() / 1e3);
              case "x":
                return x.$d.getTime();
              case "z":
                return "[" + x.offsetName() + "]";
              case "zzz":
                return "[" + x.offsetName("long") + "]";
              default:
                return L;
            }
          }));
          return f.bind(this)(T);
        };
      };
    }));
  })(St)), St.exports;
}
var Wn = Ln();
const On = /* @__PURE__ */ Ft(Wn);
var Mt = { exports: {} }, Pn = Mt.exports, ye;
function zn() {
  return ye || (ye = 1, (function(t, e) {
    (function(r, i) {
      t.exports = i();
    })(Pn, (function() {
      var r, i, a = 1e3, f = 6e4, d = 36e5, x = 864e5, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = 31536e6, T = 2628e6, L = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, M = { years: $, months: T, days: x, hours: d, minutes: f, seconds: a, milliseconds: 1, weeks: 6048e5 }, D = function(A) {
        return A instanceof R;
      }, V = function(A, p, h) {
        return new R(A, h, p.$l);
      }, I = function(A) {
        return i.p(A) + "s";
      }, S = function(A) {
        return A < 0;
      }, C = function(A) {
        return S(A) ? Math.ceil(A) : Math.floor(A);
      }, O = function(A) {
        return Math.abs(A);
      }, Y = function(A, p) {
        return A ? S(A) ? { negative: !0, format: "" + O(A) + p } : { negative: !1, format: "" + A + p } : { negative: !1, format: "" };
      }, R = (function() {
        function A(h, u, b) {
          var v = this;
          if (this.$d = {}, this.$l = b, h === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), u) return V(h * M[I(u)], this);
          if (typeof h == "number") return this.$ms = h, this.parseFromMilliseconds(), this;
          if (typeof h == "object") return Object.keys(h).forEach((function(o) {
            v.$d[I(o)] = h[o];
          })), this.calMilliseconds(), this;
          if (typeof h == "string") {
            var k = h.match(L);
            if (k) {
              var m = k.slice(2).map((function(o) {
                return o != null ? Number(o) : 0;
              }));
              return this.$d.years = m[0], this.$d.months = m[1], this.$d.weeks = m[2], this.$d.days = m[3], this.$d.hours = m[4], this.$d.minutes = m[5], this.$d.seconds = m[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var p = A.prototype;
        return p.calMilliseconds = function() {
          var h = this;
          this.$ms = Object.keys(this.$d).reduce((function(u, b) {
            return u + (h.$d[b] || 0) * M[b];
          }), 0);
        }, p.parseFromMilliseconds = function() {
          var h = this.$ms;
          this.$d.years = C(h / $), h %= $, this.$d.months = C(h / T), h %= T, this.$d.days = C(h / x), h %= x, this.$d.hours = C(h / d), h %= d, this.$d.minutes = C(h / f), h %= f, this.$d.seconds = C(h / a), h %= a, this.$d.milliseconds = h;
        }, p.toISOString = function() {
          var h = Y(this.$d.years, "Y"), u = Y(this.$d.months, "M"), b = +this.$d.days || 0;
          this.$d.weeks && (b += 7 * this.$d.weeks);
          var v = Y(b, "D"), k = Y(this.$d.hours, "H"), m = Y(this.$d.minutes, "M"), o = this.$d.seconds || 0;
          this.$d.milliseconds && (o += this.$d.milliseconds / 1e3, o = Math.round(1e3 * o) / 1e3);
          var l = Y(o, "S"), y = h.negative || u.negative || v.negative || k.negative || m.negative || l.negative, g = k.format || m.format || l.format ? "T" : "", w = (y ? "-" : "") + "P" + h.format + u.format + v.format + g + k.format + m.format + l.format;
          return w === "P" || w === "-P" ? "P0D" : w;
        }, p.toJSON = function() {
          return this.toISOString();
        }, p.format = function(h) {
          var u = h || "YYYY-MM-DDTHH:mm:ss", b = { Y: this.$d.years, YY: i.s(this.$d.years, 2, "0"), YYYY: i.s(this.$d.years, 4, "0"), M: this.$d.months, MM: i.s(this.$d.months, 2, "0"), D: this.$d.days, DD: i.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: i.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: i.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: i.s(this.$d.seconds, 2, "0"), SSS: i.s(this.$d.milliseconds, 3, "0") };
          return u.replace(E, (function(v, k) {
            return k || String(b[v]);
          }));
        }, p.as = function(h) {
          return this.$ms / M[I(h)];
        }, p.get = function(h) {
          var u = this.$ms, b = I(h);
          return b === "milliseconds" ? u %= 1e3 : u = b === "weeks" ? C(u / M[b]) : this.$d[b], u || 0;
        }, p.add = function(h, u, b) {
          var v;
          return v = u ? h * M[I(u)] : D(h) ? h.$ms : V(h, this).$ms, V(this.$ms + v * (b ? -1 : 1), this);
        }, p.subtract = function(h, u) {
          return this.add(h, u, !0);
        }, p.locale = function(h) {
          var u = this.clone();
          return u.$l = h, u;
        }, p.clone = function() {
          return V(this.$ms, this);
        }, p.humanize = function(h) {
          return r().add(this.$ms, "ms").locale(this.$l).fromNow(!h);
        }, p.valueOf = function() {
          return this.asMilliseconds();
        }, p.milliseconds = function() {
          return this.get("milliseconds");
        }, p.asMilliseconds = function() {
          return this.as("milliseconds");
        }, p.seconds = function() {
          return this.get("seconds");
        }, p.asSeconds = function() {
          return this.as("seconds");
        }, p.minutes = function() {
          return this.get("minutes");
        }, p.asMinutes = function() {
          return this.as("minutes");
        }, p.hours = function() {
          return this.get("hours");
        }, p.asHours = function() {
          return this.as("hours");
        }, p.days = function() {
          return this.get("days");
        }, p.asDays = function() {
          return this.as("days");
        }, p.weeks = function() {
          return this.get("weeks");
        }, p.asWeeks = function() {
          return this.as("weeks");
        }, p.months = function() {
          return this.get("months");
        }, p.asMonths = function() {
          return this.as("months");
        }, p.years = function() {
          return this.get("years");
        }, p.asYears = function() {
          return this.as("years");
        }, A;
      })(), H = function(A, p, h) {
        return A.add(p.years() * h, "y").add(p.months() * h, "M").add(p.days() * h, "d").add(p.hours() * h, "h").add(p.minutes() * h, "m").add(p.seconds() * h, "s").add(p.milliseconds() * h, "ms");
      };
      return function(A, p, h) {
        r = h, i = h().$utils(), h.duration = function(v, k) {
          var m = h.locale();
          return V(v, { $l: m }, k);
        }, h.isDuration = D;
        var u = p.prototype.add, b = p.prototype.subtract;
        p.prototype.add = function(v, k) {
          return D(v) ? H(this, v, 1) : u.bind(this)(v, k);
        }, p.prototype.subtract = function(v, k) {
          return D(v) ? H(this, v, -1) : b.bind(this)(v, k);
        };
      };
    }));
  })(Mt)), Mt.exports;
}
var Nn = zn();
const Vn = /* @__PURE__ */ Ft(Nn);
var Bt = (function() {
  var t = /* @__PURE__ */ c(function(m, o, l, y) {
    for (l = l || {}, y = m.length; y--; l[m[y]] = o) ;
    return l;
  }, "o"), e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40], r = [1, 26], i = [1, 27], a = [1, 28], f = [1, 29], d = [1, 30], x = [1, 31], E = [1, 32], $ = [1, 33], T = [1, 34], L = [1, 9], M = [1, 10], D = [1, 11], V = [1, 12], I = [1, 13], S = [1, 14], C = [1, 15], O = [1, 16], Y = [1, 19], R = [1, 20], H = [1, 21], A = [1, 22], p = [1, 23], h = [1, 25], u = [1, 35], b = {
    trace: /* @__PURE__ */ c(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, weekend: 19, weekend_friday: 20, weekend_saturday: 21, dateFormat: 22, inclusiveEndDates: 23, topAxis: 24, axisFormat: 25, tickInterval: 26, excludes: 27, includes: 28, todayMarker: 29, title: 30, acc_title: 31, acc_title_value: 32, acc_descr: 33, acc_descr_value: 34, acc_descr_multiline_value: 35, section: 36, clickStatement: 37, taskTxt: 38, taskData: 39, click: 40, callbackname: 41, callbackargs: 42, href: 43, clickStatementDebug: 44, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 20: "weekend_friday", 21: "weekend_saturday", 22: "dateFormat", 23: "inclusiveEndDates", 24: "topAxis", 25: "axisFormat", 26: "tickInterval", 27: "excludes", 28: "includes", 29: "todayMarker", 30: "title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "section", 38: "taskTxt", 39: "taskData", 40: "click", 41: "callbackname", 42: "callbackargs", 43: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]],
    performAction: /* @__PURE__ */ c(function(o, l, y, g, w, s, N) {
      var n = s.length - 1;
      switch (w) {
        case 1:
          return s[n - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          s[n - 1].push(s[n]), this.$ = s[n - 1];
          break;
        case 4:
        case 5:
          this.$ = s[n];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          g.setWeekday("monday");
          break;
        case 9:
          g.setWeekday("tuesday");
          break;
        case 10:
          g.setWeekday("wednesday");
          break;
        case 11:
          g.setWeekday("thursday");
          break;
        case 12:
          g.setWeekday("friday");
          break;
        case 13:
          g.setWeekday("saturday");
          break;
        case 14:
          g.setWeekday("sunday");
          break;
        case 15:
          g.setWeekend("friday");
          break;
        case 16:
          g.setWeekend("saturday");
          break;
        case 17:
          g.setDateFormat(s[n].substr(11)), this.$ = s[n].substr(11);
          break;
        case 18:
          g.enableInclusiveEndDates(), this.$ = s[n].substr(18);
          break;
        case 19:
          g.TopAxis(), this.$ = s[n].substr(8);
          break;
        case 20:
          g.setAxisFormat(s[n].substr(11)), this.$ = s[n].substr(11);
          break;
        case 21:
          g.setTickInterval(s[n].substr(13)), this.$ = s[n].substr(13);
          break;
        case 22:
          g.setExcludes(s[n].substr(9)), this.$ = s[n].substr(9);
          break;
        case 23:
          g.setIncludes(s[n].substr(9)), this.$ = s[n].substr(9);
          break;
        case 24:
          g.setTodayMarker(s[n].substr(12)), this.$ = s[n].substr(12);
          break;
        case 27:
          g.setDiagramTitle(s[n].substr(6)), this.$ = s[n].substr(6);
          break;
        case 28:
          this.$ = s[n].trim(), g.setAccTitle(this.$);
          break;
        case 29:
        case 30:
          this.$ = s[n].trim(), g.setAccDescription(this.$);
          break;
        case 31:
          g.addSection(s[n].substr(8)), this.$ = s[n].substr(8);
          break;
        case 33:
          g.addTask(s[n - 1], s[n]), this.$ = "task";
          break;
        case 34:
          this.$ = s[n - 1], g.setClickEvent(s[n - 1], s[n], null);
          break;
        case 35:
          this.$ = s[n - 2], g.setClickEvent(s[n - 2], s[n - 1], s[n]);
          break;
        case 36:
          this.$ = s[n - 2], g.setClickEvent(s[n - 2], s[n - 1], null), g.setLink(s[n - 2], s[n]);
          break;
        case 37:
          this.$ = s[n - 3], g.setClickEvent(s[n - 3], s[n - 2], s[n - 1]), g.setLink(s[n - 3], s[n]);
          break;
        case 38:
          this.$ = s[n - 2], g.setClickEvent(s[n - 2], s[n], null), g.setLink(s[n - 2], s[n - 1]);
          break;
        case 39:
          this.$ = s[n - 3], g.setClickEvent(s[n - 3], s[n - 1], s[n]), g.setLink(s[n - 3], s[n - 2]);
          break;
        case 40:
          this.$ = s[n - 1], g.setLink(s[n - 1], s[n]);
          break;
        case 41:
        case 47:
          this.$ = s[n - 1] + " " + s[n];
          break;
        case 42:
        case 43:
        case 45:
          this.$ = s[n - 2] + " " + s[n - 1] + " " + s[n];
          break;
        case 44:
        case 46:
          this.$ = s[n - 3] + " " + s[n - 2] + " " + s[n - 1] + " " + s[n];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: r, 13: i, 14: a, 15: f, 16: d, 17: x, 18: E, 19: 18, 20: $, 21: T, 22: L, 23: M, 24: D, 25: V, 26: I, 27: S, 28: C, 29: O, 30: Y, 31: R, 33: H, 35: A, 36: p, 37: 24, 38: h, 40: u }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 36, 11: 17, 12: r, 13: i, 14: a, 15: f, 16: d, 17: x, 18: E, 19: 18, 20: $, 21: T, 22: L, 23: M, 24: D, 25: V, 26: I, 27: S, 28: C, 29: O, 30: Y, 31: R, 33: H, 35: A, 36: p, 37: 24, 38: h, 40: u }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 17]), t(e, [2, 18]), t(e, [2, 19]), t(e, [2, 20]), t(e, [2, 21]), t(e, [2, 22]), t(e, [2, 23]), t(e, [2, 24]), t(e, [2, 25]), t(e, [2, 26]), t(e, [2, 27]), { 32: [1, 37] }, { 34: [1, 38] }, t(e, [2, 30]), t(e, [2, 31]), t(e, [2, 32]), { 39: [1, 39] }, t(e, [2, 8]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 11]), t(e, [2, 12]), t(e, [2, 13]), t(e, [2, 14]), t(e, [2, 15]), t(e, [2, 16]), { 41: [1, 40], 43: [1, 41] }, t(e, [2, 4]), t(e, [2, 28]), t(e, [2, 29]), t(e, [2, 33]), t(e, [2, 34], { 42: [1, 42], 43: [1, 43] }), t(e, [2, 40], { 41: [1, 44] }), t(e, [2, 35], { 43: [1, 45] }), t(e, [2, 36]), t(e, [2, 38], { 42: [1, 46] }), t(e, [2, 37]), t(e, [2, 39])],
    defaultActions: {},
    parseError: /* @__PURE__ */ c(function(o, l) {
      if (l.recoverable)
        this.trace(o);
      else {
        var y = new Error(o);
        throw y.hash = l, y;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ c(function(o) {
      var l = this, y = [0], g = [], w = [null], s = [], N = this.table, n = "", _ = 0, z = 0, P = 2, W = 1, j = s.slice.call(arguments, 1), F = Object.create(this.lexer), Q = { yy: {} };
      for (var it in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, it) && (Q.yy[it] = this.yy[it]);
      F.setInput(o, Q.yy), Q.yy.lexer = F, Q.yy.parser = this, typeof F.yylloc > "u" && (F.yylloc = {});
      var lt = F.yylloc;
      s.push(lt);
      var kt = F.options && F.options.ranges;
      typeof Q.yy.parseError == "function" ? this.parseError = Q.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function yt(U) {
        y.length = y.length - 2 * U, w.length = w.length - U, s.length = s.length - U;
      }
      c(yt, "popStack");
      function ut() {
        var U;
        return U = g.pop() || F.lex() || W, typeof U != "number" && (U instanceof Array && (g = U, U = g.pop()), U = l.symbols_[U] || U), U;
      }
      c(ut, "lex");
      for (var B, Z, X, at, K = {}, st, J, ie, bt; ; ) {
        if (Z = y[y.length - 1], this.defaultActions[Z] ? X = this.defaultActions[Z] : ((B === null || typeof B > "u") && (B = ut()), X = N[Z] && N[Z][B]), typeof X > "u" || !X.length || !X[0]) {
          var Yt = "";
          bt = [];
          for (st in N[Z])
            this.terminals_[st] && st > P && bt.push("'" + this.terminals_[st] + "'");
          F.showPosition ? Yt = "Parse error on line " + (_ + 1) + `:
` + F.showPosition() + `
Expecting ` + bt.join(", ") + ", got '" + (this.terminals_[B] || B) + "'" : Yt = "Parse error on line " + (_ + 1) + ": Unexpected " + (B == W ? "end of input" : "'" + (this.terminals_[B] || B) + "'"), this.parseError(Yt, {
            text: F.match,
            token: this.terminals_[B] || B,
            line: F.yylineno,
            loc: lt,
            expected: bt
          });
        }
        if (X[0] instanceof Array && X.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Z + ", token: " + B);
        switch (X[0]) {
          case 1:
            y.push(B), w.push(F.yytext), s.push(F.yylloc), y.push(X[1]), B = null, z = F.yyleng, n = F.yytext, _ = F.yylineno, lt = F.yylloc;
            break;
          case 2:
            if (J = this.productions_[X[1]][1], K.$ = w[w.length - J], K._$ = {
              first_line: s[s.length - (J || 1)].first_line,
              last_line: s[s.length - 1].last_line,
              first_column: s[s.length - (J || 1)].first_column,
              last_column: s[s.length - 1].last_column
            }, kt && (K._$.range = [
              s[s.length - (J || 1)].range[0],
              s[s.length - 1].range[1]
            ]), at = this.performAction.apply(K, [
              n,
              z,
              _,
              Q.yy,
              X[1],
              w,
              s
            ].concat(j)), typeof at < "u")
              return at;
            J && (y = y.slice(0, -1 * J * 2), w = w.slice(0, -1 * J), s = s.slice(0, -1 * J)), y.push(this.productions_[X[1]][0]), w.push(K.$), s.push(K._$), ie = N[y[y.length - 2]][y[y.length - 1]], y.push(ie);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }, "parse")
  }, v = /* @__PURE__ */ (function() {
    var m = {
      EOF: 1,
      parseError: /* @__PURE__ */ c(function(l, y) {
        if (this.yy.parser)
          this.yy.parser.parseError(l, y);
        else
          throw new Error(l);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ c(function(o, l) {
        return this.yy = l || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ c(function() {
        var o = this._input[0];
        this.yytext += o, this.yyleng++, this.offset++, this.match += o, this.matched += o;
        var l = o.match(/(?:\r\n?|\n).*/g);
        return l ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), o;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ c(function(o) {
        var l = o.length, y = o.split(/(?:\r\n?|\n)/g);
        this._input = o + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - l), this.offset -= l;
        var g = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
        var w = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: y ? (y.length === g.length ? this.yylloc.first_column : 0) + g[g.length - y.length].length - y[0].length : this.yylloc.first_column - l
        }, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - l]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */ c(function() {
        return this._more = !0, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */ c(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */ c(function(o) {
        this.unput(this.match.slice(o));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ c(function() {
        var o = this.matched.substr(0, this.matched.length - this.match.length);
        return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ c(function() {
        var o = this.match;
        return o.length < 20 && (o += this._input.substr(0, 20 - o.length)), (o.substr(0, 20) + (o.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ c(function() {
        var o = this.pastInput(), l = new Array(o.length + 1).join("-");
        return o + this.upcomingInput() + `
` + l + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ c(function(o, l) {
        var y, g, w;
        if (this.options.backtrack_lexer && (w = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), g = o[0].match(/(?:\r\n?|\n).*/g), g && (this.yylineno += g.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: g ? g[g.length - 1].length - g[g.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
        }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(o[0].length), this.matched += o[0], y = this.performAction.call(this, this.yy, this, l, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), y)
          return y;
        if (this._backtrack) {
          for (var s in w)
            this[s] = w[s];
          return !1;
        }
        return !1;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ c(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var o, l, y, g;
        this._more || (this.yytext = "", this.match = "");
        for (var w = this._currentRules(), s = 0; s < w.length; s++)
          if (y = this._input.match(this.rules[w[s]]), y && (!l || y[0].length > l[0].length)) {
            if (l = y, g = s, this.options.backtrack_lexer) {
              if (o = this.test_match(y, w[s]), o !== !1)
                return o;
              if (this._backtrack) {
                l = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return l ? (o = this.test_match(l, w[g]), o !== !1 ? o : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ c(function() {
        var l = this.next();
        return l || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ c(function(l) {
        this.conditionStack.push(l);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ c(function() {
        var l = this.conditionStack.length - 1;
        return l > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ c(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ c(function(l) {
        return l = this.conditionStack.length - 1 - Math.abs(l || 0), l >= 0 ? this.conditionStack[l] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ c(function(l) {
        this.begin(l);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ c(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": !0 },
      performAction: /* @__PURE__ */ c(function(l, y, g, w) {
        switch (g) {
          case 0:
            return this.begin("open_directive"), "open_directive";
          case 1:
            return this.begin("acc_title"), 31;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 33;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            this.begin("href");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return 43;
          case 17:
            this.begin("callbackname");
            break;
          case 18:
            this.popState();
            break;
          case 19:
            this.popState(), this.begin("callbackargs");
            break;
          case 20:
            return 41;
          case 21:
            this.popState();
            break;
          case 22:
            return 42;
          case 23:
            this.begin("click");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return 40;
          case 26:
            return 4;
          case 27:
            return 22;
          case 28:
            return 23;
          case 29:
            return 24;
          case 30:
            return 25;
          case 31:
            return 26;
          case 32:
            return 28;
          case 33:
            return 27;
          case 34:
            return 29;
          case 35:
            return 12;
          case 36:
            return 13;
          case 37:
            return 14;
          case 38:
            return 15;
          case 39:
            return 16;
          case 40:
            return 17;
          case 41:
            return 18;
          case 42:
            return 20;
          case 43:
            return 21;
          case 44:
            return "date";
          case 45:
            return 30;
          case 46:
            return "accDescription";
          case 47:
            return 36;
          case 48:
            return 38;
          case 49:
            return 39;
          case 50:
            return ":";
          case 51:
            return 6;
          case 52:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: !1 }, acc_descr: { rules: [4], inclusive: !1 }, acc_title: { rules: [2], inclusive: !1 }, callbackargs: { rules: [21, 22], inclusive: !1 }, callbackname: { rules: [18, 19, 20], inclusive: !1 }, href: { rules: [15, 16], inclusive: !1 }, click: { rules: [24, 25], inclusive: !1 }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], inclusive: !0 } }
    };
    return m;
  })();
  b.lexer = v;
  function k() {
    this.yy = {};
  }
  return c(k, "Parser"), k.prototype = b, b.Parser = k, new k();
})();
Bt.parser = Bt;
var Rn = Bt;
G.extend(En);
G.extend(Fn);
G.extend(On);
var ge = { friday: 5, saturday: 6 }, tt = "", Xt = "", Ut = void 0, Zt = "", gt = [], pt = [], Qt = /* @__PURE__ */ new Map(), Kt = [], At = [], mt = "", Jt = "", $e = ["active", "done", "crit", "milestone", "vert"], te = [], vt = !1, ee = !1, ne = "sunday", $t = "saturday", qt = 0, Hn = /* @__PURE__ */ c(function() {
  Kt = [], At = [], mt = "", te = [], Ct = 0, Gt = void 0, Et = void 0, q = [], tt = "", Xt = "", Jt = "", Ut = void 0, Zt = "", gt = [], pt = [], vt = !1, ee = !1, qt = 0, Qt = /* @__PURE__ */ new Map(), Ue(), ne = "sunday", $t = "saturday";
}, "clear"), Bn = /* @__PURE__ */ c(function(t) {
  Xt = t;
}, "setAxisFormat"), qn = /* @__PURE__ */ c(function() {
  return Xt;
}, "getAxisFormat"), jn = /* @__PURE__ */ c(function(t) {
  Ut = t;
}, "setTickInterval"), Gn = /* @__PURE__ */ c(function() {
  return Ut;
}, "getTickInterval"), Xn = /* @__PURE__ */ c(function(t) {
  Zt = t;
}, "setTodayMarker"), Un = /* @__PURE__ */ c(function() {
  return Zt;
}, "getTodayMarker"), Zn = /* @__PURE__ */ c(function(t) {
  tt = t;
}, "setDateFormat"), Qn = /* @__PURE__ */ c(function() {
  vt = !0;
}, "enableInclusiveEndDates"), Kn = /* @__PURE__ */ c(function() {
  return vt;
}, "endDatesAreInclusive"), Jn = /* @__PURE__ */ c(function() {
  ee = !0;
}, "enableTopAxis"), tr = /* @__PURE__ */ c(function() {
  return ee;
}, "topAxisEnabled"), er = /* @__PURE__ */ c(function(t) {
  Jt = t;
}, "setDisplayMode"), nr = /* @__PURE__ */ c(function() {
  return Jt;
}, "getDisplayMode"), rr = /* @__PURE__ */ c(function() {
  return tt;
}, "getDateFormat"), ir = /* @__PURE__ */ c(function(t) {
  gt = t.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), sr = /* @__PURE__ */ c(function() {
  return gt;
}, "getIncludes"), ar = /* @__PURE__ */ c(function(t) {
  pt = t.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), or = /* @__PURE__ */ c(function() {
  return pt;
}, "getExcludes"), cr = /* @__PURE__ */ c(function() {
  return Qt;
}, "getLinks"), lr = /* @__PURE__ */ c(function(t) {
  mt = t, Kt.push(t);
}, "addSection"), ur = /* @__PURE__ */ c(function() {
  return Kt;
}, "getSections"), dr = /* @__PURE__ */ c(function() {
  let t = pe();
  const e = 10;
  let r = 0;
  for (; !t && r < e; )
    t = pe(), r++;
  return At = q, At;
}, "getTasks"), Fe = /* @__PURE__ */ c(function(t, e, r, i) {
  const a = t.format(e.trim()), f = t.format("YYYY-MM-DD");
  return i.includes(a) || i.includes(f) ? !1 : r.includes("weekends") && (t.isoWeekday() === ge[$t] || t.isoWeekday() === ge[$t] + 1) || r.includes(t.format("dddd").toLowerCase()) ? !0 : r.includes(a) || r.includes(f);
}, "isInvalidDate"), fr = /* @__PURE__ */ c(function(t) {
  ne = t;
}, "setWeekday"), hr = /* @__PURE__ */ c(function() {
  return ne;
}, "getWeekday"), mr = /* @__PURE__ */ c(function(t) {
  $t = t;
}, "setWeekend"), Ye = /* @__PURE__ */ c(function(t, e, r, i) {
  if (!r.length || t.manualEndTime)
    return;
  let a;
  t.startTime instanceof Date ? a = G(t.startTime) : a = G(t.startTime, e, !0), a = a.add(1, "d");
  let f;
  t.endTime instanceof Date ? f = G(t.endTime) : f = G(t.endTime, e, !0);
  const [d, x] = kr(
    a,
    f,
    e,
    r,
    i
  );
  t.endTime = d.toDate(), t.renderEndTime = x;
}, "checkTaskDates"), kr = /* @__PURE__ */ c(function(t, e, r, i, a) {
  let f = !1, d = null;
  for (; t <= e; )
    f || (d = e.toDate()), f = Fe(t, r, i, a), f && (e = e.add(1, "d")), t = t.add(1, "d");
  return [e, d];
}, "fixTaskDates"), jt = /* @__PURE__ */ c(function(t, e, r) {
  if (r = r.trim(), (/* @__PURE__ */ c((x) => {
    const E = x.trim();
    return E === "x" || E === "X";
  }, "isTimestampFormat"))(e) && /^\d+$/.test(r))
    return new Date(Number(r));
  const f = /^after\s+(?<ids>[\d\w- ]+)/.exec(r);
  if (f !== null) {
    let x = null;
    for (const $ of f.groups.ids.split(" ")) {
      let T = ct($);
      T !== void 0 && (!x || T.endTime > x.endTime) && (x = T);
    }
    if (x)
      return x.endTime;
    const E = /* @__PURE__ */ new Date();
    return E.setHours(0, 0, 0, 0), E;
  }
  let d = G(r, e.trim(), !0);
  if (d.isValid())
    return d.toDate();
  {
    ot.debug("Invalid date:" + r), ot.debug("With date format:" + e.trim());
    const x = new Date(r);
    if (x === void 0 || isNaN(x.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    x.getFullYear() < -1e4 || x.getFullYear() > 1e4)
      throw new Error("Invalid date:" + r);
    return x;
  }
}, "getStartDate"), Le = /* @__PURE__ */ c(function(t) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, "parseDuration"), We = /* @__PURE__ */ c(function(t, e, r, i = !1) {
  r = r.trim();
  const f = /^until\s+(?<ids>[\d\w- ]+)/.exec(r);
  if (f !== null) {
    let T = null;
    for (const M of f.groups.ids.split(" ")) {
      let D = ct(M);
      D !== void 0 && (!T || D.startTime < T.startTime) && (T = D);
    }
    if (T)
      return T.startTime;
    const L = /* @__PURE__ */ new Date();
    return L.setHours(0, 0, 0, 0), L;
  }
  let d = G(r, e.trim(), !0);
  if (d.isValid())
    return i && (d = d.add(1, "d")), d.toDate();
  let x = G(t);
  const [E, $] = Le(r);
  if (!Number.isNaN(E)) {
    const T = x.add(E, $);
    T.isValid() && (x = T);
  }
  return x.toDate();
}, "getEndDate"), Ct = 0, ht = /* @__PURE__ */ c(function(t) {
  return t === void 0 ? (Ct = Ct + 1, "task" + Ct) : t;
}, "parseId"), yr = /* @__PURE__ */ c(function(t, e) {
  let r;
  e.substr(0, 1) === ":" ? r = e.substr(1, e.length) : r = e;
  const i = r.split(","), a = {};
  re(i, a, $e);
  for (let d = 0; d < i.length; d++)
    i[d] = i[d].trim();
  let f = "";
  switch (i.length) {
    case 1:
      a.id = ht(), a.startTime = t.endTime, f = i[0];
      break;
    case 2:
      a.id = ht(), a.startTime = jt(void 0, tt, i[0]), f = i[1];
      break;
    case 3:
      a.id = ht(i[0]), a.startTime = jt(void 0, tt, i[1]), f = i[2];
      break;
  }
  return f && (a.endTime = We(a.startTime, tt, f, vt), a.manualEndTime = G(f, "YYYY-MM-DD", !0).isValid(), Ye(a, tt, pt, gt)), a;
}, "compileData"), gr = /* @__PURE__ */ c(function(t, e) {
  let r;
  e.substr(0, 1) === ":" ? r = e.substr(1, e.length) : r = e;
  const i = r.split(","), a = {};
  re(i, a, $e);
  for (let f = 0; f < i.length; f++)
    i[f] = i[f].trim();
  switch (i.length) {
    case 1:
      a.id = ht(), a.startTime = {
        type: "prevTaskEnd",
        id: t
      }, a.endTime = {
        data: i[0]
      };
      break;
    case 2:
      a.id = ht(), a.startTime = {
        type: "getStartDate",
        startData: i[0]
      }, a.endTime = {
        data: i[1]
      };
      break;
    case 3:
      a.id = ht(i[0]), a.startTime = {
        type: "getStartDate",
        startData: i[1]
      }, a.endTime = {
        data: i[2]
      };
      break;
  }
  return a;
}, "parseData"), Gt, Et, q = [], Oe = {}, pr = /* @__PURE__ */ c(function(t, e) {
  const r = {
    section: mt,
    type: mt,
    processed: !1,
    manualEndTime: !1,
    renderEndTime: null,
    raw: { data: e },
    task: t,
    classes: []
  }, i = gr(Et, e);
  r.raw.startTime = i.startTime, r.raw.endTime = i.endTime, r.id = i.id, r.prevTaskId = Et, r.active = i.active, r.done = i.done, r.crit = i.crit, r.milestone = i.milestone, r.vert = i.vert, r.order = qt, qt++;
  const a = q.push(r);
  Et = r.id, Oe[r.id] = a - 1;
}, "addTask"), ct = /* @__PURE__ */ c(function(t) {
  const e = Oe[t];
  return q[e];
}, "findTaskById"), vr = /* @__PURE__ */ c(function(t, e) {
  const r = {
    section: mt,
    type: mt,
    description: t,
    task: t,
    classes: []
  }, i = yr(Gt, e);
  r.startTime = i.startTime, r.endTime = i.endTime, r.id = i.id, r.active = i.active, r.done = i.done, r.crit = i.crit, r.milestone = i.milestone, r.vert = i.vert, Gt = r, At.push(r);
}, "addTaskOrg"), pe = /* @__PURE__ */ c(function() {
  const t = /* @__PURE__ */ c(function(r) {
    const i = q[r];
    let a = "";
    switch (q[r].raw.startTime.type) {
      case "prevTaskEnd": {
        const f = ct(i.prevTaskId);
        i.startTime = f.endTime;
        break;
      }
      case "getStartDate":
        a = jt(void 0, tt, q[r].raw.startTime.startData), a && (q[r].startTime = a);
        break;
    }
    return q[r].startTime && (q[r].endTime = We(
      q[r].startTime,
      tt,
      q[r].raw.endTime.data,
      vt
    ), q[r].endTime && (q[r].processed = !0, q[r].manualEndTime = G(
      q[r].raw.endTime.data,
      "YYYY-MM-DD",
      !0
    ).isValid(), Ye(q[r], tt, pt, gt))), q[r].processed;
  }, "compileTask");
  let e = !0;
  for (const [r, i] of q.entries())
    t(r), e = e && i.processed;
  return e;
}, "compileTasks"), br = /* @__PURE__ */ c(function(t, e) {
  let r = e;
  dt().securityLevel !== "loose" && (r = Xe.sanitizeUrl(e)), t.split(",").forEach(function(i) {
    ct(i) !== void 0 && (ze(i, () => {
      window.open(r, "_self");
    }), Qt.set(i, r));
  }), Pe(t, "clickable");
}, "setLink"), Pe = /* @__PURE__ */ c(function(t, e) {
  t.split(",").forEach(function(r) {
    let i = ct(r);
    i !== void 0 && i.classes.push(e);
  });
}, "setClass"), xr = /* @__PURE__ */ c(function(t, e, r) {
  if (dt().securityLevel !== "loose" || e === void 0)
    return;
  let i = [];
  if (typeof r == "string") {
    i = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let f = 0; f < i.length; f++) {
      let d = i[f].trim();
      d.startsWith('"') && d.endsWith('"') && (d = d.substr(1, d.length - 2)), i[f] = d;
    }
  }
  i.length === 0 && i.push(t), ct(t) !== void 0 && ze(t, () => {
    Ze.runFunc(e, ...i);
  });
}, "setClickFun"), ze = /* @__PURE__ */ c(function(t, e) {
  te.push(
    function() {
      const r = document.querySelector(`[id="${t}"]`);
      r !== null && r.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const r = document.querySelector(`[id="${t}-text"]`);
      r !== null && r.addEventListener("click", function() {
        e();
      });
    }
  );
}, "pushFun"), Tr = /* @__PURE__ */ c(function(t, e, r) {
  t.split(",").forEach(function(i) {
    xr(i, e, r);
  }), Pe(t, "clickable");
}, "setClickEvent"), wr = /* @__PURE__ */ c(function(t) {
  te.forEach(function(e) {
    e(t);
  });
}, "bindFunctions"), _r = {
  getConfig: /* @__PURE__ */ c(() => dt().gantt, "getConfig"),
  clear: Hn,
  setDateFormat: Zn,
  getDateFormat: rr,
  enableInclusiveEndDates: Qn,
  endDatesAreInclusive: Kn,
  enableTopAxis: Jn,
  topAxisEnabled: tr,
  setAxisFormat: Bn,
  getAxisFormat: qn,
  setTickInterval: jn,
  getTickInterval: Gn,
  setTodayMarker: Xn,
  getTodayMarker: Un,
  setAccTitle: qe,
  getAccTitle: Be,
  setDiagramTitle: He,
  getDiagramTitle: Re,
  setDisplayMode: er,
  getDisplayMode: nr,
  setAccDescription: Ve,
  getAccDescription: Ne,
  addSection: lr,
  getSections: ur,
  getTasks: dr,
  addTask: pr,
  findTaskById: ct,
  addTaskOrg: vr,
  setIncludes: ir,
  getIncludes: sr,
  setExcludes: ar,
  getExcludes: or,
  setClickEvent: Tr,
  setLink: br,
  getLinks: cr,
  bindFunctions: wr,
  parseDuration: Le,
  isInvalidDate: Fe,
  setWeekday: fr,
  getWeekday: hr,
  setWeekend: mr
};
function re(t, e, r) {
  let i = !0;
  for (; i; )
    i = !1, r.forEach(function(a) {
      const f = "^\\s*" + a + "\\s*$", d = new RegExp(f);
      t[0].match(d) && (e[a] = !0, t.shift(1), i = !0);
    });
}
c(re, "getTaskTags");
G.extend(Vn);
var Dr = /* @__PURE__ */ c(function() {
  ot.debug("Something is calling, setConf, remove the call");
}, "setConf"), ve = {
  monday: sn,
  tuesday: rn,
  wednesday: nn,
  thursday: en,
  friday: tn,
  saturday: Je,
  sunday: Ke
}, Sr = /* @__PURE__ */ c((t, e) => {
  let r = [...t].map(() => -1 / 0), i = [...t].sort((f, d) => f.startTime - d.startTime || f.order - d.order), a = 0;
  for (const f of i)
    for (let d = 0; d < r.length; d++)
      if (f.startTime >= r[d]) {
        r[d] = f.endTime, f.order = d + e, d > a && (a = d);
        break;
      }
  return a;
}, "getMaxIntersections"), nt, Vt = 1e4, Mr = /* @__PURE__ */ c(function(t, e, r, i) {
  const a = dt().gantt, f = dt().securityLevel;
  let d;
  f === "sandbox" && (d = xt("#i" + e));
  const x = f === "sandbox" ? xt(d.nodes()[0].contentDocument.body) : xt("body"), E = f === "sandbox" ? d.nodes()[0].contentDocument : document, $ = E.getElementById(e);
  nt = $.parentElement.offsetWidth, nt === void 0 && (nt = 1200), a.useWidth !== void 0 && (nt = a.useWidth);
  const T = i.db.getTasks();
  let L = [];
  for (const u of T)
    L.push(u.type);
  L = h(L);
  const M = {};
  let D = 2 * a.topPadding;
  if (i.db.getDisplayMode() === "compact" || a.displayMode === "compact") {
    const u = {};
    for (const v of T)
      u[v.section] === void 0 ? u[v.section] = [v] : u[v.section].push(v);
    let b = 0;
    for (const v of Object.keys(u)) {
      const k = Sr(u[v], b) + 1;
      b += k, D += k * (a.barHeight + a.barGap), M[v] = k;
    }
  } else {
    D += T.length * (a.barHeight + a.barGap);
    for (const u of L)
      M[u] = T.filter((b) => b.type === u).length;
  }
  $.setAttribute("viewBox", "0 0 " + nt + " " + D);
  const V = x.select(`[id="${e}"]`), I = Qe().domain([
    gn(T, function(u) {
      return u.startTime;
    }),
    yn(T, function(u) {
      return u.endTime;
    })
  ]).rangeRound([0, nt - a.leftPadding - a.rightPadding]);
  function S(u, b) {
    const v = u.startTime, k = b.startTime;
    let m = 0;
    return v > k ? m = 1 : v < k && (m = -1), m;
  }
  c(S, "taskCompare"), T.sort(S), C(T, nt, D), je(V, D, nt, a.useMaxWidth), V.append("text").text(i.db.getDiagramTitle()).attr("x", nt / 2).attr("y", a.titleTopMargin).attr("class", "titleText");
  function C(u, b, v) {
    const k = a.barHeight, m = k + a.barGap, o = a.topPadding, l = a.leftPadding, y = an().domain([0, L.length]).range(["#00B9FA", "#F95002"]).interpolate(kn);
    Y(
      m,
      o,
      l,
      b,
      v,
      u,
      i.db.getExcludes(),
      i.db.getIncludes()
    ), H(l, o, b, v), O(u, m, o, l, k, y, b), A(m, o), p(l, o, b, v);
  }
  c(C, "makeGantt");
  function O(u, b, v, k, m, o, l) {
    u.sort((n, _) => n.vert === _.vert ? 0 : n.vert ? 1 : -1);
    const g = [...new Set(u.map((n) => n.order))].map((n) => u.find((_) => _.order === n));
    V.append("g").selectAll("rect").data(g).enter().append("rect").attr("x", 0).attr("y", function(n, _) {
      return _ = n.order, _ * b + v - 2;
    }).attr("width", function() {
      return l - a.rightPadding / 2;
    }).attr("height", b).attr("class", function(n) {
      for (const [_, z] of L.entries())
        if (n.type === z)
          return "section section" + _ % a.numberSectionStyles;
      return "section section0";
    }).enter();
    const w = V.append("g").selectAll("rect").data(u).enter(), s = i.db.getLinks();
    if (w.append("rect").attr("id", function(n) {
      return n.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(n) {
      return n.milestone ? I(n.startTime) + k + 0.5 * (I(n.endTime) - I(n.startTime)) - 0.5 * m : I(n.startTime) + k;
    }).attr("y", function(n, _) {
      return _ = n.order, n.vert ? a.gridLineStartPadding : _ * b + v;
    }).attr("width", function(n) {
      return n.milestone ? m : n.vert ? 0.08 * m : I(n.renderEndTime || n.endTime) - I(n.startTime);
    }).attr("height", function(n) {
      return n.vert ? T.length * (a.barHeight + a.barGap) + a.barHeight * 2 : m;
    }).attr("transform-origin", function(n, _) {
      return _ = n.order, (I(n.startTime) + k + 0.5 * (I(n.endTime) - I(n.startTime))).toString() + "px " + (_ * b + v + 0.5 * m).toString() + "px";
    }).attr("class", function(n) {
      const _ = "task";
      let z = "";
      n.classes.length > 0 && (z = n.classes.join(" "));
      let P = 0;
      for (const [j, F] of L.entries())
        n.type === F && (P = j % a.numberSectionStyles);
      let W = "";
      return n.active ? n.crit ? W += " activeCrit" : W = " active" : n.done ? n.crit ? W = " doneCrit" : W = " done" : n.crit && (W += " crit"), W.length === 0 && (W = " task"), n.milestone && (W = " milestone " + W), n.vert && (W = " vert " + W), W += P, W += " " + z, _ + W;
    }), w.append("text").attr("id", function(n) {
      return n.id + "-text";
    }).text(function(n) {
      return n.task;
    }).attr("font-size", a.fontSize).attr("x", function(n) {
      let _ = I(n.startTime), z = I(n.renderEndTime || n.endTime);
      if (n.milestone && (_ += 0.5 * (I(n.endTime) - I(n.startTime)) - 0.5 * m, z = _ + m), n.vert)
        return I(n.startTime) + k;
      const P = this.getBBox().width;
      return P > z - _ ? z + P + 1.5 * a.leftPadding > l ? _ + k - 5 : z + k + 5 : (z - _) / 2 + _ + k;
    }).attr("y", function(n, _) {
      return n.vert ? a.gridLineStartPadding + T.length * (a.barHeight + a.barGap) + 60 : (_ = n.order, _ * b + a.barHeight / 2 + (a.fontSize / 2 - 2) + v);
    }).attr("text-height", m).attr("class", function(n) {
      const _ = I(n.startTime);
      let z = I(n.endTime);
      n.milestone && (z = _ + m);
      const P = this.getBBox().width;
      let W = "";
      n.classes.length > 0 && (W = n.classes.join(" "));
      let j = 0;
      for (const [Q, it] of L.entries())
        n.type === it && (j = Q % a.numberSectionStyles);
      let F = "";
      return n.active && (n.crit ? F = "activeCritText" + j : F = "activeText" + j), n.done ? n.crit ? F = F + " doneCritText" + j : F = F + " doneText" + j : n.crit && (F = F + " critText" + j), n.milestone && (F += " milestoneText"), n.vert && (F += " vertText"), P > z - _ ? z + P + 1.5 * a.leftPadding > l ? W + " taskTextOutsideLeft taskTextOutside" + j + " " + F : W + " taskTextOutsideRight taskTextOutside" + j + " " + F + " width-" + P : W + " taskText taskText" + j + " " + F + " width-" + P;
    }), dt().securityLevel === "sandbox") {
      let n;
      n = xt("#i" + e);
      const _ = n.nodes()[0].contentDocument;
      w.filter(function(z) {
        return s.has(z.id);
      }).each(function(z) {
        var P = _.querySelector("#" + z.id), W = _.querySelector("#" + z.id + "-text");
        const j = P.parentNode;
        var F = _.createElement("a");
        F.setAttribute("xlink:href", s.get(z.id)), F.setAttribute("target", "_top"), j.appendChild(F), F.appendChild(P), F.appendChild(W);
      });
    }
  }
  c(O, "drawRects");
  function Y(u, b, v, k, m, o, l, y) {
    if (l.length === 0 && y.length === 0)
      return;
    let g, w;
    for (const { startTime: P, endTime: W } of o)
      (g === void 0 || P < g) && (g = P), (w === void 0 || W > w) && (w = W);
    if (!g || !w)
      return;
    if (G(w).diff(G(g), "year") > 5) {
      ot.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const s = i.db.getDateFormat(), N = [];
    let n = null, _ = G(g);
    for (; _.valueOf() <= w; )
      i.db.isInvalidDate(_, s, l, y) ? n ? n.end = _ : n = {
        start: _,
        end: _
      } : n && (N.push(n), n = null), _ = _.add(1, "d");
    V.append("g").selectAll("rect").data(N).enter().append("rect").attr("id", (P) => "exclude-" + P.start.format("YYYY-MM-DD")).attr("x", (P) => I(P.start.startOf("day")) + v).attr("y", a.gridLineStartPadding).attr("width", (P) => I(P.end.endOf("day")) - I(P.start.startOf("day"))).attr("height", m - b - a.gridLineStartPadding).attr("transform-origin", function(P, W) {
      return (I(P.start) + v + 0.5 * (I(P.end) - I(P.start))).toString() + "px " + (W * u + 0.5 * m).toString() + "px";
    }).attr("class", "exclude-range");
  }
  c(Y, "drawExcludeDays");
  function R(u, b, v, k) {
    if (v <= 0 || u > b)
      return 1 / 0;
    const m = b - u, o = G.duration({ [k ?? "day"]: v }).asMilliseconds();
    return o <= 0 ? 1 / 0 : Math.ceil(m / o);
  }
  c(R, "getEstimatedTickCount");
  function H(u, b, v, k) {
    const m = i.db.getDateFormat(), o = i.db.getAxisFormat();
    let l;
    o ? l = o : m === "D" ? l = "%d" : l = a.axisFormat ?? "%Y-%m-%d";
    let y = Dn(I).tickSize(-k + b + a.gridLineStartPadding).tickFormat(se(l));
    const w = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
      i.db.getTickInterval() || a.tickInterval
    );
    if (w !== null) {
      const s = parseInt(w[1], 10);
      if (isNaN(s) || s <= 0)
        ot.warn(
          `Invalid tick interval value: "${w[1]}". Skipping custom tick interval.`
        );
      else {
        const N = w[2], n = i.db.getWeekday() || a.weekday, _ = I.domain(), z = _[0], P = _[1], W = R(z, P, s, N);
        if (W > Vt)
          ot.warn(
            `The tick interval "${s}${N}" would generate ${W} ticks, which exceeds the maximum allowed (${Vt}). This may indicate an invalid date or time range. Skipping custom tick interval.`
          );
        else
          switch (N) {
            case "millisecond":
              y.ticks(de.every(s));
              break;
            case "second":
              y.ticks(ue.every(s));
              break;
            case "minute":
              y.ticks(le.every(s));
              break;
            case "hour":
              y.ticks(ce.every(s));
              break;
            case "day":
              y.ticks(oe.every(s));
              break;
            case "week":
              y.ticks(ve[n].every(s));
              break;
            case "month":
              y.ticks(ae.every(s));
              break;
          }
      }
    }
    if (V.append("g").attr("class", "grid").attr("transform", "translate(" + u + ", " + (k - 50) + ")").call(y).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), i.db.topAxisEnabled() || a.topAxis) {
      let s = _n(I).tickSize(-k + b + a.gridLineStartPadding).tickFormat(se(l));
      if (w !== null) {
        const N = parseInt(w[1], 10);
        if (isNaN(N) || N <= 0)
          ot.warn(
            `Invalid tick interval value: "${w[1]}". Skipping custom tick interval.`
          );
        else {
          const n = w[2], _ = i.db.getWeekday() || a.weekday, z = I.domain(), P = z[0], W = z[1];
          if (R(P, W, N, n) <= Vt)
            switch (n) {
              case "millisecond":
                s.ticks(de.every(N));
                break;
              case "second":
                s.ticks(ue.every(N));
                break;
              case "minute":
                s.ticks(le.every(N));
                break;
              case "hour":
                s.ticks(ce.every(N));
                break;
              case "day":
                s.ticks(oe.every(N));
                break;
              case "week":
                s.ticks(ve[_].every(N));
                break;
              case "month":
                s.ticks(ae.every(N));
                break;
            }
        }
      }
      V.append("g").attr("class", "grid").attr("transform", "translate(" + u + ", " + b + ")").call(s).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  c(H, "makeGrid");
  function A(u, b) {
    let v = 0;
    const k = Object.keys(M).map((m) => [m, M[m]]);
    V.append("g").selectAll("text").data(k).enter().append(function(m) {
      const o = m[0].split(Ge.lineBreakRegex), l = -(o.length - 1) / 2, y = E.createElementNS("http://www.w3.org/2000/svg", "text");
      y.setAttribute("dy", l + "em");
      for (const [g, w] of o.entries()) {
        const s = E.createElementNS("http://www.w3.org/2000/svg", "tspan");
        s.setAttribute("alignment-baseline", "central"), s.setAttribute("x", "10"), g > 0 && s.setAttribute("dy", "1em"), s.textContent = w, y.appendChild(s);
      }
      return y;
    }).attr("x", 10).attr("y", function(m, o) {
      if (o > 0)
        for (let l = 0; l < o; l++)
          return v += k[o - 1][1], m[1] * u / 2 + v * u + b;
      else
        return m[1] * u / 2 + b;
    }).attr("font-size", a.sectionFontSize).attr("class", function(m) {
      for (const [o, l] of L.entries())
        if (m[0] === l)
          return "sectionTitle sectionTitle" + o % a.numberSectionStyles;
      return "sectionTitle";
    });
  }
  c(A, "vertLabels");
  function p(u, b, v, k) {
    const m = i.db.getTodayMarker();
    if (m === "off")
      return;
    const o = V.append("g").attr("class", "today"), l = /* @__PURE__ */ new Date(), y = o.append("line");
    y.attr("x1", I(l) + u).attr("x2", I(l) + u).attr("y1", a.titleTopMargin).attr("y2", k - a.titleTopMargin).attr("class", "today"), m !== "" && y.attr("style", m.replace(/,/g, ";"));
  }
  c(p, "drawToday");
  function h(u) {
    const b = {}, v = [];
    for (let k = 0, m = u.length; k < m; ++k)
      Object.prototype.hasOwnProperty.call(b, u[k]) || (b[u[k]] = !0, v.push(u[k]));
    return v;
  }
  c(h, "checkUnique");
}, "draw"), Cr = {
  setConf: Dr,
  draw: Mr
}, Er = /* @__PURE__ */ c((t) => `
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor || t.textColor};
    font-family: ${t.fontFamily};
  }
`, "getStyles"), Ir = Er, Wr = {
  parser: Rn,
  db: _r,
  renderer: Cr,
  styles: Ir
};
export {
  Wr as diagram
};
