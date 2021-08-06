$(function () {
    "use strict";

          //$(".boundary").mouseover(gameOver);

//           $('#start').click(function () {
//                    $("#start").animate({ left:155+'px'});
//               })
//            $('#start').click(function () {
//                 $("#start").animate({ top:54+'px'});
//                 });
//            $('#start').click(function () {
//                    $("#start").animate({ left:303+'px'});
//               });
//            $('#start').click(function () {
//                $("#start").animate({ top:205+'px'});
//              });
//           $('#start').click(function () {
//                $("#start").animate({ left:458+'px'});
//                 setTimeout(function() {
//                               $("#end").animate({ left:540+'px'});
//                               $(".boundary").css("background-color", "green");
//                               $("#status").text("Hooray you won !!!  :D :D")
//                               .css({"color":"red"});
//                               }, 1900);
//            });
//
//            $(".boundary").mouseenter(function () {
//                        $(".boundary").css("background-color", "yellow");
//                    });
//
//             $(".boundary").mouseleave(function () {
//                        $(".boundary").css("background-color", "red");
//                    });

const $walls = $("#maze .boundary");
    const $status = $('#status');
    const $maze = $('#maze');

   $('#start').click(function () {
           $("#maze .boundary").removeClass('youlose youwin');
           $status.text("Game has Started.....");

           $("#maze .boundary").mouseenter(function () {
               $("#maze .boundary").addClass('youlose');
                 $("#status").text("You lose... :(");
           });

           $('#maze').mouseleave(function () {
               $("#maze .boundary").addClass('youlose');
           });

           $('#end').mouseenter(function () {
               if ($('#maze .boundary').hasClass('youlose')) {
                   $("#status").text("You lose :P");
               }
               else {
                 $("#maze .boundary").addClass('youwin');
                   $("#status").text("You win!!! :D");
               }
               $("#maze .boundary").off('mouseenter');
               $('#maze').off('mouseleave');
           });
       });
});