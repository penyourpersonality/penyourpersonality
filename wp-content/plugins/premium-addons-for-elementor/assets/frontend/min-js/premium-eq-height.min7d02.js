!function(r){r(window).on("elementor/frontend/init",function(){function e(e){e.hasClass("premium-equal-height-yes")&&function(e){var o=e,n=(elementorFrontend.isEditMode()?o.find("#premium-temp-equal-height-"+o.data("id")):o).data("pa-eq-height");if(!n)return;var t=n.enableOn;if(0===Object.keys(n).length)return;function i(){t.includes(elementorFrontend.getCurrentDeviceMode())&&0!==n.target.length?n.target.forEach(function(e){var n,t,i;n=e,t=o.find(n),i=[],o.find(n).css("minHeight","unset"),jQuery.each(t,function(e,n){i.push(r(n).outerHeight(!0))}),o.find(n).css("minHeight",Math.max.apply(null,i))}):o.find(n.target).css("minHeight","unset")}i(),window.onresize=i}(e)}elementorFrontend.hooks.addAction("frontend/element_ready/section",e),elementorFrontend.hooks.addAction("frontend/element_ready/container",e)})}(jQuery);