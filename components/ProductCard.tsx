import Image from "next/image";
import { QuickViewButton, WishlistButton } from "./ActionButtons";

export const ProductCard = () => {
	const product = {
		id: "1",
		name: "Product Name",
		price: 29.99,
		image: "https://via.placeholder.com/150",
		discount: 0.2,
	};

	return (
		<article
			className="
      group relative bg-white rounded-xl shadow-sm hover:shadow-lg border 
      border-neutral-200 transition-all duration-300 overflow-hidden 
      focus-within:ring-2 focus-within:ring-primary-500"
			role="article"
			aria-labelledby={`product-${product.id}-title`}
		>
			{/*image container */}
			<div className="relative aspect-square overflow-hidden bg-neutral-100">
				<Image
					src={product.image}
					alt={product.name}
					fill
					className="object-cover group-hover:scale-105
          transition-transform duration-100"
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
				/>

				{/* overlay actions */}
				<div
					className="absolute inset-0
      bg-black/40 opacity-0
      group-hover:opacity-100
      transition-opacity duration-300 flex items-center justify-center gap-2"
				>
					<QuickViewButton productId={product.id} productName={product.name} />
					<WishlistButton productId={product.id} productName={product.name} />
				</div>

				{/* TODO: MAKE BADGES RE-USEABLE */}
				{/* Badges */}
				{product.discount && (
					<span
						className="
          absolute top-2 left-2 bg-error-500 
          text-white px-2 py-1 rounded-md text-xs font-medium"
					>
						-{product.discount}%
					</span>
				)}
			</div>

			{/* CONTENT */}
		</article>
	);
};
