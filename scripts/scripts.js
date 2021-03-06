! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
        i = t.document,
        o = Object.getPrototypeOf,
        r = n.slice,
        s = n.concat,
        a = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        d = f.toString,
        h = d.call(Object),
        p = {},
        m = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        g = function (t) {
            return null != t && t === t.window
        },
        y = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function v(t, e, n) {
        var o, r = (e = e || i).createElement("script");
        if (r.text = t, n)
            for (o in y) n[o] && (r[o] = n[o]);
        e.head.appendChild(r).parentNode.removeChild(r)
    }

    function x(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
    }
    var b = function (t, e) {
            return new b.fn.init(t, e)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function C(t) {
        var e = !!t && "length" in t && t.length,
            n = x(t);
        return !m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    b.fn = b.prototype = {
        jquery: "3.3.1",
        constructor: b,
        length: 0,
        toArray: function () {
            return r.call(this)
        },
        get: function (t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = b.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return b.each(this, t)
        },
        map: function (t) {
            return this.pushStack(b.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function () {
        var t, e, n, i, o, r, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || m(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], s !== (i = t[e]) && (l && i && (b.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && b.isPlainObject(n) ? n : {}, s[e] = b.extend(l, r, i)) : void 0 !== i && (s[e] = i));
        return s
    }, b.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== c.call(t) || (e = o(t)) && ("function" != typeof (n = f.call(e, "constructor") && e.constructor) || d.call(n) !== h))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function (t) {
            v(t)
        },
        each: function (t, e) {
            var n, i = 0;
            if (C(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(w, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (C(Object(t)) ? b.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : u.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
            return t.length = o, t
        },
        grep: function (t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
            return i
        },
        map: function (t, e, n) {
            var i, o, r = 0,
                a = [];
            if (C(t))
                for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && a.push(o);
            else
                for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var T = function (t) {
        var e, n, i, o, r, s, a, u, l, c, f, d, h, p, m, g, y, v, x, b = "sizzle" + 1 * new Date,
            w = t.document,
            C = 0,
            T = 0,
            S = st(),
            E = st(),
            I = st(),
            A = function (t, e) {
                return t === e && (f = !0), 0
            },
            _ = {}.hasOwnProperty,
            L = [],
            k = L.pop,
            j = L.push,
            D = L.push,
            z = L.slice,
            N = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ = "\\[" + q + "*(" + P + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + q + "*\\]",
            H = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            R = new RegExp(q + "+", "g"),
            W = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
            M = new RegExp("^" + q + "*," + q + "*"),
            B = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            F = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
            U = new RegExp(H),
            Y = new RegExp("^" + P + "$"),
            Q = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            V = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            K = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
            tt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function (t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            it = function () {
                d()
            },
            ot = vt(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            D.apply(L = z.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
        } catch (t) {
            D = {
                apply: L.length ? function (t, e) {
                    j.apply(t, z.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function rt(t, e, i, o) {
            var r, a, l, c, f, p, y, v = e && e.ownerDocument,
                C = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;
            if (!o && ((e ? e.ownerDocument || e : w) !== h && d(e), e = e || h, m)) {
                if (11 !== C && (f = J.exec(t)))
                    if (r = f[1]) {
                        if (9 === C) {
                            if (!(l = e.getElementById(r))) return i;
                            if (l.id === r) return i.push(l), i
                        } else if (v && (l = v.getElementById(r)) && x(e, l) && l.id === r) return i.push(l), i
                    } else {
                        if (f[2]) return D.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return D.apply(i, e.getElementsByClassName(r)), i
                    }
                if (n.qsa && !I[t + " "] && (!g || !g.test(t))) {
                    if (1 !== C) v = e, y = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((c = e.getAttribute("id")) ? c = c.replace(et, nt) : e.setAttribute("id", c = b), a = (p = s(t)).length; a--;) p[a] = "#" + c + " " + yt(p[a]);
                        y = p.join(","), v = Z.test(t) && mt(e.parentNode) || e
                    }
                    if (y) try {
                        return D.apply(i, v.querySelectorAll(y)), i
                    } catch (t) {} finally {
                        c === b && e.removeAttribute("id")
                    }
                }
            }
            return u(t.replace(W, "$1"), e, i, o)
        }

        function st() {
            var t = [];
            return function e(n, o) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
        }

        function at(t) {
            return t[b] = !0, t
        }

        function ut(t) {
            var e = h.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function lt(t, e) {
            for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e
        }

        function ct(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ft(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function dt(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function ht(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pt(t) {
            return at(function (e) {
                return e = +e, at(function (n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = rt.support = {}, r = rt.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, d = rt.setDocument = function (t) {
                var e, o, s = t ? t.ownerDocument || t : w;
                return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, m = !r(h), w !== h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = ut(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), n.getElementsByTagName = ut(function (t) {
                    return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                }), n.getElementsByClassName = V.test(h.getElementsByClassName), n.getById = ut(function (t) {
                    return p.appendChild(t).id = b, !h.getElementsByName || !h.getElementsByName(b).length
                }), n.getById ? (i.filter.ID = function (t) {
                    var e = t.replace(K, tt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, i.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (t) {
                    var e = t.replace(K, tt);
                    return function (t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, i.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n, i, o, r = e.getElementById(t);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                            for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                }, y = [], g = [], (n.qsa = V.test(h.querySelectorAll)) && (ut(function (t) {
                    p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + q + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + q + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                }), ut(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = h.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + q + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = V.test(v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ut(function (t) {
                    n.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), y.push("!=", H)
                }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), e = V.test(p.compareDocumentPosition), x = e || V.test(p.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, A = e ? function (t, e) {
                    if (t === e) return f = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === h || t.ownerDocument === w && x(w, t) ? -1 : e === h || e.ownerDocument === w && x(w, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return f = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!o || !r) return t === h ? -1 : e === h ? 1 : o ? -1 : r ? 1 : c ? N(c, t) - N(c, e) : 0;
                    if (o === r) return ct(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ct(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }, h) : h
            }, rt.matches = function (t, e) {
                return rt(t, null, null, e)
            }, rt.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== h && d(t), e = e.replace(F, "='$1']"), n.matchesSelector && m && !I[e + " "] && (!y || !y.test(e)) && (!g || !g.test(e))) try {
                    var i = v.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return rt(e, h, null, [t]).length > 0
            }, rt.contains = function (t, e) {
                return (t.ownerDocument || t) !== h && d(t), x(t, e)
            }, rt.attr = function (t, e) {
                (t.ownerDocument || t) !== h && d(t);
                var o = i.attrHandle[e.toLowerCase()],
                    r = o && _.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, rt.escape = function (t) {
                return (t + "").replace(et, nt)
            }, rt.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, rt.uniqueSort = function (t) {
                var e, i = [],
                    o = 0,
                    r = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(A), f) {
                    for (; e = t[r++];) e === t[r] && (o = i.push(r));
                    for (; o--;) t.splice(i[o], 1)
                }
                return c = null, t
            }, o = rt.getText = function (t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += o(e);
                return n
            }, (i = rt.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(K, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(K, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(K, tt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = S[t + " "];
                        return e || (e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) && S(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, e, n) {
                        return function (i) {
                            var o = rt.attr(i, t);
                            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, u) {
                            var l, c, f, d, h, p, m = r !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                y = a && e.nodeName.toLowerCase(),
                                v = !u && !a,
                                x = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && v) {
                                    for (x = (h = (l = (c = (f = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === C && l[1]) && l[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (x = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++x && d === e) {
                                            c[t] = [C, h, x];
                                            break
                                        }
                                } else if (v && (x = h = (l = (c = (f = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === C && l[1]), !1 === x)
                                    for (;
                                        (d = ++h && d && d[m] || (x = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [C, x]), d !== e)););
                                return (x -= o) === i || x % i == 0 && x / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, e) {
                        var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                        return o[b] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, n) {
                            for (var i, r = o(t, e), s = r.length; s--;) t[i = N(t, r[s])] = !(n[i] = r[s])
                        }) : function (t) {
                            return o(t, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: at(function (t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(W, "$1"));
                        return i[b] ? at(function (t, e, n, o) {
                            for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function (t, o, r) {
                            return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: at(function (t) {
                        return function (e) {
                            return rt(t, e).length > 0
                        }
                    }),
                    contains: at(function (t) {
                        return t = t.replace(K, tt),
                            function (e) {
                                return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                            }
                    }),
                    lang: at(function (t) {
                        return Y.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(K, tt).toLowerCase(),
                            function (e) {
                                var n;
                                do {
                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === p
                    },
                    focus: function (t) {
                        return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: ht(!1),
                    disabled: ht(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function (t) {
                        return G.test(t.nodeName)
                    },
                    input: function (t) {
                        return X.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pt(function () {
                        return [0]
                    }),
                    last: pt(function (t, e) {
                        return [e - 1]
                    }),
                    eq: pt(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: pt(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: pt(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: pt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: pt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[e] = ft(e);
        for (e in {
                submit: !0,
                reset: !0
            }) i.pseudos[e] = dt(e);

        function gt() {}

        function yt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function vt(t, e, n) {
            var i = e.dir,
                o = e.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = T++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || s) return t(e, n, o);
                return !1
            } : function (e, n, u) {
                var l, c, f, d = [C, a];
                if (u) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || s) && t(e, n, u)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || s)
                            if (c = (f = e[b] || (e[b] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((l = c[r]) && l[0] === C && l[1] === a) return d[2] = l[2];
                                if (c[r] = d, d[2] = t(e, n, u)) return !0
                            } return !1
            }
        }

        function xt(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function bt(t, e, n, i, o) {
            for (var r, s = [], a = 0, u = t.length, l = null != e; a < u; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), l && e.push(a)));
            return s
        }

        function wt(t, e, n, i, o, r) {
            return i && !i[b] && (i = wt(i)), o && !o[b] && (o = wt(o, r)), at(function (r, s, a, u) {
                var l, c, f, d = [],
                    h = [],
                    p = s.length,
                    m = r || function (t, e, n) {
                        for (var i = 0, o = e.length; i < o; i++) rt(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    g = !t || !r && e ? m : bt(m, d, t, a, u),
                    y = n ? o || (r ? t : p || i) ? [] : s : g;
                if (n && n(g, y, a, u), i)
                    for (l = bt(y, h), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (y[h[c]] = !(g[h[c]] = f));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(g[c] = f);
                            o(null, y = [], l, u)
                        }
                        for (c = y.length; c--;)(f = y[c]) && (l = o ? N(r, f) : d[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else y = bt(y === s ? y.splice(p, y.length) : y), o ? o(null, s, y, u) : D.apply(s, y)
            })
        }

        function Ct(t) {
            for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], u = s ? 1 : 0, c = vt(function (t) {
                    return t === e
                }, a, !0), f = vt(function (t) {
                    return N(e, t) > -1
                }, a, !0), d = [function (t, n, i) {
                    var o = !s && (i || n !== l) || ((e = n).nodeType ? c(t, n, i) : f(t, n, i));
                    return e = null, o
                }]; u < r; u++)
                if (n = i.relative[t[u].type]) d = [vt(xt(d), n)];
                else {
                    if ((n = i.filter[t[u].type].apply(null, t[u].matches))[b]) {
                        for (o = ++u; o < r && !i.relative[t[o].type]; o++);
                        return wt(u > 1 && xt(d), u > 1 && yt(t.slice(0, u - 1).concat({
                            value: " " === t[u - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, u < o && Ct(t.slice(u, o)), o < r && Ct(t = t.slice(o)), o < r && yt(t))
                    }
                    d.push(n)
                }
            return xt(d)
        }
        return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt, s = rt.tokenize = function (t, e) {
            var n, o, r, s, a, u, l, c = E[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, u = [], l = i.preFilter; a;) {
                for (s in n && !(o = M.exec(a)) || (o && (a = a.slice(o[0].length) || a), u.push(r = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(W, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = Q[s].exec(a)) || l[s] && !(o = l[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? rt.error(t) : E(t, u).slice(0)
        }, a = rt.compile = function (t, e) {
            var n, o, r, a, u, c, f = [],
                p = [],
                g = I[t + " "];
            if (!g) {
                for (e || (e = s(t)), n = e.length; n--;)(g = Ct(e[n]))[b] ? f.push(g) : p.push(g);
                (g = I(t, (o = p, r = f, a = r.length > 0, u = o.length > 0, c = function (t, e, n, s, c) {
                    var f, p, g, y = 0,
                        v = "0",
                        x = t && [],
                        b = [],
                        w = l,
                        T = t || u && i.find.TAG("*", c),
                        S = C += null == w ? 1 : Math.random() || .1,
                        E = T.length;
                    for (c && (l = e === h || e || c); v !== E && null != (f = T[v]); v++) {
                        if (u && f) {
                            for (p = 0, e || f.ownerDocument === h || (d(f), n = !m); g = o[p++];)
                                if (g(f, e || h, n)) {
                                    s.push(f);
                                    break
                                }
                            c && (C = S)
                        }
                        a && ((f = !g && f) && y--, t && x.push(f))
                    }
                    if (y += v, a && v !== y) {
                        for (p = 0; g = r[p++];) g(x, b, e, n);
                        if (t) {
                            if (y > 0)
                                for (; v--;) x[v] || b[v] || (b[v] = k.call(s));
                            b = bt(b)
                        }
                        D.apply(s, b), c && !t && b.length > 0 && y + r.length > 1 && rt.uniqueSort(s)
                    }
                    return c && (C = S, l = w), x
                }, a ? at(c) : c))).selector = t
            }
            return g
        }, u = rt.select = function (t, e, n, o) {
            var r, u, l, c, f, d = "function" == typeof t && t,
                h = !o && s(t = d.selector || t);
            if (n = n || [], 1 === h.length) {
                if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === e.nodeType && m && i.relative[u[1].type]) {
                    if (!(e = (i.find.ID(l.matches[0].replace(K, tt), e) || [])[0])) return n;
                    d && (e = e.parentNode), t = t.slice(u.shift().value.length)
                }
                for (r = Q.needsContext.test(t) ? 0 : u.length; r-- && (l = u[r], !i.relative[c = l.type]);)
                    if ((f = i.find[c]) && (o = f(l.matches[0].replace(K, tt), Z.test(u[0].type) && mt(e.parentNode) || e))) {
                        if (u.splice(r, 1), !(t = o.length && yt(u))) return D.apply(n, o), n;
                        break
                    }
            }
            return (d || a(t, h))(o, e, !m, n, !e || Z.test(t) && mt(e.parentNode) || e), n
        }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = ut(function (t) {
            return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
        }), ut(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), n.attributes && ut(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || lt("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), ut(function (t) {
            return null == t.getAttribute("disabled")
        }) || lt(O, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), rt
    }(t);
    b.find = T, b.expr = T.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = T.uniqueSort, b.text = T.getText, b.isXMLDoc = T.isXML, b.contains = T.contains, b.escapeSelector = T.escape;
    var S = function (t, e, n) {
            for (var i = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && b(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        E = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        I = b.expr.match.needsContext;

    function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(t, e, n) {
        return m(e) ? b.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? b.grep(t, function (t) {
            return t === e !== n
        }) : "string" != typeof e ? b.grep(t, function (t) {
            return u.call(e, t) > -1 !== n
        }) : b.filter(e, t, n)
    }
    b.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? b.find.matchesSelector(i, t) ? [i] : [] : b.find.matches(t, b.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, b.fn.extend({
        find: function (t) {
            var e, n, i = this.length,
                o = this;
            if ("string" != typeof t) return this.pushStack(b(t).filter(function () {
                for (e = 0; e < i; e++)
                    if (b.contains(o[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) b.find(t, o[e], n);
            return i > 1 ? b.uniqueSort(n) : n
        },
        filter: function (t) {
            return this.pushStack(L(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(L(this, t || [], !0))
        },
        is: function (t) {
            return !!L(this, "string" == typeof t && I.test(t) ? b(t) : t || [], !1).length
        }
    });
    var k, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function (t, e, n) {
        var o, r;
        if (!t) return this;
        if (n = n || k, "string" == typeof t) {
            if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : j.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (o[1]) {
                if (e = e instanceof b ? e[0] : e, b.merge(this, b.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), _.test(o[1]) && b.isPlainObject(e))
                    for (o in e) m(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(b) : b.makeArray(t, this)
    }).prototype = b.fn, k = b(i);
    var D = /^(?:parents|prev(?:Until|All))/,
        z = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function N(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    b.fn.extend({
        has: function (t) {
            var e = b(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (b.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof t && b(t);
            if (!I.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? b.uniqueSort(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? u.call(b(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), b.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return S(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return S(t, "parentNode", n)
        },
        next: function (t) {
            return N(t, "nextSibling")
        },
        prev: function (t) {
            return N(t, "previousSibling")
        },
        nextAll: function (t) {
            return S(t, "nextSibling")
        },
        prevAll: function (t) {
            return S(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return S(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return S(t, "previousSibling", n)
        },
        siblings: function (t) {
            return E((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return E(t.firstChild)
        },
        contents: function (t) {
            return A(t, "iframe") ? t.contentDocument : (A(t, "template") && (t = t.content || t), b.merge([], t.childNodes))
        }
    }, function (t, e) {
        b.fn[t] = function (n, i) {
            var o = b.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = b.filter(i, o)), this.length > 1 && (z[t] || b.uniqueSort(o), D.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function q(t) {
        return t
    }

    function P(t) {
        throw t
    }

    function $(t, e, n, i) {
        var o;
        try {
            t && m(o = t.promise) ? o.call(t).done(e).fail(n) : t && m(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    b.Callbacks = function (t) {
        var e, n;
        t = "string" == typeof t ? (e = t, n = {}, b.each(e.match(O) || [], function (t, e) {
            n[e] = !0
        }), n) : b.extend({}, t);
        var i, o, r, s, a = [],
            u = [],
            l = -1,
            c = function () {
                for (s = s || t.once, r = i = !0; u.length; l = -1)
                    for (o = u.shift(); ++l < a.length;) !1 === a[l].apply(o[0], o[1]) && t.stopOnFalse && (l = a.length, o = !1);
                t.memory || (o = !1), i = !1, s && (a = o ? [] : "")
            },
            f = {
                add: function () {
                    return a && (o && !i && (l = a.length - 1, u.push(o)), function e(n) {
                        b.each(n, function (n, i) {
                            m(i) ? t.unique && f.has(i) || a.push(i) : i && i.length && "string" !== x(i) && e(i)
                        })
                    }(arguments), o && !i && c()), this
                },
                remove: function () {
                    return b.each(arguments, function (t, e) {
                        for (var n;
                            (n = b.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (t) {
                    return t ? b.inArray(t, a) > -1 : a.length > 0
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = u = [], a = o = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = u = [], o || i || (a = o = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (t, e) {
                    return s || (e = [t, (e = e || []).slice ? e.slice() : e], u.push(e), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return f
    }, b.extend({
        Deferred: function (e) {
            var n = [["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2], ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]],
                i = "pending",
                o = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return o.then(null, t)
                    },
                    pipe: function () {
                        var t = arguments;
                        return b.Deferred(function (e) {
                            b.each(n, function (n, i) {
                                var o = m(t[i[4]]) && t[i[4]];
                                r[i[1]](function () {
                                    var t = o && o.apply(this, arguments);
                                    t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (e, i, o) {
                        var r = 0;

                        function s(e, n, i, o) {
                            return function () {
                                var a = this,
                                    u = arguments,
                                    l = function () {
                                        var t, l;
                                        if (!(e < r)) {
                                            if ((t = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = t && ("object" == typeof t || "function" == typeof t) && t.then, m(l) ? o ? l.call(t, s(r, n, q, o), s(r, n, P, o)) : (r++, l.call(t, s(r, n, q, o), s(r, n, P, o), s(r, n, q, n.notifyWith))) : (i !== q && (a = void 0, u = [t]), (o || n.resolveWith)(a, u))
                                        }
                                    },
                                    c = o ? l : function () {
                                        try {
                                            l()
                                        } catch (t) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= r && (i !== P && (a = void 0, u = [t]), n.rejectWith(a, u))
                                        }
                                    };
                                e ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }
                        return b.Deferred(function (t) {
                            n[0][3].add(s(0, t, m(o) ? o : q, t.notifyWith)), n[1][3].add(s(0, t, m(e) ? e : q)), n[2][3].add(s(0, t, m(i) ? i : P))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? b.extend(t, o) : o
                    }
                },
                r = {};
            return b.each(n, function (t, e) {
                var s = e[2],
                    a = e[5];
                o[e[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), r[e[0]] = function () {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = s.fireWith
            }), o.promise(r), e && e.call(r, r), r
        },
        when: function (t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                o = r.call(arguments),
                s = b.Deferred(),
                a = function (t) {
                    return function (n) {
                        i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || s.resolveWith(i, o)
                    }
                };
            if (e <= 1 && ($(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || m(o[n] && o[n].then))) return s.then();
            for (; n--;) $(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && H.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, b.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var R = b.Deferred();

    function W() {
        i.removeEventListener("DOMContentLoaded", W), t.removeEventListener("load", W), b.ready()
    }
    b.fn.ready = function (t) {
        return R.then(t).catch(function (t) {
            b.readyException(t)
        }), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== t && --b.readyWait > 0 || R.resolveWith(i, [b]))
        }
    }), b.ready.then = R.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(b.ready) : (i.addEventListener("DOMContentLoaded", W), t.addEventListener("load", W));
    var M = function (t, e, n, i, o, r, s) {
            var a = 0,
                u = t.length,
                l = null == n;
            if ("object" === x(n))
                for (a in o = !0, n) M(t, e, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, m(i) || (s = !0), l && (s ? (e.call(t, i), e = null) : (l = e, e = function (t, e, n) {
                    return l.call(b(t), n)
                })), e))
                for (; a < u; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : l ? e.call(t) : u ? e(t[0], n) : r
        },
        B = /^-ms-/,
        F = /-([a-z])/g;

    function U(t, e) {
        return e.toUpperCase()
    }

    function Y(t) {
        return t.replace(B, "ms-").replace(F, U)
    }
    var Q = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function X() {
        this.expando = b.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[Y(e)] = n;
            else
                for (i in e) o[Y(i)] = e[i];
            return o
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
        },
        access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(O) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || b.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !b.isEmptyObject(e)
        }
    };
    var G = new X,
        V = new X,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function K(t, e, n) {
        var i, o;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o)
                } catch (t) {}
                V.set(t, e, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function (t) {
            return V.hasData(t) || G.hasData(t)
        },
        data: function (t, e, n) {
            return V.access(t, e, n)
        },
        removeData: function (t, e) {
            V.remove(t, e)
        },
        _data: function (t, e, n) {
            return G.access(t, e, n)
        },
        _removeData: function (t, e) {
            G.remove(t, e)
        }
    }), b.fn.extend({
        data: function (t, e) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = V.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)), K(r, i, o[i]));
                    G.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                V.set(this, t)
            }) : M(this, function (e) {
                var n;
                if (r && void 0 === e) {
                    if (void 0 !== (n = V.get(r, t))) return n;
                    if (void 0 !== (n = K(r, t))) return n
                } else this.each(function () {
                    V.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                V.remove(this, t)
            })
        }
    }), b.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = G.get(t, e), n && (!i || Array.isArray(n) ? i = G.access(t, e, b.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = b.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = b._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
                b.dequeue(t, e)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return G.get(t, n) || G.access(t, n, {
                empty: b.Callbacks("once memory").add(function () {
                    G.remove(t, [e + "queue", n])
                })
            })
        }
    }), b.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? b.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = b.queue(this, t, e);
                b._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && b.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                b.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                o = b.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = G.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && b.contains(t.ownerDocument, t) && "none" === b.css(t, "display")
        },
        ot = function (t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
            return o
        };

    function rt(t, e, n, i) {
        var o, r, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return b.css(t, e, "")
            },
            u = a(),
            l = n && n[3] || (b.cssNumber[e] ? "" : "px"),
            c = (b.cssNumber[e] || "px" !== l && +u) && et.exec(b.css(t, e));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--;) b.style(t, e, c + l), (1 - r) * (1 - (r = a() / u || .5)) <= 0 && (s = 0), c /= r;
            c *= 2, b.style(t, e, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = o)), o
    }
    var st = {};

    function at(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++)(i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = G.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && it(i) && (o[r] = (u = void 0, l = void 0, void 0, f = void 0, l = (a = i).ownerDocument, c = a.nodeName, (f = st[c]) || (u = l.body.appendChild(l.createElement(c)), f = b.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), st[c] = f, f)))) : "none" !== n && (o[r] = "none", G.set(i, "display", n)));
        var a, u, l, c, f;
        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
    }
    b.fn.extend({
        show: function () {
            return at(this, !0)
        },
        hide: function () {
            return at(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                it(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var ut = /^(?:checkbox|radio)$/i,
        lt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ct = /^$|^module$|\/(?:java|ecma)script/i,
        ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function dt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? b.merge([t], n) : n
    }

    function ht(t, e) {
        for (var n = 0, i = t.length; n < i; n++) G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"))
    }
    ft.optgroup = ft.option, ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td;
    var pt, mt, gt = /<|&#?\w+;/;

    function yt(t, e, n, i, o) {
        for (var r, s, a, u, l, c, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
            if ((r = t[h]) || 0 === r)
                if ("object" === x(r)) b.merge(d, r.nodeType ? [r] : r);
                else if (gt.test(r)) {
            for (s = s || f.appendChild(e.createElement("div")), a = (lt.exec(r) || ["", ""])[1].toLowerCase(), u = ft[a] || ft._default, s.innerHTML = u[1] + b.htmlPrefilter(r) + u[2], c = u[0]; c--;) s = s.lastChild;
            b.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(e.createTextNode(r));
        for (f.textContent = "", h = 0; r = d[h++];)
            if (i && b.inArray(r, i) > -1) o && o.push(r);
            else if (l = b.contains(r.ownerDocument, r), s = dt(f.appendChild(r), "script"), l && ht(s), n)
            for (c = 0; r = s[c++];) ct.test(r.type || "") && n.push(r);
        return f
    }
    pt = i.createDocumentFragment().appendChild(i.createElement("div")), (mt = i.createElement("input")).setAttribute("type", "radio"), mt.setAttribute("checked", "checked"), mt.setAttribute("name", "t"), pt.appendChild(mt), p.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue;
    var vt = i.documentElement,
        xt = /^key/,
        bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        wt = /^([^.]*)(?:\.(.+)|)/;

    function Ct() {
        return !0
    }

    function Tt() {
        return !1
    }

    function St() {
        try {
            return i.activeElement
        } catch (t) {}
    }

    function Et(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) Et(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Tt;
        else if (!o) return t;
        return 1 === r && (s = o, (o = function (t) {
            return b().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = b.guid++)), t.each(function () {
            b.event.add(this, e, o, i, n)
        })
    }
    b.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var r, s, a, u, l, c, f, d, h, p, m, g = G.get(t);
            if (g)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && b.find.matchesSelector(vt, o), n.guid || (n.guid = b.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
                        return void 0 !== b && b.event.triggered !== e.type ? b.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(O) || [""]).length; l--;) h = m = (a = wt.exec(e[l]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = b.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = b.event.special[h] || {}, c = b.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && b.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (d = u[h]) || ((d = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), b.event.global[h] = !0)
        },
        remove: function (t, e, n, i, o) {
            var r, s, a, u, l, c, f, d, h, p, m, g = G.hasData(t) && G.get(t);
            if (g && (u = g.events)) {
                for (l = (e = (e || "").match(O) || [""]).length; l--;)
                    if (h = m = (a = wt.exec(e[l]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = b.event.special[h] || {}, d = u[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) c = d[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, g.handle) || b.removeEvent(t, h, g.handle), delete u[h])
                    } else
                        for (h in u) b.event.remove(t, h + e[l], n, i, !0);
                b.isEmptyObject(u) && G.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, o, r, s, a = b.event.fix(t),
                u = new Array(arguments.length),
                l = (G.get(this, "events") || {})[a.type] || [],
                c = b.event.special[a.type] || {};
            for (u[0] = a, e = 1; e < arguments.length; e++) u[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = b.event.handlers.call(this, a, l), e = 0;
                    (o = s[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((b.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (t, e) {
            var n, i, o, r, s, a = [],
                u = e.delegateCount,
                l = t.target;
            if (u && l.nodeType && !("click" === t.type && t.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                        for (r = [], s = {}, n = 0; n < u; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? b(o, this).index(l) > -1 : b.find(o, this, null, [l]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return l = this, u < e.length && a.push({
                elem: l,
                handlers: e.slice(u)
            }), a
        },
        addProp: function (t, e) {
            Object.defineProperty(b.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[b.expando] ? t : new b.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== St() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === St() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return A(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, b.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, b.Event = function (t, e) {
        if (!(this instanceof b.Event)) return new b.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : Tt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && b.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Tt,
        isPropagationStopped: Tt,
        isImmediatePropagationStopped: Tt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && bt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, b.event.addProp), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        b.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = t.relatedTarget,
                    o = t.handleObj;
                return i && (i === this || b.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), b.fn.extend({
        on: function (t, e, n, i) {
            return Et(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return Et(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, b(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Tt), this.each(function () {
                b.event.remove(this, t, n, e)
            })
        }
    });
    var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        At = /<script|<style|<link/i,
        _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function kt(t, e) {
        return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && b(t).children("tbody")[0] || t
    }

    function jt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Dt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function zt(t, e) {
        var n, i, o, r, s, a, u, l;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (r = G.access(t), s = G.set(e, r), l = r.events))
                for (o in delete s.handle, s.events = {}, l)
                    for (n = 0, i = l[o].length; n < i; n++) b.event.add(e, o, l[o][n]);
            V.hasData(t) && (a = V.access(t), u = b.extend({}, a), V.set(e, u))
        }
    }

    function Nt(t, e, n, i) {
        e = s.apply([], e);
        var o, r, a, u, l, c, f = 0,
            d = t.length,
            h = d - 1,
            g = e[0],
            y = m(g);
        if (y || d > 1 && "string" == typeof g && !p.checkClone && _t.test(g)) return t.each(function (o) {
            var r = t.eq(o);
            y && (e[0] = g.call(this, o, r.html())), Nt(r, e, n, i)
        });
        if (d && (r = (o = yt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (u = (a = b.map(dt(o, "script"), jt)).length; f < d; f++) l = o, f !== h && (l = b.clone(l, !0, !0), u && b.merge(a, dt(l, "script"))), n.call(t[f], l, f);
            if (u)
                for (c = a[a.length - 1].ownerDocument, b.map(a, Dt), f = 0; f < u; f++) l = a[f], ct.test(l.type || "") && !G.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && b._evalUrl(l.src) : v(l.textContent.replace(Lt, ""), c, l))
        }
        return t
    }

    function Ot(t, e, n) {
        for (var i, o = e ? b.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || b.cleanData(dt(i)), i.parentNode && (n && b.contains(i.ownerDocument, i) && ht(dt(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    b.extend({
        htmlPrefilter: function (t) {
            return t.replace(It, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, o, r, s, a, u, l, c = t.cloneNode(!0),
                f = b.contains(t.ownerDocument, t);
            if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || b.isXMLDoc(t)))
                for (s = dt(c), i = 0, o = (r = dt(t)).length; i < o; i++) a = r[i], u = s[i], void 0, "input" === (l = u.nodeName.toLowerCase()) && ut.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (r = r || dt(t), s = s || dt(c), i = 0, o = r.length; i < o; i++) zt(r[i], s[i]);
                else zt(t, c);
            return (s = dt(c, "script")).length > 0 && ht(s, !f && dt(t, "script")), c
        },
        cleanData: function (t) {
            for (var e, n, i, o = b.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (Q(n)) {
                    if (e = n[G.expando]) {
                        if (e.events)
                            for (i in e.events) o[i] ? b.event.remove(n, i) : b.removeEvent(n, i, e.handle);
                        n[G.expando] = void 0
                    }
                    n[V.expando] && (n[V.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function (t) {
            return Ot(this, t, !0)
        },
        remove: function (t) {
            return Ot(this, t)
        },
        text: function (t) {
            return M(this, function (t) {
                return void 0 === t ? b.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return Nt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || kt(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return Nt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = kt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return Nt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return Nt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (b.cleanData(dt(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return b.clone(this, t, e)
            })
        },
        html: function (t) {
            return M(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !ft[(lt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = b.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (b.cleanData(dt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return Nt(this, arguments, function (e) {
                var n = this.parentNode;
                b.inArray(this, t) < 0 && (b.cleanData(dt(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        b.fn[t] = function (t) {
            for (var n, i = [], o = b(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), b(o[s])[e](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var qt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Pt = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        $t = new RegExp(nt.join("|"), "i");

    function Ht(t, e, n) {
        var i, o, r, s, a = t.style;
        return (n = n || Pt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || b.contains(t.ownerDocument, t) || (s = b.style(t, e)), !p.pixelBoxStyles() && qt.test(s) && $t.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function Rt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", vt.appendChild(l).appendChild(c);
                var e = t.getComputedStyle(c);
                o = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), r = 36 === n(e.width), c.style.position = "absolute", s = 36 === c.offsetWidth || "absolute", vt.removeChild(l), c = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var o, r, s, a, u, l = i.createElement("div"),
            c = i.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, b.extend(p, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), a
            },
            pixelPosition: function () {
                return e(), o
            },
            reliableMarginLeft: function () {
                return e(), u
            },
            scrollboxSize: function () {
                return e(), s
            }
        }))
    }();
    var Wt = /^(none|table(?!-c[ea]).+)/,
        Mt = /^--/,
        Bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ut = ["Webkit", "Moz", "ms"],
        Yt = i.createElement("div").style;

    function Qt(t) {
        var e = b.cssProps[t];
        return e || (e = b.cssProps[t] = function (t) {
            if (t in Yt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Ut.length; n--;)
                if ((t = Ut[n] + e) in Yt) return t
        }(t) || t), e
    }

    function Xt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Gt(t, e, n, i, o, r) {
        var s = "width" === e ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (u += b.css(t, n + nt[s], !0, o)), i ? ("content" === n && (u -= b.css(t, "padding" + nt[s], !0, o)), "margin" !== n && (u -= b.css(t, "border" + nt[s] + "Width", !0, o))) : (u += b.css(t, "padding" + nt[s], !0, o), "padding" !== n ? u += b.css(t, "border" + nt[s] + "Width", !0, o) : a += b.css(t, "border" + nt[s] + "Width", !0, o));
        return !i && r >= 0 && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - u - a - .5))), u
    }

    function Vt(t, e, n) {
        var i = Pt(t),
            o = Ht(t, e, i),
            r = "border-box" === b.css(t, "boxSizing", !1, i),
            s = r;
        if (qt.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return s = s && (p.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === b.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + Gt(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function Jt(t, e, n, i, o) {
        return new Jt.prototype.init(t, e, n, i, o)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Ht(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = Y(e),
                    u = Mt.test(e),
                    l = t.style;
                if (u || (e = Qt(a)), s = b.cssHooks[e] || b.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                "string" == (r = typeof n) && (o = et.exec(n)) && o[1] && (n = rt(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (b.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (u ? l.setProperty(e, n) : l[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var o, r, s, a = Y(e);
            return Mt.test(e) || (e = Qt(a)), (s = b.cssHooks[e] || b.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Ht(t, e, i)), "normal" === o && e in Ft && (o = Ft[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), b.each(["height", "width"], function (t, e) {
        b.cssHooks[e] = {
            get: function (t, n, i) {
                if (n) return !Wt.test(b.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Vt(t, e, i) : ot(t, Bt, function () {
                    return Vt(t, e, i)
                })
            },
            set: function (t, n, i) {
                var o, r = Pt(t),
                    s = "border-box" === b.css(t, "boxSizing", !1, r),
                    a = i && Gt(t, e, i, s, r);
                return s && p.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Gt(t, e, "border", !1, r) - .5)), a && (o = et.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = b.css(t, e)), Xt(0, n, a)
            }
        }
    }), b.cssHooks.marginLeft = Rt(p.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - ot(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        b.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + nt[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== t && (b.cssHooks[t + e].set = Xt)
    }), b.fn.extend({
        css: function (t, e) {
            return M(this, function (t, e, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = Pt(t), o = e.length; s < o; s++) r[e[s]] = b.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? b.style(t, e, n) : b.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), b.Tween = Jt, Jt.prototype = {
        constructor: Jt,
        init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || b.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = Jt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Jt.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = Jt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = b.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Jt.propHooks._default.set(this), this
        }
    }, Jt.prototype.init.prototype = Jt.prototype, Jt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = b.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                b.fx.step[t.prop] ? b.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[b.cssProps[t.prop]] && !b.cssHooks[t.prop] ? t.elem[t.prop] = t.now : b.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Jt.propHooks.scrollTop = Jt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, b.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = Jt.prototype.init, b.fx.step = {};
    var Zt, Kt, te, ee, ne = /^(?:toggle|show|hide)$/,
        ie = /queueHooks$/;

    function oe() {
        Kt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(oe) : t.setTimeout(oe, b.fx.interval), b.fx.tick())
    }

    function re() {
        return t.setTimeout(function () {
            Zt = void 0
        }), Zt = Date.now()
    }

    function se(t, e) {
        var n, i = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = nt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
    }

    function ae(t, e, n) {
        for (var i, o = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function ue(t, e, n) {
        var i, o, r = 0,
            s = ue.prefilters.length,
            a = b.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (o) return !1;
                for (var e = Zt || re(), n = Math.max(0, l.startTime + l.duration - e), i = 1 - (n / l.duration || 0), r = 0, s = l.tweens.length; r < s; r++) l.tweens[r].run(i);
                return a.notifyWith(t, [l, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l]), !1)
            },
            l = a.promise({
                elem: t,
                props: b.extend({}, e),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Zt || re(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = b.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) l.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (function (t, e) {
                var n, i, o, r, s;
                for (n in t)
                    if (o = e[i = Y(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = b.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                    else e[i] = o
            }(c, l.opts.specialEasing); r < s; r++)
            if (i = ue.prefilters[r].call(l, t, c, l.opts)) return m(i.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
        return b.map(c, ae, l), m(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), b.fx.timer(b.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    b.Animation = b.extend(ue, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return rt(n.elem, t, et.exec(e), n), n
            }]
        },
        tweener: function (t, e) {
            m(t) ? (e = t, t = ["*"]) : t = t.match(O);
            for (var n, i = 0, o = t.length; i < o; i++) n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e)
        },
        prefilters: [function (t, e, n) {
            var i, o, r, s, a, u, l, c, f = "width" in e || "height" in e,
                d = this,
                h = {},
                p = t.style,
                m = t.nodeType && it(t),
                g = G.get(t, "fxshow");
            for (i in n.queue || (null == (s = b._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function () {
                    d.always(function () {
                        s.unqueued--, b.queue(t, "fx").length || s.empty.fire()
                    })
                })), e)
                if (o = e[i], ne.test(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    h[i] = g && g[i] || b.style(t, i)
                }
            if ((u = !b.isEmptyObject(e)) || !b.isEmptyObject(h))
                for (i in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = G.get(t, "display")), "none" === (c = b.css(t, "display")) && (l ? c = l : (at([t], !0), l = t.style.display || l, c = b.css(t, "display"), at([t]))), ("inline" === c || "inline-block" === c && null != l) && "none" === b.css(t, "float") && (u || (d.done(function () {
                        p.display = l
                    }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), u = !1, h) u || (g ? "hidden" in g && (m = g.hidden) : g = G.access(t, "fxshow", {
                    display: l
                }), r && (g.hidden = !m), m && at([t], !0), d.done(function () {
                    for (i in m || at([t]), G.remove(t, "fxshow"), h) b.style(t, i, h[i])
                })), u = ae(m ? g[i] : 0, i, d), i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (t, e) {
            e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
        }
    }), b.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? b.extend({}, t) : {
            complete: n || !n && e || m(t) && t,
            duration: t,
            easing: n && e || e && !m(e) && e
        };
        return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in b.fx.speeds ? i.duration = b.fx.speeds[i.duration] : i.duration = b.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            m(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue)
        }, i
    }, b.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(it).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (t, e, n, i) {
            var o = b.isEmptyObject(t),
                r = b.speed(e, n, i),
                s = function () {
                    var e = ue(this, b.extend({}, t), r);
                    (o || G.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0,
                    o = null != t && t + "queueHooks",
                    r = b.timers,
                    s = G.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && ie.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                !e && n || b.dequeue(this, t)
            })
        },
        finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, n = G.get(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = b.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, b.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), b.each(["toggle", "show", "hide"], function (t, e) {
        var n = b.fn[e];
        b.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(se(e, !0), t, i, o)
        }
    }), b.each({
        slideDown: se("show"),
        slideUp: se("hide"),
        slideToggle: se("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        b.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), b.timers = [], b.fx.tick = function () {
        var t, e = 0,
            n = b.timers;
        for (Zt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || b.fx.stop(), Zt = void 0
    }, b.fx.timer = function (t) {
        b.timers.push(t), b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Kt || (Kt = !0, oe())
    }, b.fx.stop = function () {
        Kt = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fn.delay = function (e, n) {
        return e = b.fx && b.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function () {
                t.clearTimeout(o)
            }
        })
    }, te = i.createElement("input"), ee = i.createElement("select").appendChild(i.createElement("option")), te.type = "checkbox", p.checkOn = "" !== te.value, p.optSelected = ee.selected, (te = i.createElement("input")).value = "t", te.type = "radio", p.radioValue = "t" === te.value;
    var le, ce = b.expr.attrHandle;
    b.fn.extend({
        attr: function (t, e) {
            return M(this, b.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                b.removeAttr(this, t)
            })
        }
    }), b.extend({
        attr: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? b.prop(t, e, n) : (1 === r && b.isXMLDoc(t) || (o = b.attrHooks[e.toLowerCase()] || (b.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void b.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = b.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!p.radioValue && "radio" === e && A(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i = 0,
                o = e && e.match(O);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) t.removeAttribute(n)
        }
    }), le = {
        set: function (t, e, n) {
            return !1 === e ? b.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ce[e] || b.find.attr;
        ce[e] = function (t, e, i) {
            var o, r, s = e.toLowerCase();
            return i || (r = ce[s], ce[s] = o, o = null != n(t, e, i) ? s : null, ce[s] = r), o
        }
    });
    var fe = /^(?:input|select|textarea|button)$/i,
        de = /^(?:a|area)$/i;

    function he(t) {
        return (t.match(O) || []).join(" ")
    }

    function pe(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function me(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
    }
    b.fn.extend({
        prop: function (t, e) {
            return M(this, b.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[b.propFix[t] || t]
            })
        }
    }), b.extend({
        prop: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && b.isXMLDoc(t) || (e = b.propFix[e] || e, o = b.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = b.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : fe.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (b.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        b.propFix[this.toLowerCase()] = this
    }), b.fn.extend({
        addClass: function (t) {
            var e, n, i, o, r, s, a, u = 0;
            if (m(t)) return this.each(function (e) {
                b(this).addClass(t.call(this, e, pe(this)))
            });
            if ((e = me(t)).length)
                for (; n = this[u++];)
                    if (o = pe(n), i = 1 === n.nodeType && " " + he(o) + " ") {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = he(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, o, r, s, a, u = 0;
            if (m(t)) return this.each(function (e) {
                b(this).removeClass(t.call(this, e, pe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = me(t)).length)
                for (; n = this[u++];)
                    if (o = pe(n), i = 1 === n.nodeType && " " + he(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        o !== (a = he(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t,
                i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function (n) {
                b(this).toggleClass(t.call(this, n, pe(this), e), e)
            }) : this.each(function () {
                var e, o, r, s;
                if (i)
                    for (o = 0, r = b(this), s = me(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = pe(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + he(pe(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var ge = /\r/g;
    b.fn.extend({
        val: function (t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = m(t), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = i ? t.call(this, n, b(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = b.map(o, function (t) {
                    return null == t ? "" : t + ""
                })), (e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(ge, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = b.find.attr(t, "value");
                    return null != e ? e : he(b.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, n, i, o = t.options,
                        r = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        u = s ? r + 1 : o.length;
                    for (i = r < 0 ? u : s ? r : 0; i < u; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (e = b(n).val(), s) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function (t, e) {
                    for (var n, i, o = t.options, r = b.makeArray(e), s = o.length; s--;)((i = o[s]).selected = b.inArray(b.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = b.inArray(b(t).val(), e) > -1
            }
        }, p.checkOn || (b.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), p.focusin = "onfocusin" in t;
    var ye = /^(?:focusinfocus|focusoutblur)$/,
        ve = function (t) {
            t.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function (e, n, o, r) {
            var s, a, u, l, c, d, h, p, y = [o || i],
                v = f.call(e, "type") ? e.type : e,
                x = f.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = p = u = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !ye.test(v + b.event.triggered) && (v.indexOf(".") > -1 && (v = (x = v.split(".")).shift(), x.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[b.expando] ? e : new b.Event(v, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : b.makeArray(n, [e]), h = b.event.special[v] || {}, r || !h.trigger || !1 !== h.trigger.apply(o, n))) {
                if (!r && !h.noBubble && !g(o)) {
                    for (l = h.delegateType || v, ye.test(l + v) || (a = a.parentNode); a; a = a.parentNode) y.push(a), u = a;
                    u === (o.ownerDocument || i) && y.push(u.defaultView || u.parentWindow || t)
                }
                for (s = 0;
                    (a = y[s++]) && !e.isPropagationStopped();) p = a, e.type = s > 1 ? l : h.bindType || v, (d = (G.get(a, "events") || {})[e.type] && G.get(a, "handle")) && d.apply(a, n), (d = c && a[c]) && d.apply && Q(a) && (e.result = d.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = v, r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(y.pop(), n) || !Q(o) || c && m(o[v]) && !g(o) && ((u = o[c]) && (o[c] = null), b.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, ve), o[v](), e.isPropagationStopped() && p.removeEventListener(v, ve), b.event.triggered = void 0, u && (o[c] = u)), e.result
            }
        },
        simulate: function (t, e, n) {
            var i = b.extend(new b.Event, n, {
                type: t,
                isSimulated: !0
            });
            b.event.trigger(i, null, e)
        }
    }), b.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                b.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return b.event.trigger(t, e, n, !0)
        }
    }), p.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            b.event.simulate(e, t.target, b.event.fix(t))
        };
        b.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = G.access(i, e);
                o || i.addEventListener(t, n, !0), G.access(i, e, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = G.access(i, e) - 1;
                o ? G.access(i, e, o) : (i.removeEventListener(t, n, !0), G.remove(i, e))
            }
        }
    });
    var xe = t.location,
        be = Date.now(),
        we = /\?/;
    b.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + e), n
    };
    var Ce = /\[\]$/,
        Te = /\r?\n/g,
        Se = /^(?:submit|button|image|reset|file)$/i,
        Ee = /^(?:input|select|textarea|keygen)/i;

    function Ie(t, e, n, i) {
        var o;
        if (Array.isArray(e)) b.each(e, function (e, o) {
            n || Ce.test(t) ? i(t, o) : Ie(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== x(e)) i(t, e);
        else
            for (o in e) Ie(t + "[" + o + "]", e[o], n, i)
    }
    b.param = function (t, e) {
        var n, i = [],
            o = function (t, e) {
                var n = m(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(t) || t.jquery && !b.isPlainObject(t)) b.each(t, function () {
            o(this.name, this.value)
        });
        else
            for (n in t) Ie(n, t[n], e, o);
        return i.join("&")
    }, b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = b.prop(this, "elements");
                return t ? b.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !b(this).is(":disabled") && Ee.test(this.nodeName) && !Se.test(t) && (this.checked || !ut.test(t))
            }).map(function (t, e) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Te, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Te, "\r\n")
                }
            }).get()
        }
    });
    var Ae = /%20/g,
        _e = /#.*$/,
        Le = /([?&])_=[^&]*/,
        ke = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        je = /^(?:GET|HEAD)$/,
        De = /^\/\//,
        ze = {},
        Ne = {},
        Oe = "*/".concat("*"),
        qe = i.createElement("a");

    function Pe(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(O) || [];
            if (m(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function $e(t, e, n, i) {
        var o = {},
            r = t === Ne;

        function s(a) {
            var u;
            return o[a] = !0, b.each(t[a] || [], function (t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || r || o[l] ? r ? !(u = l) : void 0 : (e.dataTypes.unshift(l), s(l), !1)
            }), u
        }
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function He(t, e) {
        var n, i, o = b.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && b.extend(!0, t, i), t
    }
    qe.href = xe.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? He(He(t, b.ajaxSettings), e) : He(b.ajaxSettings, t)
        },
        ajaxPrefilter: Pe(ze),
        ajaxTransport: Pe(Ne),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o, r, s, a, u, l, c, f, d, h, p = b.ajaxSetup({}, n),
                m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? b(m) : b.event,
                y = b.Deferred(),
                v = b.Callbacks("once memory"),
                x = p.statusCode || {},
                w = {},
                C = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = ke.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return c ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == c && (t = C[t.toLowerCase()] = C[t.toLowerCase()] || t, w[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == c && (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (c) S.always(t[S.status]);
                            else
                                for (e in t) x[e] = [x[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || T;
                        return o && o.abort(e), E(0, e), this
                    }
                };
            if (y.promise(S), p.url = ((e || p.url || xe.href) + "").replace(De, xe.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
                l = i.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), $e(ze, p, n, S), c) return S;
            for (d in (f = b.event && p.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !je.test(p.type), r = p.url.replace(_e, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ae, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (we.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Le, "$1"), h = (we.test(r) ? "&" : "?") + "_=" + be++ + h), p.url = r + h), p.ifModified && (b.lastModified[r] && S.setRequestHeader("If-Modified-Since", b.lastModified[r]), b.etag[r] && S.setRequestHeader("If-None-Match", b.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, S, p) || c)) return S.abort();
            if (T = "abort", v.add(p.complete), S.done(p.success), S.fail(p.error), o = $e(Ne, p, n, S)) {
                if (S.readyState = 1, f && g.trigger("ajaxSend", [S, p]), c) return S;
                p.async && p.timeout > 0 && (u = t.setTimeout(function () {
                    S.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, o.send(w, E)
                } catch (t) {
                    if (c) throw t;
                    E(-1, t)
                }
            } else E(-1, "No Transport");

            function E(e, n, i, a) {
                var l, d, h, w, C, T = n;
                c || (c = !0, u && t.clearTimeout(u), o = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (w = function (t, e, n) {
                    for (var i, o, r, s, a = t.contents, u = t.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                u.unshift(o);
                                break
                            }
                    if (u[0] in n) r = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || t.converters[o + " " + u[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== u[0] && u.unshift(r), n[r]
                }(p, S, i)), w = function (t, e, n, i) {
                    var o, r, s, a, u, l = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
                    for (r = c.shift(); r;)
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = r, r = c.shift())
                            if ("*" === r) r = u;
                            else if ("*" !== u && u !== r) {
                        if (!(s = l[u + " " + r] || l["* " + r]))
                            for (o in l)
                                if ((a = o.split(" "))[1] === r && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[o] : !0 !== l[o] && (r = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + u + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, w, S, l), l ? (p.ifModified && ((C = S.getResponseHeader("Last-Modified")) && (b.lastModified[r] = C), (C = S.getResponseHeader("etag")) && (b.etag[r] = C)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, d = w.data, l = !(h = w.error))) : (h = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (n || T) + "", l ? y.resolveWith(m, [d, T, S]) : y.rejectWith(m, [S, T, h]), S.statusCode(x), x = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [S, p, l ? d : h]), v.fireWith(m, [S, T]), f && (g.trigger("ajaxComplete", [S, p]), --b.active || b.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function (t, e, n) {
            return b.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return b.get(t, void 0, e, "script")
        }
    }), b.each(["get", "post"], function (t, e) {
        b[e] = function (t, n, i, o) {
            return m(n) && (o = o || i, i = n, n = void 0), b.ajax(b.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, b.isPlainObject(t) && t))
        }
    }), b._evalUrl = function (t) {
        return b.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, b.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (m(t) && (t = t.call(this[0])), e = b(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (t) {
            return m(t) ? this.each(function (e) {
                b(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = b(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = m(t);
            return this.each(function (n) {
                b(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                b(this).replaceWith(this.childNodes)
            }), this
        }
    }), b.expr.pseudos.hidden = function (t) {
        return !b.expr.pseudos.visible(t)
    }, b.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, b.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Re = {
            0: 200,
            1223: 204
        },
        We = b.ajaxSettings.xhr();
    p.cors = !!We && "withCredentials" in We, p.ajax = We = !!We, b.ajaxTransport(function (e) {
        var n, i;
        if (p.cors || We && !e.crossDomain) return {
            send: function (o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Re[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), b.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return b.globalEval(t), t
            }
        }
    }), b.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), b.ajaxTransport("script", function (t) {
        var e, n;
        if (t.crossDomain) return {
            send: function (o, r) {
                e = b("<script>").prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function (t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), i.head.appendChild(e[0])
            },
            abort: function () {
                n && n()
            }
        }
    });
    var Me, Be = [],
        Fe = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Be.pop() || b.expando + "_" + be++;
            return this[t] = !0, t
        }
    }), b.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o, r, s, a = !1 !== e.jsonp && (Fe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Fe.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Fe, "$1" + o) : !1 !== e.jsonp && (e.url += (we.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || b.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? b(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Be.push(o)), s && m(r) && r(s[0]), s = r = void 0
        }), "script"
    }), p.createHTMLDocument = ((Me = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Me.childNodes.length), b.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(o)) : e = i), s = !n && [], (r = _.exec(t)) ? [e.createElement(r[1])] : (r = yt([t], e, s), s && s.length && b(s).remove(), b.merge([], r.childNodes)));
        var o, r, s
    }, b.fn.load = function (t, e, n) {
        var i, o, r, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = he(t.slice(a)), t = t.slice(0, a)), m(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && b.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, s.html(i ? b("<div>").append(b.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        b.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), b.expr.pseudos.animated = function (t) {
        return b.grep(b.timers, function (e) {
            return t === e.elem
        }).length
    }, b.offset = {
        setOffset: function (t, e, n) {
            var i, o, r, s, a, u, l = b.css(t, "position"),
                c = b(t),
                f = {};
            "static" === l && (t.style.position = "relative"), a = c.offset(), r = b.css(t, "top"), u = b.css(t, "left"), ("absolute" === l || "fixed" === l) && (r + u).indexOf("auto") > -1 ? (s = (i = c.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(u) || 0), m(e) && (e = e.call(t, n, b.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + o), "using" in e ? e.using.call(t, f) : c.css(f)
        }
    }, b.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                b.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === b.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((o = b(t).offset()).top += b.css(t, "borderTopWidth", !0), o.left += b.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - o.top - b.css(i, "marginTop", !0),
                    left: e.left - o.left - b.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === b.css(t, "position");) t = t.offsetParent;
                return t || vt
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = "pageYOffset" === e;
        b.fn[t] = function (i) {
            return M(this, function (t, i, o) {
                var r;
                if (g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
            }, t, i, arguments.length)
        }
    }), b.each(["top", "left"], function (t, e) {
        b.cssHooks[e] = Rt(p.pixelPosition, function (t, n) {
            if (n) return n = Ht(t, e), qt.test(n) ? b(t).position()[e] + "px" : n
        })
    }), b.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        b.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            b.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return M(this, function (e, n, o) {
                    var r;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? b.css(e, n, a) : b.style(e, n, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        b.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), b.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), b.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), b.proxy = function (t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = r.call(arguments, 2), (o = function () {
            return t.apply(e || this, i.concat(r.call(arguments)))
        }).guid = t.guid = t.guid || b.guid++, o
    }, b.holdReady = function (t) {
        t ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = A, b.isFunction = m, b.isWindow = g, b.camelCase = Y, b.type = x, b.now = Date.now, b.isNumeric = function (t) {
        var e = b.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return b
    });
    var Ue = t.jQuery,
        Ye = t.$;
    return b.noConflict = function (e) {
        return t.$ === b && (t.$ = Ye), e && t.jQuery === b && (t.jQuery = Ue), b
    }, e || (t.jQuery = t.$ = b), b
}),
function () {
    for (var t, e = function () {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = n.length, o = window.console = window.console || {}; i--;) o[t = n[i]] || (o[t] = e)
}(),
function (t, e) {
    "use strict";

    function n(n, i, r, a, u) {
        function l() {
            var e, s, l, d;
            b = t.devicePixelRatio > 1, r = c(r), i.delay >= 0 && setTimeout(function () {
                f(!0)
            }, i.delay), (i.delay < 0 || i.combined) && (a.e = (e = i.throttle, s = function (t) {
                "resize" === t.type && (v = x = -1), f(t.all)
            }, d = 0, function (t, o) {
                function r() {
                    d = +new Date, s.call(n, t)
                }
                var a = +new Date - d;
                l && clearTimeout(l), a > e || !i.enableThrottle || o ? r() : l = setTimeout(r, e - a)
            }), a.a = function (t) {
                t = c(t), r.push.apply(r, t)
            }, a.g = function () {
                return r = o(r).filter(function () {
                    return !o(this).data(i.loadedName)
                })
            }, a.f = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var n = r.filter(function () {
                        return this === t[e]
                    });
                    n.length && f(!1, n)
                }
            }, f(), o(i.appendScroll).on("scroll." + u + " resize." + u, a.e))
        }

        function c(t) {
            for (var r = i.defaultImage, s = i.placeholder, a = i.imageBase, u = i.srcsetAttribute, l = i.loaderAttribute, c = i._f || {}, f = 0, d = (t = o(t).filter(function () {
                    var t = o(this),
                        n = h(this);
                    return !t.data(i.handledName) && (t.attr(i.attribute) || t.attr(u) || t.attr(l) || c[n] !== e)
                }).data("plugin_" + i.name, n)).length; f < d; f++) {
                var m = o(t[f]),
                    g = h(t[f]),
                    y = m.attr(i.imageBaseAttribute) || a;
                g === S && y && m.attr(u) && m.attr(u, p(m.attr(u), y)), c[g] === e || m.attr(l) || m.attr(l, c[g]), g === S && r && !m.attr(E) ? m.attr(E, r) : g === S || !s || m.css(_) && "none" !== m.css(_) || m.css(_, "url('" + s + "')")
            }
            return t
        }

        function f(e, s) {
            if (r.length) {
                for (var a = s || r, u = !1, l = i.imageBase || "", c = i.srcsetAttribute, f = i.handledName, p = 0; p < a.length; p++)
                    if (e || s || (C = a[p], void 0, void 0, void 0, void 0, void 0, T = C.getBoundingClientRect(), A = i.scrollDirection, L = i.threshold, k = (x >= 0 ? x : x = o(t).height()) + L > T.top && -L < T.bottom, j = (v >= 0 ? v : v = o(t).width()) + L > T.left && -L < T.right, "vertical" === A ? k : "horizontal" === A ? j : k && j)) {
                        var m = o(a[p]),
                            g = h(a[p]),
                            y = m.attr(i.attribute),
                            b = m.attr(i.imageBaseAttribute) || l,
                            w = m.attr(i.loaderAttribute);
                        m.data(f) || i.visibleOnly && !m.is(":visible") || !((y || m.attr(c)) && (g === S && (b + y !== m.attr(E) || m.attr(c) !== m.attr(I)) || g !== S && b + y !== m.css(_)) || w) || (u = !0, m.data(f, !0), d(m, g, b, w))
                    }
                var C, T, A, L, k, j;
                u && (r = o(r).filter(function () {
                    return !o(this).data(f)
                }))
            } else i.autoDestroy && n.destroy()
        }

        function d(t, e, n, r) {
            ++y;
            var s = function () {
                g("onError", t), m(), s = o.noop
            };
            g("beforeLoad", t);
            var a = i.attribute,
                u = i.srcsetAttribute,
                l = i.sizesAttribute,
                c = i.retinaAttribute,
                f = i.removeAttribute,
                d = i.loadedName,
                h = t.attr(c);
            if (r) {
                var p = function () {
                    f && t.removeAttr(i.loaderAttribute), t.data(d, !0), g(w, t), setTimeout(m, 1), p = o.noop
                };
                t.off(T).one(T, s).one(C, p), g(r, t, function (e) {
                    e ? (t.off(C), p()) : (t.off(T), s())
                }) || t.trigger(T)
            } else {
                var v = o(new Image);
                v.one(T, s).one(C, function () {
                    t.hide(), e === S ? t.attr(A, v.attr(A)).attr(I, v.attr(I)).attr(E, v.attr(E)) : t.css(_, "url('" + v.attr(E) + "')"), t[i.effect](i.effectTime), f && (t.removeAttr(a + " " + u + " " + c + " " + i.imageBaseAttribute), l !== A && t.removeAttr(l)), t.data(d, !0), g(w, t), v.remove(), m()
                });
                var x = (b && h ? h : t.attr(a)) || "";
                v.attr(A, t.attr(l)).attr(I, t.attr(u)).attr(E, x ? n + x : null), v.complete && v.trigger(C)
            }
        }

        function h(t) {
            return t.tagName.toLowerCase()
        }

        function p(t, e) {
            if (e) {
                var n = t.split(",");
                t = "";
                for (var i = 0, o = n.length; i < o; i++) t += e + n[i].trim() + (i !== o - 1 ? "," : "")
            }
            return t
        }

        function m() {
            --y, r.length || y || g("onFinishedAll")
        }

        function g(t, e, o) {
            return !!(t = i[t]) && (t.apply(n, [].slice.call(arguments, 1)), !0)
        }
        var y = 0,
            v = -1,
            x = -1,
            b = !1,
            w = "afterLoad",
            C = "load",
            T = "error",
            S = "img",
            E = "src",
            I = "srcset",
            A = "sizes",
            _ = "background-image";
        "event" === i.bind || s ? l() : o(t).on(C + "." + u, l)
    }

    function i(i, s) {
        var a = this,
            u = o.extend({}, a.config, s),
            l = {},
            c = u.name + "-" + ++r;
        return a.config = function (t, n) {
            return n === e ? u[t] : (u[t] = n, a)
        }, a.addItems = function (t) {
            return l.a && l.a("string" === o.type(t) ? o(t) : t), a
        }, a.getItems = function () {
            return l.g ? l.g() : {}
        }, a.update = function (t) {
            return l.e && l.e({}, !t), a
        }, a.force = function (t) {
            return l.f && l.f("string" === o.type(t) ? o(t) : t), a
        }, a.loadAll = function () {
            return l.e && l.e({
                all: !0
            }, !0), a
        }, a.destroy = function () {
            return o(u.appendScroll).off("." + c, l.e), o(t).off("." + c), l = {}, e
        }, n(a, u, i, l, c), u.chainable ? i : a
    }
    var o = t.jQuery || t.Zepto,
        r = 0,
        s = !1;
    o.fn.Lazy = o.fn.lazy = function (t) {
        return new i(this, t)
    }, o.Lazy = o.lazy = function (t, n, r) {
        if (o.isFunction(n) && (r = n, n = []), o.isFunction(r)) {
            t = o.isArray(t) ? t : [t], n = o.isArray(n) ? n : [n];
            for (var s = i.prototype.config, a = s._f || (s._f = {}), u = 0, l = t.length; u < l; u++)(s[t[u]] === e || o.isFunction(s[t[u]])) && (s[t[u]] = r);
            for (var c = 0, f = n.length; c < f; c++) a[n[c]] = t[0]
        }
    }, i.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, o(t).on("load", function () {
        s = !0
    })
}(window),
function (t) {
    t.lazy(["av", "audio", "video"], ["audio", "video"], function (e, n) {
        var i = e[0].tagName.toLowerCase();
        if ("audio" === i || "video" === i) {
            var o = e.find("data-src"),
                r = e.find("data-track"),
                s = 0,
                a = function () {
                    ++s === o.length && n(!1)
                },
                u = function () {
                    var e = t(this),
                        n = e[0].tagName.toLowerCase(),
                        i = e.prop("attributes"),
                        o = t("data-src" === n ? "<source>" : "<track>");
                    "data-src" === n && o.one("error", a), t.each(i, function (t, e) {
                        o.attr(e.name, e.value)
                    }), e.replaceWith(o)
                };
            e.one("loadedmetadata", function () {
                n(!0)
            }).off("load error").attr("poster", e.attr("data-poster")), o.length ? o.each(u) : e.attr("data-src") ? (t.each(e.attr("data-src").split(","), function (n, i) {
                var o = i.split("|");
                e.append(t("<source>").one("error", a).attr({
                    src: o[0].trim(),
                    type: o[1].trim()
                }))
            }), this.config("removeAttribute") && e.removeAttr("data-src")) : n(!1), r.length && r.each(u)
        } else n(!1)
    })
}(window.jQuery || window.Zepto),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e, n = "waitForImages",
        i = (e = new Image).srcset && e.sizes;
    t.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"]
    }, t.expr.pseudos["has-src"] = function (e) {
        return t(e).is('img[src][src!=""]')
    }, t.expr.pseudos.uncached = function (e) {
        return !!t(e).is(":has-src") && !e.complete
    }, t.fn.waitForImages = function () {
        var e, o, r, s, a = 0,
            u = t.Deferred(),
            l = this,
            c = [],
            f = t.waitForImages.hasImageProperties || [],
            d = t.waitForImages.hasImageAttributes || [],
            h = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
        if (t.isPlainObject(arguments[0]) ? (r = arguments[0].waitForAll, o = arguments[0].each, e = arguments[0].finished) : 1 === arguments.length && "boolean" === t.type(arguments[0]) ? r = arguments[0] : (e = arguments[0], o = arguments[1], r = arguments[2]), e = e || t.noop, o = o || t.noop, r = !!r, !t.isFunction(e) || !t.isFunction(o)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function () {
            var e = t(this);
            r ? e.find("*").addBack().each(function () {
                var e = t(this);
                e.is("img:has-src") && !e.is("[srcset]") && c.push({
                    src: e.attr("src"),
                    element: e[0]
                }), t.each(f, function (t, n) {
                    var i, o = e.css(n);
                    if (!o) return !0;
                    for (; i = h.exec(o);) c.push({
                        src: i[2],
                        element: e[0]
                    })
                }), t.each(d, function (t, n) {
                    return !e.attr(n) || void c.push({
                        src: e.attr("src"),
                        srcset: e.attr("srcset"),
                        element: e[0]
                    })
                })
            }) : e.find("img:has-src").each(function () {
                c.push({
                    src: this.src,
                    element: this
                })
            })
        }), s = c.length, a = 0, 0 === s && (e.call(l), u.resolveWith(l)), t.each(c, function (r, c) {
            var f = new Image,
                d = "load." + n + " error." + n;
            t(f).one(d, function n(i) {
                var r = [a, s, "load" == i.type];
                if (a++, o.apply(c.element, r), u.notifyWith(c.element, r), t(this).off(d, n), a == s) return e.call(l[0]), u.resolveWith(l[0]), !1
            }), i && c.srcset && (f.srcset = c.srcset, f.sizes = c.sizes), f.src = c.src
        }), u.promise()
    }
}), $("html").is(".transitions") && function (t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? t(require("jquery"), window, document) : t(jQuery, window, document)
    }(function (t, e, n, i) {
        "use strict";
        if (!e.history.pushState) return t.fn.smoothState = function () {
            return this
        }, void(t.fn.smoothState.options = {});
        if (!t.fn.smoothState) {
            var o = t("html, body"),
                r = e.console,
                s = {
                    isExternal: function (t) {
                        var n = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                        return "string" == typeof n[1] && n[1].length > 0 && n[1].toLowerCase() !== e.location.protocol || "string" == typeof n[2] && n[2].length > 0 && n[2].replace(new RegExp(":(" + {
                            "http:": 80,
                            "https:": 443
                        }[e.location.protocol] + ")?$"), "") !== e.location.host
                    },
                    stripHash: function (t) {
                        return t.replace(/#.*/, "")
                    },
                    isHash: function (t, n) {
                        n = n || e.location.href;
                        var i = t.indexOf("#") > -1,
                            o = s.stripHash(t) === s.stripHash(n);
                        return i && o
                    },
                    translate: function (e) {
                        var n = {
                            dataType: "html",
                            type: "GET"
                        };
                        return "string" == typeof e ? t.extend({}, n, {
                            url: e
                        }) : t.extend({}, n, e)
                    },
                    shouldLoadAnchor: function (t, e, n) {
                        var o = t.prop("href");
                        return false
                        //                        !(s.isExternal(o) || s.isHash(o) || t.is(e) || t.prop("target") || typeof n !== i && "" !== n && -1 === t.prop("href").search(n))
                    },
                    clearIfOverCapacity: function (t, e) {
                        return Object.keys || (Object.keys = function (t) {
                            var e, n = [];
                            for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
                            return n
                        }), Object.keys(t).length > e && (t = {}), t
                    },
                    storePageIn: function (e, n, i, o, r, s) {
                        var a = t("<html></html>").append(t(i));
                        return void 0 === r && (r = {}), void 0 === s && (s = n), e[n] = {
                            status: "loaded",
                            title: a.find("title").first().text(),
                            html: a.find("#" + o),
                            doc: i,
                            state: r,
                            destUrl: s
                        }, e
                    },
                    triggerAllAnimationEndEvent: function (e, n) {
                        n = " " + n || "";
                        var i = 0;
                        e.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", function (n) {
                            t(n.delegateTarget).is(e) && (n.stopPropagation(), i++)
                        }), e.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (n) {
                            t(n.delegateTarget).is(e) && (n.stopPropagation(), 0 == --i && e.trigger("allanimationend"))
                        }), e.on("allanimationend" + n, function () {
                            i = 0, s.redraw(e)
                        })
                    },
                    redraw: function (t) {
                        t.height()
                    }
                },
                a = function (a, u) {
                    var l, c = t(a),
                        f = c.prop("id"),
                        d = null,
                        h = !1,
                        p = {},
                        m = {},
                        g = e.location.href,
                        y = function (t) {
                            (t = t || !1) && p.hasOwnProperty(t) ? delete p[t] : p = {}, c.data("smoothState").cache = p
                        },
                        v = function (e, n) {
                            n = n || t.noop;
                            var i = s.translate(e);
                            if (!(p = s.clearIfOverCapacity(p, u.cacheLength)).hasOwnProperty(i.url) || void 0 !== i.data) {
                                p[i.url] = {
                                    status: "fetching"
                                };
                                var o = t.ajax(i);
                                o.done(function (t) {
                                    s.storePageIn(p, i.url, t, f), c.data("smoothState").cache = p
                                }), o.fail(function () {
                                    p[i.url].status = "error"
                                }), u.locationHeader && o.always(function (t, e, n) {
                                    var o = (t.statusCode ? t : n).getResponseHeader(u.locationHeader);
                                    o && (p[i.url].destUrl = o)
                                }), n && o.always(n)
                            }
                        },
                        x = function (i) {
                            var s = "#" + f,
                                a = p[i] ? t(p[i].html.html()) : null;
                            a.length ? (n.title = p[i].title, c.data("smoothState").href = i, u.loadingClass && o.removeClass(u.loadingClass), u.onReady.render(c, a), c.one("ss.onReadyEnd", function () {
                                h = !1, u.onAfter(c, a), u.scroll && function () {
                                    if (d) {
                                        var e = t(d, c);
                                        if (e.length) {
                                            var n = e.offset().top;
                                            o.scrollTop(n)
                                        }
                                        d = null
                                    }
                                }(), A(c)
                            }), e.setTimeout(function () {
                                c.trigger("ss.onReadyEnd")
                            }, u.onReady.duration)) : !a && u.debug && r ? r.warn("No element with an id of " + s + " in response from " + i + " in " + p) : e.location = i
                        },
                        b = function (t, n, i) {
                            var a = s.translate(t);
                            void 0 === n && (n = !0), void 0 === i && (i = !0);
                            var l = !1,
                                d = !1,
                                h = {
                                    loaded: function () {
                                        var t = l ? "ss.onProgressEnd" : "ss.onStartEnd";
                                        if (d && l ? d && x(a.url) : c.one(t, function () {
                                                x(a.url), i || y(a.url)
                                            }), n) {
                                            var o = p[a.url].destUrl;
                                            m = u.alterChangeState({
                                                id: f
                                            }, p[a.url].title, o), p[a.url].state = m, e.history.pushState(m, p[a.url].title, o)
                                        }
                                        d && !i && y(a.url)
                                    },
                                    fetching: function () {
                                        l || (l = !0, c.one("ss.onStartEnd", function () {
                                            u.loadingClass && o.addClass(u.loadingClass), u.onProgress.render(c), e.setTimeout(function () {
                                                c.trigger("ss.onProgressEnd"), d = !0
                                            }, u.onProgress.duration)
                                        })), e.setTimeout(function () {
                                            p.hasOwnProperty(a.url) && h[p[a.url].status]()
                                        }, 10)
                                    },
                                    error: function () {
                                        u.debug && r ? r.log("There was an error loading: " + a.url) : e.location = a.url
                                    }
                                };
                            p.hasOwnProperty(a.url) || v(a), u.onStart.render(c), e.setTimeout(function () {
                                u.scroll && o.scrollTop(0), c.trigger("ss.onStartEnd")
                            }, u.onStart.duration), h[p[a.url].status]()
                        },
                        w = function (e) {
                            var n, i = t(e.currentTarget);
                            s.shouldLoadAnchor(i, u.blacklist, u.hrefRegex) && !h && (e.stopPropagation(), n = s.translate(i.prop("href")), n = u.alterRequest(n), v(n))
                        },
                        C = function (e) {
                            var n = t(e.currentTarget);
                            if (!e.metaKey && !e.ctrlKey && s.shouldLoadAnchor(n, u.blacklist, u.hrefRegex) && (e.stopPropagation(), e.preventDefault(), !E())) {
                                I();
                                var i = s.translate(n.prop("href"));
                                h = !0, d = n.prop("hash"), i = u.alterRequest(i), u.onBefore(n, c), b(i)
                            }
                        },
                        T = function (e) {
                            var n = t(e.currentTarget);
                            if (!n.is(u.blacklist) && (e.preventDefault(), e.stopPropagation(), !E())) {
                                I();
                                var o = {
                                    url: n.prop("action"),
                                    data: n.serialize(),
                                    type: n.prop("method")
                                };
                                h = !0, "get" === (o = u.alterRequest(o)).type.toLowerCase() && (o.url = o.url + "?" + o.data), u.onBefore(n, c), b(o, i, u.allowFormCaching)
                            }
                        },
                        S = 0,
                        E = function () {
                            var t = null === u.repeatDelay,
                                e = parseInt(Date.now()) > S;
                            return !(t || e)
                        },
                        I = function () {
                            S = parseInt(Date.now()) + parseInt(u.repeatDelay)
                        },
                        A = function (t) {
                            u.anchors && u.prefetch && t.find(u.anchors).not(u.prefetchBlacklist).on(u.prefetchOn, null, w)
                        };
                    return u = t.extend({}, t.fn.smoothState.options, u), null === e.history.state ? (m = u.alterChangeState({
                        id: f
                    }, n.title, g), e.history.replaceState(m, n.title, g)) : m = {}, s.storePageIn(p, g, n.documentElement.outerHTML, f, m), s.triggerAllAnimationEndEvent(c, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), l = c, u.anchors && (l.on("click", u.anchors, C), A(l)), u.forms && l.on("submit", u.forms, T), {
                        href: g,
                        cache: p,
                        clear: y,
                        load: b,
                        fetch: v,
                        restartCSSAnimations: function () {
                            var t = c.prop("class");
                            c.removeClass(t), s.redraw(c), c.addClass(t)
                        }
                    }
                };
            e.onpopstate = function (n) {
                if (null !== n.state) {
                    var i = e.location.href,
                        o = t("#" + n.state.id).data("smoothState"),
                        r = o.href !== i && !s.isHash(i, o.href),
                        a = n.state !== o.cache[o.href].state;
                    (r || a) && (a && o.clear(o.href), o.load(i, !1))
                }
            }, t.smoothStateUtility = s, t.fn.smoothState = function (e) {
                return this.each(function () {
                    var n = this.tagName.toLowerCase();
                    this.id && "body" !== n && "html" !== n && !t.data(this, "smoothState") ? t.data(this, "smoothState", new a(this, e)) : !this.id && r ? r.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== n && "html" !== n || !r || r.warn("The smoothstate container cannot be the " + this.tagName + " tag")
                })
            }, t.fn.smoothState.options = {
                debug: !1,
                anchors: "a",
                hrefRegex: "",
                forms: "form",
                allowFormCaching: !1,
                repeatDelay: 500,
                blacklist: ".no-smoothState",
                prefetch: !1,
                prefetchOn: "mouseover touchstart",
                prefetchBlacklist: ".no-prefetch",
                locationHeader: "X-SmoothState-Location",
                cacheLength: 0,
                loadingClass: "is-loading",
                scroll: !0,
                alterRequest: function (t) {
                    return t
                },
                alterChangeState: function (t, e, n) {
                    return t
                },
                onBefore: function (t, e) {},
                onStart: {
                    duration: 0,
                    render: function (t) {}
                },
                onProgress: {
                    duration: 0,
                    render: function (t) {}
                },
                onReady: {
                    duration: 0,
                    render: function (t, e) {
                        t.html(e)
                    }
                },
                onAfter: function (t, e) {}
            }
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function (t, e) {
        "use strict";

        function n(n, r, a) {
            (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function (t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return l = e, f = "$()." + n + '("' + (u = t) + '")', (i = this).each(function (t, e) {
                        var i = a.data(e, n);
                        if (i) {
                            var o = i[u];
                            if (o && "_" != u.charAt(0)) {
                                var r = o.apply(i, l);
                                c = void 0 === c ? r : c
                            } else s(f + " is not a valid method")
                        } else s(n + " not initialized. Cannot call methods, i.e. " + f)
                    }), void 0 !== c ? c : i
                }
                var i, u, l, c, f, d;
                return d = t, this.each(function (t, e) {
                    var i = a.data(e, n);
                    i ? (i.option(d), i._init()) : (i = new r(e, d), a.data(e, n, i))
                }), this
            }, i(a))
        }

        function i(t) {
            !t || t && t.bridget || (t.bridget = n)
        }
        var o = Array.prototype.slice,
            r = t.console,
            s = void 0 === r ? function () {} : function (t) {
                r.error(t)
            };
        return i(e || t.jQuery), n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
                    var r = n[o];
                    i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e)
                }
                return this
            }
        }, e.allOff = function () {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e(t) {
            var e = getComputedStyle(t);
            return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function n(o) {
            if (function () {
                    if (!a) {
                        a = !0;
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style.boxSizing = "border-box";
                        var r = document.body || document.documentElement;
                        r.appendChild(o);
                        var s = e(o);
                        n.isBoxSizeOuter = i = 200 == t(s.width), r.removeChild(o)
                    }
                }(), "string" == typeof o && (o = document.querySelector(o)), o && "object" == typeof o && o.nodeType) {
                var u = e(o);
                if ("none" == u.display) return function () {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < s; e++) t[r[e]] = 0;
                    return t
                }();
                var l = {};
                l.width = o.offsetWidth, l.height = o.offsetHeight;
                for (var c = l.isBorderBox = "border-box" == u.boxSizing, f = 0; f < s; f++) {
                    var d = r[f],
                        h = u[d],
                        p = parseFloat(h);
                    l[d] = isNaN(p) ? 0 : p
                }
                var m = l.paddingLeft + l.paddingRight,
                    g = l.paddingTop + l.paddingBottom,
                    y = l.marginLeft + l.marginRight,
                    v = l.marginTop + l.marginBottom,
                    x = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    w = c && i,
                    C = t(u.width);
                !1 !== C && (l.width = C + (w ? 0 : m + x));
                var T = t(u.height);
                return !1 !== T && (l.height = T + (w ? 0 : g + b)), l.innerWidth = l.width - (m + x), l.innerHeight = l.height - (g + b), l.outerWidth = l.width + y, l.outerHeight = l.height + v, l
            }
        }
        var i, o = "undefined" == typeof console ? function () {} : function (t) {
                console.error(t)
            },
            r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            s = r.length,
            a = !1;
        return n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n] + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function (e, n) {
            return e[t](n)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var n = {
                extend: function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                modulo: function (t, e) {
                    return (t % e + e) % e
                },
                makeArray: function (t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "object" == typeof t && "number" == typeof t.length)
                        for (var n = 0; n < t.length; n++) e.push(t[n]);
                    else e.push(t);
                    return e
                },
                removeFrom: function (t, e) {
                    var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
                },
                getParent: function (t, n) {
                    for (; t.parentNode && t != document.body;)
                        if (t = t.parentNode, e(t, n)) return t
                },
                getQueryElement: function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                },
                handleEvent: function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                },
                filterFindElements: function (t, i) {
                    t = n.makeArray(t);
                    var o = [];
                    return t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!i) return void o.push(t);
                            e(t, i) && o.push(t);
                            for (var n = t.querySelectorAll(i), r = 0; r < n.length; r++) o.push(n[r])
                        }
                    }), o
                },
                debounceMethod: function (t, e, n) {
                    var i = t.prototype[e],
                        o = e + "Timeout";
                    t.prototype[e] = function () {
                        var t = this[o];
                        t && clearTimeout(t);
                        var e = arguments,
                            r = this;
                        this[o] = setTimeout(function () {
                            i.apply(r, e), delete r[o]
                        }, n || 100)
                    }
                },
                docReady: function (t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                },
                toDashed: function (t) {
                    return t.replace(/(.)([A-Z])/g, function (t, e, n) {
                        return e + "-" + n
                    }).toLowerCase()
                }
            },
            i = t.console;
        return n.htmlInit = function (e, o) {
            n.docReady(function () {
                var r = n.toDashed(o),
                    s = "data-" + r,
                    a = document.querySelectorAll("[" + s + "]"),
                    u = document.querySelectorAll(".js-" + r),
                    l = n.makeArray(a).concat(n.makeArray(u)),
                    c = s + "-options",
                    f = t.jQuery;
                l.forEach(function (t) {
                    var n, r = t.getAttribute(s) || t.getAttribute(c);
                    try {
                        n = r && JSON.parse(r)
                    } catch (e) {
                        return void(i && i.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    f && f.data(t, o, a)
                })
            })
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var i = document.documentElement.style,
            o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            r = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            s = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[o],
            a = {
                transform: r,
                transition: o,
                transitionDuration: o + "Duration",
                transitionProperty: o + "Property",
                transitionDelay: o + "Delay"
            },
            u = n.prototype = Object.create(t.prototype);
        u.constructor = n, u._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, u.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, u.getSize = function () {
            this.size = e(this.element)
        }, u.css = function (t) {
            var e = this.element.style;
            for (var n in t) {
                e[a[n] || n] = t[n]
            }
        }, u.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                o = t[n ? "top" : "bottom"],
                r = this.layout.size,
                s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * r.width : parseInt(i, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= n ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
        }, u.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                o = n ? "paddingLeft" : "paddingRight",
                r = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[o];
            e[r] = this.getXValue(a), e[s] = "";
            var u = i ? "paddingTop" : "paddingBottom",
                l = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                f = this.position.y + t[u];
            e[l] = this.getYValue(f), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, u.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, u.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, u._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                o = parseInt(t, 10),
                r = parseInt(e, 10),
                s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), !s || this.isTransitioning) {
                var a = t - n,
                    u = e - i,
                    l = {};
                l.transform = this.getTranslate(a, u), this.transition({
                    to: l,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, u.getTranslate = function (t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, u.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, u.moveTo = u._transitionTo, u.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, u._nonTransition = function (t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, u.transition = function (t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var l = "opacity," + r.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        });
        u.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: l,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(s, this, !1)
            }
        }, u.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, u.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var c = {
            "-webkit-transform": "transform"
        };
        u.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = c[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], function (t) {
                        for (var e in t) return !1;
                        return !0
                    }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];
                this.emitEvent("transitionEnd", [this])
            }
        }, u.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
        }, u._removeStyles = function (t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var f = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return u.removeTransitionStyles = function () {
            this.css(f)
        }, u.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, u.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, u.remove = function () {
            return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, u.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, u.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, u.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, u.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, u.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, u.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, o, r) {
            return e(t, n, i, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, n, i, o) {
        "use strict";

        function r(t, e) {
            var n = i.getQueryElement(t);
            if (n) {
                this.element = n, u && (this.$element = u(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
                var o = ++c;
                this.element.outlayerGUID = o, f[o] = this, this._create(), this._getOption("initLayout") && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var a = t.console,
            u = t.jQuery,
            l = function () {},
            c = 0,
            f = {};
        r.namespace = "outlayer", r.Item = o, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var d = r.prototype;
        i.extend(d, e.prototype), d.option = function (t) {
            i.extend(this.options, t)
        }, d._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, d._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, d.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, d._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0; o < e.length; o++) {
                var r = new n(e[o], this);
                i.push(r)
            }
            return i
        }, d._filterFindItemElements = function (t) {
            return i.filterFindElements(t, this.options.itemSelector)
        }, d.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        }, d.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, d._init = d.layout, d._resetLayout = function () {
            this.getSize()
        }, d.getSize = function () {
            this.size = n(this.element)
        }, d._getMeasurement = function (t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
        }, d.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, d._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        }, d._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function (t) {
                    var i = this._getItemLayoutPosition(t);
                    i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                }, this), this._processLayoutQueue(n)
            }
        }, d._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, d._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, d.updateStagger = function () {
            var t = this.options.stagger;
            return null == t ? void(this.stagger = 0) : (this.stagger = function (t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    n = e && e[1],
                    i = e && e[2];
                return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0
            }(t), this.stagger)
        }, d._positionItem = function (t, e, n, i, o) {
            i ? t.goTo(e, n) : (t.stagger(o * this.stagger), t.moveTo(e, n))
        }, d._postLayout = function () {
            this.resizeContainer()
        }, d.resizeContainer = function () {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, d._getContainerSize = l, d._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, d._emitCompleteOnItems = function (t, e) {
            function n() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function i() {
                ++s == r && n()
            }
            var o = this,
                r = e.length;
            if (e && r) {
                var s = 0;
                e.forEach(function (e) {
                    e.once(t, i)
                })
            } else n()
        }, d.dispatchEvent = function (t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), u)
                if (this.$element = this.$element || u(this.element), e) {
                    var o = u.Event(e);
                    o.type = t, this.$element.trigger(o, n)
                } else this.$element.trigger(t, n)
        }, d.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, d.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, d.stamp = function (t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, d.unstamp = function (t) {
            (t = this._find(t)) && t.forEach(function (t) {
                i.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, d._find = function (t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), i.makeArray(t)
        }, d._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, d._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, d._manageStamp = l, d._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                o = n(t);
            return {
                left: e.left - i.left - o.marginLeft,
                top: e.top - i.top - o.marginTop,
                right: i.right - e.right - o.marginRight,
                bottom: i.bottom - e.bottom - o.marginBottom
            }
        }, d.handleEvent = i.handleEvent, d.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, d.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, d.onresize = function () {
            this.resize()
        }, i.debounceMethod(r, "onresize", 100), d.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, d.needsResizeLayout = function () {
            var t = n(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, d.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, d.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, d.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, d.reveal = function (t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, n) {
                    t.stagger(n * e), t.reveal()
                })
            }
        }, d.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, n) {
                    t.stagger(n * e), t.hide()
                })
            }
        }, d.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, d.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, d.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var n = this.items[e];
                if (n.element == t) return n
            }
        }, d.getItems = function (t) {
            t = i.makeArray(t);
            var e = [];
            return t.forEach(function (t) {
                var n = this.getItem(t);
                n && e.push(n)
            }, this), e
        }, d.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                t.remove(), i.removeFrom(this.items, t)
            }, this)
        }, d.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete f[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
        }, r.data = function (t) {
            var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
            return e && f[e]
        }, r.create = function (t, e) {
            var n = s(r);
            return n.defaults = i.extend({}, r.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, r.compatOptions), n.namespace = t, n.data = r.data, n.Item = s(o), i.htmlInit(n, t), u && u.bridget && u.bridget(t, n), n
        };
        var h = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o, r
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function (t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var n = e.prototype = Object.create(t.Item.prototype),
            i = n._create;
        n._create = function () {
            this.id = this.layout.itemGUID++, i.call(this), this.sortData = {}
        }, n.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var n in t) {
                    var i = e[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        };
        var o = n.destroy;
        return n.destroy = function () {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function (t, e) {
        "use strict";

        function n(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var i = n.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
            i[t] = function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), i.needsVerticalResizeLayout = function () {
            var e = t(this.isotope.element);
            return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
        }, i._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, i.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, i.getSegmentSize = function (t, e) {
            var n = t + e,
                i = "outer" + e;
            if (this._getMeasurement(n, i), !this[n]) {
                var o = this.getFirstItemSize();
                this[n] = o && o[i] || this.isotope.size["inner" + e]
            }
        }, i.getFirstItemSize = function () {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function (t, e) {
            function o() {
                n.apply(this, arguments)
            }
            return o.prototype = Object.create(i), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, n.modes[t] = o, o
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, e) {
        var n = t.create("masonry");
        n.compatOptions.fitWidth = "isFitWidth";
        var i = n.prototype;
        return i._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, i.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                r = o / i,
                s = i - o % i;
            r = Math[s && s < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
        }, i.getContainerWidth = function () {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), o = {
                    x: this.columnWidth * i.col,
                    y: i.y
                }, r = i.y + t.size.outerHeight, s = n + i.col, a = i.col; a < s; a++) this.colYs[a] = r;
            return o
        }, i._getTopColPosition = function (t) {
            var e = this._getTopColGroup(t),
                n = Math.min.apply(Math, e);
            return {
                col: e.indexOf(n),
                y: n
            }
        }, i._getTopColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t);
            return e
        }, i._getColGroupY = function (t, e) {
            if (e < 2) return this.colYs[t];
            var n = this.colYs.slice(t, t + e);
            return Math.max.apply(Math, n)
        }, i._getHorizontalColPosition = function (t, e) {
            var n = this.horizontalColIndex % this.cols;
            n = t > 1 && n + t > this.cols ? 0 : n;
            var i = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = i ? n + t : this.horizontalColIndex, {
                col: n,
                y: this._getColGroupY(n, t)
            }
        }, i._manageStamp = function (t) {
            var n = e(t),
                i = this._getElementOffset(t),
                o = this._getOption("originLeft") ? i.left : i.right,
                r = o + n.outerWidth,
                s = Math.floor(o / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight, l = s; l <= a; l++) this.colYs[l] = Math.max(u, this.colYs[l])
        }, i._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function (t, e) {
        "use strict";
        var n = t.create("masonry"),
            i = n.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var r in e.prototype) o[r] || (i[r] = e.prototype[r]);
        var s = i.measureColumns;
        i.measureColumns = function () {
            this.items = this.isotope.filteredItems, s.call(this)
        };
        var a = i._getOption;
        return i._getOption = function (t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, n
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            n = e.prototype;
        return n._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                n = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
            var i = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
        }, n._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            n = e.prototype;
        return n._resetLayout = function () {
            this.y = 0
        }, n._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                n = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: n
            }
        }, n._getContainerSize = function () {
            return {
                height: this.y
            }
        }, e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (n, i, o, r, s, a) {
            return e(t, n, i, o, r, s, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function (t, e, n, i, o, r, s) {
        var a = t.jQuery,
            u = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            l = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        l.Item = r, l.LayoutMode = s;
        var c = l.prototype;
        c._create = function () {
            for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) this._initLayoutMode(t)
        }, c.reloadItems = function () {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, c._itemize = function () {
            for (var t = e.prototype._itemize.apply(this, arguments), n = 0; n < t.length; n++) {
                t[n].id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, c._initLayoutMode = function (t) {
            var e = s.modes[t],
                n = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, n) : n, this.modes[t] = new e(this)
        }, c.layout = function () {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, c._layout = function () {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, c.arrange = function (t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, c._init = c.arrange, c._hideReveal = function (t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, c._getIsInstant = function () {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, c._bindArrangeComplete = function () {
            function t() {
                e && n && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, n, i, o = this;
            this.once("layoutComplete", function () {
                e = !0, t()
            }), this.once("hideComplete", function () {
                n = !0, t()
            }), this.once("revealComplete", function () {
                i = !0, t()
            })
        }, c._filter = function (t) {
            var e = this.options.filter;
            e = e || "*";
            for (var n = [], i = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
                var a = t[s];
                if (!a.isIgnored) {
                    var u = r(a);
                    u && n.push(a), u && a.isHidden ? i.push(a) : u || a.isHidden || o.push(a)
                }
            }
            return {
                matches: n,
                needReveal: i,
                needHide: o
            }
        }, c._getFilterTest = function (t) {
            return a && this.options.isJQueryFiltering ? function (e) {
                return a(e.element).is(t)
            } : "function" == typeof t ? function (e) {
                return t(e.element)
            } : function (e) {
                return i(e.element, t)
            }
        }, c.updateSortData = function (t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, c._getSorters = function () {
            var t = this.options.getSortData;
            for (var e in t) {
                var n = t[e];
                this._sorters[e] = f(n)
            }
        }, c._updateItemsSortData = function (t) {
            for (var e = t && t.length, n = 0; e && n < e; n++) {
                t[n].updateSortData()
            }
        };
        var f = function () {
            return function (t) {
                if ("string" != typeof t) return t;
                var e, n, i = u(t).split(" "),
                    o = i[0],
                    r = o.match(/^\[(.+)\]$/),
                    s = r && r[1],
                    a = (n = o, (e = s) ? function (t) {
                        return t.getAttribute(e)
                    } : function (t) {
                        var e = t.querySelector(n);
                        return e && e.textContent
                    }),
                    c = l.sortDataParsers[i[1]];
                return c ? function (t) {
                    return t && c(a(t))
                } : function (t) {
                    return t && a(t)
                }
            }
        }();
        l.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        }, c._sort = function () {
            if (this.options.sortBy) {
                var t = o.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = (n = this.sortHistory, i = this.options.sortAscending, function (t, e) {
                    for (var o = 0; o < n.length; o++) {
                        var r = n[o],
                            s = t.sortData[r],
                            a = e.sortData[r];
                        if (s > a || s < a) return (s > a ? 1 : -1) * ((void 0 !== i[r] ? i[r] : i) ? 1 : -1)
                    }
                    return 0
                });
                this.filteredItems.sort(e)
            }
            var n, i
        }, c._getIsSameSortBy = function (t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, c._mode = function () {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, c._resetLayout = function () {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, c._getItemLayoutPosition = function (t) {
            return this._mode()._getItemLayoutPosition(t)
        }, c._manageStamp = function (t) {
            this._mode()._manageStamp(t)
        }, c._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, c.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, c.appended = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var n = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, c.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var n = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, c._filterRevealAdded = function (t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, c.insert = function (t) {
            var e = this.addItems(t);
            if (e.length) {
                var n, i, o = e.length;
                for (n = 0; n < o; n++) i = e[n], this.element.appendChild(i.element);
                var r = this._filter(e).matches;
                for (n = 0; n < o; n++) e[n].isLayoutInstant = !0;
                for (this.arrange(), n = 0; n < o; n++) delete e[n].isLayoutInstant;
                this.reveal(r)
            }
        };
        var d = c.remove;
        return c.remove = function (t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            d.call(this, t);
            for (var n = e && e.length, i = 0; n && i < n; i++) {
                var r = e[i];
                o.removeFrom(this.filteredItems, r)
            }
        }, c.shuffle = function () {
            for (var t = 0; t < this.items.length; t++) {
                this.items[t].sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, c._noTransition = function (t, e) {
            var n = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.apply(this, e);
            return this.options.transitionDuration = n, i
        }, c.getFilteredItemElements = function () {
            return this.filteredItems.map(function (t) {
                return t.element
            })
        }, l
    }), $(function t() {
        var e = $("main"),
            n = $("video"),
            i = $("html, body"),
            o = $(".about");
        if ($("html").is(".no-transitions")) n.attr("autoplay", ""), n.attr("loop", "");
        else {
            var r = {
                    prefetch: !0,
                    scroll: !1,
                    cacheLength: 10,
                    blacklist: ".no-smoothState",
                    onStart: {
                        duration: 300,
                        render: function (t) {
                            t.addClass("is-exiting"), s.restartCSSAnimations()
                        }
                    },
                    onReady: {
                        duration: 0,
                        render: function (t, e) {
                            t.removeClass("is-exiting"), sessionStorage.setItem("dontLoad", "true"), t.html(e), $(".grid li").eq(sessionStorage.clickedProjectIndex)/*.addClass("clicked")*/, $(".grid li").each(function (t, e) {
                                null != sessionStorage.getItem("project" + t + "Loaded") && $(e).addClass("loaded")
                            })
                        }
                    },
                    onAfter: function (e, n) {
                        $(document).ready(t)
                    }
                },
                s = $("#site").smoothState(r).data("smoothState");
            n.removeAttr("autoplay", ""), n.removeAttr("loop", "")
        }
        n.on({
            mouseenter: function () {
                $(this).get(0).play(), $(this).hasClass("oediv") ? (this.currentTime <= this.duration / 2 && $(this).data("firstHalf", !0), $(this).on("timeupdate", function () {
                    $(this).data("firstHalf") && this.currentTime > this.duration / 2 && ($(this).get(0).pause(), $(this).data("firstHalf", !1))
                })) : $(this).attr("loop", "")
            },
            mouseleave: function () {
                $(this).removeAttr("loop", "")
            }
        });
        var a = $("#email a").html();

        function u() {
//            $(".grid li").removeClass("clicked"), 
                sessionStorage.removeItem("clickedProjectIndex")
        }
        if (email = a.replace(/[a-zA-Z]/g, function (t) {
                return String.fromCharCode((t <= "Z" ? 90 : 122) >= (t = t.charCodeAt(0) + 13) ? t : t - 26)
            }), $(".arrow").click(function () {
                i.animate({
                    scrollTop: 0
                }, 400, "swing")
            }), e.is("#index")) {
            var l = $(".banner"),
                c = $(".grid").isotope({
                    itemSelector: ".grid li",
                    layoutMode: "masonry",
                    transitionDuration: 0,
                    sortBy : "random"
                });
            if (c.isotope("layout"), c.isotope({
                    transitionDuration: 500,
                    stagger: 10
                }),
                $(document).scrollTop(sessionStorage.scrollIndexPosition), sessionStorage.removeItem("scrollIndexPosition"), null == sessionStorage.getItem("dontLoad") && $("html").is(".transitions") && $(window).width() >= 1152) {
//                $("html").addClass("landing");
                var f = l.first(),
                    d = 0;
                f.waitForImages(function () {
                    var t = !1,
                        e = setInterval(function () {
                            d++
                        }, 100),
                        n = setInterval(function () {
                            var e = f.next(".banner");
                            0 == e.length && (e = l.first()), t || e.hasClass("loaded") ? e.hasClass("loaded") && d > 30 && (setTimeout(function () {
                                f.removeClass("visible"), f = e
                            }, 500), l.css("z-index", "0"), f.css("z-index", "100"), e.addClass("visible"), d = 0) : e.Lazy({
                                beforeLoad: function () {
                                    t = !t
                                },
                                afterLoad: function (e) {
                                    e.addClass("loaded"), t = !t
                                }
                            })
                        }, 100);
                    $("#landing, .logo a").on("click", function (t) {
                        return $("html").removeClass("landing"), $("#landing").removeClass(), clearInterval(n), clearInterval(e), sessionStorage.setItem("dontLoad", "true"), !1
                    }), $(this).addClass("loaded visible"), h()
                })
            } else $(document).ready(h), $("#landing").removeClass();

            function h() {
                $(".thumb").each(function (t, e) {
                    var n = (e = $(e)).closest("li");
                    null == sessionStorage.getItem("project" + t + "Loaded") ? e.Lazy({
                        scrollDirection: "vertical",
                        visibleOnly: !0,
                        afterLoad: function () {
                            n.addClass("loaded"), sessionStorage.setItem("project" + t + "Loaded", "true")
                        }
                    }) : e.Lazy({
                        delay: 0,
                        afterLoad: function () {
                            n.addClass("loaded")
                        }
                    })
                })
            }
            $("[data-filter], .logo a").click(function () {
                console.log('filter clicked');
                var t, e = $(this),
                    n = $("[data-filter]");
                e.is(".active, .logo a") ? (t = "*", n.removeClass()) : (e.is(".inactive") && n.removeClass(), t = e.attr("data-filter"), n.addClass("inactive"), e.toggleClass("inactive active")), $(window).scrollTop() > 0 ? i.animate({
                    scrollTop: 0
                }, 400, "swing", function () {
                    c.isotope({
                        filter: t
                    })
                }) : c.isotope({
                    filter: t
                })
            }), c.on("arrangeComplete", function (t, e) {
                h()
            }), o.click(function () {
                $(this).addClass("active"), u()
            }), $("#links a").click(function () {
                $("#site").addClass("noSlide"), sessionStorage.scrollIndexPosition = $(document).scrollTop(), sessionStorage.previousURL = window.location.href
            }), $(".logo a").click(function () {
                return u(), !1
            }), $(".grid a").on("click", function () {
                var t = $(this).closest("li");
                $("#site").removeClass("noSlide"), $(".grid li")/*.removeClass("clicked"), t.addClass("clicked")*/, sessionStorage.clickedProjectIndex = t.index(), sessionStorage.scrollIndexPosition = $(document).scrollTop()
            })

        } else if (e.is("#project")) {
            if (null == sessionStorage.getItem("scrollProjectPosition") ? $(document).scrollTop(0) : ($(document).scrollTop(sessionStorage.scrollProjectPosition), sessionStorage.removeItem("scrollProjectPosition")), $(".lazy").each(function (t, e) {
                    var n = (e = $(e)).closest("li");
                    e.Lazy({
                        scrollDirection: "vertical",
                        visibleOnly: !0,
                        afterLoad: function () {
                            n.addClass("loaded")
                        }
                    })
                }), $(".related .thumb").Lazy(), $(window).width() >= 768) {
                function p() {
                    0 == $(document).scrollTop() && $(".slide:first-of-type").addClass("active")
                }
                p(), $(document).on("mousewheel", function () {
                    $(".slide").removeClass("active"), p()
                }), $(document).on("scroll", function () {
                    p()
                }), $(".slide").click(function () {
                    var t = $(this),
                        e = $(".slide:first-of-type").offset().top;
                    if (t.is(".slide.active:not(:last-of-type):not(.left)")) {
                        t.removeClass("active"), t.next(".slide").addClass("active");
                        var n = $(".slide.active").offset().top - e
                    } else if (t.is(".slide.right:not(:last-of-type)") && t.prev().is(".left.active")) {
                        t.prev().removeClass("active"), t.next(".slide").addClass("active");
                        n = $(".slide.active").offset().top - e
                    } else if (t.is(".slide.left.active:not(:last-of-type)")) {
                        t.removeClass("active"), t.siblings().eq(t.index() + 1).addClass("active");
                        n = $(".slide.active").offset().top - e
                    } else if (t.is(".slide.active:last-of-type")) {
                        t.removeClass("active");
                        n = $(document).height() - $(window).height()
                    } else {
                        $(".slide").removeClass("active"), t.addClass("active");
                        n = $(".slide.active").offset().top - e
                    }
                    i.animate({
                        scrollTop: n
                    }, 400, "swing")
                })
            }
            o.click(function () {
                $(this).addClass("active")
            }), $("#links a").click(function () {
                $("#site").addClass("noSlide"), sessionStorage.scrollProjectPosition = $(document).scrollTop(), sessionStorage.previousURL = window.location.href
            }), $(".readmore").click(function () {
                return $(".moretext").toggleClass("visible"), $(this).text(function (t, e) {
                    return "Read more" === e ? "Read less" : "Lire plus" === e ? "Lire moins" : "Read less" === e ? "Read more" : "Lire plus"
                }), !1
            }), $(".logo a").click(function () {
                $("#site").removeClass("noSlide"), sessionStorage.removeItem("scrollProjectPosition")
            }), $(".infoToggle").click(function () {
                $(".project-header").toggleClass("toggled"), $(this).toggleClass("active")
            }), $(".related a").click(function () {
                $("#site").addClass("noSlide"), i.animate({
                    scrollTop: 0
                }, 400, "swing"), u()
            })
        } else e.is("#about, #error") && ($(document).scrollTop(0), o.attr("href", sessionStorage.previousURL), o.click(function () {
            $(this).removeClass("active")
        }), setTimeout(function () {
            $("#hello").addClass("no-delay")
        }, 1e3), $("#hello span").on("click mouseover", function () {
            var t = $(this),
                e = new Boolean;
            0 == e && (t.addClass("restartanim"), setTimeout(function () {
                t.removeClass()
            }), e = !0, setTimeout(function () {
                e = !1
            }, 1e3))
        }), $(".logo a").click(function () {
            sessionStorage.removeItem("scrollIndexPosition"), sessionStorage.removeItem("scrollProjectPosition")
        }))
    });
