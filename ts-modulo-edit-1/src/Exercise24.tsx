import React from "react";
import Exercise from "./Exercise";

const description =
	"Use the Pick utility type to select specific properties from a type.";
const solution = `type User = { id: number; name: string; email: string };\ntype UserPreview = Pick<User, 'id' | 'name'>;`;

const Exercise24: React.FC = () => {
	type User = { id: number; name: string; email: string };
	type UserPreview = Pick<User, "id" | "name">;
	const user: UserPreview = { id: 1, name: "Alice" };
	return (
		<Exercise title="Exercise 24" description={description} solution={solution}>
			User Preview: {user.id}, {user.name}
		</Exercise>
	);
};

export default Exercise24;
