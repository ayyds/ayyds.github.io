! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define
		.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function(t) {
	"use strict";

	function e(t) {
		var e = {},
			n = {},
			i = t.match(/Firefox\/([\d.]+)/),
			r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
			a = t.match(/Edge\/([\d.]+)/),
			o = /micromessenger/i.test(t);
		return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n
			.version = a[1]), o && (n.weChat = !0), {
			browser: n,
			os: e,
			node: !1,
			canvasSupported: !!document.createElement("canvas").getContext,
			svgSupported: "undefined" != typeof SVGRect,
			touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
			pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11)
		}
	}

	function n(t, e) {
		"createCanvas" === t && (ng = null), tg[t] = e
	}

	function i(t) {
		if (null == t || "object" != typeof t) return t;
		var e = t,
			n = qp.call(t);
		if ("[object Array]" === n) {
			if (!E(t)) {
				e = [];
				for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
			}
		} else if (Zp[n]) {
			if (!E(t)) {
				var o = t.constructor;
				if (t.constructor.from) e = o.from(t);
				else {
					e = new o(t.length);
					for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
				}
			}
		} else if (!Xp[n] && !E(t) && !T(t)) {
			e = {};
			for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
		}
		return e
	}

	function r(t, e, n) {
		if (!S(e) || !S(t)) return n ? i(e) : t;
		for (var a in e)
			if (e.hasOwnProperty(a)) {
				var o = t[a],
					s = e[a];
				!S(s) || !S(o) || x(s) || x(o) || T(s) || T(o) || M(s) || M(o) || E(s) || E(o) ? !n && a in t || (t[
					a] = i(e[a], !0)) : r(o, s, n)
			} return t
	}

	function a(t, e) {
		for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
		return n
	}

	function o(t, e) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return t
	}

	function s(t, e, n) {
		for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
		return t
	}

	function l() {
		return ng || (ng = eg().getContext("2d")), ng
	}

	function u(t, e) {
		if (t) {
			if (t.indexOf) return t.indexOf(e);
			for (var n = 0, i = t.length; i > n; n++)
				if (t[n] === e) return n
		}
		return -1
	}

	function h(t, e) {
		function n() {}
		var i = t.prototype;
		n.prototype = e.prototype, t.prototype = new n;
		for (var r in i) t.prototype[r] = i[r];
		t.prototype.constructor = t, t.superClass = e
	}

	function c(t, e, n) {
		t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
	}

	function d(t) {
		return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
	}

	function f(t, e, n) {
		if (t && e)
			if (t.forEach && t.forEach === Yp) t.forEach(e, n);
			else if (t.length === +t.length)
			for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
		else
			for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
	}

	function p(t, e, n) {
		if (t && e) {
			if (t.map && t.map === Jp) return t.map(e, n);
			for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
			return i
		}
	}

	function g(t, e, n, i) {
		if (t && e) {
			if (t.reduce && t.reduce === Qp) return t.reduce(e, n, i);
			for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
			return n
		}
	}

	function m(t, e, n) {
		if (t && e) {
			if (t.filter && t.filter === Kp) return t.filter(e, n);
			for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
			return i
		}
	}

	function v(t, e, n) {
		if (t && e)
			for (var i = 0, r = t.length; r > i; i++)
				if (e.call(n, t[i], i, t)) return t[i]
	}

	function y(t, e) {
		var n = $p.call(arguments, 2);
		return function() {
			return t.apply(e, n.concat($p.call(arguments)))
		}
	}

	function _(t) {
		var e = $p.call(arguments, 1);
		return function() {
			return t.apply(this, e.concat($p.call(arguments)))
		}
	}

	function x(t) {
		return "[object Array]" === qp.call(t)
	}

	function w(t) {
		return "function" == typeof t
	}

	function b(t) {
		return "[object String]" === qp.call(t)
	}

	function S(t) {
		var e = typeof t;
		return "function" === e || !!t && "object" == e
	}

	function M(t) {
		return !!Xp[qp.call(t)]
	}

	function I(t) {
		return !!Zp[qp.call(t)]
	}

	function T(t) {
		return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
	}

	function C(t) {
		return t !== t
	}

	function D() {
		for (var t = 0, e = arguments.length; e > t; t++)
			if (null != arguments[t]) return arguments[t]
	}

	function A(t, e) {
		return null != t ? t : e
	}

	function k(t, e, n) {
		return null != t ? t : null != e ? e : n
	}

	function P() {
		return Function.call.apply($p, arguments)
	}

	function L(t) {
		if ("number" == typeof t) return [t, t, t, t];
		var e = t.length;
		return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
	}

	function O(t, e) {
		if (!t) throw new Error(e)
	}

	function z(t) {
		return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(
			/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}

	function R(t) {
		t[ig] = !0
	}

	function E(t) {
		return t[ig]
	}

	function B(t) {
		function e(t, e) {
			n ? i.set(t, e) : i.set(e, t)
		}
		var n = x(t),
			i = this;
		t instanceof B ? t.each(e) : t && f(t, e)
	}

	function N(t) {
		return new B(t)
	}

	function F(t, e) {
		for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
		var r = t.length;
		for (i = 0; i < e.length; i++) n[i + r] = e[i];
		return n
	}

	function V() {}

	function G(t, e) {
		var n = new ag(2);
		return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
	}

	function H(t, e) {
		return t[0] = e[0], t[1] = e[1], t
	}

	function W(t) {
		var e = new ag(2);
		return e[0] = t[0], e[1] = t[1], e
	}

	function U(t, e, n) {
		return t[0] = e, t[1] = n, t
	}

	function X(t, e, n) {
		return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
	}

	function Z(t, e, n, i) {
		return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
	}

	function q(t, e, n) {
		return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
	}

	function j(t) {
		return Math.sqrt(Y(t))
	}

	function Y(t) {
		return t[0] * t[0] + t[1] * t[1]
	}

	function K(t, e, n) {
		return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
	}

	function $(t, e, n) {
		return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
	}

	function J(t, e) {
		return t[0] * e[0] + t[1] * e[1]
	}

	function Q(t, e, n) {
		return t[0] = e[0] * n, t[1] = e[1] * n, t
	}

	function te(t, e) {
		var n = j(e);
		return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
	}

	function ee(t, e) {
		return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
	}

	function ne(t, e) {
		return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
	}

	function ie(t, e) {
		return t[0] = -e[0], t[1] = -e[1], t
	}

	function re(t, e, n, i) {
		return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
	}

	function ae(t, e, n) {
		var i = e[0],
			r = e[1];
		return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
	}

	function oe(t, e, n) {
		return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
	}

	function se(t, e, n) {
		return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
	}

	function le() {
		this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this
			._dragEnd, this), this.on("globalout", this._dragEnd, this)
	}

	function ue(t, e) {
		return {
			target: t,
			topTarget: e && e.topTarget
		}
	}

	function he(t, e, n) {
		return {
			type: t,
			event: n,
			target: e.target,
			topTarget: e.topTarget,
			cancelBubble: !1,
			offsetX: n.zrX,
			offsetY: n.zrY,
			gestureEvent: n.gestureEvent,
			pinchX: n.pinchX,
			pinchY: n.pinchY,
			pinchScale: n.pinchScale,
			wheelDelta: n.zrDelta,
			zrByTouch: n.zrByTouch,
			which: n.which
		}
	}

	function ce() {}

	function de(t, e, n) {
		if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
			for (var i, r = t; r;) {
				if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
				r.silent && (i = !0), r = r.parent
			}
			return i ? fg : !0
		}
		return !1
	}

	function fe() {
		var t = new mg(6);
		return pe(t), t
	}

	function pe(t) {
		return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
	}

	function ge(t, e) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
	}

	function me(t, e, n) {
		var i = e[0] * n[0] + e[2] * n[1],
			r = e[1] * n[0] + e[3] * n[1],
			a = e[0] * n[2] + e[2] * n[3],
			o = e[1] * n[2] + e[3] * n[3],
			s = e[0] * n[4] + e[2] * n[5] + e[4],
			l = e[1] * n[4] + e[3] * n[5] + e[5];
		return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
	}

	function ve(t, e, n) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
	}

	function ye(t, e, n) {
		var i = e[0],
			r = e[2],
			a = e[4],
			o = e[1],
			s = e[3],
			l = e[5],
			u = Math.sin(n),
			h = Math.cos(n);
		return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h *
			a + u * l, t[5] = h * l - u * a, t
	}

	function _e(t, e, n) {
		var i = n[0],
			r = n[1];
		return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r,
			t
	}

	function xe(t, e) {
		var n = e[0],
			i = e[2],
			r = e[4],
			a = e[1],
			o = e[3],
			s = e[5],
			l = n * o - a * i;
		return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l,
			t[5] = (a * r - n * s) * l, t) : null
	}

	function we(t) {
		var e = fe();
		return ge(e, t), e
	}

	function be(t) {
		return t > _g || -_g > t
	}

	function Se(t) {
		this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1,
			this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear",
			this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime =
			0, this._paused = !1
	}

	function Me(t) {
		return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
	}

	function Ie(t) {
		return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
	}

	function Te(t) {
		return 0 > t ? 0 : t > 1 ? 1 : t
	}

	function Ce(t) {
		return Me(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
	}

	function De(t) {
		return Te(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
	}

	function Ae(t, e, n) {
		return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t +
			(e - t) * (2 / 3 - n) * 6 : t
	}

	function ke(t, e, n) {
		return t + (e - t) * n
	}

	function Pe(t, e, n, i, r) {
		return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
	}

	function Le(t, e) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
	}

	function Oe(t, e) {
		Pg && Le(Pg, e), Pg = kg.put(t, Pg || e.slice())
	}

	function ze(t, e) {
		if (t) {
			e = e || [];
			var n = kg.get(t);
			if (n) return Le(e, n);
			t += "";
			var i = t.replace(/ /g, "").toLowerCase();
			if (i in Ag) return Le(e, Ag[i]), Oe(t, e), e;
			if ("#" !== i.charAt(0)) {
				var r = i.indexOf("("),
					a = i.indexOf(")");
				if (-1 !== r && a + 1 === i.length) {
					var o = i.substr(0, r),
						s = i.substr(r + 1, a - (r + 1)).split(","),
						l = 1;
					switch (o) {
						case "rgba":
							if (4 !== s.length) return void Pe(e, 0, 0, 0, 1);
							l = De(s.pop());
						case "rgb":
							return 3 !== s.length ? void Pe(e, 0, 0, 0, 1) : (Pe(e, Ce(s[0]), Ce(s[1]), Ce(s[2]),
								l), Oe(t, e), e);
						case "hsla":
							return 4 !== s.length ? void Pe(e, 0, 0, 0, 1) : (s[3] = De(s[3]), Re(s, e), Oe(t, e),
								e);
						case "hsl":
							return 3 !== s.length ? void Pe(e, 0, 0, 0, 1) : (Re(s, e), Oe(t, e), e);
						default:
							return
					}
				}
				Pe(e, 0, 0, 0, 1)
			} else {
				if (4 === i.length) {
					var u = parseInt(i.substr(1), 16);
					return u >= 0 && 4095 >= u ? (Pe(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4,
						15 & u | (15 & u) << 4, 1), Oe(t, e), e) : void Pe(e, 0, 0, 0, 1)
				}
				if (7 === i.length) {
					var u = parseInt(i.substr(1), 16);
					return u >= 0 && 16777215 >= u ? (Pe(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Oe(
						t, e), e) : void Pe(e, 0, 0, 0, 1)
				}
			}
		}
	}

	function Re(t, e) {
		var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
			i = De(t[1]),
			r = De(t[2]),
			a = .5 >= r ? r * (i + 1) : r + i - r * i,
			o = 2 * r - a;
		return e = e || [], Pe(e, Me(255 * Ae(o, a, n + 1 / 3)), Me(255 * Ae(o, a, n)), Me(255 * Ae(o, a, n - 1 /
			3)), 1), 4 === t.length && (e[3] = t[3]), e
	}

	function Ee(t) {
		if (t) {
			var e, n, i = t[0] / 255,
				r = t[1] / 255,
				a = t[2] / 255,
				o = Math.min(i, r, a),
				s = Math.max(i, r, a),
				l = s - o,
				u = (s + o) / 2;
			if (0 === l) e = 0, n = 0;
			else {
				n = .5 > u ? l / (s + o) : l / (2 - s - o);
				var h = ((s - i) / 6 + l / 2) / l,
					c = ((s - r) / 6 + l / 2) / l,
					d = ((s - a) / 6 + l / 2) / l;
				i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), 0 > e && (e +=
					1), e > 1 && (e -= 1)
			}
			var f = [360 * e, n, u];
			return null != t[3] && f.push(t[3]), f
		}
	}

	function Be(t, e) {
		var n = ze(t);
		if (n) {
			for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] >
				255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
			return We(n, 4 === n.length ? "rgba" : "rgb")
		}
	}

	function Ne(t) {
		var e = ze(t);
		return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
	}

	function Fe(t, e, n) {
		if (e && e.length && t >= 0 && 1 >= t) {
			n = n || [];
			var i = t * (e.length - 1),
				r = Math.floor(i),
				a = Math.ceil(i),
				o = e[r],
				s = e[a],
				l = i - r;
			return n[0] = Me(ke(o[0], s[0], l)), n[1] = Me(ke(o[1], s[1], l)), n[2] = Me(ke(o[2], s[2], l)), n[3] =
				Te(ke(o[3], s[3], l)), n
		}
	}

	function Ve(t, e, n) {
		if (e && e.length && t >= 0 && 1 >= t) {
			var i = t * (e.length - 1),
				r = Math.floor(i),
				a = Math.ceil(i),
				o = ze(e[r]),
				s = ze(e[a]),
				l = i - r,
				u = We([Me(ke(o[0], s[0], l)), Me(ke(o[1], s[1], l)), Me(ke(o[2], s[2], l)), Te(ke(o[3], s[3], l))],
					"rgba");
			return n ? {
				color: u,
				leftIndex: r,
				rightIndex: a,
				value: i
			} : u
		}
	}

	function Ge(t, e, n, i) {
		return t = ze(t), t ? (t = Ee(t), null != e && (t[0] = Ie(e)), null != n && (t[1] = De(n)), null != i && (t[
			2] = De(i)), We(Re(t), "rgba")) : void 0
	}

	function He(t, e) {
		return t = ze(t), t && null != e ? (t[3] = Te(e), We(t, "rgba")) : void 0
	}

	function We(t, e) {
		if (t && t.length) {
			var n = t[0] + "," + t[1] + "," + t[2];
			return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
		}
	}

	function Ue(t, e) {
		return t[e]
	}

	function Xe(t, e, n) {
		t[e] = n
	}

	function Ze(t, e, n) {
		return (e - t) * n + t
	}

	function qe(t, e, n) {
		return n > .5 ? e : t
	}

	function je(t, e, n, i, r) {
		var a = t.length;
		if (1 == r)
			for (var o = 0; a > o; o++) i[o] = Ze(t[o], e[o], n);
		else
			for (var s = a && t[0].length, o = 0; a > o; o++)
				for (var l = 0; s > l; l++) i[o][l] = Ze(t[o][l], e[o][l], n)
	}

	function Ye(t, e, n) {
		var i = t.length,
			r = e.length;
		if (i !== r) {
			var a = i > r;
			if (a) t.length = r;
			else
				for (var o = i; r > o; o++) t.push(1 === n ? e[o] : Rg.call(e[o]))
		}
		for (var s = t[0] && t[0].length, o = 0; o < t.length; o++)
			if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
			else
				for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
	}

	function Ke(t, e, n) {
		if (t === e) return !0;
		var i = t.length;
		if (i !== e.length) return !1;
		if (1 === n) {
			for (var r = 0; i > r; r++)
				if (t[r] !== e[r]) return !1
		} else
			for (var a = t[0].length, r = 0; i > r; r++)
				for (var o = 0; a > o; o++)
					if (t[r][o] !== e[r][o]) return !1;
		return !0
	}

	function $e(t, e, n, i, r, a, o, s, l) {
		var u = t.length;
		if (1 == l)
			for (var h = 0; u > h; h++) s[h] = Je(t[h], e[h], n[h], i[h], r, a, o);
		else
			for (var c = t[0].length, h = 0; u > h; h++)
				for (var d = 0; c > d; d++) s[h][d] = Je(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o)
	}

	function Je(t, e, n, i, r, a, o) {
		var s = .5 * (n - t),
			l = .5 * (i - e);
		return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
	}

	function Qe(t) {
		if (d(t)) {
			var e = t.length;
			if (d(t[0])) {
				for (var n = [], i = 0; e > i; i++) n.push(Rg.call(t[i]));
				return n
			}
			return Rg.call(t)
		}
		return t
	}

	function tn(t) {
		return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") +
			")"
	}

	function en(t) {
		var e = t[t.length - 1].value;
		return d(e && e[0]) ? 2 : 1
	}

	function nn(t, e, n, i, r, a) {
		var o = t._getter,
			s = t._setter,
			l = "spline" === e,
			u = i.length;
		if (u) {
			var h, c = i[0].value,
				f = d(c),
				p = !1,
				g = !1,
				m = f ? en(i) : 0;
			i.sort(function(t, e) {
				return t.time - e.time
			}), h = i[u - 1].time;
			for (var v = [], y = [], _ = i[0].value, x = !0, w = 0; u > w; w++) {
				v.push(i[w].time / h);
				var b = i[w].value;
				if (f && Ke(b, _, m) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
					var S = ze(b);
					S ? (b = S, p = !0) : g = !0
				}
				y.push(b)
			}
			if (a || !x) {
				for (var M = y[u - 1], w = 0; u - 1 > w; w++) f ? Ye(y[w], M, m) : !isNaN(y[w]) || isNaN(M) || g ||
					p || (y[w] = M);
				f && Ye(o(t._target, r), M, m);
				var I, T, C, D, A, k, P = 0,
					L = 0;
				if (p) var O = [0, 0, 0, 0];
				var z = function(t, e) {
						var n;
						if (0 > e) n = 0;
						else if (L > e) {
							for (I = Math.min(P + 1, u - 1), n = I; n >= 0 && !(v[n] <= e); n--);
							n = Math.min(n, u - 2)
						} else {
							for (n = P; u > n && !(v[n] > e); n++);
							n = Math.min(n - 1, u - 2)
						}
						P = n, L = e;
						var i = v[n + 1] - v[n];
						if (0 !== i)
							if (T = (e - v[n]) / i, l)
								if (D = y[n], C = y[0 === n ? n : n - 1], A = y[n > u - 2 ? u - 1 : n + 1], k = y[
										n > u - 3 ? u - 1 : n + 2], f) $e(C, D, A, k, T, T * T, T * T * T, o(t, r),
									m);
								else {
									var a;
									if (p) a = $e(C, D, A, k, T, T * T, T * T * T, O, 1), a = tn(O);
									else {
										if (g) return qe(D, A, T);
										a = Je(C, D, A, k, T, T * T, T * T * T)
									}
									s(t, r, a)
								}
						else if (f) je(y[n], y[n + 1], T, o(t, r), m);
						else {
							var a;
							if (p) je(y[n], y[n + 1], T, O, 1), a = tn(O);
							else {
								if (g) return qe(y[n], y[n + 1], T);
								a = Ze(y[n], y[n + 1], T)
							}
							s(t, r, a)
						}
					},
					R = new Se({
						target: t._target,
						life: h,
						loop: t._loop,
						delay: t._delay,
						onframe: z,
						ondestroy: n
					});
				return e && "spline" !== e && (R.easing = e), R
			}
		}
	}

	function rn(t, e, n, i) {
		0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height =
			i
	}

	function an(t) {
		for (var e = 0; t >= jg;) e |= 1 & t, t >>= 1;
		return t + e
	}

	function on(t, e, n, i) {
		var r = e + 1;
		if (r === n) return 1;
		if (i(t[r++], t[e]) < 0) {
			for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
			sn(t, e, r)
		} else
			for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
		return r - e
	}

	function sn(t, e, n) {
		for (n--; n > e;) {
			var i = t[e];
			t[e++] = t[n], t[n--] = i
		}
	}

	function ln(t, e, n, i, r) {
		for (i === e && i++; n > i; i++) {
			for (var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
			var u = i - s;
			switch (u) {
				case 3:
					t[s + 3] = t[s + 2];
				case 2:
					t[s + 2] = t[s + 1];
				case 1:
					t[s + 1] = t[s];
					break;
				default:
					for (; u > 0;) t[s + u] = t[s + u - 1], u--
			}
			t[s] = o
		}
	}

	function un(t, e, n, i, r, a) {
		var o = 0,
			s = 0,
			l = 1;
		if (a(t, e[n + r]) > 0) {
			for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s), o += r, l += r
		} else {
			for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s);
			var u = o;
			o = r - l, l = r - u
		}
		for (o++; l > o;) {
			var h = o + (l - o >>> 1);
			a(t, e[n + h]) > 0 ? o = h + 1 : l = h
		}
		return l
	}

	function hn(t, e, n, i, r, a) {
		var o = 0,
			s = 0,
			l = 1;
		if (a(t, e[n + r]) < 0) {
			for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s);
			var u = o;
			o = r - l, l = r - u
		} else {
			for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
			l > s && (l = s), o += r, l += r
		}
		for (o++; l > o;) {
			var h = o + (l - o >>> 1);
			a(t, e[n + h]) < 0 ? l = h : o = h + 1
		}
		return l
	}

	function cn(t, e) {
		function n(t, e) {
			l[c] = t, u[c] = e, c += 1
		}

		function i() {
			for (; c > 1;) {
				var t = c - 2;
				if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t +
					1] && t--;
				else if (u[t] > u[t + 1]) break;
				a(t)
			}
		}

		function r() {
			for (; c > 1;) {
				var t = c - 2;
				t > 0 && u[t - 1] < u[t + 1] && t--, a(t)
			}
		}

		function a(n) {
			var i = l[n],
				r = u[n],
				a = l[n + 1],
				h = u[n + 1];
			u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
			var d = hn(t[a], t, i, r, 0, e);
			i += d, r -= d, 0 !== r && (h = un(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a,
				h) : s(i, r, a, h)))
		}

		function o(n, i, r, a) {
			var o = 0;
			for (o = 0; i > o; o++) d[o] = t[n + o];
			var s = 0,
				l = r,
				u = n;
			if (t[u++] = t[l++], 0 !== --a) {
				if (1 === i) {
					for (o = 0; a > o; o++) t[u + o] = t[l + o];
					return void(t[u + a] = d[s])
				}
				for (var c, f, p, g = h;;) {
					c = 0, f = 0, p = !1;
					do
						if (e(t[l], d[s]) < 0) {
							if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
								p = !0;
								break
							}
						} else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {
						p = !0;
						break
					} while (g > (c | f));
					if (p) break;
					do {
						if (c = hn(t[l], d, s, i, 0, e), 0 !== c) {
							for (o = 0; c > o; o++) t[u + o] = d[s + o];
							if (u += c, s += c, i -= c, 1 >= i) {
								p = !0;
								break
							}
						}
						if (t[u++] = t[l++], 0 === --a) {
							p = !0;
							break
						}
						if (f = un(d[s], t, l, a, 0, e), 0 !== f) {
							for (o = 0; f > o; o++) t[u + o] = t[l + o];
							if (u += f, l += f, a -= f, 0 === a) {
								p = !0;
								break
							}
						}
						if (t[u++] = d[s++], 1 === --i) {
							p = !0;
							break
						}
						g--
					} while (c >= Yg || f >= Yg);
					if (p) break;
					0 > g && (g = 0), g += 2
				}
				if (h = g, 1 > h && (h = 1), 1 === i) {
					for (o = 0; a > o; o++) t[u + o] = t[l + o];
					t[u + a] = d[s]
				} else {
					if (0 === i) throw new Error;
					for (o = 0; i > o; o++) t[u + o] = d[s + o]
				}
			} else
				for (o = 0; i > o; o++) t[u + o] = d[s + o]
		}

		function s(n, i, r, a) {
			var o = 0;
			for (o = 0; a > o; o++) d[o] = t[r + o];
			var s = n + i - 1,
				l = a - 1,
				u = r + a - 1,
				c = 0,
				f = 0;
			if (t[u--] = t[s--], 0 !== --i) {
				if (1 === a) {
					for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
					return void(t[u] = d[l])
				}
				for (var p = h;;) {
					var g = 0,
						m = 0,
						v = !1;
					do
						if (e(d[l], t[s]) < 0) {
							if (t[u--] = t[s--], g++, m = 0, 0 === --i) {
								v = !0;
								break
							}
						} else if (t[u--] = d[l--], m++, g = 0, 1 === --a) {
						v = !0;
						break
					} while (p > (g | m));
					if (v) break;
					do {
						if (g = i - hn(d[l], t, n, i, i - 1, e), 0 !== g) {
							for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[
								c + o];
							if (0 === i) {
								v = !0;
								break
							}
						}
						if (t[u--] = d[l--], 1 === --a) {
							v = !0;
							break
						}
						if (m = a - un(t[s], d, 0, a, a - 1, e), 0 !== m) {
							for (u -= m, l -= m, a -= m, f = u + 1, c = l + 1, o = 0; m > o; o++) t[f + o] = d[c +
								o];
							if (1 >= a) {
								v = !0;
								break
							}
						}
						if (t[u--] = t[s--], 0 === --i) {
							v = !0;
							break
						}
						p--
					} while (g >= Yg || m >= Yg);
					if (v) break;
					0 > p && (p = 0), p += 2
				}
				if (h = p, 1 > h && (h = 1), 1 === a) {
					for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
					t[u] = d[l]
				} else {
					if (0 === a) throw new Error;
					for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
				}
			} else
				for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
		}
		var l, u, h = Yg,
			c = 0,
			d = [];
		l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
	}

	function dn(t, e, n, i) {
		n || (n = 0), i || (i = t.length);
		var r = i - n;
		if (!(2 > r)) {
			var a = 0;
			if (jg > r) return a = on(t, n, i, e), void ln(t, n, i, n + a, e);
			var o = new cn(t, e),
				s = an(r);
			do {
				if (a = on(t, n, i, e), s > a) {
					var l = r;
					l > s && (l = s), ln(t, n, n + l, n + a, e), a = l
				}
				o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
			} while (0 !== r);
			o.forceMergeRuns()
		}
	}

	function fn(t, e) {
		return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
	}

	function pn(t, e, n) {
		var i = null == e.x ? 0 : e.x,
			r = null == e.x2 ? 1 : e.x2,
			a = null == e.y ? 0 : e.y,
			o = null == e.y2 ? 0 : e.y2;
		e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y),
			i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
		var s = t.createLinearGradient(i, a, r, o);
		return s
	}

	function gn(t, e, n) {
		var i = n.width,
			r = n.height,
			a = Math.min(i, r),
			o = null == e.x ? .5 : e.x,
			s = null == e.y ? .5 : e.y,
			l = null == e.r ? .5 : e.r;
		e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
		var u = t.createRadialGradient(o, s, 0, o, s, l);
		return u
	}

	function mn() {
		return !1
	}

	function vn(t, e, n) {
		var i = eg(),
			r = e.getWidth(),
			a = e.getHeight(),
			o = i.style;
		return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i
			.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i
	}

	function yn(t) {
		if ("string" == typeof t) {
			var e = sm.get(t);
			return e && e.image
		}
		return t
	}

	function _n(t, e, n, i, r) {
		if (t) {
			if ("string" == typeof t) {
				if (e && e.__zrImageSrc === t || !n) return e;
				var a = sm.get(t),
					o = {
						hostEl: n,
						cb: i,
						cbPayload: r
					};
				return a ? (e = a.image, !wn(e) && a.pending.push(o)) : (!e && (e = new Image), e.onload = xn, sm
					.put(t, e.__cachedImgObj = {
						image: e,
						pending: [o]
					}), e.src = e.__zrImageSrc = t), e
			}
			return t
		}
		return e
	}

	function xn() {
		var t = this.__cachedImgObj;
		this.onload = this.__cachedImgObj = null;
		for (var e = 0; e < t.pending.length; e++) {
			var n = t.pending[e],
				i = n.cb;
			i && i(this, n.cbPayload), n.hostEl.dirty()
		}
		t.pending.length = 0
	}

	function wn(t) {
		return t && t.width && t.height
	}

	function bn(t, e) {
		e = e || dm;
		var n = t + ":" + e;
		if (lm[n]) return lm[n];
		for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(zn(i[a], e).width,
			r);
		return um > hm && (um = 0, lm = {}), um++, lm[n] = r, r
	}

	function Sn(t, e, n, i, r, a, o) {
		return a ? In(t, e, n, i, r, a, o) : Mn(t, e, n, i, r, o)
	}

	function Mn(t, e, n, i, r, a) {
		var o = Rn(t, e, r, a),
			s = bn(t, e);
		r && (s += r[1] + r[3]);
		var l = o.outerHeight,
			u = Tn(0, s, n),
			h = Cn(0, l, i),
			c = new rn(u, h, s, l);
		return c.lineHeight = o.lineHeight, c
	}

	function In(t, e, n, i, r, a, o) {
		var s = En(t, {
				rich: a,
				truncate: o,
				font: e,
				textAlign: n,
				textPadding: r
			}),
			l = s.outerWidth,
			u = s.outerHeight,
			h = Tn(0, l, n),
			c = Cn(0, u, i);
		return new rn(h, c, l, u)
	}

	function Tn(t, e, n) {
		return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
	}

	function Cn(t, e, n) {
		return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
	}

	function Dn(t, e, n) {
		var i = e.x,
			r = e.y,
			a = e.height,
			o = e.width,
			s = a / 2,
			l = "left",
			u = "top";
		switch (t) {
			case "left":
				i -= n, r += s, l = "right", u = "middle";
				break;
			case "right":
				i += n + o, r += s, u = "middle";
				break;
			case "top":
				i += o / 2, r -= n, l = "center", u = "bottom";
				break;
			case "bottom":
				i += o / 2, r += a + n, l = "center";
				break;
			case "inside":
				i += o / 2, r += s, l = "center", u = "middle";
				break;
			case "insideLeft":
				i += n, r += s, u = "middle";
				break;
			case "insideRight":
				i += o - n, r += s, l = "right", u = "middle";
				break;
			case "insideTop":
				i += o / 2, r += n, l = "center";
				break;
			case "insideBottom":
				i += o / 2, r += a - n, l = "center", u = "bottom";
				break;
			case "insideTopLeft":
				i += n, r += n;
				break;
			case "insideTopRight":
				i += o - n, r += n, l = "right";
				break;
			case "insideBottomLeft":
				i += n, r += a - n, u = "bottom";
				break;
			case "insideBottomRight":
				i += o - n, r += a - n, l = "right", u = "bottom"
		}
		return {
			x: i,
			y: r,
			textAlign: l,
			textVerticalAlign: u
		}
	}

	function An(t, e, n, i, r) {
		if (!e) return "";
		var a = (t + "").split("\n");
		r = kn(e, n, i, r);
		for (var o = 0, s = a.length; s > o; o++) a[o] = Pn(a[o], r);
		return a.join("\n")
	}

	function kn(t, e, n, i) {
		i = o({}, i), i.font = e;
		var n = A(n, "...");
		i.maxIterations = A(i.maxIterations, 2);
		var r = i.minChar = A(i.minChar, 0);
		i.cnCharWidth = bn("国", e);
		var a = i.ascCharWidth = bn("a", e);
		i.placeholder = A(i.placeholder, "");
		for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
		var u = bn(n);
		return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i
			.containerWidth = t, i
	}

	function Pn(t, e) {
		var n = e.containerWidth,
			i = e.font,
			r = e.contentWidth;
		if (!n) return "";
		var a = bn(t, i);
		if (n >= a) return t;
		for (var o = 0;; o++) {
			if (r >= a || o >= e.maxIterations) {
				t += e.ellipsis;
				break
			}
			var s = 0 === o ? Ln(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
			t = t.substr(0, s), a = bn(t, i)
		}
		return "" === t && (t = e.placeholder), t
	}

	function Ln(t, e, n, i) {
		for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
			var s = t.charCodeAt(a);
			r += s >= 0 && 127 >= s ? n : i
		}
		return a
	}

	function On(t) {
		return bn("国", t)
	}

	function zn(t, e) {
		return fm.measureText(t, e)
	}

	function Rn(t, e, n, i) {
		null != t && (t += "");
		var r = On(e),
			a = t ? t.split("\n") : [],
			o = a.length * r,
			s = o;
		if (n && (s += n[0] + n[2]), t && i) {
			var l = i.outerHeight,
				u = i.outerWidth;
			if (null != l && s > l) t = "", a = [];
			else if (null != u)
				for (var h = kn(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
						minChar: i.minChar,
						placeholder: i.placeholder
					}), c = 0, d = a.length; d > c; c++) a[c] = Pn(a[c], h)
		}
		return {
			lines: a,
			height: o,
			outerHeight: s,
			lineHeight: r
		}
	}

	function En(t, e) {
		var n = {
			lines: [],
			width: 0,
			height: 0
		};
		if (null != t && (t += ""), !t) return n;
		for (var i, r = cm.lastIndex = 0; null != (i = cm.exec(t));) {
			var a = i.index;
			a > r && Bn(n, t.substring(r, a)), Bn(n, i[2], i[1]), r = cm.lastIndex
		}
		r < t.length && Bn(n, t.substring(r, t.length));
		var o = n.lines,
			s = 0,
			l = 0,
			u = [],
			h = e.textPadding,
			c = e.truncate,
			d = c && c.outerWidth,
			f = c && c.outerHeight;
		h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));
		for (var p = 0; p < o.length; p++) {
			for (var g = o[p], m = 0, v = 0, y = 0; y < g.tokens.length; y++) {
				var _ = g.tokens[y],
					x = _.styleName && e.rich[_.styleName] || {},
					w = _.textPadding = x.textPadding,
					b = _.font = x.font || e.font,
					S = _.textHeight = A(x.textHeight, On(b));
				if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = k(x.textLineHeight, e.textLineHeight, S),
					_.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign ||
					"middle", null != f && s + _.lineHeight > f) return {
					lines: [],
					width: 0,
					height: 0
				};
				_.textWidth = bn(_.text, b);
				var M = x.textWidth,
					I = null == M || "auto" === M;
				if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, u.push(_), M = 0;
				else {
					if (I) {
						M = _.textWidth;
						var T = x.textBackgroundColor,
							C = T && T.image;
						C && (C = yn(C), wn(C) && (M = Math.max(M, C.width * S / C.height)))
					}
					var D = w ? w[1] + w[3] : 0;
					M += D;
					var P = null != d ? d - v : null;
					null != P && M > P && (!I || D > P ? (_.text = "", _.textWidth = M = 0) : (_.text = An(_.text,
						P - D, b, c.ellipsis, {
							minChar: c.minChar
						}), _.textWidth = bn(_.text, b), M = _.textWidth + D))
				}
				v += _.width = M, x && (m = Math.max(m, _.lineHeight))
			}
			g.width = v, g.lineHeight = m, s += m, l = Math.max(l, v)
		}
		n.outerWidth = n.width = A(e.textWidth, l), n.outerHeight = n.height = A(e.textHeight, s), h && (n
			.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);
		for (var p = 0; p < u.length; p++) {
			var _ = u[p],
				L = _.percentWidth;
			_.width = parseInt(L, 10) / 100 * l
		}
		return n
	}

	function Bn(t, e, n) {
		for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
			var s = r[o],
				l = {
					styleName: n,
					text: s,
					isLineHolder: !s && !i
				};
			if (o) a.push({
				tokens: [l]
			});
			else {
				var u = (a[a.length - 1] || (a[0] = {
						tokens: []
					})).tokens,
					h = u.length;
				1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l)
			}
		}
	}

	function Nn(t) {
		var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t
			.fontFamily || "sans-serif"
		].join(" ");
		return e && z(e) || t.textFont || t.font
	}

	function Fn(t, e) {
		var n, i, r, a, o = e.x,
			s = e.y,
			l = e.width,
			u = e.height,
			h = e.r;
		0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h :
			h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[
				1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[
			3]) : n = i = r = a = 0;
		var c;
		n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r >
			u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o +
				n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o +
				l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u),
			0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n,
				s + n, n, Math.PI, 1.5 * Math.PI)
	}

	function Vn(t) {
		return Gn(t), f(t.rich, Gn), t
	}

	function Gn(t) {
		if (t) {
			t.font = Nn(t);
			var e = t.textAlign;
			"middle" === e && (e = "center"), t.textAlign = null == e || pm[e] ? e : "left";
			var n = t.textVerticalAlign || t.textBaseline;
			"center" === n && (n = "middle"), t.textVerticalAlign = null == n || gm[n] ? n : "top";
			var i = t.textPadding;
			i && (t.textPadding = L(t.textPadding))
		}
	}

	function Hn(t, e, n, i, r) {
		i.rich ? Un(t, e, n, i, r) : Wn(t, e, n, i, r)
	}

	function Wn(t, e, n, i, r) {
		var a = Jn(e, "font", i.font || dm),
			o = i.textPadding,
			s = t.__textCotentBlock;
		(!s || t.__dirty) && (s = t.__textCotentBlock = Rn(n, a, o, i.truncate));
		var l = s.outerHeight,
			u = s.lines,
			h = s.lineHeight,
			c = $n(l, i, r),
			d = c.baseX,
			f = c.baseY,
			p = c.textAlign,
			g = c.textVerticalAlign;
		Zn(e, i, r, d, f);
		var m = Cn(f, l, g),
			v = d,
			y = m,
			_ = jn(i);
		if (_ || o) {
			var x = bn(n, a),
				w = x;
			o && (w += o[1] + o[3]);
			var b = Tn(d, w, p);
			_ && Yn(t, e, i, b, m, w, l), o && (v = ni(d, p, o), y += o[0])
		}
		Jn(e, "textAlign", p || "left"), Jn(e, "textBaseline", "middle"), Jn(e, "shadowBlur", i.textShadowBlur ||
			0), Jn(e, "shadowColor", i.textShadowColor || "transparent"), Jn(e, "shadowOffsetX", i
				.textShadowOffsetX || 0), Jn(e, "shadowOffsetY", i.textShadowOffsetY || 0), y += h / 2;
		var S = i.textStrokeWidth,
			M = Qn(i.textStroke, S),
			I = ti(i.textFill);
		M && (Jn(e, "lineWidth", S), Jn(e, "strokeStyle", M)), I && Jn(e, "fillStyle", I);
		for (var T = 0; T < u.length; T++) M && e.strokeText(u[T], v, y), I && e.fillText(u[T], v, y), y += h
	}

	function Un(t, e, n, i, r) {
		var a = t.__textCotentBlock;
		(!a || t.__dirty) && (a = t.__textCotentBlock = En(n, i)), Xn(t, e, a, i, r)
	}

	function Xn(t, e, n, i, r) {
		var a = n.width,
			o = n.outerWidth,
			s = n.outerHeight,
			l = i.textPadding,
			u = $n(s, i, r),
			h = u.baseX,
			c = u.baseY,
			d = u.textAlign,
			f = u.textVerticalAlign;
		Zn(e, i, r, h, c);
		var p = Tn(h, o, d),
			g = Cn(c, s, f),
			m = p,
			v = g;
		l && (m += l[3], v += l[0]);
		var y = m + a;
		jn(i) && Yn(t, e, i, p, g, o, s);
		for (var _ = 0; _ < n.lines.length; _++) {
			for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = m, D =
					y, A = S - 1; S > T && (x = b[T], !x.textAlign || "left" === x.textAlign);) qn(t, e, x, i, M, v,
				C, "left"), I -= x.width, C += x.width, T++;
			for (; A >= 0 && (x = b[A], "right" === x.textAlign);) qn(t, e, x, i, M, v, D, "right"), I -= x.width,
				D -= x.width, A--;
			for (C += (a - (C - m) - (y - D) - I) / 2; A >= T;) x = b[T], qn(t, e, x, i, M, v, C + x.width / 2,
				"center"), C += x.width, T++;
			v += M
		}
	}

	function Zn(t, e, n, i, r) {
		if (n && e.textRotation) {
			var a = e.textOrigin;
			"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n
				.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
		}
	}

	function qn(t, e, n, i, r, a, o, s) {
		var l = i.rich[n.styleName] || {},
			u = n.textVerticalAlign,
			h = a + r / 2;
		"top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && jn(
			l) && Yn(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2,
				n.width, n.height);
		var c = n.textPadding;
		c && (o = ni(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), Jn(e, "shadowBlur", k(l.textShadowBlur,
				i.textShadowBlur, 0)), Jn(e, "shadowColor", l.textShadowColor || i.textShadowColor ||
			"transparent"), Jn(e, "shadowOffsetX", k(l.textShadowOffsetX, i.textShadowOffsetX, 0)), Jn(e,
				"shadowOffsetY", k(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Jn(e, "textAlign", s), Jn(e,
				"textBaseline", "middle"), Jn(e, "font", n.font || dm);
		var d = Qn(l.textStroke || i.textStroke, p),
			f = ti(l.textFill || i.textFill),
			p = A(l.textStrokeWidth, i.textStrokeWidth);
		d && (Jn(e, "lineWidth", p), Jn(e, "strokeStyle", d), e.strokeText(n.text, o, h)), f && (Jn(e, "fillStyle",
			f), e.fillText(n.text, o, h))
	}

	function jn(t) {
		return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
	}

	function Yn(t, e, n, i, r, a, o) {
		var s = n.textBackgroundColor,
			l = n.textBorderWidth,
			u = n.textBorderColor,
			h = b(s);
		if (Jn(e, "shadowBlur", n.textBoxShadowBlur || 0), Jn(e, "shadowColor", n.textBoxShadowColor ||
				"transparent"), Jn(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Jn(e, "shadowOffsetY", n
				.textBoxShadowOffsetY || 0), h || l && u) {
			e.beginPath();
			var c = n.textBorderRadius;
			c ? Fn(e, {
				x: i,
				y: r,
				width: a,
				height: o,
				r: c
			}) : e.rect(i, r, a, o), e.closePath()
		}
		if (h) Jn(e, "fillStyle", s), e.fill();
		else if (S(s)) {
			var d = s.image;
			d = _n(d, null, t, Kn, s), d && wn(d) && e.drawImage(d, i, r, a, o)
		}
		l && u && (Jn(e, "lineWidth", l), Jn(e, "strokeStyle", u), e.stroke())
	}

	function Kn(t, e) {
		e.image = t
	}

	function $n(t, e, n) {
		var i = e.x || 0,
			r = e.y || 0,
			a = e.textAlign,
			o = e.textVerticalAlign;
		if (n) {
			var s = e.textPosition;
			if (s instanceof Array) i = n.x + ei(s[0], n.width), r = n.y + ei(s[1], n.height);
			else {
				var l = Dn(s, n, e.textDistance);
				i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
			}
			var u = e.textOffset;
			u && (i += u[0], r += u[1])
		}
		return {
			baseX: i,
			baseY: r,
			textAlign: a,
			textVerticalAlign: o
		}
	}

	function Jn(t, e, n) {
		return t[e] = Jg(t, e, n), t[e]
	}

	function Qn(t, e) {
		return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ?
			"#000" : t
	}

	function ti(t) {
		return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
	}

	function ei(t, e) {
		return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
	}

	function ni(t, e, n) {
		return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
	}

	function ii(t, e) {
		return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
	}

	function ri(t) {
		t = t || {}, Wg.call(this, t);
		for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
		this.style = new tm(t.style, this), this._rect = null, this.__clipPaths = []
	}

	function ai(t) {
		ri.call(this, t)
	}

	function oi(t) {
		return parseInt(t, 10)
	}

	function si(t) {
		return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 :
			!1
	}

	function li(t, e, n) {
		return bm.copy(t.getBoundingRect()), t.transform && bm.applyTransform(t.transform), Sm.width = e, Sm
			.height = n, !bm.intersect(Sm)
	}

	function ui(t, e) {
		if (t == e) return !1;
		if (!t || !e || t.length !== e.length) return !0;
		for (var n = 0; n < t.length; n++)
			if (t[n] !== e[n]) return !0
	}

	function hi(t, e) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
		}
	}

	function ci(t, e) {
		var n = document.createElement("div");
		return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px",
			"padding:0", "margin:0", "border-width:0"
		].join(";") + ";", n
	}

	function di(t) {
		return t.getBoundingClientRect ? t.getBoundingClientRect() : {
			left: 0,
			top: 0
		}
	}

	function fi(t, e, n, i) {
		return n = n || {}, i || !Up.canvasSupported ? pi(t, e, n) : Up.browser.firefox && null != e.layerX && e
			.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n
				.zrY = e.offsetY) : pi(t, e, n), n
	}

	function pi(t, e, n) {
		var i = di(t);
		n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
	}

	function gi(t, e, n) {
		if (e = e || window.event, null != e.zrX) return e;
		var i = e.type,
			r = i && i.indexOf("touch") >= 0;
		if (r) {
			var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
			a && fi(t, a, e, n)
		} else fi(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
		var o = e.button;
		return null == e.which && void 0 !== o && Tm.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 :
			0), e
	}

	function mi(t, e, n) {
		Im ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
	}

	function vi(t, e, n) {
		Im ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
	}

	function yi(t) {
		return t.which > 1
	}

	function _i(t) {
		var e = t[1][0] - t[0][0],
			n = t[1][1] - t[0][1];
		return Math.sqrt(e * e + n * n)
	}

	function xi(t) {
		return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
	}

	function wi(t) {
		return "mousewheel" === t && Up.browser.firefox ? "DOMMouseScroll" : t
	}

	function bi(t, e, n) {
		var i = t._gestureMgr;
		"start" === n && i.clear();
		var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
		if ("end" === n && i.clear(), r) {
			var a = r.type;
			e.gestureEvent = a, t.handler.dispatchToElement({
				target: r.target
			}, a, r.event)
		}
	}

	function Si(t) {
		t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
			t._touching = !1
		}, 700)
	}

	function Mi(t) {
		var e = t.pointerType;
		return "pen" === e || "touch" === e
	}

	function Ii(t) {
		function e(t, e) {
			return function() {
				return e._touching ? void 0 : t.apply(e, arguments)
			}
		}
		f(Om, function(e) {
			t._handlers[e] = y(Em[e], t)
		}), f(Rm, function(e) {
			t._handlers[e] = y(Em[e], t)
		}), f(Lm, function(n) {
			t._handlers[n] = e(Em[n], t)
		})
	}

	function Ti(t) {
		function e(e, n) {
			f(e, function(e) {
				mi(t, wi(e), n._handlers[e])
			}, n)
		}
		dg.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Am, this
			._handlers = {}, Ii(this), Up.pointerEventsSupported ? e(Rm, this) : (Up.touchEventsSupported && e(Om,
				this), e(Lm, this))
	}

	function Ci(t, e) {
		var n = new Hm(Hp(), t, e);
		return Vm[n.id] = n, n
	}

	function Di(t) {
		if (t) t.dispose();
		else {
			for (var e in Vm) Vm.hasOwnProperty(e) && Vm[e].dispose();
			Vm = {}
		}
		return this
	}

	function Ai(t) {
		return Vm[t]
	}

	function ki(t, e) {
		Fm[t] = e
	}

	function Pi(t) {
		delete Vm[t]
	}

	function Li(t) {
		return t instanceof Array ? t : null == t ? [] : [t]
	}

	function Oi(t, e, n) {
		if (t) {
			t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
			for (var i = 0, r = n.length; r > i; i++) {
				var a = n[i];
				!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
			}
		}
	}

	function zi(t) {
		return !Xm(t) || Zm(t) || t instanceof Date ? t : t.value
	}

	function Ri(t) {
		return Xm(t) && !(t instanceof Array)
	}

	function Ei(t, e) {
		e = (e || []).slice();
		var n = p(t || [], function(t) {
			return {
				exist: t
			}
		});
		return Um(e, function(t, i) {
			if (Xm(t)) {
				for (var r = 0; r < n.length; r++)
					if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t,
						void(e[i] = null);
				for (var r = 0; r < n.length; r++) {
					var a = n[r].exist;
					if (!(n[r].option || null != a.id && null != t.id || null == t.name || Fi(t) || Fi(a) ||
							a.name !== t.name + "")) return n[r].option = t, void(e[i] = null)
				}
			}
		}), Um(e, function(t) {
			if (Xm(t)) {
				for (var e = 0; e < n.length; e++) {
					var i = n[e].exist;
					if (!n[e].option && !Fi(i) && null == t.id) {
						n[e].option = t;
						break
					}
				}
				e >= n.length && n.push({
					option: t
				})
			}
		}), n
	}

	function Bi(t) {
		var e = N();
		Um(t, function(t) {
			var n = t.exist;
			n && e.set(n.id, t)
		}), Um(t, function(t) {
			var n = t.option;
			O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)),
				n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
		}), Um(t, function(t, n) {
			var i = t.exist,
				r = t.option,
				a = t.keyInfo;
			if (Xm(r)) {
				if (a.name = null != r.name ? r.name + "" : i ? i.name : qm + n, i) a.id = i.id;
				else if (null != r.id) a.id = r.id + "";
				else {
					var o = 0;
					do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
				}
				e.set(a.id, t)
			}
		})
	}

	function Ni(t) {
		var e = t.name;
		return !(!e || !e.indexOf(qm))
	}

	function Fi(t) {
		return Xm(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
	}

	function Vi(t, e) {
		return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex,
			function(e) {
				return t.indexOfRawIndex(e)
			}) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function(e) {
			return t.indexOfName(e)
		}) : t.indexOfName(e.name) : void 0
	}

	function Gi() {
		var t = "__\x00ec_inner_" + Ym++ + "_" + Math.random().toFixed(5);
		return function(e) {
			return e[t] || (e[t] = {})
		}
	}

	function Hi(t, e, n) {
		if (b(e)) {
			var i = {};
			i[e + "Index"] = 0, e = i
		}
		var r = n && n.defaultMainType;
		!r || Wi(e, r + "Index") || Wi(e, r + "Id") || Wi(e, r + "Name") || (e[r + "Index"] = 0);
		var a = {};
		return Um(e, function(i, r) {
			var i = e[r];
			if ("dataIndex" === r || "dataIndexInside" === r) return void(a[r] = i);
			var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
				s = o[1],
				l = (o[2] || "").toLowerCase();
			if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n
					.includeMainTypes, s) < 0)) {
				var h = {
					mainType: s
				};
				("index" !== l || "all" !== i) && (h[l] = i);
				var c = t.queryComponents(h);
				a[s + "Models"] = c, a[s + "Model"] = c[0]
			}
		}), a
	}

	function Wi(t, e) {
		return t && t.hasOwnProperty(e)
	}

	function Ui(t, e, n) {
		t.setAttribute ? t.setAttribute(e, n) : t[e] = n
	}

	function Xi(t, e) {
		return t.getAttribute ? t.getAttribute(e) : t[e]
	}

	function Zi(t) {
		var e = {
			main: "",
			sub: ""
		};
		return t && (t = t.split(Km), e.main = t[0] || "", e.sub = t[1] || ""), e
	}

	function qi(t) {
		O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
	}

	function ji(t) {
		t.$constructor = t, t.extend = function(t) {
			var e = this,
				n = function() {
					t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
				};
			return o(n.prototype, t), n.extend = this.extend, n.superCall = Ki, n.superApply = $i, h(n, this), n
				.superClass = e, n
		}
	}

	function Yi(t) {
		var e = ["__\x00is_clz", Jm++, Math.random().toFixed(3)].join("_");
		t.prototype[e] = !0, t.isInstance = function(t) {
			return !(!t || !t[e])
		}
	}

	function Ki(t, e) {
		var n = P(arguments, 2);
		return this.superClass.prototype[e].apply(t, n)
	}

	function $i(t, e, n) {
		return this.superClass.prototype[e].apply(t, n)
	}

	function Ji(t, e) {
		function n(t) {
			var e = i[t.main];
			return e && e[$m] || (e = i[t.main] = {}, e[$m] = !0), e
		}
		e = e || {};
		var i = {};
		if (t.registerClass = function(t, e) {
				if (e)
					if (qi(e), e = Zi(e), e.sub) {
						if (e.sub !== $m) {
							var r = n(e);
							r[e.sub] = t
						}
					} else i[e.main] = t;
				return t
			}, t.getClass = function(t, e, n) {
				var r = i[t];
				if (r && r[$m] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e ||
					"") + " not exists. Load it first." : t + ".type should be specified.");
				return r
			}, t.getClassesByMainType = function(t) {
				t = Zi(t);
				var e = [],
					n = i[t.main];
				return n && n[$m] ? f(n, function(t, n) {
					n !== $m && e.push(t)
				}) : e.push(n), e
			}, t.hasClass = function(t) {
				return t = Zi(t), !!i[t.main]
			}, t.getAllClassMainTypes = function() {
				var t = [];
				return f(i, function(e, n) {
					t.push(n)
				}), t
			}, t.hasSubTypes = function(t) {
				t = Zi(t);
				var e = i[t.main];
				return e && e[$m]
			}, t.parseClassType = Zi, e.registerWhenExtend) {
			var r = t.extend;
			r && (t.extend = function(e) {
				var n = r.call(this, e);
				return t.registerClass(n, e.type)
			})
		}
		return t
	}

	function Qi(t) {
		return t > -ov && ov > t
	}

	function tr(t) {
		return t > ov || -ov > t
	}

	function er(t, e, n, i, r) {
		var a = 1 - r;
		return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
	}

	function nr(t, e, n, i, r) {
		var a = 1 - r;
		return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
	}

	function ir(t, e, n, i, r, a) {
		var o = i + 3 * (e - n) - t,
			s = 3 * (n - 2 * e + t),
			l = 3 * (e - t),
			u = t - r,
			h = s * s - 3 * o * l,
			c = s * l - 9 * o * u,
			d = l * l - 3 * s * u,
			f = 0;
		if (Qi(h) && Qi(c))
			if (Qi(s)) a[0] = 0;
			else {
				var p = -l / s;
				p >= 0 && 1 >= p && (a[f++] = p)
			}
		else {
			var g = c * c - 4 * h * d;
			if (Qi(g)) {
				var m = c / h,
					p = -s / o + m,
					v = -m / 2;
				p >= 0 && 1 >= p && (a[f++] = p), v >= 0 && 1 >= v && (a[f++] = v)
			} else if (g > 0) {
				var y = av(g),
					_ = h * s + 1.5 * o * (-c + y),
					x = h * s + 1.5 * o * (-c - y);
				_ = 0 > _ ? -rv(-_, uv) : rv(_, uv), x = 0 > x ? -rv(-x, uv) : rv(x, uv);
				var p = (-s - (_ + x)) / (3 * o);
				p >= 0 && 1 >= p && (a[f++] = p)
			} else {
				var w = (2 * h * s - 3 * o * c) / (2 * av(h * h * h)),
					b = Math.acos(w) / 3,
					S = av(h),
					M = Math.cos(b),
					p = (-s - 2 * S * M) / (3 * o),
					v = (-s + S * (M + lv * Math.sin(b))) / (3 * o),
					I = (-s + S * (M - lv * Math.sin(b))) / (3 * o);
				p >= 0 && 1 >= p && (a[f++] = p), v >= 0 && 1 >= v && (a[f++] = v), I >= 0 && 1 >= I && (a[f++] = I)
			}
		}
		return f
	}

	function rr(t, e, n, i, r) {
		var a = 6 * n - 12 * e + 6 * t,
			o = 9 * e + 3 * i - 3 * t - 9 * n,
			s = 3 * e - 3 * t,
			l = 0;
		if (Qi(o)) {
			if (tr(a)) {
				var u = -s / a;
				u >= 0 && 1 >= u && (r[l++] = u)
			}
		} else {
			var h = a * a - 4 * o * s;
			if (Qi(h)) r[0] = -a / (2 * o);
			else if (h > 0) {
				var c = av(h),
					u = (-a + c) / (2 * o),
					d = (-a - c) / (2 * o);
				u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
			}
		}
		return l
	}

	function ar(t, e, n, i, r, a) {
		var o = (e - t) * r + t,
			s = (n - e) * r + e,
			l = (i - n) * r + n,
			u = (s - o) * r + o,
			h = (l - s) * r + s,
			c = (h - u) * r + u;
		a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i
	}

	function or(t, e, n, i, r, a, o, s, l, u, h) {
		var c, d, f, p, g, m = .005,
			v = 1 / 0;
		hv[0] = l, hv[1] = u;
		for (var y = 0; 1 > y; y += .05) cv[0] = er(t, n, r, o, y), cv[1] = er(e, i, a, s, y), p = ug(hv, cv), v >
			p && (c = y, v = p);
		v = 1 / 0;
		for (var _ = 0; 32 > _ && !(sv > m); _++) d = c - m, f = c + m, cv[0] = er(t, n, r, o, d), cv[1] = er(e, i,
			a, s, d), p = ug(cv, hv), d >= 0 && v > p ? (c = d, v = p) : (dv[0] = er(t, n, r, o, f), dv[1] = er(
			e, i, a, s, f), g = ug(dv, hv), 1 >= f && v > g ? (c = f, v = g) : m *= .5);
		return h && (h[0] = er(t, n, r, o, c), h[1] = er(e, i, a, s, c)), av(v)
	}

	function sr(t, e, n, i) {
		var r = 1 - i;
		return r * (r * t + 2 * i * e) + i * i * n
	}

	function lr(t, e, n, i) {
		return 2 * ((1 - i) * (e - t) + i * (n - e))
	}

	function ur(t, e, n, i, r) {
		var a = t - 2 * e + n,
			o = 2 * (e - t),
			s = t - i,
			l = 0;
		if (Qi(a)) {
			if (tr(o)) {
				var u = -s / o;
				u >= 0 && 1 >= u && (r[l++] = u)
			}
		} else {
			var h = o * o - 4 * a * s;
			if (Qi(h)) {
				var u = -o / (2 * a);
				u >= 0 && 1 >= u && (r[l++] = u)
			} else if (h > 0) {
				var c = av(h),
					u = (-o + c) / (2 * a),
					d = (-o - c) / (2 * a);
				u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
			}
		}
		return l
	}

	function hr(t, e, n) {
		var i = t + n - 2 * e;
		return 0 === i ? .5 : (t - e) / i
	}

	function cr(t, e, n, i, r) {
		var a = (e - t) * i + t,
			o = (n - e) * i + e,
			s = (o - a) * i + a;
		r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
	}

	function dr(t, e, n, i, r, a, o, s, l) {
		var u, h = .005,
			c = 1 / 0;
		hv[0] = o, hv[1] = s;
		for (var d = 0; 1 > d; d += .05) {
			cv[0] = sr(t, n, r, d), cv[1] = sr(e, i, a, d);
			var f = ug(hv, cv);
			c > f && (u = d, c = f)
		}
		c = 1 / 0;
		for (var p = 0; 32 > p && !(sv > h); p++) {
			var g = u - h,
				m = u + h;
			cv[0] = sr(t, n, r, g), cv[1] = sr(e, i, a, g);
			var f = ug(cv, hv);
			if (g >= 0 && c > f) u = g, c = f;
			else {
				dv[0] = sr(t, n, r, m), dv[1] = sr(e, i, a, m);
				var v = ug(dv, hv);
				1 >= m && c > v ? (u = m, c = v) : h *= .5
			}
		}
		return l && (l[0] = sr(t, n, r, u), l[1] = sr(e, i, a, u)), av(c)
	}

	function fr(t, e, n) {
		if (0 !== t.length) {
			var i, r = t[0],
				a = r[0],
				o = r[0],
				s = r[1],
				l = r[1];
			for (i = 1; i < t.length; i++) r = t[i], a = fv(a, r[0]), o = pv(o, r[0]), s = fv(s, r[1]), l = pv(l, r[
				1]);
			e[0] = a, e[1] = s, n[0] = o, n[1] = l
		}
	}

	function pr(t, e, n, i, r, a) {
		r[0] = fv(t, n), r[1] = fv(e, i), a[0] = pv(t, n), a[1] = pv(e, i)
	}

	function gr(t, e, n, i, r, a, o, s, l, u) {
		var h, c = rr,
			d = er,
			f = c(t, n, r, o, wv);
		for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
			var p = d(t, n, r, o, wv[h]);
			l[0] = fv(p, l[0]), u[0] = pv(p, u[0])
		}
		for (f = c(e, i, a, s, bv), h = 0; f > h; h++) {
			var g = d(e, i, a, s, bv[h]);
			l[1] = fv(g, l[1]), u[1] = pv(g, u[1])
		}
		l[0] = fv(t, l[0]), u[0] = pv(t, u[0]), l[0] = fv(o, l[0]), u[0] = pv(o, u[0]), l[1] = fv(e, l[1]), u[1] =
			pv(e, u[1]), l[1] = fv(s, l[1]), u[1] = pv(s, u[1])
	}

	function mr(t, e, n, i, r, a, o, s) {
		var l = hr,
			u = sr,
			h = pv(fv(l(t, n, r), 1), 0),
			c = pv(fv(l(e, i, a), 1), 0),
			d = u(t, n, r, h),
			f = u(e, i, a, c);
		o[0] = fv(t, r, d), o[1] = fv(e, a, f), s[0] = pv(t, r, d), s[1] = pv(e, a, f)
	}

	function vr(t, e, n, i, r, a, o, s, l) {
		var u = oe,
			h = se,
			c = Math.abs(r - a);
		if (1e-4 > c % vv && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
		if (yv[0] = mv(r) * n + t, yv[1] = gv(r) * i + e, _v[0] = mv(a) * n + t, _v[1] = gv(a) * i + e, u(s, yv,
			_v), h(l, yv, _v), r %= vv, 0 > r && (r += vv), a %= vv, 0 > a && (a += vv), r > a && !o ? a += vv : a >
			r && o && (r += vv), o) {
			var d = a;
			a = r, r = d
		}
		for (var f = 0; a > f; f += Math.PI / 2) f > r && (xv[0] = mv(f) * n + t, xv[1] = gv(f) * i + e, u(s, xv,
			s), h(l, xv, l))
	}

	function yr(t, e, n, i, r, a, o) {
		if (0 === r) return !1;
		var s = r,
			l = 0,
			u = t;
		if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a)
			return !1;
		if (t === n) return Math.abs(a - t) <= s / 2;
		l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
		var h = l * a - o + u,
			c = h * h / (l * l + 1);
		return s / 2 * s / 2 >= c
	}

	function _r(t, e, n, i, r, a, o, s, l, u, h) {
		if (0 === l) return !1;
		var c = l;
		if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h ||
			u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u)
			return !1;
		var d = or(t, e, n, i, r, a, o, s, u, h, null);
		return c / 2 >= d
	}

	function xr(t, e, n, i, r, a, o, s, l) {
		if (0 === o) return !1;
		var u = o;
		if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u &&
			s > r + u || t - u > s && n - u > s && r - u > s) return !1;
		var h = dr(t, e, n, i, r, a, s, l, null);
		return u / 2 >= h
	}

	function wr(t) {
		return t %= Ev, 0 > t && (t += Ev), t
	}

	function br(t, e, n, i, r, a, o, s, l) {
		if (0 === o) return !1;
		var u = o;
		s -= t, l -= e;
		var h = Math.sqrt(s * s + l * l);
		if (h - u > n || n > h + u) return !1;
		if (Math.abs(i - r) % Bv < 1e-4) return !0;
		if (a) {
			var c = i;
			i = wr(r), r = wr(c)
		} else i = wr(i), r = wr(r);
		i > r && (r += Bv);
		var d = Math.atan2(l, s);
		return 0 > d && (d += Bv), d >= i && r >= d || d + Bv >= i && r >= d + Bv
	}

	function Sr(t, e, n, i, r, a) {
		if (a > e && a > i || e > a && i > a) return 0;
		if (i === e) return 0;
		var o = e > i ? 1 : -1,
			s = (a - e) / (i - e);
		(1 === s || 0 === s) && (o = e > i ? .5 : -.5);
		var l = s * (n - t) + t;
		return l === r ? 1 / 0 : l > r ? o : 0
	}

	function Mr(t, e) {
		return Math.abs(t - e) < Vv
	}

	function Ir() {
		var t = Hv[0];
		Hv[0] = Hv[1], Hv[1] = t
	}

	function Tr(t, e, n, i, r, a, o, s, l, u) {
		if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;
		var h = ir(e, i, a, s, u, Gv);
		if (0 === h) return 0;
		for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {
			var m = Gv[g],
				v = 0 === m || 1 === m ? .5 : 1,
				y = er(t, n, r, o, m);
			l > y || (0 > p && (p = rr(e, i, a, s, Hv), Hv[1] < Hv[0] && p > 1 && Ir(), c = er(e, i, a, s, Hv[0]),
					p > 1 && (d = er(e, i, a, s, Hv[1]))), f += 2 == p ? m < Hv[0] ? e > c ? v : -v : m < Hv[
				1] ? c > d ? v : -v : d > s ? v : -v : m < Hv[0] ? e > c ? v : -v : c > s ? v : -v)
		}
		return f
	}

	function Cr(t, e, n, i, r, a, o, s) {
		if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
		var l = ur(e, i, a, s, Gv);
		if (0 === l) return 0;
		var u = hr(e, i, a);
		if (u >= 0 && 1 >= u) {
			for (var h = 0, c = sr(e, i, a, u), d = 0; l > d; d++) {
				var f = 0 === Gv[d] || 1 === Gv[d] ? .5 : 1,
					p = sr(t, n, r, Gv[d]);
				o > p || (h += Gv[d] < u ? e > c ? f : -f : c > a ? f : -f)
			}
			return h
		}
		var f = 0 === Gv[0] || 1 === Gv[0] ? .5 : 1,
			p = sr(t, n, r, Gv[0]);
		return o > p ? 0 : e > a ? f : -f
	}

	function Dr(t, e, n, i, r, a, o, s) {
		if (s -= e, s > n || -n > s) return 0;
		var l = Math.sqrt(n * n - s * s);
		Gv[0] = -l, Gv[1] = l;
		var u = Math.abs(i - r);
		if (1e-4 > u) return 0;
		if (1e-4 > u % Fv) {
			i = 0, r = Fv;
			var h = a ? 1 : -1;
			return o >= Gv[0] + t && o <= Gv[1] + t ? h : 0
		}
		if (a) {
			var l = i;
			i = wr(r), r = wr(l)
		} else i = wr(i), r = wr(r);
		i > r && (r += Fv);
		for (var c = 0, d = 0; 2 > d; d++) {
			var f = Gv[d];
			if (f + t > o) {
				var p = Math.atan2(s, f),
					h = a ? 1 : -1;
				0 > p && (p = Fv + p), (p >= i && r >= p || p + Fv >= i && r >= p + Fv) && (p > Math.PI / 2 && p <
					1.5 * Math.PI && (h = -h), c += h)
			}
		}
		return c
	}

	function Ar(t, e, n, i, r) {
		for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
			var c = t[h++];
			switch (c === Nv.M && h > 1 && (n || (a += Sr(o, s, l, u, i, r))), 1 == h && (o = t[h], s = t[h + 1],
					l = o, u = s), c) {
				case Nv.M:
					l = t[h++], u = t[h++], o = l, s = u;
					break;
				case Nv.L:
					if (n) {
						if (yr(o, s, t[h], t[h + 1], e, i, r)) return !0
					} else a += Sr(o, s, t[h], t[h + 1], i, r) || 0;
					o = t[h++], s = t[h++];
					break;
				case Nv.C:
					if (n) {
						if (_r(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
					} else a += Tr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
					o = t[h++], s = t[h++];
					break;
				case Nv.Q:
					if (n) {
						if (xr(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
					} else a += Cr(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
					o = t[h++], s = t[h++];
					break;
				case Nv.A:
					var d = t[h++],
						f = t[h++],
						p = t[h++],
						g = t[h++],
						m = t[h++],
						v = t[h++],
						y = (t[h++], 1 - t[h++]),
						_ = Math.cos(m) * p + d,
						x = Math.sin(m) * g + f;
					h > 1 ? a += Sr(o, s, _, x, i, r) : (l = _, u = x);
					var w = (i - d) * g / p + d;
					if (n) {
						if (br(d, f, g, m, m + v, y, e, w, r)) return !0
					} else a += Dr(d, f, g, m, m + v, y, w, r);
					o = Math.cos(m + v) * p + d, s = Math.sin(m + v) * g + f;
					break;
				case Nv.R:
					l = o = t[h++], u = s = t[h++];
					var b = t[h++],
						S = t[h++],
						_ = l + b,
						x = u + S;
					if (n) {
						if (yr(l, u, _, u, e, i, r) || yr(_, u, _, x, e, i, r) || yr(_, x, l, x, e, i, r) || yr(l,
								x, l, u, e, i, r)) return !0
					} else a += Sr(_, u, _, x, i, r), a += Sr(l, x, l, u, i, r);
					break;
				case Nv.Z:
					if (n) {
						if (yr(o, s, l, u, e, i, r)) return !0
					} else a += Sr(o, s, l, u, i, r);
					o = l, s = u
			}
		}
		return n || Mr(s, u) || (a += Sr(o, s, l, u, i, r) || 0), 0 !== a
	}

	function kr(t, e, n) {
		return Ar(t, 0, !1, e, n)
	}

	function Pr(t, e, n, i) {
		return Ar(t, e, !0, n, i)
	}

	function Lr(t) {
		ri.call(this, t), this.path = null
	}

	function Or(t, e, n, i, r, a, o, s, l, u, h) {
		var c = l * (ey / 180),
			d = ty(c) * (t - n) / 2 + Qv(c) * (e - i) / 2,
			f = -1 * Qv(c) * (t - n) / 2 + ty(c) * (e - i) / 2,
			p = d * d / (o * o) + f * f / (s * s);
		p > 1 && (o *= Jv(p), s *= Jv(p));
		var g = (r === a ? -1 : 1) * Jv((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s *
				d * d)) || 0,
			m = g * o * f / s,
			v = g * -s * d / o,
			y = (t + n) / 2 + ty(c) * m - Qv(c) * v,
			_ = (e + i) / 2 + Qv(c) * m + ty(c) * v,
			x = ry([1, 0], [(d - m) / o, (f - v) / s]),
			w = [(d - m) / o, (f - v) / s],
			b = [(-1 * d - m) / o, (-1 * f - v) / s],
			S = ry(w, b);
		iy(w, b) <= -1 && (S = ey), iy(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * ey), 1 === a && 0 > S &&
			(S += 2 * ey), h.addData(u, y, _, o, s, x, S, c, a)
	}

	function zr(t) {
		if (!t) return [];
		var e, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
		for (e = 0; e < $v.length; e++) n = n.replace(new RegExp($v[e], "g"), "|" + $v[e]);
		var i, r = n.split("|"),
			a = 0,
			o = 0,
			s = new Rv,
			l = Rv.CMD;
		for (e = 1; e < r.length; e++) {
			var u, h = r[e],
				c = h.charAt(0),
				d = 0,
				f = h.slice(1).replace(/e,-/g, "e-").split(",");
			f.length > 0 && "" === f[0] && f.shift();
			for (var p = 0; p < f.length; p++) f[p] = parseFloat(f[p]);
			for (; d < f.length && !isNaN(f[d]) && !isNaN(f[0]);) {
				var g, m, v, y, _, x, w, b = a,
					S = o;
				switch (c) {
					case "l":
						a += f[d++], o += f[d++], u = l.L, s.addData(u, a, o);
						break;
					case "L":
						a = f[d++], o = f[d++], u = l.L, s.addData(u, a, o);
						break;
					case "m":
						a += f[d++], o += f[d++], u = l.M, s.addData(u, a, o), c = "l";
						break;
					case "M":
						a = f[d++], o = f[d++], u = l.M, s.addData(u, a, o), c = "L";
						break;
					case "h":
						a += f[d++], u = l.L, s.addData(u, a, o);
						break;
					case "H":
						a = f[d++], u = l.L, s.addData(u, a, o);
						break;
					case "v":
						o += f[d++], u = l.L, s.addData(u, a, o);
						break;
					case "V":
						o = f[d++], u = l.L, s.addData(u, a, o);
						break;
					case "C":
						u = l.C, s.addData(u, f[d++], f[d++], f[d++], f[d++], f[d++], f[d++]), a = f[d - 2], o = f[
							d - 1];
						break;
					case "c":
						u = l.C, s.addData(u, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] +
							o), a += f[d - 2], o += f[d - 1];
						break;
					case "S":
						g = a, m = o;
						var M = s.len(),
							I = s.data;
						i === l.C && (g += a - I[M - 4], m += o - I[M - 3]), u = l.C, b = f[d++], S = f[d++], a = f[
							d++], o = f[d++], s.addData(u, g, m, b, S, a, o);
						break;
					case "s":
						g = a, m = o;
						var M = s.len(),
							I = s.data;
						i === l.C && (g += a - I[M - 4], m += o - I[M - 3]), u = l.C, b = a + f[d++], S = o + f[
							d++], a += f[d++], o += f[d++], s.addData(u, g, m, b, S, a, o);
						break;
					case "Q":
						b = f[d++], S = f[d++], a = f[d++], o = f[d++], u = l.Q, s.addData(u, b, S, a, o);
						break;
					case "q":
						b = f[d++] + a, S = f[d++] + o, a += f[d++], o += f[d++], u = l.Q, s.addData(u, b, S, a, o);
						break;
					case "T":
						g = a, m = o;
						var M = s.len(),
							I = s.data;
						i === l.Q && (g += a - I[M - 4], m += o - I[M - 3]), a = f[d++], o = f[d++], u = l.Q, s
							.addData(u, g, m, a, o);
						break;
					case "t":
						g = a, m = o;
						var M = s.len(),
							I = s.data;
						i === l.Q && (g += a - I[M - 4], m += o - I[M - 3]), a += f[d++], o += f[d++], u = l.Q, s
							.addData(u, g, m, a, o);
						break;
					case "A":
						v = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], b = a, S = o, a = f[d++], o = f[
							d++], u = l.A, Or(b, S, a, o, x, w, v, y, _, u, s);
						break;
					case "a":
						v = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], b = a, S = o, a += f[d++], o +=
							f[d++], u = l.A, Or(b, S, a, o, x, w, v, y, _, u, s)
				}
			}("z" === c || "Z" === c) && (u = l.Z, s.addData(u)), i = u
		}
		return s.toStatic(), s
	}

	function Rr(t, e) {
		var n = zr(t);
		return e = e || {}, e.buildPath = function(t) {
			if (t.setData) {
				t.setData(n.data);
				var e = t.getContext();
				e && t.rebuildPath(e)
			} else {
				var e = t;
				n.rebuildPath(e)
			}
		}, e.applyTransform = function(t) {
			Kv(n, t), this.dirty(!0)
		}, e
	}

	function Er(t, e) {
		return new Lr(Rr(t, e))
	}

	function Br(t, e) {
		return Lr.extend(Rr(t, e))
	}

	function Nr(t, e) {
		for (var n = [], i = t.length, r = 0; i > r; r++) {
			var a = t[r];
			a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
		}
		var o = new Lr(e);
		return o.createPathProxy(), o.buildPath = function(t) {
			t.appendPath(n);
			var e = t.getContext();
			e && t.rebuildPath(e)
		}, o
	}

	function Fr(t, e, n, i, r, a, o) {
		var s = .5 * (n - t),
			l = .5 * (i - e);
		return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
	}

	function Vr(t, e, n) {
		var i = e.points,
			r = e.smooth;
		if (i && i.length >= 2) {
			if (r && "spline" !== r) {
				var a = dy(i, r, n, e.smoothConstraint);
				t.moveTo(i[0][0], i[0][1]);
				for (var o = i.length, s = 0;
					(n ? o : o - 1) > s; s++) {
					var l = a[2 * s],
						u = a[2 * s + 1],
						h = i[(s + 1) % o];
					t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
				}
			} else {
				"spline" === r && (i = cy(i, n)), t.moveTo(i[0][0], i[0][1]);
				for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
			}
			n && t.closePath()
		}
	}

	function Gr(t, e, n) {
		var i = t.cpx2,
			r = t.cpy2;
		return null === i || null === r ? [(n ? nr : er)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? nr : er)(t.y1, t.cpy1,
			t.cpy2, t.y2, e)] : [(n ? lr : sr)(t.x1, t.cpx1, t.x2, e), (n ? lr : sr)(t.y1, t.cpy1, t.y2, e)]
	}

	function Hr(t) {
		ri.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this
			.notClear = !0
	}

	function Wr(t) {
		return Lr.extend(t)
	}

	function Ur(t, e) {
		return Br(t, e)
	}

	function Xr(t, e, n, i) {
		var r = Er(t, e),
			a = r.getBoundingRect();
		return n && ("center" === i && (n = qr(n, a)), jr(r, n)), r
	}

	function Zr(t, e, n) {
		var i = new ai({
			style: {
				image: t,
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height
			},
			onload: function(t) {
				if ("center" === n) {
					var r = {
						width: t.width,
						height: t.height
					};
					i.setStyle(qr(e, r))
				}
			}
		});
		return i
	}

	function qr(t, e) {
		var n, i = e.width / e.height,
			r = t.height * i;
		r <= t.width ? n = t.height : (r = t.width, n = r / i);
		var a = t.x + t.width / 2,
			o = t.y + t.height / 2;
		return {
			x: a - r / 2,
			y: o - n / 2,
			width: r,
			height: n
		}
	}

	function jr(t, e) {
		if (t.applyTransform) {
			var n = t.getBoundingRect(),
				i = n.calculateTransform(e);
			t.applyTransform(i)
		}
	}

	function Yr(t) {
		var e = t.shape,
			n = t.style.lineWidth;
		return Iy(2 * e.x1) === Iy(2 * e.x2) && (e.x1 = e.x2 = $r(e.x1, n, !0)), Iy(2 * e.y1) === Iy(2 * e.y2) && (e
			.y1 = e.y2 = $r(e.y1, n, !0)), t
	}

	function Kr(t) {
		var e = t.shape,
			n = t.style.lineWidth,
			i = e.x,
			r = e.y,
			a = e.width,
			o = e.height;
		return e.x = $r(e.x, n, !0), e.y = $r(e.y, n, !0), e.width = Math.max($r(i + a, n, !1) - e.x, 0 === a ? 0 :
			1), e.height = Math.max($r(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
	}

	function $r(t, e, n) {
		var i = Iy(2 * t);
		return (i + Iy(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
	}

	function Jr(t) {
		return null != t && "none" != t
	}

	function Qr(t) {
		return "string" == typeof t ? Be(t, -.1) : t
	}

	function ta(t) {
		if (t.__hoverStlDirty) {
			var e = t.style.stroke,
				n = t.style.fill,
				i = t.__hoverStl;
			i.fill = i.fill || (Jr(n) ? Qr(n) : null), i.stroke = i.stroke || (Jr(e) ? Qr(e) : null);
			var r = {};
			for (var a in i) null != i[a] && (r[a] = t.style[a]);
			t.__normalStl = r, t.__hoverStlDirty = !1
		}
	}

	function ea(t) {
		if (!t.__isHover) {
			if (ta(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);
			else {
				var e = t.style,
					n = e.insideRollbackOpt;
				n && _a(e), e.extendFrom(t.__hoverStl), n && (ya(e, e.insideOriginalTextPosition, n), null == e
					.textFill && (e.textFill = n.autoColor)), t.dirty(!1), t.z2 += 1
			}
			t.__isHover = !0
		}
	}

	function na(t) {
		if (t.__isHover) {
			var e = t.__normalStl;
			t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
		}
	}

	function ia(t) {
		"group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && ea(t)
		}) : ea(t)
	}

	function ra(t) {
		"group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && na(t)
		}) : na(t)
	}

	function aa(t, e) {
		t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && ta(t)
	}

	function oa(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && ia(this)
	}

	function sa(t) {
		this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && ra(this)
	}

	function la() {
		this.__isEmphasis = !0, ia(this)
	}

	function ua() {
		this.__isEmphasis = !1, ra(this)
	}

	function ha(t, e, n) {
		t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch, "group" === t.type ? t.traverse(function(t) {
			"group" !== t.type && aa(t, e)
		}) : aa(t, e), t.on("mouseover", oa).on("mouseout", sa), t.on("emphasis", la).on("normal", ua)
	}

	function ca(t, e, n, i, r, a, o) {
		r = r || Dy;
		var s, l = r.labelFetcher,
			u = r.labelDataIndex,
			h = r.labelDimIndex,
			c = n.getShallow("show"),
			d = i.getShallow("show");
		(c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r
			.defaultText(u, r) : r.defaultText));
		var f = c ? s : null,
			p = d ? A(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
		(null != f || null != p) && (da(t, n, a, r), da(e, i, o, r, !0)), t.text = f, e.text = p
	}

	function da(t, e, n, i, r) {
		return pa(t, e, i, r), n && o(t, n), t.host && t.host.dirty && t.host.dirty(!1), t
	}

	function fa(t, e, n) {
		var i, r = {
			isRectText: !0
		};
		n === !1 ? i = !0 : r.autoColor = n, pa(t, e, r, i), t.host && t.host.dirty && t.host.dirty(!1)
	}

	function pa(t, e, n, i) {
		if (n = n || Dy, n.isRectText) {
			var r = e.getShallow("position") || (i ? null : "inside");
			"outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
			var a = e.getShallow("rotate");
			null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = A(e.getShallow("distance"), i ?
				null : 5)
		}
		var o, s = e.ecModel,
			l = s && s.option.textStyle,
			u = ga(e);
		if (u) {
			o = {};
			for (var h in u)
				if (u.hasOwnProperty(h)) {
					var c = e.getModel(["rich", h]);
					ma(o[h] = {}, c, l, n, i)
				}
		}
		return t.rich = o, ma(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
	}

	function ga(t) {
		for (var e; t && t !== t.ecModel;) {
			var n = (t.option || Dy).rich;
			if (n) {
				e = e || {};
				for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
			}
			t = t.parentModel
		}
		return e
	}

	function ma(t, e, n, i, r, a) {
		if (n = !r && n || Dy, t.textFill = va(e.getShallow("color"), i) || n.color, t.textStroke = va(e.getShallow(
				"textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = A(e.getShallow("textBorderWidth"),
				n.textBorderWidth), !r) {
			if (a) {
				var o = t.textPosition;
				t.insideRollback = ya(t, o, i), t.insideOriginalTextPosition = o, t.insideRollbackOpt = i
			}
			null == t.textFill && (t.textFill = i.autoColor)
		}
		t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n
			.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow(
				"fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e
			.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"),
			t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow(
				"tag"), a && i.disableBox || (t.textBackgroundColor = va(e.getShallow("backgroundColor"), i), t
				.textPadding = e.getShallow("padding"), t.textBorderColor = va(e.getShallow("borderColor"), i), t
				.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t
				.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"),
				t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow(
					"shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t
			.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e
			.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow(
				"textShadowOffsetY") || n.textShadowOffsetY
	}

	function va(t, e) {
		return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
	}

	function ya(t, e, n) {
		var i, r = n.useInsideStyle;
		return null == t.textFill && r !== !1 && (r === !0 || n.isRectText && e && "string" == typeof e && e
			.indexOf("inside") >= 0) && (i = {
			textFill: null,
			textStroke: t.textStroke,
			textStrokeWidth: t.textStrokeWidth
		}, t.textFill = "#fff", null == t.textStroke && (t.textStroke = n.autoColor, null == t
			.textStrokeWidth && (t.textStrokeWidth = 2))), i
	}

	function _a(t) {
		var e = t.insideRollback;
		e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth)
	}

	function xa(t, e) {
		var n = e || e.getModel("textStyle");
		return z([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow(
				"fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t
			.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"
		].join(" "))
	}

	function wa(t, e, n, i, r, a) {
		"function" == typeof r && (a = r, r = null);
		var o = i && i.isAnimationEnabled();
		if (o) {
			var s = t ? "Update" : "",
				l = i.getShallow("animationDuration" + s),
				u = i.getShallow("animationEasing" + s),
				h = i.getShallow("animationDelay" + s);
			"function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) :
				null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e
					.stopAnimation(), e.attr(n), a && a())
		} else e.stopAnimation(), e.attr(n), a && a()
	}

	function ba(t, e, n, i, r) {
		wa(!0, t, e, n, i, r)
	}

	function Sa(t, e, n, i, r) {
		wa(!1, t, e, n, i, r)
	}

	function Ma(t, e) {
		for (var n = pe([]); t && t !== e;) me(n, t.getLocalTransform(), n), t = t.parent;
		return n
	}

	function Ia(t, e, n) {
		return e && !d(e) && (e = xg.getLocalTransform(e)), n && (e = xe([], e)), ae([], t, e)
	}

	function Ta(t, e, n) {
		var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
			r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
			a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
		return a = Ia(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ?
			"bottom" : "top"
	}

	function Ca(t, e, n) {
		function i(t) {
			var e = {};
			return t.traverse(function(t) {
				!t.isGroup && t.anid && (e[t.anid] = t)
			}), e
		}

		function r(t) {
			var e = {
				position: W(t.position),
				rotation: t.rotation
			};
			return t.shape && (e.shape = o({}, t.shape)), e
		}
		if (t && e) {
			var a = i(t);
			e.traverse(function(t) {
				if (!t.isGroup && t.anid) {
					var e = a[t.anid];
					if (e) {
						var i = r(t);
						t.attr(r(e)), ba(t, i, n, t.dataIndex)
					}
				}
			})
		}
	}

	function Da(t, e) {
		return p(t, function(t) {
			var n = t[0];
			n = Ty(n, e.x), n = Cy(n, e.x + e.width);
			var i = t[1];
			return i = Ty(i, e.y), i = Cy(i, e.y + e.height), [n, i]
		})
	}

	function Aa(t, e) {
		var n = Ty(t.x, e.x),
			i = Cy(t.x + t.width, e.x + e.width),
			r = Ty(t.y, e.y),
			a = Cy(t.y + t.height, e.y + e.height);
		return i >= n && a >= r ? {
			x: n,
			y: r,
			width: i - n,
			height: a - r
		} : void 0
	}

	function ka(t, e, n) {
		e = o({
			rectHover: !0
		}, e);
		var i = e.style = {
			strokeNoScale: !0
		};
		return n = n || {
			x: -1,
			y: -1,
			width: 2,
			height: 2
		}, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new ai(e)) : Xr(t.replace(
			"path://", ""), e, n, "center") : void 0
	}

	function Pa(t, e, n) {
		this.parentModel = e, this.ecModel = n, this.option = t
	}

	function La(t, e, n) {
		for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++)
		;
		return null == t && n && (t = n.get(e)), t
	}

	function Oa(t, e) {
		var n = Ey(t).getParent;
		return n ? n.call(t, e) : t.parentModel
	}

	function za(t) {
		return [t || "", By++, Math.random().toFixed(5)].join("_")
	}

	function Ra(t) {
		var e = {};
		return t.registerSubTypeDefaulter = function(t, n) {
			t = Zi(t), e[t.main] = n
		}, t.determineSubType = function(n, i) {
			var r = i.type;
			if (!r) {
				var a = Zi(n).main;
				t.hasSubTypes(n) && e[a] && (r = e[a](i))
			}
			return r
		}, t
	}

	function Ea(t, e) {
		function n(t) {
			var n = {},
				a = [];
			return f(t, function(o) {
				var s = i(n, o),
					l = s.originalDeps = e(o),
					h = r(l, t);
				s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function(t) {
					u(s.predecessor, t) < 0 && s.predecessor.push(t);
					var e = i(n, t);
					u(e.successor, t) < 0 && e.successor.push(o)
				})
			}), {
				graph: n,
				noEntryList: a
			}
		}

		function i(t, e) {
			return t[e] || (t[e] = {
				predecessor: [],
				successor: []
			}), t[e]
		}

		function r(t, e) {
			var n = [];
			return f(t, function(t) {
				u(e, t) >= 0 && n.push(t)
			}), n
		}
		t.topologicalTravel = function(t, e, i, r) {
			function a(t) {
				l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
			}

			function o(t) {
				h[t] = !0, a(t)
			}
			if (t.length) {
				var s = n(e),
					l = s.graph,
					u = s.noEntryList,
					h = {};
				for (f(t, function(t) {
						h[t] = !0
					}); u.length;) {
					var c = u.pop(),
						d = l[c],
						p = !!h[c];
					p && (i.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? o : a)
				}
				f(h, function() {
					throw new Error("Circle dependency may exists")
				})
			}
		}
	}

	function Ba(t) {
		return t.replace(/^\s+/, "").replace(/\s+$/, "")
	}

	function Na(t, e, n, i) {
		var r = e[1] - e[0],
			a = n[1] - n[0];
		if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
		if (i)
			if (r > 0) {
				if (t <= e[0]) return n[0];
				if (t >= e[1]) return n[1]
			} else {
				if (t >= e[0]) return n[0];
				if (t <= e[1]) return n[1]
			}
		else {
			if (t === e[0]) return n[0];
			if (t === e[1]) return n[1]
		}
		return (t - e[0]) / r * a + n[0]
	}

	function Fa(t, e) {
		switch (t) {
			case "center":
			case "middle":
				t = "50%";
				break;
			case "left":
			case "top":
				t = "0%";
				break;
			case "right":
			case "bottom":
				t = "100%"
		}
		return "string" == typeof t ? Ba(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 /
			0 : +t
	}

	function Va(t, e, n) {
		return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
	}

	function Ga(t) {
		return t.sort(function(t, e) {
			return t - e
		}), t
	}

	function Ha(t) {
		if (t = +t, isNaN(t)) return 0;
		for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
		return n
	}

	function Wa(t) {
		var e = t.toString(),
			n = e.indexOf("e");
		if (n > 0) {
			var i = +e.slice(n + 1);
			return 0 > i ? -i : 0
		}
		var r = e.indexOf(".");
		return 0 > r ? 0 : e.length - 1 - r
	}

	function Ua(t, e) {
		var n = Math.log,
			i = Math.LN10,
			r = Math.floor(n(t[1] - t[0]) / i),
			a = Math.round(n(Math.abs(e[1] - e[0])) / i),
			o = Math.min(Math.max(-r + a, 0), 20);
		return isFinite(o) ? o : 20
	}

	function Xa(t, e, n) {
		if (!t[e]) return 0;
		var i = g(t, function(t, e) {
			return t + (isNaN(e) ? 0 : e)
		}, 0);
		if (0 === i) return 0;
		for (var r = Math.pow(10, n), a = p(t, function(t) {
				return (isNaN(t) ? 0 : t) / i * r * 100
			}), o = 100 * r, s = p(a, function(t) {
				return Math.floor(t)
			}), l = g(s, function(t, e) {
				return t + e
			}, 0), u = p(a, function(t, e) {
				return t - s[e]
			}); o > l;) {
			for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) u[d] > h && (h = u[d],
				c = d);
			++s[c], u[c] = 0, ++l
		}
		return s[e] / r
	}

	function Za(t) {
		var e = 2 * Math.PI;
		return (t % e + e) % e
	}

	function qa(t) {
		return t > -Ny && Ny > t
	}

	function ja(t) {
		if (t instanceof Date) return t;
		if ("string" == typeof t) {
			var e = Vy.exec(t);
			if (!e) return new Date(0 / 0);
			if (e[8]) {
				var n = +e[4] || 0;
				return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] ||
					1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
			}
			return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
		}
		return new Date(null == t ? 0 / 0 : Math.round(t))
	}

	function Ya(t) {
		return Math.pow(10, Ka(t))
	}

	function Ka(t) {
		return Math.floor(Math.log(t) / Math.LN10)
	}

	function $a(t, e) {
		var n, i = Ka(t),
			r = Math.pow(10, i),
			a = t / r;
		return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 :
			5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
	}

	function Ja(t) {
		function e(t, n, i) {
			return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] ===
				(i ? -1 : 1) || !i && e(t, n, 1))
		}
		t.sort(function(t, n) {
			return e(t, n, 0) ? -1 : 1
		});
		for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
			for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 :
				1 - i), n = a[s], i = o[s];
			a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
		}
		return t
	}

	function Qa(t) {
		return t - parseFloat(t) >= 0
	}

	function to(t) {
		return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t
			.length > 1 ? "." + t[1] : ""))
	}

	function eo(t, e) {
		return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
			return e.toUpperCase()
		}), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
	}

	function no(t) {
		return null == t ? "" : (t + "").replace(Wy, function(t, e) {
			return Uy[e]
		})
	}

	function io(t, e, n) {
		x(e) || (e = [e]);
		var i = e.length;
		if (!i) return "";
		for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
			var o = Xy[a];
			t = t.replace(Zy(o), Zy(o, 0))
		}
		for (var s = 0; i > s; s++)
			for (var l = 0; l < r.length; l++) {
				var u = e[s][r[l]];
				t = t.replace(Zy(Xy[l], s), n ? no(u) : u)
			}
		return t
	}

	function ro(t, e, n) {
		return f(e, function(e, i) {
			t = t.replace("{" + i + "}", n ? no(e) : e)
		}), t
	}

	function ao(t, e) {
		t = b(t) ? {
			color: t,
			extraCssText: e
		} : t || {};
		var n = t.color,
			i = t.type,
			e = t.extraCssText;
		return n ? "subItem" === i ?
			'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
			no(n) + ";" + (e || "") + '"></span>' :
			'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
			no(n) + ";" + (e || "") + '"></span>' : ""
	}

	function oo(t, e) {
		return t += "", "0000".substr(0, e - t.length) + t
	}

	function so(t, e, n) {
		("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t =
			"MM-dd\nyyyy");
		var i = ja(e),
			r = n ? "UTC" : "",
			a = i["get" + r + "FullYear"](),
			o = i["get" + r + "Month"]() + 1,
			s = i["get" + r + "Date"](),
			l = i["get" + r + "Hours"](),
			u = i["get" + r + "Minutes"](),
			h = i["get" + r + "Seconds"](),
			c = i["get" + r + "Milliseconds"]();
		return t = t.replace("MM", oo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd",
			oo(s, 2)).replace("d", s).replace("hh", oo(l, 2)).replace("h", l).replace("mm", oo(u, 2)).replace(
			"m", u).replace("ss", oo(h, 2)).replace("s", h).replace("SSS", oo(c, 3))
	}

	function lo(t) {
		return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
	}

	function uo(t, e, n, i, r) {
		var a = 0,
			o = 0;
		null == i && (i = 1 / 0), null == r && (r = 1 / 0);
		var s = 0;
		e.eachChild(function(l, u) {
			var h, c, d = l.position,
				f = l.getBoundingRect(),
				p = e.childAt(u + 1),
				g = p && p.getBoundingRect();
			if ("horizontal" === t) {
				var m = f.width + (g ? -g.x + f.x : 0);
				h = a + m, h > i || l.newline ? (a = 0, h = m, o += s + n, s = f.height) : s = Math.max(s, f
					.height)
			} else {
				var v = f.height + (g ? -g.y + f.y : 0);
				c = o + v, c > r || l.newline ? (a += s + n, o = 0, c = v, s = f.width) : s = Math.max(s, f
					.width)
			}
			l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n)
		})
	}

	function ho(t, e, n) {
		n = Hy(n || 0);
		var i = e.width,
			r = e.height,
			a = Fa(t.left, i),
			o = Fa(t.top, r),
			s = Fa(t.right, i),
			l = Fa(t.bottom, r),
			u = Fa(t.width, i),
			h = Fa(t.height, r),
			c = n[2] + n[0],
			d = n[1] + n[3],
			f = t.aspect;
		switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(
				h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)),
			isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
			case "center":
				a = i / 2 - u / 2 - n[3];
				break;
			case "right":
				a = i - u - d
		}
		switch (t.top || t.bottom) {
			case "middle":
			case "center":
				o = r / 2 - h / 2 - n[0];
				break;
			case "bottom":
				o = r - h - c
		}
		a = a || 0, o = o || 0, isNaN(u) && (u = i - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));
		var p = new rn(a + n[3], o + n[0], u, h);
		return p.margin = n, p
	}

	function co(t, e, n) {
		function i(n, i) {
			var o = {},
				l = 0,
				u = {},
				h = 0,
				c = 2;
			if (Ky(n, function(e) {
					u[e] = t[e]
				}), Ky(n, function(t) {
					r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++
				}), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;
			if (h !== c && l) {
				if (l >= c) return o;
				for (var d = 0; d < n.length; d++) {
					var f = n[d];
					if (!r(o, f) && r(t, f)) {
						o[f] = t[f];
						break
					}
				}
				return o
			}
			return u
		}

		function r(t, e) {
			return t.hasOwnProperty(e)
		}

		function a(t, e) {
			return null != t[e] && "auto" !== t[e]
		}

		function o(t, e, n) {
			Ky(t, function(t) {
				e[t] = n[t]
			})
		}!S(n) && (n = {});
		var s = n.ignoreSize;
		!x(s) && (s = [s, s]);
		var l = i(Jy[0], 0),
			u = i(Jy[1], 1);
		o(Jy[0], t, l), o(Jy[1], t, u)
	}

	function fo(t) {
		return po({}, t)
	}

	function po(t, e) {
		return e && t && Ky($y, function(n) {
			e.hasOwnProperty(n) && (t[n] = e[n])
		}), t
	}

	function go(t) {
		var e = [];
		return f(n_.getClassesByMainType(t), function(t) {
			e = e.concat(t.prototype.dependencies || [])
		}), e = p(e, function(t) {
			return Zi(t).main
		}), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e
	}

	function mo(t, e) {
		for (var n = t.length, i = 0; n > i; i++)
			if (t[i].length > e) return t[i];
		return t[n - 1]
	}

	function vo(t) {
		var e = t.get("coordinateSystem"),
			n = {
				coordSysName: e,
				coordSysDims: [],
				axisMap: N(),
				categoryAxisMap: N()
			},
			i = s_[e];
		return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
	}

	function yo(t) {
		return "category" === t.get("type")
	}

	function _o(t) {
		this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === c_ ? {} : []), this
			.sourceFormat = t.sourceFormat || d_, this.seriesLayoutBy = t.seriesLayoutBy || p_, this
			.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && N(t.encodeDefine), this
			.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
	}

	function xo(t) {
		var e = t.option.source,
			n = d_;
		if (I(e)) n = f_;
		else if (x(e))
			for (var i = 0, r = e.length; r > i; i++) {
				var a = e[i];
				if (null != a) {
					if (x(a)) {
						n = u_;
						break
					}
					if (S(a)) {
						n = h_;
						break
					}
				}
			} else if (S(e)) {
				for (var o in e)
					if (e.hasOwnProperty(o) && d(e[o])) {
						n = c_;
						break
					}
			} else if (null != e) throw new Error("Invalid data");
		m_(t).sourceFormat = n
	}

	function wo(t) {
		return m_(t).source
	}

	function bo(t) {
		m_(t).datasetMap = N()
	}

	function So(t) {
		var e = t.option,
			n = e.data,
			i = I(n) ? f_ : l_,
			r = !1,
			a = e.seriesLayoutBy,
			o = e.sourceHeader,
			s = e.dimensions,
			l = Ao(t);
		if (l) {
			var u = l.option;
			n = u.source, i = m_(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u
				.sourceHeader), s = s || u.dimensions
		}
		var h = Mo(n, i, a, o, s),
			c = e.encode;
		!c && l && (c = Do(t, l, n, i, a, h)), m_(t).source = new _o({
			data: n,
			fromDataset: r,
			seriesLayoutBy: a,
			sourceFormat: i,
			dimensionsDefine: h.dimensionsDefine,
			startIndex: h.startIndex,
			dimensionsDetectCount: h.dimensionsDetectCount,
			encodeDefine: c
		})
	}

	function Mo(t, e, n, i, r) {
		if (!t) return {
			dimensionsDefine: Io(r)
		};
		var a, o, s;
		if (e === u_) "auto" === i || null == i ? To(function(t) {
			null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
		}, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], To(function(t, e) {
			r[e] = null != t ? t : ""
		}, n, t)), a = r ? r.length : n === g_ ? t.length : t[0] ? t[0].length : null;
		else if (e === h_) r || (r = Co(t), s = !0);
		else if (e === c_) r || (r = [], s = !0, f(t, function(t, e) {
			r.push(e)
		}));
		else if (e === l_) {
			var l = zi(t[0]);
			a = x(l) && l.length || 1
		}
		var u;
		return s && f(r, function(t, e) {
			"name" === (S(t) ? t.name : t) && (u = e)
		}), {
			startIndex: o,
			dimensionsDefine: Io(r),
			dimensionsDetectCount: a,
			potentialNameDimIndex: u
		}
	}

	function Io(t) {
		if (t) {
			var e = N();
			return p(t, function(t) {
				if (t = o({}, S(t) ? t : {
						name: t
					}), null == t.name) return t;
				t.name += "", null == t.displayName && (t.displayName = t.name);
				var n = e.get(t.name);
				return n ? t.name += "-" + n.count++ : e.set(t.name, {
					count: 1
				}), t
			})
		}
	}

	function To(t, e, n, i) {
		if (null == i && (i = 1 / 0), e === g_)
			for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
		else
			for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r)
	}

	function Co(t) {
		for (var e, n = 0; n < t.length && !(e = t[n++]););
		if (e) {
			var i = [];
			return f(e, function(t, e) {
				i.push(e)
			}), i
		}
	}

	function Do(t, e, n, i, r, a) {
		var o = vo(t),
			s = {},
			l = [],
			u = [],
			h = t.subType,
			c = N(["pie", "map", "funnel"]),
			d = N(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
		if (o && null != d.get(h)) {
			var p = t.ecModel,
				g = m_(p).datasetMap,
				m = e.uid + "_" + r,
				v = g.get(m) || g.set(m, {
					categoryWayDim: 1,
					valueWayDim: 0
				});
			f(o.coordSysDims, function(t) {
				if (null == o.firstCategoryDimIndex) {
					var e = v.valueWayDim++;
					s[t] = e, u.push(e)
				} else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);
				else {
					var e = v.categoryWayDim++;
					s[t] = e, u.push(e)
				}
			})
		} else if (null != c.get(h)) {
			for (var y, _ = 0; 5 > _ && null == y; _++) Po(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
			if (null != y) {
				s.value = y;
				var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
				u.push(x), l.push(x)
			}
		}
		return l.length && (s.itemName = l), u.length && (s.seriesName = u), s
	}

	function Ao(t) {
		var e = t.option,
			n = e.data;
		return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
	}

	function ko(t, e) {
		return Po(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
	}

	function Po(t, e, n, i, r, a) {
		function o(t) {
			return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
		}
		var s, l = 5;
		if (I(t)) return !1;
		var u;
		if (i && (u = i[a], u = S(u) ? u.name : u), e === u_)
			if (n === g_) {
				for (var h = t[a], c = 0; c < (h || []).length && l > c; c++)
					if (null != (s = o(h[r + c]))) return s
			} else
				for (var c = 0; c < t.length && l > c; c++) {
					var d = t[r + c];
					if (d && null != (s = o(d[a]))) return s
				} else if (e === h_) {
					if (!u) return;
					for (var c = 0; c < t.length && l > c; c++) {
						var f = t[c];
						if (f && null != (s = o(f[u]))) return s
					}
				} else if (e === c_) {
			if (!u) return;
			var h = t[u];
			if (!h || I(h)) return !1;
			for (var c = 0; c < h.length && l > c; c++)
				if (null != (s = o(h[c]))) return s
		} else if (e === l_)
			for (var c = 0; c < t.length && l > c; c++) {
				var f = t[c],
					p = zi(f);
				if (!x(p)) return !1;
				if (null != (s = o(p[a]))) return s
			}
		return !1
	}

	function Lo(t, e) {
		if (e) {
			var n = e.seiresIndex,
				i = e.seriesId,
				r = e.seriesName;
			return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
		}
	}

	function Oo(t, e) {
		var n = t.color && !t.colorLayer;
		f(e, function(e, a) {
			"colorLayer" === a && n || n_.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !
				1) : i(e) : null == t[a] && (t[a] = e))
		})
	}

	function zo(t) {
		t = t, this.option = {}, this.option[v_] = 1, this._componentsMap = N({
				series: []
			}), this._seriesIndices, this._seriesIndicesMap, Oo(t, this._theme.option), r(t, r_, !1), this
			.mergeOption(t)
	}

	function Ro(t, e) {
		x(e) || (e = e ? [e] : []);
		var n = {};
		return f(e, function(e) {
			n[e] = (t.get(e) || []).slice()
		}), n
	}

	function Eo(t, e, n) {
		var i = e.type ? e.type : n ? n.subType : n_.determineSubType(t, e);
		return i
	}

	function Bo(t, e) {
		t._seriesIndicesMap = N(t._seriesIndices = p(e, function(t) {
			return t.componentIndex
		}) || [])
	}

	function No(t, e) {
		return e.hasOwnProperty("subType") ? m(t, function(t) {
			return t.subType === e.subType
		}) : t
	}

	function Fo(t) {
		f(__, function(e) {
			this[e] = y(t[e], t)
		}, this)
	}

	function Vo() {
		this._coordinateSystems = []
	}

	function Go(t) {
		this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this
			._currentMediaIndices = [], this._optionBackup, this._newBaseOption
	}

	function Ho(t, e, n) {
		var i, r, a = [],
			o = [],
			s = t.timeline;
		if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t
			.media) {
			r = r || {};
			var l = t.media;
			w_(l, function(t) {
				t && t.option && (t.query ? o.push(t) : i || (i = t))
			})
		}
		return r || (r = t), r.timeline || (r.timeline = s), w_([r].concat(a).concat(p(o, function(t) {
			return t.option
		})), function(t) {
			w_(e, function(e) {
				e(t, n)
			})
		}), {
			baseOption: r,
			timelineOptions: a,
			mediaDefault: i,
			mediaList: o
		}
	}

	function Wo(t, e, n) {
		var i = {
				width: e,
				height: n,
				aspectratio: e / n
			},
			r = !0;
		return f(t, function(t, e) {
			var n = e.match(I_);
			if (n && n[1] && n[2]) {
				var a = n[1],
					o = n[2].toLowerCase();
				Uo(i[o], t, a) || (r = !1)
			}
		}), r
	}

	function Uo(t, e, n) {
		return "min" === n ? t >= e : "max" === n ? e >= t : t === e
	}

	function Xo(t, e) {
		return t.join(",") === e.join(",")
	}

	function Zo(t, e) {
		e = e || {}, w_(e, function(e, n) {
			if (null != e) {
				var i = t[n];
				if (n_.hasClass(n)) {
					e = Li(e), i = Li(i);
					var r = Ei(i, e);
					t[n] = S_(r, function(t) {
						return t.option && t.exist ? M_(t.exist, t.option, !0) : t.exist || t.option
					})
				} else t[n] = M_(i, e, !0)
			}
		})
	}

	function qo(t) {
		var e = t && t.itemStyle;
		if (e)
			for (var n = 0, i = D_.length; i > n; n++) {
				var a = D_[n],
					o = e.normal,
					s = e.emphasis;
				o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] =
					null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a]
					.emphasis = s[a], s[a] = null)
			}
	}

	function jo(t, e, n) {
		if (t && t[e] && (t[e].normal || t[e].emphasis)) {
			var i = t[e].normal,
				r = t[e].emphasis;
			i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis ||
			{}, t.emphasis[e] = r)
		}
	}

	function Yo(t) {
		jo(t, "itemStyle"), jo(t, "lineStyle"), jo(t, "areaStyle"), jo(t, "label"), jo(t, "labelLine"), jo(t,
			"upperLabel"), jo(t, "edgeLabel")
	}

	function Ko(t, e) {
		var n = C_(t) && t[e],
			i = C_(n) && n.textStyle;
		if (i)
			for (var r = 0, a = jm.length; a > r; r++) {
				var e = jm[r];
				i.hasOwnProperty(e) && (n[e] = i[e])
			}
	}

	function $o(t) {
		t && (Yo(t), Ko(t, "label"), t.emphasis && Ko(t.emphasis, "label"))
	}

	function Jo(t) {
		if (C_(t)) {
			qo(t), Yo(t), Ko(t, "label"), Ko(t, "upperLabel"), Ko(t, "edgeLabel"), t.emphasis && (Ko(t.emphasis,
				"label"), Ko(t.emphasis, "upperLabel"), Ko(t.emphasis, "edgeLabel"));
			var e = t.markPoint;
			e && (qo(e), $o(e));
			var n = t.markLine;
			n && (qo(n), $o(n));
			var i = t.markArea;
			i && $o(i);
			var r = t.data;
			if ("graph" === t.type) {
				r = r || t.nodes;
				var a = t.links || t.edges;
				if (a && !I(a))
					for (var o = 0; o < a.length; o++) $o(a[o]);
				f(t.categories, function(t) {
					Yo(t)
				})
			}
			if (r && !I(r))
				for (var o = 0; o < r.length; o++) $o(r[o]);
			var e = t.markPoint;
			if (e && e.data)
				for (var s = e.data, o = 0; o < s.length; o++) $o(s[o]);
			var n = t.markLine;
			if (n && n.data)
				for (var l = n.data, o = 0; o < l.length; o++) x(l[o]) ? ($o(l[o][0]), $o(l[o][1])) : $o(l[o]);
			"gauge" === t.type ? (Ko(t, "axisLabel"), Ko(t, "title"), Ko(t, "detail")) : "treemap" === t.type ? (jo(
				t.breadcrumb, "itemStyle"), f(t.levels, function(t) {
				Yo(t)
			})) : "tree" === t.type && Yo(t.leaves)
		}
	}

	function Qo(t) {
		return x(t) ? t : t ? [t] : []
	}

	function ts(t) {
		return (x(t) ? t[0] : t) || {}
	}

	function es(t, e) {
		e = e.split(",");
		for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);
		return n
	}

	function ns(t, e, n, i) {
		e = e.split(",");
		for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
		(i || null == a[e[o]]) && (a[e[o]] = n)
	}

	function is(t) {
		f(k_, function(e) {
			e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
		})
	}

	function rs(t) {
		f(t, function(e, n) {
			var i = [],
				r = [0 / 0, 0 / 0],
				a = [e.stackResultDimension, e.stackedOverDimension],
				o = e.data,
				s = e.isStackedByIndex,
				l = o.map(a, function(a, l, u) {
					var h = o.get(e.stackedDimension, u);
					if (isNaN(h)) return r;
					var c, d;
					s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);
					for (var f = 0 / 0, p = n - 1; p >= 0; p--) {
						var g = t[p];
						if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
							var m = g.data.getByRawIndex(g.stackResultDimension, d);
							if (h >= 0 && m > 0 || 0 >= h && 0 > m) {
								h += m, f = m;
								break
							}
						}
					}
					return i[0] = h, i[1] = f, i
				});
			o.hostModel.setData(l), e.data = l
		})
	}

	function as(t, e) {
		_o.isInstance(t) || (t = _o.seriesDataToSource(t)), this._source = t;
		var n = this._data = t.data,
			i = t.sourceFormat;
		i === f_ && (this._offset = 0, this._dimSize = e, this._data = n);
		var r = R_[i === u_ ? i + "_" + t.seriesLayoutBy : i];
		o(this, r)
	}

	function os() {
		return this._data.length
	}

	function ss(t) {
		return this._data[t]
	}

	function ls(t) {
		for (var e = 0; e < t.length; e++) this._data.push(t[e])
	}

	function us(t, e, n) {
		return null != n ? t[n] : t
	}

	function hs(t, e, n, i) {
		return cs(t[i], this._dimensionInfos[e])
	}

	function cs(t, e) {
		var n = e && e.type;
		if ("ordinal" === n) {
			var i = e && e.ordinalMeta;
			return i ? i.parseAndCollect(t) : t
		}
		return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +ja(t)), null == t || "" ===
			t ? 0 / 0 : +t
	}

	function ds(t, e, n) {
		if (t) {
			var i = t.getRawDataItem(e);
			if (null != i) {
				var r, a, o = t.getProvider().getSource().sourceFormat,
					s = t.getDimensionInfo(n);
				return s && (r = s.name, a = s.index), E_[o](i, e, a, r)
			}
		}
	}

	function fs(t, e, n) {
		if (t) {
			var i = t.getProvider().getSource().sourceFormat;
			if (i === l_ || i === h_) {
				var r = t.getRawDataItem(e);
				return i !== l_ || S(r) || (r = null), r ? r[n] : void 0
			}
		}
	}

	function ps(t) {
		return new gs(t)
	}

	function gs(t) {
		t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty,
			this._dirty = !0, this.context
	}

	function ms(t, e, n, i, r, a) {
		G_.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
			start: n,
			end: i,
			count: i - n,
			next: G_.next
		}, t.context)
	}

	function vs(t, e) {
		t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
		var n, i;
		!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress),
			x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
		var r = t._downstream;
		return r && r.dirty(), i
	}

	function ys(t) {
		var e = t.name;
		Ni(t) || (t.name = _s(t) || e)
	}

	function _s(t) {
		var e = t.getRawData(),
			n = e.mapDimension("seriesName", !0),
			i = [];
		return f(n, function(t) {
			var n = e.getDimensionInfo(t);
			n.displayName && i.push(n.displayName)
		}), i.join(" ")
	}

	function xs(t) {
		return t.model.getRawData().count()
	}

	function ws(t) {
		var e = t.model;
		return e.setData(e.getRawData().cloneShallow()), bs
	}

	function bs(t, e) {
		t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
	}

	function Ss(t, e) {
		f(t.CHANGABLE_METHODS, function(n) {
			t.wrapMethod(n, _(Ms, e))
		})
	}

	function Ms(t) {
		var e = Is(t);
		e && e.setOutputEnd(this.count())
	}

	function Is(t) {
		var e = (t.ecModel || {}).scheduler,
			n = e && e.getPipeline(t.uid);
		if (n) {
			var i = n.currentTask;
			if (i) {
				var r = i.agentStubMap;
				r && (i = r.get(t.uid))
			}
			return i
		}
	}

	function Ts() {
		this.group = new qg, this.uid = za("viewChart"), this.renderTask = ps({
			plan: As,
			reset: ks
		}), this.renderTask.context = {
			view: this
		}
	}

	function Cs(t, e) {
		if (t && (t.trigger(e), "group" === t.type))
			for (var n = 0; n < t.childCount(); n++) Cs(t.childAt(n), e)
	}

	function Ds(t, e, n) {
		var i = Vi(t, e);
		null != i ? f(Li(i), function(e) {
			Cs(t.getItemGraphicEl(e), n)
		}) : t.eachItemGraphicEl(function(t) {
			Cs(t, n)
		})
	}

	function As(t) {
		return j_(t.model)
	}

	function ks(t) {
		var e = t.model,
			n = t.ecModel,
			i = t.api,
			r = t.payload,
			a = e.pipelineContext.progressiveRender,
			o = t.view,
			s = r && q_(r).updateMethod,
			l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
		return "render" !== l && o[l](e, n, i, r), K_[l]
	}

	function Ps(t, e, n) {
		function i() {
			h = (new Date).getTime(), c = null, t.apply(o, s || [])
		}
		var r, a, o, s, l, u = 0,
			h = 0,
			c = null;
		e = e || 0;
		var d = function() {
			r = (new Date).getTime(), o = this, s = arguments;
			var t = l || e,
				d = l || n;
			l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c =
				setTimeout(i, -a), u = r
		};
		return d.clear = function() {
			c && (clearTimeout(c), c = null)
		}, d.debounceNextCall = function(t) {
			l = t
		}, d
	}

	function Ls(t, e, n, i) {
		var r = t[e];
		if (r) {
			var a = r[$_] || r,
				o = r[Q_],
				s = r[J_];
			if (s !== n || o !== i) {
				if (null == n || !i) return t[e] = a;
				r = t[e] = Ps(a, n, "debounce" === i), r[$_] = a, r[Q_] = i, r[J_] = n
			}
			return r
		}
	}

	function Os(t, e, n, i) {
		this.ecInstance = t, this.api = e, this.unfinished;
		var n = this._dataProcessorHandlers = n.slice(),
			i = this._visualHandlers = i.slice();
		this._allHandlers = n.concat(i), this._stageTaskMap = N()
	}

	function zs(t, e, n, i, r) {
		function a(t, e) {
			return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
		}
		r = r || {};
		var o;
		f(e, function(e) {
			if (!r.visualType || r.visualType === e.visualType) {
				var s = t._stageTaskMap.get(e.uid),
					l = s.seriesTaskMap,
					u = s.overallTask;
				if (u) {
					var h, c = u.agentStubMap;
					c.each(function(t) {
						a(r, t) && (t.dirty(), h = !0)
					}), h && u.dirty(), ox(u, i);
					var d = t.getPerformArgs(u, r.block);
					c.each(function(t) {
						t.perform(d)
					}), o |= u.perform(d)
				} else l && l.each(function(s) {
					a(r, s) && s.dirty();
					var l = t.getPerformArgs(s, r.block);
					l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), ox(s, i),
						o |= s.perform(l)
				})
			}
		}), t.unfinished |= o
	}

	function Rs(t, e, n, i, r) {
		function a(n) {
			var a = n.uid,
				s = o.get(a) || o.set(a, ps({
					plan: Gs,
					reset: Hs,
					count: Us
				}));
			s.context = {
				model: n,
				ecModel: i,
				api: r,
				useClearVisual: e.isVisual && !e.isLayout,
				plan: e.plan,
				reset: e.reset,
				scheduler: t
			}, Xs(t, n, s)
		}
		var o = n.seriesTaskMap || (n.seriesTaskMap = N()),
			s = e.seriesType,
			l = e.getTargetSeries;
		e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
		var u = t._pipelineMap;
		o.each(function(t, e) {
			u.get(e) || (t.dispose(), o.removeKey(e))
		})
	}

	function Es(t, e, n, i, r) {
		function a(e) {
			var n = e.uid,
				i = s.get(n);
			i || (i = s.set(n, ps({
				reset: Ns,
				onDirty: Vs
			})), o.dirty()), i.context = {
				model: e,
				overallProgress: h,
				modifyOutputEnd: c
			}, i.agent = o, i.__block = h, Xs(t, e, i)
		}
		var o = n.overallTask = n.overallTask || ps({
			reset: Bs
		});
		o.context = {
			ecModel: i,
			api: r,
			overallReset: e.overallReset,
			scheduler: t
		};
		var s = o.agentStubMap = o.agentStubMap || N(),
			l = e.seriesType,
			u = e.getTargetSeries,
			h = !0,
			c = e.modifyOutputEnd;
		l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = !1, f(i.getSeries(), a));
		var d = t._pipelineMap;
		s.each(function(t, e) {
			d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
		})
	}

	function Bs(t) {
		t.overallReset(t.ecModel, t.api, t.payload)
	}

	function Ns(t) {
		return t.overallProgress && Fs
	}

	function Fs() {
		this.agent.dirty(), this.getDownstream().dirty()
	}

	function Vs() {
		this.agent && this.agent.dirty()
	}

	function Gs(t) {
		return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
	}

	function Hs(t) {
		t.useClearVisual && t.data.clearAllVisual();
		var e = t.resetDefines = Li(t.reset(t.model, t.ecModel, t.api, t.payload));
		return e.length > 1 ? p(e, function(t, e) {
			return Ws(e)
		}) : sx
	}

	function Ws(t) {
		return function(e, n) {
			var i = n.data,
				r = n.resetDefines[t];
			if (r && r.dataEach)
				for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
			else r && r.progress && r.progress(e, i)
		}
	}

	function Us(t) {
		return t.data.count()
	}

	function Xs(t, e, n) {
		var i = e.uid,
			r = t._pipelineMap.get(i);
		!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline =
			r
	}

	function Zs(t) {
		lx = null;
		try {
			t(ux, hx)
		} catch (e) {}
		return lx
	}

	function qs(t, e) {
		for (var n in e.prototype) t[n] = V
	}

	function js(t) {
		return function(e, n, i) {
			e = e && e.toLowerCase(), dg.prototype[t].call(this, e, n, i)
		}
	}

	function Ys() {
		dg.call(this)
	}

	function Ks(t, e, n) {
		function r(t, e) {
			return t.__prio - e.__prio
		}
		n = n || {}, "string" == typeof e && (e = Zx[e]), this.id, this.group, this._dom = t;
		var a = "canvas",
			o = this._zr = Ci(t, {
				renderer: n.renderer || a,
				devicePixelRatio: n.devicePixelRatio,
				width: n.width,
				height: n.height
			});
		this._throttledZrFlush = Ps(y(o.flush, o), 17);
		var e = i(e);
		e && L_(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [],
			this._componentsMap = {}, this._coordSysMgr = new Vo;
		var s = this._api = pl(this);
		dn(Xx, r), dn(Hx, r), this._scheduler = new Os(this, s, Hx, Xx), dg.call(this), this._messageCenter =
			new Ys, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation
			.on("frame", this._onframe, this), rl(o, this), R(this)
	}

	function $s(t, e, n) {
		var i, r = this._model,
			a = this._coordSysMgr.getCoordinateSystems();
		e = Hi(r, e);
		for (var o = 0; o < a.length; o++) {
			var s = a[o];
			if (s[t] && null != (i = s[t](r, e, n))) return i
		}
	}

	function Js(t) {
		var e = t._model,
			n = t._scheduler;
		n.restorePipelines(e), n.prepareStageTasks(), al(t, "component", e, n), al(t, "chart", e, n), n.plan()
	}

	function Qs(t, e, n, i, r) {
		function a(i) {
			i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
		}
		var o = t._model;
		if (!i) return void yx(t._componentsViews.concat(t._chartsViews), a);
		var s = {};
		s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
		var l = {
			mainType: i,
			query: s
		};
		r && (l.subType = r);
		var u = n.excludeSeriesId;
		null != u && (u = N(Li(u))), o && o.eachComponent(l, function(e) {
			u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
		}, t)
	}

	function tl(t, e) {
		var n = t._chartsMap,
			i = t._scheduler;
		e.eachSeries(function(t) {
			i.updateStreamModes(t, n[t.__viewId])
		})
	}

	function el(t, e) {
		var n = t.type,
			i = t.escapeConnect,
			r = Vx[n],
			a = r.actionInfo,
			l = (a.update || "update").split(":"),
			u = l.pop();
		l = null != l[0] && bx(l[0]), this[zx] = !0;
		var h = [t],
			c = !1;
		t.batch && (c = !0, h = p(t.batch, function(e) {
			return e = s(o({}, e), t), e.batch = null, e
		}));
		var d, f = [],
			g = "highlight" === n || "downplay" === n;
		yx(h, function(t) {
			d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(
				d), g ? Qs(this, u, t, "series") : l && Qs(this, u, t, l.main, l.sub)
		}, this), "none" === u || g || l || (this[Rx] ? (Js(this), Nx.update.call(this, t), this[Rx] = !1) : Nx[
			u].call(this, t)), d = c ? {
			type: a.event || n,
			escapeConnect: i,
			batch: f
		} : f[0], this[zx] = !1, !e && this._messageCenter.trigger(d.type, d)
	}

	function nl(t) {
		for (var e = this._pendingActions; e.length;) {
			var n = e.shift();
			el.call(this, n, t)
		}
	}

	function il(t) {
		!t && this.trigger("updated")
	}

	function rl(t, e) {
		t.on("rendered", function() {
			e.trigger("rendered"), !t.animation.isFinished() || e[Rx] || e._scheduler.unfinished || e
				._pendingActions.length || e.trigger("finished")
		})
	}

	function al(t, e, n, i) {
		function r(t) {
			var e = "_ec_" + t.id + "_" + t.type,
				r = s[e];
			if (!r) {
				var h = bx(t.type),
					c = a ? U_.getClass(h.main, h.sub) : Ts.getClass(h.sub);
				r = new c, r.init(n, u), s[e] = r, o.push(r), l.add(r.group)
			}
			t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
				mainType: t.mainType,
				index: t.componentIndex
			}, !a && i.prepareView(r, t, n, u)
		}
		for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t
				._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = !1;
		a ? n.eachComponent(function(t, e) {
			"series" !== t && r(e)
		}) : n.eachSeries(r);
		for (var h = 0; h < o.length;) {
			var c = o[h];
			c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1),
				delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
		}
	}

	function ol(t) {
		t.clearColorPalette(), t.eachSeries(function(t) {
			t.clearColorPalette()
		})
	}

	function sl(t, e, n, i) {
		ll(t, e, n, i), yx(t._chartsViews, function(t) {
			t.__alive = !1
		}), ul(t, e, n, i), yx(t._chartsViews, function(t) {
			t.__alive || t.remove(e, n)
		})
	}

	function ll(t, e, n, i, r) {
		yx(r || t._componentsViews, function(t) {
			var r = t.__model;
			t.render(r, e, n, i), fl(r, t)
		})
	}

	function ul(t, e, n, i, r) {
		var a, o = t._scheduler;
		e.eachSeries(function(e) {
			var n = t._chartsMap[e.__viewId];
			n.__alive = !0;
			var s = n.renderTask;
			o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n
				.group.silent = !!e.get("silent"), fl(e, n), dl(e, n)
		}), o.unfinished |= a, cl(t._zr, e), nx(t._zr.dom, e)
	}

	function hl(t, e) {
		yx(Ux, function(n) {
			n(t, e)
		})
	}

	function cl(t, e) {
		var n = t.storage,
			i = 0;
		n.traverse(function(t) {
			t.isGroup || i++
		}), i > e.get("hoverLayerThreshold") && !Up.node && n.traverse(function(t) {
			t.isGroup || (t.useHoverLayer = !0)
		})
	}

	function dl(t, e) {
		var n = t.get("blendMode") || null;
		e.group.traverse(function(t) {
			t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t
				.eachPendingDisplayable(function(t) {
					t.setStyle("blend", n)
				})
		})
	}

	function fl(t, e) {
		var n = t.get("z"),
			i = t.get("zlevel");
		e.group.traverse(function(t) {
			"group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
		})
	}

	function pl(t) {
		var e = t._coordSysMgr;
		return o(new Fo(t), {
			getCoordinateSystems: y(e.getCoordinateSystems, e),
			getComponentByElement: function(e) {
				for (; e;) {
					var n = e.__ecComponentInfo;
					if (null != n) return t._model.getComponent(n.mainType, n.index);
					e = e.parent
				}
			}
		})
	}

	function gl(t) {
		function e(t, e) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i[a] = e
			}
		}
		var n = 0,
			i = 1,
			r = 2,
			a = "__connectUpdateStatus";
		yx(Gx, function(o, s) {
			t._messageCenter.on(s, function(o) {
				if (Yx[t.group] && t[a] !== n) {
					if (o && o.escapeConnect) return;
					var s = t.makeActionFromEvent(o),
						l = [];
					yx(jx, function(e) {
						e !== t && e.group === t.group && l.push(e)
					}), e(l, n), yx(l, function(t) {
						t[a] !== i && t.dispatchAction(s)
					}), e(l, r)
				}
			})
		})
	}

	function ml(t, e, n) {
		var i = xl(t);
		if (i) return i;
		var r = new Ks(t, e, n);
		return r.id = "ec_" + Kx++, jx[r.id] = r, Ui(t, Jx, r.id), gl(r), r
	}

	function vl(t) {
		if (x(t)) {
			var e = t;
			t = null, yx(e, function(e) {
				null != e.group && (t = e.group)
			}), t = t || "g_" + $x++, yx(e, function(e) {
				e.group = t
			})
		}
		return Yx[t] = !0, t
	}

	function yl(t) {
		Yx[t] = !1
	}

	function _l(t) {
		"string" == typeof t ? t = jx[t] : t instanceof Ks || (t = xl(t)), t instanceof Ks && !t.isDisposed() && t
			.dispose()
	}

	function xl(t) {
		return jx[Xi(t, Jx)]
	}

	function wl(t) {
		return jx[t]
	}

	function bl(t, e) {
		Zx[t] = e
	}

	function Sl(t) {
		Wx.push(t)
	}

	function Ml(t, e) {
		Pl(Hx, t, e, Tx)
	}

	function Il(t) {
		Ux.push(t)
	}

	function Tl(t, e, n) {
		"function" == typeof e && (n = e, e = "");
		var i = xx(t) ? t.type : [t, t = {
			event: e
		}][0];
		t.event = (t.event || i).toLowerCase(), e = t.event, vx(Ex.test(i) && Ex.test(e)), Vx[i] || (Vx[i] = {
			action: n,
			actionInfo: t
		}), Gx[e] = i
	}

	function Cl(t, e) {
		Vo.register(t, e)
	}

	function Dl(t) {
		var e = Vo.get(t);
		return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
	}

	function Al(t, e) {
		Pl(Xx, t, e, Dx, "layout")
	}

	function kl(t, e) {
		Pl(Xx, t, e, kx, "visual")
	}

	function Pl(t, e, n, i, r) {
		(_x(e) || xx(e)) && (n = e, e = i);
		var a = Os.wrapStageHandler(n, r);
		return a.__prio = e, a.__raw = n, t.push(a), a
	}

	function Ll(t, e) {
		qx[t] = e
	}

	function Ol(t) {
		return n_.extend(t)
	}

	function zl(t) {
		return U_.extend(t)
	}

	function Rl(t) {
		return W_.extend(t)
	}

	function El(t) {
		return Ts.extend(t)
	}

	function Bl(t) {
		n("createCanvas", t)
	}

	function Nl(t, e, n) {
		e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" !=
			typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), Qx[t] = {
			geoJson: e,
			specialAreas: n
		}
	}

	function Fl(t) {
		return Qx[t]
	}

	function Vl(t) {
		return t
	}

	function Gl(t, e, n, i, r) {
		this._old = t, this._new = e, this._oldKeyGetter = n || Vl, this._newKeyGetter = i || Vl, this.context = r
	}

	function Hl(t, e, n, i, r) {
		for (var a = 0; a < t.length; a++) {
			var o = "_ec_" + r[i](t[a], a),
				s = e[o];
			null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
		}
	}

	function Wl(t) {
		var e = {},
			n = e.encode = {},
			i = N(),
			r = [],
			a = [];
		f(t.dimensions, function(e) {
			var o = t.getDimensionInfo(e),
				s = o.coordDim;
			if (s) {
				var l = n[s];
				n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s,
					1), Xl(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
			}
			nw.each(function(t, e) {
				var i = n[e];
				n.hasOwnProperty(e) || (i = n[e] = []);
				var r = o.otherDims[e];
				null != r && r !== !1 && (i[r] = o.name)
			})
		});
		var o = [],
			s = {};
		i.each(function(t, e) {
			var i = n[e];
			s[e] = i[0], o = o.concat(i)
		}), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
		var l = n.label;
		l && l.length && (r = l.slice());
		var u = n.tooltip;
		return u && u.length ? a = u.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n
			.defaultedTooltip = a, e
	}

	function Ul(t) {
		return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
	}

	function Xl(t) {
		return !("ordinal" === t || "time" === t)
	}

	function Zl(t) {
		return t._rawCount > 65535 ? sw : lw
	}

	function ql(t) {
		var e = t.constructor;
		return e === Array ? t.slice() : new e(t)
	}

	function jl(t, e) {
		f(uw.concat(e.__wrappedMethods || []), function(n) {
			e.hasOwnProperty(n) && (t[n] = e[n])
		}), t.__wrappedMethods = e.__wrappedMethods, f(hw, function(n) {
			t[n] = i(e[n])
		}), t._calculationInfo = o(e._calculationInfo)
	}

	function Yl(t) {
		var e = t._invertedIndicesMap;
		f(e, function(n, i) {
			var r = t._dimensionInfos[i],
				a = r.ordinalMeta;
			if (a) {
				n = e[i] = new sw(a.categories.length);
				for (var o = 0; o < n.length; o++) n[o] = 0 / 0;
				for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
			}
		})
	}

	function Kl(t, e, n) {
		var i;
		if (null != e) {
			var r = t._chunkSize,
				a = Math.floor(n / r),
				o = n % r,
				s = t.dimensions[e],
				l = t._storage[s][a];
			if (l) {
				i = l[o];
				var u = t._dimensionInfos[s].ordinalMeta;
				u && u.categories.length && (i = u.categories[i])
			}
		}
		return i
	}

	function $l(t) {
		return t
	}

	function Jl(t) {
		return t < this._count && t >= 0 ? this._indices[t] : -1
	}

	function Ql(t, e) {
		var n = t._idList[e];
		return null == n && (n = Kl(t, t._idDimIdx, e)), null == n && (n = aw + e), n
	}

	function tu(t) {
		return x(t) || (t = [t]), t
	}

	function eu(t, e) {
		var n = t.dimensions,
			i = new cw(p(n, t.getDimensionInfo, t), t.hostModel);
		jl(i, t);
		for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
			var s = n[o];
			a[s] && (u(e, s) >= 0 ? (r[s] = nu(a[s]), i._rawExtent[s] = iu(), i._extent[s] = null) : r[s] = a[s])
		}
		return i
	}

	function nu(t) {
		for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = ql(t[n]);
		return e
	}

	function iu() {
		return [1 / 0, -1 / 0]
	}

	function ru(t, e, n) {
		function r(t, e, n) {
			null != nw.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0))
		}
		_o.isInstance(e) || (e = _o.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
		for (var a = (n.dimsDef || []).slice(), l = N(n.encodeDef), u = N(), h = N(), c = [], d = au(e, t, a, n
				.dimCount), p = 0; d > p; p++) {
			var g = a[p] = o({}, S(a[p]) ? a[p] : {
					name: a[p]
				}),
				m = g.name,
				v = c[p] = {
					otherDims: {}
				};
			null != m && null == u.get(m) && (v.name = v.displayName = m, u.set(m, p)), null != g.type && (v.type =
				g.type), null != g.displayName && (v.displayName = g.displayName)
		}
		l.each(function(t, e) {
			t = Li(t).slice();
			var n = l.set(e, []);
			f(t, function(t, i) {
				b(t) && (t = u.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i))
			})
		});
		var y = 0;
		f(t, function(t) {
			var e, t, n, a;
			if (b(t)) e = t, t = {};
			else {
				e = t.name;
				var o = t.ordinalMeta;
				t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name =
					t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
			}
			var u = Li(l.get(e));
			if (!u.length)
				for (var h = 0; h < (n && n.length || 1); h++) {
					for (; y < c.length && null != c[y].coordDim;) y++;
					y < c.length && u.push(y++)
				}
			f(u, function(i, o) {
				var l = c[i];
				if (r(s(l, t), e, o), null == l.name && n) {
					var u = n[o];
					!S(u) && (u = {
						name: u
					}), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
				}
				a && s(l.otherDims, a)
			})
		});
		var _ = n.generateCoord,
			x = n.generateCoordCount,
			w = null != x;
		x = _ ? x || 1 : 0;
		for (var M = _ || "value", I = 0; d > I; I++) {
			var v = c[I] = c[I] || {},
				T = v.coordDim;
			null == T && (v.coordDim = ou(M, h, w), v.coordDimIndex = 0, (!_ || 0 >= x) && (v.isExtraCoord = !0),
				x--), null == v.name && (v.name = ou(v.coordDim, u)), null == v.type && ko(e, I, v.name) && (v
				.type = "ordinal")
		}
		return c
	}

	function au(t, e, n, i) {
		var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
		return f(e, function(t) {
			var e = t.dimsDef;
			e && (r = Math.max(r, e.length))
		}), r
	}

	function ou(t, e, n) {
		if (n || null != e.get(t)) {
			for (var i = 0; null != e.get(t + i);) i++;
			t += i
		}
		return e.set(t, !0), t
	}

	function su(t, e, n) {
		n = n || {};
		var i, r, a, o, s = n.byIndex,
			l = n.stackedCoordDimension,
			u = !(!t || !t.get("stack"));
		if (f(e, function(t, n) {
				b(t) && (e[n] = t = {
					name: t
				}), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t
					.type || "time" === t.type || l && l !== t.coordDim || (r = t))
			}), !r || s || i || (s = !0), r) {
			a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
			var h = r.coordDim,
				c = r.type,
				d = 0;
			f(e, function(t) {
				t.coordDim === h && d++
			}), e.push({
				name: a,
				coordDim: h,
				coordDimIndex: d,
				type: c,
				isExtraCoord: !0,
				isCalculationCoord: !0
			}), d++, e.push({
				name: o,
				coordDim: o,
				coordDimIndex: d,
				type: c,
				isExtraCoord: !0,
				isCalculationCoord: !0
			})
		}
		return {
			stackedDimension: r && r.name,
			stackedByDimension: i && i.name,
			isStackedByIndex: s,
			stackedOverDimension: o,
			stackResultDimension: a
		}
	}

	function lu(t, e) {
		return !!e && e === t.getCalculationInfo("stackedDimension")
	}

	function uu(t, e) {
		return lu(t, e) ? t.getCalculationInfo("stackResultDimension") : e
	}

	function hu(t, e, n) {
		n = n || {}, _o.isInstance(t) || (t = _o.seriesDataToSource(t));
		var i, r = e.get("coordinateSystem"),
			a = Vo.get(r),
			o = vo(e);
		o && (i = p(o.coordSysDims, function(t) {
			var e = {
					name: t
				},
				n = o.axisMap.get(t);
			if (n) {
				var i = n.get("type");
				e.type = Ul(i)
			}
			return e
		})), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
		var s, l, u = pw(t, {
			coordDimensions: i,
			generateCoord: n.generateCoord
		});
		o && f(u, function(t, e) {
			var n = t.coordDim,
				i = o.categoryAxisMap.get(n);
			i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName &&
				(l = !0)
		}), l || null == s || (u[s].otherDims.itemName = 0);
		var h = su(e, u),
			c = new cw(u, e);
		c.setCalculationInfo(h);
		var d = null != s && cu(t) ? function(t, e, n, i) {
			return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
		} : null;
		return c.hasItemOption = !1, c.initData(t, null, d), c
	}

	function cu(t) {
		if (t.sourceFormat === l_) {
			var e = du(t.data || []);
			return null != e && !x(zi(e))
		}
	}

	function du(t) {
		for (var e = 0; e < t.length && null == t[e];) e++;
		return t[e]
	}

	function fu(t) {
		this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(
			this, arguments)
	}

	function pu(t) {
		this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t
			.deduplication, this._map
	}

	function gu(t) {
		return t._map || (t._map = N(t.categories))
	}

	function mu(t) {
		return S(t) && null != t.value ? t.value : t + ""
	}

	function vu(t, e, n, i) {
		var r = {},
			a = t[1] - t[0],
			o = r.interval = $a(a / e, !0);
		null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
		var s = r.intervalPrecision = yu(o),
			l = r.niceTickExtent = [yw(Math.ceil(t[0] / o) * o, s), yw(Math.floor(t[1] / o) * o, s)];
		return xu(l, t), r
	}

	function yu(t) {
		return Wa(t) + 2
	}

	function _u(t, e, n) {
		t[e] = Math.max(Math.min(t[e], n[1]), n[0])
	}

	function xu(t, e) {
		!isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), _u(t, 0, e), _u(t, 1, e), t[0] > t[1] &&
			(t[0] = t[1])
	}

	function wu(t, e, n, i) {
		var r = [];
		if (!t) return r;
		var a = 1e4;
		e[0] < n[0] && r.push(e[0]);
		for (var o = n[0]; o <= n[1] && (r.push(o), o = yw(o + t, i), o !== r[r.length - 1]);)
			if (r.length > a) return [];
		return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
	}

	function bu(t) {
		return t.get("stack") || ww + t.seriesIndex
	}

	function Su(t) {
		return t.dim + t.index
	}

	function Mu(t, e) {
		var n = [];
		return e.eachSeriesByType(t, function(t) {
			Au(t) && !ku(t) && n.push(t)
		}), n
	}

	function Iu(t) {
		var e = [];
		return f(t, function(t) {
			var n = t.getData(),
				i = t.coordinateSystem,
				r = i.getBaseAxis(),
				a = r.getExtent(),
				o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
				s = Fa(t.get("barWidth"), o),
				l = Fa(t.get("barMaxWidth"), o),
				u = t.get("barGap"),
				h = t.get("barCategoryGap");
			e.push({
				bandWidth: o,
				barWidth: s,
				barMaxWidth: l,
				barGap: u,
				barCategoryGap: h,
				axisKey: Su(r),
				stackId: bu(t)
			})
		}), Tu(e)
	}

	function Tu(t) {
		var e = {};
		f(t, function(t) {
			var n = t.axisKey,
				i = t.bandWidth,
				r = e[n] || {
					bandWidth: i,
					remainedWidth: i,
					autoWidthCount: 0,
					categoryGap: "20%",
					gap: "30%",
					stacks: {}
				},
				a = r.stacks;
			e[n] = r;
			var o = t.stackId;
			a[o] || r.autoWidthCount++, a[o] = a[o] || {
				width: 0,
				maxWidth: 0
			};
			var s = t.barWidth;
			s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
			var l = t.barMaxWidth;
			l && (a[o].maxWidth = l);
			var u = t.barGap;
			null != u && (r.gap = u);
			var h = t.barCategoryGap;
			null != h && (r.categoryGap = h)
		});
		var n = {};
		return f(e, function(t, e) {
			n[e] = {};
			var i = t.stacks,
				r = t.bandWidth,
				a = Fa(t.categoryGap, r),
				o = Fa(t.gap, 1),
				s = t.remainedWidth,
				l = t.autoWidthCount,
				u = (s - a) / (l + (l - 1) * o);
			u = Math.max(u, 0), f(i, function(t) {
				var e = t.maxWidth;
				e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t
					.width = e, l--)
			}), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);
			var h, c = 0;
			f(i, function(t) {
				t.width || (t.width = u), h = t, c += t.width * (1 + o)
			}), h && (c -= h.width * o);
			var d = -c / 2;
			f(i, function(t, i) {
				n[e][i] = n[e][i] || {
					offset: d,
					width: t.width
				}, d += t.width * (1 + o)
			})
		}), n
	}

	function Cu(t, e, n) {
		if (t && e) {
			var i = t[Su(e)];
			return null != i && null != n && (i = i[bu(n)]), i
		}
	}

	function Du(t, e) {
		var n = Mu(t, e),
			i = Iu(n),
			r = {};
		f(n, function(t) {
			var e = t.getData(),
				n = t.coordinateSystem,
				a = n.getBaseAxis(),
				o = bu(t),
				s = i[Su(a)][o],
				l = s.offset,
				u = s.width,
				h = n.getOtherAxis(a),
				c = t.get("barMinHeight") || 0;
			r[o] = r[o] || [], e.setLayout({
				offset: l,
				size: u
			});
			for (var d = e.mapDimension(h.dim), f = e.mapDimension(a.dim), p = lu(e, d), g = h
				.isHorizontal(), m = Pu(a, h, p), v = 0, y = e.count(); y > v; v++) {
				var _ = e.get(d, v),
					x = e.get(f, v);
				if (!isNaN(_)) {
					var w = _ >= 0 ? "p" : "n",
						b = m;
					p && (r[o][x] || (r[o][x] = {
						p: m,
						n: m
					}), b = r[o][x][w]);
					var S, M, I, T;
					if (g) {
						var C = n.dataToPoint([_, x]);
						S = b, M = C[1] + l, I = C[0] - m, T = u, Math.abs(I) < c && (I = (0 > I ? -1 : 1) *
							c), p && (r[o][x][w] += I)
					} else {
						var C = n.dataToPoint([x, _]);
						S = C[0] + l, M = b, I = u, T = C[1] - m, Math.abs(T) < c && (T = (0 >= T ? -1 :
							1) * c), p && (r[o][x][w] += T)
					}
					e.setItemLayout(v, {
						x: S,
						y: M,
						width: I,
						height: T
					})
				}
			}
		}, this)
	}

	function Au(t) {
		return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
	}

	function ku(t) {
		return t.pipelineContext && t.pipelineContext.large
	}

	function Pu(t, e, n) {
		return u(t.getAxesOnZeroOf(), e) >= 0 || n ? e.toGlobalCoord(e.dataToCoord(0)) : e.getGlobalExtent()[0]
	}

	function Lu(t, e) {
		return Nw(t, Bw(e))
	}

	function Ou(t, e) {
		var n, i, r, a = t.type,
			o = e.getMin(),
			s = e.getMax(),
			l = null != o,
			u = null != s,
			h = t.getExtent();
		"ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]),
				"boolean" == typeof i[0] && (i = [0, 0]), i[0] = Fa(i[0], 1), i[1] = Fa(i[1], 1), r = h[1] - h[0] ||
				Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : h[0] - i[0] * r), null == s &&
			(s = "ordinal" === a ? n ? n - 1 : 0 / 0 : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" ==
			typeof o && (o = o({
				min: h[0],
				max: h[1]
			})), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
				min: h[0],
				max: h[1]
			})), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(
				C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (
				o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));
		var c = e.ecModel;
		if (c && "time" === a) {
			var d, p = Mu("bar", c);
			if (f(p, function(t) {
					d |= t.getBaseAxis() === e.axis
				}), d) {
				var g = Iu(p),
					m = zu(o, s, e, g);
				o = m.min, s = m.max
			}
		}
		return [o, s]
	}

	function zu(t, e, n, i) {
		var r = n.axis.getExtent(),
			a = r[1] - r[0],
			o = Cu(i, n.axis);
		if (void 0 === o) return {
			min: t,
			max: e
		};
		var s = 1 / 0;
		f(o, function(t) {
			s = Math.min(t.offset, s)
		});
		var l = -1 / 0;
		f(o, function(t) {
			l = Math.max(t.offset + t.width, l)
		}), s = Math.abs(s), l = Math.abs(l);
		var u = s + l,
			h = e - t,
			c = 1 - (s + l) / a,
			d = h / c - h;
		return e += d * (l / u), t -= d * (s / u), {
			min: t,
			max: e
		}
	}

	function Ru(t, e) {
		var n = Ou(t, e),
			i = null != e.getMin(),
			r = null != e.getMax(),
			a = e.get("splitNumber");
		"log" === t.type && (t.base = e.get("logBase"));
		var o = t.type;
		t.setExtent(n[0], n[1]), t.niceExtent({
			splitNumber: a,
			fixMin: i,
			fixMax: r,
			minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
			maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
		});
		var s = e.get("interval");
		null != s && t.setInterval && t.setInterval(s)
	}

	function Eu(t, e) {
		if (e = e || t.get("type")) switch (e) {
			case "category":
				return new vw(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
			case "value":
				return new xw;
			default:
				return (fu.getClass(e) || xw).create(t)
		}
	}

	function Bu(t) {
		var e = t.scale.getExtent(),
			n = e[0],
			i = e[1];
		return !(n > 0 && i > 0 || 0 > n && 0 > i)
	}

	function Nu(t) {
		var e = t.getLabelModel().get("formatter"),
			n = "category" === t.type ? t.scale.getExtent()[0] : null;
		return "string" == typeof e ? e = function(t) {
			return function(e) {
				return t.replace("{value}", null != e ? e : "")
			}
		}(e) : "function" == typeof e ? function(i, r) {
			return null != n && (r = i - n), e(Fu(t, i), r)
		} : function(e) {
			return t.scale.getLabel(e)
		}
	}

	function Fu(t, e) {
		return "category" === t.type ? t.scale.getLabel(e) : e
	}

	function Vu(t) {
		var e = t.model,
			n = t.scale;
		if (e.get("axisLabel.show") && !n.isBlank()) {
			var i, r, a = "category" === t.type,
				o = n.getExtent();
			a ? r = n.count() : (i = n.getTicks(), r = i.length);
			var s, l = t.getLabelModel(),
				u = Nu(t),
				h = 1;
			r > 40 && (h = Math.ceil(r / 40));
			for (var c = 0; r > c; c += h) {
				var d = i ? i[c] : o[0] + c,
					f = u(d),
					p = l.getTextRect(f),
					g = Gu(p, l.get("rotate") || 0);
				s ? s.union(g) : s = g
			}
			return s
		}
	}

	function Gu(t, e) {
		var n = e * Math.PI / 180,
			i = t.plain(),
			r = i.width,
			a = i.height,
			o = r * Math.cos(n) + a * Math.sin(n),
			s = r * Math.sin(n) + a * Math.cos(n),
			l = new rn(i.x, i.y, o, s);
		return l
	}

	function Hu(t, e) {
		if ("image" !== this.type) {
			var n = this.style,
				i = this.shape;
			i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e ||
				"#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
		}
	}

	function Wu(t, e, n, i, r, a, o) {
		var s = 0 === t.indexOf("empty");
		s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
		var l;
		return l = 0 === t.indexOf("image://") ? Zr(t.slice(8), new rn(e, n, i, r), o ? "center" : "cover") : 0 ===
			t.indexOf("path://") ? Xr(t.slice(7), {}, new rn(e, n, i, r), o ? "center" : "cover") : new Jw({
				shape: {
					symbolType: t,
					x: e,
					y: n,
					width: i,
					height: r
				}
			}), l.__isEmptyBrush = s, l.setColor = Hu, l.setColor(a), l
	}

	function Uu(t) {
		return hu(t.getSource(), t)
	}

	function Xu(t, e) {
		var n = e;
		Pa.isInstance(e) || (n = new Pa(e), c(n, Uw));
		var i = Eu(n);
		return i.setExtent(t[0], t[1]), Ru(i, n), i
	}

	function Zu(t) {
		c(t, Uw)
	}

	function qu(t, e) {
		return Math.abs(t - e) < eb
	}

	function ju(t, e, n) {
		var i = 0,
			r = t[0];
		if (!r) return !1;
		for (var a = 1; a < t.length; a++) {
			var o = t[a];
			i += Sr(r[0], r[1], o[0], o[1], e, n), r = o
		}
		var s = t[0];
		return qu(r[0], s[0]) && qu(r[1], s[1]) || (i += Sr(r[0], r[1], s[0], s[1], e, n)), 0 !== i
	}

	function Yu(t, e, n) {
		if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];
		else {
			var i = this.getBoundingRect();
			n = [i.x + i.width / 2, i.y + i.height / 2]
		}
		this.center = n
	}

	function Ku(t) {
		if (!t.UTF8Encoding) return t;
		var e = t.UTF8Scale;
		null == e && (e = 1024);
		for (var n = t.features, i = 0; i < n.length; i++)
			for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
				var u = o[l];
				if ("Polygon" === a.type) o[l] = $u(u, s[l], e);
				else if ("MultiPolygon" === a.type)
					for (var h = 0; h < u.length; h++) {
						var c = u[h];
						u[h] = $u(c, s[l][h], e)
					}
			}
		return t.UTF8Encoding = !1, t
	}

	function $u(t, e, n) {
		for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
			var s = t.charCodeAt(o) - 64,
				l = t.charCodeAt(o + 1) - 64;
			s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n])
		}
		return i
	}

	function Ju(t) {
		return "category" === t.type ? th(t) : ih(t)
	}

	function Qu(t, e) {
		return "category" === t.type ? nh(t, e) : {
			ticks: t.scale.getTicks()
		}
	}

	function th(t) {
		var e = t.getLabelModel(),
			n = eh(t, e);
		return !e.get("show") || t.scale.isBlank() ? {
			labels: [],
			labelCategoryInterval: n.labelCategoryInterval
		} : n
	}

	function eh(t, e) {
		var n = rh(t, "labels"),
			i = dh(e),
			r = ah(n, i);
		if (r) return r;
		var a, o;
		return w(i) ? a = ch(t, i) : (o = "auto" === i ? sh(t) : i, a = hh(t, o)), oh(n, i, {
			labels: a,
			labelCategoryInterval: o
		})
	}

	function nh(t, e) {
		var n = rh(t, "ticks"),
			i = dh(e),
			r = ah(n, i);
		if (r) return r;
		var a, o;
		if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = ch(t, i, !0);
		else if ("auto" === i) {
			var s = eh(t, t.getLabelModel());
			o = s.labelCategoryInterval, a = p(s.labels, function(t) {
				return t.tickValue
			})
		} else o = i, a = hh(t, o, !0);
		return oh(n, i, {
			ticks: a,
			tickCategoryInterval: o
		})
	}

	function ih(t) {
		var e = t.scale.getTicks(),
			n = Nu(t);
		return {
			labels: p(e, function(e, i) {
				return {
					formattedLabel: n(e, i),
					rawLabel: t.scale.getLabel(e),
					tickValue: e
				}
			})
		}
	}

	function rh(t, e) {
		return ib(t)[e] || (ib(t)[e] = [])
	}

	function ah(t, e) {
		for (var n = 0; n < t.length; n++)
			if (t[n].key === e) return t[n].value
	}

	function oh(t, e, n) {
		return t.push({
			key: e,
			value: n
		}), n
	}

	function sh(t) {
		var e = ib(t).autoInterval;
		return null != e ? e : ib(t).autoInterval = t.calculateCategoryInterval()
	}

	function lh(t) {
		var e = uh(t),
			n = Nu(t),
			i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
			r = t.scale,
			a = r.getExtent(),
			o = r.count();
		if (a[1] - a[0] < 1) return 0;
		var s = 1;
		o > 40 && (s = Math.max(1, Math.floor(o / 40)));
		for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(
				u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
			var p = 0,
				g = 0,
				m = Sn(n(l), e.font, "center", "top");
			p = 1.3 * m.width, g = 1.3 * m.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
		}
		var v = d / h,
			y = f / c;
		isNaN(v) && (v = 1 / 0), isNaN(y) && (y = 1 / 0);
		var _ = Math.max(0, Math.floor(Math.min(v, y))),
			x = ib(t.model),
			w = x.lastAutoInterval,
			b = x.lastTickCount;
		return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x
			.lastTickCount = o, x.lastAutoInterval = _), _
	}

	function uh(t) {
		var e = t.getLabelModel();
		return {
			axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
			labelRotate: e.get("rotate") || 0,
			font: e.getFont()
		}
	}

	function hh(t, e, n) {
		function i(t) {
			l.push(n ? t : {
				formattedLabel: r(t),
				rawLabel: a.getLabel(t),
				tickValue: t
			})
		}
		var r = Nu(t),
			a = t.scale,
			o = a.getExtent(),
			s = t.getLabelModel(),
			l = [],
			u = Math.max((e || 0) + 1, 1),
			h = o[0],
			c = a.count();
		0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
		var d = {
			min: s.get("showMinLabel"),
			max: s.get("showMaxLabel")
		};
		d.min && h !== o[0] && i(o[0]);
		for (var f = h; f <= o[1]; f += u) i(f);
		return d.max && f !== o[1] && i(o[1]), l
	}

	function ch(t, e, n) {
		var i = t.scale,
			r = Nu(t),
			a = [];
		return f(i.getTicks(), function(t) {
			var o = i.getLabel(t);
			e(t, o) && a.push(n ? t : {
				formattedLabel: r(t),
				rawLabel: o,
				tickValue: t
			})
		}), a
	}

	function dh(t) {
		var e = t.get("interval");
		return null == e ? "auto" : e
	}

	function fh(t, e) {
		var n = t[1] - t[0],
			i = e,
			r = n / i / 2;
		t[0] += r, t[1] -= r
	}

	function ph(t, e, n, i, r) {
		function a(t, e) {
			return h ? t > e : e > t
		}
		var o = e.length;
		if (t.onBand && !i && o) {
			var s, l = t.getExtent();
			if (1 === o) e[0].coord = l[0], s = e[1] = {
				coord: l[0]
			};
			else {
				var u = e[1].coord - e[0].coord;
				f(e, function(t) {
					t.coord -= u / 2;
					var e = e || 0;
					e % 2 > 0 && (t.coord -= u / (2 * (e + 1)))
				}), s = {
					coord: e[o - 1].coord + u
				}, e.push(s)
			}
			var h = l[0] > l[1];
			a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
				coord: l[0]
			}), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
				coord: l[1]
			})
		}
	}

	function gh(t) {
		return this._axes[t]
	}

	function mh(t) {
		lb.call(this, t)
	}

	function vh(t, e) {
		return e.type || (e.data ? "category" : "value")
	}

	function yh(t, e) {
		return t.getCoordSysModel() === e
	}

	function _h(t, e, n) {
		this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t,
			e, n), this.model = t
	}

	function xh(t, e, n) {
		n.getAxesOnZeroOf = function() {
			return i ? [i] : []
		};
		var i, r = t[e],
			a = n.model,
			o = a.get("axisLine.onZero"),
			s = a.get("axisLine.onZeroAxisIndex");
		if (o) {
			if (null != s) return void(wh(r[s]) && (i = r[s]));
			for (var l in r)
				if (r.hasOwnProperty(l) && wh(r[l])) {
					i = r[l];
					break
				}
		}
	}

	function wh(t) {
		return t && "category" !== t.type && "time" !== t.type && Bu(t)
	}

	function bh(t, e) {
		var n = t.getExtent(),
			i = n[0] + n[1];
		t.toGlobalCoord = "x" === t.dim ? function(t) {
			return t + e
		} : function(t) {
			return i - t + e
		}, t.toLocalCoord = "x" === t.dim ? function(t) {
			return t - e
		} : function(t) {
			return i - t + e
		}
	}

	function Sh(t) {
		return p(vb, function(e) {
			var n = t.getReferringComponents(e)[0];
			return n
		})
	}

	function Mh(t) {
		return "cartesian2d" === t.get("coordinateSystem")
	}

	function Ih(t, e) {
		var n = t.mapDimension("defaultedLabel", !0),
			i = n.length;
		if (1 === i) return ds(t, e, n[0]);
		if (i) {
			for (var r = [], a = 0; a < n.length; a++) {
				var o = ds(t, e, n[a]);
				r.push(o)
			}
			return r.join(" ")
		}
	}

	function Th(t, e, n, i, r, a) {
		var o = n.getModel("label"),
			s = n.getModel("emphasis.label");
		ca(t, e, o, s, {
			labelFetcher: r,
			labelDataIndex: a,
			defaultText: Ih(r.getData(), a),
			isRectText: !0,
			autoColor: i
		}), Ch(t), Ch(e)
	}

	function Ch(t, e) {
		"outside" === t.textPosition && (t.textPosition = e)
	}

	function Dh(t, e, n) {
		n.style.text = null, ba(n, {
			shape: {
				width: 0
			}
		}, e, t, function() {
			n.parent && n.parent.remove(n)
		})
	}

	function Ah(t, e, n) {
		n.style.text = null, ba(n, {
			shape: {
				r: n.shape.r0
			}
		}, e, t, function() {
			n.parent && n.parent.remove(n)
		})
	}

	function kh(t, e, n, i, r, a, o, l) {
		var u = e.getItemVisual(n, "color"),
			h = e.getItemVisual(n, "opacity"),
			c = i.getModel("itemStyle"),
			d = i.getModel("emphasis.itemStyle").getBarItemStyle();
		l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({
			fill: u,
			opacity: h
		}, c.getBarItemStyle()));
		var f = i.getShallow("cursor");
		f && t.attr("cursor", f);
		var p = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
		l || Th(t.style, d, i, u, a, n, p), ha(t, d)
	}

	function Ph(t, e) {
		var n = t.get(wb) || 0;
		return Math.min(n, Math.abs(e.width), Math.abs(e.height))
	}

	function Lh(t, e, n) {
		var i = t.getData(),
			r = [],
			a = i.getLayout("valueAxisHorizontal") ? 1 : 0;
		r[1 - a] = i.getLayout("valueAxisStart");
		var o = new Mb({
			shape: {
				points: i.getLayout("largePoints")
			},
			incremental: !!n,
			__startPoint: r,
			__valueIdx: a
		});
		e.add(o), Oh(o, t, i)
	}

	function Oh(t, e, n) {
		var i = n.getVisual("borderColor") || n.getVisual("color"),
			r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
		t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
	}

	function zh(t) {
		var e = {
			componentType: t.mainType
		};
		return e[t.mainType + "Index"] = t.componentIndex, e
	}

	function Rh(t, e, n, i) {
		var r, a, o = Za(n - t.rotation),
			s = i[0] > i[1],
			l = "start" === e && !s || "start" !== e && s;
		return qa(o - Ib / 2) ? (a = l ? "bottom" : "top", r = "center") : qa(o - 1.5 * Ib) ? (a = l ? "top" :
			"bottom", r = "center") : (a = "middle", r = 1.5 * Ib > o && o > Ib / 2 ? l ? "left" : "right" : l ?
			"right" : "left"), {
			rotation: o,
			textAlign: r,
			textVerticalAlign: a
		}
	}

	function Eh(t) {
		var e = t.get("tooltip");
		return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
	}

	function Bh(t, e, n) {
		var i = t.get("axisLabel.showMinLabel"),
			r = t.get("axisLabel.showMaxLabel");
		e = e || [], n = n || [];
		var a = e[0],
			o = e[1],
			s = e[e.length - 1],
			l = e[e.length - 2],
			u = n[0],
			h = n[1],
			c = n[n.length - 1],
			d = n[n.length - 2];
		i === !1 ? (Nh(a), Nh(u)) : Fh(a, o) && (i ? (Nh(o), Nh(h)) : (Nh(a), Nh(u))), r === !1 ? (Nh(s), Nh(c)) :
			Fh(l, s) && (r ? (Nh(l), Nh(d)) : (Nh(s), Nh(c)))
	}

	function Nh(t) {
		t && (t.ignore = !0)
	}

	function Fh(t, e) {
		var n = t && t.getBoundingRect().clone(),
			i = e && e.getBoundingRect().clone();
		if (n && i) {
			var r = pe([]);
			return ye(r, r, -t.rotation), n.applyTransform(me([], r, t.getLocalTransform())), i.applyTransform(me(
			[], r, e.getLocalTransform())), n.intersect(i)
		}
	}

	function Vh(t) {
		return "middle" === t || "center" === t
	}

	function Gh(t, e, n) {
		var i = e.axis;
		if (e.get("axisTick.show") && !i.scale.isBlank()) {
			for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i
					.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
				var p = l[f].coord;
				u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * o, c && (ae(u, u, c), ae(h, h, c));
				var g = new my(Yr({
					anid: "tick_" + l[f].tickValue,
					shape: {
						x1: u[0],
						y1: u[1],
						x2: h[0],
						y2: h[1]
					},
					style: s(a.getLineStyle(), {
						stroke: e.get("axisLine.lineStyle.color")
					}),
					z2: 2,
					silent: !0
				}));
				t.group.add(g), d.push(g)
			}
			return d
		}
	}

	function Hh(t, e, n) {
		var i = e.axis,
			r = D(n.axisLabelShow, e.get("axisLabel.show"));
		if (r && !i.scale.isBlank()) {
			var a = e.getModel("axisLabel"),
				o = a.get("margin"),
				s = i.getViewLabels(),
				l = (D(n.labelRotate, a.get("rotate")) || 0) * Ib / 180,
				u = Db(n.rotation, l, n.labelDirection),
				h = e.getCategories(!0),
				c = [],
				d = Eh(e),
				p = e.get("triggerEvent");
			return f(s, function(r, s) {
				var l = r.tickValue,
					f = r.formattedLabel,
					g = r.rawLabel,
					m = a;
				h && h[l] && h[l].textStyle && (m = new Pa(h[l].textStyle, a, e.ecModel));
				var v = m.getTextColor() || e.get("axisLine.lineStyle.color"),
					y = i.dataToCoord(l),
					_ = [y, n.labelOffset + n.labelDirection * o],
					x = new ay({
						anid: "label_" + l,
						position: _,
						rotation: u.rotation,
						silent: d,
						z2: 10
					});
				da(x.style, m, {
						text: f,
						textAlign: m.getShallow("align", !0) || u.textAlign,
						textVerticalAlign: m.getShallow("verticalAlign", !0) || m.getShallow("baseline",
							!0) || u.textVerticalAlign,
						textFill: "function" == typeof v ? v("category" === i.type ? g : "value" === i
							.type ? l + "" : l, s) : v
					}), p && (x.eventData = zh(e), x.eventData.targetType = "axisLabel", x.eventData.value =
						g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x
					.decomposeTransform()
			}), c
		}
	}

	function Wh(t, e) {
		var n = {
			axesInfo: {},
			seriesInvolved: !1,
			coordSysAxesInfo: {},
			coordSysMap: {}
		};
		return Uh(n, t, e), n.seriesInvolved && Zh(n, t), n
	}

	function Uh(t, e, n) {
		var i = e.getComponent("tooltip"),
			r = e.getComponent("axisPointer"),
			a = r.get("link", !0) || [],
			o = [];
		Ab(n.getCoordinateSystems(), function(n) {
			function s(i, s, l) {
				var h = l.model.getModel("axisPointer", r),
					d = h.get("show");
				if (d && ("auto" !== d || i || Jh(h))) {
					null == s && (s = h.get("triggerTooltip")), h = i ? Xh(l, c, r, e, i, s) : h;
					var f = h.get("snap"),
						p = Qh(l.model),
						g = s || f || "category" === l.type,
						m = t.axesInfo[p] = {
							key: p,
							axis: l,
							coordSys: n,
							axisPointerModel: h,
							triggerTooltip: s,
							involveSeries: g,
							snap: f,
							useHandle: Jh(h),
							seriesModels: []
						};
					u[p] = m, t.seriesInvolved |= g;
					var v = qh(a, l);
					if (null != v) {
						var y = o[v] || (o[v] = {
							axesInfo: {}
						});
						y.axesInfo[p] = m, y.mapper = a[v].mapper, m.linkGroup = y
					}
				}
			}
			if (n.axisPointerEnabled) {
				var l = Qh(n.model),
					u = t.coordSysAxesInfo[l] = {};
				t.coordSysMap[l] = n;
				var h = n.model,
					c = h.getModel("tooltip", i);
				if (Ab(n.getAxes(), kb(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
					var d = "axis" === c.get("trigger"),
						f = "cross" === c.get("axisPointer.type"),
						p = n.getTooltipAxes(c.get("axisPointer.axis"));
					(d || f) && Ab(p.baseAxes, kb(s, f ? "cross" : !0, d)), f && Ab(p.otherAxes, kb(s,
						"cross", !1))
				}
			}
		})
	}

	function Xh(t, e, n, r, a, o) {
		var l = e.getModel("axisPointer"),
			u = {};
		Ab(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate",
			"animationEasingUpdate", "z"
		], function(t) {
			u[t] = i(l.get(t))
		}), u.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (u.type = "line");
		var h = u.label || (u.label = {});
		if (null == h.show && (h.show = !1), "cross" === a) {
			var c = l.get("label.show");
			if (h.show = null != c ? c : !0, !o) {
				var d = u.lineStyle = l.get("crossStyle");
				d && s(h, d.textStyle)
			}
		}
		return t.model.getModel("axisPointer", new Pa(u, n, r))
	}

	function Zh(t, e) {
		e.eachSeries(function(e) {
			var n = e.coordinateSystem,
				i = e.get("tooltip.trigger", !0),
				r = e.get("tooltip.show", !0);
			n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !
				1 && Ab(t.coordSysAxesInfo[Qh(n.model)], function(t) {
					var i = t.axis;
					n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t
						.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
				})
		}, this)
	}

	function qh(t, e) {
		for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
			var a = t[r] || {};
			if (jh(a[i + "AxisId"], n.id) || jh(a[i + "AxisIndex"], n.componentIndex) || jh(a[i + "AxisName"], n
					.name)) return r
		}
	}

	function jh(t, e) {
		return "all" === t || x(t) && u(t, e) >= 0 || t === e
	}

	function Yh(t) {
		var e = Kh(t);
		if (e) {
			var n = e.axisPointerModel,
				i = e.axis.scale,
				r = n.option,
				a = n.get("status"),
				o = n.get("value");
			null != o && (o = i.parse(o));
			var s = Jh(n);
			null == a && (r.status = s ? "show" : "hide");
			var l = i.getExtent().slice();
			l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o,
				s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
		}
	}

	function Kh(t) {
		var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
		return e && e.axesInfo[Qh(t)]
	}

	function $h(t) {
		var e = Kh(t);
		return e && e.axisPointerModel
	}

	function Jh(t) {
		return !!t.get("handle.show")
	}

	function Qh(t) {
		return t.type + "||" + t.id
	}

	function tc(t, e, n, i, r, a) {
		var o = Pb.getAxisPointerClass(t.axisPointerClass);
		if (o) {
			var s = $h(e);
			s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : ec(t, i)
		}
	}

	function ec(t, e, n) {
		var i = t._axisPointer;
		i && i.dispose(e, n), t._axisPointer = null
	}

	function nc(t, e, n) {
		n = n || {};
		var i = t.coordinateSystem,
			r = e.axis,
			a = {},
			o = r.getAxesOnZeroOf()[0],
			s = r.position,
			l = o ? "onZero" : s,
			u = r.dim,
			h = i.getRect(),
			c = [h.x, h.x + h.width, h.y, h.y + h.height],
			d = {
				left: 0,
				right: 1,
				top: 0,
				bottom: 1,
				onZero: 2
			},
			f = e.get("offset") || 0,
			p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
		if (o) {
			var g = o.toGlobalCoord(o.dataToCoord(0));
			p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
		}
		a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" ===
			u ? 0 : 1);
		var m = {
			top: -1,
			bottom: 1,
			left: -1,
			right: 1
		};
		a.labelDirection = a.tickDirection = a.nameDirection = m[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0,
			e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(n.labelInside, e.get(
				"axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
		var v = e.get("axisLabel.rotate");
		return a.labelRotate = "top" === l ? -v : v, a.z2 = 1, a
	}

	function ic(t, e, n) {
		qg.call(this), this.updateData(t, e, n)
	}

	function rc(t) {
		return [t[0] / 2, t[1] / 2]
	}

	function ac(t, e) {
		this.parent.drift(t, e)
	}

	function oc(t) {
		this.group = new qg, this._symbolCtor = t || ic
	}

	function sc(t, e, n, i) {
		return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape
			.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"))
	}

	function lc(t) {
		return null == t || S(t) || (t = {
			isIgnore: t
		}), t || {}
	}

	function uc(t) {
		var e = t.hostModel;
		return {
			itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
			hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
			symbolRotate: e.get("symbolRotate"),
			symbolOffset: e.get("symbolOffset"),
			hoverAnimation: e.get("hoverAnimation"),
			labelModel: e.getModel("label"),
			hoverLabelModel: e.getModel("emphasis.label"),
			cursorStyle: e.get("cursor")
		}
	}

	function hc(t, e, n) {
		var i, r = t.getBaseAxis(),
			a = t.getOtherAxis(r),
			o = cc(a, n),
			s = r.dim,
			l = a.dim,
			u = e.mapDimension(l),
			h = e.mapDimension(s),
			c = "x" === l || "radius" === l ? 1 : 0,
			d = p(t.dimensions, function(t) {
				return e.mapDimension(t)
			}),
			f = e.getCalculationInfo("stackResultDimension");
		return (i |= lu(e, d[0])) && (d[0] = f), (i |= lu(e, d[1])) && (d[1] = f), {
			dataDimsForPoint: d,
			valueStart: o,
			valueAxisDim: l,
			baseAxisDim: s,
			stacked: !!i,
			valueDim: u,
			baseDim: h,
			baseDataOffset: c,
			stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
		}
	}

	function cc(t, e) {
		var n = 0,
			i = t.scale.getExtent();
		return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
	}

	function dc(t, e, n, i) {
		var r = 0 / 0;
		t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
		var a = t.baseDataOffset,
			o = [];
		return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o)
	}

	function fc(t, e) {
		var n = [];
		return e.diff(t).add(function(t) {
			n.push({
				cmd: "+",
				idx: t
			})
		}).update(function(t, e) {
			n.push({
				cmd: "=",
				idx: e,
				idx1: t
			})
		}).remove(function(t) {
			n.push({
				cmd: "-",
				idx: t
			})
		}).execute(), n
	}

	function pc(t) {
		return isNaN(t[0]) || isNaN(t[1])
	}

	function gc(t, e, n, i, r, a, o, s, l, u) {
		return "none" !== u && u ? mc.apply(this, arguments) : vc.apply(this, arguments)
	}

	function mc(t, e, n, i, r, a, o, s, l, u, h) {
		for (var c = 0, d = n, f = 0; i > f; f++) {
			var p = e[d];
			if (d >= r || 0 > d) break;
			if (pc(p)) {
				if (h) {
					d += a;
					continue
				}
				break
			}
			if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);
			else if (l > 0) {
				var g = e[c],
					m = "y" === u ? 1 : 0,
					v = (p[m] - g[m]) * l;
				qb(Yb, g), Yb[m] = g[m] + v, qb(Kb, p), Kb[m] = p[m] - v, t.bezierCurveTo(Yb[0], Yb[1], Kb[0], Kb[
					1], p[0], p[1])
			} else t.lineTo(p[0], p[1]);
			c = d, d += a
		}
		return f
	}

	function vc(t, e, n, i, r, a, o, s, l, u, h) {
		for (var c = 0, d = n, f = 0; i > f; f++) {
			var p = e[d];
			if (d >= r || 0 > d) break;
			if (pc(p)) {
				if (h) {
					d += a;
					continue
				}
				break
			}
			if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), qb(Yb, p);
			else if (l > 0) {
				var g = d + a,
					m = e[g];
				if (h)
					for (; m && pc(e[g]);) g += a, m = e[g];
				var v = .5,
					y = e[c],
					m = e[g];
				if (!m || pc(m)) qb(Kb, p);
				else {
					pc(m) && !h && (m = p), q(jb, m, y);
					var _, x;
					if ("x" === u || "y" === u) {
						var w = "x" === u ? 0 : 1;
						_ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - m[w])
					} else _ = lg(p, y), x = lg(p, m);
					v = x / (x + _), Zb(Kb, p, jb, -l * (1 - v))
				}
				Ub(Yb, Yb, s), Xb(Yb, Yb, o), Ub(Kb, Kb, s), Xb(Kb, Kb, o), t.bezierCurveTo(Yb[0], Yb[1], Kb[0], Kb[
					1], p[0], p[1]), Zb(Yb, p, jb, l * v)
			} else t.lineTo(p[0], p[1]);
			c = d, d += a
		}
		return f
	}

	function yc(t, e) {
		var n = [1 / 0, 1 / 0],
			i = [-1 / 0, -1 / 0];
		if (e)
			for (var r = 0; r < t.length; r++) {
				var a = t[r];
				a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[
					1] && (i[1] = a[1])
			}
		return {
			min: e ? n : i,
			max: e ? i : n
		}
	}

	function _c(t, e) {
		if (t.length === e.length) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n],
					r = e[n];
				if (i[0] !== r[0] || i[1] !== r[1]) return
			}
			return !0
		}
	}

	function xc(t) {
		return "number" == typeof t ? t : t ? .5 : 0
	}

	function wc(t) {
		var e = t.getGlobalExtent();
		if (t.onBand) {
			var n = t.getBandWidth() / 2 - 1,
				i = e[1] > e[0] ? 1 : -1;
			e[0] += i * n, e[1] -= i * n
		}
		return e
	}

	function bc(t, e, n) {
		if (!n.valueDim) return [];
		for (var i = [], r = 0, a = e.count(); a > r; r++) i.push(dc(n, t, e, r));
		return i
	}

	function Sc(t, e, n, i) {
		var r = wc(t.getAxis("x")),
			a = wc(t.getAxis("y")),
			o = t.getBaseAxis().isHorizontal(),
			s = Math.min(r[0], r[1]),
			l = Math.min(a[0], a[1]),
			u = Math.max(r[0], r[1]) - s,
			h = Math.max(a[0], a[1]) - l;
		if (n) s -= .5, u += .5, l -= .5, h += .5;
		else {
			var c = i.get("lineStyle.width") || 2,
				d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);
			o ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d)
		}
		var f = new gy({
			shape: {
				x: s,
				y: l,
				width: u,
				height: h
			}
		});
		return e && (f.shape[o ? "width" : "height"] = 0, Sa(f, {
			shape: {
				width: u,
				height: h
			}
		}, i)), f
	}

	function Mc(t, e, n, i) {
		var r = t.getAngleAxis(),
			a = t.getRadiusAxis(),
			o = a.getExtent().slice();
		o[0] > o[1] && o.reverse();
		var s = r.getExtent(),
			l = Math.PI / 180;
		n && (o[0] -= .5, o[1] += .5);
		var u = new uy({
			shape: {
				cx: Va(t.cx, 1),
				cy: Va(t.cy, 1),
				r0: Va(o[0], 1),
				r: Va(o[1], 1),
				startAngle: -s[0] * l,
				endAngle: -s[1] * l,
				clockwise: r.inverse
			}
		});
		return e && (u.shape.endAngle = -s[0] * l, Sa(u, {
			shape: {
				endAngle: -s[1] * l
			}
		}, i)), u
	}

	function Ic(t, e, n, i) {
		return "polar" === t.type ? Mc(t, e, n, i) : Sc(t, e, n, i)
	}

	function Tc(t, e, n) {
		for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length -
			1; o++) {
			var s = t[o + 1],
				l = t[o];
			a.push(l);
			var u = [];
			switch (n) {
				case "end":
					u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);
					break;
				case "middle":
					var h = (l[r] + s[r]) / 2,
						c = [];
					u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(u), a.push(c);
					break;
				default:
					u[r] = l[r], u[1 - r] = s[1 - r], a.push(u)
			}
		}
		return t[o] && a.push(t[o]), a
	}

	function Cc(t, e) {
		var n = t.getVisual("visualMeta");
		if (n && n.length && t.count() && "cartesian2d" === e.type) {
			for (var i, r, a = n.length - 1; a >= 0; a--) {
				var o = n[a].dimension,
					s = t.dimensions[o],
					l = t.getDimensionInfo(s);
				if (i = l && l.coordDim, "x" === i || "y" === i) {
					r = n[a];
					break
				}
			}
			if (r) {
				var u = e.getAxis(i),
					h = p(r.stops, function(t) {
						return {
							coord: u.toGlobalCoord(u.dataToCoord(t.value)),
							color: t.color
						}
					}),
					c = h.length,
					d = r.outerColors.slice();
				c && h[0].coord > h[c - 1].coord && (h.reverse(), d.reverse());
				var g = 10,
					m = h[0].coord - g,
					v = h[c - 1].coord + g,
					y = v - m;
				if (.001 > y) return "transparent";
				f(h, function(t) {
					t.offset = (t.coord - m) / y
				}), h.push({
					offset: c ? h[c - 1].offset : .5,
					color: d[1] || "transparent"
				}), h.unshift({
					offset: c ? h[0].offset : .5,
					color: d[0] || "transparent"
				});
				var _ = new by(0, 0, 0, 0, h, !0);
				return _[i] = m, _[i + "2"] = v, _
			}
		}
	}

	function Dc(t, e, n) {
		var i = t.get("showAllSymbol"),
			r = "auto" === i;
		if (!i || r) {
			var a = n.getAxesByScale("ordinal")[0];
			if (a && (!r || !Ac(a, e))) {
				var o = e.mapDimension(a.dim),
					s = {};
				return f(a.getViewLabels(), function(t) {
						s[t.tickValue] = 1
					}),
					function(t) {
						return !s.hasOwnProperty(e.get(o, t))
					}
			}
		}
	}

	function Ac(t, e) {
		var n = t.getExtent(),
			i = Math.abs(n[1] - n[0]) / t.scale.count();
		isNaN(i) && (i = 0);
		for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a)
			if (1.5 * ic.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
		return !0
	}

	function kc(t, e, n, i) {
		var r = e.getData(),
			a = this.dataIndex,
			o = r.getName(a),
			s = e.get("selectedOffset");
		i.dispatchAction({
			type: "pieToggleSelect",
			from: t,
			name: o,
			seriesId: e.id
		}), r.each(function(t) {
			Pc(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
		})
	}

	function Pc(t, e, n, i, r) {
		var a = (e.startAngle + e.endAngle) / 2,
			o = Math.cos(a),
			s = Math.sin(a),
			l = n ? i : 0,
			u = [o * l, s * l];
		r ? t.animate().when(200, {
			position: u
		}).start("bounceOut") : t.attr("position", u)
	}

	function Lc(t, e) {
		function n() {
			a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
		}

		function i() {
			a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
		}
		qg.call(this);
		var r = new uy({
				z2: 2
			}),
			a = new py,
			o = new ay;
		this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on(
			"mouseover", n).on("mouseout", i)
	}

	function Oc(t, e, n, i, r, a, o) {
		function s(e, n, i) {
			for (var r = e; n > r; r++)
				if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);
			l(n - 1, i / 2)
		}

		function l(e, n) {
			for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
		}

		function u(t, e, n, i, r, a) {
			for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l >
				s; s++)
				if ("center" !== t[s].position) {
					var u = Math.abs(t[s].y - i),
						h = t[s].len,
						c = t[s].len2,
						d = r + h > u ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - n);
					e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = n + d * a, o = d
				}
		}
		t.sort(function(t, e) {
			return t.y - e.y
		});
		for (var h, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) h = t[g].y - c, 0 > h && s(g, d, -h, r),
			c = t[g].y + t[g].height;
		0 > o - c && l(d - 1, c - o);
		for (var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);
		u(f, !1, e, n, i, r), u(p, !0, e, n, i, r)
	}

	function zc(t, e, n, i, r, a) {
		for (var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);
		Oc(s, e, n, i, 1, r, a), Oc(o, e, n, i, -1, r, a);
		for (var l = 0; l < t.length; l++) {
			var u = t[l].linePoints;
			if (u) {
				var h = u[1][0] - u[2][0];
				u[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, u[1][1] = u[2][1] = t[l].y, u[1][0] = u[2][0] + h
			}
		}
	}

	function Rc() {
		this.group = new qg
	}

	function Ec(t, e, n) {
		ab.call(this, t, e, n), this.type = "value", this.angle = 0, this.name = "", this.model
	}

	function Bc(t, e, n) {
		this._model = t, this.dimensions = [], this._indicatorAxes = p(t.getIndicatorModels(), function(t, e) {
			var n = "indicator_" + e,
				i = new Ec(n, new xw);
			return i.name = t.get("name"), i.model = t, t.axis = i, this.dimensions.push(n), i
		}, this), this.resize(t, n), this.cx, this.cy, this.r, this.startAngle
	}

	function Nc(t, e) {
		return s({
			show: e
		}, t)
	}

	function Fc(t) {
		return x(t) || (t = [+t, +t]), t
	}

	function Vc() {
		var t = eg();
		this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this
			._gradientPixels = {}
	}

	function Gc(t, e, n) {
		var i = t[1] - t[0];
		e = p(e, function(e) {
			return {
				interval: [(e.interval[0] - t[0]) / i, (e.interval[1] - t[0]) / i]
			}
		});
		var r = e.length,
			a = 0;
		return function(t) {
			for (var i = a; r > i; i++) {
				var o = e[i].interval;
				if (o[0] <= t && t <= o[1]) {
					a = i;
					break
				}
			}
			if (i === r)
				for (var i = a - 1; i >= 0; i--) {
					var o = e[i].interval;
					if (o[0] <= t && t <= o[1]) {
						a = i;
						break
					}
				}
			return i >= 0 && r > i && n[i]
		}
	}

	function Hc(t, e) {
		var n = t[1] - t[0];
		return e = [(e[0] - t[0]) / n, (e[1] - t[0]) / n],
			function(t) {
				return t >= e[0] && t <= e[1]
			}
	}

	function Wc(t) {
		var e = t.dimensions;
		return "lng" === e[0] && "lat" === e[1]
	}

	function Uc(t) {
		var e = t.mainData,
			n = t.datas;
		n || (n = {
			main: e
		}, t.datasAttr = {
			main: "data"
		}), t.datas = t.mainData = null, Kc(e, n, t), MS(n, function(n) {
			MS(e.TRANSFERABLE_METHODS, function(e) {
				n.wrapMethod(e, _(Xc, t))
			})
		}), e.wrapMethod("cloneShallow", _(qc, t)), MS(e.CHANGABLE_METHODS, function(n) {
			e.wrapMethod(n, _(Zc, t))
		}), O(n[e.dataType] === e)
	}

	function Xc(t, e) {
		if (Yc(this)) {
			var n = o({}, this[IS]);
			n[this.dataType] = e, Kc(e, n, t)
		} else $c(e, this.dataType, this[TS], t);
		return e
	}

	function Zc(t, e) {
		return t.struct && t.struct.update(this), e
	}

	function qc(t, e) {
		return MS(e[IS], function(n, i) {
			n !== e && $c(n.cloneShallow(), i, e, t)
		}), e
	}

	function jc(t) {
		var e = this[TS];
		return null == t || null == e ? e : e[IS][t]
	}

	function Yc(t) {
		return t[TS] === t
	}

	function Kc(t, e, n) {
		t[IS] = {}, MS(e, function(e, i) {
			$c(e, i, t, n)
		})
	}

	function $c(t, e, n, i) {
		n[IS][e] = t, t[TS] = n, t.dataType = e, i.struct && (t[i.structAttr] = i.struct, i.struct[i.datasAttr[e]] =
			t), t.getLinkedData = jc
	}

	function Jc(t, e, n) {
		this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = p(e || [], function(e) {
			return new Pa(e, t, t.ecModel)
		}), this.leavesModel = new Pa(n || {}, t, t.ecModel)
	}

	function Qc(t, e) {
		var n = e.children;
		t.parentNode !== e && (n.push(t), t.parentNode = e)
	}

	function td(t, e, n) {
		if (t && u(e, t.type) >= 0) {
			var i = n.getData().tree.root,
				r = t.targetNode;
			if (r && i.contains(r)) return {
				node: r
			};
			var a = t.targetNodeId;
			if (null != a && (r = i.getNodeById(a))) return {
				node: r
			}
		}
	}

	function ed(t) {
		for (var e = []; t;) t = t.parentNode, t && e.push(t);
		return e.reverse()
	}

	function nd(t, e) {
		var n = ed(t);
		return u(n, e) >= 0
	}

	function id(t, e) {
		for (var n = []; t;) {
			var i = t.dataIndex;
			n.push({
				name: t.name,
				dataIndex: i,
				value: e.getRawValue(i)
			}), t = t.parentNode
		}
		return n.reverse(), n
	}

	function rd(t) {
		var e = 0;
		f(t.children, function(t) {
			rd(t);
			var n = t.value;
			x(n) && (n = n[0]), e += n
		});
		var n = t.value;
		x(n) && (n = n[0]), (null == n || isNaN(n)) && (n = e), 0 > n && (n = 0), x(t.value) ? t.value[0] = n : t
			.value = n
	}

	function ad(t, e, n) {
		function i() {
			o.ignore = o.hoverIgnore
		}

		function r() {
			o.ignore = o.normalIgnore
		}
		qg.call(this);
		var a = new uy({
			z2: AS
		});
		a.seriesIndex = e.seriesIndex;
		var o = new ay({
			z2: kS,
			silent: t.getModel("label").get("silent")
		});
		this.add(a), this.add(o), this.updateData(!0, t, "normal", e, n), this.on("emphasis", i).on("normal", r).on(
			"mouseover", i).on("mouseout", r)
	}

	function od(t, e, n) {
		var i = t.getVisual("color"),
			r = t.getVisual("visualMeta");
		r && 0 !== r.length || (i = null);
		var a = t.getModel("itemStyle").get("color");
		if (a) return a;
		if (i) return i;
		if (0 === t.depth) return n.option.color[0];
		var o = n.option.color.length;
		return a = n.option.color[sd(t) % o]
	}

	function sd(t) {
		for (var e = t; e.depth > 1;) e = e.parentNode;
		var n = t.getAncestors()[0];
		return u(n.children, e)
	}

	function ld(t, e, n) {
		return n === DS.NONE ? !1 : n === DS.SELF ? t === e : n === DS.ANCESTOR ? t === e || t.isAncestorOf(e) :
			t === e || t.isDescendantOf(e)
	}

	function ud(t, e) {
		var n = t.children || [];
		t.children = hd(n, e), n.length && f(t.children, function(t) {
			ud(t, e)
		})
	}

	function hd(t, e) {
		if ("function" == typeof e) return t.sort(e);
		var n = "asc" === e;
		return t.sort(function(t, e) {
			var i = (t.getValue() - e.getValue()) * (n ? 1 : -1);
			return 0 === i ? (t.dataIndex - e.dataIndex) * (n ? -1 : 1) : i
		})
	}

	function cd() {
		xg.call(this)
	}

	function dd(t) {
		this.name = t, this.zoomLimit, xg.call(this), this._roamTransformable = new cd, this._rawTransformable =
			new cd, this._center, this._zoom
	}

	function fd(t, e, n, i) {
		var r = n.seriesModel,
			a = r ? r.coordinateSystem : null;
		return a === this ? a[t](i) : null
	}

	function pd(t, e, n, i, r) {
		dd.call(this, t), this.map = e, this._nameCoordMap = N(), this.loadGeoJson(n, i, r)
	}

	function gd(t, e, n, i) {
		var r = n.geoModel,
			a = n.seriesModel,
			o = r ? r.coordinateSystem : a ? a.coordinateSystem || (a.getReferringComponents("geo")[0] || {})
			.coordinateSystem : null;
		return o === this ? o[t](i) : null
	}

	function md(t, e) {
		var n = t.get("boundingCoords");
		if (null != n) {
			var i = n[0],
				r = n[1];
			isNaN(i[0]) || isNaN(i[1]) || isNaN(r[0]) || isNaN(r[1]) || this.setBoundingRect(i[0], i[1], r[0] - i[
				0], r[1] - i[1])
		}
		var a, o = this.getBoundingRect(),
			s = t.get("layoutCenter"),
			l = t.get("layoutSize"),
			u = e.getWidth(),
			h = e.getHeight(),
			c = t.get("aspectScale") || .75,
			d = o.width / o.height * c,
			f = !1;
		s && l && (s = [Fa(s[0], u), Fa(s[1], h)], l = Fa(l, Math.min(u, h)), isNaN(s[0]) || isNaN(s[1]) || isNaN(
			l) || (f = !0));
		var p;
		if (f) {
			var p = {};
			d > 1 ? (p.width = l, p.height = l / d) : (p.height = l, p.width = l * d), p.y = s[1] - p.height / 2, p
				.x = s[0] - p.width / 2
		} else a = t.getBoxLayoutParams(), a.aspect = d, p = ho(a, {
			width: u,
			height: h
		});
		this.setViewRect(p.x, p.y, p.width, p.height), this.setCenter(t.get("center")), this.setZoom(t.get("zoom"))
	}

	function vd(t, e) {
		f(e.get("geoCoord"), function(e, n) {
			t.addGeoCoord(n, e)
		})
	}

	function yd(t, e) {
		return !!_d(t)[e]
	}

	function _d(t) {
		return t[QS] || (t[QS] = {})
	}

	function xd(t) {
		this.pointerChecker, this._zr = t, this._opt = {};
		var e = y,
			n = e(wd, this),
			r = e(bd, this),
			a = e(Sd, this),
			o = e(Md, this),
			l = e(Id, this);
		dg.call(this), this.setPointerChecker = function(t) {
			this.pointerChecker = t
		}, this.enable = function(e, u) {
			this.disable(), this._opt = s(i(u) || {}, {
				zoomOnMouseWheel: !0,
				moveOnMouseMove: !0,
				preventDefaultMouseMove: !0
			}), null == e && (e = !0), (e === !0 || "move" === e || "pan" === e) && (t.on("mousedown", n), t
				.on("mousemove", r), t.on("mouseup", a)), (e === !0 || "scale" === e || "zoom" === e) && (t
				.on("mousewheel", o), t.on("pinch", l))
		}, this.disable = function() {
			t.off("mousedown", n), t.off("mousemove", r), t.off("mouseup", a), t.off("mousewheel", o), t.off(
				"pinch", l)
		}, this.dispose = this.disable, this.isDragging = function() {
			return this._dragging
		}, this.isPinching = function() {
			return this._pinching
		}
	}

	function wd(t) {
		if (!(yi(t) || t.target && t.target.draggable)) {
			var e = t.offsetX,
				n = t.offsetY;
			this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, this._dragging = !0)
		}
	}

	function bd(t) {
		if (!yi(t) && Cd(this, "moveOnMouseMove", t) && this._dragging && "pinch" !== t.gestureEvent && !yd(this
				._zr, "globalPan")) {
			var e = t.offsetX,
				n = t.offsetY,
				i = this._x,
				r = this._y,
				a = e - i,
				o = n - r;
			this._x = e, this._y = n, this._opt.preventDefaultMouseMove && Cm(t.event), this.trigger("pan", a, o, i,
				r, e, n)
		}
	}

	function Sd(t) {
		yi(t) || (this._dragging = !1)
	}

	function Md(t) {
		if (Cd(this, "zoomOnMouseWheel", t) && 0 !== t.wheelDelta) {
			var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
			Td.call(this, t, e, t.offsetX, t.offsetY)
		}
	}

	function Id(t) {
		if (!yd(this._zr, "globalPan")) {
			var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
			Td.call(this, t, e, t.pinchX, t.pinchY)
		}
	}

	function Td(t, e, n, i) {
		this.pointerChecker && this.pointerChecker(t, n, i) && (Cm(t.event), this.trigger("zoom", e, n, i))
	}

	function Cd(t, e, n) {
		var i = t._opt[e];
		return i && (!b(i) || n.event[i + "Key"])
	}

	function Dd(t, e, n) {
		var i = t.target,
			r = i.position;
		r[0] += e, r[1] += n, i.dirty()
	}

	function Ad(t, e, n, i) {
		var r = t.target,
			a = t.zoomLimit,
			o = r.position,
			s = r.scale,
			l = t.zoom = t.zoom || 1;
		if (l *= e, a) {
			var u = a.min || 0,
				h = a.max || 1 / 0;
			l = Math.max(Math.min(h, l), u)
		}
		var c = l / t.zoom;
		t.zoom = l, o[0] -= (n - o[0]) * (c - 1), o[1] -= (i - o[1]) * (c - 1), s[0] *= c, s[1] *= c, r.dirty()
	}

	function kd(t, e, n) {
		var i = e.getComponentByElement(t.topTarget),
			r = i && i.coordinateSystem;
		return i && i !== n && !tM[i.mainType] && r && r.model !== n
	}

	function Pd(t) {
		var e = t.getItemStyle(),
			n = t.get("areaColor");
		return null != n && (e.fill = n), e
	}

	function Ld(t, e, n, i, r) {
		n.off("click"), n.off("mousedown"), e.get("selectedMode") && (n.on("mousedown", function() {
			t._mouseDownFlag = !0
		}), n.on("click", function(a) {
			if (t._mouseDownFlag) {
				t._mouseDownFlag = !1;
				for (var o = a.target; !o.__regions;) o = o.parent;
				if (o) {
					var s = {
						type: ("geo" === e.mainType ? "geo" : "map") + "ToggleSelect",
						batch: p(o.__regions, function(t) {
							return {
								name: t.name,
								from: r.uid
							}
						})
					};
					s[e.mainType + "Id"] = e.id, i.dispatchAction(s), Od(e, n)
				}
			}
		}))
	}

	function Od(t, e) {
		e.eachChild(function(e) {
			f(e.__regions, function(n) {
				e.trigger(t.isSelected(n.name) ? "emphasis" : "normal")
			})
		})
	}

	function zd(t, e) {
		var n = new qg;
		this._controller = new xd(t.getZr()), this._controllerHost = {
			target: e ? n : null
		}, this.group = n, this._updateGroup = e, this._mouseDownFlag
	}

	function Rd(t, e, n) {
		var i = t.getZoom(),
			r = t.getCenter(),
			a = e.zoom,
			o = t.dataToPoint(r);
		if (null != e.dx && null != e.dy) {
			o[0] -= e.dx, o[1] -= e.dy;
			var r = t.pointToData(o);
			t.setCenter(r)
		}
		if (null != a) {
			if (n) {
				var s = n.min || 0,
					l = n.max || 1 / 0;
				a = Math.max(Math.min(i * a, l), s) / i
			}
			t.scale[0] *= a, t.scale[1] *= a;
			var u = t.position,
				h = (e.originX - u[0]) * (a - 1),
				c = (e.originY - u[1]) * (a - 1);
			u[0] -= h, u[1] -= c, t.updateTransform();
			var r = t.pointToData(o);
			t.setCenter(r), t.setZoom(a * i)
		}
		return {
			center: t.getCenter(),
			zoom: t.getZoom()
		}
	}

	function Ed(t, e) {
		var n = {};
		return f(t, function(t) {
			t.each(t.mapDimension("value"), function(e, i) {
				var r = "ec-" + t.getName(i);
				n[r] = n[r] || [], isNaN(e) || n[r].push(e)
			})
		}), t[0].map(t[0].mapDimension("value"), function(i, r) {
			for (var a = "ec-" + t[0].getName(r), o = 0, s = 1 / 0, l = -1 / 0, u = n[a].length, h = 0; u >
				h; h++) s = Math.min(s, n[a][h]), l = Math.max(l, n[a][h]), o += n[a][h];
			var c;
			return c = "min" === e ? s : "max" === e ? l : "average" === e ? o / u : o, 0 === u ? 0 / 0 : c
		})
	}

	function Bd(t) {
		var e = t.data;
		e && e[0] && e[0][0] && e[0][0].coord && (t.data = p(e, function(t) {
			var e = [t[0].coord, t[1].coord],
				n = {
					coords: e
				};
			return t[0].name && (n.fromName = t[0].name), t[1].name && (n.toName = t[1].name), a([n, t[
				0], t[1]])
		}))
	}

	function Nd(t) {
		return isNaN(+t.cpx1) || isNaN(+t.cpy1)
	}

	function Fd(t) {
		return "_" + t + "Type"
	}

	function Vd(t, e, n) {
		var i = e.getItemVisual(n, "color"),
			r = e.getItemVisual(n, t),
			a = e.getItemVisual(n, t + "Size");
		if (r && "none" !== r) {
			x(a) || (a = [a, a]);
			var o = Wu(r, -a[0] / 2, -a[1] / 2, a[0], a[1], i);
			return o.name = t, o
		}
	}

	function Gd(t) {
		var e = new hM({
			name: "line"
		});
		return Hd(e.shape, t), e
	}

	function Hd(t, e) {
		var n = e[0],
			i = e[1],
			r = e[2];
		t.x1 = n[0], t.y1 = n[1], t.x2 = i[0], t.y2 = i[1], t.percent = 1, r ? (t.cpx1 = r[0], t.cpy1 = r[1]) : (t
			.cpx1 = 0 / 0, t.cpy1 = 0 / 0)
	}

	function Wd() {
		var t = this,
			e = t.childOfName("fromSymbol"),
			n = t.childOfName("toSymbol"),
			i = t.childOfName("label");
		if (e || n || !i.ignore) {
			for (var r = 1, a = this.parent; a;) a.scale && (r /= a.scale[0]), a = a.parent;
			var o = t.childOfName("line");
			if (this.__dirty || o.__dirty) {
				var s = o.shape.percent,
					l = o.pointAt(0),
					u = o.pointAt(s),
					h = q([], u, l);
				if (te(h, h), e) {
					e.attr("position", l);
					var c = o.tangentAt(0);
					e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])), e.attr("scale", [r * s, r * s])
				}
				if (n) {
					n.attr("position", u);
					var c = o.tangentAt(1);
					n.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])), n.attr("scale", [r * s, r * s])
				}
				if (!i.ignore) {
					i.attr("position", u);
					var d, f, p, g = 5 * r;
					if ("end" === i.__position) d = [h[0] * g + u[0], h[1] * g + u[1]], f = h[0] > .8 ? "left" : h[
						0] < -.8 ? "right" : "center", p = h[1] > .8 ? "top" : h[1] < -.8 ? "bottom" : "middle";
					else if ("middle" === i.__position) {
						var m = s / 2,
							c = o.tangentAt(m),
							v = [c[1], -c[0]],
							y = o.pointAt(m);
						v[1] > 0 && (v[0] = -v[0], v[1] = -v[1]), d = [y[0] + v[0] * g, y[1] + v[1] * g], f =
							"center", p = "bottom";
						var _ = -Math.atan2(c[1], c[0]);
						u[0] < l[0] && (_ = Math.PI + _), i.attr("rotation", _)
					} else d = [-h[0] * g + l[0], -h[1] * g + l[1]], f = h[0] > .8 ? "right" : h[0] < -.8 ? "left" :
						"center", p = h[1] > .8 ? "bottom" : h[1] < -.8 ? "top" : "middle";
					i.attr({
						style: {
							textVerticalAlign: i.__verticalAlign || p,
							textAlign: i.__textAlign || f
						},
						position: d,
						scale: [r, r]
					})
				}
			}
		}
	}

	function Ud(t, e, n) {
		qg.call(this), this._createLine(t, e, n)
	}

	function Xd(t) {
		this._ctor = t || Ud, this.group = new qg
	}

	function Zd(t, e, n, i) {
		var r = e.getItemLayout(n);
		if (Kd(r)) {
			var a = new t._ctor(e, n, i);
			e.setItemGraphicEl(n, a), t.group.add(a)
		}
	}

	function qd(t, e, n, i, r, a) {
		var o = e.getItemGraphicEl(i);
		return Kd(n.getItemLayout(r)) ? (o ? o.updateData(n, r, a) : o = new t._ctor(n, r, a), n.setItemGraphicEl(r,
			o), void t.group.add(o)) : void t.group.remove(o)
	}

	function jd(t) {
		var e = t.hostModel;
		return {
			lineStyle: e.getModel("lineStyle").getLineStyle(),
			hoverLineStyle: e.getModel("emphasis.lineStyle").getLineStyle(),
			labelModel: e.getModel("label"),
			hoverLabelModel: e.getModel("emphasis.label")
		}
	}

	function Yd(t) {
		return isNaN(t[0]) || isNaN(t[1])
	}

	function Kd(t) {
		return !Yd(t[0]) && !Yd(t[1])
	}

	function $d(t, e, n) {
		qg.call(this), this.add(this.createLine(t, e, n)), this._updateEffectSymbol(t, e)
	}

	function Jd(t, e, n) {
		qg.call(this), this._createPolyline(t, e, n)
	}

	function Qd(t, e, n) {
		$d.call(this, t, e, n), this._lastFrame = 0, this._lastFramePercent = 0
	}

	function tf() {
		this.group = new qg
	}

	function ef(t) {
		return t instanceof Array || (t = [t, t]), t
	}

	function nf(t, e) {
		var n = t.get("center"),
			i = e.getWidth(),
			r = e.getHeight(),
			a = Math.min(i, r),
			o = Fa(n[0], e.getWidth()),
			s = Fa(n[1], e.getHeight()),
			l = Fa(t.get("radius"), a / 2);
		return {
			cx: o,
			cy: s,
			r: l
		}
	}

	function rf(t, e) {
		return e && ("string" == typeof e ? t = e.replace("{value}", null != t ? t : "") : "function" == typeof e &&
			(t = e(t))), t
	}

	function af(t, e, n, i) {
		var r = t.getItemLayout(e),
			a = n.get("symbolRepeat"),
			o = n.get("symbolClip"),
			s = n.get("symbolPosition") || "start",
			l = n.get("symbolRotate"),
			u = (l || 0) * Math.PI / 180 || 0,
			h = n.get("symbolPatternSize") || 2,
			c = n.isAnimationEnabled(),
			d = {
				dataIndex: e,
				layout: r,
				itemModel: n,
				symbolType: t.getItemVisual(e, "symbol") || "circle",
				color: t.getItemVisual(e, "color"),
				symbolClip: o,
				symbolRepeat: a,
				symbolRepeatDirection: n.get("symbolRepeatDirection"),
				symbolPatternSize: h,
				rotation: u,
				animationModel: c ? n : null,
				hoverAnimation: c && n.get("hoverAnimation"),
				z2: n.getShallow("z", !0) || 0
			};
		of(n, a, r, i, d), lf(t, e, r, a, o, d.boundingLength, d.pxSign, h, i, d), uf(n, d.symbolScale, u, i, d);
		var f = d.symbolSize,
			p = n.get("symbolOffset");
		return x(p) && (p = [Fa(p[0], f[0]), Fa(p[1], f[1])]), hf(n, f, r, a, o, p, s, d.valueLineWidth, d
			.boundingLength, d.repeatCutLength, i, d), d
	}

	function of(t, e, n, i, r) {
		var a, o = i.valueDim,
			s = t.get("symbolBoundingData"),
			l = i.coordSys.getOtherAxis(i.coordSys.getBaseAxis()),
			u = l.toGlobalCoord(l.dataToCoord(0)),
			h = 1 - +(n[o.wh] <= 0);
		if (x(s)) {
			var c = [sf(l, s[0]) - u, sf(l, s[1]) - u];
			c[1] < c[0] && c.reverse(), a = c[h]
		} else a = null != s ? sf(l, s) - u : e ? i.coordSysExtent[o.index][h] - u : n[o.wh];
		r.boundingLength = a, e && (r.repeatCutLength = n[o.wh]), r.pxSign = a > 0 ? 1 : 0 > a ? -1 : 0
	}

	function sf(t, e) {
		return t.toGlobalCoord(t.dataToCoord(t.scale.parse(e)))
	}

	function lf(t, e, n, i, r, a, o, s, l, u) {
		var h = l.valueDim,
			c = l.categoryDim,
			d = Math.abs(n[c.wh]),
			f = t.getItemVisual(e, "symbolSize");
		x(f) ? f = f.slice() : (null == f && (f = "100%"), f = [f, f]), f[c.index] = Fa(f[c.index], d), f[h.index] =
			Fa(f[h.index], i ? d : Math.abs(a)), u.symbolSize = f;
		var p = u.symbolScale = [f[0] / s, f[1] / s];
		p[h.index] *= (l.isHorizontal ? -1 : 1) * o
	}

	function uf(t, e, n, i, r) {
		var a = t.get(IM) || 0;
		a && (CM.attr({
			scale: e.slice(),
			rotation: n
		}), CM.updateTransform(), a /= CM.getLineScale(), a *= e[i.valueDim.index]), r.valueLineWidth = a
	}

	function hf(t, e, n, i, r, a, s, l, u, h, c, d) {
		var f = c.categoryDim,
			p = c.valueDim,
			g = d.pxSign,
			m = Math.max(e[p.index] + l, 0),
			v = m;
		if (i) {
			var y = Math.abs(u),
				_ = D(t.get("symbolMargin"), "15%") + "",
				x = !1;
			_.lastIndexOf("!") === _.length - 1 && (x = !0, _ = _.slice(0, _.length - 1)), _ = Fa(_, e[p.index]);
			var w = Math.max(m + 2 * _, 0),
				b = x ? 0 : 2 * _,
				S = Qa(i),
				M = S ? i : Cf((y + b) / w),
				I = y - M * m;
			_ = I / 2 / (x ? M : M - 1), w = m + 2 * _, b = x ? 0 : 2 * _, S || "fixed" === i || (M = h ? Cf((Math
				.abs(h) + b) / w) : 0), v = M * w - b, d.repeatTimes = M, d.symbolMargin = _
		}
		var T = g * (v / 2),
			C = d.pathPosition = [];
		C[f.index] = n[f.wh] / 2, C[p.index] = "start" === s ? T : "end" === s ? u - T : u / 2, a && (C[0] += a[0],
			C[1] += a[1]);
		var A = d.bundlePosition = [];
		A[f.index] = n[f.xy], A[p.index] = n[p.xy];
		var k = d.barRectShape = o({}, n);
		k[p.wh] = g * Math.max(Math.abs(n[p.wh]), Math.abs(C[p.index] + T)), k[f.wh] = n[f.wh];
		var P = d.clipShape = {};
		P[f.xy] = -n[f.xy], P[f.wh] = c.ecSize[f.wh], P[p.xy] = 0, P[p.wh] = n[p.wh]
	}

	function cf(t) {
		var e = t.symbolPatternSize,
			n = Wu(t.symbolType, -e / 2, -e / 2, e, e, t.color);
		return n.attr({
			culling: !0
		}), "image" !== n.type && n.setStyle({
			strokeNoScale: !0
		}), n
	}

	function df(t, e, n, i) {
		function r(t) {
			var e = h.slice(),
				i = n.pxSign,
				r = t;
			return ("start" === n.symbolRepeatDirection ? i > 0 : 0 > i) && (r = d - 1 - t), e[c.index] = p * (r -
				d / 2 + .5) + h[c.index], {
				position: e,
				scale: n.symbolScale.slice(),
				rotation: n.rotation
			}
		}

		function a() {
			Mf(t, function(t) {
				t.trigger("emphasis")
			})
		}

		function o() {
			Mf(t, function(t) {
				t.trigger("normal")
			})
		}
		var s = t.__pictorialBundle,
			l = n.symbolSize,
			u = n.valueLineWidth,
			h = n.pathPosition,
			c = e.valueDim,
			d = n.repeatTimes || 0,
			f = 0,
			p = l[e.valueDim.index] + u + 2 * n.symbolMargin;
		for (Mf(t, function(t) {
				t.__pictorialAnimationIndex = f, t.__pictorialRepeatTimes = d, d > f ? If(t, null, r(f), n, i) :
					If(t, null, {
						scale: [0, 0]
					}, n, i, function() {
						s.remove(t)
					}), _f(t, n), f++
			}); d > f; f++) {
			var g = cf(n);
			g.__pictorialAnimationIndex = f, g.__pictorialRepeatTimes = d, s.add(g);
			var m = r(f);
			If(g, {
				position: m.position,
				scale: [0, 0]
			}, {
				scale: m.scale,
				rotation: m.rotation
			}, n, i), g.on("mouseover", a).on("mouseout", o), _f(g, n)
		}
	}

	function ff(t, e, n, i) {
		function r() {
			this.trigger("emphasis")
		}

		function a() {
			this.trigger("normal")
		}
		var o = t.__pictorialBundle,
			s = t.__pictorialMainPath;
		s ? If(s, null, {
			position: n.pathPosition.slice(),
			scale: n.symbolScale.slice(),
			rotation: n.rotation
		}, n, i) : (s = t.__pictorialMainPath = cf(n), o.add(s), If(s, {
			position: n.pathPosition.slice(),
			scale: [0, 0],
			rotation: n.rotation
		}, {
			scale: n.symbolScale.slice()
		}, n, i), s.on("mouseover", r).on("mouseout", a)), _f(s, n)
	}

	function pf(t, e, n) {
		var i = o({}, e.barRectShape),
			r = t.__pictorialBarRect;
		r ? If(r, null, {
			shape: i
		}, e, n) : (r = t.__pictorialBarRect = new gy({
			z2: 2,
			shape: i,
			silent: !0,
			style: {
				stroke: "transparent",
				fill: "transparent",
				lineWidth: 0
			}
		}), t.add(r))
	}

	function gf(t, e, n, i) {
		if (n.symbolClip) {
			var r = t.__pictorialClipPath,
				a = o({}, n.clipShape),
				s = e.valueDim,
				l = n.animationModel,
				u = n.dataIndex;
			if (r) ba(r, {
				shape: a
			}, l, u);
			else {
				a[s.wh] = 0, r = new gy({
					shape: a
				}), t.__pictorialBundle.setClipPath(r), t.__pictorialClipPath = r;
				var h = {};
				h[s.wh] = n.clipShape[s.wh], ky[i ? "updateProps" : "initProps"](r, {
					shape: h
				}, l, u)
			}
		}
	}

	function mf(t, e) {
		var n = t.getItemModel(e);
		return n.getAnimationDelayParams = vf, n.isAnimationEnabled = yf, n
	}

	function vf(t) {
		return {
			index: t.__pictorialAnimationIndex,
			count: t.__pictorialRepeatTimes
		}
	}

	function yf() {
		return this.parentModel.isAnimationEnabled() && !!this.getShallow("animation")
	}

	function _f(t, e) {
		t.off("emphasis").off("normal");
		var n = e.symbolScale.slice();
		e.hoverAnimation && t.on("emphasis", function() {
			this.animateTo({
				scale: [1.1 * n[0], 1.1 * n[1]]
			}, 400, "elasticOut")
		}).on("normal", function() {
			this.animateTo({
				scale: n.slice()
			}, 400, "elasticOut")
		})
	}

	function xf(t, e, n, i) {
		var r = new qg,
			a = new qg;
		return r.add(a), r.__pictorialBundle = a, a.attr("position", n.bundlePosition.slice()), n.symbolRepeat ? df(
				r, e, n) : ff(r, e, n), pf(r, n, i), gf(r, e, n, i), r.__pictorialShapeStr = Sf(t, n), r
			.__pictorialSymbolMeta = n, r
	}

	function wf(t, e, n) {
		var i = n.animationModel,
			r = n.dataIndex,
			a = t.__pictorialBundle;
		ba(a, {
			position: n.bundlePosition.slice()
		}, i, r), n.symbolRepeat ? df(t, e, n, !0) : ff(t, e, n, !0), pf(t, n, !0), gf(t, e, n, !0)
	}

	function bf(t, e, n, i) {
		var r = i.__pictorialBarRect;
		r && (r.style.text = null);
		var a = [];
		Mf(i, function(t) {
			a.push(t)
		}), i.__pictorialMainPath && a.push(i.__pictorialMainPath), i.__pictorialClipPath && (n = null), f(a,
			function(t) {
				ba(t, {
					scale: [0, 0]
				}, n, e, function() {
					i.parent && i.parent.remove(i)
				})
			}), t.setItemGraphicEl(e, null)
	}

	function Sf(t, e) {
		return [t.getItemVisual(e.dataIndex, "symbol") || "none", !!e.symbolRepeat, !!e.symbolClip].join(":")
	}

	function Mf(t, e, n) {
		f(t.__pictorialBundle.children(), function(i) {
			i !== t.__pictorialBarRect && e.call(n, i)
		})
	}

	function If(t, e, n, i, r, a) {
		e && t.attr(e), i.symbolClip && !r ? n && t.attr(n) : n && ky[r ? "updateProps" : "initProps"](t, n, i
			.animationModel, i.dataIndex, a)
	}

	function Tf(t, e, n) {
		var i = n.color,
			r = n.dataIndex,
			a = n.itemModel,
			o = a.getModel("itemStyle").getItemStyle(["color"]),
			l = a.getModel("emphasis.itemStyle").getItemStyle(),
			u = a.getShallow("cursor");
		Mf(t, function(t) {
			t.setColor(i), t.setStyle(s({
				fill: i,
				opacity: n.opacity
			}, o)), ha(t, l), u && (t.cursor = u), t.z2 = n.z2
		});
		var h = {},
			c = e.valueDim.posDesc[+(n.boundingLength > 0)],
			d = t.__pictorialBarRect;
		Th(d.style, h, a, i, e.seriesModel, r, c), ha(d, h)
	}

	function Cf(t) {
		var e = Math.round(t);
		return Math.abs(t - e) < 1e-4 ? e : Math.ceil(t)
	}

	function Df(t) {
		return t.get("stack") || "__ec_stack_" + t.seriesIndex
	}

	function Af(t) {
		return t.dim
	}

	function kf(t, e, n) {
		var i = n.getWidth(),
			r = n.getHeight(),
			a = {},
			o = Pf(m(e.getSeriesByType(t), function(t) {
				return !e.isSeriesFiltered(t) && t.coordinateSystem && "polar" === t.coordinateSystem.type
			}));
		e.eachSeriesByType(t, function(t) {
			if ("polar" === t.coordinateSystem.type) {
				var e = t.getData(),
					n = t.coordinateSystem,
					s = n.getBaseAxis(),
					l = Df(t),
					u = o[Af(s)][l],
					h = u.offset,
					c = u.width,
					d = n.getOtherAxis(s),
					f = t.get("center") || ["50%", "50%"],
					p = Fa(f[0], i),
					g = Fa(f[1], r),
					m = t.get("barMinHeight") || 0,
					v = t.get("barMinAngle") || 0;
				a[l] = a[l] || [];
				for (var y = e.mapDimension(d.dim), _ = e.mapDimension(s.dim), x = lu(e, y), w = d
						.getExtent()[0], b = 0, S = e.count(); S > b; b++) {
					var M = e.get(y, b),
						I = e.get(_, b);
					if (!isNaN(M)) {
						var T = M >= 0 ? "p" : "n",
							C = w;
						x && (a[l][I] || (a[l][I] = {
							p: w,
							n: w
						}), C = a[l][I][T]);
						var D, A, k, P;
						if ("radius" === d.dim) {
							var L = d.dataToRadius(M) - w,
								O = s.dataToAngle(I);
							Math.abs(L) < m && (L = (0 > L ? -1 : 1) * m), D = C, A = C + L, k = O - h, P =
								k - c, x && (a[l][I][T] = A)
						} else {
							var z = d.dataToAngle(M, !0) - w,
								R = s.dataToRadius(I);
							Math.abs(z) < v && (z = (0 > z ? -1 : 1) * v), D = R + h, A = D + c, k = C, P =
								C + z, x && (a[l][I][T] = P)
						}
						e.setItemLayout(b, {
							cx: p,
							cy: g,
							r0: D,
							r: A,
							startAngle: -k * Math.PI / 180,
							endAngle: -P * Math.PI / 180
						})
					}
				}
			}
		}, this)
	}

	function Pf(t) {
		var e = {};
		f(t, function(t) {
			var n = t.getData(),
				i = t.coordinateSystem,
				r = i.getBaseAxis(),
				a = r.getExtent(),
				o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
				s = e[Af(r)] || {
					bandWidth: o,
					remainedWidth: o,
					autoWidthCount: 0,
					categoryGap: "20%",
					gap: "30%",
					stacks: {}
				},
				l = s.stacks;
			e[Af(r)] = s;
			var u = Df(t);
			l[u] || s.autoWidthCount++, l[u] = l[u] || {
				width: 0,
				maxWidth: 0
			};
			var h = Fa(t.get("barWidth"), o),
				c = Fa(t.get("barMaxWidth"), o),
				d = t.get("barGap"),
				f = t.get("barCategoryGap");
			h && !l[u].width && (h = Math.min(s.remainedWidth, h), l[u].width = h, s.remainedWidth -= h),
				c && (l[u].maxWidth = c), null != d && (s.gap = d), null != f && (s.categoryGap = f)
		});
		var n = {};
		return f(e, function(t, e) {
			n[e] = {};
			var i = t.stacks,
				r = t.bandWidth,
				a = Fa(t.categoryGap, r),
				o = Fa(t.gap, 1),
				s = t.remainedWidth,
				l = t.autoWidthCount,
				u = (s - a) / (l + (l - 1) * o);
			u = Math.max(u, 0), f(i, function(t) {
				var e = t.maxWidth;
				e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t
					.width = e, l--)
			}), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);
			var h, c = 0;
			f(i, function(t) {
				t.width || (t.width = u), h = t, c += t.width * (1 + o)
			}), h && (c -= h.width * o);
			var d = -c / 2;
			f(i, function(t, i) {
				n[e][i] = n[e][i] || {
					offset: d,
					width: t.width
				}, d += t.width * (1 + o)
			})
		}), n
	}

	function Lf(t, e) {
		ab.call(this, "radius", t, e), this.type = "category"
	}

	function Of(t, e) {
		e = e || [0, 360], ab.call(this, "angle", t, e), this.type = "category"
	}

	function zf(t, e) {
		return e.type || (e.data ? "category" : "value")
	}

	function Rf(t, e, n) {
		var i = e.get("center"),
			r = n.getWidth(),
			a = n.getHeight();
		t.cx = Fa(i[0], r), t.cy = Fa(i[1], a);
		var o = t.getRadiusAxis(),
			s = Math.min(r, a) / 2,
			l = Fa(e.get("radius"), s);
		o.inverse ? o.setExtent(l, 0) : o.setExtent(0, l)
	}

	function Ef(t) {
		var e = this,
			n = e.getAngleAxis(),
			i = e.getRadiusAxis();
		if (n.scale.setExtent(1 / 0, -1 / 0), i.scale.setExtent(1 / 0, -1 / 0), t.eachSeries(function(t) {
				if (t.coordinateSystem === e) {
					var r = t.getData();
					f(r.mapDimension("radius", !0), function(t) {
						i.scale.unionExtentFromData(r, uu(r, t))
					}), f(r.mapDimension("angle", !0), function(t) {
						n.scale.unionExtentFromData(r, uu(r, t))
					})
				}
			}), Ru(n.scale, n.model), Ru(i.scale, i.model), "category" === n.type && !n.onBand) {
			var r = n.getExtent(),
				a = 360 / n.scale.count();
			n.inverse ? r[1] += a : r[1] -= a, n.setExtent(r[0], r[1])
		}
	}

	function Bf(t, e) {
		if (t.type = e.get("type"), t.scale = Eu(e), t.onBand = e.get("boundaryGap") && "category" === t.type, t
			.inverse = e.get("inverse"), "angleAxis" === e.mainType) {
			t.inverse ^= e.get("clockwise");
			var n = e.get("startAngle");
			t.setExtent(n, n + (t.inverse ? -360 : 360))
		}
		e.axis = t, t.model = e
	}

	function Nf(t, e, n) {
		e[1] > e[0] && (e = e.slice().reverse());
		var i = t.coordToPoint([e[0], n]),
			r = t.coordToPoint([e[1], n]);
		return {
			x1: i[0],
			y1: i[1],
			x2: r[0],
			y2: r[1]
		}
	}

	function Ff(t) {
		var e = t.getRadiusAxis();
		return e.inverse ? 0 : 1
	}

	function Vf(t) {
		var e = t[0],
			n = t[t.length - 1];
		e && n && Math.abs(Math.abs(e.coord - n.coord) - 360) < 1e-4 && t.pop()
	}

	function Gf(t, e, n) {
		return {
			position: [t.cx, t.cy],
			rotation: n / 180 * Math.PI,
			labelDirection: -1,
			tickDirection: -1,
			nameDirection: 1,
			labelRotate: e.getModel("axisLabel").get("rotate"),
			z2: 1
		}
	}

	function Hf(t, e, n, i, r) {
		var a = t.axis;
		if (!a.scale.isBlank() && a.containData(e)) {
			if (!t.involveSeries) return void n.showPointer(t, e);
			var s = Wf(e, t),
				l = s.payloadBatch,
				u = s.snapToValue;
			l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(u) && null != u && (e = u), n
				.showPointer(t, e, l, r), n.showTooltip(t, s, u)
		}
	}

	function Wf(t, e) {
		var n = e.axis,
			i = n.dim,
			r = t,
			a = [],
			o = Number.MAX_VALUE,
			s = -1;
		return EM(e.seriesModels, function(e) {
			var l, u, h = e.getData().mapDimension(i, !0);
			if (e.getAxisTooltipData) {
				var c = e.getAxisTooltipData(h, t, n);
				u = c.dataIndices, l = c.nestestValue
			} else {
				if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length)
					return;
				l = e.getData().get(h[0], u[0])
			}
			if (null != l && isFinite(l)) {
				var d = t - l,
					f = Math.abs(d);
				o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), EM(u,
					function(t) {
						a.push({
							seriesIndex: e.seriesIndex,
							dataIndexInside: t,
							dataIndex: e.getData().getRawIndex(t)
						})
					}))
			}
		}), {
			payloadBatch: a,
			snapToValue: r
		}
	}

	function Uf(t, e, n, i) {
		t[e.key] = {
			value: n,
			payloadBatch: i
		}
	}

	function Xf(t, e, n, i) {
		var r = n.payloadBatch,
			a = e.axis,
			o = a.model,
			s = e.axisPointerModel;
		if (e.triggerTooltip && r.length) {
			var l = e.coordSys.model,
				u = Qh(l),
				h = t.map[u];
			h || (h = t.map[u] = {
				coordSysId: l.id,
				coordSysIndex: l.componentIndex,
				coordSysType: l.type,
				coordSysMainType: l.mainType,
				dataByAxis: []
			}, t.list.push(h)), h.dataByAxis.push({
				axisDim: a.dim,
				axisIndex: o.componentIndex,
				axisType: o.type,
				axisId: o.id,
				value: i,
				valueLabelOpt: {
					precision: s.get("label.precision"),
					formatter: s.get("label.formatter")
				},
				seriesDataIndices: r.slice()
			})
		}
	}

	function Zf(t, e, n) {
		var i = n.axesInfo = [];
		EM(e, function(e, n) {
			var r = e.axisPointerModel.option,
				a = t[n];
			a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a
					.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r
				.status && i.push({
					axisDim: e.axis.dim,
					axisIndex: e.axis.model.componentIndex,
					value: r.value
				})
		})
	}

	function qf(t, e, n, i) {
		if ($f(e) || !t.list.length) return void i({
			type: "hideTip"
		});
		var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
		i({
			type: "showTip",
			escapeConnect: !0,
			x: e[0],
			y: e[1],
			tooltipOption: n.tooltipOption,
			position: n.position,
			dataIndexInside: r.dataIndexInside,
			dataIndex: r.dataIndex,
			seriesIndex: r.seriesIndex,
			dataByCoordSys: t.list
		})
	}

	function jf(t, e, n) {
		var i = n.getZr(),
			r = "axisPointerLastHighlights",
			a = NM(i)[r] || {},
			o = NM(i)[r] = {};
		EM(t, function(t) {
			var e = t.axisPointerModel.option;
			"show" === e.status && EM(e.seriesDataIndices, function(t) {
				var e = t.seriesIndex + " | " + t.dataIndex;
				o[e] = t
			})
		});
		var s = [],
			l = [];
		f(a, function(t, e) {
			!o[e] && l.push(t)
		}), f(o, function(t, e) {
			!a[e] && s.push(t)
		}), l.length && n.dispatchAction({
			type: "downplay",
			escapeConnect: !0,
			batch: l
		}), s.length && n.dispatchAction({
			type: "highlight",
			escapeConnect: !0,
			batch: s
		})
	}

	function Yf(t, e) {
		for (var n = 0; n < (t || []).length; n++) {
			var i = t[n];
			if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
		}
	}

	function Kf(t) {
		var e = t.axis.model,
			n = {},
			i = n.axisDim = t.axis.dim;
		return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n
			.axisId = n[i + "AxisId"] = e.id, n
	}

	function $f(t) {
		return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
	}

	function Jf(t, e, n) {
		if (!Up.node) {
			var i = e.getZr();
			VM(i).records || (VM(i).records = {}), Qf(i, e);
			var r = VM(i).records[t] || (VM(i).records[t] = {});
			r.handler = n
		}
	}

	function Qf(t, e) {
		function n(n, i) {
			t.on(n, function(n) {
				var r = ip(e);
				GM(VM(t).records, function(t) {
					t && i(t, n, r.dispatchAction)
				}), tp(r.pendings, e)
			})
		}
		VM(t).initialized || (VM(t).initialized = !0, n("click", _(np, "click")), n("mousemove", _(np,
			"mousemove")), n("globalout", ep))
	}

	function tp(t, e) {
		var n, i = t.showTip.length,
			r = t.hideTip.length;
		i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
	}

	function ep(t, e, n) {
		t.handler("leave", null, n)
	}

	function np(t, e, n, i) {
		e.handler(t, n, i)
	}

	function ip(t) {
		var e = {
				showTip: [],
				hideTip: []
			},
			n = function(i) {
				var r = e[i.type];
				r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
			};
		return {
			dispatchAction: n,
			pendings: e
		}
	}

	function rp(t, e) {
		if (!Up.node) {
			var n = e.getZr(),
				i = (VM(n).records || {})[t];
			i && (VM(n).records[t] = null)
		}
	}

	function ap() {}

	function op(t, e, n, i) {
		sp(WM(n).lastProp, i) || (WM(n).lastProp = i, e ? ba(n, i, t) : (n.stopAnimation(), n.attr(i)))
	}

	function sp(t, e) {
		if (S(t) && S(e)) {
			var n = !0;
			return f(e, function(e, i) {
				n = n && sp(t[i], e)
			}), !!n
		}
		return t === e
	}

	function lp(t, e) {
		t[e.get("label.show") ? "show" : "hide"]()
	}

	function up(t) {
		return {
			position: t.position.slice(),
			rotation: t.rotation || 0
		}
	}

	function hp(t, e, n) {
		var i = e.get("z"),
			r = e.get("zlevel");
		t && t.traverse(function(t) {
			"group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
		})
	}

	function cp(t) {
		var e, n = t.get("type"),
			i = t.getModel(n + "Style");
		return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e
			.stroke = null), e
	}

	function dp(t, e, n, i, r) {
		var a = n.get("value"),
			o = pp(a, e.axis, e.ecModel, n.get("seriesDataIndices"), {
				precision: n.get("label.precision"),
				formatter: n.get("label.formatter")
			}),
			s = n.getModel("label"),
			l = Hy(s.get("padding") || 0),
			u = s.getFont(),
			h = Sn(o, u),
			c = r.position,
			d = h.width + l[1] + l[3],
			f = h.height + l[0] + l[2],
			p = r.align;
		"right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
		var g = r.verticalAlign;
		"bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), fp(c, d, f, i);
		var m = s.get("backgroundColor");
		m && "auto" !== m || (m = e.get("axisLine.lineStyle.color")), t.label = {
			shape: {
				x: 0,
				y: 0,
				width: d,
				height: f,
				r: s.get("borderRadius")
			},
			position: c.slice(),
			style: {
				text: o,
				textFont: u,
				textFill: s.getTextColor(),
				textPosition: "inside",
				fill: m,
				stroke: s.get("borderColor") || "transparent",
				lineWidth: s.get("borderWidth") || 0,
				shadowBlur: s.get("shadowBlur"),
				shadowColor: s.get("shadowColor"),
				shadowOffsetX: s.get("shadowOffsetX"),
				shadowOffsetY: s.get("shadowOffsetY")
			},
			z2: 10
		}
	}

	function fp(t, e, n, i) {
		var r = i.getWidth(),
			a = i.getHeight();
		t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math
			.max(t[1], 0)
	}

	function pp(t, e, n, i, r) {
		t = e.scale.parse(t);
		var a = e.scale.getLabel(t, {
				precision: r.precision
			}),
			o = r.formatter;
		if (o) {
			var s = {
				value: Fu(e, t),
				seriesData: []
			};
			f(i, function(t) {
				var e = n.getSeriesByIndex(t.seriesIndex),
					i = t.dataIndexInside,
					r = e && e.getDataParams(i);
				r && s.seriesData.push(r)
			}), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s))
		}
		return a
	}

	function gp(t, e, n) {
		var i = fe();
		return ye(i, i, n.rotation), ve(i, i, n.position), Ia([t.dataToCoord(e), (n.labelOffset || 0) + (n
			.labelDirection || 1) * (n.labelMargin || 0)], i)
	}

	function mp(t, e, n, i, r, a) {
		var o = Tb.innerTextLayout(n.rotation, 0, n.labelDirection);
		n.labelMargin = r.get("label.margin"), dp(e, i, r, a, {
			position: gp(i.axis, t, n),
			align: o.textAlign,
			verticalAlign: o.textVerticalAlign
		})
	}

	function vp(t, e, n) {
		return n = n || 0, {
			x1: t[n],
			y1: t[1 - n],
			x2: e[n],
			y2: e[1 - n]
		}
	}

	function yp(t, e, n) {
		return n = n || 0, {
			x: t[n],
			y: t[1 - n],
			width: e[n],
			height: e[1 - n]
		}
	}

	function _p(t, e, n, i, r, a) {
		return {
			cx: t,
			cy: e,
			r0: n,
			r: i,
			startAngle: r,
			endAngle: a,
			clockwise: !0
		}
	}

	function xp(t, e) {
		var n = {};
		return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
	}

	function wp(t) {
		return "x" === t.dim ? 0 : 1
	}

	function bp(t, e, n, i, r) {
		var a = e.axis,
			o = a.dataToCoord(t),
			s = i.getAngleAxis().getExtent()[0];
		s = s / 180 * Math.PI;
		var l, u, h, c = i.getRadiusAxis().getExtent();
		if ("radius" === a.dim) {
			var d = fe();
			ye(d, d, s), ve(d, d, [i.cx, i.cy]), l = Ia([o, -r], d);
			var f = e.getModel("axisLabel").get("rotate") || 0,
				p = Tb.innerTextLayout(s, f * Math.PI / 180, -1);
			u = p.textAlign, h = p.textVerticalAlign
		} else {
			var g = c[1];
			l = i.coordToPoint([g + r, o]);
			var m = i.cx,
				v = i.cy;
			u = Math.abs(l[0] - m) / g < .3 ? "center" : l[0] > m ? "left" : "right", h = Math.abs(l[1] - v) / g <
				.3 ? "middle" : l[1] > v ? "top" : "bottom"
		}
		return {
			position: l,
			align: u,
			verticalAlign: h
		}
	}

	function Sp(t, e) {
		e.update = "updateView", Tl(e, function(e, n) {
			var i = {};
			return n.eachComponent({
				mainType: "geo",
				query: e
			}, function(n) {
				n[t](e.name);
				var r = n.coordinateSystem;
				f(r.regions, function(t) {
					i[t.name] = n.isSelected(t.name) || !1
				})
			}), {
				selected: i,
				name: e.name
			}
		})
	}

	function Mp(t, e, n) {
		var i, r = {},
			a = "toggleSelected" === t;
		return n.eachComponent("legend", function(n) {
			a && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e
			.name));
			var o = n.getData();
			f(o, function(t) {
				var e = t.get("name");
				if ("\n" !== e && "" !== e) {
					var i = n.isSelected(e);
					r[e] = r.hasOwnProperty(e) ? r[e] && i : i
				}
			})
		}), {
			name: e.name,
			selected: r
		}
	}

	function Ip(t, e) {
		var n = Hy(e.get("padding")),
			i = e.getItemStyle(["color", "opacity"]);
		i.fill = e.get("backgroundColor");
		var t = new gy({
			shape: {
				x: t.x - n[3],
				y: t.y - n[0],
				width: t.width + n[1] + n[3],
				height: t.height + n[0] + n[2],
				r: e.get("borderRadius")
			},
			style: i,
			silent: !0,
			z2: -1
		});
		return t
	}

	function Tp(t, e) {
		e.dispatchAction({
			type: "legendToggleSelect",
			name: t
		})
	}

	function Cp(t, e, n, i) {
		var r = n.getZr().storage.getDisplayList()[0];
		r && r.useHoverLayer || n.dispatchAction({
			type: "highlight",
			seriesName: t.name,
			name: e,
			excludeSeriesId: i
		})
	}

	function Dp(t, e, n, i) {
		var r = n.getZr().storage.getDisplayList()[0];
		r && r.useHoverLayer || n.dispatchAction({
			type: "downplay",
			seriesName: t.name,
			name: e,
			excludeSeriesId: i
		})
	}

	function Ap(t, e, n) {
		var i = t.getOrient(),
			r = [1, 1];
		r[i.index] = 0, co(e, n, {
			type: "box",
			ignoreSize: r
		})
	}

	function kp(t) {
		var e = "cubic-bezier(0.23, 1, 0.32, 1)",
			n = "left " + t + "s " + e + ",top " + t + "s " + e;
		return p(hI, function(t) {
			return t + "transition:" + n
		}).join(";")
	}

	function Pp(t) {
		var e = [],
			n = t.get("fontSize"),
			i = t.getTextColor();
		return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 *
			n / 2) + "px"), lI(["decoration", "align"], function(n) {
			var i = t.get(n);
			i && e.push("text-" + n + ":" + i)
		}), e.join(";")
	}

	function Lp(t) {
		var e = [],
			n = t.get("transitionDuration"),
			i = t.get("backgroundColor"),
			r = t.getModel("textStyle"),
			a = t.get("padding");
		return n && e.push(kp(n)), i && (Up.canvasSupported ? e.push("background-Color:" + i) : (e.push(
			"background-Color:#" + Ne(i)), e.push("filter:alpha(opacity=70)"))), lI(["width", "color",
			"radius"],
			function(n) {
				var i = "border-" + n,
					r = uI(i),
					a = t.get(r);
				null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"))
			}), e.push(Pp(r)), null != a && e.push("padding:" + Hy(a).join("px ") + "px"), e.join(";") + ";"
	}

	function Op(t, e) {
		if (Up.wxa) return null;
		var n = document.createElement("div"),
			i = this._zr = e.getZr();
		this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t,
			this._show = !1, this._hideTimeout;
		var r = this;
		n.onmouseenter = function() {
			r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
		}, n.onmousemove = function(e) {
			if (e = e || window.event, !r._enterable) {
				var n = i.handler;
				gi(t, e, !0), n.dispatch("mousemove", e)
			}
		}, n.onmouseleave = function() {
			r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
		}
	}

	function zp(t) {
		for (var e = t.pop(); t.length;) {
			var n = t.pop();
			n && (Pa.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {
				formatter: n
			}), e = new Pa(n, e, e.ecModel))
		}
		return e
	}

	function Rp(t, e) {
		return t.dispatchAction || y(e.dispatchAction, e)
	}

	function Ep(t, e, n, i, r, a, o) {
		var s = Np(n),
			l = s.width,
			u = s.height;
		return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e +=
			o), [t, e]
	}

	function Bp(t, e, n, i, r) {
		var a = Np(n),
			o = a.width,
			s = a.height;
		return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t,
			e]
	}

	function Np(t) {
		var e = t.clientWidth,
			n = t.clientHeight;
		if (document.defaultView && document.defaultView.getComputedStyle) {
			var i = document.defaultView.getComputedStyle(t);
			i && (e += parseInt(i.paddingLeft, 10) + parseInt(i.paddingRight, 10) + parseInt(i.borderLeftWidth,
				10) + parseInt(i.borderRightWidth, 10), n += parseInt(i.paddingTop, 10) + parseInt(i
					.paddingBottom, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))
		}
		return {
			width: e,
			height: n
		}
	}

	function Fp(t, e, n) {
		var i = n[0],
			r = n[1],
			a = 5,
			o = 0,
			s = 0,
			l = e.width,
			u = e.height;
		switch (t) {
			case "inside":
				o = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;
				break;
			case "top":
				o = e.x + l / 2 - i / 2, s = e.y - r - a;
				break;
			case "bottom":
				o = e.x + l / 2 - i / 2, s = e.y + u + a;
				break;
			case "left":
				o = e.x - i - a, s = e.y + u / 2 - r / 2;
				break;
			case "right":
				o = e.x + l + a, s = e.y + u / 2 - r / 2
		}
		return [o, s]
	}

	function Vp(t) {
		return "center" === t || "middle" === t
	}
	var Gp = 2311,
		Hp = function() {
			return Gp++
		},
		Wp = {};
	Wp = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
		browser: {},
		os: {},
		node: !1,
		wxa: !0,
		canvasSupported: !0,
		svgSupported: !1,
		touchEventsSupported: !0
	} : "undefined" == typeof document && "undefined" != typeof self ? {
		browser: {},
		os: {},
		node: !1,
		worker: !0,
		canvasSupported: !0
	} : "undefined" == typeof navigator ? {
		browser: {},
		os: {},
		node: !0,
		worker: !1,
		canvasSupported: !0,
		svgSupported: !0
	} : e(navigator.userAgent);
	var Up = Wp,
		Xp = {
			"[object Function]": 1,
			"[object RegExp]": 1,
			"[object Date]": 1,
			"[object Error]": 1,
			"[object CanvasGradient]": 1,
			"[object CanvasPattern]": 1,
			"[object Image]": 1,
			"[object Canvas]": 1
		},
		Zp = {
			"[object Int8Array]": 1,
			"[object Uint8Array]": 1,
			"[object Uint8ClampedArray]": 1,
			"[object Int16Array]": 1,
			"[object Uint16Array]": 1,
			"[object Int32Array]": 1,
			"[object Uint32Array]": 1,
			"[object Float32Array]": 1,
			"[object Float64Array]": 1
		},
		qp = Object.prototype.toString,
		jp = Array.prototype,
		Yp = jp.forEach,
		Kp = jp.filter,
		$p = jp.slice,
		Jp = jp.map,
		Qp = jp.reduce,
		tg = {},
		eg = function() {
			return tg.createCanvas()
		};
	tg.createCanvas = function() {
		return document.createElement("canvas")
	};
	var ng, ig = "__ec_primitive__";
	B.prototype = {
		constructor: B,
		get: function(t) {
			return this.hasOwnProperty(t) ? this[t] : null
		},
		set: function(t, e) {
			return this[t] = e
		},
		each: function(t, e) {
			void 0 !== e && (t = y(t, e));
			for (var n in this) this.hasOwnProperty(n) && t(this[n], n)
		},
		removeKey: function(t) {
			delete this[t]
		}
	};
	var rg = (Object.freeze || Object)({
			$override: n,
			clone: i,
			merge: r,
			mergeAll: a,
			extend: o,
			defaults: s,
			createCanvas: eg,
			getContext: l,
			indexOf: u,
			inherits: h,
			mixin: c,
			isArrayLike: d,
			each: f,
			map: p,
			reduce: g,
			filter: m,
			find: v,
			bind: y,
			curry: _,
			isArray: x,
			isFunction: w,
			isString: b,
			isObject: S,
			isBuiltInObject: M,
			isTypedArray: I,
			isDom: T,
			eqNaN: C,
			retrieve: D,
			retrieve2: A,
			retrieve3: k,
			slice: P,
			normalizeCssArray: L,
			assert: O,
			trim: z,
			setAsPrimitive: R,
			isPrimitive: E,
			createHashMap: N,
			concatArray: F,
			noop: V
		}),
		ag = "undefined" == typeof Float32Array ? Array : Float32Array,
		og = j,
		sg = Y,
		lg = ee,
		ug = ne,
		hg = (Object.freeze || Object)({
			create: G,
			copy: H,
			clone: W,
			set: U,
			add: X,
			scaleAndAdd: Z,
			sub: q,
			len: j,
			length: og,
			lenSquare: Y,
			lengthSquare: sg,
			mul: K,
			div: $,
			dot: J,
			scale: Q,
			normalize: te,
			distance: ee,
			dist: lg,
			distanceSquare: ne,
			distSquare: ug,
			negate: ie,
			lerp: re,
			applyTransform: ae,
			min: oe,
			max: se
		});
	le.prototype = {
		constructor: le,
		_dragStart: function(t) {
			var e = t.target;
			e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t
				.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event))
		},
		_drag: function(t) {
			var e = this._draggingTarget;
			if (e) {
				var n = t.offsetX,
					i = t.offsetY,
					r = n - this._x,
					a = i - this._y;
				this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t
					.event);
				var o = this.findHover(n, i, e).target,
					s = this._dropTarget;
				this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t),
					"dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t),
					"dragenter", t.event))
			}
		},
		_dragEnd: function(t) {
			var e = this._draggingTarget;
			e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this
				._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this
				._draggingTarget = null, this._dropTarget = null
		}
	};
	var cg = Array.prototype.slice,
		dg = function() {
			this._$handlers = {}
		};
	dg.prototype = {
		constructor: dg,
		one: function(t, e, n) {
			var i = this._$handlers;
			if (!e || !t) return this;
			i[t] || (i[t] = []);
			for (var r = 0; r < i[t].length; r++)
				if (i[t][r].h === e) return this;
			return i[t].push({
				h: e,
				one: !0,
				ctx: n || this
			}), this
		},
		on: function(t, e, n) {
			var i = this._$handlers;
			if (!e || !t) return this;
			i[t] || (i[t] = []);
			for (var r = 0; r < i[t].length; r++)
				if (i[t][r].h === e) return this;
			return i[t].push({
				h: e,
				one: !1,
				ctx: n || this
			}), this
		},
		isSilent: function(t) {
			var e = this._$handlers;
			return e[t] && e[t].length
		},
		off: function(t, e) {
			var n = this._$handlers;
			if (!t) return this._$handlers = {}, this;
			if (e) {
				if (n[t]) {
					for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h != e && i.push(n[t][r]);
					n[t] = i
				}
				n[t] && 0 === n[t].length && delete n[t]
			} else delete n[t];
			return this
		},
		trigger: function(t) {
			if (this._$handlers[t]) {
				var e = arguments,
					n = e.length;
				n > 3 && (e = cg.call(e, 1));
				for (var i = this._$handlers[t], r = i.length, a = 0; r > a;) {
					switch (n) {
						case 1:
							i[a].h.call(i[a].ctx);
							break;
						case 2:
							i[a].h.call(i[a].ctx, e[1]);
							break;
						case 3:
							i[a].h.call(i[a].ctx, e[1], e[2]);
							break;
						default:
							i[a].h.apply(i[a].ctx, e)
					}
					i[a].one ? (i.splice(a, 1), r--) : a++
				}
			}
			return this
		},
		triggerWithContext: function(t) {
			if (this._$handlers[t]) {
				var e = arguments,
					n = e.length;
				n > 4 && (e = cg.call(e, 1, e.length - 1));
				for (var i = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; a > o;) {
					switch (n) {
						case 1:
							r[o].h.call(i);
							break;
						case 2:
							r[o].h.call(i, e[1]);
							break;
						case 3:
							r[o].h.call(i, e[1], e[2]);
							break;
						default:
							r[o].h.apply(i, e)
					}
					r[o].one ? (r.splice(o, 1), a--) : o++
				}
			}
			return this
		}
	};
	var fg = "silent";
	ce.prototype.dispose = function() {};
	var pg = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
		gg = function(t, e, n, i) {
			dg.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new ce, this.proxy =
				null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this
				.setHandlerProxy(n)
		};
	gg.prototype = {
		constructor: gg,
		setHandlerProxy: function(t) {
			this.proxy && this.proxy.dispose(), t && (f(pg, function(e) {
				t.on && t.on(e, this[e], this)
			}, this), t.handler = this), this.proxy = t
		},
		mousemove: function(t) {
			var e = t.zrX,
				n = t.zrY,
				i = this._hovered,
				r = i.target;
			r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
			var a = this._hovered = this.findHover(e, n),
				o = a.target,
				s = this.proxy;
			s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i,
					"mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this
				.dispatchToElement(a, "mouseover", t)
		},
		mouseout: function(t) {
			this.dispatchToElement(this._hovered, "mouseout", t);
			var e, n = t.toElement || t.relatedTarget;
			do n = n && n.parentNode; while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
			!e && this.trigger("globalout", {
				event: t
			})
		},
		resize: function() {
			this._hovered = {}
		},
		dispatch: function(t, e) {
			var n = this[t];
			n && n.call(this, e)
		},
		dispose: function() {
			this.proxy.dispose(), this.storage = this.proxy = this.painter = null
		},
		setCursorStyle: function(t) {
			var e = this.proxy;
			e.setCursor && e.setCursor(t)
		},
		dispatchToElement: function(t, e, n) {
			t = t || {};
			var i = t.target;
			if (!i || !i.silent) {
				for (var r = "on" + e, a = he(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i
						.trigger(e, a), i = i.parent, !a.cancelBubble););
				a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(
					t) {
					"function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
				}))
			}
		},
		findHover: function(t, e, n) {
			for (var i = this.storage.getDisplayList(), r = {
					x: t,
					y: e
				}, a = i.length - 1; a >= 0; a--) {
				var o;
				if (i[a] !== n && !i[a].ignore && (o = de(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[
						a]), o !== fg)) {
					r.target = i[a];
					break
				}
			}
			return r
		}
	}, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
		gg.prototype[t] = function(e) {
			var n = this.findHover(e.zrX, e.zrY),
				i = n.target;
			if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
			else if ("mouseup" === t) this._upEl = i;
			else if ("click" === t) {
				if (this._downEl !== this._upEl || !this._downPoint || lg(this._downPoint, [e.zrX, e
						.zrY]) > 4) return;
				this._downPoint = null
			}
			this.dispatchToElement(n, t, e)
		}
	}), c(gg, dg), c(gg, le);
	var mg = "undefined" == typeof Float32Array ? Array : Float32Array,
		vg = (Object.freeze || Object)({
			create: fe,
			identity: pe,
			copy: ge,
			mul: me,
			translate: ve,
			rotate: ye,
			scale: _e,
			invert: xe,
			clone: we
		}),
		yg = pe,
		_g = 5e-5,
		xg = function(t) {
			t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t
				.scale || (this.scale = [1, 1]), this.origin = this.origin || null
		},
		wg = xg.prototype;
	wg.transform = null, wg.needLocalTransform = function() {
		return be(this.rotation) || be(this.position[0]) || be(this.position[1]) || be(this.scale[0] - 1) || be(
			this.scale[1] - 1)
	}, wg.updateTransform = function() {
		var t = this.parent,
			e = t && t.transform,
			n = this.needLocalTransform(),
			i = this.transform;
		return n || e ? (i = i || fe(), n ? this.getLocalTransform(i) : yg(i), e && (n ? me(i, t.transform, i) :
				ge(i, t.transform)), this.transform = i, this.invTransform = this.invTransform || fe(),
			void xe(this.invTransform, i)) : void(i && yg(i))
	}, wg.getLocalTransform = function(t) {
		return xg.getLocalTransform(this, t)
	}, wg.setTransform = function(t) {
		var e = this.transform,
			n = t.dpr || 1;
		e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0,
			n, 0, 0)
	}, wg.restoreTransform = function(t) {
		var e = t.dpr || 1;
		t.setTransform(e, 0, 0, e, 0, 0)
	};
	var bg = [];
	wg.decomposeTransform = function() {
		if (this.transform) {
			var t = this.parent,
				e = this.transform;
			t && t.transform && (me(bg, t.invTransform, e), e = bg);
			var n = e[0] * e[0] + e[1] * e[1],
				i = e[2] * e[2] + e[3] * e[3],
				r = this.position,
				a = this.scale;
			be(n - 1) && (n = Math.sqrt(n)), be(i - 1) && (i = Math.sqrt(i)), e[0] < 0 && (n = -n), e[3] < 0 &&
				(i = -i), r[0] = e[4], r[1] = e[5], a[0] = n, a[1] = i, this.rotation = Math.atan2(-e[1] / i, e[
					0] / n)
		}
	}, wg.getGlobalScale = function() {
		var t = this.transform;
		if (!t) return [1, 1];
		var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
			n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
		return t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), [e, n]
	}, wg.transformCoordToLocal = function(t, e) {
		var n = [t, e],
			i = this.invTransform;
		return i && ae(n, n, i), n
	}, wg.transformCoordToGlobal = function(t, e) {
		var n = [t, e],
			i = this.transform;
		return i && ae(n, n, i), n
	}, xg.getLocalTransform = function(t, e) {
		e = e || [], yg(e);
		var n = t.origin,
			i = t.scale || [1, 1],
			r = t.rotation || 0,
			a = t.position || [0, 0];
		return n && (e[4] -= n[0], e[5] -= n[1]), _e(e, e, i), r && ye(e, e, r), n && (e[4] += n[0], e[5] += n[
			1]), e[4] += a[0], e[5] += a[1], e
	};
	var Sg = {
		linear: function(t) {
			return t
		},
		quadraticIn: function(t) {
			return t * t
		},
		quadraticOut: function(t) {
			return t * (2 - t)
		},
		quadraticInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
		},
		cubicIn: function(t) {
			return t * t * t
		},
		cubicOut: function(t) {
			return --t * t * t + 1
		},
		cubicInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
		},
		quarticIn: function(t) {
			return t * t * t * t
		},
		quarticOut: function(t) {
			return 1 - --t * t * t * t
		},
		quarticInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
		},
		quinticIn: function(t) {
			return t * t * t * t * t
		},
		quinticOut: function(t) {
			return --t * t * t * t * t + 1
		},
		quinticInOut: function(t) {
			return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
		},
		sinusoidalIn: function(t) {
			return 1 - Math.cos(t * Math.PI / 2)
		},
		sinusoidalOut: function(t) {
			return Math.sin(t * Math.PI / 2)
		},
		sinusoidalInOut: function(t) {
			return .5 * (1 - Math.cos(Math.PI * t))
		},
		exponentialIn: function(t) {
			return 0 === t ? 0 : Math.pow(1024, t - 1)
		},
		exponentialOut: function(t) {
			return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
		},
		exponentialInOut: function(t) {
			return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(
				2, -10 * (t - 1)) + 2)
		},
		circularIn: function(t) {
			return 1 - Math.sqrt(1 - t * t)
		},
		circularOut: function(t) {
			return Math.sqrt(1 - --t * t)
		},
		circularInOut: function(t) {
			return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		},
		elasticIn: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 /
				n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI /
					i)))
		},
		elasticOut: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 /
				n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
		},
		elasticInOut: function(t) {
			var e, n = .1,
				i = .4;
			return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 /
				n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (
					t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) *
					Math.PI / i) * .5 + 1)
		},
		backIn: function(t) {
			var e = 1.70158;
			return t * t * ((e + 1) * t - e)
		},
		backOut: function(t) {
			var e = 1.70158;
			return --t * t * ((e + 1) * t + e) + 1
		},
		backInOut: function(t) {
			var e = 2.5949095;
			return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) +
				2)
		},
		bounceIn: function(t) {
			return 1 - Sg.bounceOut(1 - t)
		},
		bounceOut: function(t) {
			return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 :
				2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) *
				t + .984375
		},
		bounceInOut: function(t) {
			return .5 > t ? .5 * Sg.bounceIn(2 * t) : .5 * Sg.bounceOut(2 * t - 1) + .5
		}
	};
	Se.prototype = {
		constructor: Se,
		step: function(t, e) {
			if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this
				._paused) return void(this._pausedTime += e);
			var n = (t - this._startTime - this._pausedTime) / this._life;
			if (!(0 > n)) {
				n = Math.min(n, 1);
				var i = this.easing,
					r = "string" == typeof i ? Sg[i] : i,
					a = "function" == typeof r ? r(n) : n;
				return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this
					._needsRemove = !0, "destroy") : null
			}
		},
		restart: function(t) {
			var e = (t - this._startTime - this._pausedTime) % this._life;
			this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
		},
		fire: function(t, e) {
			t = "on" + t, this[t] && this[t](this._target, e)
		},
		pause: function() {
			this._paused = !0
		},
		resume: function() {
			this._paused = !1
		}
	};
	var Mg = function() {
			this.head = null, this.tail = null, this._len = 0
		},
		Ig = Mg.prototype;
	Ig.insert = function(t) {
		var e = new Tg(t);
		return this.insertEntry(e), e
	}, Ig.insertEntry = function(t) {
		this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this
			.tail = t, this._len++
	}, Ig.remove = function(t) {
		var e = t.prev,
			n = t.next;
		e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
	}, Ig.len = function() {
		return this._len
	}, Ig.clear = function() {
		this.head = this.tail = null, this._len = 0
	};
	var Tg = function(t) {
			this.value = t, this.next, this.prev
		},
		Cg = function(t) {
			this._list = new Mg, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
		},
		Dg = Cg.prototype;
	Dg.put = function(t, e) {
		var n = this._list,
			i = this._map,
			r = null;
		if (null == i[t]) {
			var a = n.len(),
				o = this._lastRemovedEntry;
			if (a >= this._maxSize && a > 0) {
				var s = n.head;
				n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
			}
			o ? o.value = e : o = new Tg(e), o.key = t, n.insertEntry(o), i[t] = o
		}
		return r
	}, Dg.get = function(t) {
		var e = this._map[t],
			n = this._list;
		return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
	}, Dg.clear = function() {
		this._list.clear(), this._map = {}
	};
	var Ag = {
			transparent: [0, 0, 0, 0],
			aliceblue: [240, 248, 255, 1],
			antiquewhite: [250, 235, 215, 1],
			aqua: [0, 255, 255, 1],
			aquamarine: [127, 255, 212, 1],
			azure: [240, 255, 255, 1],
			beige: [245, 245, 220, 1],
			bisque: [255, 228, 196, 1],
			black: [0, 0, 0, 1],
			blanchedalmond: [255, 235, 205, 1],
			blue: [0, 0, 255, 1],
			blueviolet: [138, 43, 226, 1],
			brown: [165, 42, 42, 1],
			burlywood: [222, 184, 135, 1],
			cadetblue: [95, 158, 160, 1],
			chartreuse: [127, 255, 0, 1],
			chocolate: [210, 105, 30, 1],
			coral: [255, 127, 80, 1],
			cornflowerblue: [100, 149, 237, 1],
			cornsilk: [255, 248, 220, 1],
			crimson: [220, 20, 60, 1],
			cyan: [0, 255, 255, 1],
			darkblue: [0, 0, 139, 1],
			darkcyan: [0, 139, 139, 1],
			darkgoldenrod: [184, 134, 11, 1],
			darkgray: [169, 169, 169, 1],
			darkgreen: [0, 100, 0, 1],
			darkgrey: [169, 169, 169, 1],
			darkkhaki: [189, 183, 107, 1],
			darkmagenta: [139, 0, 139, 1],
			darkolivegreen: [85, 107, 47, 1],
			darkorange: [255, 140, 0, 1],
			darkorchid: [153, 50, 204, 1],
			darkred: [139, 0, 0, 1],
			darksalmon: [233, 150, 122, 1],
			darkseagreen: [143, 188, 143, 1],
			darkslateblue: [72, 61, 139, 1],
			darkslategray: [47, 79, 79, 1],
			darkslategrey: [47, 79, 79, 1],
			darkturquoise: [0, 206, 209, 1],
			darkviolet: [148, 0, 211, 1],
			deeppink: [255, 20, 147, 1],
			deepskyblue: [0, 191, 255, 1],
			dimgray: [105, 105, 105, 1],
			dimgrey: [105, 105, 105, 1],
			dodgerblue: [30, 144, 255, 1],
			firebrick: [178, 34, 34, 1],
			floralwhite: [255, 250, 240, 1],
			forestgreen: [34, 139, 34, 1],
			fuchsia: [255, 0, 255, 1],
			gainsboro: [220, 220, 220, 1],
			ghostwhite: [248, 248, 255, 1],
			gold: [255, 215, 0, 1],
			goldenrod: [218, 165, 32, 1],
			gray: [128, 128, 128, 1],
			green: [0, 128, 0, 1],
			greenyellow: [173, 255, 47, 1],
			grey: [128, 128, 128, 1],
			honeydew: [240, 255, 240, 1],
			hotpink: [255, 105, 180, 1],
			indianred: [205, 92, 92, 1],
			indigo: [75, 0, 130, 1],
			ivory: [255, 255, 240, 1],
			khaki: [240, 230, 140, 1],
			lavender: [230, 230, 250, 1],
			lavenderblush: [255, 240, 245, 1],
			lawngreen: [124, 252, 0, 1],
			lemonchiffon: [255, 250, 205, 1],
			lightblue: [173, 216, 230, 1],
			lightcoral: [240, 128, 128, 1],
			lightcyan: [224, 255, 255, 1],
			lightgoldenrodyellow: [250, 250, 210, 1],
			lightgray: [211, 211, 211, 1],
			lightgreen: [144, 238, 144, 1],
			lightgrey: [211, 211, 211, 1],
			lightpink: [255, 182, 193, 1],
			lightsalmon: [255, 160, 122, 1],
			lightseagreen: [32, 178, 170, 1],
			lightskyblue: [135, 206, 250, 1],
			lightslategray: [119, 136, 153, 1],
			lightslategrey: [119, 136, 153, 1],
			lightsteelblue: [176, 196, 222, 1],
			lightyellow: [255, 255, 224, 1],
			lime: [0, 255, 0, 1],
			limegreen: [50, 205, 50, 1],
			linen: [250, 240, 230, 1],
			magenta: [255, 0, 255, 1],
			maroon: [128, 0, 0, 1],
			mediumaquamarine: [102, 205, 170, 1],
			mediumblue: [0, 0, 205, 1],
			mediumorchid: [186, 85, 211, 1],
			mediumpurple: [147, 112, 219, 1],
			mediumseagreen: [60, 179, 113, 1],
			mediumslateblue: [123, 104, 238, 1],
			mediumspringgreen: [0, 250, 154, 1],
			mediumturquoise: [72, 209, 204, 1],
			mediumvioletred: [199, 21, 133, 1],
			midnightblue: [25, 25, 112, 1],
			mintcream: [245, 255, 250, 1],
			mistyrose: [255, 228, 225, 1],
			moccasin: [255, 228, 181, 1],
			navajowhite: [255, 222, 173, 1],
			navy: [0, 0, 128, 1],
			oldlace: [253, 245, 230, 1],
			olive: [128, 128, 0, 1],
			olivedrab: [107, 142, 35, 1],
			orange: [255, 165, 0, 1],
			orangered: [255, 69, 0, 1],
			orchid: [218, 112, 214, 1],
			palegoldenrod: [238, 232, 170, 1],
			palegreen: [152, 251, 152, 1],
			paleturquoise: [175, 238, 238, 1],
			palevioletred: [219, 112, 147, 1],
			papayawhip: [255, 239, 213, 1],
			peachpuff: [255, 218, 185, 1],
			peru: [205, 133, 63, 1],
			pink: [255, 192, 203, 1],
			plum: [221, 160, 221, 1],
			powderblue: [176, 224, 230, 1],
			purple: [128, 0, 128, 1],
			red: [255, 0, 0, 1],
			rosybrown: [188, 143, 143, 1],
			royalblue: [65, 105, 225, 1],
			saddlebrown: [139, 69, 19, 1],
			salmon: [250, 128, 114, 1],
			sandybrown: [244, 164, 96, 1],
			seagreen: [46, 139, 87, 1],
			seashell: [255, 245, 238, 1],
			sienna: [160, 82, 45, 1],
			silver: [192, 192, 192, 1],
			skyblue: [135, 206, 235, 1],
			slateblue: [106, 90, 205, 1],
			slategray: [112, 128, 144, 1],
			slategrey: [112, 128, 144, 1],
			snow: [255, 250, 250, 1],
			springgreen: [0, 255, 127, 1],
			steelblue: [70, 130, 180, 1],
			tan: [210, 180, 140, 1],
			teal: [0, 128, 128, 1],
			thistle: [216, 191, 216, 1],
			tomato: [255, 99, 71, 1],
			turquoise: [64, 224, 208, 1],
			violet: [238, 130, 238, 1],
			wheat: [245, 222, 179, 1],
			white: [255, 255, 255, 1],
			whitesmoke: [245, 245, 245, 1],
			yellow: [255, 255, 0, 1],
			yellowgreen: [154, 205, 50, 1]
		},
		kg = new Cg(20),
		Pg = null,
		Lg = Fe,
		Og = Ve,
		zg = (Object.freeze || Object)({
			parse: ze,
			lift: Be,
			toHex: Ne,
			fastLerp: Fe,
			fastMapToColor: Lg,
			lerp: Ve,
			mapToColor: Og,
			modifyHSL: Ge,
			modifyAlpha: He,
			stringify: We
		}),
		Rg = Array.prototype.slice,
		Eg = function(t, e, n, i) {
			this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Ue, this._setter = i ||
				Xe, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this
				._clipList = []
		};
	Eg.prototype = {
		when: function(t, e) {
			var n = this._tracks;
			for (var i in e)
				if (e.hasOwnProperty(i)) {
					if (!n[i]) {
						n[i] = [];
						var r = this._getter(this._target, i);
						if (null == r) continue;
						0 !== t && n[i].push({
							time: 0,
							value: Qe(r)
						})
					}
					n[i].push({
						time: t,
						value: e[i]
					})
				} return this
		},
		during: function(t) {
			return this._onframeList.push(t), this
		},
		pause: function() {
			for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
			this._paused = !0
		},
		resume: function() {
			for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
			this._paused = !1
		},
		isPaused: function() {
			return !!this._paused
		},
		_doneCallback: function() {
			this._tracks = {}, this._clipList.length = 0;
			for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this)
		},
		start: function(t, e) {
			var n, i = this,
				r = 0,
				a = function() {
					r--, r || i._doneCallback()
				};
			for (var o in this._tracks)
				if (this._tracks.hasOwnProperty(o)) {
					var s = nn(this, t, a, this._tracks[o], o, e);
					s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
				} if (n) {
				var l = n.onframe;
				n.onframe = function(t, e) {
					l(t, e);
					for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
				}
			}
			return r || this._doneCallback(), this
		},
		stop: function(t) {
			for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
				var r = e[i];
				t && r.onframe(this._target, 1), n && n.removeClip(r)
			}
			e.length = 0
		},
		delay: function(t) {
			return this._delay = t, this
		},
		done: function(t) {
			return t && this._doneList.push(t), this
		},
		getClips: function() {
			return this._clipList
		}
	};
	var Bg = 1;
	"undefined" != typeof window && (Bg = Math.max(window.devicePixelRatio || 1, 1));
	var Ng = 0,
		Fg = Bg,
		Vg = function() {};
	1 === Ng ? Vg = function() {
		for (var t in arguments) throw new Error(arguments[t])
	} : Ng > 1 && (Vg = function() {
		for (var t in arguments) console.log(arguments[t])
	});
	var Gg = Vg,
		Hg = function() {
			this.animators = []
		};
	Hg.prototype = {
		constructor: Hg,
		animate: function(t, e) {
			var n, i = !1,
				r = this,
				a = this.__zr;
			if (t) {
				var o = t.split("."),
					s = r;
				i = "shape" === o[0];
				for (var l = 0, h = o.length; h > l; l++) s && (s = s[o[l]]);
				s && (n = s)
			} else n = r;
			if (!n) return void Gg('Property "' + t + '" is not existed in element ' + r.id);
			var c = r.animators,
				d = new Eg(n, e);
			return d.during(function() {
				r.dirty(i)
			}).done(function() {
				c.splice(u(c, d), 1)
			}), c.push(d), a && a.animation.addAnimator(d), d
		},
		stopAnimation: function(t) {
			for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
			return e.length = 0, this
		},
		animateTo: function(t, e, n, i, r, a) {
			function o() {
				l--, l || r && r()
			}
			b(n) ? (r = i, i = n, n = 0) : w(i) ? (r = i, i = "linear", n = 0) : w(n) ? (r = n, n = 0) : w(
				e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("",
				this, t, e, n);
			var s = this.animators.slice(),
				l = s.length;
			l || r && r();
			for (var u = 0; u < s.length; u++) s[u].done(o).start(i, a)
		},
		_animateToShallow: function(t, e, n, i, r) {
			var a = {},
				o = 0;
			for (var s in n)
				if (n.hasOwnProperty(s))
					if (null != e[s]) S(n[s]) && !d(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[
						s], n[s], i, r) : (a[s] = n[s], o++);
					else if (null != n[s])
				if (t) {
					var l = {};
					l[t] = {}, l[t][s] = n[s], this.attr(l)
				} else this.attr(s, n[s]);
			return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0), this
		}
	};
	var Wg = function(t) {
		xg.call(this, t), dg.call(this, t), Hg.call(this, t), this.id = t.id || Hp()
	};
	Wg.prototype = {
		type: "element",
		name: "",
		__zr: null,
		ignore: !1,
		clipPath: null,
		isGroup: !1,
		drift: function(t, e) {
			switch (this.draggable) {
				case "horizontal":
					e = 0;
					break;
				case "vertical":
					t = 0
			}
			var n = this.transform;
			n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(),
				this.dirty(!1)
		},
		beforeUpdate: function() {},
		afterUpdate: function() {},
		update: function() {
			this.updateTransform()
		},
		traverse: function() {},
		attrKV: function(t, e) {
			if ("position" === t || "scale" === t || "origin" === t) {
				if (e) {
					var n = this[t];
					n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
				}
			} else this[t] = e
		},
		hide: function() {
			this.ignore = !0, this.__zr && this.__zr.refresh()
		},
		show: function() {
			this.ignore = !1, this.__zr && this.__zr.refresh()
		},
		attr: function(t, e) {
			if ("string" == typeof t) this.attrKV(t, e);
			else if (S(t))
				for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
			return this.dirty(!1), this
		},
		setClipPath: function(t) {
			var e = this.__zr;
			e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this
				.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
		},
		removeClipPath: function() {
			var t = this.clipPath;
			t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this
				.clipPath = null, this.dirty(!1))
		},
		addSelfToZr: function(t) {
			this.__zr = t;
			var e = this.animators;
			if (e)
				for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
			this.clipPath && this.clipPath.addSelfToZr(t)
		},
		removeSelfFromZr: function(t) {
			this.__zr = null;
			var e = this.animators;
			if (e)
				for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
			this.clipPath && this.clipPath.removeSelfFromZr(t)
		}
	}, c(Wg, Hg), c(Wg, xg), c(Wg, dg);
	var Ug = ae,
		Xg = Math.min,
		Zg = Math.max;
	rn.prototype = {
		constructor: rn,
		union: function(t) {
			var e = Xg(t.x, this.x),
				n = Xg(t.y, this.y);
			this.width = Zg(t.x + t.width, this.x + this.width) - e, this.height = Zg(t.y + t.height, this
				.y + this.height) - n, this.x = e, this.y = n
		},
		applyTransform: function() {
			var t = [],
				e = [],
				n = [],
				i = [];
			return function(r) {
				if (r) {
					t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[
						1] = n[1] = this.y + this.height, Ug(t, t, r), Ug(e, e, r), Ug(n, n, r), Ug(i,
							i, r), this.x = Xg(t[0], e[0], n[0], i[0]), this.y = Xg(t[1], e[1], n[1], i[
							1]);
					var a = Zg(t[0], e[0], n[0], i[0]),
						o = Zg(t[1], e[1], n[1], i[1]);
					this.width = a - this.x, this.height = o - this.y
				}
			}
		}(),
		calculateTransform: function(t) {
			var e = this,
				n = t.width / e.width,
				i = t.height / e.height,
				r = fe();
			return ve(r, r, [-e.x, -e.y]), _e(r, r, [n, i]), ve(r, r, [t.x, t.y]), r
		},
		intersect: function(t) {
			if (!t) return !1;
			t instanceof rn || (t = rn.create(t));
			var e = this,
				n = e.x,
				i = e.x + e.width,
				r = e.y,
				a = e.y + e.height,
				o = t.x,
				s = t.x + t.width,
				l = t.y,
				u = t.y + t.height;
			return !(o > i || n > s || l > a || r > u)
		},
		contain: function(t, e) {
			var n = this;
			return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
		},
		clone: function() {
			return new rn(this.x, this.y, this.width, this.height)
		},
		copy: function(t) {
			this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
		},
		plain: function() {
			return {
				x: this.x,
				y: this.y,
				width: this.width,
				height: this.height
			}
		}
	}, rn.create = function(t) {
		return new rn(t.x, t.y, t.width, t.height)
	};
	var qg = function(t) {
		t = t || {}, Wg.call(this, t);
		for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
		this._children = [], this.__storage = null, this.__dirty = !0
	};
	qg.prototype = {
		constructor: qg,
		isGroup: !0,
		type: "group",
		silent: !1,
		children: function() {
			return this._children.slice()
		},
		childAt: function(t) {
			return this._children[t]
		},
		childOfName: function(t) {
			for (var e = this._children, n = 0; n < e.length; n++)
				if (e[n].name === t) return e[n]
		},
		childCount: function() {
			return this._children.length
		},
		add: function(t) {
			return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
		},
		addBefore: function(t, e) {
			if (t && t !== this && t.parent !== this && e && e.parent === this) {
				var n = this._children,
					i = n.indexOf(e);
				i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
			}
			return this
		},
		_doAdd: function(t) {
			t.parent && t.parent.remove(t), t.parent = this;
			var e = this.__storage,
				n = this.__zr;
			e && e !== t.__storage && (e.addToStorage(t), t instanceof qg && t.addChildrenToStorage(e)),
				n && n.refresh()
		},
		remove: function(t) {
			var e = this.__zr,
				n = this.__storage,
				i = this._children,
				r = u(i, t);
			return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t),
				t instanceof qg && t.delChildrenFromStorage(n)), e && e.refresh(), this)
		},
		removeAll: function() {
			var t, e, n = this._children,
				i = this.__storage;
			for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof qg && t
				.delChildrenFromStorage(i)), t.parent = null;
			return n.length = 0, this
		},
		eachChild: function(t, e) {
			for (var n = this._children, i = 0; i < n.length; i++) {
				var r = n[i];
				t.call(e, r, i)
			}
			return this
		},
		traverse: function(t, e) {
			for (var n = 0; n < this._children.length; n++) {
				var i = this._children[n];
				t.call(e, i), "group" === i.type && i.traverse(t, e)
			}
			return this
		},
		addChildrenToStorage: function(t) {
			for (var e = 0; e < this._children.length; e++) {
				var n = this._children[e];
				t.addToStorage(n), n instanceof qg && n.addChildrenToStorage(t)
			}
		},
		delChildrenFromStorage: function(t) {
			for (var e = 0; e < this._children.length; e++) {
				var n = this._children[e];
				t.delFromStorage(n), n instanceof qg && n.delChildrenFromStorage(t)
			}
		},
		dirty: function() {
			return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
		},
		getBoundingRect: function(t) {
			for (var e = null, n = new rn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i
				.length; a++) {
				var o = i[a];
				if (!o.ignore && !o.invisible) {
					var s = o.getBoundingRect(),
						l = o.getLocalTransform(r);
					l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s
						.clone(), e.union(s))
				}
			}
			return e || n
		}
	}, h(qg, Wg);
	var jg = 32,
		Yg = 7,
		Kg = function() {
			this._roots = [], this._displayList = [], this._displayListLen = 0
		};
	Kg.prototype = {
		constructor: Kg,
		traverse: function(t, e) {
			for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
		},
		getDisplayList: function(t, e) {
			return e = e || !1, t && this.updateDisplayList(e), this._displayList
		},
		updateDisplayList: function(t) {
			this._displayListLen = 0;
			for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this
				._updateAndAddDisplayable(e[i], null, t);
			n.length = this._displayListLen, Up.canvasSupported && dn(n, fn)
		},
		_updateAndAddDisplayable: function(t, e, n) {
			if (!t.ignore || n) {
				t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
				var i = t.clipPath;
				if (i) {
					e = e ? e.slice() : [];
					for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r
						.clipPath
				}
				if (t.isGroup) {
					for (var o = t._children, s = 0; s < o.length; s++) {
						var l = o[s];
						t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
					}
					t.__dirty = !1
				} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
			}
		},
		addRoot: function(t) {
			t.__storage !== this && (t instanceof qg && t.addChildrenToStorage(this), this.addToStorage(t),
				this._roots.push(t))
		},
		delRoot: function(t) {
			if (null == t) {
				for (var e = 0; e < this._roots.length; e++) {
					var n = this._roots[e];
					n instanceof qg && n.delChildrenFromStorage(this)
				}
				return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
			}
			if (t instanceof Array)
				for (var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);
			else {
				var r = u(this._roots, t);
				r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof qg && t
					.delChildrenFromStorage(this))
			}
		},
		addToStorage: function(t) {
			return t && (t.__storage = this, t.dirty(!1)), this
		},
		delFromStorage: function(t) {
			return t && (t.__storage = null), this
		},
		dispose: function() {
			this._renderList = this._roots = null
		},
		displayableSortFunc: fn
	};
	var $g = {
			shadowBlur: 1,
			shadowOffsetX: 1,
			shadowOffsetY: 1,
			textShadowBlur: 1,
			textShadowOffsetX: 1,
			textShadowOffsetY: 1,
			textBoxShadowBlur: 1,
			textBoxShadowOffsetX: 1,
			textBoxShadowOffsetY: 1
		},
		Jg = function(t, e, n) {
			return $g.hasOwnProperty(e) ? n *= t.dpr : n
		},
		Qg = [
			["shadowBlur", 0],
			["shadowOffsetX", 0],
			["shadowOffsetY", 0],
			["shadowColor", "#000"],
			["lineCap", "butt"],
			["lineJoin", "miter"],
			["miterLimit", 10]
		],
		tm = function(t, e) {
			this.extendFrom(t, !1), this.host = e
		};
	tm.prototype = {
		constructor: tm,
		host: null,
		fill: "#000",
		stroke: null,
		opacity: 1,
		lineDash: null,
		lineDashOffset: 0,
		shadowBlur: 0,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		lineWidth: 1,
		strokeNoScale: !1,
		text: null,
		font: null,
		textFont: null,
		fontStyle: null,
		fontWeight: null,
		fontSize: null,
		fontFamily: null,
		textTag: null,
		textFill: "#000",
		textStroke: null,
		textWidth: null,
		textHeight: null,
		textStrokeWidth: 0,
		textLineHeight: null,
		textPosition: "inside",
		textRect: null,
		textOffset: null,
		textAlign: null,
		textVerticalAlign: null,
		textDistance: 5,
		textShadowColor: "transparent",
		textShadowBlur: 0,
		textShadowOffsetX: 0,
		textShadowOffsetY: 0,
		textBoxShadowColor: "transparent",
		textBoxShadowBlur: 0,
		textBoxShadowOffsetX: 0,
		textBoxShadowOffsetY: 0,
		transformText: !1,
		textRotation: 0,
		textOrigin: null,
		textBackgroundColor: null,
		textBorderColor: null,
		textBorderWidth: 0,
		textBorderRadius: 0,
		textPadding: null,
		rich: null,
		truncate: null,
		blend: null,
		bind: function(t, e, n) {
			for (var i = this, r = n && n.style, a = !r, o = 0; o < Qg.length; o++) {
				var s = Qg[o],
					l = s[0];
				(a || i[l] !== r[l]) && (t[l] = Jg(t, l, i[l] || s[1]))
			}
			if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t
					.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i
					.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i
					.blend || "source-over"), this.hasStroke()) {
				var u = i.lineWidth;
				t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
			}
		},
		hasFill: function() {
			var t = this.fill;
			return null != t && "none" !== t
		},
		hasStroke: function() {
			var t = this.stroke;
			return null != t && "none" !== t && this.lineWidth > 0
		},
		extendFrom: function(t, e) {
			if (t)
				for (var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) :
					null == t[n]) || (this[n] = t[n])
		},
		set: function(t, e) {
			"string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
		},
		clone: function() {
			var t = new this.constructor;
			return t.extendFrom(this, !0), t
		},
		getGradient: function(t, e, n) {
			for (var i = "radial" === e.type ? gn : pn, r = i(t, e, n), a = e.colorStops, o = 0; o < a
				.length; o++) r.addColorStop(a[o].offset, a[o].color);
			return r
		}
	};
	for (var em = tm.prototype, nm = 0; nm < Qg.length; nm++) {
		var im = Qg[nm];
		im[0] in em || (em[im[0]] = im[1])
	}
	tm.getGradient = em.getGradient;
	var rm = function(t, e) {
		this.image = t, this.repeat = e, this.type = "pattern"
	};
	rm.prototype.getCanvasPattern = function(t) {
		return t.createPattern(this.image, this.repeat || "repeat")
	};
	var am = function(t, e, n) {
		var i;
		n = n || Fg, "string" == typeof t ? i = vn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom =
			i;
		var r = i.style;
		r && (i.onselectstart = mn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r[
					"-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r
				.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null,
			this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this
			.lastFrameAlpha = .7, this.dpr = n
	};
	am.prototype = {
		constructor: am,
		__dirty: !0,
		__used: !1,
		__drawIndex: 0,
		__startIndex: 0,
		__endIndex: 0,
		incremental: !1,
		getElementCount: function() {
			return this.__endIndex - this.__startIndex
		},
		initContext: function() {
			this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
		},
		createBackBuffer: function() {
			var t = this.dpr;
			this.domBack = vn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext(
				"2d"), 1 != t && this.ctxBack.scale(t, t)
		},
		resize: function(t, e) {
			var n = this.dpr,
				i = this.dom,
				r = i.style,
				a = this.domBack;
			r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a
				.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
		},
		clear: function(t, e) {
			var n = this.dom,
				i = this.ctx,
				r = n.width,
				a = n.height,
				e = e || this.clearColor,
				o = this.motionBlur && !t,
				s = this.lastFrameAlpha,
				l = this.dpr;
			if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation =
					"copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e &&
				"transparent" !== e) {
				var u;
				e.colorStops ? (u = e.__canvasGradient || tm.getGradient(i, e, {
						x: 0,
						y: 0,
						width: r,
						height: a
					}), e.__canvasGradient = u) : e.image && (u = rm.prototype.getCanvasPattern.call(e, i)),
					i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore()
			}
			if (o) {
				var h = this.domBack;
				i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore()
			}
		}
	};
	var om = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(
				window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window
			.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
			setTimeout(t, 16)
		},
		sm = new Cg(50),
		lm = {},
		um = 0,
		hm = 5e3,
		cm = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
		dm = "12px sans-serif",
		fm = {};
	fm.measureText = function(t, e) {
		var n = l();
		return n.font = e || dm, n.measureText(t)
	};
	var pm = {
			left: 1,
			right: 1,
			center: 1
		},
		gm = {
			top: 1,
			bottom: 1,
			middle: 1
		},
		mm = new rn,
		vm = function() {};
	vm.prototype = {
		constructor: vm,
		drawRectText: function(t, e) {
			var n = this.style;
			e = n.textRect || e, this.__dirty && Vn(n, !0);
			var i = n.text;
			if (null != i && (i += ""), ii(i, n)) {
				t.save();
				var r = this.transform;
				n.transformText ? this.setTransform(t) : r && (mm.copy(e), mm.applyTransform(r), e = mm),
					Hn(this, t, i, n, e), t.restore()
			}
		}
	}, ri.prototype = {
		constructor: ri,
		type: "displayable",
		__dirty: !0,
		invisible: !1,
		z: 0,
		z2: 0,
		zlevel: 0,
		draggable: !1,
		dragging: !1,
		silent: !1,
		culling: !1,
		cursor: "pointer",
		rectHover: !1,
		progressive: !1,
		incremental: !1,
		inplace: !1,
		beforeBrush: function() {},
		afterBrush: function() {},
		brush: function() {},
		getBoundingRect: function() {},
		contain: function(t, e) {
			return this.rectContain(t, e)
		},
		traverse: function(t, e) {
			t.call(e, this)
		},
		rectContain: function(t, e) {
			var n = this.transformCoordToLocal(t, e),
				i = this.getBoundingRect();
			return i.contain(n[0], n[1])
		},
		dirty: function() {
			this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
		},
		animateStyle: function(t) {
			return this.animate("style", t)
		},
		attrKV: function(t, e) {
			"style" !== t ? Wg.prototype.attrKV.call(this, t, e) : this.style.set(e)
		},
		setStyle: function(t, e) {
			return this.style.set(t, e), this.dirty(!1), this
		},
		useStyle: function(t) {
			return this.style = new tm(t, this), this.dirty(!1), this
		}
	}, h(ri, Wg), c(ri, vm), ai.prototype = {
		constructor: ai,
		type: "image",
		brush: function(t, e) {
			var n = this.style,
				i = n.image;
			n.bind(t, this, e);
			var r = this._image = _n(i, this._image, this, this.onload);
			if (r && wn(r)) {
				var a = n.x || 0,
					o = n.y || 0,
					s = n.width,
					l = n.height,
					u = r.width / r.height;
				if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s &&
					null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
					var h = n.sx || 0,
						c = n.sy || 0;
					t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l)
				} else if (n.sx && n.sy) {
					var h = n.sx,
						c = n.sy,
						d = s - h,
						f = l - c;
					t.drawImage(r, h, c, d, f, a, o, s, l)
				} else t.drawImage(r, a, o, s, l);
				null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
			}
		},
		getBoundingRect: function() {
			var t = this.style;
			return this._rect || (this._rect = new rn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)),
				this._rect
		}
	}, h(ai, ri);
	var ym = 1e5,
		_m = 314159,
		xm = .01,
		wm = .001,
		bm = new rn(0, 0, 0, 0),
		Sm = new rn(0, 0, 0, 0),
		Mm = function(t, e, n) {
			this.type = "canvas";
			var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
			this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Fg, this._singleCanvas = i, this
				.root = t;
			var r = t.style;
			r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r[
				"-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
			var a = this._zlevelList = [],
				s = this._layers = {};
			if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
				var l = t.width,
					u = t.height;
				null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n
					.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this
					._height = u;
				var h = new am(t, this, this.dpr);
				h.__builtin__ = !0, h.initContext(), s[_m] = h, h.zlevel = _m, a.push(_m), this._domRoot = t
			} else {
				this._width = this._getSize(0), this._height = this._getSize(1);
				var c = this._domRoot = ci(this._width, this._height);
				t.appendChild(c)
			}
			this._hoverlayer = null, this._hoverElements = []
		};
	Mm.prototype = {
		constructor: Mm,
		getType: function() {
			return "canvas"
		},
		isSingleCanvas: function() {
			return this._singleCanvas
		},
		getViewportRoot: function() {
			return this._domRoot
		},
		getViewportRootOffset: function() {
			var t = this.getViewportRoot();
			return t ? {
				offsetLeft: t.offsetLeft || 0,
				offsetTop: t.offsetTop || 0
			} : void 0
		},
		refresh: function(t) {
			var e = this.storage.getDisplayList(!0),
				n = this._zlevelList;
			this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
			for (var i = 0; i < n.length; i++) {
				var r = n[i],
					a = this._layers[r];
				if (!a.__builtin__ && a.refresh) {
					var o = 0 === i ? this._backgroundColor : null;
					a.refresh(o)
				}
			}
			return this.refreshHover(), this
		},
		addHover: function(t, e) {
			if (!t.__hoverMir) {
				var n = new t.constructor({
					style: t.style,
					shape: t.shape
				});
				n.__from = t, t.__hoverMir = n, n.setStyle(e), this._hoverElements.push(n)
			}
		},
		removeHover: function(t) {
			var e = t.__hoverMir,
				n = this._hoverElements,
				i = u(n, e);
			i >= 0 && n.splice(i, 1), t.__hoverMir = null
		},
		clearHover: function() {
			for (var t = this._hoverElements, e = 0; e < t.length; e++) {
				var n = t[e].__from;
				n && (n.__hoverMir = null)
			}
			t.length = 0
		},
		refreshHover: function() {
			var t = this._hoverElements,
				e = t.length,
				n = this._hoverlayer;
			if (n && n.clear(), e) {
				dn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(ym));
				var i = {};
				n.ctx.save();
				for (var r = 0; e > r;) {
					var a = t[r],
						o = a.__from;
					o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o
						.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (
						t.splice(r, 1), o.__hoverMir = null, e--)
				}
				n.ctx.restore()
			}
		},
		getHoverLayer: function() {
			return this.getLayer(ym)
		},
		_paintList: function(t, e, n) {
			if (this._redrawId === n) {
				e = e || !1, this._updateLayerStatus(t);
				var i = this._doPaintList(t, e);
				if (this._needsManuallyCompositing && this._compositeManually(), !i) {
					var r = this;
					om(function() {
						r._paintList(t, e, n)
					})
				}
			}
		},
		_compositeManually: function() {
			var t = this.getLayer(_m).ctx,
				e = this._domRoot.width,
				n = this._domRoot.height;
			t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
				i.virtual && t.drawImage(i.dom, 0, 0, e, n)
			})
		},
		_doPaintList: function(t, e) {
			for (var n = [], i = 0; i < this._zlevelList.length; i++) {
				var r = this._zlevelList[i],
					a = this._layers[r];
				a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a)
			}
			for (var o = !0, s = 0; s < n.length; s++) {
				var a = n[s],
					l = a.ctx,
					u = {};
				l.save();
				var h = e ? a.__startIndex : a.__drawIndex,
					c = !e && a.incremental && Date.now,
					d = c && Date.now(),
					p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
				if (a.__startIndex === a.__endIndex) a.clear(!1, p);
				else if (h === a.__startIndex) {
					var g = t[h];
					g.incremental && g.notClear && !e || a.clear(!1, p)
				} - 1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a
					.__startIndex);
				for (var m = h; m < a.__endIndex; m++) {
					var v = t[m];
					if (this._doPaintEl(v, a, e, u), v.__dirty = !1, c) {
						var y = Date.now() - d;
						if (y > 15) break
					}
				}
				a.__drawIndex = m, a.__drawIndex < a.__endIndex && (o = !1), u.prevElClipPaths && l
				.restore(), l.restore()
			}
			return Up.wxa && f(this._layers, function(t) {
				t && t.ctx && t.ctx.draw && t.ctx.draw()
			}), o
		},
		_doPaintEl: function(t, e, n, i) {
			var r = e.ctx,
				a = t.transform;
			if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t
					.culling && li(t, this._width, this._height))) {
				var o = t.__clipPaths;
				(!i.prevElClipPaths || ui(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(),
					i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), hi(o, r), i
					.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null),
					i.prevEl = t, t.afterBrush && t.afterBrush(r)
			}
		},
		getLayer: function(t, e) {
			this._singleCanvas && !this._needsManuallyCompositing && (t = _m);
			var n = this._layers[t];
			return n || (n = new am("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this
				._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this
				.insertLayer(t, n), n.initContext()), n
		},
		insertLayer: function(t, e) {
			var n = this._layers,
				i = this._zlevelList,
				r = i.length,
				a = null,
				o = -1,
				s = this._domRoot;
			if (n[t]) return void Gg("ZLevel " + t + " has been used already");
			if (!si(e)) return void Gg("Layer of zlevel " + t + " is not valid");
			if (r > 0 && t > i[0]) {
				for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);
				a = n[i[o]]
			}
			if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual)
				if (a) {
					var l = a.dom;
					l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
				} else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
		},
		eachLayer: function(t, e) {
			var n, i, r = this._zlevelList;
			for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
		},
		eachBuiltinLayer: function(t, e) {
			var n, i, r, a = this._zlevelList;
			for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
		},
		eachOtherLayer: function(t, e) {
			var n, i, r, a = this._zlevelList;
			for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
		},
		getLayers: function() {
			return this._layers
		},
		_updateLayerStatus: function(t) {
			function e(t) {
				r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
			}
			if (this.eachBuiltinLayer(function(t) {
					t.__dirty = t.__used = !1
				}), this._singleCanvas)
				for (var n = 1; n < t.length; n++) {
					var i = t[n];
					if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
						this._needsManuallyCompositing = !0;
						break
					}
				}
			for (var r = null, a = 0, n = 0; n < t.length; n++) {
				var o, i = t[n],
					s = i.zlevel;
				i.incremental ? (o = this.getLayer(s + wm, this._needsManuallyCompositing), o
					.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? xm : 0), this
					._needsManuallyCompositing), o.__builtin__ || Gg("ZLevel " + s +
					" has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o
					.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o
					.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental &&
					o.__drawIndex < 0 && (o.__drawIndex = n))
			}
			e(n), this.eachBuiltinLayer(function(t) {
				!t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t
					.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t
					.__drawIndex = t.__startIndex)
			})
		},
		clear: function() {
			return this.eachBuiltinLayer(this._clearLayer), this
		},
		_clearLayer: function(t) {
			t.clear()
		},
		setBackgroundColor: function(t) {
			this._backgroundColor = t
		},
		configLayer: function(t, e) {
			if (e) {
				var n = this._layerConfig;
				n[t] ? r(n[t], e, !0) : n[t] = e;
				for (var i = 0; i < this._zlevelList.length; i++) {
					var a = this._zlevelList[i];
					if (a === t || a === t + xm) {
						var o = this._layers[a];
						r(o, n[t], !0)
					}
				}
			}
		},
		delLayer: function(t) {
			var e = this._layers,
				n = this._zlevelList,
				i = e[t];
			i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1))
		},
		resize: function(t, e) {
			if (this._domRoot.style) {
				var n = this._domRoot;
				n.style.display = "none";
				var i = this._opts;
				if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this
					._getSize(1), n.style.display = "", this._width != t || e != this._height) {
					n.style.width = t + "px", n.style.height = e + "px";
					for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t,
						e);
					f(this._progressiveLayers, function(n) {
						n.resize(t, e)
					}), this.refresh(!0)
				}
				this._width = t, this._height = e
			} else {
				if (null == t || null == e) return;
				this._width = t, this._height = e, this.getLayer(_m).resize(t, e)
			}
			return this
		},
		clearLayer: function(t) {
			var e = this._layers[t];
			e && e.clear()
		},
		dispose: function() {
			this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
		},
		getRenderedCanvas: function(t) {
			if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[_m].dom;
			var e = new am("image", this, t.pixelRatio || this.dpr);
			if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <=
				this.dpr) {
				this.refresh();
				var n = e.dom.width,
					i = e.dom.height,
					r = e.ctx;
				this.eachLayer(function(t) {
					t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx
						.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
				})
			} else
				for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
					var l = o[s];
					this._doPaintEl(l, e, !0, a)
				}
			return e.dom
		},
		getWidth: function() {
			return this._width
		},
		getHeight: function() {
			return this._height
		},
		_getSize: function(t) {
			var e = this._opts,
				n = ["width", "height"][t],
				i = ["clientWidth", "clientHeight"][t],
				r = ["paddingLeft", "paddingTop"][t],
				a = ["paddingRight", "paddingBottom"][t];
			if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
			var o = this.root,
				s = document.defaultView.getComputedStyle(o);
			return (o[i] || oi(s[n]) || oi(o.style[n])) - (oi(s[r]) || 0) - (oi(s[a]) || 0) | 0
		},
		pathToImage: function(t, e) {
			e = e || this.dpr;
			var n = document.createElement("canvas"),
				i = n.getContext("2d"),
				r = t.getBoundingRect(),
				a = t.style,
				o = a.shadowBlur * e,
				s = a.shadowOffsetX * e,
				l = a.shadowOffsetY * e,
				u = a.hasStroke() ? a.lineWidth : 0,
				h = Math.max(u / 2, -s + o),
				c = Math.max(u / 2, s + o),
				d = Math.max(u / 2, -l + o),
				f = Math.max(u / 2, l + o),
				p = r.width + h + c,
				g = r.height + d + f;
			n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
			var m = {
				position: t.position,
				rotation: t.rotation,
				scale: t.scale
			};
			t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t
				.brush(i);
			var v = ai,
				y = new v({
					style: {
						x: 0,
						y: 0,
						image: n
					}
				});
			return null != m.position && (y.position = t.position = m.position), null != m.rotation && (y
					.rotation = t.rotation = m.rotation), null != m.scale && (y.scale = t.scale = m.scale),
				y
		}
	};
	var Im = "undefined" != typeof window && !!window.addEventListener,
		Tm = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Cm = Im ? function(t) {
			t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
		} : function(t) {
			t.returnValue = !1, t.cancelBubble = !0
		},
		Dm = function(t) {
			t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [],
				this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, dg.call(this)
		};
	Dm.prototype = {
		constructor: Dm,
		addClip: function(t) {
			this._clips.push(t)
		},
		addAnimator: function(t) {
			t.animation = this;
			for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
		},
		removeClip: function(t) {
			var e = u(this._clips, t);
			e >= 0 && this._clips.splice(e, 1)
		},
		removeAnimator: function(t) {
			for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
			t.animation = null
		},
		_update: function() {
			for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n
					.length, r = [], a = [], o = 0; i > o; o++) {
				var s = n[o],
					l = s.step(t, e);
				l && (r.push(l), a.push(s))
			}
			for (var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
			i = r.length;
			for (var o = 0; i > o; o++) a[o].fire(r[o]);
			this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage
				.update()
		},
		_startLoop: function() {
			function t() {
				e._running && (om(t), !e._paused && e._update())
			}
			var e = this;
			this._running = !0, om(t)
		},
		start: function() {
			this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
		},
		stop: function() {
			this._running = !1
		},
		pause: function() {
			this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
		},
		resume: function() {
			this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
		},
		clear: function() {
			this._clips = []
		},
		isFinished: function() {
			return !this._clips.length
		},
		animate: function(t, e) {
			e = e || {};
			var n = new Eg(t, e.loop, e.getter, e.setter);
			return this.addAnimator(n), n
		}
	}, c(Dm, dg);
	var Am = function() {
		this._track = []
	};
	Am.prototype = {
		constructor: Am,
		recognize: function(t, e, n) {
			return this._doTrack(t, e, n), this._recognize(t)
		},
		clear: function() {
			return this._track.length = 0, this
		},
		_doTrack: function(t, e, n) {
			var i = t.touches;
			if (i) {
				for (var r = {
						points: [],
						touches: [],
						target: e,
						event: t
					}, a = 0, o = i.length; o > a; a++) {
					var s = i[a],
						l = fi(n, s, {});
					r.points.push([l.zrX, l.zrY]), r.touches.push(s)
				}
				this._track.push(r)
			}
		},
		_recognize: function(t) {
			for (var e in km)
				if (km.hasOwnProperty(e)) {
					var n = km[e](this._track, t);
					if (n) return n
				}
		}
	};
	var km = {
			pinch: function(t, e) {
				var n = t.length;
				if (n) {
					var i = (t[n - 1] || {}).points,
						r = (t[n - 2] || {}).points || i;
					if (r && r.length > 1 && i && i.length > 1) {
						var a = _i(i) / _i(r);
						!isFinite(a) && (a = 1), e.pinchScale = a;
						var o = xi(i);
						return e.pinchX = o[0], e.pinchY = o[1], {
							type: "pinch",
							target: t[0].target,
							event: e
						}
					}
				}
			}
		},
		Pm = 300,
		Lm = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
		Om = ["touchstart", "touchend", "touchmove"],
		zm = {
			pointerdown: 1,
			pointerup: 1,
			pointermove: 1,
			pointerout: 1
		},
		Rm = p(Lm, function(t) {
			var e = t.replace("mouse", "pointer");
			return zm[e] ? e : t
		}),
		Em = {
			mousemove: function(t) {
				t = gi(this.dom, t), this.trigger("mousemove", t)
			},
			mouseout: function(t) {
				t = gi(this.dom, t);
				var e = t.toElement || t.relatedTarget;
				if (e != this.dom)
					for (; e && 9 != e.nodeType;) {
						if (e === this.dom) return;
						e = e.parentNode
					}
				this.trigger("mouseout", t)
			},
			touchstart: function(t) {
				t = gi(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, bi(this, t, "start"),
					Em.mousemove.call(this, t), Em.mousedown.call(this, t), Si(this)
			},
			touchmove: function(t) {
				t = gi(this.dom, t), t.zrByTouch = !0, bi(this, t, "change"), Em.mousemove.call(this, t), Si(
					this)
			},
			touchend: function(t) {
				t = gi(this.dom, t), t.zrByTouch = !0, bi(this, t, "end"), Em.mouseup.call(this, t), +new Date -
					this._lastTouchMoment < Pm && Em.click.call(this, t), Si(this)
			},
			pointerdown: function(t) {
				Em.mousedown.call(this, t)
			},
			pointermove: function(t) {
				Mi(t) || Em.mousemove.call(this, t)
			},
			pointerup: function(t) {
				Em.mouseup.call(this, t)
			},
			pointerout: function(t) {
				Mi(t) || Em.mouseout.call(this, t)
			}
		};
	f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
		Em[t] = function(e) {
			e = gi(this.dom, e), this.trigger(t, e)
		}
	});
	var Bm = Ti.prototype;
	Bm.dispose = function() {
		for (var t = Lm.concat(Om), e = 0; e < t.length; e++) {
			var n = t[e];
			vi(this.dom, wi(n), this._handlers[n])
		}
	}, Bm.setCursor = function(t) {
		this.dom.style && (this.dom.style.cursor = t || "default")
	}, c(Ti, dg);
	var Nm = !Up.canvasSupported,
		Fm = {
			canvas: Mm
		},
		Vm = {},
		Gm = "4.0.4",
		Hm = function(t, e, n) {
			n = n || {}, this.dom = e, this.id = t;
			var i = this,
				r = new Kg,
				a = n.renderer;
			if (Nm) {
				if (!Fm.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
				a = "vml"
			} else a && Fm[a] || (a = "canvas");
			var o = new Fm[a](e, r, n, t);
			this.storage = r, this.painter = o;
			var s = Up.node || Up.worker ? null : new Ti(o.getViewportRoot());
			this.handler = new gg(r, o, s, o.root), this.animation = new Dm({
				stage: {
					update: y(this.flush, this)
				}
			}), this.animation.start(), this._needsRefresh;
			var l = r.delFromStorage,
				u = r.addToStorage;
			r.delFromStorage = function(t) {
				l.call(r, t), t && t.removeSelfFromZr(i)
			}, r.addToStorage = function(t) {
				u.call(r, t), t.addSelfToZr(i)
			}
		};
	Hm.prototype = {
		constructor: Hm,
		getId: function() {
			return this.id
		},
		add: function(t) {
			this.storage.addRoot(t), this._needsRefresh = !0
		},
		remove: function(t) {
			this.storage.delRoot(t), this._needsRefresh = !0
		},
		configLayer: function(t, e) {
			this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
		},
		setBackgroundColor: function(t) {
			this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
		},
		refreshImmediately: function() {
			this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
		},
		refresh: function() {
			this._needsRefresh = !0
		},
		flush: function() {
			var t;
			this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0,
				this.refreshHoverImmediately()), t && this.trigger("rendered")
		},
		addHover: function(t, e) {
			this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
		},
		removeHover: function(t) {
			this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
		},
		clearHover: function() {
			this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
		},
		refreshHover: function() {
			this._needsRefreshHover = !0
		},
		refreshHoverImmediately: function() {
			this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
		},
		resize: function(t) {
			t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
		},
		clearAnimation: function() {
			this.animation.clear()
		},
		getWidth: function() {
			return this.painter.getWidth()
		},
		getHeight: function() {
			return this.painter.getHeight()
		},
		pathToImage: function(t, e) {
			return this.painter.pathToImage(t, e)
		},
		setCursorStyle: function(t) {
			this.handler.setCursorStyle(t)
		},
		findHover: function(t, e) {
			return this.handler.findHover(t, e)
		},
		on: function(t, e, n) {
			this.handler.on(t, e, n)
		},
		off: function(t, e) {
			this.handler.off(t, e)
		},
		trigger: function(t, e) {
			this.handler.trigger(t, e)
		},
		clear: function() {
			this.storage.delRoot(), this.painter.clear()
		},
		dispose: function() {
			this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this
				.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Pi(
					this.id)
		}
	};
	var Wm = (Object.freeze || Object)({
			version: Gm,
			init: Ci,
			dispose: Di,
			getInstance: Ai,
			registerPainter: ki
		}),
		Um = f,
		Xm = S,
		Zm = x,
		qm = "series\x00",
		jm = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor",
			"textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor",
			"shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur",
			"textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth",
			"borderRadius", "padding"
		],
		Ym = 0,
		Km = ".",
		$m = "___EC__COMPONENT__CONTAINER___",
		Jm = 0,
		Qm = function(t) {
			for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
			return function(e, n, i) {
				for (var r = {}, a = 0; a < t.length; a++) {
					var o = t[a][1];
					if (!(n && u(n, o) >= 0 || i && u(i, o) < 0)) {
						var s = e.getShallow(o);
						null != s && (r[t[a][0]] = s)
					}
				}
				return r
			}
		},
		tv = Qm([
			["lineWidth", "width"],
			["stroke", "color"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]),
		ev = {
			getLineStyle: function(t) {
				var e = tv(this, t),
					n = this.getLineDash(e.lineWidth);
				return n && (e.lineDash = n), e
			},
			getLineDash: function(t) {
				null == t && (t = 1);
				var e = this.get("type"),
					n = Math.max(t, 2),
					i = 4 * t;
				return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
			}
		},
		nv = Qm([
			["fill", "color"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["opacity"],
			["shadowColor"]
		]),
		iv = {
			getAreaStyle: function(t, e) {
				return nv(this, t, e)
			}
		},
		rv = Math.pow,
		av = Math.sqrt,
		ov = 1e-8,
		sv = 1e-4,
		lv = av(3),
		uv = 1 / 3,
		hv = G(),
		cv = G(),
		dv = G(),
		fv = Math.min,
		pv = Math.max,
		gv = Math.sin,
		mv = Math.cos,
		vv = 2 * Math.PI,
		yv = G(),
		_v = G(),
		xv = G(),
		wv = [],
		bv = [],
		Sv = {
			M: 1,
			L: 2,
			C: 3,
			Q: 4,
			A: 5,
			Z: 6,
			R: 7
		},
		Mv = [],
		Iv = [],
		Tv = [],
		Cv = [],
		Dv = Math.min,
		Av = Math.max,
		kv = Math.cos,
		Pv = Math.sin,
		Lv = Math.sqrt,
		Ov = Math.abs,
		zv = "undefined" != typeof Float32Array,
		Rv = function(t) {
			this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
		};
	Rv.prototype = {
		constructor: Rv,
		_xi: 0,
		_yi: 0,
		_x0: 0,
		_y0: 0,
		_ux: 0,
		_uy: 0,
		_len: 0,
		_lineDash: null,
		_dashOffset: 0,
		_dashIdx: 0,
		_dashSum: 0,
		setScale: function(t, e) {
			this._ux = Ov(1 / Fg / t) || 0, this._uy = Ov(1 / Fg / e) || 0
		},
		getContext: function() {
			return this._ctx
		},
		beginPath: function(t) {
			return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this
				._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
		},
		moveTo: function(t, e) {
			return this.addData(Sv.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 =
				e, this._xi = t, this._yi = e, this
		},
		lineTo: function(t, e) {
			var n = Ov(t - this._xi) > this._ux || Ov(e - this._yi) > this._uy || this._len < 5;
			return this.addData(Sv.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t,
				e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
		},
		bezierCurveTo: function(t, e, n, i, r, a) {
			return this.addData(Sv.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this
					._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this
				._xi = r, this._yi = a, this
		},
		quadraticCurveTo: function(t, e, n, i) {
			return this.addData(Sv.Q, t, e, n, i), this._ctx && (this._needsDash() ? this
					._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n,
				this._yi = i, this
		},
		arc: function(t, e, n, i, r, a) {
			return this.addData(Sv.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e,
				n, i, r, a), this._xi = kv(r) * n + t, this._yi = Pv(r) * n + t, this
		},
		arcTo: function(t, e, n, i, r) {
			return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
		},
		rect: function(t, e, n, i) {
			return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Sv.R, t, e, n, i), this
		},
		closePath: function() {
			this.addData(Sv.Z);
			var t = this._ctx,
				e = this._x0,
				n = this._y0;
			return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this
				._yi = n, this
		},
		fill: function(t) {
			t && t.fill(), this.toStatic()
		},
		stroke: function(t) {
			t && t.stroke(), this.toStatic()
		},
		setLineDash: function(t) {
			if (t instanceof Array) {
				this._lineDash = t, this._dashIdx = 0;
				for (var e = 0, n = 0; n < t.length; n++) e += t[n];
				this._dashSum = e
			}
			return this
		},
		setLineDashOffset: function(t) {
			return this._dashOffset = t, this
		},
		len: function() {
			return this._len
		},
		setData: function(t) {
			var e = t.length;
			this.data && this.data.length == e || !zv || (this.data = new Float32Array(e));
			for (var n = 0; e > n; n++) this.data[n] = t[n];
			this._len = e
		},
		appendPath: function(t) {
			t instanceof Array || (t = [t]);
			for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
			zv && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
			for (var r = 0; e > r; r++)
				for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
			this._len = i
		},
		addData: function(t) {
			if (this._saveData) {
				var e = this.data;
				this._len + arguments.length > e.length && (this._expandData(), e = this.data);
				for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
				this._prevCmd = t
			}
		},
		_expandData: function() {
			if (!(this.data instanceof Array)) {
				for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
				this.data = t
			}
		},
		_needsDash: function() {
			return this._lineDash
		},
		_dashedLineTo: function(t, e) {
			var n, i, r = this._dashSum,
				a = this._dashOffset,
				o = this._lineDash,
				s = this._ctx,
				l = this._xi,
				u = this._yi,
				h = t - l,
				c = e - u,
				d = Lv(h * h + c * c),
				f = l,
				p = u,
				g = o.length;
			for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f ||
				0 > h && f >= t || 0 == h && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n =
				o[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f >
				l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Dv(f, t) :
					Av(f, t), c >= 0 ? Dv(p, e) : Av(p, e));
			h = f - t, c = p - e, this._dashOffset = -Lv(h * h + c * c)
		},
		_dashedBezierTo: function(t, e, n, i, r, a) {
			var o, s, l, u, h, c = this._dashSum,
				d = this._dashOffset,
				f = this._lineDash,
				p = this._ctx,
				g = this._xi,
				m = this._yi,
				v = er,
				y = 0,
				_ = this._dashIdx,
				x = f.length,
				w = 0;
			for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = v(g, t, n, r, o + .1) - v(g, t, n,
				r, o), l = v(m, e, i, a, o + .1) - v(m, e, i, a, o), y += Lv(s * s + l * l);
			for (; x > _ && (w += f[_], !(w > d)); _++);
			for (o = (w - d) / y; 1 >= o;) u = v(g, t, n, r, o), h = v(m, e, i, a, o), _ % 2 ? p.moveTo(u,
				h) : p.lineTo(u, h), o += f[_] / y, _ = (_ + 1) % x;
			_ % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -Lv(s * s + l * l)
		},
		_dashedQuadraticTo: function(t, e, n, i) {
			var r = n,
				a = i;
			n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) /
				3, this._dashedBezierTo(t, e, n, i, r, a)
		},
		toStatic: function() {
			var t = this.data;
			t instanceof Array && (t.length = this._len, zv && (this.data = new Float32Array(t)))
		},
		getBoundingRect: function() {
			Mv[0] = Mv[1] = Tv[0] = Tv[1] = Number.MAX_VALUE, Iv[0] = Iv[1] = Cv[0] = Cv[1] = -Number
				.MAX_VALUE;
			for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
				var o = t[a++];
				switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
					case Sv.M:
						i = t[a++], r = t[a++], e = i, n = r, Tv[0] = i, Tv[1] = r, Cv[0] = i, Cv[1] = r;
						break;
					case Sv.L:
						pr(e, n, t[a], t[a + 1], Tv, Cv), e = t[a++], n = t[a++];
						break;
					case Sv.C:
						gr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Tv, Cv), e = t[a++], n = t[
							a++];
						break;
					case Sv.Q:
						mr(e, n, t[a++], t[a++], t[a], t[a + 1], Tv, Cv), e = t[a++], n = t[a++];
						break;
					case Sv.A:
						var s = t[a++],
							l = t[a++],
							u = t[a++],
							h = t[a++],
							c = t[a++],
							d = t[a++] + c,
							f = (t[a++], 1 - t[a++]);
						1 == a && (i = kv(c) * u + s, r = Pv(c) * h + l), vr(s, l, u, h, c, d, f, Tv, Cv),
							e = kv(d) * u + s, n = Pv(d) * h + l;
						break;
					case Sv.R:
						i = e = t[a++], r = n = t[a++];
						var p = t[a++],
							g = t[a++];
						pr(i, r, i + p, r + g, Tv, Cv);
						break;
					case Sv.Z:
						e = i, n = r
				}
				oe(Mv, Mv, Tv), se(Iv, Iv, Cv)
			}
			return 0 === a && (Mv[0] = Mv[1] = Iv[0] = Iv[1] = 0), new rn(Mv[0], Mv[1], Iv[0] - Mv[0], Iv[
				1] - Mv[1])
		},
		rebuildPath: function(t) {
			for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h >
				c;) {
				var d = s[c++];
				switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
					case Sv.M:
						e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
						break;
					case Sv.L:
						a = s[c++], o = s[c++], (Ov(a - i) > l || Ov(o - r) > u || c === h - 1) && (t
							.lineTo(a, o), i = a, r = o);
						break;
					case Sv.C:
						t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r =
							s[c - 1];
						break;
					case Sv.Q:
						t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
						break;
					case Sv.A:
						var f = s[c++],
							p = s[c++],
							g = s[c++],
							m = s[c++],
							v = s[c++],
							y = s[c++],
							_ = s[c++],
							x = s[c++],
							w = g > m ? g : m,
							b = g > m ? 1 : g / m,
							S = g > m ? m / g : 1,
							M = Math.abs(g - m) > .001,
							I = v + y;
						M ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, v, I, 1 - x), t
								.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, v,
								I, 1 - x), 1 == c && (e = kv(v) * g + f, n = Pv(v) * m + p), i = kv(I) * g +
							f, r = Pv(I) * m + p;
						break;
					case Sv.R:
						e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
						break;
					case Sv.Z:
						t.closePath(), i = e, r = n
				}
			}
		}
	}, Rv.CMD = Sv;
	var Ev = 2 * Math.PI,
		Bv = 2 * Math.PI,
		Nv = Rv.CMD,
		Fv = 2 * Math.PI,
		Vv = 1e-4,
		Gv = [-1, -1, -1],
		Hv = [-1, -1],
		Wv = rm.prototype.getCanvasPattern,
		Uv = Math.abs,
		Xv = new Rv(!0);
	Lr.prototype = {
		constructor: Lr,
		type: "path",
		__dirtyPath: !0,
		strokeContainThreshold: 5,
		brush: function(t, e) {
			var n = this.style,
				i = this.path || Xv,
				r = n.hasStroke(),
				a = n.hasFill(),
				o = n.fill,
				s = n.stroke,
				l = a && !!o.colorStops,
				u = r && !!s.colorStops,
				h = a && !!o.image,
				c = r && !!s.image;
			if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
				var d;
				l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), u && (
					d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
			}
			l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Wv.call(o, t)), u ? t.strokeStyle =
				this._strokeGradient : c && (t.strokeStyle = Wv.call(s, t));
			var f = n.lineDash,
				p = n.lineDashOffset,
				g = !!t.setLineDash,
				m = this.getGlobalScale();
			i.setScale(m[0], m[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i
						.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this
					.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && i
				.fill(t), f && g && (t.setLineDash(f), t.lineDashOffset = p), r && i.stroke(t), f && g && t
				.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this
					.getBoundingRect()))
		},
		buildPath: function() {},
		createPathProxy: function() {
			this.path = new Rv
		},
		getBoundingRect: function() {
			var t = this._rect,
				e = this.style,
				n = !t;
			if (n) {
				var i = this.path;
				i || (i = this.path = new Rv), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this
					.shape, !1)), t = i.getBoundingRect()
			}
			if (this._rect = t, e.hasStroke()) {
				var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
				if (this.__dirty || n) {
					r.copy(t);
					var a = e.lineWidth,
						o = e.strokeNoScale ? this.getLineScale() : 1;
					e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r
						.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
				}
				return r
			}
			return t
		},
		contain: function(t, e) {
			var n = this.transformCoordToLocal(t, e),
				i = this.getBoundingRect(),
				r = this.style;
			if (t = n[0], e = n[1], i.contain(t, e)) {
				var a = this.path.data;
				if (r.hasStroke()) {
					var o = r.lineWidth,
						s = r.strokeNoScale ? this.getLineScale() : 1;
					if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Pr(a,
							o / s, t, e))) return !0
				}
				if (r.hasFill()) return kr(a, t, e)
			}
			return !1
		},
		dirty: function(t) {
			null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this
				.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
		},
		animateShape: function(t) {
			return this.animate("shape", t)
		},
		attrKV: function(t, e) {
			"shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : ri.prototype
				.attrKV.call(this, t, e)
		},
		setShape: function(t, e) {
			var n = this.shape;
			if (n) {
				if (S(t))
					for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
				else n[t] = e;
				this.dirty(!0)
			}
			return this
		},
		getLineScale: function() {
			var t = this.transform;
			return t && Uv(t[0] - 1) > 1e-10 && Uv(t[3] - 1) > 1e-10 ? Math.sqrt(Uv(t[0] * t[3] - t[2] * t[
				1])) : 1
		}
	}, Lr.extend = function(t) {
		var e = function(e) {
			Lr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
			var n = t.shape;
			if (n) {
				this.shape = this.shape || {};
				var i = this.shape;
				for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
			}
			t.init && t.init.call(this, e)
		};
		h(e, Lr);
		for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
		return e
	}, h(Lr, ri);
	var Zv = Rv.CMD,
		qv = [
			[],
			[],
			[]
		],
		jv = Math.sqrt,
		Yv = Math.atan2,
		Kv = function(t, e) {
			var n, i, r, a, o, s, l = t.data,
				u = Zv.M,
				h = Zv.C,
				c = Zv.L,
				d = Zv.R,
				f = Zv.A,
				p = Zv.Q;
			for (r = 0, a = 0; r < l.length;) {
				switch (n = l[r++], a = r, i = 0, n) {
					case u:
						i = 1;
						break;
					case c:
						i = 1;
						break;
					case h:
						i = 3;
						break;
					case p:
						i = 2;
						break;
					case f:
						var g = e[4],
							m = e[5],
							v = jv(e[0] * e[0] + e[1] * e[1]),
							y = jv(e[2] * e[2] + e[3] * e[3]),
							_ = Yv(-e[1] / y, e[0] / v);
						l[r] *= v, l[r++] += g, l[r] *= y, l[r++] += m, l[r++] *= v, l[r++] *= y, l[r++] += _, l[
							r++] += _, r += 2, a = r;
						break;
					case d:
						s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[
							1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
				}
				for (o = 0; i > o; o++) {
					var s = qv[o];
					s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
				}
			}
		},
		$v = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
		Jv = Math.sqrt,
		Qv = Math.sin,
		ty = Math.cos,
		ey = Math.PI,
		ny = function(t) {
			return Math.sqrt(t[0] * t[0] + t[1] * t[1])
		},
		iy = function(t, e) {
			return (t[0] * e[0] + t[1] * e[1]) / (ny(t) * ny(e))
		},
		ry = function(t, e) {
			return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(iy(t, e))
		},
		ay = function(t) {
			ri.call(this, t)
		};
	ay.prototype = {
		constructor: ay,
		type: "text",
		brush: function(t, e) {
			var n = this.style;
			this.__dirty && Vn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX =
				n.shadowOffsetY = null;
			var i = n.text;
			null != i && (i += ""), n.bind(t, this, e), ii(i, n) && (this.setTransform(t), Hn(this, t, i,
				n), this.restoreTransform(t))
		},
		getBoundingRect: function() {
			var t = this.style;
			if (this.__dirty && Vn(t, !0), !this._rect) {
				var e = t.text;
				null != e ? e += "" : e = "";
				var n = Sn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
				if (n.x += t.x || 0, n.y += t.y || 0, Qn(t.textStroke, t.textStrokeWidth)) {
					var i = t.textStrokeWidth;
					n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
				}
				this._rect = n
			}
			return this._rect
		}
	}, h(ay, ri);
	var oy = Lr.extend({
			type: "circle",
			shape: {
				cx: 0,
				cy: 0,
				r: 0
			},
			buildPath: function(t, e, n) {
				n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
			}
		}),
		sy = [
			["shadowBlur", 0],
			["shadowColor", "#000"],
			["shadowOffsetX", 0],
			["shadowOffsetY", 0]
		],
		ly = function(t) {
			return Up.browser.ie && Up.browser.version >= 11 ? function() {
				var e, n = this.__clipPaths,
					i = this.style;
				if (n)
					for (var r = 0; r < n.length; r++) {
						var a = n[r],
							o = a && a.shape,
							s = a && a.type;
						if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width ||
								!o.height))) {
							for (var l = 0; l < sy.length; l++) sy[l][2] = i[sy[l][0]], i[sy[l][0]] = sy[l][1];
							e = !0;
							break
						}
					}
				if (t.apply(this, arguments), e)
					for (var l = 0; l < sy.length; l++) i[sy[l][0]] = sy[l][2]
			} : t
		},
		uy = Lr.extend({
			type: "sector",
			shape: {
				cx: 0,
				cy: 0,
				r0: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			brush: ly(Lr.prototype.brush),
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = Math.max(e.r0 || 0, 0),
					a = Math.max(e.r, 0),
					o = e.startAngle,
					s = e.endAngle,
					l = e.clockwise,
					u = Math.cos(o),
					h = Math.sin(o);
				t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t
					.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t
					.closePath()
			}
		}),
		hy = Lr.extend({
			type: "ring",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				r0: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = 2 * Math.PI;
				t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0,
					0, r, !0)
			}
		}),
		cy = function(t, e) {
			for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);
			var o = r / 2;
			o = n > o ? n : o;
			for (var a = 0; o > a; a++) {
				var s, l, u, h = a / (o - 1) * (e ? n : n - 1),
					c = Math.floor(h),
					d = h - c,
					f = t[c % n];
				e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1],
					l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
				var p = d * d,
					g = d * p;
				i.push([Fr(s[0], f[0], l[0], u[0], d, p, g), Fr(s[1], f[1], l[1], u[1], d, p, g)])
			}
			return i
		},
		dy = function(t, e, n, i) {
			var r, a, o, s, l = [],
				u = [],
				h = [],
				c = [];
			if (i) {
				o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
				for (var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);
				oe(o, o, i[0]), se(s, s, i[1])
			}
			for (var d = 0, f = t.length; f > d; d++) {
				var p = t[d];
				if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];
				else {
					if (0 === d || d === f - 1) {
						l.push(W(t[d]));
						continue
					}
					r = t[d - 1], a = t[d + 1]
				}
				q(u, a, r), Q(u, u, e);
				var g = ee(p, r),
					m = ee(p, a),
					v = g + m;
				0 !== v && (g /= v, m /= v), Q(h, u, -g), Q(c, u, m);
				var y = X([], p, h),
					_ = X([], p, c);
				i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_)
			}
			return n && l.push(l.shift()), l
		},
		fy = Lr.extend({
			type: "polygon",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			buildPath: function(t, e) {
				Vr(t, e, !0)
			}
		}),
		py = Lr.extend({
			type: "polyline",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				Vr(t, e, !1)
			}
		}),
		gy = Lr.extend({
			type: "rect",
			shape: {
				r: 0,
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.x,
					i = e.y,
					r = e.width,
					a = e.height;
				e.r ? Fn(t, e) : t.rect(n, i, r, a), t.closePath()
			}
		}),
		my = Lr.extend({
			type: "line",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.x1,
					i = e.y1,
					r = e.x2,
					a = e.y2,
					o = e.percent;
				0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t
					.lineTo(r, a))
			},
			pointAt: function(t) {
				var e = this.shape;
				return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
			}
		}),
		vy = [],
		yy = Lr.extend({
			type: "bezier-curve",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				cpx1: 0,
				cpy1: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.x1,
					i = e.y1,
					r = e.x2,
					a = e.y2,
					o = e.cpx1,
					s = e.cpy1,
					l = e.cpx2,
					u = e.cpy2,
					h = e.percent;
				0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (cr(n, o, r, h, vy), o = vy[
						1], r = vy[2], cr(i, s, a, h, vy), s = vy[1], a = vy[2]), t
					.quadraticCurveTo(o, s, r, a)) : (1 > h && (ar(n, o, l, r, h, vy), o = vy[1],
					l = vy[2], r = vy[3], ar(i, s, u, a, h, vy), s = vy[1], u = vy[2], a = vy[3]
					), t.bezierCurveTo(o, s, l, u, r, a)))
			},
			pointAt: function(t) {
				return Gr(this.shape, t, !1)
			},
			tangentAt: function(t) {
				var e = Gr(this.shape, t, !0);
				return te(e, e)
			}
		}),
		_y = Lr.extend({
			type: "arc",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = Math.max(e.r, 0),
					a = e.startAngle,
					o = e.endAngle,
					s = e.clockwise,
					l = Math.cos(a),
					u = Math.sin(a);
				t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s)
			}
		}),
		xy = Lr.extend({
			type: "compound",
			shape: {
				paths: null
			},
			_updatePathDirty: function() {
				for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n]
					.__dirtyPath;
				this.__dirtyPath = t, this.__dirty = this.__dirty || t
			},
			beforeBrush: function() {
				this._updatePathDirty();
				for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[
					n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
			},
			buildPath: function(t, e) {
				for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
			},
			afterBrush: function() {
				for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
			},
			getBoundingRect: function() {
				return this._updatePathDirty(), Lr.prototype.getBoundingRect.call(this)
			}
		}),
		wy = function(t) {
			this.colorStops = t || []
		};
	wy.prototype = {
		constructor: wy,
		addColorStop: function(t, e) {
			this.colorStops.push({
				offset: t,
				color: e
			})
		}
	};
	var by = function(t, e, n, i, r, a) {
		this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null ==
			i ? 0 : i, this.type = "linear", this.global = a || !1, wy.call(this, r)
	};
	by.prototype = {
		constructor: by
	}, h(by, wy);
	var Sy = function(t, e, n, i, r) {
		this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type =
			"radial", this.global = r || !1, wy.call(this, i)
	};
	Sy.prototype = {
		constructor: Sy
	}, h(Sy, wy), Hr.prototype.incremental = !0, Hr.prototype.clearDisplaybles = function() {
		this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this
			.notClear = !1
	}, Hr.prototype.addDisplayable = function(t, e) {
		e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
	}, Hr.prototype.addDisplayables = function(t, e) {
		e = e || !1;
		for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
	}, Hr.prototype.eachPendingDisplayable = function(t) {
		for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
		for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
	}, Hr.prototype.update = function() {
		this.updateTransform();
		for (var t = this._cursor; t < this._displayables.length; t++) {
			var e = this._displayables[t];
			e.parent = this, e.update(), e.parent = null
		}
		for (var t = 0; t < this._temporaryDisplayables.length; t++) {
			var e = this._temporaryDisplayables[t];
			e.parent = this, e.update(), e.parent = null
		}
	}, Hr.prototype.brush = function(t) {
		for (var e = this._cursor; e < this._displayables.length; e++) {
			var n = this._displayables[e];
			n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e -
				1]), n.afterBrush && n.afterBrush(t)
		}
		this._cursor = e;
		for (var e = 0; e < this._temporaryDisplayables.length; e++) {
			var n = this._temporaryDisplayables[e];
			n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]),
				n.afterBrush && n.afterBrush(t)
		}
		this._temporaryDisplayables = [], this.notClear = !0
	};
	var My = [];
	Hr.prototype.getBoundingRect = function() {
		if (!this._rect) {
			for (var t = new rn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
				var n = this._displayables[e],
					i = n.getBoundingRect().clone();
				n.needLocalTransform() && i.applyTransform(n.getLocalTransform(My)), t.union(i)
			}
			this._rect = t
		}
		return this._rect
	}, Hr.prototype.contain = function(t, e) {
		var n = this.transformCoordToLocal(t, e),
			i = this.getBoundingRect();
		if (i.contain(n[0], n[1]))
			for (var r = 0; r < this._displayables.length; r++) {
				var a = this._displayables[r];
				if (a.contain(t, e)) return !0
			}
		return !1
	}, h(Hr, ri);
	var Iy = Math.round,
		Ty = Math.max,
		Cy = Math.min,
		Dy = {},
		Ay = Nr,
		ky = (Object.freeze || Object)({
			extendShape: Wr,
			extendPath: Ur,
			makePath: Xr,
			makeImage: Zr,
			mergePath: Ay,
			resizePath: jr,
			subPixelOptimizeLine: Yr,
			subPixelOptimizeRect: Kr,
			subPixelOptimize: $r,
			setHoverStyle: ha,
			setLabelStyle: ca,
			setTextStyle: da,
			setText: fa,
			getFont: xa,
			updateProps: ba,
			initProps: Sa,
			getTransform: Ma,
			applyTransform: Ia,
			transformDirection: Ta,
			groupTransition: Ca,
			clipPointsByRect: Da,
			clipRectByRect: Aa,
			createIcon: ka,
			Group: qg,
			Image: ai,
			Text: ay,
			Circle: oy,
			Sector: uy,
			Ring: hy,
			Polygon: fy,
			Polyline: py,
			Rect: gy,
			Line: my,
			BezierCurve: yy,
			Arc: _y,
			IncrementalDisplayable: Hr,
			CompoundPath: xy,
			LinearGradient: by,
			RadialGradient: Sy,
			BoundingRect: rn
		}),
		Py = ["textStyle", "color"],
		Ly = {
			getTextColor: function(t) {
				var e = this.ecModel;
				return this.getShallow("color") || (!t && e ? e.get(Py) : null)
			},
			getFont: function() {
				return xa({
					fontStyle: this.getShallow("fontStyle"),
					fontWeight: this.getShallow("fontWeight"),
					fontSize: this.getShallow("fontSize"),
					fontFamily: this.getShallow("fontFamily")
				}, this.ecModel)
			},
			getTextRect: function(t) {
				return Sn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this
					.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this
					.getShallow("truncateText"))
			}
		},
		Oy = Qm([
			["fill", "color"],
			["stroke", "borderColor"],
			["lineWidth", "borderWidth"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"],
			["textPosition"],
			["textAlign"]
		]),
		zy = {
			getItemStyle: function(t, e) {
				var n = Oy(this, t, e),
					i = this.getBorderLineDash();
				return i && (n.lineDash = i), n
			},
			getBorderLineDash: function() {
				var t = this.get("borderType");
				return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
			}
		},
		Ry = c,
		Ey = Gi();
	Pa.prototype = {
		constructor: Pa,
		init: null,
		mergeOption: function(t) {
			r(this.option, t, !0)
		},
		get: function(t, e) {
			return null == t ? this.option : La(this.option, this.parsePath(t), !e && Oa(this, t))
		},
		getShallow: function(t, e) {
			var n = this.option,
				i = null == n ? n : n[t],
				r = !e && Oa(this, t);
			return null == i && r && (i = r.getShallow(t)), i
		},
		getModel: function(t, e) {
			var n, i = null == t ? this.option : La(this.option, t = this.parsePath(t));
			return e = e || (n = Oa(this, t)) && n.getModel(t), new Pa(i, e, this.ecModel)
		},
		isEmpty: function() {
			return null == this.option
		},
		restoreData: function() {},
		clone: function() {
			var t = this.constructor;
			return new t(i(this.option))
		},
		setReadOnly: function() {},
		parsePath: function(t) {
			return "string" == typeof t && (t = t.split(".")), t
		},
		customizeGetParent: function(t) {
			Ey(this).getParent = t
		},
		isAnimationEnabled: function() {
			if (!Up.node) {
				if (null != this.option.animation) return !!this.option.animation;
				if (this.parentModel) return this.parentModel.isAnimationEnabled()
			}
		}
	}, ji(Pa), Yi(Pa), Ry(Pa, ev), Ry(Pa, iv), Ry(Pa, Ly), Ry(Pa, zy);
	var By = 0,
		Ny = 1e-4,
		Fy = 9007199254740991,
		Vy =
		/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
		Gy = (Object.freeze || Object)({
			linearMap: Na,
			parsePercent: Fa,
			round: Va,
			asc: Ga,
			getPrecision: Ha,
			getPrecisionSafe: Wa,
			getPixelPrecision: Ua,
			getPercentWithPrecision: Xa,
			MAX_SAFE_INTEGER: Fy,
			remRadian: Za,
			isRadianAroundZero: qa,
			parseDate: ja,
			quantity: Ya,
			nice: $a,
			reformIntervals: Ja,
			isNumeric: Qa
		}),
		Hy = L,
		Wy = /([&<>"'])/g,
		Uy = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;"
		},
		Xy = ["a", "b", "c", "d", "e", "f", "g"],
		Zy = function(t, e) {
			return "{" + t + (null == e ? "" : e) + "}"
		},
		qy = An,
		jy = Sn,
		Yy = (Object.freeze || Object)({
			addCommas: to,
			toCamelCase: eo,
			normalizeCssArray: Hy,
			encodeHTML: no,
			formatTpl: io,
			formatTplSimple: ro,
			getTooltipMarker: ao,
			formatTime: so,
			capitalFirst: lo,
			truncateText: qy,
			getTextRect: jy
		}),
		Ky = f,
		$y = ["left", "right", "top", "bottom", "width", "height"],
		Jy = [
			["width", "left", "right"],
			["height", "top", "bottom"]
		],
		Qy = uo,
		t_ = (_(uo, "vertical"), _(uo, "horizontal"), {
			getBoxLayoutParams: function() {
				return {
					left: this.get("left"),
					top: this.get("top"),
					right: this.get("right"),
					bottom: this.get("bottom"),
					width: this.get("width"),
					height: this.get("height")
				}
			}
		}),
		e_ = Gi(),
		n_ = Pa.extend({
			type: "component",
			id: "",
			name: "",
			mainType: "",
			subType: "",
			componentIndex: 0,
			defaultOption: null,
			ecModel: null,
			dependentModels: [],
			uid: null,
			layoutMode: null,
			$constructor: function(t, e, n, i) {
				Pa.call(this, t, e, n, i), this.uid = za("ec_cpt_model")
			},
			init: function(t, e, n) {
				this.mergeDefaultAndTheme(t, n)
			},
			mergeDefaultAndTheme: function(t, e) {
				var n = this.layoutMode,
					i = n ? fo(t) : {},
					a = e.getTheme();
				r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && co(t, i, n)
			},
			mergeOption: function(t) {
				r(this.option, t, !0);
				var e = this.layoutMode;
				e && co(this.option, t, e)
			},
			optionUpdated: function() {},
			getDefaultOption: function() {
				var t = e_(this);
				if (!t.defaultOption) {
					for (var e = [], n = this.constructor; n;) {
						var i = n.prototype.defaultOption;
						i && e.push(i), n = n.superClass
					}
					for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
					t.defaultOption = a
				}
				return t.defaultOption
			},
			getReferringComponents: function(t) {
				return this.ecModel.queryComponents({
					mainType: t,
					index: this.get(t + "Index", !0),
					id: this.get(t + "Id", !0)
				})
			}
		});
	Ji(n_, {
		registerWhenExtend: !0
	}), Ra(n_), Ea(n_, go), c(n_, t_);
	var i_ = "";
	"undefined" != typeof navigator && (i_ = navigator.platform || "");
	var r_ = {
			color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a",
				"#6e7074", "#546570", "#c4ccd3"
			],
			gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
			textStyle: {
				fontFamily: i_.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				fontWeight: "normal"
			},
			blendMode: null,
			animation: "auto",
			animationDuration: 1e3,
			animationDurationUpdate: 300,
			animationEasing: "exponentialOut",
			animationEasingUpdate: "cubicOut",
			animationThreshold: 2e3,
			progressiveThreshold: 3e3,
			progressive: 400,
			hoverLayerThreshold: 3e3,
			useUTC: !1
		},
		a_ = Gi(),
		o_ = {
			clearColorPalette: function() {
				a_(this).colorIdx = 0, a_(this).colorNameMap = {}
			},
			getColorFromPalette: function(t, e, n) {
				e = e || this;
				var i = a_(e),
					r = i.colorIdx || 0,
					a = i.colorNameMap = i.colorNameMap || {};
				if (a.hasOwnProperty(t)) return a[t];
				var o = Li(this.get("color", !0)),
					s = this.get("colorLayer", !0),
					l = null != n && s ? mo(s, n) : o;
				if (l = l || o, l && l.length) {
					var u = l[r];
					return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u
				}
			}
		},
		s_ = {
			cartesian2d: function(t, e, n, i) {
				var r = t.getReferringComponents("xAxis")[0],
					a = t.getReferringComponents("yAxis")[0];
				e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), yo(r) && (i.set("x", r), e
					.firstCategoryDimIndex = 0), yo(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
			},
			singleAxis: function(t, e, n, i) {
				var r = t.getReferringComponents("singleAxis")[0];
				e.coordSysDims = ["single"], n.set("single", r), yo(r) && (i.set("single", r), e
					.firstCategoryDimIndex = 0)
			},
			polar: function(t, e, n, i) {
				var r = t.getReferringComponents("polar")[0],
					a = r.findAxisModel("radiusAxis"),
					o = r.findAxisModel("angleAxis");
				e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), yo(a) && (i.set(
					"radius", a), e.firstCategoryDimIndex = 0), yo(o) && (i.set("angle", o), e
					.firstCategoryDimIndex = 1)
			},
			geo: function(t, e) {
				e.coordSysDims = ["lng", "lat"]
			},
			parallel: function(t, e, n, i) {
				var r = t.ecModel,
					a = r.getComponent("parallel", t.get("parallelIndex")),
					o = e.coordSysDims = a.dimensions.slice();
				f(a.parallelAxisIndex, function(t, a) {
					var s = r.getComponent("parallelAxis", t),
						l = o[a];
					n.set(l, s), yo(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e
						.firstCategoryDimIndex = a)
				})
			}
		},
		l_ = "original",
		u_ = "arrayRows",
		h_ = "objectRows",
		c_ = "keyedColumns",
		d_ = "unknown",
		f_ = "typedArray",
		p_ = "column",
		g_ = "row";
	_o.seriesDataToSource = function(t) {
		return new _o({
			data: t,
			sourceFormat: I(t) ? f_ : l_,
			fromDataset: !1
		})
	}, Yi(_o);
	var m_ = Gi(),
		v_ = "\x00_ec_inner",
		y_ = Pa.extend({
			init: function(t, e, n, i) {
				n = n || {}, this.option = null, this._theme = new Pa(n), this._optionManager = i
			},
			setOption: function(t, e) {
				O(!(v_ in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this
					.resetOption(null)
			},
			resetOption: function(t) {
				var e = !1,
					n = this._optionManager;
				if (!t || "recreate" === t) {
					var i = n.mountOption("recreate" === t);
					this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : zo.call(
						this, i), e = !0
				}
				if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t ||
					"timeline" === t) {
					var r = n.getTimelineOption(this);
					r && (this.mergeOption(r), e = !0)
				}
				if (!t || "recreate" === t || "media" === t) {
					var a = n.getMediaOption(this, this._api);
					a.length && f(a, function(t) {
						this.mergeOption(t, e = !0)
					}, this)
				}
				return e
			},
			mergeOption: function(t) {
				function e(e, i) {
					var r = Li(t[e]),
						s = Ei(a.get(e), r);
					Bi(s), f(s, function(t) {
						var n = t.option;
						S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = Eo(e, n, t.exist))
					});
					var l = Ro(a, i);
					n[e] = [], a.set(e, []), f(s, function(t, i) {
						var r = t.exist,
							s = t.option;
						if (O(S(s) || r, "Empty component definition"), s) {
							var u = n_.getClass(e, t.keyInfo.subType, !0);
							if (r && r instanceof u) r.name = t.keyInfo.name, r.mergeOption(s,
								this), r.optionUpdated(s, !1);
							else {
								var h = o({
									dependentModels: l,
									componentIndex: i
								}, t.keyInfo);
								r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r
									.optionUpdated(null, !0)
							}
						} else r.mergeOption({}, this), r.optionUpdated({}, !1);
						a.get(e)[i] = r, n[e][i] = r.option
					}, this), "series" === e && Bo(this, a.get("series"))
				}
				var n = this.option,
					a = this._componentsMap,
					s = [];
				bo(this), f(t, function(t, e) {
						null != t && (n_.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(
							n[e], t, !0))
					}), n_.topologicalTravel(s, n_.getAllClassMainTypes(), e, this), this
					._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || [])
			},
			getOption: function() {
				var t = i(this.option);
				return f(t, function(e, n) {
					if (n_.hasClass(n)) {
						for (var e = Li(e), i = e.length - 1; i >= 0; i--) Fi(e[i]) && e.splice(i,
							1);
						t[n] = e
					}
				}), delete t[v_], t
			},
			getTheme: function() {
				return this._theme
			},
			getComponent: function(t, e) {
				var n = this._componentsMap.get(t);
				return n ? n[e || 0] : void 0
			},
			queryComponents: function(t) {
				var e = t.mainType;
				if (!e) return [];
				var n = t.index,
					i = t.id,
					r = t.name,
					a = this._componentsMap.get(e);
				if (!a || !a.length) return [];
				var o;
				if (null != n) x(n) || (n = [n]), o = m(p(n, function(t) {
					return a[t]
				}), function(t) {
					return !!t
				});
				else if (null != i) {
					var s = x(i);
					o = m(a, function(t) {
						return s && u(i, t.id) >= 0 || !s && t.id === i
					})
				} else if (null != r) {
					var l = x(r);
					o = m(a, function(t) {
						return l && u(r, t.name) >= 0 || !l && t.name === r
					})
				} else o = a.slice();
				return No(o, t)
			},
			findComponents: function(t) {
				function e(t) {
					var e = r + "Index",
						n = r + "Id",
						i = r + "Name";
					return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
						mainType: r,
						index: t[e],
						id: t[n],
						name: t[i]
					}
				}

				function n(e) {
					return t.filter ? m(e, t.filter) : e
				}
				var i = t.query,
					r = t.mainType,
					a = e(i),
					o = a ? this.queryComponents(a) : this._componentsMap.get(r);
				return n(No(o, t))
			},
			eachComponent: function(t, e, n) {
				var i = this._componentsMap;
				if ("function" == typeof t) n = e, e = t, i.each(function(t, i) {
					f(t, function(t, r) {
						e.call(n, i, t, r)
					})
				});
				else if (b(t)) f(i.get(t), e, n);
				else if (S(t)) {
					var r = this.findComponents(t);
					f(r, e, n)
				}
			},
			getSeriesByName: function(t) {
				var e = this._componentsMap.get("series");
				return m(e, function(e) {
					return e.name === t
				})
			},
			getSeriesByIndex: function(t) {
				return this._componentsMap.get("series")[t]
			},
			getSeriesByType: function(t) {
				var e = this._componentsMap.get("series");
				return m(e, function(e) {
					return e.subType === t
				})
			},
			getSeries: function() {
				return this._componentsMap.get("series").slice()
			},
			getSeriesCount: function() {
				return this._componentsMap.get("series").length
			},
			eachSeries: function(t, e) {
				f(this._seriesIndices, function(n) {
					var i = this._componentsMap.get("series")[n];
					t.call(e, i, n)
				}, this)
			},
			eachRawSeries: function(t, e) {
				f(this._componentsMap.get("series"), t, e)
			},
			eachSeriesByType: function(t, e, n) {
				f(this._seriesIndices, function(i) {
					var r = this._componentsMap.get("series")[i];
					r.subType === t && e.call(n, r, i)
				}, this)
			},
			eachRawSeriesByType: function(t, e, n) {
				return f(this.getSeriesByType(t), e, n)
			},
			isSeriesFiltered: function(t) {
				return null == this._seriesIndicesMap.get(t.componentIndex)
			},
			getCurrentSeriesIndices: function() {
				return (this._seriesIndices || []).slice()
			},
			filterSeries: function(t, e) {
				var n = m(this._componentsMap.get("series"), t, e);
				Bo(this, n)
			},
			restoreData: function(t) {
				var e = this._componentsMap;
				Bo(this, e.get("series"));
				var n = [];
				e.each(function(t, e) {
					n.push(e)
				}), n_.topologicalTravel(n, n_.getAllClassMainTypes(), function(n) {
					f(e.get(n), function(e) {
						("series" !== n || !Lo(e, t)) && e.restoreData()
					})
				})
			}
		});
	c(y_, o_);
	var __ = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed",
			"on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel",
			"getViewOfSeriesModel"
		],
		x_ = {};
	Vo.prototype = {
		constructor: Vo,
		create: function(t, e) {
			var n = [];
			f(x_, function(i) {
				var r = i.create(t, e);
				n = n.concat(r || [])
			}), this._coordinateSystems = n
		},
		update: function(t, e) {
			f(this._coordinateSystems, function(n) {
				n.update && n.update(t, e)
			})
		},
		getCoordinateSystems: function() {
			return this._coordinateSystems.slice()
		}
	}, Vo.register = function(t, e) {
		x_[t] = e
	}, Vo.get = function(t) {
		return x_[t]
	};
	var w_ = f,
		b_ = i,
		S_ = p,
		M_ = r,
		I_ = /^(min|max)?(.+)$/;
	Go.prototype = {
		constructor: Go,
		setOption: function(t, e) {
			t && f(Li(t.series), function(t) {
				t && t.data && I(t.data) && R(t.data)
			}), t = b_(t, !0);
			var n = this._optionBackup,
				i = Ho.call(this, t, e, !n);
			this._newBaseOption = i.baseOption, n ? (Zo(n.baseOption, i.baseOption), i.timelineOptions
					.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList =
						i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this
				._optionBackup = i
		},
		mountOption: function(t) {
			var e = this._optionBackup;
			return this._timelineOptions = S_(e.timelineOptions, b_), this._mediaList = S_(e.mediaList, b_),
				this._mediaDefault = b_(e.mediaDefault), this._currentMediaIndices = [], b_(t ? e
					.baseOption : this._newBaseOption)
		},
		getTimelineOption: function(t) {
			var e, n = this._timelineOptions;
			if (n.length) {
				var i = t.getComponent("timeline");
				i && (e = b_(n[i.getCurrentIndex()], !0))
			}
			return e
		},
		getMediaOption: function() {
			var t = this._api.getWidth(),
				e = this._api.getHeight(),
				n = this._mediaList,
				i = this._mediaDefault,
				r = [],
				a = [];
			if (!n.length && !i) return a;
			for (var o = 0, s = n.length; s > o; o++) Wo(n[o].query, t, e) && r.push(o);
			return !r.length && i && (r = [-1]), r.length && !Xo(r, this._currentMediaIndices) && (a = S_(r,
				function(t) {
					return b_(-1 === t ? i.option : n[t].option)
				})), this._currentMediaIndices = r, a
		}
	};
	var T_ = f,
		C_ = S,
		D_ = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
		A_ = function(t, e) {
			T_(Qo(t.series), function(t) {
				C_(t) && Jo(t)
			});
			var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
			e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), T_(n, function(e) {
				T_(Qo(t[e]), function(t) {
					t && (Ko(t, "axisLabel"), Ko(t.axisPointer, "label"))
				})
			}), T_(Qo(t.parallel), function(t) {
				var e = t && t.parallelAxisDefault;
				Ko(e, "axisLabel"), Ko(e && e.axisPointer, "label")
			}), T_(Qo(t.calendar), function(t) {
				jo(t, "itemStyle"), Ko(t, "dayLabel"), Ko(t, "monthLabel"), Ko(t, "yearLabel")
			}), T_(Qo(t.radar), function(t) {
				Ko(t, "name")
			}), T_(Qo(t.geo), function(t) {
				C_(t) && ($o(t), T_(Qo(t.regions), function(t) {
					$o(t)
				}))
			}), T_(Qo(t.timeline), function(t) {
				$o(t), jo(t, "label"), jo(t, "itemStyle"), jo(t, "controlStyle", !0);
				var e = t.data;
				x(e) && f(e, function(t) {
					S(t) && (jo(t, "label"), jo(t, "itemStyle"))
				})
			}), T_(Qo(t.toolbox), function(t) {
				jo(t, "iconStyle"), T_(t.feature, function(t) {
					jo(t, "iconStyle")
				})
			}), Ko(ts(t.axisPointer), "label"), Ko(ts(t.tooltip).axisPointer, "label")
		},
		k_ = [
			["x", "left"],
			["y", "top"],
			["x2", "right"],
			["y2", "bottom"]
		],
		P_ = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
		L_ = function(t, e) {
			A_(t, e), t.series = Li(t.series), f(t.series, function(t) {
				if (S(t)) {
					var e = t.type;
					if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t
						.clockWise), "gauge" === e) {
						var n = es(t, "pointer.color");
						null != n && ns(t, "itemStyle.normal.color", n)
					}
					is(t)
				}
			}), t.dataRange && (t.visualMap = t.dataRange), f(P_, function(e) {
				var n = t[e];
				n && (x(n) || (n = [n]), f(n, function(t) {
					is(t)
				}))
			})
		},
		O_ = function(t) {
			var e = N();
			t.eachSeries(function(t) {
				var n = t.get("stack");
				if (n) {
					var i = e.get(n) || e.set(n, []),
						r = t.getData(),
						a = {
							stackResultDimension: r.getCalculationInfo("stackResultDimension"),
							stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
							stackedDimension: r.getCalculationInfo("stackedDimension"),
							stackedByDimension: r.getCalculationInfo("stackedByDimension"),
							isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
							data: r,
							seriesModel: t
						};
					if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
					i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i
						.push(a)
				}
			}), e.each(rs)
		},
		z_ = as.prototype;
	z_.pure = !1, z_.persistent = !0, z_.getSource = function() {
		return this._source
	};
	var R_ = {
			arrayRows_column: {
				pure: !0,
				count: function() {
					return Math.max(0, this._data.length - this._source.startIndex)
				},
				getItem: function(t) {
					return this._data[t + this._source.startIndex]
				},
				appendData: ls
			},
			arrayRows_row: {
				pure: !0,
				count: function() {
					var t = this._data[0];
					return t ? Math.max(0, t.length - this._source.startIndex) : 0
				},
				getItem: function(t) {
					t += this._source.startIndex;
					for (var e = [], n = this._data, i = 0; i < n.length; i++) {
						var r = n[i];
						e.push(r ? r[t] : null)
					}
					return e
				},
				appendData: function() {
					throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
				}
			},
			objectRows: {
				pure: !0,
				count: os,
				getItem: ss,
				appendData: ls
			},
			keyedColumns: {
				pure: !0,
				count: function() {
					var t = this._source.dimensionsDefine[0].name,
						e = this._data[t];
					return e ? e.length : 0
				},
				getItem: function(t) {
					for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
						var r = this._data[n[i].name];
						e.push(r ? r[t] : null)
					}
					return e
				},
				appendData: function(t) {
					var e = this._data;
					f(t, function(t, n) {
						for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
					})
				}
			},
			original: {
				count: os,
				getItem: ss,
				appendData: ls
			},
			typedArray: {
				persistent: !1,
				pure: !0,
				count: function() {
					return this._data ? this._data.length / this._dimSize : 0
				},
				getItem: function(t, e) {
					t -= this._offset, e = e || [];
					for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
					return e
				},
				appendData: function(t) {
					this._data = t
				},
				clean: function() {
					this._offset += this.count(), this._data = null
				}
			}
		},
		E_ = {
			arrayRows: us,
			objectRows: function(t, e, n, i) {
				return null != n ? t[i] : t
			},
			keyedColumns: us,
			original: function(t, e, n) {
				var i = zi(t);
				return null != n && i instanceof Array ? i[n] : i
			},
			typedArray: us
		},
		B_ = {
			arrayRows: hs,
			objectRows: function(t, e) {
				return cs(t[e], this._dimensionInfos[e])
			},
			keyedColumns: hs,
			original: function(t, e, n, i) {
				var r = t && (null == t.value ? t : t.value);
				return !this._rawData.pure && Ri(t) && (this.hasItemOption = !0), cs(r instanceof Array ? r[i] :
					r, this._dimensionInfos[e])
			},
			typedArray: function(t, e, n, i) {
				return t[i]
			}
		},
		N_ = /\{@(.+?)\}/g,
		F_ = {
			getDataParams: function(t, e) {
				var n = this.getData(e),
					i = this.getRawValue(t, e),
					r = n.getRawIndex(t),
					a = n.getName(t),
					o = n.getRawDataItem(t),
					s = n.getItemVisual(t, "color");
				return {
					componentType: this.mainType,
					componentSubType: this.subType,
					seriesType: "series" === this.mainType ? this.subType : null,
					seriesIndex: this.seriesIndex,
					seriesId: this.id,
					seriesName: this.name,
					name: a,
					dataIndex: r,
					data: o,
					dataType: e,
					value: i,
					color: s,
					marker: ao(s),
					$vars: ["seriesName", "name", "value"]
				}
			},
			getFormattedLabel: function(t, e, n, i, r) {
				e = e || "normal";
				var a = this.getData(n),
					o = a.getItemModel(t),
					s = this.getDataParams(t, n);
				null != i && s.value instanceof Array && (s.value = s.value[i]);
				var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
				if ("function" == typeof l) return s.status = e, l(s);
				if ("string" == typeof l) {
					var u = io(l, s);
					return u.replace(N_, function(e, n) {
						var i = n.length;
						return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i -
							1)), ds(a, t, n)
					})
				}
			},
			getRawValue: function(t, e) {
				return ds(this.getData(e), t)
			},
			formatTooltip: function() {}
		},
		V_ = gs.prototype;
	V_.perform = function(t) {
		function e(t) {
			return !(t >= 1) && (t = 1), t
		}
		var n = this._upstream,
			i = t && t.skip;
		if (this._dirty && n) {
			var r = this.context;
			r.data = r.outputData = n.context.outputData
		}
		this.__pipeline && (this.__pipeline.currentTask = this);
		var a;
		this._plan && !i && (a = this._plan(this.context));
		var o = e(this._modBy),
			s = this._modDataCount || 0,
			l = e(t && t.modBy),
			u = t && t.modDataCount || 0;
		(o !== l || s !== u) && (a = "reset");
		var h;
		(this._dirty || "reset" === a) && (this._dirty = !1, h = vs(this, i)), this._modBy = l, this
			._modDataCount = u;
		var c = t && t.step;
		if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this
			._progress) {
			var d = this._dueIndex,
				f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
			if (!i && (h || f > d)) {
				var p = this._progress;
				if (x(p))
					for (var g = 0; g < p.length; g++) ms(this, p[g], d, f, l, u);
				else ms(this, p, d, f, l, u)
			}
			this._dueIndex = f;
			var m = null != this._settedOutputEnd ? this._settedOutputEnd : f;
			this._outputDueEnd = m
		} else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd :
			this._dueEnd;
		return this.unfinished()
	};
	var G_ = function() {
		function t() {
			return n > i ? i++ : null
		}

		function e() {
			var t = i % o * r + Math.ceil(i / o),
				e = i >= n ? null : a > t ? t : i;
			return i++, e
		}
		var n, i, r, a, o, s = {
			reset: function(l, u, h, c) {
				i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
			}
		};
		return s
	}();
	V_.dirty = function() {
		this._dirty = !0, this._onDirty && this._onDirty(this.context)
	}, V_.unfinished = function() {
		return this._progress && this._dueIndex < this._dueEnd
	}, V_.pipe = function(t) {
		(this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
	}, V_.dispose = function() {
		this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this
			._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
	}, V_.getUpstream = function() {
		return this._upstream
	}, V_.getDownstream = function() {
		return this._downstream
	}, V_.setOutputEnd = function(t) {
		this._outputDueEnd = this._settedOutputEnd = t
	};
	var H_ = Gi(),
		W_ = n_.extend({
			type: "series.__base__",
			seriesIndex: 0,
			coordinateSystem: null,
			defaultOption: null,
			legendDataProvider: null,
			visualColorAccessPath: "itemStyle.color",
			layoutMode: null,
			init: function(t, e, n) {
				this.seriesIndex = this.componentIndex, this.dataTask = ps({
					count: xs,
					reset: ws
				}), this.dataTask.context = {
					model: this
				}, this.mergeDefaultAndTheme(t, n), So(this);
				var i = this.getInitialData(t, n);
				Ss(i, this), this.dataTask.context.data = i, H_(this).dataBeforeProcessed = i, ys(this)
			},
			mergeDefaultAndTheme: function(t, e) {
				var n = this.layoutMode,
					i = n ? fo(t) : {},
					a = this.subType;
				n_.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this
						.getDefaultOption()), Oi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n &&
					co(t, i, n)
			},
			mergeOption: function(t, e) {
				t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
				var n = this.layoutMode;
				n && co(this.option, t, n), So(this);
				var i = this.getInitialData(t, e);
				Ss(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, H_(this)
					.dataBeforeProcessed = i, ys(this)
			},
			fillDataTextStyle: function(t) {
				if (t && !I(t))
					for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Oi(t[n], "label",
						e)
			},
			getInitialData: function() {},
			appendData: function(t) {
				var e = this.getRawData();
				e.appendData(t.data)
			},
			getData: function(t) {
				var e = Is(this);
				if (e) {
					var n = e.context.data;
					return null == t ? n : n.getLinkedData(t)
				}
				return H_(this).data
			},
			setData: function(t) {
				var e = Is(this);
				if (e) {
					var n = e.context;
					n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !==
						this.dataTask && (n.data = t)
				}
				H_(this).data = t
			},
			getSource: function() {
				return wo(this)
			},
			getRawData: function() {
				return H_(this).dataBeforeProcessed
			},
			getBaseAxis: function() {
				var t = this.coordinateSystem;
				return t && t.getBaseAxis && t.getBaseAxis()
			},
			formatTooltip: function(t, e) {
				function n(n) {
					function i(t, n) {
						var i = r.getDimensionInfo(n);
						if (i && i.otherDims.tooltip !== !1) {
							var a = i.type,
								l = ao({
									color: u,
									type: "subItem"
								}),
								h = (o ? l + no(i.displayName || "-") + ": " : "") + no("ordinal" === a ?
									t + "" : "time" === a ? e ? "" : so("yyyy/MM/dd hh:mm:ss", t) : to(t));
							h && s.push(h)
						}
					}
					var o = g(n, function(t, e, n) {
							var i = r.getDimensionInfo(n);
							return t |= i && i.tooltip !== !1 && null != i.displayName
						}, 0),
						s = [];
					return a.length ? f(a, function(e) {
						i(ds(r, t, e), e)
					}) : f(n, i), (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ")
				}

				function i(t) {
					return no(to(t))
				}
				var r = this.getData(),
					a = r.mapDimension("defaultedTooltip", !0),
					o = a.length,
					s = this.getRawValue(t),
					l = x(s),
					u = r.getItemVisual(t, "color");
				S(u) && u.colorStops && (u = (u.colorStops[0] || {}).color), u = u || "transparent";
				var h = o > 1 || l && !o ? n(s) : i(o ? ds(r, t, a[0]) : l ? s[0] : s),
					c = ao(u),
					d = r.getName(t),
					p = this.name;
				return Ni(this) || (p = ""), p = p ? no(p) + (e ? ": " : "<br/>") : "", e ? c + p + h : p +
					c + (d ? no(d) + ": " + h : h)
			},
			isAnimationEnabled: function() {
				if (Up.node) return !1;
				var t = this.getShallow("animation");
				return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
			},
			restoreData: function() {
				this.dataTask.dirty()
			},
			getColorFromPalette: function(t, e, n) {
				var i = this.ecModel,
					r = o_.getColorFromPalette.call(this, t, e, n);
				return r || (r = i.getColorFromPalette(t, e, n)), r
			},
			coordDimToDataDim: function(t) {
				return this.getRawData().mapDimension(t, !0)
			},
			getProgressive: function() {
				return this.get("progressive")
			},
			getProgressiveThreshold: function() {
				return this.get("progressiveThreshold")
			},
			getAxisTooltipData: null,
			getTooltipPosition: null,
			pipeTask: null,
			preventIncremental: null,
			pipelineContext: null
		});
	c(W_, F_), c(W_, o_);
	var U_ = function() {
		this.group = new qg, this.uid = za("viewComponent")
	};
	U_.prototype = {
		constructor: U_,
		init: function() {},
		render: function() {},
		dispose: function() {}
	};
	var X_ = U_.prototype;
	X_.updateView = X_.updateLayout = X_.updateVisual = function() {}, ji(U_), Ji(U_, {
		registerWhenExtend: !0
	});
	var Z_ = function() {
			var t = Gi();
			return function(e) {
				var n = t(e),
					i = e.pipelineContext,
					r = n.large,
					a = n.progressiveRender,
					o = n.large = i.large,
					s = n.progressiveRender = i.progressiveRender;
				return !!(r ^ o || a ^ s) && "reset"
			}
		},
		q_ = Gi(),
		j_ = Z_();
	Ts.prototype = {
		type: "chart",
		init: function() {},
		render: function() {},
		highlight: function(t, e, n, i) {
			Ds(t.getData(), i, "emphasis")
		},
		downplay: function(t, e, n, i) {
			Ds(t.getData(), i, "normal")
		},
		remove: function() {
			this.group.removeAll()
		},
		dispose: function() {},
		incrementalPrepareRender: null,
		incrementalRender: null,
		updateTransform: null
	};
	var Y_ = Ts.prototype;
	Y_.updateView = Y_.updateLayout = Y_.updateVisual = function(t, e, n, i) {
		this.render(t, e, n, i)
	}, ji(Ts, ["dispose"]), Ji(Ts, {
		registerWhenExtend: !0
	}), Ts.markUpdateMethod = function(t, e) {
		q_(t).updateMethod = e
	};
	var K_ = {
			incrementalPrepareRender: {
				progress: function(t, e) {
					e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
				}
			},
			render: {
				forceFirstProgress: !0,
				progress: function(t, e) {
					e.view.render(e.model, e.ecModel, e.api, e.payload)
				}
			}
		},
		$_ = "\x00__throttleOriginMethod",
		J_ = "\x00__throttleRate",
		Q_ = "\x00__throttleType",
		tx = {
			createOnAllSeries: !0,
			performRawSeries: !0,
			reset: function(t, e) {
				var n = t.getData(),
					i = (t.visualColorAccessPath || "itemStyle.color").split("."),
					r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
				if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
					"function" != typeof r || r instanceof wy || n.each(function(e) {
						n.setItemVisual(e, "color", r(t.getDataParams(e)))
					});
					var a = function(t, e) {
						var n = t.getItemModel(e),
							r = n.get(i, !0);
						null != r && t.setItemVisual(e, "color", r)
					};
					return {
						dataEach: n.hasItemOption ? a : null
					}
				}
			}
		},
		ex = {
			toolbox: {
				brush: {
					title: {
						rect: "矩形选择",
						polygon: "圈选",
						lineX: "横向选择",
						lineY: "纵向选择",
						keep: "保持选择",
						clear: "清除选择"
					}
				},
				dataView: {
					title: "数据视图",
					lang: ["数据视图", "关闭", "刷新"]
				},
				dataZoom: {
					title: {
						zoom: "区域缩放",
						back: "区域缩放还原"
					}
				},
				magicType: {
					title: {
						line: "切换为折线图",
						bar: "切换为柱状图",
						stack: "切换为堆叠",
						tiled: "切换为平铺"
					}
				},
				restore: {
					title: "还原"
				},
				saveAsImage: {
					title: "保存为图片",
					lang: ["右键另存为图片"]
				}
			},
			series: {
				typeNames: {
					pie: "饼图",
					bar: "柱状图",
					line: "折线图",
					scatter: "散点图",
					effectScatter: "涟漪散点图",
					radar: "雷达图",
					tree: "树图",
					treemap: "矩形树图",
					boxplot: "箱型图",
					candlestick: "K线图",
					k: "K线图",
					heatmap: "热力图",
					map: "地图",
					parallel: "平行坐标图",
					lines: "线图",
					graph: "关系图",
					sankey: "桑基图",
					funnel: "漏斗图",
					gauge: "仪表盘图",
					pictorialBar: "象形柱图",
					themeRiver: "主题河流图",
					sunburst: "旭日图"
				}
			},
			aria: {
				general: {
					withTitle: "这是一个关于“{title}”的图表。",
					withoutTitle: "这是一个图表，"
				},
				series: {
					single: {
						prefix: "",
						withName: "图表类型是{seriesType}，表示{seriesName}。",
						withoutName: "图表类型是{seriesType}。"
					},
					multiple: {
						prefix: "它由{seriesCount}个图表系列组成。",
						withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
						withoutName: "第{seriesId}个系列是一个{seriesType}，",
						separator: {
							middle: "；",
							end: "。"
						}
					}
				},
				data: {
					allData: "其数据是——",
					partialData: "其中，前{displayCnt}项是——",
					withName: "{name}的数据是{value}",
					withoutName: "{value}",
					separator: {
						middle: "，",
						end: ""
					}
				}
			}
		},
		nx = function(t, e) {
			function n(t, e) {
				if ("string" != typeof t) return t;
				var n = t;
				return f(e, function(t, e) {
					n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
				}), n
			}

			function i(t) {
				var e = o.get(t);
				if (null == e) {
					for (var n = t.split("."), i = ex.aria, r = 0; r < n.length; ++r) i = i[n[r]];
					return i
				}
				return e
			}

			function r() {
				var t = e.getModel("title").option;
				return t && t.length && (t = t[0]), t && t.text
			}

			function a(t) {
				return ex.series.typeNames[t] || "自定义图"
			}
			var o = e.getModel("aria");
			if (o.get("show")) {
				if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
				var s = 0;
				e.eachSeries(function() {
					++s
				}, this);
				var l, u = o.get("data.maxCount") || 10,
					h = o.get("series.maxCount") || 10,
					c = Math.min(s, h);
				if (!(1 > s)) {
					var d = r();
					l = d ? n(i("general.withTitle"), {
						title: d
					}) : i("general.withoutTitle");
					var p = [],
						g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
					l += n(i(g), {
							seriesCount: s
						}), e.eachSeries(function(t, e) {
							if (c > e) {
								var r, o = t.get("name"),
									l = "series." + (s > 1 ? "multiple" : "single") + ".";
								r = i(o ? l + "withName" : l + "withoutName"), r = n(r, {
									seriesId: t.seriesIndex,
									seriesName: t.get("name"),
									seriesType: a(t.subType)
								});
								var h = t.getData();
								window.data = h, r += h.count() > u ? n(i("data.partialData"), {
									displayCnt: u
								}) : i("data.allData");
								for (var d = [], f = 0; f < h.count(); f++)
									if (u > f) {
										var g = h.getName(f),
											m = ds(h, f);
										d.push(n(i(g ? "data.withName" : "data.withoutName"), {
											name: g,
											value: m
										}))
									} r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(
									r)
							}
						}), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"),
						t.setAttribute("aria-label", l)
				}
			}
		},
		ix = Math.PI,
		rx = function(t, e) {
			e = e || {}, s(e, {
				text: "loading",
				color: "#c23531",
				textColor: "#000",
				maskColor: "rgba(255, 255, 255, 0.8)",
				zlevel: 0
			});
			var n = new gy({
					style: {
						fill: e.maskColor
					},
					zlevel: e.zlevel,
					z: 1e4
				}),
				i = new _y({
					shape: {
						startAngle: -ix / 2,
						endAngle: -ix / 2 + .1,
						r: 10
					},
					style: {
						stroke: e.color,
						lineCap: "round",
						lineWidth: 5
					},
					zlevel: e.zlevel,
					z: 10001
				}),
				r = new gy({
					style: {
						fill: "none",
						text: e.text,
						textPosition: "right",
						textDistance: 10,
						textFill: e.textColor
					},
					zlevel: e.zlevel,
					z: 10001
				});
			i.animateShape(!0).when(1e3, {
				endAngle: 3 * ix / 2
			}).start("circularInOut"), i.animateShape(!0).when(1e3, {
				startAngle: 3 * ix / 2
			}).delay(300).start("circularInOut");
			var a = new qg;
			return a.add(i), a.add(r), a.add(n), a.resize = function() {
				var e = t.getWidth() / 2,
					a = t.getHeight() / 2;
				i.setShape({
					cx: e,
					cy: a
				});
				var o = i.shape.r;
				r.setShape({
					x: e - o,
					y: a - o,
					width: 2 * o,
					height: 2 * o
				}), n.setShape({
					x: 0,
					y: 0,
					width: t.getWidth(),
					height: t.getHeight()
				})
			}, a.resize(), a
		},
		ax = Os.prototype;
	ax.restoreData = function(t, e) {
		t.restoreData(e), this._stageTaskMap.each(function(t) {
			var e = t.overallTask;
			e && e.dirty()
		})
	}, ax.getPerformArgs = function(t, e) {
		if (t.__pipeline) {
			var n = this._pipelineMap.get(t.__pipeline.id),
				i = n.context,
				r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n
				.blockIndex,
				a = r ? n.step : null,
				o = i && i.modDataCount,
				s = null != o ? Math.ceil(o / a) : null;
			return {
				step: a,
				modBy: s,
				modDataCount: o
			}
		}
	}, ax.getPipeline = function(t) {
		return this._pipelineMap.get(t)
	}, ax.updateStreamModes = function(t, e) {
		var n = this._pipelineMap.get(t.uid),
			i = t.getData(),
			r = i.count(),
			a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
			o = t.get("large") && r >= t.get("largeThreshold"),
			s = "mod" === t.get("progressiveChunkMode") ? r : null;
		t.pipelineContext = n.context = {
			progressiveRender: a,
			modDataCount: s,
			large: o
		}
	}, ax.restorePipelines = function(t) {
		var e = this,
			n = e._pipelineMap = N();
		t.eachSeries(function(t) {
			var i = t.getProgressive(),
				r = t.uid;
			n.set(r, {
				id: r,
				head: null,
				tail: null,
				threshold: t.getProgressiveThreshold(),
				progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
				blockIndex: -1,
				step: Math.round(i || 700),
				count: 0
			}), Xs(e, t, t.dataTask)
		})
	}, ax.prepareStageTasks = function() {
		var t = this._stageTaskMap,
			e = this.ecInstance.getModel(),
			n = this.api;
		f(this._allHandlers, function(i) {
			var r = t.get(i.uid) || t.set(i.uid, []);
			i.reset && Rs(this, i, r, e, n), i.overallReset && Es(this, i, r, e, n)
		}, this)
	}, ax.prepareView = function(t, e, n, i) {
		var r = t.renderTask,
			a = r.context;
		a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Xs(this, e, r)
	}, ax.performDataProcessorTasks = function(t, e) {
		zs(this, this._dataProcessorHandlers, t, e, {
			block: !0
		})
	}, ax.performVisualTasks = function(t, e, n) {
		zs(this, this._visualHandlers, t, e, n)
	}, ax.performSeriesTasks = function(t) {
		var e;
		t.eachSeries(function(t) {
			e |= t.dataTask.perform()
		}), this.unfinished |= e
	}, ax.plan = function() {
		this._pipelineMap.each(function(t) {
			var e = t.tail;
			do {
				if (e.__block) {
					t.blockIndex = e.__idxInPipeline;
					break
				}
				e = e.getUpstream()
			} while (e)
		})
	};
	var ox = ax.updatePayload = function(t, e) {
			"remain" !== e && (t.context.payload = e)
		},
		sx = Ws(0);
	Os.wrapStageHandler = function(t, e) {
		return w(t) && (t = {
			overallReset: t,
			seriesType: Zs(t)
		}), t.uid = za("stageHandler"), e && (t.visualType = e), t
	};
	var lx, ux = {},
		hx = {};
	qs(ux, y_), qs(hx, Fo), ux.eachSeriesByType = ux.eachRawSeriesByType = function(t) {
		lx = t
	}, ux.eachComponent = function(t) {
		"series" === t.mainType && t.subType && (lx = t.subType)
	};
	var cx = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1",
			"#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"
		],
		dx = {
			color: cx,
			colorLayer: [
				["#37A2DA", "#ffd85c", "#fd7b5f"],
				["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
				["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA",
					"#96BFFF"
				], cx
			]
		},
		fx = "#eee",
		px = function() {
			return {
				axisLine: {
					lineStyle: {
						color: fx
					}
				},
				axisTick: {
					lineStyle: {
						color: fx
					}
				},
				axisLabel: {
					textStyle: {
						color: fx
					}
				},
				splitLine: {
					lineStyle: {
						type: "dashed",
						color: "#aaa"
					}
				},
				splitArea: {
					areaStyle: {
						color: fx
					}
				}
			}
		},
		gx = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab",
			"#91ca8c", "#f49f42"
		],
		mx = {
			color: gx,
			backgroundColor: "#333",
			tooltip: {
				axisPointer: {
					lineStyle: {
						color: fx
					},
					crossStyle: {
						color: fx
					}
				}
			},
			legend: {
				textStyle: {
					color: fx
				}
			},
			textStyle: {
				color: fx
			},
			title: {
				textStyle: {
					color: fx
				}
			},
			toolbox: {
				iconStyle: {
					normal: {
						borderColor: fx
					}
				}
			},
			dataZoom: {
				textStyle: {
					color: fx
				}
			},
			visualMap: {
				textStyle: {
					color: fx
				}
			},
			timeline: {
				lineStyle: {
					color: fx
				},
				itemStyle: {
					normal: {
						color: gx[1]
					}
				},
				label: {
					normal: {
						textStyle: {
							color: fx
						}
					}
				},
				controlStyle: {
					normal: {
						color: fx,
						borderColor: fx
					}
				}
			},
			timeAxis: px(),
			logAxis: px(),
			valueAxis: px(),
			categoryAxis: px(),
			line: {
				symbol: "circle"
			},
			graph: {
				color: gx
			},
			gauge: {
				title: {
					textStyle: {
						color: fx
					}
				}
			},
			candlestick: {
				itemStyle: {
					normal: {
						color: "#FD1050",
						color0: "#0CF49B",
						borderColor: "#FD1050",
						borderColor0: "#0CF49B"
					}
				}
			}
		};
	mx.categoryAxis.splitLine.show = !1, n_.extend({
		type: "dataset",
		defaultOption: {
			seriesLayoutBy: p_,
			sourceHeader: null,
			dimensions: null,
			source: null
		},
		optionUpdated: function() {
			xo(this)
		}
	}), U_.extend({
		type: "dataset"
	});
	var vx = O,
		yx = f,
		_x = w,
		xx = S,
		bx = n_.parseClassType,
		Sx = "4.1.0",
		Mx = {
			zrender: "4.0.4"
		},
		Ix = 1,
		Tx = 1e3,
		Cx = 5e3,
		Dx = 1e3,
		Ax = 2e3,
		kx = 3e3,
		Px = 4e3,
		Lx = 5e3,
		Ox = {
			PROCESSOR: {
				FILTER: Tx,
				STATISTIC: Cx
			},
			VISUAL: {
				LAYOUT: Dx,
				GLOBAL: Ax,
				CHART: kx,
				COMPONENT: Px,
				BRUSH: Lx
			}
		},
		zx = "__flagInMainProcess",
		Rx = "__optionUpdated",
		Ex = /^[a-zA-Z0-9_]+$/;
	Ys.prototype.on = js("on"), Ys.prototype.off = js("off"), Ys.prototype.one = js("one"), c(Ys, dg);
	var Bx = Ks.prototype;
	Bx._onframe = function() {
			if (!this._disposed) {
				var t = this._scheduler;
				if (this[Rx]) {
					var e = this[Rx].silent;
					this[zx] = !0, Js(this), Nx.update.call(this), this[zx] = !1, this[Rx] = !1, nl.call(this, e),
						il.call(this, e)
				} else if (t.unfinished) {
					var n = Ix,
						i = this._model,
						r = this._api;
					t.unfinished = !1;
					do {
						var a = +new Date;
						t.performSeriesTasks(i), t.performDataProcessorTasks(i), tl(this, i), t.performVisualTasks(
							i), ul(this, this._model, r, "remain"), n -= +new Date - a
					} while (n > 0 && t.unfinished);
					t.unfinished || this._zr.flush()
				}
			}
		}, Bx.getDom = function() {
			return this._dom
		}, Bx.getZr = function() {
			return this._zr
		}, Bx.setOption = function(t, e, n) {
			var i;
			if (xx(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[zx] = !0, !this._model || e) {
				var r = new Go(this._api),
					a = this._theme,
					o = this._model = new y_(null, null, a, r);
				o.scheduler = this._scheduler, o.init(null, null, a, r)
			}
			this._model.setOption(t, Wx), n ? (this[Rx] = {
				silent: i
			}, this[zx] = !1) : (Js(this), Nx.update.call(this), this._zr.flush(), this[Rx] = !1, this[zx] = !1,
				nl.call(this, i), il.call(this, i))
		}, Bx.setTheme = function() {
			console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
		}, Bx.getModel = function() {
			return this._model
		}, Bx.getOption = function() {
			return this._model && this._model.getOption()
		}, Bx.getWidth = function() {
			return this._zr.getWidth()
		}, Bx.getHeight = function() {
			return this._zr.getHeight()
		}, Bx.getDevicePixelRatio = function() {
			return this._zr.painter.dpr || window.devicePixelRatio || 1
		}, Bx.getRenderedCanvas = function(t) {
			if (Up.canvasSupported) {
				t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model
					.get("backgroundColor");
				var e = this._zr;
				return e.painter.getRenderedCanvas(t)
			}
		}, Bx.getSvgDataUrl = function() {
			if (Up.svgSupported) {
				var t = this._zr,
					e = t.storage.getDisplayList();
				return f(e, function(t) {
					t.stopAnimation(!0)
				}), t.painter.pathToDataUrl()
			}
		}, Bx.getDataURL = function(t) {
			t = t || {};
			var e = t.excludeComponents,
				n = this._model,
				i = [],
				r = this;
			yx(e, function(t) {
				n.eachComponent({
					mainType: t
				}, function(t) {
					var e = r._componentsMap[t.__viewId];
					e.group.ignore || (i.push(e), e.group.ignore = !0)
				})
			});
			var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t)
				.toDataURL("image/" + (t && t.type || "png"));
			return yx(i, function(t) {
				t.group.ignore = !1
			}), a
		}, Bx.getConnectedDataURL = function(t) {
			if (Up.canvasSupported) {
				var e = this.group,
					n = Math.min,
					r = Math.max,
					a = 1 / 0;
				if (Yx[e]) {
					var o = a,
						s = a,
						l = -a,
						u = -a,
						h = [],
						c = t && t.pixelRatio || 1;
					f(jx, function(a) {
						if (a.group === e) {
							var c = a.getRenderedCanvas(i(t)),
								d = a.getDom().getBoundingClientRect();
							o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), u = r(d.bottom, u), h
								.push({
									dom: c,
									left: d.left,
									top: d.top
								})
						}
					}), o *= c, s *= c, l *= c, u *= c;
					var d = l - o,
						p = u - s,
						g = eg();
					g.width = d, g.height = p;
					var m = Ci(g);
					return yx(h, function(t) {
						var e = new ai({
							style: {
								x: t.left * c - o,
								y: t.top * c - s,
								image: t.dom
							}
						});
						m.add(e)
					}), m.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
				}
				return this.getDataURL(t)
			}
		}, Bx.convertToPixel = _($s, "convertToPixel"), Bx.convertFromPixel = _($s, "convertFromPixel"), Bx
		.containPixel = function(t, e) {
			var n, i = this._model;
			return t = Hi(i, t), f(t, function(t, i) {
				i.indexOf("Models") >= 0 && f(t, function(t) {
					var r = t.coordinateSystem;
					if (r && r.containPoint) n |= !!r.containPoint(e);
					else if ("seriesModels" === i) {
						var a = this._chartsMap[t.__viewId];
						a && a.containPoint && (n |= a.containPoint(e, t))
					}
				}, this)
			}, this), !!n
		}, Bx.getVisual = function(t, e) {
			var n = this._model;
			t = Hi(n, t, {
				defaultMainType: "series"
			});
			var i = t.seriesModel,
				r = i.getData(),
				a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r
				.indexOfRawIndex(t.dataIndex) : null;
			return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
		}, Bx.getViewOfComponentModel = function(t) {
			return this._componentsMap[t.__viewId]
		}, Bx.getViewOfSeriesModel = function(t) {
			return this._chartsMap[t.__viewId]
		};
	var Nx = {
		prepareAndUpdate: function(t) {
			Js(this), Nx.update.call(this, t)
		},
		update: function(t) {
			var e = this._model,
				n = this._api,
				i = this._zr,
				r = this._coordSysMgr,
				a = this._scheduler;
			if (e) {
				a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e,
					t), tl(this, e), r.update(e, n), ol(e), a.performVisualTasks(e, t), sl(this, e, n,
					t);
				var o = e.get("backgroundColor") || "transparent";
				if (Up.canvasSupported) i.setBackgroundColor(o);
				else {
					var s = ze(o);
					o = We(s, "rgb"), 0 === s[3] && (o = "transparent")
				}
				hl(e, n)
			}
		},
		updateTransform: function(t) {
			var e = this._model,
				n = this,
				i = this._api;
			if (e) {
				var r = [];
				e.eachComponent(function(a, o) {
					var s = n.getViewOfComponentModel(o);
					if (s && s.__alive)
						if (s.updateTransform) {
							var l = s.updateTransform(o, e, i, t);
							l && l.update && r.push(s)
						} else r.push(s)
				});
				var a = N();
				e.eachSeries(function(r) {
					var o = n._chartsMap[r.__viewId];
					if (o.updateTransform) {
						var s = o.updateTransform(r, e, i, t);
						s && s.update && a.set(r.uid, 1)
					} else a.set(r.uid, 1)
				}), ol(e), this._scheduler.performVisualTasks(e, t, {
					setDirty: !0,
					dirtyMap: a
				}), ul(n, e, i, t, a), hl(e, this._api)
			}
		},
		updateView: function(t) {
			var e = this._model;
			e && (Ts.markUpdateMethod(t, "updateView"), ol(e), this._scheduler.performVisualTasks(e, t, {
				setDirty: !0
			}), sl(this, this._model, this._api, t), hl(e, this._api))
		},
		updateVisual: function(t) {
			Nx.update.call(this, t)
		},
		updateLayout: function(t) {
			Nx.update.call(this, t)
		}
	};
	Bx.resize = function(t) {
		this._zr.resize(t);
		var e = this._model;
		if (this._loadingFX && this._loadingFX.resize(), e) {
			var n = e.resetOption("media"),
				i = t && t.silent;
			this[zx] = !0, n && Js(this), Nx.update.call(this), this[zx] = !1, nl.call(this, i), il.call(this,
				i)
		}
	}, Bx.showLoading = function(t, e) {
		if (xx(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), qx[t]) {
			var n = qx[t](this._api, e),
				i = this._zr;
			this._loadingFX = n, i.add(n)
		}
	}, Bx.hideLoading = function() {
		this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
	}, Bx.makeActionFromEvent = function(t) {
		var e = o({}, t);
		return e.type = Gx[t.type], e
	}, Bx.dispatchAction = function(t, e) {
		if (xx(e) || (e = {
				silent: !!e
			}), Vx[t.type] && this._model) {
			if (this[zx]) return void this._pendingActions.push(t);
			el.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Up.browser.weChat &&
				this._throttledZrFlush(), nl.call(this, e.silent), il.call(this, e.silent)
		}
	}, Bx.appendData = function(t) {
		var e = t.seriesIndex,
			n = this.getModel(),
			i = n.getSeriesByIndex(e);
		i.appendData(t), this._scheduler.unfinished = !0
	}, Bx.on = js("on"), Bx.off = js("off"), Bx.one = js("one");
	var Fx = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout",
		"contextmenu"
	];
	Bx._initEvents = function() {
		yx(Fx, function(t) {
			this._zr.on(t, function(e) {
				var n, i = this.getModel(),
					r = e.target;
				if ("globalout" === t) n = {};
				else if (r && null != r.dataIndex) {
					var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
					n = a && a.getDataParams(r.dataIndex, r.dataType) || {}
				} else r && r.eventData && (n = o({}, r.eventData));
				n && (n.event = e, n.type = t, this.trigger(t, n))
			}, this)
		}, this), yx(Gx, function(t, e) {
			this._messageCenter.on(e, function(t) {
				this.trigger(e, t)
			}, this)
		}, this)
	}, Bx.isDisposed = function() {
		return this._disposed
	}, Bx.clear = function() {
		this.setOption({
			series: []
		}, !0)
	}, Bx.dispose = function() {
		if (!this._disposed) {
			this._disposed = !0, Ui(this.getDom(), Jx, "");
			var t = this._api,
				e = this._model;
			yx(this._componentsViews, function(n) {
				n.dispose(e, t)
			}), yx(this._chartsViews, function(n) {
				n.dispose(e, t)
			}), this._zr.dispose(), delete jx[this.id]
		}
	}, c(Ks, dg);
	var Vx = {},
		Gx = {},
		Hx = [],
		Wx = [],
		Ux = [],
		Xx = [],
		Zx = {},
		qx = {},
		jx = {},
		Yx = {},
		Kx = new Date - 0,
		$x = new Date - 0,
		Jx = "_echarts_instance_",
		Qx = {},
		tw = yl;
	kl(Ax, tx), Sl(L_), Ml(Cx, O_), Ll("default", rx), Tl({
		type: "highlight",
		event: "highlight",
		update: "highlight"
	}, V), Tl({
		type: "downplay",
		event: "downplay",
		update: "downplay"
	}, V), bl("light", dx), bl("dark", mx);
	var ew = {};
	Gl.prototype = {
		constructor: Gl,
		add: function(t) {
			return this._add = t, this
		},
		update: function(t) {
			return this._update = t, this
		},
		remove: function(t) {
			return this._remove = t, this
		},
		execute: function() {
			var t, e = this._old,
				n = this._new,
				i = {},
				r = {},
				a = [],
				o = [];
			for (Hl(e, i, a, "_oldKeyGetter", this), Hl(n, r, o, "_newKeyGetter", this), t = 0; t < e
				.length; t++) {
				var s = a[t],
					l = r[s];
				if (null != l) {
					var u = l.length;
					u ? (1 === u && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this
						._update(l, t)
				} else this._remove && this._remove(t)
			}
			for (var t = 0; t < o.length; t++) {
				var s = o[t];
				if (r.hasOwnProperty(s)) {
					var l = r[s];
					if (null == l) continue;
					if (l.length)
						for (var h = 0, u = l.length; u > h; h++) this._add && this._add(l[h]);
					else this._add && this._add(l)
				}
			}
		}
	};
	var nw = N(["tooltip", "label", "itemName", "itemId", "seriesName"]),
		iw = S,
		rw = "undefined",
		aw = "e\x00\x00",
		ow = {
			"float": typeof Float64Array === rw ? Array : Float64Array,
			"int": typeof Int32Array === rw ? Array : Int32Array,
			ordinal: Array,
			number: Array,
			time: Array
		},
		sw = typeof Uint32Array === rw ? Array : Uint32Array,
		lw = typeof Uint16Array === rw ? Array : Uint16Array,
		uw = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize",
			"_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"
		],
		hw = ["_extent", "_approximateExtent", "_rawExtent"],
		cw = function(t, e) {
			t = t || ["x", "y"];
			for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
				var o = t[a];
				b(o) && (o = {
					name: o
				});
				var s = o.name;
				o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o
					.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
			}
			this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null,
				this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [],
				this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this
				.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this
				._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this
				._approximateExtent = {}, this._dimensionsSummary = Wl(this), this._invertedIndicesMap = r, this
				._calculationInfo = {}
		},
		dw = cw.prototype;
	dw.type = "list", dw.hasItemOption = !0, dw.getDimension = function(t) {
		return isNaN(t) || (t = this.dimensions[t] || t), t
	}, dw.getDimensionInfo = function(t) {
		return this._dimensionInfos[this.getDimension(t)]
	}, dw.getDimensionsOnCoord = function() {
		return this._dimensionsSummary.dataDimsOnCoord.slice()
	}, dw.mapDimension = function(t, e) {
		var n = this._dimensionsSummary;
		if (null == e) return n.encodeFirstDimNotExtra[t];
		var i = n.encode[t];
		return e === !0 ? (i || []).slice() : i && i[e]
	}, dw.initData = function(t, e, n) {
		var i = _o.isInstance(t) || d(t);
		i && (t = new as(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices =
			null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this
				.hasItemOption = !1), this.defaultDimValueGetter = B_[this._rawData.getSource().sourceFormat],
			this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this
			._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
	}, dw.getProvider = function() {
		return this._rawData
	}, dw.appendData = function(t) {
		var e = this._rawData,
			n = this.count();
		e.appendData(t);
		var i = e.count();
		e.persistent || (i += n), this._initDataFromProvider(n, i)
	}, dw._initDataFromProvider = function(t, e) {
		if (!(t >= e)) {
			for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o
					.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this
					._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s >
				g; g++) {
				var m = o[g];
				c[m] || (c[m] = iu());
				var v = l[m];
				0 === v.otherDims.itemName && (n = this._nameDimIdx = g), 0 === v.otherDims.itemId && (this
					._idDimIdx = g);
				var y = ow[v.type];
				a[m] || (a[m] = []);
				var _ = a[m][p];
				if (_ && _.length < i) {
					for (var x = new y(Math.min(e - p * i, i)), w = 0; w < _.length; w++) x[w] = _[w];
					a[m][p] = x
				}
				for (var b = f * i; e > b; b += i) a[m].push(new y(Math.min(e - b, i)));
				this._chunkCount = a[m].length
			}
			for (var S = new Array(s), M = t; e > M; M++) {
				S = r.getItem(M, S);
				for (var I = Math.floor(M / i), T = M % i, b = 0; s > b; b++) {
					var m = o[b],
						C = a[m][I],
						D = this._dimValueGetter(S, m, M, b);
					C[T] = D;
					var A = c[m];
					D < A[0] && (A[0] = D), D > A[1] && (A[1] = D)
				}
				if (!r.pure) {
					var k = u[M];
					if (S && null == k)
						if (null != S.name) u[M] = k = S.name;
						else if (null != n) {
						var P = o[n],
							L = a[P][I];
						if (L) {
							k = L[T];
							var O = l[P].ordinalMeta;
							O && O.categories.length && (k = O.categories[k])
						}
					}
					var z = null == S ? null : S.id;
					null == z && null != k && (d[k] = d[k] || 0, z = k, d[k] > 0 && (z += "__ec__" + d[k]), d[
						k]++), null != z && (h[M] = z)
				}
			}!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Yl(
				this)
		}
	}, dw.count = function() {
		return this._count
	}, dw.getIndices = function() {
		var t, e = this._indices;
		if (e) {
			var n = e.constructor,
				i = this._count;
			if (n === Array) {
				t = new n(i);
				for (var r = 0; i > r; r++) t[r] = e[r]
			} else t = new n(e.buffer, 0, i)
		} else
			for (var n = Zl(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
		return t
	}, dw.get = function(t, e) {
		if (!(e >= 0 && e < this._count)) return 0 / 0;
		var n = this._storage;
		if (!n[t]) return 0 / 0;
		e = this.getRawIndex(e);
		var i = Math.floor(e / this._chunkSize),
			r = e % this._chunkSize,
			a = n[t][i],
			o = a[r];
		return o
	}, dw.getByRawIndex = function(t, e) {
		if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
		var n = this._storage[t];
		if (!n) return 0 / 0;
		var i = Math.floor(e / this._chunkSize),
			r = e % this._chunkSize,
			a = n[i];
		return a[r]
	}, dw._getFast = function(t, e) {
		var n = Math.floor(e / this._chunkSize),
			i = e % this._chunkSize,
			r = this._storage[t][n];
		return r[i]
	}, dw.getValues = function(t, e) {
		var n = [];
		x(t) || (e = t, t = this.dimensions);
		for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
		return n
	}, dw.hasValue = function(t) {
		for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r >
			i; i++)
			if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
		return !0
	}, dw.getDataExtent = function(t) {
		t = this.getDimension(t);
		var e = this._storage[t],
			n = iu();
		if (!e) return n;
		var i, r = this.count(),
			a = !this._indices;
		if (a) return this._rawExtent[t].slice();
		if (i = this._extent[t]) return i.slice();
		i = n;
		for (var o = i[0], s = i[1], l = 0; r > l; l++) {
			var u = this._getFast(t, this.getRawIndex(l));
			o > u && (o = u), u > s && (s = u)
		}
		return i = [o, s], this._extent[t] = i, i
	}, dw.getApproximateExtent = function(t) {
		return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
	}, dw.setApproximateExtent = function(t, e) {
		e = this.getDimension(e), this._approximateExtent[e] = t.slice()
	}, dw.getCalculationInfo = function(t) {
		return this._calculationInfo[t]
	}, dw.setCalculationInfo = function(t, e) {
		iw(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
	}, dw.getSum = function(t) {
		var e = this._storage[t],
			n = 0;
		if (e)
			for (var i = 0, r = this.count(); r > i; i++) {
				var a = this.get(t, i);
				isNaN(a) || (n += a)
			}
		return n
	}, dw.getMedian = function(t) {
		var e = [];
		this.each(t, function(t) {
			isNaN(t) || e.push(t)
		});
		var n = [].concat(e).sort(function(t, e) {
				return t - e
			}),
			i = this.count();
		return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
	}, dw.rawIndexOf = function(t, e) {
		var n = t && this._invertedIndicesMap[t],
			i = n[e];
		return null == i || isNaN(i) ? -1 : i
	}, dw.indexOfName = function(t) {
		for (var e = 0, n = this.count(); n > e; e++)
			if (this.getName(e) === t) return e;
		return -1
	}, dw.indexOfRawIndex = function(t) {
		if (!this._indices) return t;
		if (t >= this._rawCount || 0 > t) return -1;
		var e = this._indices,
			n = e[t];
		if (null != n && n < this._count && n === t) return t;
		for (var i = 0, r = this._count - 1; r >= i;) {
			var a = (i + r) / 2 | 0;
			if (e[a] < t) i = a + 1;
			else {
				if (!(e[a] > t)) return a;
				r = a - 1
			}
		}
		return -1
	}, dw.indicesOfNearest = function(t, e, n) {
		var i = this._storage,
			r = i[t],
			a = [];
		if (!r) return a;
		null == n && (n = 1 / 0);
		for (var o = Number.MAX_VALUE, s = -1, l = 0, u = this.count(); u > l; l++) {
			var h = e - this.get(t, l),
				c = Math.abs(h);
			n >= h && o >= c && ((o > c || h >= 0 && 0 > s) && (o = c, s = h, a.length = 0), a.push(l))
		}
		return a
	}, dw.getRawIndex = $l, dw.getRawDataItem = function(t) {
		if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
		for (var e = [], n = 0; n < this.dimensions.length; n++) {
			var i = this.dimensions[n];
			e.push(this.get(i, t))
		}
		return e
	}, dw.getName = function(t) {
		var e = this.getRawIndex(t);
		return this._nameList[e] || Kl(this, this._nameDimIdx, e) || ""
	}, dw.getId = function(t) {
		return Ql(this, this.getRawIndex(t))
	}, dw.each = function(t, e, n, i) {
		if (this._count) {
			"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(tu(t), this
				.getDimension, this);
			for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
				case 0:
					e.call(n, a);
					break;
				case 1:
					e.call(n, this.get(t[0], a), a);
					break;
				case 2:
					e.call(n, this.get(t[0], a), this.get(t[1], a), a);
					break;
				default:
					for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
					s[o] = a, e.apply(n, s)
			}
		}
	}, dw.filterSelf = function(t, e, n, i) {
		if (this._count) {
			"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(tu(t), this
				.getDimension, this);
			for (var r = this.count(), a = Zl(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c =
				0; r > c; c++) {
				var d, f = this.getRawIndex(c);
				if (0 === l) d = e.call(n, c);
				else if (1 === l) {
					var g = this._getFast(h, f);
					d = e.call(n, g, c)
				} else {
					for (var m = 0; l > m; m++) s[m] = this._getFast(h, f);
					s[m] = c, d = e.apply(n, s)
				}
				d && (o[u++] = f)
			}
			return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this
				._indices ? Jl : $l, this
		}
	}, dw.selectRange = function(t) {
		if (this._count) {
			var e = [];
			for (var n in t) t.hasOwnProperty(n) && e.push(n);
			var i = e.length;
			if (i) {
				var r = this.count(),
					a = Zl(this),
					o = new a(r),
					s = 0,
					l = e[0],
					u = t[l][0],
					h = t[l][1],
					c = !1;
				if (!this._indices) {
					var d = 0;
					if (1 === i) {
						for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
							for (var g = f[p], m = Math.min(this._count - p * this._chunkSize, this._chunkSize),
									v = 0; m > v; v++) {
								var y = g[v];
								(y >= u && h >= y || isNaN(y)) && (o[s++] = d), d++
							}
						c = !0
					} else if (2 === i) {
						for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1],
								p = 0; p < this._chunkCount; p++)
							for (var g = f[p], b = _[p], m = Math.min(this._count - p * this._chunkSize, this
									._chunkSize), v = 0; m > v; v++) {
								var y = g[v],
									S = b[v];
								(y >= u && h >= y || isNaN(y)) && (S >= x && w >= S || isNaN(S)) && (o[s++] =
								d), d++
							}
						c = !0
					}
				}
				if (!c)
					if (1 === i)
						for (var v = 0; r > v; v++) {
							var M = this.getRawIndex(v),
								y = this._getFast(l, M);
							(y >= u && h >= y || isNaN(y)) && (o[s++] = M)
						} else
							for (var v = 0; r > v; v++) {
								for (var I = !0, M = this.getRawIndex(v), p = 0; i > p; p++) {
									var T = e[p],
										y = this._getFast(n, M);
									(y < t[T][0] || y > t[T][1]) && (I = !1)
								}
								I && (o[s++] = this.getRawIndex(v))
							}
				return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this
					._indices ? Jl : $l, this
			}
		}
	}, dw.mapArray = function(t, e, n, i) {
		"function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
		var r = [];
		return this.each(t, function() {
			r.push(e && e.apply(this, arguments))
		}, n), r
	}, dw.map = function(t, e, n, i) {
		n = n || i || this, t = p(tu(t), this.getDimension, this);
		var r = eu(this, t);
		r._indices = this._indices, r.getRawIndex = r._indices ? Jl : $l;
		for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r
				._rawExtent, d = 0; u > d; d++) {
			for (var f = 0; l > f; f++) h[f] = this.get(t[f], d);
			h[l] = d;
			var g = e && e.apply(n, h);
			if (null != g) {
				"object" != typeof g && (o[0] = g, g = o);
				for (var m = this.getRawIndex(d), v = Math.floor(m / s), y = m % s, _ = 0; _ < g.length; _++) {
					var x = t[_],
						w = g[_],
						b = c[x],
						S = a[x];
					S && (S[v][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
				}
			}
		}
		return r
	}, dw.downSample = function(t, e, n, i) {
		for (var r = eu(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(),
				h = this._chunkSize, c = r._rawExtent[t], d = new(Zl(this))(u), f = 0, p = 0; u > p; p += s) {
			s > u - p && (s = u - p, o.length = s);
			for (var g = 0; s > g; g++) {
				var m = this.getRawIndex(p + g),
					v = Math.floor(m / h),
					y = m % h;
				o[g] = l[v][y]
			}
			var _ = n(o),
				x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)),
				w = Math.floor(x / h),
				b = x % h;
			l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x
		}
		return r._count = f, r._indices = d, r.getRawIndex = Jl, r
	}, dw.getItemModel = function(t) {
		var e = this.hostModel;
		return new Pa(this.getRawDataItem(t), e, e && e.ecModel)
	}, dw.diff = function(t) {
		var e = this;
		return new Gl(t ? t.getIndices() : [], this.getIndices(), function(e) {
			return Ql(t, e)
		}, function(t) {
			return Ql(e, t)
		})
	}, dw.getVisual = function(t) {
		var e = this._visual;
		return e && e[t]
	}, dw.setVisual = function(t, e) {
		if (iw(t))
			for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
		else this._visual = this._visual || {}, this._visual[t] = e
	}, dw.setLayout = function(t, e) {
		if (iw(t))
			for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
		else this._layout[t] = e
	}, dw.getLayout = function(t) {
		return this._layout[t]
	}, dw.getItemLayout = function(t) {
		return this._itemLayouts[t]
	}, dw.setItemLayout = function(t, e, n) {
		this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
	}, dw.clearItemLayouts = function() {
		this._itemLayouts.length = 0
	}, dw.getItemVisual = function(t, e, n) {
		var i = this._itemVisuals[t],
			r = i && i[e];
		return null != r || n ? r : this.getVisual(e)
	}, dw.setItemVisual = function(t, e, n) {
		var i = this._itemVisuals[t] || {},
			r = this.hasItemVisual;
		if (this._itemVisuals[t] = i, iw(e))
			for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
		else i[e] = n, r[e] = !0
	}, dw.clearAllVisual = function() {
		this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
	};
	var fw = function(t) {
		t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
	};
	dw.setItemGraphicEl = function(t, e) {
		var n = this.hostModel;
		e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e
			.type && e.traverse(fw, e)), this._graphicEls[t] = e
	}, dw.getItemGraphicEl = function(t) {
		return this._graphicEls[t]
	}, dw.eachItemGraphicEl = function(t, e) {
		f(this._graphicEls, function(n, i) {
			n && t && t.call(e, n, i)
		})
	}, dw.cloneShallow = function(t) {
		if (!t) {
			var e = p(this.dimensions, this.getDimensionInfo, this);
			t = new cw(e, this.hostModel)
		}
		if (t._storage = this._storage, jl(t, this), this._indices) {
			var n = this._indices.constructor;
			t._indices = new n(this._indices)
		} else t._indices = null;
		return t.getRawIndex = t._indices ? Jl : $l, t
	}, dw.wrapMethod = function(t, e) {
		var n = this[t];
		"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods
			.push(t), this[t] = function() {
				var t = n.apply(this, arguments);
				return e.apply(this, [t].concat(P(arguments)))
			})
	}, dw.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], dw.CHANGABLE_METHODS = ["filterSelf",
		"selectRange"
	];
	var pw = function(t, e) {
		return e = e || {}, ru(e.coordDimensions || [], t, {
			dimsDef: e.dimensionsDefine || t.dimensionsDefine,
			encodeDef: e.encodeDefine || t.encodeDefine,
			dimCount: e.dimensionsCount,
			generateCoord: e.generateCoord,
			generateCoordCount: e.generateCoordCount
		})
	};
	fu.prototype.parse = function(t) {
		return t
	}, fu.prototype.getSetting = function(t) {
		return this._setting[t]
	}, fu.prototype.contain = function(t) {
		var e = this._extent;
		return t >= e[0] && t <= e[1]
	}, fu.prototype.normalize = function(t) {
		var e = this._extent;
		return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
	}, fu.prototype.scale = function(t) {
		var e = this._extent;
		return t * (e[1] - e[0]) + e[0]
	}, fu.prototype.unionExtent = function(t) {
		var e = this._extent;
		t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
	}, fu.prototype.unionExtentFromData = function(t, e) {
		this.unionExtent(t.getApproximateExtent(e))
	}, fu.prototype.getExtent = function() {
		return this._extent.slice()
	}, fu.prototype.setExtent = function(t, e) {
		var n = this._extent;
		isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
	}, fu.prototype.isBlank = function() {
		return this._isBlank
	}, fu.prototype.setBlank = function(t) {
		this._isBlank = t
	}, fu.prototype.getLabel = null, ji(fu), Ji(fu, {
		registerWhenExtend: !0
	}), pu.createByAxisModel = function(t) {
		var e = t.option,
			n = e.data,
			i = n && p(n, mu);
		return new pu({
			categories: i,
			needCollect: !i,
			deduplication: e.dedplication !== !1
		})
	};
	var gw = pu.prototype;
	gw.getOrdinal = function(t) {
		return gu(this).get(t)
	}, gw.parseAndCollect = function(t) {
		var e, n = this._needCollect;
		if ("string" != typeof t && !n) return t;
		if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
		var i = gu(this);
		return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t,
			e)) : e = 0 / 0), e
	};
	var mw = fu.prototype,
		vw = fu.extend({
			type: "ordinal",
			init: function(t, e) {
				(!t || x(t)) && (t = new pu({
					categories: t
				})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
			},
			parse: function(t) {
				return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
			},
			contain: function(t) {
				return t = this.parse(t), mw.contain.call(this, t) && null != this._ordinalMeta.categories[
					t]
			},
			normalize: function(t) {
				return mw.normalize.call(this, this.parse(t))
			},
			scale: function(t) {
				return Math.round(mw.scale.call(this, t))
			},
			getTicks: function() {
				for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
				return t
			},
			getLabel: function(t) {
				return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
			},
			count: function() {
				return this._extent[1] - this._extent[0] + 1
			},
			unionExtentFromData: function(t, e) {
				this.unionExtent(t.getApproximateExtent(e))
			},
			getOrdinalMeta: function() {
				return this._ordinalMeta
			},
			niceTicks: V,
			niceExtent: V
		});
	vw.create = function() {
		return new vw
	};
	var yw = Va,
		_w = Va,
		xw = fu.extend({
			type: "interval",
			_interval: 0,
			_intervalPrecision: 2,
			setExtent: function(t, e) {
				var n = this._extent;
				isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
			},
			unionExtent: function(t) {
				var e = this._extent;
				t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), xw.prototype.setExtent.call(
					this, e[0], e[1])
			},
			getInterval: function() {
				return this._interval
			},
			setInterval: function(t) {
				this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = yu(t)
			},
			getTicks: function() {
				return wu(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
			},
			getLabel: function(t, e) {
				if (null == t) return "";
				var n = e && e.precision;
				return null == n ? n = Wa(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = _w(t,
					n, !0), to(t)
			},
			niceTicks: function(t, e, n) {
				t = t || 5;
				var i = this._extent,
					r = i[1] - i[0];
				if (isFinite(r)) {
					0 > r && (r = -r, i.reverse());
					var a = vu(i, t, e, n);
					this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this
						._niceExtent = a.niceTickExtent
				}
			},
			niceExtent: function(t) {
				var e = this._extent;
				if (e[0] === e[1])
					if (0 !== e[0]) {
						var n = e[0];
						t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
					} else e[1] = 1;
				var i = e[1] - e[0];
				isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t
					.maxInterval);
				var r = this._interval;
				t.fixMin || (e[0] = _w(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = _w(Math.ceil(e[1] /
					r) * r))
			}
		});
	xw.create = function() {
		return new xw
	};
	var ww = "__ec_stack_",
		bw = .5,
		Sw = "undefined" != typeof Float32Array ? Float32Array : Array,
		Mw = {
			seriesType: "bar",
			plan: Z_(),
			reset: function(t) {
				function e(t, e) {
					for (var n, c = new Sw(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[u] =
						e.get(o, n), f[1 - u] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[
							p++] = d[1];
					e.setLayout({
						largePoints: c,
						barWidth: h,
						valueAxisStart: Pu(r, a, !1),
						valueAxisHorizontal: l
					})
				}
				if (Au(t) && ku(t)) {
					var n = t.getData(),
						i = t.coordinateSystem,
						r = i.getBaseAxis(),
						a = i.getOtherAxis(r),
						o = n.mapDimension(a.dim),
						s = n.mapDimension(r.dim),
						l = a.isHorizontal(),
						u = l ? 0 : 1,
						h = Cu(Iu([t]), r, t).width;
					return h > bw || (h = bw), {
						progress: e
					}
				}
			}
		},
		Iw = xw.prototype,
		Tw = Math.ceil,
		Cw = Math.floor,
		Dw = 1e3,
		Aw = 60 * Dw,
		kw = 60 * Aw,
		Pw = 24 * kw,
		Lw = function(t, e, n, i) {
			for (; i > n;) {
				var r = n + i >>> 1;
				t[r][1] < e ? n = r + 1 : i = r
			}
			return n
		},
		Ow = xw.extend({
			type: "time",
			getLabel: function(t) {
				var e = this._stepLvl,
					n = new Date(t);
				return so(e[0], n, this.getSetting("useUTC"))
			},
			niceExtent: function(t) {
				var e = this._extent;
				if (e[0] === e[1] && (e[0] -= Pw, e[1] += Pw), e[1] === -1 / 0 && 1 / 0 === e[0]) {
					var n = new Date;
					e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Pw
				}
				this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
				var i = this._interval;
				t.fixMin || (e[0] = Va(Cw(e[0] / i) * i)), t.fixMax || (e[1] = Va(Tw(e[1] / i) * i))
			},
			niceTicks: function(t, e, n) {
				t = t || 10;
				var i = this._extent,
					r = i[1] - i[0],
					a = r / t;
				null != e && e > a && (a = e), null != n && a > n && (a = n);
				var o = zw.length,
					s = Lw(zw, a, 0, o),
					l = zw[Math.min(s, o - 1)],
					u = l[1];
				if ("year" === l[0]) {
					var h = r / u,
						c = $a(h / t, !0);
					u *= c
				}
				var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() *
					1e3,
					f = [Math.round(Tw((i[0] - d) / u) * u + d), Math.round(Cw((i[1] - d) / u) * u + d)];
				xu(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f
			},
			parse: function(t) {
				return +ja(t)
			}
		});
	f(["contain", "normalize"], function(t) {
		Ow.prototype[t] = function(e) {
			return Iw[t].call(this, this.parse(e))
		}
	});
	var zw = [
		["hh:mm:ss", Dw],
		["hh:mm:ss", 5 * Dw],
		["hh:mm:ss", 10 * Dw],
		["hh:mm:ss", 15 * Dw],
		["hh:mm:ss", 30 * Dw],
		["hh:mm\nMM-dd", Aw],
		["hh:mm\nMM-dd", 5 * Aw],
		["hh:mm\nMM-dd", 10 * Aw],
		["hh:mm\nMM-dd", 15 * Aw],
		["hh:mm\nMM-dd", 30 * Aw],
		["hh:mm\nMM-dd", kw],
		["hh:mm\nMM-dd", 2 * kw],
		["hh:mm\nMM-dd", 6 * kw],
		["hh:mm\nMM-dd", 12 * kw],
		["MM-dd\nyyyy", Pw],
		["MM-dd\nyyyy", 2 * Pw],
		["MM-dd\nyyyy", 3 * Pw],
		["MM-dd\nyyyy", 4 * Pw],
		["MM-dd\nyyyy", 5 * Pw],
		["MM-dd\nyyyy", 6 * Pw],
		["week", 7 * Pw],
		["MM-dd\nyyyy", 10 * Pw],
		["week", 14 * Pw],
		["week", 21 * Pw],
		["month", 31 * Pw],
		["week", 42 * Pw],
		["month", 62 * Pw],
		["week", 42 * Pw],
		["quarter", 380 * Pw / 4],
		["month", 31 * Pw * 4],
		["month", 31 * Pw * 5],
		["half-year", 380 * Pw / 2],
		["month", 31 * Pw * 8],
		["month", 31 * Pw * 10],
		["year", 380 * Pw]
	];
	Ow.create = function(t) {
		return new Ow({
			useUTC: t.ecModel.get("useUTC")
		})
	};
	var Rw = fu.prototype,
		Ew = xw.prototype,
		Bw = Wa,
		Nw = Va,
		Fw = Math.floor,
		Vw = Math.ceil,
		Gw = Math.pow,
		Hw = Math.log,
		Ww = fu.extend({
			type: "log",
			base: 10,
			$constructor: function() {
				fu.apply(this, arguments), this._originalScale = new xw
			},
			getTicks: function() {
				var t = this._originalScale,
					e = this._extent,
					n = t.getExtent();
				return p(Ew.getTicks.call(this), function(i) {
					var r = Va(Gw(this.base, i));
					return r = i === e[0] && t.__fixMin ? Lu(r, n[0]) : r, r = i === e[1] && t
						.__fixMax ? Lu(r, n[1]) : r
				}, this)
			},
			getLabel: Ew.getLabel,
			scale: function(t) {
				return t = Rw.scale.call(this, t), Gw(this.base, t)
			},
			setExtent: function(t, e) {
				var n = this.base;
				t = Hw(t) / Hw(n), e = Hw(e) / Hw(n), Ew.setExtent.call(this, t, e)
			},
			getExtent: function() {
				var t = this.base,
					e = Rw.getExtent.call(this);
				e[0] = Gw(t, e[0]), e[1] = Gw(t, e[1]);
				var n = this._originalScale,
					i = n.getExtent();
				return n.__fixMin && (e[0] = Lu(e[0], i[0])), n.__fixMax && (e[1] = Lu(e[1], i[1])), e
			},
			unionExtent: function(t) {
				this._originalScale.unionExtent(t);
				var e = this.base;
				t[0] = Hw(t[0]) / Hw(e), t[1] = Hw(t[1]) / Hw(e), Rw.unionExtent.call(this, t)
			},
			unionExtentFromData: function(t, e) {
				this.unionExtent(t.getApproximateExtent(e))
			},
			niceTicks: function(t) {
				t = t || 10;
				var e = this._extent,
					n = e[1] - e[0];
				if (!(1 / 0 === n || 0 >= n)) {
					var i = Ya(n),
						r = t / n * i;
					for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
					var a = [Va(Vw(e[0] / i) * i), Va(Fw(e[1] / i) * i)];
					this._interval = i, this._niceExtent = a
				}
			},
			niceExtent: function(t) {
				Ew.niceExtent.call(this, t);
				var e = this._originalScale;
				e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
			}
		});
	f(["contain", "normalize"], function(t) {
		Ww.prototype[t] = function(e) {
			return e = Hw(e) / Hw(this.base), Rw[t].call(this, e)
		}
	}), Ww.create = function() {
		return new Ww
	};
	var Uw = {
			getMin: function(t) {
				var e = this.option,
					n = t || null == e.rangeStart ? e.min : e.rangeStart;
				return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !C(n) && (n = this
					.axis.scale.parse(n)), n
			},
			getMax: function(t) {
				var e = this.option,
					n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
				return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !C(n) && (n = this
					.axis.scale.parse(n)), n
			},
			getNeedCrossZero: function() {
				var t = this.option;
				return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
			},
			getCoordSysModel: V,
			setRange: function(t, e) {
				this.option.rangeStart = t, this.option.rangeEnd = e
			},
			resetRange: function() {
				this.option.rangeStart = this.option.rangeEnd = null
			}
		},
		Xw = Wr({
			type: "triangle",
			shape: {
				cx: 0,
				cy: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = e.width / 2,
					a = e.height / 2;
				t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
			}
		}),
		Zw = Wr({
			type: "diamond",
			shape: {
				cx: 0,
				cy: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.cx,
					i = e.cy,
					r = e.width / 2,
					a = e.height / 2;
				t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t
				.closePath()
			}
		}),
		qw = Wr({
			type: "pin",
			shape: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.x,
					i = e.y,
					r = e.width / 5 * 3,
					a = Math.max(r, e.height),
					o = r / 2,
					s = o * o / (a - o),
					l = i - a + o + s,
					u = Math.asin(s / o),
					h = Math.cos(u) * o,
					c = Math.sin(u),
					d = Math.cos(u),
					f = .6 * o,
					p = .7 * o;
				t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n +
					h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f,
					l + s + d * f, n - h, l + s), t.closePath()
			}
		}),
		jw = Wr({
			type: "arrow",
			shape: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var n = e.height,
					i = e.width,
					r = e.x,
					a = e.y,
					o = i / 3 * 2;
				t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n),
					t.lineTo(r, a), t.closePath()
			}
		}),
		Yw = {
			line: my,
			rect: gy,
			roundRect: gy,
			square: gy,
			circle: oy,
			diamond: Zw,
			pin: qw,
			arrow: jw,
			triangle: Xw
		},
		Kw = {
			line: function(t, e, n, i, r) {
				r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
			},
			rect: function(t, e, n, i, r) {
				r.x = t, r.y = e, r.width = n, r.height = i
			},
			roundRect: function(t, e, n, i, r) {
				r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
			},
			square: function(t, e, n, i, r) {
				var a = Math.min(n, i);
				r.x = t, r.y = e, r.width = a, r.height = a
			},
			circle: function(t, e, n, i, r) {
				r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
			},
			diamond: function(t, e, n, i, r) {
				r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
			},
			pin: function(t, e, n, i, r) {
				r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
			},
			arrow: function(t, e, n, i, r) {
				r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
			},
			triangle: function(t, e, n, i, r) {
				r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
			}
		},
		$w = {};
	f(Yw, function(t, e) {
		$w[e] = new t
	});
	var Jw = Wr({
			type: "symbol",
			shape: {
				symbolType: "",
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			beforeBrush: function() {
				var t = this.style,
					e = this.shape;
				"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t
					.textAlign = "center", t.textVerticalAlign = "middle")
			},
			buildPath: function(t, e, n) {
				var i = e.symbolType,
					r = $w[i];
				"none" !== e.symbolType && (r || (i = "rect", r = $w[i]), Kw[i](e.x, e.y, e.width, e.height,
					r.shape), r.buildPath(t, r.shape, n))
			}
		}),
		Qw = {
			isDimensionStacked: lu,
			enableDataStack: su,
			getStackedDimension: uu
		},
		tb = (Object.freeze || Object)({
			createList: Uu,
			getLayoutRect: ho,
			dataStack: Qw,
			createScale: Xu,
			mixinAxisModelCommonMethods: Zu,
			completeDimensions: ru,
			createDimensions: pw,
			createSymbol: Wu
		}),
		eb = 1e-8;
	Yu.prototype = {
		constructor: Yu,
		properties: null,
		getBoundingRect: function() {
			var t = this._rect;
			if (t) return t;
			for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries,
					s = 0; s < o.length; s++)
				if ("polygon" === o[s].type) {
					var l = o[s].exterior;
					fr(l, r, a), oe(n, n, r), se(i, i, a)
				} return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new rn(n[0], n[1], i[0] -
				n[0], i[1] - n[1])
		},
		contain: function(t) {
			var e = this.getBoundingRect(),
				n = this.geometries;
			if (!e.contain(t[0], t[1])) return !1;
			t: for (var i = 0, r = n.length; r > i; i++)
				if ("polygon" === n[i].type) {
					var a = n[i].exterior,
						o = n[i].interiors;
					if (ju(a, t[0], t[1])) {
						for (var s = 0; s < (o ? o.length : 0); s++)
							if (ju(o[s])) continue t;
						return !0
					}
				}
			return !1
		},
		transformTo: function(t, e, n, i) {
			var r = this.getBoundingRect(),
				a = r.width / r.height;
			n ? i || (i = n / a) : n = a * i;
			for (var o = new rn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l
				.length; u++)
				if ("polygon" === l[u].type) {
					for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) ae(h[d], h[d],
						s);
					for (var f = 0; f < (c ? c.length : 0); f++)
						for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s)
				} r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2]
		}
	};
	var nb = function(t) {
			return Ku(t), p(m(t.features, function(t) {
				return t.geometry && t.properties && t.geometry.coordinates.length > 0
			}), function(t) {
				var e = t.properties,
					n = t.geometry,
					i = n.coordinates,
					r = [];
				"Polygon" === n.type && r.push({
					type: "polygon",
					exterior: i[0],
					interiors: i.slice(1)
				}), "MultiPolygon" === n.type && f(i, function(t) {
					t[0] && r.push({
						type: "polygon",
						exterior: t[0],
						interiors: t.slice(1)
					})
				});
				var a = new Yu(e.name, r, e.cp);
				return a.properties = e, a
			})
		},
		ib = Gi(),
		rb = [0, 1],
		ab = function(t, e, n) {
			this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
		};
	ab.prototype = {
		constructor: ab,
		contain: function(t) {
			var e = this._extent,
				n = Math.min(e[0], e[1]),
				i = Math.max(e[0], e[1]);
			return t >= n && i >= t
		},
		containData: function(t) {
			return this.contain(this.dataToCoord(t))
		},
		getExtent: function() {
			return this._extent.slice()
		},
		getPixelPrecision: function(t) {
			return Ua(t || this.scale.getExtent(), this._extent)
		},
		setExtent: function(t, e) {
			var n = this._extent;
			n[0] = t, n[1] = e
		},
		dataToCoord: function(t, e) {
			var n = this._extent,
				i = this.scale;
			return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), fh(n, i
			.count())), Na(t, rb, n, e)
		},
		coordToData: function(t, e) {
			var n = this._extent,
				i = this.scale;
			this.onBand && "ordinal" === i.type && (n = n.slice(), fh(n, i.count()));
			var r = Na(t, n, rb, e);
			return this.scale.scale(r)
		},
		pointToData: function() {},
		getTicksCoords: function(t) {
			t = t || {};
			var e = t.tickModel || this.getTickModel(),
				n = Qu(this, e),
				i = n.ticks,
				r = p(i, function(t) {
					return {
						coord: this.dataToCoord(t),
						tickValue: t
					}
				}, this),
				a = e.get("alignWithLabel");
			return ph(this, r, n.tickCategoryInterval, a, t.clamp), r
		},
		getViewLabels: function() {
			return Ju(this).labels
		},
		getLabelModel: function() {
			return this.model.getModel("axisLabel")
		},
		getTickModel: function() {
			return this.model.getModel("axisTick")
		},
		getBandWidth: function() {
			var t = this._extent,
				e = this.scale.getExtent(),
				n = e[1] - e[0] + (this.onBand ? 1 : 0);
			0 === n && (n = 1);
			var i = Math.abs(t[1] - t[0]);
			return Math.abs(i) / n
		},
		isHorizontal: null,
		getRotate: null,
		calculateCategoryInterval: function() {
			return lh(this)
		}
	};
	var ob = nb,
		sb = {};
	f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString",
		"isObject", "isFunction", "extend", "defaults", "clone", "merge"
	], function(t) {
		sb[t] = rg[t]
	});
	var lb = function(t) {
		this._axes = {}, this._dimList = [], this.name = t || ""
	};
	lb.prototype = {
		constructor: lb,
		type: "cartesian",
		getAxis: function(t) {
			return this._axes[t]
		},
		getAxes: function() {
			return p(this._dimList, gh, this)
		},
		getAxesByScale: function(t) {
			return t = t.toLowerCase(), m(this.getAxes(), function(e) {
				return e.scale.type === t
			})
		},
		addAxis: function(t) {
			var e = t.dim;
			this._axes[e] = t, this._dimList.push(e)
		},
		dataToCoord: function(t) {
			return this._dataCoordConvert(t, "dataToCoord")
		},
		coordToData: function(t) {
			return this._dataCoordConvert(t, "coordToData")
		},
		_dataCoordConvert: function(t, e) {
			for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
				var a = n[r],
					o = this._axes[a];
				i[a] = o[e](t[a])
			}
			return i
		}
	}, mh.prototype = {
		constructor: mh,
		type: "cartesian2d",
		dimensions: ["x", "y"],
		getBaseAxis: function() {
			return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
		},
		containPoint: function(t) {
			var e = this.getAxis("x"),
				n = this.getAxis("y");
			return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
		},
		containData: function(t) {
			return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
		},
		dataToPoint: function(t, e, n) {
			var i = this.getAxis("x"),
				r = this.getAxis("y");
			return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r
				.dataToCoord(t[1])), n
		},
		clampData: function(t, e) {
			var n = this.getAxis("x").scale,
				i = this.getAxis("y").scale,
				r = n.getExtent(),
				a = i.getExtent(),
				o = n.parse(t[0]),
				s = i.parse(t[1]);
			return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[
				1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
		},
		pointToData: function(t, e) {
			var n = this.getAxis("x"),
				i = this.getAxis("y");
			return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i
				.toLocalCoord(t[1])), e
		},
		getOtherAxis: function(t) {
			return this.getAxis("x" === t.dim ? "y" : "x")
		}
	}, h(mh, lb);
	var ub = function(t, e, n, i, r) {
		ab.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom"
	};
	ub.prototype = {
		constructor: ub,
		index: 0,
		getAxesOnZeroOf: null,
		model: null,
		isHorizontal: function() {
			var t = this.position;
			return "top" === t || "bottom" === t
		},
		getGlobalExtent: function(t) {
			var e = this.getExtent();
			return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e
				.reverse(), e
		},
		getOtherAxis: function() {
			this.grid.getOtherAxis()
		},
		pointToData: function(t, e) {
			return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
		},
		toLocalCoord: null,
		toGlobalCoord: null
	}, h(ub, ab);
	var hb = {
			show: !0,
			zlevel: 0,
			z: 0,
			inverse: !1,
			name: "",
			nameLocation: "end",
			nameRotate: null,
			nameTruncate: {
				maxWidth: null,
				ellipsis: "...",
				placeholder: "."
			},
			nameTextStyle: {},
			nameGap: 15,
			silent: !1,
			triggerEvent: !1,
			tooltip: {
				show: !1
			},
			axisPointer: {},
			axisLine: {
				show: !0,
				onZero: !0,
				onZeroAxisIndex: null,
				lineStyle: {
					color: "#333",
					width: 1,
					type: "solid"
				},
				symbol: ["none", "none"],
				symbolSize: [10, 15]
			},
			axisTick: {
				show: !0,
				inside: !1,
				length: 5,
				lineStyle: {
					width: 1
				}
			},
			axisLabel: {
				show: !0,
				inside: !1,
				rotate: 0,
				showMinLabel: null,
				showMaxLabel: null,
				margin: 8,
				fontSize: 12
			},
			splitLine: {
				show: !0,
				lineStyle: {
					color: ["#ccc"],
					width: 1,
					type: "solid"
				}
			},
			splitArea: {
				show: !1,
				areaStyle: {
					color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
				}
			}
		},
		cb = {};
	cb.categoryAxis = r({
		boundaryGap: !0,
		deduplication: null,
		splitLine: {
			show: !1
		},
		axisTick: {
			alignWithLabel: !1,
			interval: "auto"
		},
		axisLabel: {
			interval: "auto"
		}
	}, hb), cb.valueAxis = r({
		boundaryGap: [0, 0],
		splitNumber: 5
	}, hb), cb.timeAxis = s({
		scale: !0,
		min: "dataMin",
		max: "dataMax"
	}, cb.valueAxis), cb.logAxis = s({
		scale: !0,
		logBase: 10
	}, cb.valueAxis);
	var db = ["value", "category", "time", "log"],
		fb = function(t, e, n, i) {
			f(db, function(o) {
				e.extend({
					type: t + "Axis." + o,
					mergeDefaultAndTheme: function(e, i) {
						var a = this.layoutMode,
							s = a ? fo(e) : {},
							l = i.getTheme();
						r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t,
							e), a && co(e, s, a)
					},
					optionUpdated: function() {
						var t = this.option;
						"category" === t.type && (this.__ordinalMeta = pu.createByAxisModel(
							this))
					},
					getCategories: function(t) {
						var e = this.option;
						return "category" === e.type ? t ? e.data : this.__ordinalMeta
							.categories : void 0
					},
					getOrdinalMeta: function() {
						return this.__ordinalMeta
					},
					defaultOption: a([{}, cb[o + "Axis"], i], !0)
				})
			}), n_.registerSubTypeDefaulter(t + "Axis", _(n, t))
		},
		pb = n_.extend({
			type: "cartesian2dAxis",
			axis: null,
			init: function() {
				pb.superApply(this, "init", arguments), this.resetRange()
			},
			mergeOption: function() {
				pb.superApply(this, "mergeOption", arguments), this.resetRange()
			},
			restoreData: function() {
				pb.superApply(this, "restoreData", arguments), this.resetRange()
			},
			getCoordSysModel: function() {
				return this.ecModel.queryComponents({
					mainType: "grid",
					index: this.option.gridIndex,
					id: this.option.gridId
				})[0]
			}
		});
	r(pb.prototype, Uw);
	var gb = {
		offset: 0
	};
	fb("x", pb, vh, gb), fb("y", pb, vh, gb), n_.extend({
		type: "grid",
		dependencies: ["xAxis", "yAxis"],
		layoutMode: "box",
		coordinateSystem: null,
		defaultOption: {
			show: !1,
			zlevel: 0,
			z: 0,
			left: "10%",
			top: 60,
			right: "10%",
			bottom: 60,
			containLabel: !1,
			backgroundColor: "rgba(0,0,0,0)",
			borderWidth: 1,
			borderColor: "#ccc"
		}
	});
	var mb = _h.prototype;
	mb.type = "grid", mb.axisPointerEnabled = !0, mb.getRect = function() {
		return this._rect
	}, mb.update = function(t, e) {
		var n = this._axesMap;
		this._updateScale(t, this.model), f(n.x, function(t) {
			Ru(t.scale, t.model)
		}), f(n.y, function(t) {
			Ru(t.scale, t.model)
		}), f(n.x, function(t) {
			xh(n, "y", t)
		}), f(n.y, function(t) {
			xh(n, "x", t)
		}), this.resize(this.model, e)
	}, mb.resize = function(t, e, n) {
		function i() {
			f(a, function(t) {
				var e = t.isHorizontal(),
					n = e ? [0, r.width] : [0, r.height],
					i = t.inverse ? 1 : 0;
				t.setExtent(n[i], n[1 - i]), bh(t, e ? r.x : r.y)
			})
		}
		var r = ho(t.getBoxLayoutParams(), {
			width: e.getWidth(),
			height: e.getHeight()
		});
		this._rect = r;
		var a = this._axesList;
		i(), !n && t.get("containLabel") && (f(a, function(t) {
			if (!t.model.get("axisLabel.inside")) {
				var e = Vu(t);
				if (e) {
					var n = t.isHorizontal() ? "height" : "width",
						i = t.model.get("axisLabel.margin");
					r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t
						.position && (r.x += e.width + i)
				}
			}
		}), i())
	}, mb.getAxis = function(t, e) {
		var n = this._axesMap[t];
		if (null != n) {
			if (null == e)
				for (var i in n)
					if (n.hasOwnProperty(i)) return n[i];
			return n[e]
		}
	}, mb.getAxes = function() {
		return this._axesList.slice()
	}, mb.getCartesian = function(t, e) {
		if (null != t && null != e) {
			var n = "x" + t + "y" + e;
			return this._coordsMap[n]
		}
		S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
		for (var i = 0, r = this._coordsList; i < r.length; i++)
			if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
	}, mb.getCartesians = function() {
		return this._coordsList.slice()
	}, mb.convertToPixel = function(t, e, n) {
		var i = this._findConvertTarget(t, e);
		return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) :
			null
	}, mb.convertFromPixel = function(t, e, n) {
		var i = this._findConvertTarget(t, e);
		return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) :
			null
	}, mb._findConvertTarget = function(t, e) {
		var n, i, r = e.seriesModel,
			a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
			o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
			s = e.gridModel,
			l = this._coordsList;
		if (r) n = r.coordinateSystem, u(l, n) < 0 && (n = null);
		else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);
		else if (a) i = this.getAxis("x", a.componentIndex);
		else if (o) i = this.getAxis("y", o.componentIndex);
		else if (s) {
			var h = s.coordinateSystem;
			h === this && (n = this._coordsList[0])
		}
		return {
			cartesian: n,
			axis: i
		}
	}, mb.containPoint = function(t) {
		var e = this._coordsList[0];
		return e ? e.containPoint(t) : void 0
	}, mb._initCartesian = function(t, e) {
		function n(n) {
			return function(o, s) {
				if (yh(o, t, e)) {
					var l = o.get("position");
					"x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ?
						"bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l =
						"left" === l ? "right" : "left")), i[l] = !0;
					var u = new ub(n, Eu(o), [0, 0], o.get("type"), l),
						h = "category" === u.type;
					u.onBand = h && o.get("boundaryGap"), u.inverse = o.get("inverse"), o.axis = u, u
						.model = o, u.grid = this, u.index = s, this._axesList.push(u), r[n][s] = u, a[n]++
				}
			}
		}
		var i = {
				left: !1,
				right: !1,
				top: !1,
				bottom: !1
			},
			r = {
				x: {},
				y: {}
			},
			a = {
				x: 0,
				y: 0
			};
		return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (
			this._axesMap = r, void f(r.x, function(e, n) {
				f(r.y, function(i, r) {
					var a = "x" + n + "y" + r,
						o = new mh(a);
					o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(
						o), o.addAxis(e), o.addAxis(i)
				}, this)
			}, this)) : (this._axesMap = {}, void(this._axesList = []))
	}, mb._updateScale = function(t, e) {
		function n(t, e) {
			f(t.mapDimension(e.dim, !0), function(n) {
				e.scale.unionExtentFromData(t, uu(t, n))
			})
		}
		f(this._axesList, function(t) {
			t.scale.setExtent(1 / 0, -1 / 0)
		}), t.eachSeries(function(i) {
			if (Mh(i)) {
				var r = Sh(i, t),
					a = r[0],
					o = r[1];
				if (!yh(a, e, t) || !yh(o, e, t)) return;
				var s = this.getCartesian(a.componentIndex, o.componentIndex),
					l = i.getData(),
					u = s.getAxis("x"),
					h = s.getAxis("y");
				"list" === l.type && (n(l, u, i), n(l, h, i))
			}
		}, this)
	}, mb.getTooltipAxes = function(t) {
		var e = [],
			n = [];
		return f(this.getCartesians(), function(i) {
			var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
				a = i.getOtherAxis(r);
			u(e, r) < 0 && e.push(r), u(n, a) < 0 && n.push(a)
		}), {
			baseAxes: e,
			otherAxes: n
		}
	};
	var vb = ["xAxis", "yAxis"];
	_h.create = function(t, e) {
		var n = [];
		return t.eachComponent("grid", function(i, r) {
			var a = new _h(i, t, e);
			a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a)
		}), t.eachSeries(function(e) {
			if (Mh(e)) {
				var n = Sh(e, t),
					i = n[0],
					r = n[1],
					a = i.getCoordSysModel(),
					o = a.coordinateSystem;
				e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex)
			}
		}), n
	}, _h.dimensions = _h.prototype.dimensions = mh.prototype.dimensions, Vo.register("cartesian2d", _h);
	var yb = W_.extend({
		type: "series.__base_bar__",
		getInitialData: function() {
			return hu(this.getSource(), this)
		},
		getMarkerPosition: function(t) {
			var e = this.coordinateSystem;
			if (e) {
				var n = e.dataToPoint(e.clampData(t)),
					i = this.getData(),
					r = i.getLayout("offset"),
					a = i.getLayout("size"),
					o = e.getBaseAxis().isHorizontal() ? 0 : 1;
				return n[o] += r + a / 2, n
			}
			return [0 / 0, 0 / 0]
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			barMinHeight: 0,
			barMinAngle: 0,
			large: !1,
			largeThreshold: 400,
			progressive: 3e3,
			progressiveChunkMode: "mod",
			itemStyle: {},
			emphasis: {}
		}
	});
	yb.extend({
		type: "series.bar",
		dependencies: ["grid", "polar"],
		brushSelector: "rect",
		getProgressive: function() {
			return this.get("large") ? this.get("progressive") : !1
		},
		getProgressiveThreshold: function() {
			var t = this.get("progressiveThreshold"),
				e = this.get("largeThreshold");
			return e > t && (t = e), t
		}
	});
	var _b = Qm([
			["fill", "color"],
			["stroke", "borderColor"],
			["lineWidth", "borderWidth"],
			["stroke", "barBorderColor"],
			["lineWidth", "barBorderWidth"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]),
		xb = {
			getBarItemStyle: function(t) {
				var e = _b(this, t);
				if (this.getBorderLineDash) {
					var n = this.getBorderLineDash();
					n && (e.lineDash = n)
				}
				return e
			}
		},
		wb = ["itemStyle", "barBorderWidth"];
	o(Pa.prototype, xb), El({
		type: "bar",
		render: function(t, e, n) {
			this._updateDrawMode(t);
			var i = t.get("coordinateSystem");
			return ("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t,
				e, n) : this._renderNormal(t, e, n)), this.group
		},
		incrementalPrepareRender: function(t) {
			this._clear(), this._updateDrawMode(t)
		},
		incrementalRender: function(t, e) {
			this._incrementalRenderLarge(t, e)
		},
		_updateDrawMode: function(t) {
			var e = t.pipelineContext.large;
			(null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this
			._clear())
		},
		_renderNormal: function(t) {
			var e, n = this.group,
				i = t.getData(),
				r = this._data,
				a = t.coordinateSystem,
				o = a.getBaseAxis();
			"cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o
				.dim);
			var s = t.isAnimationEnabled() ? t : null;
			i.diff(r).add(function(r) {
				if (i.hasValue(r)) {
					var o = i.getItemModel(r),
						l = Sb[a.type](i, r, o),
						u = bb[a.type](i, r, o, l, e, s);
					i.setItemGraphicEl(r, u), n.add(u), kh(u, i, r, o, l, t, e, "polar" === a
						.type)
				}
			}).update(function(o, l) {
				var u = r.getItemGraphicEl(l);
				if (!i.hasValue(o)) return void n.remove(u);
				var h = i.getItemModel(o),
					c = Sb[a.type](i, o, h);
				u ? ba(u, {
						shape: c
					}, s, o) : u = bb[a.type](i, o, h, c, e, s, !0), i.setItemGraphicEl(o, u), n
					.add(u), kh(u, i, o, h, c, t, e, "polar" === a.type)
			}).remove(function(t) {
				var e = r.getItemGraphicEl(t);
				"cartesian2d" === a.type ? e && Dh(t, s, e) : e && Ah(t, s, e)
			}).execute(), this._data = i
		},
		_renderLarge: function(t) {
			this._clear(), Lh(t, this.group)
		},
		_incrementalRenderLarge: function(t, e) {
			Lh(e, this.group, !0)
		},
		dispose: V,
		remove: function(t) {
			this._clear(t)
		},
		_clear: function(t) {
			var e = this.group,
				n = this._data;
			t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function(e) {
				"sector" === e.type ? Ah(e.dataIndex, t, e) : Dh(e.dataIndex, t, e)
			}) : e.removeAll(), this._data = null
		}
	});
	var bb = {
			cartesian2d: function(t, e, n, i, r, a, s) {
				var l = new gy({
					shape: o({}, i)
				});
				if (a) {
					var u = l.shape,
						h = r ? "height" : "width",
						c = {};
					u[h] = 0, c[h] = i[h], ky[s ? "updateProps" : "initProps"](l, {
						shape: c
					}, a, e)
				}
				return l
			},
			polar: function(t, e, n, i, r, a, o) {
				var l = i.startAngle < i.endAngle,
					u = new uy({
						shape: s({
							clockwise: l
						}, i)
					});
				if (a) {
					var h = u.shape,
						c = r ? "r" : "endAngle",
						d = {};
					h[c] = r ? 0 : i.startAngle, d[c] = i[c], ky[o ? "updateProps" : "initProps"](u, {
						shape: d
					}, a, e)
				}
				return u
			}
		},
		Sb = {
			cartesian2d: function(t, e, n) {
				var i = t.getItemLayout(e),
					r = Ph(n, i),
					a = i.width > 0 ? 1 : -1,
					o = i.height > 0 ? 1 : -1;
				return {
					x: i.x + a * r / 2,
					y: i.y + o * r / 2,
					width: i.width - a * r,
					height: i.height - o * r
				}
			},
			polar: function(t, e) {
				var n = t.getItemLayout(e);
				return {
					cx: n.cx,
					cy: n.cy,
					r0: n.r0,
					r: n.r,
					startAngle: n.startAngle,
					endAngle: n.endAngle
				}
			}
		},
		Mb = Lr.extend({
			type: "largeBar",
			shape: {
				points: []
			},
			buildPath: function(t, e) {
				for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, a = 0; a < n.length; a +=
					2) i[this.__valueIdx] = n[a + r], t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1])
			}
		}),
		Ib = Math.PI,
		Tb = function(t, e) {
			this.opt = e, this.axisModel = t, s(e, {
				labelOffset: 0,
				nameDirection: 1,
				tickDirection: 1,
				labelDirection: 1,
				silent: !0
			}), this.group = new qg;
			var n = new qg({
				position: e.position.slice(),
				rotation: e.rotation
			});
			n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
		};
	Tb.prototype = {
		constructor: Tb,
		hasBuilder: function(t) {
			return !!Cb[t]
		},
		add: function(t) {
			Cb[t].call(this)
		},
		getGroup: function() {
			return this.group
		}
	};
	var Cb = {
			axisLine: function() {
				var t = this.opt,
					e = this.axisModel;
				if (e.get("axisLine.show")) {
					var n = this.axisModel.axis.getExtent(),
						i = this._transform,
						r = [n[0], 0],
						a = [n[1], 0];
					i && (ae(r, r, i), ae(a, a, i));
					var s = o({
						lineCap: "round"
					}, e.getModel("axisLine.lineStyle").getLineStyle());
					this.group.add(new my(Yr({
						anid: "line",
						shape: {
							x1: r[0],
							y1: r[1],
							x2: a[0],
							y2: a[1]
						},
						style: s,
						strokeContainThreshold: t.strokeContainThreshold || 5,
						silent: !0,
						z2: 1
					})));
					var l = e.get("axisLine.symbol"),
						u = e.get("axisLine.symbolSize"),
						h = e.get("axisLine.symbolOffset") || 0;
					if ("number" == typeof h && (h = [h, h]), null != l) {
						"string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) &&
							(u = [u, u]);
						var c = u[0],
							d = u[1];
						f([{
							rotate: t.rotation + Math.PI / 2,
							offset: h[0],
							r: 0
						}, {
							rotate: t.rotation - Math.PI / 2,
							offset: h[1],
							r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[
								1]))
						}], function(e, n) {
							if ("none" !== l[n] && null != l[n]) {
								var i = Wu(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
									a = e.r + e.offset,
									o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t
										.rotation)];
								i.attr({
									rotation: e.rotate,
									position: o,
									silent: !0
								}), this.group.add(i)
							}
						}, this)
					}
				}
			},
			axisTickLabel: function() {
				var t = this.axisModel,
					e = this.opt,
					n = Gh(this, t, e),
					i = Hh(this, t, e);
				Bh(t, i, n)
			},
			axisName: function() {
				var t = this.opt,
					e = this.axisModel,
					n = D(t.axisName, e.get("name"));
				if (n) {
					var i, r = e.get("nameLocation"),
						a = t.nameDirection,
						s = e.getModel("nameTextStyle"),
						l = e.get("nameGap") || 0,
						u = this.axisModel.axis.getExtent(),
						h = u[0] > u[1] ? -1 : 1,
						c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Vh(
							r) ? t.labelOffset + a * l : 0],
						d = e.get("nameRotate");
					null != d && (d = d * Ib / 180);
					var f;
					Vh(r) ? i = Db(t.rotation, null != d ? d : t.rotation, a) : (i = Rh(t, r, d || 0, u), f = t
						.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !
							isFinite(f) && (f = null)));
					var p = s.getFont(),
						g = e.get("nameTruncate", !0) || {},
						m = g.ellipsis,
						v = D(t.nameTruncateMaxWidth, g.maxWidth, f),
						y = null != m && null != v ? qy(n, v, p, m, {
							minChar: 2,
							placeholder: g.placeholder
						}) : n,
						_ = e.get("tooltip", !0),
						x = e.mainType,
						w = {
							componentType: x,
							name: n,
							$vars: ["name"]
						};
					w[x + "Index"] = e.componentIndex;
					var b = new ay({
						anid: "name",
						__fullText: n,
						__truncatedText: y,
						position: c,
						rotation: i.rotation,
						silent: Eh(e),
						z2: 1,
						tooltip: _ && _.show ? o({
							content: n,
							formatter: function() {
								return n
							},
							formatterParams: w
						}, _) : null
					});
					da(b.style, s, {
						text: y,
						textFont: p,
						textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
						textAlign: i.textAlign,
						textVerticalAlign: i.textVerticalAlign
					}), e.get("triggerEvent") && (b.eventData = zh(e), b.eventData.targetType = "axisName",
						b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(
						b), b.decomposeTransform()
				}
			}
		},
		Db = Tb.innerTextLayout = function(t, e, n) {
			var i, r, a = Za(e - t);
			return qa(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : qa(a - Ib) ? (r = n > 0 ? "bottom" :
				"top", i = "center") : (r = "middle", i = a > 0 && Ib > a ? n > 0 ? "right" : "left" : n > 0 ?
				"left" : "right"), {
				rotation: a,
				textAlign: i,
				textVerticalAlign: r
			}
		},
		Ab = f,
		kb = _,
		Pb = zl({
			type: "axis",
			_axisPointer: null,
			axisPointerClass: null,
			render: function(t, e, n, i) {
				this.axisPointerClass && Yh(t), Pb.superApply(this, "render", arguments), tc(this, t, e, n,
					i, !0)
			},
			updateAxisPointer: function(t, e, n, i) {
				tc(this, t, e, n, i, !1)
			},
			remove: function(t, e) {
				var n = this._axisPointer;
				n && n.remove(e), Pb.superApply(this, "remove", arguments)
			},
			dispose: function(t, e) {
				ec(this, e), Pb.superApply(this, "dispose", arguments)
			}
		}),
		Lb = [];
	Pb.registerAxisPointerClass = function(t, e) {
		Lb[t] = e
	}, Pb.getAxisPointerClass = function(t) {
		return t && Lb[t]
	};
	var Ob = ["axisLine", "axisTickLabel", "axisName"],
		zb = ["splitArea", "splitLine"],
		Rb = Pb.extend({
			type: "cartesianAxis",
			axisPointerClass: "CartesianAxisPointer",
			render: function(t, e, n, i) {
				this.group.removeAll();
				var r = this._axisGroup;
				if (this._axisGroup = new qg, this.group.add(this._axisGroup), t.get("show")) {
					var a = t.getCoordSysModel(),
						o = nc(a, t),
						s = new Tb(t, o);
					f(Ob, s.add, s), this._axisGroup.add(s.getGroup()), f(zb, function(e) {
						t.get(e + ".show") && this["_" + e](t, a)
					}, this), Ca(r, this._axisGroup, t), Rb.superCall(this, "render", t, e, n, i)
				}
			},
			remove: function() {
				this._splitAreaColors = null
			},
			_splitLine: function(t, e) {
				var n = t.axis;
				if (!n.scale.isBlank()) {
					var i = t.getModel("splitLine"),
						r = i.getModel("lineStyle"),
						a = r.get("color");
					a = x(a) ? a : [a];
					for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n
							.getTicksCoords({
								tickModel: i
							}), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
						var g = n.toGlobalCoord(h[p].coord);
						l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g,
							d[0] = o.x + o.width, d[1] = g);
						var m = u++ % a.length,
							v = h[p].tickValue;
						this._axisGroup.add(new my(Yr({
							anid: null != v ? "line_" + h[p].tickValue : null,
							shape: {
								x1: c[0],
								y1: c[1],
								x2: d[0],
								y2: d[1]
							},
							style: s({
								stroke: a[m]
							}, f),
							silent: !0
						})))
					}
				}
			},
			_splitArea: function(t, e) {
				var n = t.axis;
				if (!n.scale.isBlank()) {
					var i = t.getModel("splitArea"),
						r = i.getModel("areaStyle"),
						a = r.get("color"),
						o = e.coordinateSystem.getRect(),
						l = n.getTicksCoords({
							tickModel: i,
							clamp: !0
						});
					if (l.length) {
						var u = a.length,
							h = this._splitAreaColors,
							c = N(),
							d = 0;
						if (h)
							for (var f = 0; f < l.length; f++) {
								var p = h.get(l[f].tickValue);
								if (null != p) {
									d = (p + (u - 1) * f) % u;
									break
								}
							}
						var g = n.toGlobalCoord(l[0].coord),
							m = r.getAreaStyle();
						a = x(a) ? a : [a];
						for (var f = 1; f < l.length; f++) {
							var v, y, _, w, b = n.toGlobalCoord(l[f].coord);
							n.isHorizontal() ? (v = g, y = o.y, _ = b - v, w = o.height, g = v + _) : (v = o
								.x, y = g, _ = o.width, w = b - y, g = y + w);
							var S = l[f - 1].tickValue;
							null != S && c.set(S, d), this._axisGroup.add(new gy({
								anid: null != S ? "area_" + S : null,
								shape: {
									x: v,
									y: y,
									width: _,
									height: w
								},
								style: s({
									fill: a[d]
								}, m),
								silent: !0
							})), d = (d + 1) % u
						}
						this._splitAreaColors = c
					}
				}
			}
		});
	Rb.extend({
		type: "xAxis"
	}), Rb.extend({
		type: "yAxis"
	}), zl({
		type: "grid",
		render: function(t) {
			this.group.removeAll(), t.get("show") && this.group.add(new gy({
				shape: t.coordinateSystem.getRect(),
				style: s({
					fill: t.get("backgroundColor")
				}, t.getItemStyle()),
				silent: !0,
				z2: -1
			}))
		}
	}), Sl(function(t) {
		t.xAxis && t.yAxis && !t.grid && (t.grid = {})
	}), Al(_(Du, "bar")), Al(Mw), kl({
		seriesType: "bar",
		reset: function(t) {
			t.getData().setVisual("legendSymbol", "roundRect")
		}
	}), W_.extend({
		type: "series.line",
		dependencies: ["grid", "polar"],
		getInitialData: function() {
			return hu(this.getSource(), this)
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "cartesian2d",
			legendHoverLink: !0,
			hoverAnimation: !0,
			clipOverflow: !0,
			label: {
				position: "top"
			},
			lineStyle: {
				width: 2,
				type: "solid"
			},
			step: !1,
			smooth: !1,
			smoothMonotone: null,
			symbol: "emptyCircle",
			symbolSize: 4,
			symbolRotate: null,
			showSymbol: !0,
			showAllSymbol: "auto",
			connectNulls: !1,
			sampling: "none",
			animationEasing: "linear",
			progressive: 0,
			hoverLayerThreshold: 1 / 0
		}
	});
	var Eb = ic.prototype,
		Bb = ic.getSymbolSize = function(t, e) {
			var n = t.getItemVisual(e, "symbolSize");
			return n instanceof Array ? n.slice() : [+n, +n]
		};
	Eb._createSymbol = function(t, e, n, i, r) {
		this.removeAll();
		var a = e.getItemVisual(n, "color"),
			o = Wu(t, -1, -1, 2, 2, a, r);
		o.attr({
			z2: 100,
			culling: !0,
			scale: rc(i)
		}), o.drift = ac, this._symbolType = t, this.add(o)
	}, Eb.stopSymbolAnimation = function(t) {
		this.childAt(0).stopAnimation(t)
	}, Eb.getSymbolPath = function() {
		return this.childAt(0)
	}, Eb.getScale = function() {
		return this.childAt(0).scale
	}, Eb.highlight = function() {
		this.childAt(0).trigger("emphasis")
	}, Eb.downplay = function() {
		this.childAt(0).trigger("normal")
	}, Eb.setZ = function(t, e) {
		var n = this.childAt(0);
		n.zlevel = t, n.z = e
	}, Eb.setDraggable = function(t) {
		var e = this.childAt(0);
		e.draggable = t, e.cursor = t ? "move" : "pointer"
	}, Eb.updateData = function(t, e, n) {
		this.silent = !1;
		var i = t.getItemVisual(e, "symbol") || "circle",
			r = t.hostModel,
			a = Bb(t, e),
			o = i !== this._symbolType;
		if (o) {
			var s = t.getItemVisual(e, "symbolKeepAspect");
			this._createSymbol(i, t, e, a, s)
		} else {
			var l = this.childAt(0);
			l.silent = !1, ba(l, {
				scale: rc(a)
			}, r, e)
		}
		if (this._updateCommon(t, e, a, n), o) {
			var l = this.childAt(0),
				u = n && n.fadeIn,
				h = {
					scale: l.scale.slice()
				};
			u && (h.style = {
				opacity: l.style.opacity
			}), l.scale = [0, 0], u && (l.style.opacity = 0), Sa(l, h, r, e)
		}
		this._seriesModel = r
	};
	var Nb = ["itemStyle"],
		Fb = ["emphasis", "itemStyle"],
		Vb = ["label"],
		Gb = ["emphasis", "label"];
	Eb._updateCommon = function(t, e, n, i) {
		function r(e) {
			return b ? t.getName(e) : Ih(t, e)
		}
		var a = this.childAt(0),
			s = t.hostModel,
			l = t.getItemVisual(e, "color");
		"image" !== a.type && a.useStyle({
			strokeNoScale: !0
		});
		var u = i && i.itemStyle,
			h = i && i.hoverItemStyle,
			c = i && i.symbolRotate,
			d = i && i.symbolOffset,
			f = i && i.labelModel,
			p = i && i.hoverLabelModel,
			g = i && i.hoverAnimation,
			m = i && i.cursorStyle;
		if (!i || t.hasItemOption) {
			var v = i && i.itemModel ? i.itemModel : t.getItemModel(e);
			u = v.getModel(Nb).getItemStyle(["color"]), h = v.getModel(Fb).getItemStyle(), c = v.getShallow(
					"symbolRotate"), d = v.getShallow("symbolOffset"), f = v.getModel(Vb), p = v.getModel(Gb),
				g = v.getShallow("hoverAnimation"), m = v.getShallow("cursor")
		} else h = o({}, h);
		var y = a.style;
		a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [Fa(d[0], n[0]), Fa(d[1], n[
			1])]), m && a.attr("cursor", m), a.setColor(l, i && i.symbolInnerColor), a.setStyle(u);
		var _ = t.getItemVisual(e, "opacity");
		null != _ && (y.opacity = _);
		var x = t.getItemVisual(e, "liftZ"),
			w = a.__z2Origin;
		null != x ? null == w && (a.__z2Origin = a.z2, a.z2 += x) : null != w && (a.z2 = w, a.__z2Origin =
		null);
		var b = i && i.useNameLabel;
		ca(y, h, f, p, {
			labelFetcher: s,
			labelDataIndex: e,
			defaultText: r,
			isRectText: !0,
			autoColor: l
		}), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = h, ha(a);
		var S = rc(n);
		if (g && s.isAnimationEnabled()) {
			var M = function() {
					if (!this.incremental) {
						var t = S[1] / S[0];
						this.animateTo({
							scale: [Math.max(1.1 * S[0], S[0] + 3), Math.max(1.1 * S[1], S[1] + 3 * t)]
						}, 400, "elasticOut")
					}
				},
				I = function() {
					this.incremental || this.animateTo({
						scale: S
					}, 400, "elasticOut")
				};
			a.on("mouseover", M).on("mouseout", I).on("emphasis", M).on("normal", I)
		}
	}, Eb.fadeOut = function(t, e) {
		var n = this.childAt(0);
		this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), ba(n, {
			style: {
				opacity: 0
			},
			scale: [0, 0]
		}, this._seriesModel, this.dataIndex, t)
	}, h(ic, qg);
	var Hb = oc.prototype;
	Hb.updateData = function(t, e) {
		e = lc(e);
		var n = this.group,
			i = t.hostModel,
			r = this._data,
			a = this._symbolCtor,
			o = uc(t);
		r || n.removeAll(), t.diff(r).add(function(i) {
			var r = t.getItemLayout(i);
			if (sc(t, r, i, e)) {
				var s = new a(t, i, o);
				s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s)
			}
		}).update(function(s, l) {
			var u = r.getItemGraphicEl(l),
				h = t.getItemLayout(s);
			return sc(t, h, s, e) ? (u ? (u.updateData(t, s, o), ba(u, {
					position: h
				}, i)) : (u = new a(t, s), u.attr("position", h)), n.add(u), void t
				.setItemGraphicEl(s, u)) : void n.remove(u)
		}).remove(function(t) {
			var e = r.getItemGraphicEl(t);
			e && e.fadeOut(function() {
				n.remove(e)
			})
		}).execute(), this._data = t
	}, Hb.isPersistent = function() {
		return !0
	}, Hb.updateLayout = function() {
		var t = this._data;
		t && t.eachItemGraphicEl(function(e, n) {
			var i = t.getItemLayout(n);
			e.attr("position", i)
		})
	}, Hb.incrementalPrepareUpdate = function(t) {
		this._seriesScope = uc(t), this._data = null, this.group.removeAll()
	}, Hb.incrementalUpdate = function(t, e, n) {
		function i(t) {
			t.isGroup || (t.incremental = t.useHoverLayer = !0)
		}
		n = lc(n);
		for (var r = t.start; r < t.end; r++) {
			var a = e.getItemLayout(r);
			if (sc(e, a, r, n)) {
				var o = new this._symbolCtor(e, r, this._seriesScope);
				o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o)
			}
		}
	}, Hb.remove = function(t) {
		var e = this.group,
			n = this._data;
		n && t ? n.eachItemGraphicEl(function(t) {
			t.fadeOut(function() {
				e.remove(t)
			})
		}) : e.removeAll()
	};
	var Wb = function(t, e, n, i, r, a, o, s) {
			for (var l = fc(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], m = hc(r, e, o), v = hc(
					a, t, s), y = 0; y < l.length; y++) {
				var _ = l[y],
					x = !0;
				switch (_.cmd) {
					case "=":
						var w = t.getItemLayout(_.idx),
							b = e.getItemLayout(_.idx1);
						(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(n[_.idx]), d
							.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));
						break;
					case "+":
						var S = _.idx;
						u.push(r.dataToPoint([e.get(m.dataDimsForPoint[0], S), e.get(m.dataDimsForPoint[1], S)])), h
							.push(e.getItemLayout(S).slice()), c.push(dc(m, r, e, S)), d.push(i[S]), g.push(e
								.getRawIndex(S));
						break;
					case "-":
						var S = _.idx,
							M = t.getRawIndex(S);
						M !== S ? (u.push(t.getItemLayout(S)), h.push(a.dataToPoint([t.get(v.dataDimsForPoint[0],
							S), t.get(v.dataDimsForPoint[1], S)
						])), c.push(n[S]), d.push(dc(v, a, t, S)), g.push(M)) : x = !1
				}
				x && (f.push(_), p.push(p.length))
			}
			p.sort(function(t, e) {
				return g[t] - g[e]
			});
			for (var I = [], T = [], C = [], D = [], A = [], y = 0; y < p.length; y++) {
				var S = p[y];
				I[y] = u[S], T[y] = h[S], C[y] = c[S], D[y] = d[S], A[y] = f[S]
			}
			return {
				current: I,
				next: T,
				stackedOnCurrent: C,
				stackedOnNext: D,
				status: A
			}
		},
		Ub = oe,
		Xb = se,
		Zb = Z,
		qb = H,
		jb = [],
		Yb = [],
		Kb = [],
		$b = Lr.extend({
			type: "ec-polyline",
			shape: {
				points: [],
				smooth: 0,
				smoothConstraint: !0,
				smoothMonotone: null,
				connectNulls: !1
			},
			style: {
				fill: null,
				stroke: "#000"
			},
			brush: ly(Lr.prototype.brush),
			buildPath: function(t, e) {
				var n = e.points,
					i = 0,
					r = n.length,
					a = yc(n, e.smoothConstraint);
				if (e.connectNulls) {
					for (; r > 0 && pc(n[r - 1]); r--);
					for (; r > i && pc(n[i]); i++);
				}
				for (; r > i;) i += gc(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e
					.connectNulls) + 1
			}
		}),
		Jb = Lr.extend({
			type: "ec-polygon",
			shape: {
				points: [],
				stackedOnPoints: [],
				smooth: 0,
				stackedOnSmooth: 0,
				smoothConstraint: !0,
				smoothMonotone: null,
				connectNulls: !1
			},
			brush: ly(Lr.prototype.brush),
			buildPath: function(t, e) {
				var n = e.points,
					i = e.stackedOnPoints,
					r = 0,
					a = n.length,
					o = e.smoothMonotone,
					s = yc(n, e.smoothConstraint),
					l = yc(i, e.smoothConstraint);
				if (e.connectNulls) {
					for (; a > 0 && pc(n[a - 1]); a--);
					for (; a > r && pc(n[r]); r++);
				}
				for (; a > r;) {
					var u = gc(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
					gc(t, i, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r +=
						u + 1, t.closePath()
				}
			}
		});
	Ts.extend({
		type: "line",
		init: function() {
			var t = new qg,
				e = new oc;
			this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
		},
		render: function(t, e, n) {
			var i = t.coordinateSystem,
				r = this.group,
				a = t.getData(),
				o = t.getModel("lineStyle"),
				l = t.getModel("areaStyle"),
				u = a.mapArray(a.getItemLayout),
				h = "polar" === i.type,
				c = this._coordSys,
				d = this._symbolDraw,
				f = this._polyline,
				p = this._polygon,
				g = this._lineGroup,
				m = t.get("animation"),
				v = !l.isEmpty(),
				y = l.get("origin"),
				_ = hc(i, a, y),
				x = bc(i, a, _),
				w = t.get("showSymbol"),
				b = w && !h && Dc(t, a, i),
				S = this._data;
			S && S.eachItemGraphicEl(function(t, e) {
				t.__temp && (r.remove(t), S.setItemGraphicEl(e, null))
			}), w || d.remove(), r.add(g);
			var M = !h && t.get("step");
			f && c.type === i.type && M === this._step ? (v && !p ? p = this._newPolygon(u, x, i, m) :
				p && !v && (g.remove(p), p = this._polygon = null), g.setClipPath(Ic(i, !1, !1, t)),
				w && d.updateData(a, {
					isIgnore: b,
					clipShape: Ic(i, !1, !0, t)
				}), a.eachItemGraphicEl(function(t) {
					t.stopAnimation(!0)
				}), _c(this._stackedOnPoints, x) && _c(this._points, u) || (m ? this
					._updateAnimation(a, x, i, n, M, y) : (M && (u = Tc(u, i, M), x = Tc(x, i, M)),
						f.setShape({
							points: u
						}), p && p.setShape({
							points: u,
							stackedOnPoints: x
						})))) : (w && d.updateData(a, {
				isIgnore: b,
				clipShape: Ic(i, !1, !0, t)
			}), M && (u = Tc(u, i, M), x = Tc(x, i, M)), f = this._newPolyline(u, i, m), v && (
				p = this._newPolygon(u, x, i, m)), g.setClipPath(Ic(i, !0, !1, t)));
			var I = Cc(a, i) || a.getVisual("color");
			f.useStyle(s(o.getLineStyle(), {
				fill: "none",
				stroke: I,
				lineJoin: "bevel"
			}));
			var T = t.get("smooth");
			if (T = xc(t.get("smooth")), f.setShape({
					smooth: T,
					smoothMonotone: t.get("smoothMonotone"),
					connectNulls: t.get("connectNulls")
				}), p) {
				var C = a.getCalculationInfo("stackedOnSeries"),
					D = 0;
				p.useStyle(s(l.getAreaStyle(), {
					fill: I,
					opacity: .7,
					lineJoin: "bevel"
				})), C && (D = xc(C.get("smooth"))), p.setShape({
					smooth: T,
					stackedOnSmooth: D,
					smoothMonotone: t.get("smoothMonotone"),
					connectNulls: t.get("connectNulls")
				})
			}
			this._data = a, this._coordSys = i, this._stackedOnPoints = x, this._points = u, this
				._step = M, this._valueOrigin = y
		},
		dispose: function() {},
		highlight: function(t, e, n, i) {
			var r = t.getData(),
				a = Vi(r, i);
			if (!(a instanceof Array) && null != a && a >= 0) {
				var o = r.getItemGraphicEl(a);
				if (!o) {
					var s = r.getItemLayout(a);
					if (!s) return;
					o = new ic(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore =
						isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o
						.stopSymbolAnimation(!0), this.group.add(o)
				}
				o.highlight()
			} else Ts.prototype.highlight.call(this, t, e, n, i)
		},
		downplay: function(t, e, n, i) {
			var r = t.getData(),
				a = Vi(r, i);
			if (null != a && a >= 0) {
				var o = r.getItemGraphicEl(a);
				o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
			} else Ts.prototype.downplay.call(this, t, e, n, i)
		},
		_newPolyline: function(t) {
			var e = this._polyline;
			return e && this._lineGroup.remove(e), e = new $b({
				shape: {
					points: t
				},
				silent: !0,
				z2: 10
			}), this._lineGroup.add(e), this._polyline = e, e
		},
		_newPolygon: function(t, e) {
			var n = this._polygon;
			return n && this._lineGroup.remove(n), n = new Jb({
				shape: {
					points: t,
					stackedOnPoints: e
				},
				silent: !0
			}), this._lineGroup.add(n), this._polygon = n, n
		},
		_updateAnimation: function(t, e, n, i, r, a) {
			var o = this._polyline,
				s = this._polygon,
				l = t.hostModel,
				u = Wb(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin,
				a),
				h = u.current,
				c = u.stackedOnCurrent,
				d = u.next,
				f = u.stackedOnNext;
			r && (h = Tc(u.current, n, r), c = Tc(u.stackedOnCurrent, n, r), d = Tc(u.next, n, r), f =
				Tc(u.stackedOnNext, n, r)), o.shape.__points = u.current, o.shape.points = h, ba(
			o, {
				shape: {
					points: d
				}
			}, l), s && (s.setShape({
				points: h,
				stackedOnPoints: c
			}), ba(s, {
				shape: {
					points: d,
					stackedOnPoints: f
				}
			}, l));
			for (var p = [], g = u.status, m = 0; m < g.length; m++) {
				var v = g[m].cmd;
				if ("=" === v) {
					var y = t.getItemGraphicEl(g[m].idx1);
					y && p.push({
						el: y,
						ptIdx: m
					})
				}
			}
			o.animators && o.animators.length && o.animators[0].during(function() {
				for (var t = 0; t < p.length; t++) {
					var e = p[t].el;
					e.attr("position", o.shape.__points[p[t].ptIdx])
				}
			})
		},
		remove: function() {
			var t = this.group,
				e = this._data;
			this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function(
					n, i) {
					n.__temp && (t.remove(n), e.setItemGraphicEl(i, null))
				}), this._polyline = this._polygon = this._coordSys = this._points = this
				._stackedOnPoints = this._data = null
		}
	});
	var Qb = function(t, e, n) {
			return {
				seriesType: t,
				performRawSeries: !0,
				reset: function(t, i) {
					function r(e, n) {
						if ("function" == typeof s) {
							var i = t.getRawValue(n),
								r = t.getDataParams(n);
							e.setItemVisual(n, "symbolSize", s(i, r))
						}
						if (e.hasItemOption) {
							var a = e.getItemModel(n),
								o = a.getShallow("symbol", !0),
								l = a.getShallow("symbolSize", !0),
								u = a.getShallow("symbolKeepAspect", !0);
							null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n,
								"symbolSize", l), null != u && e.setItemVisual(n, "symbolKeepAspect", u)
						}
					}
					var a = t.getData(),
						o = t.get("symbol") || e,
						s = t.get("symbolSize"),
						l = t.get("symbolKeepAspect");
					if (a.setVisual({
							legendSymbol: n || o,
							symbol: o,
							symbolSize: s,
							symbolKeepAspect: l
						}), !i.isSeriesFiltered(t)) {
						var u = "function" == typeof s;
						return {
							dataEach: a.hasItemOption || u ? r : null
						}
					}
				}
			}
		},
		tS = function(t) {
			return {
				seriesType: t,
				plan: Z_(),
				reset: function(t) {
					function e(t, e) {
						for (var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, u = 0,
								h = [], c = []; l < t.end; l++) {
							var d;
							if (1 === s) {
								var f = e.get(o[0], l);
								d = !isNaN(f) && i.dataToPoint(f, null, c)
							} else {
								var f = h[0] = e.get(o[0], l),
									p = h[1] = e.get(o[1], l);
								d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c)
							}
							a ? (r[u++] = d ? d[0] : 0 / 0, r[u++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d &&
								d.slice() || [0 / 0, 0 / 0])
						}
						a && e.setLayout("symbolPoints", r)
					}
					var n = t.getData(),
						i = t.coordinateSystem,
						r = t.pipelineContext,
						a = r.large;
					if (i) {
						var o = p(i.dimensions, function(t) {
								return n.mapDimension(t)
							}).slice(0, 2),
							s = o.length,
							l = n.getCalculationInfo("stackResultDimension");
						return lu(n, o[0]) && (o[0] = l), lu(n, o[1]) && (o[1] = l), s && {
							progress: e
						}
					}
				}
			}
		},
		eS = {
			average: function(t) {
				for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
				return 0 === n ? 0 / 0 : e / n
			},
			sum: function(t) {
				for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
				return e
			},
			max: function(t) {
				for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
				return isFinite(e) ? e : 0 / 0
			},
			min: function(t) {
				for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
				return isFinite(e) ? e : 0 / 0
			},
			nearest: function(t) {
				return t[0]
			}
		},
		nS = function(t) {
			return Math.round(t.length / 2)
		},
		iS = function(t) {
			return {
				seriesType: t,
				modifyOutputEnd: !0,
				reset: function(t) {
					var e = t.getData(),
						n = t.get("sampling"),
						i = t.coordinateSystem;
					if ("cartesian2d" === i.type && n) {
						var r = i.getBaseAxis(),
							a = i.getOtherAxis(r),
							o = r.getExtent(),
							s = o[1] - o[0],
							l = Math.round(e.count() / s);
						if (l > 1) {
							var u;
							"string" == typeof n ? u = eS[n] : "function" == typeof n && (u = n), u && t
								.setData(e.downSample(e.mapDimension(a.dim), 1 / l, u, nS))
						}
					}
				}
			}
		};
	kl(Qb("line", "circle", "line")), Al(tS("line")), Ml(Ox.PROCESSOR.STATISTIC, iS("line"));
	var rS = function(t, e, n) {
			e = x(e) && {
				coordDimensions: e
			} || o({}, e);
			var i = t.getSource(),
				r = pw(i, e),
				a = new cw(r, t);
			return a.initData(i, n), a
		},
		aS = {
			updateSelectedMap: function(t) {
				this._targetList = x(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function(t, e) {
					return t.set(e.name, e), t
				}, N())
			},
			select: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
					i = this.get("selectedMode");
				"single" === i && this._selectTargetMap.each(function(t) {
					t.selected = !1
				}), n && (n.selected = !0)
			},
			unSelect: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				n && (n.selected = !1)
			},
			toggleSelected: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0
			},
			isSelected: function(t, e) {
				var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
				return n && n.selected
			}
		},
		oS = Rl({
			type: "series.pie",
			init: function(t) {
				oS.superApply(this, "init", arguments), this.legendDataProvider = function() {
					return this.getRawData()
				}, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
			},
			mergeOption: function(t) {
				oS.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
			},
			getInitialData: function() {
				return rS(this, ["value"])
			},
			_createSelectableList: function() {
				for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t
				.count(); r > i; i++) n.push({
					name: t.getName(i),
					value: t.get(e, i),
					selected: fs(t, i, "selected")
				});
				return n
			},
			getDataParams: function(t) {
				var e = this.getData(),
					n = oS.superCall(this, "getDataParams", t),
					i = [];
				return e.each(e.mapDimension("value"), function(t) {
						i.push(t)
					}), n.percent = Xa(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"),
					n
			},
			_defaultLabelLine: function(t) {
				Oi(t, "labelLine", ["show"]);
				var e = t.labelLine,
					n = t.emphasis.labelLine;
				e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				center: ["50%", "50%"],
				radius: [0, "75%"],
				clockwise: !0,
				startAngle: 90,
				minAngle: 0,
				selectedOffset: 10,
				hoverOffset: 10,
				avoidLabelOverlap: !0,
				percentPrecision: 2,
				stillShowZeroSum: !0,
				label: {
					rotate: !1,
					show: !0,
					position: "outer"
				},
				labelLine: {
					show: !0,
					length: 15,
					length2: 15,
					smooth: !1,
					lineStyle: {
						width: 1,
						type: "solid"
					}
				},
				itemStyle: {
					borderWidth: 1
				},
				animationType: "expansion",
				animationEasing: "cubicOut"
			}
		});
	c(oS, aS);
	var sS = Lc.prototype;
	sS.updateData = function(t, e, n) {
		function i() {
			a.stopAnimation(!0), a.animateTo({
				shape: {
					r: h.r + l.get("hoverOffset")
				}
			}, 300, "elasticOut")
		}

		function r() {
			a.stopAnimation(!0), a.animateTo({
				shape: {
					r: h.r
				}
			}, 300, "elasticOut")
		}
		var a = this.childAt(0),
			l = t.hostModel,
			u = t.getItemModel(e),
			h = t.getItemLayout(e),
			c = o({}, h);
		if (c.label = null, n) {
			a.setShape(c);
			var d = l.getShallow("animationType");
			"scale" === d ? (a.shape.r = h.r0, Sa(a, {
				shape: {
					r: h.r
				}
			}, l, e)) : (a.shape.endAngle = h.startAngle, ba(a, {
				shape: {
					endAngle: h.endAngle
				}
			}, l, e))
		} else ba(a, {
			shape: c
		}, l, e);
		var f = t.getItemVisual(e, "color");
		a.useStyle(s({
				lineJoin: "bevel",
				fill: f
			}, u.getModel("itemStyle").getItemStyle())), a.hoverStyle = u.getModel("emphasis.itemStyle")
			.getItemStyle();
		var p = u.getShallow("cursor");
		p && a.attr("cursor", p), Pc(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l
			.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get(
			"hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on(
			"emphasis", i).on("normal", r), this._updateLabel(t, e), ha(this)
	}, sS._updateLabel = function(t, e) {
		var n = this.childAt(1),
			i = this.childAt(2),
			r = t.hostModel,
			a = t.getItemModel(e),
			o = t.getItemLayout(e),
			s = o.label,
			l = t.getItemVisual(e, "color");
		ba(n, {
			shape: {
				points: s.linePoints || [
					[s.x, s.y],
					[s.x, s.y],
					[s.x, s.y]
				]
			}
		}, r, e), ba(i, {
			style: {
				x: s.x,
				y: s.y
			}
		}, r, e), i.attr({
			rotation: s.rotation,
			origin: [s.x, s.y],
			z2: 10
		});
		var u = a.getModel("label"),
			h = a.getModel("emphasis.label"),
			c = a.getModel("labelLine"),
			d = a.getModel("emphasis.labelLine"),
			l = t.getItemVisual(e, "color");
		ca(i.style, i.hoverStyle = {}, u, h, {
				labelFetcher: t.hostModel,
				labelDataIndex: e,
				defaultText: t.getName(e),
				autoColor: l,
				useInsideStyle: !!s.inside
			}, {
				textAlign: s.textAlign,
				textVerticalAlign: s.verticalAlign,
				opacity: t.getItemVisual(e, "opacity")
			}), i.ignore = i.normalIgnore = !u.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n
			.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
				stroke: l,
				opacity: t.getItemVisual(e, "opacity")
			}), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle")
			.getLineStyle();
		var f = c.get("smooth");
		f && f === !0 && (f = .4), n.setShape({
			smooth: f
		})
	}, h(Lc, qg);
	var lS = (Ts.extend({
			type: "pie",
			init: function() {
				var t = new qg;
				this._sectorGroup = t
			},
			render: function(t, e, n, i) {
				if (!i || i.from !== this.uid) {
					var r = t.getData(),
						a = this._data,
						o = this.group,
						s = e.get("animation"),
						l = !a,
						u = t.get("animationType"),
						h = _(kc, this.uid, t, s, n),
						c = t.get("selectedMode");
					if (r.diff(a).add(function(t) {
							var e = new Lc(r, t);
							l && "scale" !== u && e.eachChild(function(t) {
								t.stopAnimation(!0)
							}), c && e.on("click", h), r.setItemGraphicEl(t, e), o.add(e)
						}).update(function(t, e) {
							var n = a.getItemGraphicEl(e);
							n.updateData(r, t), n.off("click"), c && n.on("click", h), o.add(n), r
								.setItemGraphicEl(t, n)
						}).remove(function(t) {
							var e = a.getItemGraphicEl(t);
							o.remove(e)
						}).execute(), s && l && r.count() > 0 && "scale" !== u) {
						var d = r.getItemLayout(0),
							f = Math.max(n.getWidth(), n.getHeight()) / 2,
							p = y(o.removeClipPath, o);
						o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p,
							t))
					}
					this._data = r
				}
			},
			dispose: function() {},
			_createClipPath: function(t, e, n, i, r, a, o) {
				var s = new uy({
					shape: {
						cx: t,
						cy: e,
						r0: 0,
						r: n,
						startAngle: i,
						endAngle: i,
						clockwise: r
					}
				});
				return Sa(s, {
					shape: {
						endAngle: i + (r ? 1 : -1) * Math.PI * 2
					}
				}, o, a), s
			},
			containPoint: function(t, e) {
				var n = e.getData(),
					i = n.getItemLayout(0);
				if (i) {
					var r = t[0] - i.cx,
						a = t[1] - i.cy,
						o = Math.sqrt(r * r + a * a);
					return o <= i.r && o >= i.r0
				}
			}
		}), function(t, e) {
			f(e, function(e) {
				e.update = "updateView", Tl(e, function(n, i) {
					var r = {};
					return i.eachComponent({
						mainType: "series",
						subType: t,
						query: n
					}, function(t) {
						t[e.method] && t[e.method](n.name, n.dataIndex);
						var i = t.getData();
						i.each(function(e) {
							var n = i.getName(e);
							r[n] = t.isSelected(n) || !1
						})
					}), {
						name: n.name,
						selected: r
					}
				})
			})
		}),
		uS = function(t) {
			return {
				getTargetSeries: function(e) {
					var n = {},
						i = N();
					return e.eachSeriesByType(t, function(t) {
						t.__paletteScope = n, i.set(t.uid, t)
					}), i
				},
				reset: function(t) {
					var e = t.getRawData(),
						n = {},
						i = t.getData();
					i.each(function(t) {
						var e = i.getRawIndex(t);
						n[e] = t
					}), e.each(function(r) {
						var a = n[r],
							o = null != a && i.getItemVisual(a, "color", !0);
						if (o) e.setItemVisual(r, "color", o);
						else {
							var s = e.getItemModel(r),
								l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) ||
									r + "", t.__paletteScope, e.count());
							e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l)
						}
					})
				}
			}
		},
		hS = function(t, e, n, i) {
			var r, a, o = t.getData(),
				s = [],
				l = !1;
			o.each(function(n) {
				var i, u, h, c, d = o.getItemLayout(n),
					f = o.getItemModel(n),
					p = f.getModel("label"),
					g = p.get("position") || f.get("emphasis.label.position"),
					m = f.getModel("labelLine"),
					v = m.get("length"),
					y = m.get("length2"),
					_ = (d.startAngle + d.endAngle) / 2,
					x = Math.cos(_),
					w = Math.sin(_);
				r = d.cx, a = d.cy;
				var b = "inside" === g || "inner" === g;
				if ("center" === g) i = d.cx, u = d.cy, c = "center";
				else {
					var S = (b ? (d.r + d.r0) / 2 * x : d.r * x) + r,
						M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;
					if (i = S + 3 * x, u = M + 3 * w, !b) {
						var I = S + x * (v + e - d.r),
							T = M + w * (v + e - d.r),
							C = I + (0 > x ? -1 : 1) * y,
							D = T;
						i = C + (0 > x ? -5 : 5), u = D, h = [
							[S, M],
							[I, T],
							[C, D]
						]
					}
					c = b ? "center" : x > 0 ? "left" : "right"
				}
				var A = p.getFont(),
					k = p.get("rotate") ? 0 > x ? -_ + Math.PI : -_ : 0,
					P = t.getFormattedLabel(n, "normal") || o.getName(n),
					L = Sn(P, A, c, "top");
				l = !!k, d.label = {
					x: i,
					y: u,
					position: g,
					height: L.height,
					len: v,
					len2: y,
					linePoints: h,
					textAlign: c,
					verticalAlign: "middle",
					rotation: k,
					inside: b
				}, b || s.push(d.label)
			}), !l && t.get("avoidLabelOverlap") && zc(s, r, a, e, n, i)
		},
		cS = 2 * Math.PI,
		dS = Math.PI / 180,
		fS = function(t, e, n) {
			e.eachSeriesByType(t, function(t) {
				var e = t.getData(),
					i = e.mapDimension("value"),
					r = t.get("center"),
					a = t.get("radius");
				x(a) || (a = [0, a]), x(r) || (r = [r, r]);
				var o = n.getWidth(),
					s = n.getHeight(),
					l = Math.min(o, s),
					u = Fa(r[0], o),
					h = Fa(r[1], s),
					c = Fa(a[0], l / 2),
					d = Fa(a[1], l / 2),
					f = -t.get("startAngle") * dS,
					p = t.get("minAngle") * dS,
					g = 0;
				e.each(i, function(t) {
					!isNaN(t) && g++
				});
				var m = e.getSum(i),
					v = Math.PI / (m || g) * 2,
					y = t.get("clockwise"),
					_ = t.get("roseType"),
					w = t.get("stillShowZeroSum"),
					b = e.getDataExtent(i);
				b[0] = 0;
				var S = cS,
					M = 0,
					I = f,
					T = y ? 1 : -1;
				if (e.each(i, function(t, n) {
						var i;
						if (isNaN(t)) return void e.setItemLayout(n, {
							angle: 0 / 0,
							startAngle: 0 / 0,
							endAngle: 0 / 0,
							clockwise: y,
							cx: u,
							cy: h,
							r0: c,
							r: _ ? 0 / 0 : d
						});
						i = "area" !== _ ? 0 === m && w ? v : t * v : cS / g, p > i ? (i = p, S -= p) :
							M += t;
						var r = I + T * i;
						e.setItemLayout(n, {
							angle: i,
							startAngle: I,
							endAngle: r,
							clockwise: y,
							cx: u,
							cy: h,
							r0: c,
							r: _ ? Na(t, b, [c, d]) : d
						}), I = r
					}), cS > S && g)
					if (.001 >= S) {
						var C = cS / g;
						e.each(i, function(t, n) {
							if (!isNaN(t)) {
								var i = e.getItemLayout(n);
								i.angle = C, i.startAngle = f + T * n * C, i.endAngle = f + T * (n +
									1) * C
							}
						})
					} else v = S / M, I = f, e.each(i, function(t, n) {
						if (!isNaN(t)) {
							var i = e.getItemLayout(n),
								r = i.angle === p ? p : t * v;
							i.startAngle = I, i.endAngle = I + T * r, I += T * r
						}
					});
				hS(t, d, o, s)
			})
		},
		pS = function(t) {
			return {
				seriesType: t,
				reset: function(t, e) {
					var n = e.findComponents({
						mainType: "legend"
					});
					if (n && n.length) {
						var i = t.getData();
						i.filterSelf(function(t) {
							for (var e = i.getName(t), r = 0; r < n.length; r++)
								if (!n[r].isSelected(e)) return !1;
							return !0
						})
					}
				}
			}
		};
	lS("pie", [{
		type: "pieToggleSelect",
		event: "pieselectchanged",
		method: "toggleSelected"
	}, {
		type: "pieSelect",
		event: "pieselected",
		method: "select"
	}, {
		type: "pieUnSelect",
		event: "pieunselected",
		method: "unSelect"
	}]), kl(uS("pie")), Al(_(fS, "pie")), Ml(pS("pie")), W_.extend({
		type: "series.scatter",
		dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
		getInitialData: function() {
			return hu(this.getSource(), this)
		},
		brushSelector: "point",
		getProgressive: function() {
			var t = this.option.progressive;
			return null == t ? this.option.large ? 5e3 : this.get("progressive") : t
		},
		getProgressiveThreshold: function() {
			var t = this.option.progressiveThreshold;
			return null == t ? this.option.large ? 1e4 : this.get("progressiveThreshold") : t
		},
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			legendHoverLink: !0,
			hoverAnimation: !0,
			symbolSize: 10,
			large: !1,
			largeThreshold: 2e3,
			itemStyle: {
				opacity: .8
			}
		}
	});
	var gS = 4,
		mS = Wr({
			shape: {
				points: null
			},
			symbolProxy: null,
			buildPath: function(t, e) {
				var n = e.points,
					i = e.size,
					r = this.symbolProxy,
					a = r.shape,
					o = t.getContext ? t.getContext() : t,
					s = o && i[0] < gS;
				if (!s)
					for (var l = 0; l < n.length;) {
						var u = n[l++],
							h = n[l++];
						isNaN(u) || isNaN(h) || (a.x = u - i[0] / 2, a.y = h - i[1] / 2, a.width = i[0], a
							.height = i[1], r.buildPath(t, a, !0))
					}
			},
			afterBrush: function(t) {
				var e = this.shape,
					n = e.points,
					i = e.size,
					r = i[0] < gS;
				if (r) {
					this.setTransform(t);
					for (var a = 0; a < n.length;) {
						var o = n[a++],
							s = n[a++];
						isNaN(o) || isNaN(s) || t.fillRect(o - i[0] / 2, s - i[1] / 2, i[0], i[1])
					}
					this.restoreTransform(t)
				}
			},
			findDataIndex: function(t, e) {
				for (var n = this.shape, i = n.points, r = n.size, a = Math.max(r[0], 4), o = Math.max(r[1],
						4), s = i.length / 2 - 1; s >= 0; s--) {
					var l = 2 * s,
						u = i[l] - a / 2,
						h = i[l + 1] - o / 2;
					if (t >= u && e >= h && u + a >= t && h + o >= e) return s
				}
				return -1
			}
		}),
		vS = Rc.prototype;
	vS.isPersistent = function() {
		return !this._incremental
	}, vS.updateData = function(t) {
		this.group.removeAll();
		var e = new mS({
			rectHover: !0,
			cursor: "default"
		});
		e.setShape({
			points: t.getLayout("symbolPoints")
		}), this._setCommon(e, t), this.group.add(e), this._incremental = null
	}, vS.updateLayout = function(t) {
		if (!this._incremental) {
			var e = t.getLayout("symbolPoints");
			this.group.eachChild(function(t) {
				if (null != t.startIndex) {
					var n = 2 * (t.endIndex - t.startIndex),
						i = 4 * t.startIndex * 2;
					e = new Float32Array(e.buffer, i, n)
				}
				t.setShape("points", e)
			})
		}
	}, vS.incrementalPrepareUpdate = function(t) {
		this.group.removeAll(), this._clearIncremental(), t.count() > 2e6 ? (this._incremental || (this
			._incremental = new Hr({
				silent: !0
			})), this.group.add(this._incremental)) : this._incremental = null
	}, vS.incrementalUpdate = function(t, e) {
		var n;
		this._incremental ? (n = new mS, this._incremental.addDisplayable(n, !0)) : (n = new mS({
			rectHover: !0,
			cursor: "default",
			startIndex: t.start,
			endIndex: t.end
		}), n.incremental = !0, this.group.add(n)), n.setShape({
			points: e.getLayout("symbolPoints")
		}), this._setCommon(n, e, !!this._incremental)
	}, vS._setCommon = function(t, e, n) {
		var i = e.hostModel,
			r = e.getVisual("symbolSize");
		t.setShape("size", r instanceof Array ? r : [r, r]), t.symbolProxy = Wu(e.getVisual("symbol"), 0, 0, 0,
			0), t.setColor = t.symbolProxy.setColor;
		var a = t.shape.size[0] < gS;
		t.useStyle(i.getModel("itemStyle").getItemStyle(a ? ["color", "shadowBlur", "shadowColor"] : [
		"color"]));
		var o = e.getVisual("color");
		o && t.setColor(o), n || (t.seriesIndex = i.seriesIndex, t.on("mousemove", function(e) {
			t.dataIndex = null;
			var n = t.findDataIndex(e.offsetX, e.offsetY);
			n >= 0 && (t.dataIndex = n + (t.startIndex || 0))
		}))
	}, vS.remove = function() {
		this._clearIncremental(), this._incremental = null, this.group.removeAll()
	}, vS._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	}, El({
		type: "scatter",
		render: function(t) {
			var e = t.getData(),
				n = this._updateSymbolDraw(e, t);
			n.updateData(e), this._finished = !0
		},
		incrementalPrepareRender: function(t) {
			var e = t.getData(),
				n = this._updateSymbolDraw(e, t);
			n.incrementalPrepareUpdate(e), this._finished = !1
		},
		incrementalRender: function(t, e) {
			this._symbolDraw.incrementalUpdate(t, e.getData()), this._finished = t.end === e.getData()
				.count()
		},
		updateTransform: function(t) {
			var e = t.getData();
			if (this.group.dirty(), !this._finished || e.count() > 1e4 || !this._symbolDraw
				.isPersistent()) return {
				update: !0
			};
			var n = tS().reset(t);
			n.progress && n.progress({
				start: 0,
				end: e.count()
			}, e), this._symbolDraw.updateLayout(e)
		},
		_updateSymbolDraw: function(t, e) {
			var n = this._symbolDraw,
				i = e.pipelineContext,
				r = i.large;
			return n && r === this._isLargeDraw || (n && n.remove(), n = this._symbolDraw = r ? new Rc :
				new oc, this._isLargeDraw = r, this.group.removeAll()), this.group.add(n.group), n
		},
		remove: function() {
			this._symbolDraw && this._symbolDraw.remove(!0), this._symbolDraw = null
		},
		dispose: function() {}
	}), kl(Qb("scatter", "circle")), Al(tS("scatter")), h(Ec, ab), Bc.prototype.getIndicatorAxes = function() {
		return this._indicatorAxes
	}, Bc.prototype.dataToPoint = function(t, e) {
		var n = this._indicatorAxes[e];
		return this.coordToPoint(n.dataToCoord(t), e)
	}, Bc.prototype.coordToPoint = function(t, e) {
		var n = this._indicatorAxes[e],
			i = n.angle,
			r = this.cx + t * Math.cos(i),
			a = this.cy - t * Math.sin(i);
		return [r, a]
	}, Bc.prototype.pointToData = function(t) {
		var e = t[0] - this.cx,
			n = t[1] - this.cy,
			i = Math.sqrt(e * e + n * n);
		e /= i, n /= i;
		for (var r, a = Math.atan2(-n, e), o = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
			var u = this._indicatorAxes[l],
				h = Math.abs(a - u.angle);
			o > h && (r = u, s = l, o = h)
		}
		return [s, +(r && r.coodToData(i))]
	}, Bc.prototype.resize = function(t, e) {
		var n = t.get("center"),
			i = e.getWidth(),
			r = e.getHeight(),
			a = Math.min(i, r) / 2;
		this.cx = Fa(n[0], i), this.cy = Fa(n[1], r), this.startAngle = t.get("startAngle") * Math.PI / 180,
			this.r = Fa(t.get("radius"), a), f(this._indicatorAxes, function(t, e) {
				t.setExtent(0, this.r);
				var n = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
				n = Math.atan2(Math.sin(n), Math.cos(n)), t.angle = n
			}, this)
	}, Bc.prototype.update = function(t) {
		function e(t) {
			var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
				n = t / e;
			return 2 === n ? n = 5 : n *= 2, n * e
		}
		var n = this._indicatorAxes,
			i = this._model;
		f(n, function(t) {
			t.scale.setExtent(1 / 0, -1 / 0)
		}), t.eachSeriesByType("radar", function(e) {
			if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get(
				"radarIndex")) === i) {
				var r = e.getData();
				f(n, function(t) {
					t.scale.unionExtentFromData(r, r.mapDimension(t.dim))
				})
			}
		}, this);
		var r = i.get("splitNumber");
		f(n, function(t) {
			var n = Ou(t.scale, t.model);
			Ru(t.scale, t.model);
			var i = t.model,
				a = t.scale,
				o = i.getMin(),
				s = i.getMax(),
				l = a.getInterval();
			if (null != o && null != s) a.setExtent(+o, +s), a.setInterval((s - o) / r);
			else if (null != o) {
				var u;
				do u = o + l * r, a.setExtent(+o, u), a.setInterval(l), l = e(l); while (u < n[1] &&
					isFinite(u) && isFinite(n[1]))
			} else if (null != s) {
				var h;
				do h = s - l * r, a.setExtent(h, +s), a.setInterval(l), l = e(l); while (h > n[0] &&
					isFinite(h) && isFinite(n[0]))
			} else {
				var c = a.getTicks().length - 1;
				c > r && (l = e(l));
				var d = Math.round((n[0] + n[1]) / 2 / l) * l,
					f = Math.round(r / 2);
				a.setExtent(Va(d - f * l), Va(d + (r - f) * l)), a.setInterval(l)
			}
		})
	}, Bc.dimensions = [], Bc.create = function(t, e) {
		var n = [];
		return t.eachComponent("radar", function(i) {
			var r = new Bc(i, t, e);
			n.push(r), i.coordinateSystem = r
		}), t.eachSeriesByType("radar", function(t) {
			"radar" === t.get("coordinateSystem") && (t.coordinateSystem = n[t.get("radarIndex") || 0])
		}), n
	}, Vo.register("radar", Bc);
	var yS = cb.valueAxis,
		_S = (Ol({
			type: "radar",
			optionUpdated: function() {
				var t = this.get("boundaryGap"),
					e = this.get("splitNumber"),
					n = this.get("scale"),
					a = this.get("axisLine"),
					l = this.get("axisTick"),
					u = this.get("axisLabel"),
					h = this.get("name"),
					c = this.get("name.show"),
					d = this.get("name.formatter"),
					f = this.get("nameGap"),
					g = this.get("triggerEvent"),
					m = p(this.get("indicator") || [], function(p) {
						null != p.max && p.max > 0 && !p.min ? p.min = 0 : null != p.min && p.min <
							0 && !p.max && (p.max = 0);
						var m = h;
						if (null != p.color && (m = s({
								color: p.color
							}, h)), p = r(i(p), {
								boundaryGap: t,
								splitNumber: e,
								scale: n,
								axisLine: a,
								axisTick: l,
								axisLabel: u,
								name: p.text,
								nameLocation: "end",
								nameGap: f,
								nameTextStyle: m,
								triggerEvent: g
							}, !1), c || (p.name = ""), "string" == typeof d) {
							var v = p.name;
							p.name = d.replace("{value}", null != v ? v : "")
						} else "function" == typeof d && (p.name = d(p.name, p));
						var y = o(new Pa(p, null, this.ecModel), Uw);
						return y.mainType = "radar", y.componentIndex = this.componentIndex, y
					}, this);
				this.getIndicatorModels = function() {
					return m
				}
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				center: ["50%", "50%"],
				radius: "75%",
				startAngle: 90,
				name: {
					show: !0
				},
				boundaryGap: [0, 0],
				splitNumber: 5,
				nameGap: 15,
				scale: !1,
				shape: "polygon",
				axisLine: r({
					lineStyle: {
						color: "#bbb"
					}
				}, yS.axisLine),
				axisLabel: Nc(yS.axisLabel, !1),
				axisTick: Nc(yS.axisTick, !1),
				splitLine: Nc(yS.splitLine, !0),
				splitArea: Nc(yS.splitArea, !0),
				indicator: []
			}
		}), ["axisLine", "axisTickLabel", "axisName"]);
	zl({
		type: "radar",
		render: function(t) {
			var e = this.group;
			e.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
		},
		_buildAxes: function(t) {
			var e = t.coordinateSystem,
				n = e.getIndicatorAxes(),
				i = p(n, function(t) {
					var n = new Tb(t.model, {
						position: [e.cx, e.cy],
						rotation: t.angle,
						labelDirection: -1,
						tickDirection: -1,
						nameDirection: 1
					});
					return n
				});
			f(i, function(t) {
				f(_S, t.add, t), this.group.add(t.getGroup())
			}, this)
		},
		_buildSplitLineAndArea: function(t) {
			function e(t, e, n) {
				var i = n % e.length;
				return t[i] = t[i] || [], i
			}
			var n = t.coordinateSystem,
				i = n.getIndicatorAxes();
			if (i.length) {
				var r = t.get("shape"),
					a = t.getModel("splitLine"),
					o = t.getModel("splitArea"),
					l = a.getModel("lineStyle"),
					u = o.getModel("areaStyle"),
					h = a.get("show"),
					c = o.get("show"),
					d = l.get("color"),
					g = u.get("color");
				d = x(d) ? d : [d], g = x(g) ? g : [g];
				var m = [],
					v = [];
				if ("circle" === r)
					for (var y = i[0].getTicksCoords(), _ = n.cx, w = n.cy, b = 0; b < y.length; b++) {
						if (h) {
							var S = e(m, d, b);
							m[S].push(new oy({
								shape: {
									cx: _,
									cy: w,
									r: y[b].coord
								}
							}))
						}
						if (c && b < y.length - 1) {
							var S = e(v, g, b);
							v[S].push(new hy({
								shape: {
									cx: _,
									cy: w,
									r0: y[b].coord,
									r: y[b + 1].coord
								}
							}))
						}
					} else
						for (var M, I = p(i, function(t, e) {
								var i = t.getTicksCoords();
								return M = null == M ? i.length - 1 : Math.min(i.length - 1, M),
									p(i, function(t) {
										return n.coordToPoint(t.coord, e)
									})
							}), T = [], b = 0; M >= b; b++) {
							for (var C = [], D = 0; D < i.length; D++) C.push(I[D][b]);
							if (C[0] && C.push(C[0].slice()), h) {
								var S = e(m, d, b);
								m[S].push(new py({
									shape: {
										points: C
									}
								}))
							}
							if (c && T) {
								var S = e(v, g, b - 1);
								v[S].push(new fy({
									shape: {
										points: C.concat(T)
									}
								}))
							}
							T = C.slice().reverse()
						}
				var A = l.getLineStyle(),
					k = u.getAreaStyle();
				f(v, function(t, e) {
					this.group.add(Ay(t, {
						style: s({
							stroke: "none",
							fill: g[e % g.length]
						}, k),
						silent: !0
					}))
				}, this), f(m, function(t, e) {
					this.group.add(Ay(t, {
						style: s({
							fill: "none",
							stroke: d[e % d.length]
						}, A),
						silent: !0
					}))
				}, this)
			}
		}
	});
	var xS = W_.extend({
		type: "series.radar",
		dependencies: ["radar"],
		init: function() {
			xS.superApply(this, "init", arguments), this.legendDataProvider = function() {
				return this.getRawData()
			}
		},
		getInitialData: function() {
			return rS(this, {
				generateCoord: "indicator_",
				generateCoordCount: 1 / 0
			})
		},
		formatTooltip: function(t) {
			var e = this.getData(),
				n = this.coordinateSystem,
				i = n.getIndicatorAxes(),
				r = this.getData().getName(t);
			return no("" === r ? this.name : r) + "<br/>" + p(i, function(n) {
				var i = e.get(e.mapDimension(n.dim), t);
				return no(n.name + " : " + i)
			}).join("<br />")
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "radar",
			legendHoverLink: !0,
			radarIndex: 0,
			lineStyle: {
				width: 2,
				type: "solid"
			},
			label: {
				position: "top"
			},
			symbol: "emptyCircle",
			symbolSize: 4
		}
	});
	El({
		type: "radar",
		render: function(t) {
			function e(t, e) {
				var n = t.getItemVisual(e, "symbol") || "circle",
					i = t.getItemVisual(e, "color");
				if ("none" !== n) {
					var r = Fc(t.getItemVisual(e, "symbolSize")),
						a = Wu(n, -1, -1, 2, 2, i);
					return a.attr({
						style: {
							strokeNoScale: !0
						},
						z2: 100,
						scale: [r[0] / 2, r[1] / 2]
					}), a
				}
			}

			function n(n, i, r, a, o, s) {
				r.removeAll();
				for (var l = 0; l < i.length - 1; l++) {
					var u = e(a, o);
					u && (u.__dimIdx = l, n[l] ? (u.attr("position", n[l]), ky[s ? "initProps" :
						"updateProps"](u, {
						position: i[l]
					}, t, o)) : u.attr("position", i[l]), r.add(u))
				}
			}

			function r(t) {
				return p(t, function() {
					return [a.cx, a.cy]
				})
			}
			var a = t.coordinateSystem,
				o = this.group,
				l = t.getData(),
				u = this._data;
			l.diff(u).add(function(e) {
				var i = l.getItemLayout(e);
				if (i) {
					var a = new fy,
						o = new py,
						s = {
							shape: {
								points: i
							}
						};
					a.shape.points = r(i), o.shape.points = r(i), Sa(a, s, t, e), Sa(o, s, t,
					e);
					var u = new qg,
						h = new qg;
					u.add(o), u.add(a), u.add(h), n(o.shape.points, i, h, l, e, !0), l
						.setItemGraphicEl(e, u)
				}
			}).update(function(e, i) {
				var r = u.getItemGraphicEl(i),
					a = r.childAt(0),
					o = r.childAt(1),
					s = r.childAt(2),
					h = {
						shape: {
							points: l.getItemLayout(e)
						}
					};
				h.shape.points && (n(a.shape.points, h.shape.points, s, l, e, !1), ba(a, h, t),
					ba(o, h, t), l.setItemGraphicEl(e, r))
			}).remove(function(t) {
				o.remove(u.getItemGraphicEl(t))
			}).execute(), l.eachItemGraphicEl(function(t, e) {
				function n() {
					h.attr("ignore", m)
				}

				function r() {
					h.attr("ignore", g)
				}
				var a = l.getItemModel(e),
					u = t.childAt(0),
					h = t.childAt(1),
					c = t.childAt(2),
					d = l.getItemVisual(e, "color");
				o.add(t), u.useStyle(s(a.getModel("lineStyle").getLineStyle(), {
					fill: "none",
					stroke: d
				})), u.hoverStyle = a.getModel("emphasis.lineStyle").getLineStyle();
				var f = a.getModel("areaStyle"),
					p = a.getModel("emphasis.areaStyle"),
					g = f.isEmpty() && f.parentModel.isEmpty(),
					m = p.isEmpty() && p.parentModel.isEmpty();
				m = m && g, h.ignore = g, h.useStyle(s(f.getAreaStyle(), {
					fill: d,
					opacity: .7
				})), h.hoverStyle = p.getAreaStyle();
				var v = a.getModel("itemStyle").getItemStyle(["color"]),
					y = a.getModel("emphasis.itemStyle").getItemStyle(),
					_ = a.getModel("label"),
					x = a.getModel("emphasis.label");
				c.eachChild(function(t) {
					t.setStyle(v), t.hoverStyle = i(y), ca(t.style, t.hoverStyle, _,
					x, {
						labelFetcher: l.hostModel,
						labelDataIndex: e,
						labelDimIndex: t.__dimIdx,
						defaultText: l.get(l.dimensions[t.__dimIdx], e),
						autoColor: d,
						isRectText: !0
					})
				}), t.off("mouseover").off("mouseout").off("normal").off("emphasis"), t.on(
					"emphasis", n).on("mouseover", n).on("normal", r).on("mouseout", r), ha(
					t)
			}), this._data = l
		},
		remove: function() {
			this.group.removeAll(), this._data = null
		},
		dispose: function() {}
	});
	var wS = function(t) {
			t.eachSeriesByType("radar", function(t) {
				function e(t, e) {
					i[e] = i[e] || [], i[e][o] = r.dataToPoint(t, o)
				}
				var n = t.getData(),
					i = [],
					r = t.coordinateSystem;
				if (r) {
					for (var a = r.getIndicatorAxes(), o = 0; o < a.length; o++) n.each(n.mapDimension(a[o]
						.dim), e);
					n.each(function(t) {
						i[t][0] && i[t].push(i[t][0].slice()), n.setItemLayout(t, i[t])
					})
				}
			})
		},
		bS = function(t) {
			var e = t.polar;
			if (e) {
				x(e) || (e = [e]);
				var n = [];
				f(e, function(e) {
					e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], x(t
						.radar) || (t.radar = [t.radar]), t.radar.push(e)) : n.push(e)
				}), t.polar = n
			}
			f(t.series, function(t) {
				t && "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
			})
		};
	kl(uS("radar")), kl(Qb("radar", "circle")), Al(wS), Ml(pS("radar")), Sl(bS), W_.extend({
		type: "series.heatmap",
		getInitialData: function() {
			return hu(this.getSource(), this, {
				generateCoord: "value"
			})
		},
		preventIncremental: function() {
			var t = Vo.get(this.get("coordinateSystem"));
			return t && t.dimensions ? "lng" === t.dimensions[0] && "lat" === t.dimensions[1] : void 0
		},
		defaultOption: {
			coordinateSystem: "cartesian2d",
			zlevel: 0,
			z: 2,
			geoIndex: 0,
			blurSize: 30,
			pointSize: 20,
			maxOpacity: 1,
			minOpacity: 0
		}
	});
	var SS = 256;
	Vc.prototype = {
		update: function(t, e, n, i, r, a) {
			var o = this._getBrush(),
				s = this._getGradient(t, r, "inRange"),
				l = this._getGradient(t, r, "outOfRange"),
				u = this.pointSize + this.blurSize,
				h = this.canvas,
				c = h.getContext("2d"),
				d = t.length;
			h.width = e, h.height = n;
			for (var f = 0; d > f; ++f) {
				var p = t[f],
					g = p[0],
					m = p[1],
					v = p[2],
					y = i(v);
				c.globalAlpha = y, c.drawImage(o, g - u, m - u)
			}
			if (!h.width || !h.height) return h;
			for (var _ = c.getImageData(0, 0, h.width, h.height), x = _.data, w = 0, b = x.length, S = this
					.minOpacity, M = this.maxOpacity, I = M - S; b > w;) {
				var y = x[w + 3] / 256,
					T = 4 * Math.floor(y * (SS - 1));
				if (y > 0) {
					var C = a(y) ? s : l;
					y > 0 && (y = y * I + S), x[w++] = C[T], x[w++] = C[T + 1], x[w++] = C[T + 2], x[w++] =
						C[T + 3] * y * 256
				} else w += 4
			}
			return c.putImageData(_, 0, 0), h
		},
		_getBrush: function() {
			var t = this._brushCanvas || (this._brushCanvas = eg()),
				e = this.pointSize + this.blurSize,
				n = 2 * e;
			t.width = n, t.height = n;
			var i = t.getContext("2d");
			return i.clearRect(0, 0, n, n), i.shadowOffsetX = n, i.shadowBlur = this.blurSize, i
				.shadowColor = "#000", i.beginPath(), i.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), i
				.closePath(), i.fill(), t
		},
		_getGradient: function(t, e, n) {
			for (var i = this._gradientPixels, r = i[n] || (i[n] = new Uint8ClampedArray(1024)), a = [0, 0,
					0, 0
				], o = 0, s = 0; 256 > s; s++) e[n](s / 255, !0, a), r[o++] = a[0], r[o++] = a[1], r[o++] =
				a[2], r[o++] = a[3];
			return r
		}
	}, El({
		type: "heatmap",
		render: function(t, e, n) {
			var i;
			e.eachComponent("visualMap", function(e) {
				e.eachTargetSeries(function(n) {
					n === t && (i = e)
				})
			}), this.group.removeAll(), this._incrementalDisplayable = null;
			var r = t.coordinateSystem;
			"cartesian2d" === r.type || "calendar" === r.type ? this._renderOnCartesianAndCalendar(t, n,
				0, t.getData().count()) : Wc(r) && this._renderOnGeo(r, t, i, n)
		},
		incrementalPrepareRender: function() {
			this.group.removeAll()
		},
		incrementalRender: function(t, e, n, i) {
			var r = e.coordinateSystem;
			r && this._renderOnCartesianAndCalendar(e, i, t.start, t.end, !0)
		},
		_renderOnCartesianAndCalendar: function(t, e, n, i, r) {
			var a, s, l = t.coordinateSystem;
			if ("cartesian2d" === l.type) {
				var u = l.getAxis("x"),
					h = l.getAxis("y");
				a = u.getBandWidth(), s = h.getBandWidth()
			}
			for (var c = this.group, d = t.getData(), f = "itemStyle", p = "emphasis.itemStyle", g =
					"label", m = "emphasis.label", v = t.getModel(f).getItemStyle(["color"]), y = t
					.getModel(p).getItemStyle(), _ = t.getModel(g), x = t.getModel(m), w = l.type, b =
					"cartesian2d" === w ? [d.mapDimension("x"), d.mapDimension("y"), d.mapDimension(
						"value")] : [d.mapDimension("time"), d.mapDimension("value")], S = n; i >
				S; S++) {
				var M;
				if ("cartesian2d" === w) {
					if (isNaN(d.get(b[2], S))) continue;
					var I = l.dataToPoint([d.get(b[0], S), d.get(b[1], S)]);
					M = new gy({
						shape: {
							x: I[0] - a / 2,
							y: I[1] - s / 2,
							width: a,
							height: s
						},
						style: {
							fill: d.getItemVisual(S, "color"),
							opacity: d.getItemVisual(S, "opacity")
						}
					})
				} else {
					if (isNaN(d.get(b[1], S))) continue;
					M = new gy({
						z2: 1,
						shape: l.dataToRect([d.get(b[0], S)]).contentShape,
						style: {
							fill: d.getItemVisual(S, "color"),
							opacity: d.getItemVisual(S, "opacity")
						}
					})
				}
				var T = d.getItemModel(S);
				d.hasItemOption && (v = T.getModel(f).getItemStyle(["color"]), y = T.getModel(p)
					.getItemStyle(), _ = T.getModel(g), x = T.getModel(m));
				var C = t.getRawValue(S),
					D = "-";
				C && null != C[2] && (D = C[2]), ca(v, y, _, x, {
					labelFetcher: t,
					labelDataIndex: S,
					defaultText: D,
					isRectText: !0
				}), M.setStyle(v), ha(M, d.hasItemOption ? y : o({}, y)), M.incremental = r, r && (M
					.useHoverLayer = !0), c.add(M), d.setItemGraphicEl(S, M)
			}
		},
		_renderOnGeo: function(t, e, n, i) {
			var r = n.targetVisuals.inRange,
				a = n.targetVisuals.outOfRange,
				o = e.getData(),
				s = this._hmLayer || this._hmLayer || new Vc;
			s.blurSize = e.get("blurSize"), s.pointSize = e.get("pointSize"), s.minOpacity = e.get(
				"minOpacity"), s.maxOpacity = e.get("maxOpacity");
			var l = t.getViewRect().clone(),
				u = t.getRoamTransform();
			l.applyTransform(u);
			var h = Math.max(l.x, 0),
				c = Math.max(l.y, 0),
				d = Math.min(l.width + l.x, i.getWidth()),
				f = Math.min(l.height + l.y, i.getHeight()),
				p = d - h,
				g = f - c,
				m = [o.mapDimension("lng"), o.mapDimension("lat"), o.mapDimension("value")],
				v = o.mapArray(m, function(e, n, i) {
					var r = t.dataToPoint([e, n]);
					return r[0] -= h, r[1] -= c, r.push(i), r
				}),
				y = n.getExtent(),
				_ = "visualMap.continuous" === n.type ? Hc(y, n.option.range) : Gc(y, n.getPieceList(),
					n.option.selected);
			s.update(v, p, g, r.color.getNormalizer(), {
				inRange: r.color.getColorMapper(),
				outOfRange: a.color.getColorMapper()
			}, _);
			var x = new ai({
				style: {
					width: p,
					height: g,
					x: h,
					y: c,
					image: s.canvas
				},
				silent: !0
			});
			this.group.add(x)
		},
		dispose: function() {}
	});
	var MS = f,
		IS = "\x00__link_datas",
		TS = "\x00__link_mainData",
		CS = function(t, e) {
			this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this
				.children = [], this.viewChildren = [], this.hostTree = e
		};
	CS.prototype = {
		constructor: CS,
		isRemoved: function() {
			return this.dataIndex < 0
		},
		eachNode: function(t, e, n) {
			"function" == typeof t && (n = e, e = t, t = null), t = t || {}, b(t) && (t = {
				order: t
			});
			var i, r = t.order || "preorder",
				a = this[t.attr || "children"];
			"preorder" === r && (i = e.call(n, this));
			for (var o = 0; !i && o < a.length; o++) a[o].eachNode(t, e, n);
			"postorder" === r && e.call(n, this)
		},
		updateDepthAndHeight: function(t) {
			var e = 0;
			this.depth = t;
			for (var n = 0; n < this.children.length; n++) {
				var i = this.children[n];
				i.updateDepthAndHeight(t + 1), i.height > e && (e = i.height)
			}
			this.height = e + 1
		},
		getNodeById: function(t) {
			if (this.getId() === t) return this;
			for (var e = 0, n = this.children, i = n.length; i > e; e++) {
				var r = n[e].getNodeById(t);
				if (r) return r
			}
		},
		contains: function(t) {
			if (t === this) return !0;
			for (var e = 0, n = this.children, i = n.length; i > e; e++) {
				var r = n[e].contains(t);
				if (r) return r
			}
		},
		getAncestors: function(t) {
			for (var e = [], n = t ? this : this.parentNode; n;) e.push(n), n = n.parentNode;
			return e.reverse(), e
		},
		getValue: function(t) {
			var e = this.hostTree.data;
			return e.get(e.getDimension(t || "value"), this.dataIndex)
		},
		setLayout: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
		},
		getLayout: function() {
			return this.hostTree.data.getItemLayout(this.dataIndex)
		},
		getModel: function(t) {
			if (!(this.dataIndex < 0)) {
				var e, n = this.hostTree,
					i = n.data.getItemModel(this.dataIndex),
					r = this.getLevelModel();
				return r || 0 !== this.children.length && (0 === this.children.length || this.isExpand !== !
					1) || (e = this.getLeavesModel()), i.getModel(t, (r || e || n.hostModel).getModel(
					t))
			}
		},
		getLevelModel: function() {
			return (this.hostTree.levelModels || [])[this.depth]
		},
		getLeavesModel: function() {
			return this.hostTree.leavesModel
		},
		setVisual: function(t, e) {
			this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
		},
		getVisual: function(t, e) {
			return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
		},
		getRawIndex: function() {
			return this.hostTree.data.getRawIndex(this.dataIndex)
		},
		getId: function() {
			return this.hostTree.data.getId(this.dataIndex)
		},
		isAncestorOf: function(t) {
			for (var e = t.parentNode; e;) {
				if (e === this) return !0;
				e = e.parentNode
			}
			return !1
		},
		isDescendantOf: function(t) {
			return t !== this && t.isAncestorOf(this)
		}
	}, Jc.prototype = {
		constructor: Jc,
		type: "tree",
		eachNode: function(t, e, n) {
			this.root.eachNode(t, e, n)
		},
		getNodeByDataIndex: function(t) {
			var e = this.data.getRawIndex(t);
			return this._nodes[e]
		},
		getNodeByName: function(t) {
			return this.root.getNodeByName(t)
		},
		update: function() {
			for (var t = this.data, e = this._nodes, n = 0, i = e.length; i > n; n++) e[n].dataIndex = -1;
			for (var n = 0, i = t.count(); i > n; n++) e[t.getRawIndex(n)].dataIndex = n
		},
		clearLayouts: function() {
			this.data.clearItemLayouts()
		}
	}, Jc.createTree = function(t, e, n) {
		function i(t, e) {
			var n = t.value;
			o = Math.max(o, x(n) ? n.length : 1), a.push(t);
			var s = new CS(t.name, r);
			e ? Qc(s, e) : r.root = s, r._nodes.push(s);
			var l = t.children;
			if (l)
				for (var u = 0; u < l.length; u++) i(l[u], s)
		}
		var r = new Jc(e, n.levels, n.leaves),
			a = [],
			o = 1;
		i(t), r.root.updateDepthAndHeight(0);
		var s = pw(a, {
				coordDimensions: ["value"],
				dimensionsCount: o
			}),
			l = new cw(s, e);
		return l.initData(a), Uc({
			mainData: l,
			struct: r,
			structAttr: "tree"
		}), r.update(), r
	}, W_.extend({
		type: "series.sunburst",
		_viewRoot: null,
		getInitialData: function(t) {
			var e = {
				name: t.name,
				children: t.data
			};
			rd(e);
			var n = t.levels || [],
				i = {};
			return i.levels = n, Jc.createTree(e, this, i).data
		},
		optionUpdated: function() {
			this.resetViewRoot()
		},
		getDataParams: function(t) {
			var e = W_.prototype.getDataParams.apply(this, arguments),
				n = this.getData().tree.getNodeByDataIndex(t);
			return e.treePathInfo = id(n, this), e
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			center: ["50%", "50%"],
			radius: [0, "75%"],
			clockwise: !0,
			startAngle: 90,
			minAngle: 0,
			percentPrecision: 2,
			stillShowZeroSum: !0,
			highlightPolicy: "descendant",
			nodeClick: "rootToNode",
			renderLabelForZeroData: !1,
			label: {
				rotate: "radial",
				show: !0,
				opacity: 1,
				align: "center",
				position: "inside",
				distance: 5,
				silent: !0,
				emphasis: {}
			},
			itemStyle: {
				borderWidth: 1,
				borderColor: "white",
				opacity: 1,
				emphasis: {},
				highlight: {
					opacity: 1
				},
				downplay: {
					opacity: .9
				}
			},
			animationType: "expansion",
			animationDuration: 1e3,
			animationDurationUpdate: 500,
			animationEasing: "cubicOut",
			data: [],
			levels: [],
			sort: "desc"
		},
		getViewRoot: function() {
			return this._viewRoot
		},
		resetViewRoot: function(t) {
			t ? this._viewRoot = t : t = this._viewRoot;
			var e = this.getRawData().tree.root;
			(!t || t !== e && !e.contains(t)) && (this._viewRoot = e)
		}
	});
	var DS = {
			NONE: "none",
			DESCENDANT: "descendant",
			ANCESTOR: "ancestor",
			SELF: "self"
		},
		AS = 2,
		kS = 4,
		PS = ad.prototype;
	PS.updateData = function(t, e, n, i, a) {
		this.node = e, e.piece = this, i = i || this._seriesModel, a = a || this._ecModel;
		var l = this.childAt(0);
		l.dataIndex = e.dataIndex;
		var u = e.getModel(),
			h = e.getLayout();
		h || console.log(e.getLayout());
		var c = o({}, h);
		c.label = null;
		var d, f = od(e, i, a),
			p = u.getModel("itemStyle").getItemStyle();
		if ("normal" === n) d = p;
		else {
			var g = u.getModel(n + ".itemStyle").getItemStyle();
			d = r(g, p)
		}
		d = s({
				lineJoin: "bevel",
				fill: d.fill || f
			}, d), t ? (l.setShape(c), l.shape.r = h.r0, ba(l, {
				shape: {
					r: h.r
				}
			}, i, e.dataIndex), l.useStyle(d)) : "object" == typeof d.fill && d.fill.type || "object" ==
			typeof l.style.fill && l.style.fill.type ? (ba(l, {
				shape: c
			}, i), l.useStyle(d)) : ba(l, {
				shape: c,
				style: d
			}, i), this._updateLabel(i, f, n);
		var m = u.getShallow("cursor");
		if (m && l.attr("cursor", m), t) {
			var v = i.getShallow("highlightPolicy");
			this._initEvents(l, e, i, v)
		}
		this._seriesModel = i || this._seriesModel, this._ecModel = a || this._ecModel
	}, PS.onEmphasis = function(t) {
		var e = this;
		this.node.hostTree.root.eachNode(function(n) {
			n.piece && (e.node === n ? n.piece.updateData(!1, n, "emphasis") : ld(n, e.node, t) ? n
				.piece.childAt(0).trigger("highlight") : t !== DS.NONE && n.piece.childAt(0)
				.trigger("downplay"))
		})
	}, PS.onNormal = function() {
		this.node.hostTree.root.eachNode(function(t) {
			t.piece && t.piece.updateData(!1, t, "normal")
		})
	}, PS.onHighlight = function() {
		this.updateData(!1, this.node, "highlight")
	}, PS.onDownplay = function() {
		this.updateData(!1, this.node, "downplay")
	}, PS._updateLabel = function(t, e, n) {
		function i(t) {
			var e = o.get(t);
			return null == e ? a.get(t) : e
		}
		var r = this.node.getModel(),
			a = r.getModel("label"),
			o = "normal" === n || "emphasis" === n ? a : r.getModel(n + ".label"),
			s = r.getModel("emphasis.label"),
			l = D(t.getFormattedLabel(this.node.dataIndex, "normal", null, null, "label"), this.node.name);
		i("show") === !1 && (l = "");
		var u = this.node.getLayout(),
			h = o.get("minAngle");
		null == h && (h = a.get("minAngle")), h = h / 180 * Math.PI;
		var c = u.endAngle - u.startAngle;
		null != h && Math.abs(c) < h && (l = "");
		var d = this.childAt(1);
		ca(d.style, d.hoverStyle || {}, a, s, {
			defaultText: o.getShallow("show") ? l : null,
			autoColor: e,
			useInsideStyle: !0
		});
		var f, p = (u.startAngle + u.endAngle) / 2,
			g = Math.cos(p),
			m = Math.sin(p),
			v = i("position"),
			y = i("distance") || 0,
			_ = i("align");
		"outside" === v ? (f = u.r + y, _ = p > Math.PI / 2 ? "right" : "left") : _ && "center" !== _ ?
			"left" === _ ? (f = u.r0 + y, p > Math.PI / 2 && (_ = "right")) : "right" === _ && (f = u.r - y, p >
				Math.PI / 2 && (_ = "left")) : (f = (u.r + u.r0) / 2, _ = "center"), d.attr("style", {
				text: l,
				textAlign: _,
				textVerticalAlign: i("verticalAlign") || "middle",
				opacity: i("opacity")
			});
		var x = f * g + u.cx,
			w = f * m + u.cy;
		d.attr("position", [x, w]);
		var b = i("rotate"),
			S = 0;
		"radial" === b ? (S = -p, S < -Math.PI / 2 && (S += Math.PI)) : "tangential" === b ? (S = Math.PI / 2 -
				p, S > Math.PI / 2 ? S -= Math.PI : S < -Math.PI / 2 && (S += Math.PI)) : "number" ==
			typeof b && (S = b * Math.PI / 180), d.attr("rotation", S)
	}, PS._initEvents = function(t, e, n, i) {
		t.off("mouseover").off("mouseout").off("emphasis").off("normal");
		var r = this,
			a = function() {
				r.onEmphasis(i)
			},
			o = function() {
				r.onNormal()
			},
			s = function() {
				r.onDownplay()
			},
			l = function() {
				r.onHighlight()
			};
		n.isAnimationEnabled() && t.on("mouseover", a).on("mouseout", o).on("emphasis", a).on("normal", o).on(
			"downplay", s).on("highlight", l)
	}, h(ad, qg);
	var LS = "sunburstRootToNode",
		OS = (Ts.extend({
			type: "sunburst",
			init: function() {},
			render: function(t, e, n, i) {
				function r(t, e) {
					function n(t) {
						return t.getId()
					}

					function i(n, i) {
						var r = null == n ? null : t[n],
							o = null == i ? null : e[i];
						a(r, o)
					}(0 !== t.length || 0 !== e.length) && new Gl(e, t, n, n).add(i).update(i).remove(_(
						i, null)).execute()
				}

				function a(n, i) {
					if (f || !n || n.getValue() || (n = null), n !== h && i !== h)
						if (i && i.piece) n ? (i.piece.updateData(!1, n, "normal", t, e), u
							.setItemGraphicEl(n.dataIndex, i.piece)) : o(i);
						else if (n) {
						var r = new ad(n, t, e);
						d.add(r), u.setItemGraphicEl(n.dataIndex, r)
					}
				}

				function o(t) {
					t && t.piece && (d.remove(t.piece), t.piece = null)
				}

				function s(n, i) {
					if (i.depth > 0) {
						l.virtualPiece ? l.virtualPiece.updateData(!1, n, "normal", t, e) : (l
								.virtualPiece = new ad(n, t, e), d.add(l.virtualPiece)), i.piece
							._onclickEvent && i.piece.off("click", i.piece._onclickEvent);
						var r = function() {
							l._rootToNode(i.parentNode)
						};
						i.piece._onclickEvent = r, l.virtualPiece.on("click", r)
					} else l.virtualPiece && (d.remove(l.virtualPiece), l.virtualPiece = null)
				}
				var l = this;
				this.seriesModel = t, this.api = n, this.ecModel = e;
				var u = t.getData(),
					h = u.tree.root,
					c = t.getViewRoot(),
					d = this.group,
					f = t.get("renderLabelForZeroData"),
					p = [];
				c.eachNode(function(t) {
					p.push(t)
				});
				var g = this._oldChildren || [];
				if (r(p, g), s(h, c), i && i.highlight && i.highlight.piece) {
					var m = t.getShallow("highlightPolicy");
					i.highlight.piece.onEmphasis(m)
				} else if (i && i.unhighlight) {
					var v = this.virtualPiece;
					!v && h.children.length && (v = h.children[0].piece), v && v.onNormal()
				}
				this._initEvents(), this._oldChildren = p
			},
			dispose: function() {},
			_initEvents: function() {
				var t = this,
					e = function(e) {
						var n = !1,
							i = t.seriesModel.getViewRoot();
						i.eachNode(function(i) {
							if (!n && i.piece && i.piece.childAt(0) === e.target) {
								var r = i.getModel().get("nodeClick");
								if ("rootToNode" === r) t._rootToNode(i);
								else if ("link" === r) {
									var a = i.getModel(),
										o = a.get("link");
									if (o) {
										var s = a.get("target", !0) || "_blank";
										window.open(o, s)
									}
								}
								n = !0
							}
						})
					};
				this.group._onclickEvent && this.group.off("click", this.group._onclickEvent), this
					.group.on("click", e), this.group._onclickEvent = e
			},
			_rootToNode: function(t) {
				t !== this.seriesModel.getViewRoot() && this.api.dispatchAction({
					type: LS,
					from: this.uid,
					seriesId: this.seriesModel.id,
					targetNode: t
				})
			},
			containPoint: function(t, e) {
				var n = e.getData(),
					i = n.getItemLayout(0);
				if (i) {
					var r = t[0] - i.cx,
						a = t[1] - i.cy,
						o = Math.sqrt(r * r + a * a);
					return o <= i.r && o >= i.r0
				}
			}
		}), "sunburstRootToNode");
	Tl({
		type: OS,
		update: "updateView"
	}, function(t, e) {
		function n(e) {
			var n = td(t, [OS], e);
			if (n) {
				var i = e.getViewRoot();
				i && (t.direction = nd(i, n.node) ? "rollUp" : "drillDown"), e.resetViewRoot(n.node)
			}
		}
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		}, n)
	});
	var zS = "sunburstHighlight";
	Tl({
		type: zS,
		update: "updateView"
	}, function(t, e) {
		function n(e) {
			var n = td(t, [zS], e);
			n && (t.highlight = n.node)
		}
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		}, n)
	});
	var RS = "sunburstUnhighlight";
	Tl({
		type: RS,
		update: "updateView"
	}, function(t, e) {
		function n() {
			t.unhighlight = !0
		}
		e.eachComponent({
			mainType: "series",
			subType: "sunburst",
			query: t
		}, n)
	});
	var ES = Math.PI / 180,
		BS = function(t, e, n) {
			e.eachSeriesByType(t, function(t) {
				var e = t.get("center"),
					i = t.get("radius");
				x(i) || (i = [0, i]), x(e) || (e = [e, e]);
				var r = n.getWidth(),
					a = n.getHeight(),
					o = Math.min(r, a),
					s = Fa(e[0], r),
					l = Fa(e[1], a),
					u = Fa(i[0], o / 2),
					h = Fa(i[1], o / 2),
					c = -t.get("startAngle") * ES,
					d = t.get("minAngle") * ES,
					p = t.getData().tree.root,
					g = t.getViewRoot(),
					m = g.depth,
					v = t.get("sort");
				null != v && ud(g, v);
				var y = 0;
				f(g.children, function(t) {
					!isNaN(t.getValue()) && y++
				});
				var _ = g.getValue(),
					w = Math.PI / (_ || y) * 2,
					b = g.depth > 0,
					S = g.height - (b ? -1 : 1),
					M = (h - u) / (S || 1),
					I = t.get("clockwise"),
					T = t.get("stillShowZeroSum"),
					C = I ? 1 : -1,
					D = function(t, e) {
						if (t) {
							var n = e;
							if (t !== p) {
								var i = t.getValue(),
									r = 0 === _ && T ? w : i * w;
								d > r && (r = d), n = e + C * r;
								var a = t.depth - m - (b ? -1 : 1),
									h = u + M * a,
									c = u + M * (a + 1),
									g = t.getModel();
								null != g.get("r0") && (h = Fa(g.get("r0"), o / 2)), null != g.get("r") && (
									c = Fa(g.get("r"), o / 2)), t.setLayout({
									angle: r,
									startAngle: e,
									endAngle: n,
									clockwise: I,
									cx: s,
									cy: l,
									r0: h,
									r: c
								})
							}
							if (t.children && t.children.length) {
								var v = 0;
								f(t.children, function(t) {
									v += D(t, e + v)
								})
							}
							return n - e
						}
					};
				if (b) {
					var A = u,
						k = u + M,
						P = 2 * Math.PI;
					p.setLayout({
						angle: P,
						startAngle: c,
						endAngle: c + P,
						clockwise: I,
						cx: s,
						cy: l,
						r0: A,
						r: k
					})
				}
				D(g, c)
			})
		};
	kl(_(uS, "sunburst")), Al(_(BS, "sunburst")), Ml(_(pS, "sunburst"));
	var NS = ae;
	c(cd, xg), dd.prototype = {
		constructor: dd,
		type: "view",
		dimensions: ["x", "y"],
		setBoundingRect: function(t, e, n, i) {
			return this._rect = new rn(t, e, n, i), this._rect
		},
		getBoundingRect: function() {
			return this._rect
		},
		setViewRect: function(t, e, n, i) {
			this.transformTo(t, e, n, i), this._viewRect = new rn(t, e, n, i)
		},
		transformTo: function(t, e, n, i) {
			var r = this.getBoundingRect(),
				a = this._rawTransformable;
			a.transform = r.calculateTransform(new rn(t, e, n, i)), a.decomposeTransform(), this
				._updateTransform()
		},
		setCenter: function(t) {
			t && (this._center = t, this._updateCenterAndZoom())
		},
		setZoom: function(t) {
			t = t || 1;
			var e = this.zoomLimit;
			e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))),
				this._zoom = t, this._updateCenterAndZoom()
		},
		getDefaultCenter: function() {
			var t = this.getBoundingRect(),
				e = t.x + t.width / 2,
				n = t.y + t.height / 2;
			return [e, n]
		},
		getCenter: function() {
			return this._center || this.getDefaultCenter()
		},
		getZoom: function() {
			return this._zoom || 1
		},
		getRoamTransform: function() {
			return this._roamTransformable.getLocalTransform()
		},
		_updateCenterAndZoom: function() {
			var t = this._rawTransformable.getLocalTransform(),
				e = this._roamTransformable,
				n = this.getDefaultCenter(),
				i = this.getCenter(),
				r = this.getZoom();
			i = ae([], i, t), n = ae([], n, t), e.origin = i, e.position = [n[0] - i[0], n[1] - i[1]], e
				.scale = [r, r], this._updateTransform()
		},
		_updateTransform: function() {
			var t = this._roamTransformable,
				e = this._rawTransformable;
			e.parent = t, t.updateTransform(), e.updateTransform(), ge(this.transform || (this
				.transform = []), e.transform || fe()), this._rawTransform = e.getLocalTransform(), this
				.invTransform = this.invTransform || [], xe(this.invTransform, this.transform), this
				.decomposeTransform()
		},
		getViewRect: function() {
			return this._viewRect
		},
		getViewRectAfterRoam: function() {
			var t = this.getBoundingRect().clone();
			return t.applyTransform(this.transform), t
		},
		dataToPoint: function(t, e, n) {
			var i = e ? this._rawTransform : this.transform;
			return n = n || [], i ? NS(n, t, i) : H(n, t)
		},
		pointToData: function(t) {
			var e = this.invTransform;
			return e ? NS([], t, e) : [t[0], t[1]]
		},
		convertToPixel: _(fd, "dataToPoint"),
		convertFromPixel: _(fd, "pointToData"),
		containPoint: function(t) {
			return this.getViewRectAfterRoam().contain(t[0], t[1])
		}
	}, c(dd, xg);
	for (var FS = [126, 25], VS = [
			[
				[0, 3.5],
				[7, 11.2],
				[15, 11.9],
				[30, 7],
				[42, .7],
				[52, .7],
				[56, 7.7],
				[59, .7],
				[64, .7],
				[64, 0],
				[5, 0],
				[0, 3.5]
			],
			[
				[13, 16.1],
				[19, 14.7],
				[16, 21.7],
				[11, 23.1],
				[13, 16.1]
			],
			[
				[12, 32.2],
				[14, 38.5],
				[15, 38.5],
				[13, 32.2],
				[12, 32.2]
			],
			[
				[16, 47.6],
				[12, 53.2],
				[13, 53.2],
				[18, 47.6],
				[16, 47.6]
			],
			[
				[6, 64.4],
				[8, 70],
				[9, 70],
				[8, 64.4],
				[6, 64.4]
			],
			[
				[23, 82.6],
				[29, 79.8],
				[30, 79.8],
				[25, 82.6],
				[23, 82.6]
			],
			[
				[37, 70.7],
				[43, 62.3],
				[44, 62.3],
				[39, 70.7],
				[37, 70.7]
			],
			[
				[48, 51.1],
				[51, 45.5],
				[53, 45.5],
				[50, 51.1],
				[48, 51.1]
			],
			[
				[51, 35],
				[51, 28.7],
				[53, 28.7],
				[53, 35],
				[51, 35]
			],
			[
				[52, 22.4],
				[55, 17.5],
				[56, 17.5],
				[53, 22.4],
				[52, 22.4]
			],
			[
				[58, 12.6],
				[62, 7],
				[63, 7],
				[60, 12.6],
				[58, 12.6]
			],
			[
				[0, 3.5],
				[0, 93.1],
				[64, 93.1],
				[64, 0],
				[63, 0],
				[63, 92.4],
				[1, 92.4],
				[1, 3.5],
				[0, 3.5]
			]
		], GS = 0; GS < VS.length; GS++)
		for (var HS = 0; HS < VS[GS].length; HS++) VS[GS][HS][0] /= 10.5, VS[GS][HS][1] /= -14, VS[GS][HS][0] += FS[
			0], VS[GS][HS][1] += FS[1];
	var WS = function(t) {
			"china" === t.map && t.regions.push(new Yu("南海诸岛", p(VS, function(t) {
				return {
					type: "polygon",
					exterior: t
				}
			}), FS))
		},
		US = {
			"南海诸岛": [32, 80],
			"广东": [0, -10],
			"香港": [10, 5],
			"澳门": [-10, 10],
			"天津": [5, 5]
		},
		XS = function(t) {
			f(t.regions, function(t) {
				var e = US[t.name];
				if (e) {
					var n = t.center;
					n[0] += e[0] / 10.5, n[1] += -e[1] / 14
				}
			})
		},
		ZS = {
			Russia: [100, 60],
			"United States": [-99, 38],
			"United States of America": [-99, 38]
		},
		qS = function(t) {
			f(t.regions, function(t) {
				var e = ZS[t.name];
				if (e) {
					var n = t.center;
					n[0] = e[0], n[1] = e[1]
				}
			})
		},
		jS = [
			[
				[123.45165252685547, 25.73527164402261],
				[123.49731445312499, 25.73527164402261],
				[123.49731445312499, 25.750734064600884],
				[123.45165252685547, 25.750734064600884],
				[123.45165252685547, 25.73527164402261]
			]
		],
		YS = function(t) {
			if ("china" === t.map)
				for (var e = 0, n = t.regions.length; n > e; ++e) "台湾" === t.regions[e].name && t.regions[e]
					.geometries.push({
						type: "polygon",
						exterior: jS[0]
					})
		},
		KS = [WS, XS, qS, YS];
	pd.prototype = {
		constructor: pd,
		type: "geo",
		dimensions: ["lng", "lat"],
		containCoord: function(t) {
			for (var e = this.regions, n = 0; n < e.length; n++)
				if (e[n].contain(t)) return !0;
			return !1
		},
		loadGeoJson: function(t, e, n) {
			try {
				this.regions = t ? nb(t) : []
			} catch (i) {
				throw "Invalid geoJson format\n" + i.message
			}
			e = e || {}, n = n || {};
			for (var r = this.regions, a = N(), o = 0; o < r.length; o++) {
				var s = r[o].name;
				s = n.hasOwnProperty(s) ? n[s] : s, r[o].name = s, a.set(s, r[o]), this.addGeoCoord(s, r[o]
					.center);
				var l = e[s];
				l && r[o].transformTo(l.left, l.top, l.width, l.height)
			}
			this._regionsMap = a, this._rect = null, f(KS, function(t) {
				t(this)
			}, this)
		},
		transformTo: function(t, e, n, i) {
			var r = this.getBoundingRect();
			r = r.clone(), r.y = -r.y - r.height;
			var a = this._rawTransformable;
			a.transform = r.calculateTransform(new rn(t, e, n, i)), a.decomposeTransform();
			var o = a.scale;
			o[1] = -o[1], a.updateTransform(), this._updateTransform()
		},
		getRegion: function(t) {
			return this._regionsMap.get(t)
		},
		getRegionByCoord: function(t) {
			for (var e = this.regions, n = 0; n < e.length; n++)
				if (e[n].contain(t)) return e[n]
		},
		addGeoCoord: function(t, e) {
			this._nameCoordMap.set(t, e)
		},
		getGeoCoord: function(t) {
			return this._nameCoordMap.get(t)
		},
		getBoundingRect: function() {
			if (this._rect) return this._rect;
			for (var t, e = this.regions, n = 0; n < e.length; n++) {
				var i = e[n].getBoundingRect();
				t = t || i.clone(), t.union(i)
			}
			return this._rect = t || new rn(0, 0, 0, 0)
		},
		dataToPoint: function(t, e, n) {
			return "string" == typeof t && (t = this.getGeoCoord(t)), t ? dd.prototype.dataToPoint.call(
				this, t, e, n) : void 0
		},
		convertToPixel: _(gd, "dataToPoint"),
		convertFromPixel: _(gd, "pointToData")
	}, c(pd, dd);
	var $S = {
		dimensions: pd.prototype.dimensions,
		create: function(t, e) {
			var n = [];
			t.eachComponent("geo", function(t, i) {
				var r = t.get("map"),
					a = Fl(r),
					o = new pd(r + i, r, a && a.geoJson, a && a.specialAreas, t.get("nameMap"));
				o.zoomLimit = t.get("scaleLimit"), n.push(o), vd(o, t), t.coordinateSystem = o, o
					.model = t, o.resize = md, o.resize(t, e)
			}), t.eachSeries(function(t) {
				var e = t.get("coordinateSystem");
				if ("geo" === e) {
					var i = t.get("geoIndex") || 0;
					t.coordinateSystem = n[i]
				}
			});
			var i = {};
			return t.eachSeriesByType("map", function(t) {
				if (!t.getHostGeoModel()) {
					var e = t.getMapType();
					i[e] = i[e] || [], i[e].push(t)
				}
			}), f(i, function(t, i) {
				var r = Fl(i),
					o = p(t, function(t) {
						return t.get("nameMap")
					}),
					s = new pd(i, i, r && r.geoJson, r && r.specialAreas, a(o));
				s.zoomLimit = D.apply(null, p(t, function(t) {
					return t.get("scaleLimit")
				})), n.push(s), s.resize = md, s.resize(t[0], e), f(t, function(t) {
					t.coordinateSystem = s, vd(s, t)
				})
			}), n
		},
		getFilledRegions: function(t, e, n) {
			var i = (t || []).slice();
			n = n || {};
			var r = Fl(e),
				a = r && r.geoJson;
			if (!a) return t;
			for (var o = N(), s = a.features, l = 0; l < i.length; l++) o.set(i[l].name, i[l]);
			for (var l = 0; l < s.length; l++) {
				var u = s[l].properties.name;
				o.get(u) || (n.hasOwnProperty(u) && (u = n[u]), i.push({
					name: u
				}))
			}
			return i
		}
	};
	Cl("geo", $S);
	var JS = W_.extend({
		type: "series.map",
		dependencies: ["geo"],
		layoutMode: "box",
		needsDrawMap: !1,
		seriesGroup: [],
		init: function() {
			JS.superApply(this, "init", arguments), this.updateSelectedMap(this._createSelectableList())
		},
		getInitialData: function() {
			return rS(this, ["value"])
		},
		mergeOption: function() {
			JS.superApply(this, "mergeOption", arguments), this.updateSelectedMap(this
				._createSelectableList())
		},
		_createSelectableList: function() {
			for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t
			.count(); r > i; i++) n.push({
				name: t.getName(i),
				value: t.get(e, i),
				selected: fs(t, i, "selected")
			});
			return n = $S.getFilledRegions(n, this.getMapType(), this.option.nameMap)
		},
		getHostGeoModel: function() {
			var t = this.option.geoIndex;
			return null != t ? this.dependentModels.geo[t] : null
		},
		getMapType: function() {
			return (this.getHostGeoModel() || this).option.map
		},
		_fillOption: function() {},
		getRawValue: function(t) {
			var e = this.getData();
			return e.get(e.mapDimension("value"), t)
		},
		getRegionModel: function(t) {
			var e = this.getData();
			return e.getItemModel(e.indexOfName(t))
		},
		formatTooltip: function(t) {
			for (var e = this.getData(), n = to(this.getRawValue(t)), i = e.getName(t), r = this
					.seriesGroup, a = [], o = 0; o < r.length; o++) {
				var s = r[o].originalData.indexOfName(i),
					l = e.mapDimension("value");
				isNaN(r[o].originalData.get(l, s)) || a.push(no(r[o].name))
			}
			return a.join(", ") + "<br />" + no(i + " : " + n)
		},
		getTooltipPosition: function(t) {
			if (null != t) {
				var e = this.getData().getName(t),
					n = this.coordinateSystem,
					i = n.getRegion(e);
				return i && n.dataToPoint(i.center)
			}
		},
		setZoom: function(t) {
			this.option.zoom = t
		},
		setCenter: function(t) {
			this.option.center = t
		},
		defaultOption: {
			zlevel: 0,
			z: 2,
			coordinateSystem: "geo",
			map: "",
			left: "center",
			top: "center",
			aspectScale: .75,
			showLegendSymbol: !0,
			dataRangeHoverLink: !0,
			boundingCoords: null,
			center: null,
			zoom: 1,
			scaleLimit: null,
			label: {
				show: !1,
				color: "#000"
			},
			itemStyle: {
				borderWidth: .5,
				borderColor: "#444",
				areaColor: "#eee"
			},
			emphasis: {
				label: {
					show: !0,
					color: "rgb(100,0,0)"
				},
				itemStyle: {
					areaColor: "rgba(255,215,0,0.8)"
				}
			}
		}
	});
	c(JS, aS);
	var QS = "\x00_ec_interaction_mutex";
	Tl({
		type: "takeGlobalCursor",
		event: "globalCursorTaken",
		update: "update"
	}, function() {}), c(xd, dg);
	var tM = {
		axisPointer: 1,
		tooltip: 1,
		brush: 1
	};
	zd.prototype = {
		constructor: zd,
		draw: function(t, e, n, i, r) {
			var a = "geo" === t.mainType,
				o = t.getData && t.getData();
			a && e.eachComponent({
				mainType: "series",
				subType: "map"
			}, function(e) {
				o || e.getHostGeoModel() !== t || (o = e.getData())
			});
			var s = t.coordinateSystem,
				l = this.group,
				u = s.scale,
				h = {
					position: s.position,
					scale: u
				};
			!l.childAt(0) || r ? l.attr(h) : ba(l, h, t), l.removeAll();
			var c = ["itemStyle"],
				d = ["emphasis", "itemStyle"],
				p = ["label"],
				g = ["emphasis", "label"],
				m = N();
			f(s.regions, function(e) {
				var n = m.get(e.name) || m.set(e.name, new qg),
					i = new xy({
						shape: {
							paths: []
						}
					});
				n.add(i);
				var r, s = t.getRegionModel(e.name) || t,
					h = s.getModel(c),
					v = s.getModel(d),
					y = Pd(h, u),
					_ = Pd(v, u),
					x = s.getModel(p),
					w = s.getModel(g);
				if (o) {
					r = o.indexOfName(e.name);
					var b = o.getItemVisual(r, "color", !0);
					b && (y.fill = b)
				}
				f(e.geometries, function(t) {
					if ("polygon" === t.type) {
						i.shape.paths.push(new fy({
							shape: {
								points: t.exterior
							}
						}));
						for (var e = 0; e < (t.interiors ? t.interiors.length : 0); e++) i
							.shape.paths.push(new fy({
								shape: {
									points: t.interiors[e]
								}
							}))
					}
				}), i.setStyle(y), i.style.strokeNoScale = !0, i.culling = !0;
				var S = x.get("show"),
					M = w.get("show"),
					I = o && isNaN(o.get(o.mapDimension("value"), r)),
					T = o && o.getItemLayout(r);
				if (a || I && (S || M) || T && T.showLabel) {
					var C, D = a ? e.name : r;
					(!o || r >= 0) && (C = t);
					var A = new ay({
						position: e.center.slice(),
						scale: [1 / u[0], 1 / u[1]],
						z2: 10,
						silent: !0
					});
					ca(A.style, A.hoverStyle = {}, x, w, {
						labelFetcher: C,
						labelDataIndex: D,
						defaultText: e.name,
						useInsideStyle: !1
					}, {
						textAlign: "center",
						textVerticalAlign: "middle"
					}), n.add(A)
				}
				if (o) o.setItemGraphicEl(r, n);
				else {
					var s = t.getRegionModel(e.name);
					i.eventData = {
						componentType: "geo",
						geoIndex: t.componentIndex,
						name: e.name,
						region: s && s.option || {}
					}
				}
				var k = n.__regions || (n.__regions = []);
				k.push(e), ha(n, _, {
					hoverSilentOnTouch: !!t.get("selectedMode")
				}), l.add(n)
			}), this._updateController(t, e, n), Ld(this, t, l, n, i), Od(t, l)
		},
		remove: function() {
			this.group.removeAll(), this._controller.dispose(), this._controllerHost = {}
		},
		_updateController: function(t, e, n) {
			function i() {
				var e = {
					type: "geoRoam",
					componentType: l
				};
				return e[l + "Id"] = t.id, e
			}
			var r = t.coordinateSystem,
				a = this._controller,
				s = this._controllerHost;
			s.zoomLimit = t.get("scaleLimit"), s.zoom = r.getZoom(), a.enable(t.get("roam") || !1);
			var l = t.mainType;
			a.off("pan").on("pan", function(t, e) {
				this._mouseDownFlag = !1, Dd(s, t, e), n.dispatchAction(o(i(), {
					dx: t,
					dy: e
				}))
			}, this), a.off("zoom").on("zoom", function(t, e, r) {
				if (this._mouseDownFlag = !1, Ad(s, t, e, r), n.dispatchAction(o(i(), {
						zoom: t,
						originX: e,
						originY: r
					})), this._updateGroup) {
					var a = this.group,
						l = a.scale;
					a.traverse(function(t) {
						"text" === t.type && t.attr("scale", [1 / l[0], 1 / l[1]])
					})
				}
			}, this), a.setPointerChecker(function(e, i, a) {
				return r.getViewRectAfterRoam().contain(i, a) && !kd(e, n, t)
			})
		}
	}, El({
		type: "map",
		render: function(t, e, n, i) {
			if (!i || "mapToggleSelect" !== i.type || i.from !== this.uid) {
				var r = this.group;
				if (r.removeAll(), !t.getHostGeoModel()) {
					if (i && "geoRoam" === i.type && "series" === i.componentType && i.seriesId === t
						.id) {
						var a = this._mapDraw;
						a && r.add(a.group)
					} else if (t.needsDrawMap) {
						var a = this._mapDraw || new zd(n, !0);
						r.add(a.group), a.draw(t, e, n, this, i), this._mapDraw = a
					} else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
					t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e,
						n)
				}
			}
		},
		remove: function() {
			this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
		},
		dispose: function() {
			this._mapDraw && this._mapDraw.remove(), this._mapDraw = null
		},
		_renderSymbols: function(t) {
			var e = t.originalData,
				n = this.group;
			e.each(e.mapDimension("value"), function(i, r) {
				if (!isNaN(i)) {
					var a = e.getItemLayout(r);
					if (a && a.point) {
						var o = a.point,
							s = a.offset,
							l = new oy({
								style: {
									fill: t.getData().getVisual("color")
								},
								shape: {
									cx: o[0] + 9 * s,
									cy: o[1],
									r: 3
								},
								silent: !0,
								z2: s ? 8 : 10
							});
						if (!s) {
							var u = t.mainSeries.getData(),
								h = e.getName(r),
								c = u.indexOfName(h),
								d = e.getItemModel(r),
								f = d.getModel("label"),
								p = d.getModel("emphasis.label"),
								g = u.getItemGraphicEl(c),
								m = A(t.getFormattedLabel(r, "normal"), h),
								v = A(t.getFormattedLabel(r, "emphasis"), m),
								y = function() {
									var t = da({}, p, {
										text: p.get("show") ? v : null
									}, {
										isRectText: !0,
										useInsideStyle: !1
									}, !0);
									l.style.extendFrom(t), l.__mapOriginalZ2 = l.z2, l.z2 += 1
								},
								_ = function() {
									da(l.style, f, {
										text: f.get("show") ? m : null,
										textPosition: f.getShallow("position") ||
											"bottom"
									}, {
										isRectText: !0,
										useInsideStyle: !1
									}), null != l.__mapOriginalZ2 && (l.z2 = l
										.__mapOriginalZ2, l.__mapOriginalZ2 = null)
								};
							g.on("mouseover", y).on("mouseout", _).on("emphasis", y).on(
								"normal", _), _()
						}
						n.add(l)
					}
				}
			})
		}
	}), Tl({
		type: "geoRoam",
		event: "geoRoam",
		update: "updateTransform"
	}, function(t, e) {
		var n = t.componentType || "series";
		e.eachComponent({
			mainType: n,
			query: t
		}, function(e) {
			var i = e.coordinateSystem;
			if ("geo" === i.type) {
				var r = Rd(i, t, e.get("scaleLimit"));
				e.setCenter && e.setCenter(r.center), e.setZoom && e.setZoom(r.zoom), "series" ===
					n && f(e.seriesGroup, function(t) {
						t.setCenter(r.center), t.setZoom(r.zoom)
					})
			}
		})
	});
	var eM = function(t) {
			var e = {};
			t.eachSeriesByType("map", function(n) {
				var i = n.getMapType();
				if (!n.getHostGeoModel() && !e[i]) {
					var r = {};
					f(n.seriesGroup, function(e) {
						var n = e.coordinateSystem,
							i = e.originalData;
						e.get("showLegendSymbol") && t.getComponent("legend") && i.each(i
							.mapDimension("value"),
							function(t, e) {
								var a = i.getName(e),
									o = n.getRegion(a);
								if (o && !isNaN(t)) {
									var s = r[a] || 0,
										l = n.dataToPoint(o.center);
									r[a] = s + 1, i.setItemLayout(e, {
										point: l,
										offset: s
									})
								}
							})
					});
					var a = n.getData();
					a.each(function(t) {
						var e = a.getName(t),
							n = a.getItemLayout(t) || {};
						n.showLabel = !r[e], a.setItemLayout(t, n)
					}), e[i] = !0
				}
			})
		},
		nM = function(t) {
			t.eachSeriesByType("map", function(t) {
				var e = t.get("color"),
					n = t.getModel("itemStyle"),
					i = n.get("areaColor"),
					r = n.get("color") || e[t.seriesIndex % e.length];
				t.getData().setVisual({
					areaColor: i,
					color: r
				})
			})
		},
		iM = function(t) {
			var e = {};
			t.eachSeriesByType("map", function(t) {
				var n = t.getHostGeoModel(),
					i = n ? "o" + n.id : "i" + t.getMapType();
				(e[i] = e[i] || []).push(t)
			}), f(e, function(t) {
				for (var e = Ed(p(t, function(t) {
						return t.getData()
					}), t[0].get("mapValueCalculation")), n = 0; n < t.length; n++) t[n].originalData = t[n]
					.getData();
				for (var n = 0; n < t.length; n++) t[n].seriesGroup = t, t[n].needsDrawMap = 0 === n && !t[
					n].getHostGeoModel(), t[n].setData(e.cloneShallow()), t[n].mainSeries = t[0]
			})
		},
		rM = function(t) {
			var e = [];
			f(t.series, function(t) {
				t && "map" === t.type && (e.push(t), t.map = t.map || t.mapType, s(t, t.mapLocation))
			})
		};
	Al(eM), kl(nM), Ml(Ox.PROCESSOR.STATISTIC, iM), Sl(rM), lS("map", [{
		type: "mapToggleSelect",
		event: "mapselectchanged",
		method: "toggleSelected"
	}, {
		type: "mapSelect",
		event: "mapselected",
		method: "select"
	}, {
		type: "mapUnSelect",
		event: "mapunselected",
		method: "unSelect"
	}]);
	var aM = "undefined" == typeof Uint32Array ? Array : Uint32Array,
		oM = "undefined" == typeof Float64Array ? Array : Float64Array,
		sM = W_.extend({
			type: "series.lines",
			dependencies: ["grid", "polar"],
			visualColorAccessPath: "lineStyle.color",
			init: function(t) {
				t.data = t.data || [], Bd(t);
				var e = this._processFlatCoordsArray(t.data);
				this._flatCoords = e.flatCoords, this._flatCoordsOffset = e.flatCoordsOffset, e
					.flatCoords && (t.data = new Float32Array(e.count)), sM.superApply(this, "init",
						arguments)
			},
			mergeOption: function(t) {
				if (t.data = t.data || [], Bd(t), t.data) {
					var e = this._processFlatCoordsArray(t.data);
					this._flatCoords = e.flatCoords, this._flatCoordsOffset = e.flatCoordsOffset, e
						.flatCoords && (t.data = new Float32Array(e.count))
				}
				sM.superApply(this, "mergeOption", arguments)
			},
			appendData: function(t) {
				var e = this._processFlatCoordsArray(t.data);
				e.flatCoords && (this._flatCoords ? (this._flatCoords = F(this._flatCoords, e.flatCoords),
						this._flatCoordsOffset = F(this._flatCoordsOffset, e.flatCoordsOffset)) : (this
						._flatCoords = e.flatCoords, this._flatCoordsOffset = e.flatCoordsOffset), t
					.data = new Float32Array(e.count)), this.getRawData().appendData(t.data)
			},
			_getCoordsFromItemModel: function(t) {
				var e = this.getData().getItemModel(t),
					n = e.option instanceof Array ? e.option : e.getShallow("coords");
				return n
			},
			getLineCoordsCount: function(t) {
				return this._flatCoordsOffset ? this._flatCoordsOffset[2 * t + 1] : this
					._getCoordsFromItemModel(t).length
			},
			getLineCoords: function(t, e) {
				if (this._flatCoordsOffset) {
					for (var n = this._flatCoordsOffset[2 * t], i = this._flatCoordsOffset[2 * t + 1], r =
						0; i > r; r++) e[r] = e[r] || [], e[r][0] = this._flatCoords[n + 2 * r], e[r][1] =
						this._flatCoords[n + 2 * r + 1];
					return i
				}
				for (var a = this._getCoordsFromItemModel(t), r = 0; r < a.length; r++) e[r] = e[r] || [],
					e[r][0] = a[r][0], e[r][1] = a[r][1];
				return a.length
			},
			_processFlatCoordsArray: function(t) {
				var e = 0;
				if (this._flatCoords && (e = this._flatCoords.length), "number" == typeof t[0]) {
					for (var n = t.length, i = new aM(n), r = new oM(n), a = 0, o = 0, s = 0, l = 0; n >
						l;) {
						s++;
						var u = t[l++];
						i[o++] = a + e, i[o++] = u;
						for (var h = 0; u > h; h++) {
							var c = t[l++],
								d = t[l++];
							r[a++] = c, r[a++] = d
						}
					}
					return {
						flatCoordsOffset: new Uint32Array(i.buffer, 0, o),
						flatCoords: r,
						count: s
					}
				}
				return {
					flatCoordsOffset: null,
					flatCoords: null,
					count: t.length
				}
			},
			getInitialData: function(t) {
				var e = new cw(["value"], this);
				return e.hasItemOption = !1, e.initData(t.data, [], function(t, n, i, r) {
					if (t instanceof Array) return 0 / 0;
					e.hasItemOption = !0;
					var a = t.value;
					return null != a ? a instanceof Array ? a[r] : a : void 0
				}), e
			},
			formatTooltip: function(t) {
				var e = this.getData(),
					n = e.getItemModel(t),
					i = n.get("name");
				if (i) return i;
				var r = n.get("fromName"),
					a = n.get("toName"),
					o = [];
				return null != r && o.push(r), null != a && o.push(a), no(o.join(" > "))
			},
			preventIncremental: function() {
				return !!this.get("effect.show")
			},
			getProgressive: function() {
				var t = this.option.progressive;
				return null == t ? this.option.large ? 1e4 : this.get("progressive") : t
			},
			getProgressiveThreshold: function() {
				var t = this.option.progressiveThreshold;
				return null == t ? this.option.large ? 2e4 : this.get("progressiveThreshold") : t
			},
			defaultOption: {
				coordinateSystem: "geo",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				symbol: ["none", "none"],
				symbolSize: [10, 10],
				geoIndex: 0,
				effect: {
					show: !1,
					period: 4,
					constantSpeed: 0,
					symbol: "circle",
					symbolSize: 3,
					loop: !0,
					trailLength: .2
				},
				large: !1,
				largeThreshold: 2e3,
				polyline: !1,
				label: {
					show: !1,
					position: "end"
				},
				lineStyle: {
					opacity: .5
				}
			}
		}),
		lM = my.prototype,
		uM = yy.prototype,
		hM = Wr({
			type: "ec-line",
			style: {
				stroke: "#000",
				fill: null
			},
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1,
				cpx1: null,
				cpy1: null
			},
			buildPath: function(t, e) {
				(Nd(e) ? lM : uM).buildPath(t, e)
			},
			pointAt: function(t) {
				return Nd(this.shape) ? lM.pointAt.call(this, t) : uM.pointAt.call(this, t)
			},
			tangentAt: function(t) {
				var e = this.shape,
					n = Nd(e) ? [e.x2 - e.x1, e.y2 - e.y1] : uM.tangentAt.call(this, t);
				return te(n, n)
			}
		}),
		cM = ["fromSymbol", "toSymbol"],
		dM = Ud.prototype;
	dM.beforeUpdate = Wd, dM._createLine = function(t, e, n) {
		var i = t.hostModel,
			r = t.getItemLayout(e),
			a = Gd(r);
		a.shape.percent = 0, Sa(a, {
			shape: {
				percent: 1
			}
		}, i, e), this.add(a);
		var o = new ay({
			name: "label"
		});
		this.add(o), f(cM, function(n) {
			var i = Vd(n, t, e);
			this.add(i), this[Fd(n)] = t.getItemVisual(e, n)
		}, this), this._updateCommonStl(t, e, n)
	}, dM.updateData = function(t, e, n) {
		var i = t.hostModel,
			r = this.childOfName("line"),
			a = t.getItemLayout(e),
			o = {
				shape: {}
			};
		Hd(o.shape, a), ba(r, o, i, e), f(cM, function(n) {
			var i = t.getItemVisual(e, n),
				r = Fd(n);
			if (this[r] !== i) {
				this.remove(this.childOfName(n));
				var a = Vd(n, t, e);
				this.add(a)
			}
			this[r] = i
		}, this), this._updateCommonStl(t, e, n)
	}, dM._updateCommonStl = function(t, e, n) {
		var i = t.hostModel,
			r = this.childOfName("line"),
			a = n && n.lineStyle,
			o = n && n.hoverLineStyle,
			l = n && n.labelModel,
			u = n && n.hoverLabelModel;
		if (!n || t.hasItemOption) {
			var h = t.getItemModel(e);
			a = h.getModel("lineStyle").getLineStyle(), o = h.getModel("emphasis.lineStyle").getLineStyle(), l =
				h.getModel("label"), u = h.getModel("emphasis.label")
		}
		var c = t.getItemVisual(e, "color"),
			d = k(t.getItemVisual(e, "opacity"), a.opacity, 1);
		r.useStyle(s({
			strokeNoScale: !0,
			fill: "none",
			stroke: c,
			opacity: d
		}, a)), r.hoverStyle = o, f(cM, function(t) {
			var e = this.childOfName(t);
			e && (e.setColor(c), e.setStyle({
				opacity: d
			}))
		}, this);
		var p, g, m = l.getShallow("show"),
			v = u.getShallow("show"),
			y = this.childOfName("label");
		if ((m || v) && (p = c || "#000", g = i.getFormattedLabel(e, "normal", t.dataType), null == g)) {
			var _ = i.getRawValue(e);
			g = null == _ ? t.getName(e) : isFinite(_) ? Va(_) : _
		}
		var x = m ? g : null,
			w = v ? A(i.getFormattedLabel(e, "emphasis", t.dataType), g) : null,
			b = y.style;
		(null != x || null != w) && (da(y.style, l, {
			text: x
		}, {
			autoColor: p
		}), y.__textAlign = b.textAlign, y.__verticalAlign = b.textVerticalAlign, y.__position = l.get(
			"position") || "middle"), y.hoverStyle = null != w ? {
			text: w,
			textFill: u.getTextColor(!0),
			fontStyle: u.getShallow("fontStyle"),
			fontWeight: u.getShallow("fontWeight"),
			fontSize: u.getShallow("fontSize"),
			fontFamily: u.getShallow("fontFamily")
		} : {
			text: null
		}, y.ignore = !m && !v, ha(this)
	}, dM.highlight = function() {
		this.trigger("emphasis")
	}, dM.downplay = function() {
		this.trigger("normal")
	}, dM.updateLayout = function(t, e) {
		this.setLinePoints(t.getItemLayout(e))
	}, dM.setLinePoints = function(t) {
		var e = this.childOfName("line");
		Hd(e.shape, t), e.dirty()
	}, h(Ud, qg);
	var fM = Xd.prototype;
	fM.isPersistent = function() {
		return !0
	}, fM.updateData = function(t) {
		var e = this,
			n = e.group,
			i = e._lineData;
		e._lineData = t, i || n.removeAll();
		var r = jd(t);
		t.diff(i).add(function(n) {
			Zd(e, t, n, r)
		}).update(function(n, a) {
			qd(e, i, t, a, n, r)
		}).remove(function(t) {
			n.remove(i.getItemGraphicEl(t))
		}).execute()
	}, fM.updateLayout = function() {
		var t = this._lineData;
		t && t.eachItemGraphicEl(function(e, n) {
			e.updateLayout(t, n)
		}, this)
	}, fM.incrementalPrepareUpdate = function(t) {
		this._seriesScope = jd(t), this._lineData = null, this.group.removeAll()
	}, fM.incrementalUpdate = function(t, e) {
		function n(t) {
			t.isGroup || (t.incremental = t.useHoverLayer = !0)
		}
		for (var i = t.start; i < t.end; i++) {
			var r = e.getItemLayout(i);
			if (Kd(r)) {
				var a = new this._ctor(e, i, this._seriesScope);
				a.traverse(n), this.group.add(a), e.setItemGraphicEl(i, a)
			}
		}
	}, fM.remove = function() {
		this._clearIncremental(), this._incremental = null, this.group.removeAll()
	}, fM._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	};
	var pM = $d.prototype;
	pM.createLine = function(t, e, n) {
		return new Ud(t, e, n)
	}, pM._updateEffectSymbol = function(t, e) {
		var n = t.getItemModel(e),
			i = n.getModel("effect"),
			r = i.get("symbolSize"),
			a = i.get("symbol");
		x(r) || (r = [r, r]);
		var o = i.get("color") || t.getItemVisual(e, "color"),
			s = this.childAt(1);
		this._symbolType !== a && (this.remove(s), s = Wu(a, -.5, -.5, 1, 1, o), s.z2 = 100, s.culling = !0,
			this.add(s)), s && (s.setStyle("shadowColor", o), s.setStyle(i.getItemStyle(["color"])), s.attr(
				"scale", r), s.setColor(o), s.attr("scale", r), this._symbolType = a, this
			._updateEffectAnimation(t, i, e))
	}, pM._updateEffectAnimation = function(t, e, n) {
		var i = this.childAt(1);
		if (i) {
			var r = this,
				a = t.getItemLayout(n),
				o = 1e3 * e.get("period"),
				s = e.get("loop"),
				l = e.get("constantSpeed"),
				u = D(e.get("delay"), function(e) {
					return e / t.count() * o / 3
				}),
				h = "function" == typeof u;
			if (i.ignore = !0, this.updateAnimationPoints(i, a), l > 0 && (o = this.getLineLength(i) / l * 1e3),
				o !== this._period || s !== this._loop) {
				i.stopAnimation();
				var c = u;
				h && (c = u(n)), i.__t > 0 && (c = -o * i.__t), i.__t = 0;
				var d = i.animate("", s).when(o, {
					__t: 1
				}).delay(c).during(function() {
					r.updateSymbolPosition(i)
				});
				s || d.done(function() {
					r.remove(i)
				}), d.start()
			}
			this._period = o, this._loop = s
		}
	}, pM.getLineLength = function(t) {
		return lg(t.__p1, t.__cp1) + lg(t.__cp1, t.__p2)
	}, pM.updateAnimationPoints = function(t, e) {
		t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
	}, pM.updateData = function(t, e, n) {
		this.childAt(0).updateData(t, e, n), this._updateEffectSymbol(t, e)
	}, pM.updateSymbolPosition = function(t) {
		var e = t.__p1,
			n = t.__p2,
			i = t.__cp1,
			r = t.__t,
			a = t.position,
			o = sr,
			s = lr;
		a[0] = o(e[0], i[0], n[0], r), a[1] = o(e[1], i[1], n[1], r);
		var l = s(e[0], i[0], n[0], r),
			u = s(e[1], i[1], n[1], r);
		t.rotation = -Math.atan2(u, l) - Math.PI / 2, t.ignore = !1
	}, pM.updateLayout = function(t, e) {
		this.childAt(0).updateLayout(t, e);
		var n = t.getItemModel(e).getModel("effect");
		this._updateEffectAnimation(t, n, e)
	}, h($d, qg);
	var gM = Jd.prototype;
	gM._createPolyline = function(t, e, n) {
		var i = t.getItemLayout(e),
			r = new py({
				shape: {
					points: i
				}
			});
		this.add(r), this._updateCommonStl(t, e, n)
	}, gM.updateData = function(t, e, n) {
		var i = t.hostModel,
			r = this.childAt(0),
			a = {
				shape: {
					points: t.getItemLayout(e)
				}
			};
		ba(r, a, i, e), this._updateCommonStl(t, e, n)
	}, gM._updateCommonStl = function(t, e, n) {
		var i = this.childAt(0),
			r = t.getItemModel(e),
			a = t.getItemVisual(e, "color"),
			o = n && n.lineStyle,
			l = n && n.hoverLineStyle;
		(!n || t.hasItemOption) && (o = r.getModel("lineStyle").getLineStyle(), l = r.getModel(
			"emphasis.lineStyle").getLineStyle()), i.useStyle(s({
			strokeNoScale: !0,
			fill: "none",
			stroke: a
		}, o)), i.hoverStyle = l, ha(this)
	}, gM.updateLayout = function(t, e) {
		var n = this.childAt(0);
		n.setShape("points", t.getItemLayout(e))
	}, h(Jd, qg);
	var mM = Qd.prototype;
	mM.createLine = function(t, e, n) {
		return new Jd(t, e, n)
	}, mM.updateAnimationPoints = function(t, e) {
		this._points = e;
		for (var n = [0], i = 0, r = 1; r < e.length; r++) {
			var a = e[r - 1],
				o = e[r];
			i += lg(a, o), n.push(i)
		}
		if (0 !== i) {
			for (var r = 0; r < n.length; r++) n[r] /= i;
			this._offsets = n, this._length = i
		}
	}, mM.getLineLength = function() {
		return this._length
	}, mM.updateSymbolPosition = function(t) {
		var e = t.__t,
			n = this._points,
			i = this._offsets,
			r = n.length;
		if (i) {
			var a, o = this._lastFrame;
			if (e < this._lastFramePercent) {
				var s = Math.min(o + 1, r - 1);
				for (a = s; a >= 0 && !(i[a] <= e); a--);
				a = Math.min(a, r - 2)
			} else {
				for (var a = o; r > a && !(i[a] > e); a++);
				a = Math.min(a - 1, r - 2)
			}
			re(t.position, n[a], n[a + 1], (e - i[a]) / (i[a + 1] - i[a]));
			var l = n[a + 1][0] - n[a][0],
				u = n[a + 1][1] - n[a][1];
			t.rotation = -Math.atan2(u, l) - Math.PI / 2, this._lastFrame = a, this._lastFramePercent = e, t
				.ignore = !1
		}
	}, h(Qd, $d);
	var vM = Wr({
			shape: {
				polyline: !1,
				curveness: 0,
				segs: []
			},
			buildPath: function(t, e) {
				var n = e.segs,
					i = e.curveness;
				if (e.polyline)
					for (var r = 0; r < n.length;) {
						var a = n[r++];
						if (a > 0) {
							t.moveTo(n[r++], n[r++]);
							for (var o = 1; a > o; o++) t.lineTo(n[r++], n[r++])
						}
					} else
						for (var r = 0; r < n.length;) {
							var s = n[r++],
								l = n[r++],
								u = n[r++],
								h = n[r++];
							if (t.moveTo(s, l), i > 0) {
								var c = (s + u) / 2 - (l - h) * i,
									d = (l + h) / 2 - (u - s) * i;
								t.quadraticCurveTo(c, d, u, h)
							} else t.lineTo(u, h)
						}
			},
			findDataIndex: function() {
				var t = this.shape,
					e = t.segs,
					n = t.curveness;
				if (t.polyline)
					for (var i = 0, r = 0; r < e.length;) {
						var a = e[r++];
						if (a > 0)
							for (var o = e[r++], s = e[r++], l = 1; a > l; l++) {
								var u = e[r++],
									h = e[r++];
								if (yr(o, s, u, h)) return i
							}
						i++
					} else
						for (var i = 0, r = 0; r < e.length;) {
							var o = e[r++],
								s = e[r++],
								u = e[r++],
								h = e[r++];
							if (n > 0) {
								var c = (o + u) / 2 - (s - h) * n,
									d = (s + h) / 2 - (u - o) * n;
								if (xr(o, s, c, d, u, h)) return i
							} else if (yr(o, s, u, h)) return i;
							i++
						}
				return -1
			}
		}),
		yM = tf.prototype;
	yM.isPersistent = function() {
		return !this._incremental
	}, yM.updateData = function(t) {
		this.group.removeAll();
		var e = new vM({
			rectHover: !0,
			cursor: "default"
		});
		e.setShape({
			segs: t.getLayout("linesPoints")
		}), this._setCommon(e, t), this.group.add(e), this._incremental = null
	}, yM.incrementalPrepareUpdate = function(t) {
		this.group.removeAll(), this._clearIncremental(), t.count() > 5e5 ? (this._incremental || (this
			._incremental = new Hr({
				silent: !0
			})), this.group.add(this._incremental)) : this._incremental = null
	}, yM.incrementalUpdate = function(t, e) {
		var n = new vM;
		n.setShape({
				segs: e.getLayout("linesPoints")
			}), this._setCommon(n, e, !!this._incremental), this._incremental ? this._incremental
			.addDisplayable(n, !0) : (n.rectHover = !0, n.cursor = "default", n.__startIndex = t.start, this
				.group.add(n))
	}, yM.remove = function() {
		this._clearIncremental(), this._incremental = null, this.group.removeAll()
	}, yM._setCommon = function(t, e, n) {
		var i = e.hostModel;
		t.setShape({
			polyline: i.get("polyline"),
			curveness: i.get("lineStyle.curveness")
		}), t.useStyle(i.getModel("lineStyle").getLineStyle()), t.style.strokeNoScale = !0;
		var r = e.getVisual("color");
		r && t.setStyle("stroke", r), t.setStyle("fill"), n || (t.seriesIndex = i.seriesIndex, t.on("mousemove",
			function(e) {
				t.dataIndex = null;
				var n = t.findDataIndex(e.offsetX, e.offsetY);
				n > 0 && (t.dataIndex = n + t.__startIndex)
			}))
	}, yM._clearIncremental = function() {
		var t = this._incremental;
		t && t.clearDisplaybles()
	};
	var _M = {
		seriesType: "lines",
		plan: Z_(),
		reset: function(t) {
			function e(e, a) {
				var o = [];
				if (r) {
					var s, l = e.end - e.start;
					if (i) {
						for (var u = 0, h = e.start; h < e.end; h++) u += t.getLineCoordsCount(h);
						s = new Float32Array(l + 2 * u)
					} else s = new Float32Array(4 * l);
					for (var c = 0, d = [], h = e.start; h < e.end; h++) {
						var f = t.getLineCoords(h, o);
						i && (s[c++] = f);
						for (var p = 0; f > p; p++) d = n.dataToPoint(o[p], !1, d), s[c++] = d[0], s[c++] =
							d[1]
					}
					a.setLayout("linesPoints", s)
				} else
					for (var h = e.start; h < e.end; h++) {
						var g = a.getItemModel(h),
							f = t.getLineCoords(h, o),
							m = [];
						if (i)
							for (var v = 0; f > v; v++) m.push(n.dataToPoint(o[v]));
						else {
							m[0] = n.dataToPoint(o[0]), m[1] = n.dataToPoint(o[1]);
							var y = g.get("lineStyle.curveness"); + y && (m[2] = [(m[0][0] + m[1][0]) / 2 -
								(m[0][1] - m[1][1]) * y, (m[0][1] + m[1][1]) / 2 - (m[1][0] - m[0][
									0]) * y
							])
						}
						a.setItemLayout(h, m)
					}
			}
			var n = t.coordinateSystem,
				i = t.get("polyline"),
				r = t.pipelineContext.large;
			return {
				progress: e
			}
		}
	};
	El({
		type: "lines",
		init: function() {},
		render: function(t, e, n) {
			var i = t.getData(),
				r = this._updateLineDraw(i, t),
				a = t.get("zlevel"),
				o = t.get("effect.trailLength"),
				s = n.getZr(),
				l = "svg" === s.painter.getType();
			l || s.painter.getLayer(a).clear(!0), null == this._lastZlevel || l || s.configLayer(this
				._lastZlevel, {
					motionBlur: !1
				}), this._showEffect(t) && o && (l || s.configLayer(a, {
				motionBlur: !0,
				lastFrameAlpha: Math.max(Math.min(o / 10 + .9, 1), 0)
			})), r.updateData(i), this._lastZlevel = a, this._finished = !0
		},
		incrementalPrepareRender: function(t, e, n) {
			var i = t.getData(),
				r = this._updateLineDraw(i, t);
			r.incrementalPrepareUpdate(i), this._clearLayer(n), this._finished = !1
		},
		incrementalRender: function(t, e) {
			this._lineDraw.incrementalUpdate(t, e.getData()), this._finished = t.end === e.getData()
				.count()
		},
		updateTransform: function(t, e, n) {
			var i = t.getData(),
				r = t.pipelineContext;
			if (!this._finished || r.large || r.progressiveRender) return {
				update: !0
			};
			var a = _M.reset(t);
			a.progress && a.progress({
				start: 0,
				end: i.count()
			}, i), this._lineDraw.updateLayout(), this._clearLayer(n)
		},
		_updateLineDraw: function(t, e) {
			var n = this._lineDraw,
				i = this._showEffect(e),
				r = !!e.get("polyline"),
				a = e.pipelineContext,
				o = a.large;
			return n && i === this._hasEffet && r === this._isPolyline && o === this._isLargeDraw || (
				n && n.remove(), n = this._lineDraw = o ? new tf : new Xd(r ? i ? Qd : Jd : i ? $d :
					Ud), this._hasEffet = i, this._isPolyline = r, this._isLargeDraw = o, this.group
				.removeAll()), this.group.add(n.group), n
		},
		_showEffect: function(t) {
			return !!t.get("effect.show")
		},
		_clearLayer: function(t) {
			var e = t.getZr(),
				n = "svg" === e.painter.getType();
			n || null == this._lastZlevel || e.painter.getLayer(this._lastZlevel).clear(!0)
		},
		remove: function(t, e) {
			this._lineDraw && this._lineDraw.remove(), this._lineDraw = null, this._clearLayer(e)
		},
		dispose: function() {}
	});
	var xM = "lineStyle.opacity".split("."),
		wM = {
			seriesType: "lines",
			reset: function(t) {
				function e(t, e) {
					var n = t.getItemModel(e),
						i = ef(n.getShallow("symbol", !0)),
						r = ef(n.getShallow("symbolSize", !0)),
						a = n.get(xM);
					i[0] && t.setItemVisual(e, "fromSymbol", i[0]), i[1] && t.setItemVisual(e, "toSymbol", i[
						1]), r[0] && t.setItemVisual(e, "fromSymbolSize", r[0]), r[1] && t.setItemVisual(e,
							"toSymbolSize", r[1]), t.setItemVisual(e, "opacity", a)
				}
				var n = ef(t.get("symbol")),
					i = ef(t.get("symbolSize")),
					r = t.getData();
				return r.setVisual("fromSymbol", n && n[0]), r.setVisual("toSymbol", n && n[1]), r.setVisual(
					"fromSymbolSize", i && i[0]), r.setVisual("toSymbolSize", i && i[1]), r.setVisual(
					"opacity", t.get(xM)), {
					dataEach: r.hasItemOption ? e : null
				}
			}
		};
	Al(_M), kl(wM); {
		var bM = (W_.extend({
				type: "series.gauge",
				getInitialData: function(t) {
					var e = t.data || [];
					return x(e) || (e = [e]), t.data = e, rS(this, ["value"])
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					center: ["50%", "50%"],
					legendHoverLink: !0,
					radius: "75%",
					startAngle: 225,
					endAngle: -45,
					clockwise: !0,
					min: 0,
					max: 100,
					splitNumber: 10,
					axisLine: {
						show: !0,
						lineStyle: {
							color: [
								[.2, "#91c7ae"],
								[.8, "#63869e"],
								[1, "#c23531"]
							],
							width: 30
						}
					},
					splitLine: {
						show: !0,
						length: 30,
						lineStyle: {
							color: "#eee",
							width: 2,
							type: "solid"
						}
					},
					axisTick: {
						show: !0,
						splitNumber: 5,
						length: 8,
						lineStyle: {
							color: "#eee",
							width: 1,
							type: "solid"
						}
					},
					axisLabel: {
						show: !0,
						distance: 5,
						color: "auto"
					},
					pointer: {
						show: !0,
						length: "80%",
						width: 8
					},
					itemStyle: {
						color: "auto"
					},
					title: {
						show: !0,
						offsetCenter: [0, "-40%"],
						color: "#333",
						fontSize: 15
					},
					detail: {
						show: !0,
						backgroundColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						borderColor: "#ccc",
						width: 100,
						height: null,
						padding: [5, 10],
						offsetCenter: [0, "40%"],
						color: "auto",
						fontSize: 30
					}
				}
			}), Lr.extend({
				type: "echartsGaugePointer",
				shape: {
					angle: 0,
					width: 10,
					r: 10,
					x: 0,
					y: 0
				},
				buildPath: function(t, e) {
					var n = Math.cos,
						i = Math.sin,
						r = e.r,
						a = e.width,
						o = e.angle,
						s = e.x - n(o) * a * (a >= r / 3 ? 1 : 2),
						l = e.y - i(o) * a * (a >= r / 3 ? 1 : 2);
					o = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + n(o) * a, e.y + i(o) * a),
						t.lineTo(e.x + n(e.angle) * r, e.y + i(e.angle) * r), t.lineTo(e.x - n(o) * a, e
							.y - i(o) * a), t.lineTo(s, l)
				}
			})),
			SM = 2 * Math.PI,
			MM = (Ts.extend({
				type: "gauge",
				render: function(t, e, n) {
					this.group.removeAll();
					var i = t.get("axisLine.lineStyle.color"),
						r = nf(t, n);
					this._renderMain(t, e, n, i, r)
				},
				dispose: function() {},
				_renderMain: function(t, e, n, i, r) {
					for (var a = this.group, o = t.getModel("axisLine"), s = o.getModel("lineStyle"),
							l = t.get("clockwise"), u = -t.get("startAngle") / 180 * Math.PI, h = -t
							.get("endAngle") / 180 * Math.PI, c = (h - u) % SM, d = u, f = s.get(
								"width"), p = 0; p < i.length; p++) {
						var g = Math.min(Math.max(i[p][0], 0), 1),
							h = u + c * g,
							m = new uy({
								shape: {
									startAngle: d,
									endAngle: h,
									cx: r.cx,
									cy: r.cy,
									clockwise: l,
									r0: r.r - f,
									r: r.r
								},
								silent: !0
							});
						m.setStyle({
								fill: i[p][1]
							}), m.setStyle(s.getLineStyle(["color", "borderWidth", "borderColor"])), a
							.add(m), d = h
					}
					var v = function(t) {
						if (0 >= t) return i[0][1];
						for (var e = 0; e < i.length; e++)
							if (i[e][0] >= t && (0 === e ? 0 : i[e - 1][0]) < t) return i[e][1];
						return i[e - 1][1]
					};
					if (!l) {
						var y = u;
						u = h, h = y
					}
					this._renderTicks(t, e, n, v, r, u, h, l), this._renderPointer(t, e, n, v, r, u, h,
						l), this._renderTitle(t, e, n, v, r), this._renderDetail(t, e, n, v, r)
				},
				_renderTicks: function(t, e, n, i, r, a, o) {
					for (var s = this.group, l = r.cx, u = r.cy, h = r.r, c = +t.get("min"), d = +t.get(
								"max"), f = t.getModel("splitLine"), p = t.getModel("axisTick"), g = t
							.getModel("axisLabel"), m = t.get("splitNumber"), v = p.get("splitNumber"),
							y = Fa(f.get("length"), h), _ = Fa(p.get("length"), h), x = a, w = (o - a) /
							m, b = w / v, S = f.getModel("lineStyle").getLineStyle(), M = p.getModel(
								"lineStyle").getLineStyle(), I = 0; m >= I; I++) {
						var T = Math.cos(x),
							C = Math.sin(x);
						if (f.get("show")) {
							var D = new my({
								shape: {
									x1: T * h + l,
									y1: C * h + u,
									x2: T * (h - y) + l,
									y2: C * (h - y) + u
								},
								style: S,
								silent: !0
							});
							"auto" === S.stroke && D.setStyle({
								stroke: i(I / m)
							}), s.add(D)
						}
						if (g.get("show")) {
							var A = rf(Va(I / m * (d - c) + c), g.get("formatter")),
								k = g.get("distance"),
								P = i(I / m);
							s.add(new ay({
								style: da({}, g, {
									text: A,
									x: T * (h - y - k) + l,
									y: C * (h - y - k) + u,
									textVerticalAlign: -.4 > C ? "top" : C > .4 ?
										"bottom" : "middle",
									textAlign: -.4 > T ? "left" : T > .4 ? "right" :
										"center"
								}, {
									autoColor: P
								}),
								silent: !0
							}))
						}
						if (p.get("show") && I !== m) {
							for (var L = 0; v >= L; L++) {
								var T = Math.cos(x),
									C = Math.sin(x),
									O = new my({
										shape: {
											x1: T * h + l,
											y1: C * h + u,
											x2: T * (h - _) + l,
											y2: C * (h - _) + u
										},
										silent: !0,
										style: M
									});
								"auto" === M.stroke && O.setStyle({
									stroke: i((I + L / v) / m)
								}), s.add(O), x += b
							}
							x -= b
						} else x += w
					}
				},
				_renderPointer: function(t, e, n, i, r, a, o) {
					var s = this.group,
						l = this._data;
					if (!t.get("pointer.show")) return void(l && l.eachItemGraphicEl(function(t) {
						s.remove(t)
					}));
					var u = [+t.get("min"), +t.get("max")],
						h = [a, o],
						c = t.getData(),
						d = c.mapDimension("value");
					c.diff(l).add(function(e) {
						var n = new bM({
							shape: {
								angle: a
							}
						});
						Sa(n, {
							shape: {
								angle: Na(c.get(d, e), u, h, !0)
							}
						}, t), s.add(n), c.setItemGraphicEl(e, n)
					}).update(function(e, n) {
						var i = l.getItemGraphicEl(n);
						ba(i, {
							shape: {
								angle: Na(c.get(d, e), u, h, !0)
							}
						}, t), s.add(i), c.setItemGraphicEl(e, i)
					}).remove(function(t) {
						var e = l.getItemGraphicEl(t);
						s.remove(e)
					}).execute(), c.eachItemGraphicEl(function(t, e) {
						var n = c.getItemModel(e),
							a = n.getModel("pointer");
						t.setShape({
								x: r.cx,
								y: r.cy,
								width: Fa(a.get("width"), r.r),
								r: Fa(a.get("length"), r.r)
							}), t.useStyle(n.getModel("itemStyle").getItemStyle()), "auto" === t
							.style.fill && t.setStyle("fill", i(Na(c.get(d, e), u, [0, 1], !
							0))), ha(t, n.getModel("emphasis.itemStyle").getItemStyle())
					}), this._data = c
				},
				_renderTitle: function(t, e, n, i, r) {
					var a = t.getData(),
						o = a.mapDimension("value"),
						s = t.getModel("title");
					if (s.get("show")) {
						var l = s.get("offsetCenter"),
							u = r.cx + Fa(l[0], r.r),
							h = r.cy + Fa(l[1], r.r),
							c = +t.get("min"),
							d = +t.get("max"),
							f = t.getData().get(o, 0),
							p = i(Na(f, [c, d], [0, 1], !0));
						this.group.add(new ay({
							silent: !0,
							style: da({}, s, {
								x: u,
								y: h,
								text: a.getName(0),
								textAlign: "center",
								textVerticalAlign: "middle"
							}, {
								autoColor: p,
								forceRich: !0
							})
						}))
					}
				},
				_renderDetail: function(t, e, n, i, r) {
					var a = t.getModel("detail"),
						o = +t.get("min"),
						s = +t.get("max");
					if (a.get("show")) {
						var l = a.get("offsetCenter"),
							u = r.cx + Fa(l[0], r.r),
							h = r.cy + Fa(l[1], r.r),
							c = Fa(a.get("width"), r.r),
							d = Fa(a.get("height"), r.r),
							f = t.getData(),
							p = f.get(f.mapDimension("value"), 0),
							g = i(Na(p, [o, s], [0, 1], !0));
						this.group.add(new ay({
							silent: !0,
							style: da({}, a, {
								x: u,
								y: h,
								text: rf(p, a.get("formatter")),
								textWidth: isNaN(c) ? null : c,
								textHeight: isNaN(d) ? null : d,
								textAlign: "center",
								textVerticalAlign: "middle"
							}, {
								autoColor: g,
								forceRich: !0
							})
						}))
					}
				}
			}), yb.extend({
				type: "series.pictorialBar",
				dependencies: ["grid"],
				defaultOption: {
					symbol: "circle",
					symbolSize: null,
					symbolRotate: null,
					symbolPosition: null,
					symbolOffset: null,
					symbolMargin: null,
					symbolRepeat: !1,
					symbolRepeatDirection: "end",
					symbolClip: !1,
					symbolBoundingData: null,
					symbolPatternSize: 400,
					barGap: "-100%",
					progressive: 0,
					hoverAnimation: !1
				},
				getInitialData: function(t) {
					return t.stack = null, MM.superApply(this, "getInitialData", arguments)
				}
			})),
			IM = ["itemStyle", "borderWidth"],
			TM = [{
				xy: "x",
				wh: "width",
				index: 0,
				posDesc: ["left", "right"]
			}, {
				xy: "y",
				wh: "height",
				index: 1,
				posDesc: ["top", "bottom"]
			}],
			CM = new oy;
		El({
			type: "pictorialBar",
			render: function(t, e, n) {
				var i = this.group,
					r = t.getData(),
					a = this._data,
					o = t.coordinateSystem,
					s = o.getBaseAxis(),
					l = !!s.isHorizontal(),
					u = o.grid.getRect(),
					h = {
						ecSize: {
							width: n.getWidth(),
							height: n.getHeight()
						},
						seriesModel: t,
						coordSys: o,
						coordSysExtent: [
							[u.x, u.x + u.width],
							[u.y, u.y + u.height]
						],
						isHorizontal: l,
						valueDim: TM[+l],
						categoryDim: TM[1 - l]
					};
				return r.diff(a).add(function(t) {
					if (r.hasValue(t)) {
						var e = mf(r, t),
							n = af(r, t, e, h),
							a = xf(r, h, n);
						r.setItemGraphicEl(t, a), i.add(a), Tf(a, h, n)
					}
				}).update(function(t, e) {
					var n = a.getItemGraphicEl(e);
					if (!r.hasValue(t)) return void i.remove(n);
					var o = mf(r, t),
						s = af(r, t, o, h),
						l = Sf(r, s);
					n && l !== n.__pictorialShapeStr && (i.remove(n), r.setItemGraphicEl(t,
							null), n = null), n ? wf(n, h, s) : n = xf(r, h, s, !0), r
						.setItemGraphicEl(t, n), n.__pictorialSymbolMeta = s, i.add(n), Tf(n, h,
							s)
				}).remove(function(t) {
					var e = a.getItemGraphicEl(t);
					e && bf(a, t, e.__pictorialSymbolMeta.animationModel, e)
				}).execute(), this._data = r, this.group
			},
			dispose: V,
			remove: function(t) {
				var e = this.group,
					n = this._data;
				t.get("animation") ? n && n.eachItemGraphicEl(function(e) {
					bf(n, e.dataIndex, t, e)
				}) : e.removeAll()
			}
		})
	}
	Al(_(Du, "pictorialBar")), kl(Qb("pictorialBar", "roundRect")), Lf.prototype = {
		constructor: Lf,
		pointToData: function(t, e) {
			return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1]
		},
		dataToRadius: ab.prototype.dataToCoord,
		radiusToData: ab.prototype.coordToData
	}, h(Lf, ab), Of.prototype = {
		constructor: Of,
		pointToData: function(t, e) {
			return this.polar.pointToData(t, e)["radius" === this.dim ? 0 : 1]
		},
		dataToAngle: ab.prototype.dataToCoord,
		angleToData: ab.prototype.coordToData
	}, h(Of, ab);
	var DM = function(t) {
		this.name = t || "", this.cx = 0, this.cy = 0, this._radiusAxis = new Lf, this._angleAxis = new Of, this
			._radiusAxis.polar = this._angleAxis.polar = this
	};
	DM.prototype = {
		type: "polar",
		axisPointerEnabled: !0,
		constructor: DM,
		dimensions: ["radius", "angle"],
		model: null,
		containPoint: function(t) {
			var e = this.pointToCoord(t);
			return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
		},
		containData: function(t) {
			return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
		},
		getAxis: function(t) {
			return this["_" + t + "Axis"]
		},
		getAxes: function() {
			return [this._radiusAxis, this._angleAxis]
		},
		getAxesByScale: function(t) {
			var e = [],
				n = this._angleAxis,
				i = this._radiusAxis;
			return n.scale.type === t && e.push(n), i.scale.type === t && e.push(i), e
		},
		getAngleAxis: function() {
			return this._angleAxis
		},
		getRadiusAxis: function() {
			return this._radiusAxis
		},
		getOtherAxis: function(t) {
			var e = this._angleAxis;
			return t === e ? this._radiusAxis : e
		},
		getBaseAxis: function() {
			return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this
			.getAngleAxis()
		},
		getTooltipAxes: function(t) {
			var e = null != t && "auto" !== t ? this.getAxis(t) : this.getBaseAxis();
			return {
				baseAxes: [e],
				otherAxes: [this.getOtherAxis(e)]
			}
		},
		dataToPoint: function(t, e) {
			return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[
				1], e)])
		},
		pointToData: function(t, e) {
			var n = this.pointToCoord(t);
			return [this._radiusAxis.radiusToData(n[0], e), this._angleAxis.angleToData(n[1], e)]
		},
		pointToCoord: function(t) {
			var e = t[0] - this.cx,
				n = t[1] - this.cy,
				i = this.getAngleAxis(),
				r = i.getExtent(),
				a = Math.min(r[0], r[1]),
				o = Math.max(r[0], r[1]);
			i.inverse ? a = o - 360 : o = a + 360;
			var s = Math.sqrt(e * e + n * n);
			e /= s, n /= s;
			for (var l = Math.atan2(-n, e) / Math.PI * 180, u = a > l ? 1 : -1; a > l || l > o;) l += 360 *
				u;
			return [s, l]
		},
		coordToPoint: function(t) {
			var e = t[0],
				n = t[1] / 180 * Math.PI,
				i = Math.cos(n) * e + this.cx,
				r = -Math.sin(n) * e + this.cy;
			return [i, r]
		}
	};
	var AM = n_.extend({
		type: "polarAxis",
		axis: null,
		getCoordSysModel: function() {
			return this.ecModel.queryComponents({
				mainType: "polar",
				index: this.option.polarIndex,
				id: this.option.polarId
			})[0]
		}
	});
	r(AM.prototype, Uw);
	var kM = {
		angle: {
			startAngle: 90,
			clockwise: !0,
			splitNumber: 12,
			axisLabel: {
				rotate: !1
			}
		},
		radius: {
			splitNumber: 5
		}
	};
	fb("angle", AM, zf, kM.angle), fb("radius", AM, zf, kM.radius), Ol({
		type: "polar",
		dependencies: ["polarAxis", "angleAxis"],
		coordinateSystem: null,
		findAxisModel: function(t) {
			var e, n = this.ecModel;
			return n.eachComponent(t, function(t) {
				t.getCoordSysModel() === this && (e = t)
			}, this), e
		},
		defaultOption: {
			zlevel: 0,
			z: 0,
			center: ["50%", "50%"],
			radius: "80%"
		}
	});
	var PM = {
		dimensions: DM.prototype.dimensions,
		create: function(t, e) {
			var n = [];
			return t.eachComponent("polar", function(t, i) {
				var r = new DM(i);
				r.update = Ef;
				var a = r.getRadiusAxis(),
					o = r.getAngleAxis(),
					s = t.findAxisModel("radiusAxis"),
					l = t.findAxisModel("angleAxis");
				Bf(a, s), Bf(o, l), Rf(r, t, e), n.push(r), t.coordinateSystem = r, r.model = t
			}), t.eachSeries(function(e) {
				if ("polar" === e.get("coordinateSystem")) {
					var n = t.queryComponents({
						mainType: "polar",
						index: e.get("polarIndex"),
						id: e.get("polarId")
					})[0];
					e.coordinateSystem = n.coordinateSystem
				}
			}), n
		}
	};
	Vo.register("polar", PM);
	var LM = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
	Pb.extend({
		type: "angleAxis",
		axisPointerClass: "PolarAxisPointer",
		render: function(t) {
			if (this.group.removeAll(), t.get("show")) {
				var e = t.axis,
					n = e.polar,
					r = n.getRadiusAxis().getExtent(),
					a = e.getTicksCoords(),
					o = p(e.getViewLabels(), function(t) {
						var t = i(t);
						return t.coord = e.dataToCoord(t.tickValue), t
					});
				Vf(o), Vf(a), f(LM, function(i) {
					!t.get(i + ".show") || e.scale.isBlank() && "axisLine" !== i || this["_" +
						i](t, n, a, r, o)
				}, this)
			}
		},
		_axisLine: function(t, e, n, i) {
			var r = t.getModel("axisLine.lineStyle"),
				a = new oy({
					shape: {
						cx: e.cx,
						cy: e.cy,
						r: i[Ff(e)]
					},
					style: r.getLineStyle(),
					z2: 1,
					silent: !0
				});
			a.style.fill = null, this.group.add(a)
		},
		_axisTick: function(t, e, n, i) {
			var r = t.getModel("axisTick"),
				a = (r.get("inside") ? -1 : 1) * r.get("length"),
				o = i[Ff(e)],
				l = p(n, function(t) {
					return new my({
						shape: Nf(e, [o, o + a], t.coord)
					})
				});
			this.group.add(Ay(l, {
				style: s(r.getModel("lineStyle").getLineStyle(), {
					stroke: t.get("axisLine.lineStyle.color")
				})
			}))
		},
		_axisLabel: function(t, e, n, i, r) {
			var a = t.getCategories(!0),
				o = t.getModel("axisLabel"),
				s = o.get("margin");
			f(r, function(n) {
				var r = o,
					l = n.tickValue,
					u = i[Ff(e)],
					h = e.coordToPoint([u + s, n.coord]),
					c = e.cx,
					d = e.cy,
					f = Math.abs(h[0] - c) / u < .3 ? "center" : h[0] > c ? "left" : "right",
					p = Math.abs(h[1] - d) / u < .3 ? "middle" : h[1] > d ? "top" : "bottom";
				a && a[l] && a[l].textStyle && (r = new Pa(a[l].textStyle, o, o.ecModel));
				var g = new ay({
					silent: !0
				});
				this.group.add(g), da(g.style, r, {
					x: h[0],
					y: h[1],
					textFill: r.getTextColor() || t.get("axisLine.lineStyle.color"),
					text: n.formattedLabel,
					textAlign: f,
					textVerticalAlign: p
				})
			}, this)
		},
		_splitLine: function(t, e, n, i) {
			var r = t.getModel("splitLine"),
				a = r.getModel("lineStyle"),
				o = a.get("color"),
				l = 0;
			o = o instanceof Array ? o : [o];
			for (var u = [], h = 0; h < n.length; h++) {
				var c = l++ % o.length;
				u[c] = u[c] || [], u[c].push(new my({
					shape: Nf(e, i, n[h].coord)
				}))
			}
			for (var h = 0; h < u.length; h++) this.group.add(Ay(u[h], {
				style: s({
					stroke: o[h % o.length]
				}, a.getLineStyle()),
				silent: !0,
				z: t.get("z")
			}))
		},
		_splitArea: function(t, e, n, i) {
			if (n.length) {
				var r = t.getModel("splitArea"),
					a = r.getModel("areaStyle"),
					o = a.get("color"),
					l = 0;
				o = o instanceof Array ? o : [o];
				for (var u = [], h = Math.PI / 180, c = -n[0].coord * h, d = Math.min(i[0], i[1]), f =
						Math.max(i[0], i[1]), p = t.get("clockwise"), g = 1; g < n.length; g++) {
					var m = l++ % o.length;
					u[m] = u[m] || [], u[m].push(new uy({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: d,
							r: f,
							startAngle: c,
							endAngle: -n[g].coord * h,
							clockwise: p
						},
						silent: !0
					})), c = -n[g].coord * h
				}
				for (var g = 0; g < u.length; g++) this.group.add(Ay(u[g], {
					style: s({
						fill: o[g % o.length]
					}, a.getAreaStyle()),
					silent: !0
				}))
			}
		}
	});
	var OM = ["axisLine", "axisTickLabel", "axisName"],
		zM = ["splitLine", "splitArea"];
	Pb.extend({
		type: "radiusAxis",
		axisPointerClass: "PolarAxisPointer",
		render: function(t) {
			if (this.group.removeAll(), t.get("show")) {
				var e = t.axis,
					n = e.polar,
					i = n.getAngleAxis(),
					r = e.getTicksCoords(),
					a = i.getExtent()[0],
					o = e.getExtent(),
					s = Gf(n, t, a),
					l = new Tb(t, s);
				f(OM, l.add, l), this.group.add(l.getGroup()), f(zM, function(i) {
					t.get(i + ".show") && !e.scale.isBlank() && this["_" + i](t, n, a, o, r)
				}, this)
			}
		},
		_splitLine: function(t, e, n, i, r) {
			var a = t.getModel("splitLine"),
				o = a.getModel("lineStyle"),
				l = o.get("color"),
				u = 0;
			l = l instanceof Array ? l : [l];
			for (var h = [], c = 0; c < r.length; c++) {
				var d = u++ % l.length;
				h[d] = h[d] || [], h[d].push(new oy({
					shape: {
						cx: e.cx,
						cy: e.cy,
						r: r[c].coord
					},
					silent: !0
				}))
			}
			for (var c = 0; c < h.length; c++) this.group.add(Ay(h[c], {
				style: s({
					stroke: l[c % l.length],
					fill: null
				}, o.getLineStyle()),
				silent: !0
			}))
		},
		_splitArea: function(t, e, n, i, r) {
			if (r.length) {
				var a = t.getModel("splitArea"),
					o = a.getModel("areaStyle"),
					l = o.get("color"),
					u = 0;
				l = l instanceof Array ? l : [l];
				for (var h = [], c = r[0].coord, d = 1; d < r.length; d++) {
					var f = u++ % l.length;
					h[f] = h[f] || [], h[f].push(new uy({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: c,
							r: r[d].coord,
							startAngle: 0,
							endAngle: 2 * Math.PI
						},
						silent: !0
					})), c = r[d].coord
				}
				for (var d = 0; d < h.length; d++) this.group.add(Ay(h[d], {
					style: s({
						fill: l[d % l.length]
					}, o.getAreaStyle()),
					silent: !0
				}))
			}
		}
	});
	var RM = function(t, e) {
			var n, i = [],
				r = t.seriesIndex;
			if (null == r || !(n = e.getSeriesByIndex(r))) return {
				point: []
			};
			var a = n.getData(),
				o = Vi(a, t);
			if (null == o || 0 > o || x(o)) return {
				point: []
			};
			var s = a.getItemGraphicEl(o),
				l = n.coordinateSystem;
			if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];
			else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function(t) {
				return a.mapDimension(t)
			}), o, !0)) || [];
			else if (s) {
				var u = s.getBoundingRect().clone();
				u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2]
			}
			return {
				point: i,
				el: s
			}
		},
		EM = f,
		BM = _,
		NM = Gi(),
		FM = function(t, e, n) {
			var i = t.currTrigger,
				r = [t.x, t.y],
				a = t,
				o = t.dispatchAction || y(n.dispatchAction, n),
				s = e.getComponent("axisPointer").coordSysAxesInfo;
			if (s) {
				$f(r) && (r = RM({
					seriesIndex: a.seriesIndex,
					dataIndex: a.dataIndex
				}, e).point);
				var l = $f(r),
					u = a.axesInfo,
					h = s.axesInfo,
					c = "leave" === i || $f(r),
					d = {},
					f = {},
					p = {
						list: [],
						map: {}
					},
					g = {
						showPointer: BM(Uf, f),
						showTooltip: BM(Xf, p)
					};
				EM(s.coordSysMap, function(t, e) {
					var n = l || t.containPoint(r);
					EM(s.coordSysAxesInfo[e], function(t) {
						var e = t.axis,
							i = Yf(u, t);
						if (!c && n && (!u || i)) {
							var a = i && i.value;
							null != a || l || (a = e.pointToData(r)), null != a && Hf(t, a, g, !1,
								d)
						}
					})
				});
				var m = {};
				return EM(h, function(t, e) {
					var n = t.linkGroup;
					n && !f[e] && EM(n.axesInfo, function(e, i) {
						var r = f[i];
						if (e !== t && r) {
							var a = r.value;
							n.mapper && (a = t.axis.scale.parse(n.mapper(a, Kf(e), Kf(t)))), m[t
								.key] = a
						}
					})
				}), EM(m, function(t, e) {
					Hf(h[e], t, g, !0, d)
				}), Zf(f, h, d), qf(p, r, t, o), jf(h, o, n), d
			}
		},
		VM = (Ol({
			type: "axisPointer",
			coordSysAxesInfo: null,
			defaultOption: {
				show: "auto",
				triggerOn: null,
				zlevel: 0,
				z: 50,
				type: "line",
				snap: !1,
				triggerTooltip: !0,
				value: null,
				status: null,
				link: [],
				animation: null,
				animationDurationUpdate: 200,
				lineStyle: {
					color: "#aaa",
					width: 1,
					type: "solid"
				},
				shadowStyle: {
					color: "rgba(150,150,150,0.3)"
				},
				label: {
					show: !0,
					formatter: null,
					precision: "auto",
					margin: 3,
					color: "#fff",
					padding: [5, 7, 5, 7],
					backgroundColor: "auto",
					borderColor: null,
					borderWidth: 0,
					shadowBlur: 3,
					shadowColor: "#aaa"
				},
				handle: {
					show: !1,
					icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
					size: 45,
					margin: 50,
					color: "#333",
					shadowBlur: 3,
					shadowColor: "#aaa",
					shadowOffsetX: 0,
					shadowOffsetY: 2,
					throttle: 40
				}
			}
		}), Gi()),
		GM = f,
		HM = zl({
			type: "axisPointer",
			render: function(t, e, n) {
				var i = e.getComponent("tooltip"),
					r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
				Jf("axisPointer", n, function(t, e, n) {
					"none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
						type: "updateAxisPointer",
						currTrigger: t,
						x: e && e.offsetX,
						y: e && e.offsetY
					})
				})
			},
			remove: function(t, e) {
				rp(e.getZr(), "axisPointer"), HM.superApply(this._model, "remove", arguments)
			},
			dispose: function(t, e) {
				rp("axisPointer", e), HM.superApply(this._model, "dispose", arguments)
			}
		}),
		WM = Gi(),
		UM = i,
		XM = y;
	ap.prototype = {
		_group: null,
		_lastGraphicKey: null,
		_handle: null,
		_dragging: !1,
		_lastValue: null,
		_lastStatus: null,
		_payloadInfo: null,
		animationThreshold: 15,
		render: function(t, e, n, i) {
			var r = e.get("value"),
				a = e.get("status");
			if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !==
				r || this._lastStatus !== a) {
				this._lastValue = r, this._lastStatus = a;
				var o = this._group,
					s = this._handle;
				if (!a || "hide" === a) return o && o.hide(), void(s && s.hide());
				o && o.show(), s && s.show();
				var l = {};
				this.makeElOption(l, r, t, e, n);
				var u = l.graphicKey;
				u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
				var h = this._moveAnimation = this.determineAnimation(t, e);
				if (o) {
					var c = _(op, e, h);
					this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e)
				} else o = this._group = new qg, this.createPointerEl(o, l, t, e), this.createLabelEl(o, l,
					t, e), n.getZr().add(o);
				hp(o, e, !0), this._renderHandle(r)
			}
		},
		remove: function(t) {
			this.clear(t)
		},
		dispose: function(t) {
			this.clear(t)
		},
		determineAnimation: function(t, e) {
			var n = e.get("animation"),
				i = t.axis,
				r = "category" === i.type,
				a = e.get("snap");
			if (!a && !r) return !1;
			if ("auto" === n || null == n) {
				var o = this.animationThreshold;
				if (r && i.getBandWidth() > o) return !0;
				if (a) {
					var s = Kh(t).seriesDataCount,
						l = i.getExtent();
					return Math.abs(l[0] - l[1]) / s > o
				}
				return !1
			}
			return n === !0
		},
		makeElOption: function() {},
		createPointerEl: function(t, e) {
			var n = e.pointer;
			if (n) {
				var i = WM(t).pointerEl = new ky[n.type](UM(e.pointer));
				t.add(i)
			}
		},
		createLabelEl: function(t, e, n, i) {
			if (e.label) {
				var r = WM(t).labelEl = new gy(UM(e.label));
				t.add(r), lp(r, i)
			}
		},
		updatePointerEl: function(t, e, n) {
			var i = WM(t).pointerEl;
			i && (i.setStyle(e.pointer.style), n(i, {
				shape: e.pointer.shape
			}))
		},
		updateLabelEl: function(t, e, n, i) {
			var r = WM(t).labelEl;
			r && (r.setStyle(e.label.style), n(r, {
				shape: e.label.shape,
				position: e.label.position
			}), lp(r, i))
		},
		_renderHandle: function(t) {
			if (!this._dragging && this.updateHandleTransform) {
				var e = this._axisPointerModel,
					n = this._api.getZr(),
					i = this._handle,
					r = e.getModel("handle"),
					a = e.get("status");
				if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void(this._handle =
				null);
				var o;
				this._handle || (o = !0, i = this._handle = ka(r.get("icon"), {
					cursor: "move",
					draggable: !0,
					onmousemove: function(t) {
						Cm(t.event)
					},
					onmousedown: XM(this._onHandleDragMove, this, 0, 0),
					drift: XM(this._onHandleDragMove, this),
					ondragend: XM(this._onHandleDragEnd, this)
				}), n.add(i)), hp(i, e, !1);
				var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur",
					"shadowOffsetX", "shadowOffsetY"
				];
				i.setStyle(r.getItemStyle(null, s));
				var l = r.get("size");
				x(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), Ls(this,
						"_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this
					._moveHandleToValue(t, o)
			}
		},
		_moveHandleToValue: function(t, e) {
			op(this._axisPointerModel, !e && this._moveAnimation, this._handle, up(this.getHandleTransform(
				t, this._axisModel, this._axisPointerModel)))
		},
		_onHandleDragMove: function(t, e) {
			var n = this._handle;
			if (n) {
				this._dragging = !0;
				var i = this.updateHandleTransform(up(n), [t, e], this._axisModel, this._axisPointerModel);
				this._payloadInfo = i, n.stopAnimation(), n.attr(up(i)), WM(n).lastProp = null, this
					._doDispatchAxisPointer()
			}
		},
		_doDispatchAxisPointer: function() {
			var t = this._handle;
			if (t) {
				var e = this._payloadInfo,
					n = this._axisModel;
				this._api.dispatchAction({
					type: "updateAxisPointer",
					x: e.cursorPoint[0],
					y: e.cursorPoint[1],
					tooltipOption: e.tooltipOption,
					axesInfo: [{
						axisDim: n.axis.dim,
						axisIndex: n.componentIndex
					}]
				})
			}
		},
		_onHandleDragEnd: function() {
			this._dragging = !1;
			var t = this._handle;
			if (t) {
				var e = this._axisPointerModel.get("value");
				this._moveHandleToValue(e), this._api.dispatchAction({
					type: "hideTip"
				})
			}
		},
		getHandleTransform: null,
		updateHandleTransform: null,
		clear: function(t) {
			this._lastValue = null, this._lastStatus = null;
			var e = t.getZr(),
				n = this._group,
				i = this._handle;
			e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null,
				this._handle = null, this._payloadInfo = null)
		},
		doClear: function() {},
		buildLabel: function(t, e, n) {
			return n = n || 0, {
				x: t[n],
				y: t[1 - n],
				width: e[n],
				height: e[1 - n]
			}
		}
	}, ap.prototype.constructor = ap, ji(ap);
	var ZM = ap.extend({
			makeElOption: function(t, e, n, i, r) {
				var a = n.axis,
					o = a.grid,
					s = i.get("type"),
					l = xp(o, a).getOtherAxis(a).getGlobalExtent(),
					u = a.toGlobalCoord(a.dataToCoord(e, !0));
				if (s && "none" !== s) {
					var h = cp(i),
						c = qM[s](a, u, l, h);
					c.style = h, t.graphicKey = c.type, t.pointer = c
				}
				var d = nc(o.model, n);
				mp(e, t, d, n, i, r)
			},
			getHandleTransform: function(t, e, n) {
				var i = nc(e.axis.grid.model, e, {
					labelInside: !1
				});
				return i.labelMargin = n.get("handle.margin"), {
					position: gp(e.axis, t, i),
					rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
				}
			},
			updateHandleTransform: function(t, e, n) {
				var i = n.axis,
					r = i.grid,
					a = i.getGlobalExtent(!0),
					o = xp(r, i).getOtherAxis(i).getGlobalExtent(),
					s = "x" === i.dim ? 0 : 1,
					l = t.position;
				l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
				var u = (o[1] + o[0]) / 2,
					h = [u, u];
				h[s] = l[s];
				var c = [{
					verticalAlign: "middle"
				}, {
					align: "center"
				}];
				return {
					position: l,
					rotation: t.rotation,
					cursorPoint: h,
					tooltipOption: c[s]
				}
			}
		}),
		qM = {
			line: function(t, e, n, i) {
				var r = vp([e, n[0]], [e, n[1]], wp(t));
				return Yr({
					shape: r,
					style: i
				}), {
					type: "Line",
					shape: r
				}
			},
			shadow: function(t, e, n) {
				var i = Math.max(1, t.getBandWidth()),
					r = n[1] - n[0];
				return {
					type: "Rect",
					shape: yp([e - i / 2, n[0]], [i, r], wp(t))
				}
			}
		};
	Pb.registerAxisPointerClass("CartesianAxisPointer", ZM), Sl(function(t) {
		if (t) {
			(!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
			var e = t.axisPointer.link;
			e && !x(e) && (t.axisPointer.link = [e])
		}
	}), Ml(Ox.PROCESSOR.STATISTIC, function(t, e) {
		t.getComponent("axisPointer").coordSysAxesInfo = Wh(t, e)
	}), Tl({
		type: "updateAxisPointer",
		event: "updateAxisPointer",
		update: ":updateAxisPointer"
	}, FM);
	var jM = ap.extend({
			makeElOption: function(t, e, n, i, r) {
				var a = n.axis;
				"angle" === a.dim && (this.animationThreshold = Math.PI / 18);
				var o, s = a.polar,
					l = s.getOtherAxis(a),
					u = l.getExtent();
				o = a["dataTo" + lo(a.dim)](e);
				var h = i.get("type");
				if (h && "none" !== h) {
					var c = cp(i),
						d = YM[h](a, s, o, u, c);
					d.style = c, t.graphicKey = d.type, t.pointer = d
				}
				var f = i.get("label.margin"),
					p = bp(e, n, i, s, f);
				dp(t, n, i, r, p)
			}
		}),
		YM = {
			line: function(t, e, n, i) {
				return "angle" === t.dim ? {
					type: "Line",
					shape: vp(e.coordToPoint([i[0], n]), e.coordToPoint([i[1], n]))
				} : {
					type: "Circle",
					shape: {
						cx: e.cx,
						cy: e.cy,
						r: n
					}
				}
			},
			shadow: function(t, e, n, i) {
				var r = Math.max(1, t.getBandWidth()),
					a = Math.PI / 180;
				return "angle" === t.dim ? {
					type: "Sector",
					shape: _p(e.cx, e.cy, i[0], i[1], (-n - r / 2) * a, (-n + r / 2) * a)
				} : {
					type: "Sector",
					shape: _p(e.cx, e.cy, n - r / 2, n + r / 2, 0, 2 * Math.PI)
				}
			}
		};
	Pb.registerAxisPointerClass("PolarAxisPointer", jM), Al(_(kf, "bar")), zl({
		type: "polar"
	});
	var KM = n_.extend({
		type: "geo",
		coordinateSystem: null,
		layoutMode: "box",
		init: function(t) {
			n_.prototype.init.apply(this, arguments), Oi(t, "label", ["show"])
		},
		optionUpdated: function() {
			var t = this.option,
				e = this;
			t.regions = $S.getFilledRegions(t.regions, t.map, t.nameMap), this._optionModelMap = g(t
				.regions || [],
				function(t, n) {
					return n.name && t.set(n.name, new Pa(n, e)), t
				}, N()), this.updateSelectedMap(t.regions)
		},
		defaultOption: {
			zlevel: 0,
			z: 0,
			show: !0,
			left: "center",
			top: "center",
			aspectScale: .75,
			silent: !1,
			map: "",
			boundingCoords: null,
			center: null,
			zoom: 1,
			scaleLimit: null,
			label: {
				show: !1,
				color: "#000"
			},
			itemStyle: {
				borderWidth: .5,
				borderColor: "#444",
				color: "#eee"
			},
			emphasis: {
				label: {
					show: !0,
					color: "rgb(100,0,0)"
				},
				itemStyle: {
					color: "rgba(255,215,0,0.8)"
				}
			},
			regions: []
		},
		getRegionModel: function(t) {
			return this._optionModelMap.get(t) || new Pa(null, this, this.ecModel)
		},
		getFormattedLabel: function(t, e) {
			var n = this.getRegionModel(t),
				i = n.get("label." + e + ".formatter"),
				r = {
					name: t
				};
			return "function" == typeof i ? (r.status = e, i(r)) : "string" == typeof i ? i.replace(
				"{a}", null != t ? t : "") : void 0
		},
		setZoom: function(t) {
			this.option.zoom = t
		},
		setCenter: function(t) {
			this.option.center = t
		}
	});
	c(KM, aS), zl({
		type: "geo",
		init: function(t, e) {
			var n = new zd(e, !0);
			this._mapDraw = n, this.group.add(n.group)
		},
		render: function(t, e, n, i) {
			if (!i || "geoToggleSelect" !== i.type || i.from !== this.uid) {
				var r = this._mapDraw;
				t.get("show") ? r.draw(t, e, n, this, i) : this._mapDraw.group.removeAll(), this.group
					.silent = t.get("silent")
			}
		},
		dispose: function() {
			this._mapDraw && this._mapDraw.remove()
		}
	}), Sp("toggleSelected", {
		type: "geoToggleSelect",
		event: "geoselectchanged"
	}), Sp("select", {
		type: "geoSelect",
		event: "geoselected"
	}), Sp("unSelect", {
		type: "geoUnSelect",
		event: "geounselected"
	}), Ol({
		type: "title",
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		defaultOption: {
			zlevel: 0,
			z: 6,
			show: !0,
			text: "",
			target: "blank",
			subtext: "",
			subtarget: "blank",
			left: 0,
			top: 0,
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			textStyle: {
				fontSize: 18,
				fontWeight: "bolder",
				color: "#333"
			},
			subtextStyle: {
				color: "#aaa"
			}
		}
	}), zl({
		type: "title",
		render: function(t, e, n) {
			if (this.group.removeAll(), t.get("show")) {
				var i = this.group,
					r = t.getModel("textStyle"),
					a = t.getModel("subtextStyle"),
					o = t.get("textAlign"),
					s = t.get("textBaseline"),
					l = new ay({
						style: da({}, r, {
							text: t.get("text"),
							textFill: r.getTextColor()
						}, {
							disableBox: !0
						}),
						z2: 10
					}),
					u = l.getBoundingRect(),
					h = t.get("subtext"),
					c = new ay({
						style: da({}, a, {
							text: h,
							textFill: a.getTextColor(),
							y: u.height + t.get("itemGap"),
							textVerticalAlign: "top"
						}, {
							disableBox: !0
						}),
						z2: 10
					}),
					d = t.get("link"),
					f = t.get("sublink");
				l.silent = !d, c.silent = !f, d && l.on("click", function() {
					window.open(d, "_" + t.get("target"))
				}), f && c.on("click", function() {
					window.open(f, "_" + t.get("subtarget"))
				}), i.add(l), h && i.add(c);
				var p = i.getBoundingRect(),
					g = t.getBoxLayoutParams();
				g.width = p.width, g.height = p.height;
				var m = ho(g, {
					width: n.getWidth(),
					height: n.getHeight()
				}, t.get("padding"));
				o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" ===
						o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), s || (s = t.get(
							"top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" ===
						s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"),
					i.attr("position", [m.x, m.y]);
				var v = {
					textAlign: o,
					textVerticalAlign: s
				};
				l.setStyle(v), c.setStyle(v), p = i.getBoundingRect();
				var y = m.margin,
					_ = t.getItemStyle(["color", "opacity"]);
				_.fill = t.get("backgroundColor");
				var x = new gy({
					shape: {
						x: p.x - y[3],
						y: p.y - y[0],
						width: p.width + y[1] + y[3],
						height: p.height + y[0] + y[2],
						r: t.get("borderRadius")
					},
					style: _,
					silent: !0
				});
				Kr(x), i.add(x)
			}
		}
	});
	var $M = Ol({
		type: "legend.plain",
		dependencies: ["series"],
		layoutMode: {
			type: "box",
			ignoreSize: !0
		},
		init: function(t, e, n) {
			this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
		},
		mergeOption: function(t) {
			$M.superCall(this, "mergeOption", t)
		},
		optionUpdated: function() {
			this._updateData(this.ecModel);
			var t = this._data;
			if (t[0] && "single" === this.get("selectedMode")) {
				for (var e = !1, n = 0; n < t.length; n++) {
					var i = t[n].get("name");
					if (this.isSelected(i)) {
						this.select(i), e = !0;
						break
					}
				}!e && this.select(t[0].get("name"))
			}
		},
		_updateData: function(t) {
			var e = [],
				n = [];
			t.eachRawSeries(function(i) {
				var r = i.name;
				n.push(r);
				var a;
				if (i.legendDataProvider) {
					var o = i.legendDataProvider(),
						s = o.mapArray(o.getName);
					t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) :
						a = !0
				} else a = !0;
				a && Ni(i) && e.push(i.name)
			}), this._availableNames = n;
			var i = this.get("data") || e,
				r = p(i, function(t) {
					return ("string" == typeof t || "number" == typeof t) && (t = {
						name: t
					}), new Pa(t, this, this.ecModel)
				}, this);
			this._data = r
		},
		getData: function() {
			return this._data
		},
		select: function(t) {
			var e = this.option.selected,
				n = this.get("selectedMode");
			if ("single" === n) {
				var i = this._data;
				f(i, function(t) {
					e[t.get("name")] = !1
				})
			}
			e[t] = !0
		},
		unSelect: function(t) {
			"single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
		},
		toggleSelected: function(t) {
			var e = this.option.selected;
			e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
		},
		isSelected: function(t) {
			var e = this.option.selected;
			return !(e.hasOwnProperty(t) && !e[t]) && u(this._availableNames, t) >= 0
		},
		defaultOption: {
			zlevel: 0,
			z: 4,
			show: !0,
			orient: "horizontal",
			left: "center",
			top: 0,
			align: "auto",
			backgroundColor: "rgba(0,0,0,0)",
			borderColor: "#ccc",
			borderRadius: 0,
			borderWidth: 0,
			padding: 5,
			itemGap: 10,
			itemWidth: 25,
			itemHeight: 14,
			inactiveColor: "#ccc",
			textStyle: {
				color: "#333"
			},
			selectedMode: !0,
			tooltip: {
				show: !1
			}
		}
	});
	Tl("legendToggleSelect", "legendselectchanged", _(Mp, "toggleSelected")), Tl("legendSelect", "legendselected",
		_(Mp, "select")), Tl("legendUnSelect", "legendunselected", _(Mp, "unSelect"));
	var JM = _,
		QM = f,
		tI = qg,
		eI = zl({
			type: "legend.plain",
			newlineDisabled: !1,
			init: function() {
				this.group.add(this._contentGroup = new tI), this._backgroundEl
			},
			getContentGroup: function() {
				return this._contentGroup
			},
			render: function(t, e, n) {
				if (this.resetInner(), t.get("show", !0)) {
					var i = t.get("align");
					i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ?
						"right" : "left"), this.renderInner(i, t, e, n);
					var r = t.getBoxLayoutParams(),
						a = {
							width: n.getWidth(),
							height: n.getHeight()
						},
						o = t.get("padding"),
						l = ho(r, a, o),
						u = this.layoutInner(t, i, l),
						h = ho(s({
							width: u.width,
							height: u.height
						}, r), a, o);
					this.group.attr("position", [h.x - u.x, h.y - u.y]), this.group.add(this._backgroundEl =
						Ip(u, t))
				}
			},
			resetInner: function() {
				this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this
					._backgroundEl)
			},
			renderInner: function(t, e, n, i) {
				var r = this.getContentGroup(),
					a = N(),
					o = e.get("selectedMode"),
					s = [];
				n.eachRawSeries(function(t) {
					!t.get("legendHoverLink") && s.push(t.id)
				}), QM(e.getData(), function(l, u) {
					var h = l.get("name");
					if (!this.newlineDisabled && ("" === h || "\n" === h)) return void r.add(
				new tI({
						newline: !0
					}));
					var c = n.getSeriesByName(h)[0];
					if (!a.get(h))
						if (c) {
							var d = c.getData(),
								f = d.getVisual("color");
							"function" == typeof f && (f = f(c.getDataParams(0)));
							var p = d.getVisual("legendSymbol") || "roundRect",
								g = d.getVisual("symbol"),
								m = this._createItem(h, u, l, e, p, g, t, f, o);
							m.on("click", JM(Tp, h, i)).on("mouseover", JM(Cp, c, null, i, s)).on(
								"mouseout", JM(Dp, c, null, i, s)), a.set(h, !0)
						} else n.eachRawSeries(function(n) {
							if (!a.get(h) && n.legendDataProvider) {
								var r = n.legendDataProvider(),
									c = r.indexOfName(h);
								if (0 > c) return;
								var d = r.getItemVisual(c, "color"),
									f = "roundRect",
									p = this._createItem(h, u, l, e, f, null, t, d, o);
								p.on("click", JM(Tp, h, i)).on("mouseover", JM(Cp, n, h, i,
									s)).on("mouseout", JM(Dp, n, h, i, s)), a.set(h, !0)
							}
						}, this)
				}, this)
			},
			_createItem: function(t, e, n, i, r, a, s, l, u) {
				var h = i.get("itemWidth"),
					c = i.get("itemHeight"),
					d = i.get("inactiveColor"),
					f = i.get("symbolKeepAspect"),
					p = i.isSelected(t),
					g = new tI,
					m = n.getModel("textStyle"),
					v = n.get("icon"),
					y = n.getModel("tooltip"),
					_ = y.parentModel;
				if (r = v || r, g.add(Wu(r, 0, 0, h, c, p ? l : d, null == f ? !0 : f)), !v && a && (a !==
						r || "none" == a)) {
					var x = .8 * c;
					"none" === a && (a = "circle"), g.add(Wu(a, (h - x) / 2, (c - x) / 2, x, x, p ? l : d,
						null == f ? !0 : f))
				}
				var w = "left" === s ? h + 5 : -5,
					b = s,
					S = i.get("formatter"),
					M = t;
				"string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" ==
					typeof S && (M = S(t)), g.add(new ay({
						style: da({}, m, {
							text: M,
							x: w,
							y: c / 2,
							textFill: p ? m.getTextColor() : d,
							textAlign: b,
							textVerticalAlign: "middle"
						})
					}));
				var I = new gy({
					shape: g.getBoundingRect(),
					invisible: !0,
					tooltip: y.get("show") ? o({
						content: t,
						formatter: _.get("formatter", !0) || function() {
							return t
						},
						formatterParams: {
							componentType: "legend",
							legendIndex: i.componentIndex,
							name: t,
							$vars: ["name"]
						}
					}, y.option) : null
				});
				return g.add(I), g.eachChild(function(t) {
					t.silent = !0
				}), I.silent = !u, this.getContentGroup().add(g), ha(g), g.__legendDataIndex = e, g
			},
			layoutInner: function(t, e, n) {
				var i = this.getContentGroup();
				Qy(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
				var r = i.getBoundingRect();
				return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
			}
		}),
		nI = function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.filterSeries(function(t) {
				for (var n = 0; n < e.length; n++)
					if (!e[n].isSelected(t.name)) return !1;
				return !0
			})
		};
	Ml(nI), n_.registerSubTypeDefaulter("legend", function() {
		return "plain"
	});
	var iI = $M.extend({
			type: "legend.scroll",
			setScrollDataIndex: function(t) {
				this.option.scrollDataIndex = t
			},
			defaultOption: {
				scrollDataIndex: 0,
				pageButtonItemGap: 5,
				pageButtonGap: null,
				pageButtonPosition: "end",
				pageFormatter: "{current}/{total}",
				pageIcons: {
					horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
					vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
				},
				pageIconColor: "#2f4554",
				pageIconInactiveColor: "#aaa",
				pageIconSize: 15,
				pageTextStyle: {
					color: "#333"
				},
				animationDurationUpdate: 800
			},
			init: function(t, e, n, i) {
				var r = fo(t);
				iI.superCall(this, "init", t, e, n, i), Ap(this, t, r)
			},
			mergeOption: function(t, e) {
				iI.superCall(this, "mergeOption", t, e), Ap(this, this.option, t)
			},
			getOrient: function() {
				return "vertical" === this.get("orient") ? {
					index: 1,
					name: "vertical"
				} : {
					index: 0,
					name: "horizontal"
				}
			}
		}),
		rI = qg,
		aI = ["width", "height"],
		oI = ["x", "y"],
		sI = eI.extend({
			type: "legend.scroll",
			newlineDisabled: !0,
			init: function() {
				sI.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup =
					new rI), this._containerGroup.add(this.getContentGroup()), this.group.add(this
					._controllerGroup = new rI), this._showController
			},
			resetInner: function() {
				sI.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup
					.removeClipPath(), this._containerGroup.__rectSize = null
			},
			renderInner: function(t, e, n, i) {
				function r(t, n) {
					var r = t + "DataIndex",
						l = ka(e.get("pageIcons", !0)[e.getOrient().name][n], {
							onclick: y(a._pageGo, a, r, e, i)
						}, {
							x: -s[0] / 2,
							y: -s[1] / 2,
							width: s[0],
							height: s[1]
						});
					l.name = t, o.add(l)
				}
				var a = this;
				sI.superCall(this, "renderInner", t, e, n, i);
				var o = this._controllerGroup,
					s = e.get("pageIconSize", !0);
				x(s) || (s = [s, s]), r("pagePrev", 0);
				var l = e.getModel("pageTextStyle");
				o.add(new ay({
					name: "pageText",
					style: {
						textFill: l.getTextColor(),
						font: l.getFont(),
						textVerticalAlign: "middle",
						textAlign: "center"
					},
					silent: !0
				})), r("pageNext", 1)
			},
			layoutInner: function(t, e, n) {
				var i = this.getContentGroup(),
					r = this._containerGroup,
					a = this._controllerGroup,
					o = t.getOrient().index,
					s = aI[o],
					l = aI[1 - o],
					u = oI[1 - o];
				Qy(t.get("orient"), i, t.get("itemGap"), o ? n.width : null, o ? null : n.height), Qy(
					"horizontal", a, t.get("pageButtonItemGap", !0));
				var h = i.getBoundingRect(),
					c = a.getBoundingRect(),
					d = this._showController = h[s] > n[s],
					f = [-h.x, -h.y];
				f[o] = i.position[o];
				var p = [0, 0],
					g = [-c.x, -c.y],
					m = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));
				if (d) {
					var v = t.get("pageButtonPosition", !0);
					"end" === v ? g[o] += n[s] - c[s] : p[o] += c[s] + m
				}
				g[1 - o] += h[l] / 2 - c[l] / 2, i.attr("position", f), r.attr("position", p), a.attr(
					"position", g);
				var y = this.group.getBoundingRect(),
					y = {
						x: 0,
						y: 0
					};
				if (y[s] = d ? n[s] : h[s], y[l] = Math.max(h[l], c[l]), y[u] = Math.min(0, c[u] + g[1 -
					o]), r.__rectSize = n[s], d) {
					var _ = {
						x: 0,
						y: 0
					};
					_[s] = Math.max(n[s] - c[s] - m, 0), _[l] = y[l], r.setClipPath(new gy({
						shape: _
					})), r.__rectSize = _[s]
				} else a.eachChild(function(t) {
					t.attr({
						invisible: !0,
						silent: !0
					})
				});
				var x = this._getPageInfo(t);
				return null != x.pageIndex && ba(i, {
					position: x.contentPosition
				}, d ? t : !1), this._updatePageInfoView(t, x), y
			},
			_pageGo: function(t, e, n) {
				var i = this._getPageInfo(e)[t];
				null != i && n.dispatchAction({
					type: "legendScroll",
					scrollDataIndex: i,
					legendId: e.id
				})
			},
			_updatePageInfoView: function(t, e) {
				var n = this._controllerGroup;
				f(["pagePrev", "pageNext"], function(i) {
					var r = null != e[i + "DataIndex"],
						a = n.childOfName(i);
					a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get(
						"pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default")
				});
				var i = n.childOfName("pageText"),
					r = t.get("pageFormatter"),
					a = e.pageIndex,
					o = null != a ? a + 1 : 0,
					s = e.pageCount;
				i && r && i.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({
					current: o,
					total: s
				}))
			},
			_getPageInfo: function(t) {
				function e(t) {
					var e = t.getBoundingRect().clone();
					return e[f] += t.position[h], e
				}
				var n, i, r, a, o = t.get("scrollDataIndex", !0),
					s = this.getContentGroup(),
					l = s.getBoundingRect(),
					u = this._containerGroup.__rectSize,
					h = t.getOrient().index,
					c = aI[h],
					d = aI[1 - h],
					f = oI[h],
					p = s.position.slice();
				this._showController ? s.eachChild(function(t) {
					t.__legendDataIndex === o && (a = t)
				}) : a = s.childAt(0);
				var g = u ? Math.ceil(l[c] / u) : 0;
				if (a) {
					var m = a.getBoundingRect(),
						v = a.position[h] + m[f];
					p[h] = -v - l[f], n = Math.floor(g * (v + m[f] + u / 2) / l[c]), n = l[c] && g ? Math
						.max(0, Math.min(g - 1, n)) : -1;
					var y = {
						x: 0,
						y: 0
					};
					y[c] = u, y[d] = l[d], y[f] = -p[h] - l[f];
					var _, x = s.children();
					if (s.eachChild(function(t, n) {
							var i = e(t);
							i.intersect(y) && (null == _ && (_ = n), r = t.__legendDataIndex), n === x
								.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null)
						}), null != _) {
						var w = x[_],
							b = e(w);
						if (y[f] = b[f] + b[c] - y[c], 0 >= _ && b[f] >= y[f]) i = null;
						else {
							for (; _ > 0 && e(x[_ - 1]).intersect(y);) _--;
							i = x[_].__legendDataIndex
						}
					}
				}
				return {
					contentPosition: p,
					pageIndex: n,
					pageCount: g,
					pagePrevDataIndex: i,
					pageNextDataIndex: r
				}
			}
		});
	Tl("legendScroll", "legendscroll", function(t, e) {
		var n = t.scrollDataIndex;
		null != n && e.eachComponent({
			mainType: "legend",
			subType: "scroll",
			query: t
		}, function(t) {
			t.setScrollDataIndex(n)
		})
	}), Ol({
		type: "tooltip",
		dependencies: ["axisPointer"],
		defaultOption: {
			zlevel: 0,
			z: 8,
			show: !0,
			showContent: !0,
			trigger: "item",
			triggerOn: "mousemove|click",
			alwaysShowContent: !1,
			displayMode: "single",
			confine: !1,
			showDelay: 0,
			hideDelay: 100,
			transitionDuration: .4,
			enterable: !1,
			backgroundColor: "rgba(50,50,50,0.7)",
			borderColor: "#333",
			borderRadius: 4,
			borderWidth: 0,
			padding: 5,
			extraCssText: "",
			axisPointer: {
				type: "line",
				axis: "auto",
				animation: "auto",
				animationDurationUpdate: 200,
				animationEasingUpdate: "exponentialOut",
				crossStyle: {
					color: "#999",
					width: 1,
					type: "dashed",
					textStyle: {}
				}
			},
			textStyle: {
				color: "#fff",
				fontSize: 14
			}
		}
	});
	var lI = f,
		uI = eo,
		hI = ["", "-webkit-", "-moz-", "-o-"],
		cI = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
	Op.prototype = {
		constructor: Op,
		_enterable: !0,
		update: function() {
			var t = this._container,
				e = t.currentStyle || document.defaultView.getComputedStyle(t),
				n = t.style;
			"absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
		},
		show: function(t) {
			clearTimeout(this._hideTimeout);
			var e = this.el;
			e.style.cssText = cI + Lp(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get(
					"extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !
				0
		},
		setContent: function(t) {
			this.el.innerHTML = null == t ? "" : t
		},
		setEnterable: function(t) {
			this._enterable = t
		},
		getSize: function() {
			var t = this.el;
			return [t.clientWidth, t.clientHeight]
		},
		moveTo: function(t, e) {
			var n, i = this._zr;
			i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n
				.offsetTop);
			var r = this.el.style;
			r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
		},
		hide: function() {
			this.el.style.display = "none", this._show = !1
		},
		hideLater: function(t) {
			!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1,
				this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
		},
		isShow: function() {
			return this._show
		}
	};
	var dI = y,
		fI = f,
		pI = Fa,
		gI = new gy({
			shape: {
				x: -1,
				y: -1,
				width: 2,
				height: 2
			}
		});
	zl({
			type: "tooltip",
			init: function(t, e) {
				if (!Up.node) {
					var n = new Op(e.getDom(), e);
					this._tooltipContent = n
				}
			},
			render: function(t, e, n) {
				if (!Up.node && !Up.wxa) {
					this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this
						._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
					var i = this._tooltipContent;
					i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this
						._keepShow()
				}
			},
			_initGlobalListener: function() {
				var t = this._tooltipModel,
					e = t.get("triggerOn");
				Jf("itemTooltip", this._api, dI(function(t, n, i) {
					"none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t &&
						this._hide(i))
				}, this))
			},
			_keepShow: function() {
				var t = this._tooltipModel,
					e = this._ecModel,
					n = this._api;
				if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
					var i = this;
					clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(
						function() {
							i.manuallyShowTip(t, e, n, {
								x: i._lastX,
								y: i._lastY
							})
						})
				}
			},
			manuallyShowTip: function(t, e, n, i) {
				if (i.from !== this.uid && !Up.node) {
					var r = Rp(i, n);
					this._ticket = "";
					var a = i.dataByCoordSys;
					if (i.tooltip && null != i.x && null != i.y) {
						var o = gI;
						o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({
							offsetX: i.x,
							offsetY: i.y,
							target: o
						}, r)
					} else if (a) this._tryShow({
						offsetX: i.x,
						offsetY: i.y,
						position: i.position,
						event: {},
						dataByCoordSys: i.dataByCoordSys,
						tooltipOption: i.tooltipOption
					}, r);
					else if (null != i.seriesIndex) {
						if (this._manuallyAxisShowTip(t, e, n, i)) return;
						var s = RM(i, e),
							l = s.point[0],
							u = s.point[1];
						null != l && null != u && this._tryShow({
							offsetX: l,
							offsetY: u,
							position: i.position,
							target: s.el,
							event: {}
						}, r)
					} else null != i.x && null != i.y && (n.dispatchAction({
						type: "updateAxisPointer",
						x: i.x,
						y: i.y
					}), this._tryShow({
						offsetX: i.x,
						offsetY: i.y,
						position: i.position,
						target: n.getZr().findHover(i.x, i.y).target,
						event: {}
					}, r))
				}
			},
			manuallyHideTip: function(t, e, n, i) {
				var r = this._tooltipContent;
				!this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get(
					"hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(
					Rp(i, n))
			},
			_manuallyAxisShowTip: function(t, e, n, i) {
				var r = i.seriesIndex,
					a = i.dataIndex,
					o = e.getComponent("axisPointer").coordSysAxesInfo;
				if (null != r && null != a && null != o) {
					var s = e.getSeriesByIndex(r);
					if (s) {
						var l = s.getData(),
							t = zp([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
						if ("axis" === t.get("trigger")) return n.dispatchAction({
							type: "updateAxisPointer",
							seriesIndex: r,
							dataIndex: a,
							position: i.position
						}), !0
					}
				}
			},
			_tryShow: function(t, e) {
				var n = t.target,
					i = this._tooltipModel;
				if (i) {
					this._lastX = t.offsetX, this._lastY = t.offsetY;
					var r = t.dataByCoordSys;
					r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this
							._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n
						.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n,
							e)) : (this._lastDataByCoordSys = null, this._hide(e))
				}
			},
			_showOrMove: function(t, e) {
				var n = t.get("showDelay");
				e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e,
					n) : e()
			},
			_showAxisTooltip: function(t, e) {
				var n = this._ecModel,
					i = this._tooltipModel,
					r = [e.offsetX, e.offsetY],
					a = [],
					o = [],
					s = zp([e.tooltipOption, i]);
				fI(t, function(t) {
					fI(t.dataByAxis, function(t) {
						var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
							i = t.value,
							r = [];
						if (e && null != i) {
							var s = pp(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
							f(t.seriesDataIndices, function(a) {
								var l = n.getSeriesByIndex(a.seriesIndex),
									u = a.dataIndexInside,
									h = l && l.getDataParams(u);
								h.axisDim = t.axisDim, h.axisIndex = t.axisIndex, h
									.axisType = t.axisType, h.axisId = t.axisId, h
									.axisValue = Fu(e.axis, i), h.axisValueLabel =
									s, h && (o.push(h), r.push(l.formatTooltip(u, !
										0)))
							});
							var l = s;
							a.push((l ? no(l) + "<br />" : "") + r.join("<br />"))
						}
					})
				}, this), a.reverse(), a = a.join("<br /><br />");
				var l = e.position;
				this._showOrMove(s, function() {
					this._updateContentNotChangedOnAxis(t) ? this._updatePosition(s, l, r[0], r[1],
						this._tooltipContent, o) : this._showTooltipContent(s, a, o, Math
						.random(), r[0], r[1], l)
				})
			},
			_showSeriesItemTooltip: function(t, e, n) {
				var i = this._ecModel,
					r = e.seriesIndex,
					a = i.getSeriesByIndex(r),
					o = e.dataModel || a,
					s = e.dataIndex,
					l = e.dataType,
					u = o.getData(),
					h = zp([u.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this
						._tooltipModel]),
					c = h.get("trigger");
				if (null == c || "item" === c) {
					var d = o.getDataParams(s, l),
						f = o.formatTooltip(s, !1, l),
						p = "item_" + o.name + "_" + s;
					this._showOrMove(h, function() {
						this._showTooltipContent(h, f, d, p, t.offsetX, t.offsetY, t.position, t
							.target)
					}), n({
						type: "showTip",
						dataIndexInside: s,
						dataIndex: u.getRawIndex(s),
						seriesIndex: r,
						from: this.uid
					})
				}
			},
			_showComponentItemTooltip: function(t, e, n) {
				var i = e.tooltip;
				if ("string" == typeof i) {
					var r = i;
					i = {
						content: r,
						formatter: r
					}
				}
				var a = new Pa(i, this._tooltipModel, this._ecModel),
					o = a.get("content"),
					s = Math.random();
				this._showOrMove(a, function() {
					this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t
						.offsetY, t.position, e)
				}), n({
					type: "showTip",
					from: this.uid
				})
			},
			_showTooltipContent: function(t, e, n, i, r, a, o, s) {
				if (this._ticket = "", t.get("showContent") && t.get("show")) {
					var l = this._tooltipContent,
						u = t.get("formatter");
					o = o || t.get("position");
					var h = e;
					if (u && "string" == typeof u) h = io(u, n, !0);
					else if ("function" == typeof u) {
						var c = dI(function(e, i) {
							e === this._ticket && (l.setContent(i), this._updatePosition(t, o, r, a,
								l, n, s))
						}, this);
						this._ticket = i, h = u(n, i, c)
					}
					l.setContent(h), l.show(t), this._updatePosition(t, o, r, a, l, n, s)
				}
			},
			_updatePosition: function(t, e, n, i, r, a, o) {
				var s = this._api.getWidth(),
					l = this._api.getHeight();
				e = e || t.get("position");
				var u = r.getSize(),
					h = t.get("align"),
					c = t.get("verticalAlign"),
					d = o && o.getBoundingRect().clone();
				if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el,
					d, {
						viewSize: [s, l],
						contentSize: u.slice()
					})), x(e)) n = pI(e[0], s), i = pI(e[1], l);
				else if (S(e)) {
					e.width = u[0], e.height = u[1];
					var f = ho(e, {
						width: s,
						height: l
					});
					n = f.x, i = f.y, h = null, c = null
				} else if ("string" == typeof e && o) {
					var p = Fp(e, d, u);
					n = p[0], i = p[1]
				} else {
					var p = Ep(n, i, r.el, s, l, h ? null : 20, c ? null : 20);
					n = p[0], i = p[1]
				}
				if (h && (n -= Vp(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Vp(c) ? u[1] / 2 :
						"bottom" === c ? u[1] : 0), t.get("confine")) {
					var p = Bp(n, i, r.el, s, l);
					n = p[0], i = p[1]
				}
				r.moveTo(n, i)
			},
			_updateContentNotChangedOnAxis: function(t) {
				var e = this._lastDataByCoordSys,
					n = !!e && e.length === t.length;
				return n && fI(e, function(e, i) {
					var r = e.dataByAxis || {},
						a = t[i] || {},
						o = a.dataByAxis || [];
					n &= r.length === o.length, n && fI(r, function(t, e) {
						var i = o[e] || {},
							r = t.seriesDataIndices || [],
							a = i.seriesDataIndices || [];
						n &= t.value === i.value && t.axisType === i.axisType && t
							.axisId === i.axisId && r.length === a.length, n && fI(r,
								function(t, e) {
									var i = a[e];
									n &= t.seriesIndex === i.seriesIndex && t.dataIndex ===
										i.dataIndex
								})
					})
				}), this._lastDataByCoordSys = t, !!n
			},
			_hide: function(t) {
				this._lastDataByCoordSys = null, t({
					type: "hideTip",
					from: this.uid
				})
			},
			dispose: function(t, e) {
				Up.node || Up.wxa || (this._tooltipContent.hide(), rp("itemTooltip", e))
			}
		}), Tl({
			type: "showTip",
			event: "showTip",
			update: "tooltip:manuallyShowTip"
		}, function() {}), Tl({
			type: "hideTip",
			event: "hideTip",
			update: "tooltip:manuallyHideTip"
		}, function() {}), t.version = Sx, t.dependencies = Mx, t.PRIORITY = Ox, t.init = ml, t.connect = vl, t
		.disConnect = yl, t.disconnect = tw, t.dispose = _l, t.getInstanceByDom = xl, t.getInstanceById = wl, t
		.registerTheme = bl, t.registerPreprocessor = Sl, t.registerProcessor = Ml, t.registerPostUpdate = Il, t
		.registerAction = Tl, t.registerCoordinateSystem = Cl, t.getCoordinateSystemDimensions = Dl, t
		.registerLayout = Al, t.registerVisual = kl, t.registerLoading = Ll, t.extendComponentModel = Ol, t
		.extendComponentView = zl, t.extendSeriesModel = Rl, t.extendChartView = El, t.setCanvasCreator = Bl, t
		.registerMap = Nl, t.getMap = Fl, t.dataTool = ew, t.zrender = Wm, t.graphic = ky, t.number = Gy, t.format =
		Yy, t.throttle = Ps, t.helper = tb, t.matrix = vg, t.vector = hg, t.color = zg, t.parseGeoJSON = nb, t
		.parseGeoJson = ob, t.util = sb, t.List = cw, t.Model = Pa, t.Axis = ab, t.env = Up
});