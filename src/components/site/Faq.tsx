import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Faq } from '@/config/assessdesk';
import { cn } from '@/lib/utils';

export function FaqList({ faqs }: {faqs: Faq[];}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-md border border-border bg-background">
			{faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
						<h3>
							<button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-surface sm:px-6">
                
								<span className="text-base font-semibold text-foreground">{faq.q}</span>
								<Plus
                  className={cn('mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform duration-200', isOpen && 'rotate-45')} />
                
							</button>
						</h3>
						{isOpen ?
            <div className="px-5 pb-6 sm:px-6">
								<p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
							</div> :
            null}
					</div>);

      })}
		</div>);

}