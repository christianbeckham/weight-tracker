import React from "react";

const EntryList = (props) => {
	return (
		<table>
			<tbody>
				<tr>
					<th>Entry</th>
					<th>Weight</th>
					<th>Date</th>
				</tr>
				{props.entries.map((entry, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{entry.weight}</td>
						<td>{entry.date}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default EntryList;
