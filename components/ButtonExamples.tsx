import { Button } from "@/components/Button";
import { FaShoppingCart, FaHeart, FaShare, FaUser } from "react-icons/fa";

// Example usage across different components/pages
export const ButtonExamples = () => {
	return (
		<div className="p-8 space-y-8">
			{/* Header/Navigation Buttons */}
			<section className="space-y-4">
				<h2 className="text-xl font-semibold">Header/Navigation Buttons</h2>
				<div className="flex gap-4 items-center">
					<Button variant="primary" size="sm">
						Sign In
					</Button>
					<Button variant="outline" size="sm">
						<FaUser className="w-4 h-4 mr-2" />
						Account
					</Button>
					<Button variant="ghost" size="icon-sm">
						<FaShoppingCart className="w-4 h-4" />
					</Button>
				</div>
			</section>

			{/* Product Action Buttons */}
			<section className="space-y-4">
				<h2 className="text-xl font-semibold">Product Actions</h2>
				<div className="flex gap-4 items-center">
					<Button variant="primary" size="lg">
						Add to Cart
					</Button>
					<Button variant="secondary" size="lg">
						<FaHeart className="w-4 h-4 mr-2" />
						Add to Wishlist
					</Button>
					<Button variant="outline" size="lg">
						<FaShare className="w-4 h-4 mr-2" />
						Share
					</Button>
				</div>
			</section>

			{/* Form Buttons */}
			<section className="space-y-4">
				<h2 className="text-xl font-semibold">Form Buttons</h2>
				<div className="flex gap-4 items-center">
					<Button variant="primary" loading>
						Processing...
					</Button>
					<Button variant="secondary">Cancel</Button>
					<Button variant="destructive">Delete Account</Button>
				</div>
			</section>

			{/* Different sizes */}
			<section className="space-y-4">
				<h2 className="text-xl font-semibold">Button Sizes</h2>
				<div className="flex gap-4 items-center">
					<Button variant="primary" size="sm">
						Small
					</Button>
					<Button variant="primary" size="md">
						Medium
					</Button>
					<Button variant="primary" size="lg">
						Large
					</Button>
					<Button variant="primary" size="icon">
						<FaShoppingCart className="w-5 h-5" />
					</Button>
				</div>
			</section>

			{/* Custom onClick handlers for different actions */}
			<section className="space-y-4">
				<h2 className="text-xl font-semibold">Custom Actions</h2>
				<div className="flex gap-4 items-center">
					<Button
						variant="primary"
						onClick={() => alert("Navigate to checkout!")}
					>
						Checkout
					</Button>
					<Button
						variant="secondary"
						onClick={() => console.log("Filter products")}
					>
						Filter
					</Button>
					<Button
						variant="ghost"
						onClick={() => (window.location.href = "/contact")}
					>
						Contact Us
					</Button>
				</div>
			</section>
		</div>
	);
};
