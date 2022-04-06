import ConsoleLogger from './ConsoleLogger';
import ConsoleLogger2 from './ConsoleLogger2';
import ExampleDatabase from './ExampleDatabase';

const console1 = new ConsoleLogger();
const console2 = new ConsoleLogger2();

const example1 = new ExampleDatabase(console1);
const example2 = new ExampleDatabase(console2);
const example3 = new ExampleDatabase();

example1.save('Ipsis', 'literis');
example2.save('Ipsis', 'literis');
example3.save('Ipsis', 'literis');