function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
      // Validar si el puntaje es válido
  if (score < 0 || score > 100) {
    return "INVALID SCORE";
  }
  if (score === 100) {
    return "A+";
  }
  let grade; // Variable para almacenar la letra base de la calificación

  // Determinar la calificación base
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F"; // Las notas por debajo de 60 no tienen modificador
    return grade; 
  }

  // Añadir los modificadores (+ o -), pero solo si no es A o F
  if (score !== 100) { // No hay "+" si es 100
    const lastDigit = score % 10;
    if (lastDigit >= 0 && lastDigit <= 2) {
      grade += "-";
    } else if (lastDigit >= 7 && lastDigit <= 9) {
      grade += "+";
    }
  }

  return grade;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
