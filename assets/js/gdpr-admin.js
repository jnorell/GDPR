!function(t){"use strict";t(function(){t(document).on("click",".gdpr-options .notice-dismiss",function(){t(this).parent().parent().remove()}),t(".add-tab").click(function(a){a.preventDefault();var e=t("#cookie-tabs");if(""!==e.val()){var n=e.val().toLowerCase().replace(/ /g,"-"),i=e.val(),s=wp.template("cookie-tabs");t("#tabs").append(s({key:n,name:i,option_name:GDPR.cookie_popup_content})),e.val("")}}),t(document).on("click",".add-host",function(a){a.preventDefault();var e=t(this).siblings("input");if(""!==e.val()){var n=t(this).data("tabid"),i=e.val().toLowerCase().replace(" ","-"),s=wp.template("cookie-tabs-hosts");t('.tab-hosts[data-tabid="'+n+'"]').append(s({host_key:i,tab_key:n,option_name:GDPR.cookie_popup_content})),e.val("")}}),t(document).on("click","#tabs .notice-dismiss",function(a){a.preventDefault(),t(this).closest(".postbox").remove()}),t(document).on("click",".gdpr-request-table .gdpr-review",function(a){a.preventDefault();var e=t(this).data("index");t("tr[data-index="+e+"] div").slideToggle()}),t(document).on("click",".gdpr .nav-tab-wrapper a",function(a){var e=t(this).attr("href");if(e=e.replace("#",""),t(this).addClass("nav-tab-active"),t(this).siblings().removeClass("nav-tab-active"),t(".gdpr .tab").addClass("hidden"),t(".gdpr .tab[data-id="+e+"]").removeClass("hidden"),-1!==location.search.indexOf("page=gdpr-settings")){var n=t('.gdpr form input[name="_wp_http_referer"]'),i=n.val().split("#")[0];n.val(i+"#"+e)}});var a=window.location.hash;if(a){if(t('.gdpr .nav-tab-wrapper a[href="'+a+'"]').addClass("nav-tab-active"),t('.gdpr .tab[data-id="'+a.replace("#","")+'"]').removeClass("hidden"),-1!==location.search.indexOf("page=gdpr-settings")){var e=t('.gdpr form input[name="_wp_http_referer"]'),n=e.val().split("#")[0];e.val(n+a)}}else t(".gdpr .nav-tab-wrapper a:eq(0)").addClass("nav-tab-active"),t(".gdpr .tab:eq(0)").removeClass("hidden");t(document).on("change",".gdpr-reassign",function(){0!=t(this).val()?(t(this).closest("tr").find("td:last .button-primary").attr("disabled",!1),t(this).closest("tr").find('td:last input[name="reassign_to"]').val(t(this).val())):(t(this).closest("tr").find("td:last .button-primary").attr("disabled",!0),t(this).closest("tr").find('td:last input[name="reassign_to"]').val(""))}),t(document).on("submit",".gdpr-reassign-content",function(a){a.preventDefault();var e=t(this).find('input[name="user_email"]').val(),n=t(this).find('input[name="reassign_to"]').val(),i=t(this).find('input[name="post_type"]').val(),s=t(this).find('input[name="post_count"]').val(),d=t(this).find('input[name="gdpr_reassign_content_nonce"]').val(),o=t(this).find(".button-primary"),r=t(this).find(".spinner"),c=t(this).find("p.hidden");n&&(o.addClass("hidden"),r.addClass("is-active"),r.css("display","block"),t.post(ajaxurl,{action:"gdpr_reassign_content",user_email:e,reassign_to:n,post_type:i,post_count:s,nonce:d},function(t){r.removeClass("is-active"),r.hide(),c.removeClass("hidden"),t.success||c.text(t.data)}))}),t(document).on("submit",".gdpr-anonymize-comments",function(a){a.preventDefault();var e=t(this).find('input[name="user_email"]').val(),n=t(this).find('input[name="comment_count"]').val(),i=t(this).find('input[name="gdpr_anonymize_comments_nonce"]').val(),s=t(this).find(".button-primary"),d=t(this).find(".spinner"),o=t(this).find("p.hidden");s.addClass("hidden"),d.addClass("is-active"),d.css("display","block"),t.post(ajaxurl,{action:"gdpr_anonymize_comments",user_email:e,comment_count:n,nonce:i},function(t){d.removeClass("is-active"),d.hide(),o.removeClass("hidden"),t.success||o.text(t.data)})}),t(document).on("submit",".gdpr-access-data-lookup",function(a){a.preventDefault();var e=t(this).find('input[name="user_email"]'),n=e.val(),i=t(this).find('input[name="gdpr_access_data_nonce"]').val(),s=t(this).find(".button-primary"),d=t(this).find(".spinner"),o=t(".gdpr-access-data-result");s.addClass("hidden"),d.show(),o.remove(),e.val(""),t.post(ajaxurl,{action:"gdpr_access_data",nonce:i,email:n},function(a){if(s.removeClass("hidden"),d.hide(),a.success){var e=wp.template("access-data-result-success");t('.gdpr div[data-id="access"]').append(e({result:a.data.result,user_email:a.data.user_email}))}else{e=wp.template("access-data-result-error");t('.gdpr div[data-id="access"]').append(e())}})}),t(document).on("click",'.frm-export-data input[type="submit"]',function(a){a.preventDefault();var e=t(this).parents("form"),n=t(this).val(),i=e.find("#gdpr_export_data_nonce").val(),s=e.find('input[name="user_email"]').val(),d=n.toLowerCase();t.post(ajaxurl,{action:"gdpr_generate_data_export",nonce:i,type:n,email:s},function(a){a.success&&t("<a />",{href:"data:text/plain;charset=utf-8,"+encodeURIComponent(a.data),download:s+"."+d,text:"click"}).hide().appendTo("body")[0].click()})})})}(jQuery);