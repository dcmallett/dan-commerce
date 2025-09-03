import Image from "next/image";
import { QuickViewButton, WishlistButton } from "./ActionButtons";
import { TiShoppingCart } from "react-icons/ti";

// Simple Star SVG component
const Star = ({ className = "" }: { className?: string }) => (
	<svg
		className={className}
		viewBox="0 0 20 20"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z" />
	</svg>
);

export const ProductCard = () => {
	const product = {
		id: "1",
		name: "Product Name",
		price: 29.99,
		image: "https://via.placeholder.com/150",
		discount: 0.2,
		rating: 5,
		originalPrice: 39.99,
		inStock: true,
	};

	return (
		<article
			className="
        group relative
        bg-white rounded-xl
        shadow-sm hover:shadow-lg
        border border-neutral-200
        transition-all duration-300
        overflow-hidden
        focus-within:ring-2 focus-within:ring-primary-500
      "
			role="article"
			aria-labelledby={`product-${product.id}-title`}
		>
			{/* Image Container */}
			<div
				className="
        relative aspect-square
        overflow-hidden
        bg-neutral-100
      "
			>
				<Image
					src={product.image}
					alt={product.name}
					fill
					className="
            object-cover
            group-hover:scale-105
            transition-transform duration-500
          "
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
				/>

				{/* Overlay Actions */}
				<div
					className="
          absolute inset-0
          bg-black/40 opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          flex items-center justify-center
          gap-2
        "
				>
					<QuickViewButton productId={product.id} productName={product.name} />
					<WishlistButton productId={product.id} productName={product.name} />
				</div>

				{/* Badges */}
				{product.discount && (
					<span
						className="
            absolute top-2 left-2
            bg-error-500 text-white
            px-2 py-1 rounded-md
            text-xs font-medium
          "
					>
						-{product.discount}%
					</span>
				)}
			</div>

			{/* CONTENT */}
			<div className="p-4 space-y-3">
				<div>
					<h3
						id={`product-${product.id}-title`}
						className="
            text-lg font-medium text-neutral-900
            line-clamp-2 group-hover:text-primary-600 transition-colors
            "
					>
						{product.name}
					</h3>
					<p className="text-sm text-neutral-600 mt-1">
						${product.price.toFixed(2)}
					</p>
				</div>

				{/* Rating */}
				<div className="flex items-center gap-1">
					<div
						className="flex"
						role="img"
						aria-label={`${product.rating} out of 5 stars`}
					>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className={`w-4 h-4 ${
									i < Math.floor(product.rating)
										? "text-rating fill-current"
										: "text-neutral-300"
								}`}
							/>
						))}
					</div>
					<span className="text-sm text-neutral-600">
						{product.rating} out of 5 stars
					</span>
				</div>

				{/* Price */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="text-lg font-semibold text-price">
							${product.price}
						</span>
						{product.originalPrice && (
							<span className="text-sm text-neutral-500 line-through">
								{product.originalPrice}
							</span>
						)}
					</div>

					<button
						className="bg-primary500 hover:bg-primary-600 text-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
						disabled={!product.inStock}
						aria-label={`Add ${product.name} to cart`}
					>
						<TiShoppingCart className="w-4 h-4" />
					</button>
				</div>
			</div>
		</article>
	);
};
