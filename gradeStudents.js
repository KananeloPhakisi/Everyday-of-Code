function computeGrade(grade) {
    let difference = (Math.ceil(grade/5)*5) - grade;
    console.log("difference: " + difference);
    let finalGrade = grade + ((Math.ceil(grade/5)*5) - grade);
    console.log("finalGrade: " + finalGrade);
    if ((difference < 3) && (finalGrade >= 40)) {
        return finalGrade;
    } else {
        return grade;
    }
}

function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];
    if (grades.length >= 1 && grades.length <= 100) {
        roundedGrades = grades.map(grade => computeGrade(grade))
    }
    return roundedGrades;
}

function main() {
    let grades = [4, 73, 67, 38, 33]
    console.log(grades);

    let roundedGrades = gradingStudents(grades);

    console.log(roundedGrades);
}


main();