import { h as Kg } from "./embed-DsRsaDzn.js";
import { D as Rc, E as kn, e as fl, y as Ve, z as dl, A as pl, B as Qg, F as Ic, G as Pc, H as Nc, I as zc, J as Wc, K as qc, L as Jg, M as Ja, N as Hc, O as jc, P as tm, Q as em, k as on, l as rm } from "./string-psbzTrf6.js";
function Yc(e, t) {
  this._basis = new Rc(e), this._beta = t;
}
Yc.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], n = t[0], a = e[r] - i, s = t[r] - n, o = -1, l; ++o <= r; )
        l = o / r, this._basis.point(
          this._beta * e[o] + (1 - this._beta) * (i + l * a),
          this._beta * t[o] + (1 - this._beta) * (n + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const im = (function e(t) {
  function r(i) {
    return t === 1 ? new Rc(i) : new Yc(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function vn(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Vs(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Vs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        vn(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        vn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Uc = (function e(t) {
  function r(i) {
    return new Vs(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Zs(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Zs.prototype = {
  areaStart: kn,
  areaEnd: kn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        vn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const nm = (function e(t) {
  function r(i) {
    return new Zs(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Ks(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ks.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        vn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const am = (function e(t) {
  function r(i) {
    return new Ks(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Qs(e, t, r) {
  var i = e._x1, n = e._y1, a = e._x2, s = e._y2;
  if (e._l01_a > fl) {
    var o = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * o - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, n = (n * o - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > fl) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    a = (a * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, s = (s * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, n, a, s, e._x2, e._y2);
}
function Gc(e, t) {
  this._context = e, this._alpha = t;
}
Gc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Qs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Xc = (function e(t) {
  function r(i) {
    return t ? new Gc(i, t) : new Vs(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Vc(e, t) {
  this._context = e, this._alpha = t;
}
Vc.prototype = {
  areaStart: kn,
  areaEnd: kn,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Qs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const sm = (function e(t) {
  function r(i) {
    return t ? new Vc(i, t) : new Zs(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Zc(e, t) {
  this._context = e, this._alpha = t;
}
Zc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Qs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const om = (function e(t) {
  function r(i) {
    return t ? new Zc(i, t) : new Ks(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
var gl = 180 / Math.PI, ts = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Kc(e, t, r, i, n, a) {
  var s, o, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * r + t * i) && (r -= e * l, i -= t * l), (o = Math.sqrt(r * r + i * i)) && (r /= o, i /= o, l /= o), e * i < t * r && (e = -e, t = -t, l = -l, s = -s), {
    translateX: n,
    translateY: a,
    rotate: Math.atan2(t, e) * gl,
    skewX: Math.atan(l) * gl,
    scaleX: s,
    scaleY: o
  };
}
var Vi;
function lm(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ts : Kc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function cm(e) {
  return e == null || (Vi || (Vi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vi.setAttribute("transform", e), !(e = Vi.transform.baseVal.consolidate())) ? ts : (e = e.matrix, Kc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Qc(e, t, r, i) {
  function n(c) {
    return c.length ? c.pop() + " " : "";
  }
  function a(c, h, u, f, d, g) {
    if (c !== u || h !== f) {
      var m = d.push("translate(", null, t, null, r);
      g.push({ i: m - 4, x: Ve(c, u) }, { i: m - 2, x: Ve(h, f) });
    } else (u || f) && d.push("translate(" + u + t + f + r);
  }
  function s(c, h, u, f) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), f.push({ i: u.push(n(u) + "rotate(", null, i) - 2, x: Ve(c, h) })) : h && u.push(n(u) + "rotate(" + h + i);
  }
  function o(c, h, u, f) {
    c !== h ? f.push({ i: u.push(n(u) + "skewX(", null, i) - 2, x: Ve(c, h) }) : h && u.push(n(u) + "skewX(" + h + i);
  }
  function l(c, h, u, f, d, g) {
    if (c !== u || h !== f) {
      var m = d.push(n(d) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Ve(c, u) }, { i: m - 2, x: Ve(h, f) });
    } else (u !== 1 || f !== 1) && d.push(n(d) + "scale(" + u + "," + f + ")");
  }
  return function(c, h) {
    var u = [], f = [];
    return c = e(c), h = e(h), a(c.translateX, c.translateY, h.translateX, h.translateY, u, f), s(c.rotate, h.rotate, u, f), o(c.skewX, h.skewX, u, f), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, u, f), c = h = null, function(d) {
      for (var g = -1, m = f.length, y; ++g < m; ) u[(y = f[g]).i] = y.x(d);
      return u.join("");
    };
  };
}
var hm = Qc(lm, "px, ", "px)", "deg)"), um = Qc(cm, ", ", ")", ")"), ml = {
  name: "mermaid",
  version: "11.12.2",
  description: "Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",
  type: "module",
  module: "./dist/mermaid.core.mjs",
  types: "./dist/mermaid.d.ts",
  exports: {
    ".": {
      types: "./dist/mermaid.d.ts",
      import: "./dist/mermaid.core.mjs",
      default: "./dist/mermaid.core.mjs"
    },
    "./*": "./*"
  },
  keywords: [
    "diagram",
    "markdown",
    "flowchart",
    "sequence diagram",
    "gantt",
    "class diagram",
    "git graph",
    "mindmap",
    "packet diagram",
    "c4 diagram",
    "er diagram",
    "pie chart",
    "pie diagram",
    "quadrant chart",
    "requirement diagram",
    "graph"
  ],
  scripts: {
    clean: "rimraf dist",
    dev: "pnpm -w dev",
    "docs:code": "typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup",
    "docs:build": "rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts",
    "docs:verify": "pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify",
    "docs:pre:vitepress": "pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts",
    "docs:build:vitepress": "pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing",
    "docs:dev": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:dev:docker": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:serve": "pnpm docs:build:vitepress && vitepress serve src/vitepress",
    "docs:spellcheck": 'cspell "src/docs/**/*.md"',
    "docs:release-version": "tsx scripts/update-release-version.mts",
    "docs:verify-version": "tsx scripts/update-release-version.mts --verify",
    "types:build-config": "tsx scripts/create-types-from-json-schema.mts",
    "types:verify-config": "tsx scripts/create-types-from-json-schema.mts --verify",
    checkCircle: "npx madge --circular ./src",
    prepublishOnly: "pnpm docs:verify-version"
  },
  repository: {
    type: "git",
    url: "https://github.com/mermaid-js/mermaid"
  },
  author: "Knut Sveidqvist",
  license: "MIT",
  standard: {
    ignore: [
      "**/parser/*.js",
      "dist/**/*.js",
      "cypress/**/*.js"
    ],
    globals: [
      "page"
    ]
  },
  dependencies: {
    "@braintree/sanitize-url": "^7.1.1",
    "@iconify/utils": "^3.0.1",
    "@mermaid-js/parser": "workspace:^",
    "@types/d3": "^7.4.3",
    cytoscape: "^3.29.3",
    "cytoscape-cose-bilkent": "^4.1.0",
    "cytoscape-fcose": "^2.2.0",
    d3: "^7.9.0",
    "d3-sankey": "^0.12.3",
    "dagre-d3-es": "7.0.13",
    dayjs: "^1.11.18",
    dompurify: "^3.2.5",
    katex: "^0.16.22",
    khroma: "^2.1.0",
    "lodash-es": "^4.17.21",
    marked: "^16.2.1",
    roughjs: "^4.6.6",
    stylis: "^4.3.6",
    "ts-dedent": "^2.2.0",
    uuid: "^11.1.0"
  },
  devDependencies: {
    "@adobe/jsonschema2md": "^8.0.5",
    "@iconify/types": "^2.0.0",
    "@types/cytoscape": "^3.21.9",
    "@types/cytoscape-fcose": "^2.2.4",
    "@types/d3-sankey": "^0.12.4",
    "@types/d3-scale": "^4.0.9",
    "@types/d3-scale-chromatic": "^3.1.0",
    "@types/d3-selection": "^3.0.11",
    "@types/d3-shape": "^3.1.7",
    "@types/jsdom": "^21.1.7",
    "@types/katex": "^0.16.7",
    "@types/lodash-es": "^4.17.12",
    "@types/micromatch": "^4.0.9",
    "@types/stylis": "^4.2.7",
    "@types/uuid": "^10.0.0",
    ajv: "^8.17.1",
    canvas: "^3.1.2",
    chokidar: "3.6.0",
    concurrently: "^9.1.2",
    "csstree-validator": "^4.0.1",
    globby: "^14.1.0",
    jison: "^0.4.18",
    "js-base64": "^3.7.8",
    jsdom: "^26.1.0",
    "json-schema-to-typescript": "^15.0.4",
    micromatch: "^4.0.8",
    "path-browserify": "^1.0.1",
    prettier: "^3.5.3",
    remark: "^15.0.1",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    rimraf: "^6.0.1",
    "start-server-and-test": "^2.0.13",
    "type-fest": "^4.35.0",
    typedoc: "^0.28.12",
    "typedoc-plugin-markdown": "^4.8.1",
    typescript: "~5.7.3",
    "unist-util-flatmap": "^1.0.0",
    "unist-util-visit": "^5.0.0",
    vitepress: "^1.6.4",
    "vitepress-plugin-search": "1.0.4-alpha.22"
  },
  files: [
    "dist/",
    "README.md"
  ],
  publishConfig: {
    access: "public"
  }
}, ln = { exports: {} }, fm = ln.exports, yl;
function dm() {
  return yl || (yl = 1, (function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(fm, (function() {
      var r = 1e3, i = 6e4, n = 36e5, a = "millisecond", s = "second", o = "minute", l = "hour", c = "day", h = "week", u = "month", f = "quarter", d = "year", g = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(B) {
        var L = ["th", "st", "nd", "rd"], T = B % 100;
        return "[" + B + (L[(T - 20) % 10] || L[T] || L[0]) + "]";
      } }, C = function(B, L, T) {
        var $ = String(B);
        return !$ || $.length >= L ? B : "" + Array(L + 1 - $.length).join(T) + B;
      }, v = { s: C, z: function(B) {
        var L = -B.utcOffset(), T = Math.abs(L), $ = Math.floor(T / 60), M = T % 60;
        return (L <= 0 ? "+" : "-") + C($, 2, "0") + ":" + C(M, 2, "0");
      }, m: function B(L, T) {
        if (L.date() < T.date()) return -B(T, L);
        var $ = 12 * (T.year() - L.year()) + (T.month() - L.month()), M = L.clone().add($, u), q = T - M < 0, X = L.clone().add($ + (q ? -1 : 1), u);
        return +(-($ + (T - M) / (q ? M - X : X - M)) || 0);
      }, a: function(B) {
        return B < 0 ? Math.ceil(B) || 0 : Math.floor(B);
      }, p: function(B) {
        return { M: u, y: d, w: h, d: c, D: g, h: l, m: o, s, ms: a, Q: f }[B] || String(B || "").toLowerCase().replace(/s$/, "");
      }, u: function(B) {
        return B === void 0;
      } }, k = "en", A = {};
      A[k] = b;
      var S = "$isDayjsObject", D = function(B) {
        return B instanceof N || !(!B || !B[S]);
      }, I = function B(L, T, $) {
        var M;
        if (!L) return k;
        if (typeof L == "string") {
          var q = L.toLowerCase();
          A[q] && (M = q), T && (A[q] = T, M = q);
          var X = L.split("-");
          if (!M && X.length > 1) return B(X[0]);
        } else {
          var K = L.name;
          A[K] = L, M = K;
        }
        return !$ && M && (k = M), M || !$ && k;
      }, O = function(B, L) {
        if (D(B)) return B.clone();
        var T = typeof L == "object" ? L : {};
        return T.date = B, T.args = arguments, new N(T);
      }, E = v;
      E.l = I, E.i = D, E.w = function(B, L) {
        return O(B, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
      };
      var N = (function() {
        function B(T) {
          this.$L = I(T.locale, null, !0), this.parse(T), this.$x = this.$x || T.x || {}, this[S] = !0;
        }
        var L = B.prototype;
        return L.parse = function(T) {
          this.$d = (function($) {
            var M = $.date, q = $.utc;
            if (M === null) return /* @__PURE__ */ new Date(NaN);
            if (E.u(M)) return /* @__PURE__ */ new Date();
            if (M instanceof Date) return new Date(M);
            if (typeof M == "string" && !/Z$/i.test(M)) {
              var X = M.match(y);
              if (X) {
                var K = X[2] - 1 || 0, J = (X[7] || "0").substring(0, 3);
                return q ? new Date(Date.UTC(X[1], K, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, J)) : new Date(X[1], K, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, J);
              }
            }
            return new Date(M);
          })(T), this.init();
        }, L.init = function() {
          var T = this.$d;
          this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
        }, L.$utils = function() {
          return E;
        }, L.isValid = function() {
          return this.$d.toString() !== m;
        }, L.isSame = function(T, $) {
          var M = O(T);
          return this.startOf($) <= M && M <= this.endOf($);
        }, L.isAfter = function(T, $) {
          return O(T) < this.startOf($);
        }, L.isBefore = function(T, $) {
          return this.endOf($) < O(T);
        }, L.$g = function(T, $, M) {
          return E.u(T) ? this[$] : this.set(M, T);
        }, L.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, L.valueOf = function() {
          return this.$d.getTime();
        }, L.startOf = function(T, $) {
          var M = this, q = !!E.u($) || $, X = E.p(T), K = function(ee, yt) {
            var re = E.w(M.$u ? Date.UTC(M.$y, yt, ee) : new Date(M.$y, yt, ee), M);
            return q ? re : re.endOf(c);
          }, J = function(ee, yt) {
            return E.w(M.toDate()[ee].apply(M.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(yt)), M);
          }, Z = this.$W, ct = this.$M, at = this.$D, bt = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case d:
              return q ? K(1, 0) : K(31, 11);
            case u:
              return q ? K(1, ct) : K(0, ct + 1);
            case h:
              var Ct = this.$locale().weekStart || 0, Pt = (Z < Ct ? Z + 7 : Z) - Ct;
              return K(q ? at - Pt : at + (6 - Pt), ct);
            case c:
            case g:
              return J(bt + "Hours", 0);
            case l:
              return J(bt + "Minutes", 1);
            case o:
              return J(bt + "Seconds", 2);
            case s:
              return J(bt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, L.endOf = function(T) {
          return this.startOf(T, !1);
        }, L.$set = function(T, $) {
          var M, q = E.p(T), X = "set" + (this.$u ? "UTC" : ""), K = (M = {}, M[c] = X + "Date", M[g] = X + "Date", M[u] = X + "Month", M[d] = X + "FullYear", M[l] = X + "Hours", M[o] = X + "Minutes", M[s] = X + "Seconds", M[a] = X + "Milliseconds", M)[q], J = q === c ? this.$D + ($ - this.$W) : $;
          if (q === u || q === d) {
            var Z = this.clone().set(g, 1);
            Z.$d[K](J), Z.init(), this.$d = Z.set(g, Math.min(this.$D, Z.daysInMonth())).$d;
          } else K && this.$d[K](J);
          return this.init(), this;
        }, L.set = function(T, $) {
          return this.clone().$set(T, $);
        }, L.get = function(T) {
          return this[E.p(T)]();
        }, L.add = function(T, $) {
          var M, q = this;
          T = Number(T);
          var X = E.p($), K = function(ct) {
            var at = O(q);
            return E.w(at.date(at.date() + Math.round(ct * T)), q);
          };
          if (X === u) return this.set(u, this.$M + T);
          if (X === d) return this.set(d, this.$y + T);
          if (X === c) return K(1);
          if (X === h) return K(7);
          var J = (M = {}, M[o] = i, M[l] = n, M[s] = r, M)[X] || 1, Z = this.$d.getTime() + T * J;
          return E.w(Z, this);
        }, L.subtract = function(T, $) {
          return this.add(-1 * T, $);
        }, L.format = function(T) {
          var $ = this, M = this.$locale();
          if (!this.isValid()) return M.invalidDate || m;
          var q = T || "YYYY-MM-DDTHH:mm:ssZ", X = E.z(this), K = this.$H, J = this.$m, Z = this.$M, ct = M.weekdays, at = M.months, bt = M.meridiem, Ct = function(yt, re, Oe, ie) {
            return yt && (yt[re] || yt($, q)) || Oe[re].slice(0, ie);
          }, Pt = function(yt) {
            return E.s(K % 12 || 12, yt, "0");
          }, ee = bt || function(yt, re, Oe) {
            var ie = yt < 12 ? "AM" : "PM";
            return Oe ? ie.toLowerCase() : ie;
          };
          return q.replace(x, (function(yt, re) {
            return re || (function(Oe) {
              switch (Oe) {
                case "YY":
                  return String($.$y).slice(-2);
                case "YYYY":
                  return E.s($.$y, 4, "0");
                case "M":
                  return Z + 1;
                case "MM":
                  return E.s(Z + 1, 2, "0");
                case "MMM":
                  return Ct(M.monthsShort, Z, at, 3);
                case "MMMM":
                  return Ct(at, Z);
                case "D":
                  return $.$D;
                case "DD":
                  return E.s($.$D, 2, "0");
                case "d":
                  return String($.$W);
                case "dd":
                  return Ct(M.weekdaysMin, $.$W, ct, 2);
                case "ddd":
                  return Ct(M.weekdaysShort, $.$W, ct, 3);
                case "dddd":
                  return ct[$.$W];
                case "H":
                  return String(K);
                case "HH":
                  return E.s(K, 2, "0");
                case "h":
                  return Pt(1);
                case "hh":
                  return Pt(2);
                case "a":
                  return ee(K, J, !0);
                case "A":
                  return ee(K, J, !1);
                case "m":
                  return String(J);
                case "mm":
                  return E.s(J, 2, "0");
                case "s":
                  return String($.$s);
                case "ss":
                  return E.s($.$s, 2, "0");
                case "SSS":
                  return E.s($.$ms, 3, "0");
                case "Z":
                  return X;
              }
              return null;
            })(yt) || X.replace(":", "");
          }));
        }, L.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, L.diff = function(T, $, M) {
          var q, X = this, K = E.p($), J = O(T), Z = (J.utcOffset() - this.utcOffset()) * i, ct = this - J, at = function() {
            return E.m(X, J);
          };
          switch (K) {
            case d:
              q = at() / 12;
              break;
            case u:
              q = at();
              break;
            case f:
              q = at() / 3;
              break;
            case h:
              q = (ct - Z) / 6048e5;
              break;
            case c:
              q = (ct - Z) / 864e5;
              break;
            case l:
              q = ct / n;
              break;
            case o:
              q = ct / i;
              break;
            case s:
              q = ct / r;
              break;
            default:
              q = ct;
          }
          return M ? q : E.a(q);
        }, L.daysInMonth = function() {
          return this.endOf(u).$D;
        }, L.$locale = function() {
          return A[this.$L];
        }, L.locale = function(T, $) {
          if (!T) return this.$L;
          var M = this.clone(), q = I(T, $, !0);
          return q && (M.$L = q), M;
        }, L.clone = function() {
          return E.w(this.$d, this);
        }, L.toDate = function() {
          return new Date(this.valueOf());
        }, L.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, L.toISOString = function() {
          return this.$d.toISOString();
        }, L.toString = function() {
          return this.$d.toUTCString();
        }, B;
      })(), R = N.prototype;
      return O.prototype = R, [["$ms", a], ["$s", s], ["$m", o], ["$H", l], ["$W", c], ["$M", u], ["$y", d], ["$D", g]].forEach((function(B) {
        R[B[1]] = function(L) {
          return this.$g(L, B[0], B[1]);
        };
      })), O.extend = function(B, L) {
        return B.$i || (B(L, N, O), B.$i = !0), O;
      }, O.locale = I, O.isDayjs = D, O.unix = function(B) {
        return O(1e3 * B);
      }, O.en = A[k], O.Ls = A, O.p = {}, O;
    }));
  })(ln)), ln.exports;
}
var pm = dm();
const gm = /* @__PURE__ */ Kg(pm);
var Jc = Object.defineProperty, p = (e, t) => Jc(e, "name", { value: t, configurable: !0 }), mm = (e, t) => {
  for (var r in t)
    Jc(e, r, { get: t[r], enumerable: !0 });
}, Se = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, F = {
  trace: /* @__PURE__ */ p((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ p((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ p((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ p((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ p((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ p((...e) => {
  }, "fatal")
}, Js = /* @__PURE__ */ p(function(e = "fatal") {
  let t = Se.fatal;
  typeof e == "string" ? e.toLowerCase() in Se && (t = Se[e]) : typeof e == "number" && (t = e), F.trace = () => {
  }, F.debug = () => {
  }, F.info = () => {
  }, F.warn = () => {
  }, F.error = () => {
  }, F.fatal = () => {
  }, t <= Se.fatal && (F.fatal = console.error ? console.error.bind(console, Kt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", Kt("FATAL"))), t <= Se.error && (F.error = console.error ? console.error.bind(console, Kt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", Kt("ERROR"))), t <= Se.warn && (F.warn = console.warn ? console.warn.bind(console, Kt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", Kt("WARN"))), t <= Se.info && (F.info = console.info ? console.info.bind(console, Kt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", Kt("INFO"))), t <= Se.debug && (F.debug = console.debug ? console.debug.bind(console, Kt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Kt("DEBUG"))), t <= Se.trace && (F.trace = console.debug ? console.debug.bind(console, Kt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Kt("TRACE")));
}, "setLogLevel"), Kt = /* @__PURE__ */ p((e) => `%c${gm().format("ss.SSS")} : ${e} : `, "format");
const cn = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n;
    switch (i) {
      case "r":
        return cn.hue2rgb(a, n, e + 1 / 3) * 255;
      case "g":
        return cn.hue2rgb(a, n, e) * 255;
      case "b":
        return cn.hue2rgb(a, n, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const n = Math.max(e, t, r), a = Math.min(e, t, r), s = (n + a) / 2;
    if (i === "l")
      return s * 100;
    if (n === a)
      return 0;
    const o = n - a, l = s > 0.5 ? o / (2 - n - a) : o / (n + a);
    if (i === "s")
      return l * 100;
    switch (n) {
      case e:
        return ((t - r) / o + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / o + 2) * 60;
      case r:
        return ((e - t) / o + 4) * 60;
      default:
        return -1;
    }
  }
}, ym = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, xm = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, st = {
  channel: cn,
  lang: ym,
  unit: xm
}, Re = {};
for (let e = 0; e <= 255; e++)
  Re[e] = st.unit.dec2hex(e);
const $t = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class bm {
  constructor() {
    this.type = $t.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = $t.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class Cm {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new bm();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = $t.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: n } = t;
    r === void 0 && (t.h = st.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = st.channel.rgb2hsl(t, "s")), n === void 0 && (t.l = st.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: n } = t;
    r === void 0 && (t.r = st.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = st.channel.hsl2rgb(t, "g")), n === void 0 && (t.b = st.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), st.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), st.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), st.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), st.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), st.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), st.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const ta = new Cm({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), _r = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(_r.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), n = r.length, a = n % 4 === 0, s = n > 4, o = s ? 1 : 17, l = s ? 8 : 4, c = a ? 0 : -1, h = s ? 255 : 15;
    return ta.set({
      r: (i >> l * (c + 3) & h) * o,
      g: (i >> l * (c + 2) & h) * o,
      b: (i >> l * (c + 1) & h) * o,
      a: a ? (i & h) * o / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: n } = e;
    return n < 1 ? `#${Re[Math.round(t)]}${Re[Math.round(r)]}${Re[Math.round(i)]}${Re[Math.round(n * 255)]}` : `#${Re[Math.round(t)]}${Re[Math.round(r)]}${Re[Math.round(i)]}`;
  }
}, Qe = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(Qe.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return st.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return st.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return st.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return st.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(Qe.re);
    if (!r)
      return;
    const [, i, n, a, s, o] = r;
    return ta.set({
      h: Qe._hue2deg(i),
      s: st.channel.clamp.s(parseFloat(n)),
      l: st.channel.clamp.l(parseFloat(a)),
      a: s ? st.channel.clamp.a(o ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: n } = e;
    return n < 1 ? `hsla(${st.lang.round(t)}, ${st.lang.round(r)}%, ${st.lang.round(i)}%, ${n})` : `hsl(${st.lang.round(t)}, ${st.lang.round(r)}%, ${st.lang.round(i)}%)`;
  }
}, yi = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = yi.colors[e];
    if (t)
      return _r.parse(t);
  },
  stringify: (e) => {
    const t = _r.stringify(e);
    for (const r in yi.colors)
      if (yi.colors[r] === t)
        return r;
  }
}, li = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(li.re);
    if (!r)
      return;
    const [, i, n, a, s, o, l, c, h] = r;
    return ta.set({
      r: st.channel.clamp.r(n ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: st.channel.clamp.g(s ? parseFloat(a) * 2.55 : parseFloat(a)),
      b: st.channel.clamp.b(l ? parseFloat(o) * 2.55 : parseFloat(o)),
      a: c ? st.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: n } = e;
    return n < 1 ? `rgba(${st.lang.round(t)}, ${st.lang.round(r)}, ${st.lang.round(i)}, ${st.lang.round(n)})` : `rgb(${st.lang.round(t)}, ${st.lang.round(r)}, ${st.lang.round(i)})`;
  }
}, xe = {
  /* VARIABLES */
  format: {
    keyword: yi,
    hex: _r,
    rgb: li,
    rgba: li,
    hsl: Qe,
    hsla: Qe
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = _r.parse(e) || li.parse(e) || Qe.parse(e) || yi.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is($t.HSL) || e.data.r === void 0 ? Qe.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? li.stringify(e) : _r.stringify(e)
}, th = (e, t) => {
  const r = xe.parse(e);
  for (const i in t)
    r[i] = st.channel.clamp[i](t[i]);
  return xe.stringify(r);
}, xi = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return th(e, { a: t });
  const n = ta.set({
    r: st.channel.clamp.r(e),
    g: st.channel.clamp.g(t),
    b: st.channel.clamp.b(r),
    a: st.channel.clamp.a(i)
  });
  return xe.stringify(n);
}, wm = (e) => {
  const { r: t, g: r, b: i } = xe.parse(e), n = 0.2126 * st.channel.toLinear(t) + 0.7152 * st.channel.toLinear(r) + 0.0722 * st.channel.toLinear(i);
  return st.lang.round(n);
}, km = (e) => wm(e) >= 0.5, Fi = (e) => !km(e), eh = (e, t, r) => {
  const i = xe.parse(e), n = i[t], a = st.channel.clamp[t](n + r);
  return n !== a && (i[t] = a), xe.stringify(i);
}, H = (e, t) => eh(e, "l", t), et = (e, t) => eh(e, "l", -t), _ = (e, t) => {
  const r = xe.parse(e), i = {};
  for (const n in t)
    t[n] && (i[n] = r[n] + t[n]);
  return th(e, i);
}, vm = (e, t, r = 50) => {
  const { r: i, g: n, b: a, a: s } = xe.parse(e), { r: o, g: l, b: c, a: h } = xe.parse(t), u = r / 100, f = u * 2 - 1, d = s - h, m = ((f * d === -1 ? f : (f + d) / (1 + f * d)) + 1) / 2, y = 1 - m, x = i * m + o * y, b = n * m + l * y, C = a * m + c * y, v = s * u + h * (1 - u);
  return xi(x, b, C, v);
}, z = (e, t = 100) => {
  const r = xe.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, vm(r, e, t);
};
const {
  entries: rh,
  setPrototypeOf: xl,
  isFrozen: _m,
  getPrototypeOf: Sm,
  getOwnPropertyDescriptor: Tm
} = Object;
let {
  freeze: Ht,
  seal: Qt,
  create: es
} = Object, {
  apply: rs,
  construct: is
} = typeof Reflect < "u" && Reflect;
Ht || (Ht = function(t) {
  return t;
});
Qt || (Qt = function(t) {
  return t;
});
rs || (rs = function(t, r) {
  for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
    n[a - 2] = arguments[a];
  return t.apply(r, n);
});
is || (is = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    i[n - 1] = arguments[n];
  return new t(...i);
});
const Zi = jt(Array.prototype.forEach), Bm = jt(Array.prototype.lastIndexOf), bl = jt(Array.prototype.pop), Kr = jt(Array.prototype.push), Am = jt(Array.prototype.splice), hn = jt(String.prototype.toLowerCase), Oa = jt(String.prototype.toString), Ra = jt(String.prototype.match), Qr = jt(String.prototype.replace), Lm = jt(String.prototype.indexOf), Mm = jt(String.prototype.trim), ne = jt(Object.prototype.hasOwnProperty), Nt = jt(RegExp.prototype.test), Jr = Em(TypeError);
function jt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
      i[n - 1] = arguments[n];
    return rs(e, t, i);
  };
}
function Em(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return is(e, r);
  };
}
function ot(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : hn;
  xl && xl(e, null);
  let i = t.length;
  for (; i--; ) {
    let n = t[i];
    if (typeof n == "string") {
      const a = r(n);
      a !== n && (_m(t) || (t[i] = a), n = a);
    }
    e[n] = !0;
  }
  return e;
}
function $m(e) {
  for (let t = 0; t < e.length; t++)
    ne(e, t) || (e[t] = null);
  return e;
}
function pe(e) {
  const t = es(null);
  for (const [r, i] of rh(e))
    ne(e, r) && (Array.isArray(i) ? t[r] = $m(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = pe(i) : t[r] = i);
  return t;
}
function ti(e, t) {
  for (; e !== null; ) {
    const i = Tm(e, t);
    if (i) {
      if (i.get)
        return jt(i.get);
      if (typeof i.value == "function")
        return jt(i.value);
    }
    e = Sm(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Cl = Ht(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ia = Ht(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pa = Ht(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Fm = Ht(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Na = Ht(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Dm = Ht(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), wl = Ht(["#text"]), kl = Ht(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), za = Ht(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), vl = Ht(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ki = Ht(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Om = Qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Rm = Qt(/<%[\w\W]*|[\w\W]*%>/gm), Im = Qt(/\$\{[\w\W]*/gm), Pm = Qt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Nm = Qt(/^aria-[\-\w]+$/), ih = Qt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zm = Qt(/^(?:\w+script|data):/i), Wm = Qt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), nh = Qt(/^html$/i), qm = Qt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var _l = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Nm,
  ATTR_WHITESPACE: Wm,
  CUSTOM_ELEMENT: qm,
  DATA_ATTR: Pm,
  DOCTYPE_NAME: nh,
  ERB_EXPR: Rm,
  IS_ALLOWED_URI: ih,
  IS_SCRIPT_OR_DATA: zm,
  MUSTACHE_EXPR: Om,
  TMPLIT_EXPR: Im
});
const ei = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Hm = function() {
  return typeof window > "u" ? null : window;
}, jm = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const n = "data-tt-policy-suffix";
  r && r.hasAttribute(n) && (i = r.getAttribute(n));
  const a = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(a, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Sl = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function ah() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hm();
  const t = (tt) => ah(tt);
  if (t.version = "3.3.1", t.removed = [], !e || !e.document || e.document.nodeType !== ei.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, n = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: s,
    Node: o,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: f,
    trustedTypes: d
  } = e, g = l.prototype, m = ti(g, "cloneNode"), y = ti(g, "remove"), x = ti(g, "nextSibling"), b = ti(g, "childNodes"), C = ti(g, "parentNode");
  if (typeof s == "function") {
    const tt = r.createElement("template");
    tt.content && tt.content.ownerDocument && (r = tt.content.ownerDocument);
  }
  let v, k = "";
  const {
    implementation: A,
    createNodeIterator: S,
    createDocumentFragment: D,
    getElementsByTagName: I
  } = r, {
    importNode: O
  } = i;
  let E = Sl();
  t.isSupported = typeof rh == "function" && typeof C == "function" && A && A.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: N,
    ERB_EXPR: R,
    TMPLIT_EXPR: B,
    DATA_ATTR: L,
    ARIA_ATTR: T,
    IS_SCRIPT_OR_DATA: $,
    ATTR_WHITESPACE: M,
    CUSTOM_ELEMENT: q
  } = _l;
  let {
    IS_ALLOWED_URI: X
  } = _l, K = null;
  const J = ot({}, [...Cl, ...Ia, ...Pa, ...Na, ...wl]);
  let Z = null;
  const ct = ot({}, [...kl, ...za, ...vl, ...Ki]);
  let at = Object.seal(es(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), bt = null, Ct = null;
  const Pt = Object.seal(es(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let ee = !0, yt = !0, re = !1, Oe = !0, ie = !1, qi = !0, Ue = !1, Sa = !1, Ta = !1, gr = !1, Hi = !1, ji = !1, Vo = !0, Zo = !1;
  const Hg = "user-content-";
  let Ba = !0, Vr = !1, mr = {}, ue = null;
  const Aa = ot({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ko = null;
  const Qo = ot({}, ["audio", "video", "img", "source", "image", "track"]);
  let La = null;
  const Jo = ot({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Yi = "http://www.w3.org/1998/Math/MathML", Ui = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml";
  let yr = ke, Ma = !1, Ea = null;
  const jg = ot({}, [Yi, Ui, ke], Oa);
  let Gi = ot({}, ["mi", "mo", "mn", "ms", "mtext"]), Xi = ot({}, ["annotation-xml"]);
  const Yg = ot({}, ["title", "style", "font", "a", "script"]);
  let Zr = null;
  const Ug = ["application/xhtml+xml", "text/html"], Gg = "text/html";
  let vt = null, xr = null;
  const Xg = r.createElement("form"), tl = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, $a = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(xr && xr === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = pe(w), Zr = // eslint-disable-next-line unicorn/prefer-includes
      Ug.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Gg : w.PARSER_MEDIA_TYPE, vt = Zr === "application/xhtml+xml" ? Oa : hn, K = ne(w, "ALLOWED_TAGS") ? ot({}, w.ALLOWED_TAGS, vt) : J, Z = ne(w, "ALLOWED_ATTR") ? ot({}, w.ALLOWED_ATTR, vt) : ct, Ea = ne(w, "ALLOWED_NAMESPACES") ? ot({}, w.ALLOWED_NAMESPACES, Oa) : jg, La = ne(w, "ADD_URI_SAFE_ATTR") ? ot(pe(Jo), w.ADD_URI_SAFE_ATTR, vt) : Jo, Ko = ne(w, "ADD_DATA_URI_TAGS") ? ot(pe(Qo), w.ADD_DATA_URI_TAGS, vt) : Qo, ue = ne(w, "FORBID_CONTENTS") ? ot({}, w.FORBID_CONTENTS, vt) : Aa, bt = ne(w, "FORBID_TAGS") ? ot({}, w.FORBID_TAGS, vt) : pe({}), Ct = ne(w, "FORBID_ATTR") ? ot({}, w.FORBID_ATTR, vt) : pe({}), mr = ne(w, "USE_PROFILES") ? w.USE_PROFILES : !1, ee = w.ALLOW_ARIA_ATTR !== !1, yt = w.ALLOW_DATA_ATTR !== !1, re = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ie = w.SAFE_FOR_TEMPLATES || !1, qi = w.SAFE_FOR_XML !== !1, Ue = w.WHOLE_DOCUMENT || !1, gr = w.RETURN_DOM || !1, Hi = w.RETURN_DOM_FRAGMENT || !1, ji = w.RETURN_TRUSTED_TYPE || !1, Ta = w.FORCE_BODY || !1, Vo = w.SANITIZE_DOM !== !1, Zo = w.SANITIZE_NAMED_PROPS || !1, Ba = w.KEEP_CONTENT !== !1, Vr = w.IN_PLACE || !1, X = w.ALLOWED_URI_REGEXP || ih, yr = w.NAMESPACE || ke, Gi = w.MATHML_TEXT_INTEGRATION_POINTS || Gi, Xi = w.HTML_INTEGRATION_POINTS || Xi, at = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && tl(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (at.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && tl(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (at.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (at.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ie && (yt = !1), Hi && (gr = !0), mr && (K = ot({}, wl), Z = [], mr.html === !0 && (ot(K, Cl), ot(Z, kl)), mr.svg === !0 && (ot(K, Ia), ot(Z, za), ot(Z, Ki)), mr.svgFilters === !0 && (ot(K, Pa), ot(Z, za), ot(Z, Ki)), mr.mathMl === !0 && (ot(K, Na), ot(Z, vl), ot(Z, Ki))), w.ADD_TAGS && (typeof w.ADD_TAGS == "function" ? Pt.tagCheck = w.ADD_TAGS : (K === J && (K = pe(K)), ot(K, w.ADD_TAGS, vt))), w.ADD_ATTR && (typeof w.ADD_ATTR == "function" ? Pt.attributeCheck = w.ADD_ATTR : (Z === ct && (Z = pe(Z)), ot(Z, w.ADD_ATTR, vt))), w.ADD_URI_SAFE_ATTR && ot(La, w.ADD_URI_SAFE_ATTR, vt), w.FORBID_CONTENTS && (ue === Aa && (ue = pe(ue)), ot(ue, w.FORBID_CONTENTS, vt)), w.ADD_FORBID_CONTENTS && (ue === Aa && (ue = pe(ue)), ot(ue, w.ADD_FORBID_CONTENTS, vt)), Ba && (K["#text"] = !0), Ue && ot(K, ["html", "head", "body"]), K.table && (ot(K, ["tbody"]), delete bt.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = w.TRUSTED_TYPES_POLICY, k = v.createHTML("");
      } else
        v === void 0 && (v = jm(d, n)), v !== null && typeof k == "string" && (k = v.createHTML(""));
      Ht && Ht(w), xr = w;
    }
  }, el = ot({}, [...Ia, ...Pa, ...Fm]), rl = ot({}, [...Na, ...Dm]), Vg = function(w) {
    let P = C(w);
    (!P || !P.tagName) && (P = {
      namespaceURI: yr,
      tagName: "template"
    });
    const V = hn(w.tagName), gt = hn(P.tagName);
    return Ea[w.namespaceURI] ? w.namespaceURI === Ui ? P.namespaceURI === ke ? V === "svg" : P.namespaceURI === Yi ? V === "svg" && (gt === "annotation-xml" || Gi[gt]) : !!el[V] : w.namespaceURI === Yi ? P.namespaceURI === ke ? V === "math" : P.namespaceURI === Ui ? V === "math" && Xi[gt] : !!rl[V] : w.namespaceURI === ke ? P.namespaceURI === Ui && !Xi[gt] || P.namespaceURI === Yi && !Gi[gt] ? !1 : !rl[V] && (Yg[V] || !el[V]) : !!(Zr === "application/xhtml+xml" && Ea[w.namespaceURI]) : !1;
  }, fe = function(w) {
    Kr(t.removed, {
      element: w
    });
    try {
      C(w).removeChild(w);
    } catch {
      y(w);
    }
  }, Ge = function(w, P) {
    try {
      Kr(t.removed, {
        attribute: P.getAttributeNode(w),
        from: P
      });
    } catch {
      Kr(t.removed, {
        attribute: null,
        from: P
      });
    }
    if (P.removeAttribute(w), w === "is")
      if (gr || Hi)
        try {
          fe(P);
        } catch {
        }
      else
        try {
          P.setAttribute(w, "");
        } catch {
        }
  }, il = function(w) {
    let P = null, V = null;
    if (Ta)
      w = "<remove></remove>" + w;
    else {
      const wt = Ra(w, /^[\r\n\t ]+/);
      V = wt && wt[0];
    }
    Zr === "application/xhtml+xml" && yr === ke && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const gt = v ? v.createHTML(w) : w;
    if (yr === ke)
      try {
        P = new f().parseFromString(gt, Zr);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = A.createDocument(yr, "template", null);
      try {
        P.documentElement.innerHTML = Ma ? k : gt;
      } catch {
      }
    }
    const Et = P.body || P.documentElement;
    return w && V && Et.insertBefore(r.createTextNode(V), Et.childNodes[0] || null), yr === ke ? I.call(P, Ue ? "html" : "body")[0] : Ue ? P.documentElement : Et;
  }, nl = function(w) {
    return S.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Fa = function(w) {
    return w instanceof u && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof h) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, al = function(w) {
    return typeof o == "function" && w instanceof o;
  };
  function ve(tt, w, P) {
    Zi(tt, (V) => {
      V.call(t, w, P, xr);
    });
  }
  const sl = function(w) {
    let P = null;
    if (ve(E.beforeSanitizeElements, w, null), Fa(w))
      return fe(w), !0;
    const V = vt(w.nodeName);
    if (ve(E.uponSanitizeElement, w, {
      tagName: V,
      allowedTags: K
    }), qi && w.hasChildNodes() && !al(w.firstElementChild) && Nt(/<[/\w!]/g, w.innerHTML) && Nt(/<[/\w!]/g, w.textContent) || w.nodeType === ei.progressingInstruction || qi && w.nodeType === ei.comment && Nt(/<[/\w]/g, w.data))
      return fe(w), !0;
    if (!(Pt.tagCheck instanceof Function && Pt.tagCheck(V)) && (!K[V] || bt[V])) {
      if (!bt[V] && ll(V) && (at.tagNameCheck instanceof RegExp && Nt(at.tagNameCheck, V) || at.tagNameCheck instanceof Function && at.tagNameCheck(V)))
        return !1;
      if (Ba && !ue[V]) {
        const gt = C(w) || w.parentNode, Et = b(w) || w.childNodes;
        if (Et && gt) {
          const wt = Et.length;
          for (let Yt = wt - 1; Yt >= 0; --Yt) {
            const _e = m(Et[Yt], !0);
            _e.__removalCount = (w.__removalCount || 0) + 1, gt.insertBefore(_e, x(w));
          }
        }
      }
      return fe(w), !0;
    }
    return w instanceof l && !Vg(w) || (V === "noscript" || V === "noembed" || V === "noframes") && Nt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (fe(w), !0) : (ie && w.nodeType === ei.text && (P = w.textContent, Zi([N, R, B], (gt) => {
      P = Qr(P, gt, " ");
    }), w.textContent !== P && (Kr(t.removed, {
      element: w.cloneNode()
    }), w.textContent = P)), ve(E.afterSanitizeElements, w, null), !1);
  }, ol = function(w, P, V) {
    if (Vo && (P === "id" || P === "name") && (V in r || V in Xg))
      return !1;
    if (!(yt && !Ct[P] && Nt(L, P))) {
      if (!(ee && Nt(T, P))) {
        if (!(Pt.attributeCheck instanceof Function && Pt.attributeCheck(P, w))) {
          if (!Z[P] || Ct[P]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ll(w) && (at.tagNameCheck instanceof RegExp && Nt(at.tagNameCheck, w) || at.tagNameCheck instanceof Function && at.tagNameCheck(w)) && (at.attributeNameCheck instanceof RegExp && Nt(at.attributeNameCheck, P) || at.attributeNameCheck instanceof Function && at.attributeNameCheck(P, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              P === "is" && at.allowCustomizedBuiltInElements && (at.tagNameCheck instanceof RegExp && Nt(at.tagNameCheck, V) || at.tagNameCheck instanceof Function && at.tagNameCheck(V)))
            ) return !1;
          } else if (!La[P]) {
            if (!Nt(X, Qr(V, M, ""))) {
              if (!((P === "src" || P === "xlink:href" || P === "href") && w !== "script" && Lm(V, "data:") === 0 && Ko[w])) {
                if (!(re && !Nt($, Qr(V, M, "")))) {
                  if (V)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, ll = function(w) {
    return w !== "annotation-xml" && Ra(w, q);
  }, cl = function(w) {
    ve(E.beforeSanitizeAttributes, w, null);
    const {
      attributes: P
    } = w;
    if (!P || Fa(w))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Z,
      forceKeepAttr: void 0
    };
    let gt = P.length;
    for (; gt--; ) {
      const Et = P[gt], {
        name: wt,
        namespaceURI: Yt,
        value: _e
      } = Et, br = vt(wt), Da = _e;
      let At = wt === "value" ? Da : Mm(Da);
      if (V.attrName = br, V.attrValue = At, V.keepAttr = !0, V.forceKeepAttr = void 0, ve(E.uponSanitizeAttribute, w, V), At = V.attrValue, Zo && (br === "id" || br === "name") && (Ge(wt, w), At = Hg + At), qi && Nt(/((--!?|])>)|<\/(style|title|textarea)/i, At)) {
        Ge(wt, w);
        continue;
      }
      if (br === "attributename" && Ra(At, "href")) {
        Ge(wt, w);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        Ge(wt, w);
        continue;
      }
      if (!Oe && Nt(/\/>/i, At)) {
        Ge(wt, w);
        continue;
      }
      ie && Zi([N, R, B], (ul) => {
        At = Qr(At, ul, " ");
      });
      const hl = vt(w.nodeName);
      if (!ol(hl, br, At)) {
        Ge(wt, w);
        continue;
      }
      if (v && typeof d == "object" && typeof d.getAttributeType == "function" && !Yt)
        switch (d.getAttributeType(hl, br)) {
          case "TrustedHTML": {
            At = v.createHTML(At);
            break;
          }
          case "TrustedScriptURL": {
            At = v.createScriptURL(At);
            break;
          }
        }
      if (At !== Da)
        try {
          Yt ? w.setAttributeNS(Yt, wt, At) : w.setAttribute(wt, At), Fa(w) ? fe(w) : bl(t.removed);
        } catch {
          Ge(wt, w);
        }
    }
    ve(E.afterSanitizeAttributes, w, null);
  }, Zg = function tt(w) {
    let P = null;
    const V = nl(w);
    for (ve(E.beforeSanitizeShadowDOM, w, null); P = V.nextNode(); )
      ve(E.uponSanitizeShadowNode, P, null), sl(P), cl(P), P.content instanceof a && tt(P.content);
    ve(E.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(tt) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, V = null, gt = null, Et = null;
    if (Ma = !tt, Ma && (tt = "<!-->"), typeof tt != "string" && !al(tt))
      if (typeof tt.toString == "function") {
        if (tt = tt.toString(), typeof tt != "string")
          throw Jr("dirty is not a string, aborting");
      } else
        throw Jr("toString is not a function");
    if (!t.isSupported)
      return tt;
    if (Sa || $a(w), t.removed = [], typeof tt == "string" && (Vr = !1), Vr) {
      if (tt.nodeName) {
        const _e = vt(tt.nodeName);
        if (!K[_e] || bt[_e])
          throw Jr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (tt instanceof o)
      P = il("<!---->"), V = P.ownerDocument.importNode(tt, !0), V.nodeType === ei.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? P = V : P.appendChild(V);
    else {
      if (!gr && !ie && !Ue && // eslint-disable-next-line unicorn/prefer-includes
      tt.indexOf("<") === -1)
        return v && ji ? v.createHTML(tt) : tt;
      if (P = il(tt), !P)
        return gr ? null : ji ? k : "";
    }
    P && Ta && fe(P.firstChild);
    const wt = nl(Vr ? tt : P);
    for (; gt = wt.nextNode(); )
      sl(gt), cl(gt), gt.content instanceof a && Zg(gt.content);
    if (Vr)
      return tt;
    if (gr) {
      if (Hi)
        for (Et = D.call(P.ownerDocument); P.firstChild; )
          Et.appendChild(P.firstChild);
      else
        Et = P;
      return (Z.shadowroot || Z.shadowrootmode) && (Et = O.call(i, Et, !0)), Et;
    }
    let Yt = Ue ? P.outerHTML : P.innerHTML;
    return Ue && K["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Nt(nh, P.ownerDocument.doctype.name) && (Yt = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + Yt), ie && Zi([N, R, B], (_e) => {
      Yt = Qr(Yt, _e, " ");
    }), v && ji ? v.createHTML(Yt) : Yt;
  }, t.setConfig = function() {
    let tt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    $a(tt), Sa = !0;
  }, t.clearConfig = function() {
    xr = null, Sa = !1;
  }, t.isValidAttribute = function(tt, w, P) {
    xr || $a({});
    const V = vt(tt), gt = vt(w);
    return ol(V, gt, P);
  }, t.addHook = function(tt, w) {
    typeof w == "function" && Kr(E[tt], w);
  }, t.removeHook = function(tt, w) {
    if (w !== void 0) {
      const P = Bm(E[tt], w);
      return P === -1 ? void 0 : Am(E[tt], P, 1)[0];
    }
    return bl(E[tt]);
  }, t.removeHooks = function(tt) {
    E[tt] = [];
  }, t.removeAllHooks = function() {
    E = Sl();
  }, t;
}
var Dr = ah(), sh = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, bi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Ym = /\s*%%.*\n/gm, Tr, oh = (Tr = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, p(Tr, "UnknownDiagramError"), Tr), ir = {}, to = /* @__PURE__ */ p(function(e, t) {
  e = e.replace(sh, "").replace(bi, "").replace(Ym, `
`);
  for (const [r, { detector: i }] of Object.entries(ir))
    if (i(e, t))
      return r;
  throw new oh(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), ns = /* @__PURE__ */ p((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    lh(t, r, i);
}, "registerLazyLoadedDiagrams"), lh = /* @__PURE__ */ p((e, t, r) => {
  ir[e] && F.warn(`Detector with key ${e} already exists. Overwriting.`), ir[e] = { detector: t, loader: r }, F.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), Um = /* @__PURE__ */ p((e) => ir[e].loader, "getDiagramLoader"), as = /* @__PURE__ */ p((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const n = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((a) => as(e, a, n)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((a) => {
    e.includes(a) || e.push(a);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((a) => {
    typeof t[a] == "object" && (e[a] === void 0 || typeof e[a] == "object") ? (e[a] === void 0 && (e[a] = Array.isArray(t[a]) ? [] : {}), e[a] = as(e[a], t[a], { depth: r - 1, clobber: i })) : (i || typeof e[a] != "object" && typeof t[a] != "object") && (e[a] = t[a]);
  }), e);
}, "assignWithDepth"), St = as, ea = "#ffffff", ra = "#f2f2f2", zt = /* @__PURE__ */ p((e, t) => t ? _(e, { s: -40, l: 10 }) : _(e, { s: -40, l: -10 }), "mkBorder"), Br, Gm = (Br = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || _(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || _(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || zt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || zt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || z(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || z(this.tertiaryColor), this.lineColor = this.lineColor || z(this.background), this.arrowheadColor = this.arrowheadColor || z(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || et(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || z(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || H(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || et(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || et(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 }), this.darkMode)
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = et(this["cScale" + r], 75);
    else
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = et(this["cScale" + r], 25);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleInv" + r] = this["cScaleInv" + r] || z(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || H(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || et(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++)
      this["surface" + r] = this["surface" + r] || _(this.mainBkg, { h: 180, s: -15, l: t * (5 + r * 3) }), this["surfacePeer" + r] = this["surfacePeer" + r] || _(this.mainBkg, { h: 180, s: -15, l: t * (8 + r * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || _(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || _(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || _(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || _(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || _(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || _(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || _(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || _(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || _(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || _(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || _(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || _(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || _(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || _(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || _(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, { h: -30 }), this.git4 = this.git4 || _(this.primaryColor, { h: -60 }), this.git5 = this.git5 || _(this.primaryColor, { h: -90 }), this.git6 = this.git6 || _(this.primaryColor, { h: 60 }), this.git7 = this.git7 || _(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ea, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ra;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Br, "Theme"), Br), Xm = /* @__PURE__ */ p((e) => {
  const t = new Gm();
  return t.calculate(e), t;
}, "getThemeVariables"), Ar, Vm = (Ar = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = H(this.primaryColor, 16), this.tertiaryColor = _(this.primaryColor, { h: -160 }), this.primaryBorderColor = z(this.background), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.tertiaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = H(z("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = xi(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = et("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = et(this.sectionBkgColor, 10), this.taskBorderColor = xi(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = xi(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || H(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || et(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    this.secondBkg = H(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = H(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = H(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || z(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScalePeer" + t] = this["cScalePeer" + t] || H(this["cScale" + t], 10);
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(-10 + t * 4) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(-7 + t * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? et(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = H(this.secondaryColor, 20), this.git1 = H(this.pie2 || this.secondaryColor, 20), this.git2 = H(this.pie3 || this.tertiaryColor, 20), this.git3 = H(this.pie4 || _(this.primaryColor, { h: -30 }), 20), this.git4 = H(this.pie5 || _(this.primaryColor, { h: -60 }), 20), this.git5 = H(this.pie6 || _(this.primaryColor, { h: -90 }), 10), this.git6 = H(this.pie7 || _(this.primaryColor, { h: 60 }), 10), this.git7 = H(this.pie8 || _(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || z(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || z(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || H(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || H(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Ar, "Theme"), Ar), Zm = /* @__PURE__ */ p((e) => {
  const t = new Vm();
  return t.calculate(e), t;
}, "getThemeVariables"), Lr, Km = (Lr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = _(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = _(this.primaryColor, { h: -160 }), this.primaryBorderColor = zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.tertiaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = xi(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || et(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || et(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = et(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t], { h: 180 });
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { h: 30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { h: 30, l: -(7 + t * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || z(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || z(this.labelTextColor);
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = H(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || H(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || _(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || _(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || _(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || _(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || _(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || _(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || _(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || _(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || _(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || _(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, { h: -30 }), this.git4 = this.git4 || _(this.primaryColor, { h: -60 }), this.git5 = this.git5 || _(this.primaryColor, { h: -90 }), this.git6 = this.git6 || _(this.primaryColor, { h: 60 }), this.git7 = this.git7 || _(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || et(z(this.git0), 25), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || z(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || z(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ea, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ra;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Lr, "Theme"), Lr), Qm = /* @__PURE__ */ p((e) => {
  const t = new Km();
  return t.calculate(e), t;
}, "getThemeVariables"), Mr, Jm = (Mr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = H("#cde498", 10), this.primaryBorderColor = zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.primaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.actorBorder = et(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || _(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || _(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || _(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || _(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || _(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || _(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || _(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || _(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || et(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || et(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = et(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { h: 30, s: -30, l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || H(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || _(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || _(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || _(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || _(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || _(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || _(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || _(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || _(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || _(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, { h: -30 }), this.git4 = this.git4 || _(this.primaryColor, { h: -60 }), this.git5 = this.git5 || _(this.primaryColor, { h: -90 }), this.git6 = this.git6 || _(this.primaryColor, { h: 60 }), this.git7 = this.git7 || _(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = H(this.git0, 25), this.git1 = H(this.git1, 25), this.git2 = H(this.git2, 25), this.git3 = H(this.git3, 25), this.git4 = H(this.git4, 25), this.git5 = H(this.git5, 25), this.git6 = H(this.git6, 25), this.git7 = H(this.git7, 25)) : (this.git0 = et(this.git0, 25), this.git1 = et(this.git1, 25), this.git2 = et(this.git2, 25), this.git3 = et(this.git3, 25), this.git4 = et(this.git4, 25), this.git5 = et(this.git5, 25), this.git6 = et(this.git6, 25), this.git7 = et(this.git7, 25)), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || z(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || z(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ea, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ra;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Mr, "Theme"), Mr), ty = /* @__PURE__ */ p((e) => {
  const t = new Jm();
  return t.calculate(e), t;
}, "getThemeVariables"), Er, ey = (Er = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = H(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = _(this.primaryColor, { h: -160 }), this.primaryBorderColor = zt(this.primaryColor, this.darkMode), this.secondaryBorderColor = zt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = zt(this.tertiaryColor, this.darkMode), this.primaryTextColor = z(this.primaryColor), this.secondaryTextColor = z(this.secondaryColor), this.tertiaryTextColor = z(this.tertiaryColor), this.lineColor = z(this.background), this.textColor = z(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || H(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.secondBkg = H(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = H(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || z(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || H(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || et(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || _(this.mainBkg, { l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || _(this.mainBkg, { l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = H(this.contrast, 30), this.sectionBkgColor2 = H(this.contrast, 30), this.taskBorderColor = et(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = H(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = et(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, { h: 64 }), this.fillType3 = _(this.secondaryColor, { h: 64 }), this.fillType4 = _(this.primaryColor, { h: -64 }), this.fillType5 = _(this.secondaryColor, { h: -64 }), this.fillType6 = _(this.primaryColor, { h: 128 }), this.fillType7 = _(this.secondaryColor, { h: 128 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? H(this.quadrant1Fill) : et(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = et(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || _(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || _(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || _(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || _(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || _(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || z(this.git0), this.gitInv1 = this.gitInv1 || z(this.git1), this.gitInv2 = this.gitInv2 || z(this.git2), this.gitInv3 = this.gitInv3 || z(this.git3), this.gitInv4 = this.gitInv4 || z(this.git4), this.gitInv5 = this.gitInv5 || z(this.git5), this.gitInv6 = this.gitInv6 || z(this.git6), this.gitInv7 = this.gitInv7 || z(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || ea, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || ra;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Er, "Theme"), Er), ry = /* @__PURE__ */ p((e) => {
  const t = new ey();
  return t.calculate(e), t;
}, "getThemeVariables"), Le = {
  base: {
    getThemeVariables: Xm
  },
  dark: {
    getThemeVariables: Zm
  },
  default: {
    getThemeVariables: Qm
  },
  forest: {
    getThemeVariables: ty
  },
  neutral: {
    getThemeVariables: ry
  }
}, de = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: !1
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: !1,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200,
    layoutAlgorithm: "cose-bilkent"
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, ch = {
  ...de,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF",
    forceNodeModelOrder: !1,
    considerModelOrder: "NODES_AND_EDGES"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Le.default.getThemeVariables(),
  sequence: {
    ...de.sequence,
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: !1
  },
  gantt: {
    ...de.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...de.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ...de.flowchart,
      inheritDir: !1
      // default to legacy behavior
    },
    external_personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...de.pie,
    useWidth: 984
  },
  xyChart: {
    ...de.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...de.requirement,
    useWidth: void 0
  },
  packet: {
    ...de.packet
  },
  radar: {
    ...de.radar
  },
  treemap: {
    useMaxWidth: !0,
    padding: 10,
    diagramPadding: 8,
    showValues: !0,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  }
}, hh = /* @__PURE__ */ p((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...hh(e[i], "")] : [...r, t + i], []), "keyify"), iy = new Set(hh(ch, "")), uh = ch, _n = /* @__PURE__ */ p((e) => {
  if (F.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => _n(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (F.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !iy.has(t) || e[t] == null) {
        F.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        F.debug("sanitizing object", t), _n(e[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (F.debug("sanitizing css option", t), e[t] = ny(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    F.debug("After sanitization", e);
  }
}, "sanitizeDirective"), ny = /* @__PURE__ */ p((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), Or = Object.freeze(uh), Gt = St({}, Or), Sn, nr = [], Ci = St({}, Or), ia = /* @__PURE__ */ p((e, t) => {
  let r = St({}, e), i = {};
  for (const n of t)
    ph(n), i = St(i, n);
  if (r = St(r, i), i.theme && i.theme in Le) {
    const n = St({}, Sn), a = St(
      n.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in Le && (r.themeVariables = Le[r.theme].getThemeVariables(a));
  }
  return Ci = r, gh(Ci), Ci;
}, "updateCurrentConfig"), ay = /* @__PURE__ */ p((e) => (Gt = St({}, Or), Gt = St(Gt, e), e.theme && Le[e.theme] && (Gt.themeVariables = Le[e.theme].getThemeVariables(e.themeVariables)), ia(Gt, nr), Gt), "setSiteConfig"), sy = /* @__PURE__ */ p((e) => {
  Sn = St({}, e);
}, "saveConfigFromInitialize"), oy = /* @__PURE__ */ p((e) => (Gt = St(Gt, e), ia(Gt, nr), Gt), "updateSiteConfig"), fh = /* @__PURE__ */ p(() => St({}, Gt), "getSiteConfig"), dh = /* @__PURE__ */ p((e) => (gh(e), St(Ci, e), Dt()), "setConfig"), Dt = /* @__PURE__ */ p(() => St({}, Ci), "getConfig"), ph = /* @__PURE__ */ p((e) => {
  e && (["secure", ...Gt.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (F.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && ph(e[t]);
  }));
}, "sanitize"), ly = /* @__PURE__ */ p((e) => {
  _n(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), nr.push(e), ia(Gt, nr);
}, "addDirective"), Tn = /* @__PURE__ */ p((e = Gt) => {
  nr = [], ia(e, nr);
}, "reset"), cy = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, Tl = {}, hy = /* @__PURE__ */ p((e) => {
  Tl[e] || (F.warn(cy[e]), Tl[e] = !0);
}, "issueWarning"), gh = /* @__PURE__ */ p((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && hy("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), _B = /* @__PURE__ */ p(() => {
  let e = {};
  Sn && (e = St(e, Sn));
  for (const t of nr)
    e = St(e, t);
  return e;
}, "getUserDefinedConfig"), Di = /<br\s*\/?>/gi, uy = /* @__PURE__ */ p((e) => e ? xh(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), fy = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (mh(), e = !0);
  };
})();
function mh() {
  const e = "data-temp-href-target";
  Dr.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), Dr.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
p(mh, "setupDompurifyHooks");
var yh = /* @__PURE__ */ p((e) => (fy(), Dr.sanitize(e)), "removeScript"), Bl = /* @__PURE__ */ p((e, t) => {
  if (t.flowchart?.htmlLabels !== !1) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" ? e = yh(e) : r !== "loose" && (e = xh(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = my(e));
  }
  return e;
}, "sanitizeMore"), Jt = /* @__PURE__ */ p((e, t) => e && (t.dompurifyConfig ? e = Dr.sanitize(Bl(e, t), t.dompurifyConfig).toString() : e = Dr.sanitize(Bl(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), dy = /* @__PURE__ */ p((e, t) => typeof e == "string" ? Jt(e, t) : e.flat().map((r) => Jt(r, t)), "sanitizeTextOrArray"), py = /* @__PURE__ */ p((e) => Di.test(e), "hasBreaks"), gy = /* @__PURE__ */ p((e) => e.split(Di), "splitBreaks"), my = /* @__PURE__ */ p((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), xh = /* @__PURE__ */ p((e) => e.replace(Di, "#br#"), "breakToPlaceholder"), yy = /* @__PURE__ */ p((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), Bt = /* @__PURE__ */ p((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), xy = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), by = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), Al = /* @__PURE__ */ p(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let n = t[i];
    if (n === "," && i > 0 && i + 1 < t.length) {
      const a = t[i - 1], s = t[i + 1];
      Cy(a, s) && (n = a + "," + s, i++, r.pop());
    }
    r.push(wy(n));
  }
  return r.join("");
}, "parseGenericTypes"), ss = /* @__PURE__ */ p((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), Cy = /* @__PURE__ */ p((e, t) => {
  const r = ss(e, "~"), i = ss(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), wy = /* @__PURE__ */ p((e) => {
  const t = ss(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let n = i.indexOf("~"), a = i.lastIndexOf("~");
  for (; n !== -1 && a !== -1 && n !== a; )
    i[n] = "<", i[a] = ">", n = i.indexOf("~"), a = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), Ll = /* @__PURE__ */ p(() => window.MathMLElement !== void 0, "isMathMLSupported"), os = /\$\$(.*)\$\$/g, Rr = /* @__PURE__ */ p((e) => (e.match(os)?.length ?? 0) > 0, "hasKatex"), SB = /* @__PURE__ */ p(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await eo(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
  const n = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), n;
}, "calculateMathMLDimensions"), ky = /* @__PURE__ */ p(async (e, t) => {
  if (!Rr(e))
    return e;
  if (!(Ll() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(os, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex-DNob3HGn.js"), i = t.forceLegacyMathML || !Ll() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(Di).map(
      (n) => Rr(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`
    ).join("").replace(
      os,
      (n, a) => r.renderToString(a, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), eo = /* @__PURE__ */ p(async (e, t) => Jt(await ky(e, t), t), "renderKatexSanitized"), Hr = {
  getRows: uy,
  sanitizeText: Jt,
  sanitizeTextOrArray: dy,
  hasBreaks: py,
  splitBreaks: gy,
  lineBreakRegex: Di,
  removeScript: yh,
  getUrl: yy,
  evaluate: Bt,
  getMax: xy,
  getMin: by
}, vy = /* @__PURE__ */ p(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), _y = /* @__PURE__ */ p(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), bh = /* @__PURE__ */ p(function(e, t, r, i) {
  const n = _y(t, r, i);
  vy(e, n);
}, "configureSvgSize"), Sy = /* @__PURE__ */ p(function(e, t, r, i) {
  const n = t.node().getBBox(), a = n.width, s = n.height;
  F.info(`SVG bounds: ${a}x${s}`, n);
  let o = 0, l = 0;
  F.info(`Graph bounds: ${o}x${l}`, e), o = a + r * 2, l = s + r * 2, F.info(`Calculated bounds: ${o}x${l}`), bh(t, l, o, i);
  const c = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), un = {}, Ty = /* @__PURE__ */ p((e, t, r) => {
  let i = "";
  return e in un && un[e] ? i = un[e](r) : F.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${t}
`;
}, "getStyles"), By = /* @__PURE__ */ p((e, t) => {
  t !== void 0 && (un[e] = t);
}, "addStylesForDiagram"), Ay = Ty, Ch = {};
mm(Ch, {
  clear: () => Ly,
  getAccDescription: () => Fy,
  getAccTitle: () => Ey,
  getDiagramTitle: () => Oy,
  setAccDescription: () => $y,
  setAccTitle: () => My,
  setDiagramTitle: () => Dy
});
var ro = "", io = "", no = "", ao = /* @__PURE__ */ p((e) => Jt(e, Dt()), "sanitizeText"), Ly = /* @__PURE__ */ p(() => {
  ro = "", no = "", io = "";
}, "clear"), My = /* @__PURE__ */ p((e) => {
  ro = ao(e).replace(/^\s+/g, "");
}, "setAccTitle"), Ey = /* @__PURE__ */ p(() => ro, "getAccTitle"), $y = /* @__PURE__ */ p((e) => {
  no = ao(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), Fy = /* @__PURE__ */ p(() => no, "getAccDescription"), Dy = /* @__PURE__ */ p((e) => {
  io = ao(e);
}, "setDiagramTitle"), Oy = /* @__PURE__ */ p(() => io, "getDiagramTitle"), Ml = F, Ry = Js, ft = Dt, TB = dh, BB = Or, so = /* @__PURE__ */ p((e) => Jt(e, ft()), "sanitizeText"), Iy = Sy, Py = /* @__PURE__ */ p(() => Ch, "getCommonDb"), Bn = {}, An = /* @__PURE__ */ p((e, t, r) => {
  Bn[e] && Ml.warn(`Diagram with id ${e} already registered. Overwriting.`), Bn[e] = t, r && lh(e, r), By(e, t.styles), t.injectUtils?.(
    Ml,
    Ry,
    ft,
    so,
    Iy,
    Py(),
    () => {
    }
  );
}, "registerDiagram"), ls = /* @__PURE__ */ p((e) => {
  if (e in Bn)
    return Bn[e];
  throw new Ny(e);
}, "getDiagram"), $r, Ny = ($r = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, p($r, "DiagramNotFoundError"), $r), zy = { value: () => {
} };
function wh() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new fn(r);
}
function fn(e) {
  this._ = e;
}
function Wy(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", n = r.indexOf(".");
    if (n >= 0 && (i = r.slice(n + 1), r = r.slice(0, n)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
fn.prototype = wh.prototype = {
  constructor: fn,
  on: function(e, t) {
    var r = this._, i = Wy(e + "", r), n, a = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++a < s; ) if ((n = (e = i[a]).type) && (n = qy(r[n], e.name))) return n;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < s; )
      if (n = (e = i[a]).type) r[n] = El(r[n], e.name, t);
      else if (t == null) for (n in r) r[n] = El(r[n], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new fn(e);
  },
  call: function(e, t) {
    if ((n = arguments.length - 2) > 0) for (var r = new Array(n), i = 0, n, a; i < n; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], i = 0, n = a.length; i < n; ++i) a[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], n = 0, a = i.length; n < a; ++n) i[n].value.apply(t, r);
  }
};
function qy(e, t) {
  for (var r = 0, i = e.length, n; r < i; ++r)
    if ((n = e[r]).name === t)
      return n.value;
}
function El(e, t, r) {
  for (var i = 0, n = e.length; i < n; ++i)
    if (e[i].name === t) {
      e[i] = zy, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var cs = "http://www.w3.org/1999/xhtml";
const $l = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: cs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function na(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), $l.hasOwnProperty(t) ? { space: $l[t], local: e } : e;
}
function Hy(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === cs && t.documentElement.namespaceURI === cs ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function jy(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function kh(e) {
  var t = na(e);
  return (t.local ? jy : Hy)(t);
}
function Yy() {
}
function oo(e) {
  return e == null ? Yy : function() {
    return this.querySelector(e);
  };
}
function Uy(e) {
  typeof e != "function" && (e = oo(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], s = a.length, o = i[n] = new Array(s), l, c, h = 0; h < s; ++h)
      (l = a[h]) && (c = e.call(l, l.__data__, h, a)) && ("__data__" in l && (c.__data__ = l.__data__), o[h] = c);
  return new Zt(i, this._parents);
}
function Gy(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Xy() {
  return [];
}
function vh(e) {
  return e == null ? Xy : function() {
    return this.querySelectorAll(e);
  };
}
function Vy(e) {
  return function() {
    return Gy(e.apply(this, arguments));
  };
}
function Zy(e) {
  typeof e == "function" ? e = Vy(e) : e = vh(e);
  for (var t = this._groups, r = t.length, i = [], n = [], a = 0; a < r; ++a)
    for (var s = t[a], o = s.length, l, c = 0; c < o; ++c)
      (l = s[c]) && (i.push(e.call(l, l.__data__, c, s)), n.push(l));
  return new Zt(i, n);
}
function _h(e) {
  return function() {
    return this.matches(e);
  };
}
function Sh(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Ky = Array.prototype.find;
function Qy(e) {
  return function() {
    return Ky.call(this.children, e);
  };
}
function Jy() {
  return this.firstElementChild;
}
function t0(e) {
  return this.select(e == null ? Jy : Qy(typeof e == "function" ? e : Sh(e)));
}
var e0 = Array.prototype.filter;
function r0() {
  return Array.from(this.children);
}
function i0(e) {
  return function() {
    return e0.call(this.children, e);
  };
}
function n0(e) {
  return this.selectAll(e == null ? r0 : i0(typeof e == "function" ? e : Sh(e)));
}
function a0(e) {
  typeof e != "function" && (e = _h(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], s = a.length, o = i[n] = [], l, c = 0; c < s; ++c)
      (l = a[c]) && e.call(l, l.__data__, c, a) && o.push(l);
  return new Zt(i, this._parents);
}
function Th(e) {
  return new Array(e.length);
}
function s0() {
  return new Zt(this._enter || this._groups.map(Th), this._parents);
}
function Ln(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ln.prototype = {
  constructor: Ln,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function o0(e) {
  return function() {
    return e;
  };
}
function l0(e, t, r, i, n, a) {
  for (var s = 0, o, l = t.length, c = a.length; s < c; ++s)
    (o = t[s]) ? (o.__data__ = a[s], i[s] = o) : r[s] = new Ln(e, a[s]);
  for (; s < l; ++s)
    (o = t[s]) && (n[s] = o);
}
function c0(e, t, r, i, n, a, s) {
  var o, l, c = /* @__PURE__ */ new Map(), h = t.length, u = a.length, f = new Array(h), d;
  for (o = 0; o < h; ++o)
    (l = t[o]) && (f[o] = d = s.call(l, l.__data__, o, t) + "", c.has(d) ? n[o] = l : c.set(d, l));
  for (o = 0; o < u; ++o)
    d = s.call(e, a[o], o, a) + "", (l = c.get(d)) ? (i[o] = l, l.__data__ = a[o], c.delete(d)) : r[o] = new Ln(e, a[o]);
  for (o = 0; o < h; ++o)
    (l = t[o]) && c.get(f[o]) === l && (n[o] = l);
}
function h0(e) {
  return e.__data__;
}
function u0(e, t) {
  if (!arguments.length) return Array.from(this, h0);
  var r = t ? c0 : l0, i = this._parents, n = this._groups;
  typeof e != "function" && (e = o0(e));
  for (var a = n.length, s = new Array(a), o = new Array(a), l = new Array(a), c = 0; c < a; ++c) {
    var h = i[c], u = n[c], f = u.length, d = f0(e.call(h, h && h.__data__, c, i)), g = d.length, m = o[c] = new Array(g), y = s[c] = new Array(g), x = l[c] = new Array(f);
    r(h, u, m, y, x, d, t);
    for (var b = 0, C = 0, v, k; b < g; ++b)
      if (v = m[b]) {
        for (b >= C && (C = b + 1); !(k = y[C]) && ++C < g; ) ;
        v._next = k || null;
      }
  }
  return s = new Zt(s, i), s._enter = o, s._exit = l, s;
}
function f0(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function d0() {
  return new Zt(this._exit || this._groups.map(Th), this._parents);
}
function p0(e, t, r) {
  var i = this.enter(), n = this, a = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (n = t(n), n && (n = n.selection())), r == null ? a.remove() : r(a), i && n ? i.merge(n).order() : n;
}
function g0(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, n = r.length, a = i.length, s = Math.min(n, a), o = new Array(n), l = 0; l < s; ++l)
    for (var c = r[l], h = i[l], u = c.length, f = o[l] = new Array(u), d, g = 0; g < u; ++g)
      (d = c[g] || h[g]) && (f[g] = d);
  for (; l < n; ++l)
    o[l] = r[l];
  return new Zt(o, this._parents);
}
function m0() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], n = i.length - 1, a = i[n], s; --n >= 0; )
      (s = i[n]) && (a && s.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(s, a), a = s);
  return this;
}
function y0(e) {
  e || (e = x0);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var r = this._groups, i = r.length, n = new Array(i), a = 0; a < i; ++a) {
    for (var s = r[a], o = s.length, l = n[a] = new Array(o), c, h = 0; h < o; ++h)
      (c = s[h]) && (l[h] = c);
    l.sort(t);
  }
  return new Zt(n, this._parents).order();
}
function x0(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function b0() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function C0() {
  return Array.from(this);
}
function w0() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], n = 0, a = i.length; n < a; ++n) {
      var s = i[n];
      if (s) return s;
    }
  return null;
}
function k0() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function v0() {
  return !this.node();
}
function _0(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var n = t[r], a = 0, s = n.length, o; a < s; ++a)
      (o = n[a]) && e.call(o, o.__data__, a, n);
  return this;
}
function S0(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function T0(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function B0(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function A0(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function L0(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function M0(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function E0(e, t) {
  var r = na(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? T0 : S0 : typeof t == "function" ? r.local ? M0 : L0 : r.local ? A0 : B0)(r, t));
}
function Bh(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function $0(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function F0(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function D0(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function O0(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? $0 : typeof t == "function" ? D0 : F0)(e, t, r ?? "")) : Ir(this.node(), e);
}
function Ir(e, t) {
  return e.style.getPropertyValue(t) || Bh(e).getComputedStyle(e, null).getPropertyValue(t);
}
function R0(e) {
  return function() {
    delete this[e];
  };
}
function I0(e, t) {
  return function() {
    this[e] = t;
  };
}
function P0(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function N0(e, t) {
  return arguments.length > 1 ? this.each((t == null ? R0 : typeof t == "function" ? P0 : I0)(e, t)) : this.node()[e];
}
function Ah(e) {
  return e.trim().split(/^|\s+/);
}
function lo(e) {
  return e.classList || new Lh(e);
}
function Lh(e) {
  this._node = e, this._names = Ah(e.getAttribute("class") || "");
}
Lh.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Mh(e, t) {
  for (var r = lo(e), i = -1, n = t.length; ++i < n; ) r.add(t[i]);
}
function Eh(e, t) {
  for (var r = lo(e), i = -1, n = t.length; ++i < n; ) r.remove(t[i]);
}
function z0(e) {
  return function() {
    Mh(this, e);
  };
}
function W0(e) {
  return function() {
    Eh(this, e);
  };
}
function q0(e, t) {
  return function() {
    (t.apply(this, arguments) ? Mh : Eh)(this, e);
  };
}
function H0(e, t) {
  var r = Ah(e + "");
  if (arguments.length < 2) {
    for (var i = lo(this.node()), n = -1, a = r.length; ++n < a; ) if (!i.contains(r[n])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? q0 : t ? z0 : W0)(r, t));
}
function j0() {
  this.textContent = "";
}
function Y0(e) {
  return function() {
    this.textContent = e;
  };
}
function U0(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function G0(e) {
  return arguments.length ? this.each(e == null ? j0 : (typeof e == "function" ? U0 : Y0)(e)) : this.node().textContent;
}
function X0() {
  this.innerHTML = "";
}
function V0(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Z0(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function K0(e) {
  return arguments.length ? this.each(e == null ? X0 : (typeof e == "function" ? Z0 : V0)(e)) : this.node().innerHTML;
}
function Q0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function J0() {
  return this.each(Q0);
}
function tx() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ex() {
  return this.each(tx);
}
function rx(e) {
  var t = typeof e == "function" ? e : kh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ix() {
  return null;
}
function nx(e, t) {
  var r = typeof e == "function" ? e : kh(e), i = t == null ? ix : typeof t == "function" ? t : oo(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function ax() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function sx() {
  return this.each(ax);
}
function ox() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function lx() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function cx(e) {
  return this.select(e ? lx : ox);
}
function hx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ux(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function fx(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function dx(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, n = t.length, a; r < n; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++i] = a;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function px(e, t, r) {
  return function() {
    var i = this.__on, n, a = ux(t);
    if (i) {
      for (var s = 0, o = i.length; s < o; ++s)
        if ((n = i[s]).type === e.type && n.name === e.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = a, n.options = r), n.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, r), n = { type: e.type, name: e.name, value: t, listener: a, options: r }, i ? i.push(n) : this.__on = [n];
  };
}
function gx(e, t, r) {
  var i = fx(e + ""), n, a = i.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var l = 0, c = o.length, h; l < c; ++l)
        for (n = 0, h = o[l]; n < a; ++n)
          if ((s = i[n]).type === h.type && s.name === h.name)
            return h.value;
    }
    return;
  }
  for (o = t ? px : dx, n = 0; n < a; ++n) this.each(o(i[n], t, r));
  return this;
}
function $h(e, t, r) {
  var i = Bh(e), n = i.CustomEvent;
  typeof n == "function" ? n = new n(t, r) : (n = i.document.createEvent("Event"), r ? (n.initEvent(t, r.bubbles, r.cancelable), n.detail = r.detail) : n.initEvent(t, !1, !1)), e.dispatchEvent(n);
}
function mx(e, t) {
  return function() {
    return $h(this, e, t);
  };
}
function yx(e, t) {
  return function() {
    return $h(this, e, t.apply(this, arguments));
  };
}
function xx(e, t) {
  return this.each((typeof t == "function" ? yx : mx)(e, t));
}
function* bx() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], n = 0, a = i.length, s; n < a; ++n)
      (s = i[n]) && (yield s);
}
var Fh = [null];
function Zt(e, t) {
  this._groups = e, this._parents = t;
}
function Oi() {
  return new Zt([[document.documentElement]], Fh);
}
function Cx() {
  return this;
}
Zt.prototype = Oi.prototype = {
  constructor: Zt,
  select: Uy,
  selectAll: Zy,
  selectChild: t0,
  selectChildren: n0,
  filter: a0,
  data: u0,
  enter: s0,
  exit: d0,
  join: p0,
  merge: g0,
  selection: Cx,
  order: m0,
  sort: y0,
  call: b0,
  nodes: C0,
  node: w0,
  size: k0,
  empty: v0,
  each: _0,
  attr: E0,
  style: O0,
  property: N0,
  classed: H0,
  text: G0,
  html: K0,
  raise: J0,
  lower: ex,
  append: rx,
  insert: nx,
  remove: sx,
  clone: cx,
  datum: hx,
  on: gx,
  dispatch: xx,
  [Symbol.iterator]: bx
};
function ht(e) {
  return typeof e == "string" ? new Zt([[document.querySelector(e)]], [document.documentElement]) : new Zt([[e]], Fh);
}
var Pr = 0, ci = 0, ri = 0, Dh = 1e3, Mn, hi, En = 0, ar = 0, aa = 0, vi = typeof performance == "object" && performance.now ? performance : Date, Oh = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function co() {
  return ar || (Oh(wx), ar = vi.now() + aa);
}
function wx() {
  ar = 0;
}
function $n() {
  this._call = this._time = this._next = null;
}
$n.prototype = Rh.prototype = {
  constructor: $n,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? co() : +r) + (t == null ? 0 : +t), !this._next && hi !== this && (hi ? hi._next = this : Mn = this, hi = this), this._call = e, this._time = r, hs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, hs());
  }
};
function Rh(e, t, r) {
  var i = new $n();
  return i.restart(e, t, r), i;
}
function kx() {
  co(), ++Pr;
  for (var e = Mn, t; e; )
    (t = ar - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Pr;
}
function Fl() {
  ar = (En = vi.now()) + aa, Pr = ci = 0;
  try {
    kx();
  } finally {
    Pr = 0, _x(), ar = 0;
  }
}
function vx() {
  var e = vi.now(), t = e - En;
  t > Dh && (aa -= t, En = e);
}
function _x() {
  for (var e, t = Mn, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Mn = r);
  hi = e, hs(i);
}
function hs(e) {
  if (!Pr) {
    ci && (ci = clearTimeout(ci));
    var t = e - ar;
    t > 24 ? (e < 1 / 0 && (ci = setTimeout(Fl, e - vi.now() - aa)), ri && (ri = clearInterval(ri))) : (ri || (En = vi.now(), ri = setInterval(vx, Dh)), Pr = 1, Oh(Fl));
  }
}
function Dl(e, t, r) {
  var i = new $n();
  return t = t == null ? 0 : +t, i.restart((n) => {
    i.stop(), e(n + t);
  }, t, r), i;
}
var Sx = wh("start", "end", "cancel", "interrupt"), Tx = [], Ih = 0, Ol = 1, us = 2, dn = 3, Rl = 4, fs = 5, pn = 6;
function sa(e, t, r, i, n, a) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (r in s) return;
  Bx(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: n,
    // For context during callback.
    on: Sx,
    tween: Tx,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ih
  });
}
function ho(e, t) {
  var r = he(e, t);
  if (r.state > Ih) throw new Error("too late; already scheduled");
  return r;
}
function Ce(e, t) {
  var r = he(e, t);
  if (r.state > dn) throw new Error("too late; already running");
  return r;
}
function he(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function Bx(e, t, r) {
  var i = e.__transition, n;
  i[t] = r, r.timer = Rh(a, 0, r.time);
  function a(c) {
    r.state = Ol, r.timer.restart(s, r.delay, r.time), r.delay <= c && s(c - r.delay);
  }
  function s(c) {
    var h, u, f, d;
    if (r.state !== Ol) return l();
    for (h in i)
      if (d = i[h], d.name === r.name) {
        if (d.state === dn) return Dl(s);
        d.state === Rl ? (d.state = pn, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete i[h]) : +h < t && (d.state = pn, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete i[h]);
      }
    if (Dl(function() {
      r.state === dn && (r.state = Rl, r.timer.restart(o, r.delay, r.time), o(c));
    }), r.state = us, r.on.call("start", e, e.__data__, r.index, r.group), r.state === us) {
      for (r.state = dn, n = new Array(f = r.tween.length), h = 0, u = -1; h < f; ++h)
        (d = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (n[++u] = d);
      n.length = u + 1;
    }
  }
  function o(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = fs, 1), u = -1, f = n.length; ++u < f; )
      n[u].call(e, h);
    r.state === fs && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = pn, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function Ax(e, t) {
  var r = e.__transition, i, n, a = !0, s;
  if (r) {
    t = t == null ? null : t + "";
    for (s in r) {
      if ((i = r[s]).name !== t) {
        a = !1;
        continue;
      }
      n = i.state > us && i.state < fs, i.state = pn, i.timer.stop(), i.on.call(n ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[s];
    }
    a && delete e.__transition;
  }
}
function Lx(e) {
  return this.each(function() {
    Ax(this, e);
  });
}
function Mx(e, t) {
  var r, i;
  return function() {
    var n = Ce(this, e), a = n.tween;
    if (a !== r) {
      i = r = a;
      for (var s = 0, o = i.length; s < o; ++s)
        if (i[s].name === t) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    n.tween = i;
  };
}
function Ex(e, t, r) {
  var i, n;
  if (typeof r != "function") throw new Error();
  return function() {
    var a = Ce(this, e), s = a.tween;
    if (s !== i) {
      n = (i = s).slice();
      for (var o = { name: t, value: r }, l = 0, c = n.length; l < c; ++l)
        if (n[l].name === t) {
          n[l] = o;
          break;
        }
      l === c && n.push(o);
    }
    a.tween = n;
  };
}
function $x(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = he(this.node(), r).tween, n = 0, a = i.length, s; n < a; ++n)
      if ((s = i[n]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Mx : Ex)(r, e, t));
}
function uo(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var n = Ce(this, i);
    (n.value || (n.value = {}))[t] = r.apply(this, arguments);
  }), function(n) {
    return he(n, i).value[t];
  };
}
function Ph(e, t) {
  var r;
  return (typeof t == "number" ? Ve : t instanceof dl ? pl : (r = dl(t)) ? (t = r, pl) : Qg)(e, t);
}
function Fx(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Dx(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ox(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var s = this.getAttribute(e);
    return s === n ? null : s === i ? a : a = t(i = s, r);
  };
}
function Rx(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === n ? null : s === i ? a : a = t(i = s, r);
  };
}
function Ix(e, t, r) {
  var i, n, a;
  return function() {
    var s, o = r(this), l;
    return o == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = o + "", s === l ? null : s === i && l === n ? a : (n = l, a = t(i = s, o)));
  };
}
function Px(e, t, r) {
  var i, n, a;
  return function() {
    var s, o = r(this), l;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = o + "", s === l ? null : s === i && l === n ? a : (n = l, a = t(i = s, o)));
  };
}
function Nx(e, t) {
  var r = na(e), i = r === "transform" ? um : Ph;
  return this.attrTween(e, typeof t == "function" ? (r.local ? Px : Ix)(r, i, uo(this, "attr." + e, t)) : t == null ? (r.local ? Dx : Fx)(r) : (r.local ? Rx : Ox)(r, i, t));
}
function zx(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function Wx(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function qx(e, t) {
  var r, i;
  function n() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && Wx(e, a)), r;
  }
  return n._value = t, n;
}
function Hx(e, t) {
  var r, i;
  function n() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && zx(e, a)), r;
  }
  return n._value = t, n;
}
function jx(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = na(e);
  return this.tween(r, (i.local ? qx : Hx)(i, t));
}
function Yx(e, t) {
  return function() {
    ho(this, e).delay = +t.apply(this, arguments);
  };
}
function Ux(e, t) {
  return t = +t, function() {
    ho(this, e).delay = t;
  };
}
function Gx(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Yx : Ux)(t, e)) : he(this.node(), t).delay;
}
function Xx(e, t) {
  return function() {
    Ce(this, e).duration = +t.apply(this, arguments);
  };
}
function Vx(e, t) {
  return t = +t, function() {
    Ce(this, e).duration = t;
  };
}
function Zx(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xx : Vx)(t, e)) : he(this.node(), t).duration;
}
function Kx(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ce(this, e).ease = t;
  };
}
function Qx(e) {
  var t = this._id;
  return arguments.length ? this.each(Kx(t, e)) : he(this.node(), t).ease;
}
function Jx(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Ce(this, e).ease = r;
  };
}
function tb(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Jx(this._id, e));
}
function eb(e) {
  typeof e != "function" && (e = _h(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], s = a.length, o = i[n] = [], l, c = 0; c < s; ++c)
      (l = a[c]) && e.call(l, l.__data__, c, a) && o.push(l);
  return new Ee(i, this._parents, this._name, this._id);
}
function rb(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, n = r.length, a = Math.min(i, n), s = new Array(i), o = 0; o < a; ++o)
    for (var l = t[o], c = r[o], h = l.length, u = s[o] = new Array(h), f, d = 0; d < h; ++d)
      (f = l[d] || c[d]) && (u[d] = f);
  for (; o < i; ++o)
    s[o] = t[o];
  return new Ee(s, this._parents, this._name, this._id);
}
function ib(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function nb(e, t, r) {
  var i, n, a = ib(t) ? ho : Ce;
  return function() {
    var s = a(this, e), o = s.on;
    o !== i && (n = (i = o).copy()).on(t, r), s.on = n;
  };
}
function ab(e, t) {
  var r = this._id;
  return arguments.length < 2 ? he(this.node(), r).on.on(e) : this.each(nb(r, e, t));
}
function sb(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function ob() {
  return this.on("end.remove", sb(this._id));
}
function lb(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = oo(e));
  for (var i = this._groups, n = i.length, a = new Array(n), s = 0; s < n; ++s)
    for (var o = i[s], l = o.length, c = a[s] = new Array(l), h, u, f = 0; f < l; ++f)
      (h = o[f]) && (u = e.call(h, h.__data__, f, o)) && ("__data__" in h && (u.__data__ = h.__data__), c[f] = u, sa(c[f], t, r, f, c, he(h, r)));
  return new Ee(a, this._parents, t, r);
}
function cb(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = vh(e));
  for (var i = this._groups, n = i.length, a = [], s = [], o = 0; o < n; ++o)
    for (var l = i[o], c = l.length, h, u = 0; u < c; ++u)
      if (h = l[u]) {
        for (var f = e.call(h, h.__data__, u, l), d, g = he(h, r), m = 0, y = f.length; m < y; ++m)
          (d = f[m]) && sa(d, t, r, m, f, g);
        a.push(f), s.push(h);
      }
  return new Ee(a, s, t, r);
}
var hb = Oi.prototype.constructor;
function ub() {
  return new hb(this._groups, this._parents);
}
function fb(e, t) {
  var r, i, n;
  return function() {
    var a = Ir(this, e), s = (this.style.removeProperty(e), Ir(this, e));
    return a === s ? null : a === r && s === i ? n : n = t(r = a, i = s);
  };
}
function Nh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function db(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var s = Ir(this, e);
    return s === n ? null : s === i ? a : a = t(i = s, r);
  };
}
function pb(e, t, r) {
  var i, n, a;
  return function() {
    var s = Ir(this, e), o = r(this), l = o + "";
    return o == null && (l = o = (this.style.removeProperty(e), Ir(this, e))), s === l ? null : s === i && l === n ? a : (n = l, a = t(i = s, o));
  };
}
function gb(e, t) {
  var r, i, n, a = "style." + t, s = "end." + a, o;
  return function() {
    var l = Ce(this, e), c = l.on, h = l.value[a] == null ? o || (o = Nh(t)) : void 0;
    (c !== r || n !== h) && (i = (r = c).copy()).on(s, n = h), l.on = i;
  };
}
function mb(e, t, r) {
  var i = (e += "") == "transform" ? hm : Ph;
  return t == null ? this.styleTween(e, fb(e, i)).on("end.style." + e, Nh(e)) : typeof t == "function" ? this.styleTween(e, pb(e, i, uo(this, "style." + e, t))).each(gb(this._id, e)) : this.styleTween(e, db(e, i, t), r).on("end.style." + e, null);
}
function yb(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function xb(e, t, r) {
  var i, n;
  function a() {
    var s = t.apply(this, arguments);
    return s !== n && (i = (n = s) && yb(e, s, r)), i;
  }
  return a._value = t, a;
}
function bb(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, xb(e, t, r ?? ""));
}
function Cb(e) {
  return function() {
    this.textContent = e;
  };
}
function wb(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function kb(e) {
  return this.tween("text", typeof e == "function" ? wb(uo(this, "text", e)) : Cb(e == null ? "" : e + ""));
}
function vb(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function _b(e) {
  var t, r;
  function i() {
    var n = e.apply(this, arguments);
    return n !== r && (t = (r = n) && vb(n)), t;
  }
  return i._value = e, i;
}
function Sb(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, _b(e));
}
function Tb() {
  for (var e = this._name, t = this._id, r = zh(), i = this._groups, n = i.length, a = 0; a < n; ++a)
    for (var s = i[a], o = s.length, l, c = 0; c < o; ++c)
      if (l = s[c]) {
        var h = he(l, t);
        sa(l, e, r, c, s, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Ee(i, this._parents, e, r);
}
function Bb() {
  var e, t, r = this, i = r._id, n = r.size();
  return new Promise(function(a, s) {
    var o = { value: s }, l = { value: function() {
      --n === 0 && a();
    } };
    r.each(function() {
      var c = Ce(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(l)), c.on = t;
    }), n === 0 && a();
  });
}
var Ab = 0;
function Ee(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function zh() {
  return ++Ab;
}
var Te = Oi.prototype;
Ee.prototype = {
  constructor: Ee,
  select: lb,
  selectAll: cb,
  selectChild: Te.selectChild,
  selectChildren: Te.selectChildren,
  filter: eb,
  merge: rb,
  selection: ub,
  transition: Tb,
  call: Te.call,
  nodes: Te.nodes,
  node: Te.node,
  size: Te.size,
  empty: Te.empty,
  each: Te.each,
  on: ab,
  attr: Nx,
  attrTween: jx,
  style: mb,
  styleTween: bb,
  text: kb,
  textTween: Sb,
  remove: ob,
  tween: $x,
  delay: Gx,
  duration: Zx,
  ease: Qx,
  easeVarying: tb,
  end: Bb,
  [Symbol.iterator]: Te[Symbol.iterator]
};
function Lb(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Mb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lb
};
function Eb(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function $b(e) {
  var t, r;
  e instanceof Ee ? (t = e._id, e = e._name) : (t = zh(), (r = Mb).time = co(), e = e == null ? null : e + "");
  for (var i = this._groups, n = i.length, a = 0; a < n; ++a)
    for (var s = i[a], o = s.length, l, c = 0; c < o; ++c)
      (l = s[c]) && sa(l, e, t, c, s, r || Eb(l, t));
  return new Ee(i, this._parents, e, t);
}
Oi.prototype.interrupt = Lx;
Oi.prototype.transition = $b;
function ui(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
ui.prototype = {
  constructor: ui,
  scale: function(e) {
    return e === 1 ? this : new ui(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ui(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
ui.prototype;
var Fb = /* @__PURE__ */ p((e) => {
  const { securityLevel: t } = ft();
  let r = ht("body");
  if (t === "sandbox") {
    const a = ht(`#i${e}`).node()?.contentDocument ?? document;
    r = ht(a.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement");
function fo(e) {
  return typeof e > "u" || e === null;
}
p(fo, "isNothing");
function Wh(e) {
  return typeof e == "object" && e !== null;
}
p(Wh, "isObject");
function qh(e) {
  return Array.isArray(e) ? e : fo(e) ? [] : [e];
}
p(qh, "toArray");
function Hh(e, t) {
  var r, i, n, a;
  if (t)
    for (a = Object.keys(t), r = 0, i = a.length; r < i; r += 1)
      n = a[r], e[n] = t[n];
  return e;
}
p(Hh, "extend");
function jh(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
p(jh, "repeat");
function Yh(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
p(Yh, "isNegativeZero");
var Db = fo, Ob = Wh, Rb = qh, Ib = jh, Pb = Yh, Nb = Hh, Tt = {
  isNothing: Db,
  isObject: Ob,
  toArray: Rb,
  repeat: Ib,
  isNegativeZero: Pb,
  extend: Nb
};
function po(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
p(po, "formatError");
function Nr(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = po(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
p(Nr, "YAMLException$1");
Nr.prototype = Object.create(Error.prototype);
Nr.prototype.constructor = Nr;
Nr.prototype.toString = /* @__PURE__ */ p(function(t) {
  return this.name + ": " + po(this, t);
}, "toString");
var Xt = Nr;
function gn(e, t, r, i, n) {
  var a = "", s = "", o = Math.floor(n / 2) - 1;
  return i - t > o && (a = " ... ", t = i - o + a.length), r - i > o && (s = " ...", r = i + o - s.length), {
    str: a + e.slice(t, r).replace(/\t/g, "→") + s,
    pos: i - t + a.length
    // relative position
  };
}
p(gn, "getLine");
function mn(e, t) {
  return Tt.repeat(" ", t - e.length) + e;
}
p(mn, "padStart");
function Uh(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], n = [], a, s = -1; a = r.exec(e.buffer); )
    n.push(a.index), i.push(a.index + a[0].length), e.position <= a.index && s < 0 && (s = i.length - 2);
  s < 0 && (s = i.length - 1);
  var o = "", l, c, h = Math.min(e.line + t.linesAfter, n.length).toString().length, u = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(s - l < 0); l++)
    c = gn(
      e.buffer,
      i[s - l],
      n[s - l],
      e.position - (i[s] - i[s - l]),
      u
    ), o = Tt.repeat(" ", t.indent) + mn((e.line - l + 1).toString(), h) + " | " + c.str + `
` + o;
  for (c = gn(e.buffer, i[s], n[s], e.position, u), o += Tt.repeat(" ", t.indent) + mn((e.line + 1).toString(), h) + " | " + c.str + `
`, o += Tt.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(s + l >= n.length); l++)
    c = gn(
      e.buffer,
      i[s + l],
      n[s + l],
      e.position - (i[s] - i[s + l]),
      u
    ), o += Tt.repeat(" ", t.indent) + mn((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return o.replace(/\n$/, "");
}
p(Uh, "makeSnippet");
var zb = Uh, Wb = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], qb = [
  "scalar",
  "sequence",
  "mapping"
];
function Gh(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
p(Gh, "compileStyleAliases");
function Xh(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (Wb.indexOf(r) === -1)
      throw new Xt('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = Gh(t.styleAliases || null), qb.indexOf(this.kind) === -1)
    throw new Xt('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
p(Xh, "Type$1");
var Ot = Xh;
function ds(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var n = r.length;
    r.forEach(function(a, s) {
      a.tag === i.tag && a.kind === i.kind && a.multi === i.multi && (n = s);
    }), r[n] = i;
  }), r;
}
p(ds, "compileList");
function Vh() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(n) {
    n.multi ? (e.multi[n.kind].push(n), e.multi.fallback.push(n)) : e[n.kind][n.tag] = e.fallback[n.tag] = n;
  }
  for (p(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
p(Vh, "compileMap");
function Fn(e) {
  return this.extend(e);
}
p(Fn, "Schema$1");
Fn.prototype.extend = /* @__PURE__ */ p(function(t) {
  var r = [], i = [];
  if (t instanceof Ot)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new Xt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(a) {
    if (!(a instanceof Ot))
      throw new Xt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (a.loadKind && a.loadKind !== "scalar")
      throw new Xt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (a.multi)
      throw new Xt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(a) {
    if (!(a instanceof Ot))
      throw new Xt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Fn.prototype);
  return n.implicit = (this.implicit || []).concat(r), n.explicit = (this.explicit || []).concat(i), n.compiledImplicit = ds(n, "implicit"), n.compiledExplicit = ds(n, "explicit"), n.compiledTypeMap = Vh(n.compiledImplicit, n.compiledExplicit), n;
}, "extend");
var Hb = Fn, jb = new Ot("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), Yb = new Ot("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), Ub = new Ot("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), Gb = new Hb({
  explicit: [
    jb,
    Yb,
    Ub
  ]
});
function Zh(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
p(Zh, "resolveYamlNull");
function Kh() {
  return null;
}
p(Kh, "constructYamlNull");
function Qh(e) {
  return e === null;
}
p(Qh, "isNull");
var Xb = new Ot("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Zh,
  construct: Kh,
  predicate: Qh,
  represent: {
    canonical: /* @__PURE__ */ p(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ p(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ p(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function Jh(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
p(Jh, "resolveYamlBoolean");
function tu(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
p(tu, "constructYamlBoolean");
function eu(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
p(eu, "isBoolean");
var Vb = new Ot("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Jh,
  construct: tu,
  predicate: eu,
  represent: {
    lowercase: /* @__PURE__ */ p(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function ru(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
p(ru, "isHexCode");
function iu(e) {
  return 48 <= e && e <= 55;
}
p(iu, "isOctCode");
function nu(e) {
  return 48 <= e && e <= 57;
}
p(nu, "isDecCode");
function au(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, n;
  if (!t) return !1;
  if (n = e[r], (n === "-" || n === "+") && (n = e[++r]), n === "0") {
    if (r + 1 === t) return !0;
    if (n = e[++r], n === "b") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (n !== "0" && n !== "1") return !1;
          i = !0;
        }
      return i && n !== "_";
    }
    if (n === "x") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (!ru(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && n !== "_";
    }
    if (n === "o") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (!iu(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && n !== "_";
    }
  }
  if (n === "_") return !1;
  for (; r < t; r++)
    if (n = e[r], n !== "_") {
      if (!nu(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || n === "_");
}
p(au, "resolveYamlInteger");
function su(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
p(su, "constructYamlInteger");
function ou(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Tt.isNegativeZero(e);
}
p(ou, "isInteger");
var Zb = new Ot("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: au,
  construct: su,
  predicate: ou,
  represent: {
    binary: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ p(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), Kb = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function lu(e) {
  return !(e === null || !Kb.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
p(lu, "resolveYamlFloat");
function cu(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
p(cu, "constructYamlFloat");
var Qb = /^[-+]?[0-9]+e/;
function hu(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Tt.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), Qb.test(r) ? r.replace("e", ".e") : r;
}
p(hu, "representYamlFloat");
function uu(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Tt.isNegativeZero(e));
}
p(uu, "isFloat");
var Jb = new Ot("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: lu,
  construct: cu,
  predicate: uu,
  represent: hu,
  defaultStyle: "lowercase"
}), fu = Gb.extend({
  implicit: [
    Xb,
    Vb,
    Zb,
    Jb
  ]
}), t1 = fu, du = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), pu = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function gu(e) {
  return e === null ? !1 : du.exec(e) !== null || pu.exec(e) !== null;
}
p(gu, "resolveYamlTimestamp");
function mu(e) {
  var t, r, i, n, a, s, o, l = 0, c = null, h, u, f;
  if (t = du.exec(e), t === null && (t = pu.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, n = +t[3], !t[4])
    return new Date(Date.UTC(r, i, n));
  if (a = +t[4], s = +t[5], o = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], u = +(t[11] || 0), c = (h * 60 + u) * 6e4, t[9] === "-" && (c = -c)), f = new Date(Date.UTC(r, i, n, a, s, o, l)), c && f.setTime(f.getTime() - c), f;
}
p(mu, "constructYamlTimestamp");
function yu(e) {
  return e.toISOString();
}
p(yu, "representYamlTimestamp");
var e1 = new Ot("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: gu,
  construct: mu,
  instanceOf: Date,
  represent: yu
});
function xu(e) {
  return e === "<<" || e === null;
}
p(xu, "resolveYamlMerge");
var r1 = new Ot("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: xu
}), go = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function bu(e) {
  if (e === null) return !1;
  var t, r, i = 0, n = e.length, a = go;
  for (r = 0; r < n; r++)
    if (t = a.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
p(bu, "resolveYamlBinary");
function Cu(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), n = i.length, a = go, s = 0, o = [];
  for (t = 0; t < n; t++)
    t % 4 === 0 && t && (o.push(s >> 16 & 255), o.push(s >> 8 & 255), o.push(s & 255)), s = s << 6 | a.indexOf(i.charAt(t));
  return r = n % 4 * 6, r === 0 ? (o.push(s >> 16 & 255), o.push(s >> 8 & 255), o.push(s & 255)) : r === 18 ? (o.push(s >> 10 & 255), o.push(s >> 2 & 255)) : r === 12 && o.push(s >> 4 & 255), new Uint8Array(o);
}
p(Cu, "constructYamlBinary");
function wu(e) {
  var t = "", r = 0, i, n, a = e.length, s = go;
  for (i = 0; i < a; i++)
    i % 3 === 0 && i && (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]), r = (r << 8) + e[i];
  return n = a % 3, n === 0 ? (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]) : n === 2 ? (t += s[r >> 10 & 63], t += s[r >> 4 & 63], t += s[r << 2 & 63], t += s[64]) : n === 1 && (t += s[r >> 2 & 63], t += s[r << 4 & 63], t += s[64], t += s[64]), t;
}
p(wu, "representYamlBinary");
function ku(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
p(ku, "isBinary");
var i1 = new Ot("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: bu,
  construct: Cu,
  predicate: ku,
  represent: wu
}), n1 = Object.prototype.hasOwnProperty, a1 = Object.prototype.toString;
function vu(e) {
  if (e === null) return !0;
  var t = [], r, i, n, a, s, o = e;
  for (r = 0, i = o.length; r < i; r += 1) {
    if (n = o[r], s = !1, a1.call(n) !== "[object Object]") return !1;
    for (a in n)
      if (n1.call(n, a))
        if (!s) s = !0;
        else return !1;
    if (!s) return !1;
    if (t.indexOf(a) === -1) t.push(a);
    else return !1;
  }
  return !0;
}
p(vu, "resolveYamlOmap");
function _u(e) {
  return e !== null ? e : [];
}
p(_u, "constructYamlOmap");
var s1 = new Ot("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: vu,
  construct: _u
}), o1 = Object.prototype.toString;
function Su(e) {
  if (e === null) return !0;
  var t, r, i, n, a, s = e;
  for (a = new Array(s.length), t = 0, r = s.length; t < r; t += 1) {
    if (i = s[t], o1.call(i) !== "[object Object]" || (n = Object.keys(i), n.length !== 1)) return !1;
    a[t] = [n[0], i[n[0]]];
  }
  return !0;
}
p(Su, "resolveYamlPairs");
function Tu(e) {
  if (e === null) return [];
  var t, r, i, n, a, s = e;
  for (a = new Array(s.length), t = 0, r = s.length; t < r; t += 1)
    i = s[t], n = Object.keys(i), a[t] = [n[0], i[n[0]]];
  return a;
}
p(Tu, "constructYamlPairs");
var l1 = new Ot("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Su,
  construct: Tu
}), c1 = Object.prototype.hasOwnProperty;
function Bu(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (c1.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
p(Bu, "resolveYamlSet");
function Au(e) {
  return e !== null ? e : {};
}
p(Au, "constructYamlSet");
var h1 = new Ot("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Bu,
  construct: Au
}), Lu = t1.extend({
  implicit: [
    e1,
    r1
  ],
  explicit: [
    i1,
    s1,
    l1,
    h1
  ]
}), Ne = Object.prototype.hasOwnProperty, Dn = 1, Mu = 2, Eu = 3, On = 4, Wa = 1, u1 = 2, Il = 3, f1 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, d1 = /[\x85\u2028\u2029]/, p1 = /[,\[\]\{\}]/, $u = /^(?:!|!!|![a-z\-]+!)$/i, Fu = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function ps(e) {
  return Object.prototype.toString.call(e);
}
p(ps, "_class");
function le(e) {
  return e === 10 || e === 13;
}
p(le, "is_EOL");
function Pe(e) {
  return e === 9 || e === 32;
}
p(Pe, "is_WHITE_SPACE");
function Wt(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
p(Wt, "is_WS_OR_EOL");
function Je(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
p(Je, "is_FLOW_INDICATOR");
function Du(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
p(Du, "fromHexCode");
function Ou(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
p(Ou, "escapedHexLen");
function Ru(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
p(Ru, "fromDecimalCode");
function gs(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
p(gs, "simpleEscapeSequence");
function Iu(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
p(Iu, "charFromCodepoint");
var Pu = new Array(256), Nu = new Array(256);
for (Xe = 0; Xe < 256; Xe++)
  Pu[Xe] = gs(Xe) ? 1 : 0, Nu[Xe] = gs(Xe);
var Xe;
function zu(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Lu, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
p(zu, "State$1");
function mo(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = zb(r), new Xt(t, r);
}
p(mo, "generateError");
function Q(e, t) {
  throw mo(e, t);
}
p(Q, "throwError");
function _i(e, t) {
  e.onWarning && e.onWarning.call(null, mo(e, t));
}
p(_i, "throwWarning");
var Pl = {
  YAML: /* @__PURE__ */ p(function(t, r, i) {
    var n, a, s;
    t.version !== null && Q(t, "duplication of %YAML directive"), i.length !== 1 && Q(t, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), n === null && Q(t, "ill-formed argument of the YAML directive"), a = parseInt(n[1], 10), s = parseInt(n[2], 10), a !== 1 && Q(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = s < 2, s !== 1 && s !== 2 && _i(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ p(function(t, r, i) {
    var n, a;
    i.length !== 2 && Q(t, "TAG directive accepts exactly two arguments"), n = i[0], a = i[1], $u.test(n) || Q(t, "ill-formed tag handle (first argument) of the TAG directive"), Ne.call(t.tagMap, n) && Q(t, 'there is a previously declared suffix for "' + n + '" tag handle'), Fu.test(a) || Q(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      a = decodeURIComponent(a);
    } catch {
      Q(t, "tag prefix is malformed: " + a);
    }
    t.tagMap[n] = a;
  }, "handleTagDirective")
};
function Me(e, t, r, i) {
  var n, a, s, o;
  if (t < r) {
    if (o = e.input.slice(t, r), i)
      for (n = 0, a = o.length; n < a; n += 1)
        s = o.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || Q(e, "expected valid JSON character");
    else f1.test(o) && Q(e, "the stream contains non-printable characters");
    e.result += o;
  }
}
p(Me, "captureSegment");
function ms(e, t, r, i) {
  var n, a, s, o;
  for (Tt.isObject(r) || Q(e, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(r), s = 0, o = n.length; s < o; s += 1)
    a = n[s], Ne.call(t, a) || (t[a] = r[a], i[a] = !0);
}
p(ms, "mergeMappings");
function tr(e, t, r, i, n, a, s, o, l) {
  var c, h;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), c = 0, h = n.length; c < h; c += 1)
      Array.isArray(n[c]) && Q(e, "nested arrays are not supported inside keys"), typeof n == "object" && ps(n[c]) === "[object Object]" && (n[c] = "[object Object]");
  if (typeof n == "object" && ps(n) === "[object Object]" && (n = "[object Object]"), n = String(n), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(a))
      for (c = 0, h = a.length; c < h; c += 1)
        ms(e, t, a[c], r);
    else
      ms(e, t, a, r);
  else
    !e.json && !Ne.call(r, n) && Ne.call(t, n) && (e.line = s || e.line, e.lineStart = o || e.lineStart, e.position = l || e.position, Q(e, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: a
    }) : t[n] = a, delete r[n];
  return t;
}
p(tr, "storeMappingPair");
function oa(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : Q(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
p(oa, "readLineBreak");
function xt(e, t, r) {
  for (var i = 0, n = e.input.charCodeAt(e.position); n !== 0; ) {
    for (; Pe(n); )
      n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), n = e.input.charCodeAt(++e.position);
    if (t && n === 35)
      do
        n = e.input.charCodeAt(++e.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (le(n))
      for (oa(e), n = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; n === 32; )
        e.lineIndent++, n = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && _i(e, "deficient indentation"), i;
}
p(xt, "skipSeparationSpace");
function Ri(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Wt(r)));
}
p(Ri, "testDocumentSeparator");
function la(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += Tt.repeat(`
`, t - 1));
}
p(la, "writeFoldedLines");
function Wu(e, t, r) {
  var i, n, a, s, o, l, c, h, u = e.kind, f = e.result, d;
  if (d = e.input.charCodeAt(e.position), Wt(d) || Je(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (n = e.input.charCodeAt(e.position + 1), Wt(n) || r && Je(n)))
    return !1;
  for (e.kind = "scalar", e.result = "", a = s = e.position, o = !1; d !== 0; ) {
    if (d === 58) {
      if (n = e.input.charCodeAt(e.position + 1), Wt(n) || r && Je(n))
        break;
    } else if (d === 35) {
      if (i = e.input.charCodeAt(e.position - 1), Wt(i))
        break;
    } else {
      if (e.position === e.lineStart && Ri(e) || r && Je(d))
        break;
      if (le(d))
        if (l = e.line, c = e.lineStart, h = e.lineIndent, xt(e, !1, -1), e.lineIndent >= t) {
          o = !0, d = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = s, e.line = l, e.lineStart = c, e.lineIndent = h;
          break;
        }
    }
    o && (Me(e, a, s, !1), la(e, e.line - l), a = s = e.position, o = !1), Pe(d) || (s = e.position + 1), d = e.input.charCodeAt(++e.position);
  }
  return Me(e, a, s, !1), e.result ? !0 : (e.kind = u, e.result = f, !1);
}
p(Wu, "readPlainScalar");
function qu(e, t) {
  var r, i, n;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = n = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Me(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, n = e.position;
      else
        return !0;
    else le(r) ? (Me(e, i, n, !0), la(e, xt(e, !1, t)), i = n = e.position) : e.position === e.lineStart && Ri(e) ? Q(e, "unexpected end of the document within a single quoted scalar") : (e.position++, n = e.position);
  Q(e, "unexpected end of the stream within a single quoted scalar");
}
p(qu, "readSingleQuotedScalar");
function Hu(e, t) {
  var r, i, n, a, s, o;
  if (o = e.input.charCodeAt(e.position), o !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (o = e.input.charCodeAt(e.position)) !== 0; ) {
    if (o === 34)
      return Me(e, r, e.position, !0), e.position++, !0;
    if (o === 92) {
      if (Me(e, r, e.position, !0), o = e.input.charCodeAt(++e.position), le(o))
        xt(e, !1, t);
      else if (o < 256 && Pu[o])
        e.result += Nu[o], e.position++;
      else if ((s = Ou(o)) > 0) {
        for (n = s, a = 0; n > 0; n--)
          o = e.input.charCodeAt(++e.position), (s = Du(o)) >= 0 ? a = (a << 4) + s : Q(e, "expected hexadecimal character");
        e.result += Iu(a), e.position++;
      } else
        Q(e, "unknown escape sequence");
      r = i = e.position;
    } else le(o) ? (Me(e, r, i, !0), la(e, xt(e, !1, t)), r = i = e.position) : e.position === e.lineStart && Ri(e) ? Q(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  Q(e, "unexpected end of the stream within a double quoted scalar");
}
p(Hu, "readDoubleQuotedScalar");
function ju(e, t) {
  var r = !0, i, n, a, s = e.tag, o, l = e.anchor, c, h, u, f, d, g = /* @__PURE__ */ Object.create(null), m, y, x, b;
  if (b = e.input.charCodeAt(e.position), b === 91)
    h = 93, d = !1, o = [];
  else if (b === 123)
    h = 125, d = !0, o = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = o), b = e.input.charCodeAt(++e.position); b !== 0; ) {
    if (xt(e, !0, t), b = e.input.charCodeAt(e.position), b === h)
      return e.position++, e.tag = s, e.anchor = l, e.kind = d ? "mapping" : "sequence", e.result = o, !0;
    r ? b === 44 && Q(e, "expected the node content, but found ','") : Q(e, "missed comma between flow collection entries"), y = m = x = null, u = f = !1, b === 63 && (c = e.input.charCodeAt(e.position + 1), Wt(c) && (u = f = !0, e.position++, xt(e, !0, t))), i = e.line, n = e.lineStart, a = e.position, sr(e, t, Dn, !1, !0), y = e.tag, m = e.result, xt(e, !0, t), b = e.input.charCodeAt(e.position), (f || e.line === i) && b === 58 && (u = !0, b = e.input.charCodeAt(++e.position), xt(e, !0, t), sr(e, t, Dn, !1, !0), x = e.result), d ? tr(e, o, g, y, m, x, i, n, a) : u ? o.push(tr(e, null, g, y, m, x, i, n, a)) : o.push(m), xt(e, !0, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = !0, b = e.input.charCodeAt(++e.position)) : r = !1;
  }
  Q(e, "unexpected end of the stream within a flow collection");
}
p(ju, "readFlowCollection");
function Yu(e, t) {
  var r, i, n = Wa, a = !1, s = !1, o = t, l = 0, c = !1, h, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    i = !1;
  else if (u === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      Wa === n ? n = u === 43 ? Il : u1 : Q(e, "repeat of a chomping mode identifier");
    else if ((h = Ru(u)) >= 0)
      h === 0 ? Q(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? Q(e, "repeat of an indentation width identifier") : (o = t + h - 1, s = !0);
    else
      break;
  if (Pe(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (Pe(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!le(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (oa(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!s || e.lineIndent < o) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!s && e.lineIndent > o && (o = e.lineIndent), le(u)) {
      l++;
      continue;
    }
    if (e.lineIndent < o) {
      n === Il ? e.result += Tt.repeat(`
`, a ? 1 + l : l) : n === Wa && a && (e.result += `
`);
      break;
    }
    for (i ? Pe(u) ? (c = !0, e.result += Tt.repeat(`
`, a ? 1 + l : l)) : c ? (c = !1, e.result += Tt.repeat(`
`, l + 1)) : l === 0 ? a && (e.result += " ") : e.result += Tt.repeat(`
`, l) : e.result += Tt.repeat(`
`, a ? 1 + l : l), a = !0, s = !0, l = 0, r = e.position; !le(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    Me(e, r, e.position, !1);
  }
  return !0;
}
p(Yu, "readBlockScalar");
function ys(e, t) {
  var r, i = e.tag, n = e.anchor, a = [], s, o = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), !(l !== 45 || (s = e.input.charCodeAt(e.position + 1), !Wt(s)))); ) {
    if (o = !0, e.position++, xt(e, !0, -1) && e.lineIndent <= t) {
      a.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, sr(e, t, Eu, !1, !0), a.push(e.result), xt(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      Q(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return o ? (e.tag = i, e.anchor = n, e.kind = "sequence", e.result = a, !0) : !1;
}
p(ys, "readBlockSequence");
function Uu(e, t, r) {
  var i, n, a, s, o, l, c = e.tag, h = e.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, g = null, m = null, y = !1, x = !1, b;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = u), b = e.input.charCodeAt(e.position); b !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), a = e.line, (b === 63 || b === 58) && Wt(i))
      b === 63 ? (y && (tr(e, u, f, d, g, null, s, o, l), d = g = m = null), x = !0, y = !0, n = !0) : y ? (y = !1, n = !0) : Q(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
    else {
      if (s = e.line, o = e.lineStart, l = e.position, !sr(e, r, Mu, !1, !0))
        break;
      if (e.line === a) {
        for (b = e.input.charCodeAt(e.position); Pe(b); )
          b = e.input.charCodeAt(++e.position);
        if (b === 58)
          b = e.input.charCodeAt(++e.position), Wt(b) || Q(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (tr(e, u, f, d, g, null, s, o, l), d = g = m = null), x = !0, y = !1, n = !1, d = e.tag, g = e.result;
        else if (x)
          Q(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = c, e.anchor = h, !0;
      } else if (x)
        Q(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = c, e.anchor = h, !0;
    }
    if ((e.line === a || e.lineIndent > t) && (y && (s = e.line, o = e.lineStart, l = e.position), sr(e, t, On, !0, n) && (y ? g = e.result : m = e.result), y || (tr(e, u, f, d, g, m, s, o, l), d = g = m = null), xt(e, !0, -1), b = e.input.charCodeAt(e.position)), (e.line === a || e.lineIndent > t) && b !== 0)
      Q(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && tr(e, u, f, d, g, null, s, o, l), x && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = u), x;
}
p(Uu, "readBlockMapping");
function Gu(e) {
  var t, r = !1, i = !1, n, a, s;
  if (s = e.input.charCodeAt(e.position), s !== 33) return !1;
  if (e.tag !== null && Q(e, "duplication of a tag property"), s = e.input.charCodeAt(++e.position), s === 60 ? (r = !0, s = e.input.charCodeAt(++e.position)) : s === 33 ? (i = !0, n = "!!", s = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, r) {
    do
      s = e.input.charCodeAt(++e.position);
    while (s !== 0 && s !== 62);
    e.position < e.length ? (a = e.input.slice(t, e.position), s = e.input.charCodeAt(++e.position)) : Q(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !Wt(s); )
      s === 33 && (i ? Q(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), $u.test(n) || Q(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), s = e.input.charCodeAt(++e.position);
    a = e.input.slice(t, e.position), p1.test(a) && Q(e, "tag suffix cannot contain flow indicator characters");
  }
  a && !Fu.test(a) && Q(e, "tag name cannot contain such characters: " + a);
  try {
    a = decodeURIComponent(a);
  } catch {
    Q(e, "tag name is malformed: " + a);
  }
  return r ? e.tag = a : Ne.call(e.tagMap, n) ? e.tag = e.tagMap[n] + a : n === "!" ? e.tag = "!" + a : n === "!!" ? e.tag = "tag:yaml.org,2002:" + a : Q(e, 'undeclared tag handle "' + n + '"'), !0;
}
p(Gu, "readTagProperty");
function Xu(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && Q(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Wt(r) && !Je(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && Q(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
p(Xu, "readAnchorProperty");
function Vu(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Wt(i) && !Je(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && Q(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), Ne.call(e.anchorMap, r) || Q(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], xt(e, !0, -1), !0;
}
p(Vu, "readAlias");
function sr(e, t, r, i, n) {
  var a, s, o, l = 1, c = !1, h = !1, u, f, d, g, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, a = s = o = On === r || Eu === r, i && xt(e, !0, -1) && (c = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; Gu(e) || Xu(e); )
      xt(e, !0, -1) ? (c = !0, o = a, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : o = !1;
  if (o && (o = c || n), (l === 1 || On === r) && (Dn === r || Mu === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? o && (ys(e, y) || Uu(e, y, m)) || ju(e, m) ? h = !0 : (s && Yu(e, m) || qu(e, m) || Hu(e, m) ? h = !0 : Vu(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && Q(e, "alias node should not have any properties")) : Wu(e, m, Dn === r) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = o && ys(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && Q(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, f = e.implicitTypes.length; u < f; u += 1)
      if (g = e.implicitTypes[u], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (Ne.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, d = e.typeMap.multi[e.kind || "fallback"], u = 0, f = d.length; u < f; u += 1)
        if (e.tag.slice(0, d[u].tag.length) === d[u].tag) {
          g = d[u];
          break;
        }
    g || Q(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && Q(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : Q(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
p(sr, "composeNode");
function Zu(e) {
  var t = e.position, r, i, n, a = !1, s;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (s = e.input.charCodeAt(e.position)) !== 0 && (xt(e, !0, -1), s = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || s !== 37)); ) {
    for (a = !0, s = e.input.charCodeAt(++e.position), r = e.position; s !== 0 && !Wt(s); )
      s = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), n = [], i.length < 1 && Q(e, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; Pe(s); )
        s = e.input.charCodeAt(++e.position);
      if (s === 35) {
        do
          s = e.input.charCodeAt(++e.position);
        while (s !== 0 && !le(s));
        break;
      }
      if (le(s)) break;
      for (r = e.position; s !== 0 && !Wt(s); )
        s = e.input.charCodeAt(++e.position);
      n.push(e.input.slice(r, e.position));
    }
    s !== 0 && oa(e), Ne.call(Pl, i) ? Pl[i](e, i, n) : _i(e, 'unknown document directive "' + i + '"');
  }
  if (xt(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, xt(e, !0, -1)) : a && Q(e, "directives end mark is expected"), sr(e, e.lineIndent - 1, On, !1, !0), xt(e, !0, -1), e.checkLineBreaks && d1.test(e.input.slice(t, e.position)) && _i(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Ri(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, xt(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    Q(e, "end of the stream or a document separator is expected");
  else
    return;
}
p(Zu, "readDocument");
function yo(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new zu(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, Q(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    Zu(r);
  return r.documents;
}
p(yo, "loadDocuments");
function g1(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = yo(e, r);
  if (typeof t != "function")
    return i;
  for (var n = 0, a = i.length; n < a; n += 1)
    t(i[n]);
}
p(g1, "loadAll$1");
function Ku(e, t) {
  var r = yo(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Xt("expected a single document in the stream, but found more");
  }
}
p(Ku, "load$1");
var m1 = Ku, y1 = {
  load: m1
}, Qu = Object.prototype.toString, Ju = Object.prototype.hasOwnProperty, xo = 65279, x1 = 9, Si = 10, b1 = 13, C1 = 32, w1 = 33, k1 = 34, xs = 35, v1 = 37, _1 = 38, S1 = 39, T1 = 42, tf = 44, B1 = 45, Rn = 58, A1 = 61, L1 = 62, M1 = 63, E1 = 64, ef = 91, rf = 93, $1 = 96, nf = 123, F1 = 124, af = 125, It = {};
It[0] = "\\0";
It[7] = "\\a";
It[8] = "\\b";
It[9] = "\\t";
It[10] = "\\n";
It[11] = "\\v";
It[12] = "\\f";
It[13] = "\\r";
It[27] = "\\e";
It[34] = '\\"';
It[92] = "\\\\";
It[133] = "\\N";
It[160] = "\\_";
It[8232] = "\\L";
It[8233] = "\\P";
var D1 = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], O1 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function sf(e, t) {
  var r, i, n, a, s, o, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), n = 0, a = i.length; n < a; n += 1)
    s = i[n], o = String(t[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), l = e.compiledTypeMap.fallback[s], l && Ju.call(l.styleAliases, o) && (o = l.styleAliases[o]), r[s] = o;
  return r;
}
p(sf, "compileStyleMap");
function of(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new Xt("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Tt.repeat("0", i - t.length) + t;
}
p(of, "encodeHex");
var R1 = 1, Ti = 2;
function lf(e) {
  this.schema = e.schema || Lu, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = Tt.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = sf(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Ti : R1, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
p(lf, "State");
function bs(e, t) {
  for (var r = Tt.repeat(" ", t), i = 0, n = -1, a = "", s, o = e.length; i < o; )
    n = e.indexOf(`
`, i), n === -1 ? (s = e.slice(i), i = o) : (s = e.slice(i, n + 1), i = n + 1), s.length && s !== `
` && (a += r), a += s;
  return a;
}
p(bs, "indentString");
function In(e, t) {
  return `
` + Tt.repeat(" ", e.indent * t);
}
p(In, "generateNextLine");
function cf(e, t) {
  var r, i, n;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (n = e.implicitTypes[r], n.resolve(t))
      return !0;
  return !1;
}
p(cf, "testImplicitResolving");
function Bi(e) {
  return e === C1 || e === x1;
}
p(Bi, "isWhitespace");
function zr(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== xo || 65536 <= e && e <= 1114111;
}
p(zr, "isPrintable");
function Cs(e) {
  return zr(e) && e !== xo && e !== b1 && e !== Si;
}
p(Cs, "isNsCharOrWhitespace");
function ws(e, t, r) {
  var i = Cs(e), n = i && !Bi(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== tf && e !== ef && e !== rf && e !== nf && e !== af) && e !== xs && !(t === Rn && !n) || Cs(t) && !Bi(t) && e === xs || t === Rn && n
  );
}
p(ws, "isPlainSafe");
function hf(e) {
  return zr(e) && e !== xo && !Bi(e) && e !== B1 && e !== M1 && e !== Rn && e !== tf && e !== ef && e !== rf && e !== nf && e !== af && e !== xs && e !== _1 && e !== T1 && e !== w1 && e !== F1 && e !== A1 && e !== L1 && e !== S1 && e !== k1 && e !== v1 && e !== E1 && e !== $1;
}
p(hf, "isPlainSafeFirst");
function uf(e) {
  return !Bi(e) && e !== Rn;
}
p(uf, "isPlainSafeLast");
function vr(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
p(vr, "codePointAt");
function bo(e) {
  var t = /^\n* /;
  return t.test(e);
}
p(bo, "needIndentIndicator");
var ff = 1, ks = 2, df = 3, pf = 4, wr = 5;
function gf(e, t, r, i, n, a, s, o) {
  var l, c = 0, h = null, u = !1, f = !1, d = i !== -1, g = -1, m = hf(vr(e, 0)) && uf(vr(e, e.length - 1));
  if (t || s)
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = vr(e, l), !zr(c))
        return wr;
      m = m && ws(c, h, o), h = c;
    }
  else {
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = vr(e, l), c === Si)
        u = !0, d && (f = f || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e[g + 1] !== " ", g = l);
      else if (!zr(c))
        return wr;
      m = m && ws(c, h, o), h = c;
    }
    f = f || d && l - g - 1 > i && e[g + 1] !== " ";
  }
  return !u && !f ? m && !s && !n(e) ? ff : a === Ti ? wr : ks : r > 9 && bo(e) ? wr : s ? a === Ti ? wr : ks : f ? pf : df;
}
p(gf, "chooseScalarStyle");
function mf(e, t, r, i, n) {
  e.dump = (function() {
    if (t.length === 0)
      return e.quotingType === Ti ? '""' : "''";
    if (!e.noCompatMode && (D1.indexOf(t) !== -1 || O1.test(t)))
      return e.quotingType === Ti ? '"' + t + '"' : "'" + t + "'";
    var a = e.indent * Math.max(1, r), s = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - a), o = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(c) {
      return cf(e, c);
    }
    switch (p(l, "testAmbiguity"), gf(
      t,
      o,
      e.indent,
      s,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      n
    )) {
      case ff:
        return t;
      case ks:
        return "'" + t.replace(/'/g, "''") + "'";
      case df:
        return "|" + vs(t, e.indent) + _s(bs(t, a));
      case pf:
        return ">" + vs(t, e.indent) + _s(bs(yf(t, s), a));
      case wr:
        return '"' + xf(t) + '"';
      default:
        throw new Xt("impossible error: invalid scalar style");
    }
  })();
}
p(mf, "writeScalar");
function vs(e, t) {
  var r = bo(e) ? String(t) : "", i = e[e.length - 1] === `
`, n = i && (e[e.length - 2] === `
` || e === `
`), a = n ? "+" : i ? "" : "-";
  return r + a + `
`;
}
p(vs, "blockHeader");
function _s(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
p(_s, "dropEndingNewline");
function yf(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = (function() {
    var c = e.indexOf(`
`);
    return c = c !== -1 ? c : e.length, r.lastIndex = c, Ss(e.slice(0, c), t);
  })(), n = e[0] === `
` || e[0] === " ", a, s; s = r.exec(e); ) {
    var o = s[1], l = s[2];
    a = l[0] === " ", i += o + (!n && !a && l !== "" ? `
` : "") + Ss(l, t), n = a;
  }
  return i;
}
p(yf, "foldString");
function Ss(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, n = 0, a, s = 0, o = 0, l = ""; i = r.exec(e); )
    o = i.index, o - n > t && (a = s > n ? s : o, l += `
` + e.slice(n, a), n = a + 1), s = o;
  return l += `
`, e.length - n > t && s > n ? l += e.slice(n, s) + `
` + e.slice(s + 1) : l += e.slice(n), l.slice(1);
}
p(Ss, "foldLine");
function xf(e) {
  for (var t = "", r = 0, i, n = 0; n < e.length; r >= 65536 ? n += 2 : n++)
    r = vr(e, n), i = It[r], !i && zr(r) ? (t += e[n], r >= 65536 && (t += e[n + 1])) : t += i || of(r);
  return t;
}
p(xf, "escapeString");
function bf(e, t, r) {
  var i = "", n = e.tag, a, s, o;
  for (a = 0, s = r.length; a < s; a += 1)
    o = r[a], e.replacer && (o = e.replacer.call(r, String(a), o)), (be(e, t, o, !1, !1) || typeof o > "u" && be(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = n, e.dump = "[" + i + "]";
}
p(bf, "writeFlowSequence");
function Ts(e, t, r, i) {
  var n = "", a = e.tag, s, o, l;
  for (s = 0, o = r.length; s < o; s += 1)
    l = r[s], e.replacer && (l = e.replacer.call(r, String(s), l)), (be(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && be(e, t + 1, null, !0, !0, !1, !0)) && ((!i || n !== "") && (n += In(e, t)), e.dump && Si === e.dump.charCodeAt(0) ? n += "-" : n += "- ", n += e.dump);
  e.tag = a, e.dump = n || "[]";
}
p(Ts, "writeBlockSequence");
function Cf(e, t, r) {
  var i = "", n = e.tag, a = Object.keys(r), s, o, l, c, h;
  for (s = 0, o = a.length; s < o; s += 1)
    h = "", i !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = a[s], c = r[l], e.replacer && (c = e.replacer.call(r, l, c)), be(e, t, l, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), be(e, t, c, !1, !1) && (h += e.dump, i += h));
  e.tag = n, e.dump = "{" + i + "}";
}
p(Cf, "writeFlowMapping");
function wf(e, t, r, i) {
  var n = "", a = e.tag, s = Object.keys(r), o, l, c, h, u, f;
  if (e.sortKeys === !0)
    s.sort();
  else if (typeof e.sortKeys == "function")
    s.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Xt("sortKeys must be a boolean or a function");
  for (o = 0, l = s.length; o < l; o += 1)
    f = "", (!i || n !== "") && (f += In(e, t)), c = s[o], h = r[c], e.replacer && (h = e.replacer.call(r, c, h)), be(e, t + 1, c, !0, !0, !0) && (u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, u && (e.dump && Si === e.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e.dump, u && (f += In(e, t)), be(e, t + 1, h, !0, u) && (e.dump && Si === e.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e.dump, n += f));
  e.tag = a, e.dump = n || "{}";
}
p(wf, "writeBlockMapping");
function Bs(e, t, r) {
  var i, n, a, s, o, l;
  for (n = r ? e.explicitTypes : e.implicitTypes, a = 0, s = n.length; a < s; a += 1)
    if (o = n[a], (o.instanceOf || o.predicate) && (!o.instanceOf || typeof t == "object" && t instanceof o.instanceOf) && (!o.predicate || o.predicate(t))) {
      if (r ? o.multi && o.representName ? e.tag = o.representName(t) : e.tag = o.tag : e.tag = "?", o.represent) {
        if (l = e.styleMap[o.tag] || o.defaultStyle, Qu.call(o.represent) === "[object Function]")
          i = o.represent(t, l);
        else if (Ju.call(o.represent, l))
          i = o.represent[l](t, l);
        else
          throw new Xt("!<" + o.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
p(Bs, "detectType");
function be(e, t, r, i, n, a, s) {
  e.tag = null, e.dump = r, Bs(e, r, !1) || Bs(e, r, !0);
  var o = Qu.call(e.dump), l = i, c;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var h = o === "[object Object]" || o === "[object Array]", u, f;
  if (h && (u = e.duplicates.indexOf(r), f = u !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) && (n = !1), f && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (h && f && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), o === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (wf(e, t, e.dump, n), f && (e.dump = "&ref_" + u + e.dump)) : (Cf(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (o === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !s && t > 0 ? Ts(e, t - 1, e.dump, n) : Ts(e, t, e.dump, n), f && (e.dump = "&ref_" + u + e.dump)) : (bf(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (o === "[object String]")
      e.tag !== "?" && mf(e, e.dump, t, a, l);
    else {
      if (o === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new Xt("unacceptable kind of an object to dump " + o);
    }
    e.tag !== null && e.tag !== "?" && (c = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
  }
  return !0;
}
p(be, "writeNode");
function kf(e, t) {
  var r = [], i = [], n, a;
  for (Pn(e, r, i), n = 0, a = i.length; n < a; n += 1)
    t.duplicates.push(r[i[n]]);
  t.usedDuplicates = new Array(a);
}
p(kf, "getDuplicateReferences");
function Pn(e, t, r) {
  var i, n, a;
  if (e !== null && typeof e == "object")
    if (n = t.indexOf(e), n !== -1)
      r.indexOf(n) === -1 && r.push(n);
    else if (t.push(e), Array.isArray(e))
      for (n = 0, a = e.length; n < a; n += 1)
        Pn(e[n], t, r);
    else
      for (i = Object.keys(e), n = 0, a = i.length; n < a; n += 1)
        Pn(e[i[n]], t, r);
}
p(Pn, "inspectNode");
function I1(e, t) {
  t = t || {};
  var r = new lf(t);
  r.noRefs || kf(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), be(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
p(I1, "dump$1");
function P1(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
p(P1, "renamed");
var N1 = fu, z1 = y1.load;
var Ft = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4
  //arrow_cross: 24,
}, Nl = {
  arrow_point: 9,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function fi(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = mt(e), t = mt(t);
  const [r, i] = [e.x, e.y], [n, a] = [t.x, t.y], s = n - r, o = a - i;
  return { angle: Math.atan(o / s), deltaX: s, deltaY: o };
}
p(fi, "calculateDeltaAndAngle");
var mt = /* @__PURE__ */ p((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), W1 = /* @__PURE__ */ p((e) => ({
  x: /* @__PURE__ */ p(function(t, r, i) {
    let n = 0;
    const a = mt(i[0]).x < mt(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(Ft, e.arrowTypeStart)) {
      const { angle: d, deltaX: g } = fi(i[0], i[1]);
      n = Ft[e.arrowTypeStart] * Math.cos(d) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Ft, e.arrowTypeEnd)) {
      const { angle: d, deltaX: g } = fi(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = Ft[e.arrowTypeEnd] * Math.cos(d) * (g >= 0 ? 1 : -1);
    }
    const s = Math.abs(
      mt(t).x - mt(i[i.length - 1]).x
    ), o = Math.abs(
      mt(t).y - mt(i[i.length - 1]).y
    ), l = Math.abs(mt(t).x - mt(i[0]).x), c = Math.abs(mt(t).y - mt(i[0]).y), h = Ft[e.arrowTypeStart], u = Ft[e.arrowTypeEnd], f = 1;
    if (s < u && s > 0 && o < u) {
      let d = u + f - s;
      d *= a === "right" ? -1 : 1, n -= d;
    }
    if (l < h && l > 0 && c < h) {
      let d = h + f - l;
      d *= a === "right" ? -1 : 1, n += d;
    }
    return mt(t).x + n;
  }, "x"),
  y: /* @__PURE__ */ p(function(t, r, i) {
    let n = 0;
    const a = mt(i[0]).y < mt(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(Ft, e.arrowTypeStart)) {
      const { angle: d, deltaY: g } = fi(i[0], i[1]);
      n = Ft[e.arrowTypeStart] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Ft, e.arrowTypeEnd)) {
      const { angle: d, deltaY: g } = fi(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = Ft[e.arrowTypeEnd] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    }
    const s = Math.abs(
      mt(t).y - mt(i[i.length - 1]).y
    ), o = Math.abs(
      mt(t).x - mt(i[i.length - 1]).x
    ), l = Math.abs(mt(t).y - mt(i[0]).y), c = Math.abs(mt(t).x - mt(i[0]).x), h = Ft[e.arrowTypeStart], u = Ft[e.arrowTypeEnd], f = 1;
    if (s < u && s > 0 && o < u) {
      let d = u + f - s;
      d *= a === "up" ? -1 : 1, n -= d;
    }
    if (l < h && l > 0 && c < h) {
      let d = h + f - l;
      d *= a === "up" ? -1 : 1, n += d;
    }
    return mt(t).y + n;
  }, "y")
}), "getLineFunctionsWithOffset"), Co = /* @__PURE__ */ p(({
  flowchart: e
}) => {
  const t = e?.subGraphTitleMargin?.top ?? 0, r = e?.subGraphTitleMargin?.bottom ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins"), q1 = /* @__PURE__ */ p((e) => {
  const { handDrawnSeed: t } = ft();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), jr = /* @__PURE__ */ p((e) => {
  const t = H1([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...e.labelStyle || []
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), H1 = /* @__PURE__ */ p((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.set(i.trim(), n?.trim());
  }), t;
}, "styles2Map"), vf = /* @__PURE__ */ p((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), U = /* @__PURE__ */ p((e) => {
  const { stylesArray: t } = jr(e), r = [], i = [], n = [], a = [];
  return t.forEach((s) => {
    const o = s[0];
    vf(o) ? r.push(s.join(":") + " !important") : (i.push(s.join(":") + " !important"), o.includes("stroke") && n.push(s.join(":") + " !important"), o === "fill" && a.push(s.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: n,
    backgroundStyles: a
  };
}, "styles2String"), Y = /* @__PURE__ */ p((e, t) => {
  const { themeVariables: r, handDrawnSeed: i } = ft(), { nodeBorder: n, mainBkg: a } = r, { stylesMap: s } = jr(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: s.get("fill") || a,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: s.get("stroke") || n,
      seed: i,
      strokeWidth: s.get("stroke-width")?.replace("px", "") || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: j1(s.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), j1 = /* @__PURE__ */ p((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const n = isNaN(t[0]) ? 0 : t[0];
    return [n, n];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray"), Qi = {}, _t = {}, zl;
function Y1() {
  return zl || (zl = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.BLANK_URL = _t.relativeFirstCharacters = _t.whitespaceEscapeCharsRegex = _t.urlSchemeRegex = _t.ctrlCharactersRegex = _t.htmlCtrlEntityRegex = _t.htmlEntitiesRegex = _t.invalidProtocolRegex = void 0, _t.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, _t.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, _t.htmlCtrlEntityRegex = /&(newline|tab);/gi, _t.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, _t.urlSchemeRegex = /^.+(:|&colon;)/gim, _t.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, _t.relativeFirstCharacters = [".", "/"], _t.BLANK_URL = "about:blank"), _t;
}
var Wl;
function U1() {
  if (Wl) return Qi;
  Wl = 1, Object.defineProperty(Qi, "__esModule", { value: !0 }), Qi.sanitizeUrl = a;
  var e = Y1();
  function t(s) {
    return e.relativeFirstCharacters.indexOf(s[0]) > -1;
  }
  function r(s) {
    var o = s.replace(e.ctrlCharactersRegex, "");
    return o.replace(e.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(s) {
    return URL.canParse(s);
  }
  function n(s) {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  }
  function a(s) {
    if (!s)
      return e.BLANK_URL;
    var o, l = n(s.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = n(l), o = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (o && o.length > 0);
    var c = l;
    if (!c)
      return e.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), u = h.match(e.urlSchemeRegex);
    if (!u)
      return c;
    var f = u[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(f))
      return e.BLANK_URL;
    var d = h.replace(/\\/g, "/");
    if (f === "mailto:" || f.includes("://"))
      return d;
    if (f === "http:" || f === "https:") {
      if (!i(d))
        return e.BLANK_URL;
      var g = new URL(d);
      return g.protocol = g.protocol.toLowerCase(), g.hostname = g.hostname.toLowerCase(), g.toString();
    }
    return d;
  }
  return Qi;
}
var G1 = U1(), _f = typeof global == "object" && global && global.Object === Object && global, X1 = typeof self == "object" && self && self.Object === Object && self, we = _f || X1 || Function("return this")(), Nn = we.Symbol, Sf = Object.prototype, V1 = Sf.hasOwnProperty, Z1 = Sf.toString, ii = Nn ? Nn.toStringTag : void 0;
function K1(e) {
  var t = V1.call(e, ii), r = e[ii];
  try {
    e[ii] = void 0;
    var i = !0;
  } catch {
  }
  var n = Z1.call(e);
  return i && (t ? e[ii] = r : delete e[ii]), n;
}
var Q1 = Object.prototype, J1 = Q1.toString;
function t2(e) {
  return J1.call(e);
}
var e2 = "[object Null]", r2 = "[object Undefined]", ql = Nn ? Nn.toStringTag : void 0;
function Yr(e) {
  return e == null ? e === void 0 ? r2 : e2 : ql && ql in Object(e) ? K1(e) : t2(e);
}
function hr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var i2 = "[object AsyncFunction]", n2 = "[object Function]", a2 = "[object GeneratorFunction]", s2 = "[object Proxy]";
function wo(e) {
  if (!hr(e))
    return !1;
  var t = Yr(e);
  return t == n2 || t == a2 || t == i2 || t == s2;
}
var qa = we["__core-js_shared__"], Hl = (function() {
  var e = /[^.]+$/.exec(qa && qa.keys && qa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function o2(e) {
  return !!Hl && Hl in e;
}
var l2 = Function.prototype, c2 = l2.toString;
function ur(e) {
  if (e != null) {
    try {
      return c2.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var h2 = /[\\^$.*+?()[\]{}|]/g, u2 = /^\[object .+?Constructor\]$/, f2 = Function.prototype, d2 = Object.prototype, p2 = f2.toString, g2 = d2.hasOwnProperty, m2 = RegExp(
  "^" + p2.call(g2).replace(h2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function y2(e) {
  if (!hr(e) || o2(e))
    return !1;
  var t = wo(e) ? m2 : u2;
  return t.test(ur(e));
}
function x2(e, t) {
  return e?.[t];
}
function fr(e, t) {
  var r = x2(e, t);
  return y2(r) ? r : void 0;
}
var Ai = fr(Object, "create");
function b2() {
  this.__data__ = Ai ? Ai(null) : {}, this.size = 0;
}
function C2(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var w2 = "__lodash_hash_undefined__", k2 = Object.prototype, v2 = k2.hasOwnProperty;
function _2(e) {
  var t = this.__data__;
  if (Ai) {
    var r = t[e];
    return r === w2 ? void 0 : r;
  }
  return v2.call(t, e) ? t[e] : void 0;
}
var S2 = Object.prototype, T2 = S2.hasOwnProperty;
function B2(e) {
  var t = this.__data__;
  return Ai ? t[e] !== void 0 : T2.call(t, e);
}
var A2 = "__lodash_hash_undefined__";
function L2(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ai && t === void 0 ? A2 : t, this;
}
function or(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
or.prototype.clear = b2;
or.prototype.delete = C2;
or.prototype.get = _2;
or.prototype.has = B2;
or.prototype.set = L2;
function M2() {
  this.__data__ = [], this.size = 0;
}
function ca(e, t) {
  return e === t || e !== e && t !== t;
}
function ha(e, t) {
  for (var r = e.length; r--; )
    if (ca(e[r][0], t))
      return r;
  return -1;
}
var E2 = Array.prototype, $2 = E2.splice;
function F2(e) {
  var t = this.__data__, r = ha(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : $2.call(t, r, 1), --this.size, !0;
}
function D2(e) {
  var t = this.__data__, r = ha(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function O2(e) {
  return ha(this.__data__, e) > -1;
}
function R2(e, t) {
  var r = this.__data__, i = ha(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
De.prototype.clear = M2;
De.prototype.delete = F2;
De.prototype.get = D2;
De.prototype.has = O2;
De.prototype.set = R2;
var Li = fr(we, "Map");
function I2() {
  this.size = 0, this.__data__ = {
    hash: new or(),
    map: new (Li || De)(),
    string: new or()
  };
}
function P2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ua(e, t) {
  var r = e.__data__;
  return P2(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function N2(e) {
  var t = ua(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function z2(e) {
  return ua(this, e).get(e);
}
function W2(e) {
  return ua(this, e).has(e);
}
function q2(e, t) {
  var r = ua(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function qe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
qe.prototype.clear = I2;
qe.prototype.delete = N2;
qe.prototype.get = z2;
qe.prototype.has = W2;
qe.prototype.set = q2;
var H2 = "Expected a function";
function Ii(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(H2);
  var r = function() {
    var i = arguments, n = t ? t.apply(this, i) : i[0], a = r.cache;
    if (a.has(n))
      return a.get(n);
    var s = e.apply(this, i);
    return r.cache = a.set(n, s) || a, s;
  };
  return r.cache = new (Ii.Cache || qe)(), r;
}
Ii.Cache = qe;
function j2() {
  this.__data__ = new De(), this.size = 0;
}
function Y2(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function U2(e) {
  return this.__data__.get(e);
}
function G2(e) {
  return this.__data__.has(e);
}
var X2 = 200;
function V2(e, t) {
  var r = this.__data__;
  if (r instanceof De) {
    var i = r.__data__;
    if (!Li || i.length < X2 - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new qe(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Ur(e) {
  var t = this.__data__ = new De(e);
  this.size = t.size;
}
Ur.prototype.clear = j2;
Ur.prototype.delete = Y2;
Ur.prototype.get = U2;
Ur.prototype.has = G2;
Ur.prototype.set = V2;
var zn = (function() {
  try {
    var e = fr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function ko(e, t, r) {
  t == "__proto__" && zn ? zn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function As(e, t, r) {
  (r !== void 0 && !ca(e[t], r) || r === void 0 && !(t in e)) && ko(e, t, r);
}
function Z2(e) {
  return function(t, r, i) {
    for (var n = -1, a = Object(t), s = i(t), o = s.length; o--; ) {
      var l = s[++n];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var K2 = Z2(), Tf = typeof exports == "object" && exports && !exports.nodeType && exports, jl = Tf && typeof module == "object" && module && !module.nodeType && module, Q2 = jl && jl.exports === Tf, Yl = Q2 ? we.Buffer : void 0, Ul = Yl ? Yl.allocUnsafe : void 0;
function J2(e, t) {
  if (t)
    return e.slice();
  var r = e.length, i = Ul ? Ul(r) : new e.constructor(r);
  return e.copy(i), i;
}
var Gl = we.Uint8Array;
function tC(e) {
  var t = new e.constructor(e.byteLength);
  return new Gl(t).set(new Gl(e)), t;
}
function eC(e, t) {
  var r = t ? tC(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function rC(e, t) {
  var r = -1, i = e.length;
  for (t || (t = Array(i)); ++r < i; )
    t[r] = e[r];
  return t;
}
var Xl = Object.create, iC = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!hr(t))
      return {};
    if (Xl)
      return Xl(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
})();
function Bf(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Af = Bf(Object.getPrototypeOf, Object), nC = Object.prototype;
function fa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || nC;
  return e === r;
}
function aC(e) {
  return typeof e.constructor == "function" && !fa(e) ? iC(Af(e)) : {};
}
function Pi(e) {
  return e != null && typeof e == "object";
}
var sC = "[object Arguments]";
function Vl(e) {
  return Pi(e) && Yr(e) == sC;
}
var Lf = Object.prototype, oC = Lf.hasOwnProperty, lC = Lf.propertyIsEnumerable, Wn = Vl(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Vl : function(e) {
  return Pi(e) && oC.call(e, "callee") && !lC.call(e, "callee");
}, qn = Array.isArray, cC = 9007199254740991;
function Mf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cC;
}
function da(e) {
  return e != null && Mf(e.length) && !wo(e);
}
function hC(e) {
  return Pi(e) && da(e);
}
function uC() {
  return !1;
}
var Ef = typeof exports == "object" && exports && !exports.nodeType && exports, Zl = Ef && typeof module == "object" && module && !module.nodeType && module, fC = Zl && Zl.exports === Ef, Kl = fC ? we.Buffer : void 0, dC = Kl ? Kl.isBuffer : void 0, vo = dC || uC, pC = "[object Object]", gC = Function.prototype, mC = Object.prototype, $f = gC.toString, yC = mC.hasOwnProperty, xC = $f.call(Object);
function bC(e) {
  if (!Pi(e) || Yr(e) != pC)
    return !1;
  var t = Af(e);
  if (t === null)
    return !0;
  var r = yC.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && $f.call(r) == xC;
}
var CC = "[object Arguments]", wC = "[object Array]", kC = "[object Boolean]", vC = "[object Date]", _C = "[object Error]", SC = "[object Function]", TC = "[object Map]", BC = "[object Number]", AC = "[object Object]", LC = "[object RegExp]", MC = "[object Set]", EC = "[object String]", $C = "[object WeakMap]", FC = "[object ArrayBuffer]", DC = "[object DataView]", OC = "[object Float32Array]", RC = "[object Float64Array]", IC = "[object Int8Array]", PC = "[object Int16Array]", NC = "[object Int32Array]", zC = "[object Uint8Array]", WC = "[object Uint8ClampedArray]", qC = "[object Uint16Array]", HC = "[object Uint32Array]", pt = {};
pt[OC] = pt[RC] = pt[IC] = pt[PC] = pt[NC] = pt[zC] = pt[WC] = pt[qC] = pt[HC] = !0;
pt[CC] = pt[wC] = pt[FC] = pt[kC] = pt[DC] = pt[vC] = pt[_C] = pt[SC] = pt[TC] = pt[BC] = pt[AC] = pt[LC] = pt[MC] = pt[EC] = pt[$C] = !1;
function jC(e) {
  return Pi(e) && Mf(e.length) && !!pt[Yr(e)];
}
function YC(e) {
  return function(t) {
    return e(t);
  };
}
var Ff = typeof exports == "object" && exports && !exports.nodeType && exports, wi = Ff && typeof module == "object" && module && !module.nodeType && module, UC = wi && wi.exports === Ff, Ha = UC && _f.process, Ql = (function() {
  try {
    var e = wi && wi.require && wi.require("util").types;
    return e || Ha && Ha.binding && Ha.binding("util");
  } catch {
  }
})(), Jl = Ql && Ql.isTypedArray, _o = Jl ? YC(Jl) : jC;
function Ls(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var GC = Object.prototype, XC = GC.hasOwnProperty;
function VC(e, t, r) {
  var i = e[t];
  (!(XC.call(e, t) && ca(i, r)) || r === void 0 && !(t in e)) && ko(e, t, r);
}
function ZC(e, t, r, i) {
  var n = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var o = t[a], l = void 0;
    l === void 0 && (l = e[o]), n ? ko(r, o, l) : VC(r, o, l);
  }
  return r;
}
function KC(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var QC = 9007199254740991, JC = /^(?:0|[1-9]\d*)$/;
function Df(e, t) {
  var r = typeof e;
  return t = t ?? QC, !!t && (r == "number" || r != "symbol" && JC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var tw = Object.prototype, ew = tw.hasOwnProperty;
function rw(e, t) {
  var r = qn(e), i = !r && Wn(e), n = !r && !i && vo(e), a = !r && !i && !n && _o(e), s = r || i || n || a, o = s ? KC(e.length, String) : [], l = o.length;
  for (var c in e)
    (t || ew.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Df(c, l))) && o.push(c);
  return o;
}
function iw(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var nw = Object.prototype, aw = nw.hasOwnProperty;
function sw(e) {
  if (!hr(e))
    return iw(e);
  var t = fa(e), r = [];
  for (var i in e)
    i == "constructor" && (t || !aw.call(e, i)) || r.push(i);
  return r;
}
function Of(e) {
  return da(e) ? rw(e, !0) : sw(e);
}
function ow(e) {
  return ZC(e, Of(e));
}
function lw(e, t, r, i, n, a, s) {
  var o = Ls(e, r), l = Ls(t, r), c = s.get(l);
  if (c) {
    As(e, r, c);
    return;
  }
  var h = a ? a(o, l, r + "", e, t, s) : void 0, u = h === void 0;
  if (u) {
    var f = qn(l), d = !f && vo(l), g = !f && !d && _o(l);
    h = l, f || d || g ? qn(o) ? h = o : hC(o) ? h = rC(o) : d ? (u = !1, h = J2(l, !0)) : g ? (u = !1, h = eC(l, !0)) : h = [] : bC(l) || Wn(l) ? (h = o, Wn(o) ? h = ow(o) : (!hr(o) || wo(o)) && (h = aC(l))) : u = !1;
  }
  u && (s.set(l, h), n(h, l, i, a, s), s.delete(l)), As(e, r, h);
}
function Rf(e, t, r, i, n) {
  e !== t && K2(t, function(a, s) {
    if (n || (n = new Ur()), hr(a))
      lw(e, t, s, r, Rf, i, n);
    else {
      var o = i ? i(Ls(e, s), a, s + "", e, t, n) : void 0;
      o === void 0 && (o = a), As(e, s, o);
    }
  }, Of);
}
function If(e) {
  return e;
}
function cw(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var tc = Math.max;
function hw(e, t, r) {
  return t = tc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, n = -1, a = tc(i.length - t, 0), s = Array(a); ++n < a; )
      s[n] = i[t + n];
    n = -1;
    for (var o = Array(t + 1); ++n < t; )
      o[n] = i[n];
    return o[t] = r(s), cw(e, this, o);
  };
}
function uw(e) {
  return function() {
    return e;
  };
}
var fw = zn ? function(e, t) {
  return zn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: uw(t),
    writable: !0
  });
} : If, dw = 800, pw = 16, gw = Date.now;
function mw(e) {
  var t = 0, r = 0;
  return function() {
    var i = gw(), n = pw - (i - r);
    if (r = i, n > 0) {
      if (++t >= dw)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var yw = mw(fw);
function xw(e, t) {
  return yw(hw(e, t, If), e + "");
}
function bw(e, t, r) {
  if (!hr(r))
    return !1;
  var i = typeof t;
  return (i == "number" ? da(r) && Df(t, r.length) : i == "string" && t in r) ? ca(r[t], e) : !1;
}
function Cw(e) {
  return xw(function(t, r) {
    var i = -1, n = r.length, a = n > 1 ? r[n - 1] : void 0, s = n > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (n--, a) : void 0, s && bw(r[0], r[1], s) && (a = n < 3 ? void 0 : a, n = 1), t = Object(t); ++i < n; ) {
      var o = r[i];
      o && e(t, o, i, a);
    }
    return t;
  });
}
var ww = Cw(function(e, t, r) {
  Rf(e, t, r);
}), kw = "​", vw = {
  curveBasis: on,
  curveBasisClosed: em,
  curveBasisOpen: tm,
  curveBumpX: jc,
  curveBumpY: Hc,
  curveBundle: im,
  curveCardinalClosed: nm,
  curveCardinalOpen: am,
  curveCardinal: Uc,
  curveCatmullRomClosed: sm,
  curveCatmullRomOpen: om,
  curveCatmullRom: Xc,
  curveLinear: Ja,
  curveLinearClosed: Jg,
  curveMonotoneX: qc,
  curveMonotoneY: Wc,
  curveNatural: zc,
  curveStep: Nc,
  curveStepAfter: Pc,
  curveStepBefore: Ic
}, _w = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Sw = /* @__PURE__ */ p(function(e, t) {
  const r = Pf(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const s = r.map((o) => o.args);
    _n(s), i = St(i, [...s]);
  } else
    i = r.args;
  if (!i)
    return;
  let n = to(e, t);
  const a = "config";
  return i[a] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), i[n] = i[a], delete i[a]), i;
}, "detectInit"), Pf = /* @__PURE__ */ p(function(e, t = null) {
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${_w.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(r, "").replace(/'/gm, '"'), F.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let i;
    const n = [];
    for (; (i = bi.exec(e)) !== null; )
      if (i.index === bi.lastIndex && bi.lastIndex++, i && !t || t && i[1]?.match(t) || t && i[2]?.match(t)) {
        const a = i[1] ? i[1] : i[2], s = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        n.push({ type: a, args: s });
      }
    return n.length === 0 ? { type: e, args: null } : n.length === 1 ? n[0] : n;
  } catch (r) {
    return F.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), Tw = /* @__PURE__ */ p(function(e) {
  return e.replace(bi, "");
}, "removeDirectives"), Bw = /* @__PURE__ */ p(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function So(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return vw[r] ?? t;
}
p(So, "interpolateToCurve");
function Nf(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? G1.sanitizeUrl(r) : r;
}
p(Nf, "formatUrl");
var Aw = /* @__PURE__ */ p((e, ...t) => {
  const r = e.split("."), i = r.length - 1, n = r[i];
  let a = window;
  for (let s = 0; s < i; s++)
    if (a = a[r[s]], !a) {
      F.error(`Function name: ${e} not found in window`);
      return;
    }
  a[n](...t);
}, "runFunc");
function To(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
p(To, "distance");
function zf(e) {
  let t, r = 0;
  e.forEach((n) => {
    r += To(n, t), t = n;
  });
  const i = r / 2;
  return Bo(e, i);
}
p(zf, "traverseEdge");
function Wf(e) {
  return e.length === 1 ? e[0] : zf(e);
}
p(Wf, "calcLabelPosition");
var ec = /* @__PURE__ */ p((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), Bo = /* @__PURE__ */ p((e, t) => {
  let r, i = t;
  for (const n of e) {
    if (r) {
      const a = To(n, r);
      if (a === 0)
        return r;
      if (a < i)
        i -= a;
      else {
        const s = i / a;
        if (s <= 0)
          return r;
        if (s >= 1)
          return { x: n.x, y: n.y };
        if (s > 0 && s < 1)
          return {
            x: ec((1 - s) * r.x + s * n.x, 5),
            y: ec((1 - s) * r.y + s * n.y, 5)
          };
      }
    }
    r = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), Lw = /* @__PURE__ */ p((e, t, r) => {
  F.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const n = Bo(t, 25), a = e ? 10 : 5, s = Math.atan2(t[0].y - n.y, t[0].x - n.x), o = { x: 0, y: 0 };
  return o.x = Math.sin(s) * a + (t[0].x + n.x) / 2, o.y = -Math.cos(s) * a + (t[0].y + n.y) / 2, o;
}, "calcCardinalityPosition");
function qf(e, t, r) {
  const i = structuredClone(r);
  F.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const n = 25 + e, a = Bo(i, n), s = 10 + e * 0.5, o = Math.atan2(i[0].y - a.y, i[0].x - a.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(o + Math.PI) * s + (i[0].x + a.x) / 2, l.y = -Math.cos(o + Math.PI) * s + (i[0].y + a.y) / 2) : t === "end_right" ? (l.x = Math.sin(o - Math.PI) * s + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(o - Math.PI) * s + (i[0].y + a.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(o) * s + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(o) * s + (i[0].y + a.y) / 2 - 5) : (l.x = Math.sin(o) * s + (i[0].x + a.x) / 2, l.y = -Math.cos(o) * s + (i[0].y + a.y) / 2), l;
}
p(qf, "calcTerminalLabelPosition");
function Hf(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
p(Hf, "getStylesFromArray");
var rc = 0, Mw = /* @__PURE__ */ p(() => (rc++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + rc), "generateId");
function jf(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let n = 0; n < e; n++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
p(jf, "makeRandomHex");
var Ew = /* @__PURE__ */ p((e) => jf(e.length), "random"), $w = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), Fw = /* @__PURE__ */ p(function(e, t) {
  const r = t.text.replace(Hr.lineBreakRegex, " "), [, i] = pa(t.fontSize), n = e.append("text");
  n.attr("x", t.x), n.attr("y", t.y), n.style("text-anchor", t.anchor), n.style("font-family", t.fontFamily), n.style("font-size", i), n.style("font-weight", t.fontWeight), n.attr("fill", t.fill), t.class !== void 0 && n.attr("class", t.class);
  const a = n.append("tspan");
  return a.attr("x", t.x + t.textMargin * 2), a.attr("fill", t.fill), a.text(r), n;
}, "drawSimpleText"), Dw = Ii(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Hr.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), n = [];
    let a = "";
    return i.forEach((s, o) => {
      const l = $e(`${s} `, r), c = $e(a, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: d } = Ow(s, t, "-", r);
        n.push(a, ...f), a = d;
      } else c + l >= t ? (n.push(a), a = s) : a = [a, s].filter(Boolean).join(" ");
      o + 1 === i.length && n.push(a);
    }), n.filter((s) => s !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), Ow = Ii(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const n = [...e], a = [];
    let s = "";
    return n.forEach((o, l) => {
      const c = `${s}${o}`;
      if ($e(c, i) >= t) {
        const u = l + 1, f = n.length === u, d = `${c}${r}`;
        a.push(f ? c : d), s = "";
      } else
        s = c;
    }), { hyphenatedStrings: a, remainingWord: s };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function Yf(e, t) {
  return Ao(e, t).height;
}
p(Yf, "calculateTextHeight");
function $e(e, t) {
  return Ao(e, t).width;
}
p($e, "calculateTextWidth");
var Ao = Ii(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: n = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, a] = pa(r), s = ["sans-serif", i], o = e.split(Hr.lineBreakRegex), l = [], c = ht("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const f of s) {
      let d = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of o) {
        const y = $w();
        y.text = m || kw;
        const x = Fw(h, y).style("font-size", a).style("font-weight", n).style("font-family", f), b = (x._groups || x)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), d = Math.round(b.height), g.height += d, g.lineHeight = Math.round(Math.max(g.lineHeight, d));
      }
      l.push(g);
    }
    h.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), Fr, Rw = (Fr = class {
  constructor(t = !1, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, p(Fr, "InitIDGenerator"), Fr), Ji, Iw = /* @__PURE__ */ p(function(e) {
  return Ji = Ji || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Ji.innerHTML = e, unescape(Ji.textContent);
}, "entityDecode");
function Lo(e) {
  return "str" in e;
}
p(Lo, "isDetailedError");
var Pw = /* @__PURE__ */ p((e, t, r, i) => {
  if (!i)
    return;
  const n = e.node()?.getBBox();
  n && e.append("text").text(i).attr("text-anchor", "middle").attr("x", n.x + n.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), pa = /* @__PURE__ */ p((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Mo(e, t) {
  return ww({}, e, t);
}
p(Mo, "cleanAndMerge");
var oe = {
  assignWithDepth: St,
  wrapLabel: Dw,
  calculateTextHeight: Yf,
  calculateTextWidth: $e,
  calculateTextDimensions: Ao,
  cleanAndMerge: Mo,
  detectInit: Sw,
  detectDirective: Pf,
  isSubstringInArray: Bw,
  interpolateToCurve: So,
  calcLabelPosition: Wf,
  calcCardinalityPosition: Lw,
  calcTerminalLabelPosition: qf,
  formatUrl: Nf,
  getStylesFromArray: Hf,
  generateId: Mw,
  random: Ew,
  runFunc: Aw,
  entityDecode: Iw,
  insertTitle: Pw,
  isLabelCoordinateInPath: Uf,
  parseFontSize: pa,
  InitIDGenerator: Rw
}, Nw = /* @__PURE__ */ p(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), dr = /* @__PURE__ */ p(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), AB = /* @__PURE__ */ p((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: n
}, a) => a || `${i ? `${i}_` : ""}${e}_${t}_${r}${n ? `_${n}` : ""}`, "getEdgeId");
function Rt(e) {
  return e ?? null;
}
p(Rt, "handleUndefinedAttr");
function Uf(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), n = t.replace(
    /(\d+\.\d+)/g,
    (a) => Math.round(parseFloat(a)).toString()
  );
  return n.includes(r.toString()) || n.includes(i.toString());
}
p(Uf, "isLabelCoordinateInPath");
const zw = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), Hn = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Gf = Object.freeze({
  ...zw,
  ...Hn
}), Ww = Object.freeze({
  ...Gf,
  body: "",
  hidden: !1
}), qw = Object.freeze({
  width: null,
  height: null
}), Hw = Object.freeze({
  ...qw,
  ...Hn
}), jw = (e, t, r, i = "") => {
  const n = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3) return null;
    i = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length) return null;
  if (n.length > 1) {
    const o = n.pop(), l = n.pop(), c = {
      provider: n.length > 0 ? n[0] : i,
      prefix: l,
      name: o
    };
    return ja(c) ? c : null;
  }
  const a = n[0], s = a.split("-");
  if (s.length > 1) {
    const o = {
      provider: i,
      prefix: s.shift(),
      name: s.join("-")
    };
    return ja(o) ? o : null;
  }
  if (r && i === "") {
    const o = {
      provider: i,
      prefix: "",
      name: a
    };
    return ja(o, r) ? o : null;
  }
  return null;
}, ja = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function Yw(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function ic(e, t) {
  const r = Yw(e, t);
  for (const i in Ww) i in Hn ? i in e && !(i in r) && (r[i] = Hn[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function Uw(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function a(s) {
    if (r[s]) return n[s] = [];
    if (!(s in n)) {
      n[s] = null;
      const o = i[s] && i[s].parent, l = o && a(o);
      l && (n[s] = [o].concat(l));
    }
    return n[s];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(a), n;
}
function nc(e, t, r) {
  const i = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null);
  let a = {};
  function s(o) {
    a = ic(i[o] || n[o], a);
  }
  return s(t), r.forEach(s), ic(e, a);
}
function Gw(e, t) {
  if (e.icons[t]) return nc(e, t, []);
  const r = Uw(e, [t])[t];
  return r ? nc(e, t, r) : null;
}
const Xw = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Vw = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ac(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split(Xw);
  if (i === null || !i.length) return e;
  const n = [];
  let a = i.shift(), s = Vw.test(a);
  for (; ; ) {
    if (s) {
      const o = parseFloat(a);
      isNaN(o) ? n.push(a) : n.push(Math.ceil(o * t * r) / r);
    } else n.push(a);
    if (a = i.shift(), a === void 0) return n.join("");
    s = !s;
  }
}
function Zw(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const n = e.indexOf(">", i), a = e.indexOf("</" + t);
    if (n === -1 || a === -1) break;
    const s = e.indexOf(">", a);
    if (s === -1) break;
    r += e.slice(n + 1, a).trim(), e = e.slice(0, i).trim() + e.slice(s + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function Kw(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function Qw(e, t, r) {
  const i = Zw(e);
  return Kw(i.defs, t + i.content + r);
}
const Jw = (e) => e === "unset" || e === "undefined" || e === "none";
function tk(e, t) {
  const r = {
    ...Gf,
    ...e
  }, i = {
    ...Hw,
    ...t
  }, n = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let a = r.body;
  [r, i].forEach((m) => {
    const y = [], x = m.hFlip, b = m.vFlip;
    let C = m.rotate;
    x ? b ? C += 2 : (y.push("translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"), y.push("scale(-1 1)"), n.top = n.left = 0) : b && (y.push("translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"), y.push("scale(1 -1)"), n.top = n.left = 0);
    let v;
    switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
      case 1:
        v = n.height / 2 + n.top, y.unshift("rotate(90 " + v.toString() + " " + v.toString() + ")");
        break;
      case 2:
        y.unshift("rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")");
        break;
      case 3:
        v = n.width / 2 + n.left, y.unshift("rotate(-90 " + v.toString() + " " + v.toString() + ")");
        break;
    }
    C % 2 === 1 && (n.left !== n.top && (v = n.left, n.left = n.top, n.top = v), n.width !== n.height && (v = n.width, n.width = n.height, n.height = v)), y.length && (a = Qw(a, '<g transform="' + y.join(" ") + '">', "</g>"));
  });
  const s = i.width, o = i.height, l = n.width, c = n.height;
  let h, u;
  s === null ? (u = o === null ? "1em" : o === "auto" ? c : o, h = ac(u, l / c)) : (h = s === "auto" ? l : s, u = o === null ? ac(h, c / l) : o === "auto" ? c : o);
  const f = {}, d = (m, y) => {
    Jw(y) || (f[m] = y.toString());
  };
  d("width", h), d("height", u);
  const g = [
    n.left,
    n.top,
    l,
    c
  ];
  return f.viewBox = g.join(" "), {
    attributes: f,
    viewBox: g,
    body: a
  };
}
const ek = /\sid="(\S+)"/g, sc = /* @__PURE__ */ new Map();
function rk(e) {
  e = e.replace(/[0-9]+$/, "") || "a";
  const t = sc.get(e) || 0;
  return sc.set(e, t + 1), t ? `${e}${t}` : e;
}
function ik(e) {
  const t = [];
  let r;
  for (; r = ek.exec(e); ) t.push(r[1]);
  if (!t.length) return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((n) => {
    const a = rk(n), s = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"), "$1" + a + i + "$3");
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
function nk(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Eo() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var pr = Eo();
function Xf(e) {
  pr = e;
}
var ki = { exec: () => null };
function ut(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (n, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(qt.caret, "$1"), r = r.replace(n, s), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var ak = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), qt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, sk = /^(?:[ \t]*(?:\n|$))+/, ok = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, lk = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ni = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ck = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, $o = /(?:[*+-]|\d{1,9}[.)])/, Vf = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Zf = ut(Vf).replace(/bull/g, $o).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), hk = ut(Vf).replace(/bull/g, $o).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Fo = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, uk = /^[^\n]+/, Do = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, fk = ut(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Do).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), dk = ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, $o).getRegex(), ga = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Oo = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, pk = ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Oo).replace("tag", ga).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Kf = ut(Fo).replace("hr", Ni).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ga).getRegex(), gk = ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Kf).getRegex(), Ro = { blockquote: gk, code: ok, def: fk, fences: lk, heading: ck, hr: Ni, html: pk, lheading: Zf, list: dk, newline: sk, paragraph: Kf, table: ki, text: uk }, oc = ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ni).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ga).getRegex(), mk = { ...Ro, lheading: hk, table: oc, paragraph: ut(Fo).replace("hr", Ni).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", oc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ga).getRegex() }, yk = { ...Ro, html: ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Oo).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ki, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ut(Fo).replace("hr", Ni).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Zf).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, xk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, bk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Qf = /^( {2,}|\\)\n(?!\s*$)/, Ck = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ma = /[\p{P}\p{S}]/u, Io = /[\s\p{P}\p{S}]/u, Jf = /[^\s\p{P}\p{S}]/u, wk = ut(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Io).getRegex(), td = /(?!~)[\p{P}\p{S}]/u, kk = /(?!~)[\s\p{P}\p{S}]/u, vk = /(?:[^\s\p{P}\p{S}]|~)/u, _k = ut(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ak ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ed = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Sk = ut(ed, "u").replace(/punct/g, ma).getRegex(), Tk = ut(ed, "u").replace(/punct/g, td).getRegex(), rd = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Bk = ut(rd, "gu").replace(/notPunctSpace/g, Jf).replace(/punctSpace/g, Io).replace(/punct/g, ma).getRegex(), Ak = ut(rd, "gu").replace(/notPunctSpace/g, vk).replace(/punctSpace/g, kk).replace(/punct/g, td).getRegex(), Lk = ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Jf).replace(/punctSpace/g, Io).replace(/punct/g, ma).getRegex(), Mk = ut(/\\(punct)/, "gu").replace(/punct/g, ma).getRegex(), Ek = ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), $k = ut(Oo).replace("(?:-->|$)", "-->").getRegex(), Fk = ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", $k).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), jn = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Dk = ut(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", jn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), id = ut(/^!?\[(label)\]\[(ref)\]/).replace("label", jn).replace("ref", Do).getRegex(), nd = ut(/^!?\[(ref)\](?:\[\])?/).replace("ref", Do).getRegex(), Ok = ut("reflink|nolink(?!\\()", "g").replace("reflink", id).replace("nolink", nd).getRegex(), lc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Po = { _backpedal: ki, anyPunctuation: Mk, autolink: Ek, blockSkip: _k, br: Qf, code: bk, del: ki, emStrongLDelim: Sk, emStrongRDelimAst: Bk, emStrongRDelimUnd: Lk, escape: xk, link: Dk, nolink: nd, punctuation: wk, reflink: id, reflinkSearch: Ok, tag: Fk, text: Ck, url: ki }, Rk = { ...Po, link: ut(/^!?\[(label)\]\((.*?)\)/).replace("label", jn).getRegex(), reflink: ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", jn).getRegex() }, Ms = { ...Po, emStrongRDelimAst: Ak, emStrongLDelim: Tk, url: ut(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", lc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: ut(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", lc).getRegex() }, Ik = { ...Ms, br: ut(Qf).replace("{2,}", "*").getRegex(), text: ut(Ms.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, tn = { normal: Ro, gfm: mk, pedantic: yk }, ni = { normal: Po, gfm: Ms, breaks: Ik, pedantic: Rk }, Pk = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, cc = (e) => Pk[e];
function ge(e, t) {
  if (t) {
    if (qt.escapeTest.test(e)) return e.replace(qt.escapeReplace, cc);
  } else if (qt.escapeTestNoEncode.test(e)) return e.replace(qt.escapeReplaceNoEncode, cc);
  return e;
}
function hc(e) {
  try {
    e = encodeURI(e).replace(qt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function uc(e, t) {
  let r = e.replace(qt.findPipe, (a, s, o) => {
    let l = !1, c = s;
    for (; --c >= 0 && o[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = r.split(qt.splitPipe), n = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; n < i.length; n++) i[n] = i[n].trim().replace(qt.slashPipe, "|");
  return i;
}
function ai(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let n = 0;
  for (; n < i && e.charAt(i - n - 1) === t; )
    n++;
  return e.slice(0, i - n);
}
function Nk(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function fc(e, t, r, i, n) {
  let a = t.href, s = t.title || null, o = e[1].replace(n.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: a, title: s, text: o, tokens: i.inlineTokens(o) };
  return i.state.inLink = !1, l;
}
function zk(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let n = i[1];
  return t.split(`
`).map((a) => {
    let s = a.match(r.other.beginningSpace);
    if (s === null) return a;
    let [o] = s;
    return o.length >= n.length ? a.slice(n.length) : a;
  }).join(`
`);
}
var Yn = class {
  options;
  rules;
  lexer;
  constructor(t) {
    this.options = t || pr;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : ai(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], n = zk(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: n };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let n = ai(i, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (i = n.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: ai(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = ai(r[0], `
`).split(`
`), n = "", a = "", s = [];
      for (; i.length > 0; ) {
        let o = !1, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), o = !0;
        else if (!o) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h = l.join(`
`), u = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${h}` : h, a = a ? `${a}
${u}` : u;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, s, !0), this.lexer.state.top = f, i.length === 0) break;
        let d = s.at(-1);
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.blockquote(m);
          s[s.length - 1] = y, n = n.substring(0, n.length - g.raw.length) + y.raw, a = a.substring(0, a.length - g.text.length) + y.text;
          break;
        } else if (d?.type === "list") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.list(m);
          s[s.length - 1] = y, n = n.substring(0, n.length - d.raw.length) + y.raw, a = a.substring(0, a.length - g.raw.length) + y.raw, i = m.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: s, text: a };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), n = i.length > 1, a = { type: "list", raw: "", ordered: n, start: n ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = n ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = n ? i : "[*+-]");
      let s = this.rules.other.listItemRegex(i), o = !1;
      for (; t; ) {
        let c = !1, h = "", u = "";
        if (!(r = s.exec(t)) || this.rules.block.hr.test(t)) break;
        h = r[0], t = t.substring(h.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), d = t.split(`
`, 1)[0], g = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = f.trimStart()) : g ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = f.slice(m), m += r[1].length), g && this.rules.other.blankLine.test(d) && (h += d + `
`, t = t.substring(d.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(m), C = this.rules.other.hrRegex(m), v = this.rules.other.fencesBeginRegex(m), k = this.rules.other.headingBeginRegex(m), A = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let S = t.split(`
`, 1)[0], D;
            if (d = S, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), D = d) : D = d.replace(this.rules.other.tabCharGlobal, "    "), v.test(d) || k.test(d) || A.test(d) || b.test(d) || C.test(d)) break;
            if (D.search(this.rules.other.nonSpaceChar) >= m || !d.trim()) u += `
` + D.slice(m);
            else {
              if (g || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(f) || k.test(f) || C.test(f)) break;
              u += `
` + d;
            }
            !g && !d.trim() && (g = !0), h += S + `
`, t = t.substring(S.length + 1), f = D.slice(m);
          }
        }
        a.loose || (o ? a.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (o = !0));
        let y = null, x;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(u), y && (x = y[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), a.items.push({ type: "list_item", raw: h, task: !!y, checked: x, loose: !1, text: u, tokens: [] }), a.raw += h;
      }
      let l = a.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      a.raw = a.raw.trimEnd();
      for (let c = 0; c < a.items.length; c++) if (this.lexer.state.top = !1, a.items[c].tokens = this.lexer.blockTokens(a.items[c].text, []), !a.loose) {
        let h = a.items[c].tokens.filter((f) => f.type === "space"), u = h.length > 0 && h.some((f) => this.rules.other.anyLine.test(f.raw));
        a.loose = u;
      }
      if (a.loose) for (let c = 0; c < a.items.length; c++) a.items[c].loose = !0;
      return a;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: n, title: a };
    }
  }
  table(t) {
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = uc(r[1]), n = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = r[3]?.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < i.length; o++) s.header.push({ text: i[o], tokens: this.lexer.inline(i[o]), header: !0, align: s.align[o] });
      for (let o of a) s.rows.push(uc(o, s.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: s.align[c] })));
      return s;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let s = ai(i.slice(0, -1), "\\");
        if ((i.length - s.length) % 2 === 0) return;
      } else {
        let s = Nk(r[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + s;
          r[2] = r[2].substring(0, s), r[0] = r[0].substring(0, o).trim(), r[3] = "";
        }
      }
      let n = r[2], a = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(n);
        s && (n = s[1], a = s[3]);
      } else a = r[3] ? r[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? n = n.slice(1) : n = n.slice(1, -1)), fc(r, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let n = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = r[n.toLowerCase()];
      if (!a) {
        let s = i[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return fc(i, a, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let n = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!n || n[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let a = [...n[0]].length - 1, s, o, l = a, c = 0, h = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, r = r.slice(-1 * t.length + a); (n = h.exec(r)) != null; ) {
        if (s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !s) continue;
        if (o = [...s].length, n[3] || n[4]) {
          l += o;
          continue;
        } else if ((n[5] || n[6]) && a % 3 && !((a + o) % 3)) {
          c += o;
          continue;
        }
        if (l -= o, l > 0) continue;
        o = Math.min(o, o + l + c);
        let u = [...n[0]][0].length, f = t.slice(0, a + n.index + u + o);
        if (Math.min(a, o) % 2) {
          let g = f.slice(1, -1);
          return { type: "em", raw: f, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let d = f.slice(2, -2);
        return { type: "strong", raw: f, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(i), a = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return n && a && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, n;
      return r[2] === "@" ? (i = r[1], n = "mailto:" + i) : (i = r[1], n = i), { type: "link", raw: r[0], text: i, href: n, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, n;
      if (r[2] === "@") i = r[0], n = "mailto:" + i;
      else {
        let a;
        do
          a = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? "";
        while (a !== r[0]);
        i = r[0], r[1] === "www." ? n = "http://" + r[0] : n = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: n, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, ae = class Es {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || pr, this.options.tokenizer = this.options.tokenizer || new Yn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: qt, block: tn.normal, inline: ni.normal };
    this.options.pedantic ? (r.block = tn.pedantic, r.inline = ni.pedantic) : this.options.gfm && (r.block = tn.gfm, this.options.breaks ? r.inline = ni.breaks : r.inline = ni.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: tn, inline: ni };
  }
  static lex(t, r) {
    return new Es(r).lex(t);
  }
  static lexInline(t, r) {
    return new Es(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(qt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    for (this.options.pedantic && (t = t.replace(qt.tabCharGlobal, "    ").replace(qt.spaceLine, "")); t; ) {
      let n;
      if (this.options.extensions?.block?.some((s) => (n = s.call({ lexer: this }, t, r)) ? (t = t.substring(n.raw.length), r.push(n), !0) : !1)) continue;
      if (n = this.tokenizer.space(t)) {
        t = t.substring(n.raw.length);
        let s = r.at(-1);
        n.raw.length === 1 && s !== void 0 ? s.raw += `
` : r.push(n);
        continue;
      }
      if (n = this.tokenizer.code(t)) {
        t = t.substring(n.raw.length);
        let s = r.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + n.raw, s.text += `
` + n.text, this.inlineQueue.at(-1).src = s.text) : r.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.list(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.html(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.def(t)) {
        t = t.substring(n.raw.length);
        let s = r.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + n.raw, s.text += `
` + n.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title }, r.push(n));
        continue;
      }
      if (n = this.tokenizer.table(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      let a = t;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, o = t.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, o), typeof l == "number" && l >= 0 && (s = Math.min(s, l));
        }), s < 1 / 0 && s >= 0 && (a = t.substring(0, s + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(a))) {
        let s = r.at(-1);
        i && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + n.raw, s.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : r.push(n), i = a.length !== t.length, t = t.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(t)) {
        t = t.substring(n.raw.length);
        let s = r.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + n.raw, s.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : r.push(n);
        continue;
      }
      if (t) {
        let s = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    let i = t, n = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) l.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, n.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let a;
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) a = n[2] ? n[2].length : 0, i = i.slice(0, n.index + a) + "[" + "a".repeat(n[0].length - a - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
    let s = !1, o = "";
    for (; t; ) {
      s || (o = ""), s = !1;
      let l;
      if (this.options.extensions?.inline?.some((h) => (l = h.call({ lexer: this }, t, r)) ? (t = t.substring(l.raw.length), r.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.link(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(l.raw.length);
        let h = r.at(-1);
        l.type === "text" && h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(t, i, o)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.br(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.del(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(t))) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      let c = t;
      if (this.options.extensions?.startInline) {
        let h = 1 / 0, u = t.slice(1), f;
        this.options.extensions.startInline.forEach((d) => {
          f = d.call({ lexer: this }, u), typeof f == "number" && f >= 0 && (h = Math.min(h, f));
        }), h < 1 / 0 && h >= 0 && (c = t.substring(0, h + 1));
      }
      if (l = this.tokenizer.inlineText(c)) {
        t = t.substring(l.raw.length), l.raw.slice(-1) !== "_" && (o = l.raw.slice(-1)), s = !0;
        let h = r.at(-1);
        h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (t) {
        let h = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(h);
          break;
        } else throw new Error(h);
      }
    }
    return r;
  }
}, Un = class {
  options;
  parser;
  constructor(t) {
    this.options = t || pr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    let n = (r || "").match(qt.notSpaceStart)?.[0], a = t.replace(qt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + ge(n) + '">' + (i ? a : ge(a, !0)) + `</code></pre>
` : "<pre><code>" + (i ? a : ge(a, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, n = "";
    for (let o = 0; o < t.items.length; o++) {
      let l = t.items[o];
      n += this.listitem(l);
    }
    let a = r ? "ol" : "ul", s = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + a + s + `>
` + n + "</" + a + `>
`;
  }
  listitem(t) {
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + ge(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: !0 }) : r += i + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let a = 0; a < t.header.length; a++) i += this.tablecell(t.header[a]);
    r += this.tablerow({ text: i });
    let n = "";
    for (let a = 0; a < t.rows.length; a++) {
      let s = t.rows[a];
      i = "";
      for (let o = 0; o < s.length; o++) i += this.tablecell(s[o]);
      n += this.tablerow({ text: i });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${ge(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let n = this.parser.parseInline(i), a = hc(t);
    if (a === null) return n;
    t = a;
    let s = '<a href="' + t + '"';
    return r && (s += ' title="' + ge(r) + '"'), s += ">" + n + "</a>", s;
  }
  image({ href: t, title: r, text: i, tokens: n }) {
    n && (i = this.parser.parseInline(n, this.parser.textRenderer));
    let a = hc(t);
    if (a === null) return ge(i);
    t = a;
    let s = `<img src="${t}" alt="${i}"`;
    return r && (s += ` title="${ge(r)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : ge(t.text);
  }
}, No = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, se = class $s {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || pr, this.options.renderer = this.options.renderer || new Un(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new No();
  }
  static parse(t, r) {
    return new $s(r).parse(t);
  }
  static parseInline(t, r) {
    return new $s(r).parseInline(t);
  }
  parse(t, r = !0) {
    let i = "";
    for (let n = 0; n < t.length; n++) {
      let a = t[n];
      if (this.options.extensions?.renderers?.[a.type]) {
        let o = a, l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          i += l || "";
          continue;
        }
      }
      let s = a;
      switch (s.type) {
        case "space": {
          i += this.renderer.space(s);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(s);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(s);
          continue;
        }
        case "code": {
          i += this.renderer.code(s);
          continue;
        }
        case "table": {
          i += this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          i += this.renderer.list(s);
          continue;
        }
        case "html": {
          i += this.renderer.html(s);
          continue;
        }
        case "def": {
          i += this.renderer.def(s);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let o = s, l = this.renderer.text(o);
          for (; n + 1 < t.length && t[n + 1].type === "text"; ) o = t[++n], l += `
` + this.renderer.text(o);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : i += l;
          continue;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    let i = "";
    for (let n = 0; n < t.length; n++) {
      let a = t[n];
      if (this.options.extensions?.renderers?.[a.type]) {
        let o = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          i += o || "";
          continue;
        }
      }
      let s = a;
      switch (s.type) {
        case "escape": {
          i += r.text(s);
          break;
        }
        case "html": {
          i += r.html(s);
          break;
        }
        case "link": {
          i += r.link(s);
          break;
        }
        case "image": {
          i += r.image(s);
          break;
        }
        case "strong": {
          i += r.strong(s);
          break;
        }
        case "em": {
          i += r.em(s);
          break;
        }
        case "codespan": {
          i += r.codespan(s);
          break;
        }
        case "br": {
          i += r.br(s);
          break;
        }
        case "del": {
          i += r.del(s);
          break;
        }
        case "text": {
          i += r.text(s);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return i;
  }
}, di = class {
  options;
  block;
  constructor(t) {
    this.options = t || pr;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? ae.lex : ae.lexInline;
  }
  provideParser() {
    return this.block ? se.parse : se.parseInline;
  }
}, Wk = class {
  defaults = Eo();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = se;
  Renderer = Un;
  TextRenderer = No;
  Lexer = ae;
  Tokenizer = Yn;
  Hooks = di;
  constructor(...t) {
    this.use(...t);
  }
  walkTokens(t, r) {
    let i = [];
    for (let n of t) switch (i = i.concat(r.call(this, n)), n.type) {
      case "table": {
        let a = n;
        for (let s of a.header) i = i.concat(this.walkTokens(s.tokens, r));
        for (let s of a.rows) for (let o of s) i = i.concat(this.walkTokens(o.tokens, r));
        break;
      }
      case "list": {
        let a = n;
        i = i.concat(this.walkTokens(a.items, r));
        break;
      }
      default: {
        let a = n;
        this.defaults.extensions?.childTokens?.[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((s) => {
          let o = a[s].flat(1 / 0);
          i = i.concat(this.walkTokens(o, r));
        }) : a.tokens && (i = i.concat(this.walkTokens(a.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let n = { ...i };
      if (n.async = this.defaults.async || n.async || !1, i.extensions && (i.extensions.forEach((a) => {
        if (!a.name) throw new Error("extension name required");
        if ("renderer" in a) {
          let s = r.renderers[a.name];
          s ? r.renderers[a.name] = function(...o) {
            let l = a.renderer.apply(this, o);
            return l === !1 && (l = s.apply(this, o)), l;
          } : r.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = r[a.level];
          s ? s.unshift(a.tokenizer) : r[a.level] = [a.tokenizer], a.start && (a.level === "block" ? r.startBlock ? r.startBlock.push(a.start) : r.startBlock = [a.start] : a.level === "inline" && (r.startInline ? r.startInline.push(a.start) : r.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (r.childTokens[a.name] = a.childTokens);
      }), n.extensions = r), i.renderer) {
        let a = this.defaults.renderer || new Un(this.defaults);
        for (let s in i.renderer) {
          if (!(s in a)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, l = i.renderer[o], c = a[o];
          a[o] = (...h) => {
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u || "";
          };
        }
        n.renderer = a;
      }
      if (i.tokenizer) {
        let a = this.defaults.tokenizer || new Yn(this.defaults);
        for (let s in i.tokenizer) {
          if (!(s in a)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, l = i.tokenizer[o], c = a[o];
          a[o] = (...h) => {
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u;
          };
        }
        n.tokenizer = a;
      }
      if (i.hooks) {
        let a = this.defaults.hooks || new di();
        for (let s in i.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, l = i.hooks[o], c = a[o];
          di.passThroughHooks.has(s) ? a[o] = (h) => {
            if (this.defaults.async && di.passThroughHooksRespectAsync.has(s)) return (async () => {
              let f = await l.call(a, h);
              return c.call(a, f);
            })();
            let u = l.call(a, h);
            return c.call(a, u);
          } : a[o] = (...h) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(a, h);
              return f === !1 && (f = await c.apply(a, h)), f;
            })();
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u;
          };
        }
        n.hooks = a;
      }
      if (i.walkTokens) {
        let a = this.defaults.walkTokens, s = i.walkTokens;
        n.walkTokens = function(o) {
          let l = [];
          return l.push(s.call(this, o)), a && (l = l.concat(a.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return ae.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return se.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let n = { ...i }, a = { ...this.defaults, ...n }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && n.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let o = a.hooks ? await a.hooks.preprocess(r) : r, l = await (a.hooks ? await a.hooks.provideLexer() : t ? ae.lex : ae.lexInline)(o, a), c = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(c, a.walkTokens));
        let h = await (a.hooks ? await a.hooks.provideParser() : t ? se.parse : se.parseInline)(c, a);
        return a.hooks ? await a.hooks.postprocess(h) : h;
      })().catch(s);
      try {
        a.hooks && (r = a.hooks.preprocess(r));
        let o = (a.hooks ? a.hooks.provideLexer() : t ? ae.lex : ae.lexInline)(r, a);
        a.hooks && (o = a.hooks.processAllTokens(o)), a.walkTokens && this.walkTokens(o, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? se.parse : se.parseInline)(o, a);
        return a.hooks && (l = a.hooks.postprocess(l)), l;
      } catch (o) {
        return s(o);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let n = "<p>An error occurred:</p><pre>" + ge(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(n) : n;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, lr = new Wk();
function dt(e, t) {
  return lr.parse(e, t);
}
dt.options = dt.setOptions = function(e) {
  return lr.setOptions(e), dt.defaults = lr.defaults, Xf(dt.defaults), dt;
};
dt.getDefaults = Eo;
dt.defaults = pr;
dt.use = function(...e) {
  return lr.use(...e), dt.defaults = lr.defaults, Xf(dt.defaults), dt;
};
dt.walkTokens = function(e, t) {
  return lr.walkTokens(e, t);
};
dt.parseInline = lr.parseInline;
dt.Parser = se;
dt.parser = se.parse;
dt.Renderer = Un;
dt.TextRenderer = No;
dt.Lexer = ae;
dt.lexer = ae.lex;
dt.Tokenizer = Yn;
dt.Hooks = di;
dt.parse = dt;
dt.options;
dt.setOptions;
dt.use;
dt.walkTokens;
dt.parseInline;
se.parse;
ae.lex;
function ad(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = i.reduce(function(o, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? o.concat(c.map(function(h) {
      var u, f;
      return (f = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && f !== void 0 ? f : 0;
    })) : o;
  }, []);
  if (n.length) {
    var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    i = i.map(function(o) {
      return o.replace(a, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var s = i[0];
  return t.forEach(function(o, l) {
    var c = s.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", u = o;
    typeof o == "string" && o.includes(`
`) && (u = String(o).split(`
`).map(function(f, d) {
      return d === 0 ? f : "" + h + f;
    }).join(`
`)), s += u + i[l + 1];
  }), s;
}
var qk = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, Fs = /* @__PURE__ */ new Map(), sd = /* @__PURE__ */ new Map(), Hk = /* @__PURE__ */ p((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (F.debug("Registering icon pack:", t.name), "loader" in t)
      sd.set(t.name, t.loader);
    else if ("icons" in t)
      Fs.set(t.name, t.icons);
    else
      throw F.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), od = /* @__PURE__ */ p(async (e, t) => {
  const r = jw(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let n = Fs.get(i);
  if (!n) {
    const s = sd.get(i);
    if (!s)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      n = { ...await s(), prefix: i }, Fs.set(i, n);
    } catch (o) {
      throw F.error(o), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const a = Gw(n, r.name);
  if (!a)
    throw new Error(`Icon not found: ${e}`);
  return a;
}, "getRegisteredIconData"), jk = /* @__PURE__ */ p(async (e) => {
  try {
    return await od(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), zi = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  try {
    i = await od(e, t?.fallbackPrefix);
  } catch (s) {
    F.error(s), i = qk;
  }
  const n = tk(i, t), a = nk(ik(n.body), {
    ...n.attributes,
    ...r
  });
  return Jt(a, Dt());
}, "getIconSVG");
function ld(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), n = ad(i);
  return t === !1 ? n.replace(/ /g, "&nbsp;") : n;
}
p(ld, "preprocessMarkdown");
function cd(e, t = {}) {
  const r = ld(e, t), i = dt.lexer(r), n = [[]];
  let a = 0;
  function s(o, l = "normal") {
    o.type === "text" ? o.text.split(`
`).forEach((h, u) => {
      u !== 0 && (a++, n.push([])), h.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && n[a].push({ content: f, type: l });
      });
    }) : o.type === "strong" || o.type === "em" ? o.tokens.forEach((c) => {
      s(c, o.type);
    }) : o.type === "html" && n[a].push({ content: o.text, type: "normal" });
  }
  return p(s, "processNode"), i.forEach((o) => {
    o.type === "paragraph" ? o.tokens?.forEach((l) => {
      s(l);
    }) : o.type === "html" ? n[a].push({ content: o.text, type: "normal" }) : n[a].push({ content: o.raw, type: "normal" });
  }), n;
}
p(cd, "markdownToLines");
function hd(e, { markdownAutoWrap: t } = {}) {
  const r = dt.lexer(e);
  function i(n) {
    return n.type === "text" ? t === !1 ? n.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : n.text.replace(/\n */g, "<br/>") : n.type === "strong" ? `<strong>${n.tokens?.map(i).join("")}</strong>` : n.type === "em" ? `<em>${n.tokens?.map(i).join("")}</em>` : n.type === "paragraph" ? `<p>${n.tokens?.map(i).join("")}</p>` : n.type === "space" ? "" : n.type === "html" ? `${n.text}` : n.type === "escape" ? n.text : (F.warn(`Unsupported markdown: ${n.type}`), n.raw);
  }
  return p(i, "output"), r.map(i).join("");
}
p(hd, "markdownToHTML");
function ud(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
p(ud, "splitTextToChars");
function fd(e, t) {
  const r = ud(t.content);
  return zo(e, [], r, t.type);
}
p(fd, "splitWordToFitWidth");
function zo(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [n, ...a] = r, s = [...t, n];
  return e([{ content: s.join(""), type: i }]) ? zo(e, s, a, i) : (t.length === 0 && n && (t.push(n), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
p(zo, "splitWordToFitWidthRecursion");
function dd(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return Gn(e, t);
}
p(dd, "splitLineToFitWidth");
function Gn(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let n = "";
  e[0].content === " " && (n = " ", e.shift());
  const a = e.shift() ?? { content: " ", type: "normal" }, s = [...i];
  if (n !== "" && s.push({ content: n, type: "normal" }), s.push(a), t(s))
    return Gn(e, t, r, s);
  if (i.length > 0)
    r.push(i), e.unshift(a);
  else if (a.content) {
    const [o, l] = fd(t, a);
    r.push([o]), l.content && e.unshift(l);
  }
  return Gn(e, t, r);
}
p(Gn, "splitLineToFitWidthRecursion");
function Ds(e, t) {
  t && e.attr("style", t);
}
p(Ds, "applyStyle");
async function pd(e, t, r, i, n = !1, a = Dt()) {
  const s = e.append("foreignObject");
  s.attr("width", `${10 * r}px`), s.attr("height", `${10 * r}px`);
  const o = s.append("xhtml:div"), l = Rr(t.label) ? await eo(t.label.replace(Hr.lineBreakRegex, `
`), a) : Jt(t.label, a), c = t.isNode ? "nodeLabel" : "edgeLabel", h = o.append("span");
  h.html(l), Ds(h, t.labelStyle), h.attr("class", `${c} ${i}`), Ds(o, t.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", r + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), n && o.attr("class", "labelBkg");
  let u = o.node().getBoundingClientRect();
  return u.width === r && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", r + "px"), u = o.node().getBoundingClientRect()), s.node();
}
p(pd, "addHtmlSpan");
function ya(e, t, r) {
  return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
}
p(ya, "createTspan");
function gd(e, t, r) {
  const i = e.append("text"), n = ya(i, 1, t);
  xa(n, r);
  const a = n.node().getComputedTextLength();
  return i.remove(), a;
}
p(gd, "computeWidthOfText");
function Yk(e, t, r) {
  const i = e.append("text"), n = ya(i, 1, t);
  xa(n, [{ content: r, type: "normal" }]);
  const a = n.node()?.getBoundingClientRect();
  return a && i.remove(), a;
}
p(Yk, "computeDimensionOfText");
function md(e, t, r, i = !1) {
  const a = t.append("g"), s = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), o = a.append("text").attr("y", "-10.1");
  let l = 0;
  for (const c of r) {
    const h = /* @__PURE__ */ p((f) => gd(a, 1.1, f) <= e, "checkWidth"), u = h(c) ? [c] : dd(c, h);
    for (const f of u) {
      const d = ya(o, l, 1.1);
      xa(d, f), l++;
    }
  }
  if (i) {
    const c = o.node().getBBox(), h = 2;
    return s.attr("x", c.x - h).attr("y", c.y - h).attr("width", c.width + 2 * h).attr("height", c.height + 2 * h), a.node();
  } else
    return o.node();
}
p(md, "createFormattedText");
function xa(e, t) {
  e.text(""), t.forEach((r, i) => {
    const n = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? n.text(r.content) : n.text(" " + r.content);
  });
}
p(xa, "updateTextContentAndStyles");
async function yd(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (n, a, s) => (r.push(
    (async () => {
      const o = `${a}:${s}`;
      return await jk(o) ? await zi(o, void 0, { class: "label-icon" }) : `<i class='${Jt(n, t).replace(":", " ")}'></i>`;
    })()
  ), n));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
p(yd, "replaceIconSubstring");
var He = /* @__PURE__ */ p(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: n = "",
  useHtmlLabels: a = !0,
  isNode: s = !0,
  width: o = 200,
  addSvgBackground: l = !1
} = {}, c) => {
  if (F.debug(
    "XYZ createText",
    t,
    r,
    i,
    n,
    a,
    s,
    "addSvgBackground: ",
    l
  ), a) {
    const h = hd(t, c), u = await yd(dr(h), c), f = t.replace(/\\\\/g, "\\"), d = {
      isNode: s,
      label: Rr(t) ? f : u,
      labelStyle: r.replace("fill:", "color:")
    };
    return await pd(e, d, o, n, l, c);
  } else {
    const h = t.replace(/<br\s*\/?>/g, "<br/>"), u = cd(h.replace("<br>", "<br/>"), c), f = md(
      o,
      e,
      u,
      t ? l : !1
    );
    if (s) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const d = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ht(f).attr("style", d);
    } else {
      const d = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      ht(f).select("rect").attr("style", d.replace(/background:/g, "fill:"));
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ht(f).select("text").attr("style", g);
    }
    return f;
  }
}, "createText");
function Ya(e, t, r) {
  if (e && e.length) {
    const [i, n] = t, a = Math.PI / 180 * r, s = Math.cos(a), o = Math.sin(a);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * s - (h - n) * o + i, l[1] = (c - i) * o + (h - n) * s + n;
    }
  }
}
function Uk(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function Gk(e, t, r, i = 1) {
  const n = r, a = Math.max(t, 0.1), s = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, o = [0, 0];
  if (n) for (const c of s) Ya(c, o, n);
  const l = (function(c, h, u) {
    const f = [];
    for (const b of c) {
      const C = [...b];
      Uk(C[0], C[C.length - 1]) || C.push([C[0][0], C[0][1]]), C.length > 2 && f.push(C);
    }
    const d = [];
    h = Math.max(h, 0.1);
    const g = [];
    for (const b of f) for (let C = 0; C < b.length - 1; C++) {
      const v = b[C], k = b[C + 1];
      if (v[1] !== k[1]) {
        const A = Math.min(v[1], k[1]);
        g.push({ ymin: A, ymax: Math.max(v[1], k[1]), x: A === v[1] ? v[0] : k[0], islope: (k[0] - v[0]) / (k[1] - v[1]) });
      }
    }
    if (g.sort(((b, C) => b.ymin < C.ymin ? -1 : b.ymin > C.ymin ? 1 : b.x < C.x ? -1 : b.x > C.x ? 1 : b.ymax === C.ymax ? 0 : (b.ymax - C.ymax) / Math.abs(b.ymax - C.ymax))), !g.length) return d;
    let m = [], y = g[0].ymin, x = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let C = 0; C < g.length && !(g[C].ymin > y); C++) b = C;
        g.splice(0, b + 1).forEach(((C) => {
          m.push({ s: y, edge: C });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= y))), m.sort(((b, C) => b.edge.x === C.edge.x ? 0 : (b.edge.x - C.edge.x) / Math.abs(b.edge.x - C.edge.x))), (u !== 1 || x % h == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const C = b + 1;
        if (C >= m.length) break;
        const v = m[b].edge, k = m[C].edge;
        d.push([[Math.round(v.x), y], [Math.round(k.x), y]]);
      }
      y += u, m.forEach(((b) => {
        b.edge.x = b.edge.x + u * b.edge.islope;
      })), x++;
    }
    return d;
  })(s, a, i);
  if (n) {
    for (const c of s) Ya(c, o, -n);
    (function(c, h, u) {
      const f = [];
      c.forEach(((d) => f.push(...d))), Ya(f, h, u);
    })(l, o, -n);
  }
  return l;
}
function Wi(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let n = t.hachureGap;
  n < 0 && (n = 4 * t.strokeWidth), n = Math.round(Math.max(n, 0.1));
  let a = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (a = n), Gk(e, n, i, a || 1);
}
class Wo {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = Wi(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const n of t) i.push(...this.helper.doubleLineOps(n[0][0], n[0][1], n[1][0], n[1][1], r));
    return i;
  }
}
function ba(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class Xk extends Wo {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const n = Wi(t, Object.assign({}, r, { hachureGap: i })), a = Math.PI / 180 * r.hachureAngle, s = [], o = 0.5 * i * Math.cos(a), l = 0.5 * i * Math.sin(a);
    for (const [c, h] of n) ba([c, h]) && s.push([[c[0] - o, c[1] + l], [...h]], [[c[0] + o, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(s, r) };
  }
}
class Vk extends Wo {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), n = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), a = this._fillPolygons(t, n);
    return i.ops = i.ops.concat(a.ops), i;
  }
}
class Zk {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Wi(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let n = r.hachureGap;
    n < 0 && (n = 4 * r.strokeWidth), n = Math.max(n, 0.1);
    let a = r.fillWeight;
    a < 0 && (a = r.strokeWidth / 2);
    const s = n / 4;
    for (const o of t) {
      const l = ba(o), c = l / n, h = Math.ceil(c) - 1, u = l - h * n, f = (o[0][0] + o[1][0]) / 2 - n / 4, d = Math.min(o[0][1], o[1][1]);
      for (let g = 0; g < h; g++) {
        const m = d + u + g * n, y = f - s + 2 * Math.random() * s, x = m - s + 2 * Math.random() * s, b = this.helper.ellipse(y, x, a, a, r);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class Kk {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Wi(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, n = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, a = [];
    return t.forEach(((s) => {
      const o = ba(s), l = Math.floor(o / (i + n)), c = (o + n - l * (i + n)) / 2;
      let h = s[0], u = s[1];
      h[0] > u[0] && (h = s[1], u = s[0]);
      const f = Math.atan((u[1] - h[1]) / (u[0] - h[0]));
      for (let d = 0; d < l; d++) {
        const g = d * (i + n), m = g + i, y = [h[0] + g * Math.cos(f) + c * Math.cos(f), h[1] + g * Math.sin(f) + c * Math.sin(f)], x = [h[0] + m * Math.cos(f) + c * Math.cos(f), h[1] + m * Math.sin(f) + c * Math.sin(f)];
        a.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r));
      }
    })), a;
  }
}
class Qk {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, n = r.zigzagOffset < 0 ? i : r.zigzagOffset, a = Wi(t, r = Object.assign({}, r, { hachureGap: i + n }));
    return { type: "fillSketch", ops: this.zigzagLines(a, n, r) };
  }
  zigzagLines(t, r, i) {
    const n = [];
    return t.forEach(((a) => {
      const s = ba(a), o = Math.round(s / (2 * r));
      let l = a[0], c = a[1];
      l[0] > c[0] && (l = a[1], c = a[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < o; u++) {
        const f = 2 * u * r, d = 2 * (u + 1) * r, g = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], y = [l[0] + d * Math.cos(h), l[1] + d * Math.sin(h)], x = [m[0] + g * Math.cos(h + Math.PI / 4), m[1] + g * Math.sin(h + Math.PI / 4)];
        n.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], i), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], i));
      }
    })), n;
  }
}
const Ut = {};
class Jk {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const tv = 0, Ua = 1, dc = 2, en = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Ga(e, t) {
  return e.type === t;
}
function qo(e) {
  const t = [], r = (function(s) {
    const o = new Array();
    for (; s !== ""; ) if (s.match(/^([ \t\r\n,]+)/)) s = s.substr(RegExp.$1.length);
    else if (s.match(/^([aAcChHlLmMqQsStTvVzZ])/)) o[o.length] = { type: tv, text: RegExp.$1 }, s = s.substr(RegExp.$1.length);
    else {
      if (!s.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      o[o.length] = { type: Ua, text: `${parseFloat(RegExp.$1)}` }, s = s.substr(RegExp.$1.length);
    }
    return o[o.length] = { type: dc, text: "" }, o;
  })(e);
  let i = "BOD", n = 0, a = r[n];
  for (; !Ga(a, dc); ) {
    let s = 0;
    const o = [];
    if (i === "BOD") {
      if (a.text !== "M" && a.text !== "m") return qo("M0,0" + e);
      n++, s = en[a.text], i = a.text;
    } else Ga(a, Ua) ? s = en[i] : (n++, s = en[a.text], i = a.text);
    if (!(n + s < r.length)) throw new Error("Path data ended short");
    for (let l = n; l < n + s; l++) {
      const c = r[l];
      if (!Ga(c, Ua)) throw new Error("Param not a number: " + i + "," + c.text);
      o[o.length] = +c.text;
    }
    if (typeof en[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: o };
      t.push(l), n += s, a = r[n], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function xd(e) {
  let t = 0, r = 0, i = 0, n = 0;
  const a = [];
  for (const { key: s, data: o } of e) switch (s) {
    case "M":
      a.push({ key: "M", data: [...o] }), [t, r] = o, [i, n] = o;
      break;
    case "m":
      t += o[0], r += o[1], a.push({ key: "M", data: [t, r] }), i = t, n = r;
      break;
    case "L":
      a.push({ key: "L", data: [...o] }), [t, r] = o;
      break;
    case "l":
      t += o[0], r += o[1], a.push({ key: "L", data: [t, r] });
      break;
    case "C":
      a.push({ key: "C", data: [...o] }), t = o[4], r = o[5];
      break;
    case "c": {
      const l = o.map(((c, h) => h % 2 ? c + r : c + t));
      a.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      a.push({ key: "Q", data: [...o] }), t = o[2], r = o[3];
      break;
    case "q": {
      const l = o.map(((c, h) => h % 2 ? c + r : c + t));
      a.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      a.push({ key: "A", data: [...o] }), t = o[5], r = o[6];
      break;
    case "a":
      t += o[5], r += o[6], a.push({ key: "A", data: [o[0], o[1], o[2], o[3], o[4], t, r] });
      break;
    case "H":
      a.push({ key: "H", data: [...o] }), t = o[0];
      break;
    case "h":
      t += o[0], a.push({ key: "H", data: [t] });
      break;
    case "V":
      a.push({ key: "V", data: [...o] }), r = o[0];
      break;
    case "v":
      r += o[0], a.push({ key: "V", data: [r] });
      break;
    case "S":
      a.push({ key: "S", data: [...o] }), t = o[2], r = o[3];
      break;
    case "s": {
      const l = o.map(((c, h) => h % 2 ? c + r : c + t));
      a.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      a.push({ key: "T", data: [...o] }), t = o[0], r = o[1];
      break;
    case "t":
      t += o[0], r += o[1], a.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      a.push({ key: "Z", data: [] }), t = i, r = n;
  }
  return a;
}
function bd(e) {
  const t = [];
  let r = "", i = 0, n = 0, a = 0, s = 0, o = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, n] = h, [a, s] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], n = h[5], o = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, n] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, n] });
        break;
      case "V":
        n = h[0], t.push({ key: "L", data: [i, n] });
        break;
      case "S": {
        let u = 0, f = 0;
        r === "C" || r === "S" ? (u = i + (i - o), f = n + (n - l)) : (u = i, f = n), t.push({ key: "C", data: [u, f, ...h] }), o = h[0], l = h[1], i = h[2], n = h[3];
        break;
      }
      case "T": {
        const [u, f] = h;
        let d = 0, g = 0;
        r === "Q" || r === "T" ? (d = i + (i - o), g = n + (n - l)) : (d = i, g = n);
        const m = i + 2 * (d - i) / 3, y = n + 2 * (g - n) / 3, x = u + 2 * (d - u) / 3, b = f + 2 * (g - f) / 3;
        t.push({ key: "C", data: [m, y, x, b, u, f] }), o = d, l = g, i = u, n = f;
        break;
      }
      case "Q": {
        const [u, f, d, g] = h, m = i + 2 * (u - i) / 3, y = n + 2 * (f - n) / 3, x = d + 2 * (u - d) / 3, b = g + 2 * (f - g) / 3;
        t.push({ key: "C", data: [m, y, x, b, d, g] }), o = u, l = f, i = d, n = g;
        break;
      }
      case "A": {
        const u = Math.abs(h[0]), f = Math.abs(h[1]), d = h[2], g = h[3], m = h[4], y = h[5], x = h[6];
        u === 0 || f === 0 ? (t.push({ key: "C", data: [i, n, y, x, y, x] }), i = y, n = x) : (i !== y || n !== x) && (Cd(i, n, y, x, u, f, d, g, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), i = y, n = x);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = a, n = s;
    }
    r = c;
  }
  return t;
}
function si(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function Cd(e, t, r, i, n, a, s, o, l, c) {
  const h = (u = s, Math.PI * u / 180);
  var u;
  let f = [], d = 0, g = 0, m = 0, y = 0;
  if (c) [d, g, m, y] = c;
  else {
    [e, t] = si(e, t, -h), [r, i] = si(r, i, -h);
    const R = (e - r) / 2, B = (t - i) / 2;
    let L = R * R / (n * n) + B * B / (a * a);
    L > 1 && (L = Math.sqrt(L), n *= L, a *= L);
    const T = n * n, $ = a * a, M = T * $ - T * B * B - $ * R * R, q = T * B * B + $ * R * R, X = (o === l ? -1 : 1) * Math.sqrt(Math.abs(M / q));
    m = X * n * B / a + (e + r) / 2, y = X * -a * R / n + (t + i) / 2, d = Math.asin(parseFloat(((t - y) / a).toFixed(9))), g = Math.asin(parseFloat(((i - y) / a).toFixed(9))), e < m && (d = Math.PI - d), r < m && (g = Math.PI - g), d < 0 && (d = 2 * Math.PI + d), g < 0 && (g = 2 * Math.PI + g), l && d > g && (d -= 2 * Math.PI), !l && g > d && (g -= 2 * Math.PI);
  }
  let x = g - d;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    const R = g, B = r, L = i;
    g = l && g > d ? d + 120 * Math.PI / 180 * 1 : d + 120 * Math.PI / 180 * -1, f = Cd(r = m + n * Math.cos(g), i = y + a * Math.sin(g), B, L, n, a, s, 0, l, [g, R, m, y]);
  }
  x = g - d;
  const b = Math.cos(d), C = Math.sin(d), v = Math.cos(g), k = Math.sin(g), A = Math.tan(x / 4), S = 4 / 3 * n * A, D = 4 / 3 * a * A, I = [e, t], O = [e + S * C, t - D * b], E = [r + S * k, i - D * v], N = [r, i];
  if (O[0] = 2 * I[0] - O[0], O[1] = 2 * I[1] - O[1], c) return [O, E, N].concat(f);
  {
    f = [O, E, N].concat(f);
    const R = [];
    for (let B = 0; B < f.length; B += 3) {
      const L = si(f[B][0], f[B][1], h), T = si(f[B + 1][0], f[B + 1][1], h), $ = si(f[B + 2][0], f[B + 2][1], h);
      R.push([L[0], L[1], T[0], T[1], $[0], $[1]]);
    }
    return R;
  }
}
const ev = { randOffset: function(e, t) {
  return nt(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return Xn(e, t, r);
}, ellipse: function(e, t, r, i, n) {
  const a = kd(r, i, n);
  return Os(e, t, n, a).opset;
}, doubleLineOps: function(e, t, r, i, n) {
  return ze(e, t, r, i, n, !0);
} };
function wd(e, t, r, i, n) {
  return { type: "path", ops: ze(e, t, r, i, n) };
}
function yn(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const n = [];
    for (let a = 0; a < i - 1; a++) n.push(...ze(e[a][0], e[a][1], e[a + 1][0], e[a + 1][1], r));
    return t && n.push(...ze(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: n };
  }
  return i === 2 ? wd(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function rv(e, t, r, i, n) {
  return (function(a, s) {
    return yn(a, !0, s);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], n);
}
function pc(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = rn(r[0], 1 * (1 + 0.2 * t.roughness), t), n = t.disableMultiStroke ? [] : rn(r[0], 1.5 * (1 + 0.22 * t.roughness), yc(t));
    for (let a = 1; a < r.length; a++) {
      const s = r[a];
      if (s.length) {
        const o = rn(s, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : rn(s, 1.5 * (1 + 0.22 * t.roughness), yc(t));
        for (const c of o) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && n.push(c);
      }
    }
    return { type: "path", ops: i.concat(n) };
  }
  return { type: "path", ops: [] };
}
function kd(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), n = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), a = 2 * Math.PI / n;
  let s = Math.abs(e / 2), o = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return s += nt(s * l, r), o += nt(o * l, r), { increment: a, rx: s, ry: o };
}
function Os(e, t, r, i) {
  const [n, a] = xc(i.increment, e, t, i.rx, i.ry, 1, i.increment * Xn(0.1, Xn(0.4, 1, r), r), r);
  let s = Vn(n, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [o] = xc(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = Vn(o, null, r);
    s = s.concat(l);
  }
  return { estimatedPoints: a, opset: { type: "path", ops: s } };
}
function gc(e, t, r, i, n, a, s, o, l) {
  const c = e, h = t;
  let u = Math.abs(r / 2), f = Math.abs(i / 2);
  u += nt(0.01 * u, l), f += nt(0.01 * f, l);
  let d = n, g = a;
  for (; d < 0; ) d += 2 * Math.PI, g += 2 * Math.PI;
  g - d > 2 * Math.PI && (d = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - d) / 2), x = bc(y, c, h, u, f, d, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = bc(y, c, h, u, f, d, g, 1.5, l);
    x.push(...b);
  }
  return s && (o ? x.push(...ze(c, h, c + u * Math.cos(d), h + f * Math.sin(d), l), ...ze(c, h, c + u * Math.cos(g), h + f * Math.sin(g), l)) : x.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + u * Math.cos(d), h + f * Math.sin(d)] })), { type: "path", ops: x };
}
function mc(e, t) {
  const r = bd(xd(qo(e))), i = [];
  let n = [0, 0], a = [0, 0];
  for (const { key: s, data: o } of r) switch (s) {
    case "M":
      a = [o[0], o[1]], n = [o[0], o[1]];
      break;
    case "L":
      i.push(...ze(a[0], a[1], o[0], o[1], t)), a = [o[0], o[1]];
      break;
    case "C": {
      const [l, c, h, u, f, d] = o;
      i.push(...iv(l, c, h, u, f, d, a, t)), a = [f, d];
      break;
    }
    case "Z":
      i.push(...ze(a[0], a[1], n[0], n[1], t)), a = [n[0], n[1]];
  }
  return { type: "path", ops: i };
}
function Xa(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const n = t.maxRandomnessOffset || 0, a = i.length;
    if (a > 2) {
      r.push({ op: "move", data: [i[0][0] + nt(n, t), i[0][1] + nt(n, t)] });
      for (let s = 1; s < a; s++) r.push({ op: "lineTo", data: [i[s][0] + nt(n, t), i[s][1] + nt(n, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Cr(e, t) {
  return (function(r, i) {
    let n = r.fillStyle || "hachure";
    if (!Ut[n]) switch (n) {
      case "zigzag":
        Ut[n] || (Ut[n] = new Xk(i));
        break;
      case "cross-hatch":
        Ut[n] || (Ut[n] = new Vk(i));
        break;
      case "dots":
        Ut[n] || (Ut[n] = new Zk(i));
        break;
      case "dashed":
        Ut[n] || (Ut[n] = new Kk(i));
        break;
      case "zigzag-line":
        Ut[n] || (Ut[n] = new Qk(i));
        break;
      default:
        n = "hachure", Ut[n] || (Ut[n] = new Wo(i));
    }
    return Ut[n];
  })(t, ev).fillPolygons(e, t);
}
function yc(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function vd(e) {
  return e.randomizer || (e.randomizer = new Jk(e.seed || 0)), e.randomizer.next();
}
function Xn(e, t, r, i = 1) {
  return r.roughness * i * (vd(r) * (t - e) + e);
}
function nt(e, t, r = 1) {
  return Xn(-e, e, t, r);
}
function ze(e, t, r, i, n, a = !1) {
  const s = a ? n.disableMultiStrokeFill : n.disableMultiStroke, o = Rs(e, t, r, i, n, !0, !1);
  if (s) return o;
  const l = Rs(e, t, r, i, n, !0, !0);
  return o.concat(l);
}
function Rs(e, t, r, i, n, a, s) {
  const o = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(o);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = n.maxRandomnessOffset || 0;
  h * h * 100 > o && (h = l / 10);
  const u = h / 2, f = 0.2 + 0.2 * vd(n);
  let d = n.bowing * n.maxRandomnessOffset * (i - t) / 200, g = n.bowing * n.maxRandomnessOffset * (e - r) / 200;
  d = nt(d, n, c), g = nt(g, n, c);
  const m = [], y = () => nt(u, n, c), x = () => nt(h, n, c), b = n.preserveVertices;
  return s ? m.push({ op: "move", data: [e + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e + (b ? 0 : nt(h, n, c)), t + (b ? 0 : nt(h, n, c))] }), s ? m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + y(), g + t + (i - t) * f + y(), d + e + 2 * (r - e) * f + y(), g + t + 2 * (i - t) * f + y(), r + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + x(), g + t + (i - t) * f + x(), d + e + 2 * (r - e) * f + x(), g + t + 2 * (i - t) * f + x(), r + (b ? 0 : x()), i + (b ? 0 : x())] }), m;
}
function rn(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + nt(t, r), e[0][1] + nt(t, r)]), i.push([e[0][0] + nt(t, r), e[0][1] + nt(t, r)]);
  for (let n = 1; n < e.length; n++) i.push([e[n][0] + nt(t, r), e[n][1] + nt(t, r)]), n === e.length - 1 && i.push([e[n][0] + nt(t, r), e[n][1] + nt(t, r)]);
  return Vn(i, null, r);
}
function Vn(e, t, r) {
  const i = e.length, n = [];
  if (i > 3) {
    const a = [], s = 1 - r.curveTightness;
    n.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let o = 1; o + 2 < i; o++) {
      const l = e[o];
      a[0] = [l[0], l[1]], a[1] = [l[0] + (s * e[o + 1][0] - s * e[o - 1][0]) / 6, l[1] + (s * e[o + 1][1] - s * e[o - 1][1]) / 6], a[2] = [e[o + 1][0] + (s * e[o][0] - s * e[o + 2][0]) / 6, e[o + 1][1] + (s * e[o][1] - s * e[o + 2][1]) / 6], a[3] = [e[o + 1][0], e[o + 1][1]], n.push({ op: "bcurveTo", data: [a[1][0], a[1][1], a[2][0], a[2][1], a[3][0], a[3][1]] });
    }
  } else i === 3 ? (n.push({ op: "move", data: [e[1][0], e[1][1]] }), n.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && n.push(...Rs(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return n;
}
function xc(e, t, r, i, n, a, s, o) {
  const l = [], c = [];
  if (o.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + n * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const u = [t + i * Math.cos(h), r + n * Math.sin(h)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r + n * Math.sin(0)]), c.push([t + i * Math.cos(e), r + n * Math.sin(e)]);
  } else {
    const h = nt(0.5, o) - Math.PI / 2;
    c.push([nt(a, o) + t + 0.9 * i * Math.cos(h - e), nt(a, o) + r + 0.9 * n * Math.sin(h - e)]);
    const u = 2 * Math.PI + h - 0.01;
    for (let f = h; f < u; f += e) {
      const d = [nt(a, o) + t + i * Math.cos(f), nt(a, o) + r + n * Math.sin(f)];
      l.push(d), c.push(d);
    }
    c.push([nt(a, o) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * s), nt(a, o) + r + n * Math.sin(h + 2 * Math.PI + 0.5 * s)]), c.push([nt(a, o) + t + 0.98 * i * Math.cos(h + s), nt(a, o) + r + 0.98 * n * Math.sin(h + s)]), c.push([nt(a, o) + t + 0.9 * i * Math.cos(h + 0.5 * s), nt(a, o) + r + 0.9 * n * Math.sin(h + 0.5 * s)]);
  }
  return [c, l];
}
function bc(e, t, r, i, n, a, s, o, l) {
  const c = a + nt(0.1, l), h = [];
  h.push([nt(o, l) + t + 0.9 * i * Math.cos(c - e), nt(o, l) + r + 0.9 * n * Math.sin(c - e)]);
  for (let u = c; u <= s; u += e) h.push([nt(o, l) + t + i * Math.cos(u), nt(o, l) + r + n * Math.sin(u)]);
  return h.push([t + i * Math.cos(s), r + n * Math.sin(s)]), h.push([t + i * Math.cos(s), r + n * Math.sin(s)]), Vn(h, null, l);
}
function iv(e, t, r, i, n, a, s, o) {
  const l = [], c = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const u = o.disableMultiStroke ? 1 : 2, f = o.preserveVertices;
  for (let d = 0; d < u; d++) d === 0 ? l.push({ op: "move", data: [s[0], s[1]] }) : l.push({ op: "move", data: [s[0] + (f ? 0 : nt(c[0], o)), s[1] + (f ? 0 : nt(c[0], o))] }), h = f ? [n, a] : [n + nt(c[d], o), a + nt(c[d], o)], l.push({ op: "bcurveTo", data: [e + nt(c[d], o), t + nt(c[d], o), r + nt(c[d], o), i + nt(c[d], o), h[0], h[1]] });
  return l;
}
function oi(e) {
  return [...e];
}
function Cc(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(oi(e[0]), oi(e[1]), oi(e[2]), oi(e[2]));
  else {
    const n = [];
    n.push(e[0], e[0]);
    for (let o = 1; o < e.length; o++) n.push(e[o]), o === e.length - 1 && n.push(e[o]);
    const a = [], s = 1 - t;
    i.push(oi(n[0]));
    for (let o = 1; o + 2 < n.length; o++) {
      const l = n[o];
      a[0] = [l[0], l[1]], a[1] = [l[0] + (s * n[o + 1][0] - s * n[o - 1][0]) / 6, l[1] + (s * n[o + 1][1] - s * n[o - 1][1]) / 6], a[2] = [n[o + 1][0] + (s * n[o][0] - s * n[o + 2][0]) / 6, n[o + 1][1] + (s * n[o][1] - s * n[o + 2][1]) / 6], a[3] = [n[o + 1][0], n[o + 1][1]], i.push(a[1], a[2], a[3]);
    }
  }
  return i;
}
function xn(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function nv(e, t, r) {
  const i = xn(t, r);
  if (i === 0) return xn(e, t);
  let n = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return n = Math.max(0, Math.min(1, n)), xn(e, Ze(t, r, n));
}
function Ze(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function Is(e, t, r, i) {
  const n = i || [];
  if ((function(o, l) {
    const c = o[l + 0], h = o[l + 1], u = o[l + 2], f = o[l + 3];
    let d = 3 * h[0] - 2 * c[0] - f[0];
    d *= d;
    let g = 3 * h[1] - 2 * c[1] - f[1];
    g *= g;
    let m = 3 * u[0] - 2 * f[0] - c[0];
    m *= m;
    let y = 3 * u[1] - 2 * f[1] - c[1];
    return y *= y, d < m && (d = m), g < y && (g = y), d + g;
  })(e, t) < r) {
    const o = e[t + 0];
    n.length ? (a = n[n.length - 1], s = o, Math.sqrt(xn(a, s)) > 1 && n.push(o)) : n.push(o), n.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], u = e[t + 3], f = Ze(l, c, 0.5), d = Ze(c, h, 0.5), g = Ze(h, u, 0.5), m = Ze(f, d, 0.5), y = Ze(d, g, 0.5), x = Ze(m, y, 0.5);
    Is([l, f, m, x], 0, r, n), Is([x, y, g, u], 0, r, n);
  }
  var a, s;
  return n;
}
function av(e, t) {
  return Zn(e, 0, e.length, t);
}
function Zn(e, t, r, i, n) {
  const a = n || [], s = e[t], o = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const u = nv(e[h], s, o);
    u > l && (l = u, c = h);
  }
  return Math.sqrt(l) > i ? (Zn(e, t, c + 1, i, a), Zn(e, c, r, i, a)) : (a.length || a.push(s), a.push(o)), a;
}
function Va(e, t = 0.15, r) {
  const i = [], n = (e.length - 1) / 3;
  for (let a = 0; a < n; a++)
    Is(e, 3 * a, t, i);
  return r && r > 0 ? Zn(i, 0, i.length, r) : i;
}
const Vt = "none";
class Kn {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, n, a) {
    const s = this._o(a);
    return this._d("line", [wd(t, r, i, n, s)], s);
  }
  rectangle(t, r, i, n, a) {
    const s = this._o(a), o = [], l = rv(t, r, i, n, s);
    if (s.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + n], [t, r + n]];
      s.fillStyle === "solid" ? o.push(Xa([c], s)) : o.push(Cr([c], s));
    }
    return s.stroke !== Vt && o.push(l), this._d("rectangle", o, s);
  }
  ellipse(t, r, i, n, a) {
    const s = this._o(a), o = [], l = kd(i, n, s), c = Os(t, r, s, l);
    if (s.fill) if (s.fillStyle === "solid") {
      const h = Os(t, r, s, l).opset;
      h.type = "fillPath", o.push(h);
    } else o.push(Cr([c.estimatedPoints], s));
    return s.stroke !== Vt && o.push(c.opset), this._d("ellipse", o, s);
  }
  circle(t, r, i, n) {
    const a = this.ellipse(t, r, i, i, n);
    return a.shape = "circle", a;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [yn(t, !1, i)], i);
  }
  arc(t, r, i, n, a, s, o = !1, l) {
    const c = this._o(l), h = [], u = gc(t, r, i, n, a, s, o, !0, c);
    if (o && c.fill) if (c.fillStyle === "solid") {
      const f = Object.assign({}, c);
      f.disableMultiStroke = !0;
      const d = gc(t, r, i, n, a, s, !0, !1, f);
      d.type = "fillPath", h.push(d);
    } else h.push((function(f, d, g, m, y, x, b) {
      const C = f, v = d;
      let k = Math.abs(g / 2), A = Math.abs(m / 2);
      k += nt(0.01 * k, b), A += nt(0.01 * A, b);
      let S = y, D = x;
      for (; S < 0; ) S += 2 * Math.PI, D += 2 * Math.PI;
      D - S > 2 * Math.PI && (S = 0, D = 2 * Math.PI);
      const I = (D - S) / b.curveStepCount, O = [];
      for (let E = S; E <= D; E += I) O.push([C + k * Math.cos(E), v + A * Math.sin(E)]);
      return O.push([C + k * Math.cos(D), v + A * Math.sin(D)]), O.push([C, v]), Cr([O], b);
    })(t, r, i, n, a, s, c));
    return c.stroke !== Vt && h.push(u), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), n = [], a = pc(t, i);
    if (i.fill && i.fill !== Vt) if (i.fillStyle === "solid") {
      const s = pc(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(s.ops) });
    } else {
      const s = [], o = t;
      if (o.length) {
        const l = typeof o[0][0] == "number" ? [o] : o;
        for (const c of l) c.length < 3 ? s.push(...c) : c.length === 3 ? s.push(...Va(Cc([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : s.push(...Va(Cc(c), 10, (1 + i.roughness) / 2));
      }
      s.length && n.push(Cr([s], i));
    }
    return i.stroke !== Vt && n.push(a), this._d("curve", n, i);
  }
  polygon(t, r) {
    const i = this._o(r), n = [], a = yn(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? n.push(Xa([t], i)) : n.push(Cr([t], i))), i.stroke !== Vt && n.push(a), this._d("polygon", n, i);
  }
  path(t, r) {
    const i = this._o(r), n = [];
    if (!t) return this._d("path", n, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const a = i.fill && i.fill !== "transparent" && i.fill !== Vt, s = i.stroke !== Vt, o = !!(i.simplification && i.simplification < 1), l = (function(h, u, f) {
      const d = bd(xd(qo(h))), g = [];
      let m = [], y = [0, 0], x = [];
      const b = () => {
        x.length >= 4 && m.push(...Va(x, u)), x = [];
      }, C = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: k, data: A } of d) switch (k) {
        case "M":
          C(), y = [A[0], A[1]], m.push(y);
          break;
        case "L":
          b(), m.push([A[0], A[1]]);
          break;
        case "C":
          if (!x.length) {
            const S = m.length ? m[m.length - 1] : y;
            x.push([S[0], S[1]]);
          }
          x.push([A[0], A[1]]), x.push([A[2], A[3]]), x.push([A[4], A[5]]);
          break;
        case "Z":
          b(), m.push([y[0], y[1]]);
      }
      if (C(), !f) return g;
      const v = [];
      for (const k of g) {
        const A = av(k, f);
        A.length && v.push(A);
      }
      return v;
    })(t, 1, o ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = mc(t, i);
    if (a) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = mc(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else n.push(Xa(l, i));
    else n.push(Cr(l, i));
    return s && (o ? l.forEach(((h) => {
      n.push(yn(h, !1, i));
    })) : n.push(c)), this._d("path", n, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const n of t.ops) {
      const a = typeof r == "number" && r >= 0 ? n.data.map(((s) => +s.toFixed(r))) : n.data;
      switch (n.op) {
        case "move":
          i += `M${a[0]} ${a[1]} `;
          break;
        case "bcurveTo":
          i += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
          break;
        case "lineTo":
          i += `L${a[0]} ${a[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, n = [];
    for (const a of r) {
      let s = null;
      switch (a.type) {
        case "path":
          s = { d: this.opsToPath(a), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: Vt };
          break;
        case "fillPath":
          s = { d: this.opsToPath(a), stroke: Vt, strokeWidth: 0, fill: i.fill || Vt };
          break;
        case "fillSketch":
          s = this.fillSketch(a, i);
      }
      s && n.push(s);
    }
    return n;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || Vt, strokeWidth: i, fill: Vt };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class sv {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new Kn(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.ctx, a = t.options.fixedDecimalPlaceDigits;
    for (const s of r) switch (s.type) {
      case "path":
        n.save(), n.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, n.lineWidth = i.strokeWidth, i.strokeLineDash && n.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (n.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(n, s, a), n.restore();
        break;
      case "fillPath": {
        n.save(), n.fillStyle = i.fill || "";
        const o = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(n, s, a, o), n.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(n, s, i);
    }
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = n, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, n = "nonzero") {
    t.beginPath();
    for (const a of r.ops) {
      const s = typeof i == "number" && i >= 0 ? a.data.map(((o) => +o.toFixed(i))) : a.data;
      switch (a.op) {
        case "move":
          t.moveTo(s[0], s[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
          break;
        case "lineTo":
          t.lineTo(s[0], s[1]);
      }
    }
    r.type === "fillPath" ? t.fill(n) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, n, a) {
    const s = this.gen.line(t, r, i, n, a);
    return this.draw(s), s;
  }
  rectangle(t, r, i, n, a) {
    const s = this.gen.rectangle(t, r, i, n, a);
    return this.draw(s), s;
  }
  ellipse(t, r, i, n, a) {
    const s = this.gen.ellipse(t, r, i, n, a);
    return this.draw(s), s;
  }
  circle(t, r, i, n) {
    const a = this.gen.circle(t, r, i, n);
    return this.draw(a), a;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, n, a, s, o = !1, l) {
    const c = this.gen.arc(t, r, i, n, a, s, o, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const nn = "http://www.w3.org/2000/svg";
class ov {
  constructor(t, r) {
    this.svg = t, this.gen = new Kn(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.svg.ownerDocument || window.document, a = n.createElementNS(nn, "g"), s = t.options.fixedDecimalPlaceDigits;
    for (const o of r) {
      let l = null;
      switch (o.type) {
        case "path":
          l = n.createElementNS(nn, "path"), l.setAttribute("d", this.opsToPath(o, s)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = n.createElementNS(nn, "path"), l.setAttribute("d", this.opsToPath(o, s)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(n, o, i);
      }
      l && a.appendChild(l);
    }
    return a;
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2);
    const a = t.createElementNS(nn, "path");
    return a.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), a.setAttribute("stroke", i.fill || ""), a.setAttribute("stroke-width", n + ""), a.setAttribute("fill", "none"), i.fillLineDash && a.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), a;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, n, a) {
    const s = this.gen.line(t, r, i, n, a);
    return this.draw(s);
  }
  rectangle(t, r, i, n, a) {
    const s = this.gen.rectangle(t, r, i, n, a);
    return this.draw(s);
  }
  ellipse(t, r, i, n, a) {
    const s = this.gen.ellipse(t, r, i, n, a);
    return this.draw(s);
  }
  circle(t, r, i, n) {
    const a = this.gen.circle(t, r, i, n);
    return this.draw(a);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, n, a, s, o = !1, l) {
    const c = this.gen.arc(t, r, i, n, a, s, o, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var j = { canvas: (e, t) => new sv(e, t), svg: (e, t) => new ov(e, t), generator: (e) => new Kn(e), newSeed: () => Kn.newSeed() }, it = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  const n = t.useHtmlLabels || Bt(ft()?.htmlLabels);
  r ? i = r : i = "node default";
  const a = e.insert("g").attr("class", i).attr("id", t.domId || t.id), s = a.insert("g").attr("class", "label").attr("style", Rt(t.labelStyle));
  let o;
  t.label === void 0 ? o = "" : o = typeof t.label == "string" ? t.label : t.label[0];
  const l = await He(s, Jt(dr(o), ft()), {
    useHtmlLabels: n,
    width: t.width || ft().flowchart?.wrappingWidth,
    // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  });
  let c = l.getBBox();
  const h = (t?.padding ?? 0) / 2;
  if (n) {
    const u = l.children[0], f = ht(l), d = u.getElementsByTagName("img");
    if (d) {
      const g = o.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function x() {
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const b = ft().fontSize ? ft().fontSize : window.getComputedStyle(document.body).fontSize, C = 5, [v = uh.fontSize] = pa(b), k = v * C + "px";
                m.style.minWidth = k, m.style.maxWidth = k;
              } else
                m.style.width = "100%";
              y(m);
            }
            p(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  }
  return n ? s.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : s.attr("transform", "translate(0, " + -c.height / 2 + ")"), t.centerLabel && s.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), s.insert("rect", ":first-child"), { shapeSvg: a, bbox: c, halfPadding: h, label: s };
}, "labelHelper"), Za = /* @__PURE__ */ p(async (e, t, r) => {
  const i = r.useHtmlLabels || Bt(ft()?.flowchart?.htmlLabels), n = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), a = await He(n, Jt(dr(t), ft()), {
    useHtmlLabels: i,
    width: r.width || ft()?.flowchart?.wrappingWidth,
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let s = a.getBBox();
  const o = r.padding / 2;
  if (Bt(ft()?.flowchart?.htmlLabels)) {
    const l = a.children[0], c = ht(a);
    s = l.getBoundingClientRect(), c.attr("width", s.width), c.attr("height", s.height);
  }
  return i ? n.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")") : n.attr("transform", "translate(0, " + -s.height / 2 + ")"), r.centerLabel && n.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), n.insert("rect", ":first-child"), { shapeSvg: e, bbox: s, halfPadding: o, label: n };
}, "insertLabel"), G = /* @__PURE__ */ p((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), rt = /* @__PURE__ */ p((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function lt(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
p(lt, "createPathFromPoints");
function We(e, t, r, i, n, a) {
  const s = [], l = r - e, c = i - t, h = l / a, u = 2 * Math.PI / h, f = t + c / 2;
  for (let d = 0; d <= 50; d++) {
    const g = d / 50, m = e + g * l, y = f + n * Math.sin(u * (m - e));
    s.push({ x: m, y });
  }
  return s;
}
p(We, "generateFullSineWavePoints");
function Mi(e, t, r, i, n, a) {
  const s = [], o = n * Math.PI / 180, h = (a * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: -d, y: -g });
  }
  return s;
}
p(Mi, "generateCirclePoints");
var lv = /* @__PURE__ */ p((e, t) => {
  var r = e.x, i = e.y, n = t.x - r, a = t.y - i, s = e.width / 2, o = e.height / 2, l, c;
  return Math.abs(a) * s > Math.abs(n) * o ? (a < 0 && (o = -o), l = a === 0 ? 0 : o * n / a, c = o) : (n < 0 && (s = -s), l = s, c = n === 0 ? 0 : s * a / n), { x: r + l, y: i + c };
}, "intersectRect"), Gr = lv;
function _d(e, t) {
  t && e.attr("style", t);
}
p(_d, "applyStyle");
async function Sd(e) {
  const t = ht(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div"), i = ft();
  let n = e.label;
  e.label && Rr(e.label) && (n = await eo(e.label.replace(Hr.lineBreakRegex, `
`), i));
  const s = '<span class="' + (e.isNode ? "nodeLabel" : "edgeLabel") + '" ' + (e.labelStyle ? 'style="' + e.labelStyle + '"' : "") + // codeql [js/html-constructed-from-input] : false positive
  ">" + n + "</span>";
  return r.html(Jt(s, i)), _d(r, e.labelStyle), r.style("display", "inline-block"), r.style("padding-right", "1px"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
p(Sd, "addHtmlLabel");
var cv = /* @__PURE__ */ p(async (e, t, r, i) => {
  let n = e || "";
  if (typeof n == "object" && (n = n[0]), Bt(ft().flowchart.htmlLabels)) {
    n = n.replace(/\\n|\n/g, "<br />"), F.info("vertexText" + n);
    const a = {
      isNode: i,
      label: dr(n).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (o) => `<i class='${o.replace(":", " ")}'></i>`
      ),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await Sd(a);
  } else {
    const a = document.createElementNS("http://www.w3.org/2000/svg", "text");
    a.setAttribute("style", t.replace("color:", "fill:"));
    let s = [];
    typeof n == "string" ? s = n.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(n) ? s = n : s = [];
    for (const o of s) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), r ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = o.trim(), a.appendChild(l);
    }
    return a;
  }
}, "createLabel"), er = cv, je = /* @__PURE__ */ p((e, t, r, i, n) => [
  "M",
  e + n,
  t,
  // Move to the first point
  "H",
  e + r - n,
  // Draw horizontal line to the beginning of the right corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + r,
  t + n,
  // Draw arc to the right top corner
  "V",
  t + i - n,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + r - n,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + n,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e,
  t + i - n,
  // Draw arc to the left bottom corner
  "V",
  t + n,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + n,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), Td = /* @__PURE__ */ p(async (e, t) => {
  F.info("Creating subgraph rect for ", t.id, t);
  const r = ft(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: s } = i, { labelStyles: o, nodeStyles: l, borderStyles: c, backgroundStyles: h } = U(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = Bt(r.flowchart.htmlLabels), d = u.insert("g").attr("class", "cluster-label "), g = await He(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0
  });
  let m = g.getBBox();
  if (Bt(r.flowchart.htmlLabels)) {
    const S = g.children[0], D = ht(g);
    m = S.getBoundingClientRect(), D.attr("width", m.width), D.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
  F.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const S = j.svg(u), D = Y(t, {
      roughness: 0.7,
      fill: a,
      // fill: 'red',
      stroke: s,
      fillWeight: 3,
      seed: n
    }), I = S.path(je(b, C, y, x, 0), D);
    v = u.insert(() => (F.debug("Rough node insert CXC", I), I), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: k } = Co(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`
  ), o) {
    const S = d.select("span");
    S && S.attr("style", o);
  }
  const A = v.node().getBBox();
  return t.offsetX = 0, t.width = A.width, t.height = A.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(S) {
    return Gr(t, S);
  }, { cluster: u, labelBBox: m };
}, "rect"), hv = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.id), i = r.insert("rect", ":first-child"), n = 0 * t.padding, a = n / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + n).attr("height", t.height + n).attr("fill", "none");
  const s = i.node().getBBox();
  return t.width = s.width, t.height = s.height, t.intersect = function(o) {
    return Gr(t, o);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), uv = /* @__PURE__ */ p(async (e, t) => {
  const r = ft(), { themeVariables: i, handDrawnSeed: n } = r, { altBackground: a, compositeBackground: s, compositeTitleBackground: o, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let f = c.append("rect");
  const d = u.node().appendChild(await er(t.label, t.labelStyle, void 0, !0));
  let g = d.getBBox();
  if (Bt(r.flowchart.htmlLabels)) {
    const I = d.children[0], O = ht(d);
    g = I.getBoundingClientRect(), O.attr("width", g.width), O.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, x = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, C = t.height + m - g.height - 6, v = t.x - x / 2, k = t.y - b / 2;
  t.width = x;
  const A = t.y - t.height / 2 - y + g.height + 2;
  let S;
  if (t.look === "handDrawn") {
    const I = t.cssClasses.includes("statediagram-cluster-alt"), O = j.svg(c), E = t.rx || t.ry ? O.path(je(v, k, x, b, 10), {
      roughness: 0.7,
      fill: o,
      fillStyle: "solid",
      stroke: l,
      seed: n
    }) : O.rectangle(v, k, x, b, { seed: n });
    S = c.insert(() => E, ":first-child");
    const N = O.rectangle(v, A, x, C, {
      fill: I ? a : s,
      fillStyle: I ? "hachure" : "solid",
      stroke: l,
      seed: n
    });
    S = c.insert(() => E, ":first-child"), f = c.insert(() => N);
  } else
    S = h.insert("rect", ":first-child"), S.attr("class", "outer").attr("x", v).attr("y", k).attr("width", x).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", v).attr("y", A).attr("width", x).attr("height", C);
  u.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${k + 1 - (Bt(r.flowchart.htmlLabels) ? 0 : 3)})`
  );
  const D = S.node().getBBox();
  return t.height = D.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(I) {
    return Gr(t, I);
  }, { cluster: c, labelBBox: g };
}, "roundedWithTitle"), fv = /* @__PURE__ */ p(async (e, t) => {
  F.info("Creating subgraph rect for ", t.id, t);
  const r = ft(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: s } = i, { labelStyles: o, nodeStyles: l, borderStyles: c, backgroundStyles: h } = U(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = Bt(r.flowchart.htmlLabels), d = u.insert("g").attr("class", "cluster-label "), g = await He(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let m = g.getBBox();
  if (Bt(r.flowchart.htmlLabels)) {
    const S = g.children[0], D = ht(g);
    m = S.getBoundingClientRect(), D.attr("width", m.width), D.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
  F.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const S = j.svg(u), D = Y(t, {
      roughness: 0.7,
      fill: a,
      // fill: 'red',
      stroke: s,
      fillWeight: 4,
      seed: n
    }), I = S.path(je(b, C, y, x, t.rx), D);
    v = u.insert(() => (F.debug("Rough node insert CXC", I), I), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: k } = Co(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`
  ), o) {
    const S = d.select("span");
    S && S.attr("style", o);
  }
  const A = v.node().getBBox();
  return t.offsetX = 0, t.width = A.width, t.height = A.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(S) {
    return Gr(t, S);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), dv = /* @__PURE__ */ p((e, t) => {
  const r = ft(), { themeVariables: i, handDrawnSeed: n } = r, { nodeBorder: a } = i, s = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), o = s.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, u = t.x - c / 2, f = t.y - h / 2;
  t.width = c;
  let d;
  if (t.look === "handDrawn") {
    const y = j.svg(s).rectangle(u, f, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: a,
      seed: n
    });
    d = s.insert(() => y, ":first-child");
  } else
    d = o.insert("rect", ":first-child"), d.attr("class", "divider").attr("x", u).attr("y", f).attr("width", c).attr("height", h).attr("data-look", t.look);
  const g = d.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Gr(t, m);
  }, { cluster: s, labelBBox: {} };
}, "divider"), pv = Td, gv = {
  rect: Td,
  squareRect: pv,
  roundedWithTitle: uv,
  noteGroup: hv,
  divider: dv,
  kanbanSection: fv
}, Bd = /* @__PURE__ */ new Map(), mv = /* @__PURE__ */ p(async (e, t) => {
  const r = t.shape || "rect", i = await gv[r](e, t);
  return Bd.set(t.id, i), i;
}, "insertCluster"), DB = /* @__PURE__ */ p(() => {
  Bd = /* @__PURE__ */ new Map();
}, "clear");
function Ad(e, t) {
  return e.intersect(t);
}
p(Ad, "intersectNode");
var yv = Ad;
function Ld(e, t, r, i) {
  var n = e.x, a = e.y, s = n - i.x, o = a - i.y, l = Math.sqrt(t * t * o * o + r * r * s * s), c = Math.abs(t * r * s / l);
  i.x < n && (c = -c);
  var h = Math.abs(t * r * o / l);
  return i.y < a && (h = -h), { x: n + c, y: a + h };
}
p(Ld, "intersectEllipse");
var Md = Ld;
function Ed(e, t, r) {
  return Md(e, t, t, r);
}
p(Ed, "intersectCircle");
var xv = Ed;
function $d(e, t, r, i) {
  {
    const n = t.y - e.y, a = e.x - t.x, s = t.x * e.y - e.x * t.y, o = n * r.x + a * r.y + s, l = n * i.x + a * i.y + s, c = 1e-6;
    if (o !== 0 && l !== 0 && Ps(o, l))
      return;
    const h = i.y - r.y, u = r.x - i.x, f = i.x * r.y - r.x * i.y, d = h * e.x + u * e.y + f, g = h * t.x + u * t.y + f;
    if (Math.abs(d) < c && Math.abs(g) < c && Ps(d, g))
      return;
    const m = n * u - h * a;
    if (m === 0)
      return;
    const y = Math.abs(m / 2);
    let x = a * f - u * s;
    const b = x < 0 ? (x - y) / m : (x + y) / m;
    x = h * s - n * f;
    const C = x < 0 ? (x - y) / m : (x + y) / m;
    return { x: b, y: C };
  }
}
p($d, "intersectLine");
function Ps(e, t) {
  return e * t > 0;
}
p(Ps, "sameSign");
var bv = $d;
function Fd(e, t, r) {
  let i = e.x, n = e.y, a = [], s = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    s = Math.min(s, h.x), o = Math.min(o, h.y);
  }) : (s = Math.min(s, t.x), o = Math.min(o, t.y));
  let l = i - e.width / 2 - s, c = n - e.height / 2 - o;
  for (let h = 0; h < t.length; h++) {
    let u = t[h], f = t[h < t.length - 1 ? h + 1 : 0], d = bv(
      e,
      r,
      { x: l + u.x, y: c + u.y },
      { x: l + f.x, y: c + f.y }
    );
    d && a.push(d);
  }
  return a.length ? (a.length > 1 && a.sort(function(h, u) {
    let f = h.x - r.x, d = h.y - r.y, g = Math.sqrt(f * f + d * d), m = u.x - r.x, y = u.y - r.y, x = Math.sqrt(m * m + y * y);
    return g < x ? -1 : g === x ? 0 : 1;
  }), a[0]) : e;
}
p(Fd, "intersectPolygon");
var Cv = Fd, W = {
  node: yv,
  circle: xv,
  ellipse: Md,
  polygon: Cv,
  rect: Gr
};
function Dd(e, t) {
  const { labelStyles: r } = U(t);
  t.labelStyle = r;
  const i = rt(t);
  let n = i;
  i || (n = "anchor");
  const a = e.insert("g").attr("class", n).attr("id", t.domId || t.id), s = 1, { cssStyles: o } = t, l = j.svg(a), c = Y(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, s * 2, c), u = a.insert(() => h, ":first-child");
  return u.attr("class", "anchor").attr("style", Rt(o)), G(t, u), t.intersect = function(f) {
    return F.info("Circle intersect", t, s, f), W.circle(t, s, f);
  }, a;
}
p(Dd, "anchor");
function Ns(e, t, r, i, n, a, s) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, d = u / n, g = f / a, m = Math.sqrt(d ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * a * Math.sin(h) * (s ? -1 : 1), b = c - y * n * Math.cos(h) * (s ? -1 : 1), C = Math.atan2((t - b) / a, (e - x) / n);
  let k = Math.atan2((i - b) / a, (r - x) / n) - C;
  s && k < 0 && (k += 2 * Math.PI), !s && k > 0 && (k -= 2 * Math.PI);
  const A = [];
  for (let S = 0; S < 20; S++) {
    const D = S / 19, I = C + D * k, O = x + n * Math.cos(I), E = b + a * Math.sin(I);
    A.push({ x: O, y: E });
  }
  return A;
}
p(Ns, "generateArcPoints");
async function Od(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = a.width + t.padding + 20, o = a.height + t.padding, l = o / 2, c = l / (2.5 + o / 50), { cssStyles: h } = t, u = [
    { x: s / 2, y: -o / 2 },
    { x: -s / 2, y: -o / 2 },
    ...Ns(-s / 2, -o / 2, -s / 2, o / 2, c, l, !1),
    { x: s / 2, y: o / 2 },
    ...Ns(s / 2, o / 2, s / 2, -o / 2, c, l, !0)
  ], f = j.svg(n), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = lt(u), m = f.path(g, d), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(${c / 2}, 0)`), G(t, y), t.intersect = function(x) {
    return W.polygon(t, u, x);
  }, n;
}
p(Od, "bowTieRect");
function Ye(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(n) {
      return n.x + "," + n.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
p(Ye, "insertPolygonShape");
async function Rd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = a.height + t.padding, o = 12, l = a.width + t.padding + o, c = 0, h = l, u = -s, f = 0, d = [
    { x: c + o, y: u },
    { x: h, y: u },
    { x: h, y: f },
    { x: c, y: f },
    { x: c, y: u + o },
    { x: c + o, y: u }
  ];
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = j.svg(n), x = Y(t, {}), b = lt(d), C = y.path(b, x);
    g = n.insert(() => C, ":first-child").attr("transform", `translate(${-l / 2}, ${s / 2})`), m && g.attr("style", m);
  } else
    g = Ye(n, l, s, d);
  return i && g.attr("style", i), G(t, g), t.intersect = function(y) {
    return W.polygon(t, d, y);
  }, n;
}
p(Rd, "card");
function Id(e, t) {
  const { nodeStyles: r } = U(t);
  t.label = "";
  const i = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, a = Math.max(28, t.width ?? 0), s = [
    { x: 0, y: a / 2 },
    { x: a / 2, y: 0 },
    { x: 0, y: -a / 2 },
    { x: -a / 2, y: 0 }
  ], o = j.svg(i), l = Y(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = lt(s), h = o.path(c, l), u = i.insert(() => h, ":first-child");
  return n && t.look !== "handDrawn" && u.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return W.polygon(t, s, f);
  }, i;
}
p(Id, "choice");
async function Ho(e, t, r) {
  const { labelStyles: i, nodeStyles: n } = U(t);
  t.labelStyle = i;
  const { shapeSvg: a, bbox: s, halfPadding: o } = await it(e, t, rt(t)), l = r?.padding ?? o, c = s.width / 2 + l;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = j.svg(a), d = Y(t, {}), g = f.circle(0, 0, c * 2, d);
    h = a.insert(() => g, ":first-child"), h.attr("class", "basic label-container").attr("style", Rt(u));
  } else
    h = a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", n).attr("r", c).attr("cx", 0).attr("cy", 0);
  return G(t, h), t.calcIntersect = function(f, d) {
    const g = f.width / 2;
    return W.circle(f, g, d);
  }, t.intersect = function(f) {
    return F.info("Circle intersect", t, c, f), W.circle(t, c, f);
  }, a;
}
p(Ho, "circle");
function Pd(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, n = { x: i / 2 * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: i / 2 * r }, s = { x: -(i / 2) * t, y: -(i / 2) * r }, o = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${a.x},${a.y} L ${o.x},${o.y}
                   M ${n.x},${n.y} L ${s.x},${s.y}`;
}
p(Pd, "createLine");
function Nd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r, t.label = "";
  const n = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), a = Math.max(30, t?.width ?? 0), { cssStyles: s } = t, o = j.svg(n), l = Y(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = o.circle(0, 0, a * 2, l), h = Pd(a), u = o.path(h, l), f = n.insert(() => c, ":first-child");
  return f.insert(() => u), s && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), G(t, f), t.intersect = function(d) {
    return F.info("crossedCircle intersect", t, { radius: a, point: d }), W.circle(t, a, d);
  }, n;
}
p(Nd, "crossedCircle");
function Be(e, t, r, i = 100, n = 0, a = 180) {
  const s = [], o = n * Math.PI / 180, h = (a * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: -d, y: -g });
  }
  return s;
}
p(Be, "generateCirclePoints");
async function zd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Be(o / 2, -l / 2, c, 30, -90, 0),
    { x: -o / 2 - c, y: c },
    ...Be(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Be(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: -l / 2 },
    ...Be(o / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: o / 2, y: -l / 2 - c },
    { x: -o / 2, y: -l / 2 - c },
    ...Be(o / 2, -l / 2, c, 20, -90, 0),
    { x: -o / 2 - c, y: -c },
    ...Be(o / 2 + o * 0.1, -c, c, 20, -180, -270),
    ...Be(o / 2 + o * 0.1, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: l / 2 },
    ...Be(o / 2, l / 2, c, 20, 0, 90),
    { x: -o / 2, y: l / 2 + c },
    { x: o / 2, y: l / 2 + c }
  ], d = j.svg(n), g = Y(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = lt(u).replace("Z", ""), x = d.path(y, g), b = lt(f), C = d.path(b, { ...g }), v = n.insert("g", ":first-child");
  return v.insert(() => C, ":first-child").attr("stroke-opacity", 0), v.insert(() => x, ":first-child"), v.attr("class", "text"), h && t.look !== "handDrawn" && v.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${c}, 0)`), s.attr(
    "transform",
    `translate(${-o / 2 + c - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, v), t.intersect = function(k) {
    return W.polygon(t, f, k);
  }, n;
}
p(zd, "curlyBraceLeft");
function Ae(e, t, r, i = 100, n = 0, a = 180) {
  const s = [], o = n * Math.PI / 180, h = (a * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: d, y: g });
  }
  return s;
}
p(Ae, "generateCirclePoints");
async function Wd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Ae(o / 2, -l / 2, c, 20, -90, 0),
    { x: o / 2 + c, y: -c },
    ...Ae(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Ae(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: o / 2 + c, y: l / 2 },
    ...Ae(o / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: -o / 2, y: -l / 2 - c },
    { x: o / 2, y: -l / 2 - c },
    ...Ae(o / 2, -l / 2, c, 20, -90, 0),
    { x: o / 2 + c, y: -c },
    ...Ae(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Ae(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: o / 2 + c, y: l / 2 },
    ...Ae(o / 2, l / 2, c, 20, 0, 90),
    { x: o / 2, y: l / 2 + c },
    { x: -o / 2, y: l / 2 + c }
  ], d = j.svg(n), g = Y(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = lt(u).replace("Z", ""), x = d.path(y, g), b = lt(f), C = d.path(b, { ...g }), v = n.insert("g", ":first-child");
  return v.insert(() => C, ":first-child").attr("stroke-opacity", 0), v.insert(() => x, ":first-child"), v.attr("class", "text"), h && t.look !== "handDrawn" && v.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${-c}, 0)`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, v), t.intersect = function(k) {
    return W.polygon(t, f, k);
  }, n;
}
p(Wd, "curlyBraceRight");
function Lt(e, t, r, i = 100, n = 0, a = 180) {
  const s = [], o = n * Math.PI / 180, h = (a * Math.PI / 180 - o) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = o + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    s.push({ x: -d, y: -g });
  }
  return s;
}
p(Lt, "generateCirclePoints");
async function qd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Lt(o / 2, -l / 2, c, 30, -90, 0),
    { x: -o / 2 - c, y: c },
    ...Lt(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Lt(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: -l / 2 },
    ...Lt(o / 2, l / 2, c, 20, 0, 90)
  ], f = [
    ...Lt(-o / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: o / 2 - c / 2, y: c },
    ...Lt(-o / 2 - c / 2, -c, c, 20, 0, 90),
    ...Lt(-o / 2 - c / 2, c, c, 20, -90, 0),
    { x: o / 2 - c / 2, y: -c },
    ...Lt(-o / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], d = [
    { x: o / 2, y: -l / 2 - c },
    { x: -o / 2, y: -l / 2 - c },
    ...Lt(o / 2, -l / 2, c, 20, -90, 0),
    { x: -o / 2 - c, y: -c },
    ...Lt(o / 2 + c * 2, -c, c, 20, -180, -270),
    ...Lt(o / 2 + c * 2, c, c, 20, -90, -180),
    { x: -o / 2 - c, y: l / 2 },
    ...Lt(o / 2, l / 2, c, 20, 0, 90),
    { x: -o / 2, y: l / 2 + c },
    { x: o / 2 - c - c / 2, y: l / 2 + c },
    ...Lt(-o / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: o / 2 - c / 2, y: c },
    ...Lt(-o / 2 - c / 2, -c, c, 20, 0, 90),
    ...Lt(-o / 2 - c / 2, c, c, 20, -90, 0),
    { x: o / 2 - c / 2, y: -c },
    ...Lt(-o / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], g = j.svg(n), m = Y(t, { fill: "none" });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = lt(u).replace("Z", ""), b = g.path(x, m), v = lt(f).replace("Z", ""), k = g.path(v, m), A = lt(d), S = g.path(A, { ...m }), D = n.insert("g", ":first-child");
  return D.insert(() => S, ":first-child").attr("stroke-opacity", 0), D.insert(() => b, ":first-child"), D.insert(() => k, ":first-child"), D.attr("class", "text"), h && t.look !== "handDrawn" && D.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), D.attr("transform", `translate(${c - c / 4}, 0)`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, D), t.intersect = function(I) {
    return W.polygon(t, d, I);
  }, n;
}
p(qd, "curlyBraces");
async function Hd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = 80, o = 20, l = Math.max(s, (a.width + (t.padding ?? 0) * 2) * 1.25, t?.width ?? 0), c = Math.max(o, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = c / 2, { cssStyles: u } = t, f = j.svg(n), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = l, m = c, y = g - h, x = m / 4, b = [
    { x: y, y: 0 },
    { x, y: 0 },
    { x: 0, y: m / 2 },
    { x, y: m },
    { x: y, y: m },
    ...Mi(-y, -m / 2, h, 50, 270, 90)
  ], C = lt(b), v = f.path(C, d), k = n.insert(() => v, ":first-child");
  return k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), k.attr("transform", `translate(${-l / 2}, ${-c / 2})`), G(t, k), t.intersect = function(A) {
    return W.polygon(t, b, A);
  }, n;
}
p(Hd, "curvedTrapezoid");
var wv = /* @__PURE__ */ p((e, t, r, i, n, a) => [
  `M${e},${t + a}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), kv = /* @__PURE__ */ p((e, t, r, i, n, a) => [
  `M${e},${t + a}`,
  `M${e + r},${t + a}`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), vv = /* @__PURE__ */ p((e, t, r, i, n, a) => [`M${e - r / 2},${-i / 2}`, `a${n},${a} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function jd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + t.padding, t.width ?? 0), l = o / 2, c = l / (2.5 + o / 50), h = Math.max(a.height + c + t.padding, t.height ?? 0);
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = j.svg(n), g = kv(0, 0, o, h, l, c), m = vv(0, c, o, h, l, c), y = d.path(g, Y(t, {})), x = d.path(m, Y(t, { fill: "none" }));
    u = n.insert(() => x, ":first-child"), u = n.insert(() => y, ":first-child"), u.attr("class", "basic label-container"), f && u.attr("style", f);
  } else {
    const d = wv(0, 0, o, h, l, c);
    u = n.insert("path", ":first-child").attr("d", d).attr("class", "basic label-container").attr("style", Rt(f)).attr("style", i);
  }
  return u.attr("label-offset-y", c), u.attr("transform", `translate(${-o / 2}, ${-(h / 2 + c)})`), G(t, u), s.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(d) {
    const g = W.rect(t, d), m = g.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let y = c * c * (1 - m * m / (l * l));
      y > 0 && (y = Math.sqrt(y)), y = c - y, d.y - (t.y ?? 0) > 0 && (y = -y), g.y += y;
    }
    return g;
  }, n;
}
p(jd, "cylinder");
async function Yd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = a.width + t.padding, l = a.height + t.padding, c = l * 0.2, h = -o / 2, u = -l / 2 - c / 2, { cssStyles: f } = t, d = j.svg(n), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u + c },
    { x: -h, y: u + c },
    { x: -h, y: -u },
    { x: h, y: -u },
    { x: h, y: u },
    { x: -h, y: u },
    { x: -h, y: u + c }
  ], y = d.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${h + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${u + c + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.rect(t, b);
  }, n;
}
p(Yd, "dividedRectangle");
async function Ud(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: s } = await it(e, t, rt(t)), l = a.width / 2 + s + 5, c = a.width / 2 + s;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = j.svg(n), d = Y(t, { roughness: 0.2, strokeWidth: 2.5 }), g = Y(t, { roughness: 0.2, strokeWidth: 1.5 }), m = f.circle(0, 0, l * 2, d), y = f.circle(0, 0, c * 2, g);
    h = n.insert("g", ":first-child"), h.attr("class", Rt(t.cssClasses)).attr("style", Rt(u)), h.node()?.appendChild(m), h.node()?.appendChild(y);
  } else {
    h = n.insert("g", ":first-child");
    const f = h.insert("circle", ":first-child"), d = h.insert("circle");
    h.attr("class", "basic label-container").attr("style", i), f.attr("class", "outer-circle").attr("style", i).attr("r", l).attr("cx", 0).attr("cy", 0), d.attr("class", "inner-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0);
  }
  return G(t, h), t.intersect = function(f) {
    return F.info("DoubleCircle intersect", t, l, f), W.circle(t, l, f);
  }, n;
}
p(Ud, "doublecircle");
function Gd(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = U(t);
  t.label = "", t.labelStyle = i;
  const a = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), s = 7, { cssStyles: o } = t, l = j.svg(a), { nodeBorder: c } = r, h = Y(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const u = l.circle(0, 0, s * 2, h), f = a.insert(() => u, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${c} !important;`), o && o.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", o), n && t.look !== "handDrawn" && f.selectAll("path").attr("style", n), G(t, f), t.intersect = function(d) {
    return F.info("filledCircle intersect", t, { radius: s, point: d }), W.circle(t, s, d);
  }, a;
}
p(Gd, "filledCircle");
async function Xd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = a.width + (t.padding ?? 0), l = o + a.height, c = o + a.height, h = [
    { x: 0, y: -l },
    { x: c, y: -l },
    { x: c / 2, y: 0 }
  ], { cssStyles: u } = t, f = j.svg(n), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = lt(h), m = f.path(g, d), y = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
  return u && t.look !== "handDrawn" && y.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), t.width = o, t.height = l, G(t, y), s.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`
  ), t.intersect = function(x) {
    return F.info("Triangle intersect", t, h, x), W.polygon(t, h, x);
  }, n;
}
p(Xd, "flippedTriangle");
function Vd(e, t, { dir: r, config: { state: i, themeVariables: n } }) {
  const { nodeStyles: a } = U(t);
  t.label = "";
  const s = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t;
  let l = Math.max(70, t?.width ?? 0), c = Math.max(10, t?.height ?? 0);
  r === "LR" && (l = Math.max(10, t?.width ?? 0), c = Math.max(70, t?.height ?? 0));
  const h = -1 * l / 2, u = -1 * c / 2, f = j.svg(s), d = Y(t, {
    stroke: n.lineColor,
    fill: n.lineColor
  });
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = f.rectangle(h, u, l, c, d), m = s.insert(() => g, ":first-child");
  o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), a && t.look !== "handDrawn" && m.selectAll("path").attr("style", a), G(t, m);
  const y = i?.padding ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
    return W.rect(t, x);
  }, s;
}
p(Vd, "forkJoin");
async function Zd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const n = 80, a = 50, { shapeSvg: s, bbox: o } = await it(e, t, rt(t)), l = Math.max(n, o.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(a, o.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = c / 2, { cssStyles: u } = t, f = j.svg(s), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = [
    { x: -l / 2, y: -c / 2 },
    { x: l / 2 - h, y: -c / 2 },
    ...Mi(-l / 2 + h, 0, h, 50, 90, 270),
    { x: l / 2 - h, y: c / 2 },
    { x: -l / 2, y: c / 2 }
  ], m = lt(g), y = f.path(m, d), x = s.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), G(t, x), t.intersect = function(b) {
    return F.info("Pill intersect", t, { radius: h, point: b }), W.polygon(t, g, b);
  }, s;
}
p(Zd, "halfRoundedRectangle");
async function Kd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = a.height + (t.padding ?? 0), o = a.width + (t.padding ?? 0) * 2.5, { cssStyles: l } = t, c = j.svg(n), h = Y(t, {});
  t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
  let u = o / 2;
  const f = u / 6;
  u = u + f;
  const d = s / 2, g = d / 2, m = u - g, y = [
    { x: -m, y: -d },
    { x: 0, y: -d },
    { x: m, y: -d },
    { x: u, y: 0 },
    { x: m, y: d },
    { x: 0, y: d },
    { x: -m, y: d },
    { x: -u, y: 0 }
  ], x = lt(y), b = c.path(x, h), C = n.insert(() => b, ":first-child");
  return C.attr("class", "basic label-container"), l && t.look !== "handDrawn" && C.selectChildren("path").attr("style", l), i && t.look !== "handDrawn" && C.selectChildren("path").attr("style", i), t.width = o, t.height = s, G(t, C), t.intersect = function(v) {
    return W.polygon(t, y, v);
  }, n;
}
p(Kd, "hexagon");
async function Qd(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: n } = await it(e, t, rt(t)), a = Math.max(30, t?.width ?? 0), s = Math.max(30, t?.height ?? 0), { cssStyles: o } = t, l = j.svg(n), c = Y(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: a, y: 0 },
    { x: 0, y: s },
    { x: a, y: s }
  ], u = lt(h), f = l.path(u, c), d = n.insert(() => f, ":first-child");
  return d.attr("class", "basic label-container"), o && t.look !== "handDrawn" && d.selectChildren("path").attr("style", o), i && t.look !== "handDrawn" && d.selectChildren("path").attr("style", i), d.attr("transform", `translate(${-a / 2}, ${-s / 2})`), G(t, d), t.intersect = function(g) {
    return F.info("Pill intersect", t, { points: h }), W.polygon(t, h, g);
  }, n;
}
p(Qd, "hourglass");
async function Jd(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = U(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await it(e, t, "icon-shape default"), f = t.pos === "t", d = o, g = o, { nodeBorder: m } = r, { stylesMap: y } = jr(t), x = -g / 2, b = -d / 2, C = t.label ? 8 : 0, v = j.svg(c), k = Y(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const A = v.rectangle(x, b, g, d, k), S = Math.max(g, h.width), D = d + h.height + C, I = v.rectangle(-S / 2, -D / 2, S, D, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), O = c.insert(() => A, ":first-child"), E = c.insert(() => I);
  if (t.icon) {
    const N = c.append("g");
    N.html(
      `<g>${await zi(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`
    );
    const R = N.node().getBBox(), B = R.width, L = R.height, T = R.x, $ = R.y;
    N.attr(
      "transform",
      `translate(${-B / 2 - T},${f ? h.height / 2 + C / 2 - L / 2 - $ : -h.height / 2 - C / 2 - L / 2 - $})`
    ), N.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -D / 2 : D / 2 - h.height})`
  ), O.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + C / 2 : -h.height / 2 - C / 2})`
  ), G(t, E), t.intersect = function(N) {
    if (F.info("iconSquare intersect", t, N), !t.label)
      return W.rect(t, N);
    const R = t.x ?? 0, B = t.y ?? 0, L = t.height ?? 0;
    let T = [];
    return f ? T = [
      { x: R - h.width / 2, y: B - L / 2 },
      { x: R + h.width / 2, y: B - L / 2 },
      { x: R + h.width / 2, y: B - L / 2 + h.height + C },
      { x: R + g / 2, y: B - L / 2 + h.height + C },
      { x: R + g / 2, y: B + L / 2 },
      { x: R - g / 2, y: B + L / 2 },
      { x: R - g / 2, y: B - L / 2 + h.height + C },
      { x: R - h.width / 2, y: B - L / 2 + h.height + C }
    ] : T = [
      { x: R - g / 2, y: B - L / 2 },
      { x: R + g / 2, y: B - L / 2 },
      { x: R + g / 2, y: B - L / 2 + d },
      { x: R + h.width / 2, y: B - L / 2 + d },
      { x: R + h.width / 2 / 2, y: B + L / 2 },
      { x: R - h.width / 2, y: B + L / 2 },
      { x: R - h.width / 2, y: B - L / 2 + d },
      { x: R - g / 2, y: B - L / 2 + d }
    ], W.polygon(t, T, N);
  }, c;
}
p(Jd, "icon");
async function tp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = U(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await it(e, t, "icon-shape default"), f = 20, d = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: x } = jr(t), b = j.svg(c), C = Y(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const v = x.get("fill");
  C.stroke = v ?? y;
  const k = c.append("g");
  t.icon && k.html(
    `<g>${await zi(t.icon, {
      height: o,
      width: o,
      fallbackPrefix: ""
    })}</g>`
  );
  const A = k.node().getBBox(), S = A.width, D = A.height, I = A.x, O = A.y, E = Math.max(S, D) * Math.SQRT2 + f * 2, N = b.circle(0, 0, E, C), R = Math.max(E, h.width), B = E + h.height + d, L = b.rectangle(-R / 2, -B / 2, R, B, {
    ...C,
    fill: "transparent",
    stroke: "none"
  }), T = c.insert(() => N, ":first-child"), $ = c.insert(() => L);
  return k.attr(
    "transform",
    `translate(${-S / 2 - I},${g ? h.height / 2 + d / 2 - D / 2 - O : -h.height / 2 - d / 2 - D / 2 - O})`
  ), k.attr("style", `color: ${x.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${g ? -B / 2 : B / 2 - h.height})`
  ), T.attr(
    "transform",
    `translate(0,${g ? h.height / 2 + d / 2 : -h.height / 2 - d / 2})`
  ), G(t, $), t.intersect = function(M) {
    return F.info("iconSquare intersect", t, M), W.rect(t, M);
  }, c;
}
p(tp, "iconCircle");
async function ep(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = U(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await it(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = o + u * 2, m = o + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = jr(t), C = -m / 2, v = -g / 2, k = t.label ? 8 : 0, A = j.svg(c), S = Y(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const D = b.get("fill");
  S.stroke = D ?? x;
  const I = A.path(je(C, v, m, g, 5), S), O = Math.max(m, h.width), E = g + h.height + k, N = A.rectangle(-O / 2, -E / 2, O, E, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), R = c.insert(() => I, ":first-child").attr("class", "icon-shape2"), B = c.insert(() => N);
  if (t.icon) {
    const L = c.append("g");
    L.html(
      `<g>${await zi(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`
    );
    const T = L.node().getBBox(), $ = T.width, M = T.height, q = T.x, X = T.y;
    L.attr(
      "transform",
      `translate(${-$ / 2 - q},${d ? h.height / 2 + k / 2 - M / 2 - X : -h.height / 2 - k / 2 - M / 2 - X})`
    ), L.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d ? -E / 2 : E / 2 - h.height})`
  ), R.attr(
    "transform",
    `translate(0,${d ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), G(t, B), t.intersect = function(L) {
    if (F.info("iconSquare intersect", t, L), !t.label)
      return W.rect(t, L);
    const T = t.x ?? 0, $ = t.y ?? 0, M = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: T - h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ - M / 2 + h.height + k },
      { x: T - h.width / 2, y: $ - M / 2 + h.height + k }
    ] : q = [
      { x: T - m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2 / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ - M / 2 + g },
      { x: T - m / 2, y: $ - M / 2 + g }
    ], W.polygon(t, q, L);
  }, c;
}
p(ep, "iconRounded");
async function rp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = U(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i?.wrappingWidth;
  t.width = Math.max(o, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await it(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = o + u * 2, m = o + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = jr(t), C = -m / 2, v = -g / 2, k = t.label ? 8 : 0, A = j.svg(c), S = Y(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const D = b.get("fill");
  S.stroke = D ?? x;
  const I = A.path(je(C, v, m, g, 0.1), S), O = Math.max(m, h.width), E = g + h.height + k, N = A.rectangle(-O / 2, -E / 2, O, E, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), R = c.insert(() => I, ":first-child"), B = c.insert(() => N);
  if (t.icon) {
    const L = c.append("g");
    L.html(
      `<g>${await zi(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`
    );
    const T = L.node().getBBox(), $ = T.width, M = T.height, q = T.x, X = T.y;
    L.attr(
      "transform",
      `translate(${-$ / 2 - q},${d ? h.height / 2 + k / 2 - M / 2 - X : -h.height / 2 - k / 2 - M / 2 - X})`
    ), L.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d ? -E / 2 : E / 2 - h.height})`
  ), R.attr(
    "transform",
    `translate(0,${d ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), G(t, B), t.intersect = function(L) {
    if (F.info("iconSquare intersect", t, L), !t.label)
      return W.rect(t, L);
    const T = t.x ?? 0, $ = t.y ?? 0, M = t.height ?? 0;
    let q = [];
    return d ? q = [
      { x: T - h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 },
      { x: T + h.width / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ - M / 2 + h.height + k },
      { x: T + m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ + M / 2 },
      { x: T - m / 2, y: $ - M / 2 + h.height + k },
      { x: T - h.width / 2, y: $ - M / 2 + h.height + k }
    ] : q = [
      { x: T - m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 },
      { x: T + m / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2, y: $ - M / 2 + g },
      { x: T + h.width / 2 / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ + M / 2 },
      { x: T - h.width / 2, y: $ - M / 2 + g },
      { x: T - m / 2, y: $ - M / 2 + g }
    ], W.polygon(t, q, L);
  }, c;
}
p(rp, "iconSquare");
async function ip(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = t?.img ?? "", await i.decode();
  const n = Number(i.naturalWidth.toString().replace("px", "")), a = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = n / a;
  const { labelStyles: s } = U(t);
  t.labelStyle = s;
  const o = r?.wrappingWidth;
  t.defaultWidth = r?.wrappingWidth;
  const l = Math.max(
    t.label ? o ?? 0 : 0,
    t?.assetWidth ?? n
  ), c = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : t?.assetHeight ?? a;
  t.width = Math.max(c, o ?? 0);
  const { shapeSvg: u, bbox: f, label: d } = await it(e, t, "image-shape default"), g = t.pos === "t", m = -c / 2, y = -h / 2, x = t.label ? 8 : 0, b = j.svg(u), C = Y(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const v = b.rectangle(m, y, c, h, C), k = Math.max(c, f.width), A = h + f.height + x, S = b.rectangle(-k / 2, -A / 2, k, A, {
    ...C,
    fill: "none",
    stroke: "none"
  }), D = u.insert(() => v, ":first-child"), I = u.insert(() => S);
  if (t.img) {
    const O = u.append("image");
    O.attr("href", t.img), O.attr("width", c), O.attr("height", h), O.attr("preserveAspectRatio", "none"), O.attr(
      "transform",
      `translate(${-c / 2},${g ? A / 2 - h : -A / 2})`
    );
  }
  return d.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -h / 2 - f.height / 2 - x / 2 : h / 2 - f.height / 2 + x / 2})`
  ), D.attr(
    "transform",
    `translate(0,${g ? f.height / 2 + x / 2 : -f.height / 2 - x / 2})`
  ), G(t, I), t.intersect = function(O) {
    if (F.info("iconSquare intersect", t, O), !t.label)
      return W.rect(t, O);
    const E = t.x ?? 0, N = t.y ?? 0, R = t.height ?? 0;
    let B = [];
    return g ? B = [
      { x: E - f.width / 2, y: N - R / 2 },
      { x: E + f.width / 2, y: N - R / 2 },
      { x: E + f.width / 2, y: N - R / 2 + f.height + x },
      { x: E + c / 2, y: N - R / 2 + f.height + x },
      { x: E + c / 2, y: N + R / 2 },
      { x: E - c / 2, y: N + R / 2 },
      { x: E - c / 2, y: N - R / 2 + f.height + x },
      { x: E - f.width / 2, y: N - R / 2 + f.height + x }
    ] : B = [
      { x: E - c / 2, y: N - R / 2 },
      { x: E + c / 2, y: N - R / 2 },
      { x: E + c / 2, y: N - R / 2 + h },
      { x: E + f.width / 2, y: N - R / 2 + h },
      { x: E + f.width / 2 / 2, y: N + R / 2 },
      { x: E - f.width / 2, y: N + R / 2 },
      { x: E - f.width / 2, y: N - R / 2 + h },
      { x: E - c / 2, y: N - R / 2 + h }
    ], W.polygon(t, B, O);
  }, u;
}
p(ip, "imageSquare");
async function np(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: s + 3 * o / 6, y: -o },
    { x: -3 * o / 6, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(n), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(n, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, n;
}
p(np, "inv_trapezoid");
async function Ca(e, t, r) {
  const { labelStyles: i, nodeStyles: n } = U(t);
  t.labelStyle = i;
  const { shapeSvg: a, bbox: s } = await it(e, t, rt(t)), o = Math.max(s.width + r.labelPaddingX * 2, t?.width || 0), l = Math.max(s.height + r.labelPaddingY * 2, t?.height || 0), c = -o / 2, h = -l / 2;
  let u, { rx: f, ry: d } = t;
  const { cssStyles: g } = t;
  if (r?.rx && r.ry && (f = r.rx, d = r.ry), t.look === "handDrawn") {
    const m = j.svg(a), y = Y(t, {}), x = f || d ? m.path(je(c, h, o, l, f || 0), y) : m.rectangle(c, h, o, l, y);
    u = a.insert(() => x, ":first-child"), u.attr("class", "basic label-container").attr("style", Rt(g));
  } else
    u = a.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", n).attr("rx", Rt(f)).attr("ry", Rt(d)).attr("x", c).attr("y", h).attr("width", o).attr("height", l);
  return G(t, u), t.calcIntersect = function(m, y) {
    return W.rect(m, y);
  }, t.intersect = function(m) {
    return W.rect(t, m);
  }, a;
}
p(Ca, "drawRect");
async function ap(e, t) {
  const { shapeSvg: r, bbox: i, label: n } = await it(e, t, "label"), a = r.insert("rect", ":first-child");
  return a.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), n.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), G(t, a), t.intersect = function(l) {
    return W.rect(t, l);
  }, r;
}
p(ap, "labelRect");
async function sp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), o = Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
    { x: 0, y: 0 },
    { x: s + 3 * o / 6, y: 0 },
    { x: s, y: -o },
    { x: -(3 * o) / 6, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(n), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(n, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, n;
}
p(sp, "lean_left");
async function op(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), o = Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), l = [
    { x: -3 * o / 6, y: 0 },
    { x: s, y: 0 },
    { x: s + 3 * o / 6, y: -o },
    { x: 0, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(n), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(n, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, n;
}
p(op, "lean_right");
function lp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.label = "", t.labelStyle = r;
  const n = e.insert("g").attr("class", rt(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, s = Math.max(35, t?.width ?? 0), o = Math.max(35, t?.height ?? 0), l = 7, c = [
    { x: s, y: 0 },
    { x: 0, y: o + l / 2 },
    { x: s - 2 * l, y: o + l / 2 },
    { x: 0, y: 2 * o },
    { x: s, y: o - l / 2 },
    { x: 2 * l, y: o - l / 2 }
  ], h = j.svg(n), u = Y(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = lt(c), d = h.path(f, u), g = n.insert(() => d, ":first-child");
  return a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${s / 2},${-o})`), G(t, g), t.intersect = function(m) {
    return F.info("lightningBolt intersect", t, m), W.polygon(t, c, m);
  }, n;
}
p(lp, "lightningBolt");
var _v = /* @__PURE__ */ p((e, t, r, i, n, a, s) => [
  `M${e},${t + a}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + a + s}`,
  `a${n},${a} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), Sv = /* @__PURE__ */ p((e, t, r, i, n, a, s) => [
  `M${e},${t + a}`,
  `M${e + r},${t + a}`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + a + s}`,
  `a${n},${a} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), Tv = /* @__PURE__ */ p((e, t, r, i, n, a) => [`M${e - r / 2},${-i / 2}`, `a${n},${a} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function cp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0), t.width ?? 0), l = o / 2, c = l / (2.5 + o / 50), h = Math.max(a.height + c + (t.padding ?? 0), t.height ?? 0), u = h * 0.1;
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = j.svg(n), m = Sv(0, 0, o, h, l, c, u), y = Tv(0, c, o, h, l, c), x = Y(t, {}), b = g.path(m, x), C = g.path(y, x);
    n.insert(() => C, ":first-child").attr("class", "line"), f = n.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), d && f.attr("style", d);
  } else {
    const g = _v(0, 0, o, h, l, c, u);
    f = n.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", Rt(d)).attr("style", i);
  }
  return f.attr("label-offset-y", c), f.attr("transform", `translate(${-o / 2}, ${-(h / 2 + c)})`), G(t, f), s.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(g) {
    const m = W.rect(t, g), y = m.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let x = c * c * (1 - y * y / (l * l));
      x > 0 && (x = Math.sqrt(x)), x = c - x, g.y - (t.y ?? 0) > 0 && (x = -x), m.y += x;
    }
    return m;
  }, n;
}
p(cp, "linedCylinder");
async function hp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 4, h = l + c, { cssStyles: u } = t, f = j.svg(n), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = [
    { x: -o / 2 - o / 2 * 0.1, y: -h / 2 },
    { x: -o / 2 - o / 2 * 0.1, y: h / 2 },
    ...We(
      -o / 2 - o / 2 * 0.1,
      h / 2,
      o / 2 + o / 2 * 0.1,
      h / 2,
      c,
      0.8
    ),
    { x: o / 2 + o / 2 * 0.1, y: -h / 2 },
    { x: -o / 2 - o / 2 * 0.1, y: -h / 2 },
    { x: -o / 2, y: -h / 2 },
    { x: -o / 2, y: h / 2 * 1.1 },
    { x: -o / 2, y: -h / 2 }
  ], m = f.polygon(
    g.map((x) => [x.x, x.y]),
    d
  ), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) + o / 2 * 0.1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, y), t.intersect = function(x) {
    return W.polygon(t, g, x);
  }, n;
}
p(hp, "linedWaveEdgedRect");
async function up(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = 5, h = -o / 2, u = -l / 2, { cssStyles: f } = t, d = j.svg(n), g = Y(t, {}), m = [
    { x: h - c, y: u + c },
    { x: h - c, y: u + l + c },
    { x: h + o - c, y: u + l + c },
    { x: h + o - c, y: u + l },
    { x: h + o, y: u + l },
    { x: h + o, y: u + l - c },
    { x: h + o + c, y: u + l - c },
    { x: h + o + c, y: u - c },
    { x: h + c, y: u - c },
    { x: h + c, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = [
    { x: h, y: u + c },
    { x: h + o - c, y: u + c },
    { x: h + o - c, y: u + l },
    { x: h + o, y: u + l },
    { x: h + o, y: u },
    { x: h, y: u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = lt(m), b = d.path(x, g), C = lt(y), v = d.path(C, { ...g, fill: "none" }), k = n.insert(() => v, ":first-child");
  return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), f && t.look !== "handDrawn" && k.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${-(a.width / 2) - c - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c - (a.y - (a.top ?? 0))})`
  ), G(t, k), t.intersect = function(A) {
    return W.polygon(t, m, A);
  }, n;
}
p(up, "multiRect");
async function fp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 4, h = l + c, u = -o / 2, f = -h / 2, d = 5, { cssStyles: g } = t, m = We(
    u - d,
    f + h + d,
    u + o - d,
    f + h + d,
    c,
    0.8
  ), y = m?.[m.length - 1], x = [
    { x: u - d, y: f + d },
    { x: u - d, y: f + h + d },
    ...m,
    { x: u + o - d, y: y.y - d },
    { x: u + o, y: y.y - d },
    { x: u + o, y: y.y - 2 * d },
    { x: u + o + d, y: y.y - 2 * d },
    { x: u + o + d, y: f - d },
    { x: u + d, y: f - d },
    { x: u + d, y: f },
    { x: u, y: f },
    { x: u, y: f + d }
  ], b = [
    { x: u, y: f + d },
    { x: u + o - d, y: f + d },
    { x: u + o - d, y: y.y - d },
    { x: u + o, y: y.y - d },
    { x: u + o, y: f },
    { x: u, y: f }
  ], C = j.svg(n), v = Y(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const k = lt(x), A = C.path(k, v), S = lt(b), D = C.path(S, v), I = n.insert(() => A, ":first-child");
  return I.insert(() => D), I.attr("class", "basic label-container"), g && t.look !== "handDrawn" && I.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && I.selectAll("path").attr("style", i), I.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-(a.width / 2) - d - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + d - c / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, I), t.intersect = function(O) {
    return W.polygon(t, x, O);
  }, n;
}
p(fp, "multiWaveEdgedRectangle");
async function dp(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = U(t);
  t.labelStyle = i, t.useHtmlLabels || Dt().flowchart?.htmlLabels !== !1 || (t.centerLabel = !0);
  const { shapeSvg: s, bbox: o, label: l } = await it(e, t, rt(t)), c = Math.max(o.width + (t.padding ?? 0) * 2, t?.width ?? 0), h = Math.max(o.height + (t.padding ?? 0) * 2, t?.height ?? 0), u = -c / 2, f = -h / 2, { cssStyles: d } = t, g = j.svg(s), m = Y(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = g.rectangle(u, f, c, h, m), x = s.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), d && t.look !== "handDrawn" && x.selectAll("path").attr("style", d), n && t.look !== "handDrawn" && x.selectAll("path").attr("style", n), l.attr(
    "transform",
    `translate(${-o.width / 2 - (o.x - (o.left ?? 0))}, ${-(o.height / 2) - (o.y - (o.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.rect(t, b);
  }, s;
}
p(dp, "note");
var Bv = /* @__PURE__ */ p((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = a.width + t.padding, o = a.height + t.padding, l = s + o, c = 0.5, h = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = j.svg(n), g = Y(t, {}), m = Bv(0, 0, l), y = d.path(m, g);
    u = n.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + c}, ${l / 2})`), f && u.attr("style", f);
  } else
    u = Ye(n, l, l, h), u.attr("transform", `translate(${-l / 2 + c}, ${l / 2})`);
  return i && u.attr("style", i), G(t, u), t.calcIntersect = function(d, g) {
    const m = d.width, y = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], x = W.polygon(d, y, g);
    return { x: x.x - 0.5, y: x.y - 0.5 };
  }, t.intersect = function(d) {
    return this.calcIntersect(t, d);
  }, n;
}
p(pp, "question");
async function gp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0), t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0), t?.height ?? 0), c = -o / 2, h = -l / 2, u = h / 2, f = [
    { x: c + u, y: h },
    { x: c, y: 0 },
    { x: c + u, y: -h },
    { x: -c, y: -h },
    { x: -c, y: h }
  ], { cssStyles: d } = t, g = j.svg(n), m = Y(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = lt(f), x = g.path(y, m), b = n.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container"), d && t.look !== "handDrawn" && b.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), b.attr("transform", `translate(${-u / 2},0)`), s.attr(
    "transform",
    `translate(${-u / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`
  ), G(t, b), t.intersect = function(C) {
    return W.polygon(t, f, C);
  }, n;
}
p(gp, "rect_left_inv_arrow");
async function mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  let n;
  t.cssClasses ? n = "node " + t.cssClasses : n = "node default";
  const a = e.insert("g").attr("class", n).attr("id", t.domId || t.id), s = a.insert("g"), o = a.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = o.node().appendChild(await er(c, t.labelStyle, !0, !0));
  let u = { width: 0, height: 0 };
  if (Bt(ft()?.flowchart?.htmlLabels)) {
    const D = h.children[0], I = ht(h);
    u = D.getBoundingClientRect(), I.attr("width", u.width), I.attr("height", u.height);
  }
  F.info("Text 2", l);
  const f = l || [], d = h.getBBox(), g = o.node().appendChild(
    await er(
      f.join ? f.join("<br/>") : f,
      t.labelStyle,
      !0,
      !0
    )
  ), m = g.children[0], y = ht(g);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const x = (t.padding || 0) / 2;
  ht(g).attr(
    "transform",
    "translate( " + (u.width > d.width ? 0 : (d.width - u.width) / 2) + ", " + (d.height + x + 5) + ")"
  ), ht(h).attr(
    "transform",
    "translate( " + (u.width < d.width ? 0 : -(d.width - u.width) / 2) + ", 0)"
  ), u = o.node().getBBox(), o.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - x + 3) + ")"
  );
  const b = u.width + (t.padding || 0), C = u.height + (t.padding || 0), v = -u.width / 2 - x, k = -u.height / 2 - x;
  let A, S;
  if (t.look === "handDrawn") {
    const D = j.svg(a), I = Y(t, {}), O = D.path(
      je(v, k, b, C, t.rx || 0),
      I
    ), E = D.line(
      -u.width / 2 - x,
      -u.height / 2 - x + d.height + x,
      u.width / 2 + x,
      -u.height / 2 - x + d.height + x,
      I
    );
    S = a.insert(() => (F.debug("Rough node insert CXC", O), E), ":first-child"), A = a.insert(() => (F.debug("Rough node insert CXC", O), O), ":first-child");
  } else
    A = s.insert("rect", ":first-child"), S = s.insert("line"), A.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - x).attr("y", -u.height / 2 - x).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), S.attr("class", "divider").attr("x1", -u.width / 2 - x).attr("x2", u.width / 2 + x).attr("y1", -u.height / 2 - x + d.height + x).attr("y2", -u.height / 2 - x + d.height + x);
  return G(t, A), t.intersect = function(D) {
    return W.rect(t, D);
  }, a;
}
p(mp, "rectWithTitle");
function pi(e, t, r, i, n, a, s) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, d = u / n, g = f / a, m = Math.sqrt(d ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * a * Math.sin(h) * (s ? -1 : 1), b = c - y * n * Math.cos(h) * (s ? -1 : 1), C = Math.atan2((t - b) / a, (e - x) / n);
  let k = Math.atan2((i - b) / a, (r - x) / n) - C;
  s && k < 0 && (k += 2 * Math.PI), !s && k > 0 && (k -= 2 * Math.PI);
  const A = [];
  for (let S = 0; S < 20; S++) {
    const D = S / 19, I = C + D * k, O = x + n * Math.cos(I), E = b + a * Math.sin(I);
    A.push({ x: O, y: E });
  }
  return A;
}
p(pi, "generateArcPoints");
async function yp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = t?.padding ?? 0, o = t?.padding ?? 0, l = (t?.width ? t?.width : a.width) + s * 2, c = (t?.height ? t?.height : a.height) + o * 2, h = t.radius || 5, u = t.taper || 5, { cssStyles: f } = t, d = j.svg(n), g = Y(t, {});
  t.stroke && (g.stroke = t.stroke), t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    // Top edge (left to right)
    { x: -l / 2 + u, y: -c / 2 },
    // Top-left corner start (1)
    { x: l / 2 - u, y: -c / 2 },
    // Top-right corner start (2)
    ...pi(l / 2 - u, -c / 2, l / 2, -c / 2 + u, h, h, !0),
    // Top-left arc (2 to 3)
    // Right edge (top to bottom)
    { x: l / 2, y: -c / 2 + u },
    // Top-right taper point (3)
    { x: l / 2, y: c / 2 - u },
    // Bottom-right taper point (4)
    ...pi(l / 2, c / 2 - u, l / 2 - u, c / 2, h, h, !0),
    // Top-left arc (4 to 5)
    // Bottom edge (right to left)
    { x: l / 2 - u, y: c / 2 },
    // Bottom-right corner start (5)
    { x: -l / 2 + u, y: c / 2 },
    // Bottom-left corner start (6)
    ...pi(-l / 2 + u, c / 2, -l / 2, c / 2 - u, h, h, !0),
    // Top-left arc (4 to 5)
    // Left edge (bottom to top)
    { x: -l / 2, y: c / 2 - u },
    // Bottom-left taper point (7)
    { x: -l / 2, y: -c / 2 + u },
    // Top-left taper point (8)
    ...pi(-l / 2, -c / 2 + u, -l / 2 + u, -c / 2, h, h, !0)
    // Top-left arc (4 to 5)
  ], y = lt(m), x = d.path(y, g), b = n.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), G(t, b), t.intersect = function(C) {
    return W.polygon(t, m, C);
  }, n;
}
p(yp, "roundedRect");
async function xp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = t?.padding ?? 0, l = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = -a.width / 2 - o, u = -a.height / 2 - o, { cssStyles: f } = t, d = j.svg(n), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u },
    { x: h + l + 8, y: u },
    { x: h + l + 8, y: u + c },
    { x: h - 8, y: u + c },
    { x: h - 8, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = d.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container").attr("style", Rt(f)), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${-l / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.rect(t, b);
  }, n;
}
p(xp, "shadedProcess");
async function bp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = -o / 2, h = -l / 2, { cssStyles: u } = t, f = j.svg(n), d = Y(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = [
    { x: c, y: h },
    { x: c, y: h + l },
    { x: c + o, y: h + l },
    { x: c + o, y: h - l / 2 }
  ], m = lt(g), y = f.path(m, d), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), x.attr("transform", `translate(0, ${l / 4})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`
  ), G(t, x), t.intersect = function(b) {
    return W.polygon(t, g, b);
  }, n;
}
p(bp, "slopedRect");
async function Cp(e, t) {
  const r = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? (t?.padding || 0) * 2,
    labelPaddingY: (t?.padding || 0) * 1
  };
  return Ca(e, t, r);
}
p(Cp, "squareRect");
async function wp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = a.height + t.padding, o = a.width + s / 4 + t.padding, l = s / 2, { cssStyles: c } = t, h = j.svg(n), u = Y(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = [
    { x: -o / 2 + l, y: -s / 2 },
    { x: o / 2 - l, y: -s / 2 },
    ...Mi(-o / 2 + l, 0, l, 50, 90, 270),
    { x: o / 2 - l, y: s / 2 },
    ...Mi(o / 2 - l, 0, l, 50, 270, 450)
  ], d = lt(f), g = h.path(d, u), m = n.insert(() => g, ":first-child");
  return m.attr("class", "basic label-container outer-path"), c && t.look !== "handDrawn" && m.selectChildren("path").attr("style", c), i && t.look !== "handDrawn" && m.selectChildren("path").attr("style", i), G(t, m), t.intersect = function(y) {
    return W.polygon(t, f, y);
  }, n;
}
p(wp, "stadium");
async function kp(e, t) {
  return Ca(e, t, {
    rx: 5,
    ry: 5
  });
}
p(kp, "state");
function vp(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = U(t);
  t.labelStyle = i;
  const { cssStyles: a } = t, { lineColor: s, stateBorder: o, nodeBorder: l } = r, c = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), h = j.svg(c), u = Y(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = h.circle(0, 0, 14, {
    ...u,
    stroke: s,
    strokeWidth: 2
  }), d = o ?? l, g = h.circle(0, 0, 5, {
    ...u,
    fill: d,
    stroke: d,
    strokeWidth: 2,
    fillStyle: "solid"
  }), m = c.insert(() => f, ":first-child");
  return m.insert(() => g), a && m.selectAll("path").attr("style", a), n && m.selectAll("path").attr("style", n), G(t, m), t.intersect = function(y) {
    return W.circle(t, 7, y);
  }, c;
}
p(vp, "stateEnd");
function _p(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i } = r, n = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const o = j.svg(n).circle(0, 0, 14, q1(i));
    a = n.insert(() => o), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else
    a = n.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return G(t, a), t.intersect = function(s) {
    return W.circle(t, 7, s);
  }, n;
}
p(_p, "stateStart");
async function Sp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = (t?.padding || 0) / 2, o = a.width + t.padding, l = a.height + t.padding, c = -a.width / 2 - s, h = -a.height / 2 - s, u = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: o, y: -l },
    { x: 0, y: -l },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: o + 8, y: 0 },
    { x: o + 8, y: -l },
    { x: -8, y: -l },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const f = j.svg(n), d = Y(t, {}), g = f.rectangle(c - 8, h, o + 16, l, d), m = f.line(c, h, c, h + l, d), y = f.line(c + o, h, c + o, h + l, d);
    n.insert(() => m, ":first-child"), n.insert(() => y, ":first-child");
    const x = n.insert(() => g, ":first-child"), { cssStyles: b } = t;
    x.attr("class", "basic label-container").attr("style", Rt(b)), G(t, x);
  } else {
    const f = Ye(n, o, l, u);
    i && f.attr("style", i), G(t, f);
  }
  return t.intersect = function(f) {
    return W.polygon(t, u, f);
  }, n;
}
p(Sp, "subroutine");
async function Tp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), o = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = -s / 2, c = -o / 2, h = 0.2 * o, u = 0.2 * o, { cssStyles: f } = t, d = j.svg(n), g = Y(t, {}), m = [
    { x: l - h / 2, y: c },
    { x: l + s + h / 2, y: c },
    { x: l + s + h / 2, y: c + o },
    { x: l - h / 2, y: c + o }
  ], y = [
    { x: l + s - h / 2, y: c + o },
    { x: l + s + h / 2, y: c + o },
    { x: l + s + h / 2, y: c + o - u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = lt(m), b = d.path(x, g), C = lt(y), v = d.path(C, { ...g, fillStyle: "solid" }), k = n.insert(() => v, ":first-child");
  return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), f && t.look !== "handDrawn" && k.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), G(t, k), t.intersect = function(A) {
    return W.polygon(t, m, A);
  }, n;
}
p(Tp, "taggedRect");
async function Bp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 4, h = 0.2 * o, u = 0.2 * l, f = l + c, { cssStyles: d } = t, g = j.svg(n), m = Y(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -o / 2 - o / 2 * 0.1, y: f / 2 },
    ...We(
      -o / 2 - o / 2 * 0.1,
      f / 2,
      o / 2 + o / 2 * 0.1,
      f / 2,
      c,
      0.8
    ),
    { x: o / 2 + o / 2 * 0.1, y: -f / 2 },
    { x: -o / 2 - o / 2 * 0.1, y: -f / 2 }
  ], x = -o / 2 + o / 2 * 0.1, b = -f / 2 - u * 0.4, C = [
    { x: x + o - h, y: (b + l) * 1.4 },
    { x: x + o, y: b + l - u },
    { x: x + o, y: (b + l) * 0.9 },
    ...We(
      x + o,
      (b + l) * 1.3,
      x + o - h,
      (b + l) * 1.5,
      -l * 0.03,
      0.5
    )
  ], v = lt(y), k = g.path(v, m), A = lt(C), S = g.path(A, {
    ...m,
    fillStyle: "solid"
  }), D = n.insert(() => S, ":first-child");
  return D.insert(() => k, ":first-child"), D.attr("class", "basic label-container"), d && t.look !== "handDrawn" && D.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), D.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, D), t.intersect = function(I) {
    return W.polygon(t, y, I);
  }, n;
}
p(Bp, "taggedWaveEdgedRectangle");
async function Ap(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = Math.max(a.width + t.padding, t?.width || 0), o = Math.max(a.height + t.padding, t?.height || 0), l = -s / 2, c = -o / 2, h = n.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", s).attr("height", o), G(t, h), t.intersect = function(u) {
    return W.rect(t, u);
  }, n;
}
p(Ap, "text");
var Av = /* @__PURE__ */ p((e, t, r, i, n, a) => `M${e},${t}
    a${n},${a} 0,0,1 0,${-i}
    l${r},0
    a${n},${a} 0,0,1 0,${i}
    M${r},${-i}
    a${n},${a} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), Lv = /* @__PURE__ */ p((e, t, r, i, n, a) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${n},${a} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${n},${a} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), Mv = /* @__PURE__ */ p((e, t, r, i, n, a) => [`M${e + r / 2},${-i / 2}`, `a${n},${a} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD");
async function Lp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s, halfPadding: o } = await it(
    e,
    t,
    rt(t)
  ), l = t.look === "neo" ? o * 2 : o, c = a.height + l, h = c / 2, u = h / (2.5 + c / 50), f = a.width + u + l, { cssStyles: d } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = j.svg(n), y = Lv(0, 0, f, c, u, h), x = Mv(0, 0, f, c, u, h), b = m.path(y, Y(t, {})), C = m.path(x, Y(t, { fill: "none" }));
    g = n.insert(() => C, ":first-child"), g = n.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), d && g.attr("style", d);
  } else {
    const m = Av(0, 0, f, c, u, h);
    g = n.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Rt(d)).attr("style", i), g.attr("class", "basic label-container"), d && g.selectAll("path").attr("style", d), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", u), g.attr("transform", `translate(${-f / 2}, ${c / 2} )`), s.attr(
    "transform",
    `translate(${-(a.width / 2) - u - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`
  ), G(t, g), t.intersect = function(m) {
    const y = W.rect(t, m), x = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let b = u * u * (1 - x * x / (h * h));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = u - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, n;
}
p(Lp, "tiltedCylinder");
async function Mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = a.width + t.padding, o = a.height + t.padding, l = [
    { x: -3 * o / 6, y: 0 },
    { x: s + 3 * o / 6, y: 0 },
    { x: s, y: -o },
    { x: 0, y: -o }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = j.svg(n), f = Y(t, {}), d = lt(l), g = u.path(d, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), h && c.attr("style", h);
  } else
    c = Ye(n, s, o, l);
  return i && c.attr("style", i), t.width = s, t.height = o, G(t, c), t.intersect = function(u) {
    return W.polygon(t, l, u);
  }, n;
}
p(Mp, "trapezoid");
async function Ep(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = 60, o = 20, l = Math.max(s, a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(o, a.height + (t.padding ?? 0) * 2, t?.height ?? 0), { cssStyles: h } = t, u = j.svg(n), f = Y(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const d = [
    { x: -l / 2 * 0.8, y: -c / 2 },
    { x: l / 2 * 0.8, y: -c / 2 },
    { x: l / 2, y: -c / 2 * 0.6 },
    { x: l / 2, y: c / 2 },
    { x: -l / 2, y: c / 2 },
    { x: -l / 2, y: -c / 2 * 0.6 }
  ], g = lt(d), m = u.path(g, f), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectChildren("path").attr("style", h), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), G(t, y), t.intersect = function(x) {
    return W.polygon(t, d, x);
  }, n;
}
p(Ep, "trapezoidalPentagon");
async function $p(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Bt(ft().flowchart?.htmlLabels), l = a.width + (t.padding ?? 0), c = l + a.height, h = l + a.height, u = [
    { x: 0, y: 0 },
    { x: h, y: 0 },
    { x: h / 2, y: -c }
  ], { cssStyles: f } = t, d = j.svg(n), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = lt(u), y = d.path(m, g), x = n.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
  return f && t.look !== "handDrawn" && x.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), t.width = l, t.height = c, G(t, x), s.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${c / 2 - (a.height + (t.padding ?? 0) / (o ? 2 : 1) - (a.y - (a.top ?? 0)))})`
  ), t.intersect = function(b) {
    return F.info("Triangle intersect", t, u, b), W.polygon(t, u, b);
  }, n;
}
p($p, "triangle");
async function Fp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 8, h = l + c, { cssStyles: u } = t, d = 70 - o, g = d > 0 ? d / 2 : 0, m = j.svg(n), y = Y(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = [
    { x: -o / 2 - g, y: h / 2 },
    ...We(
      -o / 2 - g,
      h / 2,
      o / 2 + g,
      h / 2,
      c,
      0.8
    ),
    { x: o / 2 + g, y: -h / 2 },
    { x: -o / 2 - g, y: -h / 2 }
  ], b = lt(x), C = m.path(b, y), v = n.insert(() => C, ":first-child");
  return v.attr("class", "basic label-container"), u && t.look !== "handDrawn" && v.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-c / 2})`), s.attr(
    "transform",
    `translate(${-o / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c - (a.y - (a.top ?? 0))})`
  ), G(t, v), t.intersect = function(k) {
    return W.polygon(t, x, k);
  }, n;
}
p(Fp, "waveEdgedRectangle");
async function Dp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await it(e, t, rt(t)), s = 100, o = 50, l = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), h = l / c;
  let u = l, f = c;
  u > f * h ? f = u / h : u = f * h, u = Math.max(u, s), f = Math.max(f, o);
  const d = Math.min(f * 0.2, f / 4), g = f + d * 2, { cssStyles: m } = t, y = j.svg(n), x = Y(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const b = [
    { x: -u / 2, y: g / 2 },
    ...We(-u / 2, g / 2, u / 2, g / 2, d, 1),
    { x: u / 2, y: -g / 2 },
    ...We(u / 2, -g / 2, -u / 2, -g / 2, d, -1)
  ], C = lt(b), v = y.path(C, x), k = n.insert(() => v, ":first-child");
  return k.attr("class", "basic label-container"), m && t.look !== "handDrawn" && k.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), G(t, k), t.intersect = function(A) {
    return W.polygon(t, b, A);
  }, n;
}
p(Dp, "waveRectangle");
async function Op(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: s } = await it(e, t, rt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = 5, h = -o / 2, u = -l / 2, { cssStyles: f } = t, d = j.svg(n), g = Y(t, {}), m = [
    { x: h - c, y: u - c },
    { x: h - c, y: u + l },
    { x: h + o, y: u + l },
    { x: h + o, y: u - c }
  ], y = `M${h - c},${u - c} L${h + o},${u - c} L${h + o},${u + l} L${h - c},${u + l} L${h - c},${u - c}
                M${h - c},${u} L${h + o},${u}
                M${h},${u - c} L${h},${u + l}`;
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = d.path(y, g), b = n.insert(() => x, ":first-child");
  return b.attr("transform", `translate(${c / 2}, ${c / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), s.attr(
    "transform",
    `translate(${-(a.width / 2) + c / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c / 2 - (a.y - (a.top ?? 0))})`
  ), G(t, b), t.intersect = function(C) {
    return W.polygon(t, m, C);
  }, n;
}
p(Op, "windowPane");
async function jo(e, t) {
  const r = t;
  if (r.alias && (t.label = r.alias), t.look === "handDrawn") {
    const { themeVariables: J } = Dt(), { background: Z } = J, ct = {
      ...t,
      id: t.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${Z}`]
    };
    await jo(e, ct);
  }
  const i = Dt();
  t.useHtmlLabels = i.htmlLabels;
  let n = i.er?.diagramPadding ?? 10, a = i.er?.entityPadding ?? 6;
  const { cssStyles: s } = t, { labelStyles: o, nodeStyles: l } = U(t);
  if (r.attributes.length === 0 && t.label) {
    const J = {
      rx: 0,
      ry: 0,
      labelPaddingX: n,
      labelPaddingY: n * 1.5
    };
    $e(t.label, i) + J.labelPaddingX * 2 < i.er.minEntityWidth && (t.width = i.er.minEntityWidth);
    const Z = await Ca(e, t, J);
    if (!Bt(i.htmlLabels)) {
      const ct = Z.select("text"), at = ct.node()?.getBBox();
      ct.attr("transform", `translate(${-at.width / 2}, 0)`);
    }
    return Z;
  }
  i.htmlLabels || (n *= 1.25, a *= 1.25);
  let c = rt(t);
  c || (c = "node default");
  const h = e.insert("g").attr("class", c).attr("id", t.domId || t.id), u = await kr(h, t.label ?? "", i, 0, 0, ["name"], o);
  u.height += a;
  let f = 0;
  const d = [], g = [];
  let m = 0, y = 0, x = 0, b = 0, C = !0, v = !0;
  for (const J of r.attributes) {
    const Z = await kr(
      h,
      J.type,
      i,
      0,
      f,
      ["attribute-type"],
      o
    );
    m = Math.max(m, Z.width + n);
    const ct = await kr(
      h,
      J.name,
      i,
      0,
      f,
      ["attribute-name"],
      o
    );
    y = Math.max(y, ct.width + n);
    const at = await kr(
      h,
      J.keys.join(),
      i,
      0,
      f,
      ["attribute-keys"],
      o
    );
    x = Math.max(x, at.width + n);
    const bt = await kr(
      h,
      J.comment,
      i,
      0,
      f,
      ["attribute-comment"],
      o
    );
    b = Math.max(b, bt.width + n);
    const Ct = Math.max(Z.height, ct.height, at.height, bt.height) + a;
    g.push({ yOffset: f, rowHeight: Ct }), f += Ct;
  }
  let k = 4;
  x <= n && (C = !1, x = 0, k--), b <= n && (v = !1, b = 0, k--);
  const A = h.node().getBBox();
  if (u.width + n * 2 - (m + y + x + b) > 0) {
    const J = u.width + n * 2 - (m + y + x + b);
    m += J / k, y += J / k, x > 0 && (x += J / k), b > 0 && (b += J / k);
  }
  const S = m + y + x + b, D = j.svg(h), I = Y(t, {});
  t.look !== "handDrawn" && (I.roughness = 0, I.fillStyle = "solid");
  let O = 0;
  g.length > 0 && (O = g.reduce((J, Z) => J + (Z?.rowHeight ?? 0), 0));
  const E = Math.max(A.width + n * 2, t?.width || 0, S), N = Math.max((O ?? 0) + u.height, t?.height || 0), R = -E / 2, B = -N / 2;
  h.selectAll("g:not(:first-child)").each((J, Z, ct) => {
    const at = ht(ct[Z]), bt = at.attr("transform");
    let Ct = 0, Pt = 0;
    if (bt) {
      const yt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(bt);
      yt && (Ct = parseFloat(yt[1]), Pt = parseFloat(yt[2]), at.attr("class").includes("attribute-name") ? Ct += m : at.attr("class").includes("attribute-keys") ? Ct += m + y : at.attr("class").includes("attribute-comment") && (Ct += m + y + x));
    }
    at.attr(
      "transform",
      `translate(${R + n / 2 + Ct}, ${Pt + B + u.height + a / 2})`
    );
  }), h.select(".name").attr("transform", "translate(" + -u.width / 2 + ", " + (B + a / 2) + ")");
  const L = D.rectangle(R, B, E, N, I), T = h.insert(() => L, ":first-child").attr("style", s.join("")), { themeVariables: $ } = Dt(), { rowEven: M, rowOdd: q, nodeBorder: X } = $;
  d.push(0);
  for (const [J, Z] of g.entries()) {
    const at = (J + 1) % 2 === 0 && Z.yOffset !== 0, bt = D.rectangle(R, u.height + B + Z?.yOffset, E, Z?.rowHeight, {
      ...I,
      fill: at ? M : q,
      stroke: X
    });
    h.insert(() => bt, "g.label").attr("style", s.join("")).attr("class", `row-rect-${at ? "even" : "odd"}`);
  }
  let K = D.line(R, u.height + B, E + R, u.height + B, I);
  h.insert(() => K).attr("class", "divider"), K = D.line(m + R, u.height + B, m + R, N + B, I), h.insert(() => K).attr("class", "divider"), C && (K = D.line(
    m + y + R,
    u.height + B,
    m + y + R,
    N + B,
    I
  ), h.insert(() => K).attr("class", "divider")), v && (K = D.line(
    m + y + x + R,
    u.height + B,
    m + y + x + R,
    N + B,
    I
  ), h.insert(() => K).attr("class", "divider"));
  for (const J of d)
    K = D.line(
      R,
      u.height + B + J,
      E + R,
      u.height + B + J,
      I
    ), h.insert(() => K).attr("class", "divider");
  if (G(t, T), l && t.look !== "handDrawn") {
    const Z = l.split(";")?.filter((ct) => ct.includes("stroke"))?.map((ct) => `${ct}`).join("; ");
    h.selectAll("path").attr("style", Z ?? ""), h.selectAll(".row-rect-even path").attr("style", l);
  }
  return t.intersect = function(J) {
    return W.rect(t, J);
  }, h;
}
p(jo, "erBox");
async function kr(e, t, r, i = 0, n = 0, a = [], s = "") {
  const o = e.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${i}, ${n})`).attr("style", s);
  t !== Al(t) && (t = Al(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = o.node().appendChild(
    await He(
      o,
      t,
      {
        width: $e(t, r) + 100,
        style: s,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (Bt(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const u = ht(l);
    c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
p(kr, "addText");
async function Rp(e, t, r, i, n = r.class.padding ?? 12) {
  const a = i ? 0 : 3, s = e.insert("g").attr("class", rt(t)).attr("id", t.domId || t.id);
  let o = null, l = null, c = null, h = null, u = 0, f = 0, d = 0;
  if (o = s.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await gi(o, { text: `«${b}»` }, 0), u = o.node().getBBox().height;
  }
  l = s.insert("g").attr("class", "label-group text"), await gi(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  f = g.height, c = s.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const C = await gi(c, b, m, [b.parseClassifier()]);
    m += C + a;
  }
  d = c.node().getBBox().height, d <= 0 && (d = n / 2), h = s.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const C = await gi(h, b, y, [b.parseClassifier()]);
    y += C + a;
  }
  let x = s.node().getBBox();
  if (o !== null) {
    const b = o.node().getBBox();
    o.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${u})`), x = s.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + f + n * 2})`
  ), x = s.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + f + (d ? d + n * 4 : n * 2)})`
  ), x = s.node().getBBox(), { shapeSvg: s, bbox: x };
}
p(Rp, "textHelper");
async function gi(e, t, r, i = []) {
  const n = e.insert("g").attr("class", "label").attr("style", i.join("; ")), a = Dt();
  let s = "useHtmlLabels" in t ? t.useHtmlLabels : Bt(a.htmlLabels) ?? !0, o = "";
  "text" in t ? o = t.text : o = t.label, !s && o.startsWith("\\") && (o = o.substring(1)), Rr(o) && (s = !0);
  const l = await He(
    n,
    so(dr(o)),
    {
      width: $e(o, a) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: s
    },
    a
  );
  let c, h = 1;
  if (s) {
    const u = l.children[0], f = ht(l);
    h = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h += u.innerHTML.split("<mrow>").length - 1);
    const d = u.getElementsByTagName("img");
    if (d) {
      const g = o.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function x() {
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const b = a.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, v = parseInt(b, 10) * 5 + "px";
                m.style.minWidth = v, m.style.maxWidth = v;
              } else
                m.style.width = "100%";
              y(m);
            }
            p(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && ht(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = o[0] + o.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), o[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return n.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
p(gi, "addText");
async function Ip(e, t) {
  const r = ft(), i = r.class.padding ?? 12, n = i, a = t.useHtmlLabels ?? Bt(r.htmlLabels) ?? !0, s = t;
  s.annotations = s.annotations ?? [], s.members = s.members ?? [], s.methods = s.methods ?? [];
  const { shapeSvg: o, bbox: l } = await Rp(e, t, r, a, n), { labelStyles: c, nodeStyles: h } = U(t);
  t.labelStyle = c, t.cssStyles = s.styles || "";
  const u = s.styles?.join(";") || h || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const f = s.members.length === 0 && s.methods.length === 0 && !r.class?.hideEmptyMembersBox, d = j.svg(o), g = Y(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = l.width;
  let y = l.height;
  s.members.length === 0 && s.methods.length === 0 ? y += n : s.members.length > 0 && s.methods.length === 0 && (y += n * 2);
  const x = -m / 2, b = -y / 2, C = d.rectangle(
    x - i,
    b - i - (f ? i : s.members.length === 0 && s.methods.length === 0 ? -i / 2 : 0),
    m + 2 * i,
    y + 2 * i + (f ? i * 2 : s.members.length === 0 && s.methods.length === 0 ? -i : 0),
    g
  ), v = o.insert(() => C, ":first-child");
  v.attr("class", "basic label-container");
  const k = v.node().getBBox();
  o.selectAll(".text").each((I, O, E) => {
    const N = ht(E[O]), R = N.attr("transform");
    let B = 0;
    if (R) {
      const M = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(R);
      M && (B = parseFloat(M[2]));
    }
    let L = B + b + i - (f ? i : s.members.length === 0 && s.methods.length === 0 ? -i / 2 : 0);
    a || (L -= 4);
    let T = x;
    (N.attr("class").includes("label-group") || N.attr("class").includes("annotation-group")) && (T = -N.node()?.getBBox().width / 2 || 0, o.selectAll("text").each(function($, M, q) {
      window.getComputedStyle(q[M]).textAnchor === "middle" && (T = 0);
    })), N.attr("transform", `translate(${T}, ${L})`);
  });
  const A = o.select(".annotation-group").node().getBBox().height - (f ? i / 2 : 0) || 0, S = o.select(".label-group").node().getBBox().height - (f ? i / 2 : 0) || 0, D = o.select(".members-group").node().getBBox().height - (f ? i / 2 : 0) || 0;
  if (s.members.length > 0 || s.methods.length > 0 || f) {
    const I = d.line(
      k.x,
      A + S + b + i,
      k.x + k.width,
      A + S + b + i,
      g
    );
    o.insert(() => I).attr("class", "divider").attr("style", u);
  }
  if (f || s.members.length > 0 || s.methods.length > 0) {
    const I = d.line(
      k.x,
      A + S + D + b + n * 2 + i,
      k.x + k.width,
      A + S + D + b + i + n * 2,
      g
    );
    o.insert(() => I).attr("class", "divider").attr("style", u);
  }
  if (s.look !== "handDrawn" && o.selectAll("path").attr("style", u), v.select(":nth-child(2)").attr("style", u), o.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? o.selectAll("span").attr("style", t.labelStyle) : o.selectAll("span").attr("style", u), !a) {
    const I = RegExp(/color\s*:\s*([^;]*)/), O = I.exec(u);
    if (O) {
      const E = O[0].replace("color", "fill");
      o.selectAll("tspan").attr("style", E);
    } else if (c) {
      const E = I.exec(c);
      if (E) {
        const N = E[0].replace("color", "fill");
        o.selectAll("tspan").attr("style", N);
      }
    }
  }
  return G(t, v), t.intersect = function(I) {
    return W.rect(t, I);
  }, o;
}
p(Ip, "classBox");
async function Pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const n = t, a = t, s = 20, o = 20, l = "verifyMethod" in t, c = rt(t), h = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let u;
  l ? u = await me(
    h,
    `&lt;&lt;${n.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : u = await me(h, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let f = u;
  const d = await me(
    h,
    n.name,
    f,
    t.labelStyle + "; font-weight: bold;"
  );
  if (f += d + o, l) {
    const A = await me(
      h,
      `${n.requirementId ? `ID: ${n.requirementId}` : ""}`,
      f,
      t.labelStyle
    );
    f += A;
    const S = await me(
      h,
      `${n.text ? `Text: ${n.text}` : ""}`,
      f,
      t.labelStyle
    );
    f += S;
    const D = await me(
      h,
      `${n.risk ? `Risk: ${n.risk}` : ""}`,
      f,
      t.labelStyle
    );
    f += D, await me(
      h,
      `${n.verifyMethod ? `Verification: ${n.verifyMethod}` : ""}`,
      f,
      t.labelStyle
    );
  } else {
    const A = await me(
      h,
      `${a.type ? `Type: ${a.type}` : ""}`,
      f,
      t.labelStyle
    );
    f += A, await me(
      h,
      `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`,
      f,
      t.labelStyle
    );
  }
  const g = (h.node()?.getBBox().width ?? 200) + s, m = (h.node()?.getBBox().height ?? 200) + s, y = -g / 2, x = -m / 2, b = j.svg(h), C = Y(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const v = b.rectangle(y, x, g, m, C), k = h.insert(() => v, ":first-child");
  if (k.attr("class", "basic label-container").attr("style", i), h.selectAll(".label").each((A, S, D) => {
    const I = ht(D[S]), O = I.attr("transform");
    let E = 0, N = 0;
    if (O) {
      const T = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(O);
      T && (E = parseFloat(T[1]), N = parseFloat(T[2]));
    }
    const R = N - m / 2;
    let B = y + s / 2;
    (S === 0 || S === 1) && (B = E), I.attr("transform", `translate(${B}, ${R + s})`);
  }), f > u + d + o) {
    const A = b.line(
      y,
      x + u + d + o,
      y + g,
      x + u + d + o,
      C
    );
    h.insert(() => A).attr("style", i);
  }
  return G(t, k), t.intersect = function(A) {
    return W.rect(t, A);
  }, h;
}
p(Pp, "requirementBox");
async function me(e, t, r, i = "") {
  if (t === "")
    return 0;
  const n = e.insert("g").attr("class", "label").attr("style", i), a = ft(), s = a.htmlLabels ?? !0, o = await He(
    n,
    so(dr(t)),
    {
      width: $e(t, a) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: s,
      style: i
    },
    a
  );
  let l;
  if (s) {
    const c = o.children[0], h = ht(o);
    l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  } else {
    const c = o.children[0];
    for (const h of c.children)
      h.textContent = h.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), i && h.setAttribute("style", i);
    l = o.getBBox(), l.height += 6;
  }
  return n.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
p(me, "addText");
var Ev = /* @__PURE__ */ p((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Np(e, t, { config: r }) {
  const { labelStyles: i, nodeStyles: n } = U(t);
  t.labelStyle = i || "";
  const a = 10, s = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: o,
    bbox: l,
    label: c
  } = await it(e, t, rt(t)), h = t.padding || 10;
  let u = "", f;
  "ticket" in t && t.ticket && r?.kanban?.ticketBaseUrl && (u = r?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), f = o.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const d = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let g, m;
  f ? { label: g, bbox: m } = await Za(
    f,
    "ticket" in t && t.ticket || "",
    d
  ) : { label: g, bbox: m } = await Za(
    o,
    "ticket" in t && t.ticket || "",
    d
  );
  const { label: y, bbox: x } = await Za(
    o,
    "assigned" in t && t.assigned || "",
    d
  );
  t.width = s;
  const b = 10, C = t?.width || 0, v = Math.max(m.height, x.height) / 2, k = Math.max(l.height + b * 2, t?.height || 0) + v, A = -C / 2, S = -k / 2;
  c.attr(
    "transform",
    "translate(" + (h - C / 2) + ", " + (-v - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (h - C / 2) + ", " + (-v + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + C / 2 - x.width - 2 * a) + ", " + (-v + l.height / 2) + ")"
  );
  let D;
  const { rx: I, ry: O } = t, { cssStyles: E } = t;
  if (t.look === "handDrawn") {
    const N = j.svg(o), R = Y(t, {}), B = I || O ? N.path(je(A, S, C, k, I || 0), R) : N.rectangle(A, S, C, k, R);
    D = o.insert(() => B, ":first-child"), D.attr("class", "basic label-container").attr("style", E || null);
  } else {
    D = o.insert("rect", ":first-child"), D.attr("class", "basic label-container __APA__").attr("style", n).attr("rx", I ?? 5).attr("ry", O ?? 5).attr("x", A).attr("y", S).attr("width", C).attr("height", k);
    const N = "priority" in t && t.priority;
    if (N) {
      const R = o.append("line"), B = A + 2, L = S + Math.floor((I ?? 0) / 2), T = S + k - Math.floor((I ?? 0) / 2);
      R.attr("x1", B).attr("y1", L).attr("x2", B).attr("y2", T).attr("stroke-width", "4").attr("stroke", Ev(N));
    }
  }
  return G(t, D), t.height = k, t.intersect = function(N) {
    return W.rect(t, N);
  }, o;
}
p(Np, "kanbanItem");
async function zp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: s, label: o } = await it(
    e,
    t,
    rt(t)
  ), l = a.width + 10 * s, c = a.height + 8 * s, h = 0.15 * l, { cssStyles: u } = t, f = a.width + 20, d = a.height + 20, g = Math.max(l, f), m = Math.max(c, d);
  o.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
  let y;
  const x = `M0 0 
    a${h},${h} 1 0,0 ${g * 0.25},${-1 * m * 0.1}
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},${m * 0.1}

    a${h},${h} 1 0,0 ${g * 0.15},${m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${m * 0.34}
    a${h},${h} 1 0,0 ${-1 * g * 0.15},${m * 0.33}

    a${h},${h} 1 0,0 ${-1 * g * 0.25},${m * 0.15}
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},${-1 * m * 0.15}

    a${h},${h} 1 0,0 ${-1 * g * 0.1},${-1 * m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${-1 * m * 0.34}
    a${h},${h} 1 0,0 ${g * 0.1},${-1 * m * 0.33}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const b = j.svg(n), C = Y(t, {}), v = b.path(x, C);
    y = n.insert(() => v, ":first-child"), y.attr("class", "basic label-container").attr("style", Rt(u));
  } else
    y = n.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", x);
  return y.attr("transform", `translate(${-g / 2}, ${-m / 2})`), G(t, y), t.calcIntersect = function(b, C) {
    return W.rect(b, C);
  }, t.intersect = function(b) {
    return F.info("Bang intersect", t, b), W.rect(t, b);
  }, n;
}
p(zp, "bang");
async function Wp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: s, label: o } = await it(
    e,
    t,
    rt(t)
  ), l = a.width + 2 * s, c = a.height + 2 * s, h = 0.15 * l, u = 0.25 * l, f = 0.35 * l, d = 0.2 * l, { cssStyles: g } = t;
  let m;
  const y = `M0 0 
    a${h},${h} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${f},${f} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${u},${u} 1 0,1 ${l * 0.35},${l * 0.2}

    a${h},${h} 1 0,1 ${l * 0.15},${c * 0.35}
    a${d},${d} 1 0,1 ${-1 * l * 0.15},${c * 0.65}

    a${u},${h} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${f},${f} 1 0,1 ${-1 * l * 0.5},0
    a${h},${h} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${h},${h} 1 0,1 ${-1 * l * 0.1},${-1 * c * 0.35}
    a${d},${d} 1 0,1 ${l * 0.1},${-1 * c * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const x = j.svg(n), b = Y(t, {}), C = x.path(y, b);
    m = n.insert(() => C, ":first-child"), m.attr("class", "basic label-container").attr("style", Rt(g));
  } else
    m = n.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", y);
  return o.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-c / 2})`), G(t, m), t.calcIntersect = function(x, b) {
    return W.rect(x, b);
  }, t.intersect = function(x) {
    return F.info("Cloud intersect", t, x), W.rect(t, x);
  }, n;
}
p(Wp, "cloud");
async function qp(e, t) {
  const { labelStyles: r, nodeStyles: i } = U(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: s, label: o } = await it(
    e,
    t,
    rt(t)
  ), l = a.width + 8 * s, c = a.height + 2 * s, h = 5, u = `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - 2 * h}
    q0,${h} -${h},${h}
    h${-l + 2 * h}
    q-${h},0 -${h},-${h}
    Z
  `, f = n.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", u);
  return n.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", c / 2).attr("x2", l / 2).attr("y2", c / 2), o.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), n.append(() => o.node()), G(t, f), t.calcIntersect = function(d, g) {
    return W.rect(d, g);
  }, t.intersect = function(d) {
    return W.rect(t, d);
  }, n;
}
p(qp, "defaultMindmapNode");
async function Hp(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return Ho(e, t, r);
}
p(Hp, "mindmapCircle");
var $v = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: Cp
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: yp
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: wp
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: Sp
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: jd
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: Ho
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: zp
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: Wp
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: pp
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: Kd
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: op
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: sp
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: Mp
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: np
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Ud
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: Ap
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: Rd
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: xp
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: _p
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: vp
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: Vd
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Qd
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: zd
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Wd
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: qd
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: lp
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: Fp
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Zd
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: Lp
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: cp
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Hd
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: Yd
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: $p
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Op
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Gd
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: Ep
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Xd
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: bp
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: fp
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: up
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: Od
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Nd
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: Bp
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: Tp
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: Dp
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: gp
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: hp
  }
], Fv = /* @__PURE__ */ p(() => {
  const t = [
    ...Object.entries({
      // States
      state: kp,
      choice: Id,
      note: dp,
      // Rectangles
      rectWithTitle: mp,
      labelRect: ap,
      // Icons
      iconSquare: rp,
      iconCircle: tp,
      icon: Jd,
      iconRounded: ep,
      imageSquare: ip,
      anchor: Dd,
      // Kanban diagram
      kanbanItem: Np,
      //Mindmap diagram
      mindmapCircle: Hp,
      defaultMindmapNode: qp,
      // class diagram
      classBox: Ip,
      // er diagram
      erBox: jo,
      // Requirement diagram
      requirementBox: Pp
    }),
    ...$v.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((n) => [n, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), jp = Fv();
function Dv(e) {
  return e in jp;
}
p(Dv, "isValidShape");
var wa = /* @__PURE__ */ new Map();
async function Yp(e, t, r) {
  let i, n;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const a = t.shape ? jp[t.shape] : void 0;
  if (!a)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let s;
    r.config.securityLevel === "sandbox" ? s = "_top" : t.linkTarget && (s = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", s ?? null), n = await a(i, t, r);
  } else
    n = await a(e, t, r), i = n;
  return t.tooltip && n.attr("title", t.tooltip), wa.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
p(Yp, "insertNode");
var OB = /* @__PURE__ */ p((e, t) => {
  wa.set(t.id, e);
}, "setNodeElem"), RB = /* @__PURE__ */ p(() => {
  wa.clear();
}, "clear"), IB = /* @__PURE__ */ p((e) => {
  const t = wa.get(e.id);
  F.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), Ov = /* @__PURE__ */ p((e, t, r, i, n, a) => {
  t.arrowTypeStart && wc(e, "start", t.arrowTypeStart, r, i, n, a), t.arrowTypeEnd && wc(e, "end", t.arrowTypeEnd, r, i, n, a);
}, "addEdgeMarkers"), Rv = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, wc = /* @__PURE__ */ p((e, t, r, i, n, a, s) => {
  const o = Rv[r];
  if (!o) {
    F.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const l = o.type, h = `${n}_${a}-${l}${t === "start" ? "Start" : "End"}`;
  if (s && s.trim() !== "") {
    const u = s.replace(/[^\dA-Za-z]/g, "_"), f = `${h}_${u}`;
    if (!document.getElementById(f)) {
      const d = document.getElementById(h);
      if (d) {
        const g = d.cloneNode(!0);
        g.id = f, g.querySelectorAll("path, circle, line").forEach((y) => {
          y.setAttribute("stroke", s), o.fill && y.setAttribute("fill", s);
        }), d.parentNode?.appendChild(g);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${f})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${h})`);
}, "addEdgeMarker"), Qn = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), PB = /* @__PURE__ */ p(() => {
  Qn.clear(), Mt.clear();
}, "clear"), an = /* @__PURE__ */ p((e) => e ? e.reduce((r, i) => r + ";" + i, "") : "", "getLabelStyles"), Iv = /* @__PURE__ */ p(async (e, t) => {
  let r = Bt(ft().flowchart.htmlLabels);
  const { labelStyles: i } = U(t);
  t.labelStyle = i;
  const n = await He(e, t.label, {
    style: t.labelStyle,
    useHtmlLabels: r,
    addSvgBackground: !0,
    isNode: !1
  });
  F.info("abc82", t, t.labelType);
  const a = e.insert("g").attr("class", "edgeLabel"), s = a.insert("g").attr("class", "label").attr("data-id", t.id);
  s.node().appendChild(n);
  let o = n.getBBox();
  if (r) {
    const c = n.children[0], h = ht(n);
    o = c.getBoundingClientRect(), h.attr("width", o.width), h.attr("height", o.height);
  }
  s.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), Qn.set(t.id, a), t.width = o.width, t.height = o.height;
  let l;
  if (t.startLabelLeft) {
    const c = await er(
      t.startLabelLeft,
      an(t.labelStyle)
    ), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).startLeft = h, mi(l, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const c = await er(
      t.startLabelRight,
      an(t.labelStyle)
    ), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = h.node().appendChild(c), u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).startRight = h, mi(l, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const c = await er(t.endLabelLeft, an(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(c), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).endLeft = h, mi(l, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const c = await er(t.endLabelRight, an(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(c), Mt.get(t.id) || Mt.set(t.id, {}), Mt.get(t.id).endRight = h, mi(l, t.endLabelRight);
  }
  return n;
}, "insertEdgeLabel");
function mi(e, t) {
  ft().flowchart.htmlLabels && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
p(mi, "setTerminalWidth");
var Pv = /* @__PURE__ */ p((e, t) => {
  F.debug("Moving label abc88 ", e.id, e.label, Qn.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = ft(), { subGraphTitleTotalMargin: n } = Co(i);
  if (e.label) {
    const a = Qn.get(e.id);
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcLabelPosition(r);
      F.debug(
        "Moving label " + e.label + " from (",
        s,
        ",",
        o,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (s = l.x, o = l.y);
    }
    a.attr("transform", `translate(${s}, ${o + n / 2})`);
  }
  if (e.startLabelLeft) {
    const a = Mt.get(e.id).startLeft;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      s = l.x, o = l.y;
    }
    a.attr("transform", `translate(${s}, ${o})`);
  }
  if (e.startLabelRight) {
    const a = Mt.get(e.id).startRight;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      s = l.x, o = l.y;
    }
    a.attr("transform", `translate(${s}, ${o})`);
  }
  if (e.endLabelLeft) {
    const a = Mt.get(e.id).endLeft;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      s = l.x, o = l.y;
    }
    a.attr("transform", `translate(${s}, ${o})`);
  }
  if (e.endLabelRight) {
    const a = Mt.get(e.id).endRight;
    let s = e.x, o = e.y;
    if (r) {
      const l = oe.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      s = l.x, o = l.y;
    }
    a.attr("transform", `translate(${s}, ${o})`);
  }
}, "positionEdgeLabel"), Nv = /* @__PURE__ */ p((e, t) => {
  const r = e.x, i = e.y, n = Math.abs(t.x - r), a = Math.abs(t.y - i), s = e.width / 2, o = e.height / 2;
  return n >= s || a >= o;
}, "outsideNode"), zv = /* @__PURE__ */ p((e, t, r) => {
  F.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, n = e.y, a = Math.abs(i - r.x), s = e.width / 2;
  let o = r.x < t.x ? s - a : s + a;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(n - t.y) * s > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - n : n - l - t.y;
    o = h * u / c;
    const f = {
      x: r.x < t.x ? r.x + o : r.x - h + o,
      y: r.y < t.y ? r.y + c - u : r.y - c + u
    };
    return o === 0 && (f.x = t.x, f.y = t.y), h === 0 && (f.x = t.x), c === 0 && (f.y = t.y), F.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h}, r ${o}`, f), f;
  } else {
    r.x < t.x ? o = t.x - s - i : o = i - s - t.x;
    let u = c * o / h, f = r.x < t.x ? r.x + h - o : r.x - h + o, d = r.y < t.y ? r.y + u : r.y - u;
    return F.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h}, r ${o}`, { _x: f, _y: d }), o === 0 && (f = t.x, d = t.y), h === 0 && (f = t.x), c === 0 && (d = t.y), { x: f, y: d };
  }
}, "intersection"), kc = /* @__PURE__ */ p((e, t) => {
  F.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], n = !1;
  return e.forEach((a) => {
    if (F.info("abc88 checking point", a, t), !Nv(t, a) && !n) {
      const s = zv(t, i, a);
      F.debug("abc88 inside", a, i, s), F.debug("abc88 intersection", s, t);
      let o = !1;
      r.forEach((l) => {
        o = o || l.x === s.x && l.y === s.y;
      }), r.some((l) => l.x === s.x && l.y === s.y) ? F.warn("abc88 no intersect", s, r) : r.push(s), n = !0;
    } else
      F.warn("abc88 outside", a, i), i = a, n || r.push(a);
  }), F.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Up(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const n = e[i - 1], a = e[i], s = e[i + 1];
    (n.x === a.x && a.y === s.y && Math.abs(a.x - s.x) > 5 && Math.abs(a.y - n.y) > 5 || n.y === a.y && a.x === s.x && Math.abs(a.x - n.x) > 5 && Math.abs(a.y - s.y) > 5) && (t.push(a), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
p(Up, "extractCornerPoints");
var vc = /* @__PURE__ */ p(function(e, t, r) {
  const i = t.x - e.x, n = t.y - e.y, a = Math.sqrt(i * i + n * n), s = r / a;
  return { x: t.x - s * i, y: t.y - s * n };
}, "findAdjacentPoint"), Wv = /* @__PURE__ */ p(function(e) {
  const { cornerPointPositions: t } = Up(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const n = e[i - 1], a = e[i + 1], s = e[i], o = vc(n, s, 5), l = vc(a, s, 5), c = l.x - o.x, h = l.y - o.y;
      r.push(o);
      const u = Math.sqrt(2) * 2;
      let f = { x: s.x, y: s.y };
      if (Math.abs(a.x - n.x) > 10 && Math.abs(a.y - n.y) >= 10) {
        F.debug(
          "Corner point fixing",
          Math.abs(a.x - n.x),
          Math.abs(a.y - n.y)
        );
        const d = 5;
        s.x === o.x ? f = {
          x: c < 0 ? o.x - d + u : o.x + d - u,
          y: h < 0 ? o.y - u : o.y + u
        } : f = {
          x: c < 0 ? o.x - u : o.x + u,
          y: h < 0 ? o.y - d + u : o.y + d - u
        };
      } else
        F.debug(
          "Corner point skipping fixing",
          Math.abs(a.x - n.x),
          Math.abs(a.y - n.y)
        );
      r.push(f, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), qv = /* @__PURE__ */ p((e, t, r) => {
  const i = e - t - r, n = 2, a = 2, s = n + a, o = Math.floor(i / s), l = Array(o).fill(`${n} ${a}`).join(" ");
  return `0 ${t} ${l} ${r}`;
}, "generateDashArray"), Hv = /* @__PURE__ */ p(function(e, t, r, i, n, a, s, o = !1) {
  const { handDrawnSeed: l } = ft();
  let c = t.points, h = !1;
  const u = n;
  var f = a;
  const d = [];
  for (const B in t.cssCompiledStyles)
    vf(B) || d.push(t.cssCompiledStyles[B]);
  F.debug("UIO intersect check", t.points, f.x, u.x), f.intersect && u.intersect && !o && (c = c.slice(1, t.points.length - 1), c.unshift(u.intersect(c[0])), F.debug(
    "Last point UIO",
    t.start,
    "-->",
    t.end,
    c[c.length - 1],
    f,
    f.intersect(c[c.length - 1])
  ), c.push(f.intersect(c[c.length - 1])));
  const g = btoa(JSON.stringify(c));
  t.toCluster && (F.info("to cluster abc88", r.get(t.toCluster)), c = kc(t.points, r.get(t.toCluster).node), h = !0), t.fromCluster && (F.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(c, null, 2)
  ), c = kc(c.reverse(), r.get(t.fromCluster).node).reverse(), h = !0);
  let m = c.filter((B) => !Number.isNaN(B.y));
  m = Wv(m);
  let y = on;
  switch (y = Ja, t.curve) {
    case "linear":
      y = Ja;
      break;
    case "basis":
      y = on;
      break;
    case "cardinal":
      y = Uc;
      break;
    case "bumpX":
      y = jc;
      break;
    case "bumpY":
      y = Hc;
      break;
    case "catmullRom":
      y = Xc;
      break;
    case "monotoneX":
      y = qc;
      break;
    case "monotoneY":
      y = Wc;
      break;
    case "natural":
      y = zc;
      break;
    case "step":
      y = Nc;
      break;
    case "stepAfter":
      y = Pc;
      break;
    case "stepBefore":
      y = Ic;
      break;
    default:
      y = on;
  }
  const { x, y: b } = W1(t), C = rm().x(x).y(b).curve(y);
  let v;
  switch (t.thickness) {
    case "normal":
      v = "edge-thickness-normal";
      break;
    case "thick":
      v = "edge-thickness-thick";
      break;
    case "invisible":
      v = "edge-thickness-invisible";
      break;
    default:
      v = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      v += " edge-pattern-solid";
      break;
    case "dotted":
      v += " edge-pattern-dotted";
      break;
    case "dashed":
      v += " edge-pattern-dashed";
      break;
    default:
      v += " edge-pattern-solid";
  }
  let k, A = t.curve === "rounded" ? Gp(Xp(m, t), 5) : C(m);
  const S = Array.isArray(t.style) ? t.style : [t.style];
  let D = S.find((B) => B?.startsWith("stroke:")), I = !1;
  if (t.look === "handDrawn") {
    const B = j.svg(e);
    Object.assign([], m);
    const L = B.path(A, {
      roughness: 0.3,
      seed: l
    });
    v += " transition", k = ht(L).select("path").attr("id", t.id).attr("class", " " + v + (t.classes ? " " + t.classes : "")).attr("style", S ? S.reduce(($, M) => $ + ";" + M, "") : "");
    let T = k.attr("d");
    k.attr("d", T), e.node().appendChild(k.node());
  } else {
    const B = d.join(";"), L = S ? S.reduce((J, Z) => J + Z + ";", "") : "";
    let T = "";
    t.animate && (T = " edge-animation-fast"), t.animation && (T = " edge-animation-" + t.animation);
    const $ = (B ? B + ";" + L + ";" : L) + ";" + (S ? S.reduce((J, Z) => J + ";" + Z, "") : "");
    k = e.append("path").attr("d", A).attr("id", t.id).attr(
      "class",
      " " + v + (t.classes ? " " + t.classes : "") + (T ?? "")
    ).attr("style", $), D = $.match(/stroke:([^;]+)/)?.[1], I = t.animate === !0 || !!t.animation || B.includes("animation");
    const M = k.node(), q = typeof M.getTotalLength == "function" ? M.getTotalLength() : 0, X = Nl[t.arrowTypeStart] || 0, K = Nl[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !I) {
      const Z = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? qv(q, X, K) : `0 ${X} ${q - X - K} ${K}`}; stroke-dashoffset: 0;`;
      k.attr("style", Z + k.attr("style"));
    }
  }
  k.attr("data-edge", !0), k.attr("data-et", "edge"), k.attr("data-id", t.id), k.attr("data-points", g), t.showPoints && m.forEach((B) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", B.x).attr("cy", B.y);
  });
  let O = "";
  (ft().flowchart.arrowMarkerAbsolute || ft().state.arrowMarkerAbsolute) && (O = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, O = O.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), F.info("arrowTypeStart", t.arrowTypeStart), F.info("arrowTypeEnd", t.arrowTypeEnd), Ov(k, t, O, s, i, D);
  const E = Math.floor(c.length / 2), N = c[E];
  oe.isLabelCoordinateInPath(N, k.attr("d")) || (h = !0);
  let R = {};
  return h && (R.updatedPath = c), R.originalPath = t.points, R;
}, "insertEdge");
function Gp(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, n = 1e-5;
  for (let a = 0; a < i; a++) {
    const s = e[a], o = e[a - 1], l = e[a + 1];
    if (a === 0)
      r += `M${s.x},${s.y}`;
    else if (a === i - 1)
      r += `L${s.x},${s.y}`;
    else {
      const c = s.x - o.x, h = s.y - o.y, u = l.x - s.x, f = l.y - s.y, d = Math.hypot(c, h), g = Math.hypot(u, f);
      if (d < n || g < n) {
        r += `L${s.x},${s.y}`;
        continue;
      }
      const m = c / d, y = h / d, x = u / g, b = f / g, C = m * x + y * b, v = Math.max(-1, Math.min(1, C)), k = Math.acos(v);
      if (k < n || Math.abs(Math.PI - k) < n) {
        r += `L${s.x},${s.y}`;
        continue;
      }
      const A = Math.min(t / Math.sin(k / 2), d / 2, g / 2), S = s.x - m * A, D = s.y - y * A, I = s.x + x * A, O = s.y + b * A;
      r += `L${S},${D}`, r += `Q${s.x},${s.y} ${I},${O}`;
    }
  }
  return r;
}
p(Gp, "generateRoundedPath");
function zs(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
p(zs, "calculateDeltaAndAngle");
function Xp(e, t) {
  const r = e.map((n) => ({ ...n }));
  if (e.length >= 2 && Ft[t.arrowTypeStart]) {
    const n = Ft[t.arrowTypeStart], a = e[0], s = e[1], { angle: o } = zs(a, s), l = n * Math.cos(o), c = n * Math.sin(o);
    r[0].x = a.x + l, r[0].y = a.y + c;
  }
  const i = e.length;
  if (i >= 2 && Ft[t.arrowTypeEnd]) {
    const n = Ft[t.arrowTypeEnd], a = e[i - 1], s = e[i - 2], { angle: o } = zs(s, a), l = n * Math.cos(o), c = n * Math.sin(o);
    r[i - 1].x = a.x - l, r[i - 1].y = a.y - c;
  }
  return r;
}
p(Xp, "applyMarkerOffsetsToPoints");
var jv = /* @__PURE__ */ p((e, t, r, i) => {
  t.forEach((n) => {
    s_[n](e, r, i);
  });
}, "insertMarkers"), Yv = /* @__PURE__ */ p((e, t, r) => {
  F.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), Uv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), Gv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), Xv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), Vv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), Zv = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), Kv = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), Qv = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), Jv = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), t_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), e_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), n.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), r_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), i_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), n.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), n_ = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), a_ = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), s_ = {
  extension: Yv,
  composition: Uv,
  aggregation: Gv,
  dependency: Xv,
  lollipop: Vv,
  point: Zv,
  circle: Kv,
  cross: Qv,
  barb: Jv,
  only_one: t_,
  zero_or_one: e_,
  one_or_more: r_,
  zero_or_more: i_,
  requirement_arrow: n_,
  requirement_contains: a_
}, o_ = jv, l_ = {
  common: Hr,
  getConfig: Dt,
  insertCluster: mv,
  insertEdge: Hv,
  insertEdgeLabel: Iv,
  insertMarkers: o_,
  insertNode: Yp,
  interpolateToCurve: So,
  labelHelper: it,
  log: F,
  positionEdgeLabel: Pv
}, Ei = {}, Vp = /* @__PURE__ */ p((e) => {
  for (const t of e)
    Ei[t.name] = t;
}, "registerLayoutLoaders"), c_ = /* @__PURE__ */ p(() => {
  Vp([
    {
      name: "dagre",
      loader: /* @__PURE__ */ p(async () => await import("./dagre-6UL2VRFP-Dq-K1iRm.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ p(async () => await import("./cose-bilkent-S5V4N54A-bJOw4lxL.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
c_();
var NB = /* @__PURE__ */ p(async (e, t) => {
  if (!(e.layoutAlgorithm in Ei))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  const r = Ei[e.layoutAlgorithm];
  return (await r.loader()).render(e, t, l_, {
    algorithm: r.algorithm
  });
}, "render"), zB = /* @__PURE__ */ p((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in Ei)
    return e;
  if (t in Ei)
    return F.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), Zp = "comm", Kp = "rule", Qp = "decl", h_ = "@import", u_ = "@namespace", f_ = "@keyframes", d_ = "@layer", Jp = Math.abs, Yo = String.fromCharCode;
function tg(e) {
  return e.trim();
}
function bn(e, t, r) {
  return e.replace(t, r);
}
function p_(e, t, r) {
  return e.indexOf(t, r);
}
function Sr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Wr(e, t, r) {
  return e.slice(t, r);
}
function ye(e) {
  return e.length;
}
function g_(e) {
  return e.length;
}
function sn(e, t) {
  return t.push(e), e;
}
var ka = 1, qr = 1, eg = 0, te = 0, kt = 0, Xr = "";
function Uo(e, t, r, i, n, a, s, o) {
  return { value: e, root: t, parent: r, type: i, props: n, children: a, line: ka, column: qr, length: s, return: "", siblings: o };
}
function m_() {
  return kt;
}
function y_() {
  return kt = te > 0 ? Sr(Xr, --te) : 0, qr--, kt === 10 && (qr = 1, ka--), kt;
}
function ce() {
  return kt = te < eg ? Sr(Xr, te++) : 0, qr++, kt === 10 && (qr = 1, ka++), kt;
}
function Ie() {
  return Sr(Xr, te);
}
function Cn() {
  return te;
}
function va(e, t) {
  return Wr(Xr, e, t);
}
function $i(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function x_(e) {
  return ka = qr = 1, eg = ye(Xr = e), te = 0, [];
}
function b_(e) {
  return Xr = "", e;
}
function Ka(e) {
  return tg(va(te - 1, Ws(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function C_(e) {
  for (; (kt = Ie()) && kt < 33; )
    ce();
  return $i(e) > 2 || $i(kt) > 3 ? "" : " ";
}
function w_(e, t) {
  for (; --t && ce() && !(kt < 48 || kt > 102 || kt > 57 && kt < 65 || kt > 70 && kt < 97); )
    ;
  return va(e, Cn() + (t < 6 && Ie() == 32 && ce() == 32));
}
function Ws(e) {
  for (; ce(); )
    switch (kt) {
      // ] ) " '
      case e:
        return te;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ws(kt);
        break;
      // (
      case 40:
        e === 41 && Ws(e);
        break;
      // \
      case 92:
        ce();
        break;
    }
  return te;
}
function k_(e, t) {
  for (; ce() && e + kt !== 57; )
    if (e + kt === 84 && Ie() === 47)
      break;
  return "/*" + va(t, te - 1) + "*" + Yo(e === 47 ? e : ce());
}
function v_(e) {
  for (; !$i(Ie()); )
    ce();
  return va(e, te);
}
function __(e) {
  return b_(wn("", null, null, null, [""], e = x_(e), 0, [0], e));
}
function wn(e, t, r, i, n, a, s, o, l) {
  for (var c = 0, h = 0, u = s, f = 0, d = 0, g = 0, m = 1, y = 1, x = 1, b = 0, C = "", v = n, k = a, A = i, S = C; y; )
    switch (g = b, b = ce()) {
      // (
      case 40:
        if (g != 108 && Sr(S, u - 1) == 58) {
          p_(S += bn(Ka(b), "&", "&\f"), "&\f", Jp(c ? o[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += Ka(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += C_(g);
        break;
      // \
      case 92:
        S += w_(Cn() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ie()) {
          case 42:
          case 47:
            sn(S_(k_(ce(), Cn()), t, r, l), l), ($i(g || 1) == 5 || $i(Ie() || 1) == 5) && ye(S) && Wr(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * m:
        o[c++] = ye(S) * x;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + h:
            x == -1 && (S = bn(S, /\f/g, "")), d > 0 && (ye(S) - u || m === 0 && g === 47) && sn(d > 32 ? Sc(S + ";", i, r, u - 1, l) : Sc(bn(S, " ", "") + ";", i, r, u - 2, l), l);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (sn(A = _c(S, t, r, c, h, n, o, C, v = [], k = [], u, a), a), b === 123)
              if (h === 0)
                wn(S, t, A, A, v, a, u, o, k);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Sr(S, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Sr(S, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? wn(e, A, A, i && sn(_c(e, A, A, 0, 0, n, o, C, n, v = [], u, k), k), n, k, u, o, i ? v : k) : wn(S, A, A, A, [""], k, 0, o, k);
              }
        }
        c = h = d = 0, m = x = 1, C = S = "", u = s;
        break;
      // :
      case 58:
        u = 1 + ye(S), d = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && y_() == 125)
            continue;
        }
        switch (S += Yo(b), b * m) {
          // &
          case 38:
            x = h > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            o[c++] = (ye(S) - 1) * x, x = 1;
            break;
          // @
          case 64:
            Ie() === 45 && (S += Ka(ce())), f = Ie(), h = u = ye(C = S += v_(Cn())), b++;
            break;
          // -
          case 45:
            g === 45 && ye(S) == 2 && (m = 0);
        }
    }
  return a;
}
function _c(e, t, r, i, n, a, s, o, l, c, h, u) {
  for (var f = n - 1, d = n === 0 ? a : [""], g = g_(d), m = 0, y = 0, x = 0; m < i; ++m)
    for (var b = 0, C = Wr(e, f + 1, f = Jp(y = s[m])), v = e; b < g; ++b)
      (v = tg(y > 0 ? d[b] + " " + C : bn(C, /&\f/g, d[b]))) && (l[x++] = v);
  return Uo(e, t, r, n === 0 ? Kp : o, l, c, h, u);
}
function S_(e, t, r, i) {
  return Uo(e, t, r, Zp, Yo(m_()), Wr(e, 2, -2), 0, i);
}
function Sc(e, t, r, i, n) {
  return Uo(e, t, r, Qp, Wr(e, 0, i), Wr(e, i + 1, -1), i, n);
}
function qs(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function T_(e, t, r, i) {
  switch (e.type) {
    case d_:
      if (e.children.length) break;
    case h_:
    case u_:
    case Qp:
      return e.return = e.return || e.value;
    case Zp:
      return "";
    case f_:
      return e.return = e.value + "{" + qs(e.children, i) + "}";
    case Kp:
      if (!ye(e.value = e.props.join(","))) return "";
  }
  return ye(r = qs(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
var B_ = Bf(Object.keys, Object), A_ = Object.prototype, L_ = A_.hasOwnProperty;
function M_(e) {
  if (!fa(e))
    return B_(e);
  var t = [];
  for (var r in Object(e))
    L_.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Hs = fr(we, "DataView"), js = fr(we, "Promise"), Ys = fr(we, "Set"), Us = fr(we, "WeakMap"), Tc = "[object Map]", E_ = "[object Object]", Bc = "[object Promise]", Ac = "[object Set]", Lc = "[object WeakMap]", Mc = "[object DataView]", $_ = ur(Hs), F_ = ur(Li), D_ = ur(js), O_ = ur(Ys), R_ = ur(Us), Ke = Yr;
(Hs && Ke(new Hs(new ArrayBuffer(1))) != Mc || Li && Ke(new Li()) != Tc || js && Ke(js.resolve()) != Bc || Ys && Ke(new Ys()) != Ac || Us && Ke(new Us()) != Lc) && (Ke = function(e) {
  var t = Yr(e), r = t == E_ ? e.constructor : void 0, i = r ? ur(r) : "";
  if (i)
    switch (i) {
      case $_:
        return Mc;
      case F_:
        return Tc;
      case D_:
        return Bc;
      case O_:
        return Ac;
      case R_:
        return Lc;
    }
  return t;
});
var I_ = "[object Map]", P_ = "[object Set]", N_ = Object.prototype, z_ = N_.hasOwnProperty;
function Ec(e) {
  if (e == null)
    return !0;
  if (da(e) && (qn(e) || typeof e == "string" || typeof e.splice == "function" || vo(e) || _o(e) || Wn(e)))
    return !e.length;
  var t = Ke(e);
  if (t == I_ || t == P_)
    return !e.size;
  if (fa(e))
    return !M_(e).length;
  for (var r in e)
    if (z_.call(e, r))
      return !1;
  return !0;
}
var rg = "c4", W_ = /* @__PURE__ */ p((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), q_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./c4Diagram-YG6GDRKO-BOPhMNjx.js");
  return { id: rg, diagram: e };
}, "loader"), H_ = {
  id: rg,
  detector: W_,
  loader: q_
}, j_ = H_, ig = "flowchart", Y_ = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"), U_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BJNctPhE.js");
  return { id: ig, diagram: e };
}, "loader"), G_ = {
  id: ig,
  detector: Y_,
  loader: U_
}, X_ = G_, ng = "flowchart-v2", V_ = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"), Z_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BJNctPhE.js");
  return { id: ng, diagram: e };
}, "loader"), K_ = {
  id: ng,
  detector: V_,
  loader: Z_
}, Q_ = K_, ag = "er", J_ = /* @__PURE__ */ p((e) => /^\s*erDiagram/.test(e), "detector"), tS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./erDiagram-Q2GNP2WA-CRkDYD0G.js");
  return { id: ag, diagram: e };
}, "loader"), eS = {
  id: ag,
  detector: J_,
  loader: tS
}, rS = eS, sg = "gitGraph", iS = /* @__PURE__ */ p((e) => /^\s*gitGraph/.test(e), "detector"), nS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-NY62KEGX-CHBFGDB0.js");
  return { id: sg, diagram: e };
}, "loader"), aS = {
  id: sg,
  detector: iS,
  loader: nS
}, sS = aS, og = "gantt", oS = /* @__PURE__ */ p((e) => /^\s*gantt/.test(e), "detector"), lS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ganttDiagram-JELNMOA3-C-iJA29-.js");
  return { id: og, diagram: e };
}, "loader"), cS = {
  id: og,
  detector: oS,
  loader: lS
}, hS = cS, lg = "info", uS = /* @__PURE__ */ p((e) => /^\s*info/.test(e), "detector"), fS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./infoDiagram-WHAUD3N6-DiZK_OCY.js");
  return { id: lg, diagram: e };
}, "loader"), dS = {
  id: lg,
  detector: uS,
  loader: fS
}, cg = "pie", pS = /* @__PURE__ */ p((e) => /^\s*pie/.test(e), "detector"), gS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./pieDiagram-ADFJNKIX-CcZty7Ht.js");
  return { id: cg, diagram: e };
}, "loader"), mS = {
  id: cg,
  detector: pS,
  loader: gS
}, hg = "quadrantChart", yS = /* @__PURE__ */ p((e) => /^\s*quadrantChart/.test(e), "detector"), xS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./quadrantDiagram-AYHSOK5B-CjXqYYz3.js");
  return { id: hg, diagram: e };
}, "loader"), bS = {
  id: hg,
  detector: yS,
  loader: xS
}, CS = bS, ug = "xychart", wS = /* @__PURE__ */ p((e) => /^\s*xychart(-beta)?/.test(e), "detector"), kS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./xychartDiagram-PRI3JC2R-USUkh8YL.js");
  return { id: ug, diagram: e };
}, "loader"), vS = {
  id: ug,
  detector: wS,
  loader: kS
}, _S = vS, fg = "requirement", SS = /* @__PURE__ */ p((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), TS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./requirementDiagram-UZGBJVZJ-B5t17bOY.js");
  return { id: fg, diagram: e };
}, "loader"), BS = {
  id: fg,
  detector: SS,
  loader: TS
}, AS = BS, dg = "sequence", LS = /* @__PURE__ */ p((e) => /^\s*sequenceDiagram/.test(e), "detector"), MS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sequenceDiagram-WL72ISMW-D9KiDIIM.js");
  return { id: dg, diagram: e };
}, "loader"), ES = {
  id: dg,
  detector: LS,
  loader: MS
}, $S = ES, pg = "class", FS = /* @__PURE__ */ p((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"), DS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-2ON5EDUG-CTqHRdSU.js");
  return { id: pg, diagram: e };
}, "loader"), OS = {
  id: pg,
  detector: FS,
  loader: DS
}, RS = OS, gg = "classDiagram", IS = /* @__PURE__ */ p((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"), PS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-v2-WZHVMYZB-CTqHRdSU.js");
  return { id: gg, diagram: e };
}, "loader"), NS = {
  id: gg,
  detector: IS,
  loader: PS
}, zS = NS, mg = "state", WS = /* @__PURE__ */ p((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"), qS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-FKZM4ZOC-VtD49Tob.js");
  return { id: mg, diagram: e };
}, "loader"), HS = {
  id: mg,
  detector: WS,
  loader: qS
}, jS = HS, yg = "stateDiagram", YS = /* @__PURE__ */ p((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"), US = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-4FDKWEC3-D-W-6xte.js");
  return { id: yg, diagram: e };
}, "loader"), GS = {
  id: yg,
  detector: YS,
  loader: US
}, XS = GS, xg = "journey", VS = /* @__PURE__ */ p((e) => /^\s*journey/.test(e), "detector"), ZS = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./journeyDiagram-XKPGCS4Q-CGay86As.js");
  return { id: xg, diagram: e };
}, "loader"), KS = {
  id: xg,
  detector: VS,
  loader: ZS
}, QS = KS, JS = /* @__PURE__ */ p((e, t, r) => {
  F.debug(`rendering svg for syntax error
`);
  const i = Fb(t), n = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), bh(i, 100, 512, !0), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), bg = { draw: JS }, tT = bg, eT = {
  db: {},
  renderer: bg,
  parser: {
    parse: /* @__PURE__ */ p(() => {
    }, "parse")
  }
}, rT = eT, Cg = "flowchart-elk", iT = /* @__PURE__ */ p((e, t = {}) => (
  // If diagram explicitly states flowchart-elk
  /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
  /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1
), "detector"), nT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BJNctPhE.js");
  return { id: Cg, diagram: e };
}, "loader"), aT = {
  id: Cg,
  detector: iT,
  loader: nT
}, sT = aT, wg = "timeline", oT = /* @__PURE__ */ p((e) => /^\s*timeline/.test(e), "detector"), lT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./timeline-definition-IT6M3QCI-DtcfMOhb.js");
  return { id: wg, diagram: e };
}, "loader"), cT = {
  id: wg,
  detector: oT,
  loader: lT
}, hT = cT, kg = "mindmap", uT = /* @__PURE__ */ p((e) => /^\s*mindmap/.test(e), "detector"), fT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./mindmap-definition-VGOIOE7T-Bu8pzg_v.js");
  return { id: kg, diagram: e };
}, "loader"), dT = {
  id: kg,
  detector: uT,
  loader: fT
}, pT = dT, vg = "kanban", gT = /* @__PURE__ */ p((e) => /^\s*kanban/.test(e), "detector"), mT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./kanban-definition-3W4ZIXB7-DhaJB1MJ.js");
  return { id: vg, diagram: e };
}, "loader"), yT = {
  id: vg,
  detector: gT,
  loader: mT
}, xT = yT, _g = "sankey", bT = /* @__PURE__ */ p((e) => /^\s*sankey(-beta)?/.test(e), "detector"), CT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sankeyDiagram-TZEHDZUN-PNIYzotk.js");
  return { id: _g, diagram: e };
}, "loader"), wT = {
  id: _g,
  detector: bT,
  loader: CT
}, kT = wT, Sg = "packet", vT = /* @__PURE__ */ p((e) => /^\s*packet(-beta)?/.test(e), "detector"), _T = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-S2PKOQOG-BQZvQuUh.js");
  return { id: Sg, diagram: e };
}, "loader"), ST = {
  id: Sg,
  detector: vT,
  loader: _T
}, Tg = "radar", TT = /* @__PURE__ */ p((e) => /^\s*radar-beta/.test(e), "detector"), BT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-QEK2KX5R-CcA-rkr8.js");
  return { id: Tg, diagram: e };
}, "loader"), AT = {
  id: Tg,
  detector: TT,
  loader: BT
}, Bg = "block", LT = /* @__PURE__ */ p((e) => /^\s*block(-beta)?/.test(e), "detector"), MT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./blockDiagram-VD42YOAC-DwQo6NgO.js");
  return { id: Bg, diagram: e };
}, "loader"), ET = {
  id: Bg,
  detector: LT,
  loader: MT
}, $T = ET, Ag = "architecture", FT = /* @__PURE__ */ p((e) => /^\s*architecture/.test(e), "detector"), DT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./architectureDiagram-VXUJARFQ-09eP2B5r.js");
  return { id: Ag, diagram: e };
}, "loader"), OT = {
  id: Ag,
  detector: FT,
  loader: DT
}, RT = OT, Lg = "treemap", IT = /* @__PURE__ */ p((e) => /^\s*treemap/.test(e), "detector"), PT = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-PSM6KHXK-BYeFAc9T.js");
  return { id: Lg, diagram: e };
}, "loader"), NT = {
  id: Lg,
  detector: IT,
  loader: PT
}, $c = !1, _a = /* @__PURE__ */ p(() => {
  $c || ($c = !0, An("error", rT, (e) => e.toLowerCase().trim() === "error"), An(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ p(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ p(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ p(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ p(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), ns(sT, pT, RT), ns(
    j_,
    xT,
    zS,
    RS,
    rS,
    hS,
    dS,
    mS,
    AS,
    $S,
    Q_,
    X_,
    hT,
    sS,
    XS,
    jS,
    QS,
    CS,
    kT,
    ST,
    _S,
    $T,
    AT,
    NT
  ));
}, "addDiagrams"), zT = /* @__PURE__ */ p(async () => {
  F.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(ir).map(async ([r, { detector: i, loader: n }]) => {
      if (n)
        try {
          ls(r);
        } catch {
          try {
            const { diagram: a, id: s } = await n();
            An(s, a, i);
          } catch (a) {
            throw F.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete ir[r], a;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    F.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      F.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), WT = "graphics-document document";
function Mg(e, t) {
  e.attr("role", WT), t !== "" && e.attr("aria-roledescription", t);
}
p(Mg, "setA11yDiagramInfo");
function Eg(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const n = `chart-desc-${i}`;
      e.attr("aria-describedby", n), e.insert("desc", ":first-child").attr("id", n).text(r);
    }
    if (t) {
      const n = `chart-title-${i}`;
      e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
    }
  }
}
p(Eg, "addSVGa11yTitleDescription");
var rr, Gs = (rr = class {
  constructor(t, r, i, n, a) {
    this.type = t, this.text = r, this.db = i, this.parser = n, this.renderer = a;
  }
  static async fromText(t, r = {}) {
    const i = Dt(), n = to(t, i);
    t = Nw(t) + `
`;
    try {
      ls(n);
    } catch {
      const c = Um(n);
      if (!c)
        throw new oh(`Diagram ${n} not found.`);
      const { id: h, diagram: u } = await c();
      An(h, u);
    }
    const { db: a, parser: s, renderer: o, init: l } = ls(n);
    return s.parser && (s.parser.yy = a), a.clear?.(), l?.(i), r.title && a.setDiagramTitle?.(r.title), await s.parse(t), new rr(n, t, a, s, o);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, p(rr, "Diagram"), rr), Fc = [], qT = /* @__PURE__ */ p(() => {
  Fc.forEach((e) => {
    e();
  }), Fc = [];
}, "attachFunctions"), HT = /* @__PURE__ */ p((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function $g(e) {
  const t = e.match(sh);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  let r = z1(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: N1
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e.slice(t[0].length),
    metadata: i
  };
}
p($g, "extractFrontMatter");
var jT = /* @__PURE__ */ p((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), YT = /* @__PURE__ */ p((e) => {
  const { text: t, metadata: r } = $g(e), { displayMode: i, title: n, config: a = {} } = r;
  return i && (a.gantt || (a.gantt = {}), a.gantt.displayMode = i), { title: n, config: a, text: t };
}, "processFrontmatter"), UT = /* @__PURE__ */ p((e) => {
  const t = oe.detectInit(e) ?? {}, r = oe.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : r?.type === "wrap" && (t.wrap = !0), {
    text: Tw(e),
    directive: t
  };
}, "processDirectives");
function Go(e) {
  const t = jT(e), r = YT(t), i = UT(r.text), n = Mo(r.config, i.directive);
  return e = HT(i.text), {
    code: e,
    title: r.title,
    config: n
  };
}
p(Go, "preprocessDiagram");
function Fg(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
p(Fg, "toBase64");
var GT = 5e4, XT = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", VT = "sandbox", ZT = "loose", KT = "http://www.w3.org/2000/svg", QT = "http://www.w3.org/1999/xlink", JT = "http://www.w3.org/1999/xhtml", tB = "100%", eB = "100%", rB = "border:0;margin:0;", iB = "margin:0", nB = "allow-top-navigation-by-user-activation allow-popups", aB = 'The "iframe" tag is not supported by your browser.', sB = ["foreignobject"], oB = ["dominant-baseline"];
function Xo(e) {
  const t = Go(e);
  return Tn(), ly(t.config ?? {}), t;
}
p(Xo, "processAndSetConfigs");
async function Dg(e, t) {
  _a();
  try {
    const { code: r, config: i } = Xo(e);
    return { diagramType: (await Rg(r)).type, config: i };
  } catch (r) {
    if (t?.suppressErrors)
      return !1;
    throw r;
  }
}
p(Dg, "parse");
var Dc = /* @__PURE__ */ p((e, t, r = []) => `
.${e} ${t} { ${r.join(" !important; ")} !important; }`, "cssImportantStyles"), lB = /* @__PURE__ */ p((e, t = /* @__PURE__ */ new Map()) => {
  let r = "";
  if (e.themeCSS !== void 0 && (r += `
${e.themeCSS}`), e.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${e.fontFamily}}`), e.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), t instanceof Map) {
    const s = e.htmlLabels ?? e.flowchart?.htmlLabels ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((o) => {
      Ec(o.styles) || s.forEach((l) => {
        r += Dc(o.id, l, o.styles);
      }), Ec(o.textStyles) || (r += Dc(
        o.id,
        "tspan",
        (o?.textStyles || []).map((l) => l.replace("color", "fill"))
      ));
    });
  }
  return r;
}, "createCssStyles"), cB = /* @__PURE__ */ p((e, t, r, i) => {
  const n = lB(e, r), a = Ay(t, n, e.themeVariables);
  return qs(__(`${i}{${a}}`), T_);
}, "createUserStyles"), hB = /* @__PURE__ */ p((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = dr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), uB = /* @__PURE__ */ p((e = "", t) => {
  const r = t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : eB, i = Fg(`<body style="${iB}">${e}</body>`);
  return `<iframe style="width:${tB};height:${r};${rB}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${nB}">
  ${aB}
</iframe>`;
}, "putIntoIFrame"), Oc = /* @__PURE__ */ p((e, t, r, i, n) => {
  const a = e.append("div");
  a.attr("id", r), i && a.attr("style", i);
  const s = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", KT);
  return n && s.attr("xmlns:xlink", n), s.append("g"), e;
}, "appendDivSvgG");
function Xs(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
p(Xs, "sandboxedIframe");
var fB = /* @__PURE__ */ p((e, t, r, i) => {
  e.getElementById(t)?.remove(), e.getElementById(r)?.remove(), e.getElementById(i)?.remove();
}, "removeExistingElements"), dB = /* @__PURE__ */ p(async function(e, t, r) {
  _a();
  const i = Xo(t);
  t = i.code;
  const n = Dt();
  F.debug(n), t.length > (n?.maxTextSize ?? GT) && (t = XT);
  const a = "#" + e, s = "i" + e, o = "#" + s, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ p(() => {
    const R = ht(f ? o : c).node();
    R && "remove" in R && R.remove();
  }, "removeTempElements");
  let u = ht("body");
  const f = n.securityLevel === VT, d = n.securityLevel === ZT, g = n.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const N = Xs(ht(r), s);
      u = ht(N.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = ht(r);
    Oc(u, e, l, `font-family: ${g}`, QT);
  } else {
    if (fB(document, e, l, s), f) {
      const N = Xs(ht("body"), s);
      u = ht(N.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = ht("body");
    Oc(u, e, l);
  }
  let m, y;
  try {
    m = await Gs.fromText(t, { title: i.title });
  } catch (N) {
    if (n.suppressErrorRendering)
      throw h(), N;
    m = await Gs.fromText("error"), y = N;
  }
  const x = u.select(c).node(), b = m.type, C = x.firstChild, v = C.firstChild, k = m.renderer.getClasses?.(t, m), A = cB(n, b, k, a), S = document.createElement("style");
  S.innerHTML = A, C.insertBefore(S, v);
  try {
    await m.renderer.draw(t, e, ml.version, m);
  } catch (N) {
    throw n.suppressErrorRendering ? h() : tT.draw(t, e, ml.version), N;
  }
  const D = u.select(`${c} svg`), I = m.db.getAccTitle?.(), O = m.db.getAccDescription?.();
  Ig(b, D, I, O), u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", JT);
  let E = u.select(c).node().innerHTML;
  if (F.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), E = hB(E, f, Bt(n.arrowMarkerAbsolute)), f) {
    const N = u.select(c + " svg").node();
    E = uB(E, N);
  } else d || (E = Dr.sanitize(E, {
    ADD_TAGS: sB,
    ADD_ATTR: oB,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (qT(), y)
    throw y;
  return h(), {
    diagramType: b,
    svg: E,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function Og(e = {}) {
  const t = St({}, e);
  t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), sy(t), t?.theme && t.theme in Le ? t.themeVariables = Le[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Le.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? ay(t) : fh();
  Js(r.logLevel), _a();
}
p(Og, "initialize");
var Rg = /* @__PURE__ */ p((e, t = {}) => {
  const { code: r } = Go(e);
  return Gs.fromText(r, t);
}, "getDiagramFromText");
function Ig(e, t, r, i) {
  Mg(t, e), Eg(t, r, i, t.attr("id"));
}
p(Ig, "addA11yInfo");
var cr = Object.freeze({
  render: dB,
  parse: Dg,
  getDiagramFromText: Rg,
  initialize: Og,
  getConfig: Dt,
  setConfig: dh,
  getSiteConfig: fh,
  updateSiteConfig: oy,
  reset: /* @__PURE__ */ p(() => {
    Tn();
  }, "reset"),
  globalReset: /* @__PURE__ */ p(() => {
    Tn(Or);
  }, "globalReset"),
  defaultConfig: Or
});
Js(Dt().logLevel);
Tn(Dt());
var pB = /* @__PURE__ */ p((e, t, r) => {
  F.warn(e), Lo(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Pg = /* @__PURE__ */ p(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await gB(e);
  } catch (t) {
    if (Lo(t) && F.error(t.str), Fe.parseError && Fe.parseError(t), !e.suppressErrors)
      throw F.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), gB = /* @__PURE__ */ p(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = cr.getConfig();
  F.debug(`${e ? "" : "No "}Callback function found`);
  let n;
  if (r)
    n = r;
  else if (t)
    n = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  F.debug(`Found ${n.length} diagrams`), i?.startOnLoad !== void 0 && (F.debug("Start On Load: " + i?.startOnLoad), cr.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
  const a = new oe.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let s;
  const o = [];
  for (const l of Array.from(n)) {
    if (F.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${a.next()}`;
    s = l.innerHTML, s = ad(oe.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = oe.detectInit(s);
    h && F.debug("Detected early reinit: ", h);
    try {
      const { svg: u, bindFunctions: f } = await qg(c, s, l);
      l.innerHTML = u, e && await e(c), f && f(l);
    } catch (u) {
      pB(u, o, Fe.parseError);
    }
  }
  if (o.length > 0)
    throw o[0];
}, "runThrowsErrors"), Ng = /* @__PURE__ */ p(function(e) {
  cr.initialize(e);
}, "initialize"), mB = /* @__PURE__ */ p(async function(e, t, r) {
  F.warn("mermaid.init is deprecated. Please use run instead."), e && Ng(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Pg(i);
}, "init"), yB = /* @__PURE__ */ p(async (e, {
  lazyLoad: t = !0
} = {}) => {
  _a(), ns(...e), t === !1 && await zT();
}, "registerExternalDiagrams"), zg = /* @__PURE__ */ p(function() {
  if (Fe.startOnLoad) {
    const { startOnLoad: e } = cr.getConfig();
    e && Fe.run().catch((t) => F.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", zg, !1);
var xB = /* @__PURE__ */ p(function(e) {
  Fe.parseError = e;
}, "setParseErrorHandler"), Jn = [], Qa = !1, Wg = /* @__PURE__ */ p(async () => {
  if (!Qa) {
    for (Qa = !0; Jn.length > 0; ) {
      const e = Jn.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          F.error("Error executing queue", t);
        }
    }
    Qa = !1;
  }
}, "executeQueue"), bB = /* @__PURE__ */ p(async (e, t) => new Promise((r, i) => {
  const n = /* @__PURE__ */ p(() => new Promise((a, s) => {
    cr.parse(e, t).then(
      (o) => {
        a(o), r(o);
      },
      (o) => {
        F.error("Error parsing", o), Fe.parseError?.(o), s(o), i(o);
      }
    );
  }), "performCall");
  Jn.push(n), Wg().catch(i);
}), "parse"), qg = /* @__PURE__ */ p((e, t, r) => new Promise((i, n) => {
  const a = /* @__PURE__ */ p(() => new Promise((s, o) => {
    cr.render(e, t, r).then(
      (l) => {
        s(l), i(l);
      },
      (l) => {
        F.error("Error parsing", l), Fe.parseError?.(l), o(l), n(l);
      }
    );
  }), "performCall");
  Jn.push(a), Wg().catch(n);
}), "render"), CB = /* @__PURE__ */ p(() => Object.keys(ir).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), Fe = {
  startOnLoad: !0,
  mermaidAPI: cr,
  parse: bB,
  render: qg,
  init: mB,
  run: Pg,
  registerExternalDiagrams: yB,
  registerLayoutLoaders: Vp,
  initialize: Ng,
  parseError: void 0,
  contentLoaded: zg,
  setParseErrorHandler: xB,
  detectType: to,
  registerIconPacks: Hk,
  getRegisteredDiagramsMetadata: CB
}, wB = Fe;
const WB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wB
}, Symbol.toStringTag, { value: "Module" }));
export {
  et as $,
  BB as A,
  xi as B,
  xe as C,
  mm as D,
  Iy as E,
  Mo as F,
  uh as G,
  Dt as H,
  Ew as I,
  N1 as J,
  Fb as K,
  ml as L,
  Qm as M,
  Yk as N,
  Rr as O,
  SB as P,
  pa as Q,
  yy as R,
  eo as S,
  Al as T,
  st as U,
  Mw as V,
  Sy as W,
  Fi as X,
  H as Y,
  kw as Z,
  p as _,
  Ey as a,
  K2 as a$,
  Ch as a0,
  mv as a1,
  Yp as a2,
  IB as a3,
  W1 as a4,
  Bt as a5,
  He as a6,
  Co as a7,
  yd as a8,
  dr as a9,
  YC as aA,
  Ql as aB,
  hr as aC,
  rC as aD,
  vo as aE,
  J2 as aF,
  aC as aG,
  Ur as aH,
  VC as aI,
  xw as aJ,
  hC as aK,
  uw as aL,
  wo as aM,
  Ec as aN,
  U as aO,
  vf as aP,
  Yr as aQ,
  rw as aR,
  M_ as aS,
  Ii as aT,
  Wn as aU,
  qe as aV,
  ca as aW,
  Gl as aX,
  _o as aY,
  Mf as aZ,
  Df as a_,
  Hf as aa,
  o_ as ab,
  RB as ac,
  PB as ad,
  DB as ae,
  G as af,
  OB as ag,
  Hv as ah,
  Pv as ai,
  Iv as aj,
  _B as ak,
  da as al,
  qn as am,
  If as an,
  zi as ao,
  Hk as ap,
  qk as aq,
  gm as ar,
  ZC as as,
  Of as at,
  Af as au,
  tC as av,
  Nn as aw,
  eC as ax,
  Pi as ay,
  Ke as az,
  My as b,
  Ys as b0,
  yw as b1,
  hw as b2,
  bw as b3,
  ko as b4,
  ww as b5,
  WB as b6,
  ft as c,
  ht as d,
  bh as e,
  St as f,
  Fy as g,
  $e as h,
  Jt as i,
  G1 as j,
  Hr as k,
  F as l,
  Yf as m,
  Di as n,
  TB as o,
  zB as p,
  Dy as q,
  NB as r,
  $y as s,
  Oy as t,
  oe as u,
  z1 as v,
  Dw as w,
  Dv as x,
  AB as y,
  Ly as z
};
