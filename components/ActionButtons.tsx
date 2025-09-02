"use client";

import { Button, ButtonProps } from "./Button";
import { FaShoppingCart, FaHeart, FaEye, FaShare } from "react-icons/fa";

// Specialized button components for common e-commerce actions
interface ActionButtonProps extends Omit<ButtonProps, "children"> {
	productId?: string;
	productName?: string;
}

export const AddToCartButton = ({
	productId,
	productName,
	onClick,
	...props
}: ActionButtonProps) => (
	<Button
		variant="primary"
		onClick={(e) => {
			console.log(`Adding product ${productId} to cart`);
			onClick?.(e);
		}}
		aria-label={`Add ${productName || "product"} to cart`}
		{...props}
	>
		<FaShoppingCart className="w-4 h-4 mr-2" />
		Add to Cart
	</Button>
);

export const WishlistButton = ({
	productId,
	productName,
	onClick,
	variant = "overlay",
	size = "icon-sm",
	...props
}: ActionButtonProps) => (
	<Button
		variant={variant}
		size={size}
		onClick={(e) => {
			console.log(`Adding product ${productId} to wishlist`);
			onClick?.(e);
		}}
		aria-label={`Add ${productName || "product"} to wishlist`}
		{...props}
	>
		<FaHeart className="w-4 h-4" />
	</Button>
);

export const QuickViewButton = ({
	productId,
	productName,
	onClick,
	variant = "overlay",
	size = "icon-sm",
	...props
}: ActionButtonProps) => (
	<Button
		variant={variant}
		size={size}
		onClick={(e) => {
			console.log(`Quick view for product ${productId}`);
			onClick?.(e);
		}}
		aria-label={`Quick view ${productName || "product"}`}
		{...props}
	>
		<FaEye className="w-4 h-4" />
	</Button>
);

export const ShareButton = ({
	productId,
	productName,
	onClick,
	variant = "ghost",
	size = "icon-sm",
	...props
}: ActionButtonProps) => (
	<Button
		variant={variant}
		size={size}
		onClick={(e) => {
			console.log(`Sharing product ${productId}`);
			onClick?.(e);
		}}
		aria-label={`Share ${productName || "product"}`}
		{...props}
	>
		<FaShare className="w-4 h-4" />
	</Button>
);
