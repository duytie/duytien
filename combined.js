!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o])
                return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e),
            r.l = !0,
            r.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.i = function(t) {
            return t
        }
        ,
        e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(n, "a", n),
            n
        }
        ,
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        e.p = "",
        e(e.s = 3)
    }([function(t, e, n) {
        var o, r, i;
        !function(a, c) {
            r = [t, n(7)],
            o = c,
            void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(e)
              , r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value"in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o)
                    }
                }
                return function(e, n, o) {
                    return n && t(e.prototype, n),
                    o && t(e, o),
                    e
                }
            }()
              , a = function() {
                function t(e) {
                    n(this, t),
                    this.resolveOptions(e),
                    this.initSelection()
                }
                return i(t, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = t.action,
                        this.container = t.container,
                        this.emitter = t.emitter,
                        this.target = t.target,
                        this.text = t.text,
                        this.trigger = t.trigger,
                        this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function() {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function() {
                        var t = this
                          , e = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(),
                        this.fakeHandlerCallback = function() {
                            return t.removeFake()
                        }
                        ,
                        this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                        this.fakeElem = document.createElement("textarea"),
                        this.fakeElem.style.fontSize = "12pt",
                        this.fakeElem.style.border = "0",
                        this.fakeElem.style.padding = "0",
                        this.fakeElem.style.margin = "0",
                        this.fakeElem.style.position = "absolute",
                        this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px",
                        this.fakeElem.setAttribute("readonly", ""),
                        this.fakeElem.value = this.text,
                        this.container.appendChild(this.fakeElem),
                        this.selectedText = (0,
                        o.default)(this.fakeElem),
                        this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function() {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                        this.fakeHandler = null,
                        this.fakeHandlerCallback = null),
                        this.fakeElem && (this.container.removeChild(this.fakeElem),
                        this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget",
                    value: function() {
                        this.selectedText = (0,
                        o.default)(this.target),
                        this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function() {
                        var t = void 0;
                        try {
                            t = document.execCommand(this.action)
                        } catch (e) {
                            t = !1
                        }
                        this.handleResult(t)
                    }
                }, {
                    key: "handleResult",
                    value: function(t) {
                        this.emitter.emit(t ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function() {
                        this.trigger && this.trigger.focus(),
                        window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                        if (this._action = t,
                        "copy" !== this._action && "cut" !== this._action)
                            throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(t) {
                        if (void 0 !== t) {
                            if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType)
                                throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && t.hasAttribute("disabled"))
                                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = t
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]),
                t
            }();
            t.exports = a
        })
    }
    , function(t, e, n) {
        function o(t, e, n) {
            if (!t && !e && !n)
                throw new Error("Missing required arguments");
            if (!c.string(e))
                throw new TypeError("Second argument must be a String");
            if (!c.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (c.node(t))
                return r(t, e, n);
            if (c.nodeList(t))
                return i(t, e, n);
            if (c.string(t))
                return a(t, e, n);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }
        function r(t, e, n) {
            return t.addEventListener(e, n),
            {
                destroy: function() {
                    t.removeEventListener(e, n)
                }
            }
        }
        function i(t, e, n) {
            return Array.prototype.forEach.call(t, function(t) {
                t.addEventListener(e, n)
            }),
            {
                destroy: function() {
                    Array.prototype.forEach.call(t, function(t) {
                        t.removeEventListener(e, n)
                    })
                }
            }
        }
        function a(t, e, n) {
            return u(document.body, t, e, n)
        }
        var c = n(6)
          , u = n(5);
        t.exports = o
    }
    , function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }),
                this
            },
            once: function(t, e, n) {
                function o() {
                    r.off(t, o),
                    e.apply(n, arguments)
                }
                var r = this;
                return o._ = e,
                this.on(t, o, n)
            },
            emit: function(t) {
                var e = [].slice.call(arguments, 1)
                  , n = ((this.e || (this.e = {}))[t] || []).slice()
                  , o = 0
                  , r = n.length;
                for (o; o < r; o++)
                    n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {})
                  , o = n[t]
                  , r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++)
                        o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t],
                this
            }
        },
        t.exports = n
    }
    , function(t, e, n) {
        var o, r, i;
        !function(a, c) {
            r = [t, n(0), n(2), n(1)],
            o = c,
            void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e, n, o) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function i(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }
            function c(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            function u(t, e) {
                var n = "data-clipboard-" + t;
                if (e.hasAttribute(n))
                    return e.getAttribute(n)
            }
            var l = r(e)
              , s = r(n)
              , f = r(o)
              , d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , h = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value"in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o)
                    }
                }
                return function(e, n, o) {
                    return n && t(e.prototype, n),
                    o && t(e, o),
                    e
                }
            }()
              , p = function(t) {
                function e(t, n) {
                    i(this, e);
                    var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return o.resolveOptions(n),
                    o.listenClick(t),
                    o
                }
                return c(e, t),
                h(e, [{
                    key: "resolveOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                        this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                        this.text = "function" == typeof t.text ? t.text : this.defaultText,
                        this.container = "object" === d(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = (0,
                        f.default)(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null),
                        this.clipboardAction = new l.default({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return u("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        var e = u("target", t);
                        if (e)
                            return document.querySelector(e)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return u("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy(),
                        this.clipboardAction && (this.clipboardAction.destroy(),
                        this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                          , e = "string" == typeof t ? [t] : t
                          , n = !!document.queryCommandSupported;
                        return e.forEach(function(t) {
                            n = n && !!document.queryCommandSupported(t)
                        }),
                        n
                    }
                }]),
                e
            }(s.default);
            t.exports = p
        })
    }
    , function(t, e) {
        function n(t, e) {
            for (; t && t.nodeType !== o; ) {
                if ("function" == typeof t.matches && t.matches(e))
                    return t;
                t = t.parentNode
            }
        }
        var o = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var r = Element.prototype;
            r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
        }
        t.exports = n
    }
    , function(t, e, n) {
        function o(t, e, n, o, r) {
            var a = i.apply(this, arguments);
            return t.addEventListener(n, a, r),
            {
                destroy: function() {
                    t.removeEventListener(n, a, r)
                }
            }
        }
        function r(t, e, n, r, i) {
            return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function(t) {
                return o(t, e, n, r, i)
            }))
        }
        function i(t, e, n, o) {
            return function(n) {
                n.delegateTarget = a(n.target, e),
                n.delegateTarget && o.call(t, n)
            }
        }
        var a = n(4);
        t.exports = r
    }
    , function(t, e) {
        e.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }
        ,
        e.nodeList = function(t) {
            var n = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in t && (0 === t.length || e.node(t[0]))
        }
        ,
        e.string = function(t) {
            return "string" == typeof t || t instanceof String
        }
        ,
        e.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
    , function(t, e) {
        function n(t) {
            var e;
            if ("SELECT" === t.nodeName)
                t.focus(),
                e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                n || t.removeAttribute("readonly"),
                e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection()
                  , r = document.createRange();
                r.selectNodeContents(t),
                o.removeAllRanges(),
                o.addRange(r),
                e = o.toString()
            }
            return e
        }
        t.exports = n
    }
    ])
});
var _0x55d15a = _0x5724;
(function(_0x1c8f39, _0x5df965) {
    var _0x5e6137 = _0x5724
      , _0x4b1ec9 = _0x1c8f39();
    while (!![]) {
        try {
            var _0x3e523b = parseInt(_0x5e6137(0x122)) / 0x1 * (-parseInt(_0x5e6137(0xed)) / 0x2) + -parseInt(_0x5e6137(0xeb)) / 0x3 * (-parseInt(_0x5e6137(0x127)) / 0x4) + parseInt(_0x5e6137(0x119)) / 0x5 + -parseInt(_0x5e6137(0x143)) / 0x6 * (parseInt(_0x5e6137(0xef)) / 0x7) + -parseInt(_0x5e6137(0x144)) / 0x8 + parseInt(_0x5e6137(0x123)) / 0x9 + -parseInt(_0x5e6137(0x140)) / 0xa;
            if (_0x3e523b === _0x5df965)
                break;
            else
                _0x4b1ec9['push'](_0x4b1ec9['shift']());
        } catch (_0x2f6d4e) {
            _0x4b1ec9['push'](_0x4b1ec9['shift']());
        }
    }
}(_0x489c, 0x530c3));
function get(_0x5f0c3d) {
    var _0x442d41 = _0x5724;
    if (_0x5f0c3d = new RegExp('[?&]' + encodeURIComponent(_0x5f0c3d) + _0x442d41(0x11e))[_0x442d41(0x10e)](location[_0x442d41(0xe9)]))
        return decodeURIComponent(_0x5f0c3d[0x1]);
}
function setCookie(_0x2d4b82, _0x48e6f6, _0xe0bced) {
    var _0x40368e = _0x5724
      , _0xd0900b = new Date();
    _0xe0bced == undefined && (_0xe0bced = 0xb4);
    _0xd0900b['setTime'](_0xd0900b[_0x40368e(0xf1)]() + _0xe0bced * 0x18 * 0x3c * 0x3c * 0x3e8);
    var _0x3ebc57 = _0x40368e(0x108) + _0xd0900b[_0x40368e(0xe5)]();
    document['cookie'] = _0x2d4b82 + '=' + encodeURIComponent(_0x48e6f6) + ';' + _0x3ebc57 + _0x40368e(0x124);
}
function getCookie(_0x38eb73) {
    var _0x503c26 = _0x5724
      , _0x20ad5d = _0x38eb73 + '='
      , _0x455519 = document[_0x503c26(0x13b)]
      , _0x21246a = _0x455519[_0x503c26(0x10c)](';');
    for (var _0x56861a = 0x0; _0x56861a < _0x21246a[_0x503c26(0xfe)]; _0x56861a++) {
        var _0xe9b8b7 = _0x21246a[_0x56861a];
        while (_0xe9b8b7[_0x503c26(0xfa)](0x0) == '\x20') {
            _0xe9b8b7 = _0xe9b8b7[_0x503c26(0x138)](0x1);
        }
        if (_0xe9b8b7[_0x503c26(0x109)](_0x20ad5d) == 0x0)
            return decodeURIComponent(_0xe9b8b7[_0x503c26(0x138)](_0x20ad5d[_0x503c26(0xfe)], _0xe9b8b7['length']));
    }
    return '';
}
function _0x5724(_0x236ea2, _0xa770c) {
    var _0x489c1c = _0x489c();
    return _0x5724 = function(_0x572413, _0x4273c8) {
        _0x572413 = _0x572413 - 0xe3;
        var _0x2f3aec = _0x489c1c[_0x572413];
        return _0x2f3aec;
    }
    ,
    _0x5724(_0x236ea2, _0xa770c);
}
function allShare(_0x58acd7, _0x57d6db, _0x23314d, _0x1102ef, _0x4da97c, _0x197263) {
    var _0x315484 = _0x5724;
    navigator[_0x315484(0x128)] ? navigator[_0x315484(0x128)]({
        'title': _0x57d6db,
        'text': _0x1102ef,
        'url': _0x197263
    })['then'](()=>console[_0x315484(0x13e)](_0x315484(0xe4)))[_0x315484(0x12a)](_0xe613c9=>console[_0x315484(0x13e)](_0x315484(0x102), _0xe613c9)) : console['log'](_0x315484(0x107));
}
function allShareCode(_0x1881b4, _0x53446c, _0x3f3c40, _0x13f5a1, _0x905716, _0x4e23e4) {
    var _0x25d981 = _0x5724;
    navigator[_0x25d981(0x128)] && $(_0x25d981(0xee))[_0x25d981(0x12c)](_0x25d981(0xea)),
    $(_0x25d981(0xee))[_0x25d981(0x146)](function() {
        allShare(_0x1881b4, _0x53446c, _0x3f3c40, _0x13f5a1, _0x905716, _0x4e23e4);
    });
}
function setShareLinks(_0x4edfd5, _0x131853, _0x472613, _0x47d403, _0x572583, _0x4d23e7) {
    var _0x12edf3 = _0x5724;
    if ([_0x12edf3(0xf9), _0x12edf3(0x13d), 'https://friendshiptrivia.com', _0x12edf3(0x11c), 'https://quiz2020.com', _0x12edf3(0xf6), _0x12edf3(0x136), _0x12edf3(0x133), _0x12edf3(0x12b), _0x12edf3(0x134), _0x12edf3(0xf5), _0x12edf3(0x116), _0x12edf3(0xfb), _0x12edf3(0x14d), _0x12edf3(0x145), 'https://friendsquiz.site', _0x12edf3(0xf2), _0x12edf3(0x103), _0x12edf3(0x113), _0x12edf3(0x120), _0x12edf3(0x104), _0x12edf3(0xfb), _0x12edf3(0x10f), _0x12edf3(0x125), _0x12edf3(0x111), _0x12edf3(0x14b), 'https://wowdare.com__', 'https://friend20.com', _0x12edf3(0x11a)][_0x12edf3(0x109)](_0x4edfd5) >= 0x0) {}
    var _0x47d403 = _0x47d403['replace'](/nameeee/g, _0x572583)
      , _0x472613 = _0x472613[_0x12edf3(0xf4)](/nameeee/g, _0x572583)
      , _0x131853 = _0x131853[_0x12edf3(0xf4)](/nameeee/g, _0x572583)
      , _0x3adaad = document['getElementById'](_0x12edf3(0x126));
    _0x3adaad != null && (_0x3adaad[_0x12edf3(0x149)] = 'whatsapp://send?text=' + _0x472613 + '\x20' + _0x4d23e7);
    var _0x47beff = document['getElementById'](_0x12edf3(0x129));
    _0x47beff != null && (_0x47beff[_0x12edf3(0x149)] = _0x12edf3(0xf8) + _0x472613 + '\x20' + _0x4d23e7);
    $(_0x12edf3(0xff))[_0x12edf3(0x10b)](_0x12edf3(0x118), _0x4d23e7);
    var _0x1126cf = _0x12edf3(0x139) + _0x47d403 + '\x20' + _0x4d23e7;
    $('#line_link')['attr'](_0x12edf3(0x149), _0x1126cf);
    var _0x476078 = _0x4d23e7
      , _0x49484b = _0x12edf3(0xf7) + _0x476078;
    $('#messenger_link')[_0x12edf3(0x10b)](_0x12edf3(0x149), _0x49484b);
    var _0x183f85 = _0x12edf3(0x13a) + _0x4d23e7 + _0x12edf3(0xec) + _0x131853 + '&comment=' + _0x47d403;
    $(_0x12edf3(0xf0))[_0x12edf3(0x10b)]('href', _0x183f85);
    var _0x43db98 = _0x12edf3(0x147) + _0x47d403 + '\x20' + _0x4d23e7;
    $(_0x12edf3(0xe8))[_0x12edf3(0x10b)](_0x12edf3(0x149), _0x43db98);
    var _0x25e3f4 = _0x12edf3(0x14a) + _0x4d23e7 + '&title=' + _0x47d403;
    $(_0x12edf3(0xfd))[_0x12edf3(0x10b)](_0x12edf3(0x149), _0x25e3f4);
    var _0x156c48 = 'http://v.t.sina.com.cn/share/share.php?url=' + _0x4d23e7 + _0x12edf3(0xec) + _0x47d403;
    $(_0x12edf3(0xf3))[_0x12edf3(0x10b)]('href', _0x156c48);
    var _0x4e8cc3 = _0x4edfd5 + _0x12edf3(0x10d) + '#url=' + _0x4d23e7 + _0x12edf3(0xec) + _0x47d403;
    $(_0x12edf3(0x13f))[_0x12edf3(0x10b)]('href', _0x4e8cc3);
    var _0x1db19c = _0x12edf3(0x117) + _0x4d23e7;
    $(_0x12edf3(0x105))[_0x12edf3(0x10b)]('href', _0x1db19c),
    allShareCode(_0x4edfd5, _0x131853, _0x472613, _0x47d403, _0x572583, _0x4d23e7);
    if (locale != 'cn') {
        $(_0x12edf3(0x114))[_0x12edf3(0x10b)](_0x12edf3(0x110), _0x4d23e7),
        $(_0x12edf3(0x114))['attr'](_0x12edf3(0x13c), _0x47d403),
        $(_0x12edf3(0x114))[_0x12edf3(0x10b)]('data-description', _0x47d403),
        $(_0x12edf3(0x114))[_0x12edf3(0x10b)]('data-media', _0x4edfd5 + _0x12edf3(0xfc));
        var _0x53c526 = document[_0x12edf3(0x12e)](_0x12edf3(0x137));
        _0x53c526[_0x12edf3(0x11f)] = 'text/javascript',
        _0x53c526[_0x12edf3(0xe7)] = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5854f190a71438e5',
        $(_0x12edf3(0x12f))[_0x12edf3(0x115)](_0x53c526);
        var _0xd1fd15 = $(_0x12edf3(0x101) + _0x12edf3(0x130));
        $('head')[_0x12edf3(0x115)](_0xd1fd15[0x0]),
        $(_0x12edf3(0x11b))[_0x12edf3(0x12c)](_0x12edf3(0xea));
    }
}
function isMobile() {
    var _0x5ee555 = _0x5724;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x5ee555(0x100)](navigator[_0x5ee555(0x106)]))
        return !![];
    return ![];
}
function _0x489c() {
    var _0x44c280 = ['&title=', '2snYbJt', '#allshare_link', '15547jBMNLd', '#vk_link', 'getTime', 'https://touch-msg.com', '#weibo_link', 'replace', 'https://openit.site', 'https://bfmate.com', 'fb-messenger://share?link=', 'whatsapp://send?text=', 'https://friendshipbond.com', 'charAt', 'https://vejo.site', '/images/bond.png?v=1', '#qq_link', 'length', '.zalo-share-button', 'test', '<script\x20type=\x22text/javascript\x22>var\x20addthis_config\x20=\x20addthis_config\x20||\x20{};addthis_config.data_track_clickback\x20=\x20false;</', 'Error\x20sharing', 'https://dare2020.site', 'https://yesno.site', '#snapchat_link', 'userAgent', 'not\x20supported', 'expires=', 'indexOf', 'bind', 'attr', 'split', '/wechat-share', 'exec', 'https://superdare.site', 'data-url', 'https://newyeartest.com', '#start', 'https://dare2021.com', '.addthis_share', 'append', 'https://testyourbond.site', 'https://www.snapchat.com/scan?attachmentUrl=', 'data-href', '3248495VElHNO', 'https://dareforyou.site', '.addthis_block', 'https://friend2021.com', 'substr', '=([^&]*)', 'type', 'https://sehen.site', '#name', '139559hISPlN', '4166136efGEWw', ';path=/', 'http://testd20.com', 'whatsapp_link', '323116rmBceq', 'share', 'e_whatsapp_status', 'catch', 'https://dare20.com', 'removeClass', 'value', 'createElement', 'head', 'script>', 'preventDefault', '#language', 'https://truefalse.site', 'https://bigdare.site', 'ready', 'https://grandedesafio.com', 'script', 'substring', 'https://line.me/R/msg/text/?', 'https://vk.com/share.php?url=', 'cookie', 'data-title', 'https://friendshipmeter.site', 'log', '#wechat_link', '3901620XBqFWR', 'keypress', 'language', '582vGmxXI', '4095648VsVGLK', 'https://bestbuddymeter.com', 'click', 'viber://forward?text=', 'back_url', 'href', 'http://connect.qq.com/widget/shareqq/index.html?url=', 'https://buddy20.com', 'userLanguage', 'https://buka.site', 'navigator', 'Successful\x20share', 'toUTCString', 'addClass', 'src', '#viber_link', 'search', 'hidden', '18lKpSzu'];
    _0x489c = function() {
        return _0x44c280;
    }
    ;
    return _0x489c();
}
$(document)[_0x55d15a(0x135)](function() {
    var _0x580321 = _0x55d15a
      , _0x2b7316 = get(_0x580321(0x148));
    _0x2b7316 !== undefined && (history['pushState']({}, '', '#'),
    onpopstate = function() {
        var _0x3baaf5 = _0x580321;
        window['location'][_0x3baaf5(0x149)] = _0x2b7316;
    }
    );
    $(_0x580321(0x121))[_0x580321(0x10a)](_0x580321(0x141), function(_0x133609) {
        var _0x1977b1 = _0x580321;
        _0x133609['which'] === 0xd && (_0x133609[_0x1977b1(0x131)](),
        $('#start_create')['click'](),
        $(_0x1977b1(0x112))[_0x1977b1(0x146)]());
    });
    if ($(_0x580321(0x132))['length']) {
        if (getCookie('language') != '') {
            var _0x150293 = getCookie(_0x580321(0x142));
            document['getElementById'](_0x580321(0x142))[_0x580321(0x12d)] = _0x150293;
            var _0xe1552f = window[_0x580321(0xe3)][_0x580321(0x14c)] || window[_0x580321(0xe3)]['language'];
            _0xe1552f = _0xe1552f[_0x580321(0x11d)](0x0, 0x2),
            _0xe1552f == _0x150293 && $(_0x580321(0x132))['parent']()[_0x580321(0xe6)](_0x580321(0xea));
        }
    }
});
