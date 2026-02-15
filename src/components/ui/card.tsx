import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "chapter" | "event" | "team" | "contact";
  className?: string;
  hoverable?: boolean;
}

const variantStyles = {
  default:
    "bg-white border-[1.5px] border-[#E7ECF0] rounded-2xl p-8 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
  chapter:
    "bg-white border-[1.5px] border-[#E7ECF0] rounded-2xl p-8 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-linear-to-r before:from-[#00629B] before:to-[#00A3E0] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#00629B] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:before:scale-x-100",
  event:
    "bg-white border-[1.5px] border-[#E7ECF0] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#00629B] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1",
  team: "bg-white border-[1.5px] border-[#E7ECF0] rounded-2xl p-8 text-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#00629B] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1",
  contact:
    "bg-white border-[1.5px] border-[#E7ECF0] rounded-2xl p-7 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#00629B] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
};

export const Card = ({
  children,
  variant = "default",
  className = "",
  hoverable = false,
  ...props
}: CardProps) => {
  const hoverClass = hoverable
    ? "hover:border-[#00629B] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1"
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
  <div className={`flex items-center gap-4 mb-5 ${className}`}>{children}</div>
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
      ? "w-11 h-11 text-xl"
      : "w-14 h-14 text-[1.75rem]";

  return (
    <div
      className={`${sizeClass} bg-linear-to-br from-[#00629B] to-[#00A3E0] rounded-xl flex items-center justify-center flex-shrink-0 ${className}`}
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
    sm: "text-lg",
    md: "text-[1.375rem]",
    lg: "text-xl",
  }[size];

  return (
    <h3
      className={`${sizeClass} font-bold text-[#0F1419] mb-1 font-['Space_Grotesk'] ${className}`}
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
  <p className={`text-[#536471] leading-[1.7] text-[0.9375rem] ${className}`}>
    {children}
  </p>
);
