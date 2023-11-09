(function () {
  if (
    typeof __ez === "undefined" ||
    typeof __ez.queue === "undefined" ||
    typeof __ez.queue.markLoaded !== "function"
  ) {
    return;
  }
  __ez.queue.markLoaded("/tacoma/fastdom.js");
  __ez.queue.markLoaded("/tardisrocinante/vitals.js");
  __ez.queue.markLoaded("/detroitchicago/memphis.js");
  __ez.queue.markLoaded("/tacoma/riveted.js");
  __ez.queue.markLoaded("/detroitchicago/edmonton.webp");
  __ez.queue.markLoaded("/detroitchicago/audins.js");
  __ez.queue.markLoaded("/detroitchicago/rochester.js");
  __ez.queue.markLoaded("/tardisrocinante/screx.js");
  __ez.queue.markLoaded("/detroitchicago/minneapolis.js");
  __ez.queue.markLoaded("/seattle/required_functions.js");
  __ez.queue.markLoaded("/detroitchicago/wichita.js");
  __ez.queue.markLoaded("/beardeddragon/drake.js");
  __ez.queue.markLoaded("/detroitchicago/boise.js");
  __ez.queue.markLoaded("/seattle/ux.js");
  __ez.queue.markLoaded("/detroitchicago/tulsa.js");
})();
__ez.bit = (function () {
  var e = [];
  function i(i, t) {
    __ez.dot.isDefined(i) &&
      __ez.dot.isValid(t) &&
      e.push({
        type: "pageview",
        pageview_id: i,
        domain_id: __ez.dot.getDID(),
        t_epoch: __ez.dot.getEpoch(0),
        data: __ez.dot.dataToStr(t),
      });
  }
  function t() {
    if (
      void 0 === document.visibilityState ||
      "prerender" !== document.visibilityState
    ) {
      if (__ez.dot.isDefined(e) && e.length > 0)
        for (; e.length > 0; ) {
          var i = 5;
          i > e.length && (i = e.length);
          var t = e.splice(0, i),
            d =
              __ez.dot.getURL("/detroitchicago/greenoaks.gif") +
              "?orig=" +
              (!0 === __ez.template.isOrig ? 1 : 0) +
              "&ds=" +
              btoa(JSON.stringify(t));
          void 0 !== window.ezWp &&
            ezWp &&
            "undefined" != typeof _ezaq &&
            _ezaq.hasOwnProperty("visit_uuid") &&
            (d += "&visit_uuid=" + +_ezaq.visit_uuid),
            __ez.dot.Fire(d);
        }
      e = [];
    }
  }
  return {
    Add: i,
    AddAndFire: function (e, d) {
      i(e, d), t();
    },
    Fire: t,
  };
})();
function ez_attachEvent(element, evt, func) {
  if (element.addEventListener) {
    element.addEventListener(evt, func, false);
  } else {
    element.attachEvent("on" + evt, func);
  }
}
function ez_attachEventWithCapture(element, evt, func, useCapture) {
  if (element.addEventListener) {
    element.addEventListener(evt, func, useCapture);
  } else {
    element.attachEvent("on" + evt, func);
  }
}
function ez_detachEvent(element, evt, func) {
  if (element.removeEventListener) {
    element.removeEventListener(evt, func);
  } else {
    element.detachEvent("on" + evt, func);
  }
}
function ez_getQueryString(field, url) {
  var href = url ? url : window.location.href;
  var reg = new RegExp("[?&]" + field + "=([^&#]*)", "i");
  var string = reg.exec(href);
  return string ? string[1] : null;
}
!(function () {
  function e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  (window.__ezDotData = function (e, t) {
    "string" != typeof e && 2 == e.length && ((t = e[1]), (e = e[0])),
      (this.name = e),
      (this.val = t);
  }),
    (__ez.dot.b64 = {
      keyStr:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          d,
          f = "",
          u = 0;
        for (e = Base64._utf8_encode(e); u < e.length; )
          (o = (t = e.charCodeAt(u++)) >> 2),
            (i = ((3 & t) << 4) | ((n = e.charCodeAt(u++)) >> 4)),
            (a = ((15 & n) << 2) | ((r = e.charCodeAt(u++)) >> 6)),
            (d = 63 & r),
            isNaN(n) ? (a = d = 64) : isNaN(r) && (d = 64),
            (f =
              f +
              this._keyStr.charAt(o) +
              this._keyStr.charAt(i) +
              this._keyStr.charAt(a) +
              this._keyStr.charAt(d));
        return f;
      },
      decode: function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          d = "",
          f = 0;
        for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); f < e.length; )
          (t =
            (this._keyStr.indexOf(e.charAt(f++)) << 2) |
            ((o = this._keyStr.indexOf(e.charAt(f++))) >> 4)),
            (n =
              ((15 & o) << 4) |
              ((i = this._keyStr.indexOf(e.charAt(f++))) >> 2)),
            (r = ((3 & i) << 6) | (a = this._keyStr.indexOf(e.charAt(f++)))),
            (d += String.fromCharCode(t)),
            64 != i && (d += String.fromCharCode(n)),
            64 != a && (d += String.fromCharCode(r));
        return Base64._utf8_decode(d);
      },
      _utf8_encode: function (e) {
        e = e.replace(/rn/g, "n");
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? (t += String.fromCharCode(r))
            : r > 127 && r < 2048
            ? ((t += String.fromCharCode((r >> 6) | 192)),
              (t += String.fromCharCode((63 & r) | 128)))
            : ((t += String.fromCharCode((r >> 12) | 224)),
              (t += String.fromCharCode(((r >> 6) & 63) | 128)),
              (t += String.fromCharCode((63 & r) | 128)));
        }
        return t;
      },
      _utf8_decode: function (e) {
        for (var t = "", n = 0, r = (c1 = c2 = 0); n < e.length; )
          (r = e.charCodeAt(n)) < 128
            ? ((t += String.fromCharCode(r)), n++)
            : r > 191 && r < 224
            ? ((c2 = e.charCodeAt(n + 1)),
              (t += String.fromCharCode(((31 & r) << 6) | (63 & c2))),
              (n += 2))
            : ((c2 = e.charCodeAt(n + 1)),
              (c3 = e.charCodeAt(n + 2)),
              (t += String.fromCharCode(
                ((15 & r) << 12) | ((63 & c2) << 6) | (63 & c3)
              )),
              (n += 3));
        return t;
      },
    }),
    (__ez.dot.dataToStr = function (e) {
      if (void 0 === e) return [];
      try {
        for (var t in e) e[t].val = e[t].val + "";
      } catch (e) {}
      return e;
    }),
    (__ez.dot.getCC = function () {
      var e = "XX";
      return (
        "undefined" != typeof _ezaq &&
          _ezaq.hasOwnProperty("country") &&
          (e = _ezaq.country),
        e
      );
    }),
    (__ez.dot.getDID = function () {
      var e = "0";
      return (
        "undefined" != typeof _ezaq &&
          _ezaq.hasOwnProperty("domain_id") &&
          (e = _ezaq.domain_id.toString()),
        e
      );
    }),
    (__ez.dot.getEpoch = function (e) {
      return (
        "undefined" != typeof _ezaq &&
          _ezaq.hasOwnProperty("t_epoch") &&
          (e = _ezaq.t_epoch),
        e
      );
    }),
    (__ez.dot.getPageviewId = function () {
      var e = "";
      return (
        "undefined" != typeof _ezaq &&
          _ezaq.hasOwnProperty("page_view_id") &&
          (e = _ezaq.page_view_id),
        e
      );
    }),
    (__ez.dot.getURL = function (e) {
      return (
        (("undefined" != typeof ezJsu && 1 == ezJsu) ||
          ("undefined" != typeof _ez_sa && 1 == _ez_sa) ||
          ("undefined" != typeof isAmp && !0 === isAmp) ||
          ("undefined" != typeof ezWp && !0 === ezWp) ||
          ("undefined" != typeof _ez_send_requests_through_ezoic &&
            !0 === _ez_send_requests_through_ezoic)) &&
          (e = "//g.ezoic.net" + e),
        e
      );
    }),
    (__ez.dot.isValid = function (e) {
      for (var t = 0; t < e.length; t++)
        if (e[t] instanceof __ezDotData == 0)
          return console.error("Invalid data. ", e[t]), !1;
      return !0;
    }),
    (__ez.dot.isDefined = function () {
      for (var e = 0; e < arguments.length; e++)
        if (null == arguments[e])
          return console.error("Argument not defined. ", arguments), !1;
      return !0;
    }),
    (__ez.dot.isAnyDefined = function () {
      for (var e = !1, t = 0; t < arguments.length; t++)
        null != arguments[t] && (e = !0);
      return (
        0 == e &&
          console.error("isAnyDefined Arguments not defined. ", arguments),
        e
      );
    }),
    (__ez.dot.getSlotIID = function (e) {
      var t = "0";
      try {
        var n = __ez.dot.getTargetingMap(e);
        if (
          -1 === __ez.dot.getElementId(e).indexOf("div-gpt-ad") &&
          void 0 !== n.ap[0] &&
          9999 != n.ap[0]
        )
          return t;
        if (void 0 !== n)
          for (var r in n)
            if (-1 !== r.indexOf("iid") && void 0 !== n[r][0]) {
              t = n[r][0];
              break;
            }
      } catch (e) {}
      return t;
    }),
    (__ez.dot.getElementId = function (e) {
      var t = "";
      if (
        ("string" !=
          typeof (t =
            void 0 !== e.ElementId ? e.ElementId : e.getSlotElementId()) &&
          (t = ""),
        -1 !== t.indexOf("gpt_unit_") &&
          ((parts = t.split("/")), parts.length > 2))
      ) {
        var n = (t = parts[2]).lastIndexOf("_"),
          r = parseInt(t.substring(n + 1));
        isNaN(r) || (t = t.substring(0, n));
      }
      return t;
    }),
    (__ez.dot.getAdUnitPath = function (e) {
      return void 0 !== e.AdUnitPath ? e.AdUnitPath : e.getAdUnitPath();
    }),
    (__ez.dot.getSizes = function (e) {
      return void 0 !== e.Sizes ? e.Sizes : e.getSizes();
    }),
    (__ez.dot.getTargeting = function (e, t) {
      return void 0 !== e.Targeting ? e.Targeting[t] : e.getTargeting(t)[0];
    }),
    (__ez.dot.getTargetingMap = function (t) {
      if (void 0 !== t.Targeting) return t.Targeting;
      var n = t.getTargetingMap();
      if (
        "undefined" != typeof Symbol &&
        Symbol &&
        Symbol.toStringTag &&
        "Map Iterator" === n[Symbol.toStringTag]
      ) {
        var r,
          o = {},
          i = (function (t, n) {
            var r =
              ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
            if (!r) {
              if (
                Array.isArray(t) ||
                (r = (function (t, n) {
                  if (t) {
                    if ("string" == typeof t) return e(t, n);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === r &&
                        t.constructor &&
                        (r = t.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(t)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? e(t, n)
                        : void 0
                    );
                  }
                })(t)) ||
                (n && t && "number" == typeof t.length)
              ) {
                r && (t = r);
                var o = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return o >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[o++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var a,
              d = !0,
              f = !1;
            return {
              s: function () {
                r = r.call(t);
              },
              n: function () {
                var e = r.next();
                return (d = e.done), e;
              },
              e: function (e) {
                (f = !0), (a = e);
              },
              f: function () {
                try {
                  d || null == r.return || r.return();
                } finally {
                  if (f) throw a;
                }
              },
            };
          })(n);
        try {
          for (i.s(); !(r = i.n()).done; ) {
            var a = r.value;
            o[a] = t.getTargeting(a);
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return o;
      }
      return n;
    }),
    (__ez.dot.getAdUnit = function (e, t) {
      return !0 === __ez.template.isOrig || t
        ? __ez.dot.getAdUnitPath(e).split("/").pop() +
            "|~ez~|" +
            __ez.dot.getElementId(e)
        : __ez.dot.getElementId(e);
    }),
    (__ez.dot.Fire = function (e) {
      if (
        "undefined" == typeof navigator ||
        "function" != typeof navigator.sendBeacon
      ) {
        var t = new XMLHttpRequest();
        t.open("GET", e, !0), t.send();
      } else navigator.sendBeacon(e);
    });
})();
!(function () {
  function e(i) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(i)
    );
  }
  __ez.pel = (function () {
    var i = [];
    function t(t, o, d, _, n, r, a, s) {
      if (
        __ez.dot.isDefined(t) &&
        0 != __ez.dot.isAnyDefined(t.getSlotElementId, t.ElementId)
      ) {
        void 0 === s && (s = !1);
        var p = parseInt(__ez.dot.getTargeting(t, "ap")),
          f = __ez.dot.getSlotIID(t),
          u = __ez.dot.getAdUnit(t, s),
          z = parseInt(__ez.dot.getTargeting(t, "compid")),
          g = 0,
          c = 0,
          l = (function (i) {
            if ("undefined" == typeof _ezim_d) return !1;
            var t = __ez.dot.getAdUnitPath(i).split("/").pop();
            if (
              "object" ===
                ("undefined" == typeof _ezim_d ? "undefined" : e(_ezim_d)) &&
              _ezim_d.hasOwnProperty(t)
            )
              return _ezim_d[t];
            for (var o in _ezim_d)
              if (o.split("/").pop() === t) return _ezim_d[o];
            return !1;
          })(t);
        "object" == e(l) &&
          (void 0 !== l.creative_id && (c = l.creative_id),
          void 0 !== l.line_item_id && (g = l.line_item_id)),
          __ez.dot.isDefined(f, u) &&
            __ez.dot.isValid(o) &&
            (("0" === f && !0 !== s) ||
              "" === u ||
              i.push({
                type: "impression",
                impression_id: f,
                domain_id: __ez.dot.getDID(),
                unit: u,
                t_epoch: __ez.dot.getEpoch(0),
                revenue: d,
                est_revenue: _,
                ad_position: p,
                ad_size: "",
                bid_floor_filled: n,
                bid_floor_prev: r,
                stat_source_id: a,
                country_code: __ez.dot.getCC(),
                pageview_id: __ez.dot.getPageviewId(),
                comp_id: z,
                line_item_id: g,
                creative_id: c,
                data: __ez.dot.dataToStr(o),
                is_orig: s || __ez.template.isOrig,
              }));
      }
    }
    function o() {
      (void 0 !== document.visibilityState &&
        "prerender" === document.visibilityState) ||
        (__ez.dot.isDefined(i) &&
          i.length > 0 &&
          [
            i.filter(function (e) {
              return e.is_orig;
            }),
            i.filter(function (e) {
              return !e.is_orig;
            }),
          ].forEach(function (e) {
            for (; e.length > 0; ) {
              var i = e[0].is_orig || !1,
                t = 5;
              t > e.length && (t = e.length);
              var o = e.splice(0, t),
                d =
                  __ez.dot.getURL("/porpoiseant/army.gif") +
                  "?orig=" +
                  (!0 === i ? 1 : 0) +
                  "&sts=" +
                  btoa(JSON.stringify(o));
              ((void 0 !== window.isAmp && isAmp) ||
                (void 0 !== window.ezWp && ezWp)) &&
                void 0 !== window._ezaq &&
                _ezaq.hasOwnProperty("domain_id") &&
                (d += "&visit_uuid=" + _ezaq.visit_uuid),
                __ez.dot.Fire(d);
            }
          }),
        (i = []));
    }
    return {
      Add: t,
      AddAndFire: function (e, i) {
        t(e, i, 0, 0, 0, 0, 0), o();
      },
      AddAndFireOrig: function (e, i) {
        t(e, i, 0, 0, 0, 0, 0, !0), o();
      },
      AddById: function (e, t, o, d) {
        var _ = e.split("/");
        if (__ez.dot.isDefined(e) && 3 === _.length && __ez.dot.isValid(t)) {
          var n = _[0],
            r = {
              type: "impression",
              impression_id: _[2],
              domain_id: __ez.dot.getDID(),
              unit: n,
              t_epoch: __ez.dot.getEpoch(0),
              pageview_id: __ez.dot.getPageviewId(),
              data: __ez.dot.dataToStr(t),
              is_orig: o || __ez.template.isOrig,
            };
          void 0 !== d && (r.revenue = d), i.push(r);
        }
      },
      Fire: o,
      GetPixels: function () {
        return i;
      },
    };
  })();
})();
(__ez.ck.get = function (e, o) {
  null !== o && (e = e + "_" + o);
  for (
    var n = e + "=", t = decodeURIComponent(document.cookie).split(";"), i = 0;
    i < t.length;
    i++
  ) {
    for (var c = t[i]; " " === c.charAt(0); ) c = c.substring(1);
    if (0 === c.indexOf(n)) return c.substring(n.length, c.length);
  }
  return "";
}),
  (__ez.ck.setByCat = function (e, o) {
    if (
      ("https:" === location.protocol && (e += "; Secure; SameSite=Lax;"),
      -1 === e.indexOf("path=") && (e += "; path=/"),
      "undefined" != typeof cmpIsOn)
    ) {
      if (null != o) {
        var n = __ez.ck.get("ezCMPCookieConsent", null);
        -1 !== (n = n.substring(1, n.length)).indexOf(o + "=1")
          ? (document.cookie = e)
          : "" === n &&
            "undefined" != typeof cmpCookies &&
            (void 0 === cmpCookies[o] && (cmpCookies[o] = []),
            cmpCookies[o].push(e));
      }
    } else document.cookie = e;
  });
!(function (win) {
  "use strict";
  var raf =
    win.requestAnimationFrame ||
    win.webkitRequestAnimationFrame ||
    win.mozRequestAnimationFrame ||
    win.msRequestAnimationFrame ||
    function (cb) {
      return setTimeout(cb, 16);
    };
  var reg = new RegExp("[?&]ezfd=([^&#]*)", "i");
  var str = reg.exec(window.location.href);
  var res = str ? str[1] : null;
  function FastDOM() {
    var self = this;
    self.reads = [];
    self.writes = [];
    self.raf = raf.bind(win);
    log("initialized", self);
  }
  FastDOM.prototype = {
    constructor: FastDOM,
    runTasks: function (tasks) {
      log("run tasks");
      var task;
      while ((task = tasks.shift())) task();
    },
    measure: function (fn, ctx) {
      log("measure");
      var task = !ctx ? fn : fn.bind(ctx);
      this.reads.push(task);
      scheduleFlush(this);
      return task;
    },
    mutate: function (fn, ctx) {
      log("mutate");
      var task = !ctx ? fn : fn.bind(ctx);
      this.writes.push(task);
      scheduleFlush(this);
      return task;
    },
    clear: function (task) {
      log("clear", task);
      return remove(this.reads, task) || remove(this.writes, task);
    },
    extend: function (props) {
      log("extend", props);
      if (typeof props != "object") throw new Error("expected object");
      var child = Object.create(this);
      mixin(child, props);
      child.fastdom = this;
      if (child.initialize) child.initialize();
      return child;
    },
    catch: null,
  };
  function scheduleFlush(fastdom) {
    if (!fastdom.scheduled) {
      fastdom.scheduled = true;
      fastdom.raf(flush.bind(null, fastdom));
      log("flush scheduled");
    }
  }
  function flush(fastdom) {
    log("flush");
    var writes = fastdom.writes;
    var reads = fastdom.reads;
    var error;
    try {
      log("flushing reads", reads.length);
      fastdom.runTasks(reads);
      log("flushing writes", writes.length);
      fastdom.runTasks(writes);
    } catch (e) {
      error = e;
    }
    fastdom.scheduled = false;
    if (reads.length || writes.length) scheduleFlush(fastdom);
    if (error) {
      log("task errored", error.message);
      if (fastdom.catch) fastdom.catch(error);
      else throw error;
    }
  }
  function remove(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
  }
  function mixin(target, source) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) target[key] = source[key];
    }
  }
  function log() {
    if (res === "1") console.log.apply(null, arguments);
  }
  var exports = (win._ezfd = win._ezfd || new FastDOM());
  if (typeof define == "function")
    define("_ezfd", function () {
      return exports;
    });
  else if (typeof module == "object") module.exports = exports;
})(typeof window !== "undefined" ? window : this);
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define("ezRiveted", [], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.riveted = factory();
  }
})(this, function () {
  var riveted = (function () {
    var started = false,
      stopped = false,
      turnedOff = false,
      clockTime = 0,
      startTime = new Date(),
      clockTimer = null,
      idleTimer = null,
      sendEvent,
      sendUserTiming,
      reportInterval,
      scrollDepth = 0,
      idleTimeout,
      scrollTimer = 0;
    function init(options) {
      options = options || {};
      reportInterval = parseInt(options.reportInterval, 10) || 5;
      idleTimeout = parseInt(options.idleTimeout, 10) || 30;
      if (typeof options.eventHandler == "function") {
        sendEvent = options.eventHandler;
      }
      if (typeof options.userTimingHandler == "function") {
        sendUserTiming = options.userTimingHandler;
      }
      addListener(document, "keydown", trigger);
      addListener(document, "click", trigger);
      addListener(document, "touchstart", trigger);
      addListener(window, "mousemove", throttle(trigger, 500));
      addListener(window, "scroll", triggerScroll);
      addListener(document, "visibilitychange", visibilityChange);
      addListener(document, "webkitvisibilitychange", visibilityChange);
    }
    function triggerScroll() {
      if (scrollTimer > 0) {
        clearTimeout(scrollTimer);
      }
      setIdle();
      scrollTimer = setTimeout(function () {
        stopScroll();
      }, 50);
    }
    function stopScroll() {
      clearTimeout(scrollTimer);
      trigger();
      setScrollDepth();
    }
    function setScrollDepth() {
      window._ezfd.measure(function () {
        var h = document.documentElement,
          b = document.body,
          st = "scrollTop",
          sh = "scrollHeight";
        var percent = 0;
        if (b.clientHeight < h.clientHeight) {
          percent =
            (100 * ((h[st] || b[st]) + b.clientHeight)) / (h[sh] || b[sh]);
        } else {
          percent =
            (100 * ((h[st] || b[st]) + h.clientHeight)) / (h[sh] || b[sh]);
        }
        if (percent > scrollDepth) {
          scrollDepth = percent;
        }
      });
    }
    function throttle(func, wait) {
      var context, args, result;
      var timeout = null;
      var previous = 0;
      var later = function () {
        previous = new Date();
        timeout = null;
        result = func.apply(context, args);
      };
      return function () {
        var now = new Date();
        if (!previous) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
          clearTimeout(timeout);
          timeout = null;
          previous = now;
          result = func.apply(context, args);
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    }
    function addListener(element, eventName, handler) {
      if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, handler);
      } else {
        element["on" + eventName] = handler;
      }
    }
    sendUserTiming = function (timingValue) {};
    sendEvent = function (time) {};
    function setIdle() {
      clearTimeout(idleTimer);
      stopClock();
    }
    function visibilityChange() {
      if (document.hidden || document.webkitHidden) {
        setIdle();
      }
    }
    function clock() {
      clockTime += 0.1;
      clockTime = Math.round(clockTime * 100) / 100;
      if (clockTime > 0 && clockTime % reportInterval === 0) {
        sendEvent(clockTime);
      }
    }
    function stopClock() {
      stopped = true;
      clearInterval(clockTimer);
    }
    function turnOff() {
      setIdle();
      turnedOff = true;
    }
    function turnOn() {
      turnedOff = false;
    }
    function restartClock() {
      stopped = false;
      clearInterval(clockTimer);
      clockTimer = setInterval(clock, 100);
    }
    function getEngagedTime() {
      return Math.round(clockTime);
    }
    function getScrollDepth() {
      return Math.round(scrollDepth);
    }
    function startRiveted() {
      var currentTime = new Date();
      var diff = currentTime - startTime;
      started = true;
      sendUserTiming(diff);
      clockTimer = setInterval(clock, 1000);
    }
    function resetRiveted() {
      startTime = new Date();
      clockTime = 0;
      started = false;
      stopped = false;
      clearInterval(clockTimer);
      clearTimeout(idleTimer);
    }
    function trigger() {
      if (turnedOff) {
        return;
      }
      if (!started) {
        startRiveted();
      }
      if (stopped) {
        restartClock();
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(setIdle, idleTimeout * 1000 + 100);
    }
    return {
      init: init,
      trigger: trigger,
      setIdle: setIdle,
      on: turnOn,
      off: turnOff,
      reset: resetRiveted,
      getTime: getEngagedTime,
      getScrollDepth: getScrollDepth,
    };
  })();
  return riveted;
});
var ezux = (function () {
  if (typeof _ezaq === "undefined" || !_ezaq.hasOwnProperty("page_view_id")) {
    return;
  }
  var storedPerf = false;
  var autoTimer = 0,
    autoUploadMs = 15000,
    debug = ez_getQueryString("ezux_debug") == "1",
    counts = { copyPaste: 0, shares: 0 },
    last = {
      copyPasteCount: 0,
      engagedTime: 0,
      isEngagedPage: 0,
      scrollDepth: 0,
      unloadTime: 0,
      shareCount: 0,
    },
    current = { et: 0, tos: 0 },
    maxEngagedSeconds = 1800,
    pvID = _ezaq["page_view_id"],
    secondsUntilEngaged = 10,
    startTime = new Date(),
    timer,
    totals = { engagedAdded: 0, tosAdded: 0 },
    unloadedTimeDelayMs = 3000,
    visbilityChangeFunc = null;
  var evts = {
    copyPaste: function () {
      counts.copyPaste++;
    },
    mouseOut: function (e) {
      e = e ? e : window.event;
      if (
        typeof e === "undefined" ||
        typeof e.target === "undefined" ||
        typeof e.target.tagName === "undefined"
      )
        return;
      if (e.target.tagName.toLowerCase() === "input") return;
      var vpWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      if (e.clientX >= vpWidth - 50) return;
      if (e.clientY >= 50) return;
      var from = e.relatedTarget || e.toElement;
      if (!from) evts.unload(e);
    },
    load: function (e) {
      storePerformance();
      addPaintTimings();
      addConnectionInfo();
    },
    unload: function (e) {
      var currentTime = new Date().getTime();
      if (
        last.unloadTime === 0 ||
        currentTime > last.unloadTime + unloadedTimeDelayMs
      ) {
        storeTimes();
        storePerformance();
        pixels.unloadAll(e);
        last.unloadTime = currentTime;
      }
    },
    pageshow: function (e) {
      var cnAwesome = getCookieName("ezoawesome"),
        cvAwesome = getCookie(cnAwesome);
      if (cvAwesome.length > 0) {
        log("Bounce (" + cnAwesome + ") detected with val " + cvAwesome);
        storeAdBounce(cvAwesome);
        expireCookie(cnAwesome);
      }
    },
    pageshare: function (e) {
      counts.shares++;
      pixels.addPageShares();
    },
    addUnloadTime: function (e) {
      pixels.addUnloadTime();
    },
  };
  var pixels = {
    addCopyPaste: function () {
      if (counts.copyPaste > 0 && counts.copyPaste != last.copyPasteCount) {
        __ez.bit.Add(pvID, [
          new __ezDotData("copy_paste_count", counts.copyPaste),
        ]);
        last.copyPasteCount = counts.copyPaste;
      }
    },
    addDeviceSizes: function () {
      log("Storing device sizes");
      __ez.bit.Add(pvID, [
        new __ezDotData("device_width", screen.width),
        new __ezDotData("device_height", screen.height),
      ]);
    },
    addEngagedTimes: function (t) {
      if (t != last.engagedTime) {
        __ez.bit.Add(pvID, [new __ezDotData("engaged_time", t)]);
        last.engagedTime = t;
      }
    },
    addIsEngagedPage: function (t) {
      if (last.isEngagedPage == 0 && isEngagedPage(t)) {
        __ez.bit.Add(pvID, [new __ezDotData("is_engaged_page", 1)]);
        last.isEngagedPage = 1;
      }
    },
    addIsFirstEngagedPage: function (t) {
      var ckName = getCookieName("ezux_ifep");
      if (getCookie(ckName).length == 0 && isEngagedPage(t)) {
        log("Adding first engaged cookie");
        __ez.ck.setByCat(ckName + "=true", 3);
        __ez.bit.Add(pvID, [new __ezDotData("is_first_engaged_page", 1)]);
      }
    },
    addLanguage: function () {
      log("Storing language tag");
      var languageTag =
        window.navigator.userLanguage || window.navigator.language;
      var tagArray = languageTag.split("-");
      if (typeof languageTag !== "undefined" && languageTag !== "") {
        if (languageTag.length > 36) {
          languageTag = languageTag.substring(0, 36);
        }
        __ez.bit.Add(pvID, [new __ezDotData("language_tag", languageTag)]);
      }
      if (tagArray.length >= 2) {
        var primaryLanguageSubtag = tagArray[0];
        if (primaryLanguageSubtag > 8) {
          primaryLanguageSubtag = primaryLanguageSubtag.substring(0, 8);
        }
        __ez.bit.Add(pvID, [
          new __ezDotData("language_primary_subtag", primaryLanguageSubtag),
        ]);
      }
    },
    addLocalTime: function () {
      log("Storing local time");
      var now = new Date();
      var tzOffset = now.getTimezoneOffset();
      if (tzOffset < -840 || tzOffset > 720) {
        return;
      }
      var lDate = new Date(now - tzOffset * 60000);
      if (Math.abs(lDate - now) / 3600000 > 14) {
        return;
      }
      if (!Date.prototype.toISOString) {
        (function () {
          function pad(number) {
            if (number < 10) {
              return "0" + number;
            }
            return number;
          }
          Date.prototype.toISOString = function () {
            return (
              this.getUTCFullYear() +
              "-" +
              pad(this.getUTCMonth() + 1) +
              "-" +
              pad(this.getUTCDate()) +
              "T" +
              pad(this.getUTCHours()) +
              ":" +
              pad(this.getUTCMinutes()) +
              ":" +
              pad(this.getUTCSeconds()) +
              "." +
              (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
              "Z"
            );
          };
        })();
      }
      var localDate = lDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
        .split(" ")[0];
      if (localDate.length < 1 || localDate[0] == "0") {
        return;
      }
      var localHour = now.getHours();
      var localDay = now.getDay();
      __ez.bit.Add(pvID, [
        new __ezDotData("t_local_date", localDate),
        new __ezDotData("t_local_hour", localHour),
        new __ezDotData("t_local_day_of_week", localDay),
        new __ezDotData("t_local_timezone", tzOffset),
      ]);
    },
    addScrollDepth: function () {
      var sd = timer.getScrollDepth();
      if (sd != last.scrollDepth) {
        __ez.bit.Add(pvID, [new __ezDotData("scroll_percent_vertical", sd)]);
        last.scrollDepth = sd;
      }
    },
    addPageShares: function () {
      if (counts.shares > 0 && counts.shares != last.shareCount) {
        log("[Page Share] Store page shares: " + counts.shares);
        __ez.bit.Add(pvID, [new __ezDotData("share", counts.shares)]);
        last.shareCount = counts.shares;
      }
    },
    addUnloadTime: function () {
      __ez.bit.Add(pvID, [new __ezDotData("t_unload", new Date().getTime())]);
      __ez.bit.Fire();
    },
    unloadAll: function (e) {
      var t = timer.getTime();
      pixels.addEngagedTimes(t);
      pixels.addCopyPaste();
      pixels.addScrollDepth();
      pixels.addIsEngagedPage(t);
      pixels.addIsFirstEngagedPage(t);
      pixels.addPageShares();
      log("Unload (" + e.type + ")");
      firePixels();
    },
  };
  function init() {
    initVars();
    pixels.addDeviceSizes();
    pixels.addLocalTime();
    pixels.addLanguage();
    attachListeners();
    startRiveted();
    startAutomaticUnloadTimer();
  }
  function initVars() {
    (autoTimer = 0),
      (autoUploadMs = 15000),
      (debug = ez_getQueryString("ezux_debug") == "1"),
      (counts = { copyPaste: 0, shares: 0 }),
      (last = {
        copyPasteCount: 0,
        engagedTime: 0,
        isEngagedPage: 0,
        scrollDepth: 0,
        unloadTime: 0,
        shareCount: 0,
      }),
      (current = {
        et: getCookie(getCookieName("ezux_et")),
        tos: getCookie(getCookieName("ezux_tos")),
      }),
      (maxEngagedSeconds = 1800),
      (pvID = _ezaq["page_view_id"]),
      (secondsUntilEngaged = 10),
      (startTime = new Date()),
      timer,
      (totals = { engagedAdded: 0, tosAdded: 0 }),
      (unloadedTimeDelayMs = 3000),
      (visbilityChangeFunc = null);
  }
  function destroy() {
    stopAutomaticUnloadTimer();
    removeListeners();
    stopRiveted();
  }
  function addListener(element, eventName, handler) {
    if (element.addEventListener) {
      element.addEventListener(eventName, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + eventName, handler);
    } else {
      element["on" + eventName] = handler;
    }
  }
  function removeListener(element, eventName, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(eventName, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + eventName, handler);
    } else {
      delete element["on" + eventName];
    }
  }
  function attachListeners() {
    addListener(document, "blur", evts.unload);
    addListener(document, "ezPageUnload", evts.unload);
    addListener(document, "copy", evts.copyPaste);
    addListener(document, "cut", evts.copyPaste);
    addListener(document, "mouseout", evts.mouseOut);
    addListener(document, "paste", evts.copyPaste);
    addListener(window, "beforeunload", evts.unload);
    addListener(window, "beforeunload", evts.addUnloadTime);
    addListener(window, "blur", evts.unload);
    addListener(window, "pagehide", evts.unload);
    addListener(window, "unload", evts.unload);
    if (document.readyState === "complete") {
      evts.load();
    } else {
      addListener(window, "load", evts.load);
    }
    addListener(window, "pageshow", evts.pageshow);
    attachPageShareListeners();
    if (document.addEventListener) {
      var visibilityChangeEventInfo = getVisibilityChangeEventInfo();
      visbilityChangeFunc = function (e) {
        if (document[visibilityChangeEventInfo.hiddenPropName]) {
          evts.unload(e);
        } else {
          evts.pageshow(e);
        }
      };
      document.addEventListener(
        visibilityChangeEventInfo.visibilityChangeEventName,
        visbilityChangeFunc,
        false
      );
    } else {
      document.attachEvent("onvisibilitychange", evts.unload);
    }
  }
  function getVisibilityChangeEventInfo() {
    var hiddenPropName, visibilityChangeEventName;
    if (typeof document.hidden !== "undefined") {
      hiddenPropName = "hidden";
      visibilityChangeEventName = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hiddenPropName = "msHidden";
      visibilityChangeEventName = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hiddenPropName = "webkitHidden";
      visibilityChangeEventName = "webkitvisibilitychange";
    }
    return {
      hiddenPropName: hiddenPropName,
      visibilityChangeEventName: visibilityChangeEventName,
    };
  }
  function removeListeners() {
    removeListener(document, "blur", evts.unload);
    removeListener(document, "copy", evts.copyPaste);
    removeListener(document, "cut", evts.copyPaste);
    removeListener(document, "mouseout", evts.mouseOut);
    removeListener(document, "paste", evts.copyPaste);
    removeListener(window, "beforeunload", evts.unload);
    removeListener(window, "beforeunload", evts.addUnloadTime);
    removeListener(window, "blur", evts.unload);
    removeListener(window, "pagehide", evts.unload);
    removeListener(window, "unload", evts.unload);
    removeListener(window, "load", evts.load);
    removeListener(window, "pageshow", evts.pageshow);
    removePageShareListeners();
    if (document.removeEventListener) {
      var visibilityChangeEventInfo = getVisibilityChangeEventInfo();
      document.removeEventListener(
        visibilityChangeEventInfo.visibilityChangeEventName,
        visbilityChangeFunc,
        false
      );
    } else {
      document.detachEvent("onvisibilitychange", evts.unload);
    }
  }
  function attachPageShareListeners() {
    var socialLinks = getSocialLinks();
    if (debug) {
      var links = socialLinks.map(function (elm) {
        return elm.href;
      });
      if (typeof links !== "undefined") {
        log("[Page Share] " + links.join(", "));
      }
    }
    for (var i = 0; i < socialLinks.length; i++) {
      addListener(socialLinks[i], "click", evts.pageshare);
    }
  }
  function removePageShareListeners() {
    var socialLinks = getSocialLinks();
    for (var i = 0; i < socialLinks.length; i++) {
      removeListener(socialLinks[i], "click", evts.pageshare);
    }
  }
  function getSocialLinks() {
    var socialLinks = [];
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="facebook.com/sharer/sharer.php"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="facebook.com/sharer.php"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="facebook.com/share.php"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('div[class*="fb-share-button"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="twitter.com/share"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="twitter.com/intent/tweet"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('iframe[class*="twitter-share-button"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="plus.google.com/share"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll(
        'iframe[src*="apis.google.com/u/0/se/0/_/+1/sharebutton"]'
      )
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="linkedin.com/cws/share"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="linkedin.com/shareArticle"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="pinterest.com/pin/create/button"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll(
        'a[href*="pinterest.com/pin/create/bookmarklet"]'
      )
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="tumblr.com/share/link"]')
    );
    socialLinks.push.apply(
      socialLinks,
      document.querySelectorAll('a[href*="reddit.com/submit"]')
    );
    return socialLinks;
  }
  function expireCookie(cname) {
    log("Deleting " + cname);
    document.cookie =
      cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function getCookieName(cname) {
    return cname + "_" + did;
  }
  function getSecondsOnPage() {
    return (new Date() - startTime) / 1000;
  }
  function firePixels() {
    __ez.bit.Fire();
    __ez.pel.Fire();
  }
  function isEngagedPage(t) {
    return t >= secondsUntilEngaged;
  }
  function log(msg) {
    if (debug) console.info("[UX] " + msg);
  }
  function startRiveted() {
    if (typeof define === "function" && define.amd) {
      require(["ezRiveted"], function (riveted) {
        initializeTimer(riveted);
      });
    } else {
      initializeTimer(riveted);
    }
  }
  function stopRiveted() {
    if (typeof riveted !== "undefined") {
      timer = riveted;
      timer.reset();
    }
  }
  function initializeTimer(riveted) {
    timer = riveted;
    timer.init({
      reportInterval: 5,
      idleTimeout: 30,
      eventHandler: function (dataSeconds) {
        log(
          "Event: " +
            parseInt(dataSeconds) +
            " --- Engaged Time: " +
            parseInt(timer.getTime())
        );
        if (timer.getTime() >= maxEngagedSeconds) {
          log("Turning off timer");
          evts.unload({ type: "max" });
          timer.off();
        }
      },
    });
  }
  function startAutomaticUnloadTimer() {
    autoTimer = setInterval(function () {
      evts.unload({ type: "auto" });
      if (getSecondsOnPage() > maxEngagedSeconds) {
        log("Turning off auto");
        clearInterval(autoTimer);
      }
    }, autoUploadMs);
  }
  function stopAutomaticUnloadTimer() {
    evts.unload({ type: "auto" });
    clearInterval(autoTimer);
  }
  function storePerformance() {
    log("[Performance] Store performance");
    if (storedPerf != true && window.performance) {
      var performanceNavigationTimingEntry =
        performance.getEntriesByType("navigation")[0];
      if (
        performanceNavigationTimingEntry &&
        performanceNavigationTimingEntry.connectEnd > 0
      ) {
        var nav_start = performance.timeOrigin;
        var connect = performanceNavigationTimingEntry.connectEnd;
        var resp_start = performanceNavigationTimingEntry.responseStart;
        var resp_end = performanceNavigationTimingEntry.responseEnd;
        var interactive = performanceNavigationTimingEntry.domInteractive;
        var contloaded =
          performanceNavigationTimingEntry.domContentLoadedEventEnd;
        var complete = performanceNavigationTimingEntry.domComplete;
        if (nav_start > 0 && complete > 0) {
          var navtye_string = performanceNavigationTimingEntry.type;
          var navtype = 0;
          var redirect_count = performanceNavigationTimingEntry.redirectCount;
          switch (navtye_string) {
            case "navigate":
              navtype = 0;
              break;
            case "reload":
              navtype = 1;
              break;
            case "back_forward":
              navtype = 2;
              break;
            case "prerender":
              navtype = 255;
              break;
            default:
              navtype = 255;
              break;
          }
          __ez.bit.Add(pvID, [
            new __ezDotData("navigation_type", navtype),
            new __ezDotData("redirect_count", redirect_count),
          ]);
          perf_vals = {};
          var perf_nav_to_connect = Math.round(connect);
          var perf_connect_to_resp_start = Math.round(resp_start);
          var perf_resp_time = Math.round(resp_end - resp_start);
          var perf_interactive = Math.round(interactive - resp_end);
          var perf_contentloaded = Math.round(contloaded - resp_end);
          var perf_complete = Math.round(complete - resp_end);
          __ez.bit.Add(pvID, [
            new __ezDotData("perf_is_tracked", 1),
            new __ezDotData("perf_nav_to_connect", perf_nav_to_connect),
            new __ezDotData(
              "perf_connect_to_resp_start",
              perf_connect_to_resp_start
            ),
            new __ezDotData("perf_resp_time", perf_resp_time),
            new __ezDotData("perf_interactive", perf_interactive),
            new __ezDotData("perf_contentloaded", perf_contentloaded),
            new __ezDotData("perf_complete", perf_complete),
          ]);
          log("[Performance] perf_nav_to_connect: " + perf_nav_to_connect);
          log(
            "[Performance] perf_connect_to_resp_start: " +
              perf_connect_to_resp_start
          );
          log("[Performance] perf_resp_time: " + perf_resp_time);
          log("[Performance] perf_interactive: " + perf_interactive);
          log("[Performance] perf_contentloaded: " + perf_contentloaded);
          log("[Performance] perf_complete: " + perf_complete);
          storedPerf = true;
        }
      }
    }
  }
  function storeTimes() {
    var ckEt = getCookieName("ezux_et"),
      ckTos = getCookieName("ezux_tos"),
      et = timer.getTime() - totals.engagedAdded,
      tos = getSecondsOnPage() - totals.tosAdded;
    if (et == last.engagedTime) {
      et = 0;
    }
    current.et = parseInt(et) + parseInt(current.et == "" ? 0 : current.et);
    current.tos = parseInt(tos) + parseInt(current.tos == "" ? 0 : current.tos);
    log("[Times] Total Engaged: " + current.et + " (+" + et + ")");
    log("[Times] Total TOS: " + current.tos + " (+" + tos + ")");
    __ez.ck.setByCat(ckEt + "=" + current.et, 3);
    __ez.ck.setByCat(ckTos + "=" + current.tos, 3);
    totals.engagedAdded += et;
    totals.tosAdded += tos;
  }
  function storeAdBounce(cv) {
    var vals = cv.split(" ");
    if (vals.length !== 2) {
      log("Invalid ezoawesome cookie value");
    }
    var impId = vals[0],
      clickTime = vals[1];
    if (isNaN(clickTime)) {
      return;
    }
    var bounceTime = Math.floor((Date.now() - clickTime) / 1000);
    __ez.pel.AddById(impId, [new __ezDotData("click_bounce_time", bounceTime)]);
    log("[Bounce] impId: " + impId);
    log("[Bounce] bounceTime: " + bounceTime);
  }
  function addPaintTimings() {
    if (typeof performance !== "undefined" && performance !== null) {
      var paintTimings = performance.getEntriesByType("paint");
      var fp = paintTimings.find(function (timing) {
        return timing.name === "first-paint";
      });
      var fcp = paintTimings.find(function (timing) {
        return timing.name === "first-contentful-paint";
      });
      if (typeof fp !== "undefined" && fp !== null) {
        var fpTime = Math.round(fp.startTime);
        __ez.bit.Add(pvID, [new __ezDotData("first_paint", fpTime)]);
        log("first_paint: " + fpTime);
      }
      if (typeof fcp !== "undefined" && fcp !== null) {
        var fcpTime = Math.round(fcp.startTime);
        __ez.bit.Add(pvID, [
          new __ezDotData("first_contentful_paint", fcpTime),
        ]);
        log("first_contentful_paint: " + fcpTime);
      }
    }
  }
  function addConnectionInfo() {
    var connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (typeof connection !== "undefined" && connection !== null) {
      var type = connection.effectiveType;
      var downlink = connection.downlink;
      var rtt = connection.rtt;
      if (typeof type !== "undefined" && type !== null) {
        __ez.bit.Add(pvID, [
          new __ezDotData("connection_effective_type", type),
        ]);
        log("connection_effective_type: " + type);
      }
      if (typeof downlink !== "undefined" && downlink !== null) {
        __ez.bit.Add(pvID, [new __ezDotData("connection_downlink", downlink)]);
        log("connection_downlink: " + downlink);
      }
      if (typeof rtt !== "undefined" && rtt !== null) {
        __ez.bit.Add(pvID, [new __ezDotData("connection_rtt", rtt)]);
        log("connection_rtt: " + rtt);
      }
    }
  }
  init();
  return { init: init, destroy: destroy };
})();
!(function () {
  function e() {
    "undefined" != typeof ez_tos_track_count &&
      (ez_last_activity_count = ez_tos_track_count);
  }
  (__ez.analytics = (function () {
    var t = "/detroitchicago/imp.gif",
      n = Date.now(),
      _ = 0,
      o = 0;
    function i() {
      if (
        (void 0 === document.visibilityState ||
          "prerender" != document.visibilityState) &&
        "undefined" != typeof _ezaq
      ) {
        if (void 0 !== _ezaq.pv_event_count && _ezaq.pv_event_count > 0) {
          var e = parseInt((Date.now() - n) / 1e3);
          e - _ > 1800
            ? ((n = Date.now()), (_ = 0))
            : e >= 0 &&
              ((_ = e),
              __ez.bit.AddAndFire(window._ezaq.page_view_id, [
                new __ezDotData("pv_event_count", _ezaq.pv_event_count),
                new __ezDotData("time_on_page_event", e),
              ]),
              o++);
        } else {
          var i =
            t +
            "?e=" +
            encodeURIComponent(JSON.stringify(_ezaq)) +
            ("undefined" != typeof _ezExtraQueries ? _ezExtraQueries : "");
          __ez.dot.Fire(i), o++;
        }
        _ezaq.pv_event_count =
          void 0 === _ezaq.pv_event_count ? 1 : _ezaq.pv_event_count + 1;
      }
    }
    (("undefined" != typeof ezJsu && !0 === ezJsu) ||
      ("undefined" != typeof _ez_sa && !0 === _ez_sa) ||
      (void 0 !== window.isAmp && !0 === window.isAmp) ||
      ("undefined" != typeof ezWp && !0 === ezWp) ||
      ("undefined" != typeof _ez_send_requests_through_ezoic &&
        !0 === _ez_send_requests_through_ezoic)) &&
      (t = "//g.ezoic.net" + t),
      void 0 === window.isAmp && i();
    var a = 0;
    return {
      init: function () {
        var t;
        (window.ez_tos_track_count = 0),
          (window.ez_last_activity_count = 0),
          (t = "00"),
          (a = window.setInterval(function () {
            var e;
            ("undefined" != typeof ezCanEngagePage && !1 === ezCanEngagePage) ||
              ((e = t.split(":").reverse()),
              (t =
                45 == e[0]
                  ? parseInt(e[1]) + 1 + ":00"
                  : (e[1] || "0") + ":" + (parseInt(e[0]) + 15)),
              ez_tos_track_count++,
              ez_tos_track_count > 1 &&
                ez_tos_track_count < ez_last_activity_count + 4 &&
                ez_tos_track_count < 240 &&
                (__ez.analytics.store(),
                -1 === ezoTemplate.indexOf("orig_site") &&
                  -1 === ezoTemplate.indexOf("old_site") &&
                  -1 === ezoTemplate.indexOf("pub_site") &&
                  (window.pageTracker
                    ? pageTracker._trackEvent("Time", "Log", t)
                    : "undefined" != typeof _gaq &&
                      (_gaq.push(["e._trackEvent", "Time", "Log", t]),
                      _gaq.push(["f._trackEvent", "Time", "Log", t])))));
          }, 15e3)),
          __ez.evt.add(window, "scroll", e),
          __ez.evt.add(document, "mousemove", e),
          __ez.evt.add(document, "keyup", e);
      },
      destroy: function () {
        window.clearInterval(a),
          __ez.evt.remove(window, "scroll", e),
          __ez.evt.remove(document, "mousemove", e),
          __ez.evt.remove(document, "keyup", e);
      },
      store: i,
      impressionsStored: function () {
        return o;
      },
    };
  })()),
    __ez.analytics.init();
})();
!(function () {
  var e = {
      536: function (e, t, n) {
        var o, i, r;
        function s(e) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            s(e)
          );
        }
        (window.requestIdleCallback =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
          (window.cancelIdleCallback =
            window.cancelIdleCallback ||
            function (e) {
              clearTimeout(e);
            }),
          ("undefined" != typeof Promise &&
            -1 !== Promise.toString().indexOf("[native code]")) ||
            ((r = function () {
              "use strict";
              function e(e) {
                return "function" == typeof e;
              }
              function t() {
                var e = setTimeout;
                return function () {
                  return e(o, 1);
                };
              }
              function o() {
                for (var e = 0; e < z; e += 2)
                  (0, x[e])(x[e + 1]), (x[e] = void 0), (x[e + 1] = void 0);
                z = 0;
              }
              function i(e, t) {
                var n = this,
                  o = new this.constructor(a);
                void 0 === o[j] && _(o);
                var i = n._state;
                if (i) {
                  var r = arguments[i - 1];
                  E(function () {
                    return h(i, o, r, n._result);
                  });
                } else w(n, o, e, t);
                return o;
              }
              function r(e) {
                if (e && "object" == s(e) && e.constructor === this) return e;
                var t = new this(a);
                return d(t, e), t;
              }
              function a() {}
              function u(t, n, o) {
                n.constructor === t.constructor &&
                o === i &&
                n.constructor.resolve === r
                  ? (function (e, t) {
                      t._state === T
                        ? f(e, t._result)
                        : t._state === I
                        ? l(e, t._result)
                        : w(
                            t,
                            void 0,
                            function (t) {
                              return d(e, t);
                            },
                            function (t) {
                              return l(e, t);
                            }
                          );
                    })(t, n)
                  : void 0 === o
                  ? f(t, n)
                  : e(o)
                  ? (function (e, t, n) {
                      E(function (e) {
                        var o = !1,
                          i = (function (e, t, n, o) {
                            try {
                              e.call(t, n, o);
                            } catch (e) {
                              return e;
                            }
                          })(
                            n,
                            t,
                            function (n) {
                              o || ((o = !0), t !== n ? d(e, n) : f(e, n));
                            },
                            function (t) {
                              o || ((o = !0), l(e, t));
                            },
                            e._label
                          );
                        !o && i && ((o = !0), l(e, i));
                      }, e);
                    })(t, n, o)
                  : f(t, n);
              }
              function d(e, t) {
                if (e === t)
                  l(
                    e,
                    new TypeError("You cannot resolve a promise with itself")
                  );
                else if (
                  (function (e) {
                    var t = s(e);
                    return null !== e && ("object" === t || "function" === t);
                  })(t)
                ) {
                  var n = void 0;
                  try {
                    n = t.then;
                  } catch (t) {
                    return void l(e, t);
                  }
                  u(e, t, n);
                } else f(e, t);
              }
              function c(e) {
                e._onerror && e._onerror(e._result), p(e);
              }
              function f(e, t) {
                e._state === L &&
                  ((e._result = t),
                  (e._state = T),
                  0 !== e._subscribers.length && E(p, e));
              }
              function l(e, t) {
                e._state === L && ((e._state = I), (e._result = t), E(c, e));
              }
              function w(e, t, n, o) {
                var i = e._subscribers,
                  r = i.length;
                (e._onerror = null),
                  (i[r] = t),
                  (i[r + T] = n),
                  (i[r + I] = o),
                  0 === r && e._state && E(p, e);
              }
              function p(e) {
                var t = e._subscribers,
                  n = e._state;
                if (0 !== t.length) {
                  for (
                    var o = void 0, i = void 0, r = e._result, s = 0;
                    s < t.length;
                    s += 3
                  )
                    (o = t[s]), (i = t[s + n]), o ? h(n, o, i, r) : i(r);
                  e._subscribers.length = 0;
                }
              }
              function h(t, n, o, i) {
                var r = e(o),
                  s = void 0,
                  a = void 0,
                  u = !0;
                if (r) {
                  try {
                    s = o(i);
                  } catch (e) {
                    (u = !1), (a = e);
                  }
                  if (n === s)
                    return void l(
                      n,
                      new TypeError(
                        "A promises callback cannot return that same promise."
                      )
                    );
                } else s = i;
                n._state !== L ||
                  (r && u
                    ? d(n, s)
                    : !1 === u
                    ? l(n, a)
                    : t === T
                    ? f(n, s)
                    : t === I && l(n, s));
              }
              function _(e) {
                (e[j] = R++),
                  (e._state = void 0),
                  (e._result = void 0),
                  (e._subscribers = []);
              }
              var v;
              v = Array.isArray
                ? Array.isArray
                : function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  };
              var y,
                m = v,
                z = 0,
                b = void 0,
                g = void 0,
                E = function (e, t) {
                  (x[z] = e),
                    (x[z + 1] = t),
                    2 === (z += 2) && (g ? g(o) : C());
                },
                q = "undefined" != typeof window ? window : void 0,
                A = q || {},
                M = A.MutationObserver || A.WebKitMutationObserver,
                P =
                  "undefined" == typeof self &&
                  "undefined" != typeof process &&
                  "[object process]" === {}.toString.call(process),
                k =
                  "undefined" != typeof Uint8ClampedArray &&
                  "undefined" != typeof importScripts &&
                  "undefined" != typeof MessageChannel,
                x = new Array(1e3),
                C = void 0;
              C = P
                ? function () {
                    return process.nextTick(o);
                  }
                : M
                ? (function () {
                    var e = 0,
                      t = new M(o),
                      n = document.createTextNode("");
                    return (
                      t.observe(n, { characterData: !0 }),
                      function () {
                        n.data = e = ++e % 2;
                      }
                    );
                  })()
                : k
                ? (((y = new MessageChannel()).port1.onmessage = o),
                  function () {
                    return y.port2.postMessage(0);
                  })
                : void 0 === q
                ? (function () {
                    try {
                      var e = Function("return this")().require("vertx");
                      return void 0 !== (b = e.runOnLoop || e.runOnContext)
                        ? function () {
                            b(o);
                          }
                        : t();
                    } catch (e) {
                      return t();
                    }
                  })()
                : t();
              var j = Math.random().toString(36).substring(2),
                L = void 0,
                T = 1,
                I = 2,
                R = 0,
                S = (function () {
                  function e(e, t) {
                    (this._instanceConstructor = e),
                      (this.promise = new e(a)),
                      this.promise[j] || _(this.promise),
                      m(t)
                        ? ((this.length = t.length),
                          (this._remaining = t.length),
                          (this._result = new Array(this.length)),
                          0 === this.length
                            ? f(this.promise, this._result)
                            : ((this.length = this.length || 0),
                              this._enumerate(t),
                              0 === this._remaining &&
                                f(this.promise, this._result)))
                        : l(
                            this.promise,
                            new Error("Array Methods must be provided an Array")
                          );
                  }
                  return (
                    (e.prototype._enumerate = function (e) {
                      for (var t = 0; this._state === L && t < e.length; t++)
                        this._eachEntry(e[t], t);
                    }),
                    (e.prototype._eachEntry = function (e, t) {
                      var n = this._instanceConstructor,
                        o = n.resolve;
                      if (o === r) {
                        var s = void 0,
                          d = void 0,
                          c = !1;
                        try {
                          s = e.then;
                        } catch (e) {
                          (c = !0), (d = e);
                        }
                        if (s === i && e._state !== L)
                          this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof s)
                          this._remaining--, (this._result[t] = e);
                        else if (n === H) {
                          var f = new n(a);
                          c ? l(f, d) : u(f, e, s), this._willSettleAt(f, t);
                        } else
                          this._willSettleAt(
                            new n(function (t) {
                              return t(e);
                            }),
                            t
                          );
                      } else this._willSettleAt(o(e), t);
                    }),
                    (e.prototype._settledAt = function (e, t, n) {
                      var o = this.promise;
                      o._state === L &&
                        (this._remaining--,
                        e === I ? l(o, n) : (this._result[t] = n)),
                        0 === this._remaining && f(o, this._result);
                    }),
                    (e.prototype._willSettleAt = function (e, t) {
                      var n = this;
                      w(
                        e,
                        void 0,
                        function (e) {
                          return n._settledAt(T, t, e);
                        },
                        function (e) {
                          return n._settledAt(I, t, e);
                        }
                      );
                    }),
                    e
                  );
                })(),
                H = (function () {
                  function t(e) {
                    (this[j] = R++),
                      (this._result = this._state = void 0),
                      (this._subscribers = []),
                      a !== e &&
                        ("function" != typeof e &&
                          (function () {
                            throw new TypeError(
                              "You must pass a resolver function as the first argument to the promise constructor"
                            );
                          })(),
                        this instanceof t
                          ? (function (e, t) {
                              try {
                                t(
                                  function (t) {
                                    d(e, t);
                                  },
                                  function (t) {
                                    l(e, t);
                                  }
                                );
                              } catch (t) {
                                l(e, t);
                              }
                            })(this, e)
                          : (function () {
                              throw new TypeError(
                                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                              );
                            })());
                  }
                  return (
                    (t.prototype.catch = function (e) {
                      return this.then(null, e);
                    }),
                    (t.prototype.finally = function (t) {
                      var n = this,
                        o = n.constructor;
                      return e(t)
                        ? n.then(
                            function (e) {
                              return o.resolve(t()).then(function () {
                                return e;
                              });
                            },
                            function (e) {
                              return o.resolve(t()).then(function () {
                                throw e;
                              });
                            }
                          )
                        : n.then(t, t);
                    }),
                    t
                  );
                })();
              return (
                (H.prototype.then = i),
                (H.all = function (e) {
                  return new S(this, e).promise;
                }),
                (H.race = function (e) {
                  var t = this;
                  return new t(
                    m(e)
                      ? function (n, o) {
                          for (var i = e.length, r = 0; r < i; r++)
                            t.resolve(e[r]).then(n, o);
                        }
                      : function (e, t) {
                          return t(
                            new TypeError("You must pass an array to race.")
                          );
                        }
                  );
                }),
                (H.resolve = r),
                (H.reject = function (e) {
                  var t = new this(a);
                  return l(t, e), t;
                }),
                (H._setScheduler = function (e) {
                  g = e;
                }),
                (H._setAsap = function (e) {
                  E = e;
                }),
                (H._asap = E),
                (H.polyfill = function () {
                  var e = void 0;
                  if (void 0 !== n.g) e = n.g;
                  else if ("undefined" != typeof self) e = self;
                  else
                    try {
                      e = Function("return this")();
                    } catch (e) {
                      throw new Error(
                        "polyfill failed because global object is unavailable in this environment"
                      );
                    }
                  var t = e.Promise;
                  if (t) {
                    var o = null;
                    try {
                      o = Object.prototype.toString.call(t.resolve());
                    } catch (e) {}
                    if ("[object Promise]" === o && !t.cast) return;
                  }
                  e.Promise = H;
                }),
                (H.Promise = H),
                H.polyfill(),
                H
              );
            }),
            "object" == s(t)
              ? (e.exports = r())
              : void 0 ===
                  (i = "function" == typeof (o = r) ? o.call(t, n, t, e) : o) ||
                (e.exports = i)),
          (function () {
            function e(e, t) {
              for (var n = [], o = 0; o < e; o++) {
                for (
                  var i = o * (t * Math.random()), r = !0, s = 2;
                  s <= Math.sqrt(i);
                  ++s
                )
                  if (i % s == 0) {
                    r = !1;
                    break;
                  }
                r && n.push(i);
              }
              return n;
            }
            if (
              ("1" == window.ihajsdjhsadhjk &&
                (e(
                  6,
                  new (function () {
                    var e = this;
                    (e.age = 0),
                      setInterval(function () {
                        e.age++;
                      }, 1e3);
                  })()
                ),
                (window.ihajsdjhsadhjk = null),
                (window.doezifk = "1")),
              "1" == window.doezifk &&
                (e(50, 1e9),
                (pointlessComputationsButton.disabled = !1),
                (window.doezifk = null),
                (window.ihajsdjhsadhjk = "1")),
              "function" == typeof window.EzoIvent)
            )
              return !1;
            window.EzoIvent = function (e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: null };
              var n = document.createEvent("EzoIvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
            };
          })(),
          (__ez.nap = Array()),
          (__ez.nap[0] = 0),
          (__ez.nap[1] = 45),
          (__ez.nap[2] = []),
          (__ez.nap[3] = 0),
          (__ez.nap[4] = 1),
          (__ez.nap[5] = []),
          (_findOverlappingQuietPeriods = function (e, t) {
            var n = t.slice(),
              o = e.slice(),
              i = (n.shift(), o.shift(), []);
            if (
              (n.forEach(function (n) {
                o.forEach(function (o) {
                  n.start >= o.start
                    ? o.end >= n.start + 55 &&
                      i.push({
                        cpuQuietPeriod: n,
                        networkQuietPeriod: o,
                        cpuQuietPeriods: t,
                        networkQuietPeriods: e,
                        quietPeriodLength: Math.min(n.duration, o.duration),
                      })
                    : n.end >= o.start + 55 &&
                      i.push({
                        cpuQuietPeriod: n,
                        networkQuietPeriod: o,
                        cpuQuietPeriods: t,
                        networkQuietPeriods: e,
                        quietPeriodLength: Math.min(n.duration, o.duration),
                      });
                });
              }),
              i.length > 0)
            )
              return i;
          });
        var a = 0;
        (_findNetworkQuietPeriods = function (e, t, n) {
          0 == a && (a = t - 1);
          var o = [];
          for (var i in e) {
            var r = e[i];
            r.end < 0 && (r.end = 99),
              o.push({ time: r.start, isStart: !0 }),
              r.end > 0 && o.push({ time: r.end, isStart: !1 });
          }
          o.sort(function (e, t) {
            return e.time - t.time;
          });
          var s = 0,
            u = a,
            d = [];
          return (
            o.forEach(function (e) {
              e.isStart
                ? (s === __ez.nap[4] &&
                    d.push({ start: u, end: e.time, duration: e.time - u }),
                  s++)
                : --s === __ez.nap[4] && (u = e.time);
            }),
            s <= __ez.nap[4] && d.push({ start: u, end: n, duration: n - u }),
            d
          );
        }),
          (function () {
            if (
              void 0 !== window.__ez.ssaf &&
              window.__ez.ssaf.indexOf(19) > -1
            ) {
              var e = window.setInterval;
              window.setInterval = function (t, n) {
                var o = n;
                if ((o < 90 && 56 != o && (o = 90), arguments.length < 3))
                  return e(t, o);
                var i = Array.prototype.slice.call(arguments).slice(2);
                return e(t.bind(window, i), o);
              };
            }
          })(),
          (function () {
            if (
              void 0 !== window.__ez.ssaf &&
              window.__ez.ssaf.indexOf(19) > -1
            ) {
              var e = window.setTimeout;
              window.setTimeout = function (t, n) {
                var o = n;
                if ((o < 90 && (o = 90), arguments.length < 3)) return e(t, o);
                var i = this,
                  r = Array.prototype.slice.call(arguments, 2);
                return e(
                  t instanceof Function
                    ? function () {
                        t.apply(i, r);
                      }
                    : t,
                  o
                );
              };
            }
          })(),
          (function () {
            var e = window.XMLHttpRequest,
              t = e.prototype,
              n = function () {
                var t = new e();
                void 0 !== this.open
                  ? (t.open = this.open)
                  : (this.open = e.open),
                  void 0 !== this.abort
                    ? (t.abort = this.abort)
                    : (this.open = e.open),
                  void 0 !== this.getAllResponseHeaders
                    ? (t.getAllResponseHeaders = this.getAllResponseHeaders)
                    : (this.getAllResponseHeaders = e.getAllResponseHeaders),
                  void 0 !== this.getResponseHeader
                    ? (t.getResponseHeader = this.getResponseHeader)
                    : (this.getResponseHeader = e.getResponseHeader),
                  void 0 !== this.overrideMimeType
                    ? (t.overrideMimeType = this.overrideMimeType)
                    : (this.overrideMimeType = e.overrideMimeType),
                  void 0 !== this.setRequestHeader
                    ? (t.setRequestHeader = this.setRequestHeader)
                    : (this.setRequestHeader = e.setRequestHeader);
                var n = Math.random();
                return (
                  t.addEventListener("loadstart", function (e) {
                    window.ezorqs(e, n);
                  }),
                  t.addEventListener("loadend", function (e) {
                    window.ezorqe(e, n);
                  }),
                  t.addEventListener("error", function (e) {
                    window.ezorqe(e, n);
                  }),
                  t.addEventListener("abort", function (e) {
                    window.ezorqe(e, n);
                  }),
                  t
                );
              };
            for (var o in ((n.prototype = t), e)) n[o] = e[o];
            window.XMLHttpRequest = n;
          })(),
          (window.ezoFetchConst = window.fetch),
          (window.fetch = function (e) {
            var t = Math.random();
            window.ezorqs(e, t);
            var n = this,
              o = arguments;
            return new Promise(function (e, i) {
              window.ezoFetchConst
                .apply(n, o)
                .then(function (n) {
                  window.ezorqe(n, t), e(n);
                })
                .catch(function (e) {
                  window.ezorqe(e, t), i(e);
                });
            });
          }),
          document.addEventListener("DOMContentLoaded", function () {
            if (
              ((window.ezodomstart = Date.now()),
              "requestIdleCallback" in window)
            ) {
              var e = 0;
              window.ezoIint = setInterval(function () {
                window.requestIdleCallback(function (t) {
                  var n = Date.now(),
                    o = t.timeRemaining();
                  if (o < Date.now())
                    if (o > __ez.nap[1]) 0 == e && (e = n);
                    else if (0 != e) {
                      var i = { start: e, end: n - (50 - o) };
                      (i.duration = i.end - i.start),
                        i.duration >= 55 &&
                          (__ez.nap[5].push(i), window.ezocfol(n)),
                        (e = 0);
                    }
                });
              }, 56);
            } else
              window.dispatchEvent(
                new CustomEvent("EzoIvent", { detail: [-1, -1] })
              ),
                clearInterval(window.ezoIint);
          }),
          void 0 !== window.__ez.ssaf &&
            window.__ez.ssaf.indexOf(16) > -1 &&
            (window.addEventListener("load", function () {
              window.__ez__w_load = !0;
            }),
            window.addEventListener("DOMContentLoaded", function () {
              window.__ez__w_dom = !0;
            }),
            void 0 !== window.__ez.sshsdef &&
              !1 === window.__ez.sshsdef &&
              (function () {
                if (Element.prototype.addEventListener) {
                  (window.__ez__ael = window.addEventListener),
                    (window.__ez__ael__proto = window.__ez__ael.prototype);
                  var e = function () {
                    "domcontentloaded" == arguments[0].toLowerCase()
                      ? (arguments[0] = "EzoicDOMContentLoaded")
                      : "load" == arguments[0].toLowerCase() &&
                        (arguments[0] = "Ezoicload"),
                      window.__ez__ael.apply(window, arguments);
                  };
                  (window.__ez__ael.prototype = window.__ez__ael__proto),
                    (window.addEventListener = e),
                    (document.addEventListener = e);
                }
              })()),
          (window.ezorqs = function (e, t) {
            (indexKey = window.ezogetrqbykey(t)),
              "undefined" == typeof indexKey &&
                (__ez.nap[2].push({ start: Date.now(), end: -1, id: t }),
                __ez.nap[3]++,
                setTimeout(function () {
                  window.ezorqe(e, t);
                }, 2e3));
          }),
          (window.ezorqe = function (e, t, n) {
            (indexKey = window.ezogetrqbykey(t)),
              "undefined" != typeof indexKey && -1 == __ez.nap[2][indexKey].end
                ? ((__ez.nap[2][indexKey].end = Date.now()), __ez.nap[3]--)
                : 1 == n && __ez.nap[3]--;
          }),
          (window.ezocfol = function (e) {
            var t = _findNetworkQuietPeriods(
                __ez.nap[2],
                window.ezodomstart,
                e
              ),
              n = __ez.nap[5],
              o = _findOverlappingQuietPeriods(t, n);
            if (void 0 !== o) {
              var i = 0,
                r = Math.max(
                  o[o.length - 1].cpuQuietPeriod.end,
                  o[o.length - 1].cpuQuietPeriod.end
                );
              o.forEach(function (e) {
                i += Math.floor(e.quietPeriodLength / 55);
              }),
                ((i >= __ez.sswp && i > 1) ||
                  i >= 10 ||
                  r < Date.now() - 5e3) &&
                  clearInterval(window.ezoIint),
                (__ez.nap[0] = i),
                window.dispatchEvent(
                  new CustomEvent("EzoIvent", { detail: [__ez.nap[0], 50] })
                );
            }
          }),
          (window.ezogetrqbykey = function (e) {
            for (var t = 0, n = __ez.nap[2].length; t < n; t++)
              if (__ez.nap[2][t].id == e) return t;
          }),
          (__ez.nap = __ez.nap);
      },
    },
    t = {};
  function n(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var r = (t[o] = { exports: {} });
    return e[o].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    n(536);
})();
"remove" in Element.prototype ||
  (Element.prototype.remove = function () {
    this.parentNode && this.parentNode.removeChild(this);
  }),
  (__ez.screxqueue = (function () {
    var e = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      n = /([^\s,]+)/g;
    function i(i, t) {
      var o = i.toString().replace(e, ""),
        d = o.slice(o.indexOf("(") + 1, o.indexOf(")")).match(n);
      null === d && (d = []);
      for (var r = 0; r < d.length; r++)
        0 !== t.indexOf("jQuery-document-ready") ||
        0 !== r ||
        1 !== d[r].length ||
        void 0 === window.jQuery ||
        (void 0 !== window[d[r]] &&
          void 0 !== window[d[r]].fn &&
          void 0 !== window[d[r]].fn.jquery)
          ? 0 === t.lastIndexOf("window-load-listener", 0) ||
            0 === t.lastIndexOf("dom-content-loaded-listener", 0) ||
            0 === t.lastIndexOf("windowOnLoad", 0) ||
            0 === t.lastIndexOf("jQuery-window-load", 0)
            ? (d[r] = new CustomEvent("load"))
            : (d[r] = window[d[r]])
          : (d[r] = window.jQuery);
      return d;
    }
    var t = 0,
      o = 0,
      d = [],
      r = [],
      a = "",
      l = [
        "deferLoad",
        "documentReady",
        "documentReady2",
        "documentReady3",
        "domContentLoaded",
        "windowLoad",
        "windowOnLoad",
      ],
      s = [],
      c = function (e, n, t, o, d, r) {
        var a = this;
        (this.el = e),
          (this.name = n),
          (this.funcName = t),
          (this.parameters = null === o ? null : o instanceof Array ? o : [o]),
          (this.isBlock = d),
          (this.blockedBy = r),
          (this.isError = !1),
          (this.isComplete = !1),
          (this.isInitialized = !1),
          (this.process = function () {
            if (
              (p("... func = " + n),
              (a.isInitialized = !0),
              (a.isComplete = !0),
              "" !== a.funcName && -1 === l.indexOf(a.funcName))
            )
              if ((p("... func.apply: " + n), "function" == typeof a.funcName))
                a.funcName.apply(window, i(a.funcName, a.name));
              else {
                var e = a.funcName.split("."),
                  t = null;
                e.length > 3 ||
                  (t =
                    3 === e.length
                      ? window[e[0]][e[1]][e[2]]
                      : 2 === e.length
                      ? window[e[0]][e[1]]
                      : window[a.funcName]),
                  null != t && t.apply(window, this.parameters);
              }
            else
              "windowOnLoad" === a.funcName &&
              "ezoicSSOnLoad" in window &&
              null != window.ezoicSSOnLoad
                ? window.ezoicSSOnLoad(i(a.funcName, a.funcName))
                : "domContentLoaded" === a.funcName
                ? ("undefined" != typeof jQuery &&
                    jQuery(document).trigger("ready"),
                  f("EzoicDOMContentLoaded"))
                : "windowLoad" === a.funcName &&
                  (f("Ezoicload"),
                  "undefined" != typeof jQuery &&
                    jQuery(window).trigger("load"));
            !0 === a.isBlock ? (p("----- F'D: " + a.name), y()) : w();
          });
      },
      u = function (e, n, i, t, o, d, r) {
        var a = this;
        (this.el = e),
          (this.name = n),
          (this.path = i),
          (this.async = d),
          (this.defer = r),
          (this.isBlock = t),
          (this.blockedBy = o),
          (this.isInitialized = !1),
          (this.isError = !1),
          (this.isComplete = !1),
          (this.process = function () {
            (a.isInitialized = !0), p("... file = " + n);
            var e = document.createElement("script");
            if (((e.src = i), a.el.hasAttributes()))
              for (var t = a.el.attributes, o = t.length - 1; o >= 0; o--)
                (["id", "class", "defer"].indexOf(t[o].name) > -1 ||
                  0 === t[o].name.indexOf("data-")) &&
                  e.setAttribute(t[o].name, t[o].value);
            if (
              (!0 === d ? (e.async = !0) : !0 === r && (e.defer = !0),
              (e.onerror = function () {
                p("----- ERR'D: " + a.name),
                  (a.isError = !0),
                  (a.isComplete = !0),
                  !0 === a.isBlock ? y() : w();
              }),
              (e.onreadystatechange = e.onload =
                function () {
                  var n = e.readyState;
                  p("----- F'D: " + a.name),
                    (n && !/loaded|complete/.test(n)) ||
                      ((a.isComplete = !0), !0 === a.isBlock ? y() : w());
                }),
              null !== a.el &&
                void 0 !== a.el.parentNode &&
                void 0 !== a.el.nextSibling)
            ) {
              var l = document.createAttribute("ez-screx");
              (l.value = "true"),
                e.setAttributeNode(l),
                a.el.parentNode.insertBefore(e, a.el.nextSibling),
                a.el.parentNode.removeChild(a.el);
            } else document.getElementsByTagName("head")[0].appendChild(e);
          });
      };
    function f(e) {
      var n = function () {
        window.dispatchEvent(new CustomEvent(e));
      };
      "Ezoicload" == e
        ? 1 != window.__ez__w_load && "function" == typeof window.__ez__ael
          ? window.__ez__ael("load", n)
          : n()
        : "EzoicDOMContentLoaded" == e &&
          (1 != window.__ez__w_dom && "function" == typeof window.__ez__ael
            ? window.__ez__ael("DOMContentLoaded", n)
            : n()),
        p("firing event: " + e);
    }
    function m(e, n) {
      if (e.blockedBy instanceof Array)
        for (var i = 0; i < e.blockedBy.length; i++) {
          var t = e.blockedBy[i];
          if (!1 === d.hasOwnProperty(t))
            return p(e.name + " blocked = " + t), !0;
          if (!1 === d[t].isComplete) return p(e.name + " blocked = " + t), !0;
          if (!0 === n && 0 === a.indexOf("documentReady")) {
            p(e.name + " move to next ready");
            var o = e.blockedBy.indexOf("documentReady");
            switch ((-1 !== o && e.blockedBy.splice(o, 1), a)) {
              case "documentReady":
                e.blockedBy.push("documentReady2");
                break;
              case "documentReady2":
                e.blockedBy.push("documentReady3");
            }
            return !0;
          }
        }
      return !1;
    }
    function w() {
      for (var e in r)
        if (!1 !== r.hasOwnProperty(e)) {
          var n = r[e],
            i = "";
          if (
            (n.blockedBy instanceof Array &&
              n.blockedBy.length > 0 &&
              -1 !== l.indexOf(n.blockedBy[0]) &&
              (i = n.blockedBy[0]),
            !1 === n.isComplete && !1 === n.isError && i === a)
          )
            return !1;
        }
      -1 === s.indexOf(a) && s.push(a);
      var t = a;
      for (e = 0; e < l.length; e++)
        if (-1 === s.indexOf(l[e])) {
          a = l[e];
          break;
        }
      if (a === t) return !0;
      var o = "" == t ? [] : [t];
      return (
        __ez.screxqueue.addFunc(null, a, a, [], !0, o),
        p("screx done for state: " + ("" === t ? "init" : t)),
        p("screx state now: " + a),
        y(),
        !0
      );
    }
    function p(e) {
      var n = window.location.href,
        i = new RegExp("[?&]ezscrexq=([^&#]*)", "i").exec(n);
      "1" === (i ? i[1] : null) && console.debug(e);
    }
    function y() {
      ++t > 200 ||
        (p("let's go screx"),
        window,
        (function (e) {
          for (var n in e)
            if (!1 !== e.hasOwnProperty(n)) {
              var i = e[n];
              !0 === i.isComplete ||
              m(i) ||
              !0 === i.isInitialized ||
              !0 === i.isError
                ? !0 === i.isError
                  ? p(i.name + ": error")
                  : !0 === i.isComplete
                  ? p(i.name + ": complete already")
                  : !0 === i.isInitialized &&
                    p(i.name + ": initialized already")
                : i.process();
            }
        })(r, r.length),
        w());
    }
    return {
      addFile: function (e, n, i, t, o, a, l) {
        var s = new u(e, n, i, t, o, a, l);
        p(n + " ...  FILE! SCREX"), (r[n] = s), (d[n] = s);
      },
      addFunc: function (e, n, i, t, a, u) {
        -1 === l.indexOf(n) && (n = n + "_" + o++);
        var f = new c(e, n, i, t, a, u);
        p(n + " ...  FUNCTION! SCREX"),
          (r[n] = f),
          (d[n] = f),
          s.length > 0 &&
            -1 === l.indexOf(n) &&
            (function (e, n) {
              !0 !== m(e, !0) && e.process();
            })(f);
      },
      sjql: function (e) {
        this.IsJqLdBfWnd = e;
      },
      sjsdl: function (e) {
        this.IsJqLdBfDCL = e;
      },
      items: d,
      init: function () {
        p("Init Screx!"), y();
      },
    };
  })()),
  window.addEventListener("load", function () {
    "undefined" != typeof jQuery && __ez.screxqueue.sjql(!0);
  }),
  document.addEventListener("DOMContentLoaded", function () {
    "undefined" != typeof jQuery && __ez.screxqueue.sjsdl(!0);
  }),
  (__ez.script.inline = function (e) {
    var n = document.createElement("script");
    void 0 !== e.id && null !== e.id && "" !== e.id && (n.id = e.id);
    var i = document.createAttribute("ez-screx");
    (i.value = "true"), n.setAttributeNode(i);
    var t = document.createTextNode(e.innerHTML);
    n.appendChild(t),
      void 0 !== e.parentNode && void 0 !== e.nextSibling
        ? (e.parentNode.insertBefore(n, e.nextSibling), e.remove())
        : (document.body.appendChild(n), e.remove());
  });
!(function (e, t) {
  t(
    ((e = "undefined" != typeof globalThis ? globalThis : e || self).webVitals =
      {})
  );
})(this, function (e) {
  "use strict";
  var t,
    n,
    i,
    r,
    a = function (e, t) {
      return {
        name: e,
        value: void 0 === t ? -1 : t,
        delta: 0,
        entries: [],
        id: "v2-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      };
    },
    o = function (e, t) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          if ("first-input" === e && !("PerformanceEventTiming" in self))
            return;
          var n = new PerformanceObserver(function (e) {
            return e.getEntries().map(t);
          });
          return n.observe({ type: e, buffered: !0 }), n;
        }
      } catch (e) {}
    },
    u = function (e, t) {
      var n = function n(i) {
        ("pagehide" !== i.type && "hidden" !== document.visibilityState) ||
          (e(i),
          t &&
            (removeEventListener("visibilitychange", n, !0),
            removeEventListener("pagehide", n, !0)));
      };
      addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0);
    },
    c = function (e) {
      addEventListener(
        "pageshow",
        function (t) {
          t.persisted && e(t);
        },
        !0
      );
    },
    f = function (e, t, n) {
      var i;
      return function (r) {
        t.value >= 0 &&
          (r || n) &&
          ((t.delta = t.value - (i || 0)),
          (t.delta || void 0 === i) && ((i = t.value), e(t)));
      };
    },
    s = -1,
    d = function () {
      return "hidden" === document.visibilityState ? 0 : 1 / 0;
    },
    m = function () {
      u(function (e) {
        var t = e.timeStamp;
        s = t;
      }, !0);
    },
    v = function () {
      return (
        s < 0 &&
          ((s = d()),
          m(),
          c(function () {
            setTimeout(function () {
              (s = d()), m();
            }, 0);
          })),
        {
          get firstHiddenTime() {
            return s;
          },
        }
      );
    },
    p = function (e, t) {
      var n,
        i = v(),
        r = a("FCP"),
        u = function (e) {
          "first-contentful-paint" === e.name &&
            (d && d.disconnect(),
            e.startTime < i.firstHiddenTime &&
              ((r.value = e.startTime), r.entries.push(e), n(!0)));
        },
        s =
          performance.getEntriesByName &&
          performance.getEntriesByName("first-contentful-paint")[0],
        d = s ? null : o("paint", u);
      (s || d) &&
        ((n = f(e, r, t)),
        s && u(s),
        c(function (i) {
          (r = a("FCP")),
            (n = f(e, r, t)),
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                (r.value = performance.now() - i.timeStamp), n(!0);
              });
            });
        }));
    },
    l = !1,
    g = -1,
    h = { passive: !0, capture: !0 },
    y = new Date(),
    T = function (e, r) {
      t || ((t = r), (n = e), (i = new Date()), L(removeEventListener), E());
    },
    E = function () {
      if (n >= 0 && n < i - y) {
        var e = {
          entryType: "first-input",
          name: t.type,
          target: t.target,
          cancelable: t.cancelable,
          startTime: t.timeStamp,
          processingStart: t.timeStamp + n,
        };
        r.forEach(function (t) {
          t(e);
        }),
          (r = []);
      }
    },
    S = function (e) {
      if (e.cancelable) {
        var t =
          (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
        "pointerdown" == e.type
          ? (function (e, t) {
              var n = function () {
                  T(e, t), r();
                },
                i = function () {
                  r();
                },
                r = function () {
                  removeEventListener("pointerup", n, h),
                    removeEventListener("pointercancel", i, h);
                };
              addEventListener("pointerup", n, h),
                addEventListener("pointercancel", i, h);
            })(t, e)
          : T(t, e);
      }
    },
    L = function (e) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (
        t
      ) {
        return e(t, S, h);
      });
    },
    w = new Set();
  (e.getCLS = function (e, t) {
    l ||
      (p(function (e) {
        g = e.value;
      }),
      (l = !0));
    var n,
      i = function (t) {
        g > -1 && e(t);
      },
      r = a("CLS", 0),
      s = 0,
      d = [],
      m = function (e) {
        if (!e.hadRecentInput) {
          var t = d[0],
            i = d[d.length - 1];
          s &&
          e.startTime - i.startTime < 1e3 &&
          e.startTime - t.startTime < 5e3
            ? ((s += e.value), d.push(e))
            : ((s = e.value), (d = [e])),
            s > r.value && ((r.value = s), (r.entries = d), n());
        }
      },
      v = o("layout-shift", m);
    v &&
      ((n = f(i, r, t)),
      u(function () {
        v.takeRecords().map(m), n(!0);
      }),
      c(function () {
        (s = 0), (g = -1), (r = a("CLS", 0)), (n = f(i, r, t));
      }));
  }),
    (e.getFCP = p),
    (e.getFID = function (e, i) {
      var s,
        d = v(),
        m = a("FID"),
        p = function (e) {
          e.startTime < d.firstHiddenTime &&
            ((m.value = e.processingStart - e.startTime),
            m.entries.push(e),
            s(!0));
        },
        l = o("first-input", p);
      (s = f(e, m, i)),
        l &&
          u(function () {
            l.takeRecords().map(p), l.disconnect();
          }, !0),
        l &&
          c(function () {
            var o;
            (m = a("FID")),
              (s = f(e, m, i)),
              (r = []),
              (n = -1),
              (t = null),
              L(addEventListener),
              (o = p),
              r.push(o),
              E();
          });
    }),
    (e.getLCP = function (e, t) {
      var n,
        i = v(),
        r = a("LCP"),
        s = function (e) {
          var t = e.startTime;
          t < i.firstHiddenTime && ((r.value = t), r.entries.push(e)), n();
        },
        d = o("largest-contentful-paint", s);
      if (d) {
        n = f(e, r, t);
        var m = function () {
          w.has(r.id) ||
            (d.takeRecords().map(s), d.disconnect(), w.add(r.id), n(!0));
        };
        ["keydown", "click"].forEach(function (e) {
          addEventListener(e, m, { once: !0, capture: !0 });
        }),
          u(m, !0),
          c(function (i) {
            (r = a("LCP")),
              (n = f(e, r, t)),
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  (r.value = performance.now() - i.timeStamp),
                    w.add(r.id),
                    n(!0);
                });
              });
          });
      }
    }),
    (e.getTTFB = function (e) {
      var t,
        n = a("TTFB");
      (t = function () {
        try {
          var t =
            performance.getEntriesByType("navigation")[0] ||
            (function () {
              var e = performance.timing,
                t = { entryType: "navigation", startTime: 0 };
              for (var n in e)
                "navigationStart" !== n &&
                  "toJSON" !== n &&
                  (t[n] = Math.max(e[n] - e.navigationStart, 0));
              return t;
            })();
          if (((n.value = n.delta = t.responseStart), n.value < 0)) return;
          (n.entries = [t]), e(n);
        } catch (e) {}
      }),
        "complete" === document.readyState
          ? setTimeout(t, 0)
          : addEventListener("pageshow", t);
    }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
var metricNameMap = { CLS: "cls_value", FID: "fid_value", LCP: "lcp_value" };
function ezlogVital(m) {
  if (!metricNameMap[m.name] || !window._ezaq) {
    return;
  }
  window.__ez.bit.Add(window._ezaq["page_view_id"], [
    new window.__ezDotData(metricNameMap[m.name], m.delta),
  ]);
  window.__ez.bit.Fire();
}
window.webVitals.getCLS(ezlogVital);
window.webVitals.getLCP(ezlogVital);
window.webVitals.getFID(ezlogVital);
if (typeof __ez != "undefined") {
  __ez.vf = __ez.vf || {};
  __ez.vf.storeURL = "/detroitchicago/vpp.gif";
  __ez.vf.determineVideoPlayer = function (vid) {
    if (vid instanceof HTMLVideoElement == false) {
      return "";
    }
    for (var i = 0; i < __ez.vf.videoPlayers.length; i++) {
      if (__ez.vf.videoPlayers[i].isOfType(vid)) {
        return __ez.vf.videoPlayers[i].name;
      }
    }
    return "unknown";
  };
  __ez.vf.getBaseURL = function () {
    if (window.hasOwnProperty("ezIntType") && window.ezIntType === "wp") {
      return "https://g.ezoic.net";
    } else {
      return window.location.protocol + "//" + document.location.hostname;
    }
  };
  __ez.vf.sendVideoPlayerPixel = function (player, vid_src) {
    if (typeof _ezaq === "undefined") {
      return;
    }
    let data = {};
    data.url = _ezaq["url"];
    data.pageview_id = _ezaq["page_view_id"];
    data.template_id = _ezaq["template_id"];
    data.player_name = player;
    data.domain_id = _ezaq["domain_id"];
    data.media_src = vid_src;
    var img = new Image();
    img.src =
      __ez.vf.getBaseURL() +
      __ez.vf.storeURL +
      "?e=" +
      encodeURIComponent(JSON.stringify([data]));
  };
  class EzVideoPlayerDeterminer {
    isOfType(vid) {
      return false;
    }
    constructor(name, typeCheckFunc) {
      this.name = name;
      this.isOfType = typeCheckFunc;
    }
  }
  __ez.vf.videoPlayers = [
    new EzVideoPlayerDeterminer("plyr", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return typeof v.plyr === "object";
    }),
    new EzVideoPlayerDeterminer("jwplayer", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.classList.contains("jw-video");
    }),
    new EzVideoPlayerDeterminer("jplayer", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.id.startsWith("jp_video_");
    }),
    new EzVideoPlayerDeterminer("vdo.ai", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.id.startsWith("vdo_ai_");
    }),
    new EzVideoPlayerDeterminer("mediaelement", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.parentElement.tagName === "MEDIAELEMENTWRAPPER";
    }),
    new EzVideoPlayerDeterminer("flowplayer", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.classList.contains("fp-engine");
    }),
    new EzVideoPlayerDeterminer("avantisvideo", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return typeof v.av_evtsadded === "boolean";
    }),
    new EzVideoPlayerDeterminer("ezoicvideo", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.id.startsWith("ez-video-");
    }),
    new EzVideoPlayerDeterminer("ezcnx-outstream", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return (
        v.closest("cnx") !== null &&
        typeof __ez.cnxPlayer !== "undefined" &&
        __ez.cnxPlayer.getPlayerType() ===
          cnx.configEnums.PlayerTypesEnum.OutStream
      );
    }),
    new EzVideoPlayerDeterminer("ezcnx-instream", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return (
        v.closest("cnx") !== null &&
        typeof __ez.cnxPlayer !== "undefined" &&
        __ez.cnxPlayer.getPlayerType() ===
          cnx.configEnums.PlayerTypesEnum.InStream
      );
    }),
    new EzVideoPlayerDeterminer("cnx", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.closest("cnx") !== null && typeof __ez.cnxPlayer === "undefined";
    }),
    new EzVideoPlayerDeterminer("videojs", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.classList.contains("vjs-tech");
    }),
    new EzVideoPlayerDeterminer("primis", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.closest("[id^='primis_']") !== null;
    }),
    new EzVideoPlayerDeterminer("playwire", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.src.includes("playwire");
    }),
    new EzVideoPlayerDeterminer("ex.co", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.closest("[id^='exp_']") !== null;
    }),
    new EzVideoPlayerDeterminer("rumble", function (v) {
      if (v instanceof HTMLVideoElement == false) {
        return false;
      }
      return v.closest("[class$='Rumble-cls']") !== null;
    }),
  ];
  __ez.vf.findVideo = function () {
    let vids = document.getElementsByTagName("video");
    if (vids.length > 0) {
      let vidPlayer = __ez.vf.determineVideoPlayer(vids[0]);
      if (vidPlayer != "") {
        __ez.vf.sendVideoPlayerPixel(vidPlayer, vids[0].src);
      }
    }
  };
  setTimeout(__ez.vf.findVideo, 3000);
}
(window._qevents = window._qevents || []),
  (function () {
    var e = document.createElement("script");
    (e.src =
      ("https:" == document.location.protocol
        ? "https://secure"
        : "http://edge") + ".quantserve.com/quant.js"),
      (e.async = !0),
      (e.type = "text/javascript");
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);
  })(),
  _qevents.push({
    qacct: "p-31iz6hfFutd16",
    labels: "Domain." + _audins_dom + ",DomainId." + _audins_did,
  });
