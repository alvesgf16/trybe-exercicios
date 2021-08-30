const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKeyToObject(object, key, value) {
  object[key] = value;
}

function listKeys(object) {
  console.log(Object.keys(object).join(', '));
}

function displayObjectSize(object) {
  console.log(Object.keys(object).length);
}

function listValues(object) {
  console.log(Object.values(object).join(', '));
}

addKeyToObject(lesson2, 'turno', 'noite');
const allLessons = { lesson1: Object.assign({}, lesson1), lesson2: Object.assign({}, lesson2), lesson3: Object.assign({}, lesson3) };

function getStudentTotal() {
  const objectValues = Object.values(allLessons);
  let studentTotal = 0;
  objectValues.forEach(lesson => studentTotal += lesson.numeroEstudantes);
  return studentTotal;
}

function getValueByNumber(object, position) {
  const keyAt = Object.keys(object);
  return object[keyAt[position]];
}

function verifyPair(object, key, value) {
  return Object.keys(object).includes(key) && object[key] === value;
}

function getStudentTotalPerSubject(subject) {
  const objectValues = Object.values(allLessons);
  let studentTotal = 0;
  objectValues.forEach(lesson => {
    if (lesson.materia === subject) {
      studentTotal += lesson.numeroEstudantes;
    }
  });
  return studentTotal;
}

function createReport(object, teacher) {

  const objectValues = Object.values(object);
  const subjectList = [];
  let studentTotal = 0;
  objectValues.forEach(lesson => {
    if (lesson.professor === teacher) {
      subjectList.push(lesson.materia);
      studentTotal += lesson.numeroEstudantes;
    }
  });

  const report = {
    professor: teacher,
    aulas: subjectList,
    estudantes: studentTotal
  }

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));