import { f as I, R as p, h as Ke, r as W, j as P, C as Je, a as Xe, b as Ye, J as Qe, c as et, d as tt } from "./embed-ChOtBpOg.js";
import { d as A, S as Fe, U as rt, V as Me, W as nt, i as C, T as he, X as T, L as j, Y as Be, y as ye, z as ge, D as at, e as it, k as z, n as M, Z as ot, A as st, x as ct, h as Pe, j as lt, r as B, m as ut, u as ft, G as pt, v as te, c as dt, _ as vt, $ as mt, a0 as ee, M as Oe, g as ht, a1 as yt, s as ke, C as gt, a as bt, b as At } from "./shared-tool-invocation-BcF9x1Se.js";
var xt = ["points", "className", "baseLinePoints", "connectNulls"];
function V() {
  return V = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
    }
    return r;
  }, V.apply(this, arguments);
}
function Pt(r, e) {
  if (r == null) return {};
  var n = Ot(r, e), t, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (a = 0; a < o.length; a++)
      t = o[a], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(r, t) && (n[t] = r[t]);
  }
  return n;
}
function Ot(r, e) {
  if (r == null) return {};
  var n = {};
  for (var t in r)
    if (Object.prototype.hasOwnProperty.call(r, t)) {
      if (e.indexOf(t) >= 0) continue;
      n[t] = r[t];
    }
  return n;
}
function _e(r) {
  return St(r) || jt(r) || _t(r) || kt();
}
function kt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _t(r, e) {
  if (r) {
    if (typeof r == "string") return pe(r, e);
    var n = Object.prototype.toString.call(r).slice(8, -1);
    if (n === "Object" && r.constructor && (n = r.constructor.name), n === "Map" || n === "Set") return Array.from(r);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pe(r, e);
  }
}
function jt(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function St(r) {
  if (Array.isArray(r)) return pe(r);
}
function pe(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var n = 0, t = new Array(e); n < e; n++) t[n] = r[n];
  return t;
}
var je = function(e) {
  return e && e.x === +e.x && e.y === +e.y;
}, wt = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = [[]];
  return e.forEach(function(t) {
    je(t) ? n[n.length - 1].push(t) : n[n.length - 1].length > 0 && n.push([]);
  }), je(e[0]) && n[n.length - 1].push(e[0]), n[n.length - 1].length <= 0 && (n = n.slice(0, -1)), n;
}, J = function(e, n) {
  var t = wt(e);
  n && (t = [t.reduce(function(o, i) {
    return [].concat(_e(o), _e(i));
  }, [])]);
  var a = t.map(function(o) {
    return o.reduce(function(i, l, s) {
      return "".concat(i).concat(s === 0 ? "M" : "L").concat(l.x, ",").concat(l.y);
    }, "");
  }).join("");
  return t.length === 1 ? "".concat(a, "Z") : a;
}, Tt = function(e, n, t) {
  var a = J(e, t);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(J(n.reverse(), t).slice(1));
}, Et = function(e) {
  var n = e.points, t = e.className, a = e.baseLinePoints, o = e.connectNulls, i = Pt(e, xt);
  if (!n || !n.length)
    return null;
  var l = I("recharts-polygon", t);
  if (a && a.length) {
    var s = i.stroke && i.stroke !== "none", c = Tt(n, a, o);
    return /* @__PURE__ */ p.createElement("g", {
      className: l
    }, /* @__PURE__ */ p.createElement("path", V({}, A(i, !0), {
      fill: c.slice(-1) === "Z" ? i.fill : "none",
      stroke: "none",
      d: c
    })), s ? /* @__PURE__ */ p.createElement("path", V({}, A(i, !0), {
      fill: "none",
      d: J(n, o)
    })) : null, s ? /* @__PURE__ */ p.createElement("path", V({}, A(i, !0), {
      fill: "none",
      d: J(a, o)
    })) : null);
  }
  var f = J(n, o);
  return /* @__PURE__ */ p.createElement("path", V({}, A(i, !0), {
    fill: f.slice(-1) === "Z" ? i.fill : "none",
    className: l,
    d: f
  }));
}, ue, Se;
function Rt() {
  if (Se) return ue;
  Se = 1;
  var r = Fe(), e = rt(), n = Me();
  function t(a, o) {
    return a && a.length ? r(a, n(o, 2), e) : void 0;
  }
  return ue = t, ue;
}
var It = Rt();
const Lt = /* @__PURE__ */ Ke(It);
var fe, we;
function Nt() {
  if (we) return fe;
  we = 1;
  var r = Fe(), e = Me(), n = nt();
  function t(a, o) {
    return a && a.length ? r(a, e(o, 2), n) : void 0;
  }
  return fe = t, fe;
}
var $t = Nt();
const Ct = /* @__PURE__ */ Ke($t);
var Dt = ["cx", "cy", "angle", "ticks", "axisLine"], Kt = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Z(r) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(r);
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
    }
    return r;
  }, X.apply(this, arguments);
}
function Te(r, e) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function N(r) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Te(Object(n), !0).forEach(function(t) {
      oe(r, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : Te(Object(n)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return r;
}
function Ee(r, e) {
  if (r == null) return {};
  var n = Ft(r, e), t, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (a = 0; a < o.length; a++)
      t = o[a], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(r, t) && (n[t] = r[t]);
  }
  return n;
}
function Ft(r, e) {
  if (r == null) return {};
  var n = {};
  for (var t in r)
    if (Object.prototype.hasOwnProperty.call(r, t)) {
      if (e.indexOf(t) >= 0) continue;
      n[t] = r[t];
    }
  return n;
}
function Mt(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Re(r, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, qe(t.key), t);
  }
}
function Bt(r, e, n) {
  return e && Re(r.prototype, e), n && Re(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Vt(r, e, n) {
  return e = ne(e), qt(r, Ve() ? Reflect.construct(e, n || [], ne(r).constructor) : e.apply(r, n));
}
function qt(r, e) {
  if (e && (Z(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Wt(r);
}
function Wt(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ve() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ve = function() {
    return !!r;
  })();
}
function ne(r) {
  return ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ne(r);
}
function zt(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && de(r, e);
}
function de(r, e) {
  return de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, a) {
    return t.__proto__ = a, t;
  }, de(r, e);
}
function oe(r, e, n) {
  return e = qe(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function qe(r) {
  var e = Zt(r, "string");
  return Z(e) == "symbol" ? e : e + "";
}
function Zt(r, e) {
  if (Z(r) != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var t = n.call(r, e);
    if (Z(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var se = /* @__PURE__ */ (function(r) {
  function e() {
    return Mt(this, e), Vt(this, e, arguments);
  }
  return zt(e, r), Bt(e, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(t) {
        var a = t.coordinate, o = this.props, i = o.angle, l = o.cx, s = o.cy;
        return T(l, s, a, i);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var t = this.props.orientation, a;
      switch (t) {
        case "left":
          a = "end";
          break;
        case "right":
          a = "start";
          break;
        default:
          a = "middle";
          break;
      }
      return a;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var t = this.props, a = t.cx, o = t.cy, i = t.angle, l = t.ticks, s = Lt(l, function(f) {
        return f.coordinate || 0;
      }), c = Ct(l, function(f) {
        return f.coordinate || 0;
      });
      return {
        cx: a,
        cy: o,
        startAngle: i,
        endAngle: i,
        innerRadius: c.coordinate || 0,
        outerRadius: s.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var t = this.props, a = t.cx, o = t.cy, i = t.angle, l = t.ticks, s = t.axisLine, c = Ee(t, Dt), f = l.reduce(function(v, u) {
        return [Math.min(v[0], u.coordinate), Math.max(v[1], u.coordinate)];
      }, [1 / 0, -1 / 0]), d = T(a, o, f[0], i), y = T(a, o, f[1], i), x = N(N(N({}, A(c, !1)), {}, {
        fill: "none"
      }, A(s, !1)), {}, {
        x1: d.x,
        y1: d.y,
        x2: y.x,
        y2: y.y
      });
      return /* @__PURE__ */ p.createElement("line", X({
        className: "recharts-polar-radius-axis-line"
      }, x));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var t = this, a = this.props, o = a.ticks, i = a.tick, l = a.angle, s = a.tickFormatter, c = a.stroke, f = Ee(a, Kt), d = this.getTickTextAnchor(), y = A(f, !1), x = A(i, !1), v = o.map(function(u, h) {
        var g = t.getTickValueCoord(u), b = N(N(N(N({
          textAnchor: d,
          transform: "rotate(".concat(90 - l, ", ").concat(g.x, ", ").concat(g.y, ")")
        }, y), {}, {
          stroke: "none",
          fill: c
        }, x), {}, {
          index: h
        }, g), {}, {
          payload: u
        });
        return /* @__PURE__ */ p.createElement(j, X({
          className: I("recharts-polar-radius-axis-tick", Be(i)),
          key: "tick-".concat(u.coordinate)
        }, ye(t.props, u, h)), e.renderTickItem(i, b, s ? s(u.value, h) : u.value));
      });
      return /* @__PURE__ */ p.createElement(j, {
        className: "recharts-polar-radius-axis-ticks"
      }, v);
    }
  }, {
    key: "render",
    value: function() {
      var t = this.props, a = t.ticks, o = t.axisLine, i = t.tick;
      return !a || !a.length ? null : /* @__PURE__ */ p.createElement(j, {
        className: I("recharts-polar-radius-axis", this.props.className)
      }, o && this.renderAxisLine(), i && this.renderTicks(), ge.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(t, a, o) {
      var i;
      return /* @__PURE__ */ p.isValidElement(t) ? i = /* @__PURE__ */ p.cloneElement(t, a) : C(t) ? i = t(a) : i = /* @__PURE__ */ p.createElement(he, X({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), o), i;
    }
  }]);
})(W.PureComponent);
oe(se, "displayName", "PolarRadiusAxis");
oe(se, "axisType", "radiusAxis");
oe(se, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function G(r) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, G(r);
}
function D() {
  return D = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
    }
    return r;
  }, D.apply(this, arguments);
}
function Ie(r, e) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function $(r) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ie(Object(n), !0).forEach(function(t) {
      ce(r, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return r;
}
function Gt(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Le(r, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, ze(t.key), t);
  }
}
function Ht(r, e, n) {
  return e && Le(r.prototype, e), n && Le(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Ut(r, e, n) {
  return e = ae(e), Jt(r, We() ? Reflect.construct(e, n || [], ae(r).constructor) : e.apply(r, n));
}
function Jt(r, e) {
  if (e && (G(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Xt(r);
}
function Xt(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function We() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (We = function() {
    return !!r;
  })();
}
function ae(r) {
  return ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ae(r);
}
function Yt(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && ve(r, e);
}
function ve(r, e) {
  return ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, a) {
    return t.__proto__ = a, t;
  }, ve(r, e);
}
function ce(r, e, n) {
  return e = ze(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function ze(r) {
  var e = Qt(r, "string");
  return G(e) == "symbol" ? e : e + "";
}
function Qt(r, e) {
  if (G(r) != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var t = n.call(r, e);
    if (G(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var er = Math.PI / 180, Ne = 1e-5, le = /* @__PURE__ */ (function(r) {
  function e() {
    return Gt(this, e), Ut(this, e, arguments);
  }
  return Yt(e, r), Ht(e, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(t) {
        var a = this.props, o = a.cx, i = a.cy, l = a.radius, s = a.orientation, c = a.tickSize, f = c || 8, d = T(o, i, l, t.coordinate), y = T(o, i, l + (s === "inner" ? -1 : 1) * f, t.coordinate);
        return {
          x1: d.x,
          y1: d.y,
          x2: y.x,
          y2: y.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(t) {
      var a = this.props.orientation, o = Math.cos(-t.coordinate * er), i;
      return o > Ne ? i = a === "outer" ? "start" : "end" : o < -Ne ? i = a === "outer" ? "end" : "start" : i = "middle", i;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var t = this.props, a = t.cx, o = t.cy, i = t.radius, l = t.axisLine, s = t.axisLineType, c = $($({}, A(this.props, !1)), {}, {
        fill: "none"
      }, A(l, !1));
      if (s === "circle")
        return /* @__PURE__ */ p.createElement(at, D({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: o,
          r: i
        }));
      var f = this.props.ticks, d = f.map(function(y) {
        return T(a, o, i, y.coordinate);
      });
      return /* @__PURE__ */ p.createElement(Et, D({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: d
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var t = this, a = this.props, o = a.ticks, i = a.tick, l = a.tickLine, s = a.tickFormatter, c = a.stroke, f = A(this.props, !1), d = A(i, !1), y = $($({}, f), {}, {
        fill: "none"
      }, A(l, !1)), x = o.map(function(v, u) {
        var h = t.getTickLineCoord(v), g = t.getTickTextAnchor(v), b = $($($({
          textAnchor: g
        }, f), {}, {
          stroke: "none",
          fill: c
        }, d), {}, {
          index: u,
          payload: v,
          x: h.x2,
          y: h.y2
        });
        return /* @__PURE__ */ p.createElement(j, D({
          className: I("recharts-polar-angle-axis-tick", Be(i)),
          key: "tick-".concat(v.coordinate)
        }, ye(t.props, v, u)), l && /* @__PURE__ */ p.createElement("line", D({
          className: "recharts-polar-angle-axis-tick-line"
        }, y, h)), i && e.renderTickItem(i, b, s ? s(v.value, u) : v.value));
      });
      return /* @__PURE__ */ p.createElement(j, {
        className: "recharts-polar-angle-axis-ticks"
      }, x);
    }
  }, {
    key: "render",
    value: function() {
      var t = this.props, a = t.ticks, o = t.radius, i = t.axisLine;
      return o <= 0 || !a || !a.length ? null : /* @__PURE__ */ p.createElement(j, {
        className: I("recharts-polar-angle-axis", this.props.className)
      }, i && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(t, a, o) {
      var i;
      return /* @__PURE__ */ p.isValidElement(t) ? i = /* @__PURE__ */ p.cloneElement(t, a) : C(t) ? i = t(a) : i = /* @__PURE__ */ p.createElement(he, D({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), o), i;
    }
  }]);
})(W.PureComponent);
ce(le, "displayName", "PolarAngleAxis");
ce(le, "axisType", "angleAxis");
ce(le, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var re;
function H(r) {
  "@babel/helpers - typeof";
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, H(r);
}
function q() {
  return q = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
    }
    return r;
  }, q.apply(this, arguments);
}
function $e(r, e) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function m(r) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $e(Object(n), !0).forEach(function(t) {
      k(r, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : $e(Object(n)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return r;
}
function tr(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ce(r, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(r, Ge(t.key), t);
  }
}
function rr(r, e, n) {
  return e && Ce(r.prototype, e), n && Ce(r, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function nr(r, e, n) {
  return e = ie(e), ar(r, Ze() ? Reflect.construct(e, n || [], ie(r).constructor) : e.apply(r, n));
}
function ar(r, e) {
  if (e && (H(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ir(r);
}
function ir(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ze() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ze = function() {
    return !!r;
  })();
}
function ie(r) {
  return ie = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ie(r);
}
function or(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && me(r, e);
}
function me(r, e) {
  return me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, a) {
    return t.__proto__ = a, t;
  }, me(r, e);
}
function k(r, e, n) {
  return e = Ge(e), e in r ? Object.defineProperty(r, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = n, r;
}
function Ge(r) {
  var e = sr(r, "string");
  return H(e) == "symbol" ? e : e + "";
}
function sr(r, e) {
  if (H(r) != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var t = n.call(r, e);
    if (H(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var E = /* @__PURE__ */ (function(r) {
  function e(n) {
    var t;
    return tr(this, e), t = nr(this, e, [n]), k(t, "pieRef", null), k(t, "sectorRefs", []), k(t, "id", ft("recharts-pie-")), k(t, "handleAnimationEnd", function() {
      var a = t.props.onAnimationEnd;
      t.setState({
        isAnimationFinished: !0
      }), C(a) && a();
    }), k(t, "handleAnimationStart", function() {
      var a = t.props.onAnimationStart;
      t.setState({
        isAnimationFinished: !1
      }), C(a) && a();
    }), t.state = {
      isAnimationFinished: !n.isAnimationActive,
      prevIsAnimationActive: n.isAnimationActive,
      prevAnimationId: n.animationId,
      sectorToFocus: 0
    }, t;
  }
  return or(e, r), rr(e, [{
    key: "isActiveIndex",
    value: function(t) {
      var a = this.props.activeIndex;
      return Array.isArray(a) ? a.indexOf(t) !== -1 : t === a;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var t = this.props.activeIndex;
      return Array.isArray(t) ? t.length !== 0 : t || t === 0;
    }
  }, {
    key: "renderLabels",
    value: function(t) {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var o = this.props, i = o.label, l = o.labelLine, s = o.dataKey, c = o.valueKey, f = A(this.props, !1), d = A(i, !1), y = A(l, !1), x = i && i.offsetRadius || 20, v = t.map(function(u, h) {
        var g = (u.startAngle + u.endAngle) / 2, b = T(u.cx, u.cy, u.outerRadius + x, g), _ = m(m(m(m({}, f), u), {}, {
          stroke: "none"
        }, d), {}, {
          index: h,
          textAnchor: e.getTextAnchor(b.x, u.cx)
        }, b), K = m(m(m(m({}, f), u), {}, {
          fill: "none",
          stroke: u.fill
        }, y), {}, {
          index: h,
          points: [T(u.cx, u.cy, u.outerRadius, g), b]
        }), S = s;
        return z(s) && z(c) ? S = "value" : z(s) && (S = c), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ p.createElement(j, {
          key: "label-".concat(u.startAngle, "-").concat(u.endAngle, "-").concat(u.midAngle, "-").concat(h)
        }, l && e.renderLabelLineItem(l, K, "line"), e.renderLabelItem(i, _, M(u, S)));
      });
      return /* @__PURE__ */ p.createElement(j, {
        className: "recharts-pie-labels"
      }, v);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(t) {
      var a = this, o = this.props, i = o.activeShape, l = o.blendStroke, s = o.inactiveShape;
      return t.map(function(c, f) {
        if (c?.startAngle === 0 && c?.endAngle === 0 && t.length !== 1) return null;
        var d = a.isActiveIndex(f), y = s && a.hasActiveIndex() ? s : null, x = d ? i : y, v = m(m({}, c), {}, {
          stroke: l ? c.fill : c.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ p.createElement(j, q({
          ref: function(h) {
            h && !a.sectorRefs.includes(h) && a.sectorRefs.push(h);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, ye(a.props, c, f), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(c?.startAngle, "-").concat(c?.endAngle, "-").concat(c.midAngle, "-").concat(f)
        }), /* @__PURE__ */ p.createElement(ot, q({
          option: x,
          isActive: d,
          shapeType: "sector"
        }, v)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var t = this, a = this.props, o = a.sectors, i = a.isAnimationActive, l = a.animationBegin, s = a.animationDuration, c = a.animationEasing, f = a.animationId, d = this.state, y = d.prevSectors, x = d.prevIsAnimationActive;
      return /* @__PURE__ */ p.createElement(st, {
        begin: l,
        duration: s,
        isActive: i,
        easing: c,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(f, "-").concat(x),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(v) {
        var u = v.t, h = [], g = o && o[0], b = g.startAngle;
        return o.forEach(function(_, K) {
          var S = y && y[K], L = K > 0 ? ct(_, "paddingAngle", 0) : 0;
          if (S) {
            var U = Pe(S.endAngle - S.startAngle, _.endAngle - _.startAngle), O = m(m({}, _), {}, {
              startAngle: b + L,
              endAngle: b + U(u) + L
            });
            h.push(O), b = O.endAngle;
          } else {
            var F = _.endAngle, w = _.startAngle, Y = Pe(0, F - w), Q = Y(u), R = m(m({}, _), {}, {
              startAngle: b + L,
              endAngle: b + Q + L
            });
            h.push(R), b = R.endAngle;
          }
        }), /* @__PURE__ */ p.createElement(j, null, t.renderSectorsStatically(h));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(t) {
      var a = this;
      t.onkeydown = function(o) {
        if (!o.altKey)
          switch (o.key) {
            case "ArrowLeft": {
              var i = ++a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[i].focus(), a.setState({
                sectorToFocus: i
              });
              break;
            }
            case "ArrowRight": {
              var l = --a.state.sectorToFocus < 0 ? a.sectorRefs.length - 1 : a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[l].focus(), a.setState({
                sectorToFocus: l
              });
              break;
            }
            case "Escape": {
              a.sectorRefs[a.state.sectorToFocus].blur(), a.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var t = this.props, a = t.sectors, o = t.isAnimationActive, i = this.state.prevSectors;
      return o && a && a.length && (!i || !lt(i, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var t = this, a = this.props, o = a.hide, i = a.sectors, l = a.className, s = a.label, c = a.cx, f = a.cy, d = a.innerRadius, y = a.outerRadius, x = a.isAnimationActive, v = this.state.isAnimationFinished;
      if (o || !i || !i.length || !B(c) || !B(f) || !B(d) || !B(y))
        return null;
      var u = I("recharts-pie", l);
      return /* @__PURE__ */ p.createElement(j, {
        tabIndex: this.props.rootTabIndex,
        className: u,
        ref: function(g) {
          t.pieRef = g;
        }
      }, this.renderSectors(), s && this.renderLabels(i), ge.renderCallByParent(this.props, null, !1), (!x || v) && ut.renderCallByParent(this.props, i, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(t, a) {
      return a.prevIsAnimationActive !== t.isAnimationActive ? {
        prevIsAnimationActive: t.isAnimationActive,
        prevAnimationId: t.animationId,
        curSectors: t.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : t.isAnimationActive && t.animationId !== a.prevAnimationId ? {
        prevAnimationId: t.animationId,
        curSectors: t.sectors,
        prevSectors: a.curSectors,
        isAnimationFinished: !0
      } : t.sectors !== a.curSectors ? {
        curSectors: t.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(t, a) {
      return t > a ? "start" : t < a ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(t, a, o) {
      if (/* @__PURE__ */ p.isValidElement(t))
        return /* @__PURE__ */ p.cloneElement(t, a);
      if (C(t))
        return t(a);
      var i = I("recharts-pie-label-line", typeof t != "boolean" ? t.className : "");
      return /* @__PURE__ */ p.createElement(it, q({}, a, {
        key: o,
        type: "linear",
        className: i
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(t, a, o) {
      if (/* @__PURE__ */ p.isValidElement(t))
        return /* @__PURE__ */ p.cloneElement(t, a);
      var i = o;
      if (C(t) && (i = t(a), /* @__PURE__ */ p.isValidElement(i)))
        return i;
      var l = I("recharts-pie-label-text", typeof t != "boolean" && !C(t) ? t.className : "");
      return /* @__PURE__ */ p.createElement(he, q({}, a, {
        alignmentBaseline: "middle",
        className: l
      }), i);
    }
  }]);
})(W.PureComponent);
re = E;
k(E, "displayName", "Pie");
k(E, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !pt.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
k(E, "parseDeltaAngle", function(r, e) {
  var n = te(e - r), t = Math.min(Math.abs(e - r), 360);
  return n * t;
});
k(E, "getRealPieData", function(r) {
  var e = r.data, n = r.children, t = A(r, !1), a = dt(n, vt);
  return e && e.length ? e.map(function(o, i) {
    return m(m(m({
      payload: o
    }, t), o), a && a[i] && a[i].props);
  }) : a && a.length ? a.map(function(o) {
    return m(m({}, t), o.props);
  }) : [];
});
k(E, "parseCoordinateOfPie", function(r, e) {
  var n = e.top, t = e.left, a = e.width, o = e.height, i = mt(a, o), l = t + ee(r.cx, a, a / 2), s = n + ee(r.cy, o, o / 2), c = ee(r.innerRadius, i, 0), f = ee(r.outerRadius, i, i * 0.8), d = r.maxRadius || Math.sqrt(a * a + o * o) / 2;
  return {
    cx: l,
    cy: s,
    innerRadius: c,
    outerRadius: f,
    maxRadius: d
  };
});
k(E, "getComposedData", function(r) {
  var e = r.item, n = r.offset, t = e.type.defaultProps !== void 0 ? m(m({}, e.type.defaultProps), e.props) : e.props, a = re.getRealPieData(t);
  if (!a || !a.length)
    return null;
  var o = t.cornerRadius, i = t.startAngle, l = t.endAngle, s = t.paddingAngle, c = t.dataKey, f = t.nameKey, d = t.valueKey, y = t.tooltipType, x = Math.abs(t.minAngle), v = re.parseCoordinateOfPie(t, n), u = re.parseDeltaAngle(i, l), h = Math.abs(u), g = c;
  z(c) && z(d) ? (Oe(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = "value") : z(c) && (Oe(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = d);
  var b = a.filter(function(O) {
    return M(O, g, 0) !== 0;
  }).length, _ = (h >= 360 ? b : b - 1) * s, K = h - b * x - _, S = a.reduce(function(O, F) {
    var w = M(F, g, 0);
    return O + (B(w) ? w : 0);
  }, 0), L;
  if (S > 0) {
    var U;
    L = a.map(function(O, F) {
      var w = M(O, g, 0), Y = M(O, f, F), Q = (B(w) ? w : 0) / S, R;
      F ? R = U.endAngle + te(u) * s * (w !== 0 ? 1 : 0) : R = i;
      var be = R + te(u) * ((w !== 0 ? x : 0) + Q * K), Ae = (R + be) / 2, xe = (v.innerRadius + v.outerRadius) / 2, He = [{
        name: Y,
        value: w,
        payload: O,
        dataKey: g,
        type: y
      }], Ue = T(v.cx, v.cy, xe, Ae);
      return U = m(m(m({
        percent: Q,
        cornerRadius: o,
        name: Y,
        tooltipPayload: He,
        midAngle: Ae,
        middleRadius: xe,
        tooltipPosition: Ue
      }, O), v), {}, {
        value: M(O, g),
        startAngle: R,
        endAngle: be,
        payload: O,
        paddingAngle: te(u) * s
      }), U;
    });
  }
  return m(m({}, v), {}, {
    sectors: L,
    data: a
  });
});
var cr = ht({
  chartName: "PieChart",
  GraphicalChild: E,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: le
  }, {
    axisType: "radiusAxis",
    AxisComp: se
  }],
  formatAxisMap: yt,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
const De = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)"
];
function fr(r) {
  const { title: e, data: n, unit: t, description: a } = r, o = W.useMemo(() => n.reduce((s, c) => s + c.value, 0), [n]), i = W.useMemo(() => {
    const s = {};
    return t && (s.value = {
      label: t
    }), n.forEach((c, f) => {
      const d = f % De.length;
      s[ke(c.label)] = {
        label: c.label,
        color: De[d]
      };
    }), s;
  }, [n, t]), l = W.useMemo(() => n.map((s) => ({
    name: s.label,
    label: s.label,
    value: s.value,
    // Add fill property if needed
    fill: `var(--color-${ke(s.label)})`
  })), [n]);
  return /* @__PURE__ */ P.jsxs(Je, { className: "flex flex-col bg-card", children: [
    /* @__PURE__ */ P.jsxs(Xe, { className: "items-center pb-0 flex flex-col gap-2 relative", children: [
      /* @__PURE__ */ P.jsxs(Ye, { className: "flex items-center", children: [
        "Pie Chart - ",
        e,
        /* @__PURE__ */ P.jsx("div", { className: "absolute right-4 top-", children: /* @__PURE__ */ P.jsx(Qe, { data: r }) })
      ] }),
      a && /* @__PURE__ */ P.jsx(et, { children: a })
    ] }),
    /* @__PURE__ */ P.jsx(tt, { className: "flex-1 pb-0", children: /* @__PURE__ */ P.jsx(
      gt,
      {
        config: i,
        className: "mx-auto aspect-square max-h-[300px]",
        children: /* @__PURE__ */ P.jsxs(cr, { children: [
          /* @__PURE__ */ P.jsx(
            bt,
            {
              cursor: !1,
              content: /* @__PURE__ */ P.jsx(At, { hideLabel: !0 })
            }
          ),
          /* @__PURE__ */ P.jsx(
            E,
            {
              data: l,
              dataKey: "value",
              nameKey: "name",
              innerRadius: 60,
              strokeWidth: 5,
              children: /* @__PURE__ */ P.jsx(
                ge,
                {
                  content: ({ viewBox: s }) => {
                    if (s && "cx" in s && "cy" in s)
                      return /* @__PURE__ */ P.jsxs(
                        "text",
                        {
                          x: s.cx,
                          y: s.cy,
                          textAnchor: "middle",
                          dominantBaseline: "middle",
                          children: [
                            /* @__PURE__ */ P.jsx(
                              "tspan",
                              {
                                x: s.cx,
                                y: s.cy,
                                className: "fill-foreground text-3xl font-bold",
                                children: o.toLocaleString()
                              }
                            ),
                            t && /* @__PURE__ */ P.jsx(
                              "tspan",
                              {
                                x: s.cx,
                                y: (s.cy || 0) + 24,
                                className: "fill-muted-foreground",
                                children: t
                              }
                            )
                          ]
                        }
                      );
                  }
                }
              )
            }
          )
        ] })
      }
    ) })
  ] });
}
export {
  fr as PieChart
};
