import Image from "next/image";
import { FaEye, FaHeart } from "react-icons/fa";

export const ProductCard = () => {
	const product = {
		id: "1",
		name: "Product Name",
		price: 29.99,
		image: "https://via.placeholder.com/150",
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
			</div>

			{/* overlay actions */}
			<div
				className="absolute inset-0
      bg-black/40 opacity-0
      group-hover:opacity-100
      transition-opacity duration-300 flex items-center justify-center gap-2"
			>
				{/* TODO: MAKE IT as its own component */}
				<button
					className="bg-white/90 hover:bg-white"
					aria-label={`Quick View ${product.name}`}
				>
					<FaEye className="w-4 h-4" />
				</button>
				<button
					className="bg-white/90 hover:bg-white"
					aria-label={`Add ${product.name} to wishlist`}
				>
					<FaHeart className="w-4 h-4" />
				</button>
			</div>
		</article>
	);
};
