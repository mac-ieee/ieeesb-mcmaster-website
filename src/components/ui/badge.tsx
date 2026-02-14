import { ReactNode, HTMLAttributes } from "react";

type BadgeVariant = "default" | "section" | "date" | "role";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    default:
        "bg-[rgba(0,98,155,0.08)] text-[#00629B] font-semibold rounded-full",
    section:
        "bg-[rgba(0,98,155,0.08)] text-[#00629B] font-semibold rounded-full uppercase tracking-[0.1em]",
    date: "bg-[rgba(0,98,155,0.08)] text-[#00629B] font-bold rounded-full uppercase tracking-[0.05em]",
    role: "text-[#00629B] font-semibold uppercase tracking-[0.05em]",
};

const sizeStyles: Record<BadgeSize, string> = {
    sm: "text-[0.75rem] px-3 py-1.5",
    md: "text-[0.8125rem] px-3.5 py-1.5",
    lg: "text-sm px-4 py-2",
};

export const Badge = ({
    children,
    variant = "default",
    size = "md",
    className = "",
    ...props
}: BadgeProps) => {
    const baseStyles = "inline-block";

    return (
        <div
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

interface SectionLabelProps {
    children: ReactNode;
    className?: string;
}

export const SectionLabel = ({
    children,
    className = "",
}: SectionLabelProps) => (
    <div
        className={`inline-block text-[0.8125rem] font-semibold text-[#00629B] uppercase tracking-[0.1em] mb-4 px-3.5 py-1.5 bg-[rgba(0,98,155,0.08)] rounded-full ${className}`}
    >
        {children}
    </div>
);

interface SectionHeaderProps {
    label?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    className?: string;
}

export const SectionHeader = ({
    label,
    title,
    subtitle,
    className = "",
}: SectionHeaderProps) => (
    <div className={`text-center mb-16 ${className}`}>
        {label && <SectionLabel>{label}</SectionLabel>}
        <h2 className="text-5xl font-extrabold mb-4 text-[#0F1419] tracking-[-0.02em] font-['Space_Grotesk']">
            {title}
        </h2>
        {subtitle && (
            <p className="text-lg text-[#536471] max-w-[640px] mx-auto leading-[1.7]">
                {subtitle}
            </p>
        )}
    </div>
);
