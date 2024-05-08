import { A } from "@solidjs/router";

export default function Home() {
	return (
		<main>
			<A href="/repro">repro, works on SSR reload, but not on CSR</A>
		</main>
	);
}
