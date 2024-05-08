import { A } from "@solidjs/router";
import BarChartCustomtest from "~/components/TestChart";

export default function Home() {
	return (
		<main>
			<BarChartCustomtest />
			<div>
				test, should fail on CSR due div not being created for BarChartCustom
			</div>
		</main>
	);
}
