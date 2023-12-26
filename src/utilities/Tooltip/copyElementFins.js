document.addEventListener("DOMContentLoaded", function () {
  let clickableElems = document.querySelectorAll(
    '[fs-copyclip-element="click"]'
  );

  clickableElems.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
      let contentToCopy = elem.querySelector(
        '[fs-copyclip-element="copy-this"]'
      );

      if (contentToCopy) {
        copyToClipboard(contentToCopy.textContent);
      } else {
        console.warn("No copy element found within the clicked element.");
      }
    });
  });

  function copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
  }
});
