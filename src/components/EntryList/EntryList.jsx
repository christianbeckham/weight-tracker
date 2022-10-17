import React from "react";

const EntryList = (props) => {
	return (
		<table>
			<tr>
				<th>Entry</th>
				<th>Weight</th>
				<th>Date</th>
			</tr>
			{props.entries.map((entry, index) => (
				<tr>
					<td>{index + 1}</td>
					<td>{entry.weight}</td>
					<td>{entry.date}</td>
				</tr>
			))}
		</table>
	);
};

export default EntryList;
