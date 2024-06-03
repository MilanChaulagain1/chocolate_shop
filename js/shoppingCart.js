 function popupDiv(div_id) {
            var div_obj = $("#" + div_id);
            var posLeft = ($(window).width() - div_obj.width()) / 2;
            var posTop = ($(window).height() - div_obj.height()) / 2;
            $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
            div_obj.css({ "top": posTop, "left": posLeft }).fadeIn();
        }




        function hideDiv(div_id) {
            $("#mask").remove();
            $("#" + div_id).fadeOut();
        }   