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
    "ui:bg-linear-to-br ui:from-[#4A90E2] ui:to-[#357ABD] ui:text-white ui:shadow-[0_4px_12px_rgba(74,144,226,0.3)] hover:ui:from-[#357ABD] hover:ui:to-[#2868A8] hover:ui:-translate-y-0.5 hover:ui:shadow-[0_6px_16px_rgba(74,144,226,0.4)]",
  secondary:
    "ui:bg-white ui:text-[#00629B] ui:border-[1.5px] ui:border-[#E7ECF0] hover:ui:border-[#00629B] hover:ui:bg-[#F8FAFB] hover:ui:-translate-y-0.5",
  nav: "ui:bg-linear-to-br ui:from-[#4A90E2] ui:to-[#357ABD] ui:text-white ui:ml-2 ui:shadow-[0_2px_8px_rgba(74,144,226,0.3)] hover:ui:from-[#357ABD] hover:ui:to-[#2868A8] hover:ui:-translate-y-px hover:ui:shadow-[0_4px_12px_rgba(74,144,226,0.4)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "ui:px-4 ui:py-2 ui:text-sm",
  md: "ui:px-7 ui:py-3.5 ui:text-[0.9375rem]",
  lg: "ui:px-10 ui:py-4 ui:text-base",
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
    "ui:inline-flex ui:items-center ui:gap-2 ui:rounded-xl ui:font-inter ui:font-semibold ui:cursor-pointer ui:transition-all ui:duration-[250ms] ui:ease-[cubic-bezier(0.4,0,0.2,1)] ui:whitespace-nowrap";

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
