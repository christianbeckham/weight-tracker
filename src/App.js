import React, { useState } from "react";
import EntryList from "./components/EntryList/EntryList";
import EntryForm from "./components/EntryForm/EntryForm";

const App = () => {
	const [entries, setEntries] = useState([
		{ weight: 175, date: "10-15-2022" },
		{ weight: 177, date: "10-17-2022" },
	]);

	return (
		<div className="App">
			<EntryList entries={entries} />
			<EntryForm />
		</div>
	);
};

export default App;
