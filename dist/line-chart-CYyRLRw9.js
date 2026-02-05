import { R as y, f as H, r as z, g as J, j as m, C as pt, a as ft, b as ht, J as dt, c as vt, d as mt } from "./embed-CPPPUHc1.js";
import { i as yt, D as gt, c as xt, E as bt, L as G, d as W, e as At, A as Pt, h as B, j as jt, k as X, l as Ot, m as St, n as nt, u as Ct, G as Dt, o as Q, g as wt, f as Lt, s as K, C as kt, R as Et, a as _t, b as Nt, p as Tt } from "./shared-tool-invocation-JK2XW1ct.js";
import { X as at, Y as it, C as It } from "./YAxis-DwuF5u46.js";
var Bt = ["type", "layout", "connectNulls", "ref"], Ft = ["key"];
function L(t) {
  "@babel/helpers - typeof";
  return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, L(t);
}
function Z(t, n) {
  if (t == null) return {};
  var r = Rt(t, n), e, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      e = o[a], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e]);
  }
  return r;
}
function Rt(t, n) {
  if (t == null) return {};
  var r = {};
  for (var e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      if (n.indexOf(e) >= 0) continue;
      r[e] = t[e];
    }
  return r;
}
function F() {
  return F = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var e in r)
        Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    }
    return t;
  }, F.apply(this, arguments);
}
function tt(t, n) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(t);
    n && (e = e.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, e);
  }
  return r;
}
function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? tt(Object(r), !0).forEach(function(e) {
      P(t, e, r[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tt(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
    });
  }
  return t;
}
function w(t) {
  return Kt(t) || Wt(t) || Mt(t) || $t();
}
function $t() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mt(t, n) {
  if (t) {
    if (typeof t == "string") return q(t, n);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(t, n);
  }
}
function Wt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Kt(t) {
  if (Array.isArray(t)) return q(t);
}
function q(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
  return e;
}
function zt(t, n) {
  if (!(t instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function et(t, n) {
  for (var r = 0; r < n.length; r++) {
    var e = n[r];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, st(e.key), e);
  }
}
function Vt(t, n, r) {
  return n && et(t.prototype, n), r && et(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ut(t, n, r) {
  return n = V(n), Gt(t, ot() ? Reflect.construct(n, r || [], V(t).constructor) : n.apply(t, r));
}
function Gt(t, n) {
  if (n && (L(n) === "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Xt(t);
}
function Xt(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ot() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ot = function() {
    return !!t;
  })();
}
function V(t) {
  return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, V(t);
}
function qt(t, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(n && n.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), n && Y(t, n);
}
function Y(t, n) {
  return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
    return e.__proto__ = a, e;
  }, Y(t, n);
}
function P(t, n, r) {
  return n = st(n), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t;
}
function st(t) {
  var n = Yt(t, "string");
  return L(n) == "symbol" ? n : n + "";
}
function Yt(t, n) {
  if (L(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var e = r.call(t, n);
    if (L(e) != "object") return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var R = /* @__PURE__ */ (function(t) {
  function n() {
    var r;
    zt(this, n);
    for (var e = arguments.length, a = new Array(e), o = 0; o < e; o++)
      a[o] = arguments[o];
    return r = Ut(this, n, [].concat(a)), P(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), P(r, "generateSimpleStrokeDasharray", function(i, s) {
      return "".concat(s, "px ").concat(i - s, "px");
    }), P(r, "getStrokeDasharray", function(i, s, p) {
      var l = p.reduce(function(A, O) {
        return A + O;
      });
      if (!l)
        return r.generateSimpleStrokeDasharray(s, i);
      for (var c = Math.floor(i / l), h = i % l, f = s - i, d = [], u = 0, v = 0; u < p.length; v += p[u], ++u)
        if (v + p[u] > h) {
          d = [].concat(w(p.slice(0, u)), [h - v]);
          break;
        }
      var g = d.length % 2 === 0 ? [0, f] : [f];
      return [].concat(w(n.repeat(p, c)), w(d), g).map(function(A) {
        return "".concat(A, "px");
      }).join(", ");
    }), P(r, "id", Ct("recharts-line-")), P(r, "pathRef", function(i) {
      r.mainCurve = i;
    }), P(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), P(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return qt(n, t), Vt(n, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var e = this.getTotalLength();
        this.setState({
          totalLength: e
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var e = this.getTotalLength();
        e !== this.state.totalLength && this.setState({
          totalLength: e
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var e = this.mainCurve;
      try {
        return e && e.getTotalLength && e.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(e, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var o = this.props, i = o.points, s = o.xAxis, p = o.yAxis, l = o.layout, c = o.children, h = xt(c, bt);
      if (!h)
        return null;
      var f = function(v, g) {
        return {
          x: v.x,
          y: v.y,
          value: v.value,
          errorVal: nt(v.payload, g)
        };
      }, d = {
        clipPath: e ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ y.createElement(G, d, h.map(function(u) {
        return /* @__PURE__ */ y.cloneElement(u, {
          key: "bar-".concat(u.props.dataKey),
          data: i,
          xAxis: s,
          yAxis: p,
          layout: l,
          dataPointFormatter: f
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(e, a, o) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var s = this.props, p = s.dot, l = s.points, c = s.dataKey, h = W(this.props, !1), f = W(p, !0), d = l.map(function(v, g) {
        var A = b(b(b({
          key: "dot-".concat(g),
          r: 3
        }, h), f), {}, {
          index: g,
          cx: v.x,
          cy: v.y,
          value: v.value,
          dataKey: c,
          payload: v.payload,
          points: l
        });
        return n.renderDotItem(p, A);
      }), u = {
        clipPath: e ? "url(#clipPath-".concat(a ? "" : "dots-").concat(o, ")") : null
      };
      return /* @__PURE__ */ y.createElement(G, F({
        className: "recharts-line-dots",
        key: "dots"
      }, u), d);
    }
  }, {
    key: "renderCurveStatically",
    value: function(e, a, o, i) {
      var s = this.props, p = s.type, l = s.layout, c = s.connectNulls;
      s.ref;
      var h = Z(s, Bt), f = b(b(b({}, W(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(o, ")") : null,
        points: e
      }, i), {}, {
        type: p,
        layout: l,
        connectNulls: c
      });
      return /* @__PURE__ */ y.createElement(At, F({}, f, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(e, a) {
      var o = this, i = this.props, s = i.points, p = i.strokeDasharray, l = i.isAnimationActive, c = i.animationBegin, h = i.animationDuration, f = i.animationEasing, d = i.animationId, u = i.animateNewValues, v = i.width, g = i.height, A = this.state, O = A.prevPoints, k = A.totalLength;
      return /* @__PURE__ */ y.createElement(Pt, {
        begin: c,
        duration: h,
        isActive: l,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(d),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(C) {
        var j = C.t;
        if (O) {
          var E = O.length / s.length, S = s.map(function(x, U) {
            var T = Math.floor(U * E);
            if (O[T]) {
              var I = O[T], D = B(I.x, x.x), lt = B(I.y, x.y);
              return b(b({}, x), {}, {
                x: D(j),
                y: lt(j)
              });
            }
            if (u) {
              var ct = B(v * 2, x.x), ut = B(g / 2, x.y);
              return b(b({}, x), {}, {
                x: ct(j),
                y: ut(j)
              });
            }
            return b(b({}, x), {}, {
              x: x.x,
              y: x.y
            });
          });
          return o.renderCurveStatically(S, e, a);
        }
        var $ = B(0, k), _ = $(j), N;
        if (p) {
          var M = "".concat(p).split(/[,\s]+/gim).map(function(x) {
            return parseFloat(x);
          });
          N = o.getStrokeDasharray(_, k, M);
        } else
          N = o.generateSimpleStrokeDasharray(k, _);
        return o.renderCurveStatically(s, e, a, {
          strokeDasharray: N
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(e, a) {
      var o = this.props, i = o.points, s = o.isAnimationActive, p = this.state, l = p.prevPoints, c = p.totalLength;
      return s && i && i.length && (!l && c > 0 || !jt(l, i)) ? this.renderCurveWithAnimation(e, a) : this.renderCurveStatically(i, e, a);
    }
  }, {
    key: "render",
    value: function() {
      var e, a = this.props, o = a.hide, i = a.dot, s = a.points, p = a.className, l = a.xAxis, c = a.yAxis, h = a.top, f = a.left, d = a.width, u = a.height, v = a.isAnimationActive, g = a.id;
      if (o || !s || !s.length)
        return null;
      var A = this.state.isAnimationFinished, O = s.length === 1, k = H("recharts-line", p), C = l && l.allowDataOverflow, j = c && c.allowDataOverflow, E = C || j, S = X(g) ? this.id : g, $ = (e = W(i, !1)) !== null && e !== void 0 ? e : {
        r: 3,
        strokeWidth: 2
      }, _ = $.r, N = _ === void 0 ? 3 : _, M = $.strokeWidth, x = M === void 0 ? 2 : M, U = Ot(i) ? i : {}, T = U.clipDot, I = T === void 0 ? !0 : T, D = N * 2 + x;
      return /* @__PURE__ */ y.createElement(G, {
        className: k
      }, C || j ? /* @__PURE__ */ y.createElement("defs", null, /* @__PURE__ */ y.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ y.createElement("rect", {
        x: C ? f : f - d / 2,
        y: j ? h : h - u / 2,
        width: C ? d : d * 2,
        height: j ? u : u * 2
      })), !I && /* @__PURE__ */ y.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ y.createElement("rect", {
        x: f - D / 2,
        y: h - D / 2,
        width: d + D,
        height: u + D
      }))) : null, !O && this.renderCurve(E, S), this.renderErrorBar(E, S), (O || i) && this.renderDots(E, I, S), (!v || A) && St.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(e, a) {
      return e.animationId !== a.prevAnimationId ? {
        prevAnimationId: e.animationId,
        curPoints: e.points,
        prevPoints: a.curPoints
      } : e.points !== a.curPoints ? {
        curPoints: e.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(e, a) {
      for (var o = e.length % 2 !== 0 ? [].concat(w(e), [0]) : e, i = [], s = 0; s < a; ++s)
        i = [].concat(w(i), w(o));
      return i;
    }
  }, {
    key: "renderDotItem",
    value: function(e, a) {
      var o;
      if (/* @__PURE__ */ y.isValidElement(e))
        o = /* @__PURE__ */ y.cloneElement(e, a);
      else if (yt(e))
        o = e(a);
      else {
        var i = a.key, s = Z(a, Ft), p = H("recharts-line-dot", typeof e != "boolean" ? e.className : "");
        o = /* @__PURE__ */ y.createElement(gt, F({
          key: i
        }, s, {
          className: p
        }));
      }
      return o;
    }
  }]);
})(z.PureComponent);
P(R, "displayName", "Line");
P(R, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Dt.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
P(R, "getComposedData", function(t) {
  var n = t.props, r = t.xAxis, e = t.yAxis, a = t.xAxisTicks, o = t.yAxisTicks, i = t.dataKey, s = t.bandSize, p = t.displayedData, l = t.offset, c = n.layout, h = p.map(function(f, d) {
    var u = nt(f, i);
    return c === "horizontal" ? {
      x: Q({
        axis: r,
        ticks: a,
        bandSize: s,
        entry: f,
        index: d
      }),
      y: X(u) ? null : e.scale(u),
      value: u,
      payload: f
    } : {
      x: X(u) ? null : r.scale(u),
      y: Q({
        axis: e,
        ticks: o,
        bandSize: s,
        entry: f,
        index: d
      }),
      value: u,
      payload: f
    };
  });
  return b({
    points: h,
    layout: c
  }, l);
});
var Ht = wt({
  chartName: "LineChart",
  GraphicalChild: R,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: at
  }, {
    axisType: "yAxis",
    AxisComp: it
  }],
  formatAxisMap: Lt
});
const rt = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)"
];
function te(t) {
  const { title: n, data: r, description: e, yAxisLabel: a } = t, o = z.useMemo(() => r.reduce(
    (l, c) => {
      const h = l.map((d) => d.xAxisLabel), f = J(c.xAxisLabel, h);
      return [
        ...l,
        {
          xAxisLabel: f,
          series: Array.isArray(c.series) ? c.series.reduce(
            (d, u) => {
              const v = d.map((A) => A.seriesName), g = J(u.seriesName, v);
              return [
                ...d,
                {
                  ...u,
                  seriesName: g
                }
              ];
            },
            []
          ) : []
        }
      ];
    },
    []
  ), [r]), i = o[0]?.series.map((l) => l.seriesName) || [], s = z.useMemo(() => {
    const l = {};
    return i.forEach((c, h) => {
      const f = h % rt.length;
      l[K(c)] = {
        label: c,
        color: rt[f]
      };
    }), l;
  }, [i]), p = z.useMemo(() => o.map((l) => {
    const c = {
      name: l.xAxisLabel,
      label: l.xAxisLabel
    };
    return l.series.forEach(({ seriesName: h, value: f }) => {
      c[K(h)] = f;
    }), c;
  }), [o]);
  return /* @__PURE__ */ m.jsxs(pt, { className: "bg-card", children: [
    /* @__PURE__ */ m.jsxs(ft, { className: "flex flex-col gap-2 relative", children: [
      /* @__PURE__ */ m.jsxs(ht, { className: "flex items-center", children: [
        "Line Chart - ",
        n,
        /* @__PURE__ */ m.jsx("div", { className: "absolute right-4 top-0", children: /* @__PURE__ */ m.jsx(
          dt,
          {
            data: {
              ...t,
              data: o
            }
          }
        ) })
      ] }),
      e && /* @__PURE__ */ m.jsx(vt, { children: e })
    ] }),
    /* @__PURE__ */ m.jsx(mt, { children: /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(kt, { config: s, children: /* @__PURE__ */ m.jsx(Et, { width: "100%", height: "400px", children: /* @__PURE__ */ m.jsxs(Ht, { data: p, children: [
      /* @__PURE__ */ m.jsx(It, { strokeDasharray: "3 3" }),
      /* @__PURE__ */ m.jsx(
        at,
        {
          dataKey: "label",
          tickLine: !1,
          axisLine: !1,
          tickMargin: 8
        }
      ),
      /* @__PURE__ */ m.jsx(
        it,
        {
          tickLine: !1,
          axisLine: !1,
          tickMargin: 10,
          label: a ? {
            value: a,
            angle: -90,
            position: "insideLeft"
          } : void 0
        }
      ),
      /* @__PURE__ */ m.jsx(
        _t,
        {
          cursor: !1,
          content: /* @__PURE__ */ m.jsx(Nt, {})
        }
      ),
      /* @__PURE__ */ m.jsx(Tt, {}),
      i.map((l, c) => /* @__PURE__ */ m.jsx(
        R,
        {
          type: "monotone",
          name: l,
          dataKey: K(l),
          stroke: `var(--color-${K(l)})`,
          strokeWidth: 2,
          dot: !1
        },
        c
      ))
    ] }) }) }) }) })
  ] });
}
export {
  te as LineChart
};
