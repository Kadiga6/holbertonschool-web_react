interface Student {
	firstName : string;
	lastName : string;
	age : number;
	location : string;
}

const student1: Student = {
	firstName: "Alice",
	lastName: "Dupont",
	age: 21,
	location: "Paris",
};

const student2: Student = {
	firstName: "Bob",
	lastName: "Martin",
	age: 22,
	location: "Lyon",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
	const row = table.insertRow();
	const nameCell = row.insertCell();
	const locationCell = row.insertCell();

	nameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
});

document.body.appendChild(table);
