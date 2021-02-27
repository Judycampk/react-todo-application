import React from "react";
import { Tasks } from "./tasks";

export function Home() {
	return (
		<div className="text-center mt-5">
			<div>
				<h1>TODO`S</h1>
			</div>
			<Tasks />
		</div>
	);
}
