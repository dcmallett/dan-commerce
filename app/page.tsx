import { ProductCard } from "@/components/ProductCard";

export default function Home() {
	return (
		<main className="container-responsive text-center mt-10">
			<h1 className="text-red-500">Welcome to Dan Commerce</h1>
			<p className="text-blue-700">
				Your one-stop shop for all things commerce.
			</p>

			<ProductCard />
		</main>
	);
}
