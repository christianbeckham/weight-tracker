import React, { useState } from "react";

const EntryForm = (props) => {
	const [inputs, setInputs] = useState({});

	const handleChange = (e) => {
		const name = e.target.name;
		const value =
			e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addEntry(inputs);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Weight</label>
			<input
				type="number"
				name="weight"
				value={inputs.weight || ""}
				onChange={handleChange}
			/>
			<label>Date</label>
			<input
				type="date"
				name="date"
				value={inputs.date || ""}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default EntryForm;
