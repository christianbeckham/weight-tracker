import React from "react";

const EntryForm = (props) => {
	return (
		<form>
			<label for="fname">Weight</label>
			<input type="number" id="fname" name="fname" value="John" />
			<label for="lname">Date</label>
			<input type="date" id="lname" name="lname" value="Doe" />
		</form>
	);
};

export default EntryForm;
