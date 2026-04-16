function calculateResult() {
    let subjects = parseInt(document.getElementById("subjects").value);
    let total = 0;
    let highestScore = 0;  

    for (let i = 1; i <= subjects; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total += marks;

        if (marks > highestScore) {
            highestScore = marks;  
        }
    }

    let average = total / subjects;
    let grade, result;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result + "<br>" +
        "Highest Score: " + highestScore;  
}