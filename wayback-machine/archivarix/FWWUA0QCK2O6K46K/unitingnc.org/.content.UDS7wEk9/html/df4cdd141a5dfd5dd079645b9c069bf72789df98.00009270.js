!function(e,t,a,r,i,s,n,_,u,p){a(function(){var l=a('[class^="tribe-events-nav-"] a'),o="/";function d(){a(".tribe-events-day-time-slot").length&&(a(".tribe-events-day-time-slot").find(".vevent:last").addClass("tribe-events-last"),a(".tribe-events-day-time-slot:first").find(".vevent:first").removeClass("tribe-events-first"))}if(void 0!==u.events_base?o=u.events_base:l.length&&(o=l.first().attr("href").slice(0,-11)),n.filter_cats&&(o=a("#tribe-events-header").data("baseurl").slice(0,-11)),r.default_permalinks&&(o=o.split("?")[0]),n.date=a("#tribe-events-header").data("date"),d(),_.pushstate&&!_.map_view()){var v="action=tribe_event_day&eventDate="+n.date;r.params.length&&(v=v+"&"+r.params),n.category&&(v=v+"&tribe_event_category="+n.category),s.is_featured()&&(v+="&featured=1"),a(t.getElementById("tribe-events")).is(".tribe-events-shortcode")&&!1===u.update_urls.shortcode.day||history.replaceState({tribe_params:v,tribe_url_params:r.params},"",location.href),a(e).on("popstate",function(e){var t=e.originalEvent.state;t&&(n.do_string=!1,n.pushstate=!1,n.popping=!0,n.params=t.tribe_params,s.pre_ajax(function(){c()}),s.set_form(n.params))})}function c(){s.invalid_date(n.date)||(n.pushcount=0,n.ajax_running=!0,n.popping||(n.url_params={},n.params={action:"tribe_event_day",eventDate:n.date,featured:s.is_featured()},n.url_params={action:"tribe_event_day"},n.url_params.hasOwnProperty("tribe_event_display")||(n.url_params.tribe_event_display=n.view),n.category&&(n.params.tribe_event_category=n.category),r.default_permalinks&&(n.url_params.hasOwnProperty("eventDate")||(n.url_params.eventDate=n.date),n.url_params.hasOwnProperty("post_type")||(n.url_params.post_type=u.events_post_type),n.url_params.hasOwnProperty("eventDisplay")||(n.url_params.eventDisplay=n.view)),a(i).trigger("tribe_ev_serializeBar"),n.params=a.param(n.params),n.url_params=a.param(n.url_params),a(i).trigger("tribe_ev_collectParams"),n.pushstate=!0,n.do_string=!1,(n.pushcount>0||n.filters||r.default_permalinks)&&(n.pushstate=!1,n.do_string=!0)),_.pushstate&&!n.filter_cats?(p&&tec_debug.time("Day View Ajax Timer"),a(i).trigger("tribe_ev_ajaxStart").trigger("tribe_ev_dayView_AjaxStart"),a("#tribe-events-content .tribe-events-loop").tribe_spin(),a.post(TribeCalendar.ajaxurl,n.params,function(e){if(n.initial_load=!1,s.enable_inputs("#tribe_events_filters_form","input, select"),e.success){n.ajax_running=!1,r.ajax_response={total_count:parseInt(e.total_count),view:e.view,max_pages:"",tribe_paged:"",timestamp:(new Date).getTime()};var _=a.parseHTML(e.html);a("#tribe-events-content").replaceWith(_),0===e.total_count&&a("#tribe-events-header .tribe-events-sub-nav").empty(),a(".tribe-events-promo").next(".tribe-events-promo").remove(),n.page_title=a("#tribe-events-header").data("title"),n.view_title=a("#tribe-events-header").data("viewtitle"),t.title=n.page_title,a(".tribe-events-page-title").html(n.view_title),r.cur_url=s.get_base_url(),(a("#tribe-events.tribe-events-shortcode").length||n.do_string)&&(-1!==r.cur_url.indexOf("?")&&(r.cur_url=r.cur_url.split("?")[0]),r.cur_url=r.cur_url+"?"+n.url_params);var l=!a(t.getElementById("tribe-events")).is(".tribe-events-shortcode")||!1!==u.update_urls.shortcode.day;n.do_string&&l&&history.pushState({tribe_date:n.date,tribe_params:n.params},n.page_title,r.cur_url),n.pushstate&&l&&history.pushState({tribe_date:n.date,tribe_params:n.params},n.page_title,r.cur_url),d(),a(i).trigger("tribe_ev_ajaxSuccess").trigger("tribe_ev_dayView_AjaxSuccess"),a(i).trigger("ajax-success.tribe").trigger("tribe_ev_dayView_AjaxSuccess"),p&&tec_debug.timeEnd("Day View Ajax Timer")}})):n.url_params.length?e.location=r.cur_url+"?"+n.url_params:e.location=r.cur_url)}a("#tribe-events").on("click",".tribe-events-nav-previous a, .tribe-events-nav-next a",function(e){if(e.preventDefault(),!n.ajax_running&&!n.updating_picker){var t=a(this);n.popping=!1,n.date=t.attr("data-day"),n.filter_cats?r.cur_url=o+n.date+"/":r.cur_url=t.attr("href"),s.update_picker(n.date),s.pre_ajax(function(){c()})}}),s.snap("#tribe-events-bar","#tribe-events","#tribe-events-footer .tribe-events-nav-previous a, #tribe-events-footer .tribe-events-nav-next a"),a("form#tribe-bar-form").on("submit",function(e){!function(e){if("change_view"!=tribe_events_bar_action){if(e.preventDefault(),n.ajax_running)return;var t=a("#tribe-bar-date").val();n.popping=!1,t.length?(n.date=a("#tribe-bar-date").val(),r.cur_url=r.default_permalinks?o+"="+r.cur_date:o+r.cur_date+"/"):(n.date=r.cur_date,r.cur_url=r.default_permalinks?o+"="+r.cur_date:o+r.cur_date+"/"),s.pre_ajax(function(){c()})}}(e)}),(_.no_bar()||_.live_ajax()&&_.pushstate)&&a("#tribe-bar-date").on("changeDate",function(e){if(!n.updating_picker&&!_.reset_on()){n.popping=!1;let e=n.datepicker_format.toString();"0"!==n.datepicker_format?n.date=tribeUtils.formatDateWithMoment(a(this).bootstrapDatepicker("getDate"),"tribeQuery",e):n.date=a(this).val(),r.cur_url=r.default_permalinks?o:o+n.date+"/",s.pre_ajax(function(){c()})}}),a(i).on("tribe_ev_runAjax",function(){c()}),a(i).on("tribe_ev_updatingRecurrence",function(){n.filter_cats?r.cur_url=r.default_permalinks?o+"="+r.cur_date:o+r.cur_date+"/":r.cur_url=a("#tribe-events-header").attr("data-baseurl"),n.popping=!1}),p&&tec_debug.info("TEC Debug: tribe-events-ajax-day.js successfully loaded"),n.view&&p&&tec_debug.timeEnd("Tribe JS Init Timer")})}(window,document,jQuery,tribe_ev.data,tribe_ev.events,tribe_ev.fn,tribe_ev.state,tribe_ev.tests,tribe_js_config,tribe_debug);