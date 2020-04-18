! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 59)
}([function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return void 0 === e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(56);
    t.default = {
        waitFor: function (e, t, n, r, o) {
            void 0 === n && (n = 100), void 0 === o && (o = 100);
            var i = setInterval(function () {
                if (--o <= 0) throw clearInterval(i), Error("waitFor timeout. Retries exceeded.");
                if (e()) {
                    if (clearInterval(i), void 0 === t) return;
                    void 0 !== r ? t.bind(r)() : t()
                }
            }, n)
        },
        removeTrailingSlash: function (e) {
            return "/" === e.slice(-1) && (e = e.substr(0, e.length - 1)), e
        },
        getFromEnv: function (e) {
            return r.default[e]
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = d(n(53)),
        o = d(n(0)),
        i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = d(n(3)),
        s = d(n(48)),
        l = d(n(46)),
        c = d(n(1)),
        u = d(n(60)),
        f = d(n(61));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var p = function (e) {
        function t() {
            return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, a.default), i(t, [{
            key: "showSpinner",
            value: function () {
                if (!this.isSpinnerShowing()) {
                    var e = this.htmlStringToDom((0, u.default)()),
                        t = this.cssStringToDom(f.default.toString());
                    e.append(t), this.element.append(e)
                }
            }
        }, {
            key: "bindDomEvent",
            value: function (e, t, n) {
                var r = this;
                this.element.querySelector(e).addEventListener(t, function (e) {
                    n.apply(r, [e])
                })
            }
        }, {
            key: "hideSpinner",
            value: function () {
                this.isSpinnerShowing() && this.findSpinner().remove()
            }
        }, {
            key: "isSpinnerShowing",
            value: function () {
                var e = this.findSpinner();
                return !(0, o.default)(e) && !(0, r.default)(e)
            }
        }, {
            key: "findSpinner",
            value: function () {
                return document.getElementById("sterlingts-spinner")
            }
        }, {
            key: "cssStringToDom",
            value: function (e) {
                var t = document.createElement("style");
                return t.innerHTML = e, t
            }
        }, {
            key: "htmlStringToDom",
            value: function (e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.firstChild
            }
        }, {
            key: "getHeaderHtml",
            value: function () {
                var e = {
                    imgPath: c.default.getFromEnv("IMG_PATH")
                };
                return (0, s.default)(e)
            }
        }, {
            key: "getFooterHtml",
            value: function () {
                return (0, l.default)({})
            }
        }]), t
    }();
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = s(n(57)),
        o = s(n(0)),
        i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = s(n(1));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.eventListeners = {}
        }
        return i(e, [{
            key: "initialize",
            value: function () {}
        }, {
            key: "waitFor",
            value: function (e, t, n) {
                a.default.waitFor(e, t, n, this)
            }
        }, {
            key: "trigger",
            value: function (e, t) {
                (0, o.default)(this.eventListeners[e]) || (0, r.default)(this.eventListeners[e], function (e) {
                    var n = e.context,
                        r = e.callback;
                    (0, o.default)(n) ? r(t): r.bind(n)(t)
                })
            }
        }, {
            key: "on",
            value: function (e, t, n) {
                return (0, o.default)(this.eventListeners[e]) && (this.eventListeners[e] = []), this.eventListeners[e].push({
                    callback: t,
                    context: n
                }), this
            }
        }, {
            key: "off",
            value: function (e) {
                return this.eventListeners[e] = [], this
            }
        }, {
            key: "triggerEventWhen",
            value: function (t) {
                var n = this;
                if (!(t instanceof e)) throw Error("triggerEventWhen requires an instance of BaseClass as a parameter.");
                return {
                    triggersAnyOfTheseEvents: function (e) {
                        (0, r.default)(e, function (e) {
                            t.on(e, function (t, r) {
                                n.trigger(e, t, r)
                            }, n)
                        })
                    }
                }
            }
        }]), e
    }();
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = s(n(25)),
        o = s(n(6)),
        i = s(n(0)),
        a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Symbol("extractDataFromJwt");
    var l = function () {
        function e(t) {
            if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), window.sterlingts.configInstance || (window.sterlingts.configInstance = this), this.values = {}, this.immutableKeys = [], !!(0, i.default)(window.sterlingts.configInstance.get("accessToken"))) {
                if ((0, i.default)(t)) throw Error("accessToken not given in Config constructor");
                this.set("accessToken", t);
                try {
                    this.setMultiKey(this.extractDataFromJwt(t))
                } catch (e) {}
            }
            return window.sterlingts.configInstance
        }
        return a(e, [{
            key: "get",
            value: function (e) {
                if (!(0, i.default)(this.values)) return this.values[e]
            }
        }, {
            key: "set",
            value: function (e, t, n) {
                (0, o.default)(e) ? this.setMultiKey(e, n): this.setSingleKey(e, t, n)
            }
        }, {
            key: "setMultiKey",
            value: function (e, t) {
                for (var n in e) this.setSingleKey(n, e[n], t)
            }
        }, {
            key: "setSingleKey",
            value: function (e, t, n) {
                if ((0, i.default)(n) && (n = !1), (0, r.default)(this.immutableKeys, e) >= 0) throw Error("Cannot set a value for key [" + e + "]. It is immutable");
                n && this.immutableKeys.push(e), this.values[e] = t
            }
        }, {
            key: "extractDataFromJwt",
            value: function (e) {
                var t = e.split(".")[1].replace("-", "+").replace("_", "/"),
                    n = JSON.parse(atob(t));
                if (!(0, i.default)(n.data)) return n.data
            }
        }, {
            key: "clearAll",
            value: function () {
                window.sterlingts.configInstance = null, this.values = {}, this.immutableKeys = []
            }
        }]), e
    }();
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(n(6)),
        o = u(n(9)),
        i = u(n(0)),
        a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        s = u(n(1)),
        l = u(n(26)),
        c = u(n(3));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = function (e) {
        function t(e, n) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return r.data = {}, r.data.id = void 0, r.data = {}, r.resourceUrl = "", (0, i.default)(n) || (0, i.default)(n.resourceUrl) || (r.resourceUrl = n.resourceUrl), r.ajax = new l.default, (0, o.default)(r.data, e), r
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, c.default), a(t, [{
            key: "save",
            value: function () {
                var e = void 0,
                    t = this;
                return e = (0, i.default)(this.get("id")) ? this.ajax.post(this.getResourceUrl(), this.toJsonString()) : this.ajax.put(this.getResourceUrl(), this.toJsonString()), new Promise(function (n, r) {
                    var o = function (e) {
                        t.trigger("error", e), r(e)
                    };
                    return e.then(function (e) {
                        var r = void 0;
                        try {
                            r = JSON.parse(e)
                        } catch (e) {
                            return void o(e)
                        }
                        t.data = r, t.trigger("change"), n(r)
                    }, o)
                })
            }
        }, {
            key: "getResourceUrl",
            value: function () {
                var e = s.default.removeTrailingSlash(this.resourceUrl);
                return (0, i.default)(this.get("id")) ? e : e + "/" + this.get("id")
            }
        }, {
            key: "set",
            value: function (e, t) {
                if ((0, r.default)(e))
                    for (var n in e) this.data[n] = e[n];
                else this.data[e] = t;
                this.trigger("change")
            }
        }, {
            key: "get",
            value: function (e) {
                return this.data[e]
            }
        }, {
            key: "getData",
            value: function () {
                return this.data
            }
        }, {
            key: "toJsonString",
            value: function () {
                return JSON.stringify(this.data)
            }
        }]), t
    }();
    t.default = f
}, function (e, t, n) {
    "use strict";
    var r = n(51),
        o = n(50),
        i = n(14),
        a = "[object Object]",
        s = Function.prototype,
        l = Object.prototype,
        c = s.toString,
        u = l.hasOwnProperty,
        f = c.call(Object);
    e.exports = function (e) {
        if (!i(e) || r(e) != a) return !1;
        var t = o(e);
        if (null === t) return !0;
        var n = u.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && c.call(n) == f
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = s(n(0)),
        o = s(n(9)),
        i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = s(n(3));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = function (e) {
        function t(e, n) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return r.controllers = [], r.outputMappings = [], r.currentControllerIndex = -1, r.initialInputs = n, r.options = e, r
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, a.default), i(t, [{
            key: "initialize",
            value: function () {
                this.outputs = (0, o.default)(this.initialInputs, this.outputs), this.nextController()
            }
        }, {
            key: "nextController",
            value: function () {
                this.currentControllerIndex++, this.loadController()
            }
        }, {
            key: "loadController",
            value: function () {
                var e = this;
                if (this.currentControllerIndex >= this.controllers.length) this.trigger("complete", this.outputs);
                else if (!(0, r.default)(this.controllers[this.currentControllerIndex])) {
                    var t = new this.controllers[this.currentControllerIndex](this.options, this.outputs);
                    this.triggerEventWhen(t).triggersAnyOfTheseEvents(["ready", "close", "error"]), t.on("complete", function (t) {
                        var n = e.outputMappings[e.currentControllerIndex];
                        e.outputs[n] = t, e.nextController()
                    }, this), t.initialize()
                }
            }
        }, {
            key: "addController",
            value: function (e, t) {
                this.controllers.push(e), this.outputMappings.push(t)
            }
        }]), t
    }();
    t.default = l
}, function (e, t, n) {
    "use strict";
    var r = n(37);
    e.exports = function (e, t, n) {
        "__proto__" == t && r ? r(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(40)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n(5),
        a = (r = i) && r.__esModule ? r : {
            default: r
        };
    var s = function (e) {
        function t(e, n) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return r.resourceUrl = "packages", r
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, a.default), o(t, [{
            key: "getPrice",
            value: function (e) {
                var t = this.getResourceUrl() + "/price?candidateId=" + e,
                    n = void 0,
                    r = this;
                return n = this.ajax.get(t), new Promise(function (e, t) {
                    var o = function (e) {
                        r.trigger("error", e), t(e)
                    };
                    return n.then(function (t) {
                        var n = void 0;
                        try {
                            n = JSON.parse(t)
                        } catch (e) {
                            return void o(e)
                        }
                        var i = r.data.id;
                        r.data = n, r.data.id = i, r.trigger("change"), e(n)
                    }, o)
                })
            }
        }]), t
    }();
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = l(n(0)),
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = l(n(2)),
        a = l(n(44)),
        s = l(n(43));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = function (e) {
        function t(e) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if ((0, r.default)(e)) throw Error("No options defined for PurchaseDetailsView");
            if ((0, r.default)(e.topElement)) throw Error("No topElement defined for PurchaseDetailsView");
            if ((0, r.default)(e.sideElement)) throw Error("No sideElement defined for PurchaseDetailsView");
            if ((0, r.default)(e.packageModel)) throw Error("No packageModel defined for PurchaseDetailsView");
            return n.title = "Purchase Details", (0, r.default)(e.title) || (n.title = e.title), n.packageModel = e.packageModel, n.sideElement = e.sideElement, n.topElement = e.topElement, n.packageModel.on("change", function () {
                n.render()
            }, n), n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.default), o(t, [{
            key: "render",
            value: function () {
                var e = {
                    total: this.packageModel.get("total"),
                    title: this.title
                };
                this.sideElement.innerHTML = (0, s.default)(e), this.topElement.innerHTML = (0, a.default)(e)
            }
        }]), t
    }();
    t.default = c
}, function (e, t, n) {
    (e.exports = n(13)(!1)).push([e.i, '\n\n.sterlingts-page-title {\n    color: #0067B9;\n    font-size:1em;\n}\n\n.sterlingts-input-text {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    display: block;\n    padding: .375rem .75rem;\n    font-size: 1em;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    margin-bottom: 1rem;\n}\n\n.sterlingts-input-text:focus,\ndiv.sterlingts-input-text--focus {\n    border-bottom: 2px solid #0067B9;\n    box-shadow: none;\n    outline: none;\n}\n\n.sterlingts-form-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n\n.sterlingts-col2, .sterlingts-col-3, .sterlingts-col-5, .sterlingts-col-12 {\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n}\n\n::placeholder {\n   color: #8E8E8E\n}\n\n#sterlingts-cardcollection-error {\n    margin-bottom: 0.25em;\n    color: #D50032;\n}\n\ndiv.sterlingts-input-text--invalid {\n    border-bottom: 2px solid #D50032;\n    box-shadow: none;\n    outline: none;\n    color: #D50032;\n}\n\n.sterlingts-cardlogo {\n    float:left;\n    color: #8E8E8E;\n    font-size: .8em;\n}\n\n#sterlingts-purchase-details-side {\n    background-color: #F5F5F5;\n    padding: .5em;\n    width:200px;\n    float: left;\n    margin-top: 1em;\n    margin-left: 7.1em;\n}\n\n#sterlingts-purchase-details-side #sterlingts-purchase-item {\n    margin-bottom: .75em;\n    font-size: .9em;\n    color: #8E8E8E;\n}\n\n.sterlingts-float-right {\n    float:right;\n}\n\n.sterlingts-float-left {\n    float:left;\n}\n\n.sterlingts-point8-grey {\n    font-size: .8em;\n    color: #8E8E8E;\n}\n\n.sterlingts-border-side {\n    border-top: 1px solid #cccccc;\n    padding-top: .5em;\n    margin-top: .5em;\n}\n\n#sterlingts-purchase-details-top {\n    display: none;\n}\n\n.sterlingts-item-line .material-icons {\n    font-size: 3em;\n    float: left;\n    color: #00BB00;\n}\n\n.sterlingts-item-line {\n    height: 3em;\n}\n\n\n/*******************/\n/***** Mobile *****/\n/******************/\n@media (max-width: 500px) {\n    .sterlingts-col-12 {\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n\n    .sterlingts-col-2 {\n        -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.666667%;\n        flex: 0 0 16.666667%;\n        max-width: 16.666667%;\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n\n    .sterlingts-col-3 {\n        -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n        flex: 0 0 25%;\n        max-width: 25%;\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n    \n    .sterlingts-col-4 {\n        -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.333333%;\n        flex: 0 0 33.333333%;\n        max-width: 33.333333%;\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n    \n    .sterlingts-col-5 {\n        -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.666667%;\n        flex: 0 0 41.666667%;\n        max-width: 41.666667%;\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n\n    .sterlingts-input-text {\n        border: 0;\n        border-bottom: 2px solid #cccccc;\n        padding: 0;\n        width: 100%;\n    }\n\n    .sterlingts-input-text:focus,\n    .sterlingts-input-text--focus {\n        background-color: #FFFFFF;\n    }\n}\n\n@media(max-width: 911px) {\n    #sterlingts-purchase-details-side {\n        display: none;\n    }\n\n    #sterlingts-purchase-details-top {\n        display: block;\n        border-bottom: 1px solid #cccccc;\n        padding-bottom: .5em;\n        margin: 0em .75em .75em 0em;\n    }\n}\n\n@media (min-width: 501px) {\n    .sterlingts-input-text {\n        border: 0;\n        background-color: #F5F5F5;\n        width:60%;\n    }\n\n    .sterlingts-col-2,\n    .sterlingts-col-3,\n    .sterlingts-col-4,\n    .sterlingts-col-5\n    {\n        -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n        flex: 0 0 25%;\n    }\n\n    .sterlingts-input-text.sterlingts-input-wide {\n        -webkit-box-flex: 0;\n        -ms-flex: 0 0 40%;\n        flex: 0 0 40%;\n        width:100%;\n    }\n\n    .sterlingts-form-row {\n        display:inherit;\n    }\n\n    .sterlingts-input-text:focus,\n    .sterlingts-input-text--focus {\n        background-color: #F5F5F5;\n    }\n\n    .sterlingts-cardarea-and-cardlogo {\n        float:left;\n        width: 43%;\n        border-right: 1px solid #cccccc;\n        min-width:400px;\n        margin-top: 1em;\n    }\n\n    .sterlingts-cardarea {\n        float:left;\n        width: 60%;\n        padding-right: .5em;\n    }\n\n    .sterlingts-cardlogo {\n        width: 40%;\n        padding-left: .5em;\n        padding-right: .5em;\n    }\n\n    #sterlingts-cardcollection-form .sterlingts-button {\n        width: 50%;\n    }\n\n    #sterlingts-cardcollection-form [id$="-error"] {\n        color: #D50032;\n        margin-top: -1em;\n        margin-bottom: 1em;\n    }\n\n    .sterlingts-card-accepts {\n        margin-right:2em;\n    }\n}', ""])
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = r.sources.map(function (e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = function (e) {
        return null != e && "object" == (void 0 === e ? "undefined" : r(e))
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(3),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    var a = function (e) {
        function t() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.$element = {}, e
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.default), t
    }();
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(n(0)),
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = u(n(15)),
        a = u(n(55)),
        s = u(n(42)),
        l = u(n(10)),
        c = u(n(4));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = function (e) {
        function t(e, n) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var o = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if ((0, r.default)(e)) throw Error("No options given");
            if ((0, r.default)(e.element)) throw Error("No element defined in options");
            o.element = e.element, o.inputs = {}, (0, r.default)(n) || (o.inputs = n);
            var i = new c.default;
            if ((0, r.default)(o.inputs.candidate) && (o.inputs.candidate = i.get("candidate")), (0, r.default)(o.inputs.candidate) || (0, r.default)(o.inputs.candidate.id)) throw Error("candidate.id was not given");
            if ((0, r.default)(o.inputs.package) && (o.inputs.package = i.get("package")), (0, r.default)(o.inputs.package) || (0, r.default)(o.inputs.package.id)) throw Error("package.id was not given");
            return o.packageModel = new l.default({
                id: o.inputs.package.id
            }), o.cardCollectionView = new a.default({
                element: o.element,
                packageModel: o.packageModel
            }), o.cardCollectionView.on("ready", function (e) {
                o.trigger("ready", e)
            }, o), o.cardConfirmationView = new s.default({
                element: o.element,
                packageModel: o.packageModel
            }), o.cardToken = "", o.cardCollectionView.on("complete", function (e) {
                o.cardToken = e, o.cardConfirmationView.render()
            }, o), o.cardConfirmationView.on("back", function () {
                o.cardCollectionView.render()
            }, o), o.cardConfirmationView.on("complete", function (e) {
                o.trigger("complete", o.cardToken)
            }, o), o
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.default), o(t, [{
            key: "initialize",
            value: function () {
                var e = this,
                    t = this.inputs.candidate.id;
                this.packageModel.getPrice(t).then(function () {}, function (t) {
                    e.trigger("error", t)
                }), this.cardCollectionView.render()
            }
        }]), t
    }();
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        CREATE_SCREENING_WITH_APPLICANT_PAY: "createScreeningWithApplicantPay"
    }
}, function (module, exports) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += '<div class="sterlingts-alert-success sterlingts-margin-top1">\n    <div class="sterlingts-alert-header">\n        <i class="material-icons">check_circle</i>\n        <span class="sterlingts-alert-title">Order Confirmation</span>\n    </div>\n\n    <div class="sterlingts-alert-success-body">\n        <div>\n            Your Background check has been submitted, and a payment of $' + (null == (__t = total) ? "" : __t) + " has been charged to your credit or debit card.\n            \x3c!-- A receipt has been sent to " + (null == (__t = email) ? "" : __t) + '. --\x3e\n        </div>\n        <div class="strong sterlingts-padding-top1">Order Number:</div>\n        <div>' + (null == (__t = orderNumber) ? "" : __t) + '</div>\n    </div>\n</div>\n\n<div class="sterlingts-padding-top1">\n    <button id="done" class="sterlingts-button sterlingts-button-white">Done</button>\n    <a target="_blank" class="sterlingts-button" href="https://www.talentwise.com/screening/login.php">Check Screening Status</a>\n</div>';
        return __p
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = l(n(0)),
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            return void 0 !== a ? a.call(r) : void 0
        },
        a = l(n(2)),
        s = l(n(18));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = function (e) {
        function t(e) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if ((0, r.default)(e)) throw Error("No options defined for CreateScreeningSuccessView");
            if ((0, r.default)(e.element)) throw Error("No Element defined for CreateScreeningSuccessView");
            if ((0, r.default)(e.packageModel)) throw Error("No packageModel defined for CreateScreeningSuccessView");
            if ((0, r.default)(e.screeningModel)) throw Error("No screeningModel defined for CreateScreeningSuccessView");
            return n.packageModel = e.packageModel, n.screeningModel = e.screeningModel, n.element = e.element, n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, a.default), o(t, [{
            key: "render",
            value: function () {
                var e = this,
                    n = {
                        total: this.packageModel.get("total"),
                        email: "test@email.com",
                        orderNumber: this.screeningModel.get("id")
                    };
                this.element.innerHTML = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getHeaderHtml", this).call(this) + (0, s.default)(n) + i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getFooterHtml", this).call(this), this.element.querySelector("#done").addEventListener("click", function () {
                    e.trigger("close")
                })
            }
        }]), t
    }();
    t.default = c
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(5),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    var a = function (e) {
        function t(e, n) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return r.resourceUrl = "charges", r
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.default), t
    }();
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(5),
        i = (r = o) && r.__esModule ? r : {
            default: r
        };
    var a = function (e) {
        function t(e, n) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return r.resourceUrl = "screenings", r
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.default), t
    }();
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(n(0)),
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = u(n(15)),
        a = u(n(21)),
        s = u(n(20)),
        l = u(n(10)),
        c = u(n(19));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = function (e) {
        function t(e, n) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var o = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if ((0, r.default)(n.candidate) || (0, r.default)(n.candidate.id)) throw Error("candidate.id was not given");
            if ((0, r.default)(n.token) || (0, r.default)(n.token.id)) throw Error("token.id was not given");
            if ((0, r.default)(n.package) || (0, r.default)(n.package.id)) throw Error("package.id was not given");
            if ((0, r.default)(e.element)) throw Error("No element defined in options");
            return o.inputs = n, o.options = e, o.element = e.element, o.packageModel = new l.default({
                id: o.inputs.package.id
            }), o.screeningModel = new a.default({}), o.chargeModel = new s.default({}), o.createScreeningSuccessView = new c.default({
                element: o.element,
                packageModel: o.packageModel,
                screeningModel: o.screeningModel
            }), o.createScreeningSuccessView.on("close", function () {
                o.trigger("close")
            }, o), o
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.default), o(t, [{
            key: "initialize",
            value: function () {
                var e = this,
                    t = this.inputs.candidate.id,
                    n = this.inputs.token.id,
                    r = this;
                this.getPrice(t).then(function () {
                    var e = 100 * parseInt(r.packageModel.get("total"));
                    return r.chargeModel.set({
                        tokenId: n,
                        amount: e
                    }), r.chargeModel.save()
                }).then(function () {
                    return r.screeningModel.set({
                        candidateId: t,
                        packageId: r.packageModel.get("id"),
                        chargeId: r.chargeModel.get("id")
                    }), r.screeningModel.save()
                }).then(function () {
                    r.trigger("complete", r.screeningModel.getData()), e.createScreeningSuccessView.render()
                }).catch(function (e) {
                    r.trigger("error", e)
                })
            }
        }, {
            key: "getPrice",
            value: function (e) {
                return !(0, r.default)(this.inputs.token.price) ? (this.packageModel.set("total", this.inputs.token.price), Promise.resolve()) : this.packageModel.getPrice(e)
            }
        }]), t
    }();
    t.default = f
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
        for (var r = n - 1, o = e.length; ++r < o;)
            if (e[r] === t) return r;
        return -1
    }
}, function (e, t, n) {
    "use strict";
    var r = n(24),
        o = n(23),
        i = Math.max;
    e.exports = function (e, t, n) {
        var a = null == e ? 0 : e.length;
        if (!a) return -1;
        var s = null == n ? 0 : o(n);
        return s < 0 && (s = i(a + s, 0)), r(e, t, s)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = s(n(0)),
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = s(n(1)),
        a = s(n(4));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Symbol("doHttpCall"), Symbol("convertXHR");
    var l = function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var t = new a.default;
            if (this.accessToken = t.get("accessToken"), this.baseUrl = t.get("baseUrl"), (0, r.default)(this.accessToken)) throw Error("accessToken not defined in Config");
            if ((0, r.default)(this.baseUrl)) throw Error("baseUrl not defined in Config")
        }
        return o(e, [{
            key: "get",
            value: function (e) {
                return this.doHttpCall("GET", e, void 0)
            }
        }, {
            key: "post",
            value: function (e, t) {
                return this.doHttpCall("POST", e, t)
            }
        }, {
            key: "put",
            value: function (e, t) {
                return this.doHttpCall("PUT", e, t)
            }
        }, {
            key: "delete",
            value: function (e) {
                return this.doHttpCall("DELETE", e, void 0)
            }
        }, {
            key: "convertXhrErrorToSterlingError",
            value: function (e) {
                var t = void 0,
                    n = void 0;
                try {
                    var o = JSON.parse(e.responseText)[0];
                    o.code && (t = o.code), o.message && (n = o.message)
                } catch (e) {}
                if (!n) {
                    n = "Unknown Error";
                    try {
                        n = JSON.parse(e.responseText)
                    } catch (t) {
                        (0, r.default)(e.responseText) || (n = e.responseText)
                    }
                }
                return t || (t = String(e.status)), {
                    code: t,
                    message: n
                }
            }
        }, {
            key: "doHttpCall",
            value: function (e, t, n) {
                var o = this;
                return new Promise(function (a, s) {
                    var l = new XMLHttpRequest,
                        c = i.default.removeTrailingSlash(o.baseUrl) + "/" + t;
                    l.open(e, c, !0), l.setRequestHeader("Accept", "application/json"), l.setRequestHeader("Content-Type", "application/json"), l.setRequestHeader("Authorization", "Bearer " + o.accessToken), l.onload = function () {
                        l.status >= 200 && l.status < 300 ? a(l.responseText) : s(o.convertXhrErrorToSterlingError(l))
                    }, l.onerror = function () {
                        s(o.convertXhrErrorToSterlingError(l))
                    }, (0, r.default)(n) ? l.send() : l.send(n)
                })
            }
        }]), e
    }();
    t.default = l
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        if (null != e)
            for (var n in Object(e)) t.push(n);
        return t
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function () {
        return !1
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(30),
        o = Math.max;
    e.exports = function (e, t, n) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
            function () {
                for (var i = arguments, a = -1, s = o(i.length - t, 0), l = Array(s); ++a < s;) l[a] = i[t + a];
                a = -1;
                for (var c = Array(t + 1); ++a < t;) c[a] = i[a];
                return c[t] = n(l), r(e, this, c)
            }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(32),
        o = n(31),
        i = n(29);
    e.exports = function (e, t) {
        return i(o(e, t, r), e + "")
    }
}, function (e, t, n) {
    "use strict";
    var r = n(33),
        o = n(28);
    e.exports = function (e) {
        return r(function (t, n) {
            var r = -1,
                i = n.length,
                a = i > 1 ? n[i - 1] : void 0,
                s = i > 2 ? n[2] : void 0;
            for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, s && o(n[0], n[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
                var l = n[r];
                l && e(t, l, r, a)
            }
            return t
        })
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return e === t || e != e && t != t
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return null == e ? void 0 : e[t]
    }
}, function (e, t, n) {
    "use strict";
    var r = n(36),
        o = function () {
            try {
                var e = r(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    e.exports = o
}, function (e, t, n) {
    "use strict";
    var r = n(8),
        o = n(35),
        i = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n) {
        var a = e[t];
        i.call(e, t) && o(a, n) && (void 0 !== n || t in e) || r(e, t, n)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(38),
        o = n(8);
    e.exports = function (e, t, n, i) {
        var a = !n;
        n || (n = {});
        for (var s = -1, l = t.length; ++s < l;) {
            var c = t[s],
                u = i ? i(n[c], e[c], c, n, e) : void 0;
            void 0 === u && (u = e[c]), a ? o(n, c, u) : r(n, c, u)
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(39),
        o = n(34),
        i = n(27),
        a = o(function (e, t) {
            r(t, i(t), e)
        });
    e.exports = a
}, function (module, exports, __webpack_require__) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += "<style>\n    /* @ include ('../../node_modules/bootstrap/dist/css/bootstrap.min.css'); *\n</style>\n<style>\n    " + __webpack_require__(12) + ';\n</style>\n\n<div class="sterlingts-cardarea-and-cardlogo">\n    <div id="sterlingts-purchase-details-top"></div>\n\n    <h1 class="sterlingts-page-title">Payment Submission</h1>\n    <h2>By clicking the Pay Now button, you are authorizing SterlingNow to charge your credit or debit card for this transaction.</h2>\n    <div>\n        <button id="sterlingts-back" class="sterlingts-button sterlingts-button-white">Back</button>\n        <button id="sterlingts-complete" class="sterlingts-button">Pay $' + (null == (__t = total) ? "" : __t) + ' Now</button>\n    </div>\n</div>\n\n<div id="sterlingts-purchase-details-side"></div>';
        return __p
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = c(n(0)),
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            return void 0 !== a ? a.call(r) : void 0
        },
        a = c(n(11)),
        s = c(n(2)),
        l = c(n(41));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function (e) {
        function t(e) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if ((0, r.default)(e)) throw Error("No options defined for CardCollectionView");
            if ((0, r.default)(e.element)) throw Error("No Element defined for CardCollectionView");
            if ((0, r.default)(e.packageModel)) throw Error("No packageModel defined for CardCollectionView");
            return n.packageModel = e.packageModel, n.element = e.element, n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s.default), o(t, [{
            key: "render",
            value: function () {
                var e = {
                    total: this.packageModel.get("total")
                };
                this.element.innerHTML = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getHeaderHtml", this).call(this) + (0, l.default)(e) + i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getFooterHtml", this).call(this), this.bindDomEvent("#sterlingts-complete", "click", this.completeClicked), this.bindDomEvent("#sterlingts-back", "click", this.backClicked), this.renderPurchaseDetails()
            }
        }, {
            key: "completeClicked",
            value: function (e) {
                this.disableCompleteButton(), this.trigger("complete")
            }
        }, {
            key: "disableCompleteButton",
            value: function () {
                var e = this.element.querySelector("#sterlingts-complete");
                e.disabled = !0, e.innerHTML = "Please wait..."
            }
        }, {
            key: "backClicked",
            value: function (e) {
                this.trigger("back")
            }
        }, {
            key: "renderPurchaseDetails",
            value: function () {
                var e = this.element.querySelector("#sterlingts-purchase-details-top"),
                    t = this.element.querySelector("#sterlingts-purchase-details-side");
                this.purchaseDetailsView = new a.default({
                    topElement: e,
                    sideElement: t,
                    packageModel: this.packageModel,
                    title: "Order Summary"
                }), this.purchaseDetailsView.render()
            }
        }]), t
    }();
    t.default = u
}, function (module, exports) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += '<div class="sterlingts-purchase-details-side">\n    <h1 class="sterlingts-page-title">' + (null == (__t = title) ? "" : __t) + '</h1>\n\n    <div class="sterlingts-item-line">\n        <i class="material-icons">account_circle</i>\n        <span class="sterlingts-purchase-item">Background Check</span>\n    </div>\n\n    <div class="sterlingts-border-top">\n        <div class="sterlingts-float-left sterlingts-point8-grey">Total</div>\n        <div class="sterlingts-float-right sterlingts-point8-grey sterlingts-summary-total">$' + (null == (__t = total) ? "" : __t) + "</div>\n    </div>\n</div>";
        return __p
    }
}, function (module, exports) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += '<div class="sterlingts-purchase-details-top sterlingts-border-bottom">\n    <span class="sterlingts-purchase-item sterlingts-color-light-grey">Background Check</span>\n    <span class="sterlingts-point8-grey sterlingts-float-right">Total: $' + (null == (__t = total) ? "" : __t) + "</span>\n</div>\n";
        return __p
    }
}, function (module, exports, __webpack_require__) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += "<style>\n    /* @ include ('../../node_modules/bootstrap/dist/css/bootstrap.min.css'); *\n</style>\n<style>\n    " + __webpack_require__(12) + ';\n</style>\n\x3c!-- Some way to get app to include this font outside of this template --\x3e\n\n<div class="sterlingts-cardarea-and-cardlogo">\n    <div id="sterlingts-purchase-details-top"></div>\n\n    <h1 class="sterlingts-page-title">Enter payment method</h1>\n    <h2>Please enter your credit or debit card information to complete this transaction.</h2>\n    <div id="sterlingts-cardcollection-error"></div>\n    <form id="sterlingts-cardcollection-form" action="" method="POST">\n        <div class="sterlingts-cardarea">\n            <div class="sterlingts-form-row">\n                <div class="sterlingts-col-12">\n                    <div id="sterlingts-cardcollection-number" class="sterlingts-input-text sterlingts-input-wide"></div>\n                </div>\n            </div>\n            <div class="sterlingts-form-row">\n                <div class="sterlingts-col-4">\n                    <div id="sterlingts-cardcollection-exp" class="sterlingts-input-text"></div>\n                </div>\n                <div class="sterlingts-col-3">\n                    <div id="sterlingts-cardcollection-cvc" class="sterlingts-input-text"></div>\n                </div>\n                <div class="sterlingts-col-5">\n                    <input type="text" name="zip" id="sterlingts-cardcollection-zip" class="sterlingts-input-text" placeholder="Zip">\n                </div>\n            </div>\n        </div>\n        <div class="sterlingts-point8-grey sterlingts-card-accepts">\n            <span>[Company Name] accepts most major credit and debit cards:</span>\n            <div>\n                <img src="' + (null == (__t = imgPath) ? "" : __t) + '/visa.png">\n                <img src="' + (null == (__t = imgPath) ? "" : __t) + '/mastercard.png">\n                <img src="' + (null == (__t = imgPath) ? "" : __t) + '/amex.png">\n                <img src="' + (null == (__t = imgPath) ? "" : __t) + '/discover.png">\n            </div>\n        </div>\n        <input type="submit" id="sterlingts-pay-now" class="sterlingts-button" value="Please wait...">\n    </form>\n</div>\n\n<div id="sterlingts-purchase-details-side"></div>';
        return __p
    }
}, function (module, exports) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += "    </div>\n</div>";
        return __p
    }
}, function (e, t, n) {
    (e.exports = n(13)(!1)).push([e.i, "\n.sterlingts-container *, ::after, ::before {\n    box-sizing: border-box;\n}\n\n.sterlingts-container {\n    margin: -10px;\n    line-height: 1.5;\n}\n\n.sterlingts-container img {\n    vertical-align: middle;\n    border-style: none;\n}\n\n.sterlingts-container button:hover {\n    box-shadow: none;\n    border-style: none;\n    outline: none;\n}\n\n\n.sterlingts-container {\n    width: 100%;\n    height:100vh;\n    margin-right: auto;\n    margin-left: auto;\n    font-family: 'Roboto', sans-serif;\n}\n\n.sterlingts-container-header {\n    border-bottom: 1px solid #dddddd;\n}\n\n\n.sterlingts-icon {\n    height: 1.7em;\n    width: 1.7em;\n    display: inline-block;\n    margin: .75em;\n}\n\n.sterlingts-container h1 {\n    font-size: 1em;\n    font-weight: 500;\n    display: inline-block;\n    margin: 0em;\n}\n\n.sterlingts-icon img {\n    height: 100%;\n    width: 100%;\n}\n\n\n.sterlingts-container-body {\n    width:100%;\n}\n\n.sterlingts-container h2 {\n    margin-bottom: .75em;\n    font-size: .9em;\n    color: #8E8E8E;\n}\n\n.sterlingts-app-title {\n    border-left: 1px solid #cccccc;\n    padding-left: 1em;\n}\n\n.sterlingts-color-blue {\n    color: #0067B9;\n}\n\n.sterlingts-color-dark-grey {\n    color: #494949;\n}\n\n.sterlingts-color-light-grey {\n    color: #8E8E8E;\n}\n\n.sterlingts-color-red {\n    color: #D50032;\n}\n\n.strong {\n    font-weight:900;\n}\n\n.sterlingts-alert-success {\n    background-color: #e0f1d4;\n    width: 60%;\n    padding:1em;\n    border: 1px solid #74bb56;\n    border-radius: .3rem;\n    color: #8E8E8E;\n    min-width:350px;\n}\n\n.sterlingts-alert-success-body {\n    margin-left: 2.2em;\n}\n\n.sterlingts-alert-success .sterlingts-alert-header {\n    color: #0067B9;\n    font-size: 1.25em;\n    margin-bottom: .5em;\n}\n\n.sterlingts-alert-header .material-icons {\n    font-size: 1.5em;\n    float: left;\n    color: #00BB00;\n}\n\n.sterlingts-alert-title {\n    padding-left: .25em;\n}\n\n.sterlingts-padding-top1 {\n    padding-top: 1em;\n}\n\n.sterlingts-margin-top1 {\n    margin-top: 1em;\n}\n\n.sterlingts-button.sterlingts-button-white {\n    background-color: white;\n    color: #0067B9;\n    border-color: #0067B9;\n}\n\na.sterlingts-button {\n    text-decoration: none;\n    color: #fff;\n    background-color: #0067B9;\n    height: 2em;\n    line-height: 2em;\n    padding-top: .35em;\n    padding-bottom: .35em;\n}\n\nbutton.sterlingts-button.sterlingts-button-white:hover {\n    box-shadow: none;\n    outline: none;\n    border-style: solid;\n}\n\n\n.sterlingts-button {\n    background-color: #0067B9;\n    color: white;\n    cursor: pointer;\n    line-height: 1.5rem;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    user-select: none;\n    border: 1px solid transparent;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    text-transform: none;\n    font-family: inherit;\n    height: 2.0em;\n    outline: none;\n    padding-left: 1em;\n    padding-right: 1em;\n    display: inline;\n}\n\n.sterlingts-button:disabled {\n    background-color: #8E8E8E;\n    cursor: not-allowed;\n}\n\n/*******************/\n/***** Mobile *****/\n/******************/\n@media (max-width: 500px) {\n    .sterlingts-alert-success {\n        width: 100%;\n        max-width:100%;\n    }\n\n    .sterlingts-button {\n        position: relative;\n        font-size: .9rem;\n        border-radius: .4rem;\n        height: 3em;\n        padding-top: .50em;\n        width:100%;\n        margin-top: .5em;\n    }\n\n    .sterlingts-container-body {\n        padding-left: 1.4em;\n        padding-right: 1.4em;\n    }\n\n    a.sterlingts-button {\n        display:block;\n        height: 3em;\n    }\n}\n\n/*** NOT MOBILE */\n@media (min-width: 501px) {\n    .sterlingts-button {\n        font-size: 1.0rem;\n        border-radius: .2rem;\n    }\n\n    .sterlingts-container-body {\n        padding-left: 5.7em;\n        padding-right: 5.7em;\n    }\n\n}\n", ""])
}, function (module, exports, __webpack_require__) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += "<style>\n    " + __webpack_require__(47) + ';\n</style>\n<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n<div id="sterlingts-cardcollection" class="sterlingts-container">\n    <div class="sterlingts-container-header">\n        <div class="sterlingts-icon">\n            <img src="' + (null == (__t = imgPath) ? "" : __t) + '/logo.png">\n        </div>\n        <h1 class="sterlingts-app-title">\n            <span class="sterlingts-color-blue">Self Pay</span>\n        </h1>\n    </div>\n\n    <div class="sterlingts-container-body">';
        return __p
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function (n) {
            return e(t(n))
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(49)(Object.getPrototypeOf, Object);
    e.exports = r
}, function (e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    e.exports = function (e) {
        return r.call(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(14),
        o = n(6);
    e.exports = function (e) {
        return r(e) && 1 === e.nodeType && !o(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return null === e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = c(n(53)),
        o = c(n(52)),
        i = c(n(0)),
        a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        s = c(n(2)),
        l = c(n(1));

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function (e) {
        function t(e) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if ((0, i.default)(e)) throw Error("No options given");
            if ((0, i.default)(e.elements)) throw Error("No elements defined in options");
            if ((0, i.default)(e.elements.form) || !(0, o.default)(e.elements.form)) throw Error("No form element defined in options");
            if ((0, i.default)(e.elements.number) || !(0, o.default)(e.elements.number)) throw Error("No number element defined in options");
            if ((0, i.default)(e.elements.zip) || !(0, o.default)(e.elements.zip)) throw Error("No zip element defined in options");
            if ((0, i.default)(e.elements.cvc) || !(0, o.default)(e.elements.cvc)) throw Error("No cvc element defined in options");
            if ((0, i.default)(e.elements.exp) || !(0, o.default)(e.elements.exp)) throw Error("No exp element defined in options");
            n.$elements = e.elements, n.stripe = {}, n.stripeElementsNotReady = 0;
            if (!n.isStripeOnline() || !document.getElementById("sterlingts-cardcollection-stripe")) {
                var r = document.createElement("script");
                r.src = "https://js.stripe.com/v3/", r.id = "sterlingts-cardcollection-stripe", document.body.appendChild(r)
            }
            return n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s.default), a(t, [{
            key: "render",
            value: function () {
                this.waitFor(this.isStripeOnline, this.bindStripeElementsToDom)
            }
        }, {
            key: "isStripeOnline",
            value: function () {
                try {
                    return !(0, i.default)(window.Stripe)
                } catch (e) {
                    return !1
                }
            }
        }, {
            key: "bindStripeElementsToDom",
            value: function () {
                var e, t, n = this,
                    r = l.default.getFromEnv("STRIPE_PUBLIC_API_KEY");
                this.stripe = window.Stripe(r), e = this.stripe.elements(), t = this.bindStripeElement("cardNumber", this.$elements.number, "Card Number*", e), this.bindStripeElement("cardExpiry", this.$elements.exp, "MM/YY*", e), this.bindStripeElement("cardCvc", this.$elements.cvc, "CVC", e);
                var o = function (e) {
                        e.preventDefault();
                        var r = {
                            address_zip: n.$elements.cvc.value
                        };
                        n.stripe.createToken(t, r).then(function (e) {
                            if (e.error) {
                                var t = document.getElementById("sterlingts-cardcollection-error");
                                if (!t) return void console.log("No 'sterlingts-cardcollection-error' Element found, not displaying error messages");
                                t.textContent = e.error.message
                            } else {
                                var r = {
                                    id: e.token.id
                                };
                                n.trigger("complete", r)
                            }
                        })
                    },
                    i = this.$elements.form;
                i.removeEventListener("submit", o), i.addEventListener("submit", o)
            }
        }, {
            key: "bindStripeElement",
            value: function (e, t, n, o) {
                if ((0, i.default)(t) || (0, r.default)(t)) throw Error("undefined domElement passed to StripeView element [" + e + "]");
                t.innerHTML = "";
                var a = this,
                    s = {
                        classes: {
                            base: "sterlingts-input-text",
                            complete: "sterlingts-input-text--compete",
                            empty: "sterlingts-input-text--empty",
                            focus: "sterlingts-input-text--focus",
                            invalid: "sterlingts-input-text--invalid",
                            webkitAutofill: "sterlingts-input-text--webkit-autofill"
                        },
                        placeholder: n,
                        style: {
                            base: {
                                fontSize: "16px",
                                "::placeholder": {
                                    color: "#8E8E8E"
                                }
                            }
                        }
                    },
                    l = o.create(e, s);
                return this.stripeElementsNotReady++, l.on("ready", function () {
                    a.stripeElementsNotReady--, 0 === a.stripeElementsNotReady && a.trigger("ready")
                }), l.mount(t), l.addEventListener("change", function (e) {
                    e.error ? a.addStripeError(t, e.error.message) : a.removeStripeError(t)
                }), l
            }
        }, {
            key: "addStripeError",
            value: function (e, t) {
                var n = e.id + "-error",
                    o = document.getElementById(n);
                ((0, i.default)(o) || (0, r.default)(o)) && ((o = document.createElement("div")).id = n), o.innerText = t, e.parentNode.appendChild(o)
            }
        }, {
            key: "removeStripeError",
            value: function (e) {
                var t = e.id + "-error",
                    n = document.getElementById(t);
                (0, i.default)(n) || (0, r.default)(n) || n.remove()
            }
        }]), t
    }();
    t.default = u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = f(n(0)),
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            return void 0 !== a ? a.call(r) : void 0
        },
        a = f(n(54)),
        s = f(n(2)),
        l = f(n(45)),
        c = f(n(11)),
        u = f(n(1));

    function f(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = function (e) {
        function t(e) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if ((0, r.default)(e)) throw Error("No options defined for CardCollectionView");
            if ((0, r.default)(e.element)) throw Error("No Element defined for CardCollectionView");
            if ((0, r.default)(e.packageModel)) throw Error("No packageModel defined for CardCollectionView");
            return n.packageModel = e.packageModel, n.element = e.element, n.packageModel.on("change", function () {
                n.updatePrices()
            }, n), n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s.default), o(t, [{
            key: "render",
            value: function () {
                var e = {
                    total: this.packageModel.get("total"),
                    imgPath: u.default.getFromEnv("IMG_PATH")
                };
                this.element.innerHTML = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getHeaderHtml", this).call(this) + (0, l.default)(e) + i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getFooterHtml", this).call(this), this.updatePrices(), this.waitFor(this.doAllStripeElementsExist, this.renderStripe)
            }
        }, {
            key: "updatePrices",
            value: function () {
                this.renderPurchaseDetails(), this.updatePayNowButton()
            }
        }, {
            key: "updatePayNowButton",
            value: function () {
                var e = this.packageModel.get("total"),
                    t = this.element.querySelector("#sterlingts-pay-now");
                (0, r.default)(e) ? t.disabled = !0: (t.disabled = !1, t.value = "Pay $" + e + " Now")
            }
        }, {
            key: "renderPurchaseDetails",
            value: function () {
                var e = this.element.querySelector("#sterlingts-purchase-details-top"),
                    t = this.element.querySelector("#sterlingts-purchase-details-side");
                this.purchaseDetailsView = new c.default({
                    topElement: e,
                    sideElement: t,
                    packageModel: this.packageModel
                }), this.purchaseDetailsView.render()
            }
        }, {
            key: "doAllStripeElementsExist",
            value: function () {
                var e = ["number", "cvc", "zip", "exp"],
                    t = !0;
                for (var n in e) {
                    var r = e[n];
                    document.getElementById("sterlingts-cardcollection-" + r) || (t = !1)
                }
                return t
            }
        }, {
            key: "getSterlingElement",
            value: function (e) {
                return document.getElementById("sterlingts-cardcollection-" + e)
            }
        }, {
            key: "renderStripe",
            value: function () {
                var e = this,
                    t = new a.default({
                        elements: {
                            form: this.getSterlingElement("form"),
                            number: this.getSterlingElement("number"),
                            cvc: this.getSterlingElement("cvc"),
                            zip: this.getSterlingElement("zip"),
                            exp: this.getSterlingElement("exp")
                        }
                    });
                t.on("ready", function (t) {
                    e.trigger("ready", t)
                }, this), t.on("complete", function (t) {
                    t.price = e.packageModel.get("total"), e.trigger("complete", t)
                }, this), t.render()
            }
        }]), t
    }();
    t.default = d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        STRIPE_PUBLIC_API_KEY: "pk_test_SohNapxPJeeY56Z0eMtGrehw",
        IMG_PATH: "https://js.api.dev.sterlingts.com/static/img"
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
        return e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e, t, n) {
        var s = void 0;
        switch (e) {
            case r.default.CREATE_SCREENING_WITH_APPLICANT_PAY:
                (s = new a.default(t, n)).addController(o.default, "token"), s.addController(i.default, "screening");
                break;
            default:
                throw Error("Invalid Workflow Type")
        }
        return s
    };
    var r = s(n(17)),
        o = s(n(16)),
        i = s(n(22)),
        a = s(n(7));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = l(n(17)),
        o = l(n(58)),
        i = l(n(7)),
        a = l(n(16)),
        s = l(n(4));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    window.sterlingts = {
            payment: {
                CardCollection: a.default
            },
            workflow: {
                GetWorkflow: o.default,
                WorkflowType: r.default,
                Workflow: i.default
            },
            Config: s.default
        },
        function (e) {
            var t, n, r = (document.currentScript || window.currentScript).src,
                o = void 0;
            if (-1 === r.indexOf("?")) throw Error("No Callback given");
            if (-1 === (t = r.indexOf("callback="))) throw Error("No Callback given");
            var i = t + "callback=".length;
            if (o = (n = r.indexOf("&", i)) >= 0 ? r.substring(i, n) : r.substring(i), void 0 === window[o]) throw Error("No function called '" + o + "' exists");
            window[o]()
        }()
}, function (module, exports) {
    module.exports = function (obj) {
        var __t, __p = "",
            __j = Array.prototype.join,
            print = function () {
                __p += __j.call(arguments, "")
            };
        with(obj || {}) __p += '<div id="sterlingts-spinner">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n</div>\n';
        return __p
    }
}, function (e, t, n) {
    (e.exports = n(13)(!1)).push([e.i, "#sterlingts-spinner {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n}\n#sterlingts-spinner div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 51px;\n    height: 51px;\n    margin: 6px;\n    border: 6px solid #0067B9;\n    border-radius: 50%;\n    animation: sterlingts-spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #0067B9 transparent transparent transparent;\n}\n#sterlingts-spinner div:nth-child(1) {\n    animation-delay: -0.45s;\n}\n#sterlingts-spinner div:nth-child(2) {\n    animation-delay: -0.3s;\n}\n#sterlingts-spinner div:nth-child(3) {\n    animation-delay: -0.15s;\n}\n@keyframes sterlingts-spinner {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n", ""])
}]);