"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "nav";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  target?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-br from-[#4A90E2] to-[#357ABD] text-white shadow-[0_4px_12px_rgba(74,144,226,0.3)] hover:from-[#357ABD] hover:to-[#2868A8] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(74,144,226,0.4)]",
  secondary:
    "bg-white text-[#00629B] border-[1.5px] border-[#E7ECF0] hover:border-[#00629B] hover:bg-[#F8FAFB] hover:-translate-y-0.5",
  nav: "bg-linear-to-br from-[#4A90E2] to-[#357ABD] text-white ml-2 shadow-[0_2px_8px_rgba(74,144,226,0.3)] hover:from-[#357ABD] hover:to-[#2868A8] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(74,144,226,0.4)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3.5 text-[0.9375rem]",
  lg: "px-10 py-4 text-base",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-xl font-inter font-semibold cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={combinedClassName}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
