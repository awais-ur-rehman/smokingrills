import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";

const buttonClasses = (variant: Variant, className?: string) =>
  cn(
    "inline-block rounded-full px-6 py-3 font-sans font-bold text-sm tracking-wide uppercase transition-transform hover:scale-105",
    variant === "solid" && "bg-crimson text-cream",
    variant === "outline" && "border-2 border-ink/70 text-ink bg-transparent",
    className,
  );

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: undefined;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

export function Button({ variant = "solid", className, href, ...props }: ButtonProps | LinkButtonProps) {
  if (href) {
    return (
      <a href={href} className={buttonClasses(variant, className)} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }

  return (
    <button
      className={buttonClasses(variant, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
