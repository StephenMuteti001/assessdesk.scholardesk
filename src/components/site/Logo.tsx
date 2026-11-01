import { BRAND, SITE } from '@/config/site';
import { cn } from '@/lib/utils';

type Variant = 'wordmark' | 'signature' | 'monogram';

const HEIGHTS: Record<Variant, string> = {
  wordmark: 'h-9',
  signature: 'h-9',
  monogram: 'h-9 w-9'
};

/**
 * AssessDesk currently runs on ScholarDesk brand artwork from /public/brand.
 * Swapping a file in that folder is enough to rebrand, no code changes needed.
 */
export function Logo({
  className = '',
  variant = 'wordmark',
  tone = 'default'




}: {className?: string;variant?: Variant;tone?: 'default' | 'inverse';}) {
  const src =
  variant === 'monogram' ?
  tone === 'inverse' ?
  BRAND.monogramReverse :
  BRAND.monogram :
  variant === 'signature' ?
  BRAND.signature :
  BRAND.wordmark;

  return (
    <img
    src={src}
    alt={SITE.parent}
    className={cn(
      HEIGHTS[variant],
      'w-auto shrink-0 object-contain',
      tone === 'inverse' && variant === 'signature' && 'brightness-0 invert',
      className
    )}
    loading="eager"
    decoding="async" />);


}

/** Full AssessDesk lockup: ScholarDesk mark + the AssessDesk product name. */
export function ProductLockup({
  tone = 'default',
  className = ''



}: {tone?: 'default' | 'inverse';className?: string;}) {
  const inverse = tone === 'inverse';
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
			<img
      src={inverse ? BRAND.monogramReverse : BRAND.monogram}
      alt=""
      aria-hidden="true"
      className="h-8 w-8 shrink-0 object-contain"
      loading="eager"
      decoding="async" />
      
			<span className="flex flex-col leading-none">
				<span className={cn('text-lg font-bold tracking-tight', inverse ? 'text-primary-foreground' : 'text-foreground')}>
					Assess<span className={inverse ? 'text-primary-foreground/70' : 'text-primary'}>Desk</span>
				</span>
				<span
        className={cn(
          'mt-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.18em]',
          inverse ? 'text-primary-foreground/55' : 'text-muted-foreground'
        )}>
          
					by ScholarDesk
				</span>
			</span>
		</span>);

}