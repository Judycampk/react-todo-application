import React from "react";
import { useState } from "react";

export const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	const add = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			let data = e.target.value;
			setTasks([...tasks, data]);
			e.target.value = "";
		}
	};

	const remove = index => {
		let result = tasks.filter(function(e, i) {
			return i !== index;
		});
		setTasks(result);
	};

	return (
		<div className="container form-group">
			<input
				type="text"
				className="form-control"
				id="formGroupExampleInput2"
				placeholder="Add Tasks"
				onKeyUp={add}
			/>
			<ul>
				{tasks.map((item, index) => {
					return (
						<div className="d-flex" key={index}>
							<li className="list-group-item">
								{item}
								<i
									className="fas fa-trash-alt"
									onClick={() => {
										remove(index);
									}}></i>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
