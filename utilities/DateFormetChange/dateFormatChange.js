document.addEventListener("DOMContentLoaded", function () {
  const eventDateElements = document.querySelectorAll(".event-date");

  eventDateElements.forEach(function (element) {
    const originalDate = element.textContent.trim();
    //console.log('Original Date:', originalDate);

    if (Date.parse(originalDate)) {
      const date = new Date(originalDate);
      const month = date.toLocaleString("en-US", { month: "short" });
      const day = date.getDate();
      const year = date.getFullYear();

      const formattedDate = `${month} ${day} ${year}`;
      //console.log('Formatted Date:', formattedDate);
      element.textContent = formattedDate;
    } else {
      console.log("Invalid Date Format:", originalDate);
    }
  });
});
