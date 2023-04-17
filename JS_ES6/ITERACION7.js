//7.1
const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
const aux = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(aux);
//7.2
const aux2 = exams.reduce((acc, exam) => {
  if (exam.score >= 5) acc += exam.score;
  return acc;
}, 0);
console.log(aux2);
//7.3
const aux3 = exams.reduce((acc, exam) => {
  acc += exam.score / exams.length;
  return acc;
}, 0);

console.log(aux3);
