import React, { useState } from "react";
import EntryList from "./components/EntryList/EntryList";
import EntryForm from "./components/EntryForm/EntryForm";
import EntryChart from "./components/EntryChart/EntryChart";

const App = () => {
	const [entries, setEntries] = useState([
		{ weight: 175, date: "10-15-2022" },
		{ weight: 177, date: "10-17-2022" },
	]);

	const addEntry = (entry) => {
		let newEntries = [entry, ...entries];
		setEntries(newEntries);
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<h3 className="m-3">
					Weight<small className="text-muted">Tracker</small>
				</h3>
				<div className="col-md-6">
					<div className="border m-3 p-5">
						<EntryList entries={entries} />
					</div>
					<div className="border m-3 p-5">
						<EntryForm addEntry={addEntry} />
					</div>
				</div>
				<div className="col-md-6">
					<div className="border m-3 p-5">
						<EntryChart chartData={entries} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
