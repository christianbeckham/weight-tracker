import React from "react";

const EntryList = (props) => {
	return (
		<table className="table">
			<thead className="thead-dark">
				<tr>
					<th scope="col">Entry</th>
					<th scope="col">Weight</th>
					<th scope="col">Date</th>
				</tr>
			</thead>
			<tbody>
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
