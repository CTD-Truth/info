/*! swipe plugin for Cycle2;  version: 20121120 */
!function(e){"use strict";document;e.event.special.swipe=e.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var i=e(this);i.bind("touchstart",(function(t){var s,o=t.originalEvent.touches?t.originalEvent.touches[0]:t,n={time:(new Date).getTime(),coords:[o.pageX,o.pageY],origin:e(t.target)};function r(i){if(n){var t=i.originalEvent.touches?i.originalEvent.touches[0]:i;s={time:(new Date).getTime(),coords:[t.pageX,t.pageY]},Math.abs(n.coords[0]-s.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&i.preventDefault()}}i.bind("touchmove",r).one("touchend",(function(t){i.unbind("touchmove",r),n&&s&&s.time-n.time<e.event.special.swipe.durationThreshold&&Math.abs(n.coords[0]-s.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(n.coords[1]-s.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&n.origin.trigger("swipe").trigger(n.coords[0]>s.coords[0]?"swipeleft":"swiperight"),n=s=void 0}))}))}},e.event.special.swipeleft=e.event.special.swipeleft||{setup:function(){e(this).bind("swipe",e.noop)}},e.event.special.swiperight=e.event.special.swiperight||e.event.special.swipeleft}(jQuery);