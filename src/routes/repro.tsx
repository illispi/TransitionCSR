import { A } from "@solidjs/router";
import BarChartCustomtest from "~/components/TestChart";

export default function Home() {
	return (
		<main>
			<BarChartCustomtest />
			<div>test, should not be visible on CSR</div>
		</main>
	);
}
