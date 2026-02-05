import { r as x, g as C, j as a, C as T, a as M, b as B, J as E, c as k, d as w } from "./embed-DL1g_BKL.js";
import { g as D, B as u, f as K, s as o, C as R, R as X, a as G, b as J } from "./shared-tool-invocation-D_xLtRB7.js";
import { X as j, Y as A, C as V } from "./YAxis-D_efaL2F.js";
var Y = D({
  chartName: "BarChart",
  GraphicalChild: u,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: j
  }, {
    axisType: "yAxis",
    AxisComp: A
  }],
  formatAxisMap: K
});
const f = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)"
];
function H(d) {
  const { title: v, data: c, description: h, yAxisLabel: m } = d, i = x.useMemo(() => Array.isArray(c) ? c.reduce(
    (e, s) => {
      const r = e.map((n) => n.xAxisLabel), t = C(s?.xAxisLabel || "", r);
      return [
        ...e,
        {
          xAxisLabel: t,
          series: Array.isArray(s?.series) ? s.series.reduce(
            (n, p) => {
              const y = n.map((N) => N.seriesName), L = C(p?.seriesName || "", y);
              return [
                ...n,
                {
                  ...p,
                  seriesName: L
                }
              ];
            },
            []
          ) : []
        }
      ];
    },
    []
  ) : [], [c]), l = i[0]?.series.map((e) => e.seriesName) || [], g = x.useMemo(() => {
    const e = {};
    return l.forEach((s, r) => {
      const t = r % f.length;
      e[o(s)] = {
        label: s,
        color: f[t]
      };
    }), e;
  }, [l]), b = x.useMemo(() => i.map((e) => {
    const s = {
      name: e.xAxisLabel
    };
    return e.series.forEach(({ seriesName: r, value: t }) => {
      s[o(r)] = t;
    }), s;
  }), [i]);
  return /* @__PURE__ */ a.jsxs(T, { className: "bg-card", children: [
    /* @__PURE__ */ a.jsxs(M, { className: "flex flex-col gap-2 relative", children: [
      /* @__PURE__ */ a.jsxs(B, { className: "flex items-center", children: [
        "Bar Chart - ",
        v,
        /* @__PURE__ */ a.jsx("div", { className: "absolute right-4 top-0", children: /* @__PURE__ */ a.jsx(
          E,
          {
            data: {
              ...d,
              data: i
            }
          }
        ) })
      ] }),
      h && /* @__PURE__ */ a.jsx(k, { children: h })
    ] }),
    /* @__PURE__ */ a.jsx(w, { children: /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(R, { config: g, children: /* @__PURE__ */ a.jsx(X, { width: "100%", height: 400, children: /* @__PURE__ */ a.jsxs(Y, { data: b, children: [
      /* @__PURE__ */ a.jsx(V, { vertical: !1 }),
      /* @__PURE__ */ a.jsx(
        j,
        {
          dataKey: "name",
          tickLine: !1,
          tickMargin: 10,
          axisLine: !1
        }
      ),
      /* @__PURE__ */ a.jsx(
        A,
        {
          tickLine: !1,
          axisLine: !1,
          tickMargin: 10,
          label: m ? {
            value: m,
            angle: -90,
            position: "insideLeft"
          } : void 0
        }
      ),
      /* @__PURE__ */ a.jsx(
        G,
        {
          cursor: !1,
          content: /* @__PURE__ */ a.jsx(J, { indicator: "dashed" })
        }
      ),
      l.map((e, s) => /* @__PURE__ */ a.jsx(
        u,
        {
          dataKey: o(e),
          fill: `var(--color-${o(e)})`,
          radius: 4
        },
        s
      ))
    ] }) }) }) }) })
  ] });
}
export {
  H as BarChart
};
