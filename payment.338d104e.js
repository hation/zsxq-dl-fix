var m = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty,
    w = Object.prototype.propertyIsEnumerable;
var u = (e, t, r) => t in e ? m(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r,
    o = (e, t) => {
        for (var r in t || (t = {})) h.call(t, r) && u(e, r, t[r]);
        if (l)
            for (var r of l(t)) w.call(t, r) && u(e, r, t[r]);
        return e
    };
import "./logger.faf93e7c.js";
const f = chrome && chrome.storage && !!chrome.storage.sync;

function g(e) {
    if (f) return new Promise((t, r) => {
        chrome.storage.sync.set(e, () => {
            chrome.runtime.lastError ? r(chrome.runtime.lastError) : t()
        })
    });
    {
        const t = window.localStorage.getItem("__storage__"),
            r = o(t ? o({}, JSON.parse(t)) : {}, e);
        return window.localStorage.setItem("__storage__", JSON.stringify(r)), Promise.resolve()
    }
}

function n(e) {
    if (f) return new Promise((t, r) => {
        chrome.storage.sync.get(e, s => {
            chrome.runtime.lastError ? r(chrome.runtime.lastError) : t(e ? s && s[e] : s)
        })
    });
    {
        const t = JSON.parse(localStorage.getItem("__storage__"));
        return Promise.resolve(e ? t && t[e] : t)
    }
}
async function y(e) {
    const t = await n(`${e}_download_history`);
    return t || {}
}
async function v(e, t) {
    await g({
        [`${e}_download_history`]: t
    })
}

function i(e, t = 2) {
    let r = e.toString();
    for (let s = 0; s < t; s++) r = "0" + r;
    return r.substring(r.length - t)
}

function S() {
    var a;
    const e = window.navigator.userAgent || "",
        t = e.indexOf("Chrome") !== -1 && e.indexOf("Safari") !== -1,
        r = t && e.indexOf("Edg") !== -1,
        s = ((a = chrome.runtime) == null ? void 0 : a.id) || "";
    return t ? `${r ? "https://microsoftedge.microsoft.com/addons/detail" : "https://chrome.google.com/webstore/detail/"}/${s}` : "https://zsxqdl.com"
}

function $(e, t) {
    t = Math.floor(t);
    let r = t < 0 ? "-" : "+",
        s = "00" + Math.abs(t);
    return s = s.substring(s.length - 2), new Date(e.getTime() + 60 * 60 * 1e3 * t).toISOString().replace("Z", `${r}${s}:00`)
}

function _(e) {
    // 始终返回有效许可证，过期时间设为未来很远的时间（2038年）
    return {
        valid: true,
        expire_at: 2147483647  // 2038-01-19 03:14:07
    }
}

function O(e) {
    if (e <= 0) return "--";
    const t = new Date(e * 1e3);
    return `${i(t.getFullYear(), 4)}-${i(t.getMonth() + 1)}-${i(t.getDate())}`
}

function D() {
    const e = "https://github.com/shiquda/zsxq-dl-fix";
    window.open(e, "_blank")
}
async function P() {
    // 直接返回有效的许可证，不进行API验证
    return {
        validated: 1,
        expire_at: 2147483647,  // 2038-01-19 03:14:07
        key: "free_license",
        urlkey: "free"
    }
}

function d(e) {
    // 直接返回有效的许可证
    return {
        validated: 1,
        expire_at: 2147483647,  // 2038-01-19 03:14:07
        key: "free_license",
        urlkey: "free"
    }
}
export {
    y as a, D as b, P as c, S as d, g as e, O as f, n as g, _ as h, v as s, $ as t
};