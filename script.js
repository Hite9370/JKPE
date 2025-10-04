 $(function () {
        var panels = $(".h-panel");
        var $h = $("#hPanels");
        var $h1 = $(".p1");
        var $h2 = $(".p2");
        var $h3 = $(".p3");
        var $body = $("body");

        $.scrollify({
          section: ".s-scroll",
          scrollSpeed: 800,
          setHeights: true,
          touchScroll: true,
          offset: 0,
          before: function (i) {
            // i = scroll section index
            if (i === 0) {
              // show preview mode
              $body.removeClass("layout-active");
              $h.css("transform", "translateX(-40vw)");
              $h1.css("transform", "translateX(0)");
              $h.css("z-index", "0");
              $h2.css("transform", "translateX(-40vw)");
              $h3.css("transform", "translateX(-120vw)");
            } else {
              // activate full-screen horizontal mode
              $body.addClass("layout-active");
              $h.css("z-index", "99");
              $h1.css("transform", "translateX(-40vw)");
              $h.css("transform", "translateX(" + -(i - 1) * 100 + "vw)");
              $h2.css("transform", "translateX(-40vw)");
              $h3.css("transform", "translateX(-40vw)");
            }

            panels
              .removeClass("active")
              .eq(i - 1)
              .addClass("active");
          },
          afterRender: function () {
            // start at preview state
            $.scrollify.move("#anchor-0");
          },
        });
      });
