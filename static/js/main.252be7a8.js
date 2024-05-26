/*! For license information please see main.252be7a8.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      630: (e, t, n) => {
        n.r(t),
          n.d(t, {
            Headers: () => o,
            Request: () => s,
            Response: () => l,
            default: () => i,
            fetch: () => a,
          });
        var r = (function () {
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof n.g) return n.g;
          throw new Error("unable to locate global object");
        })();
        const a = r.fetch,
          i = r.fetch.bind(r),
          o = r.Headers,
          s = r.Request,
          l = r.Response;
      },
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          f = {},
          p = {};
        function g(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var m = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(f, e) &&
                      (h.test(e) ? (p[e] = !0) : ((f[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(m, y);
            v[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(m, y);
              v[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(m, y);
            v[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          j = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var z,
          D = Object.assign;
        function U(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || "";
            }
          return "\n" + z + e;
        }
        var F = !1;
        function M(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  s = i.length - 1;
                1 <= o && 0 <= s && a[o] !== i[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (a[o] !== i[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || a[o] !== i[s])) {
                        var l = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = M(e.type, !1));
            case 11:
              return (e = M(e.type.render, !1));
            case 1:
              return (e = M(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case x:
              return "Profiler";
            case E:
              return "StrictMode";
            case O:
              return "Suspense";
            case j:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function J(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          Y(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && J(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function ie(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function he(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var fe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function ge(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (fe.hasOwnProperty(e) && fe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ge(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(fe).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (fe[t] = fe[e]);
          });
        });
        var me = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              me[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function xe(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = _a(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ce() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Oe() {}
        var je = !1;
        function Ne(e, t, n) {
          if (je) return e(t, n);
          je = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (je = !1), (null !== Se || null !== Ee) && (Oe(), Ce());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = _a(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ce) {
            Le = !1;
          }
        function Ae(e, t, n, r, a, i, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var ze = !1,
          De = null,
          Ue = !1,
          Fe = null,
          Me = {
            onError: function (e) {
              (ze = !0), (De = e);
            },
          };
        function Be(e, t, n, r, a, i, o, s, l) {
          (ze = !1), (De = null), Ae.apply(Me, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function qe(e) {
          if (He(e) !== e) throw Error(i(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return qe(a), e;
                    if (o === r) return qe(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = a);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          Je = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~a;
            0 !== s ? (r = dt(s)) : 0 !== (i &= o) && (r = dt(i));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ft(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function mt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var _t,
          kt,
          St,
          Et,
          xt,
          Tt = !1,
          Ct = [],
          Pt = null,
          Ot = null,
          jt = null,
          Nt = new Map(),
          Rt = new Map(),
          Lt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              jt = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function zt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function Mt() {
          (Tt = !1),
            null !== Pt && Ut(Pt) && (Pt = null),
            null !== Ot && Ut(Ot) && (Ot = null),
            null !== jt && Ut(jt) && (jt = null),
            Nt.forEach(Ft),
            Rt.forEach(Ft);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Mt)));
        }
        function Ht(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ct.length) {
            Bt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Bt(Pt, e),
              null !== Ot && Bt(Ot, e),
              null !== jt && Bt(jt, e),
              Nt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Lt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          qt = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = i);
          }
        }
        function $t(e, t, n, r) {
          var a = bt,
            i = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = i);
          }
        }
        function Kt(e, t, n, r) {
          if (qt) {
            var a = Qt(e, t, n, r);
            if (null === a) qr(e, t, r, Jt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = zt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = zt(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (jt = zt(jt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Nt.set(i, zt(Nt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Rt.set(i, zt(Rt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && _t(i),
                  null === (i = Qt(e, t, n, r)) && qr(e, t, r, Jt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else qr(e, t, r, null, n);
          }
        }
        var Jt = null;
        function Qt(e, t, n, r) {
          if (((Jt = null), null !== (e = ya((e = _e(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Jt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Yt ? Yt.value : Yt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = D({}, un, { view: 0, detail: 0 }),
          hn = an(dn),
          fn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: xn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = an(fn),
          gn = an(D({}, fn, { dataTransfer: 0 })),
          vn = an(D({}, dn, { relatedTarget: 0 })),
          mn = an(
            D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = D({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(D({}, un, { data: 0 })),
          _n = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function xn() {
          return En;
        }
        var Tn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = _n[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: xn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(Tn),
          Pn = an(
            D({}, fn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            })
          ),
          jn = an(
            D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = D({}, fn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Nn),
          Ln = [9, 13, 27, 32],
          In = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var zn = c && "TextEvent" in window && !An,
          Dn = c && (!In || (An && 8 < An && 11 >= An)),
          Un = String.fromCharCode(32),
          Fn = !1;
        function Mn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Te(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Kn = null;
        function Jn(e) {
          Ur(e, 0);
        }
        function Qn(e) {
          if (K(wa(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Yn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Kn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Kn)) {
            var t = [];
            Wn(t, Kn, e, _e(e)), Ne(Jn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(Kn);
        }
        function ir(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = J((e = t.contentWindow).document);
          }
          return t;
        }
        function fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = hr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && fr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var gr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          mr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== J(r) ||
            ("selectionStart" in (r = vr) && fr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = $r(mr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function _r(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: _r("Animation", "AnimationEnd"),
            animationiteration: _r("Animation", "AnimationIteration"),
            animationstart: _r("Animation", "AnimationStart"),
            transitionend: _r("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function xr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Tr = xr("animationend"),
          Cr = xr("animationiteration"),
          Pr = xr("animationstart"),
          Or = xr("transitionend"),
          jr = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          jr.set(e, t), l(t, [e]);
        }
        for (var Lr = 0; Lr < Nr.length; Lr++) {
          var Ir = Nr[Lr];
          Rr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Rr(Tr, "onAnimationEnd"),
          Rr(Cr, "onAnimationIteration"),
          Rr(Pr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          zr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, s, l, u) {
              if ((Be.apply(this, arguments), ze)) {
                if (!ze) throw Error(i(198));
                var c = De;
                (ze = !1), (De = null), Ue || ((Ue = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  Dr(a, s, u), (i = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, s, u), (i = l);
                }
            }
          }
          if (Ue) throw ((e = Fe), (Ue = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ga];
          void 0 === n && (n = t[ga] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Mr(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (zr.has(t) || Mr(t, !1, e), Mr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Mr("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function qr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = ya(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = i,
              a = _e(n),
              o = [];
            e: {
              var s = jr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = On;
                    break;
                  case Tr:
                  case Cr:
                  case Pr:
                    l = mn;
                    break;
                  case Or:
                    l = jn;
                    break;
                  case "scroll":
                    l = hn;
                    break;
                  case "wheel":
                    l = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Pn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  h = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var f, p = r; null !== p; ) {
                  var g = (f = p).stateNode;
                  if (
                    (5 === f.tag &&
                      null !== g &&
                      ((f = g),
                      null !== h &&
                        null != (g = Re(p, h)) &&
                        c.push(Wr(p, g, f))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, a)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[pa])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (g = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (g = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : wa(l)),
                  (f = null == u ? s : wa(u)),
                  ((s = new c(g, p + "leave", l, n, a)).target = d),
                  (s.relatedTarget = f),
                  (g = null),
                  ya(a) === r &&
                    (((c = new c(h, p + "enter", u, n, a)).target = f),
                    (c.relatedTarget = d),
                    (g = c)),
                  (d = g),
                  l && u)
                )
                  e: {
                    for (h = u, p = 0, f = c = l; f; f = Kr(f)) p++;
                    for (f = 0, g = h; g; g = Kr(g)) f++;
                    for (; 0 < p - f; ) (c = Kr(c)), p--;
                    for (; 0 < f - p; ) (h = Kr(h)), f--;
                    for (; p--; ) {
                      if (c === h || (null !== h && c === h.alternate)) break e;
                      (c = Kr(c)), (h = Kr(h));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Jr(o, s, l, c, !1),
                  null !== u && null !== d && Jr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? wa(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var v = Gn;
              else if (qn(s))
                if (Yn) v = or;
                else {
                  v = ar;
                  var m = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (v = ir);
              switch (
                (v && (v = v(e, r))
                  ? Wn(o, v, n, a)
                  : (m && m(e, s, r),
                    "focusout" === e &&
                      (m = s._wrapperState) &&
                      m.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (m = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (qn(m) || "true" === m.contentEditable) &&
                    ((vr = m), (mr = r), (yr = null));
                  break;
                case "focusout":
                  yr = mr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Mn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Xt = "value" in (Yt = a) ? Yt.value : Yt.textContent),
                      (Hn = !0))),
                0 < (m = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: m }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!In && Mn(e, t))
                          ? ((e = en()), (Zt = Xt = Yt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ur(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Re(e, n)) && r.unshift(Wr(e, i, a)),
              null != (i = Re(e, t)) && r.push(Wr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Jr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              a
                ? null != (l = Re(n, i)) && o.unshift(Wr(n, l, s))
                : a || (null != (l = Re(n, i)) && o.push(Wr(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Gr, "");
        }
        function Xr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          ha = "__reactFiber$" + da,
          fa = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ga = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ma = "__reactHandles$" + da;
        function ya(e) {
          var t = e[ha];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[ha])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[ha])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[ha] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function _a(e) {
          return e[fa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function xa(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Ta(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Ca = {},
          Pa = Ea(Ca),
          Oa = Ea(!1),
          ja = Ca;
        function Na(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          xa(Oa), xa(Pa);
        }
        function Ia(e, t, n) {
          if (Pa.current !== Ca) throw Error(i(168));
          Ta(Pa, t), Ta(Oa, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, V(e) || "Unknown", a));
          return D({}, n, r);
        }
        function za(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (ja = Pa.current),
            Ta(Pa, e),
            Ta(Oa, Oa.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Aa(e, t, ja)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xa(Oa),
              xa(Pa),
              Ta(Pa, e))
            : xa(Oa),
            Ta(Oa, n);
        }
        var Ua = null,
          Fa = !1,
          Ma = !1;
        function Ba(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function Ha() {
          if (!Ma && null !== Ua) {
            Ma = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ua;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ua = null), (Fa = !1);
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), Ke(Ze, Ha), a);
            } finally {
              (bt = t), (Ma = !1);
            }
          }
          return null;
        }
        var Va = [],
          qa = 0,
          Wa = null,
          $a = 0,
          Ka = [],
          Ja = 0,
          Qa = null,
          Ga = 1,
          Ya = "";
        function Xa(e, t) {
          (Va[qa++] = $a), (Va[qa++] = Wa), (Wa = e), ($a = t);
        }
        function Za(e, t, n) {
          (Ka[Ja++] = Ga), (Ka[Ja++] = Ya), (Ka[Ja++] = Qa), (Qa = e);
          var r = Ga;
          e = Ya;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ga = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ya = i + e);
          } else (Ga = (1 << i) | (n << a) | r), (Ya = e);
        }
        function ei(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === Wa; )
            (Wa = Va[--qa]), (Va[qa] = null), ($a = Va[--qa]), (Va[qa] = null);
          for (; e === Qa; )
            (Qa = Ka[--Ja]),
              (Ka[Ja] = null),
              (Ya = Ka[--Ja]),
              (Ka[Ja] = null),
              (Ga = Ka[--Ja]),
              (Ka[Ja] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Nu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function si(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qa ? { id: Ga, overflow: Ya } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Nu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function li(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!si(e, t)) {
                if (li(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && si(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (li(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (li(e)) throw (hi(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function hi() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function fi() {
          (ri = ni = null), (ai = !1);
        }
        function pi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var gi = w.ReactCurrentBatchConfig;
        function vi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function mi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function yi(e) {
          return (0, e._init)(e._payload);
        }
        function bi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === R &&
                    yi(i) === t.type))
              ? (((r = a(t, n.props)).ref = vi(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = vi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Du("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case _:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = vi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Uu(t, e.mode, n)).return = e), t;
                case R:
                  return h(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              mi(e, t);
            }
            return null;
          }
          function f(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return f(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : d(e, t, n, r, null);
              mi(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              mi(t, r);
            }
            return null;
          }
          function g(a, i, s, l) {
            for (
              var u = null, c = null, d = i, g = (i = 0), v = null;
              null !== d && g < s.length;
              g++
            ) {
              d.index > g ? ((v = d), (d = null)) : (v = d.sibling);
              var m = f(a, d, s[g], l);
              if (null === m) {
                null === d && (d = v);
                break;
              }
              e && d && null === m.alternate && t(a, d),
                (i = o(m, i, g)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m),
                (d = v);
            }
            if (g === s.length) return n(a, d), ai && Xa(a, g), u;
            if (null === d) {
              for (; g < s.length; g++)
                null !== (d = h(a, s[g], l)) &&
                  ((i = o(d, i, g)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ai && Xa(a, g), u;
            }
            for (d = r(a, d); g < s.length; g++)
              null !== (v = p(d, a, g, s[g], l)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? g : v.key),
                (i = o(v, i, g)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Xa(a, g),
              u
            );
          }
          function v(a, s, l, u) {
            var c = A(l);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (l = c.call(l))) throw Error(i(151));
            for (
              var d = (c = null), g = s, v = (s = 0), m = null, y = l.next();
              null !== g && !y.done;
              v++, y = l.next()
            ) {
              g.index > v ? ((m = g), (g = null)) : (m = g.sibling);
              var b = f(a, g, y.value, u);
              if (null === b) {
                null === g && (g = m);
                break;
              }
              e && g && null === b.alternate && t(a, g),
                (s = o(b, s, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (g = m);
            }
            if (y.done) return n(a, g), ai && Xa(a, v), c;
            if (null === g) {
              for (; !y.done; v++, y = l.next())
                null !== (y = h(a, y.value, u)) &&
                  ((s = o(y, s, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return ai && Xa(a, v), c;
            }
            for (g = r(a, g); !y.done; v++, y = l.next())
              null !== (y = p(g, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  g.delete(null === y.key ? v : y.key),
                (s = o(y, s, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                g.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Xa(a, v),
              c
            );
          }
          return function e(r, i, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case _:
                  e: {
                    for (var u = o.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            yi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = vi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((i = Au(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = i))
                      : (((l = Iu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = vi(r, i, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Uu(o, r.mode, l)).return = r), (r = i);
                  }
                  return s(r);
                case R:
                  return e(r, i, (c = o._init)(o._payload), l);
              }
              if (te(o)) return g(r, i, o, l);
              if (A(o)) return v(r, i, o, l);
              mi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Du(o, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var wi = bi(!0),
          _i = bi(!1),
          ki = Ea(null),
          Si = null,
          Ei = null,
          xi = null;
        function Ti() {
          xi = Ei = Si = null;
        }
        function Ci(e) {
          var t = ki.current;
          xa(ki), (e._currentValue = t);
        }
        function Pi(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Oi(e, t) {
          (Si = e),
            (xi = Ei = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null));
        }
        function ji(e) {
          var t = e._currentValue;
          if (xi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ei)
            ) {
              if (null === Si) throw Error(i(308));
              (Ei = e), (Si.dependencies = { lanes: 0, firstContext: e });
            } else Ei = Ei.next = e;
          return t;
        }
        var Ni = null;
        function Ri(e) {
          null === Ni ? (Ni = [e]) : Ni.push(e);
        }
        function Li(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ri(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ii(e, r)
          );
        }
        function Ii(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ai = !1;
        function zi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Di(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ui(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pl))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ii(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ri(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ii(e, n)
          );
        }
        function Mi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Bi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Hi(e, t, n, r) {
          var a = e.updateQueue;
          Ai = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (i = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, c = u = l = null, s = i; ; ) {
              var h = s.lane,
                f = s.eventTime;
              if ((r & h) === h) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: f,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    g = s;
                  switch (((h = t), (f = n), g.tag)) {
                    case 1:
                      if ("function" === typeof (p = g.payload)) {
                        d = p.call(f, d, h);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            "function" === typeof (p = g.payload)
                              ? p.call(f, d, h)
                              : p) ||
                        void 0 === h
                      )
                        break e;
                      d = D({}, d, h);
                      break e;
                    case 2:
                      Ai = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (h = a.effects) ? (a.effects = [s]) : h.push(s));
              } else
                (f = {
                  eventTime: f,
                  lane: h,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = f), (l = d)) : (c = c.next = f),
                  (o |= h);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (a.lastBaseUpdate = h),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (zl |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Vi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var qi = {},
          Wi = Ea(qi),
          $i = Ea(qi),
          Ki = Ea(qi);
        function Ji(e) {
          if (e === qi) throw Error(i(174));
          return e;
        }
        function Qi(e, t) {
          switch ((Ta(Ki, t), Ta($i, e), Ta(Wi, qi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xa(Wi), Ta(Wi, t);
        }
        function Gi() {
          xa(Wi), xa($i), xa(Ki);
        }
        function Yi(e) {
          Ji(Ki.current);
          var t = Ji(Wi.current),
            n = le(t, e.type);
          t !== n && (Ta($i, e), Ta(Wi, n));
        }
        function Xi(e) {
          $i.current === e && (xa(Wi), xa($i));
        }
        var Zi = Ea(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = w.ReactCurrentDispatcher,
          ao = w.ReactCurrentBatchConfig,
          io = 0,
          oo = null,
          so = null,
          lo = null,
          uo = !1,
          co = !1,
          ho = 0,
          fo = 0;
        function po() {
          throw Error(i(321));
        }
        function go(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function vo(e, t, n, r, a, o) {
          if (
            ((io = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Zo : es),
            (e = n(r, a)),
            co)
          ) {
            o = 0;
            do {
              if (((co = !1), (ho = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (lo = so = null),
                (t.updateQueue = null),
                (ro.current = ts),
                (e = n(r, a));
            } while (co);
          }
          if (
            ((ro.current = Xo),
            (t = null !== so && null !== so.next),
            (io = 0),
            (lo = so = oo = null),
            (uo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function mo() {
          var e = 0 !== ho;
          return (ho = 0), e;
        }
        function yo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e), lo
          );
        }
        function bo() {
          if (null === so) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = so.next;
          var t = null === lo ? oo.memoizedState : lo.next;
          if (null !== t) (lo = t), (so = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (so = e).memoizedState,
              baseState: so.baseState,
              baseQueue: so.baseQueue,
              queue: so.queue,
              next: null,
            }),
              null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e);
          }
          return lo;
        }
        function wo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _o(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = so,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var s = a.next;
              (a.next = o.next), (o.next = s);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((io & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var h = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = h), (s = r)) : (u = u.next = h),
                  (oo.lanes |= d),
                  (zl |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (oo.lanes |= o), (zl |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ko(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== a);
            sr(o, t.memoizedState) || (bs = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function So() {}
        function Eo(e, t) {
          var n = oo,
            r = bo(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (bs = !0)),
            (r = r.queue),
            zo(Co.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== lo && 1 & lo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              No(9, To.bind(null, n, r, a, t), void 0, null),
              null === Ol)
            )
              throw Error(i(349));
            0 !== (30 & io) || xo(n, t, a);
          }
          return a;
        }
        function xo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function To(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Po(t) && Oo(e);
        }
        function Co(e, t, n) {
          return n(function () {
            Po(t) && Oo(e);
          });
        }
        function Po(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Oo(e) {
          var t = Ii(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function jo(e) {
          var t = yo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Jo.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function No(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ro() {
          return bo().memoizedState;
        }
        function Lo(e, t, n, r) {
          var a = yo();
          (oo.flags |= e),
            (a.memoizedState = No(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Io(e, t, n, r) {
          var a = bo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== so) {
            var o = so.memoizedState;
            if (((i = o.destroy), null !== r && go(r, o.deps)))
              return void (a.memoizedState = No(t, n, i, r));
          }
          (oo.flags |= e), (a.memoizedState = No(1 | t, n, i, r));
        }
        function Ao(e, t) {
          return Lo(8390656, 8, e, t);
        }
        function zo(e, t) {
          return Io(2048, 8, e, t);
        }
        function Do(e, t) {
          return Io(4, 2, e, t);
        }
        function Uo(e, t) {
          return Io(4, 4, e, t);
        }
        function Fo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Mo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Io(4, 4, Fo.bind(null, t, e), n)
          );
        }
        function Bo() {}
        function Ho(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && go(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vo(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && go(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function qo(e, t, n) {
          return 0 === (21 & io)
            ? (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = gt()), (oo.lanes |= n), (zl |= n), (e.baseState = !0)),
              t);
        }
        function Wo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ao.transition;
          ao.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ao.transition = r);
          }
        }
        function $o() {
          return bo().memoizedState;
        }
        function Ko(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Qo(e))
          )
            Go(t, n);
          else if (null !== (n = Li(e, t, n, r))) {
            nu(n, e, r, eu()), Yo(n, t, r);
          }
        }
        function Jo(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Qo(e)) Go(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Ri(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Li(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), Yo(n, t, r));
          }
        }
        function Qo(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Go(e, t) {
          co = uo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Yo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Xo = {
            readContext: ji,
            useCallback: po,
            useContext: po,
            useEffect: po,
            useImperativeHandle: po,
            useInsertionEffect: po,
            useLayoutEffect: po,
            useMemo: po,
            useReducer: po,
            useRef: po,
            useState: po,
            useDebugValue: po,
            useDeferredValue: po,
            useTransition: po,
            useMutableSource: po,
            useSyncExternalStore: po,
            useId: po,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: ji,
            useCallback: function (e, t) {
              return (yo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: ji,
            useEffect: Ao,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Lo(4194308, 4, Fo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Lo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Lo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ko.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yo().memoizedState = e);
            },
            useState: jo,
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return (yo().memoizedState = e);
            },
            useTransition: function () {
              var e = jo(!1),
                t = e[0];
              return (
                (e = Wo.bind(null, e[1])), (yo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                a = yo();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Ol)) throw Error(i(349));
                0 !== (30 & io) || xo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ao(Co.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                No(9, To.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yo(),
                t = Ol.identifierPrefix;
              if (ai) {
                var n = Ya;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ga & ~(1 << (32 - ot(Ga) - 1))).toString(32) + n)),
                  0 < (n = ho++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = fo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: ji,
            useCallback: Ho,
            useContext: ji,
            useEffect: zo,
            useImperativeHandle: Mo,
            useInsertionEffect: Do,
            useLayoutEffect: Uo,
            useMemo: Vo,
            useReducer: _o,
            useRef: Ro,
            useState: function () {
              return _o(wo);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              return qo(bo(), so.memoizedState, e);
            },
            useTransition: function () {
              return [_o(wo)[0], bo().memoizedState];
            },
            useMutableSource: So,
            useSyncExternalStore: Eo,
            useId: $o,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: ji,
            useCallback: Ho,
            useContext: ji,
            useEffect: zo,
            useImperativeHandle: Mo,
            useInsertionEffect: Do,
            useLayoutEffect: Uo,
            useMemo: Vo,
            useReducer: ko,
            useRef: Ro,
            useState: function () {
              return ko(wo);
            },
            useDebugValue: Bo,
            useDeferredValue: function (e) {
              var t = bo();
              return null === so
                ? (t.memoizedState = e)
                : qo(t, so.memoizedState, e);
            },
            useTransition: function () {
              return [ko(wo)[0], bo().memoizedState];
            },
            useMutableSource: So,
            useSyncExternalStore: Eo,
            useId: $o,
            unstable_isNewReconciler: !1,
          };
        function ns(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rs(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var as = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ui(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Fi(e, i, a)) && (nu(t, e, a, r), Mi(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ui(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Fi(e, i, a)) && (nu(t, e, a, r), Mi(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ui(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Fi(e, a, r)) && (nu(t, e, r, n), Mi(t, e, r));
          },
        };
        function is(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, i);
        }
        function os(e, t, n) {
          var r = !1,
            a = Ca,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = ji(i))
              : ((a = Ra(t) ? ja : Pa.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Na(e, a)
                  : Ca)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = as),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function ss(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && as.enqueueReplaceState(t, t.state, null);
        }
        function ls(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), zi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = ji(i))
            : ((i = Ra(t) ? ja : Pa.current), (a.context = Na(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (rs(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && as.enqueueReplaceState(a, a.state, null),
              Hi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function us(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function cs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var hs = "function" === typeof WeakMap ? WeakMap : Map;
        function fs(e, t, n) {
          ((n = Ui(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              ql || ((ql = !0), (Wl = r)), ds(0, t);
            }),
            n
          );
        }
        function ps(e, t, n) {
          (n = Ui(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" !== typeof r &&
                    (null === $l ? ($l = new Set([this])) : $l.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new hs();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = xu.bind(null, e, t, n)), t.then(e, e));
        }
        function vs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ms(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ui(-1, 1)).tag = 2), Fi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var ys = w.ReactCurrentOwner,
          bs = !1;
        function ws(e, t, n, r) {
          t.child = null === e ? _i(t, null, n, r) : wi(t, e.child, n, r);
        }
        function _s(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Oi(t, a),
            (r = vo(e, t, n, r, i, a)),
            (n = mo()),
            null === e || bs
              ? (ai && n && ei(t), (t.flags |= 1), ws(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                qs(e, t, a))
          );
        }
        function ks(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Ru(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ss(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return qs(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ss(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), qs(e, t, a);
              0 !== (131072 & e.flags) && (bs = !0);
            }
          }
          return Ts(e, t, n, r, a);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(Ll, Rl),
                (Rl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(Ll, Rl),
                  (Rl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Ta(Ll, Rl),
                (Rl |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(Ll, Rl),
              (Rl |= r);
          return ws(e, t, a, n), t.child;
        }
        function xs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ts(e, t, n, r, a) {
          var i = Ra(n) ? ja : Pa.current;
          return (
            (i = Na(t, i)),
            Oi(t, a),
            (n = vo(e, t, n, r, i, a)),
            (r = mo()),
            null === e || bs
              ? (ai && r && ei(t), (t.flags |= 1), ws(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                qs(e, t, a))
          );
        }
        function Cs(e, t, n, r, a) {
          if (Ra(n)) {
            var i = !0;
            za(t);
          } else i = !1;
          if ((Oi(t, a), null === t.stateNode))
            Vs(e, t), os(t, n, r), ls(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = ji(u))
              : (u = Na(t, (u = Ra(n) ? ja : Pa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && ss(t, o, r, u)),
              (Ai = !1);
            var h = t.memoizedState;
            (o.state = h),
              Hi(t, r, o, a),
              (l = t.memoizedState),
              s !== r || h !== l || Oa.current || Ai
                ? ("function" === typeof c &&
                    (rs(t, n, c, r), (l = t.memoizedState)),
                  (s = Ai || is(t, n, s, r, h, l, u))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Di(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ns(t.type, s)),
              (o.props = u),
              (d = t.pendingProps),
              (h = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = ji(l))
                : (l = Na(t, (l = Ra(n) ? ja : Pa.current)));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== d || h !== l) && ss(t, o, r, l)),
              (Ai = !1),
              (h = t.memoizedState),
              (o.state = h),
              Hi(t, r, o, a);
            var p = t.memoizedState;
            s !== d || h !== p || Oa.current || Ai
              ? ("function" === typeof f &&
                  (rs(t, n, f, r), (p = t.memoizedState)),
                (u = Ai || is(t, n, u, r, h, p, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ps(e, t, n, r, i, a);
        }
        function Ps(e, t, n, r, a, i) {
          xs(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Da(t, n, !1), qs(e, t, i);
          (r = t.stateNode), (ys.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = wi(t, e.child, null, i)),
                (t.child = wi(t, null, s, i)))
              : ws(e, t, s, i),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Os(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            Qi(e, t.containerInfo);
        }
        function js(e, t, n, r, a) {
          return fi(), pi(a), (t.flags |= 256), ws(e, t, n, r), t.child;
        }
        var Ns,
          Rs,
          Ls,
          Is,
          As = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ds(e, t, n) {
          var r,
            a = t.pendingProps,
            o = Zi.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ta(Zi, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = zu(l, a, 0, null)),
                      (e = Au(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = zs(n)),
                      (t.memoizedState = As),
                      e)
                    : Us(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fs(e, t, s, (r = cs(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = zu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Au(o, a, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && wi(t, e.child, null, s),
                    (t.child.memoizedState = zs(s)),
                    (t.memoizedState = As),
                    o);
              if (0 === (1 & t.mode)) return Fs(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Fs(e, t, s, (r = cs((o = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), bs || l)) {
                if (null !== (r = Ol)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ii(e, a), nu(r, e, a, -1));
                }
                return gu(), Fs(e, t, s, (r = cs(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Ka[Ja++] = Ga),
                    (Ka[Ja++] = Ya),
                    (Ka[Ja++] = Qa),
                    (Ga = e.id),
                    (Ya = e.overflow),
                    (Qa = t)),
                  (t = Us(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, o, n);
          if (s) {
            (s = a.fallback), (l = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Lu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Lu(r, s))
                : ((s = Au(s, l, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? zs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = As),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Lu(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Us(e, t) {
          return (
            ((t = zu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fs(e, t, n, r) {
          return (
            null !== r && pi(r),
            wi(t, e.child, null, n),
            ((e = Us(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ms(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pi(e.return, t, n);
        }
        function Bs(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Hs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((ws(e, t, r.children, n), 0 !== (2 & (r = Zi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ms(e, n, t);
                else if (19 === e.tag) Ms(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(Zi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bs(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === eo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bs(t, !0, n, null, i);
                break;
              case "together":
                Bs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function qs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ws(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $s(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ks(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $s(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), $s(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Gi(),
                xa(Oa),
                xa(Pa),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (ou(ii), (ii = null)))),
                Rs(e, t),
                $s(t),
                null
              );
            case 5:
              Xi(t);
              var a = Ji(Ki.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ls(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return $s(t), null;
                }
                if (((e = Ji(Wi.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[ha] = t), (r[fa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) Fr(Ar[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      G(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Fr("invalid", r);
                  }
                  for (var l in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      $(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[ha] = t),
                    (e[fa] = r),
                    Ns(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) Fr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = Q(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && he(e, c)
                            : "number" === typeof c && he(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Fr("scroll", e)
                              : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + q(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $s(t), null;
            case 6:
              if (e && null != t.stateNode) Is(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = Ji(Ki.current)), Ji(Wi.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ha] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ha] = t),
                    (t.stateNode = r);
              }
              return $s(t), null;
            case 13:
              if (
                (xa(Zi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  hi(), fi(), (t.flags |= 98560), (o = !1);
                else if (((o = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[ha] = t;
                  } else
                    fi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $s(t), (o = !1);
                } else null !== ii && (ou(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Zi.current)
                        ? 0 === Il && (Il = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $s(t),
                  null);
            case 4:
              return (
                Gi(),
                Rs(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                $s(t),
                null
              );
            case 10:
              return Ci(t.type._context), $s(t), null;
            case 19:
              if ((xa(Zi), null === (o = t.memoizedState))) return $s(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) Ws(o, !1);
                else {
                  if (0 !== Il || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = eo(e))) {
                        for (
                          t.flags |= 128,
                            Ws(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(Zi, (1 & Zi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ye() > Hl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ws(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ws(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ai)
                    )
                      return $s(t), null;
                  } else
                    2 * Ye() - o.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ws(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = Zi.current),
                  Ta(Zi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($s(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rl) &&
                    ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $s(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Js(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Gi(),
                xa(Oa),
                xa(Pa),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Xi(t), null;
            case 13:
              if (
                (xa(Zi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                fi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xa(Zi), null;
            case 4:
              return Gi(), null;
            case 10:
              return Ci(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ns = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Rs = function () {}),
          (Ls = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Ji(Wi.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var l = a[c];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          l[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            o || l === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Is = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Qs = !1,
          Gs = !1,
          Ys = "function" === typeof WeakSet ? WeakSet : Set,
          Xs = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && el(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function al(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ha],
              delete t[fa],
              delete t[ga],
              delete t[va],
              delete t[ma]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ol(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ol(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        var cl = null,
          dl = !1;
        function hl(e, t, n) {
          for (n = n.child; null !== n; ) fl(e, t, n), (n = n.sibling);
        }
        function fl(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Gs || Zs(n, t);
            case 6:
              var r = cl,
                a = dl;
              (cl = null),
                hl(e, t, n),
                (dl = a),
                null !== (cl = r) &&
                  (dl
                    ? ((e = cl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cl.removeChild(n.stateNode));
              break;
            case 18:
              null !== cl &&
                (dl
                  ? ((e = cl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    Ht(e))
                  : la(cl, n.stateNode));
              break;
            case 4:
              (r = cl),
                (a = dl),
                (cl = n.stateNode.containerInfo),
                (dl = !0),
                hl(e, t, n),
                (cl = r),
                (dl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      el(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              hl(e, t, n);
              break;
            case 1:
              if (
                !Gs &&
                (Zs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Eu(n, t, s);
                }
              hl(e, t, n);
              break;
            case 21:
              hl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gs = (r = Gs) || null !== n.memoizedState),
                  hl(e, t, n),
                  (Gs = r))
                : hl(e, t, n);
              break;
            default:
              hl(e, t, n);
          }
        }
        function pl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ys()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (cl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (cl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === cl) throw Error(i(160));
                fl(o, s, a), (cl = null), (dl = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vl(t, e), (t = t.sibling);
        }
        function vl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gl(t, e), ml(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (v) {
                  Eu(e, e.return, v);
                }
                try {
                  nl(5, e, e.return);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 1:
              gl(t, e), ml(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (gl(t, e),
                ml(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  he(a, "");
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      Y(a, o),
                      be(l, s);
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        h = u[s + 1];
                      "style" === d
                        ? ve(a, h)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, h)
                        : "children" === d
                        ? he(a, h)
                        : b(a, d, h, c);
                    }
                    switch (l) {
                      case "input":
                        X(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var f = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(a, !!o.multiple, p, !1)
                          : f !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[fa] = o;
                  } catch (v) {
                    Eu(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((gl(t, e), ml(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (gl(t, e),
                ml(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              break;
            case 4:
            default:
              gl(t, e), ml(e);
              break;
            case 13:
              gl(t, e),
                ml(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bl = Ye())),
                4 & r && pl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gs = (c = Gs) || d), gl(t, e), (Gs = c))
                  : gl(t, e),
                ml(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Xs = e, d = e.child; null !== d; ) {
                    for (h = Xs = d; null !== Xs; ) {
                      switch (((p = (f = Xs).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, f, f.return);
                          break;
                        case 1:
                          Zs(f, f.return);
                          var g = f.stateNode;
                          if ("function" === typeof g.componentWillUnmount) {
                            (r = f), (n = f.return);
                            try {
                              (t = r),
                                (g.props = t.memoizedProps),
                                (g.state = t.memoizedState),
                                g.componentWillUnmount();
                            } catch (v) {
                              Eu(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Zs(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            _l(h);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = f), (Xs = p)) : _l(h);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, h = e; ; ) {
                  if (5 === h.tag) {
                    if (null === d) {
                      d = h;
                      try {
                        (a = h.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = h.stateNode),
                              (s =
                                void 0 !== (u = h.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = ge("display", s)));
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === d)
                      try {
                        h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === e) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === e) break e;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === e) break e;
                    d === h && (d = null), (h = h.return);
                  }
                  d === h && (d = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              gl(t, e), ml(e), 4 & r && pl(e);
            case 21:
          }
        }
        function ml(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ol(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (he(a, ""), (r.flags &= -33)),
                    ul(e, sl(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ll(e, sl(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yl(e, t, n) {
          (Xs = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xs; ) {
            var a = Xs,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Qs;
              if (!o) {
                var s = a.alternate,
                  l = (null !== s && null !== s.memoizedState) || Gs;
                s = Qs;
                var u = Gs;
                if (((Qs = o), (Gs = l) && !u))
                  for (Xs = a; null !== Xs; )
                    (l = (o = Xs).child),
                      22 === o.tag && null !== o.memoizedState
                        ? kl(a)
                        : null !== l
                        ? ((l.return = o), (Xs = l))
                        : kl(a);
                for (; null !== i; ) (Xs = i), bl(i, t, n), (i = i.sibling);
                (Xs = a), (Qs = s), (Gs = u);
              }
              wl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Xs = i))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gs)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ns(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Vi(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Vi(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var h = d.dehydrated;
                            null !== h && Ht(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Gs || (512 & t.flags && al(t));
              } catch (f) {
                Eu(t, t.return, f);
              }
            }
            if (t === e) {
              Xs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function _l(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (t === e) {
              Xs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function kl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, a, l);
                    }
                  }
                  var i = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Eu(t, i, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Eu(t, o, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              Xs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Xs = s);
              break;
            }
            Xs = t.return;
          }
        }
        var Sl,
          El = Math.ceil,
          xl = w.ReactCurrentDispatcher,
          Tl = w.ReactCurrentOwner,
          Cl = w.ReactCurrentBatchConfig,
          Pl = 0,
          Ol = null,
          jl = null,
          Nl = 0,
          Rl = 0,
          Ll = Ea(0),
          Il = 0,
          Al = null,
          zl = 0,
          Dl = 0,
          Ul = 0,
          Fl = null,
          Ml = null,
          Bl = 0,
          Hl = 1 / 0,
          Vl = null,
          ql = !1,
          Wl = null,
          $l = null,
          Kl = !1,
          Jl = null,
          Ql = 0,
          Gl = 0,
          Yl = null,
          Xl = -1,
          Zl = 0;
        function eu() {
          return 0 !== (6 & Pl) ? Ye() : -1 !== Xl ? Xl : (Xl = Ye());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pl) && 0 !== Nl
            ? Nl & -Nl
            : null !== gi.transition
            ? (0 === Zl && (Zl = gt()), Zl)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Gl) throw ((Gl = 0), (Yl = null), Error(i(185)));
          mt(e, n, r),
            (0 !== (2 & Pl) && e === Ol) ||
              (e === Ol && (0 === (2 & Pl) && (Dl |= n), 4 === Il && su(e, Nl)),
              ru(e, r),
              1 === n &&
                0 === Pl &&
                0 === (1 & t.mode) &&
                ((Hl = Ye() + 500), Fa && Ha()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                s = 1 << o,
                l = a[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = ft(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = ht(e, e === Ol ? Nl : 0);
          if (0 === r)
            null !== n && Je(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Je(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ba(e);
                  })(lu.bind(null, e))
                : Ba(lu.bind(null, e)),
                oa(function () {
                  0 === (6 & Pl) && Ha();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Xl = -1), (Zl = 0), 0 !== (6 & Pl))) throw Error(i(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ht(e, e === Ol ? Nl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = Pl;
            Pl |= 2;
            var o = pu();
            for (
              (Ol === e && Nl === t) ||
              ((Vl = null), (Hl = Ye() + 500), hu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (l) {
                fu(e, l);
              }
            Ti(),
              (xl.current = o),
              (Pl = a),
              null !== jl ? (t = 0) : ((Ol = null), (Nl = 0), (t = Il));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Al), hu(e, 0), su(e, r), ru(e, Ye()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(i(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = iu(e, o))),
                  1 === t))
              )
                throw ((n = Al), hu(e, 0), su(e, r), ru(e, Ye()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  _u(e, Ml, Vl);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Bl + 500 - Ye()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(_u.bind(null, e, Ml, Vl), t);
                    break;
                  }
                  _u(e, Ml, Vl);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > a && (a = s), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(_u.bind(null, e, Ml, Vl), r);
                    break;
                  }
                  _u(e, Ml, Vl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ru(e, Ye()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Fl;
          return (
            e.current.memoizedState.isDehydrated && (hu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Ml), (Ml = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Ml ? (Ml = e) : Ml.push.apply(Ml, e);
        }
        function su(e, t) {
          for (
            t &= ~Ul,
              t &= ~Dl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lu(e) {
          if (0 !== (6 & Pl)) throw Error(i(327));
          ku();
          var t = ht(e, 0);
          if (0 === (1 & t)) return ru(e, Ye()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Al), hu(e, 0), su(e, t), ru(e, Ye()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _u(e, Ml, Vl),
            ru(e, Ye()),
            null
          );
        }
        function uu(e, t) {
          var n = Pl;
          Pl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pl = n) && ((Hl = Ye() + 500), Fa && Ha());
          }
        }
        function cu(e) {
          null !== Jl && 0 === Jl.tag && 0 === (6 & Pl) && ku();
          var t = Pl;
          Pl |= 1;
          var n = Cl.transition,
            r = bt;
          try {
            if (((Cl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cl.transition = n), 0 === (6 & (Pl = t)) && Ha();
          }
        }
        function du() {
          (Rl = Ll.current), xa(Ll);
        }
        function hu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== jl))
            for (n = jl.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  Gi(), xa(Oa), xa(Pa), no();
                  break;
                case 5:
                  Xi(r);
                  break;
                case 4:
                  Gi();
                  break;
                case 13:
                case 19:
                  xa(Zi);
                  break;
                case 10:
                  Ci(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ol = e),
            (jl = e = Lu(e.current, null)),
            (Nl = Rl = t),
            (Il = 0),
            (Al = null),
            (Ul = Dl = zl = 0),
            (Ml = Fl = null),
            null !== Ni)
          ) {
            for (t = 0; t < Ni.length; t++)
              if (null !== (r = (n = Ni[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ni = null;
          }
          return e;
        }
        function fu(e, t) {
          for (;;) {
            var n = jl;
            try {
              if ((Ti(), (ro.current = Xo), uo)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                uo = !1;
              }
              if (
                ((io = 0),
                (lo = so = oo = null),
                (co = !1),
                (ho = 0),
                (Tl.current = null),
                null === n || null === n.return)
              ) {
                (Il = 1), (Al = t), (jl = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Nl),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = l,
                    h = d.tag;
                  if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                    var f = d.alternate;
                    f
                      ? ((d.updateQueue = f.updateQueue),
                        (d.memoizedState = f.memoizedState),
                        (d.lanes = f.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = vs(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      ms(p, s, l, 0, t),
                      1 & p.mode && gs(o, c, t),
                      (u = c);
                    var g = (t = p).updateQueue;
                    if (null === g) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else g.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gs(o, c, t), gu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & l.mode) {
                  var m = vs(s);
                  if (null !== m) {
                    0 === (65536 & m.flags) && (m.flags |= 256),
                      ms(m, s, l, 0, t),
                      pi(us(u, l));
                    break e;
                  }
                }
                (o = u = us(u, l)),
                  4 !== Il && (Il = 2),
                  null === Fl ? (Fl = [o]) : Fl.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Bi(o, fs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $l || !$l.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Bi(o, ps(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wu(n);
            } catch (w) {
              (t = w), jl === n && null !== n && (jl = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = xl.current;
          return (xl.current = Xo), null === e ? Xo : e;
        }
        function gu() {
          (0 !== Il && 3 !== Il && 2 !== Il) || (Il = 4),
            null === Ol ||
              (0 === (268435455 & zl) && 0 === (268435455 & Dl)) ||
              su(Ol, Nl);
        }
        function vu(e, t) {
          var n = Pl;
          Pl |= 2;
          var r = pu();
          for ((Ol === e && Nl === t) || ((Vl = null), hu(e, t)); ; )
            try {
              mu();
              break;
            } catch (a) {
              fu(e, a);
            }
          if ((Ti(), (Pl = n), (xl.current = r), null !== jl))
            throw Error(i(261));
          return (Ol = null), (Nl = 0), Il;
        }
        function mu() {
          for (; null !== jl; ) bu(jl);
        }
        function yu() {
          for (; null !== jl && !Qe(); ) bu(jl);
        }
        function bu(e) {
          var t = Sl(e.alternate, e, Rl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (jl = t),
            (Tl.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ks(n, t, Rl))) return void (jl = n);
            } else {
              if (null !== (n = Js(n, t)))
                return (n.flags &= 32767), void (jl = n);
              if (null === e) return (Il = 6), void (jl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (jl = t);
            jl = t = e;
          } while (null !== t);
          0 === Il && (Il = 5);
        }
        function _u(e, t, n) {
          var r = bt,
            a = Cl.transition;
          try {
            (Cl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Jl);
                if (0 !== (6 & Pl)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Ol && ((jl = Ol = null), (Nl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Kl ||
                    ((Kl = !0),
                    Ou(tt, function () {
                      return ku(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Cl.transition), (Cl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Pl;
                  (Pl |= 4),
                    (Tl.current = null),
                    (function (e, t) {
                      if (((ea = qt), fr((e = hr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (_) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                h = e,
                                f = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== a && 3 !== h.nodeType) ||
                                    (l = s + a),
                                    h !== o ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (u = s + r),
                                    3 === h.nodeType &&
                                      (s += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (f = h), (h = p);
                                for (;;) {
                                  if (h === e) break t;
                                  if (
                                    (f === n && ++c === a && (l = s),
                                    f === o && ++d === r && (u = s),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  f = (h = f).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          qt = !1,
                          Xs = t;
                        null !== Xs;

                      )
                        if (
                          ((e = (t = Xs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xs = e);
                        else
                          for (; null !== Xs; ) {
                            t = Xs;
                            try {
                              var g = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var v = g.memoizedProps,
                                        m = g.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : ns(t.type, v),
                                          m
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (_) {
                              Eu(t, t.return, _);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xs = e);
                              break;
                            }
                            Xs = t.return;
                          }
                      (g = tl), (tl = !1);
                    })(e, n),
                    vl(n, e),
                    pr(ta),
                    (qt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yl(n, e, a),
                    Ge(),
                    (Pl = l),
                    (bt = s),
                    (Cl.transition = o);
                } else e.current = n;
                if (
                  (Kl && ((Kl = !1), (Jl = e), (Ql = a)),
                  (o = e.pendingLanes),
                  0 === o && ($l = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (ql) throw ((ql = !1), (e = Wl), (Wl = null), e);
                0 !== (1 & Ql) && 0 !== e.tag && ku(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Yl
                      ? Gl++
                      : ((Gl = 0), (Yl = e))
                    : (Gl = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (Cl.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Jl) {
            var e = wt(Ql),
              t = Cl.transition,
              n = bt;
            try {
              if (((Cl.transition = null), (bt = 16 > e ? 16 : e), null === Jl))
                var r = !1;
              else {
                if (((e = Jl), (Jl = null), (Ql = 0), 0 !== (6 & Pl)))
                  throw Error(i(331));
                var a = Pl;
                for (Pl |= 4, Xs = e.current; null !== Xs; ) {
                  var o = Xs,
                    s = o.child;
                  if (0 !== (16 & Xs.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Xs = c; null !== Xs; ) {
                          var d = Xs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, o);
                          }
                          var h = d.child;
                          if (null !== h) (h.return = d), (Xs = h);
                          else
                            for (; null !== Xs; ) {
                              var f = (d = Xs).sibling,
                                p = d.return;
                              if ((il(d), d === c)) {
                                Xs = null;
                                break;
                              }
                              if (null !== f) {
                                (f.return = p), (Xs = f);
                                break;
                              }
                              Xs = p;
                            }
                        }
                      }
                      var g = o.alternate;
                      if (null !== g) {
                        var v = g.child;
                        if (null !== v) {
                          g.child = null;
                          do {
                            var m = v.sibling;
                            (v.sibling = null), (v = m);
                          } while (null !== v);
                        }
                      }
                      Xs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Xs = s);
                  else
                    e: for (; null !== Xs; ) {
                      if (0 !== (2048 & (o = Xs).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Xs = y);
                        break e;
                      }
                      Xs = o.return;
                    }
                }
                var b = e.current;
                for (Xs = b; null !== Xs; ) {
                  var w = (s = Xs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Xs = w);
                  else
                    e: for (s = b; null !== Xs; ) {
                      if (0 !== (2048 & (l = Xs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (k) {
                          Eu(l, l.return, k);
                        }
                      if (l === s) {
                        Xs = null;
                        break e;
                      }
                      var _ = l.sibling;
                      if (null !== _) {
                        (_.return = l.return), (Xs = _);
                        break e;
                      }
                      Xs = l.return;
                    }
                }
                if (
                  ((Pl = a),
                  Ha(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cl.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Fi(e, (t = fs(0, (t = us(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (mt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $l || !$l.has(r)))
                ) {
                  (t = Fi(t, (e = ps(t, (e = us(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (mt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function xu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ol === e &&
              (Nl & n) === n &&
              (4 === Il ||
              (3 === Il && (130023424 & Nl) === Nl && 500 > Ye() - Bl)
                ? hu(e, 0)
                : (Ul |= n)),
            ru(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ii(e, t)) && (mt(e, t, n), ru(e, n));
        }
        function Cu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Ou(e, t) {
          return Ke(e, t);
        }
        function ju(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nu(e, t, n, r) {
          return new ju(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, a, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Ru(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Au(n.children, a, o, t);
              case E:
                (s = 8), (a |= 8);
                break;
              case x:
                return (
                  ((e = Nu(12, n, t, 2 | a)).elementType = x), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Nu(13, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case j:
                return (
                  ((e = Nu(19, n, t, a)).elementType = j), (e.lanes = o), e
                );
              case L:
                return zu(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      s = 10;
                      break e;
                    case C:
                      s = 9;
                      break e;
                    case P:
                      s = 11;
                      break e;
                    case N:
                      s = 14;
                      break e;
                    case R:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Nu(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = Nu(7, e, r, t)).lanes = n), e;
        }
        function zu(e, t, n, r) {
          return (
            ((e = Nu(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, t, n) {
          return ((e = Nu(6, e, null, t)).lanes = n), e;
        }
        function Uu(e, t, n) {
          return (
            ((t = Nu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Mu(e, t, n, r, a, i, o, s, l) {
          return (
            (e = new Fu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Nu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            zi(i),
            e
          );
        }
        function Bu(e) {
          if (!e) return Ca;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return Aa(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, a, i, o, s, l) {
          return (
            ((e = Mu(n, r, !0, e, 0, i, 0, s, l)).context = Bu(null)),
            (n = e.current),
            ((i = Ui((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fi(n, i, a),
            (e.current.lanes = a),
            mt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var a = t.current,
            i = eu(),
            o = tu(a);
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ui(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fi(a, t, o)) && (nu(e, a, o, i), Mi(e, a, o)),
            o
          );
        }
        function qu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        Sl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) bs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Os(t), fi();
                        break;
                      case 5:
                        Yi(t);
                        break;
                      case 1:
                        Ra(t.type) && za(t);
                        break;
                      case 4:
                        Qi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(ki, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(Zi, 1 & Zi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ds(e, t, n)
                            : (Ta(Zi, 1 & Zi.current),
                              null !== (e = qs(e, t, n)) ? e.sibling : null);
                        Ta(Zi, 1 & Zi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(Zi, Zi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return qs(e, t, n);
                  })(e, t, n)
                );
              bs = 0 !== (131072 & e.flags);
            }
          else (bs = !1), ai && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vs(e, t), (e = t.pendingProps);
              var a = Na(t, Pa.current);
              Oi(t, n), (a = vo(null, t, r, e, a, n));
              var o = mo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((o = !0), za(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    zi(t),
                    (a.updater = as),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ls(t, r, e, n),
                    (t = Ps(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    ws(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vs(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ru(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ns(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Cs(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _s(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ks(null, t, r, ns(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ts(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cs(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 3:
              e: {
                if ((Os(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Di(e, t),
                  Hi(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = js(e, t, r, n, (a = us(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = js(e, t, r, n, (a = us(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = _i(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((fi(), r === a)) {
                    t = qs(e, t, n);
                    break e;
                  }
                  ws(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Yi(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                xs(e, t),
                ws(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Ds(e, t, n);
            case 4:
              return (
                Qi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wi(t, null, r, n)) : ws(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _s(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 7:
              return ws(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ws(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = a.value),
                  Ta(ki, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === a.children && !Oa.current) {
                      t = qs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ui(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Pi(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Pi(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                ws(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Oi(t, n),
                (r = r((a = ji(a)))),
                (t.flags |= 1),
                ws(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ns((r = t.type), t.pendingProps)),
                ks(e, t, r, (a = ns(r.type, a)), n)
              );
            case 15:
              return Ss(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ns(r, a)),
                Vs(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), za(t)) : (e = !1),
                Oi(t, n),
                os(t, r, a),
                ls(t, r, a, n),
                Ps(null, t, r, !0, e, n)
              );
            case 19:
              return Hs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ju(e) {
          this._internalRoot = e;
        }
        function Qu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xu() {}
        function Zu(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = qu(o);
                s.call(e);
              };
            }
            Vu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = qu(o);
                    i.call(e);
                  };
                }
                var o = Hu(t, r, e, 0, null, !1, 0, "", Xu);
                return (
                  (e._reactRootContainer = o),
                  (e[pa] = o.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = qu(l);
                  s.call(e);
                };
              }
              var l = Mu(e, 0, !1, null, 0, !1, 0, "", Xu);
              return (
                (e._reactRootContainer = l),
                (e[pa] = l.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Vu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return qu(o);
        }
        (Qu.prototype.render = Ju.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Vu(e, t, null, null);
          }),
          (Qu.prototype.unmount = Ju.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Vu(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          (Qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (_t = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ye()),
                    0 === (6 & Pl) && ((Hl = Ye() + 500), Ha()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ii(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ii(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ii(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (xt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = _a(r);
                      if (!a) throw Error(i(90));
                      K(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = uu),
          (Oe = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, _a, Te, Ce, uu],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (it = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Mu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Ju(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yu(t)) throw Error(i(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              s = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, a, 0, o, s)),
              (e[pa] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Qu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yu(t)) throw Error(i(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          v = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = m.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), g(w, m.prototype), (w.isPureReactComponent = !0);
        var _ = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var a,
            i = {},
            o = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === i[a] && (i[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: S.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, i, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === i ? "." + P(l, 0) : i),
              _(o)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  O(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (T(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), _(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + P((s = e[u]), u);
              l += O(s, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += O((s = s.value), t, a, (c = i + P(s, u++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function j(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          I = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        function A() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: j,
          forEach: function (e, t, n) {
            j(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              j(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.act = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = g({}, e.props),
              i = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = A),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < a && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          h = null,
          f = 3,
          p = !1,
          g = !1,
          v = !1,
          m = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function _(e) {
          if (((v = !1), w(e), !g))
            if (null !== r(u)) (g = !0), L(k);
            else {
              var t = r(c);
              null !== t && I(_, t.startTime - e);
            }
        }
        function k(e, n) {
          (g = !1), v && ((v = !1), y(T), (T = -1)), (p = !0);
          var i = f;
          try {
            for (
              w(n), h = r(u);
              null !== h && (!(h.expirationTime > n) || (e && !O()));

            ) {
              var o = h.callback;
              if ("function" === typeof o) {
                (h.callback = null), (f = h.priorityLevel);
                var s = o(h.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (h.callback = s)
                    : h === r(u) && a(u),
                  w(n);
              } else a(u);
              h = r(u);
            }
            if (null !== h) var l = !0;
            else {
              var d = r(c);
              null !== d && I(_, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (h = null), (f = i), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          x = null,
          T = -1,
          C = 5,
          P = -1;
        function O() {
          return !(t.unstable_now() - P < C);
        }
        function j() {
          if (null !== x) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = x(!0, e);
            } finally {
              n ? S() : ((E = !1), (x = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(j);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            R = N.port2;
          (N.port1.onmessage = j),
            (S = function () {
              R.postMessage(null);
            });
        } else
          S = function () {
            m(j, 0);
          };
        function L(e) {
          (x = e), E || ((E = !0), S());
        }
        function I(e, n) {
          T = m(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            g || p || ((g = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return f;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (f) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = f;
            }
            var n = f;
            f = t;
            try {
              return e();
            } finally {
              f = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = f;
            f = e;
            try {
              return t();
            } finally {
              f = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (y(T), (T = -1)) : (v = !0), I(_, i - o)))
                : ((e.sortIndex = s), n(u, e), g || p || ((g = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = f;
            return function () {
              var n = f;
              f = t;
              try {
                return e.apply(this, arguments);
              } finally {
                f = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & a && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(i, o), i;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".f742fc5c.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "tech-up:";
      n.l = (r, a, i, o) => {
        if (e[r]) e[r].push(a);
        else {
          var s, l;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + i),
            (s.src = r)),
            (e[r] = [a]);
          var h = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(f);
              var a = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            f = setTimeout(
              h.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = h.bind(null, s.onerror)),
            (s.onload = h.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var i = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = i));
            var o = n.p + n.u(t),
              s = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = o),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            i,
            o = r[0],
            s = r[1],
            l = r[2],
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in s) n.o(s, a) && (n.m[a] = s[a]);
            if (l) l(n);
          }
          for (t && t(r); u < o.length; u++)
            (i = o[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunktech_up = self.webpackChunktech_up || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e = n(43),
        t = n(391),
        r = n(579);
      const a = function (e) {
        let { currentSelection: t, setCurrentSelection: n } = e;
        function a(e) {
          n(e);
        }
        return (0, r.jsxs)("div", {
          className: "navigation",
          children: [
            (0, r.jsx)("button", {
              onClick: () => a("Search"),
              className: "Search" === t ? "selected" : "",
              value: "Search",
              children: "Search",
            }),
            (0, r.jsx)("button", {
              onClick: () => a("Manage"),
              className: "Manage" === t ? "selected" : "",
              value: "Manage",
              children: "Add New",
            }),
          ],
        });
      };
      const i = function (t) {
        let { searchTerm: n, setSearchTerm: a } = t;
        const [i, o] = (0, e.useState)(n);
        return (0, r.jsx)("div", {
          children: (0, r.jsx)("form", {
            onSubmit: (e) => e.preventDefault(),
            children: (0, r.jsx)("input", {
              className: "search",
              type: "text",
              placeholder: "Search",
              value: n,
              onChange: (e) => {
                a(e.target.value);
              },
            }),
          }),
        });
      };
      const o = function (t) {
        let { searchTag: n, setSearchTag: a } = t;
        const [i, o] = (0, e.useState)(n);
        return (0, r.jsx)("div", {
          children: (0, r.jsx)("form", {
            onSubmit: (e) => e.preventDefault(),
            children: (0, r.jsx)("input", {
              className: "search",
              type: "text",
              placeholder: "Tags",
              value: i,
              onChange: (e) => {
                o(e.target.value), a(e.target.value);
              },
            }),
          }),
        });
      };
      const s = function (e) {
        let { abbreviations: t } = e;
        const {
          abbreviation: n,
          definition: a,
          description: i,
          otherInformation: o,
        } = t;
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("h1", { children: n }),
            (0, r.jsx)("h2", { children: a }),
            (0, r.jsx)("h3", { children: i }),
            (0, r.jsx)("p", { children: o }),
          ],
        });
      };
      const l = function (e) {
        let { tag: t } = e;
        return (0, r.jsx)("div", { className: "card-tag", children: t });
      };
      const u = function (e) {
        let {
          setCurrentSelection: t,
          abbreviations: n,
          setEditAbbreviation: a,
        } = e;
        return (0, r.jsxs)("div", {
          className: "info-card",
          children: [
            (0, r.jsx)(s, { abbreviations: n }),
            (0, r.jsx)("div", {
              className: "tag-container",
              children:
                n.tags && n.tags.map((e, t) => (0, r.jsx)(l, { tag: e }, t)),
            }),
          ],
        });
      };
      class c extends Error {
        constructor(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "FunctionsError",
            n = arguments.length > 2 ? arguments[2] : void 0;
          super(e), (this.name = t), (this.context = n);
        }
      }
      class d extends c {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      }
      class h extends c {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      }
      class f extends c {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      }
      var p;
      !(function (e) {
        (e.Any = "any"),
          (e.ApNortheast1 = "ap-northeast-1"),
          (e.ApNortheast2 = "ap-northeast-2"),
          (e.ApSouth1 = "ap-south-1"),
          (e.ApSoutheast1 = "ap-southeast-1"),
          (e.ApSoutheast2 = "ap-southeast-2"),
          (e.CaCentral1 = "ca-central-1"),
          (e.EuCentral1 = "eu-central-1"),
          (e.EuWest1 = "eu-west-1"),
          (e.EuWest2 = "eu-west-2"),
          (e.EuWest3 = "eu-west-3"),
          (e.SaEast1 = "sa-east-1"),
          (e.UsEast1 = "us-east-1"),
          (e.UsWest1 = "us-west-1"),
          (e.UsWest2 = "us-west-2");
      })(p || (p = {}));
      var g = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class v {
        constructor(e) {
          let {
            headers: t = {},
            customFetch: r,
            region: a = p.Any,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          (this.url = e),
            (this.headers = t),
            (this.region = a),
            (this.fetch = ((e) => {
              let t;
              return (
                (t =
                  e ||
                  ("undefined" === typeof fetch
                    ? function () {
                        for (
                          var e = arguments.length, t = new Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        return Promise.resolve()
                          .then(n.bind(n, 630))
                          .then((e) => {
                            let { default: n } = e;
                            return n(...t);
                          });
                      }
                    : fetch)),
                function () {
                  return t(...arguments);
                }
              );
            })(r));
        }
        setAuth(e) {
          this.headers.Authorization = "Bearer ".concat(e);
        }
        invoke(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var n;
          return g(this, void 0, void 0, function* () {
            try {
              const { headers: r, method: a, body: i } = t;
              let o,
                s = {},
                { region: l } = t;
              l || (l = this.region),
                l && "any" !== l && (s["x-region"] = l),
                i &&
                  ((r &&
                    !Object.prototype.hasOwnProperty.call(r, "Content-Type")) ||
                    !r) &&
                  (("undefined" !== typeof Blob && i instanceof Blob) ||
                  i instanceof ArrayBuffer
                    ? ((s["Content-Type"] = "application/octet-stream"),
                      (o = i))
                    : "string" === typeof i
                    ? ((s["Content-Type"] = "text/plain"), (o = i))
                    : "undefined" !== typeof FormData && i instanceof FormData
                    ? (o = i)
                    : ((s["Content-Type"] = "application/json"),
                      (o = JSON.stringify(i))));
              const u = yield this.fetch("".concat(this.url, "/").concat(e), {
                  method: a || "POST",
                  headers: Object.assign(
                    Object.assign(Object.assign({}, s), this.headers),
                    r
                  ),
                  body: o,
                }).catch((e) => {
                  throw new d(e);
                }),
                c = u.headers.get("x-relay-error");
              if (c && "true" === c) throw new h(u);
              if (!u.ok) throw new f(u);
              let p,
                g = (
                  null !== (n = u.headers.get("Content-Type")) && void 0 !== n
                    ? n
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
              return (
                (p =
                  "application/json" === g
                    ? yield u.json()
                    : "application/octet-stream" === g
                    ? yield u.blob()
                    : "text/event-stream" === g
                    ? u
                    : "multipart/form-data" === g
                    ? yield u.formData()
                    : yield u.text()),
                { data: p, error: null }
              );
            } catch (r) {
              return { data: null, error: r };
            }
          });
        }
      }
      var m = n(630);
      class y extends Error {
        constructor(e) {
          super(e.message),
            (this.name = "PostgrestError"),
            (this.details = e.details),
            (this.hint = e.hint),
            (this.code = e.code);
        }
      }
      class b {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" === typeof fetch
              ? (this.fetch = m.default)
              : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        then(e, t) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let n = (0, this.fetch)(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
          }).then(async (e) => {
            var t, n, r;
            let a = null,
              i = null,
              o = null,
              s = e.status,
              l = e.statusText;
            if (e.ok) {
              if ("HEAD" !== this.method) {
                const t = await e.text();
                "" === t ||
                  (i =
                    "text/csv" === this.headers.Accept ||
                    (this.headers.Accept &&
                      this.headers.Accept.includes(
                        "application/vnd.pgrst.plan+text"
                      ))
                      ? t
                      : JSON.parse(t));
              }
              const r =
                  null === (t = this.headers.Prefer) || void 0 === t
                    ? void 0
                    : t.match(/count=(exact|planned|estimated)/),
                u =
                  null === (n = e.headers.get("content-range")) || void 0 === n
                    ? void 0
                    : n.split("/");
              r && u && u.length > 1 && (o = parseInt(u[1])),
                this.isMaybeSingle &&
                  "GET" === this.method &&
                  Array.isArray(i) &&
                  (i.length > 1
                    ? ((a = {
                        code: "PGRST116",
                        details: "Results contain ".concat(
                          i.length,
                          " rows, application/vnd.pgrst.object+json requires 1 row"
                        ),
                        hint: null,
                        message:
                          "JSON object requested, multiple (or no) rows returned",
                      }),
                      (i = null),
                      (o = null),
                      (s = 406),
                      (l = "Not Acceptable"))
                    : (i = 1 === i.length ? i[0] : null));
            } else {
              const t = await e.text();
              try {
                (a = JSON.parse(t)),
                  Array.isArray(a) &&
                    404 === e.status &&
                    ((i = []), (a = null), (s = 200), (l = "OK"));
              } catch (u) {
                404 === e.status && "" === t
                  ? ((s = 204), (l = "No Content"))
                  : (a = { message: t });
              }
              if (
                (a &&
                  this.isMaybeSingle &&
                  (null ===
                    (r = null === a || void 0 === a ? void 0 : a.details) ||
                  void 0 === r
                    ? void 0
                    : r.includes("0 rows")) &&
                  ((a = null), (s = 200), (l = "OK")),
                a && this.shouldThrowOnError)
              )
                throw new y(a);
            }
            return { error: a, data: i, count: o, status: s, statusText: l };
          });
          return (
            this.shouldThrowOnError ||
              (n = n.catch((e) => {
                var t, n, r;
                return {
                  error: {
                    message: ""
                      .concat(
                        null !==
                          (t = null === e || void 0 === e ? void 0 : e.name) &&
                          void 0 !== t
                          ? t
                          : "FetchError",
                        ": "
                      )
                      .concat(null === e || void 0 === e ? void 0 : e.message),
                    details: "".concat(
                      null !==
                        (n = null === e || void 0 === e ? void 0 : e.stack) &&
                        void 0 !== n
                        ? n
                        : ""
                    ),
                    hint: "",
                    code: "".concat(
                      null !==
                        (r = null === e || void 0 === e ? void 0 : e.code) &&
                        void 0 !== r
                        ? r
                        : ""
                    ),
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            n.then(e, t)
          );
        }
      }
      class w extends b {
        select(e) {
          let t = !1;
          const n = (null !== e && void 0 !== e ? e : "*")
            .split("")
            .map((e) => (/\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)))
            .join("");
          return (
            this.url.searchParams.set("select", n),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(e) {
          let {
            ascending: t = !0,
            nullsFirst: n,
            foreignTable: r,
            referencedTable: a = r,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          const i = a ? "".concat(a, ".order") : "order",
            o = this.url.searchParams.get(i);
          return (
            this.url.searchParams.set(
              i,
              ""
                .concat(o ? "".concat(o, ",") : "")
                .concat(e, ".")
                .concat(t ? "asc" : "desc")
                .concat(void 0 === n ? "" : n ? ".nullsfirst" : ".nullslast")
            ),
            this
          );
        }
        limit(e) {
          let { foreignTable: t, referencedTable: n = t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = "undefined" === typeof n ? "limit" : "".concat(n, ".limit");
          return this.url.searchParams.set(r, "".concat(e)), this;
        }
        range(e, t) {
          let { foreignTable: n, referencedTable: r = n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const a =
              "undefined" === typeof r ? "offset" : "".concat(r, ".offset"),
            i = "undefined" === typeof r ? "limit" : "".concat(r, ".limit");
          return (
            this.url.searchParams.set(a, "".concat(e)),
            this.url.searchParams.set(i, "".concat(t - e + 1)),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain() {
          let {
            analyze: e = !1,
            verbose: t = !1,
            settings: n = !1,
            buffers: r = !1,
            wal: a = !1,
            format: i = "text",
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          var o;
          const s = [
              e ? "analyze" : null,
              t ? "verbose" : null,
              n ? "settings" : null,
              r ? "buffers" : null,
              a ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            l =
              null !== (o = this.headers.Accept) && void 0 !== o
                ? o
                : "application/json";
          return (
            (this.headers.Accept = "application/vnd.pgrst.plan+"
              .concat(i, '; for="')
              .concat(l, '"; options=')
              .concat(s, ";")),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      }
      class _ extends w {
        eq(e, t) {
          return this.url.searchParams.append(e, "eq.".concat(t)), this;
        }
        neq(e, t) {
          return this.url.searchParams.append(e, "neq.".concat(t)), this;
        }
        gt(e, t) {
          return this.url.searchParams.append(e, "gt.".concat(t)), this;
        }
        gte(e, t) {
          return this.url.searchParams.append(e, "gte.".concat(t)), this;
        }
        lt(e, t) {
          return this.url.searchParams.append(e, "lt.".concat(t)), this;
        }
        lte(e, t) {
          return this.url.searchParams.append(e, "lte.".concat(t)), this;
        }
        like(e, t) {
          return this.url.searchParams.append(e, "like.".concat(t)), this;
        }
        likeAllOf(e, t) {
          return (
            this.url.searchParams.append(
              e,
              "like(all).{".concat(t.join(","), "}")
            ),
            this
          );
        }
        likeAnyOf(e, t) {
          return (
            this.url.searchParams.append(
              e,
              "like(any).{".concat(t.join(","), "}")
            ),
            this
          );
        }
        ilike(e, t) {
          return this.url.searchParams.append(e, "ilike.".concat(t)), this;
        }
        ilikeAllOf(e, t) {
          return (
            this.url.searchParams.append(
              e,
              "ilike(all).{".concat(t.join(","), "}")
            ),
            this
          );
        }
        ilikeAnyOf(e, t) {
          return (
            this.url.searchParams.append(
              e,
              "ilike(any).{".concat(t.join(","), "}")
            ),
            this
          );
        }
        is(e, t) {
          return this.url.searchParams.append(e, "is.".concat(t)), this;
        }
        in(e, t) {
          const n = Array.from(new Set(t))
            .map((e) =>
              "string" === typeof e && new RegExp("[,()]").test(e)
                ? '"'.concat(e, '"')
                : "".concat(e)
            )
            .join(",");
          return this.url.searchParams.append(e, "in.(".concat(n, ")")), this;
        }
        contains(e, t) {
          return (
            "string" === typeof t
              ? this.url.searchParams.append(e, "cs.".concat(t))
              : Array.isArray(t)
              ? this.url.searchParams.append(e, "cs.{".concat(t.join(","), "}"))
              : this.url.searchParams.append(
                  e,
                  "cs.".concat(JSON.stringify(t))
                ),
            this
          );
        }
        containedBy(e, t) {
          return (
            "string" === typeof t
              ? this.url.searchParams.append(e, "cd.".concat(t))
              : Array.isArray(t)
              ? this.url.searchParams.append(e, "cd.{".concat(t.join(","), "}"))
              : this.url.searchParams.append(
                  e,
                  "cd.".concat(JSON.stringify(t))
                ),
            this
          );
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(e, "sr.".concat(t)), this;
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(e, "nxl.".concat(t)), this;
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(e, "sl.".concat(t)), this;
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(e, "nxr.".concat(t)), this;
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(e, "adj.".concat(t)), this;
        }
        overlaps(e, t) {
          return (
            "string" === typeof t
              ? this.url.searchParams.append(e, "ov.".concat(t))
              : this.url.searchParams.append(
                  e,
                  "ov.{".concat(t.join(","), "}")
                ),
            this
          );
        }
        textSearch(e, t) {
          let { config: n, type: r } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            a = "";
          "plain" === r
            ? (a = "pl")
            : "phrase" === r
            ? (a = "ph")
            : "websearch" === r && (a = "w");
          const i = void 0 === n ? "" : "(".concat(n, ")");
          return (
            this.url.searchParams.append(
              e,
              "".concat(a, "fts").concat(i, ".").concat(t)
            ),
            this
          );
        }
        match(e) {
          return (
            Object.entries(e).forEach((e) => {
              let [t, n] = e;
              this.url.searchParams.append(t, "eq.".concat(n));
            }),
            this
          );
        }
        not(e, t, n) {
          return (
            this.url.searchParams.append(e, "not.".concat(t, ".").concat(n)),
            this
          );
        }
        or(e) {
          let { foreignTable: t, referencedTable: n = t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = n ? "".concat(n, ".or") : "or";
          return this.url.searchParams.append(r, "(".concat(e, ")")), this;
        }
        filter(e, t, n) {
          return (
            this.url.searchParams.append(e, "".concat(t, ".").concat(n)), this
          );
        }
      }
      class k {
        constructor(e, t) {
          let { headers: n = {}, schema: r, fetch: a } = t;
          (this.url = e),
            (this.headers = n),
            (this.schema = r),
            (this.fetch = a);
        }
        select(e) {
          let { head: t = !1, count: n } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = t ? "HEAD" : "GET";
          let a = !1;
          const i = (null !== e && void 0 !== e ? e : "*")
            .split("")
            .map((e) => (/\s/.test(e) && !a ? "" : ('"' === e && (a = !a), e)))
            .join("");
          return (
            this.url.searchParams.set("select", i),
            n && (this.headers.Prefer = "count=".concat(n)),
            new _({
              method: r,
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e) {
          let { count: t, defaultToNull: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = [];
          if (
            (this.headers.Prefer && r.push(this.headers.Prefer),
            t && r.push("count=".concat(t)),
            n || r.push("missing=default"),
            (this.headers.Prefer = r.join(",")),
            Array.isArray(e))
          ) {
            const t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              const e = [...new Set(t)].map((e) => '"'.concat(e, '"'));
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new _({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(e) {
          let {
            onConflict: t,
            ignoreDuplicates: n = !1,
            count: r,
            defaultToNull: a = !0,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          const i = [
            "resolution=".concat(n ? "ignore" : "merge", "-duplicates"),
          ];
          if (
            (void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.headers.Prefer && i.push(this.headers.Prefer),
            r && i.push("count=".concat(r)),
            a || i.push("missing=default"),
            (this.headers.Prefer = i.join(",")),
            Array.isArray(e))
          ) {
            const t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              const e = [...new Set(t)].map((e) => '"'.concat(e, '"'));
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new _({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e) {
          let { count: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = [];
          return (
            this.headers.Prefer && n.push(this.headers.Prefer),
            t && n.push("count=".concat(t)),
            (this.headers.Prefer = n.join(",")),
            new _({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete() {
          let { count: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = [];
          return (
            e && t.push("count=".concat(e)),
            this.headers.Prefer && t.unshift(this.headers.Prefer),
            (this.headers.Prefer = t.join(",")),
            new _({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      const S = { "X-Client-Info": "postgrest-js/".concat("1.15.2") };
      class E {
        constructor(e) {
          let {
            headers: t = {},
            schema: n,
            fetch: r,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, S), t)),
            (this.schemaName = n),
            (this.fetch = r);
        }
        from(e) {
          const t = new URL("".concat(this.url, "/").concat(e));
          return new k(t, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new E(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              head: r = !1,
              get: a = !1,
              count: i,
            } = arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {};
          const o = new URL("".concat(this.url, "/rpc/").concat(e));
          let s;
          r || a
            ? ((t = r ? "HEAD" : "GET"),
              Object.entries(n)
                .filter((e) => {
                  let [t, n] = e;
                  return void 0 !== n;
                })
                .map((e) => {
                  let [t, n] = e;
                  return [
                    t,
                    Array.isArray(n)
                      ? "{".concat(n.join(","), "}")
                      : "".concat(n),
                  ];
                })
                .forEach((e) => {
                  let [t, n] = e;
                  o.searchParams.append(t, n);
                }))
            : ((t = "POST"), (s = n));
          const l = Object.assign({}, this.headers);
          return (
            i && (l.Prefer = "count=".concat(i)),
            new _({
              method: t,
              url: o,
              headers: l,
              schema: this.schemaName,
              body: s,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      const x = { "X-Client-Info": "realtime-js/".concat("2.9.5") };
      var T, C, P, O, j, N, R;
      !(function (e) {
        (e[(e.connecting = 0)] = "connecting"),
          (e[(e.open = 1)] = "open"),
          (e[(e.closing = 2)] = "closing"),
          (e[(e.closed = 3)] = "closed");
      })(T || (T = {})),
        (function (e) {
          (e.closed = "closed"),
            (e.errored = "errored"),
            (e.joined = "joined"),
            (e.joining = "joining"),
            (e.leaving = "leaving");
        })(C || (C = {})),
        (function (e) {
          (e.close = "phx_close"),
            (e.error = "phx_error"),
            (e.join = "phx_join"),
            (e.reply = "phx_reply"),
            (e.leave = "phx_leave"),
            (e.access_token = "access_token");
        })(P || (P = {})),
        (function (e) {
          e.websocket = "websocket";
        })(O || (O = {})),
        (function (e) {
          (e.Connecting = "connecting"),
            (e.Open = "open"),
            (e.Closing = "closing"),
            (e.Closed = "closed");
        })(j || (j = {}));
      class L {
        constructor(e, t) {
          (this.callback = e),
            (this.timerCalc = t),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = t);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      }
      class I {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer
            ? t(this._binaryDecode(e))
            : t("string" === typeof e ? JSON.parse(e) : {});
        }
        _binaryDecode(e) {
          const t = new DataView(e),
            n = new TextDecoder();
          return this._decodeBroadcast(e, t, n);
        }
        _decodeBroadcast(e, t, n) {
          const r = t.getUint8(1),
            a = t.getUint8(2);
          let i = this.HEADER_LENGTH + 2;
          const o = n.decode(e.slice(i, i + r));
          i += r;
          const s = n.decode(e.slice(i, i + a));
          i += a;
          return {
            ref: null,
            topic: o,
            event: s,
            payload: JSON.parse(n.decode(e.slice(i, e.byteLength))),
          };
        }
      }
      class A {
        constructor(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1e4;
          (this.channel = e),
            (this.event = t),
            (this.payload = n),
            (this.timeout = r),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel._joinRef(),
            }));
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, t) {
          var n;
          return (
            this._hasReceived(e) &&
              t(
                null === (n = this.receivedResp) || void 0 === n
                  ? void 0
                  : n.response
              ),
            this.recHooks.push({ status: e, callback: t }),
            this
          );
        }
        startTimeout() {
          if (this.timeoutTimer) return;
          (this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref));
          this.channel._on(this.refEvent, {}, (e) => {
            this._cancelRefEvent(),
              this._cancelTimeout(),
              (this.receivedResp = e),
              this._matchReceive(e);
          }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout));
        }
        trigger(e, t) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: t });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive(e) {
          let { status: t, response: n } = e;
          this.recHooks
            .filter((e) => e.status === t)
            .forEach((e) => e.callback(n));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }
      !(function (e) {
        (e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
      })(N || (N = {}));
      class z {
        constructor(e, t) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          const n = (null === t || void 0 === t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(n.state, {}, (e) => {
            const { onJoin: t, onLeave: n, onSync: r } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = z.syncState(this.state, e, t, n)),
              this.pendingDiffs.forEach((e) => {
                this.state = z.syncDiff(this.state, e, t, n);
              }),
              (this.pendingDiffs = []),
              r();
          }),
            this.channel._on(n.diff, {}, (e) => {
              const { onJoin: t, onLeave: n, onSync: r } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = z.syncDiff(this.state, e, t, n)), r());
            }),
            this.onJoin((e, t, n) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: t,
                newPresences: n,
              });
            }),
            this.onLeave((e, t, n) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: t,
                leftPresences: n,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, t, n, r) {
          const a = this.cloneDeep(e),
            i = this.transformState(t),
            o = {},
            s = {};
          return (
            this.map(a, (e, t) => {
              i[e] || (s[e] = t);
            }),
            this.map(i, (e, t) => {
              const n = a[e];
              if (n) {
                const r = t.map((e) => e.presence_ref),
                  a = n.map((e) => e.presence_ref),
                  i = t.filter((e) => a.indexOf(e.presence_ref) < 0),
                  l = n.filter((e) => r.indexOf(e.presence_ref) < 0);
                i.length > 0 && (o[e] = i), l.length > 0 && (s[e] = l);
              } else o[e] = t;
            }),
            this.syncDiff(a, { joins: o, leaves: s }, n, r)
          );
        }
        static syncDiff(e, t, n, r) {
          const { joins: a, leaves: i } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves),
          };
          return (
            n || (n = () => {}),
            r || (r = () => {}),
            this.map(a, (t, r) => {
              var a;
              const i = null !== (a = e[t]) && void 0 !== a ? a : [];
              if (((e[t] = this.cloneDeep(r)), i.length > 0)) {
                const n = e[t].map((e) => e.presence_ref),
                  r = i.filter((e) => n.indexOf(e.presence_ref) < 0);
                e[t].unshift(...r);
              }
              n(t, i, r);
            }),
            this.map(i, (t, n) => {
              let a = e[t];
              if (!a) return;
              const i = n.map((e) => e.presence_ref);
              (a = a.filter((e) => i.indexOf(e.presence_ref) < 0)),
                (e[t] = a),
                r(t, a, n),
                0 === a.length && delete e[t];
            }),
            e
          );
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((n) => t(n, e[n]));
        }
        static transformState(e) {
          return (
            (e = this.cloneDeep(e)),
            Object.getOwnPropertyNames(e).reduce((t, n) => {
              const r = e[n];
              return (
                (t[n] =
                  "metas" in r
                    ? r.metas.map(
                        (e) => (
                          (e.presence_ref = e.phx_ref),
                          delete e.phx_ref,
                          delete e.phx_ref_prev,
                          e
                        )
                      )
                    : r),
                t
              );
            }, {})
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      }
      !(function (e) {
        (e.abstime = "abstime"),
          (e.bool = "bool"),
          (e.date = "date"),
          (e.daterange = "daterange"),
          (e.float4 = "float4"),
          (e.float8 = "float8"),
          (e.int2 = "int2"),
          (e.int4 = "int4"),
          (e.int4range = "int4range"),
          (e.int8 = "int8"),
          (e.int8range = "int8range"),
          (e.json = "json"),
          (e.jsonb = "jsonb"),
          (e.money = "money"),
          (e.numeric = "numeric"),
          (e.oid = "oid"),
          (e.reltime = "reltime"),
          (e.text = "text"),
          (e.time = "time"),
          (e.timestamp = "timestamp"),
          (e.timestamptz = "timestamptz"),
          (e.timetz = "timetz"),
          (e.tsrange = "tsrange"),
          (e.tstzrange = "tstzrange");
      })(R || (R = {}));
      const D = function (e, t) {
          var n;
          const r =
            null !==
              (n = (
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              ).skipTypes) && void 0 !== n
              ? n
              : [];
          return Object.keys(t).reduce(
            (n, a) => ((n[a] = U(a, e, t, r)), n),
            {}
          );
        },
        U = (e, t, n, r) => {
          const a = t.find((t) => t.name === e),
            i = null === a || void 0 === a ? void 0 : a.type,
            o = n[e];
          return i && !r.includes(i) ? F(i, o) : M(o);
        },
        F = (e, t) => {
          if ("_" === e.charAt(0)) {
            const n = e.slice(1, e.length);
            return q(t, n);
          }
          switch (e) {
            case R.bool:
              return B(t);
            case R.float4:
            case R.float8:
            case R.int2:
            case R.int4:
            case R.int8:
            case R.numeric:
            case R.oid:
              return H(t);
            case R.json:
            case R.jsonb:
              return V(t);
            case R.timestamp:
              return W(t);
            case R.abstime:
            case R.date:
            case R.daterange:
            case R.int4range:
            case R.int8range:
            case R.money:
            case R.reltime:
            case R.text:
            case R.time:
            case R.timestamptz:
            case R.timetz:
            case R.tsrange:
            case R.tstzrange:
            default:
              return M(t);
          }
        },
        M = (e) => e,
        B = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        H = (e) => {
          if ("string" === typeof e) {
            const t = parseFloat(e);
            if (!Number.isNaN(t)) return t;
          }
          return e;
        },
        V = (e) => {
          if ("string" === typeof e)
            try {
              return JSON.parse(e);
            } catch (t) {
              return console.log("JSON parse error: ".concat(t)), e;
            }
          return e;
        },
        q = (e, t) => {
          if ("string" !== typeof e) return e;
          const n = e.length - 1,
            r = e[n];
          if ("{" === e[0] && "}" === r) {
            let r;
            const i = e.slice(1, n);
            try {
              r = JSON.parse("[" + i + "]");
            } catch (a) {
              r = i ? i.split(",") : [];
            }
            return r.map((e) => F(t, e));
          }
          return e;
        },
        W = (e) => ("string" === typeof e ? e.replace(" ", "T") : e);
      var $, K, J;
      !(function (e) {
        (e.ALL = "*"),
          (e.INSERT = "INSERT"),
          (e.UPDATE = "UPDATE"),
          (e.DELETE = "DELETE");
      })($ || ($ = {})),
        (function (e) {
          (e.BROADCAST = "broadcast"),
            (e.PRESENCE = "presence"),
            (e.POSTGRES_CHANGES = "postgres_changes");
        })(K || (K = {})),
        (function (e) {
          (e.SUBSCRIBED = "SUBSCRIBED"),
            (e.TIMED_OUT = "TIMED_OUT"),
            (e.CLOSED = "CLOSED"),
            (e.CHANNEL_ERROR = "CHANNEL_ERROR");
        })(J || (J = {}));
      class Q {
        constructor(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { config: {} },
            n = arguments.length > 2 ? arguments[2] : void 0;
          (this.topic = e),
            (this.params = t),
            (this.socket = n),
            (this.bindings = {}),
            (this.state = C.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
              { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
              t.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new A(this, P.join, this.params, this.timeout)),
            (this.rejoinTimer = new L(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = C.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  "close ".concat(this.topic, " ").concat(this._joinRef())
                ),
                (this.state = C.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", "error ".concat(this.topic), e),
                (this.state = C.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  "timeout ".concat(this.topic),
                  this.joinPush.timeout
                ),
                (this.state = C.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(P.reply, {}, (e, t) => {
              this._trigger(this._replyEventName(t), e);
            }),
            (this.presence = new z(this)),
            (this.broadcastEndpointURL = this._broadcastEndpointURL());
        }
        subscribe(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.timeout;
          var n, r;
          if (
            (this.socket.isConnected() || this.socket.connect(),
            this.joinedOnce)
          )
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            const {
              config: { broadcast: a, presence: i },
            } = this.params;
            this._onError((t) => e && e("CHANNEL_ERROR", t)),
              this._onClose(() => e && e("CLOSED"));
            const o = {},
              s = {
                broadcast: a,
                presence: i,
                postgres_changes:
                  null !==
                    (r =
                      null === (n = this.bindings.postgres_changes) ||
                      void 0 === n
                        ? void 0
                        : n.map((e) => e.filter)) && void 0 !== r
                    ? r
                    : [],
              };
            this.socket.accessToken &&
              (o.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: s }, o)),
              (this.joinedOnce = !0),
              this._rejoin(t),
              this.joinPush
                .receive("ok", (t) => {
                  let { postgres_changes: n } = t;
                  var r;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 !== n)
                  ) {
                    const t = this.bindings.postgres_changes,
                      a =
                        null !==
                          (r =
                            null === t || void 0 === t ? void 0 : t.length) &&
                        void 0 !== r
                          ? r
                          : 0,
                      i = [];
                    for (let r = 0; r < a; r++) {
                      const a = t[r],
                        {
                          filter: { event: o, schema: s, table: l, filter: u },
                        } = a,
                        c = n && n[r];
                      if (
                        !c ||
                        c.event !== o ||
                        c.schema !== s ||
                        c.table !== l ||
                        c.filter !== u
                      )
                        return (
                          this.unsubscribe(),
                          void (
                            e &&
                            e(
                              "CHANNEL_ERROR",
                              new Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            )
                          )
                        );
                      i.push(Object.assign(Object.assign({}, a), { id: c.id }));
                    }
                    return (
                      (this.bindings.postgres_changes = i),
                      void (e && e("SUBSCRIBED"))
                    );
                  }
                  e && e("SUBSCRIBED");
                })
                .receive("error", (t) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      new Error(
                        JSON.stringify(Object.values(t).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        async track(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return await this.send(
            { type: "presence", event: "track", payload: e },
            t.timeout || this.timeout
          );
        }
        async untrack() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return await this.send({ type: "presence", event: "untrack" }, e);
        }
        on(e, t, n) {
          return this._on(e, t, n);
        }
        async send(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var n, r;
          if (this._canPush() || "broadcast" !== e.type)
            return new Promise((n) => {
              var r, a, i;
              const o = this._push(e.type, e, t.timeout || this.timeout);
              "broadcast" !== e.type ||
                (null ===
                  (i =
                    null ===
                      (a =
                        null === (r = this.params) || void 0 === r
                          ? void 0
                          : r.config) || void 0 === a
                      ? void 0
                      : a.broadcast) || void 0 === i
                  ? void 0
                  : i.ack) ||
                n("ok"),
                o.receive("ok", () => n("ok")),
                o.receive("error", () => n("error")),
                o.receive("timeout", () => n("timed out"));
            });
          {
            const { event: i, payload: o } = e,
              s = {
                method: "POST",
                headers: {
                  apikey:
                    null !== (n = this.socket.apiKey) && void 0 !== n ? n : "",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [{ topic: this.subTopic, event: i, payload: o }],
                }),
              };
            try {
              return (
                await this._fetchWithTimeout(
                  this.broadcastEndpointURL,
                  s,
                  null !== (r = t.timeout) && void 0 !== r ? r : this.timeout
                )
              ).ok
                ? "ok"
                : "error";
            } catch (a) {
              return "AbortError" === a.name ? "timed out" : "error";
            }
          }
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.timeout;
          this.state = C.leaving;
          const t = () => {
            this.socket.log("channel", "leave ".concat(this.topic)),
              this._trigger(P.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((n) => {
              const r = new A(this, P.leave, {}, e);
              r
                .receive("ok", () => {
                  t(), n("ok");
                })
                .receive("timeout", () => {
                  t(), n("timed out");
                })
                .receive("error", () => {
                  n("error");
                }),
                r.send(),
                this._canPush() || r.trigger("ok", {});
            })
          );
        }
        _broadcastEndpointURL() {
          let e = this.socket.endPoint;
          return (
            (e = e.replace(/^ws/i, "http")),
            (e = e.replace(
              /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
              ""
            )),
            e.replace(/\/+$/, "") + "/api/broadcast"
          );
        }
        async _fetchWithTimeout(e, t, n) {
          const r = new AbortController(),
            a = setTimeout(() => r.abort(), n),
            i = await this.socket.fetch(
              e,
              Object.assign(Object.assign({}, t), { signal: r.signal })
            );
          return clearTimeout(a), i;
        }
        _push(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : this.timeout;
          if (!this.joinedOnce)
            throw "tried to push '"
              .concat(e, "' to '")
              .concat(
                this.topic,
                "' before joining. Use channel.subscribe() before pushing events"
              );
          let r = new A(this, e, t, n);
          return (
            this._canPush()
              ? r.send()
              : (r.startTimeout(), this.pushBuffer.push(r)),
            r
          );
        }
        _onMessage(e, t, n) {
          return t;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, t, n) {
          var r, a;
          const i = e.toLocaleLowerCase(),
            { close: o, error: s, leave: l, join: u } = P;
          if (n && [o, s, l, u].indexOf(i) >= 0 && n !== this._joinRef())
            return;
          let c = this._onMessage(i, t, n);
          if (t && !c)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(i)
            ? null === (r = this.bindings.postgres_changes) ||
              void 0 === r ||
              r
                .filter((e) => {
                  var t, n, r;
                  return (
                    "*" ===
                      (null === (t = e.filter) || void 0 === t
                        ? void 0
                        : t.event) ||
                    (null ===
                      (r =
                        null === (n = e.filter) || void 0 === n
                          ? void 0
                          : n.event) || void 0 === r
                      ? void 0
                      : r.toLocaleLowerCase()) === i
                  );
                })
                .map((e) => e.callback(c, n))
            : null === (a = this.bindings[i]) ||
              void 0 === a ||
              a
                .filter((e) => {
                  var n, r, a, o, s, l;
                  if (
                    ["broadcast", "presence", "postgres_changes"].includes(i)
                  ) {
                    if ("id" in e) {
                      const i = e.id,
                        o =
                          null === (n = e.filter) || void 0 === n
                            ? void 0
                            : n.event;
                      return (
                        i &&
                        (null === (r = t.ids) || void 0 === r
                          ? void 0
                          : r.includes(i)) &&
                        ("*" === o ||
                          (null === o || void 0 === o
                            ? void 0
                            : o.toLocaleLowerCase()) ===
                            (null === (a = t.data) || void 0 === a
                              ? void 0
                              : a.type.toLocaleLowerCase()))
                      );
                    }
                    {
                      const n =
                        null ===
                          (s =
                            null ===
                              (o =
                                null === e || void 0 === e
                                  ? void 0
                                  : e.filter) || void 0 === o
                              ? void 0
                              : o.event) || void 0 === s
                          ? void 0
                          : s.toLocaleLowerCase();
                      return (
                        "*" === n ||
                        n ===
                          (null ===
                            (l =
                              null === t || void 0 === t ? void 0 : t.event) ||
                          void 0 === l
                            ? void 0
                            : l.toLocaleLowerCase())
                      );
                    }
                  }
                  return e.type.toLocaleLowerCase() === i;
                })
                .map((e) => {
                  if ("object" === typeof c && "ids" in c) {
                    const e = c.data,
                      {
                        schema: t,
                        table: n,
                        commit_timestamp: r,
                        type: a,
                        errors: i,
                      } = e,
                      o = {
                        schema: t,
                        table: n,
                        commit_timestamp: r,
                        eventType: a,
                        new: {},
                        old: {},
                        errors: i,
                      };
                    c = Object.assign(
                      Object.assign({}, o),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(c, n);
                });
        }
        _isClosed() {
          return this.state === C.closed;
        }
        _isJoined() {
          return this.state === C.joined;
        }
        _isJoining() {
          return this.state === C.joining;
        }
        _isLeaving() {
          return this.state === C.leaving;
        }
        _replyEventName(e) {
          return "chan_reply_".concat(e);
        }
        _on(e, t, n) {
          const r = e.toLocaleLowerCase(),
            a = { type: r, filter: t, callback: n };
          return (
            this.bindings[r]
              ? this.bindings[r].push(a)
              : (this.bindings[r] = [a]),
            this
          );
        }
        _off(e, t) {
          const n = e.toLocaleLowerCase();
          return (
            (this.bindings[n] = this.bindings[n].filter((e) => {
              var r;
              return !(
                (null === (r = e.type) || void 0 === r
                  ? void 0
                  : r.toLocaleLowerCase()) === n && Q.isEqual(e.filter, t)
              );
            })),
            this
          );
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (const n in e) if (e[n] !== t[n]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(P.close, {}, e);
        }
        _onError(e) {
          this._on(P.error, {}, (t) => e(t));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.timeout;
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = C.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          const t = { new: {}, old: {} };
          return (
            ("INSERT" !== e.type && "UPDATE" !== e.type) ||
              (t.new = D(e.columns, e.record)),
            ("UPDATE" !== e.type && "DELETE" !== e.type) ||
              (t.old = D(e.columns, e.old_record)),
            t
          );
        }
      }
      const G = () => {},
        Y = "undefined" !== typeof WebSocket;
      class X {
        constructor(e, t) {
          var r;
          (this.accessToken = null),
            (this.apiKey = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.headers = x),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = G),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new I()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this._resolveFetch = (e) => {
              let t;
              return (
                (t =
                  e ||
                  ("undefined" === typeof fetch
                    ? function () {
                        for (
                          var e = arguments.length, t = new Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        return Promise.resolve()
                          .then(n.bind(n, 630))
                          .then((e) => {
                            let { default: n } = e;
                            return n(...t);
                          });
                      }
                    : fetch)),
                function () {
                  return t(...arguments);
                }
              );
            }),
            (this.endPoint = "".concat(e, "/").concat(O.websocket)),
            (null === t || void 0 === t ? void 0 : t.transport)
              ? (this.transport = t.transport)
              : (this.transport = null),
            (null === t || void 0 === t ? void 0 : t.params) &&
              (this.params = t.params),
            (null === t || void 0 === t ? void 0 : t.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                t.headers
              )),
            (null === t || void 0 === t ? void 0 : t.timeout) &&
              (this.timeout = t.timeout),
            (null === t || void 0 === t ? void 0 : t.logger) &&
              (this.logger = t.logger),
            (null === t || void 0 === t ? void 0 : t.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
          const a =
            null === (r = null === t || void 0 === t ? void 0 : t.params) ||
            void 0 === r
              ? void 0
              : r.apikey;
          a && ((this.accessToken = a), (this.apiKey = a)),
            (this.reconnectAfterMs = (
              null === t || void 0 === t ? void 0 : t.reconnectAfterMs
            )
              ? t.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null === t || void 0 === t ? void 0 : t.encode)
              ? t.encode
              : (e, t) => t(JSON.stringify(e))),
            (this.decode = (null === t || void 0 === t ? void 0 : t.decode)
              ? t.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new L(async () => {
              this.disconnect(), this.connect();
            }, this.reconnectAfterMs)),
            (this.fetch = this._resolveFetch(
              null === t || void 0 === t ? void 0 : t.fetch
            ));
        }
        connect() {
          if (!this.conn)
            if (this.transport)
              this.conn = new this.transport(this._endPointURL(), void 0, {
                headers: this.headers,
              });
            else {
              if (Y)
                return (
                  (this.conn = new WebSocket(this._endPointURL())),
                  void this.setupConnection()
                );
              (this.conn = new Z(this._endPointURL(), void 0, {
                close: () => {
                  this.conn = null;
                },
              })),
                n
                  .e(952)
                  .then(n.t.bind(n, 952, 23))
                  .then((e) => {
                    let { default: t } = e;
                    (this.conn = new t(this._endPointURL(), void 0, {
                      headers: this.headers,
                    })),
                      this.setupConnection();
                  });
            }
        }
        disconnect(e, t) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e
              ? this.conn.close(e, null !== t && void 0 !== t ? t : "")
              : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        async removeChannel(e) {
          const t = await e.unsubscribe();
          return 0 === this.channels.length && this.disconnect(), t;
        }
        async removeAllChannels() {
          const e = await Promise.all(
            this.channels.map((e) => e.unsubscribe())
          );
          return this.disconnect(), e;
        }
        log(e, t, n) {
          this.logger(e, t, n);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case T.connecting:
              return j.Connecting;
            case T.open:
              return j.Open;
            case T.closing:
              return j.Closing;
            default:
              return j.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === j.Open;
        }
        channel(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { config: {} };
          const n = new Q("realtime:".concat(e), t, this);
          return this.channels.push(n), n;
        }
        push(e) {
          const { topic: t, event: n, payload: r, ref: a } = e,
            i = () => {
              this.encode(e, (e) => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e);
              });
            };
          this.log("push", "".concat(t, " ").concat(n, " (").concat(a, ")"), r),
            this.isConnected() ? i() : this.sendBuffer.push(i);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((t) => {
              e && t.updateJoinPayload({ access_token: e }),
                t.joinedOnce &&
                  t._isJoined() &&
                  t._push(P.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let t = this.channels.find(
            (t) => t.topic === e && (t._isJoined() || t._isJoining())
          );
          t &&
            (this.log("transport", 'leaving duplicate topic "'.concat(e, '"')),
            t.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (t) => t._joinRef() !== e._joinRef()
          );
        }
        setupConnection() {
          this.conn &&
            ((this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (e) => this._onConnError(e)),
            (this.conn.onmessage = (e) => this._onConnMessage(e)),
            (this.conn.onclose = (e) => this._onConnClose(e)));
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: t, event: n, payload: r, ref: a } = e;
            ((a && a === this.pendingHeartbeatRef) ||
              n === (null === r || void 0 === r ? void 0 : r.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                ""
                  .concat(r.status || "", " ")
                  .concat(t, " ")
                  .concat(n, " ")
                  .concat((a && "(" + a + ")") || ""),
                r
              ),
              this.channels
                .filter((e) => e._isMember(t))
                .forEach((e) => e._trigger(n, r, a)),
              this.stateChangeCallbacks.message.forEach((t) => t(e));
          });
        }
        _onConnOpen() {
          this.log("transport", "connected to ".concat(this._endPointURL())),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t) => t(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t) => t(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(P.error));
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          const n = e.match(/\?/) ? "&" : "?",
            r = new URLSearchParams(t);
          return "".concat(e).concat(n).concat(r);
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef)
              return (
                (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                void (
                  null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout")
                )
              );
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
      }
      class Z {
        constructor(e, t, n) {
          (this.binaryType = "arraybuffer"),
            (this.onclose = () => {}),
            (this.onerror = () => {}),
            (this.onmessage = () => {}),
            (this.onopen = () => {}),
            (this.readyState = T.connecting),
            (this.send = () => {}),
            (this.url = null),
            (this.url = e),
            (this.close = n.close);
        }
      }
      class ee extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      }
      function te(e) {
        return "object" === typeof e && null !== e && "__isStorageError" in e;
      }
      class ne extends ee {
        constructor(e, t) {
          super(e), (this.name = "StorageApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class re extends ee {
        constructor(e, t) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = t);
        }
      }
      var ae = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const ie = (e) => {
        let t;
        return (
          (t =
            e ||
            ("undefined" === typeof fetch
              ? function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return Promise.resolve()
                    .then(n.bind(n, 630))
                    .then((e) => {
                      let { default: n } = e;
                      return n(...t);
                    });
                }
              : fetch)),
          function () {
            return t(...arguments);
          }
        );
      };
      var oe = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const se = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        le = (e, t) =>
          oe(void 0, void 0, void 0, function* () {
            const r = yield ae(void 0, void 0, void 0, function* () {
              return "undefined" === typeof Response
                ? (yield Promise.resolve().then(n.bind(n, 630))).Response
                : Response;
            });
            e instanceof r
              ? e
                  .json()
                  .then((n) => {
                    t(new ne(se(n), e.status || 500));
                  })
                  .catch((e) => {
                    t(new re(se(e), e));
                  })
              : t(new re(se(e), e));
          }),
        ue = (e, t, n, r) => {
          const a = {
            method: e,
            headers: (null === t || void 0 === t ? void 0 : t.headers) || {},
          };
          return "GET" === e
            ? a
            : ((a.headers = Object.assign(
                { "Content-Type": "application/json" },
                null === t || void 0 === t ? void 0 : t.headers
              )),
              (a.body = JSON.stringify(r)),
              Object.assign(Object.assign({}, a), n));
        };
      function ce(e, t, n, r, a, i) {
        return oe(this, void 0, void 0, function* () {
          return new Promise((o, s) => {
            e(n, ue(t, r, a, i))
              .then((e) => {
                if (!e.ok) throw e;
                return (null === r || void 0 === r ? void 0 : r.noResolveJson)
                  ? e
                  : e.json();
              })
              .then((e) => o(e))
              .catch((e) => le(e, s));
          });
        });
      }
      function de(e, t, n, r) {
        return oe(this, void 0, void 0, function* () {
          return ce(e, "GET", t, n, r);
        });
      }
      function he(e, t, n, r, a) {
        return oe(this, void 0, void 0, function* () {
          return ce(e, "POST", t, r, a, n);
        });
      }
      function fe(e, t, n, r, a) {
        return oe(this, void 0, void 0, function* () {
          return ce(e, "DELETE", t, r, a, n);
        });
      }
      var pe = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const ge = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        ve = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      class me {
        constructor(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
          (this.url = e),
            (this.headers = t),
            (this.bucketId = n),
            (this.fetch = ie(r));
        }
        uploadOrUpdate(e, t, n, r) {
          return pe(this, void 0, void 0, function* () {
            try {
              let a;
              const i = Object.assign(Object.assign({}, ve), r),
                o = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(i.upsert) }
                );
              "undefined" !== typeof Blob && n instanceof Blob
                ? ((a = new FormData()),
                  a.append("cacheControl", i.cacheControl),
                  a.append("", n))
                : "undefined" !== typeof FormData && n instanceof FormData
                ? ((a = n), a.append("cacheControl", i.cacheControl))
                : ((a = n),
                  (o["cache-control"] = "max-age=".concat(i.cacheControl)),
                  (o["content-type"] = i.contentType));
              const s = this._removeEmptyFolders(t),
                l = this._getFinalPath(s),
                u = yield this.fetch(
                  "".concat(this.url, "/object/").concat(l),
                  Object.assign(
                    { method: e, body: a, headers: o },
                    (null === i || void 0 === i ? void 0 : i.duplex)
                      ? { duplex: i.duplex }
                      : {}
                  )
                ),
                c = yield u.json();
              if (u.ok)
                return {
                  data: { path: s, id: c.Id, fullPath: c.Key },
                  error: null,
                };
              return { data: null, error: c };
            } catch (a) {
              if (te(a)) return { data: null, error: a };
              throw a;
            }
          });
        }
        upload(e, t, n) {
          return pe(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, n);
          });
        }
        uploadToSignedUrl(e, t, n, r) {
          return pe(this, void 0, void 0, function* () {
            const a = this._removeEmptyFolders(e),
              i = this._getFinalPath(a),
              o = new URL(this.url + "/object/upload/sign/".concat(i));
            o.searchParams.set("token", t);
            try {
              let e;
              const t = Object.assign({ upsert: ve.upsert }, r),
                i = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(t.upsert),
                });
              "undefined" !== typeof Blob && n instanceof Blob
                ? ((e = new FormData()),
                  e.append("cacheControl", t.cacheControl),
                  e.append("", n))
                : "undefined" !== typeof FormData && n instanceof FormData
                ? ((e = n), e.append("cacheControl", t.cacheControl))
                : ((e = n),
                  (i["cache-control"] = "max-age=".concat(t.cacheControl)),
                  (i["content-type"] = t.contentType));
              const s = yield this.fetch(o.toString(), {
                  method: "PUT",
                  body: e,
                  headers: i,
                }),
                l = yield s.json();
              if (s.ok)
                return { data: { path: a, fullPath: l.Key }, error: null };
              return { data: null, error: l };
            } catch (s) {
              if (te(s)) return { data: null, error: s };
              throw s;
            }
          });
        }
        createSignedUploadUrl(e) {
          return pe(this, void 0, void 0, function* () {
            try {
              let t = this._getFinalPath(e);
              const n = yield he(
                  this.fetch,
                  "".concat(this.url, "/object/upload/sign/").concat(t),
                  {},
                  { headers: this.headers }
                ),
                r = new URL(this.url + n.url),
                a = r.searchParams.get("token");
              if (!a) throw new ee("No token returned by API");
              return {
                data: { signedUrl: r.toString(), path: e, token: a },
                error: null,
              };
            } catch (t) {
              if (te(t)) return { data: null, error: t };
              throw t;
            }
          });
        }
        update(e, t, n) {
          return pe(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, n);
          });
        }
        move(e, t) {
          return pe(this, void 0, void 0, function* () {
            try {
              return {
                data: yield he(
                  this.fetch,
                  "".concat(this.url, "/object/move"),
                  { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (n) {
              if (te(n)) return { data: null, error: n };
              throw n;
            }
          });
        }
        copy(e, t) {
          return pe(this, void 0, void 0, function* () {
            try {
              return {
                data: {
                  path: (yield he(
                    this.fetch,
                    "".concat(this.url, "/object/copy"),
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                    },
                    { headers: this.headers }
                  )).Key,
                },
                error: null,
              };
            } catch (n) {
              if (te(n)) return { data: null, error: n };
              throw n;
            }
          });
        }
        createSignedUrl(e, t, n) {
          return pe(this, void 0, void 0, function* () {
            try {
              let r = this._getFinalPath(e),
                a = yield he(
                  this.fetch,
                  "".concat(this.url, "/object/sign/").concat(r),
                  Object.assign(
                    { expiresIn: t },
                    (null === n || void 0 === n ? void 0 : n.transform)
                      ? { transform: n.transform }
                      : {}
                  ),
                  { headers: this.headers }
                );
              const i = (null === n || void 0 === n ? void 0 : n.download)
                ? "&download=".concat(!0 === n.download ? "" : n.download)
                : "";
              return (
                (a = {
                  signedUrl: encodeURI(
                    "".concat(this.url).concat(a.signedURL).concat(i)
                  ),
                }),
                { data: a, error: null }
              );
            } catch (r) {
              if (te(r)) return { data: null, error: r };
              throw r;
            }
          });
        }
        createSignedUrls(e, t, n) {
          return pe(this, void 0, void 0, function* () {
            try {
              const r = yield he(
                  this.fetch,
                  "".concat(this.url, "/object/sign/").concat(this.bucketId),
                  { expiresIn: t, paths: e },
                  { headers: this.headers }
                ),
                a = (null === n || void 0 === n ? void 0 : n.download)
                  ? "&download=".concat(!0 === n.download ? "" : n.download)
                  : "";
              return {
                data: r.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(
                          "".concat(this.url).concat(e.signedURL).concat(a)
                        )
                      : null,
                  })
                ),
                error: null,
              };
            } catch (r) {
              if (te(r)) return { data: null, error: r };
              throw r;
            }
          });
        }
        download(e, t) {
          return pe(this, void 0, void 0, function* () {
            const n =
                "undefined" !==
                typeof (null === t || void 0 === t ? void 0 : t.transform)
                  ? "render/image/authenticated"
                  : "object",
              r = this.transformOptsToQueryString(
                (null === t || void 0 === t ? void 0 : t.transform) || {}
              ),
              a = r ? "?".concat(r) : "";
            try {
              const t = this._getFinalPath(e),
                r = yield de(
                  this.fetch,
                  "".concat(this.url, "/").concat(n, "/").concat(t).concat(a),
                  { headers: this.headers, noResolveJson: !0 }
                );
              return { data: yield r.blob(), error: null };
            } catch (i) {
              if (te(i)) return { data: null, error: i };
              throw i;
            }
          });
        }
        getPublicUrl(e, t) {
          const n = this._getFinalPath(e),
            r = [],
            a = (null === t || void 0 === t ? void 0 : t.download)
              ? "download=".concat(!0 === t.download ? "" : t.download)
              : "";
          "" !== a && r.push(a);
          const i =
              "undefined" !==
              typeof (null === t || void 0 === t ? void 0 : t.transform)
                ? "render/image"
                : "object",
            o = this.transformOptsToQueryString(
              (null === t || void 0 === t ? void 0 : t.transform) || {}
            );
          "" !== o && r.push(o);
          let s = r.join("&");
          return (
            "" !== s && (s = "?".concat(s)),
            {
              data: {
                publicUrl: encodeURI(
                  ""
                    .concat(this.url, "/")
                    .concat(i, "/public/")
                    .concat(n)
                    .concat(s)
                ),
              },
            }
          );
        }
        remove(e) {
          return pe(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fe(
                  this.fetch,
                  "".concat(this.url, "/object/").concat(this.bucketId),
                  { prefixes: e },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (t) {
              if (te(t)) return { data: null, error: t };
              throw t;
            }
          });
        }
        list(e, t, n) {
          return pe(this, void 0, void 0, function* () {
            try {
              const r = Object.assign(Object.assign(Object.assign({}, ge), t), {
                prefix: e || "",
              });
              return {
                data: yield he(
                  this.fetch,
                  "".concat(this.url, "/object/list/").concat(this.bucketId),
                  r,
                  { headers: this.headers },
                  n
                ),
                error: null,
              };
            } catch (r) {
              if (te(r)) return { data: null, error: r };
              throw r;
            }
          });
        }
        _getFinalPath(e) {
          return "".concat(this.bucketId, "/").concat(e);
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          const t = [];
          return (
            e.width && t.push("width=".concat(e.width)),
            e.height && t.push("height=".concat(e.height)),
            e.resize && t.push("resize=".concat(e.resize)),
            e.format && t.push("format=".concat(e.format)),
            e.quality && t.push("quality=".concat(e.quality)),
            t.join("&")
          );
        }
      }
      const ye = { "X-Client-Info": "storage-js/".concat("2.5.5") };
      var be = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class we {
        constructor(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, ye), t)),
            (this.fetch = ie(n));
        }
        listBuckets() {
          return be(this, void 0, void 0, function* () {
            try {
              return {
                data: yield de(this.fetch, "".concat(this.url, "/bucket"), {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (te(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return be(this, void 0, void 0, function* () {
            try {
              return {
                data: yield de(
                  this.fetch,
                  "".concat(this.url, "/bucket/").concat(e),
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (t) {
              if (te(t)) return { data: null, error: t };
              throw t;
            }
          });
        }
        createBucket(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { public: !1 };
          return be(this, void 0, void 0, function* () {
            try {
              return {
                data: yield he(
                  this.fetch,
                  "".concat(this.url, "/bucket"),
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (n) {
              if (te(n)) return { data: null, error: n };
              throw n;
            }
          });
        }
        updateBucket(e, t) {
          return be(this, void 0, void 0, function* () {
            try {
              const n = yield (function (e, t, n, r, a) {
                return oe(this, void 0, void 0, function* () {
                  return ce(e, "PUT", t, r, a, n);
                });
              })(
                this.fetch,
                "".concat(this.url, "/bucket/").concat(e),
                {
                  id: e,
                  name: e,
                  public: t.public,
                  file_size_limit: t.fileSizeLimit,
                  allowed_mime_types: t.allowedMimeTypes,
                },
                { headers: this.headers }
              );
              return { data: n, error: null };
            } catch (n) {
              if (te(n)) return { data: null, error: n };
              throw n;
            }
          });
        }
        emptyBucket(e) {
          return be(this, void 0, void 0, function* () {
            try {
              return {
                data: yield he(
                  this.fetch,
                  "".concat(this.url, "/bucket/").concat(e, "/empty"),
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (t) {
              if (te(t)) return { data: null, error: t };
              throw t;
            }
          });
        }
        deleteBucket(e) {
          return be(this, void 0, void 0, function* () {
            try {
              return {
                data: yield fe(
                  this.fetch,
                  "".concat(this.url, "/bucket/").concat(e),
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (t) {
              if (te(t)) return { data: null, error: t };
              throw t;
            }
          });
        }
      }
      class _e extends we {
        constructor(e) {
          super(
            e,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            arguments.length > 2 ? arguments[2] : void 0
          );
        }
        from(e) {
          return new me(this.url, this.headers, e, this.fetch);
        }
      }
      let ke = "";
      ke =
        "undefined" !== typeof Deno
          ? "deno"
          : "undefined" !== typeof document
          ? "web"
          : "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product
          ? "react-native"
          : "node";
      const Se = {
          headers: {
            "X-Client-Info": "supabase-js-".concat(ke, "/").concat("2.43.4"),
          },
        },
        Ee = { schema: "public" },
        xe = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        Te = {};
      var Ce = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      const Pe = (e) => {
          let t;
          return (
            (t = e || ("undefined" === typeof fetch ? m.default : fetch)),
            function () {
              return t(...arguments);
            }
          );
        },
        Oe = (e, t, n) => {
          const r = Pe(n),
            a = "undefined" === typeof Headers ? m.Headers : Headers;
          return (n, i) =>
            Ce(void 0, void 0, void 0, function* () {
              var o;
              const s = null !== (o = yield t()) && void 0 !== o ? o : e;
              let l = new a(null === i || void 0 === i ? void 0 : i.headers);
              return (
                l.has("apikey") || l.set("apikey", e),
                l.has("Authorization") ||
                  l.set("Authorization", "Bearer ".concat(s)),
                r(n, Object.assign(Object.assign({}, i), { headers: l }))
              );
            });
        };
      const je = "2.64.2",
        Ne = { "X-Client-Info": "gotrue-js/".concat(je) },
        Re = "X-Supabase-Api-Version",
        Le = {
          "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01",
          },
        };
      const Ie = () => "undefined" !== typeof document,
        Ae = { tested: !1, writable: !1 },
        ze = () => {
          if (!Ie()) return !1;
          try {
            if ("object" !== typeof globalThis.localStorage) return !1;
          } catch (t) {
            return !1;
          }
          if (Ae.tested) return Ae.writable;
          const e = "lswt-".concat(Math.random()).concat(Math.random());
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (Ae.tested = !0),
              (Ae.writable = !0);
          } catch (t) {
            (Ae.tested = !0), (Ae.writable = !1);
          }
          return Ae.writable;
        };
      function De(e) {
        const t = {},
          n = new URL(e);
        if (n.hash && "#" === n.hash[0])
          try {
            new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
              t[n] = e;
            });
          } catch (r) {}
        return (
          n.searchParams.forEach((e, n) => {
            t[n] = e;
          }),
          t
        );
      }
      const Ue = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" === typeof fetch
                ? function () {
                    for (
                      var e = arguments.length, t = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      t[r] = arguments[r];
                    return Promise.resolve()
                      .then(n.bind(n, 630))
                      .then((e) => {
                        let { default: n } = e;
                        return n(...t);
                      });
                  }
                : fetch)),
            function () {
              return t(...arguments);
            }
          );
        },
        Fe = (e) =>
          "object" === typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" === typeof e.json,
        Me = async (e, t, n) => {
          await e.setItem(t, JSON.stringify(n));
        },
        Be = async (e, t) => {
          const n = await e.getItem(t);
          if (!n) return null;
          try {
            return JSON.parse(n);
          } catch (r) {
            return n;
          }
        },
        He = async (e, t) => {
          await e.removeItem(t);
        };
      class Ve {
        constructor() {
          this.promise = new Ve.promiseConstructor((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      function qe(e) {
        const t = e.split(".");
        if (3 !== t.length)
          throw new Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            t[1]
          )
        )
          throw new Error(
            "JWT is not valid: payload is not in base64url format"
          );
        const n = t[1];
        return JSON.parse(
          (function (e) {
            const t =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let n,
              r,
              a,
              i,
              o,
              s,
              l,
              u = "",
              c = 0;
            for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
              (i = t.indexOf(e.charAt(c++))),
                (o = t.indexOf(e.charAt(c++))),
                (s = t.indexOf(e.charAt(c++))),
                (l = t.indexOf(e.charAt(c++))),
                (n = (i << 2) | (o >> 4)),
                (r = ((15 & o) << 4) | (s >> 2)),
                (a = ((3 & s) << 6) | l),
                (u += String.fromCharCode(n)),
                64 != s && 0 != r && (u += String.fromCharCode(r)),
                64 != l && 0 != a && (u += String.fromCharCode(a));
            return u;
          })(n)
        );
      }
      function We(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      async function $e(e) {
        if (
          !(
            "undefined" !== typeof crypto &&
            "undefined" !== typeof crypto.subtle &&
            "undefined" !== typeof TextEncoder
          )
        )
          return (
            console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e
          );
        const t = await (async function (e) {
          const t = new TextEncoder().encode(e),
            n = await crypto.subtle.digest("SHA-256", t),
            r = new Uint8Array(n);
          return Array.from(r)
            .map((e) => String.fromCharCode(e))
            .join("");
        })(e);
        return btoa(t)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      }
      async function Ke(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = (function () {
          const e = new Uint32Array(56);
          if ("undefined" === typeof crypto) {
            const e =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
              t = e.length;
            let n = "";
            for (let r = 0; r < 56; r++)
              n += e.charAt(Math.floor(Math.random() * t));
            return n;
          }
          return crypto.getRandomValues(e), Array.from(e, We).join("");
        })();
        let a = r;
        n && (a += "/PASSWORD_RECOVERY"),
          await Me(e, "".concat(t, "-code-verifier"), a);
        const i = await $e(r);
        return [i, r === i ? "plain" : "s256"];
      }
      Ve.promiseConstructor = Promise;
      const Je = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
      class Qe extends Error {
        constructor(e, t, n) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = t),
            (this.code = n);
        }
      }
      function Ge(e) {
        return "object" === typeof e && null !== e && "__isAuthError" in e;
      }
      class Ye extends Qe {
        constructor(e, t, n) {
          super(e, t, n),
            (this.name = "AuthApiError"),
            (this.status = t),
            (this.code = n);
        }
      }
      class Xe extends Qe {
        constructor(e, t) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
        }
      }
      class Ze extends Qe {
        constructor(e, t, n, r) {
          super(e, n, r), (this.name = t), (this.status = n);
        }
      }
      class et extends Ze {
        constructor() {
          super(
            "Auth session missing!",
            "AuthSessionMissingError",
            400,
            void 0
          );
        }
      }
      class tt extends Ze {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500,
            void 0
          );
        }
      }
      class nt extends Ze {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400, void 0);
        }
      }
      class rt extends Ze {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          super(e, "AuthImplicitGrantRedirectError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class at extends Ze {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class it extends Ze {
        constructor(e, t) {
          super(e, "AuthRetryableFetchError", t, void 0);
        }
      }
      function ot(e) {
        return Ge(e) && "AuthRetryableFetchError" === e.name;
      }
      class st extends Ze {
        constructor(e, t, n) {
          super(e, "AuthWeakPasswordError", t, "weak_password"),
            (this.reasons = n);
        }
      }
      var lt = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      };
      const ut = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        ct = [502, 503, 504];
      async function dt(e) {
        var t;
        if (!Fe(e)) throw new it(ut(e), 0);
        if (ct.includes(e.status)) throw new it(ut(e), e.status);
        let n, r;
        try {
          n = await e.json();
        } catch (i) {
          throw new Xe(ut(i), i);
        }
        const a = (function (e) {
          const t = e.headers.get(Re);
          if (!t) return null;
          if (!t.match(Je)) return null;
          try {
            return new Date("".concat(t, "T00:00:00.0Z"));
          } catch (i) {
            return null;
          }
        })(e);
        if (
          (a &&
          a.getTime() >= Le["2024-01-01"].timestamp &&
          "object" === typeof n &&
          n &&
          "string" === typeof n.code
            ? (r = n.code)
            : "object" === typeof n &&
              n &&
              "string" === typeof n.error_code &&
              (r = n.error_code),
          r)
        ) {
          if ("weak_password" === r)
            throw new st(
              ut(n),
              e.status,
              (null === (t = n.weak_password) || void 0 === t
                ? void 0
                : t.reasons) || []
            );
        } else if (
          "object" === typeof n &&
          n &&
          "object" === typeof n.weak_password &&
          n.weak_password &&
          Array.isArray(n.weak_password.reasons) &&
          n.weak_password.reasons.length &&
          n.weak_password.reasons.reduce(
            (e, t) => e && "string" === typeof t,
            !0
          )
        )
          throw new st(ut(n), e.status, n.weak_password.reasons);
        throw new Ye(ut(n), e.status || 500, r);
      }
      const ht = (e, t, n, r) => {
        const a = {
          method: e,
          headers: (null === t || void 0 === t ? void 0 : t.headers) || {},
        };
        return "GET" === e
          ? a
          : ((a.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null === t || void 0 === t ? void 0 : t.headers
            )),
            (a.body = JSON.stringify(r)),
            Object.assign(Object.assign({}, a), n));
      };
      async function ft(e, t, n, r) {
        var a;
        const i = Object.assign(
          {},
          null === r || void 0 === r ? void 0 : r.headers
        );
        i[Re] || (i[Re] = Le["2024-01-01"].name),
          (null === r || void 0 === r ? void 0 : r.jwt) &&
            (i.Authorization = "Bearer ".concat(r.jwt));
        const o =
          null !== (a = null === r || void 0 === r ? void 0 : r.query) &&
          void 0 !== a
            ? a
            : {};
        (null === r || void 0 === r ? void 0 : r.redirectTo) &&
          (o.redirect_to = r.redirectTo);
        const s = Object.keys(o).length
            ? "?" + new URLSearchParams(o).toString()
            : "",
          l = await (async function (e, t, n, r, a, i) {
            const o = ht(t, r, a, i);
            let s;
            try {
              s = await e(n, Object.assign({}, o));
            } catch (l) {
              throw (console.error(l), new it(ut(l), 0));
            }
            s.ok || (await dt(s));
            if (null === r || void 0 === r ? void 0 : r.noResolveJson) return s;
            try {
              return await s.json();
            } catch (l) {
              await dt(l);
            }
          })(
            e,
            t,
            n + s,
            {
              headers: i,
              noResolveJson:
                null === r || void 0 === r ? void 0 : r.noResolveJson,
            },
            {},
            null === r || void 0 === r ? void 0 : r.body
          );
        return (null === r || void 0 === r ? void 0 : r.xform)
          ? null === r || void 0 === r
            ? void 0
            : r.xform(l)
          : { data: Object.assign({}, l), error: null };
      }
      function pt(e) {
        var t;
        let n = null;
        var r;
        (function (e) {
          return e.access_token && e.refresh_token && e.expires_in;
        })(e) &&
          ((n = Object.assign({}, e)),
          e.expires_at ||
            (n.expires_at =
              ((r = e.expires_in), Math.round(Date.now() / 1e3) + r)));
        return {
          data: {
            session: n,
            user: null !== (t = e.user) && void 0 !== t ? t : e,
          },
          error: null,
        };
      }
      function gt(e) {
        const t = pt(e);
        return (
          !t.error &&
            e.weak_password &&
            "object" === typeof e.weak_password &&
            Array.isArray(e.weak_password.reasons) &&
            e.weak_password.reasons.length &&
            e.weak_password.message &&
            "string" === typeof e.weak_password.message &&
            e.weak_password.reasons.reduce(
              (e, t) => e && "string" === typeof t,
              !0
            ) &&
            (t.data.weak_password = e.weak_password),
          t
        );
      }
      function vt(e) {
        var t;
        return {
          data: { user: null !== (t = e.user) && void 0 !== t ? t : e },
          error: null,
        };
      }
      function mt(e) {
        return { data: e, error: null };
      }
      function yt(e) {
        const {
            action_link: t,
            email_otp: n,
            hashed_token: r,
            redirect_to: a,
            verification_type: i,
          } = e,
          o = lt(e, [
            "action_link",
            "email_otp",
            "hashed_token",
            "redirect_to",
            "verification_type",
          ]);
        return {
          data: {
            properties: {
              action_link: t,
              email_otp: n,
              hashed_token: r,
              redirect_to: a,
              verification_type: i,
            },
            user: Object.assign({}, o),
          },
          error: null,
        };
      }
      function bt(e) {
        return e;
      }
      var wt = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      };
      class _t {
        constructor(e) {
          let { url: t = "", headers: n = {}, fetch: r } = e;
          (this.url = t),
            (this.headers = n),
            (this.fetch = Ue(r)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "global";
          try {
            return (
              await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/logout?scope=").concat(t),
                { headers: this.headers, jwt: e, noResolveJson: !0 }
              ),
              { data: null, error: null }
            );
          } catch (n) {
            if (Ge(n)) return { data: null, error: n };
            throw n;
          }
        }
        async inviteUserByEmail(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            return await ft(
              this.fetch,
              "POST",
              "".concat(this.url, "/invite"),
              {
                body: { email: e, data: t.data },
                headers: this.headers,
                redirectTo: t.redirectTo,
                xform: vt,
              }
            );
          } catch (n) {
            if (Ge(n)) return { data: { user: null }, error: n };
            throw n;
          }
        }
        async generateLink(e) {
          try {
            const { options: t } = e,
              n = wt(e, ["options"]),
              r = Object.assign(Object.assign({}, n), t);
            return (
              "newEmail" in n &&
                ((r.new_email =
                  null === n || void 0 === n ? void 0 : n.newEmail),
                delete r.newEmail),
              await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/admin/generate_link"),
                {
                  body: r,
                  headers: this.headers,
                  xform: yt,
                  redirectTo:
                    null === t || void 0 === t ? void 0 : t.redirectTo,
                }
              )
            );
          } catch (t) {
            if (Ge(t))
              return { data: { properties: null, user: null }, error: t };
            throw t;
          }
        }
        async createUser(e) {
          try {
            return await ft(
              this.fetch,
              "POST",
              "".concat(this.url, "/admin/users"),
              { body: e, headers: this.headers, xform: vt }
            );
          } catch (t) {
            if (Ge(t)) return { data: { user: null }, error: t };
            throw t;
          }
        }
        async listUsers(e) {
          var t, n, r, a, i, o, s;
          try {
            const l = { nextPage: null, lastPage: 0, total: 0 },
              u = await ft(
                this.fetch,
                "GET",
                "".concat(this.url, "/admin/users"),
                {
                  headers: this.headers,
                  noResolveJson: !0,
                  query: {
                    page:
                      null !==
                        (n =
                          null ===
                            (t =
                              null === e || void 0 === e ? void 0 : e.page) ||
                          void 0 === t
                            ? void 0
                            : t.toString()) && void 0 !== n
                        ? n
                        : "",
                    per_page:
                      null !==
                        (a =
                          null ===
                            (r =
                              null === e || void 0 === e
                                ? void 0
                                : e.perPage) || void 0 === r
                            ? void 0
                            : r.toString()) && void 0 !== a
                        ? a
                        : "",
                  },
                  xform: bt,
                }
              );
            if (u.error) throw u.error;
            const c = await u.json(),
              d =
                null !== (i = u.headers.get("x-total-count")) && void 0 !== i
                  ? i
                  : 0,
              h =
                null !==
                  (s =
                    null === (o = u.headers.get("link")) || void 0 === o
                      ? void 0
                      : o.split(",")) && void 0 !== s
                  ? s
                  : [];
            return (
              h.length > 0 &&
                (h.forEach((e) => {
                  const t = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    n = JSON.parse(e.split(";")[1].split("=")[1]);
                  l["".concat(n, "Page")] = t;
                }),
                (l.total = parseInt(d))),
              { data: Object.assign(Object.assign({}, c), l), error: null }
            );
          } catch (l) {
            if (Ge(l)) return { data: { users: [] }, error: l };
            throw l;
          }
        }
        async getUserById(e) {
          try {
            return await ft(
              this.fetch,
              "GET",
              "".concat(this.url, "/admin/users/").concat(e),
              { headers: this.headers, xform: vt }
            );
          } catch (t) {
            if (Ge(t)) return { data: { user: null }, error: t };
            throw t;
          }
        }
        async updateUserById(e, t) {
          try {
            return await ft(
              this.fetch,
              "PUT",
              "".concat(this.url, "/admin/users/").concat(e),
              { body: t, headers: this.headers, xform: vt }
            );
          } catch (n) {
            if (Ge(n)) return { data: { user: null }, error: n };
            throw n;
          }
        }
        async deleteUser(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          try {
            return await ft(
              this.fetch,
              "DELETE",
              "".concat(this.url, "/admin/users/").concat(e),
              {
                headers: this.headers,
                body: { should_soft_delete: t },
                xform: vt,
              }
            );
          } catch (n) {
            if (Ge(n)) return { data: { user: null }, error: n };
            throw n;
          }
        }
        async _listFactors(e) {
          try {
            const { data: t, error: n } = await ft(
              this.fetch,
              "GET",
              "".concat(this.url, "/admin/users/").concat(e.userId, "/factors"),
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: t, error: n };
          } catch (t) {
            if (Ge(t)) return { data: null, error: t };
            throw t;
          }
        }
        async _deleteFactor(e) {
          try {
            return {
              data: await ft(
                this.fetch,
                "DELETE",
                ""
                  .concat(this.url, "/admin/users/")
                  .concat(e.userId, "/factors/")
                  .concat(e.id),
                { headers: this.headers }
              ),
              error: null,
            };
          } catch (t) {
            if (Ge(t)) return { data: null, error: t };
            throw t;
          }
        }
      }
      const kt = {
        getItem: (e) => (ze() ? globalThis.localStorage.getItem(e) : null),
        setItem: (e, t) => {
          ze() && globalThis.localStorage.setItem(e, t);
        },
        removeItem: (e) => {
          ze() && globalThis.localStorage.removeItem(e);
        },
      };
      function St() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          getItem: (t) => e[t] || null,
          setItem: (t, n) => {
            e[t] = n;
          },
          removeItem: (t) => {
            delete e[t];
          },
        };
      }
      const Et = !!(
        globalThis &&
        ze() &&
        globalThis.localStorage &&
        "true" ===
          globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")
      );
      class xt extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      }
      class Tt extends xt {}
      async function Ct(e, t, n) {
        Et &&
          console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
        const r = new globalThis.AbortController();
        return (
          t > 0 &&
            setTimeout(() => {
              r.abort(),
                Et &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock acquire timed out",
                    e
                  );
            }, t),
          await globalThis.navigator.locks.request(
            e,
            0 === t
              ? { mode: "exclusive", ifAvailable: !0 }
              : { mode: "exclusive", signal: r.signal },
            async (r) => {
              if (!r) {
                if (0 === t)
                  throw (
                    (Et &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: not immediately available",
                        e
                      ),
                    new Tt(
                      'Acquiring an exclusive Navigator LockManager lock "'.concat(
                        e,
                        '" immediately failed'
                      )
                    ))
                  );
                if (Et)
                  try {
                    const e = await globalThis.navigator.locks.query();
                    console.log(
                      "@supabase/gotrue-js: Navigator LockManager state",
                      JSON.stringify(e, null, "  ")
                    );
                  } catch (a) {
                    console.warn(
                      "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                      a
                    );
                  }
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                  ),
                  await n()
                );
              }
              Et &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: acquired",
                  e,
                  r.name
                );
              try {
                return await n();
              } finally {
                Et &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: released",
                    e,
                    r.name
                  );
              }
            }
          )
        );
      }
      !(function () {
        if ("object" !== typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" !== typeof self && (self.globalThis = self);
          }
      })();
      const Pt = {
          url: "http://localhost:9999",
          storageKey: "supabase.auth.token",
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          headers: Ne,
          flowType: "implicit",
          debug: !1,
          hasCustomAuthorizationHeader: !1,
        },
        Ot = 3e4;
      async function jt(e, t, n) {
        return await n();
      }
      class Nt {
        constructor(e) {
          var t, n;
          (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.hasCustomAuthorizationHeader = !1),
            (this.suppressGetSessionWarning = !1),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = Nt.nextInstanceID),
            (Nt.nextInstanceID += 1),
            this.instanceID > 0 &&
              Ie() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          const r = Object.assign(Object.assign({}, Pt), e);
          if (
            ((this.logDebugMessages = !!r.debug),
            "function" === typeof r.debug && (this.logger = r.debug),
            (this.persistSession = r.persistSession),
            (this.storageKey = r.storageKey),
            (this.autoRefreshToken = r.autoRefreshToken),
            (this.admin = new _t({
              url: r.url,
              headers: r.headers,
              fetch: r.fetch,
            })),
            (this.url = r.url),
            (this.headers = r.headers),
            (this.fetch = Ue(r.fetch)),
            (this.lock = r.lock || jt),
            (this.detectSessionInUrl = r.detectSessionInUrl),
            (this.flowType = r.flowType),
            (this.hasCustomAuthorizationHeader =
              r.hasCustomAuthorizationHeader),
            r.lock
              ? (this.lock = r.lock)
              : Ie() &&
                (null ===
                  (t =
                    null === globalThis || void 0 === globalThis
                      ? void 0
                      : globalThis.navigator) || void 0 === t
                  ? void 0
                  : t.locks)
              ? (this.lock = Ct)
              : (this.lock = jt),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
              ? r.storage
                ? (this.storage = r.storage)
                : ze()
                ? (this.storage = kt)
                : ((this.memoryStorage = {}),
                  (this.storage = St(this.memoryStorage)))
              : ((this.memoryStorage = {}),
                (this.storage = St(this.memoryStorage))),
            Ie() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (a) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                a
              );
            }
            null === (n = this.broadcastChannel) ||
              void 0 === n ||
              n.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug() {
          if (this.logDebugMessages) {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            this.logger(
              "GoTrueClient@"
                .concat(this.instanceID, " (")
                .concat(je, ") ")
                .concat(new Date().toISOString()),
              ...t
            );
          }
          return this;
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            const e = !!Ie() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              const { data: t, error: n } = await this._getSessionFromURL(e);
              if (n)
                return (
                  this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    n
                  ),
                  "Identity is already linked" ===
                    (null === n || void 0 === n ? void 0 : n.message) ||
                    "Identity is already linked to another user" ===
                      (null === n || void 0 === n ? void 0 : n.message) ||
                    (await this._removeSession()),
                  { error: n }
                );
              const { session: r, redirectType: a } = t;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  r,
                  "redirect type",
                  a
                ),
                await this._saveSession(r),
                setTimeout(async () => {
                  "recovery" === a
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", r)
                    : await this._notifyAllSubscribers("SIGNED_IN", r);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            return Ge(e)
              ? { error: e }
              : { error: new Xe("Unexpected error during initialization", e) };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signInAnonymously(e) {
          var t, n, r;
          try {
            await this._removeSession();
            const a = await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/signup"),
                {
                  headers: this.headers,
                  body: {
                    data:
                      null !==
                        (n =
                          null ===
                            (t =
                              null === e || void 0 === e
                                ? void 0
                                : e.options) || void 0 === t
                            ? void 0
                            : t.data) && void 0 !== n
                        ? n
                        : {},
                    gotrue_meta_security: {
                      captcha_token:
                        null ===
                          (r =
                            null === e || void 0 === e ? void 0 : e.options) ||
                        void 0 === r
                          ? void 0
                          : r.captchaToken,
                    },
                  },
                  xform: pt,
                }
              ),
              { data: i, error: o } = a;
            if (o || !i)
              return { data: { user: null, session: null }, error: o };
            const s = i.session,
              l = i.user;
            return (
              i.session &&
                (await this._saveSession(i.session),
                await this._notifyAllSubscribers("SIGNED_IN", s)),
              { data: { user: l, session: s }, error: null }
            );
          } catch (a) {
            if (Ge(a)) return { data: { user: null, session: null }, error: a };
            throw a;
          }
        }
        async signUp(e) {
          var t, n, r;
          try {
            let a;
            if ((await this._removeSession(), "email" in e)) {
              const { email: n, password: r, options: i } = e;
              let o = null,
                s = null;
              "pkce" === this.flowType &&
                ([o, s] = await Ke(this.storage, this.storageKey)),
                (a = await ft(
                  this.fetch,
                  "POST",
                  "".concat(this.url, "/signup"),
                  {
                    headers: this.headers,
                    redirectTo:
                      null === i || void 0 === i ? void 0 : i.emailRedirectTo,
                    body: {
                      email: n,
                      password: r,
                      data:
                        null !==
                          (t = null === i || void 0 === i ? void 0 : i.data) &&
                        void 0 !== t
                          ? t
                          : {},
                      gotrue_meta_security: {
                        captcha_token:
                          null === i || void 0 === i ? void 0 : i.captchaToken,
                      },
                      code_challenge: o,
                      code_challenge_method: s,
                    },
                    xform: pt,
                  }
                ));
            } else {
              if (!("phone" in e))
                throw new nt(
                  "You must provide either an email or phone number and a password"
                );
              {
                const { phone: t, password: i, options: o } = e;
                a = await ft(
                  this.fetch,
                  "POST",
                  "".concat(this.url, "/signup"),
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      password: i,
                      data:
                        null !==
                          (n = null === o || void 0 === o ? void 0 : o.data) &&
                        void 0 !== n
                          ? n
                          : {},
                      channel:
                        null !==
                          (r =
                            null === o || void 0 === o ? void 0 : o.channel) &&
                        void 0 !== r
                          ? r
                          : "sms",
                      gotrue_meta_security: {
                        captcha_token:
                          null === o || void 0 === o ? void 0 : o.captchaToken,
                      },
                    },
                    xform: pt,
                  }
                );
              }
            }
            const { data: i, error: o } = a;
            if (o || !i)
              return { data: { user: null, session: null }, error: o };
            const s = i.session,
              l = i.user;
            return (
              i.session &&
                (await this._saveSession(i.session),
                await this._notifyAllSubscribers("SIGNED_IN", s)),
              { data: { user: l, session: s }, error: null }
            );
          } catch (a) {
            if (Ge(a)) return { data: { user: null, session: null }, error: a };
            throw a;
          }
        }
        async signInWithPassword(e) {
          try {
            let t;
            if ((await this._removeSession(), "email" in e)) {
              const { email: n, password: r, options: a } = e;
              t = await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/token?grant_type=password"),
                {
                  headers: this.headers,
                  body: {
                    email: n,
                    password: r,
                    gotrue_meta_security: {
                      captcha_token:
                        null === a || void 0 === a ? void 0 : a.captchaToken,
                    },
                  },
                  xform: gt,
                }
              );
            } else {
              if (!("phone" in e))
                throw new nt(
                  "You must provide either an email or phone number and a password"
                );
              {
                const { phone: n, password: r, options: a } = e;
                t = await ft(
                  this.fetch,
                  "POST",
                  "".concat(this.url, "/token?grant_type=password"),
                  {
                    headers: this.headers,
                    body: {
                      phone: n,
                      password: r,
                      gotrue_meta_security: {
                        captcha_token:
                          null === a || void 0 === a ? void 0 : a.captchaToken,
                      },
                    },
                    xform: gt,
                  }
                );
              }
            }
            const { data: n, error: r } = t;
            return r
              ? { data: { user: null, session: null }, error: r }
              : n && n.session && n.user
              ? (n.session &&
                  (await this._saveSession(n.session),
                  await this._notifyAllSubscribers("SIGNED_IN", n.session)),
                {
                  data: Object.assign(
                    { user: n.user, session: n.session },
                    n.weak_password ? { weakPassword: n.weak_password } : null
                  ),
                  error: r,
                })
              : { data: { user: null, session: null }, error: new tt() };
          } catch (t) {
            if (Ge(t)) return { data: { user: null, session: null }, error: t };
            throw t;
          }
        }
        async signInWithOAuth(e) {
          var t, n, r, a;
          return (
            await this._removeSession(),
            await this._handleProviderSignIn(e.provider, {
              redirectTo:
                null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.redirectTo,
              scopes:
                null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
              queryParams:
                null === (r = e.options) || void 0 === r
                  ? void 0
                  : r.queryParams,
              skipBrowserRedirect:
                null === (a = e.options) || void 0 === a
                  ? void 0
                  : a.skipBrowserRedirect,
            })
          );
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          const t = await Be(
              this.storage,
              "".concat(this.storageKey, "-code-verifier")
            ),
            [n, r] = (null !== t && void 0 !== t ? t : "").split("/"),
            { data: a, error: i } = await ft(
              this.fetch,
              "POST",
              "".concat(this.url, "/token?grant_type=pkce"),
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: n },
                xform: pt,
              }
            );
          return (
            await He(
              this.storage,
              "".concat(this.storageKey, "-code-verifier")
            ),
            i
              ? {
                  data: { user: null, session: null, redirectType: null },
                  error: i,
                }
              : a && a.session && a.user
              ? (a.session &&
                  (await this._saveSession(a.session),
                  await this._notifyAllSubscribers("SIGNED_IN", a.session)),
                {
                  data: Object.assign(Object.assign({}, a), {
                    redirectType: null !== r && void 0 !== r ? r : null,
                  }),
                  error: i,
                })
              : {
                  data: { user: null, session: null, redirectType: null },
                  error: new tt(),
                }
          );
        }
        async signInWithIdToken(e) {
          await this._removeSession();
          try {
            const {
                options: t,
                provider: n,
                token: r,
                access_token: a,
                nonce: i,
              } = e,
              o = await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/token?grant_type=id_token"),
                {
                  headers: this.headers,
                  body: {
                    provider: n,
                    id_token: r,
                    access_token: a,
                    nonce: i,
                    gotrue_meta_security: {
                      captcha_token:
                        null === t || void 0 === t ? void 0 : t.captchaToken,
                    },
                  },
                  xform: pt,
                }
              ),
              { data: s, error: l } = o;
            return l
              ? { data: { user: null, session: null }, error: l }
              : s && s.session && s.user
              ? (s.session &&
                  (await this._saveSession(s.session),
                  await this._notifyAllSubscribers("SIGNED_IN", s.session)),
                { data: s, error: l })
              : { data: { user: null, session: null }, error: new tt() };
          } catch (t) {
            if (Ge(t)) return { data: { user: null, session: null }, error: t };
            throw t;
          }
        }
        async signInWithOtp(e) {
          var t, n, r, a, i;
          try {
            if ((await this._removeSession(), "email" in e)) {
              const { email: r, options: a } = e;
              let i = null,
                o = null;
              "pkce" === this.flowType &&
                ([i, o] = await Ke(this.storage, this.storageKey));
              const { error: s } = await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/otp"),
                {
                  headers: this.headers,
                  body: {
                    email: r,
                    data:
                      null !==
                        (t = null === a || void 0 === a ? void 0 : a.data) &&
                      void 0 !== t
                        ? t
                        : {},
                    create_user:
                      null ===
                        (n =
                          null === a || void 0 === a
                            ? void 0
                            : a.shouldCreateUser) ||
                      void 0 === n ||
                      n,
                    gotrue_meta_security: {
                      captcha_token:
                        null === a || void 0 === a ? void 0 : a.captchaToken,
                    },
                    code_challenge: i,
                    code_challenge_method: o,
                  },
                  redirectTo:
                    null === a || void 0 === a ? void 0 : a.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: s };
            }
            if ("phone" in e) {
              const { phone: t, options: n } = e,
                { data: o, error: s } = await ft(
                  this.fetch,
                  "POST",
                  "".concat(this.url, "/otp"),
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      data:
                        null !==
                          (r = null === n || void 0 === n ? void 0 : n.data) &&
                        void 0 !== r
                          ? r
                          : {},
                      create_user:
                        null ===
                          (a =
                            null === n || void 0 === n
                              ? void 0
                              : n.shouldCreateUser) ||
                        void 0 === a ||
                        a,
                      gotrue_meta_security: {
                        captcha_token:
                          null === n || void 0 === n ? void 0 : n.captchaToken,
                      },
                      channel:
                        null !==
                          (i =
                            null === n || void 0 === n ? void 0 : n.channel) &&
                        void 0 !== i
                          ? i
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null === o || void 0 === o ? void 0 : o.message_id,
                },
                error: s,
              };
            }
            throw new nt("You must provide either an email or phone number.");
          } catch (o) {
            if (Ge(o)) return { data: { user: null, session: null }, error: o };
            throw o;
          }
        }
        async verifyOtp(e) {
          var t, n;
          try {
            let r, a;
            "email_change" !== e.type &&
              "phone_change" !== e.type &&
              (await this._removeSession()),
              "options" in e &&
                ((r =
                  null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.redirectTo),
                (a =
                  null === (n = e.options) || void 0 === n
                    ? void 0
                    : n.captchaToken));
            const { data: i, error: o } = await ft(
              this.fetch,
              "POST",
              "".concat(this.url, "/verify"),
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: a },
                }),
                redirectTo: r,
                xform: pt,
              }
            );
            if (o) throw o;
            if (!i) throw new Error("An error occurred on token verification.");
            const s = i.session,
              l = i.user;
            return (
              (null === s || void 0 === s ? void 0 : s.access_token) &&
                (await this._saveSession(s),
                await this._notifyAllSubscribers(
                  "recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                  s
                )),
              { data: { user: l, session: s }, error: null }
            );
          } catch (r) {
            if (Ge(r)) return { data: { user: null, session: null }, error: r };
            throw r;
          }
        }
        async signInWithSSO(e) {
          var t, n, r;
          try {
            await this._removeSession();
            let a = null,
              i = null;
            return (
              "pkce" === this.flowType &&
                ([a, i] = await Ke(this.storage, this.storageKey)),
              await ft(this.fetch, "POST", "".concat(this.url, "/sso"), {
                body: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          "providerId" in e
                            ? { provider_id: e.providerId }
                            : null
                        ),
                        "domain" in e ? { domain: e.domain } : null
                      ),
                      {
                        redirect_to:
                          null !==
                            (n =
                              null === (t = e.options) || void 0 === t
                                ? void 0
                                : t.redirectTo) && void 0 !== n
                            ? n
                            : void 0,
                      }
                    ),
                    (
                      null ===
                        (r = null === e || void 0 === e ? void 0 : e.options) ||
                      void 0 === r
                        ? void 0
                        : r.captchaToken
                    )
                      ? {
                          gotrue_meta_security: {
                            captcha_token: e.options.captchaToken,
                          },
                        }
                      : null
                  ),
                  {
                    skip_http_redirect: !0,
                    code_challenge: a,
                    code_challenge_method: i,
                  }
                ),
                headers: this.headers,
                xform: mt,
              })
            );
          } catch (a) {
            if (Ge(a)) return { data: null, error: a };
            throw a;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              const {
                data: { session: t },
                error: n,
              } = e;
              if (n) throw n;
              if (!t) throw new et();
              const { error: r } = await ft(
                this.fetch,
                "GET",
                "".concat(this.url, "/reauthenticate"),
                { headers: this.headers, jwt: t.access_token }
              );
              return { data: { user: null, session: null }, error: r };
            });
          } catch (e) {
            if (Ge(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            "email_change" != e.type &&
              "phone_change" != e.type &&
              (await this._removeSession());
            const t = "".concat(this.url, "/resend");
            if ("email" in e) {
              const { email: n, type: r, options: a } = e,
                { error: i } = await ft(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    email: n,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token:
                        null === a || void 0 === a ? void 0 : a.captchaToken,
                    },
                  },
                  redirectTo:
                    null === a || void 0 === a ? void 0 : a.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: i };
            }
            if ("phone" in e) {
              const { phone: n, type: r, options: a } = e,
                { data: i, error: o } = await ft(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    phone: n,
                    type: r,
                    gotrue_meta_security: {
                      captcha_token:
                        null === a || void 0 === a ? void 0 : a.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null === i || void 0 === i ? void 0 : i.message_id,
                },
                error: o,
              };
            }
            throw new nt(
              "You must provide either an email or phone number and a type"
            );
          } catch (t) {
            if (Ge(t)) return { data: { user: null, session: null }, error: t };
            throw t;
          }
        }
        async getSession() {
          await this.initializePromise;
          return await this._acquireLock(-1, async () =>
            this._useSession(async (e) => e)
          );
        }
        async _acquireLock(e, t) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              const e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                n = (async () => (await e, await t()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await n;
                    } catch (e) {}
                  })()
                ),
                n
              );
            }
            return await this.lock(
              "lock:".concat(this.storageKey),
              e,
              async () => {
                this._debug(
                  "#_acquireLock",
                  "lock acquired for storage key",
                  this.storageKey
                );
                try {
                  this.lockAcquired = !0;
                  const e = t();
                  for (
                    this.pendingInLock.push(
                      (async () => {
                        try {
                          await e;
                        } catch (t) {}
                      })()
                    ),
                      await e;
                    this.pendingInLock.length;

                  ) {
                    const e = [...this.pendingInLock];
                    await Promise.all(e),
                      this.pendingInLock.splice(0, e.length);
                  }
                  return await e;
                } finally {
                  this._debug(
                    "#_acquireLock",
                    "lock released for storage key",
                    this.storageKey
                  ),
                    (this.lockAcquired = !1);
                }
              }
            );
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            const t = await this.__loadSession();
            return await e(t);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                new Error().stack
              );
          try {
            let e = null;
            const t = await Be(this.storage, this.storageKey);
            if (
              (this._debug("#getSession()", "session from storage", t),
              null !== t &&
                (this._isValidSession(t)
                  ? (e = t)
                  : (this._debug(
                      "#getSession()",
                      "session from storage is not valid"
                    ),
                    await this._removeSession())),
              !e)
            )
              return { data: { session: null }, error: null };
            const n = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                "session has".concat(n ? "" : " not", " expired"),
                "expires_at",
                e.expires_at
              ),
              !n)
            ) {
              if (this.storage.isServer) {
                const t = this.suppressGetSessionWarning;
                e = new Proxy(e, {
                  get: (e, n, r) => (
                    t ||
                      "user" !== n ||
                      console.warn(
                        "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                      ),
                    Reflect.get(e, n, r)
                  ),
                });
              }
              return { data: { session: e }, error: null };
            }
            const { session: r, error: a } = await this._callRefreshToken(
              e.refresh_token
            );
            return a
              ? { data: { session: null }, error: a }
              : { data: { session: r }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          if (e) return await this._getUser(e);
          await this.initializePromise;
          return await this._acquireLock(-1, async () => await this._getUser());
        }
        async _getUser(e) {
          try {
            return e
              ? await ft(this.fetch, "GET", "".concat(this.url, "/user"), {
                  headers: this.headers,
                  jwt: e,
                  xform: vt,
                })
              : await this._useSession(async (e) => {
                  var t, n, r;
                  const { data: a, error: i } = e;
                  if (i) throw i;
                  return (null === (t = a.session) || void 0 === t
                    ? void 0
                    : t.access_token) || this.hasCustomAuthorizationHeader
                    ? await ft(
                        this.fetch,
                        "GET",
                        "".concat(this.url, "/user"),
                        {
                          headers: this.headers,
                          jwt:
                            null !==
                              (r =
                                null === (n = a.session) || void 0 === n
                                  ? void 0
                                  : n.access_token) && void 0 !== r
                              ? r
                              : void 0,
                          xform: vt,
                        }
                      )
                    : { data: { user: null }, error: new et() };
                });
          } catch (t) {
            if (Ge(t)) return { data: { user: null }, error: t };
            throw t;
          }
        }
        async updateUser(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, t)
            )
          );
        }
        async _updateUser(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            return await this._useSession(async (n) => {
              const { data: r, error: a } = n;
              if (a) throw a;
              if (!r.session) throw new et();
              const i = r.session;
              let o = null,
                s = null;
              "pkce" === this.flowType &&
                null != e.email &&
                ([o, s] = await Ke(this.storage, this.storageKey));
              const { data: l, error: u } = await ft(
                this.fetch,
                "PUT",
                "".concat(this.url, "/user"),
                {
                  headers: this.headers,
                  redirectTo:
                    null === t || void 0 === t ? void 0 : t.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: o,
                    code_challenge_method: s,
                  }),
                  jwt: i.access_token,
                  xform: vt,
                }
              );
              if (u) throw u;
              return (
                (i.user = l.user),
                await this._saveSession(i),
                await this._notifyAllSubscribers("USER_UPDATED", i),
                { data: { user: i.user }, error: null }
              );
            });
          } catch (n) {
            if (Ge(n)) return { data: { user: null }, error: n };
            throw n;
          }
        }
        _decodeJWT(e) {
          return qe(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token) throw new et();
            const t = Date.now() / 1e3;
            let n = t,
              r = !0,
              a = null;
            const i = qe(e.access_token);
            if ((i.exp && ((n = i.exp), (r = n <= t)), r)) {
              const { session: t, error: n } = await this._callRefreshToken(
                e.refresh_token
              );
              if (n) return { data: { user: null, session: null }, error: n };
              if (!t)
                return { data: { user: null, session: null }, error: null };
              a = t;
            } else {
              const { data: r, error: i } = await this._getUser(e.access_token);
              if (i) throw i;
              (a = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: r.user,
                token_type: "bearer",
                expires_in: n - t,
                expires_at: n,
              }),
                await this._saveSession(a),
                await this._notifyAllSubscribers("SIGNED_IN", a);
            }
            return { data: { user: a.user, session: a }, error: null };
          } catch (t) {
            if (Ge(t)) return { data: { session: null, user: null }, error: t };
            throw t;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (t) => {
              var n;
              if (!e) {
                const { data: r, error: a } = t;
                if (a) throw a;
                e = null !== (n = r.session) && void 0 !== n ? n : void 0;
              }
              if (!(null === e || void 0 === e ? void 0 : e.refresh_token))
                throw new et();
              const { session: r, error: a } = await this._callRefreshToken(
                e.refresh_token
              );
              return a
                ? { data: { user: null, session: null }, error: a }
                : r
                ? { data: { user: r.user, session: r }, error: null }
                : { data: { user: null, session: null }, error: null };
            });
          } catch (t) {
            if (Ge(t)) return { data: { user: null, session: null }, error: t };
            throw t;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!Ie()) throw new rt("No browser detected.");
            if ("implicit" === this.flowType && !this._isImplicitGrantFlow())
              throw new rt("Not a valid implicit grant flow url.");
            if ("pkce" == this.flowType && !e)
              throw new at("Not a valid PKCE flow url.");
            const t = De(window.location.href);
            if (e) {
              if (!t.code) throw new at("No code detected.");
              const { data: e, error: n } = await this._exchangeCodeForSession(
                t.code
              );
              if (n) throw n;
              const r = new URL(window.location.href);
              return (
                r.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  r.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (t.error || t.error_description || t.error_code)
              throw new rt(
                t.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: t.error || "unspecified_error",
                  code: t.error_code || "unspecified_code",
                }
              );
            const {
              provider_token: n,
              provider_refresh_token: r,
              access_token: a,
              refresh_token: i,
              expires_in: o,
              expires_at: s,
              token_type: l,
            } = t;
            if (!a || !o || !i || !l) throw new rt("No session defined in URL");
            const u = Math.round(Date.now() / 1e3),
              c = parseInt(o);
            let d = u + c;
            s && (d = parseInt(s));
            const h = d - u;
            1e3 * h <= Ot &&
              console.warn(
                "@supabase/gotrue-js: Session as retrieved from URL expires in "
                  .concat(h, "s, should have been closer to ")
                  .concat(c, "s")
              );
            const f = d - c;
            u - f >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  f,
                  d,
                  u
                )
              : u - f < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                  f,
                  d,
                  u
                );
            const { data: p, error: g } = await this._getUser(a);
            if (g) throw g;
            const v = {
              provider_token: n,
              provider_refresh_token: r,
              access_token: a,
              expires_in: c,
              expires_at: d,
              refresh_token: i,
              token_type: l,
              user: p.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: v, redirectType: t.type }, error: null }
            );
          } catch (t) {
            if (Ge(t))
              return { data: { session: null, redirectType: null }, error: t };
            throw t;
          }
        }
        _isImplicitGrantFlow() {
          const e = De(window.location.href);
          return !(!Ie() || (!e.access_token && !e.error_description));
        }
        async _isPKCEFlow() {
          const e = De(window.location.href),
            t = await Be(
              this.storage,
              "".concat(this.storageKey, "-code-verifier")
            );
          return !(!e.code || !t);
        }
        async signOut() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { scope: "global" };
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut() {
          let { scope: e } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { scope: "global" };
          return await this._useSession(async (t) => {
            var n;
            const { data: r, error: a } = t;
            if (a) return { error: a };
            const i =
              null === (n = r.session) || void 0 === n
                ? void 0
                : n.access_token;
            if (i) {
              const { error: t } = await this.admin.signOut(i, e);
              if (
                t &&
                (!(function (e) {
                  return Ge(e) && "AuthApiError" === e.name;
                })(t) ||
                  (404 !== t.status && 401 !== t.status && 403 !== t.status))
              )
                return { error: t };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await He(
                  this.storage,
                  "".concat(this.storageKey, "-code-verifier")
                ),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                const t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            ),
            n = {
              id: t,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  t
                ),
                  this.stateChangeEmitters.delete(t);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              t
            ),
            this.stateChangeEmitters.set(t, n),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(t);
                });
            })(),
            { data: { subscription: n } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (t) => {
            var n, r;
            try {
              const {
                data: { session: r },
                error: a,
              } = t;
              if (a) throw a;
              await (null === (n = this.stateChangeEmitters.get(e)) ||
              void 0 === n
                ? void 0
                : n.callback("INITIAL_SESSION", r)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", r);
            } catch (a) {
              await (null === (r = this.stateChangeEmitters.get(e)) ||
              void 0 === r
                ? void 0
                : r.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", a),
                console.error(a);
            }
          });
        }
        async resetPasswordForEmail(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = null,
            r = null;
          "pkce" === this.flowType &&
            ([n, r] = await Ke(this.storage, this.storageKey, !0));
          try {
            return await ft(
              this.fetch,
              "POST",
              "".concat(this.url, "/recover"),
              {
                body: {
                  email: e,
                  code_challenge: n,
                  code_challenge_method: r,
                  gotrue_meta_security: { captcha_token: t.captchaToken },
                },
                headers: this.headers,
                redirectTo: t.redirectTo,
              }
            );
          } catch (a) {
            if (Ge(a)) return { data: null, error: a };
            throw a;
          }
        }
        async getUserIdentities() {
          var e;
          try {
            const { data: t, error: n } = await this.getUser();
            if (n) throw n;
            return {
              data: {
                identities:
                  null !== (e = t.user.identities) && void 0 !== e ? e : [],
              },
              error: null,
            };
          } catch (t) {
            if (Ge(t)) return { data: null, error: t };
            throw t;
          }
        }
        async linkIdentity(e) {
          var t;
          try {
            const { data: n, error: r } = await this._useSession(async (t) => {
              var n, r, a, i, o;
              const { data: s, error: l } = t;
              if (l) throw l;
              const u = await this._getUrlForProvider(
                "".concat(this.url, "/user/identities/authorize"),
                e.provider,
                {
                  redirectTo:
                    null === (n = e.options) || void 0 === n
                      ? void 0
                      : n.redirectTo,
                  scopes:
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.scopes,
                  queryParams:
                    null === (a = e.options) || void 0 === a
                      ? void 0
                      : a.queryParams,
                  skipBrowserRedirect: !0,
                }
              );
              return await ft(this.fetch, "GET", u, {
                headers: this.headers,
                jwt:
                  null !==
                    (o =
                      null === (i = s.session) || void 0 === i
                        ? void 0
                        : i.access_token) && void 0 !== o
                    ? o
                    : void 0,
              });
            });
            if (r) throw r;
            return (
              Ie() &&
                !(null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.skipBrowserRedirect) &&
                window.location.assign(
                  null === n || void 0 === n ? void 0 : n.url
                ),
              {
                data: {
                  provider: e.provider,
                  url: null === n || void 0 === n ? void 0 : n.url,
                },
                error: null,
              }
            );
          } catch (n) {
            if (Ge(n))
              return { data: { provider: e.provider, url: null }, error: n };
            throw n;
          }
        }
        async unlinkIdentity(e) {
          try {
            return await this._useSession(async (t) => {
              var n, r;
              const { data: a, error: i } = t;
              if (i) throw i;
              return await ft(
                this.fetch,
                "DELETE",
                "".concat(this.url, "/user/identities/").concat(e.identity_id),
                {
                  headers: this.headers,
                  jwt:
                    null !==
                      (r =
                        null === (n = a.session) || void 0 === n
                          ? void 0
                          : n.access_token) && void 0 !== r
                      ? r
                      : void 0,
                }
              );
            });
          } catch (t) {
            if (Ge(t)) return { data: null, error: t };
            throw t;
          }
        }
        async _refreshAccessToken(e) {
          const t = "#_refreshAccessToken(".concat(e.substring(0, 5), "...)");
          this._debug(t, "begin");
          try {
            const a = Date.now();
            return await ((n = async (n) => (
              n > 0 &&
                (await (async function (e) {
                  return await new Promise((t) => {
                    setTimeout(() => t(null), e);
                  });
                })(200 * Math.pow(2, n - 1))),
              this._debug(t, "refreshing attempt", n),
              await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/token?grant_type=refresh_token"),
                { body: { refresh_token: e }, headers: this.headers, xform: pt }
              )
            )),
            (r = (e, t) => {
              const n = 200 * Math.pow(2, e);
              return t && ot(t) && Date.now() + n - a < Ot;
            }),
            new Promise((e, t) => {
              (async () => {
                for (let i = 0; i < 1 / 0; i++)
                  try {
                    const t = await n(i);
                    if (!r(i, null, t)) return void e(t);
                  } catch (a) {
                    if (!r(i, a)) return void t(a);
                  }
              })();
            }));
          } catch (a) {
            if ((this._debug(t, "error", a), Ge(a)))
              return { data: { session: null, user: null }, error: a };
            throw a;
          } finally {
            this._debug(t, "end");
          }
          var n, r;
        }
        _isValidSession(e) {
          return (
            "object" === typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, t) {
          const n = await this._getUrlForProvider(
            "".concat(this.url, "/authorize"),
            e,
            {
              redirectTo: t.redirectTo,
              scopes: t.scopes,
              queryParams: t.queryParams,
            }
          );
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              t,
              "url",
              n
            ),
            Ie() && !t.skipBrowserRedirect && window.location.assign(n),
            { data: { provider: e, url: n }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          const t = "#_recoverAndRefresh()";
          this._debug(t, "begin");
          try {
            const n = await Be(this.storage, this.storageKey);
            if (
              (this._debug(t, "session from storage", n),
              !this._isValidSession(n))
            )
              return (
                this._debug(t, "session is not valid"),
                void (null !== n && (await this._removeSession()))
              );
            const r = Math.round(Date.now() / 1e3),
              a =
                (null !== (e = n.expires_at) && void 0 !== e ? e : 1 / 0) <
                r + 10;
            if (
              (this._debug(
                t,
                "session has"
                  .concat(a ? "" : " not", " expired with margin of ")
                  .concat(10, "s")
              ),
              a)
            ) {
              if (this.autoRefreshToken && n.refresh_token) {
                const { error: e } = await this._callRefreshToken(
                  n.refresh_token
                );
                e &&
                  (console.error(e),
                  ot(e) ||
                    (this._debug(
                      t,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", n);
          } catch (n) {
            return this._debug(t, "error", n), void console.error(n);
          } finally {
            this._debug(t, "end");
          }
        }
        async _callRefreshToken(e) {
          var t, n;
          if (!e) throw new et();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          const r = "#_callRefreshToken(".concat(e.substring(0, 5), "...)");
          this._debug(r, "begin");
          try {
            this.refreshingDeferred = new Ve();
            const { data: t, error: n } = await this._refreshAccessToken(e);
            if (n) throw n;
            if (!t.session) throw new et();
            await this._saveSession(t.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            const r = { session: t.session, error: null };
            return this.refreshingDeferred.resolve(r), r;
          } catch (a) {
            if ((this._debug(r, "error", a), Ge(a))) {
              const e = { session: null, error: a };
              return (
                ot(a) ||
                  (await this._removeSession(),
                  await this._notifyAllSubscribers("SIGNED_OUT", null)),
                null === (t = this.refreshingDeferred) ||
                  void 0 === t ||
                  t.resolve(e),
                e
              );
            }
            throw (
              (null === (n = this.refreshingDeferred) ||
                void 0 === n ||
                n.reject(a),
              a)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(r, "end");
          }
        }
        async _notifyAllSubscribers(e, t) {
          let n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const r = "#_notifyAllSubscribers(".concat(e, ")");
          this._debug(r, "begin", t, "broadcast = ".concat(n));
          try {
            this.broadcastChannel &&
              n &&
              this.broadcastChannel.postMessage({ event: e, session: t });
            const r = [],
              a = Array.from(this.stateChangeEmitters.values()).map(
                async (n) => {
                  try {
                    await n.callback(e, t);
                  } catch (a) {
                    r.push(a);
                  }
                }
              );
            if ((await Promise.all(a), r.length > 0)) {
              for (let e = 0; e < r.length; e += 1) console.error(r[e]);
              throw r[0];
            }
          } finally {
            this._debug(r, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e),
            (this.suppressGetSessionWarning = !0),
            await Me(this.storage, this.storageKey, e);
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            await He(this.storage, this.storageKey);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          const e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              Ie() &&
              (null === window || void 0 === window
                ? void 0
                : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (t) {
            console.error("removing visibilitychange callback failed", t);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          const e = setInterval(() => this._autoRefreshTokenTick(), Ot);
          (this.autoRefreshTicker = e),
            e && "object" === typeof e && "function" === typeof e.unref
              ? e.unref()
              : "undefined" !== typeof Deno &&
                "function" === typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          const e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                const t = Date.now();
                try {
                  return await this._useSession(async (e) => {
                    const {
                      data: { session: n },
                    } = e;
                    if (!n || !n.refresh_token || !n.expires_at)
                      return void this._debug(
                        "#_autoRefreshTokenTick()",
                        "no session"
                      );
                    const r = Math.floor((1e3 * n.expires_at - t) / Ot);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      "access token expires in "
                        .concat(r, " ticks, a tick lasts ")
                        .concat(Ot, "ms, refresh threshold is ")
                        .concat(3, " ticks")
                    ),
                      r <= 3 && (await this._callRefreshToken(n.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (!(e.isAcquireTimeout || e instanceof xt)) throw e;
            this._debug("auto refresh token tick lock not available");
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !Ie() ||
              !(null === window || void 0 === window
                ? void 0
                : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null === window ||
                void 0 === window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          const t = "#_onVisibilityChanged(".concat(e, ")");
          this._debug(t, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    "visible" === document.visibilityState
                      ? await this._recoverAndRefresh()
                      : this._debug(
                          t,
                          "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                        );
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, t, n) {
          const r = ["provider=".concat(encodeURIComponent(t))];
          if (
            ((null === n || void 0 === n ? void 0 : n.redirectTo) &&
              r.push("redirect_to=".concat(encodeURIComponent(n.redirectTo))),
            (null === n || void 0 === n ? void 0 : n.scopes) &&
              r.push("scopes=".concat(encodeURIComponent(n.scopes))),
            "pkce" === this.flowType)
          ) {
            const [e, t] = await Ke(this.storage, this.storageKey),
              n = new URLSearchParams({
                code_challenge: "".concat(encodeURIComponent(e)),
                code_challenge_method: "".concat(encodeURIComponent(t)),
              });
            r.push(n.toString());
          }
          if (null === n || void 0 === n ? void 0 : n.queryParams) {
            const e = new URLSearchParams(n.queryParams);
            r.push(e.toString());
          }
          return (
            (null === n || void 0 === n ? void 0 : n.skipBrowserRedirect) &&
              r.push("skip_http_redirect=".concat(n.skipBrowserRedirect)),
            "".concat(e, "?").concat(r.join("&"))
          );
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (t) => {
              var n;
              const { data: r, error: a } = t;
              return a
                ? { data: null, error: a }
                : await ft(
                    this.fetch,
                    "DELETE",
                    "".concat(this.url, "/factors/").concat(e.factorId),
                    {
                      headers: this.headers,
                      jwt:
                        null ===
                          (n =
                            null === r || void 0 === r ? void 0 : r.session) ||
                        void 0 === n
                          ? void 0
                          : n.access_token,
                    }
                  );
            });
          } catch (t) {
            if (Ge(t)) return { data: null, error: t };
            throw t;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (t) => {
              var n, r;
              const { data: a, error: i } = t;
              if (i) return { data: null, error: i };
              const { data: o, error: s } = await ft(
                this.fetch,
                "POST",
                "".concat(this.url, "/factors"),
                {
                  body: {
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType,
                    issuer: e.issuer,
                  },
                  headers: this.headers,
                  jwt:
                    null ===
                      (n = null === a || void 0 === a ? void 0 : a.session) ||
                    void 0 === n
                      ? void 0
                      : n.access_token,
                }
              );
              return s
                ? { data: null, error: s }
                : ((null ===
                    (r = null === o || void 0 === o ? void 0 : o.totp) ||
                  void 0 === r
                    ? void 0
                    : r.qr_code) &&
                    (o.totp.qr_code = "data:image/svg+xml;utf-8,".concat(
                      o.totp.qr_code
                    )),
                  { data: o, error: null });
            });
          } catch (t) {
            if (Ge(t)) return { data: null, error: t };
            throw t;
          }
        }
        async _verify(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var n;
                const { data: r, error: a } = t;
                if (a) return { data: null, error: a };
                const { data: i, error: o } = await ft(
                  this.fetch,
                  "POST",
                  ""
                    .concat(this.url, "/factors/")
                    .concat(e.factorId, "/verify"),
                  {
                    body: { code: e.code, challenge_id: e.challengeId },
                    headers: this.headers,
                    jwt:
                      null ===
                        (n = null === r || void 0 === r ? void 0 : r.session) ||
                      void 0 === n
                        ? void 0
                        : n.access_token,
                  }
                );
                return o
                  ? { data: null, error: o }
                  : (await this._saveSession(
                      Object.assign(
                        {
                          expires_at:
                            Math.round(Date.now() / 1e3) + i.expires_in,
                        },
                        i
                      )
                    ),
                    await this._notifyAllSubscribers(
                      "MFA_CHALLENGE_VERIFIED",
                      i
                    ),
                    { data: i, error: o });
              });
            } catch (t) {
              if (Ge(t)) return { data: null, error: t };
              throw t;
            }
          });
        }
        async _challenge(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var n;
                const { data: r, error: a } = t;
                return a
                  ? { data: null, error: a }
                  : await ft(
                      this.fetch,
                      "POST",
                      ""
                        .concat(this.url, "/factors/")
                        .concat(e.factorId, "/challenge"),
                      {
                        headers: this.headers,
                        jwt:
                          null ===
                            (n =
                              null === r || void 0 === r
                                ? void 0
                                : r.session) || void 0 === n
                            ? void 0
                            : n.access_token,
                      }
                    );
              });
            } catch (t) {
              if (Ge(t)) return { data: null, error: t };
              throw t;
            }
          });
        }
        async _challengeAndVerify(e) {
          const { data: t, error: n } = await this._challenge({
            factorId: e.factorId,
          });
          return n
            ? { data: null, error: n }
            : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code,
              });
        }
        async _listFactors() {
          const {
            data: { user: e },
            error: t,
          } = await this.getUser();
          if (t) return { data: null, error: t };
          const n = (null === e || void 0 === e ? void 0 : e.factors) || [],
            r = n.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            );
          return { data: { all: n, totp: r }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return this._acquireLock(
            -1,
            async () =>
              await this._useSession(async (e) => {
                var t, n;
                const {
                  data: { session: r },
                  error: a,
                } = e;
                if (a) return { data: null, error: a };
                if (!r)
                  return {
                    data: {
                      currentLevel: null,
                      nextLevel: null,
                      currentAuthenticationMethods: [],
                    },
                    error: null,
                  };
                const i = this._decodeJWT(r.access_token);
                let o = null;
                i.aal && (o = i.aal);
                let s = o;
                (null !==
                  (n =
                    null === (t = r.user.factors) || void 0 === t
                      ? void 0
                      : t.filter((e) => "verified" === e.status)) &&
                void 0 !== n
                  ? n
                  : []
                ).length > 0 && (s = "aal2");
                return {
                  data: {
                    currentLevel: o,
                    nextLevel: s,
                    currentAuthenticationMethods: i.amr || [],
                  },
                  error: null,
                };
              })
          );
        }
      }
      Nt.nextInstanceID = 0;
      const Rt = Nt;
      class Lt extends Rt {
        constructor(e) {
          super(e);
        }
      }
      var It = function (e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      };
      class At {
        constructor(e, t, n) {
          var r, a, i;
          if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
            throw new Error("supabaseUrl is required.");
          if (!t) throw new Error("supabaseKey is required.");
          const o = e.replace(/\/$/, "");
          (this.realtimeUrl = ""
            .concat(o, "/realtime/v1")
            .replace(/^http/i, "ws")),
            (this.authUrl = "".concat(o, "/auth/v1")),
            (this.storageUrl = "".concat(o, "/storage/v1")),
            (this.functionsUrl = "".concat(o, "/functions/v1"));
          const s = "sb-".concat(
              new URL(this.authUrl).hostname.split(".")[0],
              "-auth-token"
            ),
            l = (function (e, t) {
              const { db: n, auth: r, realtime: a, global: i } = e,
                { db: o, auth: s, realtime: l, global: u } = t;
              return {
                db: Object.assign(Object.assign({}, o), n),
                auth: Object.assign(Object.assign({}, s), r),
                realtime: Object.assign(Object.assign({}, l), a),
                global: Object.assign(Object.assign({}, u), i),
              };
            })(null !== n && void 0 !== n ? n : {}, {
              db: Ee,
              realtime: Te,
              auth: Object.assign(Object.assign({}, xe), { storageKey: s }),
              global: Se,
            });
          (this.storageKey =
            null !== (r = l.auth.storageKey) && void 0 !== r ? r : ""),
            (this.headers =
              null !== (a = l.global.headers) && void 0 !== a ? a : {}),
            (this.auth = this._initSupabaseAuthClient(
              null !== (i = l.auth) && void 0 !== i ? i : {},
              this.headers,
              l.global.fetch
            )),
            (this.fetch = Oe(
              t,
              this._getAccessToken.bind(this),
              l.global.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, l.realtime)
            )),
            (this.rest = new E("".concat(o, "/rest/v1"), {
              headers: this.headers,
              schema: l.db.schema,
              fetch: this.fetch,
            })),
            this._listenForAuthEvents();
        }
        get functions() {
          return new v(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new _e(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return this.rest.rpc(e, t, n);
        }
        channel(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { config: {} };
          return this.realtime.channel(e, t);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, t;
          return It(this, void 0, void 0, function* () {
            const { data: n } = yield this.auth.getSession();
            return null !==
              (t =
                null === (e = n.session) || void 0 === e
                  ? void 0
                  : e.access_token) && void 0 !== t
              ? t
              : null;
          });
        }
        _initSupabaseAuthClient(e, t, n) {
          let {
            autoRefreshToken: r,
            persistSession: a,
            detectSessionInUrl: i,
            storage: o,
            storageKey: s,
            flowType: l,
            debug: u,
          } = e;
          var c;
          const d = {
            Authorization: "Bearer ".concat(this.supabaseKey),
            apikey: "".concat(this.supabaseKey),
          };
          return new Lt({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, d), t),
            storageKey: s,
            autoRefreshToken: r,
            persistSession: a,
            detectSessionInUrl: i,
            storage: o,
            flowType: l,
            debug: u,
            fetch: n,
            hasCustomAuthorizationHeader:
              null !== (c = "Authorization" in this.headers) &&
              void 0 !== c &&
              c,
          });
        }
        _initRealtimeClient(e) {
          return new X(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null === e || void 0 === e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null === t || void 0 === t ? void 0 : t.access_token
            );
          });
        }
        _handleTokenChanged(e, t, n) {
          ("TOKEN_REFRESHED" !== e && "SIGNED_IN" !== e) ||
          this.changedAccessToken === n
            ? "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              (this.changedAccessToken = void 0))
            : (this.realtime.setAuth(null !== n && void 0 !== n ? n : null),
              (this.changedAccessToken = n));
        }
      }
      const zt = ((e, t, n) => new At(e, t, n))(
          "https://dfjosmdeaqxvjgqpntlf.supabase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmam9zbWRlYXF4dmpncXBudGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1MzA1OTMsImV4cCI6MjAzMjEwNjU5M30.Rf3AeL4E4m9lWXVPngh8UJS8mx_EIqj66tFgtOF2dh8"
        ),
        Dt = zt;
      const Ut = function (t) {
        let { addAbbreviation: n, setCurrentSelection: a } = t;
        const [i, o] = (0, e.useState)(""),
          [s, l] = (0, e.useState)(""),
          [u, c] = (0, e.useState)(""),
          [d, h] = (0, e.useState)(""),
          [f, p] = (0, e.useState)("");
        return (0, r.jsxs)("div", {
          className: "input-form",
          children: [
            (0, r.jsx)("h2", {
              className: "section-title",
              children: "Add new Abbreviation",
            }),
            (0, r.jsxs)("form", {
              onSubmit: async function (e) {
                e.preventDefault();
                const t = f.split(",").map((e) => e.trim()),
                  { data: r, error: a } = await Dt.from("abbreviations_list")
                    .insert([
                      {
                        abbreviation: i,
                        definition: s,
                        description: u,
                        otherInformation: d,
                        tags: t,
                      },
                    ])
                    .select();
                a
                  ? console.error(a)
                  : (n(r[0]), o(""), l(""), c(""), h(""), p(""));
              },
              children: [
                (0, r.jsxs)("div", {
                  className: "form-row",
                  children: [
                    (0, r.jsx)("span", {
                      className: "input-name",
                      children: "Abbreviation:",
                    }),
                    (0, r.jsx)("input", {
                      className: "input-field",
                      name: "abbreviation",
                      type: "text",
                      placeholder: "SNDGO",
                      value: i,
                      onChange: (e) => o(e.target.value),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "form-row",
                  children: [
                    (0, r.jsx)("span", {
                      className: "input-name",
                      children: "Definition:",
                    }),
                    (0, r.jsx)("input", {
                      className: "input-field",
                      type: "text",
                      placeholder: "Smart Nation and Digital Governance Office",
                      value: s,
                      onChange: (e) => l(e.target.value),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "form-row",
                  children: [
                    (0, r.jsx)("span", {
                      className: "input-name",
                      children: "Description:",
                    }),
                    (0, r.jsx)("input", {
                      className: "input-field",
                      type: "text",
                      placeholder:
                        "Government agency responsible for advancing Singapore's smart nation and digital governance initiatives.",
                      value: u,
                      onChange: (e) => c(e.target.value),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "form-row",
                  children: [
                    (0, r.jsx)("span", {
                      className: "input-name",
                      children: "Tags",
                    }),
                    (0, r.jsx)("input", {
                      className: "input-field",
                      type: "text",
                      placeholder: "government acency, digital governance",
                      value: f,
                      onChange: (e) => p(e.target.value),
                    }),
                  ],
                }),
                (0, r.jsx)("button", {
                  className: "submit-button",
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      };
      const Ft = function (e) {
        let {
          currentSelection: t,
          setCurrentSelection: n,
          searchTerm: a,
          setSearchTerm: s,
          searchTag: l,
          setSearchTag: c,
          abbreviations: d,
          addAbbreviation: h,
          setEditAbbreviation: f,
          editAbbreviation: p,
        } = e;
        const g = d
          .sort((e, t) => e.abbreviation.localeCompare(t.abbreviation))
          .filter((e) => {
            const t = e.abbreviation.toLowerCase().includes(a.toLowerCase()),
              n = e.tags || [],
              r = l
                .split(",")
                .map((e) => e.trim().toLowerCase())
                .filter((e) => e.length > 0),
              i =
                0 === r.length ||
                r.every((e) => n.some((t) => t.toLowerCase().includes(e)));
            return t && i;
          });
        return (0, r.jsxs)("div", {
          children: [
            "Search" === t &&
              (0, r.jsx)(i, { searchTerm: a, setSearchTerm: s }),
            "Search" === t && (0, r.jsx)(o, { searchTag: l, setSearchTag: c }),
            "Search" === t &&
              g.map((e) =>
                (0, r.jsx)(
                  u,
                  {
                    setCurrentSelection: n,
                    abbreviations: e,
                    setEditAbbreviation: f,
                  },
                  e.id
                )
              ),
            "Manage" === t &&
              (0, r.jsx)(Ut, {
                setCurrentSelection: n,
                addAbbreviation: h,
                editAbbreviation: p,
                setEditAbbreviation: f,
              }),
          ],
        });
      };
      const Mt = function () {
        return (0, r.jsx)("div", {
          className: "footnote",
          children:
            "Disclaimer: This website is created for learning purposes only. The information provided here should not be considered professional advice. Please note that we make no guarantees regarding the accuracy, completeness, or reliability of the contents of this website. Any actions you take based on the contents of this website are at your own risk. We are not liable for any losses or damages incurred from the use of this website.",
        });
      };
      const Bt = function () {
        const [t, n] = (0, e.useState)("Search"),
          [i, o] = (0, e.useState)([]),
          [s, l] = (0, e.useState)(""),
          [u, c] = (0, e.useState)(""),
          [d, h] = (0, e.useState)(null);
        return (
          (0, e.useEffect)(function () {
            !(async function () {
              const { data: e, error: t } = await Dt.from(
                "abbreviations_list"
              ).select("*");
              o(e);
            })();
          }, []),
          (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)(a, { currentSelection: t, setCurrentSelection: n }),
              (0, r.jsx)(Ft, {
                currentSelection: t,
                setCurrentSelection: n,
                searchTerm: s,
                setSearchTerm: l,
                searchTag: u,
                setSearchTag: c,
                abbreviations: i,
                addAbbreviation: (e) => {
                  o((t) => [e, ...t]);
                },
                editAbbreviation: d,
                setEditAbbreviation: h,
              }),
              (0, r.jsx)(Mt, {}),
            ],
          })
        );
      };
      t.createRoot(document.getElementById("root")).render(
        (0, r.jsx)(e.StrictMode, { children: (0, r.jsx)(Bt, {}) })
      );
    })();
})();
//# sourceMappingURL=main.252be7a8.js.map
