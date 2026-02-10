import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "chapter" | "event" | "team" | "contact";
  className?: string;
  hoverable?: boolean;
}

const variantStyles = {
  default:
    "ui:bg-white ui:border-[1.5px] ui:border-[#E7ECF0] ui:rounded-2xl ui:p-8 ui:transition-all ui:duration-300 ui:ease-[cubic-bezier(0.4,0,0.2,1)]",
  chapter:
    "ui:bg-white ui:border-[1.5px] ui:border-[#E7ECF0] ui:rounded-2xl ui:p-8 ui:cursor-pointer ui:transition-all ui:duration-300 ui:ease-[cubic-bezier(0.4,0,0.2,1)] ui:relative ui:overflow-hidden before:ui:absolute before:ui:top-0 before:ui:left-0 before:ui:right-0 before:ui:h-1 before:ui:bg-linear-to-r before:ui:from-[#00629B] before:ui:to-[#00A3E0] before:ui:scale-x-0 before:ui:origin-left before:ui:transition-transform before:ui:duration-300 before:ui:ease-[cubic-bezier(0.4,0,0.2,1)] hover:ui:border-[#00629B] hover:ui:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:ui:-translate-y-1 hover:before:ui:scale-x-100",
  event:
    "ui:bg-white ui:border-[1.5px] ui:border-[#E7ECF0] ui:rounded-2xl ui:overflow-hidden ui:cursor-pointer ui:transition-all ui:duration-300 ui:ease-[cubic-bezier(0.4,0,0.2,1)] hover:ui:border-[#00629B] hover:ui:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:ui:-translate-y-1",
  team: "ui:bg-white ui:border-[1.5px] ui:border-[#E7ECF0] ui:rounded-2xl ui:p-8 ui:text-center ui:transition-all ui:duration-300 ui:ease-[cubic-bezier(0.4,0,0.2,1)] hover:ui:border-[#00629B] hover:ui:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:ui:-translate-y-1",
  contact:
    "ui:bg-white ui:border-[1.5px] ui:border-[#E7ECF0] ui:rounded-2xl ui:p-7 ui:transition-all ui:duration-300 ui:ease-[cubic-bezier(0.4,0,0.2,1)] hover:ui:border-[#00629B] hover:ui:-translate-y-0.5 hover:ui:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
};

export const Card = ({
  children,
  variant = "default",
  className = "",
  hoverable = false,
  ...props
}: CardProps) => {
  const hoverClass = hoverable
    ? "hover:ui:border-[#00629B] hover:ui:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:ui:-translate-y-1"
    : "";

  return (
    <div
      className={`${variantStyles[variant]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className = "" }: CardHeaderProps) => (
  <div className={`ui:flex ui:items-center ui:gap-4 ui:mb-5 ${className}`}>{children}</div>
);

interface CardIconProps {
  children: ReactNode;
  variant?: "default" | "contact";
  className?: string;
}

export const CardIcon = ({
  children,
  variant = "default",
  className = "",
}: CardIconProps) => {
  const sizeClass =
    variant === "contact"
      ? "ui:w-11 ui:h-11 ui:text-xl"
      : "ui:w-14 ui:h-14 ui:text-[1.75rem]";

  return (
    <div
      className={`${sizeClass} ui:bg-linear-to-br ui:from-[#00629B] ui:to-[#00A3E0] ui:rounded-xl ui:flex ui:items-center ui:justify-center ui:flex-shrink-0 ${className}`}
    >
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = "" }: CardContentProps) => (
  <div className={className}>{children}</div>
);

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const CardTitle = ({
  children,
  className = "",
  size = "md",
}: CardTitleProps) => {
  const sizeClass = {
    sm: "ui:text-lg",
    md: "ui:text-[1.375rem]",
    lg: "ui:text-xl",
  }[size];

  return (
    <h3
      className={`${sizeClass} ui:font-bold ui:text-[#0F1419] ui:mb-1 ui:font-['Space_Grotesk'] ${className}`}
    >
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({
  children,
  className = "",
}: CardDescriptionProps) => (
  <p className={`ui:text-[#536471] ui:leading-[1.7] ui:text-[0.9375rem] ${className}`}>
    {children}
  </p>
);
