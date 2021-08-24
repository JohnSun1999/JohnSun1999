(function(t, e) { "object" === typeof exports && "object" === typeof module ? module.exports = e(require("vue")) : "function" === typeof define && define.amd ? define([], e) : "object" === typeof exports ? exports["ui-sunjun-1999"] = e(require("vue")) : t["ui-sunjun-1999"] = e(t["Vue"]) })("undefined" !== typeof self ? self : this, (function(t) { return function(t) { var e = {};

        function n(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } return n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(r, o, function(e) { return t[e] }.bind(null, o)); return r }, n.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = "fb15") }({ "0c97": function(t, e, n) { "use strict";
            n("374a") }, "0cfb": function(t, e, n) { var r = n("83ab"),
                o = n("d039"),
                c = n("cc12");
            t.exports = !r && !o((function() { return 7 != Object.defineProperty(c("div"), "a", { get: function() { return 7 } }).a })) }, "1d80": function(t, e) { t.exports = function(t) { if (void 0 == t) throw TypeError("Can't call method on " + t); return t } }, "2d00": function(t, e, n) { var r, o, c = n("da84"),
                i = n("342f"),
                u = c.process,
                f = c.Deno,
                a = u && u.versions || f && f.version,
                p = a && a.v8;
            p ? (r = p.split("."), o = r[0] < 4 ? 1 : r[0] + r[1]) : i && (r = i.match(/Edge\/(\d+)/), (!r || r[1] >= 74) && (r = i.match(/Chrome\/(\d+)/), r && (o = r[1]))), t.exports = o && +o }, "342f": function(t, e, n) { var r = n("d066");
            t.exports = r("navigator", "userAgent") || "" }, "374a": function(t, e, n) {}, "485a": function(t, e, n) { var r = n("861d");
            t.exports = function(t, e) { var n, o; if ("string" === e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o; if ("string" !== e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, 4930: function(t, e, n) { var r = n("2d00"),
                o = n("d039");
            t.exports = !!Object.getOwnPropertySymbols && !o((function() { var t = Symbol(); return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41 })) }, 5135: function(t, e, n) { var r = n("7b0b"),
                o = {}.hasOwnProperty;
            t.exports = Object.hasOwn || function(t, e) { return o.call(r(t), e) } }, 5692: function(t, e, n) { var r = n("c430"),
                o = n("c6cd");
            (t.exports = function(t, e) { return o[t] || (o[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.16.2", mode: r ? "pure" : "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" }) }, 6416: function(t, e, n) { "use strict";
            n("e2fc") }, "7b0b": function(t, e, n) { var r = n("1d80");
            t.exports = function(t) { return Object(r(t)) } }, "825a": function(t, e, n) { var r = n("861d");
            t.exports = function(t) { if (!r(t)) throw TypeError(String(t) + " is not an object"); return t } }, "83ab": function(t, e, n) { var r = n("d039");
            t.exports = !r((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })) }, "861d": function(t, e) { t.exports = function(t) { return "object" === typeof t ? null !== t : "function" === typeof t } }, 8875: function(t, e, n) { var r, o, c;
            (function(n, i) { o = [], r = i, c = "function" === typeof r ? r.apply(e, o) : r, void 0 === c || (t.exports = c) })("undefined" !== typeof self && self, (function() {
                function t() { var e = Object.getOwnPropertyDescriptor(document, "currentScript"); if (!e && "currentScript" in document && document.currentScript) return document.currentScript; if (e && e.get !== t && document.currentScript) return document.currentScript; try { throw new Error } catch (d) { var n, r, o, c = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                            i = /@([^@]*):(\d+):(\d+)\s*$/gi,
                            u = c.exec(d.stack) || i.exec(d.stack),
                            f = u && u[1] || !1,
                            a = u && u[2] || !1,
                            p = document.location.href.replace(document.location.hash, ""),
                            s = document.getElementsByTagName("script");
                        f === p && (n = document.documentElement.outerHTML, r = new RegExp("(?:[^\\n]+?\\n){0," + (a - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), o = n.replace(r, "$1").trim()); for (var l = 0; l < s.length; l++) { if ("interactive" === s[l].readyState) return s[l]; if (s[l].src === f) return s[l]; if (f === p && s[l].innerHTML && s[l].innerHTML.trim() === o) return s[l] } return null } } return t })) }, "8bbf": function(e, n) { e.exports = t }, "90e3": function(t, e) { var n = 0,
                r = Math.random();
            t.exports = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36) } }, "9bf2": function(t, e, n) { var r = n("83ab"),
                o = n("0cfb"),
                c = n("825a"),
                i = n("a04b"),
                u = Object.defineProperty;
            e.f = r ? u : function(t, e, n) { if (c(t), e = i(e), c(n), o) try { return u(t, e, n) } catch (r) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (t[e] = n.value), t } }, a04b: function(t, e, n) { var r = n("c04e"),
                o = n("d9b5");
            t.exports = function(t) { var e = r(t, "string"); return o(e) ? e : String(e) } }, b0c0: function(t, e, n) { var r = n("83ab"),
                o = n("9bf2").f,
                c = Function.prototype,
                i = c.toString,
                u = /^\s*function ([^ (]*)/,
                f = "name";
            r && !(f in c) && o(c, f, { configurable: !0, get: function() { try { return i.call(this).match(u)[1] } catch (t) { return "" } } }) }, b622: function(t, e, n) { var r = n("da84"),
                o = n("5692"),
                c = n("5135"),
                i = n("90e3"),
                u = n("4930"),
                f = n("fdbf"),
                a = o("wks"),
                p = r.Symbol,
                s = f ? p : p && p.withoutSetter || i;
            t.exports = function(t) { return c(a, t) && (u || "string" == typeof a[t]) || (u && c(p, t) ? a[t] = p[t] : a[t] = s("Symbol." + t)), a[t] } }, c04e: function(t, e, n) { var r = n("861d"),
                o = n("d9b5"),
                c = n("485a"),
                i = n("b622"),
                u = i("toPrimitive");
            t.exports = function(t, e) { if (!r(t) || o(t)) return t; var n, i = t[u]; if (void 0 !== i) { if (void 0 === e && (e = "default"), n = i.call(t, e), !r(n) || o(n)) return n; throw TypeError("Can't convert object to primitive value") } return void 0 === e && (e = "number"), c(t, e) } }, c430: function(t, e) { t.exports = !1 }, c6cd: function(t, e, n) { var r = n("da84"),
                o = n("ce4e"),
                c = "__core-js_shared__",
                i = r[c] || o(c, {});
            t.exports = i }, c8ba: function(t, e) { var n;
            n = function() { return this }(); try { n = n || new Function("return this")() } catch (r) { "object" === typeof window && (n = window) }
            t.exports = n }, cc12: function(t, e, n) { var r = n("da84"),
                o = n("861d"),
                c = r.document,
                i = o(c) && o(c.createElement);
            t.exports = function(t) { return i ? c.createElement(t) : {} } }, ce4e: function(t, e, n) { var r = n("da84");
            t.exports = function(t, e) { try { Object.defineProperty(r, t, { value: e, configurable: !0, writable: !0 }) } catch (n) { r[t] = e } return e } }, d039: function(t, e) { t.exports = function(t) { try { return !!t() } catch (e) { return !0 } } }, d066: function(t, e, n) { var r = n("da84"),
                o = function(t) { return "function" == typeof t ? t : void 0 };
            t.exports = function(t, e) { return arguments.length < 2 ? o(r[t]) : r[t] && r[t][e] } }, d9b5: function(t, e, n) { var r = n("d066"),
                o = n("fdbf");
            t.exports = o ? function(t) { return "symbol" == typeof t } : function(t) { var e = r("Symbol"); return "function" == typeof e && Object(t) instanceof e } }, da84: function(t, e, n) {
            (function(e) { var n = function(t) { return t && t.Math == Math && t };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() { return this }() || Function("return this")() }).call(this, n("c8ba")) }, e2fc: function(t, e, n) {}, fb15: function(t, e, n) { "use strict"; if (n.r(e), "undefined" !== typeof window) { var r = window.document.currentScript,
                    o = n("8875");
                r = o(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: o }); var c = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                c && (n.p = c[1]) }
            n("b0c0"); var i = n("8bbf"),
                u = { class: "empty" },
                f = ["src"];

            function a(t, e, n, r, o, c) { return Object(i["openBlock"])(), Object(i["createElementBlock"])("view", null, [Object(i["createElementVNode"])("view", u, [Object(i["createElementVNode"])("img", { class: "image", src: n.src }, null, 8, f), Object(i["createElementVNode"])("view", null, Object(i["toDisplayString"])(n.emptyTitle), 1)])]) } var p = { name: "sj-empty", props: { emptyTitle: { type: String, default: "暂无数据" }, src: { type: String, default: "https://api.cloudsymbol.cn/url/image/1629425336682.png" } }, data: function() { return {} } };
            n("6416");
            p.render = a; var s = p;
            Object(i["pushScopeId"])("data-v-66b99a2d"); var l = { class: "line" };

            function d(t, e, n, r, o, c) { return Object(i["openBlock"])(), Object(i["createElementBlock"])("view", null, [Object(i["createElementVNode"])("view", l, [Object(i["createElementVNode"])("span", null, Object(i["toDisplayString"])(n.content), 1)])]) }
            Object(i["popScopeId"])(); var b = { name: "sj-no-more", props: { content: { type: String, default: "到底啦，我是有底线的" } } };
            n("0c97");
            b.render = d, b.__scopeId = "data-v-66b99a2d"; var v = b,
                y = function(t) { t.component(s.name, s), t.component(v.name, v) },
                m = { install: y };
            e["default"] = m }, fdbf: function(t, e, n) { var r = n("4930");
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator } }) }));
//# sourceMappingURL=ui-sunjun-1999.umd.min.js.map