import { m as ot, f as _p, d as Cp } from "./min-CYYa1n5P.js";
import { b as kp, l as Np, c as bp, m as Op, r as Il, n as ta } from "./_baseUniq-DPKKQRpz.js";
import { aN as Pp } from "./mermaid.core-BXO_VlFI.js";
function Lp(t, e) {
  return kp(ot(t, e));
}
function Mp(t, e) {
  return t && t.length ? Np(t, bp(e)) : [];
}
function ue(t) {
  return typeof t == "object" && t !== null && typeof t.$type == "string";
}
function ze(t) {
  return typeof t == "object" && t !== null && typeof t.$refText == "string";
}
function Dp(t) {
  return typeof t == "object" && t !== null && typeof t.name == "string" && typeof t.type == "string" && typeof t.path == "string";
}
function wi(t) {
  return typeof t == "object" && t !== null && ue(t.container) && ze(t.reference) && typeof t.message == "string";
}
class Pf {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, n) {
    return ue(e) && this.isSubtype(e.$type, n);
  }
  isSubtype(e, n) {
    if (e === n)
      return !0;
    let r = this.subtypes[e];
    r || (r = this.subtypes[e] = {});
    const i = r[n];
    if (i !== void 0)
      return i;
    {
      const s = this.computeIsSubtype(e, n);
      return r[n] = s, s;
    }
  }
  getAllSubTypes(e) {
    const n = this.allSubtypes[e];
    if (n)
      return n;
    {
      const r = this.getAllTypes(), i = [];
      for (const s of r)
        this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
}
function Pr(t) {
  return typeof t == "object" && t !== null && Array.isArray(t.content);
}
function Lf(t) {
  return typeof t == "object" && t !== null && typeof t.tokenType == "object";
}
function Mf(t) {
  return Pr(t) && typeof t.fullText == "string";
}
class re {
  constructor(e, n) {
    this.startFn = e, this.nextFn = n;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let n = 0, r = e.next();
    for (; !r.done; )
      n++, r = e.next();
    return n;
  }
  toArray() {
    const e = [], n = this.iterator();
    let r;
    do
      r = n.next(), r.value !== void 0 && e.push(r.value);
    while (!r.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, n) {
    const r = this.map((i) => [
      e ? e(i) : i,
      n ? n(i) : i
    ]);
    return new Map(r);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new re(() => ({ first: this.startFn(), firstDone: !1, iterator: e[Symbol.iterator]() }), (n) => {
      let r;
      if (!n.firstDone) {
        do
          if (r = this.nextFn(n.first), !r.done)
            return r;
        while (!r.done);
        n.firstDone = !0;
      }
      do
        if (r = n.iterator.next(), !r.done)
          return r;
      while (!r.done);
      return Ae;
    });
  }
  join(e = ",") {
    const n = this.iterator();
    let r = "", i, s = !1;
    do
      i = n.next(), i.done || (s && (r += e), r += Fp(i.value)), s = !0;
    while (!i.done);
    return r;
  }
  indexOf(e, n = 0) {
    const r = this.iterator();
    let i = 0, s = r.next();
    for (; !s.done; ) {
      if (i >= n && s.value === e)
        return i;
      s = r.next(), i++;
    }
    return -1;
  }
  every(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (!e(r.value))
        return !1;
      r = n.next();
    }
    return !0;
  }
  some(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (e(r.value))
        return !0;
      r = n.next();
    }
    return !1;
  }
  forEach(e) {
    const n = this.iterator();
    let r = 0, i = n.next();
    for (; !i.done; )
      e(i.value, r), i = n.next(), r++;
  }
  map(e) {
    return new re(this.startFn, (n) => {
      const { done: r, value: i } = this.nextFn(n);
      return r ? Ae : { done: !1, value: e(i) };
    });
  }
  filter(e) {
    return new re(this.startFn, (n) => {
      let r;
      do
        if (r = this.nextFn(n), !r.done && e(r.value))
          return r;
      while (!r.done);
      return Ae;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, n) {
    const r = this.iterator();
    let i = n, s = r.next();
    for (; !s.done; )
      i === void 0 ? i = s.value : i = e(i, s.value), s = r.next();
    return i;
  }
  reduceRight(e, n) {
    return this.recursiveReduce(this.iterator(), e, n);
  }
  recursiveReduce(e, n, r) {
    const i = e.next();
    if (i.done)
      return r;
    const s = this.recursiveReduce(e, n, r);
    return s === void 0 ? i.value : n(s, i.value);
  }
  find(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (e(r.value))
        return r.value;
      r = n.next();
    }
  }
  findIndex(e) {
    const n = this.iterator();
    let r = 0, i = n.next();
    for (; !i.done; ) {
      if (e(i.value))
        return r;
      i = n.next(), r++;
    }
    return -1;
  }
  includes(e) {
    const n = this.iterator();
    let r = n.next();
    for (; !r.done; ) {
      if (r.value === e)
        return !0;
      r = n.next();
    }
    return !1;
  }
  flatMap(e) {
    return new re(() => ({ this: this.startFn() }), (n) => {
      do {
        if (n.iterator) {
          const s = n.iterator.next();
          if (s.done)
            n.iterator = void 0;
          else
            return s;
        }
        const { done: r, value: i } = this.nextFn(n.this);
        if (!r) {
          const s = e(i);
          if (Ki(s))
            n.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
        }
      } while (n.iterator);
      return Ae;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const n = e > 1 ? this.flat(e - 1) : this;
    return new re(() => ({ this: n.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const a = r.iterator.next();
          if (a.done)
            r.iterator = void 0;
          else
            return a;
        }
        const { done: i, value: s } = n.nextFn(r.this);
        if (!i)
          if (Ki(s))
            r.iterator = s[Symbol.iterator]();
          else
            return { done: !1, value: s };
      } while (r.iterator);
      return Ae;
    });
  }
  head() {
    const n = this.iterator().next();
    if (!n.done)
      return n.value;
  }
  tail(e = 1) {
    return new re(() => {
      const n = this.startFn();
      for (let r = 0; r < e; r++)
        if (this.nextFn(n).done)
          return n;
      return n;
    }, this.nextFn);
  }
  limit(e) {
    return new re(() => ({ size: 0, state: this.startFn() }), (n) => (n.size++, n.size > e ? Ae : this.nextFn(n.state)));
  }
  distinct(e) {
    return new re(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (n) => {
      let r;
      do
        if (r = this.nextFn(n.internalState), !r.done) {
          const i = e ? e(r.value) : r.value;
          if (!n.set.has(i))
            return n.set.add(i), r;
        }
      while (!r.done);
      return Ae;
    });
  }
  exclude(e, n) {
    const r = /* @__PURE__ */ new Set();
    for (const i of e) {
      const s = n ? n(i) : i;
      r.add(s);
    }
    return this.filter((i) => {
      const s = n ? n(i) : i;
      return !r.has(s);
    });
  }
}
function Fp(t) {
  return typeof t == "string" ? t : typeof t > "u" ? "undefined" : typeof t.toString == "function" ? t.toString() : Object.prototype.toString.call(t);
}
function Ki(t) {
  return !!t && typeof t[Symbol.iterator] == "function";
}
const Gp = new re(() => {
}, () => Ae), Ae = Object.freeze({ done: !0, value: void 0 });
function ie(...t) {
  if (t.length === 1) {
    const e = t[0];
    if (e instanceof re)
      return e;
    if (Ki(e))
      return new re(() => e[Symbol.iterator](), (n) => n.next());
    if (typeof e.length == "number")
      return new re(() => ({ index: 0 }), (n) => n.index < e.length ? { done: !1, value: e[n.index++] } : Ae);
  }
  return t.length > 1 ? new re(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const n = e.iterator.next();
        if (!n.done)
          return n;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: !1, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < t.length) {
        const n = t[e.collIndex++];
        Ki(n) ? e.iterator = n[Symbol.iterator]() : n && typeof n.length == "number" && (e.array = n);
      }
    } while (e.iterator || e.array || e.collIndex < t.length);
    return Ae;
  }) : Gp;
}
class Co extends re {
  constructor(e, n, r) {
    super(() => ({
      iterators: r?.includeRoot ? [[e][Symbol.iterator]()] : [n(e)[Symbol.iterator]()],
      pruned: !1
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = !1); i.iterators.length > 0; ) {
        const a = i.iterators[i.iterators.length - 1].next();
        if (a.done)
          i.iterators.pop();
        else
          return i.iterators.push(n(a.value)[Symbol.iterator]()), a;
      }
      return Ae;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = !0;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
}
var Ma;
(function(t) {
  function e(s) {
    return s.reduce((a, o) => a + o, 0);
  }
  t.sum = e;
  function n(s) {
    return s.reduce((a, o) => a * o, 0);
  }
  t.product = n;
  function r(s) {
    return s.reduce((a, o) => Math.min(a, o));
  }
  t.min = r;
  function i(s) {
    return s.reduce((a, o) => Math.max(a, o));
  }
  t.max = i;
})(Ma || (Ma = {}));
function Da(t) {
  return new Co(t, (e) => Pr(e) ? e.content : [], { includeRoot: !0 });
}
function Up(t, e) {
  for (; t.container; )
    if (t = t.container, t === e)
      return !0;
  return !1;
}
function Fa(t) {
  return {
    start: {
      character: t.startColumn - 1,
      line: t.startLine - 1
    },
    end: {
      character: t.endColumn,
      // endColumn uses the correct index
      line: t.endLine - 1
    }
  };
}
function Hi(t) {
  if (!t)
    return;
  const { offset: e, end: n, range: r } = t;
  return {
    range: r,
    offset: e,
    end: n,
    length: n - e
  };
}
var st;
(function(t) {
  t[t.Before = 0] = "Before", t[t.After = 1] = "After", t[t.OverlapFront = 2] = "OverlapFront", t[t.OverlapBack = 3] = "OverlapBack", t[t.Inside = 4] = "Inside", t[t.Outside = 5] = "Outside";
})(st || (st = {}));
function Bp(t, e) {
  if (t.end.line < e.start.line || t.end.line === e.start.line && t.end.character <= e.start.character)
    return st.Before;
  if (t.start.line > e.end.line || t.start.line === e.end.line && t.start.character >= e.end.character)
    return st.After;
  const n = t.start.line > e.start.line || t.start.line === e.start.line && t.start.character >= e.start.character, r = t.end.line < e.end.line || t.end.line === e.end.line && t.end.character <= e.end.character;
  return n && r ? st.Inside : n ? st.OverlapBack : r ? st.OverlapFront : st.Outside;
}
function jp(t, e) {
  return Bp(t, e) > st.After;
}
const Kp = /^[\w\p{L}]$/u;
function Hp(t, e) {
  if (t) {
    const n = Wp(t, !0);
    if (n && wl(n, e))
      return n;
    if (Mf(t)) {
      const r = t.content.findIndex((i) => !i.hidden);
      for (let i = r - 1; i >= 0; i--) {
        const s = t.content[i];
        if (wl(s, e))
          return s;
      }
    }
  }
}
function wl(t, e) {
  return Lf(t) && e.includes(t.tokenType.name);
}
function Wp(t, e = !0) {
  for (; t.container; ) {
    const n = t.container;
    let r = n.content.indexOf(t);
    for (; r > 0; ) {
      r--;
      const i = n.content[r];
      if (e || !i.hidden)
        return i;
    }
    t = n;
  }
}
class Df extends Error {
  constructor(e, n) {
    super(e ? `${n} at ${e.range.start.line}:${e.range.start.character}` : n);
  }
}
function Kr(t) {
  throw new Error("Error! The input value was not handled.");
}
const ri = "AbstractRule", ii = "AbstractType", na = "Condition", _l = "TypeDefinition", ra = "ValueLiteral", Yn = "AbstractElement";
function zp(t) {
  return F.isInstance(t, Yn);
}
const si = "ArrayLiteral", ai = "ArrayType", Xn = "BooleanLiteral";
function Vp(t) {
  return F.isInstance(t, Xn);
}
const Jn = "Conjunction";
function qp(t) {
  return F.isInstance(t, Jn);
}
const Zn = "Disjunction";
function Yp(t) {
  return F.isInstance(t, Zn);
}
const oi = "Grammar", ia = "GrammarImport", Qn = "InferredType";
function Ff(t) {
  return F.isInstance(t, Qn);
}
const er = "Interface";
function Gf(t) {
  return F.isInstance(t, er);
}
const sa = "NamedArgument", tr = "Negation";
function Xp(t) {
  return F.isInstance(t, tr);
}
const li = "NumberLiteral", ui = "Parameter", nr = "ParameterReference";
function Jp(t) {
  return F.isInstance(t, nr);
}
const rr = "ParserRule";
function Ne(t) {
  return F.isInstance(t, rr);
}
const ci = "ReferenceType", _i = "ReturnType";
function Zp(t) {
  return F.isInstance(t, _i);
}
const ir = "SimpleType";
function Qp(t) {
  return F.isInstance(t, ir);
}
const fi = "StringLiteral", cn = "TerminalRule";
function Jt(t) {
  return F.isInstance(t, cn);
}
const sr = "Type";
function Uf(t) {
  return F.isInstance(t, sr);
}
const aa = "TypeAttribute", di = "UnionType", ar = "Action";
function Ts(t) {
  return F.isInstance(t, ar);
}
const or = "Alternatives";
function Bf(t) {
  return F.isInstance(t, or);
}
const lr = "Assignment";
function Kt(t) {
  return F.isInstance(t, lr);
}
const ur = "CharacterRange";
function em(t) {
  return F.isInstance(t, ur);
}
const cr = "CrossReference";
function ko(t) {
  return F.isInstance(t, cr);
}
const fr = "EndOfFile";
function tm(t) {
  return F.isInstance(t, fr);
}
const dr = "Group";
function No(t) {
  return F.isInstance(t, dr);
}
const hr = "Keyword";
function Ht(t) {
  return F.isInstance(t, hr);
}
const pr = "NegatedToken";
function nm(t) {
  return F.isInstance(t, pr);
}
const mr = "RegexToken";
function rm(t) {
  return F.isInstance(t, mr);
}
const gr = "RuleCall";
function Wt(t) {
  return F.isInstance(t, gr);
}
const yr = "TerminalAlternatives";
function im(t) {
  return F.isInstance(t, yr);
}
const Tr = "TerminalGroup";
function sm(t) {
  return F.isInstance(t, Tr);
}
const vr = "TerminalRuleCall";
function am(t) {
  return F.isInstance(t, vr);
}
const $r = "UnorderedGroup";
function jf(t) {
  return F.isInstance(t, $r);
}
const Rr = "UntilToken";
function om(t) {
  return F.isInstance(t, Rr);
}
const Ar = "Wildcard";
function lm(t) {
  return F.isInstance(t, Ar);
}
class Kf extends Pf {
  getAllTypes() {
    return [Yn, ri, ii, ar, or, si, ai, lr, Xn, ur, na, Jn, cr, Zn, fr, oi, ia, dr, Qn, er, hr, sa, pr, tr, li, ui, nr, rr, ci, mr, _i, gr, ir, fi, yr, Tr, cn, vr, sr, aa, _l, di, $r, Rr, ra, Ar];
  }
  computeIsSubtype(e, n) {
    switch (e) {
      case ar:
      case or:
      case lr:
      case ur:
      case cr:
      case fr:
      case dr:
      case hr:
      case pr:
      case mr:
      case gr:
      case yr:
      case Tr:
      case vr:
      case $r:
      case Rr:
      case Ar:
        return this.isSubtype(Yn, n);
      case si:
      case li:
      case fi:
        return this.isSubtype(ra, n);
      case ai:
      case ci:
      case ir:
      case di:
        return this.isSubtype(_l, n);
      case Xn:
        return this.isSubtype(na, n) || this.isSubtype(ra, n);
      case Jn:
      case Zn:
      case tr:
      case nr:
        return this.isSubtype(na, n);
      case Qn:
      case er:
      case sr:
        return this.isSubtype(ii, n);
      case rr:
        return this.isSubtype(ri, n) || this.isSubtype(ii, n);
      case cn:
        return this.isSubtype(ri, n);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const n = `${e.container.$type}:${e.property}`;
    switch (n) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return ii;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return ri;
      case "Grammar:usedGrammars":
        return oi;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return ui;
      case "TerminalRuleCall:rule":
        return cn;
      default:
        throw new Error(`${n} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case Yn:
        return {
          name: Yn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case si:
        return {
          name: si,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case ai:
        return {
          name: ai,
          properties: [
            { name: "elementType" }
          ]
        };
      case Xn:
        return {
          name: Xn,
          properties: [
            { name: "true", defaultValue: !1 }
          ]
        };
      case Jn:
        return {
          name: Jn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case Zn:
        return {
          name: Zn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case oi:
        return {
          name: oi,
          properties: [
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: !1 },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      case ia:
        return {
          name: ia,
          properties: [
            { name: "path" }
          ]
        };
      case Qn:
        return {
          name: Qn,
          properties: [
            { name: "name" }
          ]
        };
      case er:
        return {
          name: er,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case sa:
        return {
          name: sa,
          properties: [
            { name: "calledByName", defaultValue: !1 },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case tr:
        return {
          name: tr,
          properties: [
            { name: "value" }
          ]
        };
      case li:
        return {
          name: li,
          properties: [
            { name: "value" }
          ]
        };
      case ui:
        return {
          name: ui,
          properties: [
            { name: "name" }
          ]
        };
      case nr:
        return {
          name: nr,
          properties: [
            { name: "parameter" }
          ]
        };
      case rr:
        return {
          name: rr,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: !1 },
            { name: "definition" },
            { name: "entry", defaultValue: !1 },
            { name: "fragment", defaultValue: !1 },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: !1 }
          ]
        };
      case ci:
        return {
          name: ci,
          properties: [
            { name: "referenceType" }
          ]
        };
      case _i:
        return {
          name: _i,
          properties: [
            { name: "name" }
          ]
        };
      case ir:
        return {
          name: ir,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case fi:
        return {
          name: fi,
          properties: [
            { name: "value" }
          ]
        };
      case cn:
        return {
          name: cn,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: !1 },
            { name: "hidden", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case sr:
        return {
          name: sr,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case aa:
        return {
          name: aa,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case di:
        return {
          name: di,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case ar:
        return {
          name: ar,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case or:
        return {
          name: or,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case lr:
        return {
          name: lr,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case ur:
        return {
          name: ur,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case cr:
        return {
          name: cr,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: !1 },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case fr:
        return {
          name: fr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case dr:
        return {
          name: dr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case hr:
        return {
          name: hr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case pr:
        return {
          name: pr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case mr:
        return {
          name: mr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case gr:
        return {
          name: gr,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case yr:
        return {
          name: yr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Tr:
        return {
          name: Tr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case vr:
        return {
          name: vr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case $r:
        return {
          name: $r,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Rr:
        return {
          name: Rr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Ar:
        return {
          name: Ar,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}
const F = new Kf();
function um(t) {
  for (const [e, n] of Object.entries(t))
    e.startsWith("$") || (Array.isArray(n) ? n.forEach((r, i) => {
      ue(r) && (r.$container = t, r.$containerProperty = e, r.$containerIndex = i);
    }) : ue(n) && (n.$container = t, n.$containerProperty = e));
}
function vs(t, e) {
  let n = t;
  for (; n; ) {
    if (e(n))
      return n;
    n = n.$container;
  }
}
function Rt(t) {
  const n = Ga(t).$document;
  if (!n)
    throw new Error("AST node has no document.");
  return n;
}
function Ga(t) {
  for (; t.$container; )
    t = t.$container;
  return t;
}
function bo(t, e) {
  if (!t)
    throw new Error("Node must be an AstNode.");
  const n = e?.range;
  return new re(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (r) => {
    for (; r.keyIndex < r.keys.length; ) {
      const i = r.keys[r.keyIndex];
      if (!i.startsWith("$")) {
        const s = t[i];
        if (ue(s)) {
          if (r.keyIndex++, Cl(s, n))
            return { done: !1, value: s };
        } else if (Array.isArray(s)) {
          for (; r.arrayIndex < s.length; ) {
            const a = r.arrayIndex++, o = s[a];
            if (ue(o) && Cl(o, n))
              return { done: !1, value: o };
          }
          r.arrayIndex = 0;
        }
      }
      r.keyIndex++;
    }
    return Ae;
  });
}
function Hr(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new Co(t, (n) => bo(n, e));
}
function dn(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new Co(t, (n) => bo(n, e), { includeRoot: !0 });
}
function Cl(t, e) {
  var n;
  if (!e)
    return !0;
  const r = (n = t.$cstNode) === null || n === void 0 ? void 0 : n.range;
  return r ? jp(r, e) : !1;
}
function Hf(t) {
  return new re(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const n = e.keys[e.keyIndex];
      if (!n.startsWith("$")) {
        const r = t[n];
        if (ze(r))
          return e.keyIndex++, { done: !1, value: { reference: r, container: t, property: n } };
        if (Array.isArray(r)) {
          for (; e.arrayIndex < r.length; ) {
            const i = e.arrayIndex++, s = r[i];
            if (ze(s))
              return { done: !1, value: { reference: s, container: t, property: n, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return Ae;
  });
}
function cm(t, e) {
  const n = t.getTypeMetaData(e.$type), r = e;
  for (const i of n.properties)
    i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = Wf(i.defaultValue));
}
function Wf(t) {
  return Array.isArray(t) ? [...t.map(Wf)] : t;
}
function C(t) {
  return t.charCodeAt(0);
}
function oa(t, e) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.push(n);
  }) : e.push(t);
}
function Hn(t, e) {
  if (t[e] === !0)
    throw "duplicate flag " + e;
  t[e], t[e] = !0;
}
function un(t) {
  if (t === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function fm() {
  throw Error("Internal Error - Should never get here!");
}
function kl(t) {
  return t.type === "Character";
}
const Wi = [];
for (let t = C("0"); t <= C("9"); t++)
  Wi.push(t);
const zi = [C("_")].concat(Wi);
for (let t = C("a"); t <= C("z"); t++)
  zi.push(t);
for (let t = C("A"); t <= C("Z"); t++)
  zi.push(t);
const Nl = [
  C(" "),
  C("\f"),
  C(`
`),
  C("\r"),
  C("	"),
  C("\v"),
  C("	"),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C(" "),
  C("\u2028"),
  C("\u2029"),
  C(" "),
  C(" "),
  C("　"),
  C("\uFEFF")
], dm = /[0-9a-fA-F]/, hi = /[0-9]/, hm = /[1-9]/;
class zf {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const n = this.disjunction();
    this.consumeChar("/");
    const r = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: !1,
      ignoreCase: !1,
      multiLine: !1,
      unicode: !1,
      sticky: !1
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          Hn(r, "global");
          break;
        case "i":
          Hn(r, "ignoreCase");
          break;
        case "m":
          Hn(r, "multiLine");
          break;
        case "u":
          Hn(r, "unicode");
          break;
        case "y":
          Hn(r, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: r,
      value: n,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], n = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(n) };
  }
  alternative() {
    const e = [], n = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(n) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      // '\b' or '\B'
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      // '(?=' or '(?!'
      case "(":
        this.consumeChar("?");
        let n;
        switch (this.popChar()) {
          case "=":
            n = "Lookahead";
            break;
          case "!":
            n = "NegativeLookahead";
            break;
        }
        un(n);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: n,
          value: r,
          loc: this.loc(e)
        };
    }
    return fm();
  }
  quantifier(e = !1) {
    let n;
    const r = this.idx;
    switch (this.popChar()) {
      case "*":
        n = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        n = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        n = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            n = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), n = {
              atLeast: i,
              atMost: s
            }) : n = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && n === void 0)
          return;
        un(n);
        break;
    }
    if (!(e === !0 && n === void 0) && un(n))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), n.greedy = !1) : n.greedy = !0, n.type = "Quantifier", n.loc = this.loc(r), n;
  }
  atom() {
    let e;
    const n = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), un(e))
      return e.loc = this.loc(n), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [C(`
`), C("\r"), C("\u2028"), C("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, n = !1;
    switch (this.popChar()) {
      case "d":
        e = Wi;
        break;
      case "D":
        e = Wi, n = !0;
        break;
      case "s":
        e = Nl;
        break;
      case "S":
        e = Nl, n = !0;
        break;
      case "w":
        e = zi;
        break;
      case "W":
        e = zi, n = !0;
        break;
    }
    if (un(e))
      return { type: "Set", value: e, complement: n };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = C("\f");
        break;
      case "n":
        e = C(`
`);
        break;
      case "r":
        e = C("\r");
        break;
      case "t":
        e = C("	");
        break;
      case "v":
        e = C("\v");
        break;
    }
    if (un(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === !1)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: C("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: C(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: C(e) };
    }
  }
  characterClass() {
    const e = [];
    let n = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), n = !0); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, kl(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, kl(i)) {
          if (i.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: i.value });
        } else
          oa(r.value, e), e.push(C("-")), oa(i.value, e);
      } else
        oa(r.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: n, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "]":
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      // Matches a backspace.
      // (Not to be confused with \b word boundary outside characterClass)
      case "b":
        return this.consumeChar("b"), { type: "Character", value: C("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = !0;
    this.consumeChar("("), this.peekChar(0) === "?" ? (this.consumeChar("?"), this.consumeChar(":"), e = !1) : this.groupIdx++;
    const n = this.disjunction();
    this.consumeChar(")");
    const r = {
      type: "Group",
      capturing: e,
      value: n
    };
    return e && (r.idx = this.groupIdx), r;
  }
  positiveInteger() {
    let e = this.popChar();
    if (hm.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; hi.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (hi.test(e) === !1)
      throw Error("Expecting an integer");
    for (; hi.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "^":
      // istanbul ignore next
      case "$":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case ".":
      // istanbul ignore next
      case "*":
      // istanbul ignore next
      case "+":
      // istanbul ignore next
      case "?":
      // istanbul ignore next
      case "(":
      // istanbul ignore next
      case ")":
      // istanbul ignore next
      case "[":
      // istanbul ignore next
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: C(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return !0;
      default:
        return !1;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return hi.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return !0;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      // atomEscape
      case "[":
      // characterClass
      // TODO: isAtom must be called before isAssertion - disambiguate
      case "(":
        return !0;
      default:
        return !1;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return !0;
      // '\b' or '\B'
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return !0;
          default:
            return !1;
        }
      // '(?=' or '(?!'
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return !1;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(!0) !== void 0;
    } catch {
      return !1;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  parseHexDigits(e) {
    let n = "";
    for (let i = 0; i < e; i++) {
      const s = this.popChar();
      if (dm.test(s) === !1)
        throw Error("Expecting a HexDecimal digits");
      n += s;
    }
    return { type: "Character", value: parseInt(n, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}
class $s {
  visitChildren(e) {
    for (const n in e) {
      const r = e[n];
      e.hasOwnProperty(n) && (r.type !== void 0 ? this.visit(r) : Array.isArray(r) && r.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}
const pm = /\r?\n/gm, mm = new zf();
class gm extends $s {
  constructor() {
    super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const n = String.fromCharCode(e.value);
    if (!this.multiline && n === `
` && (this.multiline = !0), e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const r = Rs(n);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const n = this.regex.substring(e.loc.begin, e.loc.end), r = new RegExp(n);
      this.multiline = !!`
`.match(r);
    }
    if (e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const n = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(n), this.isStarting && (this.startRegexp += n);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}
const la = new gm();
function ym(t) {
  try {
    return typeof t == "string" && (t = new RegExp(t)), t = t.toString(), la.reset(t), la.visit(mm.pattern(t)), la.multiline;
  } catch {
    return !1;
  }
}
const Tm = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function Ua(t) {
  const e = typeof t == "string" ? new RegExp(t) : t;
  return Tm.some((n) => e.test(n));
}
function Rs(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function vm(t) {
  return Array.prototype.map.call(t, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : Rs(e)).join("");
}
function $m(t, e) {
  const n = Rm(t), r = e.match(n);
  return !!r && r[0].length > 0;
}
function Rm(t) {
  typeof t == "string" && (t = new RegExp(t));
  const e = t, n = t.source;
  let r = 0;
  function i() {
    let s = "", a;
    function o(u) {
      s += n.substr(r, u), r += u;
    }
    function l(u) {
      s += "(?:" + n.substr(r, u) + "|$)", r += u;
    }
    for (; r < n.length; )
      switch (n[r]) {
        case "\\":
          switch (n[r + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? n[r + 2] === "{" ? l(n.indexOf("}", r) - r + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(n.indexOf("}", r) - r + 1) : l(2);
              break;
            case "k":
              l(n.indexOf(">", r) - r + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          a = /\[(?:\\.|.)*?\]/g, a.lastIndex = r, a = a.exec(n) || [], l(a[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          a = /\{\d+,?\d*\}/g, a.lastIndex = r, a = a.exec(n), a ? o(a[0].length) : l(1);
          break;
        case "(":
          if (n[r + 1] === "?")
            switch (n[r + 2]) {
              case ":":
                s += "(?:", r += 3, s += i() + "|$)";
                break;
              case "=":
                s += "(?=", r += 3, s += i() + ")";
                break;
              case "!":
                a = r, r += 3, i(), s += n.substr(a, r - a);
                break;
              case "<":
                switch (n[r + 3]) {
                  case "=":
                  case "!":
                    a = r, r += 4, i(), s += n.substr(a, r - a);
                    break;
                  default:
                    o(n.indexOf(">", r) - r + 1), s += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), s += i() + "|$)";
          break;
        case ")":
          return ++r, s;
        default:
          l(1);
          break;
      }
    return s;
  }
  return new RegExp(i(), t.flags);
}
function Am(t) {
  return t.rules.find((e) => Ne(e) && e.entry);
}
function Em(t) {
  return t.rules.filter((e) => Jt(e) && e.hidden);
}
function Vf(t, e) {
  const n = /* @__PURE__ */ new Set(), r = Am(t);
  if (!r)
    return new Set(t.rules);
  const i = [r].concat(Em(t));
  for (const a of i)
    qf(a, n, e);
  const s = /* @__PURE__ */ new Set();
  for (const a of t.rules)
    (n.has(a.name) || Jt(a) && a.hidden) && s.add(a);
  return s;
}
function qf(t, e, n) {
  e.add(t.name), Hr(t).forEach((r) => {
    if (Wt(r) || n) {
      const i = r.rule.ref;
      i && !e.has(i.name) && qf(i, e, n);
    }
  });
}
function xm(t) {
  if (t.terminal)
    return t.terminal;
  if (t.type.ref) {
    const e = Xf(t.type.ref);
    return e?.terminal;
  }
}
function Sm(t) {
  return t.hidden && !Ua(Mo(t));
}
function Im(t, e) {
  return !t || !e ? [] : Oo(t, e, t.astNode, !0);
}
function Yf(t, e, n) {
  if (!t || !e)
    return;
  const r = Oo(t, e, t.astNode, !0);
  if (r.length !== 0)
    return n !== void 0 ? n = Math.max(0, Math.min(n, r.length - 1)) : n = 0, r[n];
}
function Oo(t, e, n, r) {
  if (!r) {
    const i = vs(t.grammarSource, Kt);
    if (i && i.feature === e)
      return [t];
  }
  return Pr(t) && t.astNode === n ? t.content.flatMap((i) => Oo(i, e, n, !1)) : [];
}
function wm(t, e, n) {
  if (!t)
    return;
  const r = _m(t, e, t?.astNode);
  if (r.length !== 0)
    return n !== void 0 ? n = Math.max(0, Math.min(n, r.length - 1)) : n = 0, r[n];
}
function _m(t, e, n) {
  if (t.astNode !== n)
    return [];
  if (Ht(t.grammarSource) && t.grammarSource.value === e)
    return [t];
  const r = Da(t).iterator();
  let i;
  const s = [];
  do
    if (i = r.next(), !i.done) {
      const a = i.value;
      a.astNode === n ? Ht(a.grammarSource) && a.grammarSource.value === e && s.push(a) : r.prune();
    }
  while (!i.done);
  return s;
}
function Cm(t) {
  var e;
  const n = t.astNode;
  for (; n === ((e = t.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const r = vs(t.grammarSource, Kt);
    if (r)
      return r;
    t = t.container;
  }
}
function Xf(t) {
  let e = t;
  return Ff(e) && (Ts(e.$container) ? e = e.$container.$container : Ne(e.$container) ? e = e.$container : Kr(e.$container)), Jf(t, e, /* @__PURE__ */ new Map());
}
function Jf(t, e, n) {
  var r;
  function i(s, a) {
    let o;
    return vs(s, Kt) || (o = Jf(a, a, n)), n.set(t, o), o;
  }
  if (n.has(t))
    return n.get(t);
  n.set(t, void 0);
  for (const s of Hr(e)) {
    if (Kt(s) && s.feature.toLowerCase() === "name")
      return n.set(t, s), s;
    if (Wt(s) && Ne(s.rule.ref))
      return i(s, s.rule.ref);
    if (Qp(s) && (!((r = s.typeRef) === null || r === void 0) && r.ref))
      return i(s, s.typeRef.ref);
  }
}
function Zf(t) {
  return Qf(t, /* @__PURE__ */ new Set());
}
function Qf(t, e) {
  if (e.has(t))
    return !0;
  e.add(t);
  for (const n of Hr(t))
    if (Wt(n)) {
      if (!n.rule.ref || Ne(n.rule.ref) && !Qf(n.rule.ref, e))
        return !1;
    } else {
      if (Kt(n))
        return !1;
      if (Ts(n))
        return !1;
    }
  return !!t.definition;
}
function Po(t) {
  if (t.inferredType)
    return t.inferredType.name;
  if (t.dataType)
    return t.dataType;
  if (t.returnType) {
    const e = t.returnType.ref;
    if (e) {
      if (Ne(e))
        return e.name;
      if (Gf(e) || Uf(e))
        return e.name;
    }
  }
}
function Lo(t) {
  var e;
  if (Ne(t))
    return Zf(t) ? t.name : (e = Po(t)) !== null && e !== void 0 ? e : t.name;
  if (Gf(t) || Uf(t) || Zp(t))
    return t.name;
  if (Ts(t)) {
    const n = km(t);
    if (n)
      return n;
  } else if (Ff(t))
    return t.name;
  throw new Error("Cannot get name of Unknown Type");
}
function km(t) {
  var e;
  if (t.inferredType)
    return t.inferredType.name;
  if (!((e = t.type) === null || e === void 0) && e.ref)
    return Lo(t.type.ref);
}
function Nm(t) {
  var e, n, r;
  return Jt(t) ? (n = (e = t.type) === null || e === void 0 ? void 0 : e.name) !== null && n !== void 0 ? n : "string" : (r = Po(t)) !== null && r !== void 0 ? r : t.name;
}
function Mo(t) {
  const e = {
    s: !1,
    i: !1,
    u: !1
  }, n = Un(t.definition, e), r = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(n, r);
}
const Do = /[\s\S]/.source;
function Un(t, e) {
  if (im(t))
    return bm(t);
  if (sm(t))
    return Om(t);
  if (em(t))
    return Mm(t);
  if (am(t)) {
    const n = t.rule.ref;
    if (!n)
      throw new Error("Missing rule reference.");
    return lt(Un(n.definition), {
      cardinality: t.cardinality,
      lookahead: t.lookahead
    });
  } else {
    if (nm(t))
      return Lm(t);
    if (om(t))
      return Pm(t);
    if (rm(t)) {
      const n = t.regex.lastIndexOf("/"), r = t.regex.substring(1, n), i = t.regex.substring(n + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), lt(r, {
        cardinality: t.cardinality,
        lookahead: t.lookahead,
        wrap: !1
      });
    } else {
      if (lm(t))
        return lt(Do, {
          cardinality: t.cardinality,
          lookahead: t.lookahead
        });
      throw new Error(`Invalid terminal element: ${t?.$type}`);
    }
  }
}
function bm(t) {
  return lt(t.elements.map((e) => Un(e)).join("|"), {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Om(t) {
  return lt(t.elements.map((e) => Un(e)).join(""), {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Pm(t) {
  return lt(`${Do}*?${Un(t.terminal)}`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Lm(t) {
  return lt(`(?!${Un(t.terminal)})${Do}*?`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Mm(t) {
  return t.right ? lt(`[${ua(t.left)}-${ua(t.right)}]`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    wrap: !1
  }) : lt(ua(t.left), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    wrap: !1
  });
}
function ua(t) {
  return Rs(t.value);
}
function lt(t, e) {
  var n;
  return (e.wrap !== !1 || e.lookahead) && (t = `(${(n = e.lookahead) !== null && n !== void 0 ? n : ""}${t})`), e.cardinality ? `${t}${e.cardinality}` : t;
}
function Dm(t) {
  const e = [], n = t.Grammar;
  for (const r of n.rules)
    Jt(r) && Sm(r) && ym(Mo(r)) && e.push(r.name);
  return {
    multilineCommentRules: e,
    nameRegexp: Kp
  };
}
var ed = typeof global == "object" && global && global.Object === Object && global, Fm = typeof self == "object" && self && self.Object === Object && self, Ye = ed || Fm || Function("return this")(), be = Ye.Symbol, td = Object.prototype, Gm = td.hasOwnProperty, Um = td.toString, Wn = be ? be.toStringTag : void 0;
function Bm(t) {
  var e = Gm.call(t, Wn), n = t[Wn];
  try {
    t[Wn] = void 0;
    var r = !0;
  } catch {
  }
  var i = Um.call(t);
  return r && (e ? t[Wn] = n : delete t[Wn]), i;
}
var jm = Object.prototype, Km = jm.toString;
function Hm(t) {
  return Km.call(t);
}
var Wm = "[object Null]", zm = "[object Undefined]", bl = be ? be.toStringTag : void 0;
function kt(t) {
  return t == null ? t === void 0 ? zm : Wm : bl && bl in Object(t) ? Bm(t) : Hm(t);
}
function Ue(t) {
  return t != null && typeof t == "object";
}
var Vm = "[object Symbol]";
function As(t) {
  return typeof t == "symbol" || Ue(t) && kt(t) == Vm;
}
function Es(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var M = Array.isArray, Ol = be ? be.prototype : void 0, Pl = Ol ? Ol.toString : void 0;
function nd(t) {
  if (typeof t == "string")
    return t;
  if (M(t))
    return Es(t, nd) + "";
  if (As(t))
    return Pl ? Pl.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var qm = /\s/;
function Ym(t) {
  for (var e = t.length; e-- && qm.test(t.charAt(e)); )
    ;
  return e;
}
var Xm = /^\s+/;
function Jm(t) {
  return t && t.slice(0, Ym(t) + 1).replace(Xm, "");
}
function Oe(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ll = NaN, Zm = /^[-+]0x[0-9a-f]+$/i, Qm = /^0b[01]+$/i, eg = /^0o[0-7]+$/i, tg = parseInt;
function ng(t) {
  if (typeof t == "number")
    return t;
  if (As(t))
    return Ll;
  if (Oe(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Oe(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Jm(t);
  var n = Qm.test(t);
  return n || eg.test(t) ? tg(t.slice(2), n ? 2 : 8) : Zm.test(t) ? Ll : +t;
}
var Ml = 1 / 0, rg = 17976931348623157e292;
function ig(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = ng(t), t === Ml || t === -Ml) {
    var e = t < 0 ? -1 : 1;
    return e * rg;
  }
  return t === t ? t : 0;
}
function xs(t) {
  var e = ig(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function bn(t) {
  return t;
}
var sg = "[object AsyncFunction]", ag = "[object Function]", og = "[object GeneratorFunction]", lg = "[object Proxy]";
function ht(t) {
  if (!Oe(t))
    return !1;
  var e = kt(t);
  return e == ag || e == og || e == sg || e == lg;
}
var ca = Ye["__core-js_shared__"], Dl = (function() {
  var t = /[^.]+$/.exec(ca && ca.keys && ca.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function ug(t) {
  return !!Dl && Dl in t;
}
var cg = Function.prototype, fg = cg.toString;
function Zt(t) {
  if (t != null) {
    try {
      return fg.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var dg = /[\\^$.*+?()[\]{}|]/g, hg = /^\[object .+?Constructor\]$/, pg = Function.prototype, mg = Object.prototype, gg = pg.toString, yg = mg.hasOwnProperty, Tg = RegExp(
  "^" + gg.call(yg).replace(dg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vg(t) {
  if (!Oe(t) || ug(t))
    return !1;
  var e = ht(t) ? Tg : hg;
  return e.test(Zt(t));
}
function $g(t, e) {
  return t?.[e];
}
function Qt(t, e) {
  var n = $g(t, e);
  return vg(n) ? n : void 0;
}
var Ba = Qt(Ye, "WeakMap"), Fl = Object.create, Rg = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!Oe(e))
      return {};
    if (Fl)
      return Fl(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
})();
function Ag(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function J() {
}
function Eg(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var xg = 800, Sg = 16, Ig = Date.now;
function wg(t) {
  var e = 0, n = 0;
  return function() {
    var r = Ig(), i = Sg - (r - n);
    if (n = r, i > 0) {
      if (++e >= xg)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function _g(t) {
  return function() {
    return t;
  };
}
var Vi = (function() {
  try {
    var t = Qt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), Cg = Vi ? function(t, e) {
  return Vi(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: _g(e),
    writable: !0
  });
} : bn, kg = wg(Cg);
function rd(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function id(t, e, n, r) {
  for (var i = t.length, s = n + -1; ++s < i; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
function Ng(t) {
  return t !== t;
}
function bg(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function Fo(t, e, n) {
  return e === e ? bg(t, e, n) : id(t, Ng, n);
}
function sd(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && Fo(t, e, 0) > -1;
}
var Og = 9007199254740991, Pg = /^(?:0|[1-9]\d*)$/;
function Ss(t, e) {
  var n = typeof t;
  return e = e ?? Og, !!e && (n == "number" || n != "symbol" && Pg.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Go(t, e, n) {
  e == "__proto__" && Vi ? Vi(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Wr(t, e) {
  return t === e || t !== t && e !== e;
}
var Lg = Object.prototype, Mg = Lg.hasOwnProperty;
function Is(t, e, n) {
  var r = t[e];
  (!(Mg.call(t, e) && Wr(r, n)) || n === void 0 && !(e in t)) && Go(t, e, n);
}
function zr(t, e, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, a = e.length; ++s < a; ) {
    var o = e[s], l = void 0;
    l === void 0 && (l = t[o]), i ? Go(n, o, l) : Is(n, o, l);
  }
  return n;
}
var Gl = Math.max;
function Dg(t, e, n) {
  return e = Gl(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, s = Gl(r.length - e, 0), a = Array(s); ++i < s; )
      a[i] = r[e + i];
    i = -1;
    for (var o = Array(e + 1); ++i < e; )
      o[i] = r[i];
    return o[e] = n(a), Ag(t, this, o);
  };
}
function Uo(t, e) {
  return kg(Dg(t, e, bn), t + "");
}
var Fg = 9007199254740991;
function Bo(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Fg;
}
function Xe(t) {
  return t != null && Bo(t.length) && !ht(t);
}
function ad(t, e, n) {
  if (!Oe(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Xe(n) && Ss(e, n.length) : r == "string" && e in n) ? Wr(n[e], t) : !1;
}
function Gg(t) {
  return Uo(function(e, n) {
    var r = -1, i = n.length, s = i > 1 ? n[i - 1] : void 0, a = i > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (i--, s) : void 0, a && ad(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++r < i; ) {
      var o = n[r];
      o && t(e, o, r, s);
    }
    return e;
  });
}
var Ug = Object.prototype;
function Vr(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Ug;
  return t === n;
}
function Bg(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var jg = "[object Arguments]";
function Ul(t) {
  return Ue(t) && kt(t) == jg;
}
var od = Object.prototype, Kg = od.hasOwnProperty, Hg = od.propertyIsEnumerable, ws = Ul(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ul : function(t) {
  return Ue(t) && Kg.call(t, "callee") && !Hg.call(t, "callee");
};
function Wg() {
  return !1;
}
var ld = typeof exports == "object" && exports && !exports.nodeType && exports, Bl = ld && typeof module == "object" && module && !module.nodeType && module, zg = Bl && Bl.exports === ld, jl = zg ? Ye.Buffer : void 0, Vg = jl ? jl.isBuffer : void 0, Lr = Vg || Wg, qg = "[object Arguments]", Yg = "[object Array]", Xg = "[object Boolean]", Jg = "[object Date]", Zg = "[object Error]", Qg = "[object Function]", ey = "[object Map]", ty = "[object Number]", ny = "[object Object]", ry = "[object RegExp]", iy = "[object Set]", sy = "[object String]", ay = "[object WeakMap]", oy = "[object ArrayBuffer]", ly = "[object DataView]", uy = "[object Float32Array]", cy = "[object Float64Array]", fy = "[object Int8Array]", dy = "[object Int16Array]", hy = "[object Int32Array]", py = "[object Uint8Array]", my = "[object Uint8ClampedArray]", gy = "[object Uint16Array]", yy = "[object Uint32Array]", B = {};
B[uy] = B[cy] = B[fy] = B[dy] = B[hy] = B[py] = B[my] = B[gy] = B[yy] = !0;
B[qg] = B[Yg] = B[oy] = B[Xg] = B[ly] = B[Jg] = B[Zg] = B[Qg] = B[ey] = B[ty] = B[ny] = B[ry] = B[iy] = B[sy] = B[ay] = !1;
function Ty(t) {
  return Ue(t) && Bo(t.length) && !!B[kt(t)];
}
function _s(t) {
  return function(e) {
    return t(e);
  };
}
var ud = typeof exports == "object" && exports && !exports.nodeType && exports, Nr = ud && typeof module == "object" && module && !module.nodeType && module, vy = Nr && Nr.exports === ud, fa = vy && ed.process, At = (function() {
  try {
    var t = Nr && Nr.require && Nr.require("util").types;
    return t || fa && fa.binding && fa.binding("util");
  } catch {
  }
})(), Kl = At && At.isTypedArray, jo = Kl ? _s(Kl) : Ty, $y = Object.prototype, Ry = $y.hasOwnProperty;
function cd(t, e) {
  var n = M(t), r = !n && ws(t), i = !n && !r && Lr(t), s = !n && !r && !i && jo(t), a = n || r || i || s, o = a ? Bg(t.length, String) : [], l = o.length;
  for (var u in t)
    (e || Ry.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ss(u, l))) && o.push(u);
  return o;
}
function fd(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Ay = fd(Object.keys, Object), Ey = Object.prototype, xy = Ey.hasOwnProperty;
function dd(t) {
  if (!Vr(t))
    return Ay(t);
  var e = [];
  for (var n in Object(t))
    xy.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Pe(t) {
  return Xe(t) ? cd(t) : dd(t);
}
var Sy = Object.prototype, Iy = Sy.hasOwnProperty, ja = Gg(function(t, e) {
  if (Vr(e) || Xe(e)) {
    zr(e, Pe(e), t);
    return;
  }
  for (var n in e)
    Iy.call(e, n) && Is(t, n, e[n]);
});
function wy(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var _y = Object.prototype, Cy = _y.hasOwnProperty;
function ky(t) {
  if (!Oe(t))
    return wy(t);
  var e = Vr(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Cy.call(t, r)) || n.push(r);
  return n;
}
function Ko(t) {
  return Xe(t) ? cd(t, !0) : ky(t);
}
var Ny = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, by = /^\w*$/;
function Ho(t, e) {
  if (M(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || As(t) ? !0 : by.test(t) || !Ny.test(t) || e != null && t in Object(e);
}
var Mr = Qt(Object, "create");
function Oy() {
  this.__data__ = Mr ? Mr(null) : {}, this.size = 0;
}
function Py(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ly = "__lodash_hash_undefined__", My = Object.prototype, Dy = My.hasOwnProperty;
function Fy(t) {
  var e = this.__data__;
  if (Mr) {
    var n = e[t];
    return n === Ly ? void 0 : n;
  }
  return Dy.call(e, t) ? e[t] : void 0;
}
var Gy = Object.prototype, Uy = Gy.hasOwnProperty;
function By(t) {
  var e = this.__data__;
  return Mr ? e[t] !== void 0 : Uy.call(e, t);
}
var jy = "__lodash_hash_undefined__";
function Ky(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Mr && e === void 0 ? jy : e, this;
}
function zt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
zt.prototype.clear = Oy;
zt.prototype.delete = Py;
zt.prototype.get = Fy;
zt.prototype.has = By;
zt.prototype.set = Ky;
function Hy() {
  this.__data__ = [], this.size = 0;
}
function Cs(t, e) {
  for (var n = t.length; n--; )
    if (Wr(t[n][0], e))
      return n;
  return -1;
}
var Wy = Array.prototype, zy = Wy.splice;
function Vy(t) {
  var e = this.__data__, n = Cs(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : zy.call(e, n, 1), --this.size, !0;
}
function qy(t) {
  var e = this.__data__, n = Cs(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Yy(t) {
  return Cs(this.__data__, t) > -1;
}
function Xy(t, e) {
  var n = this.__data__, r = Cs(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function pt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
pt.prototype.clear = Hy;
pt.prototype.delete = Vy;
pt.prototype.get = qy;
pt.prototype.has = Yy;
pt.prototype.set = Xy;
var Dr = Qt(Ye, "Map");
function Jy() {
  this.size = 0, this.__data__ = {
    hash: new zt(),
    map: new (Dr || pt)(),
    string: new zt()
  };
}
function Zy(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ks(t, e) {
  var n = t.__data__;
  return Zy(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Qy(t) {
  var e = ks(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function eT(t) {
  return ks(this, t).get(t);
}
function tT(t) {
  return ks(this, t).has(t);
}
function nT(t, e) {
  var n = ks(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = Jy;
mt.prototype.delete = Qy;
mt.prototype.get = eT;
mt.prototype.has = tT;
mt.prototype.set = nT;
var rT = "Expected a function";
function Wo(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(rT);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var a = t.apply(this, r);
    return n.cache = s.set(i, a) || s, a;
  };
  return n.cache = new (Wo.Cache || mt)(), n;
}
Wo.Cache = mt;
var iT = 500;
function sT(t) {
  var e = Wo(t, function(r) {
    return n.size === iT && n.clear(), r;
  }), n = e.cache;
  return e;
}
var aT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, oT = /\\(\\)?/g, lT = sT(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(aT, function(n, r, i, s) {
    e.push(i ? s.replace(oT, "$1") : r || n);
  }), e;
});
function uT(t) {
  return t == null ? "" : nd(t);
}
function Ns(t, e) {
  return M(t) ? t : Ho(t, e) ? [t] : lT(uT(t));
}
function qr(t) {
  if (typeof t == "string" || As(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function zo(t, e) {
  e = Ns(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[qr(e[n++])];
  return n && n == r ? t : void 0;
}
function cT(t, e, n) {
  var r = t == null ? void 0 : zo(t, e);
  return r === void 0 ? n : r;
}
function Vo(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Hl = be ? be.isConcatSpreadable : void 0;
function fT(t) {
  return M(t) || ws(t) || !!(Hl && t && t[Hl]);
}
function qo(t, e, n, r, i) {
  var s = -1, a = t.length;
  for (n || (n = fT), i || (i = []); ++s < a; ) {
    var o = t[s];
    n(o) ? Vo(i, o) : r || (i[i.length] = o);
  }
  return i;
}
function Ge(t) {
  var e = t == null ? 0 : t.length;
  return e ? qo(t) : [];
}
var hd = fd(Object.getPrototypeOf, Object);
function pd(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = t[r + e];
  return s;
}
function dT(t, e, n, r) {
  var i = -1, s = t == null ? 0 : t.length;
  for (r && s && (n = t[++i]); ++i < s; )
    n = e(n, t[i], i, t);
  return n;
}
function hT() {
  this.__data__ = new pt(), this.size = 0;
}
function pT(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function mT(t) {
  return this.__data__.get(t);
}
function gT(t) {
  return this.__data__.has(t);
}
var yT = 200;
function TT(t, e) {
  var n = this.__data__;
  if (n instanceof pt) {
    var r = n.__data__;
    if (!Dr || r.length < yT - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new mt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Ve(t) {
  var e = this.__data__ = new pt(t);
  this.size = e.size;
}
Ve.prototype.clear = hT;
Ve.prototype.delete = pT;
Ve.prototype.get = mT;
Ve.prototype.has = gT;
Ve.prototype.set = TT;
function vT(t, e) {
  return t && zr(e, Pe(e), t);
}
function $T(t, e) {
  return t && zr(e, Ko(e), t);
}
var md = typeof exports == "object" && exports && !exports.nodeType && exports, Wl = md && typeof module == "object" && module && !module.nodeType && module, RT = Wl && Wl.exports === md, zl = RT ? Ye.Buffer : void 0, Vl = zl ? zl.allocUnsafe : void 0;
function AT(t, e) {
  var n = t.length, r = Vl ? Vl(n) : new t.constructor(n);
  return t.copy(r), r;
}
function Yo(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, s = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (s[i++] = a);
  }
  return s;
}
function gd() {
  return [];
}
var ET = Object.prototype, xT = ET.propertyIsEnumerable, ql = Object.getOwnPropertySymbols, Xo = ql ? function(t) {
  return t == null ? [] : (t = Object(t), Yo(ql(t), function(e) {
    return xT.call(t, e);
  }));
} : gd;
function ST(t, e) {
  return zr(t, Xo(t), e);
}
var IT = Object.getOwnPropertySymbols, yd = IT ? function(t) {
  for (var e = []; t; )
    Vo(e, Xo(t)), t = hd(t);
  return e;
} : gd;
function wT(t, e) {
  return zr(t, yd(t), e);
}
function Td(t, e, n) {
  var r = e(t);
  return M(t) ? r : Vo(r, n(t));
}
function Ka(t) {
  return Td(t, Pe, Xo);
}
function _T(t) {
  return Td(t, Ko, yd);
}
var Ha = Qt(Ye, "DataView"), Wa = Qt(Ye, "Promise"), hn = Qt(Ye, "Set"), Yl = "[object Map]", CT = "[object Object]", Xl = "[object Promise]", Jl = "[object Set]", Zl = "[object WeakMap]", Ql = "[object DataView]", kT = Zt(Ha), NT = Zt(Dr), bT = Zt(Wa), OT = Zt(hn), PT = Zt(Ba), Ce = kt;
(Ha && Ce(new Ha(new ArrayBuffer(1))) != Ql || Dr && Ce(new Dr()) != Yl || Wa && Ce(Wa.resolve()) != Xl || hn && Ce(new hn()) != Jl || Ba && Ce(new Ba()) != Zl) && (Ce = function(t) {
  var e = kt(t), n = e == CT ? t.constructor : void 0, r = n ? Zt(n) : "";
  if (r)
    switch (r) {
      case kT:
        return Ql;
      case NT:
        return Yl;
      case bT:
        return Xl;
      case OT:
        return Jl;
      case PT:
        return Zl;
    }
  return e;
});
var LT = Object.prototype, MT = LT.hasOwnProperty;
function DT(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && MT.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var qi = Ye.Uint8Array;
function FT(t) {
  var e = new t.constructor(t.byteLength);
  return new qi(e).set(new qi(t)), e;
}
function GT(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var UT = /\w*$/;
function BT(t) {
  var e = new t.constructor(t.source, UT.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var eu = be ? be.prototype : void 0, tu = eu ? eu.valueOf : void 0;
function jT(t) {
  return tu ? Object(tu.call(t)) : {};
}
function KT(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var HT = "[object Boolean]", WT = "[object Date]", zT = "[object Map]", VT = "[object Number]", qT = "[object RegExp]", YT = "[object Set]", XT = "[object String]", JT = "[object Symbol]", ZT = "[object ArrayBuffer]", QT = "[object DataView]", ev = "[object Float32Array]", tv = "[object Float64Array]", nv = "[object Int8Array]", rv = "[object Int16Array]", iv = "[object Int32Array]", sv = "[object Uint8Array]", av = "[object Uint8ClampedArray]", ov = "[object Uint16Array]", lv = "[object Uint32Array]";
function uv(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case ZT:
      return FT(t);
    case HT:
    case WT:
      return new r(+t);
    case QT:
      return GT(t);
    case ev:
    case tv:
    case nv:
    case rv:
    case iv:
    case sv:
    case av:
    case ov:
    case lv:
      return KT(t);
    case zT:
      return new r();
    case VT:
    case XT:
      return new r(t);
    case qT:
      return BT(t);
    case YT:
      return new r();
    case JT:
      return jT(t);
  }
}
function cv(t) {
  return typeof t.constructor == "function" && !Vr(t) ? Rg(hd(t)) : {};
}
var fv = "[object Map]";
function dv(t) {
  return Ue(t) && Ce(t) == fv;
}
var nu = At && At.isMap, hv = nu ? _s(nu) : dv, pv = "[object Set]";
function mv(t) {
  return Ue(t) && Ce(t) == pv;
}
var ru = At && At.isSet, gv = ru ? _s(ru) : mv, yv = 2, vd = "[object Arguments]", Tv = "[object Array]", vv = "[object Boolean]", $v = "[object Date]", Rv = "[object Error]", $d = "[object Function]", Av = "[object GeneratorFunction]", Ev = "[object Map]", xv = "[object Number]", Rd = "[object Object]", Sv = "[object RegExp]", Iv = "[object Set]", wv = "[object String]", _v = "[object Symbol]", Cv = "[object WeakMap]", kv = "[object ArrayBuffer]", Nv = "[object DataView]", bv = "[object Float32Array]", Ov = "[object Float64Array]", Pv = "[object Int8Array]", Lv = "[object Int16Array]", Mv = "[object Int32Array]", Dv = "[object Uint8Array]", Fv = "[object Uint8ClampedArray]", Gv = "[object Uint16Array]", Uv = "[object Uint32Array]", G = {};
G[vd] = G[Tv] = G[kv] = G[Nv] = G[vv] = G[$v] = G[bv] = G[Ov] = G[Pv] = G[Lv] = G[Mv] = G[Ev] = G[xv] = G[Rd] = G[Sv] = G[Iv] = G[wv] = G[_v] = G[Dv] = G[Fv] = G[Gv] = G[Uv] = !0;
G[Rv] = G[$d] = G[Cv] = !1;
function Ci(t, e, n, r, i, s) {
  var a, o = e & yv;
  if (a !== void 0)
    return a;
  if (!Oe(t))
    return t;
  var l = M(t);
  if (l)
    return a = DT(t), Eg(t, a);
  var u = Ce(t), c = u == $d || u == Av;
  if (Lr(t))
    return AT(t);
  if (u == Rd || u == vd || c && !i)
    return a = c ? {} : cv(t), o ? wT(t, $T(a, t)) : ST(t, vT(a, t));
  if (!G[u])
    return i ? t : {};
  a = uv(t, u), s || (s = new Ve());
  var f = s.get(t);
  if (f)
    return f;
  s.set(t, a), gv(t) ? t.forEach(function(m) {
    a.add(Ci(m, e, n, m, t, s));
  }) : hv(t) && t.forEach(function(m, g) {
    a.set(g, Ci(m, e, n, g, t, s));
  });
  var d = Ka, h = l ? void 0 : d(t);
  return rd(h || t, function(m, g) {
    h && (g = m, m = t[g]), Is(a, g, Ci(m, e, n, g, t, s));
  }), a;
}
var Bv = 4;
function ae(t) {
  return Ci(t, Bv);
}
function Yr(t) {
  for (var e = -1, n = t == null ? 0 : t.length, r = 0, i = []; ++e < n; ) {
    var s = t[e];
    s && (i[r++] = s);
  }
  return i;
}
var jv = "__lodash_hash_undefined__";
function Kv(t) {
  return this.__data__.set(t, jv), this;
}
function Hv(t) {
  return this.__data__.has(t);
}
function On(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new mt(); ++e < n; )
    this.add(t[e]);
}
On.prototype.add = On.prototype.push = Kv;
On.prototype.has = Hv;
function Ad(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Jo(t, e) {
  return t.has(e);
}
var Wv = 1, zv = 2;
function Ed(t, e, n, r, i, s) {
  var a = n & Wv, o = t.length, l = e.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(t), c = s.get(e);
  if (u && c)
    return u == e && c == t;
  var f = -1, d = !0, h = n & zv ? new On() : void 0;
  for (s.set(t, e), s.set(e, t); ++f < o; ) {
    var m = t[f], g = e[f];
    if (r)
      var v = a ? r(g, m, f, e, t, s) : r(m, g, f, t, e, s);
    if (v !== void 0) {
      if (v)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!Ad(e, function(y, R) {
        if (!Jo(h, R) && (m === y || i(m, y, n, r, s)))
          return h.push(R);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === g || i(m, g, n, r, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), d;
}
function Vv(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Zo(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var qv = 1, Yv = 2, Xv = "[object Boolean]", Jv = "[object Date]", Zv = "[object Error]", Qv = "[object Map]", e$ = "[object Number]", t$ = "[object RegExp]", n$ = "[object Set]", r$ = "[object String]", i$ = "[object Symbol]", s$ = "[object ArrayBuffer]", a$ = "[object DataView]", iu = be ? be.prototype : void 0, da = iu ? iu.valueOf : void 0;
function o$(t, e, n, r, i, s, a) {
  switch (n) {
    case a$:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case s$:
      return !(t.byteLength != e.byteLength || !s(new qi(t), new qi(e)));
    case Xv:
    case Jv:
    case e$:
      return Wr(+t, +e);
    case Zv:
      return t.name == e.name && t.message == e.message;
    case t$:
    case r$:
      return t == e + "";
    case Qv:
      var o = Vv;
    case n$:
      var l = r & qv;
      if (o || (o = Zo), t.size != e.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= Yv, a.set(t, e);
      var c = Ed(o(t), o(e), r, i, s, a);
      return a.delete(t), c;
    case i$:
      if (da)
        return da.call(t) == da.call(e);
  }
  return !1;
}
var l$ = 1, u$ = Object.prototype, c$ = u$.hasOwnProperty;
function f$(t, e, n, r, i, s) {
  var a = n & l$, o = Ka(t), l = o.length, u = Ka(e), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(a ? d in e : c$.call(e, d)))
      return !1;
  }
  var h = s.get(t), m = s.get(e);
  if (h && m)
    return h == e && m == t;
  var g = !0;
  s.set(t, e), s.set(e, t);
  for (var v = a; ++f < l; ) {
    d = o[f];
    var y = t[d], R = e[d];
    if (r)
      var $ = a ? r(R, y, d, e, t, s) : r(y, R, d, t, e, s);
    if (!($ === void 0 ? y === R || i(y, R, n, r, s) : $)) {
      g = !1;
      break;
    }
    v || (v = d == "constructor");
  }
  if (g && !v) {
    var x = t.constructor, O = e.constructor;
    x != O && "constructor" in t && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return s.delete(t), s.delete(e), g;
}
var d$ = 1, su = "[object Arguments]", au = "[object Array]", pi = "[object Object]", h$ = Object.prototype, ou = h$.hasOwnProperty;
function p$(t, e, n, r, i, s) {
  var a = M(t), o = M(e), l = a ? au : Ce(t), u = o ? au : Ce(e);
  l = l == su ? pi : l, u = u == su ? pi : u;
  var c = l == pi, f = u == pi, d = l == u;
  if (d && Lr(t)) {
    if (!Lr(e))
      return !1;
    a = !0, c = !1;
  }
  if (d && !c)
    return s || (s = new Ve()), a || jo(t) ? Ed(t, e, n, r, i, s) : o$(t, e, l, n, r, i, s);
  if (!(n & d$)) {
    var h = c && ou.call(t, "__wrapped__"), m = f && ou.call(e, "__wrapped__");
    if (h || m) {
      var g = h ? t.value() : t, v = m ? e.value() : e;
      return s || (s = new Ve()), i(g, v, n, r, s);
    }
  }
  return d ? (s || (s = new Ve()), f$(t, e, n, r, i, s)) : !1;
}
function Qo(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Ue(t) && !Ue(e) ? t !== t && e !== e : p$(t, e, n, r, Qo, i);
}
var m$ = 1, g$ = 2;
function y$(t, e, n, r) {
  var i = n.length, s = i;
  if (t == null)
    return !s;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < s; ) {
    a = n[i];
    var o = a[0], l = t[o], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(o in t))
        return !1;
    } else {
      var c = new Ve(), f;
      if (!(f === void 0 ? Qo(u, l, m$ | g$, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function xd(t) {
  return t === t && !Oe(t);
}
function T$(t) {
  for (var e = Pe(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, xd(i)];
  }
  return e;
}
function Sd(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function v$(t) {
  var e = T$(t);
  return e.length == 1 && e[0][2] ? Sd(e[0][0], e[0][1]) : function(n) {
    return n === t || y$(n, t, e);
  };
}
function $$(t, e) {
  return t != null && e in Object(t);
}
function Id(t, e, n) {
  e = Ns(e, t);
  for (var r = -1, i = e.length, s = !1; ++r < i; ) {
    var a = qr(e[r]);
    if (!(s = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return s || ++r != i ? s : (i = t == null ? 0 : t.length, !!i && Bo(i) && Ss(a, i) && (M(t) || ws(t)));
}
function R$(t, e) {
  return t != null && Id(t, e, $$);
}
var A$ = 1, E$ = 2;
function x$(t, e) {
  return Ho(t) && xd(e) ? Sd(qr(t), e) : function(n) {
    var r = cT(n, t);
    return r === void 0 && r === e ? R$(n, t) : Qo(e, r, A$ | E$);
  };
}
function S$(t) {
  return function(e) {
    return e?.[t];
  };
}
function I$(t) {
  return function(e) {
    return zo(e, t);
  };
}
function w$(t) {
  return Ho(t) ? S$(qr(t)) : I$(t);
}
function Je(t) {
  return typeof t == "function" ? t : t == null ? bn : typeof t == "object" ? M(t) ? x$(t[0], t[1]) : v$(t) : w$(t);
}
function _$(t, e, n, r) {
  for (var i = -1, s = t == null ? 0 : t.length; ++i < s; ) {
    var a = t[i];
    e(r, a, n(a), t);
  }
  return r;
}
function C$(t) {
  return function(e, n, r) {
    for (var i = -1, s = Object(e), a = r(e), o = a.length; o--; ) {
      var l = a[++i];
      if (n(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var k$ = C$();
function N$(t, e) {
  return t && k$(t, e, Pe);
}
function b$(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Xe(n))
      return t(n, r);
    for (var i = n.length, s = -1, a = Object(n); ++s < i && r(a[s], s, a) !== !1; )
      ;
    return n;
  };
}
var en = b$(N$);
function O$(t, e, n, r) {
  return en(t, function(i, s, a) {
    e(r, i, n(i), a);
  }), r;
}
function P$(t, e) {
  return function(n, r) {
    var i = M(n) ? _$ : O$, s = e ? e() : {};
    return i(n, t, Je(r), s);
  };
}
var wd = Object.prototype, L$ = wd.hasOwnProperty, el = Uo(function(t, e) {
  t = Object(t);
  var n = -1, r = e.length, i = r > 2 ? e[2] : void 0;
  for (i && ad(e[0], e[1], i) && (r = 1); ++n < r; )
    for (var s = e[n], a = Ko(s), o = -1, l = a.length; ++o < l; ) {
      var u = a[o], c = t[u];
      (c === void 0 || Wr(c, wd[u]) && !L$.call(t, u)) && (t[u] = s[u]);
    }
  return t;
});
function lu(t) {
  return Ue(t) && Xe(t);
}
var M$ = 200;
function D$(t, e, n, r) {
  var i = -1, s = sd, a = !0, o = t.length, l = [], u = e.length;
  if (!o)
    return l;
  e.length >= M$ && (s = Jo, a = !1, e = new On(e));
  e:
    for (; ++i < o; ) {
      var c = t[i], f = c;
      if (c = c !== 0 ? c : 0, a && f === f) {
        for (var d = u; d--; )
          if (e[d] === f)
            continue e;
        l.push(c);
      } else s(e, f, r) || l.push(c);
    }
  return l;
}
var bs = Uo(function(t, e) {
  return lu(t) ? D$(t, qo(e, 1, lu, !0)) : [];
});
function Pn(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function ne(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : xs(e), pd(t, e < 0 ? 0 : e, r)) : [];
}
function Fr(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : xs(e), e = r - e, pd(t, 0, e < 0 ? 0 : e)) : [];
}
function F$(t) {
  return typeof t == "function" ? t : bn;
}
function k(t, e) {
  var n = M(t) ? rd : en;
  return n(t, F$(e));
}
function G$(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (!e(t[n], n, t))
      return !1;
  return !0;
}
function U$(t, e) {
  var n = !0;
  return en(t, function(r, i, s) {
    return n = !!e(r, i, s), n;
  }), n;
}
function qe(t, e, n) {
  var r = M(t) ? G$ : U$;
  return r(t, Je(e));
}
function _d(t, e) {
  var n = [];
  return en(t, function(r, i, s) {
    e(r, i, s) && n.push(r);
  }), n;
}
function Le(t, e) {
  var n = M(t) ? Yo : _d;
  return n(t, Je(e));
}
function B$(t) {
  return function(e, n, r) {
    var i = Object(e);
    if (!Xe(e)) {
      var s = Je(n);
      e = Pe(e), n = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = t(e, n, r);
    return a > -1 ? i[s ? e[a] : a] : void 0;
  };
}
var j$ = Math.max;
function K$(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var i = n == null ? 0 : xs(n);
  return i < 0 && (i = j$(r + i, 0)), id(t, Je(e), i);
}
var Ln = B$(K$);
function Be(t) {
  return t && t.length ? t[0] : void 0;
}
function H$(t, e) {
  var n = -1, r = Xe(t) ? Array(t.length) : [];
  return en(t, function(i, s, a) {
    r[++n] = e(i, s, a);
  }), r;
}
function w(t, e) {
  var n = M(t) ? Es : H$;
  return n(t, Je(e));
}
function ke(t, e) {
  return qo(w(t, e));
}
var W$ = Object.prototype, z$ = W$.hasOwnProperty, V$ = P$(function(t, e, n) {
  z$.call(t, n) ? t[n].push(e) : Go(t, n, [e]);
}), q$ = Object.prototype, Y$ = q$.hasOwnProperty;
function X$(t, e) {
  return t != null && Y$.call(t, e);
}
function _(t, e) {
  return t != null && Id(t, e, X$);
}
var J$ = "[object String]";
function je(t) {
  return typeof t == "string" || !M(t) && Ue(t) && kt(t) == J$;
}
function Z$(t, e) {
  return Es(e, function(n) {
    return t[n];
  });
}
function Z(t) {
  return t == null ? [] : Z$(t, Pe(t));
}
var Q$ = Math.max;
function ge(t, e, n, r) {
  t = Xe(t) ? t : Z(t), n = n ? xs(n) : 0;
  var i = t.length;
  return n < 0 && (n = Q$(i + n, 0)), je(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && Fo(t, e, n) > -1;
}
function uu(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var i = 0;
  return Fo(t, e, i);
}
var eR = "[object Map]", tR = "[object Set]", nR = Object.prototype, rR = nR.hasOwnProperty;
function U(t) {
  if (t == null)
    return !0;
  if (Xe(t) && (M(t) || typeof t == "string" || typeof t.splice == "function" || Lr(t) || jo(t) || ws(t)))
    return !t.length;
  var e = Ce(t);
  if (e == eR || e == tR)
    return !t.size;
  if (Vr(t))
    return !dd(t).length;
  for (var n in t)
    if (rR.call(t, n))
      return !1;
  return !0;
}
var iR = "[object RegExp]";
function sR(t) {
  return Ue(t) && kt(t) == iR;
}
var cu = At && At.isRegExp, Et = cu ? _s(cu) : sR;
function ct(t) {
  return t === void 0;
}
var aR = "Expected a function";
function oR(t) {
  if (typeof t != "function")
    throw new TypeError(aR);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !t.call(this);
      case 1:
        return !t.call(this, e[0]);
      case 2:
        return !t.call(this, e[0], e[1]);
      case 3:
        return !t.call(this, e[0], e[1], e[2]);
    }
    return !t.apply(this, e);
  };
}
function lR(t, e, n, r) {
  if (!Oe(t))
    return t;
  e = Ns(e, t);
  for (var i = -1, s = e.length, a = s - 1, o = t; o != null && ++i < s; ) {
    var l = qr(e[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = o[l];
      u = void 0, u === void 0 && (u = Oe(c) ? c : Ss(e[i + 1]) ? [] : {});
    }
    Is(o, l, u), o = o[l];
  }
  return t;
}
function uR(t, e, n) {
  for (var r = -1, i = e.length, s = {}; ++r < i; ) {
    var a = e[r], o = zo(t, a);
    n(o, a) && lR(s, Ns(a, t), o);
  }
  return s;
}
function cR(t, e) {
  if (t == null)
    return {};
  var n = Es(_T(t), function(r) {
    return [r];
  });
  return e = Je(e), uR(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
function fR(t, e, n, r, i) {
  return i(t, function(s, a, o) {
    n = r ? (r = !1, s) : e(n, s, a, o);
  }), n;
}
function xe(t, e, n) {
  var r = M(t) ? dT : fR, i = arguments.length < 3;
  return r(t, Je(e), n, i, en);
}
function Os(t, e) {
  var n = M(t) ? Yo : _d;
  return n(t, oR(Je(e)));
}
function dR(t, e) {
  var n;
  return en(t, function(r, i, s) {
    return n = e(r, i, s), !n;
  }), !!n;
}
function hR(t, e, n) {
  var r = M(t) ? Ad : dR;
  return r(t, Je(e));
}
var pR = 1 / 0, mR = hn && 1 / Zo(new hn([, -0]))[1] == pR ? function(t) {
  return new hn(t);
} : J, gR = 200;
function yR(t, e, n) {
  var r = -1, i = sd, s = t.length, a = !0, o = [], l = o;
  if (s >= gR) {
    var u = mR(t);
    if (u)
      return Zo(u);
    a = !1, i = Jo, l = new On();
  } else
    l = o;
  e:
    for (; ++r < s; ) {
      var c = t[r], f = c;
      if (c = c !== 0 ? c : 0, a && f === f) {
        for (var d = l.length; d--; )
          if (l[d] === f)
            continue e;
        o.push(c);
      } else i(l, f, n) || (l !== o && l.push(f), o.push(c));
    }
  return o;
}
function tl(t) {
  return t && t.length ? yR(t) : [];
}
function za(t) {
  console && console.error && console.error(`Error: ${t}`);
}
function Cd(t) {
  console && console.warn && console.warn(`Warning: ${t}`);
}
function kd(t) {
  const e = (/* @__PURE__ */ new Date()).getTime(), n = t();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: n };
}
function Nd(t) {
  function e() {
  }
  e.prototype = t;
  const n = new e();
  function r() {
    return typeof n.bar;
  }
  return r(), r(), t;
}
var bd = typeof global == "object" && global && global.Object === Object && global, TR = typeof self == "object" && self && self.Object === Object && self, gt = bd || TR || Function("return this")(), xt = gt.Symbol, Od = Object.prototype, vR = Od.hasOwnProperty, $R = Od.toString, zn = xt ? xt.toStringTag : void 0;
function RR(t) {
  var e = vR.call(t, zn), n = t[zn];
  try {
    t[zn] = void 0;
    var r = !0;
  } catch {
  }
  var i = $R.call(t);
  return r && (e ? t[zn] = n : delete t[zn]), i;
}
var AR = Object.prototype, ER = AR.toString;
function xR(t) {
  return ER.call(t);
}
var SR = "[object Null]", IR = "[object Undefined]", fu = xt ? xt.toStringTag : void 0;
function Nt(t) {
  return t == null ? t === void 0 ? IR : SR : fu && fu in Object(t) ? RR(t) : xR(t);
}
function St(t) {
  return t != null && typeof t == "object";
}
var wR = "[object Symbol]";
function Ps(t) {
  return typeof t == "symbol" || St(t) && Nt(t) == wR;
}
function Ls(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var pe = Array.isArray, du = xt ? xt.prototype : void 0, hu = du ? du.toString : void 0;
function Pd(t) {
  if (typeof t == "string")
    return t;
  if (pe(t))
    return Ls(t, Pd) + "";
  if (Ps(t))
    return hu ? hu.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var _R = /\s/;
function CR(t) {
  for (var e = t.length; e-- && _R.test(t.charAt(e)); )
    ;
  return e;
}
var kR = /^\s+/;
function NR(t) {
  return t && t.slice(0, CR(t) + 1).replace(kR, "");
}
function ft(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var pu = NaN, bR = /^[-+]0x[0-9a-f]+$/i, OR = /^0b[01]+$/i, PR = /^0o[0-7]+$/i, LR = parseInt;
function MR(t) {
  if (typeof t == "number")
    return t;
  if (Ps(t))
    return pu;
  if (ft(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ft(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = NR(t);
  var n = OR.test(t);
  return n || PR.test(t) ? LR(t.slice(2), n ? 2 : 8) : bR.test(t) ? pu : +t;
}
var mu = 1 / 0, DR = 17976931348623157e292;
function FR(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = MR(t), t === mu || t === -mu) {
    var e = t < 0 ? -1 : 1;
    return e * DR;
  }
  return t === t ? t : 0;
}
function GR(t) {
  var e = FR(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function Ms(t) {
  return t;
}
var UR = "[object AsyncFunction]", BR = "[object Function]", jR = "[object GeneratorFunction]", KR = "[object Proxy]";
function Ld(t) {
  if (!ft(t))
    return !1;
  var e = Nt(t);
  return e == BR || e == jR || e == UR || e == KR;
}
var ha = gt["__core-js_shared__"], gu = (function() {
  var t = /[^.]+$/.exec(ha && ha.keys && ha.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function HR(t) {
  return !!gu && gu in t;
}
var WR = Function.prototype, zR = WR.toString;
function tn(t) {
  if (t != null) {
    try {
      return zR.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var VR = /[\\^$.*+?()[\]{}|]/g, qR = /^\[object .+?Constructor\]$/, YR = Function.prototype, XR = Object.prototype, JR = YR.toString, ZR = XR.hasOwnProperty, QR = RegExp(
  "^" + JR.call(ZR).replace(VR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function eA(t) {
  if (!ft(t) || HR(t))
    return !1;
  var e = Ld(t) ? QR : qR;
  return e.test(tn(t));
}
function tA(t, e) {
  return t?.[e];
}
function nn(t, e) {
  var n = tA(t, e);
  return eA(n) ? n : void 0;
}
var Va = nn(gt, "WeakMap");
function nA(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var rA = 800, iA = 16, sA = Date.now;
function aA(t) {
  var e = 0, n = 0;
  return function() {
    var r = sA(), i = iA - (r - n);
    if (n = r, i > 0) {
      if (++e >= rA)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function oA(t) {
  return function() {
    return t;
  };
}
var Yi = (function() {
  try {
    var t = nn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), lA = Yi ? function(t, e) {
  return Yi(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: oA(e),
    writable: !0
  });
} : Ms, uA = aA(lA);
function cA(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function fA(t, e, n, r) {
  for (var i = t.length, s = n + -1; ++s < i; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
function dA(t) {
  return t !== t;
}
function hA(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function pA(t, e, n) {
  return e === e ? hA(t, e, n) : fA(t, dA, n);
}
var mA = 9007199254740991, gA = /^(?:0|[1-9]\d*)$/;
function Ds(t, e) {
  var n = typeof t;
  return e = e ?? mA, !!e && (n == "number" || n != "symbol" && gA.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Md(t, e, n) {
  e == "__proto__" && Yi ? Yi(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Fs(t, e) {
  return t === e || t !== t && e !== e;
}
var yA = Object.prototype, TA = yA.hasOwnProperty;
function nl(t, e, n) {
  var r = t[e];
  (!(TA.call(t, e) && Fs(r, n)) || n === void 0 && !(e in t)) && Md(t, e, n);
}
function vA(t, e, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, a = e.length; ++s < a; ) {
    var o = e[s], l = void 0;
    l === void 0 && (l = t[o]), i ? Md(n, o, l) : nl(n, o, l);
  }
  return n;
}
var yu = Math.max;
function $A(t, e, n) {
  return e = yu(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, s = yu(r.length - e, 0), a = Array(s); ++i < s; )
      a[i] = r[e + i];
    i = -1;
    for (var o = Array(e + 1); ++i < e; )
      o[i] = r[i];
    return o[e] = n(a), nA(t, this, o);
  };
}
function RA(t, e) {
  return uA($A(t, e, Ms), t + "");
}
var AA = 9007199254740991;
function rl(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= AA;
}
function rn(t) {
  return t != null && rl(t.length) && !Ld(t);
}
function EA(t, e, n) {
  if (!ft(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? rn(n) && Ds(e, n.length) : r == "string" && e in n) ? Fs(n[e], t) : !1;
}
function xA(t) {
  return RA(function(e, n) {
    var r = -1, i = n.length, s = i > 1 ? n[i - 1] : void 0, a = i > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (i--, s) : void 0, a && EA(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++r < i; ) {
      var o = n[r];
      o && t(e, o, r, s);
    }
    return e;
  });
}
var SA = Object.prototype;
function il(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || SA;
  return t === n;
}
function IA(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var wA = "[object Arguments]";
function Tu(t) {
  return St(t) && Nt(t) == wA;
}
var Dd = Object.prototype, _A = Dd.hasOwnProperty, CA = Dd.propertyIsEnumerable, Fd = Tu(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Tu : function(t) {
  return St(t) && _A.call(t, "callee") && !CA.call(t, "callee");
};
function kA() {
  return !1;
}
var Gd = typeof exports == "object" && exports && !exports.nodeType && exports, vu = Gd && typeof module == "object" && module && !module.nodeType && module, NA = vu && vu.exports === Gd, $u = NA ? gt.Buffer : void 0, bA = $u ? $u.isBuffer : void 0, qa = bA || kA, OA = "[object Arguments]", PA = "[object Array]", LA = "[object Boolean]", MA = "[object Date]", DA = "[object Error]", FA = "[object Function]", GA = "[object Map]", UA = "[object Number]", BA = "[object Object]", jA = "[object RegExp]", KA = "[object Set]", HA = "[object String]", WA = "[object WeakMap]", zA = "[object ArrayBuffer]", VA = "[object DataView]", qA = "[object Float32Array]", YA = "[object Float64Array]", XA = "[object Int8Array]", JA = "[object Int16Array]", ZA = "[object Int32Array]", QA = "[object Uint8Array]", eE = "[object Uint8ClampedArray]", tE = "[object Uint16Array]", nE = "[object Uint32Array]", j = {};
j[qA] = j[YA] = j[XA] = j[JA] = j[ZA] = j[QA] = j[eE] = j[tE] = j[nE] = !0;
j[OA] = j[PA] = j[zA] = j[LA] = j[VA] = j[MA] = j[DA] = j[FA] = j[GA] = j[UA] = j[BA] = j[jA] = j[KA] = j[HA] = j[WA] = !1;
function rE(t) {
  return St(t) && rl(t.length) && !!j[Nt(t)];
}
function Ud(t) {
  return function(e) {
    return t(e);
  };
}
var Bd = typeof exports == "object" && exports && !exports.nodeType && exports, br = Bd && typeof module == "object" && module && !module.nodeType && module, iE = br && br.exports === Bd, pa = iE && bd.process, Xi = (function() {
  try {
    var t = br && br.require && br.require("util").types;
    return t || pa && pa.binding && pa.binding("util");
  } catch {
  }
})(), Ru = Xi && Xi.isTypedArray, jd = Ru ? Ud(Ru) : rE, sE = Object.prototype, aE = sE.hasOwnProperty;
function Kd(t, e) {
  var n = pe(t), r = !n && Fd(t), i = !n && !r && qa(t), s = !n && !r && !i && jd(t), a = n || r || i || s, o = a ? IA(t.length, String) : [], l = o.length;
  for (var u in t)
    (e || aE.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ds(u, l))) && o.push(u);
  return o;
}
function Hd(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var oE = Hd(Object.keys, Object), lE = Object.prototype, uE = lE.hasOwnProperty;
function cE(t) {
  if (!il(t))
    return oE(t);
  var e = [];
  for (var n in Object(t))
    uE.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Xr(t) {
  return rn(t) ? Kd(t) : cE(t);
}
var fE = Object.prototype, dE = fE.hasOwnProperty, Ze = xA(function(t, e) {
  if (il(e) || rn(e)) {
    vA(e, Xr(e), t);
    return;
  }
  for (var n in e)
    dE.call(e, n) && nl(t, n, e[n]);
});
function hE(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var pE = Object.prototype, mE = pE.hasOwnProperty;
function gE(t) {
  if (!ft(t))
    return hE(t);
  var e = il(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !mE.call(t, r)) || n.push(r);
  return n;
}
function yE(t) {
  return rn(t) ? Kd(t, !0) : gE(t);
}
var TE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vE = /^\w*$/;
function sl(t, e) {
  if (pe(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ps(t) ? !0 : vE.test(t) || !TE.test(t) || e != null && t in Object(e);
}
var Gr = nn(Object, "create");
function $E() {
  this.__data__ = Gr ? Gr(null) : {}, this.size = 0;
}
function RE(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var AE = "__lodash_hash_undefined__", EE = Object.prototype, xE = EE.hasOwnProperty;
function SE(t) {
  var e = this.__data__;
  if (Gr) {
    var n = e[t];
    return n === AE ? void 0 : n;
  }
  return xE.call(e, t) ? e[t] : void 0;
}
var IE = Object.prototype, wE = IE.hasOwnProperty;
function _E(t) {
  var e = this.__data__;
  return Gr ? e[t] !== void 0 : wE.call(e, t);
}
var CE = "__lodash_hash_undefined__";
function kE(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Gr && e === void 0 ? CE : e, this;
}
function Vt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Vt.prototype.clear = $E;
Vt.prototype.delete = RE;
Vt.prototype.get = SE;
Vt.prototype.has = _E;
Vt.prototype.set = kE;
function NE() {
  this.__data__ = [], this.size = 0;
}
function Gs(t, e) {
  for (var n = t.length; n--; )
    if (Fs(t[n][0], e))
      return n;
  return -1;
}
var bE = Array.prototype, OE = bE.splice;
function PE(t) {
  var e = this.__data__, n = Gs(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : OE.call(e, n, 1), --this.size, !0;
}
function LE(t) {
  var e = this.__data__, n = Gs(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function ME(t) {
  return Gs(this.__data__, t) > -1;
}
function DE(t, e) {
  var n = this.__data__, r = Gs(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function yt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
yt.prototype.clear = NE;
yt.prototype.delete = PE;
yt.prototype.get = LE;
yt.prototype.has = ME;
yt.prototype.set = DE;
var Ur = nn(gt, "Map");
function FE() {
  this.size = 0, this.__data__ = {
    hash: new Vt(),
    map: new (Ur || yt)(),
    string: new Vt()
  };
}
function GE(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Us(t, e) {
  var n = t.__data__;
  return GE(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function UE(t) {
  var e = Us(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function BE(t) {
  return Us(this, t).get(t);
}
function jE(t) {
  return Us(this, t).has(t);
}
function KE(t, e) {
  var n = Us(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function Tt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Tt.prototype.clear = FE;
Tt.prototype.delete = UE;
Tt.prototype.get = BE;
Tt.prototype.has = jE;
Tt.prototype.set = KE;
var HE = "Expected a function";
function al(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(HE);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var a = t.apply(this, r);
    return n.cache = s.set(i, a) || s, a;
  };
  return n.cache = new (al.Cache || Tt)(), n;
}
al.Cache = Tt;
var WE = 500;
function zE(t) {
  var e = al(t, function(r) {
    return n.size === WE && n.clear(), r;
  }), n = e.cache;
  return e;
}
var VE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qE = /\\(\\)?/g, YE = zE(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(VE, function(n, r, i, s) {
    e.push(i ? s.replace(qE, "$1") : r || n);
  }), e;
});
function XE(t) {
  return t == null ? "" : Pd(t);
}
function Bs(t, e) {
  return pe(t) ? t : sl(t, e) ? [t] : YE(XE(t));
}
function Jr(t) {
  if (typeof t == "string" || Ps(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function ol(t, e) {
  e = Bs(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Jr(e[n++])];
  return n && n == r ? t : void 0;
}
function JE(t, e, n) {
  var r = t == null ? void 0 : ol(t, e);
  return r === void 0 ? n : r;
}
function Wd(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var ZE = Hd(Object.getPrototypeOf, Object);
function QE() {
  this.__data__ = new yt(), this.size = 0;
}
function ex(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function tx(t) {
  return this.__data__.get(t);
}
function nx(t) {
  return this.__data__.has(t);
}
var rx = 200;
function ix(t, e) {
  var n = this.__data__;
  if (n instanceof yt) {
    var r = n.__data__;
    if (!Ur || r.length < rx - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Tt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ut(t) {
  var e = this.__data__ = new yt(t);
  this.size = e.size;
}
ut.prototype.clear = QE;
ut.prototype.delete = ex;
ut.prototype.get = tx;
ut.prototype.has = nx;
ut.prototype.set = ix;
function sx(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, s = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (s[i++] = a);
  }
  return s;
}
function zd() {
  return [];
}
var ax = Object.prototype, ox = ax.propertyIsEnumerable, Au = Object.getOwnPropertySymbols, Vd = Au ? function(t) {
  return t == null ? [] : (t = Object(t), sx(Au(t), function(e) {
    return ox.call(t, e);
  }));
} : zd, lx = Object.getOwnPropertySymbols, ux = lx ? function(t) {
  for (var e = []; t; )
    Wd(e, Vd(t)), t = ZE(t);
  return e;
} : zd;
function qd(t, e, n) {
  var r = e(t);
  return pe(t) ? r : Wd(r, n(t));
}
function Eu(t) {
  return qd(t, Xr, Vd);
}
function cx(t) {
  return qd(t, yE, ux);
}
var Ya = nn(gt, "DataView"), Xa = nn(gt, "Promise"), Ja = nn(gt, "Set"), xu = "[object Map]", fx = "[object Object]", Su = "[object Promise]", Iu = "[object Set]", wu = "[object WeakMap]", _u = "[object DataView]", dx = tn(Ya), hx = tn(Ur), px = tn(Xa), mx = tn(Ja), gx = tn(Va), $t = Nt;
(Ya && $t(new Ya(new ArrayBuffer(1))) != _u || Ur && $t(new Ur()) != xu || Xa && $t(Xa.resolve()) != Su || Ja && $t(new Ja()) != Iu || Va && $t(new Va()) != wu) && ($t = function(t) {
  var e = Nt(t), n = e == fx ? t.constructor : void 0, r = n ? tn(n) : "";
  if (r)
    switch (r) {
      case dx:
        return _u;
      case hx:
        return xu;
      case px:
        return Su;
      case mx:
        return Iu;
      case gx:
        return wu;
    }
  return e;
});
var Cu = gt.Uint8Array, yx = "__lodash_hash_undefined__";
function Tx(t) {
  return this.__data__.set(t, yx), this;
}
function vx(t) {
  return this.__data__.has(t);
}
function Ji(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Tt(); ++e < n; )
    this.add(t[e]);
}
Ji.prototype.add = Ji.prototype.push = Tx;
Ji.prototype.has = vx;
function Yd(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function $x(t, e) {
  return t.has(e);
}
var Rx = 1, Ax = 2;
function Xd(t, e, n, r, i, s) {
  var a = n & Rx, o = t.length, l = e.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(t), c = s.get(e);
  if (u && c)
    return u == e && c == t;
  var f = -1, d = !0, h = n & Ax ? new Ji() : void 0;
  for (s.set(t, e), s.set(e, t); ++f < o; ) {
    var m = t[f], g = e[f];
    if (r)
      var v = a ? r(g, m, f, e, t, s) : r(m, g, f, t, e, s);
    if (v !== void 0) {
      if (v)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!Yd(e, function(y, R) {
        if (!$x(h, R) && (m === y || i(m, y, n, r, s)))
          return h.push(R);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === g || i(m, g, n, r, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), d;
}
function Ex(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function xx(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Sx = 1, Ix = 2, wx = "[object Boolean]", _x = "[object Date]", Cx = "[object Error]", kx = "[object Map]", Nx = "[object Number]", bx = "[object RegExp]", Ox = "[object Set]", Px = "[object String]", Lx = "[object Symbol]", Mx = "[object ArrayBuffer]", Dx = "[object DataView]", ku = xt ? xt.prototype : void 0, ma = ku ? ku.valueOf : void 0;
function Fx(t, e, n, r, i, s, a) {
  switch (n) {
    case Dx:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Mx:
      return !(t.byteLength != e.byteLength || !s(new Cu(t), new Cu(e)));
    case wx:
    case _x:
    case Nx:
      return Fs(+t, +e);
    case Cx:
      return t.name == e.name && t.message == e.message;
    case bx:
    case Px:
      return t == e + "";
    case kx:
      var o = Ex;
    case Ox:
      var l = r & Sx;
      if (o || (o = xx), t.size != e.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= Ix, a.set(t, e);
      var c = Xd(o(t), o(e), r, i, s, a);
      return a.delete(t), c;
    case Lx:
      if (ma)
        return ma.call(t) == ma.call(e);
  }
  return !1;
}
var Gx = 1, Ux = Object.prototype, Bx = Ux.hasOwnProperty;
function jx(t, e, n, r, i, s) {
  var a = n & Gx, o = Eu(t), l = o.length, u = Eu(e), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(a ? d in e : Bx.call(e, d)))
      return !1;
  }
  var h = s.get(t), m = s.get(e);
  if (h && m)
    return h == e && m == t;
  var g = !0;
  s.set(t, e), s.set(e, t);
  for (var v = a; ++f < l; ) {
    d = o[f];
    var y = t[d], R = e[d];
    if (r)
      var $ = a ? r(R, y, d, e, t, s) : r(y, R, d, t, e, s);
    if (!($ === void 0 ? y === R || i(y, R, n, r, s) : $)) {
      g = !1;
      break;
    }
    v || (v = d == "constructor");
  }
  if (g && !v) {
    var x = t.constructor, O = e.constructor;
    x != O && "constructor" in t && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof O == "function" && O instanceof O) && (g = !1);
  }
  return s.delete(t), s.delete(e), g;
}
var Kx = 1, Nu = "[object Arguments]", bu = "[object Array]", mi = "[object Object]", Hx = Object.prototype, Ou = Hx.hasOwnProperty;
function Wx(t, e, n, r, i, s) {
  var a = pe(t), o = pe(e), l = a ? bu : $t(t), u = o ? bu : $t(e);
  l = l == Nu ? mi : l, u = u == Nu ? mi : u;
  var c = l == mi, f = u == mi, d = l == u;
  if (d && qa(t)) {
    if (!qa(e))
      return !1;
    a = !0, c = !1;
  }
  if (d && !c)
    return s || (s = new ut()), a || jd(t) ? Xd(t, e, n, r, i, s) : Fx(t, e, l, n, r, i, s);
  if (!(n & Kx)) {
    var h = c && Ou.call(t, "__wrapped__"), m = f && Ou.call(e, "__wrapped__");
    if (h || m) {
      var g = h ? t.value() : t, v = m ? e.value() : e;
      return s || (s = new ut()), i(g, v, n, r, s);
    }
  }
  return d ? (s || (s = new ut()), jx(t, e, n, r, i, s)) : !1;
}
function ll(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !St(t) && !St(e) ? t !== t && e !== e : Wx(t, e, n, r, ll, i);
}
var zx = 1, Vx = 2;
function qx(t, e, n, r) {
  var i = n.length, s = i;
  if (t == null)
    return !s;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < s; ) {
    a = n[i];
    var o = a[0], l = t[o], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(o in t))
        return !1;
    } else {
      var c = new ut(), f;
      if (!(f === void 0 ? ll(u, l, zx | Vx, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Jd(t) {
  return t === t && !ft(t);
}
function Yx(t) {
  for (var e = Xr(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Jd(i)];
  }
  return e;
}
function Zd(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Xx(t) {
  var e = Yx(t);
  return e.length == 1 && e[0][2] ? Zd(e[0][0], e[0][1]) : function(n) {
    return n === t || qx(n, t, e);
  };
}
function Jx(t, e) {
  return t != null && e in Object(t);
}
function Zx(t, e, n) {
  e = Bs(e, t);
  for (var r = -1, i = e.length, s = !1; ++r < i; ) {
    var a = Jr(e[r]);
    if (!(s = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return s || ++r != i ? s : (i = t == null ? 0 : t.length, !!i && rl(i) && Ds(a, i) && (pe(t) || Fd(t)));
}
function Qx(t, e) {
  return t != null && Zx(t, e, Jx);
}
var eS = 1, tS = 2;
function nS(t, e) {
  return sl(t) && Jd(e) ? Zd(Jr(t), e) : function(n) {
    var r = JE(n, t);
    return r === void 0 && r === e ? Qx(n, t) : ll(e, r, eS | tS);
  };
}
function rS(t) {
  return function(e) {
    return e?.[t];
  };
}
function iS(t) {
  return function(e) {
    return ol(e, t);
  };
}
function sS(t) {
  return sl(t) ? rS(Jr(t)) : iS(t);
}
function js(t) {
  return typeof t == "function" ? t : t == null ? Ms : typeof t == "object" ? pe(t) ? nS(t[0], t[1]) : Xx(t) : sS(t);
}
function aS(t) {
  return function(e, n, r) {
    for (var i = -1, s = Object(e), a = r(e), o = a.length; o--; ) {
      var l = a[++i];
      if (n(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var oS = aS();
function lS(t, e) {
  return t && oS(t, e, Xr);
}
function uS(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!rn(n))
      return t(n, r);
    for (var i = n.length, s = -1, a = Object(n); ++s < i && r(a[s], s, a) !== !1; )
      ;
    return n;
  };
}
var Ks = uS(lS);
function cS(t) {
  return typeof t == "function" ? t : Ms;
}
function fS(t, e) {
  var n = pe(t) ? cA : Ks;
  return n(t, cS(e));
}
function dS(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (!e(t[n], n, t))
      return !1;
  return !0;
}
function hS(t, e) {
  var n = !0;
  return Ks(t, function(r, i, s) {
    return n = !!e(r, i, s), n;
  }), n;
}
function pS(t, e, n) {
  var r = pe(t) ? dS : hS;
  return r(t, js(e));
}
function mS(t, e) {
  var n = -1, r = rn(t) ? Array(t.length) : [];
  return Ks(t, function(i, s, a) {
    r[++n] = e(i, s, a);
  }), r;
}
function Qd(t, e) {
  var n = pe(t) ? Ls : mS;
  return n(t, js(e));
}
var gS = "[object String]";
function Zi(t) {
  return typeof t == "string" || !pe(t) && St(t) && Nt(t) == gS;
}
function yS(t, e) {
  return Ls(e, function(n) {
    return t[n];
  });
}
function TS(t) {
  return t == null ? [] : yS(t, Xr(t));
}
var vS = Math.max;
function $S(t, e, n, r) {
  t = rn(t) ? t : TS(t), n = n ? GR(n) : 0;
  var i = t.length;
  return n < 0 && (n = vS(i + n, 0)), Zi(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && pA(t, e, n) > -1;
}
var RS = "[object RegExp]";
function AS(t) {
  return St(t) && Nt(t) == RS;
}
var Pu = Xi && Xi.isRegExp, ES = Pu ? Ud(Pu) : AS;
function xS(t, e, n, r) {
  if (!ft(t))
    return t;
  e = Bs(e, t);
  for (var i = -1, s = e.length, a = s - 1, o = t; o != null && ++i < s; ) {
    var l = Jr(e[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = o[l];
      u = void 0, u === void 0 && (u = ft(c) ? c : Ds(e[i + 1]) ? [] : {});
    }
    nl(o, l, u), o = o[l];
  }
  return t;
}
function SS(t, e, n) {
  for (var r = -1, i = e.length, s = {}; ++r < i; ) {
    var a = e[r], o = ol(t, a);
    n(o, a) && xS(s, Bs(a, t), o);
  }
  return s;
}
function Qe(t, e) {
  if (t == null)
    return {};
  var n = Ls(cx(t), function(r) {
    return [r];
  });
  return e = js(e), SS(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
function IS(t, e) {
  var n;
  return Ks(t, function(r, i, s) {
    return n = e(r, i, s), !n;
  }), !!n;
}
function wS(t, e, n) {
  var r = pe(t) ? Yd : IS;
  return r(t, js(e));
}
function _S(t) {
  return CS(t) ? t.LABEL : t.name;
}
function CS(t) {
  return Zi(t.LABEL) && t.LABEL !== "";
}
class et {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), fS(this.definition, (n) => {
      n.accept(e);
    });
  }
}
class fe extends et {
  constructor(e) {
    super([]), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}
class Bn extends et {
  constructor(e) {
    super(e.definition), this.orgText = "", Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class me extends et {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
let se = class extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
};
class Se extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class Ie extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class q extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class ye extends et {
  constructor(e) {
    super(e.definition), this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class Te extends et {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, Ze(this, Qe(e, (n) => n !== void 0));
  }
}
class K {
  constructor(e) {
    this.idx = 1, Ze(this, Qe(e, (n) => n !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function kS(t) {
  return Qd(t, ki);
}
function ki(t) {
  function e(n) {
    return Qd(n, ki);
  }
  if (t instanceof fe) {
    const n = {
      type: "NonTerminal",
      name: t.nonTerminalName,
      idx: t.idx
    };
    return Zi(t.label) && (n.label = t.label), n;
  } else {
    if (t instanceof me)
      return {
        type: "Alternative",
        definition: e(t.definition)
      };
    if (t instanceof se)
      return {
        type: "Option",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Se)
      return {
        type: "RepetitionMandatory",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Ie)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: t.idx,
        separator: ki(new K({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof ye)
      return {
        type: "RepetitionWithSeparator",
        idx: t.idx,
        separator: ki(new K({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof q)
      return {
        type: "Repetition",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Te)
      return {
        type: "Alternation",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof K) {
      const n = {
        type: "Terminal",
        name: t.terminalType.name,
        label: _S(t.terminalType),
        idx: t.idx
      };
      Zi(t.label) && (n.terminalLabel = t.label);
      const r = t.terminalType.PATTERN;
      return t.terminalType.PATTERN && (n.pattern = ES(r) ? r.source : r), n;
    } else {
      if (t instanceof Bn)
        return {
          type: "Rule",
          name: t.name,
          orgText: t.orgText,
          definition: e(t.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
class jn {
  visit(e) {
    const n = e;
    switch (n.constructor) {
      case fe:
        return this.visitNonTerminal(n);
      case me:
        return this.visitAlternative(n);
      case se:
        return this.visitOption(n);
      case Se:
        return this.visitRepetitionMandatory(n);
      case Ie:
        return this.visitRepetitionMandatoryWithSeparator(n);
      case ye:
        return this.visitRepetitionWithSeparator(n);
      case q:
        return this.visitRepetition(n);
      case Te:
        return this.visitAlternation(n);
      case K:
        return this.visitTerminal(n);
      case Bn:
        return this.visitRule(n);
      /* c8 ignore next 2 */
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}
function NS(t) {
  return t instanceof me || t instanceof se || t instanceof q || t instanceof Se || t instanceof Ie || t instanceof ye || t instanceof K || t instanceof Bn;
}
function Qi(t, e = []) {
  return t instanceof se || t instanceof q || t instanceof ye ? !0 : t instanceof Te ? wS(t.definition, (r) => Qi(r, e)) : t instanceof fe && $S(e, t) ? !1 : t instanceof et ? (t instanceof fe && e.push(t), pS(t.definition, (r) => Qi(r, e))) : !1;
}
function bS(t) {
  return t instanceof Te;
}
function We(t) {
  if (t instanceof fe)
    return "SUBRULE";
  if (t instanceof se)
    return "OPTION";
  if (t instanceof Te)
    return "OR";
  if (t instanceof Se)
    return "AT_LEAST_ONE";
  if (t instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof ye)
    return "MANY_SEP";
  if (t instanceof q)
    return "MANY";
  if (t instanceof K)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class Hs {
  walk(e, n = []) {
    k(e.definition, (r, i) => {
      const s = ne(e.definition, i + 1);
      if (r instanceof fe)
        this.walkProdRef(r, s, n);
      else if (r instanceof K)
        this.walkTerminal(r, s, n);
      else if (r instanceof me)
        this.walkFlat(r, s, n);
      else if (r instanceof se)
        this.walkOption(r, s, n);
      else if (r instanceof Se)
        this.walkAtLeastOne(r, s, n);
      else if (r instanceof Ie)
        this.walkAtLeastOneSep(r, s, n);
      else if (r instanceof ye)
        this.walkManySep(r, s, n);
      else if (r instanceof q)
        this.walkMany(r, s, n);
      else if (r instanceof Te)
        this.walkOr(r, s, n);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, n, r) {
  }
  walkProdRef(e, n, r) {
  }
  walkFlat(e, n, r) {
    const i = n.concat(r);
    this.walk(e, i);
  }
  walkOption(e, n, r) {
    const i = n.concat(r);
    this.walk(e, i);
  }
  walkAtLeastOne(e, n, r) {
    const i = [
      new se({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, n, r) {
    const i = Lu(e, n, r);
    this.walk(e, i);
  }
  walkMany(e, n, r) {
    const i = [
      new se({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, i);
  }
  walkManySep(e, n, r) {
    const i = Lu(e, n, r);
    this.walk(e, i);
  }
  walkOr(e, n, r) {
    const i = n.concat(r);
    k(e.definition, (s) => {
      const a = new me({ definition: [s] });
      this.walk(a, i);
    });
  }
}
function Lu(t, e, n) {
  return [
    new se({
      definition: [
        new K({ terminalType: t.separator })
      ].concat(t.definition)
    })
  ].concat(e, n);
}
function Zr(t) {
  if (t instanceof fe)
    return Zr(t.referencedRule);
  if (t instanceof K)
    return LS(t);
  if (NS(t))
    return OS(t);
  if (bS(t))
    return PS(t);
  throw Error("non exhaustive match");
}
function OS(t) {
  let e = [];
  const n = t.definition;
  let r = 0, i = n.length > r, s, a = !0;
  for (; i && a; )
    s = n[r], a = Qi(s), e = e.concat(Zr(s)), r = r + 1, i = n.length > r;
  return tl(e);
}
function PS(t) {
  const e = w(t.definition, (n) => Zr(n));
  return tl(Ge(e));
}
function LS(t) {
  return [t.terminalType];
}
const eh = "_~IN~_";
class MS extends Hs {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, n, r) {
  }
  walkProdRef(e, n, r) {
    const i = FS(e.referencedRule, e.idx) + this.topProd.name, s = n.concat(r), a = new me({ definition: s }), o = Zr(a);
    this.follows[i] = o;
  }
}
function DS(t) {
  const e = {};
  return k(t, (n) => {
    const r = new MS(n).startWalking();
    ja(e, r);
  }), e;
}
function FS(t, e) {
  return t.name + e + eh;
}
let Ni = {};
const GS = new zf();
function Ws(t) {
  const e = t.toString();
  if (Ni.hasOwnProperty(e))
    return Ni[e];
  {
    const n = GS.pattern(e);
    return Ni[e] = n, n;
  }
}
function US() {
  Ni = {};
}
const th = "Complement Sets are not supported for first char optimization", es = `Unable to use "first char" lexer optimizations:
`;
function BS(t, e = !1) {
  try {
    const n = Ws(t);
    return Za(n.value, {}, n.flags.ignoreCase);
  } catch (n) {
    if (n.message === th)
      e && Cd(`${es}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), za(`${es}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function Za(t, e, n) {
  switch (t.type) {
    case "Disjunction":
      for (let i = 0; i < t.value.length; i++)
        Za(t.value[i], e, n);
      break;
    case "Alternative":
      const r = t.value;
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        switch (s.type) {
          case "EndAnchor":
          // A group back reference cannot affect potential starting char.
          // because if a back reference is the first production than automatically
          // the group being referenced has had to come BEFORE so its codes have already been added
          case "GroupBackReference":
          // assertions do not affect potential starting codes
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const a = s;
        switch (a.type) {
          case "Character":
            gi(a.value, e, n);
            break;
          case "Set":
            if (a.complement === !0)
              throw Error(th);
            k(a.value, (l) => {
              if (typeof l == "number")
                gi(l, e, n);
              else {
                const u = l;
                if (n === !0)
                  for (let c = u.from; c <= u.to; c++)
                    gi(c, e, n);
                else {
                  for (let c = u.from; c <= u.to && c < xr; c++)
                    gi(c, e, n);
                  if (u.to >= xr) {
                    const c = u.from >= xr ? u.from : xr, f = u.to, d = It(c), h = It(f);
                    for (let m = d; m <= h; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            Za(a.value, e, n);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a.type === "Group" && Qa(a) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          a.type !== "Group" && o === !1
        )
          break;
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return Z(e);
}
function gi(t, e, n) {
  const r = It(t);
  e[r] = r, n === !0 && jS(t, e);
}
function jS(t, e) {
  const n = String.fromCharCode(t), r = n.toUpperCase();
  if (r !== n) {
    const i = It(r.charCodeAt(0));
    e[i] = i;
  } else {
    const i = n.toLowerCase();
    if (i !== n) {
      const s = It(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function Mu(t, e) {
  return Ln(t.value, (n) => {
    if (typeof n == "number")
      return ge(e, n);
    {
      const r = n;
      return Ln(e, (i) => r.from <= i && i <= r.to) !== void 0;
    }
  });
}
function Qa(t) {
  const e = t.quantifier;
  return e && e.atLeast === 0 ? !0 : t.value ? M(t.value) ? qe(t.value, Qa) : Qa(t.value) : !1;
}
class KS extends $s {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = !1;
  }
  visitChildren(e) {
    if (this.found !== !0) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    ge(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? Mu(e, this.targetCharCodes) === void 0 && (this.found = !0) : Mu(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function ul(t, e) {
  if (e instanceof RegExp) {
    const n = Ws(e), r = new KS(t);
    return r.visit(n), r.found;
  } else
    return Ln(e, (n) => ge(t, n.charCodeAt(0))) !== void 0;
}
const qt = "PATTERN", Er = "defaultMode", yi = "modes";
let nh = typeof new RegExp("(?:)").sticky == "boolean";
function HS(t, e) {
  e = el(e, {
    useSticky: nh,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (R, $) => $()
  });
  const n = e.tracer;
  n("initCharCodeToOptimizedIndexMap", () => {
    hI();
  });
  let r;
  n("Reject Lexer.NA", () => {
    r = Os(t, (R) => R[qt] === he.NA);
  });
  let i = !1, s;
  n("Transform Patterns", () => {
    i = !1, s = w(r, (R) => {
      const $ = R[qt];
      if (Et($)) {
        const x = $.source;
        return x.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        x !== "^" && x !== "$" && x !== "." && !$.ignoreCase ? x : x.length === 2 && x[0] === "\\" && // not a meta character
        !ge([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], x[1]) ? x[1] : e.useSticky ? Fu($) : Du($);
      } else {
        if (ht($))
          return i = !0, { exec: $ };
        if (typeof $ == "object")
          return i = !0, $;
        if (typeof $ == "string") {
          if ($.length === 1)
            return $;
          {
            const x = $.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), O = new RegExp(x);
            return e.useSticky ? Fu(O) : Du(O);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a, o, l, u, c;
  n("misc mapping", () => {
    a = w(r, (R) => R.tokenTypeIdx), o = w(r, (R) => {
      const $ = R.GROUP;
      if ($ !== he.SKIPPED) {
        if (je($))
          return $;
        if (ct($))
          return !1;
        throw Error("non exhaustive match");
      }
    }), l = w(r, (R) => {
      const $ = R.LONGER_ALT;
      if ($)
        return M($) ? w($, (O) => uu(r, O)) : [uu(r, $)];
    }), u = w(r, (R) => R.PUSH_MODE), c = w(r, (R) => _(R, "POP_MODE"));
  });
  let f;
  n("Line Terminator Handling", () => {
    const R = sh(e.lineTerminatorCharacters);
    f = w(r, ($) => !1), e.positionTracking !== "onlyOffset" && (f = w(r, ($) => _($, "LINE_BREAKS") ? !!$.LINE_BREAKS : ih($, R) === !1 && ul(R, $.PATTERN)));
  });
  let d, h, m, g;
  n("Misc Mapping #2", () => {
    d = w(r, rh), h = w(s, cI), m = xe(r, (R, $) => {
      const x = $.GROUP;
      return je(x) && x !== he.SKIPPED && (R[x] = []), R;
    }, {}), g = w(s, (R, $) => ({
      pattern: s[$],
      longerAlt: l[$],
      canLineTerminator: f[$],
      isCustom: d[$],
      short: h[$],
      group: o[$],
      push: u[$],
      pop: c[$],
      tokenTypeIdx: a[$],
      tokenType: r[$]
    }));
  });
  let v = !0, y = [];
  return e.safeMode || n("First Char Optimization", () => {
    y = xe(r, (R, $, x) => {
      if (typeof $.PATTERN == "string") {
        const O = $.PATTERN.charCodeAt(0), oe = It(O);
        ga(R, oe, g[x]);
      } else if (M($.START_CHARS_HINT)) {
        let O;
        k($.START_CHARS_HINT, (oe) => {
          const Me = typeof oe == "string" ? oe.charCodeAt(0) : oe, ve = It(Me);
          O !== ve && (O = ve, ga(R, ve, g[x]));
        });
      } else if (Et($.PATTERN))
        if ($.PATTERN.unicode)
          v = !1, e.ensureOptimizations && za(`${es}	Unable to analyze < ${$.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const O = BS($.PATTERN, e.ensureOptimizations);
          U(O) && (v = !1), k(O, (oe) => {
            ga(R, oe, g[x]);
          });
        }
      else
        e.ensureOptimizations && za(`${es}	TokenType: <${$.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), v = !1;
      return R;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: y,
    hasCustom: i,
    canBeOptimized: v
  };
}
function WS(t, e) {
  let n = [];
  const r = VS(t);
  n = n.concat(r.errors);
  const i = qS(r.valid), s = i.valid;
  return n = n.concat(i.errors), n = n.concat(zS(s)), n = n.concat(nI(s)), n = n.concat(rI(s, e)), n = n.concat(iI(s)), n;
}
function zS(t) {
  let e = [];
  const n = Le(t, (r) => Et(r[qt]));
  return e = e.concat(XS(n)), e = e.concat(QS(n)), e = e.concat(eI(n)), e = e.concat(tI(n)), e = e.concat(JS(n)), e;
}
function VS(t) {
  const e = Le(t, (i) => !_(i, qt)), n = w(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: Y.MISSING_PATTERN,
    tokenTypes: [i]
  })), r = bs(t, e);
  return { errors: n, valid: r };
}
function qS(t) {
  const e = Le(t, (i) => {
    const s = i[qt];
    return !Et(s) && !ht(s) && !_(s, "exec") && !je(s);
  }), n = w(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: Y.INVALID_PATTERN,
    tokenTypes: [i]
  })), r = bs(t, e);
  return { errors: n, valid: r };
}
const YS = /[^\\][$]/;
function XS(t) {
  class e extends $s {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(s) {
      this.found = !0;
    }
  }
  const n = Le(t, (i) => {
    const s = i.PATTERN;
    try {
      const a = Ws(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return YS.test(s.source);
    }
  });
  return w(n, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Y.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function JS(t) {
  const e = Le(t, (r) => r.PATTERN.test(""));
  return w(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: Y.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const ZS = /[^\\[][\^]|^\^/;
function QS(t) {
  class e extends $s {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(s) {
      this.found = !0;
    }
  }
  const n = Le(t, (i) => {
    const s = i.PATTERN;
    try {
      const a = Ws(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return ZS.test(s.source);
    }
  });
  return w(n, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Y.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function eI(t) {
  const e = Le(t, (r) => {
    const i = r[qt];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return w(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: Y.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function tI(t) {
  const e = [];
  let n = w(t, (s) => xe(t, (a, o) => (s.PATTERN.source === o.PATTERN.source && !ge(e, o) && o.PATTERN !== he.NA && (e.push(o), a.push(o)), a), []));
  n = Yr(n);
  const r = Le(n, (s) => s.length > 1);
  return w(r, (s) => {
    const a = w(s, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${Be(s).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,
      type: Y.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
function nI(t) {
  const e = Le(t, (r) => {
    if (!_(r, "GROUP"))
      return !1;
    const i = r.GROUP;
    return i !== he.SKIPPED && i !== he.NA && !je(i);
  });
  return w(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: Y.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function rI(t, e) {
  const n = Le(t, (i) => i.PUSH_MODE !== void 0 && !ge(e, i.PUSH_MODE));
  return w(n, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: Y.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function iI(t) {
  const e = [], n = xe(t, (r, i, s) => {
    const a = i.PATTERN;
    return a === he.NA || (je(a) ? r.push({ str: a, idx: s, tokenType: i }) : Et(a) && aI(a) && r.push({ str: a.source, idx: s, tokenType: i })), r;
  }, []);
  return k(t, (r, i) => {
    k(n, ({ str: s, idx: a, tokenType: o }) => {
      if (i < a && sI(s, r.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: Y.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function sI(t, e) {
  if (Et(e)) {
    const n = e.exec(t);
    return n !== null && n.index === 0;
  } else {
    if (ht(e))
      return e(t, 0, [], {});
    if (_(e, "exec"))
      return e.exec(t, 0, [], {});
    if (typeof e == "string")
      return e === t;
    throw Error("non exhaustive match");
  }
}
function aI(t) {
  return Ln([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (n) => t.source.indexOf(n) !== -1) === void 0;
}
function Du(t) {
  const e = t.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${t.source})`, e);
}
function Fu(t) {
  const e = t.ignoreCase ? "iy" : "y";
  return new RegExp(`${t.source}`, e);
}
function oI(t, e, n) {
  const r = [];
  return _(t, Er) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Er + `> property in its definition
`,
    type: Y.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), _(t, yi) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + yi + `> property in its definition
`,
    type: Y.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), _(t, yi) && _(t, Er) && !_(t.modes, t.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${Er}: <${t.defaultMode}>which does not exist
`,
    type: Y.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), _(t, yi) && k(t.modes, (i, s) => {
    k(i, (a, o) => {
      if (ct(a))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: Y.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (_(a, "LONGER_ALT")) {
        const l = M(a.LONGER_ALT) ? a.LONGER_ALT : [a.LONGER_ALT];
        k(l, (u) => {
          !ct(u) && !ge(i, u) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${a.name}> outside of mode <${s}>
`,
            type: Y.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function lI(t, e, n) {
  const r = [];
  let i = !1;
  const s = Yr(Ge(Z(t.modes))), a = Os(s, (l) => l[qt] === he.NA), o = sh(n);
  return e && k(a, (l) => {
    const u = ih(l, o);
    if (u !== !1) {
      const f = {
        message: dI(l, u),
        type: u.issue,
        tokenType: l
      };
      r.push(f);
    } else
      _(l, "LINE_BREAKS") ? l.LINE_BREAKS === !0 && (i = !0) : ul(o, l.PATTERN) && (i = !0);
  }), e && !i && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: Y.NO_LINE_BREAKS_FLAGS
  }), r;
}
function uI(t) {
  const e = {}, n = Pe(t);
  return k(n, (r) => {
    const i = t[r];
    if (M(i))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function rh(t) {
  const e = t.PATTERN;
  if (Et(e))
    return !1;
  if (ht(e))
    return !0;
  if (_(e, "exec"))
    return !0;
  if (je(e))
    return !1;
  throw Error("non exhaustive match");
}
function cI(t) {
  return je(t) && t.length === 1 ? t.charCodeAt(0) : !1;
}
const fI = {
  // implements /\n|\r\n?/g.test
  test: function(t) {
    const e = t.length;
    for (let n = this.lastIndex; n < e; n++) {
      const r = t.charCodeAt(n);
      if (r === 10)
        return this.lastIndex = n + 1, !0;
      if (r === 13)
        return t.charCodeAt(n + 1) === 10 ? this.lastIndex = n + 2 : this.lastIndex = n + 1, !0;
    }
    return !1;
  },
  lastIndex: 0
};
function ih(t, e) {
  if (_(t, "LINE_BREAKS"))
    return !1;
  if (Et(t.PATTERN)) {
    try {
      ul(e, t.PATTERN);
    } catch (n) {
      return {
        issue: Y.IDENTIFY_TERMINATOR,
        errMsg: n.message
      };
    }
    return !1;
  } else {
    if (je(t.PATTERN))
      return !1;
    if (rh(t))
      return { issue: Y.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function dI(t, e) {
  if (e.issue === Y.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === Y.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function sh(t) {
  return w(t, (n) => je(n) ? n.charCodeAt(0) : n);
}
function ga(t, e, n) {
  t[e] === void 0 ? t[e] = [n] : t[e].push(n);
}
const xr = 256;
let bi = [];
function It(t) {
  return t < xr ? t : bi[t];
}
function hI() {
  if (U(bi)) {
    bi = new Array(65536);
    for (let t = 0; t < 65536; t++)
      bi[t] = t > 255 ? 255 + ~~(t / 255) : t;
  }
}
function Qr(t, e) {
  const n = t.tokenTypeIdx;
  return n === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[n] === !0;
}
function ts(t, e) {
  return t.tokenTypeIdx === e.tokenTypeIdx;
}
let Gu = 1;
const ah = {};
function ei(t) {
  const e = pI(t);
  mI(e), yI(e), gI(e), k(e, (n) => {
    n.isParent = n.categoryMatches.length > 0;
  });
}
function pI(t) {
  let e = ae(t), n = t, r = !0;
  for (; r; ) {
    n = Yr(Ge(w(n, (s) => s.CATEGORIES)));
    const i = bs(n, e);
    e = e.concat(i), U(i) ? r = !1 : n = i;
  }
  return e;
}
function mI(t) {
  k(t, (e) => {
    lh(e) || (ah[Gu] = e, e.tokenTypeIdx = Gu++), Uu(e) && !M(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), Uu(e) || (e.CATEGORIES = []), TI(e) || (e.categoryMatches = []), vI(e) || (e.categoryMatchesMap = {});
  });
}
function gI(t) {
  k(t, (e) => {
    e.categoryMatches = [], k(e.categoryMatchesMap, (n, r) => {
      e.categoryMatches.push(ah[r].tokenTypeIdx);
    });
  });
}
function yI(t) {
  k(t, (e) => {
    oh([], e);
  });
}
function oh(t, e) {
  k(t, (n) => {
    e.categoryMatchesMap[n.tokenTypeIdx] = !0;
  }), k(e.CATEGORIES, (n) => {
    const r = t.concat(e);
    ge(r, n) || oh(r, n);
  });
}
function lh(t) {
  return _(t, "tokenTypeIdx");
}
function Uu(t) {
  return _(t, "CATEGORIES");
}
function TI(t) {
  return _(t, "categoryMatches");
}
function vI(t) {
  return _(t, "categoryMatchesMap");
}
function $I(t) {
  return _(t, "tokenTypeIdx");
}
const eo = {
  buildUnableToPopLexerModeMessage(t) {
    return `Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(t, e, n, r, i) {
    return `unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`;
  }
};
var Y;
(function(t) {
  t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(Y || (Y = {}));
const Sr = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: eo,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(Sr);
class he {
  constructor(e, n = Sr) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const a = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a}--> <${i}>`);
        const { time: o, value: l } = kd(s), u = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${a}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof n == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = ja({}, Sr, n);
    const r = this.config.traceInitPerf;
    r === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Sr.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = fI;
        else if (this.config.lineTerminatorCharacters === Sr.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (n.safeMode && n.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), M(e) ? i = {
          modes: { defaultMode: ae(e) },
          defaultMode: Er
        } : (s = !1, i = ae(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(oI(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(lI(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, k(i.modes, (o, l) => {
        i.modes[l] = Os(o, (u) => ct(u));
      });
      const a = Pe(i.modes);
      if (k(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(WS(o, a));
          }), U(this.lexerDefinitionErrors)) {
            ei(o);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = HS(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: n.positionTracking,
                ensureOptimizations: n.ensureOptimizations,
                safeMode: n.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = u.charCodeToPatternIdxToConfig, this.emptyGroups = ja({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !U(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = w(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      k(this.lexerDefinitionWarning, (o) => {
        Cd(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (nh ? (this.chopInput = bn, this.match = this.matchWithTest) : (this.updateLastIndex = J, this.match = this.matchWithExec), s && (this.handleModes = J), this.trackStartLines === !1 && (this.computeNewColumn = bn), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = J), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = xe(this.canModeBeOptimized, (l, u, c) => (u === !1 && l.push(c), l), []);
        if (n.ensureOptimizations && !U(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        US();
      }), this.TRACE_INIT("toFastProperties", () => {
        Nd(this);
      });
    });
  }
  tokenize(e, n = this.defaultMode) {
    if (!U(this.lexerDefinitionErrors)) {
      const i = w(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, n);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, n) {
    let r, i, s, a, o, l, u, c, f, d, h, m, g, v, y;
    const R = e, $ = R.length;
    let x = 0, O = 0;
    const oe = this.hasCustom ? 0 : Math.floor(e.length / 10), Me = new Array(oe), ve = [];
    let He = this.trackStartLines ? 1 : void 0, we = this.trackStartLines ? 1 : void 0;
    const E = uI(this.emptyGroups), T = this.trackStartLines, I = this.config.lineTerminatorsPattern;
    let S = 0, P = [], b = [];
    const N = [], $e = [];
    Object.freeze($e);
    let Q;
    function V() {
      return P;
    }
    function Ft(le) {
      const _e = It(le), ln = b[_e];
      return ln === void 0 ? $e : ln;
    }
    const wp = (le) => {
      if (N.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      le.tokenType.PUSH_MODE === void 0) {
        const _e = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(le);
        ve.push({
          offset: le.startOffset,
          line: le.startLine,
          column: le.startColumn,
          length: le.image.length,
          message: _e
        });
      } else {
        N.pop();
        const _e = Pn(N);
        P = this.patternIdxToConfig[_e], b = this.charCodeToPatternIdxToConfig[_e], S = P.length;
        const ln = this.canModeBeOptimized[_e] && this.config.safeMode === !1;
        b && ln ? Q = Ft : Q = V;
      }
    };
    function El(le) {
      N.push(le), b = this.charCodeToPatternIdxToConfig[le], P = this.patternIdxToConfig[le], S = P.length, S = P.length;
      const _e = this.canModeBeOptimized[le] && this.config.safeMode === !1;
      b && _e ? Q = Ft : Q = V;
    }
    El.call(this, n);
    let De;
    const xl = this.config.recoveryEnabled;
    for (; x < $; ) {
      l = null;
      const le = R.charCodeAt(x), _e = Q(le), ln = _e.length;
      for (r = 0; r < ln; r++) {
        De = _e[r];
        const Re = De.pattern;
        u = null;
        const tt = De.short;
        if (tt !== !1 ? le === tt && (l = Re) : De.isCustom === !0 ? (y = Re.exec(R, x, Me, E), y !== null ? (l = y[0], y.payload !== void 0 && (u = y.payload)) : l = null) : (this.updateLastIndex(Re, x), l = this.match(Re, e, x)), l !== null) {
          if (o = De.longerAlt, o !== void 0) {
            const vt = o.length;
            for (s = 0; s < vt; s++) {
              const nt = P[o[s]], Gt = nt.pattern;
              if (c = null, nt.isCustom === !0 ? (y = Gt.exec(R, x, Me, E), y !== null ? (a = y[0], y.payload !== void 0 && (c = y.payload)) : a = null) : (this.updateLastIndex(Gt, x), a = this.match(Gt, e, x)), a && a.length > l.length) {
                l = a, u = c, De = nt;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (f = l.length, d = De.group, d !== void 0 && (h = De.tokenTypeIdx, m = this.createTokenInstance(l, x, h, De.tokenType, He, we, f), this.handlePayload(m, u), d === !1 ? O = this.addToken(Me, O, m) : E[d].push(m)), e = this.chopInput(e, f), x = x + f, we = this.computeNewColumn(we, f), T === !0 && De.canLineTerminator === !0) {
          let Re = 0, tt, vt;
          I.lastIndex = 0;
          do
            tt = I.test(l), tt === !0 && (vt = I.lastIndex - 1, Re++);
          while (tt === !0);
          Re !== 0 && (He = He + Re, we = f - vt, this.updateTokenEndLineColumnLocation(m, d, vt, Re, He, we, f));
        }
        this.handleModes(De, wp, El, m);
      } else {
        const Re = x, tt = He, vt = we;
        let nt = xl === !1;
        for (; nt === !1 && x < $; )
          for (e = this.chopInput(e, 1), x++, i = 0; i < S; i++) {
            const Gt = P[i], ea = Gt.pattern, Sl = Gt.short;
            if (Sl !== !1 ? R.charCodeAt(x) === Sl && (nt = !0) : Gt.isCustom === !0 ? nt = ea.exec(R, x, Me, E) !== null : (this.updateLastIndex(ea, x), nt = ea.exec(e) !== null), nt === !0)
              break;
          }
        if (g = x - Re, we = this.computeNewColumn(we, g), v = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(R, Re, g, tt, vt), ve.push({
          offset: Re,
          line: tt,
          column: vt,
          length: g,
          message: v
        }), xl === !1)
          break;
      }
    }
    return this.hasCustom || (Me.length = O), {
      tokens: Me,
      groups: E,
      errors: ve
    };
  }
  handleModes(e, n, r, i) {
    if (e.pop === !0) {
      const s = e.push;
      n(i), s !== void 0 && r.call(this, s);
    } else e.push !== void 0 && r.call(this, e.push);
  }
  chopInput(e, n) {
    return e.substring(n);
  }
  updateLastIndex(e, n) {
    e.lastIndex = n;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, n, r, i, s, a, o) {
    let l, u;
    n !== void 0 && (l = r === o - 1, u = l ? -1 : 0, i === 1 && l === !0 || (e.endLine = s + u, e.endColumn = a - 1 + -u));
  }
  computeNewColumn(e, n) {
    return e + n;
  }
  createOffsetOnlyToken(e, n, r, i) {
    return {
      image: e,
      startOffset: n,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createStartOnlyToken(e, n, r, i, s, a) {
    return {
      image: e,
      startOffset: n,
      startLine: s,
      startColumn: a,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createFullToken(e, n, r, i, s, a, o) {
    return {
      image: e,
      startOffset: n,
      endOffset: n + o - 1,
      startLine: s,
      endLine: s,
      startColumn: a,
      endColumn: a + o - 1,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  addTokenUsingPush(e, n, r) {
    return e.push(r), n;
  }
  addTokenUsingMemberAccess(e, n, r) {
    return e[n] = r, n++, n;
  }
  handlePayloadNoCustom(e, n) {
  }
  handlePayloadWithCustom(e, n) {
    n !== null && (e.payload = n);
  }
  matchWithTest(e, n, r) {
    return e.test(n) === !0 ? n.substring(r, e.lastIndex) : null;
  }
  matchWithExec(e, n) {
    const r = e.exec(n);
    return r !== null ? r[0] : null;
  }
}
he.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
he.NA = /NOT_APPLICABLE/;
function pn(t) {
  return uh(t) ? t.LABEL : t.name;
}
function uh(t) {
  return je(t.LABEL) && t.LABEL !== "";
}
const RI = "parent", Bu = "categories", ju = "label", Ku = "group", Hu = "push_mode", Wu = "pop_mode", zu = "longer_alt", Vu = "line_breaks", qu = "start_chars_hint";
function ch(t) {
  return AI(t);
}
function AI(t) {
  const e = t.pattern, n = {};
  if (n.name = t.name, ct(e) || (n.PATTERN = e), _(t, RI))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return _(t, Bu) && (n.CATEGORIES = t[Bu]), ei([n]), _(t, ju) && (n.LABEL = t[ju]), _(t, Ku) && (n.GROUP = t[Ku]), _(t, Wu) && (n.POP_MODE = t[Wu]), _(t, Hu) && (n.PUSH_MODE = t[Hu]), _(t, zu) && (n.LONGER_ALT = t[zu]), _(t, Vu) && (n.LINE_BREAKS = t[Vu]), _(t, qu) && (n.START_CHARS_HINT = t[qu]), n;
}
const wt = ch({ name: "EOF", pattern: he.NA });
ei([wt]);
function cl(t, e, n, r, i, s, a, o) {
  return {
    image: e,
    startOffset: n,
    endOffset: r,
    startLine: i,
    endLine: s,
    startColumn: a,
    endColumn: o,
    tokenTypeIdx: t.tokenTypeIdx,
    tokenType: t
  };
}
function fh(t, e) {
  return Qr(t, e);
}
const fn = {
  buildMismatchTokenMessage({ expected: t, actual: e, previous: n, ruleName: r }) {
    return `Expecting ${uh(t) ? `--> ${pn(t)} <--` : `token of type --> ${t.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + t.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: t, actual: e, previous: n, customUserDescription: r, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + Be(e).image + "'";
    if (r)
      return s + r + o;
    {
      const l = xe(t, (d, h) => d.concat(h), []), u = w(l, (d) => `[${w(d, (h) => pn(h)).join(", ")}]`), f = `one of these possible Token sequences:
${w(u, (d, h) => `  ${h + 1}. ${d}`).join(`
`)}`;
      return s + f + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: t, actual: e, customUserDescription: n, ruleName: r }) {
    const i = "Expecting: ", a = `
but found: '` + Be(e).image + "'";
    if (n)
      return i + n + a;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${w(t, (u) => `[${w(u, (c) => pn(c)).join(",")}]`).join(" ,")}>`;
      return i + l + a;
    }
  }
};
Object.freeze(fn);
const EI = {
  buildRuleNotFoundError(t, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + t.name + "<-";
  }
}, jt = {
  buildDuplicateFoundError(t, e) {
    function n(c) {
      return c instanceof K ? c.terminalType.name : c instanceof fe ? c.nonTerminalName : "";
    }
    const r = t.name, i = Be(e), s = i.idx, a = We(i), o = n(i), l = s > 0;
    let u = `->${a}${l ? s : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return u = u.replace(/[ \t]+/g, " "), u = u.replace(/\s\s+/g, `
`), u;
  },
  buildNamespaceConflictError(t) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(t) {
    const e = w(t.prefixPath, (i) => pn(i)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
    return `Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(t) {
    const e = w(t.prefixPath, (i) => pn(i)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
    let r = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
  },
  buildEmptyRepetitionError(t) {
    let e = We(t.repetition);
    return t.repetition.idx !== 0 && (e += t.repetition.idx), `The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(t) {
    return "deprecated";
  },
  buildEmptyAlternationError(t) {
    return `Ambiguous empty alternative: <${t.emptyChoiceIdx + 1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(t) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(t) {
    const e = t.topLevelRule.name, n = w(t.leftRecursionPath, (s) => s.name), r = `${e} --> ${n.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(t) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(t) {
    let e;
    return t.topLevelRule instanceof Bn ? e = t.topLevelRule.name : e = t.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`;
  }
};
function xI(t, e) {
  const n = new SI(t, e);
  return n.resolveRefs(), n.errors;
}
class SI extends jn {
  constructor(e, n) {
    super(), this.nameToTopRule = e, this.errMsgProvider = n, this.errors = [];
  }
  resolveRefs() {
    k(Z(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const n = this.nameToTopRule[e.nonTerminalName];
    if (n)
      e.referencedRule = n;
    else {
      const r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: r,
        type: de.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class II extends Hs {
  constructor(e, n) {
    super(), this.topProd = e, this.path = n, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = ae(this.path.ruleStack).reverse(), this.occurrenceStack = ae(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, n = []) {
    this.found || super.walk(e, n);
  }
  walkProdRef(e, n, r) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = n.concat(r);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    U(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class wI extends II {
  constructor(e, n) {
    super(e, n), this.path = n, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, n, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = n.concat(r), s = new me({ definition: i });
      this.possibleTokTypes = Zr(s), this.found = !0;
    }
  }
}
class zs extends Hs {
  constructor(e, n) {
    super(), this.topRule = e, this.occurrence = n, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class _I extends zs {
  walkMany(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, n, r);
  }
}
class Yu extends zs {
  walkManySep(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, n, r);
  }
}
class CI extends zs {
  walkAtLeastOne(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, n, r);
  }
}
class Xu extends zs {
  walkAtLeastOneSep(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = Be(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof K && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, n, r);
  }
}
function to(t, e, n = []) {
  n = ae(n);
  let r = [], i = 0;
  function s(o) {
    return o.concat(ne(t, i + 1));
  }
  function a(o) {
    const l = to(s(o), e, n);
    return r.concat(l);
  }
  for (; n.length < e && i < t.length; ) {
    const o = t[i];
    if (o instanceof me)
      return a(o.definition);
    if (o instanceof fe)
      return a(o.definition);
    if (o instanceof se)
      r = a(o.definition);
    else if (o instanceof Se) {
      const l = o.definition.concat([
        new q({
          definition: o.definition
        })
      ]);
      return a(l);
    } else if (o instanceof Ie) {
      const l = [
        new me({ definition: o.definition }),
        new q({
          definition: [new K({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a(l);
    } else if (o instanceof ye) {
      const l = o.definition.concat([
        new q({
          definition: [new K({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a(l);
    } else if (o instanceof q) {
      const l = o.definition.concat([
        new q({
          definition: o.definition
        })
      ]);
      r = a(l);
    } else {
      if (o instanceof Te)
        return k(o.definition, (l) => {
          U(l.definition) === !1 && (r = a(l.definition));
        }), r;
      if (o instanceof K)
        n.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return r.push({
    partialPath: n,
    suffixDef: ne(t, i)
  }), r;
}
function dh(t, e, n, r) {
  const i = "EXIT_NONE_TERMINAL", s = [i], a = "EXIT_ALTERNATIVE";
  let o = !1;
  const l = e.length, u = l - r - 1, c = [], f = [];
  for (f.push({
    idx: -1,
    def: t,
    ruleStack: [],
    occurrenceStack: []
  }); !U(f); ) {
    const d = f.pop();
    if (d === a) {
      o && Pn(f).idx <= u && f.pop();
      continue;
    }
    const h = d.def, m = d.idx, g = d.ruleStack, v = d.occurrenceStack;
    if (U(h))
      continue;
    const y = h[0];
    if (y === i) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: Fr(g),
        occurrenceStack: Fr(v)
      };
      f.push(R);
    } else if (y instanceof K)
      if (m < l - 1) {
        const R = m + 1, $ = e[R];
        if (n($, y.terminalType)) {
          const x = {
            idx: R,
            def: ne(h),
            ruleStack: g,
            occurrenceStack: v
          };
          f.push(x);
        }
      } else if (m === l - 1)
        c.push({
          nextTokenType: y.terminalType,
          nextTokenOccurrence: y.idx,
          ruleStack: g,
          occurrenceStack: v
        }), o = !0;
      else
        throw Error("non exhaustive match");
    else if (y instanceof fe) {
      const R = ae(g);
      R.push(y.nonTerminalName);
      const $ = ae(v);
      $.push(y.idx);
      const x = {
        idx: m,
        def: y.definition.concat(s, ne(h)),
        ruleStack: R,
        occurrenceStack: $
      };
      f.push(x);
    } else if (y instanceof se) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: g,
        occurrenceStack: v
      };
      f.push(R), f.push(a);
      const $ = {
        idx: m,
        def: y.definition.concat(ne(h)),
        ruleStack: g,
        occurrenceStack: v
      };
      f.push($);
    } else if (y instanceof Se) {
      const R = new q({
        definition: y.definition,
        idx: y.idx
      }), $ = y.definition.concat([R], ne(h)), x = {
        idx: m,
        def: $,
        ruleStack: g,
        occurrenceStack: v
      };
      f.push(x);
    } else if (y instanceof Ie) {
      const R = new K({
        terminalType: y.separator
      }), $ = new q({
        definition: [R].concat(y.definition),
        idx: y.idx
      }), x = y.definition.concat([$], ne(h)), O = {
        idx: m,
        def: x,
        ruleStack: g,
        occurrenceStack: v
      };
      f.push(O);
    } else if (y instanceof ye) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: g,
        occurrenceStack: v
      };
      f.push(R), f.push(a);
      const $ = new K({
        terminalType: y.separator
      }), x = new q({
        definition: [$].concat(y.definition),
        idx: y.idx
      }), O = y.definition.concat([x], ne(h)), oe = {
        idx: m,
        def: O,
        ruleStack: g,
        occurrenceStack: v
      };
      f.push(oe);
    } else if (y instanceof q) {
      const R = {
        idx: m,
        def: ne(h),
        ruleStack: g,
        occurrenceStack: v
      };
      f.push(R), f.push(a);
      const $ = new q({
        definition: y.definition,
        idx: y.idx
      }), x = y.definition.concat([$], ne(h)), O = {
        idx: m,
        def: x,
        ruleStack: g,
        occurrenceStack: v
      };
      f.push(O);
    } else if (y instanceof Te)
      for (let R = y.definition.length - 1; R >= 0; R--) {
        const $ = y.definition[R], x = {
          idx: m,
          def: $.definition.concat(ne(h)),
          ruleStack: g,
          occurrenceStack: v
        };
        f.push(x), f.push(a);
      }
    else if (y instanceof me)
      f.push({
        idx: m,
        def: y.definition.concat(ne(h)),
        ruleStack: g,
        occurrenceStack: v
      });
    else if (y instanceof Bn)
      f.push(kI(y, m, g, v));
    else
      throw Error("non exhaustive match");
  }
  return c;
}
function kI(t, e, n, r) {
  const i = ae(n);
  i.push(t.name);
  const s = ae(r);
  return s.push(1), {
    idx: e,
    def: t.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var W;
(function(t) {
  t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
})(W || (W = {}));
function fl(t) {
  if (t instanceof se || t === "Option")
    return W.OPTION;
  if (t instanceof q || t === "Repetition")
    return W.REPETITION;
  if (t instanceof Se || t === "RepetitionMandatory")
    return W.REPETITION_MANDATORY;
  if (t instanceof Ie || t === "RepetitionMandatoryWithSeparator")
    return W.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (t instanceof ye || t === "RepetitionWithSeparator")
    return W.REPETITION_WITH_SEPARATOR;
  if (t instanceof Te || t === "Alternation")
    return W.ALTERNATION;
  throw Error("non exhaustive match");
}
function Ju(t) {
  const { occurrence: e, rule: n, prodType: r, maxLookahead: i } = t, s = fl(r);
  return s === W.ALTERNATION ? Vs(e, n, i) : qs(e, n, s, i);
}
function NI(t, e, n, r, i, s) {
  const a = Vs(t, e, n), o = mh(a) ? ts : Qr;
  return s(a, r, o, i);
}
function bI(t, e, n, r, i, s) {
  const a = qs(t, e, i, n), o = mh(a) ? ts : Qr;
  return s(a[0], o, r);
}
function OI(t, e, n, r) {
  const i = t.length, s = qe(t, (a) => qe(a, (o) => o.length === 1));
  if (e)
    return function(a) {
      const o = w(a, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const u = t[l], c = u.length, f = o[l];
        if (!(f !== void 0 && f.call(this) === !1))
          e: for (let d = 0; d < c; d++) {
            const h = u[d], m = h.length;
            for (let g = 0; g < m; g++) {
              const v = this.LA(g + 1);
              if (n(v, h[g]) === !1)
                continue e;
            }
            return l;
          }
      }
    };
  if (s && !r) {
    const a = w(t, (l) => Ge(l)), o = xe(a, (l, u, c) => (k(u, (f) => {
      _(l, f.tokenTypeIdx) || (l[f.tokenTypeIdx] = c), k(f.categoryMatches, (d) => {
        _(l, d) || (l[d] = c);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a = 0; a < i; a++) {
        const o = t[a], l = o.length;
        e: for (let u = 0; u < l; u++) {
          const c = o[u], f = c.length;
          for (let d = 0; d < f; d++) {
            const h = this.LA(d + 1);
            if (n(h, c[d]) === !1)
              continue e;
          }
          return a;
        }
      }
    };
}
function PI(t, e, n) {
  const r = qe(t, (s) => s.length === 1), i = t.length;
  if (r && !n) {
    const s = Ge(t);
    if (s.length === 1 && U(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a = xe(s, (o, l, u) => (o[l.tokenTypeIdx] = !0, k(l.categoryMatches, (c) => {
        o[c] = !0;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a[o.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let s = 0; s < i; s++) {
        const a = t[s], o = a.length;
        for (let l = 0; l < o; l++) {
          const u = this.LA(l + 1);
          if (e(u, a[l]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
class LI extends Hs {
  constructor(e, n, r) {
    super(), this.topProd = e, this.targetOccurrence = n, this.targetProdType = r;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, n, r, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === n ? (this.restDef = r.concat(i), !0) : !1;
  }
  walkOption(e, n, r) {
    this.checkIsTarget(e, W.OPTION, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOne(e, n, r) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOneSep(e, n, r) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
  walkMany(e, n, r) {
    this.checkIsTarget(e, W.REPETITION, n, r) || super.walkOption(e, n, r);
  }
  walkManySep(e, n, r) {
    this.checkIsTarget(e, W.REPETITION_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
}
class hh extends jn {
  constructor(e, n, r) {
    super(), this.targetOccurrence = e, this.targetProdType = n, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, n) {
    e.idx === this.targetOccurrence && this.targetProdType === n && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, W.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, W.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, W.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, W.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, W.ALTERNATION);
  }
}
function Zu(t) {
  const e = new Array(t);
  for (let n = 0; n < t; n++)
    e[n] = [];
  return e;
}
function ya(t) {
  let e = [""];
  for (let n = 0; n < t.length; n++) {
    const r = t[n], i = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      i.push(a + "_" + r.tokenTypeIdx);
      for (let o = 0; o < r.categoryMatches.length; o++) {
        const l = "_" + r.categoryMatches[o];
        i.push(a + l);
      }
    }
    e = i;
  }
  return e;
}
function MI(t, e, n) {
  for (let r = 0; r < t.length; r++) {
    if (r === n)
      continue;
    const i = t[r];
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      if (i[a] === !0)
        return !1;
    }
  }
  return !0;
}
function ph(t, e) {
  const n = w(t, (a) => to([a], 1)), r = Zu(n.length), i = w(n, (a) => {
    const o = {};
    return k(a, (l) => {
      const u = ya(l.partialPath);
      k(u, (c) => {
        o[c] = !0;
      });
    }), o;
  });
  let s = n;
  for (let a = 1; a <= e; a++) {
    const o = s;
    s = Zu(o.length);
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      for (let c = 0; c < u.length; c++) {
        const f = u[c].partialPath, d = u[c].suffixDef, h = ya(f);
        if (MI(i, h, l) || U(d) || f.length === e) {
          const g = r[l];
          if (no(g, f) === !1) {
            g.push(f);
            for (let v = 0; v < h.length; v++) {
              const y = h[v];
              i[l][y] = !0;
            }
          }
        } else {
          const g = to(d, a + 1, f);
          s[l] = s[l].concat(g), k(g, (v) => {
            const y = ya(v.partialPath);
            k(y, (R) => {
              i[l][R] = !0;
            });
          });
        }
      }
    }
  }
  return r;
}
function Vs(t, e, n, r) {
  const i = new hh(t, W.ALTERNATION, r);
  return e.accept(i), ph(i.result, n);
}
function qs(t, e, n, r) {
  const i = new hh(t, n);
  e.accept(i);
  const s = i.result, o = new LI(e, t, n).startWalking(), l = new me({ definition: s }), u = new me({ definition: o });
  return ph([l, u], r);
}
function no(t, e) {
  e: for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r.length === e.length) {
      for (let i = 0; i < r.length; i++) {
        const s = e[i], a = r[i];
        if ((s === a || a.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === !1)
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
function DI(t, e) {
  return t.length < e.length && qe(t, (n, r) => {
    const i = e[r];
    return n === i || i.categoryMatchesMap[n.tokenTypeIdx];
  });
}
function mh(t) {
  return qe(t, (e) => qe(e, (n) => qe(n, (r) => U(r.categoryMatches))));
}
function FI(t) {
  const e = t.lookaheadStrategy.validate({
    rules: t.rules,
    tokenTypes: t.tokenTypes,
    grammarName: t.grammarName
  });
  return w(e, (n) => Object.assign({ type: de.CUSTOM_LOOKAHEAD_VALIDATION }, n));
}
function GI(t, e, n, r) {
  const i = ke(t, (l) => UI(l, n)), s = ZI(t, e, n), a = ke(t, (l) => qI(l, n)), o = ke(t, (l) => KI(l, t, r, n));
  return i.concat(s, a, o);
}
function UI(t, e) {
  const n = new jI();
  t.accept(n);
  const r = n.allProductions, i = V$(r, BI), s = cR(i, (o) => o.length > 1);
  return w(Z(s), (o) => {
    const l = Be(o), u = e.buildDuplicateFoundError(t, o), c = We(l), f = {
      message: u,
      type: de.DUPLICATE_PRODUCTIONS,
      ruleName: t.name,
      dslName: c,
      occurrence: l.idx
    }, d = gh(l);
    return d && (f.parameter = d), f;
  });
}
function BI(t) {
  return `${We(t)}_#_${t.idx}_#_${gh(t)}`;
}
function gh(t) {
  return t instanceof K ? t.terminalType.name : t instanceof fe ? t.nonTerminalName : "";
}
class jI extends jn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}
function KI(t, e, n, r) {
  const i = [];
  if (xe(e, (a, o) => o.name === t.name ? a + 1 : a, 0) > 1) {
    const a = r.buildDuplicateRuleNameError({
      topLevelRule: t,
      grammarName: n
    });
    i.push({
      message: a,
      type: de.DUPLICATE_RULE_NAME,
      ruleName: t.name
    });
  }
  return i;
}
function HI(t, e, n) {
  const r = [];
  let i;
  return ge(e, t) || (i = `Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `, r.push({
    message: i,
    type: de.INVALID_RULE_OVERRIDE,
    ruleName: t
  })), r;
}
function yh(t, e, n, r = []) {
  const i = [], s = Oi(e.definition);
  if (U(s))
    return [];
  {
    const a = t.name;
    ge(s, t) && i.push({
      message: n.buildLeftRecursionError({
        topLevelRule: t,
        leftRecursionPath: r
      }),
      type: de.LEFT_RECURSION,
      ruleName: a
    });
    const l = bs(s, r.concat([t])), u = ke(l, (c) => {
      const f = ae(r);
      return f.push(c), yh(t, c, n, f);
    });
    return i.concat(u);
  }
}
function Oi(t) {
  let e = [];
  if (U(t))
    return e;
  const n = Be(t);
  if (n instanceof fe)
    e.push(n.referencedRule);
  else if (n instanceof me || n instanceof se || n instanceof Se || n instanceof Ie || n instanceof ye || n instanceof q)
    e = e.concat(Oi(n.definition));
  else if (n instanceof Te)
    e = Ge(w(n.definition, (s) => Oi(s.definition)));
  else if (!(n instanceof K)) throw Error("non exhaustive match");
  const r = Qi(n), i = t.length > 1;
  if (r && i) {
    const s = ne(t);
    return e.concat(Oi(s));
  } else
    return e;
}
class dl extends jn {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function WI(t, e) {
  const n = new dl();
  t.accept(n);
  const r = n.alternations;
  return ke(r, (s) => {
    const a = Fr(s.definition);
    return ke(a, (o, l) => {
      const u = dh([o], [], Qr, 1);
      return U(u) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: t,
            alternation: s,
            emptyChoiceIdx: l
          }),
          type: de.NONE_LAST_EMPTY_ALT,
          ruleName: t.name,
          occurrence: s.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
function zI(t, e, n) {
  const r = new dl();
  t.accept(r);
  let i = r.alternations;
  return i = Os(i, (a) => a.ignoreAmbiguities === !0), ke(i, (a) => {
    const o = a.idx, l = a.maxLookahead || e, u = Vs(o, t, l, a), c = XI(u, a, t, n), f = JI(u, a, t, n);
    return c.concat(f);
  });
}
class VI extends jn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}
function qI(t, e) {
  const n = new dl();
  t.accept(n);
  const r = n.alternations;
  return ke(r, (s) => s.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: t,
        alternation: s
      }),
      type: de.TOO_MANY_ALTS,
      ruleName: t.name,
      occurrence: s.idx
    }
  ] : []);
}
function YI(t, e, n) {
  const r = [];
  return k(t, (i) => {
    const s = new VI();
    i.accept(s);
    const a = s.allProductions;
    k(a, (o) => {
      const l = fl(o), u = o.maxLookahead || e, c = o.idx, d = qs(c, i, l, u)[0];
      if (U(Ge(d))) {
        const h = n.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        r.push({
          message: h,
          type: de.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), r;
}
function XI(t, e, n, r) {
  const i = [], s = xe(t, (o, l, u) => (e.definition[u].ignoreAmbiguities === !0 || k(l, (c) => {
    const f = [u];
    k(t, (d, h) => {
      u !== h && no(d, c) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[h].ignoreAmbiguities !== !0 && f.push(h);
    }), f.length > 1 && !no(i, c) && (i.push(c), o.push({
      alts: f,
      path: c
    }));
  }), o), []);
  return w(s, (o) => {
    const l = w(o.alts, (c) => c + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: n,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: de.AMBIGUOUS_ALTS,
      ruleName: n.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function JI(t, e, n, r) {
  const i = xe(t, (a, o, l) => {
    const u = w(o, (c) => ({ idx: l, path: c }));
    return a.concat(u);
  }, []);
  return Yr(ke(i, (a) => {
    if (e.definition[a.idx].ignoreAmbiguities === !0)
      return [];
    const l = a.idx, u = a.path, c = Le(i, (d) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[d.idx].ignoreAmbiguities !== !0 && d.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      DI(d.path, u)
    ));
    return w(c, (d) => {
      const h = [d.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: n,
          alternation: e,
          ambiguityIndices: h,
          prefixPath: d.path
        }),
        type: de.AMBIGUOUS_PREFIX_ALTS,
        ruleName: n.name,
        occurrence: m,
        alternatives: h
      };
    });
  }));
}
function ZI(t, e, n) {
  const r = [], i = w(e, (s) => s.name);
  return k(t, (s) => {
    const a = s.name;
    if (ge(i, a)) {
      const o = n.buildNamespaceConflictError(s);
      r.push({
        message: o,
        type: de.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a
      });
    }
  }), r;
}
function QI(t) {
  const e = el(t, {
    errMsgProvider: EI
  }), n = {};
  return k(t.rules, (r) => {
    n[r.name] = r;
  }), xI(n, e.errMsgProvider);
}
function ew(t) {
  return t = el(t, {
    errMsgProvider: jt
  }), GI(t.rules, t.tokenTypes, t.errMsgProvider, t.grammarName);
}
const Th = "MismatchedTokenException", vh = "NoViableAltException", $h = "EarlyExitException", Rh = "NotAllInputParsedException", Ah = [
  Th,
  vh,
  $h,
  Rh
];
Object.freeze(Ah);
function ns(t) {
  return ge(Ah, t.name);
}
class Ys extends Error {
  constructor(e, n) {
    super(e), this.token = n, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class Eh extends Ys {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = Th;
  }
}
class tw extends Ys {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = vh;
  }
}
class nw extends Ys {
  constructor(e, n) {
    super(e, n), this.name = Rh;
  }
}
class rw extends Ys {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = $h;
  }
}
const Ta = {}, xh = "InRuleRecoveryException";
class iw extends Error {
  constructor(e) {
    super(e), this.name = xh;
  }
}
class sw {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = _(e, "recoveryEnabled") ? e.recoveryEnabled : dt.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = aw);
  }
  getTokenToInsert(e) {
    const n = cl(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return n.isInsertedInRecovery = !0, n;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, n, r, i) {
    const s = this.findReSyncTokenType(), a = this.exportLexerState(), o = [];
    let l = !1;
    const u = this.LA(1);
    let c = this.LA(1);
    const f = () => {
      const d = this.LA(0), h = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: u,
        previous: d,
        ruleName: this.getCurrRuleFullName()
      }), m = new Eh(h, u, this.LA(0));
      m.resyncedTokens = Fr(o), this.SAVE_ERROR(m);
    };
    for (; !l; )
      if (this.tokenMatcher(c, i)) {
        f();
        return;
      } else if (r.call(this)) {
        f(), e.apply(this, n);
        return;
      } else this.tokenMatcher(c, s) ? l = !0 : (c = this.SKIP_TOKEN(), this.addToResyncTokens(c, o));
    this.importLexerState(a);
  }
  shouldInRepetitionRecoveryBeTried(e, n, r) {
    return !(r === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, n)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, n) {
    const r = this.getCurrentGrammarPath(e, n);
    return this.getNextPossibleTokenTypes(r);
  }
  tryInRuleRecovery(e, n) {
    if (this.canRecoverWithSingleTokenInsertion(e, n))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const r = this.SKIP_TOKEN();
      return this.consumeToken(), r;
    }
    throw new iw("sad sad panda");
  }
  canPerformInRuleRecovery(e, n) {
    return this.canRecoverWithSingleTokenInsertion(e, n) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, n) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || U(n))
      return !1;
    const r = this.LA(1);
    return Ln(n, (s) => this.tokenMatcher(r, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const n = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(n);
    return ge(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let n = this.LA(1), r = 2;
    for (; ; ) {
      const i = Ln(e, (s) => fh(n, s));
      if (i !== void 0)
        return i;
      n = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Ta;
    const e = this.getLastExplicitRuleShortName(), n = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: n,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, n = this.RULE_OCCURRENCE_STACK;
    return w(e, (r, i) => i === 0 ? Ta : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: n[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = w(this.buildFullFollowKeyStack(), (n) => this.getFollowSetFromFollowKey(n));
    return Ge(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Ta)
      return [wt];
    const n = e.ruleName + e.idxInCallingRule + eh + e.inRule;
    return this.resyncFollows[n];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, n) {
    return this.tokenMatcher(e, wt) || n.push(e), n;
  }
  reSyncTo(e) {
    const n = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === !1; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, n);
    return Fr(n);
  }
  attemptInRepetitionRecovery(e, n, r, i, s, a, o) {
  }
  getCurrentGrammarPath(e, n) {
    const r = this.getHumanReadableRuleStack(), i = ae(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: n
    };
  }
  getHumanReadableRuleStack() {
    return w(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function aw(t, e, n, r, i, s, a) {
  const o = this.getKeyForAutomaticLookahead(r, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const d = this.getCurrRuleFullName(), h = this.getGAstProductions()[d];
    l = new s(h, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let u = l.token, c = l.occurrence;
  const f = l.isEndOfRule;
  this.RULE_STACK.length === 1 && f && u === void 0 && (u = wt, c = 1), !(u === void 0 || c === void 0) && this.shouldInRepetitionRecoveryBeTried(u, c, a) && this.tryInRepetitionRecovery(t, e, n, u);
}
const ow = 4, bt = 8, Sh = 1 << bt, Ih = 2 << bt, ro = 3 << bt, io = 4 << bt, so = 5 << bt, Pi = 6 << bt;
function va(t, e, n) {
  return n | e | t;
}
class hl {
  constructor(e) {
    var n;
    this.maxLookahead = (n = e?.maxLookahead) !== null && n !== void 0 ? n : dt.maxLookahead;
  }
  validate(e) {
    const n = this.validateNoLeftRecursion(e.rules);
    if (U(n)) {
      const r = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...n,
        ...r,
        ...i,
        ...s
      ];
    }
    return n;
  }
  validateNoLeftRecursion(e) {
    return ke(e, (n) => yh(n, n, jt));
  }
  validateEmptyOrAlternatives(e) {
    return ke(e, (n) => WI(n, jt));
  }
  validateAmbiguousAlternationAlternatives(e, n) {
    return ke(e, (r) => zI(r, n, jt));
  }
  validateSomeNonEmptyLookaheadPath(e, n) {
    return YI(e, n, jt);
  }
  buildLookaheadForAlternation(e) {
    return NI(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, OI);
  }
  buildLookaheadForOptional(e) {
    return bI(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, fl(e.prodType), PI);
  }
}
class lw {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = _(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : dt.dynamicTokensEnabled, this.maxLookahead = _(e, "maxLookahead") ? e.maxLookahead : dt.maxLookahead, this.lookaheadStrategy = _(e, "lookaheadStrategy") ? e.lookaheadStrategy : new hl({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    k(e, (n) => {
      this.TRACE_INIT(`${n.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: i, option: s, repetitionMandatory: a, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = cw(n);
        k(r, (u) => {
          const c = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${We(u)}${c}`, () => {
            const f = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: n,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), d = va(this.fullRuleNameToShort[n.name], Sh, u.idx);
            this.setLaFuncCache(d, f);
          });
        }), k(i, (u) => {
          this.computeLookaheadFunc(n, u.idx, ro, "Repetition", u.maxLookahead, We(u));
        }), k(s, (u) => {
          this.computeLookaheadFunc(n, u.idx, Ih, "Option", u.maxLookahead, We(u));
        }), k(a, (u) => {
          this.computeLookaheadFunc(n, u.idx, io, "RepetitionMandatory", u.maxLookahead, We(u));
        }), k(o, (u) => {
          this.computeLookaheadFunc(n, u.idx, Pi, "RepetitionMandatoryWithSeparator", u.maxLookahead, We(u));
        }), k(l, (u) => {
          this.computeLookaheadFunc(n, u.idx, so, "RepetitionWithSeparator", u.maxLookahead, We(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, n, r, i, s, a) {
    this.TRACE_INIT(`${a}${n === 0 ? "" : n}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: n,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = va(this.fullRuleNameToShort[e.name], r, n);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, n) {
    const r = this.getLastExplicitRuleShortName();
    return va(r, e, n);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, n) {
    this.lookAheadFuncsCache.set(e, n);
  }
}
class uw extends jn {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}
const Ti = new uw();
function cw(t) {
  Ti.reset(), t.accept(Ti);
  const e = Ti.dslMethods;
  return Ti.reset(), e;
}
function Qu(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset);
}
function ec(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine);
}
function fw(t, e, n) {
  t.children[n] === void 0 ? t.children[n] = [e] : t.children[n].push(e);
}
function dw(t, e, n) {
  t.children[e] === void 0 ? t.children[e] = [n] : t.children[e].push(n);
}
const hw = "name";
function wh(t, e) {
  Object.defineProperty(t, hw, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function pw(t, e) {
  const n = Pe(t), r = n.length;
  for (let i = 0; i < r; i++) {
    const s = n[i], a = t[s], o = a.length;
    for (let l = 0; l < o; l++) {
      const u = a[l];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
function mw(t, e) {
  const n = function() {
  };
  wh(n, t + "BaseSemantics");
  const r = {
    visit: function(i, s) {
      if (M(i) && (i = i[0]), !ct(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = yw(this, e);
      if (!U(i)) {
        const s = w(i, (a) => a.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return n.prototype = r, n.prototype.constructor = n, n._RULE_NAMES = e, n;
}
function gw(t, e, n) {
  const r = function() {
  };
  wh(r, t + "BaseSemanticsWithDefaults");
  const i = Object.create(n.prototype);
  return k(e, (s) => {
    i[s] = pw;
  }), r.prototype = i, r.prototype.constructor = r, r;
}
var ao;
(function(t) {
  t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
})(ao || (ao = {}));
function yw(t, e) {
  return Tw(t, e);
}
function Tw(t, e) {
  const n = Le(e, (i) => ht(t[i]) === !1), r = w(n, (i) => ({
    msg: `Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,
    type: ao.MISSING_METHOD,
    methodName: i
  }));
  return Yr(r);
}
class vw {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = _(e, "nodeLocationTracking") ? e.nodeLocationTracking : dt.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = J, this.cstFinallyStateUpdate = J, this.cstPostTerminal = J, this.cstPostNonTerminal = J, this.cstPostRule = J;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = ec, this.setNodeLocationFromNode = ec, this.cstPostRule = J, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = J, this.setNodeLocationFromNode = J, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Qu, this.setNodeLocationFromNode = Qu, this.cstPostRule = J, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = J, this.setNodeLocationFromNode = J, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = J, this.setNodeLocationFromNode = J, this.cstPostRule = J, this.setInitialNodeLocation = J;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const n = this.LA(1);
    e.location = {
      startOffset: n.startOffset,
      startLine: n.startLine,
      startColumn: n.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const n = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(n), this.CST_STACK.push(n);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const n = this.LA(0), r = e.location;
    r.startOffset <= n.startOffset ? (r.endOffset = n.endOffset, r.endLine = n.endLine, r.endColumn = n.endColumn) : (r.startOffset = NaN, r.startLine = NaN, r.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const n = this.LA(0), r = e.location;
    r.startOffset <= n.startOffset ? r.endOffset = n.endOffset : r.startOffset = NaN;
  }
  cstPostTerminal(e, n) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    fw(r, n, e), this.setNodeLocationFromToken(r.location, n);
  }
  cstPostNonTerminal(e, n) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    dw(r, n, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (ct(this.baseCstVisitorConstructor)) {
      const e = mw(this.className, Pe(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (ct(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = gw(this.className, Pe(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}
class $w {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== !0)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : is;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const n = this.currIdx + e;
    return n < 0 || this.tokVectorLength <= n ? is : this.tokVector[n];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}
class Rw {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, n, r) {
    return this.consumeInternal(n, e, r);
  }
  subrule(e, n, r) {
    return this.subruleInternal(n, e, r);
  }
  option(e, n) {
    return this.optionInternal(n, e);
  }
  or(e, n) {
    return this.orInternal(n, e);
  }
  many(e, n) {
    return this.manyInternal(e, n);
  }
  atLeastOne(e, n) {
    return this.atLeastOneInternal(e, n);
  }
  CONSUME(e, n) {
    return this.consumeInternal(e, 0, n);
  }
  CONSUME1(e, n) {
    return this.consumeInternal(e, 1, n);
  }
  CONSUME2(e, n) {
    return this.consumeInternal(e, 2, n);
  }
  CONSUME3(e, n) {
    return this.consumeInternal(e, 3, n);
  }
  CONSUME4(e, n) {
    return this.consumeInternal(e, 4, n);
  }
  CONSUME5(e, n) {
    return this.consumeInternal(e, 5, n);
  }
  CONSUME6(e, n) {
    return this.consumeInternal(e, 6, n);
  }
  CONSUME7(e, n) {
    return this.consumeInternal(e, 7, n);
  }
  CONSUME8(e, n) {
    return this.consumeInternal(e, 8, n);
  }
  CONSUME9(e, n) {
    return this.consumeInternal(e, 9, n);
  }
  SUBRULE(e, n) {
    return this.subruleInternal(e, 0, n);
  }
  SUBRULE1(e, n) {
    return this.subruleInternal(e, 1, n);
  }
  SUBRULE2(e, n) {
    return this.subruleInternal(e, 2, n);
  }
  SUBRULE3(e, n) {
    return this.subruleInternal(e, 3, n);
  }
  SUBRULE4(e, n) {
    return this.subruleInternal(e, 4, n);
  }
  SUBRULE5(e, n) {
    return this.subruleInternal(e, 5, n);
  }
  SUBRULE6(e, n) {
    return this.subruleInternal(e, 6, n);
  }
  SUBRULE7(e, n) {
    return this.subruleInternal(e, 7, n);
  }
  SUBRULE8(e, n) {
    return this.subruleInternal(e, 8, n);
  }
  SUBRULE9(e, n) {
    return this.subruleInternal(e, 9, n);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, n, r = ss) {
    if (ge(this.definedRulesNames, e)) {
      const a = {
        message: jt.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: de.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, n, r);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, n, r = ss) {
    const i = HI(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, n, r);
    return this[e] = s, s;
  }
  BACKTRACK(e, n) {
    return function() {
      this.isBackTrackingStack.push(1);
      const r = this.saveRecogState();
      try {
        return e.apply(this, n), !0;
      } catch (i) {
        if (ns(i))
          return !1;
        throw i;
      } finally {
        this.reloadRecogState(r), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return kS(Z(this.gastProductionsCache));
  }
}
class Aw {
  initRecognizerEngine(e, n) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = ts, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, _(n, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (M(e)) {
      if (U(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (M(e))
      this.tokensMap = xe(e, (s, a) => (s[a.name] = a, s), {});
    else if (_(e, "modes") && qe(Ge(Z(e.modes)), $I)) {
      const s = Ge(Z(e.modes)), a = tl(s);
      this.tokensMap = xe(a, (o, l) => (o[l.name] = l, o), {});
    } else if (Oe(e))
      this.tokensMap = ae(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = wt;
    const r = _(e, "modes") ? Ge(Z(e.modes)) : Z(e), i = qe(r, (s) => U(s.categoryMatches));
    this.tokenMatcher = i ? ts : Qr, ei(Z(this.tokensMap));
  }
  defineRule(e, n, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = _(r, "resyncEnabled") ? r.resyncEnabled : ss.resyncEnabled, s = _(r, "recoveryValueFunc") ? r.recoveryValueFunc : ss.recoveryValueFunc, a = this.ruleShortNameIdx << ow + bt;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
    let o;
    return this.outputCst === !0 ? o = function(...c) {
      try {
        this.ruleInvocationStateUpdate(a, e, this.subruleIdx), n.apply(this, c);
        const f = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(f), f;
      } catch (f) {
        return this.invokeRuleCatch(f, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...c) {
      try {
        return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), n.apply(this, c);
      } catch (f) {
        return this.invokeRuleCatch(f, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: n });
  }
  invokeRuleCatch(e, n, r) {
    const i = this.RULE_STACK.length === 1, s = n && !this.isBackTracking() && this.recoveryEnabled;
    if (ns(e)) {
      const a = e;
      if (s) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = !0, l;
          } else
            return r(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = !0, a.partialCstResult = l;
          }
          throw a;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), r(e);
        throw a;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Ih, n);
    return this.optionInternalLogic(e, n, r);
  }
  optionInternalLogic(e, n, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof e != "function") {
      s = e.DEF;
      const a = e.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = e;
    if (i.call(this) === !0)
      return s.call(this);
  }
  atLeastOneInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(io, e);
    return this.atLeastOneInternalLogic(e, n, r);
  }
  atLeastOneInternalLogic(e, n, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof n != "function") {
      s = n.DEF;
      const a = n.GATE;
      if (a !== void 0) {
        const o = i;
        i = () => a.call(this) && o.call(this);
      }
    } else
      s = n;
    if (i.call(this) === !0) {
      let a = this.doSingleRepetition(s);
      for (; i.call(this) === !0 && a === !0; )
        a = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, W.REPETITION_MANDATORY, n.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, n], i, io, e, CI);
  }
  atLeastOneSepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Pi, e);
    this.atLeastOneSepFirstInternalLogic(e, n, r);
  }
  atLeastOneSepFirstInternalLogic(e, n, r) {
    const i = n.DEF, s = n.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Xu
      ], o, Pi, e, Xu);
    } else
      throw this.raiseEarlyExitException(e, W.REPETITION_MANDATORY_WITH_SEPARATOR, n.ERR_MSG);
  }
  manyInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(ro, e);
    return this.manyInternalLogic(e, n, r);
  }
  manyInternalLogic(e, n, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof n != "function") {
      s = n.DEF;
      const o = n.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      s = n;
    let a = !0;
    for (; i.call(this) === !0 && a === !0; )
      a = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, n],
      i,
      ro,
      e,
      _I,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a
    );
  }
  manySepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(so, e);
    this.manySepFirstInternalLogic(e, n, r);
  }
  manySepFirstInternalLogic(e, n, r) {
    const i = n.DEF, s = n.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Yu
      ], o, so, e, Yu);
    }
  }
  repetitionSepSecondInternal(e, n, r, i, s) {
    for (; r(); )
      this.CONSUME(n), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      n,
      r,
      i,
      s
    ], r, Pi, e, s);
  }
  doSingleRepetition(e) {
    const n = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > n;
  }
  orInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Sh, n), i = M(e) ? e : e.DEF, a = this.getLaFuncFromCache(r).call(this, i);
    if (a !== void 0)
      return i[a].ALT.call(this);
    this.raiseNoAltException(n, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
      const e = this.LA(1), n = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new nw(n, e));
    }
  }
  subruleInternal(e, n, r) {
    let i;
    try {
      const s = r !== void 0 ? r.ARGS : void 0;
      return this.subruleIdx = n, i = e.apply(this, s), this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, r, e.ruleName);
    }
  }
  subruleInternalError(e, n, r) {
    throw ns(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : r), delete e.partialCstResult), e;
  }
  consumeInternal(e, n, r) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === !0 ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, r);
    } catch (s) {
      i = this.consumeInternalRecovery(e, n, s);
    }
    return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, i), i;
  }
  consumeInternalError(e, n, r) {
    let i;
    const s = this.LA(0);
    throw r !== void 0 && r.ERR_MSG ? i = r.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: n,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new Eh(i, n, s));
  }
  consumeInternalRecovery(e, n, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, n);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === xh ? r : s;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, n = ae(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: n,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, n, r) {
    this.RULE_OCCURRENCE_STACK.push(r), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(n);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), wt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class Ew {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = _(e, "errorMessageProvider") ? e.errorMessageProvider : dt.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (ns(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: ae(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return ae(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, n, r) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = qs(e, s, n, this.maxLookahead)[0], l = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      l.push(this.LA(c));
    const u = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: i
    });
    throw this.SAVE_ERROR(new rw(u, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, n) {
    const r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], s = Vs(e, i, this.maxLookahead), a = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      a.push(this.LA(u));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a,
      previous: o,
      customUserDescription: n,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new tw(l, this.LA(1), o));
  }
}
class xw {
  initContentAssist() {
  }
  computeContentAssist(e, n) {
    const r = this.gastProductionsCache[e];
    if (ct(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return dh([r], n, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const n = Be(e.ruleStack), i = this.getGAstProductions()[n];
    return new wI(i, e).startWalking();
  }
}
const Xs = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(Xs);
const tc = !0, nc = Math.pow(2, bt) - 1, _h = ch({ name: "RECORDING_PHASE_TOKEN", pattern: he.NA });
ei([_h]);
const Ch = cl(
  _h,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(Ch);
const Sw = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class Iw {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const n = e > 0 ? e : "";
        this[`CONSUME${n}`] = function(r, i) {
          return this.consumeInternalRecord(r, e, i);
        }, this[`SUBRULE${n}`] = function(r, i) {
          return this.subruleInternalRecord(r, e, i);
        }, this[`OPTION${n}`] = function(r) {
          return this.optionInternalRecord(r, e);
        }, this[`OR${n}`] = function(r) {
          return this.orInternalRecord(r, e);
        }, this[`MANY${n}`] = function(r) {
          this.manyInternalRecord(e, r);
        }, this[`MANY_SEP${n}`] = function(r) {
          this.manySepFirstInternalRecord(e, r);
        }, this[`AT_LEAST_ONE${n}`] = function(r) {
          this.atLeastOneInternalRecord(e, r);
        }, this[`AT_LEAST_ONE_SEP${n}`] = function(r) {
          this.atLeastOneSepFirstInternalRecord(e, r);
        };
      }
      this.consume = function(e, n, r) {
        return this.consumeInternalRecord(n, e, r);
      }, this.subrule = function(e, n, r) {
        return this.subruleInternalRecord(n, e, r);
      }, this.option = function(e, n) {
        return this.optionInternalRecord(n, e);
      }, this.or = function(e, n) {
        return this.orInternalRecord(n, e);
      }, this.many = function(e, n) {
        this.manyInternalRecord(e, n);
      }, this.atLeastOne = function(e, n) {
        this.atLeastOneInternalRecord(e, n);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let n = 0; n < 10; n++) {
        const r = n > 0 ? n : "";
        delete e[`CONSUME${r}`], delete e[`SUBRULE${r}`], delete e[`OPTION${r}`], delete e[`OR${r}`], delete e[`MANY${r}`], delete e[`MANY_SEP${r}`], delete e[`AT_LEAST_ONE${r}`], delete e[`AT_LEAST_ONE_SEP${r}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, n) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return is;
  }
  topLevelRuleRecord(e, n) {
    try {
      const r = new Bn({ definition: [], name: e });
      return r.name = e, this.recordingProdStack.push(r), n.call(this), this.recordingProdStack.pop(), r;
    } catch (r) {
      if (r.KNOWN_RECORDER_ERROR !== !0)
        try {
          r.message = r.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw r;
        }
      throw r;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, n) {
    return Vn.call(this, se, e, n);
  }
  atLeastOneInternalRecord(e, n) {
    Vn.call(this, Se, n, e);
  }
  atLeastOneSepFirstInternalRecord(e, n) {
    Vn.call(this, Ie, n, e, tc);
  }
  manyInternalRecord(e, n) {
    Vn.call(this, q, n, e);
  }
  manySepFirstInternalRecord(e, n) {
    Vn.call(this, ye, n, e, tc);
  }
  orInternalRecord(e, n) {
    return ww.call(this, e, n);
  }
  subruleInternalRecord(e, n, r) {
    if (rs(n), !e || _(e, "ruleName") === !1) {
      const o = new Error(`<SUBRULE${rc(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const i = Pn(this.recordingProdStack), s = e.ruleName, a = new fe({
      idx: n,
      nonTerminalName: s,
      label: r?.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a), this.outputCst ? Sw : Xs;
  }
  consumeInternalRecord(e, n, r) {
    if (rs(n), !lh(e)) {
      const a = new Error(`<CONSUME${rc(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a.KNOWN_RECORDER_ERROR = !0, a;
    }
    const i = Pn(this.recordingProdStack), s = new K({
      idx: n,
      terminalType: e,
      label: r?.LABEL
    });
    return i.definition.push(s), Ch;
  }
}
function Vn(t, e, n, r = !1) {
  rs(n);
  const i = Pn(this.recordingProdStack), s = ht(e) ? e : e.DEF, a = new t({ definition: [], idx: n });
  return r && (a.separator = e.SEP), _(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a), s.call(this), i.definition.push(a), this.recordingProdStack.pop(), Xs;
}
function ww(t, e) {
  rs(e);
  const n = Pn(this.recordingProdStack), r = M(t) === !1, i = r === !1 ? t : t.DEF, s = new Te({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && t.IGNORE_AMBIGUITIES === !0
  });
  _(t, "MAX_LOOKAHEAD") && (s.maxLookahead = t.MAX_LOOKAHEAD);
  const a = hR(i, (o) => ht(o.GATE));
  return s.hasPredicates = a, n.definition.push(s), k(i, (o) => {
    const l = new me({ definition: [] });
    s.definition.push(l), _(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : _(o, "GATE") && (l.ignoreAmbiguities = !0), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), Xs;
}
function rc(t) {
  return t === 0 ? "" : `${t}`;
}
function rs(t) {
  if (t < 0 || t > nc) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${nc + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class _w {
  initPerformanceTracer(e) {
    if (_(e, "traceInitPerf")) {
      const n = e.traceInitPerf, r = typeof n == "number";
      this.traceInitMaxIdent = r ? n : 1 / 0, this.traceInitPerf = r ? n > 0 : n;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = dt.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, n) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: i, value: s } = kd(n), a = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a(`${r}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return n();
  }
}
function Cw(t, e) {
  e.forEach((n) => {
    const r = n.prototype;
    Object.getOwnPropertyNames(r).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(r, i);
      s && (s.get || s.set) ? Object.defineProperty(t.prototype, i, s) : t.prototype[i] = n.prototype[i];
    });
  });
}
const is = cl(wt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(is);
const dt = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: fn,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), ss = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var de;
(function(t) {
  t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", t[t.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(de || (de = {}));
function ic(t = void 0) {
  return function() {
    return t;
  };
}
class ti {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = !0;
      const n = this.className;
      this.TRACE_INIT("toFastProps", () => {
        Nd(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), k(this.definedRulesNames, (i) => {
            const a = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, a);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        r = QI({
          rules: Z(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (U(r) && this.skipValidations === !1) {
          const i = ew({
            rules: Z(this.gastProductionsCache),
            tokenTypes: Z(this.tokensMap),
            errMsgProvider: jt,
            grammarName: n
          }), s = FI({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: Z(this.gastProductionsCache),
            tokenTypes: Z(this.tokensMap),
            grammarName: n
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), U(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = DS(Z(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: Z(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(Z(this.gastProductionsCache));
      })), !ti.DEFER_DEFINITION_ERRORS_HANDLING && !U(this.definitionErrors))
        throw e = w(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, n) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const r = this;
    if (r.initErrorHandler(n), r.initLexerAdapter(), r.initLooksAhead(n), r.initRecognizerEngine(e, n), r.initRecoverable(n), r.initTreeBuilder(n), r.initContentAssist(), r.initGastRecorder(n), r.initPerformanceTracer(n), _(n, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = _(n, "skipValidations") ? n.skipValidations : dt.skipValidations;
  }
}
ti.DEFER_DEFINITION_ERRORS_HANDLING = !1;
Cw(ti, [
  sw,
  lw,
  vw,
  $w,
  Aw,
  Rw,
  Ew,
  xw,
  Iw,
  _w
]);
class kw extends ti {
  constructor(e, n = dt) {
    const r = ae(n);
    r.outputCst = !1, super(e, r);
  }
}
function Mn(t, e, n) {
  return `${t.name}_${e}_${n}`;
}
const _t = 1, Nw = 2, kh = 4, Nh = 5, ni = 7, bw = 8, Ow = 9, Pw = 10, Lw = 11, bh = 12;
class pl {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return !1;
  }
}
class ml extends pl {
  constructor(e, n) {
    super(e), this.tokenType = n;
  }
}
class Oh extends pl {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return !0;
  }
}
class gl extends pl {
  constructor(e, n, r) {
    super(e), this.rule = n, this.followState = r;
  }
  isEpsilon() {
    return !0;
  }
}
function Mw(t) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  Dw(e, t);
  const n = t.length;
  for (let r = 0; r < n; r++) {
    const i = t[r], s = sn(e, i, i);
    s !== void 0 && qw(e, i, s);
  }
  return e;
}
function Dw(t, e) {
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const i = e[r], s = ee(t, i, void 0, {
      type: Nw
    }), a = ee(t, i, void 0, {
      type: ni
    });
    s.stop = a, t.ruleToStartState.set(i, s), t.ruleToStopState.set(i, a);
  }
}
function Ph(t, e, n) {
  return n instanceof K ? yl(t, e, n.terminalType, n) : n instanceof fe ? Vw(t, e, n) : n instanceof Te ? jw(t, e, n) : n instanceof se ? Kw(t, e, n) : n instanceof q ? Fw(t, e, n) : n instanceof ye ? Gw(t, e, n) : n instanceof Se ? Uw(t, e, n) : n instanceof Ie ? Bw(t, e, n) : sn(t, e, n);
}
function Fw(t, e, n) {
  const r = ee(t, e, n, {
    type: Nh
  });
  Ot(t, r);
  const i = Kn(t, e, r, n, sn(t, e, n));
  return Mh(t, e, n, i);
}
function Gw(t, e, n) {
  const r = ee(t, e, n, {
    type: Nh
  });
  Ot(t, r);
  const i = Kn(t, e, r, n, sn(t, e, n)), s = yl(t, e, n.separator, n);
  return Mh(t, e, n, i, s);
}
function Uw(t, e, n) {
  const r = ee(t, e, n, {
    type: kh
  });
  Ot(t, r);
  const i = Kn(t, e, r, n, sn(t, e, n));
  return Lh(t, e, n, i);
}
function Bw(t, e, n) {
  const r = ee(t, e, n, {
    type: kh
  });
  Ot(t, r);
  const i = Kn(t, e, r, n, sn(t, e, n)), s = yl(t, e, n.separator, n);
  return Lh(t, e, n, i, s);
}
function jw(t, e, n) {
  const r = ee(t, e, n, {
    type: _t
  });
  Ot(t, r);
  const i = ot(n.definition, (a) => Ph(t, e, a));
  return Kn(t, e, r, n, ...i);
}
function Kw(t, e, n) {
  const r = ee(t, e, n, {
    type: _t
  });
  Ot(t, r);
  const i = Kn(t, e, r, n, sn(t, e, n));
  return Hw(t, e, n, i);
}
function sn(t, e, n) {
  const r = Op(ot(n.definition, (i) => Ph(t, e, i)), (i) => i !== void 0);
  return r.length === 1 ? r[0] : r.length === 0 ? void 0 : zw(t, r);
}
function Lh(t, e, n, r, i) {
  const s = r.left, a = r.right, o = ee(t, e, n, {
    type: Lw
  });
  Ot(t, o);
  const l = ee(t, e, n, {
    type: bh
  });
  return s.loopback = o, l.loopback = o, t.decisionMap[Mn(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", n.idx)] = o, X(a, o), i === void 0 ? (X(o, s), X(o, l)) : (X(o, l), X(o, i.left), X(i.right, s)), {
    left: s,
    right: l
  };
}
function Mh(t, e, n, r, i) {
  const s = r.left, a = r.right, o = ee(t, e, n, {
    type: Pw
  });
  Ot(t, o);
  const l = ee(t, e, n, {
    type: bh
  }), u = ee(t, e, n, {
    type: Ow
  });
  return o.loopback = u, l.loopback = u, X(o, s), X(o, l), X(a, u), i !== void 0 ? (X(u, l), X(u, i.left), X(i.right, s)) : X(u, o), t.decisionMap[Mn(e, i ? "RepetitionWithSeparator" : "Repetition", n.idx)] = o, {
    left: o,
    right: l
  };
}
function Hw(t, e, n, r) {
  const i = r.left, s = r.right;
  return X(i, s), t.decisionMap[Mn(e, "Option", n.idx)] = i, r;
}
function Ot(t, e) {
  return t.decisionStates.push(e), e.decision = t.decisionStates.length - 1, e.decision;
}
function Kn(t, e, n, r, ...i) {
  const s = ee(t, e, r, {
    type: bw,
    start: n
  });
  n.end = s;
  for (const o of i)
    o !== void 0 ? (X(n, o.left), X(o.right, s)) : X(n, s);
  const a = {
    left: n,
    right: s
  };
  return t.decisionMap[Mn(e, Ww(r), r.idx)] = n, a;
}
function Ww(t) {
  if (t instanceof Te)
    return "Alternation";
  if (t instanceof se)
    return "Option";
  if (t instanceof q)
    return "Repetition";
  if (t instanceof ye)
    return "RepetitionWithSeparator";
  if (t instanceof Se)
    return "RepetitionMandatory";
  if (t instanceof Ie)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function zw(t, e) {
  const n = e.length;
  for (let s = 0; s < n - 1; s++) {
    const a = e[s];
    let o;
    a.left.transitions.length === 1 && (o = a.left.transitions[0]);
    const l = o instanceof gl, u = o, c = e[s + 1].left;
    a.left.type === _t && a.right.type === _t && o !== void 0 && (l && u.followState === a.right || o.target === a.right) ? (l ? u.followState = c : o.target = c, Yw(t, a.right)) : X(a.right, c);
  }
  const r = e[0], i = e[n - 1];
  return {
    left: r.left,
    right: i.right
  };
}
function yl(t, e, n, r) {
  const i = ee(t, e, r, {
    type: _t
  }), s = ee(t, e, r, {
    type: _t
  });
  return Tl(i, new ml(s, n)), {
    left: i,
    right: s
  };
}
function Vw(t, e, n) {
  const r = n.referencedRule, i = t.ruleToStartState.get(r), s = ee(t, e, n, {
    type: _t
  }), a = ee(t, e, n, {
    type: _t
  }), o = new gl(i, r, a);
  return Tl(s, o), {
    left: s,
    right: a
  };
}
function qw(t, e, n) {
  const r = t.ruleToStartState.get(e);
  X(r, n.left);
  const i = t.ruleToStopState.get(e);
  return X(n.right, i), {
    left: r,
    right: i
  };
}
function X(t, e) {
  const n = new Oh(e);
  Tl(t, n);
}
function ee(t, e, n, r) {
  const i = Object.assign({
    atn: t,
    production: n,
    epsilonOnlyTransitions: !1,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: t.states.length
  }, r);
  return t.states.push(i), i;
}
function Tl(t, e) {
  t.transitions.length === 0 && (t.epsilonOnlyTransitions = e.isEpsilon()), t.transitions.push(e);
}
function Yw(t, e) {
  t.states.splice(t.states.indexOf(e), 1);
}
const as = {};
class oo {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const n = Dh(e);
    n in this.map || (this.map[n] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return ot(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const n in this.map)
      e += n + ":";
    return e;
  }
}
function Dh(t, e = !0) {
  return `${e ? `a${t.alt}` : ""}s${t.state.stateNumber}:${t.stack.map((n) => n.stateNumber.toString()).join("_")}`;
}
function Xw(t, e) {
  const n = {};
  return (r) => {
    const i = r.toString();
    let s = n[i];
    return s !== void 0 || (s = {
      atnStartState: t,
      decision: e,
      states: {}
    }, n[i] = s), s;
  };
}
class Fh {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, n) {
    this.predicates[e] = n;
  }
  toString() {
    let e = "";
    const n = this.predicates.length;
    for (let r = 0; r < n; r++)
      e += this.predicates[r] === !0 ? "1" : "0";
    return e;
  }
}
const sc = new Fh();
class Jw extends hl {
  constructor(e) {
    var n;
    super(), this.logging = (n = e?.logging) !== null && n !== void 0 ? n : ((r) => console.log(r));
  }
  initialize(e) {
    this.atn = Mw(e.rules), this.dfas = Zw(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: n, rule: r, hasPredicates: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Mn(r, "Alternation", n), c = this.atn.decisionMap[l].decision, f = ot(Ju({
      maxLookahead: 1,
      occurrence: n,
      prodType: "Alternation",
      rule: r
    }), (d) => ot(d, (h) => h[0]));
    if (ac(f, !1) && !s) {
      const d = Il(f, (h, m, g) => (ta(m, (v) => {
        v && (h[v.tokenTypeIdx] = g, ta(v.categoryMatches, (y) => {
          h[y] = g;
        }));
      }), h), {});
      return i ? function(h) {
        var m;
        const g = this.LA(1), v = d[g.tokenTypeIdx];
        if (h !== void 0 && v !== void 0) {
          const y = (m = h[v]) === null || m === void 0 ? void 0 : m.GATE;
          if (y !== void 0 && y.call(this) === !1)
            return;
        }
        return v;
      } : function() {
        const h = this.LA(1);
        return d[h.tokenTypeIdx];
      };
    } else return i ? function(d) {
      const h = new Fh(), m = d === void 0 ? 0 : d.length;
      for (let v = 0; v < m; v++) {
        const y = d?.[v].GATE;
        h.set(v, y === void 0 || y.call(this));
      }
      const g = $a.call(this, a, c, h, o);
      return typeof g == "number" ? g : void 0;
    } : function() {
      const d = $a.call(this, a, c, sc, o);
      return typeof d == "number" ? d : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: n, rule: r, prodType: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = Mn(r, i, n), c = this.atn.decisionMap[l].decision, f = ot(Ju({
      maxLookahead: 1,
      occurrence: n,
      prodType: i,
      rule: r
    }), (d) => ot(d, (h) => h[0]));
    if (ac(f) && f[0][0] && !s) {
      const d = f[0], h = _p(d);
      if (h.length === 1 && Pp(h[0].categoryMatches)) {
        const g = h[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === g;
        };
      } else {
        const m = Il(h, (g, v) => (v !== void 0 && (g[v.tokenTypeIdx] = !0, ta(v.categoryMatches, (y) => {
          g[y] = !0;
        })), g), {});
        return function() {
          const g = this.LA(1);
          return m[g.tokenTypeIdx] === !0;
        };
      }
    }
    return function() {
      const d = $a.call(this, a, c, sc, o);
      return typeof d == "object" ? !1 : d === 0;
    };
  }
}
function ac(t, e = !0) {
  const n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const i = /* @__PURE__ */ new Set();
    for (const s of r) {
      if (s === void 0) {
        if (e)
          break;
        return !1;
      }
      const a = [s.tokenTypeIdx].concat(s.categoryMatches);
      for (const o of a)
        if (n.has(o)) {
          if (!i.has(o))
            return !1;
        } else
          n.add(o), i.add(o);
    }
  }
  return !0;
}
function Zw(t) {
  const e = t.decisionStates.length, n = Array(e);
  for (let r = 0; r < e; r++)
    n[r] = Xw(t.decisionStates[r], r);
  return n;
}
function $a(t, e, n, r) {
  const i = t[e](n);
  let s = i.start;
  if (s === void 0) {
    const o = u_(i.atnStartState);
    s = Uh(i, Gh(o)), i.start = s;
  }
  return Qw.apply(this, [i, s, n, r]);
}
function Qw(t, e, n, r) {
  let i = e, s = 1;
  const a = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = s_(i, o);
    if (l === void 0 && (l = e_.apply(this, [t, i, o, s, n, r])), l === as)
      return i_(a, i, o);
    if (l.isAcceptState === !0)
      return l.prediction;
    i = l, a.push(o), o = this.LA(s++);
  }
}
function e_(t, e, n, r, i, s) {
  const a = a_(e.configs, n, i);
  if (a.size === 0)
    return oc(t, e, n, as), as;
  let o = Gh(a);
  const l = l_(a, i);
  if (l !== void 0)
    o.isAcceptState = !0, o.prediction = l, o.configs.uniqueAlt = l;
  else if (h_(a)) {
    const u = Cp(a.alts);
    o.isAcceptState = !0, o.prediction = u, o.configs.uniqueAlt = u, t_.apply(this, [t, r, a.alts, s]);
  }
  return o = oc(t, e, n, o), o;
}
function t_(t, e, n, r) {
  const i = [];
  for (let u = 1; u <= e; u++)
    i.push(this.LA(u).tokenType);
  const s = t.atnStartState, a = s.rule, o = s.production, l = n_({
    topLevelRule: a,
    ambiguityIndices: n,
    production: o,
    prefixPath: i
  });
  r(l);
}
function n_(t) {
  const e = ot(t.prefixPath, (i) => pn(i)).join(", "), n = t.production.idx === 0 ? "" : t.production.idx;
  let r = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${r_(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
}
function r_(t) {
  if (t instanceof fe)
    return "SUBRULE";
  if (t instanceof se)
    return "OPTION";
  if (t instanceof Te)
    return "OR";
  if (t instanceof Se)
    return "AT_LEAST_ONE";
  if (t instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof ye)
    return "MANY_SEP";
  if (t instanceof q)
    return "MANY";
  if (t instanceof K)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function i_(t, e, n) {
  const r = Lp(e.configs.elements, (s) => s.state.transitions), i = Mp(r.filter((s) => s instanceof ml).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: n,
    possibleTokenTypes: i,
    tokenPath: t
  };
}
function s_(t, e) {
  return t.edges[e.tokenTypeIdx];
}
function a_(t, e, n) {
  const r = new oo(), i = [];
  for (const a of t.elements) {
    if (n.is(a.alt) === !1)
      continue;
    if (a.state.type === ni) {
      i.push(a);
      continue;
    }
    const o = a.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const u = a.state.transitions[l], c = o_(u, e);
      c !== void 0 && r.add({
        state: c,
        alt: a.alt,
        stack: a.stack
      });
    }
  }
  let s;
  if (i.length === 0 && r.size === 1 && (s = r), s === void 0) {
    s = new oo();
    for (const a of r.elements)
      os(a, s);
  }
  if (i.length > 0 && !f_(s))
    for (const a of i)
      s.add(a);
  return s;
}
function o_(t, e) {
  if (t instanceof ml && fh(e, t.tokenType))
    return t.target;
}
function l_(t, e) {
  let n;
  for (const r of t.elements)
    if (e.is(r.alt) === !0) {
      if (n === void 0)
        n = r.alt;
      else if (n !== r.alt)
        return;
    }
  return n;
}
function Gh(t) {
  return {
    configs: t,
    edges: {},
    isAcceptState: !1,
    prediction: -1
  };
}
function oc(t, e, n, r) {
  return r = Uh(t, r), e.edges[n.tokenTypeIdx] = r, r;
}
function Uh(t, e) {
  if (e === as)
    return e;
  const n = e.configs.key, r = t.states[n];
  return r !== void 0 ? r : (e.configs.finalize(), t.states[n] = e, e);
}
function u_(t) {
  const e = new oo(), n = t.transitions.length;
  for (let r = 0; r < n; r++) {
    const s = {
      state: t.transitions[r].target,
      alt: r,
      stack: []
    };
    os(s, e);
  }
  return e;
}
function os(t, e) {
  const n = t.state;
  if (n.type === ni) {
    if (t.stack.length > 0) {
      const i = [...t.stack], a = {
        state: i.pop(),
        alt: t.alt,
        stack: i
      };
      os(a, e);
    } else
      e.add(t);
    return;
  }
  n.epsilonOnlyTransitions || e.add(t);
  const r = n.transitions.length;
  for (let i = 0; i < r; i++) {
    const s = n.transitions[i], a = c_(t, s);
    a !== void 0 && os(a, e);
  }
}
function c_(t, e) {
  if (e instanceof Oh)
    return {
      state: e.target,
      alt: t.alt,
      stack: t.stack
    };
  if (e instanceof gl) {
    const n = [...t.stack, e.followState];
    return {
      state: e.target,
      alt: t.alt,
      stack: n
    };
  }
}
function f_(t) {
  for (const e of t.elements)
    if (e.state.type === ni)
      return !0;
  return !1;
}
function d_(t) {
  for (const e of t.elements)
    if (e.state.type !== ni)
      return !1;
  return !0;
}
function h_(t) {
  if (d_(t))
    return !0;
  const e = p_(t.elements);
  return m_(e) && !g_(e);
}
function p_(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) {
    const r = Dh(n, !1);
    let i = e.get(r);
    i === void 0 && (i = {}, e.set(r, i)), i[n.alt] = !0;
  }
  return e;
}
function m_(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length > 1)
      return !0;
  return !1;
}
function g_(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length === 1)
      return !0;
  return !1;
}
var lc;
(function(t) {
  function e(n) {
    return typeof n == "string";
  }
  t.is = e;
})(lc || (lc = {}));
var lo;
(function(t) {
  function e(n) {
    return typeof n == "string";
  }
  t.is = e;
})(lo || (lo = {}));
var uc;
(function(t) {
  t.MIN_VALUE = -2147483648, t.MAX_VALUE = 2147483647;
  function e(n) {
    return typeof n == "number" && t.MIN_VALUE <= n && n <= t.MAX_VALUE;
  }
  t.is = e;
})(uc || (uc = {}));
var ls;
(function(t) {
  t.MIN_VALUE = 0, t.MAX_VALUE = 2147483647;
  function e(n) {
    return typeof n == "number" && t.MIN_VALUE <= n && n <= t.MAX_VALUE;
  }
  t.is = e;
})(ls || (ls = {}));
var D;
(function(t) {
  function e(r, i) {
    return r === Number.MAX_VALUE && (r = ls.MAX_VALUE), i === Number.MAX_VALUE && (i = ls.MAX_VALUE), { line: r, character: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && p.uinteger(i.line) && p.uinteger(i.character);
  }
  t.is = n;
})(D || (D = {}));
var L;
(function(t) {
  function e(r, i, s, a) {
    if (p.uinteger(r) && p.uinteger(i) && p.uinteger(s) && p.uinteger(a))
      return { start: D.create(r, i), end: D.create(s, a) };
    if (D.is(r) && D.is(i))
      return { start: r, end: i };
    throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a}]`);
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && D.is(i.start) && D.is(i.end);
  }
  t.is = n;
})(L || (L = {}));
var us;
(function(t) {
  function e(r, i) {
    return { uri: r, range: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && L.is(i.range) && (p.string(i.uri) || p.undefined(i.uri));
  }
  t.is = n;
})(us || (us = {}));
var cc;
(function(t) {
  function e(r, i, s, a) {
    return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && L.is(i.targetRange) && p.string(i.targetUri) && L.is(i.targetSelectionRange) && (L.is(i.originSelectionRange) || p.undefined(i.originSelectionRange));
  }
  t.is = n;
})(cc || (cc = {}));
var uo;
(function(t) {
  function e(r, i, s, a) {
    return {
      red: r,
      green: i,
      blue: s,
      alpha: a
    };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.numberRange(i.red, 0, 1) && p.numberRange(i.green, 0, 1) && p.numberRange(i.blue, 0, 1) && p.numberRange(i.alpha, 0, 1);
  }
  t.is = n;
})(uo || (uo = {}));
var fc;
(function(t) {
  function e(r, i) {
    return {
      range: r,
      color: i
    };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && L.is(i.range) && uo.is(i.color);
  }
  t.is = n;
})(fc || (fc = {}));
var dc;
(function(t) {
  function e(r, i, s) {
    return {
      label: r,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || Fn.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, Fn.is));
  }
  t.is = n;
})(dc || (dc = {}));
var hc;
(function(t) {
  t.Comment = "comment", t.Imports = "imports", t.Region = "region";
})(hc || (hc = {}));
var pc;
(function(t) {
  function e(r, i, s, a, o, l) {
    const u = {
      startLine: r,
      endLine: i
    };
    return p.defined(s) && (u.startCharacter = s), p.defined(a) && (u.endCharacter = a), p.defined(o) && (u.kind = o), p.defined(l) && (u.collapsedText = l), u;
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.uinteger(i.startLine) && p.uinteger(i.startLine) && (p.undefined(i.startCharacter) || p.uinteger(i.startCharacter)) && (p.undefined(i.endCharacter) || p.uinteger(i.endCharacter)) && (p.undefined(i.kind) || p.string(i.kind));
  }
  t.is = n;
})(pc || (pc = {}));
var co;
(function(t) {
  function e(r, i) {
    return {
      location: r,
      message: i
    };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && us.is(i.location) && p.string(i.message);
  }
  t.is = n;
})(co || (co = {}));
var mc;
(function(t) {
  t.Error = 1, t.Warning = 2, t.Information = 3, t.Hint = 4;
})(mc || (mc = {}));
var gc;
(function(t) {
  t.Unnecessary = 1, t.Deprecated = 2;
})(gc || (gc = {}));
var yc;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && p.string(r.href);
  }
  t.is = e;
})(yc || (yc = {}));
var cs;
(function(t) {
  function e(r, i, s, a, o, l) {
    let u = { range: r, message: i };
    return p.defined(s) && (u.severity = s), p.defined(a) && (u.code = a), p.defined(o) && (u.source = o), p.defined(l) && (u.relatedInformation = l), u;
  }
  t.create = e;
  function n(r) {
    var i;
    let s = r;
    return p.defined(s) && L.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, co.is));
  }
  t.is = n;
})(cs || (cs = {}));
var Dn;
(function(t) {
  function e(r, i, ...s) {
    let a = { title: r, command: i };
    return p.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.title) && p.string(i.command);
  }
  t.is = n;
})(Dn || (Dn = {}));
var Fn;
(function(t) {
  function e(s, a) {
    return { range: s, newText: a };
  }
  t.replace = e;
  function n(s, a) {
    return { range: { start: s, end: s }, newText: a };
  }
  t.insert = n;
  function r(s) {
    return { range: s, newText: "" };
  }
  t.del = r;
  function i(s) {
    const a = s;
    return p.objectLiteral(a) && p.string(a.newText) && L.is(a.range);
  }
  t.is = i;
})(Fn || (Fn = {}));
var fo;
(function(t) {
  function e(r, i, s) {
    const a = { label: r };
    return i !== void 0 && (a.needsConfirmation = i), s !== void 0 && (a.description = s), a;
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (p.string(i.description) || i.description === void 0);
  }
  t.is = n;
})(fo || (fo = {}));
var Gn;
(function(t) {
  function e(n) {
    const r = n;
    return p.string(r);
  }
  t.is = e;
})(Gn || (Gn = {}));
var Tc;
(function(t) {
  function e(s, a, o) {
    return { range: s, newText: a, annotationId: o };
  }
  t.replace = e;
  function n(s, a, o) {
    return { range: { start: s, end: s }, newText: a, annotationId: o };
  }
  t.insert = n;
  function r(s, a) {
    return { range: s, newText: "", annotationId: a };
  }
  t.del = r;
  function i(s) {
    const a = s;
    return Fn.is(a) && (fo.is(a.annotationId) || Gn.is(a.annotationId));
  }
  t.is = i;
})(Tc || (Tc = {}));
var ho;
(function(t) {
  function e(r, i) {
    return { textDocument: r, edits: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && To.is(i.textDocument) && Array.isArray(i.edits);
  }
  t.is = n;
})(ho || (ho = {}));
var po;
(function(t) {
  function e(r, i, s) {
    let a = {
      kind: "create",
      uri: r
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
  }
  t.is = n;
})(po || (po = {}));
var mo;
(function(t) {
  function e(r, i, s, a) {
    let o = {
      kind: "rename",
      oldUri: r,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a !== void 0 && (o.annotationId = a), o;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
  }
  t.is = n;
})(mo || (mo = {}));
var go;
(function(t) {
  function e(r, i, s) {
    let a = {
      kind: "delete",
      uri: r
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Gn.is(i.annotationId));
  }
  t.is = n;
})(go || (go = {}));
var yo;
(function(t) {
  function e(n) {
    let r = n;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => p.string(i.kind) ? po.is(i) || mo.is(i) || go.is(i) : ho.is(i)));
  }
  t.is = e;
})(yo || (yo = {}));
var vc;
(function(t) {
  function e(r) {
    return { uri: r };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri);
  }
  t.is = n;
})(vc || (vc = {}));
var $c;
(function(t) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.integer(i.version);
  }
  t.is = n;
})($c || ($c = {}));
var To;
(function(t) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && (i.version === null || p.integer(i.version));
  }
  t.is = n;
})(To || (To = {}));
var Rc;
(function(t) {
  function e(r, i, s, a) {
    return { uri: r, languageId: i, version: s, text: a };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.string(i.languageId) && p.integer(i.version) && p.string(i.text);
  }
  t.is = n;
})(Rc || (Rc = {}));
var vo;
(function(t) {
  t.PlainText = "plaintext", t.Markdown = "markdown";
  function e(n) {
    const r = n;
    return r === t.PlainText || r === t.Markdown;
  }
  t.is = e;
})(vo || (vo = {}));
var Br;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(n) && vo.is(r.kind) && p.string(r.value);
  }
  t.is = e;
})(Br || (Br = {}));
var Ac;
(function(t) {
  t.Text = 1, t.Method = 2, t.Function = 3, t.Constructor = 4, t.Field = 5, t.Variable = 6, t.Class = 7, t.Interface = 8, t.Module = 9, t.Property = 10, t.Unit = 11, t.Value = 12, t.Enum = 13, t.Keyword = 14, t.Snippet = 15, t.Color = 16, t.File = 17, t.Reference = 18, t.Folder = 19, t.EnumMember = 20, t.Constant = 21, t.Struct = 22, t.Event = 23, t.Operator = 24, t.TypeParameter = 25;
})(Ac || (Ac = {}));
var Ec;
(function(t) {
  t.PlainText = 1, t.Snippet = 2;
})(Ec || (Ec = {}));
var xc;
(function(t) {
  t.Deprecated = 1;
})(xc || (xc = {}));
var Sc;
(function(t) {
  function e(r, i, s) {
    return { newText: r, insert: i, replace: s };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i && p.string(i.newText) && L.is(i.insert) && L.is(i.replace);
  }
  t.is = n;
})(Sc || (Sc = {}));
var Ic;
(function(t) {
  t.asIs = 1, t.adjustIndentation = 2;
})(Ic || (Ic = {}));
var wc;
(function(t) {
  function e(n) {
    const r = n;
    return r && (p.string(r.detail) || r.detail === void 0) && (p.string(r.description) || r.description === void 0);
  }
  t.is = e;
})(wc || (wc = {}));
var _c;
(function(t) {
  function e(n) {
    return { label: n };
  }
  t.create = e;
})(_c || (_c = {}));
var Cc;
(function(t) {
  function e(n, r) {
    return { items: n || [], isIncomplete: !!r };
  }
  t.create = e;
})(Cc || (Cc = {}));
var fs;
(function(t) {
  function e(r) {
    return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  t.fromPlainText = e;
  function n(r) {
    const i = r;
    return p.string(i) || p.objectLiteral(i) && p.string(i.language) && p.string(i.value);
  }
  t.is = n;
})(fs || (fs = {}));
var kc;
(function(t) {
  function e(n) {
    let r = n;
    return !!r && p.objectLiteral(r) && (Br.is(r.contents) || fs.is(r.contents) || p.typedArray(r.contents, fs.is)) && (n.range === void 0 || L.is(n.range));
  }
  t.is = e;
})(kc || (kc = {}));
var Nc;
(function(t) {
  function e(n, r) {
    return r ? { label: n, documentation: r } : { label: n };
  }
  t.create = e;
})(Nc || (Nc = {}));
var bc;
(function(t) {
  function e(n, r, ...i) {
    let s = { label: n };
    return p.defined(r) && (s.documentation = r), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  t.create = e;
})(bc || (bc = {}));
var Oc;
(function(t) {
  t.Text = 1, t.Read = 2, t.Write = 3;
})(Oc || (Oc = {}));
var Pc;
(function(t) {
  function e(n, r) {
    let i = { range: n };
    return p.number(r) && (i.kind = r), i;
  }
  t.create = e;
})(Pc || (Pc = {}));
var Lc;
(function(t) {
  t.File = 1, t.Module = 2, t.Namespace = 3, t.Package = 4, t.Class = 5, t.Method = 6, t.Property = 7, t.Field = 8, t.Constructor = 9, t.Enum = 10, t.Interface = 11, t.Function = 12, t.Variable = 13, t.Constant = 14, t.String = 15, t.Number = 16, t.Boolean = 17, t.Array = 18, t.Object = 19, t.Key = 20, t.Null = 21, t.EnumMember = 22, t.Struct = 23, t.Event = 24, t.Operator = 25, t.TypeParameter = 26;
})(Lc || (Lc = {}));
var Mc;
(function(t) {
  t.Deprecated = 1;
})(Mc || (Mc = {}));
var Dc;
(function(t) {
  function e(n, r, i, s, a) {
    let o = {
      name: n,
      kind: r,
      location: { uri: s, range: i }
    };
    return a && (o.containerName = a), o;
  }
  t.create = e;
})(Dc || (Dc = {}));
var Fc;
(function(t) {
  function e(n, r, i, s) {
    return s !== void 0 ? { name: n, kind: r, location: { uri: i, range: s } } : { name: n, kind: r, location: { uri: i } };
  }
  t.create = e;
})(Fc || (Fc = {}));
var Gc;
(function(t) {
  function e(r, i, s, a, o, l) {
    let u = {
      name: r,
      detail: i,
      kind: s,
      range: a,
      selectionRange: o
    };
    return l !== void 0 && (u.children = l), u;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && p.string(i.name) && p.number(i.kind) && L.is(i.range) && L.is(i.selectionRange) && (i.detail === void 0 || p.string(i.detail)) && (i.deprecated === void 0 || p.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  t.is = n;
})(Gc || (Gc = {}));
var Uc;
(function(t) {
  t.Empty = "", t.QuickFix = "quickfix", t.Refactor = "refactor", t.RefactorExtract = "refactor.extract", t.RefactorInline = "refactor.inline", t.RefactorRewrite = "refactor.rewrite", t.Source = "source", t.SourceOrganizeImports = "source.organizeImports", t.SourceFixAll = "source.fixAll";
})(Uc || (Uc = {}));
var ds;
(function(t) {
  t.Invoked = 1, t.Automatic = 2;
})(ds || (ds = {}));
var Bc;
(function(t) {
  function e(r, i, s) {
    let a = { diagnostics: r };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.typedArray(i.diagnostics, cs.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === ds.Invoked || i.triggerKind === ds.Automatic);
  }
  t.is = n;
})(Bc || (Bc = {}));
var jc;
(function(t) {
  function e(r, i, s) {
    let a = { title: r }, o = !0;
    return typeof i == "string" ? (o = !1, a.kind = i) : Dn.is(i) ? a.command = i : a.edit = i, o && s !== void 0 && (a.kind = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, cs.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Dn.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || yo.is(i.edit));
  }
  t.is = n;
})(jc || (jc = {}));
var Kc;
(function(t) {
  function e(r, i) {
    let s = { range: r };
    return p.defined(i) && (s.data = i), s;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && L.is(i.range) && (p.undefined(i.command) || Dn.is(i.command));
  }
  t.is = n;
})(Kc || (Kc = {}));
var Hc;
(function(t) {
  function e(r, i) {
    return { tabSize: r, insertSpaces: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.uinteger(i.tabSize) && p.boolean(i.insertSpaces);
  }
  t.is = n;
})(Hc || (Hc = {}));
var Wc;
(function(t) {
  function e(r, i, s) {
    return { range: r, target: i, data: s };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && L.is(i.range) && (p.undefined(i.target) || p.string(i.target));
  }
  t.is = n;
})(Wc || (Wc = {}));
var zc;
(function(t) {
  function e(r, i) {
    return { range: r, parent: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.objectLiteral(i) && L.is(i.range) && (i.parent === void 0 || t.is(i.parent));
  }
  t.is = n;
})(zc || (zc = {}));
var Vc;
(function(t) {
  t.namespace = "namespace", t.type = "type", t.class = "class", t.enum = "enum", t.interface = "interface", t.struct = "struct", t.typeParameter = "typeParameter", t.parameter = "parameter", t.variable = "variable", t.property = "property", t.enumMember = "enumMember", t.event = "event", t.function = "function", t.method = "method", t.macro = "macro", t.keyword = "keyword", t.modifier = "modifier", t.comment = "comment", t.string = "string", t.number = "number", t.regexp = "regexp", t.operator = "operator", t.decorator = "decorator";
})(Vc || (Vc = {}));
var qc;
(function(t) {
  t.declaration = "declaration", t.definition = "definition", t.readonly = "readonly", t.static = "static", t.deprecated = "deprecated", t.abstract = "abstract", t.async = "async", t.modification = "modification", t.documentation = "documentation", t.defaultLibrary = "defaultLibrary";
})(qc || (qc = {}));
var Yc;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  t.is = e;
})(Yc || (Yc = {}));
var Xc;
(function(t) {
  function e(r, i) {
    return { range: r, text: i };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i != null && L.is(i.range) && p.string(i.text);
  }
  t.is = n;
})(Xc || (Xc = {}));
var Jc;
(function(t) {
  function e(r, i, s) {
    return { range: r, variableName: i, caseSensitiveLookup: s };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i != null && L.is(i.range) && p.boolean(i.caseSensitiveLookup) && (p.string(i.variableName) || i.variableName === void 0);
  }
  t.is = n;
})(Jc || (Jc = {}));
var Zc;
(function(t) {
  function e(r, i) {
    return { range: r, expression: i };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return i != null && L.is(i.range) && (p.string(i.expression) || i.expression === void 0);
  }
  t.is = n;
})(Zc || (Zc = {}));
var Qc;
(function(t) {
  function e(r, i) {
    return { frameId: r, stoppedLocation: i };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.defined(i) && L.is(r.stoppedLocation);
  }
  t.is = n;
})(Qc || (Qc = {}));
var $o;
(function(t) {
  t.Type = 1, t.Parameter = 2;
  function e(n) {
    return n === 1 || n === 2;
  }
  t.is = e;
})($o || ($o = {}));
var Ro;
(function(t) {
  function e(r) {
    return { value: r };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || Br.is(i.tooltip)) && (i.location === void 0 || us.is(i.location)) && (i.command === void 0 || Dn.is(i.command));
  }
  t.is = n;
})(Ro || (Ro = {}));
var ef;
(function(t) {
  function e(r, i, s) {
    const a = { position: r, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && D.is(i.position) && (p.string(i.label) || p.typedArray(i.label, Ro.is)) && (i.kind === void 0 || $o.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, Fn.is) && (i.tooltip === void 0 || p.string(i.tooltip) || Br.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  t.is = n;
})(ef || (ef = {}));
var tf;
(function(t) {
  function e(n) {
    return { kind: "snippet", value: n };
  }
  t.createSnippet = e;
})(tf || (tf = {}));
var nf;
(function(t) {
  function e(n, r, i, s) {
    return { insertText: n, filterText: r, range: i, command: s };
  }
  t.create = e;
})(nf || (nf = {}));
var rf;
(function(t) {
  function e(n) {
    return { items: n };
  }
  t.create = e;
})(rf || (rf = {}));
var sf;
(function(t) {
  t.Invoked = 0, t.Automatic = 1;
})(sf || (sf = {}));
var af;
(function(t) {
  function e(n, r) {
    return { range: n, text: r };
  }
  t.create = e;
})(af || (af = {}));
var of;
(function(t) {
  function e(n, r) {
    return { triggerKind: n, selectedCompletionInfo: r };
  }
  t.create = e;
})(of || (of = {}));
var lf;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && lo.is(r.uri) && p.string(r.name);
  }
  t.is = e;
})(lf || (lf = {}));
var uf;
(function(t) {
  function e(s, a, o, l) {
    return new y_(s, a, o, l);
  }
  t.create = e;
  function n(s) {
    let a = s;
    return !!(p.defined(a) && p.string(a.uri) && (p.undefined(a.languageId) || p.string(a.languageId)) && p.uinteger(a.lineCount) && p.func(a.getText) && p.func(a.positionAt) && p.func(a.offsetAt));
  }
  t.is = n;
  function r(s, a) {
    let o = s.getText(), l = i(a, (c, f) => {
      let d = c.range.start.line - f.range.start.line;
      return d === 0 ? c.range.start.character - f.range.start.character : d;
    }), u = o.length;
    for (let c = l.length - 1; c >= 0; c--) {
      let f = l[c], d = s.offsetAt(f.range.start), h = s.offsetAt(f.range.end);
      if (h <= u)
        o = o.substring(0, d) + f.newText + o.substring(h, o.length);
      else
        throw new Error("Overlapping edit");
      u = d;
    }
    return o;
  }
  t.applyEdits = r;
  function i(s, a) {
    if (s.length <= 1)
      return s;
    const o = s.length / 2 | 0, l = s.slice(0, o), u = s.slice(o);
    i(l, a), i(u, a);
    let c = 0, f = 0, d = 0;
    for (; c < l.length && f < u.length; )
      a(l[c], u[f]) <= 0 ? s[d++] = l[c++] : s[d++] = u[f++];
    for (; c < l.length; )
      s[d++] = l[c++];
    for (; f < u.length; )
      s[d++] = u[f++];
    return s;
  }
})(uf || (uf = {}));
let y_ = class {
  constructor(e, n, r, i) {
    this._uri = e, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let n = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(n, r);
    }
    return this._content;
  }
  update(e, n) {
    this._content = e.text, this._version = n, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], n = this._content, r = !0;
      for (let i = 0; i < n.length; i++) {
        r && (e.push(i), r = !1);
        let s = n.charAt(i);
        r = s === "\r" || s === `
`, s === "\r" && i + 1 < n.length && n.charAt(i + 1) === `
` && i++;
      }
      r && n.length > 0 && e.push(n.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let n = this.getLineOffsets(), r = 0, i = n.length;
    if (i === 0)
      return D.create(0, e);
    for (; r < i; ) {
      let a = Math.floor((r + i) / 2);
      n[a] > e ? i = a : r = a + 1;
    }
    let s = r - 1;
    return D.create(s, e - n[s]);
  }
  offsetAt(e) {
    let n = this.getLineOffsets();
    if (e.line >= n.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let r = n[e.line], i = e.line + 1 < n.length ? n[e.line + 1] : this._content.length;
    return Math.max(Math.min(r + e.character, i), r);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var p;
(function(t) {
  const e = Object.prototype.toString;
  function n(h) {
    return typeof h < "u";
  }
  t.defined = n;
  function r(h) {
    return typeof h > "u";
  }
  t.undefined = r;
  function i(h) {
    return h === !0 || h === !1;
  }
  t.boolean = i;
  function s(h) {
    return e.call(h) === "[object String]";
  }
  t.string = s;
  function a(h) {
    return e.call(h) === "[object Number]";
  }
  t.number = a;
  function o(h, m, g) {
    return e.call(h) === "[object Number]" && m <= h && h <= g;
  }
  t.numberRange = o;
  function l(h) {
    return e.call(h) === "[object Number]" && -2147483648 <= h && h <= 2147483647;
  }
  t.integer = l;
  function u(h) {
    return e.call(h) === "[object Number]" && 0 <= h && h <= 2147483647;
  }
  t.uinteger = u;
  function c(h) {
    return e.call(h) === "[object Function]";
  }
  t.func = c;
  function f(h) {
    return h !== null && typeof h == "object";
  }
  t.objectLiteral = f;
  function d(h, m) {
    return Array.isArray(h) && h.every(m);
  }
  t.typedArray = d;
})(p || (p = {}));
class T_ {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new jh(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const n = new vl();
    return n.grammarSource = e, n.root = this.rootNode, this.current.content.push(n), this.nodeStack.push(n), n;
  }
  buildLeafNode(e, n) {
    const r = new Ao(e.startOffset, e.image.length, Fa(e), e.tokenType, !n);
    return r.grammarSource = n, r.root = this.rootNode, this.current.content.push(r), r;
  }
  removeNode(e) {
    const n = e.container;
    if (n) {
      const r = n.content.indexOf(e);
      r >= 0 && n.content.splice(r, 1);
    }
  }
  addHiddenNodes(e) {
    const n = [];
    for (const s of e) {
      const a = new Ao(s.startOffset, s.image.length, Fa(s), s.tokenType, !0);
      a.root = this.rootNode, n.push(a);
    }
    let r = this.current, i = !1;
    if (r.content.length > 0) {
      r.content.push(...n);
      return;
    }
    for (; r.container; ) {
      const s = r.container.content.indexOf(r);
      if (s > 0) {
        r.container.content.splice(s, 0, ...n), i = !0;
        break;
      }
      r = r.container;
    }
    i || this.rootNode.content.unshift(...n);
  }
  construct(e) {
    const n = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = n;
    const r = this.nodeStack.pop();
    r?.content.length === 0 && this.removeNode(r);
  }
}
class Bh {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return !1;
  }
  get astNode() {
    var e, n;
    const r = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (n = this.container) === null || n === void 0 ? void 0 : n.astNode;
    if (!r)
      throw new Error("This node has no associated AST element");
    return r;
  }
  set astNode(e) {
    this._astNode = e;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}
class Ao extends Bh {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, n, r, i, s = !1) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = n, this._range = r;
  }
}
class vl extends Bh {
  constructor() {
    super(...arguments), this.content = new $l(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var e, n;
    return (n = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && n !== void 0 ? n : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, n;
    return (n = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && n !== void 0 ? n : 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, n = this.lastNonHiddenNode;
    if (e && n) {
      if (this._rangeCache === void 0) {
        const { range: r } = e, { range: i } = n;
        this._rangeCache = { start: r.start, end: i.end.line < r.start.line ? r.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: D.create(0, 0), end: D.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const n = this.content[e];
      if (!n.hidden)
        return n;
    }
    return this.content[this.content.length - 1];
  }
}
class $l extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, $l.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, n, ...r) {
    return this.addParents(r), super.splice(e, n, ...r);
  }
  addParents(e) {
    for (const n of e)
      n.container = this.parent;
  }
}
class jh extends vl {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}
const Eo = /* @__PURE__ */ Symbol("Datatype");
function Ra(t) {
  return t.$type === Eo;
}
const cf = "​", Kh = (t) => t.endsWith(cf) ? t : t + cf;
class Hh {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const n = this.lexer.definition, r = e.LanguageMetaData.mode === "production";
    this.wrapper = new E_(n, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: r, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
  }
  alternatives(e, n) {
    this.wrapper.wrapOr(e, n);
  }
  optional(e, n) {
    this.wrapper.wrapOption(e, n);
  }
  many(e, n) {
    this.wrapper.wrapMany(e, n);
  }
  atLeastOne(e, n) {
    this.wrapper.wrapAtLeastOne(e, n);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}
class v_ extends Hh {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new T_(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, n) {
    const r = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(Kh(e.name), this.startImplementation(r, n).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (Zf(e))
        return Eo;
      {
        const n = Po(e);
        return n ?? e.name;
      }
    }
  }
  parse(e, n = {}) {
    this.nodeBuilder.buildRootNode(e);
    const r = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = r.tokens;
    const i = n.rule ? this.allRules.get(n.rule) : this.mainRule;
    if (!i)
      throw new Error(n.rule ? `No rule found with name '${n.rule}'` : "No main rule available.");
    const s = i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(r.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: r.errors,
      lexerReport: r.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, n) {
    return (r) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const a = { $type: e };
        this.stack.push(a), e === Eo && (a.value = "");
      }
      let s;
      try {
        s = n(r);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    const n = this.lexerResult.hidden;
    if (!n.length)
      return [];
    const r = e.startOffset;
    for (let i = 0; i < n.length; i++)
      if (n[i].startOffset > r)
        return n.splice(0, i);
    return n.splice(0, n.length);
  }
  consume(e, n, r) {
    const i = this.wrapper.wrapConsume(e, n);
    if (!this.isRecording() && this.isValidToken(i)) {
      const s = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      const a = this.nodeBuilder.buildLeafNode(i, r), { assignment: o, isCrossRef: l } = this.getAssignment(r), u = this.current;
      if (o) {
        const c = Ht(r) ? i.image : this.converter.convert(i.image, a);
        this.assign(o.operator, o.feature, c, a, l);
      } else if (Ra(u)) {
        let c = i.image;
        Ht(r) || (c = this.converter.convert(c, a).toString()), u.value += c;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, n, r, i, s) {
    let a;
    !this.isRecording() && !r && (a = this.nodeBuilder.buildCompositeNode(i));
    const o = this.wrapper.wrapSubrule(e, n, s);
    !this.isRecording() && a && a.length > 0 && this.performSubruleAssignment(o, i, a);
  }
  performSubruleAssignment(e, n, r) {
    const { assignment: i, isCrossRef: s } = this.getAssignment(n);
    if (i)
      this.assign(i.operator, i.feature, e, r, s);
    else if (!i) {
      const a = this.current;
      if (Ra(a))
        a.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, a);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, n) {
    if (!this.isRecording()) {
      let r = this.current;
      if (n.feature && n.operator) {
        r = this.construct(), this.nodeBuilder.removeNode(r.$cstNode), this.nodeBuilder.buildCompositeNode(n).content.push(r.$cstNode);
        const s = { $type: e };
        this.stack.push(s), this.assign(n.operator, n.feature, r, r.$cstNode, !1);
      } else
        r.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.current;
    return um(e), this.nodeBuilder.construct(e), this.stack.pop(), Ra(e) ? this.converter.convert(e.value, e.$cstNode) : (cm(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const n = vs(e, Kt);
      this.assignmentMap.set(e, {
        assignment: n,
        isCrossRef: n ? ko(n.terminal) : !1
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, n, r, i, s) {
    const a = this.current;
    let o;
    switch (s && typeof r == "string" ? o = this.linker.buildReference(a, n, i, r) : o = r, e) {
      case "=": {
        a[n] = o;
        break;
      }
      case "?=": {
        a[n] = !0;
        break;
      }
      case "+=":
        Array.isArray(a[n]) || (a[n] = []), a[n].push(o);
    }
  }
  assignWithoutOverride(e, n) {
    for (const [i, s] of Object.entries(n)) {
      const a = e[i];
      a === void 0 ? e[i] = s : Array.isArray(a) && Array.isArray(s) && (s.push(...a), e[i] = s);
    }
    const r = e.$cstNode;
    return r && (r.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}
class $_ {
  buildMismatchTokenMessage(e) {
    return fn.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return fn.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return fn.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return fn.buildEarlyExitMessage(e);
  }
}
class Wh extends $_ {
  buildMismatchTokenMessage({ expected: e, actual: n }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${n.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}
class R_ extends Hh {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const n = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = n.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, n) {
    const r = this.wrapper.DEFINE_RULE(Kh(e.name), this.startImplementation(n).bind(this));
    return this.allRules.set(e.name, r), e.entry && (this.mainRule = r), r;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (n) => {
      const r = this.keepStackSize();
      try {
        e(n);
      } finally {
        this.resetStackSize(r);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, n, r) {
    this.wrapper.wrapConsume(e, n), this.isRecording() || (this.lastElementStack = [...this.elementStack, r], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, n, r, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, n, s), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const n = this.elementStack.lastIndexOf(e);
      n >= 0 && this.elementStack.splice(n);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}
const A_ = {
  recoveryEnabled: !0,
  nodeLocationTracking: "full",
  skipValidations: !0,
  errorMessageProvider: new Wh()
};
class E_ extends kw {
  constructor(e, n) {
    const r = n && "maxLookahead" in n;
    super(e, Object.assign(Object.assign(Object.assign({}, A_), { lookaheadStrategy: r ? new hl({ maxLookahead: n.maxLookahead }) : new Jw({
      // If validations are skipped, don't log the lookahead warnings
      logging: n.skipValidations ? () => {
      } : void 0
    }) }), n));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, n) {
    return this.RULE(e, n);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, n) {
    return this.consume(e, n);
  }
  wrapSubrule(e, n, r) {
    return this.subrule(e, n, {
      ARGS: [r]
    });
  }
  wrapOr(e, n) {
    this.or(e, n);
  }
  wrapOption(e, n) {
    this.option(e, n);
  }
  wrapMany(e, n) {
    this.many(e, n);
  }
  wrapAtLeastOne(e, n) {
    this.atLeastOne(e, n);
  }
}
function zh(t, e, n) {
  return x_({
    parser: e,
    tokens: n,
    ruleNames: /* @__PURE__ */ new Map()
  }, t), e;
}
function x_(t, e) {
  const n = Vf(e, !1), r = ie(e.rules).filter(Ne).filter((i) => n.has(i));
  for (const i of r) {
    const s = Object.assign(Object.assign({}, t), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    t.parser.rule(i, Yt(s, i.definition));
  }
}
function Yt(t, e, n = !1) {
  let r;
  if (Ht(e))
    r = N_(t, e);
  else if (Ts(e))
    r = S_(t, e);
  else if (Kt(e))
    r = Yt(t, e.terminal);
  else if (ko(e))
    r = Vh(t, e);
  else if (Wt(e))
    r = I_(t, e);
  else if (Bf(e))
    r = __(t, e);
  else if (jf(e))
    r = C_(t, e);
  else if (No(e))
    r = k_(t, e);
  else if (tm(e)) {
    const i = t.consume++;
    r = () => t.parser.consume(i, wt, e);
  } else
    throw new Df(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return qh(t, n ? void 0 : hs(e), r, e.cardinality);
}
function S_(t, e) {
  const n = Lo(e);
  return () => t.parser.action(n, e);
}
function I_(t, e) {
  const n = e.rule.ref;
  if (Ne(n)) {
    const r = t.subrule++, i = n.fragment, s = e.arguments.length > 0 ? w_(n, e.arguments) : () => ({});
    return (a) => t.parser.subrule(r, Yh(t, n), i, e, s(a));
  } else if (Jt(n)) {
    const r = t.consume++, i = xo(t, n.name);
    return () => t.parser.consume(r, i, e);
  } else if (n)
    Kr();
  else
    throw new Df(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function w_(t, e) {
  const n = e.map((r) => at(r.value));
  return (r) => {
    const i = {};
    for (let s = 0; s < n.length; s++) {
      const a = t.parameters[s], o = n[s];
      i[a.name] = o(r);
    }
    return i;
  };
}
function at(t) {
  if (Yp(t)) {
    const e = at(t.left), n = at(t.right);
    return (r) => e(r) || n(r);
  } else if (qp(t)) {
    const e = at(t.left), n = at(t.right);
    return (r) => e(r) && n(r);
  } else if (Xp(t)) {
    const e = at(t.value);
    return (n) => !e(n);
  } else if (Jp(t)) {
    const e = t.parameter.ref.name;
    return (n) => n !== void 0 && n[e] === !0;
  } else if (Vp(t)) {
    const e = !!t.true;
    return () => e;
  }
  Kr();
}
function __(t, e) {
  if (e.elements.length === 1)
    return Yt(t, e.elements[0]);
  {
    const n = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: Yt(t, i, !0)
      }, a = hs(i);
      a && (s.GATE = at(a)), n.push(s);
    }
    const r = t.or++;
    return (i) => t.parser.alternatives(r, n.map((s) => {
      const a = {
        ALT: () => s.ALT(i)
      }, o = s.GATE;
      return o && (a.GATE = () => o(i)), a;
    }));
  }
}
function C_(t, e) {
  if (e.elements.length === 1)
    return Yt(t, e.elements[0]);
  const n = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: Yt(t, o, !0)
    }, u = hs(o);
    u && (l.GATE = at(u)), n.push(l);
  }
  const r = t.or++, i = (o, l) => {
    const u = l.getRuleStack().join("-");
    return `uGroup_${o}_${u}`;
  }, s = (o) => t.parser.alternatives(r, n.map((l, u) => {
    const c = { ALT: () => !0 }, f = t.parser;
    c.ALT = () => {
      if (l.ALT(o), !f.isRecording()) {
        const h = i(r, f);
        f.unorderedGroups.get(h) || f.unorderedGroups.set(h, []);
        const m = f.unorderedGroups.get(h);
        typeof m?.[u] > "u" && (m[u] = !0);
      }
    };
    const d = l.GATE;
    return d ? c.GATE = () => d(o) : c.GATE = () => {
      const h = f.unorderedGroups.get(i(r, f));
      return !h?.[u];
    }, c;
  })), a = qh(t, hs(e), s, "*");
  return (o) => {
    a(o), t.parser.isRecording() || t.parser.unorderedGroups.delete(i(r, t.parser));
  };
}
function k_(t, e) {
  const n = e.elements.map((r) => Yt(t, r));
  return (r) => n.forEach((i) => i(r));
}
function hs(t) {
  if (No(t))
    return t.guardCondition;
}
function Vh(t, e, n = e.terminal) {
  if (n)
    if (Wt(n) && Ne(n.rule.ref)) {
      const r = n.rule.ref, i = t.subrule++;
      return (s) => t.parser.subrule(i, Yh(t, r), !1, e, s);
    } else if (Wt(n) && Jt(n.rule.ref)) {
      const r = t.consume++, i = xo(t, n.rule.ref.name);
      return () => t.parser.consume(r, i, e);
    } else if (Ht(n)) {
      const r = t.consume++, i = xo(t, n.value);
      return () => t.parser.consume(r, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const r = Xf(e.type.ref), i = r?.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Lo(e.type.ref));
    return Vh(t, e, i);
  }
}
function N_(t, e) {
  const n = t.consume++, r = t.tokens[e.value];
  if (!r)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => t.parser.consume(n, r, e);
}
function qh(t, e, n, r) {
  const i = e && at(e);
  if (!r)
    if (i) {
      const s = t.or++;
      return (a) => t.parser.alternatives(s, [
        {
          ALT: () => n(a),
          GATE: () => i(a)
        },
        {
          ALT: ic(),
          GATE: () => !i(a)
        }
      ]);
    } else
      return n;
  if (r === "*") {
    const s = t.many++;
    return (a) => t.parser.many(s, {
      DEF: () => n(a),
      GATE: i ? () => i(a) : void 0
    });
  } else if (r === "+") {
    const s = t.many++;
    if (i) {
      const a = t.or++;
      return (o) => t.parser.alternatives(a, [
        {
          ALT: () => t.parser.atLeastOne(s, {
            DEF: () => n(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: ic(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (a) => t.parser.atLeastOne(s, {
        DEF: () => n(a)
      });
  } else if (r === "?") {
    const s = t.optional++;
    return (a) => t.parser.optional(s, {
      DEF: () => n(a),
      GATE: i ? () => i(a) : void 0
    });
  } else
    Kr();
}
function Yh(t, e) {
  const n = b_(t, e), r = t.parser.getRule(n);
  if (!r)
    throw new Error(`Rule "${n}" not found."`);
  return r;
}
function b_(t, e) {
  if (Ne(e))
    return e.name;
  if (t.ruleNames.has(e))
    return t.ruleNames.get(e);
  {
    let n = e, r = n.$container, i = e.$type;
    for (; !Ne(r); )
      (No(r) || Bf(r) || jf(r)) && (i = r.elements.indexOf(n).toString() + ":" + i), n = r, r = r.$container;
    return i = r.name + ":" + i, t.ruleNames.set(e, i), i;
  }
}
function xo(t, e) {
  const n = t.tokens[e];
  if (!n)
    throw new Error(`Token "${e}" not found."`);
  return n;
}
function O_(t) {
  const e = t.Grammar, n = t.parser.Lexer, r = new R_(t);
  return zh(e, r, n.definition), r.finalize(), r;
}
function P_(t) {
  const e = L_(t);
  return e.finalize(), e;
}
function L_(t) {
  const e = t.Grammar, n = t.parser.Lexer, r = new v_(t);
  return zh(e, r, n.definition);
}
class Xh {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, n) {
    const r = ie(Vf(e, !1)), i = this.buildTerminalTokens(r), s = this.buildKeywordTokens(r, i, n);
    return i.forEach((a) => {
      const o = a.PATTERN;
      typeof o == "object" && o && "test" in o && Ua(o) ? s.unshift(a) : s.push(a);
    }), s;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(Jt).filter((n) => !n.fragment).map((n) => this.buildTerminalToken(n)).toArray();
  }
  buildTerminalToken(e) {
    const n = Mo(e), r = this.requiresCustomPattern(n) ? this.regexPatternFunction(n) : n, i = {
      name: e.name,
      PATTERN: r
    };
    return typeof r == "function" && (i.LINE_BREAKS = !0), e.hidden && (i.GROUP = Ua(n) ? he.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? !0 : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const n = new RegExp(e, e.flags + "y");
    return (r, i) => (n.lastIndex = i, n.exec(r));
  }
  buildKeywordTokens(e, n, r) {
    return e.filter(Ne).flatMap((i) => Hr(i).filter(Ht)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, n, !!r?.caseInsensitive));
  }
  buildKeywordToken(e, n, r) {
    const i = this.buildKeywordPattern(e, r), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, n)
    };
    return typeof i == "function" && (s.LINE_BREAKS = !0), s;
  }
  buildKeywordPattern(e, n) {
    return n ? new RegExp(vm(e.value)) : e.value;
  }
  findLongerAlt(e, n) {
    return n.reduce((r, i) => {
      const s = i?.PATTERN;
      return s?.source && $m("^" + s.source + "$", e.value) && r.push(i), r;
    }, []);
  }
}
class Jh {
  convert(e, n) {
    let r = n.grammarSource;
    if (ko(r) && (r = xm(r)), Wt(r)) {
      const i = r.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, n);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, n, r) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return rt.convertInt(n);
      case "STRING":
        return rt.convertString(n);
      case "ID":
        return rt.convertID(n);
    }
    switch ((i = Nm(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return rt.convertNumber(n);
      case "boolean":
        return rt.convertBoolean(n);
      case "bigint":
        return rt.convertBigint(n);
      case "date":
        return rt.convertDate(n);
      default:
        return n;
    }
  }
}
var rt;
(function(t) {
  function e(u) {
    let c = "";
    for (let f = 1; f < u.length - 1; f++) {
      const d = u.charAt(f);
      if (d === "\\") {
        const h = u.charAt(++f);
        c += n(h);
      } else
        c += d;
    }
    return c;
  }
  t.convertString = e;
  function n(u) {
    switch (u) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return u;
    }
  }
  function r(u) {
    return u.charAt(0) === "^" ? u.substring(1) : u;
  }
  t.convertID = r;
  function i(u) {
    return parseInt(u);
  }
  t.convertInt = i;
  function s(u) {
    return BigInt(u);
  }
  t.convertBigint = s;
  function a(u) {
    return new Date(u);
  }
  t.convertDate = a;
  function o(u) {
    return Number(u);
  }
  t.convertNumber = o;
  function l(u) {
    return u.toLowerCase() === "true";
  }
  t.convertBoolean = l;
})(rt || (rt = {}));
var Ut = {}, vi = {}, ff;
function Zh() {
  if (ff) return vi;
  ff = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
  let t;
  function e() {
    if (t === void 0)
      throw new Error("No runtime abstraction layer installed");
    return t;
  }
  return (function(n) {
    function r(i) {
      if (i === void 0)
        throw new Error("No runtime abstraction layer provided");
      t = i;
    }
    n.install = r;
  })(e || (e = {})), vi.default = e, vi;
}
var te = {}, df;
function M_() {
  if (df) return te;
  df = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.stringArray = te.array = te.func = te.error = te.number = te.string = te.boolean = void 0;
  function t(o) {
    return o === !0 || o === !1;
  }
  te.boolean = t;
  function e(o) {
    return typeof o == "string" || o instanceof String;
  }
  te.string = e;
  function n(o) {
    return typeof o == "number" || o instanceof Number;
  }
  te.number = n;
  function r(o) {
    return o instanceof Error;
  }
  te.error = r;
  function i(o) {
    return typeof o == "function";
  }
  te.func = i;
  function s(o) {
    return Array.isArray(o);
  }
  te.array = s;
  function a(o) {
    return s(o) && o.every((l) => e(l));
  }
  return te.stringArray = a, te;
}
var Bt = {}, hf;
function Qh() {
  if (hf) return Bt;
  hf = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.Emitter = Bt.Event = void 0;
  const t = Zh();
  var e;
  (function(i) {
    const s = { dispose() {
    } };
    i.None = function() {
      return s;
    };
  })(e || (Bt.Event = e = {}));
  class n {
    add(s, a = null, o) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(s), this._contexts.push(a), Array.isArray(o) && o.push({ dispose: () => this.remove(s, a) });
    }
    remove(s, a = null) {
      if (!this._callbacks)
        return;
      let o = !1;
      for (let l = 0, u = this._callbacks.length; l < u; l++)
        if (this._callbacks[l] === s)
          if (this._contexts[l] === a) {
            this._callbacks.splice(l, 1), this._contexts.splice(l, 1);
            return;
          } else
            o = !0;
      if (o)
        throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...s) {
      if (!this._callbacks)
        return [];
      const a = [], o = this._callbacks.slice(0), l = this._contexts.slice(0);
      for (let u = 0, c = o.length; u < c; u++)
        try {
          a.push(o[u].apply(l[u], s));
        } catch (f) {
          (0, t.default)().console.error(f);
        }
      return a;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class r {
    constructor(s) {
      this._options = s;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
      return this._event || (this._event = (s, a, o) => {
        this._callbacks || (this._callbacks = new n()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(s, a);
        const l = {
          dispose: () => {
            this._callbacks && (this._callbacks.remove(s, a), l.dispose = r._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
          }
        };
        return Array.isArray(o) && o.push(l), l;
      }), this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(s) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, s);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  }
  return Bt.Emitter = r, r._noop = function() {
  }, Bt;
}
var pf;
function D_() {
  if (pf) return Ut;
  pf = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.CancellationTokenSource = Ut.CancellationToken = void 0;
  const t = Zh(), e = M_(), n = Qh();
  var r;
  (function(o) {
    o.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: n.Event.None
    }), o.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: n.Event.None
    });
    function l(u) {
      const c = u;
      return c && (c === o.None || c === o.Cancelled || e.boolean(c.isCancellationRequested) && !!c.onCancellationRequested);
    }
    o.is = l;
  })(r || (Ut.CancellationToken = r = {}));
  const i = Object.freeze(function(o, l) {
    const u = (0, t.default)().timer.setTimeout(o.bind(l), 0);
    return { dispose() {
      u.dispose();
    } };
  });
  class s {
    constructor() {
      this._isCancelled = !1;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? i : (this._emitter || (this._emitter = new n.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }
  class a {
    get token() {
      return this._token || (this._token = new s()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = r.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof s && this._token.dispose() : this._token = r.None;
    }
  }
  return Ut.CancellationTokenSource = a, Ut;
}
var z = D_();
function F_() {
  return new Promise((t) => {
    typeof setImmediate > "u" ? setTimeout(t, 0) : setImmediate(t);
  });
}
let Li = 0, G_ = 10;
function U_() {
  return Li = performance.now(), new z.CancellationTokenSource();
}
const ps = /* @__PURE__ */ Symbol("OperationCancelled");
function Js(t) {
  return t === ps;
}
async function Ee(t) {
  if (t === z.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - Li >= G_ && (Li = e, await F_(), Li = performance.now()), t.isCancellationRequested)
    throw ps;
}
class Rl {
  constructor() {
    this.promise = new Promise((e, n) => {
      this.resolve = (r) => (e(r), this), this.reject = (r) => (n(r), this);
    });
  }
}
class jr {
  constructor(e, n, r, i) {
    this._uri = e, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const n = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(n, r);
    }
    return this._content;
  }
  update(e, n) {
    for (const r of e)
      if (jr.isIncremental(r)) {
        const i = tp(r.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let u = this._lineOffsets;
        const c = mf(r.text, !1, s);
        if (l - o === c.length)
          for (let d = 0, h = c.length; d < h; d++)
            u[d + o + 1] = c[d];
        else
          c.length < 1e4 ? u.splice(o + 1, l - o, ...c) : this._lineOffsets = u = u.slice(0, o + 1).concat(c, u.slice(l + 1));
        const f = r.text.length - (a - s);
        if (f !== 0)
          for (let d = o + 1 + c.length, h = u.length; d < h; d++)
            u[d] = u[d] + f;
      } else if (jr.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = mf(this._content, !0)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const n = this.getLineOffsets();
    let r = 0, i = n.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; r < i; ) {
      const a = Math.floor((r + i) / 2);
      n[a] > e ? i = a : r = a + 1;
    }
    const s = r - 1;
    return e = this.ensureBeforeEOL(e, n[s]), { line: s, character: e - n[s] };
  }
  offsetAt(e) {
    const n = this.getLineOffsets();
    if (e.line >= n.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const r = n[e.line];
    if (e.character <= 0)
      return r;
    const i = e.line + 1 < n.length ? n[e.line + 1] : this._content.length, s = Math.min(r + e.character, i);
    return this.ensureBeforeEOL(s, r);
  }
  ensureBeforeEOL(e, n) {
    for (; e > n && ep(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const n = e;
    return n != null && typeof n.text == "string" && n.range !== void 0 && (n.rangeLength === void 0 || typeof n.rangeLength == "number");
  }
  static isFull(e) {
    const n = e;
    return n != null && typeof n.text == "string" && n.range === void 0 && n.rangeLength === void 0;
  }
}
var So;
(function(t) {
  function e(i, s, a, o) {
    return new jr(i, s, a, o);
  }
  t.create = e;
  function n(i, s, a) {
    if (i instanceof jr)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  t.update = n;
  function r(i, s) {
    const a = i.getText(), o = Io(s.map(B_), (c, f) => {
      const d = c.range.start.line - f.range.start.line;
      return d === 0 ? c.range.start.character - f.range.start.character : d;
    });
    let l = 0;
    const u = [];
    for (const c of o) {
      const f = i.offsetAt(c.range.start);
      if (f < l)
        throw new Error("Overlapping edit");
      f > l && u.push(a.substring(l, f)), c.newText.length && u.push(c.newText), l = i.offsetAt(c.range.end);
    }
    return u.push(a.substr(l)), u.join("");
  }
  t.applyEdits = r;
})(So || (So = {}));
function Io(t, e) {
  if (t.length <= 1)
    return t;
  const n = t.length / 2 | 0, r = t.slice(0, n), i = t.slice(n);
  Io(r, e), Io(i, e);
  let s = 0, a = 0, o = 0;
  for (; s < r.length && a < i.length; )
    e(r[s], i[a]) <= 0 ? t[o++] = r[s++] : t[o++] = i[a++];
  for (; s < r.length; )
    t[o++] = r[s++];
  for (; a < i.length; )
    t[o++] = i[a++];
  return t;
}
function mf(t, e, n = 0) {
  const r = e ? [n] : [];
  for (let i = 0; i < t.length; i++) {
    const s = t.charCodeAt(i);
    ep(s) && (s === 13 && i + 1 < t.length && t.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function ep(t) {
  return t === 13 || t === 10;
}
function tp(t) {
  const e = t.start, n = t.end;
  return e.line > n.line || e.line === n.line && e.character > n.character ? { start: n, end: e } : t;
}
function B_(t) {
  const e = tp(t.range);
  return e !== t.range ? { newText: t.newText, range: e } : t;
}
var np;
(() => {
  var t = { 470: (i) => {
    function s(l) {
      if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
    }
    function a(l, u) {
      for (var c, f = "", d = 0, h = -1, m = 0, g = 0; g <= l.length; ++g) {
        if (g < l.length) c = l.charCodeAt(g);
        else {
          if (c === 47) break;
          c = 47;
        }
        if (c === 47) {
          if (!(h === g - 1 || m === 1)) if (h !== g - 1 && m === 2) {
            if (f.length < 2 || d !== 2 || f.charCodeAt(f.length - 1) !== 46 || f.charCodeAt(f.length - 2) !== 46) {
              if (f.length > 2) {
                var v = f.lastIndexOf("/");
                if (v !== f.length - 1) {
                  v === -1 ? (f = "", d = 0) : d = (f = f.slice(0, v)).length - 1 - f.lastIndexOf("/"), h = g, m = 0;
                  continue;
                }
              } else if (f.length === 2 || f.length === 1) {
                f = "", d = 0, h = g, m = 0;
                continue;
              }
            }
            u && (f.length > 0 ? f += "/.." : f = "..", d = 2);
          } else f.length > 0 ? f += "/" + l.slice(h + 1, g) : f = l.slice(h + 1, g), d = g - h - 1;
          h = g, m = 0;
        } else c === 46 && m !== -1 ? ++m : m = -1;
      }
      return f;
    }
    var o = { resolve: function() {
      for (var l, u = "", c = !1, f = arguments.length - 1; f >= -1 && !c; f--) {
        var d;
        f >= 0 ? d = arguments[f] : (l === void 0 && (l = process.cwd()), d = l), s(d), d.length !== 0 && (u = d + "/" + u, c = d.charCodeAt(0) === 47);
      }
      return u = a(u, !c), c ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
    }, normalize: function(l) {
      if (s(l), l.length === 0) return ".";
      var u = l.charCodeAt(0) === 47, c = l.charCodeAt(l.length - 1) === 47;
      return (l = a(l, !u)).length !== 0 || u || (l = "."), l.length > 0 && c && (l += "/"), u ? "/" + l : l;
    }, isAbsolute: function(l) {
      return s(l), l.length > 0 && l.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var l, u = 0; u < arguments.length; ++u) {
        var c = arguments[u];
        s(c), c.length > 0 && (l === void 0 ? l = c : l += "/" + c);
      }
      return l === void 0 ? "." : o.normalize(l);
    }, relative: function(l, u) {
      if (s(l), s(u), l === u || (l = o.resolve(l)) === (u = o.resolve(u))) return "";
      for (var c = 1; c < l.length && l.charCodeAt(c) === 47; ++c) ;
      for (var f = l.length, d = f - c, h = 1; h < u.length && u.charCodeAt(h) === 47; ++h) ;
      for (var m = u.length - h, g = d < m ? d : m, v = -1, y = 0; y <= g; ++y) {
        if (y === g) {
          if (m > g) {
            if (u.charCodeAt(h + y) === 47) return u.slice(h + y + 1);
            if (y === 0) return u.slice(h + y);
          } else d > g && (l.charCodeAt(c + y) === 47 ? v = y : y === 0 && (v = 0));
          break;
        }
        var R = l.charCodeAt(c + y);
        if (R !== u.charCodeAt(h + y)) break;
        R === 47 && (v = y);
      }
      var $ = "";
      for (y = c + v + 1; y <= f; ++y) y !== f && l.charCodeAt(y) !== 47 || ($.length === 0 ? $ += ".." : $ += "/..");
      return $.length > 0 ? $ + u.slice(h + v) : (h += v, u.charCodeAt(h) === 47 && ++h, u.slice(h));
    }, _makeLong: function(l) {
      return l;
    }, dirname: function(l) {
      if (s(l), l.length === 0) return ".";
      for (var u = l.charCodeAt(0), c = u === 47, f = -1, d = !0, h = l.length - 1; h >= 1; --h) if ((u = l.charCodeAt(h)) === 47) {
        if (!d) {
          f = h;
          break;
        }
      } else d = !1;
      return f === -1 ? c ? "/" : "." : c && f === 1 ? "//" : l.slice(0, f);
    }, basename: function(l, u) {
      if (u !== void 0 && typeof u != "string") throw new TypeError('"ext" argument must be a string');
      s(l);
      var c, f = 0, d = -1, h = !0;
      if (u !== void 0 && u.length > 0 && u.length <= l.length) {
        if (u.length === l.length && u === l) return "";
        var m = u.length - 1, g = -1;
        for (c = l.length - 1; c >= 0; --c) {
          var v = l.charCodeAt(c);
          if (v === 47) {
            if (!h) {
              f = c + 1;
              break;
            }
          } else g === -1 && (h = !1, g = c + 1), m >= 0 && (v === u.charCodeAt(m) ? --m == -1 && (d = c) : (m = -1, d = g));
        }
        return f === d ? d = g : d === -1 && (d = l.length), l.slice(f, d);
      }
      for (c = l.length - 1; c >= 0; --c) if (l.charCodeAt(c) === 47) {
        if (!h) {
          f = c + 1;
          break;
        }
      } else d === -1 && (h = !1, d = c + 1);
      return d === -1 ? "" : l.slice(f, d);
    }, extname: function(l) {
      s(l);
      for (var u = -1, c = 0, f = -1, d = !0, h = 0, m = l.length - 1; m >= 0; --m) {
        var g = l.charCodeAt(m);
        if (g !== 47) f === -1 && (d = !1, f = m + 1), g === 46 ? u === -1 ? u = m : h !== 1 && (h = 1) : u !== -1 && (h = -1);
        else if (!d) {
          c = m + 1;
          break;
        }
      }
      return u === -1 || f === -1 || h === 0 || h === 1 && u === f - 1 && u === c + 1 ? "" : l.slice(u, f);
    }, format: function(l) {
      if (l === null || typeof l != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof l);
      return (function(u, c) {
        var f = c.dir || c.root, d = c.base || (c.name || "") + (c.ext || "");
        return f ? f === c.root ? f + d : f + "/" + d : d;
      })(0, l);
    }, parse: function(l) {
      s(l);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (l.length === 0) return u;
      var c, f = l.charCodeAt(0), d = f === 47;
      d ? (u.root = "/", c = 1) : c = 0;
      for (var h = -1, m = 0, g = -1, v = !0, y = l.length - 1, R = 0; y >= c; --y) if ((f = l.charCodeAt(y)) !== 47) g === -1 && (v = !1, g = y + 1), f === 46 ? h === -1 ? h = y : R !== 1 && (R = 1) : h !== -1 && (R = -1);
      else if (!v) {
        m = y + 1;
        break;
      }
      return h === -1 || g === -1 || R === 0 || R === 1 && h === g - 1 && h === m + 1 ? g !== -1 && (u.base = u.name = m === 0 && d ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && d ? (u.name = l.slice(1, h), u.base = l.slice(1, g)) : (u.name = l.slice(m, h), u.base = l.slice(m, g)), u.ext = l.slice(h, g)), m > 0 ? u.dir = l.slice(0, m - 1) : d && (u.dir = "/"), u;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    o.posix = o, i.exports = o;
  } }, e = {};
  function n(i) {
    var s = e[i];
    if (s !== void 0) return s.exports;
    var a = e[i] = { exports: {} };
    return t[i](a, a.exports, n), a.exports;
  }
  n.d = (i, s) => {
    for (var a in s) n.o(s, a) && !n.o(i, a) && Object.defineProperty(i, a, { enumerable: !0, get: s[a] });
  }, n.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), n.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
  };
  var r = {};
  (() => {
    let i;
    n.r(r), n.d(r, { URI: () => d, Utils: () => we }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, o = /^\/\//;
    function l(E, T) {
      if (!E.scheme && T) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${E.authority}", path: "${E.path}", query: "${E.query}", fragment: "${E.fragment}"}`);
      if (E.scheme && !s.test(E.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (E.path) {
        if (E.authority) {
          if (!a.test(E.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(E.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const u = "", c = "/", f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class d {
      static isUri(T) {
        return T instanceof d || !!T && typeof T.authority == "string" && typeof T.fragment == "string" && typeof T.path == "string" && typeof T.query == "string" && typeof T.scheme == "string" && typeof T.fsPath == "string" && typeof T.with == "function" && typeof T.toString == "function";
      }
      scheme;
      authority;
      path;
      query;
      fragment;
      constructor(T, I, S, P, b, N = !1) {
        typeof T == "object" ? (this.scheme = T.scheme || u, this.authority = T.authority || u, this.path = T.path || u, this.query = T.query || u, this.fragment = T.fragment || u) : (this.scheme = /* @__PURE__ */ (function($e, Q) {
          return $e || Q ? $e : "file";
        })(T, N), this.authority = I || u, this.path = (function($e, Q) {
          switch ($e) {
            case "https":
            case "http":
            case "file":
              Q ? Q[0] !== c && (Q = c + Q) : Q = c;
          }
          return Q;
        })(this.scheme, S || u), this.query = P || u, this.fragment = b || u, l(this, N));
      }
      get fsPath() {
        return R(this);
      }
      with(T) {
        if (!T) return this;
        let { scheme: I, authority: S, path: P, query: b, fragment: N } = T;
        return I === void 0 ? I = this.scheme : I === null && (I = u), S === void 0 ? S = this.authority : S === null && (S = u), P === void 0 ? P = this.path : P === null && (P = u), b === void 0 ? b = this.query : b === null && (b = u), N === void 0 ? N = this.fragment : N === null && (N = u), I === this.scheme && S === this.authority && P === this.path && b === this.query && N === this.fragment ? this : new m(I, S, P, b, N);
      }
      static parse(T, I = !1) {
        const S = f.exec(T);
        return S ? new m(S[2] || u, oe(S[4] || u), oe(S[5] || u), oe(S[7] || u), oe(S[9] || u), I) : new m(u, u, u, u, u);
      }
      static file(T) {
        let I = u;
        if (i && (T = T.replace(/\\/g, c)), T[0] === c && T[1] === c) {
          const S = T.indexOf(c, 2);
          S === -1 ? (I = T.substring(2), T = c) : (I = T.substring(2, S), T = T.substring(S) || c);
        }
        return new m("file", I, T, u, u);
      }
      static from(T) {
        const I = new m(T.scheme, T.authority, T.path, T.query, T.fragment);
        return l(I, !0), I;
      }
      toString(T = !1) {
        return $(this, T);
      }
      toJSON() {
        return this;
      }
      static revive(T) {
        if (T) {
          if (T instanceof d) return T;
          {
            const I = new m(T);
            return I._formatted = T.external, I._fsPath = T._sep === h ? T.fsPath : null, I;
          }
        }
        return T;
      }
    }
    const h = i ? 1 : void 0;
    class m extends d {
      _formatted = null;
      _fsPath = null;
      get fsPath() {
        return this._fsPath || (this._fsPath = R(this)), this._fsPath;
      }
      toString(T = !1) {
        return T ? $(this, !0) : (this._formatted || (this._formatted = $(this, !1)), this._formatted);
      }
      toJSON() {
        const T = { $mid: 1 };
        return this._fsPath && (T.fsPath = this._fsPath, T._sep = h), this._formatted && (T.external = this._formatted), this.path && (T.path = this.path), this.scheme && (T.scheme = this.scheme), this.authority && (T.authority = this.authority), this.query && (T.query = this.query), this.fragment && (T.fragment = this.fragment), T;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function v(E, T, I) {
      let S, P = -1;
      for (let b = 0; b < E.length; b++) {
        const N = E.charCodeAt(b);
        if (N >= 97 && N <= 122 || N >= 65 && N <= 90 || N >= 48 && N <= 57 || N === 45 || N === 46 || N === 95 || N === 126 || T && N === 47 || I && N === 91 || I && N === 93 || I && N === 58) P !== -1 && (S += encodeURIComponent(E.substring(P, b)), P = -1), S !== void 0 && (S += E.charAt(b));
        else {
          S === void 0 && (S = E.substr(0, b));
          const $e = g[N];
          $e !== void 0 ? (P !== -1 && (S += encodeURIComponent(E.substring(P, b)), P = -1), S += $e) : P === -1 && (P = b);
        }
      }
      return P !== -1 && (S += encodeURIComponent(E.substring(P))), S !== void 0 ? S : E;
    }
    function y(E) {
      let T;
      for (let I = 0; I < E.length; I++) {
        const S = E.charCodeAt(I);
        S === 35 || S === 63 ? (T === void 0 && (T = E.substr(0, I)), T += g[S]) : T !== void 0 && (T += E[I]);
      }
      return T !== void 0 ? T : E;
    }
    function R(E, T) {
      let I;
      return I = E.authority && E.path.length > 1 && E.scheme === "file" ? `//${E.authority}${E.path}` : E.path.charCodeAt(0) === 47 && (E.path.charCodeAt(1) >= 65 && E.path.charCodeAt(1) <= 90 || E.path.charCodeAt(1) >= 97 && E.path.charCodeAt(1) <= 122) && E.path.charCodeAt(2) === 58 ? E.path[1].toLowerCase() + E.path.substr(2) : E.path, i && (I = I.replace(/\//g, "\\")), I;
    }
    function $(E, T) {
      const I = T ? y : v;
      let S = "", { scheme: P, authority: b, path: N, query: $e, fragment: Q } = E;
      if (P && (S += P, S += ":"), (b || P === "file") && (S += c, S += c), b) {
        let V = b.indexOf("@");
        if (V !== -1) {
          const Ft = b.substr(0, V);
          b = b.substr(V + 1), V = Ft.lastIndexOf(":"), V === -1 ? S += I(Ft, !1, !1) : (S += I(Ft.substr(0, V), !1, !1), S += ":", S += I(Ft.substr(V + 1), !1, !0)), S += "@";
        }
        b = b.toLowerCase(), V = b.lastIndexOf(":"), V === -1 ? S += I(b, !1, !0) : (S += I(b.substr(0, V), !1, !0), S += b.substr(V));
      }
      if (N) {
        if (N.length >= 3 && N.charCodeAt(0) === 47 && N.charCodeAt(2) === 58) {
          const V = N.charCodeAt(1);
          V >= 65 && V <= 90 && (N = `/${String.fromCharCode(V + 32)}:${N.substr(3)}`);
        } else if (N.length >= 2 && N.charCodeAt(1) === 58) {
          const V = N.charCodeAt(0);
          V >= 65 && V <= 90 && (N = `${String.fromCharCode(V + 32)}:${N.substr(2)}`);
        }
        S += I(N, !0, !1);
      }
      return $e && (S += "?", S += I($e, !1, !1)), Q && (S += "#", S += T ? Q : v(Q, !1, !1)), S;
    }
    function x(E) {
      try {
        return decodeURIComponent(E);
      } catch {
        return E.length > 3 ? E.substr(0, 3) + x(E.substr(3)) : E;
      }
    }
    const O = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function oe(E) {
      return E.match(O) ? E.replace(O, ((T) => x(T))) : E;
    }
    var Me = n(470);
    const ve = Me.posix || Me, He = "/";
    var we;
    (function(E) {
      E.joinPath = function(T, ...I) {
        return T.with({ path: ve.join(T.path, ...I) });
      }, E.resolvePath = function(T, ...I) {
        let S = T.path, P = !1;
        S[0] !== He && (S = He + S, P = !0);
        let b = ve.resolve(S, ...I);
        return P && b[0] === He && !T.authority && (b = b.substring(1)), T.with({ path: b });
      }, E.dirname = function(T) {
        if (T.path.length === 0 || T.path === He) return T;
        let I = ve.dirname(T.path);
        return I.length === 1 && I.charCodeAt(0) === 46 && (I = ""), T.with({ path: I });
      }, E.basename = function(T) {
        return ve.basename(T.path);
      }, E.extname = function(T) {
        return ve.extname(T.path);
      };
    })(we || (we = {}));
  })(), np = r;
})();
const { URI: Xt, Utils: qn } = np;
var Ct;
(function(t) {
  t.basename = qn.basename, t.dirname = qn.dirname, t.extname = qn.extname, t.joinPath = qn.joinPath, t.resolvePath = qn.resolvePath;
  function e(i, s) {
    return i?.toString() === s?.toString();
  }
  t.equals = e;
  function n(i, s) {
    const a = typeof i == "string" ? i : i.path, o = typeof s == "string" ? s : s.path, l = a.split("/").filter((h) => h.length > 0), u = o.split("/").filter((h) => h.length > 0);
    let c = 0;
    for (; c < l.length && l[c] === u[c]; c++)
      ;
    const f = "../".repeat(l.length - c), d = u.slice(c).join("/");
    return f + d;
  }
  t.relative = n;
  function r(i) {
    return Xt.parse(i.toString()).toString();
  }
  t.normalize = r;
})(Ct || (Ct = {}));
var H;
(function(t) {
  t[t.Changed = 0] = "Changed", t[t.Parsed = 1] = "Parsed", t[t.IndexedContent = 2] = "IndexedContent", t[t.ComputedScopes = 3] = "ComputedScopes", t[t.Linked = 4] = "Linked", t[t.IndexedReferences = 5] = "IndexedReferences", t[t.Validated = 6] = "Validated";
})(H || (H = {}));
class j_ {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, n = z.CancellationToken.None) {
    const r = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, r, n);
  }
  fromTextDocument(e, n, r) {
    return n = n ?? Xt.parse(e.uri), z.CancellationToken.is(r) ? this.createAsync(n, e, r) : this.create(n, e, r);
  }
  fromString(e, n, r) {
    return z.CancellationToken.is(r) ? this.createAsync(n, e, r) : this.create(n, e, r);
  }
  fromModel(e, n) {
    return this.create(n, { $model: e });
  }
  create(e, n, r) {
    if (typeof n == "string") {
      const i = this.parse(e, n, r);
      return this.createLangiumDocument(i, e, void 0, n);
    } else if ("$model" in n) {
      const i = { value: n.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, n.getText(), r);
      return this.createLangiumDocument(i, e, n);
    }
  }
  async createAsync(e, n, r) {
    if (typeof n == "string") {
      const i = await this.parseAsync(e, n, r);
      return this.createLangiumDocument(i, e, void 0, n);
    } else {
      const i = await this.parseAsync(e, n.getText(), r);
      return this.createLangiumDocument(i, e, n);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, n, r, i) {
    let s;
    if (r)
      s = {
        parseResult: e,
        uri: n,
        state: H.Parsed,
        references: [],
        textDocument: r
      };
    else {
      const a = this.createTextDocumentGetter(n, i);
      s = {
        parseResult: e,
        uri: n,
        state: H.Parsed,
        references: [],
        get textDocument() {
          return a();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, n) {
    var r, i;
    const s = (r = e.parseResult.value.$cstNode) === null || r === void 0 ? void 0 : r.root.fullText, a = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()), o = a ? a.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a)
      Object.defineProperty(e, "textDocument", {
        value: a
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, o);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, n), e.parseResult.value.$document = e), e.state = H.Parsed, e;
  }
  parse(e, n, r) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(n, r);
  }
  parseAsync(e, n, r) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(n, r);
  }
  createTextDocumentGetter(e, n) {
    const r = this.serviceRegistry;
    let i;
    return () => i ?? (i = So.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, n ?? ""));
  }
}
class K_ {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return ie(this.documentMap.values());
  }
  addDocument(e) {
    const n = e.uri.toString();
    if (this.documentMap.has(n))
      throw new Error(`A document with the URI '${n}' is already present.`);
    this.documentMap.set(n, e);
  }
  getDocument(e) {
    const n = e.toString();
    return this.documentMap.get(n);
  }
  async getOrCreateDocument(e, n) {
    let r = this.getDocument(e);
    return r || (r = await this.langiumDocumentFactory.fromUri(e, n), this.addDocument(r), r);
  }
  createDocument(e, n, r) {
    if (r)
      return this.langiumDocumentFactory.fromString(n, e, r).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(n, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(e.toString());
  }
  invalidateDocument(e) {
    const n = e.toString(), r = this.documentMap.get(n);
    return r && (this.serviceRegistry.getServices(e).references.Linker.unlink(r), r.state = H.Changed, r.precomputedScopes = void 0, r.diagnostics = void 0), r;
  }
  deleteDocument(e) {
    const n = e.toString(), r = this.documentMap.get(n);
    return r && (r.state = H.Changed, this.documentMap.delete(n)), r;
  }
}
const Aa = /* @__PURE__ */ Symbol("ref_resolving");
class H_ {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, n = z.CancellationToken.None) {
    for (const r of dn(e.parseResult.value))
      await Ee(n), Hf(r).forEach((i) => this.doLink(i, e));
  }
  doLink(e, n) {
    var r;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Aa;
      try {
        const s = this.getCandidate(e);
        if (wi(s))
          i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          const a = this.loadAstNode(s);
          i._ref = a ?? this.createLinkingError(e, s);
        } else
          i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        const a = (r = s.message) !== null && r !== void 0 ? r : String(s);
        i._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${i.$refText}': ${a}` });
      }
      n.references.push(i);
    }
  }
  unlink(e) {
    for (const n of e.references)
      delete n._ref, delete n._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    const r = this.scopeProvider.getScope(e).getElement(e.reference.$refText);
    return r ?? this.createLinkingError(e);
  }
  buildReference(e, n, r, i) {
    const s = this, a = {
      $refNode: r,
      $refText: i,
      get ref() {
        var o;
        if (ue(this._ref))
          return this._ref;
        if (Dp(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a, container: e, property: n }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Aa;
          const l = Ga(e).$document, u = s.getLinkedNode({ reference: a, container: e, property: n });
          if (u.error && l && l.state < H.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = u.node) !== null && o !== void 0 ? o : u.error, this._nodeDescription = u.descr, l?.references.push(this);
        } else if (this._ref === Aa)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);
        return ue(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return wi(this._ref) ? this._ref : void 0;
      }
    };
    return a;
  }
  getLinkedNode(e) {
    var n;
    try {
      const r = this.getCandidate(e);
      if (wi(r))
        return { error: r };
      const i = this.loadAstNode(r);
      return i ? { node: i, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const i = (n = r.message) !== null && n !== void 0 ? n : String(r);
      return {
        error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}` })
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const n = this.langiumDocuments().getDocument(e.documentUri);
    if (n)
      return this.astNodeLocator.getAstNode(n.parseResult.value, e.path);
  }
  createLinkingError(e, n) {
    const r = Ga(e.container).$document;
    r && r.state < H.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: n });
  }
}
function W_(t) {
  return typeof t.name == "string";
}
class z_ {
  getName(e) {
    if (W_(e))
      return e.name;
  }
  getNameNode(e) {
    return Yf(e.$cstNode, "name");
  }
}
class V_ {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const n = Cm(e), r = e.astNode;
      if (n && r) {
        const i = r[n.feature];
        if (ze(i))
          return i.ref;
        if (Array.isArray(i)) {
          for (const s of i)
            if (ze(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end)
              return s.ref;
        }
      }
      if (r) {
        const i = this.nameProvider.getNameNode(r);
        if (i && (i === e || Up(e, i)))
          return r;
      }
    }
  }
  findDeclarationNode(e) {
    const n = this.findDeclaration(e);
    if (n?.$cstNode) {
      const r = this.nameProvider.getNameNode(n);
      return r ?? n.$cstNode;
    }
  }
  findReferences(e, n) {
    const r = [];
    if (n.includeDeclaration) {
      const s = this.getReferenceToSelf(e);
      s && r.push(s);
    }
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return n.documentUri && (i = i.filter((s) => Ct.equals(s.sourceUri, n.documentUri))), r.push(...i), ie(r);
  }
  getReferenceToSelf(e) {
    const n = this.nameProvider.getNameNode(e);
    if (n) {
      const r = Rt(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: r.uri,
        sourcePath: i,
        targetUri: r.uri,
        targetPath: i,
        segment: Hi(n),
        local: !0
      };
    }
  }
}
class ms {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [n, r] of e)
        this.add(n, r);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return Ma.sum(ie(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, n) {
    if (n === void 0)
      return this.map.delete(e);
    {
      const r = this.map.get(e);
      if (r) {
        const i = r.indexOf(n);
        if (i >= 0)
          return r.length === 1 ? this.map.delete(e) : r.splice(i, 1), !0;
      }
      return !1;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    var n;
    return (n = this.map.get(e)) !== null && n !== void 0 ? n : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, n) {
    if (n === void 0)
      return this.map.has(e);
    {
      const r = this.map.get(e);
      return r ? r.indexOf(n) >= 0 : !1;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, n) {
    return this.map.has(e) ? this.map.get(e).push(n) : this.map.set(e, [n]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, n) {
    return this.map.has(e) ? this.map.get(e).push(...n) : this.map.set(e, Array.from(n)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((n, r) => n.forEach((i) => e(i, r, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ie(this.map.entries()).flatMap(([e, n]) => n.map((r) => [e, r]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ie(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ie(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ie(this.map.entries());
  }
}
class gf {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [n, r] of e)
        this.set(n, r);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, n) {
    return this.map.set(e, n), this.inverse.set(n, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const n = this.map.get(e);
    return n !== void 0 ? (this.map.delete(e), this.inverse.delete(n), !0) : !1;
  }
}
class q_ {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, n = z.CancellationToken.None) {
    return this.computeExportsForNode(e.parseResult.value, e, void 0, n);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(e, n, r = bo, i = z.CancellationToken.None) {
    const s = [];
    this.exportNode(e, s, n);
    for (const a of r(e))
      await Ee(i), this.exportNode(a, s, n);
    return s;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(e, n, r) {
    const i = this.nameProvider.getName(e);
    i && n.push(this.descriptions.createDescription(e, i, r));
  }
  async computeLocalScopes(e, n = z.CancellationToken.None) {
    const r = e.parseResult.value, i = new ms();
    for (const s of Hr(r))
      await Ee(n), this.processNode(s, e, i);
    return i;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(e, n, r) {
    const i = e.$container;
    if (i) {
      const s = this.nameProvider.getName(e);
      s && r.add(i, this.descriptions.createDescription(e, s, n));
    }
  }
}
class yf {
  constructor(e, n, r) {
    var i;
    this.elements = e, this.outerScope = n, this.caseInsensitive = (i = r?.caseInsensitive) !== null && i !== void 0 ? i : !1;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const n = this.caseInsensitive ? this.elements.find((r) => r.name.toLowerCase() === e.toLowerCase()) : this.elements.find((r) => r.name === e);
    if (n)
      return n;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
}
class Y_ {
  constructor(e, n, r) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = r?.caseInsensitive) !== null && i !== void 0 ? i : !1;
    for (const s of e) {
      const a = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(a, s);
    }
    this.outerScope = n;
  }
  getElement(e) {
    const n = this.caseInsensitive ? e.toLowerCase() : e, r = this.elements.get(n);
    if (r)
      return r;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = ie(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}
class rp {
  constructor() {
    this.toDispose = [], this.isDisposed = !1;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
}
class X_ extends rp {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, n) {
    this.throwIfDisposed(), this.cache.set(e, n);
  }
  get(e, n) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (n) {
      const r = n();
      return this.cache.set(e, r), r;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}
class J_ extends rp {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((n) => n);
  }
  has(e, n) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(n);
  }
  set(e, n, r) {
    this.throwIfDisposed(), this.cacheForContext(e).set(n, r);
  }
  get(e, n, r) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(n))
      return i.get(n);
    if (r) {
      const s = r();
      return i.set(n, s), s;
    } else
      return;
  }
  delete(e, n) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(n);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const n = this.converter(e);
      this.cache.delete(n);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const n = this.converter(e);
    let r = this.cache.get(n);
    return r || (r = /* @__PURE__ */ new Map(), this.cache.set(n, r)), r;
  }
}
class Z_ extends X_ {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, n) {
    super(), n ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(n, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}
class Q_ {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new Z_(e.shared);
  }
  getScope(e) {
    const n = [], r = this.reflection.getReferenceType(e), i = Rt(e.container).precomputedScopes;
    if (i) {
      let a = e.container;
      do {
        const o = i.get(a);
        o.length > 0 && n.push(ie(o).filter((l) => this.reflection.isSubtype(l.type, r))), a = a.$container;
      } while (a);
    }
    let s = this.getGlobalScope(r, e);
    for (let a = n.length - 1; a >= 0; a--)
      s = this.createScope(n[a], s);
    return s;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, n, r) {
    return new yf(ie(e), n, r);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, n, r) {
    const i = ie(e).map((s) => {
      const a = this.nameProvider.getName(s);
      if (a)
        return this.descriptions.createDescription(s, a);
    }).nonNullable();
    return new yf(i, n, r);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, n) {
    return this.globalScopeCache.get(e, () => new Y_(this.indexManager.allElements(e)));
  }
}
function eC(t) {
  return typeof t.$comment == "string";
}
function Tf(t) {
  return typeof t == "object" && !!t && ("$ref" in t || "$error" in t);
}
class tC {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, n) {
    const r = n ?? {}, i = n?.replacer, s = (o, l) => this.replacer(o, l, r), a = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = Rt(e), JSON.stringify(e, a, n?.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, n) {
    const r = n ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, r), i;
  }
  replacer(e, n, { refText: r, sourceText: i, textRegions: s, comments: a, uriConverter: o }) {
    var l, u, c, f;
    if (!this.ignoreProperties.has(e))
      if (ze(n)) {
        const d = n.ref, h = r ? n.$refText : void 0;
        if (d) {
          const m = Rt(d);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, n) : g = m.uri.toString());
          const v = this.astNodeLocator.getAstNodePath(d);
          return {
            $ref: `${g}#${v}`,
            $refText: h
          };
        } else
          return {
            $error: (u = (l = n.error) === null || l === void 0 ? void 0 : l.message) !== null && u !== void 0 ? u : "Could not resolve reference",
            $refText: h
          };
      } else if (ue(n)) {
        let d;
        if (s && (d = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, n)), (!e || n.$document) && d?.$textRegion && (d.$textRegion.documentURI = (c = this.currentDocument) === null || c === void 0 ? void 0 : c.uri.toString())), i && !e && (d ?? (d = Object.assign({}, n)), d.$sourceText = (f = n.$cstNode) === null || f === void 0 ? void 0 : f.text), a) {
          d ?? (d = Object.assign({}, n));
          const h = this.commentProvider.getComment(n);
          h && (d.$comment = h.replace(/\r/g, ""));
        }
        return d ?? n;
      } else
        return n;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const n = (r) => ({
      offset: r.offset,
      end: r.end,
      length: r.length,
      range: r.range
    });
    if (e.$cstNode) {
      const r = e.$textRegion = n(e.$cstNode), i = r.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        const a = Im(e.$cstNode, s).map(n);
        a.length !== 0 && (i[s] = a);
      }), e;
    }
  }
  linkNode(e, n, r, i, s, a) {
    for (const [l, u] of Object.entries(e))
      if (Array.isArray(u))
        for (let c = 0; c < u.length; c++) {
          const f = u[c];
          Tf(f) ? u[c] = this.reviveReference(e, l, n, f, r) : ue(f) && this.linkNode(f, n, r, e, l, c);
        }
      else Tf(u) ? e[l] = this.reviveReference(e, l, n, u, r) : ue(u) && this.linkNode(u, n, r, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a;
  }
  reviveReference(e, n, r, i, s) {
    let a = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(r, i.$ref, s.uriConverter);
      if (ue(l))
        return a || (a = this.nameProvider.getName(l)), {
          $refText: a ?? "",
          ref: l
        };
      o = l;
    }
    if (o) {
      const l = {
        $refText: a ?? ""
      };
      return l.error = {
        container: e,
        property: n,
        message: o,
        reference: l
      }, l;
    } else
      return;
  }
  getRefNode(e, n, r) {
    try {
      const i = n.indexOf("#");
      if (i === 0) {
        const l = this.astNodeLocator.getAstNode(e, n.substring(1));
        return l || "Could not resolve path: " + n;
      }
      if (i < 0) {
        const l = r ? r(n) : Xt.parse(n), u = this.langiumDocuments.getDocument(l);
        return u ? u.parseResult.value : "Could not find document for URI: " + n;
      }
      const s = r ? r(n.substring(0, i)) : Xt.parse(n.substring(0, i)), a = this.langiumDocuments.getDocument(s);
      if (!a)
        return "Could not find document for URI: " + n;
      if (i === n.length - 1)
        return a.parseResult.value;
      const o = this.astNodeLocator.getAstNode(a.parseResult.value, n.substring(i + 1));
      return o || "Could not resolve URI: " + n;
    } catch (i) {
      return String(i);
    }
  }
}
class nC {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e?.workspace.TextDocuments;
  }
  register(e) {
    const n = e.LanguageMetaData;
    for (const r of n.fileExtensions)
      this.fileExtensionMap.has(r) && console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`), this.fileExtensionMap.set(r, e);
    this.languageIdMap.set(n.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var n, r;
    if (this.singleton !== void 0)
      return this.singleton;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const i = (r = (n = this.textDocuments) === null || n === void 0 ? void 0 : n.get(e)) === null || r === void 0 ? void 0 : r.languageId;
    if (i !== void 0) {
      const o = this.languageIdMap.get(i);
      if (o)
        return o;
    }
    const s = Ct.extname(e), a = this.fileExtensionMap.get(s);
    if (!a)
      throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return a;
  }
  hasServices(e) {
    try {
      return this.getServices(e), !0;
    } catch {
      return !1;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
}
function Ir(t) {
  return { code: t };
}
var gs;
(function(t) {
  t.all = ["fast", "slow", "built-in"];
})(gs || (gs = {}));
class rC {
  constructor(e) {
    this.entries = new ms(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(e, n = this, r = "fast") {
    if (r === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (const [i, s] of Object.entries(e)) {
      const a = s;
      if (Array.isArray(a))
        for (const o of a) {
          const l = {
            check: this.wrapValidationException(o, n),
            category: r
          };
          this.addEntry(i, l);
        }
      else if (typeof a == "function") {
        const o = {
          check: this.wrapValidationException(a, n),
          category: r
        };
        this.addEntry(i, o);
      } else
        Kr();
    }
  }
  wrapValidationException(e, n) {
    return async (r, i, s) => {
      await this.handleException(() => e.call(n, r, i, s), "An error occurred during validation", i, r);
    };
  }
  async handleException(e, n, r, i) {
    try {
      await e();
    } catch (s) {
      if (Js(s))
        throw s;
      console.error(`${n}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      const a = s instanceof Error ? s.message : String(s);
      r("error", `${n}: ${a}`, { node: i });
    }
  }
  addEntry(e, n) {
    if (e === "AstNode") {
      this.entries.add("AstNode", n);
      return;
    }
    for (const r of this.reflection.getAllSubTypes(e))
      this.entries.add(r, n);
  }
  getChecks(e, n) {
    let r = ie(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return n && (r = r.filter((i) => n.includes(i.category))), r.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, n = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", n));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, n = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", n));
  }
  wrapPreparationException(e, n, r) {
    return async (i, s, a, o) => {
      await this.handleException(() => e.call(r, i, s, a, o), n, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
}
class iC {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, n = {}, r = z.CancellationToken.None) {
    const i = e.parseResult, s = [];
    if (await Ee(r), (!n.categories || n.categories.includes("built-in")) && (this.processLexingErrors(i, s, n), n.stopAfterLexingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Fe.LexingError;
    }) || (this.processParsingErrors(i, s, n), n.stopAfterParsingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Fe.ParsingError;
    })) || (this.processLinkingErrors(e, s, n), n.stopAfterLinkingErrors && s.some((a) => {
      var o;
      return ((o = a.data) === null || o === void 0 ? void 0 : o.code) === Fe.LinkingError;
    }))))
      return s;
    try {
      s.push(...await this.validateAst(i.value, n, r));
    } catch (a) {
      if (Js(a))
        throw a;
      console.error("An error occurred during validation:", a);
    }
    return await Ee(r), s;
  }
  processLexingErrors(e, n, r) {
    var i, s, a;
    const o = [...e.lexerErrors, ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []];
    for (const l of o) {
      const u = (a = l.severity) !== null && a !== void 0 ? a : "error", c = {
        severity: Ea(u),
        range: {
          start: {
            line: l.line - 1,
            character: l.column - 1
          },
          end: {
            line: l.line - 1,
            character: l.column + l.length - 1
          }
        },
        message: l.message,
        data: aC(u),
        source: this.getSource()
      };
      n.push(c);
    }
  }
  processParsingErrors(e, n, r) {
    for (const i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const a = i.previousToken;
          if (isNaN(a.startOffset)) {
            const o = { line: 0, character: 0 };
            s = { start: o, end: o };
          } else {
            const o = { line: a.endLine - 1, character: a.endColumn };
            s = { start: o, end: o };
          }
        }
      } else
        s = Fa(i.token);
      if (s) {
        const a = {
          severity: Ea("error"),
          range: s,
          message: i.message,
          data: Ir(Fe.ParsingError),
          source: this.getSource()
        };
        n.push(a);
      }
    }
  }
  processLinkingErrors(e, n, r) {
    for (const i of e.references) {
      const s = i.error;
      if (s) {
        const a = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: Fe.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        n.push(this.toDiagnostic("error", s.message, a));
      }
    }
  }
  async validateAst(e, n, r = z.CancellationToken.None) {
    const i = [], s = (a, o, l) => {
      i.push(this.toDiagnostic(a, o, l));
    };
    return await this.validateAstBefore(e, n, s, r), await this.validateAstNodes(e, n, s, r), await this.validateAstAfter(e, n, s, r), i;
  }
  async validateAstBefore(e, n, r, i = z.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksBefore;
    for (const o of a)
      await Ee(i), await o(e, r, (s = n.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, n, r, i = z.CancellationToken.None) {
    await Promise.all(dn(e).map(async (s) => {
      await Ee(i);
      const a = this.validationRegistry.getChecks(s.$type, n.categories);
      for (const o of a)
        await o(s, r, i);
    }));
  }
  async validateAstAfter(e, n, r, i = z.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksAfter;
    for (const o of a)
      await Ee(i), await o(e, r, (s = n.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, n, r) {
    return {
      message: n,
      range: sC(r),
      severity: Ea(e),
      code: r.code,
      codeDescription: r.codeDescription,
      tags: r.tags,
      relatedInformation: r.relatedInformation,
      data: r.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}
function sC(t) {
  if (t.range)
    return t.range;
  let e;
  return typeof t.property == "string" ? e = Yf(t.node.$cstNode, t.property, t.index) : typeof t.keyword == "string" && (e = wm(t.node.$cstNode, t.keyword, t.index)), e ?? (e = t.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function Ea(t) {
  switch (t) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
function aC(t) {
  switch (t) {
    case "error":
      return Ir(Fe.LexingError);
    case "warning":
      return Ir(Fe.LexingWarning);
    case "info":
      return Ir(Fe.LexingInfo);
    case "hint":
      return Ir(Fe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
var Fe;
(function(t) {
  t.LexingError = "lexing-error", t.LexingWarning = "lexing-warning", t.LexingInfo = "lexing-info", t.LexingHint = "lexing-hint", t.ParsingError = "parsing-error", t.LinkingError = "linking-error";
})(Fe || (Fe = {}));
class oC {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, n, r) {
    const i = r ?? Rt(e);
    n ?? (n = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!n)
      throw new Error(`Node at path ${s} has no name.`);
    let a;
    const o = () => {
      var l;
      return a ?? (a = Hi((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: n,
      get nameSegment() {
        return o();
      },
      selectionSegment: Hi(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
}
class lC {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, n = z.CancellationToken.None) {
    const r = [], i = e.parseResult.value;
    for (const s of dn(i))
      await Ee(n), Hf(s).filter((a) => !wi(a)).forEach((a) => {
        const o = this.createDescription(a);
        o && r.push(o);
      });
    return r;
  }
  createDescription(e) {
    const n = e.reference.$nodeDescription, r = e.reference.$refNode;
    if (!n || !r)
      return;
    const i = Rt(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: n.documentUri,
      targetPath: n.path,
      segment: Hi(r),
      local: Ct.equals(n.documentUri, i)
    };
  }
}
class uC {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const n = this.getAstNodePath(e.$container), r = this.getPathSegment(e);
      return n + this.segmentSeparator + r;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: n }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return n !== void 0 ? e + this.indexSeparator + n : e;
  }
  getAstNode(e, n) {
    return n.split(this.segmentSeparator).reduce((i, s) => {
      if (!i || s.length === 0)
        return i;
      const a = s.indexOf(this.indexSeparator);
      if (a > 0) {
        const o = s.substring(0, a), l = parseInt(s.substring(a + 1)), u = i[o];
        return u?.[l];
      }
      return i[s];
    }, e);
  }
}
var cC = Qh();
class fC {
  constructor(e) {
    this._ready = new Rl(), this.settings = {}, this.workspaceConfig = !1, this.onConfigurationSectionUpdateEmitter = new cC.Emitter(), this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var n, r;
    this.workspaceConfig = (r = (n = e.capabilities.workspace) === null || n === void 0 ? void 0 : n.configuration) !== null && r !== void 0 ? r : !1;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const n = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: n.map((r) => this.toSectionName(r.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const n = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), r = await e.fetchConfiguration(n);
        n.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, r[s]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((n) => {
      const r = e.settings[n];
      this.updateSectionConfiguration(n, r), this.onConfigurationSectionUpdateEmitter.fire({ section: n, configuration: r });
    });
  }
  updateSectionConfiguration(e, n) {
    this.settings[e] = n;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, n) {
    await this.ready;
    const r = this.toSectionName(e);
    if (this.settings[r])
      return this.settings[r][n];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}
var Or;
(function(t) {
  function e(n) {
    return {
      dispose: async () => await n()
    };
  }
  t.create = e;
})(Or || (Or = {}));
class dC {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new ms(), this.documentPhaseListeners = new ms(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = H.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, n = {}, r = z.CancellationToken.None) {
    var i, s;
    for (const a of e) {
      const o = a.uri.toString();
      if (a.state === H.Validated) {
        if (typeof n.validation == "boolean" && n.validation)
          a.state = H.IndexedReferences, a.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof n.validation == "object") {
          const l = this.buildState.get(o), u = (i = l?.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (u) {
            const f = ((s = n.validation.categories) !== null && s !== void 0 ? s : gs.all).filter((d) => !u.includes(d));
            f.length > 0 && (this.buildState.set(o, {
              completed: !1,
              options: {
                validation: Object.assign(Object.assign({}, n.validation), { categories: f })
              },
              result: l.result
            }), a.state = H.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = H.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, n, r);
  }
  async update(e, n, r = z.CancellationToken.None) {
    this.currentState = H.Changed;
    for (const a of n)
      this.langiumDocuments.deleteDocument(a), this.buildState.delete(a.toString()), this.indexManager.remove(a);
    for (const a of e) {
      if (!this.langiumDocuments.invalidateDocument(a)) {
        const l = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a);
        l.state = H.Changed, this.langiumDocuments.addDocument(l);
      }
      this.buildState.delete(a.toString());
    }
    const i = ie(e).concat(n).map((a) => a.toString()).toSet();
    this.langiumDocuments.all.filter((a) => !i.has(a.uri.toString()) && this.shouldRelink(a, i)).forEach((a) => {
      this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a), a.state = Math.min(a.state, H.ComputedScopes), a.diagnostics = void 0;
    }), await this.emitUpdate(e, n), await Ee(r);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a) => {
      var o;
      return a.state < H.Linked || !(!((o = this.buildState.get(a.uri.toString())) === null || o === void 0) && o.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, r);
  }
  async emitUpdate(e, n) {
    await Promise.all(this.updateListeners.map((r) => r(e, n)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let n = 0, r = e.length - 1;
    for (; n < r; ) {
      for (; n < e.length && this.hasTextDocument(e[n]); )
        n++;
      for (; r >= 0 && !this.hasTextDocument(e[r]); )
        r--;
      n < r && ([e[n], e[r]] = [e[r], e[n]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var n;
    return !!(!((n = this.textDocuments) === null || n === void 0) && n.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, n) {
    return e.references.some((r) => r.error !== void 0) ? !0 : this.indexManager.isAffected(e, n);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), Or.create(() => {
      const n = this.updateListeners.indexOf(e);
      n >= 0 && this.updateListeners.splice(n, 1);
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, n, r) {
    this.prepareBuild(e, n), await this.runCancelable(e, H.Parsed, r, (s) => this.langiumDocumentFactory.update(s, r)), await this.runCancelable(e, H.IndexedContent, r, (s) => this.indexManager.updateContent(s, r)), await this.runCancelable(e, H.ComputedScopes, r, async (s) => {
      const a = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a.computeLocalScopes(s, r);
    }), await this.runCancelable(e, H.Linked, r, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, r)), await this.runCancelable(e, H.IndexedReferences, r, (s) => this.indexManager.updateReferences(s, r));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, H.Validated, r, (s) => this.validate(s, r));
    for (const s of e) {
      const a = this.buildState.get(s.uri.toString());
      a && (a.completed = !0);
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, n) {
    for (const r of e) {
      const i = r.uri.toString(), s = this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: !1,
        options: n,
        result: s?.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, n, r, i) {
    const s = e.filter((o) => o.state < n);
    for (const o of s)
      await Ee(r), await i(o), o.state = n, await this.notifyDocumentPhase(o, n, r);
    const a = e.filter((o) => o.state === n);
    await this.notifyBuildPhase(a, n, r), this.currentState = n;
  }
  onBuildPhase(e, n) {
    return this.buildPhaseListeners.add(e, n), Or.create(() => {
      this.buildPhaseListeners.delete(e, n);
    });
  }
  onDocumentPhase(e, n) {
    return this.documentPhaseListeners.add(e, n), Or.create(() => {
      this.documentPhaseListeners.delete(e, n);
    });
  }
  waitUntil(e, n, r) {
    let i;
    if (n && "path" in n ? i = n : r = n, r ?? (r = z.CancellationToken.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : r.isCancellationRequested ? Promise.reject(ps) : new Promise((s, a) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const u = this.langiumDocuments.getDocument(i);
          s(u?.uri);
        } else
          s(void 0);
      }), l = r.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a(ps);
      });
    });
  }
  async notifyDocumentPhase(e, n, r) {
    const s = this.documentPhaseListeners.get(n).slice();
    for (const a of s)
      try {
        await a(e, r);
      } catch (o) {
        if (!Js(o))
          throw o;
      }
  }
  async notifyBuildPhase(e, n, r) {
    if (e.length === 0)
      return;
    const s = this.buildPhaseListeners.get(n).slice();
    for (const a of s)
      await Ee(r), await a(e, r);
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, n) {
    var r, i;
    const s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a = this.getBuildOptions(e).validation, o = typeof a == "object" ? a : void 0, l = await s.validateDocument(e, o, n);
    e.diagnostics ? e.diagnostics.push(...l) : e.diagnostics = l;
    const u = this.buildState.get(e.uri.toString());
    if (u) {
      (r = u.result) !== null && r !== void 0 || (u.result = {});
      const c = (i = o?.categories) !== null && i !== void 0 ? i : gs.all;
      u.result.validationChecks ? u.result.validationChecks.push(...c) : u.result.validationChecks = [...c];
    }
  }
  getBuildOptions(e) {
    var n, r;
    return (r = (n = this.buildState.get(e.uri.toString())) === null || n === void 0 ? void 0 : n.options) !== null && r !== void 0 ? r : {};
  }
}
class hC {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new J_(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, n) {
    const r = Rt(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a) => {
        Ct.equals(a.targetUri, r) && a.targetPath === n && i.push(a);
      });
    }), ie(i);
  }
  allElements(e, n) {
    let r = ie(this.symbolIndex.keys());
    return n && (r = r.filter((i) => !n || n.has(i))), r.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, n) {
    var r;
    return n ? this.symbolByTypeIndex.get(e, n, () => {
      var s;
      return ((s = this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((o) => this.astReflection.isSubtype(o.type, n));
    }) : (r = this.symbolIndex.get(e)) !== null && r !== void 0 ? r : [];
  }
  remove(e) {
    const n = e.toString();
    this.symbolIndex.delete(n), this.symbolByTypeIndex.clear(n), this.referenceIndex.delete(n);
  }
  async updateContent(e, n = z.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, n), s = e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e, n = z.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, n);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, n) {
    const r = this.referenceIndex.get(e.uri.toString());
    return r ? r.some((i) => !i.local && n.has(i.targetUri.toString())) : !1;
  }
}
class pC {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new Rl(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    var n;
    this.folders = (n = e.workspaceFolders) !== null && n !== void 0 ? n : void 0;
  }
  initialized(e) {
    return this.mutex.write((n) => {
      var r;
      return this.initializeWorkspace((r = this.folders) !== null && r !== void 0 ? r : [], n);
    });
  }
  async initializeWorkspace(e, n = z.CancellationToken.None) {
    const r = await this.performStartup(e);
    await Ee(n), await this.documentBuilder.build(r, this.initialBuildOptions, n);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const n = this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), r = [], i = (s) => {
      r.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    return await this.loadAdditionalDocuments(e, i), await Promise.all(e.map((s) => [s, this.getRootFolder(s)]).map(async (s) => this.traverseFolder(...s, n, i))), this._ready.resolve(), r;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, n) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return Xt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(e, n, r, i) {
    const s = await this.fileSystemProvider.readDirectory(n);
    await Promise.all(s.map(async (a) => {
      if (this.includeEntry(e, a, r)) {
        if (a.isDirectory)
          await this.traverseFolder(e, a.uri, r, i);
        else if (a.isFile) {
          const o = await this.langiumDocuments.getOrCreateDocument(a.uri);
          i(o);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(e, n, r) {
    const i = Ct.basename(n.uri);
    if (i.startsWith("."))
      return !1;
    if (n.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (n.isFile) {
      const s = Ct.extname(n.uri);
      return r.includes(s);
    }
    return !1;
  }
}
class mC {
  buildUnexpectedCharactersMessage(e, n, r, i, s) {
    return eo.buildUnexpectedCharactersMessage(e, n, r, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return eo.buildUnableToPopLexerModeMessage(e);
  }
}
const gC = { mode: "full" };
class yC {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const n = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(n);
    const r = vf(n) ? Object.values(n) : n, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new he(r, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, n = gC) {
    var r, i, s;
    const a = this.chevrotainLexer.tokenize(e);
    return {
      tokens: a.tokens,
      errors: a.errors,
      hidden: (r = a.groups.hidden) !== null && r !== void 0 ? r : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (vf(e))
      return e;
    const n = ip(e) ? Object.values(e.modes).flat() : e, r = {};
    return n.forEach((i) => r[i.name] = i), r;
  }
}
function TC(t) {
  return Array.isArray(t) && (t.length === 0 || "name" in t[0]);
}
function ip(t) {
  return t && "modes" in t && "defaultMode" in t;
}
function vf(t) {
  return !TC(t) && !ip(t);
}
function vC(t, e, n) {
  let r, i;
  typeof t == "string" ? (i = e, r = n) : (i = t.range.start, r = e), i || (i = D.create(0, 0));
  const s = sp(t), a = Al(r), o = AC({
    lines: s,
    position: i,
    options: a
  });
  return wC({
    index: 0,
    tokens: o,
    position: i
  });
}
function $C(t, e) {
  const n = Al(e), r = sp(t);
  if (r.length === 0)
    return !1;
  const i = r[0], s = r[r.length - 1], a = n.start, o = n.end;
  return !!a?.exec(i) && !!o?.exec(s);
}
function sp(t) {
  let e = "";
  return typeof t == "string" ? e = t : e = t.text, e.split(pm);
}
const $f = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, RC = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function AC(t) {
  var e, n, r;
  const i = [];
  let s = t.position.line, a = t.position.character;
  for (let o = 0; o < t.lines.length; o++) {
    const l = o === 0, u = o === t.lines.length - 1;
    let c = t.lines[o], f = 0;
    if (l && t.options.start) {
      const h = (e = t.options.start) === null || e === void 0 ? void 0 : e.exec(c);
      h && (f = h.index + h[0].length);
    } else {
      const h = (n = t.options.line) === null || n === void 0 ? void 0 : n.exec(c);
      h && (f = h.index + h[0].length);
    }
    if (u) {
      const h = (r = t.options.end) === null || r === void 0 ? void 0 : r.exec(c);
      h && (c = c.substring(0, h.index));
    }
    if (c = c.substring(0, IC(c)), wo(c, f) >= c.length) {
      if (i.length > 0) {
        const h = D.create(s, a);
        i.push({
          type: "break",
          content: "",
          range: L.create(h, h)
        });
      }
    } else {
      $f.lastIndex = f;
      const h = $f.exec(c);
      if (h) {
        const m = h[0], g = h[1], v = D.create(s, a + f), y = D.create(s, a + f + m.length);
        i.push({
          type: "tag",
          content: g,
          range: L.create(v, y)
        }), f += m.length, f = wo(c, f);
      }
      if (f < c.length) {
        const m = c.substring(f), g = Array.from(m.matchAll(RC));
        i.push(...EC(g, m, s, a + f));
      }
    }
    s++, a = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function EC(t, e, n, r) {
  const i = [];
  if (t.length === 0) {
    const s = D.create(n, r), a = D.create(n, r + e.length);
    i.push({
      type: "text",
      content: e,
      range: L.create(s, a)
    });
  } else {
    let s = 0;
    for (const o of t) {
      const l = o.index, u = e.substring(s, l);
      u.length > 0 && i.push({
        type: "text",
        content: e.substring(s, l),
        range: L.create(D.create(n, s + r), D.create(n, l + r))
      });
      let c = u.length + 1;
      const f = o[1];
      if (i.push({
        type: "inline-tag",
        content: f,
        range: L.create(D.create(n, s + c + r), D.create(n, s + c + f.length + r))
      }), c += f.length, o.length === 4) {
        c += o[2].length;
        const d = o[3];
        i.push({
          type: "text",
          content: d,
          range: L.create(D.create(n, s + c + r), D.create(n, s + c + d.length + r))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: L.create(D.create(n, s + c + r), D.create(n, s + c + r))
        });
      s = l + o[0].length;
    }
    const a = e.substring(s);
    a.length > 0 && i.push({
      type: "text",
      content: a,
      range: L.create(D.create(n, s + r), D.create(n, s + r + a.length))
    });
  }
  return i;
}
const xC = /\S/, SC = /\s*$/;
function wo(t, e) {
  const n = t.substring(e).match(xC);
  return n ? e + n.index : t.length;
}
function IC(t) {
  const e = t.match(SC);
  if (e && typeof e.index == "number")
    return e.index;
}
function wC(t) {
  var e, n, r, i;
  const s = D.create(t.position.line, t.position.character);
  if (t.tokens.length === 0)
    return new Rf([], L.create(s, s));
  const a = [];
  for (; t.index < t.tokens.length; ) {
    const u = _C(t, a[a.length - 1]);
    u && a.push(u);
  }
  const o = (n = (e = a[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && n !== void 0 ? n : s, l = (i = (r = a[a.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null && i !== void 0 ? i : s;
  return new Rf(a, L.create(o, l));
}
function _C(t, e) {
  const n = t.tokens[t.index];
  if (n.type === "tag")
    return op(t, !1);
  if (n.type === "text" || n.type === "inline-tag")
    return ap(t);
  CC(n, e), t.index++;
}
function CC(t, e) {
  if (e) {
    const n = new up("", t.range);
    "inlines" in e ? e.inlines.push(n) : e.content.inlines.push(n);
  }
}
function ap(t) {
  let e = t.tokens[t.index];
  const n = e;
  let r = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(kC(t)), r = e, e = t.tokens[t.index];
  return new _o(i, L.create(n.range.start, r.range.end));
}
function kC(t) {
  return t.tokens[t.index].type === "inline-tag" ? op(t, !0) : lp(t);
}
function op(t, e) {
  const n = t.tokens[t.index++], r = n.content.substring(1), i = t.tokens[t.index];
  if (i?.type === "text")
    if (e) {
      const s = lp(t);
      return new Sa(r, new _o([s], s.range), e, L.create(n.range.start, s.range.end));
    } else {
      const s = ap(t);
      return new Sa(r, s, e, L.create(n.range.start, s.range.end));
    }
  else {
    const s = n.range;
    return new Sa(r, new _o([], s), e, s);
  }
}
function lp(t) {
  const e = t.tokens[t.index++];
  return new up(e.content, e.range);
}
function Al(t) {
  if (!t)
    return Al({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: n, line: r } = t;
  return {
    start: xa(e, !0),
    end: xa(n, !1),
    line: xa(r, !0)
  };
}
function xa(t, e) {
  if (typeof t == "string" || typeof t == "object") {
    const n = typeof t == "string" ? Rs(t) : t.source;
    return e ? new RegExp(`^\\s*${n}`) : new RegExp(`\\s*${n}\\s*$`);
  } else
    return t;
}
class Rf {
  constructor(e, n) {
    this.elements = e, this.range = n;
  }
  getTag(e) {
    return this.getAllTags().find((n) => n.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((n) => n.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const n of this.elements)
      if (e.length === 0)
        e = n.toString();
      else {
        const r = n.toString();
        e += Af(e) + r;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let n = "";
    for (const r of this.elements)
      if (n.length === 0)
        n = r.toMarkdown(e);
      else {
        const i = r.toMarkdown(e);
        n += Af(n) + i;
      }
    return n.trim();
  }
}
class Sa {
  constructor(e, n, r, i) {
    this.name = e, this.content = n, this.inline = r, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const n = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${n}` : this.content.inlines.length > 1 && (e = `${e}
${n}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var n, r;
    return (r = (n = e?.renderTag) === null || n === void 0 ? void 0 : n.call(e, this)) !== null && r !== void 0 ? r : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const n = this.content.toMarkdown(e);
    if (this.inline) {
      const s = NC(this.name, n, e ?? {});
      if (typeof s == "string")
        return s;
    }
    let r = "";
    e?.tag === "italic" || e?.tag === void 0 ? r = "*" : e?.tag === "bold" ? r = "**" : e?.tag === "bold-italic" && (r = "***");
    let i = `${r}@${this.name}${r}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${n}` : this.content.inlines.length > 1 && (i = `${i}
${n}`), this.inline ? `{${i}}` : i;
  }
}
function NC(t, e, n) {
  var r, i;
  if (t === "linkplain" || t === "linkcode" || t === "link") {
    const s = e.indexOf(" ");
    let a = e;
    if (s > 0) {
      const l = wo(e, s);
      a = e.substring(l), e = e.substring(0, s);
    }
    return (t === "linkcode" || t === "link" && n.link === "code") && (a = `\`${a}\``), (i = (r = n.renderLink) === null || r === void 0 ? void 0 : r.call(n, e, a)) !== null && i !== void 0 ? i : bC(e, a);
  }
}
function bC(t, e) {
  try {
    return Xt.parse(t, !0), `[${e}](${t})`;
  } catch {
    return t;
  }
}
class _o {
  constructor(e, n) {
    this.inlines = e, this.range = n;
  }
  toString() {
    let e = "";
    for (let n = 0; n < this.inlines.length; n++) {
      const r = this.inlines[n], i = this.inlines[n + 1];
      e += r.toString(), i && i.range.start.line > r.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let n = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const i = this.inlines[r], s = this.inlines[r + 1];
      n += i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (n += `
`);
    }
    return n;
  }
}
class up {
  constructor(e, n) {
    this.text = e, this.range = n;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}
function Af(t) {
  return t.endsWith(`
`) ? `
` : `

`;
}
class OC {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const n = this.commentProvider.getComment(e);
    if (n && $C(n))
      return vC(n).toMarkdown({
        renderLink: (i, s) => this.documentationLinkRenderer(e, i, s),
        renderTag: (i) => this.documentationTagRenderer(e, i)
      });
  }
  documentationLinkRenderer(e, n, r) {
    var i;
    const s = (i = this.findNameInPrecomputedScopes(e, n)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, n);
    if (s && s.nameSegment) {
      const a = s.nameSegment.range.start.line + 1, o = s.nameSegment.range.start.character + 1, l = s.documentUri.with({ fragment: `L${a},${o}` });
      return `[${r}](${l.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, n) {
  }
  findNameInPrecomputedScopes(e, n) {
    const i = Rt(e).precomputedScopes;
    if (!i)
      return;
    let s = e;
    do {
      const o = i.get(s).find((l) => l.name === n);
      if (o)
        return o;
      s = s.$container;
    } while (s);
  }
  findNameInGlobalScope(e, n) {
    return this.indexManager.allElements().find((i) => i.name === n);
  }
}
class PC {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var n;
    return eC(e) ? e.$comment : (n = Hp(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || n === void 0 ? void 0 : n.text;
  }
}
class LC {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, n) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}
class MC {
  constructor() {
    this.previousTokenSource = new z.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
  }
  write(e) {
    this.cancelWrite();
    const n = U_();
    return this.previousTokenSource = n, this.enqueue(this.writeQueue, e, n.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, n, r = z.CancellationToken.None) {
    const i = new Rl(), s = {
      action: n,
      deferred: i,
      cancellationToken: r
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = !1, await Promise.all(e.map(async ({ action: n, deferred: r, cancellationToken: i }) => {
      try {
        const s = await Promise.resolve().then(() => n(i));
        r.resolve(s);
      } catch (s) {
        Js(s) ? r.resolve(void 0) : r.reject(s);
      }
    })), this.done = !0, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}
class DC {
  constructor(e) {
    this.grammarElementIdMap = new gf(), this.tokenTypeIdMap = new gf(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((n) => Object.assign(Object.assign({}, n), { message: n.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const i of dn(e))
      n.set(i, {});
    if (e.$cstNode)
      for (const i of Da(e.$cstNode))
        r.set(i, {});
    return {
      astNodes: n,
      cstNodes: r
    };
  }
  dehydrateAstNode(e, n) {
    const r = n.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (r.$cstNode = this.dehydrateCstNode(e.$cstNode, n));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ue(o) ? a.push(this.dehydrateAstNode(o, n)) : ze(o) ? a.push(this.dehydrateReference(o, n)) : a.push(o);
        } else ue(s) ? r[i] = this.dehydrateAstNode(s, n) : ze(s) ? r[i] = this.dehydrateReference(s, n) : s !== void 0 && (r[i] = s);
    return r;
  }
  dehydrateReference(e, n) {
    const r = {};
    return r.$refText = e.$refText, e.$refNode && (r.$refNode = n.cstNodes.get(e.$refNode)), r;
  }
  dehydrateCstNode(e, n) {
    const r = n.cstNodes.get(e);
    return Mf(e) ? r.fullText = e.fullText : r.grammarSource = this.getGrammarElementId(e.grammarSource), r.hidden = e.hidden, r.astNode = n.astNodes.get(e.astNode), Pr(e) ? r.content = e.content.map((i) => this.dehydrateCstNode(i, n)) : Lf(e) && (r.tokenType = e.tokenType.name, r.offset = e.offset, r.length = e.length, r.startLine = e.range.start.line, r.startColumn = e.range.start.character, r.endLine = e.range.end.line, r.endColumn = e.range.end.character), r;
  }
  hydrate(e) {
    const n = e.value, r = this.createHydrationContext(n);
    return "$cstNode" in n && this.hydrateCstNode(n.$cstNode, r), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(n, r)
    };
  }
  createHydrationContext(e) {
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const s of dn(e))
      n.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of Da(e.$cstNode)) {
        let a;
        "fullText" in s ? (a = new jh(s.fullText), i = a) : "content" in s ? a = new vl() : "tokenType" in s && (a = this.hydrateCstLeafNode(s)), a && (r.set(s, a), a.root = i);
      }
    return {
      astNodes: n,
      cstNodes: r
    };
  }
  hydrateAstNode(e, n) {
    const r = n.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode && (r.$cstNode = n.cstNodes.get(e.$cstNode));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a = [];
          r[i] = a;
          for (const o of s)
            ue(o) ? a.push(this.setParent(this.hydrateAstNode(o, n), r)) : ze(o) ? a.push(this.hydrateReference(o, r, i, n)) : a.push(o);
        } else ue(s) ? r[i] = this.setParent(this.hydrateAstNode(s, n), r) : ze(s) ? r[i] = this.hydrateReference(s, r, i, n) : s !== void 0 && (r[i] = s);
    return r;
  }
  setParent(e, n) {
    return e.$container = n, e;
  }
  hydrateReference(e, n, r, i) {
    return this.linker.buildReference(n, r, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, n, r = 0) {
    const i = n.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = n.astNodes.get(e.astNode), Pr(i))
      for (const s of e.content) {
        const a = this.hydrateCstNode(s, n, r++);
        i.content.push(a);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const n = this.getTokenType(e.tokenType), r = e.offset, i = e.length, s = e.startLine, a = e.startColumn, o = e.endLine, l = e.endColumn, u = e.hidden;
    return new Ao(r, i, {
      start: {
        line: s,
        character: a
      },
      end: {
        line: o,
        character: l
      }
    }, n, u);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const n of dn(this.grammar))
      zp(n) && this.grammarElementIdMap.set(n, e++);
  }
}
function Pt(t) {
  return {
    documentation: {
      CommentProvider: (e) => new PC(e),
      DocumentationProvider: (e) => new OC(e)
    },
    parser: {
      AsyncParser: (e) => new LC(e),
      GrammarConfig: (e) => Dm(e),
      LangiumParser: (e) => P_(e),
      CompletionParser: (e) => O_(e),
      ValueConverter: () => new Jh(),
      TokenBuilder: () => new Xh(),
      Lexer: (e) => new yC(e),
      ParserErrorMessageProvider: () => new Wh(),
      LexerErrorMessageProvider: () => new mC()
    },
    workspace: {
      AstNodeLocator: () => new uC(),
      AstNodeDescriptionProvider: (e) => new oC(e),
      ReferenceDescriptionProvider: (e) => new lC(e)
    },
    references: {
      Linker: (e) => new H_(e),
      NameProvider: () => new z_(),
      ScopeProvider: (e) => new Q_(e),
      ScopeComputation: (e) => new q_(e),
      References: (e) => new V_(e)
    },
    serializer: {
      Hydrator: (e) => new DC(e),
      JsonSerializer: (e) => new tC(e)
    },
    validation: {
      DocumentValidator: (e) => new iC(e),
      ValidationRegistry: (e) => new rC(e)
    },
    shared: () => t.shared
  };
}
function Lt(t) {
  return {
    ServiceRegistry: (e) => new nC(e),
    workspace: {
      LangiumDocuments: (e) => new K_(e),
      LangiumDocumentFactory: (e) => new j_(e),
      DocumentBuilder: (e) => new dC(e),
      IndexManager: (e) => new hC(e),
      WorkspaceManager: (e) => new pC(e),
      FileSystemProvider: (e) => t.fileSystemProvider(e),
      WorkspaceLock: () => new MC(),
      ConfigurationProvider: (e) => new fC(e)
    }
  };
}
var Ef;
(function(t) {
  t.merge = (e, n) => ys(ys({}, e), n);
})(Ef || (Ef = {}));
function ce(t, e, n, r, i, s, a, o, l) {
  const u = [t, e, n, r, i, s, a, o, l].reduce(ys, {});
  return cp(u);
}
const FC = /* @__PURE__ */ Symbol("isProxy");
function cp(t, e) {
  const n = new Proxy({}, {
    deleteProperty: () => !1,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (r, i) => i === FC ? !0 : Sf(r, i, t, e || n),
    getOwnPropertyDescriptor: (r, i) => (Sf(r, i, t, e || n), Object.getOwnPropertyDescriptor(r, i)),
    // used by for..in
    has: (r, i) => i in t,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(t)]
    // used by for..in
  });
  return n;
}
const xf = /* @__PURE__ */ Symbol();
function Sf(t, e, n, r) {
  if (e in t) {
    if (t[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: t[e] });
    if (t[e] === xf)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return t[e];
  } else if (e in n) {
    const i = n[e];
    t[e] = xf;
    try {
      t[e] = typeof i == "function" ? i(r) : cp(i, r);
    } catch (s) {
      throw t[e] = s instanceof Error ? s : void 0, s;
    }
    return t[e];
  } else
    return;
}
function ys(t, e) {
  if (e) {
    for (const [n, r] of Object.entries(e))
      if (r !== void 0) {
        const i = t[n];
        i !== null && r !== null && typeof i == "object" && typeof r == "object" ? t[n] = ys(i, r) : t[n] = r;
      }
  }
  return t;
}
class GC {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}
const Mt = {
  fileSystemProvider: () => new GC()
}, UC = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: !1,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
}, BC = {
  AstReflection: () => new Kf()
};
function jC() {
  const t = ce(Lt(Mt), BC), e = ce(Pt({ shared: t }), UC);
  return t.ServiceRegistry.register(e), e;
}
function an(t) {
  var e;
  const n = jC(), r = n.serializer.JsonSerializer.deserialize(t);
  return n.shared.workspace.LangiumDocumentFactory.fromModel(r, Xt.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), r;
}
var KC = Object.defineProperty, A = (t, e) => KC(t, "name", { value: e, configurable: !0 }), If = "Statement", Mi = "Architecture";
function HC(t) {
  return Ke.isInstance(t, Mi);
}
A(HC, "isArchitecture");
var $i = "Axis", wr = "Branch";
function WC(t) {
  return Ke.isInstance(t, wr);
}
A(WC, "isBranch");
var Ri = "Checkout", Ai = "CherryPicking", Ia = "ClassDefStatement", _r = "Commit";
function zC(t) {
  return Ke.isInstance(t, _r);
}
A(zC, "isCommit");
var wa = "Curve", _a = "Edge", Ca = "Entry", Cr = "GitGraph";
function VC(t) {
  return Ke.isInstance(t, Cr);
}
A(VC, "isGitGraph");
var ka = "Group", Di = "Info";
function qC(t) {
  return Ke.isInstance(t, Di);
}
A(qC, "isInfo");
var Ei = "Item", Na = "Junction", kr = "Merge";
function YC(t) {
  return Ke.isInstance(t, kr);
}
A(YC, "isMerge");
var ba = "Option", Fi = "Packet";
function XC(t) {
  return Ke.isInstance(t, Fi);
}
A(XC, "isPacket");
var Gi = "PacketBlock";
function JC(t) {
  return Ke.isInstance(t, Gi);
}
A(JC, "isPacketBlock");
var Ui = "Pie";
function ZC(t) {
  return Ke.isInstance(t, Ui);
}
A(ZC, "isPie");
var Bi = "PieSection";
function QC(t) {
  return Ke.isInstance(t, Bi);
}
A(QC, "isPieSection");
var Oa = "Radar", Pa = "Service", ji = "Treemap";
function ek(t) {
  return Ke.isInstance(t, ji);
}
A(ek, "isTreemap");
var La = "TreemapRow", xi = "Direction", Si = "Leaf", Ii = "Section", mn, fp = (mn = class extends Pf {
  getAllTypes() {
    return [Mi, $i, wr, Ri, Ai, Ia, _r, wa, xi, _a, Ca, Cr, ka, Di, Ei, Na, Si, kr, ba, Fi, Gi, Ui, Bi, Oa, Ii, Pa, If, ji, La];
  }
  computeIsSubtype(e, n) {
    switch (e) {
      case wr:
      case Ri:
      case Ai:
      case _r:
      case kr:
        return this.isSubtype(If, n);
      case xi:
        return this.isSubtype(Cr, n);
      case Si:
      case Ii:
        return this.isSubtype(Ei, n);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const n = `${e.container.$type}:${e.property}`;
    if (n === "Entry:axis")
      return $i;
    throw new Error(`${n} is not a valid reference id.`);
  }
  getTypeMetaData(e) {
    switch (e) {
      case Mi:
        return {
          name: Mi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      case $i:
        return {
          name: $i,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case wr:
        return {
          name: wr,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case Ri:
        return {
          name: Ri,
          properties: [
            { name: "branch" }
          ]
        };
      case Ai:
        return {
          name: Ai,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case Ia:
        return {
          name: Ia,
          properties: [
            { name: "className" },
            { name: "styleText" }
          ]
        };
      case _r:
        return {
          name: _r,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case wa:
        return {
          name: wa,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case _a:
        return {
          name: _a,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: !1 },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: !1 },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: !1 },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case Ca:
        return {
          name: Ca,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case Cr:
        return {
          name: Cr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case ka:
        return {
          name: ka,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Di:
        return {
          name: Di,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case Ei:
        return {
          name: Ei,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      case Na:
        return {
          name: Na,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case kr:
        return {
          name: kr,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case ba:
        return {
          name: ba,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: !1 }
          ]
        };
      case Fi:
        return {
          name: Fi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Gi:
        return {
          name: Gi,
          properties: [
            { name: "bits" },
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case Ui:
        return {
          name: Ui,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case Bi:
        return {
          name: Bi,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case Oa:
        return {
          name: Oa,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Pa:
        return {
          name: Pa,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case ji:
        return {
          name: ji,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" },
            { name: "TreemapRows", defaultValue: [] }
          ]
        };
      case La:
        return {
          name: La,
          properties: [
            { name: "indent" },
            { name: "item" }
          ]
        };
      case xi:
        return {
          name: xi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Si:
        return {
          name: Si,
          properties: [
            { name: "classSelector" },
            { name: "name" },
            { name: "value" }
          ]
        };
      case Ii:
        return {
          name: Ii,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}, A(mn, "MermaidAstReflection"), mn), Ke = new fp(), wf, tk = /* @__PURE__ */ A(() => wf ?? (wf = an(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar"), _f, nk = /* @__PURE__ */ A(() => _f ?? (_f = an(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), Cf, rk = /* @__PURE__ */ A(() => Cf ?? (Cf = an(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar"), kf, ik = /* @__PURE__ */ A(() => kf ?? (kf = an(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar"), Nf, sk = /* @__PURE__ */ A(() => Nf ?? (Nf = an(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), bf, ak = /* @__PURE__ */ A(() => bf ?? (bf = an(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), Of, ok = /* @__PURE__ */ A(() => Of ?? (Of = an(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammar"), lk = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, uk = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ck = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, fk = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, dk = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, hk = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, pk = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, on = {
  AstReflection: /* @__PURE__ */ A(() => new fp(), "AstReflection")
}, mk = {
  Grammar: /* @__PURE__ */ A(() => tk(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => lk, "LanguageMetaData"),
  parser: {}
}, gk = {
  Grammar: /* @__PURE__ */ A(() => nk(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => uk, "LanguageMetaData"),
  parser: {}
}, yk = {
  Grammar: /* @__PURE__ */ A(() => rk(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => ck, "LanguageMetaData"),
  parser: {}
}, Tk = {
  Grammar: /* @__PURE__ */ A(() => ik(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => fk, "LanguageMetaData"),
  parser: {}
}, vk = {
  Grammar: /* @__PURE__ */ A(() => sk(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => dk, "LanguageMetaData"),
  parser: {}
}, $k = {
  Grammar: /* @__PURE__ */ A(() => ak(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => hk, "LanguageMetaData"),
  parser: {}
}, Rk = {
  Grammar: /* @__PURE__ */ A(() => ok(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => pk, "LanguageMetaData"),
  parser: {}
}, Ak = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Ek = /accTitle[\t ]*:([^\n\r]*)/, xk = /title([\t ][^\n\r]*|)/, Sk = {
  ACC_DESCR: Ak,
  ACC_TITLE: Ek,
  TITLE: xk
}, gn, Zs = (gn = class extends Jh {
  runConverter(e, n, r) {
    let i = this.runCommonConverter(e, n, r);
    return i === void 0 && (i = this.runCustomConverter(e, n, r)), i === void 0 ? super.runConverter(e, n, r) : i;
  }
  runCommonConverter(e, n, r) {
    const i = Sk[e.name];
    if (i === void 0)
      return;
    const s = i.exec(n);
    if (s !== null) {
      if (s[1] !== void 0)
        return s[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (s[2] !== void 0)
        return s[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, A(gn, "AbstractMermaidValueConverter"), gn), yn, Qs = (yn = class extends Zs {
  runCustomConverter(e, n, r) {
  }
}, A(yn, "CommonValueConverter"), yn), Tn, Dt = (Tn = class extends Xh {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, n, r) {
    const i = super.buildKeywordTokens(e, n, r);
    return i.forEach((s) => {
      this.keywords.has(s.name) && s.PATTERN !== void 0 && (s.PATTERN = new RegExp(s.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), i;
  }
}, A(Tn, "AbstractMermaidTokenBuilder"), Tn), vn;
vn = class extends Dt {
}, A(vn, "CommonTokenBuilder");
var $n, Ik = ($n = class extends Dt {
  constructor() {
    super(["gitGraph"]);
  }
}, A($n, "GitGraphTokenBuilder"), $n), dp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Ik(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Qs(), "ValueConverter")
  }
};
function hp(t = Mt) {
  const e = ce(
    Lt(t),
    on
  ), n = ce(
    Pt({ shared: e }),
    vk,
    dp
  );
  return e.ServiceRegistry.register(n), { shared: e, GitGraph: n };
}
A(hp, "createGitGraphServices");
var Rn, wk = (Rn = class extends Dt {
  constructor() {
    super(["info", "showInfo"]);
  }
}, A(Rn, "InfoTokenBuilder"), Rn), pp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new wk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Qs(), "ValueConverter")
  }
};
function mp(t = Mt) {
  const e = ce(
    Lt(t),
    on
  ), n = ce(
    Pt({ shared: e }),
    mk,
    pp
  );
  return e.ServiceRegistry.register(n), { shared: e, Info: n };
}
A(mp, "createInfoServices");
var An, _k = (An = class extends Dt {
  constructor() {
    super(["packet"]);
  }
}, A(An, "PacketTokenBuilder"), An), gp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new _k(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Qs(), "ValueConverter")
  }
};
function yp(t = Mt) {
  const e = ce(
    Lt(t),
    on
  ), n = ce(
    Pt({ shared: e }),
    gk,
    gp
  );
  return e.ServiceRegistry.register(n), { shared: e, Packet: n };
}
A(yp, "createPacketServices");
var En, Ck = (En = class extends Dt {
  constructor() {
    super(["pie", "showData"]);
  }
}, A(En, "PieTokenBuilder"), En), xn, kk = (xn = class extends Zs {
  runCustomConverter(e, n, r) {
    if (e.name === "PIE_SECTION_LABEL")
      return n.replace(/"/g, "").trim();
  }
}, A(xn, "PieValueConverter"), xn), Tp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Ck(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new kk(), "ValueConverter")
  }
};
function vp(t = Mt) {
  const e = ce(
    Lt(t),
    on
  ), n = ce(
    Pt({ shared: e }),
    yk,
    Tp
  );
  return e.ServiceRegistry.register(n), { shared: e, Pie: n };
}
A(vp, "createPieServices");
var Sn, Nk = (Sn = class extends Dt {
  constructor() {
    super(["architecture"]);
  }
}, A(Sn, "ArchitectureTokenBuilder"), Sn), In, bk = (In = class extends Zs {
  runCustomConverter(e, n, r) {
    if (e.name === "ARCH_ICON")
      return n.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return n.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE")
      return n.replace(/[[\]]/g, "").trim();
  }
}, A(In, "ArchitectureValueConverter"), In), $p = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Nk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new bk(), "ValueConverter")
  }
};
function Rp(t = Mt) {
  const e = ce(
    Lt(t),
    on
  ), n = ce(
    Pt({ shared: e }),
    Tk,
    $p
  );
  return e.ServiceRegistry.register(n), { shared: e, Architecture: n };
}
A(Rp, "createArchitectureServices");
var wn, Ok = (wn = class extends Dt {
  constructor() {
    super(["radar-beta"]);
  }
}, A(wn, "RadarTokenBuilder"), wn), Ap = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Ok(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Qs(), "ValueConverter")
  }
};
function Ep(t = Mt) {
  const e = ce(
    Lt(t),
    on
  ), n = ce(
    Pt({ shared: e }),
    $k,
    Ap
  );
  return e.ServiceRegistry.register(n), { shared: e, Radar: n };
}
A(Ep, "createRadarServices");
var _n, Pk = (_n = class extends Dt {
  constructor() {
    super(["treemap"]);
  }
}, A(_n, "TreemapTokenBuilder"), _n), Lk = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, Cn, Mk = (Cn = class extends Zs {
  runCustomConverter(e, n, r) {
    if (e.name === "NUMBER2")
      return parseFloat(n.replace(/,/g, ""));
    if (e.name === "SEPARATOR")
      return n.substring(1, n.length - 1);
    if (e.name === "STRING2")
      return n.substring(1, n.length - 1);
    if (e.name === "INDENTATION")
      return n.length;
    if (e.name === "ClassDef") {
      if (typeof n != "string")
        return n;
      const i = Lk.exec(n);
      if (i)
        return {
          $type: "ClassDefStatement",
          className: i[1],
          styleText: i[2] || void 0
        };
    }
  }
}, A(Cn, "TreemapValueConverter"), Cn);
function xp(t) {
  const e = t.validation.TreemapValidator, n = t.validation.ValidationRegistry;
  if (n) {
    const r = {
      Treemap: e.checkSingleRoot.bind(e)
      // Remove unused validation for TreemapRow
    };
    n.register(r, e);
  }
}
A(xp, "registerValidationChecks");
var kn, Dk = (kn = class {
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(e, n) {
    let r;
    for (const i of e.TreemapRows)
      i.item && (r === void 0 && // Check if this is a root node (no indentation)
      i.indent === void 0 ? r = 0 : i.indent === void 0 ? n("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }) : r !== void 0 && r >= parseInt(i.indent, 10) && n("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }));
  }
}, A(kn, "TreemapValidator"), kn), Sp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Pk(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Mk(), "ValueConverter")
  },
  validation: {
    TreemapValidator: /* @__PURE__ */ A(() => new Dk(), "TreemapValidator")
  }
};
function Ip(t = Mt) {
  const e = ce(
    Lt(t),
    on
  ), n = ce(
    Pt({ shared: e }),
    Rk,
    Sp
  );
  return e.ServiceRegistry.register(n), xp(n), { shared: e, Treemap: n };
}
A(Ip, "createTreemapServices");
var it = {}, Fk = {
  info: /* @__PURE__ */ A(async () => {
    const { createInfoServices: t } = await Promise.resolve().then(() => Bk), e = t().Info.parser.LangiumParser;
    it.info = e;
  }, "info"),
  packet: /* @__PURE__ */ A(async () => {
    const { createPacketServices: t } = await Promise.resolve().then(() => jk), e = t().Packet.parser.LangiumParser;
    it.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ A(async () => {
    const { createPieServices: t } = await Promise.resolve().then(() => Kk), e = t().Pie.parser.LangiumParser;
    it.pie = e;
  }, "pie"),
  architecture: /* @__PURE__ */ A(async () => {
    const { createArchitectureServices: t } = await Promise.resolve().then(() => Hk), e = t().Architecture.parser.LangiumParser;
    it.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ A(async () => {
    const { createGitGraphServices: t } = await Promise.resolve().then(() => Wk), e = t().GitGraph.parser.LangiumParser;
    it.gitGraph = e;
  }, "gitGraph"),
  radar: /* @__PURE__ */ A(async () => {
    const { createRadarServices: t } = await Promise.resolve().then(() => zk), e = t().Radar.parser.LangiumParser;
    it.radar = e;
  }, "radar"),
  treemap: /* @__PURE__ */ A(async () => {
    const { createTreemapServices: t } = await Promise.resolve().then(() => Vk), e = t().Treemap.parser.LangiumParser;
    it.treemap = e;
  }, "treemap")
};
async function Gk(t, e) {
  const n = Fk[t];
  if (!n)
    throw new Error(`Unknown diagram type: ${t}`);
  it[t] || await n();
  const i = it[t].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new Uk(i);
  return i.value;
}
A(Gk, "parse");
var Nn, Uk = (Nn = class extends Error {
  constructor(e) {
    const n = e.lexerErrors.map((i) => i.message).join(`
`), r = e.parserErrors.map((i) => i.message).join(`
`);
    super(`Parsing failed: ${n} ${r}`), this.result = e;
  }
}, A(Nn, "MermaidParseError"), Nn);
const Bk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: pp,
  createInfoServices: mp
}, Symbol.toStringTag, { value: "Module" })), jk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: gp,
  createPacketServices: yp
}, Symbol.toStringTag, { value: "Module" })), Kk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: Tp,
  createPieServices: vp
}, Symbol.toStringTag, { value: "Module" })), Hk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: $p,
  createArchitectureServices: Rp
}, Symbol.toStringTag, { value: "Module" })), Wk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: dp,
  createGitGraphServices: hp
}, Symbol.toStringTag, { value: "Module" })), zk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: Ap,
  createRadarServices: Ep
}, Symbol.toStringTag, { value: "Module" })), Vk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreemapModule: Sp,
  createTreemapServices: Ip
}, Symbol.toStringTag, { value: "Module" }));
export {
  Gk as p
};
