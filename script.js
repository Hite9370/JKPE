  $(function () {
        var panels = $(".h-panel");
        var panelsCount = panels.length;
        var $h = $("#hPanels");

        // build dots
        for (var i = 0; i < panelsCount; i++) {
          $("#dots").append(
            '<button class="dot" data-index="' +
              i +
              '" aria-label="Go to slide ' +
              (i + 1) +
              '"></button>'
          );
        }

        // Scrollify init (vertical anchors must exist)
        $.scrollify({
          section: ".s-scroll",
          scrollSpeed: 700,
          offset: 0,
          setHeights: true, // let Scrollify set anchors to 100vh
          touchScroll: true,
          before: function (i, sections) {
            // translate horizontal strip
            $h.css("transform", "translateX(" + -i * 100 + "vw)");
            // panel active class
            panels.removeClass("active").eq(i).addClass("active");
            // dot states
            $(".dot").removeClass("active").eq(i).addClass("active");
          },
          afterRender: function () {
            // set initial states
            $(".dot").first().addClass("active");
            panels.first().addClass("active");

            // dot click -> move to index
            $(".dot").on("click", function () {
              var idx = $(this).data("index");
              $.scrollify.move(idx);
            });

            // keyboard left/right support (optional)
            $(document).on("keydown", function (e) {
              if (e.key === "ArrowRight") $.scrollify.next();
              if (e.key === "ArrowLeft") $.scrollify.previous();
            });
          },
        });
      });
    
    
