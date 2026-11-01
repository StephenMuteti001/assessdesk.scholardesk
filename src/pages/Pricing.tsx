import { ArrowRight, Check, Minus } from 'lucide-react';
import type { SeoInput } from '@/components/site/Seo';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { Section, SectionHeading, CTASection } from '@/components/site/Primitives';
import { ButtonAnchor, ButtonLink } from '@/components/site/SiteButton';
import { FaqList } from '@/components/site/Faq';
import { PLANS, PLAN_COMPARISON, PRICING_FAQS, TRUST_POINTS } from '@/config/assessdesk';
import { registerUrl } from '@/config/site';
import { cn } from '@/lib/utils';

const title = 'Pricing | AssessDesk by ScholarDesk';
const description =
'AssessDesk pricing is credit-based: 20 credits for 24 hours at $20, 60 credits for 30 days at $49, or 150 credits for 90 days at $119. One credit answers one question.';

function Cell({ value }: {value: string | boolean;}) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-success" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-border" aria-label="Not included" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export default function Pricing() {
  return (
    <>
			
      

			<section className="border-b border-border bg-hero">
				<div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
					<h1 className="text-4xl font-semibold leading-[1.14] lg:text-5xl">Buy credits for the time you need</h1>
					<p className="text-lg leading-relaxed text-muted-foreground">
						One credit answers one question. Pick a package, use your credits within its window, and buy another whenever you
						need more. Every package is the complete tool; only the number of credits and how long they last change.
					</p>
				</div>
			</section>

			{/* Plans */}
			<Section className="pt-16 lg:pt-20">
				<div className="grid gap-6 lg:grid-cols-3">
					{PLANS.map((plan) =>
          <div
          key={plan.slug}
          className={cn(
            'relative flex flex-col rounded-md border p-8',
            plan.featured ? 'border-primary bg-primary/[0.03]' : 'border-border bg-background'
          )}>
            
							{plan.featured ?
            <span className="absolute -top-3 left-8 rounded-sm bg-primary px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
									Most chosen
								</span> :
            null}

							<h2 className="text-xl font-bold">{plan.name}</h2>
							<p className="mt-1 text-sm leading-relaxed text-muted-foreground">{plan.tagline}</p>

							<p className="mt-6 flex items-baseline gap-2">
								<span className="text-4xl font-bold tracking-tight">{plan.price}</span>
								<span className="text-sm text-muted-foreground">{plan.period}</span>
							</p>
							<p className="mt-3 flex flex-wrap items-baseline gap-x-2 text-sm">
								<span className="font-semibold text-foreground">{plan.credits} credits</span>
								<span className="text-muted-foreground">valid for {plan.validity}</span>
							</p>

							<ButtonAnchor
              size="lg"
              variant={plan.featured ? 'primary' : 'outline'}
              href={registerUrl(plan.slug)}
              className="mt-7 w-full">
              
								{plan.cta} <ArrowRight className="h-4 w-4" />
							</ButtonAnchor>

							<ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-border pt-7">
								{plan.features.map((feature) =>
              <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
										<Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
										{feature}
									</li>
              )}
							</ul>
						</div>
          )}
				</div>

				<div className="mt-6 grid gap-6 rounded-md border border-border bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4">
					{TRUST_POINTS.map((t) =>
          <div key={t.label} className="flex items-start gap-3">
							<t.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
							<p className="text-sm leading-snug text-muted-foreground">{t.label}</p>
						</div>
          )}
				</div>
			</Section>

			{/* How credits work */}
			<Section>
				<SectionHeading title="How credits work" />
				<div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
					{[
          { t: '1 credit = 1 answer', b: 'Each answered question uses one credit. Your balance shows on the panel.' },
          { t: 'Counted per capture', b: 'When you snip, we count the questions inside the capture. A snip with three questions uses three credits.' },
          { t: 'Expire with the package', b: 'Credits last 24 hours, 30 days or 90 days from purchase. Buy a new package any time.' }].
          map((c) =>
          <div key={c.t} className="rounded-md border border-border bg-background p-6">
							<h3 className="text-base font-semibold">{c.t}</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
						</div>
          )}
				</div>
			</Section>

			{/* Comparison */}
			<Section tone="surface">
				<SectionHeading title="Compare the packages" />
				<div className="mt-12 overflow-x-auto rounded-md border border-border bg-background">
					<table className="w-full min-w-[640px] border-collapse text-left">
						<thead>
							<tr className="border-b border-border bg-surface">
								<th scope="col" className="px-5 py-4 text-sm font-semibold">
									Feature
								</th>
								<th scope="col" className="w-36 px-5 py-4 text-center text-sm font-semibold">
									Day Pass
								</th>
								<th scope="col" className="w-36 bg-primary/[0.04] px-5 py-4 text-center text-sm font-semibold text-primary">
									Monthly
								</th>
								<th scope="col" className="w-36 px-5 py-4 text-center text-sm font-semibold">
									Quarterly
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-border">
							{PLAN_COMPARISON.map((row) =>
              <tr key={row.feature}>
									<th scope="row" className="px-5 py-3.5 text-sm font-normal text-foreground">
										{row.feature}
									</th>
									<td className="px-5 py-3.5 text-center">
										<Cell value={row.session} />
									</td>
									<td className="bg-primary/[0.04] px-5 py-3.5 text-center">
										<Cell value={row.pro} />
									</td>
									<td className="px-5 py-3.5 text-center">
										<Cell value={row.term} />
									</td>
								</tr>
              )}
						</tbody>
					</table>
				</div>
			</Section>

			{/* Done for you */}
			<Section>
				<div className="flex flex-col items-start gap-6 rounded-md border border-primary/25 bg-primary/5 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
					<div className="max-w-2xl">
						<h2 className="text-2xl font-bold lg:text-3xl">Would you rather not sit it yourself?</h2>
						<p className="mt-3 text-base leading-relaxed text-muted-foreground">
							Our Do My Exam For Me service is quoted per assessment rather than listed, because the price depends on subject,
							level, duration, platform and proctoring type. Single sittings start from $120. Send the details and a coordinator
							comes back with a fixed price and a named expert.
						</p>
					</div>
					<ButtonLink size="lg" to="/do-my-exam-for-me" className="shrink-0">
						Request a quote <ArrowRight className="h-4 w-4" />
					</ButtonLink>
				</div>
			</Section>

			{/* FAQ */}
			<Section tone="surface">
				<SectionHeading title="Pricing questions" />
				<div className="mx-auto mt-12 max-w-4xl">
					<FaqList faqs={PRICING_FAQS} />
				</div>
			</Section>

			<CTASection
        title="Pick a package and be set up in minutes"
        description="Install, learn the hotkeys and run a guided dry pass against practice questions before anything is at stake."
        secondary={{ label: 'See the demo first', to: '/demo' }} />
      
		</>);

}

export const seo: SeoInput = {
  title: title,
  description: description,
  path: "/pricing",
  keywords: "assessdesk pricing, exam ai tool price, ai exam assistant cost, exam ai credits, day pass, monthly credits, quarterly credits, take my exam cost",
  jsonLd: [
        breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Pricing', path: '/pricing' }]
        ),
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'AssessDesk',
          description,
          brand: { '@type': 'Brand', name: 'ScholarDesk' },
          offers: PLANS.map((p) => ({
            '@type': 'Offer',
            name: p.name,
            price: p.price.replace('$', ''),
            priceCurrency: 'USD',
            description: `${p.credits} credits valid for ${p.validity}`
          }))
        },
        faqJsonLd(PRICING_FAQS)]
        
};
