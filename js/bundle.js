! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 0)
}([function(e, t, i) {
    "use strict";
    i.r(t);
    i(1), i(2), i(3), i(4), i(5), i(6), i(7), i(8)
}, function(e, t) {
    function i(e, t) {
        for (var i = 0, n = e.length; i < n && i !== n; i++) t(e[i], i)
    }
    new class {
        constructor(e, t) {
            var n, o;
            this.opts = (n = {
                moreButton: '+ More',
                classMore: "item-menu-more",
                classMoreChild: "sub-menu-more sub-menu"
            }, "object" == typeof(o = t) && i(Object.keys(o), e => {
                n[e] = o[e]
            }), n), this.els = document.querySelectorAll(e), this.create(this.els)
        }
        create(e) {
            i(e, e => {
                e.style.display = "inline-block", this.addMore(e), this.responsive(e)
            })
        }
        addMore(e) {
            const {
                opts: t
            } = this;
            let i = `\n            
\n                ${t.moreButton}\n                

\n            
\n        `; - 1 === e.innerHTML.indexOf(t.moreButton) && e.insertAdjacentHTML("beforeend", i)
        }
        responsive(e) {
            const t = e.children[e.children.length - 1],
                i = t.lastElementChild;
            let n = e.offsetWidth,
                o = t.offsetWidth,
                r = 0;
            t.style.display = "none", t.firstElementChild.addEventListener("click", e => {
                e.stopPropagation(), e.preventDefault()
            });
            const s = document.createEvent("Event");
            s.initEvent("eventResize", !0, !0), e.addEventListener("eventResize", () => {
                let s = window.innerWidth,
                    l = e.offsetWidth,
                    a = e.parentNode.offsetWidth;
                if (s > r) l + 100 <= a && "" !== i.innerHTML && e.insertBefore(i.firstChild, e.childNodes[e.childNodes.length - 2]), n + 100 + 10 <= a + o && (t.style.display = "none");
                else {
                    let r = e.children[e.children.length - 2];
                    l + 100 > a && void 0 !== r && i.insertBefore(r, i.firstChild), n + 100 + 10 > a + o && (t.style.display = "inline-block")
                }
                r = s
            });
            const l = setInterval(() => {
                e.offsetWidth + 100 > e.parentNode.offsetWidth ? e.dispatchEvent(s) : clearTimeout(l)
            }, 5);
            window.addEventListener("resize", () => {
                e.dispatchEvent(s)
            })
        }
    }(".nav-list", {
        moreButton: '+ More',
        classMore: "item-menu-more",
        classMoreChild: "sub-menu-more sub-menu"
    })
}, function(e, t) {
    new Vue({
        el: "#app",
        data: {
            portafolio: [{
                url: "static/img/image-big.png",
                type: "slider",
                caption: "Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis, quisque."
            }, {
                url: "static/img/image-big2.png",
                type: "slider",
                caption: "Aliquam eleifend habitant, ac lectus porta est semper suscipit proin."
            }, {
                url: "static/img/image-big3.jpg",
                type: "slider",
                caption: "Feugiat tortor vel dignissim phasellus ultrices, iaculis quam consequat."
            }, {
                url: "static/img/image-big.png",
                type: "slider",
                caption: "Elementum et vitae diam senectus curae aptent nunc velit semper."
            }, {
                url: "static/img/image-big2.png",
                type: "slider",
                caption: "Metus posuere congue inceptos est, integer leo nec a tincidunt."
            }]
        }
    })
}, function(e, t, i) {}, function(e, t, i) {
    e.exports = i.p + "static/img/image-big.png"
}, function(e, t, i) {
    e.exports = i.p + "static/img/image-big2.png"
}, function(e, t, i) {
    e.exports = i.p + "static/img/image-big3.jpg"
}, function(e, t, i) {
    e.exports = i.p + "static/img/phone.png"
}, function(e, t, i) {
    e.exports = i.p + "static/img/logo.png"
}]);