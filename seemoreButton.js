window.onload = function () {
  const lineLimit = 3; // Number of lines after which to show "Show More"
  const cmsItems = document.querySelectorAll(".cms-content"); // Adjust the class selector to your CMS items

  // console.log("Script loaded. Number of cms items found: " + cmsItems.length);

  cmsItems.forEach((item) => {
    // Find the parent element
    const parent = item.parentElement;

    // Find the 'show-more' link within the same parent
    const showMoreLink = parent.querySelector(".show-more"); // Adjust the class selector to your Show More link
    // console.log(showMoreLink);
    // Calculate the number of lines
    const lineHeight = parseInt(window.getComputedStyle(item).lineHeight);
    const actualLines = item.clientHeight / lineHeight;
    console.log(
      "Line height: " + lineHeight + ", Actual lines: " + actualLines
    );

    // Check if the item exceeds the line limit
    if (actualLines > lineLimit) {
      // Initially hide the excess content
      item.style.overflow = "hidden";
      item.style.display = "-webkit-box";
      item.style.webkitLineClamp = lineLimit;
      item.style.webkitBoxOrient = "vertical";

      // Show the 'Show More' link and add event listener
      showMoreLink.style.display = "block";
      showMoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        // console.log(
        //   "Show more/less clicked. Current overflow: " + item.style.overflow,
        // );
        if (item.style.overflow === "hidden") {
          // Show full content
          item.style.overflow = "visible";
          item.style.display = "block";
          item.style.webkitLineClamp = "none";
          showMoreLink.textContent = "Show less";
        } else {
          // Collapse content
          item.style.overflow = "hidden";
          item.style.display = "-webkit-box";
          item.style.webkitLineClamp = lineLimit;
          item.style.webkitBoxOrient = "vertical";
          showMoreLink.textContent = "Show more";
        }
      });
    } else {
      // If content does not exceed the limit, ensure the 'Show More' link is not displayed
      showMoreLink.style.display = "none";
    }
  });
};
