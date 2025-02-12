import {p as process} from "./common/process-2545f00a.js";
import {r as reactIs, h as hoistNonReactStatics_cjs} from "./common/hoist-non-react-statics.cjs-ec82709f.js";
import {r as react} from "./common/index-86c632b0.js";
import {m as memoize, u as unitlessKeys} from "./common/unitless.browser.esm-c0917291.js";
import "./common/_commonjsHelpers-8c19dec8.js";
function stylis_min(W2) {
  function M2(d, c, e, h, a) {
    for (var m = 0, b2 = 0, v2 = 0, n = 0, q2, g2, x2 = 0, K2 = 0, k2, u = k2 = q2 = 0, l = 0, r = 0, I2 = 0, t = 0, B3 = e.length, J2 = B3 - 1, y, f = "", p = "", F3 = "", G3 = "", C; l < B3; ) {
      g2 = e.charCodeAt(l);
      l === J2 && b2 + n + v2 + m !== 0 && (b2 !== 0 && (g2 = b2 === 47 ? 10 : 47), n = v2 = m = 0, B3++, J2++);
      if (b2 + n + v2 + m === 0) {
        if (l === J2 && (0 < r && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t = ++l; l < B3; ) {
              switch (g2 = e.charCodeAt(l)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J2; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (g2 === 42 && e.charCodeAt(u - 1) === 42 && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g2 === 47) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l++ < J2 && e.charCodeAt(l) !== g2; ) {
                  }
              }
              if (k2 === 0)
                break;
              l++;
            }
            k2 = e.substring(t, l);
            q2 === 0 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O2;
                }
                k2 = M2(c, r, k2, g2, a + 1);
                t = k2.length;
                0 < A2 && (r = X2(O2, f, I2), C = H2(3, k2, r, c, D, z2, t, g2, a, h), f = r.join(""), C !== void 0 && (t = (k2 = C.trim()).length) === 0 && (g2 = 0, k2 = ""));
                if (0 < t)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 = w2 === 1 || w2 === 2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f + k2, h === 112 && (k2 = (p += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c, X2(c, f, I2), k2, h, a + 1);
            }
            F3 += k2;
            k2 = I2 = r = u = q2 = 0;
            f = "";
            g2 = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N2, "") : f).trim();
            if (1 < (t = f.length))
              switch (u === 0 && (q2 = f.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t = (f = f.replace(" ", ":")).length), 0 < A2 && (C = H2(1, f, c, d, D, z2, p.length, h, a, h)) !== void 0 && (t = (f = C.trim()).length) === 0 && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g2 === 105 || g2 === 99) {
                    G3 += f + e.charAt(l);
                    break;
                  }
                default:
                  f.charCodeAt(t - 1) !== 58 && (p += P2(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r = u = q2 = 0;
            f = "";
            g2 = e.charCodeAt(++l);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          b2 === 47 ? b2 = 0 : 1 + q2 === 0 && h !== 107 && 0 < f.length && (r = 1, f += "\0");
          0 < A2 * Y2 && H2(0, f, c, d, D, z2, p.length, h, a, h);
          z2 = 1;
          D++;
          break;
        case 59:
        case 125:
          if (b2 + n + v2 + m === 0) {
            z2++;
            break;
          }
        default:
          z2++;
          y = e.charAt(l);
          switch (g2) {
            case 9:
            case 32:
              if (n + m + b2 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y = "";
                    break;
                  default:
                    g2 !== 32 && (y = " ");
                }
              break;
            case 0:
              y = "\\0";
              break;
            case 12:
              y = "\\f";
              break;
            case 11:
              y = "\\v";
              break;
            case 38:
              n + b2 + m === 0 && (r = I2 = 1, y = "\f" + y);
              break;
            case 108:
              if (n + b2 + m + E2 === 0 && 0 < u)
                switch (l - u) {
                  case 2:
                    x2 === 112 && e.charCodeAt(l - 3) === 58 && (E2 = x2);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n + b2 + m === 0 && (u = l);
              break;
            case 44:
              b2 + v2 + n + m === 0 && (r = 1, y += "\r");
              break;
            case 34:
            case 39:
              b2 === 0 && (n = n === g2 ? 0 : n === 0 ? g2 : n);
              break;
            case 91:
              n + b2 + v2 === 0 && m++;
              break;
            case 93:
              n + b2 + v2 === 0 && m--;
              break;
            case 41:
              n + b2 + m === 0 && v2--;
              break;
            case 40:
              if (n + b2 + m === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              b2 + v2 + n + m + u + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e.charCodeAt(l + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t = l, b2 = 42;
                    }
                    break;
                  case 42:
                    g2 === 47 && x2 === 42 && t + 2 !== l && (e.charCodeAt(t + 2) === 33 && (p += e.substring(t, l + 1)), y = "", b2 = 0);
                }
          }
          b2 === 0 && (f += y);
      }
      K2 = x2;
      x2 = g2;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A2 && (C = H2(2, p, r, d, D, z2, t, h, a, h), C !== void 0 && (p = C).length === 0))
        return G3 + p + F3;
      p = r.join(",") + "{" + p + "}";
      if (w2 * E2 !== 0) {
        w2 !== 2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p = p.replace(Q2, "::-webkit-input-$1") + p.replace(Q2, "::-moz-$1") + p.replace(Q2, ":-ms-input-$1") + p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length, m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b2 = 0;
        for (d = m === 0 ? "" : d[0] + " "; b2 < a; ++b2) {
          c[b2] = Z2(d, c[b2], e).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c = []; b2 < a; ++b2) {
          for (var n = 0; n < m; ++n) {
            c[v2++] = Z2(d[n] + " ", h[b2], e).trim();
          }
        }
    }
    return c;
  }
  function Z2(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F2, "$1" + d.trim());
      case 58:
        return d.trim() + c.replace(F2, "$1" + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf("\f"))
          return c.replace(F2, (d.charCodeAt(0) === 58 ? "" : "$1") + d.trim());
    }
    return d + c;
  }
  function P2(d, c, e, h) {
    var a = d + ";", m = 2 * c + 3 * e + 4 * h;
    if (m === 944) {
      d = a.indexOf(":", 9) + 1;
      var b2 = a.substring(d, a.length - 1).trim();
      b2 = a.substring(0, d).trim() + b2 + ";";
      return w2 === 1 || w2 === 2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (w2 === 0 || w2 === 2 && !L2(a, 1))
      return a;
    switch (m) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45)
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ja, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99)
          break;
        b2 = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a + "-ms-flex-pack" + b2 + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
      case 1e3:
        b2 = a.substring(13).trim();
        c = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c)) {
          case 226:
            b2 = a.replace(G2, "tb");
            break;
          case 232:
            b2 = a.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a.replace(G2, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + b2 + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c = (a = d).length - 10;
        b2 = (a.charCodeAt(c) === 33 ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
        switch (m = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a = a.replace(b2, "-webkit-" + b2) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(b2, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b2, "-webkit-" + b2) + ";" + a.replace(b2, "-ms-" + b2 + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return b2 = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la.test(d) === true)
          return (b2 = d.substring(d.indexOf(":") + 1)).charCodeAt(0) === 115 ? P2(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b2, "-webkit-" + b2) + a.replace(b2, "-moz-" + b2.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, e + h === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
    }
    return a;
  }
  function L2(d, c) {
    var e = d.indexOf(c === 1 ? ":" : "{"), h = d.substring(0, c !== 3 ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(c !== 2 ? h : h.replace(na, "$1"), e, c);
  }
  function ea(d, c) {
    var e = P2(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
  }
  function H2(d, c, e, h, a, m, b2, v2, n, q2) {
    for (var g2 = 0, x2 = c, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d, x2, e, h, a, m, b2, v2, n, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c)
      return x2;
  }
  function T2(d) {
    switch (d) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if (typeof d === "function")
          S2[A2++] = d;
        else if (typeof d === "object")
          for (var c = 0, e = d.length; c < e; ++c) {
            T2(d[c]);
          }
        else
          Y2 = !!d | 0;
    }
    return T2;
  }
  function U2(d) {
    d = d.prefix;
    d !== void 0 && (R = null, d ? typeof d !== "function" ? w2 = 1 : (w2 = 2, R = d) : w2 = 0);
    return U2;
  }
  function B2(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V2 = e;
    e = [V2];
    if (0 < A2) {
      var h = H2(-1, c, e, e, D, z2, 0, 0, 0, 0);
      h !== void 0 && typeof h === "string" && (c = h);
    }
    var a = M2(O2, e, c, 0, 0);
    0 < A2 && (h = H2(-2, a, e, e, D, z2, a.length, 0, 0, 0), h !== void 0 && (a = h));
    V2 = "";
    E2 = 0;
    z2 = D = 1;
    return a;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  W2 !== void 0 && U2(W2);
  return B2;
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
function v() {
  return (v = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var g = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, S = function(t) {
  return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !reactIs.typeOf(t);
}, w = Object.freeze([]), E = Object.freeze({});
function b(e) {
  return typeof e == "function";
}
function _(e) {
  return e.displayName || e.name || "Component";
}
function N(e) {
  return e && typeof e.styledComponentId == "string";
}
var A = typeof process != "undefined" && process.env.SC_ATTR || "data-styled", I = typeof window != "undefined" && "HTMLElement" in window, P = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY : false), O = {};
function j(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var T = function() {
  function e(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(e2) {
    for (var t2 = 0, n = 0; n < e2; n++)
      t2 += this.groupSizes[n];
    return t2;
  }, t.insertRules = function(e2, t2) {
    if (e2 >= this.groupSizes.length) {
      for (var n = this.groupSizes, r = n.length, o = r; e2 >= o; )
        (o <<= 1) < 0 && j(16, "" + e2);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var s = r; s < o; s++)
        this.groupSizes[s] = 0;
    }
    for (var i = this.indexOfGroup(e2 + 1), a = 0, c = t2.length; a < c; a++)
      this.tag.insertRule(i, t2[a]) && (this.groupSizes[e2]++, i++);
  }, t.clearGroup = function(e2) {
    if (e2 < this.length) {
      var t2 = this.groupSizes[e2], n = this.indexOfGroup(e2), r = n + t2;
      this.groupSizes[e2] = 0;
      for (var o = n; o < r; o++)
        this.tag.deleteRule(n);
    }
  }, t.getGroup = function(e2) {
    var t2 = "";
    if (e2 >= this.length || this.groupSizes[e2] === 0)
      return t2;
    for (var n = this.groupSizes[e2], r = this.indexOfGroup(e2), o = r + n, s = r; s < o; s++)
      t2 += this.tag.getRule(s) + "/*!sc*/\n";
    return t2;
  }, e;
}(), x = new Map(), k = new Map(), V = 1, B = function(e) {
  if (x.has(e))
    return x.get(e);
  for (; k.has(V); )
    V++;
  var t = V++;
  return x.set(e, t), k.set(t, e), t;
}, z = function(e) {
  return k.get(e);
}, M = function(e, t) {
  t >= V && (V = t + 1), x.set(e, t), k.set(t, e);
}, G = "style[" + A + '][data-styled-version="5.3.5"]', L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), F = function(e, t, n) {
  for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(t, r);
}, Y = function(e, t) {
  for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
    var i = n[o].trim();
    if (i) {
      var a = i.match(L);
      if (a) {
        var c = 0 | parseInt(a[1], 10), u = a[2];
        c !== 0 && (M(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, q = function() {
  return typeof window != "undefined" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
}, H = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(e2) {
    for (var t2 = e2.childNodes, n2 = t2.length; n2 >= 0; n2--) {
      var r2 = t2[n2];
      if (r2 && r2.nodeType === 1 && r2.hasAttribute(A))
        return r2;
    }
  }(n), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.3.5");
  var i = q();
  return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
}, $ = function() {
  function e(e2) {
    var t2 = this.element = H(e2);
    t2.appendChild(document.createTextNode("")), this.sheet = function(e3) {
      if (e3.sheet)
        return e3.sheet;
      for (var t3 = document.styleSheets, n = 0, r = t3.length; n < r; n++) {
        var o = t3[n];
        if (o.ownerNode === e3)
          return o;
      }
      j(17);
    }(t2), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(e2, t2) {
    try {
      return this.sheet.insertRule(t2, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }, t.deleteRule = function(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }, t.getRule = function(e2) {
    var t2 = this.sheet.cssRules[e2];
    return t2 !== void 0 && typeof t2.cssText == "string" ? t2.cssText : "";
  }, e;
}(), W = function() {
  function e(e2) {
    var t2 = this.element = H(e2);
    this.nodes = t2.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(e2, t2) {
    if (e2 <= this.length && e2 >= 0) {
      var n = document.createTextNode(t2), r = this.nodes[e2];
      return this.element.insertBefore(n, r || null), this.length++, true;
    }
    return false;
  }, t.deleteRule = function(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }, t.getRule = function(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }, e;
}(), U = function() {
  function e(e2) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(e2, t2) {
    return e2 <= this.length && (this.rules.splice(e2, 0, t2), this.length++, true);
  }, t.deleteRule = function(e2) {
    this.rules.splice(e2, 1), this.length--;
  }, t.getRule = function(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }, e;
}(), J = I, X = {isServer: !I, useCSSOMInjection: !P}, Z = function() {
  function e(e2, t2, n) {
    e2 === void 0 && (e2 = E), t2 === void 0 && (t2 = {}), this.options = v({}, X, {}, e2), this.gs = t2, this.names = new Map(n), this.server = !!e2.isServer, !this.server && I && J && (J = false, function(e3) {
      for (var t3 = document.querySelectorAll(G), n2 = 0, r = t3.length; n2 < r; n2++) {
        var o = t3[n2];
        o && o.getAttribute(A) !== "active" && (Y(e3, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }
  e.registerId = function(e2) {
    return B(e2);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(t2, n) {
    return n === void 0 && (n = true), new e(v({}, this.options, {}, t2), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (n = (t2 = this.options).isServer, r = t2.useCSSOMInjection, o = t2.target, e2 = n ? new U(o) : r ? new $(o) : new W(o), new T(e2)));
    var e2, t2, n, r, o;
  }, t.hasNameForId = function(e2, t2) {
    return this.names.has(e2) && this.names.get(e2).has(t2);
  }, t.registerName = function(e2, t2) {
    if (B(e2), this.names.has(e2))
      this.names.get(e2).add(t2);
    else {
      var n = new Set();
      n.add(t2), this.names.set(e2, n);
    }
  }, t.insertRules = function(e2, t2, n) {
    this.registerName(e2, t2), this.getTag().insertRules(B(e2), n);
  }, t.clearNames = function(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }, t.clearRules = function(e2) {
    this.getTag().clearGroup(B(e2)), this.clearNames(e2);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(e2) {
      for (var t2 = e2.getTag(), n = t2.length, r = "", o = 0; o < n; o++) {
        var s = z(o);
        if (s !== void 0) {
          var i = e2.names.get(s), a = t2.getGroup(o);
          if (i && a && i.size) {
            var c = A + ".g" + o + '[id="' + s + '"]', u = "";
            i !== void 0 && i.forEach(function(e3) {
              e3.length > 0 && (u += e3 + ",");
            }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
          }
        }
      }
      return r;
    }(this);
  }, e;
}(), K = /(a)(d)/gi, Q = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ee(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Q(t % 52) + n;
  return (Q(t % 52) + n).replace(K, "$1-$2");
}
var te = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, ne = function(e) {
  return te(5381, e);
};
function re(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (b(n) && !N(n))
      return false;
  }
  return true;
}
var oe = ne("5.3.5"), se = function() {
  function e(e2, t, n) {
    this.rules = e2, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && re(e2), this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(e2, t, n) {
    var r = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e2, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var s = Ne(this.rules, e2, t, n).join(""), i = ee(te(this.baseHash, s) >>> 0);
        if (!t.hasNameForId(r, i)) {
          var a = n(s, "." + i, void 0, r);
          t.insertRules(r, i, a);
        }
        o.push(i), this.staticRulesId = i;
      }
    else {
      for (var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          l += h, false;
        else if (h) {
          var p = Ne(h, e2, t, n), f = Array.isArray(p) ? p.join("") : p;
          u = te(u, f + d), l += f;
        }
      }
      if (l) {
        var m = ee(u >>> 0);
        if (!t.hasNameForId(r, m)) {
          var y = n(l, "." + m, void 0, r);
          t.insertRules(r, m, y);
        }
        o.push(m);
      }
    }
    return o.join(" ");
  }, e;
}(), ie = /^\s*\/\/.*$/gm, ae = [":", "[", ".", "#"];
function ce(e) {
  var t, n, r, o, s = e === void 0 ? E : e, i = s.options, a = i === void 0 ? E : i, c = s.plugins, u = c === void 0 ? w : c, l = new stylis_min(a), d = [], h = function(e2) {
    function t2(t3) {
      if (t3)
        try {
          e2(t3 + "}");
        } catch (e3) {
        }
    }
    return function(n2, r2, o2, s2, i2, a2, c2, u2, l2, d2) {
      switch (n2) {
        case 1:
          if (l2 === 0 && r2.charCodeAt(0) === 64)
            return e2(r2 + ";"), "";
          break;
        case 2:
          if (u2 === 0)
            return r2 + "/*|*/";
          break;
        case 3:
          switch (u2) {
            case 102:
            case 112:
              return e2(o2[0] + r2), "";
            default:
              return r2 + (d2 === 0 ? "/*|*/" : "");
          }
        case -2:
          r2.split("/*|*/}").forEach(t2);
      }
    };
  }(function(e2) {
    d.push(e2);
  }), f = function(e2, r2, s2) {
    return r2 === 0 && ae.indexOf(s2[n.length]) !== -1 || s2.match(o) ? e2 : "." + t;
  };
  function m(e2, s2, i2, a2) {
    a2 === void 0 && (a2 = "&");
    var c2 = e2.replace(ie, ""), u2 = s2 && i2 ? i2 + " " + s2 + " { " + c2 + " }" : c2;
    return t = a2, n = s2, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i2 || !s2 ? "" : s2, u2);
  }
  return l.use([].concat(u, [function(e2, t2, o2) {
    e2 === 2 && o2.length && o2[0].lastIndexOf(n) > 0 && (o2[0] = o2[0].replace(r, f));
  }, h, function(e2) {
    if (e2 === -2) {
      var t2 = d;
      return d = [], t2;
    }
  }])), m.hash = u.length ? u.reduce(function(e2, t2) {
    return t2.name || j(15), te(e2, t2.name);
  }, 5381).toString() : "", m;
}
var ue = react.createContext(), le = ue.Consumer, de = react.createContext(), he = (de.Consumer, new Z()), pe = ce();
function fe() {
  return react.useContext(ue) || he;
}
function me() {
  return react.useContext(de) || pe;
}
var ve = function() {
  function e(e2, t) {
    var n = this;
    this.inject = function(e3, t2) {
      t2 === void 0 && (t2 = pe);
      var r = n.name + t2.hash;
      e3.hasNameForId(n.id, r) || e3.insertRules(n.id, r, t2(n.rules, r, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n.name));
    }, this.name = e2, this.id = "sc-keyframes-" + e2, this.rules = t;
  }
  return e.prototype.getName = function(e2) {
    return e2 === void 0 && (e2 = pe), this.name + e2.hash;
  }, e;
}(), ge = /([A-Z])/, Se = /([A-Z])/g, we = /^ms-/, Ee = function(e) {
  return "-" + e.toLowerCase();
};
function be(e) {
  return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
}
var _e = function(e) {
  return e == null || e === false || e === "";
};
function Ne(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1)
      (s = Ne(e[a], n, r, o)) !== "" && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (_e(e))
    return "";
  if (N(e))
    return "." + e.styledComponentId;
  if (b(e)) {
    if (typeof (l = e) != "function" || l.prototype && l.prototype.isReactComponent || !n)
      return e;
    var u = e(n);
    return Ne(u, n, r, o);
  }
  var l;
  return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e2(t, n2) {
    var r2, o2, s2 = [];
    for (var i2 in t)
      t.hasOwnProperty(i2) && !_e(t[i2]) && (Array.isArray(t[i2]) && t[i2].isCss || b(t[i2]) ? s2.push(be(i2) + ":", t[i2], ";") : S(t[i2]) ? s2.push.apply(s2, e2(t[i2], i2)) : s2.push(be(i2) + ": " + (r2 = i2, (o2 = t[i2]) == null || typeof o2 == "boolean" || o2 === "" ? "" : typeof o2 != "number" || o2 === 0 || r2 in unitlessKeys ? String(o2).trim() : o2 + "px") + ";"));
    return n2 ? [n2 + " {"].concat(s2, ["}"]) : s2;
  }(e) : e.toString();
}
var Ae = function(e) {
  return Array.isArray(e) && (e.isCss = true), e;
};
function Ce(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return b(e) || S(e) ? Ae(Ne(g(w, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ae(Ne(g(e, n)));
}
var Re = function(e, t, n) {
  return n === void 0 && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
}, De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, je = /(^-|-$)/g;
function Te(e) {
  return e.replace(De, "-").replace(je, "");
}
var xe = function(e) {
  return ee(ne(e) >>> 0);
};
function ke(e) {
  return typeof e == "string" && true;
}
var Ve = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Be = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ze(e, t, n) {
  var r = e[n];
  Ve(t) && Ve(r) ? Me(r, t) : e[n] = t;
}
function Me(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (Ve(i))
      for (var a in i)
        Be(a) && ze(e, i[a], a);
  }
  return e;
}
var Ge = react.createContext(), Le = Ge.Consumer;
var Ye = {};
function qe(e, t, n) {
  var o = N(e), i = !ke(e), a = t.attrs, c = a === void 0 ? w : a, d = t.componentId, h = d === void 0 ? function(e2, t2) {
    var n2 = typeof e2 != "string" ? "sc" : Te(e2);
    Ye[n2] = (Ye[n2] || 0) + 1;
    var r = n2 + "-" + xe("5.3.5" + n2 + Ye[n2]);
    return t2 ? t2 + "-" + r : r;
  }(t.displayName, t.parentComponentId) : d, p = t.displayName, f = p === void 0 ? function(e2) {
    return ke(e2) ? "styled." + e2 : "Styled(" + _(e2) + ")";
  }(e) : p, g2 = t.displayName && t.componentId ? Te(t.displayName) + "-" + t.componentId : t.componentId || h, S2 = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, A2 = t.shouldForwardProp;
  o && e.shouldForwardProp && (A2 = t.shouldForwardProp ? function(n2, r, o2) {
    return e.shouldForwardProp(n2, r, o2) && t.shouldForwardProp(n2, r, o2);
  } : e.shouldForwardProp);
  var C, I2 = new se(n, g2, o ? e.componentStyle : void 0), P2 = I2.isStatic && c.length === 0, O2 = function(e2, t2) {
    return function(e3, t3, n2, r) {
      var o2 = e3.attrs, i2 = e3.componentStyle, a2 = e3.defaultProps, c2 = e3.foldedComponentIds, d2 = e3.shouldForwardProp, h2 = e3.styledComponentId, p2 = e3.target;
      var f2 = function(e4, t4, n3) {
        e4 === void 0 && (e4 = E);
        var r2 = v({}, t4, {theme: e4}), o3 = {};
        return n3.forEach(function(e5) {
          var t5, n4, s, i3 = e5;
          for (t5 in b(i3) && (i3 = i3(r2)), i3)
            r2[t5] = o3[t5] = t5 === "className" ? (n4 = o3[t5], s = i3[t5], n4 && s ? n4 + " " + s : n4 || s) : i3[t5];
        }), [r2, o3];
      }(Re(t3, react.useContext(Ge), a2) || E, t3, o2), y = f2[0], g3 = f2[1], S3 = function(e4, t4, n3, r2) {
        var o3 = fe(), s = me(), i3 = t4 ? e4.generateAndInjectStyles(E, o3, s) : e4.generateAndInjectStyles(n3, o3, s);
        return i3;
      }(i2, r, y), w2 = n2, _2 = g3.$as || t3.$as || g3.as || t3.as || p2, N2 = ke(_2), A3 = g3 !== t3 ? v({}, t3, {}, g3) : t3, C2 = {};
      for (var I3 in A3)
        I3[0] !== "$" && I3 !== "as" && (I3 === "forwardedAs" ? C2.as = A3[I3] : (d2 ? d2(I3, isPropValid, _2) : !N2 || isPropValid(I3)) && (C2[I3] = A3[I3]));
      return t3.style && g3.style !== t3.style && (C2.style = v({}, t3.style, {}, g3.style)), C2.className = Array.prototype.concat(c2, h2, S3 !== h2 ? S3 : null, t3.className, g3.className).filter(Boolean).join(" "), C2.ref = w2, react.createElement(_2, C2);
    }(C, e2, t2, P2);
  };
  return O2.displayName = f, (C = react.forwardRef(O2)).attrs = S2, C.componentStyle = I2, C.displayName = f, C.shouldForwardProp = A2, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g2, C.target = o ? e.target : e, C.withComponent = function(e2) {
    var r = t.componentId, o2 = function(e3, t2) {
      if (e3 == null)
        return {};
      var n2, r2, o3 = {}, s2 = Object.keys(e3);
      for (r2 = 0; r2 < s2.length; r2++)
        n2 = s2[r2], t2.indexOf(n2) >= 0 || (o3[n2] = e3[n2]);
      return o3;
    }(t, ["componentId"]), s = r && r + "-" + (ke(e2) ? e2 : Te(_(e2)));
    return qe(e2, v({}, o2, {attrs: S2, componentId: s}), n);
  }, Object.defineProperty(C, "defaultProps", {get: function() {
    return this._foldedDefaultProps;
  }, set: function(t2) {
    this._foldedDefaultProps = o ? Me({}, e.defaultProps, t2) : t2;
  }}), C.toString = function() {
    return "." + C.styledComponentId;
  }, i && hoistNonReactStatics_cjs(C, e, {attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true}), C;
}
var He = function(e) {
  return function e2(t, r, o) {
    if (o === void 0 && (o = E), !reactIs.isValidElementType(r))
      return j(1, String(r));
    var s = function() {
      return t(r, o, Ce.apply(void 0, arguments));
    };
    return s.withConfig = function(n) {
      return e2(t, r, v({}, o, {}, n));
    }, s.attrs = function(n) {
      return e2(t, r, v({}, o, {attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)}));
    }, s;
  }(qe, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  He[e] = He(e);
});
var $e = function() {
  function e(e2, t2) {
    this.rules = e2, this.componentId = t2, this.isStatic = re(e2), Z.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function(e2, t2, n, r) {
    var o = r(Ne(this.rules, t2, n, r).join(""), ""), s = this.componentId + e2;
    n.insertRules(s, s, o);
  }, t.removeStyles = function(e2, t2) {
    t2.clearRules(this.componentId + e2);
  }, t.renderStyles = function(e2, t2, n, r) {
    e2 > 2 && Z.registerId(this.componentId + e2), this.removeStyles(e2, n), this.createStyles(e2, t2, n, r);
  }, e;
}();
function We(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  var i = Ce.apply(void 0, [e].concat(n)), a = "sc-global-" + xe(JSON.stringify(i)), u = new $e(i, a);
  function l(e2) {
    var t2 = fe(), n2 = me(), o2 = react.useContext(Ge), l2 = react.useRef(t2.allocateGSInstance(a)).current;
    return t2.server && h(l2, e2, t2, o2, n2), react.useLayoutEffect(function() {
      if (!t2.server)
        return h(l2, e2, t2, o2, n2), function() {
          return u.removeStyles(l2, t2);
        };
    }, [l2, e2, t2, o2, n2]), null;
  }
  function h(e2, t2, n2, r, o2) {
    if (u.isStatic)
      u.renderStyles(e2, O, n2, o2);
    else {
      var s = v({}, t2, {theme: Re(t2, r, l.defaultProps)});
      u.renderStyles(e2, s, n2, o2);
    }
  }
  return react.memo(l);
}
export default He;
export {We as createGlobalStyle};
