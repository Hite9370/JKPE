// $(function () {
//   var panels = $(".h-panel");
//   var $h = $("#hPanels");
//   var $h1 = $(".p1");
//   var $h2 = $(".p2");
//   var $h3 = $(".p3");
//   var $body = $("body");

//   // ---- FIX: Apply default preview styles on page load ----
//   $body.removeClass("layout-active");
//   $h.css("transform", "translateX(-40vw)");
//   $h1.css("transform", "translateX(0)");
//   $h2.css("transform", "translateX(-40vw)");
//   $h3.css("transform", "translateX(-120vw)");
//   $h.css("z-index", "0");
//   // ---------------------------------------------------------

//   $.scrollify({
//     section: ".s-scroll",
//     scrollSpeed: 800,
//     setHeights: true,
//     touchScroll: true,
//     offset: 0,
//     before: function (i) {
//       // i = scroll section index
//       if (i === 0) {
//         // show preview mode
//         $body.removeClass("layout-active");
//         $h.css("transform", "translateX(-40vw)");
//         $h1.css("transform", "translateX(0)");
//         $h.css("z-index", "0");
//         $h2.css("transform", "translateX(-40vw)");
//         $h3.css("transform", "translateX(-120vw)");
//       } else {
//         // activate full-screen horizontal mode
//         $body.addClass("layout-active");
//         $h.css("z-index", "99");
//         $h1.css("transform", "translateX(-40vw)");
//         $h.css("transform", "translateX(" + -(i - 1) * 100 + "vw)");
//         $h2.css("transform", "translateX(-40vw)");
//         $h3.css("transform", "translateX(-40vw)");
//       }

//       panels
//         .removeClass("active")
//         .eq(i - 1)
//         .addClass("active");
//     },
//     afterRender: function () {
//       // start at preview state
//       $.scrollify.move("#anchor-0");
//     },
//   });
// });



  // $(function () {
  //       var panels = $(".h-panel");
  //       var $h = $("#hPanels");
  //       var $h1 = $(".p1");
  //       var $h2 = $(".p2");
  //       var $h3 = $(".p3");
  //       var $body = $("body");
  //       var $leftText = $(".left-text-wrapper");

  //       // Initial preview state on load
  //       $body.removeClass("layout-active");
  //       $h.css("transform", "translateX(-40vw)");
  //       $h1.css("transform", "translateX(0)");
  //       $h2.css("transform", "translateX(-40vw)");
  //       $h3.css("transform", "translateX(-120vw)");
  //       $h.css("z-index", "0");

  //       $.scrollify({
  //         section: ".s-scroll",
  //         scrollSpeed: 800,
  //         setHeights: true,
  //         touchScroll: true,
  //         offset: 0,

  //         before: function (i) {
  //           // Reset all panels initially
  //           panels.removeClass("active");

  //           if (i === 0) {
  //             // Step 0: Preview state
  //             $body.removeClass("layout-active");
  //             $h.removeClass("fixed-layout")
  //               .css("transform", "translateX(-40vw)")
  //               .css("z-index", "0");
  //             $leftText.removeClass("fixed-layout");

  //             $h1.css("transform", "translateX(0)");
  //             $h2.css("transform", "translateX(-40vw)");
  //             $h3.css("transform", "translateX(-120vw)");
  //           } else if (i === 1) {
  //             // Step 1: Intermediate state (still preview layout)
  //             $body.addClass("layout-active");
  //             $h.addClass("fixed-layout")
  //               .css("transform", "translateX(-40vw)")
  //               .css("z-index", "0");
  //             $leftText.addClass("fixed-layout");

  //             $h1.css("transform", "translateX(0vw)");
  //             $h2.css("transform", "translateX(-40vw)");
  //             $h3.css("transform", "translateX(-120vw)");

  //             panels.eq(2).addClass("active"); // Optional: highlight panel 3 during intermediate
  //           } else {
  //             // Step 2 & 3: Fixed layout active horizontal scroll
  //             $body.addClass("layout-active");
  //             $h.addClass("fixed-layout")
  //               .css("transform", "translateX(" + -(i - 1) * 100 + "vw)")
  //               .css("z-index", "99");
  //             $leftText.addClass("fixed-layout");

  //             $h1.css("transform", "translateX(60vw)");
  //             $h2.css("transform", "translateX(60vw)");
  //             $h3.css("transform", "translateX(60vw)");

  //             panels.eq(i - 1).addClass("active");
  //           }
  //         },

  //         afterRender: function () {
  //           $.scrollify.move("#anchor-0"); // Start at preview
  //         },
  //       });
  //     });


     $(function () {
        var panels = $(".h-panel");
        var $h = $("#hPanels");
        var $h1 = $(".p1");
        var $h2 = $(".p2");
        var $h3 = $(".p3");
        var $body = $("body");
        var $leftText = $(".left-text-wrapper");

        // Initial preview state on load
        $body.removeClass("layout-active");
        $h.css("transform", "translateX(-40vw)");
        $h1.css("transform", "translateX(0)");
        $h2.css("transform", "translateX(-40vw)");
        $h3.css("transform", "translateX(-120vw)");
        $h.css("z-index", "0");

        $.scrollify({
          section: ".s-scroll",
          scrollSpeed: 800,
          setHeights: true,
          touchScroll: true,
          offset: 0,

          //   before: function (i) {
          //     // Reset all panels initially
          //     panels.removeClass("active");

          //     if (i === 0) {
          //       // Step 0: Preview state
          //       $body.removeClass("layout-active");
          //       $h.removeClass("fixed-layout")
          //         .css("transform", "translateX(-40vw)")
          //         .css("z-index", "0");
          //       $leftText.removeClass("fixed-layout");

          //       $h1.css("transform", "translateX(0)");
          //       $h2.css("transform", "translateX(-40vw)");
          //       $h3.css("transform", "translateX(-120vw)");
          //     } else if (i === 1) {
          //       // Step 1: Intermediate state (still preview layout)
          //       $body.addClass("layout-active");
          //       $h.addClass("fixed-layout")
          //         .css("transform", "translateX(-40vw)")
          //         .css("z-index", "0");
          //       $leftText.addClass("fixed-layout");

          //       $h1.css("transform", "translateX(0vw)");
          //       $h2.css("transform", "translateX(-40vw)");
          //       $h3.css("transform", "translateX(-120vw)");

          //       panels.eq(2).addClass("active"); // Optional: highlight panel 3 during intermediate
          //     } else if (i === 2 || i === 3 || i === 4) {
          //       // Step 2 & 3: Fixed layout active horizontal scroll
          //       $body.addClass("layout-active");
          //       $h.addClass("fixed-layout")
          //         .css("transform", "translateX(" + -(i - 1) * 100 + "vw)")
          //         .css("z-index", "99");
          //       $leftText.addClass("fixed-layout");

          //       $h1.css("transform", "translateX(60vw)");
          //       $h2.css("transform", "translateX(60vw)");
          //       $h3.css("transform", "translateX(60vw)");

          //       panels.eq(i - 1).addClass("active");
          //     } else {
          //       $body.removeClass("layout-active");
          //       $h.removeClass("fixed-layout")
          //         .css("transform", "translateX(-40vw)")
          //         .css("z-index", "0");
          //       $leftText.removeClass("fixed-layout");

          //       $h1.css("transform", "translateX(0)");
          //       $h2.css("transform", "translateX(-40vw)");
          //       $h3.css("transform", "translateX(-120vw)");
          //     }
          //   },

          before: function (i) {
            panels.removeClass("active");

            if (i === 0) {
              // Step 0: Preview state
              $body.removeClass("layout-active");
              $h.removeClass("fixed-layout")
                .css("transform", "translateX(-40vw)")
                .css("z-index", "0");
              $leftText.removeClass("fixed-layout");

              $h1.css("transform", "translateX(0)");
              $h2.css("transform", "translateX(-40vw)");
              $h3.css("transform", "translateX(-120vw)");
            } else if (i === 1) {
              // Step 1: Intermediate state (still preview layout)
              $body.addClass("layout-active");
              $h.addClass("fixed-layout")
                .css("transform", "translateX(-40vw)")
                .css("z-index", "0");
              $leftText.addClass("fixed-layout");

              $h1.css("transform", "translateX(0vw)");
              $h2.css("transform", "translateX(-40vw)");
              $h3.css("transform", "translateX(-120vw)");

              panels.eq(2).addClass("active");
            } else if (i === 2 || i === 3 || i === 4) {
              // Step 2 & 3: Fixed layout active horizontal scroll
              $body.addClass("layout-active");
              $h.addClass("fixed-layout")
                .css("transform", "translateX(" + -(i - 1) * 100 + "vw)")
                .css("z-index", "99");
              $leftText.addClass("fixed-layout");

              $h1.css("transform", "translateX(60vw)");
              $h2.css("transform", "translateX(60vw)");
              $h3.css("transform", "translateX(60vw)");

              panels.eq(i - 1).addClass("active");
            }
            // else if (i === 5) {
            //   // Step 4: After horizontal scroll section
            //   // Remove fixed to allow scrolling to bottom-section
            //   $body.removeClass("layout-active");
            //   $h.removeClass("fixed-layout")
            //     .css("transform", "translateX(-40vw)")
            //     .css("z-index", "0");
            //   $leftText.removeClass("fixed-layout");

            //   $h1.css("transform", "translateX(0)");
            //   $h2.css("transform", "translateX(-40vw)");
            //   $h3.css("transform", "translateX(-120vw)");
            // }
            else {
              // Fallback for any other index
              $body.removeClass("layout-active");
              $h.removeClass("fixed-layout")
                .css("transform", "translateX(-40vw)")
                .css("z-index", "0");
              $leftText.removeClass("fixed-layout");

              $h1.css("transform", "translateX(0)");
              $h2.css("transform", "translateX(-40vw)");
              $h3.css("transform", "translateX(-120vw)");
            }
          },

          afterRender: function () {
            $.scrollify.move("#anchor-0"); // Start at preview
          },
        });
      });

