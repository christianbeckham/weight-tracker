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
		<div className="App">
			<EntryList entries={entries} />
			<EntryForm addEntry={addEntry} />
      <EntryChart chartData={entries} />
		</div>
	);
};

export default App;
