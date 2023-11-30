document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the specified class names
  var openModalBtns = document.querySelectorAll(".modal-scroll");
  var closeModalBtns = document.querySelectorAll(".close-btn");
  var modalBgs = document.querySelectorAll(".modal-bg");

  // Function to disable scrolling
  function disableScrolling() {
    document.body.classList.add("no-scroll");
  }

  // Function to enable scrolling
  function enableScrolling() {
    document.body.classList.remove("no-scroll");
  }

  // Attach event listeners to all open modal buttons
  openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      disableScrolling();
    });
  });

  // Attach event listeners to all close modal buttons and modal backgrounds
  function addCloseModalListener(elements) {
    elements.forEach(function (element) {
      element.addEventListener("click", function () {
        enableScrolling();
        console.log("click success");
        console.log("function working", enableScrolling());
      });
    });
  }

  addCloseModalListener(closeModalBtns);
  addCloseModalListener(modalBgs);
});
