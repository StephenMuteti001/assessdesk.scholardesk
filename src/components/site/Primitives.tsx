import { type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonAnchor, ButtonLink } from '@/components/site/SiteButton';
import { registerUrl } from '@/config/site';
import { cn } from '@/lib/utils';

export function Section({
  children,
  className = '',
  tone = 'default',
  id





}: {children: ReactNode;className?: string;tone?: 'default' | 'surface' | 'brand' | 'soft';id?: string;}) {
  const tones = {
    default: 'bg-background',
    surface: 'bg-surface',
    soft: 'bg-soft',
    brand: 'bg-primary-deep text-primary-foreground'
  } as const;

  return (
    <section id={id} className={cn(tones[tone], 'py-20 lg:py-28', className)}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
		</section>);

}


export function SectionHeading({
  title,
  description,
  align = 'center',
  tone = 'default'






}: {title: ReactNode;description?: ReactNode;align?: 'center' | 'left';tone?: 'default' | 'inverse';}) {
  return (
    <div className={cn('flex max-w-3xl flex-col gap-4', align === 'center' && 'mx-auto text-center')}>
			<h2 className={cn('text-3xl font-bold leading-tight lg:text-4xl', tone === 'inverse' && 'text-primary-foreground')}>{title}</h2>
			{description ?
      <p className={cn('text-lg leading-relaxed', tone === 'inverse' ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
					{description}
				</p> :
      null}
		</div>);

}

export function Card({ children, className = '' }: {children: ReactNode;className?: string;}) {
  return <div className={cn('rounded-md border border-border bg-background p-6', className)}>{children}</div>;
}

export function IconChip({
  children,
  size = 'md',
  tone = 'default'




}: {children: ReactNode;size?: 'sm' | 'md' | 'lg';tone?: 'default' | 'inverse' | 'success';}) {
  const sizes = { sm: 'h-9 w-9', md: 'h-12 w-12', lg: 'h-14 w-14' } as const;
  const tones = {
    default: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    inverse: 'bg-primary-foreground/10 text-primary-foreground'
  } as const;
  return <span className={cn('flex shrink-0 items-center justify-center rounded-md', sizes[size], tones[tone])}>{children}</span>;
}

export function StatBlock({ value, label, tone = 'default' }: {value: string;label: string;tone?: 'default' | 'inverse';}) {
  return (
    <div className="flex flex-col gap-1">
			<p className={cn('text-3xl font-bold lg:text-4xl', tone === 'inverse' ? 'text-primary-foreground' : 'text-foreground')}>{value}</p>
			<p className={cn('text-sm', tone === 'inverse' ? 'text-primary-foreground/70' : 'text-muted-foreground')}>{label}</p>
		</div>);

}

export function CTASection({
  title,
  description,
  primaryLabel = 'Get AssessDesk',
  primaryHref,
  secondary
}: {title: string;description: string;primaryLabel?: string;primaryHref?: string;secondary?: {label: string;to: string;};}) {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-24">
			<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
				<p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">{description}</p>
				<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
					<ButtonAnchor size="lg" variant="inverse" href={primaryHref ?? registerUrl()}>
						{primaryLabel}
						<ArrowRight className="h-4 w-4" />
					</ButtonAnchor>
					{secondary ?
          <ButtonLink size="lg" variant="inverseOutline" to={secondary.to}>
							{secondary.label}
						</ButtonLink> :
          null}
				</div>
			</div>
		</section>);

}
