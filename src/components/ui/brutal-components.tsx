/**
 * ULTRA-MODERN BRUTALIST COMPONENT LIBRARY
 * =========================================
 * A comprehensive collection of brutalist UI components
 * with the Yellow/Cream color scheme.
 * 
 * Use these components for consistent brutalist styling across the app.
 */

"use client";

import { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

/* ============================================
   DESIGN TOKENS
   ============================================ */

export const colors = {
  yellow: "#FFDE00",
  yellowLight: "#FFF4A3",
  yellowDark: "#E6C700",
  cream: "#F5F5F0",
  creamLight: "#FAFAF5",
  creamDark: "#EBEBE0",
  black: "#0D0D0D",
  blackLight: "#1A1A1A",
  blackMuted: "#2A2A2A",
  red: "#FF006E",
  cyan: "#00F5FF",
  purple: "#BF00FF",
  green: "#00FF87",
  gray: "#666666",
  grayLight: "#999999",
  grayDark: "#333333",
};

export const shadows = {
  sm: "4px 4px 0 0 #0D0D0D",
  md: "8px 8px 0 0 #0D0D0D",
  lg: "12px 12px 0 0 #0D0D0D",
  xl: "16px 16px 0 0 #0D0D0D",
  yellow: "8px 8px 0 0 #FFDE00",
  yellowLg: "12px 12px 0 0 #FFDE00",
  cyan: "8px 8px 0 0 #00F5FF",
  red: "8px 8px 0 0 #FF006E",
};

/* ============================================
   BRUTALIST BUTTON
   ============================================ */

interface BrutalButtonProps {
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "yellow" | "cyan" | "red";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function BrutalButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  disabled = false,
  icon,
  iconPosition = "left",
}: BrutalButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (!buttonRef.current || disabled) return;

    const el = buttonRef.current;

    const handleEnter = () => {
      gsap.to(el, {
        y: -4,
        x: -4,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        y: 0,
        x: 0,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleDown = () => {
      gsap.to(el, {
        y: 4,
        x: 4,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("mousedown", handleDown);
    el.addEventListener("mouseup", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("mousedown", handleDown);
      el.removeEventListener("mouseup", handleLeave);
    };
  }, [disabled]);

  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wider transition-all border-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = {
    primary: `bg-brutal-yellow text-brutal-black border-brutal-black`,
    dark: `bg-brutal-black text-brutal-yellow border-brutal-yellow`,
    outline: `bg-transparent text-brutal-black border-brutal-black hover:bg-brutal-black hover:text-brutal-yellow`,
    yellow: `bg-brutal-yellow text-brutal-black border-brutal-yellow shadow-brutal-yellow`,
    cyan: `bg-brutal-cyan text-brutal-black border-brutal-black`,
    red: `bg-brutal-red text-white border-brutal-black`,
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const shadowClasses = {
    primary: "shadow-brutal hover:shadow-brutal-lg",
    dark: "shadow-brutal-yellow hover:shadow-brutal-yellow-lg",
    outline: "shadow-brutal hover:shadow-brutal-lg",
    yellow: "shadow-brutal-yellow hover:shadow-brutal-yellow-lg",
    cyan: "shadow-brutal hover:shadow-brutal-lg",
    red: "shadow-brutal hover:shadow-brutal-lg",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    shadowClasses[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <a ref={buttonRef as React.RefObject<HTMLAnchorElement>} href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}

/* ============================================
   BRUTALIST CARD
   ============================================ */

interface BrutalCardProps {
  children: ReactNode;
  variant?: "cream" | "dark" | "yellow" | "cyan" | "red";
  hover?: boolean;
  className?: string;
  onClick?: () => void;
  padding?: "none" | "sm" | "md" | "lg";
}

export function BrutalCard({
  children,
  variant = "cream",
  hover = true,
  className = "",
  onClick,
  padding = "md",
}: BrutalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !hover) return;

    const card = cardRef.current;

    const handleEnter = () => {
      gsap.to(card, {
        y: -6,
        x: -6,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        y: 0,
        x: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, [hover]);

  const baseClasses = cn(
    "relative border-4 transition-all",
    onClick && "cursor-pointer"
  );

  const variantClasses = {
    cream: `bg-brutal-cream border-brutal-black shadow-brutal ${hover ? "hover:shadow-brutal-lg" : ""}`,
    dark: `bg-brutal-blackLight border-brutal-yellow shadow-brutal-yellow ${hover ? "hover:shadow-brutal-yellow-lg" : ""} text-brutal-cream`,
    yellow: `bg-brutal-yellow border-brutal-black shadow-brutal ${hover ? "hover:shadow-brutal-lg" : ""}`,
    cyan: `bg-brutal-cyan border-brutal-black shadow-brutal ${hover ? "hover:shadow-brutal-lg" : ""}`,
    red: `bg-brutal-red border-brutal-black shadow-brutal text-white ${hover ? "hover:shadow-brutal-lg" : ""}`,
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], paddingClasses[padding], className)}
    >
      {children}
    </div>
  );
}

/* ============================================
   BRUTALIST BADGE
   ============================================ */

interface BrutalBadgeProps {
  children: ReactNode;
  variant?: "yellow" | "cyan" | "red" | "purple" | "green" | "black";
  size?: "sm" | "md";
  className?: string;
}

export function BrutalBadge({
  children,
  variant = "yellow",
  size = "md",
  className = "",
}: BrutalBadgeProps) {
  const variantClasses = {
    yellow: "bg-brutal-yellow text-brutal-black border-brutal-black",
    cyan: "bg-brutal-cyan text-brutal-black border-brutal-black",
    red: "bg-brutal-red text-white border-brutal-black",
    purple: "bg-brutal-purple text-white border-brutal-black",
    green: "bg-brutal-green text-brutal-black border-brutal-black",
    black: "bg-brutal-black text-brutal-yellow border-brutal-yellow",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider border-2",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ============================================
   BRUTALIST TAG
   ============================================ */

interface BrutalTagProps {
  children: ReactNode;
  color?: "yellow" | "cyan" | "red" | "purple" | "green";
  className?: string;
}

export function BrutalTag({ children, color = "yellow", className = "" }: BrutalTagProps) {
  const colorClasses = {
    yellow: "text-brutal-yellow border-brutal-yellow/40 bg-brutal-yellow/10",
    cyan: "text-brutal-cyan border-brutal-cyan/40 bg-brutal-cyan/10",
    red: "text-brutal-red border-brutal-red/40 bg-brutal-red/10",
    purple: "text-brutal-purple border-brutal-purple/40 bg-brutal-purple/10",
    green: "text-brutal-green border-brutal-green/40 bg-brutal-green/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 border-2 font-mono text-xs font-semibold uppercase tracking-wide",
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ============================================
   BRUTALIST DIVIDER
   ============================================ */

interface BrutalDividerProps {
  variant?: "solid" | "dashed" | "yellow";
  className?: string;
}

export function BrutalDivider({ variant = "solid", className = "" }: BrutalDividerProps) {
  const variantClasses = {
    solid: "border-t-4 border-brutal-black",
    dashed: "border-t-4 border-dashed border-brutal-black",
    yellow: "border-t-4 border-brutal-yellow",
  };

  return <hr className={cn("w-full", variantClasses[variant], className)} />;
}

/* ============================================
   BRUTALIST SECTION
   ============================================ */

interface BrutalSectionProps {
  children: ReactNode;
  variant?: "cream" | "dark";
  className?: string;
  id?: string;
}

export function BrutalSection({
  children,
  variant = "cream",
  className = "",
  id,
}: BrutalSectionProps) {
  const variantClasses = {
    cream: "bg-brutal-cream",
    dark: "bg-brutal-blackLight text-brutal-cream",
  };

  return (
    <section id={id} className={cn("py-20 px-4", variantClasses[variant], className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

/* ============================================
   BRUTALIST HEADING
   ============================================ */

interface BrutalHeadingProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  underline?: boolean;
  className?: string;
}

export function BrutalHeading({
  children,
  size = "lg",
  underline = true,
  className = "",
}: BrutalHeadingProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl lg:text-6xl",
    xl: "text-5xl md:text-6xl lg:text-7xl",
  };

  return (
    <h2
      className={cn(
        "font-display font-black uppercase tracking-tight inline-block relative",
        sizeClasses[size],
        className
      )}
    >
      {children}
      {underline && (
        <span className="absolute -bottom-3 left-0 w-full h-2 bg-brutal-yellow" />
      )}
    </h2>
  );
}

/* ============================================
   BRUTALIST CALLOUT
   ============================================ */

interface BrutalCalloutProps {
  children: ReactNode;
  variant?: "yellow" | "cyan" | "red";
  title?: string;
  className?: string;
}

export function BrutalCallout({
  children,
  variant = "yellow",
  title,
  className = "",
}: BrutalCalloutProps) {
  const variantClasses = {
    yellow: "bg-brutal-yellow border-brutal-black",
    cyan: "bg-brutal-cyan border-brutal-black",
    red: "bg-brutal-red border-brutal-black text-white",
  };

  const shadowClasses = {
    yellow: "shadow-brutal",
    cyan: "shadow-brutal",
    red: "shadow-brutal",
  };

  return (
    <div
      className={cn(
        "p-6 border-4",
        variantClasses[variant],
        shadowClasses[variant],
        className
      )}
    >
      {title && (
        <div className="font-display font-bold uppercase tracking-wider mb-2 text-sm">
          {title}
        </div>
      )}
      <div className="text-base">{children}</div>
    </div>
  );
}

/* ============================================
   EXPORT ALL COMPONENTS
   ============================================ */

export default {
  BrutalButton,
  BrutalCard,
  BrutalBadge,
  BrutalTag,
  BrutalDivider,
  BrutalSection,
  BrutalHeading,
  BrutalCallout,
  colors,
  shadows,
};
