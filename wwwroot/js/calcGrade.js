﻿//Event listener that operates once the submit button on the HTML form is pressed.
$("#calcGrade").click( function () {

    //Gather values from form
    var i_assignments = $("#assignments").val();
    var i_groupProj = $("#groupProj").val();
    var i_quizzes = $("#quizzes").val();
    var i_exams = $("#exams").val();
    var i_intex = $("#intex").val();

    //Calculate final grade percentage
    i_finalGrade = Number((i_assignments * 0.5) + (i_groupProj * 0.1) + (i_quizzes * 0.1) + (i_exams * 0.2) + (i_intex * 0.1)).toFixed(2);
    s_finalLet = "";

    //If-else statement stair to return the correct letter grade for the calculated final grade percentage
    if (i_finalGrade >= 94) {
        s_finalLet = "A";
    }
    else if (i_finalGrade >= 90) {
        s_finalLet = "A-";
    }
    else if (i_finalGrade >= 87) {
        s_finalLet = "B+";
    }
    else if (i_finalGrade >= 84) {
        s_finalLet = "B";
    }
    else if (i_finalGrade >= 80) {
        s_finalLet = "B-";
    }
    else if (i_finalGrade >= 77) {
        s_finalLet = "C+";
    }
    else if (i_finalGrade >= 74) {
        s_finalLet = "C";
    }
    else if (i_finalGrade >= 70) {
        s_finalLet = "C-";
    }
    else if (i_finalGrade >= 67) {
        s_finalLet = "D+";
    }
    else if (i_finalGrade >= 64) {
        s_finalLet = "D";
    }
    else if (i_finalGrade >= 60) {
        s_finalLet = "D-";
    }
    else {
        s_finalLet = "E";
    }

    //Alert that shares the results with the user
    alert("Final Percentage: " + i_finalGrade + "\n" + "Final Letter Grade: " + s_finalLet);
});