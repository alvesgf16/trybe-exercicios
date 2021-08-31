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

const addKeyToObject= (object, key, value) => object[key] = value;

const listKeys = object => console.log(Object.keys(object));

const displayObjectSize = object => console.log(Object.keys(object).length);

const listValues = object => console.log(Object.values(object));

addKeyToObject(lesson2, 'turno', 'noite');

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getStudentTotal = object => {
  const objectValues = Object.values(object);
  let studentTotal = 0;
  objectValues.forEach(lesson => studentTotal += lesson.numeroEstudantes);
  return studentTotal;
}

console.log(getStudentTotal(allLessons));

const getValueByNumber = (object, number) => Object.values(object)[number];

const verifyPair = (object, key, value) => Object.keys(object).includes(key) && object[key] === value;

const getStudentTotalPerSubject = object => {
  const objectValues = Object.values(object);
  let studentTotal = 0;
  objectValues.forEach(lesson => {
    if (lesson.materia === 'Matemática') {
      studentTotal += lesson.numeroEstudantes;
    }
  });
  return studentTotal;
}

const createReport = (object, teacher) => {
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

// console.log(createReport(allLessons, 'Maria Clara'));