import Superclass from './Superclass';
import Subclass from './Subclass';

function greet(superclass: Superclass) {
  superclass.sayHello();
  const classType = superclass.isSuper ? 'Super!' : 'Sub!';
  console.log(classType);
}

const sup = new Superclass();
const sub = new Subclass();

greet(sup);
greet(sub);
