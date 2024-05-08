import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import TransitionComp from "./components/TransitionComp";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					{/* NOTE If you comment out this TransitionComp, CSR works again */}
					<TransitionComp>
						<Suspense>{props.children}</Suspense>
					</TransitionComp>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
