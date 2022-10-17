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
			<div className="form-group">
				<label>Weight</label>
				<input
					type="number"
					name="weight"
					value={inputs.weight || ""}
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Date</label>
				<input
					type="date"
					name="date"
					value={inputs.date || ""}
					onChange={handleChange}
					className="form-control"
				/>
			</div>
			<button type="submit" className="btn btn-primary mt-3">
				Submit
			</button>
		</form>
	);
};

export default EntryForm;
