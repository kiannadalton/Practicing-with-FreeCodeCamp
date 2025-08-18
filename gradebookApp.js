//My Code:
function getAverage(arr) {
  let allScores = 0;
  for (let i = 0; i < arr.length; i++) {
    allScores += arr[i];
  }
  return allScores / arr.length;
}

function getGrade(score) {
  if (score == 100) {
    return "A+";
  } else if (score <= 99 && score >= 90) {
    return "A";
  } else if (score <= 89 && score >= 80) {
    return "B";
  } else if (score <= 79 && score >= 70) {
    return "C";
  } else if (score <= 69 && score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (score >= 60) {
    return true;
  } else {
    return false;
  }
}

function studentMsg(arr, score) {
  let isPassing = hasPassingGrade(score);
  let averageScore = getAverage(arr);
  let studGrade = getGrade(score);
  if (isPassing == true) {
    return `Class average: ${averageScore}. Your grade: ${studGrade}. You passed the course.`;
  } else {
    return `Class average: ${averageScore}. Your grade: ${studGrade}. You failed the course.`;
  }
}

// Some tests:
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
