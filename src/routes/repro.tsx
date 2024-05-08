import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
//NOTE fails on both clientOnly or regular component
// import BarChartCustomtest from "~/components/TestChart";
const BarChartCustomtest = clientOnly(() => import("~/components/TestChart"));

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
