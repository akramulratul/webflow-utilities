document.addEventListener("DOMContentLoaded", function () {
  function applyShowMore(cmsClass, showMoreClass, lineLimit = 3) {
    const cmsItems = document.querySelectorAll(cmsClass);

    cmsItems.forEach((item) => {
      const parent = item.closest(".deal-hotel_details");
      const showMoreLink = parent.querySelector(showMoreClass);

      const lineHeight = parseInt(window.getComputedStyle(item).lineHeight);
      const actualLines = Math.ceil(item.scrollHeight / lineHeight);

      if (actualLines > lineLimit) {
        item.classList.remove("expanded"); // Ensure the class is removed initially
        item.style.overflow = "hidden";
        item.style.display = "-webkit-box";
        item.style.webkitLineClamp = lineLimit;
        item.style.webkitBoxOrient = "vertical";

        showMoreLink.style.display = "block";
        showMoreLink.textContent = "Show more";
      } else {
        showMoreLink.style.display = "none";
      }

      showMoreLink.removeEventListener("click", showMoreClickHandler);
      showMoreLink.addEventListener("click", showMoreClickHandler);
    });
  }

  function showMoreClickHandler(event) {
    event.preventDefault();
    const item = this.closest(".deal-hotel_details").querySelector(
      ".cms-content"
    );

    if (!item.classList.contains("expanded")) {
      item.classList.add("expanded");
      item.style.overflow = "visible";
      item.style.display = "block";
      item.style.webkitLineClamp = "none";
      this.textContent = "Show less";
    } else {
      item.classList.remove("expanded");
      item.style.overflow = "hidden";
      item.style.display = "-webkit-box";
      item.style.webkitLineClamp = 3;
      item.style.webkitBoxOrient = "vertical";
      this.textContent = "Show more";
    }
  }

  // Modal trigger and close button selectors
  var modalTriggers = document.querySelectorAll(".modal"); // Update the selector as needed
  var closeButtons = document.querySelectorAll(".close-btn");

  // Function to open a modal
  function openModal(modalId) {
    var modal = document.getElementById(modalId);

    if (modal) {
      var sectionPopUp = modal.querySelector(".section_pop-up");
      var popUpMainWrapper = modal.querySelector(".pop-up_main-wrapper");

      if (popUpMainWrapper && sectionPopUp) {
        sectionPopUp.style.display = "block";
        popUpMainWrapper.style.transform = "translate3d(0px, 100%, 0px)";
        popUpMainWrapper.style.display = "flex";
        setTimeout(() => {
          sectionPopUp.style.display = "block";
          popUpMainWrapper.style.transition = "transform 0.3s ease-in";
          popUpMainWrapper.style.transform = "translate3d(0px, 0%, 0px)";
        }, 10);

        setTimeout(() => {
          sectionPopUp.style.opacity = "1";
          sectionPopUp.style.transition = "opacity 0.3s ease-in";
        }, 10);
      }

      // Call applyShowMore here after the modal content is visible
      applyShowMore(".cms-content", ".show-more");
    }
  }

  // Function to close a modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      var sectionPopUp = modal.querySelector(".section_pop-up");
      var popUpMainWrapper = modal.querySelector(".pop-up_main-wrapper");

      if (popUpMainWrapper && sectionPopUp) {
        sectionPopUp.style.opacity = "0";
        popUpMainWrapper.style.transition = "transform 0.3s ease-out";
        popUpMainWrapper.style.transform = "translate3d(0px, 100%, 0px)";

        setTimeout(() => {
          sectionPopUp.style.display = "none";
          popUpMainWrapper.style.display = "none";
        }, 300); // Match this timeout to the transform transition duration
      }
    }
  }

  // Event listeners for opening and closing modals
  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var modalId = trigger.getAttribute("data-modal-id");
      openModal(modalId);
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = button.closest(".modal").id;
      closeModal(modalId);
    });
  });
});
