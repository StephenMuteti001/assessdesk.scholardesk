import { ArrowRight, BadgeCheck, CheckCircle2, Lock, MessagesSquare, ScanSearch } from 'lucide-react';
import type { SeoInput } from '@/components/site/Seo';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';
import { Section, SectionHeading, IconChip, StatBlock, CTASection } from '@/components/site/Primitives';
import { ButtonLink } from '@/components/site/SiteButton';
import { RequestForm } from '@/components/site/RequestForm';
import { FaqList } from '@/components/site/Faq';
import { DFY_FAQS, DFY_PROCESS, DFY_TIERS } from '@/config/assessdesk';
import { IMAGES, SITE } from '@/config/site';
import { cn } from '@/lib/utils';

const title = 'Do My Exam For Me | A Vetted Expert Sits It For You | AssessDesk';
const description =
'Hand the assessment over entirely. A vetted, subject-matched ScholarDesk expert sits your exam, test, course or certification. Fixed quote agreed up front, funds held in escrow until you approve.';

const guarantees = [
{ icon: BadgeCheck, title: 'Identity and credential vetted', body: 'Every expert is verified in the exact subject and level before they are ever assigned work.' },
{ icon: Lock, title: 'Funds held, not paid', body: 'Your money sits in escrow until you have reviewed the outcome and approved it.' },
{ icon: MessagesSquare, title: 'One accountable record', body: 'Brief, messages, updates and outcome all live in a single order thread either side can point to.' },
{ icon: CheckCircle2, title: 'Agreed standard in writing', body: 'The target is set before the work starts, and mediation terms apply if it is not met.' }];


export default function DoMyExamForMe() {
  return (
    <>
			
      

			{/* Hero */}
			<section className="border-b border-border bg-background">
				<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
					<div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
						<div className="flex flex-col gap-6">
							<h1 className="text-4xl font-semibold leading-[1.14] lg:text-5xl">Do my exam for me</h1>
							<p className="text-lg leading-relaxed text-muted-foreground">
								Sometimes you do not want a tool. You want it handled. A vetted, subject-matched ScholarDesk expert sits the
								exam, test, course or certification for you, on the agreed date, to an agreed standard, with a coordinator
								beside the order the entire way. A fixed price is quoted before anything starts, and your funds are held in
								escrow until you approve the outcome.
							</p>
							<ul className="flex flex-col gap-3">
								{[
                'Quoted within a few hours, matched within a day',
                'Single sittings from $120; courses and certifications quoted',
                'You see the outcome before any payment is released',
                'Confidentiality agreement available on request'].
                map((item) =>
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
										{item}
									</li>
                )}
							</ul>
							<div className="mt-4 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
								<StatBlock value="Few hrs" label="Typical quote turnaround" />
								<StatBlock value="Escrow" label="Funds held until approval" />
								<StatBlock value="24/7" label="Coordinator support" />
							</div>
						</div>

						<div id="request" className="scroll-mt-24">
							<RequestForm />
						</div>
					</div>
				</div>
			</section>

			{/* Process */}
			<Section>
				<SectionHeading
          title="Five steps, and you hold the leverage at every one"
          description="Nothing about this is left to trust alone. Each stage has a named owner, a visible status and a defined next step, including what happens if the work is not right." />
        
				<ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
					{DFY_PROCESS.map((step) =>
          <li key={step.number} className="flex flex-col rounded-md border border-border bg-background p-6">
							<span className="font-mono text-2xl font-bold text-border">{step.number}</span>
							<h3 className="mt-4 text-base font-semibold">{step.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
						</li>
          )}
				</ol>
			</Section>

			{/* Pricing tiers */}
			<Section tone="surface" id="pricing" className="scroll-mt-24">
				<SectionHeading
          title="Quoted per assessment, never guessed at"
          description="Price depends on subject, level, duration, platform and proctoring type. We quote a fixed figure before anything starts, and we say so plainly when we cannot cover something." />
        
				<div className="mt-14 grid gap-6 lg:grid-cols-3">
					{DFY_TIERS.map((tier) =>
          <div
          key={tier.name}
          className={cn(
            'relative flex flex-col rounded-md border p-8',
            tier.featured ? 'border-primary bg-primary/[0.03]' : 'border-border bg-background'
          )}>
            
							{tier.featured ?
            <span className="absolute -top-3 left-8 rounded-sm bg-primary px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
									Most requested
								</span> :
            null}
							<h3 className="text-xl font-bold">{tier.name}</h3>
							<p className="mt-4 flex items-baseline gap-2">
								<span className="text-3xl font-bold tracking-tight">{tier.price}</span>
								<span className="text-sm text-muted-foreground">{tier.period}</span>
							</p>
							<p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tier.body}</p>
							<ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-border pt-6">
								{tier.features.map((f) =>
              <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
										{f}
									</li>
              )}
							</ul>
							<a
            href="#request"
            className={cn(
              'mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md px-7 text-sm font-medium transition-colors',
              tier.featured ?
              'bg-primary text-primary-foreground hover:bg-primary/90' :
              'border border-input bg-background hover:bg-accent'
            )}>
              
								Request a quote <ArrowRight className="h-4 w-4" />
							</a>
						</div>
          )}
				</div>
			</Section>

			{/* Guarantees */}
			<Section>
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<SectionHeading
            align="left"
            title="Credibility is a system, not a slogan"
            description="This service runs on the same managed infrastructure as the rest of ScholarDesk: experts vetted before assignment, work checked before it reaches you, and a support team standing behind every order." />
          
					<div className="grid gap-4 sm:grid-cols-2">
						{guarantees.map((g) =>
            <div key={g.title} className="flex flex-col gap-3 rounded-md border border-border bg-background p-5">
								<IconChip size="sm">
									<g.icon className="h-4 w-4" />
								</IconChip>
								<h3 className="text-sm font-semibold">{g.title}</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">{g.body}</p>
							</div>
            )}
					</div>
				</div>
			</Section>

			{/* Tool vs service */}
			<Section tone="soft">
				<div className="flex flex-col items-start gap-6 rounded-md border border-border bg-background p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
					<div className="flex items-start gap-5">
						<IconChip size="lg">
							<ScanSearch className="h-7 w-7" />
						</IconChip>
						<div className="max-w-2xl">
							<h2 className="text-2xl font-bold lg:text-3xl">Prefer to sit it yourself, with help?</h2>
							<p className="mt-3 text-base leading-relaxed text-muted-foreground">
								The AssessDesk tool keeps you in the chair and puts the answer on an invisible overlay beside the question, from
								$20 for 20 credits valid 24 hours. Same company, same standards, different level of involvement.
							</p>
						</div>
					</div>
					<ButtonLink size="lg" variant="outline" to="/demo" className="shrink-0">
						See the tool <ArrowRight className="h-4 w-4" />
					</ButtonLink>
				</div>
			</Section>

			{/* FAQ */}
			<Section tone="surface">
				<SectionHeading title="Before you hand it over" />
				<div className="mx-auto mt-12 max-w-4xl">
					<FaqList faqs={DFY_FAQS} />
				</div>
			</Section>

			<CTASection
        title="Send the details and we will tell you honestly"
        description="A coordinator reviews the assessment and the proctoring setup and comes back with a fixed price, a named expert profile and a straight answer on whether we can cover it."
        primaryLabel="Request a quote"
        primaryHref="#request"
        secondary={{ label: 'Compare with the tool', to: '/pricing' }} />
      
		</>);

}

export const seo: SeoInput = {
  title: title,
  description: description,
  path: "/do-my-exam-for-me",
  keywords: "do my exam for me, take my exam for me, pay someone to take my exam, hire someone for my online class, take my certification exam, exam taking service, online class help service",
  jsonLd: [
        breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Do My Exam For Me', path: '/do-my-exam-for-me' }]
        ),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Exam and assessment handling service',
          name: 'Do My Exam For Me',
          description,
          provider: { '@type': 'Organization', name: 'ScholarDesk', url: 'https://scholardesk.pro' },
          areaServed: 'Worldwide',
          url: `${SITE.domain}/do-my-exam-for-me`,
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '120', description: 'Single exam or test, from $120 per sitting' }
        },
        faqJsonLd(DFY_FAQS)]
        
};
