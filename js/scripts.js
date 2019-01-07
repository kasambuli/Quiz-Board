// --------------------------------------------------
//User interface (or front-end) logic:
// ---------------------------------------------------

$(document).ready(function() {

    $('.questForm').hide();
    $('#Q1').show();



    $('#Q1 #next').click(function() {
        $('.questForm').hide();
        $('#Q2').fadeIn(3000);
        return false;
    });

    $('#Q2 #previous').click(function() {
        $('.questForm').hide();
        $('#Q1').fadeIn(3000);
        return false;
    });



    $('#Q2 #next').click(function() {
        $('.questForm').hide();
        $('#Q3').fadeIn(3000);
        return false;
    });

    $('#Q3 #previous').click(function() {
        $('.questForm').hide();
        $('#Q2').fadeIn(3000);
        return false;
    });


    $('#Q3 #next').click(function() {
        $('.questForm').hide();
        $('#Q4').fadeIn(3000);
        return false;
    });

    $('#Q4 #previous').click(function() {
        $('.questForm').hide();
        $('#Q3').fadeIn(3000);
        return false;
    });


    $('#Q4 #next').click(function() {
        $('.questForm').hide();
        $('#Q5').fadeIn(300);
        return false;
    });

    $('#Q5 #previous').click(function() {
        $('.questForm').hide();
        $('#Q4').fadeIn(3000);
        return false;
    });

    // ---------------------------------------------------
    // Business (or back-end) logic:
    // ---------------------------------------------------

    var quizResults = function(numOne, numTwo, numThree, numFour, numFive) {
        return numOne + numTwo + numThree + numFour + numFive;


    };


    $("form#quest").submit(function(event) {
        var questOne = parseInt($("input:radio[name=quest1]:checked").val());
        if ($("input:radio[name=quest1]:checked").length == 0) {
            $('#err1').text("Please select one");
            return false;
        }
        var questTwo = parseInt($("input:radio[name=quest2]:checked").val());
        if ($("input:radio[name=quest2]:checked").length == 0) {
            $('#err2').text("Please select one");
            return false;
        }
        var questThree = parseInt($("input:radio[name=quest3]:checked").val());
        if ($("input:radio[name=quest3]:checked").length == 0) {
            $('#err3').text("Please select one");
            return false;
        }
        var questFour = parseInt($("input:radio[name=quest4]:checked").val());
        if ($("input:radio[name=quest4]:checked").length == 0) {
            $('#err4').text("Please select one");
            return false;
        }
        var questFive = parseInt($("input:radio[name=quest5]:checked").val());
        if ($("input:radio[name=quest5]:checked").length == 0) {
            $('#err5').text("Please select one");
            return false;
        }
        var finalResult = quizResults(questOne, questTwo, questThree, questFour, questFive);

        $("#display").text("Your Score is " + finalResult + " /25");





        event.preventDefault();
        $("#quest").fadeOut();
        $(".displayResult").show();
        $("form").trigger("reset");


    });
});