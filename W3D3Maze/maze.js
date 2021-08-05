$(function () {
    "use strict";
           $('#start').click(function () {
                    $("#start").animate({ left:155+'px'});
               })
            $('#start').click(function () {
                 $("#start").animate({ top:54+'px'});
                 });
            $('#start').click(function () {
                    $("#start").animate({ left:303+'px'});
               });
            $('#start').click(function () {
                $("#start").animate({ top:205+'px'});
              });
           $('#start').click(function () {
                $("#start").animate({ left:458+'px'});
                 setTimeout(function() {
                               $("#end").animate({ left:540+'px'});
                               $(".boundary").css("background-color", "green");
                               $("#status").text("Hooray You win !!!  :D :D")
                               .css({"color":"red"});
                               }, 1900);
            });

            $(".boundary").mouseenter(function () {
                        $(".boundary").css("background-color", "yellow");
                    });

             $(".boundary").mouseleave(function () {
                        $(".boundary").css("background-color", "red");
                    });
});