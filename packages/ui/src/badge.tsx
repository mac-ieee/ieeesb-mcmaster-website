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
        "ui:bg-[rgba(0,98,155,0.08)] ui:text-[#00629B] ui:font-semibold ui:rounded-full",
    section:
        "ui:bg-[rgba(0,98,155,0.08)] ui:text-[#00629B] ui:font-semibold ui:rounded-full ui:uppercase ui:tracking-[0.1em]",
    date: "ui:bg-[rgba(0,98,155,0.08)] ui:text-[#00629B] ui:font-bold ui:rounded-full ui:uppercase ui:tracking-[0.05em]",
    role: "ui:text-[#00629B] ui:font-semibold ui:uppercase ui:tracking-[0.05em]",
};

const sizeStyles: Record<BadgeSize, string> = {
    sm: "ui:text-[0.75rem] ui:px-3 ui:py-1.5",
    md: "ui:text-[0.8125rem] ui:px-3.5 ui:py-1.5",
    lg: "ui:text-sm ui:px-4 ui:py-2",
};

export const Badge = ({
    children,
    variant = "default",
    size = "md",
    className = "",
    ...props
}: BadgeProps) => {
    const baseStyles = "ui:inline-block";

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
        className={`ui:inline-block ui:text-[0.8125rem] ui:font-semibold ui:text-[#00629B] ui:uppercase ui:tracking-[0.1em] ui:mb-4 ui:px-3.5 ui:py-1.5 ui:bg-[rgba(0,98,155,0.08)] ui:rounded-full ${className}`}
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
    <div className={`ui:text-center ui:mb-16 ${className}`}>
        {label && <SectionLabel>{label}</SectionLabel>}
        <h2 className="ui:text-5xl ui:font-extrabold ui:mb-4 ui:text-[#0F1419] ui:tracking-[-0.02em] ui:font-['Space_Grotesk']">
            {title}
        </h2>
        {subtitle && (
            <p className="ui:text-lg ui:text-[#536471] ui:max-w-[640px] ui:mx-auto ui:leading-[1.7]">
                {subtitle}
            </p>
        )}
    </div>
);
