function initializeTooltips() {
  // Initialize Tippy
  const tippyInstance = tippy(".tippy", {
    theme: "light",
    animation: "scale",
    duration: 250,
    arrow: true,
    arrowType: "round",
    delay: [0, 50],
    //trigger: "manual", // Keep the tooltip open manually

    onHide(instance) {
      instance.setContent(
        instance.reference.getAttribute("data-tippy-content")
      );
    },
    onShown(instance) {
      const tooltipElement = instance.popper;
      const bodyTop = parseFloat(getComputedStyle(document.body).top);
      tooltipElement.style.top = `${bodyTop + 1700}px`;

      const contentElement =
        tooltipElement.querySelector(".tippy-content") || tooltipElement;
      setTimeout(() => {
        console.log(
          "Tooltip Font:",
          window.getComputedStyle(contentElement).fontFamily
        );
        console.log("Tooltip Classes:", contentElement.className);
      }, 250);
    },
  });

  // Automatically always open the tooltip
  //tippyInstance.forEach((instance) => instance.show());

  const tooltips = tippy(".travel-tippy", {
    content: "Book your stay within the given time frame to enjoy the deal.",
    animation: "scale",
    arrow: true,
    arrowType: "round", // Sharp, round or empty for none
    placement: "top",
    //trigger: "manual", // Set trigger to manual
    hideOnClick: false, // Prevent hiding on click
    theme: "light",
    duration: 250,
    onShown(instance) {
      // You can customize the content here or perform other actions
    },
  });

  // Show tooltips always for each element
  //tooltips.forEach((tooltip) => tooltip.show());
  // Listen for clicks on all elements with the .tippy class
  document.querySelectorAll(".tippy").forEach((element) => {
    element.addEventListener("click", function () {
      // Retrieve the Tippy instance for this element
      const instance = element._tippy;

      // Update the content
      instance.setContent("Copied");
      // Show the tooltip with the new content
      instance.show();
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  initializeTooltips(); // Call the function to initialize tooltips
});
