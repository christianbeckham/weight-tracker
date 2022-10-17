import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const EntryChart = (props) => {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		let chartDataArr = props.chartData.map((entry) => [entry.date, entry.weight]);
    setChartData(chartDataArr)
	}, [props.chartData]);

	return (
		<Chart
			chartType="LineChart"
			data={[["Date", "Weight"], ...chartData]}
			width="100%"
			height="400px"
			legendToggle
		/>
	);
};

export default EntryChart;
