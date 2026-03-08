/* ─── t09n.com — Main JavaScript ───────────────────────────────────────── */

(function () {
  "use strict";

  /* ── Smooth scroll helper ─────────────────────────────────────────────── */
  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  /* ── Navbar scroll effect ─────────────────────────────────────────────── */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ──────────────────────────────────────────────────────── */
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ── Smooth scroll for all nav/section links ──────────────────────────── */
  document.querySelectorAll("a[href^='#'], button[data-scroll]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var href = el.getAttribute("href") || el.getAttribute("data-scroll");
      if (href && href.startsWith("#")) {
        var target = href.slice(1);
        var targetEl = document.getElementById(target);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* ── Hero color animation ─────────────────────────────────────────────── */
  var heroWordmark = document.getElementById("hero-wordmark");
  var heroHeadline = document.getElementById("hero-headline");
  var isBlue = false;
  function animateHero() {
    isBlue = !isBlue;
    if (heroWordmark) heroWordmark.classList.toggle("blue", isBlue);
    if (heroHeadline) heroHeadline.classList.toggle("blue", isBlue);
  }
  setInterval(animateHero, 2800);

  /* ── Fade-in on scroll ────────────────────────────────────────────────── */
  var fadeEls = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ── FAQ accordion ────────────────────────────────────────────────────── */
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (el) {
        el.classList.remove("open");
      });
      if (!isOpen) item.classList.add("open");
    });
  });

  /* ── Waitlist form ────────────────────────────────────────────────────── */
  var waitlistForm = document.getElementById("waitlist-form");
  var waitlistInput = document.getElementById("waitlist-email");
  var waitlistError = document.getElementById("waitlist-error");
  var waitlistAlready = document.getElementById("waitlist-already");
  var waitlistSuccess = document.getElementById("waitlist-success");

  if (waitlistForm) {
    waitlistForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (waitlistError) waitlistError.style.display = "none";
      if (waitlistAlready) waitlistAlready.style.display = "none";

      var email = waitlistInput ? waitlistInput.value.trim() : "";
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (waitlistError) {
          waitlistError.textContent = "Please enter a valid email address.";
          waitlistError.style.display = "block";
          if (waitlistInput) waitlistInput.focus();
        }
        return;
      }

      /* Redirect to signup with email pre-filled */
      window.open("https://app.t09n.com/signup?email=" + encodeURIComponent(email), "_blank");
      if (waitlistForm) waitlistForm.style.display = "none";
      if (waitlistSuccess) waitlistSuccess.style.display = "block";
    });
  }

  /* ── Contact form ─────────────────────────────────────────────────────── */
  var contactForm = document.getElementById("contact-form");
  var contactSuccess = document.getElementById("contact-success");
  var contactError = document.getElementById("contact-error");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (contactError) contactError.style.display = "none";

      var nameEl = document.getElementById("contact-name");
      var emailEl = document.getElementById("contact-email");
      var subjectEl = document.getElementById("contact-subject");
      var messageEl = document.getElementById("contact-message");

      var name = nameEl ? nameEl.value.trim() : "";
      var email = emailEl ? emailEl.value.trim() : "";
      var subject = subjectEl ? subjectEl.value.trim() : "";
      var message = messageEl ? messageEl.value.trim() : "";
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) {
        if (contactError) { contactError.textContent = "Please enter your name."; contactError.style.display = "block"; }
        if (nameEl) nameEl.focus();
        return;
      }
      if (!emailRegex.test(email)) {
        if (contactError) { contactError.textContent = "Please enter a valid email address."; contactError.style.display = "block"; }
        if (emailEl) emailEl.focus();
        return;
      }
      if (!message) {
        if (contactError) { contactError.textContent = "Please enter a message."; contactError.style.display = "block"; }
        if (messageEl) messageEl.focus();
        return;
      }

      var mailSubject = encodeURIComponent(subject || "Inquiry from t09n.com");
      var mailBody = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
      window.location.href = "mailto:support@t09n.com?subject=" + mailSubject + "&body=" + mailBody;

      if (contactForm) contactForm.style.display = "none";
      if (contactSuccess) contactSuccess.style.display = "flex";
    });
  }

})();
