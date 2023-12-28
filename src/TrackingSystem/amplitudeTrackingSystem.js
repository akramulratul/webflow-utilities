const fetchTimeout = (url, ms, { signal, ...options } = {}) => {
  const controller = new AbortController();

  const promise = fetch(url, { signal: controller.signal, ...options });
  if (signal) signal.addEventListener("abort", () => controller.abort());
  const timeout = setTimeout(() => controller.abort(), ms);
  return promise.finally(() => clearTimeout(timeout));
};

const controller = new AbortController();
isProduction &&
  fetchTimeout(
    "https://cdn.amplitude.com/libs/analytics-browser-2.3.7-min.js.gz",
    1000,
    {
      signal: controller.signal,
    }
  )
    .then(function () {
      document.addEventListener("DOMContentLoaded", function () {
        // CONSTANTS
        const eventTypeDict = {
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
        };
        const hrefIdDictionary = {
          howItWorksHeaderCTA: "howItWorksHeaderCTA",
          howItWorksHeaderCTAMobile: "howItWorksHeaderCTAMobile",
          exploreHotelsHeaderCTA: "exploreHotelsHeaderCTA",
          exploreHotelsHeaderCTAMobile: "exploreHotelsHeaderCTAMobile",
          faqHeaderCTA: "faqHeaderCTA",
          faqHeaderCTAMobile: "faqHeaderCTAMobile",
          forHotelsHeaderCTA: "forHotelsHeaderCTA",
          forHotelsHeaderCTAMobile: "forHotelsHeaderCTAMobile",
          extensionHeaderCTA: "extensionHeaderCTA",
          extensionHeaderCTAMobile: "extensionHeaderCTAMobile",
          shrtlistHeaderCTA: "shrtlistHeaderCTA",
          shrtlistHeaderCTAMobile: "shrtlistHeaderCTAMobile",
          signInHeaderCTA: "signInHeaderCTA",
          signInHeaderCTAMobile: "signInHeaderCTAMobile",
          signInHeaderCTANavMobile: "signInHeaderCTANavMobile",
          howItworksExploring: "howItworksExploring",
          rewardExploringHotel: "rewardExploringHotel",
          rewardExploringHotelMobile: "rewardExploringHotelMobile",
          addyourBrowserMobileLink: "addyourBrowserMobileLink",
          addyourBrowserChormeLink: "addyourBrowserChormeLink",
          addyourBrowserSafaryLink: "addyourBrowserSafaryLink",
          addyourBrowserOtherLink: "addyourBrowserOtherLink",
          lmbrowser: "lmbrowser",
          addurBrowserMobileLinkMdl: "addurBrowserMobileLinkMdl",
          addurBrowserChromeLinkMdl: "addurBrowserChromeLinkMdl",
          addurBrowserSafaryLinkMdl: "addurBrowserSafaryLinkMdl",
          addyourBrowserOtherLinkMdl: "addyourBrowserOtherLinkMdl",
          getAdemo: "getAdemo",
          learnMore: "learnMore",
          //lp page
          howItWorksHeaderCTAlp: "howItWorksHeaderCTAlp",
          howItWorksHeaderCTAMobilelp: "howItWorksHeaderCTAMobilelp",
          extensionHeaderCTAlp: "extensionHeaderCTAlp",
          extensionHeaderCTAlpMobile: "extensionHeaderCTAlpMobile",
          shortlistHeaderCTAlp: "shortlistHeaderCTAlp",
          shortlistHeaderCTAlpMobile: "shortlistHeaderCTAlpMobile",
          shrtlist: "shrtlist",
          shrtlstButton: "shrtlstButton",
        };
        const trackEventTexts = {
          howItWorksHeaderCTA: "Clicked on How it Works CTA",
          shrtlist: "Clicked on Shrtlst Link",
          shrtlstButton: "Clicked on shrtlst learn more",
          howItWorksHeaderCTAMobile: "Clicked on How it Works CTA on Mobile",
          exploreHotelsHeaderCTA: "Clicked on Explore Hotels Header CTA",
          exploreHotelsHeaderCTAMobile:
            "Clicked on Explore Hotels Header CTA on Mobile",
          faqHeaderCTA: "Clicked on FAQ CTA",
          faqHeaderCTAMobile: "Clicked on FAQ CTA on Mobile",
          forHotelsHeaderCTA: "Clicked on For Hotels CTA",
          forHotelsHeaderCTAMobile: "Clicked on For Hotels CTA on Mobile",
          extensionHeaderCTA: "Clicked on Extension CTA",
          extensionHeaderCTAMobile: "Clicked on Extension CTA on Mobile",
          shrtlistHeaderCTA: "Clicked on Shrtlist Header CTA",
          shrtlistHeaderCTAMobile: "Clicked on Shrtlist Header CTA on Mobile",
          signInHeaderCTA: "Clicked on Sign in CTA",
          signInHeaderCTAMobile: "Clicked on Sign in CTA on Mobile",
          signInHeaderCTANavMobile:
            "Clicked on Sign in CTA on Mobile hamburger",
          howItworksExploring: "Clicked on Start Exploring hotels",
          rewardExploringHotel:
            "Clicked on Start Exploring hotels Reward Section",
          rewardExploringHotelMobile:
            "Clicked on Start Exploring hotels Reward Section on Mobile",
          addyourBrowserMobileLink:
            "Clicked on Add your browser Extension Button Click by Mobile-Link",
          addyourBrowserChormeLink:
            "Clicked on Add your browser Extension Button Click by Chrome browser",
          addyourBrowserSafaryLink:
            "Clicked on Add your browser Extension Button Click by Safary browser",
          addyourBrowserOtherLink:
            "Clicked on Add your browser Extension Button Click by Other browser",
          lmbrowser: "Clicked on Learnmore add extension",
          addurBrowserMobileLinkMdl:
            "Clicked on Add your browser Extension Button Click by Mobile-Link In Modal",
          addurBrowserChromeLinkMdl:
            "Clicked on Add your browser Extension Button Click by Chrome browser In Modal",
          addurBrowserSafaryLinkMdl:
            "Clicked on Add your browser Extension Button Click by Safary browser In Modal",
          addyourBrowserOtherLinkMdl:
            "Clicked on Add your browser Extension Button Click by Other browser In Modal",
          getAdemo: "Clicked on Get a demo",
          learnMore: "Clicked on Learn More",
          //lp
          howItWorksHeaderCTAlp: "Clicked on How it Works CTA",
          howItWorksHeaderCTAMobilelp: "Clicked on How it Works CTA on Mobile",
          extensionHeaderCTAlp: "Clicked on Extension CTA",
          extensionHeaderCTAlpMobile: "Clicked on Extension CTA on Mobile",
          shortlistHeaderCTAlp: "Clicked on Shrtlist Header CTA",
          shortlistHeaderCTAlpMobile:
            "Clicked on Shrtlist Header CTA on Mobile",
        };
        const redirectTrackEventProperties = { page: document.title };
        function initializeRedirectTracking(links) {
          links.forEach((link) => {
            trackRedirect(
              link.hrefId,
              link.trackEventText,
              link.redirectTrackEventProperties,
              link.redirectUrl,
              link.shouldOpenInNewTab
            );
          });
        }
        function trackRedirect(
          hrefId,
          trackEvent,
          trackEventProperties,
          redirectUrl,
          shouldOpenInNewTab = false
        ) {
          const wrapper = document.querySelector("#" + hrefId);
          wrapper?.addEventListener("click", (e) => {
            e.preventDefault();
            const trackEventProperties = {
              ...redirectTrackEventProperties, // Merge additional properties
              page: document.title, // Dynamically fetch the page title
            };
            const handleRedirect = () => {
              if (redirectUrl) {
                if (shouldOpenInNewTab) {
                  window.open(redirectUrl, "_blank");
                } else {
                  window.location.href = redirectUrl;
                }
              }
            };

            amplitude
              .track(trackEvent, trackEventProperties)
              .promise.then(function (amplitudeResponse) {
                handleRedirect();
              })
              .catch(function (error) {
                console.error("Amplitude tracking error:", error);
                handleRedirect();
              });
          });
        }

        function trackSearchBar(containerId, eventType) {
          const wrapper = document.querySelector(`#${containerId}`);
          const submitButtons = wrapper?.querySelectorAll("a");

          submitButtons?.forEach((aTag) => {
            aTag.addEventListener("click", () => {
              const inputs = wrapper.querySelectorAll("input");
              console.log("Input Check", inputs);
              // search input
              const searchInputValue = inputs[0].value;
              // check-in input
              const checkInInputValue = inputs[1].value;
              console.log("Checkin Input", checkInInputValue);
              // check-out input
              const checkOutInputValue = inputs[2].value;
              const trackingPayload = {
                search: searchInputValue,
                checkin: checkInInputValue,
                checkout: checkOutInputValue,
                ...redirectTrackEventProperties, // Merge additional properties
              };

              amplitude
                .track(eventTypeDict[eventType], trackingPayload)
                .promise.then(function () {});
            });
          });
        }
        function trackMobileSearchBar(containerId, eventType) {
          const wrapper = document.querySelector(`#${containerId}`);
          const submitButtons = wrapper?.querySelectorAll("a");

          submitButtons?.forEach((aTag) => {
            aTag.addEventListener("click", () => {
              const inputs = wrapper.querySelectorAll("input");
              console.log("Input Check", inputs);
              // search input
              const searchInputValue = inputs[5].value;
              // check-in input
              const checkInInputValue = inputs[6].value;
              console.log("Checkin Input", checkInInputValue);
              // check-out input
              const checkOutInputValue = inputs[7].value;

              const trackingPayload = {
                search: searchInputValue,
                checkin: checkInInputValue,
                checkout: checkOutInputValue,
                ...redirectTrackEventProperties, // Merge additional properties
              };

              amplitude
                .track(eventTypeDict[eventType], trackingPayload)
                .promise.then(function () {});
            });
          });
        }

        function trackFeedbackButtons(containerId, eventType, headingId) {
          const wrapper = document.querySelector(`#${containerId}`);

          // Check if the wrapper element exists
          if (!wrapper) {
            console.error(`Container with ID '${containerId}' not found.`);
            return;
          }
          const yesButton = wrapper?.querySelector("#yesButton");
          const noButton = wrapper?.querySelector("#noButton");
          const allHeadings = wrapper?.querySelectorAll(
            headingId ? `#${headingId}` : "h1"
          );

          yesButton.addEventListener("click", () => {
            console.log("click");
            // const yesButton = yesButton.innerText;
            // const headingTexts = Array.from(allHeadings)
            //   .filter((heading) => heading?.innerText)
            //   .map((heading) => heading.innerText);
            const headingTexts = Array.from(allHeadings)
              .map((heading) => heading?.innerText)
              .filter((text) => text !== undefined);
            const yesPayload = {
              feedback: "Yes",
              ...redirectTrackEventProperties, // Add any additional properties
              heading: headingTexts,
            };
            console.log(yesPayload);
            amplitude
              .track(eventTypeDict[eventType], yesPayload)
              .promise.then(function () {
                // Callback function if needed
              });
          });

          noButton.addEventListener("click", () => {
            const headingTexts = Array.from(allHeadings)
              .map((heading) => heading?.innerText)
              .filter((text) => text !== undefined);
            const noPayload = {
              feedback: "No",
              ...redirectTrackEventProperties, // Add any additional properties
              heading: headingTexts,
            };
            console.log(noPayload);
            amplitude
              .track(eventTypeDict[eventType], noPayload)
              .promise.then(function () {
                // Callback function if needed
              });
          });
        }

        function trackSignUp(submitButtonId) {
          const submitButton = document?.querySelector("#" + submitButtonId);

          submitButton?.addEventListener("click", () => {
            amplitude
              .track(
                eventTypeDict[submitButtonId],
                redirectTrackEventProperties
              )
              .promise.then(function () {});
          });
        }
        function trackDiscoverAndInsiders(
          containerId,
          eventPropName,
          headingId
        ) {
          const wrapper = document.querySelector(`#${containerId}`);
          const allHeadings = wrapper?.querySelectorAll(
            headingId ? `#${headingId}` : "h3"
          );
          const allAnchorTags = wrapper?.querySelectorAll("a");

          allAnchorTags?.forEach((aTag, i) => {
            aTag.addEventListener("click", () => {
              const evProp = {
                [eventPropName]: allHeadings[i].innerText,
                ...redirectTrackEventProperties,
              };

              amplitude
                .track(eventTypeDict[containerId], evProp)
                .promise.then(function () {});
            });
          });
        }

        function trackCms(containerId, eventPropName) {
          const wrapper = document.querySelector(`#${containerId}`);
          const allAnchorTags = wrapper?.querySelectorAll("a");

          allAnchorTags?.forEach((aTag) => {
            aTag.addEventListener("click", (e) => {
              const headingText = aTag?.querySelector("h3")?.innerText;

              const evProp = {
                [eventPropName]: headingText,
                ...redirectTrackEventProperties,
              };

              amplitude
                .track(eventTypeDict[containerId], evProp)
                .promise.then(function (amplitudeResponse) {});
            });
          });
        }
        function trackFridayCms(containerId, eventPropName) {
          const wrapper = document.querySelector(`#${containerId}`);
          const allDivs = wrapper?.querySelectorAll(".deal-hotel_details");

          allDivs?.forEach((div) => {
            div.addEventListener("click", (e) => {
              const headingText = div?.querySelector("h5")?.innerText;
              console.log(headingText);

              if (headingText !== undefined) {
                const evProp = {
                  [eventPropName]: headingText,
                  ...redirectTrackEventProperties,
                };

                amplitude
                  .track(eventTypeDict[containerId], evProp)
                  .promise.then(function (amplitudeResponse) {});
              }
            });
          });
        }

        trackFridayCms("usahotels", "hotel");
        trackFridayCms("europehotels", "hotel");
        trackFridayCms("caribbeanhotels", "hotel");
        trackFridayCms("mexicohotels", "hotel");
        trackFridayCms("canadahotels", "hotel");
        trackFridayCms("asiahotels", "hotel");
        trackFridayCms("cAmehotels", "hotel");
        trackFridayCms("sAmehotels", "hotel");
        trackFridayCms("usamodal", "hotel");
        trackFridayCms("europemodal", "hotel");
        trackFridayCms("caribbeanModal", "hotel");
        trackFridayCms("mexicomodal", "hotel");
        trackFridayCms("canadaModal", "hotel");
        trackCms("lvstays", "hotel");
        trackCms("nonfhotels", "hotel");
        trackCms("ttodo", "activity");
        trackCms("restaurants", "restaurant");
        trackCms("dlv", "Deals");
        trackCms("dorlando", "Deals");
        trackCms("dnewYork", "Deals");
        trackCms("dlasVegas", "Deals");
        trackCms("dDenver", "Deals");
        trackCms("dMiami", "Deals");
        trackCms("dBoston", "Deals");
        trackCms("dWashington", "Deals");
        trackCms("dMexico", "Deals");
        trackCms("dMexicoCity", "Deals");

        const trackedLinks = [
          {
            hrefId: hrefIdDictionary.howItWorksHeaderCTA,
            trackEventText: trackEventTexts.howItWorksHeaderCTA,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "#howitworks",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.howItWorksHeaderCTAMobile,
            trackEventText: trackEventTexts.howItWorksHeaderCTAMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "#howitworks",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.exploreHotelsHeaderCTA,
            trackEventText: trackEventTexts.exploreHotelsHeaderCTA,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.exploreHotelsHeaderCTAMobile,
            trackEventText: trackEventTexts.exploreHotelsHeaderCTAMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.faqHeaderCTA,
            trackEventText: trackEventTexts.faqHeaderCTA,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://faq.theguestbook.com",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.faqHeaderCTAMobile,
            trackEventText: trackEventTexts.faqHeaderCTAMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://faq.theguestbook.com",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.forHotelsHeaderCTA,
            trackEventText: trackEventTexts.forHotelsHeaderCTA,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://hoteliers.theguestbook.com/",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.forHotelsHeaderCTAMobile,
            trackEventText: trackEventTexts.forHotelsHeaderCTAMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://hoteliers.theguestbook.com/",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.extensionHeaderCTA,
            trackEventText: trackEventTexts.extensionHeaderCTA,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "#extension",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.extensionHeaderCTAMobile,
            trackEventText: trackEventTexts.extensionHeaderCTAMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "#extension",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.shrtlistHeaderCTA,
            trackEventText: trackEventTexts.shrtlistHeaderCTA,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "#shrtlst",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.shrtlistHeaderCTAMobile,
            trackEventText: trackEventTexts.shrtlistHeaderCTAMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "#shrtlst",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.signInHeaderCTA,
            trackEventText: trackEventTexts.signInHeaderCTA,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/users/sign_up?pid=theguestbook",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.signInHeaderCTAMobile,
            trackEventText: trackEventTexts.signInHeaderCTAMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/users/sign_up?pid=theguestbook",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.signInHeaderCTANavMobile,
            trackEventText: trackEventTexts.signInHeaderCTANavMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/users/sign_up?pid=theguestbook",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.howItworksExploring,
            trackEventText: trackEventTexts.howItworksExploring,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.rewardExploringHotel,
            trackEventText: trackEventTexts.rewardExploringHotel,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.rewardExploringHotelMobile,
            trackEventText: trackEventTexts.rewardExploringHotelMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://theguestbook.com/destinations/guestbook?page=1&query%5Blocation%5D%5Bbbox%5D%5B0%5D=78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B1%5D=180&query%5Blocation%5D%5Bbbox%5D%5B2%5D=-78.63000556774836&query%5Blocation%5D%5Bbbox%5D%5B3%5D=-180",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.addyourBrowserMobileLink,
            trackEventText: trackEventTexts.addyourBrowserMobileLink,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/extension",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.addyourBrowserChormeLink,
            trackEventText: trackEventTexts.addyourBrowserChormeLink,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://chromewebstore.google.com/detail/the-guestbook-extension-c/kdojjbmaidnebdjancpcgajkgeboebpe",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.addyourBrowserSafaryLink,
            trackEventText: trackEventTexts.addyourBrowserSafaryLink,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://apps.apple.com/us/app/the-guestbook-extension/id1416068849",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.addyourBrowserOtherLink,
            trackEventText: trackEventTexts.addyourBrowserOtherLink,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/extension",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.lmbrowser,
            trackEventText: trackEventTexts.lmbrowser,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.addurBrowserMobileLinkMdl,
            trackEventText: trackEventTexts.addurBrowserMobileLinkMdl,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/extension",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.addurBrowserChromeLinkMdl,
            trackEventText: trackEventTexts.addurBrowserChromeLinkMdl,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://chrome.google.com/webstore/detail/the-guestbook-extension-c/kdojjbmaidnebdjancpcgajkgeboebpe",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.addurBrowserSafaryLinkMdl,
            trackEventText: trackEventTexts.addurBrowserSafaryLinkMdl,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl:
              "https://apps.apple.com/us/app/the-guestbook-extension/id1416068849",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.addyourBrowserOtherLinkMdl,
            trackEventText: trackEventTexts.addyourBrowserOtherLinkMdl,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/extension",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.getAdemo,
            trackEventText: trackEventTexts.getAdemo,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://hoteliers.theguestbook.com/more-info/",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.learnMore,
            trackEventText: trackEventTexts.learnMore,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://hoteliers.theguestbook.com/",
            shouldOpenInNewTab: true,
          },
          //LP page
          {
            hrefId: hrefIdDictionary.howItWorksHeaderCTAlp,
            trackEventText: trackEventTexts.howItWorksHeaderCTAlp,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/#how-it-works",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.howItWorksHeaderCTAMobilelp,
            trackEventText: trackEventTexts.howItWorksHeaderCTAMobilelp,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/#how-it-works",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.extensionHeaderCTAlp,
            trackEventText: trackEventTexts.extensionHeaderCTAlp,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/#extension",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.extensionHeaderCTAlpMobile,
            trackEventText: trackEventTexts.extensionHeaderCTAlpMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/#extension",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.shortlistHeaderCTAlp,
            trackEventText: trackEventTexts.shortlistHeaderCTAlp,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/#shrtlst",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.shortlistHeaderCTAlpMobile,
            trackEventText: trackEventTexts.shortlistHeaderCTAlpMobile,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://theguestbook.com/#shrtlst",
            shouldOpenInNewTab: true,
          },
          {
            hrefId: hrefIdDictionary.shrtlist,
            trackEventText: trackEventTexts.shrtlist,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://shrtlst.com/",
            shouldOpenInNewTab: false,
          },
          {
            hrefId: hrefIdDictionary.shrtlstButton,
            trackEventText: trackEventTexts.shrtlstButton,
            redirectTrackEventProperties: {
              /* additional properties here */
            },
            redirectUrl: "https://shrtlst.com/",
            shouldOpenInNewTab: true,
          },
          // Add any other links as needed
        ];
        // Initialize tracking on the defined links
        initializeRedirectTracking(trackedLinks);
        trackSearchBar("react-target", "searchInput");
        trackMobileSearchBar("react-tablet", "searchInputMobile");
        trackSearchBar("landing_down", "searchInput");
        trackSignUp("submitButtonShtlst");
        trackSignUp("submitButton");
        trackDiscoverAndInsiders("exploreHotels", "Click On");
        trackDiscoverAndInsiders("tdiscover", "discover");
        trackDiscoverAndInsiders("insiders", "insider", "insiderName");
        // trackFeedback("feedbackFaq", "ClickButton");
        // Usage
        trackFeedbackButtons("feedbackFaq", "yesButtonEvent");
      });
    })
    .catch((error) => {
      console.log("amplitude tracking disabled");
    });
