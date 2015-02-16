// Copyright Google Inc. All Rights Reserved.
(function() {
    'use strict';
    var g, h = this,
        k = function(a) {
            return void 0 !== a
        }, aa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
                else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }, da = function(a) {
            return "string" == typeof a
        }, ea = function(a) {
            return "function" == aa(a)
        }, fa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }, ga = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b,
                        c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }, m = function(a, b, c) {
            m = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
            return m.apply(null, arguments)
        }, ha = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        }, ia = Date.now || function() {
            return +new Date
        }, n = function(a, b) {
            var c = a.split("."),
                d = h;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());)!c.length &&
                k(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
        }, p = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.s = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.yc = function(a, c, f) {
                for (var l = Array(arguments.length - 2), t = 2; t < arguments.length; t++) l[t - 2] = arguments[t];
                return b.prototype[c].apply(a, l)
            }
        };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return m.apply(null, c)
        }
        return m(this, a)
    };
    var q = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, q);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    p(q, Error);
    q.prototype.name = "CustomError";
    var ja = function(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    }, ka = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        }, la = function(a, b) {
            var c = String(a).toLowerCase(),
                d = String(b).toLowerCase();
            return c < d ? -1 : c == d ? 0 : 1
        }, ma = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var na = function(a, b) {
        b.unshift(a);
        q.call(this, ja.apply(null, b));
        b.shift()
    };
    p(na, q);
    na.prototype.name = "AssertionError";
    var r = function(a, b, c) {
        if (!a) {
            var d = "Assertion failed";
            if (b) var d = d + (": " + b),
            e = Array.prototype.slice.call(arguments, 2);
            throw new na("" + d, e || []);
        }
    }, oa = function(a, b) {
            throw new na("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        };
    var pa = Array.prototype,
        qa = pa.indexOf ? function(a, b, c) {
            r(null != a.length);
            return pa.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (da(a)) return da(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        };
    var u = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }, ra = function(a) {
            var b = {}, c;
            for (c in a) b[c] = a[c];
            return b
        }, sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        ta = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < sa.length; f++) c = sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var v;
    t: {
        var ua = h.navigator;
        if (ua) {
            var va = ua.userAgent;
            if (va) {
                v = va;
                break t
            }
        }
        v = ""
    };
    var wa = -1 != v.indexOf("Opera") || -1 != v.indexOf("OPR"),
        x = -1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE"),
        y = -1 != v.indexOf("Gecko") && -1 == v.toLowerCase().indexOf("webkit") && !(-1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE")),
        xa = -1 != v.toLowerCase().indexOf("webkit"),
        ya = function() {
            var a = h.document;
            return a ? a.documentMode : void 0
        }, za = function() {
            var a = "",
                b;
            if (wa && h.opera) return a = h.opera.version, ea(a) ? a() : a;
            y ? b = /rv\:([^\);]+)(\)|;)/ : x ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : xa && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(v)) ?
                a[1] : "");
            return x && (b = ya(), b > parseFloat(a)) ? String(b) : a
        }(),
        Aa = {}, z = function(a) {
            var b;
            if (!(b = Aa[a])) {
                b = 0;
                for (var c = ka(String(za)).split("."), d = ka(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var l = c[f] || "",
                        t = d[f] || "",
                        w = /(\d*)(\D*)/g,
                        bc = /(\d*)(\D*)/g;
                    do {
                        var ba = w.exec(l) || ["", "", ""],
                            ca = bc.exec(t) || ["", "", ""];
                        if (0 == ba[0].length && 0 == ca[0].length) break;
                        b = ma(0 == ba[1].length ? 0 : parseInt(ba[1], 10), 0 == ca[1].length ? 0 : parseInt(ca[1], 10)) || ma(0 == ba[2].length, 0 == ca[2].length) || ma(ba[2],
                            ca[2])
                    } while (0 == b)
                }
                b = Aa[a] = 0 <= b
            }
            return b
        }, Ba = h.document,
        Ca = Ba && x ? ya() || ("CSS1Compat" == Ba.compatMode ? parseInt(za, 10) : 5) : void 0;
    var Da = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    Da.prototype.Ba = null;
    var Ea = 0;
    Da.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || Ea++;
        this.xb = d || ia();
        this.F = a;
        this.jb = b;
        this.hb = c;
        delete this.Ba
    };
    Da.prototype.Ca = function() {
        return this.F
    };
    Da.prototype.Sa = function(a) {
        this.F = a
    };
    var A = function(a) {
        this.kb = a;
        this.T = this.va = this.F = this.na = null
    }, B = function(a, b) {
            this.name = a;
            this.value = b
        };
    B.prototype.toString = function() {
        return this.name
    };
    var Fa = new B("SHOUT", 1200),
        Ga = new B("SEVERE", 1E3),
        Ha = new B("WARNING", 900),
        Ia = new B("INFO", 800),
        Ja = new B("CONFIG", 700),
        Ka = new B("FINE", 500),
        C = new B("FINER", 400),
        La = [new B("OFF", Infinity), Fa, Ga, Ha, Ia, Ja, Ka, C, new B("FINEST", 300), new B("ALL", 0)],
        D = null,
        Ma = function(a) {
            if (!D) {
                D = {};
                for (var b = 0, c; c = La[b]; b++) D[c.value] = c, D[c.name] = c
            }
            if (a in D) return D[a];
            for (b = 0; b < La.length; ++b)
                if (c = La[b], c.value <= a) return c;
            return null
        };
    A.prototype.getName = function() {
        return this.kb
    };
    A.prototype.getParent = function() {
        return this.na
    };
    A.prototype.Sa = function(a) {
        this.F = a
    };
    A.prototype.Ca = function() {
        return this.F
    };
    var Na = function(a) {
        if (a.F) return a.F;
        if (a.na) return Na(a.na);
        oa("Root logger has no level set.");
        return null
    };
    A.prototype.log = function(a, b, c) {
        if (a.value >= Na(this).value)
            for (ea(b) && (b = b()), a = new Da(a, String(b), this.kb), c && (a.Ba = c), c = "log:" + a.jb, h.console && (h.console.timeStamp ? h.console.timeStamp(c) : h.console.markTimeline && h.console.markTimeline(c)), h.msWriteProfilerMark && h.msWriteProfilerMark(c), c = this; c;) {
                b = c;
                var d = a;
                if (b.T)
                    for (var e = 0, f = void 0; f = b.T[e]; e++) f(d);
                c = c.getParent()
            }
    };
    A.prototype.info = function(a, b) {
        this.log(Ia, a, b)
    };
    var Oa = {}, Pa = null,
        Qa = function() {
            Pa || (Pa = new A(""), Oa[""] = Pa, Pa.Sa(Ja))
        }, E = function(a) {
            Qa();
            var b;
            if (!(b = Oa[a])) {
                b = new A(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = E(a.substr(0, c));
                c.va || (c.va = {});
                c.va[d] = b;
                b.na = c;
                Oa[a] = b
            }
            return b
        };
    var F = function() {
        this.S = this.S;
        this.H = this.H
    };
    F.prototype.S = !1;
    F.prototype.B = function() {
        this.S || (this.S = !0, this.d())
    };
    var Ra = function(a, b) {
        a.S ? b.call(void 0) : (a.H || (a.H = []), a.H.push(k(void 0) ? m(b, void 0) : b))
    };
    F.prototype.d = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };
    var Sa = function(a) {
        a && "function" == typeof a.B && a.B()
    };
    var G = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.I = !1;
        this.ob = !0
    };
    G.prototype.stopPropagation = function() {
        this.I = !0
    };
    G.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.ob = !1
    };
    var H = function(a, b, c) {
        a && a.log(b, c, void 0)
    }, I = function(a, b) {
            a && a.log(Ga, b, void 0)
        }, Ta = function(a, b) {
            a && a.log(Ha, b, void 0)
        }, J = function(a, b) {
            a && a.info(b, void 0)
        }, Ua = function(a, b) {
            a && a.log(Ka, b, void 0)
        };
    n("cast.receiver.VERSION", "2.0.0");
    var K = E("cast");
    n("cast.receiver.logger", K);
    n("cast.receiver.LoggerLevel", {
        DEBUG: 0,
        VERBOSE: 500,
        INFO: 800,
        WARNING: 900,
        ERROR: 1E3,
        NONE: 1500
    });
    K.sb = function(a) {
        K && K.Sa(Ma(a))
    };
    K.setLevelValue = K.sb;
    K && K.sb(1E3);
    var Va = function() {
        this.nb = ia()
    }, Wa = new Va;
    Va.prototype.set = function(a) {
        this.nb = a
    };
    Va.prototype.reset = function() {
        this.set(ia())
    };
    Va.prototype.get = function() {
        return this.nb
    };
    var Xa = function(a) {
        this.lc = a || "";
        this.wc = Wa
    };
    g = Xa.prototype;
    g.Ta = !0;
    g.ub = !0;
    g.uc = !0;
    g.tc = !0;
    g.vb = !1;
    g.vc = !1;
    var L = function(a) {
        return 10 > a ? "0" + a : String(a)
    }, Ya = function(a, b) {
            var c = (a.xb - b) / 1E3,
                d = c.toFixed(3),
                e = 0;
            if (1 > c) e = 2;
            else
                for (; 100 > c;) e++, c *= 10;
            for (; 0 < e--;) d = " " + d;
            return d
        }, Za = function(a) {
            Xa.call(this, a)
        };
    p(Za, Xa);
    var $a = function() {
        this.mc = m(this.zb, this);
        this.ea = new Za;
        this.ea.ub = !1;
        this.ea.vb = !1;
        this.eb = this.ea.Ta = !1;
        this.gb = "";
        this.Ub = {}
    };
    $a.prototype.zb = function(a) {
        if (!this.Ub[a.hb]) {
            var b;
            b = this.ea;
            var c = [];
            c.push(b.lc, " ");
            if (b.ub) {
                var d = new Date(a.xb);
                c.push("[", L(d.getFullYear() - 2E3) + L(d.getMonth() + 1) + L(d.getDate()) + " " + L(d.getHours()) + ":" + L(d.getMinutes()) + ":" + L(d.getSeconds()) + "." + L(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            b.uc && c.push("[", Ya(a, b.wc.get()), "s] ");
            b.tc && c.push("[", a.hb, "] ");
            b.vc && c.push("[", a.Ca().name, "] ");
            c.push(a.jb);
            b.vb && (d = a.Ba) && c.push("\n", d instanceof Error ? d.message : d.toString());
            b.Ta && c.push("\n");
            b = c.join("");
            if (c = ab) switch (a.Ca()) {
                case Fa:
                    bb(c, "info", b);
                    break;
                case Ga:
                    bb(c, "error", b);
                    break;
                case Ha:
                    bb(c, "warn", b);
                    break;
                default:
                    bb(c, "debug", b)
            } else this.gb += b
        }
    };
    var ab = h.console,
        bb = function(a, b, c) {
            if (a[b]) a[b](c);
            else a.log(c)
        };
    var cb = function(a) {
        cb[" "](a);
        return a
    };
    cb[" "] = function() {};
    var db = !x || x && 9 <= Ca,
        eb = x && !z("9");
    !xa || z("528");
    y && z("1.9b") || x && z("8") || wa && z("9.5") || xa && z("528");
    y && !z("8") || x && z("9");
    var M = function(a, b) {
        G.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.n = this.state = null;
        if (a) {
            this.n = a;
            var c = this.type = a.type;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (y) {
                    var e;
                    t: {
                        try {
                            cb(d.nodeName);
                            e = !0;
                            break t
                        } catch (f) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else "mouseover" ==
                c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            Object.defineProperties ? Object.defineProperties(this, {
                offsetX: {
                    configurable: !0,
                    enumerable: !0,
                    get: this.$a,
                    set: this.rc
                },
                offsetY: {
                    configurable: !0,
                    enumerable: !0,
                    get: this.ab,
                    set: this.sc
                }
            }) : (this.offsetX = this.$a(), this.offsetY = this.ab());
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            a.defaultPrevented && this.preventDefault()
        }
    };
    p(M, G);
    g = M.prototype;
    g.stopPropagation = function() {
        M.s.stopPropagation.call(this);
        this.n.stopPropagation ? this.n.stopPropagation() : this.n.cancelBubble = !0
    };
    g.preventDefault = function() {
        M.s.preventDefault.call(this);
        var a = this.n;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, eb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    g.$a = function() {
        return xa || void 0 !== this.n.offsetX ? this.n.offsetX : this.n.layerX
    };
    g.rc = function(a) {
        Object.defineProperties(this, {
            offsetX: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: a
            }
        })
    };
    g.ab = function() {
        return xa || void 0 !== this.n.offsetY ? this.n.offsetY : this.n.layerY
    };
    g.sc = function(a) {
        Object.defineProperties(this, {
            offsetY: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: a
            }
        })
    };
    var fb = "closure_listenable_" + (1E6 * Math.random() | 0),
        gb = 0;
    var hb = function(a, b, c, d, e) {
        this.G = a;
        this.oa = null;
        this.src = b;
        this.type = c;
        this.da = !! d;
        this.fa = e;
        this.key = ++gb;
        this.P = this.ca = !1
    }, ib = function(a) {
            a.P = !0;
            a.G = null;
            a.oa = null;
            a.src = null;
            a.fa = null
        };
    var N = function(a) {
        this.src = a;
        this.h = {};
        this.ba = 0
    };
    N.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.h[f];
        a || (a = this.h[f] = [], this.ba++);
        var l = jb(a, b, d, e); - 1 < l ? (b = a[l], c || (b.ca = !1)) : (b = new hb(b, this.src, f, !! d, e), b.ca = c, a.push(b));
        return b
    };
    N.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.h)) return !1;
        var e = this.h[a];
        b = jb(e, b, c, d);
        return -1 < b ? (ib(e[b]), r(null != e.length), pa.splice.call(e, b, 1), 0 == e.length && (delete this.h[a], this.ba--), !0) : !1
    };
    var kb = function(a, b) {
        var c = b.type;
        if (c in a.h) {
            var d = a.h[c],
                e = qa(d, b),
                f;
            if (f = 0 <= e) r(null != d.length), pa.splice.call(d, e, 1);
            f && (ib(b), 0 == a.h[c].length && (delete a.h[c], a.ba--))
        }
    };
    N.prototype.Da = function(a, b, c, d) {
        a = this.h[a.toString()];
        var e = -1;
        a && (e = jb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var jb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.P && f.G == b && f.da == !! c && f.fa == d) return e
        }
        return -1
    };
    var lb = "closure_lm_" + (1E6 * Math.random() | 0),
        mb = {}, nb = 0,
        O = function(a, b, c, d, e) {
            if ("array" == aa(b))
                for (var f = 0; f < b.length; f++) O(a, b[f], c, d, e);
            else if (c = ob(c), a && a[fb]) f = c, pb(a), a.m.add(String(b), f, !1, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var f = !! d,
                    l = qb(a);
                l || (a[lb] = l = new N(a));
                d = l.add(b, c, !1, d, e);
                d.oa || (e = rb(), d.oa = e, e.src = a, e.G = d, a.addEventListener ? a.addEventListener(b.toString(), e, f) : a.attachEvent(sb(b.toString()), e), nb++)
            }
        }, rb = function() {
            var a = tb,
                b = db ? function(c) {
                    return a.call(b.src, b.G,
                        c)
                } : function(c) {
                    c = a.call(b.src, b.G, c);
                    if (!c) return c
                };
            return b
        }, ub = function(a, b, c, d, e) {
            if ("array" == aa(b))
                for (var f = 0; f < b.length; f++) ub(a, b[f], c, d, e);
            else c = ob(c), a && a[fb] ? a.m.remove(String(b), c, d, e) : a && (a = qb(a)) && (b = a.Da(b, c, !! d, e)) && vb(b)
        }, vb = function(a) {
            if ("number" != typeof a && a && !a.P) {
                var b = a.src;
                if (b && b[fb]) kb(b.m, a);
                else {
                    var c = a.type,
                        d = a.oa;
                    b.removeEventListener ? b.removeEventListener(c, d, a.da) : b.detachEvent && b.detachEvent(sb(c), d);
                    nb--;
                    (c = qb(b)) ? (kb(c, a), 0 == c.ba && (c.src = null, b[lb] = null)) : ib(a)
                }
            }
        },
        sb = function(a) {
            return a in mb ? mb[a] : mb[a] = "on" + a
        }, xb = function(a, b, c, d) {
            var e = !0;
            if (a = qb(a))
                if (b = a.h[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.da == c && !f.P && (f = wb(f, d), e = e && !1 !== f)
                    }
                return e
        }, wb = function(a, b) {
            var c = a.G,
                d = a.fa || a.src;
            a.ca && vb(a);
            return c.call(d, b)
        }, tb = function(a, b) {
            if (a.P) return !0;
            if (!db) {
                var c;
                if (!(c = b)) t: {
                    c = ["window", "event"];
                    for (var d = h, e; e = c.shift();)
                        if (null != d[e]) d = d[e];
                        else {
                            c = null;
                            break t
                        }
                    c = d
                }
                e = c;
                c = new M(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    t: {
                        var f = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break t
                        } catch (l) {
                            f = !0
                        }
                        if (f || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                    for (var f = a.type, t = e.length - 1; !c.I && 0 <= t; t--) {
                        c.currentTarget = e[t];
                        var w = xb(e[t], f, !0, c),
                            d = d && w
                    }
                    for (t = 0; !c.I && t < e.length; t++) c.currentTarget = e[t], w = xb(e[t], f, !1, c), d = d && w
                }
                return d
            }
            return wb(a, new M(b, this))
        }, qb = function(a) {
            a = a[lb];
            return a instanceof N ? a : null
        }, yb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        ob = function(a) {
            r(a, "Listener can not be null.");
            if (ea(a)) return a;
            r(a.handleEvent, "An object listener must have handleEvent method.");
            a[yb] || (a[yb] = function(b) {
                return a.handleEvent(b)
            });
            return a[yb]
        };
    var P = function() {
        F.call(this);
        this.m = new N(this);
        this.yb = this;
        this.Qa = null
    };
    p(P, F);
    P.prototype[fb] = !0;
    P.prototype.addEventListener = function(a, b, c, d) {
        O(this, a, b, c, d)
    };
    P.prototype.removeEventListener = function(a, b, c, d) {
        ub(this, a, b, c, d)
    };
    P.prototype.dispatchEvent = function(a) {
        pb(this);
        var b, c = this.Qa;
        if (c) {
            b = [];
            for (var d = 1; c; c = c.Qa) b.push(c), r(1E3 > ++d, "infinite loop")
        }
        c = this.yb;
        d = a.type || a;
        if (da(a)) a = new G(a, c);
        else if (a instanceof G) a.target = a.target || c;
        else {
            var e = a;
            a = new G(d, c);
            ta(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var l = b.length - 1; !a.I && 0 <= l; l--) f = a.currentTarget = b[l], e = zb(f, d, !0, a) && e;
        a.I || (f = a.currentTarget = c, e = zb(f, d, !0, a) && e, a.I || (e = zb(f, d, !1, a) && e));
        if (b)
            for (l = 0; !a.I && l < b.length; l++) f = a.currentTarget = b[l], e = zb(f, d, !1, a) && e;
        return e
    };
    P.prototype.d = function() {
        P.s.d.call(this);
        if (this.m) {
            var a = this.m,
                b = 0,
                c;
            for (c in a.h) {
                for (var d = a.h[c], e = 0; e < d.length; e++)++b, ib(d[e]);
                delete a.h[c];
                a.ba--
            }
        }
        this.Qa = null
    };
    var zb = function(a, b, c, d) {
        b = a.m.h[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var l = b[f];
            if (l && !l.P && l.da == c) {
                var t = l.G,
                    w = l.fa || l.src;
                l.ca && kb(a.m, l);
                e = !1 !== t.call(w, d) && e
            }
        }
        return e && 0 != d.ob
    };
    P.prototype.Da = function(a, b, c, d) {
        return this.m.Da(String(a), b, c, d)
    };
    var pb = function(a) {
        r(a.m, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var Ab = function(a, b, c) {
        if (ea(a)) c && (a = m(a, c));
        else if (a && "function" == typeof a.handleEvent) a = m(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : h.setTimeout(a, b || 0)
    };
    var Q = function(a, b) {
        P.call(this);
        this.Ab = k(a) ? a : !0;
        this.Ea = b || Bb;
        this.ma = this.Ea(this.Z)
    };
    p(Q, P);
    g = Q.prototype;
    g.j = null;
    g.u = null;
    g.O = void 0;
    g.wa = !1;
    g.Z = 0;
    g.J = null;
    var Cb = Q.prototype,
        Db = E("goog.net.WebSocket");
    Cb.a = Db;
    var Bb = function(a) {
        return Math.min(1E3 * Math.pow(2, a), 6E4)
    };
    g = Q.prototype;
    g.open = function(a, b) {
        r(h.WebSocket, "This browser does not support WebSocket");
        r(!this.W(), "The WebSocket is already open");
        null != this.J && h.clearTimeout(this.J);
        this.J = null;
        this.u = a;
        (this.O = b) ? (J(this.a, "Opening the WebSocket on " + this.u + " with protocol " + this.O), this.j = new WebSocket(this.u, this.O)) : (J(this.a, "Opening the WebSocket on " + this.u), this.j = new WebSocket(this.u));
        this.j.onopen = m(this.hc, this);
        this.j.onclose = m(this.ec, this);
        this.j.onmessage = m(this.Na, this);
        this.j.onerror = m(this.La, this)
    };
    g.close = function() {
        null != this.J && h.clearTimeout(this.J);
        this.J = null;
        this.j && (J(this.a, "Closing the WebSocket."), this.wa = !0, this.j.close(), this.j = null)
    };
    g.send = function(a) {
        r(this.W(), "Cannot send without an open socket");
        this.j.send(a)
    };
    g.W = function() {
        return !!this.j && 1 == this.j.readyState
    };
    g.hc = function() {
        J(this.a, "WebSocket opened on " + this.u);
        this.dispatchEvent("d");
        this.Z = 0;
        this.ma = this.Ea(this.Z)
    };
    g.ec = function(a) {
        J(this.a, "The WebSocket on " + this.u + " closed.");
        this.dispatchEvent("a");
        this.j = null;
        this.wa ? (J(this.a, "The WebSocket closed normally."), this.u = null, this.O = void 0) : (I(this.a, "The WebSocket disconnected unexpectedly: " + a.data), this.Ab && (J(this.a, "Seconds until next reconnect attempt: " + Math.floor(this.ma / 1E3)), this.J = Ab(m(this.open, this, this.u, this.O), this.ma, this), this.Z++, this.ma = this.Ea(this.Z)));
        this.wa = !1
    };
    g.Na = function(a) {
        this.dispatchEvent(new Eb(a.data))
    };
    g.La = function(a) {
        a = a.data;
        I(this.a, "An error occurred: " + a);
        this.dispatchEvent(new Fb(a))
    };
    g.d = function() {
        Q.s.d.call(this);
        this.close()
    };
    var Eb = function(a) {
        G.call(this, "c");
        this.message = a
    };
    p(Eb, G);
    var Fb = function(a) {
        G.call(this, "b");
        this.data = a
    };
    p(Fb, G);
    var R = function(a, b) {
        P.call(this);
        this.K = b;
        this.Ga = !0;
        this.M = a;
        this.onClose = this.onMessage = null;
        var c = this.M,
            d = this.K,
            e = this.Ma;
        pb(c);
        c.m.add(String(d), e, !1, !1, this)
    };
    p(R, P);
    n("cast.receiver.CastChannel", R);
    R.EventType = {
        MESSAGE: "message",
        CLOSE: "close"
    };
    var Gb = function(a, b) {
        G.call(this, a);
        this.message = b
    };
    p(Gb, G);
    R.Event = Gb;
    R.prototype.a = E("cast.receiver.CastChannel");
    R.prototype.t = function() {
        return "CastChannel[" + this.K + " " + this.M.C() + "]"
    };
    R.prototype.C = function() {
        return this.M.C()
    };
    R.prototype.getNamespace = R.prototype.C;
    R.prototype.$b = function() {
        return this.K
    };
    R.prototype.getSenderId = R.prototype.$b;
    R.prototype.Ma = function(a) {
        H(this.a, C, "Dispatching CastChannel message [" + this.M.C() + ", " + this.K + "]: " + a.data);
        a = new Gb("message", a.data);
        if (this.onMessage) this.onMessage(a);
        this.dispatchEvent(a)
    };
    R.prototype.close = function() {
        if (this.Ga) {
            this.Ga = !1;
            J(this.a, "Closing CastChannel [" + this.M.C() + ", " + this.K + "]");
            var a = new Gb("close", this.K);
            if (this.onClose) this.onClose(a);
            this.dispatchEvent(a);
            this.B()
        }
    };
    R.prototype.send = function(a) {
        if (!this.Ga) throw Error("Invalid state, socket not open");
        this.M.send(this.K, a)
    };
    R.prototype.send = R.prototype.send;
    R.prototype.d = function() {
        R.s.d.call(this);
        H(this.a, C, "Disposed " + this.t())
    };
    n("cast.receiver.system.NAMESPACE_PREFIX", "urn:x-cast:");
    n("cast.receiver.system.ApplicationData", function() {
        this.name = this.id = "";
        this.sessionId = 0;
        this.namespaces = [];
        this.launchingSenderId = ""
    });
    n("cast.receiver.system.SystemVolumeData", function() {
        this.level = 1;
        this.muted = !1
    });
    n("cast.receiver.system.Sender", function() {
        this.userAgent = this.id = ""
    });
    n("cast.receiver.system.VisibilityState", {
        VISIBLE: "visible",
        NOT_VISIBLE: "notvisible",
        UNKNOWN: "unknown"
    });
    n("cast.receiver.system.SystemState", {
        NOT_STARTED: "notstarted",
        STARTING_IN_BACKGROUND: "startinginbackground",
        STARTING: "starting",
        READY: "ready",
        STOPPING_IN_BACKGROUND: "stoppinginbackground",
        STOPPING: "stopping"
    });
    var Hb = function() {
        P.call(this);
        this.l = null;
        var a = new Q(!0);
        this.l && this.l.B();
        this.l = a;
        Ra(this, ha(Sa, this.l));
        O(this.l, "d", this.ic, !1, this);
        O(this.l, "a", this.fc, !1, this);
        O(this.l, "b", this.La, !1, this);
        O(this.l, "c", this.Na, !1, this)
    };
    p(Hb, P);
    var Ib = function(a, b, c) {
        G.call(this, a);
        this.senderId = b;
        this.data = c
    };
    p(Ib, G);
    Hb.prototype.a = E("cast.receiver.IpcChannel");
    var Jb = function(a, b) {
        Ua(a.a, "IpcChannel " + b);
        a.dispatchEvent(new Ib("urn:x-cast:com.google.cast.system", "SystemSender", JSON.stringify({
            type: b
        })))
    };
    g = Hb.prototype;
    g.ic = function() {
        Jb(this, "opened")
    };
    g.fc = function() {
        Jb(this, "closed")
    };
    g.La = function() {
        Jb(this, "error")
    };
    g.Na = function(a) {
        Ua(this.a, "Received message: " + a.message);
        var b = (a = JSON.parse(a.message)) && a.namespace;
        a && b && a.senderId && a.data ? this.dispatchEvent(new Ib(b, a.senderId, a.data)) : I(this.a, "IpcChannel Message received is invalid")
    };
    g.open = function() {
        J(this.a, "Opening message bus websocket");
        this.l.open("ws://localhost:8008/v2/ipc")
    };
    g.close = function() {
        J(this.a, "Closing message bus websocket");
        this.l.close()
    };
    g.W = function() {
        return this.l.W()
    };
    g.send = function(a, b, c) {
        if (!this.W) throw Error("Underlying websocket is not open");
        a = JSON.stringify({
            namespace: a,
            senderId: b,
            data: c
        });
        Ua(this.a, "IPC message sent: " + a);
        this.l.send(a)
    };
    g.d = function() {
        Hb.s.d.call(this);
        H(this.a, C, "Disposed IpcChannel")
    };
    var S = function(a, b, c, d) {
        P.call(this);
        this.w = a;
        this.D = b;
        this.X = d || "STRING";
        this.onMessage = null;
        this.serializeMessage = this.Tb;
        this.deserializeMessage = this.Fb;
        this.g = {};
        for (a = 0; a < c.length; a++) this.g[c[a]] = null;
        c = this.D;
        a = this.w;
        b = this.Ma;
        pb(c);
        c.m.add(String(a), b, !1, !1, this)
    };
    p(S, P);
    n("cast.receiver.CastMessageBus", S);
    S.MessageType = {
        STRING: "STRING",
        JSON: "JSON",
        CUSTOM: "CUSTOM"
    };
    S.EventType = {
        MESSAGE: "message"
    };
    var Kb = function(a, b, c) {
        G.call(this, a);
        this.senderId = b;
        this.data = c
    };
    p(Kb, G);
    S.Event = Kb;
    S.prototype.a = E("cast.receiver.CastMessageBus");
    S.prototype.t = function() {
        return "CastMessageBus[" + this.w + "]"
    };
    S.prototype.C = function() {
        return this.w
    };
    S.prototype.getNamespace = S.prototype.C;
    S.prototype.Za = function() {
        return this.X
    };
    S.prototype.getMessageType = S.prototype.Za;
    S.prototype.Ma = function(a) {
        H(this.a, C, "Dispatching CastMessageBus message");
        var b = "STRING" == this.X ? a.data : this.deserializeMessage(a.data);
        this.dispatchEvent(new Kb(a.senderId, a.senderId, b));
        a = new Kb("message", a.senderId, b);
        if (this.onMessage) this.onMessage(a);
        this.dispatchEvent(a)
    };
    S.prototype.send = function(a, b) {
        if ("STRING" == this.X) {
            if (!da(b)) throw Error("Wrong argument, CastMessageBus type is STRING");
            this.D.send(this.w, a, b)
        } else this.D.send(this.w, a, this.serializeMessage(b))
    };
    S.prototype.send = S.prototype.send;
    S.prototype.Ua = function(a) {
        this.send("*:*", a)
    };
    S.prototype.broadcast = S.prototype.Ua;
    S.prototype.Wb = function(a) {
        if (a in this.g) return this.g[a] || (this.g[a] = new R(this, a)), this.g[a];
        throw Error("Requested a socket for a disconnected sender: " + a);
    };
    S.prototype.getCastChannel = S.prototype.Wb;
    S.prototype.Tb = function(a) {
        if ("JSON" != this.X) throw Error("Unexpected message type for JSON serialization");
        return JSON.stringify(a)
    };
    S.prototype.Fb = function(a) {
        if ("JSON" != this.X) throw Error("Unexpected message type for JSON serialization");
        return JSON.parse(a)
    };
    S.prototype.d = function() {
        S.s.d.call(this);
        for (var a in this.g) this.g[a] && this.g[a].close();
        this.g = {};
        H(this.a, C, "Disposed " + this.t())
    };
    var T = function() {
        P.call(this);
        if (this.Va = new $a) {
            var a = this.Va;
            if (1 != a.eb) {
                Qa();
                var b = Pa,
                    c = a.mc;
                b.T || (b.T = []);
                b.T.push(c);
                a.eb = !0
            }
        }
        this.i = ra(Lb);
        this.Y = !1;
        this.D = new Hb;
        this.r = {};
        this.aa = new S("urn:x-cast:com.google.cast.system", this.D, u(this.r), "JSON");
        Ra(this, ha(Sa, this.aa));
        this.Wa = this.sa = null;
        this.cb = !1;
        this.fb = this.ia = null;
        this.pa = !0;
        this.cc = "1.11";
        this.L = "notstarted";
        this.o = {};
        this.onStandbyChanged = this.onVisibilityChanged = this.onSystemVolumeChanged = this.onSenderDisconnected = this.onSenderConnected =
            this.onShutdown = this.onReady = null;
        O(this.aa, "SystemSender", this.jc, !1, this);
        O(window, "unload", this.Pa, !1, this);
        O(document, "visibilitychange", this.lb, !1, this);
        H(this.a, Fa, "Version: 2.0.0.0024")
    };
    p(T, P);
    n("cast.receiver.CastReceiverManager", T);
    T.Ya = function() {
        return T.Fa ? T.Fa : T.Fa = new T
    };
    T.getInstance = T.Ya;
    T.EventType = {
        READY: "ready",
        SHUTDOWN: "shutdown",
        SENDER_CONNECTED: "senderconnected",
        SENDER_DISCONNECTED: "senderdisconnected",
        ERROR: "error",
        SYSTEM_VOLUME_CHANGED: "systemvolumechanged",
        VISIBILITY_CHANGED: "visibilitychanged",
        STANDBY_CHANGED: "standbychanged"
    };
    var U = function(a, b) {
        G.call(this, a);
        this.data = b
    };
    p(U, G);
    T.Event = U;
    n("cast.receiver.system.DisconnectReason", {
        REQUESTED_BY_SENDER: "requested_by_sender",
        ERROR: "error",
        UNKNOWN: "unknown"
    });
    var Mb = function(a, b, c) {
        U.call(this, "senderdisconnected", a);
        this.senderId = a;
        this.userAgent = b;
        this.reason = c
    };
    p(Mb, U);
    T.SenderDisconnectedEvent = Mb;
    var Nb = function(a, b) {
        U.call(this, "senderconnected", a);
        this.senderId = a;
        this.userAgent = b
    };
    p(Nb, U);
    T.SenderConnectedEvent = Nb;
    var Ob = function(a) {
        U.call(this, "visibilitychanged", a);
        this.isVisible = a
    };
    p(Ob, U);
    T.VisibilityChangedEvent = Ob;
    var Pb = function(a) {
        U.call(this, "standbychanged", null);
        this.isStandby = a
    };
    p(Pb, U);
    T.StandbyChangedEvent = Pb;
    var Qb = function(a) {
        U.call(this, "systemvolumechanged", a);
        this.data = a
    };
    p(Qb, U);
    T.SystemVolumeChangedEvent = Qb;
    var Rb = function(a) {
        U.call(this, "ready", a);
        this.data = a
    };
    p(Rb, U);
    T.ReadyEvent = Rb;
    var Sb = function() {
        U.call(this, "shutdown", null)
    };
    p(Sb, U);
    T.ShutdownEvent = Sb;
    T.Config = function() {
        this.dialData = this.maxInactivity = this.statusText = void 0
    };
    var Lb = {
        maxInactivity: 10
    };
    T.prototype.a = E("cast.receiver.CastReceiverManager");
    T.prototype.t = function() {
        return "CastReceiverManager"
    };
    T.prototype.start = function(a) {
        if (a) {
            if (!a) throw Error("Cannot validate undefined config.");
            if (void 0 != a.maxInactivity && 5 > a.maxInactivity) throw Error("config.maxInactivity must be greater than or equal to 5 seconds.");
            ta(this.i, a || {})
        }
        this.cb = !0;
        this.D.open()
    };
    T.prototype.start = T.prototype.start;
    T.prototype.stop = function() {
        this.B();
        window.close()
    };
    T.prototype.stop = T.prototype.stop;
    T.prototype.Ha = function() {
        return "ready" == this.L
    };
    T.prototype.isSystemReady = T.prototype.Ha;
    T.prototype.ac = function() {
        return u(this.r)
    };
    T.prototype.getSenders = T.prototype.ac;
    T.prototype.Zb = function(a) {
        return this.r[a] ? ra(this.r[a]) : null
    };
    T.prototype.getSender = T.prototype.Zb;
    T.prototype.bc = function() {
        return null == this.ia ? this.fb ? "notvisible" : "unknown" : this.ia ? "visible" : "notvisible"
    };
    T.prototype.getVisibilityState = T.prototype.bc;
    T.prototype.bb = function() {
        "notstarted" == this.L && (this.L = /[&?]google_cast_bg=true(&|$)/.test(window.location.search) ? "startinginbackground" : "starting");
        return this.L
    };
    T.prototype.getSystemState = T.prototype.bb;
    T.prototype.Vb = function() {
        return this.sa
    };
    T.prototype.getApplicationData = T.prototype.Vb;
    T.prototype.Xb = function() {
        return this.Wa
    };
    T.prototype.getDeviceCapabilities = T.prototype.Xb;
    T.prototype.nc = function(a) {
        this.Ha() ? Tb(this, a) : this.i.statusText != a && (this.i.statusText = a, this.Y = !0)
    };
    T.prototype.setApplicationState = T.prototype.nc;
    T.prototype.pc = function(a, b) {
        this.Ha() ? Tb(this, a, b) : (void 0 != a && a != this.i.statusText && (this.i.statusText = a, this.Y = !0), void 0 != b && b != this.i.dialData && (this.i.dialData = b, this.Y = !0))
    };
    T.prototype.setLegacyApplicationState = T.prototype.pc;
    var Tb = function(a, b, c) {
        var d = {
            type: "setappstate"
        };
        void 0 != b && (d.statusText = b);
        void 0 != c && (d.dialData = c);
        a.aa.send("SystemSender", d)
    };
    T.prototype.rb = function(a) {
        this.aa.send("SystemSender", {
            type: "startheartbeat",
            maxInactivity: a
        })
    };
    T.prototype.setInactivityTimeout = T.prototype.rb;
    T.prototype.Xa = function(a, b) {
        if ("urn:x-cast:com.google.cast.system" == a) throw Error("Protected namespace");
        if (0 != a.lastIndexOf("urn:x-cast:", 0)) throw Error("Invalid namespace prefix");
        if (!this.o[a]) {
            if (this.cb) throw Error("New namespaces can not be requested after start has been called");
            this.o[a] = new S(a, this.D, u(this.r), b);
            Ra(this, ha(Sa, this.o[a]))
        }
        if (b && this.o[a].Za() != b) throw Error("Invalid messageType for the namespace");
        return this.o[a]
    };
    T.prototype.getCastMessageBus = T.prototype.Xa;
    T.prototype.jc = function(a) {
        a = a.data;
        switch (a.type) {
            case "opened":
                J(this.a, "Underlying message bus is open");
                var b = u(this.o),
                    c = this.i.statusText;
                a = this.i.dialData;
                var d = {
                    type: "ready"
                };
                c && (d.statusText = c);
                a && (d.dialData = a);
                d.activeNamespaces = b;
                d.version = "2.0.0";
                d.messagesVersion = "1.0";
                this.aa.send("SystemSender", d);
                this.i.maxInactivity && this.rb(this.i.maxInactivity);
                break;
            case "closed":
                this.Pa();
                break;
            case "error":
                this.dispatchEvent("error");
                break;
            case "ready":
                b = a.launchingSenderId;
                c = u(this.o);
                this.ra =
                    a.version;
                this.pa = !Ub(this, this.cc);
                this.Wa = (d = a.deviceCapabilities) ? ra(d) : {};
                this.sa = {
                    id: a.applicationId,
                    name: a.applicationName,
                    sessionId: a.sessionId,
                    namespaces: c,
                    launchingSenderId: b
                };
                this.L = "ready";
                this.Y && (this.Y = !1, Tb(this, this.i.statusText, this.i.dialData));
                J(this.a, "Dispatching CastReceiverManager system ready event");
                b = new Rb(this.sa);
                if (this.onReady) this.onReady(b);
                this.dispatchEvent(b);
                break;
            case "senderconnected":
                b = {
                    id: a.senderId,
                    userAgent: a.userAgent
                };
                J(this.a, "Dispatching CastReceiverManager sender connected event [" +
                    b.id + "]");
                b.id in this.r && I(this.a, "Unexpected connected message for already connected sender: " + b.id);
                this.r[b.id] = b;
                a = new Nb(b.id, b.userAgent);
                for (c in this.o) {
                    var d = this.o[c],
                        e = b.id;
                    e in d.g ? I(d.a, "Unexpected sender already registered [" + d.w + ", " + e + "]") : (J(d.a, "Registering sender [" + d.w + ", " + e + "]"), d.g[e] = null)
                }
                if (this.onSenderConnected) this.onSenderConnected(a);
                this.dispatchEvent(a);
                break;
            case "senderdisconnected":
                c = a.senderId;
                switch (a.reason) {
                    case "closed_by_peer":
                        a = "requested_by_sender";
                        break;
                    case "transport_invalid_message":
                        a = "error";
                        break;
                    default:
                        a = "unknown"
                }
                J(this.a, "Dispatching sender disconnected event [" + c + "] Reason: " + a);
                if (c in this.r) {
                    d = this.r[c].userAgent;
                    delete this.r[c];
                    a = new Mb(c, d, a);
                    for (b in this.o) d = this.o[b], e = c, e in d.g && (J(d.a, "Unregistering sender [" + d.w + ", " + e + "]"), d.g[e] && d.g[e].close(), delete d.g[e]);
                    if (this.onSenderDisconnected) this.onSenderDisconnected(a);
                    this.dispatchEvent(a)
                } else I(this.a, "Unknown sender disconnected: " + c);
                break;
            case "volumechanged":
                b = {
                    level: a.level,
                    muted: a.muted
                };
                J(this.a, "Dispatching system volume changed event [" + b.level + ", " + b.muted + "]");
                b = new Qb(b);
                if (this.onSystemVolumeChanged) this.onSystemVolumeChanged(b);
                this.dispatchEvent(b);
                break;
            case "visibilitychanged":
                this.pa || Vb(this, !1 !== a.visible);
                break;
            case "standbychanged":
                if (!this.pa) {
                    b = !0 === a.standby;
                    J(this.a, "Dispatching standby changed event " + b);
                    this.fb = b;
                    b = new Pb(b);
                    if (this.onStandbyChanged) this.onStandbyChanged(b);
                    this.dispatchEvent(b)
                }
                break;
            default:
                throw Error("Unexpected message type: " +
                    a.type);
        }
    };
    var Vb = function(a, b) {
        if (b != a.ia) {
            J(a.a, "Dispatching visibility changed event " + b);
            a.ia = b;
            var c = new Ob(b);
            if (a.onVisibilityChanged) a.onVisibilityChanged(c);
            a.dispatchEvent(c)
        }
    };
    T.prototype.lb = function() {
        this.pa && Vb(this, "visible" == document.visibilityState)
    };
    T.prototype.Pa = function() {
        J(this.a, "Dispatching shutdown event");
        this.bb();
        this.L = "startinginbackground" == this.L ? "stoppinginbackground" : "stopping";
        var a = new Sb;
        if (this.onShutdown) this.onShutdown(a);
        this.dispatchEvent(a)
    };
    var Ub = function(a, b) {
        if (!b) return I(a.a, "Version not provided"), !1;
        if (!a.ra) return I(a.a, "No System Version"), !1;
        var c = b.split(".");
        if (!c.length) return I(a.a, "Version provided is not valid: " + b), !1;
        var d = a.ra.split(".");
        if (!d.length) return I(a.a, "System Version format is not valid " + a.ra), !1;
        for (var e = 0; e < c.length; e++) {
            var f = parseInt(c[e], 10);
            if (isNaN(f)) return I(a.a, "Version is not numeric: " + b), !1;
            var l = d.length > e ? parseInt(d[e], 10) : 0;
            if (isNaN(l)) return I(a.a, "System Version is not numeric: " + a.ra), !1;
            if (f > l) return !1
        }
        return !0
    };
    T.prototype.d = function() {
        T.s.d.call(this);
        window && ub(window, "unload", this.Pa, !1, this);
        document && ub(document, "visibilitychange", this.lb, !1, this);
        delete T.Fa;
        Ua(this.a, "Disposed " + this.t())
    };
    var Wb = function(a, b) {
        this.a = a;
        this.b = b;
        this.Aa = function() {};
        this.za = function() {};
        this.Ia = function() {};
        this.V = 0;
        this.q = this.p = null;
        this.ga = !0;
        O(this.b, "error", this.Ka, !1, this);
        O(this.b, "ended", this.Ja, !1, this);
        O(this.b, "loadedmetadata", this.Oa, !1, this);
        J(this.a, "Using default Player")
    };
    g = Wb.prototype;
    g.mb = function(a, b) {
        this.ga = a;
        this.V = b
    };
    g.Ka = function(a) {
        this.Aa(a)
    };
    g.Ja = function() {
        this.za()
    };
    g.Oa = function() {
        this.p && this.q && Xb(this.p, this.q);
        this.Ia()
    };
    g.registerErrorCallback = function(a) {
        this.Aa = a
    };
    g.registerEndedCallback = function(a) {
        this.za = a
    };
    g.registerLoadCallback = function(a) {
        this.Ia = a
    };
    g.unregisterErrorCallback = function() {
        this.Aa = function() {}
    };
    g.unregisterEndedCallback = function() {
        this.za = function() {}
    };
    g.unregisterLoadCallback = function() {
        this.Ia = function() {}
    };
    g.load = function(a, b, c, d, e) {
        d && d.tracks && this.b && (this.p && this.p.B(), this.p = new V(this.b, d.tracks, d.activeTrackIds || [], d.textTrackStyle || null));
        e || (this.V = c && 0 < c ? c : 0, J(this.a, "Load - contentId: " + a + " autoplay: " + b + " time: " + this.V), this.b.autoplay = !1, a && (this.b.src = a), this.b.autoplay = b, this.b.load())
    };
    g.reset = function() {
        this.p && (this.p.B(), this.p = null);
        this.activeTrackIds = null;
        this.b.removeAttribute("src");
        this.V = 0;
        this.b.load()
    };
    g.play = function() {
        this.b.play()
    };
    g.seek = function(a, b) {
        this.b.currentTime != a && (this.b.currentTime = a);
        "PLAYBACK_START" == b && this.b.paused ? this.b.play() : "PLAYBACK_PAUSE" != b || this.b.paused || this.b.pause()
    };
    g.pause = function() {
        this.b.pause()
    };
    g.getState = function() {
        null == this.ga && (this.ga = this.b.autoplay);
        return this.b.paused ? this.b.duration && (this.b.currentTime || 0 == this.b.currentTime) && this.b.duration != this.b.currentTime ? this.b.currentTime == this.V && this.ga ? "BUFFERING" : "PAUSED" : "IDLE" : "PLAYING"
    };
    g.getCurrentTimeSec = function() {
        return this.b.currentTime
    };
    g.getDurationSec = function() {
        return this.b.duration
    };
    g.getVolume = function() {
        return {
            level: this.b.volume,
            muted: this.b.muted
        }
    };
    g.setVolume = function(a) {
        void 0 != a.level && (this.b.volume = a.level);
        void 0 != a.muted && (this.b.muted = a.muted)
    };
    g.editTracksInfo = function(a) {
        if (this.p) {
            if (a.textTrackStyle) {
                var b = this.p,
                    c = a.textTrackStyle;
                Yb(b);
                Zb(b, c)
            }
            a.activeTrackIds && Xb(this.p, a.activeTrackIds);
            this.q = a.activeTrackIds || []
        }
    };
    n("cast.receiver.media.MEDIA_NAMESPACE", "urn:x-cast:com.google.cast.media");
    n("cast.receiver.media.StreamType", {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        NONE: "NONE"
    });
    n("cast.receiver.media.ErrorType", {
        INVALID_PLAYER_STATE: "INVALID_PLAYER_STATE",
        LOAD_FAILED: "LOAD_FAILED",
        LOAD_CANCELLED: "LOAD_CANCELLED",
        INVALID_REQUEST: "INVALID_REQUEST"
    });
    n("cast.receiver.media.ErrorReason", {
        INVALID_COMMAND: "INVALID_COMMAND",
        INVALID_PARAMS: "INVALID_PARAMS",
        INVALID_MEDIA_SESSION_ID: "INVALID_MEDIA_SESSION_ID",
        DUPLICATE_REQUEST_ID: "DUPLICATE_REQUEST_ID"
    });
    n("cast.receiver.media.IdleReason", {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    });
    n("cast.receiver.media.SeekResumeState", {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    });
    n("cast.receiver.media.PlayerState", {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    });
    var $b = function() {
        this.contentId = "";
        this.streamType = "NONE";
        this.contentType = "";
        this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = void 0
    };
    n("cast.receiver.media.MediaInformation", $b);
    var ac = function() {
        this.muted = this.level = void 0
    };
    n("cast.receiver.media.Volume", ac);
    n("cast.receiver.media.MediaStatus", function() {
        this.mediaSessionId = 0;
        this.media = void 0;
        this.playbackRate = 1;
        this.playerState = "IDLE";
        this.idleReason = void 0;
        this.supportedMediaCommands = this.currentTime = 0;
        this.volume = {
            level: 0,
            muted: !1
        };
        this.activeTrackIds = null;
        this.customData = void 0
    });
    n("cast.receiver.media.Command", {
        PAUSE: 1,
        SEEK: 2,
        STREAM_VOLUME: 4,
        STREAM_MUTE: 8,
        ALL_BASIC_MEDIA: 15,
        QUEUE_NEXT: 64,
        QUEUE_PREV: 128
    });
    n("cast.receiver.media.TrackType", {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    });
    n("cast.receiver.media.TextTrackType", {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    });
    n("cast.receiver.media.TextTrackEdgeType", {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    });
    n("cast.receiver.media.TextTrackWindowType", {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    });
    n("cast.receiver.media.TextTrackFontGenericFamily", {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    });
    n("cast.receiver.media.TextTrackFontStyle", {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    });
    n("cast.receiver.media.Track", function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = void 0;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = void 0
    });
    n("cast.receiver.media.TextTrackStyle", function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = this.fontScale = void 0
    });
    n("cast.receiver.media.TracksInfo", function() {
        this.textTrackStyle = this.activeTrackIds = this.tracks = void 0
    });
    var cc = /#(.)(.)(.)(.)/,
        ec = function(a) {
            if (!dc.test(a)) throw Error("'" + a + "' is not a valid alpha hex color");
            5 == a.length && (a = a.replace(cc, "#$1$1$2$2$3$3$4$4"));
            a = a.toLowerCase();
            return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16), parseInt(a.substr(7, 2), 16) / 255]
        }, dc = /^#(?:[0-9a-f]{4}){1,2}$/i,
        fc = function(a) {
            var b = a.slice(0);
            b[3] = Math.round(1E3 * a[3]) / 1E3;
            return "rgba(" + b.join(",") + ")"
        };
    !y && !x || x && x && 9 <= Ca || y && z("1.9.1");
    x && z("9");
    var V = function(a, b, c, d) {
        F.call(this);
        this.b = a;
        this.ya = this.qa = null;
        this.A = [];
        this.xa = !1;
        this.ua = "cast-captions-" + Math.floor(1E6 * Math.random()).toString();
        this.Cb = "[" + this.ua + '="true"]::cue ';
        this.Db = new RegExp(/^[\.'":%,;\s\-0-9a-z]+$/i);
        for (a = 0; a < b.length; a++) {
            var e = b[a].trackContentId;
            if ("TEXT" === b[a].type && e) {
                var f = b[a].trackContentType;
                if (0 == la("vtt", e.substr(e.length - 3, 3)) || void 0 != f && 0 == la(f, "text/vtt")) e = document.createElement("track"), e.src = b[a].trackContentId, e.id = b[a].trackId, e.label = b[a].name,
                e.srclang = b[a].language, e.kind = (b[a].subtype || "").toLowerCase(), this.A.push(e), this.b.appendChild(e)
            }
        }
        Yb(this);
        d && Zb(this, d);
        Xb(this, c)
    };
    p(V, F);
    V.prototype.a = E("cast.receiver.TextTracksManager");
    V.prototype.t = function() {
        return "TextTracksManager"
    };
    var Xb = function(a, b) {
        for (var c = 0; c < a.A.length; c++) {
            var d = a.A[c].track;
            0 <= qa(b, parseInt(a.A[c].id, 10)) ? d.mode = "showing" : d.mode = "disabled"
        }
    }, gc = function(a) {
            a.ya && (a.b.removeAttribute(a.ua), document.head.removeChild(a.ya), a.qa = null)
        }, hc = function(a) {
            a.xa && (a.b.removeAttribute("crossorigin"), a.xa = !1)
        }, W = function(a, b, c) {
            !0 === c || a.Db.test(b) ? a.qa.insertRule(a.Cb + "{ " + b + " }", a.qa.cssRules.length) : Ta(a.a, "Invalid css cue: " + b)
        }, Yb = function(a) {
            gc(a);
            hc(a);
            var b = document,
                c = b.createElement("style");
            c.type = "text/css";
            b.getElementsByTagName("head")[0].appendChild(c);
            c.styleSheet ? c.styleSheet.cssText = "" : c.appendChild(b.createTextNode(""));
            a.ya = c;
            a.qa = document.styleSheets[document.styleSheets.length - 1];
            W(a, "font-size: 4.1vh;");
            W(a, "font-family: monospace;");
            W(a, "font-style: normal;");
            W(a, "font-weight: normal;");
            W(a, "background-color: black;");
            W(a, "color: white;");
            a.b.setAttribute(a.ua, !0);
            0 < a.A.length && !a.b.getAttribute("crossorigin") && (a.b.setAttribute("crossorigin", "anonymous"), a.xa = !0)
        }, ic = function(a, b, c) {
            var d;
            try {
                d = fc(ec(b))
            } catch (e) {
                Ta(a.a, "Invalid color: " + b)
            }
            if (d) switch (a = "rgba(204, 204, 204, " + parseInt(b.substring(7, 9), 16) + ")", c) {
                case "OUTLINE":
                    return "text-shadow: 0 0 4px " + d + ", 0 0 4px " + d + ", 0 0 4px " + d + ", 0 0 4px " + d + ";";
                case "DROP_SHADOW":
                    return "text-shadow: 0px 2px 3px " + d + ", 0px 2px 4px " + d + ", 0px 2px 5px " + d + ";";
                case "RAISED":
                    return "text-shadow: 1px 1px " + d + ", 2px 2px " + d + ", 3px 3px " + d + ";";
                case "DEPRESSED":
                    return "text-shadow: 1px 1px " + a + ", 0 1px " + a + ", -1px -1px " + d + ", 0 -1px " + d + ";"
            }
            return ""
        },
        jc = function(a) {
            switch (a) {
                case "BOLD":
                    return "font-weight: bold;";
                case "BOLD_ITALIC":
                    return "font-style: italic; font-weight: bold;";
                case "ITALIC":
                    return "font-style: italic;"
            }
            return "font-style: normal;"
        }, Zb = function(a, b) {
            if (k(b.foregroundColor)) try {
                var c = fc(ec(b.foregroundColor));
                W(a, "color: " + c + ";", !0)
            } catch (d) {
                Ta(a.a, "Invalid color: " + b.foregroundColor)
            }
            if (k(b.backgroundColor)) try {
                var e = fc(ec(b.backgroundColor));
                W(a, "background-color: " + e + ";", !0)
            } catch (f) {
                Ta(a.a, "Invalid color: " + b.backgroundColor)
            }
            k(b.fontScale) &&
                W(a, "font-size: " + 100 * b.fontScale + "%;");
            if (k(b.fontFamily) || k(b.fontGenericFamily)) {
                var c = b.fontFamily,
                    e = b.fontGenericFamily,
                    l = "font-family: ",
                    t = "";
                k(c) && (l += '"' + c + '"', t = ", ");
                if (k(e)) {
                    var w;
                    switch (e) {
                        case "SANS_SERIF":
                            w = '"Droid Sans", sans-serif';
                            break;
                        case "MONOSPACED_SANS_SERIF":
                            w = '"Droid Sans Mono", monospace';
                            break;
                        case "SERIF":
                            w = '"Droid Serif", serif';
                            break;
                        case "MONOSPACED_SERIF":
                            w = '"Cutive Mono"';
                            break;
                        case "CASUAL":
                            w = '"Short Stack"';
                            break;
                        case "CURSIVE":
                            w = "Quintessential";
                            break;
                        case "SMALL_CAPITALS":
                            w =
                                '"Alegreya Sans SC"'
                    }
                    l += t + w
                }
                W(a, l + ";")
            }
            k(b.fontStyle) && W(a, jc(b.fontStyle));
            k(b.edgeType) && (w = k(b.foregroundColor) ? b.foregroundColor : "#FFFFFFFF", w = k(b.edgeColor) ? ic(a, b.edgeColor, b.edgeType) : ic(a, w, b.edgeType), W(a, w, !0))
        };
    V.prototype.d = function() {
        V.s.d.call(this);
        for (var a = 0; a < this.A.length; a++) this.b.removeChild(this.A[a]);
        this.A = [];
        gc(this);
        hc(this);
        H(this.a, C, "Disposed " + this.t())
    };
    var X = function(a, b) {
        P.call(this);
        this.la = T.Ya().Xa("urn:x-cast:com.google.cast.media", "JSON");
        this.ja = 0;
        this.kc = 1;
        this.xc = b || 15;
        this.wb = this.ib = this.N = this.ka = this.e = this.c = null;
        this.v = !1;
        this.q = this.U = this.f = null;
        this.ha = !0;
        this.R = null;
        this.ta = this.Bb.bind(this);
        this.customizedStatusCallback = this.Eb;
        this.onLoad = this.Lb;
        this.onPlay = this.Ob;
        this.onSeek = this.Qb;
        this.onPause = this.Nb;
        this.onStop = this.Sb;
        this.onSetVolume = this.Rb;
        this.onEditTracksInfo = this.Gb;
        this.onQueueUpdate = this.Pb;
        this.onMetadataLoaded =
            this.Mb;
        this.onLoadMetadataError = this.Kb;
        this.onEnded = this.Hb;
        this.onError = this.Ib;
        this.onGetStatus = this.Jb;
        this.tb(a);
        this.la.onMessage = this.gc.bind(this);
        this.R = Ab(this.ta, 1E3)
    };
    p(X, P);
    n("cast.receiver.MediaManager", X);
    X.EventType = {
        LOAD: "load",
        STOP: "stop",
        PAUSE: "pause",
        PLAY: "play",
        SEEK: "seek",
        SET_VOLUME: "setvolume",
        GET_STATUS: "getstatus",
        EDIT_TRACKS_INFO: "edittracksinfo",
        QUEUE_UPDATE: "queueupdate"
    };
    var Y = function(a, b, c) {
        G.call(this, a);
        this.data = b;
        this.senderId = c
    };
    p(Y, G);
    X.Event = Y;
    var Z = function() {
        this.requestId = 0;
        this.mediaSessionId = void 0;
        this.customData = null
    };
    X.RequestData = Z;
    var kc = function() {
        this.media = new $b;
        this.autoplay = !1;
        this.currentTime = 0;
        this.activeTrackIds = void 0
    };
    p(kc, Z);
    X.LoadRequestData = kc;
    var lc = function() {
        this.volume = new ac
    };
    p(lc, Z);
    X.VolumeRequestData = lc;
    var mc = function() {
        this.textTrackStyle = this.activeTrackIds = void 0
    };
    p(mc, Z);
    X.EditTracksInfoData = mc;
    var nc = function() {
        this.resumeState = void 0;
        this.currentTime = 0
    };
    p(nc, Z);
    X.SeekRequestData = nc;
    var oc = function() {};
    p(oc, Z);
    X.QueueUpdateRequestData = oc;
    p(Y, G);
    X.LoadInfo = function(a, b) {
        this.message = a;
        this.senderId = b
    };
    X.prototype.a = E("cast.receiver.MediaManager");
    X.prototype.t = function() {
        return "MediaManager"
    };
    X.prototype.Yb = function() {
        return this.e
    };
    X.prototype.getMediaInformation = X.prototype.Yb;
    X.prototype.qc = function(a, b, c) {
        b = void 0 == b || b;
        if (c && !b) throw Error("No broadcast call but status customData has been provided");
        this.e = a;
        b && this.k(!0, null, c)
    };
    X.prototype.setMediaInformation = X.prototype.qc;
    var pc = function(a) {
        for (var b = 0; b < a.length; b++)
            if (!k(a[b].trackId) || !k(a[b].type)) return !1;
        return !0
    }, qc = function(a, b, c) {
            if (!c || 0 === c.length) return !0;
            if (!b || c.length > b.length) return I(a.a, "Too many track IDs"), !1;
            for (var d = 0, e = 0, f = 0; f < c.length; f++) {
                for (var l = !1, t = 0; t < b.length; t++)
                    if (c[f] === b[t].trackId) {
                        l = !0;
                        break
                    }
                if (!l) return I(a.a, "Track ID does not exist: " + c[f]), !1;
                "AUDIO" === b[t].type ? e++ : "VIDEO" === b[t].type && d++;
                if (1 < e || 1 < d) return I(a.a, "Maximum one active video and one active audio track supported"), !1
            }
            return !0
        };
    X.prototype.gc = function(a) {
        var b = a.data;
        a = a.senderId;
        var c;
        c = b.type;
        var d = b.requestId;
        if ("number" == typeof d && d == Math.floor(d)) {
            var e = !1;
            void 0 != b.mediaSessionId && b.mediaSessionId != this.ja ? (I(this.a, "Invalid media session ID: " + b.mediaSessionId + "  does not match the expected ID: " + this.ja), e = !0) : "LOAD" != c && "GET_STATUS" != c && (void 0 == b.mediaSessionId ? (I(this.a, "Invalid media session ID, it is undefined"), e = !0) : "IDLE" == rc(this) && (I(this.a, "Unexpected command, player is in IDLE state so the media session ID is not valid yet"), e = !0));
            e ? (this.$(a, d, "INVALID_REQUEST", "INVALID_MEDIA_SESSION_ID"), c = !1) : (H(this.a, C, "MediaManager message received"), c = !0)
        } else I(this.a, "Ignoring request, requestId is not an integer: " + d), c = !1; if (c) {
            d = b.type;
            c = b.requestId;
            delete b.type;
            e = null;
            switch (d) {
                case "LOAD":
                    J(this.a, "Dispatching MediaManager load event");
                    d = !1;
                    b.media ? b.media.tracks && !pc(b.media.tracks) ? (I(this.a, "Invalid tracks information"), d = !0) : b.activeTrackIds && !qc(this, b.media.tracks, b.activeTrackIds) && (d = !0) : (I(this.a, "Media is mandatory"),
                        d = !0);
                    if (d) e = {
                        type: "INVALID_REQUEST",
                        reason: "INVALID_PARAMS"
                    };
                    else {
                        this.f ? this.Ra("LOAD_CANCELLED") : this.e && this.Q("INTERRUPTED");
                        this.f = {
                            senderId: a,
                            message: b
                        };
                        b.media && (this.e = b.media);
                        this.q = b.activeTrackIds || null;
                        this.ja++;
                        this.ha && this.c.mb && this.c.mb(void 0 != b.autoplay ? b.autoplay : !0, 0 < b.currentTime ? b.currentTime : 0);
                        b = new Y("load", b, a);
                        if (this.onLoad) this.onLoad(b);
                        this.dispatchEvent(b);
                        e = null
                    }
                    break;
                case "GET_STATUS":
                    J(this.a, "Dispatching MediaManager getStatus event");
                    b = new Y("getstatus", b, a);
                    if (this.onGetStatus) this.onGetStatus(b);
                    this.dispatchEvent(b);
                    e = null;
                    break;
                case "PLAY":
                    J(this.a, "Dispatching MediaManager play event");
                    b = new Y("play", b, a);
                    if (this.onPlay) this.onPlay(b);
                    this.dispatchEvent(b);
                    e = null;
                    break;
                case "SEEK":
                    if (void 0 == b.currentTime) I(this.a, "currentTime is mandatory"), e = {
                        type: "INVALID_REQUEST",
                        reason: "INVALID_PARAMS"
                    };
                    else {
                        J(this.a, "Dispatching MediaManager seek event");
                        b = new Y("seek", b, a);
                        if (this.onSeek) this.onSeek(b);
                        this.dispatchEvent(b);
                        e = null
                    }
                    break;
                case "STOP":
                    J(this.a,
                        "Dispatching MediaManager stop event");
                    b = new Y("stop", b, a);
                    if (this.onStop) this.onStop(b);
                    this.dispatchEvent(b);
                    e = null;
                    break;
                case "PAUSE":
                    J(this.a, "Dispatching MediaManager pause event");
                    b = new Y("pause", b, a);
                    if (this.onPause) this.onPause(b);
                    this.dispatchEvent(b);
                    e = null;
                    break;
                case "SET_VOLUME":
                    if (!b.volume || void 0 == b.volume.level && void 0 == b.volume.muted) I(this.a, "volume is invalid"), e = {
                        type: "INVALID_REQUEST",
                        reason: "INVALID_PARAMS"
                    };
                    else if (void 0 != b.volume.level && 0 > b.volume.level || 1 < b.volume.level) I(this.a,
                        "volume level is invalid"), e = {
                        type: "INVALID_REQUEST",
                        reason: "INVALID_PARAMS"
                    };
                    else {
                        J(this.a, "Dispatching MediaManager setvolume event");
                        b = new Y("setvolume", b, a);
                        if (this.onSetVolume) this.onSetVolume(b);
                        this.dispatchEvent(b);
                        e = null
                    }
                    break;
                case "EDIT_TRACKS_INFO":
                    J(this.a, "Dispatching MediaManager ediTracksInfo event");
                    if (qc(this, this.e.tracks, b.activeTrackIds)) {
                        d = new Y("edittracksinfo", b, a);
                        b.textTrackStyle && (this.e.textTrackStyle = b.textTrackStyle);
                        b.activeTrackIds && (this.q = b.activeTrackIds);
                        if (this.onEditTracksInfo) this.onEditTracksInfo(d);
                        this.dispatchEvent(d);
                        e = null
                    } else I(this.a, "Invalid track IDs"), e = {
                        type: "INVALID_REQUEST",
                        reason: "INVALID_PARAMS"
                    };
                    break;
                case "QUEUE_UPDATE":
                    b = new Y("queueupdate", b, a);
                    if (this.onQueueUpdate) this.onQueueUpdate(b);
                    this.dispatchEvent(b);
                    e = null;
                    break;
                default:
                    I(this.a, "Unexpected message type: " + d), e = {
                        type: "INVALID_REQUEST",
                        reason: "INVALID_COMMAND"
                    }
            }
            e && (I(this.a, "Sending error: " + e.type + " " + e.reason), this.$(a, c, e.type, e.reason))
        }
    };
    var rc = function(a) {
        if (!a.e) return "IDLE";
        var b = a.c.getState();
        return "PLAYING" == b && a.v ? "BUFFERING" : b
    }, sc = function(a, b, c) {
            var d = {
                type: "MEDIA_STATUS"
            };
            if (!a.e && !a.ka) return d.status = [], d;
            var e = {
                mediaSessionId: a.ja,
                playbackRate: a.kc,
                playerState: rc(a),
                currentTime: a.c.getCurrentTimeSec(),
                supportedMediaCommands: a.xc,
                volume: a.c.getVolume()
            };
            a.q && (e.activeTrackIds = a.q);
            b && (e.media = a.e || a.ka || void 0);
            a.e || (a.ka = null);
            "IDLE" == e.playerState ? a.U && (e.idleReason = a.U) : a.U = null;
            void 0 != c && (e.customData = c);
            a.customizedStatusCallback ?
                (a = a.customizedStatusCallback(e), null == a ? d = null : d.status = [a]) : d.status = [e];
            return d
        }, tc = function(a) {
            var b = a.c.getCurrentTimeSec();
            a.N = b;
            a.ib = b;
            a.wb = Date.now();
            null != a.R && h.clearTimeout(a.R);
            a.R = Ab(a.ta, 1E3)
        };
    X.prototype.Bb = function() {
        this.R = Ab(this.ta, 1E3);
        if ("IDLE" != rc(this) && "PAUSED" != rc(this)) {
            var a = this.N;
            this.N = this.c.getCurrentTimeSec();
            var b = this.v;
            this.v = 100 > 1E3 * (this.N - a);
            b != this.v ? (H(this.a, C, "Buffering state changed, isPlayerBuffering: " + this.v + " old time: " + a + " current time: " + this.N), this.k(!1)) : !this.v && (a = 1E3 * (this.N - this.ib) - (Date.now() - this.wb), 1E3 < a || -1E3 > a) && (H(this.a, C, "Time drifted: " + a), this.k(!1))
        }
    };
    X.prototype.k = function(a, b, c) {
        this.c ? (H(this.a, C, "Sending broadcast status message"), a = sc(this, a, c), null != a && (a.requestId = b || 0, this.la.Ua(a), tc(this))) : I(this.a, "Not sending broadcast status message, state is invalid")
    };
    X.prototype.broadcastStatus = X.prototype.k;
    X.prototype.oc = function(a) {
        H(this.a, C, "Setting IDLE reason: " + a);
        this.U = a
    };
    X.prototype.setIdleReason = X.prototype.oc;
    X.prototype.$ = function(a, b, c, d, e) {
        J(this.a, "Sending error message to " + a);
        var f = {};
        f.requestId = b;
        f.type = c;
        d && (f.reason = d);
        e && (f.customData = e);
        this.la.send(a, f)
    };
    X.prototype.sendError = X.prototype.$;
    X.prototype.qb = function(a, b, c, d) {
        this.c ? (H(this.a, C, "Sending status message to " + a), c = sc(this, c, d), null != c && (c.requestId = b, this.la.send(a, c), tc(this))) : (I(this.a, "State is invalid"), this.$(a, b, "INVALID_PLAYER_STATE", null, d))
    };
    X.prototype.sendStatus = X.prototype.qb;
    X.prototype.Eb = function(a) {
        return a
    };
    X.prototype.Lb = function(a) {
        a = a.data;
        if (a.media && a.media.contentId) {
            var b = void 0 === a.autoplay ? !0 : a.autoplay;
            a.media.tracks ? this.c.load(a.media.contentId, b, a.currentTime, {
                tracks: a.media.tracks,
                activeTrackIds: a.activeTrackIds,
                textTrackStyle: a.media.textTrackStyle
            }) : this.c.load(a.media.contentId, b, a.currentTime)
        }
    };
    X.prototype.dc = function(a) {
        if (!this.f) return !1;
        a.tracks = a.tracks || void 0;
        if (a.tracks && !pc(a.tracks)) return I(this.a, "Invalid tracks information"), !1;
        if (a.activeTrackIds && !qc(this, a.tracks, a.activeTrackIds)) return I(this.a, "Invalid active tracks"), !1;
        this.q = a.activeTrackIds || null;
        this.e.tracks = a.tracks;
        this.e.textTrackStyle = a.textTrackStyle || void 0;
        this.c.load("", !1, void 0, a, !0);
        return !0
    };
    X.prototype.loadTracksInfo = X.prototype.dc;
    X.prototype.tb = function(a) {
        a !== this.c && (this.c && (this.c.unregisterErrorCallback(), this.c.unregisterEndedCallback(), this.c.unregisterLoadCallback()), this.c = (this.ha = a.getState ? !1 : !0) ? new Wb(this.a, a) : a, this.c.registerErrorCallback(this.Ka.bind(this)), this.c.registerEndedCallback(this.Ja.bind(this)), this.c.registerLoadCallback(this.Oa.bind(this)))
    };
    X.prototype.setMediaElement = X.prototype.tb;
    X.prototype.Oa = function() {
        if (this.f)
            if (J(this.a, "Metadata loaded"), this.e && (this.e.duration = this.c.getDurationSec()), this.v = !0, this.onMetadataLoaded) this.onMetadataLoaded(this.f);
            else this.f = null
    };
    X.prototype.Mb = function(a) {
        this.ha && a.message && void 0 != a.message.currentTime && a.message.currentTime != this.c.getCurrentTimeSec() && this.c.seek(a.message.currentTime);
        this.pb()
    };
    X.prototype.Ka = function(a) {
        if (this.f)
            if (I(this.a, "Load metadata error"), this.onLoadMetadataError) this.onLoadMetadataError(this.f);
            else this.f = null;
            else if (this.onError) this.onError(a)
    };
    X.prototype.Ra = function(a, b) {
        this.f ? (this.$(this.f.senderId, this.f.message.requestId, a || "LOAD_FAILED", null, b), this.f = null) : I(this.a, "Not sending LOAD error as there is no on going LOAD request")
    };
    X.prototype.sendLoadError = X.prototype.Ra;
    X.prototype.pb = function(a) {
        this.f ? (this.k(!0, this.f.message.requestId, a), this.f = null) : I(this.a, "Not sending status as there is no on going LOAD request")
    };
    X.prototype.sendLoadComplete = X.prototype.pb;
    g = X.prototype;
    g.Ib = function() {
        this.Q("ERROR")
    };
    g.Kb = function() {
        this.Q("ERROR", !1);
        this.Ra("LOAD_FAILED")
    };
    g.Ja = function() {
        if (this.onEnded) this.onEnded()
    };
    g.Hb = function() {
        this.Q("FINISHED")
    };
    g.Jb = function(a) {
        H(this.a, C, "onGetStatus");
        this.qb(a.senderId, a.data.requestId, !0)
    };
    g.Ob = function(a) {
        H(this.a, C, "onPlay");
        this.c.play();
        this.k(!1, a.data.requestId)
    };
    g.Qb = function(a) {
        a = a.data;
        H(this.a, C, "onSeek: " + JSON.stringify(a));
        this.c.seek(a.currentTime, a.resumeState);
        "PAUSED" != this.c.getState() && (this.v = !0);
        this.k(!1, a.requestId)
    };
    g.Sb = function(a) {
        this.Q("CANCELLED", !0, a.data.requestId)
    };
    g.Q = function(a, b, c, d) {
        b = void 0 == b || b;
        if ((d || c) && !b) throw Error("customData and requestId should only be provided in broadcast mode");
        this.e ? (this.c.reset(), this.q = null, a && (this.U = a), this.ka = this.e, this.e = null, b && this.k(!1, c, d)) : J(this.a, "Nothing to reset, Media is already null")
    };
    X.prototype.resetMediaElement = X.prototype.Q;
    g = X.prototype;
    g.Nb = function(a) {
        this.c.pause();
        this.k(!1, a.data.requestId)
    };
    g.Rb = function(a) {
        a = a.data;
        this.c.setVolume(a.volume);
        this.k(!1, a.requestId)
    };
    g.Gb = function(a) {
        a = a.data;
        var b = {
            activeTrackIds: a.activeTrackIds,
            textTrackStyle: a.textTrackStyle
        };
        this.c.editTracksInfo && this.c.editTracksInfo(b);
        this.k(a.textTrackStyle ? !0 : !1, a.requestId)
    };
    g.Pb = function(a) {
        this.k(!1, a.data.requestId)
    };
    g.d = function() {
        X.s.d.call(this);
        H(this.a, C, "Disposed " + this.t())
    };
}).call(window);
