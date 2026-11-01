import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'ghost' | 'secondary' | 'inverse' | 'inverseOutline';
type Size = 'sm' | 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
  ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
  inverse: 'bg-primary-foreground text-primary-deep hover:bg-primary-foreground/90',
  inverseOutline: 'border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10'
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-sm',
  lg: 'h-11 px-7 text-sm'
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
			{children}
		</button>);

}

export function ButtonLink({
  to,
  hash,
  variant = 'primary',
  size = 'md',
  className,
  children
}: CommonProps & {to: string;hash?: string;}) {
  return (
    <Link to={to} {...(hash ? { hash } : {})} className={cn(base, variants[variant], sizes[size], className)}>
			{children}
		</Link>);

}

export function ButtonAnchor({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
			{children}
		</a>);

}