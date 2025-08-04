import React from "react";
import Exercise from "./Exercise";

const description =
	"Use the Omit utility type to exclude a property from a type.";
const solution = `type User = { id: number; name: string; email: string };\ntype UserWithoutEmail = Omit<User, 'email'>;`;

const Exercise25: React.FC = () => {
	type User = { id: number; name: string; email: string };
	type UserWithoutEmail = Omit<User, "email">;
	const user: UserWithoutEmail = { id: 1, name: "Alice" };
	return (
		<Exercise title="Exercise 25" description={description} solution={solution}>
			User Without Email: {user.id}, {user.name}
		</Exercise>
	);
};

export default Exercise25;
