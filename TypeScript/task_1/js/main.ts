interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return '${firstName.charAt(0)}. ${lastName}';
};

console.log(printTeacher("John", "Doe"));


// Interface décrivant le constructeur
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface décrivant la classe
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implémentation de la classe
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Exemple d'utilisation
const student = new StudentClass("Alice", "Dupont");
console.log(student.displayName()); // Affiche "Alice"
console.log(student.workOnHomework()); // Affiche "Currently working"
