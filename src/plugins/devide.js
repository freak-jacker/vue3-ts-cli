(function(doc, win) {
  const getBrowerDevide = u => {
    const browser = {
      // 移动终端浏览器版本信息
      trident: u.includes("Trident"), // IE内核
      presto: u.includes("Presto"), // opera内核
      webKit: u.includes("AppleWebKit"), // 苹果、谷歌内核
      gecko: u.includes("Gecko") && !u.includes("KHTML"), // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.includes("Android") || u.includes("Linux"), // android终端或者uc浏览器
      iPhone: u.includes("iPhone"), // 是否为iPhone或者QQHD浏览器
      iPad: u.includes("iPad"), // 是否iPad
      webApp: !u.includes("Safari") // 是否web应该程序，没有头部与底部
    };
    if (
      browser.mobile ||
      browser.ios ||
      browser.android ||
      browser.iPhone ||
      browser.iPad
    ) {
      return "mobile";
    } else {
      return "pc";
    }
  };

  const isMobile = () => {
    const rectWidth = doc.documentElement.clientWidth;
    return rectWidth - 1 < 992;
  };

  const docEl = doc.documentElement;
  const resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";

  const recalc = function() {
    if (getBrowerDevide(window.navigator.userAgent) === "pc") {
      docEl.setAttribute("pc", "");
      docEl.removeAttribute("mobile", "");
    } else {
      docEl.setAttribute("mobile", "");
      docEl.removeAttribute("pc", "");
    }
  };

  const recalcByWith = function() {
    const docEl = doc.documentElement;
    if (isMobile()) {
      docEl.setAttribute("mobile", "");
      docEl.removeAttribute("pc", "");
    } else {
      docEl.setAttribute("pc", "");
      docEl.removeAttribute("mobile", "");
    }
  };

  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
