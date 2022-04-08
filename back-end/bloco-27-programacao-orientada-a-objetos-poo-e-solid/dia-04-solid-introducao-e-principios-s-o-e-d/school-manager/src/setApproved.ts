import getLetterGrades from './getLetterGrades';
import Student from './Student';

/* Converter */
const percentageGradesIntoLetters = ({ name, disciplines, school }: Student) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
  school,
});

/* Determinar */
const approvedStudents = ({ disciplines, school }: Student) =>
disciplines.every(({ grade }) => grade >= school.approvalGrade);

/* Atualizar */
const updateApprovalData = ({ name: studentName, disciplines }: Student) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);
  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Array<Student>) {
  students.map(percentageGradesIntoLetters).filter(approvedStudents).map(updateApprovalData);
}

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};