var sowb=window.sowb||{};jQuery((function(i){sowb.setupImageGrids=function(){i(".sow-image-grid-wrapper").each((function(){var t=i(this);t.imagesLoaded((function(){var a=t.data("max-width"),e=t.data("max-height");void 0!==a||void 0!==e?t.find("img").each((function(){var t=i(this).css("opacity",1),o=t.width()/t.height(),s=[];void 0!==a&&t.width()>a&&s.push(a),void 0!==e&&t.height()>e&&s.push(Math.round(e*o)),s.length&&(s=Math.min.apply(Math,s),t.css("max-width",s+"px"))})):t.find("img").css("opacity",1);var o=function(){};i(window).on("resize",o);var s=document.createEvent("Event");s.initEvent("layoutComplete",!0,!0),t.get(0).dispatchEvent(s)}))}))},sowb.setupImageGrids(),i(sowb).on("setup_widgets",sowb.setupImageGrids)})),window.sowb=sowb;