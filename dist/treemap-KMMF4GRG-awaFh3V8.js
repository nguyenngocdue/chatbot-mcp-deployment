import { m as st, f as Gd, d as Ud } from "./min-DJlKzC8s.js";
import { b as Bd, l as jd, c as Kd, m as Hd, r as Co, n as vs } from "./_baseUniq-BvgujK6m.js";
import { aN as Vd } from "./mermaid.core-v6Q0JMw7.js";
function Wd(t, e) {
  return Bd(st(t, e));
}
function zd(t, e) {
  return t && t.length ? jd(t, Kd(e)) : [];
}
function le(t) {
  return typeof t == "object" && t !== null && typeof t.$type == "string";
}
function ze(t) {
  return typeof t == "object" && t !== null && typeof t.$refText == "string";
}
function qd(t) {
  return typeof t == "object" && t !== null && typeof t.name == "string" && typeof t.type == "string" && typeof t.path == "string";
}
function si(t) {
  return typeof t == "object" && t !== null && le(t.container) && ze(t.reference) && typeof t.message == "string";
}
class fc {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, n) {
    return le(e) && this.isSubtype(e.$type, n);
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
function yr(t) {
  return typeof t == "object" && t !== null && Array.isArray(t.content);
}
function dc(t) {
  return typeof t == "object" && t !== null && typeof t.tokenType == "object";
}
function hc(t) {
  return yr(t) && typeof t.fullText == "string";
}
class ne {
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
    return new ne(() => ({ first: this.startFn(), firstDone: !1, iterator: e[Symbol.iterator]() }), (n) => {
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
      i = n.next(), i.done || (s && (r += e), r += Yd(i.value)), s = !0;
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
    return new ne(this.startFn, (n) => {
      const { done: r, value: i } = this.nextFn(n);
      return r ? Ae : { done: !1, value: e(i) };
    });
  }
  filter(e) {
    return new ne(this.startFn, (n) => {
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
    return new ne(() => ({ this: this.startFn() }), (n) => {
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
          if (Ai(s))
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
    return new ne(() => ({ this: n.startFn() }), (r) => {
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
          if (Ai(s))
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
    return new ne(() => {
      const n = this.startFn();
      for (let r = 0; r < e; r++)
        if (this.nextFn(n).done)
          return n;
      return n;
    }, this.nextFn);
  }
  limit(e) {
    return new ne(() => ({ size: 0, state: this.startFn() }), (n) => (n.size++, n.size > e ? Ae : this.nextFn(n.state)));
  }
  distinct(e) {
    return new ne(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (n) => {
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
function Yd(t) {
  return typeof t == "string" ? t : typeof t > "u" ? "undefined" : typeof t.toString == "function" ? t.toString() : Object.prototype.toString.call(t);
}
function Ai(t) {
  return !!t && typeof t[Symbol.iterator] == "function";
}
const Xd = new ne(() => {
}, () => Ae), Ae = Object.freeze({ done: !0, value: void 0 });
function re(...t) {
  if (t.length === 1) {
    const e = t[0];
    if (e instanceof ne)
      return e;
    if (Ai(e))
      return new ne(() => e[Symbol.iterator](), (n) => n.next());
    if (typeof e.length == "number")
      return new ne(() => ({ index: 0 }), (n) => n.index < e.length ? { done: !1, value: e[n.index++] } : Ae);
  }
  return t.length > 1 ? new ne(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
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
        Ai(n) ? e.iterator = n[Symbol.iterator]() : n && typeof n.length == "number" && (e.array = n);
      }
    } while (e.iterator || e.array || e.collIndex < t.length);
    return Ae;
  }) : Xd;
}
class Da extends ne {
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
var Js;
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
})(Js || (Js = {}));
function Zs(t) {
  return new Da(t, (e) => yr(e) ? e.content : [], { includeRoot: !0 });
}
function Jd(t, e) {
  for (; t.container; )
    if (t = t.container, t === e)
      return !0;
  return !1;
}
function Qs(t) {
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
function Ei(t) {
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
var rt;
(function(t) {
  t[t.Before = 0] = "Before", t[t.After = 1] = "After", t[t.OverlapFront = 2] = "OverlapFront", t[t.OverlapBack = 3] = "OverlapBack", t[t.Inside = 4] = "Inside", t[t.Outside = 5] = "Outside";
})(rt || (rt = {}));
function Zd(t, e) {
  if (t.end.line < e.start.line || t.end.line === e.start.line && t.end.character <= e.start.character)
    return rt.Before;
  if (t.start.line > e.end.line || t.start.line === e.end.line && t.start.character >= e.end.character)
    return rt.After;
  const n = t.start.line > e.start.line || t.start.line === e.start.line && t.start.character >= e.start.character, r = t.end.line < e.end.line || t.end.line === e.end.line && t.end.character <= e.end.character;
  return n && r ? rt.Inside : n ? rt.OverlapBack : r ? rt.OverlapFront : rt.Outside;
}
function Qd(t, e) {
  return Zd(t, e) > rt.After;
}
const eh = /^[\w\p{L}]$/u;
function th(t, e) {
  if (t) {
    const n = nh(t, !0);
    if (n && wo(n, e))
      return n;
    if (hc(t)) {
      const r = t.content.findIndex((i) => !i.hidden);
      for (let i = r - 1; i >= 0; i--) {
        const s = t.content[i];
        if (wo(s, e))
          return s;
      }
    }
  }
}
function wo(t, e) {
  return dc(t) && e.includes(t.tokenType.name);
}
function nh(t, e = !0) {
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
class pc extends Error {
  constructor(e, n) {
    super(e ? `${n} at ${e.range.start.line}:${e.range.start.character}` : n);
  }
}
function xr(t) {
  throw new Error("Error! The input value was not handled.");
}
const Mr = "AbstractRule", Dr = "AbstractType", Rs = "Condition", No = "TypeDefinition", As = "ValueLiteral", On = "AbstractElement";
function rh(t) {
  return F.isInstance(t, On);
}
const Fr = "ArrayLiteral", Gr = "ArrayType", Ln = "BooleanLiteral";
function ih(t) {
  return F.isInstance(t, Ln);
}
const Pn = "Conjunction";
function sh(t) {
  return F.isInstance(t, Pn);
}
const Mn = "Disjunction";
function ah(t) {
  return F.isInstance(t, Mn);
}
const Ur = "Grammar", Es = "GrammarImport", Dn = "InferredType";
function mc(t) {
  return F.isInstance(t, Dn);
}
const Fn = "Interface";
function gc(t) {
  return F.isInstance(t, Fn);
}
const $s = "NamedArgument", Gn = "Negation";
function oh(t) {
  return F.isInstance(t, Gn);
}
const Br = "NumberLiteral", jr = "Parameter", Un = "ParameterReference";
function lh(t) {
  return F.isInstance(t, Un);
}
const Bn = "ParserRule";
function _e(t) {
  return F.isInstance(t, Bn);
}
const Kr = "ReferenceType", ai = "ReturnType";
function uh(t) {
  return F.isInstance(t, ai);
}
const jn = "SimpleType";
function ch(t) {
  return F.isInstance(t, jn);
}
const Hr = "StringLiteral", qt = "TerminalRule";
function Gt(t) {
  return F.isInstance(t, qt);
}
const Kn = "Type";
function yc(t) {
  return F.isInstance(t, Kn);
}
const xs = "TypeAttribute", Vr = "UnionType", Hn = "Action";
function Wi(t) {
  return F.isInstance(t, Hn);
}
const Vn = "Alternatives";
function Tc(t) {
  return F.isInstance(t, Vn);
}
const Wn = "Assignment";
function bt(t) {
  return F.isInstance(t, Wn);
}
const zn = "CharacterRange";
function fh(t) {
  return F.isInstance(t, zn);
}
const qn = "CrossReference";
function Fa(t) {
  return F.isInstance(t, qn);
}
const Yn = "EndOfFile";
function dh(t) {
  return F.isInstance(t, Yn);
}
const Xn = "Group";
function Ga(t) {
  return F.isInstance(t, Xn);
}
const Jn = "Keyword";
function Ot(t) {
  return F.isInstance(t, Jn);
}
const Zn = "NegatedToken";
function hh(t) {
  return F.isInstance(t, Zn);
}
const Qn = "RegexToken";
function ph(t) {
  return F.isInstance(t, Qn);
}
const er = "RuleCall";
function Lt(t) {
  return F.isInstance(t, er);
}
const tr = "TerminalAlternatives";
function mh(t) {
  return F.isInstance(t, tr);
}
const nr = "TerminalGroup";
function gh(t) {
  return F.isInstance(t, nr);
}
const rr = "TerminalRuleCall";
function yh(t) {
  return F.isInstance(t, rr);
}
const ir = "UnorderedGroup";
function vc(t) {
  return F.isInstance(t, ir);
}
const sr = "UntilToken";
function Th(t) {
  return F.isInstance(t, sr);
}
const ar = "Wildcard";
function vh(t) {
  return F.isInstance(t, ar);
}
class Rc extends fc {
  getAllTypes() {
    return [On, Mr, Dr, Hn, Vn, Fr, Gr, Wn, Ln, zn, Rs, Pn, qn, Mn, Yn, Ur, Es, Xn, Dn, Fn, Jn, $s, Zn, Gn, Br, jr, Un, Bn, Kr, Qn, ai, er, jn, Hr, tr, nr, qt, rr, Kn, xs, No, Vr, ir, sr, As, ar];
  }
  computeIsSubtype(e, n) {
    switch (e) {
      case Hn:
      case Vn:
      case Wn:
      case zn:
      case qn:
      case Yn:
      case Xn:
      case Jn:
      case Zn:
      case Qn:
      case er:
      case tr:
      case nr:
      case rr:
      case ir:
      case sr:
      case ar:
        return this.isSubtype(On, n);
      case Fr:
      case Br:
      case Hr:
        return this.isSubtype(As, n);
      case Gr:
      case Kr:
      case jn:
      case Vr:
        return this.isSubtype(No, n);
      case Ln:
        return this.isSubtype(Rs, n) || this.isSubtype(As, n);
      case Pn:
      case Mn:
      case Gn:
      case Un:
        return this.isSubtype(Rs, n);
      case Dn:
      case Fn:
      case Kn:
        return this.isSubtype(Dr, n);
      case Bn:
        return this.isSubtype(Mr, n) || this.isSubtype(Dr, n);
      case qt:
        return this.isSubtype(Mr, n);
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
        return Dr;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return Mr;
      case "Grammar:usedGrammars":
        return Ur;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return jr;
      case "TerminalRuleCall:rule":
        return qt;
      default:
        throw new Error(`${n} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case On:
        return {
          name: On,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case Fr:
        return {
          name: Fr,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case Gr:
        return {
          name: Gr,
          properties: [
            { name: "elementType" }
          ]
        };
      case Ln:
        return {
          name: Ln,
          properties: [
            { name: "true", defaultValue: !1 }
          ]
        };
      case Pn:
        return {
          name: Pn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case Mn:
        return {
          name: Mn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case Ur:
        return {
          name: Ur,
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
      case Es:
        return {
          name: Es,
          properties: [
            { name: "path" }
          ]
        };
      case Dn:
        return {
          name: Dn,
          properties: [
            { name: "name" }
          ]
        };
      case Fn:
        return {
          name: Fn,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case $s:
        return {
          name: $s,
          properties: [
            { name: "calledByName", defaultValue: !1 },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case Gn:
        return {
          name: Gn,
          properties: [
            { name: "value" }
          ]
        };
      case Br:
        return {
          name: Br,
          properties: [
            { name: "value" }
          ]
        };
      case jr:
        return {
          name: jr,
          properties: [
            { name: "name" }
          ]
        };
      case Un:
        return {
          name: Un,
          properties: [
            { name: "parameter" }
          ]
        };
      case Bn:
        return {
          name: Bn,
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
      case Kr:
        return {
          name: Kr,
          properties: [
            { name: "referenceType" }
          ]
        };
      case ai:
        return {
          name: ai,
          properties: [
            { name: "name" }
          ]
        };
      case jn:
        return {
          name: jn,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case Hr:
        return {
          name: Hr,
          properties: [
            { name: "value" }
          ]
        };
      case qt:
        return {
          name: qt,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: !1 },
            { name: "hidden", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case Kn:
        return {
          name: Kn,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case xs:
        return {
          name: xs,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: !1 },
            { name: "name" },
            { name: "type" }
          ]
        };
      case Vr:
        return {
          name: Vr,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case Hn:
        return {
          name: Hn,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case Vn:
        return {
          name: Vn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Wn:
        return {
          name: Wn,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case zn:
        return {
          name: zn,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case qn:
        return {
          name: qn,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: !1 },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case Yn:
        return {
          name: Yn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case Xn:
        return {
          name: Xn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case Jn:
        return {
          name: Jn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case Zn:
        return {
          name: Zn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Qn:
        return {
          name: Qn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case er:
        return {
          name: er,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case tr:
        return {
          name: tr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case nr:
        return {
          name: nr,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case rr:
        return {
          name: rr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case ir:
        return {
          name: ir,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case sr:
        return {
          name: sr,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case ar:
        return {
          name: ar,
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
const F = new Rc();
function Rh(t) {
  for (const [e, n] of Object.entries(t))
    e.startsWith("$") || (Array.isArray(n) ? n.forEach((r, i) => {
      le(r) && (r.$container = t, r.$containerProperty = e, r.$containerIndex = i);
    }) : le(n) && (n.$container = t, n.$containerProperty = e));
}
function zi(t, e) {
  let n = t;
  for (; n; ) {
    if (e(n))
      return n;
    n = n.$container;
  }
}
function pt(t) {
  const n = ea(t).$document;
  if (!n)
    throw new Error("AST node has no document.");
  return n;
}
function ea(t) {
  for (; t.$container; )
    t = t.$container;
  return t;
}
function Ua(t, e) {
  if (!t)
    throw new Error("Node must be an AstNode.");
  const n = e?.range;
  return new ne(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (r) => {
    for (; r.keyIndex < r.keys.length; ) {
      const i = r.keys[r.keyIndex];
      if (!i.startsWith("$")) {
        const s = t[i];
        if (le(s)) {
          if (r.keyIndex++, _o(s, n))
            return { done: !1, value: s };
        } else if (Array.isArray(s)) {
          for (; r.arrayIndex < s.length; ) {
            const a = r.arrayIndex++, o = s[a];
            if (le(o) && _o(o, n))
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
function Sr(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new Da(t, (n) => Ua(n, e));
}
function Xt(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new Da(t, (n) => Ua(n, e), { includeRoot: !0 });
}
function _o(t, e) {
  var n;
  if (!e)
    return !0;
  const r = (n = t.$cstNode) === null || n === void 0 ? void 0 : n.range;
  return r ? Qd(r, e) : !1;
}
function Ac(t) {
  return new ne(() => ({
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
function Ah(t, e) {
  const n = t.getTypeMetaData(e.$type), r = e;
  for (const i of n.properties)
    i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = Ec(i.defaultValue));
}
function Ec(t) {
  return Array.isArray(t) ? [...t.map(Ec)] : t;
}
function N(t) {
  return t.charCodeAt(0);
}
function Ss(t, e) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.push(n);
  }) : e.push(t);
}
function wn(t, e) {
  if (t[e] === !0)
    throw "duplicate flag " + e;
  t[e], t[e] = !0;
}
function zt(t) {
  if (t === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function Eh() {
  throw Error("Internal Error - Should never get here!");
}
function bo(t) {
  return t.type === "Character";
}
const $i = [];
for (let t = N("0"); t <= N("9"); t++)
  $i.push(t);
const xi = [N("_")].concat($i);
for (let t = N("a"); t <= N("z"); t++)
  xi.push(t);
for (let t = N("A"); t <= N("Z"); t++)
  xi.push(t);
const Oo = [
  N(" "),
  N("\f"),
  N(`
`),
  N("\r"),
  N("	"),
  N("\v"),
  N("	"),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N(" "),
  N("\u2028"),
  N("\u2029"),
  N(" "),
  N(" "),
  N("　"),
  N("\uFEFF")
], $h = /[0-9a-fA-F]/, Wr = /[0-9]/, xh = /[1-9]/;
class $c {
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
          wn(r, "global");
          break;
        case "i":
          wn(r, "ignoreCase");
          break;
        case "m":
          wn(r, "multiLine");
          break;
        case "u":
          wn(r, "unicode");
          break;
        case "y":
          wn(r, "sticky");
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
        zt(n);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: n,
          value: r,
          loc: this.loc(e)
        };
    }
    return Eh();
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
        zt(n);
        break;
    }
    if (!(e === !0 && n === void 0) && zt(n))
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
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), zt(e))
      return e.loc = this.loc(n), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [N(`
`), N("\r"), N("\u2028"), N("\u2029")]
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
        e = $i;
        break;
      case "D":
        e = $i, n = !0;
        break;
      case "s":
        e = Oo;
        break;
      case "S":
        e = Oo, n = !0;
        break;
      case "w":
        e = xi;
        break;
      case "W":
        e = xi, n = !0;
        break;
    }
    if (zt(e))
      return { type: "Set", value: e, complement: n };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = N("\f");
        break;
      case "n":
        e = N(`
`);
        break;
      case "r":
        e = N("\r");
        break;
      case "t":
        e = N("	");
        break;
      case "v":
        e = N("\v");
        break;
    }
    if (zt(e))
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
    return this.consumeChar("0"), { type: "Character", value: N("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: N(e) };
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
        return { type: "Character", value: N(e) };
    }
  }
  characterClass() {
    const e = [];
    let n = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), n = !0); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, bo(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, bo(i)) {
          if (i.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: i.value });
        } else
          Ss(r.value, e), e.push(N("-")), Ss(i.value, e);
      } else
        Ss(r.value, e);
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
        return this.consumeChar("b"), { type: "Character", value: N("\b") };
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
    if (xh.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; Wr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (Wr.test(e) === !1)
      throw Error("Expecting an integer");
    for (; Wr.test(this.peekChar(0)); )
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
        return { type: "Character", value: N(e) };
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
    return Wr.test(this.peekChar(0));
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
      if ($h.test(s) === !1)
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
class qi {
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
const Sh = /\r?\n/gm, kh = new $c();
class Ih extends qi {
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
      const r = Yi(n);
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
const ks = new Ih();
function Ch(t) {
  try {
    return typeof t == "string" && (t = new RegExp(t)), t = t.toString(), ks.reset(t), ks.visit(kh.pattern(t)), ks.multiline;
  } catch {
    return !1;
  }
}
const wh = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function ta(t) {
  const e = typeof t == "string" ? new RegExp(t) : t;
  return wh.some((n) => e.test(n));
}
function Yi(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Nh(t) {
  return Array.prototype.map.call(t, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : Yi(e)).join("");
}
function _h(t, e) {
  const n = bh(t), r = e.match(n);
  return !!r && r[0].length > 0;
}
function bh(t) {
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
function Oh(t) {
  return t.rules.find((e) => _e(e) && e.entry);
}
function Lh(t) {
  return t.rules.filter((e) => Gt(e) && e.hidden);
}
function xc(t, e) {
  const n = /* @__PURE__ */ new Set(), r = Oh(t);
  if (!r)
    return new Set(t.rules);
  const i = [r].concat(Lh(t));
  for (const a of i)
    Sc(a, n, e);
  const s = /* @__PURE__ */ new Set();
  for (const a of t.rules)
    (n.has(a.name) || Gt(a) && a.hidden) && s.add(a);
  return s;
}
function Sc(t, e, n) {
  e.add(t.name), Sr(t).forEach((r) => {
    if (Lt(r) || n) {
      const i = r.rule.ref;
      i && !e.has(i.name) && Sc(i, e, n);
    }
  });
}
function Ph(t) {
  if (t.terminal)
    return t.terminal;
  if (t.type.ref) {
    const e = Ic(t.type.ref);
    return e?.terminal;
  }
}
function Mh(t) {
  return t.hidden && !ta(Ha(t));
}
function Dh(t, e) {
  return !t || !e ? [] : Ba(t, e, t.astNode, !0);
}
function kc(t, e, n) {
  if (!t || !e)
    return;
  const r = Ba(t, e, t.astNode, !0);
  if (r.length !== 0)
    return n !== void 0 ? n = Math.max(0, Math.min(n, r.length - 1)) : n = 0, r[n];
}
function Ba(t, e, n, r) {
  if (!r) {
    const i = zi(t.grammarSource, bt);
    if (i && i.feature === e)
      return [t];
  }
  return yr(t) && t.astNode === n ? t.content.flatMap((i) => Ba(i, e, n, !1)) : [];
}
function Fh(t, e, n) {
  if (!t)
    return;
  const r = Gh(t, e, t?.astNode);
  if (r.length !== 0)
    return n !== void 0 ? n = Math.max(0, Math.min(n, r.length - 1)) : n = 0, r[n];
}
function Gh(t, e, n) {
  if (t.astNode !== n)
    return [];
  if (Ot(t.grammarSource) && t.grammarSource.value === e)
    return [t];
  const r = Zs(t).iterator();
  let i;
  const s = [];
  do
    if (i = r.next(), !i.done) {
      const a = i.value;
      a.astNode === n ? Ot(a.grammarSource) && a.grammarSource.value === e && s.push(a) : r.prune();
    }
  while (!i.done);
  return s;
}
function Uh(t) {
  var e;
  const n = t.astNode;
  for (; n === ((e = t.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const r = zi(t.grammarSource, bt);
    if (r)
      return r;
    t = t.container;
  }
}
function Ic(t) {
  let e = t;
  return mc(e) && (Wi(e.$container) ? e = e.$container.$container : _e(e.$container) ? e = e.$container : xr(e.$container)), Cc(t, e, /* @__PURE__ */ new Map());
}
function Cc(t, e, n) {
  var r;
  function i(s, a) {
    let o;
    return zi(s, bt) || (o = Cc(a, a, n)), n.set(t, o), o;
  }
  if (n.has(t))
    return n.get(t);
  n.set(t, void 0);
  for (const s of Sr(e)) {
    if (bt(s) && s.feature.toLowerCase() === "name")
      return n.set(t, s), s;
    if (Lt(s) && _e(s.rule.ref))
      return i(s, s.rule.ref);
    if (ch(s) && (!((r = s.typeRef) === null || r === void 0) && r.ref))
      return i(s, s.typeRef.ref);
  }
}
function wc(t) {
  return Nc(t, /* @__PURE__ */ new Set());
}
function Nc(t, e) {
  if (e.has(t))
    return !0;
  e.add(t);
  for (const n of Sr(t))
    if (Lt(n)) {
      if (!n.rule.ref || _e(n.rule.ref) && !Nc(n.rule.ref, e))
        return !1;
    } else {
      if (bt(n))
        return !1;
      if (Wi(n))
        return !1;
    }
  return !!t.definition;
}
function ja(t) {
  if (t.inferredType)
    return t.inferredType.name;
  if (t.dataType)
    return t.dataType;
  if (t.returnType) {
    const e = t.returnType.ref;
    if (e) {
      if (_e(e))
        return e.name;
      if (gc(e) || yc(e))
        return e.name;
    }
  }
}
function Ka(t) {
  var e;
  if (_e(t))
    return wc(t) ? t.name : (e = ja(t)) !== null && e !== void 0 ? e : t.name;
  if (gc(t) || yc(t) || uh(t))
    return t.name;
  if (Wi(t)) {
    const n = Bh(t);
    if (n)
      return n;
  } else if (mc(t))
    return t.name;
  throw new Error("Cannot get name of Unknown Type");
}
function Bh(t) {
  var e;
  if (t.inferredType)
    return t.inferredType.name;
  if (!((e = t.type) === null || e === void 0) && e.ref)
    return Ka(t.type.ref);
}
function jh(t) {
  var e, n, r;
  return Gt(t) ? (n = (e = t.type) === null || e === void 0 ? void 0 : e.name) !== null && n !== void 0 ? n : "string" : (r = ja(t)) !== null && r !== void 0 ? r : t.name;
}
function Ha(t) {
  const e = {
    s: !1,
    i: !1,
    u: !1
  }, n = Sn(t.definition, e), r = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(n, r);
}
const Va = /[\s\S]/.source;
function Sn(t, e) {
  if (mh(t))
    return Kh(t);
  if (gh(t))
    return Hh(t);
  if (fh(t))
    return zh(t);
  if (yh(t)) {
    const n = t.rule.ref;
    if (!n)
      throw new Error("Missing rule reference.");
    return at(Sn(n.definition), {
      cardinality: t.cardinality,
      lookahead: t.lookahead
    });
  } else {
    if (hh(t))
      return Wh(t);
    if (Th(t))
      return Vh(t);
    if (ph(t)) {
      const n = t.regex.lastIndexOf("/"), r = t.regex.substring(1, n), i = t.regex.substring(n + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), at(r, {
        cardinality: t.cardinality,
        lookahead: t.lookahead,
        wrap: !1
      });
    } else {
      if (vh(t))
        return at(Va, {
          cardinality: t.cardinality,
          lookahead: t.lookahead
        });
      throw new Error(`Invalid terminal element: ${t?.$type}`);
    }
  }
}
function Kh(t) {
  return at(t.elements.map((e) => Sn(e)).join("|"), {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Hh(t) {
  return at(t.elements.map((e) => Sn(e)).join(""), {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Vh(t) {
  return at(`${Va}*?${Sn(t.terminal)}`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function Wh(t) {
  return at(`(?!${Sn(t.terminal)})${Va}*?`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead
  });
}
function zh(t) {
  return t.right ? at(`[${Is(t.left)}-${Is(t.right)}]`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    wrap: !1
  }) : at(Is(t.left), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    wrap: !1
  });
}
function Is(t) {
  return Yi(t.value);
}
function at(t, e) {
  var n;
  return (e.wrap !== !1 || e.lookahead) && (t = `(${(n = e.lookahead) !== null && n !== void 0 ? n : ""}${t})`), e.cardinality ? `${t}${e.cardinality}` : t;
}
function qh(t) {
  const e = [], n = t.Grammar;
  for (const r of n.rules)
    Gt(r) && Mh(r) && Ch(Ha(r)) && e.push(r.name);
  return {
    multilineCommentRules: e,
    nameRegexp: eh
  };
}
var _c = typeof global == "object" && global && global.Object === Object && global, Yh = typeof self == "object" && self && self.Object === Object && self, Ye = _c || Yh || Function("return this")(), be = Ye.Symbol, bc = Object.prototype, Xh = bc.hasOwnProperty, Jh = bc.toString, Nn = be ? be.toStringTag : void 0;
function Zh(t) {
  var e = Xh.call(t, Nn), n = t[Nn];
  try {
    t[Nn] = void 0;
    var r = !0;
  } catch {
  }
  var i = Jh.call(t);
  return r && (e ? t[Nn] = n : delete t[Nn]), i;
}
var Qh = Object.prototype, ep = Qh.toString;
function tp(t) {
  return ep.call(t);
}
var np = "[object Null]", rp = "[object Undefined]", Lo = be ? be.toStringTag : void 0;
function Rt(t) {
  return t == null ? t === void 0 ? rp : np : Lo && Lo in Object(t) ? Zh(t) : tp(t);
}
function Be(t) {
  return t != null && typeof t == "object";
}
var ip = "[object Symbol]";
function Xi(t) {
  return typeof t == "symbol" || Be(t) && Rt(t) == ip;
}
function Ji(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var P = Array.isArray, Po = be ? be.prototype : void 0, Mo = Po ? Po.toString : void 0;
function Oc(t) {
  if (typeof t == "string")
    return t;
  if (P(t))
    return Ji(t, Oc) + "";
  if (Xi(t))
    return Mo ? Mo.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var sp = /\s/;
function ap(t) {
  for (var e = t.length; e-- && sp.test(t.charAt(e)); )
    ;
  return e;
}
var op = /^\s+/;
function lp(t) {
  return t && t.slice(0, ap(t) + 1).replace(op, "");
}
function Oe(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Do = NaN, up = /^[-+]0x[0-9a-f]+$/i, cp = /^0b[01]+$/i, fp = /^0o[0-7]+$/i, dp = parseInt;
function hp(t) {
  if (typeof t == "number")
    return t;
  if (Xi(t))
    return Do;
  if (Oe(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Oe(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = lp(t);
  var n = cp.test(t);
  return n || fp.test(t) ? dp(t.slice(2), n ? 2 : 8) : up.test(t) ? Do : +t;
}
var Fo = 1 / 0, pp = 17976931348623157e292;
function mp(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = hp(t), t === Fo || t === -Fo) {
    var e = t < 0 ? -1 : 1;
    return e * pp;
  }
  return t === t ? t : 0;
}
function Zi(t) {
  var e = mp(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function yn(t) {
  return t;
}
var gp = "[object AsyncFunction]", yp = "[object Function]", Tp = "[object GeneratorFunction]", vp = "[object Proxy]";
function ct(t) {
  if (!Oe(t))
    return !1;
  var e = Rt(t);
  return e == yp || e == Tp || e == gp || e == vp;
}
var Cs = Ye["__core-js_shared__"], Go = (function() {
  var t = /[^.]+$/.exec(Cs && Cs.keys && Cs.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Rp(t) {
  return !!Go && Go in t;
}
var Ap = Function.prototype, Ep = Ap.toString;
function Ut(t) {
  if (t != null) {
    try {
      return Ep.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var $p = /[\\^$.*+?()[\]{}|]/g, xp = /^\[object .+?Constructor\]$/, Sp = Function.prototype, kp = Object.prototype, Ip = Sp.toString, Cp = kp.hasOwnProperty, wp = RegExp(
  "^" + Ip.call(Cp).replace($p, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Np(t) {
  if (!Oe(t) || Rp(t))
    return !1;
  var e = ct(t) ? wp : xp;
  return e.test(Ut(t));
}
function _p(t, e) {
  return t?.[e];
}
function Bt(t, e) {
  var n = _p(t, e);
  return Np(n) ? n : void 0;
}
var na = Bt(Ye, "WeakMap"), Uo = Object.create, bp = /* @__PURE__ */ (function() {
  function t() {
  }
  return function(e) {
    if (!Oe(e))
      return {};
    if (Uo)
      return Uo(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
})();
function Op(t, e, n) {
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
function X() {
}
function Lp(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var Pp = 800, Mp = 16, Dp = Date.now;
function Fp(t) {
  var e = 0, n = 0;
  return function() {
    var r = Dp(), i = Mp - (r - n);
    if (n = r, i > 0) {
      if (++e >= Pp)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Gp(t) {
  return function() {
    return t;
  };
}
var Si = (function() {
  try {
    var t = Bt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), Up = Si ? function(t, e) {
  return Si(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Gp(e),
    writable: !0
  });
} : yn, Bp = Fp(Up);
function Lc(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function Pc(t, e, n, r) {
  for (var i = t.length, s = n + -1; ++s < i; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
function jp(t) {
  return t !== t;
}
function Kp(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function Wa(t, e, n) {
  return e === e ? Kp(t, e, n) : Pc(t, jp, n);
}
function Mc(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && Wa(t, e, 0) > -1;
}
var Hp = 9007199254740991, Vp = /^(?:0|[1-9]\d*)$/;
function Qi(t, e) {
  var n = typeof t;
  return e = e ?? Hp, !!e && (n == "number" || n != "symbol" && Vp.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function za(t, e, n) {
  e == "__proto__" && Si ? Si(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function kr(t, e) {
  return t === e || t !== t && e !== e;
}
var Wp = Object.prototype, zp = Wp.hasOwnProperty;
function es(t, e, n) {
  var r = t[e];
  (!(zp.call(t, e) && kr(r, n)) || n === void 0 && !(e in t)) && za(t, e, n);
}
function Ir(t, e, n, r) {
  var i = !n;
  n || (n = {});
  for (var s = -1, a = e.length; ++s < a; ) {
    var o = e[s], l = void 0;
    l === void 0 && (l = t[o]), i ? za(n, o, l) : es(n, o, l);
  }
  return n;
}
var Bo = Math.max;
function qp(t, e, n) {
  return e = Bo(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, s = Bo(r.length - e, 0), a = Array(s); ++i < s; )
      a[i] = r[e + i];
    i = -1;
    for (var o = Array(e + 1); ++i < e; )
      o[i] = r[i];
    return o[e] = n(a), Op(t, this, o);
  };
}
function qa(t, e) {
  return Bp(qp(t, e, yn), t + "");
}
var Yp = 9007199254740991;
function Ya(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Yp;
}
function Xe(t) {
  return t != null && Ya(t.length) && !ct(t);
}
function Dc(t, e, n) {
  if (!Oe(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Xe(n) && Qi(e, n.length) : r == "string" && e in n) ? kr(n[e], t) : !1;
}
function Xp(t) {
  return qa(function(e, n) {
    var r = -1, i = n.length, s = i > 1 ? n[i - 1] : void 0, a = i > 2 ? n[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (i--, s) : void 0, a && Dc(n[0], n[1], a) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++r < i; ) {
      var o = n[r];
      o && t(e, o, r, s);
    }
    return e;
  });
}
var Jp = Object.prototype;
function Cr(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Jp;
  return t === n;
}
function Zp(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Qp = "[object Arguments]";
function jo(t) {
  return Be(t) && Rt(t) == Qp;
}
var Fc = Object.prototype, em = Fc.hasOwnProperty, tm = Fc.propertyIsEnumerable, ts = jo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? jo : function(t) {
  return Be(t) && em.call(t, "callee") && !tm.call(t, "callee");
};
function nm() {
  return !1;
}
var Gc = typeof exports == "object" && exports && !exports.nodeType && exports, Ko = Gc && typeof module == "object" && module && !module.nodeType && module, rm = Ko && Ko.exports === Gc, Ho = rm ? Ye.Buffer : void 0, im = Ho ? Ho.isBuffer : void 0, Tr = im || nm, sm = "[object Arguments]", am = "[object Array]", om = "[object Boolean]", lm = "[object Date]", um = "[object Error]", cm = "[object Function]", fm = "[object Map]", dm = "[object Number]", hm = "[object Object]", pm = "[object RegExp]", mm = "[object Set]", gm = "[object String]", ym = "[object WeakMap]", Tm = "[object ArrayBuffer]", vm = "[object DataView]", Rm = "[object Float32Array]", Am = "[object Float64Array]", Em = "[object Int8Array]", $m = "[object Int16Array]", xm = "[object Int32Array]", Sm = "[object Uint8Array]", km = "[object Uint8ClampedArray]", Im = "[object Uint16Array]", Cm = "[object Uint32Array]", B = {};
B[Rm] = B[Am] = B[Em] = B[$m] = B[xm] = B[Sm] = B[km] = B[Im] = B[Cm] = !0;
B[sm] = B[am] = B[Tm] = B[om] = B[vm] = B[lm] = B[um] = B[cm] = B[fm] = B[dm] = B[hm] = B[pm] = B[mm] = B[gm] = B[ym] = !1;
function wm(t) {
  return Be(t) && Ya(t.length) && !!B[Rt(t)];
}
function ns(t) {
  return function(e) {
    return t(e);
  };
}
var Uc = typeof exports == "object" && exports && !exports.nodeType && exports, mr = Uc && typeof module == "object" && module && !module.nodeType && module, Nm = mr && mr.exports === Uc, ws = Nm && _c.process, mt = (function() {
  try {
    var t = mr && mr.require && mr.require("util").types;
    return t || ws && ws.binding && ws.binding("util");
  } catch {
  }
})(), Vo = mt && mt.isTypedArray, Xa = Vo ? ns(Vo) : wm, _m = Object.prototype, bm = _m.hasOwnProperty;
function Bc(t, e) {
  var n = P(t), r = !n && ts(t), i = !n && !r && Tr(t), s = !n && !r && !i && Xa(t), a = n || r || i || s, o = a ? Zp(t.length, String) : [], l = o.length;
  for (var u in t)
    (e || bm.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Qi(u, l))) && o.push(u);
  return o;
}
function jc(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Om = jc(Object.keys, Object), Lm = Object.prototype, Pm = Lm.hasOwnProperty;
function Kc(t) {
  if (!Cr(t))
    return Om(t);
  var e = [];
  for (var n in Object(t))
    Pm.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Le(t) {
  return Xe(t) ? Bc(t) : Kc(t);
}
var Mm = Object.prototype, Dm = Mm.hasOwnProperty, $e = Xp(function(t, e) {
  if (Cr(e) || Xe(e)) {
    Ir(e, Le(e), t);
    return;
  }
  for (var n in e)
    Dm.call(e, n) && es(t, n, e[n]);
});
function Fm(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Gm = Object.prototype, Um = Gm.hasOwnProperty;
function Bm(t) {
  if (!Oe(t))
    return Fm(t);
  var e = Cr(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Um.call(t, r)) || n.push(r);
  return n;
}
function Ja(t) {
  return Xe(t) ? Bc(t, !0) : Bm(t);
}
var jm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Km = /^\w*$/;
function Za(t, e) {
  if (P(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Xi(t) ? !0 : Km.test(t) || !jm.test(t) || e != null && t in Object(e);
}
var vr = Bt(Object, "create");
function Hm() {
  this.__data__ = vr ? vr(null) : {}, this.size = 0;
}
function Vm(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Wm = "__lodash_hash_undefined__", zm = Object.prototype, qm = zm.hasOwnProperty;
function Ym(t) {
  var e = this.__data__;
  if (vr) {
    var n = e[t];
    return n === Wm ? void 0 : n;
  }
  return qm.call(e, t) ? e[t] : void 0;
}
var Xm = Object.prototype, Jm = Xm.hasOwnProperty;
function Zm(t) {
  var e = this.__data__;
  return vr ? e[t] !== void 0 : Jm.call(e, t);
}
var Qm = "__lodash_hash_undefined__";
function eg(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = vr && e === void 0 ? Qm : e, this;
}
function Pt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Pt.prototype.clear = Hm;
Pt.prototype.delete = Vm;
Pt.prototype.get = Ym;
Pt.prototype.has = Zm;
Pt.prototype.set = eg;
function tg() {
  this.__data__ = [], this.size = 0;
}
function rs(t, e) {
  for (var n = t.length; n--; )
    if (kr(t[n][0], e))
      return n;
  return -1;
}
var ng = Array.prototype, rg = ng.splice;
function ig(t) {
  var e = this.__data__, n = rs(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : rg.call(e, n, 1), --this.size, !0;
}
function sg(t) {
  var e = this.__data__, n = rs(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function ag(t) {
  return rs(this.__data__, t) > -1;
}
function og(t, e) {
  var n = this.__data__, r = rs(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function ft(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ft.prototype.clear = tg;
ft.prototype.delete = ig;
ft.prototype.get = sg;
ft.prototype.has = ag;
ft.prototype.set = og;
var Rr = Bt(Ye, "Map");
function lg() {
  this.size = 0, this.__data__ = {
    hash: new Pt(),
    map: new (Rr || ft)(),
    string: new Pt()
  };
}
function ug(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function is(t, e) {
  var n = t.__data__;
  return ug(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function cg(t) {
  var e = is(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function fg(t) {
  return is(this, t).get(t);
}
function dg(t) {
  return is(this, t).has(t);
}
function hg(t, e) {
  var n = is(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function dt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = lg;
dt.prototype.delete = cg;
dt.prototype.get = fg;
dt.prototype.has = dg;
dt.prototype.set = hg;
var pg = "Expected a function";
function Qa(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(pg);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var a = t.apply(this, r);
    return n.cache = s.set(i, a) || s, a;
  };
  return n.cache = new (Qa.Cache || dt)(), n;
}
Qa.Cache = dt;
var mg = 500;
function gg(t) {
  var e = Qa(t, function(r) {
    return n.size === mg && n.clear(), r;
  }), n = e.cache;
  return e;
}
var yg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tg = /\\(\\)?/g, vg = gg(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(yg, function(n, r, i, s) {
    e.push(i ? s.replace(Tg, "$1") : r || n);
  }), e;
});
function Rg(t) {
  return t == null ? "" : Oc(t);
}
function ss(t, e) {
  return P(t) ? t : Za(t, e) ? [t] : vg(Rg(t));
}
function wr(t) {
  if (typeof t == "string" || Xi(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function eo(t, e) {
  e = ss(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[wr(e[n++])];
  return n && n == r ? t : void 0;
}
function Ag(t, e, n) {
  var r = t == null ? void 0 : eo(t, e);
  return r === void 0 ? n : r;
}
function to(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Wo = be ? be.isConcatSpreadable : void 0;
function Eg(t) {
  return P(t) || ts(t) || !!(Wo && t && t[Wo]);
}
function no(t, e, n, r, i) {
  var s = -1, a = t.length;
  for (n || (n = Eg), i || (i = []); ++s < a; ) {
    var o = t[s];
    n(o) ? to(i, o) : r || (i[i.length] = o);
  }
  return i;
}
function Ge(t) {
  var e = t == null ? 0 : t.length;
  return e ? no(t) : [];
}
var Hc = jc(Object.getPrototypeOf, Object);
function Vc(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = t[r + e];
  return s;
}
function $g(t, e, n, r) {
  var i = -1, s = t == null ? 0 : t.length;
  for (r && s && (n = t[++i]); ++i < s; )
    n = e(n, t[i], i, t);
  return n;
}
function xg() {
  this.__data__ = new ft(), this.size = 0;
}
function Sg(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function kg(t) {
  return this.__data__.get(t);
}
function Ig(t) {
  return this.__data__.has(t);
}
var Cg = 200;
function wg(t, e) {
  var n = this.__data__;
  if (n instanceof ft) {
    var r = n.__data__;
    if (!Rr || r.length < Cg - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new dt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function qe(t) {
  var e = this.__data__ = new ft(t);
  this.size = e.size;
}
qe.prototype.clear = xg;
qe.prototype.delete = Sg;
qe.prototype.get = kg;
qe.prototype.has = Ig;
qe.prototype.set = wg;
function Ng(t, e) {
  return t && Ir(e, Le(e), t);
}
function _g(t, e) {
  return t && Ir(e, Ja(e), t);
}
var Wc = typeof exports == "object" && exports && !exports.nodeType && exports, zo = Wc && typeof module == "object" && module && !module.nodeType && module, bg = zo && zo.exports === Wc, qo = bg ? Ye.Buffer : void 0, Yo = qo ? qo.allocUnsafe : void 0;
function Og(t, e) {
  var n = t.length, r = Yo ? Yo(n) : new t.constructor(n);
  return t.copy(r), r;
}
function ro(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, s = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (s[i++] = a);
  }
  return s;
}
function zc() {
  return [];
}
var Lg = Object.prototype, Pg = Lg.propertyIsEnumerable, Xo = Object.getOwnPropertySymbols, io = Xo ? function(t) {
  return t == null ? [] : (t = Object(t), ro(Xo(t), function(e) {
    return Pg.call(t, e);
  }));
} : zc;
function Mg(t, e) {
  return Ir(t, io(t), e);
}
var Dg = Object.getOwnPropertySymbols, qc = Dg ? function(t) {
  for (var e = []; t; )
    to(e, io(t)), t = Hc(t);
  return e;
} : zc;
function Fg(t, e) {
  return Ir(t, qc(t), e);
}
function Yc(t, e, n) {
  var r = e(t);
  return P(t) ? r : to(r, n(t));
}
function ra(t) {
  return Yc(t, Le, io);
}
function Gg(t) {
  return Yc(t, Ja, qc);
}
var ia = Bt(Ye, "DataView"), sa = Bt(Ye, "Promise"), Jt = Bt(Ye, "Set"), Jo = "[object Map]", Ug = "[object Object]", Zo = "[object Promise]", Qo = "[object Set]", el = "[object WeakMap]", tl = "[object DataView]", Bg = Ut(ia), jg = Ut(Rr), Kg = Ut(sa), Hg = Ut(Jt), Vg = Ut(na), we = Rt;
(ia && we(new ia(new ArrayBuffer(1))) != tl || Rr && we(new Rr()) != Jo || sa && we(sa.resolve()) != Zo || Jt && we(new Jt()) != Qo || na && we(new na()) != el) && (we = function(t) {
  var e = Rt(t), n = e == Ug ? t.constructor : void 0, r = n ? Ut(n) : "";
  if (r)
    switch (r) {
      case Bg:
        return tl;
      case jg:
        return Jo;
      case Kg:
        return Zo;
      case Hg:
        return Qo;
      case Vg:
        return el;
    }
  return e;
});
var Wg = Object.prototype, zg = Wg.hasOwnProperty;
function qg(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && zg.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var ki = Ye.Uint8Array;
function Yg(t) {
  var e = new t.constructor(t.byteLength);
  return new ki(e).set(new ki(t)), e;
}
function Xg(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var Jg = /\w*$/;
function Zg(t) {
  var e = new t.constructor(t.source, Jg.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var nl = be ? be.prototype : void 0, rl = nl ? nl.valueOf : void 0;
function Qg(t) {
  return rl ? Object(rl.call(t)) : {};
}
function ey(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var ty = "[object Boolean]", ny = "[object Date]", ry = "[object Map]", iy = "[object Number]", sy = "[object RegExp]", ay = "[object Set]", oy = "[object String]", ly = "[object Symbol]", uy = "[object ArrayBuffer]", cy = "[object DataView]", fy = "[object Float32Array]", dy = "[object Float64Array]", hy = "[object Int8Array]", py = "[object Int16Array]", my = "[object Int32Array]", gy = "[object Uint8Array]", yy = "[object Uint8ClampedArray]", Ty = "[object Uint16Array]", vy = "[object Uint32Array]";
function Ry(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case uy:
      return Yg(t);
    case ty:
    case ny:
      return new r(+t);
    case cy:
      return Xg(t);
    case fy:
    case dy:
    case hy:
    case py:
    case my:
    case gy:
    case yy:
    case Ty:
    case vy:
      return ey(t);
    case ry:
      return new r();
    case iy:
    case oy:
      return new r(t);
    case sy:
      return Zg(t);
    case ay:
      return new r();
    case ly:
      return Qg(t);
  }
}
function Ay(t) {
  return typeof t.constructor == "function" && !Cr(t) ? bp(Hc(t)) : {};
}
var Ey = "[object Map]";
function $y(t) {
  return Be(t) && we(t) == Ey;
}
var il = mt && mt.isMap, xy = il ? ns(il) : $y, Sy = "[object Set]";
function ky(t) {
  return Be(t) && we(t) == Sy;
}
var sl = mt && mt.isSet, Iy = sl ? ns(sl) : ky, Cy = 2, Xc = "[object Arguments]", wy = "[object Array]", Ny = "[object Boolean]", _y = "[object Date]", by = "[object Error]", Jc = "[object Function]", Oy = "[object GeneratorFunction]", Ly = "[object Map]", Py = "[object Number]", Zc = "[object Object]", My = "[object RegExp]", Dy = "[object Set]", Fy = "[object String]", Gy = "[object Symbol]", Uy = "[object WeakMap]", By = "[object ArrayBuffer]", jy = "[object DataView]", Ky = "[object Float32Array]", Hy = "[object Float64Array]", Vy = "[object Int8Array]", Wy = "[object Int16Array]", zy = "[object Int32Array]", qy = "[object Uint8Array]", Yy = "[object Uint8ClampedArray]", Xy = "[object Uint16Array]", Jy = "[object Uint32Array]", G = {};
G[Xc] = G[wy] = G[By] = G[jy] = G[Ny] = G[_y] = G[Ky] = G[Hy] = G[Vy] = G[Wy] = G[zy] = G[Ly] = G[Py] = G[Zc] = G[My] = G[Dy] = G[Fy] = G[Gy] = G[qy] = G[Yy] = G[Xy] = G[Jy] = !0;
G[by] = G[Jc] = G[Uy] = !1;
function oi(t, e, n, r, i, s) {
  var a, o = e & Cy;
  if (a !== void 0)
    return a;
  if (!Oe(t))
    return t;
  var l = P(t);
  if (l)
    return a = qg(t), Lp(t, a);
  var u = we(t), c = u == Jc || u == Oy;
  if (Tr(t))
    return Og(t);
  if (u == Zc || u == Xc || c && !i)
    return a = c ? {} : Ay(t), o ? Fg(t, _g(a, t)) : Mg(t, Ng(a, t));
  if (!G[u])
    return i ? t : {};
  a = Ry(t, u), s || (s = new qe());
  var f = s.get(t);
  if (f)
    return f;
  s.set(t, a), Iy(t) ? t.forEach(function(m) {
    a.add(oi(m, e, n, m, t, s));
  }) : xy(t) && t.forEach(function(m, g) {
    a.set(g, oi(m, e, n, g, t, s));
  });
  var d = ra, h = l ? void 0 : d(t);
  return Lc(h || t, function(m, g) {
    h && (g = m, m = t[g]), es(a, g, oi(m, e, n, g, t, s));
  }), a;
}
var Zy = 4;
function se(t) {
  return oi(t, Zy);
}
function Nr(t) {
  for (var e = -1, n = t == null ? 0 : t.length, r = 0, i = []; ++e < n; ) {
    var s = t[e];
    s && (i[r++] = s);
  }
  return i;
}
var Qy = "__lodash_hash_undefined__";
function eT(t) {
  return this.__data__.set(t, Qy), this;
}
function tT(t) {
  return this.__data__.has(t);
}
function Tn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new dt(); ++e < n; )
    this.add(t[e]);
}
Tn.prototype.add = Tn.prototype.push = eT;
Tn.prototype.has = tT;
function Qc(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function so(t, e) {
  return t.has(e);
}
var nT = 1, rT = 2;
function ef(t, e, n, r, i, s) {
  var a = n & nT, o = t.length, l = e.length;
  if (o != l && !(a && l > o))
    return !1;
  var u = s.get(t), c = s.get(e);
  if (u && c)
    return u == e && c == t;
  var f = -1, d = !0, h = n & rT ? new Tn() : void 0;
  for (s.set(t, e), s.set(e, t); ++f < o; ) {
    var m = t[f], g = e[f];
    if (r)
      var R = a ? r(g, m, f, e, t, s) : r(m, g, f, t, e, s);
    if (R !== void 0) {
      if (R)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!Qc(e, function(y, E) {
        if (!so(h, E) && (m === y || i(m, y, n, r, s)))
          return h.push(E);
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
function iT(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function ao(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var sT = 1, aT = 2, oT = "[object Boolean]", lT = "[object Date]", uT = "[object Error]", cT = "[object Map]", fT = "[object Number]", dT = "[object RegExp]", hT = "[object Set]", pT = "[object String]", mT = "[object Symbol]", gT = "[object ArrayBuffer]", yT = "[object DataView]", al = be ? be.prototype : void 0, Ns = al ? al.valueOf : void 0;
function TT(t, e, n, r, i, s, a) {
  switch (n) {
    case yT:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case gT:
      return !(t.byteLength != e.byteLength || !s(new ki(t), new ki(e)));
    case oT:
    case lT:
    case fT:
      return kr(+t, +e);
    case uT:
      return t.name == e.name && t.message == e.message;
    case dT:
    case pT:
      return t == e + "";
    case cT:
      var o = iT;
    case hT:
      var l = r & sT;
      if (o || (o = ao), t.size != e.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= aT, a.set(t, e);
      var c = ef(o(t), o(e), r, i, s, a);
      return a.delete(t), c;
    case mT:
      if (Ns)
        return Ns.call(t) == Ns.call(e);
  }
  return !1;
}
var vT = 1, RT = Object.prototype, AT = RT.hasOwnProperty;
function ET(t, e, n, r, i, s) {
  var a = n & vT, o = ra(t), l = o.length, u = ra(e), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var d = o[f];
    if (!(a ? d in e : AT.call(e, d)))
      return !1;
  }
  var h = s.get(t), m = s.get(e);
  if (h && m)
    return h == e && m == t;
  var g = !0;
  s.set(t, e), s.set(e, t);
  for (var R = a; ++f < l; ) {
    d = o[f];
    var y = t[d], E = e[d];
    if (r)
      var v = a ? r(E, y, d, e, t, s) : r(y, E, d, t, e, s);
    if (!(v === void 0 ? y === E || i(y, E, n, r, s) : v)) {
      g = !1;
      break;
    }
    R || (R = d == "constructor");
  }
  if (g && !R) {
    var S = t.constructor, M = e.constructor;
    S != M && "constructor" in t && "constructor" in e && !(typeof S == "function" && S instanceof S && typeof M == "function" && M instanceof M) && (g = !1);
  }
  return s.delete(t), s.delete(e), g;
}
var $T = 1, ol = "[object Arguments]", ll = "[object Array]", zr = "[object Object]", xT = Object.prototype, ul = xT.hasOwnProperty;
function ST(t, e, n, r, i, s) {
  var a = P(t), o = P(e), l = a ? ll : we(t), u = o ? ll : we(e);
  l = l == ol ? zr : l, u = u == ol ? zr : u;
  var c = l == zr, f = u == zr, d = l == u;
  if (d && Tr(t)) {
    if (!Tr(e))
      return !1;
    a = !0, c = !1;
  }
  if (d && !c)
    return s || (s = new qe()), a || Xa(t) ? ef(t, e, n, r, i, s) : TT(t, e, l, n, r, i, s);
  if (!(n & $T)) {
    var h = c && ul.call(t, "__wrapped__"), m = f && ul.call(e, "__wrapped__");
    if (h || m) {
      var g = h ? t.value() : t, R = m ? e.value() : e;
      return s || (s = new qe()), i(g, R, n, r, s);
    }
  }
  return d ? (s || (s = new qe()), ET(t, e, n, r, i, s)) : !1;
}
function oo(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !Be(t) && !Be(e) ? t !== t && e !== e : ST(t, e, n, r, oo, i);
}
var kT = 1, IT = 2;
function CT(t, e, n, r) {
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
      var c = new qe(), f;
      if (!(f === void 0 ? oo(u, l, kT | IT, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function tf(t) {
  return t === t && !Oe(t);
}
function wT(t) {
  for (var e = Le(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, tf(i)];
  }
  return e;
}
function nf(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function NT(t) {
  var e = wT(t);
  return e.length == 1 && e[0][2] ? nf(e[0][0], e[0][1]) : function(n) {
    return n === t || CT(n, t, e);
  };
}
function _T(t, e) {
  return t != null && e in Object(t);
}
function rf(t, e, n) {
  e = ss(e, t);
  for (var r = -1, i = e.length, s = !1; ++r < i; ) {
    var a = wr(e[r]);
    if (!(s = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return s || ++r != i ? s : (i = t == null ? 0 : t.length, !!i && Ya(i) && Qi(a, i) && (P(t) || ts(t)));
}
function bT(t, e) {
  return t != null && rf(t, e, _T);
}
var OT = 1, LT = 2;
function PT(t, e) {
  return Za(t) && tf(e) ? nf(wr(t), e) : function(n) {
    var r = Ag(n, t);
    return r === void 0 && r === e ? bT(n, t) : oo(e, r, OT | LT);
  };
}
function MT(t) {
  return function(e) {
    return e?.[t];
  };
}
function DT(t) {
  return function(e) {
    return eo(e, t);
  };
}
function FT(t) {
  return Za(t) ? MT(wr(t)) : DT(t);
}
function Je(t) {
  return typeof t == "function" ? t : t == null ? yn : typeof t == "object" ? P(t) ? PT(t[0], t[1]) : NT(t) : FT(t);
}
function GT(t, e, n, r) {
  for (var i = -1, s = t == null ? 0 : t.length; ++i < s; ) {
    var a = t[i];
    e(r, a, n(a), t);
  }
  return r;
}
function UT(t) {
  return function(e, n, r) {
    for (var i = -1, s = Object(e), a = r(e), o = a.length; o--; ) {
      var l = a[++i];
      if (n(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var BT = UT();
function jT(t, e) {
  return t && BT(t, e, Le);
}
function KT(t, e) {
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
var jt = KT(jT);
function HT(t, e, n, r) {
  return jt(t, function(i, s, a) {
    e(r, i, n(i), a);
  }), r;
}
function VT(t, e) {
  return function(n, r) {
    var i = P(n) ? GT : HT, s = e ? e() : {};
    return i(n, t, Je(r), s);
  };
}
var sf = Object.prototype, WT = sf.hasOwnProperty, lo = qa(function(t, e) {
  t = Object(t);
  var n = -1, r = e.length, i = r > 2 ? e[2] : void 0;
  for (i && Dc(e[0], e[1], i) && (r = 1); ++n < r; )
    for (var s = e[n], a = Ja(s), o = -1, l = a.length; ++o < l; ) {
      var u = a[o], c = t[u];
      (c === void 0 || kr(c, sf[u]) && !WT.call(t, u)) && (t[u] = s[u]);
    }
  return t;
});
function cl(t) {
  return Be(t) && Xe(t);
}
var zT = 200;
function qT(t, e, n, r) {
  var i = -1, s = Mc, a = !0, o = t.length, l = [], u = e.length;
  if (!o)
    return l;
  e.length >= zT && (s = so, a = !1, e = new Tn(e));
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
var as = qa(function(t, e) {
  return cl(t) ? qT(t, no(e, 1, cl, !0)) : [];
});
function vn(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function te(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : Zi(e), Vc(t, e < 0 ? 0 : e, r)) : [];
}
function Ar(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : Zi(e), e = r - e, Vc(t, 0, e < 0 ? 0 : e)) : [];
}
function YT(t) {
  return typeof t == "function" ? t : yn;
}
function w(t, e) {
  var n = P(t) ? Lc : jt;
  return n(t, YT(e));
}
function XT(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (!e(t[n], n, t))
      return !1;
  return !0;
}
function JT(t, e) {
  var n = !0;
  return jt(t, function(r, i, s) {
    return n = !!e(r, i, s), n;
  }), n;
}
function Ue(t, e, n) {
  var r = P(t) ? XT : JT;
  return r(t, Je(e));
}
function af(t, e) {
  var n = [];
  return jt(t, function(r, i, s) {
    e(r, i, s) && n.push(r);
  }), n;
}
function Pe(t, e) {
  var n = P(t) ? ro : af;
  return n(t, Je(e));
}
function ZT(t) {
  return function(e, n, r) {
    var i = Object(e);
    if (!Xe(e)) {
      var s = Je(n);
      e = Le(e), n = function(o) {
        return s(i[o], o, i);
      };
    }
    var a = t(e, n, r);
    return a > -1 ? i[s ? e[a] : a] : void 0;
  };
}
var QT = Math.max;
function ev(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var i = n == null ? 0 : Zi(n);
  return i < 0 && (i = QT(r + i, 0)), Pc(t, Je(e), i);
}
var Rn = ZT(ev);
function je(t) {
  return t && t.length ? t[0] : void 0;
}
function tv(t, e) {
  var n = -1, r = Xe(t) ? Array(t.length) : [];
  return jt(t, function(i, s, a) {
    r[++n] = e(i, s, a);
  }), r;
}
function I(t, e) {
  var n = P(t) ? Ji : tv;
  return n(t, Je(e));
}
function Ne(t, e) {
  return no(I(t, e));
}
var nv = Object.prototype, rv = nv.hasOwnProperty, iv = VT(function(t, e, n) {
  rv.call(t, n) ? t[n].push(e) : za(t, n, [e]);
}), sv = Object.prototype, av = sv.hasOwnProperty;
function ov(t, e) {
  return t != null && av.call(t, e);
}
function C(t, e) {
  return t != null && rf(t, e, ov);
}
var lv = "[object String]";
function pe(t) {
  return typeof t == "string" || !P(t) && Be(t) && Rt(t) == lv;
}
function uv(t, e) {
  return Ji(e, function(n) {
    return t[n];
  });
}
function J(t) {
  return t == null ? [] : uv(t, Le(t));
}
var cv = Math.max;
function de(t, e, n, r) {
  t = Xe(t) ? t : J(t), n = n ? Zi(n) : 0;
  var i = t.length;
  return n < 0 && (n = cv(i + n, 0)), pe(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && Wa(t, e, n) > -1;
}
function fl(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var i = 0;
  return Wa(t, e, i);
}
var fv = "[object Map]", dv = "[object Set]", hv = Object.prototype, pv = hv.hasOwnProperty;
function U(t) {
  if (t == null)
    return !0;
  if (Xe(t) && (P(t) || typeof t == "string" || typeof t.splice == "function" || Tr(t) || Xa(t) || ts(t)))
    return !t.length;
  var e = we(t);
  if (e == fv || e == dv)
    return !t.size;
  if (Cr(t))
    return !Kc(t).length;
  for (var n in t)
    if (pv.call(t, n))
      return !1;
  return !0;
}
var mv = "[object RegExp]";
function gv(t) {
  return Be(t) && Rt(t) == mv;
}
var dl = mt && mt.isRegExp, ot = dl ? ns(dl) : gv;
function lt(t) {
  return t === void 0;
}
var yv = "Expected a function";
function Tv(t) {
  if (typeof t != "function")
    throw new TypeError(yv);
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
function vv(t, e, n, r) {
  if (!Oe(t))
    return t;
  e = ss(e, t);
  for (var i = -1, s = e.length, a = s - 1, o = t; o != null && ++i < s; ) {
    var l = wr(e[i]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = o[l];
      u = void 0, u === void 0 && (u = Oe(c) ? c : Qi(e[i + 1]) ? [] : {});
    }
    es(o, l, u), o = o[l];
  }
  return t;
}
function Rv(t, e, n) {
  for (var r = -1, i = e.length, s = {}; ++r < i; ) {
    var a = e[r], o = eo(t, a);
    n(o, a) && vv(s, ss(a, t), o);
  }
  return s;
}
function Ke(t, e) {
  if (t == null)
    return {};
  var n = Ji(Gg(t), function(r) {
    return [r];
  });
  return e = Je(e), Rv(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
function Av(t, e, n, r, i) {
  return i(t, function(s, a, o) {
    n = r ? (r = !1, s) : e(n, s, a, o);
  }), n;
}
function xe(t, e, n) {
  var r = P(t) ? $g : Av, i = arguments.length < 3;
  return r(t, Je(e), n, i, jt);
}
function os(t, e) {
  var n = P(t) ? ro : af;
  return n(t, Tv(Je(e)));
}
function Ev(t, e) {
  var n;
  return jt(t, function(r, i, s) {
    return n = e(r, i, s), !n;
  }), !!n;
}
function of(t, e, n) {
  var r = P(t) ? Qc : Ev;
  return r(t, Je(e));
}
var $v = 1 / 0, xv = Jt && 1 / ao(new Jt([, -0]))[1] == $v ? function(t) {
  return new Jt(t);
} : X, Sv = 200;
function kv(t, e, n) {
  var r = -1, i = Mc, s = t.length, a = !0, o = [], l = o;
  if (s >= Sv) {
    var u = xv(t);
    if (u)
      return ao(u);
    a = !1, i = so, l = new Tn();
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
function uo(t) {
  return t && t.length ? kv(t) : [];
}
function aa(t) {
  console && console.error && console.error(`Error: ${t}`);
}
function lf(t) {
  console && console.warn && console.warn(`Warning: ${t}`);
}
function uf(t) {
  const e = (/* @__PURE__ */ new Date()).getTime(), n = t();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: n };
}
function cf(t) {
  function e() {
  }
  e.prototype = t;
  const n = new e();
  function r() {
    return typeof n.bar;
  }
  return r(), r(), t;
}
function Iv(t) {
  return Cv(t) ? t.LABEL : t.name;
}
function Cv(t) {
  return pe(t.LABEL) && t.LABEL !== "";
}
class Ze {
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
    e.visit(this), w(this.definition, (n) => {
      n.accept(e);
    });
  }
}
class ce extends Ze {
  constructor(e) {
    super([]), this.idx = 1, $e(this, Ke(e, (n) => n !== void 0));
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
class kn extends Ze {
  constructor(e) {
    super(e.definition), this.orgText = "", $e(this, Ke(e, (n) => n !== void 0));
  }
}
class me extends Ze {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, $e(this, Ke(e, (n) => n !== void 0));
  }
}
let ie = class extends Ze {
  constructor(e) {
    super(e.definition), this.idx = 1, $e(this, Ke(e, (n) => n !== void 0));
  }
};
class Se extends Ze {
  constructor(e) {
    super(e.definition), this.idx = 1, $e(this, Ke(e, (n) => n !== void 0));
  }
}
class ke extends Ze {
  constructor(e) {
    super(e.definition), this.idx = 1, $e(this, Ke(e, (n) => n !== void 0));
  }
}
class z extends Ze {
  constructor(e) {
    super(e.definition), this.idx = 1, $e(this, Ke(e, (n) => n !== void 0));
  }
}
class ge extends Ze {
  constructor(e) {
    super(e.definition), this.idx = 1, $e(this, Ke(e, (n) => n !== void 0));
  }
}
class ye extends Ze {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, $e(this, Ke(e, (n) => n !== void 0));
  }
}
class j {
  constructor(e) {
    this.idx = 1, $e(this, Ke(e, (n) => n !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function wv(t) {
  return I(t, li);
}
function li(t) {
  function e(n) {
    return I(n, li);
  }
  if (t instanceof ce) {
    const n = {
      type: "NonTerminal",
      name: t.nonTerminalName,
      idx: t.idx
    };
    return pe(t.label) && (n.label = t.label), n;
  } else {
    if (t instanceof me)
      return {
        type: "Alternative",
        definition: e(t.definition)
      };
    if (t instanceof ie)
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
    if (t instanceof ke)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: t.idx,
        separator: li(new j({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof ge)
      return {
        type: "RepetitionWithSeparator",
        idx: t.idx,
        separator: li(new j({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof z)
      return {
        type: "Repetition",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof ye)
      return {
        type: "Alternation",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof j) {
      const n = {
        type: "Terminal",
        name: t.terminalType.name,
        label: Iv(t.terminalType),
        idx: t.idx
      };
      pe(t.label) && (n.terminalLabel = t.label);
      const r = t.terminalType.PATTERN;
      return t.terminalType.PATTERN && (n.pattern = ot(r) ? r.source : r), n;
    } else {
      if (t instanceof kn)
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
class In {
  visit(e) {
    const n = e;
    switch (n.constructor) {
      case ce:
        return this.visitNonTerminal(n);
      case me:
        return this.visitAlternative(n);
      case ie:
        return this.visitOption(n);
      case Se:
        return this.visitRepetitionMandatory(n);
      case ke:
        return this.visitRepetitionMandatoryWithSeparator(n);
      case ge:
        return this.visitRepetitionWithSeparator(n);
      case z:
        return this.visitRepetition(n);
      case ye:
        return this.visitAlternation(n);
      case j:
        return this.visitTerminal(n);
      case kn:
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
function Nv(t) {
  return t instanceof me || t instanceof ie || t instanceof z || t instanceof Se || t instanceof ke || t instanceof ge || t instanceof j || t instanceof kn;
}
function Ii(t, e = []) {
  return t instanceof ie || t instanceof z || t instanceof ge ? !0 : t instanceof ye ? of(t.definition, (r) => Ii(r, e)) : t instanceof ce && de(e, t) ? !1 : t instanceof Ze ? (t instanceof ce && e.push(t), Ue(t.definition, (r) => Ii(r, e))) : !1;
}
function _v(t) {
  return t instanceof ye;
}
function We(t) {
  if (t instanceof ce)
    return "SUBRULE";
  if (t instanceof ie)
    return "OPTION";
  if (t instanceof ye)
    return "OR";
  if (t instanceof Se)
    return "AT_LEAST_ONE";
  if (t instanceof ke)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof ge)
    return "MANY_SEP";
  if (t instanceof z)
    return "MANY";
  if (t instanceof j)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class ls {
  walk(e, n = []) {
    w(e.definition, (r, i) => {
      const s = te(e.definition, i + 1);
      if (r instanceof ce)
        this.walkProdRef(r, s, n);
      else if (r instanceof j)
        this.walkTerminal(r, s, n);
      else if (r instanceof me)
        this.walkFlat(r, s, n);
      else if (r instanceof ie)
        this.walkOption(r, s, n);
      else if (r instanceof Se)
        this.walkAtLeastOne(r, s, n);
      else if (r instanceof ke)
        this.walkAtLeastOneSep(r, s, n);
      else if (r instanceof ge)
        this.walkManySep(r, s, n);
      else if (r instanceof z)
        this.walkMany(r, s, n);
      else if (r instanceof ye)
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
      new ie({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, n, r) {
    const i = hl(e, n, r);
    this.walk(e, i);
  }
  walkMany(e, n, r) {
    const i = [
      new ie({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, i);
  }
  walkManySep(e, n, r) {
    const i = hl(e, n, r);
    this.walk(e, i);
  }
  walkOr(e, n, r) {
    const i = n.concat(r);
    w(e.definition, (s) => {
      const a = new me({ definition: [s] });
      this.walk(a, i);
    });
  }
}
function hl(t, e, n) {
  return [
    new ie({
      definition: [
        new j({ terminalType: t.separator })
      ].concat(t.definition)
    })
  ].concat(e, n);
}
function _r(t) {
  if (t instanceof ce)
    return _r(t.referencedRule);
  if (t instanceof j)
    return Lv(t);
  if (Nv(t))
    return bv(t);
  if (_v(t))
    return Ov(t);
  throw Error("non exhaustive match");
}
function bv(t) {
  let e = [];
  const n = t.definition;
  let r = 0, i = n.length > r, s, a = !0;
  for (; i && a; )
    s = n[r], a = Ii(s), e = e.concat(_r(s)), r = r + 1, i = n.length > r;
  return uo(e);
}
function Ov(t) {
  const e = I(t.definition, (n) => _r(n));
  return uo(Ge(e));
}
function Lv(t) {
  return [t.terminalType];
}
const ff = "_~IN~_";
class Pv extends ls {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, n, r) {
  }
  walkProdRef(e, n, r) {
    const i = Dv(e.referencedRule, e.idx) + this.topProd.name, s = n.concat(r), a = new me({ definition: s }), o = _r(a);
    this.follows[i] = o;
  }
}
function Mv(t) {
  const e = {};
  return w(t, (n) => {
    const r = new Pv(n).startWalking();
    $e(e, r);
  }), e;
}
function Dv(t, e) {
  return t.name + e + ff;
}
let ui = {};
const Fv = new $c();
function us(t) {
  const e = t.toString();
  if (ui.hasOwnProperty(e))
    return ui[e];
  {
    const n = Fv.pattern(e);
    return ui[e] = n, n;
  }
}
function Gv() {
  ui = {};
}
const df = "Complement Sets are not supported for first char optimization", Ci = `Unable to use "first char" lexer optimizations:
`;
function Uv(t, e = !1) {
  try {
    const n = us(t);
    return oa(n.value, {}, n.flags.ignoreCase);
  } catch (n) {
    if (n.message === df)
      e && lf(`${Ci}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), aa(`${Ci}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function oa(t, e, n) {
  switch (t.type) {
    case "Disjunction":
      for (let i = 0; i < t.value.length; i++)
        oa(t.value[i], e, n);
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
            qr(a.value, e, n);
            break;
          case "Set":
            if (a.complement === !0)
              throw Error(df);
            w(a.value, (l) => {
              if (typeof l == "number")
                qr(l, e, n);
              else {
                const u = l;
                if (n === !0)
                  for (let c = u.from; c <= u.to; c++)
                    qr(c, e, n);
                else {
                  for (let c = u.from; c <= u.to && c < lr; c++)
                    qr(c, e, n);
                  if (u.to >= lr) {
                    const c = u.from >= lr ? u.from : lr, f = u.to, d = gt(c), h = gt(f);
                    for (let m = d; m <= h; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            oa(a.value, e, n);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a.type === "Group" && la(a) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          a.type !== "Group" && o === !1
        )
          break;
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return J(e);
}
function qr(t, e, n) {
  const r = gt(t);
  e[r] = r, n === !0 && Bv(t, e);
}
function Bv(t, e) {
  const n = String.fromCharCode(t), r = n.toUpperCase();
  if (r !== n) {
    const i = gt(r.charCodeAt(0));
    e[i] = i;
  } else {
    const i = n.toLowerCase();
    if (i !== n) {
      const s = gt(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function pl(t, e) {
  return Rn(t.value, (n) => {
    if (typeof n == "number")
      return de(e, n);
    {
      const r = n;
      return Rn(e, (i) => r.from <= i && i <= r.to) !== void 0;
    }
  });
}
function la(t) {
  const e = t.quantifier;
  return e && e.atLeast === 0 ? !0 : t.value ? P(t.value) ? Ue(t.value, la) : la(t.value) : !1;
}
class jv extends qi {
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
    de(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? pl(e, this.targetCharCodes) === void 0 && (this.found = !0) : pl(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function co(t, e) {
  if (e instanceof RegExp) {
    const n = us(e), r = new jv(t);
    return r.visit(n), r.found;
  } else
    return Rn(e, (n) => de(t, n.charCodeAt(0))) !== void 0;
}
const Mt = "PATTERN", or = "defaultMode", Yr = "modes";
let hf = typeof new RegExp("(?:)").sticky == "boolean";
function Kv(t, e) {
  e = lo(e, {
    useSticky: hf,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (E, v) => v()
  });
  const n = e.tracer;
  n("initCharCodeToOptimizedIndexMap", () => {
    dR();
  });
  let r;
  n("Reject Lexer.NA", () => {
    r = os(t, (E) => E[Mt] === he.NA);
  });
  let i = !1, s;
  n("Transform Patterns", () => {
    i = !1, s = I(r, (E) => {
      const v = E[Mt];
      if (ot(v)) {
        const S = v.source;
        return S.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        S !== "^" && S !== "$" && S !== "." && !v.ignoreCase ? S : S.length === 2 && S[0] === "\\" && // not a meta character
        !de([
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
        ], S[1]) ? S[1] : e.useSticky ? gl(v) : ml(v);
      } else {
        if (ct(v))
          return i = !0, { exec: v };
        if (typeof v == "object")
          return i = !0, v;
        if (typeof v == "string") {
          if (v.length === 1)
            return v;
          {
            const S = v.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), M = new RegExp(S);
            return e.useSticky ? gl(M) : ml(M);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a, o, l, u, c;
  n("misc mapping", () => {
    a = I(r, (E) => E.tokenTypeIdx), o = I(r, (E) => {
      const v = E.GROUP;
      if (v !== he.SKIPPED) {
        if (pe(v))
          return v;
        if (lt(v))
          return !1;
        throw Error("non exhaustive match");
      }
    }), l = I(r, (E) => {
      const v = E.LONGER_ALT;
      if (v)
        return P(v) ? I(v, (M) => fl(r, M)) : [fl(r, v)];
    }), u = I(r, (E) => E.PUSH_MODE), c = I(r, (E) => C(E, "POP_MODE"));
  });
  let f;
  n("Line Terminator Handling", () => {
    const E = gf(e.lineTerminatorCharacters);
    f = I(r, (v) => !1), e.positionTracking !== "onlyOffset" && (f = I(r, (v) => C(v, "LINE_BREAKS") ? !!v.LINE_BREAKS : mf(v, E) === !1 && co(E, v.PATTERN)));
  });
  let d, h, m, g;
  n("Misc Mapping #2", () => {
    d = I(r, pf), h = I(s, uR), m = xe(r, (E, v) => {
      const S = v.GROUP;
      return pe(S) && S !== he.SKIPPED && (E[S] = []), E;
    }, {}), g = I(s, (E, v) => ({
      pattern: s[v],
      longerAlt: l[v],
      canLineTerminator: f[v],
      isCustom: d[v],
      short: h[v],
      group: o[v],
      push: u[v],
      pop: c[v],
      tokenTypeIdx: a[v],
      tokenType: r[v]
    }));
  });
  let R = !0, y = [];
  return e.safeMode || n("First Char Optimization", () => {
    y = xe(r, (E, v, S) => {
      if (typeof v.PATTERN == "string") {
        const M = v.PATTERN.charCodeAt(0), ae = gt(M);
        _s(E, ae, g[S]);
      } else if (P(v.START_CHARS_HINT)) {
        let M;
        w(v.START_CHARS_HINT, (ae) => {
          const Me = typeof ae == "string" ? ae.charCodeAt(0) : ae, Te = gt(Me);
          M !== Te && (M = Te, _s(E, Te, g[S]));
        });
      } else if (ot(v.PATTERN))
        if (v.PATTERN.unicode)
          R = !1, e.ensureOptimizations && aa(`${Ci}	Unable to analyze < ${v.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const M = Uv(v.PATTERN, e.ensureOptimizations);
          U(M) && (R = !1), w(M, (ae) => {
            _s(E, ae, g[S]);
          });
        }
      else
        e.ensureOptimizations && aa(`${Ci}	TokenType: <${v.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), R = !1;
      return E;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: y,
    hasCustom: i,
    canBeOptimized: R
  };
}
function Hv(t, e) {
  let n = [];
  const r = Wv(t);
  n = n.concat(r.errors);
  const i = zv(r.valid), s = i.valid;
  return n = n.concat(i.errors), n = n.concat(Vv(s)), n = n.concat(tR(s)), n = n.concat(nR(s, e)), n = n.concat(rR(s)), n;
}
function Vv(t) {
  let e = [];
  const n = Pe(t, (r) => ot(r[Mt]));
  return e = e.concat(Yv(n)), e = e.concat(Zv(n)), e = e.concat(Qv(n)), e = e.concat(eR(n)), e = e.concat(Xv(n)), e;
}
function Wv(t) {
  const e = Pe(t, (i) => !C(i, Mt)), n = I(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: q.MISSING_PATTERN,
    tokenTypes: [i]
  })), r = as(t, e);
  return { errors: n, valid: r };
}
function zv(t) {
  const e = Pe(t, (i) => {
    const s = i[Mt];
    return !ot(s) && !ct(s) && !C(s, "exec") && !pe(s);
  }), n = I(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: q.INVALID_PATTERN,
    tokenTypes: [i]
  })), r = as(t, e);
  return { errors: n, valid: r };
}
const qv = /[^\\][$]/;
function Yv(t) {
  class e extends qi {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(s) {
      this.found = !0;
    }
  }
  const n = Pe(t, (i) => {
    const s = i.PATTERN;
    try {
      const a = us(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return qv.test(s.source);
    }
  });
  return I(n, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: q.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function Xv(t) {
  const e = Pe(t, (r) => r.PATTERN.test(""));
  return I(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: q.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const Jv = /[^\\[][\^]|^\^/;
function Zv(t) {
  class e extends qi {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(s) {
      this.found = !0;
    }
  }
  const n = Pe(t, (i) => {
    const s = i.PATTERN;
    try {
      const a = us(s), o = new e();
      return o.visit(a), o.found;
    } catch {
      return Jv.test(s.source);
    }
  });
  return I(n, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: q.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function Qv(t) {
  const e = Pe(t, (r) => {
    const i = r[Mt];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return I(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: q.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function eR(t) {
  const e = [];
  let n = I(t, (s) => xe(t, (a, o) => (s.PATTERN.source === o.PATTERN.source && !de(e, o) && o.PATTERN !== he.NA && (e.push(o), a.push(o)), a), []));
  n = Nr(n);
  const r = Pe(n, (s) => s.length > 1);
  return I(r, (s) => {
    const a = I(s, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${je(s).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,
      type: q.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
function tR(t) {
  const e = Pe(t, (r) => {
    if (!C(r, "GROUP"))
      return !1;
    const i = r.GROUP;
    return i !== he.SKIPPED && i !== he.NA && !pe(i);
  });
  return I(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: q.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function nR(t, e) {
  const n = Pe(t, (i) => i.PUSH_MODE !== void 0 && !de(e, i.PUSH_MODE));
  return I(n, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: q.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function rR(t) {
  const e = [], n = xe(t, (r, i, s) => {
    const a = i.PATTERN;
    return a === he.NA || (pe(a) ? r.push({ str: a, idx: s, tokenType: i }) : ot(a) && sR(a) && r.push({ str: a.source, idx: s, tokenType: i })), r;
  }, []);
  return w(t, (r, i) => {
    w(n, ({ str: s, idx: a, tokenType: o }) => {
      if (i < a && iR(s, r.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: q.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function iR(t, e) {
  if (ot(e)) {
    const n = e.exec(t);
    return n !== null && n.index === 0;
  } else {
    if (ct(e))
      return e(t, 0, [], {});
    if (C(e, "exec"))
      return e.exec(t, 0, [], {});
    if (typeof e == "string")
      return e === t;
    throw Error("non exhaustive match");
  }
}
function sR(t) {
  return Rn([
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
function ml(t) {
  const e = t.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${t.source})`, e);
}
function gl(t) {
  const e = t.ignoreCase ? "iy" : "y";
  return new RegExp(`${t.source}`, e);
}
function aR(t, e, n) {
  const r = [];
  return C(t, or) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + or + `> property in its definition
`,
    type: q.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), C(t, Yr) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Yr + `> property in its definition
`,
    type: q.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), C(t, Yr) && C(t, or) && !C(t.modes, t.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${or}: <${t.defaultMode}>which does not exist
`,
    type: q.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), C(t, Yr) && w(t.modes, (i, s) => {
    w(i, (a, o) => {
      if (lt(a))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: q.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (C(a, "LONGER_ALT")) {
        const l = P(a.LONGER_ALT) ? a.LONGER_ALT : [a.LONGER_ALT];
        w(l, (u) => {
          !lt(u) && !de(i, u) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${a.name}> outside of mode <${s}>
`,
            type: q.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function oR(t, e, n) {
  const r = [];
  let i = !1;
  const s = Nr(Ge(J(t.modes))), a = os(s, (l) => l[Mt] === he.NA), o = gf(n);
  return e && w(a, (l) => {
    const u = mf(l, o);
    if (u !== !1) {
      const f = {
        message: fR(l, u),
        type: u.issue,
        tokenType: l
      };
      r.push(f);
    } else
      C(l, "LINE_BREAKS") ? l.LINE_BREAKS === !0 && (i = !0) : co(o, l.PATTERN) && (i = !0);
  }), e && !i && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: q.NO_LINE_BREAKS_FLAGS
  }), r;
}
function lR(t) {
  const e = {}, n = Le(t);
  return w(n, (r) => {
    const i = t[r];
    if (P(i))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function pf(t) {
  const e = t.PATTERN;
  if (ot(e))
    return !1;
  if (ct(e))
    return !0;
  if (C(e, "exec"))
    return !0;
  if (pe(e))
    return !1;
  throw Error("non exhaustive match");
}
function uR(t) {
  return pe(t) && t.length === 1 ? t.charCodeAt(0) : !1;
}
const cR = {
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
function mf(t, e) {
  if (C(t, "LINE_BREAKS"))
    return !1;
  if (ot(t.PATTERN)) {
    try {
      co(e, t.PATTERN);
    } catch (n) {
      return {
        issue: q.IDENTIFY_TERMINATOR,
        errMsg: n.message
      };
    }
    return !1;
  } else {
    if (pe(t.PATTERN))
      return !1;
    if (pf(t))
      return { issue: q.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function fR(t, e) {
  if (e.issue === q.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === q.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function gf(t) {
  return I(t, (n) => pe(n) ? n.charCodeAt(0) : n);
}
function _s(t, e, n) {
  t[e] === void 0 ? t[e] = [n] : t[e].push(n);
}
const lr = 256;
let ci = [];
function gt(t) {
  return t < lr ? t : ci[t];
}
function dR() {
  if (U(ci)) {
    ci = new Array(65536);
    for (let t = 0; t < 65536; t++)
      ci[t] = t > 255 ? 255 + ~~(t / 255) : t;
  }
}
function br(t, e) {
  const n = t.tokenTypeIdx;
  return n === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[n] === !0;
}
function wi(t, e) {
  return t.tokenTypeIdx === e.tokenTypeIdx;
}
let yl = 1;
const yf = {};
function Or(t) {
  const e = hR(t);
  pR(e), gR(e), mR(e), w(e, (n) => {
    n.isParent = n.categoryMatches.length > 0;
  });
}
function hR(t) {
  let e = se(t), n = t, r = !0;
  for (; r; ) {
    n = Nr(Ge(I(n, (s) => s.CATEGORIES)));
    const i = as(n, e);
    e = e.concat(i), U(i) ? r = !1 : n = i;
  }
  return e;
}
function pR(t) {
  w(t, (e) => {
    vf(e) || (yf[yl] = e, e.tokenTypeIdx = yl++), Tl(e) && !P(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), Tl(e) || (e.CATEGORIES = []), yR(e) || (e.categoryMatches = []), TR(e) || (e.categoryMatchesMap = {});
  });
}
function mR(t) {
  w(t, (e) => {
    e.categoryMatches = [], w(e.categoryMatchesMap, (n, r) => {
      e.categoryMatches.push(yf[r].tokenTypeIdx);
    });
  });
}
function gR(t) {
  w(t, (e) => {
    Tf([], e);
  });
}
function Tf(t, e) {
  w(t, (n) => {
    e.categoryMatchesMap[n.tokenTypeIdx] = !0;
  }), w(e.CATEGORIES, (n) => {
    const r = t.concat(e);
    de(r, n) || Tf(r, n);
  });
}
function vf(t) {
  return C(t, "tokenTypeIdx");
}
function Tl(t) {
  return C(t, "CATEGORIES");
}
function yR(t) {
  return C(t, "categoryMatches");
}
function TR(t) {
  return C(t, "categoryMatchesMap");
}
function vR(t) {
  return C(t, "tokenTypeIdx");
}
const ua = {
  buildUnableToPopLexerModeMessage(t) {
    return `Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(t, e, n, r, i) {
    return `unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`;
  }
};
var q;
(function(t) {
  t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(q || (q = {}));
const ur = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: ua,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(ur);
class he {
  constructor(e, n = ur) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const a = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a}--> <${i}>`);
        const { time: o, value: l } = uf(s), u = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${a}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof n == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = $e({}, ur, n);
    const r = this.config.traceInitPerf;
    r === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === ur.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = cR;
        else if (this.config.lineTerminatorCharacters === ur.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (n.safeMode && n.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), P(e) ? i = {
          modes: { defaultMode: se(e) },
          defaultMode: or
        } : (s = !1, i = se(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(aR(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(oR(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, w(i.modes, (o, l) => {
        i.modes[l] = os(o, (u) => lt(u));
      });
      const a = Le(i.modes);
      if (w(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Hv(o, a));
          }), U(this.lexerDefinitionErrors)) {
            Or(o);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = Kv(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: n.positionTracking,
                ensureOptimizations: n.ensureOptimizations,
                safeMode: n.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = u.charCodeToPatternIdxToConfig, this.emptyGroups = $e({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !U(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = I(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      w(this.lexerDefinitionWarning, (o) => {
        lf(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (hf ? (this.chopInput = yn, this.match = this.matchWithTest) : (this.updateLastIndex = X, this.match = this.matchWithExec), s && (this.handleModes = X), this.trackStartLines === !1 && (this.computeNewColumn = yn), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = X), /full/i.test(this.config.positionTracking))
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
        Gv();
      }), this.TRACE_INIT("toFastProperties", () => {
        cf(this);
      });
    });
  }
  tokenize(e, n = this.defaultMode) {
    if (!U(this.lexerDefinitionErrors)) {
      const i = I(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
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
    let r, i, s, a, o, l, u, c, f, d, h, m, g, R, y;
    const E = e, v = E.length;
    let S = 0, M = 0;
    const ae = this.hasCustom ? 0 : Math.floor(e.length / 10), Me = new Array(ae), Te = [];
    let Ve = this.trackStartLines ? 1 : void 0, Ie = this.trackStartLines ? 1 : void 0;
    const $ = lR(this.emptyGroups), T = this.trackStartLines, k = this.config.lineTerminatorsPattern;
    let x = 0, O = [], b = [];
    const _ = [], ve = [];
    Object.freeze(ve);
    let Z;
    function W() {
      return O;
    }
    function It(oe) {
      const Ce = gt(oe), Wt = b[Ce];
      return Wt === void 0 ? ve : Wt;
    }
    const Fd = (oe) => {
      if (_.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      oe.tokenType.PUSH_MODE === void 0) {
        const Ce = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(oe);
        Te.push({
          offset: oe.startOffset,
          line: oe.startLine,
          column: oe.startColumn,
          length: oe.image.length,
          message: Ce
        });
      } else {
        _.pop();
        const Ce = vn(_);
        O = this.patternIdxToConfig[Ce], b = this.charCodeToPatternIdxToConfig[Ce], x = O.length;
        const Wt = this.canModeBeOptimized[Ce] && this.config.safeMode === !1;
        b && Wt ? Z = It : Z = W;
      }
    };
    function So(oe) {
      _.push(oe), b = this.charCodeToPatternIdxToConfig[oe], O = this.patternIdxToConfig[oe], x = O.length, x = O.length;
      const Ce = this.canModeBeOptimized[oe] && this.config.safeMode === !1;
      b && Ce ? Z = It : Z = W;
    }
    So.call(this, n);
    let De;
    const ko = this.config.recoveryEnabled;
    for (; S < v; ) {
      l = null;
      const oe = E.charCodeAt(S), Ce = Z(oe), Wt = Ce.length;
      for (r = 0; r < Wt; r++) {
        De = Ce[r];
        const Re = De.pattern;
        u = null;
        const Qe = De.short;
        if (Qe !== !1 ? oe === Qe && (l = Re) : De.isCustom === !0 ? (y = Re.exec(E, S, Me, $), y !== null ? (l = y[0], y.payload !== void 0 && (u = y.payload)) : l = null) : (this.updateLastIndex(Re, S), l = this.match(Re, e, S)), l !== null) {
          if (o = De.longerAlt, o !== void 0) {
            const ht = o.length;
            for (s = 0; s < ht; s++) {
              const et = O[o[s]], Ct = et.pattern;
              if (c = null, et.isCustom === !0 ? (y = Ct.exec(E, S, Me, $), y !== null ? (a = y[0], y.payload !== void 0 && (c = y.payload)) : a = null) : (this.updateLastIndex(Ct, S), a = this.match(Ct, e, S)), a && a.length > l.length) {
                l = a, u = c, De = et;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (f = l.length, d = De.group, d !== void 0 && (h = De.tokenTypeIdx, m = this.createTokenInstance(l, S, h, De.tokenType, Ve, Ie, f), this.handlePayload(m, u), d === !1 ? M = this.addToken(Me, M, m) : $[d].push(m)), e = this.chopInput(e, f), S = S + f, Ie = this.computeNewColumn(Ie, f), T === !0 && De.canLineTerminator === !0) {
          let Re = 0, Qe, ht;
          k.lastIndex = 0;
          do
            Qe = k.test(l), Qe === !0 && (ht = k.lastIndex - 1, Re++);
          while (Qe === !0);
          Re !== 0 && (Ve = Ve + Re, Ie = f - ht, this.updateTokenEndLineColumnLocation(m, d, ht, Re, Ve, Ie, f));
        }
        this.handleModes(De, Fd, So, m);
      } else {
        const Re = S, Qe = Ve, ht = Ie;
        let et = ko === !1;
        for (; et === !1 && S < v; )
          for (e = this.chopInput(e, 1), S++, i = 0; i < x; i++) {
            const Ct = O[i], Ts = Ct.pattern, Io = Ct.short;
            if (Io !== !1 ? E.charCodeAt(S) === Io && (et = !0) : Ct.isCustom === !0 ? et = Ts.exec(E, S, Me, $) !== null : (this.updateLastIndex(Ts, S), et = Ts.exec(e) !== null), et === !0)
              break;
          }
        if (g = S - Re, Ie = this.computeNewColumn(Ie, g), R = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E, Re, g, Qe, ht), Te.push({
          offset: Re,
          line: Qe,
          column: ht,
          length: g,
          message: R
        }), ko === !1)
          break;
      }
    }
    return this.hasCustom || (Me.length = M), {
      tokens: Me,
      groups: $,
      errors: Te
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
function Zt(t) {
  return Rf(t) ? t.LABEL : t.name;
}
function Rf(t) {
  return pe(t.LABEL) && t.LABEL !== "";
}
const RR = "parent", vl = "categories", Rl = "label", Al = "group", El = "push_mode", $l = "pop_mode", xl = "longer_alt", Sl = "line_breaks", kl = "start_chars_hint";
function Af(t) {
  return AR(t);
}
function AR(t) {
  const e = t.pattern, n = {};
  if (n.name = t.name, lt(e) || (n.PATTERN = e), C(t, RR))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return C(t, vl) && (n.CATEGORIES = t[vl]), Or([n]), C(t, Rl) && (n.LABEL = t[Rl]), C(t, Al) && (n.GROUP = t[Al]), C(t, $l) && (n.POP_MODE = t[$l]), C(t, El) && (n.PUSH_MODE = t[El]), C(t, xl) && (n.LONGER_ALT = t[xl]), C(t, Sl) && (n.LINE_BREAKS = t[Sl]), C(t, kl) && (n.START_CHARS_HINT = t[kl]), n;
}
const yt = Af({ name: "EOF", pattern: he.NA });
Or([yt]);
function fo(t, e, n, r, i, s, a, o) {
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
function Ef(t, e) {
  return br(t, e);
}
const Yt = {
  buildMismatchTokenMessage({ expected: t, actual: e, previous: n, ruleName: r }) {
    return `Expecting ${Rf(t) ? `--> ${Zt(t)} <--` : `token of type --> ${t.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + t.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: t, actual: e, previous: n, customUserDescription: r, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + je(e).image + "'";
    if (r)
      return s + r + o;
    {
      const l = xe(t, (d, h) => d.concat(h), []), u = I(l, (d) => `[${I(d, (h) => Zt(h)).join(", ")}]`), f = `one of these possible Token sequences:
${I(u, (d, h) => `  ${h + 1}. ${d}`).join(`
`)}`;
      return s + f + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: t, actual: e, customUserDescription: n, ruleName: r }) {
    const i = "Expecting: ", a = `
but found: '` + je(e).image + "'";
    if (n)
      return i + n + a;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${I(t, (u) => `[${I(u, (c) => Zt(c)).join(",")}]`).join(" ,")}>`;
      return i + l + a;
    }
  }
};
Object.freeze(Yt);
const ER = {
  buildRuleNotFoundError(t, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + t.name + "<-";
  }
}, _t = {
  buildDuplicateFoundError(t, e) {
    function n(c) {
      return c instanceof j ? c.terminalType.name : c instanceof ce ? c.nonTerminalName : "";
    }
    const r = t.name, i = je(e), s = i.idx, a = We(i), o = n(i), l = s > 0;
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
    const e = I(t.prefixPath, (i) => Zt(i)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
    return `Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(t) {
    const e = I(t.prefixPath, (i) => Zt(i)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
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
    const e = t.topLevelRule.name, n = I(t.leftRecursionPath, (s) => s.name), r = `${e} --> ${n.concat([e]).join(" --> ")}`;
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
    return t.topLevelRule instanceof kn ? e = t.topLevelRule.name : e = t.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`;
  }
};
function $R(t, e) {
  const n = new xR(t, e);
  return n.resolveRefs(), n.errors;
}
class xR extends In {
  constructor(e, n) {
    super(), this.nameToTopRule = e, this.errMsgProvider = n, this.errors = [];
  }
  resolveRefs() {
    w(J(this.nameToTopRule), (e) => {
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
        type: fe.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class SR extends ls {
  constructor(e, n) {
    super(), this.topProd = e, this.path = n, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = se(this.path.ruleStack).reverse(), this.occurrenceStack = se(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
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
class kR extends SR {
  constructor(e, n) {
    super(e, n), this.path = n, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, n, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = n.concat(r), s = new me({ definition: i });
      this.possibleTokTypes = _r(s), this.found = !0;
    }
  }
}
class cs extends ls {
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
class IR extends cs {
  walkMany(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = je(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof j && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, n, r);
  }
}
class Il extends cs {
  walkManySep(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = je(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof j && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, n, r);
  }
}
class CR extends cs {
  walkAtLeastOne(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = je(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof j && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, n, r);
  }
}
class Cl extends cs {
  walkAtLeastOneSep(e, n, r) {
    if (e.idx === this.occurrence) {
      const i = je(n.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof j && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, n, r);
  }
}
function ca(t, e, n = []) {
  n = se(n);
  let r = [], i = 0;
  function s(o) {
    return o.concat(te(t, i + 1));
  }
  function a(o) {
    const l = ca(s(o), e, n);
    return r.concat(l);
  }
  for (; n.length < e && i < t.length; ) {
    const o = t[i];
    if (o instanceof me)
      return a(o.definition);
    if (o instanceof ce)
      return a(o.definition);
    if (o instanceof ie)
      r = a(o.definition);
    else if (o instanceof Se) {
      const l = o.definition.concat([
        new z({
          definition: o.definition
        })
      ]);
      return a(l);
    } else if (o instanceof ke) {
      const l = [
        new me({ definition: o.definition }),
        new z({
          definition: [new j({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a(l);
    } else if (o instanceof ge) {
      const l = o.definition.concat([
        new z({
          definition: [new j({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a(l);
    } else if (o instanceof z) {
      const l = o.definition.concat([
        new z({
          definition: o.definition
        })
      ]);
      r = a(l);
    } else {
      if (o instanceof ye)
        return w(o.definition, (l) => {
          U(l.definition) === !1 && (r = a(l.definition));
        }), r;
      if (o instanceof j)
        n.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return r.push({
    partialPath: n,
    suffixDef: te(t, i)
  }), r;
}
function $f(t, e, n, r) {
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
      o && vn(f).idx <= u && f.pop();
      continue;
    }
    const h = d.def, m = d.idx, g = d.ruleStack, R = d.occurrenceStack;
    if (U(h))
      continue;
    const y = h[0];
    if (y === i) {
      const E = {
        idx: m,
        def: te(h),
        ruleStack: Ar(g),
        occurrenceStack: Ar(R)
      };
      f.push(E);
    } else if (y instanceof j)
      if (m < l - 1) {
        const E = m + 1, v = e[E];
        if (n(v, y.terminalType)) {
          const S = {
            idx: E,
            def: te(h),
            ruleStack: g,
            occurrenceStack: R
          };
          f.push(S);
        }
      } else if (m === l - 1)
        c.push({
          nextTokenType: y.terminalType,
          nextTokenOccurrence: y.idx,
          ruleStack: g,
          occurrenceStack: R
        }), o = !0;
      else
        throw Error("non exhaustive match");
    else if (y instanceof ce) {
      const E = se(g);
      E.push(y.nonTerminalName);
      const v = se(R);
      v.push(y.idx);
      const S = {
        idx: m,
        def: y.definition.concat(s, te(h)),
        ruleStack: E,
        occurrenceStack: v
      };
      f.push(S);
    } else if (y instanceof ie) {
      const E = {
        idx: m,
        def: te(h),
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(E), f.push(a);
      const v = {
        idx: m,
        def: y.definition.concat(te(h)),
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(v);
    } else if (y instanceof Se) {
      const E = new z({
        definition: y.definition,
        idx: y.idx
      }), v = y.definition.concat([E], te(h)), S = {
        idx: m,
        def: v,
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(S);
    } else if (y instanceof ke) {
      const E = new j({
        terminalType: y.separator
      }), v = new z({
        definition: [E].concat(y.definition),
        idx: y.idx
      }), S = y.definition.concat([v], te(h)), M = {
        idx: m,
        def: S,
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(M);
    } else if (y instanceof ge) {
      const E = {
        idx: m,
        def: te(h),
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(E), f.push(a);
      const v = new j({
        terminalType: y.separator
      }), S = new z({
        definition: [v].concat(y.definition),
        idx: y.idx
      }), M = y.definition.concat([S], te(h)), ae = {
        idx: m,
        def: M,
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(ae);
    } else if (y instanceof z) {
      const E = {
        idx: m,
        def: te(h),
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(E), f.push(a);
      const v = new z({
        definition: y.definition,
        idx: y.idx
      }), S = y.definition.concat([v], te(h)), M = {
        idx: m,
        def: S,
        ruleStack: g,
        occurrenceStack: R
      };
      f.push(M);
    } else if (y instanceof ye)
      for (let E = y.definition.length - 1; E >= 0; E--) {
        const v = y.definition[E], S = {
          idx: m,
          def: v.definition.concat(te(h)),
          ruleStack: g,
          occurrenceStack: R
        };
        f.push(S), f.push(a);
      }
    else if (y instanceof me)
      f.push({
        idx: m,
        def: y.definition.concat(te(h)),
        ruleStack: g,
        occurrenceStack: R
      });
    else if (y instanceof kn)
      f.push(wR(y, m, g, R));
    else
      throw Error("non exhaustive match");
  }
  return c;
}
function wR(t, e, n, r) {
  const i = se(n);
  i.push(t.name);
  const s = se(r);
  return s.push(1), {
    idx: e,
    def: t.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var H;
(function(t) {
  t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
})(H || (H = {}));
function ho(t) {
  if (t instanceof ie || t === "Option")
    return H.OPTION;
  if (t instanceof z || t === "Repetition")
    return H.REPETITION;
  if (t instanceof Se || t === "RepetitionMandatory")
    return H.REPETITION_MANDATORY;
  if (t instanceof ke || t === "RepetitionMandatoryWithSeparator")
    return H.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (t instanceof ge || t === "RepetitionWithSeparator")
    return H.REPETITION_WITH_SEPARATOR;
  if (t instanceof ye || t === "Alternation")
    return H.ALTERNATION;
  throw Error("non exhaustive match");
}
function wl(t) {
  const { occurrence: e, rule: n, prodType: r, maxLookahead: i } = t, s = ho(r);
  return s === H.ALTERNATION ? fs(e, n, i) : ds(e, n, s, i);
}
function NR(t, e, n, r, i, s) {
  const a = fs(t, e, n), o = kf(a) ? wi : br;
  return s(a, r, o, i);
}
function _R(t, e, n, r, i, s) {
  const a = ds(t, e, i, n), o = kf(a) ? wi : br;
  return s(a[0], o, r);
}
function bR(t, e, n, r) {
  const i = t.length, s = Ue(t, (a) => Ue(a, (o) => o.length === 1));
  if (e)
    return function(a) {
      const o = I(a, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const u = t[l], c = u.length, f = o[l];
        if (!(f !== void 0 && f.call(this) === !1))
          e: for (let d = 0; d < c; d++) {
            const h = u[d], m = h.length;
            for (let g = 0; g < m; g++) {
              const R = this.LA(g + 1);
              if (n(R, h[g]) === !1)
                continue e;
            }
            return l;
          }
      }
    };
  if (s && !r) {
    const a = I(t, (l) => Ge(l)), o = xe(a, (l, u, c) => (w(u, (f) => {
      C(l, f.tokenTypeIdx) || (l[f.tokenTypeIdx] = c), w(f.categoryMatches, (d) => {
        C(l, d) || (l[d] = c);
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
function OR(t, e, n) {
  const r = Ue(t, (s) => s.length === 1), i = t.length;
  if (r && !n) {
    const s = Ge(t);
    if (s.length === 1 && U(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a = xe(s, (o, l, u) => (o[l.tokenTypeIdx] = !0, w(l.categoryMatches, (c) => {
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
class LR extends ls {
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
    this.checkIsTarget(e, H.OPTION, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOne(e, n, r) {
    this.checkIsTarget(e, H.REPETITION_MANDATORY, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOneSep(e, n, r) {
    this.checkIsTarget(e, H.REPETITION_MANDATORY_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
  walkMany(e, n, r) {
    this.checkIsTarget(e, H.REPETITION, n, r) || super.walkOption(e, n, r);
  }
  walkManySep(e, n, r) {
    this.checkIsTarget(e, H.REPETITION_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
}
class xf extends In {
  constructor(e, n, r) {
    super(), this.targetOccurrence = e, this.targetProdType = n, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, n) {
    e.idx === this.targetOccurrence && this.targetProdType === n && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, H.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, H.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, H.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, H.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, H.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, H.ALTERNATION);
  }
}
function Nl(t) {
  const e = new Array(t);
  for (let n = 0; n < t; n++)
    e[n] = [];
  return e;
}
function bs(t) {
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
function PR(t, e, n) {
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
function Sf(t, e) {
  const n = I(t, (a) => ca([a], 1)), r = Nl(n.length), i = I(n, (a) => {
    const o = {};
    return w(a, (l) => {
      const u = bs(l.partialPath);
      w(u, (c) => {
        o[c] = !0;
      });
    }), o;
  });
  let s = n;
  for (let a = 1; a <= e; a++) {
    const o = s;
    s = Nl(o.length);
    for (let l = 0; l < o.length; l++) {
      const u = o[l];
      for (let c = 0; c < u.length; c++) {
        const f = u[c].partialPath, d = u[c].suffixDef, h = bs(f);
        if (PR(i, h, l) || U(d) || f.length === e) {
          const g = r[l];
          if (fa(g, f) === !1) {
            g.push(f);
            for (let R = 0; R < h.length; R++) {
              const y = h[R];
              i[l][y] = !0;
            }
          }
        } else {
          const g = ca(d, a + 1, f);
          s[l] = s[l].concat(g), w(g, (R) => {
            const y = bs(R.partialPath);
            w(y, (E) => {
              i[l][E] = !0;
            });
          });
        }
      }
    }
  }
  return r;
}
function fs(t, e, n, r) {
  const i = new xf(t, H.ALTERNATION, r);
  return e.accept(i), Sf(i.result, n);
}
function ds(t, e, n, r) {
  const i = new xf(t, n);
  e.accept(i);
  const s = i.result, o = new LR(e, t, n).startWalking(), l = new me({ definition: s }), u = new me({ definition: o });
  return Sf([l, u], r);
}
function fa(t, e) {
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
function MR(t, e) {
  return t.length < e.length && Ue(t, (n, r) => {
    const i = e[r];
    return n === i || i.categoryMatchesMap[n.tokenTypeIdx];
  });
}
function kf(t) {
  return Ue(t, (e) => Ue(e, (n) => Ue(n, (r) => U(r.categoryMatches))));
}
function DR(t) {
  const e = t.lookaheadStrategy.validate({
    rules: t.rules,
    tokenTypes: t.tokenTypes,
    grammarName: t.grammarName
  });
  return I(e, (n) => Object.assign({ type: fe.CUSTOM_LOOKAHEAD_VALIDATION }, n));
}
function FR(t, e, n, r) {
  const i = Ne(t, (l) => GR(l, n)), s = JR(t, e, n), a = Ne(t, (l) => zR(l, n)), o = Ne(t, (l) => jR(l, t, r, n));
  return i.concat(s, a, o);
}
function GR(t, e) {
  const n = new BR();
  t.accept(n);
  const r = n.allProductions, i = iv(r, UR), s = Ke(i, (o) => o.length > 1);
  return I(J(s), (o) => {
    const l = je(o), u = e.buildDuplicateFoundError(t, o), c = We(l), f = {
      message: u,
      type: fe.DUPLICATE_PRODUCTIONS,
      ruleName: t.name,
      dslName: c,
      occurrence: l.idx
    }, d = If(l);
    return d && (f.parameter = d), f;
  });
}
function UR(t) {
  return `${We(t)}_#_${t.idx}_#_${If(t)}`;
}
function If(t) {
  return t instanceof j ? t.terminalType.name : t instanceof ce ? t.nonTerminalName : "";
}
class BR extends In {
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
function jR(t, e, n, r) {
  const i = [];
  if (xe(e, (a, o) => o.name === t.name ? a + 1 : a, 0) > 1) {
    const a = r.buildDuplicateRuleNameError({
      topLevelRule: t,
      grammarName: n
    });
    i.push({
      message: a,
      type: fe.DUPLICATE_RULE_NAME,
      ruleName: t.name
    });
  }
  return i;
}
function KR(t, e, n) {
  const r = [];
  let i;
  return de(e, t) || (i = `Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `, r.push({
    message: i,
    type: fe.INVALID_RULE_OVERRIDE,
    ruleName: t
  })), r;
}
function Cf(t, e, n, r = []) {
  const i = [], s = fi(e.definition);
  if (U(s))
    return [];
  {
    const a = t.name;
    de(s, t) && i.push({
      message: n.buildLeftRecursionError({
        topLevelRule: t,
        leftRecursionPath: r
      }),
      type: fe.LEFT_RECURSION,
      ruleName: a
    });
    const l = as(s, r.concat([t])), u = Ne(l, (c) => {
      const f = se(r);
      return f.push(c), Cf(t, c, n, f);
    });
    return i.concat(u);
  }
}
function fi(t) {
  let e = [];
  if (U(t))
    return e;
  const n = je(t);
  if (n instanceof ce)
    e.push(n.referencedRule);
  else if (n instanceof me || n instanceof ie || n instanceof Se || n instanceof ke || n instanceof ge || n instanceof z)
    e = e.concat(fi(n.definition));
  else if (n instanceof ye)
    e = Ge(I(n.definition, (s) => fi(s.definition)));
  else if (!(n instanceof j)) throw Error("non exhaustive match");
  const r = Ii(n), i = t.length > 1;
  if (r && i) {
    const s = te(t);
    return e.concat(fi(s));
  } else
    return e;
}
class po extends In {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function HR(t, e) {
  const n = new po();
  t.accept(n);
  const r = n.alternations;
  return Ne(r, (s) => {
    const a = Ar(s.definition);
    return Ne(a, (o, l) => {
      const u = $f([o], [], br, 1);
      return U(u) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: t,
            alternation: s,
            emptyChoiceIdx: l
          }),
          type: fe.NONE_LAST_EMPTY_ALT,
          ruleName: t.name,
          occurrence: s.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
function VR(t, e, n) {
  const r = new po();
  t.accept(r);
  let i = r.alternations;
  return i = os(i, (a) => a.ignoreAmbiguities === !0), Ne(i, (a) => {
    const o = a.idx, l = a.maxLookahead || e, u = fs(o, t, l, a), c = YR(u, a, t, n), f = XR(u, a, t, n);
    return c.concat(f);
  });
}
class WR extends In {
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
function zR(t, e) {
  const n = new po();
  t.accept(n);
  const r = n.alternations;
  return Ne(r, (s) => s.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: t,
        alternation: s
      }),
      type: fe.TOO_MANY_ALTS,
      ruleName: t.name,
      occurrence: s.idx
    }
  ] : []);
}
function qR(t, e, n) {
  const r = [];
  return w(t, (i) => {
    const s = new WR();
    i.accept(s);
    const a = s.allProductions;
    w(a, (o) => {
      const l = ho(o), u = o.maxLookahead || e, c = o.idx, d = ds(c, i, l, u)[0];
      if (U(Ge(d))) {
        const h = n.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        r.push({
          message: h,
          type: fe.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), r;
}
function YR(t, e, n, r) {
  const i = [], s = xe(t, (o, l, u) => (e.definition[u].ignoreAmbiguities === !0 || w(l, (c) => {
    const f = [u];
    w(t, (d, h) => {
      u !== h && fa(d, c) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[h].ignoreAmbiguities !== !0 && f.push(h);
    }), f.length > 1 && !fa(i, c) && (i.push(c), o.push({
      alts: f,
      path: c
    }));
  }), o), []);
  return I(s, (o) => {
    const l = I(o.alts, (c) => c + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: n,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: fe.AMBIGUOUS_ALTS,
      ruleName: n.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function XR(t, e, n, r) {
  const i = xe(t, (a, o, l) => {
    const u = I(o, (c) => ({ idx: l, path: c }));
    return a.concat(u);
  }, []);
  return Nr(Ne(i, (a) => {
    if (e.definition[a.idx].ignoreAmbiguities === !0)
      return [];
    const l = a.idx, u = a.path, c = Pe(i, (d) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[d.idx].ignoreAmbiguities !== !0 && d.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      MR(d.path, u)
    ));
    return I(c, (d) => {
      const h = [d.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: n,
          alternation: e,
          ambiguityIndices: h,
          prefixPath: d.path
        }),
        type: fe.AMBIGUOUS_PREFIX_ALTS,
        ruleName: n.name,
        occurrence: m,
        alternatives: h
      };
    });
  }));
}
function JR(t, e, n) {
  const r = [], i = I(e, (s) => s.name);
  return w(t, (s) => {
    const a = s.name;
    if (de(i, a)) {
      const o = n.buildNamespaceConflictError(s);
      r.push({
        message: o,
        type: fe.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a
      });
    }
  }), r;
}
function ZR(t) {
  const e = lo(t, {
    errMsgProvider: ER
  }), n = {};
  return w(t.rules, (r) => {
    n[r.name] = r;
  }), $R(n, e.errMsgProvider);
}
function QR(t) {
  return t = lo(t, {
    errMsgProvider: _t
  }), FR(t.rules, t.tokenTypes, t.errMsgProvider, t.grammarName);
}
const wf = "MismatchedTokenException", Nf = "NoViableAltException", _f = "EarlyExitException", bf = "NotAllInputParsedException", Of = [
  wf,
  Nf,
  _f,
  bf
];
Object.freeze(Of);
function Ni(t) {
  return de(Of, t.name);
}
class hs extends Error {
  constructor(e, n) {
    super(e), this.token = n, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class Lf extends hs {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = wf;
  }
}
class eA extends hs {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = Nf;
  }
}
class tA extends hs {
  constructor(e, n) {
    super(e, n), this.name = bf;
  }
}
class nA extends hs {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = _f;
  }
}
const Os = {}, Pf = "InRuleRecoveryException";
class rA extends Error {
  constructor(e) {
    super(e), this.name = Pf;
  }
}
class iA {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = C(e, "recoveryEnabled") ? e.recoveryEnabled : ut.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = sA);
  }
  getTokenToInsert(e) {
    const n = fo(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
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
      }), m = new Lf(h, u, this.LA(0));
      m.resyncedTokens = Ar(o), this.SAVE_ERROR(m);
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
    throw new rA("sad sad panda");
  }
  canPerformInRuleRecovery(e, n) {
    return this.canRecoverWithSingleTokenInsertion(e, n) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, n) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || U(n))
      return !1;
    const r = this.LA(1);
    return Rn(n, (s) => this.tokenMatcher(r, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const n = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(n);
    return de(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let n = this.LA(1), r = 2;
    for (; ; ) {
      const i = Rn(e, (s) => Ef(n, s));
      if (i !== void 0)
        return i;
      n = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Os;
    const e = this.getLastExplicitRuleShortName(), n = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: n,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, n = this.RULE_OCCURRENCE_STACK;
    return I(e, (r, i) => i === 0 ? Os : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: n[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = I(this.buildFullFollowKeyStack(), (n) => this.getFollowSetFromFollowKey(n));
    return Ge(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Os)
      return [yt];
    const n = e.ruleName + e.idxInCallingRule + ff + e.inRule;
    return this.resyncFollows[n];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, n) {
    return this.tokenMatcher(e, yt) || n.push(e), n;
  }
  reSyncTo(e) {
    const n = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === !1; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, n);
    return Ar(n);
  }
  attemptInRepetitionRecovery(e, n, r, i, s, a, o) {
  }
  getCurrentGrammarPath(e, n) {
    const r = this.getHumanReadableRuleStack(), i = se(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: n
    };
  }
  getHumanReadableRuleStack() {
    return I(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function sA(t, e, n, r, i, s, a) {
  const o = this.getKeyForAutomaticLookahead(r, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const d = this.getCurrRuleFullName(), h = this.getGAstProductions()[d];
    l = new s(h, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let u = l.token, c = l.occurrence;
  const f = l.isEndOfRule;
  this.RULE_STACK.length === 1 && f && u === void 0 && (u = yt, c = 1), !(u === void 0 || c === void 0) && this.shouldInRepetitionRecoveryBeTried(u, c, a) && this.tryInRepetitionRecovery(t, e, n, u);
}
const aA = 4, At = 8, Mf = 1 << At, Df = 2 << At, da = 3 << At, ha = 4 << At, pa = 5 << At, di = 6 << At;
function Ls(t, e, n) {
  return n | e | t;
}
class mo {
  constructor(e) {
    var n;
    this.maxLookahead = (n = e?.maxLookahead) !== null && n !== void 0 ? n : ut.maxLookahead;
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
    return Ne(e, (n) => Cf(n, n, _t));
  }
  validateEmptyOrAlternatives(e) {
    return Ne(e, (n) => HR(n, _t));
  }
  validateAmbiguousAlternationAlternatives(e, n) {
    return Ne(e, (r) => VR(r, n, _t));
  }
  validateSomeNonEmptyLookaheadPath(e, n) {
    return qR(e, n, _t);
  }
  buildLookaheadForAlternation(e) {
    return NR(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, bR);
  }
  buildLookaheadForOptional(e) {
    return _R(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, ho(e.prodType), OR);
  }
}
class oA {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = C(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : ut.dynamicTokensEnabled, this.maxLookahead = C(e, "maxLookahead") ? e.maxLookahead : ut.maxLookahead, this.lookaheadStrategy = C(e, "lookaheadStrategy") ? e.lookaheadStrategy : new mo({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    w(e, (n) => {
      this.TRACE_INIT(`${n.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: i, option: s, repetitionMandatory: a, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = uA(n);
        w(r, (u) => {
          const c = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${We(u)}${c}`, () => {
            const f = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: n,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), d = Ls(this.fullRuleNameToShort[n.name], Mf, u.idx);
            this.setLaFuncCache(d, f);
          });
        }), w(i, (u) => {
          this.computeLookaheadFunc(n, u.idx, da, "Repetition", u.maxLookahead, We(u));
        }), w(s, (u) => {
          this.computeLookaheadFunc(n, u.idx, Df, "Option", u.maxLookahead, We(u));
        }), w(a, (u) => {
          this.computeLookaheadFunc(n, u.idx, ha, "RepetitionMandatory", u.maxLookahead, We(u));
        }), w(o, (u) => {
          this.computeLookaheadFunc(n, u.idx, di, "RepetitionMandatoryWithSeparator", u.maxLookahead, We(u));
        }), w(l, (u) => {
          this.computeLookaheadFunc(n, u.idx, pa, "RepetitionWithSeparator", u.maxLookahead, We(u));
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
      }), l = Ls(this.fullRuleNameToShort[e.name], r, n);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, n) {
    const r = this.getLastExplicitRuleShortName();
    return Ls(r, e, n);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, n) {
    this.lookAheadFuncsCache.set(e, n);
  }
}
class lA extends In {
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
const Xr = new lA();
function uA(t) {
  Xr.reset(), t.accept(Xr);
  const e = Xr.dslMethods;
  return Xr.reset(), e;
}
function _l(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset);
}
function bl(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine);
}
function cA(t, e, n) {
  t.children[n] === void 0 ? t.children[n] = [e] : t.children[n].push(e);
}
function fA(t, e, n) {
  t.children[e] === void 0 ? t.children[e] = [n] : t.children[e].push(n);
}
const dA = "name";
function Ff(t, e) {
  Object.defineProperty(t, dA, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function hA(t, e) {
  const n = Le(t), r = n.length;
  for (let i = 0; i < r; i++) {
    const s = n[i], a = t[s], o = a.length;
    for (let l = 0; l < o; l++) {
      const u = a[l];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
function pA(t, e) {
  const n = function() {
  };
  Ff(n, t + "BaseSemantics");
  const r = {
    visit: function(i, s) {
      if (P(i) && (i = i[0]), !lt(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = gA(this, e);
      if (!U(i)) {
        const s = I(i, (a) => a.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return n.prototype = r, n.prototype.constructor = n, n._RULE_NAMES = e, n;
}
function mA(t, e, n) {
  const r = function() {
  };
  Ff(r, t + "BaseSemanticsWithDefaults");
  const i = Object.create(n.prototype);
  return w(e, (s) => {
    i[s] = hA;
  }), r.prototype = i, r.prototype.constructor = r, r;
}
var ma;
(function(t) {
  t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
})(ma || (ma = {}));
function gA(t, e) {
  return yA(t, e);
}
function yA(t, e) {
  const n = Pe(e, (i) => ct(t[i]) === !1), r = I(n, (i) => ({
    msg: `Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,
    type: ma.MISSING_METHOD,
    methodName: i
  }));
  return Nr(r);
}
class TA {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = C(e, "nodeLocationTracking") ? e.nodeLocationTracking : ut.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = X, this.cstFinallyStateUpdate = X, this.cstPostTerminal = X, this.cstPostNonTerminal = X, this.cstPostRule = X;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = bl, this.setNodeLocationFromNode = bl, this.cstPostRule = X, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = X, this.setNodeLocationFromNode = X, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = _l, this.setNodeLocationFromNode = _l, this.cstPostRule = X, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = X, this.setNodeLocationFromNode = X, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = X, this.setNodeLocationFromNode = X, this.cstPostRule = X, this.setInitialNodeLocation = X;
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
    cA(r, n, e), this.setNodeLocationFromToken(r.location, n);
  }
  cstPostNonTerminal(e, n) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    fA(r, n, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (lt(this.baseCstVisitorConstructor)) {
      const e = pA(this.className, Le(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (lt(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = mA(this.className, Le(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
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
class vA {
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
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : bi;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const n = this.currIdx + e;
    return n < 0 || this.tokVectorLength <= n ? bi : this.tokVector[n];
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
class RA {
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
  RULE(e, n, r = Oi) {
    if (de(this.definedRulesNames, e)) {
      const a = {
        message: _t.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: fe.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, n, r);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, n, r = Oi) {
    const i = KR(e, this.definedRulesNames, this.className);
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
        if (Ni(i))
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
    return wv(J(this.gastProductionsCache));
  }
}
class AA {
  initRecognizerEngine(e, n) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = wi, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, C(n, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (P(e)) {
      if (U(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (P(e))
      this.tokensMap = xe(e, (s, a) => (s[a.name] = a, s), {});
    else if (C(e, "modes") && Ue(Ge(J(e.modes)), vR)) {
      const s = Ge(J(e.modes)), a = uo(s);
      this.tokensMap = xe(a, (o, l) => (o[l.name] = l, o), {});
    } else if (Oe(e))
      this.tokensMap = se(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = yt;
    const r = C(e, "modes") ? Ge(J(e.modes)) : J(e), i = Ue(r, (s) => U(s.categoryMatches));
    this.tokenMatcher = i ? wi : br, Or(J(this.tokensMap));
  }
  defineRule(e, n, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = C(r, "resyncEnabled") ? r.resyncEnabled : Oi.resyncEnabled, s = C(r, "recoveryValueFunc") ? r.recoveryValueFunc : Oi.recoveryValueFunc, a = this.ruleShortNameIdx << aA + At;
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
    if (Ni(e)) {
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
    const r = this.getKeyForAutomaticLookahead(Df, n);
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
    const r = this.getKeyForAutomaticLookahead(ha, e);
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
      throw this.raiseEarlyExitException(e, H.REPETITION_MANDATORY, n.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, n], i, ha, e, CR);
  }
  atLeastOneSepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(di, e);
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
        Cl
      ], o, di, e, Cl);
    } else
      throw this.raiseEarlyExitException(e, H.REPETITION_MANDATORY_WITH_SEPARATOR, n.ERR_MSG);
  }
  manyInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(da, e);
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
      da,
      e,
      IR,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a
    );
  }
  manySepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(pa, e);
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
        Il
      ], o, pa, e, Il);
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
    ], r, di, e, s);
  }
  doSingleRepetition(e) {
    const n = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > n;
  }
  orInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Mf, n), i = P(e) ? e : e.DEF, a = this.getLaFuncFromCache(r).call(this, i);
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
      this.SAVE_ERROR(new tA(n, e));
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
    throw Ni(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : r), delete e.partialCstResult), e;
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
    }), this.SAVE_ERROR(new Lf(i, n, s));
  }
  consumeInternalRecovery(e, n, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, n);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === Pf ? r : s;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, n = se(this.RULE_STACK);
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
    return this.tokenMatcher(this.LA(1), yt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class EA {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = C(e, "errorMessageProvider") ? e.errorMessageProvider : ut.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (Ni(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: se(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return se(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, n, r) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = ds(e, s, n, this.maxLookahead)[0], l = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      l.push(this.LA(c));
    const u = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: i
    });
    throw this.SAVE_ERROR(new nA(u, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, n) {
    const r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], s = fs(e, i, this.maxLookahead), a = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      a.push(this.LA(u));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a,
      previous: o,
      customUserDescription: n,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new eA(l, this.LA(1), o));
  }
}
class $A {
  initContentAssist() {
  }
  computeContentAssist(e, n) {
    const r = this.gastProductionsCache[e];
    if (lt(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return $f([r], n, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const n = je(e.ruleStack), i = this.getGAstProductions()[n];
    return new kR(i, e).startWalking();
  }
}
const ps = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(ps);
const Ol = !0, Ll = Math.pow(2, At) - 1, Gf = Af({ name: "RECORDING_PHASE_TOKEN", pattern: he.NA });
Or([Gf]);
const Uf = fo(
  Gf,
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
Object.freeze(Uf);
const xA = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class SA {
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
    return bi;
  }
  topLevelRuleRecord(e, n) {
    try {
      const r = new kn({ definition: [], name: e });
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
    return _n.call(this, ie, e, n);
  }
  atLeastOneInternalRecord(e, n) {
    _n.call(this, Se, n, e);
  }
  atLeastOneSepFirstInternalRecord(e, n) {
    _n.call(this, ke, n, e, Ol);
  }
  manyInternalRecord(e, n) {
    _n.call(this, z, n, e);
  }
  manySepFirstInternalRecord(e, n) {
    _n.call(this, ge, n, e, Ol);
  }
  orInternalRecord(e, n) {
    return kA.call(this, e, n);
  }
  subruleInternalRecord(e, n, r) {
    if (_i(n), !e || C(e, "ruleName") === !1) {
      const o = new Error(`<SUBRULE${Pl(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const i = vn(this.recordingProdStack), s = e.ruleName, a = new ce({
      idx: n,
      nonTerminalName: s,
      label: r?.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a), this.outputCst ? xA : ps;
  }
  consumeInternalRecord(e, n, r) {
    if (_i(n), !vf(e)) {
      const a = new Error(`<CONSUME${Pl(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a.KNOWN_RECORDER_ERROR = !0, a;
    }
    const i = vn(this.recordingProdStack), s = new j({
      idx: n,
      terminalType: e,
      label: r?.LABEL
    });
    return i.definition.push(s), Uf;
  }
}
function _n(t, e, n, r = !1) {
  _i(n);
  const i = vn(this.recordingProdStack), s = ct(e) ? e : e.DEF, a = new t({ definition: [], idx: n });
  return r && (a.separator = e.SEP), C(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a), s.call(this), i.definition.push(a), this.recordingProdStack.pop(), ps;
}
function kA(t, e) {
  _i(e);
  const n = vn(this.recordingProdStack), r = P(t) === !1, i = r === !1 ? t : t.DEF, s = new ye({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && t.IGNORE_AMBIGUITIES === !0
  });
  C(t, "MAX_LOOKAHEAD") && (s.maxLookahead = t.MAX_LOOKAHEAD);
  const a = of(i, (o) => ct(o.GATE));
  return s.hasPredicates = a, n.definition.push(s), w(i, (o) => {
    const l = new me({ definition: [] });
    s.definition.push(l), C(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : C(o, "GATE") && (l.ignoreAmbiguities = !0), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), ps;
}
function Pl(t) {
  return t === 0 ? "" : `${t}`;
}
function _i(t) {
  if (t < 0 || t > Ll) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${Ll + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class IA {
  initPerformanceTracer(e) {
    if (C(e, "traceInitPerf")) {
      const n = e.traceInitPerf, r = typeof n == "number";
      this.traceInitMaxIdent = r ? n : 1 / 0, this.traceInitPerf = r ? n > 0 : n;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = ut.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, n) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: i, value: s } = uf(n), a = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a(`${r}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return n();
  }
}
function CA(t, e) {
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
const bi = fo(yt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(bi);
const ut = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: Yt,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), Oi = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var fe;
(function(t) {
  t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", t[t.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(fe || (fe = {}));
function Ml(t = void 0) {
  return function() {
    return t;
  };
}
class Lr {
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
        cf(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), w(this.definedRulesNames, (i) => {
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
        r = ZR({
          rules: J(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (U(r) && this.skipValidations === !1) {
          const i = QR({
            rules: J(this.gastProductionsCache),
            tokenTypes: J(this.tokensMap),
            errMsgProvider: _t,
            grammarName: n
          }), s = DR({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: J(this.gastProductionsCache),
            tokenTypes: J(this.tokensMap),
            grammarName: n
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), U(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = Mv(J(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: J(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(J(this.gastProductionsCache));
      })), !Lr.DEFER_DEFINITION_ERRORS_HANDLING && !U(this.definitionErrors))
        throw e = I(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, n) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const r = this;
    if (r.initErrorHandler(n), r.initLexerAdapter(), r.initLooksAhead(n), r.initRecognizerEngine(e, n), r.initRecoverable(n), r.initTreeBuilder(n), r.initContentAssist(), r.initGastRecorder(n), r.initPerformanceTracer(n), C(n, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = C(n, "skipValidations") ? n.skipValidations : ut.skipValidations;
  }
}
Lr.DEFER_DEFINITION_ERRORS_HANDLING = !1;
CA(Lr, [
  iA,
  oA,
  TA,
  vA,
  AA,
  RA,
  EA,
  $A,
  SA,
  IA
]);
class wA extends Lr {
  constructor(e, n = ut) {
    const r = se(n);
    r.outputCst = !1, super(e, r);
  }
}
function An(t, e, n) {
  return `${t.name}_${e}_${n}`;
}
const Tt = 1, NA = 2, Bf = 4, jf = 5, Pr = 7, _A = 8, bA = 9, OA = 10, LA = 11, Kf = 12;
class go {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return !1;
  }
}
class yo extends go {
  constructor(e, n) {
    super(e), this.tokenType = n;
  }
}
class Hf extends go {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return !0;
  }
}
class To extends go {
  constructor(e, n, r) {
    super(e), this.rule = n, this.followState = r;
  }
  isEpsilon() {
    return !0;
  }
}
function PA(t) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  MA(e, t);
  const n = t.length;
  for (let r = 0; r < n; r++) {
    const i = t[r], s = Kt(e, i, i);
    s !== void 0 && zA(e, i, s);
  }
  return e;
}
function MA(t, e) {
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const i = e[r], s = Q(t, i, void 0, {
      type: NA
    }), a = Q(t, i, void 0, {
      type: Pr
    });
    s.stop = a, t.ruleToStartState.set(i, s), t.ruleToStopState.set(i, a);
  }
}
function Vf(t, e, n) {
  return n instanceof j ? vo(t, e, n.terminalType, n) : n instanceof ce ? WA(t, e, n) : n instanceof ye ? BA(t, e, n) : n instanceof ie ? jA(t, e, n) : n instanceof z ? DA(t, e, n) : n instanceof ge ? FA(t, e, n) : n instanceof Se ? GA(t, e, n) : n instanceof ke ? UA(t, e, n) : Kt(t, e, n);
}
function DA(t, e, n) {
  const r = Q(t, e, n, {
    type: jf
  });
  Et(t, r);
  const i = Cn(t, e, r, n, Kt(t, e, n));
  return zf(t, e, n, i);
}
function FA(t, e, n) {
  const r = Q(t, e, n, {
    type: jf
  });
  Et(t, r);
  const i = Cn(t, e, r, n, Kt(t, e, n)), s = vo(t, e, n.separator, n);
  return zf(t, e, n, i, s);
}
function GA(t, e, n) {
  const r = Q(t, e, n, {
    type: Bf
  });
  Et(t, r);
  const i = Cn(t, e, r, n, Kt(t, e, n));
  return Wf(t, e, n, i);
}
function UA(t, e, n) {
  const r = Q(t, e, n, {
    type: Bf
  });
  Et(t, r);
  const i = Cn(t, e, r, n, Kt(t, e, n)), s = vo(t, e, n.separator, n);
  return Wf(t, e, n, i, s);
}
function BA(t, e, n) {
  const r = Q(t, e, n, {
    type: Tt
  });
  Et(t, r);
  const i = st(n.definition, (a) => Vf(t, e, a));
  return Cn(t, e, r, n, ...i);
}
function jA(t, e, n) {
  const r = Q(t, e, n, {
    type: Tt
  });
  Et(t, r);
  const i = Cn(t, e, r, n, Kt(t, e, n));
  return KA(t, e, n, i);
}
function Kt(t, e, n) {
  const r = Hd(st(n.definition, (i) => Vf(t, e, i)), (i) => i !== void 0);
  return r.length === 1 ? r[0] : r.length === 0 ? void 0 : VA(t, r);
}
function Wf(t, e, n, r, i) {
  const s = r.left, a = r.right, o = Q(t, e, n, {
    type: LA
  });
  Et(t, o);
  const l = Q(t, e, n, {
    type: Kf
  });
  return s.loopback = o, l.loopback = o, t.decisionMap[An(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", n.idx)] = o, Y(a, o), i === void 0 ? (Y(o, s), Y(o, l)) : (Y(o, l), Y(o, i.left), Y(i.right, s)), {
    left: s,
    right: l
  };
}
function zf(t, e, n, r, i) {
  const s = r.left, a = r.right, o = Q(t, e, n, {
    type: OA
  });
  Et(t, o);
  const l = Q(t, e, n, {
    type: Kf
  }), u = Q(t, e, n, {
    type: bA
  });
  return o.loopback = u, l.loopback = u, Y(o, s), Y(o, l), Y(a, u), i !== void 0 ? (Y(u, l), Y(u, i.left), Y(i.right, s)) : Y(u, o), t.decisionMap[An(e, i ? "RepetitionWithSeparator" : "Repetition", n.idx)] = o, {
    left: o,
    right: l
  };
}
function KA(t, e, n, r) {
  const i = r.left, s = r.right;
  return Y(i, s), t.decisionMap[An(e, "Option", n.idx)] = i, r;
}
function Et(t, e) {
  return t.decisionStates.push(e), e.decision = t.decisionStates.length - 1, e.decision;
}
function Cn(t, e, n, r, ...i) {
  const s = Q(t, e, r, {
    type: _A,
    start: n
  });
  n.end = s;
  for (const o of i)
    o !== void 0 ? (Y(n, o.left), Y(o.right, s)) : Y(n, s);
  const a = {
    left: n,
    right: s
  };
  return t.decisionMap[An(e, HA(r), r.idx)] = n, a;
}
function HA(t) {
  if (t instanceof ye)
    return "Alternation";
  if (t instanceof ie)
    return "Option";
  if (t instanceof z)
    return "Repetition";
  if (t instanceof ge)
    return "RepetitionWithSeparator";
  if (t instanceof Se)
    return "RepetitionMandatory";
  if (t instanceof ke)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function VA(t, e) {
  const n = e.length;
  for (let s = 0; s < n - 1; s++) {
    const a = e[s];
    let o;
    a.left.transitions.length === 1 && (o = a.left.transitions[0]);
    const l = o instanceof To, u = o, c = e[s + 1].left;
    a.left.type === Tt && a.right.type === Tt && o !== void 0 && (l && u.followState === a.right || o.target === a.right) ? (l ? u.followState = c : o.target = c, qA(t, a.right)) : Y(a.right, c);
  }
  const r = e[0], i = e[n - 1];
  return {
    left: r.left,
    right: i.right
  };
}
function vo(t, e, n, r) {
  const i = Q(t, e, r, {
    type: Tt
  }), s = Q(t, e, r, {
    type: Tt
  });
  return Ro(i, new yo(s, n)), {
    left: i,
    right: s
  };
}
function WA(t, e, n) {
  const r = n.referencedRule, i = t.ruleToStartState.get(r), s = Q(t, e, n, {
    type: Tt
  }), a = Q(t, e, n, {
    type: Tt
  }), o = new To(i, r, a);
  return Ro(s, o), {
    left: s,
    right: a
  };
}
function zA(t, e, n) {
  const r = t.ruleToStartState.get(e);
  Y(r, n.left);
  const i = t.ruleToStopState.get(e);
  return Y(n.right, i), {
    left: r,
    right: i
  };
}
function Y(t, e) {
  const n = new Hf(e);
  Ro(t, n);
}
function Q(t, e, n, r) {
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
function Ro(t, e) {
  t.transitions.length === 0 && (t.epsilonOnlyTransitions = e.isEpsilon()), t.transitions.push(e);
}
function qA(t, e) {
  t.states.splice(t.states.indexOf(e), 1);
}
const Li = {};
class ga {
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
    const n = qf(e);
    n in this.map || (this.map[n] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return st(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const n in this.map)
      e += n + ":";
    return e;
  }
}
function qf(t, e = !0) {
  return `${e ? `a${t.alt}` : ""}s${t.state.stateNumber}:${t.stack.map((n) => n.stateNumber.toString()).join("_")}`;
}
function YA(t, e) {
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
class Yf {
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
const Dl = new Yf();
class XA extends mo {
  constructor(e) {
    var n;
    super(), this.logging = (n = e?.logging) !== null && n !== void 0 ? n : ((r) => console.log(r));
  }
  initialize(e) {
    this.atn = PA(e.rules), this.dfas = JA(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: n, rule: r, hasPredicates: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = An(r, "Alternation", n), c = this.atn.decisionMap[l].decision, f = st(wl({
      maxLookahead: 1,
      occurrence: n,
      prodType: "Alternation",
      rule: r
    }), (d) => st(d, (h) => h[0]));
    if (Fl(f, !1) && !s) {
      const d = Co(f, (h, m, g) => (vs(m, (R) => {
        R && (h[R.tokenTypeIdx] = g, vs(R.categoryMatches, (y) => {
          h[y] = g;
        }));
      }), h), {});
      return i ? function(h) {
        var m;
        const g = this.LA(1), R = d[g.tokenTypeIdx];
        if (h !== void 0 && R !== void 0) {
          const y = (m = h[R]) === null || m === void 0 ? void 0 : m.GATE;
          if (y !== void 0 && y.call(this) === !1)
            return;
        }
        return R;
      } : function() {
        const h = this.LA(1);
        return d[h.tokenTypeIdx];
      };
    } else return i ? function(d) {
      const h = new Yf(), m = d === void 0 ? 0 : d.length;
      for (let R = 0; R < m; R++) {
        const y = d?.[R].GATE;
        h.set(R, y === void 0 || y.call(this));
      }
      const g = Ps.call(this, a, c, h, o);
      return typeof g == "number" ? g : void 0;
    } : function() {
      const d = Ps.call(this, a, c, Dl, o);
      return typeof d == "number" ? d : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: n, rule: r, prodType: i, dynamicTokensEnabled: s } = e, a = this.dfas, o = this.logging, l = An(r, i, n), c = this.atn.decisionMap[l].decision, f = st(wl({
      maxLookahead: 1,
      occurrence: n,
      prodType: i,
      rule: r
    }), (d) => st(d, (h) => h[0]));
    if (Fl(f) && f[0][0] && !s) {
      const d = f[0], h = Gd(d);
      if (h.length === 1 && Vd(h[0].categoryMatches)) {
        const g = h[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === g;
        };
      } else {
        const m = Co(h, (g, R) => (R !== void 0 && (g[R.tokenTypeIdx] = !0, vs(R.categoryMatches, (y) => {
          g[y] = !0;
        })), g), {});
        return function() {
          const g = this.LA(1);
          return m[g.tokenTypeIdx] === !0;
        };
      }
    }
    return function() {
      const d = Ps.call(this, a, c, Dl, o);
      return typeof d == "object" ? !1 : d === 0;
    };
  }
}
function Fl(t, e = !0) {
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
function JA(t) {
  const e = t.decisionStates.length, n = Array(e);
  for (let r = 0; r < e; r++)
    n[r] = YA(t.decisionStates[r], r);
  return n;
}
function Ps(t, e, n, r) {
  const i = t[e](n);
  let s = i.start;
  if (s === void 0) {
    const o = lE(i.atnStartState);
    s = Jf(i, Xf(o)), i.start = s;
  }
  return ZA.apply(this, [i, s, n, r]);
}
function ZA(t, e, n, r) {
  let i = e, s = 1;
  const a = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = iE(i, o);
    if (l === void 0 && (l = QA.apply(this, [t, i, o, s, n, r])), l === Li)
      return rE(a, i, o);
    if (l.isAcceptState === !0)
      return l.prediction;
    i = l, a.push(o), o = this.LA(s++);
  }
}
function QA(t, e, n, r, i, s) {
  const a = sE(e.configs, n, i);
  if (a.size === 0)
    return Gl(t, e, n, Li), Li;
  let o = Xf(a);
  const l = oE(a, i);
  if (l !== void 0)
    o.isAcceptState = !0, o.prediction = l, o.configs.uniqueAlt = l;
  else if (dE(a)) {
    const u = Ud(a.alts);
    o.isAcceptState = !0, o.prediction = u, o.configs.uniqueAlt = u, eE.apply(this, [t, r, a.alts, s]);
  }
  return o = Gl(t, e, n, o), o;
}
function eE(t, e, n, r) {
  const i = [];
  for (let u = 1; u <= e; u++)
    i.push(this.LA(u).tokenType);
  const s = t.atnStartState, a = s.rule, o = s.production, l = tE({
    topLevelRule: a,
    ambiguityIndices: n,
    production: o,
    prefixPath: i
  });
  r(l);
}
function tE(t) {
  const e = st(t.prefixPath, (i) => Zt(i)).join(", "), n = t.production.idx === 0 ? "" : t.production.idx;
  let r = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${nE(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
}
function nE(t) {
  if (t instanceof ce)
    return "SUBRULE";
  if (t instanceof ie)
    return "OPTION";
  if (t instanceof ye)
    return "OR";
  if (t instanceof Se)
    return "AT_LEAST_ONE";
  if (t instanceof ke)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof ge)
    return "MANY_SEP";
  if (t instanceof z)
    return "MANY";
  if (t instanceof j)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function rE(t, e, n) {
  const r = Wd(e.configs.elements, (s) => s.state.transitions), i = zd(r.filter((s) => s instanceof yo).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: n,
    possibleTokenTypes: i,
    tokenPath: t
  };
}
function iE(t, e) {
  return t.edges[e.tokenTypeIdx];
}
function sE(t, e, n) {
  const r = new ga(), i = [];
  for (const a of t.elements) {
    if (n.is(a.alt) === !1)
      continue;
    if (a.state.type === Pr) {
      i.push(a);
      continue;
    }
    const o = a.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const u = a.state.transitions[l], c = aE(u, e);
      c !== void 0 && r.add({
        state: c,
        alt: a.alt,
        stack: a.stack
      });
    }
  }
  let s;
  if (i.length === 0 && r.size === 1 && (s = r), s === void 0) {
    s = new ga();
    for (const a of r.elements)
      Pi(a, s);
  }
  if (i.length > 0 && !cE(s))
    for (const a of i)
      s.add(a);
  return s;
}
function aE(t, e) {
  if (t instanceof yo && Ef(e, t.tokenType))
    return t.target;
}
function oE(t, e) {
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
function Xf(t) {
  return {
    configs: t,
    edges: {},
    isAcceptState: !1,
    prediction: -1
  };
}
function Gl(t, e, n, r) {
  return r = Jf(t, r), e.edges[n.tokenTypeIdx] = r, r;
}
function Jf(t, e) {
  if (e === Li)
    return e;
  const n = e.configs.key, r = t.states[n];
  return r !== void 0 ? r : (e.configs.finalize(), t.states[n] = e, e);
}
function lE(t) {
  const e = new ga(), n = t.transitions.length;
  for (let r = 0; r < n; r++) {
    const s = {
      state: t.transitions[r].target,
      alt: r,
      stack: []
    };
    Pi(s, e);
  }
  return e;
}
function Pi(t, e) {
  const n = t.state;
  if (n.type === Pr) {
    if (t.stack.length > 0) {
      const i = [...t.stack], a = {
        state: i.pop(),
        alt: t.alt,
        stack: i
      };
      Pi(a, e);
    } else
      e.add(t);
    return;
  }
  n.epsilonOnlyTransitions || e.add(t);
  const r = n.transitions.length;
  for (let i = 0; i < r; i++) {
    const s = n.transitions[i], a = uE(t, s);
    a !== void 0 && Pi(a, e);
  }
}
function uE(t, e) {
  if (e instanceof Hf)
    return {
      state: e.target,
      alt: t.alt,
      stack: t.stack
    };
  if (e instanceof To) {
    const n = [...t.stack, e.followState];
    return {
      state: e.target,
      alt: t.alt,
      stack: n
    };
  }
}
function cE(t) {
  for (const e of t.elements)
    if (e.state.type === Pr)
      return !0;
  return !1;
}
function fE(t) {
  for (const e of t.elements)
    if (e.state.type !== Pr)
      return !1;
  return !0;
}
function dE(t) {
  if (fE(t))
    return !0;
  const e = hE(t.elements);
  return pE(e) && !mE(e);
}
function hE(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) {
    const r = qf(n, !1);
    let i = e.get(r);
    i === void 0 && (i = {}, e.set(r, i)), i[n.alt] = !0;
  }
  return e;
}
function pE(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length > 1)
      return !0;
  return !1;
}
function mE(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length === 1)
      return !0;
  return !1;
}
var Ul;
(function(t) {
  function e(n) {
    return typeof n == "string";
  }
  t.is = e;
})(Ul || (Ul = {}));
var ya;
(function(t) {
  function e(n) {
    return typeof n == "string";
  }
  t.is = e;
})(ya || (ya = {}));
var Bl;
(function(t) {
  t.MIN_VALUE = -2147483648, t.MAX_VALUE = 2147483647;
  function e(n) {
    return typeof n == "number" && t.MIN_VALUE <= n && n <= t.MAX_VALUE;
  }
  t.is = e;
})(Bl || (Bl = {}));
var Mi;
(function(t) {
  t.MIN_VALUE = 0, t.MAX_VALUE = 2147483647;
  function e(n) {
    return typeof n == "number" && t.MIN_VALUE <= n && n <= t.MAX_VALUE;
  }
  t.is = e;
})(Mi || (Mi = {}));
var D;
(function(t) {
  function e(r, i) {
    return r === Number.MAX_VALUE && (r = Mi.MAX_VALUE), i === Number.MAX_VALUE && (i = Mi.MAX_VALUE), { line: r, character: i };
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
var Di;
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
})(Di || (Di = {}));
var jl;
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
})(jl || (jl = {}));
var Ta;
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
})(Ta || (Ta = {}));
var Kl;
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
    return p.objectLiteral(i) && L.is(i.range) && Ta.is(i.color);
  }
  t.is = n;
})(Kl || (Kl = {}));
var Hl;
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
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || $n.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, $n.is));
  }
  t.is = n;
})(Hl || (Hl = {}));
var Vl;
(function(t) {
  t.Comment = "comment", t.Imports = "imports", t.Region = "region";
})(Vl || (Vl = {}));
var Wl;
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
})(Wl || (Wl = {}));
var va;
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
    return p.defined(i) && Di.is(i.location) && p.string(i.message);
  }
  t.is = n;
})(va || (va = {}));
var zl;
(function(t) {
  t.Error = 1, t.Warning = 2, t.Information = 3, t.Hint = 4;
})(zl || (zl = {}));
var ql;
(function(t) {
  t.Unnecessary = 1, t.Deprecated = 2;
})(ql || (ql = {}));
var Yl;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && p.string(r.href);
  }
  t.is = e;
})(Yl || (Yl = {}));
var Fi;
(function(t) {
  function e(r, i, s, a, o, l) {
    let u = { range: r, message: i };
    return p.defined(s) && (u.severity = s), p.defined(a) && (u.code = a), p.defined(o) && (u.source = o), p.defined(l) && (u.relatedInformation = l), u;
  }
  t.create = e;
  function n(r) {
    var i;
    let s = r;
    return p.defined(s) && L.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, va.is));
  }
  t.is = n;
})(Fi || (Fi = {}));
var En;
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
})(En || (En = {}));
var $n;
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
})($n || ($n = {}));
var Ra;
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
})(Ra || (Ra = {}));
var xn;
(function(t) {
  function e(n) {
    const r = n;
    return p.string(r);
  }
  t.is = e;
})(xn || (xn = {}));
var Xl;
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
    return $n.is(a) && (Ra.is(a.annotationId) || xn.is(a.annotationId));
  }
  t.is = i;
})(Xl || (Xl = {}));
var Aa;
(function(t) {
  function e(r, i) {
    return { textDocument: r, edits: i };
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && ka.is(i.textDocument) && Array.isArray(i.edits);
  }
  t.is = n;
})(Aa || (Aa = {}));
var Ea;
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
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || xn.is(i.annotationId));
  }
  t.is = n;
})(Ea || (Ea = {}));
var $a;
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
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || xn.is(i.annotationId));
  }
  t.is = n;
})($a || ($a = {}));
var xa;
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
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || xn.is(i.annotationId));
  }
  t.is = n;
})(xa || (xa = {}));
var Sa;
(function(t) {
  function e(n) {
    let r = n;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => p.string(i.kind) ? Ea.is(i) || $a.is(i) || xa.is(i) : Aa.is(i)));
  }
  t.is = e;
})(Sa || (Sa = {}));
var Jl;
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
})(Jl || (Jl = {}));
var Zl;
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
})(Zl || (Zl = {}));
var ka;
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
})(ka || (ka = {}));
var Ql;
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
})(Ql || (Ql = {}));
var Ia;
(function(t) {
  t.PlainText = "plaintext", t.Markdown = "markdown";
  function e(n) {
    const r = n;
    return r === t.PlainText || r === t.Markdown;
  }
  t.is = e;
})(Ia || (Ia = {}));
var Er;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(n) && Ia.is(r.kind) && p.string(r.value);
  }
  t.is = e;
})(Er || (Er = {}));
var eu;
(function(t) {
  t.Text = 1, t.Method = 2, t.Function = 3, t.Constructor = 4, t.Field = 5, t.Variable = 6, t.Class = 7, t.Interface = 8, t.Module = 9, t.Property = 10, t.Unit = 11, t.Value = 12, t.Enum = 13, t.Keyword = 14, t.Snippet = 15, t.Color = 16, t.File = 17, t.Reference = 18, t.Folder = 19, t.EnumMember = 20, t.Constant = 21, t.Struct = 22, t.Event = 23, t.Operator = 24, t.TypeParameter = 25;
})(eu || (eu = {}));
var tu;
(function(t) {
  t.PlainText = 1, t.Snippet = 2;
})(tu || (tu = {}));
var nu;
(function(t) {
  t.Deprecated = 1;
})(nu || (nu = {}));
var ru;
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
})(ru || (ru = {}));
var iu;
(function(t) {
  t.asIs = 1, t.adjustIndentation = 2;
})(iu || (iu = {}));
var su;
(function(t) {
  function e(n) {
    const r = n;
    return r && (p.string(r.detail) || r.detail === void 0) && (p.string(r.description) || r.description === void 0);
  }
  t.is = e;
})(su || (su = {}));
var au;
(function(t) {
  function e(n) {
    return { label: n };
  }
  t.create = e;
})(au || (au = {}));
var ou;
(function(t) {
  function e(n, r) {
    return { items: n || [], isIncomplete: !!r };
  }
  t.create = e;
})(ou || (ou = {}));
var Gi;
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
})(Gi || (Gi = {}));
var lu;
(function(t) {
  function e(n) {
    let r = n;
    return !!r && p.objectLiteral(r) && (Er.is(r.contents) || Gi.is(r.contents) || p.typedArray(r.contents, Gi.is)) && (n.range === void 0 || L.is(n.range));
  }
  t.is = e;
})(lu || (lu = {}));
var uu;
(function(t) {
  function e(n, r) {
    return r ? { label: n, documentation: r } : { label: n };
  }
  t.create = e;
})(uu || (uu = {}));
var cu;
(function(t) {
  function e(n, r, ...i) {
    let s = { label: n };
    return p.defined(r) && (s.documentation = r), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  t.create = e;
})(cu || (cu = {}));
var fu;
(function(t) {
  t.Text = 1, t.Read = 2, t.Write = 3;
})(fu || (fu = {}));
var du;
(function(t) {
  function e(n, r) {
    let i = { range: n };
    return p.number(r) && (i.kind = r), i;
  }
  t.create = e;
})(du || (du = {}));
var hu;
(function(t) {
  t.File = 1, t.Module = 2, t.Namespace = 3, t.Package = 4, t.Class = 5, t.Method = 6, t.Property = 7, t.Field = 8, t.Constructor = 9, t.Enum = 10, t.Interface = 11, t.Function = 12, t.Variable = 13, t.Constant = 14, t.String = 15, t.Number = 16, t.Boolean = 17, t.Array = 18, t.Object = 19, t.Key = 20, t.Null = 21, t.EnumMember = 22, t.Struct = 23, t.Event = 24, t.Operator = 25, t.TypeParameter = 26;
})(hu || (hu = {}));
var pu;
(function(t) {
  t.Deprecated = 1;
})(pu || (pu = {}));
var mu;
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
})(mu || (mu = {}));
var gu;
(function(t) {
  function e(n, r, i, s) {
    return s !== void 0 ? { name: n, kind: r, location: { uri: i, range: s } } : { name: n, kind: r, location: { uri: i } };
  }
  t.create = e;
})(gu || (gu = {}));
var yu;
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
})(yu || (yu = {}));
var Tu;
(function(t) {
  t.Empty = "", t.QuickFix = "quickfix", t.Refactor = "refactor", t.RefactorExtract = "refactor.extract", t.RefactorInline = "refactor.inline", t.RefactorRewrite = "refactor.rewrite", t.Source = "source", t.SourceOrganizeImports = "source.organizeImports", t.SourceFixAll = "source.fixAll";
})(Tu || (Tu = {}));
var Ui;
(function(t) {
  t.Invoked = 1, t.Automatic = 2;
})(Ui || (Ui = {}));
var vu;
(function(t) {
  function e(r, i, s) {
    let a = { diagnostics: r };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && p.typedArray(i.diagnostics, Fi.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === Ui.Invoked || i.triggerKind === Ui.Automatic);
  }
  t.is = n;
})(vu || (vu = {}));
var Ru;
(function(t) {
  function e(r, i, s) {
    let a = { title: r }, o = !0;
    return typeof i == "string" ? (o = !1, a.kind = i) : En.is(i) ? a.command = i : a.edit = i, o && s !== void 0 && (a.kind = s), a;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, Fi.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || En.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || Sa.is(i.edit));
  }
  t.is = n;
})(Ru || (Ru = {}));
var Au;
(function(t) {
  function e(r, i) {
    let s = { range: r };
    return p.defined(i) && (s.data = i), s;
  }
  t.create = e;
  function n(r) {
    let i = r;
    return p.defined(i) && L.is(i.range) && (p.undefined(i.command) || En.is(i.command));
  }
  t.is = n;
})(Au || (Au = {}));
var Eu;
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
})(Eu || (Eu = {}));
var $u;
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
})($u || ($u = {}));
var xu;
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
})(xu || (xu = {}));
var Su;
(function(t) {
  t.namespace = "namespace", t.type = "type", t.class = "class", t.enum = "enum", t.interface = "interface", t.struct = "struct", t.typeParameter = "typeParameter", t.parameter = "parameter", t.variable = "variable", t.property = "property", t.enumMember = "enumMember", t.event = "event", t.function = "function", t.method = "method", t.macro = "macro", t.keyword = "keyword", t.modifier = "modifier", t.comment = "comment", t.string = "string", t.number = "number", t.regexp = "regexp", t.operator = "operator", t.decorator = "decorator";
})(Su || (Su = {}));
var ku;
(function(t) {
  t.declaration = "declaration", t.definition = "definition", t.readonly = "readonly", t.static = "static", t.deprecated = "deprecated", t.abstract = "abstract", t.async = "async", t.modification = "modification", t.documentation = "documentation", t.defaultLibrary = "defaultLibrary";
})(ku || (ku = {}));
var Iu;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  t.is = e;
})(Iu || (Iu = {}));
var Cu;
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
})(Cu || (Cu = {}));
var wu;
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
})(wu || (wu = {}));
var Nu;
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
})(Nu || (Nu = {}));
var _u;
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
})(_u || (_u = {}));
var Ca;
(function(t) {
  t.Type = 1, t.Parameter = 2;
  function e(n) {
    return n === 1 || n === 2;
  }
  t.is = e;
})(Ca || (Ca = {}));
var wa;
(function(t) {
  function e(r) {
    return { value: r };
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || Er.is(i.tooltip)) && (i.location === void 0 || Di.is(i.location)) && (i.command === void 0 || En.is(i.command));
  }
  t.is = n;
})(wa || (wa = {}));
var bu;
(function(t) {
  function e(r, i, s) {
    const a = { position: r, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  t.create = e;
  function n(r) {
    const i = r;
    return p.objectLiteral(i) && D.is(i.position) && (p.string(i.label) || p.typedArray(i.label, wa.is)) && (i.kind === void 0 || Ca.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, $n.is) && (i.tooltip === void 0 || p.string(i.tooltip) || Er.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  t.is = n;
})(bu || (bu = {}));
var Ou;
(function(t) {
  function e(n) {
    return { kind: "snippet", value: n };
  }
  t.createSnippet = e;
})(Ou || (Ou = {}));
var Lu;
(function(t) {
  function e(n, r, i, s) {
    return { insertText: n, filterText: r, range: i, command: s };
  }
  t.create = e;
})(Lu || (Lu = {}));
var Pu;
(function(t) {
  function e(n) {
    return { items: n };
  }
  t.create = e;
})(Pu || (Pu = {}));
var Mu;
(function(t) {
  t.Invoked = 0, t.Automatic = 1;
})(Mu || (Mu = {}));
var Du;
(function(t) {
  function e(n, r) {
    return { range: n, text: r };
  }
  t.create = e;
})(Du || (Du = {}));
var Fu;
(function(t) {
  function e(n, r) {
    return { triggerKind: n, selectedCompletionInfo: r };
  }
  t.create = e;
})(Fu || (Fu = {}));
var Gu;
(function(t) {
  function e(n) {
    const r = n;
    return p.objectLiteral(r) && ya.is(r.uri) && p.string(r.name);
  }
  t.is = e;
})(Gu || (Gu = {}));
var Uu;
(function(t) {
  function e(s, a, o, l) {
    return new gE(s, a, o, l);
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
})(Uu || (Uu = {}));
let gE = class {
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
class yE {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Qf(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const n = new Ao();
    return n.grammarSource = e, n.root = this.rootNode, this.current.content.push(n), this.nodeStack.push(n), n;
  }
  buildLeafNode(e, n) {
    const r = new Na(e.startOffset, e.image.length, Qs(e), e.tokenType, !n);
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
      const a = new Na(s.startOffset, s.image.length, Qs(s), s.tokenType, !0);
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
class Zf {
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
class Na extends Zf {
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
class Ao extends Zf {
  constructor() {
    super(...arguments), this.content = new Eo(this);
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
class Eo extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, Eo.prototype);
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
class Qf extends Ao {
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
const _a = /* @__PURE__ */ Symbol("Datatype");
function Ms(t) {
  return t.$type === _a;
}
const Bu = "​", ed = (t) => t.endsWith(Bu) ? t : t + Bu;
class td {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const n = this.lexer.definition, r = e.LanguageMetaData.mode === "production";
    this.wrapper = new EE(n, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: r, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
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
class TE extends td {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new yE(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, n) {
    const r = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(ed(e.name), this.startImplementation(r, n).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (wc(e))
        return _a;
      {
        const n = ja(e);
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
        this.stack.push(a), e === _a && (a.value = "");
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
        const c = Ot(r) ? i.image : this.converter.convert(i.image, a);
        this.assign(o.operator, o.feature, c, a, l);
      } else if (Ms(u)) {
        let c = i.image;
        Ot(r) || (c = this.converter.convert(c, a).toString()), u.value += c;
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
      if (Ms(a))
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
    return Rh(e), this.nodeBuilder.construct(e), this.stack.pop(), Ms(e) ? this.converter.convert(e.value, e.$cstNode) : (Ah(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const n = zi(e, bt);
      this.assignmentMap.set(e, {
        assignment: n,
        isCrossRef: n ? Fa(n.terminal) : !1
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
class vE {
  buildMismatchTokenMessage(e) {
    return Yt.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return Yt.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return Yt.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return Yt.buildEarlyExitMessage(e);
  }
}
class nd extends vE {
  buildMismatchTokenMessage({ expected: e, actual: n }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${n.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}
class RE extends td {
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
    const r = this.wrapper.DEFINE_RULE(ed(e.name), this.startImplementation(n).bind(this));
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
const AE = {
  recoveryEnabled: !0,
  nodeLocationTracking: "full",
  skipValidations: !0,
  errorMessageProvider: new nd()
};
class EE extends wA {
  constructor(e, n) {
    const r = n && "maxLookahead" in n;
    super(e, Object.assign(Object.assign(Object.assign({}, AE), { lookaheadStrategy: r ? new mo({ maxLookahead: n.maxLookahead }) : new XA({
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
function rd(t, e, n) {
  return $E({
    parser: e,
    tokens: n,
    ruleNames: /* @__PURE__ */ new Map()
  }, t), e;
}
function $E(t, e) {
  const n = xc(e, !1), r = re(e.rules).filter(_e).filter((i) => n.has(i));
  for (const i of r) {
    const s = Object.assign(Object.assign({}, t), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    t.parser.rule(i, Dt(s, i.definition));
  }
}
function Dt(t, e, n = !1) {
  let r;
  if (Ot(e))
    r = NE(t, e);
  else if (Wi(e))
    r = xE(t, e);
  else if (bt(e))
    r = Dt(t, e.terminal);
  else if (Fa(e))
    r = id(t, e);
  else if (Lt(e))
    r = SE(t, e);
  else if (Tc(e))
    r = IE(t, e);
  else if (vc(e))
    r = CE(t, e);
  else if (Ga(e))
    r = wE(t, e);
  else if (dh(e)) {
    const i = t.consume++;
    r = () => t.parser.consume(i, yt, e);
  } else
    throw new pc(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return sd(t, n ? void 0 : Bi(e), r, e.cardinality);
}
function xE(t, e) {
  const n = Ka(e);
  return () => t.parser.action(n, e);
}
function SE(t, e) {
  const n = e.rule.ref;
  if (_e(n)) {
    const r = t.subrule++, i = n.fragment, s = e.arguments.length > 0 ? kE(n, e.arguments) : () => ({});
    return (a) => t.parser.subrule(r, ad(t, n), i, e, s(a));
  } else if (Gt(n)) {
    const r = t.consume++, i = ba(t, n.name);
    return () => t.parser.consume(r, i, e);
  } else if (n)
    xr();
  else
    throw new pc(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function kE(t, e) {
  const n = e.map((r) => it(r.value));
  return (r) => {
    const i = {};
    for (let s = 0; s < n.length; s++) {
      const a = t.parameters[s], o = n[s];
      i[a.name] = o(r);
    }
    return i;
  };
}
function it(t) {
  if (ah(t)) {
    const e = it(t.left), n = it(t.right);
    return (r) => e(r) || n(r);
  } else if (sh(t)) {
    const e = it(t.left), n = it(t.right);
    return (r) => e(r) && n(r);
  } else if (oh(t)) {
    const e = it(t.value);
    return (n) => !e(n);
  } else if (lh(t)) {
    const e = t.parameter.ref.name;
    return (n) => n !== void 0 && n[e] === !0;
  } else if (ih(t)) {
    const e = !!t.true;
    return () => e;
  }
  xr();
}
function IE(t, e) {
  if (e.elements.length === 1)
    return Dt(t, e.elements[0]);
  {
    const n = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: Dt(t, i, !0)
      }, a = Bi(i);
      a && (s.GATE = it(a)), n.push(s);
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
function CE(t, e) {
  if (e.elements.length === 1)
    return Dt(t, e.elements[0]);
  const n = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: Dt(t, o, !0)
    }, u = Bi(o);
    u && (l.GATE = it(u)), n.push(l);
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
  })), a = sd(t, Bi(e), s, "*");
  return (o) => {
    a(o), t.parser.isRecording() || t.parser.unorderedGroups.delete(i(r, t.parser));
  };
}
function wE(t, e) {
  const n = e.elements.map((r) => Dt(t, r));
  return (r) => n.forEach((i) => i(r));
}
function Bi(t) {
  if (Ga(t))
    return t.guardCondition;
}
function id(t, e, n = e.terminal) {
  if (n)
    if (Lt(n) && _e(n.rule.ref)) {
      const r = n.rule.ref, i = t.subrule++;
      return (s) => t.parser.subrule(i, ad(t, r), !1, e, s);
    } else if (Lt(n) && Gt(n.rule.ref)) {
      const r = t.consume++, i = ba(t, n.rule.ref.name);
      return () => t.parser.consume(r, i, e);
    } else if (Ot(n)) {
      const r = t.consume++, i = ba(t, n.value);
      return () => t.parser.consume(r, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const r = Ic(e.type.ref), i = r?.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Ka(e.type.ref));
    return id(t, e, i);
  }
}
function NE(t, e) {
  const n = t.consume++, r = t.tokens[e.value];
  if (!r)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => t.parser.consume(n, r, e);
}
function sd(t, e, n, r) {
  const i = e && it(e);
  if (!r)
    if (i) {
      const s = t.or++;
      return (a) => t.parser.alternatives(s, [
        {
          ALT: () => n(a),
          GATE: () => i(a)
        },
        {
          ALT: Ml(),
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
          ALT: Ml(),
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
    xr();
}
function ad(t, e) {
  const n = _E(t, e), r = t.parser.getRule(n);
  if (!r)
    throw new Error(`Rule "${n}" not found."`);
  return r;
}
function _E(t, e) {
  if (_e(e))
    return e.name;
  if (t.ruleNames.has(e))
    return t.ruleNames.get(e);
  {
    let n = e, r = n.$container, i = e.$type;
    for (; !_e(r); )
      (Ga(r) || Tc(r) || vc(r)) && (i = r.elements.indexOf(n).toString() + ":" + i), n = r, r = r.$container;
    return i = r.name + ":" + i, t.ruleNames.set(e, i), i;
  }
}
function ba(t, e) {
  const n = t.tokens[e];
  if (!n)
    throw new Error(`Token "${e}" not found."`);
  return n;
}
function bE(t) {
  const e = t.Grammar, n = t.parser.Lexer, r = new RE(t);
  return rd(e, r, n.definition), r.finalize(), r;
}
function OE(t) {
  const e = LE(t);
  return e.finalize(), e;
}
function LE(t) {
  const e = t.Grammar, n = t.parser.Lexer, r = new TE(t);
  return rd(e, r, n.definition);
}
class od {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, n) {
    const r = re(xc(e, !1)), i = this.buildTerminalTokens(r), s = this.buildKeywordTokens(r, i, n);
    return i.forEach((a) => {
      const o = a.PATTERN;
      typeof o == "object" && o && "test" in o && ta(o) ? s.unshift(a) : s.push(a);
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
    return e.filter(Gt).filter((n) => !n.fragment).map((n) => this.buildTerminalToken(n)).toArray();
  }
  buildTerminalToken(e) {
    const n = Ha(e), r = this.requiresCustomPattern(n) ? this.regexPatternFunction(n) : n, i = {
      name: e.name,
      PATTERN: r
    };
    return typeof r == "function" && (i.LINE_BREAKS = !0), e.hidden && (i.GROUP = ta(n) ? he.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? !0 : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const n = new RegExp(e, e.flags + "y");
    return (r, i) => (n.lastIndex = i, n.exec(r));
  }
  buildKeywordTokens(e, n, r) {
    return e.filter(_e).flatMap((i) => Sr(i).filter(Ot)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, n, !!r?.caseInsensitive));
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
    return n ? new RegExp(Nh(e.value)) : e.value;
  }
  findLongerAlt(e, n) {
    return n.reduce((r, i) => {
      const s = i?.PATTERN;
      return s?.source && _h("^" + s.source + "$", e.value) && r.push(i), r;
    }, []);
  }
}
class ld {
  convert(e, n) {
    let r = n.grammarSource;
    if (Fa(r) && (r = Ph(r)), Lt(r)) {
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
        return tt.convertInt(n);
      case "STRING":
        return tt.convertString(n);
      case "ID":
        return tt.convertID(n);
    }
    switch ((i = jh(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return tt.convertNumber(n);
      case "boolean":
        return tt.convertBoolean(n);
      case "bigint":
        return tt.convertBigint(n);
      case "date":
        return tt.convertDate(n);
      default:
        return n;
    }
  }
}
var tt;
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
})(tt || (tt = {}));
var wt = {}, Jr = {}, ju;
function ud() {
  if (ju) return Jr;
  ju = 1, Object.defineProperty(Jr, "__esModule", { value: !0 });
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
  })(e || (e = {})), Jr.default = e, Jr;
}
var ee = {}, Ku;
function PE() {
  if (Ku) return ee;
  Ku = 1, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.stringArray = ee.array = ee.func = ee.error = ee.number = ee.string = ee.boolean = void 0;
  function t(o) {
    return o === !0 || o === !1;
  }
  ee.boolean = t;
  function e(o) {
    return typeof o == "string" || o instanceof String;
  }
  ee.string = e;
  function n(o) {
    return typeof o == "number" || o instanceof Number;
  }
  ee.number = n;
  function r(o) {
    return o instanceof Error;
  }
  ee.error = r;
  function i(o) {
    return typeof o == "function";
  }
  ee.func = i;
  function s(o) {
    return Array.isArray(o);
  }
  ee.array = s;
  function a(o) {
    return s(o) && o.every((l) => e(l));
  }
  return ee.stringArray = a, ee;
}
var Nt = {}, Hu;
function cd() {
  if (Hu) return Nt;
  Hu = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.Emitter = Nt.Event = void 0;
  const t = ud();
  var e;
  (function(i) {
    const s = { dispose() {
    } };
    i.None = function() {
      return s;
    };
  })(e || (Nt.Event = e = {}));
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
  return Nt.Emitter = r, r._noop = function() {
  }, Nt;
}
var Vu;
function ME() {
  if (Vu) return wt;
  Vu = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.CancellationTokenSource = wt.CancellationToken = void 0;
  const t = ud(), e = PE(), n = cd();
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
  })(r || (wt.CancellationToken = r = {}));
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
  return wt.CancellationTokenSource = a, wt;
}
var V = ME();
function DE() {
  return new Promise((t) => {
    typeof setImmediate > "u" ? setTimeout(t, 0) : setImmediate(t);
  });
}
let hi = 0, FE = 10;
function GE() {
  return hi = performance.now(), new V.CancellationTokenSource();
}
const ji = /* @__PURE__ */ Symbol("OperationCancelled");
function ms(t) {
  return t === ji;
}
async function Ee(t) {
  if (t === V.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - hi >= FE && (hi = e, await DE(), hi = performance.now()), t.isCancellationRequested)
    throw ji;
}
class $o {
  constructor() {
    this.promise = new Promise((e, n) => {
      this.resolve = (r) => (e(r), this), this.reject = (r) => (n(r), this);
    });
  }
}
class $r {
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
      if ($r.isIncremental(r)) {
        const i = dd(r.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let u = this._lineOffsets;
        const c = Wu(r.text, !1, s);
        if (l - o === c.length)
          for (let d = 0, h = c.length; d < h; d++)
            u[d + o + 1] = c[d];
        else
          c.length < 1e4 ? u.splice(o + 1, l - o, ...c) : this._lineOffsets = u = u.slice(0, o + 1).concat(c, u.slice(l + 1));
        const f = r.text.length - (a - s);
        if (f !== 0)
          for (let d = o + 1 + c.length, h = u.length; d < h; d++)
            u[d] = u[d] + f;
      } else if ($r.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Wu(this._content, !0)), this._lineOffsets;
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
    for (; e > n && fd(this._content.charCodeAt(e - 1)); )
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
var Oa;
(function(t) {
  function e(i, s, a, o) {
    return new $r(i, s, a, o);
  }
  t.create = e;
  function n(i, s, a) {
    if (i instanceof $r)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  t.update = n;
  function r(i, s) {
    const a = i.getText(), o = La(s.map(UE), (c, f) => {
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
})(Oa || (Oa = {}));
function La(t, e) {
  if (t.length <= 1)
    return t;
  const n = t.length / 2 | 0, r = t.slice(0, n), i = t.slice(n);
  La(r, e), La(i, e);
  let s = 0, a = 0, o = 0;
  for (; s < r.length && a < i.length; )
    e(r[s], i[a]) <= 0 ? t[o++] = r[s++] : t[o++] = i[a++];
  for (; s < r.length; )
    t[o++] = r[s++];
  for (; a < i.length; )
    t[o++] = i[a++];
  return t;
}
function Wu(t, e, n = 0) {
  const r = e ? [n] : [];
  for (let i = 0; i < t.length; i++) {
    const s = t.charCodeAt(i);
    fd(s) && (s === 13 && i + 1 < t.length && t.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function fd(t) {
  return t === 13 || t === 10;
}
function dd(t) {
  const e = t.start, n = t.end;
  return e.line > n.line || e.line === n.line && e.character > n.character ? { start: n, end: e } : t;
}
function UE(t) {
  const e = dd(t.range);
  return e !== t.range ? { newText: t.newText, range: e } : t;
}
var hd;
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
                var R = f.lastIndexOf("/");
                if (R !== f.length - 1) {
                  R === -1 ? (f = "", d = 0) : d = (f = f.slice(0, R)).length - 1 - f.lastIndexOf("/"), h = g, m = 0;
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
      for (var m = u.length - h, g = d < m ? d : m, R = -1, y = 0; y <= g; ++y) {
        if (y === g) {
          if (m > g) {
            if (u.charCodeAt(h + y) === 47) return u.slice(h + y + 1);
            if (y === 0) return u.slice(h + y);
          } else d > g && (l.charCodeAt(c + y) === 47 ? R = y : y === 0 && (R = 0));
          break;
        }
        var E = l.charCodeAt(c + y);
        if (E !== u.charCodeAt(h + y)) break;
        E === 47 && (R = y);
      }
      var v = "";
      for (y = c + R + 1; y <= f; ++y) y !== f && l.charCodeAt(y) !== 47 || (v.length === 0 ? v += ".." : v += "/..");
      return v.length > 0 ? v + u.slice(h + R) : (h += R, u.charCodeAt(h) === 47 && ++h, u.slice(h));
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
          var R = l.charCodeAt(c);
          if (R === 47) {
            if (!h) {
              f = c + 1;
              break;
            }
          } else g === -1 && (h = !1, g = c + 1), m >= 0 && (R === u.charCodeAt(m) ? --m == -1 && (d = c) : (m = -1, d = g));
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
      for (var h = -1, m = 0, g = -1, R = !0, y = l.length - 1, E = 0; y >= c; --y) if ((f = l.charCodeAt(y)) !== 47) g === -1 && (R = !1, g = y + 1), f === 46 ? h === -1 ? h = y : E !== 1 && (E = 1) : h !== -1 && (E = -1);
      else if (!R) {
        m = y + 1;
        break;
      }
      return h === -1 || g === -1 || E === 0 || E === 1 && h === g - 1 && h === m + 1 ? g !== -1 && (u.base = u.name = m === 0 && d ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && d ? (u.name = l.slice(1, h), u.base = l.slice(1, g)) : (u.name = l.slice(m, h), u.base = l.slice(m, g)), u.ext = l.slice(h, g)), m > 0 ? u.dir = l.slice(0, m - 1) : d && (u.dir = "/"), u;
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
    n.r(r), n.d(r, { URI: () => d, Utils: () => Ie }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, o = /^\/\//;
    function l($, T) {
      if (!$.scheme && T) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${$.authority}", path: "${$.path}", query: "${$.query}", fragment: "${$.fragment}"}`);
      if ($.scheme && !s.test($.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if ($.path) {
        if ($.authority) {
          if (!a.test($.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test($.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
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
      constructor(T, k, x, O, b, _ = !1) {
        typeof T == "object" ? (this.scheme = T.scheme || u, this.authority = T.authority || u, this.path = T.path || u, this.query = T.query || u, this.fragment = T.fragment || u) : (this.scheme = /* @__PURE__ */ (function(ve, Z) {
          return ve || Z ? ve : "file";
        })(T, _), this.authority = k || u, this.path = (function(ve, Z) {
          switch (ve) {
            case "https":
            case "http":
            case "file":
              Z ? Z[0] !== c && (Z = c + Z) : Z = c;
          }
          return Z;
        })(this.scheme, x || u), this.query = O || u, this.fragment = b || u, l(this, _));
      }
      get fsPath() {
        return E(this);
      }
      with(T) {
        if (!T) return this;
        let { scheme: k, authority: x, path: O, query: b, fragment: _ } = T;
        return k === void 0 ? k = this.scheme : k === null && (k = u), x === void 0 ? x = this.authority : x === null && (x = u), O === void 0 ? O = this.path : O === null && (O = u), b === void 0 ? b = this.query : b === null && (b = u), _ === void 0 ? _ = this.fragment : _ === null && (_ = u), k === this.scheme && x === this.authority && O === this.path && b === this.query && _ === this.fragment ? this : new m(k, x, O, b, _);
      }
      static parse(T, k = !1) {
        const x = f.exec(T);
        return x ? new m(x[2] || u, ae(x[4] || u), ae(x[5] || u), ae(x[7] || u), ae(x[9] || u), k) : new m(u, u, u, u, u);
      }
      static file(T) {
        let k = u;
        if (i && (T = T.replace(/\\/g, c)), T[0] === c && T[1] === c) {
          const x = T.indexOf(c, 2);
          x === -1 ? (k = T.substring(2), T = c) : (k = T.substring(2, x), T = T.substring(x) || c);
        }
        return new m("file", k, T, u, u);
      }
      static from(T) {
        const k = new m(T.scheme, T.authority, T.path, T.query, T.fragment);
        return l(k, !0), k;
      }
      toString(T = !1) {
        return v(this, T);
      }
      toJSON() {
        return this;
      }
      static revive(T) {
        if (T) {
          if (T instanceof d) return T;
          {
            const k = new m(T);
            return k._formatted = T.external, k._fsPath = T._sep === h ? T.fsPath : null, k;
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
        return this._fsPath || (this._fsPath = E(this)), this._fsPath;
      }
      toString(T = !1) {
        return T ? v(this, !0) : (this._formatted || (this._formatted = v(this, !1)), this._formatted);
      }
      toJSON() {
        const T = { $mid: 1 };
        return this._fsPath && (T.fsPath = this._fsPath, T._sep = h), this._formatted && (T.external = this._formatted), this.path && (T.path = this.path), this.scheme && (T.scheme = this.scheme), this.authority && (T.authority = this.authority), this.query && (T.query = this.query), this.fragment && (T.fragment = this.fragment), T;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function R($, T, k) {
      let x, O = -1;
      for (let b = 0; b < $.length; b++) {
        const _ = $.charCodeAt(b);
        if (_ >= 97 && _ <= 122 || _ >= 65 && _ <= 90 || _ >= 48 && _ <= 57 || _ === 45 || _ === 46 || _ === 95 || _ === 126 || T && _ === 47 || k && _ === 91 || k && _ === 93 || k && _ === 58) O !== -1 && (x += encodeURIComponent($.substring(O, b)), O = -1), x !== void 0 && (x += $.charAt(b));
        else {
          x === void 0 && (x = $.substr(0, b));
          const ve = g[_];
          ve !== void 0 ? (O !== -1 && (x += encodeURIComponent($.substring(O, b)), O = -1), x += ve) : O === -1 && (O = b);
        }
      }
      return O !== -1 && (x += encodeURIComponent($.substring(O))), x !== void 0 ? x : $;
    }
    function y($) {
      let T;
      for (let k = 0; k < $.length; k++) {
        const x = $.charCodeAt(k);
        x === 35 || x === 63 ? (T === void 0 && (T = $.substr(0, k)), T += g[x]) : T !== void 0 && (T += $[k]);
      }
      return T !== void 0 ? T : $;
    }
    function E($, T) {
      let k;
      return k = $.authority && $.path.length > 1 && $.scheme === "file" ? `//${$.authority}${$.path}` : $.path.charCodeAt(0) === 47 && ($.path.charCodeAt(1) >= 65 && $.path.charCodeAt(1) <= 90 || $.path.charCodeAt(1) >= 97 && $.path.charCodeAt(1) <= 122) && $.path.charCodeAt(2) === 58 ? $.path[1].toLowerCase() + $.path.substr(2) : $.path, i && (k = k.replace(/\//g, "\\")), k;
    }
    function v($, T) {
      const k = T ? y : R;
      let x = "", { scheme: O, authority: b, path: _, query: ve, fragment: Z } = $;
      if (O && (x += O, x += ":"), (b || O === "file") && (x += c, x += c), b) {
        let W = b.indexOf("@");
        if (W !== -1) {
          const It = b.substr(0, W);
          b = b.substr(W + 1), W = It.lastIndexOf(":"), W === -1 ? x += k(It, !1, !1) : (x += k(It.substr(0, W), !1, !1), x += ":", x += k(It.substr(W + 1), !1, !0)), x += "@";
        }
        b = b.toLowerCase(), W = b.lastIndexOf(":"), W === -1 ? x += k(b, !1, !0) : (x += k(b.substr(0, W), !1, !0), x += b.substr(W));
      }
      if (_) {
        if (_.length >= 3 && _.charCodeAt(0) === 47 && _.charCodeAt(2) === 58) {
          const W = _.charCodeAt(1);
          W >= 65 && W <= 90 && (_ = `/${String.fromCharCode(W + 32)}:${_.substr(3)}`);
        } else if (_.length >= 2 && _.charCodeAt(1) === 58) {
          const W = _.charCodeAt(0);
          W >= 65 && W <= 90 && (_ = `${String.fromCharCode(W + 32)}:${_.substr(2)}`);
        }
        x += k(_, !0, !1);
      }
      return ve && (x += "?", x += k(ve, !1, !1)), Z && (x += "#", x += T ? Z : R(Z, !1, !1)), x;
    }
    function S($) {
      try {
        return decodeURIComponent($);
      } catch {
        return $.length > 3 ? $.substr(0, 3) + S($.substr(3)) : $;
      }
    }
    const M = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function ae($) {
      return $.match(M) ? $.replace(M, ((T) => S(T))) : $;
    }
    var Me = n(470);
    const Te = Me.posix || Me, Ve = "/";
    var Ie;
    (function($) {
      $.joinPath = function(T, ...k) {
        return T.with({ path: Te.join(T.path, ...k) });
      }, $.resolvePath = function(T, ...k) {
        let x = T.path, O = !1;
        x[0] !== Ve && (x = Ve + x, O = !0);
        let b = Te.resolve(x, ...k);
        return O && b[0] === Ve && !T.authority && (b = b.substring(1)), T.with({ path: b });
      }, $.dirname = function(T) {
        if (T.path.length === 0 || T.path === Ve) return T;
        let k = Te.dirname(T.path);
        return k.length === 1 && k.charCodeAt(0) === 46 && (k = ""), T.with({ path: k });
      }, $.basename = function(T) {
        return Te.basename(T.path);
      }, $.extname = function(T) {
        return Te.extname(T.path);
      };
    })(Ie || (Ie = {}));
  })(), hd = r;
})();
const { URI: Ft, Utils: bn } = hd;
var vt;
(function(t) {
  t.basename = bn.basename, t.dirname = bn.dirname, t.extname = bn.extname, t.joinPath = bn.joinPath, t.resolvePath = bn.resolvePath;
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
    return Ft.parse(i.toString()).toString();
  }
  t.normalize = r;
})(vt || (vt = {}));
var K;
(function(t) {
  t[t.Changed = 0] = "Changed", t[t.Parsed = 1] = "Parsed", t[t.IndexedContent = 2] = "IndexedContent", t[t.ComputedScopes = 3] = "ComputedScopes", t[t.Linked = 4] = "Linked", t[t.IndexedReferences = 5] = "IndexedReferences", t[t.Validated = 6] = "Validated";
})(K || (K = {}));
class BE {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, n = V.CancellationToken.None) {
    const r = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, r, n);
  }
  fromTextDocument(e, n, r) {
    return n = n ?? Ft.parse(e.uri), V.CancellationToken.is(r) ? this.createAsync(n, e, r) : this.create(n, e, r);
  }
  fromString(e, n, r) {
    return V.CancellationToken.is(r) ? this.createAsync(n, e, r) : this.create(n, e, r);
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
        state: K.Parsed,
        references: [],
        textDocument: r
      };
    else {
      const a = this.createTextDocumentGetter(n, i);
      s = {
        parseResult: e,
        uri: n,
        state: K.Parsed,
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
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, n), e.parseResult.value.$document = e), e.state = K.Parsed, e;
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
    return () => i ?? (i = Oa.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, n ?? ""));
  }
}
class jE {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return re(this.documentMap.values());
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
    return r && (this.serviceRegistry.getServices(e).references.Linker.unlink(r), r.state = K.Changed, r.precomputedScopes = void 0, r.diagnostics = void 0), r;
  }
  deleteDocument(e) {
    const n = e.toString(), r = this.documentMap.get(n);
    return r && (r.state = K.Changed, this.documentMap.delete(n)), r;
  }
}
const Ds = /* @__PURE__ */ Symbol("ref_resolving");
class KE {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, n = V.CancellationToken.None) {
    for (const r of Xt(e.parseResult.value))
      await Ee(n), Ac(r).forEach((i) => this.doLink(i, e));
  }
  doLink(e, n) {
    var r;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Ds;
      try {
        const s = this.getCandidate(e);
        if (si(s))
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
        if (le(this._ref))
          return this._ref;
        if (qd(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a, container: e, property: n }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Ds;
          const l = ea(e).$document, u = s.getLinkedNode({ reference: a, container: e, property: n });
          if (u.error && l && l.state < K.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = u.node) !== null && o !== void 0 ? o : u.error, this._nodeDescription = u.descr, l?.references.push(this);
        } else if (this._ref === Ds)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);
        return le(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return si(this._ref) ? this._ref : void 0;
      }
    };
    return a;
  }
  getLinkedNode(e) {
    var n;
    try {
      const r = this.getCandidate(e);
      if (si(r))
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
    const r = ea(e.container).$document;
    r && r.state < K.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: n });
  }
}
function HE(t) {
  return typeof t.name == "string";
}
class VE {
  getName(e) {
    if (HE(e))
      return e.name;
  }
  getNameNode(e) {
    return kc(e.$cstNode, "name");
  }
}
class WE {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const n = Uh(e), r = e.astNode;
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
        if (i && (i === e || Jd(e, i)))
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
    return n.documentUri && (i = i.filter((s) => vt.equals(s.sourceUri, n.documentUri))), r.push(...i), re(r);
  }
  getReferenceToSelf(e) {
    const n = this.nameProvider.getNameNode(e);
    if (n) {
      const r = pt(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: r.uri,
        sourcePath: i,
        targetUri: r.uri,
        targetPath: i,
        segment: Ei(n),
        local: !0
      };
    }
  }
}
class Ki {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [n, r] of e)
        this.add(n, r);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return Js.sum(re(this.map.values()).map((e) => e.length));
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
    return re(this.map.entries()).flatMap(([e, n]) => n.map((r) => [e, r]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return re(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return re(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return re(this.map.entries());
  }
}
class zu {
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
class zE {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, n = V.CancellationToken.None) {
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
  async computeExportsForNode(e, n, r = Ua, i = V.CancellationToken.None) {
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
  async computeLocalScopes(e, n = V.CancellationToken.None) {
    const r = e.parseResult.value, i = new Ki();
    for (const s of Sr(r))
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
class qu {
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
class qE {
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
    let e = re(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}
class pd {
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
class YE extends pd {
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
class XE extends pd {
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
class JE extends YE {
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
class ZE {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new JE(e.shared);
  }
  getScope(e) {
    const n = [], r = this.reflection.getReferenceType(e), i = pt(e.container).precomputedScopes;
    if (i) {
      let a = e.container;
      do {
        const o = i.get(a);
        o.length > 0 && n.push(re(o).filter((l) => this.reflection.isSubtype(l.type, r))), a = a.$container;
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
    return new qu(re(e), n, r);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, n, r) {
    const i = re(e).map((s) => {
      const a = this.nameProvider.getName(s);
      if (a)
        return this.descriptions.createDescription(s, a);
    }).nonNullable();
    return new qu(i, n, r);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, n) {
    return this.globalScopeCache.get(e, () => new qE(this.indexManager.allElements(e)));
  }
}
function QE(t) {
  return typeof t.$comment == "string";
}
function Yu(t) {
  return typeof t == "object" && !!t && ("$ref" in t || "$error" in t);
}
class e$ {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, n) {
    const r = n ?? {}, i = n?.replacer, s = (o, l) => this.replacer(o, l, r), a = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = pt(e), JSON.stringify(e, a, n?.space);
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
          const m = pt(d);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, n) : g = m.uri.toString());
          const R = this.astNodeLocator.getAstNodePath(d);
          return {
            $ref: `${g}#${R}`,
            $refText: h
          };
        } else
          return {
            $error: (u = (l = n.error) === null || l === void 0 ? void 0 : l.message) !== null && u !== void 0 ? u : "Could not resolve reference",
            $refText: h
          };
      } else if (le(n)) {
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
        const a = Dh(e.$cstNode, s).map(n);
        a.length !== 0 && (i[s] = a);
      }), e;
    }
  }
  linkNode(e, n, r, i, s, a) {
    for (const [l, u] of Object.entries(e))
      if (Array.isArray(u))
        for (let c = 0; c < u.length; c++) {
          const f = u[c];
          Yu(f) ? u[c] = this.reviveReference(e, l, n, f, r) : le(f) && this.linkNode(f, n, r, e, l, c);
        }
      else Yu(u) ? e[l] = this.reviveReference(e, l, n, u, r) : le(u) && this.linkNode(u, n, r, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a;
  }
  reviveReference(e, n, r, i, s) {
    let a = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(r, i.$ref, s.uriConverter);
      if (le(l))
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
        const l = r ? r(n) : Ft.parse(n), u = this.langiumDocuments.getDocument(l);
        return u ? u.parseResult.value : "Could not find document for URI: " + n;
      }
      const s = r ? r(n.substring(0, i)) : Ft.parse(n.substring(0, i)), a = this.langiumDocuments.getDocument(s);
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
class t$ {
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
    const s = vt.extname(e), a = this.fileExtensionMap.get(s);
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
function cr(t) {
  return { code: t };
}
var Hi;
(function(t) {
  t.all = ["fast", "slow", "built-in"];
})(Hi || (Hi = {}));
class n$ {
  constructor(e) {
    this.entries = new Ki(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
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
        xr();
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
      if (ms(s))
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
    let r = re(this.entries.get(e)).concat(this.entries.get("AstNode"));
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
class r$ {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, n = {}, r = V.CancellationToken.None) {
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
      if (ms(a))
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
        severity: Fs(u),
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
        data: s$(u),
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
        s = Qs(i.token);
      if (s) {
        const a = {
          severity: Fs("error"),
          range: s,
          message: i.message,
          data: cr(Fe.ParsingError),
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
  async validateAst(e, n, r = V.CancellationToken.None) {
    const i = [], s = (a, o, l) => {
      i.push(this.toDiagnostic(a, o, l));
    };
    return await this.validateAstBefore(e, n, s, r), await this.validateAstNodes(e, n, s, r), await this.validateAstAfter(e, n, s, r), i;
  }
  async validateAstBefore(e, n, r, i = V.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksBefore;
    for (const o of a)
      await Ee(i), await o(e, r, (s = n.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, n, r, i = V.CancellationToken.None) {
    await Promise.all(Xt(e).map(async (s) => {
      await Ee(i);
      const a = this.validationRegistry.getChecks(s.$type, n.categories);
      for (const o of a)
        await o(s, r, i);
    }));
  }
  async validateAstAfter(e, n, r, i = V.CancellationToken.None) {
    var s;
    const a = this.validationRegistry.checksAfter;
    for (const o of a)
      await Ee(i), await o(e, r, (s = n.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, n, r) {
    return {
      message: n,
      range: i$(r),
      severity: Fs(e),
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
function i$(t) {
  if (t.range)
    return t.range;
  let e;
  return typeof t.property == "string" ? e = kc(t.node.$cstNode, t.property, t.index) : typeof t.keyword == "string" && (e = Fh(t.node.$cstNode, t.keyword, t.index)), e ?? (e = t.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function Fs(t) {
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
function s$(t) {
  switch (t) {
    case "error":
      return cr(Fe.LexingError);
    case "warning":
      return cr(Fe.LexingWarning);
    case "info":
      return cr(Fe.LexingInfo);
    case "hint":
      return cr(Fe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
var Fe;
(function(t) {
  t.LexingError = "lexing-error", t.LexingWarning = "lexing-warning", t.LexingInfo = "lexing-info", t.LexingHint = "lexing-hint", t.ParsingError = "parsing-error", t.LinkingError = "linking-error";
})(Fe || (Fe = {}));
class a$ {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, n, r) {
    const i = r ?? pt(e);
    n ?? (n = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!n)
      throw new Error(`Node at path ${s} has no name.`);
    let a;
    const o = () => {
      var l;
      return a ?? (a = Ei((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: n,
      get nameSegment() {
        return o();
      },
      selectionSegment: Ei(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
}
class o$ {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, n = V.CancellationToken.None) {
    const r = [], i = e.parseResult.value;
    for (const s of Xt(i))
      await Ee(n), Ac(s).filter((a) => !si(a)).forEach((a) => {
        const o = this.createDescription(a);
        o && r.push(o);
      });
    return r;
  }
  createDescription(e) {
    const n = e.reference.$nodeDescription, r = e.reference.$refNode;
    if (!n || !r)
      return;
    const i = pt(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: n.documentUri,
      targetPath: n.path,
      segment: Ei(r),
      local: vt.equals(n.documentUri, i)
    };
  }
}
class l$ {
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
var u$ = cd();
class c$ {
  constructor(e) {
    this._ready = new $o(), this.settings = {}, this.workspaceConfig = !1, this.onConfigurationSectionUpdateEmitter = new u$.Emitter(), this.serviceRegistry = e.ServiceRegistry;
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
var gr;
(function(t) {
  function e(n) {
    return {
      dispose: async () => await n()
    };
  }
  t.create = e;
})(gr || (gr = {}));
class f$ {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new Ki(), this.documentPhaseListeners = new Ki(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = K.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, n = {}, r = V.CancellationToken.None) {
    var i, s;
    for (const a of e) {
      const o = a.uri.toString();
      if (a.state === K.Validated) {
        if (typeof n.validation == "boolean" && n.validation)
          a.state = K.IndexedReferences, a.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof n.validation == "object") {
          const l = this.buildState.get(o), u = (i = l?.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (u) {
            const f = ((s = n.validation.categories) !== null && s !== void 0 ? s : Hi.all).filter((d) => !u.includes(d));
            f.length > 0 && (this.buildState.set(o, {
              completed: !1,
              options: {
                validation: Object.assign(Object.assign({}, n.validation), { categories: f })
              },
              result: l.result
            }), a.state = K.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = K.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, n, r);
  }
  async update(e, n, r = V.CancellationToken.None) {
    this.currentState = K.Changed;
    for (const a of n)
      this.langiumDocuments.deleteDocument(a), this.buildState.delete(a.toString()), this.indexManager.remove(a);
    for (const a of e) {
      if (!this.langiumDocuments.invalidateDocument(a)) {
        const l = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a);
        l.state = K.Changed, this.langiumDocuments.addDocument(l);
      }
      this.buildState.delete(a.toString());
    }
    const i = re(e).concat(n).map((a) => a.toString()).toSet();
    this.langiumDocuments.all.filter((a) => !i.has(a.uri.toString()) && this.shouldRelink(a, i)).forEach((a) => {
      this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a), a.state = Math.min(a.state, K.ComputedScopes), a.diagnostics = void 0;
    }), await this.emitUpdate(e, n), await Ee(r);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a) => {
      var o;
      return a.state < K.Linked || !(!((o = this.buildState.get(a.uri.toString())) === null || o === void 0) && o.completed);
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
    return this.updateListeners.push(e), gr.create(() => {
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
    this.prepareBuild(e, n), await this.runCancelable(e, K.Parsed, r, (s) => this.langiumDocumentFactory.update(s, r)), await this.runCancelable(e, K.IndexedContent, r, (s) => this.indexManager.updateContent(s, r)), await this.runCancelable(e, K.ComputedScopes, r, async (s) => {
      const a = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a.computeLocalScopes(s, r);
    }), await this.runCancelable(e, K.Linked, r, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, r)), await this.runCancelable(e, K.IndexedReferences, r, (s) => this.indexManager.updateReferences(s, r));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, K.Validated, r, (s) => this.validate(s, r));
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
    return this.buildPhaseListeners.add(e, n), gr.create(() => {
      this.buildPhaseListeners.delete(e, n);
    });
  }
  onDocumentPhase(e, n) {
    return this.documentPhaseListeners.add(e, n), gr.create(() => {
      this.documentPhaseListeners.delete(e, n);
    });
  }
  waitUntil(e, n, r) {
    let i;
    if (n && "path" in n ? i = n : r = n, r ?? (r = V.CancellationToken.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : r.isCancellationRequested ? Promise.reject(ji) : new Promise((s, a) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const u = this.langiumDocuments.getDocument(i);
          s(u?.uri);
        } else
          s(void 0);
      }), l = r.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a(ji);
      });
    });
  }
  async notifyDocumentPhase(e, n, r) {
    const s = this.documentPhaseListeners.get(n).slice();
    for (const a of s)
      try {
        await a(e, r);
      } catch (o) {
        if (!ms(o))
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
      const c = (i = o?.categories) !== null && i !== void 0 ? i : Hi.all;
      u.result.validationChecks ? u.result.validationChecks.push(...c) : u.result.validationChecks = [...c];
    }
  }
  getBuildOptions(e) {
    var n, r;
    return (r = (n = this.buildState.get(e.uri.toString())) === null || n === void 0 ? void 0 : n.options) !== null && r !== void 0 ? r : {};
  }
}
class d$ {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new XE(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, n) {
    const r = pt(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a) => {
        vt.equals(a.targetUri, r) && a.targetPath === n && i.push(a);
      });
    }), re(i);
  }
  allElements(e, n) {
    let r = re(this.symbolIndex.keys());
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
  async updateContent(e, n = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, n), s = e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e, n = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, n);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, n) {
    const r = this.referenceIndex.get(e.uri.toString());
    return r ? r.some((i) => !i.local && n.has(i.targetUri.toString())) : !1;
  }
}
class h$ {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new $o(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
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
  async initializeWorkspace(e, n = V.CancellationToken.None) {
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
    return Ft.parse(e.uri);
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
    const i = vt.basename(n.uri);
    if (i.startsWith("."))
      return !1;
    if (n.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (n.isFile) {
      const s = vt.extname(n.uri);
      return r.includes(s);
    }
    return !1;
  }
}
class p$ {
  buildUnexpectedCharactersMessage(e, n, r, i, s) {
    return ua.buildUnexpectedCharactersMessage(e, n, r, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return ua.buildUnableToPopLexerModeMessage(e);
  }
}
const m$ = { mode: "full" };
class g$ {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const n = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(n);
    const r = Xu(n) ? Object.values(n) : n, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new he(r, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, n = m$) {
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
    if (Xu(e))
      return e;
    const n = md(e) ? Object.values(e.modes).flat() : e, r = {};
    return n.forEach((i) => r[i.name] = i), r;
  }
}
function y$(t) {
  return Array.isArray(t) && (t.length === 0 || "name" in t[0]);
}
function md(t) {
  return t && "modes" in t && "defaultMode" in t;
}
function Xu(t) {
  return !y$(t) && !md(t);
}
function T$(t, e, n) {
  let r, i;
  typeof t == "string" ? (i = e, r = n) : (i = t.range.start, r = e), i || (i = D.create(0, 0));
  const s = gd(t), a = xo(r), o = A$({
    lines: s,
    position: i,
    options: a
  });
  return k$({
    index: 0,
    tokens: o,
    position: i
  });
}
function v$(t, e) {
  const n = xo(e), r = gd(t);
  if (r.length === 0)
    return !1;
  const i = r[0], s = r[r.length - 1], a = n.start, o = n.end;
  return !!a?.exec(i) && !!o?.exec(s);
}
function gd(t) {
  let e = "";
  return typeof t == "string" ? e = t : e = t.text, e.split(Sh);
}
const Ju = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, R$ = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function A$(t) {
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
    if (c = c.substring(0, S$(c)), Pa(c, f) >= c.length) {
      if (i.length > 0) {
        const h = D.create(s, a);
        i.push({
          type: "break",
          content: "",
          range: L.create(h, h)
        });
      }
    } else {
      Ju.lastIndex = f;
      const h = Ju.exec(c);
      if (h) {
        const m = h[0], g = h[1], R = D.create(s, a + f), y = D.create(s, a + f + m.length);
        i.push({
          type: "tag",
          content: g,
          range: L.create(R, y)
        }), f += m.length, f = Pa(c, f);
      }
      if (f < c.length) {
        const m = c.substring(f), g = Array.from(m.matchAll(R$));
        i.push(...E$(g, m, s, a + f));
      }
    }
    s++, a = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function E$(t, e, n, r) {
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
const $$ = /\S/, x$ = /\s*$/;
function Pa(t, e) {
  const n = t.substring(e).match($$);
  return n ? e + n.index : t.length;
}
function S$(t) {
  const e = t.match(x$);
  if (e && typeof e.index == "number")
    return e.index;
}
function k$(t) {
  var e, n, r, i;
  const s = D.create(t.position.line, t.position.character);
  if (t.tokens.length === 0)
    return new Zu([], L.create(s, s));
  const a = [];
  for (; t.index < t.tokens.length; ) {
    const u = I$(t, a[a.length - 1]);
    u && a.push(u);
  }
  const o = (n = (e = a[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && n !== void 0 ? n : s, l = (i = (r = a[a.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null && i !== void 0 ? i : s;
  return new Zu(a, L.create(o, l));
}
function I$(t, e) {
  const n = t.tokens[t.index];
  if (n.type === "tag")
    return Td(t, !1);
  if (n.type === "text" || n.type === "inline-tag")
    return yd(t);
  C$(n, e), t.index++;
}
function C$(t, e) {
  if (e) {
    const n = new Rd("", t.range);
    "inlines" in e ? e.inlines.push(n) : e.content.inlines.push(n);
  }
}
function yd(t) {
  let e = t.tokens[t.index];
  const n = e;
  let r = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(w$(t)), r = e, e = t.tokens[t.index];
  return new Ma(i, L.create(n.range.start, r.range.end));
}
function w$(t) {
  return t.tokens[t.index].type === "inline-tag" ? Td(t, !0) : vd(t);
}
function Td(t, e) {
  const n = t.tokens[t.index++], r = n.content.substring(1), i = t.tokens[t.index];
  if (i?.type === "text")
    if (e) {
      const s = vd(t);
      return new Us(r, new Ma([s], s.range), e, L.create(n.range.start, s.range.end));
    } else {
      const s = yd(t);
      return new Us(r, s, e, L.create(n.range.start, s.range.end));
    }
  else {
    const s = n.range;
    return new Us(r, new Ma([], s), e, s);
  }
}
function vd(t) {
  const e = t.tokens[t.index++];
  return new Rd(e.content, e.range);
}
function xo(t) {
  if (!t)
    return xo({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: n, line: r } = t;
  return {
    start: Gs(e, !0),
    end: Gs(n, !1),
    line: Gs(r, !0)
  };
}
function Gs(t, e) {
  if (typeof t == "string" || typeof t == "object") {
    const n = typeof t == "string" ? Yi(t) : t.source;
    return e ? new RegExp(`^\\s*${n}`) : new RegExp(`\\s*${n}\\s*$`);
  } else
    return t;
}
class Zu {
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
        e += Qu(e) + r;
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
        n += Qu(n) + i;
      }
    return n.trim();
  }
}
class Us {
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
      const s = N$(this.name, n, e ?? {});
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
function N$(t, e, n) {
  var r, i;
  if (t === "linkplain" || t === "linkcode" || t === "link") {
    const s = e.indexOf(" ");
    let a = e;
    if (s > 0) {
      const l = Pa(e, s);
      a = e.substring(l), e = e.substring(0, s);
    }
    return (t === "linkcode" || t === "link" && n.link === "code") && (a = `\`${a}\``), (i = (r = n.renderLink) === null || r === void 0 ? void 0 : r.call(n, e, a)) !== null && i !== void 0 ? i : _$(e, a);
  }
}
function _$(t, e) {
  try {
    return Ft.parse(t, !0), `[${e}](${t})`;
  } catch {
    return t;
  }
}
class Ma {
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
class Rd {
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
function Qu(t) {
  return t.endsWith(`
`) ? `
` : `

`;
}
class b$ {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const n = this.commentProvider.getComment(e);
    if (n && v$(n))
      return T$(n).toMarkdown({
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
    const i = pt(e).precomputedScopes;
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
class O$ {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var n;
    return QE(e) ? e.$comment : (n = th(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || n === void 0 ? void 0 : n.text;
  }
}
class L$ {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, n) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}
class P$ {
  constructor() {
    this.previousTokenSource = new V.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
  }
  write(e) {
    this.cancelWrite();
    const n = GE();
    return this.previousTokenSource = n, this.enqueue(this.writeQueue, e, n.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, n, r = V.CancellationToken.None) {
    const i = new $o(), s = {
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
        ms(s) ? r.resolve(void 0) : r.reject(s);
      }
    })), this.done = !0, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}
class M$ {
  constructor(e) {
    this.grammarElementIdMap = new zu(), this.tokenTypeIdMap = new zu(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
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
    for (const i of Xt(e))
      n.set(i, {});
    if (e.$cstNode)
      for (const i of Zs(e.$cstNode))
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
            le(o) ? a.push(this.dehydrateAstNode(o, n)) : ze(o) ? a.push(this.dehydrateReference(o, n)) : a.push(o);
        } else le(s) ? r[i] = this.dehydrateAstNode(s, n) : ze(s) ? r[i] = this.dehydrateReference(s, n) : s !== void 0 && (r[i] = s);
    return r;
  }
  dehydrateReference(e, n) {
    const r = {};
    return r.$refText = e.$refText, e.$refNode && (r.$refNode = n.cstNodes.get(e.$refNode)), r;
  }
  dehydrateCstNode(e, n) {
    const r = n.cstNodes.get(e);
    return hc(e) ? r.fullText = e.fullText : r.grammarSource = this.getGrammarElementId(e.grammarSource), r.hidden = e.hidden, r.astNode = n.astNodes.get(e.astNode), yr(e) ? r.content = e.content.map((i) => this.dehydrateCstNode(i, n)) : dc(e) && (r.tokenType = e.tokenType.name, r.offset = e.offset, r.length = e.length, r.startLine = e.range.start.line, r.startColumn = e.range.start.character, r.endLine = e.range.end.line, r.endColumn = e.range.end.character), r;
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
    for (const s of Xt(e))
      n.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of Zs(e.$cstNode)) {
        let a;
        "fullText" in s ? (a = new Qf(s.fullText), i = a) : "content" in s ? a = new Ao() : "tokenType" in s && (a = this.hydrateCstLeafNode(s)), a && (r.set(s, a), a.root = i);
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
            le(o) ? a.push(this.setParent(this.hydrateAstNode(o, n), r)) : ze(o) ? a.push(this.hydrateReference(o, r, i, n)) : a.push(o);
        } else le(s) ? r[i] = this.setParent(this.hydrateAstNode(s, n), r) : ze(s) ? r[i] = this.hydrateReference(s, r, i, n) : s !== void 0 && (r[i] = s);
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
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = n.astNodes.get(e.astNode), yr(i))
      for (const s of e.content) {
        const a = this.hydrateCstNode(s, n, r++);
        i.content.push(a);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const n = this.getTokenType(e.tokenType), r = e.offset, i = e.length, s = e.startLine, a = e.startColumn, o = e.endLine, l = e.endColumn, u = e.hidden;
    return new Na(r, i, {
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
    for (const n of Xt(this.grammar))
      rh(n) && this.grammarElementIdMap.set(n, e++);
  }
}
function $t(t) {
  return {
    documentation: {
      CommentProvider: (e) => new O$(e),
      DocumentationProvider: (e) => new b$(e)
    },
    parser: {
      AsyncParser: (e) => new L$(e),
      GrammarConfig: (e) => qh(e),
      LangiumParser: (e) => OE(e),
      CompletionParser: (e) => bE(e),
      ValueConverter: () => new ld(),
      TokenBuilder: () => new od(),
      Lexer: (e) => new g$(e),
      ParserErrorMessageProvider: () => new nd(),
      LexerErrorMessageProvider: () => new p$()
    },
    workspace: {
      AstNodeLocator: () => new l$(),
      AstNodeDescriptionProvider: (e) => new a$(e),
      ReferenceDescriptionProvider: (e) => new o$(e)
    },
    references: {
      Linker: (e) => new KE(e),
      NameProvider: () => new VE(),
      ScopeProvider: (e) => new ZE(e),
      ScopeComputation: (e) => new zE(e),
      References: (e) => new WE(e)
    },
    serializer: {
      Hydrator: (e) => new M$(e),
      JsonSerializer: (e) => new e$(e)
    },
    validation: {
      DocumentValidator: (e) => new r$(e),
      ValidationRegistry: (e) => new n$(e)
    },
    shared: () => t.shared
  };
}
function xt(t) {
  return {
    ServiceRegistry: (e) => new t$(e),
    workspace: {
      LangiumDocuments: (e) => new jE(e),
      LangiumDocumentFactory: (e) => new BE(e),
      DocumentBuilder: (e) => new f$(e),
      IndexManager: (e) => new d$(e),
      WorkspaceManager: (e) => new h$(e),
      FileSystemProvider: (e) => t.fileSystemProvider(e),
      WorkspaceLock: () => new P$(),
      ConfigurationProvider: (e) => new c$(e)
    }
  };
}
var ec;
(function(t) {
  t.merge = (e, n) => Vi(Vi({}, e), n);
})(ec || (ec = {}));
function ue(t, e, n, r, i, s, a, o, l) {
  const u = [t, e, n, r, i, s, a, o, l].reduce(Vi, {});
  return Ad(u);
}
const D$ = /* @__PURE__ */ Symbol("isProxy");
function Ad(t, e) {
  const n = new Proxy({}, {
    deleteProperty: () => !1,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (r, i) => i === D$ ? !0 : nc(r, i, t, e || n),
    getOwnPropertyDescriptor: (r, i) => (nc(r, i, t, e || n), Object.getOwnPropertyDescriptor(r, i)),
    // used by for..in
    has: (r, i) => i in t,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(t)]
    // used by for..in
  });
  return n;
}
const tc = /* @__PURE__ */ Symbol();
function nc(t, e, n, r) {
  if (e in t) {
    if (t[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: t[e] });
    if (t[e] === tc)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return t[e];
  } else if (e in n) {
    const i = n[e];
    t[e] = tc;
    try {
      t[e] = typeof i == "function" ? i(r) : Ad(i, r);
    } catch (s) {
      throw t[e] = s instanceof Error ? s : void 0, s;
    }
    return t[e];
  } else
    return;
}
function Vi(t, e) {
  if (e) {
    for (const [n, r] of Object.entries(e))
      if (r !== void 0) {
        const i = t[n];
        i !== null && r !== null && typeof i == "object" && typeof r == "object" ? t[n] = Vi(i, r) : t[n] = r;
      }
  }
  return t;
}
class F$ {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}
const St = {
  fileSystemProvider: () => new F$()
}, G$ = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: !1,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
}, U$ = {
  AstReflection: () => new Rc()
};
function B$() {
  const t = ue(xt(St), U$), e = ue($t({ shared: t }), G$);
  return t.ServiceRegistry.register(e), e;
}
function Ht(t) {
  var e;
  const n = B$(), r = n.serializer.JsonSerializer.deserialize(t);
  return n.shared.workspace.LangiumDocumentFactory.fromModel(r, Ft.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), r;
}
var j$ = Object.defineProperty, A = (t, e) => j$(t, "name", { value: e, configurable: !0 }), rc = "Statement", pi = "Architecture";
function K$(t) {
  return He.isInstance(t, pi);
}
A(K$, "isArchitecture");
var Zr = "Axis", fr = "Branch";
function H$(t) {
  return He.isInstance(t, fr);
}
A(H$, "isBranch");
var Qr = "Checkout", ei = "CherryPicking", Bs = "ClassDefStatement", dr = "Commit";
function V$(t) {
  return He.isInstance(t, dr);
}
A(V$, "isCommit");
var js = "Curve", Ks = "Edge", Hs = "Entry", hr = "GitGraph";
function W$(t) {
  return He.isInstance(t, hr);
}
A(W$, "isGitGraph");
var Vs = "Group", mi = "Info";
function z$(t) {
  return He.isInstance(t, mi);
}
A(z$, "isInfo");
var ti = "Item", Ws = "Junction", pr = "Merge";
function q$(t) {
  return He.isInstance(t, pr);
}
A(q$, "isMerge");
var zs = "Option", gi = "Packet";
function Y$(t) {
  return He.isInstance(t, gi);
}
A(Y$, "isPacket");
var yi = "PacketBlock";
function X$(t) {
  return He.isInstance(t, yi);
}
A(X$, "isPacketBlock");
var Ti = "Pie";
function J$(t) {
  return He.isInstance(t, Ti);
}
A(J$, "isPie");
var vi = "PieSection";
function Z$(t) {
  return He.isInstance(t, vi);
}
A(Z$, "isPieSection");
var qs = "Radar", Ys = "Service", Ri = "Treemap";
function Q$(t) {
  return He.isInstance(t, Ri);
}
A(Q$, "isTreemap");
var Xs = "TreemapRow", ni = "Direction", ri = "Leaf", ii = "Section", Qt, Ed = (Qt = class extends fc {
  getAllTypes() {
    return [pi, Zr, fr, Qr, ei, Bs, dr, js, ni, Ks, Hs, hr, Vs, mi, ti, Ws, ri, pr, zs, gi, yi, Ti, vi, qs, ii, Ys, rc, Ri, Xs];
  }
  computeIsSubtype(e, n) {
    switch (e) {
      case fr:
      case Qr:
      case ei:
      case dr:
      case pr:
        return this.isSubtype(rc, n);
      case ni:
        return this.isSubtype(hr, n);
      case ri:
      case ii:
        return this.isSubtype(ti, n);
      default:
        return !1;
    }
  }
  getReferenceType(e) {
    const n = `${e.container.$type}:${e.property}`;
    if (n === "Entry:axis")
      return Zr;
    throw new Error(`${n} is not a valid reference id.`);
  }
  getTypeMetaData(e) {
    switch (e) {
      case pi:
        return {
          name: pi,
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
      case Zr:
        return {
          name: Zr,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case fr:
        return {
          name: fr,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case Qr:
        return {
          name: Qr,
          properties: [
            { name: "branch" }
          ]
        };
      case ei:
        return {
          name: ei,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case Bs:
        return {
          name: Bs,
          properties: [
            { name: "className" },
            { name: "styleText" }
          ]
        };
      case dr:
        return {
          name: dr,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case js:
        return {
          name: js,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case Ks:
        return {
          name: Ks,
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
      case Hs:
        return {
          name: Hs,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case hr:
        return {
          name: hr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Vs:
        return {
          name: Vs,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case mi:
        return {
          name: mi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case ti:
        return {
          name: ti,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      case Ws:
        return {
          name: Ws,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case pr:
        return {
          name: pr,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case zs:
        return {
          name: zs,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: !1 }
          ]
        };
      case gi:
        return {
          name: gi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case yi:
        return {
          name: yi,
          properties: [
            { name: "bits" },
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case Ti:
        return {
          name: Ti,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: !1 },
            { name: "title" }
          ]
        };
      case vi:
        return {
          name: vi,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case qs:
        return {
          name: qs,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ys:
        return {
          name: Ys,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Ri:
        return {
          name: Ri,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" },
            { name: "TreemapRows", defaultValue: [] }
          ]
        };
      case Xs:
        return {
          name: Xs,
          properties: [
            { name: "indent" },
            { name: "item" }
          ]
        };
      case ni:
        return {
          name: ni,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case ri:
        return {
          name: ri,
          properties: [
            { name: "classSelector" },
            { name: "name" },
            { name: "value" }
          ]
        };
      case ii:
        return {
          name: ii,
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
}, A(Qt, "MermaidAstReflection"), Qt), He = new Ed(), ic, ex = /* @__PURE__ */ A(() => ic ?? (ic = Ht(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar"), sc, tx = /* @__PURE__ */ A(() => sc ?? (sc = Ht(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), ac, nx = /* @__PURE__ */ A(() => ac ?? (ac = Ht(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar"), oc, rx = /* @__PURE__ */ A(() => oc ?? (oc = Ht(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar"), lc, ix = /* @__PURE__ */ A(() => lc ?? (lc = Ht(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), uc, sx = /* @__PURE__ */ A(() => uc ?? (uc = Ht(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), cc, ax = /* @__PURE__ */ A(() => cc ?? (cc = Ht(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammar"), ox = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, lx = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ux = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, cx = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, fx = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, dx = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, hx = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, Vt = {
  AstReflection: /* @__PURE__ */ A(() => new Ed(), "AstReflection")
}, px = {
  Grammar: /* @__PURE__ */ A(() => ex(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => ox, "LanguageMetaData"),
  parser: {}
}, mx = {
  Grammar: /* @__PURE__ */ A(() => tx(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => lx, "LanguageMetaData"),
  parser: {}
}, gx = {
  Grammar: /* @__PURE__ */ A(() => nx(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => ux, "LanguageMetaData"),
  parser: {}
}, yx = {
  Grammar: /* @__PURE__ */ A(() => rx(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => cx, "LanguageMetaData"),
  parser: {}
}, Tx = {
  Grammar: /* @__PURE__ */ A(() => ix(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => fx, "LanguageMetaData"),
  parser: {}
}, vx = {
  Grammar: /* @__PURE__ */ A(() => sx(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => dx, "LanguageMetaData"),
  parser: {}
}, Rx = {
  Grammar: /* @__PURE__ */ A(() => ax(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ A(() => hx, "LanguageMetaData"),
  parser: {}
}, Ax = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Ex = /accTitle[\t ]*:([^\n\r]*)/, $x = /title([\t ][^\n\r]*|)/, xx = {
  ACC_DESCR: Ax,
  ACC_TITLE: Ex,
  TITLE: $x
}, en, gs = (en = class extends ld {
  runConverter(e, n, r) {
    let i = this.runCommonConverter(e, n, r);
    return i === void 0 && (i = this.runCustomConverter(e, n, r)), i === void 0 ? super.runConverter(e, n, r) : i;
  }
  runCommonConverter(e, n, r) {
    const i = xx[e.name];
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
}, A(en, "AbstractMermaidValueConverter"), en), tn, ys = (tn = class extends gs {
  runCustomConverter(e, n, r) {
  }
}, A(tn, "CommonValueConverter"), tn), nn, kt = (nn = class extends od {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, n, r) {
    const i = super.buildKeywordTokens(e, n, r);
    return i.forEach((s) => {
      this.keywords.has(s.name) && s.PATTERN !== void 0 && (s.PATTERN = new RegExp(s.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), i;
  }
}, A(nn, "AbstractMermaidTokenBuilder"), nn), rn;
rn = class extends kt {
}, A(rn, "CommonTokenBuilder");
var sn, Sx = (sn = class extends kt {
  constructor() {
    super(["gitGraph"]);
  }
}, A(sn, "GitGraphTokenBuilder"), sn), $d = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Sx(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ys(), "ValueConverter")
  }
};
function xd(t = St) {
  const e = ue(
    xt(t),
    Vt
  ), n = ue(
    $t({ shared: e }),
    Tx,
    $d
  );
  return e.ServiceRegistry.register(n), { shared: e, GitGraph: n };
}
A(xd, "createGitGraphServices");
var an, kx = (an = class extends kt {
  constructor() {
    super(["info", "showInfo"]);
  }
}, A(an, "InfoTokenBuilder"), an), Sd = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new kx(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ys(), "ValueConverter")
  }
};
function kd(t = St) {
  const e = ue(
    xt(t),
    Vt
  ), n = ue(
    $t({ shared: e }),
    px,
    Sd
  );
  return e.ServiceRegistry.register(n), { shared: e, Info: n };
}
A(kd, "createInfoServices");
var on, Ix = (on = class extends kt {
  constructor() {
    super(["packet"]);
  }
}, A(on, "PacketTokenBuilder"), on), Id = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Ix(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ys(), "ValueConverter")
  }
};
function Cd(t = St) {
  const e = ue(
    xt(t),
    Vt
  ), n = ue(
    $t({ shared: e }),
    mx,
    Id
  );
  return e.ServiceRegistry.register(n), { shared: e, Packet: n };
}
A(Cd, "createPacketServices");
var ln, Cx = (ln = class extends kt {
  constructor() {
    super(["pie", "showData"]);
  }
}, A(ln, "PieTokenBuilder"), ln), un, wx = (un = class extends gs {
  runCustomConverter(e, n, r) {
    if (e.name === "PIE_SECTION_LABEL")
      return n.replace(/"/g, "").trim();
  }
}, A(un, "PieValueConverter"), un), wd = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Cx(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new wx(), "ValueConverter")
  }
};
function Nd(t = St) {
  const e = ue(
    xt(t),
    Vt
  ), n = ue(
    $t({ shared: e }),
    gx,
    wd
  );
  return e.ServiceRegistry.register(n), { shared: e, Pie: n };
}
A(Nd, "createPieServices");
var cn, Nx = (cn = class extends kt {
  constructor() {
    super(["architecture"]);
  }
}, A(cn, "ArchitectureTokenBuilder"), cn), fn, _x = (fn = class extends gs {
  runCustomConverter(e, n, r) {
    if (e.name === "ARCH_ICON")
      return n.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return n.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE")
      return n.replace(/[[\]]/g, "").trim();
  }
}, A(fn, "ArchitectureValueConverter"), fn), _d = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Nx(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new _x(), "ValueConverter")
  }
};
function bd(t = St) {
  const e = ue(
    xt(t),
    Vt
  ), n = ue(
    $t({ shared: e }),
    yx,
    _d
  );
  return e.ServiceRegistry.register(n), { shared: e, Architecture: n };
}
A(bd, "createArchitectureServices");
var dn, bx = (dn = class extends kt {
  constructor() {
    super(["radar-beta"]);
  }
}, A(dn, "RadarTokenBuilder"), dn), Od = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new bx(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new ys(), "ValueConverter")
  }
};
function Ld(t = St) {
  const e = ue(
    xt(t),
    Vt
  ), n = ue(
    $t({ shared: e }),
    vx,
    Od
  );
  return e.ServiceRegistry.register(n), { shared: e, Radar: n };
}
A(Ld, "createRadarServices");
var hn, Ox = (hn = class extends kt {
  constructor() {
    super(["treemap"]);
  }
}, A(hn, "TreemapTokenBuilder"), hn), Lx = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, pn, Px = (pn = class extends gs {
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
      const i = Lx.exec(n);
      if (i)
        return {
          $type: "ClassDefStatement",
          className: i[1],
          styleText: i[2] || void 0
        };
    }
  }
}, A(pn, "TreemapValueConverter"), pn);
function Pd(t) {
  const e = t.validation.TreemapValidator, n = t.validation.ValidationRegistry;
  if (n) {
    const r = {
      Treemap: e.checkSingleRoot.bind(e)
      // Remove unused validation for TreemapRow
    };
    n.register(r, e);
  }
}
A(Pd, "registerValidationChecks");
var mn, Mx = (mn = class {
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
}, A(mn, "TreemapValidator"), mn), Md = {
  parser: {
    TokenBuilder: /* @__PURE__ */ A(() => new Ox(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ A(() => new Px(), "ValueConverter")
  },
  validation: {
    TreemapValidator: /* @__PURE__ */ A(() => new Mx(), "TreemapValidator")
  }
};
function Dd(t = St) {
  const e = ue(
    xt(t),
    Vt
  ), n = ue(
    $t({ shared: e }),
    Rx,
    Md
  );
  return e.ServiceRegistry.register(n), Pd(n), { shared: e, Treemap: n };
}
A(Dd, "createTreemapServices");
var nt = {}, Dx = {
  info: /* @__PURE__ */ A(async () => {
    const { createInfoServices: t } = await Promise.resolve().then(() => Ux), e = t().Info.parser.LangiumParser;
    nt.info = e;
  }, "info"),
  packet: /* @__PURE__ */ A(async () => {
    const { createPacketServices: t } = await Promise.resolve().then(() => Bx), e = t().Packet.parser.LangiumParser;
    nt.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ A(async () => {
    const { createPieServices: t } = await Promise.resolve().then(() => jx), e = t().Pie.parser.LangiumParser;
    nt.pie = e;
  }, "pie"),
  architecture: /* @__PURE__ */ A(async () => {
    const { createArchitectureServices: t } = await Promise.resolve().then(() => Kx), e = t().Architecture.parser.LangiumParser;
    nt.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ A(async () => {
    const { createGitGraphServices: t } = await Promise.resolve().then(() => Hx), e = t().GitGraph.parser.LangiumParser;
    nt.gitGraph = e;
  }, "gitGraph"),
  radar: /* @__PURE__ */ A(async () => {
    const { createRadarServices: t } = await Promise.resolve().then(() => Vx), e = t().Radar.parser.LangiumParser;
    nt.radar = e;
  }, "radar"),
  treemap: /* @__PURE__ */ A(async () => {
    const { createTreemapServices: t } = await Promise.resolve().then(() => Wx), e = t().Treemap.parser.LangiumParser;
    nt.treemap = e;
  }, "treemap")
};
async function Fx(t, e) {
  const n = Dx[t];
  if (!n)
    throw new Error(`Unknown diagram type: ${t}`);
  nt[t] || await n();
  const i = nt[t].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new Gx(i);
  return i.value;
}
A(Fx, "parse");
var gn, Gx = (gn = class extends Error {
  constructor(e) {
    const n = e.lexerErrors.map((i) => i.message).join(`
`), r = e.parserErrors.map((i) => i.message).join(`
`);
    super(`Parsing failed: ${n} ${r}`), this.result = e;
  }
}, A(gn, "MermaidParseError"), gn);
const Ux = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: Sd,
  createInfoServices: kd
}, Symbol.toStringTag, { value: "Module" })), Bx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: Id,
  createPacketServices: Cd
}, Symbol.toStringTag, { value: "Module" })), jx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: wd,
  createPieServices: Nd
}, Symbol.toStringTag, { value: "Module" })), Kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: _d,
  createArchitectureServices: bd
}, Symbol.toStringTag, { value: "Module" })), Hx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: $d,
  createGitGraphServices: xd
}, Symbol.toStringTag, { value: "Module" })), Vx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: Od,
  createRadarServices: Ld
}, Symbol.toStringTag, { value: "Module" })), Wx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreemapModule: Md,
  createTreemapServices: Dd
}, Symbol.toStringTag, { value: "Module" }));
export {
  Fx as p
};
