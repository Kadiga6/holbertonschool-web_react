/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const teacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
  experienceTeachingReact: 5,
  experienceTeachingJava: 0,
};

cpp.setTeacher(teacher);
console.log('C++:');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

react.setTeacher(teacher);
console.log('React:');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

java.setTeacher(teacher);
console.log('Java:');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
