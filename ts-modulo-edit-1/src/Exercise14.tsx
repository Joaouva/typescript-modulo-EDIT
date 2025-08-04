import React from "react";
import Exercise from "./Exercise";

const description =
	"Use an intersection type for a person who is both a student and an employee.";
const solution =
	"type Student = { studentId: number }; type Employee = { employeeId: number }; type Person = Student & Employee;";

const Exercise14: React.FC = () => {
	type Student = { studentId: number };
	type Employee = { employeeId: number };
	type Person = Student & Employee;
	const person: Person = { studentId: 1, employeeId: 2 };
	return (
		<Exercise title="Exercise 14" description={description} solution={solution}>
			Person IDs: {person.studentId}, {person.employeeId}
		</Exercise>
	);
};

export default Exercise14;
