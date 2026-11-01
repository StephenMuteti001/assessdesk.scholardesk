import { cn } from '@/lib/utils';

/** A single key cap. */
export function Kbd({ children, tone = 'default' }: {children: string;tone?: 'default' | 'inverse';}) {
  return (
    <kbd
    className={cn(
      'inline-flex h-7 min-w-7 items-center justify-center rounded-sm border px-2 font-mono text-xs font-semibold',
      tone === 'inverse' ?
      'border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground' :
      'border-border bg-surface-strong text-foreground'
    )}>
      
			{children}
		</kbd>);

}

/** A full shortcut, rendered as key caps joined by thin plus signs. */
export function KeyCombo({ combo, tone = 'default' }: {combo: string[];tone?: 'default' | 'inverse';}) {
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
			{combo.map((key, i) =>
      <span key={`${key}-${i}`} className="inline-flex items-center gap-1">
					{i > 0 ?
        <span className={cn('text-xs', tone === 'inverse' ? 'text-primary-foreground/40' : 'text-muted-foreground')}>+</span> :
        null}
					<Kbd tone={tone}>{key}</Kbd>
				</span>
      )}
		</span>);

}