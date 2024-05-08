import { mergeRefs } from "@solid-primitives/refs";
import type { AxisOptions, BarChartOptions } from "chartist";
import { BarChart } from "chartist";
import type { Component } from "solid-js";
import {
	Show,
	Suspense,
	createEffect,
	createUniqueId,
	onCleanup,
} from "solid-js";

interface Adds extends BarChartOptions<AxisOptions, AxisOptions> {
	height?: string;
}

import "../index.css";

const BarChartCustomtest = (props) => {
	let bar: BarChart;

	createEffect(() => {
		bar = new BarChart(
			`#chartBar1`,
			{
				series: [4, 7],
				labels: ["hello", "test"],
			},
			{
				...props.options,
				width: "100%",
				chartPadding: 25,
				axisX: {
					onlyInteger: true,
				},
				axisY: { offset: 80, scaleMinSpace: 25 },
				distributeSeries: true,
				horizontalBars: true,
			},
		);
	});

	return (
		<div>
			<div class="flex w-full flex-col items-center justify-center h-64">
				<div class={`h-64 w-full lg:w-11/12`} id={`chartBar1`} />
			</div>
		</div>
	);
};

export default BarChartCustomtest;
