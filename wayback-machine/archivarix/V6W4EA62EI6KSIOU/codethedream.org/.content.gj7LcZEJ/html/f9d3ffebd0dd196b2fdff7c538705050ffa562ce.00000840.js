var sowb=window.sowb||{};sowb.SiteOriginSlider=function(e){return{playSlideVideo:function(i){e(i).find("video").each((function(){void 0!==this.play&&this.play()}));var t=e(i).find(".sow-slide-video-oembed iframe");t.length&&(t[0].contentWindow.postMessage('{"method":"play"}',"*"),t[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"))},pauseSlideVideo:function(i){e(i).find("video").each((function(){void 0!==this.pause&&this.pause()}));var t=e(i).find(".sow-slide-video-oembed iframe");t.length&&(t[0].contentWindow.postMessage('{"method":"pause"}',"*"),t[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"))},setupActiveSlide:function(i,t,s){var o=e(i).find(".cycle-sentinel"),n=e(t),a=n.find("video.sow-background-element"),d=e(i).prev();if(void 0===s?o.css("height",n.outerHeight()+"px"):o.animate({height:n.outerHeight()},s),d.length){e(i).find(".sow-slider-image > video").prop("muted",!0);var l=n.find("> video");if(l.length){d.clearQueue().fadeIn(s);var r=d.siblings(".sow-slider-images").data("settings");l.hasClass("sow-player-unmuted")?(l.prop("muted",!1),d.addClass("sow-player-unmuted"),d.attr("aria-label",r.muteLoc)):(d.removeClass("sow-player-unmuted"),d.attr("aria-label",r.unmuteLoc))}else d.clearQueue().fadeOut(s)}a.length&&(n.outerWidth()/n.outerHeight()>a.outerWidth()/a.outerHeight()?a.css({width:"100%",height:"auto"}):a.css({width:"auto",height:"100%"}),a.css({"margin-left":-Math.ceil(a.width()/2),"margin-top":-Math.ceil(a.height()/2)}))}}},jQuery((function(e){sowb.setupSliders=sowb.setupSlider=function(){var i=new sowb.SiteOriginSlider(e);e(".sow-slider-images").each((function(){var t=e(this);if(t.data("initialized"))return t;var s=t.siblings(".sow-slider-pagination"),o=t.closest(".sow-slider-base"),n=o.find(".sow-slide-nav"),a=t.find(".sow-slider-image"),d=t.data("settings");d.breakpoint&&e(window).on("load resize",(function(){window.matchMedia("(max-width: "+d.breakpoint+")").matches?o.addClass("sow-slider-is-mobile"):o.removeClass("sow-slider-is-mobile")})),a.each((function(i,t){var s=e(t),o=s.data("url");void 0!==o&&o.hasOwnProperty("url")&&(s.on("click",(function(e){e.preventDefault(),window.open(o.url,o.hasOwnProperty("new_window")&&o.new_window?"_blank":"_self").opener=null})),s.find("a").on("click",(function(e){e.stopPropagation()})))}));var l=function(){var r=t.closest(".so-widget-fittext-wrapper");if(r.length>0&&!r.data("fitTextDone"))r.on("fitTextDone",(function(){l()}));else{var c=t.find(".sow-slider-image-parallax:not([data-siteorigin-parallax]) ");c.length&&o.css("opacity",0),o.show();var u=function(){t.find(".sow-slider-image").each((function(){var i=e(this);i.css("height",i.find(".sow-slider-image-wrapper").outerHeight()+"px")}))};if(e(window).on("resize panelsStretchRows",u).trigger("resize"),e(sowb).on("setup_widgets",u),c.length){if(!c.find(".simpleParallax").length)return void setTimeout(l,50);window.dispatchEvent(new Event("resize")),setTimeout((function(){o.css("opacity",1)}),425)}if(t.trigger("slider_setup_before"),t.on({"cycle-after":function(t,s,o,n,a){var d=e(this);i.playSlideVideo(n),i.setupActiveSlide(d,n),e(n).trigger("sowSlideCycleAfter")},"cycle-before":function(t,o,n,a,d){var l=e(this);s.find("> li").removeClass("sow-active").eq(o.slideNum-1).addClass("sow-active"),i.pauseSlideVideo(n),i.setupActiveSlide(l,a,o.speed),e(a).trigger("sowSlideCycleBefore")},"cycle-initialized":function(o,a){i.playSlideVideo(e(this).find(".cycle-slide-active")),i.setupActiveSlide(t,a.slides[0]),s.find(">li").removeClass("sow-active").eq(0).addClass("sow-active"),e(this).find(".cycle-slide-active").trigger("sowSlideInitial"),a.slideCount<=1&&(s.hide(),n.hide()),e(window).trigger("resize"),setTimeout((function(){u(),i.setupActiveSlide(t,a.slides[0]),t.find(".cycle-sentinel").empty()}),200)}}).cycle({slides:"> .sow-slider-image",speed:d.speed,timeout:d.timeout,swipe:d.swipe,paused:d.paused,pauseOnHover:d.pause_on_hover,"swipe-fx":"scrollHorz",log:!1}),t.find("video.sow-background-element").on("loadeddata",(function(){i.setupActiveSlide(t,t.find(".cycle-slide-active"))})),s.add(n).hide(),a.length>1)if(o.hasClass("sow-slider-is-mobile"))d.nav_always_show_mobile&&window.matchMedia("(max-width: "+d.breakpoint+")").matches&&(s.show(),n.show());else if(d.nav_always_show_desktop&&window.matchMedia("(min-width: "+d.breakpoint+")").matches)s.show(),n.show();else{var w=!1;o.on("mouseenter",(function(){s.add(n).clearQueue().fadeIn(150),w=!1})).on("mouseleave",(function(){w=!0,setTimeout((function(){w&&s.add(n).clearQueue().fadeOut(150),w=!1}),750)}))}var f=function(){i.setupActiveSlide(t,t.find(".cycle-slide-active"))};e(window).on("resize",f),e(sowb).on("setup_widgets",f),s.find("> li > a").on("click",(function(i){i.preventDefault(),t.cycle("goto",e(this).data("goto"))})),n.find("> a").on("click",(function(i){i.preventDefault(),t.cycle(e(this).data("action"))})),o.on("keydown",(function(e){37===e.which?t.cycle("prev"):39===e.which&&t.cycle("next")})),d.unmute&&o.find(".sow-player-controls-sound").on("click",(function(){var i=e(this),t=i.next().find(".cycle-slide-active > video");t.prop("muted",!t.prop("muted")),t.prop("muted")?(i.removeClass("sow-player-unmuted"),t.removeClass("sow-player-muted"),i.attr("aria-label",d.unmuteLoc)):(i.addClass("sow-player-unmuted"),t.addClass("sow-player-unmuted"),i.attr("aria-label",d.muteLoc))}))}};t.trigger("slider_setup_after");var r=t.find("img.sow-slider-background-image, img.sow-slider-foreground-image"),c=0,u=!1;r.each((function(){e(this);this.complete?c++:e(this).one("load",(function(){++c!==r.length||u||(l(),u=!0)})).attr("src",e(this).attr("src")),c!==r.length||u||(l(),u=!0)})),0===r.length&&l(),t.data("initialized",!0)}))},sowb.setupSliders(),e(sowb).on("setup_widgets",sowb.setupSliders)})),window.sowb=sowb;