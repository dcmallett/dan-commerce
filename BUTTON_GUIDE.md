# Button Component Usage Guide

## Overview

The Button component system provides a flexible, reusable solution for all button needs across your e-commerce application. It consists of:

1. **Base Button Component** - The foundation with variants and sizes
2. **Specialized Action Buttons** - Pre-configured buttons for common e-commerce actions

## 1. Base Button Component

### Basic Usage

```tsx
import { Button } from "@/components/Button";

// Basic button
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
```

### Available Variants

- `primary` - Main action buttons (blue)
- `secondary` - Secondary actions (gray)
- `overlay` - For overlay/modal buttons (white/transparent)
- `ghost` - Minimal buttons with hover effect
- `destructive` - Delete/danger actions (red)
- `outline` - Outlined buttons

### Available Sizes

- `sm` - Small buttons (h-8)
- `md` - Medium buttons (h-10) - default
- `lg` - Large buttons (h-11)
- `icon` - Square icon buttons (10x10)
- `icon-sm` - Small square icon buttons (8x8)

### Props

```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?:
		| "primary"
		| "secondary"
		| "overlay"
		| "ghost"
		| "destructive"
		| "outline";
	size?: "sm" | "md" | "lg" | "icon" | "icon-sm";
	loading?: boolean;
}
```

## 2. Specialized Action Buttons

### AddToCartButton

```tsx
import { AddToCartButton } from "@/components/ActionButtons";

<AddToCartButton
	productId="123"
	productName="Cool T-Shirt"
	onClick={(e) => addToCart(productId)}
/>;
```

### WishlistButton

```tsx
import { WishlistButton } from "@/components/ActionButtons";

// Icon only (for overlays)
<WishlistButton
  productId="123"
  productName="Cool T-Shirt"
  variant="overlay"
  size="icon-sm"
/>

// With text (for product pages)
<WishlistButton
  productId="123"
  productName="Cool T-Shirt"
  variant="secondary"
  size="md"
/>
```

### QuickViewButton

```tsx
import { QuickViewButton } from "@/components/ActionButtons";

<QuickViewButton
	productId="123"
	productName="Cool T-Shirt"
	onClick={() => openQuickView(productId)}
/>;
```

### ShareButton

```tsx
import { ShareButton } from "@/components/ActionButtons";

<ShareButton
	productId="123"
	productName="Cool T-Shirt"
	onClick={() => shareProduct(productId)}
/>;
```

## 3. Real-World Usage Examples

### Product Card (Current Implementation)

```tsx
// components/ProductCard.tsx
import { QuickViewButton, WishlistButton } from "./ActionButtons";

// Inside overlay
<QuickViewButton productId={product.id} productName={product.name} />
<WishlistButton productId={product.id} productName={product.name} />
```

### Product Detail Page

```tsx
import {
	AddToCartButton,
	WishlistButton,
	ShareButton,
} from "@/components/ActionButtons";
import { Button } from "@/components/Button";

function ProductDetail({ product }) {
	return (
		<div className="flex gap-4">
			<AddToCartButton
				productId={product.id}
				productName={product.name}
				size="lg"
			/>
			<WishlistButton
				productId={product.id}
				productName={product.name}
				variant="outline"
				size="lg"
			/>
			<ShareButton
				productId={product.id}
				productName={product.name}
				variant="ghost"
				size="lg"
			/>
		</div>
	);
}
```

### Shopping Cart

```tsx
import { Button } from "@/components/Button";

function CartActions() {
	return (
		<div className="flex gap-4">
			<Button variant="outline" onClick={() => goToShopping()}>
				Continue Shopping
			</Button>
			<Button variant="primary" size="lg" onClick={() => proceedToCheckout()}>
				Proceed to Checkout
			</Button>
		</div>
	);
}
```

### Form Actions

```tsx
import { Button } from "@/components/Button";

function ContactForm() {
	return (
		<div className="flex gap-4">
			<Button variant="secondary" type="button">
				Cancel
			</Button>
			<Button variant="primary" type="submit" loading={isSubmitting}>
				Send Message
			</Button>
		</div>
	);
}
```

### Navigation Header

```tsx
import { Button } from "@/components/Button";
import { FaUser, FaShoppingCart } from "react-icons/fa";

function Header() {
	return (
		<nav className="flex items-center gap-4">
			<Button variant="ghost" size="sm">
				<FaUser className="w-4 h-4 mr-2" />
				Account
			</Button>
			<Button variant="ghost" size="icon-sm">
				<FaShoppingCart className="w-4 h-4" />
			</Button>
			<Button variant="primary" size="sm">
				Sign In
			</Button>
		</nav>
	);
}
```

## 4. Customization

### Custom Styles

You can always pass additional classes:

```tsx
<Button variant="primary" className="w-full font-bold uppercase tracking-wide">
	Custom Styled Button
</Button>
```

### Custom Click Handlers

```tsx
<Button
	variant="primary"
	onClick={(e) => {
		e.preventDefault();
		// Your custom logic
		handleCustomAction();
	}}
>
	Custom Action
</Button>
```

### Loading States

```tsx
<Button variant="primary" loading={isProcessing}>
	{isProcessing ? "Processing..." : "Submit Order"}
</Button>
```

## Benefits of This Approach

1. **Consistency** - All buttons have the same base styles and behavior
2. **Flexibility** - Easy to create variations for different use cases
3. **Maintainability** - Style changes in one place affect all buttons
4. **Accessibility** - Built-in ARIA labels and proper focus management
5. **Type Safety** - Full TypeScript support with proper prop types
6. **Reusability** - Use anywhere in your app with different configurations
7. **Performance** - Optimized with proper React patterns

This system gives you the flexibility to create buttons for any use case while maintaining design consistency across your entire application.
