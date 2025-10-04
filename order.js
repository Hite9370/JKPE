  window.addEventListener("load", function () {
    // Load Scrollify dynamically
    var scrollifyScript = document.createElement("script");
    scrollifyScript.src = "https://cdnjs.cloudflare.com/ajax/libs/scrollify/1.0.21/jquery.scrollify.min.js";
    scrollifyScript.onload = function () {
      // Once Scrollify is loaded, load your custom script
      var customScript = document.createElement("script");
      customScript.src = "https://hite9370.github.io/JKPE/script.js";
      document.body.appendChild(customScript);
    };
    document.body.appendChild(scrollifyScript);
  });
