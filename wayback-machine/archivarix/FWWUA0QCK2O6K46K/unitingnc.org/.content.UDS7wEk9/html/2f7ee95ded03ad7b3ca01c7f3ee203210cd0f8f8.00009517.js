!function($,w){"use strict";var methods=function(){var c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},ios=function(){var ios=/iPhone|iPad|iPod/i.test(navigator.userAgent);return ios&&$(w).load(function(){$("body").children().on("click",$.noop)}),ios}(),wp7=function(){var style=document.documentElement.style;return"behavior"in style&&"fill"in style&&/iemobile/i.test(navigator.userAgent)}(),unprefixedPointerEvents=function(){return!!w.PointerEvent}(),toggleMenuClasses=function($menu,o){var classes=c.menuClass;o.cssArrows&&(classes+=" "+c.menuArrowClass),$menu.toggleClass(classes)},setPathToCurrent=function($menu,o){return $menu.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+c.bcClass).filter(function(){return $(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},toggleAnchorClass=function($li){$li.children("a").toggleClass(c.anchorClass)},toggleTouchAction=function($menu){var msTouchAction=$menu.css("ms-touch-action"),touchAction=$menu.css("touch-action");touchAction=touchAction||msTouchAction,touchAction="pan-y"===touchAction?"auto":"pan-y",$menu.css({"ms-touch-action":touchAction,"touch-action":touchAction})},applyHandlers=function($menu,o){var targets="li:has("+o.popUpSelector+")";$.fn.hoverIntent&&!o.disableHI?$menu.hoverIntent(over,out,targets):$menu.on("mouseenter.superfish",targets,over).on("mouseleave.superfish",targets,out);var touchevent="MSPointerDown.superfish";unprefixedPointerEvents&&(touchevent="pointerdown.superfish"),ios||(touchevent+=" touchend.superfish"),wp7&&(touchevent+=" mousedown.superfish"),$menu.on("focusin.superfish","li",over).on("focusout.superfish","li",out).on(touchevent,"a",o,touchHandler)},touchHandler=function(e){var $this=$(this),$ul=$this.siblings(e.data.popUpSelector);$ul.length>0&&$ul.is(":hidden")&&($this.one("click.superfish",!1),"MSPointerDown"===e.type||"pointerdown"===e.type?$this.trigger("focus"):$.proxy(over,$this.parent("li"))())},over=function(){var $this=$(this),o=getOptions($this);clearTimeout(o.sfTimer),$this.siblings().superfish("hide").end().superfish("show")},out=function(){var $this=$(this),o=getOptions($this);ios?$.proxy(close,$this,o)():(clearTimeout(o.sfTimer),o.sfTimer=setTimeout($.proxy(close,$this,o),o.delay))},close=function(o){o.retainPath=$.inArray(this[0],o.$path)>-1,this.superfish("hide"),this.parents("."+o.hoverClass).length||(o.onIdle.call(getMenu(this)),o.$path.length&&$.proxy(over,o.$path)())},getMenu=function($el){return $el.closest("."+c.menuClass)},getOptions=function($el){return getMenu($el).data("sf-options")};return{hide:function(instant){if(this.length){var $this=this,o=getOptions($this);if(!o)return this;var not=o.retainPath===!0?o.$path:"",$ul=$this.find("li."+o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),speed=o.speedOut;instant&&($ul.show(),speed=0),o.retainPath=!1,o.onBeforeHide.call($ul),$ul.stop(!0,!0).animate(o.animationOut,speed,function(){var $this=$(this);o.onHide.call($this)})}return this},show:function(){var o=getOptions(this);if(!o)return this;var $this=this.addClass(o.hoverClass),$ul=$this.children(o.popUpSelector);return o.onBeforeShow.call($ul),$ul.stop(!0,!0).animate(o.animation,o.speed,function(){o.onShow.call($ul)}),this},destroy:function(){return this.each(function(){var $hasPopUp,$this=$(this),o=$this.data("sf-options");return o?($hasPopUp=$this.find(o.popUpSelector).parent("li"),clearTimeout(o.sfTimer),toggleMenuClasses($this,o),toggleAnchorClass($hasPopUp),toggleTouchAction($this),$this.off(".superfish").off(".hoverIntent"),$hasPopUp.children(o.popUpSelector).attr("style",function(i,style){return style.replace(/display[^;]+;?/g,"")}),o.$path.removeClass(o.hoverClass+" "+c.bcClass).addClass(o.pathClass),$this.find("."+o.hoverClass).removeClass(o.hoverClass),o.onDestroy.call($this),void $this.removeData("sf-options")):!1})},init:function(op){return this.each(function(){var $this=$(this);if($this.data("sf-options"))return!1;var o=$.extend({},$.fn.superfish.defaults,op),$hasPopUp=$this.find(o.popUpSelector).parent("li");o.$path=setPathToCurrent($this,o),$this.data("sf-options",o),toggleMenuClasses($this,o),toggleAnchorClass($hasPopUp),toggleTouchAction($this),applyHandlers($this,o),$hasPopUp.not("."+c.bcClass).superfish("hide",!0),o.onInit.call(this)})}}}();$.fn.superfish=function(method){return methods[method]?methods[method].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof method&&method?$.error("Method "+method+" does not exist on jQuery.fn.superfish"):methods.init.apply(this,arguments)},$.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:$.noop,onBeforeShow:$.noop,onShow:$.noop,onBeforeHide:$.noop,onHide:$.noop,onIdle:$.noop,onDestroy:$.noop}}(jQuery,window);