//Declare variables
var o_submit = document.getElementById("calcGrade");


//Event listener that operates once the submit button on the HTML form is pressed.
o_submit.addEventListener("click", function () {

    //Gather values from form
    var i_assignments = document.getElementById("assignments").value;
    var i_groupProj = document.getElementById("groupProj").value;
    var i_quizzes = document.getElementById("quizzes").value;
    var i_exams = document.getElementById("exams").value;
    var i_intex = document.getElementById("intex").value;

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