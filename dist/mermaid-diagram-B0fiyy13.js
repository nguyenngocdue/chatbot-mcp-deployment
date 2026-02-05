import { r as o, e as j, j as s, L as b } from "./embed-DsRsaDzn.js";
var N = (e, c, i, n, u, a, d, r) => {
  let l = document.documentElement, m = ["light", "dark"];
  function f(t) {
    (Array.isArray(e) ? e : [e]).forEach((g) => {
      let x = g === "class", w = x && a ? u.map((v) => a[v] || v) : u;
      x ? (l.classList.remove(...w), l.classList.add(a && a[t] ? a[t] : t)) : l.setAttribute(g, t);
    }), h(t);
  }
  function h(t) {
    r && m.includes(t) && (l.style.colorScheme = t);
  }
  function y() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (n) f(n);
  else try {
    let t = localStorage.getItem(c) || i, g = d && t === "system" ? y() : t;
    f(g);
  } catch {
  }
}, S = o.createContext(void 0), M = { setTheme: (e) => {
}, themes: [] }, k = () => {
  var e;
  return (e = o.useContext(S)) != null ? e : M;
};
o.memo(({ forcedTheme: e, storageKey: c, attribute: i, enableSystem: n, enableColorScheme: u, defaultTheme: a, value: d, themes: r, nonce: l, scriptProps: m }) => {
  let f = JSON.stringify([i, c, a, e, r, d, n, u]).slice(1, -1);
  return o.createElement("script", { ...m, suppressHydrationWarning: !0, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(${N.toString()})(${f})` } });
});
let p = null;
const E = async () => (p || (p = (await import("./mermaid.core-C8MeWhuc.js").then((e) => e.b6)).default), p);
function R({ chart: e }) {
  const { theme: c } = k(), [i, n] = o.useState({
    svg: "",
    error: null,
    loading: !0
  }), u = o.useRef(null), a = o.useRef(e), d = o.useMemo(() => j(), []);
  return o.useEffect(() => (a.current !== e && (n((r) => ({ ...r, loading: !0, error: null })), a.current = e), d(async () => {
    if (!e?.trim()) {
      n({ svg: "", error: null, loading: !1 });
      return;
    }
    try {
      const r = await E();
      r.initialize({
        startOnLoad: !1,
        theme: c == "dark" ? "dark" : "default",
        securityLevel: "loose"
      }), await r.parse(e);
      const l = `mermaid-${Date.now()}`, { svg: m } = await r.render(l, e);
      n({ svg: m, error: null, loading: !1 });
    } catch (r) {
      console.error("Mermaid rendering error:", r), n({
        svg: "",
        error: r instanceof Error ? r.message : "Failed to render diagram",
        loading: !1
      });
    }
  }, 500), () => {
    d.clear();
  }), [e, c, d]), i.loading ? /* @__PURE__ */ s.jsx("div", { className: "px-6 overflow-auto", children: /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center h-20 w-full", children: /* @__PURE__ */ s.jsxs("div", { className: "text-muted-foreground flex items-center gap-2", children: [
    "Rendering diagram ",
    /* @__PURE__ */ s.jsx(b, { className: "size-4 animate-spin" })
  ] }) }) }) : i.error ? /* @__PURE__ */ s.jsx("div", { className: "px-6 pb-6 overflow-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "text-destructive p-4", children: [
    /* @__PURE__ */ s.jsx("p", { children: "Error rendering Mermaid diagram:" }),
    /* @__PURE__ */ s.jsx("pre", { className: "mt-2 p-2 bg-destructive/10 dark:bg-destructive/20 rounded text-xs overflow-auto", children: i.error }),
    /* @__PURE__ */ s.jsx("pre", { className: "mt-2 p-2 bg-accent/10 dark:bg-accent/20 rounded text-xs overflow-auto", children: e })
  ] }) }) : /* @__PURE__ */ s.jsx("div", { className: "px-6 pb-6 overflow-auto", children: /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: u,
      className: "flex justify-center transition-opacity duration-200 overflow-auto",
      dangerouslySetInnerHTML: { __html: i.svg }
    }
  ) });
}
export {
  R as MermaidDiagram
};
