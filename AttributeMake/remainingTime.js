function timeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function checkDealStatus(timerElement) {
  const endDate = timerElement.getAttribute("timer-end-date");
  const timerId = timerElement.getAttribute("data-timer-id");
  const displayElement = document.querySelector(
    `.remaining-time[data-timer-id="${timerId}"]`
  );
  const hotelImage = document.querySelector(
    `.hotel_image[data-timer-id="${timerId}"]`
  );

  if (new Date(endDate) <= new Date()) {
    if (displayElement) {
      displayElement.innerHTML = "Deal expired";
      displayElement.style.backgroundColor = "#D10031";
    }
    if (hotelImage) {
      hotelImage.style.opacity = "0.5";
      hotelImage.style.filter = "grayscale(1)";
    }
  }
}

function initializeTimer(timerElement, displayElement, enddate) {
  const updateCountdown = () => {
    const t = timeRemaining(enddate);

    if (t.days > 10) {
      displayElement.classList.add("hidden");
      timerElement.classList.add("hidden");
      return;
    } else {
      displayElement.classList.remove("hidden");
      timerElement.classList.remove("hidden");
    }

    if (!t || t.total <= 0) {
      clearInterval(timeinterval);
      displayElement.innerHTML = "00:00:00:00";
      checkDealStatus(timerElement);
      return;
    }

    displayElement.innerHTML = `${t.days.toString().padStart(2, "0")}:${t.hours
      .toString()
      .padStart(2, "0")}:${t.minutes.toString().padStart(2, "0")}:${t.seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const timeinterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function initializeAllTimers() {
  const timers = document.querySelectorAll(".timer:not(.initialized)");

  timers.forEach((timer) => {
    const endDate = timer.getAttribute("timer-end-date");
    const displayElement = document.querySelector(
      `.remaining-time[data-timer-id="${timer.getAttribute("data-timer-id")}"]`
    );
    if (endDate && displayElement) {
      initializeTimer(timer, displayElement, endDate);
      timer.classList.add("initialized");
    } else {
      console.error(
        "Timer end date not found or display element missing for:",
        timer
      );
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // Call this function to initialize timers
  initializeAllTimers();
});
