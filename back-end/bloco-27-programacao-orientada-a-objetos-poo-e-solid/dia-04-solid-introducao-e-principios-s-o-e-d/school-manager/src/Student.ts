import Discipline from './Discipline';
import School from './School';

type Student = {
  name: string;
  disciplines: Discipline[];
  school: School;
};

export default Student;