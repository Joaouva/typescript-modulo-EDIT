import React, { useState } from "react";
import Exercise from "./Exercise";

const description = "Use the useState hook with a typed state variable.";
const solution = `const [count, setCount] = useState<number>(0);`;

const Exercise22: React.FC = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<Exercise title="Exercise 22" description={description} solution={solution}>
			<button onClick={() => setCount(count + 1)}>Increment</button> Count:{" "}
			{count}
		</Exercise>
	);
};

export default Exercise22;
