"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

// Button variant types
type ButtonVariant =
	| "primary"
	| "secondary"
	| "overlay"
	| "ghost"
	| "destructive"
	| "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon" | "icon-sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
}

const getVariantClasses = (variant: ButtonVariant): string => {
	const variants = {
		primary:
			"bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
		secondary:
			"bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500",
		overlay:
			"bg-white/90 hover:bg-white text-gray-700 focus-visible:ring-white/50",
		ghost: "hover:bg-gray-100 text-gray-700 focus-visible:ring-gray-500",
		destructive:
			"bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
		outline:
			"border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus-visible:ring-gray-500",
	};
	return variants[variant] || variants.primary;
};

const getSizeClasses = (size: ButtonSize): string => {
	const sizes = {
		sm: "h-8 px-3 text-sm",
		md: "h-10 px-4 text-sm",
		lg: "h-11 px-6 text-base",
		icon: "h-10 w-10",
		"icon-sm": "h-8 w-8",
	};
	return sizes[size] || sizes.md;
};

export const Button = ({
	className,
	variant = "primary",
	size = "md",
	loading,
	disabled,
	children,
	...props
}: ButtonProps) => {
	const baseClasses =
		"inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

	const buttonClasses = cn(
		baseClasses,
		getVariantClasses(variant),
		getSizeClasses(size),
		className
	);

	return (
		<button className={buttonClasses} disabled={disabled || loading} {...props}>
			{loading ? (
				<>
					<svg
						className="mr-2 h-4 w-4 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
					Loading...
				</>
			) : (
				children
			)}
		</button>
	);
};
