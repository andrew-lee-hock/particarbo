$(document).ready(function() {
  /****Anchor Menu Behavior****/
  anchorMenuLinks = $("#contents-index ul li a");
  anchorHeader = $(".top-link a");
  if ($(anchorMenuLinks).length) {
    /****Scroll****/
    $(window).on("scroll", function() {
      sections = $("section");
      anchorMenu = $("#contents-index");
      menuHeight = anchorMenu.outerHeight();
      here = $(this).scrollTop();
      sections.each(function() {
        var top = $(this).offset().top - menuHeight;
        if (here > top) {
          anchorMenuLinks.removeClass("active");
          selectedLink = anchorMenu.find('a[href*="#' + $(this).attr("id") + '"]');
          selectedLink.delay(800).addClass("active");
        };
      })
    })

    /****Click****/
    $(anchorMenuLinks).click(function(e) {
      var contentSection = $(this.hash);
      if (
        $(anchorMenuLinks)
          .siblings()
          .attr("class*= active")
      ) {
        $(this)
          .siblings()
          .removeClass("active");
            $(this).addClass("active");
      }
      
      if (contentSection.length) {
        e.preventDefault();
        $("html").animate( {scrollTop: contentSection.offset().top - 76}, 300);
      } else {
         document.getElementByID("anchors-column").style.visibility = "hidden";
         document.getElementByID("anchors-column").style.display = "none";
      }
    })
    
    $(".top-link a").click(function(e) {
      e.preventDefault();
      $(anchorMenuLinks).siblings().removeClass("active");
      $("html").animate({ scrollTop: 0 }, 300);
    })
  } else {
    document.querySelector("#anchors-column").style.display = "none";
  };

  /****Show Navigation and Hide Overlay if window is resized****/
  $(window).on("resize", function() {
    if ($(window).width() > 1279) {
      document.getElementById("leftnav-container").style.marginLeft = "0";
      document.getElementById("overlay").style.display = "none";
    }
    if ($(window).width() < 1280) {
      if ($("input[id=icon-checkbox]").is(":checked")) {
        document.getElementById("icon-checkbox").click();
        document.getElementById("overlay").style.display = "none";
        document.getElementById("sm-hdrsearch").style.display = "none";
        document.getElementById("icon-checkbox").removeAttribute("onclick");
        document
          .getElementById("icon-checkbox")
          .setAttribute("onclick", "openNav()");
      }
      document.getElementById("overlay").style.display = "none";
      if ($("input[id=icon-checkbox]").is(":checked") == false) {
        $("input[id=icon-checkbox]").attr("checked", true);
        $("div[id=leftnav-container]").attr("style", 'marginLeft = "-350px"');
      }
    }
  });

  /****Icon Library- Unique ID / Modal Functionality****/
  $(".modal-trigger").each(function(i, btn) {
    var inc = i + 1;
    $(btn).attr("id", "download" + inc);
    $(btn).attr("onclick", "downloadIcon(" + inc + ")");
  });
  $(".download-modal").each(function(i, target) {
    var inc = i + 1;
    $(target).attr("id", "modal" + inc);
  });
  $(".close").each(function(i, cl) {
    var inc = i + 1;
    $(cl).attr("onclick", "closeModal(" + inc + ")");
  });
  /****End Icon Library****/

  /****Collapse on click - left navigation sections****/
  $("li.prt-menu-section .prt-menu-section").click(function() {
    $(this).hide();
  });

  /****Old Active Tab Indicator
	$('ul.tab li').first().addClass('active');

	$('ul.tab li a').click(function (e) {
		e.preventDefault();

		var tab_id = $(this).attr('data-tab');

		$('ul.tab li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).parent().addClass('active');
		$("#" + tab_id).addClass('active');
	})****/

  /****Search button interaction****/
  $("#topnav .search").focus(function() {
    $("#topnav .prt-header-nav .nav-item").fadeOut(300);
  });
  $("#topnav .search").blur(function() {
    $("#topnav .prt-header-nav .nav-item").fadeIn(300);
  });

  /****Egg****/
  if (window.location.pathname.includes("/search/results")) easterEgg();

  function easterEgg() {
    const searchParam = getUrlParameter("q");
    const phrase = "makeparticlegreatagain";

    if (
      searchParam.replace(/[^a-zA-Z ]/g, "").toUpperCase() ===
      phrase.toUpperCase()
    ) {
      const styles = {
        width: "800px",
        position: "absolute",
        bottom: "-400px",
        left: "calc(50% - 400px)"
      };

      $(".prt-container").append(
        $("<img src='/assets/img/ee.png' />")
          .css(styles)
          .animate(
            {
              bottom: "0px"
            },
            1500
          )
      );
    }

    function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined
            ? true
            : decodeURIComponent(sParameterName[1]);
        }
      }
    }
  }
  /****End Egg****/

  /****EOF****/
});
