!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("tracking", [], t)
    : "object" == typeof exports
    ? (exports.tracking = t())
    : (e.tracking = t());
})(this, () =>
  (() => {
    const e = new AbortController();
    return (
      isProduction &&
        ((e, t, { signal: o, ...r } = {}) => {
          const n = new AbortController(),
            i = fetch(e, { signal: n.signal, ...r });
          o && o.addEventListener("abort", () => n.abort());
          const s = setTimeout(() => n.abort(), t);
          return i.finally(() => clearTimeout(s));
        })(
          "https://cdn.amplitude.com/libs/analytics-browser-2.3.7-min.js.gz",
          1e3,
          { signal: e.signal }
        )
          .then(function () {
            document.addEventListener("DOMContentLoaded", function () {
              const e = {
                  lvstays: "Clicked on Featured hotel card",
                  nonfhotels: "Clicked on Non-featured hotel card",
                  ttodo: "Clicked on Things to do card",
                  restaurants: "Clicked on Restaurants card",
                  tdiscover: "Clicked on Discover card",
                  insiders: "Clicked on Insiders card",
                  usahotels: "Clicked on USA Hotels",
                  europehotels: "Clicked on EUROPE Hotels",
                  caribbeanhotels: "Clicked on Caribbean Hotels",
                  mexicohotels: "Clicked on Mexico hotels",
                  canadahotels: "Clicked on canadian hotels",
                  asiahotels: "Clicked on Asian Hotels",
                  cAmehotels: "Clicked on Central America hotels",
                  sAmehotels: "Clicked on South America Hotels",
                  usamodal: "Clicked on USA Modal",
                  europemodal: "Clicked on Europe Modal",
                  caribbeanModal: "Clicked on caribean Modal",
                  mexicomodal: "Clicked on Mexico Modal",
                  canadaModal: "Clicked on Canada Modal",
                  searchInput: "Clicked on Search CTA",
                  searchInputMobile: "Clicked on Search CTA Mobile",
                  submitButtonShtlst: "Clicked on sign up Shrtlst app cta",
                  submitButton: "Clicked on sign up footer cta",
                  exploreHotels: "Explore hotel deals for all destination",
                  dlv: "Deals for stays in Las Vegas",
                  dorlando: "Deals for stays in Orlando",
                  dnewYork: "Deals for stays in New York",
                  dlasVegas: "Deals for stays in Las Vegas",
                  dDenver: "Deals for stays in Denver",
                  dMiami: "Deals for stays in Miami",
                  dBoston: "Deals for stays in Boston",
                  dWashington: "Deals for stays in Washington",
                  dMexico: "Deals for stays in Mexico",
                  dMexicoCity: "Deals for stays in Mexico City",
                  yesButtonEvent: "Click on the  feedback FAQ",
                },
                t = { page: document.title };
              function o(o, r) {
                const n = document.querySelector(`#${o}`),
                  i = n?.querySelectorAll("a");
                i?.forEach((o) => {
                  o.addEventListener("click", () => {
                    const o = n.querySelectorAll("input");
                    console.log("Input Check", o);
                    const i = o[0].value,
                      s = o[1].value;
                    console.log("Checkin Input", s);
                    const c = {
                      search: i,
                      checkin: s,
                      checkout: o[2].value,
                      ...t,
                    };
                    amplitude.track(e[r], c).promise.then(function () {});
                  });
                });
              }
              function r(o) {
                const r = document?.querySelector("#" + o);
                r?.addEventListener("click", () => {
                  amplitude.track(e[o], t).promise.then(function () {});
                });
              }
              function n(o, r, n) {
                const i = document.querySelector(`#${o}`),
                  s = i?.querySelectorAll(n ? `#${n}` : "h3"),
                  c = i?.querySelectorAll("a");
                c?.forEach((n, i) => {
                  n.addEventListener("click", () => {
                    const n = { [r]: s[i].innerText, ...t };
                    amplitude.track(e[o], n).promise.then(function () {});
                  });
                });
              }
              function i(o, r) {
                const n = document.querySelector(`#${o}`),
                  i = n?.querySelectorAll("a");
                i?.forEach((n) => {
                  n.addEventListener("click", (i) => {
                    const s = n?.querySelector("h3")?.innerText,
                      c = { [r]: s, ...t };
                    amplitude.track(e[o], c).promise.then(function (e) {});
                  });
                });
              }
              function s(o, r) {
                const n = document.querySelector(`#${o}`),
                  i = n?.querySelectorAll(".deal-hotel_details");
                i?.forEach((n) => {
                  n.addEventListener("click", (i) => {
                    const s = n?.querySelector("h5")?.innerText;
                    if ((console.log(s), void 0 !== s)) {
                      const n = { [r]: s, ...t };
                      amplitude.track(e[o], n).promise.then(function (e) {});
                    }
                  });
                });
              }
              s("usahotels", "hotel"),
                s("europehotels", "hotel"),
                s("caribbeanhotels", "hotel"),
                s("mexicohotels", "hotel"),
                s("canadahotels", "hotel"),
                s("asiahotels", "hotel"),
                s("cAmehotels", "hotel"),
                s("sAmehotels", "hotel"),
                s("usamodal", "hotel"),
                s("europemodal", "hotel"),
                s("caribbeanModal", "hotel"),
                s("mexicomodal", "hotel"),
                s("canadaModal", "hotel"),
                i("lvstays", "hotel"),
                i("nonfhotels", "hotel"),
                i("ttodo", "activity"),
                i("restaurants", "restaurant"),
                i("dlv", "Deals"),
                i("dorlando", "Deals"),
                i("dnewYork", "Deals"),
                i("dlasVegas", "Deals"),
                i("dDenver", "Deals"),
                i("dMiami", "Deals"),
                i("dBoston", "Deals"),
                i("dWashington", "Deals"),
                i("dMexico", "Deals"),
                i("dMexicoCity", "Deals"),
                [
                  {
                    hrefId: "howItWorksHeaderCTA",
                    trackEventText: "Clicked on How it Works CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "#howitworks",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "howItWorksHeaderCTAMobile",
                    trackEventText: "Clicked on How it Works CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "#howitworks",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "exploreHotelsHeaderCTA",
                    trackEventText: "Clicked on Explore Hotels Header CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "exploreHotelsHeaderCTAMobile",
                    trackEventText:
                      "Clicked on Explore Hotels Header CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "faqHeaderCTA",
                    trackEventText: "Clicked on FAQ CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://faq.theguestbook.com",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "faqHeaderCTAMobile",
                    trackEventText: "Clicked on FAQ CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://faq.theguestbook.com",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "forHotelsHeaderCTA",
                    trackEventText: "Clicked on For Hotels CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://hoteliers.theguestbook.com/",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "forHotelsHeaderCTAMobile",
                    trackEventText: "Clicked on For Hotels CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://hoteliers.theguestbook.com/",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "extensionHeaderCTA",
                    trackEventText: "Clicked on Extension CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "#extension",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "extensionHeaderCTAMobile",
                    trackEventText: "Clicked on Extension CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "#extension",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "shrtlistHeaderCTA",
                    trackEventText: "Clicked on Shrtlist Header CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "#shrtlst",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "shrtlistHeaderCTAMobile",
                    trackEventText: "Clicked on Shrtlist Header CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "#shrtlst",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "signInHeaderCTA",
                    trackEventText: "Clicked on Sign in CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/users/sign_up?pid=theguestbook",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "signInHeaderCTAMobile",
                    trackEventText: "Clicked on Sign in CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/users/sign_up?pid=theguestbook",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "signInHeaderCTANavMobile",
                    trackEventText:
                      "Clicked on Sign in CTA on Mobile hamburger",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/users/sign_up?pid=theguestbook",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "howItworksExploring",
                    trackEventText: "Clicked on Start Exploring hotels",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "rewardExploringHotel",
                    trackEventText:
                      "Clicked on Start Exploring hotels Reward Section",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "rewardExploringHotelMobile",
                    trackEventText:
                      "Clicked on Start Exploring hotels Reward Section on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "addyourBrowserMobileLink",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Mobile-Link",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/extension",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "addyourBrowserChormeLink",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Chrome browser",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://chromewebstore.google.com/detail/the-guestbook-extension-c/kdojjbmaidnebdjancpcgajkgeboebpe",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "addyourBrowserSafaryLink",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Safary browser",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://apps.apple.com/us/app/the-guestbook-extension/id1416068849",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "addyourBrowserOtherLink",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Other browser",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/extension",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "lmbrowser",
                    trackEventText: "Clicked on Learnmore add extension",
                    redirectTrackEventProperties: {},
                    redirectUrl: "",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "addurBrowserMobileLinkMdl",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Mobile-Link In Modal",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/extension",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "addurBrowserChromeLinkMdl",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Chrome browser In Modal",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://chrome.google.com/webstore/detail/the-guestbook-extension-c/kdojjbmaidnebdjancpcgajkgeboebpe",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "addurBrowserSafaryLinkMdl",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Safary browser In Modal",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://apps.apple.com/us/app/the-guestbook-extension/id1416068849",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "addyourBrowserOtherLinkMdl",
                    trackEventText:
                      "Clicked on Add your browser Extension Button Click by Other browser In Modal",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/extension",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "getAdemo",
                    trackEventText: "Clicked on Get a demo",
                    redirectTrackEventProperties: {},
                    redirectUrl:
                      "https://hoteliers.theguestbook.com/more-info/",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "learnMore",
                    trackEventText: "Clicked on Learn More",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://hoteliers.theguestbook.com/",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "howItWorksHeaderCTAlp",
                    trackEventText: "Clicked on How it Works CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/#how-it-works",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "howItWorksHeaderCTAMobilelp",
                    trackEventText: "Clicked on How it Works CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/#how-it-works",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "extensionHeaderCTAlp",
                    trackEventText: "Clicked on Extension CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/#extension",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "extensionHeaderCTAlpMobile",
                    trackEventText: "Clicked on Extension CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/#extension",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "shortlistHeaderCTAlp",
                    trackEventText: "Clicked on Shrtlist Header CTA",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/#shrtlst",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "shortlistHeaderCTAlpMobile",
                    trackEventText: "Clicked on Shrtlist Header CTA on Mobile",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://theguestbook.com/#shrtlst",
                    shouldOpenInNewTab: !0,
                  },
                  {
                    hrefId: "shrtlist",
                    trackEventText: "Clicked on Shrtlst Link",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://shrtlst.com/",
                    shouldOpenInNewTab: !1,
                  },
                  {
                    hrefId: "shrtlstButton",
                    trackEventText: "Clicked on shrtlst learn more",
                    redirectTrackEventProperties: {},
                    redirectUrl: "https://shrtlst.com/",
                    shouldOpenInNewTab: !0,
                  },
                ].forEach((e) => {
                  !(function (e, o, r, n, i = !1) {
                    const s = document.querySelector("#" + e);
                    s?.addEventListener("click", (e) => {
                      e.preventDefault();
                      const r = { ...t, page: document.title },
                        s = () => {
                          n &&
                            (i
                              ? window.open(n, "_blank")
                              : (window.location.href = n));
                        };
                      amplitude
                        .track(o, r)
                        .promise.then(function (e) {
                          s();
                        })
                        .catch(function (e) {
                          console.error("Amplitude tracking error:", e), s();
                        });
                    });
                  })(
                    e.hrefId,
                    e.trackEventText,
                    e.redirectTrackEventProperties,
                    e.redirectUrl,
                    e.shouldOpenInNewTab
                  );
                }),
                o("react-target", "searchInput"),
                (function (o, r) {
                  const n = document.querySelector("#react-tablet"),
                    i = n?.querySelectorAll("a");
                  i?.forEach((o) => {
                    o.addEventListener("click", () => {
                      const o = n.querySelectorAll("input");
                      console.log("Input Check", o);
                      const r = o[5].value,
                        i = o[6].value;
                      console.log("Checkin Input", i);
                      const s = {
                        search: r,
                        checkin: i,
                        checkout: o[7].value,
                        ...t,
                      };
                      amplitude
                        .track(e.searchInputMobile, s)
                        .promise.then(function () {});
                    });
                  });
                })(),
                o("landing_down", "searchInput"),
                r("submitButtonShtlst"),
                r("submitButton"),
                n("exploreHotels", "Click On"),
                n("tdiscover", "discover"),
                n("insiders", "insider", "insiderName"),
                (function (o, r, n) {
                  const i = document.querySelector(`#${o}`);
                  if (!i)
                    return void console.error(
                      `Container with ID '${o}' not found.`
                    );
                  const s = i?.querySelector("#yesButton"),
                    c = i?.querySelector("#noButton"),
                    l = i?.querySelectorAll("h1");
                  s.addEventListener("click", () => {
                    console.log("click");
                    const o = Array.from(l)
                        .map((e) => e?.innerText)
                        .filter((e) => void 0 !== e),
                      n = { feedback: "Yes", ...t, heading: o };
                    console.log(n),
                      amplitude.track(e[r], n).promise.then(function () {});
                  }),
                    c.addEventListener("click", () => {
                      const o = Array.from(l)
                          .map((e) => e?.innerText)
                          .filter((e) => void 0 !== e),
                        n = { feedback: "No", ...t, heading: o };
                      console.log(n),
                        amplitude.track(e[r], n).promise.then(function () {});
                    });
                })("feedbackFaq", "yesButtonEvent");
            });
          })
          .catch((e) => {
            console.log("amplitude tracking disabled");
          }),
      {}
    );
  })()
);