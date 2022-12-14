jQuery(function($){

	if($.browser.msie && $.browser.version == "8.0") {
		ie8 = true;
	} else if($.browser.msie && $.browser.version == "7.0") {
		jQuery('body').addClass('ie7');
	}

	jQuery(".irw-widget").each(function(){
		irw_init(jQuery(this));
	});

});

var ie8 = false;

var image_set_width;
var image_set_height = 0;
var image_set_position;
var image_set;

function irw_init(element) {
	var widget = element;
	var slider = widget.children(".irw-slider");
	var parent = widget.parent();
	var transition = widget.children(".irw-transition").val();
	var speed = widget.children(".irw-transition-speed").val();
	widget.css({ 'position': 'relative', 'z-index': '0' });
	slider.css({ 'z-index': '2' }).find("li img").css('max-width', 'none');
	if(parent.width() > parent.height()) {
		var n = parent.width();
	} else {
		var n = parent.height();
	}
	widget.addClass('loading').css({
		width: n
	}).children('.irw-slider').css({ visibility: 'hidden' });

	switch(transition) {
		case "linear" :
			slider.imagesLoaded(function(img){
				irw_load_linear(img, widget, slider, speed);
			});
			break;
		case "loop" :
			//slider.html(slider.html() + slider.html());
			slider.imagesLoaded(function(img){
				irw_load_loop(img, widget, slider, speed);
			});
			break;
		case "fade" :
			slider.imagesLoaded(function(img){
				irw_load_fade(img, widget, slider, speed);
			});
			break;
		default :
			alert("This isn't the transition you're looking for.");
			break;
	}
}

/**
 * Speed Modifier
 */
function speed_modifier(mod, speed) {
	if(mod > 0 && mod < 21) {
		var r = speed * (mod / 20);
		return speed + (r*2);
	} else {
		return speed;
	}
}


///////////////////////////////
//		Fade Animation
//////////////////////////////

function irw_load_fade(img, widget, slider, speed) {
	var width_array = new Array();
	var height_array = new Array();
	var image_set_height = 0;
	
	if (typeof(img.images) != "undefined") {
		jQuery(img.images).each(function(i){
			width_array[i] = jQuery(this.img).width();
			height_array[i] = jQuery(this.img).height();
			if(height_array[i] > image_set_height) {
				image_set_height = height_array[i];
			}
		});
	}
	else {
		img.each(function(i){
			width_array[i] = jQuery(this).width();
			height_array[i] = jQuery(this).height();
			if(height_array[i] > image_set_height) {
				image_set_height = height_array[i];
			}
		});
	}
	
	widget.height(image_set_height + "px");

	slider.find("li:first-child").addClass("active");
	slider.find("li:not(.active)").css({
		position: "relative",
		top: "0px",
		left: "0px",
		display: "none"
	});
	widget.removeClass('loading').children('.irw-slider').css({ visibility: 'visible', margin: "0px" });
	setTimeout(function(){
		irw_fade(img, widget, slider, speed);
	}, speed_modifier(speed, 5000));
}

function irw_fade(img, widget, slider, speed) {
	var active = slider.children(".active");
	if(active.is(slider.find("li:last-child"))) {
		var next = slider.find("li:first-child");
	} else {
		var next = active.next();
	}

	active.fadeOut(speed_modifier(speed, 2500), "linear", function() {
		active.removeClass("active");
		next.addClass("active").fadeIn(speed_modifier(speed, 2500), "linear", function(){
			setTimeout(function(){
				irw_fade(img, widget, slider, speed);
			}, speed_modifier(speed, 5000));	
		});
	});
}


///////////////////////////////
//		Linear Animation
//////////////////////////////

function irw_load_linear(img, widget, slider, speed) {
	var width_array = new Array();
	var height_array = new Array();
	var image_set_height = 0;
	
	if (typeof(img.images) != "undefined") {
		jQuery(img.images).each(function(i){
			width_array[i] = jQuery(this.img).width();
			height_array[i] = jQuery(this.img).height();
			if(height_array[i] > image_set_height) {
				image_set_height = height_array[i];
			}
		});
	}
	else {
		img.each(function(i){
			width_array[i] = jQuery(this).width();
			height_array[i] = jQuery(this).height();
			if(height_array[i] > image_set_height) {
				image_set_height = height_array[i];
			}
		});
	}
	
	widget.height(image_set_height + "px");
	widget.attr('data-rand', Math.floor(Math.random()*9999));
	var slider_width = 0;
	for(i=0;i < width_array.length;i++) {
		slider_width += width_array[i];
	}
	slider_width += 20 * width_array.length;
	slider.children('li').css({ 'margin-right': '20px', 'max-width': 'none' });
	widget.removeClass('loading').children('.irw-slider').css({ visibility: 'visible', width: slider_width + "px", margin: "0px", position: 'relative'  });

	var w = slider_width - widget.width();
	var duration = speed_modifier(speed, slider_width * 40);

	irw_linear(w, slider, duration);
}

function irw_linear(width, slider, duration) {
	slider.animate({
		left: "-" + width + "px"
	}, duration, 'linear', function(){
		irw_linear_reverse(width, slider, duration);
	});
}

function irw_linear_reverse(width, slider, duration) {
	slider.animate({
		left: "0px"
	}, duration, 'linear', function(){
		irw_linear(width, slider, duration);
	});
}


///////////////////////////////
//		Loop Animation
//////////////////////////////

function irw_load_loop(img, widget, slider, speed) {
	var width_array = new Array();
	var height_array = new Array();
	var image_set_height = 0;
	
	if (typeof(img.images) != "undefined") {
		jQuery(img.images).each(function(i){
			width_array[i] = jQuery(this.img).width();
			height_array[i] = jQuery(this.img).height();
			if(height_array[i] > image_set_height) {
				image_set_height = height_array[i];
			}
		});
	}
	else {
		img.each(function(i){
			width_array[i] = jQuery(this).width();
			height_array[i] = jQuery(this).height();
			if(height_array[i] > image_set_height) {
				image_set_height = height_array[i];
			}
		});
	}
	
	widget.height(image_set_height + "px");
	var slider_width = 0;
	for(i=0;i < width_array.length;i++) {
		slider_width += width_array[i];
	}
	slider_width += 20 * width_array.length;
	image_set_width = slider_width;
	slider.children('li').css('margin-right', '20px');
	widget.removeClass('loading').children('.irw-slider').css({ visibility: 'visible', width: slider_width + "px", margin: "0px", position: 'relative'  });

	var w = slider_width - widget.width();
	var first_duration = speed_modifier(speed, w * 75);
	var duration = speed_modifier(speed, slider_width * 75);

	slider.animate({
		left: "-" + w + "px"
	}, first_duration, 'linear', function(){
		image_set = slider.html();
		if(!ie8) {
			slider.append(image_set).width(slider.width() + image_set_width + "px");
		} else {
			slider.append(image_set).width(slider.width() + image_set_width + 10 + "px");
		}
		irw_loop(w, slider, duration, true);
	});

}

function irw_loop(width, slider, duration, first) {
	if(first) {
		image_set_position = width + image_set_width;
	} else {
		image_set_position += image_set_width;
	}
	slider.animate({
		left: "-" + image_set_position + "px"
	}, duration, 'linear', function(){
		if(!ie8) {
			slider.append(image_set).width(slider.width() + image_set_width + "px");
		} else {
			slider.append(image_set).width(slider.width() + image_set_width + 10 + "px");
		}
		irw_loop(width, slider, duration, false);
	});
}