function convertScoreToGrade(score) {
    // your code here
      // Validamos que el puntaje esté dentro del rango válido
  if (score < 0 || score > 100) {
    return "INVALID SCORE";
  }

  // Determinamos la calificación según el puntaje
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
